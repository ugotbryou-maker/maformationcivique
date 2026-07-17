/**
 * Modèle de données des pages locales « Examen civique à [Département] ».
 *
 * ⚠️ RÈGLE ABSOLUE N°1 : aucune donnée inventée. Chaque centre, adresse ou
 * spécificité préfectorale DOIT avoir une `sourceUrl` officielle et une date
 * `verifieLe`. Champ incertain → laisser vide + TODO, la page ne sera pas
 * publiée (garde-fou dans index.ts).
 *
 * ⚠️ RÈGLE ABSOLUE N°2 : aucune valeur réglementaire (40 questions, 45 min,
 * 32/40, niveaux A2/B1/B2…) dans ces fichiers. Tout vient de
 * `lib/reglementation.ts`.
 */

/** Mentions préparées — mêmes codes que /examen/CSP, /examen/CR, /examen/NAT */
export type MentionExamen = 'CSP' | 'CR' | 'NAT';

export interface CentreExamen {
  nom: string;
  /** Opérateur agréé : « CCI Paris Île-de-France », « France Éducation International »… */
  operateur: string;
  adresse: string;
  ville: string;
  codePostal: string;
  /** Lien de réservation OFFICIEL de l'opérateur — jamais un intermédiaire */
  urlReservation: string;
  mentionsProposees: MentionExamen[];
  /** OBLIGATOIRE — page officielle où l'information a été vérifiée */
  sourceUrl: string;
  /** OBLIGATOIRE — date de vérification, format YYYY-MM-DD */
  verifieLe: string;
}

/** Centre situé dans un département voisin (cas des départements sans centre) */
export interface CentreProche {
  nom: string;
  ville: string;
  /** Nom du département où se trouve ce centre (ex. « Rhône ») */
  departement: string;
  /** Distance depuis la ville-préfecture, en km (null si non calculée) */
  distanceKm: number | null;
  sourceUrl: string;
  verifieLe: string;
}

/**
 * Direction territoriale de l'OFII compétente pour le département — ancrage
 * ÉTATIQUE officiel. Utilisé tant qu'aucun centre partenaire n'est référencé :
 * on ne promeut aucun centre commercial, on renvoie vers l'interlocuteur public.
 * ⚠️ L'OFII n'organise pas l'examen (opérateurs agréés) — c'est l'interlocuteur
 * du parcours intégration/naturalisation. Le composant le formule correctement.
 */
export interface OfiiDirection {
  nom: string;
  adresse: string;
  /** Départements couverts par cette direction territoriale, ex. ['01','07','42','69'] */
  departementsCouverts: string[];
  /** Site institutionnel national */
  urlOfficielle: string;
  /** Source de vérification (annuaire .gouv.fr de préférence) — OBLIGATOIRE */
  sourceUrl: string;
  verifieLe: string;
}

export interface Prefecture {
  nom: string;
  adresse: string;
  /** Site officiel — domaine en .gouv.fr uniquement */
  urlOfficielle: string;
  verifieLe: string;
}

/**
 * Spécificités PUBLIÉES par la préfecture sur son site officiel.
 * ⛔ Interdiction absolue d'y mettre une pratique « supposée », « rapportée »
 * ou déduite d'un forum. Uniquement du publié officiel, sourcé et daté.
 */
export interface PiecesPrefecture {
  sourceUrl: string;
  verifieLe: string;
  specificites: string[];
}

/**
 * Délais observés — données first-party (dossiers suivis par les utilisateurs
 * de maformationcivique.fr). Ne s'affiche QUE si actif && nbDossiers >= 30.
 * ⛔ Jamais de délai issu d'une source externe ou d'une estimation.
 */
export interface DelaisObserves {
  actif: boolean;
  nbDossiers: number;
  moisMin: number | null;
  moisMax: number | null;
  moisMediane: number | null;
  /** Ex. « janvier – juin 2026 » */
  periodeObservation: string;
  misAJourLe: string;
}

/**
 * Image d'en-tête du département (photo de la préfecture / d'un lieu du
 * département). Fichier à déposer dans public/images/departements/<slug>.jpg.
 * Si absente, la bande d'en-tête reste affichée en dégradé tricolore seul.
 */
export interface HeroImage {
  /** Chemin public, ex. '/images/departements/rhone.jpg' */
  src: string;
  /** Texte alternatif descriptif (accessibilité + SEO image) */
  alt: string;
  /** Crédit / source de la photo, optionnel */
  credit?: string;
}

export interface Departement {
  /** Slug URL : /examen-civique/[slug] — kebab-case, sans accents */
  slug: string;
  /** Code départemental : « 93 », « 69 », « 2A »… */
  code: string;
  nom: string;
  /**
   * Nom précédé de la préposition correcte, pour insertion dans une phrase :
   * « en Seine-Saint-Denis », « dans le Rhône », « dans les Bouches-du-Rhône »,
   * « à Paris ». Évite les fautes de grammaire générées.
   */
  nomAvecPreposition: string;
  prefectureVille: string;
  region: string;
  villesPrincipales: string[];
  /** Slugs des départements limitrophes (maillage horizontal — seuls les publiés seront liés) */
  limitrophes: string[];
  /** Image d'en-tête (photo préfecture/département). Optionnelle. */
  heroImage?: HeroImage;
  centresExamen: CentreExamen[];
  centresProches: CentreProche[];
  prefecture: Prefecture;
  /** Ancrage étatique officiel (OFII). Optionnel mais permet la publication
   *  d'une page sans centre partenaire (voir canPublish). */
  ofii?: OfiiDirection;
  piecesPrefecture: PiecesPrefecture;
  delaisObserves: DelaisObserves;
  /**
   * Publication. Ne suffit pas à lui seul : index.ts vérifie aussi qu'il y a
   * au moins 1 centre réel complet OU 2 centres proches complets.
   */
  publie: boolean;
}
