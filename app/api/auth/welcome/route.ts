/**
 * POST /api/auth/welcome
 * Envoie l'email de bienvenue après inscription.
 * Appelé côté client après supabase.auth.signUp() réussi.
 *
 * Body: { email: string; name: string }
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, welcomeEmailTemplate } from '@/lib/brevo';

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json() as { email?: string; name?: string };

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'email requis' }, { status: 400 });
    }

    const displayName = name?.trim() || 'vous';
    const now = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });

    await Promise.all([
      // Email de bienvenue → utilisateur
      sendEmail({
        to: [{ email, name: displayName }],
        subject: 'Bienvenue sur maformationcivique.fr ! 🇫🇷',
        htmlContent: welcomeEmailTemplate(displayName),
      }),
      // Notification → admin
      sendEmail({
        to: [{ email: 'ugotbr.you@gmail.com', name: 'Ugo' }],
        subject: `Nouvel inscrit — ${email}`,
        htmlContent: `
          <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
            <h2 style="color:#003189;margin-top:0">Nouvel utilisateur inscrit</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#6b7280;width:120px">Email</td><td style="padding:8px 0;font-weight:600">${email}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280">Nom</td><td style="padding:8px 0">${displayName}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280">Date</td><td style="padding:8px 0">${now}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280">Plan</td><td style="padding:8px 0"><span style="background:#EEF2FF;color:#3730A3;padding:2px 8px;border-radius:4px;font-size:13px">Gratuit</span></td></tr>
            </table>
            <p style="margin-top:20px;font-size:13px;color:#9ca3af">maformationcivique.fr</p>
          </div>`,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    // Si Brevo non configuré → on logue mais l'inscription ne doit pas échouer
    console.error('[welcome-email]', err instanceof Error ? err.message : String(err));
    return NextResponse.json({ ok: true }); // Ne pas bloquer l'UX
  }
}
