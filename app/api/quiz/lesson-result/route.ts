export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { XP_REWARDS } from '@/lib/gamification';
import { modules } from '@/data/modules';

/**
 * POST /api/quiz/lesson-result
 * Crédite de l'XP pour le quiz de fin de leçon (10 XP / bonne réponse,
 * +25 XP bonus si score parfait). Idempotent : un seul crédit par leçon
 * et par utilisateur (colonne progression.quiz_xp_awarded).
 *
 * Body: { lessonSlug: string, score: number, total: number }
 */
export async function POST(req: Request) {
  try {
    const { lessonSlug, score, total } = await req.json();
    if (!lessonSlug || typeof score !== 'number' || typeof total !== 'number' || total <= 0) {
      return NextResponse.json({ error: 'Paramètres invalides' }, { status: 400 });
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

    // Déjà crédité pour cette leçon ?
    const { data: existing } = await supabase
      .from('progression')
      .select('id, quiz_xp_awarded')
      .eq('user_id', user.id)
      .eq('lesson_slug', lessonSlug)
      .single();

    const { data: profile } = await supabase
      .from('users')
      .select('xp, plan')
      .eq('id', user.id)
      .single();

    if (existing?.quiz_xp_awarded) {
      return NextResponse.json({ alreadyAwarded: true, xpEarned: 0, totalXp: profile?.xp ?? 0 });
    }

    const clampedScore = Math.max(0, Math.min(score, total));
    const xpEarned = clampedScore * XP_REWARDS.quiz_correct
      + (clampedScore === total ? XP_REWARDS.quiz_perfect : 0);

    const { error: upsertError } = await supabase
      .from('progression')
      .upsert({
        user_id: user.id,
        module_slug: moduleSlug,
        lesson_slug: lessonSlug,
        quiz_score: clampedScore,
        quiz_total: total,
        quiz_xp_awarded: true,
      }, { onConflict: 'user_id,lesson_slug' });

    if (upsertError) {
      console.error('[quiz/lesson-result] upsert error:', upsertError.message, upsertError.code);
      return NextResponse.json({ error: 'Impossible d\'enregistrer le résultat du quiz', debug: upsertError.message }, { status: 500 });
    }

    const currentXp = profile?.xp ?? 0;
    const newXp = currentXp + xpEarned;

    await supabase
      .from('users')
      .upsert({
        id: user.id,
        email: user.email,
        xp: newXp,
        plan: profile?.plan ?? 'free',
      }, { onConflict: 'id' });

    // Badge "Expert quiz" (≥ 500 XP)
    const newBadges: string[] = [];
    if (currentXp < 500 && newXp >= 500) {
      const { error } = await supabase
        .from('user_badges')
        .insert({ user_id: user.id, badge_slug: 'quiz_master' });
      if (!error) newBadges.push('quiz_master');
    }

    return NextResponse.json({ alreadyAwarded: false, xpEarned, totalXp: newXp, newBadges });
  } catch (err) {
    console.error('/api/quiz/lesson-result error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
