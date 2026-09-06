export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { createCheckoutSession, STRIPE_PLANS, type PlanKey } from '@/lib/stripe';
import { createServerSupabaseClient } from '@/lib/supabase-server';

const PLAN_ALIAS: Record<string, PlanKey> = {
  premium:         'premium_monthly',
  premium_monthly: 'premium_monthly',
  langue:          'langue_monthly',
  langue_monthly:  'langue_monthly',
  bundle:          'bundle_monthly',
  bundle_monthly:  'bundle_monthly',
  lifetime:        'lifetime_bundle',
  lifetime_bundle: 'lifetime_bundle',
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const planAlias = searchParams.get('plan') ?? 'premium';
  const planKey: PlanKey = PLAN_ALIAS[planAlias] ?? 'premium_monthly';
  const appUrl = process.env.NEXT_PUBLIC_APP_URL!;

  // Utilisateur non connecté → inscription avec le plan en param
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.redirect(new URL(`/inscription?plan=${planAlias}`, appUrl));
  }

  // Vérifier si le plan est valide
  if (!STRIPE_PLANS[planKey]) {
    return NextResponse.redirect(new URL('/dashboard', appUrl));
  }

  // Parrainage : -20% si l'utilisateur a été parrainé et n'a pas encore profité
  const { data: profile } = await supabase
    .from('users')
    .select('referred_by, referral_discount_used')
    .eq('id', user.id)
    .single();
  const applyReferralDiscount = !!profile?.referred_by && !profile?.referral_discount_used;

  try {
    const session = await createCheckoutSession(
      user.id,
      user.email!,
      planKey,
      appUrl,
      applyReferralDiscount,
    );
    return NextResponse.redirect(session.url!);
  } catch (err) {
    // Échec fréquent en production : Price Stripe absent ou mal configuré
    // (variable d'environnement vide). On trace explicitement le plan concerné
    // et on signale l'échec à l'utilisateur au lieu de le déposer sans un mot
    // sur le tableau de bord — un tunnel qui meurt en silence est invisible.
    const plan = STRIPE_PLANS[planKey];
    console.error(
      '[stripe/start] ÉCHEC CRÉATION CHECKOUT',
      JSON.stringify({
        planKey,
        priceIdConfigured: 'priceId' in plan ? Boolean(plan.priceId) : 'n/a (price_data)',
        message: err instanceof Error ? err.message : String(err),
      }),
    );
    return NextResponse.redirect(new URL('/dashboard?checkout=error', appUrl));
  }
}
