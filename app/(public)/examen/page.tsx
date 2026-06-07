'use client';

import Link from 'next/link';
import { Shield, Star, Award, BookOpen, Clock, CheckCircle } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const LEVELS = [
  {
    level: 'CSP',
    label: 'Carte de séjour pluriannuelle',
    desc: 'Vous demandez un renouvellement de titre ou une CSP. Les questions portent sur les définitions fondamentales, les symboles et les institutions.',
    difficulty: 'Niveau 1',
    image: '/images/examen/csp.jpg',
    imagePosition: 'center 60%',
    gradientFrom: 'rgba(0,26,112,0.82)',
    gradientTo: 'rgba(0,35,149,0.72)',
    Icon: Shield,
    themes: ['Symboles de la République', 'Laïcité & valeurs', 'Institutions de base', 'Droits fondamentaux', 'Vie quotidienne'],
  },
  {
    level: 'CR',
    label: 'Carte de résident',
    desc: 'Vous demandez une carte de résident (10 ans). Les questions testent votre compréhension des mécanismes institutionnels et l\'application des principes.',
    difficulty: 'Niveau 2',
    image: '/images/examen/carte-resident.jpg',
    imagePosition: 'center 30%',
    gradientFrom: 'rgba(0,35,149,0.80)',
    gradientTo: 'rgba(0,87,168,0.70)',
    Icon: Star,
    themes: ['État de droit', 'Droits & libertés', 'Organisation de la République', 'Histoire contemporaine', 'UE'],
  },
  {
    level: 'NAT',
    label: 'Naturalisation',
    desc: 'Vous demandez la naturalisation française. Les questions sont les plus exigeantes : culture générale, histoire fine, géographie et patrimoine.',
    difficulty: 'Niveau 3',
    image: '/images/examen/naturalisation.jpg',
    imagePosition: 'center 40%',
    gradientFrom: 'rgba(120,12,40,0.84)',
    gradientTo: 'rgba(180,20,20,0.74)',
    Icon: Award,
    themes: ['Histoire depuis 1789', 'Géographie', 'Culture & patrimoine', 'France dans le monde', 'Valeurs républicaines'],
  },
];

export default function ExamenIndexPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-off-white)' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #001A70 0%, #002395 55%, #8B1A2B 100%)',
        padding: '4rem 1.5rem 3rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.12)', borderRadius: 100,
            padding: '6px 18px', marginBottom: '1.5rem',
            fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.85)',
            letterSpacing: '.07em', textTransform: 'uppercase',
          }}>
            <CheckCircle size={13} /> Questions officielles du ministère de l&apos;Intérieur
          </div>

          <h1 style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 900, color: '#fff', margin: '0 0 1rem', lineHeight: 1.15 }}>
            Quel titre préparez-vous ?
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', margin: 0, lineHeight: 1.7 }}>
            Choisissez votre démarche — 40 questions · 30 minutes · Score requis 80 %
          </p>
        </div>
      </div>

      {/* Cards */}
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '2.5rem 1.25rem 5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {LEVELS.map(({ level, label, desc, difficulty, image, imagePosition, gradientFrom, gradientTo, Icon, themes }) => (
            <Link key={level} href={`/examen/${level}`} style={{ textDecoration: 'none', display: 'block' }}>
              <article
                style={{
                  position: 'relative',
                  borderRadius: 20,
                  overflow: 'hidden',
                  minHeight: 200,
                  cursor: 'pointer',
                  transition: 'transform 280ms ease-out, box-shadow 280ms ease-out',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.28)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {/* Photo background */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: imagePosition,
                  transition: 'transform 400ms ease-out',
                }}
                  className="exam-card-img"
                />

                {/* Colored overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(140deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
                }} />

                {/* Subtle grain texture for depth */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.25) 100%)',
                }} />

                {/* Content */}
                <div style={{
                  position: 'relative', zIndex: 2,
                  padding: '22px 24px 26px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 200,
                  boxSizing: 'border-box',
                }}>

                  {/* Top row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>

                    {/* Icon circle — left */}
                    <div style={{
                      width: 52, height: 52, borderRadius: '50%',
                      background: 'rgba(255,255,255,0.22)',
                      backdropFilter: 'blur(8px)',
                      border: '1.5px solid rgba(255,255,255,0.35)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={24} color="#fff" />
                    </div>

                    {/* Stats bar — right */}
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 0,
                      background: 'rgba(0,8,40,0.55)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 12,
                      border: '1px solid rgba(255,255,255,0.12)',
                      overflow: 'hidden',
                    }}>
                      {[
                        { Icon: BookOpen, val: '40 questions' },
                        { Icon: Clock,    val: '30 min' },
                        { Icon: CheckCircle, val: '80%' },
                      ].map(({ Icon: I, val }, i) => (
                        <div key={val} style={{
                          display: 'flex', alignItems: 'center', gap: 5,
                          padding: '9px 14px',
                          borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                          color: 'rgba(255,255,255,0.9)',
                        }}>
                          <I size={12} />
                          <span style={{ fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap' }}>{val}</span>
                        </div>
                      ))}
                      {/* Arrow button */}
                      <div style={{
                        width: 42, height: '100%',
                        background: 'rgba(255,255,255,0.15)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        borderLeft: '1px solid rgba(255,255,255,0.1)',
                        padding: '0 12px',
                        alignSelf: 'stretch',
                      }}>
                        <ArrowRight size={16} color="#fff" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom: title + desc */}
                  <div style={{ marginTop: 20 }}>
                    {/* Level badge */}
                    <span style={{
                      display: 'inline-block',
                      fontSize: 10, fontWeight: 700, letterSpacing: '.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.65)',
                      marginBottom: 6,
                    }}>{difficulty}</span>

                    <h2 style={{
                      fontSize: 22, fontWeight: 800, color: '#fff',
                      margin: '0 0 8px', lineHeight: 1.15,
                      textShadow: '0 1px 4px rgba(0,0,0,0.3)',
                    }}>
                      {label}
                    </h2>
                    <p style={{
                      fontSize: 13.5, color: 'rgba(255,255,255,0.8)',
                      margin: 0, lineHeight: 1.65,
                      maxWidth: 520,
                      textShadow: '0 1px 3px rgba(0,0,0,0.25)',
                    }}>
                      {desc}
                    </p>

                    {/* Theme chips */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 14 }}>
                      {themes.map((t) => (
                        <span key={t} style={{
                          fontSize: 11, fontWeight: 500,
                          background: 'rgba(255,255,255,0.14)',
                          backdropFilter: 'blur(6px)',
                          color: 'rgba(255,255,255,0.88)',
                          padding: '3px 10px', borderRadius: 100,
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

        {/* Note bas de page */}
        <p style={{ textAlign: 'center', fontSize: 13, color: '#94A3B8', marginTop: '2.5rem', lineHeight: 1.6 }}>
          Les questions sont issues des listes officielles publiées par le{' '}
          <a href="https://www.formation-civique.interieur.gouv.fr" target="_blank" rel="noopener noreferrer"
            style={{ color: '#0057A8' }}>ministère de l&apos;Intérieur</a>.
          <br />Tous les niveaux couvrent les 5 thèmes du programme officiel.
        </p>
      </div>

      <style>{`
        .exam-card-img { transform-origin: center; }
        article:hover .exam-card-img { transform: scale(1.04); }
      `}</style>
    </div>
  );
}
