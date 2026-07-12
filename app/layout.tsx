import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { CookieConsent } from '@/components/ui/CookieConsent';

const GTM_ID = 'GTM-KVQ94QBZ';

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
    default: 'Examen civique & test de langue 2026 — maformationcivique.fr',
    template: '%s | maformationcivique.fr',
  },
  description: "Préparez l'examen civique 2026 et le test de langue (A2, B1, B2) : 177 questions officielles, 2 700 exercices de français, examens blancs chronométrés. Titre de séjour et naturalisation.",
  keywords: ['examen civique', 'test de langue', 'formation civique', 'cours de français naturalisation', 'préparation examen civique 2026', 'test de français titre de séjour', 'naturalisation', 'carte de résident', 'TCF', 'TEF', 'OFII', 'intégration'],
  authors: [{ name: 'maformationcivique.fr' }],
  alternates: { canonical: BASE_URL },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Examen civique & test de langue 2026 — maformationcivique.fr',
    description: 'Préparez l\'examen civique et le test de langue pour votre titre de séjour ou naturalisation. 177 questions officielles + 2 700 exercices de français A2→B2.',
    url: BASE_URL,
    siteName: 'maformationcivique.fr',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'maformationcivique.fr' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Examen civique & test de langue 2026 — maformationcivique.fr',
    description: 'Préparez l\'examen civique et le test de langue pour votre titre de séjour ou naturalisation. 177 questions officielles + 2 700 exercices A2→B2.',
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
      <head>
        {/* Google Tag Manager — dans le head, pas besoin de consentement (conteneur neutre) */}
        <Script id="gtm-head" strategy="beforeInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>
        {/* JSON-LD Organization — Knowledge Panel Google */}
        <Script id="jsonld-org" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context":"https://schema.org",
            "@type":"Organization",
            "name":"maformationcivique.fr",
            "url":"https://www.maformationcivique.fr",
            "description":"Plateforme de préparation à l'examen civique 2026 et au test de langue (A2, B1, B2) pour les ressortissants étrangers en France (titre de séjour, carte de résident, naturalisation).",
            "inLanguage":"fr"
          }
        `}</Script>
      </head>
      <body>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0" width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
