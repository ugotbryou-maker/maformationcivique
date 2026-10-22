/**
 * POST /api/cabinet/rapport-mensuel
 * Envoie à chaque administrateur de cabinet le point mensuel sur ses clients.
 *
 * Le cabinet est le client payant : c'est lui qui a le téléphone de ses
 * clients et la légitimité pour les relancer. Ce rapport lui donne la liste
 * nominative des dormants, et sert d'argument au renouvellement en montrant
 * ce que l'abonnement produit.
 *
 * GET : simulation, ne poste aucun e-mail.
 * Authentification : administrateur connecté, ou CRON_SECRET (planificateur).
 *
 * Horaire : 19 h, heure de Paris. La tâche est déclenchée à deux heures UTC
 * différentes — l'une correspond à 19 h en été, l'autre en hiver — et c'est
 * ce code qui écarte le mauvais déclenchement. Un administrateur peut forcer
 * l'envoi avec ?force=1.
 */

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';
import { calculerProgression, voletDuPlan } from '@/lib/progression';
import { sendEmail, rapportCabinetTemplate, type LigneRapport } from '@/lib/brevo';
import { getAppUrl } from '@/lib/app-url';
import { estHeureDEnvoi } from '@/lib/horaire-envoi';

async function autorise(req: NextRequest): Promise<boolean> {
  // .trim() des deux côtés : une variable d'environnement collée avec un
  // espace ou un retour à la ligne invisible ferait échouer la comparaison
  // sans rien dire, et la tâche planifiée répondrait 403 tous les jours.
  const secret = process.env.CRON_SECRET?.trim();
  const fourni = req.headers.get('authorization')?.trim();
  if (secret && fourni === `Bearer ${secret}`) return true;
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  return isAdminEmail(user?.email);
}

function jours(d: string | null): number {
  return d ? Math.floor((Date.now() - new Date(d).getTime()) / 86400000) : -1;
}

async function construire(appUrl: string) {
  const s = createServiceRoleClient();

  const [{ data: cabinets }, { data: membres }, { data: progression }] = await Promise.all([
    s.from('cabinets').select('id, name, member_plan, sub_end_at'),
    s.from('users').select('id, name, email, cabinet_id, cabinet_role, last_active, created_at, demarche').not('cabinet_id', 'is', null),
    s.from('progression').select('user_id, module_slug, lesson_slug, completed'),
  ]);

  const { data: examens } = await s
    .from('exam_results').select('user_id, score, total_q, passed');
  const examParUser = new Map<string, { passes: number; reussis: number }>();
  const examResultats = new Map<string, { score: number; total_q: number; passed: boolean | null }[]>();
  for (const e of examens ?? []) {
    const v = examParUser.get(e.user_id) ?? { passes: 0, reussis: 0 };
    v.passes += 1;
    if (e.passed) v.reussis += 1;
    examParUser.set(e.user_id, v);
    const l = examResultats.get(e.user_id) ?? [];
    l.push({ score: e.score, total_q: e.total_q, passed: e.passed });
    examResultats.set(e.user_id, l);
  }

  const progParUser = new Map<string, NonNullable<typeof progression>>();
  for (const p of progression ?? []) {
    const l = progParUser.get(p.user_id) ?? [];
    l.push(p);
    progParUser.set(p.user_id, l);
  }

  const mois = new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  const rapports: {
    cabinetId: string; cabinet: string; destinataires: string[];
    sujet: string; html: string; stats: Record<string, number>;
  }[] = [];

  for (const c of cabinets ?? []) {
    const siens = (membres ?? []).filter((m) => m.cabinet_id === c.id);
    const admins = siens.filter((m) => m.cabinet_role === 'admin');
    const clients = siens.filter((m) => m.cabinet_role !== 'admin');

    // Un cabinet sans client n'a rien à lire : lui écrire chaque mois pour
    // lui annoncer zéro le pousserait à se désabonner du rapport.
    if (clients.length === 0 || admins.length === 0) continue;

    const volet = voletDuPlan(null, c.member_plan);
    const lignes = clients.map((m) => {
      const resultats = examResultats.get(m.id) ?? [];
      const p = calculerProgression(progParUser.get(m.id) ?? [], volet, m.demarche, resultats);
      const ex = examParUser.get(m.id) ?? { passes: 0, reussis: 0 };

      // On annonce ce qui a été fait, pas la part de ce qui reste. « 6 leçons
      // et 3 examens blancs » décrit un client engagé ; « 11 % » décrit un
      // échec. Les deux sont vrais, le premier est informatif.
      const morceaux: string[] = [];
      morceaux.push(p.leconsTerminees === 0
        ? 'aucune leçon terminée'
        : `${p.leconsTerminees} leçon${p.leconsTerminees > 1 ? 's' : ''} terminée${p.leconsTerminees > 1 ? 's' : ''}`);
      if (ex.passes > 0) {
        morceaux.push(`${ex.passes} examen${ex.passes > 1 ? 's' : ''} blanc${ex.passes > 1 ? 's' : ''} · meilleur score ${p.preparation.pct} %`);
      } else if (p.moduleEnCours) {
        morceaux.push(`${p.moduleEnCours.titre} à ${p.moduleEnCours.pct} %`);
      }
      if (volet === 'complet' && p.civique.pct > 0 && p.langue.pct > 0) {
        morceaux.push(`civique ${p.civique.pct} % · ${p.niveau} ${p.langue.pct} %`);
      }

      return {
        nom: m.name || m.email || 'Client',
        progression: p.preparation.pct,
        detail: morceaux.join(' · '),
        joursInactif: jours(m.last_active),
      } as LigneRapport;
    });

    const dormants = lignes
      .filter((l) => l.joursInactif < 0 || l.joursInactif > 21)
      .sort((a, b) => b.joursInactif - a.joursInactif)
      .slice(0, 12);

    // « Ils progressent » : venus récemment ET ayant produit quelque chose —
    // une leçon ou un examen. Se limiter au pourcentage excluait les clients
    // qui ne font que s'entraîner aux examens blancs.
    const progressent = lignes
      .filter((l) => l.joursInactif >= 0 && l.joursInactif <= 21
        && !l.detail.startsWith('aucune leçon terminée'))
      .sort((a, b) => b.progression - a.progression)
      .slice(0, 8);

    const il30j = Date.now() - 30 * 86400000;
    const stats = {
      clients: clients.length,
      actifs: clients.filter((m) => m.last_active && new Date(m.last_active).getTime() >= il30j).length,
      prets: lignes.filter((l) => l.progression >= 80).length,
      dormants: lignes.filter((l) => l.joursInactif < 0 || l.joursInactif > 21).length,
      nouveaux: clients.filter((m) => m.created_at && new Date(m.created_at).getTime() >= il30j).length,
      lecons: clients.reduce((a, m) =>
        a + calculerProgression(progParUser.get(m.id) ?? [], volet, m.demarche).leconsTerminees, 0),
      examens: clients.reduce((a, m) => a + (examParUser.get(m.id)?.passes ?? 0), 0),
    };

    rapports.push({
      cabinetId: c.id,
      cabinet: c.name,
      destinataires: admins.map((a) => a.email).filter((e): e is string => !!e),
      sujet: `${c.name} — vos clients en ${mois}`,
      html: rapportCabinetTemplate(c.name, mois, stats, dormants, progressent, `${appUrl}/cabinet`),
      stats,
    });
  }

  return rapports;
}

export async function GET(req: NextRequest) {
  if (!await autorise(req)) return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });
  const rapports = await construire(await getAppUrl());
  return NextResponse.json({
    simulation: true,
    cabinets: rapports.length,
    detail: rapports.map((r) => ({
      cabinet: r.cabinet, destinataires: r.destinataires, stats: r.stats,
    })),
  });
}

export async function POST(req: NextRequest) {
  try {
    if (!await autorise(req)) return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });

    // Le planificateur passe deux fois ; on ne retient que le passage qui
    // tombe à 19 h à Paris.
    const force = req.nextUrl.searchParams.get('force') === '1';
    const { envoyer, heure } = estHeureDEnvoi(force);
    if (!envoyer) {
      return NextResponse.json({ ok: true, ignore: true, heureParis: heure, envoyes: [] });
    }

    const rapports = await construire(await getAppUrl());
    const envoyes: string[] = [];
    const erreurs: string[] = [];

    for (const r of rapports) {
      try {
        await sendEmail({
          to: r.destinataires.map((email) => ({ email })),
          subject: r.sujet,
          htmlContent: r.html,
        });
        envoyes.push(r.cabinet);
      } catch (e) {
        // Un cabinet en échec ne doit pas empêcher les suivants de partir.
        erreurs.push(`${r.cabinet} : ${(e as Error).message}`);
      }
    }

    if (erreurs.length) console.error('[rapport-mensuel] échecs', erreurs);

    return NextResponse.json({ ok: erreurs.length === 0, envoyes, erreurs });
  } catch (err) {
    console.error('[rapport-mensuel] erreur', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
