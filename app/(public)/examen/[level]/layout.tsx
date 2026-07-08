import type { Metadata } from 'next';

const LEVEL_META: Record<string, { title: string; description: string }> = {
  CSP: {
    title: 'Examen blanc Carte de séjour (CSP) — maformationcivique.fr',
    description: 'Simulez l\'examen de formation civique pour la carte de séjour pluriannuelle. Questions sur les symboles, la laïcité, les institutions et les droits fondamentaux.',
  },
  CR: {
    title: 'Examen blanc Carte de résident — maformationcivique.fr',
    description: 'Préparez l\'examen de formation civique pour la carte de résident 10 ans. Questions avancées sur la Constitution, les droits civiques et la vie en France.',
  },
  NAT: {
    title: 'Examen blanc Naturalisation — maformationcivique.fr',
    description: 'Simulez l\'examen blanc de naturalisation française. Histoire de France, institutions, valeurs républicaines — le niveau le plus exigeant.',
  },
};

interface Props {
  params: Promise<{ level: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level } = await params;
  const meta = LEVEL_META[level] ?? {
    title: `Examen blanc ${level} — maformationcivique.fr`,
    description: 'Simulez votre examen de formation civique avec les vraies questions officielles.',
  };

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://www.maformationcivique.fr/examen/${level}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.maformationcivique.fr/examen/${level}`,
      type: 'website',
    },
    // Pas d'indexation des pages d'examen en cours (elles sont dynamiques/client)
    robots: { index: true, follow: true },
  };
}

export default function ExamenLevelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
