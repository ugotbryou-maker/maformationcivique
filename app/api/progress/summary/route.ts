export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { modules } from '@/data/modules';

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    if (!supabaseUrl || supabaseUrl.includes('placeholder')) {
      return NextResponse.json({});
    }

    const cookieStore = await cookies();
    const supabase = createServerClient(supabaseUrl, supabaseKey, {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll() {},
      },
    });

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({});

    const { data: progress } = await supabase
      .from('progression')
      .select('module_slug, lesson_slug, completed')
      .eq('user_id', user.id)
      .eq('completed', true);

    // Construire le résumé par module
    const completedByModule: Record<string, Set<string>> = {};
    for (const row of progress ?? []) {
      if (!completedByModule[row.module_slug]) {
        completedByModule[row.module_slug] = new Set();
      }
      completedByModule[row.module_slug].add(row.lesson_slug);
    }

    const summary: Record<string, { completed: number; total: number; percent: number }> = {};
    for (const mod of modules) {
      const completed = completedByModule[mod.slug]?.size ?? 0;
      const total = mod.lessons.length;
      summary[mod.slug] = {
        completed,
        total,
        percent: total > 0 ? Math.round((completed / total) * 100) : 0,
      };
    }

    return NextResponse.json(summary);
  } catch {
    return NextResponse.json({});
  }
}
