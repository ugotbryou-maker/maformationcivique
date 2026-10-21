/**
 * PUT /api/admin/facturation/[id]/statut
 * Seul champ modifiable d'une facture : son statut. Le numéro, les montants
 * et les coordonnées sont figés à l'émission.
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';

const STATUTS = new Set(['brouillon', 'emise', 'payee', 'annulee']);

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!isAdminEmail(user?.email)) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });
    }

    const { id } = await params;
    const { statut } = await req.json() as { statut?: string };
    if (!statut || !STATUTS.has(statut)) {
      return NextResponse.json({ error: 'Statut inconnu' }, { status: 400 });
    }

    const s = createServiceRoleClient();
    const { error } = await s
      .from('factures')
      .update({ statut, paye_le: statut === 'payee' ? new Date().toISOString().slice(0, 10) : null })
      .eq('id', id);

    if (error) {
      console.error('[facturation/statut]', error.message);
      return NextResponse.json({ error: 'Changement impossible' }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[facturation/statut] erreur', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
