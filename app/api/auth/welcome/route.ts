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

    await sendEmail({
      to: [{ email, name: displayName }],
      subject: 'Bienvenue sur maformationcivique.fr ! 🇫🇷',
      htmlContent: welcomeEmailTemplate(displayName),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    // Si Brevo non configuré → on logue mais l'inscription ne doit pas échouer
    console.error('[welcome-email]', err instanceof Error ? err.message : String(err));
    return NextResponse.json({ ok: true }); // Ne pas bloquer l'UX
  }
}
