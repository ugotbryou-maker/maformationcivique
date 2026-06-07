'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { num: '01', label: 'Modules', href: '/modules' },
  { num: '02', label: 'Examens blancs', href: '/examen' },
  { num: '03', label: 'Ressources', href: '/ressources' },
  { num: '04', label: 'Tarifs', href: '/#tarifs' },
];

const langs = ['FR', 'AR', 'EN', 'PT'];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState('FR');
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(12px)',
        borderBottom: '0.5px solid var(--color-border)',
      }}
    >
      <nav
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '64px',
          gap: '32px',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--font-size-base)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-text-primary)',
            flexShrink: 0,
          }}
        >
          ma<span style={{ color: 'var(--color-blue-france)' }}>formation</span>civique.fr
        </Link>

        {/* Nav links — desktop */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            flex: 1,
          }}
          className="nav-desktop"
        >
          {navLinks.map((link) => (
            <Link
              key={link.num}
              href={link.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text-secondary)',
                transition: 'all 200ms ease-out',
                minHeight: '36px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-blue-light)';
                e.currentTarget.style.color = 'var(--color-blue-france)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--color-text-secondary)';
              }}
            >
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                {link.num}
              </span>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto' }}>
          {/* Lang selector */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '6px 10px',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                background: 'transparent',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text-muted)',
                cursor: 'pointer',
                minHeight: '44px',
                minWidth: '44px',
                transition: 'color 200ms ease-out',
              }}
            >
              <Globe size={14} />
              {lang}
            </button>
            {langOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '4px',
                  background: 'var(--color-surface)',
                  border: 'var(--border-default)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-lg)',
                  overflow: 'hidden',
                  minWidth: '80px',
                }}
              >
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '8px 16px',
                      textAlign: 'left',
                      border: 'none',
                      background: l === lang ? 'var(--color-blue-light)' : 'transparent',
                      color: l === lang ? 'var(--color-blue-france)' : 'var(--color-text-secondary)',
                      fontSize: 'var(--font-size-sm)',
                      cursor: 'pointer',
                      transition: 'background 150ms ease-out',
                      minHeight: '40px',
                    }}
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Connexion */}
          <Link href="/connexion" className="nav-desktop">
            <Button variant="ghost" size="sm">Connexion</Button>
          </Link>

          {/* S'inscrire */}
          <Link href="/inscription" className="nav-desktop">
            <Button variant="primary" size="sm">S'inscrire — gratuit</Button>
          </Link>

          {/* Burger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-mobile"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
              padding: '8px',
              minHeight: '44px',
              minWidth: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            borderTop: '0.5px solid var(--color-border)',
            background: 'var(--color-surface)',
            padding: '16px 24px 24px',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.num}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 0',
                borderBottom: '0.5px solid var(--color-border)',
                fontSize: 'var(--font-size-base)',
                color: 'var(--color-text-secondary)',
              }}
            >
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                {link.num}
              </span>
              {link.label}
            </Link>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
            <Link href="/connexion" onClick={() => setMenuOpen(false)}>
              <Button variant="ghost" size="md" fullWidth>Connexion</Button>
            </Link>
            <Link href="/inscription" onClick={() => setMenuOpen(false)}>
              <Button variant="primary" size="md" fullWidth>S'inscrire — gratuit</Button>
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile { display: none !important; }
          .nav-desktop { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
