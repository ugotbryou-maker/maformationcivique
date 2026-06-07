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

export const STRIPE_PLANS = {
  premium_monthly: {
    name: 'maformationcivique.fr — Accès complet',
    price: 1200,
    priceId: process.env.STRIPE_PRICE_PREMIUM_MONTHLY || '',
    interval: 'month' as const,
  },
  premium_early: {
    name: 'maformationcivique.fr — Early Adopter',
    price: 900,
    priceId: process.env.STRIPE_PRICE_PREMIUM_EARLY || '',
    interval: 'month' as const,
  },
} as const;

export type PlanKey = keyof typeof STRIPE_PLANS;

export async function createCheckoutSession(
  userId: string,
  userEmail: string,
  planKey: PlanKey = 'premium_monthly',
  appUrl: string
) {
  const plan = STRIPE_PLANS[planKey];

  const session = await stripe.checkout.sessions.create({
    customer_email: userEmail,
    metadata: { userId, planKey },
    line_items: [
      {
        price: plan.priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: `${appUrl}/dashboard?upgraded=1`,
    cancel_url: `${appUrl}/#tarifs`,
    allow_promotion_codes: true,
    subscription_data: {
      metadata: { userId },
    },
  });

  return session;
}

export async function createPortalSession(customerId: string, appUrl: string) {
  return stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${appUrl}/profil`,
  });
}
