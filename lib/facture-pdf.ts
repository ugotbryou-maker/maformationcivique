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
  type Emetteur, type ClientFacture, type LigneFacture, type Beneficiaire,
} from '@/lib/facturation';

export type { Beneficiaire };

export interface DonneesFacture {
  numero: string;
  emetteur: Emetteur;
  client: ClientFacture;
  lignes: LigneFacture[];
  beneficiaires?: Beneficiaire[];
  /** 'facturees' : comptes pointés sur la facture. 'periode' : comptes du
   *  partenaire activés pendant la période couverte. */
  origine_beneficiaires?: 'facturees' | 'periode';
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
    `Émise le ${jour(f.date_emission)}`,
    f.date_echeance ? `Échéance ${jour(f.date_echeance)}` : null,
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
  txt('FACTURÉ À', MARGE, 8, gras, tenu);
  y -= 14;
  txt(c.raison_sociale, MARGE, 12, gras);
  y -= 14;
  for (const l of [
    c.adresse,
    `${c.code_postal ?? ''} ${c.ville ?? ''}`.trim(),
    c.pays && c.pays !== 'France' ? c.pays : null,
    c.siret ? `SIRET ${c.siret}` : null,
    c.tva_intracom ? `TVA ${c.tva_intracom}` : null,
    c.reference ? `Référence : ${c.reference}` : null,
  ].filter(Boolean)) { txt(l, MARGE, 8.5, normal, doux); y -= 11; }

  if (f.periode_debut || f.periode_fin) {
    y -= 6;
    txt(`Période du ${jour(f.periode_debut)} au ${jour(f.periode_fin)}`, MARGE, 9, normal, doux);
    y -= 12;
  }

  y -= 14;

  // ── Lignes ───────────────────────────────────────────────────────────
  const COL_QTE = MARGE + 330;
  const COL_PU = MARGE + 410;
  const COL_TOT = MARGE + LARGEUR;

  txt('DÉSIGNATION', MARGE, 8, gras, tenu);
  droite('QTÉ', COL_QTE, 8, gras, tenu);
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

  // ── Renvoi vers l'annexe ─────────────────────────────────────────────
  // Le détail nominatif tient sur sa propre page : la facture garde sa page
  // unique, et le client reçoit la liste de ceux pour qui il paie.
  if (f.beneficiaires?.length) {
    place(30);
    y -= 2;
    txt(
      `Détail nominatif des ${f.beneficiaires.length} comptes : voir l'annexe en dernière page.`,
      MARGE, 8.5, normal, tenu,
    );
    y -= 28;
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
  txt('TOTAL À PAYER', totalGauche, 12, gras);
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
    txt('RÈGLEMENT PAR VIREMENT', MARGE + 14, 8, gras, tenu);
    y -= 13;
    if (e.banque) { txt(e.banque, MARGE + 14, 9, normal, doux); y -= 12; }
    if (e.iban) { txt(`IBAN ${e.iban}`, MARGE + 14, 9, gras); y -= 12; }
    if (e.bic) { txt(`BIC ${e.bic}`, MARGE + 14, 9, normal, doux); y -= 12; }
    txt(`Merci d'indiquer ${f.numero} en référence.`, MARGE + 14, 8.5, normal, tenu);
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

  // ── Annexe : le détail nominatif, sur sa propre page ─────────────────
  // Une ligne « 6 comptes activés » n'est pas vérifiable par le client. La
  // liste est tenue à part pour que la facture elle-même reste d'une page,
  // et pour que l'annexe puisse en occuper plusieurs si le partenaire en
  // compte beaucoup.
  if (f.beneficiaires?.length) {
    const comptes = f.beneficiaires;
    const parPeriode = f.origine_beneficiaires === 'periode';

    page = doc.addPage([...A4]);
    y = A4[1] - MARGE;

    txt('ANNEXE', MARGE, 8, gras, tenu);
    droite(`FACTURE ${f.numero}`, MARGE + LARGEUR, 8, gras, tenu);
    y -= 20;
    txt(
      parPeriode ? 'Comptes couverts par la période' : 'Détail nominatif des comptes facturés',
      MARGE, 15, gras,
    );
    y -= 15;
    txt(
      `${c.raison_sociale ?? ''} — ${comptes.length} compte${comptes.length > 1 ? 's' : ''}`
      + (f.periode_debut || f.periode_fin
        ? ` — période du ${jour(f.periode_debut)} au ${jour(f.periode_fin)}`
        : ''),
      MARGE, 9, normal, doux,
    );
    y -= 16;
    ligne(1.4, encre);
    y -= 20;

    const COL_RANG = MARGE + 16;
    const COL_NOM = MARGE + 26;
    const COL_MAIL = MARGE + 190;

    const enTeteAnnexe = () => {
      droite('N°', COL_RANG, 8, gras, tenu);
      txt('NOM ET PRÉNOM', COL_NOM, 8, gras, tenu);
      txt('ADRESSE E-MAIL', COL_MAIL, 8, gras, tenu);
      droite('ACTIVÉ LE', MARGE + LARGEUR, 8, gras, tenu);
      y -= 8;
      ligne();
      y -= 15;
    };
    enTeteAnnexe();

    comptes.forEach((b, i) => {
      if (place(30)) {
        droite(`ANNEXE — FACTURE ${f.numero} (SUITE)`, MARGE + LARGEUR, 8, gras, tenu);
        y -= 24;
        enTeteAnnexe();
      }
      droite(String(i + 1), COL_RANG, 9, normal, tenu);
      txt(b.nom || '—', COL_NOM, 9.5, gras);
      txt(b.email, COL_MAIL, 9, normal, doux);
      droite(b.date ? jour(b.date) : '—', MARGE + LARGEUR, 9, normal, doux);
      y -= 10;
      ligne(0.5);
      y -= 14;
    });

    y -= 6;
    txt(
      parPeriode
        ? `${comptes.length} compte${comptes.length > 1 ? 's' : ''} rattaché${comptes.length > 1 ? 's' : ''} au partenaire sur la période facturée.`
        : `${comptes.length} compte${comptes.length > 1 ? 's' : ''} facturé${comptes.length > 1 ? 's' : ''} au titre de la facture ${f.numero}, pour un total de ${euros(f.total_ht)} HT.`,
      MARGE, 8.5, normal, tenu,
    );
  }

  // ── Pagination ───────────────────────────────────────────────────────
  // Utile dès que l'annexe existe : le client doit voir qu'il ne lui manque
  // pas une page.
  const pages = doc.getPages();
  if (pages.length > 1) {
    pages.forEach((pg, i) => {
      const gauche = net(`Facture ${f.numero}`);
      const droit = net(`Page ${i + 1} / ${pages.length}`);
      pg.drawText(gauche, { x: MARGE, y: MARGE - 16, size: 7.5, font: normal, color: tenu });
      pg.drawText(droit, {
        x: MARGE + LARGEUR - normal.widthOfTextAtSize(droit, 7.5),
        y: MARGE - 16, size: 7.5, font: normal, color: tenu,
      });
    });
  }

  return doc.save();
}
