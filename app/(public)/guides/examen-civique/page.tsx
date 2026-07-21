/**
 * Page hub — Examen civique 2026 : tout savoir.
 *
 * Cible le terme tête de réseau « examen civique » (18 100 rech./mois) et
 * redistribue vers les spokes : test blanc (/examen), centres (/examen-civique),
 * cours (/modulesciviques), quiz (/quiz), article questions (/ressources/...),
 * et les 3 guides de démarche.
 *
 * ⚠️ RÈGLE N°2 : format de l'épreuve, niveaux, champ d'application viennent de
 * lib/reglementation.ts. On n'invente aucun PRIX (fixé par chaque centre agréé).
 *
 * Mise en page volontairement différente des guides de démarche : bande de KPI
 * + cartes-portail vers les ressources.
 */

import type { Metadata } from 'next';
import {
  ExternalLink, Users, Wallet, MapPin, GraduationCap, FileText, ArrowRight, CheckCircle2, XCircle,
} from 'lucide-react';
import { EligibiliteCTA } from '@/components/eligibilite/EligibiliteCTA';
import {
  SITE_URL, ARTICLE_PILIER_URL, EXAMEN_CIVIQUE, NIVEAUX_LANGUE, TITRE_SEJOUR,
} from '@/lib/reglementation';

export const metadata: Metadata = {
  title: { absolute: 'Examen civique 2026 : tout savoir (format, qui, où)' },
  description:
    "Examen civique 2026 : qui est concerné, format des 40 questions, où le passer et comment se préparer gratuitement. Guide de référence, sources officielles.",
  alternates: { canonical: `${SITE_URL}/guides/examen-civique` },
  openGraph: {
    title: 'Examen civique 2026 : tout savoir',
    description:
      "Qui est concerné, format des 40 questions, où le passer et comment se préparer gratuitement.",
    url: `${SITE_URL}/guides/examen-civique`,
    locale: 'fr_FR',
    type: 'article',
  },
};

const h2: React.CSSProperties = {
  fontSize: 'clamp(21px, 3vw, 27px)', fontWeight: 800,
  color: 'var(--color-text-primary)', margin: '48px 0 16px', lineHeight: 1.3,
};
const p: React.CSSProperties = {
  fontSize: 16, lineHeight: 1.8, color: 'var(--color-text-secondary)', margin: '0 0 16px',
};
const a: React.CSSProperties = { color: 'var(--color-blue-france)' };

export default function HubExamenCiviquePage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Examen civique 2026 : tout savoir',
      description: "Qui est concerné, format des 40 questions, où le passer, comment se préparer.",
      inLanguage: 'fr',
      dateModified: EXAMEN_CIVIQUE.verifieLe,
      author: { '@type': 'Organization', name: 'maformationcivique.fr', url: SITE_URL },
      publisher: { '@type': 'Organization', name: 'maformationcivique.fr', url: SITE_URL },
      mainEntityOfPage: `${SITE_URL}/guides/examen-civique`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Examen civique', item: `${SITE_URL}/guides/examen-civique` },
      ],
    },
  ];

  const kpis = [
    { valeur: EXAMEN_CIVIQUE.nbQuestions, label: 'questions (QCM)' },
    { valeur: `${EXAMEN_CIVIQUE.seuilReussite}/${EXAMEN_CIVIQUE.nbQuestions}`, label: 'pour réussir (80 %)' },
    { valeur: `${EXAMEN_CIVIQUE.dureeMinutes} min`, label: 'durée maximale' },
    { valeur: '2026', label: 'obligatoire depuis le 1ᵉʳ janv.' },
  ];

  const ressources = [
    {
      icon: GraduationCap, accent: '#059669', fond: '#ECFDF5',
      titre: 'S\'entraîner gratuitement',
      desc: 'Test blanc chronométré au format officiel, mention naturalisation, CSP ou carte de résident.',
      href: `${SITE_URL}/examen`, cta: 'Passer un examen blanc',
    },
    {
      icon: MapPin, accent: '#002395', fond: '#EEF4FF',
      titre: 'Où passer l\'examen',
      desc: 'Centres agréés par département, ressources officielles et interlocuteur OFII local.',
      href: `${SITE_URL}/examen-civique`, cta: 'Trouver un centre',
    },
    {
      icon: FileText, accent: '#B45309', fond: '#FFFBEB',
      titre: 'Les questions et le format',
      desc: `Les ${EXAMEN_CIVIQUE.nbQuestions} questions, les thèmes et la liste officielle expliqués en détail.`,
      href: ARTICLE_PILIER_URL, cta: 'Questions & réponses',
    },
    {
      icon: Users, accent: '#7C3AED', fond: '#F5F3FF',
      titre: 'Se préparer à fond',
      desc: 'Modules civiques structurés : institutions, histoire, valeurs de la République.',
      href: `${SITE_URL}/modulesciviques`, cta: 'Découvrir les modules',
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/modules/hemicycle-parlement-europeen.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center 35%',
        }} />
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(0,26,112,0.94) 0%, rgba(0,35,149,0.90) 55%, rgba(204,26,26,0.86) 100%)',
        }} />
        <div style={{ height: 3, background: 'linear-gradient(90deg,#002395 33%,#fff 33% 66%,#ED2939 66%)', position: 'relative' }} />

        <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto', padding: '52px 24px 40px' }}>
          <nav aria-label="Fil d'Ariane" style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 18 }}>
            <a href={SITE_URL} style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>Accueil</a>
            {' › '}<span style={{ color: 'rgba(255,255,255,0.9)' }}>Examen civique</span>
          </nav>
          <h1 style={{
            fontSize: 'clamp(29px, 5vw, 46px)', fontWeight: 800, lineHeight: 1.12,
            color: '#fff', margin: '0 0 16px', textShadow: '0 2px 20px rgba(0,0,0,0.25)',
          }}>
            Examen civique 2026 :<br />tout ce qu&apos;il faut savoir
          </h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: 'rgba(255,255,255,0.9)', margin: 0, maxWidth: 580 }}>
            Qui est concerné, en quoi consiste l&apos;épreuve, où la passer et comment s&apos;y préparer
            gratuitement — le point complet, vérifié aux sources officielles.
          </p>
        </div>

        {/* Bande KPI intégrée au hero */}
        <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto', padding: '0 24px 40px' }}>
          <div className="kpi-band" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {kpis.map(({ valeur, label }) => (
              <div key={label} style={{
                background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 'var(--radius-lg)', padding: '16px 18px', backdropFilter: 'blur(6px)',
              }}>
                <p style={{ fontSize: 28, fontWeight: 900, color: '#fff', margin: '0 0 2px', lineHeight: 1, letterSpacing: '-0.02em' }}>{valeur}</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.3 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '40px 24px 80px' }}>

        {/* ── C'est quoi ── */}
        <h2 style={{ ...h2, marginTop: 8 }}>Qu&apos;est-ce que l&apos;examen civique ?</h2>
        <p style={p}>
          L&apos;<strong>examen civique</strong> est une épreuve introduite au{' '}
          <strong>1ᵉʳ janvier 2026</strong> pour certaines démarches des personnes étrangères. C&apos;est un{' '}
          <strong>QCM de {EXAMEN_CIVIQUE.nbQuestions} questions</strong> en français, à passer dans un centre agréé,
          avec <strong>{EXAMEN_CIVIQUE.seuilReussite} bonnes réponses sur {EXAMEN_CIVIQUE.nbQuestions} requises</strong>{' '}
          (soit 80 %) et une durée maximale de {EXAMEN_CIVIQUE.dureeMinutes} minutes. Il porte sur les{' '}
          <strong>institutions, l&apos;histoire, la laïcité et les valeurs</strong> de la République.
        </p>
        <p style={p}>
          Il ne doit pas être confondu avec l&apos;<strong>entretien d&apos;assimilation</strong> (un échange oral en
          préfecture, pour la naturalisation) ni avec la <strong>preuve du niveau de français</strong>, qui est une
          exigence <em>séparée</em>.
        </p>

        {/* ── Qui est concerné / dispensé ── */}
        <h2 style={h2}>Qui est concerné ? Qui est dispensé ?</h2>
        <p style={p}>
          C&apos;est la question la plus posée — et la plus mal comprise. L&apos;examen n&apos;est exigé que pour
          certaines <strong>premières demandes</strong>.
        </p>
        <div className="concern" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '20px 0 8px' }}>
          <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: 'var(--radius-lg)', padding: '20px 22px' }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 800, color: '#047857', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 12px' }}>
              <CheckCircle2 size={17} /> Concerné (première demande)
            </p>
            <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, lineHeight: 1.55, color: 'var(--color-text-secondary)' }}>
              <li>Première <strong>carte de séjour pluriannuelle</strong> (niveau {NIVEAUX_LANGUE.CSP})</li>
              <li>Première <strong>carte de résident</strong> (niveau {NIVEAUX_LANGUE.carteResident})</li>
              <li><strong>Naturalisation</strong> française (niveau {NIVEAUX_LANGUE.naturalisation})</li>
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
        <p style={{ ...p, marginTop: 16 }}>
          Un doute sur votre cas ? Le{' '}
          <a href={`${SITE_URL}/test-eligibilite`} style={a}>test d&apos;éligibilité</a> vous répond en 2 minutes.
        </p>

        {/* ── Combien ça coûte ── */}
        <h2 style={h2}>Combien coûte l&apos;examen civique ?</h2>
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'var(--color-off-white)', border: 'var(--border-default)', borderRadius: 'var(--radius-lg)', padding: '20px 22px' }}>
          <Wallet size={26} color="var(--color-text-muted)" style={{ flexShrink: 0, marginTop: 2 }} />
          <p style={{ ...p, margin: 0 }}>
            Le tarif n&apos;est <strong>pas fixé par l&apos;État</strong> : il est déterminé par <strong>chaque centre
            agréé</strong> et varie de l&apos;un à l&apos;autre. Méfiez-vous des prix « officiels » affichés en ligne :
            vérifiez toujours le montant au moment de la réservation, sur le site de l&apos;opérateur. Voir{' '}
            <a href={`${SITE_URL}/examen-civique`} style={a}>où passer l&apos;examen près de chez vous</a>.
          </p>
        </div>

        {/* ── Cartes-portail : se préparer / où / questions ── */}
        <h2 style={h2}>Se préparer, réserver, réviser</h2>
        <div className="portal-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14, margin: '20px 0 8px' }}>
          {ressources.map(({ icon: Icon, accent, fond, titre, desc, href, cta }) => (
            <a key={titre} href={href} style={{
              display: 'flex', flexDirection: 'column', textDecoration: 'none',
              background: 'var(--color-surface)', border: 'var(--border-default)',
              borderRadius: 'var(--radius-xl)', padding: '22px 24px',
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: fond, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <Icon size={23} color={accent} />
              </div>
              <p style={{ fontSize: 17, fontWeight: 800, color: 'var(--color-text-primary)', margin: '0 0 6px', lineHeight: 1.3 }}>{titre}</p>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: '0 0 16px', flex: 1 }}>{desc}</p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 700, color: accent }}>
                {cta} <ArrowRight size={15} />
              </span>
            </a>
          ))}
        </div>

        <div style={{ margin: '32px 0 0' }}>
          <EligibiliteCTA />
        </div>

        {/* ── Selon votre démarche ── */}
        <h2 style={h2}>L&apos;examen civique selon votre démarche</h2>
        <p style={p}>
          Les conditions autour de l&apos;examen (niveau de français, dispenses) diffèrent selon ce que vous visez.
          Nos guides détaillés :
        </p>
        <ul style={{ margin: '0 0 20px', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9, fontSize: 15, lineHeight: 1.6 }}>
          <li><a href={`${SITE_URL}/guides/titre-de-sejour`} style={a}>Titre de séjour : le guide complet 2026</a> (niveau {NIVEAUX_LANGUE.CSP})</li>
          <li><a href={`${SITE_URL}/guides/carte-de-resident`} style={a}>Carte de résident : le guide complet 2026</a> (niveau {NIVEAUX_LANGUE.carteResident})</li>
          <li><a href={`${SITE_URL}/guides/naturalisation`} style={a}>Naturalisation française : le guide complet 2026</a> (niveau {NIVEAUX_LANGUE.naturalisation})</li>
        </ul>

        {/* ── FAQ accordéon ── */}
        <h2 style={h2}>Questions fréquentes</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            {
              q: 'C\'est quoi l\'examen civique en France ?',
              r: `Une épreuve introduite le 1ᵉʳ janvier 2026 : un QCM de ${EXAMEN_CIVIQUE.nbQuestions} questions sur les institutions, l'histoire et les valeurs de la République, à réussir (${EXAMEN_CIVIQUE.seuilReussite}/${EXAMEN_CIVIQUE.nbQuestions}) pour certaines démarches de titre de séjour ou de naturalisation.`,
            },
            {
              q: 'Qui doit passer l\'examen civique ?',
              r: `Les personnes qui déposent une première demande de carte de séjour pluriannuelle, de carte de résident, ou une demande de naturalisation. Sont dispensés notamment la carte temporaire d'un an, les renouvellements, les bénéficiaires d'une protection internationale, certains accords bilatéraux (Algériens) et les personnes de 65 ans et plus.`,
            },
            {
              q: 'Combien de questions à l\'examen civique ?',
              r: `${EXAMEN_CIVIQUE.nbQuestions} questions à choix multiple, avec ${EXAMEN_CIVIQUE.seuilReussite} bonnes réponses requises (80 %), en ${EXAMEN_CIVIQUE.dureeMinutes} minutes maximum.`,
            },
            {
              q: 'L\'examen civique est-il gratuit ou payant ?',
              r: `Il est payant : le tarif est fixé par chaque centre agréé et varie. Il n'existe pas de prix officiel unique. En revanche, vous pouvez vous entraîner gratuitement avec nos examens blancs avant de réserver.`,
            },
            {
              q: 'Où passer l\'examen civique ?',
              r: 'Dans un centre agréé par l\'État. La liste officielle est tenue par le ministère de l\'Intérieur ; nos pages par département vous orientent vers les centres et l\'OFII local.',
            },
            {
              q: 'Comment se préparer à l\'examen civique ?',
              r: `Entraînez-vous avec des examens blancs au format officiel jusqu'à dépasser ${EXAMEN_CIVIQUE.seuilReussite}/${EXAMEN_CIVIQUE.nbQuestions}, puis approfondissez avec des modules sur les institutions, l'histoire et les valeurs. C'est gratuit pour commencer.`,
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

        {/* ── Sources ── */}
        <div style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--color-border)' }}>
          <p style={{ fontSize: 12.5, lineHeight: 1.7, color: 'var(--color-text-muted)', margin: '0 0 10px' }}>
            <strong>Sources officielles :</strong>{' '}
            <a href={EXAMEN_CIVIQUE.sourceUrl} target="_blank" rel="noopener" style={a}>
              service-public.fr (F39426) <ExternalLink size={11} style={{ display: 'inline' }} />
            </a>{' '}— vérifié le {new Date(EXAMEN_CIVIQUE.verifieLe).toLocaleDateString('fr-FR')} ;{' '}
            <a href={EXAMEN_CIVIQUE.sourceQuestionsUrl} target="_blank" rel="noopener" style={a}>
              formation-civique.interieur.gouv.fr
            </a>{' '}(liste officielle des questions) ; arrêté du 10 octobre 2025.
          </p>
          <p style={{ fontSize: 12.5, lineHeight: 1.7, color: 'var(--color-text-muted)', margin: 0 }}>
            Les conditions peuvent évoluer : vérifiez auprès de votre préfecture. Cette page est publiée à titre
            informatif et ne remplace pas un avis juridique.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .kpi-band { grid-template-columns: repeat(2, 1fr) !important; }
          .concern { grid-template-columns: 1fr !important; }
          .portal-grid { grid-template-columns: 1fr !important; }
        }
        .faq-summary::-webkit-details-marker { display: none; }
        .faq-summary { list-style: none; }
        .faq-item[open] .faq-chevron { transform: rotate(180deg); }
      `}</style>
    </main>
  );
}
