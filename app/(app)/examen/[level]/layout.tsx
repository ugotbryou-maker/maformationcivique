import type { Metadata } from 'next';

const LEVEL_META: Record<string, { title: string; description: string; canonical: string }> = {
  CSP: {
    title: 'Examen blanc CSP — carte de séjour pluriannuelle 2026',
    description: 'Examen blanc carte de séjour pluriannuelle (CSP) : questions officielles sur la République, la laïcité, les institutions et les droits. Chronométré.',
    canonical: 'https://www.maformationcivique.fr/examen/CSP',
  },
  CR: {
    title: 'Examen blanc carte de résident 10 ans — 2026',
    description: "Examen blanc carte de résident (10 ans) : institutions, droits et libertés, histoire, Union européenne. Questions officielles chronométrées, format 2026.",
    canonical: 'https://www.maformationcivique.fr/examen/CR',
  },
  NAT: {
    title: 'Examen blanc de naturalisation française 2026',
    description: "Examen blanc de naturalisation française : questions avancées sur la République, les institutions et l'histoire. Niveau officiel 2026, chronométré.",
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
