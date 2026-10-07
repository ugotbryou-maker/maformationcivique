/**
 * POST /api/admin/reset-password
 * Envoie un lien de réinitialisation de mot de passe à un utilisateur.
 * Réservé aux administrateurs (ADMIN_EMAILS).
 *
 * Body: { userId: string }
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';
import { getAppUrl } from '@/lib/app-url';

export async function POST(req: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!isAdminEmail(user?.email)) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });
    }

    const { userId } = await req.json() as { userId?: string };
    if (!userId) return NextResponse.json({ error: 'userId manquant' }, { status: 400 });

    const service = createServiceRoleClient();
    const { data: cible } = await service
      .from('users').select('email').eq('id', userId).single();

    if (!cible?.email) {
      return NextResponse.json({ error: 'Compte introuvable ou sans e-mail' }, { status: 404 });
    }

    const appUrl = await getAppUrl();
    const { error } = await service.auth.resetPasswordForEmail(cible.email, {
      redirectTo: `${appUrl.replace(/\/$/, '')}/auth/callback`,
    });

    if (error) {
      console.error('[admin/reset-password]', error.message);
      return NextResponse.json({ error: 'Envoi impossible' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[admin/reset-password] unexpected error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
