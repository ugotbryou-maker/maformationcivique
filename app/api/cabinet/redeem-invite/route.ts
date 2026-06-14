/**
 * POST /api/cabinet/redeem-invite
 * Appelé côté client juste après supabase.auth.signUp() réussi, si
 * l'inscription provient d'un lien d'invitation cabinet (?invite_token=).
 *
 * Associe l'utilisateur connecté au cabinet, le passe en plan='premium',
 * et marque l'invitation comme utilisée.
 *
 * Body: { token: string }
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json() as { token?: string };
    if (!token) {
      return NextResponse.json({ error: 'Token manquant' }, { status: 400 });
    }

    // ── Utilisateur authentifié (vient de s'inscrire) ──────────────────────
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
    }

    const service = createServiceRoleClient();

    const { data: invite, error: inviteError } = await service
      .from('cabinet_invites')
      .select('*')
      .eq('token', token)
      .single();

    if (inviteError || !invite) {
      return NextResponse.json({ error: 'Invitation introuvable' }, { status: 404 });
    }

    if (invite.redeemed_at) {
      return NextResponse.json({ error: 'Invitation déjà utilisée' }, { status: 410 });
    }

    if (new Date(invite.expires_at) < new Date()) {
      return NextResponse.json({ error: 'Invitation expirée' }, { status: 410 });
    }

    // ── Associe l'utilisateur au cabinet + accès Premium ───────────────────
    const { error: userError } = await service
      .from('users')
      .update({
        cabinet_id: invite.cabinet_id,
        cabinet_role: invite.role,
        plan: 'premium',
      })
      .eq('id', user.id);

    if (userError) {
      console.error('[cabinet/redeem-invite] user update error:', userError.message);
      return NextResponse.json({ error: 'Erreur mise à jour du compte' }, { status: 500 });
    }

    // ── Marque l'invitation comme utilisée ──────────────────────────────────
    await service
      .from('cabinet_invites')
      .update({ redeemed_at: new Date().toISOString(), redeemed_user_id: user.id })
      .eq('id', invite.id);

    return NextResponse.json({ ok: true, cabinet_role: invite.role });
  } catch (err) {
    console.error('[cabinet/redeem-invite] unexpected error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
