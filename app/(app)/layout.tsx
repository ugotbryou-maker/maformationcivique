import Link from 'next/link';
import { BookOpen, LayoutDashboard, Trophy, TrendingUp, User, Building2 } from 'lucide-react';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';

const baseNav = [
  { icon: LayoutDashboard, label: 'Dashboard',  href: '/dashboard' },
  { icon: BookOpen,        label: 'Modules',    href: '/dashboard/modules' },
  { icon: Trophy,          label: 'Examens',    href: '/examen' },
  { icon: TrendingUp,      label: 'Progression',href: '/progression' },
  { icon: User,            label: 'Profil',     href: '/profil' },
];

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();

  let appNav = baseNav;

  if (user) {
    const { data: profile } = await supabase
      .from('users')
      .select('cabinet_id, cabinet_role')
      .eq('id', user.id)
      .single();

    if (profile?.cabinet_id && profile.cabinet_role === 'admin') {
      appNav = [...baseNav, { icon: Building2, label: 'Cabinet', href: '/cabinet' }];
    }

    if (isAdminEmail(user.email)) {
      appNav = [...appNav, { icon: Building2, label: 'Admin', href: '/admin/cabinets' }];
    }
  }

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
            display: 'flex', alignItems: 'center', gap: '8px',
            marginBottom: '32px', paddingLeft: '8px', textDecoration: 'none',
          }}
          aria-label="maformationcivique.fr — accueil"
        >
          {/* Brand icon — pièces rouge + bleue */}
          <svg width="30" height="22" viewBox="93 140 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
            <path d="M248.431 151C283.185 152.209 319.187 157.99 345.096 183.882C354.241 192.901 360.845 204.172 364.242 216.56C368.241 231.3 367.116 255.377 367.098 271.391L367.107 328.507L311.261 328.511L248.313 328.515C248.234 324.547 248.229 320.416 248.285 316.448C248.655 290.217 247.72 263.7 248.389 237.496L304.048 237.456C303.074 230.697 302.216 225.644 296.935 220.419C285.799 209.402 262.929 208.382 248.286 208.334C248.271 191.645 247.564 167.332 248.431 151Z" fill="#DE0019"/>
            <path d="M211.827 328.516C177.073 327.307 141.071 321.526 115.162 295.634C106.017 286.614 99.4131 275.344 96.0161 262.955C92.0171 248.216 93.1421 224.138 93.1597 208.125L93.1509 151.009L148.997 151.005L211.945 151C212.024 154.969 212.029 159.099 211.973 163.068C211.603 189.299 212.538 215.815 211.869 242.02L156.21 242.059C157.184 248.818 158.041 253.872 163.323 259.097C174.458 270.114 197.329 271.134 211.972 271.182C211.987 287.87 212.694 312.184 211.827 328.516Z" fill="#031E6C"/>
          </svg>
          <span style={{
            fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600,
            color: 'var(--color-text-primary)', lineHeight: 1,
          }}>
            ma<span style={{ color: 'var(--color-blue-france)' }}>formation</span>civique.fr
          </span>
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

      <style suppressHydrationWarning>{`
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
