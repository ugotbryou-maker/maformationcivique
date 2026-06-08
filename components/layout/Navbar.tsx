'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, User, LayoutDashboard, LogOut, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { createClient } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

const navLinks = [
  { num: '01', label: 'Modules',       href: '/modules' },
  { num: '02', label: 'Examens blancs', href: '/examen' },
  { num: '03', label: 'Ressources',    href: '/ressources' },
  { num: '04', label: 'Tarifs',        href: '/#tarifs' },
];

const langs = ['FR', 'AR', 'EN', 'PT'];

export function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen]   = useState(false);
  const [lang, setLang]           = useState('FR');
  const [langOpen, setLangOpen]   = useState(false);
  const [userOpen, setUserOpen]   = useState(false);
  const [user, setUser]           = useState<{ email?: string; name?: string } | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const userRef = useRef<HTMLDivElement>(null);

  /* ── Auth state ─────────────────────────────────────────────────── */
  useEffect(() => {
    const supabase = createClient();

    async function loadUser() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        const meta = session.user.user_metadata;
        setUser({ email: session.user.email, name: meta?.name || meta?.full_name || '' });
      } else {
        setUser(null);
      }
      setAuthLoading(false);
    }
    loadUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const meta = session.user.user_metadata;
        setUser({ email: session.user.email, name: meta?.name || meta?.full_name || '' });
      } else {
        setUser(null);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  /* ── Close user dropdown on outside click ───────────────────────── */
  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (userRef.current && !userRef.current.contains(e.target as Node)) {
        setUserOpen(false);
      }
    }
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, []);

  /* ── Sign out ────────────────────────────────────────────────────── */
  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
    setUserOpen(false);
    router.push('/');
    router.refresh();
  }

  /* ── Avatar initiale ─────────────────────────────────────────────── */
  const initial = user?.name?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || 'U';

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(255,255,255,0.96)',
      backdropFilter: 'blur(12px)',
      borderBottom: '0.5px solid var(--color-border)',
    }}>
      <nav className="container" style={{ display: 'flex', alignItems: 'center', height: '64px', gap: '32px' }}>

        {/* Logo */}
        <Link href="/" style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-medium)', color: 'var(--color-text-primary)', flexShrink: 0 }}>
          ma<span style={{ color: 'var(--color-blue-france)' }}>formation</span>civique.fr
        </Link>

        {/* Nav links — desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flex: 1 }} className="nav-desktop">
          {navLinks.map((link) => (
            <Link key={link.num} href={link.href} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', transition: 'all 200ms ease-out', minHeight: '36px' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-blue-light)'; e.currentTarget.style.color = 'var(--color-blue-france)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
            >
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', fontWeight: 500 }}>{link.num}</span>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto' }}>

          {/* Lang selector */}
          <div style={{ position: 'relative' }}>
            <button onClick={() => setLangOpen(!langOpen)} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 10px', borderRadius: 'var(--radius-md)', border: 'none', background: 'transparent', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', cursor: 'pointer', minHeight: '44px', minWidth: '44px', transition: 'color 200ms ease-out' }}>
              <Globe size={14} />{lang}
            </button>
            {langOpen && (
              <div style={{ position: 'absolute', top: '100%', right: 0, marginTop: '4px', background: 'var(--color-surface)', border: 'var(--border-default)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden', minWidth: '80px' }}>
                {langs.map((l) => (
                  <button key={l} onClick={() => { setLang(l); setLangOpen(false); }} style={{ display: 'block', width: '100%', padding: '8px 16px', textAlign: 'left', border: 'none', background: l === lang ? 'var(--color-blue-light)' : 'transparent', color: l === lang ? 'var(--color-blue-france)' : 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', cursor: 'pointer', minHeight: '40px' }}>
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── AUTH ZONE : skeleton pendant le chargement ── */}
          {authLoading ? (
            <div className="nav-desktop" style={{ width: 120, height: 36, borderRadius: 'var(--radius-pill)', background: 'var(--color-border)', opacity: 0.4, animation: 'navPulse 1.4s ease-in-out infinite' }} />
          ) : user ? (
            <div ref={userRef} style={{ position: 'relative' }} className="nav-desktop">
              <button
                onClick={() => setUserOpen(!userOpen)}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', borderRadius: 'var(--radius-pill)', border: '1.5px solid var(--color-border)', background: 'var(--color-surface)', cursor: 'pointer', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-primary)', minHeight: '40px', transition: 'border-color 200ms' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-blue-france)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-border)'; }}
              >
                {/* Avatar initiale */}
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                  {initial}
                </div>
                <span style={{ maxWidth: 120, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {user.name || user.email?.split('@')[0]}
                </span>
                <ChevronDown size={14} style={{ flexShrink: 0, opacity: 0.5, transform: userOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 200ms' }} />
              </button>

              {userOpen && (
                <div style={{ position: 'absolute', top: 'calc(100% + 8px)', right: 0, background: 'var(--color-surface)', border: 'var(--border-default)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', minWidth: '200px', overflow: 'hidden', zIndex: 200 }}>
                  {/* Info */}
                  <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-border)' }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)', margin: 0 }}>{user.name || 'Mon compte'}</p>
                    <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: '2px 0 0' }}>{user.email}</p>
                  </div>
                  {/* Links */}
                  {[
                    { icon: LayoutDashboard, label: 'Tableau de bord', href: '/dashboard' },
                    { icon: User,            label: 'Mon profil',       href: '/profil' },
                  ].map(({ icon: Icon, label, href }) => (
                    <Link key={href} href={href} onClick={() => setUserOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 16px', fontSize: 14, color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'background 150ms' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-blue-light)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                    >
                      <Icon size={15} />{label}
                    </Link>
                  ))}
                  <div style={{ borderTop: '1px solid var(--color-border)' }}>
                    <button onClick={handleSignOut} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 16px', width: '100%', border: 'none', background: 'transparent', fontSize: 14, color: 'var(--color-red-france)', cursor: 'pointer', transition: 'background 150ms' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#FEF2F2'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                    >
                      <LogOut size={15} />Se déconnecter
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* ── NON CONNECTÉ ── */
            <>
              <Link href="/connexion" className="nav-desktop">
                <Button variant="ghost" size="sm">Connexion</Button>
              </Link>
              <Link href="/inscription" className="nav-desktop">
                <Button variant="primary" size="sm">S'inscrire — gratuit</Button>
              </Link>
            </>
          )}

          {/* Burger mobile */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="nav-mobile" style={{ background: 'none', border: 'none', color: 'var(--color-text-primary)', cursor: 'pointer', padding: '8px', minHeight: '44px', minWidth: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label={menuOpen ? 'Fermer' : 'Menu'}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ borderTop: '0.5px solid var(--color-border)', background: 'var(--color-surface)', padding: '16px 24px 24px' }}>
          {navLinks.map((link) => (
            <Link key={link.num} href={link.href} onClick={() => setMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 0', borderBottom: '0.5px solid var(--color-border)', fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)' }}>
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', fontWeight: 500 }}>{link.num}</span>
              {link.label}
            </Link>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
            {user ? (
              <>
                <Link href="/dashboard" onClick={() => setMenuOpen(false)}>
                  <Button variant="ghost" size="md" fullWidth>Mon tableau de bord</Button>
                </Link>
                <button onClick={() => { handleSignOut(); setMenuOpen(false); }} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-red-france)', fontSize: 'var(--font-size-base)', cursor: 'pointer', fontFamily: 'var(--font-sans)', minHeight: '48px' }}>
                  Se déconnecter
                </button>
              </>
            ) : (
              <>
                <Link href="/connexion" onClick={() => setMenuOpen(false)}>
                  <Button variant="ghost" size="md" fullWidth>Connexion</Button>
                </Link>
                <Link href="/inscription" onClick={() => setMenuOpen(false)}>
                  <Button variant="primary" size="md" fullWidth>S'inscrire — gratuit</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .nav-desktop { display: none !important; } .nav-mobile { display: flex !important; } }
        @media (min-width: 769px) { .nav-mobile { display: none !important; } .nav-desktop { display: flex !important; } }
        @keyframes navPulse { 0%,100% { opacity: 0.3; } 50% { opacity: 0.6; } }
      `}</style>
    </header>
  );
}
