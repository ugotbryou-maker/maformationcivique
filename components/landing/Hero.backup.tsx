'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, BookOpen, Globe } from 'lucide-react';

export function Hero() {
  return (
    <section style={{
      position: 'relative',
      background: 'var(--gradient-hero)',
      padding: '88px 0 76px',
      overflow: 'hidden',
    }}>
      {/* ── Filigrane — "La Liberté guidant le peuple" en surimpression douce ── */}
      <Image
        src="/images/hero/delacroix-watermark.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: 'cover',
          objectPosition: 'right center',
          opacity: 0.55,
          mixBlendMode: 'soft-light',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '0 24px' }}>
        <div className="hero-grid" style={{ display: 'grid', gap: '56px', alignItems: 'center' }}>

          {/* ── Gauche : texte ── */}
          <div>
            {/* Badge */}
            <div className="hero-badge" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,255,255,0.12)', color: '#fff',
              border: '1px solid rgba(255,255,255,0.18)',
              padding: '6px 14px', borderRadius: 'var(--radius-pill)',
              fontSize: 'var(--font-size-sm)', fontWeight: 500, marginBottom: '22px',
              backdropFilter: 'blur(6px)',
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#FFD66B', display: 'inline-block', flexShrink: 0 }} />
              Obligatoire depuis janvier 2026
            </div>

            {/* H1 */}
            <h1 style={{
              fontSize: 'clamp(34px, 5vw, 54px)', fontWeight: 700,
              lineHeight: 1.12, color: '#fff', marginBottom: '20px',
            }}>
              Développez votre{' '}
              <span style={{ color: '#FFD66B' }}>citoyenneté</span>
              {' '}d&apos;une façon{' '}
              <span style={{
                background: 'linear-gradient(90deg, #FFD66B 0%, #FFFFFF 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                nouvelle &amp; unique
              </span>
            </h1>

            <p style={{
              fontSize: 'var(--font-size-base)', color: 'rgba(255,255,255,0.82)',
              lineHeight: 1.72, maxWidth: '460px', marginBottom: '34px',
            }}>
              Explorez une nouvelle approche pour maîtriser les 177 questions officielles de la formation civique française. Disponible en 4 langues, avec IA pédagogique incluse.
            </p>

            {/* CTAs */}
            <div className="hero-ctas" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <Link
                href="/inscription"
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  background: '#fff', color: 'var(--color-blue-france)',
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
                  color: '#fff',
                  padding: '13px 20px', fontSize: 'var(--font-size-base)',
                  textDecoration: 'none', fontWeight: 500,
                  border: '1px solid rgba(255,255,255,0.32)', borderRadius: 'var(--radius-md)',
                  minHeight: '48px', transition: 'border-color 150ms ease-out, background-color 150ms ease-out',
                  fontFamily: 'var(--font-sans)',
                }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(255,255,255,0.6)'; el.style.backgroundColor = 'rgba(255,255,255,0.08)'; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(255,255,255,0.32)'; el.style.backgroundColor = 'transparent'; }}
              >
                <span style={{ fontSize: '10px' }}>▶</span> C&apos;est quoi l&apos;examen ?
              </Link>
            </div>

            {/* Réassurance */}
            <div className="hero-reassurance" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {[
                { icon: CheckCircle, label: '177 questions officielles' },
                { icon: BookOpen, label: 'Formation certifiée' },
                { icon: Globe, label: '4 langues disponibles' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: 'var(--font-size-sm)', color: 'rgba(255,255,255,0.78)' }}>
                  <Icon size={14} color="#FFD66B" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* ── Droite : collage culturel ── */}
          <div className="hero-visual">
            <div className="hero-stage" style={{ position: 'relative', width: '100%', maxWidth: '540px', aspectRatio: '540 / 580', margin: '0 auto' }}>

              {/* Médaillon — Mont-Saint-Michel */}
              <div style={{
                position: 'absolute', top: '1.7%', left: '1.8%', width: '25%', aspectRatio: '1',
                borderRadius: '50%', overflow: 'hidden',
                border: '4px solid rgba(255,255,255,0.85)',
                boxShadow: '0 14px 30px rgba(0,0,0,0.35)',
                transform: 'rotate(-8deg)', zIndex: 1,
              }}>
                <Image src="/images/hero/mont-saint-michel.jpg" alt="Le Mont-Saint-Michel" fill sizes="160px" style={{ objectFit: 'cover' }} />
              </div>

              {/* Médaillon — Tour Eiffel illuminée */}
              <div style={{
                position: 'absolute', top: '5.2%', right: '1.8%', width: '21.5%', aspectRatio: '1',
                borderRadius: '50%', overflow: 'hidden',
                border: '4px solid rgba(255,255,255,0.85)',
                boxShadow: '0 14px 30px rgba(0,0,0,0.35)',
                transform: 'rotate(6deg)', zIndex: 1,
              }}>
                <Image src="/images/hero/eiffel-night.jpg" alt="La Tour Eiffel illuminée" fill sizes="140px" style={{ objectFit: 'cover' }} />
              </div>

              {/* Charles de Gaulle */}
              <div style={{
                position: 'absolute', top: '25.9%', left: '-1.8%', width: '41%', zIndex: 2,
                filter: 'drop-shadow(0 16px 26px rgba(0,0,0,0.4))',
              }}>
                <Image src="/images/hero/degaulle.png" alt="Charles de Gaulle" width={480} height={621} style={{ width: '100%', height: 'auto' }} sizes="240px" />
              </div>

              {/* Marianne — buste */}
              <div style={{
                position: 'absolute', top: '10.3%', left: '30.4%', width: '44.6%', zIndex: 3,
                filter: 'drop-shadow(0 16px 26px rgba(0,0,0,0.4))',
              }}>
                <Image src="/images/hero/marianne-bust.png" alt="Buste de Marianne, symbole de la République" width={560} height={748} style={{ width: '100%', height: 'auto' }} sizes="260px" />
              </div>

              {/* Victor Hugo */}
              <div style={{
                position: 'absolute', bottom: '0%', right: '5.4%', width: '48.2%', zIndex: 4,
                filter: 'drop-shadow(0 18px 30px rgba(0,0,0,0.45))',
              }}>
                <Image src="/images/hero/victor-hugo.png" alt="Victor Hugo" width={560} height={682} style={{ width: '100%', height: 'auto' }} sizes="280px" priority />
              </div>

              {/* Card flottante — Questions */}
              <div className="hero-floating-card" style={{
                position: 'absolute', top: '-22px', left: '34%',
                background: '#fff', borderRadius: 'var(--radius-lg)',
                padding: '12px 16px', boxShadow: '0 8px 28px rgba(0,0,0,0.28)',
                display: 'flex', alignItems: 'center', gap: '10px', minWidth: '158px',
                zIndex: 5,
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

              {/* Card flottante — Taux de réussite */}
              <div className="hero-floating-card" style={{
                position: 'absolute', bottom: '6%', left: '-26px',
                background: '#fff', borderRadius: 'var(--radius-lg)',
                padding: '12px 16px', boxShadow: '0 8px 28px rgba(0,0,0,0.28)',
                display: 'flex', alignItems: 'center', gap: '10px', minWidth: '158px',
                zIndex: 5,
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

            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-stage { max-width: 420px !important; }
        }
        @media (max-width: 480px) {
          .hero-floating-card { display: none !important; }
          .hero-stage { max-width: 300px !important; }
        }
      `}</style>
    </section>
  );
}
