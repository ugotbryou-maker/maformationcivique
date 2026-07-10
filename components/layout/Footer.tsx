import Link from 'next/link';
import Image from 'next/image';
import { BrandLogo } from '@/components/ui/BrandLogo';
import type { TenantConfig } from '@/lib/tenants';

const footerLinks = {
  Préparer: [
    { label: 'Modules de cours', href: '/modulesciviques' },
    { label: 'Examens blancs', href: '/examen' },
    { label: 'Ressources & guides', href: '/ressources' },
    { label: 'Tarifs', href: '/#tarifs' },
  ],
  Ressources: [
    { label: 'Guide titre de séjour', href: '/ressources?cat=titre-sejour' },
    { label: 'Guide carte de résident', href: '/ressources?cat=carte-resident' },
    { label: 'Guide naturalisation', href: '/ressources?cat=naturalisation' },
    { label: 'Actualités', href: '/ressources?cat=actualites' },
  ],
  'À propos': [
    { label: "L'examen civique", href: '/#examen-info' },
    { label: 'Questions fréquentes', href: '/#faq' },
    { label: 'Contact', href: 'mailto:contact@maformationcivique.fr' },
  ],
  Légal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'CGU', href: '/cgu' },
    { label: 'Politique de confidentialité', href: '/confidentialite' },
    { label: 'Gestion des cookies', href: '#' },
  ],
};

export function Footer({ tenant }: { tenant?: TenantConfig | null }) {
  return (
    <footer
      style={{
        background: 'var(--color-blue-night)',
        color: 'rgba(255,255,255,0.7)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Barre tricolore */}
      <div style={{ height: '3px', background: 'var(--gradient-tricolor)' }} />

      <div className="container" style={{ padding: '56px 24px 40px' }}>
        {/* Top */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-flex', textDecoration: 'none', marginBottom: '16px' }}>
              {tenant ? (
                <Image
                  src={tenant.logoLightPath}
                  alt={tenant.name}
                  height={44}
                  width={Math.round(44 * tenant.logoAspect)}
                  style={{ height: 44, width: 'auto' }}
                />
              ) : (
                <BrandLogo height={44} variant="white" />
              )}
            </Link>
            <p style={{ fontSize: 'var(--font-size-sm)', lineHeight: 1.6, maxWidth: '220px' }}>
              {tenant
                ? `La plateforme partenaire de ${tenant.name} pour préparer votre examen civique en France.`
                : 'La plateforme de référence pour préparer votre examen civique en France.'}
            </p>
            {tenant && (
              <p style={{ fontSize: 'var(--font-size-xs)', marginTop: '10px', color: 'rgba(255,255,255,0.4)' }}>
                Propulsé par{' '}
                <Link href="https://www.maformationcivique.fr" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'underline' }}>
                  maformationcivique.fr
                </Link>
              </p>
            )}
            <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
              {['FR', 'AR', 'EN', 'PT'].map((l) => (
                <span
                  key={l}
                  style={{
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-pill)',
                    border: '0.5px solid rgba(255,255,255,0.2)',
                    fontSize: 'var(--font-size-xs)',
                    color: 'rgba(255,255,255,0.5)',
                  }}
                >
                  {l}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p
                style={{
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'rgba(255,255,255,0.4)',
                  marginBottom: '16px',
                }}
              >
                {title}
              </p>
              <ul style={{ listStyle: 'none' }}>
                {links.map((link) => (
                  <li key={link.label} style={{ marginBottom: '10px' }}>
                    <Link
                      href={link.href}
                      className="footer-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: '0.5px solid rgba(255,255,255,0.1)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <p style={{ fontSize: 'var(--font-size-xs)' }}>
            © {new Date().getFullYear()} {tenant ? `${tenant.name} · Propulsé par maformationcivique.fr` : 'maformationcivique.fr'} — Tous droits réservés
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/maformationcivique.fr/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{ color: 'rgba(255,255,255,0.45)', transition: 'color 150ms', display: 'flex' }}
              className="footer-social"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/ma-formation-civique/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: 'rgba(255,255,255,0.45)', transition: 'color 150ms', display: 'flex' }}
              className="footer-social"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
          <p style={{ fontSize: 'var(--font-size-xs)' }}>
            Plateforme indépendante · Non affiliée à l'État français
          </p>
        </div>
        <style>{`
          .footer-social:hover { color: rgba(255,255,255,0.9) !important; }
        `}</style>
      </div>
    </footer>
  );
}
