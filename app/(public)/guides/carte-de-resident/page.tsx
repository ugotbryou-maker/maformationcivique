/**
 * Page pilier — Carte de résident : le guide complet 2026.
 *
 * ⚠️ RÈGLE N°2 : aucune valeur réglementaire en dur. Niveau de langue, format
 * de l'examen, fenêtre de renouvellement, coût — tout vient de
 * lib/reglementation.ts.
 *
 * Sources : service-public.fr F2208 (vérifié 01/07/2026), F17359 (coût),
 * F39530 (examen civique). Accord franco-algérien du 27/12/1968.
 */

import type { Metadata } from 'next';
import { ExternalLink, CreditCard, ShieldCheck, Layers, CheckCircle2, XCircle } from 'lucide-react';
import { EligibiliteCTA } from '@/components/eligibilite/EligibiliteCTA';
import {
  SITE_URL, ARTICLE_PILIER_URL, EXAMEN_CIVIQUE, NIVEAUX_LANGUE, TITRE_SEJOUR, CARTE_RESIDENT,
} from '@/lib/reglementation';

export const metadata: Metadata = {
  title: { absolute: 'Carte de résident : le guide complet 2026' },
  description:
    "Carte de résident 10 ans : conditions, niveau B1, examen civique 2026, première demande, renouvellement, carte permanente, démarche ANEF et coût.",
  alternates: { canonical: `${SITE_URL}/guides/carte-de-resident` },
  openGraph: {
    title: 'Carte de résident : le guide complet 2026',
    description:
      "Conditions, niveau B1, examen civique, première demande et renouvellement de la carte de résident 10 ans.",
    url: `${SITE_URL}/guides/carte-de-resident`,
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

export default function GuideCarteResidentPage() {
  const dateMaj = new Date(CARTE_RESIDENT.verifieLe).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Carte de résident : le guide complet 2026',
      description: "Conditions, niveau B1, examen civique 2026, première demande, renouvellement, carte permanente, ANEF et coût.",
      inLanguage: 'fr',
      dateModified: CARTE_RESIDENT.verifieLe,
      author: { '@type': 'Organization', name: 'maformationcivique.fr', url: SITE_URL },
      publisher: { '@type': 'Organization', name: 'maformationcivique.fr', url: SITE_URL },
      mainEntityOfPage: `${SITE_URL}/guides/carte-de-resident`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
        { '@type': 'ListItem', position: 3, name: 'Carte de résident', item: `${SITE_URL}/guides/carte-de-resident` },
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
          backgroundImage: 'url(/images/modules/fronton-hotel-dieu.jpg)',
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
            {' › '}<span style={{ color: 'rgba(255,255,255,0.9)' }}>Carte de résident</span>
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
            Carte de résident :<br />le guide complet 2026
          </h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: 'rgba(255,255,255,0.88)', margin: 0, maxWidth: 560 }}>
            Conditions, niveau {NIVEAUX_LANGUE.carteResident}, examen civique, première demande, renouvellement et
            carte permanente — l&apos;essentiel vérifié aux sources officielles.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '40px 24px 80px' }}>

        <p style={p}>
          La <strong>carte de résident</strong> est un titre de séjour qui autorise une personne étrangère à{' '}
          <strong>vivre et travailler en France pendant {CARTE_RESIDENT.dureeAns} ans</strong>, sans avoir à demander
          d&apos;autorisation de travail. C&apos;est l&apos;un des titres les plus protecteurs, et souvent une étape
          avant la naturalisation.
        </p>
        <p style={p}>
          Il faut la distinguer de deux titres proches : la <strong>carte pluriannuelle</strong> (2 à 4 ans), plus
          courte, et la <strong>carte de résident permanent</strong>, à durée indéfinie. Depuis le{' '}
          <strong>1ᵉʳ janvier 2026</strong>, une <strong>première demande</strong> de carte de résident exige un
          niveau de français <strong>{NIVEAUX_LANGUE.carteResident}</strong> et la réussite à l&apos;
          <strong>examen civique</strong> — mais le renouvellement, lui, n&apos;y est pas soumis.
        </p>

        <EligibiliteCTA />

        {/* ── Les 3 titres proches — grille façon Apple ── */}
        <h2 style={h2}>Carte de résident, permanente, pluriannuelle : quelles différences ?</h2>
        <p style={p}>C&apos;est la première source de confusion. Voici comment les distinguer.</p>

        <div className="cr-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, margin: '28px 0 8px' }}>
          <div className="cr-featured" style={{ gridColumn: 'span 2' }}>
            <CreditCard size={30} color="var(--color-text-primary)" strokeWidth={2.2} />
            <h3 style={{ fontSize: 'clamp(22px, 3.4vw, 30px)', fontWeight: 800, lineHeight: 1.12, color: 'var(--color-text-primary)', margin: '18px 0 12px', letterSpacing: '-0.02em' }}>
              Carte de résident ({CARTE_RESIDENT.dureeAns} ans)
            </h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.65, color: 'var(--color-text-secondary)', margin: 0 }}>
              Valable <strong>{CARTE_RESIDENT.dureeAns} ans</strong> et renouvelable, elle autorise à{' '}
              <strong>travailler librement</strong>. Elle s&apos;obtient soit <strong>de plein droit</strong> (conjoint
              de Français, réfugié…), soit après plusieurs années de résidence régulière, sous conditions.
            </p>
          </div>

          {[
            {
              icon: ShieldCheck,
              titre: 'Carte de résident permanent',
              desc: <>À <strong>durée indéfinie</strong>, accessible après une première carte de résident (souvent à son premier renouvellement). Plus de titre à renouveler périodiquement : votre séjour est durablement sécurisé.</>,
            },
            {
              icon: Layers,
              titre: 'Carte pluriannuelle (2 à 4 ans)',
              desc: <>Plus courte, elle <strong>précède souvent</strong> la carte de résident dans le parcours.</>,
              lien: { href: `${SITE_URL}/guides/titre-de-sejour`, label: 'Le guide des titres de séjour' },
            },
          ].map(({ icon: Icon, titre, desc, lien }) => (
            <div key={titre} style={{ gridColumn: 'span 2' }}>
              <Icon size={26} color="var(--color-text-primary)" strokeWidth={2.2} />
              <h3 style={{ fontSize: 17.5, fontWeight: 800, lineHeight: 1.25, color: 'var(--color-text-primary)', margin: '14px 0 8px', letterSpacing: '-0.01em' }}>
                {titre}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0 }}>{desc}</p>
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
            .cr-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; }
            .cr-featured { grid-column: span 2 !important; }
          }
          @media (max-width: 520px) {
            .cr-grid { grid-template-columns: 1fr !important; }
            .cr-featured { grid-column: span 1 !important; }
            .cr-concern { grid-template-columns: 1fr !important; }
          }
          .faq-summary::-webkit-details-marker { display: none; }
          .faq-summary { list-style: none; }
          .faq-item[open] .faq-chevron { transform: rotate(180deg); }
        `}</style>

        {/* ── Conditions ── */}
        <h2 style={h2}>Les conditions de la carte de résident en 2026</h2>
        <p style={p}>
          Au-delà de la voie d&apos;accès, plusieurs conditions communes s&apos;appliquent (source :
          service-public.fr, fiche F2208, vérifiée le 1ᵉʳ juillet 2026).
        </p>

        <h3 style={h3}>La résidence en France</h3>
        <p style={p}>
          Une <strong>résidence habituelle et régulière</strong> en France, avec le centre de vos intérêts ici (au
          moins 6 mois par an). Selon la voie, une durée préalable de résidence régulière est demandée (souvent 3 ou
          5 ans).
        </p>

        <h3 style={h3}>Les ressources</h3>
        <p style={p}>
          Des <strong>ressources stables et suffisantes</strong>, en principe au moins équivalentes au SMIC. Les
          prestations sociales ne sont pas toujours prises en compte.
        </p>

        <h3 style={h3}>Le niveau de français {NIVEAUX_LANGUE.carteResident} (nouveauté 2026)</h3>
        <p style={p}>
          Pour une <strong>première</strong> carte de résident, un niveau <strong>{NIVEAUX_LANGUE.carteResident}</strong>{' '}
          à l&apos;oral et à l&apos;écrit est désormais exigé (sauf dispense, par exemple à partir de 65 ans). Il se
          prouve avec un test TCF/TEF ou un diplôme DELF. À ne pas confondre avec le{' '}
          {NIVEAUX_LANGUE.naturalisation} exigé pour la naturalisation.
        </p>

        <h3 style={h3}>L&apos;examen civique (nouveauté 2026)</h3>
        <p style={p}>
          Une première demande suppose la réussite à l&apos;<strong>examen civique</strong>, mention « carte de
          résident » : un QCM de <strong>{EXAMEN_CIVIQUE.nbQuestions} questions</strong> ({EXAMEN_CIVIQUE.seuilReussite}
          {' '}bonnes réponses requises). Sont dispensés notamment les bénéficiaires d&apos;une protection
          internationale et certains accords bilatéraux (comme les Algériens).
        </p>

        {/* ── Première demande vs renouvellement ── */}
        <h2 style={h2}>Première demande ou renouvellement ?</h2>

        <div className="cr-concern" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '8px 0' }}>
          <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 'var(--radius-lg)', padding: '20px 22px' }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 800, color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 12px' }}>
              <CheckCircle2 size={17} /> Première demande
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--color-text-secondary)', margin: 0 }}>
              Plusieurs voies : <strong>liens familiaux</strong> (conjoint de Français, parent d&apos;enfant français,
              regroupement familial), <strong>résidence longue durée</strong> (au moins 5 ans, carte « résident de
              longue durée-UE »), <strong>protection internationale</strong>. + examen civique et niveau{' '}
              {NIVEAUX_LANGUE.carteResident}.
            </p>
          </div>
          <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: 'var(--radius-lg)', padding: '20px 22px' }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 800, color: '#047857', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 12px' }}>
              <XCircle size={17} /> Renouvellement
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--color-text-secondary)', margin: 0 }}>
              À déposer <strong>entre {TITRE_SEJOUR.renouvellementAvantMoisMax} et {TITRE_SEJOUR.renouvellementAvantMoisMin} mois avant l&apos;expiration</strong>.
              Le récépissé prolonge vos droits (séjour et travail). <strong>Ni examen civique, ni nouvelle
              justification de {NIVEAUX_LANGUE.carteResident}</strong> — et vous pouvez souvent demander la carte
              permanente.
            </p>
          </div>
        </div>
        <p style={p}>
          Dans certains cas la carte est délivrée <strong>de plein droit</strong> ; dans d&apos;autres, elle relève de
          l&apos;<strong>appréciation du préfet</strong>. Pour le détail des pièces et du parcours, voir notre guide{' '}
          <a href={`${SITE_URL}/ressources/carte-resident-10-ans-premiere-demande`} style={a}>
            Carte de résident 10 ans : première demande et conditions
          </a>. En cas de doute sur votre voie, commencez par le{' '}
          <a href={`${SITE_URL}/test-eligibilite`} style={a}>test d&apos;éligibilité</a>.
        </p>

        {/* ── ANEF & coût — timeline ── */}
        <h2 style={h2}>La demande sur l&apos;ANEF et le coût</h2>
        <ol style={{ margin: '0 0 20px', paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            <><strong>Préparez vos pièces</strong> (et, pour une première demande, l&apos;examen civique et le justificatif {NIVEAUX_LANGUE.carteResident}) avant d&apos;ouvrir la démarche.</>,
            <><strong>Connectez-vous à l&apos;ANEF</strong> et sélectionnez la démarche « carte de résident ».</>,
            <><strong>Téléversez les documents</strong> et vérifiez chaque pièce.</>,
            <><strong>Payez les timbres fiscaux</strong> demandés.</>,
            <><strong>Recevez votre récépissé</strong>, puis suivez l&apos;instruction en ligne.</>,
          ].map((etape, i) => (
            <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: 'var(--color-blue-france)', color: '#fff', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
              <span style={{ fontSize: 15.5, lineHeight: 1.7, color: 'var(--color-text-secondary)', paddingTop: 2 }}>{etape}</span>
            </li>
          ))}
        </ol>
        <p style={p}>
          <strong>Coût :</strong> il se règle par timbre fiscal. À titre de repère, la carte « résident de longue
          durée-UE » coûte <strong>{CARTE_RESIDENT.coutPremiereDelivranceEuros} €</strong> en première délivrance
          ({CARTE_RESIDENT.coutAvecTitreValideEuros} € si vous détenez déjà un titre valide). Les tarifs ont évolué au
          1ᵉʳ mai 2026 : vérifiez le montant exact sur{' '}
          <a href={CARTE_RESIDENT.sourceCoutUrl} target="_blank" rel="noopener" style={a}>
            service-public.fr <ExternalLink size={11} style={{ display: 'inline' }} />
          </a>{' '}ou timbres.impots.gouv.fr.
        </p>

        {/* ── Cas Algériens ── */}
        <h2 style={h2}>Cas particulier : les Algériens</h2>
        <div style={{ background: '#EEF4FF', border: '1px solid #BFDBFE', borderRadius: 'var(--radius-lg)', padding: '20px 22px' }}>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--color-text-secondary)', margin: 0 }}>
            De nationalité algérienne, vous ne relevez pas de la carte de résident classique : votre séjour est régi
            par l&apos;<strong>accord franco-algérien du 27 décembre 1968</strong>, et le titre équivalent est le{' '}
            <strong>certificat de résidence algérien</strong> (valable 10 ans dans les cas correspondants). Vous êtes
            par ailleurs <strong>dispensé de l&apos;examen civique</strong>. La démarche et les pièces diffèrent :
            vérifiez la procédure « certificat de résidence » sur service-public.fr.
          </p>
        </div>

        {/* ── FAQ accordéon ── */}
        <h2 style={h2}>Questions fréquentes</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            {
              q: 'Quelles sont les conditions pour obtenir une carte de résident en 2026 ?',
              r: `Une résidence habituelle en France, des ressources stables (niveau SMIC en principe), un niveau de français ${NIVEAUX_LANGUE.carteResident}, la réussite à l'examen civique (pour une première demande) et le respect des principes de la République. La voie d'accès (famille, résidence, protection) ajoute ses conditions.`,
            },
            {
              q: 'Quelle est la différence entre carte de résident et carte de résident permanent ?',
              r: `La carte de résident est valable ${CARTE_RESIDENT.dureeAns} ans et renouvelable. La carte de résident permanent est à durée indéfinie et s'obtient après une première carte de résident, souvent à son renouvellement.`,
            },
            {
              q: 'Faut-il passer l\'examen civique pour la carte de résident ?',
              r: `Oui, pour une première demande de carte de résident (mention « carte de résident »). Le renouvellement n'est pas concerné. Les bénéficiaires d'une protection internationale et les Algériens en sont dispensés.`,
            },
            {
              q: 'Quel niveau de français faut-il pour la carte de résident ?',
              r: `Le niveau ${NIVEAUX_LANGUE.carteResident} à l'oral et à l'écrit pour une première demande (sauf dispense, par exemple à partir de 65 ans). C'est différent du ${NIVEAUX_LANGUE.naturalisation} exigé pour la naturalisation.`,
            },
            {
              q: 'Quand renouveler sa carte de résident ?',
              r: `En principe entre ${TITRE_SEJOUR.renouvellementAvantMoisMax} et ${TITRE_SEJOUR.renouvellementAvantMoisMin} mois avant l'expiration. Déposer à temps donne droit à un récépissé qui prolonge vos droits pendant l'instruction.`,
            },
            {
              q: 'La carte de résident permet-elle de travailler ?',
              r: 'Oui, elle autorise à travailler librement en France, sans autorisation de travail à demander par l\'employeur.',
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
          <li><a href={`${SITE_URL}/ressources/nationalite-francaise-algeriens-conditions-delais`} style={a}>Nationalité française pour les Algériens : conditions et délais</a></li>
          <li><a href={`${SITE_URL}/guides/naturalisation`} style={a}>Naturalisation française : le guide complet 2026</a></li>
          <li><a href={`${SITE_URL}/guides/titre-de-sejour`} style={a}>Titre de séjour : le guide complet 2026</a></li>
        </ul>

        {/* ── CTA final ── */}
        <h2 style={h2}>Prêt à lancer votre démarche ?</h2>
        <p style={p}>
          Pour une carte de résident, préparez dans le bon ordre : vérifiez votre éligibilité et votre voie
          d&apos;accès, puis validez les nouveautés 2026 (niveau {NIVEAUX_LANGUE.carteResident} et examen civique)
          avant de constituer votre dossier ANEF.
        </p>

        <EligibiliteCTA />

        {/* ── Sources ── */}
        <div style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--color-border)' }}>
          <p style={{ fontSize: 12.5, lineHeight: 1.7, color: 'var(--color-text-muted)', margin: '0 0 10px' }}>
            <strong>Sources officielles :</strong>{' '}
            <a href={CARTE_RESIDENT.sourceUrl} target="_blank" rel="noopener" style={a}>
              service-public.fr « Carte de résident de 10 ans » (F2208) <ExternalLink size={11} style={{ display: 'inline' }} />
            </a>{' '}(vérifié 01/07/2026) ;{' '}
            <a href={CARTE_RESIDENT.sourceCoutUrl} target="_blank" rel="noopener" style={a}>
              « Carte de résident de longue durée-UE » (F17359)
            </a>{' '}(coût, vérifié le {new Date(CARTE_RESIDENT.verifieLe).toLocaleDateString('fr-FR')}) ;{' '}
            « … comment passer l&apos;examen civique ? » (F39530) ; accord franco-algérien du 27 décembre 1968.
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
