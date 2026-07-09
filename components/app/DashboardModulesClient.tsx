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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {LANG_LEVELS.map((lvl) => (
            <div key={lvl.level}>
              {/* En-tête de niveau */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', paddingBottom: '12px', borderBottom: 'var(--border-default)' }}>
                <span style={{
                  fontSize: '11px', fontWeight: 800, padding: '4px 14px',
                  borderRadius: '100px',
                  background: `${lvl.color}18`, color: lvl.color,
                  letterSpacing: '0.08em',
                }}>
                  {lvl.level.toUpperCase()}
                </span>
                <span style={{ fontSize: 'var(--font-size-base)', fontWeight: 600, color: 'var(--color-text-primary)' }}>{lvl.label}</span>
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>— {lvl.subtitle}</span>
              </div>

              {/* Liste modules — même style que ModuleList civique */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {lvl.modules.map((mod) => {
                  const firstSlug = mod.lessons[0]?.slug;
                  const levelKey = mod.level as string;
                  const href = firstSlug
                    ? `/moduleslinguistiques/${levelKey}/${firstSlug}`
                    : `/moduleslinguistiques/${levelKey}`;
                  return (
                    <Link key={mod.slug} href={href} style={{ display: 'block', textDecoration: 'none' }}>
                      <article className="lang-mod-card" style={{
                        position: 'relative', borderRadius: '20px', overflow: 'hidden',
                        height: '200px', cursor: 'pointer',
                      }}>
                        {/* Image de fond */}
                        <div style={{
                          position: 'absolute', inset: 0,
                          backgroundImage: `url(${lvl.image})`,
                          backgroundSize: 'cover', backgroundPosition: 'center',
                          transition: 'transform 400ms ease-out',
                        }} className="lang-mod-img" />
                        {/* Overlay coloré */}
                        <div style={{
                          position: 'absolute', inset: 0,
                          background: `linear-gradient(135deg, ${lvl.color}E6 0%, ${lvl.colorEnd}CC 100%)`,
                        }} />
                        {/* Contenu */}
                        <div style={{
                          position: 'relative', zIndex: 2, height: '100%',
                          padding: '28px 32px',
                          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <span style={{ fontSize: '56px', fontWeight: 700, color: 'rgba(255,255,255,0.22)', lineHeight: 1 }}>
                              {lvl.level.toUpperCase()}
                            </span>
                            <span style={{
                              fontSize: '11px', fontWeight: 600, padding: '4px 12px',
                              borderRadius: '100px', background: 'rgba(255,255,255,0.15)',
                              color: 'rgba(255,255,255,0.9)', letterSpacing: '0.05em',
                              backdropFilter: 'blur(4px)',
                            }}>
                              Langue
                            </span>
                          </div>
                          <div>
                            <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '4px', letterSpacing: '-0.02em' }}>
                              {mod.title}
                            </h2>
                            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', marginBottom: '10px', lineHeight: 1.4 }}>
                              {mod.subtitle}
                            </p>
                            <div style={{ display: 'flex', gap: '16px' }}>
                              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'rgba(255,255,255,0.65)' }}>
                                <BookOpen size={11} />{mod.lessons.length} leçons
                              </span>
                              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'rgba(255,255,255,0.65)' }}>
                                <Clock size={11} />{mod.lessons.reduce((a, l) => a + (l.duration ?? 0), 0)} min
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
            .lang-mod-card { transition: box-shadow 300ms ease-out, transform 300ms ease-out; }
            .lang-mod-card:hover { box-shadow: 0 20px 60px rgba(0,0,0,0.25); transform: translateY(-2px); }
            .lang-mod-card:hover .lang-mod-img { transform: scale(1.04); }
          `}</style>
        </div>
      )}
    </div>
  );
}
