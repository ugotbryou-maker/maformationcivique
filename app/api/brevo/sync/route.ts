/**
 * POST /api/brevo/sync
 * Pousse tous les comptes dans Brevo avec leurs attributs de segmentation.
 *
 * Deux appelants possibles :
 *  — un administrateur connecté (bouton dans /admin) ;
 *  — le planificateur Vercel, authentifié par l'en-tête Authorization avec
 *    CRON_SECRET. Sans ce second chemin, la synchronisation dépendrait de
 *    quelqu'un qui pense à cliquer, ce qui ne tient pas une automatisation.
 *
 * GET renvoie le même travail à blanc (aucun envoi), pour vérifier ce qui
 * partirait avant de l'envoyer.
 */

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';
import { calculerProgression, voletDuPlan } from '@/lib/progression';
import { realignerMembresCabinet } from '@/lib/acces-cabinet';
import {
  creerAttributs, envoyerContacts, palierDe, dateBrevo, type ContactBrevo,
} from '@/lib/brevo-contacts';

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

async function construire() {
  const s = createServiceRoleClient();

  // Avant de décrire les comptes, on s'assure qu'ils ont bien l'accès que
  // leur cabinet leur promet : un membre resté en deçà fausserait à la fois
  // son parcours et les relances calculées sur sa progression.
  const correctionsAcces = await realignerMembresCabinet(s);
  if (correctionsAcces.length) {
    console.log('[brevo/sync] accès cabinet réalignés :',
      correctionsAcces.map((c) => `${c.email} ${c.avant}->${c.apres}`).join(', '));
  }

  const [{ data: users }, { data: cabinets }, { data: progression }, { data: exams }] =
    await Promise.all([
      s.from('users').select('id, email, name, plan, cabinet_id, cabinet_role, created_at, last_active, xp, demarche, telephone'),
      s.from('cabinets').select('id, name, member_plan'),
      s.from('progression').select('user_id, module_slug, lesson_slug, completed'),
      s.from('exam_results').select('user_id, exam_level, score, total_q, passed, updated_at'),
    ]);

  const cab = new Map((cabinets ?? []).map((c) => [c.id, c]));

  // Regroupements en mémoire : une requête par utilisateur multiplierait les
  // allers-retours par le nombre de comptes.
  const progParUser = new Map<string, typeof progression>();
  for (const p of progression ?? []) {
    const l = progParUser.get(p.user_id) ?? [];
    l.push(p);
    progParUser.set(p.user_id, l);
  }
  const examParUser = new Map<string, NonNullable<typeof exams>>();
  for (const e of exams ?? []) {
    const l = examParUser.get(e.user_id) ?? [];
    l.push(e);
    examParUser.set(e.user_id, l);
  }

  const maintenant = Date.now();
  const contacts: ContactBrevo[] = [];

  for (const u of users ?? []) {
    if (!u.email) continue;

    const cabinet = u.cabinet_id ? cab.get(u.cabinet_id) : null;
    const volet = voletDuPlan(u.plan, cabinet?.member_plan);
    const ex = examParUser.get(u.id) ?? [];
    const prog = calculerProgression(progParUser.get(u.id) ?? [], volet, u.demarche, ex);
    const dernier = [...ex].sort((a, b) =>
      String(b.updated_at ?? '').localeCompare(String(a.updated_at ?? '')))[0];
    const meilleur = ex.reduce(
      (a, e) => Math.max(a, Math.round((e.score / (e.total_q || 1)) * 100)), 0);

    const joursInactif = u.last_active
      ? Math.floor((maintenant - new Date(u.last_active).getTime()) / 86400000)
      : -1;   // -1 distingue « jamais venu » de « venu aujourd'hui »

    contacts.push({
      email: u.email.toLowerCase().trim(),
      attributes: {
        PRENOM: (u.name ?? '').trim().split(' ')[0] || '',
        NOM: (u.name ?? '').trim().split(' ').slice(1).join(' '),
        OFFRE: u.plan ?? 'free',
        VOLET: volet,
        CABINET: cabinet?.name ?? '',
        EST_CABINET: !!u.cabinet_id,
        INSCRIT_LE: dateBrevo(u.created_at),
        DERNIERE_VISITE: dateBrevo(u.last_active),
        JOURS_INACTIF: joursInactif,
        LECONS_FAITES: prog.global.faites,
        LECONS_TOTAL: prog.global.total,
        PROGRESSION: prog.global.pct,
        PROGRESSION_CIV: prog.civique.pct,
        PROGRESSION_LNG: prog.langue.pct,
        NIVEAU_LANGUE: prog.niveau,
        LECONS_TERMINEES: prog.leconsTerminees,
        PREPARATION: prog.preparation.pct,
        PREPARATION_SOURCE: prog.preparation.source,
        MODULES_TERMINES: prog.modulesTermines,
        // Le palier suit la préparation : c'est sur elle que doivent se
        // déclencher les félicitations, pas sur la part du catalogue lue.
        PALIER: palierDe(prog.preparation.pct),
        EXAMENS_PASSES: ex.length,
        EXAMENS_REUSSIS: ex.filter((e) => e.passed).length,
        MEILLEUR_SCORE: meilleur,
        DERNIER_EXAMEN: dernier ? (dernier.passed ? 'reussi' : 'echoue') : 'aucun',
        XP: u.xp ?? 0,
        DEMARCHE: u.demarche ?? '',
        TELEPHONE_CONTACT: u.telephone ?? '',
      },
    });
  }

  return contacts;
}

export async function GET(req: NextRequest) {
  if (!await autorise(req)) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });
  }
  const contacts = await construire();
  return NextResponse.json({
    simulation: true,
    contacts: contacts.length,
    apercu: contacts.slice(0, 3),
  });
}

export async function POST(req: NextRequest) {
  try {
    if (!await autorise(req)) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });
    }
    if (!process.env.BREVO_API_KEY) {
      return NextResponse.json({ error: 'BREVO_API_KEY absente' }, { status: 503 });
    }

    // Les attributs doivent exister avant l'import, sinon Brevo les ignore
    // silencieusement et les contacts arrivent sans rien pour les segmenter.
    const attributs = await creerAttributs();

    const contacts = await construire();
    const listId = process.env.BREVO_LIST_ID ? Number(process.env.BREVO_LIST_ID) : undefined;
    const envoi = await envoyerContacts(contacts, listId);

    if (envoi.erreurs.length) {
      console.error('[brevo/sync] lots en échec', envoi.erreurs);
    }

    return NextResponse.json({
      ok: envoi.erreurs.length === 0,
      contacts: contacts.length,
      envoyes: envoi.envoyes,
      attributsCrees: attributs.crees,
      erreurs: envoi.erreurs,
    });
  } catch (err) {
    console.error('[brevo/sync] erreur', err);
    return NextResponse.json({ error: (err as Error).message ?? 'Erreur serveur' }, { status: 500 });
  }
}
