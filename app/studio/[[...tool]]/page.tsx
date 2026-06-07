'use client';

/**
 * Sanity Studio — accessible sur /studio
 * Protégé par middleware (voir ci-dessous)
 */

import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
