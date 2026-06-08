import Link from 'next/link';
import { BookOpen, LayoutDashboard, Trophy, TrendingUp, User } from 'lucide-react';

const appNav = [
  { icon: LayoutDashboard, label: 'Dashboard',  href: '/dashboard' },
  { icon: BookOpen,        label: 'Modules',    href: '/modules' },
  { icon: Trophy,          label: 'Examens',    href: '/examen' },
  { icon: TrendingUp,      label: 'Progression',href: '/progression' },
  { icon: User,            label: 'Profil',     href: '/profil' },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Sidebar — desktop only */}
      <aside
        style={{
          width: '220px',
          flexShrink: 0,
          background: 'var(--color-surface)',
          borderRight: 'var(--border-default)',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 16px',
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflowY: 'auto',
        }}
        className="app-sidebar"
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            fontWeight: 500,
            color: 'var(--color-text-primary)',
            display: 'block',
            marginBottom: '32px',
            paddingLeft: '8px',
          }}
        >
          ma<span style={{ color: 'var(--color-blue-france)' }}>formation</span>civique.fr
        </Link>

        <nav style={{ flex: 1 }}>
          {appNav.map(({ icon: Icon, label, href }) => (
            <Link
              key={href}
              href={href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 12px',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text-secondary)',
                marginBottom: '2px',
                transition: 'all 150ms ease-out',
                minHeight: '44px',
              }}
              className="app-nav-link"
            >
              <Icon size={17} />
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, minWidth: 0, overflowX: 'hidden' }}>
        {/* Mobile topbar */}
        <div
          className="app-topbar"
          style={{
            display: 'none',
            position: 'sticky',
            top: 0,
            zIndex: 50,
            background: 'rgba(255,255,255,0.96)',
            backdropFilter: 'blur(12px)',
            borderBottom: 'var(--border-default)',
            padding: '12px 20px',
          }}
        >
          <Link href="/" style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 500, color: 'var(--color-text-primary)' }}>
            ma<span style={{ color: 'var(--color-blue-france)' }}>formation</span>civique.fr
          </Link>
        </div>

        {/* Page content — padding-bottom laisse de la place à la bottom nav mobile */}
        <div style={{ padding: '32px 24px 100px' }} className="app-content">
          {children}
        </div>
      </main>

      {/* ── Bottom nav — mobile only ───────────────────────────────────────── */}
      <nav
        className="app-bottom-nav"
        style={{
          display: 'none',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: 'rgba(255,255,255,0.96)',
          backdropFilter: 'blur(16px)',
          borderTop: 'var(--border-default)',
          height: '64px',
          padding: '0 4px',
        }}
      >
        {appNav.map(({ icon: Icon, label, href }) => (
          <Link
            key={href}
            href={href}
            className="bottom-nav-item"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '3px',
              flex: 1,
              height: '100%',
              textDecoration: 'none',
              color: 'var(--color-text-muted)',
              fontSize: '10px',
              fontWeight: 500,
              minWidth: 0,
              padding: '4px 2px',
              transition: 'color 150ms ease-out',
            }}
          >
            <Icon size={20} />
            <span style={{ lineHeight: 1, letterSpacing: '-0.01em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '56px', textAlign: 'center' }}>
              {label}
            </span>
          </Link>
        ))}
      </nav>

      <style>{`
        /* ─── Responsive ─────────────────────────────────────────────────── */
        @media (max-width: 768px) {
          .app-sidebar      { display: none !important; }
          .app-topbar       { display: flex !important; align-items: center; }
          .app-bottom-nav   { display: flex !important; }
          .app-content      { padding: 20px 16px 100px !important; }
        }

        /* ─── Sidebar hover ──────────────────────────────────────────────── */
        .app-nav-link:hover {
          background: var(--color-blue-light) !important;
          color: var(--color-blue-france) !important;
        }

        /* ─── Bottom nav active ──────────────────────────────────────────── */
        .bottom-nav-item:hover,
        .bottom-nav-item.active {
          color: var(--color-blue-france) !important;
        }

        /* ─── Grids — éviter débordement sur mobile ──────────────────────── */
        @media (max-width: 480px) {
          .app-content > * {
            min-width: 0;
          }
        }
      `}</style>
    </div>
  );
}
