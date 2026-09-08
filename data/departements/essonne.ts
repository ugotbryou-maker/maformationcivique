/**
 * Essonne (91) — squelette Île-de-France.
 * Champs administratifs pré-remplis (à confirmer). OFII + préfecture à SOURCER.
 */

import type { Departement } from './types';

export const essonne: Departement = {
  slug: 'essonne',
  introUnique:
    'L\'Essonne s\'organise autour d\'**Évry-Courcouronnes**, ville-préfecture née de la fusion de deux communes en 2019, et du pôle scientifique de Massy–Saclay. Le département est bien relié à Paris par le RER C et le RER D, ce qui facilite le déplacement vers un centre d\'examen, la plupart des candidats essonniens passant l\'épreuve hors du département. Les communes du sud, autour d\'Étampes, restent nettement plus éloignées des services : le temps de trajet mérite d\'être anticipé avant de choisir un créneau. Les démarches de séjour et de naturalisation relèvent de la préfecture d\'Évry-Courcouronnes.',
  contexteLocal:
    'Le RER C et le RER D structurent les déplacements du département vers Paris, avec des temps de trajet allant d\'une trentaine de minutes depuis Massy à plus d\'une heure depuis Étampes. Le RER B dessert quant à lui le plateau de Saclay et Massy, bien relié à la fois à Paris et à l\'aéroport d\'Orly. Avant de réserver, comparez les dates disponibles dans plusieurs centres franciliens : passer l\'épreuve dans un département voisin ne pose aucune difficulté, le résultat étant valable partout.',
  code: '91',
  nom: 'Essonne',
  nomAvecPreposition: "dans l'Essonne",
  prefectureVille: 'Évry-Courcouronnes',
  region: 'Île-de-France',
  villesPrincipales: ['Évry-Courcouronnes', 'Corbeil-Essonnes', 'Massy', 'Savigny-sur-Orge', 'Sainte-Geneviève-des-Bois'],
  limitrophes: ['hauts-de-seine', 'val-de-marne', 'seine-et-marne', 'yvelines'],

  heroImage: { src: '/images/departements/essonne.jpg', alt: 'Essonne' },

  centresExamen: [],
  centresProches: [],

  prefecture: {
    nom: "Préfecture de l'Essonne",
    adresse: '',
    urlOfficielle: 'https://www.essonne.gouv.fr', // à confirmer
    verifieLe: '',
  },

  ofii: {
    nom: "Office français de l'immigration et de l'intégration (OFII) — Direction territoriale de Créteil",
    adresse: '13-15 rue Claude-Nicolas Ledoux, 94000 Créteil',
    departementsCouverts: ['91', '94'],
    urlOfficielle: 'https://www.ofii.fr',
    sourceUrl: 'https://lannuaire.service-public.gouv.fr/ile-de-france/val-de-marne/982c071e-172f-4d85-933c-40cb06c710b6',
    verifieLe: '2026-07-17',
  },

  piecesPrefecture: { sourceUrl: '', verifieLe: '', specificites: [] },

  delaisObserves: {
    actif: false, nbDossiers: 0, moisMin: null, moisMax: null,
    moisMediane: null, periodeObservation: '', misAJourLe: '',
  },

  publie: true,
};
