import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiz civique gratuit : 10 questions officielles 2026',
  description: "Quiz civique gratuit : 10 questions officielles sur la République, ses valeurs et ses institutions. Commencez à préparer votre examen civique 2026.",
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
