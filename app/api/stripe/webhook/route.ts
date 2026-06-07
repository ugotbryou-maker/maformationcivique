export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import { createServerClient } from '@supabase/ssr';
import type Stripe from 'stripe';

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // Service role client (no cookie auth needed for webhooks)
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { cookies: { getAll: () => [], setAll: () => {} } }
  );

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.userId;
      if (!userId) break;

      const customerId = session.customer as string;
      const subscriptionId = session.subscription as string;
      const subscription = await getStripe().subscriptions.retrieve(subscriptionId);
      const subData = subscription as unknown as { current_period_end: number };
      const periodEnd = new Date(subData.current_period_end * 1000).toISOString();

      await supabase
        .from('users')
        .update({
          plan: 'premium',
          stripe_id: customerId,
          sub_end_at: periodEnd,
        })
        .eq('id', userId);
      break;
    }

    case 'customer.subscription.updated': {
      const sub = event.data.object as Stripe.Subscription;
      const userId = sub.metadata?.userId;
      if (!userId) break;

      const subTyped = sub as unknown as { current_period_end: number };
      const periodEnd = new Date(subTyped.current_period_end * 1000).toISOString();
      const plan = sub.status === 'active' ? 'premium' : 'free';

      await supabase
        .from('users')
        .update({ plan, sub_end_at: periodEnd })
        .eq('id', userId);
      break;
    }

    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription;
      const userId = sub.metadata?.userId;
      if (!userId) break;

      await supabase
        .from('users')
        .update({ plan: 'free', sub_end_at: null })
        .eq('id', userId);
      break;
    }
  }

  return NextResponse.json({ received: true });
}
