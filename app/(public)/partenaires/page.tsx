import Link from 'next/link';
import {
  Building2, Users, FileDown, BarChart3, CheckCircle2,
  ArrowRight, ShieldCheck, Clock, Star, Briefcase,
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
      'Accès prioritaire au support',
      'Facturation annuelle simplifiée',
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
    title: '3 à 6 mois',
    desc: 'C\'est le délai moyen entre la préparation et l\'entretien de naturalisation — vos clients ont besoin d\'un outil structuré.',
  },
  {
    icon: ShieldCheck,
    title: 'Conforme OFPRA',
    desc: 'Nos contenus couvrent exactement le programme officiel : histoire, institutions, valeurs de la République.',
  },
  {
    icon: Star,
    title: '4,8 / 5',
    desc: 'Note moyenne de nos apprenants. Vos clients vont apprécier, et c\'est votre cabinet qui sera associé à leur réussite.',
  },
];

const steps = [
  { num: '01', title: 'Vous créez votre espace', desc: 'On configure votre compte cabinet sous 24h après réception de votre paiement.' },
  { num: '02', title: 'Vous invitez vos clients', desc: 'Un simple email depuis le dashboard — votre client s\'inscrit et accède immédiatement à la formation Premium.' },
  { num: '03', title: 'Vous suivez leur progression', desc: 'Modules complétés, quiz réussis, % de progression global — tout en un coup d\'œil.' },
  { num: '04', title: 'Vous téléchargez l\'attestation', desc: 'Un PDF horodaté à joindre au dossier préfecture quand votre client a terminé sa formation.' },
];

export default function PartenairesPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-blue-france) 0%, #001F8C 100%)',
        color: '#fff',
        padding: '80px 0 96px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Décor géométrique */}
        <div aria-hidden style={{
          position: 'absolute', top: -80, right: -80,
          width: 400, height: 400,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)',
          pointerEvents: 'none',
        }} />
        <div aria-hidden style={{
          position: 'absolute', bottom: -120, left: -60,
          width: 300, height: 300,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.03)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ padding: '0 24px', position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 'var(--radius-pill)',
            padding: '6px 14px',
            fontSize: 'var(--font-size-xs)',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}>
            <Briefcase size={13} />
            Espace partenaires — Cabinets d&apos;avocats
          </div>

          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 52px)',
            fontWeight: 800,
            lineHeight: 1.15,
            maxWidth: 700,
            marginBottom: 24,
          }}>
            Vos clients obtiennent leur<br />
            <span style={{ color: '#BFCFFF' }}>naturalisation.</span>
            <br />Vous en êtes acteur.
          </h1>

          <p style={{
            fontSize: 'var(--font-size-base)',
            lineHeight: 1.7,
            opacity: 0.82,
            maxWidth: 520,
            marginBottom: 40,
          }}>
            Invitez vos clients étrangers à se former sur maformationcivique.fr,
            suivez leur avancement depuis votre dashboard cabinet,
            et téléchargez leur attestation en un clic pour le dossier préfecture.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a
              href="#tarifs"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#fff', color: 'var(--color-blue-france)',
                padding: '14px 28px', borderRadius: 'var(--radius-pill)',
                fontWeight: 700, fontSize: 'var(--font-size-base)',
                textDecoration: 'none', fontFamily: 'var(--font-sans)',
              }}
            >
              Voir les tarifs <ArrowRight size={16} />
            </a>
            <a
              href="mailto:contact@maformationcivique.fr?subject=Partenariat cabinet"
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
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* ── PROOF POINTS ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-off-white)', padding: '56px 0' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <div className="proof-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
            {proofPoints.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{
                background: 'var(--color-surface)',
                border: 'var(--border-default)',
                borderRadius: 'var(--radius-xl)',
                padding: '28px 24px',
                boxShadow: 'var(--shadow-card)',
              }}>
                <div style={{
                  width: 44, height: 44,
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--color-blue-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <Icon size={20} color="var(--color-blue-france)" />
                </div>
                <p style={{ fontSize: 22, fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 8 }}>{title}</p>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DASHBOARD PREVIEW ────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <div className="dash-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            {/* Texte */}
            <div>
              <p style={{
                fontSize: 'var(--font-size-xs)', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.08em',
                color: 'var(--color-red-france)', marginBottom: 10,
              }}>
                Votre tableau de bord
              </p>
              <h2 style={{
                fontSize: 'var(--font-size-xl)', fontWeight: 700,
                color: 'var(--color-text-primary)', marginBottom: 16, lineHeight: 1.2,
              }}>
                Tout ce qu&apos;il vous faut,<br />
                <span style={{ color: 'var(--color-blue-france)' }}>sans complexité.</span>
              </h2>
              <p style={{
                fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)',
                lineHeight: 1.7, marginBottom: 32,
              }}>
                Depuis votre espace cabinet, invitez un client en 10 secondes,
                consultez sa progression module par module, et générez son attestation
                de formation quand il est prêt pour son entretien.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { icon: Users, text: 'Invitez un client par email — accès Premium immédiat, sans carte bancaire côté client' },
                  { icon: BarChart3, text: 'Progression individuelle en temps réel : modules, quiz, examens blancs' },
                  { icon: FileDown, text: 'Attestation PDF horodatée, prête pour le dossier OFII / naturalisation' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 36, height: 36, flexShrink: 0,
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--color-blue-light)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={16} color="var(--color-blue-france)" />
                    </div>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6, paddingTop: 8 }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mockup dashboard */}
            <div style={{
              background: 'var(--color-off-white)',
              border: 'var(--border-default)',
              borderRadius: 'var(--radius-xl)',
              padding: 24,
              boxShadow: 'var(--shadow-lg)',
            }}>
              {/* Header mock */}
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

              {/* Clients mock */}
              {[
                { name: 'Amira K.', email: 'amira.k@email.com', pct: 78 },
                { name: 'Youssef M.', email: 'youssef.m@email.com', pct: 45 },
                { name: 'Elena P.', email: 'elena.p@email.com', pct: 100 },
              ].map(({ name, email, pct }) => (
                <div key={name} style={{
                  background: '#fff',
                  border: 'var(--border-default)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px 14px',
                  marginBottom: 8,
                  display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  <div style={{
                    width: 32, height: 32, flexShrink: 0,
                    borderRadius: '50%',
                    background: 'var(--gradient-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, fontWeight: 700, color: '#fff',
                  }}>
                    {name[0]}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontWeight: 600, fontSize: 13, color: 'var(--color-text-primary)', marginBottom: 4 }}>{name}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ flex: 1, height: 5, borderRadius: 99, background: 'var(--color-border)', overflow: 'hidden' }}>
                        <div style={{
                          height: '100%', width: `${pct}%`,
                          background: pct === 100 ? '#1D9E75' : 'var(--gradient-primary)',
                          borderRadius: 99,
                        }} />
                      </div>
                      <span style={{ fontSize: 11, fontWeight: 600, color: pct === 100 ? '#1D9E75' : 'var(--color-text-muted)', flexShrink: 0 }}>{pct}%</span>
                    </div>
                  </div>
                  {pct === 100 && (
                    <span style={{
                      fontSize: 11, fontWeight: 600,
                      color: '#1D9E75', background: '#ECFDF5',
                      padding: '3px 9px', borderRadius: 'var(--radius-pill)',
                    }}>
                      Attestation ✓
                    </span>
                  )}
                </div>
              ))}

              <button style={{
                width: '100%', marginTop: 4,
                padding: '10px', borderRadius: 'var(--radius-pill)',
                background: 'var(--gradient-primary)',
                border: 'none', color: '#fff',
                fontSize: 13, fontWeight: 600, cursor: 'default',
              }}>
                + Inviter un client
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-off-white)', padding: '80px 0' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <p style={{
            textAlign: 'center',
            fontSize: 'var(--font-size-xs)', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.08em',
            color: 'var(--color-blue-france)', marginBottom: 12,
          }}>
            Comment ça marche
          </p>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'var(--font-size-xl)', fontWeight: 700,
            color: 'var(--color-text-primary)', marginBottom: 48, lineHeight: 1.2,
          }}>
            Opérationnel en 24h
          </h2>

          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
            {steps.map(({ num, title, desc }) => (
              <div key={num} style={{
                background: '#fff',
                border: 'var(--border-default)',
                borderRadius: 'var(--radius-xl)',
                padding: '24px 20px',
                boxShadow: 'var(--shadow-card)',
                position: 'relative',
              }}>
                <div style={{
                  fontSize: 11, fontWeight: 800, letterSpacing: '0.1em',
                  color: 'var(--color-blue-france)', opacity: 0.4,
                  marginBottom: 12,
                }}>
                  ÉTAPE {num}
                </div>
                <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 8 }}>{title}</p>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARIFS ───────────────────────────────────────────────────── */}
      <section id="tarifs" style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <p style={{
            textAlign: 'center',
            fontSize: 'var(--font-size-xs)', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.08em',
            color: 'var(--color-red-france)', marginBottom: 12,
          }}>
            Tarifs
          </p>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'var(--font-size-xl)', fontWeight: 700,
            color: 'var(--color-text-primary)', marginBottom: 8, lineHeight: 1.2,
          }}>
            Simple, transparent, sans surprise
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)',
            marginBottom: 48,
          }}>
            Abonnement annuel. Activation manuelle sous 24h. Facturation sur devis.
          </p>

          <div className="tiers-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, maxWidth: 960, margin: '0 auto' }}>
            {tiers.map((tier) => (
              <div key={tier.id} style={{
                borderRadius: 'var(--radius-xl)',
                border: tier.highlight ? '2px solid var(--color-blue-france)' : 'var(--border-default)',
                background: tier.highlight ? 'linear-gradient(180deg, #EEF2FF 0%, #fff 40%)' : 'var(--color-surface)',
                padding: '32px 24px',
                boxShadow: tier.highlight ? 'var(--shadow-lg)' : 'var(--shadow-card)',
                position: 'relative',
                display: 'flex', flexDirection: 'column',
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
                <p style={{
                  fontSize: 13, fontWeight: 600,
                  color: 'var(--color-blue-france)',
                  marginBottom: 24,
                }}>
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
                  href="mailto:contact@maformationcivique.fr?subject=Partenariat cabinet — offre {tier.name}"
                  style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8,
                    padding: '13px 20px', borderRadius: 'var(--radius-pill)',
                    background: tier.highlight ? 'var(--gradient-primary)' : 'transparent',
                    border: tier.highlight ? 'none' : '1.5px solid var(--color-border)',
                    color: tier.highlight ? '#fff' : 'var(--color-text-primary)',
                    fontWeight: 600, fontSize: 'var(--font-size-sm)',
                    textDecoration: 'none', fontFamily: 'var(--font-sans)',
                    transition: 'all 200ms',
                  }}
                >
                  {tier.cta} <ArrowRight size={15} />
                </a>
              </div>
            ))}
          </div>

          {/* Réseau / devis */}
          <div style={{
            maxWidth: 960, margin: '24px auto 0',
            background: 'linear-gradient(135deg, var(--color-blue-france) 0%, #001F8C 100%)',
            borderRadius: 'var(--radius-xl)', padding: '28px 32px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 16, color: '#fff',
          }}>
            <div>
              <p style={{ fontWeight: 800, fontSize: 18, marginBottom: 4 }}>Réseau / Grandes associations</p>
              <p style={{ fontSize: 14, opacity: 0.8 }}>+150 clients, besoins spécifiques, rapport mensuel personnalisé — sur devis à partir de 3 990 €/an.</p>
            </div>
            <a
              href="mailto:contact@maformationcivique.fr?subject=Partenariat Réseau"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#fff', color: 'var(--color-blue-france)',
                padding: '12px 24px', borderRadius: 'var(--radius-pill)',
                fontWeight: 700, fontSize: 14, textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Demander un devis <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-off-white)', padding: '80px 0' }}>
        <div className="container" style={{ padding: '0 24px', maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'var(--font-size-xl)', fontWeight: 700,
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
              q: 'Les contenus sont-ils à jour avec la réforme 2024 ?',
              a: 'Oui. Nos modules sont mis à jour régulièrement pour refléter les évolutions institutionnelles et les questions posées aux entretiens de naturalisation.',
            },
          ].map(({ q, a }) => (
            <div key={q} style={{
              background: '#fff',
              border: 'var(--border-default)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px 24px',
              marginBottom: 12,
            }}>
              <p style={{ fontWeight: 600, fontSize: 15, color: 'var(--color-text-primary)', marginBottom: 8 }}>{q}</p>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-blue-france) 0%, #001F8C 100%)',
        padding: '80px 0',
        textAlign: 'center',
        color: '#fff',
      }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
            Prêt à proposer la formation civique<br />à vos clients ?
          </h2>
          <p style={{ fontSize: 'var(--font-size-base)', opacity: 0.8, marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>
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
        .steps-grid { grid-template-columns: repeat(4,1fr); }
        .tiers-grid { grid-template-columns: repeat(3,1fr); }
        @media (max-width: 900px) {
          .proof-grid { grid-template-columns: 1fr !important; }
          .dash-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: repeat(2,1fr) !important; }
          .tiers-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
