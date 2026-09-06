export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { createCheckoutSession, type PlanKey } from '@/lib/stripe';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import { getAppUrl } from '@/lib/app-url';

export async function POST(req: Request) {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { planKey } = await req.json() as { planKey?: PlanKey };
  const appUrl = await getAppUrl();

  // Parrainage : -20% sur le 1er mois si l'utilisateur a été parrainé
  // et n'a pas encore profité de la réduction.
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
      planKey ?? 'premium_monthly',
      appUrl,
      applyReferralDiscount
    );
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
