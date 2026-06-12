/**
 * Sanity Studio embarqué — accessible sur /studio (réservé à l'admin,
 * cf. middleware.ts qui vérifie ADMIN_EMAIL avant de laisser passer ici).
 */
import type { Metadata, Viewport } from 'next';
import StudioClient from './StudioClient';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Studio — maformationcivique.fr',
  robots: 'noindex',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function StudioPage() {
  return <StudioClient />;
}
