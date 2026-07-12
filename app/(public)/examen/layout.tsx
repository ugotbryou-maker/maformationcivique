import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Examens blancs de l'examen civique 2026 (CSP, CR, NAT)",
  description: "Examens blancs chronométrés de l'examen civique 2026 : 3 niveaux (carte de séjour pluriannuelle, carte de résident, naturalisation). Questions officielles.",
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
