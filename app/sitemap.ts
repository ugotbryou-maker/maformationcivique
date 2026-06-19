import type { MetadataRoute } from 'next';
import { modules } from '@/data/modules';

const BASE = 'https://maformationcivique.fr';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Pages statiques publiques
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                         lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/modules`,            lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/examen`,             lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/examen/CSP`,         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/examen/CR`,          lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/examen/NAT`,         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/quiz`,               lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/partenaires`,        lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/ressources`,         lastModified: now, changeFrequency: 'weekly',  priority: 0.6 },
    { url: `${BASE}/fiches`,             lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/cgu`,                lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${BASE}/confidentialite`,    lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
  ];

  // Modules
  const moduleRoutes: MetadataRoute.Sitemap = modules.map((mod) => ({
    url: `${BASE}/module/${mod.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Leçons
  const lessonRoutes: MetadataRoute.Sitemap = modules.flatMap((mod) =>
    mod.lessons.map((lesson) => ({
      url: `${BASE}/lecon/${lesson.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  );

  return [...staticRoutes, ...moduleRoutes, ...lessonRoutes];
}
