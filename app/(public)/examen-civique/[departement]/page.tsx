/**
 * Page locale « Examen civique à [Ville-préfecture] et en [Département] ».
 *
 * - Générée statiquement UNIQUEMENT pour les départements publiés et validés
 *   (canPublish) ; tout autre slug → 404 (dynamicParams = false).
 * - Structure imposée : réponse directe → centres → inscription → préfecture
 *   → préparation → FAQ → maillage → mentions de fin.
 * - Aucune valeur réglementaire en dur : tout vient de lib/reglementation.ts,
 *   le détail du format vit dans l'article pilier (lié, jamais réexpliqué).
 * - JSON-LD : BreadcrumbList + Course. PAS de LocalBusiness/Place/FAQPage.
 */

import { notFound } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';
import type { Departement } from '@/data/departements/types';
import {
  departementsPublies,
  getDepartementPublie,
  getLimitrophesPublies,
  derniereVerification,
  centreValide,
  centreProcheValide,
  ofiiValide,
} from '@/data/departements';
import { ARTICLE_PILIER_URL, EXAMEN_CIVIQUE, SITE_URL } from '@/lib/reglementation';
import { HeroDepartement } from '@/components/examen-civique/HeroDepartement';
import { CentresSection } from '@/components/examen-civique/CentresSection';
import { OfiiBlock } from '@/components/examen-civique/OfiiBlock';
import { PiecesPrefectureBlock } from '@/components/examen-civique/PiecesPrefectureBlock';
import { DelaisObservesBlock } from '@/components/examen-civique/DelaisObservesBlock';
import { ConversionBlock } from '@/components/examen-civique/ConversionBlock';
import { FaqLocale } from '@/components/examen-civique/FaqLocale';
import { EligibiliteCTA } from '@/components/eligibilite/EligibiliteCTA';

export const dynamicParams = false;

export function generateStaticParams() {
  return departementsPublies.map((d) => ({ departement: d.slug }));
}

// ── Métadonnées calculées ────────────────────────────────────────────────────

function buildTitle(d: Departement): string {
  const candidates = [
    `Examen civique ${d.nomAvecPreposition} (${d.code}) : centres et inscription`,
    `Examen civique ${d.nomAvecPreposition} (${d.code}) : centres`,
    `Examen civique — ${d.nom} (${d.code})`,
  ];
  return candidates.find((t) => t.length <= 60) ?? candidates[candidates.length - 1];
}

function buildDescription(d: Departement): string {
  const centres = d.centresExamen.filter(centreValide);
  const proches = d.centresProches.filter(centreProcheValide);

  let base: string;
  if (centres.length > 0) {
    base = `Où passer l'examen civique ${d.nomAvecPreposition} : ${centres.length} centre${centres.length > 1 ? 's' : ''} agréé${centres.length > 1 ? 's' : ''} à ${[...new Set(centres.map((c) => c.ville))].join(', ')}, adresses et inscription officielle.`;
  } else if (proches.length > 0) {
    base = `Où passer l'examen civique ${d.nomAvecPreposition} : aucun centre local, le plus proche est à ${proches[0].ville}, adresses et inscription officielle.`;
  } else {
    // Mode OFII : pas de centre partenaire, on renvoie vers le parcours officiel.
    base = `Examen civique ${d.nomAvecPreposition} : centres agréés par l'État, démarche d'inscription officielle et interlocuteur OFII à ${d.prefectureVille}.`;
  }

  const extensions = [
    ' Préparation 100 % en ligne, examen blanc gratuit.',
    ' Pièces et démarches préfecture.',
    ' Guide vérifié.',
  ];
  let desc = base;
  for (const ext of extensions) {
    if (desc.length >= 150) break;
    desc += ext;
  }
  if (desc.length > 155) {
    const cut = desc.slice(0, 155);
    desc = cut.slice(0, Math.max(cut.lastIndexOf('.'), cut.lastIndexOf(','), cut.lastIndexOf(' ')));
  }
  // Nettoyage : pas de ponctuation/espace en fin, puis un point unique.
  desc = desc.replace(/[\s,;:.]+$/, '') + '.';
  return desc;
}

export async function generateMetadata(
  { params }: { params: Promise<{ departement: string }> },
): Promise<Metadata> {
  const { departement } = await params;
  const dep = getDepartementPublie(departement);
  if (!dep) return {};

  const title = buildTitle(dep);
  const description = buildDescription(dep);
  const url = `${SITE_URL}/examen-civique/${dep.slug}`;

  return {
    // absolute : contourne le template « %s | maformationcivique.fr » du layout
    // racine, pour garder le <title> rendu ≤ 60 caractères.
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, locale: 'fr_FR', type: 'article' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function ExamenCiviqueDepartementPage(
  { params }: { params: Promise<{ departement: string }> },
) {
  const { departement } = await params;
  const dep = getDepartementPublie(departement);
  if (!dep) notFound();

  const centres = dep.centresExamen.filter(centreValide);
  const proches = dep.centresProches.filter(centreProcheValide);
  const operateurs = [...new Set(centres.map((c) => c.operateur))];
  // Mode d'affichage : centres partenaires, centres proches, ou ancrage étatique OFII.
  const mode: 'centres' | 'proches' | 'ofii' =
    centres.length > 0 ? 'centres' : proches.length > 0 ? 'proches' : 'ofii';
  const limitrophes = getLimitrophesPublies(dep);
  const verifieLe = derniereVerification(dep);
  const pageUrl = `${SITE_URL}/examen-civique/${dep.slug}`;

  // JSON-LD — BreadcrumbList + Course. ⛔ Pas de LocalBusiness/Place/FAQPage :
  // plateforme 100 % digitale, les centres listés ne sont pas nos établissements.
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: "Centres d'examen civique", item: `${SITE_URL}/examen-civique` },
        { '@type': 'ListItem', position: 3, name: dep.nom, item: pageUrl },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: "Préparation en ligne à l'examen civique",
      description: `Modules civiques et examens blancs au format officiel pour préparer l'examen civique (carte de séjour pluriannuelle, carte de résident, naturalisation).`,
      provider: { '@type': 'Organization', name: 'maformationcivique.fr', url: SITE_URL },
      url: `${SITE_URL}/modulesciviques`,
      inLanguage: 'fr',
      offers: { '@type': 'Offer', category: 'Free', price: '0', priceCurrency: 'EUR' },
      hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'Online' },
    },
  ];

  const sectionTitle: React.CSSProperties = {
    fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800,
    color: 'var(--color-text-primary)', margin: '48px 0 18px', lineHeight: 1.3,
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '40px 24px 72px' }}>

        {/* Fil d'Ariane visible */}
        <nav aria-label="Fil d'Ariane" style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 20 }}>
          <a href={SITE_URL} style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Accueil</a>
          {' › '}
          <a href={`${SITE_URL}/examen-civique`} style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Centres d&apos;examen civique</a>
          {' › '}
          <span style={{ color: 'var(--color-text-secondary)' }}>{dep.nom}</span>
        </nav>

        <h1 style={{ fontSize: 'clamp(26px, 4.5vw, 38px)', fontWeight: 800, lineHeight: 1.2, color: 'var(--color-text-primary)', marginBottom: 20 }}>
          {/* Collapse quand la ville-préfecture est le département lui-même (Paris) */}
          {dep.prefectureVille === dep.nom
            ? <>Examen civique et linguistique {dep.nomAvecPreposition} ({dep.code})</>
            : <>Examen civique et linguistique à {dep.prefectureVille} et {dep.nomAvecPreposition} ({dep.code})</>}
        </h1>

        {/* Réponse directe — données réelles dès le premier paragraphe */}
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--color-text-secondary)', marginBottom: 8 }}>
          {mode === 'centres' && (
            <>
              L&apos;examen civique se passe {dep.nomAvecPreposition} dans{' '}
              <strong>{centres.length === 1 ? 'un centre agréé' : `${centres.length} centres agréés`}</strong>
              {' '}— {centres.map((c) => `${c.nom} à ${c.ville}`).join(', ')}. L&apos;inscription se
              fait en ligne auprès de {operateurs.join(' et ')}, les liens officiels sont
              ci-dessous. Les candidats de {dep.villesPrincipales.slice(0, 3).join(', ')} et du
              reste du département réservent leur session directement, sans passer par la préfecture.
            </>
          )}
          {mode === 'proches' && (
            <>
              Il n&apos;y a <strong>aucun centre d&apos;examen civique agréé {dep.nomAvecPreposition}</strong>.
              Le centre le plus proche se trouve à {proches[0]?.ville} ({proches[0]?.departement})
              {proches[0]?.distanceKm != null && <>, à environ {proches[0].distanceKm} km de {dep.prefectureVille}</>}.
              Les candidats de {dep.villesPrincipales.slice(0, 3).join(', ')} passent donc l&apos;épreuve
              dans un département voisin — les options sont listées ci-dessous.
            </>
          )}
          {mode === 'ofii' && (
            <>
              L&apos;examen civique est obligatoire {dep.nomAvecPreposition} pour la carte de séjour
              pluriannuelle, la carte de résident et la naturalisation. Il est organisé par des{' '}
              <strong>opérateurs agréés par l&apos;État</strong> (liste officielle du ministère de
              l&apos;Intérieur ci-dessous). Votre interlocuteur public local pour le parcours
              d&apos;intégration et de naturalisation est la direction territoriale de l&apos;OFII,
              dont les coordonnées vérifiées figurent plus bas.
            </>
          )}
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--color-text-muted)', marginBottom: 8 }}>
          Pour le format de l&apos;épreuve, les niveaux de langue exigés et les dispenses, consultez{' '}
          <a href={ARTICLE_PILIER_URL} style={{ color: 'var(--color-blue-france)' }}>
            notre guide complet de l&apos;examen civique 2026
          </a>{' '}
          — cette page se concentre sur le local : où le passer, comment s&apos;inscrire, et ce que
          demande votre préfecture.
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--color-text-muted)', marginBottom: 8 }}>
          L&apos;examen civique s&apos;accompagne d&apos;une exigence de <strong>niveau de français</strong>{' '}
          selon votre démarche (A2, B1 ou B2). Préparez les deux volets — l&apos;examen civique{' '}
          <em>et</em> le test de français — avec nos{' '}
          <a href={`${SITE_URL}/modulesciviques`} style={{ color: 'var(--color-blue-france)' }}>modules civiques</a>{' '}
          et nos{' '}
          <a href={`${SITE_URL}/moduleslinguistiques`} style={{ color: 'var(--color-blue-france)' }}>cours de français A2/B1/B2</a>{' '}
          {dep.nomAvecPreposition}, 100 % en ligne.
        </p>

        {/* ── Bande d'en-tête département (photo + villes) ── */}
        <HeroDepartement dep={dep} />

        {/* ── Où passer l'examen ── */}
        <h2 style={sectionTitle}>Où passer l&apos;examen civique {dep.nomAvecPreposition}</h2>
        {mode === 'ofii' ? (
          <>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--color-text-secondary)', margin: '0 0 16px' }}>
              L&apos;examen civique se passe dans un centre <strong>agréé par l&apos;État</strong>.
              La liste officielle et à jour des opérateurs et de leurs centres est tenue par le
              ministère de l&apos;Intérieur — c&apos;est la seule source fiable pour trouver et
              réserver une session {dep.nomAvecPreposition} ou à proximité :
            </p>
            <ul style={{ margin: '0 0 20px', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14.5, lineHeight: 1.6 }}>
              <li>
                <a href={EXAMEN_CIVIQUE.sourceUrl} target="_blank" rel="noopener" style={{ color: 'var(--color-blue-france)' }}>
                  Examen civique sur service-public.fr <ExternalLink size={11} style={{ display: 'inline' }} />
                </a>{' '}— démarche officielle et accès aux opérateurs agréés
              </li>
              <li>
                <a href={EXAMEN_CIVIQUE.sourceQuestionsUrl} target="_blank" rel="noopener" style={{ color: 'var(--color-blue-france)' }}>
                  formation-civique.interieur.gouv.fr <ExternalLink size={11} style={{ display: 'inline' }} />
                </a>{' '}— ressources et liste officielle des questions
              </li>
            </ul>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--color-text-muted)', margin: '0 0 16px' }}>
              Votre interlocuteur public {dep.nomAvecPreposition} pour le parcours d&apos;intégration
              et de naturalisation :
            </p>
            <OfiiBlock dep={dep} />
          </>
        ) : (
          <CentresSection dep={dep} />
        )}

        {/* ── Comment s'inscrire ── */}
        <h2 style={sectionTitle}>Comment s&apos;inscrire</h2>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--color-text-secondary)', margin: 0 }}>
          {mode === 'centres' && (
            <>
              La réservation se fait <strong>uniquement en ligne</strong>, sur le site de
              l&apos;opérateur agréé de chaque centre ({operateurs.join(', ')}) — utilisez les
              boutons « Réserver » ci-dessus. Choisissez la mention correspondant à votre
              démarche (carte de séjour pluriannuelle, carte de résident ou naturalisation).{' '}
              Le tarif est fixé par chaque centre : vérifiez-le au moment de la réservation.
            </>
          )}
          {mode === 'proches' && (
            <>
              La réservation se fait <strong>uniquement en ligne</strong>, sur le site de
              l&apos;opérateur agréé du centre choisi — les sources officielles de chaque centre
              voisin sont indiquées ci-dessus. Choisissez la mention correspondant à votre
              démarche (carte de séjour pluriannuelle, carte de résident ou naturalisation).{' '}
              Le tarif est fixé par chaque centre : vérifiez-le au moment de la réservation.
            </>
          )}
          {mode === 'ofii' && (
            <>
              L&apos;inscription se fait <strong>uniquement en ligne</strong>, auprès d&apos;un
              opérateur agréé par l&apos;État (accessible via les liens officiels ci-dessus).
              Choisissez la mention correspondant à votre démarche (carte de séjour pluriannuelle,
              carte de résident ou naturalisation). Le tarif est fixé par chaque centre.
            </>
          )}
          {' '}La liste officielle des questions est publiée sur{' '}
          <a href={EXAMEN_CIVIQUE.sourceQuestionsUrl} target="_blank" rel="noopener" style={{ color: 'var(--color-blue-france)' }}>
            formation-civique.interieur.gouv.fr <ExternalLink size={11} style={{ display: 'inline' }} />
          </a>.
        </p>

        {/* ── Ce que demande la préfecture ── */}
        <h2 style={sectionTitle}>Ce que demande la {dep.prefecture.nom}</h2>
        <PiecesPrefectureBlock dep={dep} />
        <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--color-text-secondary)', margin: '14px 0 0' }}>
          Le dépôt du dossier passe par l&apos;ANEF (Administration numérique pour les étrangers
          en France). Les délais de traitement varient selon la préfecture : vérifiez auprès de
          la vôtre
          {dep.prefecture.urlOfficielle && (
            <>
              {' '}sur{' '}
              <a href={dep.prefecture.urlOfficielle} target="_blank" rel="noopener" style={{ color: 'var(--color-blue-france)' }}>
                son site officiel <ExternalLink size={11} style={{ display: 'inline' }} />
              </a>
            </>
          )}.
        </p>
        <DelaisObservesBlock dep={dep} />

        {/* ── CTA test d'éligibilité (lead magnet transverse) ── */}
        <div style={{ marginTop: 32 }}>
          <EligibiliteCTA />
        </div>

        {/* ── Se préparer (bloc de conversion calculé) ── */}
        <h2 style={sectionTitle}>Se préparer à l&apos;examen civique {dep.nomAvecPreposition}</h2>
        <ConversionBlock dep={dep} />

        {/* ── FAQ ── */}
        <h2 style={sectionTitle}>Questions fréquentes</h2>
        <FaqLocale dep={dep} />

        {/* ── Pour aller plus loin ── */}
        <h2 style={sectionTitle}>Pour aller plus loin</h2>
        <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14.5, lineHeight: 1.6 }}>
          <li>
            <a href={ARTICLE_PILIER_URL} style={{ color: 'var(--color-blue-france)' }}>
              Examen civique 2026 : questions, format et niveaux exigés
            </a>
          </li>
          <li>
            <a href={`${SITE_URL}/moduleslinguistiques`} style={{ color: 'var(--color-blue-france)' }}>
              Cours de français en ligne A2, B1, B2 (test linguistique)
            </a>
          </li>
          <li>
            <a href={`${SITE_URL}/ressources/justificatif-niveau-francais-naturalisation-b2`} style={{ color: 'var(--color-blue-france)' }}>
              Justifier son niveau de français pour la naturalisation
            </a>
          </li>
          <li>
            <a href={`${SITE_URL}/ressources/carte-resident-10-ans-premiere-demande`} style={{ color: 'var(--color-blue-france)' }}>
              Carte de résident 10 ans : première demande
            </a>
          </li>
          <li>
            <a href={`${SITE_URL}/examen-civique`} style={{ color: 'var(--color-blue-france)' }}>
              Tous les départements
            </a>
            {limitrophes.length > 0 && (
              <>
                {' '}· départements voisins :{' '}
                {limitrophes.map((l, i) => (
                  <span key={l.slug}>
                    {i > 0 && ', '}
                    <a href={`${SITE_URL}/examen-civique/${l.slug}`} style={{ color: 'var(--color-blue-france)' }}>
                      {l.nom}
                    </a>
                  </span>
                ))}
              </>
            )}
          </li>
          <li>
            <a href={EXAMEN_CIVIQUE.sourceUrl} target="_blank" rel="noopener" style={{ color: 'var(--color-blue-france)' }}>
              Fiche officielle service-public.fr <ExternalLink size={11} style={{ display: 'inline' }} />
            </a>
          </li>
        </ul>

        {/* ── Mentions de fin ── */}
        <div style={{ marginTop: 48, paddingTop: 20, borderTop: '1px solid var(--color-border)' }}>
          <p style={{ fontSize: 12.5, lineHeight: 1.7, color: 'var(--color-text-muted)', margin: 0 }}>
            {verifieLe && <>Dernière vérification des informations locales : {formatDateFr(verifieLe)}. </>}
            Les modalités et les délais peuvent varier : vérifiez auprès de votre préfecture ou du
            centre d&apos;examen. Cet article est rédigé à titre informatif et ne remplace pas un
            avis juridique.
          </p>
        </div>
      </div>
    </main>
  );
}

function formatDateFr(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}
