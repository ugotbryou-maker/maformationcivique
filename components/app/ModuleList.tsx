'use client';

import Link from 'next/link';
import { modules } from '@/data/modules';
import { Clock, BookOpen, Lock } from 'lucide-react';

const MODULE_CONFIG = [
  {
    slug: 'republique',
    image: '/images/modules/republique.jpg',
    color: '#DC2626',
    colorEnd: '#991B1B',
  },
  {
    slug: 'droits',
    image: '/images/modules/droits.jpg',
    color: '#002395',
    colorEnd: '#001A70',
  },
  {
    slug: 'institutions',
    image: '/images/modules/institutions.jpg',
    color: '#1E3A8A',
    colorEnd: '#1E40AF',
  },
  {
    slug: 'histoire',
    image: '/images/modules/histoire.jpg',
    color: '#065F46',
    colorEnd: '#059669',
  },
  {
    slug: 'vie-en-france',
    image: '/images/modules/vie-en-france.jpg',
    color: '#0E7490',
    colorEnd: '#0891B2',
  },
];

export function ModuleList() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {modules.map((mod) => {
        const config = MODULE_CONFIG.find((c) => c.slug === mod.slug) ?? MODULE_CONFIG[0];
        const totalDur = mod.lessons.reduce((a, l) => a + l.duration, 0);

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
                  backgroundPosition: 'center',
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
                      marginBottom: '6px',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {mod.title}
                  </h2>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.75)',
                      marginBottom: '12px',
                      lineHeight: 1.4,
                    }}
                  >
                    {mod.subtitle}
                  </p>
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
