'use client';

import Link from 'next/link';
import { useState } from 'react';
import { modules } from '@/data/modules';
import { a2Modules, b1Modules, b2Modules, transversalModules } from '@/data/langue';
import { ModuleList } from '@/components/app/ModuleList';
import { BookOpen, ArrowRight } from 'lucide-react';

// Identique à la page publique /moduleslinguistiques
const LANG_LEVELS = [
  {
    level: 'a2',
    badge: 'Carte de séjour pluriannuelle · OFII',
    label: 'A2 — Découverte',
    desc: 'Vie quotidienne, démarches administratives, logement, travail, santé, transports.',
    image: '/images/modules/Mairie-de-Paris-l-hotel-de-toutes-les-batailles.jpg',
    imagePos: 'center 40%',
    gradient: 'linear-gradient(135deg, #001A70E6 0%, #002395CC 100%)',
    modules: a2Modules,
  },
  {
    level: 'b1',
    badge: 'Carte de résident · DELF · TEF',
    label: 'B1 — Intermédiaire',
    desc: 'Actualité, débats, argumentation, institutions françaises, rédaction administrative.',
    image: '/images/modules/hemicycle-parlement-europeen.jpg',
    imagePos: 'center 35%',
    gradient: 'linear-gradient(135deg, #002395E6 0%, #0057A8CC 100%)',
    modules: b1Modules,
  },
  {
    level: 'b2',
    badge: 'Naturalisation · depuis janvier 2026',
    label: 'B2 — Avancé',
    desc: 'Textes argumentatifs, débat formel, nuances culturelles, entretien de naturalisation.',
    image: '/images/modules/palais-elysee.jpg',
    imagePos: 'center 30%',
    gradient: 'linear-gradient(135deg, #9F1239E6 0%, #CC1A1ACC 100%)',
    modules: b2Modules,
  },
  {
    level: 'transversal',
    badge: 'Tous niveaux',
    label: 'Transversal',
    desc: 'Phonétique, orthographe et erreurs fréquentes — utiles à tout moment de votre apprentissage.',
    image: '/images/modules/Ecole_-_Salle_de_Classe_2.jpg',
    imagePos: 'center 20%',
    gradient: 'linear-gradient(135deg, #6D28D9E6 0%, #9333EACC 100%)',
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

      {/* ── Contenu Langue — 4 cartes identiques à /moduleslinguistiques ── */}
      {tab === 'langue' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {LANG_LEVELS.map((lvl) => {
            const lessonCount = lvl.modules.reduce((a, m) => a + m.lessons.length, 0);
            return (
              <Link key={lvl.level} href={`/moduleslinguistiques/${lvl.level}`} style={{ display: 'block', textDecoration: 'none' }} className="lang-level-card-db">
                <article style={{ position: 'relative', borderRadius: '18px', overflow: 'hidden', height: '170px' }}>
                  {/* Image */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url(${lvl.image})`,
                    backgroundSize: 'cover', backgroundPosition: lvl.imagePos,
                    transition: 'transform 400ms ease-out',
                  }} className="lang-level-img-db" />
                  {/* Overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: lvl.gradient }} />
                  {/* Contenu */}
                  <div style={{ position: 'relative', zIndex: 2, padding: '22px 26px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <span style={{
                        fontSize: '11px', fontWeight: 600, padding: '4px 12px', borderRadius: '100px',
                        background: 'rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.92)',
                        letterSpacing: '.05em', backdropFilter: 'blur(4px)',
                      }}>
                        {lvl.badge}
                      </span>
                      <ArrowRight size={18} color="rgba(255,255,255,0.6)" />
                    </div>
                    <div>
                      <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', margin: '0 0 4px', letterSpacing: '-0.02em' }}>
                        {lvl.label}
                      </h2>
                      <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.78)', margin: '0 0 8px', lineHeight: 1.5 }}>
                        {lvl.desc}
                      </p>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'rgba(255,255,255,0.85)' }}>
                        <BookOpen size={12} /> {lvl.modules.length} modules · {lessonCount} leçons
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
          <style>{`
            .lang-level-card-db article { box-shadow: 0 4px 20px rgba(0,0,0,0.12); transition: box-shadow 300ms, transform 300ms; }
            .lang-level-card-db:hover article { box-shadow: 0 12px 40px rgba(0,0,0,0.22); transform: translateY(-2px); }
            .lang-level-card-db:hover .lang-level-img-db { transform: scale(1.04); }
          `}</style>
        </div>
      )}
    </div>
  );
}
