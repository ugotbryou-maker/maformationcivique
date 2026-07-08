/**
 * POST /api/auth/welcome
 * Envoie l'email de bienvenue après inscription + sync Brevo pour automations.
 *
 * Body: { email, name, isFromCabinet?, cabinetName? }
 *
 * - isFromCabinet = true  → utilisateur cabinet (pas de lead gen ni promo)
 * - isFromCabinet = false → utilisateur organique (séquence lead gen + promo via Brevo automation)
 *
 * Attributs Brevo synchronisés (utilisés pour déclencher les automations) :
 *   PRENOM, PLAN, CABINET, INSCRIPTION_DATE
 *   → Automation 1 : CABINET = false + J+1  → POST /api/email/lead-gen
 *   → Automation 2 : CABINET = false + PLAN = free + J+5  → POST /api/email/promo
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
    const inscriptionDate = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

    const userSubject = fromCabinet
      ? `${cabinet} a activé votre accès Premium — bienvenue ${displayName} 🎓`
      : `Bienvenue ${displayName} — votre préparation à l'examen civique commence 🇫🇷`;

    const userHtml = fromCabinet
      ? welcomeCabinetTemplate(displayName, cabinet)
      : welcomeOrganicTemplate(displayName);

    const brevoKey = process.env.BREVO_API_KEY;

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

      // Sync attributs Brevo → déclenche automations lead gen + promo côté Brevo
      brevoKey ? fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'api-key': brevoKey,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email,
          updateEnabled: true,
          attributes: {
            PRENOM: displayName,
            PLAN: 'free',
            CABINET: fromCabinet,
            INSCRIPTION_DATE: inscriptionDate,
          },
          listIds: [fromCabinet ? 4 : 3], // liste 3 = organiques, liste 4 = cabinet (à créer dans Brevo)
        }),
      }).catch(() => {}) : Promise.resolve(),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[welcome-email]', err instanceof Error ? err.message : String(err));
    return NextResponse.json({ ok: true }); // Ne pas bloquer l'UX
  }
}
