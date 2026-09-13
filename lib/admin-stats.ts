import { createServiceRoleClient } from '@/lib/supabase-server';
import { STRIPE_PLANS } from '@/lib/stripe';

/**
 * Agrégats du tableau de bord interne.
 *
 * ⚠️ Ce module lit la base avec la clé de service : il ne doit être appelé que
 * depuis un composant serveur déjà protégé par isAdminEmail(). Aucune de ces
 * données ne doit transiter vers le client autrement que sous forme agrégée
 * ou volontairement affichée.
 *
 * Les montants proviennent de STRIPE_PLANS : jamais de prix codé en dur ici,
 * pour que le tableau de bord suive automatiquement les changements de tarif.
 */

const PRIX = {
  premium: STRIPE_PLANS.premium_monthly.price / 100,
  langue: STRIPE_PLANS.langue_monthly.price / 100,
  bundle: STRIPE_PLANS.bundle_monthly.price / 100,
  lifetime: STRIPE_PLANS.lifetime_bundle.price / 100,
} as const;

const TIER_PRIX_ANNUEL: Record<string, number> = {
  starter: 390, pro: 990, cabinet_plus: 1990, reseau: 3990,
};

export interface UserRow {
  id: string;
  email: string | null;
  name: string | null;
  plan: string | null;
  sub_end_at: string | null;
  created_at: string | null;
  last_active: string | null;
  demarche: string | null;
  langue_niveau: string | null;
  telephone: string | null;
  cabinet_id: string | null;
  onboarding_done: boolean | null;
  accompagne: boolean | null;
}

function joursDepuis(n: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
}

/** Un achat « à vie » se reconnaît à l'absence d'échéance sur un plan bundle. */
export function estLifetime(u: { plan: string | null; sub_end_at: string | null }): boolean {
  return u.plan === 'bundle' && !u.sub_end_at;
}

export async function getAdminStats() {
  const s = createServiceRoleClient();

  const [users, cabinets, invites, progression, exams, badges, apercuLeads, consents] =
    await Promise.all([
      s.from('users').select('id, email, name, plan, sub_end_at, created_at, last_active, demarche, langue_niveau, telephone, cabinet_id, onboarding_done, accompagne').order('created_at', { ascending: false }),
      s.from('cabinets').select('id, name, contact_email, tier, max_invitations, sub_end_at, created_at, member_plan, billing_mode, prix_activation_cents'),
      s.from('cabinet_invites').select('id, cabinet_id, email, redeemed_at, redeemed_user_id, facture_le, created_at'),
      s.from('progression').select('id, user_id, completed, completed_at'),
      s.from('exam_results').select('id, user_id, exam_level, score, total_q, passed, updated_at'),
      s.from('user_badges').select('id, user_id'),
      s.from('apercu_leads').select('id, cabinet_name, lead_name, lead_email, lead_phone, domain, consented_at, created_at').order('created_at', { ascending: false }),
      s.from('lifetime_consents').select('id, accepted_at'),
    ]);

  const u = (users.data ?? []) as UserRow[];
  const j1 = joursDepuis(1), j7 = joursDepuis(7), j30 = joursDepuis(30);
  const apres = (d: string | null, seuil: Date) => !!d && new Date(d) >= seuil;

  // ── Acquisition ────────────────────────────────────────────────────────
  const nouveaux = {
    j1: u.filter((x) => apres(x.created_at, j1)).length,
    j7: u.filter((x) => apres(x.created_at, j7)).length,
    j30: u.filter((x) => apres(x.created_at, j30)).length,
  };

  // ── Activité (last_active) ─────────────────────────────────────────────
  const actifs = {
    dau: u.filter((x) => apres(x.last_active, j1)).length,
    wau: u.filter((x) => apres(x.last_active, j7)).length,
    mau: u.filter((x) => apres(x.last_active, j30)).length,
  };

  // ── Plans et revenus ───────────────────────────────────────────────────
  // On raisonne sur les seuls comptes B2C. Un membre rattaché à un cabinet a
  // reçu son accès par son partenaire, sans payer : le compter ici gonflerait
  // le MRR et le « revenu à vie » d'un chiffre d'affaires qui n'existe pas.
  // Sa contribution réelle est facturée au partenaire, plus bas.
  const b2c = u.filter((x) => !x.cabinet_id);
  const membresPartenaires = u.filter((x) => x.cabinet_id);

  const lifetime = b2c.filter(estLifetime);
  const parPlan = {
    free: b2c.filter((x) => (x.plan ?? 'free') === 'free').length,
    premium: b2c.filter((x) => x.plan === 'premium').length,
    langue: b2c.filter((x) => x.plan === 'langue').length,
    bundleMensuel: b2c.filter((x) => x.plan === 'bundle' && x.sub_end_at).length,
    lifetime: lifetime.length,
  };

  const mrr =
    parPlan.premium * PRIX.premium +
    parPlan.langue * PRIX.langue +
    parPlan.bundleMensuel * PRIX.bundle;

  const revenuLifetime = parPlan.lifetime * PRIX.lifetime;

  const cab = cabinets.data ?? [];
  const inv0 = invites.data ?? [];

  // ── Partenaires : forfait annuel d'un côté, facturation à l'usage de
  // l'autre. Une activation = une invitation effectivement transformée en
  // compte ; on ne facture jamais une invitation simplement envoyée.
  const partenaires = cab.map((c) => {
    const siennes = inv0.filter((i) => i.cabinet_id === c.id);
    const activations = siennes.filter((i) => i.redeemed_at);
    const aFacturer = activations.filter((i) => !i.facture_le);
    const pu = (c.prix_activation_cents ?? 0) / 100;
    return {
      ...c,
      invitesEnvoyees: siennes.length,
      enAttente: siennes.length - activations.length,
      activations: activations.length,
      activationsNonFacturees: aFacturer.length,
      montantDu: c.billing_mode === 'usage' ? aFacturer.length * pu : 0,
      caCumule: c.billing_mode === 'usage'
        ? activations.length * pu
        : (TIER_PRIX_ANNUEL[c.tier] ?? 0),
      prixUnitaire: pu,
      membresActifs: membresPartenaires.filter(
        (m) => m.cabinet_id === c.id && apres(m.last_active, j30),
      ).length,
    };
  });

  const caCabinetsAnnuel = cab
    .filter((c) => c.billing_mode !== 'usage')
    .reduce((a, c) => a + (TIER_PRIX_ANNUEL[c.tier] ?? 0), 0);

  const aFacturerPartenaires = partenaires.reduce((a, p) => a + p.montantDu, 0);

  const payants = parPlan.premium + parPlan.langue + parPlan.bundleMensuel + parPlan.lifetime;
  const tauxConversion = b2c.length > 0 ? (payants / b2c.length) * 100 : 0;

  // ── Courbe des inscriptions sur 30 jours ───────────────────────────────
  const serie: { jour: string; inscriptions: number }[] = [];
  for (let i = 29; i >= 0; i--) {
    const d = joursDepuis(i);
    const cle = d.toISOString().slice(0, 10);
    serie.push({
      jour: cle,
      inscriptions: u.filter((x) => x.created_at?.slice(0, 10) === cle).length,
    });
  }

  // ── Segmentation par démarche (base de la mise en relation avocat) ─────
  const parDemarche: Record<string, number> = {};
  for (const x of u) {
    const k = x.demarche ?? 'non renseignée';
    parDemarche[k] = (parDemarche[k] ?? 0) + 1;
  }

  // ── Engagement produit ─────────────────────────────────────────────────
  const prog = progression.data ?? [];
  const ex = exams.data ?? [];
  const examsReussis = ex.filter((e) => e.passed).length;
  const scoreMoyen = ex.length
    ? Math.round(ex.reduce((a, e) => a + (e.score / (e.total_q || 1)) * 100, 0) / ex.length)
    : 0;

  const inv = invites.data ?? [];

  return {
    users: u,
    totalUsers: u.length,
    nouveaux,
    actifs,
    parPlan,
    payants,
    tauxConversion,
    mrr,
    revenuLifetime,
    caCabinetsAnnuel,
    serie,
    parDemarche,
    onboardingComplet: u.filter((x) => x.onboarding_done).length,
    souhaitentAccompagnement: u.filter((x) => x.accompagne).length,
    engagement: {
      leconsCompletees: prog.filter((p) => p.completed).length,
      examensPasses: ex.length,
      examensReussis: examsReussis,
      scoreMoyen,
      badges: (badges.data ?? []).length,
    },
    cabinets: cab,
    partenaires,
    aFacturerPartenaires,
    membresPartenaires: membresPartenaires.length,
    invitations: { total: inv.length, utilisees: inv.filter((i) => i.redeemed_at).length },
    apercuLeads: apercuLeads.data ?? [],
    consentementsLifetime: (consents.data ?? []).length,
    prix: PRIX,
  };
}
