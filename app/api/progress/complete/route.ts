export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { XP_REWARDS } from '@/lib/gamification';
import { modules } from '@/data/modules';

export async function POST(req: Request) {
  try {
    const { lessonSlug } = await req.json();
    if (!lessonSlug) {
      return NextResponse.json({ error: 'lessonSlug requis' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    if (!supabaseUrl || supabaseUrl.includes('placeholder')) {
      return NextResponse.json({ error: 'Supabase non configuré' }, { status: 503 });
    }

    const cookieStore = await cookies();
    const supabase = createServerClient(supabaseUrl, supabaseKey, {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll() {},
      },
    });

    // Vérifier l'utilisateur
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
    }

    // Trouver le module de cette leçon
    let moduleSlug = '';
    for (const m of modules) {
      if (m.lessons.find((l) => l.slug === lessonSlug)) {
        moduleSlug = m.slug;
        break;
      }
    }

    // Vérifier si déjà complétée
    const { data: existing } = await supabase
      .from('progression')
      .select('id, completed')
      .eq('user_id', user.id)
      .eq('lesson_slug', lessonSlug)
      .single();

    if (existing?.completed) {
      // Déjà complétée — retourner sans re-créditer XP
      const { data: profile } = await supabase
        .from('users')
        .select('xp')
        .eq('id', user.id)
        .single();
      return NextResponse.json({
        alreadyCompleted: true,
        xpEarned: 0,
        totalXp: profile?.xp ?? 0,
      });
    }

    const xpEarned = XP_REWARDS.lesson_completed; // 50 XP

    // Upsert progression
    await supabase
      .from('progression')
      .upsert({
        user_id: user.id,
        module_slug: moduleSlug,
        lesson_slug: lessonSlug,
        completed: true,
        completed_at: new Date().toISOString(),
      }, { onConflict: 'user_id,lesson_slug' });

    // Ajouter XP au profil
    const { data: profile } = await supabase
      .from('users')
      .select('xp, streak_days, last_active')
      .eq('id', user.id)
      .single();

    const currentXp = profile?.xp ?? 0;
    const newXp = currentXp + xpEarned;

    // Streak : si dernière activité = hier, on incrémente ; sinon reset à 1
    const today = new Date().toISOString().slice(0, 10);
    const lastActive = profile?.last_active ?? '';
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    let streakDays = profile?.streak_days ?? 0;
    if (lastActive === today) {
      // Déjà actif aujourd'hui — pas de changement streak
    } else if (lastActive === yesterday) {
      streakDays += 1;
    } else {
      streakDays = 1;
    }

    await supabase
      .from('users')
      .update({ xp: newXp, streak_days: streakDays, last_active: today })
      .eq('id', user.id);

    // Vérifier badges à débloquer
    const newBadges: string[] = [];

    // Badge première leçon
    const { count: completedCount } = await supabase
      .from('progression')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .eq('completed', true);

    if ((completedCount ?? 0) === 1) {
      const { error } = await supabase
        .from('user_badges')
        .insert({ user_id: user.id, badge_slug: 'first_lesson' });
      if (!error) newBadges.push('first_lesson');
    }

    // Badge tous les modules
    const totalLessons = modules.reduce((a, m) => a + m.lessons.length, 0);
    if ((completedCount ?? 0) >= totalLessons) {
      const { error } = await supabase
        .from('user_badges')
        .insert({ user_id: user.id, badge_slug: 'all_modules' });
      if (!error) newBadges.push('all_modules');
    }

    // Badge quiz_master (500 XP)
    if (currentXp < 500 && newXp >= 500) {
      const { error } = await supabase
        .from('user_badges')
        .insert({ user_id: user.id, badge_slug: 'quiz_master' });
      if (!error) newBadges.push('quiz_master');
    }

    // Badge streak_5
    if (streakDays >= 5) {
      const { error } = await supabase
        .from('user_badges')
        .insert({ user_id: user.id, badge_slug: 'streak_5' })
        .select();
      if (!error) newBadges.push('streak_5');
    }

    return NextResponse.json({
      alreadyCompleted: false,
      xpEarned,
      totalXp: newXp,
      newBadges,
      streakDays,
    });
  } catch (err) {
    console.error('/api/progress/complete error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
