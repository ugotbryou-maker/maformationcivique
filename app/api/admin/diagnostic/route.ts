/**
 * GET /api/admin/diagnostic
 * Exécute, une par une, les lectures dont dépendent les pages de l'espace
 * connecté, et renvoie le résultat ou l'erreur exacte de chacune.
 *
 * POURQUOI : Next masque les messages d'erreur des composants serveur en
 * production. Une page qui échoue n'affiche qu'une référence, et la cause
 * reste invisible depuis le navigateur. Cette route la rend lisible.
 *
 * Réservée aux administrateurs. Elle ne renvoie aucune donnée personnelle :
 * seulement des compteurs, des noms de colonnes et des messages d'erreur.
 */

export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';

type Verdict = { ok: true; lignes: number } | { ok: false; erreur: string };

/** Le constructeur de requête Supabase est « thenable » sans être une Promise :
 *  on l'attend tel quel plutôt que de contraindre son type. */
async function essai(
  fn: () => PromiseLike<{ data: unknown[] | null; error: { message: string } | null }>,
): Promise<Verdict> {
  try {
    const { data, error } = await fn();
    if (error) return { ok: false, erreur: error.message };
    return { ok: true, lignes: data?.length ?? 0 };
  } catch (err) {
    return { ok: false, erreur: err instanceof Error ? err.message : String(err) };
  }
}

export async function GET() {
  const rapport: Record<string, unknown> = {
    environnement: {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'ABSENTE',
      SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY
        ? `présente (${process.env.SUPABASE_SERVICE_ROLE_KEY.length} caractères${
            process.env.SUPABASE_SERVICE_ROLE_KEY !== process.env.SUPABASE_SERVICE_ROLE_KEY.trim()
              ? ', AVEC ESPACE PARASITE' : ''})`
        : 'ABSENTE',
      BREVO_API_KEY: process.env.BREVO_API_KEY ? 'présente' : 'absente',
      CRON_SECRET: process.env.CRON_SECRET ? 'présente' : 'absente',
      NODE_VERSION: process.version,
    },
  };

  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!isAdminEmail(user?.email)) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });
    }
    rapport.compte = user?.email;
  } catch (err) {
    rapport.authentification = err instanceof Error ? err.message : String(err);
    return NextResponse.json(rapport, { status: 500 });
  }

  let s: ReturnType<typeof createServiceRoleClient>;
  try {
    s = createServiceRoleClient();
  } catch (err) {
    rapport.clientServiceRole = err instanceof Error ? err.message : String(err);
    return NextResponse.json(rapport, { status: 500 });
  }

  // Chaque requête correspond à une lecture réellement faite par une page.
  rapport.lectures = {
    'cabinets (colonnes facturation + partenariat)': await essai(() =>
      s.from('cabinets').select('id, name, contact_email, tier, max_invitations, sub_end_at, created_at, billing_mode, prix_activation_cents, member_plan, fact_raison_sociale, fact_adresse')),
    'users (membres de cabinet)': await essai(() =>
      s.from('users').select('id, cabinet_id, cabinet_role, last_active, demarche').not('cabinet_id', 'is', null)),
    'cabinet_invites (facturation)': await essai(() =>
      s.from('cabinet_invites').select('id, cabinet_id, email, redeemed_at, redeemed_user_id, invited_by, facture_le, facture_ref, created_at')),
    'progression': await essai(() =>
      s.from('progression').select('user_id, module_slug, lesson_slug, completed')),
    'exam_results': await essai(() =>
      s.from('exam_results').select('user_id, exam_level, score, total_q, passed, updated_at')),
    'factures': await essai(() =>
      s.from('factures').select('id, numero, statut, beneficiaires, envoyee_le, envoyee_a')),
    'facturation_emetteur': await essai(() =>
      s.from('facturation_emetteur').select('*')),
    'leads_eligibilite': await essai(() =>
      s.from('leads_eligibilite').select('id')),
    'users (colonnes relance)': await essai(() =>
      s.from('users').select('id, relance_le, relance_motif').limit(1)),
  };

  // Chargement des données statiques : un module de données corrompu ou trop
  // volumineux se manifesterait ici plutôt que dans une page.
  try {
    const { modules } = await import('@/data/modules');
    const { compteursLangue } = await import('@/data/langue/compteurs');
    const c = compteursLangue();
    rapport.donnees = {
      modulesCiviques: modules.length,
      modulesLangue: c.totalModules,
      leconsLangue: c.totalLecons,
    };
  } catch (err) {
    rapport.donnees = { erreur: err instanceof Error ? err.message : String(err) };
  }

  // ── Chaîne de calcul des pages cabinet ────────────────────────────────
  // Les lectures passent toutes, donc l'exception vient d'après : du calcul
  // ou du rendu. On rejoue ici le calcul exact de chaque page, cabinet par
  // cabinet, pour isoler lequel échoue et sur quoi.
  try {
    const { calculerProgression, voletDuPlan } = await import('@/lib/progression');
    const { data: cabs } = await s.from('cabinets').select('*');
    const { data: membres } = await s.from('users')
      .select('id, name, email, plan, cabinet_id, cabinet_role, last_active, demarche, xp')
      .not('cabinet_id', 'is', null);
    const { data: prog } = await s.from('progression')
      .select('user_id, module_slug, lesson_slug, completed');
    const { data: exam } = await s.from('exam_results')
      .select('user_id, exam_level, score, total_q, passed, updated_at');

    const parCabinet: Record<string, unknown> = {};
    for (const c of cabs ?? []) {
      try {
        const siens = (membres ?? []).filter((m) => m.cabinet_id === c.id);
        const volet = voletDuPlan(null, c.member_plan);
        const calculs = siens.map((m) => {
          const pr = calculerProgression(
            (prog ?? []).filter((x) => x.user_id === m.id),
            volet, m.demarche,
            (exam ?? []).filter((x) => x.user_id === m.id),
          );
          return {
            membre: m.email,
            preparation: pr.preparation.pct,
            source: pr.preparation.source,
            lecons: pr.leconsTerminees,
            niveau: pr.niveau,
          };
        });
        parCabinet[c.name] = { volet, membres: calculs.length, calculs };
      } catch (err) {
        parCabinet[c.name] = { ECHEC: err instanceof Error ? `${err.name}: ${err.message}` : String(err) };
      }
    }
    rapport.calculsCabinets = parCabinet;
  } catch (err) {
    rapport.calculsCabinets = { ECHEC_GLOBAL: err instanceof Error ? `${err.name}: ${err.message}\n${err.stack?.split('\n').slice(0, 6).join(' | ')}` : String(err) };
  }

  // ── Formatages ───────────────────────────────────────────────────────
  // Une erreur d'Intl ne dépend pas des données mais du moteur : elle se
  // manifesterait ici et nulle part ailleurs.
  const formats: Record<string, string> = {};
  for (const [nom, fn] of [
    ['euro sans fraction', () => (120).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 })],
    ['euro deux décimales', () => (120.5).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })],
    ['date courte', () => new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })],
    ['date longue', () => new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })],
    ['mois', () => new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })],
    ['heure Paris', () => new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', hour: 'numeric', hour12: false }).format(new Date())],
  ] as [string, () => string][]) {
    try { formats[nom] = fn(); }
    catch (err) { formats[nom] = `ÉCHEC — ${err instanceof Error ? err.message : String(err)}`; }
  }
  rapport.formatages = formats;

  // ── Rendu réel des composants partagés ───────────────────────────────
  // Dernière zone non couverte : une exception levée pendant le rendu d'un
  // composant enfant n'est pas rattrapée par le try du corps de page. On
  // rend donc ici chaque brique avec des valeurs réalistes, y compris les
  // cas limites (chaîne vide, zéro, NaN) qui pourraient venir des données.
  const rendus: Record<string, string> = {};
  try {
    const { renderToStaticMarkup } = await import('react-dom/server');
    const ui = await import('@/components/admin/ui');
    const React = (await import('react')).default;

    const cas: [string, () => React.ReactElement][] = [
      ['Kpi', () => React.createElement(ui.Kpi, { teinte: 'sky', icon: null, label: 'Test', value: '42', sub: 'sous-titre' })],
      ['Carte', () => React.createElement(ui.Carte, { titre: 'Titre', indice: 'indice', children: 'contenu' })],
      ['Identite normale', () => React.createElement(ui.Identite, { principal: 'Edeline Cineus', secondaire: 'e@x.fr' })],
      ['Identite vide', () => React.createElement(ui.Identite, { principal: '', secondaire: null })],
      ['Jauge 0', () => React.createElement(ui.Jauge, { pct: 0 })],
      ['Jauge NaN', () => React.createElement(ui.Jauge, { pct: Number.NaN })],
      ['Stat', () => React.createElement(ui.Stat, { n: 12, l: 'libellé' })],
      ['Repartition vide', () => React.createElement(ui.Repartition, { parts: [] })],
      ['Vide', () => React.createElement(ui.Vide, { texte: 'rien' })],
    ];

    for (const [nom, fabrique] of cas) {
      try {
        const html = renderToStaticMarkup(fabrique());
        rendus[nom] = `ok (${html.length} octets)`;
      } catch (err) {
        rendus[nom] = `ÉCHEC — ${err instanceof Error ? `${err.name}: ${err.message}` : String(err)}`;
      }
    }
  } catch (err) {
    rendus['chargement'] = `ÉCHEC — ${err instanceof Error ? err.message : String(err)}`;
  }
  rapport.rendus = rendus;

  const echecs = Object.entries(rapport.lectures as Record<string, Verdict>)
    .filter(([, v]) => !v.ok)
    .map(([k, v]) => `${k} → ${(v as { erreur: string }).erreur}`);

  const autresEchecs = [
    ...Object.entries(rapport.rendus as Record<string, string>)
      .filter(([, v]) => v.startsWith('ÉCHEC')).map(([k, v]) => `rendu ${k} → ${v}`),
    ...Object.entries(rapport.formatages as Record<string, string>)
      .filter(([, v]) => v.startsWith('ÉCHEC')).map(([k, v]) => `format ${k} → ${v}`),
    ...Object.entries((rapport.calculsCabinets ?? {}) as Record<string, { ECHEC?: string }>)
      .filter(([, v]) => v && typeof v === 'object' && 'ECHEC' in v)
      .map(([k, v]) => `calcul ${k} → ${v.ECHEC}`),
  ];

  const tous = [...echecs, ...autresEchecs];
  return NextResponse.json({
    ...rapport,
    echecs: tous,
    conclusion: tous.length ? 'ÉCHECS DÉTECTÉS' : 'tout passe côté données, calcul, formatage et rendu',
  });
}
