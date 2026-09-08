/**
 * Seine-et-Marne (77) — squelette Île-de-France.
 * Champs administratifs pré-remplis (à confirmer). OFII + préfecture à SOURCER.
 */

import type { Departement } from './types';

export const seineEtMarne: Departement = {
  slug: 'seine-et-marne',
  introUnique:
    'La Seine-et-Marne est de loin le **plus vaste département d\'Île-de-France** : elle en représente à elle seule près de la moitié de la superficie. Cette étendue change tout pour les candidats à l\'examen civique — un habitant de Provins ou de Nemours n\'a pas la même contrainte de déplacement qu\'un résident de Chelles ou de Champs-sur-Marne, aux portes de Paris. Le département est traversé par le RER A à l\'ouest et desservi par le RER D et les lignes Transilien P et R, mais les temps de trajet vers un centre d\'examen peuvent dépasser l\'heure depuis l\'est du territoire. Anticipez ce paramètre au moment de réserver.',
  contexteLocal:
    'Compte tenu de l\'étendue du département, le choix du centre dépend surtout de votre position. Depuis l\'ouest — Chelles, Champs-sur-Marne, Pontault-Combault — Paris est à moins de trente minutes par le RER A ou E. Depuis Melun ou Meaux, comptez plutôt une heure via le RER D ou la ligne P. Pour les communes de l\'est, il est souvent plus rapide de rejoindre un centre par la route que par le rail. Vérifiez l\'horaire de convocation avant de choisir : une session matinale peut imposer un départ très tôt.',
  code: '77',
  nom: 'Seine-et-Marne',
  nomAvecPreposition: 'en Seine-et-Marne',
  prefectureVille: 'Melun',
  region: 'Île-de-France',
  villesPrincipales: ['Melun', 'Meaux', 'Chelles', 'Champs-sur-Marne', 'Pontault-Combault'],
  limitrophes: ['essonne', 'val-de-marne', 'seine-saint-denis', 'val-d-oise'],

  heroImage: { src: '/images/departements/seine-et-marne.jpg', alt: 'Seine-et-Marne' },

  centresExamen: [],
  centresProches: [],

  prefecture: {
    nom: 'Préfecture de Seine-et-Marne',
    adresse: '',
    urlOfficielle: 'https://www.seine-et-marne.gouv.fr', // à confirmer
    verifieLe: '',
  },

  ofii: {
    nom: "Office français de l'immigration et de l'intégration (OFII) — Direction territoriale de Melun",
    adresse: '2 bis avenue Jean-Jaurès, 77000 Melun',
    departementsCouverts: ['77'],
    urlOfficielle: 'https://www.ofii.fr',
    sourceUrl: 'https://lannuaire.service-public.gouv.fr/ile-de-france/seine-et-marne/2ae12855-6a34-4afa-9baa-cc4ca917cd98',
    verifieLe: '2026-07-17',
  },

  piecesPrefecture: { sourceUrl: '', verifieLe: '', specificites: [] },

  delaisObserves: {
    actif: false, nbDossiers: 0, moisMin: null, moisMax: null,
    moisMediane: null, periodeObservation: '', misAJourLe: '',
  },

  publie: true,
};
