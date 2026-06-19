import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Examens blancs — Préparez votre formation civique | maformationcivique.fr',
  description: 'Passez nos examens blancs chronométrés : CSP, Carte de résident, Naturalisation. Questions officielles, corrigées et adaptées à votre démarche.',
  alternates: { canonical: 'https://maformationcivique.fr/examen' },
  openGraph: {
    title: 'Examens blancs formation civique — maformationcivique.fr',
    description: '3 niveaux d\'examen blanc : Carte de séjour, Carte de résident, Naturalisation. Préparez-vous avec les vraies questions officielles.',
    url: 'https://maformationcivique.fr/examen',
    type: 'website',
  },
};

export default function ExamenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
