export const dynamic = 'force-dynamic';

import { modules } from '@/data/modules';
import { ModuleList } from '@/components/app/ModuleList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Modules — maformationcivique.fr',
  description: 'Les 5 modules de préparation à la formation civique : principes de la République, droits & devoirs, institutions, histoire et vie en France.',
};

export default function ModulesPage() {
  const totalLessons  = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const totalQuestions = modules.reduce((acc, m) => acc + m.questionCount, 0);
  const totalDuration = modules.reduce(
    (acc, m) => acc + m.lessons.reduce((a, l) => a + l.duration, 0),
    0
  );

  return (
    <div style={{ minHeight: '80vh', padding: '64px 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <h1 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)', marginBottom: '12px' }}>
            Les 5 modules de formation
          </h1>
          <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', maxWidth: '520px' }}>
            Programme complet pour maîtriser les 177 questions officielles de la formation civique française.
          </p>
          <div style={{ display: 'flex', gap: '24px', marginTop: '20px', flexWrap: 'wrap' }}>
            {[
              { val: '5', label: 'modules' },
              { val: String(totalLessons), label: 'leçons' },
              { val: String(totalQuestions), label: 'questions' },
              { val: `${totalDuration} min`, label: 'de contenu' },
            ].map(({ val, label }) => (
              <div key={label}>
                <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: 500, color: 'var(--color-blue-france)' }}>{val}</span>
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginLeft: '6px' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <ModuleList />
      </div>
    </div>
  );
}
