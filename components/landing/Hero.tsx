'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { CheckCircle, BookOpen, Languages } from 'lucide-react';

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  // Parallaxe douce — translate le fond au scroll
  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.28}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '88vh', display: 'flex', alignItems: 'center' }}>

      {/* ── Fond Liberté guidant le peuple — rouge — parallaxe ── */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: '-15%',
          backgroundImage: "url('/images/hero/delacroix-watermark.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />
      {/* Overlay rouge tricolore */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(180,0,0,0.88) 0%, rgba(140,0,0,0.84) 50%, rgba(100,0,0,0.90) 100%)',
      }} aria-hidden="true" />
      {/* Grain subtil */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
        opacity: 0.4,
        pointerEvents: 'none',
      }} aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '80px 24px 72px', width: '100%' }}>
        <div className="hero-grid" style={{ display: 'grid', gap: '56px', alignItems: 'center' }}>

          {/* ── Gauche : texte ── */}
          <div>
            {/* Badge tricolore */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'rgba(255,255,255,0.12)', color: '#fff',
              border: '1px solid rgba(255,255,255,0.22)',
              padding: '7px 16px', borderRadius: 'var(--radius-pill)',
              fontSize: '12px', fontWeight: 600, marginBottom: '24px',
              backdropFilter: 'blur(8px)', letterSpacing: '0.04em',
            }}>
              <span style={{ display: 'flex', gap: 4 }}>
                {['#002395','#fff','#EF4135'].map((c) => (
                  <span key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, border: c === '#fff' ? '1px solid rgba(0,0,0,0.15)' : 'none' }} />
                ))}
              </span>
              Examen civique &amp; linguistique — 2026
            </div>

            {/* H1 */}
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.1, color: '#fff', marginBottom: '22px', letterSpacing: '-0.02em' }}>
              Préparez votre{' '}
              <span style={{ color: '#FFD66B' }}>examen</span>
              <br />
              <span style={{ color: '#FFD66B' }}>civique</span>
              {' '}&amp;{' '}
              <span style={{
                background: 'linear-gradient(90deg, #FFD66B, #fff)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>linguistique</span>
            </h1>

            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.82)', lineHeight: 1.7, maxWidth: '460px', marginBottom: '36px' }}>
              177 questions officielles + cours de français A2 à B2 — la seule plateforme couvrant les deux examens requis pour votre titre de séjour ou naturalisation.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '44px' }}>
              <Link href="/inscription" style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#fff', color: '#CC1A1A',
                padding: '14px 30px', borderRadius: 'var(--radius-md)',
                fontWeight: 700, fontSize: '15px', textDecoration: 'none',
                transition: 'opacity 150ms', fontFamily: 'var(--font-sans)',
              }}>
                Commencer — gratuit
              </Link>
              <Link href="#tarifs" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                color: '#fff', padding: '14px 22px',
                fontSize: '15px', textDecoration: 'none', fontWeight: 500,
                border: '1px solid rgba(255,255,255,0.35)', borderRadius: 'var(--radius-md)',
                backdropFilter: 'blur(4px)',
              }}>
                Voir les tarifs
              </Link>
            </div>

            {/* Réassurance */}
            <div style={{ display: 'flex', gap: '22px', flexWrap: 'wrap' }}>
              {[
                { icon: BookOpen,  label: '177 questions civiques' },
                { icon: Languages, label: 'Cours A2 → B2' },
                { icon: CheckCircle, label: 'Taux de réussite 80%+' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>
                  <Icon size={14} color="#FFD66B" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* ── Droite : maquette téléphone ── */}
          <div className="hero-visual" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>

              {/* Téléphone */}
              <div style={{
                width: 260, height: 520,
                background: '#0a0a0a', borderRadius: 42,
                border: '8px solid #1a1a1a',
                boxShadow: '0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.07)',
                overflow: 'hidden', position: 'relative',
              }}>
                {/* Encoche */}
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 90, height: 26, background: '#0a0a0a', borderRadius: '0 0 16px 16px', zIndex: 10 }} />
                {/* Écran — aperçu leçon */}
                <div style={{ width: '100%', height: '100%', background: '#f8f9fa', overflowY: 'hidden' }}>
                  {/* Header bleu leçon */}
                  <div style={{ background: 'linear-gradient(135deg, #002395, #003CBB)', padding: '36px 16px 20px', color: '#fff' }}>
                    <div style={{ fontSize: 9, opacity: 0.7, marginBottom: 4 }}>Module 1 · Leçon 3</div>
                    <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.3 }}>Les symboles de la République</div>
                  </div>
                  {/* Contenu simulé */}
                  <div style={{ padding: '14px 14px 0' }}>
                    <div style={{ height: 8, background: '#e2e8f0', borderRadius: 4, marginBottom: 6, width: '100%' }}>
                      <div style={{ height: '100%', width: '62%', background: '#002395', borderRadius: 4 }} />
                    </div>
                    <div style={{ fontSize: 7, color: '#64748b', marginBottom: 10, textAlign: 'right' }}>62% complété</div>
                    {/* Texte simulé */}
                    {[100, 88, 95, 72, 84].map((w, i) => (
                      <div key={i} style={{ height: 7, background: '#e2e8f0', borderRadius: 3, marginBottom: 5, width: `${w}%` }} />
                    ))}
                    {/* Image simulée */}
                    <div style={{ height: 80, background: 'linear-gradient(135deg, #fef3c7, #fde68a)', borderRadius: 8, margin: '10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: 28 }}>🇫🇷</span>
                    </div>
                    {[90, 76, 60].map((w, i) => (
                      <div key={i} style={{ height: 7, background: '#e2e8f0', borderRadius: 3, marginBottom: 5, width: `${w}%` }} />
                    ))}
                    {/* Question */}
                    <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: '8px 10px', marginTop: 10 }}>
                      <div style={{ fontSize: 8, fontWeight: 700, color: '#1e293b', marginBottom: 4 }}>Question</div>
                      {['Liberté, Égalité, Fraternité', 'Travail, Famille, Patrie', 'Honneur, Patrie'].map((opt, i) => (
                        <div key={i} style={{
                          display: 'flex', alignItems: 'center', gap: 5, padding: '4px 6px',
                          borderRadius: 5, marginBottom: 3,
                          background: i === 0 ? '#dbeafe' : '#f8fafc',
                          border: i === 0 ? '1px solid #93c5fd' : '1px solid #e2e8f0',
                        }}>
                          <div style={{ width: 10, height: 10, borderRadius: '50%', border: i === 0 ? '2px solid #2563eb' : '2px solid #cbd5e1', background: i === 0 ? '#2563eb' : 'transparent', flexShrink: 0 }} />
                          <span style={{ fontSize: 7, color: i === 0 ? '#1d4ed8' : '#64748b' }}>{opt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card flottante — XP */}
              <div className="hero-floating-card" style={{
                position: 'absolute', top: 80, right: -70,
                background: '#fff', borderRadius: 14, padding: '12px 16px',
                boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
                display: 'flex', alignItems: 'center', gap: '10px', minWidth: 150,
              }}>
                <div style={{ width: 36, height: 36, background: '#FEF3C7', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>🏆</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a2e', lineHeight: 1 }}>+50 XP</div>
                  <div style={{ fontSize: 10, color: '#64748b', marginTop: 2 }}>Leçon terminée</div>
                </div>
              </div>

              {/* Card flottante — Progression */}
              <div className="hero-floating-card" style={{
                position: 'absolute', bottom: 90, left: -80,
                background: '#fff', borderRadius: 14, padding: '12px 16px',
                boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
                display: 'flex', alignItems: 'center', gap: '10px', minWidth: 160,
              }}>
                <div style={{ width: 36, height: 36, background: '#ECFDF5', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <CheckCircle size={18} color="#16A34A" />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a2e', lineHeight: 1 }}>2 700+</div>
                  <div style={{ fontSize: 10, color: '#64748b', marginTop: 2 }}>Exercices disponibles</div>
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
        }
        @media (max-width: 480px) {
          .hero-floating-card { display: none !important; }
        }
      `}</style>
    </section>
  );
}
