import Link from 'next/link';
import { Suspense } from 'react';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import { redirect } from 'next/navigation';
import { modules } from '@/data/modules';
import { a2Modules, b1Modules, b2Modules, transversalModules } from '@/data/langue';
import { ProgressBar } from '@/components/app/ProgressBar';
import { XPBadge } from '@/components/app/XPBadge';
import { ReferralCard } from '@/components/app/ReferralCard';
import { PurchaseTracker } from '@/components/ui/PurchaseTracker';
import { getLevel, getLevelProgress, BADGES } from '@/lib/gamification';
import { BookOpen, ChevronRight, Trophy, Target, Wrench } from 'lucide-react';
import { isAdminEmail } from '@/lib/admin';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tableau de bord — maformationcivique.fr',
};

const allLangModules = [...a2Modules, ...b1Modules, ...b2Modules, ...transversalModules];
const allLangLessonSlugs = new Set(allLangModules.flatMap((m) => m.lessons.map((l) => l.slug)));
const totalLangLessons = allLangModules.reduce((a, m) => a + m.lessons.length, 0);

export default async function DashboardPage() {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/connexion');

  const { data: profile } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single();

  if (!profile) {
    const meta = user.user_metadata;
    await supabase.from('users').upsert({
      id: user.id,
      email: user.email,
      name: meta?.name || meta?.full_name || '',
      plan: 'free',
      xp: 0,
      streak_days: 0,
      last_active: new Date().toISOString().slice(0, 10),
    }, { onConflict: 'id', ignoreDuplicates: true });
  }

  const { data: progress } = await supabase
    .from('progression')
    .select('*')
    .eq('user_id', user.id);

  const { data: userBadges } = await supabase
    .from('user_badges')
    .select('badge_slug')
    .eq('user_id', user.id);

  const { count: referredCount } = await supabase
    .from('users')
    .select('*', { count: 'exact', head: true })
    .eq('referred_by', user.id);

  const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.maformationcivique.fr';
  const referralLink = `${siteUrl.replace(/\/$/, '')}/inscription?ref=${user.id}`;

  const isAdmin = isAdminEmail(user.email);
  const xp = profile?.xp ?? 0;
  const streak = profile?.streak_days ?? 0;
  const isPremium = profile?.plan === 'premium' || profile?.plan === 'langue' || profile?.plan === 'bundle' || isAdmin;
  const level = getLevel(xp);
  const levelProgress = getLevelProgress(xp);
  const earnedBadgeSlugs = new Set(userBadges?.map((b) => b.badge_slug) ?? []);

  const completedLessons = new Set(
    progress?.filter((p) => p.completed).map((p) => `${p.module_slug}:${p.lesson_slug}`) ?? []
  );
  const completedSlugs = new Set(
    progress?.filter((p) => p.completed).map((p) => p.lesson_slug) ?? []
  );

  const totalCiviqueLessons = modules.reduce((a, m) => a + m.lessons.length, 0);
  const accessibleCiviqueLessons = modules
    .filter((m) => m.freeAccess || isPremium)
    .reduce((a, m) => a + m.lessons.length, 0);

  const completedCiviqueCount = modules
    .flatMap((m) => m.lessons.map((l) => `${m.slug}:${l.slug}`))
    .filter((key) => completedLessons.has(key)).length;

  const completedLangCount = [...allLangLessonSlugs].filter((slug) => completedSlugs.has(slug)).length;

  const civiquePercent = accessibleCiviqueLessons > 0
    ? Math.round((completedCiviqueCount / accessibleCiviqueLessons) * 100)
    : 0;
  const langPercent = totalLangLessons > 0
    ? Math.round((completedLangCount / totalLangLessons) * 100)
    : 0;
  const globalPercent = (accessibleCiviqueLessons + totalLangLessons) > 0
    ? Math.round(((completedCiviqueCount + completedLangCount) / (accessibleCiviqueLessons + totalLangLessons)) * 100)
    : 0;

  const name = profile?.name ?? user.email?.split('@')[0] ?? 'vous';

  return (
    <div style={{ maxWidth: '1100px' }}>
      <Suspense><PurchaseTracker /></Suspense>
      {/* Welcome */}
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)', marginBottom: '4px' }}>
          Bonjour, {name} 👋
        </h1>
        <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)' }}>
          Continuez votre préparation à l'examen civique.
        </p>
      </div>

      {/* ── Desktop 2-column layout ───────────────────────────────────────── */}
      <div className="dashboard-grid" style={{ display: 'grid', gap: '24px', alignItems: 'start' }}>

        {/* ── Colonne principale (gauche) ─────────────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* Stats row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '12px',
            }}
            className="stats-row"
          >
            {[
              { label: 'XP total', val: xp.toLocaleString(), sub: level.label, color: level.color },
              { label: 'Progression globale', val: `${globalPercent}%`, sub: `${completedCiviqueCount + completedLangCount} leçons`, color: 'var(--color-blue-france)' },
              { label: 'Streak', val: `${streak}j`, sub: streak > 0 ? 'consécutifs' : 'Commencez !', color: streak > 0 ? 'var(--color-red-france)' : 'var(--color-text-muted)' },
            ].map(({ label, val, sub, color }) => (
              <div
                key={label}
                style={{
                  padding: '18px 20px',
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

            {/* Carte Abonnement — cliquable si gratuit (mène au choix des 3 offres) */}
            {!isPremium && !isAdmin ? (
              <Link href="#offres-premium" style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '18px 20px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--gradient-primary)',
                  boxShadow: 'var(--shadow-card)',
                  cursor: 'pointer',
                }}>
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.7)', marginBottom: '6px' }}>Abonnement</p>
                  <p style={{ fontSize: 'var(--font-size-lg)', fontWeight: 600, color: '#fff', marginBottom: '2px' }}>Gratuit</p>
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>Choisir une offre →</p>
                </div>
              </Link>
            ) : (
              <div style={{
                padding: '18px 20px',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--color-surface)',
                border: 'var(--border-default)',
                boxShadow: 'var(--shadow-card)',
              }}>
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginBottom: '6px' }}>Abonnement</p>
                <p style={{ fontSize: 'var(--font-size-lg)', fontWeight: 500, color: isAdmin ? '#7C3AED' : '#1D9E75', marginBottom: '2px' }}>{isAdmin ? 'Admin' : 'Premium'}</p>
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{isAdmin ? 'Accès complet' : 'Actif'}</p>
              </div>
            )}
          </div>

          {/* Bandeau upsell pour les utilisateurs gratuits */}
          {!isPremium && !isAdmin && (
            <div id="offres-premium" style={{
              scrollMarginTop: 24,
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(135deg, #001050 0%, #002395 60%, #CC1A1A 100%)',
              padding: '24px 28px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
            }}>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 4 }}>
                  Débloquez tout le contenu — à partir de 5 €/mois
                </p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
                  8 modules civiques · 2 700 exercices de français · Attestation PDF
                </p>
              </div>
              <div style={{ display: 'flex', gap: 10, flexShrink: 0, flexWrap: 'wrap' }}>
                <Link href="/api/stripe/start?plan=premium" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.35)',
                  color: '#fff', padding: '9px 16px', borderRadius: 100,
                  fontWeight: 600, fontSize: 13, textDecoration: 'none',
                }}>Civique — 5 €</Link>
                <Link href="/api/stripe/start?plan=langue" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.35)',
                  color: '#fff', padding: '9px 16px', borderRadius: 100,
                  fontWeight: 600, fontSize: 13, textDecoration: 'none',
                }}>Langue — 5 €</Link>
                <Link href="/api/stripe/start?plan=bundle" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: '#fff', color: '#002395',
                  padding: '9px 16px', borderRadius: 100,
                  fontWeight: 800, fontSize: 13, textDecoration: 'none',
                }}>Bundle — 10 € →</Link>
              </div>
            </div>
          )}

          {/* Level progress */}
          <div
            style={{
              padding: '20px 24px',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--color-surface)',
              border: 'var(--border-default)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text-primary)' }}>
                Niveau : {level.label}
              </span>
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                {xp} / {level.max} XP
              </span>
            </div>
            <ProgressBar value={levelProgress} color={level.color} height={8} />
          </div>

          {/* Programme — civique + langue */}
          <div
            style={{
              padding: '22px 24px',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--color-surface)',
              border: 'var(--border-default)',
            }}
          >
            <h2 style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-primary)', marginBottom: '18px' }}>
              Avancement du programme
            </h2>

            {/* Civique */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-blue-france)' }}>
                  Formation civique
                </span>
                <Link href="/modulesciviques" style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-blue-france)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Voir tout <ChevronRight size={12} />
                </Link>
              </div>
              <ProgressBar value={civiquePercent} showPercent label={`${completedCiviqueCount} / ${accessibleCiviqueLessons} leçons`} height={8} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '14px' }}>
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

            {/* Séparateur */}
            <div style={{ borderTop: 'var(--border-default)', margin: '0 0 18px' }} />

            {/* Langue */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, color: '#6D28D9' }}>
                  Langue française
                </span>
                <Link href="/moduleslinguistiques" style={{ fontSize: 'var(--font-size-xs)', color: '#6D28D9', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Voir tout <ChevronRight size={12} />
                </Link>
              </div>
              <ProgressBar value={langPercent} showPercent label={`${completedLangCount} / ${totalLangLessons} exercices`} height={8} color="#6D28D9" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '14px' }}>
                {[...a2Modules.slice(0, 2), ...b1Modules.slice(0, 1)].map((mod) => {
                  const modSlugs = mod.lessons.map((l) => l.slug);
                  const modCompleted = modSlugs.filter((s) => completedSlugs.has(s)).length;
                  const pct = mod.lessons.length > 0 ? Math.round((modCompleted / mod.lessons.length) * 100) : 0;
                  const levelColors: Record<string, string> = { a2: '#059669', b1: '#1D4ED8', b2: '#CC1A1A', transversal: '#D97706' };
                  const color = levelColors[String(mod.level).toLowerCase()] ?? '#6D28D9';
                  const shortTitle = mod.title.split(/\s+/)[0];
                  return (
                    <div key={mod.slug} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '10px', color, width: '56px', flexShrink: 0, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>
                        {shortTitle}
                      </span>
                      <div style={{ flex: 1 }}>
                        <ProgressBar value={pct} height={4} color={color} />
                      </div>
                      <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', width: '32px', textAlign: 'right' as const }}>
                        {pct}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Parrainage */}
          <ReferralCard referralLink={referralLink} referredCount={referredCount ?? 0} />
        </div>

        {/* ── Colonne secondaire (droite) ─────────────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* Quick actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link href="/quiz" style={{ display: 'block' }}>
              <div
                style={{
                  padding: '18px 20px',
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
                  padding: '18px 20px',
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
            <Link href="/modulesciviques" style={{ display: 'block' }}>
              <div
                style={{
                  padding: '18px 20px',
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
                  <p style={{ fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '2px' }}>Modules civiques</p>
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    {completedCiviqueCount} / {accessibleCiviqueLessons} leçons
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Badges */}
          <div
            style={{
              padding: '20px 24px',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--color-surface)',
              border: 'var(--border-default)',
            }}
          >
            <h2 style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-primary)', marginBottom: '14px' }}>
              Badges
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '10px' }}>
              {BADGES.map((badge) => {
                const earned = earnedBadgeSlugs.has(badge.slug);
                return (
                  <div
                    key={badge.slug}
                    title={badge.desc}
                    style={{
                      padding: '10px 6px',
                      borderRadius: 'var(--radius-md)',
                      border: 'var(--border-default)',
                      textAlign: 'center',
                      opacity: earned ? 1 : 0.35,
                      transition: 'all 200ms ease-out',
                      background: earned ? 'var(--color-blue-light)' : 'transparent',
                    }}
                  >
                    <div style={{ fontSize: '22px', marginBottom: '5px' }}>{badge.icon}</div>
                    <p style={{ fontSize: '11px', color: 'var(--color-text-secondary)', lineHeight: 1.3 }}>
                      {badge.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Support */}
          <div style={{
            borderRadius: 'var(--radius-xl)',
            border: '1px dashed var(--color-border)',
            padding: '14px 18px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: 10, flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Wrench size={15} color="var(--color-text-muted)" style={{ flexShrink: 0 }} />
              <p style={{ fontSize: 13, color: 'var(--color-text-muted)', margin: 0 }}>
                Un problème sur la plateforme ?
              </p>
            </div>
            <a
              href="mailto:contact@maformationcivique.fr?subject=Signalement d'un problème technique&body=Bonjour,%0A%0AJe signale un problème sur la plateforme.%0A%0ADescription :%0A%0AMerci."
              style={{
                fontSize: 13, fontWeight: 600,
                color: 'var(--color-blue-france)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Signaler →
            </a>
          </div>
        </div>
      </div>

      <style suppressHydrationWarning>{`
        .dashboard-grid { grid-template-columns: 1fr 340px; }
        .stats-row { grid-template-columns: repeat(4, 1fr) !important; }
        @media (max-width: 1024px) {
          .dashboard-grid { grid-template-columns: 1fr !important; }
          .stats-row { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-row { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
