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

  const acceptedAt = new Date().toISOString();

  // L'enregistrement de la preuve ne doit JAMAIS bloquer le paiement : le
  // consentement a été donné par l'utilisateur (case cochée) au moment où il
  // arrive ici. Si l'écriture échoue (table absente, base indisponible…), on
  // trace l'incident côté serveur et on laisse le parcours d'achat continuer.
  try {
    const admin = createServiceRoleClient();
    const { error } = await admin.from('lifetime_consents').insert({
      user_id: user.id,
      email: user.email,
      cgu_version: '2.2',
      accepted_at: acceptedAt,
      ip,
      user_agent: userAgent,
    });

    if (error) {
      console.error(
        '[lifetime-consent] ÉCHEC ENREGISTREMENT — consentement donné mais non persisté.',
        JSON.stringify({ userId: user.id, email: user.email, acceptedAt, ip, dbError: error.message }),
      );
      return NextResponse.json({ ok: true, recorded: false });
    }
  } catch (err) {
    console.error(
      '[lifetime-consent] EXCEPTION — consentement donné mais non persisté.',
      JSON.stringify({ userId: user.id, email: user.email, acceptedAt, ip }),
      err,
    );
    return NextResponse.json({ ok: true, recorded: false });
  }

  return NextResponse.json({ ok: true, recorded: true });
}
