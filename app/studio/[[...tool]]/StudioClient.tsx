'use client';

/**
 * Wrapper client pour le Studio Sanity.
 *
 * Le composant NextStudio (et tout son arbre interne) doit rester dans un
 * module "use client" : si on l'importe depuis un Server Component, Next.js
 * tente de l'inclure dans le graphe RSC lors du "Collecting page data" et
 * échoue avec `TypeError: (0, r.createContext) is not a function` (le build
 * "react-server" de React n'exporte pas createContext).
 */
import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

export default function StudioClient() {
  return <NextStudio config={config} />;
}
