/**
 * POST /api/auth/send-reset
 * Génère un lien de reset Supabase et l'envoie via Brevo.
 * Bypass complet du SMTP Supabase (trop limité en free tier).
 *
 * Body: { email: string }
 * Répond toujours { ok: true } pour ne pas révéler si l'email existe.
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendEmail, resetPasswordTemplate } from '@/lib/brevo';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json() as { email?: string };

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'email requis' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceKey) {
      console.error('[send-reset] Supabase env vars missing');
      return NextResponse.json({ error: 'Configuration serveur manquante' }, { status: 500 });
    }

    // ── 1. Génère le lien de reset via Admin API ──────────────────────────────
    const supabaseAdmin = createClient(supabaseUrl, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const appUrl =
      process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, '') ??
      'https://www.maformationcivique.fr';

    const { data, error: genError } = await supabaseAdmin.auth.admin.generateLink({
      type: 'recovery',
      email: email.toLowerCase().trim(),
      options: {
        // Callback vers auth/callback avec intent=reset
        // auth/callback échange le code puis redirige vers /reset-password
        redirectTo: `${appUrl}/auth/callback?intent=reset`,
      },
    });

    if (genError || !data?.properties?.action_link) {
      // L'email n'existe probablement pas en base — on ne le révèle pas
      console.log('[send-reset] generateLink skipped:', genError?.message ?? 'no link');
      return NextResponse.json({ ok: true });
    }

    const resetLink = data.properties.action_link;

    // ── 2. Envoie via Brevo ───────────────────────────────────────────────────
    await sendEmail({
      to: [{ email }],
      subject: 'Réinitialisation de votre mot de passe — maformationcivique.fr',
      htmlContent: resetPasswordTemplate(resetLink),
    });

    return NextResponse.json({ ok: true });

  } catch (err) {
    // Brevo non configuré ou erreur réseau — on logue mais ne bloque pas l'UX
    console.error('[send-reset] error:', err instanceof Error ? err.message : String(err));
    return NextResponse.json({ error: 'Erreur lors de l\'envoi' }, { status: 500 });
  }
}
