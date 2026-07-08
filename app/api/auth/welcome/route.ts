/**
 * POST /api/auth/welcome
 * Envoie l'email de bienvenue après inscription.
 * Appelé côté client après supabase.auth.signUp() réussi.
 *
 * Body: { email, name, isFromCabinet?, cabinetName? }
 *
 * - isFromCabinet = true  → utilisateur invité par un cabinet (pas de lead gen)
 * - isFromCabinet = false → utilisateur organique (lead gen dans l'email)
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import {
  sendEmail,
  welcomeOrganicTemplate,
  welcomeCabinetTemplate,
  adminNewUserTemplate,
} from '@/lib/brevo';

export async function POST(req: NextRequest) {
  try {
    const { email, name, isFromCabinet, cabinetName } = await req.json() as {
      email?: string;
      name?: string;
      isFromCabinet?: boolean;
      cabinetName?: string;
    };

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'email requis' }, { status: 400 });
    }

    const displayName = name?.trim() || 'vous';
    const fromCabinet = isFromCabinet === true;
    const cabinet = cabinetName?.trim() || 'Votre cabinet';
    const now = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });

    const userSubject = fromCabinet
      ? `${cabinet} a activé votre accès Premium — bienvenue ${displayName} 🎓`
      : `Bienvenue ${displayName} — votre préparation à l'examen civique commence 🇫🇷`;

    const userHtml = fromCabinet
      ? welcomeCabinetTemplate(displayName, cabinet)
      : welcomeOrganicTemplate(displayName);

    await Promise.all([
      // Email de bienvenue → utilisateur
      sendEmail({
        to: [{ email, name: displayName }],
        subject: userSubject,
        htmlContent: userHtml,
      }),
      // Notification interne → admin
      sendEmail({
        to: [{ email: 'ugotbr.you@gmail.com', name: 'Ugo' }],
        subject: `Nouvel inscrit${fromCabinet ? ' (cabinet)' : ''} — ${email}`,
        htmlContent: adminNewUserTemplate(email, displayName, now),
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[welcome-email]', err instanceof Error ? err.message : String(err));
    return NextResponse.json({ ok: true }); // Ne pas bloquer l'UX
  }
}
