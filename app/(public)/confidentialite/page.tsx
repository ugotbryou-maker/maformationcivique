import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — maformationcivique.fr',
  description: 'Politique de confidentialité et de protection des données personnelles de maformationcivique.fr. Conformité RGPD, droits des utilisateurs, cookies.',
  alternates: { canonical: 'https://maformationcivique.fr/confidentialite' },
};

export default function ConfidentialitePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-off-white)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: 'var(--color-text-muted)', textDecoration: 'none', marginBottom: '2rem' }}>
          ← Retour à l&apos;accueil
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
            content: 'Nous collectons les données suivantes : adresse email, prénom (optionnel), démarche administrative (CSP, carte de résident, naturalisation), niveau de langue déclaré, données de progression pédagogique (leçons complétées, scores aux quiz et examens blancs, XP, badges), données de paiement traitées par Stripe (nous ne stockons pas vos coordonnées bancaires), numéro de téléphone (facultatif, renseigné lors de l\'inscription).',
          },
          {
            title: '3. Finalités du traitement',
            content: 'Vos données sont utilisées pour : la création et la gestion de votre compte, la personnalisation de votre parcours de formation, la facturation et la gestion des abonnements, l\'envoi de communications relatives à votre formation (avec votre consentement), la génération d\'attestations de suivi pédagogique.',
          },
          {
            title: '4. Base légale',
            content: 'Le traitement de vos données est fondé sur : l\'exécution du contrat (accès à la plateforme), votre consentement (communications marketing), nos intérêts légitimes (amélioration du service, lutte contre la fraude).',
          },
          {
            title: '5. Conservation des données',
            content: 'Vos données sont conservées pendant la durée de votre abonnement et 3 ans après sa résiliation, conformément aux obligations légales comptables. Les données de progression sont conservées tant que votre compte est actif.',
          },
          {
            title: '6. Partage des données',
            content: 'Nous ne vendons jamais vos données. Elles peuvent être partagées avec : Supabase (hébergement et authentification), Stripe (paiement), Brevo (emails transactionnels), tous soumis au RGPD.',
          },
          {
            title: '7. Comptes cabinet partenaire (B2B)',
            content: 'Si vous accédez à la plateforme via l\'invitation d\'un cabinet partenaire (avocat, association d\'aide à l\'intégration), votre cabinet dispose d\'un accès à votre progression globale (pourcentage de modules complétés) et peut générer une attestation de suivi pédagogique en votre nom. Votre cabinet ne peut pas voir le détail de vos réponses, modifier votre contenu, ni accéder à vos données de paiement. Vous pouvez demander la révocation de cet accès à tout moment en contactant contact@maformationcivique.fr. En cas de révocation, votre compte passe automatiquement en offre gratuite.',
          },
          {
            title: '8. Vos droits',
            content: 'Conformément au RGPD, vous disposez des droits d\'accès, de rectification, d\'effacement, de portabilité et d\'opposition. Pour exercer ces droits, contactez-nous à contact@maformationcivique.fr. En cas de désaccord, vous pouvez saisir la CNIL (www.cnil.fr).',
          },
          {
            title: '9. Cookies',
            content: 'Nous utilisons uniquement des cookies techniques nécessaires au fonctionnement du service (authentification, session). Aucun cookie publicitaire ou de tracking tiers n\'est utilisé.',
          },
          {
            title: '10. Sécurité',
            content: 'Les données sont hébergées sur Supabase (infrastructure chiffrée, conformité SOC 2). Les mots de passe sont hashés et jamais accessibles en clair. Les communications entre votre navigateur et nos serveurs sont chiffrées via HTTPS (TLS 1.3).',
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
