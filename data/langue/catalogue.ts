/**
 * Catalogue léger des modules de français : slug, titre, niveau, nombre de
 * leçons. Rien d'autre — surtout pas les exercices.
 *
 * ⚠️ FICHIER GÉNÉRÉ. Ne pas éditer à la main : il est réécrit au `prebuild`
 * par `scripts/catalogue-langue.mjs` à partir de `data/langue/index.ts`.
 *
 * À importer partout où l'on n'a besoin que de compter ou de nommer des
 * modules — progression, tableaux de bord, fiches client. Importer
 * `@/data/langue` pour cela tirait 1,87 Mo dans la fonction serveur et se
 * payait en temps processeur à chaque démarrage à froid.
 */

export interface ModuleLeger {
  slug: string;
  titre: string;
  niveau: string;
  /** Slugs des leçons du module, dans l'ordre. Sans leur contenu. */
  lecons: string[];
}

export const a2Catalogue: ModuleLeger[] = [
  { slug: "a2-vie-quotidienne", titre: "Vie quotidienne & famille",
    niveau: "A2",
    lecons: ["a2-se-presenter", "a2-famille-relations", "a2-activites-quotidiennes", "a2-courses-achats", "a2-cuisine-française", "a2-loisirs"] },
  { slug: "a2-demarches-admin", titre: "Démarches administratives",
    niveau: "A2",
    lecons: ["a2-mairie-services", "a2-prefecture-titre-sejour", "a2-securite-sociale", "a2-impots-taxes", "a2-caf-allocations"] },
  { slug: "a2-logement", titre: "Logement & voisinage",
    niveau: "A2",
    lecons: ["a2-chercher-logement", "a2-comprendre-bail", "a2-charges-factures", "a2-voisinage", "a2-reparations-entretien"] },
  { slug: "a2-travail", titre: "Travail & emploi",
    niveau: "A2",
    lecons: ["a2-chercher-emploi", "a2-entretien-embauche", "a2-contrat-travail", "a2-droits-travailleurs", "a2-pole-emploi-chomage"] },
  { slug: "a2-sante", titre: "Santé & urgences",
    niveau: "A2",
    lecons: ["a2-chez-medecin", "a2-pharmacie", "a2-urgences-appels", "a2-sante-mentale-stress", "a2-medecin-traitant"] },
  { slug: "a2-transports", titre: "Transports & déplacements",
    niveau: "A2",
    lecons: ["a2-metro-bus", "a2-sncf-voyages", "a2-voiture-permis", "a2-covoiturage-velo"] },
  { slug: "a2-grammaire", titre: "Grammaire fondamentale",
    niveau: "A2",
    lecons: ["a2-articles-determinants", "a2-pronoms-personnels", "a2-negation-interrogation", "a2-conditionnel-politesse"] },
  { slug: "a2-conjugaison", titre: "Conjugaison fondamentale",
    niveau: "A2",
    lecons: ["a2-present-irreguliers", "a2-passe-compose", "a2-imparfait", "a2-futur-proche-imperatif"] },
];

export const b1Catalogue: ModuleLeger[] = [
  { slug: "b1-actualite", titre: "Actualité et presse française",
    niveau: "B1",
    lecons: ["b1-lire-journaux", "b1-medias-information", "b1-evenements-actualite", "b1-debat-societaux", "b1-economie-francaise"] },
  { slug: "b1-exprimer-opinion", titre: "Exprimer son opinion",
    niveau: "B1",
    lecons: ["b1-donner-avis", "b1-argumenter", "b1-nuancer-moderer", "b1-discussion-points-vue"] },
  { slug: "b1-vie-societe", titre: "Vie en société",
    niveau: "B1",
    lecons: ["b1-systeme-education", "b1-systeme-sante", "b1-vie-familiale", "b1-logement-droits", "b1-droits-citoyens"] },
  { slug: "b1-institutions", titre: "Les institutions françaises",
    niveau: "B1",
    lecons: ["b1-republique-constitution", "b1-pouvoirs-executif-legislatif", "b1-elections-systeme", "b1-collectivites-decentralisation"] },
  { slug: "b1-rediger", titre: "Rédiger en français",
    niveau: "B1",
    lecons: ["b1-lettre-formelle", "b1-email-professionnel", "b1-documents-administratifs", "b1-compte-rendu-rapport"] },
  { slug: "b1-entretien", titre: "L'entretien en français",
    niveau: "B1",
    lecons: ["b1-entretien-embauche", "b1-entretien-prefecture", "b1-parler-de-soi", "b1-entretien-naturalisation-prep"] },
  { slug: "b1-travail-droits", titre: "Le monde du travail et ses droits",
    niveau: "B1",
    lecons: ["b1-contrat-travail-avance", "b1-syndicats-representation", "b1-licenciement-rupture", "b1-discrimination-egalite", "b1-pole-emploi-reconversion"] },
  { slug: "b1-grammaire", titre: "Grammaire B1",
    niveau: "B1",
    lecons: ["b1-pronoms-relatifs-composes", "b1-place-accord-adjectif", "b1-doubles-pronoms", "b1-adverbes"] },
  { slug: "b1-conjugaison", titre: "Conjugaison B1",
    niveau: "B1",
    lecons: ["b1-futur-simple", "b1-conditionnel-present", "b1-plus-que-parfait", "b1-subjonctif-recap"] },
];

export const b2Catalogue: ModuleLeger[] = [
  { slug: "b2-textes-argumentatifs", titre: "Textes argumentatifs",
    niveau: "B2",
    lecons: ["b2-analyser-texte-argumentatif", "b2-types-arguments", "b2-sophismes-biais-argumentatifs", "b2-analyse-comparative-textes"] },
  { slug: "b2-debat-formel", titre: "Le débat formel",
    niveau: "B2",
    lecons: ["b2-prendre-position", "b2-refuter-avec-tact", "b2-moderer-debat", "b2-debat-mediatique"] },
  { slug: "b2-expression-ecrite", titre: "Expression écrite avancée",
    niveau: "B2",
    lecons: ["b2-essai-argumentatif", "b2-synthese-documents", "b2-style-soutenu", "b2-rapport-note-synthese"] },
  { slug: "b2-nuances-culturelles", titre: "Nuances culturelles",
    niveau: "B2",
    lecons: ["b2-humour-ironie", "b2-expressions-idiomatiques", "b2-codes-sociaux-implicites", "b2-sous-entendus-implicite"] },
  { slug: "b2-entretien-naturalisation", titre: "L'entretien de naturalisation (approfondissement)",
    niveau: "B2",
    lecons: ["b2-histoire-france-essentielle", "b2-fonctionnement-etat-approfondi", "b2-laicite-cas-pratiques", "b2-recit-parcours-approfondi", "b2-simulation-entretien-complet"] },
  { slug: "b2-lettres-formelles", titre: "Correspondance formelle avancée",
    niveau: "B2",
    lecons: ["b2-recours-administratif", "b2-lettre-motivation-avancee", "b2-reclamation-complexe", "b2-mise-en-demeure"] },
  { slug: "b2-grammaire", titre: "Grammaire B2",
    niveau: "B2",
    lecons: ["b2-subjonctif-superlatif-restriction", "b2-concession-avancee", "b2-discours-rapporte-avance", "b2-nominalisation-avancee", "b2-subjonctif-passe-concordance"] },
  { slug: "b2-conjugaison", titre: "Conjugaison B2",
    niveau: "B2",
    lecons: ["b2-conditionnel-passe-approfondi", "b2-passe-simple-complet", "b2-concordance-discours-indirect", "b2-accords-participe-passe-complexes", "b2-infinitif-gerondif-passe"] },
];

export const transversalCatalogue: ModuleLeger[] = [
  { slug: "transversal-phonetique", titre: "Phonétique du français",
    niveau: "transversal",
    lecons: ["trans-voyelles-orales", "trans-liaisons", "trans-intonation", "trans-consonnes-difficiles", "trans-rythme-accent-tonique", "trans-erreurs-prononciation-frequentes"] },
  { slug: "transversal-orthographe", titre: "Orthographe du français",
    niveau: "transversal",
    lecons: ["trans-homophones-grammaticaux", "trans-accords-pluriel-complexes", "trans-accents-signes-orthographiques", "trans-doubles-consonnes-lettres-muettes", "trans-homophones-lexicaux"] },
  { slug: "transversal-erreurs-frequentes", titre: "Erreurs fréquentes des apprenants",
    niveau: "transversal",
    lecons: ["trans-faux-amis", "trans-constructions-verbales-incorrectes", "trans-anglicismes-emprunts", "trans-erreurs-syntaxe-recurrentes"] },
];

export const examensCatalogue: ModuleLeger[] = [
  { slug: "examen-blanc-a2", titre: "Examen blanc A2",
    niveau: "A2",
    lecons: ["examen-a2-comprehension", "examen-a2-grammaire-vocabulaire", "examen-a2-simulation-entretien-ofii"] },
  { slug: "examen-blanc-b1", titre: "Examen blanc B1",
    niveau: "B1",
    lecons: ["examen-b1-comprehension-ecrite", "examen-b1-grammaire-vocabulaire", "examen-b1-production-ecrite-orale"] },
  { slug: "examen-blanc-b2", titre: "Examen blanc B2",
    niveau: "B2",
    lecons: ["examen-b2-connaissances-civiques", "examen-b2-questions-pieges-argumentation"] },
];

export const tousCatalogue: ModuleLeger[] = [
  ...a2Catalogue, ...b1Catalogue, ...b2Catalogue, ...transversalCatalogue,
];

export const totalLeconsLangue = tousCatalogue.reduce((s, m) => s + m.lecons.length, 0);

/** Tous les slugs de leçons de français, tous niveaux confondus. */
export const tousSlugsLecons: string[] = tousCatalogue.flatMap((m) => m.lecons);
