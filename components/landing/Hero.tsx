'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { CheckCircle, BookOpen, Languages } from 'lucide-react';

export function Hero() {
  const bgRef    = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (bgRef.current)    bgRef.current.style.transform    = `translateY(${y * 0.28}px)`;
      if (phoneRef.current) phoneRef.current.style.transform = `translateY(${y * 0.12}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '92vh', display: 'flex', alignItems: 'center' }}>

      {/* ── Fond Liberté guidant le peuple — rouge — parallaxe ── */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute', inset: '-15%',
          backgroundImage: "url('/images/hero/delacroix-watermark.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center 20%',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />
      {/* Overlay rouge profond */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(165,0,0,0.91) 0%, rgba(130,0,0,0.87) 55%, rgba(90,0,0,0.93) 100%)',
      }} aria-hidden="true" />
      {/* Grain subtil */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
      }} aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '80px 24px 72px', width: '100%' }}>
        <div className="hero-grid" style={{ display: 'grid', gap: '56px', alignItems: 'center' }}>

          {/* ── Gauche : texte ── */}
          <div>
            {/* Badge tricolore */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'rgba(255,255,255,0.1)', color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '7px 18px', borderRadius: '100px',
              fontSize: '12px', fontWeight: 600, marginBottom: '28px',
              backdropFilter: 'blur(8px)', letterSpacing: '0.05em',
            }}>
              <span style={{ display: 'flex', gap: 4 }}>
                {['#002395', '#FFFFFF', '#EF4135'].map((c) => (
                  <span key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, border: c === '#FFFFFF' ? '1px solid rgba(0,0,0,0.15)' : 'none' }} />
                ))}
              </span>
              Formation civique &amp; linguistique — 2026
            </div>

            {/* H1 */}
            <h1 style={{ fontSize: 'clamp(34px, 5.2vw, 62px)', fontWeight: 900, lineHeight: 1.05, color: '#fff', marginBottom: '8px', letterSpacing: '-0.03em' }}>
              Obtenez votre
            </h1>
            <h1 style={{ fontSize: 'clamp(34px, 5.2vw, 62px)', fontWeight: 900, lineHeight: 1.05, marginBottom: '8px', letterSpacing: '-0.03em',
              background: 'linear-gradient(90deg, #FFD66B 0%, #FFB347 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              titre de séjour
            </h1>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, lineHeight: 1.1, color: 'rgba(255,255,255,0.88)', marginBottom: '28px', letterSpacing: '-0.02em' }}>
              ou votre naturalisation.
            </h1>

            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.75, maxWidth: '480px', marginBottom: '40px' }}>
              La seule plateforme qui couvre <strong style={{ color: '#fff' }}>les deux examens requis</strong> — formation civique (177 questions officielles) et cours de français A2 à B2. Commencez gratuitement dès aujourd'hui.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '44px' }}>
              <Link href="/inscription" style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#fff', color: '#C00000',
                padding: '15px 32px', borderRadius: '10px',
                fontWeight: 800, fontSize: '15px', textDecoration: 'none',
                fontFamily: 'var(--font-sans)', letterSpacing: '-0.01em',
                boxShadow: '0 4px 24px rgba(0,0,0,0.22)',
              }}>
                Commencer — c'est gratuit
              </Link>
              <Link href="#modules" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                color: '#fff', padding: '15px 24px',
                fontSize: '15px', textDecoration: 'none', fontWeight: 500,
                border: '1px solid rgba(255,255,255,0.3)', borderRadius: '10px',
                backdropFilter: 'blur(4px)',
              }}>
                Voir les modules
              </Link>
            </div>

            {/* Réassurance */}
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {[
                { icon: BookOpen,    label: '177 questions civiques' },
                { icon: Languages,  label: 'Cours A2 → B2' },
                { icon: CheckCircle, label: 'Taux de réussite 80%+' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}>
                  <Icon size={14} color="#FFD66B" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* ── Droite : maquette téléphone ── */}
          <div className="hero-visual" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div ref={phoneRef} style={{ position: 'relative', willChange: 'transform' }}>

              {/* Téléphone */}
              <div style={{
                width: 262, height: 530,
                background: '#0d0d0d', borderRadius: 44,
                border: '8px solid #1c1c1e',
                boxShadow: '0 48px 96px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.06), inset 0 0 0 1px rgba(255,255,255,0.04)',
                overflow: 'hidden', position: 'relative',
              }}>
                {/* Encoche */}
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 88, height: 28, background: '#0d0d0d', borderRadius: '0 0 18px 18px', zIndex: 10 }} />

                {/* Écran */}
                <div style={{ width: '100%', height: '100%', background: '#F8F9FB', overflowY: 'hidden' }}>
                  {/* Header leçon bleu */}
                  <div style={{ background: 'linear-gradient(135deg, #001A70, #002395)', padding: '34px 16px 18px', color: '#fff' }}>
                    <div style={{ fontSize: 9, opacity: 0.65, marginBottom: 5, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Module 1 · Leçon 3</div>
                    <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.35 }}>Les symboles de la République</div>
                    {/* Progress bar */}
                    <div style={{ height: 3, background: 'rgba(255,255,255,0.2)', borderRadius: 4, marginTop: 12, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: '62%', background: '#FFD66B', borderRadius: 4 }} />
                    </div>
                    <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.6)', marginTop: 4, textAlign: 'right' }}>62% complété</div>
                  </div>

                  {/* Contenu leçon */}
                  <div style={{ padding: '12px 14px 0' }}>
                    {/* Paragraphe simulé */}
                    <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                      <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#EEF2FF', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: 8, height: 8, borderRadius: 2, background: '#002395' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        {[100, 88, 95, 72].map((w, i) => (
                          <div key={i} style={{ height: 6, background: i === 0 ? '#1e293b' : '#CBD5E1', borderRadius: 3, marginBottom: 4, width: `${w}%` }} />
                        ))}
                      </div>
                    </div>

                    {/* Image Liberté dans la leçon */}
                    <div style={{
                      height: 88, borderRadius: 8, overflow: 'hidden', marginBottom: 10,
                      backgroundImage: "url('/images/hero/delacroix-watermark.jpg')",
                      backgroundSize: 'cover', backgroundPosition: 'center 20%',
                      position: 'relative',
                    }}>
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5))' }} />
                      <div style={{ position: 'absolute', bottom: 5, left: 7, fontSize: 7, color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>Delacroix, 1830 — Musée du Louvre · Domaine public</div>
                    </div>

                    {/* Section "Le drapeau tricolore" */}
                    <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 6 }}>
                      <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#EEF2FF', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: 6, height: 6, borderRadius: 1, background: '#002395' }} />
                      </div>
                      <div style={{ height: 7, background: '#1e293b', borderRadius: 3, width: '70%' }} />
                    </div>
                    {[90, 76, 84, 60].map((w, i) => (
                      <div key={i} style={{ height: 6, background: '#E2E8F0', borderRadius: 3, marginBottom: 4, width: `${w}%`, marginLeft: 22 }} />
                    ))}

                    {/* Question QCM */}
                    <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 8, padding: '8px 10px', marginTop: 8 }}>
                      <div style={{ fontSize: 7, fontWeight: 700, color: '#1e293b', marginBottom: 6 }}>Question · 3 / 8</div>
                      {['Liberté, Égalité, Fraternité', 'Travail, Famille, Patrie', 'Honneur, Patrie, Vérité'].map((opt, i) => (
                        <div key={i} style={{
                          display: 'flex', alignItems: 'center', gap: 5, padding: '4px 6px',
                          borderRadius: 5, marginBottom: 3,
                          background: i === 0 ? '#DBEAFE' : '#F8FAFC',
                          border: i === 0 ? '1px solid #93C5FD' : '1px solid #E2E8F0',
                        }}>
                          <div style={{ width: 10, height: 10, borderRadius: '50%', border: i === 0 ? '2px solid #2563EB' : '2px solid #CBD5E1', background: i === 0 ? '#2563EB' : 'transparent', flexShrink: 0 }} />
                          <span style={{ fontSize: 7, color: i === 0 ? '#1D4ED8' : '#64748B' }}>{opt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card flottante — XP */}
              <div className="hero-float" style={{
                position: 'absolute', top: 72, right: -72,
                background: '#fff', borderRadius: 14, padding: '12px 16px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.28)',
                display: 'flex', alignItems: 'center', gap: '10px', minWidth: 148,
              }}>
                <div style={{ width: 36, height: 36, background: '#FEF3C7', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>🏆</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: '#1a1a2e', lineHeight: 1 }}>+50 XP</div>
                  <div style={{ fontSize: 10, color: '#64748b', marginTop: 2 }}>Leçon terminée</div>
                </div>
              </div>

              {/* Card flottante — Exercices */}
              <div className="hero-float" style={{
                position: 'absolute', bottom: 88, left: -82,
                background: '#fff', borderRadius: 14, padding: '12px 16px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.28)',
                display: 'flex', alignItems: 'center', gap: '10px', minWidth: 156,
              }}>
                <div style={{ width: 36, height: 36, background: '#ECFDF5', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <CheckCircle size={18} color="#16A34A" />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: '#1a1a2e', lineHeight: 1 }}>2 700+</div>
                  <div style={{ fontSize: 10, color: '#64748b', marginTop: 2 }}>Exercices de français</div>
                </div>
              </div>

              {/* Card flottante — note */}
              <div className="hero-float" style={{
                position: 'absolute', top: 200, left: -72,
                background: '#fff', borderRadius: 14, padding: '10px 14px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.28)',
                minWidth: 120,
              }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#1a1a2e', marginBottom: 2 }}>4.8 / 5</div>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[...Array(5)].map((_, i) => <span key={i} style={{ fontSize: 11, color: '#F59E0B' }}>★</span>)}
                </div>
                <div style={{ fontSize: 9, color: '#64748b', marginTop: 2 }}>Note moyenne</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hero-grid { grid-template-columns: 1.1fr 0.9fr; }
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-visual { display: none !important; }
        }
        @media (max-width: 480px) {
          .hero-float { display: none !important; }
        }
      `}</style>
    </section>
  );
}
