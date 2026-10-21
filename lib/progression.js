"use strict";
/**
 * Progression par volet — civique, linguistique, et global sur le périmètre
 * réellement souscrit.
 *
 * POURQUOI PAR VOLET : un élève venu pour le français seul affichait 0 % tant
 * qu'il n'avait pas touché aux leçons civiques, alors qu'il pouvait avoir
 * terminé la moitié de son parcours. Le pourcentage ne disait pas où il en
 * était, il disait ce qu'il n'avait pas acheté. Un cabinet qui lit ce chiffre
 * en conclut que son client décroche, à tort.
 *
 * ⚠️ Module serveur : il importe les données de langue (1,87 Mo). Ne jamais
 * l'importer depuis un composant « use client ».
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LIBELLE_VOLET = exports.TOTAL_LECONS_LANGUE = exports.TOTAL_LECONS_CIVIQUES = void 0;
exports.voletDuPlan = voletDuPlan;
exports.calculerProgression = calculerProgression;
exports.voletsEntames = voletsEntames;
const modules_1 = require("@/data/modules");
const langue_1 = require("@/data/langue");
const SLUGS_CIVIQUES = new Set(modules_1.modules.map((m) => m.slug));
const SLUGS_LANGUE = new Set([...langue_1.a2Modules, ...langue_1.b1Modules, ...langue_1.b2Modules, ...langue_1.transversalModules].map((m) => m.slug));
exports.TOTAL_LECONS_CIVIQUES = modules_1.modules.reduce((a, m) => a + m.lessons.length, 0);
exports.TOTAL_LECONS_LANGUE = [...langue_1.a2Modules, ...langue_1.b1Modules, ...langue_1.b2Modules, ...langue_1.transversalModules]
    .reduce((a, m) => a + m.lessons.length, 0);
/**
 * Volet souscrit. Pour un membre de cabinet, c'est le contrat du cabinet qui
 * fait foi : son propre `plan` reflète l'accès accordé, pas ce qu'il a choisi.
 */
function voletDuPlan(plan, planCabinet) {
    const p = (planCabinet ?? plan ?? 'free').toLowerCase();
    if (p === 'langue')
        return 'langue';
    if (p === 'bundle')
        return 'complet';
    return 'civique';
}
function pourcent(faites, total) {
    return total > 0 ? Math.round((faites / total) * 100) : 0;
}
function calculerProgression(lignes, volet) {
    // On déduplique : une leçon reprise plusieurs fois ne compte qu'une fois,
    // et la table peut contenir plusieurs lignes pour un même couple.
    const faitesCiv = new Set();
    const faitesLng = new Set();
    for (const l of lignes) {
        if (!l.completed || !l.module_slug || !l.lesson_slug)
            continue;
        const cle = `${l.module_slug}:${l.lesson_slug}`;
        if (SLUGS_CIVIQUES.has(l.module_slug))
            faitesCiv.add(cle);
        else if (SLUGS_LANGUE.has(l.module_slug))
            faitesLng.add(cle);
        // Un module_slug inconnu (contenu retiré, ligne corrompue) est ignoré
        // plutôt que compté au hasard dans l'un des deux volets.
    }
    const civique = {
        faites: faitesCiv.size,
        total: exports.TOTAL_LECONS_CIVIQUES,
        pct: pourcent(faitesCiv.size, exports.TOTAL_LECONS_CIVIQUES),
    };
    const langue = {
        faites: faitesLng.size,
        total: exports.TOTAL_LECONS_LANGUE,
        pct: pourcent(faitesLng.size, exports.TOTAL_LECONS_LANGUE),
    };
    const global = volet === 'civique' ? civique
        : volet === 'langue' ? langue
            : {
                faites: civique.faites + langue.faites,
                total: civique.total + langue.total,
                pct: pourcent(civique.faites + langue.faites, civique.total + langue.total),
            };
    return { volet, civique, langue, global };
}
exports.LIBELLE_VOLET = {
    civique: 'Formation civique',
    langue: 'Français langue étrangère',
    complet: 'Civique et linguistique',
};
/** Volets effectivement suivis, quel que soit le contrat. */
function voletsEntames(p) {
    const v = [];
    if (p.civique.faites > 0)
        v.push('civique');
    if (p.langue.faites > 0)
        v.push('langue');
    return v;
}
