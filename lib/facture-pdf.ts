/**
 * Rendu PDF d'une facture, avec pdf-lib — la même bibliothèque que les
 * attestations. Pas de navigateur sans écran : la mise en page est dessinée,
 * ce qui garantit un rendu identique partout et un déploiement léger.
 *
 * ⚠️ Les polices standard du PDF sont en WinAnsi : elles ne couvrent pas
 * tous les caractères. `net()` remplace ceux qui feraient échouer le rendu —
 * une facture qui ne se génère pas vaut moins qu'une facture sans espace
 * insécable.
 */

import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from 'pdf-lib';
import {
  euros, mentionTva, mentionsRetard,
  type Emetteur, type ClientFacture, type LigneFacture,
} from '@/lib/facturation';

export interface Beneficiaire {
  nom: string;
  email: string;
  date?: string | null;
}

export interface DonneesFacture {
  numero: string;
  emetteur: Emetteur;
  client: ClientFacture;
  lignes: LigneFacture[];
  beneficiaires?: Beneficiaire[];
  periode_debut?: string | null;
  periode_fin?: string | null;
  total_ht: number;
  total_tva: number;
  total_ttc: number;
  date_emission: string;
  date_echeance?: string | null;
}

/** Ramène le texte à ce que les polices standard savent écrire. */
function net(s: unknown): string {
  return String(s ?? '')
    .replace(/[   ]/g, ' ')     // espaces fines et insécables
    .replace(/[‘’ʼ]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/[Œ]/g, 'OE').replace(/[œ]/g, 'oe')
    // Le symbole euro est hors de la plage \x20-\xFF mais fait partie de
    // WinAnsi, que les polices standard utilisent : on l'exclut du filtre
    // plutôt que de le remplacer par « EUR ».
    .replace(/[^\x20-\xFF\u20AC]/g, '');
}

function jour(d: string | null | undefined): string {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

const A4 = [595.28, 841.89] as const;
const MARGE = 48;
const LARGEUR = A4[0] - MARGE * 2;

export async function genererFacturePdf(f: DonneesFacture): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  doc.setTitle(`Facture ${f.numero}`);
  doc.setCreator('maformationcivique.fr');

  const normal = await doc.embedFont(StandardFonts.Helvetica);
  const gras = await doc.embedFont(StandardFonts.HelveticaBold);

  const encre = rgb(0.067, 0.098, 0.169);
  const doux = rgb(0.298, 0.345, 0.451);
  const tenu = rgb(0.49, 0.533, 0.624);
  const trait = rgb(0.886, 0.906, 0.941);

  let page = doc.addPage([...A4]);
  let y = A4[1] - MARGE;

  const txt = (s: unknown, x: number, size: number, font: PDFFont, color = encre) => {
    page.drawText(net(s), { x, y, size, font, color });
  };
  const droite = (s: unknown, xFin: number, size: number, font: PDFFont, color = encre) => {
    const t = net(s);
    page.drawText(t, { x: xFin - font.widthOfTextAtSize(t, size), y, size, font, color });
  };
  const ligne = (ep = 0.7, color = trait) => {
    page.drawLine({ start: { x: MARGE, y }, end: { x: MARGE + LARGEUR, y }, thickness: ep, color });
  };
  /** Saut de page quand on approche du bas, pour ne jamais écrire dans le vide. */
  const place = (besoin: number) => {
    if (y - besoin < MARGE + 40) {
      page = doc.addPage([...A4]);
      y = A4[1] - MARGE;
      return true;
    }
    return false;
  };

  const e = f.emetteur;
  const c = f.client;

  // ── En-tête : émetteur à gauche, référence à droite ──────────────────
  txt(e.denomination, MARGE, 15, gras);
  droite('FACTURE', MARGE + LARGEUR, 11, gras, tenu);
  y -= 18;
  droite(f.numero, MARGE + LARGEUR, 16, gras);
  y -= 2;

  const lignesEmetteur = [
    e.adresse,
    `${e.code_postal ?? ''} ${e.ville ?? ''}`.trim(),
    e.pays && e.pays !== 'France' ? e.pays : null,
    e.siret ? `SIRET ${e.siret}` : null,
    e.rcs_ville,
    e.tva_intracom ? `TVA ${e.tva_intracom}` : null,
    e.forme_juridique
      ? `${e.forme_juridique}${e.capital_social ? ` au capital de ${e.capital_social}` : ''}`
      : null,
    e.email,
  ].filter(Boolean);

  const lignesRef = [
    `Emise le ${jour(f.date_emission)}`,
    f.date_echeance ? `Echeance ${jour(f.date_echeance)}` : null,
  ].filter(Boolean);

  const hautBloc = y;
  for (const l of lignesEmetteur) { txt(l, MARGE, 8.5, normal, doux); y -= 11; }
  const basGauche = y;

  // La colonne de droite repart sous le numéro, pas à sa hauteur : sinon la
  // première ligne se superpose au numéro de facture.
  y = hautBloc - 12;
  for (const l of lignesRef) { droite(l, MARGE + LARGEUR, 8.5, normal, doux); y -= 11; }

  y = Math.min(basGauche, y) - 14;
  ligne(1.4, encre);
  y -= 24;

  // ── Client ───────────────────────────────────────────────────────────
  txt('FACTURE A', MARGE, 8, gras, tenu);
  y -= 14;
  txt(c.raison_sociale, MARGE, 12, gras);
  y -= 14;
  for (const l of [
    c.adresse,
    `${c.code_postal ?? ''} ${c.ville ?? ''}`.trim(),
    c.pays && c.pays !== 'France' ? c.pays : null,
    c.siret ? `SIRET ${c.siret}` : null,
    c.tva_intracom ? `TVA ${c.tva_intracom}` : null,
    c.reference ? `Reference : ${c.reference}` : null,
  ].filter(Boolean)) { txt(l, MARGE, 8.5, normal, doux); y -= 11; }

  if (f.periode_debut || f.periode_fin) {
    y -= 6;
    txt(`Periode du ${jour(f.periode_debut)} au ${jour(f.periode_fin)}`, MARGE, 9, normal, doux);
    y -= 12;
  }

  y -= 14;

  // ── Lignes ───────────────────────────────────────────────────────────
  const COL_QTE = MARGE + 330;
  const COL_PU = MARGE + 410;
  const COL_TOT = MARGE + LARGEUR;

  txt('DESIGNATION', MARGE, 8, gras, tenu);
  droite('QTE', COL_QTE, 8, gras, tenu);
  droite('PRIX UNIT.', COL_PU, 8, gras, tenu);
  droite('TOTAL HT', COL_TOT, 8, gras, tenu);
  y -= 8;
  ligne();
  y -= 16;

  for (const l of f.lignes) {
    place(40);
    txt(l.libelle, MARGE, 10, normal);
    droite(String(l.quantite), COL_QTE, 10, normal);
    droite(euros(l.prix_unitaire), COL_PU, 10, normal);
    droite(euros(l.total), COL_TOT, 10, gras);
    y -= 16;
    ligne();
    y -= 14;
  }

  // ── Détail nominatif ─────────────────────────────────────────────────
  // Le client veut savoir pour qui il paie. Sans cette liste, une ligne
  // « 7 comptes activés » n'est pas vérifiable de son côté.
  if (f.beneficiaires?.length) {
    place(60);
    y -= 4;
    txt(`DETAIL DES ${f.beneficiaires.length} COMPTES FACTURES`, MARGE, 8, gras, tenu);
    y -= 14;
    for (const b of f.beneficiaires) {
      place(26);
      const nom = b.nom && b.nom !== b.email ? `${b.nom} — ${b.email}` : b.email;
      txt(nom, MARGE + 10, 8.5, normal, doux);
      if (b.date) droite(`active le ${jour(b.date)}`, COL_TOT, 8.5, normal, tenu);
      y -= 12;
    }
    y -= 10;
    ligne();
    y -= 14;
  }

  // ── Totaux ───────────────────────────────────────────────────────────
  place(90);
  const totalGauche = MARGE + LARGEUR - 230;
  txt('Total HT', totalGauche, 10, normal, doux);
  droite(euros(f.total_ht), COL_TOT, 10, normal);
  y -= 16;
  txt(mentionTva(e), totalGauche, 10, normal, doux);
  droite(euros(f.total_tva), COL_TOT, 10, normal);
  y -= 10;
  page.drawLine({
    start: { x: totalGauche, y }, end: { x: COL_TOT, y },
    thickness: 1.2, color: encre,
  });
  y -= 18;
  txt('TOTAL A PAYER', totalGauche, 12, gras);
  droite(euros(f.total_ttc), COL_TOT, 14, gras);
  y -= 34;

  // ── Règlement ────────────────────────────────────────────────────────
  if (e.iban || e.bic) {
    place(70);
    page.drawRectangle({
      x: MARGE, y: y - 56, width: LARGEUR, height: 62,
      color: rgb(0.965, 0.973, 0.988),
    });
    y -= 12;
    txt('REGLEMENT PAR VIREMENT', MARGE + 14, 8, gras, tenu);
    y -= 13;
    if (e.banque) { txt(e.banque, MARGE + 14, 9, normal, doux); y -= 12; }
    if (e.iban) { txt(`IBAN ${e.iban}`, MARGE + 14, 9, gras); y -= 12; }
    if (e.bic) { txt(`BIC ${e.bic}`, MARGE + 14, 9, normal, doux); y -= 12; }
    txt(`Merci d'indiquer ${f.numero} en reference.`, MARGE + 14, 8.5, normal, tenu);
    y -= 26;
  }

  // ── Mentions obligatoires ────────────────────────────────────────────
  place(60);
  ligne();
  y -= 14;
  for (const m of [...mentionsRetard(e), e.mentions_pied].filter(Boolean)) {
    place(16);
    txt(m, MARGE, 7.5, normal, tenu);
    y -= 10;
  }

  return doc.save();
}
