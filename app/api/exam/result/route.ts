export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { XP_REWARDS } from '@/lib/gamification';

const VALID_LEVELS = new Set(['CSP', 'CR', 'NAT']);

/**
 * POST /api/exam/result
 * Crédite l'XP pour un examen blanc réussi (100 XP, XP_REWARDS.exam_passed)
 * et attribue les badges "exam_passed" / "perfect_exam". Idempotent : un
 * seul crédit par niveau d'examen (CSP/CR/NAT) et par utilisateur
 * (colonne exam_results.xp_awarded).
 *
 * Body: { level: 'CSP'|'CR'|'NAT', score: number, total: number }
 */
export async function POST(req: Request) {
  try {
    const { level, score, total } = await req.json();
    if (
      typeof level !== 'string' || !VALID_LEVELS.has(level) ||
      typeof score !== 'number' || typeof total !== 'number' || total <= 0
    ) {
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

    const clampedScore = Math.max(0, Math.min(score, total));
    const passed = clampedScore / total >= 0.8;
    const isPerfect = clampedScore === total;

    // Déjà crédité pour ce niveau d'examen ?
    const { data: existing } = await supabase
      .from('exam_results')
      .select('id, xp_awarded')
      .eq('user_id', user.id)
      .eq('exam_level', level)
      .single();

    const { data: profile } = await supabase
      .from('users')
      .select('xp, plan')
      .eq('id', user.id)
      .single();

    if (existing?.xp_awarded) {
      return NextResponse.json({ alreadyAwarded: true, xpEarned: 0, totalXp: profile?.xp ?? 0, newBadges: [] });
    }

    // On enregistre toujours le résultat (utile pour /progression),
    // mais on ne marque "xp_awarded" que si l'examen est réussi —
    // un échec ne consomme pas le crédit, l'utilisateur pourra
    // retenter et toucher les 100 XP la première fois qu'il réussit.
    const { error: upsertError } = await supabase
      .from('exam_results')
      .upsert({
        user_id: user.id,
        exam_level: level,
        score: clampedScore,
        total_q: total,
        passed,
        xp_awarded: passed,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id,exam_level' });

    if (upsertError) {
      console.error('[exam/result] upsert error:', upsertError.message, upsertError.code);
      return NextResponse.json({ error: "Impossible d'enregistrer le résultat de l'examen", debug: upsertError.message }, { status: 500 });
    }

    if (!passed) {
      return NextResponse.json({ alreadyAwarded: false, xpEarned: 0, totalXp: profile?.xp ?? 0, newBadges: [] });
    }

    const xpEarned = XP_REWARDS.exam_passed;
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

    // Badges "Prêt pour l'examen" (≥ 80%) et "Parfait !" (100%)
    const newBadges: string[] = [];

    const { error: passedBadgeError } = await supabase
      .from('user_badges')
      .insert({ user_id: user.id, badge_slug: 'exam_passed' });
    if (!passedBadgeError) newBadges.push('exam_passed');

    if (isPerfect) {
      const { error: perfectBadgeError } = await supabase
        .from('user_badges')
        .insert({ user_id: user.id, badge_slug: 'perfect_exam' });
      if (!perfectBadgeError) newBadges.push('perfect_exam');
    }

    // Badge "Expert quiz" (≥ 500 XP)
    if (currentXp < 500 && newXp >= 500) {
      const { error } = await supabase
        .from('user_badges')
        .insert({ user_id: user.id, badge_slug: 'quiz_master' });
      if (!error) newBadges.push('quiz_master');
    }

    return NextResponse.json({ alreadyAwarded: false, xpEarned, totalXp: newXp, newBadges });
  } catch (err) {
    console.error('/api/exam/result error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
