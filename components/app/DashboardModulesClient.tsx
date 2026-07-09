'use client';

import Link from 'next/link';
import { useState } from 'react';
import { modules } from '@/data/modules';
import { a2Modules, b1Modules, b2Modules, transversalModules } from '@/data/langue';
import { ModuleList } from '@/components/app/ModuleList';
import { BookOpen, Clock } from 'lucide-react';

const LANG_LEVELS = [
  {
    level: 'A2',
    label: 'Niveau A2',
    subtitle: 'Vie quotidienne · Démarches administratives',
    color: '#059669', colorEnd: '#047857',
    image: '/images/modules/Ecole_-_Salle_de_Classe_2.jpg',
    modules: a2Modules,
  },
  {
    level: 'B1',
    label: 'Niveau B1',
    subtitle: 'Actualité · Société · Institutions',
    color: '#1D4ED8', colorEnd: '#1E3A8A',
    image: '/images/modules/hemicycle-parlement-europeen.jpg',
    modules: b1Modules,
  },
  {
    level: 'B2',
    label: 'Niveau B2',
    subtitle: 'Expression avancée · Argumentation',
    color: '#6D28D9', colorEnd: '#5B21B6',
    image: '/images/modules/chateau-versailles.jpg',
    modules: b2Modules,
  },
  {
    level: 'transversal',
    label: 'Transversal',
    subtitle: 'Phonétique · Orthographe · Erreurs fréquentes',
    color: '#D97706', colorEnd: '#B45309',
    image: '/images/modules/Blv-haussmann-lafayette.jpg',
    modules: transversalModules,
  },
];

export function DashboardModulesClient() {
  const [tab, setTab] = useState<'civique' | 'langue'>('civique');

  const totalLessons   = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const totalQuestions = modules.reduce((acc, m) => acc + m.questionCount, 0);
  const totalDuration  = modules.reduce((acc, m) => acc + m.lessons.reduce((a, l) => a + l.duration, 0), 0);
  const langTotalLessons = [...a2Modules, ...b1Modules, ...b2Modules, ...transversalModules].reduce((s, m) => s + m.lessons.length, 0);
  const langTotalModules = a2Modules.length + b1Modules.length + b2Modules.length + transversalModules.length;

  return (
    <div style={{ maxWidth: '900px' }}>
      {/* En-tête */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
          <div>
            <h1 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)', marginBottom: '6px' }}>
              {tab === 'civique' ? 'Les 5 modules de formation civique' : 'Modules de langue française'}
            </h1>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', maxWidth: '520px' }}>
              {tab === 'civique'
                ? 'Programme complet pour maîtriser les 177 questions officielles de la formation civique française.'
                : '4 niveaux de langue pour progresser de A2 à B2 et maîtriser le français écrit et oral.'}
            </p>
          </div>

          {/* Tab switch */}
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'var(--color-border)',
            borderRadius: 'var(--radius-pill)',
            padding: '4px', gap: '4px', flexShrink: 0,
          }}>
            {(['civique', 'langue'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  padding: '7px 20px',
                  borderRadius: 'var(--radius-pill)',
                  background: tab === t ? '#fff' : 'transparent',
                  border: 'none', cursor: 'pointer',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: tab === t ? 700 : 400,
                  color: tab === t ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                  boxShadow: tab === t ? 'var(--shadow-card)' : 'none',
                  transition: 'all 180ms ease',
                  fontFamily: 'var(--font-sans)',
                  whiteSpace: 'nowrap',
                }}
              >
                {t === 'civique' ? 'Civique' : 'Linguistique'}
              </button>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        {tab === 'civique' && (
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {[
              { val: '5',                    label: 'modules' },
              { val: String(totalLessons),   label: 'leçons' },
              { val: String(totalQuestions), label: 'questions' },
              { val: `${totalDuration} min`, label: 'de contenu' },
            ].map(({ val, label }) => (
              <div key={label}>
                <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: 600, color: 'var(--color-blue-france)' }}>{val}</span>
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginLeft: '6px' }}>{label}</span>
              </div>
            ))}
          </div>
        )}
        {tab === 'langue' && (
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {[
              { val: '4',                          label: 'niveaux' },
              { val: String(langTotalModules),     label: 'modules' },
              { val: String(langTotalLessons),     label: 'exercices' },
            ].map(({ val, label }) => (
              <div key={label}>
                <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: 600, color: 'var(--color-blue-france)' }}>{val}</span>
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginLeft: '6px' }}>{label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Contenu Civique ── */}
      {tab === 'civique' && <ModuleList />}

      {/* ── Contenu Langue ── */}
      {tab === 'langue' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {LANG_LEVELS.map((lvl) => (
            <div key={lvl.level}>
              {/* En-tête de niveau */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <span style={{
                  fontSize: '11px', fontWeight: 700, padding: '4px 12px',
                  borderRadius: '100px',
                  background: `${lvl.color}18`,
                  color: lvl.color,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                }}>
                  {lvl.level.toUpperCase()}
                </span>
                <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                  {lvl.label}
                </span>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                  — {lvl.subtitle}
                </span>
              </div>

              {/* Grille modules */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }} className="lang-module-grid">
                {lvl.modules.map((mod) => {
                  const firstSlug = mod.lessons[0]?.slug;
                  const href = firstSlug ? `/moduleslinguistiques/${lvl.level}/${firstSlug}` : `/moduleslinguistiques/${lvl.level}`;
                  return (
                    <Link key={mod.slug} href={href} style={{ textDecoration: 'none' }}>
                      <article className="lang-mod-card" style={{
                        position: 'relative', borderRadius: '16px', overflow: 'hidden',
                        height: '140px', cursor: 'pointer',
                        transition: 'box-shadow 280ms ease, transform 280ms ease',
                      }}>
                        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${lvl.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${lvl.color}EE 0%, ${lvl.colorEnd}CC 100%)` }} />
                        <div style={{ position: 'relative', zIndex: 2, height: '100%', padding: '16px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: '32px', fontWeight: 800, color: 'rgba(255,255,255,0.18)', lineHeight: 1 }}>
                            {lvl.level.toUpperCase()}
                          </span>
                          <div>
                            <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '4px', lineHeight: 1.3 }}>{mod.title}</h3>
                            <div style={{ display: 'flex', gap: '10px' }}>
                              <span style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '11px', color: 'rgba(255,255,255,0.65)' }}>
                                <BookOpen size={10} />{mod.lessons.length} leçons
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
          <style>{`
            .lang-mod-card:hover { box-shadow: 0 12px 32px rgba(0,0,0,0.22); transform: translateY(-2px); }
            @media (max-width: 640px) { .lang-module-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      )}
    </div>
  );
}
