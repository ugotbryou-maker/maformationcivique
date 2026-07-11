import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Examens blancs — Préparez votre formation civique | maformationcivique.fr',
  description: "Passez un examen blanc chronométré pour préparer votre démarche d'intégration. 3 niveaux : Carte de séjour pluriannuelle (CSP), Carte de résident (10 ans) et Naturalisation. Questions officielles.",
  alternates: { canonical: 'https://www.maformationcivique.fr/examen' },
  openGraph: {
    title: 'Examens blancs civiques — CSP, Carte de résident, Naturalisation',
    description: "Entraînez-vous avec des examens blancs chronométrés sur les 3 niveaux de la formation civique obligatoire en France.",
    url: 'https://www.maformationcivique.fr/examen',
  },
};

export default function ExamenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
