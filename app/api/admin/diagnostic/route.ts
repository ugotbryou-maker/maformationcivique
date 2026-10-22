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

  const echecs = Object.entries(rapport.lectures as Record<string, Verdict>)
    .filter(([, v]) => !v.ok)
    .map(([k, v]) => `${k} → ${(v as { erreur: string }).erreur}`);

  return NextResponse.json({ ...rapport, echecs, conclusion: echecs.length ? 'ÉCHECS DÉTECTÉS' : 'toutes les lectures passent' });
}
