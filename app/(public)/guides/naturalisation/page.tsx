/**
 * Page pilier — Naturalisation française : guide complet 2026.
 *
 * ⚠️ RÈGLE N°2 : aucune valeur réglementaire en dur ici. Les chiffres (durée de
 * résidence, niveau de langue, format de l'examen, délais, coût, recours)
 * viennent de `lib/reglementation.ts`. À chaque réforme : un seul fichier.
 *
 * Sources : service-public.fr F2213 (vérifié 19/07/2026) et F11926,
 * Code civil art. 21-15 à 21-27.
 */

import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { EligibiliteCTA } from '@/components/eligibilite/EligibiliteCTA';
import {
  SITE_URL, ARTICLE_PILIER_URL, EXAMEN_CIVIQUE, NIVEAUX_LANGUE, NATURALISATION,
} from '@/lib/reglementation';

export const metadata: Metadata = {
  title: { absolute: 'Naturalisation française : le guide complet 2026' },
  description:
    "Conditions, voies d'accès, niveau B2, examen civique, démarche ANEF, délais et recours : le guide complet 2026 pour devenir français, sources officielles.",
  alternates: { canonical: `${SITE_URL}/guides/naturalisation` },
  openGraph: {
    title: 'Naturalisation française : le guide complet 2026',
    description:
      "Conditions, voies d'accès, niveau B2, examen civique, démarche ANEF, délais et recours — guide vérifié aux sources officielles.",
    url: `${SITE_URL}/guides/naturalisation`,
    locale: 'fr_FR',
    type: 'article',
  },
};

// ── Styles partagés ──────────────────────────────────────────────────────────
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

function Encadre({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: '#EEF4FF', border: '1px solid #BFDBFE',
      borderRadius: 'var(--radius-lg)', padding: '18px 22px', margin: '24px 0',
    }}>
      {children}
    </div>
  );
}

export default function GuideNaturalisationPage() {
  const dateMaj = new Date(NATURALISATION.verifieLe).toLocaleDateString('fr-FR', {
    month: 'long', year: 'numeric',
  });

  // JSON-LD : Article + BreadcrumbList. ⛔ Pas de FAQPage (rich results FAQ
  // retirés par Google en mai 2026) — la FAQ reste en HTML visible.
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Naturalisation française : le guide complet 2026',
      description:
        "Conditions, voies d'accès, niveau B2, examen civique, démarche ANEF, délais et recours.",
      inLanguage: 'fr',
      dateModified: NATURALISATION.verifieLe,
      author: { '@type': 'Organization', name: 'maformationcivique.fr', url: SITE_URL },
      publisher: { '@type': 'Organization', name: 'maformationcivique.fr', url: SITE_URL },
      mainEntityOfPage: `${SITE_URL}/guides/naturalisation`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides/naturalisation` },
        { '@type': 'ListItem', position: 3, name: 'Naturalisation', item: `${SITE_URL}/guides/naturalisation` },
      ],
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '40px 24px 80px' }}>

        <nav aria-label="Fil d'Ariane" style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 20 }}>
          <a href={SITE_URL} style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Accueil</a>
          {' › '}<span style={{ color: 'var(--color-text-secondary)' }}>Guide naturalisation</span>
        </nav>

        <h1 style={{ fontSize: 'clamp(27px, 4.5vw, 40px)', fontWeight: 800, lineHeight: 1.18, color: 'var(--color-text-primary)', marginBottom: 12 }}>
          Naturalisation française : le guide complet 2026
        </h1>
        <p style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 26 }}>
          Dernière mise à jour : {dateMaj}
        </p>

        <p style={p}>
          La <strong>naturalisation</strong> est la procédure qui permet à une personne étrangère de{' '}
          <strong>devenir française</strong>. Contrairement à la carte de résident, qui vous laisse étranger avec un
          titre de 10 ans, la naturalisation fait de vous un <strong>citoyen français</strong> : passeport, droit de
          vote, et un statut définitif.
        </p>
        <p style={p}>
          Il existe <strong>trois grandes voies</strong> : la <strong>naturalisation par décret</strong> (la plus
          courante, après plusieurs années de résidence), l&apos;acquisition <strong>par mariage</strong> avec un
          conjoint français, et la <strong>déclaration</strong> dans certaines situations familiales. Depuis le{' '}
          <strong>1ᵉʳ janvier 2026</strong>, deux conditions ont été renforcées pour tous : un{' '}
          <strong>niveau de français {NIVEAUX_LANGUE.naturalisation}</strong> et la réussite à l&apos;
          <strong>examen civique</strong>.
        </p>
        <p style={p}>
          Ce guide réunit l&apos;essentiel : conditions, voies d&apos;accès, démarches sur l&apos;ANEF, délais et
          préparation. Chaque section renvoie vers un guide détaillé quand vous voulez approfondir.
        </p>

        <EligibiliteCTA />

        {/* ── Conditions ── */}
        <h2 style={h2}>Les conditions de la naturalisation en 2026</h2>
        <p style={p}>
          Pour être naturalisé par décret, vous devez remplir <strong>plusieurs conditions en même temps</strong>{' '}
          (source : service-public.fr, fiche F2213, vérifiée le{' '}
          {new Date(NATURALISATION.verifieLe).toLocaleDateString('fr-FR')}).
        </p>

        <h3 style={h3}>La résidence en France</h3>
        <p style={p}>
          Vous devez justifier d&apos;une <strong>résidence habituelle et régulière en France depuis au moins{' '}
          {NATURALISATION.dureeResidenceAns} ans</strong> à la date de la demande. Vous devez aussi y avoir le{' '}
          <strong>centre de vos intérêts</strong> (travail, famille) au moment de la signature du décret.
        </p>
        <p style={p}>
          Cette durée peut être <strong>réduite à {NATURALISATION.dureeReduiteAns} ans</strong> dans certains cas, par
          exemple si vous avez accompli des études supérieures dans un établissement français. Elle peut même être{' '}
          <strong>supprimée</strong> dans des situations particulières (statut de réfugié, notamment). Ces exceptions
          sont précises : vérifiez la vôtre.
        </p>

        <h3 style={h3}>Les ressources et l&apos;insertion professionnelle</h3>
        <p style={p}>
          Vous devez disposer de <strong>ressources stables et suffisantes</strong> pour subvenir à vos besoins.
          L&apos;administration examine votre <strong>insertion professionnelle</strong> — pas seulement votre
          situation actuelle, mais la cohérence de votre parcours. Les travailleurs indépendants doivent aussi
          démontrer des revenus réguliers.
        </p>

        <h3 style={h3}>Le niveau de français : {NIVEAUX_LANGUE.naturalisation} depuis 2026</h3>
        <p style={p}>
          C&apos;est le changement majeur. Depuis le <strong>1ᵉʳ janvier 2026</strong>, il faut justifier d&apos;un
          niveau <strong>{NIVEAUX_LANGUE.naturalisation}</strong> à l&apos;oral <strong>et</strong> à l&apos;écrit
          (auparavant, le B1 suffisait). Ce niveau se prouve avec un diplôme français, un{' '}
          <strong>DELF {NIVEAUX_LANGUE.naturalisation}</strong>, ou une attestation <strong>TCF/TEF</strong> de moins
          de 2 ans.
        </p>
        <p style={p}>
          Attention : de nombreux sites affichent encore « B1 ». C&apos;est <strong>faux</strong> pour toute demande
          déposée en 2026. Pour tout comprendre (justificatifs acceptés, dispenses, pièges), lisez notre guide dédié :{' '}
          <a href={`${SITE_URL}/ressources/justificatif-niveau-francais-naturalisation-b2`} style={a}>
            Justificatif de niveau de français pour la naturalisation
          </a>.
        </p>

        <h3 style={h3}>L&apos;assimilation et le comportement</h3>
        <p style={p}>
          Vous devez être <strong>assimilé à la communauté française</strong> : adhésion aux principes et valeurs de
          la République, connaissance suffisante de l&apos;histoire et des institutions. Cette assimilation est
          vérifiée par l&apos;<strong>examen civique</strong> et par l&apos;<strong>entretien</strong> en préfecture.
          Enfin, votre <strong>casier judiciaire</strong> et votre comportement sont examinés : certaines
          condamnations sont incompatibles avec la naturalisation.
        </p>

        {/* ── Voies ── */}
        <h2 style={h2}>Les 3 voies d&apos;accès à la nationalité française</h2>
        <p style={p}>
          Toutes les demandes ne suivent pas le même chemin. Identifier <strong>votre</strong> voie est la première
          étape.
        </p>

        <h3 style={h3}>La naturalisation par décret</h3>
        <p style={p}>
          C&apos;est la voie la plus utilisée, prévue par l&apos;<strong>article 21-15 du Code civil</strong>. Elle
          s&apos;adresse à ceux qui ne relèvent d&apos;aucune autre procédure et remplissent les conditions de
          résidence ({NATURALISATION.dureeResidenceAns} ans en principe), de langue, de ressources et
          d&apos;assimilation. La décision appartient à l&apos;administration : c&apos;est une{' '}
          <strong>appréciation globale</strong> de votre parcours, pas un droit automatique.
        </p>

        <h3 style={h3}>L&apos;acquisition par mariage (déclaration)</h3>
        <p style={p}>
          Si vous êtes marié·e à une personne française, vous pouvez acquérir la nationalité par{' '}
          <strong>déclaration</strong>, sous conditions : une <strong>durée de mariage minimale</strong> (en principe
          4 ans, portée à 5 ans dans certains cas), une communauté de vie effective, et — depuis 2026 — le niveau{' '}
          {NIVEAUX_LANGUE.naturalisation} et l&apos;examen civique. Ce n&apos;est pas une naturalisation par décret :
          la procédure et les critères diffèrent.
        </p>

        <h3 style={h3}>La déclaration (liens familiaux)</h3>
        <p style={p}>
          D&apos;autres situations ouvrent droit à une acquisition par <strong>déclaration</strong> : par exemple
          certains liens de filiation (frère ou sœur de Français, ascendant…) prévus par le Code civil. Les
          conditions sont spécifiques à chaque cas. En cas de doute sur la voie qui vous concerne, commencez par le{' '}
          <a href={`${SITE_URL}/test-eligibilite`} style={a}>test d&apos;éligibilité</a>.
        </p>

        {/* ── Double prérequis ── */}
        <h2 style={h2}>Langue et examen civique : le double prérequis 2026</h2>
        <p style={p}>
          Depuis le 1ᵉʳ janvier 2026, un candidat à la naturalisation doit présenter <strong>deux éléments
          distincts</strong>, en plus du reste du dossier. Beaucoup les découvrent trop tard.
        </p>
        <p style={p}>
          <strong>1. La preuve du niveau de français {NIVEAUX_LANGUE.naturalisation}.</strong> À l&apos;oral et à
          l&apos;écrit, via un diplôme ou une attestation TCF/TEF de moins de 2 ans. C&apos;est une pièce de votre
          dossier.
        </p>
        <p style={p}>
          <strong>2. L&apos;attestation de réussite à l&apos;examen civique.</strong> Un{' '}
          <strong>QCM de {EXAMEN_CIVIQUE.nbQuestions} questions</strong>, avec{' '}
          <strong>{EXAMEN_CIVIQUE.seuilReussite} bonnes réponses sur {EXAMEN_CIVIQUE.nbQuestions}</strong> requises,
          passé dans un centre agréé, mention « naturalisation ». C&apos;est une épreuve séparée.
        </p>
        <p style={p}>
          Ces deux exigences sont <strong>indépendantes</strong> : réussir l&apos;examen civique ne prouve pas votre
          niveau de langue, et un {NIVEAUX_LANGUE.naturalisation} ne dispense pas de l&apos;examen civique. À ne pas
          confondre non plus avec l&apos;<strong>entretien d&apos;assimilation</strong> en préfecture, qui reste un
          échange oral distinct.
        </p>

        <Encadre>
          <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 10px' }}>
            Préparez les deux prérequis gratuitement
          </p>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14.5, lineHeight: 1.6 }}>
            <li><a href={`${SITE_URL}/examen/NAT`} style={a}>Test blanc de l&apos;examen civique (mention naturalisation)</a></li>
            <li><a href={`${SITE_URL}/moduleslinguistiques`} style={a}>Évaluer et travailler mon niveau de français</a></li>
            <li><a href={`${SITE_URL}/examen-civique`} style={a}>Trouver un centre d&apos;examen près de chez moi</a></li>
          </ul>
        </Encadre>

        <p style={p}>
          Pour aller plus loin sur l&apos;épreuve civique, consultez notre guide{' '}
          <a href={ARTICLE_PILIER_URL} style={a}>Examen civique 2026 : questions et réponses</a>.
        </p>

        {/* ── ANEF ── */}
        <h2 style={h2}>La demande sur l&apos;ANEF, étape par étape</h2>
        <p style={p}>
          Depuis la dématérialisation, la demande de naturalisation se fait <strong>en ligne</strong>, sur la
          plateforme <strong>ANEF</strong> (Administration numérique des étrangers en France). Voici le parcours.
        </p>
        <ol style={{ margin: '0 0 20px', paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            <>« <strong>Préparez vos prérequis</strong> » : passez l&apos;examen civique et obtenez votre justificatif {NIVEAUX_LANGUE.naturalisation} avant d&apos;ouvrir la demande. Un dossier incomplet rallonge tout.</>,
            <><strong>Rassemblez les pièces</strong> : état civil, justificatifs de résidence sur {NATURALISATION.dureeResidenceAns} ans, ressources, casier judiciaire, langue, examen civique.</>,
            <><strong>Déposez en ligne</strong> sur l&apos;ANEF et payez le timbre fiscal.</>,
            <><strong>Recevez votre récépissé</strong>, puis suivez l&apos;instruction directement en ligne.</>,
            <><strong>Répondez rapidement</strong> à toute demande de complément : c&apos;est une cause fréquente de retard.</>,
            <><strong>Passez l&apos;entretien d&apos;assimilation</strong> en préfecture, étape déterminante.</>,
          ].map((etape, i) => (
            <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: 'var(--color-blue-france)', color: '#fff', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
              <span style={{ fontSize: 15.5, lineHeight: 1.7, color: 'var(--color-text-secondary)', paddingTop: 2 }}>{etape}</span>
            </li>
          ))}
        </ol>
        <p style={p}>
          <strong>Coût :</strong> la demande suppose un <strong>timbre fiscal de {NATURALISATION.coutTimbreEuros} €</strong>{' '}
          (source : service-public.fr). Ce montant peut évoluer : vérifiez-le au moment du dépôt.
        </p>

        {/* ── Délais ── */}
        <h2 style={h2}>Délais, décret et après le dépôt</h2>

        <h3 style={h3}>Combien de temps pour une réponse ?</h3>
        <p style={p}>
          L&apos;administration dispose en principe de <strong>{NATURALISATION.delaiReponseMois} mois</strong> à
          compter de la remise du récépissé pour se prononcer (délai réduit à{' '}
          <strong>{NATURALISATION.delaiReponseMoisResident10Ans} mois</strong> si vous résidez en France depuis au
          moins 10 ans). Ce délai peut être <strong>prolongé une seule fois de {NATURALISATION.prolongationMois} mois</strong>,
          par décision motivée. Ces délais sont des <strong>plafonds légaux</strong>, pas une garantie : les délais
          réels varient selon les services et le volume de dossiers.
        </p>

        <h3 style={h3}>La décision : décret, ajournement ou refus</h3>
        <p style={p}>
          Trois issues sont possibles. En cas d&apos;<strong>accord</strong>, un <strong>décret de naturalisation</strong>{' '}
          est signé, puis <strong>publié au Journal officiel</strong> : la date de publication est votre{' '}
          <strong>date officielle d&apos;acquisition</strong> de la nationalité. Conservez précieusement
          l&apos;extrait du JO.
        </p>
        <p style={p}>
          En cas d&apos;<strong>ajournement</strong>, l&apos;administration estime que les conditions ne sont pas
          encore réunies et fixe un délai avant de redéposer. En cas de <strong>refus</strong>, la décision est
          motivée.
        </p>

        <h3 style={h3}>Les recours</h3>
        <p style={p}>
          Si votre demande est rejetée ou ajournée, vous devez d&apos;abord exercer un{' '}
          <strong>recours administratif préalable auprès du ministre</strong> chargé des naturalisations, dans un
          délai de <strong>{NATURALISATION.delaiRecoursAdministratifMois} mois</strong> suivant la notification. Ce
          recours est <strong>obligatoire</strong> : il conditionne la recevabilité de la suite. Ensuite seulement,
          vous pouvez saisir le <strong>{NATURALISATION.tribunalCompetent}</strong>, seul compétent en matière de
          nationalité, dans les {NATURALISATION.delaiRecoursAdministratifMois} mois suivant le rejet — ou l&apos;absence
          de réponse dans les 4 mois.
        </p>

        {/* ── FAQ (HTML visible, sans balisage FAQPage) ── */}
        <h2 style={h2}>Questions fréquentes</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            {
              q: 'Quelles sont les conditions pour être naturalisé français en 2026 ?',
              r: `Résider en France depuis au moins ${NATURALISATION.dureeResidenceAns} ans (avec des exceptions), disposer de ressources stables, justifier d'un niveau de français ${NIVEAUX_LANGUE.naturalisation}, réussir l'examen civique, être assimilé à la communauté française et avoir un comportement compatible avec la nationalité.`,
            },
            {
              q: 'Quel niveau de français faut-il pour la naturalisation ?',
              r: `Le niveau ${NIVEAUX_LANGUE.naturalisation} à l'oral et à l'écrit, depuis le 1ᵉʳ janvier 2026 (auparavant B1). Il se prouve avec un diplôme français, un DELF ${NIVEAUX_LANGUE.naturalisation} ou une attestation TCF/TEF de moins de 2 ans.`,
            },
            {
              q: 'Combien de temps prend une demande de naturalisation ?',
              r: `En principe ${NATURALISATION.delaiReponseMois} mois maximum après le récépissé (${NATURALISATION.delaiReponseMoisResident10Ans} mois si vous résidez en France depuis au moins 10 ans), avec une prolongation possible de ${NATURALISATION.prolongationMois} mois. Les délais réels varient selon les services.`,
            },
            {
              q: 'Quelle est la différence entre naturalisation par décret et par mariage ?',
              r: `La naturalisation par décret s'adresse aux personnes remplissant une condition de résidence (${NATURALISATION.dureeResidenceAns} ans en principe). L'acquisition par mariage est une déclaration ouverte aux conjoints de Français, sous condition de durée de mariage et de vie commune.`,
            },
            {
              q: 'Comment savoir si mon décret de naturalisation est publié ?',
              r: "Le décret est publié au Journal officiel. Sa date de publication est votre date d'acquisition de la nationalité. Vous pouvez suivre l'avancement de votre dossier sur l'ANEF.",
            },
            {
              q: 'Que faire en cas de refus ou d\'ajournement ?',
              r: `Vous devez d'abord faire un recours administratif auprès du ministre dans les ${NATURALISATION.delaiRecoursAdministratifMois} mois — cette étape est obligatoire — puis, en cas de rejet, saisir le ${NATURALISATION.tribunalCompetent}. Un ajournement n'est pas définitif : il indique ce qui doit être renforcé.`,
            },
          ].map(({ q, r }) => (
            <div key={q} style={{ background: 'var(--color-surface)', border: 'var(--border-default)', borderRadius: 'var(--radius-lg)', padding: '18px 22px' }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 8px' }}>{q}</p>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--color-text-secondary)', margin: 0 }}>{r}</p>
            </div>
          ))}
        </div>

        {/* ── Aller plus loin ── */}
        <h2 style={h2}>Aller plus loin : nos guides détaillés</h2>
        <ul style={{ margin: '0 0 20px', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9, fontSize: 15, lineHeight: 1.6 }}>
          <li><a href={`${SITE_URL}/ressources/justificatif-niveau-francais-naturalisation-b2`} style={a}>Justificatif de niveau de français pour la naturalisation : le {NIVEAUX_LANGUE.naturalisation} en 2026</a></li>
          <li><a href={ARTICLE_PILIER_URL} style={a}>Examen civique 2026 : questions et réponses</a></li>
          <li><a href={`${SITE_URL}/ressources/nationalite-francaise-algeriens-conditions-delais`} style={a}>Nationalité française pour les Algériens : conditions et délais</a></li>
          <li><a href={`${SITE_URL}/ressources/carte-resident-10-ans-premiere-demande`} style={a}>Carte de résident 10 ans : première demande et conditions</a></li>
          <li><a href={`${SITE_URL}/examen-civique`} style={a}>Où passer l&apos;examen civique : centres par département</a></li>
        </ul>

        {/* ── CTA final ── */}
        <h2 style={h2}>Prêt à lancer votre démarche ?</h2>
        <p style={p}>
          La naturalisation se prépare dans le bon ordre : <strong>vérifiez d&apos;abord votre éligibilité</strong>,
          puis validez les deux prérequis 2026 (niveau {NIVEAUX_LANGUE.naturalisation} et examen civique) avant de
          constituer votre dossier ANEF. Vous éviterez les demandes de complément et les mauvaises surprises.
        </p>

        <EligibiliteCTA />

        {/* ── Sources & mentions ── */}
        <div style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--color-border)' }}>
          <p style={{ fontSize: 12.5, lineHeight: 1.7, color: 'var(--color-text-muted)', margin: '0 0 10px' }}>
            <strong>Sources officielles :</strong>{' '}
            <a href={NATURALISATION.sourceUrl} target="_blank" rel="noopener" style={a}>
              service-public.fr, « Naturalisation française par décret » (F2213) <ExternalLink size={11} style={{ display: 'inline' }} />
            </a>{' '}
            — vérifié le {new Date(NATURALISATION.verifieLe).toLocaleDateString('fr-FR')} ;{' '}
            <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F11926" target="_blank" rel="noopener" style={a}>
              « Comment justifier de son niveau en français ? » (F11926)
            </a>{' '}
            ; Code civil, articles 21-15 à 21-27 (Légifrance) ; arrêté du 10 octobre 2025 (examen civique).
          </p>
          <p style={{ fontSize: 12.5, lineHeight: 1.7, color: 'var(--color-text-muted)', margin: 0 }}>
            Les montants, délais et conditions peuvent évoluer : à vérifier auprès de votre préfecture, les délais
            peuvent varier. Cette page est publiée à titre informatif et ne remplace pas un avis juridique.
          </p>
        </div>
      </div>
    </main>
  );
}
