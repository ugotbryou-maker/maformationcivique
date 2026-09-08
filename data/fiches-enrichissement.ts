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
  moduleSlug?: string;
  /** Slug de la leçon, uniquement si le rattachement est direct. */
  lessonSlug?: string;
  /**
   * Guide pilier auquel renvoyer pour la démarche elle-même.
   *
   * C'est le mécanisme anti-cannibalisation : la fiche définit le terme, le
   * guide détient l'intention « faire la démarche ». Ce lien indique
   * explicitement à Google laquelle des deux pages fait autorité sur la
   * requête transactionnelle.
   */
  guide?: { href: string; label: string };
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
  // ── Symboles ───────────────────────────────────────────────────────────
  'drapeau-francais': {
    didYouKnow: "L'ordre des bandes est fixe : le bleu est toujours du côté de la hampe, c'est-à-dire du mât.",
    moduleSlug: 'republique',
    lessonSlug: 'symboles-republique',
  },
  'la-marseillaise': {
    didYouKnow: "Le chant fut composé à Strasbourg, à plus de 800 km de Marseille : il doit son nom aux volontaires marseillais qui l'entonnèrent en marchant sur Paris.",
    moduleSlug: 'republique',
    lessonSlug: 'symboles-republique',
  },
  'devise-liberte-egalite-fraternite': {
    didYouKnow: "La formule a longtemps concurrencé d'autres devises révolutionnaires, dont « Liberté, Égalité, Fraternité ou la Mort », abandonnée pour sa brutalité.",
    moduleSlug: 'republique',
    lessonSlug: 'symboles-republique',
  },
  'fete-nationale-14-juillet': {
    didYouKnow: "La loi de 1880 ne précise pas laquelle des deux dates elle commémore — l'ambiguïté était volontaire, pour rallier républicains modérés et radicaux.",
    moduleSlug: 'histoire',
    lessonSlug: 'regimes-politiques-1789',
  },
  'coq-gaulois': {
    didYouKnow: "Le coq orne la grille du parc de l'Élysée, dite « grille du Coq », alors qu'il n'a aucun statut officiel.",
    moduleSlug: 'republique',
    lessonSlug: 'symboles-republique',
  },
  'bonnet-phrygien': {
    didYouKnow: "Le bonnet a été choisi comme mascotte des Jeux olympiques de Paris 2024, sous les traits d'une « Phryge ».",
    moduleSlug: 'republique',
    lessonSlug: 'symboles-republique',
  },
  'drapeau-europeen': {
    didYouKnow: "Le nombre d'étoiles n'a jamais changé depuis 1955, alors que l'Union est passée de 6 à 27 États membres.",
    moduleSlug: 'institutions',
  },

  // ── Institutions ───────────────────────────────────────────────────────
  'president-de-la-republique': {
    didYouKnow: "Avant 1962, le président était élu par un collège de grands électeurs : c'est un référendum voulu par de Gaulle qui a instauré l'élection au suffrage universel direct.",
    moduleSlug: 'institutions',
  },
  'premier-ministre': {
    didYouKnow: "En période de cohabitation, le Premier ministre issu de la majorité parlementaire dirige la politique intérieure, le président conservant un rôle prépondérant en diplomatie et défense.",
    moduleSlug: 'institutions',
  },
  'assemblee-nationale': {
    didYouKnow: "Le palais Bourbon, où siègent les députés, fut construit pour une fille de Louis XIV avant de devenir le siège de la représentation nationale.",
    moduleSlug: 'institutions',
  },
  'senat': {
    didYouKnow: "Le président du Sénat assure l'intérim de la présidence de la République en cas de vacance : c'est arrivé deux fois, en 1969 et 1974.",
    moduleSlug: 'institutions',
  },
  'conseil-constitutionnel': {
    didYouKnow: "Depuis 2010, la question prioritaire de constitutionnalité permet à un simple justiciable de faire abroger une loi déjà en vigueur.",
    moduleSlug: 'institutions',
    lessonSlug: 'etat-droit-separation-pouvoirs',
  },
  'maire-et-mairie': {
    didYouKnow: "Le maire porte l'écharpe tricolore avec le bleu près du col, ce qui la distingue de celle des parlementaires, portée dans l'autre sens.",
    moduleSlug: 'institutions',
  },
  'constitution-1958': {
    didYouKnow: "Elle a été approuvée par près de 80 % des suffrages exprimés lors du référendum de septembre 1958.",
    moduleSlug: 'institutions',
    lessonSlug: 'etat-droit-separation-pouvoirs',
  },
  'declaration-droits-homme-1789': {
    didYouKnow: "Le texte n'est pas qu'un symbole : intégré au « bloc de constitutionnalité », il sert encore aujourd'hui à faire annuler des lois.",
    moduleSlug: 'droits',
    lessonSlug: 'droits-fondamentaux',
  },
  'union-europeenne': {
    didYouKnow: "Un ressortissant d'un autre pays de l'Union résidant en France peut voter et se présenter aux élections municipales et européennes, mais pas aux législatives ni à la présidentielle.",
    moduleSlug: 'institutions',
  },

  // ── Événements ─────────────────────────────────────────────────────────
  'revolution-francaise': {
    didYouKnow: "La Bastille ne comptait que sept prisonniers le jour de sa prise : sa portée fut avant tout symbolique, celle de la chute de l'arbitraire royal.",
    moduleSlug: 'histoire',
    lessonSlug: 'regimes-politiques-1789',
  },
  'abolition-esclavage-1848': {
    didYouKnow: "Schoelcher fit adopter le décret en moins de deux mois après sa nomination, craignant qu'un changement politique ne fasse échouer le projet.",
    moduleSlug: 'droits',
    lessonSlug: 'droits-fondamentaux',
  },
  'droit-de-vote-des-femmes': {
    didYouKnow: "Le Sénat de la IIIe République avait bloqué à six reprises des propositions de loi votées par les députés en faveur du vote des femmes.",
    moduleSlug: 'droits',
    lessonSlug: 'droits-fondamentaux',
  },
  'abolition-peine-de-mort': {
    didYouKnow: "En 1981, environ deux tiers des Français se déclaraient favorables au maintien de la peine de mort : l'abolition fut votée contre l'opinion majoritaire.",
    moduleSlug: 'droits',
    lessonSlug: 'droits-fondamentaux',
  },
  'armistice-11-novembre-1918': {
    didYouKnow: "La flamme de la tombe du Soldat inconnu, sous l'Arc de triomphe, est ravivée chaque soir depuis 1923, sans interruption.",
    moduleSlug: 'histoire',
    lessonSlug: 'conflits-mondiaux-resistance',
  },
  'victoire-8-mai-1945': {
    didYouKnow: "La capitulation fut signée deux fois : le 7 mai à Reims, puis le 8 mai à Berlin, à la demande de l'Union soviétique.",
    moduleSlug: 'histoire',
    lessonSlug: 'conflits-mondiaux-resistance',
  },

  // ── Figures complémentaires ────────────────────────────────────────────
  'montesquieu': {
    didYouKnow: "Les Lettres persanes furent publiées anonymement : la critique de la société française y était trop directe pour être signée.",
    moduleSlug: 'institutions',
    lessonSlug: 'etat-droit-separation-pouvoirs',
  },
  'victor-schoelcher': {
    didYouKnow: "Il légua sa bibliothèque et ses collections à la Guadeloupe et à la Martinique, où plusieurs établissements portent aujourd'hui son nom.",
    moduleSlug: 'droits',
    lessonSlug: 'droits-fondamentaux',
  },
  'napoleon-bonaparte': {
    didYouKnow: "Le Code civil de 1804 est toujours en vigueur : c'est le socle du droit de la famille, de la propriété et des contrats en France.",
    moduleSlug: 'histoire',
    lessonSlug: 'regimes-politiques-1789',
  },
  // ── Vocabulaire des démarches ──────────────────────────────────────────
  // Ces fiches renvoient vers le guide pilier qui porte l'intention
  // « démarche », et non vers un module de cours.
  'tcf-test-connaissance-francais': {
    didYouKnow: "Le TCF n'a ni réussite ni échec : on obtient un niveau. C'est la préfecture qui juge si ce niveau correspond à celui exigé pour votre démarche.",
    guide: { href: '/guides', label: 'Quel niveau de français pour ma démarche ?' },
  },
  'tef-test-evaluation-francais': {
    didYouKnow: "TEF et TCF sont interchangeables pour l'administration : présentez celui dont le centre d'examen est le plus accessible près de chez vous.",
    guide: { href: '/guides', label: 'Quel niveau de français pour ma démarche ?' },
  },
  'delf-dalf': {
    didYouKnow: "Un DELF est valable à vie, là où une attestation de TCF ou de TEF expire : à niveau égal, c'est le justificatif le plus durable.",
    guide: { href: '/guides', label: 'Quel niveau de français pour ma démarche ?' },
  },
  'ofii': {
    didYouKnow: "La formation civique de l'OFII est obligatoire et ne peut être remplacée par aucune plateforme privée : notre rôle est de vous y préparer, pas de s'y substituer.",
    guide: { href: '/guides/examen-civique', label: "Tout savoir sur l'examen civique" },
  },
  'contrat-integration-republicaine': {
    didYouKnow: "Le respect du CIR est pris en compte lors de vos demandes ultérieures de titre de séjour : ce n'est pas une simple formalité d'accueil.",
    guide: { href: '/guides/titre-de-sejour', label: 'Le guide du titre de séjour' },
  },
  'certificat-de-nationalite-francaise': {
    didYouKnow: "Le CNF ne donne pas la nationalité : il prouve que vous l'êtes déjà. On le confond souvent avec le décret de naturalisation, qui, lui, la confère.",
    guide: { href: '/guides/naturalisation', label: 'Le guide de la naturalisation' },
  },
  'prefecture': {
    didYouKnow: "Depuis la dématérialisation, la préfecture ne reçoit plus pour le dépôt des dossiers : elle convoque surtout pour les empreintes et la remise du titre.",
    guide: { href: '/guides/titre-de-sejour', label: 'Le guide du titre de séjour' },
  },
  'recepisse-titre-de-sejour': {
    didYouKnow: "Le droit de travailler n'est pas automatique avec un récépissé : il figure noir sur blanc sur le document, et son absence vaut interdiction.",
    guide: { href: '/guides/titre-de-sejour', label: 'Le guide du titre de séjour' },
  },
  'vls-ts': {
    didYouKnow: "Oublier la validation en ligne dans les trois mois rend le séjour irrégulier, alors même que le visa est toujours valide.",
    guide: { href: '/guides/titre-de-sejour', label: 'Le guide du titre de séjour' },
  },
  'regroupement-familial': {
    didYouKnow: "La condition de logement est vérifiée par une enquête, souvent menée par la mairie : sa surface doit correspondre au nombre de personnes attendues.",
    guide: { href: '/guides/titre-de-sejour', label: 'Le guide du titre de séjour' },
  },
  'attestation-d-accueil': {
    didYouKnow: "La mairie peut refuser l'attestation si le logement ou les ressources sont jugés insuffisants : ce n'est pas une simple formalité déclarative.",
    guide: { href: '/guides', label: 'Les guides des démarches' },
  },
  'entretien-d-assimilation': {
    didYouKnow: "Un dossier remplissant toutes les conditions de durée peut être refusé sur le seul motif d'un entretien d'assimilation jugé insuffisant.",
    guide: { href: '/guides/naturalisation', label: 'Le guide de la naturalisation' },
  },
  'declaration-de-nationalite-par-mariage': {
    didYouKnow: "Contrairement à la naturalisation, qui reste discrétionnaire, la déclaration par mariage relève d'un droit lorsque les conditions sont réunies.",
    guide: { href: '/guides/naturalisation', label: 'Le guide de la naturalisation' },
  },
  'timbre-fiscal-electronique': {
    didYouKnow: "Un timbre non utilisé est remboursable : conservez son identifiant à 16 chiffres tant que la démarche n'est pas finalisée.",
    guide: { href: '/guides', label: 'Les guides des démarches' },
  },
  'carte-sejour-vie-privee-et-familiale': {
    didYouKnow: "C'est l'un des rares titres qui autorise à travailler sans démarche supplémentaire, là où d'autres exigent une autorisation de travail distincte.",
    guide: { href: '/guides/titre-de-sejour', label: 'Le guide du titre de séjour' },
  },
};

export function getEnrichissement(slug: string): FicheEnrichissement | undefined {
  return fichesEnrichissement[slug];
}
