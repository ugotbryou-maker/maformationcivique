import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiz gratuit — Testez vos connaissances civiques | maformationcivique.fr',
  description: '10 questions civiques gratuites pour tester votre niveau. Histoire de France, institutions, valeurs républicaines — sans inscription.',
  alternates: { canonical: 'https://www.maformationcivique.fr/quiz' },
  openGraph: {
    title: 'Quiz civique gratuit — 10 questions officielles',
    description: 'Testez vos connaissances sur la République française, ses institutions et ses valeurs. Accès immédiat, sans créer de compte.',
    url: 'https://www.maformationcivique.fr/quiz',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
