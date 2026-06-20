import type { LangModule } from '../types';

export const b1VieSociete: LangModule = {
  id: 'b1-mod-03',
  slug: 'b1-vie-societe',
  level: 'B1',
  title: 'Vie en société',
  subtitle: 'Éducation, famille, santé et droits sociaux',
  description: 'Comprenez le fonctionnement des grands systèmes sociaux français — éducation, famille, santé — et participez à la vie de la cité.',
  type: 'thematique',
  emoji: '🏘️',
  free: false,
  lessons: [
    {
      id: 'b1-vs-01',
      slug: 'b1-systeme-education',
      moduleSlug: 'b1-vie-societe',
      level: 'B1',
      title: 'Le système éducatif français',
      description: 'Comprenez l\'organisation de l\'école française, de la maternelle au supérieur, et le rôle de l\'éducation dans la société.',
      duration: 35,
      free: false,
      dialogue: `## Texte : L'école en France — principes et organisation

Le système éducatif français repose sur trois principes fondamentaux : **la gratuité, la laïcité et l'obligation scolaire**. L'école est gratuite dans le secteur public, laïque (sans instruction religieuse) et obligatoire pour tous les enfants de 3 à 16 ans depuis 2019.

**Organisation par cycles :**
- **Maternelle** (3-6 ans) : petite, moyenne et grande section
- **Primaire** (6-11 ans) : CP, CE1, CE2, CM1, CM2
- **Collège** (11-15 ans) : 6ème, 5ème, 4ème, 3ème — sanctionné par le **Brevet**
- **Lycée** (15-18 ans) : 2nde, 1ère, Terminale — sanctionné par le **Baccalauréat**
- **Enseignement supérieur** : universités, IUT, BTS, Classes préparatoires, Grandes Écoles

**L'égalité des chances** est un idéal constant du système. La carte scolaire attribue les élèves à des établissements selon leur domicile — ce qui est parfois critiqué car cela reproduit les inégalités géographiques.

**Pour les élèves allophones** (dont le français n'est pas la langue maternelle), il existe des classes d'accueil (UPE2A) qui permettent d'apprendre le français intensivement avant l'intégration en classe ordinaire.

**L'ascenseur social** : l'éducation est traditionnellement vue comme le vecteur principal de la mobilité sociale en France. Si cet idéal reste puissant, sa réalité est nuancée : des études montrent que l'origine sociale reste un facteur déterminant du parcours scolaire.`,

      linguisticPoint: `## Point linguistique : Les propositions relatives — qui, que, dont, où, lequel

### Les pronoms relatifs de base
| Pronom | Fonction | Exemple |
|---|---|---|
| **qui** | sujet | L\'école **qui** est gratuite... |
| **que/qu\'** | COD | L\'école **que** j\'aime... |
| **dont** | remplace "de + nom" | Le cours **dont** j\'ai besoin... |
| **où** | lieu ou temps | Le lycée **où** j\'étudiais... |

### "Dont" — usages multiples
- Avoir besoin **de** → "le livre **dont** j\'ai besoin"
- Parler **de** → "le sujet **dont** on parle"
- Être fier **de** → "les résultats **dont** je suis fier"
- Se souvenir **de** → "les années **dont** je me souviens"

### "Lequel / laquelle / lesquels / lesquelles" (après préposition)
- "La ville dans **laquelle** j\'habite" (= où j\'habite)
- "Le professeur avec **lequel** je travaille"
- "Les raisons pour **lesquelles** je suis venu"`,

      keyPoints: [
        '3 principes école française : gratuité / laïcité / obligation (3-16 ans)',
        'Diplômes : Brevet (fin collège) / Baccalauréat (fin lycée)',
        '"Dont" = remplace "de + nom" : avoir besoin DE → dont j\'ai besoin',
        '"Où" = pronom relatif de lieu ET de temps',
        'UPE2A = classes d\'accueil pour élèves allophones (français langue étrangère)',
      ],

      exercises: [
        {
          id: 'b1-vs-01-ex01',
          type: 'qcm',
          question: 'Complétez avec le bon pronom relatif : "Le professeur ___ j\'admire enseigne le français."',
          options: ['qui', 'que', 'dont', 'où'],
          correctIndex: 1,
          explanation: '"Le professeur QUE j\'admire." "Que" = pronom relatif COD. "J\'admire LE professeur" (COD) → le professeur QUE j\'admire. "Que" remplace le COD.',
        },
        {
          id: 'b1-vs-01-ex02',
          type: 'qcm',
          question: 'L\'obligation scolaire en France s\'applique de quel âge à quel âge ?',
          options: ['6 à 18 ans', '3 à 16 ans', '6 à 16 ans', '5 à 18 ans'],
          correctIndex: 1,
          explanation: '"L\'école est obligatoire pour tous les enfants de 3 à 16 ans depuis 2019." Avant 2019, l\'obligation commençait à 6 ans. La maternelle (3-6 ans) est désormais obligatoire.',
        },
        {
          id: 'b1-vs-01-ex03',
          type: 'qcm',
          question: 'Complétez : "Le lycée ___ j\'ai étudié était à Paris."',
          options: ['qui', 'que', 'dont', 'où'],
          correctIndex: 3,
          explanation: '"Le lycée OÙ j\'ai étudié." "Où" = pronom relatif de LIEU. "J\'ai étudié DANS le lycée" → le lycée OÙ j\'ai étudié. "Où" remplace les expressions de lieu avec préposition.',
        },
        {
          id: 'b1-vs-01-ex04',
          type: 'qcm',
          question: 'Qu\'est-ce que "la carte scolaire" ?',
          options: [
            'La carte d\'identité des élèves',
            'Un système qui attribue les élèves à des établissements selon leur lieu de résidence',
            'Une carte géographique des écoles de France',
            'Un bulletin scolaire',
          ],
          correctIndex: 1,
          explanation: 'La carte scolaire = un système qui attribue chaque enfant à un établissement scolaire (école, collège) en fonction de son adresse. Critiquée car elle peut reproduire les inégalités territoriales (quartiers riches → bonnes écoles).',
        },
        {
          id: 'b1-vs-01-ex05',
          type: 'qcm',
          question: 'Complétez avec "dont" : "C\'est le cours ___ j\'ai le plus besoin."',
          options: ['qui', 'que', 'dont', 'où'],
          correctIndex: 2,
          explanation: '"Le cours DONT j\'ai le plus besoin." "Avoir besoin DE + nom" → "dont". "J\'ai besoin DE ce cours" → "le cours DONT j\'ai besoin." "Dont" remplace les compléments avec "de".',
        },
        {
          id: 'b1-vs-01-ex06',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un élève "allophone" ?',
          options: [
            'Un élève qui parle plusieurs langues',
            'Un élève dont la langue maternelle n\'est pas le français',
            'Un élève d\'origine étrangère',
            'Un élève qui a des difficultés scolaires',
          ],
          correctIndex: 1,
          explanation: '"Allophone" = dont la langue maternelle n\'est pas la langue d\'enseignement (ici le français). Un élève arrivant du Maroc ou de Syrie sera allophone en France. Les classes UPE2A sont spécialement conçues pour ces élèves.',
        },
        {
          id: 'b1-vs-01-ex07',
          type: 'qcm',
          question: 'Complétez : "La matière ___ il est passionné, c\'est les maths."',
          options: ['qui', 'que', 'pour laquelle', 'dont'],
          correctIndex: 3,
          explanation: '"La matière DONT il est passionné." "Être passionné DE + nom" → "dont". Ou on peut dire "la matière pour laquelle il est passionné" mais "dont" est plus courant. "Dont" remplace "de + antécédent".',
        },
        {
          id: 'b1-vs-01-ex08',
          type: 'qcm',
          question: 'Quel diplôme sanctionne la fin du lycée en France ?',
          options: ['Le Brevet', 'Le Baccalauréat', 'La Licence', 'Le CAP'],
          correctIndex: 1,
          explanation: 'Le Baccalauréat (le "Bac") = diplôme obtenu en fin de Terminale (dernière année du lycée). Il est à la fois un diplôme de fin d\'études secondaires ET le premier diplôme de l\'enseignement supérieur. Le Brevet = fin de collège (3ème).',
        },
        {
          id: 'b1-vs-01-ex09',
          type: 'qcm',
          question: 'Complétez : "L\'école ___ mes enfants fréquentent se trouve à 500m."',
          options: ['qui', 'que', 'dont', 'où'],
          correctIndex: 1,
          explanation: '"L\'école QUE mes enfants fréquentent." "Que" = COD. "Mes enfants fréquentent L\'ÉCOLE" (COD) → "l\'école QUE mes enfants fréquentent." "Fréquenter" = aller régulièrement à.',
        },
        {
          id: 'b1-vs-01-ex10',
          type: 'qcm',
          question: 'Qu\'est-ce que "l\'ascenseur social" ?',
          options: [
            'Un ascenseur dans les écoles',
            'La capacité du système éducatif à permettre une mobilité sociale ascendante',
            'Un programme d\'aide aux étudiants défavorisés',
            'Un type de contrat de travail',
          ],
          correctIndex: 1,
          explanation: '"L\'ascenseur social" = social mobility through education. L\'idée que l\'éducation permet à des enfants de milieux défavorisés d\'accéder à de meilleures situations sociales et économiques. En France, cet idéal est fort mais sa réalité est nuancée (l\'origine sociale reste déterminante).',
        },
        {
          id: 'b1-vs-01-ex11',
          type: 'qcm',
          question: '"Lequel / laquelle" s\'utilise après une préposition. Complétez : "La ville dans ___ j\'habite s\'appelle Lille."',
          options: ['que', 'qui', 'laquelle', 'dont'],
          correctIndex: 2,
          explanation: '"La ville dans LAQUELLE j\'habite." Après une préposition (dans, pour, avec, par...), on utilise "lequel/laquelle/lesquels/lesquelles". "Dans la ville" → "dans LAQUELLE j\'habite." Alternatif : "la ville OÙ j\'habite."',
        },
        {
          id: 'b1-vs-01-ex12',
          type: 'qcm',
          question: 'Que signifie "reproduire les inégalités" dans le contexte de la carte scolaire ?',
          options: [
            'Créer de nouvelles inégalités',
            'Perpétuer des inégalités existantes — les enfants riches restent dans de bonnes écoles',
            'Réduire les inégalités',
            'Mesurer les inégalités',
          ],
          correctIndex: 1,
          explanation: '"Reproduire les inégalités" = to perpetuate inequalities. La carte scolaire peut créer des inégalités car les familles aisées vivent souvent dans des quartiers avec de bonnes écoles, tandis que les familles défavorisées restent dans des secteurs avec moins de ressources scolaires.',
        },
        {
          id: 'b1-vs-01-ex13',
          type: 'qcm',
          question: 'Complétez : "Ce sont les résultats ___ je suis le plus fier."',
          options: ['qui', 'que', 'dont', 'où'],
          correctIndex: 2,
          explanation: '"Les résultats DONT je suis le plus fier." "Être fier DE + nom" → "dont". "Je suis fier DE ces résultats" → "les résultats DONT je suis fier."',
        },
        {
          id: 'b1-vs-01-ex14',
          type: 'qcm',
          question: 'En quelle année la maternelle est-elle devenue obligatoire en France ?',
          options: ['1905', '1959', '1989', '2019'],
          correctIndex: 3,
          explanation: 'La loi du 26 juillet 2019 a abaissé l\'âge de scolarité obligatoire de 6 à 3 ans. La maternelle (petite, moyenne et grande section) est donc obligatoire depuis 2019, bien qu\'elle existait largement avant.',
        },
        {
          id: 'b1-vs-01-ex15',
          type: 'qcm',
          question: 'Pronom relatif : "C\'est l\'époque ___ j\'apprenais le plus." (temps)',
          options: ['que', 'qui', 'dont', 'où'],
          correctIndex: 3,
          explanation: '"C\'est l\'époque OÙ j\'apprenais le plus." "Où" = pronom relatif de TEMPS (aussi bien que de lieu). "À cette époque" → "l\'époque OÙ." "Où" remplace les expressions de lieu ET de temps.',
        },
        {
          id: 'b1-vs-01-ex16',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un "IUT" dans l\'enseignement supérieur ?',
          options: [
            'Institut Universitaire de Technologie — 2 ans après le bac, diplôme professionnel',
            'Institut Universel de Tourisme',
            'Inspection Universitaire de Travail',
            'Institut d\'Utilité Technique',
          ],
          correctIndex: 0,
          explanation: 'IUT = Institut Universitaire de Technologie. Cursus de 2 ans (BUT = Bachelor Universitaire de Technologie depuis 2021, en 3 ans) après le bac. Formation professionnalisante dans des domaines variés (informatique, commerce, biologie...).',
        },
        {
          id: 'b1-vs-01-ex17',
          type: 'qcm',
          question: 'Complétez : "C\'est l\'homme ___ a fondé cette association."',
          options: ['qui', 'que', 'dont', 'où'],
          correctIndex: 0,
          explanation: '"L\'homme QUI a fondé." "Qui" = sujet du verbe relatif. "L\'homme A fondé l\'association" → "l\'homme QUI a fondé." "Qui" est le sujet du verbe "a fondé".',
        },
        {
          id: 'b1-vs-01-ex18',
          type: 'qcm',
          question: 'Que signifie "un facteur déterminant" dans "l\'origine sociale reste un facteur déterminant" ?',
          options: [
            'Un facteur optionnel',
            'Un élément qui joue un rôle crucial dans l\'issue / le résultat',
            'Un facteur qui diminue',
            'Un facteur aléatoire',
          ],
          correctIndex: 1,
          explanation: '"Déterminant" = decisive / crucial / defining. "Un facteur déterminant" = un élément qui influence fortement le résultat final. "L\'origine sociale reste déterminante" = l\'origine sociale a toujours un impact fort sur le parcours scolaire.',
        },
        {
          id: 'b1-vs-01-ex19',
          type: 'qcm',
          question: 'Pronom relatif avec préposition : "Le programme pour ___ je me suis inscrit commence en septembre."',
          options: ['que', 'lequel', 'qui', 'dont'],
          correctIndex: 1,
          explanation: '"Le programme pour LEQUEL je me suis inscrit." Après une préposition (pour, avec, dans, par...) + nom non-humain → "lequel/laquelle". "Je me suis inscrit POUR CE programme" → "le programme pour LEQUEL je me suis inscrit."',
        },
        {
          id: 'b1-vs-01-ex20',
          type: 'qcm',
          question: 'UPE2A signifie :',
          options: [
            'Union des Professeurs de l\'Enseignement Adapté',
            'Unité Pédagogique pour Élèves Allophones Arrivants',
            'Union Pédagogique pour l\'Enseignement des Adultes Arrivants',
            'Unité de Placement pour Élèves Adolescents Allophones',
          ],
          correctIndex: 1,
          explanation: 'UPE2A = Unité Pédagogique pour Élèves Allophones Arrivants. Ce sont des classes spéciales dans les écoles françaises qui accueillent les enfants primo-arrivants ne maîtrisant pas encore le français. Ils y apprennent le français intensivement avant d\'intégrer une classe ordinaire.',
        },
      ],
    },

    {
      id: 'b1-vs-02',
      slug: 'b1-systeme-sante',
      moduleSlug: 'b1-vie-societe',
      level: 'B1',
      title: 'Le système de santé français',
      description: 'Comprenez les particularités du système de santé français, ses atouts, ses défis et comment y naviguer.',
      duration: 35,
      free: false,
      dialogue: `## Texte : Le système de santé français — un modèle à bout de souffle ?

La France dispose d'un système de santé considéré comme l'un des meilleurs au monde par l'OMS. Basé sur le principe de solidarité, il garantit l'accès aux soins à tous les résidents, quel que soit leur niveau de revenu.

**Le financement :**
Le système est financé principalement par les cotisations sociales (prélevées sur les salaires), complétées par des impôts et des taxes. La Sécurité sociale rembourse entre 70% et 100% des soins selon leur nature. La complémentaire santé (mutuelle) couvre généralement le reste.

**Les déserts médicaux :**
Malgré la qualité générale du système, de nombreux territoires souffrent d'un manque de médecins — on parle de "déserts médicaux". Plus de 6 millions de Français n'ont pas de médecin traitant. La fracture géographique est réelle : les zones rurales et certaines banlieues sont particulièrement touchées.

**Les difficultés actuelles :**
- **Manque de personnel** : les hôpitaux font face à des pénuries de médecins et d'infirmiers.
- **Vieillissement** de la population : davantage de soins sont nécessaires pour une population plus âgée.
- **Déremboursements** : certains actes médicaux sont de moins en moins remboursés, transférant la charge sur les mutuelles ou les patients.

**Pour les étrangers :**
Dès qu'ils ont un titre de séjour, les étrangers sont affiliés à la Sécurité sociale. L'AME (Aide Médicale d'État) couvre les étrangers en situation irrégulière pour les soins urgents.`,

      linguisticPoint: `## Point linguistique : Le passif — formation et emplois avancés

### Rappel : formation du passif
**Actif** : La sécurité sociale REMBOURSE les soins.
**Passif** : Les soins SONT REMBOURSÉS par la sécurité sociale.

### Le passif à tous les temps
| Temps | Formation | Exemple |
|---|---|---|
| Présent | être (présent) + PP | Les soins **sont remboursés** |
| Imparfait | être (imparfait) + PP | Les soins **étaient remboursés** |
| Passé composé | être (PC) + PP | Les soins **ont été remboursés** |
| Futur | être (futur) + PP | Les soins **seront remboursés** |
| Conditionnel | être (cond.) + PP | Les soins **seraient remboursés** |
| Subjonctif | être (subj.) + PP | Bien que les soins **soient remboursés** |

### Quand utiliser le passif ?
1. Quand l\'agent est inconnu : "Le document a été perdu"
2. Quand l\'agent est évident : "La loi a été votée" (par l\'Assemblée)
3. Pour mettre en valeur le patient (l\'objet) : "Les réfugiés sont accueillis"
4. Style formel / journalistique : souvent préféré en français écrit soutenu`,

      keyPoints: [
        'Passif = être (conjugué) + participe passé accordé en genre et nombre',
        'Passif à tous les temps : sont remboursés / étaient / ont été / seront',
        'Agent avec "par" : "remboursés PAR la Sécu" / "prélevées SUR les salaires"',
        'Déserts médicaux = zones sans médecins (rural + certaines banlieues)',
        'AME = Aide Médicale d\'État pour étrangers en situation irrégulière',
      ],

      exercises: [
        {
          id: 'b1-vs-02-ex01',
          type: 'qcm',
          question: 'Transformez à la voix passive : "La Sécurité sociale rembourse 70% des soins."',
          options: [
            '70% des soins est remboursé par la Sécurité sociale',
            '70% des soins sont remboursés par la Sécurité sociale',
            '70% des soins sont remboursé par la Sécurité sociale',
            'La Sécurité sociale est remboursée par 70% des soins',
          ],
          correctIndex: 1,
          explanation: '"70% des soins SONT REMBOURSÉS par la Sécurité sociale." Passif présent : être (présent) + PP accordé. "Soins" = masc. pl. → "remboursés" (masc. pl.). "Par" introduit l\'agent.',
        },
        {
          id: 'b1-vs-02-ex02',
          type: 'qcm',
          question: 'Qu\'est-ce que l\'"AME" ?',
          options: [
            'Aide aux Médecins en Exercice',
            'Aide Médicale d\'État — pour les étrangers en situation irrégulière',
            'Assurance Mutuelle Étendue',
            'Accord Médical Européen',
          ],
          correctIndex: 1,
          explanation: 'AME = Aide Médicale d\'État. Dispositif qui permet aux étrangers en situation irrégulière résidant en France depuis plus de 3 mois d\'accéder aux soins urgents. C\'est un filet de sécurité humanitaire.',
        },
        {
          id: 'b1-vs-02-ex03',
          type: 'qcm',
          question: 'Passif à l\'imparfait : "On finançait le système par les cotisations." →',
          options: [
            'Le système était financé par les cotisations',
            'Le système a été financé par les cotisations',
            'Le système sera financé par les cotisations',
            'Le système est financé par les cotisations',
          ],
          correctIndex: 0,
          explanation: '"Le système ÉTAIT FINANCÉ par les cotisations." Passif à l\'imparfait : être (imparfait = "était") + PP ("financé"). "Système" = masc. sing. → "financé" (pas d\'accord supplémentaire).',
        },
        {
          id: 'b1-vs-02-ex04',
          type: 'qcm',
          question: 'Que signifie "désert médical" ?',
          options: [
            'Un hôpital sans patients',
            'Une zone géographique manquant de médecins (insuffisance de l\'offre médicale)',
            'Un désert où travaillent des médecins',
            'Un quartier sans pharmacie',
          ],
          correctIndex: 1,
          explanation: '"Désert médical" = medical desert. Zone où la densité de médecins est insuffisante pour répondre aux besoins de la population. En France, plus de 6 millions de personnes n\'ont pas de médecin traitant, surtout en zone rurale et en banlieue.',
        },
        {
          id: 'b1-vs-02-ex05',
          type: 'qcm',
          question: 'Passif au futur : "On informera tous les patients des changements." →',
          options: [
            'Tous les patients ont été informés des changements',
            'Tous les patients étaient informés des changements',
            'Tous les patients seront informés des changements',
            'Tous les patients sont informés des changements',
          ],
          correctIndex: 2,
          explanation: '"Tous les patients SERONT INFORMÉS des changements." Passif au futur : être (futur = "seront") + PP ("informés"). "Patients" = masc. pl. → "informés" (masc. pl.).',
        },
        {
          id: 'b1-vs-02-ex06',
          type: 'qcm',
          question: 'Qu\'est-ce que la "complémentaire santé" (mutuelle) ?',
          options: [
            'Un deuxième médecin traitant',
            'Une assurance privée qui complète le remboursement de la Sécurité sociale',
            'Un programme public pour les pauvres',
            'Un médecin spécialiste',
          ],
          correctIndex: 1,
          explanation: 'La complémentaire santé (mutuelle) = assurance privée (ou de groupe) qui rembourse ce que la Sécurité sociale ne couvre pas (le "ticket modérateur"). Exemple : si la Sécu rembourse 70%, la mutuelle peut couvrir les 30% restants.',
        },
        {
          id: 'b1-vs-02-ex07',
          type: 'qcm',
          question: 'Passif au passé composé : "Le gouvernement a adopté la réforme." →',
          options: [
            'La réforme était adoptée par le gouvernement',
            'La réforme a été adoptée par le gouvernement',
            'La réforme sera adoptée par le gouvernement',
            'La réforme est adoptée par le gouvernement',
          ],
          correctIndex: 1,
          explanation: '"La réforme A ÉTÉ ADOPTÉE par le gouvernement." Passif au passé composé : avoir (passé composé de "être") + PP. "Réforme" = fém. sing. → "adoptée" (accord en féminin singulier).',
        },
        {
          id: 'b1-vs-02-ex08',
          type: 'qcm',
          question: '"Déremboursement" d\'actes médicaux signifie :',
          options: [
            'L\'augmentation du remboursement',
            'La décision de ne plus rembourser (ou rembourser moins) certains actes',
            'Un double remboursement',
            'Le remboursement différé',
          ],
          correctIndex: 1,
          explanation: '"Déremboursement" = réduction ou suppression du remboursement d\'un soin par la Sécurité sociale. Par exemple, certains médicaments ont été déremboursés pour réduire les dépenses de l\'Assurance maladie. Ce transfert de charge revient aux patients ou aux mutuelles.',
        },
        {
          id: 'b1-vs-02-ex09',
          type: 'qcm',
          question: 'Passif au conditionnel : "Si la réforme passait, le système serait amélioré." Le conditionnel passif est formé avec :',
          options: [
            'être au conditionnel + PP',
            'avoir au conditionnel + PP',
            'être au subjonctif + PP',
            'avoir au futur + PP',
          ],
          correctIndex: 0,
          explanation: '"Le système SERAIT AMÉLIORÉ." Passif au conditionnel : être (conditionnel = "serait") + PP ("amélioré"). Règle générale : passif = ÊTRE (temps voulu) + PP.',
        },
        {
          id: 'b1-vs-02-ex10',
          type: 'qcm',
          question: 'Quand un étranger est-il affilié à la Sécurité sociale ?',
          options: [
            'Uniquement après 5 ans de résidence',
            'Dès qu\'il a un titre de séjour',
            'Uniquement s\'il travaille',
            'Uniquement s\'il a la nationalité française',
          ],
          correctIndex: 1,
          explanation: 'Le texte dit : "Dès qu\'ils ont un titre de séjour, les étrangers sont affiliés à la Sécurité sociale." L\'affiliation est automatique avec un titre de séjour valide, qu\'on travaille ou non.',
        },
        {
          id: 'b1-vs-02-ex11',
          type: 'qcm',
          question: 'Passif subjonctif : "Il faut que les patients ___ informés." (être + informé)',
          options: [
            'sont',
            'soient',
            'seront',
            'seraient',
          ],
          correctIndex: 1,
          explanation: '"Il faut que les patients SOIENT informés." Passif au subjonctif : être (subjonctif = "soient") + PP ("informés"). "Il faut que" + subjonctif → "soient" (subjonctif d\'"être").',
        },
        {
          id: 'b1-vs-02-ex12',
          type: 'qcm',
          question: 'Que signifie "à bout de souffle" dans le titre "un modèle à bout de souffle" ?',
          options: [
            'Un modèle qui respire mal',
            'Un modèle en bout de course, épuisé, qui a du mal à fonctionner',
            'Un modèle innovant',
            'Un modèle populaire',
          ],
          correctIndex: 1,
          explanation: '"À bout de souffle" = at the end of one\'s rope / exhausted. Littéralement, "n\'avoir plus de souffle" = ne plus pouvoir respirer. Au sens figuré : à bout de ressources, épuisé, sur le point de s\'effondrer. Critique du système de santé sous pression.',
        },
        {
          id: 'b1-vs-02-ex13',
          type: 'qcm',
          question: 'Transformez à la forme active : "Des inégalités sont reproduites par le système."',
          options: [
            'Le système reproduit des inégalités',
            'Des inégalités reproduisent le système',
            'Le système a reproduit des inégalités',
            'Le système sera reproduit par des inégalités',
          ],
          correctIndex: 0,
          explanation: '"Le système REPRODUIT des inégalités." Actif : sujet (le système) + verbe (reproduit) + objet (des inégalités). L\'agent du passif ("par le système") devient le sujet de la phrase active.',
        },
        {
          id: 'b1-vs-02-ex14',
          type: 'qcm',
          question: '"Pénurie de médecins" dans les hôpitaux signifie :',
          options: [
            'Trop de médecins disponibles',
            'Nombre insuffisant de médecins par rapport aux besoins',
            'Des médecins incompétents',
            'Des médecins étrangers dans les hôpitaux',
          ],
          correctIndex: 1,
          explanation: '"Pénurie" = shortage. "Pénurie de médecins" = manque de médecins, nombre insuffisant. La pénurie médicale en France est un problème réel : fermetures de services aux urgences, délais d\'attente très longs pour certaines consultations.',
        },
        {
          id: 'b1-vs-02-ex15',
          type: 'qcm',
          question: 'Passif passé composé + accord féminin : "Les infirmières ___ bien formées." (être + former)',
          options: [
            'ont été bien formées',
            'sont bien formées',
            'avaient été bien formées',
            'seront bien formées',
          ],
          correctIndex: 0,
          explanation: '"Les infirmières ONT ÉTÉ bien FORMÉES." Passif PC : "ont été" (auxiliaire "être" au passé composé avec "avoir") + "formées" (PP fém. pl.). "Infirmières" = fém. pl. → "formées".',
        },
        {
          id: 'b1-vs-02-ex16',
          type: 'qcm',
          question: '"Fracture géographique" en matière de santé désigne :',
          options: [
            'Des os fracturés lors d\'accidents géographiques',
            'Des inégalités d\'accès aux soins selon les territoires (urbain vs rural)',
            'Un problème d\'accès aux hôpitaux dans les montagnes',
            'Des services médicaux différents selon les régions',
          ],
          correctIndex: 1,
          explanation: '"Fracture géographique" = inégalités territoriales. Des disparités importantes d\'accès aux services (ici : soins médicaux) selon l\'endroit où on vit. Zones rurales et certaines banlieues = moins bien dotées. Villes moyennes et grandes métropoles = mieux dotées.',
        },
        {
          id: 'b1-vs-02-ex17',
          type: 'qcm',
          question: 'Quel organisme classe le système de santé français parmi les meilleurs du monde ?',
          options: ['L\'Union européenne', 'L\'OMS (Organisation Mondiale de la Santé)', 'Le gouvernement français', 'La Banque mondiale'],
          correctIndex: 1,
          explanation: 'Le texte dit "considéré comme l\'un des meilleurs au monde par l\'OMS (Organisation Mondiale de la Santé)." L\'OMS a classé la France n°1 mondial en 2000, bien que ce classement date et soit contesté.',
        },
        {
          id: 'b1-vs-02-ex18',
          type: 'qcm',
          question: 'Passif avec implication de l\'agent sans "par" : "Les cotisations sont prélevées ___ les salaires."',
          options: ['par', 'sur', 'dans', 'de'],
          correctIndex: 1,
          explanation: '"Les cotisations sont prélevées SUR les salaires." "Sur" introduit l\'assiette (la base) du prélèvement, pas l\'agent. Les cotisations sociales sont prélevées DIRECTEMENT SUR le salaire brut.',
        },
        {
          id: 'b1-vs-02-ex19',
          type: 'qcm',
          question: '"Le vieillissement de la population" comme défi pour le système de santé signifie :',
          options: [
            'Les personnes âgées sont moins bien soignées',
            'Plus de personnes âgées = plus de besoins médicaux et de dépenses de santé',
            'Les médecins vieillissent et partent à la retraite',
            'Les médicaments pour les personnes âgées sont plus chers',
          ],
          correctIndex: 1,
          explanation: 'Le vieillissement de la population = davantage de personnes âgées qui nécessitent plus de soins (maladies chroniques, hospitalisations, médicaments). Cela augmente mécaniquement les dépenses de santé et met sous pression le financement du système.',
        },
        {
          id: 'b1-vs-02-ex20',
          type: 'qcm',
          question: 'Transformez à la forme passive (passé composé) : "On a finalement voté la loi."',
          options: [
            'La loi a finalement voté',
            'La loi a finalement été votée',
            'La loi était finalement votée',
            'La loi sera finalement votée',
          ],
          correctIndex: 1,
          explanation: '"La loi A finalement ÉTÉ VOTÉE." Passif PC sans agent précis ("on" → agent indéfini). "Être" au PC : "a été". "Votée" = fém. sing., accord avec "la loi". "La loi a été votée" = The law has been voted / was voted.',
        },
      ],
    },

    {
      id: 'b1-vs-03',
      slug: 'b1-vie-familiale',
      moduleSlug: 'b1-vie-societe',
      level: 'B1',
      title: 'La vie familiale en France',
      description: 'Les différentes formes de famille, le droit de la famille et les aides aux familles.',
      duration: 35,
      free: false,
      dialogue: `## Texte : La famille française — évolutions et réalités

La famille française a profondément évolué en quelques décennies. Le modèle traditionnel de la famille nucléaire (père, mère, enfants) reste courant, mais d'autres formes de familles se sont développées et sont reconnues juridiquement.

**Les différentes formes de famille :**
- **La famille nucléaire** : parents mariés ou en union libre avec leurs enfants
- **La famille monoparentale** : un seul parent (souvent la mère) élevant ses enfants — 1 famille sur 4 en France
- **La famille recomposée** : deux adultes en couple, avec des enfants d'une ou des deux unions précédentes
- **L'homoparentalité** : des couples de même sexe ayant des enfants (adoption, GPA à l'étranger)

**Le PACS (Pacte Civil de Solidarité)** créé en 1999 offre une reconnaissance légale aux couples non mariés (hétérosexuels et homosexuels). Il donne des droits similaires au mariage sur le plan fiscal et social, mais est plus facile à rompre.

**Le mariage pour tous**, adopté en 2013, ouvre le mariage civil et l'adoption aux couples de même sexe.

**Les aides aux familles :**
La France a un système généreux d'aides aux familles : allocations familiales (dès le 2ème enfant), complément familial, aide à la garde d'enfants (AEEH, CRSI), congé parental, congé maternité (16 semaines pour le 1er enfant) et congé paternité (25 jours).`,

      linguisticPoint: `## Point linguistique : Les indéfinis et la quantification

### Indéfinis — récapitulatif
| Indéfini | Sens | Exemple |
|---|---|---|
| **tout / toute / tous / toutes** | all / every | **Toutes** les familles ont des droits |
| **chaque** | each / every | **Chaque** enfant reçoit une aide |
| **certain(e)s** | some (specific) | **Certaines** familles reçoivent plus |
| **plusieurs** | several | **Plusieurs** types de famille existent |
| **quelques** | a few | **Quelques** démarches sont nécessaires |
| **aucun(e)** | none / no | **Aucune** discrimination n\'est acceptée |
| **n\'importe quel(le)** | any (at random) | **N\'importe quel** enfant peut s\'inscrire |
| **tel / telle** | such | **Telle** famille peut bénéficier de... |

### Quantification précise et approximative
- "environ / à peu près / autour de" + nombre
- "plus de / moins de / au moins / au plus" + nombre
- "la plupart de / la majorité de / une minorité de"
- "un tiers / un quart / la moitié de"`,

      keyPoints: [
        'Famille monoparentale = 1 famille sur 4 en France / souvent dirigée par la mère',
        'PACS (1999) = reconnaissance légale des couples non mariés',
        'Mariage pour tous (2013) = mariage civil + adoption pour couples homosexuels',
        'Indéfinis : tout/chaque/certains/plusieurs/quelques/aucun',
        '"La plupart de / la majorité de" + nom pluriel = verbe pluriel',
      ],

      exercises: [
        {
          id: 'b1-vs-03-ex01',
          type: 'qcm',
          question: 'Complétez avec l\'indéfini correct : "___ les enfants ont le droit à l\'éducation."',
          options: ['Quelques', 'Certains', 'Tous', 'Aucun'],
          correctIndex: 2,
          explanation: '"TOUS les enfants ont le droit à l\'éducation." "Tous" = every / all (universalité). Quand on parle d\'un droit universel, sans exception, on utilise "tous/toutes".',
        },
        {
          id: 'b1-vs-03-ex02',
          type: 'qcm',
          question: 'Quelle proportion des familles françaises est monoparentale ?',
          options: ['1 sur 10', '1 sur 5', '1 sur 4', '1 sur 3'],
          correctIndex: 2,
          explanation: '"1 famille sur 4 en France" est monoparentale. La France compte environ 2 millions de familles monoparentales, majoritairement dirigées par des mères.',
        },
        {
          id: 'b1-vs-03-ex03',
          type: 'qcm',
          question: 'Indéfini : "___ démarche est nécessaire — même les simples." (toute = every)',
          options: ['Quelque', 'Chaque', 'Certaine', 'Aucune'],
          correctIndex: 1,
          explanation: '"CHAQUE démarche est nécessaire." "Chaque" = each / every (devant singulier). "Chaque" s\'utilise toujours au singulier : "chaque enfant" / "chaque famille" / "chaque démarche". Synonyme de "tout/toute" mais avec accent sur l\'individualité.',
        },
        {
          id: 'b1-vs-03-ex04',
          type: 'qcm',
          question: 'Le PACS a été créé en quelle année ?',
          options: ['1989', '1999', '2004', '2013'],
          correctIndex: 1,
          explanation: 'Le PACS (Pacte Civil de Solidarité) a été créé par la loi du 15 novembre 1999. Il offre une reconnaissance légale aux couples non mariés, hétérosexuels ou homosexuels.',
        },
        {
          id: 'b1-vs-03-ex05',
          type: 'qcm',
          question: 'Indéfini de quantité approximative : "___ familles reçoivent des allocations familiales."',
          options: ['Aucune', 'N\'importe quelle', 'La plupart des', 'Certaines'],
          correctIndex: 3,
          explanation: '"CERTAINES familles reçoivent des allocations." "Certains/certaines" = some (specific subset, not all). Ici, pas toutes les familles reçoivent des allocations familiales (il faut au moins 2 enfants).',
        },
        {
          id: 'b1-vs-03-ex06',
          type: 'qcm',
          question: 'Qu\'est-ce que la famille "recomposée" ?',
          options: [
            'Une famille avec des enfants adoptés',
            'Un couple dont l\'un ou les deux partenaires ont des enfants d\'une relation précédente',
            'Une famille avec 3 enfants ou plus',
            'Une famille avec un parent seul',
          ],
          correctIndex: 1,
          explanation: '"Famille recomposée" = blended family. Un couple (marié, pacsé ou en union libre) dont l\'un ou les deux partenaires ont des enfants d\'une relation précédente. Ces enfants vivent avec leur parent et le nouveau/nouvelle partenaire.',
        },
        {
          id: 'b1-vs-03-ex07',
          type: 'qcm',
          question: 'Indéfini : "___ discrimination n\'est acceptée dans le système de santé."',
          options: ['Certaine', 'Quelque', 'Aucune', 'Plusieurs'],
          correctIndex: 2,
          explanation: '"AUCUNE discrimination n\'est acceptée." "Aucun/aucune" + ne = zéro / no. Formule de négation absolue. "Aucune discrimination n\'est acceptée" = no discrimination is accepted.',
        },
        {
          id: 'b1-vs-03-ex08',
          type: 'qcm',
          question: 'En quelle année le mariage pour tous a-t-il été adopté ?',
          options: ['1999', '2004', '2013', '2017'],
          correctIndex: 2,
          explanation: 'La loi "Mariage pour Tous" a été adoptée le 23 avril 2013. Elle a ouvert le mariage civil et l\'adoption aux couples homosexuels. C\'est une réforme sociétale majeure en France.',
        },
        {
          id: 'b1-vs-03-ex09',
          type: 'qcm',
          question: 'Quantification : "La ___ des familles françaises a moins de 3 enfants."',
          options: ['quelques', 'plupart', 'certaines', 'chaque'],
          correctIndex: 1,
          explanation: '"La PLUPART DES familles françaises ont moins de 3 enfants." "La plupart de" = the majority of / most. "La plupart DES" + nom pluriel → verbe au pluriel. "La plupart des familles ONT" (pas "a").',
        },
        {
          id: 'b1-vs-03-ex10',
          type: 'qcm',
          question: 'Quelle est la durée minimale du congé maternité en France pour le 1er enfant ?',
          options: ['8 semaines', '12 semaines', '16 semaines', '20 semaines'],
          correctIndex: 2,
          explanation: '"Congé maternité (16 semaines pour le 1er enfant)." 16 semaines = 6 avant la naissance + 10 après. Pour le 3ème enfant ou plus : 26 semaines. Ce congé est rémunéré par la Sécurité sociale (Indemnités Journalières).',
        },
        {
          id: 'b1-vs-03-ex11',
          type: 'qcm',
          question: 'Indéfini : "___ enfant inscrit à l\'école reçoit la même éducation." (chaque = every individually)',
          options: ['Quelque', 'Chaque', 'Certains', 'Plusieurs'],
          correctIndex: 1,
          explanation: '"CHAQUE enfant inscrit à l\'école reçoit la même éducation." "Chaque" = each individual. Insiste sur le fait que CHAQUE enfant (un par un) bénéficie du même enseignement. Pas "tout enfant" (plus général) mais l\'accent sur chaque individu.',
        },
        {
          id: 'b1-vs-03-ex12',
          type: 'qcm',
          question: 'Que signifie "l\'union libre" ?',
          options: [
            'Le mariage gratuit',
            'La cohabitation en couple sans être marié ni pacsé',
            'Un couple libre de divorcer',
            'Le concubinage légalement interdit',
          ],
          correctIndex: 1,
          explanation: '"L\'union libre" = free union / cohabitation. Vivre en couple sans être officiellement marié ni pacsé. Aussi appelé "concubinage". Ce statut donne peu de droits légaux (pas de reconnaissance automatique, droits de succession réduits).',
        },
        {
          id: 'b1-vs-03-ex13',
          type: 'qcm',
          question: 'Indéfini : "Il y a ___ types de familles reconnues en France." (implique plusieurs, pas tous)',
          options: ['aucun', 'chaque', 'plusieurs', 'tout'],
          correctIndex: 2,
          explanation: '"Il y a PLUSIEURS types de familles." "Plusieurs" = several (more than one). "Il y a plusieurs" = there are several. Pour des catégories distinctes mais pas exhaustives.',
        },
        {
          id: 'b1-vs-03-ex14',
          type: 'qcm',
          question: 'Les allocations familiales commencent à partir de combien d\'enfants ?',
          options: ['1 enfant', '2 enfants', '3 enfants', '4 enfants'],
          correctIndex: 1,
          explanation: '"Allocations familiales (dès le 2ème enfant)." En France, les allocations familiales sont versées à partir du 2ème enfant (pas du premier). Elles varient selon le nombre d\'enfants et les revenus des parents.',
        },
        {
          id: 'b1-vs-03-ex15',
          type: 'qcm',
          question: '"N\'importe quelle famille peut bénéficier de..." signifie :',
          options: [
            'Seulement certaines familles peuvent bénéficier',
            'Toute famille, sans distinction, peut bénéficier',
            'Aucune famille ne peut bénéficier',
            'Plusieurs familles spécifiques peuvent bénéficier',
          ],
          correctIndex: 1,
          explanation: '"N\'importe quel/quelle" = any (at random, without distinction). "N\'importe quelle famille peut bénéficier" = any family (without distinction) can benefit. Exprime l\'absence de sélection ou de discrimination.',
        },
        {
          id: 'b1-vs-03-ex16',
          type: 'qcm',
          question: 'Combien de jours dure le congé paternité en France ?',
          options: ['14 jours', '20 jours', '25 jours', '30 jours'],
          correctIndex: 2,
          explanation: '"Congé paternité (25 jours)." Depuis 2021, le congé paternité est de 25 jours (dont 7 obligatoires). Il est rémunéré par la Sécurité sociale. Il existait avant 2021 mais durait seulement 11 jours.',
        },
        {
          id: 'b1-vs-03-ex17',
          type: 'qcm',
          question: '"Quelques démarches sont nécessaires" indique :',
          options: [
            'Un très grand nombre de démarches',
            'Un petit nombre de démarches (pas beaucoup)',
            'Aucune démarche',
            'Toutes les démarches',
          ],
          correctIndex: 1,
          explanation: '"Quelques" = a few (petit nombre, pas beaucoup). "Quelques démarches" = a few procedures. À distinguer de "plusieurs" (several = plus nombreux) et de "tous" (all).',
        },
        {
          id: 'b1-vs-03-ex18',
          type: 'qcm',
          question: 'La "GPA" mentionnée dans le texte (pour certains couples homosexuels) signifie :',
          options: [
            'Garde Partagée d\'Autorité',
            'Gestation Pour Autrui (mère porteuse)',
            'Garde Provisoire de l\'Autorité',
            'Gestion du Patrimoine d\'Adoption',
          ],
          correctIndex: 1,
          explanation: 'GPA = Gestation Pour Autrui (surrogacy). Une femme porte l\'enfant pour un autre couple. En France, la GPA est INTERDITE. Les couples qui y recourent doivent aller à l\'étranger. C\'est un sujet éthique très débattu en France.',
        },
        {
          id: 'b1-vs-03-ex19',
          type: 'qcm',
          question: 'Accord de "tout" : "___ ___ demandes ont été acceptées." (toutes les)',
          options: ['Tout les', 'Toutes les', 'Tous les', 'Toute les'],
          correctIndex: 1,
          explanation: '"TOUTES LES demandes ont été acceptées." "Tout" s\'accorde en genre et nombre : tout/toute/tous/TOUTES. "Demandes" = féminin pluriel → "TOUTES les demandes".',
        },
        {
          id: 'b1-vs-03-ex20',
          type: 'qcm',
          question: 'Qu\'est-ce que l\'"homoparentalité" ?',
          options: [
            'L\'adoption par des personnes seules',
            'Des parents de même sexe élevant des enfants',
            'L\'homoparentalité est interdite en France',
            'Un nouveau type de PACS',
          ],
          correctIndex: 1,
          explanation: '"Homoparentalité" = le fait pour des personnes homosexuelles d\'être parents. En France, depuis le Mariage pour Tous (2013), les couples de même sexe peuvent adopter. Certains ont recours à la GPA à l\'étranger ou à l\'aide médicale à la procréation.',
        },
      ],
    },

    {
      id: 'b1-vs-04',
      slug: 'b1-logement-droits',
      moduleSlug: 'b1-vie-societe',
      level: 'B1',
      title: 'Logement et droits des locataires',
      description: 'Droits et obligations des locataires, procédures en cas de litige, et aides au logement avancées.',
      duration: 35,
      free: false,
      dialogue: `## Texte : Les droits des locataires en France

En France, la relation locataire-propriétaire est très encadrée par la loi, notamment la loi ALUR de 2014 (Accès au Logement et Urbanisme Rénové) et la loi de 1989. Cette protection juridique solide est l'une des caractéristiques du droit locatif français.

**Les droits fondamentaux du locataire :**
- **Droit à un logement décent** : la loi définit des critères minimaux (surface, équipements, absence d'humidité, etc.)
- **Droit à la vie privée** : le propriétaire ne peut entrer dans le logement sans accord du locataire
- **Droit de préavis** : 3 ans minimum pour un congé donné par le propriétaire (sauf motifs légitimes)
- **Droit à la quittance** : le propriétaire doit fournir une quittance gratuite sur demande

**Les obligations du locataire :**
- Payer le loyer en temps et en heure
- Entretenir le logement (petites réparations)
- Souscrire une assurance habitation
- Respecter le règlement de copropriété

**En cas de litige :**
Si un désaccord survient avec le propriétaire, plusieurs recours sont possibles : la Commission Départementale de Conciliation (CDC, gratuite), le Tribunal Judiciaire pour les litiges plus graves, ou des associations comme l'ADIL (Agence Départementale pour l'Information sur le Logement) qui offrent des conseils gratuits.

**Les aides au logement :**
L'APL (Aide Personnalisée au Logement) est versée directement aux propriétaires ou aux locataires selon les cas. Le FSL (Fonds de Solidarité Logement) peut aider pour le dépôt de garantie ou les impayés de loyer.`,

      linguisticPoint: `## Point linguistique : Le futur antérieur

### Formation : auxiliaire (être/avoir) au futur + participe passé
| Verbe | Futur antérieur |
|---|---|
| finir | j\'aurai fini |
| partir | je serai parti(e) |
| se lever | je me serai levé(e) |

### Emplois du futur antérieur
1. **Action future accomplie avant une autre action future** :
   "Quand tu AURAS signé le bail, tu pourras emménager."

2. **Action future accomplie avant un moment futur** :
   "À 18h, ils AURONT terminé l\'état des lieux."

3. **Supposition sur le passé récent** (avec valeur de probabilité) :
   "Il AURA oublié de payer son loyer." (= he must have forgotten)

### Distinctions temporelles
- Futur simple : "Elle arrivera demain" (action future)
- Futur antérieur : "Elle sera arrivée demain avant toi" (accompli avant)
- Conditionnel passé : "Elle serait arrivée si..." (hypothèse non réalisée)`,

      keyPoints: [
        'Futur antérieur = avoir/être (futur simple) + participe passé',
        '"Quand tu AURAS signé, tu pourras..." = FA avant action future',
        '"Il AURA oublié" = supposition sur passé récent',
        'Loi ALUR 2014 = protection renforcée des locataires',
        'En cas de litige : ADIL (conseil gratuit) → CDC (conciliation) → Tribunal',
      ],

      exercises: [
        {
          id: 'b1-vs-04-ex01',
          type: 'qcm',
          question: 'Futur antérieur : "Quand j\'___ le bail, je vous appellerai." (signer)',
          options: ['ai signé', 'aurai signé', 'aurais signé', 'avais signé'],
          correctIndex: 1,
          explanation: '"Quand j\'AURAI SIGNÉ le bail, je vous appellerai." Futur antérieur : "aurai" (avoir au futur) + "signé" (PP). Structure : QUAND + futur antérieur + futur simple. L\'action de signer sera TERMINÉE avant d\'appeler.',
        },
        {
          id: 'b1-vs-04-ex02',
          type: 'qcm',
          question: 'Quelle est la durée minimale du préavis pour qu\'un propriétaire congédie son locataire ?',
          options: ['6 mois', '1 an', '3 ans', '2 ans'],
          correctIndex: 2,
          explanation: '"Droit de préavis : 3 ans minimum pour un congé donné par le propriétaire." Le propriétaire ne peut pas chasser son locataire facilement — il faut attendre la fin du bail (3 ans pour location vide) avec des motifs légitimes (vente, reprise pour y habiter...).',
        },
        {
          id: 'b1-vs-04-ex03',
          type: 'qcm',
          question: 'Futur antérieur de "partir" (verbe être) : "Elle ___ avant 18h."',
          options: ['aura parti', 'sera partie', 'a parti', 'était partie'],
          correctIndex: 1,
          explanation: '"Elle SERA PARTIE avant 18h." "Partir" = verbe ÊTRE → futur antérieur : être (futur = "sera") + PP accordé ("partie" = féminin). "Sera partie" = will have left.',
        },
        {
          id: 'b1-vs-04-ex04',
          type: 'qcm',
          question: 'Qu\'est-ce que l\'ADIL ?',
          options: [
            'Une association de propriétaires',
            'L\'Agence Départementale pour l\'Information sur le Logement — conseils gratuits',
            'Une agence immobilière publique',
            'Un tribunal spécialisé en logement',
          ],
          correctIndex: 1,
          explanation: 'ADIL = Agence Départementale pour l\'Information sur le Logement. Organisme public (ou para-public) qui offre des conseils GRATUITS sur les droits des locataires et propriétaires, les aides, les procédures. Présent dans chaque département.',
        },
        {
          id: 'b1-vs-04-ex05',
          type: 'qcm',
          question: 'Futur antérieur (supposition) : "Il n\'a pas payé son loyer. Il ___ oublié." (avoir oublié)',
          options: ['aurait', 'aura', 'avait', 'a'],
          correctIndex: 1,
          explanation: '"Il AURA oublié." Le futur antérieur peut exprimer une SUPPOSITION sur un fait passé récent. "Il aura oublié" = he must have forgotten / il a probablement oublié. Nuance de probabilité.',
        },
        {
          id: 'b1-vs-04-ex06',
          type: 'qcm',
          question: '"Logement décent" — quels critères minimaux doivent être remplis ?',
          options: [
            'Une surface minimale, équipements de base, absence d\'humidité',
            'Un jardin et un parking',
            'Une connexion internet et un double vitrage',
            'Uniquement la surface minimale légale',
          ],
          correctIndex: 0,
          explanation: 'La loi définit le "logement décent" par des critères minimaux : surface habitable, équipements (eau potable, WC, chauffage...), absence d\'infiltrations, pas d\'humidité excessive, installations électriques conformes. En dessous de ces critères, le propriétaire peut être contraint de faire des travaux.',
        },
        {
          id: 'b1-vs-04-ex07',
          type: 'qcm',
          question: 'Futur antérieur : "Dès que vous ___ le dossier, nous traiterons votre demande." (remettre)',
          options: ['remettrez', 'aurez remis', 'avez remis', 'auriez remis'],
          correctIndex: 1,
          explanation: '"Dès que vous AUREZ REMIS le dossier, nous traiterons votre demande." Futur antérieur après "dès que" (comme "quand"). Avoir (futur = "aurez") + PP ("remis"). Action de remettre terminée AVANT le traitement.',
        },
        {
          id: 'b1-vs-04-ex08',
          type: 'qcm',
          question: 'La "Commission Départementale de Conciliation" (CDC) sert à :',
          options: [
            'Juger les litiges et rendre des décisions contraignantes',
            'Tenter une médiation gratuite entre locataire et propriétaire',
            'Verser les aides APL',
            'Inspecter les logements insalubres',
          ],
          correctIndex: 1,
          explanation: 'La CDC = Commission Départementale de Conciliation. Organisme GRATUIT qui tente une CONCILIATION (médiation amiable) entre locataire et propriétaire. Ce n\'est pas un tribunal — ses décisions ne sont pas contraignantes. Étape avant le tribunal si nécessaire.',
        },
        {
          id: 'b1-vs-04-ex09',
          type: 'qcm',
          question: 'Futur antérieur : "À 17h, ils ___ terminé l\'état des lieux." (avoir terminé)',
          options: ['auront terminé', 'auront terminés', 'ont terminé', 'avaient terminé'],
          correctIndex: 0,
          explanation: '"À 17h, ils AURONT TERMINÉ l\'état des lieux." Futur antérieur : "auront" (avoir au futur) + "terminé" (PP). Pas d\'accord du PP car COD après le verbe. À 17h = moment futur avant lequel l\'action sera accomplie.',
        },
        {
          id: 'b1-vs-04-ex10',
          type: 'qcm',
          question: 'Le FSL (Fonds de Solidarité Logement) peut aider pour :',
          options: [
            'Acheter un logement',
            'Le dépôt de garantie ou les impayés de loyer',
            'Rénover un logement',
            'Payer les charges de copropriété',
          ],
          correctIndex: 1,
          explanation: '"Le FSL peut aider pour le dépôt de garantie ou les impayés de loyer." FSL = aide financière pour personnes en difficulté pour accéder ou se maintenir dans un logement. Géré par les Conseils Départementaux.',
        },
        {
          id: 'b1-vs-04-ex11',
          type: 'qcm',
          question: '"Souscrire une assurance habitation" est une obligation pour le locataire. Que signifie "souscrire" ?',
          options: ['Annuler', 'Contracter / prendre (une assurance)', 'Payer', 'Renouveler'],
          correctIndex: 1,
          explanation: '"Souscrire" = to subscribe to / to take out. "Souscrire une assurance" = contracter une assurance, s\'engager à payer les primes. "Souscrire" s\'utilise pour les assurances, abonnements, offres financières.',
        },
        {
          id: 'b1-vs-04-ex12',
          type: 'qcm',
          question: 'Futur antérieur réfléchi : "Quand elle ___ habituée au quartier, elle se sentira mieux." (s\'habituer)',
          options: ['se sera habituée', 's\'est habituée', 's\'aura habituée', 's\'était habituée'],
          correctIndex: 0,
          explanation: '"Quand elle SE SERA HABITUÉE." "S\'habituer" = verbe pronominal → ÊTRE. Futur antérieur : se + être (futur = "sera") + PP accordé ("habituée" = fém.). Accord avec le sujet "elle" (féminin).',
        },
        {
          id: 'b1-vs-04-ex13',
          type: 'qcm',
          question: 'La "quittance" de loyer est :',
          options: [
            'Une augmentation de loyer',
            'Un document attestant que le loyer a été payé',
            'Un contrat de bail',
            'Une convocation devant le tribunal',
          ],
          correctIndex: 1,
          explanation: 'La quittance de loyer = receipt for rent payment. Document que le propriétaire donne au locataire pour attester que le loyer a été payé. Elle peut être utile comme justificatif de domicile.',
        },
        {
          id: 'b1-vs-04-ex14',
          type: 'qcm',
          question: 'Quelle est la principale loi qui encadre la relation locataire-propriétaire ?',
          options: ['La loi de 1975', 'La loi de 1989 et la loi ALUR de 2014', 'Le Code civil seulement', 'La Constitution'],
          correctIndex: 1,
          explanation: 'La loi du 6 juillet 1989 + la loi ALUR (Accès au Logement et Urbanisme Rénové) de 2014 sont les principales lois encadrant les relations locataires-propriétaires en France. Elles renforcent les droits des locataires.',
        },
        {
          id: 'b1-vs-04-ex15',
          type: 'qcm',
          question: 'Futur antérieur : "Il sera parti" = ?',
          options: [
            'He will be leaving (action en cours)',
            'He will have left (action terminée dans le futur)',
            'He had left (passé)',
            'He was leaving (action passée en cours)',
          ],
          correctIndex: 1,
          explanation: '"Il SERA PARTI" = he will have left. Futur antérieur : action TERMINÉE dans le futur. "Quand tu arriveras, il sera déjà parti" = when you arrive, he will already have left.',
        },
        {
          id: 'b1-vs-04-ex16',
          type: 'qcm',
          question: 'L\'APL est versée :',
          options: [
            'Toujours directement au locataire',
            'Toujours directement au propriétaire',
            'Selon les cas, au propriétaire ou au locataire',
            'Uniquement en cas de difficultés financières',
          ],
          correctIndex: 2,
          explanation: '"L\'APL est versée directement aux propriétaires ou aux locataires selon les cas." Dans la plupart des cas (APL accession ou location conventionnée), elle est versée directement au propriétaire bailleur qui déduit ce montant du loyer.',
        },
        {
          id: 'b1-vs-04-ex17',
          type: 'qcm',
          question: 'Pourquoi le droit locatif français protège-t-il davantage le locataire que le propriétaire ?',
          options: [
            'Par tradition historique française',
            'Parce que le logement est un droit fondamental et les locataires sont en position de vulnérabilité',
            'Pour punir les propriétaires',
            'Parce que la France a un déficit de logements',
          ],
          correctIndex: 1,
          explanation: 'Le droit locatif français privilégie la protection du locataire car le logement est reconnu comme un droit fondamental (droit à un toit). Le locataire est considéré en position de vulnérabilité face au propriétaire. Cela peut décourager certains propriétaires de louer.',
        },
        {
          id: 'b1-vs-04-ex18',
          type: 'qcm',
          question: 'Futur antérieur : "Dès qu\'il ___ reçu la quittance, il partira." (recevoir)',
          options: ['recevra', 'aura reçu', 'aurait reçu', 'avait reçu'],
          correctIndex: 1,
          explanation: '"Dès qu\'il AURA REÇU la quittance, il partira." Futur antérieur après "dès que". "Avoir" (futur = "aura") + PP de "recevoir" = "reçu". L\'action de recevoir sera terminée avant de partir.',
        },
        {
          id: 'b1-vs-04-ex19',
          type: 'qcm',
          question: '"Litige" dans le contexte locataire-propriétaire signifie :',
          options: ['Un accord', 'Un désaccord / un conflit nécessitant un recours légal', 'Un contrat', 'Un paiement'],
          correctIndex: 1,
          explanation: '"Litige" = dispute / legal conflict. Un désaccord formel qui peut nécessiter un recours en justice ou une médiation. En droit, "litige" implique un conflit entre deux parties aux intérêts opposés.',
        },
        {
          id: 'b1-vs-04-ex20',
          type: 'qcm',
          question: 'Futur antérieur de probabilité (supposition) : "Tu n\'arrives pas à l\'ouvrir. Tu ___ oublié la clé." (oublier)',
          options: ['auras oublié', 'aurais oublié', 'avais oublié', 'as oublié'],
          correctIndex: 0,
          explanation: '"Tu AURAS oublié la clé." Le futur antérieur peut exprimer une supposition probable sur une action passée ou récente. "Tu auras oublié" = you must have forgotten. Exprime une hypothèse très probable.',
        },
      ],
    },

    {
      id: 'b1-vs-05',
      slug: 'b1-droits-citoyens',
      moduleSlug: 'b1-vie-societe',
      level: 'B1',
      title: 'Droits et devoirs du citoyen',
      description: 'Les droits fondamentaux, le droit de vote, les devoirs civiques et la participation à la vie démocratique.',
      duration: 35,
      free: false,
      dialogue: `## Texte : Être citoyen français — droits et devoirs

La citoyenneté française confère un ensemble de droits et implique des devoirs. Contrairement à la résidence permanente, la nationalité française ouvre l'accès à tous les droits civiques.

**Les droits fondamentaux du citoyen :**
- **Le droit de vote** : voter aux élections présidentielles, législatives, locales et européennes
- **L'éligibilité** : se présenter à des élections
- **La liberté d'expression, de réunion et d'association** : garanties par la Déclaration des Droits de l'Homme et du Citoyen de 1789
- **Le droit à la sécurité sociale et à l'éducation** : garantis à tous les résidents réguliers, pas seulement aux citoyens

**Les devoirs du citoyen :**
- **Participer aux élections** : voter est un droit mais aussi une forme de devoir moral dans une démocratie
- **Payer ses impôts** : financer les services publics
- **Respecter les lois** : le droit positif oblige tous les résidents
- **Défense de la nation** : la conscription (service militaire) a été suspendue en France depuis 1996, mais une journée de Défense et de Citoyenneté (JDC) est obligatoire pour les 16-25 ans
- **Participer à la vie civique** : jurés d'assises, participation aux débats publics...

**La Déclaration des Droits de l'Homme et du Citoyen de 1789** est l'un des textes fondamentaux de la République française. Elle proclame les droits naturels de l'individu (liberté, propriété, sûreté, résistance à l'oppression) et les principes de souveraineté nationale.`,

      linguisticPoint: `## Point linguistique : Les connecteurs logiques avancés — cause, conséquence, but

### Cause — registres variés
| Registre courant | Registre soutenu |
|---|---|
| parce que + indicatif | étant donné que |
| comme | vu que / attendu que |
| puisque | du fait que / en raison du fait que |
| à cause de + nom | en raison de + nom |
| grâce à + nom | du fait de + nom |

### But — pour que ou pour + infinitif
- **Pour + infinitif** (même sujet) : "Il vote **pour** changer les choses"
- **Pour que + subjonctif** (sujets différents) : "Il vote **pour que** la société change"
- **Afin de + infinitif** : "Il s\'informe **afin d\'**voter intelligemment"
- **Afin que + subjonctif** : "Il explique **afin que** vous compreniez"

### Conséquence — degré et intensité
- **donc / ainsi / par conséquent** : neutre
- **si bien que + indicatif** : tellement que
- **à tel point que** : au point où
- **d\'où + nom** : c\'est pourquoi (d\'où cette nécessité)`,

      keyPoints: [
        'Droit de vote = acquis à la naturalisation (pas disponible pour les étrangers non naturalisés)',
        'Déclaration des Droits de l\'Homme et du Citoyen (1789) = fondement des libertés',
        'JDC (Journée Défense et Citoyenneté) = obligatoire pour 16-25 ans',
        '"Pour + infinitif" (même sujet) vs "pour que + subjonctif" (sujets différents)',
        '"D\'où + nom" = d\'où + nom = conséquence directe (style soutenu)',
      ],

      exercises: [
        {
          id: 'b1-vs-05-ex01',
          type: 'qcm',
          question: 'Connecteur de but : "Elle suit des cours de français ___ réussir son intégration." (même sujet)',
          options: ['pour que', 'afin que', 'pour', 'à cause de'],
          correctIndex: 2,
          explanation: '"Elle suit des cours POUR réussir son intégration." Même sujet (elle...elle) → "pour + infinitif". "Pour que" + subjonctif est pour des sujets DIFFÉRENTS.',
        },
        {
          id: 'b1-vs-05-ex02',
          type: 'qcm',
          question: 'Quel droit politique devient disponible après la naturalisation (pas avant) ?',
          options: [
            'Le droit à l\'éducation',
            'Le droit à la santé',
            'Le droit de vote',
            'Le droit au travail',
          ],
          correctIndex: 2,
          explanation: 'Le DROIT DE VOTE est réservé aux citoyens français (naturalisés ou nés français). Les étrangers résidant en France — même depuis longtemps — ne peuvent pas voter aux élections nationales. C\'est l\'un des principaux avantages de la naturalisation.',
        },
        {
          id: 'b1-vs-05-ex03',
          type: 'qcm',
          question: 'Connecteur de but (sujets différents) : "Il s\'engage dans la politique ___ ses enfants vivent dans un pays meilleur."',
          options: [
            'pour',
            'pour que',
            'afin de',
            'à cause de',
          ],
          correctIndex: 1,
          explanation: '"Pour que ses enfants VIVENT dans un pays meilleur." Sujets différents (il / ses enfants) → "pour que + subjonctif". "Vivent" = subjonctif de "vivre".',
        },
        {
          id: 'b1-vs-05-ex04',
          type: 'qcm',
          question: 'Qu\'est-ce que la JDC (Journée Défense et Citoyenneté) ?',
          options: [
            'Le service militaire obligatoire',
            'Une journée obligatoire de sensibilisation à la défense nationale pour les jeunes 16-25 ans',
            'Un événement commémoratif annuel',
            'Un test de citoyenneté pour les étrangers',
          ],
          correctIndex: 1,
          explanation: 'JDC = Journée Défense et Citoyenneté (anciennement JAPD). Obligatoire pour tous les Français de 17-25 ans. Cette journée comprend une présentation des institutions militaires, un bilan de santé et un test de lecture. Condition pour s\'inscrire aux examens.',
        },
        {
          id: 'b1-vs-05-ex05',
          type: 'qcm',
          question: 'Connecteur de cause soutenu : "___ la situation économique difficile, de nombreuses familles ont des difficultés."',
          options: ['Comme', 'En raison de', 'Puisque', 'Parce que'],
          correctIndex: 1,
          explanation: '"EN RAISON DE la situation économique difficile." "En raison de + nom" = à cause de + nom (registre soutenu). "Puisque" et "parce que" s\'utilisent avec des propositions (+ verbe), pas avec des noms.',
        },
        {
          id: 'b1-vs-05-ex06',
          type: 'qcm',
          question: 'La Déclaration des Droits de l\'Homme date de :',
          options: ['1776', '1789', '1848', '1958'],
          correctIndex: 1,
          explanation: 'La Déclaration des Droits de l\'Homme et du Citoyen = 26 août 1789. Adoptée par l\'Assemblée nationale constituante pendant la Révolution française. Elle proclame les droits naturels (liberté, égalité, propriété, sûreté) et la souveraineté nationale.',
        },
        {
          id: 'b1-vs-05-ex07',
          type: 'qcm',
          question: 'Connecteur de conséquence : "La population a massivement voté, ___ le taux de participation a atteint 75%."',
          options: ['cependant', 'si bien que', 'même si', 'bien que'],
          correctIndex: 1,
          explanation: '"SI BIEN QUE le taux a atteint 75%." "Si bien que" = so much so that = tellement que. Conséquence directe. "La population a massivement voté, si bien que le taux a atteint 75%."',
        },
        {
          id: 'b1-vs-05-ex08',
          type: 'qcm',
          question: '"L\'éligibilité" (cité parmi les droits) désigne :',
          options: [
            'Le droit de voter',
            'Le droit de se présenter à des élections',
            'Le droit à l\'éducation',
            'Le droit de circuler librement',
          ],
          correctIndex: 1,
          explanation: '"L\'éligibilité" = eligibility to stand for election. Le droit d\'être candidat à une élection. En France, un citoyen français peut se présenter à toutes les élections (maire, député, président...) selon les conditions d\'âge et de résidence.',
        },
        {
          id: 'b1-vs-05-ex09',
          type: 'qcm',
          question: 'Connecteur de but : "___ d\'voter intelligemment, il faut s\'informer." (même sujet — soutenu)',
          options: ['Pour que', 'Afin', 'Afin de', 'Pour'],
          correctIndex: 2,
          explanation: '"AFIN DE voter intelligemment, il faut s\'informer." "Afin de + infinitif" = forme plus soutenue de "pour + infinitif" (même sujet). "Afin de" / "pour" = in order to. Même sens, registre différent.',
        },
        {
          id: 'b1-vs-05-ex10',
          type: 'qcm',
          question: 'Que signifie "la conscription a été suspendue" (1996) ?',
          options: [
            'Le service militaire a été rendu obligatoire',
            'Le service militaire obligatoire a été temporairement mis en pause (armée professionnelle)',
            'Le service militaire a été définitivement supprimé',
            'La conscription a été remplacée par la JDC',
          ],
          correctIndex: 1,
          explanation: '"Suspendue" = temporarily put on hold / suspended. La conscription (service militaire obligatoire) a été suspendue en France en 1996 (pas supprimée définitivement). La France est passée à une armée de métier (professionnelle). La suspension peut théoriquement être levée.',
        },
        {
          id: 'b1-vs-05-ex11',
          type: 'qcm',
          question: '"D\'où + nom" est un connecteur de :',
          options: ['Cause', 'But', 'Conséquence', 'Opposition'],
          correctIndex: 2,
          explanation: '"D\'où + nom" = hence + nom. Connecteur de CONSÉQUENCE. "Les inégalités persistent, d\'où la nécessité de réformes." = hence the need for reforms. Style soutenu, fréquent dans l\'écrit formel.',
        },
        {
          id: 'b1-vs-05-ex12',
          type: 'qcm',
          question: 'Connecteur de cause (même/subordonné) : "___ la loi l\'exige, vous devez payer des impôts."',
          options: ['Pour que', 'Afin que', 'Puisque', 'Si bien que'],
          correctIndex: 2,
          explanation: '"PUISQUE la loi l\'exige, vous devez payer des impôts." "Puisque" = since / given that. Cause connue des deux interlocuteurs (fait admis). "Parce que" = cause nouvelle. "Puisque" = cause déjà connue.',
        },
        {
          id: 'b1-vs-05-ex13',
          type: 'qcm',
          question: 'La souveraineté nationale (dans la DDHC) signifie :',
          options: [
            'Le roi est souverain',
            'Le pouvoir appartient à la nation / au peuple',
            'L\'État est souverain par rapport aux autres pays',
            'Les juges ont le pouvoir souverain',
          ],
          correctIndex: 1,
          explanation: '"Souveraineté nationale" = le pouvoir politique appartient à la NATION (le peuple). C\'est le principe de base de la démocratie républicaine. "Le peuple est souverain" → il délègue ce pouvoir à ses représentants élus.',
        },
        {
          id: 'b1-vs-05-ex14',
          type: 'qcm',
          question: '"À tel point que" introduit :',
          options: ['Une cause très forte', 'Une conséquence très intense', 'Une opposition', 'Un but'],
          correctIndex: 1,
          explanation: '"À tel point que" = to such an extent that / so much that. Conséquence d\'une très grande intensité. "Il s\'est intégré à tel point qu\'on ne le distingue plus des Français de naissance."',
        },
        {
          id: 'b1-vs-05-ex15',
          type: 'qcm',
          question: 'Connecteur de but (sujets différents, soutenu) : "L\'État investit dans l\'éducation ___ les citoyens soient bien formés."',
          options: ['pour', 'pour que', 'afin de', 'afin que'],
          correctIndex: 3,
          explanation: '"AFIN QUE les citoyens SOIENT bien formés." Sujets différents (l\'État / les citoyens) → "afin que + subjonctif". "Afin que" est la version soutenue de "pour que". Les deux exigent le subjonctif.',
        },
        {
          id: 'b1-vs-05-ex16',
          type: 'qcm',
          question: 'Être juré d\'assises est :',
          options: [
            'Un droit qui ne peut être refusé',
            'Un devoir civique imposé par tirage au sort, difficile à refuser sans motif',
            'Un travail rémunéré choisi volontairement',
            'Une obligation uniquement pour les fonctionnaires',
          ],
          correctIndex: 1,
          explanation: 'En France, les jurés d\'assises (cours d\'assises pour crimes graves) sont TIRÉS AU SORT sur les listes électorales. C\'est un devoir civique — le refus sans motif légitime est puni d\'amende. Les jurés reçoivent une indemnité.',
        },
        {
          id: 'b1-vs-05-ex17',
          type: 'qcm',
          question: 'Connecteur de cause soutenu : "___ que la situation soit complexe, des solutions existent."',
          options: ['Étant donné', 'Bien', 'Parce', 'Car'],
          correctIndex: 0,
          explanation: '"ÉTANT DONNÉ QUE la situation est complexe, des solutions existent." "Étant donné que" = given that / considering that. Cause admise. ⚠️ "Bien que" + subjonctif = concession, pas cause.',
        },
        {
          id: 'b1-vs-05-ex18',
          type: 'qcm',
          question: 'La "résistance à l\'oppression" dans la DDHC est :',
          options: [
            'Un droit accordé uniquement aux militaires',
            'Un droit naturel du peuple à s\'opposer à un gouvernement tyrannique',
            'Un droit de grève',
            'Un droit créé en 1958 uniquement',
          ],
          correctIndex: 1,
          explanation: 'La "résistance à l\'oppression" est l\'un des droits naturels proclamés dans la DDHC de 1789. Elle reconnaît le droit du peuple à résister à un gouvernement tyrannique qui violerait les droits naturels. C\'est un fondement philosophique de la Révolution française.',
        },
        {
          id: 'b1-vs-05-ex19',
          type: 'qcm',
          question: 'Connecteur de conséquence intense : "Il a travaillé ___ il a fini épuisé." (si bien que / à tel point que)',
          options: ['pour que', 'bien que', 'si bien que', 'afin que'],
          correctIndex: 2,
          explanation: '"Il a tellement travaillé, SI BIEN QU\'il a fini épuisé." "Si bien que" = so much so that = consequence d\'intensité. "Il a travaillé + intensité → conséquence."',
        },
        {
          id: 'b1-vs-05-ex20',
          type: 'qcm',
          question: 'Pourquoi le droit de vote est-il considéré comme un "devoir moral" même s\'il n\'est pas légalement obligatoire en France ?',
          options: [
            'Parce que la loi l\'exige',
            'Parce que dans une démocratie, la participation citoyenne est le fondement de la légitimité politique',
            'Pour éviter des amendes',
            'Parce que les candidats le demandent',
          ],
          correctIndex: 1,
          explanation: 'Le vote est le devoir moral du citoyen car dans une démocratie représentative, la légitimité des élus vient du peuple. Ne pas voter = ne pas exercer sa souveraineté. En France, le vote n\'est pas légalement obligatoire (contrairement à la Belgique ou l\'Australie). L\'abstention est élevée (40-50% pour certaines élections).',
        },
      ],
    },
  ],
};
