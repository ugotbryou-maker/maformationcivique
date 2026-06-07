import Link from 'next/link';
import { BookOpen, LayoutDashboard, Trophy, TrendingUp, User } from 'lucide-react';

const appNav = [
  { icon: LayoutDashboard, label: 'Tableau de bord', href: '/dashboard' },
  { icon: BookOpen,        label: 'Modules',          href: '/modules' },
  { icon: Trophy,          label: 'Examens blancs',   href: '/examen' },
  { icon: TrendingUp,      label: 'Progression',      href: '/progression' },
  { icon: User,            label: 'Profil',           href: '/profil' },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar — desktop */}
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
        {/* Logo */}
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
      <main style={{ flex: 1, minWidth: 0 }}>
        {/* Mobile topbar */}
        <div
          className="app-topbar"
          style={{
            display: 'none',
            position: 'sticky',
            top: 0,
            zIndex: 50,
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(12px)',
            borderBottom: 'var(--border-default)',
            padding: '12px 24px',
          }}
        >
          <Link href="/" style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 500, color: 'var(--color-text-primary)' }}>
            ma<span style={{ color: 'var(--color-blue-france)' }}>formation</span>civique.fr
          </Link>
        </div>

        <div style={{ padding: '32px 32px 80px' }}>
          {children}
        </div>
      </main>

      <style>{`
        @media (max-width: 768px) {
          .app-sidebar { display: none !important; }
          .app-topbar { display: flex !important; align-items: center; }
        }
        .app-nav-link:hover {
          background: var(--color-blue-light) !important;
          color: var(--color-blue-france) !important;
        }
      `}</style>
    </div>
  );
}
