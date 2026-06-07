import Link from 'next/link';
import { Users, CalendarCheck, BadgeCheck, Building2 } from 'lucide-react';

const perks = [
  { icon: Users, label: 'Utilisateurs illimités' },
  { icon: CalendarCheck, label: 'Suivi de progression individuel' },
  { icon: BadgeCheck, label: 'Attestation de formation officielle' },
  { icon: Building2, label: 'Facturation simplifiée' },
];

export function B2BCta() {
  return (
    <section style={{ background: '#fff', padding: '80px 0' }}>
      <div className="container" style={{ padding: '0 24px' }}>
        <div className="b2b-grid" style={{ display: 'grid', gap: '64px', alignItems: 'center' }}>

          {/* Gauche : texte */}
          <div>
            <p style={{
              fontSize: 'var(--font-size-xs)', fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '0.08em',
              color: 'var(--color-red-france)', marginBottom: '10px',
            }}>
              Pour les professionnels
            </p>
            <h2 style={{
              fontSize: 'var(--font-size-xl)', fontWeight: 700,
              color: 'var(--color-text-primary)', marginBottom: '16px', lineHeight: 1.2,
            }}>
              Vous gérez un service d&apos;intégration ?{' '}
              <span style={{ color: 'var(--color-blue-france)' }}>Devenez partenaire.</span>
            </h2>
            <p style={{
              fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)',
              lineHeight: 1.7, marginBottom: '32px', maxWidth: '460px',
            }}>
              Cabinet d&apos;avocats, association d&apos;aide à l&apos;intégration, service préfectoral — gérez plusieurs apprenants et suivez leur progression depuis un tableau de bord dédié.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '32px' }}>
              {perks.map(({ icon: Icon, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <Icon size={15} color="var(--color-blue-france)" />
                  <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>{label}</span>
                </div>
              ))}
            </div>

            <Link
              href="mailto:contact@maformationcivique.fr"
              style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'var(--color-blue-france)', color: '#fff',
                padding: '13px 28px', borderRadius: 'var(--radius-md)',
                fontWeight: 600, fontSize: 'var(--font-size-base)',
                textDecoration: 'none', fontFamily: 'var(--font-sans)',
              }}
            >
              Nous contacter — Licence cabinet 250 €/an
            </Link>
          </div>

          {/* Droite : visuel */}
          <div style={{ display: 'flex', justifyContent: 'center' }} className="b2b-visual">
            <div style={{ position: 'relative', width: '300px', height: '340px' }}>
              <div style={{
                width: '100%', height: '100%',
                borderRadius: '20px', overflow: 'hidden',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
                  alt="Professionnel de l'intégration"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              {/* Overlay card */}
              <div style={{
                position: 'absolute', bottom: '18px', left: '18px', right: '18px',
                background: 'rgba(0,26,112,0.92)',
                backdropFilter: 'blur(8px)',
                borderRadius: 'var(--radius-md)',
                padding: '14px 16px', color: '#fff',
              }}>
                <div style={{ fontSize: '13px', fontWeight: 600 }}>Licence cabinet</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', margin: '4px 0' }}>
                  <span style={{ fontSize: '24px', fontWeight: 800 }}>250 €</span>
                  <span style={{ fontSize: '13px', opacity: 0.65 }}>/an</span>
                </div>
                <div style={{ fontSize: '11px', opacity: 0.65 }}>Utilisateurs illimités · Support dédié</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .b2b-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 900px) {
          .b2b-grid { grid-template-columns: 1fr !important; }
          .b2b-visual { display: none !important; }
        }
      `}</style>
    </section>
  );
}
