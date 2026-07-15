import Link from 'next/link';
import Image from 'next/image';
import {
  Building2, Users, FileDown, BarChart3, CheckCircle2,
  ArrowRight, ShieldCheck, Clock, Star, Briefcase, MessageSquarePlus,
  Palette, Globe, EyeOff, Sparkles, Link2, Eye,
} from 'lucide-react';
import type { Metadata } from 'next';
import { ApercuWidget } from '@/components/apercu/ApercuWidget';
import { HeroAnimatedTitle } from '@/components/partenaires/HeroAnimatedTitle';

export const metadata: Metadata = {
  title: "Espace partenaires — Cabinets d'avocats | maformationcivique.fr",
  description: "Offrez la formation civique à vos clients étrangers : tableau de bord dédié, suivi de progression et attestations PDF. À partir de 390 €/an.",
  alternates: { canonical: 'https://www.maformationcivique.fr/partenaires' },
  openGraph: {
    title: "Espace partenaires — Cabinets d'avocats",
    description: "Tableau de bord dédié, suivi de progression et attestations PDF pour vos clients étrangers. À partir de 390 €/an.",
    url: 'https://www.maformationcivique.fr/partenaires',
  },
};

const tiers = [
  {
    id: 'starter',
    name: 'Starter',
    price: '390',
    quota: '15 clients',
    ideal: 'Avocat solo ou cabinet de moins de 20 dossiers/an',
    features: [
      'Jusqu\'à 15 invitations actives',
      'Dashboard de suivi individuel',
      'Attestations PDF téléchargeables',
      'Accès Premium offert à chaque client',
      'Support email',
    ],
    cta: 'Démarrer',
    highlight: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '990',
    quota: '50 clients',
    ideal: 'Cabinet avec volume régulier de dossiers naturalisation',
    features: [
      'Jusqu\'à 50 invitations actives',
      'Tout le Starter, plus…',
      'Export CSV des progressions',
      'Lien Google My Business automatisé',
      'Accès prioritaire au support',
    ],
    cta: 'Choisir Pro',
    highlight: true,
  },
  {
    id: 'cabinet_plus',
    name: 'Cabinet+',
    price: '1 990',
    quota: '150 clients',
    ideal: 'Grands cabinets, associations d\'aide à l\'intégration',
    features: [
      'Jusqu\'à 150 invitations actives',
      'Tout le Pro, plus…',
      'Compte manager dédié',
      'Onboarding personnalisé',
      'Rapport de suivi mensuel',
    ],
    cta: 'Nous contacter',
    highlight: false,
  },
];

const proofPoints = [
  {
    icon: Clock,
    logo: null,
    stat: '3 – 6 mois',
    desc: 'C\'est le délai moyen entre la préparation et l\'entretien de naturalisation — vos clients ont besoin d\'un outil structuré.',
  },
  {
    icon: ShieldCheck,
    logo: '/images/ofpra-logo.jpg',
    stat: 'Conforme OFPRA',
    desc: 'Nos contenus couvrent exactement le programme officiel : histoire, institutions, valeurs de la République.',
  },
  {
    icon: Star,
    logo: null,
    stat: '4,8 / 5',
    desc: 'Note moyenne de nos apprenants. Vos clients vont apprécier, et c\'est votre cabinet qui sera associé à leur réussite.',
  },
];

const steps = [
  {
    num: '01',
    icon: Building2,
    title: 'Vous créez votre espace',
    desc: 'On configure votre compte cabinet sous 24h après réception de votre paiement.',
    accent: '#002395',
  },
  {
    num: '02',
    icon: Users,
    title: 'Vous invitez vos clients',
    desc: 'Un simple email depuis le dashboard — votre client s\'inscrit et accède immédiatement à la formation Premium.',
    accent: '#1D4ED8',
  },
  {
    num: '03',
    icon: BarChart3,
    title: 'Vous suivez leur progression',
    desc: 'Modules complétés, quiz réussis, % de progression global — tout en un coup d\'œil depuis votre dashboard.',
    accent: '#059669',
  },
  {
    num: '04',
    icon: FileDown,
    title: 'Vous téléchargez l\'attestation',
    desc: 'Un PDF horodaté à joindre au dossier préfecture quand votre client a terminé sa formation.',
    accent: '#7C3AED',
  },
  {
    num: '05',
    icon: MessageSquarePlus,
    title: 'Vos clients vous laissent un avis',
    desc: 'À 50 %, 80 % et 100 % de formation, un email invite votre client à laisser un avis Google My Business — séquence stoppée dès le premier avis posté. Configurez votre lien en 30 secondes.',
    accent: '#D97706',
  },
];

export default function PartenairesPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{
        background: `linear-gradient(135deg, rgba(0,25,80,0.76) 0%, rgba(0,31,140,0.72) 100%), url('/images/partenaires/handshake.jpg') center 30%/cover no-repeat`,
        color: '#fff',
        padding: '88px 0 104px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: [
            'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%)',
            'radial-gradient(circle at 10% 80%, rgba(0,35,149,0.4) 0%, transparent 40%)',
          ].join(', '),
        }} />

        <div className="container partenaires-hero-inner" style={{ padding: '0 24px', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 420px', gap: 56, alignItems: 'center' }}>

          {/* ── Colonne texte ── */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.14)',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: 'var(--radius-pill)',
              padding: '6px 16px',
              fontSize: 'var(--font-size-xs)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: 28,
              backdropFilter: 'blur(8px)',
            }}>
              <Briefcase size={12} />
              Espace partenaires — Cabinets d&apos;avocats
            </div>

            <HeroAnimatedTitle />

            <p style={{
              fontSize: 'var(--font-size-base)',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.88)',
              maxWidth: 480,
              marginBottom: 24,
            }}>
              Invitez vos clients étrangers à se former sur maformationcivique.fr,
              suivez leur avancement et téléchargez leur attestation en un clic pour le dossier préfecture.
            </p>

            {/* Badges examens */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
              {[
                { label: 'Examen civique', color: '#BFCFFF', bg: 'rgba(191,207,255,0.12)' },
                { label: 'Linguistique A2', color: '#6EE7B7', bg: 'rgba(110,231,183,0.12)' },
                { label: 'Linguistique B1', color: '#6EE7B7', bg: 'rgba(110,231,183,0.12)' },
                { label: 'Linguistique B2', color: '#6EE7B7', bg: 'rgba(110,231,183,0.12)' },
              ].map(({ label, color, bg }) => (
                <span key={label} style={{
                  fontSize: 12, fontWeight: 600,
                  color, background: bg,
                  border: `1px solid ${color}30`,
                  borderRadius: 99, padding: '4px 12px',
                  backdropFilter: 'blur(4px)',
                }}>
                  {label}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a
                href="#tarifs"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#fff', color: 'var(--color-blue-france)',
                  padding: '14px 30px', borderRadius: 'var(--radius-pill)',
                  fontWeight: 700, fontSize: 'var(--font-size-base)',
                  textDecoration: 'none', fontFamily: 'var(--font-sans)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
                }}
              >
                Voir les tarifs <ArrowRight size={16} />
              </a>
              <a
                href="mailto:contact@maformationcivique.fr?subject=Partenariat cabinet"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,255,255,0.1)',
                  border: '1.5px solid rgba(255,255,255,0.45)',
                  color: '#fff',
                  padding: '14px 30px', borderRadius: 'var(--radius-pill)',
                  fontWeight: 600, fontSize: 'var(--font-size-base)',
                  textDecoration: 'none', fontFamily: 'var(--font-sans)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                Nous contacter
              </a>
            </div>
          </div>

          {/* ── Colonne widget ── */}
          <div style={{
            background: '#fff',
            borderRadius: 20,
            padding: '32px 28px 28px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.28)',
          }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
              Testez votre espace cabinet
            </p>
            <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginBottom: 20, lineHeight: 1.5 }}>
              Saisissez l&apos;URL de votre cabinet pour voir instantanément votre plateforme personnalisée.
            </p>
            <ApercuWidget label="" />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .partenaires-hero-inner { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>

      {/* ── PROOF POINTS ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-off-white)', padding: '64px 0' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <div className="proof-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
            {proofPoints.map(({ icon: Icon, logo, stat, desc }) => (
              <div key={stat} className="proof-card" style={{
                background: 'var(--color-surface)',
                border: 'var(--border-default)',
                borderRadius: 'var(--radius-xl)',
                padding: '28px 24px',
                boxShadow: 'var(--shadow-card)',
                transition: 'transform 220ms ease, box-shadow 220ms ease',
                cursor: 'default',
              }}>
                {logo ? (
                  <div style={{ marginBottom: 16, height: 44, display: 'flex', alignItems: 'center' }}>
                    <Image
                      src={logo}
                      alt="Logo OFPRA"
                      width={120}
                      height={44}
                      style={{ objectFit: 'contain', objectPosition: 'left' }}
                    />
                  </div>
                ) : (
                  <div style={{
                    width: 44, height: 44,
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--color-blue-light)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 16,
                  }}>
                    <Icon size={20} color="var(--color-blue-france)" />
                  </div>
                )}
                <p style={{ fontSize: 22, fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 8, lineHeight: 1.2 }}>{stat}</p>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DASHBOARD PREVIEW ────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '88px 0' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <div className="dash-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <div>
              <p style={{
                fontSize: 'var(--font-size-xs)', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.1em',
                color: 'var(--color-red-france)', marginBottom: 10,
              }}>
                Votre tableau de bord
              </p>
              <h2 style={{
                fontSize: 'var(--font-size-xl)', fontWeight: 700,
                color: 'var(--color-text-primary)', marginBottom: 18, lineHeight: 1.2,
              }}>
                Tout ce qu&apos;il vous faut,<br />
                <span style={{ color: 'var(--color-blue-france)' }}>sans complexité.</span>
              </h2>
              <p style={{
                fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)',
                lineHeight: 1.75, marginBottom: 36,
              }}>
                Depuis votre espace cabinet, invitez un client en 10 secondes,
                consultez sa progression module par module, et générez son attestation
                de formation quand il est prêt pour son entretien.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {[
                  { icon: Users, label: 'Invitation', text: 'Invitez un client par email — accès Premium immédiat, sans carte bancaire côté client' },
                  { icon: BarChart3, label: 'Suivi', text: 'Progression individuelle en temps réel : modules, quiz, examens blancs' },
                  { icon: FileDown, label: 'Attestation', text: 'Attestation PDF horodatée, prête pour le dossier OFII / naturalisation' },
                  { icon: MessageSquarePlus, label: 'Avis Google', text: 'Séquence de 3 emails automatiques (50 %, 80 %, 100 % de progression) — s\'arrête dès le premier avis posté' },
                ].map(({ icon: Icon, label, text }) => (
                  <div key={label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 36, height: 36, flexShrink: 0,
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--color-blue-light)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={16} color="var(--color-blue-france)" />
                    </div>
                    <div style={{ paddingTop: 6 }}>
                      <p style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-blue-france)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>{label}</p>
                      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mockup */}
            <div style={{
              background: 'var(--color-off-white)',
              border: 'var(--border-default)',
              borderRadius: 'var(--radius-xl)',
              padding: 24,
              boxShadow: 'var(--shadow-lg)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 'var(--radius-lg)',
                  background: 'var(--gradient-primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Building2 size={20} color="#fff" />
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: 14, color: 'var(--color-text-primary)', marginBottom: 2 }}>Cabinet Dupont & Associés</p>
                  <p style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Palier Pro · 12 / 50 invitations</p>
                </div>
              </div>
              {[
                { name: 'Amira K.', pct: 78 },
                { name: 'Youssef M.', pct: 45 },
                { name: 'Elena P.', pct: 100 },
              ].map(({ name, pct }) => (
                <div key={name} style={{
                  background: '#fff', border: 'var(--border-default)',
                  borderRadius: 'var(--radius-md)', padding: '12px 14px',
                  marginBottom: 8, display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  <div style={{
                    width: 32, height: 32, flexShrink: 0, borderRadius: '50%',
                    background: 'var(--gradient-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, fontWeight: 700, color: '#fff',
                  }}>{name[0]}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontWeight: 600, fontSize: 13, color: 'var(--color-text-primary)', marginBottom: 4 }}>{name}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ flex: 1, height: 5, borderRadius: 99, background: 'var(--color-border)', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${pct}%`, background: pct === 100 ? '#1D9E75' : 'var(--gradient-primary)', borderRadius: 99 }} />
                      </div>
                      <span style={{ fontSize: 11, fontWeight: 600, color: pct === 100 ? '#1D9E75' : 'var(--color-text-muted)', flexShrink: 0 }}>{pct}%</span>
                    </div>
                  </div>
                  {pct === 100 && (
                    <span style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', background: '#ECFDF5', padding: '3px 9px', borderRadius: 'var(--radius-pill)' }}>
                      Attestation ✓
                    </span>
                  )}
                </div>
              ))}
              <button style={{
                width: '100%', marginTop: 4, padding: '10px',
                borderRadius: 'var(--radius-pill)', background: 'var(--gradient-primary)',
                border: 'none', color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'default',
              }}>
                + Inviter un client
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUE BLANCHE ───────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-off-white)', padding: '88px 0' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <div className="wb-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>

            {/* Mockup animé */}
            <div>
              <div style={{
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: '0 32px 80px rgba(0,0,0,0.18)',
                border: '1px solid rgba(0,0,0,0.08)',
                background: '#fff',
              }}>
                {/* Browser chrome */}
                <div style={{ background: '#F1F5F9', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', gap: 5 }}>
                    {['#FF5F57','#FEBC2E','#28C840'].map(c => (
                      <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                    ))}
                  </div>
                  <div style={{ flex: 1, background: '#fff', borderRadius: 6, padding: '4px 12px', fontSize: 11, color: '#94A3B8', border: '1px solid #E2E8F0' }}>
                    votre-cabinet.maformationcivique.fr
                  </div>
                </div>

                {/* Navbars animées — 3 marques */}
                <div style={{ position: 'relative', height: 52 }}>
                  {[
                    { name: 'Cabinet Moreau & Associés', color: '#002395', cls: 'wb-brand-1' },
                    { name: 'Centre Accueil Île-de-France', color: '#1B5E20', cls: 'wb-brand-2' },
                    { name: 'Association Avenir Commun', color: '#5B21B6', cls: 'wb-brand-3' },
                  ].map(({ name, color, cls }) => (
                    <div key={cls} className={cls} style={{
                      position: 'absolute', inset: 0,
                      background: color,
                      display: 'flex', alignItems: 'center', padding: '0 20px', gap: 10,
                    }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: 6,
                        background: 'rgba(255,255,255,0.22)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <span style={{ fontSize: 12, fontWeight: 800, color: '#fff' }}>{name[0]}</span>
                      </div>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em', flex: 1, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{name}</span>
                      <div style={{ display: 'flex', gap: 14, flexShrink: 0 }}>
                        {['Civique', 'Langue', 'Examens'].map(item => (
                          <span key={item} style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contenu (identique pour toutes les marques) */}
                <div style={{ padding: '20px 20px 24px', background: '#fff' }}>
                  <p style={{ fontSize: 11, color: '#94A3B8', marginBottom: 12, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Formation civique · Module 1</p>
                  {[
                    { label: 'Les valeurs de la République', pct: 100, done: true },
                    { label: 'Les institutions françaises', pct: 67, done: false },
                    { label: 'Droits et devoirs du citoyen', pct: 20, done: false },
                  ].map(({ label, pct, done }) => (
                    <div key={label} style={{
                      background: '#F8FAFC', borderRadius: 8, padding: '10px 12px', marginBottom: 8,
                      display: 'flex', alignItems: 'center', gap: 10, border: '1px solid #E2E8F0',
                    }}>
                      <div style={{
                        width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                        background: done ? '#ECFDF5' : '#EEF2FF',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11,
                      }}>
                        {done ? '✓' : '→'}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: 11, fontWeight: 600, color: '#1E293B', marginBottom: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</p>
                        <div style={{ height: 3, borderRadius: 99, background: '#E2E8F0', overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${pct}%`, background: done ? '#1D9E75' : '#002395', borderRadius: 99 }} />
                        </div>
                      </div>
                      <span style={{ fontSize: 10, color: done ? '#1D9E75' : '#64748B', fontWeight: 600, flexShrink: 0 }}>{pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Texte */}
            <div>
              <p style={{
                fontSize: 'var(--font-size-xs)', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.1em',
                color: 'var(--color-blue-france)', marginBottom: 10,
              }}>
                Marque blanche
              </p>
              <h2 style={{
                fontSize: 'var(--font-size-xl)', fontWeight: 700,
                color: 'var(--color-text-primary)', marginBottom: 18, lineHeight: 1.2,
              }}>
                Votre logo.<br />
                <span style={{ color: 'var(--color-blue-france)' }}>Notre technologie.</span>
              </h2>
              <p style={{
                fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)',
                lineHeight: 1.75, marginBottom: 32,
              }}>
                En offre Cabinet+, vos clients accèdent à la plateforme entièrement
                sous votre identité visuelle — votre logo, vos couleurs.
                Une expérience premium qui porte votre cabinet, pas le nôtre.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 32 }}>
                {[
                  { Icon: Palette, color: '#002395', title: 'Votre charte graphique', desc: 'Logo + couleurs appliqués sur l\'ensemble des modules en quelques minutes de configuration.' },
                  { Icon: Globe, color: '#1B5E20', title: 'URL personnalisée', desc: 'Sous-domaine dédié : votre-cabinet.maformationcivique.fr' },
                  { Icon: EyeOff, color: '#5B21B6', title: 'Expérience transparente', desc: 'Vos clients voient votre cabinet — l\'infrastructure reste invisible.' },
                ].map(({ Icon, color, title, desc }) => (
                  <div key={title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 'var(--radius-md)', flexShrink: 0,
                      background: color + '14',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={16} color={color} />
                    </div>
                    <div style={{ paddingTop: 6 }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 2 }}>{title}</p>
                      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'var(--color-blue-light)',
                borderRadius: 'var(--radius-pill)',
                padding: '8px 18px',
                fontSize: 13, color: 'var(--color-blue-france)', fontWeight: 600,
              }}>
                ✦ Disponible à partir du palier Cabinet+
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOST AVIS GOOGLE ────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '88px 0' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <div className="gmb-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>

            {/* Texte */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <p style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#4285F4' }}>
                  Google My Business
                </p>
              </div>
              <h2 style={{
                fontSize: 'var(--font-size-xl)', fontWeight: 700,
                color: 'var(--color-text-primary)', marginBottom: 18, lineHeight: 1.2,
              }}>
                Chaque client formé<br />
                <span style={{ color: '#4285F4' }}>booste votre note Google.</span>
              </h2>
              <p style={{
                fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)',
                lineHeight: 1.75, marginBottom: 32,
              }}>
                La plateforme envoie automatiquement jusqu&apos;à 3 invitations à laisser
                un avis Google, à des moments clés de la progression de l&apos;apprenant.
                Dès qu&apos;un avis est posté, la séquence s&apos;arrête. Configurez votre
                lien GMB en 30 secondes depuis votre dashboard.
              </p>

              {/* Flow 3 paliers */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  { pct: '50 %', color: '#4285F4', label: '1ʳᵉ invitation — à mi-parcours', sub: 'Premier contact au moment de l\'engagement' },
                  { pct: '80 %', color: '#34A853', label: '2ᵉ invitation — presque au bout', sub: 'Rappel quand la satisfaction est au plus haut' },
                  { pct: '100 %', color: '#FBBC05', label: '3ᵉ invitation — formation complète', sub: 'Dernier rappel au moment de la réussite' },
                ].map(({ pct, color, label, sub }, i, arr) => (
                  <div key={pct} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                        background: color + '18', border: `2px solid ${color}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 10, fontWeight: 800, color,
                      }}>
                        {pct}
                      </div>
                      {i < arr.length - 1 && (
                        <div style={{ width: 2, height: 20, background: '#E2E8F0', margin: '4px 0' }} />
                      )}
                    </div>
                    <div style={{ paddingTop: 8, paddingBottom: i < arr.length - 1 ? 0 : 0 }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.3, marginBottom: 2 }}>{label}</p>
                      <p style={{ fontSize: 11, color: 'var(--color-text-muted)', lineHeight: 1.4, marginBottom: i < arr.length - 1 ? 8 : 0 }}>{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mockup fiche Google */}
            <div>

              {/* Stats d'impact */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
                <div style={{
                  background: 'linear-gradient(135deg, #1a3a6b 0%, #1e52a8 100%)',
                  borderRadius: 14, padding: '18px 20px',
                  boxShadow: '0 8px 24px rgba(26,58,107,0.28)',
                }}>
                  <p style={{ fontSize: 32, fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: 6, letterSpacing: '-0.02em' }}>+1,2 pt</p>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', lineHeight: 1.4 }}>de note Google<br />en moyenne</p>
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, #0f4c2a 0%, #1a7a42 100%)',
                  borderRadius: 14, padding: '18px 20px',
                  boxShadow: '0 8px 24px rgba(15,76,42,0.28)',
                }}>
                  <p style={{ fontSize: 32, fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: 6, letterSpacing: '-0.02em' }}>×3</p>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', lineHeight: 1.4 }}>plus d&apos;avis<br />en 3 mois</p>
                </div>
              </div>

              <div style={{
                borderRadius: 'var(--radius-xl)',
                border: '1px solid #E2E8F0',
                boxShadow: '0 20px 60px rgba(0,0,0,0.10)',
                overflow: 'hidden',
                background: '#fff',
              }}>
                {/* Header fiche */}
                <div style={{ background: '#F8F9FA', padding: '20px 20px 16px', borderBottom: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 8, flexShrink: 0,
                      background: 'var(--gradient-primary)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 18, fontWeight: 800, color: '#fff',
                    }}>D</div>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 700, color: '#202124', marginBottom: 2 }}>Cabinet Dupont & Associés</p>
                      <p style={{ fontSize: 12, color: '#5F6368' }}>Cabinet d&apos;avocats · Paris 8e</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                        <span style={{ fontSize: 14, fontWeight: 700, color: '#202124' }}>4,8</span>
                        <div style={{ display: 'flex', gap: 1 }}>
                          {[1,2,3,4,5].map(i => (
                            <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i <= 5 ? '#FBBC05' : '#E2E8F0'}>
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          ))}
                        </div>
                        <span style={{ fontSize: 11, color: '#5F6368' }}>47 avis</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Avis */}
                {[
                  { init: 'A', name: 'Amira K.', stars: 5, date: 'Il y a 2 jours', text: 'Cabinet très sérieux — ils m\'ont recommandé la plateforme pour préparer mon entretien de naturalisation. J\'ai obtenu mon passeport français !' },
                  { init: 'Y', name: 'Youssef M.', stars: 5, date: 'Il y a 1 semaine', text: 'Suivi impeccable tout au long de ma démarche. La formation civique recommandée était parfaite.' },
                ].map(({ init, name, stars, date, text }) => (
                  <div key={name} style={{ padding: '16px 20px', borderBottom: '1px solid #F1F3F4' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: '50%', background: '#4285F4',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 13, fontWeight: 700, color: '#fff', flexShrink: 0,
                      }}>{init}</div>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 600, color: '#202124', marginBottom: 1 }}>{name}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <div style={{ display: 'flex', gap: 1 }}>
                            {Array.from({ length: stars }).map((_, i) => (
                              <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#FBBC05">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            ))}
                          </div>
                          <span style={{ fontSize: 11, color: '#80868B' }}>{date}</span>
                        </div>
                      </div>
                    </div>
                    <p style={{ fontSize: 12, color: '#3C4043', lineHeight: 1.6 }}>{text}</p>
                  </div>
                ))}

                {/* CTA config */}
                <div style={{ padding: '16px 20px', background: '#F0F7FF', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                  <p style={{ fontSize: 12, color: '#4285F4', fontWeight: 600 }}>⚙️ Votre lien GMB configuré en 30 secondes</p>
                  <div style={{ fontSize: 11, background: '#4285F4', color: '#fff', padding: '5px 12px', borderRadius: 99, fontWeight: 600, whiteSpace: 'nowrap' }}>
                    Activer →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-off-white)', padding: '88px 0' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <p style={{
            textAlign: 'center', fontSize: 'var(--font-size-xs)', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.1em',
            color: 'var(--color-blue-france)', marginBottom: 12,
          }}>
            Comment ça marche
          </p>
          <h2 style={{
            textAlign: 'center', fontSize: 'var(--font-size-xl)', fontWeight: 700,
            color: 'var(--color-text-primary)', marginBottom: 56, lineHeight: 1.2,
          }}>
            Opérationnel en 24h
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 720, margin: '0 auto' }}>
            {steps.map(({ num, icon: Icon, title, desc, accent }, i) => (
              <div key={num} className="step-card" style={{
                background: '#fff',
                border: 'var(--border-default)',
                borderRadius: 'var(--radius-xl)',
                padding: '24px 28px',
                display: 'flex', alignItems: 'flex-start', gap: 20,
                borderLeft: `4px solid ${accent}`,
                boxShadow: 'var(--shadow-card)',
                transition: 'transform 220ms ease, box-shadow 220ms ease',
                cursor: 'default',
                position: 'relative',
              }}>
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flexShrink: 0,
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 'var(--radius-lg)',
                    background: accent + '18',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={20} color={accent} />
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{ width: 2, height: 16, background: `${accent}30`, borderRadius: 1 }} />
                  )}
                </div>
                <div style={{ flex: 1, paddingTop: 4 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                    <span style={{
                      fontSize: 10, fontWeight: 800, letterSpacing: '0.12em',
                      color: accent, opacity: 0.7,
                    }}>
                      ÉTAPE {num}
                    </span>
                  </div>
                  <p style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 6 }}>{title}</p>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARIFS ───────────────────────────────────────────────────── */}
      <section id="tarifs" style={{ background: '#fff', padding: '88px 0' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <p style={{
            textAlign: 'center', fontSize: 'var(--font-size-xs)', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.1em',
            color: 'var(--color-red-france)', marginBottom: 12,
          }}>
            Tarifs
          </p>
          <h2 style={{
            textAlign: 'center', fontSize: 'var(--font-size-xl)', fontWeight: 700,
            color: 'var(--color-text-primary)', marginBottom: 8, lineHeight: 1.2,
          }}>
            Simple, transparent, sans surprise
          </h2>
          <p style={{
            textAlign: 'center', fontSize: 'var(--font-size-base)',
            color: 'var(--color-text-secondary)', marginBottom: 56,
          }}>
            Abonnement annuel. Activation sous 24h. Facturation sur devis.
          </p>

          <div className="tiers-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, maxWidth: 960, margin: '0 auto' }}>
            {tiers.map((tier) => (
              <div key={tier.id} className="tier-card" style={{
                borderRadius: 'var(--radius-xl)',
                border: tier.highlight ? '2px solid var(--color-blue-france)' : 'var(--border-default)',
                background: tier.highlight ? 'linear-gradient(180deg, #EEF2FF 0%, #fff 40%)' : 'var(--color-surface)',
                padding: '32px 24px',
                boxShadow: tier.highlight ? 'var(--shadow-lg)' : 'var(--shadow-card)',
                position: 'relative',
                display: 'flex', flexDirection: 'column',
                transition: 'transform 220ms ease, box-shadow 220ms ease',
                cursor: 'default',
              }}>
                {tier.highlight && (
                  <div style={{
                    position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--gradient-primary)', color: '#fff',
                    padding: '4px 16px', borderRadius: 'var(--radius-pill)',
                    fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap',
                  }}>
                    Le plus populaire
                  </div>
                )}

                <p style={{ fontSize: 18, fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 4 }}>{tier.name}</p>
                <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginBottom: 20, lineHeight: 1.4 }}>{tier.ideal}</p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                  <span style={{ fontSize: 36, fontWeight: 800, color: 'var(--color-text-primary)' }}>{tier.price} €</span>
                  <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>/an</span>
                </div>
                <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-blue-france)', marginBottom: 24 }}>
                  {tier.quota}
                </p>

                <ul style={{ listStyle: 'none', margin: 0, padding: 0, flex: 1, display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                  {tier.features.map((f) => (
                    <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <CheckCircle2 size={15} color="#1D9E75" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:contact@maformationcivique.fr?subject=Partenariat cabinet — offre ${tier.name}`}
                  style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8,
                    padding: '13px 20px', borderRadius: 'var(--radius-pill)',
                    background: tier.highlight ? 'var(--gradient-primary)' : 'transparent',
                    border: tier.highlight ? 'none' : '1.5px solid var(--color-border)',
                    color: tier.highlight ? '#fff' : 'var(--color-text-primary)',
                    fontWeight: 600, fontSize: 'var(--font-size-sm)',
                    textDecoration: 'none', fontFamily: 'var(--font-sans)',
                    transition: 'all 200ms ease',
                  }}
                >
                  {tier.cta} <ArrowRight size={15} />
                </a>
              </div>
            ))}
          </div>

          <div style={{
            maxWidth: 960, margin: '24px auto 0',
            background: 'linear-gradient(135deg, var(--color-blue-france) 0%, #001F8C 100%)',
            borderRadius: 'var(--radius-xl)', padding: '28px 32px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 16, color: '#fff',
          }}>
            <div>
              <p style={{ fontWeight: 800, fontSize: 18, marginBottom: 4, color: '#fff' }}>Réseau / Grandes associations</p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>+150 clients, besoins spécifiques, rapport mensuel personnalisé — sur devis à partir de 3 990 €/an.</p>
            </div>
            <a
              href="mailto:contact@maformationcivique.fr?subject=Partenariat Réseau"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#fff', color: 'var(--color-blue-france)',
                padding: '12px 24px', borderRadius: 'var(--radius-pill)',
                fontWeight: 700, fontSize: 14, textDecoration: 'none', whiteSpace: 'nowrap',
              }}
            >
              Demander un devis <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-off-white)', padding: '80px 0 56px' }}>
        <div className="container" style={{ padding: '0 24px', maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center', fontSize: 'var(--font-size-xl)', fontWeight: 700,
            color: 'var(--color-text-primary)', marginBottom: 48,
          }}>
            Questions fréquentes
          </h2>

          {[
            {
              q: 'Mes clients doivent-ils payer quelque chose ?',
              a: 'Non. Vous payez l\'abonnement cabinet une fois par an, et vos clients accèdent gratuitement à la formation Premium complète via votre invitation. Aucune carte bancaire demandée de leur côté.',
            },
            {
              q: 'L\'attestation est-elle reconnue en préfecture ?',
              a: 'L\'attestation maformationcivique.fr est un document de suivi interne, utile pour montrer la démarche de préparation. Elle n\'est pas délivrée par un organisme d\'État, mais constitue un justificatif sérieux et crédible dans un dossier.',
            },
            {
              q: 'Combien de temps pour activer mon espace cabinet ?',
              a: 'Sous 24h ouvrées après réception de votre paiement (virement ou chèque). Vous recevrez un email avec vos identifiants d\'accès.',
            },
            {
              q: 'Puis-je changer de palier en cours d\'année ?',
              a: 'Oui, en nous contactant par email. Le passage à un palier supérieur est proratisé sur la durée restante.',
            },
            {
              q: 'Comment fonctionne la fonctionnalité Google My Business ?',
              a: 'Une fois votre lien GMB configuré, la plateforme envoie automatiquement jusqu\'à 3 emails à votre client : à 50 %, 80 % et 100 % de formation. Dès qu\'un avis est posté, la séquence s\'arrête — votre client ne reçoit plus de rappel. Chaque email inclut un lien de désinscription, conformément à nos CGU.',
            },
            {
              q: 'Les contenus sont-ils à jour avec la réforme 2024 ?',
              a: 'Oui. Nos modules sont mis à jour régulièrement pour refléter les évolutions institutionnelles et les questions posées aux entretiens de naturalisation.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="faq-item" style={{
              background: '#fff',
              border: 'var(--border-default)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px 24px',
              marginBottom: 10,
              transition: 'border-color 200ms ease, box-shadow 200ms ease',
              cursor: 'default',
            }}>
              <p style={{ fontWeight: 600, fontSize: 15, color: 'var(--color-text-primary)', marginBottom: 8 }}>{q}</p>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── APERÇU ESPACE CABINET — CTA MAJEUR ──────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A5E 0%, #002395 55%, #003080 100%)',
        padding: '80px 0 88px',
      }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <div style={{
            display: 'grid',
            gap: 64,
            alignItems: 'center',
            maxWidth: 1080,
            margin: '0 auto',
          }}
          className="apercu-cta-grid"
          >

            {/* ── Colonne gauche : pitch ── */}
            <div className="apercu-cta-pitch">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.12)', borderRadius: 100, padding: '6px 16px', marginBottom: 28 }}>
                <Building2 size={14} color="rgba(255,255,255,0.9)" />
                <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Essayer maintenant — gratuit
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.02em' }}>
                Voyez votre espace cabinet<br />
                <span style={{ color: '#7BA7FF' }}>en 10 secondes.</span>
              </h2>

              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, marginBottom: 36, maxWidth: 420 }}>
                Entrez l&apos;URL de votre cabinet. En quelques secondes, votre espace est personnalisé à vos couleurs et prêt à partager avec vos clients.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { Icon: Sparkles, text: 'Logo et couleurs extraits automatiquement' },
                  { Icon: Link2,    text: 'Lien personnalisé partageable en 1 clic' },
                  { Icon: Eye,      text: 'Vos clients voient leur progression en temps réel' },
                ].map(({ Icon, text }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(255,255,255,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={16} color="rgba(255,255,255,0.9)" />
                    </div>
                    <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.80)', lineHeight: 1.45 }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Colonne droite : widget ── */}
            <div style={{
              background: '#fff',
              borderRadius: 24,
              padding: '36px 32px 32px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.28)',
            }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 16 }}>
                Votre URL de cabinet
              </p>

              <ApercuWidget />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────── */}
      <section style={{
        background: `linear-gradient(135deg, rgba(0,49,137,0.92) 0%, rgba(0,31,140,0.96) 100%), url('/images/modules/hemicycle-parlement-europeen.jpg') center/cover no-repeat`,
        padding: '72px 0 80px',
        textAlign: 'center',
      }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 800, marginBottom: 16, lineHeight: 1.2, color: '#fff' }}>
            Prêt à proposer la formation civique<br />à vos clients ?
          </h2>
          <p style={{ fontSize: 'var(--font-size-base)', color: 'rgba(255,255,255,0.82)', marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>
            Écrivez-nous pour activer votre espace cabinet sous 24h.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <a
              href="mailto:contact@maformationcivique.fr?subject=Partenariat cabinet"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#fff', color: 'var(--color-blue-france)',
                padding: '14px 32px', borderRadius: 'var(--radius-pill)',
                fontWeight: 700, fontSize: 'var(--font-size-base)',
                textDecoration: 'none', fontFamily: 'var(--font-sans)',
              }}
            >
              contact@maformationcivique.fr <ArrowRight size={16} />
            </a>
            <Link
              href="/connexion"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'transparent',
                border: '1.5px solid rgba(255,255,255,0.5)',
                color: '#fff',
                padding: '14px 28px', borderRadius: 'var(--radius-pill)',
                fontWeight: 600, fontSize: 'var(--font-size-base)',
                textDecoration: 'none', fontFamily: 'var(--font-sans)',
              }}
            >
              J&apos;ai déjà un compte →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
