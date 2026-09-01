'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, User, LayoutDashboard, LogOut, ChevronDown, Landmark, Languages, MapPin, BookOpen, Newspaper, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { createClient } from '@/lib/supabase';
import type { TenantConfig } from '@/lib/tenants';
import { useRouter } from 'next/navigation';

const navLinks = [
  { num: '02', label: 'Examens blancs',    href: '/examen' },
  { num: '04', label: "Test d'éligibilité", href: '/test-eligibilite' },
];

const modulesLinks = [
  { icon: Landmark,  label: 'Examen civique',       href: '/modulesciviques',      description: 'Histoire, institutions, valeurs de la République' },
  { icon: Languages, label: 'Examen linguistique',  href: '/moduleslinguistiques', description: 'Français A2, B1, B2 — OFII, DELF, naturalisation' },
];

const resourcesColumns = [
  {
    title: 'Préparer sa démarche',
    links: [
      { icon: BookOpen, label: 'Guides des démarches', href: '/guides',         description: 'Titre de séjour, carte de résident, naturalisation' },
      { icon: MapPin,   label: "Centres d'examen",     href: '/examen-civique', description: "Où passer l'examen civique, par département" },
    ],
  },
  {
    title: 'Aller plus loin',
    links: [
      { icon: Newspaper, label: 'Articles & guides', href: '/ressources', description: 'Démarches, vie en France, actualités' },
      { icon: Sparkles,  label: 'Fiches bonus',      href: '/fiches',     description: 'Grandes figures & grands lieux de France' },
    ],
  },
];

// Liens à plat, utilisés pour le menu mobile (accordéon)
const resourcesLinks = resourcesColumns.flatMap((col) => col.links);

const langs = ['FR', 'AR', 'EN', 'PT'];

export function Navbar({ tenant }: { tenant?: TenantConfig | null }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen]   = useState(false);
  const [lang, setLang]           = useState('FR');
  const [langOpen, setLangOpen]   = useState(false);
  const [userOpen, setUserOpen]   = useState(false);
  const [modulesOpen, setModulesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileModulesOpen, setMobileModulesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [user, setUser]           = useState<{ email?: string; name?: string } | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const userRef = useRef<HTMLDivElement>(null);
  const modulesRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const modulesCloseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resourcesCloseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── Méga-menus : ouverture au survol, fermeture avec un léger délai
     (pour ne pas fermer quand la souris traverse l'espace entre le
     bouton et le panneau) ── */
  function openOnHover(which: 'modules' | 'resources') {
    if (which === 'modules') {
      if (modulesCloseTimeout.current) clearTimeout(modulesCloseTimeout.current);
      setModulesOpen(true);
    } else {
      if (resourcesCloseTimeout.current) clearTimeout(resourcesCloseTimeout.current);
      setResourcesOpen(true);
    }
  }
  function closeOnHoverLeave(which: 'modules' | 'resources') {
    if (which === 'modules') {
      modulesCloseTimeout.current = setTimeout(() => setModulesOpen(false), 150);
    } else {
      resourcesCloseTimeout.current = setTimeout(() => setResourcesOpen(false), 150);
    }
  }

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

  /* ── Close dropdowns on outside click ───────────────────────────── */
  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (userRef.current && !userRef.current.contains(e.target as Node)) {
        setUserOpen(false);
      }
      if (modulesRef.current && !modulesRef.current.contains(e.target as Node)) {
        setModulesOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, []);

  /* ── Fermeture au clavier (Échap) — accessibilité méga-menus ────── */
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setModulesOpen(false);
        setResourcesOpen(false);
        setUserOpen(false);
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
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
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          {tenant ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={tenant.logoPath}
              alt={tenant.name}
              style={{ height: 38, width: 'auto' }}
            />
          ) : (
            <BrandLogo height={38} variant="color" />
          )}
        </Link>

        {/* Nav links — desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flex: 1 }} className="nav-desktop">

          {/* Modules — méga-menu (Civique + Langue) */}
          <div
            ref={modulesRef}
            style={{ position: 'static' }}
            onMouseEnter={() => openOnHover('modules')}
            onMouseLeave={() => closeOnHoverLeave('modules')}
          >
            <button
              onClick={() => openOnHover('modules')}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-sm)', color: modulesOpen ? 'var(--color-blue-france)' : 'var(--color-text-secondary)', background: modulesOpen ? 'var(--color-blue-light)' : 'transparent', border: 'none', cursor: 'pointer', transition: 'all 200ms ease-out', minHeight: '36px', fontFamily: 'var(--font-sans)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-blue-light)'; e.currentTarget.style.color = 'var(--color-blue-france)'; }}
              onMouseLeave={(e) => { if (!modulesOpen) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-text-secondary)'; } }}
            >
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', fontWeight: 500 }}>01</span>
              Modules
              <ChevronDown size={13} style={{ opacity: 0.5, transform: modulesOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 200ms' }} />
            </button>

            {modulesOpen && (
              <div style={{ position: 'fixed', top: 65, left: 0, right: 0, zIndex: 150 }}>
                <div style={{ background: 'var(--color-blue-night)', boxShadow: '0 24px 48px rgba(0,10,50,0.35)' }}>
                  <div style={{ height: 3, background: 'var(--gradient-tricolor)' }} />
                  <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 48, padding: '36px 24px 40px' }}>
                    {/* Colonne liens */}
                    <div>
                      <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', margin: '0 0 18px' }}>
                        Nos formations
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {modulesLinks.map(({ icon: Icon, label, href, description }) => (
                          <Link
                            key={href}
                            href={href}
                            onClick={() => setModulesOpen(false)}
                            style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 12px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', transition: 'background 150ms' }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)'; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                          >
                            <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <Icon size={19} color="#fff" />
                            </div>
                            <div>
                              <div style={{ fontSize: 15.5, fontWeight: 700, color: '#fff' }}>{label}</div>
                              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>{description}</div>
                            </div>
                          </Link>
                        ))}
                        <Link
                          href="/examen"
                          onClick={() => setModulesOpen(false)}
                          style={{ fontSize: 13.5, fontWeight: 600, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', padding: '10px 12px', marginTop: 4 }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'; }}
                        >
                          Tous les examens blancs →
                        </Link>
                      </div>
                    </div>

                    {/* Carte mise en avant */}
                    <Link
                      href="/examen"
                      onClick={() => setModulesOpen(false)}
                      style={{
                        display: 'block', borderRadius: 'var(--radius-lg)', overflow: 'hidden', textDecoration: 'none',
                        background: `linear-gradient(rgba(0,10,50,0.35), rgba(0,10,50,0.88)), url('/images/modules/daumier-la-republique.jpg') center/cover no-repeat`,
                        border: '1px solid rgba(255,255,255,0.1)', minHeight: 200,
                      }}
                    >
                      <div style={{ padding: '18px 20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                        <span style={{ alignSelf: 'flex-start', fontSize: 11, fontWeight: 700, color: '#FF8B84', background: 'rgba(239,65,53,0.18)', border: '0.5px solid rgba(239,65,53,0.4)', borderRadius: 100, padding: '4px 10px', marginBottom: 12 }}>
                          177 questions officielles
                        </span>
                        <p style={{ fontSize: 16.5, fontWeight: 800, color: '#fff', margin: '0 0 6px', lineHeight: 1.3 }}>
                          Passez un examen blanc gratuit
                        </p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', margin: '0 0 10px', lineHeight: 1.5 }}>
                          40 questions, conditions réelles, correction immédiate.
                        </p>
                        <span style={{ fontSize: 13.5, fontWeight: 700, color: '#fff' }}>Commencer →</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(0, 1).map((link) => (
            <Link key={link.num} href={link.href} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', transition: 'all 200ms ease-out', minHeight: '36px' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-blue-light)'; e.currentTarget.style.color = 'var(--color-blue-france)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
            >
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', fontWeight: 500 }}>{link.num}</span>
              {link.label}
            </Link>
          ))}

          {/* Ressources — méga-menu (regroupe Guides, Centres, Articles, Fiches) */}
          <div
            ref={resourcesRef}
            style={{ position: 'static' }}
            onMouseEnter={() => openOnHover('resources')}
            onMouseLeave={() => closeOnHoverLeave('resources')}
          >
            <button
              onClick={() => openOnHover('resources')}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-sm)', color: resourcesOpen ? 'var(--color-blue-france)' : 'var(--color-text-secondary)', background: resourcesOpen ? 'var(--color-blue-light)' : 'transparent', border: 'none', cursor: 'pointer', transition: 'all 200ms ease-out', minHeight: '36px', fontFamily: 'var(--font-sans)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-blue-light)'; e.currentTarget.style.color = 'var(--color-blue-france)'; }}
              onMouseLeave={(e) => { if (!resourcesOpen) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-text-secondary)'; } }}
            >
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', fontWeight: 500 }}>03</span>
              Ressources
              <ChevronDown size={13} style={{ opacity: 0.5, transform: resourcesOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 200ms' }} />
            </button>

            {resourcesOpen && (
              <div style={{ position: 'fixed', top: 65, left: 0, right: 0, zIndex: 150 }}>
                <div style={{ background: 'var(--color-blue-night)', boxShadow: '0 24px 48px rgba(0,10,50,0.35)' }}>
                  <div style={{ height: 3, background: 'var(--gradient-tricolor)' }} />
                  <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 340px', gap: 32, padding: '36px 24px 40px' }}>
                    {resourcesColumns.map((col) => (
                      <div key={col.title}>
                        <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', margin: '0 0 18px' }}>
                          {col.title}
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                          {col.links.map(({ icon: Icon, label, href, description }) => (
                            <Link
                              key={href}
                              href={href}
                              onClick={() => setResourcesOpen(false)}
                              style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 12px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', transition: 'background 150ms' }}
                              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)'; }}
                              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                            >
                              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <Icon size={19} color="#fff" />
                              </div>
                              <div>
                                <div style={{ fontSize: 15.5, fontWeight: 700, color: '#fff' }}>{label}</div>
                                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>{description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* Carte mise en avant */}
                    <Link
                      href="/guides/examen-civique"
                      onClick={() => setResourcesOpen(false)}
                      style={{
                        display: 'block', borderRadius: 'var(--radius-lg)', overflow: 'hidden', textDecoration: 'none',
                        background: `linear-gradient(rgba(139,26,43,0.35), rgba(0,10,50,0.9)), url('/images/modules/republique.jpg') center/cover no-repeat`,
                        border: '1px solid rgba(255,255,255,0.1)', minHeight: 200,
                      }}
                    >
                      <div style={{ padding: '18px 20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                        <span style={{ alignSelf: 'flex-start', fontSize: 11, fontWeight: 700, color: '#6BDFB8', background: 'rgba(29,158,117,0.18)', border: '0.5px solid rgba(29,158,117,0.4)', borderRadius: 100, padding: '4px 10px', marginBottom: 12 }}>
                          À la une
                        </span>
                        <p style={{ fontSize: 16.5, fontWeight: 800, color: '#fff', margin: '0 0 6px', lineHeight: 1.3 }}>
                          Examen civique : le guide complet 2026
                        </p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', margin: '0 0 10px', lineHeight: 1.5 }}>
                          Format, coût, centres, dispenses — tout en un seul endroit.
                        </p>
                        <span style={{ fontSize: 13.5, fontWeight: 700, color: '#fff' }}>Lire le guide →</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
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
              <Link href="/partenaires" className="nav-desktop">
                <Button variant="ghost" size="sm">Devenir partenaire</Button>
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

          {/* Modules — accordéon mobile */}
          <button
            onClick={() => setMobileModulesOpen(!mobileModulesOpen)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '10px', padding: '12px 0', borderBottom: '0.5px solid var(--color-border)', fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', background: 'transparent', border: 'none', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', fontWeight: 500 }}>01</span>
              Modules
            </span>
            <ChevronDown size={16} style={{ opacity: 0.5, transform: mobileModulesOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 200ms' }} />
          </button>
          {mobileModulesOpen && (
            <div style={{ paddingLeft: '24px', borderBottom: '0.5px solid var(--color-border)' }}>
              {modulesLinks.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => { setMenuOpen(false); setMobileModulesOpen(false); }} style={{ display: 'block', padding: '10px 0', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {navLinks.slice(0, 1).map((link) => (
            <Link key={link.num} href={link.href} onClick={() => setMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 0', borderBottom: '0.5px solid var(--color-border)', fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)' }}>
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', fontWeight: 500 }}>{link.num}</span>
              {link.label}
            </Link>
          ))}

          {/* Ressources — accordéon (Articles & Fiches) */}
          <button
            onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '10px', padding: '12px 0', borderBottom: '0.5px solid var(--color-border)', fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', background: 'transparent', border: 'none', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', fontWeight: 500 }}>03</span>
              Ressources
            </span>
            <ChevronDown size={16} style={{ opacity: 0.5, transform: mobileResourcesOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 200ms' }} />
          </button>
          {mobileResourcesOpen && (
            <div style={{ paddingLeft: '24px', borderBottom: '0.5px solid var(--color-border)' }}>
              {resourcesLinks.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => { setMenuOpen(false); setMobileResourcesOpen(false); }} style={{ display: 'block', padding: '10px 0', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {navLinks.slice(1).map((link) => (
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
                <Link href="/partenaires" onClick={() => setMenuOpen(false)}>
                  <Button variant="ghost" size="md" fullWidth>Devenir partenaire</Button>
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
