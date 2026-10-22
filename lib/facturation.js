"use strict";
/**
 * Facturation — types, calculs et mentions obligatoires.
 *
 * Références : code de commerce art. L441-9 (mentions de la facture),
 * L441-10 et D441-5 (pénalités de retard et indemnité forfaitaire de 40 €),
 * CGI art. 293 B (franchise en base de TVA).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.euros = euros;
exports.numeroFacture = numeroFacture;
exports.totaux = totaux;
exports.echeance = echeance;
exports.manquesEmetteur = manquesEmetteur;
exports.manquesClient = manquesClient;
exports.mentionTva = mentionTva;
exports.mentionsRetard = mentionsRetard;
function euros(n) {
    return n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
}
/** Numéro séquentiel : AAAA-NNNN précédé du préfixe choisi. */
function numeroFacture(prefixe, n, annee = new Date().getFullYear()) {
    return `${prefixe}-${annee}-${String(n).padStart(4, '0')}`;
}
function totaux(lignes, franchise, taux) {
    const ht = lignes.reduce((a, l) => a + l.total, 0);
    const tva = franchise ? 0 : Math.round(ht * (taux / 100) * 100) / 100;
    return { ht: Math.round(ht * 100) / 100, tva, ttc: Math.round((ht + tva) * 100) / 100 };
}
function echeance(emission, jours) {
    const d = new Date(emission);
    d.setDate(d.getDate() + jours);
    return d;
}
/**
 * Champs sans lesquels une facture n'est pas conforme. On refuse d'émettre
 * plutôt que de produire un document que le client renverra — ou que
 * l'administration contestera.
 */
function manquesEmetteur(e) {
    if (!e)
        return ['Aucune coordonnée émetteur enregistrée'];
    const m = [];
    if (!e.denomination)
        m.push('Dénomination');
    if (!e.adresse || !e.code_postal || !e.ville)
        m.push('Adresse complète');
    if (!e.siret)
        m.push('SIRET');
    if (!e.franchise_tva && !e.tva_intracom)
        m.push('Numéro de TVA intracommunautaire');
    return m;
}
function manquesClient(c) {
    if (!c)
        return ['Aucune coordonnée de facturation'];
    const m = [];
    if (!c.raison_sociale)
        m.push('Raison sociale');
    if (!c.adresse || !c.code_postal || !c.ville)
        m.push('Adresse de facturation');
    return m;
}
/** Mention de TVA à faire figurer, selon le régime. */
function mentionTva(e) {
    return e.franchise_tva
        ? 'TVA non applicable, article 293 B du CGI'
        : `TVA ${e.taux_tva} %`;
}
/** Mentions de retard, obligatoires entre professionnels. */
function mentionsRetard(e) {
    return [
        `Pénalités de retard : ${e.penalites_retard}.`,
        `Indemnité forfaitaire pour frais de recouvrement : ${euros(e.indemnite_recouvrement)} (art. D441-5 du code de commerce).`,
        'Pas d’escompte pour paiement anticipé.',
    ];
}
