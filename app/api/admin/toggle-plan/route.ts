export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase-server';

const ADMIN_EMAILS = (process.env.ADMIN_EMAIL ?? 'tamburriniugo@gmail.com')
  .split(',').map((e) => e.trim().toLowerCase());

export async function POST() {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
    }
    if (!ADMIN_EMAILS.includes(user.email?.toLowerCase() ?? '')) {
      return NextResponse.json({ error: 'Accès refusé' }, { status: 403 });
    }

    // Récupérer le plan actuel
    const { data: profile } = await supabase
      .from('users')
      .select('plan')
      .eq('id', user.id)
      .single();

    const currentPlan = profile?.plan ?? 'free';
    const newPlan = currentPlan === 'premium' ? 'free' : 'premium';

    await supabase
      .from('users')
      .upsert({ id: user.id, email: user.email, plan: newPlan }, { onConflict: 'id' });

    return NextResponse.json({ plan: newPlan });
  } catch (err) {
    console.error('toggle-plan error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
