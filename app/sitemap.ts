import type { MetadataRoute } from 'next';
import { modules } from '@/data/modules';
import { fiches } from '@/data/fiches';
import { a2Modules, b1Modules, b2Modules, transversalModules, examenModules } from '@/data/langue';
import { departementsPublies, derniereVerification } from '@/data/departements';
import { getAllPosts } from '@/lib/sanity/queries';

const BASE = 'https://www.maformationcivique.fr';

function s(path: string, priority: number, freq: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly'): MetadataRoute.Sitemap[number] {
  return { url: `${BASE}${path}`, lastModified: new Date(), changeFrequency: freq, priority };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // ── Pages statiques ────────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    s('/',                                   1.0, 'weekly'),
    s('/modulesciviques',                    0.9, 'monthly'),
    s('/moduleslinguistiques',               0.9, 'monthly'),
    s('/examen',                             0.9, 'monthly'),
    s('/examen/CSP',                         0.8, 'monthly'),
    s('/examen/CR',                          0.8, 'monthly'),
    s('/examen/NAT',                         0.8, 'monthly'),
    s('/fiches',                             0.8, 'monthly'),
    s('/ressources',                         0.8, 'weekly'),
    s('/quiz',                               0.7, 'monthly'),
    s('/test-eligibilite',                   0.8, 'monthly'),
    s('/guides',                             0.8, 'monthly'),
    s('/guides/naturalisation',              0.9, 'monthly'),
    s('/moduleslinguistiques/a2',            0.8, 'monthly'),
    s('/moduleslinguistiques/b1',            0.8, 'monthly'),
    s('/moduleslinguistiques/b2',            0.8, 'monthly'),
    s('/moduleslinguistiques/transversal',   0.7, 'monthly'),
    s('/moduleslinguistiques/examens',       0.7, 'monthly'),
    s('/partenaires',                        0.5, 'monthly'),
    s('/cgu',                                0.3, 'yearly'),
    s('/confidentialite',                    0.3, 'yearly'),
  ];

  // ── Modules & leçons civiques ──────────────────────────────────────
  const civiqueRoutes: MetadataRoute.Sitemap = modules.flatMap((mod) => [
    s(`/module/${mod.slug}`, 0.8),
    ...mod.lessons.map((l) => s(`/lecon/${l.slug}`, 0.7)),
  ]);

  // ── Fiches individuelles ───────────────────────────────────────────
  const ficheRoutes: MetadataRoute.Sitemap = fiches.map((f) => s(`/fiches/${f.slug}`, 0.7));

  // ── Leçons de français (FLE) ───────────────────────────────────────
  const langueRoutes: MetadataRoute.Sitemap = [
    ...a2Modules.flatMap((m) => m.lessons.map((l) => s(`/moduleslinguistiques/a2/${l.slug}`, 0.6))),
    ...b1Modules.flatMap((m) => m.lessons.map((l) => s(`/moduleslinguistiques/b1/${l.slug}`, 0.6))),
    ...b2Modules.flatMap((m) => m.lessons.map((l) => s(`/moduleslinguistiques/b2/${l.slug}`, 0.6))),
    ...transversalModules.flatMap((m) => m.lessons.map((l) => s(`/moduleslinguistiques/transversal/${l.slug}`, 0.6))),
    ...examenModules.flatMap((m) => m.lessons.map((l) => s(`/moduleslinguistiques/examens/${l.slug}`, 0.6))),
  ];

  // ── Pages locales examen civique (uniquement publiées + validées) ──
  const examenCiviqueRoutes: MetadataRoute.Sitemap = departementsPublies.length > 0
    ? [
        s('/examen-civique', 0.8, 'weekly'),
        ...departementsPublies.map((d) => {
          const verif = derniereVerification(d);
          return {
            url: `${BASE}/examen-civique/${d.slug}`,
            lastModified: verif ? new Date(verif) : now,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
          };
        }),
      ]
    : [];

  // ── Articles Sanity ────────────────────────────────────────────────
  let ressourceRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await getAllPosts();
    ressourceRoutes = posts.map((p) => ({
      url: `${BASE}/ressources/${p.slug.current}`,
      lastModified: p.publishedAt ? new Date(p.publishedAt) : now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch { /* Sanity indisponible — ignoré */ }

  return [...staticRoutes, ...civiqueRoutes, ...ficheRoutes, ...langueRoutes, ...examenCiviqueRoutes, ...ressourceRoutes];
}
