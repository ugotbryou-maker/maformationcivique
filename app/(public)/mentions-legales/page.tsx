import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Mentions légales — maformationcivique.fr' },
  description: "Mentions légales de maformationcivique.fr : identité de l'éditeur, hébergement, propriété intellectuelle et droit applicable.",
  alternates: { canonical: 'https://www.maformationcivique.fr/mentions-legales' },
};

const LAST_UPDATE = '3 septembre 2026';
const COMPANY     = 'Ugo Tamburrini (Entrepreneur individuel — YOU.)';
const SIRET       = '908 675 259 00018';
const ADDRESS     = '7B Rue Monge, 94110 Arcueil, France';
const EMAIL       = 'contact@maformationcivique.fr';
const SITE        = 'https://www.maformationcivique.fr';

export default function MentionsLegalesPage() {
  return (
    <div style={{ background: '#F8F9FB', minHeight: '100vh', padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '760px', padding: '0 24px' }}>

        {/* En-tête */}
        <div style={{ marginBottom: '48px' }}>
          <span style={{
            fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.1em', color: 'var(--color-blue-france)',
          }}>
            Document légal
          </span>
          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700,
            color: 'var(--color-text-primary)', margin: '10px 0 12px',
            letterSpacing: '-0.02em',
          }}>
            Mentions légales
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
            Dernière mise à jour : <strong>{LAST_UPDATE}</strong>
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

          <Section num="1" title="Éditeur du site">
            <p>
              Le site <strong>{SITE}</strong> (ci-après « le Site ») est édité par :
            </p>
            <InfoBlock rows={[
              ['Raison sociale', COMPANY],
              ['Statut juridique', 'Entreprise individuelle'],
              ['SIRET', SIRET],
              ['Adresse', ADDRESS],
              ['E-mail de contact', EMAIL],
            ]} />
            <p>
              <strong>Directeur de la publication :</strong> Ugo Tamburrini, en sa qualité
              d&apos;entrepreneur individuel éditeur du Site.
            </p>
          </Section>

          <Section num="2" title="Hébergement">
            <p>Le Site est hébergé par :</p>
            <InfoBlock rows={[
              ['Hébergeur', 'Vercel Inc.'],
              ['Adresse', '340 Pine Street, Suite 1200, San Francisco, CA 94104, États-Unis'],
              ['Site web', 'vercel.com'],
            ]} />
            <p>
              Les données des utilisateurs (comptes, progression pédagogique) sont stockées
              via <strong>Supabase Inc.</strong> (base de données et authentification) et les
              paiements sont traités par <strong>Stripe Inc.</strong> (les coordonnées bancaires
              ne transitent jamais par les serveurs de l&apos;éditeur). Voir la{' '}
              <a href="/confidentialite" style={{ color: 'var(--color-blue-france)' }}>
                politique de confidentialité
              </a>{' '}
              pour le détail des traitements de données.
            </p>
          </Section>

          <Section num="3" title="Propriété intellectuelle">
            <p>
              L&apos;ensemble des éléments du Site — textes, questions, exercices, interfaces,
              logo, marque « maformationcivique.fr » — est la propriété exclusive de
              l&apos;éditeur ou fait l&apos;objet de licences d&apos;utilisation. Les œuvres d&apos;art
              reproduites sur le Site (peintures, photographies historiques) relèvent du
              domaine public.
            </p>
            <p>
              Toute reproduction, représentation, modification ou exploitation, totale ou
              partielle, du contenu du Site, par quelque procédé que ce soit, sans
              autorisation écrite préalable de l&apos;éditeur, est interdite et constitutive
              d&apos;une contrefaçon au sens des articles L.335-2 et suivants du Code de la
              propriété intellectuelle. Le détail des règles d&apos;usage figure dans les{' '}
              <a href="/cgu" style={{ color: 'var(--color-blue-france)' }}>CGU</a> (Article 12).
            </p>
          </Section>

          <Section num="4" title="Données personnelles et cookies">
            <p>
              Le traitement des données personnelles des utilisateurs est décrit en détail
              dans la{' '}
              <a href="/confidentialite" style={{ color: 'var(--color-blue-france)' }}>
                politique de confidentialité
              </a>. Le Site utilise uniquement des cookies strictement nécessaires à son
              fonctionnement (authentification, session) ; aucun cookie publicitaire ou de
              suivi tiers n&apos;est déposé sans consentement.
            </p>
            <p>
              Pour exercer vos droits d&apos;accès, de rectification, d&apos;effacement, de
              portabilité ou d&apos;opposition, contactez {EMAIL}. Vous pouvez également saisir
              la <strong>CNIL</strong> (www.cnil.fr) en cas de réclamation.
            </p>
          </Section>

          <Section num="5" title="Limitation de responsabilité">
            <p>
              L&apos;éditeur s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
              informations diffusées sur le Site, sans garantir l&apos;exhaustivité ni
              l&apos;absence d&apos;erreur. Le Site est une plateforme de préparation pédagogique
              et <strong>ne remplace pas la formation civique officielle obligatoire délivrée
              par l&apos;OFII</strong>. Le détail des garanties et limitations figure dans les{' '}
              <a href="/cgu" style={{ color: 'var(--color-blue-france)' }}>CGU</a> (Articles 10 et 16).
            </p>
          </Section>

          <Section num="6" title="Droit applicable et litiges">
            <p>
              Les présentes mentions légales sont soumises au <strong>droit français</strong>.
              En cas de litige, et à défaut de résolution amiable via {EMAIL}, les tribunaux
              français seront seuls compétents. Voir également l&apos;
              <a href="/cgu" style={{ color: 'var(--color-blue-france)' }}>Article 18 des CGU</a>{' '}
              pour les modalités de médiation.
            </p>
          </Section>

        </div>

        {/* Footer légal */}
        <div style={{
          background: 'var(--color-blue-light)',
          borderRadius: '12px',
          padding: '20px 24px',
          border: '1.5px solid var(--color-blue-france)',
          opacity: 0.8,
          marginTop: '40px',
        }}>
          <p style={{ fontSize: '13px', color: 'var(--color-blue-france)', margin: 0 }}>
            <strong>Document — {LAST_UPDATE}</strong><br />
            Pour toute question relative à ces mentions légales :{' '}
            <a href={`mailto:${EMAIL}`} style={{ color: 'var(--color-blue-france)' }}>{EMAIL}</a>
          </p>
        </div>

      </div>

      <style>{`
        .ml-section h3 {
          font-size: 15px;
          font-weight: 600;
          color: var(--color-text-primary);
          margin: 20px 0 10px;
        }
        .ml-section p {
          font-size: 15px;
          color: var(--color-text-secondary);
          line-height: 1.75;
          margin: 0 0 12px;
        }
      `}</style>
    </div>
  );
}

// ── Composants helper ─────────────────────────────────────────────────────────

function Section({
  num, title, children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="ml-section" style={{ scrollMarginTop: '80px' }} id={`article-${num}`}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '16px',
        paddingBottom: '12px', borderBottom: '2px solid var(--color-blue-france)',
      }}>
        <span style={{
          fontSize: '11px', fontWeight: 700, color: 'var(--color-blue-france)',
          textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap',
        }}>
          {num}
        </span>
        <h2 style={{
          fontSize: '18px', fontWeight: 700, color: 'var(--color-text-primary)', margin: 0,
        }}>
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function InfoBlock({ rows }: { rows: [string, string][] }) {
  return (
    <div style={{
      background: '#fff', border: 'var(--border-default)',
      borderRadius: '10px', overflow: 'hidden', margin: '12px 0 16px',
    }}>
      {rows.map(([key, val], i) => (
        <div key={i} style={{
          display: 'grid', gridTemplateColumns: '180px 1fr',
          borderBottom: i < rows.length - 1 ? 'var(--border-default)' : 'none',
        }}>
          <div style={{ padding: '10px 14px', background: '#F8FAFF', fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)' }}>
            {key}
          </div>
          <div style={{ padding: '10px 14px', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
            {val}
          </div>
        </div>
      ))}
    </div>
  );
}
