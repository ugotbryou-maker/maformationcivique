/**
 * Val-d'Oise (95) — squelette vague 1.
 * Champs administratifs pré-remplis (à confirmer). Centres + préfecture à SOURCER (README).
 * ⚠️ prefectureVille : la préfecture du Val-d'Oise est à Cergy (chef-lieu) —
 * à confirmer, historiquement Pontoise.
 */

import type { Departement } from './types';

export const valDOise: Departement = {
  slug: 'val-d-oise',
  introUnique:
    'Le Val-d\'Oise est marqué par la présence de l\'**aéroport Paris-Charles-de-Gaulle**, en partie sur son territoire, qui en fait l\'un des principaux bassins d\'emploi pour les travailleurs étrangers d\'Île-de-France. Les démarches y sont donc particulièrement nombreuses, notamment autour de Sarcelles, Garges-lès-Gonesse et Argenteuil, commune la plus peuplée du département. **Cergy**, ville-préfecture née d\'une ville nouvelle des années 1970, concentre les services de l\'État. Les candidats à l\'examen civique se déplacent généralement vers Paris, accessible par le RER A, le RER C et les lignes Transilien H et J selon les communes.',
  contexteLocal:
    'Depuis Argenteuil, Sarcelles ou Garges-lès-Gonesse, Paris est accessible en trente à quarante-cinq minutes par les lignes Transilien H et J ou par le RER D. Cergy est reliée à La Défense et à Paris par le RER A et la ligne L. Pour les habitants du Vexin, à l\'ouest, les liaisons sont plus espacées : anticipez le trajet et prévoyez une marge confortable avant l\'heure de convocation. Si vous travaillez sur la plateforme de Roissy, pensez à concilier vos horaires de poste avec la session choisie.',
  code: '95',
  nom: "Val-d'Oise",
  nomAvecPreposition: "dans le Val-d'Oise",
  prefectureVille: 'Cergy',
  region: 'Île-de-France',
  villesPrincipales: ['Argenteuil', 'Cergy', 'Sarcelles', 'Franconville', 'Garges-lès-Gonesse'],
  limitrophes: ['seine-saint-denis', 'hauts-de-seine', 'yvelines', 'oise', 'seine-et-marne'],

  heroImage: { src: '/images/departements/val-d-oise.jpg', alt: "Val-d'Oise" },

  centresExamen: [],
  centresProches: [],

  prefecture: {
    nom: "Préfecture du Val-d'Oise",
    adresse: '',
    urlOfficielle: 'https://www.val-doise.gouv.fr', // à confirmer
    verifieLe: '',
  },

  ofii: {
    nom: "Office français de l'immigration et de l'intégration (OFII) — Direction territoriale de Cergy",
    adresse: 'Immeuble Ordinal, rue des Chaufours, 95002 Cergy-Pontoise Cedex',
    departementsCouverts: ['95'],
    urlOfficielle: 'https://www.ofii.fr',
    sourceUrl: 'https://lannuaire.service-public.gouv.fr/ile-de-france/val-d-oise/af9c1abe-b92a-4c18-9bd8-e02935782a3c',
    verifieLe: '2026-07-17',
  },

  piecesPrefecture: { sourceUrl: '', verifieLe: '', specificites: [] },

  delaisObserves: {
    actif: false, nbDossiers: 0, moisMin: null, moisMax: null,
    moisMediane: null, periodeObservation: '', misAJourLe: '',
  },

  publie: true,
};
