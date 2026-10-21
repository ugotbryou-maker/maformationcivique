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
 */

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';
import { calculerProgression, voletDuPlan } from '@/lib/progression';
import { sendEmail, rapportCabinetTemplate, type LigneRapport } from '@/lib/brevo';
import { getAppUrl } from '@/lib/app-url';

async function autorise(req: NextRequest): Promise<boolean> {
  const secret = process.env.CRON_SECRET;
  if (secret && req.headers.get('authorization') === `Bearer ${secret}`) return true;
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
    s.from('users').select('id, name, email, cabinet_id, cabinet_role, last_active, created_at').not('cabinet_id', 'is', null),
    s.from('progression').select('user_id, module_slug, lesson_slug, completed'),
  ]);

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
      const p = calculerProgression(progParUser.get(m.id) ?? [], volet);
      return {
        nom: m.name || m.email || 'Client',
        progression: p.global.pct,
        detail: volet === 'complet'
          ? `civique ${p.civique.pct} % · français ${p.langue.pct} %`
          : `${p.global.faites} leçons sur ${p.global.total}`,
        joursInactif: jours(m.last_active),
      } as LigneRapport;
    });

    const dormants = lignes
      .filter((l) => l.joursInactif < 0 || l.joursInactif > 21)
      .sort((a, b) => b.joursInactif - a.joursInactif)
      .slice(0, 12);

    const progressent = lignes
      .filter((l) => l.joursInactif >= 0 && l.joursInactif <= 21 && l.progression > 0)
      .sort((a, b) => b.progression - a.progression)
      .slice(0, 8);

    const il30j = Date.now() - 30 * 86400000;
    const stats = {
      clients: clients.length,
      actifs: clients.filter((m) => m.last_active && new Date(m.last_active).getTime() >= il30j).length,
      prets: lignes.filter((l) => l.progression >= 80).length,
      dormants: lignes.filter((l) => l.joursInactif < 0 || l.joursInactif > 21).length,
      nouveaux: clients.filter((m) => m.created_at && new Date(m.created_at).getTime() >= il30j).length,
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
