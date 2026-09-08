/**
 * Hauts-de-Seine (92) — squelette vague 1.
 * Champs administratifs pré-remplis (à confirmer). Centres + préfecture à SOURCER (README).
 */

import type { Departement } from './types';

export const hautsDeSeine: Departement = {
  slug: 'hauts-de-seine',
  introUnique:
    'Les Hauts-de-Seine forment le département le plus dense de France après Paris, avec une population très concentrée entre Boulogne-Billancourt, Nanterre et Colombes. Cette proximité immédiate avec la capitale est un avantage concret pour les candidats à l\'examen civique : les centres parisiens sont accessibles en métro ou en RER depuis la quasi-totalité des communes altoséquanaises, souvent en moins de trente minutes. **Nanterre**, ville-préfecture, abrite les services de l\'État du département. La densité du réseau de transports rend ici la contrainte géographique bien plus faible que dans le reste de la grande couronne.',
  contexteLocal:
    'La densité du réseau joue ici en votre faveur : les lignes 1, 3, 9, 12 et 13 du métro, le RER A, le RER B, le RER C et le tramway T2 relient l\'essentiel du département à Paris. Depuis Boulogne-Billancourt, Nanterre ou Colombes, un centre parisien est généralement accessible en vingt à trente-cinq minutes. Cette accessibilité élargit considérablement le choix des dates : ne vous limitez pas au centre le plus proche géographiquement si un autre propose un créneau plus rapide.',
  code: '92',
  nom: 'Hauts-de-Seine',
  nomAvecPreposition: 'dans les Hauts-de-Seine',
  prefectureVille: 'Nanterre',
  region: 'Île-de-France',
  villesPrincipales: ['Boulogne-Billancourt', 'Nanterre', 'Colombes'],
  limitrophes: ['paris', 'seine-saint-denis', 'val-de-marne', 'val-d-oise', 'yvelines', 'essonne'],

  heroImage: { src: '/images/departements/hauts-de-seine.jpg', alt: 'La Défense, Hauts-de-Seine' },

  centresExamen: [],
  centresProches: [],

  prefecture: {
    nom: 'Préfecture des Hauts-de-Seine',
    adresse: '',
    urlOfficielle: 'https://www.hauts-de-seine.gouv.fr', // à confirmer
    verifieLe: '',
  },

  ofii: {
    nom: "Office français de l'immigration et de l'intégration (OFII) — Direction territoriale de Montrouge",
    adresse: '55 rue Étienne Dolet, 92240 Malakoff',
    departementsCouverts: ['78', '92'],
    urlOfficielle: 'https://www.ofii.fr',
    sourceUrl: 'https://lannuaire.service-public.gouv.fr/ile-de-france/hauts-de-seine/e512f4b2-8f2b-4a4a-8e77-76b90b1eee6e',
    verifieLe: '2026-07-17',
  },

  piecesPrefecture: { sourceUrl: '', verifieLe: '', specificites: [] },

  delaisObserves: {
    actif: false, nbDossiers: 0, moisMin: null, moisMax: null,
    moisMediane: null, periodeObservation: '', misAJourLe: '',
  },

  publie: true,
};
