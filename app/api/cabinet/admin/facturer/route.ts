/**
 * POST /api/cabinet/admin/facturer
 * Pointe les activations d'un partenaire comme facturées.
 * Réservé aux administrateurs (ADMIN_EMAILS).
 *
 * Sans cette action, `facture_le` ne se remplit jamais : le montant dû
 * s'accumule indéfiniment et plus rien ne distingue ce qui a été encaissé
 * de ce qui reste à encaisser.
 *
 * Body: { cabinet_id: string, reference?: string }
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

    const { cabinet_id, reference } = await req.json() as
      { cabinet_id?: string; reference?: string };
    if (!cabinet_id) {
      return NextResponse.json({ error: 'cabinet_id manquant' }, { status: 400 });
    }

    const service = createServiceRoleClient();

    // Seules les invitations réellement transformées en compte sont facturables.
    const { data: pointees, error } = await service
      .from('cabinet_invites')
      .update({ facture_le: new Date().toISOString(), facture_ref: reference?.trim() || null })
      .eq('cabinet_id', cabinet_id)
      .not('redeemed_at', 'is', null)
      .is('facture_le', null)
      .select('id');

    if (error) {
      console.error('[cabinet/admin/facturer]', error.message);
      return NextResponse.json({ error: 'Erreur lors du pointage' }, { status: 500 });
    }

    return NextResponse.json({ ok: true, activations: pointees?.length ?? 0 });
  } catch (err) {
    console.error('[cabinet/admin/facturer] unexpected error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
