import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'maformationcivique.fr — Préparez votre examen civique',
  description: 'La plateforme de préparation à la formation civique obligatoire pour les ressortissants étrangers en France. 177 questions, 5 modules, examens blancs chronométrés.',
  keywords: ['formation civique', 'examen civique', 'naturalisation', 'carte de résident', 'France', 'e-learning'],
  authors: [{ name: 'maformationcivique.fr' }],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'maformationcivique.fr — Préparez votre examen civique',
    description: 'La plateforme de préparation à la formation civique obligatoire. 177 questions officielles, 5 modules thématiques, IA pédagogique.',
    url: 'https://maformationcivique.fr',
    siteName: 'maformationcivique.fr',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/logo.svg', width: 400, height: 80, alt: 'maformationcivique.fr' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'maformationcivique.fr — Préparez votre examen civique',
    description: 'Formation civique en ligne : 177 questions officielles, 5 modules, examens blancs.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
