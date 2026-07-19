/**
 * Hub des guides — /guides
 *
 * Page intermédiaire entre l'accueil et les guides piliers. Ce n'est PAS une
 * simple liste de liens (thin content) : elle répond à une vraie question —
 * « quelle démarche est la mienne ? » — avec un comparatif des 3 parcours.
 *
 * ⚠️ RÈGLE N°2 : niveaux de langue et seuils viennent de lib/reglementation.ts.
 */

import type { Metadata } from 'next';
import { ArrowRight, IdCard, CreditCard, Award } from 'lucide-react';
import { EligibiliteCTA } from '@/components/eligibilite/EligibiliteCTA';
import { SITE_URL, NIVEAUX_LANGUE, NATURALISATION, EXAMEN_CIVIQUE } from '@/lib/reglementation';

export const metadata: Metadata = {
  title: { absolute: 'Guides : titre de séjour, carte de résident, naturalisation' },
  description:
    "Quelle démarche est la vôtre ? Comparez carte de séjour pluriannuelle, carte de résident et naturalisation : durée, niveau de français exigé et examen civique.",
  alternates: { canonical: `${SITE_URL}/guides` },
  openGraph: {
    title: 'Guides : titre de séjour, carte de résident, naturalisation',
    description:
      'Comparez les trois démarches et trouvez celle qui correspond à votre situation.',
    url: `${SITE_URL}/guides`,
    locale: 'fr_FR',
  },
};

interface Parcours {
  icone: typeof IdCard;
  titre: string;
  accroche: string;
  niveau: string;
  duree: string;
  pourQui: string;
  /** Guide pilier publié, sinon null (pas de lien mort) */
  guide: string | null;
  ressource?: { href: string; label: string };
  accent: string;
  fond: string;
}

const PARCOURS: Parcours[] = [
  {
    icone: IdCard,
    titre: 'Carte de séjour pluriannuelle',
    accroche: "Sécuriser son séjour sur plusieurs années, sans repasser en préfecture chaque année.",
    niveau: NIVEAUX_LANGUE.CSP,
    duree: 'Après une 1ʳᵉ année de séjour régulier',
    pourQui: "Vous avez un titre d'un an et souhaitez passer à un titre plus long.",
    guide: null,
    accent: '#002395',
    fond: '#EEF4FF',
  },
  {
    icone: CreditCard,
    titre: 'Carte de résident (10 ans)',
    accroche: 'Un titre de longue durée, renouvelable, qui stabilise durablement votre situation.',
    niveau: NIVEAUX_LANGUE.carteResident,
    duree: "Souvent 3 à 5 ans selon votre situation",
    pourQui: "Vous résidez en France depuis plusieurs années et visez la stabilité, sans devenir français.",
    guide: null,
    ressource: { href: `${SITE_URL}/ressources/carte-resident-10-ans-premiere-demande`, label: 'Première demande : conditions' },
    accent: '#0057A8',
    fond: '#EFF6FF',
  },
  {
    icone: Award,
    titre: 'Naturalisation française',
    accroche: 'Devenir citoyen français : passeport, droit de vote, statut définitif.',
    niveau: NIVEAUX_LANGUE.naturalisation,
    duree: `${NATURALISATION.dureeResidenceAns} ans de résidence (réductions possibles)`,
    pourQui: "Vous voulez la nationalité, pas seulement un titre de séjour.",
    guide: `${SITE_URL}/guides/naturalisation`,
    accent: '#CC1A1A',
    fond: '#FEF2F2',
  },
];

export default function GuidesHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/modules/daumier-la-republique.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center 30%',
        }} />
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(0,26,112,0.93) 0%, rgba(0,35,149,0.90) 55%, rgba(204,26,26,0.86) 100%)',
        }} />
        <div style={{ height: 3, background: 'linear-gradient(90deg,#002395 33%,#fff 33% 66%,#ED2939 66%)', position: 'relative' }} />

        <div style={{ position: 'relative', maxWidth: 760, margin: '0 auto', padding: '52px 24px 56px' }}>
          <nav aria-label="Fil d'Ariane" style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 18 }}>
            <a href={SITE_URL} style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>Accueil</a>
            {' › '}<span style={{ color: 'rgba(255,255,255,0.9)' }}>Guides</span>
          </nav>
          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 800, lineHeight: 1.15,
            color: '#fff', margin: '0 0 16px', textShadow: '0 2px 20px rgba(0,0,0,0.25)',
          }}>
            Quelle démarche<br />est la vôtre ?
          </h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: 'rgba(255,255,255,0.88)', margin: 0, maxWidth: 560 }}>
            Carte de séjour pluriannuelle, carte de résident ou naturalisation : trois parcours différents, trois
            niveaux de français exigés. Comparez-les et trouvez le vôtre.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '40px 24px 80px' }}>

        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--color-text-secondary)', margin: '0 0 12px' }}>
          Beaucoup de candidats se trompent de porte : on prépare une naturalisation alors qu&apos;on relève encore
          d&apos;un titre de séjour, ou l&apos;inverse. Ces trois démarches n&apos;ont ni les mêmes conditions, ni la
          même durée de résidence, ni le <strong>même niveau de français</strong>.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--color-text-secondary)', margin: '0 0 28px' }}>
          Un point commun depuis 2026 : <strong>l&apos;examen civique</strong> ({EXAMEN_CIVIQUE.nbQuestions} questions,
          {' '}{EXAMEN_CIVIQUE.seuilReussite}/{EXAMEN_CIVIQUE.nbQuestions} pour réussir) concerne les trois.
        </p>

        {/* Cartes des 3 parcours */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {PARCOURS.map(({ icone: Icone, titre, accroche, niveau, duree, pourQui, guide, ressource, accent, fond }) => (
            <article key={titre} style={{
              background: 'var(--color-surface)', border: 'var(--border-default)',
              borderRadius: 'var(--radius-xl)', padding: '24px 26px',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 14 }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 12, flexShrink: 0, background: fond,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icone size={24} color={accent} />
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: 19, fontWeight: 800, color: 'var(--color-text-primary)', margin: '0 0 4px', lineHeight: 1.3 }}>
                    {titre}
                  </h2>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0 }}>
                    {accroche}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 14 }}>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: accent, background: fond, borderRadius: 100, padding: '5px 13px' }}>
                  Français {niveau} exigé
                </span>
                <span style={{ fontSize: 12.5, color: 'var(--color-text-muted)', background: 'var(--color-off-white)', border: 'var(--border-default)', borderRadius: 100, padding: '5px 13px' }}>
                  {duree}
                </span>
              </div>

              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--color-text-secondary)', margin: '0 0 14px' }}>
                <strong>Pour qui ?</strong> {pourQui}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
                {guide ? (
                  <a href={guide} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 7,
                    background: accent, color: '#fff', padding: '10px 20px',
                    borderRadius: 'var(--radius-pill)', fontSize: 14, fontWeight: 700, textDecoration: 'none',
                  }}>
                    Lire le guide complet <ArrowRight size={15} />
                  </a>
                ) : (
                  <span style={{ fontSize: 13, color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                    Guide détaillé en préparation
                  </span>
                )}
                {ressource && (
                  <a href={ressource.href} style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--color-blue-france)', textDecoration: 'none' }}>
                    {ressource.label} ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div style={{ margin: '32px 0 0' }}>
          <EligibiliteCTA />
        </div>

        {/* Ressources transverses */}
        <h2 style={{ fontSize: 'clamp(20px, 3vw, 25px)', fontWeight: 800, color: 'var(--color-text-primary)', margin: '48px 0 14px' }}>
          Utile quelle que soit votre démarche
        </h2>
        <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9, fontSize: 15, lineHeight: 1.6 }}>
          <li>
            <a href={`${SITE_URL}/examen-civique`} style={{ color: 'var(--color-blue-france)' }}>
              Où passer l&apos;examen civique : centres par département
            </a>
          </li>
          <li>
            <a href={`${SITE_URL}/examen`} style={{ color: 'var(--color-blue-france)' }}>
              Examens blancs gratuits (CSP, carte de résident, naturalisation)
            </a>
          </li>
          <li>
            <a href={`${SITE_URL}/moduleslinguistiques`} style={{ color: 'var(--color-blue-france)' }}>
              Cours de français en ligne — {NIVEAUX_LANGUE.CSP}, {NIVEAUX_LANGUE.carteResident}, {NIVEAUX_LANGUE.naturalisation}
            </a>
          </li>
          <li>
            <a href={`${SITE_URL}/ressources`} style={{ color: 'var(--color-blue-france)' }}>
              Tous nos articles et guides pratiques
            </a>
          </li>
        </ul>

        <p style={{ fontSize: 12.5, lineHeight: 1.7, color: 'var(--color-text-muted)', margin: '36px 0 0', paddingTop: 20, borderTop: '1px solid var(--color-border)' }}>
          Ces pages sont publiées à titre informatif et ne remplacent pas un avis juridique. Les conditions et les
          délais peuvent évoluer : vérifiez auprès de votre préfecture.
        </p>
      </div>
    </main>
  );
}
