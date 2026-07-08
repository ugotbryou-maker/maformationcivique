/**
 * POST /api/cabinet/gmb-link
 * Enregistre le lien Google My Business du cabinet de l'admin connecté.
 * Requiert : cabinets.google_review_link text (migration à appliquer en DB).
 *
 * Body: { google_review_link: string }
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';

export async function POST(req: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });

    const { google_review_link } = await req.json() as { google_review_link?: string };
    const link = google_review_link?.trim() ?? '';

    if (link && !/^https?:\/\/.+/.test(link)) {
      return NextResponse.json({ error: 'URL invalide' }, { status: 400 });
    }

    const { data: profile } = await supabase
      .from('users')
      .select('cabinet_id, cabinet_role')
      .eq('id', user.id)
      .single();

    if (!profile?.cabinet_id || profile.cabinet_role !== 'admin') {
      return NextResponse.json({ error: 'Accès refusé' }, { status: 403 });
    }

    const service = createServiceRoleClient();
    const { error } = await service
      .from('cabinets')
      .update({ google_review_link: link || null })
      .eq('id', profile.cabinet_id);

    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[gmb-link]', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
