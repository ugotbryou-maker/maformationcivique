export interface Lesson {
  id: string;
  slug: string;
  moduleSlug: string;
  title: string;
  duration: number; // minutes
  content: string;  // markdown
  keyPoints: string[];
  quizIds: string[];
  free: boolean;
}

export interface Module {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  num: string;
  photo: string;
  photoAlt: string;
  lessons: Lesson[];
  questionCount: number;
  freeAccess: boolean;
  wide?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// MODULE 1 — Principes & valeurs de la République
// ─────────────────────────────────────────────────────────────────────────────
const mod01: Module = {
  id: 'mod-01',
  slug: 'republique',
  title: 'Principes & valeurs de la République',
  subtitle: 'Laïcité, devise, symboles, libertés',
  num: '01',
  photo: '/images/modules/republique.jpg',
  photoAlt: 'Marianne, symbole de la République française',
  questionCount: 51,
  freeAccess: true,
  lessons: [
    {
      id: 'les-01-01',
      slug: 'symboles-republique',
      moduleSlug: 'republique',
      title: 'Les symboles de la République',
      duration: 8,
      free: true,
      content: `# Les symboles de la République française

La République française est représentée par plusieurs symboles officiels qui incarnent ses valeurs fondamentales et son histoire.

## Le drapeau tricolore
Le drapeau bleu, blanc, rouge est apparu lors de la Révolution française. Le bleu et le rouge sont les couleurs de la ville de Paris, le blanc représentait la royauté. Ensemble, ils symbolisent l'union de la nation et la réconciliation entre le peuple et le roi. Il est utilisé lors de toutes les cérémonies officielles, en France et à l'étranger.

## La Marianne
Marianne est le symbole humain de la République française. Elle représente la liberté et la raison. Son buste figure dans toutes les mairies de France. Représentée avec un bonnet phrygien — symbole de la liberté depuis l'Antiquité — elle incarne les valeurs de la République : Liberté, Égalité, Fraternité.

## La devise
**Liberté, Égalité, Fraternité** est la devise de la République, inscrite dans la Constitution. Ces trois valeurs sont indissociables et fondent le pacte républicain. Elles apparaissent sur les bâtiments publics, les documents officiels et les pièces de monnaie.

## L'hymne national — La Marseillaise
La Marseillaise, composée en 1792 par Rouget de Lisle à Strasbourg, est l'hymne national de la France. Elle est chantée lors des cérémonies officielles, des compétitions sportives internationales et des commémorations nationales. Son titre vient des soldats marseillais qui la chantaient en montant à Paris.

## La fête nationale — Le 14 juillet
La Fête nationale commémore la prise de la Bastille le 14 juillet 1789, symbole de la fin de l'absolutisme royal et du début de la Révolution française. Elle est célébrée chaque année avec un défilé militaire sur les Champs-Élysées et des feux d'artifice dans toute la France.

## Le coq gaulois
Le coq gaulois est un emblème non officiel de la France. Il est associé à la nation française depuis l'Antiquité : en latin, *gallus* signifie à la fois « coq » et « Gaulois ». Il figure notamment sur certains sceaux officiels et représente la France dans les compétitions sportives.`,
      keyPoints: [
        'Drapeau tricolore — bleu, blanc, rouge — symbole depuis la Révolution (1789)',
        'Marianne — représentation humaine de la République, buste dans toutes les mairies',
        'Devise — Liberté, Égalité, Fraternité — inscrite dans la Constitution',
        'La Marseillaise — hymne national composé en 1792 par Rouget de Lisle',
        'Le 14 juillet — fête nationale, commémore la prise de la Bastille (1789)',
      ],
      quizIds: ['Q-PVR-001', 'Q-PVR-002', 'Q-PVR-003', 'Q-PVR-004', 'Q-PVR-005'],
    },
    {
      id: 'les-01-02',
      slug: 'laicite',
      moduleSlug: 'republique',
      title: 'La laïcité',
      duration: 10,
      free: true,
      content: `# La laïcité en France

La laïcité est un principe fondamental de la République française, inscrit dans l'article 1er de la Constitution de 1958 : « La France est une République indivisible, laïque, démocratique et sociale. »

## Définition et origines
La laïcité garantit la liberté de conscience et la liberté de culte, tout en assurant la neutralité de l'État vis-à-vis de toutes les religions. Elle est née du long processus de séparation entre les pouvoirs politiques et religieux, culminant avec la loi de 1905.

## La loi du 9 décembre 1905
La loi de séparation des Églises et de l'État est le texte fondateur de la laïcité française. Elle établit trois principes essentiels :
- La liberté de conscience : chacun est libre de croire ou de ne pas croire
- La liberté de culte : les religions peuvent s'organiser librement dans le cadre de la loi
- La séparation : l'État ne reconnaît, ne salarie ni ne subventionne aucun culte

## La laïcité à l'école
L'école publique est un espace laïque par excellence. La loi du 15 mars 2004 interdit le port de signes religieux ostensibles dans les écoles, collèges et lycées publics. Les enseignants et agents de l'État sont soumis à une obligation de neutralité religieuse stricte dans l'exercice de leurs fonctions.

## Laïcité et liberté
La laïcité protège toutes les religions et les non-croyants de manière égale. Elle n'est pas une lutte contre la religion, mais la garantie que l'État ne favorise ni ne défavorise aucune croyance. Chaque citoyen peut pratiquer sa religion librement dans la sphère privée.

## Applications concrètes
- Les agents de l'État doivent faire preuve de neutralité religieuse dans leur service
- Les locaux publics ne peuvent afficher de symboles religieux
- Les cérémonies officielles sont non confessionnelles
- Les programmes scolaires sont établis indépendamment de toute considération religieuse`,
      keyPoints: [
        'Laïcité — inscrite à l\'article 1er de la Constitution de 1958',
        'Loi de 1905 — séparation des Églises et de l\'État, texte fondateur',
        'Neutralité obligatoire — de l\'État vis-à-vis de toutes les religions',
        'Liberté de conscience — droit de croire ou de ne pas croire',
        'École laïque — interdiction des signes religieux ostensibles (loi 2004)',
      ],
      quizIds: ['Q-PVR-006', 'Q-PVR-007', 'Q-PVR-008', 'Q-PVR-009', 'Q-PVR-010'],
    },
    {
      id: 'les-01-03',
      slug: 'devise-liberte-egalite-fraternite',
      moduleSlug: 'republique',
      title: 'Liberté, Égalité, Fraternité',
      duration: 9,
      free: false,
      content: `# La devise de la République : Liberté, Égalité, Fraternité

La devise « Liberté, Égalité, Fraternité » est au cœur de l'identité républicaine française. Inscrite dans la Constitution, elle résume les valeurs fondamentales sur lesquelles repose la vie en société.

## La Liberté
La liberté est la première valeur républicaine. Elle comprend plusieurs dimensions :
- La liberté individuelle : personne ne peut être arrêté arbitrairement
- La liberté d'expression : le droit de penser et de s'exprimer librement
- La liberté de conscience : le droit de croire ou de ne pas croire
- La liberté de réunion et d'association
Ces libertés sont garanties par la Déclaration des droits de l'homme et du citoyen de 1789 et par la Constitution.

## L'Égalité
L'égalité signifie que tous les citoyens ont les mêmes droits et sont soumis aux mêmes lois. Elle se décline en plusieurs formes :
- L'égalité devant la loi : la loi est la même pour tous
- L'égalité des droits : hommes et femmes ont les mêmes droits
- L'égalité des chances : l'État doit permettre à chacun de réaliser son potentiel
- L'égalité devant l'impôt et les charges publiques

## La Fraternité
La fraternité est le lien qui unit les membres de la nation. Elle se traduit par :
- La solidarité nationale : système de protection sociale, aide aux plus démunis
- La lutte contre les discriminations et le racisme
- Le devoir d'assistance entre citoyens
- L'accueil et l'intégration des personnes étrangères

## La devise dans la pratique
Ces trois valeurs ne sont pas séparées : elles se complètent et s'équilibrent. La liberté sans égalité deviendrait privilège ; l'égalité sans liberté deviendrait uniformité ; la fraternité sans liberté ni égalité ne serait que compassion. Ensemble, elles forment le fondement de la République.`,
      keyPoints: [
        'Liberté — droit d\'expression, de conscience, d\'association, garanti par la Constitution',
        'Égalité — tous égaux devant la loi, entre hommes et femmes, à l\'impôt',
        'Fraternité — solidarité nationale, lutte contre les discriminations',
        'Devise inscrite — dans la Constitution et sur tous les bâtiments publics',
        'Trois valeurs indissociables — elles se complètent et s\'équilibrent',
      ],
      quizIds: ['Q-PVR-011', 'Q-PVR-012', 'Q-PVR-013'],
    },
    {
      id: 'les-01-04',
      slug: 'langue-republique',
      moduleSlug: 'republique',
      title: 'La langue de la République',
      duration: 6,
      free: false,
      content: `# Le français, langue de la République

Selon l'article 2 de la Constitution, « La langue de la République est le français. » Cette disposition, introduite en 1992, consacre le rôle central de la langue française dans la vie nationale.

## Le français, langue officielle
Le français est la langue officielle de l'État français. Il est utilisé dans tous les actes officiels, les décisions de justice, les lois, les contrats de travail et la communication des services publics. Toute personne souhaitant acquérir la nationalité française doit justifier d'un niveau B1 à l'oral en français.

## Une langue pour tous les citoyens
La maîtrise du français est considérée comme un facteur d'intégration essentiel. Elle permet :
- D'accéder à l'emploi et à la formation
- De comprendre ses droits et ses obligations
- De participer à la vie civique et politique
- De communiquer avec les services publics

## La Francophonie
La France est le berceau de la langue française, parlée par environ 320 millions de personnes dans le monde. L'Organisation internationale de la Francophonie (OIF) regroupe 88 États et gouvernements qui partagent la langue française. Le 20 mars est la Journée internationale de la Francophonie.

## Langues régionales
La France reconnaît l'existence de langues régionales, qui appartiennent au patrimoine de la France. Des langues comme le breton, l'alsacien, l'occitan, le basque ou le créole sont parlées dans certaines régions. Elles peuvent être enseignées à l'école dans ces territoires.`,
      keyPoints: [
        'Français — langue officielle inscrite à l\'article 2 de la Constitution (1992)',
        'Niveau B1 oral requis — pour la demande de nationalité française',
        'Francophonie — 320 millions de locuteurs dans le monde, 88 États membres de l\'OIF',
        'Journée internationale de la Francophonie — 20 mars',
        'Langues régionales — reconnues comme patrimoine de la France',
      ],
      quizIds: ['Q-PVR-014', 'Q-PVR-015', 'Q-PVR-016'],
    },
    {
      id: 'les-01-05',
      slug: 'contrat-engagement-republicain',
      moduleSlug: 'republique',
      title: 'Le contrat d\'engagement républicain',
      duration: 7,
      free: false,
      content: `# Le contrat d'engagement républicain

Le contrat d'engagement républicain est un document signé par les étrangers lors de la délivrance de leur premier titre de séjour ou de leur naturalisation. Il symbolise leur adhésion aux valeurs de la République française.

## Contenu du contrat
En signant ce contrat, la personne s'engage à :
- Respecter les principes de la République française
- Respecter la liberté personnelle d'autrui
- Respecter l'égalité entre les femmes et les hommes
- Ne pas remettre en cause le caractère laïque de la République
- Respecter les lois de la République
- Apprendre la langue française

## Le parcours d'intégration républicaine
Ce contrat s'inscrit dans le Contrat d'intégration républicaine (CIR), signé à l'arrivée en France pour un premier titre de séjour. Il prévoit :
- Une formation civique de 12 heures (dont 6h sur les valeurs de la République)
- Un test de connaissance du français si nécessaire
- Un bilan de compétences professionnelles
- Un accompagnement personnalisé

## La formation civique obligatoire
La formation civique est obligatoire depuis le 1er janvier 2026 pour toutes les personnes étrangères souhaitant renouveler ou obtenir un titre de séjour, ou demander la naturalisation. Elle comprend un examen de 40 questions (30 minutes) avec un seuil de réussite de 80%.

## Les niveaux de l'examen
- **CSP** (Carte de séjour pluriannuelle) : examen de 40 questions
- **CR** (Carte de résident) : examen de 40 questions
- **NAT** (Naturalisation) : examen de 40 questions, niveau plus exigeant`,
      keyPoints: [
        'CER — signé lors de tout premier titre de séjour ou naturalisation',
        'Formation civique — 12 heures obligatoires depuis janvier 2026',
        'Examen civique — 40 questions, 30 minutes, 80% de réussite requis',
        'Trois niveaux — CSP (séjour pluriannuel), CR (carte résident), NAT (naturalisation)',
        'Engagements — respecter les lois, l\'égalité H/F, la laïcité, apprendre le français',
      ],
      quizIds: ['Q-PVR-017', 'Q-PVR-018', 'Q-PVR-019', 'Q-PVR-020'],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// MODULE 2 — Droits & devoirs
// ─────────────────────────────────────────────────────────────────────────────
const mod02: Module = {
  id: 'mod-02',
  slug: 'droits',
  title: 'Droits & devoirs',
  subtitle: 'Constitution, libertés, obligations',
  num: '02',
  photo: '/images/modules/droits.jpg',
  photoAlt: 'Déclaration des droits de l\'homme et du citoyen',
  questionCount: 38,
  freeAccess: false,
  lessons: [
    {
      id: 'les-02-01',
      slug: 'droits-fondamentaux',
      moduleSlug: 'droits',
      title: 'Les droits fondamentaux',
      duration: 12,
      free: false,
      content: `# Les droits fondamentaux en France

Les droits fondamentaux sont les droits essentiels reconnus à toute personne humaine. Ils sont protégés par la Constitution française et les textes internationaux.

## Les textes fondateurs
Trois grands textes constituent le "bloc de constitutionnalité" en France :
- La **Déclaration des droits de l'homme et du citoyen** de 1789 : les droits civils et politiques
- Le **Préambule de la Constitution de 1946** : les droits économiques et sociaux (droit au travail, à la santé, à l'éducation)
- La **Charte de l'environnement** de 2004 : les droits environnementaux

## Les droits civils et politiques
Ces droits, issus de 1789, protègent l'individu face au pouvoir :
- La liberté d'aller et venir
- La liberté d'expression et de la presse
- La liberté de conscience et de religion
- Le droit à un procès équitable
- Le droit de propriété
- La présomption d'innocence

## Les droits économiques et sociaux
Le Préambule de 1946 reconnaît des droits plus collectifs :
- Le droit au travail et à une rémunération équitable
- Le droit à la protection de la santé
- Le droit à l'éducation
- Le droit à la protection sociale (retraite, chômage, famille)
- Le droit au logement décent

## La dignité humaine
La dignité de la personne humaine est un principe fondamental. Elle interdit :
- La torture et les traitements inhumains ou dégradants
- L'esclavage et le travail forcé
- Toute atteinte au corps humain sans consentement
Le Conseil constitutionnel reconnaît la dignité humaine comme une valeur constitutionnelle depuis 1994.

## Les acteurs de la protection des droits
- Le **Défenseur des droits** : autorité indépendante qui défend les droits des citoyens face aux administrations
- Le **Conseil constitutionnel** : vérifie que les lois respectent la Constitution
- La **Cour européenne des droits de l'homme** : juridiction internationale (Strasbourg)`,
      keyPoints: [
        'Bloc de constitutionnalité — DDHC 1789, Préambule 1946, Charte environnement 2004',
        'Droits civils et politiques — liberté, expression, conscience, procès équitable',
        'Droits économiques et sociaux — travail, santé, éducation, logement',
        'Dignité humaine — valeur constitutionnelle depuis 1994, interdit la torture',
        'Défenseur des droits — autorité indépendante protégeant les citoyens',
      ],
      quizIds: ['Q-DD-001', 'Q-DD-002', 'Q-DD-003', 'Q-DD-004'],
    },
    {
      id: 'les-02-02',
      slug: 'citoyennete-droits-civiques',
      moduleSlug: 'droits',
      title: 'La citoyenneté et les droits civiques',
      duration: 10,
      free: false,
      content: `# La citoyenneté française et les droits civiques

La citoyenneté française confère des droits et des devoirs spécifiques. Elle est le lien juridique et politique entre un individu et la République.

## Qu'est-ce que la citoyenneté ?
La citoyenneté française s'acquiert par :
- La **naissance** : si l'un des parents est français (droit du sang)
- Le **droit du sol** : naissance sur le territoire français dans certaines conditions
- La **naturalisation** : après une période de résidence légale (généralement 5 ans)
- Le **mariage** : après 4 ans de vie commune avec un conjoint français

## Le droit de vote
Le droit de vote est le droit civique fondamental. Pour voter en France, il faut :
- Avoir la nationalité française
- Être âgé de 18 ans ou plus
- Être inscrit sur les listes électorales
- Ne pas avoir perdu ses droits civiques
Les étrangers résidents en France ont le droit de vote aux élections municipales et européennes (ressortissants UE).

## Les élections en France
- **Présidentielle** : tous les 5 ans, au suffrage universel direct (2 tours)
- **Législatives** : tous les 5 ans, pour élire les 577 députés de l'Assemblée nationale
- **Sénatoriales** : tous les 6 ans, au suffrage universel indirect
- **Européennes** : tous les 5 ans, pour élire les eurodéputés français
- **Municipales** : tous les 6 ans, pour élire les conseils municipaux
- **Référendum** : vote direct des citoyens sur une question précise

## La perte des droits civiques
Un citoyen peut perdre ses droits civiques suite à une condamnation pénale. Cette peine complémentaire est décidée par un tribunal.`,
      keyPoints: [
        'Citoyenneté — par naissance (droit du sang/sol), naturalisation ou mariage',
        'Droit de vote — à 18 ans, après inscription sur les listes électorales',
        'Présidentielle — tous les 5 ans, suffrage universel direct, 2 tours',
        'Étrangers UE — droit de vote aux municipales et européennes',
        'Naturalisation — après 5 ans de résidence légale en France',
      ],
      quizIds: ['Q-DD-005', 'Q-DD-006', 'Q-DD-007', 'Q-DD-008'],
    },
    {
      id: 'les-02-03',
      slug: 'egalite-dignite-libertés',
      moduleSlug: 'droits',
      title: 'Égalité, dignité et libertés individuelles',
      duration: 9,
      free: false,
      content: `# Égalité, dignité et libertés individuelles

La République française garantit à chacun des droits fondamentaux liés à sa personne. Ces droits protègent les individus dans leur vie quotidienne.

## L'égalité entre les femmes et les hommes
L'égalité entre les femmes et les hommes est un principe constitutionnel depuis 1999. Elle se traduit par :
- L'égalité salariale : à travail égal, salaire égal
- La parité en politique : les partis doivent présenter autant de femmes que d'hommes
- La protection contre les violences conjugales
- Le droit à l'IVG (Interruption volontaire de grossesse), inscrit dans la Constitution en 2024
La France a été l'un des premiers pays au monde à inscrire le droit à l'avortement dans sa Constitution.

## La lutte contre les discriminations
La loi interdit toute discrimination fondée sur :
- L'origine, la nationalité, l'ethnie ou la race
- Le sexe ou l'orientation sexuelle
- La religion ou les convictions
- L'âge, le handicap ou l'état de santé
- La situation familiale ou le lieu de résidence
Le Défenseur des droits peut être saisi en cas de discrimination.

## La liberté du corps
Chaque personne a le droit de disposer librement de son corps. Cela inclut :
- Le consentement obligatoire pour tout acte médical
- L'interdiction des mutilations génitales féminines
- La protection contre les violences physiques et sexuelles
- La liberté du mariage : nul ne peut être contraint à se marier

## Les libertés au sein du couple
La loi garantit les libertés individuelles au sein du couple :
- Le droit au divorce
- L'interdiction des mariages forcés
- La protection contre les violences conjugales (25% des féminicides ont lieu dans ce cadre)
- L'égalité des droits entre époux`,
      keyPoints: [
        'Égalité H/F — principe constitutionnel depuis 1999, parité en politique',
        'Droit à l\'IVG — inscrit dans la Constitution française en 2024',
        'Discriminations — interdites par la loi sur 9 critères (origine, sexe, religion...)',
        'Défenseur des droits — autorité à saisir en cas de discrimination',
        'Consentement — obligatoire pour tout acte médical (droit au corps)',
      ],
      quizIds: ['Q-DD-009', 'Q-DD-010', 'Q-DD-011'],
    },
    {
      id: 'les-02-04',
      slug: 'devoirs-obligations',
      moduleSlug: 'droits',
      title: 'Devoirs et obligations des résidents',
      duration: 8,
      free: false,
      content: `# Les devoirs et obligations des personnes résidant en France

Vivre en France implique non seulement des droits, mais aussi des obligations. Ces devoirs sont la contrepartie de la protection offerte par la République.

## Les obligations légales
Toute personne résidant en France doit respecter les lois françaises :
- **Scolarisation obligatoire** : de 3 à 16 ans pour tous les enfants résidant en France
- **Déclaration des revenus** : obligation fiscale pour tous les résidents
- **Respect de l'ordre public** : interdiction de tout acte troublant la paix sociale
- **Respect des lois et règlements** : ignorance de la loi n'est pas une excuse

## Le devoir de respecter les principes républicains
Toute personne en France doit respecter :
- La séparation des pouvoirs et l'autorité de l'État
- La laïcité et la neutralité de l'espace public
- L'égalité entre les femmes et les hommes
- L'interdiction de toute violence physique ou psychologique

## Les obligations liées au titre de séjour
Les étrangers en France ont des obligations spécifiques :
- Déclarer tout changement d'adresse à la préfecture
- Renouveler son titre de séjour avant expiration
- Ne pas travailler sans autorisation de travail
- Respecter les conditions de son titre de séjour

## La solidarité nationale — l'impôt
L'impôt est le moyen par lequel chacun contribue au financement des services publics :
- L'impôt sur le revenu (progressif selon les revenus)
- La TVA (taxe sur la valeur ajoutée, incluse dans les prix)
- Les cotisations sociales (pour la santé, la retraite, le chômage)
La France est l'un des pays où la protection sociale est la plus développée au monde.`,
      keyPoints: [
        'Scolarité obligatoire — de 3 à 16 ans pour tous les enfants résidant en France',
        'Déclaration des revenus — obligation fiscale pour tous les résidents',
        'Titre de séjour — déclaration des changements d\'adresse, renouvellement obligatoire',
        'Impôt — financement des services publics et de la protection sociale',
        'Loi française — s\'applique à tous, l\'ignorance n\'est pas une excuse',
      ],
      quizIds: ['Q-DD-012', 'Q-DD-013', 'Q-DD-014', 'Q-DD-015'],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// MODULE 3 — Institutions & politique
// ─────────────────────────────────────────────────────────────────────────────
const mod03: Module = {
  id: 'mod-03',
  slug: 'institutions',
  title: 'Institutions & politique',
  subtitle: 'Gouvernement, élections, UE',
  num: '03',
  photo: '/images/modules/institutions.jpg',
  photoAlt: 'Assemblée nationale française',
  questionCount: 38,
  freeAccess: false,
  lessons: [
    {
      id: 'les-03-01',
      slug: 'etat-droit-separation-pouvoirs',
      moduleSlug: 'institutions',
      title: 'L\'État de droit et la séparation des pouvoirs',
      duration: 10,
      free: false,
      content: `# L'État de droit et la séparation des pouvoirs

La France est un État de droit : cela signifie que l'État lui-même est soumis à des règles juridiques, que nul n'est au-dessus de la loi.

## Qu'est-ce qu'un État de droit ?
Un État de droit repose sur plusieurs principes :
- La **hiérarchie des normes** : la Constitution est au sommet, suivie des lois organiques, des lois ordinaires, des décrets et arrêtés
- La **séparation des pouvoirs** : aucun pouvoir ne peut en contrôler un autre
- L'**indépendance de la justice** : les juges sont indépendants du pouvoir politique
- Le **respect des droits fondamentaux** par l'État lui-même

## La hiérarchie des normes
En France, les normes juridiques sont organisées en pyramide (pyramide de Kelsen) :
1. La Constitution (au sommet)
2. Les traités internationaux et le droit européen
3. Les lois organiques
4. Les lois ordinaires
5. Les décrets et ordonnances
6. Les arrêtés

## Les trois pouvoirs
La séparation des pouvoirs (théorie de Montesquieu, 1748) distingue :
- Le **pouvoir législatif** : vote les lois — Parlement (Assemblée nationale + Sénat)
- Le **pouvoir exécutif** : applique les lois — Président de la République + Gouvernement
- Le **pouvoir judiciaire** : interprète et applique la loi — juridictions indépendantes

## Le pouvoir judiciaire
La justice française est indépendante. Elle comprend :
- Les **juridictions civiles** (litiges entre particuliers)
- Les **juridictions pénales** (infractions à la loi)
- Les **juridictions administratives** (litiges avec l'administration)
- Le **Conseil constitutionnel** (vérifie la conformité des lois à la Constitution)`,
      keyPoints: [
        'État de droit — l\'État est soumis à la loi, nul n\'est au-dessus',
        'Pyramide des normes — Constitution > lois > décrets > arrêtés',
        'Séparation des pouvoirs — législatif, exécutif, judiciaire (Montesquieu, 1748)',
        'Pouvoir législatif — Parlement : Assemblée nationale + Sénat',
        'Justice indépendante — les juges sont indépendants du pouvoir politique',
      ],
      quizIds: ['Q-IP-001', 'Q-IP-002', 'Q-IP-003'],
    },
    {
      id: 'les-03-02',
      slug: 'democratie-droit-vote',
      moduleSlug: 'institutions',
      title: 'Démocratie et droit de vote',
      duration: 11,
      free: false,
      content: `# La démocratie et le droit de vote en France

La France est une démocratie représentative : les citoyens élisent des représentants qui exercent le pouvoir en leur nom.

## Les principes de la démocratie
Une démocratie repose sur :
- Le **suffrage universel** : tous les citoyens peuvent voter (hommes et femmes depuis 1944)
- La **pluralité des partis** : plusieurs partis politiques peuvent se former librement
- La **liberté de la presse** : les médias peuvent critiquer le pouvoir
- L'**alternance politique** : le pouvoir peut changer de mains par les élections

## Le droit de vote en France
Caractéristiques du vote en France :
- **Universel** : tous les citoyens français majeurs peuvent voter
- **Égal** : une personne = une voix
- **Secret** : le vote est confidentiel
- **Libre** : nul ne peut contraindre une personne à voter d'une certaine façon
- **Direct** pour la plupart des élections, **indirect** pour le Sénat

## Le système des deux tours
Pour les élections présidentielles et législatives, la France utilise le scrutin à deux tours :
- **1er tour** : si un candidat obtient la majorité absolue (50% + 1), il est élu
- **2ème tour** : si non, les deux premiers candidats s'affrontent
Ce système favorise les partis du centre et oblige à des compromis.

## Les partis politiques
En France, les principaux courants politiques sont :
- La gauche (socialistes, écologistes, communistes)
- Le centre (La République En Marche)
- La droite (Les Républicains)
- L'extrême gauche et l'extrême droite
La loi garantit le pluralisme politique et interdit les partis qui prônent la violence.

## Comment voter une loi ?
1. Initiative : gouvernement (projet de loi) ou parlement (proposition de loi)
2. Vote à l'Assemblée nationale
3. Vote au Sénat
4. En cas de désaccord : commission mixte paritaire, puis vote final à l'Assemblée`,
      keyPoints: [
        'Suffrage universel — tous les citoyens français majeurs depuis 1944 (femmes)',
        'Vote : universel, égal, secret, libre et direct',
        'Deux tours — pour présidentielle et législatives, 2e tour si pas de majorité absolue',
        'Pluralisme politique — plusieurs partis garantis par la loi',
        'Loi votée — par l\'Assemblée nationale + Sénat (navette parlementaire)',
      ],
      quizIds: ['Q-IP-004', 'Q-IP-005', 'Q-IP-006', 'Q-IP-007'],
    },
    {
      id: 'les-03-03',
      slug: 'organisation-republique',
      moduleSlug: 'institutions',
      title: 'L\'organisation de la République française',
      duration: 13,
      free: false,
      content: `# L'organisation de la République française

La Ve République, fondée en 1958, organise les pouvoirs publics en France selon un système semi-présidentiel unique en Europe.

## Le Président de la République
Le Président est le chef de l'État. Il est élu au suffrage universel direct pour un mandat de 5 ans (quinquennat), renouvelable une fois. Ses pouvoirs :
- Nomme le Premier ministre
- Préside le Conseil des ministres
- Est le chef des armées
- Peut dissoudre l'Assemblée nationale
- Peut consulter les citoyens par référendum
- Représente la France à l'étranger

## Le Gouvernement
Le Premier ministre est le chef du Gouvernement. Il est nommé par le Président. Il dirige l'action du Gouvernement, assure l'exécution des lois et dispose du pouvoir réglementaire. Les ministres sont nommés sur proposition du Premier ministre.

## Le Parlement
Le Parlement français est bicaméral (deux chambres) :
- **L'Assemblée nationale** : 577 députés, élus pour 5 ans au suffrage universel direct. Peut renverser le Gouvernement.
- **Le Sénat** : 348 sénateurs, élus pour 6 ans au suffrage universel indirect (par les élus locaux). Représente les collectivités territoriales.

## Les collectivités territoriales
La France est organisée en plusieurs niveaux :
- **Les communes** : 35 000 communes, dirigées par un maire élu
- **Les départements** : 101 (dont 5 outre-mer), dirigés par un conseil départemental
- **Les régions** : 18 (dont 5 outre-mer), dirigées par un conseil régional
- **Les intercommunalités** : regroupements de communes

## Le Conseil constitutionnel
Le Conseil constitutionnel veille à la conformité des lois à la Constitution. Il est composé de 9 membres nommés pour 9 ans (3 par le Président, 3 par l'Assemblée, 3 par le Sénat). Depuis 2010, les citoyens peuvent saisir le Conseil via la Question prioritaire de constitutionnalité (QPC).`,
      keyPoints: [
        'Président — élu pour 5 ans au suffrage universel direct, 2 mandats maximum',
        'Premier ministre — chef du Gouvernement, nommé par le Président',
        'Assemblée nationale — 577 députés, élus pour 5 ans, peut renverser le Gouvernement',
        'Sénat — 348 sénateurs, élus pour 6 ans au suffrage indirect, représente les collectivités',
        '35 000 communes — dirigées par un maire élu au suffrage universel',
      ],
      quizIds: ['Q-IP-008', 'Q-IP-009', 'Q-IP-010', 'Q-IP-011', 'Q-IP-012'],
    },
    {
      id: 'les-03-04',
      slug: 'institutions-europeennes',
      moduleSlug: 'institutions',
      title: 'Les institutions européennes',
      duration: 10,
      free: false,
      content: `# Les institutions européennes

La France est membre fondateur de l'Union européenne. Comprendre les institutions européennes est essentiel pour saisir comment se prennent les décisions qui affectent la vie quotidienne.

## L'histoire de la construction européenne
- **1951** : Création de la CECA (Communauté européenne du charbon et de l'acier) par 6 pays
- **1957** : Traité de Rome — création de la CEE (Communauté économique européenne)
- **1992** : Traité de Maastricht — création de l'Union européenne, monnaie unique
- **2002** : Introduction de l'euro comme monnaie
- **2007** : Traité de Lisbonne — réforme des institutions
Aujourd'hui, l'UE compte **27 États membres**.

## Les principales institutions
**Le Conseil européen** : réunit les 27 chefs d'État ou de gouvernement. Définit les grandes orientations politiques. Présidé par un président élu pour 2,5 ans.

**La Commission européenne** : 27 commissaires (un par État membre). Propose les lois européennes, veille à leur application et gère le budget.

**Le Parlement européen** : 720 députés élus au suffrage universel direct tous les 5 ans dans les 27 États membres. Vote les lois et le budget.

**Le Conseil de l'UE** (Conseil des ministres) : réunit les ministres des États membres selon les sujets traités. Vote les lois avec le Parlement.

**La Cour de justice de l'UE** : veille à l'application du droit européen.

## Les élections européennes
Les élections européennes ont lieu tous les 5 ans dans les 27 pays de l'UE. En France, les ressortissants étrangers de l'UE peuvent voter à ces élections.

## L'euro
L'euro est la monnaie de 20 pays de l'UE (zone euro). La Banque centrale européenne (BCE), à Francfort, gère la politique monétaire de la zone euro.`,
      keyPoints: [
        'UE — 27 États membres, née du Traité de Rome (1957), monnaie unique euro (2002)',
        'Commission européenne — 27 commissaires, propose les lois, gardienne des traités',
        'Parlement européen — 720 élus, suffrage universel direct tous les 5 ans',
        'Conseil européen — chefs d\'État, définit les orientations politiques',
        'Euro — monnaie de 20 pays, géré par la BCE à Francfort',
      ],
      quizIds: ['Q-IP-013', 'Q-IP-014', 'Q-IP-015', 'Q-IP-016'],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// MODULE 4 — Histoire, géographie & culture
// ─────────────────────────────────────────────────────────────────────────────
const mod04: Module = {
  id: 'mod-04',
  slug: 'histoire',
  title: 'Histoire, géographie & culture',
  subtitle: 'Révolution, République, patrimoine',
  num: '04',
  photo: '/images/modules/histoire.jpg',
  photoAlt: 'La Liberté guidant le peuple — Delacroix',
  questionCount: 42,
  freeAccess: false,
  lessons: [
    {
      id: 'les-04-01',
      slug: 'regimes-politiques-1789',
      moduleSlug: 'histoire',
      title: 'Les régimes politiques depuis 1789',
      duration: 14,
      free: false,
      content: `# Les régimes politiques français depuis 1789

Depuis la Révolution française, la France a connu de nombreux régimes politiques. Cette instabilité a finalement conduit à l'établissement durable de la République.

## L'Ancien Régime et la Révolution (avant 1789)
Sous l'Ancien Régime, la France était une monarchie absolue. Le roi détenait tous les pouvoirs. La société était divisée en trois ordres : la noblesse, le clergé et le Tiers-État. La Révolution de 1789 met fin à ce système.

## De la Révolution à la Ière République (1789–1804)
- **1789** : Révolution française, Déclaration des droits de l'homme (26 août 1789)
- **1792** : Proclamation de la Ière République
- **1793–1794** : La Terreur (gouvernement révolutionnaire radical)
- **1799** : Coup d'État de Napoléon Bonaparte (18 Brumaire)
- **1804** : Napoléon se proclame Empereur — le Ier Empire

## Les empires et monarchies (1804–1870)
- **Ier Empire** (1804–1815) : Napoléon Ier, conquêtes européennes, Code civil (1804)
- **Restauration** (1815–1830) : retour de la monarchie (Louis XVIII, Charles X)
- **Monarchie de Juillet** (1830–1848) : Louis-Philippe, régime constitutionnel
- **IIème République** (1848–1851) : suffrage universel masculin, abolition de l'esclavage
- **IInd Empire** (1852–1870) : Napoléon III

## La IIIème République (1870–1940)
La IIIème République est la plus longue République française (70 ans). Moments clés :
- 1881–1882 : Lois Ferry — école publique, gratuite et laïque obligatoire
- 1905 : Loi de séparation des Églises et de l'État
- 1914–1918 : Première Guerre mondiale (8 millions de morts français)
- 1939–1940 : Début de la Seconde Guerre mondiale

## La IVème République (1946–1958)
Après la Libération (1944), la IVème République est fondée. Elle se caractérise par une grande instabilité gouvernementale (21 gouvernements en 12 ans). La guerre d'Algérie précipite sa fin.

## La Ve République (depuis 1958)
Le Général de Gaulle fonde la Ve République avec une Constitution renforçant le pouvoir exécutif. Elle est toujours en vigueur aujourd'hui.`,
      keyPoints: [
        '1789 — Révolution française, fin de la monarchie absolue, DDHC',
        'Ière République — proclamée en 1792, premier régime républicain',
        'Code civil — créé par Napoléon en 1804, toujours en vigueur',
        'IIIème République — 1870-1940, la plus longue, lois laïques (Ferry 1882, séparation 1905)',
        'Ve République — depuis 1958, fondée par de Gaulle, toujours en vigueur',
      ],
      quizIds: ['Q-HGC-001', 'Q-HGC-002', 'Q-HGC-003', 'Q-HGC-004'],
    },
    {
      id: 'les-04-02',
      slug: 'veme-republique',
      moduleSlug: 'histoire',
      title: 'La Ve République',
      duration: 11,
      free: false,
      content: `# La Ve République depuis 1958

La Ve République est le régime politique actuel de la France, fondé par le Général de Gaulle. Elle a traversé des crises importantes tout en démontrant sa solidité institutionnelle.

## La naissance de la Ve République
En 1958, la France est en crise : la guerre d'Algérie paralyse le pays et la IVème République est inefficace. Le Général de Gaulle est rappelé au pouvoir. Une nouvelle Constitution est adoptée par référendum le 28 septembre 1958. Elle instaure un régime semi-présidentiel avec un exécutif fort.

## Les grandes avancées sociales de la Ve République
- **1967** : Légalisation de la contraception (loi Neuwirth)
- **1968** : Mai 68 — mouvement social majeur, réformes du droit du travail
- **1972** : Abaissement de la majorité de 21 à 18 ans
- **1975** : Dépénalisation de l'avortement (loi Veil)
- **1981** : Abolition de la peine de mort (loi Badinter)
- **1999** : PACS (Pacte civil de solidarité)
- **2013** : Mariage pour tous
- **2024** : IVG inscrite dans la Constitution

## Les présidents de la Ve République
1. Charles de Gaulle (1959–1969)
2. Georges Pompidou (1969–1974)
3. Valéry Giscard d'Estaing (1974–1981)
4. François Mitterrand (1981–1995)
5. Jacques Chirac (1995–2007)
6. Nicolas Sarkozy (2007–2012)
7. François Hollande (2012–2017)
8. Emmanuel Macron (2017–)

## La cohabitation
Quand le Président et le Premier ministre sont de partis politiques opposés, on parle de "cohabitation". Cela s'est produit trois fois sous la Ve République (1986–88, 1993–95, 1997–2002).`,
      keyPoints: [
        'Constitution du 28 septembre 1958 — adoptée par référendum, fondée par de Gaulle',
        'Abolition de la peine de mort — 1981 (loi Badinter)',
        'Droit à l\'IVG — légalisé en 1975 (loi Veil), inscrit dans la Constitution en 2024',
        'Mariage pour tous — légalisé en 2013',
        '8 présidents depuis 1959 — de Gaulle à Macron',
      ],
      quizIds: ['Q-HGC-005', 'Q-HGC-006', 'Q-HGC-007', 'Q-HGC-008'],
    },
    {
      id: 'les-04-03',
      slug: 'conflits-mondiaux-resistance',
      moduleSlug: 'histoire',
      title: 'Les conflits mondiaux et la Résistance',
      duration: 13,
      free: false,
      content: `# Les conflits mondiaux et la Résistance française

Les deux guerres mondiales ont profondément marqué la France et le monde. Elles ont conduit à la création d'institutions internationales pour garantir la paix.

## La Première Guerre mondiale (1914–1918)
Déclenchée par l'assassinat de l'archiduc François-Ferdinand, la Grande Guerre oppose les Alliés (France, Royaume-Uni, Russie) aux Empires centraux (Allemagne, Autriche-Hongrie).
En France : 1,4 million de soldats morts, 3 millions de blessés. La guerre des tranchées (front de l'Ouest) a traumatisé les générations. Le 11 novembre 1918 est l'armistice — aujourd'hui jour férié commémoratif.

## La Seconde Guerre mondiale (1939–1945)
Hitler envahit la Pologne le 1er septembre 1939. La France est envahie en mai–juin 1940.
- **Juin 1940** : Appel du 18 juin du Général de Gaulle depuis Londres
- **1940–1944** : Régime de Vichy (collaboration avec l'Allemagne nazie)
- **1940–1944** : La Résistance française combat l'occupant
- **6 juin 1944** : Débarquement allié en Normandie (D-Day)
- **25 août 1944** : Libération de Paris
- **8 mai 1945** : Capitulation de l'Allemagne (V-Day — jour férié)

## La Shoah
La Shoah est le génocide des Juifs d'Europe par les nazis. Environ 6 millions de Juifs ont été assassinés. En France, 75 000 Juifs ont été déportés vers les camps d'extermination, avec la complicité du régime de Vichy. La France a officiellement reconnu sa responsabilité (discours Chirac, 1995).

## La Résistance française
La Résistance regroupe toutes les personnes qui ont refusé la capitulation et l'occupation nazie :
- Jean Moulin — principal chef de la Résistance intérieure, arrêté et tué en 1943
- Les Forces françaises libres (de Gaulle à Londres)
- Les réseaux de renseignement et de sabotage

## L'après-guerre et la paix
Après la guerre, la France co-fonde les Nations Unies (1945) et participe à la construction européenne pour garantir la paix. Le 8 mai 1945 est un jour férié en France.`,
      keyPoints: [
        'Armistice 14-18 — 11 novembre 1918, jour férié commémoratif',
        'Appel du 18 juin 1940 — de Gaulle depuis Londres, refus de la capitulation',
        'Shoah — 6 millions de Juifs assassinés, 75 000 déportés depuis la France',
        'D-Day — 6 juin 1944, débarquement allié en Normandie',
        'Victoire — 8 mai 1945, capitulation de l\'Allemagne, jour férié',
      ],
      quizIds: ['Q-HGC-009', 'Q-HGC-010', 'Q-HGC-011', 'Q-HGC-012'],
    },
    {
      id: 'les-04-04',
      slug: 'geographie-france',
      moduleSlug: 'histoire',
      title: 'La géographie de la France',
      duration: 10,
      free: false,
      content: `# La géographie de la France

La France est un pays de taille moyenne en Europe, mais qui bénéficie d'une grande diversité géographique, tant dans sa métropole que dans ses territoires d'outre-mer.

## Le territoire métropolitain
La France métropolitaine est située en Europe occidentale. Elle couvre 551 500 km². On l'appelle l'"Hexagone" en raison de sa forme approximative. Elle est bordée par :
- Au nord : la Manche et la mer du Nord (Belgique, Luxembourg)
- À l'est : l'Allemagne, la Suisse, l'Italie
- Au sud : la mer Méditerranée, l'Espagne, Monaco
- À l'ouest : l'océan Atlantique

## Les fleuves et reliefs principaux
Cinq grands fleuves traversent la France :
- La **Seine** (Paris) : 776 km
- La **Loire** (le plus long) : 1 013 km
- Le **Rhône** : 522 km
- La **Garonne** : 647 km
- Le **Rhin** (frontière avec l'Allemagne) : 1 230 km
Les massifs montagneux : les Alpes (Mont Blanc : 4 808 m — plus haut sommet d'Europe occidentale), les Pyrénées, le Massif central, les Vosges.

## Les régions françaises
La France métropolitaine est divisée en 13 régions depuis 2016. Quelques grandes régions :
- Île-de-France (Paris) : 12 millions d'habitants
- Auvergne-Rhône-Alpes, Provence-Alpes-Côte d'Azur, Nouvelle-Aquitaine...

## L'outre-mer français
La France possède des territoires dans le monde entier :
- **Les DROM** (Départements et Régions d'Outre-Mer) : Guadeloupe, Martinique, Guyane, La Réunion, Mayotte
- **Les COM** (Collectivités d'Outre-Mer) : Polynésie française, Nouvelle-Calédonie, Saint-Pierre-et-Miquelon...
Ces territoires font partie intégrante de la République française.

## La démographie
La France compte environ **68 millions d'habitants** (2024). Paris est la ville la plus peuplée avec 2,1 millions d'habitants (12 millions en Île-de-France). La France est le pays européen avec le taux de fécondité le plus élevé.`,
      keyPoints: [
        'Hexagone — 551 500 km², situé en Europe occidentale, 6 frontières terrestres et maritimes',
        'Mont Blanc — 4 808 m, plus haut sommet d\'Europe occidentale, dans les Alpes',
        'Loire — plus long fleuve de France (1 013 km)',
        '13 régions — en métropole depuis 2016 + 5 DROM (Guadeloupe, Martinique, Guyane, Réunion, Mayotte)',
        '68 millions d\'habitants — France parmi les pays les plus peuplés d\'Europe',
      ],
      quizIds: ['Q-HGC-013', 'Q-HGC-014', 'Q-HGC-015'],
    },
    {
      id: 'les-04-05',
      slug: 'france-europe-monde',
      moduleSlug: 'histoire',
      title: 'La France en Europe et dans le monde',
      duration: 9,
      free: false,
      content: `# La France en Europe et dans le monde

La France est une puissance mondiale qui joue un rôle majeur dans les organisations internationales et défend des valeurs universelles.

## La France dans l'Union européenne
Membre fondateur de l'UE, la France est l'un des pays les plus influents. Elle a co-fondé le projet européen avec l'Allemagne (axe franco-allemand). La France fait partie de la zone euro depuis 2002. Le Parlement européen est à Strasbourg.

## La France, membre permanent du Conseil de sécurité de l'ONU
La France est l'un des 5 membres permanents du Conseil de sécurité des Nations Unies (avec les États-Unis, le Royaume-Uni, la Russie et la Chine). Elle dispose du droit de veto. L'UNESCO (Organisation des Nations Unies pour l'éducation, la science et la culture) a son siège à Paris.

## La Francophonie
L'Organisation internationale de la Francophonie (OIF) regroupe 88 États et gouvernements. Le français est la 5ème langue la plus parlée dans le monde. La France soutient activement la diversité culturelle et linguistique mondiale.

## La France et les droits de l'homme
La France se considère comme le "pays des droits de l'homme" depuis 1789. Elle accueille de nombreuses organisations internationales :
- La Cour européenne des droits de l'homme (Strasbourg)
- L'UNESCO (Paris)
- l'OCDE (Paris)
La France est signataire de nombreux traités internationaux sur les droits humains.

## L'économie française
La France est la 7ème puissance économique mondiale. Secteurs principaux :
- Les services (70% du PIB)
- L'industrie (20%) : aéronautique, automobile, pharmaceutique
- L'agriculture (3%) : premier pays agricole de l'UE
Le tourisme est un secteur majeur : la France est le pays le plus visité au monde (90 millions de touristes par an).`,
      keyPoints: [
        'Membre fondateur UE — zone euro depuis 2002, Parlement européen à Strasbourg',
        'ONU — membre permanent du Conseil de sécurité, droit de veto',
        'Francophonie — 88 États membres, 5ème langue mondiale',
        'Tourisme — pays le plus visité au monde (90 millions de touristes/an)',
        '7ème économie mondiale — services, aéronautique, agriculture (1er pays agricole UE)',
      ],
      quizIds: ['Q-HGC-016', 'Q-HGC-017', 'Q-HGC-018'],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// MODULE 5 — Vivre dans la société française
// ─────────────────────────────────────────────────────────────────────────────
const mod05: Module = {
  id: 'mod-05',
  slug: 'vie-en-france',
  title: 'Vivre dans la société française',
  subtitle: 'Santé, emploi, école, famille, démarches',
  num: '05',
  photo: '/images/modules/vie-en-france.jpg',
  photoAlt: 'Vie quotidienne en France',
  questionCount: 27,
  freeAccess: false,
  lessons: [
    {
      id: 'les-05-01',
      slug: 'sante-droits-sociaux',
      moduleSlug: 'vie-en-france',
      title: 'La santé et les droits sociaux',
      duration: 11,
      free: false,
      content: `# La santé et les droits sociaux en France

La France possède l'un des systèmes de protection sociale les plus développés au monde. Ce système garantit à tous les résidents l'accès aux soins et à une protection contre les risques de la vie.

## La Sécurité sociale
Créée en 1945, la Sécurité sociale protège tous les assurés sociaux contre :
- La maladie et les accidents (Assurance Maladie)
- La vieillesse (Assurance Retraite)
- Les accidents du travail et maladies professionnelles
- La maternité, paternité et famille
Elle est financée par les cotisations sociales des employeurs et des salariés.

## L'Assurance Maladie — la CPAM
La Caisse Primaire d'Assurance Maladie (CPAM) rembourse tout ou partie des frais médicaux. En France :
- Les consultations chez le médecin sont remboursées à 70%
- Les médicaments sont remboursés selon leur importance thérapeutique
- La Complémentaire Santé Solidaire (CSS) aide les personnes à faibles revenus

## Le médecin traitant et le parcours de soins
Chaque personne doit choisir un médecin traitant (médecin généraliste de référence). Pour être bien remboursé, il faut passer par ce médecin avant de consulter un spécialiste. C'est le parcours de soins coordonnés.

## Les allocations familiales
La Caisse d'Allocations Familiales (CAF) verse des aides aux familles :
- Les allocations familiales (à partir de 2 enfants)
- L'aide personnalisée au logement (APL)
- La prestation d'accueil du jeune enfant (PAJE)
- Le RSA (Revenu de Solidarité Active) pour les personnes sans ressources

## Les retraites
Le système de retraite français est fondé sur la solidarité entre générations (répartition). Les actifs d'aujourd'hui financent les retraites d'aujourd'hui. L'âge légal de départ à la retraite est de **64 ans** (depuis la réforme de 2023).`,
      keyPoints: [
        'Sécurité sociale — créée en 1945, couvre maladie, retraite, accidents du travail, famille',
        'CPAM — rembourse 70% des consultations médicales',
        'Médecin traitant — à choisir pour le parcours de soins coordonnés',
        'CAF — verse allocations familiales, APL, RSA aux familles et personnes précaires',
        'Retraite — âge légal à 64 ans depuis la réforme 2023, système par répartition',
      ],
      quizIds: ['Q-VF-001', 'Q-VF-002', 'Q-VF-003'],
    },
    {
      id: 'les-05-02',
      slug: 'education-travail',
      moduleSlug: 'vie-en-france',
      title: 'L\'éducation et le travail',
      duration: 12,
      free: false,
      content: `# L'éducation et le travail en France

L'école et le travail sont deux piliers de l'intégration dans la société française. Comprendre ces systèmes est essentiel pour s'y épanouir.

## Le système éducatif français
L'école est obligatoire de 3 à 16 ans pour tous les enfants résidant en France, quelle que soit leur nationalité. Le système comprend :
- **Maternelle** (3–6 ans) : école maternelle
- **Élémentaire** (6–11 ans) : CP au CM2
- **Collège** (11–15 ans) : 6ème à 3ème, brevet des collèges
- **Lycée** (15–18 ans) : baccalauréat
- **Enseignement supérieur** : universités, grandes écoles

L'école publique est gratuite et laïque. Les frais de cantine et d'activités périscolaires peuvent être aidés.

## Le baccalauréat
Le "bac" est le diplôme national qui sanctionne la fin des études secondaires. Il permet l'accès à l'enseignement supérieur. Il existe plusieurs séries : générale, technologique, professionnelle.

## Le droit du travail
En France, le droit du travail protège les salariés :
- Le **SMIC** (Salaire Minimum Interprofessionnel de Croissance) fixe le salaire minimum légal
- La durée légale du travail est de **35 heures par semaine**
- Les congés payés : **5 semaines minimum** par an
- Le contrat de travail peut être en CDI (durée indéterminée) ou CDD (durée déterminée)
- En cas de licenciement abusif, le salarié peut saisir le Conseil des prud'hommes

## Pôle Emploi (France Travail)
Pôle Emploi (rebaptisé "France Travail" en 2024) accompagne les demandeurs d'emploi. Les chômeurs peuvent bénéficier de l'assurance chômage (ARE) s'ils ont suffisamment cotisé.

## L'apprentissage et la formation professionnelle
La France dispose d'un large système d'apprentissage permettant d'acquérir un diplôme tout en travaillant. Le Compte Personnel de Formation (CPF) permet à chaque actif de financer des formations.`,
      keyPoints: [
        'École obligatoire — de 3 à 16 ans pour tous les enfants en France',
        'École publique — gratuite et laïque, financée par l\'État',
        'SMIC — salaire minimum légal, réévalué chaque année',
        '35 heures — durée légale du travail hebdomadaire + 5 semaines de congés payés',
        'France Travail — accompagnement des demandeurs d\'emploi, assurance chômage (ARE)',
      ],
      quizIds: ['Q-VF-004', 'Q-VF-005', 'Q-VF-006', 'Q-VF-007'],
    },
    {
      id: 'les-05-03',
      slug: 'logement-demarches',
      moduleSlug: 'vie-en-france',
      title: 'Le logement et les démarches administratives',
      duration: 10,
      free: false,
      content: `# Le logement et les démarches administratives en France

Se loger et accomplir ses démarches administratives sont des étapes essentielles pour s'installer en France. Des aides et services existent pour faciliter ces démarches.

## Le logement en France
Les principales formes de logement sont :
- **La location** : locataire verse un loyer mensuel, protégé par la loi (loi du 6 juillet 1989)
- **La propriété** : achat d'un bien immobilier, souvent financé par un prêt bancaire
- **Le logement social (HLM)** : logements à loyer modéré gérés par des organismes publics

## L'aide au logement (APL)
La CAF verse l'Aide Personnalisée au Logement (APL) aux personnes à revenus modestes. Pour en bénéficier : le logement doit être la résidence principale et remplir certaines conditions de superficie.

## La domiciliation
Pour effectuer ses démarches administratives, il faut avoir une adresse officielle (domicile). Des centres d'accueil peuvent fournir une domiciliation aux personnes sans domicile fixe (SDF).

## Les démarches à la préfecture
Les étrangers résidant en France doivent effectuer plusieurs démarches en préfecture :
- Demande ou renouvellement de titre de séjour
- Déclaration de changement d'adresse
- Demande de naturalisation

## La carte nationale d'identité et le passeport
Les citoyens français peuvent obtenir une carte nationale d'identité (CNI) et un passeport auprès de leur mairie. Ces documents permettent de circuler en Europe (CNI suffit pour la zone Schengen) et dans le monde (passeport).

## Les services publics en ligne
Le site **service-public.fr** regroupe toutes les informations et formulaires administratifs. De nombreuses démarches peuvent être effectuées en ligne : impôts, demande d'allocations, déclarations diverses.`,
      keyPoints: [
        'APL — aide au logement versée par la CAF, pour les résidents à revenus modestes',
        'HLM — logements sociaux à loyer modéré, gérés par des organismes publics',
        'Préfecture — lieu pour les demandes de titre de séjour et changements d\'adresse',
        'service-public.fr — site officiel pour toutes les démarches administratives',
        'CNI — suffisante pour voyager dans la zone Schengen (26 pays européens)',
      ],
      quizIds: ['Q-VF-008', 'Q-VF-009', 'Q-VF-010'],
    },
    {
      id: 'les-05-04',
      slug: 'famille-societe-francaise',
      moduleSlug: 'vie-en-france',
      title: 'La famille et la société française',
      duration: 9,
      free: false,
      content: `# La famille et la société française

La France est une société diverse, où différentes formes familiales coexistent, protégées par la loi. La solidarité et le vivre ensemble sont des valeurs centrales.

## Les formes de vie en couple
La loi française reconnaît plusieurs formes d'union :
- **Le mariage** : contrat officiel devant l'officier d'état civil (mairie). Il est ouvert aux couples hétérosexuels et homosexuels depuis 2013 (mariage pour tous).
- **Le PACS** (Pacte Civil de Solidarité) : contrat entre deux personnes, créé en 1999. Plus flexible que le mariage.
- **Le concubinage** (union libre) : vie commune sans contrat officiel.

## Les droits des enfants
En France, l'intérêt supérieur de l'enfant est le principe fondamental :
- Tout enfant a droit à l'éducation, à la santé et à la protection
- Les châtiments corporels sont interdits
- En cas de séparation des parents, l'autorité parentale est généralement partagée
- L'enfant né en France de parents étrangers peut acquérir la nationalité française à 18 ans

## L'immigration et la diversité
La France est historiquement un pays d'immigration. Des vagues successives (Italiens, Polonais, Espagnols, Portugais, Maghrébins, Africains, Asiatiques...) ont contribué à sa richesse culturelle. La loi interdit toute discrimination liée à l'origine.

## La vie associative
La France compte plus de 1,5 million d'associations. La loi du 1er juillet 1901 garantit la liberté d'association. Les associations jouent un rôle majeur dans la solidarité, le sport, la culture et l'intégration.

## Les médias en France
La liberté de la presse est garantie depuis 1881. Les médias publics (France Télévisions, Radio France) sont financés par une contribution publique. Le CSA (Conseil supérieur de l'audiovisuel), remplacé par l'ARCOM, régule les contenus audiovisuels.`,
      keyPoints: [
        'Mariage pour tous — légalisé en 2013, ouvert aux couples de même sexe',
        'PACS — Pacte Civil de Solidarité, créé en 1999, alternative au mariage',
        'Châtiments corporels — interdits en France pour les enfants',
        'Associations — plus de 1,5 million, loi 1901 sur la liberté d\'association',
        'Liberté de la presse — garantie depuis 1881, régulée par l\'ARCOM',
      ],
      quizIds: ['Q-VF-011', 'Q-VF-012', 'Q-VF-013'],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Export
// ─────────────────────────────────────────────────────────────────────────────
export const modules: Module[] = [mod01, mod02, mod03, mod04, mod05];

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getLessonBySlug(slug: string): { lesson: Lesson; module: Module } | undefined {
  for (const mod of modules) {
    const lesson = mod.lessons.find((l) => l.slug === slug);
    if (lesson) return { lesson, module: mod };
  }
  return undefined;
}
