import { getSanityClient } from './client';

export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  readingTime: number;
  category: 'titre-sejour' | 'carte-resident' | 'naturalisation' | 'vie-en-france' | 'actualites';
  coverImage?: {
    asset: { _ref: string };
    alt?: string;
  };
  author?: {
    name: string;
    avatar?: { asset: { _ref: string } };
  };
  tags?: string[];
  body?: unknown; // PortableText
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

// ── Tous les articles (liste) ──────────────────────────────────────────────
export async function getAllPosts(): Promise<SanityPost[]> {
  // Si Sanity n'est pas configuré, retourne les articles de démo
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return DEMO_POSTS;
  }

  try {
    return await getSanityClient()?.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        readingTime,
        category,
        coverImage,
        author->{ name, avatar },
        tags,
        seo
      }
    `);
  } catch {
    return DEMO_POSTS;
  }
}

// ── Un article par slug ────────────────────────────────────────────────────
export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return DEMO_POSTS.find((p) => p.slug.current === slug) ?? null;
  }

  try {
    return await getSanityClient()?.fetch(`
      *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        readingTime,
        category,
        coverImage,
        author->{ name, avatar },
        tags,
        body,
        seo
      }
    `, { slug });
  } catch {
    return null;
  }
}

// ── Articles par catégorie ─────────────────────────────────────────────────
export async function getPostsByCategory(category: string): Promise<SanityPost[]> {
  const all = await getAllPosts();
  if (category === 'tous') return all;
  return all.filter((p) => p.category === category);
}

// ── Slugs statiques ────────────────────────────────────────────────────────
export async function getAllPostSlugs(): Promise<string[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return DEMO_POSTS.map((p) => p.slug.current);
  }
  try {
    const results = await getSanityClient()?.fetch(
      `*[_type == "post"]{ slug }`
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (results ?? []).map((r: any) => r.slug.current);
  } catch {
    return DEMO_POSTS.map((p) => p.slug.current);
  }
}

// ── Catégories ─────────────────────────────────────────────────────────────
export const POST_CATEGORIES: Record<SanityPost['category'], { label: string; color: string; bg: string }> = {
  'titre-sejour':    { label: 'Titre de séjour',        color: '#002395', bg: '#E6EEF9' },
  'carte-resident':  { label: 'Carte de résident',       color: '#0057A8', bg: '#EFF6FF' },
  'naturalisation':  { label: 'Naturalisation',          color: '#CC1A1A', bg: '#FEF2F2' },
  'vie-en-france':   { label: 'Vivre en France',         color: '#059669', bg: '#F0FDF4' },
  'actualites':      { label: 'Actualités',              color: '#7C3AED', bg: '#F5F3FF' },
};

// ── Articles de démo (fallback sans Sanity configuré) ──────────────────────
const DEMO_POSTS: SanityPost[] = [
  {
    _id: 'demo-1',
    title: 'Comment préparer son examen civique pour la carte de résident ?',
    slug: { current: 'preparer-examen-civique-carte-resident' },
    excerpt: 'Depuis janvier 2026, l\'examen civique est obligatoire pour obtenir une carte de résident. Voici les étapes clés pour bien vous préparer et réussir du premier coup.',
    publishedAt: '2026-05-15',
    readingTime: 7,
    category: 'carte-resident',
    tags: ['examen civique', 'carte de résident', 'conseils'],
  },
  {
    _id: 'demo-2',
    title: 'Les 5 erreurs à éviter lors de l\'examen de naturalisation',
    slug: { current: 'erreurs-eviter-examen-naturalisation' },
    excerpt: 'L\'examen de naturalisation est le plus exigeant des trois niveaux. Découvrez les pièges les plus fréquents et comment les éviter.',
    publishedAt: '2026-05-08',
    readingTime: 5,
    category: 'naturalisation',
    tags: ['naturalisation', 'erreurs fréquentes', 'préparation'],
  },
  {
    _id: 'demo-3',
    title: 'Laïcité à l\'école : ce que tout résident doit savoir',
    slug: { current: 'laicite-ecole-ce-que-resident-doit-savoir' },
    excerpt: 'La laïcité est l\'un des principes fondamentaux de la République française. Comprendre son application concrète à l\'école est essentiel pour l\'examen.',
    publishedAt: '2026-04-28',
    readingTime: 6,
    category: 'vie-en-france',
    tags: ['laïcité', 'école', 'valeurs républicaines'],
  },
  {
    _id: 'demo-4',
    title: 'Titre de séjour pluriannuel : quelles questions à l\'examen ?',
    slug: { current: 'titre-sejour-pluriannuel-questions-examen' },
    excerpt: 'Le niveau CSP est le premier niveau de l\'examen civique. Contrairement aux idées reçues, il ne suffit pas de connaître les symboles — voici ce qui est vraiment testé.',
    publishedAt: '2026-04-20',
    readingTime: 4,
    category: 'titre-sejour',
    tags: ['CSP', 'titre de séjour', 'niveau 1'],
  },
  {
    _id: 'demo-5',
    title: 'Examen civique : les nouveautés 2026 que vous devez connaître',
    slug: { current: 'examen-civique-nouveautes-2026' },
    excerpt: 'L\'examen civique est devenu obligatoire en janvier 2026. Quelles sont les nouvelles règles, les délais et les recours possibles en cas d\'échec ?',
    publishedAt: '2026-04-10',
    readingTime: 8,
    category: 'actualites',
    tags: ['2026', 'nouvelles règles', 'obligatoire'],
  },
  {
    _id: 'demo-6',
    title: 'La séparation des pouvoirs expliquée simplement',
    slug: { current: 'separation-pouvoirs-expliquee-simplement' },
    excerpt: 'Législatif, exécutif, judiciaire : ces trois pouvoirs reviennent constamment dans l\'examen. Une explication claire avec des exemples concrets du quotidien.',
    publishedAt: '2026-03-30',
    readingTime: 6,
    category: 'carte-resident',
    tags: ['institutions', 'séparation des pouvoirs', 'niveau 2'],
  },
];
