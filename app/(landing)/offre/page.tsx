import type { Metadata } from 'next';
import { OffreLanding } from './OffreLanding';

export const metadata: Metadata = {
  title: { absolute: 'Examen civique + français : préparez les deux — 10 €/mois' },
  description:
    "Examen civique et niveau de français exigés depuis 2026 : 177 questions officielles, examens blancs illimités et cours A2 à B2. Dès 10 €/mois ou 20 € à vie.",
  robots: { index: false, follow: true },
};

export default function OffrePage() {
  // Liens de paiement Stripe (Payment Links) pilotés par variables
  // d'environnement : ils peuvent être changés sans redéploiement de code.
  // Repli sur le tunnel avec création de compte tant qu'ils ne sont pas
  // renseignés — jamais de CTA mort.
  return (
    <OffreLanding
      bundleHref={process.env.NEXT_PUBLIC_STRIPE_LINK_BUNDLE || '/inscription?plan=bundle'}
      lifetimeHref={process.env.NEXT_PUBLIC_STRIPE_LINK_LIFETIME || '/inscription?plan=lifetime'}
    />
  );
}
