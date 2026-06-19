/**
 * POST /api/cabinet/member/reset-password
 * Envoie un email de réinitialisation de mot de passe à un membre du cabinet.
 * Réservé à l'admin du cabinet.
 */
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';

export async function POST(req: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });

    const { userId } = await req.json() as { userId?: string };
    if (!userId) return NextResponse.json({ error: 'userId manquant' }, { status: 400 });

    // Vérif admin
    const { data: adminProfile } = await supabase
      .from('users')
      .select('cabinet_id, cabinet_role')
      .eq('id', user.id)
      .single();

    if (!adminProfile?.cabinet_id || adminProfile.cabinet_role !== 'admin') {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });
    }

    const service = createServiceRoleClient();

    // Vérif: la cible appartient bien à ce cabinet
    const { data: target } = await service
      .from('users')
      .select('email, cabinet_id')
      .eq('id', userId)
      .single();

    if (!target?.email || target.cabinet_id !== adminProfile.cabinet_id) {
      return NextResponse.json({ error: 'Utilisateur non membre de ce cabinet' }, { status: 403 });
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.maformationcivique.fr';

    // Supabase génère le lien de reset et l'envoie directement
    const { error } = await service.auth.resetPasswordForEmail(target.email, {
      redirectTo: `${appUrl}/reset-password`,
    });

    if (error) {
      console.error('[cabinet/member/reset-password]', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[cabinet/member/reset-password]', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
