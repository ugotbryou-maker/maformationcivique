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
    url: '/images/modules/biographie-jules-ferry.jpg',
    alt: 'Portrait de Jules Ferry — père de l\'école laïque et gratuite',
    credit: 'Portrait officiel de Jules Ferry, vers 1885 · Domaine public',
    baseBg: 'linear-gradient(135deg, #001A70 0%, #0E4C92 100%)',
  },
  'devise-liberte-egalite-fraternite': {
    url: '/images/modules/daumier-la-republique.jpg',
    alt: 'La République — Honoré Daumier, 1848',
    credit: 'Honoré Daumier, 1848 — Musée d\'Orsay · Domaine public',
    baseBg: 'linear-gradient(135deg, #CC1A1A 0%, #001A70 100%)',
  },
  'langue-republique': {
    url: '/images/modules/serment-de-strasbourg.jpeg',
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
    url: '/images/modules/Droit-de-vote-des-femmes-70-ans-deja.jpg',
    alt: 'Le droit de vote des femmes en France — conquis en 1944',
    credit: 'Archives — droit de vote des femmes, 70 ans déjà',
    baseBg: 'linear-gradient(135deg, #001A70 0%, #002395 100%)',
  },
  'egalite-dignite-libertes': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Olympe_de_Gouges.jpg',
    alt: 'Portrait d\'Olympe de Gouges — auteure de la Déclaration des droits de la femme, 1791',
    credit: 'Portrait anonyme, XVIIIe siècle · Domaine public',
    baseBg: 'linear-gradient(135deg, #9F1239 0%, #7C3AED 100%)',
  },
  'devoirs-obligations': {
    url: '/images/modules/Mairie-de-Paris-l-hotel-de-toutes-les-batailles.jpg',
    alt: 'Hôtel de Ville de Paris — siège de l\'administration municipale',
    credit: 'Mairie de Paris, l\'hôtel de toutes les batailles',
    baseBg: 'linear-gradient(135deg, #0E4C92 0%, #001A70 100%)',
  },

  // ── Module 3 : Institutions ──────────────────────────────────────────────
  'etat-droit-separation-pouvoirs': {
    url: '/images/modules/montesquieu.jpg',
    alt: 'Portrait de Montesquieu — théoricien de la séparation des pouvoirs',
    credit: 'École française, XVIIIe siècle · Domaine public',
    baseBg: 'linear-gradient(135deg, #0E4C92 0%, #002395 100%)',
  },
  'democratie-droit-vote': {
    url: '/images/modules/serment-du-jeu-de-paume.jpg',
    alt: 'Le Serment du Jeu de Paume — Jacques-Louis David, 1791',
    credit: 'Jacques-Louis David, 1791 — Musée Carnavalet · Domaine public',
    baseBg: 'linear-gradient(135deg, #001A70 0%, #0057A8 100%)',
  },
  'organisation-republique': {
    url: '/images/modules/palais-elysee.jpg',
    alt: 'Palais de l\'Élysée — résidence officielle du Président de la République',
    credit: 'Photographie, Palais de l\'Élysée',
    baseBg: 'linear-gradient(135deg, #002395 0%, #001A70 100%)',
  },
  'institutions-europeennes': {
    url: '/images/modules/hemicycle-parlement-europeen.jpg',
    alt: 'Hémicycle du Parlement européen à Strasbourg',
    credit: 'Photo G. Engel © Union européenne 2019 — Source : EP',
    baseBg: 'linear-gradient(135deg, #1D4ED8 0%, #0057A8 100%)',
  },

  // ── Module 4 : Histoire, géographie & culture ────────────────────────────
  'regimes-politiques-1789': {
    url: '/images/modules/serment-du-jeu-de-paume.jpg',
    alt: 'Le Serment du Jeu de Paume — naissance de la démocratie française',
    credit: 'Jacques-Louis David, 1791 — Musée Carnavalet · Domaine public',
    baseBg: 'linear-gradient(135deg, #7F1D1D 0%, #CC1A1A 100%)',
  },
  'veme-republique': {
    url: '/images/modules/de-gaulle-liberation-paris.jpg',
    alt: 'Le général de Gaulle dans les rues de Paris libéré, août 1944',
    credit: 'Photographie, août 1944 · Domaine public',
    baseBg: 'linear-gradient(135deg, #CC1A1A 0%, #9F1239 100%)',
  },
  'conflits-mondiaux-resistance': {
    url: '/images/modules/jean-moulin.webp',
    alt: 'Jean Moulin — chef de la Résistance française unifiée',
    credit: 'Photographie, vers 1940 · Domaine public',
    baseBg: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
  },
  'geographie-france': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Mont_Blanc_and_Dome_du_Gouter.jpg',
    alt: 'Le Mont Blanc et le Dôme du Goûter — point culminant de la France et de l\'Europe occidentale',
    credit: 'Photographie du Mont Blanc · Wikimedia Commons, domaine public',
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
    url: '/images/modules/fronton-hotel-dieu.jpg',
    alt: 'Fronton de l\'Hôtel-Dieu de Paris — plus ancien hôpital du monde',
    credit: 'Photographie, fronton de l\'Hôtel-Dieu de Paris',
    baseBg: 'linear-gradient(135deg, #065F46 0%, #059669 100%)',
  },
  'education-travail': {
    url: '/images/modules/Ecole_-_Salle_de_Classe_2.jpg',
    alt: 'Salle de classe dans une école française',
    credit: 'Photographie, salle de classe',
    baseBg: 'linear-gradient(135deg, #0891B2 0%, #0E4C92 100%)',
  },
  'logement-demarches': {
    url: '/images/modules/Blv-haussmann-lafayette.jpg',
    alt: 'Boulevard haussmannien — Paris',
    credit: 'Photographie, boulevard Haussmann',
    baseBg: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
  },
  'famille-societe-francaise': {
    url: '/images/modules/tissot-portrait-famille.jpg',
    alt: 'Portrait de famille — James Tissot, XIXe siècle',
    credit: 'James Tissot, XIXe siècle · Domaine public',
    baseBg: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
  },
};

// ── Fallback par module ──────────────────────────────────────────────────────
export const moduleArtFallback: Record<string, ArtInfo> = {
  republique:     { url: '/images/paintings/delacroix-liberte.jpg', alt: 'La Liberté guidant le peuple — Delacroix', credit: 'Delacroix, 1830 — Musée du Louvre', baseBg: 'linear-gradient(135deg, #9F1239 0%, #CC1A1A 100%)' },
  droits:         { url: '/images/modules/Droits.png', alt: 'Déclaration des droits de l\'homme', credit: 'Le Barbier, 1789 — Archives nationales', baseBg: 'linear-gradient(135deg, #4C1D95 0%, #002395 100%)' },
  institutions:   { url: '/images/modules/serment-du-jeu-de-paume.jpg', alt: 'Le Serment du Jeu de Paume — David', credit: 'Jacques-Louis David, 1791 — Musée Carnavalet', baseBg: 'linear-gradient(135deg, #001A70 0%, #002395 100%)' },
  histoire:       { url: '/images/paintings/delacroix-liberte.jpg', alt: 'La Liberté guidant le peuple — Delacroix', credit: 'Delacroix, 1830 — Musée du Louvre', baseBg: 'linear-gradient(135deg, #7F1D1D 0%, #9F1239 100%)' },
  'vie-en-france': { url: '/images/modules/Caillebotte_Rue_de_Paris.jpg', alt: 'Rue de Paris — Caillebotte', credit: 'Caillebotte, 1877', baseBg: 'linear-gradient(135deg, #064E3B 0%, #065F46 100%)' },
};

/** Résout l'art d'une leçon : leçon → module → gradient seul */
export function resolveArt(lessonSlug: string, moduleSlug: string): ArtInfo {
  return lessonArt[lessonSlug]
    ?? moduleArtFallback[moduleSlug]
    ?? { url: '', alt: '', credit: '', baseBg: 'linear-gradient(135deg, #001A70 0%, #CC1A1A 100%)' };
}
