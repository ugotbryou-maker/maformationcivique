'use client';

import Link from 'next/link';
import { modules } from '@/data/modules';
import { BookOpen, Clock, Lock, ArrowRight, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ModuleProgress { completed: number; total: number; percent: number; }
type ProgressMap = Record<string, ModuleProgress>;

const MODULE_CONFIG = [
  { slug: 'republique',    image: '/images/modules/republique.jpg',    color: '#DC2626', colorEnd: '#991B1B', position: 'center 8%'  },
  { slug: 'droits',        image: '/images/modules/Droits.png',         color: '#002395', colorEnd: '#001A70', position: 'center 35%' },
  { slug: 'institutions',  image: '/images/modules/institutions.jpg',  color: '#1E3A8A', colorEnd: '#1E40AF', position: 'center 20%' },
  { slug: 'histoire',      image: '/images/modules/histoire.jpg',      color: '#065F46', colorEnd: '#059669', position: 'center 30%' },
  { slug: 'vie-en-france', image: '/images/modules/vie-en-france.jpg', color: '#0E7490', colorEnd: '#0891B2', position: 'center 40%' },
];

export function ModulesSection() {
  const [progress, setProgress] = useState<ProgressMap>({});
  useEffect(() => {
    fetch('/api/progress/summary')
      .then((r) => r.ok ? r.json() : {})
      .then(setProgress)
      .catch(() => {});
  }, []);

  return (
    <section style={{ background: 'var(--color-off-white)', padding: '80px 0' }} id="modules">
      <div className="container" style={{ padding: '0 24px' }}>

        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{
            fontSize: 'var(--font-size-xs)', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.08em',
            color: 'var(--color-blue-france)', marginBottom: '10px',
          }}>
            Programme complet
          </p>
          <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '10px' }}>
            Nos modules de formation
          </h2>
          <p style={{
            fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)',
            maxWidth: '500px', margin: '0 auto',
          }}>
            5 modules thématiques couvrant l&apos;intégralité des 177 questions officielles de la formation civique.
          </p>
        </div>

        {/* Grille */}
        <div className="modules-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {modules.map((mod) => {
            const config = MODULE_CONFIG.find((c) => c.slug === mod.slug) ?? MODULE_CONFIG[0];
            const totalDuration = mod.lessons.reduce((acc, l) => acc + l.duration, 0);
            const prog = progress[mod.slug];

            return (
              <Link key={mod.id} href={`/module/${mod.slug}`} style={{ textDecoration: 'none' }}>
                <article
                  className="mod-card"
                  style={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    height: '180px',
                    cursor: 'pointer',
                  }}
                >
                  {/* Image de fond */}
                  <div
                    className="mod-card-img"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${config.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: config.position,
                      transition: 'transform 400ms ease-out',
                    }}
                  />
                  {/* Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${config.color}E8 0%, ${config.colorEnd}CC 100%)`,
                  }} />
                  {/* Contenu */}
                  <div style={{
                    position: 'relative',
                    zIndex: 2,
                    height: '100%',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                    {/* Top */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <span style={{
                        fontSize: '42px', fontWeight: 700,
                        color: 'rgba(255,255,255,0.2)', lineHeight: 1,
                      }}>
                        {mod.num}
                      </span>
                      {mod.freeAccess ? (
                        <span style={{
                          fontSize: '10px', fontWeight: 700,
                          padding: '3px 10px', borderRadius: '100px',
                          background: 'rgba(255,255,255,0.95)',
                          color: config.color,
                          textTransform: 'uppercase', letterSpacing: '0.05em',
                        }}>
                          Gratuit
                        </span>
                      ) : (
                        <span style={{
                          fontSize: '10px', fontWeight: 600,
                          padding: '3px 10px', borderRadius: '100px',
                          background: 'rgba(255,255,255,0.15)',
                          color: 'rgba(255,255,255,0.9)',
                          textTransform: 'uppercase', letterSpacing: '0.05em',
                          display: 'flex', alignItems: 'center', gap: '3px',
                          backdropFilter: 'blur(4px)',
                        }}>
                          <Lock size={9} /> Premium
                        </span>
                      )}
                    </div>

                    {/* Bottom */}
                    <div>
                      <h3 style={{
                        fontSize: '15px', fontWeight: 600,
                        color: '#FFFFFF', marginBottom: '4px',
                        lineHeight: 1.3,
                      }}>
                        {mod.title}
                      </h3>

                      {/* Barre progression si connecté */}
                      {prog && prog.completed > 0 && (
                        <div style={{ marginBottom: '7px' }}>
                          <div style={{ height: '3px', background: 'rgba(255,255,255,0.2)', borderRadius: '100px', overflow: 'hidden', marginBottom: '4px' }}>
                            <div style={{ height: '100%', width: `${prog.percent}%`, background: prog.percent === 100 ? '#4ADE80' : 'rgba(255,255,255,0.85)', borderRadius: '100px' }} />
                          </div>
                          <span style={{ fontSize: '10px', color: prog.percent === 100 ? '#4ADE80' : 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                            {prog.percent === 100 ? <><CheckCircle size={10} /> Terminé</> : `${prog.completed}/${prog.total} leçons`}
                          </span>
                        </div>
                      )}

                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          {[
                            { icon: <BookOpen size={10} />, label: `${mod.lessons.length} leçons` },
                            { icon: <Clock size={10} />, label: `${totalDuration} min` },
                          ].map(({ icon, label }) => (
                            <span key={label} style={{
                              display: 'flex', alignItems: 'center', gap: '3px',
                              fontSize: '11px', color: 'rgba(255,255,255,0.65)',
                            }}>
                              {icon}{label}
                            </span>
                          ))}
                        </div>
                        <span style={{
                          fontSize: '11px', color: 'rgba(255,255,255,0.8)',
                          display: 'flex', alignItems: 'center', gap: '3px',
                        }}>
                          Commencer <ArrowRight size={10} />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* Voir tout */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link
            href="/modules"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: 'var(--color-blue-france)', fontWeight: 600,
              fontSize: 'var(--font-size-base)', textDecoration: 'none',
              border: '1.5px solid var(--color-blue-france)',
              padding: '12px 28px', borderRadius: 'var(--radius-md)',
            }}
          >
            Voir tous les modules <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <style>{`
        .mod-card:hover .mod-card-img { transform: scale(1.04); }
        .mod-card { transition: box-shadow 300ms ease-out, transform 300ms ease-out; }
        .mod-card:hover { box-shadow: 0 16px 48px rgba(0,0,0,0.2); transform: translateY(-2px); }
        @media (max-width: 1024px) { .modules-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px)  { .modules-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
