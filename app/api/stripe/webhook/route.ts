export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { getStripe, STRIPE_PLANS, type PlanKey } from '@/lib/stripe';
import { sendEmail, premiumActivatedTemplate, adminNewPaymentTemplate } from '@/lib/brevo';
import { createServerClient } from '@supabase/ssr';
import { createServiceRoleClient } from '@/lib/supabase-server';
import type Stripe from 'stripe';

function planFromKey(planKey: string | undefined): string {
  const plan = STRIPE_PLANS[planKey as PlanKey];
  return plan?.plan ?? 'premium';
}

type SupabaseAdmin = ReturnType<typeof createServerClient>;

/**
 * Détermine l'offre achetée via un Payment Link, qui ne transporte pas nos
 * métadonnées applicatives.
 *
 * On lit d'abord `metadata.plan` (à renseigner sur le Payment Link dans
 * Stripe — méthode recommandée, sans ambiguïté). À défaut, on déduit de la
 * nature du paiement et du montant.
 */
function planFromSession(session: Stripe.Checkout.Session): { plan: string; lifetime: boolean } {
  const declared = session.metadata?.plan;
  if (declared === 'lifetime') return { plan: 'bundle', lifetime: true };
  if (declared === 'bundle' || declared === 'premium' || declared === 'langue') {
    return { plan: declared, lifetime: false };
  }

  const lifetime = session.mode === 'payment';
  if (lifetime) return { plan: 'bundle', lifetime: true };

  // Repli sur le montant : 10 € = formule complète, 6 € = offre simple.
  const amount = session.amount_total ?? 0;
  if (amount >= 1000) return { plan: 'bundle', lifetime: false };
  return { plan: 'premium', lifetime: false };
}

/**
 * Achat effectué sans compte (Payment Link) : crée ou retrouve l'utilisateur,
 * lui ouvre l'accès, puis transmet les informations à Make pour l'e-mail de
 * bienvenue. Si Make n'est pas configuré, on envoie nous-mêmes l'e-mail : un
 * client qui a payé ne doit jamais rester sans accès ni explication.
 */
async function handlePaymentLinkPurchase(
  session: Stripe.Checkout.Session,
  supabase: SupabaseAdmin,
) {
  const email = session.customer_details?.email ?? session.customer_email;
  if (!email) {
    console.error('[stripe/webhook] Paiement sans e-mail exploitable', JSON.stringify({ sessionId: session.id }));
    return;
  }

  const { plan, lifetime } = planFromSession(session);
  const customerId = typeof session.customer === 'string' ? session.customer : null;

  // Échéance : aucune pour un achat à vie, fin de période pour un abonnement.
  let periodEnd: string | null = null;
  if (!lifetime && session.subscription) {
    try {
      const sub = await getStripe().subscriptions.retrieve(session.subscription as string);
      periodEnd = new Date((sub as unknown as { current_period_end: number }).current_period_end * 1000).toISOString();
    } catch (err) {
      console.error('[stripe/webhook] Récupération abonnement impossible', err);
    }
  }

  const admin = createServiceRoleClient();
  const normalized = email.toLowerCase().trim();

  // Compte déjà existant ? (le client avait pu s'inscrire auparavant)
  const { data: existing } = await admin
    .from('users')
    .select('id, name')
    .eq('email', normalized)
    .maybeSingle();

  let userId = existing?.id as string | undefined;
  let isNewAccount = false;
  let passwordLink: string | null = null;

  if (!userId) {
    // Mot de passe aléatoire : le client définira le sien via le lien envoyé.
    const tempPassword = `${crypto.randomUUID()}Aa1!`;
    const { data: created, error: createErr } = await admin.auth.admin.createUser({
      email: normalized,
      password: tempPassword,
      email_confirm: true,
    });
    if (createErr || !created?.user) {
      console.error('[stripe/webhook] CRÉATION COMPTE IMPOSSIBLE APRÈS PAIEMENT',
        JSON.stringify({ email: normalized, sessionId: session.id, err: createErr?.message }));
      return;
    }
    userId = created.user.id;
    isNewAccount = true;
  }

  await admin.from('users').upsert({
    id: userId,
    email: normalized,
    plan,
    stripe_id: customerId,
    sub_end_at: periodEnd,
  }, { onConflict: 'id' });

  // Lien permettant de définir son mot de passe et d'accéder au compte.
  try {
    const { data: link } = await admin.auth.admin.generateLink({
      type: 'recovery',
      email: normalized,
    });
    passwordLink = link?.properties?.action_link ?? null;
  } catch (err) {
    console.error('[stripe/webhook] Génération du lien de mot de passe impossible', err);
  }

  const amountLabel = session.amount_total ? `${(session.amount_total / 100).toFixed(2)} €` : '—';
  const planLabel = lifetime
    ? 'Accès à vie — Civique + Français (paiement unique)'
    : (PLAN_LABELS[plan] ?? plan);

  // ── Transmission à Make pour l'e-mail de bienvenue ────────────────────
  const makeUrl = process.env.MAKE_WEBHOOK_PURCHASE_URL;
  let makeOk = false;
  if (makeUrl) {
    try {
      const res = await fetch(makeUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: normalized,
          plan,
          plan_label: planLabel,
          lifetime,
          amount: amountLabel,
          amount_cents: session.amount_total,
          is_new_account: isNewAccount,
          password_link: passwordLink,
          login_url: 'https://www.maformationcivique.fr/connexion',
          stripe_session_id: session.id,
          paid_at: new Date().toISOString(),
        }),
      });
      makeOk = res.ok;
      if (!res.ok) console.error('[stripe/webhook] Make a répondu', res.status);
    } catch (err) {
      console.error('[stripe/webhook] Appel Make impossible', err);
    }
  }

  // Filet de sécurité : sans Make opérationnel, on envoie nous-mêmes l'accès.
  if (!makeOk) {
    await sendEmail({
      to: [{ email: normalized }],
      subject: 'Votre accès est activé ✅ — maformationcivique.fr',
      htmlContent: purchaseAccessTemplate(planLabel, passwordLink, isNewAccount),
    }).catch((err) => console.error('[stripe/webhook] E-mail de secours non envoyé', err));
  }

  // Notification interne
  await sendEmail({
    to: [{ email: 'ugotbr.you@gmail.com', name: 'Ugo' }],
    subject: `Nouveau paiement (lien direct) — ${normalized}`,
    htmlContent: adminNewPaymentTemplate(
      normalized, normalized.split('@')[0], planLabel, amountLabel, session.id,
      new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' }),
    ),
  }).catch(() => {});
}

/** E-mail de secours envoyé au client si Make n'a pas pris le relais. */
function purchaseAccessTemplate(planLabel: string, passwordLink: string | null, isNewAccount: boolean) {
  return `
    <div style="font-family:system-ui,sans-serif;max-width:520px;margin:0 auto;color:#001A70">
      <h1 style="font-size:22px">Votre accès est activé</h1>
      <p style="font-size:15px;line-height:1.7;color:#3D5295">
        Merci pour votre confiance. Votre offre <strong>${planLabel}</strong> est active.
      </p>
      ${passwordLink ? `
        <p style="font-size:15px;line-height:1.7;color:#3D5295">
          ${isNewAccount
            ? 'Un compte a été créé avec cette adresse e-mail. Cliquez ci-dessous pour définir votre mot de passe et accéder à la plateforme :'
            : 'Vous pouvez accéder à votre compte dès maintenant. Si besoin, réinitialisez votre mot de passe :'}
        </p>
        <p><a href="${passwordLink}" style="display:inline-block;background:#002395;color:#fff;padding:13px 26px;border-radius:100px;text-decoration:none;font-weight:700">Accéder à mon compte</a></p>
      ` : `
        <p style="font-size:15px;line-height:1.7;color:#3D5295">
          Connectez-vous sur <a href="https://www.maformationcivique.fr/connexion">maformationcivique.fr</a> avec cette adresse e-mail.
        </p>
      `}
      <p style="font-size:13px;color:#7A8FC4;margin-top:24px">
        Une question ? Répondez simplement à cet e-mail.
      </p>
    </div>
  `;
}

const PLAN_LABELS: Record<string, string> = {
  premium: 'Formation Civique — 6 €/mois',
  langue:  'Cours de Français — 6 €/mois',
  bundle:  'Bundle Civique + Français — 10 €/mois',
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

      // ── Paiement sans compte préalable (Stripe Payment Link) ──────────
      // Le tunnel publicitaire envoie désormais directement au paiement : il
      // n'y a donc pas d'userId dans les métadonnées. On crée le compte à
      // partir de l'e-mail saisi chez Stripe, on ouvre l'accès, et on
      // transmet le tout à Make pour l'e-mail de bienvenue.
      if (!userId) {
        await handlePaymentLinkPurchase(session, supabase);
        break;
      }

      const planKey = session.metadata?.planKey;
      const isLifetime = session.mode === 'payment';
      const planValue = planFromKey(planKey);
      const planLabel = isLifetime ? 'Accès à vie — Civique + Français (paiement unique)' : (PLAN_LABELS[planValue] ?? planValue);
      const customerId = session.customer as string;

      // Abonnement récurrent : on récupère la date de fin de période courante.
      // Paiement unique (Lifetime) : pas de subscription Stripe → pas d'échéance,
      // sub_end_at reste null (accès permanent, jamais révoqué).
      let periodEnd: string | null = null;
      if (!isLifetime) {
        const subscriptionId = session.subscription as string;
        const subscription = await getStripe().subscriptions.retrieve(subscriptionId);
        const subData = subscription as unknown as { current_period_end: number };
        periodEnd = new Date(subData.current_period_end * 1000).toISOString();
      }

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
