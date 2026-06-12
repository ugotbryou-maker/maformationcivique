import { getSanityClient } from './client';

export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  readingTime: number;
  category: 'demarches' | 'vie-en-france' | 'examen' | 'actualites';
  contentType?: 'article' | 'guide';
  coverImage?: {
    asset: { _ref: string };
    alt?: string;
  };
  author?: {
    name: string;
    avatar?: { asset: { _ref: string } };
    bio?: string;
  };
  tags?: string[];
  body?: unknown; // PortableText
  faq?: { question: string; answer: string }[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

// ── Catégories ─────────────────────────────────────────────────────────────
export const POST_CATEGORIES: Record<
  SanityPost['category'],
  { label: string; color: string; bg: string; icon: string; description: string }
> = {
  'demarches':    {
    label: 'Démarches',
    color: '#002395',
    bg: '#E6EEF9',
    icon: '📋',
    description: 'Titre de séjour, carte de résident, naturalisation',
  },
  'vie-en-france': {
    label: 'Vie en France',
    color: '#059669',
    bg: '#F0FDF4',
    icon: '🇫🇷',
    description: 'Culture, droits, vie quotidienne',
  },
  'examen': {
    label: 'Examens & formation',
    color: '#CC1A1A',
    bg: '#FEF2F2',
    icon: '🎓',
    description: 'Méthodes, conseils et préparation',
  },
  'actualites': {
    label: 'Actualités',
    color: '#7C3AED',
    bg: '#F5F3FF',
    icon: '📰',
    description: 'Lois, décrets, nouveautés 2026',
  },
};

// Mapping rétrocompatibilité : ancien slug → nouveau
const LEGACY_CATEGORY_MAP: Record<string, SanityPost['category']> = {
  'titre-sejour':   'demarches',
  'carte-resident': 'demarches',
  'naturalisation': 'demarches',
};

function normalizePost(post: SanityPost & { category: string }): SanityPost {
  const cat = LEGACY_CATEGORY_MAP[post.category] ?? post.category as SanityPost['category'];
  return { ...post, category: cat };
}

// ── Tous les articles ──────────────────────────────────────────────────────
export async function getAllPosts(): Promise<SanityPost[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return DEMO_POSTS;
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const raw: any[] = await getSanityClient()?.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id, title, slug, excerpt, publishedAt, readingTime,
        category, contentType, coverImage,
        author->{ name, avatar }, tags, seo
      }
    `) ?? [];
    return raw.map(normalizePost);
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const raw: any = await getSanityClient()?.fetch(`
      *[_type == "post" && slug.current == $slug][0] {
        _id, title, slug, excerpt, publishedAt, readingTime,
        category, contentType, coverImage,
        author->{ name, avatar, bio }, tags, body, faq, seo
      }
    `, { slug });
    return raw ? normalizePost(raw) : null;
  } catch {
    return null;
  }
}

// ── Slugs statiques ────────────────────────────────────────────────────────
export async function getAllPostSlugs(): Promise<string[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return DEMO_POSTS.map((p) => p.slug.current);
  }
  try {
    const results = await getSanityClient()?.fetch(`*[_type == "post"]{ slug }`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (results ?? []).map((r: any) => r.slug.current);
  } catch {
    return DEMO_POSTS.map((p) => p.slug.current);
  }
}

// ── Articles de démo (fallback sans Sanity configuré) ──────────────────────
const DEMO_POSTS: SanityPost[] = [
  {
    _id: 'demo-1',
    title: 'Renouvellement de carte de résident : guide étape par étape',
    slug: { current: 'renouvellement-carte-resident-guide' },
    excerpt: 'Votre carte de résident arrive à expiration ? Voici toutes les étapes pour la renouveler sans stress : documents requis, délais et pièges à éviter.',
    publishedAt: '2026-06-01',
    readingTime: 8,
    category: 'demarches',
    contentType: 'guide',
    tags: ['carte de résident', 'renouvellement', 'documents'],
  },
  {
    _id: 'demo-2',
    title: 'Comment préparer son examen civique pour la naturalisation ?',
    slug: { current: 'preparer-examen-civique-naturalisation' },
    excerpt: 'L\'examen de naturalisation est le niveau le plus exigeant. Méthode, planning et ressources pour réussir du premier coup.',
    publishedAt: '2026-05-20',
    readingTime: 7,
    category: 'examen',
    contentType: 'guide',
    tags: ['naturalisation', 'examen civique', 'méthode'],
  },
  {
    _id: 'demo-3',
    title: 'La laïcité en France : tout ce que vous devez savoir',
    slug: { current: 'laicite-france-ce-que-resident-doit-savoir' },
    excerpt: 'Principe fondamental de la République, la laïcité structure la vie publique française. Ce que ça change concrètement dans votre quotidien.',
    publishedAt: '2026-05-10',
    readingTime: 6,
    category: 'vie-en-france',
    contentType: 'article',
    tags: ['laïcité', 'République', 'valeurs'],
  },
  {
    _id: 'demo-4',
    title: 'Examen civique : les nouveautés 2026 à connaître absolument',
    slug: { current: 'examen-civique-nouveautes-2026' },
    excerpt: 'Depuis janvier 2026, l\'examen civique est obligatoire. Nouvelles règles, délais, et recours : tout ce qui a changé cette année.',
    publishedAt: '2026-05-02',
    readingTime: 5,
    category: 'actualites',
    contentType: 'article',
    tags: ['2026', 'nouveautés', 'obligatoire'],
  },
  {
    _id: 'demo-5',
    title: 'Les 5 erreurs à éviter à l\'examen civique',
    slug: { current: 'erreurs-eviter-examen-civique' },
    excerpt: 'Les candidats qui échouent font souvent les mêmes erreurs. Identifiez-les et corrigez-les avant le jour J.',
    publishedAt: '2026-04-22',
    readingTime: 5,
    category: 'examen',
    contentType: 'article',
    tags: ['conseils', 'erreurs', 'stratégie'],
  },
  {
    _id: 'demo-6',
    title: 'Titre de séjour pluriannuel (CSP) : dossier complet',
    slug: { current: 'titre-sejour-pluriannuel-csp-dossier-complet' },
    excerpt: 'Conditions d\'obtention, documents à fournir, délais préfectoraux et astuces pour éviter les refus. Guide complet pour le CSP.',
    publishedAt: '2026-04-10',
    readingTime: 10,
    category: 'demarches',
    contentType: 'guide',
    tags: ['CSP', 'titre de séjour', 'préfecture'],
  },
  {
    _id: 'demo-7',
    title: 'Scolarité en France : droits et obligations pour les familles étrangères',
    slug: { current: 'scolarite-france-droits-obligations-familles-etrangeres' },
    excerpt: 'École publique, cantine, sorties scolaires, laïcité : ce que la loi garantit à vos enfants et ce qu\'on attend de vous en tant que parent.',
    publishedAt: '2026-03-28',
    readingTime: 6,
    category: 'vie-en-france',
    contentType: 'article',
    tags: ['école', 'enfants', 'droits'],
  },
  {
    _id: 'demo-8',
    title: 'Séparation des pouvoirs : lexique illustré pour l\'examen',
    slug: { current: 'separation-pouvoirs-lexique-examen' },
    excerpt: 'Législatif, exécutif, judiciaire — ces trois termes reviennent constamment. Une fiche mémo avec des exemples concrets.',
    publishedAt: '2026-03-15',
    readingTime: 4,
    category: 'examen',
    contentType: 'guide',
    tags: ['institutions', 'lexique', 'fiches'],
  },
];
