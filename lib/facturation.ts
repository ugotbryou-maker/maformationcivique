/**
 * Facturation — types, calculs et mentions obligatoires.
 *
 * Références : code de commerce art. L441-9 (mentions de la facture),
 * L441-10 et D441-5 (pénalités de retard et indemnité forfaitaire de 40 €),
 * CGI art. 293 B (franchise en base de TVA).
 */

export interface Emetteur {
  denomination?: string | null;
  forme_juridique?: string | null;
  capital_social?: string | null;
  adresse?: string | null;
  code_postal?: string | null;
  ville?: string | null;
  pays?: string | null;
  siret?: string | null;
  rcs_ville?: string | null;
  tva_intracom?: string | null;
  franchise_tva: boolean;
  taux_tva: number;
  email?: string | null;
  telephone?: string | null;
  iban?: string | null;
  bic?: string | null;
  banque?: string | null;
  penalites_retard: string;
  indemnite_recouvrement: number;
  delai_paiement_jours: number;
  prefixe_numero: string;
  prochain_numero: number;
  mentions_pied?: string | null;
}

export interface ClientFacture {
  raison_sociale?: string | null;
  adresse?: string | null;
  code_postal?: string | null;
  ville?: string | null;
  pays?: string | null;
  siret?: string | null;
  tva_intracom?: string | null;
  email?: string | null;
  reference?: string | null;
}

export interface LigneFacture {
  libelle: string;
  quantite: number;
  prix_unitaire: number;   // en euros
  total: number;           // quantite × prix_unitaire
}

export function euros(n: number): string {
  return n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
}

/** Numéro séquentiel : AAAA-NNNN précédé du préfixe choisi. */
export function numeroFacture(prefixe: string, n: number, annee = new Date().getFullYear()): string {
  return `${prefixe}-${annee}-${String(n).padStart(4, '0')}`;
}

export function totaux(lignes: LigneFacture[], franchise: boolean, taux: number) {
  const ht = lignes.reduce((a, l) => a + l.total, 0);
  const tva = franchise ? 0 : Math.round(ht * (taux / 100) * 100) / 100;
  return { ht: Math.round(ht * 100) / 100, tva, ttc: Math.round((ht + tva) * 100) / 100 };
}

export function echeance(emission: Date, jours: number): Date {
  const d = new Date(emission);
  d.setDate(d.getDate() + jours);
  return d;
}

/**
 * Champs sans lesquels une facture n'est pas conforme. On refuse d'émettre
 * plutôt que de produire un document que le client renverra — ou que
 * l'administration contestera.
 */
export function manquesEmetteur(e: Partial<Emetteur> | null): string[] {
  if (!e) return ['Aucune coordonnée émetteur enregistrée'];
  const m: string[] = [];
  if (!e.denomination) m.push('Dénomination');
  if (!e.adresse || !e.code_postal || !e.ville) m.push('Adresse complète');
  if (!e.siret) m.push('SIRET');
  if (!e.franchise_tva && !e.tva_intracom) m.push('Numéro de TVA intracommunautaire');
  return m;
}

export function manquesClient(c: Partial<ClientFacture> | null): string[] {
  if (!c) return ['Aucune coordonnée de facturation'];
  const m: string[] = [];
  if (!c.raison_sociale) m.push('Raison sociale');
  if (!c.adresse || !c.code_postal || !c.ville) m.push('Adresse de facturation');
  return m;
}

/** Mention de TVA à faire figurer, selon le régime. */
export function mentionTva(e: Emetteur): string {
  return e.franchise_tva
    ? 'TVA non applicable, article 293 B du CGI'
    : `TVA ${e.taux_tva} %`;
}

/** Mentions de retard, obligatoires entre professionnels. */
export function mentionsRetard(e: Emetteur): string[] {
  return [
    `Pénalités de retard : ${e.penalites_retard}.`,
    `Indemnité forfaitaire pour frais de recouvrement : ${euros(e.indemnite_recouvrement)} (art. D441-5 du code de commerce).`,
    'Pas d’escompte pour paiement anticipé.',
  ];
}
