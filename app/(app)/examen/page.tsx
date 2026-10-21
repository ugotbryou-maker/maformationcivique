'use client';

import Link from 'next/link';
import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Shield, Star, Award, BookOpen, Clock, CheckCircle, ArrowRight, Languages, PenLine } from 'lucide-react';
import { RESUME_EXAMENS_LANGUE } from '@/data/langue/examens-blancs/resume';

const LEVELS = [
  {
    level: 'CSP',
    label: 'Carte de séjour pluriannuelle',
    desc: 'Les questions portent sur les définitions fondamentales, les symboles et les institutions de la République.',
    difficulty: 'Niveau 1',
    image: '/images/examen/csp.jpg',
    imagePosition: 'center 60%',
    gradientFrom: 'rgba(0,26,112,0.82)',
    gradientTo: 'rgba(0,35,149,0.72)',
    Icon: Shield,
    themes: ['Symboles de la République', 'Laïcité & valeurs', 'Institutions de base', 'Droits fondamentaux'],
  },
  {
    level: 'CR',
    label: 'Carte de résident',
    desc: 'Les questions testent votre compréhension des mécanismes institutionnels et l\'application des principes républicains.',
    difficulty: 'Niveau 2',
    image: '/images/examen/carte-resident.jpg',
    imagePosition: 'center 30%',
    gradientFrom: 'rgba(0,35,149,0.80)',
    gradientTo: 'rgba(0,87,168,0.70)',
    Icon: Star,
    themes: ['État de droit', 'Droits & libertés', 'Histoire contemporaine', 'UE'],
  },
  {
    level: 'NAT',
    label: 'Naturalisation',
    desc: 'Les questions les plus exigeantes : culture générale, histoire fine, géographie et patrimoine national.',
    difficulty: 'Niveau 3',
    image: '/images/examen/naturalisation.jpg',
    imagePosition: 'center 40%',
    gradientFrom: 'rgba(120,12,40,0.84)',
    gradientTo: 'rgba(180,20,20,0.74)',
    Icon: Award,
    themes: ['Histoire depuis 1789', 'Géographie', 'Culture & patrimoine', 'Valeurs républicaines'],
  },
];

export default function ExamenIndexPage() {
  return (
    <Suspense fallback={null}>
      <ExamenIndex />
    </Suspense>
  );
}

function ExamenIndex() {
  const params = useSearchParams();
  // Le type sélectionné vient de l'URL quand on arrive depuis une épreuve :
  // revenir en arrière doit ramener sur le bon onglet, pas sur le civique.
  const [type, setType] = useState<'civique' | 'langue'>(
    params.get('type') === 'langue' ? 'langue' : 'civique',
  );

  return (
    <div style={{ maxWidth: 780 }}>

      {/* Header */}
      <div style={{ marginBottom: 18 }}>
        <h1 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)', marginBottom: 4 }}>
          Examens blancs
        </h1>
        <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)' }}>
          {type === 'civique'
            ? 'Connaissance de la France — 40 questions · 30 minutes · score requis 80 %'
            : 'Maîtrise du français — 40 questions · QCM et rédaction · niveau exigé par démarche'}
        </p>
      </div>

      {/* Bascule civique / linguistique */}
      <div style={{
        display: 'inline-flex', gap: 4, padding: 4, marginBottom: 24,
        background: 'var(--color-surface)', border: 'var(--border-default)',
        borderRadius: 100, boxShadow: 'var(--shadow-card)',
      }}>
        {([
          { cle: 'civique' as const, label: 'Examen civique', Icon: Shield },
          { cle: 'langue' as const,  label: 'Examen linguistique', Icon: Languages },
        ]).map(({ cle, label, Icon: I }) => (
          <button
            key={cle}
            onClick={() => setType(cle)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '9px 17px', borderRadius: 100, border: 'none',
              fontSize: 13.5, fontWeight: 700, fontFamily: 'inherit', cursor: 'pointer',
              background: type === cle ? 'var(--color-blue-france)' : 'transparent',
              color: type === cle ? '#fff' : 'var(--color-text-secondary)',
              transition: 'background 150ms, color 150ms',
            }}
          >
            <I size={15} /> {label}
          </button>
        ))}
      </div>

      {type === 'langue' && <ExamensLangue />}

      {/* Cards */}
      <div style={{ display: type === 'civique' ? 'flex' : 'none', flexDirection: 'column', gap: '1rem' }}>
        {LEVELS.map(({ level, label, desc, difficulty, image, imagePosition, gradientFrom, gradientTo, Icon, themes }) => (
          <Link key={level} href={`/examen/${level}`} style={{ textDecoration: 'none', display: 'block' }}>
            <article
              style={{
                position: 'relative',
                borderRadius: 16,
                overflow: 'hidden',
                minHeight: 180,
                cursor: 'pointer',
                transition: 'transform 250ms ease-out, box-shadow 250ms ease-out',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.22)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {/* Background photo */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: imagePosition,
                transition: 'transform 400ms ease-out',
              }} className="exam-card-img" />

              {/* Gradient overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(140deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
              }} />

              {/* Content */}
              <div style={{
                position: 'relative', zIndex: 2,
                padding: '20px 22px 22px',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                minHeight: 180, boxSizing: 'border-box',
              }}>
                {/* Top row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.22)', backdropFilter: 'blur(8px)',
                    border: '1.5px solid rgba(255,255,255,0.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={20} color="#fff" />
                  </div>
                  <div style={{
                    display: 'flex', alignItems: 'center',
                    background: 'rgba(0,8,40,0.55)', backdropFilter: 'blur(10px)',
                    borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)', overflow: 'hidden',
                  }}>
                    {[
                      { Icon: BookOpen, val: '40 questions' },
                      { Icon: Clock,    val: '30 min' },
                      { Icon: CheckCircle, val: '80%' },
                    ].map(({ Icon: I, val }, i) => (
                      <div key={val} style={{
                        display: 'flex', alignItems: 'center', gap: 4,
                        padding: '7px 12px',
                        borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                        color: 'rgba(255,255,255,0.9)',
                      }}>
                        <I size={11} />
                        <span style={{ fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap' }}>{val}</span>
                      </div>
                    ))}
                    <div style={{
                      width: 36, background: 'rgba(255,255,255,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      borderLeft: '1px solid rgba(255,255,255,0.1)',
                      padding: '0 10px', alignSelf: 'stretch',
                    }}>
                      <ArrowRight size={14} color="#fff" />
                    </div>
                  </div>
                </div>

                {/* Bottom */}
                <div style={{ marginTop: 16 }}>
                  <span style={{
                    display: 'inline-block', fontSize: 10, fontWeight: 700,
                    letterSpacing: '.1em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.6)', marginBottom: 4,
                  }}>{difficulty}</span>
                  <h2 style={{
                    fontSize: 20, fontWeight: 800, color: '#fff',
                    margin: '0 0 6px', lineHeight: 1.15,
                    textShadow: '0 1px 4px rgba(0,0,0,0.3)',
                  }}>{label}</h2>
                  <p style={{
                    fontSize: 13, color: 'rgba(255,255,255,0.78)',
                    margin: 0, lineHeight: 1.6, maxWidth: 500,
                  }}>{desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 10 }}>
                    {themes.map((t) => (
                      <span key={t} style={{
                        fontSize: 10, fontWeight: 500,
                        background: 'rgba(255,255,255,0.13)',
                        color: 'rgba(255,255,255,0.85)',
                        padding: '2px 8px', borderRadius: 100,
                        border: '1px solid rgba(255,255,255,0.18)',
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--color-text-muted)', marginTop: '1.5rem', lineHeight: 1.6 }}>
        Questions issues des listes officielles publiées par le{' '}
        <a href="https://www.formation-civique.interieur.gouv.fr" target="_blank" rel="noopener noreferrer"
          style={{ color: 'var(--color-blue-france)' }}>ministère de l&apos;Intérieur</a>.
      </p>

      <style>{`
        .exam-card-img { transform-origin: center; }
        article:hover .exam-card-img { transform: scale(1.03); }
      `}</style>
    </div>
  );
}

/**
 * Cartes des trois épreuves linguistiques. Les niveaux A2 / B1 / B2 ne sont
 * pas décoratifs : ce sont ceux exigés depuis le 1ᵉʳ janvier 2026 pour la
 * carte de séjour pluriannuelle, la carte de résident et la naturalisation.
 */
function ExamensLangue() {
  const COULEURS: Record<string, { de: string; a: string }> = {
    A2: { de: '#0E7490', a: '#0891B2' },
    B1: { de: '#002395', a: '#0057A8' },
    B2: { de: '#7C2D12', a: '#C0332B' },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {RESUME_EXAMENS_LANGUE.map((e) => {
        const c = COULEURS[e.niveau];
        return (
          <Link key={e.niveau} href={`/examen/langue/${e.niveau}`} style={{ textDecoration: 'none', display: 'block' }}>
            <article style={{
              position: 'relative', borderRadius: 16, overflow: 'hidden',
              background: `linear-gradient(140deg, ${c.de} 0%, ${c.a} 100%)`,
              padding: '22px 24px', color: '#fff',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 14, flexWrap: 'wrap' }}>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.72)', marginBottom: 6 }}>
                    {e.demarche}
                  </p>
                  <h2 style={{ fontSize: 20, fontWeight: 800, color: '#fff', margin: '0 0 6px' }}>
                    Niveau {e.niveau} exigé
                  </h2>
                  <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.82)', margin: '0 0 10px', maxWidth: 440 }}>
                    {e.sousTitre}
                  </p>
                  <p style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.6)', margin: 0 }}>
                    {e.sections}
                  </p>
                </div>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%', flexShrink: 0,
                  background: 'rgba(255,255,255,0.2)', border: '1.5px solid rgba(255,255,255,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 17, fontWeight: 800,
                }}>
                  {e.niveau}
                </div>
              </div>

              <div style={{
                display: 'flex', alignItems: 'center', gap: 0, marginTop: 16,
                background: 'rgba(0,8,40,0.3)', borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.12)', overflow: 'hidden', width: 'fit-content',
              }}>
                {[
                  { I: BookOpen, v: `${e.nbQuestions} questions` },
                  { I: Clock, v: `${e.dureeMinutes} min` },
                  { I: PenLine, v: 'QCM + rédaction' },
                  { I: CheckCircle, v: `objectif ${e.seuilQuestions}/${e.nbQuestions}` },
                ].map(({ I, v }, i) => (
                  <div key={v} style={{
                    display: 'flex', alignItems: 'center', gap: 5, padding: '8px 13px',
                    borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    color: 'rgba(255,255,255,0.9)',
                  }}>
                    <I size={11} />
                    <span style={{ fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap' }}>{v}</span>
                  </div>
                ))}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '0 12px', alignSelf: 'stretch',
                  background: 'rgba(255,255,255,0.15)', borderLeft: '1px solid rgba(255,255,255,0.1)',
                }}>
                  <ArrowRight size={14} color="#fff" />
                </div>
              </div>
            </article>
          </Link>
        );
      })}

      <p style={{ fontSize: 12, color: 'var(--color-text-muted)', lineHeight: 1.6, marginTop: 4 }}>
        Niveaux exigés depuis le 1ᵉʳ janvier 2026. Ces épreuves sont un entraînement :
        le test officiel comporte aussi des épreuves orales, que nous ne reproduisons pas.
      </p>
    </div>
  );
}
