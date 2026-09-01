export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';

/**
 * Enregistre la preuve que l'utilisateur a lu et accepté la clause
 * "Accès à vie" (CGU Art. 4.4bis) avant de lancer le paiement Stripe.
 * Appelé juste avant la redirection vers /api/stripe/start?plan=lifetime.
 */
export async function POST(req: Request) {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    ?? req.headers.get('x-real-ip')
    ?? null;
  const userAgent = req.headers.get('user-agent');

  const admin = createServiceRoleClient();
  const { error } = await admin.from('lifetime_consents').insert({
    user_id: user.id,
    email: user.email,
    cgu_version: '2.1',
    ip,
    user_agent: userAgent,
  });

  if (error) {
    console.error('lifetime-consent error:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
