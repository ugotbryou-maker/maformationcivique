/**
 * GET /api/cabinet/invite/[token]
 * Lecture publique limitée d'une invitation cabinet — utilisée par la page
 * d'inscription pour afficher un bandeau "Vous rejoignez {cabinet.name}"
 * avant la création du compte. Ne renvoie aucune donnée sensible.
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createServiceRoleClient } from '@/lib/supabase-server';

export async function GET(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  try {
    const { token } = await params;
    if (!token) {
      return NextResponse.json({ error: 'Token manquant' }, { status: 400 });
    }

    const service = createServiceRoleClient();

    const { data: invite, error } = await service
      .from('cabinet_invites')
      .select('cabinet_id, role, expires_at, redeemed_at')
      .eq('token', token)
      .single();

    if (error || !invite) {
      return NextResponse.json({ error: 'Invitation introuvable' }, { status: 404 });
    }

    if (invite.redeemed_at) {
      return NextResponse.json({ error: 'Invitation déjà utilisée' }, { status: 410 });
    }

    if (new Date(invite.expires_at) < new Date()) {
      return NextResponse.json({ error: 'Invitation expirée' }, { status: 410 });
    }

    const { data: cabinet } = await service
      .from('cabinets')
      .select('name')
      .eq('id', invite.cabinet_id)
      .single();

    return NextResponse.json({
      valid: true,
      cabinet_name: cabinet?.name ?? 'votre cabinet',
      role: invite.role,
    });
  } catch (err) {
    console.error('[cabinet/invite/token] unexpected error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
