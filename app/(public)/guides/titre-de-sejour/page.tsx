/**
 * Page pilier — Titre de séjour : le guide complet 2026.
 *
 * ⚠️ RÈGLE N°2 : aucune valeur réglementaire en dur. Niveaux de langue, format
 * de l'examen, champ d'application (qui est concerné / dispensé), fenêtre de
 * renouvellement — tout vient de lib/reglementation.ts.
 *
 * Sources : service-public.fr F35799 (vérifié 01/05/2026), F39530 (examen
 * civique, vérifié 19/07/2026), DGEF.
 */

import type { Metadata } from 'next';
import { ExternalLink, IdCard, CalendarClock, ShieldQuestion, CheckCircle2, XCircle } from 'lucide-react';
import { EligibiliteCTA } from '@/components/eligibilite/EligibiliteCTA';
import {
  SITE_URL, ARTICLE_PILIER_URL, EXAMEN_CIVIQUE, NIVEAUX_LANGUE, TITRE_SEJOUR,
} from '@/lib/reglementation';

export const metadata: Metadata = {
  title: { absolute: 'Titre de séjour : le guide complet 2026' },
  description:
    "Carte temporaire, pluriannuelle ou résident : quel titre demander, examen civique et niveau de français 2026, première demande et renouvellement sur l'ANEF.",
  alternates: { canonical: `${SITE_URL}/guides/titre-de-sejour` },
  openGraph: {
    title: 'Titre de séjour : le guide complet 2026',
    description:
      "Quel titre demander, nouveautés 2026 (examen civique + langue), première demande et renouvellement sur l'ANEF.",
    url: `${SITE_URL}/guides/titre-de-sejour`,
    locale: 'fr_FR',
    type: 'article',
  },
};

const h2: React.CSSProperties = {
  fontSize: 'clamp(21px, 3vw, 27px)', fontWeight: 800,
  color: 'var(--color-text-primary)', margin: '48px 0 16px', lineHeight: 1.3,
};
const h3: React.CSSProperties = {
  fontSize: 'clamp(17px, 2.2vw, 19px)', fontWeight: 700,
  color: 'var(--color-text-primary)', margin: '28px 0 10px', lineHeight: 1.35,
};
const p: React.CSSProperties = {
  fontSize: 16, lineHeight: 1.8, color: 'var(--color-text-secondary)', margin: '0 0 16px',
};
const a: React.CSSProperties = { color: 'var(--color-blue-france)' };

export default function GuideTitreSejourPage() {
  const dateMaj = new Date(TITRE_SEJOUR.verifieLe).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Titre de séjour : le guide complet 2026',
      description: "Quel titre demander, examen civique et niveau de français 2026, première demande, renouvellement, ANEF.",
      inLanguage: 'fr',
      dateModified: TITRE_SEJOUR.verifieLe,
      author: { '@type': 'Organization', name: 'maformationcivique.fr', url: SITE_URL },
      publisher: { '@type': 'Organization', name: 'maformationcivique.fr', url: SITE_URL },
      mainEntityOfPage: `${SITE_URL}/guides/titre-de-sejour`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
        { '@type': 'ListItem', position: 3, name: 'Titre de séjour', item: `${SITE_URL}/guides/titre-de-sejour` },
      ],
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero rouge filigrane ── */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/modules/Mairie-de-Paris-l-hotel-de-toutes-les-batailles.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center 35%',
        }} />
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(127,29,29,0.93) 0%, rgba(159,18,57,0.90) 55%, rgba(204,26,26,0.88) 100%)',
        }} />
        <div style={{ height: 3, background: 'linear-gradient(90deg,#002395 33%,#fff 33% 66%,#ED2939 66%)', position: 'relative' }} />

        <div style={{ position: 'relative', maxWidth: 760, margin: '0 auto', padding: '52px 24px 56px' }}>
          <nav aria-label="Fil d'Ariane" style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 18 }}>
            <a href={SITE_URL} style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>Accueil</a>
            {' › '}
            <a href={`${SITE_URL}/guides`} style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>Guides</a>
            {' › '}<span style={{ color: 'rgba(255,255,255,0.9)' }}>Titre de séjour</span>
          </nav>

          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: 100, padding: '5px 14px', marginBottom: 20,
            fontSize: 11.5, fontWeight: 700, color: '#fff',
            textTransform: 'uppercase', letterSpacing: '0.08em', backdropFilter: 'blur(6px)',
          }}>
            Guide complet · mis à jour {dateMaj}
          </span>

          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.15,
            color: '#fff', margin: '0 0 16px', textShadow: '0 2px 20px rgba(0,0,0,0.25)',
          }}>
            Titre de séjour :<br />le guide complet 2026
          </h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: 'rgba(255,255,255,0.88)', margin: 0, maxWidth: 560 }}>
            Quel titre demander, ce qui change en 2026 (examen civique et niveau de français), première demande et
            renouvellement sur l&apos;ANEF — l&apos;essentiel vérifié aux sources officielles.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '40px 24px 80px' }}>

        <p style={p}>
          Le <strong>titre de séjour</strong> est le document qui autorise une personne étrangère non européenne à{' '}
          <strong>vivre en France</strong> de façon régulière. Il en existe plusieurs selon votre situation et la
          durée : la <strong>carte temporaire</strong> (1 an), la <strong>carte pluriannuelle</strong> (2 à 4 ans) et
          la <strong>carte de résident</strong> (10 ans).
        </p>
        <p style={p}>
          Deux moments concentrent l&apos;essentiel : la <strong>première demande</strong> et le{' '}
          <strong>renouvellement</strong>. Depuis le <strong>1ᵉʳ janvier 2026</strong>, certaines{' '}
          <strong>premières demandes</strong> de titre pluriannuel ajoutent l&apos;<strong>examen civique</strong> et
          un <strong>niveau de français</strong> minimal. Bonne nouvelle : ni la carte temporaire d&apos;un an, ni les
          renouvellements ne sont concernés.
        </p>

        <EligibiliteCTA />

        {/* ── Les 3 titres — grille façon Apple ── */}
        <h2 style={h2}>Les différents titres de séjour</h2>
        <p style={p}>
          Avant toute démarche, identifiez <strong>quel titre</strong> correspond à votre situation.
        </p>

        <div className="ts-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, margin: '28px 0 8px' }}>
          <div className="ts-featured" style={{ gridColumn: 'span 2' }}>
            <IdCard size={30} color="var(--color-text-primary)" strokeWidth={2.2} />
            <h3 style={{ fontSize: 'clamp(22px, 3.4vw, 30px)', fontWeight: 800, lineHeight: 1.12, color: 'var(--color-text-primary)', margin: '18px 0 12px', letterSpacing: '-0.02em' }}>
              Carte pluriannuelle
            </h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.65, color: 'var(--color-text-secondary)', margin: 0 }}>
              Délivrée <strong>après</strong> une carte temporaire ou un VLS-TS, valable <strong>2 à 4 ans</strong>
              selon le motif. Elle porte en principe la même mention que votre carte temporaire. C&apos;est elle
              qui, en première demande, peut désormais exiger l&apos;examen civique et le niveau {NIVEAUX_LANGUE.CSP}.
            </p>
          </div>

          {[
            {
              titre: 'Carte temporaire (1 an)',
              desc: <>Souvent le <strong>premier titre</strong> obtenu, avec une mention selon le motif (vie privée et familiale, salarié, étudiant, visiteur…). Se renouvelle et ouvre l&apos;accès à un titre plus long. <strong>Pas d&apos;examen civique.</strong></>,
            },
            {
              titre: 'Carte de résident (10 ans)',
              desc: <>Le titre le plus protecteur : vivre et travailler en France <strong>10 ans</strong> sans autorisation de travail à demander, souvent une étape vers la naturalisation.</>,
              lien: { href: `${SITE_URL}/ressources/carte-resident-10-ans-premiere-demande`, label: 'Première demande : conditions' },
            },
            {
              titre: 'Les titres par motif',
              desc: <>Chaque situation a ses règles : <strong>vie privée et familiale</strong>, <strong>salarié</strong>, <strong>étudiant</strong>, <strong>passeport talent</strong>…</>,
            },
          ].map(({ titre, desc, lien }) => (
            <div key={titre}>
              <h3 style={{ fontSize: 16.5, fontWeight: 800, lineHeight: 1.25, color: 'var(--color-text-primary)', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
                {titre}
              </h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0 }}>{desc}</p>
              {lien && (
                <a href={lien.href} style={{ display: 'inline-block', marginTop: 10, fontSize: 12.5, fontWeight: 600, color: 'var(--color-text-muted)', textDecoration: 'none' }}>
                  {lien.label} ↗
                </a>
              )}
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 860px) {
            .ts-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; }
            .ts-featured { grid-column: span 2 !important; }
          }
          @media (max-width: 520px) {
            .ts-grid { grid-template-columns: 1fr !important; }
            .ts-featured { grid-column: span 1 !important; }
            .ts-concern { grid-template-columns: 1fr !important; }
          }
          .faq-summary::-webkit-details-marker { display: none; }
          .faq-summary { list-style: none; }
          .faq-item[open] .faq-chevron { transform: rotate(180deg); }
        `}</style>

        {/* ── Nouveautés 2026 : qui est concerné / qui ne l'est pas ── */}
        <h2 style={h2}>Nouveautés 2026 : qui doit passer l&apos;examen civique ?</h2>
        <p style={p}>
          C&apos;est le changement le plus important, et le plus mal compris. Depuis le{' '}
          <strong>1ᵉʳ janvier 2026</strong>, l&apos;examen civique — un QCM de {EXAMEN_CIVIQUE.nbQuestions} questions,
          {' '}{EXAMEN_CIVIQUE.seuilReussite}/{EXAMEN_CIVIQUE.nbQuestions} pour réussir — est exigé pour certaines
          <strong> premières demandes</strong> seulement.
        </p>

        <div className="ts-concern" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '24px 0 8px' }}>
          <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: 'var(--radius-lg)', padding: '20px 22px' }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 800, color: '#047857', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 12px' }}>
              <CheckCircle2 size={17} /> Concerné
            </p>
            <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, lineHeight: 1.55, color: 'var(--color-text-secondary)' }}>
              {TITRE_SEJOUR.examenCiviqueConcerne.map((x) => <li key={x} style={{ textTransform: 'capitalize' }}>{x}</li>)}
            </ul>
          </div>
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 'var(--radius-lg)', padding: '20px 22px' }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 12px' }}>
              <XCircle size={17} /> Non concerné / dispensé
            </p>
            <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, lineHeight: 1.55, color: 'var(--color-text-secondary)' }}>
              {TITRE_SEJOUR.examenCiviqueDispense.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
        </div>

        <h3 style={h3}>Le niveau de français exigé</h3>
        <p style={p}>
          Pour une <strong>première</strong> carte pluriannuelle ou carte de résident, un niveau minimal de français
          est désormais requis (ressortissants non européens) :
        </p>
        <ul style={{ margin: '0 0 16px', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 7, fontSize: 15.5, lineHeight: 1.6 }}>
          <li>Carte de séjour pluriannuelle : niveau <strong>{NIVEAUX_LANGUE.CSP}</strong></li>
          <li>Carte de résident : niveau <strong>{NIVEAUX_LANGUE.carteResident}</strong></li>
          <li>Naturalisation : niveau <strong>{NIVEAUX_LANGUE.naturalisation}</strong></li>
        </ul>
        <p style={p}>
          Comme l&apos;examen civique, cette condition s&apos;applique au <strong>premier accès</strong>, pas au
          renouvellement. Pour comprendre l&apos;épreuve civique en détail, lisez{' '}
          <a href={ARTICLE_PILIER_URL} style={a}>Examen civique 2026 : questions et réponses</a>.
        </p>

        {/* ── Première demande vs renouvellement ── */}
        <h2 style={h2}>Première demande ou renouvellement ?</h2>
        <h3 style={h3}>La première demande</h3>
        <p style={p}>
          Elle dépend de votre <strong>motif</strong> et de votre situation (déjà en France sous un autre statut, ou
          arrivée récente avec un visa). Repères communs : justifier de votre <strong>identité</strong>, de votre{' '}
          <strong>motif de séjour</strong>, d&apos;un <strong>domicile</strong> et souvent de <strong>ressources</strong>.
          Depuis 2026, une première carte pluriannuelle ou de résident ajoute l&apos;examen civique et le niveau de
          langue vus plus haut. En cas de doute sur le bon titre, commencez par le{' '}
          <a href={`${SITE_URL}/test-eligibilite`} style={a}>test d&apos;éligibilité</a>.
        </p>
        <h3 style={h3}>Le renouvellement : anticipez</h3>
        <p style={p}>
          La règle d&apos;or : déposez votre renouvellement <strong>entre {TITRE_SEJOUR.renouvellementAvantMoisMax} et{' '}
          {TITRE_SEJOUR.renouvellementAvantMoisMin} mois avant l&apos;expiration</strong> de votre titre. Vous recevez
          alors un <strong>récépissé</strong> qui prolonge vos droits (séjour, et souvent travail) pendant
          l&apos;instruction. Ne laissez jamais votre titre expirer sans avoir déposé : c&apos;est la première cause
          de difficultés. Et surtout : un renouvellement <strong>ne nécessite ni examen civique, ni nouvelle
          justification de langue</strong> — la démarche est plus simple qu&apos;une première demande.
        </p>

        {/* ── ANEF — timeline ── */}
        <h2 style={h2}>La demande sur l&apos;ANEF, étape par étape</h2>
        <p style={p}>
          La plupart des démarches se font en ligne, sur la plateforme <strong>ANEF</strong> (Administration numérique
          des étrangers en France).
        </p>
        <ol style={{ margin: '0 0 20px', paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            <><strong>Rassemblez vos pièces</strong> : identité, motif de séjour, domicile, ressources, photos — et, pour une première carte pluriannuelle/résident, l&apos;attestation d&apos;examen civique et le justificatif de langue.</>,
            <><strong>Connectez-vous à l&apos;ANEF</strong> et lancez la démarche correspondant à votre titre.</>,
            <><strong>Téléversez les documents</strong> et vérifiez chaque pièce (une pièce manquante rallonge tout).</>,
            <><strong>Payez les timbres fiscaux</strong> demandés (montant selon le titre).</>,
            <><strong>Recevez votre récépissé</strong>, puis suivez l&apos;instruction en ligne.</>,
            <><strong>Répondez vite</strong> aux demandes de complément et présentez-vous, selon le cas, en préfecture pour le retrait du titre.</>,
          ].map((etape, i) => (
            <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: 'var(--color-blue-france)', color: '#fff', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
              <span style={{ fontSize: 15.5, lineHeight: 1.7, color: 'var(--color-text-secondary)', paddingTop: 2 }}>{etape}</span>
            </li>
          ))}
        </ol>
        <p style={p}>
          <strong>Coût :</strong> la plupart des titres supposent des <strong>timbres fiscaux</strong> dont le montant
          varie selon le titre, et a évolué en 2026. Vérifiez le montant exact sur{' '}
          <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F35799" target="_blank" rel="noopener" style={a}>
            service-public.fr <ExternalLink size={11} style={{ display: 'inline' }} />
          </a>{' '}ou timbres.impots.gouv.fr.
        </p>

        {/* ── Refus / OQTF — timeline accent ── */}
        <h2 style={h2}>Refus, délais et recours</h2>
        <div style={{ display: 'flex', gap: 22, alignItems: 'flex-start', padding: '4px 0 26px' }}>
          <ShieldQuestion size={30} color="#CC1A1A" style={{ flexShrink: 0, marginTop: 4 }} />
          <div>
            <p style={{ ...p, margin: '0 0 12px' }}>
              Les <strong>délais</strong> d&apos;instruction varient fortement selon la préfecture : il n&apos;existe pas
              de durée officielle unique. Le récépissé protège vos droits pendant l&apos;attente.
            </p>
            <p style={{ ...p, margin: 0 }}>
              En cas de <strong>refus</strong>, la décision doit être motivée. Un refus est souvent assorti d&apos;une{' '}
              <strong>obligation de quitter le territoire (OQTF)</strong>, avec des <strong>délais de recours très
              courts</strong>. Dans ce cas, ne tardez pas : notre{' '}
              <a href={`${SITE_URL}/test-eligibilite`} style={a}>test d&apos;éligibilité</a> vous met en relation avec
              un·e avocat·e partenaire, et une association spécialisée peut aussi vous aider. Pour lire les codes
              CESEDA de vos documents, voir{' '}
              <a href={`${SITE_URL}/ressources/ceseda-definition-code-visa`} style={a}>CESEDA : comment lire le code sur votre visa</a>.
            </p>
          </div>
        </div>

        {/* ── FAQ accordéon ── */}
        <h2 style={h2}>Questions fréquentes</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            {
              q: 'Quels sont les différents types de titres de séjour ?',
              r: 'Principalement la carte de séjour temporaire (1 an), la carte de séjour pluriannuelle (2 à 4 ans) et la carte de résident (10 ans), chacune avec une mention selon le motif (vie privée et familiale, salarié, étudiant…).',
            },
            {
              q: 'Faut-il passer l\'examen civique pour un titre de séjour ?',
              r: `Seulement pour une première demande de carte pluriannuelle ou de carte de résident. La carte temporaire d'un an et les renouvellements ne sont pas concernés. Sont aussi dispensés les bénéficiaires d'une protection internationale, certains accords bilatéraux et les personnes de 65 ans et plus.`,
            },
            {
              q: 'Quand renouveler son titre de séjour ?',
              r: `En principe entre ${TITRE_SEJOUR.renouvellementAvantMoisMax} et ${TITRE_SEJOUR.renouvellementAvantMoisMin} mois avant l'expiration de votre titre. Déposer à temps vous donne droit à un récépissé qui prolonge vos droits pendant l'instruction.`,
            },
            {
              q: 'Comment renouveler son titre de séjour en ligne ?',
              r: `Sur la plateforme ANEF, en créant un compte et en téléversant vos pièces. Le renouvellement ne nécessite ni examen civique, ni nouvelle justification du niveau de langue exigé pour le premier accès.`,
            },
            {
              q: 'Que faire en cas de refus de titre de séjour ?',
              r: 'La décision doit être motivée et peut être assortie d\'une OQTF. Les délais de recours sont courts : consultez rapidement un·e avocat·e ou une association spécialisée. Notre test d\'éligibilité peut vous mettre en relation avec un avocat partenaire.',
            },
            {
              q: 'Quel niveau de français faut-il pour un titre de séjour ?',
              r: `Pour une première carte de séjour pluriannuelle : ${NIVEAUX_LANGUE.CSP}. Pour une première carte de résident : ${NIVEAUX_LANGUE.carteResident}. Pour la naturalisation : ${NIVEAUX_LANGUE.naturalisation}. Ces conditions s'appliquent au premier accès, pas au renouvellement.`,
            },
          ].map(({ q, r }, i) => (
            <details key={q} className="faq-item" open={i === 0} style={{
              background: 'var(--color-surface)', border: 'var(--border-default)',
              borderRadius: 'var(--radius-lg)', padding: '4px 22px',
            }}>
              <summary className="faq-summary" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14,
                padding: '16px 0', cursor: 'pointer',
                fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.35,
              }}>
                {q}
                <span className="faq-chevron" aria-hidden style={{ flexShrink: 0, transition: 'transform 200ms ease', color: 'var(--color-text-muted)', display: 'flex' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </span>
              </summary>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--color-text-secondary)', margin: '0 0 18px' }}>{r}</p>
            </details>
          ))}
        </div>

        {/* ── Aller plus loin ── */}
        <h2 style={h2}>Aller plus loin</h2>
        <ul style={{ margin: '0 0 20px', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9, fontSize: 15, lineHeight: 1.6 }}>
          <li><a href={`${SITE_URL}/ressources/carte-resident-10-ans-premiere-demande`} style={a}>Carte de résident 10 ans : première demande et conditions</a></li>
          <li><a href={ARTICLE_PILIER_URL} style={a}>Examen civique 2026 : questions et réponses</a></li>
          <li><a href={`${SITE_URL}/ressources/ceseda-definition-code-visa`} style={a}>CESEDA : comment lire le code sur votre visa</a></li>
          <li><a href={`${SITE_URL}/guides/naturalisation`} style={a}>Si votre objectif est la nationalité : le guide naturalisation</a></li>
          <li><a href={`${SITE_URL}/examen-civique`} style={a}>Où passer l&apos;examen civique : centres par département</a></li>
        </ul>

        {/* ── CTA final ── */}
        <h2 style={h2}>Prêt à lancer votre démarche ?</h2>
        <p style={p}>
          Pour un titre de séjour, tout se joue dans la <strong>préparation</strong> : identifiez le bon titre,
          vérifiez si votre démarche relève des nouveautés 2026 (examen civique + langue), et <strong>anticipez</strong>{' '}
          vos délais — surtout pour un renouvellement.
        </p>

        <EligibiliteCTA />

        {/* ── Sources ── */}
        <div style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--color-border)' }}>
          <p style={{ fontSize: 12.5, lineHeight: 1.7, color: 'var(--color-text-muted)', margin: '0 0 10px' }}>
            <strong>Sources officielles :</strong>{' '}
            <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F35799" target="_blank" rel="noopener" style={a}>
              service-public.fr « Carte de séjour pluriannuelle » (F35799) <ExternalLink size={11} style={{ display: 'inline' }} />
            </a>{' '}(vérifié 01/05/2026) ;{' '}
            <a href={TITRE_SEJOUR.sourceUrl} target="_blank" rel="noopener" style={a}>
              « … comment passer l&apos;examen civique ? » (F39530)
            </a>{' '}(vérifié le {new Date(TITRE_SEJOUR.verifieLe).toLocaleDateString('fr-FR')}) ; Direction générale des
            étrangers en France ; CESEDA (Légifrance).
          </p>
          <p style={{ fontSize: 12.5, lineHeight: 1.7, color: 'var(--color-text-muted)', margin: 0 }}>
            Les montants, délais et conditions peuvent évoluer : à vérifier auprès de votre préfecture. Cette page est
            publiée à titre informatif et ne remplace pas un avis juridique.
          </p>
        </div>
      </div>
    </main>
  );
}
