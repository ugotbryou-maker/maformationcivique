import type { Metadata } from 'next';

/**
 * Landing dédiée aux campagnes Meta (Business Suite).
 *
 * - Sans navbar ni footer : une landing publicitaire n'a qu'un seul objectif,
 *   chaque lien sortant est une fuite de conversion.
 * - noindex : le trafic vient des annonces, pas de Google. On évite ainsi de
 *   cannibaliser la page d'accueil qui vise les mêmes requêtes.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function OffreLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
