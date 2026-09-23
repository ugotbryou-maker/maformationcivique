/**
 * POST /api/cabinet/admin/cloturer
 * Met fin au partenariat d'un cabinet : ses membres repassent en plan 'free'
 * et ses invitations non utilisées sont périmées. Réservé aux administrateurs.
 *
 * Pourquoi une action manuelle : `sub_end_at` n'est lu nulle part pour bloquer
 * l'accès au contenu — le plan seul fait foi. Une date de fin ne révoque donc
 * rien d'elle-même. Tant que ce n'est pas corrigé en profondeur, la clôture
 * d'un essai doit être explicite.
 *
 * Body: { cabinet_id: string }
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';

export async function POST(req: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!isAdminEmail(user?.email)) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });
    }

    const { cabinet_id } = await req.json() as { cabinet_id?: string };
    if (!cabinet_id) {
      return NextResponse.json({ error: 'cabinet_id manquant' }, { status: 400 });
    }

    const service = createServiceRoleClient();

    const { data: cabinet } = await service
      .from('cabinets')
      .select('id, name')
      .eq('id', cabinet_id)
      .single();

    if (!cabinet) {
      return NextResponse.json({ error: 'Cabinet introuvable' }, { status: 404 });
    }

    // On ne détache pas les comptes du cabinet : l'historique de facturation
    // et le décompte des activations doivent rester lisibles. Seul l'accès
    // au contenu est retiré.
    const { data: revoques, error: revokeError } = await service
      .from('users')
      .update({ plan: 'free', sub_end_at: null })
      .eq('cabinet_id', cabinet_id)
      .select('id');

    if (revokeError) {
      console.error('[cabinet/admin/cloturer] revoke error:', revokeError.message);
      return NextResponse.json({ error: 'Erreur lors de la révocation des accès' }, { status: 500 });
    }

    const maintenant = new Date().toISOString();

    await service
      .from('cabinet_invites')
      .update({ expires_at: maintenant })
      .eq('cabinet_id', cabinet_id)
      .is('redeemed_at', null);

    await service
      .from('cabinets')
      .update({ sub_end_at: maintenant.slice(0, 10) })
      .eq('id', cabinet_id);

    return NextResponse.json({ ok: true, comptes_revoques: revoques?.length ?? 0 });
  } catch (err) {
    console.error('[cabinet/admin/cloturer] unexpected error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
