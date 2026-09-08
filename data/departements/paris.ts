/**
 * Paris (75) — squelette vague 1.
 *
 * Champs administratifs pré-remplis (à confirmer d'un coup d'œil).
 * ⚠️ À SOURCER avant publication (README) : centresExamen, préfecture
 * (adresse, urlOfficielle, pièces). Reste en 404 tant que publie:false.
 *
 * Cas particulier : Paris est à la fois commune et département — le H1 est
 * collapsé automatiquement (« Examen civique à Paris (75) »).
 */

import type { Departement } from './types';

export const paris: Departement = {
  slug: 'paris',
  introUnique:
    'Paris concentre la plus forte densité de démarches d\'accès au séjour et à la nationalité de France, et c\'est l\'un des rares départements à disposer d\'un centre d\'examen agréé **sur son propre territoire**. Les candidats parisiens n\'ont donc pas à se déplacer en banlieue, contrairement à la majorité des Franciliens. Attention toutefois : la demande y est proportionnelle à la population, et les créneaux partent vite. Réserver plusieurs semaines à l\'avance reste la règle. Paris étant à la fois commune et département, la préfecture de Police et la préfecture de Paris se partagent les compétences — une particularité qui n\'existe nulle part ailleurs.',
  contexteLocal:
    'Disposer d\'un centre dans Paris intra-muros ne dispense pas d\'anticiper. Les créneaux les plus demandés — samedis et fins de journée — sont réservés plusieurs semaines à l\'avance. Si aucune date ne convient, élargissez votre recherche à la petite couronne : depuis Paris, les centres des Hauts-de-Seine ou du Val-de-Marne sont souvent accessibles en moins de quarante minutes en métro ou en RER. Le résultat étant valable quel que soit le lieu de passage, il n\'y a aucun inconvénient à passer l\'épreuve hors de son département de résidence.',
  code: '75',
  nom: 'Paris',
  nomAvecPreposition: 'à Paris',
  prefectureVille: 'Paris',
  region: 'Île-de-France',
  villesPrincipales: ['Paris'],
  limitrophes: ['hauts-de-seine', 'seine-saint-denis', 'val-de-marne'],

  heroImage: {
    src: '/images/departements/paris.jpg',
    alt: 'Vue de Paris',
  },

  centresExamen: [],
  centresProches: [],

  prefecture: {
    nom: 'Préfecture de Paris',
    adresse: '',
    urlOfficielle: '', // Paris a une organisation particulière (préf. de police / préf. de région)
    verifieLe: '',
  },

  ofii: {
    nom: "Office français de l'immigration et de l'intégration (OFII) — Direction territoriale de Paris",
    adresse: '83 rue de Patay, 75013 Paris',
    departementsCouverts: ['75'],
    urlOfficielle: 'https://www.ofii.fr',
    sourceUrl: 'https://lannuaire.service-public.gouv.fr/ile-de-france/paris/ofii-75056-01',
    verifieLe: '2026-07-17',
  },

  piecesPrefecture: {
    sourceUrl: '',
    verifieLe: '',
    specificites: [],
  },

  delaisObserves: {
    actif: false,
    nbDossiers: 0,
    moisMin: null,
    moisMax: null,
    moisMediane: null,
    periodeObservation: '',
    misAJourLe: '',
  },

  publie: true,
};
