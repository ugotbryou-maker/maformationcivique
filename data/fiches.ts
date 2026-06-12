/**
 * Fiches bonus — grandes figures françaises & grands lieux du programme.
 * Contenu complémentaire, accessible depuis /fiches.
 *
 * Palette : tricolore FR (bleu → blanc → rouge), cf. design system.
 */
export interface Fiche {
  slug: string;
  category: 'figure' | 'lieu';
  name: string;
  /** Rôle / dates affichés sous le nom, ex: "1867–1934 · Physicienne et chimiste" */
  subtitle: string;
  /** Court tag affiché sur la carte verticale, ex: "Sciences", "Monument" */
  tag: string;
  image: string;
  imageAlt: string;
  credit: string;
  color: string;
  colorEnd: string;
  paragraph: string;
  keyPoints: string[];
}

export const fiches: Fiche[] = [
  // ── Grandes figures françaises ──────────────────────────────────────────
  {
    slug: 'marianne',
    category: 'figure',
    name: 'Marianne',
    subtitle: 'Depuis 1792 · Symbole de la République',
    tag: 'Symbole',
    image: '/images/modules/daumier-la-republique.jpg',
    imageAlt: 'La République — allégorie de Marianne, Honoré Daumier, 1848',
    credit: 'Honoré Daumier, 1848 — Musée d\'Orsay · Domaine public',
    color: '#002395',
    colorEnd: '#CC1A1A',
    paragraph: 'Marianne est la **figure allégorique de la République française**, apparue pendant la Révolution. Elle représente la **Liberté** et la Nation elle-même. Son buste trône dans toutes les mairies de France, sur les pièces de monnaie et les timbres-poste. Plusieurs femmes célèbres ont prêté leurs traits à Marianne au fil des décennies — Brigitte Bardot, Catherine Deneuve, Laetitia Casta ou encore Sophie Marceau.',
    keyPoints: [
      '1792 — Apparition de Marianne comme symbole de la République naissante',
      'Présente dans toutes les mairies de France, sur les timbres et les pièces',
      'Incarne la Liberté et l\'unité nationale, au-delà des clivages politiques',
    ],
  },
  {
    slug: 'marie-curie',
    category: 'figure',
    name: 'Marie Curie',
    subtitle: '1867–1934 · Physicienne et chimiste',
    tag: 'Sciences',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Marie_Curie_c._1920s.jpg',
    imageAlt: 'Portrait de Marie Curie, vers 1920',
    credit: 'Photographie, vers 1920 · Domaine public',
    color: '#0E7490',
    colorEnd: '#002395',
    paragraph: 'Née en Pologne, naturalisée française, **Marie Curie** a consacré sa vie à l\'étude de la **radioactivité**, un phénomène qu\'elle a découvert et nommé avec son mari Pierre Curie. Elle est la **première femme professeure** à la Sorbonne et reste, à ce jour, la seule personne à avoir reçu deux prix Nobel scientifiques dans deux disciplines différentes.',
    keyPoints: [
      '1903 — Prix Nobel de physique, pour ses travaux sur la radioactivité',
      '1911 — Prix Nobel de chimie, pour la découverte du radium et du polonium',
      '1995 — Entrée au Panthéon, première femme honorée pour ses propres mérites',
    ],
  },
  {
    slug: 'victor-hugo',
    category: 'figure',
    name: 'Victor Hugo',
    subtitle: '1802–1885 · Écrivain et homme politique',
    tag: 'Littérature',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg',
    imageAlt: 'Portrait de Victor Hugo par Étienne Carjat, 1876',
    credit: 'Étienne Carjat, 1876 · Domaine public',
    color: '#7C3AED',
    colorEnd: '#001A70',
    paragraph: '**Victor Hugo** est l\'une des plus grandes figures de la littérature française — poète, romancier et dramaturge, auteur des *Misérables* et de *Notre-Dame de Paris*. Engagé en politique, il s\'oppose au coup d\'État de Napoléon III et s\'exile pendant **19 ans**. Défenseur infatigable des libertés, de l\'école pour tous et de l\'abolition de la peine de mort, il devient une conscience morale de la nation.',
    keyPoints: [
      '1862 — Publication des Misérables',
      '1851–1870 — Exil politique de 19 ans, opposant à Napoléon III',
      '1885 — Funérailles nationales et entrée au Panthéon',
    ],
  },
  {
    slug: 'charles-de-gaulle',
    category: 'figure',
    name: 'Charles de Gaulle',
    subtitle: '1890–1970 · Général et président de la République',
    tag: 'Histoire',
    image: '/images/modules/de-gaulle-liberation-paris.jpg',
    imageAlt: 'Charles de Gaulle lors de la Libération de Paris, 1944',
    credit: 'Libération de Paris, août 1944 · Domaine public',
    color: '#001A70',
    colorEnd: '#0057A8',
    paragraph: 'Le 18 juin 1940, le général **Charles de Gaulle** lance depuis Londres un appel à poursuivre le combat contre l\'occupant nazi, fondant la **Résistance française**. Chef du gouvernement provisoire à la Libération, il revient au pouvoir en 1958 et fonde la **Ve République**, dont il devient le premier président. Il incarne aujourd\'hui la figure de l\'État et de l\'unité nationale dans les moments de crise.',
    keyPoints: [
      '18 juin 1940 — Appel de Londres, naissance de la Résistance',
      '25 août 1944 — Libération de Paris',
      '1958 — Fondation de la Ve République, premier président élu',
    ],
  },
  {
    slug: 'simone-veil',
    category: 'figure',
    name: 'Simone Veil',
    subtitle: '1927–2017 · Ministre et présidente du Parlement européen',
    tag: 'Droits & société',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Simone_Veil_%281984%29.jpg',
    imageAlt: 'Portrait de Simone Veil, 1984',
    credit: 'Photographie, 1984 · Domaine public',
    color: '#CC1A1A',
    colorEnd: '#7C3AED',
    paragraph: 'Rescapée des camps de la mort, **Simone Veil** devient ministre de la Santé en 1974. L\'année suivante, elle porte devant une Assemblée nationale très hostile la loi qui **légalise l\'avortement (IVG)** en France — la « loi Veil ». Première présidente du Parlement européen, elle restera une figure majeure de l\'engagement pour les droits des femmes et la construction européenne.',
    keyPoints: [
      '1975 — Adoption de la loi Veil légalisant l\'IVG',
      '1979–1982 — Première présidente du Parlement européen',
      '2018 — Entrée au Panthéon avec son mari Antoine Veil',
    ],
  },
  {
    slug: 'jean-moulin',
    category: 'figure',
    name: 'Jean Moulin',
    subtitle: '1899–1943 · Héros de la Résistance',
    tag: 'Histoire',
    image: '/images/modules/jean-moulin.webp',
    imageAlt: 'Portrait de Jean Moulin',
    credit: 'Portrait officiel · Domaine public',
    color: '#065F46',
    colorEnd: '#001A70',
    paragraph: 'Préfet avant-guerre, **Jean Moulin** rejoint la Résistance dès 1940. Envoyé à Londres par de Gaulle, il parvient à unifier les différents mouvements de résistance français au sein du **Conseil National de la Résistance (CNR)** en 1943. Arrêté par la Gestapo à Caluire, il est torturé par Klaus Barbie sans jamais parler, et meurt en déportation. Il symbolise le sacrifice et l\'unité de la Résistance.',
    keyPoints: [
      '1943 — Création du Conseil National de la Résistance (CNR)',
      'Arrêté et torturé par la Gestapo, ne révèle aucun secret',
      '1964 — Transfert de ses cendres au Panthéon, discours d\'André Malraux',
    ],
  },
  {
    slug: 'olympe-de-gouges',
    category: 'figure',
    name: 'Olympe de Gouges',
    subtitle: '1748–1793 · Femme de lettres et militante',
    tag: 'Droits & société',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Olympe_de_Gouges.jpg',
    imageAlt: 'Portrait d\'Olympe de Gouges, XVIIIe siècle',
    credit: 'Portrait anonyme, XVIIIe siècle · Domaine public',
    color: '#9F1239',
    colorEnd: '#002395',
    paragraph: 'Pendant la Révolution française, **Olympe de Gouges** publie en 1791 sa **Déclaration des droits de la femme et de la citoyenne**, en réponse à la Déclaration des droits de l\'homme et du citoyen de 1789, qui ne mentionnait pas les femmes. Pionnière du féminisme et engagée contre l\'esclavage, elle est guillotinée en 1793 pendant la Terreur pour ses positions politiques.',
    keyPoints: [
      '1791 — Déclaration des droits de la femme et de la citoyenne',
      'Une des premières voix françaises pour l\'abolition de l\'esclavage',
      'Pionnière des combats pour l\'égalité entre femmes et hommes',
    ],
  },
  {
    slug: 'jules-ferry',
    category: 'figure',
    name: 'Jules Ferry',
    subtitle: '1832–1893 · Ministre de l\'Instruction publique',
    tag: 'Éducation',
    image: '/images/modules/biographie-jules-ferry.jpg',
    imageAlt: 'Portrait officiel de Jules Ferry, vers 1885',
    credit: 'Portrait officiel, vers 1885 · Domaine public',
    color: '#0057A8',
    colorEnd: '#CC1A1A',
    paragraph: 'Ministre de l\'Instruction publique sous la IIIe République, **Jules Ferry** porte les lois de 1881 et 1882 qui rendent l\'école primaire **gratuite, laïque et obligatoire** pour tous les enfants, filles et garçons. Ces lois fondatrices créent l\'école républicaine moderne et restent au cœur du modèle éducatif français.',
    keyPoints: [
      '1881 — Loi rendant l\'école primaire gratuite',
      '1882 — Loi rendant l\'instruction obligatoire et laïque de 6 à 13 ans',
      'Fondateur de l\'école républicaine telle qu\'on la connaît aujourd\'hui',
    ],
  },

  // ── Grands lieux de France ───────────────────────────────────────────────
  {
    slug: 'tour-eiffel',
    category: 'lieu',
    name: 'La Tour Eiffel',
    subtitle: 'Paris · Construite en 1889',
    tag: 'Monument',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Paris_-_The_Eiffel_Tower_in_spring_-_2307.jpg',
    imageAlt: 'La Tour Eiffel à Paris',
    credit: 'Photographie · Wikimedia Commons, domaine public',
    color: '#002395',
    colorEnd: '#0057A8',
    paragraph: 'Construite par **Gustave Eiffel** pour l\'Exposition universelle de 1889, la **Tour Eiffel** culmine à 330 mètres et reste le monument le plus emblématique de la France. D\'abord critiquée par de nombreux artistes parisiens, elle est aujourd\'hui le **monument payant le plus visité au monde**, symbole de Paris et de la France à l\'international.',
    keyPoints: [
      '1889 — Inauguration pour l\'Exposition universelle',
      '330 mètres de hauteur, structure entièrement métallique',
      'Monument payant le plus visité au monde',
    ],
  },
  {
    slug: 'chateau-de-versailles',
    category: 'lieu',
    name: 'Le Château de Versailles',
    subtitle: 'Yvelines · Résidence royale de 1682 à 1789',
    tag: 'Monument',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Palace_of_Versailles_June_2010.jpg',
    imageAlt: 'Le Château de Versailles',
    credit: 'Photographie, juin 2010 · Wikimedia Commons, domaine public',
    color: '#7C3AED',
    colorEnd: '#CC1A1A',
    paragraph: 'Ancienne résidence des rois de France, le **Château de Versailles** symbolise la **monarchie absolue** voulue par Louis XIV, qui y installe la cour en 1682. Sa célèbre **Galerie des Glaces** a vu la signature de traités historiques, dont le traité de Versailles en 1919. Classé au patrimoine mondial de l\'UNESCO, c\'est aujourd\'hui un des monuments les plus visités de France.',
    keyPoints: [
      '1682–1789 — Résidence officielle des rois de France',
      '1919 — Signature du traité de Versailles dans la Galerie des Glaces',
      'Classé au patrimoine mondial de l\'UNESCO',
    ],
  },
  {
    slug: 'mont-saint-michel',
    category: 'lieu',
    name: 'Le Mont-Saint-Michel',
    subtitle: 'Normandie · Abbaye fondée au VIIIe siècle',
    tag: 'Patrimoine',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Mont_St_Michel_at_sunrise.jpg',
    imageAlt: 'Le Mont-Saint-Michel au lever du soleil',
    credit: 'Photographie · Wikimedia Commons, domaine public',
    color: '#0E7490',
    colorEnd: '#001A70',
    paragraph: 'Îlot rocheux surmonté d\'une abbaye fondée au **VIIIe siècle**, le **Mont-Saint-Michel** est l\'un des sites les plus visités de France. Entouré de marées spectaculaires parmi les plus fortes d\'Europe, il est classé au **patrimoine mondial de l\'UNESCO** depuis 1979 et reste un symbole fort du patrimoine religieux et architectural français.',
    keyPoints: [
      'VIIIe siècle — Fondation de l\'abbaye',
      '1979 — Classement au patrimoine mondial de l\'UNESCO',
      'Un des monuments les plus visités de France',
    ],
  },
  {
    slug: 'le-louvre',
    category: 'lieu',
    name: 'Le Louvre',
    subtitle: 'Paris · Musée depuis 1793',
    tag: 'Monument',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Louvre_Museum_Wikimedia_Commons.jpg',
    imageAlt: 'Le musée du Louvre et sa pyramide',
    credit: 'Photographie · Wikimedia Commons, domaine public',
    color: '#001A70',
    colorEnd: '#CC1A1A',
    paragraph: 'Ancien palais des rois de France, le **Louvre** devient un **musée** en 1793, en pleine Révolution, pour rendre les œuvres royales accessibles à tous. C\'est aujourd\'hui le **plus grand musée d\'art du monde**, qui abrite notamment *La Joconde* de Léonard de Vinci. Sa célèbre pyramide de verre, conçue par l\'architecte I. M. Pei, a été inaugurée en 1989.',
    keyPoints: [
      '1793 — Ouverture du Louvre comme musée public',
      'Plus grand musée d\'art du monde',
      '1989 — Inauguration de la pyramide de verre',
    ],
  },
  {
    slug: 'notre-dame-de-paris',
    category: 'lieu',
    name: 'Notre-Dame de Paris',
    subtitle: 'Paris · Cathédrale gothique, 1163–1345',
    tag: 'Patrimoine',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Cath%C3%A9drale_Notre_Dame%2C_Paris_30_September_2015.jpg',
    imageAlt: 'La cathédrale Notre-Dame de Paris',
    credit: 'Photographie, 2015 · Wikimedia Commons, domaine public',
    color: '#CC1A1A',
    colorEnd: '#001A70',
    paragraph: 'Chef-d\'œuvre de l\'art gothique construit entre **1163 et 1345**, **Notre-Dame de Paris** est l\'un des monuments religieux les plus célèbres au monde. Gravement endommagée par un incendie en **avril 2019**, elle a fait l\'objet d\'un vaste chantier de restauration international et a rouvert ses portes en **décembre 2024**.',
    keyPoints: [
      '1163–1345 — Construction de la cathédrale',
      'Avril 2019 — Incendie majeur de la toiture et de la flèche',
      'Décembre 2024 — Réouverture après restauration',
    ],
  },
  {
    slug: 'chateaux-de-la-loire',
    category: 'lieu',
    name: 'Les châteaux de la Loire',
    subtitle: 'Val de Loire · Architecture Renaissance',
    tag: 'Patrimoine',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chambord_Castle_Northwest_facade.jpg',
    imageAlt: 'Le château de Chambord',
    credit: 'Photographie, château de Chambord · Wikimedia Commons, domaine public',
    color: '#065F46',
    colorEnd: '#0E7490',
    paragraph: 'Le long de la Loire s\'égrène un ensemble exceptionnel de châteaux construits ou agrandis aux **XVe et XVIe siècles**, à l\'apogée de la **Renaissance française**. Chambord, Chenonceau ou Amboise comptent parmi les plus célèbres. La Vallée de la Loire est aujourd\'hui classée au patrimoine mondial de l\'UNESCO pour la richesse de son architecture et de ses paysages.',
    keyPoints: [
      'XVe–XVIe siècle — Âge d\'or de la Renaissance française',
      'Chambord, Chenonceau, Amboise parmi les plus célèbres',
      'Vallée de la Loire classée au patrimoine mondial de l\'UNESCO',
    ],
  },
  {
    slug: 'verdun',
    category: 'lieu',
    name: 'Verdun',
    subtitle: 'Meuse · Bataille de 1916',
    tag: 'Mémoire',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Ossuary_of_Douaumont_%28Verdun%2C_France_2013%29_%289124638286%29.jpg',
    imageAlt: 'L\'ossuaire de Douaumont, à Verdun',
    credit: 'Photographie, 2013 · Wikimedia Commons, domaine public',
    color: '#1E3A8A',
    colorEnd: '#9F1239',
    paragraph: 'En **1916**, la ville de **Verdun** est le théâtre d\'une des batailles les plus meurtrières de la Première Guerre mondiale, qui fait environ 300 000 morts. L\'**ossuaire de Douaumont** rassemble aujourd\'hui les restes de combattants non identifiés. En 1984, la poignée de main entre François Mitterrand et Helmut Kohl à Verdun est devenue le symbole de la **réconciliation franco-allemande**.',
    keyPoints: [
      '1916 — Bataille de Verdun, environ 300 000 morts',
      'Ossuaire de Douaumont — lieu de mémoire majeur',
      '1984 — Poignée de main Mitterrand-Kohl, symbole de réconciliation',
    ],
  },
  {
    slug: 'le-pantheon',
    category: 'lieu',
    name: 'Le Panthéon',
    subtitle: 'Paris · « Aux grands hommes, la patrie reconnaissante »',
    tag: 'Monument',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Paris_75005_Place_du_Panth%C3%A9on_20161111_Panth%C3%A9on_facade_west.jpg',
    imageAlt: 'Le Panthéon à Paris',
    credit: 'Photographie, 2016 · Wikimedia Commons, domaine public',
    color: '#9F1239',
    colorEnd: '#0057A8',
    paragraph: 'À l\'origine une église, le **Panthéon** devient pendant la Révolution un temple laïque destiné à honorer les grandes personnalités de la Nation, selon la devise inscrite sur son fronton : **« Aux grands hommes, la patrie reconnaissante »**. Voltaire, Victor Hugo, Marie Curie, Jean Moulin ou encore Simone Veil y reposent aujourd\'hui.',
    keyPoints: [
      'Devise : « Aux grands hommes, la patrie reconnaissante »',
      'Accueille les cendres de Voltaire, Hugo, Curie, Moulin, Veil...',
      'Ancienne église transformée en nécropole laïque dès la Révolution',
    ],
  },
];

export function getFiche(slug: string): Fiche | undefined {
  return fiches.find((f) => f.slug === slug);
}
