import { NextResponse } from 'next/server';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';

export async function PATCH(request: Request) {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });

  const { data: profile } = await supabase
    .from('users')
    .select('cabinet_id, cabinet_role')
    .eq('id', user.id)
    .single();

  if (!profile?.cabinet_id || profile.cabinet_role !== 'admin') {
    return NextResponse.json({ error: 'Accès refusé' }, { status: 403 });
  }

  const body = await request.json().catch(() => ({}));
  const { name, palette_slug, google_review_link } = body as {
    name?: string;
    palette_slug?: string;
    google_review_link?: string | null;
  };

  const VALID_PALETTES = ['tricolore', 'marine', 'or', 'emeraude', 'bordeaux', 'ardoise'];

  const updates: Record<string, unknown> = {};
  if (name && typeof name === 'string' && name.trim().length > 0) {
    updates.name = name.trim();
  }
  if (palette_slug && VALID_PALETTES.includes(palette_slug)) {
    updates.palette_slug = palette_slug;
  }
  if ('google_review_link' in body) {
    updates.google_review_link = google_review_link?.trim() || null;
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: 'Aucune donnée valide à enregistrer' }, { status: 400 });
  }

  const service = createServiceRoleClient();
  const { error } = await service
    .from('cabinets')
    .update(updates)
    .eq('id', profile.cabinet_id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
