/**
 * POST /api/email/promo
 * Envoie l'email promotionnel -15% (J+5) aux utilisateurs organiques encore sur plan free.
 * Appelé soit manuellement, soit via une automation Brevo (recommandé en prod).
 *
 * Body: { email: string; name?: string; promoCode?: string }
 * Sécurisé : ne s'envoie qu'aux users plan=free sans cabinet_id.
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createServiceRoleClient } from '@/lib/supabase-server';
import { sendEmail, promoTemplate } from '@/lib/brevo';

function parseBrevoBody(body: Record<string, unknown>): { email?: string; name?: string; promoCode?: string } {
  const email = (body.email ?? body.EMAIL) as string | undefined;
  const attrs = (body.attributes ?? body) as Record<string, unknown>;
  const name = (attrs.PRENOM ?? attrs.prenom ?? body.name) as string | undefined;
  const promoCode = body.promoCode as string | undefined;
  return { email, name, promoCode };
}

export async function POST(req: NextRequest) {
  try {
    const raw = await req.json() as Record<string, unknown>;
    const { email, name, promoCode } = parseBrevoBody(raw);

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'email requis' }, { status: 400 });
    }

    const service = createServiceRoleClient();

    const { data: user } = await service
      .from('users')
      .select('name, cabinet_id, plan')
      .eq('email', email.toLowerCase().trim())
      .single();

    if (!user) return NextResponse.json({ error: 'Utilisateur introuvable' }, { status: 404 });

    // Ne pas envoyer si cabinet ou déjà premium
    if (user.cabinet_id) return NextResponse.json({ skipped: 'cabinet member' }, { status: 200 });
    if (user.plan && user.plan !== 'free') return NextResponse.json({ skipped: 'already premium' }, { status: 200 });

    const displayName = name?.trim() || user.name || email.split('@')[0];
    const code = promoCode?.trim() || 'BIENVENUE15';

    await sendEmail({
      to: [{ email, name: displayName }],
      subject: '-15% sur votre premier mois — offre valable 48h ⏳',
      htmlContent: promoTemplate(displayName, code),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[email/promo]', err instanceof Error ? err.message : String(err));
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
