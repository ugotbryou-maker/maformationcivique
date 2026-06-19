/**
 * POST /api/cabinet/member/revoke
 * Révoque l'accès cabinet d'un membre (remet plan=free, supprime cabinet_id/role).
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

    // Vérif: l'appelant est admin d'un cabinet
    const { data: adminProfile } = await supabase
      .from('users')
      .select('cabinet_id, cabinet_role')
      .eq('id', user.id)
      .single();

    if (!adminProfile?.cabinet_id || adminProfile.cabinet_role !== 'admin') {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });
    }

    // Vérif: la cible appartient bien à ce cabinet
    const service = createServiceRoleClient();
    const { data: target } = await service
      .from('users')
      .select('cabinet_id, cabinet_role')
      .eq('id', userId)
      .single();

    if (!target || target.cabinet_id !== adminProfile.cabinet_id) {
      return NextResponse.json({ error: 'Utilisateur non membre de ce cabinet' }, { status: 403 });
    }

    // Sécurité : ne pas révoquer un autre admin
    if (target.cabinet_role === 'admin') {
      return NextResponse.json({ error: 'Impossible de révoquer un administrateur' }, { status: 403 });
    }

    await service
      .from('users')
      .update({ cabinet_id: null, cabinet_role: null, plan: 'free' })
      .eq('id', userId);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[cabinet/member/revoke]', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
