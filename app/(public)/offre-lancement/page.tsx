import type { Metadata } from 'next';
import { LaunchLanding } from './LaunchLanding';

export const metadata: Metadata = {
  title: "Offre de lancement — Formation civique & langue française | maformationcivique.fr",
  description: "Préparez votre naturalisation : formation civique officielle + langue française A2→B2. Offre de lancement jusqu'au 22 juillet à partir de 5 €/mois.",
  alternates: { canonical: 'https://www.maformationcivique.fr/offre-lancement' },
  openGraph: {
    title: "Offre de lancement — à partir de 5 €/mois",
    description: "Formation civique et linguistique pour votre naturalisation. Valable jusqu'au 22 juillet.",
    url: 'https://www.maformationcivique.fr/offre-lancement',
  },
};

export default function OffreLancementPage() {
  return <LaunchLanding />;
}
