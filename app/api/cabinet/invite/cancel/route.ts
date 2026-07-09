/**
 * POST /api/cabinet/invite/cancel
 * Annule une invitation en attente (non encore acceptée).
 * Libère immédiatement le slot dans le quota du cabinet.
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

    const { inviteId } = await req.json() as { inviteId?: string };
    if (!inviteId) return NextResponse.json({ error: 'inviteId manquant' }, { status: 400 });

    const { data: adminProfile } = await supabase
      .from('users')
      .select('cabinet_id, cabinet_role')
      .eq('id', user.id)
      .single();

    if (!adminProfile?.cabinet_id || adminProfile.cabinet_role !== 'admin') {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });
    }

    const service = createServiceRoleClient();

    // Vérifie que l'invitation appartient bien à ce cabinet et est non utilisée
    const { data: invite } = await service
      .from('cabinet_invites')
      .select('cabinet_id, redeemed_at')
      .eq('id', inviteId)
      .single();

    if (!invite || invite.cabinet_id !== adminProfile.cabinet_id) {
      return NextResponse.json({ error: 'Invitation introuvable' }, { status: 404 });
    }

    if (invite.redeemed_at) {
      return NextResponse.json({ error: 'Invitation déjà acceptée, utilisez révoquer le membre' }, { status: 409 });
    }

    await service
      .from('cabinet_invites')
      .delete()
      .eq('id', inviteId);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[cabinet/invite/cancel]', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
