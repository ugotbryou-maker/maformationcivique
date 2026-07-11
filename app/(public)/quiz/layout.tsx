import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiz civique gratuit — 10 questions officielles | maformationcivique.fr',
  description: 'Testez gratuitement vos connaissances avec 10 questions officielles sur la République française, ses valeurs et ses institutions. Idéal pour commencer à préparer votre formation civique.',
  alternates: { canonical: 'https://www.maformationcivique.fr/quiz' },
  openGraph: {
    title: 'Quiz civique gratuit — 10 questions officielles',
    description: 'Testez vos connaissances civiques gratuitement : 10 questions officielles sur la République, les valeurs et les institutions françaises.',
    url: 'https://www.maformationcivique.fr/quiz',
  },
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
