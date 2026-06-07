import { createServerSupabaseClient } from '@/lib/supabase-server';
import { redirect } from 'next/navigation';
import { modules } from '@/data/modules';
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
    supabase.from('user_progress').select('*').eq('user_id', user.id),
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

      {/* Modules détail */}
      <div
        style={{
          background: 'var(--color-surface)',
          borderRadius: 'var(--radius-xl)',
          border: 'var(--border-default)',
          padding: '24px',
        }}
      >
        <h2 style={{ fontSize: 'var(--font-size-base)', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '20px' }}>
          Détail par module
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
    </div>
  );
}
