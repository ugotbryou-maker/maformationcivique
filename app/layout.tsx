import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CookieConsent } from '@/components/ui/CookieConsent';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const BASE_URL = 'https://www.maformationcivique.fr';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'maformationcivique.fr — Préparez votre examen civique',
    template: '%s | maformationcivique.fr',
  },
  description: 'La plateforme de préparation à la formation civique obligatoire pour les ressortissants étrangers en France. 177 questions, 5 modules, examens blancs chronométrés.',
  keywords: ['formation civique', 'examen civique', 'naturalisation', 'carte de résident', 'France', 'e-learning', 'OFII', 'intégration'],
  authors: [{ name: 'maformationcivique.fr' }],
  alternates: { canonical: BASE_URL },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'maformationcivique.fr — Préparez votre examen civique',
    description: 'La plateforme de préparation à la formation civique obligatoire. 177 questions officielles, 5 modules thématiques, examens blancs chronométrés.',
    url: BASE_URL,
    siteName: 'maformationcivique.fr',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'maformationcivique.fr' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'maformationcivique.fr — Préparez votre examen civique',
    description: 'Formation civique en ligne : 177 questions officielles, 5 modules, examens blancs chronométrés.',
    images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
