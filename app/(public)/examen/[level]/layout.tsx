import type { Metadata } from 'next';

const LEVEL_META: Record<string, { title: string; description: string; canonical: string }> = {
  CSP: {
    title: 'Examen blanc CSP — Carte de séjour pluriannuelle | maformationcivique.fr',
    description: "Entraînez-vous à l'examen blanc niveau CSP (Carte de séjour pluriannuelle). Questions officielles sur les symboles de la République, la laïcité, les institutions et les droits fondamentaux. Chronométré.",
    canonical: 'https://www.maformationcivique.fr/examen/CSP',
  },
  CR: {
    title: 'Examen blanc Carte de résident (10 ans) | maformationcivique.fr',
    description: "Examen blanc niveau Carte de résident : mécanismes institutionnels, droits et libertés, histoire contemporaine, Union européenne. Questions officielles chronométrées pour la formation civique.",
    canonical: 'https://www.maformationcivique.fr/examen/CR',
  },
  NAT: {
    title: 'Examen blanc Naturalisation française | maformationcivique.fr',
    description: "Préparez l'examen de naturalisation avec notre examen blanc : questions avancées sur la République, les institutions, la citoyenneté et l'histoire de France. Niveau officiel, chronométré.",
    canonical: 'https://www.maformationcivique.fr/examen/NAT',
  },
};

export async function generateMetadata(
  { params }: { params: Promise<{ level: string }> }
): Promise<Metadata> {
  const { level } = await params;
  const meta = LEVEL_META[level] ?? LEVEL_META.CSP;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    openGraph: { title: meta.title, description: meta.description, url: meta.canonical },
  };
}

export default function ExamenLevelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
