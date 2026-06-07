/**
 * Art par leçon — chaque leçon a sa propre image illustrative
 *
 * Convention pour les images locales :
 *   Déposer le fichier dans /public/images/paintings/[slug].jpg
 *   et utiliser l'URL /images/paintings/[slug].jpg
 *
 * Fallback automatique : si url est vide, seul baseBg (gradient CSS) s'affiche.
 * Les URLs Wikimedia chargent en navigateur réel même si le curl échoue en CI/dev.
 */
export interface ArtInfo {
  url: string;          // chemin local ou URL externe (vide = gradient seul)
  alt: string;
  credit: string;
  baseBg: string;       // toujours défini — sert de fond sous l'image
}

// ── Images par leçon (slug) ────────────────────────────────────────────────
export const lessonArt: Record<string, ArtInfo> = {

  // ── Module 1 : Principes & valeurs de la République ──────────────────────
  'symboles-republique': {
    url: '/images/paintings/delacroix-liberte.jpg',
    alt: 'La Liberté guidant le peuple — Eugène Delacroix, 1830',
    credit: 'Delacroix, 1830 — Musée du Louvre · Domaine public',
    baseBg: 'linear-gradient(135deg, #9F1239 0%, #CC1A1A 100%)',
  },
  'laicite': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Jules_Ferry.jpg',
    alt: 'Portrait de Jules Ferry — père de l\'école laïque et gratuite',
    credit: 'Portrait officiel de Jules Ferry, vers 1885 · Domaine public',
    baseBg: 'linear-gradient(135deg, #001A70 0%, #0E4C92 100%)',
  },
  'devise-liberte-egalite-fraternite': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Honor%C3%A9_Daumier_-_La_R%C3%A9publique.jpg',
    alt: 'La République — Honoré Daumier, 1848',
    credit: 'Honoré Daumier, 1848 — Musée d\'Orsay · Domaine public',
    baseBg: 'linear-gradient(135deg, #CC1A1A 0%, #001A70 100%)',
  },
  'langue-republique': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Serment_de_strasbourg.jpg',
    alt: 'Serment de Strasbourg (842) — plus ancien texte en langue française',
    credit: 'Manuscrit carolingien — BnF · Domaine public',
    baseBg: 'linear-gradient(135deg, #7C3AED 0%, #4C1D95 100%)',
  },
  'contrat-engagement-republicain': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Declaration_of_the_Rights_of_Man_and_of_the_Citizen_in_1789.jpg',
    alt: 'Déclaration des droits de l\'homme et du citoyen — Le Barbier, 1789',
    credit: 'Jean-Jacques-François Le Barbier, 1789 — Archives nationales · Domaine public',
    baseBg: 'linear-gradient(135deg, #002395 0%, #CC1A1A 100%)',
  },

  // ── Module 2 : Droits & devoirs ─────────────────────────────────────────
  'droits-fondamentaux': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Declaration_of_the_Rights_of_Man_and_of_the_Citizen_in_1789.jpg',
    alt: 'Déclaration des droits de l\'homme et du citoyen — Le Barbier, 1789',
    credit: 'Le Barbier, 1789 — Archives nationales · Domaine public',
    baseBg: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 100%)',
  },
  'citoyennete-droits-civiques': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/French_women_voting_1945.jpg',
    alt: 'Femmes votant pour la première fois en France — élections municipales 1945',
    credit: 'Photographie presse, 1945 · Domaine public',
    baseBg: 'linear-gradient(135deg, #001A70 0%, #002395 100%)',
  },
  'egalite-dignite-libertes': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Olympe_de_Gouges.jpg',
    alt: 'Portrait d\'Olympe de Gouges — auteure de la Déclaration des droits de la femme, 1791',
    credit: 'Portrait anonyme, XVIIIe siècle · Domaine public',
    baseBg: 'linear-gradient(135deg, #9F1239 0%, #7C3AED 100%)',
  },
  'devoirs-obligations': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Paris_Hotel_de_Ville_2008.jpg',
    alt: 'Hôtel de Ville de Paris — siège de l\'administration municipale',
    credit: 'Photographie, 2008 · Domaine public',
    baseBg: 'linear-gradient(135deg, #0E4C92 0%, #001A70 100%)',
  },

  // ── Module 3 : Institutions ──────────────────────────────────────────────
  'etat-droit-separation-pouvoirs': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Montesquieu_2.jpg',
    alt: 'Portrait de Montesquieu — théoricien de la séparation des pouvoirs',
    credit: 'École française, XVIIIe siècle · Domaine public',
    baseBg: 'linear-gradient(135deg, #0E4C92 0%, #002395 100%)',
  },
  'democratie-droit-vote': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Le_Serment_du_Jeu_de_Paume.jpg',
    alt: 'Le Serment du Jeu de Paume — Jacques-Louis David, 1791',
    credit: 'Jacques-Louis David, dessin préparatoire, 1791 — Versailles · Domaine public',
    baseBg: 'linear-gradient(135deg, #001A70 0%, #0057A8 100%)',
  },
  'organisation-republique': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Palais_de_l%27%C3%89lys%C3%A9e_-_20060809.jpg',
    alt: 'Palais de l\'Élysée — résidence officielle du Président de la République',
    credit: 'Photographie, 2006 · Domaine public',
    baseBg: 'linear-gradient(135deg, #002395 0%, #001A70 100%)',
  },
  'institutions-europeennes': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/European_Parliament_Strasbourg_Hemicycle_-_Diliff.jpg',
    alt: 'Hémicycle du Parlement européen à Strasbourg',
    credit: 'Diliff, 2014 — CC BY-SA 3.0',
    baseBg: 'linear-gradient(135deg, #1D4ED8 0%, #0057A8 100%)',
  },

  // ── Module 4 : Histoire, géographie & culture ────────────────────────────
  'regimes-politiques-1789': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Le_Serment_du_Jeu_de_Paume.jpg',
    alt: 'Le Serment du Jeu de Paume — naissance de la démocratie française',
    credit: 'Jacques-Louis David, 1791 — Versailles · Domaine public',
    baseBg: 'linear-gradient(135deg, #7F1D1D 0%, #CC1A1A 100%)',
  },
  'veme-republique': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Charles_de_Gaulle_1963.jpg',
    alt: 'Le général Charles de Gaulle — fondateur de la Ve République',
    credit: 'Photographie officielle, 1963 · Domaine public',
    baseBg: 'linear-gradient(135deg, #CC1A1A 0%, #9F1239 100%)',
  },
  'conflits-mondiaux-resistance': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Jean_Moulin.jpg',
    alt: 'Jean Moulin — chef de la Résistance française unifiée',
    credit: 'Photographie, vers 1940 · Domaine public',
    baseBg: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
  },
  'geographie-france': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg',
    alt: 'Rue de Paris par temps de pluie — Gustave Caillebotte, 1877',
    credit: 'Caillebotte, 1877 — Art Institute of Chicago · Domaine public',
    baseBg: 'linear-gradient(135deg, #064E3B 0%, #0891B2 100%)',
  },
  'france-europe-monde': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg',
    alt: 'Drapeau de l\'Union européenne',
    credit: 'Conseil de l\'Europe / Union européenne · Domaine public',
    baseBg: 'linear-gradient(135deg, #0057A8 0%, #002395 100%)',
  },

  // ── Module 5 : Vivre dans la société française ────────────────────────────
  'sante-droits-sociaux': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Hotel-Dieu_de_Paris_1.jpg',
    alt: 'Hôtel-Dieu de Paris — plus ancien hôpital du monde',
    credit: 'Photographie · Domaine public',
    baseBg: 'linear-gradient(135deg, #065F46 0%, #059669 100%)',
  },
  'education-travail': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Ecole_primaire_france_1900.jpg',
    alt: 'Classe d\'école primaire française — fin XIXe siècle',
    credit: 'Photographie, vers 1900 · Domaine public',
    baseBg: 'linear-gradient(135deg, #0891B2 0%, #0E4C92 100%)',
  },
  'logement-demarches': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Paris_-_Grands_Boulevards.jpg',
    alt: 'Grands boulevards haussmanniens — Paris',
    credit: 'Photographie, fin XIXe · Domaine public',
    baseBg: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
  },
  'famille-societe-francaise': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/James_Tissot_-_Portrait_of_the_Marquise_de_Miramon%2C_n%C3%A9e_Th%C3%A9r%C3%A8se_Feuillant_%281866%29.jpg',
    alt: 'Portrait de famille — James Tissot, vers 1866',
    credit: 'James Tissot, 1866 · Domaine public',
    baseBg: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
  },
};

// ── Fallback par module ──────────────────────────────────────────────────────
export const moduleArtFallback: Record<string, ArtInfo> = {
  republique:     { url: '/images/paintings/delacroix-liberte.jpg', alt: 'La Liberté guidant le peuple — Delacroix', credit: 'Delacroix, 1830 — Musée du Louvre', baseBg: 'linear-gradient(135deg, #9F1239 0%, #CC1A1A 100%)' },
  droits:         { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Declaration_of_the_Rights_of_Man_and_of_the_Citizen_in_1789.jpg/800px-Declaration_of_the_Rights_of_Man_and_of_the_Citizen_in_1789.jpg', alt: 'Déclaration des droits de l\'homme', credit: 'Le Barbier, 1789 — Archives nationales', baseBg: 'linear-gradient(135deg, #4C1D95 0%, #002395 100%)' },
  institutions:   { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Le_Serment_du_jeu_de_paume.jpg/1280px-Le_Serment_du_jeu_de_paume.jpg', alt: 'Le Serment du Jeu de Paume — David', credit: 'Jacques-Louis David, 1791', baseBg: 'linear-gradient(135deg, #001A70 0%, #002395 100%)' },
  histoire:       { url: '/images/paintings/delacroix-liberte.jpg', alt: 'La Liberté guidant le peuple — Delacroix', credit: 'Delacroix, 1830 — Musée du Louvre', baseBg: 'linear-gradient(135deg, #7F1D1D 0%, #9F1239 100%)' },
  'vie-en-france': { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg/1280px-Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg', alt: 'Rue de Paris — Caillebotte', credit: 'Caillebotte, 1877', baseBg: 'linear-gradient(135deg, #064E3B 0%, #065F46 100%)' },
};

/** Résout l'art d'une leçon : leçon → module → gradient seul */
export function resolveArt(lessonSlug: string, moduleSlug: string): ArtInfo {
  return lessonArt[lessonSlug]
    ?? moduleArtFallback[moduleSlug]
    ?? { url: '', alt: '', credit: '', baseBg: 'linear-gradient(135deg, #001A70 0%, #CC1A1A 100%)' };
}
