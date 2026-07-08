export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { modules } from '@/data/modules';

const totalLessons = modules.reduce((a, m) => a + m.lessons.length, 0);

export async function GET(req: NextRequest) {
  try {
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

    const url = new URL(req.url);
    const from = url.searchParams.get('from') ?? '';
    const to = url.searchParams.get('to') ?? '';

    const service = createServiceRoleClient();

    const { data: members } = await service
      .from('users')
      .select('id, name, email, plan, last_active, created_at')
      .eq('cabinet_id', profile.cabinet_id)
      .neq('cabinet_role', 'admin');

    if (!members?.length) {
      const csv = 'Nom,Email,Leçons complétées,Progression (%),Dernière activité\n';
      return new NextResponse(csv, {
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': `attachment; filename="export-cabinet-${new Date().toISOString().slice(0, 10)}.csv"`,
        },
      });
    }

    const memberIds = members.map((m) => m.id);

    let progressQuery = service
      .from('progression')
      .select('user_id, lesson_slug, completed, completed_at')
      .in('user_id', memberIds)
      .eq('completed', true);

    if (from) progressQuery = progressQuery.gte('completed_at', from);
    if (to)   progressQuery = progressQuery.lte('completed_at', to + 'T23:59:59');

    const { data: progressRows } = await progressQuery;

    const rows: string[] = [
      'Nom,Email,Plan,Leçons complétées,Progression (%),Dernière activité,Date inscription',
    ];

    for (const m of members) {
      const userProgress = (progressRows ?? []).filter((p) => p.user_id === m.id);
      const completed = userProgress.length;
      const pct = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
      const name = (m.name || '').replace(/,/g, ' ');
      const email = (m.email || '').replace(/,/g, ' ');
      const lastActive = m.last_active ? new Date(m.last_active).toLocaleDateString('fr-FR') : '';
      const createdAt = m.created_at ? new Date(m.created_at).toLocaleDateString('fr-FR') : '';
      rows.push(`${name},${email},${m.plan ?? ''},${completed},${pct}%,${lastActive},${createdAt}`);
    }

    const csv = rows.join('\n');
    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="export-cabinet-${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  } catch (err) {
    console.error('[cabinet/export]', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
