import type { Metadata } from 'next';
import { EligibiliteQuiz } from '@/components/eligibilite/EligibiliteQuiz';
import { SITE_URL } from '@/lib/reglementation';

export const metadata: Metadata = {
  title: { absolute: "Test d'éligibilité — titre de séjour & naturalisation" },
  description:
    "Testez gratuitement votre éligibilité à la carte de séjour, la carte de résident ou la naturalisation française : durée, niveau de français, conditions.",
  alternates: { canonical: `${SITE_URL}/test-eligibilite` },
  openGraph: {
    title: "Test d'éligibilité — titre de séjour & naturalisation",
    description:
      "Où en êtes-vous ? Testez votre éligibilité et recevez votre plan d'action personnalisé.",
    url: `${SITE_URL}/test-eligibilite`,
    locale: 'fr_FR',
  },
};

export default function TestEligibilitePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: "Test d'éligibilité", item: `${SITE_URL}/test-eligibilite` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ padding: '48px 20px 80px' }}>
        <EligibiliteQuiz />
      </div>
    </main>
  );
}
