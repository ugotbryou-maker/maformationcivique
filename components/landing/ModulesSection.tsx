'use client';

import Link from 'next/link';
import { modules } from '@/data/modules';
import { BookOpen, Clock, HelpCircle, Lock, ArrowRight } from 'lucide-react';

const moduleGradients = [
  'linear-gradient(135deg, #001A70 0%, #002395 100%)',
  'linear-gradient(135deg, #6D28D9 0%, #7C3AED 100%)',
  'linear-gradient(135deg, #0E7490 0%, #0891B2 100%)',
  'linear-gradient(135deg, #9F1239 0%, #CC1A1A 100%)',
  'linear-gradient(135deg, #065F46 0%, #059669 100%)',
];

export function ModulesSection() {
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
        <div className="modules-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {modules.map((mod, i) => {
            const totalDuration = mod.lessons.reduce((acc, l) => acc + l.duration, 0);
            return (
              <Link key={mod.id} href={`/module/${mod.slug}`} style={{ textDecoration: 'none' }}>
                <div
                  className="mod-card"
                  style={{
                    background: '#fff', borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden', border: 'var(--border-default)',
                    transition: 'all 250ms ease-out', height: '100%',
                    display: 'flex', flexDirection: 'column',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = 'translateY(-4px)';
                    el.style.boxShadow = 'var(--shadow-lg)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  {/* Header coloré */}
                  <div style={{
                    background: moduleGradients[i % moduleGradients.length],
                    padding: '22px 20px 18px',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                    minHeight: '110px',
                  }}>
                    <div>
                      <span style={{
                        fontSize: '38px', fontWeight: 800,
                        color: 'rgba(255,255,255,0.18)', lineHeight: 1,
                        display: 'block', marginBottom: '6px',
                      }}>
                        {mod.num}
                      </span>
                      <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.3, maxWidth: '160px' }}>
                        {mod.subtitle}
                      </p>
                    </div>
                    <div style={{
                      background: mod.freeAccess ? 'rgba(34,197,94,0.22)' : 'rgba(255,255,255,0.14)',
                      color: mod.freeAccess ? '#86EFAC' : 'rgba(255,255,255,0.88)',
                      padding: '4px 10px', borderRadius: 'var(--radius-pill)',
                      fontSize: '11px', fontWeight: 600, flexShrink: 0,
                      display: 'flex', alignItems: 'center', gap: '4px',
                    }}>
                      {!mod.freeAccess && <Lock size={9} />}
                      {mod.freeAccess ? 'Gratuit' : 'Premium'}
                    </div>
                  </div>

                  {/* Corps */}
                  <div style={{ padding: '18px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{
                      fontSize: 'var(--font-size-base)', fontWeight: 700,
                      color: 'var(--color-text-primary)', marginBottom: '14px', lineHeight: 1.3,
                    }}>
                      {mod.title}
                    </h3>

                    {/* Stats */}
                    <div style={{
                      display: 'flex', gap: '14px', marginBottom: '16px',
                      paddingBottom: '16px', borderBottom: 'var(--border-default)',
                    }}>
                      {[
                        { icon: BookOpen, label: `${mod.lessons.length} leçons` },
                        { icon: Clock, label: `${totalDuration} min` },
                        { icon: HelpCircle, label: `${mod.questionCount} Q` },
                      ].map(({ icon: Icon, label }) => (
                        <div key={label} style={{
                          display: 'flex', alignItems: 'center', gap: '4px',
                          fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)',
                        }}>
                          <Icon size={12} />
                          {label}
                        </div>
                      ))}
                    </div>

                    {/* Prix + CTA */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                      <span style={{
                        fontSize: 'var(--font-size-sm)', fontWeight: 700,
                        color: mod.freeAccess ? '#16A34A' : 'var(--color-blue-france)',
                      }}>
                        {mod.freeAccess ? 'Accès gratuit' : '12 €/mois'}
                      </span>
                      <span style={{
                        display: 'flex', alignItems: 'center', gap: '4px',
                        fontSize: 'var(--font-size-sm)', color: 'var(--color-blue-france)', fontWeight: 500,
                      }}>
                        Commencer <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Voir tout */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link
            href="/modules"
            className="see-all-btn"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: 'var(--color-blue-france)', fontWeight: 600,
              fontSize: 'var(--font-size-base)', textDecoration: 'none',
              border: '1.5px solid var(--color-blue-france)',
              padding: '12px 28px', borderRadius: 'var(--radius-md)',
              transition: 'all 150ms ease-out',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = 'var(--color-blue-france)';
              el.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = 'transparent';
              el.style.color = 'var(--color-blue-france)';
            }}
          >
            Voir tous les modules <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .modules-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .modules-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
