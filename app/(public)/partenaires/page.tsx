import Link from 'next/link';
import Image from 'next/image';
import {
  Building2, Users, FileDown, BarChart3, CheckCircle2,
  ArrowRight, ShieldCheck, Clock, Star, Briefcase, MessageSquarePlus,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Espace partenaires — Cabinets d\'avocats | maformationcivique.fr',
  description: 'Offrez la formation civique à vos clients étrangers. Tableau de bord dédié, suivi de progression, attestations PDF — à partir de 390 €/an.',
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
    desc: 'Dès 80 % de formation, un email automatique invite votre client à laisser un avis sur votre page Google My Business — configurez votre lien en 30 secondes depuis votre espace.',
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

        <div className="container" style={{ padding: '0 24px', position: 'relative', zIndex: 1 }}>
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

          <h1 style={{
            fontSize: 'clamp(30px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.12,
            maxWidth: 680,
            marginBottom: 24,
            color: '#fff',
            textShadow: '0 2px 20px rgba(0,0,0,0.25)',
          }}>
            Vos clients obtiennent leur<br />
            <span style={{ color: '#BFCFFF' }}>naturalisation.</span>
            <br />Vous en êtes acteur.
          </h1>

          <p style={{
            fontSize: 'var(--font-size-base)',
            lineHeight: 1.75,
            color: 'rgba(255,255,255,0.88)',
            maxWidth: 500,
            marginBottom: 44,
          }}>
            Invitez vos clients étrangers à se former sur maformationcivique.fr,
            suivez leur avancement module par module, et téléchargez leur attestation
            en un clic pour le dossier préfecture.
          </p>

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
      </section>

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
                  { icon: MessageSquarePlus, label: 'Avis Google', text: 'Avis Google My Business automatiques après 80% de formation — boost votre réputation en ligne' },
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
              a: 'Une fois votre lien GMB configuré dans votre espace cabinet, vos clients reçoivent automatiquement un email les invitant à laisser un avis sur votre page Google dès qu\'ils atteignent 80 % de formation. L\'email est envoyé une seule fois et inclut un lien de désinscription, conformément à nos CGU.',
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

      <style>{`
        .proof-grid { grid-template-columns: repeat(3,1fr); }
        .dash-grid { grid-template-columns: 1fr 1fr; }
        .tiers-grid { grid-template-columns: repeat(3,1fr); }

        .proof-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.10) !important;
        }
        .step-card:hover {
          transform: translateX(4px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.09) !important;
        }
        .tier-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.12) !important;
        }
        .faq-item:hover {
          border-color: var(--color-blue-france) !important;
          box-shadow: 0 4px 20px rgba(0,35,149,0.08) !important;
        }

        @media (max-width: 900px) {
          .proof-grid { grid-template-columns: 1fr !important; }
          .dash-grid { grid-template-columns: 1fr !important; }
          .tiers-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
