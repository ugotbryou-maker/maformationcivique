import Stripe from 'stripe';

// Lazy init — évite le crash au build si STRIPE_SECRET_KEY absent
let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (_stripe) return _stripe;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error('STRIPE_SECRET_KEY is not set');
  _stripe = new Stripe(key, { apiVersion: '2026-04-22.dahlia' });
  return _stripe;
}

/** @deprecated Use getStripe() instead */
export const stripe = new Proxy({} as Stripe, {
  get(_target, prop) {
    return (getStripe() as unknown as Record<string | symbol, unknown>)[prop];
  },
});

// ⚠️ RÈGLE PRIX : -50% permanent appliqué le 2026-09-01 sur toutes les offres
// récurrentes (prix initial / 2, définitivement — pas une promo temporaire).
// `price` est en centimes, affiché uniquement à titre indicatif dans ce
// fichier : le montant réellement facturé est celui du Price Stripe
// (priceId) — pense à créer/repointer les Price Stripe en conséquence.
export const STRIPE_PLANS = {
  premium_monthly: {
    name: 'maformationcivique.fr — Civique',
    price: 600, // 12€ → 6€ (-50% permanent)
    priceId: process.env.STRIPE_PRICE_PREMIUM_MONTHLY || '',
    plan: 'premium' as const,
    mode: 'subscription' as const,
    interval: 'month' as const,
  },
  premium_early: {
    name: 'maformationcivique.fr — Early Adopter',
    price: 900, // inchangé — hors périmètre de la baisse -50% (non lié sur le site)
    priceId: process.env.STRIPE_PRICE_PREMIUM_EARLY || '',
    plan: 'premium' as const,
    mode: 'subscription' as const,
    interval: 'month' as const,
  },
  langue_monthly: {
    name: 'maformationcivique.fr — Langue française',
    price: 600, // 12€ → 6€ (-50% permanent)
    priceId: process.env.STRIPE_PRICE_LANGUE_MONTHLY || '',
    plan: 'langue' as const,
    mode: 'subscription' as const,
    interval: 'month' as const,
  },
  bundle_monthly: {
    name: 'maformationcivique.fr — Bundle Civique + Langue',
    price: 1000, // 20€ → 10€ (-50% permanent)
    priceId: process.env.STRIPE_PRICE_BUNDLE_MONTHLY || '',
    plan: 'bundle' as const,
    mode: 'subscription' as const,
    interval: 'month' as const,
  },
  lifetime_bundle: {
    name: 'maformationcivique.fr — Accès à vie (Civique + Langue)',
    price: 2000, // 20€ paiement unique, accès à vie
    // Pas de Price Stripe pré-créé : on facture directement le Product ci-dessous
    // via price_data au moment du checkout (voir createCheckoutSession).
    productId: 'prod_VBKI4svdrjUOoA',
    currency: 'eur',
    plan: 'bundle' as const,
    mode: 'payment' as const,
    interval: null,
  },
} as const;

export type PlanKey = keyof typeof STRIPE_PLANS;
export type PlanValue = typeof STRIPE_PLANS[PlanKey]['plan'];

/** Identifiant du coupon "parrainage" — -20% sur la 1ère échéance */
export const REFERRAL_COUPON_ID = 'PARRAINAGE20';

/**
 * Récupère le coupon de parrainage, ou le crée s'il n'existe pas encore
 * (idempotent — appelable à chaque checkout sans risque de doublon).
 */
export async function ensureReferralCoupon(): Promise<string> {
  try {
    await stripe.coupons.retrieve(REFERRAL_COUPON_ID);
    return REFERRAL_COUPON_ID;
  } catch {
    const coupon = await stripe.coupons.create({
      id: REFERRAL_COUPON_ID,
      percent_off: 20,
      duration: 'once',
      name: 'Parrainage — -20% le 1er mois',
    });
    return coupon.id;
  }
}

export async function createCheckoutSession(
  userId: string,
  userEmail: string,
  planKey: PlanKey = 'premium_monthly',
  appUrl: string,
  applyReferralDiscount = false
) {
  const plan = STRIPE_PLANS[planKey];
  const isLifetime = plan.mode === 'payment';

  // Le parrainage (-20% 1er mois) n'a de sens que sur un abonnement récurrent
  const discountFields = applyReferralDiscount && !isLifetime
    ? { discounts: [{ coupon: await ensureReferralCoupon() }] }
    : { allow_promotion_codes: true };

  // Lifetime : pas de Price Stripe pré-créé, on facture directement le Product
  // (prod_VBKI4svdrjUOoA) via price_data. Les autres offres utilisent leur
  // Price Stripe existant (priceId).
  const lineItem = isLifetime
    ? {
        price_data: {
          currency: (plan as { currency: string }).currency,
          product: (plan as { productId: string }).productId,
          unit_amount: plan.price,
        },
        quantity: 1,
      }
    : {
        price: (plan as { priceId: string }).priceId,
        quantity: 1,
      };

  const session = await stripe.checkout.sessions.create({
    customer_email: userEmail,
    metadata: { userId, planKey },
    line_items: [lineItem],
    mode: plan.mode,
    success_url: `${appUrl}/dashboard?upgraded=1`,
    cancel_url: `${appUrl}/#tarifs`,
    ...discountFields,
    ...(isLifetime ? {} : { subscription_data: { metadata: { userId, planKey } } }),
  });

  return session;
}

export async function createPortalSession(customerId: string, appUrl: string) {
  return stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${appUrl}/profil`,
  });
}
