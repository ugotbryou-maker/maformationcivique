/**
 * Val-de-Marne (94) — squelette vague 1.
 * Champs administratifs pré-remplis (à confirmer). Centres + préfecture à SOURCER (README).
 */

import type { Departement } from './types';

export const valDeMarne: Departement = {
  slug: 'val-de-marne',
  introUnique:
    'Le Val-de-Marne se distingue par sa position de charnière entre Paris et la grande couronne, structurée autour de **Créteil**, ville-préfecture, et de pôles comme Vitry-sur-Seine ou Champigny-sur-Marne. Le département accueille l\'aéroport d\'Orly, premier employeur local, ce qui explique la forte présence de salariés étrangers dans les démarches de titre de séjour. Pour l\'examen civique, les candidats val-de-marnais bénéficient d\'un accès direct à Paris par les lignes 8 et 14 du métro ainsi que par le RER A et le RER D. La ligne 15 du Grand Paris Express améliorera encore ces liaisons de banlieue à banlieue.',
  contexteLocal:
    'Les lignes 8 et 14 du métro, le RER A, le RER C et le RER D desservent l\'essentiel du département. Depuis Créteil, Vitry-sur-Seine ou Ivry-sur-Seine, Paris se rejoint en vingt à trente minutes. Les communes de l\'est, autour de Champigny-sur-Marne et Villiers-sur-Marne, dépendent davantage du RER E et des bus. Si vous travaillez sur la plateforme d\'Orly, tenez compte de vos horaires de poste au moment de choisir une session : les créneaux du matin sont souvent les premiers complets.',
  code: '94',
  nom: 'Val-de-Marne',
  nomAvecPreposition: 'dans le Val-de-Marne',
  prefectureVille: 'Créteil',
  region: 'Île-de-France',
  villesPrincipales: ['Créteil', 'Vitry-sur-Seine', 'Champigny-sur-Marne'],
  limitrophes: ['paris', 'hauts-de-seine', 'seine-saint-denis', 'essonne', 'seine-et-marne'],

  heroImage: { src: '/images/departements/val-de-marne.jpg', alt: 'Val-de-Marne' },

  centresExamen: [],
  centresProches: [],

  prefecture: {
    nom: 'Préfecture du Val-de-Marne',
    adresse: '',
    urlOfficielle: 'https://www.val-de-marne.gouv.fr', // à confirmer
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
