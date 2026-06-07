import { NextResponse } from 'next/server';
import { createPortalSession } from '@/lib/stripe';
import { createServerSupabaseClient } from '@/lib/supabase-server';

export async function POST() {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data: profile } = await supabase
    .from('users')
    .select('stripe_id')
    .eq('id', user.id)
    .single();

  if (!profile?.stripe_id) {
    return NextResponse.json({ error: 'No Stripe customer' }, { status: 400 });
  }

  const session = await createPortalSession(profile.stripe_id, process.env.NEXT_PUBLIC_APP_URL!);
  return NextResponse.json({ url: session.url });
}
