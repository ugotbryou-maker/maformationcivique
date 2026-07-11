import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, FileText, LayoutDashboard } from 'lucide-react';
import type { TenantConfig } from '@/lib/tenants';

const tenantNav = [
  { label: 'Formation civique',      href: '/modulesciviques',      icon: BookOpen },
  { label: 'Formation linguistique', href: '/moduleslinguistiques',  icon: BookOpen },
  { label: 'Examens blancs',         href: '/examen',               icon: FileText },
];

export function TenantShell({
  tenant,
  children,
  isLoggedIn,
}: {
  tenant: TenantConfig;
  children: React.ReactNode;
  isLoggedIn: boolean;
}) {
  return (
    <>
      {/* ── Header fermé ─────────────────────────────────────────────── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'var(--color-blue-france)',
        boxShadow: '0 1px 12px rgba(0,0,0,0.14)',
      }}>
        {/* Barre tricolore */}
        <div style={{ height: 3, background: 'linear-gradient(90deg, #002395 33%, #fff 33% 66%, #ED2939 66%)' }} />

        <div style={{
          maxWidth: 1100, margin: '0 auto', padding: '0 24px',
          height: 58,
          display: 'flex', alignItems: 'center', gap: 20,
        }}>
          {/* Logo cabinet */}
          <Link href="/modulesciviques" style={{ display: 'flex', flexShrink: 0, textDecoration: 'none' }}>
            <Image
              src={tenant.logoLightPath}
              alt={tenant.name}
              height={34}
              width={Math.round(34 * tenant.logoAspect)}
              style={{ height: 34, width: 'auto' }}
            />
          </Link>

          {/* Séparateur */}
          <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.2)', flexShrink: 0 }} />

          {/* Navigation fermée */}
          <nav style={{ display: 'flex', gap: 2, flex: 1 }} className="tenant-nav">
            {tenantNav.map(({ label, href, icon: Icon }) => (
              <Link key={href} href={href} className="tenant-nav-link" style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '7px 13px', borderRadius: 8,
                color: 'rgba(255,255,255,0.78)',
                fontSize: 13, fontWeight: 500,
                textDecoration: 'none',
                transition: 'background 140ms, color 140ms',
                whiteSpace: 'nowrap',
              }}>
                <Icon size={14} />
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA droite */}
          {isLoggedIn ? (
            <Link href="/dashboard" style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '7px 16px', borderRadius: 8,
              background: 'rgba(255,255,255,0.13)',
              border: '1px solid rgba(255,255,255,0.22)',
              color: '#fff', fontSize: 13, fontWeight: 600,
              textDecoration: 'none', flexShrink: 0,
              transition: 'background 140ms',
            }} className="tenant-cta">
              <LayoutDashboard size={14} />
              Mon espace
            </Link>
          ) : (
            <Link href="/inscription" style={{
              padding: '7px 18px', borderRadius: 8,
              background: '#fff',
              color: 'var(--color-blue-france)', fontSize: 13, fontWeight: 700,
              textDecoration: 'none', flexShrink: 0,
              transition: 'opacity 140ms',
            }}>
              S&apos;inscrire
            </Link>
          )}
        </div>
      </header>

      <main>{children}</main>

      {/* ── Footer minimal ───────────────────────────────────────────── */}
      <footer style={{
        background: 'var(--color-blue-night, #0A0F2E)',
        padding: '18px 24px',
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', margin: 0 }}>
            © {new Date().getFullYear()} {tenant.name} &nbsp;·&nbsp;
            <a
              href="https://www.maformationcivique.fr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(255,255,255,0.38)', textDecoration: 'underline' }}
            >
              Propulsé par maformationcivique.fr
            </a>
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            {[
              { label: 'Mentions légales', href: '/mentions-legales' },
              { label: 'CGU', href: '/cgu' },
              { label: 'Confidentialité', href: '/confidentialite' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{
                fontSize: 11, color: 'rgba(255,255,255,0.38)', textDecoration: 'none',
              }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        .tenant-nav-link:hover { background: rgba(255,255,255,0.12) !important; color: #fff !important; }
        .tenant-cta:hover { background: rgba(255,255,255,0.22) !important; }
        @media (max-width: 640px) {
          .tenant-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}
