import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
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
