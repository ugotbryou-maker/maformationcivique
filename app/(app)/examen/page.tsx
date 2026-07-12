'use client';

import Link from 'next/link';
import { Shield, Star, Award, BookOpen, Clock, CheckCircle, ArrowRight } from 'lucide-react';

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
    <div style={{ maxWidth: 780 }}>

      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)', marginBottom: 4 }}>
          Examens blancs
        </h1>
        <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)' }}>
          Choisissez votre démarche — 40 questions · 30 minutes · Score requis 80 %
        </p>
      </div>

      {/* Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
