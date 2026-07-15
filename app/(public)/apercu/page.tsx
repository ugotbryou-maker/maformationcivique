'use client';

import { Building2, Star, FileCheck, BarChart3 } from 'lucide-react';
import { ApercuWidget } from '@/components/apercu/ApercuWidget';

const BENEFITS = [
  {
    icon: Building2,
    color: '#002395',
    bg: '#EEF4FF',
    title: 'Valorisez votre cabinet',
    desc: 'Offrez à vos clients étrangers un accompagnement structuré. Attestation PDF horodatée joignable au dossier préfecture — un service différenciant que peu de cabinets proposent.',
  },
  {
    icon: FileCheck,
    color: '#059669',
    bg: '#ECFDF5',
    title: 'Préparez-les aux examens',
    desc: 'Modules civiques et de français couvrant exactement le programme officiel : TDS, carte de résident, naturalisation. Vos clients arrivent à l\'entretien prêts.',
  },
  {
    icon: Star,
    color: '#D97706',
    bg: '#FFFBEB',
    title: 'Améliorez votre note Google',
    desc: 'La plateforme envoie automatiquement jusqu\'à 3 invitations à laisser un avis, aux moments où la satisfaction de votre client est au plus haut. Séquence stoppée dès le premier avis posté.',
  },
];

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
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
            Pourquoi les cabinets nous choisissent
          </p>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 48, lineHeight: 1.25 }}>
            Un outil pensé pour les professionnels<br />du droit des étrangers
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
            className="apercu-benefits-grid">
            {BENEFITS.map(({ icon: Icon, color, bg, title, desc }) => (
              <div key={title} style={{
                background: '#fff',
                border: 'var(--border-default)',
                borderRadius: 'var(--radius-xl)',
                padding: '32px 28px',
                boxShadow: 'var(--shadow-card)',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  <Icon size={22} color={color} />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 10, lineHeight: 1.3 }}>
                  {title}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 720px) {
          .apercu-benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
