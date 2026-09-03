/**
 * Enrichissement éditorial des fiches bonus — complément de data/fiches.ts.
 *
 * Volontairement séparé du fichier de données principal : data/fiches.ts est
 * consommé par la page hub /fiches et par le sitemap, alors que ces champs-ci
 * ne servent qu'au template de fiche individuelle (/fiches/[slug]).
 *
 * Deux objectifs :
 *  1. Contenu — une anecdote « Le saviez-vous ? » par fiche, pour donner plus
 *     de matière indexable (les fiches faisaient ~250 mots).
 *  2. Maillage — rattacher chaque fiche au module (et, quand la correspondance
 *     est évidente, à la leçon) du programme civique qu'elle complète, afin de
 *     relier le cluster /fiches au cluster /modulesciviques.
 *
 * `lessonSlug` est facultatif : on ne le renseigne que lorsque le rattachement
 * est direct et incontestable. Sinon, on pointe le module seul.
 */

export interface FicheEnrichissement {
  /** Anecdote factuelle, 1 à 2 phrases. */
  didYouKnow: string;
  /** Slug du module civique complété par la fiche (cf. data/modules.ts). */
  moduleSlug: string;
  /** Slug de la leçon, uniquement si le rattachement est direct. */
  lessonSlug?: string;
}

export const fichesEnrichissement: Record<string, FicheEnrichissement> = {
  // ── Figures ────────────────────────────────────────────────────────────
  'marianne': {
    didYouKnow:
      "Aucun buste officiel n'est imposé aux communes : chaque mairie choisit librement le visage de Marianne qu'elle expose.",
    moduleSlug: 'republique',
    lessonSlug: 'symboles-republique',
  },
  'marie-curie': {
    didYouKnow:
      "Elle est la seule personne à avoir reçu un prix Nobel dans deux disciplines scientifiques différentes : la physique en 1903, la chimie en 1911.",
    moduleSlug: 'histoire',
  },
  'victor-hugo': {
    didYouKnow:
      "Ses funérailles nationales, en 1885, ont rassemblé près de deux millions de personnes à Paris avant son inhumation au Panthéon.",
    moduleSlug: 'histoire',
  },
  'charles-de-gaulle': {
    didYouKnow:
      "Il quitte le pouvoir en 1969 après avoir perdu un référendum qu'il avait lui-même engagé, fidèle au lien direct qu'il revendiquait avec le peuple.",
    moduleSlug: 'histoire',
    lessonSlug: 'veme-republique',
  },
  'simone-veil': {
    didYouKnow:
      "Rescapée d'Auschwitz, elle est entrée au Panthéon en 2018 aux côtés de son époux Antoine Veil.",
    moduleSlug: 'droits',
    lessonSlug: 'egalite-dignite-libertes',
  },
  'jean-moulin': {
    didYouKnow:
      "Son transfert au Panthéon en 1964 a été accompagné d'un discours d'André Malraux resté l'un des plus célèbres de la Ve République.",
    moduleSlug: 'histoire',
    lessonSlug: 'conflits-mondiaux-resistance',
  },
  'olympe-de-gouges': {
    didYouKnow:
      "Elle publie la Déclaration des droits de la femme et de la citoyenne en 1791 ; elle est guillotinée deux ans plus tard, en 1793.",
    moduleSlug: 'droits',
    lessonSlug: 'egalite-dignite-libertes',
  },
  'jules-ferry': {
    didYouKnow:
      "Les lois de 1881 et 1882 qui portent son nom rendent l'école primaire gratuite, laïque et obligatoire.",
    moduleSlug: 'republique',
    lessonSlug: 'laicite',
  },

  // ── Lieux ──────────────────────────────────────────────────────────────
  'tour-eiffel': {
    didYouKnow:
      "Prévue pour être démontée au bout de vingt ans, elle doit sa survie à son utilité comme antenne de télégraphie sans fil.",
    moduleSlug: 'histoire',
    lessonSlug: 'geographie-france',
  },
  'chateau-de-versailles': {
    didYouKnow:
      "C'est dans sa galerie des Glaces qu'a été signé, en 1919, le traité de Versailles mettant fin à la Première Guerre mondiale.",
    moduleSlug: 'histoire',
    lessonSlug: 'regimes-politiques-1789',
  },
  'mont-saint-michel': {
    didYouKnow:
      "Le site est inscrit au patrimoine mondial de l'UNESCO depuis 1979.",
    moduleSlug: 'histoire',
    lessonSlug: 'geographie-france',
  },
  'le-louvre': {
    didYouKnow:
      "Ancien palais royal devenu musée public sous la Révolution, il est aujourd'hui le musée le plus visité au monde.",
    moduleSlug: 'histoire',
    lessonSlug: 'geographie-france',
  },
  'notre-dame-de-paris': {
    didYouKnow:
      "Depuis la loi de 1905, l'État est propriétaire de la cathédrale : le culte catholique en est l'affectataire, pas le propriétaire.",
    moduleSlug: 'republique',
    lessonSlug: 'laicite',
  },
  'chateaux-de-la-loire': {
    didYouKnow:
      "Le Val de Loire est inscrit au patrimoine mondial de l'UNESCO depuis l'an 2000, au titre de paysage culturel vivant.",
    moduleSlug: 'histoire',
    lessonSlug: 'geographie-france',
  },
  'verdun': {
    didYouKnow:
      "La bataille de 1916 a duré près de dix mois et reste, en France, le symbole de la Première Guerre mondiale.",
    moduleSlug: 'histoire',
    lessonSlug: 'conflits-mondiaux-resistance',
  },
  'le-pantheon': {
    didYouKnow:
      "Édifié comme une église, il est transformé dès 1791 en monument destiné à honorer les grandes personnalités de la Nation.",
    moduleSlug: 'histoire',
    lessonSlug: 'regimes-politiques-1789',
  },
};

export function getEnrichissement(slug: string): FicheEnrichissement | undefined {
  return fichesEnrichissement[slug];
}
