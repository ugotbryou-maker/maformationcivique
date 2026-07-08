import Link from 'next/link';
import { BrandLogo } from '@/components/ui/BrandLogo';

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

export function Footer() {
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
              <BrandLogo height={44} variant="white" />
            </Link>
            <p style={{ fontSize: 'var(--font-size-sm)', lineHeight: 1.6, maxWidth: '220px' }}>
              La plateforme de référence pour préparer votre examen civique en France.
            </p>
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
            © {new Date().getFullYear()} maformationcivique.fr — Tous droits réservés
          </p>
          <p style={{ fontSize: 'var(--font-size-xs)' }}>
            Plateforme indépendante · Non affiliée à l'État français
          </p>
        </div>
      </div>
    </footer>
  );
}
