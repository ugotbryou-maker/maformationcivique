'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, BookOpen, Globe } from 'lucide-react';

export function Hero() {
  return (
    <section style={{ background: '#fff', padding: '80px 0 64px', overflow: 'hidden' }}>
      <div className="container" style={{ padding: '0 24px' }}>
        <div className="hero-grid" style={{ display: 'grid', gap: '56px', alignItems: 'center' }}>

          {/* ── Gauche : texte ── */}
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'var(--color-blue-light)', color: 'var(--color-blue-france)',
              padding: '6px 14px', borderRadius: 'var(--radius-pill)',
              fontSize: 'var(--font-size-sm)', fontWeight: 500, marginBottom: '22px',
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-red-france)', display: 'inline-block', flexShrink: 0 }} />
              Obligatoire depuis janvier 2026
            </div>

            {/* H1 */}
            <h1 style={{
              fontSize: 'clamp(34px, 5vw, 54px)', fontWeight: 700,
              lineHeight: 1.12, color: 'var(--color-text-primary)', marginBottom: '20px',
            }}>
              Développez votre{' '}
              <span style={{ color: 'var(--color-blue-france)' }}>citoyenneté</span>
              {' '}d&apos;une façon{' '}
              <span style={{
                background: 'linear-gradient(90deg, var(--color-blue-france) 0%, var(--color-red-france) 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                nouvelle &amp; unique
              </span>
            </h1>

            <p style={{
              fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)',
              lineHeight: 1.72, maxWidth: '460px', marginBottom: '34px',
            }}>
              Explorez une nouvelle approche pour maîtriser les 177 questions officielles de la formation civique française. Disponible en 4 langues, avec IA pédagogique incluse.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <Link
                href="/inscription"
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  background: 'var(--color-blue-france)', color: '#fff',
                  padding: '13px 28px', borderRadius: 'var(--radius-md)',
                  fontWeight: 600, fontSize: 'var(--font-size-base)',
                  textDecoration: 'none', minHeight: '48px',
                  transition: 'opacity 150ms ease-out',
                  fontFamily: 'var(--font-sans)',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.88'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
              >
                S&apos;inscrire — gratuit
              </Link>
              <Link
                href="#examen-info"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  color: 'var(--color-text-secondary)',
                  padding: '13px 20px', fontSize: 'var(--font-size-base)',
                  textDecoration: 'none', fontWeight: 500,
                  border: 'var(--border-default)', borderRadius: 'var(--radius-md)',
                  minHeight: '48px', transition: 'border-color 150ms ease-out',
                  fontFamily: 'var(--font-sans)',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-blue-france)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-border)'; }}
              >
                <span style={{ fontSize: '10px' }}>▶</span> C&apos;est quoi l&apos;examen ?
              </Link>
            </div>

            {/* Réassurance */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {[
                { icon: CheckCircle, label: '177 questions officielles' },
                { icon: BookOpen, label: 'Formation certifiée' },
                { icon: Globe, label: '4 langues disponibles' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                  <Icon size={14} color="var(--color-blue-france)" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* ── Droite : visuel + floating cards ── */}
          <div className="hero-visual" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Cercle principal */}
            <div style={{
              width: '380px', height: '380px', borderRadius: '50%',
              background: 'var(--color-blue-light)',
              overflow: 'hidden', position: 'relative', flexShrink: 0,
            }}>
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Personne préparant la formation civique"
                fill style={{ objectFit: 'cover' }} priority
              />
            </div>

            {/* Card flottante 1 — Questions */}
            <div style={{
              position: 'absolute', top: '28px', left: '-8px',
              background: '#fff', borderRadius: 'var(--radius-lg)',
              padding: '12px 16px', boxShadow: '0 8px 28px rgba(0,23,112,0.14)',
              display: 'flex', alignItems: 'center', gap: '10px', minWidth: '158px',
            }}>
              <div style={{
                width: 36, height: 36, background: 'var(--color-blue-light)',
                borderRadius: 'var(--radius-md)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <BookOpen size={17} color="var(--color-blue-france)" />
              </div>
              <div>
                <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1 }}>177</div>
                <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: 2 }}>Questions officielles</div>
              </div>
            </div>

            {/* Card flottante 2 — Taux de réussite */}
            <div style={{
              position: 'absolute', bottom: '56px', right: '-8px',
              background: '#fff', borderRadius: 'var(--radius-lg)',
              padding: '12px 16px', boxShadow: '0 8px 28px rgba(0,23,112,0.14)',
              display: 'flex', alignItems: 'center', gap: '10px', minWidth: '158px',
            }}>
              <div style={{
                width: 36, height: 36, background: '#F0FDF4',
                borderRadius: 'var(--radius-md)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <CheckCircle size={17} color="#16A34A" />
              </div>
              <div>
                <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1 }}>80%</div>
                <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: 2 }}>Taux de réussite</div>
              </div>
            </div>

            {/* Card flottante 3 — Gratuit */}
            <div style={{
              position: 'absolute', top: '44%', right: '-28px',
              transform: 'translateY(-50%)',
              background: 'var(--color-blue-france)',
              borderRadius: 'var(--radius-lg)',
              padding: '12px 16px',
              boxShadow: '0 8px 28px rgba(0,35,149,0.32)',
              color: '#fff', minWidth: '128px',
            }}>
              <div style={{ fontSize: '16px', fontWeight: 700, lineHeight: 1 }}>Gratuit</div>
              <div style={{ fontSize: '11px', opacity: 0.75, marginTop: 3 }}>pour commencer</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
          .hero-visual { display: none !important; }
        }
        /* Empêche les floating cards de créer du overflow */
        .hero-visual { overflow: visible; }
      `}</style>
    </section>
  );
}
