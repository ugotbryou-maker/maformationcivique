export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { getStripe, STRIPE_PLANS, type PlanKey } from '@/lib/stripe';
import { sendEmail, premiumActivatedTemplate, adminNewPaymentTemplate } from '@/lib/brevo';
import { createServerClient } from '@supabase/ssr';
import type Stripe from 'stripe';

function planFromKey(planKey: string | undefined): string {
  const plan = STRIPE_PLANS[planKey as PlanKey];
  return plan?.plan ?? 'premium';
}

const PLAN_LABELS: Record<string, string> = {
  premium: 'Formation Civique — 12 €/mois',
  langue:  'Cours de Français — 12 €/mois',
  bundle:  'Bundle Civique + Français — 20 €/mois',
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
      const planLabel = PLAN_LABELS[planValue] ?? planValue;
      const customerId = session.customer as string;
      const subscriptionId = session.subscription as string;
      const subscription = await getStripe().subscriptions.retrieve(subscriptionId);
      const subData = subscription as unknown as { current_period_end: number };
      const periodEnd = new Date(subData.current_period_end * 1000).toISOString();

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

      const now = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });
      const userEmail = userRow?.email ?? '';
      const userName = userRow?.name || userEmail.split('@')[0] || 'vous';
      const amount = session.amount_total ? `${(session.amount_total / 100).toFixed(2)} €` : '—';

      const brevoKey = process.env.BREVO_API_KEY;

      await Promise.all([
        // Confirmation → utilisateur
        userEmail ? sendEmail({
          to: [{ email: userEmail, name: userName }],
          subject: `Votre accès Premium est activé ✅ — prêt(e) pour l'examen ?`,
          htmlContent: premiumActivatedTemplate(userName, planLabel),
        }).catch(() => {}) : Promise.resolve(),

        // Notif interne → admin
        sendEmail({
          to: [{ email: 'ugotbr.you@gmail.com', name: 'Ugo' }],
          subject: `Nouveau paiement — ${userEmail || userId}`,
          htmlContent: adminNewPaymentTemplate(userEmail || userId, userName, planLabel, amount, session.id, now),
        }).catch(() => {}),

        // Sync Brevo PLAN → bloque l'envoi de l'email promo J+5 si déjà premium
        userEmail && brevoKey ? fetch('https://api.brevo.com/v3/contacts', {
          method: 'POST',
          headers: { accept: 'application/json', 'api-key': brevoKey, 'content-type': 'application/json' },
          body: JSON.stringify({ email: userEmail, updateEnabled: true, attributes: { PLAN: planValue } }),
        }).catch(() => {}) : Promise.resolve(),
      ]);

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
