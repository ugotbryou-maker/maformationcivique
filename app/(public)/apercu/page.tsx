'use client';

import { Building2, ShieldCheck, BookOpen } from 'lucide-react';
import { ApercuWidget } from '@/components/apercu/ApercuWidget';

function GoogleLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function StarRow({ filled = 5 }: { filled?: number }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i <= filled ? '#FBBC05' : '#E2E8F0'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function ApercuEntryPage() {
  return (
    <main>
      {/* ── Hero + widget ─────────────────────────────────────────── */}
      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '64px 20px 56px', minHeight: '60vh' }}>
        <div style={{ maxWidth: 560, width: '100%', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#EEF4FF', borderRadius: 100, padding: '6px 16px', marginBottom: 28 }}>
            <Building2 size={14} color="#002395" />
            <span style={{ fontSize: 12, fontWeight: 700, color: '#002395', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Cabinets partenaires
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(26px, 5vw, 42px)', fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.15, marginBottom: 16, letterSpacing: '-0.02em' }}>
            Votre espace cabinet,<br />
            <span style={{ color: '#002395' }}>en 10 secondes.</span>
          </h1>

          <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: 440, margin: '0 auto 40px' }}>
            Saisissez l&apos;URL de votre cabinet — nous générons instantanément une simulation personnalisée à vos couleurs et avec votre logo.
          </p>

          <ApercuWidget />
        </div>
      </section>

      {/* ── Arguments ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-off-white)', padding: '64px 24px 72px', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <p style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
            Pourquoi les cabinets nous choisissent
          </p>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 48, lineHeight: 1.25 }}>
            Un outil pensé pour les professionnels<br />du droit des étrangers
          </h2>

          <div className="apercu-benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>

            {/* ── Carte 1 : Attestation ─── */}
            <div style={{
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,31,140,0.18)',
              display: 'flex', flexDirection: 'column',
            }}>
              {/* Top gradient */}
              <div style={{
                background: 'linear-gradient(135deg, #001F8C 0%, #002395 60%, #1D4ED8 100%)',
                padding: '28px 28px 24px',
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18,
                }}>
                  <ShieldCheck size={26} color="#fff" />
                </div>
                <p style={{ fontSize: 34, fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: 4, letterSpacing: '-0.02em' }}>24h</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>Activation de votre espace</p>
              </div>
              {/* Bottom content */}
              <div style={{ background: '#fff', padding: '24px 28px', flex: 1 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 10, lineHeight: 1.35 }}>
                  Valorisez votre cabinet
                </h3>
                <p style={{ fontSize: 13.5, color: 'var(--color-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  Attestation PDF horodatée joignable au dossier préfecture — un service différenciant que peu de cabinets proposent à leurs clients.
                </p>
              </div>
            </div>

            {/* ── Carte 2 : Formation ─── */}
            <div style={{
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(5,150,105,0.14)',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #065F46 0%, #059669 60%, #10B981 100%)',
                padding: '28px 28px 24px',
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18,
                }}>
                  <BookOpen size={26} color="#fff" />
                </div>
                <p style={{ fontSize: 34, fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: 4, letterSpacing: '-0.02em' }}>8</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>Modules civiques + langue</p>
              </div>
              <div style={{ background: '#fff', padding: '24px 28px', flex: 1 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 10, lineHeight: 1.35 }}>
                  Préparez-les aux examens
                </h3>
                <p style={{ fontSize: 13.5, color: 'var(--color-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  Programme officiel OFII : TDS pluriannuelle, carte de résident, naturalisation. Vos clients arrivent à l&apos;entretien solides.
                </p>
              </div>
            </div>

            {/* ── Carte 3 : Google ─── */}
            <div style={{
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{
                background: '#fff',
                borderBottom: '1px solid #F1F3F4',
                padding: '28px 28px 22px',
              }}>
                {/* Google branding row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                  <GoogleLogo />
                  <span style={{ fontSize: 15, fontWeight: 700, color: '#202124', letterSpacing: '-0.01em' }}>Google</span>
                  <span style={{ fontSize: 12, color: '#5F6368', fontWeight: 400 }}>My Business</span>
                </div>
                {/* Fake Google fiche mini */}
                <div style={{ background: '#F8F9FA', borderRadius: 12, padding: '14px 16px', border: '1px solid #E8EAED' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 6,
                      background: 'linear-gradient(135deg, #002395, #1D4ED8)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 13, fontWeight: 800, color: '#fff', flexShrink: 0,
                    }}>D</div>
                    <div>
                      <p style={{ fontSize: 12, fontWeight: 600, color: '#202124', margin: 0, lineHeight: 1.3 }}>Cabinet Dupont</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: '#202124' }}>4,8</span>
                        <StarRow filled={5} />
                        <span style={{ fontSize: 11, color: '#5F6368' }}>47 avis</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 11, color: '#34A853', fontWeight: 700, background: '#E6F4EA', padding: '2px 8px', borderRadius: 99 }}>
                      ↑ +1,2 pt
                    </span>
                    <span style={{ fontSize: 11, color: '#5F6368' }}>en 3 mois · ×3 avis</span>
                  </div>
                </div>
              </div>
              <div style={{ background: '#fff', padding: '22px 28px', flex: 1 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 10, lineHeight: 1.35 }}>
                  Améliorez votre note Google
                </h3>
                <p style={{ fontSize: 13.5, color: 'var(--color-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  Invitations automatiques à 50 %, 80 % et 100 % de formation. Séquence stoppée dès le premier avis posté.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .apercu-benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
