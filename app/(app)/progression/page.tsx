import { createServerSupabaseClient } from '@/lib/supabase-server';
import { redirect } from 'next/navigation';
import { modules } from '@/data/modules';
import { a2Modules, b1Modules, b2Modules, transversalModules } from '@/data/langue';
import { ProgressBar } from '@/components/app/ProgressBar';
import { getLevel, getLevelProgress } from '@/lib/gamification';
import { CheckCircle, Clock, Target } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Progression — maformationcivique.fr',
};

export default async function ProgressionPage() {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/connexion');

  const [profileRes, progressRes, resultsRes] = await Promise.all([
    supabase.from('users').select('*').eq('id', user.id).single(),
    supabase.from('progression').select('*').eq('user_id', user.id),
    supabase.from('quiz_results').select('*').eq('user_id', user.id),
  ]);

  const profile = profileRes.data;
  const progress = progressRes.data ?? [];
  const results = resultsRes.data ?? [];

  const xp = profile?.xp ?? 0;
  const isPremium = profile?.plan === 'premium';
  const level = getLevel(xp);
  const levelProgress = getLevelProgress(xp);

  const completedSet = new Set(
    progress.filter((p) => p.completed).map((p) => `${p.module_slug}:${p.lesson_slug}`)
  );
  const completedSlugSet = new Set(
    progress.filter((p) => p.completed).map((p) => p.lesson_slug)
  );

  const langLevels = [
    { label: 'Niveau A2', key: 'a2', color: '#059669', mods: a2Modules },
    { label: 'Niveau B1', key: 'b1', color: '#1D4ED8', mods: b1Modules },
    { label: 'Niveau B2', key: 'b2', color: '#CC1A1A', mods: b2Modules },
    { label: 'Transversal', key: 'transversal', color: '#7C3AED', mods: transversalModules },
  ];

  const totalAnswered = results.length;
  const totalCorrect = results.filter((r) => r.is_correct).length;
  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  return (
    <div style={{ maxWidth: '720px' }}>
      <h1 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)', marginBottom: '32px' }}>
        Ma progression
      </h1>

      {/* XP & Level */}
      <div
        style={{
          padding: '28px',
          borderRadius: 'var(--radius-xl)',
          background: 'var(--gradient-card)',
          color: '#FFFFFF',
          marginBottom: '24px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div>
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>Niveau actuel</p>
            <p style={{ fontSize: 'var(--font-size-xl)', fontWeight: 500 }}>{level.label}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>XP total</p>
            <p style={{ fontSize: 'var(--font-size-xl)', fontWeight: 500 }}>{xp.toLocaleString()}</p>
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.6)' }}>Progression vers le niveau suivant</span>
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.8)' }}>{levelProgress}%</span>
          </div>
          <div style={{ height: '6px', borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,0.2)', overflow: 'hidden' }}>
            <div style={{ width: `${levelProgress}%`, height: '100%', background: '#FFFFFF', borderRadius: 'var(--radius-pill)', transition: 'width 500ms ease-out' }} />
          </div>
        </div>
      </div>

      {/* Stats globales */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
        {[
          { icon: Target, label: 'Questions répondues', val: totalAnswered.toString() },
          { icon: CheckCircle, label: 'Bonnes réponses', val: `${totalCorrect}` },
          { icon: Clock, label: 'Précision', val: `${accuracy}%` },
        ].map(({ icon: Icon, label, val }) => (
          <div
            key={label}
            style={{
              padding: '20px',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--color-surface)',
              border: 'var(--border-default)',
              textAlign: 'center',
            }}
          >
            <Icon size={20} color="var(--color-blue-france)" style={{ margin: '0 auto 8px' }} />
            <p style={{ fontSize: 'var(--font-size-lg)', fontWeight: 500, color: 'var(--color-text-primary)' }}>{val}</p>
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>{label}</p>
          </div>
        ))}
      </div>

      {/* Modules civique — détail */}
      <div
        style={{
          background: 'var(--color-surface)',
          borderRadius: 'var(--radius-xl)',
          border: 'var(--border-default)',
          padding: '24px',
          marginBottom: '20px',
        }}
      >
        <h2 style={{ fontSize: 'var(--font-size-base)', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '20px' }}>
          Formation civique — détail par module
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {modules.map((mod) => {
            const locked = !mod.freeAccess && !isPremium;
            const total = mod.lessons.length;
            const done = mod.lessons.filter((l) => completedSet.has(`${mod.slug}:${l.slug}`)).length;
            const pct = total > 0 ? Math.round((done / total) * 100) : 0;
            return (
              <div key={mod.slug} style={{ opacity: locked ? 0.45 : 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text-primary)' }}>
                    {mod.num} · {mod.title}
                  </span>
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    {locked ? 'Premium' : `${done}/${total} leçons`}
                  </span>
                </div>
                <ProgressBar value={pct} height={6} showPercent />
              </div>
            );
          })}
        </div>
      </div>

      {/* Langue française — détail par module */}
      <div
        style={{
          background: 'var(--color-surface)',
          borderRadius: 'var(--radius-xl)',
          border: 'var(--border-default)',
          padding: '24px',
        }}
      >
        <h2 style={{ fontSize: 'var(--font-size-base)', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '20px' }}>
          Langue française — détail par niveau
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {langLevels.map(({ label, key, color, mods }) => {
            const lvlSlugs = mods.flatMap((m) => m.lessons.map((l) => l.slug));
            const lvlDone = lvlSlugs.filter((s) => completedSlugSet.has(s)).length;
            const lvlPct = lvlSlugs.length > 0 ? Math.round((lvlDone / lvlSlugs.length) * 100) : 0;
            return (
              <div key={key}>
                {/* Barre de niveau */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color }}>
                    {label}
                  </span>
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    {lvlDone}/{lvlSlugs.length} leçons
                  </span>
                </div>
                <ProgressBar value={lvlPct} height={6} color={color} showPercent />
                {/* Barres par module */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px', paddingLeft: '12px', borderLeft: `2px solid ${color}22` }}>
                  {mods.map((mod) => {
                    const modSlugs = mod.lessons.map((l) => l.slug);
                    const modDone = modSlugs.filter((s) => completedSlugSet.has(s)).length;
                    const modPct = mod.lessons.length > 0 ? Math.round((modDone / mod.lessons.length) * 100) : 0;
                    return (
                      <div key={mod.slug}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                          <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>{mod.title}</span>
                          <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>{modDone}/{mod.lessons.length}</span>
                        </div>
                        <ProgressBar value={modPct} height={4} color={color} />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
