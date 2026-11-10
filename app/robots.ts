import type { MetadataRoute } from 'next';
import { ROBOTS_A_ECARTER } from '@/lib/robots-indesirables';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Moissonneurs et outils SEO : refusés poliment ici, et pour de bon
      // dans le middleware pour ceux qui ne lisent pas ce fichier.
      ...ROBOTS_A_ECARTER.map((userAgent) => ({ userAgent, disallow: '/' })),
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard',
          '/profil',
          '/progression',
          '/cabinet',
          '/onboarding',
          '/reset-password',
          '/api/',
          '/studio/',
        ],
      },
    ],
    sitemap: 'https://www.maformationcivique.fr/sitemap.xml',
    host: 'https://www.maformationcivique.fr',
  };
}
