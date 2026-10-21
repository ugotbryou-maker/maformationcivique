"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allModules = exports.examenModules = exports.transversalModules = exports.b2Modules = exports.b1Modules = exports.a2Modules = void 0;
exports.getModulesByLevel = getModulesByLevel;
exports.getModuleBySlug = getModuleBySlug;
exports.getLessonBySlug = getLessonBySlug;
exports.getExamenByLevel = getExamenByLevel;
exports.getTotalLessonCount = getTotalLessonCount;
exports.getTotalExerciseCount = getTotalExerciseCount;
// A2
const vie_quotidienne_1 = require("./a2/vie-quotidienne");
const demarches_admin_1 = require("./a2/demarches-admin");
const logement_1 = require("./a2/logement");
const travail_1 = require("./a2/travail");
const sante_1 = require("./a2/sante");
const transports_1 = require("./a2/transports");
const grammaire_1 = require("./a2/grammaire");
const conjugaison_1 = require("./a2/conjugaison");
// B1
const actualite_1 = require("./b1/actualite");
const exprimer_opinion_1 = require("./b1/exprimer-opinion");
const vie_societe_1 = require("./b1/vie-societe");
const institutions_1 = require("./b1/institutions");
const rediger_1 = require("./b1/rediger");
const entretien_1 = require("./b1/entretien");
const travail_droits_1 = require("./b1/travail-droits");
const grammaire_2 = require("./b1/grammaire");
const conjugaison_2 = require("./b1/conjugaison");
// B2
const textes_argumentatifs_1 = require("./b2/textes-argumentatifs");
const debat_formel_1 = require("./b2/debat-formel");
const expression_ecrite_1 = require("./b2/expression-ecrite");
const nuances_culturelles_1 = require("./b2/nuances-culturelles");
const entretien_naturalisation_1 = require("./b2/entretien-naturalisation");
const lettres_formelles_1 = require("./b2/lettres-formelles");
const grammaire_3 = require("./b2/grammaire");
const conjugaison_3 = require("./b2/conjugaison");
// Transversal
const phonetique_1 = require("./transversal/phonetique");
const orthographe_1 = require("./transversal/orthographe");
const erreurs_frequentes_1 = require("./transversal/erreurs-frequentes");
// Examens blancs
const examen_a2_1 = require("./examens/examen-a2");
const examen_b1_1 = require("./examens/examen-b1");
const examen_b2_1 = require("./examens/examen-b2");
exports.a2Modules = [
    vie_quotidienne_1.a2VieQuotidienne,
    demarches_admin_1.a2DemarchesAdmin,
    logement_1.a2Logement,
    travail_1.a2Travail,
    sante_1.a2Sante,
    transports_1.a2Transports,
    grammaire_1.a2Grammaire,
    conjugaison_1.a2Conjugaison,
];
exports.b1Modules = [
    actualite_1.b1Actualite,
    exprimer_opinion_1.b1ExprimerOpinion,
    vie_societe_1.b1VieSociete,
    institutions_1.b1Institutions,
    rediger_1.b1Rediger,
    entretien_1.b1Entretien,
    travail_droits_1.b1TravailDroits,
    grammaire_2.b1Grammaire,
    conjugaison_2.b1Conjugaison,
];
exports.b2Modules = [
    textes_argumentatifs_1.b2TextesArgumentatifs,
    debat_formel_1.b2DebatFormel,
    expression_ecrite_1.b2ExpressionEcrite,
    nuances_culturelles_1.b2NuancesCulturelles,
    entretien_naturalisation_1.b2EntretienNaturalisation,
    lettres_formelles_1.b2LettresFormelles,
    grammaire_3.b2Grammaire,
    conjugaison_3.b2Conjugaison,
];
exports.transversalModules = [
    phonetique_1.transversalPhonetique,
    orthographe_1.transversalOrthographe,
    erreurs_frequentes_1.transversalErreursFrequentes,
];
exports.examenModules = [examen_a2_1.examenBlancA2, examen_b1_1.examenBlancB1, examen_b2_1.examenBlancB2];
exports.allModules = [
    ...exports.a2Modules,
    ...exports.b1Modules,
    ...exports.b2Modules,
    ...exports.transversalModules,
    ...exports.examenModules,
];
function getModulesByLevel(level) {
    switch (level) {
        case 'A2':
            return exports.a2Modules;
        case 'B1':
            return exports.b1Modules;
        case 'B2':
            return exports.b2Modules;
        case 'transversal':
            return exports.transversalModules;
        default:
            return [];
    }
}
function getModuleBySlug(slug) {
    return exports.allModules.find((m) => m.slug === slug);
}
function getLessonBySlug(moduleSlug, lessonSlug) {
    const mod = getModuleBySlug(moduleSlug);
    return mod?.lessons.find((l) => l.slug === lessonSlug);
}
function getExamenByLevel(level) {
    return exports.examenModules.find((m) => m.level === level);
}
function getTotalLessonCount() {
    return exports.allModules.reduce((sum, m) => sum + m.lessons.length, 0);
}
function getTotalExerciseCount() {
    return exports.allModules.reduce((sum, m) => sum + m.lessons.reduce((s, l) => s + l.exercises.length, 0), 0);
}
