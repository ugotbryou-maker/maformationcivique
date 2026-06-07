import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — maformationcivique.fr',
};

export default function ConfidentialitePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-off-white)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: 'var(--color-text-muted)', textDecoration: 'none', marginBottom: '2rem' }}>
          ← Retour à l'accueil
        </Link>

        <h1 style={{ fontSize: 32, fontWeight: 900, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
          Politique de confidentialité
        </h1>
        <p style={{ fontSize: 14, color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
          Dernière mise à jour : juin 2026
        </p>

        {[
          {
            title: '1. Responsable du traitement',
            content: 'maformationcivique.fr est édité par une entreprise individuelle. Pour toute question relative à vos données personnelles, contactez-nous à : contact@maformationcivique.fr',
          },
          {
            title: '2. Données collectées',
            content: 'Nous collectons les données suivantes : adresse email, prénom (optionnel), données de progression pédagogique (leçons complétées, scores aux quiz), données de paiement traitées par Stripe (nous ne stockons pas vos coordonnées bancaires).',
          },
          {
            title: '3. Finalités du traitement',
            content: 'Vos données sont utilisées pour : la création et la gestion de votre compte, la personnalisation de votre parcours de formation, la facturation et la gestion des abonnements, l\'envoi de communications relatives à votre formation (avec votre consentement).',
          },
          {
            title: '4. Base légale',
            content: 'Le traitement de vos données est fondé sur : l\'exécution du contrat (accès à la plateforme), votre consentement (communications marketing), nos intérêts légitimes (amélioration du service).',
          },
          {
            title: '5. Conservation des données',
            content: 'Vos données sont conservées pendant la durée de votre abonnement et 3 ans après sa résiliation, conformément aux obligations légales.',
          },
          {
            title: '6. Partage des données',
            content: 'Nous ne vendons jamais vos données. Elles peuvent être partagées avec : Supabase (hébergement et authentification), Stripe (paiement), Brevo (emails transactionnels), tous soumis au RGPD.',
          },
          {
            title: '7. Vos droits',
            content: 'Conformément au RGPD, vous disposez des droits d\'accès, de rectification, d\'effacement, de portabilité et d\'opposition. Pour exercer ces droits, contactez-nous à contact@maformationcivique.fr.',
          },
          {
            title: '8. Cookies',
            content: 'Nous utilisons uniquement des cookies techniques nécessaires au fonctionnement du service (authentification, session). Aucun cookie publicitaire ou de tracking tiers n\'est utilisé.',
          },
        ].map(({ title, content }) => (
          <div key={title} style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
              {title}
            </h2>
            <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
              {content}
            </p>
          </div>
        ))}

        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem', marginTop: '3rem' }}>
          <Link href="/cgu" style={{ color: 'var(--color-blue-france)', fontSize: 14 }}>
            Consulter nos CGU →
          </Link>
        </div>

      </div>
    </div>
  );
}
