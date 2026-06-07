export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { createCheckoutSession, type PlanKey } from '@/lib/stripe';
import { createServerSupabaseClient } from '@/lib/supabase-server';

export async function POST(req: Request) {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { planKey } = await req.json() as { planKey?: PlanKey };
  const appUrl = process.env.NEXT_PUBLIC_APP_URL!;

  try {
    const session = await createCheckoutSession(
      user.id,
      user.email!,
      planKey ?? 'premium_monthly',
      appUrl
    );
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
