import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, Sparkles, BookOpen, MapPin, User, Lightbulb, GraduationCap } from 'lucide-react';
import { fiches, getFiche, type Fiche } from '@/data/fiches';
import { getEnrichissement } from '@/data/fiches-enrichissement';
import { modules } from '@/data/modules';
import { renderInline } from '@/lib/markdown';

const SITE = 'https://www.maformationcivique.fr';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return fiches.map((f) => ({ slug: f.slug }));
}

/* ── Helpers dérivés des données existantes (pas de champ à ajouter) ──────── */

/** Le subtitle a toujours la forme "contexte · précision" (ex. "1867–1934 · Physicienne"). */
function splitSubtitle(fiche: Fiche): { left: string; right: string } {
  const [left = '', right = ''] = fiche.subtitle.split('·').map((s) => s.trim());
  return { left, right };
}

/**
 * Qualificatif du H1 : le rôle pour une figure, le type + lieu pour un monument.
 * Ex. "Marie Curie — Physicienne et chimiste", "La Tour Eiffel — Monument, Paris".
 */
function qualifier(fiche: Fiche): string {
  const { left, right } = splitSubtitle(fiche);
  return fiche.category === 'figure' ? (right || fiche.tag) : `${fiche.tag}, ${left}`;
}

/** Texte brut du paragraphe, sans le markdown gras. */
function plainParagraph(fiche: Fiche): string {
  return fiche.paragraph.replace(/\*\*/g, '').replace(/\*/g, '');
}

/** Coupe proprement sur un mot entier, sans dépasser max caractères. */
function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:]$/, '') + '…';
}

/** Fiches liées : même tag en priorité, complété par la même catégorie. */
function relatedFiches(fiche: Fiche, limit = 4): Fiche[] {
  const sameTag = fiches.filter((f) => f.slug !== fiche.slug && f.tag === fiche.tag);
  const sameCat = fiches.filter(
    (f) => f.slug !== fiche.slug && f.category === fiche.category && f.tag !== fiche.tag,
  );
  return [...sameTag, ...sameCat].slice(0, limit);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fiche = getFiche(slug);
  if (!fiche) return {};

  const canonical = `${SITE}/fiches/${slug}`;
  // Titre absolu : le layout racine ajoute sinon un second « | maformationcivique.fr »
  const full = `${fiche.name} — ${qualifier(fiche)}`;
  const title = full.length <= 60 ? full : `${fiche.name} — Fiche examen civique`;
  const description = truncate(
    `${plainParagraph(fiche)}`,
    108,
  ) + " Fiche de révision pour l'examen civique.";

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      title: full,
      description,
      url: canonical,
      type: 'article',
      locale: 'fr_FR',
      images: fiche.image ? [{ url: `${SITE}${fiche.image}`, alt: fiche.imageAlt }] : undefined,
    },
  };
}

export default async function FichePage({ params }: Props) {
  const { slug } = await params;
  const fiche = getFiche(slug);
  if (!fiche) notFound();

  const idx = fiches.findIndex((f) => f.slug === slug);
  const prev = fiches[(idx - 1 + fiches.length) % fiches.length];
  const next = fiches[(idx + 1) % fiches.length];
  const related = relatedFiches(fiche);
  const { left: contextLeft } = splitSubtitle(fiche);
  const isFigure = fiche.category === 'figure';
  const h1Qualifier = qualifier(fiche);
  const canonical = `${SITE}/fiches/${slug}`;

  const figuresList = fiches.filter((f) => f.category === 'figure');
  const lieuxList = fiches.filter((f) => f.category === 'lieu');

  /* ── Rattachement au programme civique (module / leçon complétés) ────── */
  const enrichissement = getEnrichissement(slug);
  const linkedModule = enrichissement
    ? modules.find((m) => m.slug === enrichissement.moduleSlug)
    : undefined;
  const linkedLesson = enrichissement?.lessonSlug && linkedModule
    ? linkedModule.lessons.find((l) => l.slug === enrichissement.lessonSlug)
    : undefined;

  /* ── JSON-LD : fil d'Ariane (affiché dans les SERP) + définition d'entité ── */
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Fiches bonus', item: `${SITE}/fiches` },
      { '@type': 'ListItem', position: 3, name: fiche.name, item: canonical },
    ],
  };

  const definedTermLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: fiche.name,
    description: truncate(plainParagraph(fiche), 300),
    url: canonical,
    inLanguage: 'fr-FR',
    image: fiche.image ? `${SITE}${fiche.image}` : undefined,
    termCode: fiche.slug,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: "Fiches bonus — figures et lieux de l'histoire de France",
      url: `${SITE}/fiches`,
    },
    about: isFigure
      ? { '@type': 'Person', name: fiche.name, description: fiche.subtitle }
      : { '@type': 'Place', name: fiche.name, description: fiche.subtitle },
  };

  return (
    <div style={{ minHeight: '80vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermLd) }} />

      {/* ── Hero — image en filigrane (soft-light) ─────────────────────── */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${fiche.color} 0%, ${fiche.colorEnd} 100%)`,
        padding: '40px 0',
      }}>
        {fiche.image && (
          <Image
            src={fiche.image}
            alt={fiche.imageAlt}
            fill
            sizes="100vw"
            priority
            style={{
              objectFit: 'cover',
              objectPosition: fiche.heroImagePosition ?? 'center 25%',
              transform: fiche.heroImageScale ? `scale(${fiche.heroImageScale})` : undefined,
              mixBlendMode: 'soft-light',
              opacity: 0.9,
            }}
          />
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '20px 24px 16px' }}>
          {/* Fil d'Ariane */}
          <nav aria-label="Fil d'Ariane" style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 18 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Accueil</Link>
            <span style={{ margin: '0 6px' }}>›</span>
            <Link href="/fiches" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Fiches bonus</Link>
            <span style={{ margin: '0 6px' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.95)' }}>{fiche.name}</span>
          </nav>

          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '4px 12px', borderRadius: '100px',
            background: 'rgba(255,255,255,0.18)', color: '#fff',
            fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em',
            textTransform: 'uppercase', marginBottom: '14px',
            backdropFilter: 'blur(4px)',
          }}>
            <Sparkles size={12} /> {fiche.tag}
          </span>

          <h1 style={{
            fontSize: 'clamp(26px, 5vw, 46px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '8px',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            maxWidth: '760px',
          }}>
            {fiche.name} <span style={{ fontWeight: 400, opacity: 0.92 }}>— {h1Qualifier}</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', maxWidth: '520px' }}>
            {fiche.subtitle}
          </p>
        </div>
      </div>

      {/* ── Corps : sommaire latéral + contenu ─────────────────────────── */}
      <div className="container" style={{ padding: '36px 24px 64px' }}>
        <div className="fiche-layout">

          {/* Contenu principal (placé en premier dans le DOM pour le SEO) */}
          <main className="fiche-main">

            {/* Repères clés */}
            <h2 className="fiche-h2">Repères clés</h2>
            <div className="fiche-facts" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '12px',
              marginBottom: '32px',
            }}>
              {fiche.facts.map((fact, i) => (
                <div key={i} style={{
                  background: '#fff',
                  borderRadius: 'var(--radius-lg)',
                  border: 'var(--border-default)',
                  boxShadow: 'var(--shadow-card)',
                  padding: '14px 16px',
                  borderTop: `3px solid ${i % 2 === 0 ? fiche.color : fiche.colorEnd}`,
                }}>
                  <div style={{
                    fontSize: 'var(--font-size-xs)', fontWeight: 700,
                    color: 'var(--color-text-muted)', textTransform: 'uppercase',
                    letterSpacing: '0.05em', marginBottom: '4px',
                  }}>
                    {fact.label}
                  </div>
                  <div style={{
                    fontSize: 'var(--font-size-sm)', fontWeight: 600,
                    color: 'var(--color-text-primary)', lineHeight: 1.4,
                  }}>
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Définition / présentation */}
            <h2 className="fiche-h2">
              {isFigure ? `Qui était ${fiche.name} ?` : `${fiche.name} : l'essentiel`}
            </h2>
            <div style={{
              background: '#fff',
              borderRadius: 'var(--radius-xl)',
              border: 'var(--border-default)',
              boxShadow: 'var(--shadow-card)',
              padding: '28px',
              marginBottom: '28px',
            }}>
              <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
                {renderInline(fiche.paragraph, fiche.color, 'fiche-p')}
              </p>
              <p style={{ marginTop: '20px', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                📷 {fiche.credit}
              </p>
            </div>

            {/* À retenir */}
            <h2 className="fiche-h2">À retenir pour l&apos;examen</h2>
            <div style={{
              background: '#fff',
              borderRadius: 'var(--radius-xl)',
              border: 'var(--border-default)',
              boxShadow: 'var(--shadow-card)',
              padding: '24px 26px',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {fiche.keyPoints.map((kp, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{
                      flexShrink: 0, width: 24, height: 24, borderRadius: '50%',
                      background: `linear-gradient(135deg, ${fiche.color}, ${fiche.colorEnd})`,
                      color: '#fff', fontSize: '12px', fontWeight: 700,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {i + 1}
                    </span>
                    <p style={{ fontSize: 'var(--font-size-sm)', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                      {kp}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Le saviez-vous ? */}
            {enrichissement && (
              <>
                <h2 className="fiche-h2">Le saviez-vous ?</h2>
                <div style={{
                  background: '#FFFBEB',
                  border: '1px solid #FDE68A',
                  borderRadius: 'var(--radius-xl)',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                }}>
                  <Lightbulb size={20} color="#B45309" style={{ flexShrink: 0, marginTop: 2 }} />
                  <p style={{ fontSize: 'var(--font-size-sm)', lineHeight: 1.7, color: '#78350F', margin: 0 }}>
                    {enrichissement.didYouKnow}
                  </p>
                </div>
              </>
            )}

            {/* Rattachement au programme — relie /fiches à /modulesciviques */}
            {linkedModule && (
              <>
                <h2 className="fiche-h2" style={{ marginTop: 32 }}>Dans le programme civique</h2>
                <Link
                  href={linkedLesson ? `/lecon/${linkedLesson.slug}` : `/module/${linkedModule.slug}`}
                  className="fiche-program"
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                      background: `linear-gradient(135deg, ${fiche.color}, ${fiche.colorEnd})`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <GraduationCap size={20} color="#fff" />
                    </div>
                    <div>
                      <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginBottom: 3 }}>
                        Cette fiche complète {linkedLesson ? 'la leçon' : 'le module'}
                      </p>
                      <p style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.35 }}>
                        {linkedLesson ? linkedLesson.title : linkedModule.title}
                        {linkedLesson && !linkedLesson.free && (
                          <span style={{
                            marginLeft: 8, verticalAlign: 'middle',
                            fontSize: 10, fontWeight: 700, letterSpacing: '0.05em',
                            textTransform: 'uppercase', color: '#7C3AED',
                            background: 'rgba(124,58,237,0.1)',
                            border: '0.5px solid rgba(124,58,237,0.28)',
                            borderRadius: 100, padding: '3px 8px',
                          }}>
                            Premium
                          </span>
                        )}
                      </p>
                      {linkedLesson && (
                        <p style={{ fontSize: 12.5, color: 'var(--color-text-muted)', marginTop: 3 }}>
                          Module {linkedModule.num} · {linkedModule.title}
                        </p>
                      )}
                    </div>
                  </div>
                  <ArrowRight size={18} color="var(--color-blue-france)" style={{ flexShrink: 0 }} />
                </Link>
              </>
            )}

            {/* Retour à l'index — juste sous « À retenir » */}
            <Link href="/fiches" className="fiche-back">
              <ArrowLeft size={15} /> Retour à l&apos;index des fiches bonus
            </Link>

            {/* Fiches liées */}
            {related.length > 0 && (
              <>
                <h2 className="fiche-h2">Fiches liées</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 32 }}>
                  {related.map((r) => (
                    <Link key={r.slug} href={`/fiches/${r.slug}`} className="fiche-chip">
                      {r.name}
                    </Link>
                  ))}
                </div>
              </>
            )}

            {/* Navigation séquentielle */}
            <div className="fiche-nav">
              <Link href={`/fiches/${prev.slug}`} className="fiche-nav-card">
                <p className="fiche-nav-label"><ArrowLeft size={12} /> Fiche précédente</p>
                <p className="fiche-nav-name">{prev.name}</p>
              </Link>
              <Link href={`/fiches/${next.slug}`} className="fiche-nav-card fiche-nav-next">
                <p className="fiche-nav-label">Fiche suivante <ArrowRight size={12} /></p>
                <p className="fiche-nav-name">{next.name}</p>
              </Link>
            </div>

            {/* CTA examen blanc */}
            <div style={{
              marginTop: 28, borderRadius: 'var(--radius-xl)', padding: '24px 26px',
              background: `linear-gradient(135deg, ${fiche.color} 0%, ${fiche.colorEnd} 100%)`,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: 16, flexWrap: 'wrap',
            }}>
              <div>
                <p style={{ fontSize: 16.5, fontWeight: 800, color: '#fff', marginBottom: 4 }}>
                  Prêt à tester vos connaissances ?
                </p>
                <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.82)' }}>
                  40 questions en conditions réelles, correction immédiate — gratuit.
                </p>
              </div>
              <Link href="/examen" style={{
                background: '#fff', color: fiche.color, padding: '11px 22px',
                borderRadius: 'var(--radius-pill)', fontSize: 14, fontWeight: 700,
                textDecoration: 'none', whiteSpace: 'nowrap',
              }}>
                Faire un examen blanc →
              </Link>
            </div>
          </main>

          {/* Sommaire latéral — maillage interne vers toutes les fiches */}
          <aside className="fiche-side" aria-label="Toutes les fiches bonus">
            <div className="fiche-side-inner">
              <Link href="/fiches" className="fiche-side-home">
                <BookOpen size={15} /> Toutes les fiches
              </Link>

              <p className="fiche-side-title"><User size={12} /> Figures</p>
              <ul className="fiche-side-list">
                {figuresList.map((f) => (
                  <li key={f.slug}>
                    <Link
                      href={`/fiches/${f.slug}`}
                      className={f.slug === fiche.slug ? 'fiche-side-link fiche-side-active' : 'fiche-side-link'}
                      aria-current={f.slug === fiche.slug ? 'page' : undefined}
                    >
                      {f.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="fiche-side-title"><MapPin size={12} /> Lieux</p>
              <ul className="fiche-side-list">
                {lieuxList.map((f) => (
                  <li key={f.slug}>
                    <Link
                      href={`/fiches/${f.slug}`}
                      className={f.slug === fiche.slug ? 'fiche-side-link fiche-side-active' : 'fiche-side-link'}
                      aria-current={f.slug === fiche.slug ? 'page' : undefined}
                    >
                      {f.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="fiche-side-sep" />
              <Link href="/modulesciviques" className="fiche-side-extra">Modules civiques</Link>
              <Link href="/examen" className="fiche-side-extra">Examens blancs</Link>
              <Link href="/guides/examen-civique" className="fiche-side-extra">Guide de l&apos;examen civique</Link>
            </div>
          </aside>
        </div>

        {/* Contexte, pour la sémantique (non décoratif) */}
        <p style={{ marginTop: 32, fontSize: 12.5, lineHeight: 1.7, color: 'var(--color-text-muted)' }}>
          {isFigure ? 'Figure' : 'Lieu'} du programme de formation civique — {contextLeft}. Ces fiches
          complètent les modules et les examens blancs de maformationcivique.fr.
        </p>
      </div>

      <style>{`
        .fiche-layout {
          display: grid;
          grid-template-columns: 236px 1fr;
          gap: 36px;
          align-items: start;
        }
        .fiche-main { grid-column: 2; grid-row: 1; min-width: 0; }
        .fiche-side { grid-column: 1; grid-row: 1; }
        .fiche-side-inner {
          position: sticky;
          top: 88px;
          background: #fff;
          border: var(--border-default);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-card);
          padding: 18px 16px;
        }
        .fiche-h2 {
          font-size: 13px;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0 0 14px;
        }
        .fiche-program {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 22px;
          border-radius: var(--radius-xl);
          background: #fff;
          border: var(--border-default);
          box-shadow: var(--shadow-card);
          text-decoration: none;
        }
        .fiche-program:hover { border-color: var(--color-border-hover); }
        .fiche-back {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin: 22px 0 32px;
          padding: 10px 18px;
          border-radius: var(--radius-pill);
          border: var(--border-default);
          background: #fff;
          color: var(--color-blue-france);
          font-size: 13.5px;
          font-weight: 600;
          text-decoration: none;
        }
        .fiche-back:hover { background: var(--color-blue-light); }
        .fiche-chip {
          padding: 8px 15px;
          border-radius: var(--radius-pill);
          background: var(--color-off-white);
          border: var(--border-default);
          font-size: 13.5px;
          font-weight: 600;
          color: var(--color-text-secondary);
          text-decoration: none;
        }
        .fiche-chip:hover {
          background: var(--color-blue-light);
          color: var(--color-blue-france);
        }
        .fiche-nav {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .fiche-nav-card {
          padding: 16px 20px;
          border-radius: var(--radius-lg);
          background: var(--color-off-white);
          border: var(--border-default);
          text-decoration: none;
        }
        .fiche-nav-card:hover { border-color: var(--color-border-hover); }
        .fiche-nav-next { text-align: right; }
        .fiche-nav-label {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          color: var(--color-text-muted);
          margin-bottom: 4px;
        }
        .fiche-nav-next .fiche-nav-label { justify-content: flex-end; }
        .fiche-nav-name {
          font-size: 15px;
          font-weight: 600;
          color: var(--color-text-primary);
        }
        .fiche-side-home {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13.5px;
          font-weight: 700;
          color: var(--color-blue-france);
          text-decoration: none;
          margin-bottom: 16px;
        }
        .fiche-side-title {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 10.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: var(--color-text-muted);
          margin: 14px 0 8px;
        }
        .fiche-side-list { list-style: none; padding: 0; margin: 0; }
        .fiche-side-link {
          display: block;
          padding: 6px 10px;
          border-radius: var(--radius-md);
          font-size: 13px;
          color: var(--color-text-secondary);
          text-decoration: none;
        }
        .fiche-side-link:hover { background: var(--color-off-white); }
        .fiche-side-active {
          background: var(--color-blue-light);
          color: var(--color-blue-france);
          font-weight: 700;
        }
        .fiche-side-sep {
          height: 1px;
          background: var(--color-border);
          margin: 16px 0 12px;
        }
        .fiche-side-extra {
          display: block;
          padding: 5px 10px;
          font-size: 12.5px;
          color: var(--color-text-muted);
          text-decoration: none;
        }
        .fiche-side-extra:hover { color: var(--color-blue-france); }

        @media (max-width: 960px) {
          .fiche-layout { grid-template-columns: 1fr; gap: 28px; }
          .fiche-main { grid-column: 1; grid-row: 1; }
          .fiche-side { grid-column: 1; grid-row: 2; }
          .fiche-side-inner { position: static; }
        }
        @media (max-width: 760px) {
          .fiche-facts { grid-template-columns: 1fr 1fr !important; }
          .fiche-nav { grid-template-columns: 1fr; }
          .fiche-nav-next { text-align: left; }
          .fiche-nav-next .fiche-nav-label { justify-content: flex-start; }
        }
        @media (max-width: 480px) {
          .fiche-facts { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
