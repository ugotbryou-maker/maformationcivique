export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { getStripe, STRIPE_PLANS, type PlanKey } from '@/lib/stripe';
import { sendEmail } from '@/lib/brevo';
import { createServerClient } from '@supabase/ssr';
import type Stripe from 'stripe';

function planFromKey(planKey: string | undefined): string {
  const plan = STRIPE_PLANS[planKey as PlanKey];
  return plan?.plan ?? 'premium';
}

const PLAN_LABELS: Record<string, string> = {
  premium: 'Civique — 12€/mois',
  langue:  'Langue — 12€/mois',
  bundle:  'Bundle — 20€/mois',
};

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

      const planKey = session.metadata?.planKey;
      const planValue = planFromKey(planKey);
      const customerId = session.customer as string;
      const subscriptionId = session.subscription as string;
      const subscription = await getStripe().subscriptions.retrieve(subscriptionId);
      const subData = subscription as unknown as { current_period_end: number };
      const periodEnd = new Date(subData.current_period_end * 1000).toISOString();

      // Récupérer l'email utilisateur pour la notif admin
      const { data: userRow } = await supabase
        .from('users')
        .select('email, name')
        .eq('id', userId)
        .single();

      await supabase
        .from('users')
        .update({ plan: planValue, stripe_id: customerId, sub_end_at: periodEnd })
        .eq('id', userId);

      if ((session.total_details?.amount_discount ?? 0) > 0) {
        await supabase
          .from('users')
          .update({ referral_discount_used: true })
          .eq('id', userId);
      }

      // Notif admin — nouveau paiement
      const now = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });
      sendEmail({
        to: [{ email: 'ugotbr.you@gmail.com', name: 'Ugo' }],
        subject: `Nouveau paiement — ${userRow?.email ?? userId}`,
        htmlContent: `
          <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
            <h2 style="color:#003189;margin-top:0">Nouveau paiement reçu 💳</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#6b7280;width:120px">Email</td><td style="padding:8px 0;font-weight:600">${userRow?.email ?? userId}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280">Nom</td><td style="padding:8px 0">${userRow?.name ?? '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280">Plan</td><td style="padding:8px 0"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:4px;font-size:13px">${PLAN_LABELS[planValue] ?? planValue}</span></td></tr>
              <tr><td style="padding:8px 0;color:#6b7280">Date</td><td style="padding:8px 0">${now}</td></tr>
            </table>
            <p style="margin-top:20px;font-size:13px;color:#9ca3af">maformationcivique.fr</p>
          </div>`,
      }).catch(() => {/* ne pas bloquer le webhook */});
      break;
    }

    case 'customer.subscription.updated': {
      const sub = event.data.object as Stripe.Subscription;
      const userId = sub.metadata?.userId;
      if (!userId) break;

      const subTyped = sub as unknown as { current_period_end: number };
      const periodEnd = new Date(subTyped.current_period_end * 1000).toISOString();
      const planKey = sub.metadata?.planKey;
      const plan = sub.status === 'active' ? planFromKey(planKey) : 'free';

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
