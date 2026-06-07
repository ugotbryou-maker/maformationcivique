import Link from 'next/link';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import { redirect } from 'next/navigation';
import { modules } from '@/data/modules';
import { ProgressBar } from '@/components/app/ProgressBar';
import { XPBadge } from '@/components/app/XPBadge';
import { getLevel, getLevelProgress, BADGES } from '@/lib/gamification';
import { BookOpen, ChevronRight, Trophy, Target } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tableau de bord — maformationcivique.fr',
};

export default async function DashboardPage() {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/connexion');

  const { data: profile } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single();

  const { data: progress } = await supabase
    .from('progression')
    .select('*')
    .eq('user_id', user.id);

  const { data: userBadges } = await supabase
    .from('user_badges')
    .select('badge_slug')
    .eq('user_id', user.id);

  const xp = profile?.xp ?? 0;
  const streak = profile?.streak_days ?? 0;
  const isPremium = profile?.plan === 'premium';
  const level = getLevel(xp);
  const levelProgress = getLevelProgress(xp);
  const earnedBadgeSlugs = new Set(userBadges?.map((b) => b.badge_slug) ?? []);

  const completedLessons = new Set(
    progress?.filter((p) => p.completed).map((p) => `${p.module_slug}:${p.lesson_slug}`) ?? []
  );

  const totalLessons = modules.reduce((a, m) => a + m.lessons.length, 0);
  const accessibleLessons = modules
    .filter((m) => m.freeAccess || isPremium)
    .reduce((a, m) => a + m.lessons.length, 0);
  const completedCount = completedLessons.size;
  const progressPercent = accessibleLessons > 0
    ? Math.round((completedCount / accessibleLessons) * 100)
    : 0;

  const name = profile?.name ?? user.email?.split('@')[0] ?? 'vous';

  return (
    <div style={{ maxWidth: '800px' }}>
      {/* Welcome */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)', marginBottom: '4px' }}>
          Bonjour, {name} 👋
        </h1>
        <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)' }}>
          Continuez votre préparation à l'examen civique.
        </p>
      </div>

      {/* Stats row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '16px',
          marginBottom: '32px',
        }}
      >
        {[
          { label: 'XP total', val: xp.toLocaleString(), sub: level.label, color: level.color },
          { label: 'Leçons complétées', val: completedCount.toString(), sub: `sur ${accessibleLessons}`, color: 'var(--color-blue-france)' },
          { label: 'Streak', val: `${streak}j`, sub: streak > 0 ? 'consécutifs' : 'Commencez !', color: streak > 0 ? 'var(--color-red-france)' : 'var(--color-text-muted)' },
          { label: 'Abonnement', val: isPremium ? 'Premium' : 'Gratuit', sub: isPremium ? 'Actif' : 'Passer Premium', color: isPremium ? '#1D9E75' : 'var(--color-blue-france)' },
        ].map(({ label, val, sub, color }) => (
          <div
            key={label}
            style={{
              padding: '20px',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--color-surface)',
              border: 'var(--border-default)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginBottom: '6px' }}>{label}</p>
            <p style={{ fontSize: 'var(--font-size-lg)', fontWeight: 500, color, marginBottom: '2px' }}>{val}</p>
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{sub}</p>
          </div>
        ))}
      </div>

      {/* Level progress */}
      <div
        style={{
          padding: '24px',
          borderRadius: 'var(--radius-xl)',
          background: 'var(--color-surface)',
          border: 'var(--border-default)',
          marginBottom: '24px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text-primary)' }}>
            Niveau : {level.label}
          </span>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
            {xp} / {level.max} XP
          </span>
        </div>
        <ProgressBar value={levelProgress} color={level.color} height={8} />
      </div>

      {/* Programme progress */}
      <div
        style={{
          padding: '24px',
          borderRadius: 'var(--radius-xl)',
          background: 'var(--color-surface)',
          border: 'var(--border-default)',
          marginBottom: '24px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-primary)' }}>
            Avancement du programme
          </h2>
          <Link href="/modules" style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-blue-france)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            Voir tout <ChevronRight size={12} />
          </Link>
        </div>
        <ProgressBar value={progressPercent} showPercent label={`${completedCount} / ${accessibleLessons} leçons`} height={8} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '20px' }}>
          {modules.slice(0, 3).map((mod) => {
            const modLessons = mod.lessons.length;
            const modCompleted = mod.lessons.filter((l) =>
              completedLessons.has(`${mod.slug}:${l.slug}`)
            ).length;
            const pct = modLessons > 0 ? Math.round((modCompleted / modLessons) * 100) : 0;
            const locked = !mod.freeAccess && !isPremium;

            return (
              <div key={mod.slug} style={{ display: 'flex', alignItems: 'center', gap: '12px', opacity: locked ? 0.5 : 1 }}>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', width: '20px', flexShrink: 0 }}>
                  {mod.num}
                </span>
                <div style={{ flex: 1 }}>
                  <ProgressBar value={pct} height={4} />
                </div>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', width: '32px', textAlign: 'right' }}>
                  {pct}%
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick actions */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '32px' }}>
        <Link href="/quiz" style={{ display: 'block' }}>
          <div
            style={{
              padding: '20px',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--gradient-primary)',
              color: '#FFFFFF',
              cursor: 'pointer',
              transition: 'all 200ms ease-out',
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            <Target size={22} />
            <div>
              <p style={{ fontWeight: 500, marginBottom: '2px' }}>S'entraîner</p>
              <p style={{ fontSize: 'var(--font-size-xs)', opacity: 0.75 }}>Questions aléatoires</p>
            </div>
          </div>
        </Link>
        <Link href="/examen" style={{ display: 'block' }}>
          <div
            style={{
              padding: '20px',
              borderRadius: 'var(--radius-lg)',
              background: isPremium ? 'var(--color-surface)' : 'var(--color-off-white)',
              border: 'var(--border-default)',
              cursor: 'pointer',
              transition: 'all 200ms ease-out',
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            <Trophy size={22} color={isPremium ? 'var(--color-blue-france)' : 'var(--color-text-muted)'} />
            <div>
              <p style={{ fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '2px' }}>Examen blanc</p>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                {isPremium ? '40 questions · 30 min' : 'Premium requis'}
              </p>
            </div>
          </div>
        </Link>
        <Link href="/modules" style={{ display: 'block' }}>
          <div
            style={{
              padding: '20px',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--color-surface)',
              border: 'var(--border-default)',
              cursor: 'pointer',
              transition: 'all 200ms ease-out',
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            <BookOpen size={22} color="var(--color-blue-france)" />
            <div>
              <p style={{ fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '2px' }}>Modules</p>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                {completedCount} / {accessibleLessons} leçons
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Badges */}
      <div
        style={{
          padding: '24px',
          borderRadius: 'var(--radius-xl)',
          background: 'var(--color-surface)',
          border: 'var(--border-default)',
        }}
      >
        <h2 style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-primary)', marginBottom: '16px' }}>
          Badges
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '12px' }}>
          {BADGES.map((badge) => {
            const earned = earnedBadgeSlugs.has(badge.slug);
            return (
              <div
                key={badge.slug}
                title={badge.desc}
                style={{
                  padding: '12px 8px',
                  borderRadius: 'var(--radius-md)',
                  border: 'var(--border-default)',
                  textAlign: 'center',
                  opacity: earned ? 1 : 0.35,
                  transition: 'all 200ms ease-out',
                  background: earned ? 'var(--color-blue-light)' : 'transparent',
                }}
              >
                <div style={{ fontSize: '24px', marginBottom: '6px' }}>{badge.icon}</div>
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', lineHeight: 1.3 }}>
                  {badge.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
