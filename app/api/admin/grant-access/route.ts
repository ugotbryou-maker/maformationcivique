export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import { createServiceRoleClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';

const PLANS = ['free', 'premium', 'langue', 'bundle'] as const;

export async function POST(req: Request) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user || !isAdminEmail(user.email)) {
      return NextResponse.json({ error: 'Accès refusé' }, { status: 403 });
    }

    const body = await req.json();
    const email = (body.email as string | undefined)?.trim().toLowerCase();
    const plan = body.plan as (typeof PLANS)[number] | undefined;
    const durationDays = Number(body.durationDays ?? 365);

    if (!email || !plan || !PLANS.includes(plan)) {
      return NextResponse.json({ error: 'Paramètres invalides (email, plan requis)' }, { status: 400 });
    }

    const admin = createServiceRoleClient();

    const { data: target } = await admin
      .from('users')
      .select('id, email')
      .eq('email', email)
      .single();

    if (!target) {
      return NextResponse.json({ error: `Aucun compte trouvé pour ${email}` }, { status: 404 });
    }

    const subEndAt = new Date();
    subEndAt.setDate(subEndAt.getDate() + durationDays);

    const { error } = await admin
      .from('users')
      .update({ plan, sub_end_at: subEndAt.toISOString() })
      .eq('id', target.id);

    if (error) throw error;

    return NextResponse.json({ ok: true, email, plan, sub_end_at: subEndAt.toISOString() });
  } catch (err) {
    console.error('grant-access error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
