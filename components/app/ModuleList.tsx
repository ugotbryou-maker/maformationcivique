'use client';

import Link from 'next/link';
import { modules } from '@/data/modules';
import { Clock, BookOpen, Lock, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ModuleProgress {
  completed: number;
  total: number;
  percent: number;
}
type ProgressMap = Record<string, ModuleProgress>;

const MODULE_CONFIG = [
  {
    slug: 'republique',
    image: '/images/modules/republique.jpg',
    color: '#DC2626',
    colorEnd: '#991B1B',
    position: 'center 8%', // Liberté guidant le peuple — cadrage sur le visage
  },
  {
    slug: 'droits',
    image: '/images/modules/Droits.png',
    color: '#002395',
    colorEnd: '#001A70',
    position: 'center 35%', // Le vote — personnages au centre
  },
  {
    slug: 'institutions',
    image: '/images/modules/institutions.jpg',
    color: '#1E3A8A',
    colorEnd: '#1E40AF',
    position: 'center 20%', // Sacre de Napoléon — scène haute
  },
  {
    slug: 'histoire',
    image: '/images/modules/histoire.jpg',
    color: '#065F46',
    colorEnd: '#059669',
    position: 'center 30%', // Serment du Jeu de Paume — personnage central
  },
  {
    slug: 'vie-en-france',
    image: '/images/modules/vie-en-france.jpg',
    color: '#0E7490',
    colorEnd: '#0891B2',
    position: 'center 40%', // Marché parisien — visages au centre
  },
];

export function ModuleList() {
  const [progress, setProgress] = useState<ProgressMap>({});

  useEffect(() => {
    fetch('/api/progress/summary')
      .then((r) => r.ok ? r.json() : {})
      .then(setProgress)
      .catch(() => {});
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {modules.map((mod) => {
        const config = MODULE_CONFIG.find((c) => c.slug === mod.slug) ?? MODULE_CONFIG[0];
        const totalDur = mod.lessons.reduce((a, l) => a + l.duration, 0);
        const prog = progress[mod.slug];

        return (
          <Link
            key={mod.slug}
            href={`/module/${mod.slug}`}
            style={{ display: 'block', textDecoration: 'none' }}
          >
            <article
              className="module-card"
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '200px',
                cursor: 'pointer',
              }}
            >
              {/* Image de fond */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${config.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: config.position ?? 'center',
                  transition: 'transform 400ms ease-out',
                }}
                className="module-card-img"
              />

              {/* Overlay coloré */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(135deg, ${config.color}E6 0%, ${config.colorEnd}CC 100%)`,
                }}
              />

              {/* Contenu */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  height: '100%',
                  padding: '28px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* Top row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      fontSize: '56px',
                      fontWeight: 700,
                      color: 'rgba(255,255,255,0.25)',
                      lineHeight: 1,
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {mod.num}
                  </span>
                  {mod.freeAccess ? (
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        padding: '4px 12px',
                        borderRadius: '100px',
                        background: 'rgba(255,255,255,0.95)',
                        color: config.color,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Gratuit
                    </span>
                  ) : (
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        padding: '4px 12px',
                        borderRadius: '100px',
                        background: 'rgba(255,255,255,0.15)',
                        color: 'rgba(255,255,255,0.9)',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      <Lock size={10} />
                      Premium
                    </span>
                  )}
                </div>

                {/* Bottom */}
                <div>
                  <h2
                    style={{
                      fontSize: '20px',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      marginBottom: '4px',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {mod.title}
                  </h2>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.75)',
                      marginBottom: '10px',
                      lineHeight: 1.4,
                    }}
                  >
                    {mod.subtitle}
                  </p>

                  {/* Barre de progression */}
                  {prog && prog.completed > 0 ? (
                    <div style={{ marginBottom: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          {prog.percent === 100
                            ? <><CheckCircle size={11} color="#4ADE80" /> Module terminé</>
                            : <>{prog.completed}/{prog.total} leçons</>}
                        </span>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: prog.percent === 100 ? '#4ADE80' : 'rgba(255,255,255,0.9)' }}>
                          {prog.percent}%
                        </span>
                      </div>
                      <div style={{ height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '100px', overflow: 'hidden' }}>
                        <div style={{
                          height: '100%',
                          width: `${prog.percent}%`,
                          background: prog.percent === 100 ? '#4ADE80' : 'rgba(255,255,255,0.85)',
                          borderRadius: '100px',
                          transition: 'width 600ms ease-out',
                        }} />
                      </div>
                    </div>
                  ) : null}

                  <div style={{ display: 'flex', gap: '16px' }}>
                    {[
                      { icon: <BookOpen size={11} />, label: `${mod.lessons.length} leçons` },
                      { icon: <Clock size={11} />, label: `${totalDur} min` },
                      { icon: null, label: `${mod.questionCount} questions` },
                    ].map(({ icon, label }) => (
                      <span
                        key={label}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '11px',
                          color: 'rgba(255,255,255,0.65)',
                        }}
                      >
                        {icon}
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Link>
        );
      })}

      <style>{`
        .module-card:hover .module-card-img {
          transform: scale(1.04);
        }
        .module-card {
          transition: box-shadow 300ms ease-out, transform 300ms ease-out;
        }
        .module-card:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.25);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}
