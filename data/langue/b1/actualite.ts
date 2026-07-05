import type { LangModule } from '../types';

export const b1Actualite: LangModule = {
  id: 'b1-mod-01',
  slug: 'b1-actualite',
  level: 'B1',
  title: 'Actualité et presse française',
  subtitle: 'Lire, écouter et comprendre les informations',
  description: 'Développez votre compréhension des médias français, du vocabulaire de l\'actualité et des structures de l\'argumentation journalistique.',
  type: 'thematique',
  emoji: '📰',
  free: false,
  lessons: [
    {
      id: 'b1-ac-01',
      slug: 'b1-lire-journaux',
      moduleSlug: 'b1-actualite',
      level: 'B1',
      title: 'Lire un article de presse',
      description: 'Comprenez la structure d\'un article, identifiez les faits et les opinions, et enrichissez votre vocabulaire journalistique.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Article du Monde — La naturalisation facilitée pour les étrangers qualifiés

*Extrait adapté d'un article de presse.*

**La réforme de la naturalisation : entre facilitation et vigilance**

Le gouvernement français a annoncé cette semaine une série de mesures visant à simplifier l\'accès à la nationalité française pour les étrangers hautement qualifiés. Selon le ministre de l\'Intérieur, cette réforme permettrait d\'« attirer les talents dont la France a besoin » tout en « préservant l\'exigence d\'intégration ».

La principale mesure concerne la réduction du délai de résidence requis : de cinq à trois ans pour les personnes titulaires d\'un diplôme de niveau master ou équivalent. Les associations de défense des droits des étrangers saluent cette avancée, mais restent prudentes. « C\'est un pas dans la bonne direction », déclare la présidente de l\'association Droit d\'Asile, « mais il faut surveiller les conditions d\'application ».

Du côté des opposants, certains élus de droite jugent cette mesure « prématurée » et s\'inquiètent d\'un éventuel « appel d\'air » migratoire. Le gouvernement, lui, insiste sur le fait que la réforme est « très ciblée » et ne concerne qu\'une population restreinte.

En chiffres, la France naturalisait en 2023 environ 90 000 personnes par an. Les analystes estiment que cette réforme pourrait augmenter ce nombre de 15 à 20%.`,

      linguisticPoint: `## Point linguistique : Le discours rapporté — structures journalistiques

### Verbes de déclaration (dire, déclarer, affirmer, estimer...)
| Verbe | Nuance | Exemple |
|---|---|---|
| **dire** | neutre | Il **dit** que c\'est possible |
| **déclarer** | officiel/public | Elle **déclare** que la réforme est nécessaire |
| **affirmer** | avec conviction | Il **affirme** que c\'est une avancée |
| **estimer** | opinion personnelle | L\'analyste **estime** que 15% est réaliste |
| **souligner** | mettre en avant | Le rapport **souligne** l\'importance de... |
| **s\'inquiéter** | exprimer une crainte | L\'élu **s\'inquiète** d\'un appel d\'air |
| **saluer** | accueillir positivement | L\'association **salue** cette avancée |
| **nuancer** | modérer | L\'expert **nuance** le bilan |

### Structure d'un article de presse
- **Titre** (manchette) : accrocheur, informatif
- **Chapeau** (lead) : résumé en 1-2 phrases (qui? quoi? quand? où? pourquoi?)
- **Corps** : développement avec faits + citations
- **Chute** : conclusion ou ouverture

### Distinguer fait et opinion
- **Fait** : vérifiable, neutre ("La France a naturalisé 90 000 personnes")
- **Opinion** : interprétation, jugement ("selon X", "d\'après Y", "X estime que")`,

      keyPoints: [
        'Verbes de déclaration : dire/déclarer/affirmer/estimer/souligner/saluer',
        'Discours rapporté : "déclare que" + indicatif / "s\'inquiète que" + subjonctif',
        'Article = fait + opinion : identifier qui parle et son point de vue',
        'Structure : titre + chapeau (lead) + corps + chute',
        '"Selon X" / "D\'après Y" / "Aux yeux de Z" = attribution de l\'opinion',
      ],

      exercises: [
        {
          id: 'b1-ac-01-ex01',
          type: 'qcm',
          question: 'Quelle est la principale mesure annoncée dans l\'article ?',
          options: [
            'L\'augmentation du nombre de naturalisations',
            'La réduction du délai de résidence de 5 à 3 ans pour les diplômés bac+5',
            'La suppression de l\'entretien de naturalisation',
            'La gratuité des procédures de naturalisation',
          ],
          correctIndex: 1,
          explanation: 'L\'article dit : "La principale mesure concerne la réduction du délai de résidence requis : de cinq à trois ans pour les personnes titulaires d\'un diplôme de niveau master ou équivalent."',
        },
        {
          id: 'b1-ac-01-ex02',
          type: 'qcm',
          question: 'Que signifie "saluer" dans "les associations saluent cette avancée" ?',
          options: [
            'Critiquer négativement',
            'Accueillir favorablement / approuver',
            'Ignorer / ne pas commenter',
            'Demander plus d\'informations',
          ],
          correctIndex: 1,
          explanation: '"Saluer" dans ce contexte = accueillir positivement, approuver. "Les associations saluent cette avancée" = les associations approuvent et se réjouissent de cette mesure. C\'est un verbe fréquent dans la presse pour exprimer une réaction positive.',
        },
        {
          id: 'b1-ac-01-ex03',
          type: 'qcm',
          question: 'L\'expression "appel d\'air" utilisée par les opposants signifie :',
          options: [
            'Une amélioration de la qualité de l\'air',
            'Un phénomène d\'attraction qui inciterait davantage de personnes à venir en France',
            'Une fuite des cerveaux français vers l\'étranger',
            'Une procédure administrative accélérée',
          ],
          correctIndex: 1,
          explanation: '"Appel d\'air" (métaphore) = en physique, un vide qui attire l\'air. En politique migratoire, c\'est l\'idée qu\'une mesure favorable pourrait "attirer" davantage d\'immigrants. C\'est souvent utilisé de manière négative par les opposants à l\'immigration.',
        },
        {
          id: 'b1-ac-01-ex04',
          type: 'qcm',
          question: 'Le verbe "viser" dans "une série de mesures visant à simplifier" signifie :',
          options: ['interdire', 'avoir pour objectif', 'réussir à', 'permettre de'],
          correctIndex: 1,
          explanation: '"Viser à" = avoir pour objectif de / être destiné à. "Mesures visant à simplifier" = mesures qui ont pour objectif de simplifier. Synonymes : "dans le but de" / "en vue de" / "afin de".',
        },
        {
          id: 'b1-ac-01-ex05',
          type: 'qcm',
          question: 'La phrase "C\'est un pas dans la bonne direction" est :',
          options: [
            'Un fait vérifiable',
            'Une opinion (déclarée par la présidente de l\'association)',
            'Un chiffre officiel',
            'Une citation du ministre',
          ],
          correctIndex: 1,
          explanation: '"C\'est un pas dans la bonne direction" est une OPINION, attribuée à la présidente de l\'association Droit d\'Asile. Le guillemets et le verbe "déclare" signalent que c\'est un point de vue, pas un fait objectif.',
        },
        {
          id: 'b1-ac-01-ex06',
          type: 'qcm',
          question: 'Combien de personnes la France naturalisait-elle en 2023 ?',
          options: ['50 000', '75 000', '90 000', '120 000'],
          correctIndex: 2,
          explanation: 'L\'article dit : "la France naturalisait en 2023 environ 90 000 personnes par an." C\'est un fait (chiffre officiel), pas une opinion.',
        },
        {
          id: 'b1-ac-01-ex07',
          type: 'qcm',
          question: 'Quel verbe de déclaration indique une opinion personnelle modérée ?',
          options: ['"affirmer" (conviction forte)', '"estimer" (opinion personnelle)', '"déclarer" (déclaration officielle)', '"souligner" (mettre en avant)'],
          correctIndex: 1,
          explanation: '"Estimer" = to consider / to believe (opinion personnelle). "Les analystes estiment que cette réforme pourrait augmenter ce nombre" = the analysts believe / think. Plus nuancé que "affirmer" (conviction forte) ou "déclarer" (officiel).',
        },
        {
          id: 'b1-ac-01-ex08',
          type: 'qcm',
          question: 'Que signifie "prudente" dans "les associations... restent prudentes" ?',
          options: [
            'Elles sont opposées à la réforme',
            'Elles approuvent totalement la réforme',
            'Elles accueillent favorablement mais avec réserve et vigilance',
            'Elles refusent de commenter',
          ],
          correctIndex: 2,
          explanation: '"Rester prudentes" = garder de la prudence, ne pas s\'emballer. Les associations approuvent (elles "saluent") mais gardent une réserve sur l\'application. C\'est une position nuancée : ni totalement pour ni contre.',
        },
        {
          id: 'b1-ac-01-ex09',
          type: 'qcm',
          question: '"Hautement qualifié" dans le contexte de la réforme désigne :',
          options: [
            'Des personnes particulièrement motivées',
            'Des personnes avec un diplôme élevé (master ou équivalent)',
            'Des personnes ayant des compétences manuelles',
            'Des personnes âgées de plus de 40 ans',
          ],
          correctIndex: 1,
          explanation: '"Hautement qualifié" = highly skilled / highly educated. Dans l\'article, cela désigne les personnes "titulaires d\'un diplôme de niveau master ou équivalent." Le terme est souvent utilisé dans les politiques migratoires pour des profils très diplômés.',
        },
        {
          id: 'b1-ac-01-ex10',
          type: 'qcm',
          question: 'De quelle augmentation les analystes estiment-ils que la réforme pourrait être la source ?',
          options: ['5 à 10%', '10 à 15%', '15 à 20%', '25 à 30%'],
          correctIndex: 2,
          explanation: '"Les analystes estiment que cette réforme pourrait augmenter ce nombre de 15 à 20%." Si la France naturalisait 90 000 personnes, cela représenterait 13 500 à 18 000 personnes supplémentaires par an.',
        },
        {
          id: 'b1-ac-01-ex11',
          type: 'qcm',
          question: 'Le mot "avancée" dans "une avancée pour les étrangers" est :',
          options: ['Un participe passé', 'Un nom féminin signifiant un progrès', 'Un adjectif', 'Un verbe à l\'impératif'],
          correctIndex: 1,
          explanation: '"Une avancée" = a step forward / progress. Nom féminin (l\'avancée). À distinguer de "avancé" (adjectif : "un dossier avancé") ou "avancé" (participe passé de "avancer"). "C\'est une avancée" = it\'s progress.',
        },
        {
          id: 'b1-ac-01-ex12',
          type: 'qcm',
          question: '"Prématuré" (l\'élu juge cette mesure "prématurée") signifie :',
          options: [
            'Trop important',
            'Qui vient trop tôt, avant le moment opportun',
            'Qui est insuffisant',
            'Qui est illégal',
          ],
          correctIndex: 1,
          explanation: '"Prématuré" = premature = qui vient trop tôt. "Cette mesure est prématurée" = this measure comes too soon (il faudrait attendre). Antonyme : "tardif" (qui vient trop tard).',
        },
        {
          id: 'b1-ac-01-ex13',
          type: 'qcm',
          question: 'Identifiez la structure du discours rapporté : "Le gouvernement insiste sur le fait que la réforme est très ciblée."',
          options: [
            '"insiste sur le fait que" + subjonctif',
            '"insiste sur le fait que" + indicatif (la réforme EST)',
            '"insiste que" + conditionnel',
            '"insiste que" + imparfait',
          ],
          correctIndex: 1,
          explanation: '"Insiste sur le fait QUE" + indicatif. La certitude (le gouvernement croit que c\'est un fait) → indicatif. "Le gouvernement insiste sur le fait que la réforme EST très ciblée." Quand le verbe introducteur exprime une certitude → indicatif.',
        },
        {
          id: 'b1-ac-01-ex14',
          type: 'qcm',
          question: 'Que signifie "s\'inquiéter d\'un éventuel appel d\'air" ?',
          options: [
            'Se préoccuper d\'un possible afflux migratoire supplémentaire',
            'Craindre les conséquences économiques',
            'S\'opposer à la réforme pour des raisons culturelles',
            'Demander plus d\'informations sur la réforme',
          ],
          correctIndex: 0,
          explanation: '"S\'inquiéter de" = to worry about. "Éventuel" = possible. "S\'inquiéter d\'un éventuel appel d\'air" = craindre que la réforme n\'attire davantage d\'immigrants. C\'est la position des élus de droite dans l\'article.',
        },
        {
          id: 'b1-ac-01-ex15',
          type: 'qcm',
          question: '"Du côté des opposants" dans un article de presse annonce :',
          options: [
            'La conclusion de l\'article',
            'La présentation du point de vue des personnes opposées à la mesure',
            'Une information vérifiée par plusieurs sources',
            'L\'opinion du journaliste',
          ],
          correctIndex: 1,
          explanation: '"Du côté des opposants" = une transition qui va présenter l\'avis des personnes contre la mesure. C\'est une technique journalistique pour équilibrer l\'article (présenter plusieurs points de vue).',
        },
        {
          id: 'b1-ac-01-ex16',
          type: 'qcm',
          question: 'Que signifie "titulaire d\'un diplôme" ?',
          options: [
            'Être en cours de formation',
            'Avoir obtenu officiellement un diplôme',
            'Posséder un diplôme étranger',
            'Préparer un diplôme',
          ],
          correctIndex: 1,
          explanation: '"Être titulaire de" = to hold / to have obtained. "Titulaire d\'un diplôme de niveau master" = having a master\'s degree. On dit aussi "être titulaire d\'un permis de conduire" / "d\'un titre de séjour".',
        },
        {
          id: 'b1-ac-01-ex17',
          type: 'qcm',
          question: 'Quel terme dans l\'article signifie "très limité, restreint" ?',
          options: ['Ciblée', 'Prudente', 'Prématurée', 'Avancée'],
          correctIndex: 0,
          explanation: '"Très CIBLÉE" = very targeted / very specific. Le gouvernement dit que la réforme est "très ciblée" pour signifier qu\'elle ne concerne qu\'un nombre limité de personnes (les très diplômés), contrairement à une réforme générale.',
        },
        {
          id: 'b1-ac-01-ex18',
          type: 'qcm',
          question: 'En journalisme, que signifie "le chapeau" (lead) d\'un article ?',
          options: [
            'La photographie qui illustre l\'article',
            'Le résumé en 1-2 phrases présenté avant le corps de l\'article',
            'La signature du journaliste',
            'La date et le lieu de publication',
          ],
          correctIndex: 1,
          explanation: 'Le chapeau (ou lead) = le résumé court placé juste après le titre, en gras ou en italique. Il répond aux 5 questions : qui? quoi? quand? où? pourquoi? L\'objectif est d\'inciter à lire l\'article complet.',
        },
        {
          id: 'b1-ac-01-ex19',
          type: 'qcm',
          question: 'L\'expression "préserver l\'exigence d\'intégration" signifie :',
          options: [
            'Rendre l\'intégration plus facile',
            'Maintenir des critères stricts d\'intégration malgré la simplification',
            'Supprimer les tests d\'intégration',
            'Aider les étrangers à s\'intégrer',
          ],
          correctIndex: 1,
          explanation: '"Préserver l\'exigence" = maintenir la rigueur/les critères. Le ministre dit qu\'on simplifie la procédure MAIS qu\'on garde les critères d\'intégration (langue, valeurs...). C\'est un message d\'équilibre politique.',
        },
        {
          id: 'b1-ac-01-ex20',
          type: 'qcm',
          question: '"Attirer les talents dont la France a besoin" — quel type de proposition est "dont la France a besoin" ?',
          options: [
            'Proposition relative avec "dont" (remplace "de" + antécédent)',
            'Proposition subordonnée causale',
            'Proposition comparative',
            'Proposition interrogative indirecte',
          ],
          correctIndex: 0,
          explanation: '"Dont" = pronom relatif qui remplace "de + antécédent". "Les talents DONT la France a besoin" = les talents de qui la France a besoin (avoir besoin DE). "Dont" remplace "des talents" dans la proposition "la France a besoin des talents".',
        },
      ],
    },

    {
      id: 'b1-ac-02',
      slug: 'b1-medias-information',
      moduleSlug: 'b1-actualite',
      level: 'B1',
      title: 'Les médias et la circulation de l\'information',
      description: 'Comprenez le paysage médiatique français et développez votre esprit critique face à l\'information.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Le paysage médiatique français

La France dispose d'un paysage médiatique riche et diversifié, qui évolue rapidement avec le numérique.

**La presse écrite** connaît des difficultés depuis la révolution numérique : les ventes de journaux ont chuté de plus de 50% en vingt ans. Cependant, les versions numériques se développent. Les grands quotidiens nationaux — Le Monde, Le Figaro, Libération — maintiennent une influence importante dans le débat public.

**La radio** reste très écoutée en France. Les stations publiques (France Inter, France Culture, France Info) et privées (RTL, Europe 1, BFM Radio) touchent des millions d'auditeurs chaque matin. France Inter est la station la plus écoutée avec plus de 7 millions d'auditeurs quotidiens.

**La télévision** est encore le premier medium d'information pour les Français, en particulier pour les plus âgés. TF1, France 2 et BFM TV dominent l'audience des JT (journaux télévisés). L'arrivée des plateformes de streaming (Netflix, Disney+) a cependant réduit le temps passé devant la télévision.

**Les réseaux sociaux** ont bouleversé l'information. Beaucoup de Français, surtout les jeunes, s'informent via Twitter/X, Instagram ou TikTok. Ce phénomène soulève des questions sur la désinformation et les "fake news".

**Les obligations médiatiques** : en France, les médias audiovisuels sont régulés par l'ARCOM (Autorité de Régulation de la Communication audiovisuelle et numérique), qui veille au pluralisme et à l'équilibre de l'information.`,

      linguisticPoint: `## Point linguistique : Les connecteurs logiques — structurer un texte

### Connecteurs d'addition
- **De plus / En outre / Par ailleurs** : ajouter une information
- **Également / Aussi** : aussi / également
- **Non seulement... mais aussi** : pas seulement X, mais X et Y

### Connecteurs d'opposition / nuance
- **Cependant / Toutefois / Néanmoins** : opposition nuancée (soutenu)
- **En revanche / Par contre** : contraste direct
- **Malgré + nom / Bien que + subj.** : concession

### Connecteurs de cause
- **Car / Parce que / Puisque** : cause directe
- **En raison de + nom** : à cause de (formel)
- **Grâce à + nom** : cause positive
- **À cause de + nom** : cause négative

### Connecteurs de conséquence
- **Donc / Ainsi / Par conséquent** : donc/ainsi
- **C'est pourquoi / C'est la raison pour laquelle** : c\'est pourquoi
- **Si bien que + indicatif** : au point que`,

      keyPoints: [
        'Addition : de plus / en outre / par ailleurs / également / aussi',
        'Opposition : cependant / toutefois / en revanche / néanmoins',
        'Cause : car / puisque / en raison de / grâce à (positif) / à cause de (négatif)',
        'Conséquence : donc / ainsi / c\'est pourquoi / si bien que',
        'ARCOM = régulateur français des médias audiovisuels',
      ],

      exercises: [
        {
          id: 'b1-ac-02-ex01',
          type: 'qcm',
          question: 'Choisissez le connecteur : "Les ventes de journaux ont chuté. ___, les versions numériques se développent."',
          options: ['Donc', 'Car', 'Cependant', 'Ainsi'],
          correctIndex: 2,
          explanation: '"CEPENDANT, les versions numériques se développent." Cependant = connecteur d\'opposition nuancée. On contraste deux informations : les ventes papier baissent MAIS le numérique progresse.',
        },
        {
          id: 'b1-ac-02-ex02',
          type: 'qcm',
          question: 'Que signifie "chuter" dans "les ventes ont chuté de 50%" ?',
          options: ['Augmenter', 'Baisser fortement / tomber', 'Stagner', 'Se stabiliser'],
          correctIndex: 1,
          explanation: '"Chuter" = tomber fortement, baisser de façon importante. "Les ventes ont chuté de 50%" = les ventes ont baissé de moitié. Synonymes : s\'effondrer, dégringoler (familier), décliner.',
        },
        {
          id: 'b1-ac-02-ex03',
          type: 'qcm',
          question: 'Complétez : "France Inter est la station la plus écoutée ___ plus de 7 millions d\'auditeurs."',
          options: ['avec', 'grâce à', 'en raison de', 'car'],
          correctIndex: 0,
          explanation: '"France Inter est la station la plus écoutée AVEC plus de 7 millions d\'auditeurs." "Avec" introduit ici une caractéristique quantitative. À ne pas confondre avec "grâce à" (cause positive) ou "en raison de" (cause).',
        },
        {
          id: 'b1-ac-02-ex04',
          type: 'qcm',
          question: 'ARCOM est :',
          options: [
            'Une chaîne de télévision publique',
            'L\'Autorité de Régulation de la Communication audiovisuelle et numérique',
            'Une association de journalistes',
            'Un syndicat de médias privés',
          ],
          correctIndex: 1,
          explanation: 'ARCOM = Autorité de Régulation de la Communication audiovisuelle et numérique (née de la fusion du CSA et de l\'HADOPI en 2022). Elle régule les médias audiovisuels (TV, radio) et veille au pluralisme et à l\'équilibre de l\'information.',
        },
        {
          id: 'b1-ac-02-ex05',
          type: 'qcm',
          question: 'Connecteur de cause : "Les réseaux sociaux ___ la révolution numérique ont bouleversé l\'information."',
          options: ['grâce à', 'avec', 'en raison de', 'car'],
          correctIndex: 2,
          explanation: '"EN RAISON DE la révolution numérique" = à cause de / en conséquence de. "En raison de" + nom = cause formelle. C\'est plus soutenu que "à cause de".',
        },
        {
          id: 'b1-ac-02-ex06',
          type: 'qcm',
          question: 'Que signifie "bouleverser" dans "les réseaux sociaux ont bouleversé l\'information" ?',
          options: ['Améliorer légèrement', 'Transformer radicalement / perturber profondément', 'Détruire', 'Ignorer'],
          correctIndex: 1,
          explanation: '"Bouleverser" = transform profoundly / shake up. "Les réseaux sociaux ont BOULEVERSÉ l\'information" = ont profondément changé la façon dont l\'information circule. Plus fort que "changer" ou "modifier".',
        },
        {
          id: 'b1-ac-02-ex07',
          type: 'qcm',
          question: '"Le pluralisme" dans "veille au pluralisme" signifie :',
          options: [
            'La diversité des points de vue dans les médias',
            'Le nombre de chaînes de télévision',
            'La liberté de créer des médias',
            'L\'égalité entre journalistes',
          ],
          correctIndex: 0,
          explanation: '"Le pluralisme" = la diversité des opinions et points de vue dans les médias. L\'ARCOM veille à ce qu\'aucun courant politique ne domine les médias audiovisuels. C\'est un principe démocratique fondamental.',
        },
        {
          id: 'b1-ac-02-ex08',
          type: 'qcm',
          question: 'Connecteur de conséquence : "Les plateformes de streaming sont très populaires, ___ le temps devant la télévision a diminué."',
          options: ['cependant', 'c\'est pourquoi', 'en outre', 'en revanche'],
          correctIndex: 1,
          explanation: '"C\'EST POURQUOI le temps devant la télévision a diminué." = That\'s why. Connecteur de conséquence. Les plateformes sont populaires → c\'est pourquoi les gens regardent moins la télé traditionnelle.',
        },
        {
          id: 'b1-ac-02-ex09',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un "JT" à la télévision française ?',
          options: [
            'Journal Technique — informations scientifiques',
            'Journal Télévisé — bulletin d\'information télévisée',
            'Jeu Télévisé — émission de jeux',
            'Jeunesse & Télévision — programmes pour enfants',
          ],
          correctIndex: 1,
          explanation: '"JT" = Journal Télévisé. C\'est le bulletin d\'informations diffusé à heures fixes (13h et 20h principalement). Le "20 heures" (JT de 20h) est l\'émission d\'information la plus regardée en France.',
        },
        {
          id: 'b1-ac-02-ex10',
          type: 'qcm',
          question: 'Connecteur d\'addition soutenu : "France Inter est très écoutée. ___, France Culture attire un public cultivé."',
          options: ['Donc', 'Par ailleurs', 'Car', 'Ainsi'],
          correctIndex: 1,
          explanation: '"PAR AILLEURS, France Culture attire un public cultivé." "Par ailleurs" = additionally / moreover. C\'est un connecteur d\'addition soutenu qui introduit une information complémentaire sur un aspect différent.',
        },
        {
          id: 'b1-ac-02-ex11',
          type: 'qcm',
          question: 'Que soulève l\'information via les réseaux sociaux selon le texte ?',
          options: [
            'Des questions sur la vitesse de diffusion',
            'Des questions sur la désinformation et les "fake news"',
            'Des questions sur la liberté d\'expression',
            'Des questions sur le coût de l\'information',
          ],
          correctIndex: 1,
          explanation: 'Le texte dit : "Ce phénomène soulève des questions sur la désinformation et les \'fake news\'." "Soulever des questions" = to raise questions. Les réseaux sociaux peuvent diffuser des informations fausses très rapidement.',
        },
        {
          id: 'b1-ac-02-ex12',
          type: 'qcm',
          question: '"Non seulement... mais aussi" est un connecteur :',
          options: [
            'D\'opposition',
            'D\'addition (renforcement)',
            'De cause',
            'De conséquence',
          ],
          correctIndex: 1,
          explanation: '"Non seulement X mais aussi Y" = not only X but also Y. C\'est un connecteur d\'addition qui renforce la première information en en ajoutant une seconde. "Non seulement il parle français mais il le parle aussi très bien."',
        },
        {
          id: 'b1-ac-02-ex13',
          type: 'qcm',
          question: 'Quelle est la différence entre "grâce à" et "à cause de" ?',
          options: [
            '"Grâce à" = cause positive / "À cause de" = cause négative',
            'Ils sont synonymes',
            '"À cause de" = formel / "Grâce à" = familier',
            '"Grâce à" = conséquence / "À cause de" = cause',
          ],
          correctIndex: 0,
          explanation: '"GRÂCE À" introduit une cause positive (bonne chose) : "Il a réussi grâce à son travail." "À CAUSE DE" introduit une cause négative (mauvaise chose) : "Il a échoué à cause de sa négligence." La différence est le jugement de valeur.',
        },
        {
          id: 'b1-ac-02-ex14',
          type: 'qcm',
          question: '"Veiller à" dans "l\'ARCOM veille au pluralisme" signifie :',
          options: [
            'Observer passivement',
            'S\'assurer activement que quelque chose est respecté',
            'Interdire',
            'Encourager',
          ],
          correctIndex: 1,
          explanation: '"Veiller à" = to ensure / to watch over. "Veiller au pluralisme" = s\'assurer activement que le pluralisme est respecté. C\'est une mission active, pas passive. Synonymes : surveiller, s\'assurer de, garantir.',
        },
        {
          id: 'b1-ac-02-ex15',
          type: 'qcm',
          question: 'Connecteur : "Les ventes papier baissent. ___, les jeunes lisent de plus en plus en ligne."',
          options: ['En revanche', 'En raison de', 'Grâce à', 'Car'],
          correctIndex: 0,
          explanation: '"EN REVANCHE, les jeunes lisent de plus en plus en ligne." "En revanche" = par contre = connecteur de contraste. On oppose deux aspects : ventes papier baissent ≠ lecture en ligne augmente.',
        },
        {
          id: 'b1-ac-02-ex16',
          type: 'qcm',
          question: 'Qui régule les médias audiovisuels en France ?',
          options: ['Le CSA (disparu)', 'L\'ARCOM', 'Le gouvernement', 'L\'Élysée'],
          correctIndex: 1,
          explanation: 'L\'ARCOM (depuis 2022, fusion du CSA et de l\'HADOPI) régule les médias audiovisuels. Le CSA (Conseil Supérieur de l\'Audiovisuel) existait avant 2022.',
        },
        {
          id: 'b1-ac-02-ex17',
          type: 'qcm',
          question: '"Si bien que" introduit :',
          options: ['Une cause', 'Une conséquence', 'Une opposition', 'Une addition'],
          correctIndex: 1,
          explanation: '"Si bien que" = so much so that = tellement que = connecteur de conséquence. "Il a travaillé dur, SI BIEN QUE il a réussi" = he worked so hard that he succeeded. Synonymes : "au point que" / "à tel point que".',
        },
        {
          id: 'b1-ac-02-ex18',
          type: 'qcm',
          question: 'Qu\'est-ce que la "désinformation" ?',
          options: [
            'Informations incomplètes',
            'Diffusion délibérée d\'informations fausses pour manipuler',
            'Informations diffusées trop lentement',
            'Informations trop techniques',
          ],
          correctIndex: 1,
          explanation: '"Désinformation" = deliberate disinformation. La diffusion intentionnelle de fausses informations pour manipuler l\'opinion publique. Différent de "mésinformation" (fausse info diffusée sans intention malveillante). Les "fake news" relèvent souvent de la désinformation.',
        },
        {
          id: 'b1-ac-02-ex19',
          type: 'qcm',
          question: 'Quelle est la chaîne d\'information en continu la plus regardée en France ?',
          options: ['France 2', 'TF1', 'BFM TV', 'Arte'],
          correctIndex: 2,
          explanation: 'BFM TV est la chaîne d\'information en continu (24/24) la plus regardée en France. Elle diffuse des informations en permanence, avec des débats et des plateaux. France 2 et TF1 sont des généralistes avec des JT à heures fixes.',
        },
        {
          id: 'b1-ac-02-ex20',
          type: 'qcm',
          question: 'Connecteur de cause : "Les ventes chutent ___ l\'essor du numérique."',
          options: ['grâce à', 'en raison de', 'donc', 'ainsi'],
          correctIndex: 1,
          explanation: '"EN RAISON DE l\'essor du numérique." = because of / due to. L\'essor du numérique est la cause de la chute des ventes — c\'est une cause négative pour les ventes papier. "Grâce à" serait inapproprié ici (cause positive).',
        },
      ],
    },

    {
      id: 'b1-ac-03',
      slug: 'b1-evenements-actualite',
      moduleSlug: 'b1-actualite',
      level: 'B1',
      title: 'Événements politiques et sociaux',
      description: 'Comprenez et commentez les grands événements politiques, économiques et sociaux français.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Les grandes manifestations en France

La France est connue pour sa tradition de contestation sociale. Les Français descendent régulièrement dans la rue pour exprimer leur mécontentement face aux réformes gouvernementales.

**Le mouvement des Gilets jaunes** (2018-2019) est l'un des plus emblématiques de ces dernières années. Né d'une opposition à la hausse des taxes sur le carburant, il a rapidement évolué en une contestation plus large contre les inégalités sociales et la politique économique du gouvernement Macron. Chaque samedi, des milliers de manifestants se retrouvaient sur les ronds-points et dans les centres-villes. Le mouvement a conduit à plusieurs concessions gouvernementales, dont la création du Grand Débat National.

**Les réformes des retraites** suscitent régulièrement de fortes mobilisations. En 2023, la réforme repoussant l'âge légal de départ à la retraite de 62 à 64 ans a provoqué des grèves massives et des manifestations réunissant plus d'un million de personnes selon les syndicats. Le gouvernement a finalement utilisé l'article 49.3 de la Constitution pour adopter la réforme sans vote de l'Assemblée nationale.

**Le droit de grève** est un droit constitutionnel en France. Les syndicats — CGT, CFDT, FO, etc. — jouent un rôle majeur dans la vie sociale française. Les préavis de grève dans les transports permettent aux usagers de s'organiser.`,

      linguisticPoint: `## Point linguistique : Le subjonctif — introduction et emplois principaux

### Quand utiliser le subjonctif ?
1. **Après des verbes de volonté/désir** : vouloir que / souhaiter que / exiger que
2. **Après des verbes de sentiment** : être content que / avoir peur que / regretter que
3. **Après des expressions impersonnelles** : il faut que / il est important que / il est possible que
4. **Après des conjonctions** : bien que / pour que / avant que / à moins que

### Formation du subjonctif présent
**Radical** = 3ème pluriel du présent (ils) + terminaisons -e/-es/-e/-ions/-iez/-ent
| Verbe | "Ils" présent | Subjonctif (je) |
|---|---|---|
| parler | ils parl-ent | que je parle |
| finir | ils finiss-ent | que je finisse |
| prendre | ils prenn-ent | que je prenne |
| venir | ils vienn-ent | que je vienne |

### Subjonctifs irréguliers (à mémoriser)
| Être | Avoir | Aller | Pouvoir | Vouloir | Savoir |
|---|---|---|---|---|---|
| que je **sois** | que j\'**aie** | que j\'**aille** | que je **puisse** | que je **veuille** | que je **sache** |`,

      keyPoints: [
        'Subjonctif après : vouloir que / il faut que / bien que / pour que / avant que',
        'Formation : radical "ils" du présent + -e/-es/-e/-ions/-iez/-ent',
        'Irréguliers : être (sois) / avoir (aie) / aller (aille) / pouvoir (puisse)',
        '49.3 = article constitutionnel permettant d\'adopter une loi sans vote',
        'Gilets jaunes (2018-2019) = contestation sociale majeure anti-inégalités',
      ],

      exercises: [
        {
          id: 'b1-ac-03-ex01',
          type: 'qcm',
          question: 'Complétez avec le subjonctif : "Il faut que tu ___ ce document." (lire)',
          options: ['lises', 'lis', 'lira', 'lirais'],
          correctIndex: 0,
          explanation: '"Il faut que tu LISES ce document." "Il faut que" + subjonctif. "Lire" au subjonctif : ils lisent → radical "lis-" + terminaison "-es" (tu) = "lises".',
        },
        {
          id: 'b1-ac-03-ex02',
          type: 'qcm',
          question: 'Qu\'est-ce que le mouvement des Gilets jaunes ?',
          options: [
            'Un parti politique créé en 2018',
            'Un mouvement social né contre la hausse des taxes sur le carburant, qui a évolué en contestation des inégalités',
            'Un syndicat de travailleurs du pétrole',
            'Un mouvement écologiste contre la voiture',
          ],
          correctIndex: 1,
          explanation: 'Le texte dit : "Né d\'une opposition à la hausse des taxes sur le carburant, il a rapidement évolué en une contestation plus large contre les inégalités sociales et la politique économique." Le symbole : les gilets de sécurité jaunes portés par les manifestants.',
        },
        {
          id: 'b1-ac-03-ex03',
          type: 'qcm',
          question: 'Subjonctif après "bien que" : "Bien que la réforme ___ adoptée, la contestation continue." (être)',
          options: ['est', 'soit', 'était', 'sera'],
          correctIndex: 1,
          explanation: '"Bien que la réforme SOIT adoptée." "Bien que" = connecteur de concession → subjonctif obligatoire. Subjonctif de "être" = "soit" (irrégulier). "Bien que X soit Y" = although X is Y.',
        },
        {
          id: 'b1-ac-03-ex04',
          type: 'qcm',
          question: 'Qu\'est-ce que l\'article 49.3 de la Constitution ?',
          options: [
            'L\'article qui garantit le droit de grève',
            'L\'article qui permet au gouvernement d\'adopter une loi sans vote de l\'Assemblée',
            'L\'article qui permet au Président de dissoudre l\'Assemblée',
            'L\'article qui protège la liberté de la presse',
          ],
          correctIndex: 1,
          explanation: 'L\'article 49.3 de la Constitution française permet au gouvernement d\'adopter un texte de loi sans vote de l\'Assemblée nationale (procédure d\'engagement de responsabilité). Il peut être bloqué par une motion de censure. Son utilisation est souvent perçue comme anti-démocratique.',
        },
        {
          id: 'b1-ac-03-ex05',
          type: 'qcm',
          question: 'Subjonctif : "Le gouvernement exige que les manifestants ___ la rue." (quitter)',
          options: ['quittent', 'quittaient', 'ont quitté', 'quitter'],
          correctIndex: 0,
          explanation: '"Le gouvernement exige que les manifestants QUITTENT la rue." "Exiger que" + subjonctif. "Quitter" au subjonctif : ils quittent → radical "quitt-" + "-ent" (ils/elles) = "quittent".',
        },
        {
          id: 'b1-ac-03-ex06',
          type: 'qcm',
          question: 'Quel est le rôle des syndicats dans les grèves ?',
          options: [
            'Ils organisent les grèves et déposent les préavis',
            'Ils négocient directement les lois au Parlement',
            'Ils remplacent les travailleurs en grève',
            'Ils financent les grévistes',
          ],
          correctIndex: 0,
          explanation: 'En France, les syndicats (CGT, CFDT, FO...) organisent les grèves et déposent des "préavis de grève" (notice obligatoire avant une grève dans les services publics). Ils négocient aussi avec le patronat et le gouvernement.',
        },
        {
          id: 'b1-ac-03-ex07',
          type: 'qcm',
          question: 'Subjonctif après "pour que" : "Le gouvernement fait des concessions pour que le mouvement ___ fin." (prendre)',
          options: ['prend', 'prenne', 'prendra', 'prenait'],
          correctIndex: 1,
          explanation: '"Pour que le mouvement PRENNE fin." "Pour que" + subjonctif. "Prendre" au subjonctif : ils prennent → radical "prenn-" + "-e" (il/elle) = "prenne".',
        },
        {
          id: 'b1-ac-03-ex08',
          type: 'qcm',
          question: 'À quel âge a été repoussée la retraite légale par la réforme de 2023 ?',
          options: ['60 ans', '62 ans', '64 ans', '67 ans'],
          correctIndex: 2,
          explanation: 'Le texte dit : "la réforme repoussant l\'âge légal de départ à la retraite de 62 à 64 ans." La réforme des retraites de 2023, très contestée, a relevé l\'âge de départ de 62 à 64 ans.',
        },
        {
          id: 'b1-ac-03-ex09',
          type: 'qcm',
          question: 'Subjonctif irrégulier : "Il est important que vous ___ la vérité." (savoir)',
          options: ['savez', 'sachiez', 'sauriez', 'saurez'],
          correctIndex: 1,
          explanation: '"Il est important que vous SACHIEZ la vérité." Subjonctif irrégulier de "savoir" : je sache / tu saches / il sache / nous sachions / vous SACHIEZ / ils sachent.',
        },
        {
          id: 'b1-ac-03-ex10',
          type: 'qcm',
          question: 'Le "Grand Débat National" lancé après les Gilets jaunes était :',
          options: [
            'Un référendum national',
            'Une consultation citoyenne organisée par le gouvernement pour répondre à la crise',
            'Un programme de télévision politique',
            'Une commission parlementaire',
          ],
          correctIndex: 1,
          explanation: 'Le Grand Débat National (janvier-mars 2019) = consultation citoyenne (en ligne et en réunions) organisée par le gouvernement Macron en réponse aux Gilets jaunes. Des millions de Français y ont participé pour exprimer leurs besoins et attentes.',
        },
        {
          id: 'b1-ac-03-ex11',
          type: 'qcm',
          question: 'Subjonctif : "Je suis content que tu ___ avec nous." (venir)',
          options: ['viens', 'venais', 'viennes', 'viendras'],
          correctIndex: 2,
          explanation: '"Je suis content que tu VIENNES avec nous." "Être content que" + subjonctif. "Venir" au subjonctif : ils viennent → radical "vienn-" + "-es" (tu) = "viennes".',
        },
        {
          id: 'b1-ac-03-ex12',
          type: 'qcm',
          question: 'Que signifie "susciter" dans "les réformes suscitent des mobilisations" ?',
          options: ['Supprimer', 'Provoquer / soulever / générer', 'Calmer', 'Accompagner'],
          correctIndex: 1,
          explanation: '"Susciter" = provoquer, générer, soulever. "Susciter des mobilisations" = provoquer des mobilisations. Synonymes en contexte : déclencher, provoquer, générer. C\'est un verbe soutenu.',
        },
        {
          id: 'b1-ac-03-ex13',
          type: 'qcm',
          question: 'Subjonctif : "Avant que la grève ___, nous devons trouver un accord." (commencer)',
          options: ['commence', 'commencera', 'commençait', 'a commencé'],
          correctIndex: 0,
          explanation: '"Avant que la grève COMMENCE." "Avant que" + subjonctif. "Commencer" au subjonctif : ils commencent → radical "commenc-" + "-e" (il) = "commence".',
        },
        {
          id: 'b1-ac-03-ex14',
          type: 'qcm',
          question: '"Se retrouver sur les ronds-points" — que symbolisaient les ronds-points pour les Gilets jaunes ?',
          options: [
            'Des points de vente de produits locaux',
            'Des lieux de rassemblement, de blocage et de vie communautaire du mouvement',
            'Des zones de stationnement',
            'Des points de distribution d\'aide alimentaire',
          ],
          correctIndex: 1,
          explanation: 'Les ronds-points sont devenus les symboles du mouvement des Gilets jaunes : lieux de rassemblement (souvent bloqués), de rencontres entre manifestants, de vie communautaire (feux, cuisines improvisées). Présents dans toutes les régions de France.',
        },
        {
          id: 'b1-ac-03-ex15',
          type: 'qcm',
          question: 'Subjonctif irrégulier : "Il faut que j\'___ au travail à temps." (aller)',
          options: ['aille', 'vais', 'irai', 'allais'],
          correctIndex: 0,
          explanation: '"Il faut que j\'AILLE au travail à temps." Subjonctif irrégulier d\'"aller" : que j\'aille / que tu ailles / qu\'il aille / que nous allions / que vous alliez / qu\'ils aillent.',
        },
        {
          id: 'b1-ac-03-ex16',
          type: 'qcm',
          question: 'Que sont les "préavis de grève" ?',
          options: [
            'Des sanctions contre les grévistes',
            'Des notifications officielles déposées avant une grève (obligatoires dans les services publics)',
            'Des indemnités versées aux grévistes',
            'Des bulletins de vote pour autoriser une grève',
          ],
          correctIndex: 1,
          explanation: 'Un préavis de grève = une notification déposée par le syndicat auprès de l\'employeur, obligatoire 5 jours avant le début d\'une grève dans les services publics. Cela permet aux usagers de s\'organiser (ex : prévoir un autre moyen de transport).',
        },
        {
          id: 'b1-ac-03-ex17',
          type: 'qcm',
          question: 'Subjonctif : "J\'ai peur qu\'ils ne ___ pas venir." (pouvoir)',
          options: ['peuvent', 'puissent', 'pourraient', 'pourront'],
          correctIndex: 1,
          explanation: '"J\'ai peur qu\'ils ne PUISSENT pas venir." "Avoir peur que" + subjonctif. Subjonctif irrégulier de "pouvoir" : je puisse / tu puisses / il puisse / nous puissions / vous puissiez / ils PUISSENT.',
        },
        {
          id: 'b1-ac-03-ex18',
          type: 'qcm',
          question: 'Que signifie "le mécontentement" ?',
          options: ['La satisfaction', 'L\'insatisfaction / le fait d\'être mécontent', 'La colère violente', 'La grève'],
          correctIndex: 1,
          explanation: '"Le mécontentement" = discontent / dissatisfaction. Nom dérivé de "mécontent" (= pas content). "Exprimer leur mécontentement" = exprimer qu\'ils ne sont pas satisfaits d\'une situation ou d\'une réforme.',
        },
        {
          id: 'b1-ac-03-ex19',
          type: 'qcm',
          question: 'Subjonctif : "La loi a été adoptée sans que l\'Assemblée ___ voter." (pouvoir)',
          options: ['peut', 'puisse', 'pourrait', 'pouvait'],
          correctIndex: 1,
          explanation: '"Sans que l\'Assemblée PUISSE voter." "Sans que" + subjonctif. Subjonctif irrégulier de "pouvoir" : "puisse". "Sans que" + subjonctif = without the Assembly being able to vote.',
        },
        {
          id: 'b1-ac-03-ex20',
          type: 'qcm',
          question: 'Quelle est la signification du droit de grève en France ?',
          options: [
            'Un droit accordé par le gouvernement en 2023',
            'Un droit constitutionnel garanti par la Constitution française',
            'Un droit syndical non garanti par la Constitution',
            'Un droit limité aux fonctionnaires',
          ],
          correctIndex: 1,
          explanation: 'Le droit de grève est inscrit dans le préambule de la Constitution de 1946 (intégré à la Constitution de 1958). C\'est un droit constitutionnel fondamental pour tous les travailleurs (avec quelques limitations dans certains services essentiels).',
        },
      ],
    },

    {
      id: 'b1-ac-04',
      slug: 'b1-debat-societaux',
      moduleSlug: 'b1-actualite',
      level: 'B1',
      title: 'Grands débats de société',
      description: 'Comprenez et participez aux grands débats qui animent la société française — identité, laïcité, écologie.',
      duration: 12,
      free: false,
      dialogue: `## Texte : La laïcité — un pilier de la République française

La laïcité est l'un des principes fondamentaux de la République française, inscrite dans la loi de 1905 sur la séparation des Églises et de l'État. Ce principe garantit la liberté de conscience et la neutralité de l'État en matière religieuse.

**Qu'est-ce que la laïcité en pratique ?**

Dans les services publics (écoles, hôpitaux, mairies...), les agents de l'État ne peuvent pas afficher leurs convictions religieuses pendant leur service. Les élèves des écoles publiques ne peuvent pas porter de signes religieux ostentatoires depuis la loi de 2004. Ce principe vise à assurer l'égalité de tous les citoyens, quelle que soit leur religion.

**Les débats autour de la laïcité**

La laïcité fait l'objet de nombreux débats en France. Certains estiment que son application est trop restrictive et porte atteinte à la liberté religieuse. D'autres pensent au contraire qu'elle n'est pas assez appliquée et que certains accommodements religieux menacent la cohésion nationale.

**La laïcité et les étrangers**

Pour les candidats à la naturalisation, la compréhension et l'adhésion aux valeurs laïques est évaluée lors de l'entretien. Il ne s'agit pas d'abandonner ses croyances personnelles — la laïcité garantit justement la liberté de conscience — mais d'accepter que l'espace public commun soit neutre.`,

      linguisticPoint: `## Point linguistique : Le subjonctif après certaines conjonctions et le conditionnel dans le débat

### Conjonctions + subjonctif (les plus utiles)
| Conjonction | Sens | Exemple |
|---|---|---|
| **bien que** | although | Bien qu\'il **soit** difficile... |
| **pour que** | so that / in order that | Pour que chacun **puisse**... |
| **avant que** | before | Avant que la loi **entre** en vigueur |
| **à moins que** | unless | À moins qu\'il **y ait** une exception |
| **quoique** | although | Quoique ce **soit** complexe |
| **de peur que** | for fear that | De peur que cela ne **devienne**... |

### Le conditionnel pour nuancer un débat
- "Certains **estiment** que..." (discours rapporté)
- "D\'autres **pensent** au contraire que..." (contraste)
- "Il **semblerait** que..." (information non certaine)
- "Ce principe **viserait** à..." (info rapportée)
- "On **pourrait** dire que..." (opinion prudente)`,

      keyPoints: [
        'Laïcité = séparation État/Église (loi 1905) / neutralité religieuse de l\'État',
        'Signes religieux ostentatoires interdits à l\'école publique depuis 2004',
        'Subjonctif après : bien que / pour que / avant que / à moins que',
        'Conditionnel pour nuancer : "il semblerait que" / "on pourrait dire"',
        'Adhérer à la laïcité ≠ abandonner ses croyances (liberté de conscience garantie)',
      ],

      exercises: [
        {
          id: 'b1-ac-04-ex01',
          type: 'qcm',
          question: 'La laïcité en France est fondée sur :',
          options: [
            'La Constitution de 1958 uniquement',
            'La loi de 1905 sur la séparation des Églises et de l\'État',
            'La Révolution française de 1789',
            'Une directive européenne',
          ],
          correctIndex: 1,
          explanation: 'La loi du 9 décembre 1905 sur la Séparation des Églises et de l\'État est le fondement juridique de la laïcité française. Elle garantit la liberté de conscience et la neutralité de l\'État en matière religieuse.',
        },
        {
          id: 'b1-ac-04-ex02',
          type: 'qcm',
          question: 'Subjonctif : "La loi a été adoptée bien que certains ___ opposés." (être)',
          options: ['sont', 'soient', 'seront', 'étaient'],
          correctIndex: 1,
          explanation: '"Bien que certains SOIENT opposés." "Bien que" + subjonctif. Subjonctif irrégulier d\'"être" : "soient" (ils/elles). "Bien que" = although = concession.',
        },
        {
          id: 'b1-ac-04-ex03',
          type: 'qcm',
          question: 'Que signifie un "signe religieux ostentatoire" ?',
          options: [
            'Un signe religieux petit et discret',
            'Un signe religieux visible et manifeste, qui s\'impose au regard des autres',
            'Tout signe religieux quelle que soit sa taille',
            'Un signe religieux étranger à la France',
          ],
          correctIndex: 1,
          explanation: '"Ostentatoire" = showy / conspicuous = visible, manifeste, qui attire l\'attention. Le foulard islamique, la grande croix, le kippa et le turban sikh sont considérés comme des signes ostentatoires. Ils sont interdits dans les écoles publiques depuis la loi de 2004.',
        },
        {
          id: 'b1-ac-04-ex04',
          type: 'qcm',
          question: 'Subjonctif : "Pour que la laïcité ___ comprise, il faut l\'expliquer." (être)',
          options: ['soit', 'est', 'sera', 'serait'],
          correctIndex: 0,
          explanation: '"Pour que la laïcité SOIT comprise." "Pour que" + subjonctif. Subjonctif de "être" = "soit". "Pour que X soit Y" = so that X is Y.',
        },
        {
          id: 'b1-ac-04-ex05',
          type: 'qcm',
          question: '"Porter atteinte à" signifie :',
          options: ['Renforcer', 'Nuire à / porter préjudice à', 'Respecter', 'Ignorer'],
          correctIndex: 1,
          explanation: '"Porter atteinte à" = to infringe upon / to harm. "Porter atteinte à la liberté religieuse" = nuire à la liberté religieuse. Expression juridique et journalistique fréquente.',
        },
        {
          id: 'b1-ac-04-ex06',
          type: 'qcm',
          question: 'La laïcité interdit-elle aux fonctionnaires d\'avoir des croyances religieuses ?',
          options: [
            'Oui, les fonctionnaires doivent être athées',
            'Non, elle exige seulement la neutralité dans l\'exercice de leurs fonctions',
            'Oui, pour les fonctionnaires dans les contacts avec le public',
            'Seulement dans les écoles et les hôpitaux',
          ],
          correctIndex: 1,
          explanation: 'La laïcité n\'interdit pas aux fonctionnaires d\'avoir des convictions religieuses. Elle exige qu\'ils ne les expriment pas pendant leur service (neutralité). Dans leur vie privée, ils sont libres de pratiquer leur religion.',
        },
        {
          id: 'b1-ac-04-ex07',
          type: 'qcm',
          question: 'Subjonctif après "à moins que" : "___ il ___ une exception, la règle s\'applique." (y avoir)',
          options: [
            'À moins qu\'il y a une exception',
            'À moins qu\'il y ait une exception',
            'À moins qu\'il y avait une exception',
            'À moins qu\'il y aura une exception',
          ],
          correctIndex: 1,
          explanation: '"À moins qu\'il y AIT une exception." "À moins que" + subjonctif. "Il y a" → subjonctif = "il y ait". "À moins que" = unless.',
        },
        {
          id: 'b1-ac-04-ex08',
          type: 'qcm',
          question: 'Que signifie "la cohésion nationale" ?',
          options: [
            'L\'unité et la solidarité entre les membres d\'une nation',
            'L\'armée nationale',
            'Le sentiment nationaliste',
            'L\'économie nationale',
          ],
          correctIndex: 0,
          explanation: '"La cohésion nationale" = national cohesion = le fait que les membres d\'une nation vivent ensemble de façon harmonieuse, partagent des valeurs communes et se sentent unis malgré leurs différences.',
        },
        {
          id: 'b1-ac-04-ex09',
          type: 'qcm',
          question: 'Nuancer avec le conditionnel : "Ce principe ___ à assurer l\'égalité." (viser)',
          options: ['vise', 'visera', 'viserait', 'visait'],
          correctIndex: 2,
          explanation: '"Ce principe VISERAIT à assurer l\'égalité." Conditionnel pour rapporter une information avec nuance ou prudence. On peut dire que la laïcité vise à l\'égalité — mais le conditionnel indique que c\'est une interprétation possible, pas une vérité absolue.',
        },
        {
          id: 'b1-ac-04-ex10',
          type: 'qcm',
          question: 'La "liberté de conscience" garantie par la laïcité signifie :',
          options: [
            'Le droit de critiquer publiquement la religion',
            'Le droit d\'avoir ses propres croyances (ou absence de croyance) sans coercition',
            'L\'obligation d\'être athée dans l\'espace public',
            'Le droit d\'imposer sa religion aux autres',
          ],
          correctIndex: 1,
          explanation: '"La liberté de conscience" = freedom of thought / freedom of belief. Le droit de croire ou de ne pas croire, sans pression ni contrainte. La laïcité protège les croyants ET les non-croyants en ne favorisant aucune religion.',
        },
        {
          id: 'b1-ac-04-ex11',
          type: 'qcm',
          question: 'Subjonctif : "Il faut que chacun ___ respecter les règles." (pouvoir)',
          options: ['peut', 'pourrait', 'puisse', 'pouvait'],
          correctIndex: 2,
          explanation: '"Il faut que chacun PUISSE respecter les règles." "Il faut que" + subjonctif. Subjonctif irrégulier de "pouvoir" : "puisse".',
        },
        {
          id: 'b1-ac-04-ex12',
          type: 'qcm',
          question: '"L\'adhésion aux valeurs laïques" lors de la naturalisation signifie :',
          options: [
            'Abandonner sa religion',
            'Accepter les principes laïques comme valeur de la vie publique française',
            'Signer un document contre la religion',
            'Prouver qu\'on ne pratique aucune religion',
          ],
          correctIndex: 1,
          explanation: 'L\'adhésion à la laïcité = accepter que l\'espace public soit neutre et que l\'État ne favorise aucune religion. Ce n\'est PAS l\'abandon de ses croyances personnelles, que la laïcité protège par la liberté de conscience.',
        },
        {
          id: 'b1-ac-04-ex13',
          type: 'qcm',
          question: 'Subjonctif après "de peur que" : "Il hésite de peur que la démarche ___ trop longue." (être)',
          options: ['est', 'sera', 'soit', 'étant'],
          correctIndex: 2,
          explanation: '"De peur que la démarche SOIT trop longue." "De peur que" + subjonctif. "Être" au subjonctif = "soit". "De peur que" = for fear that.',
        },
        {
          id: 'b1-ac-04-ex14',
          type: 'qcm',
          question: 'Que signifie "la neutralité" de l\'État en matière religieuse ?',
          options: [
            'L\'État ne prend pas position en faveur d\'une religion particulière',
            'L\'État est contre toutes les religions',
            'L\'État encourage toutes les religions',
            'L\'État ne parle jamais de religion',
          ],
          correctIndex: 0,
          explanation: 'La neutralité = ne pas prendre parti. "La neutralité de l\'État en matière religieuse" = l\'État ne favorise, ne finance ni ne défavorise aucune religion. Il traite toutes les croyances de façon égale.',
        },
        {
          id: 'b1-ac-04-ex15',
          type: 'qcm',
          question: '"Les accommodements religieux" dans le texte désigne :',
          options: [
            'Des adaptations accordées à des personnes pour faciliter la pratique religieuse',
            'Des hôtels réservés aux religieux',
            'Des subventions pour les lieux de culte',
            'Des calendriers religieux publiés par l\'État',
          ],
          correctIndex: 0,
          explanation: '"Accommodements religieux" = religious accommodations. Des adaptations ou exceptions accordées pour faciliter la pratique religieuse (menus halal/kasher, absence pour fêtes religieuses...). Le débat : jusqu\'où l\'État peut-il aller dans ces accommodements sans compromettre la laïcité ?',
        },
        {
          id: 'b1-ac-04-ex16',
          type: 'qcm',
          question: 'Subjonctif : "Je veux que tu ___ cette valeur." (comprendre)',
          options: ['comprends', 'comprendes', 'comprendra', 'comprendras'],
          correctIndex: 1,
          explanation: '"Je veux que tu COMPRENNES cette valeur." "Vouloir que" + subjonctif. "Comprendre" au subjonctif : ils comprennent → radical "comprenn-" + "-es" (tu) = "comprennes".',
        },
        {
          id: 'b1-ac-04-ex17',
          type: 'qcm',
          question: 'Opinion prudente avec le conditionnel : "Il ___ que la loi soit modifiée." (sembler)',
          options: ['semble', 'semblait', 'semblerait', 'semblera'],
          correctIndex: 2,
          explanation: '"Il SEMBLERAIT que la loi soit modifiée." "Il semblerait que" + subjonctif = expression d\'une information non certaine, prudente. Très utilisé dans les débats journalistiques et politiques pour ne pas affirmer quelque chose avec certitude.',
        },
        {
          id: 'b1-ac-04-ex18',
          type: 'qcm',
          question: 'La loi sur l\'interdiction des signes religieux à l\'école date de :',
          options: ['1789', '1905', '2004', '2022'],
          correctIndex: 2,
          explanation: 'La loi du 15 mars 2004 interdit le port de signes religieux ostentatoires dans les écoles, collèges et lycées publics. Elle s\'applique aux élèves (pas aux parents ni aux visiteurs). Elle concerne voile islamique, grande croix, kippa, turban.',
        },
        {
          id: 'b1-ac-04-ex19',
          type: 'qcm',
          question: 'Subjonctif après "quoique" : "Quoique la question ___ complexe, nous devons en parler." (être)',
          options: ['est', 'soit', 'sera', 'était'],
          correctIndex: 1,
          explanation: '"Quoique la question SOIT complexe." "Quoique" = bien que + subjonctif. "Quoique" est plus soutenu que "bien que" mais a le même sens et la même construction.',
        },
        {
          id: 'b1-ac-04-ex20',
          type: 'qcm',
          question: 'L\'évaluation de l\'adhésion aux valeurs laïques lors de l\'entretien de naturalisation vise à :',
          options: [
            'Exclure les candidats religieux',
            'Vérifier que le candidat comprend et accepte la neutralité de l\'espace public',
            'Tester les connaissances historiques sur la loi de 1905',
            'Évaluer la pratique religieuse du candidat',
          ],
          correctIndex: 1,
          explanation: 'L\'entretien de naturalisation évalue la compréhension et l\'adhésion aux valeurs républicaines dont la laïcité. Il ne s\'agit pas d\'être athée mais d\'accepter le principe de neutralité de l\'espace public. Ce n\'est pas une évaluation de la pratique religieuse privée.',
        },
      ],
    },

    {
      id: 'b1-ac-05',
      slug: 'b1-economie-francaise',
      moduleSlug: 'b1-actualite',
      level: 'B1',
      title: 'L\'économie française en bref',
      description: 'Comprenez les bases de l\'économie française, du marché du travail et des questions sociales.',
      duration: 12,
      free: false,
      dialogue: `## Texte : L'économie française — points clés

La France est la 7ème puissance économique mondiale et la 2ème de l'Union européenne. Son économie est mixte, avec un secteur public important et un secteur privé dynamique.

**Les piliers de l'économie française :**

Le **tourisme** est le premier secteur en termes d'attractivité : la France est la première destination touristique mondiale avec plus de 90 millions de visiteurs par an. Le secteur représente environ 8% du PIB.

Le **luxe** est un secteur d'excellence français à l'international : LVMH (Louis Vuitton, Dior, Givenchy...), Hermès, L'Oréal, Chanel sont des marques françaises reconnues mondialement.

L'**industrie automobile** (Renault, Peugeot-Stellantis) et l'**aéronautique** (Airbus, à Toulouse) sont également des secteurs clés.

**Les défis économiques :**

La France fait face à un taux de chômage structurellement élevé (autour de 7%), particulièrement touché chez les jeunes (15-25 ans). La dette publique dépasse 110% du PIB, ce qui préoccupe les institutions européennes.

**Le SMIC et les salaires :**

Le SMIC (Salaire Minimum Interprofessionnel de Croissance) est revalorisé régulièrement — il s'élevait à environ 1 766€ brut/mois en 2024. En France, environ 17% des salariés sont payés au SMIC.`,

      linguisticPoint: `## Point linguistique : Les chiffres, pourcentages et données statistiques

### Exprimer des données chiffrées
- "La France représente **environ** 8% du PIB touristique"
- "Le chômage atteint **autour de** 7%"
- "**Plus de** 90 millions de visiteurs"
- "**Moins de** 20% des salariés"
- "**Près de** 110% du PIB"

### Vocabulaire économique essentiel
- **PIB** (Produit Intérieur Brut) = GDP
- **La dette publique** = national debt
- **Le taux de chômage** = unemployment rate
- **Les salariés** = employees (with work contract)
- **Brut / Net** : salaire brut = avant cotisations / net = ce qu\'on reçoit
- **Se revaloriser** = augmenter (pour les salaires/prestations)
- **L\'attractivité** = l\'attrait, la capacité d\'attirer

### Articuler une présentation de données
1. "La France **occupe** le rang de..."
2. "Ce secteur **représente** X% du..."
3. "**En termes de** volume/valeur..."
4. "Le taux **s\'établit** à / **atteint** X%"`,

      keyPoints: [
        'PIB = Produit Intérieur Brut (mesure de l\'activité économique)',
        'SMIC 2024 ≈ 1766€ brut / mois (environ 17% des salariés)',
        'Chômage France ≈ 7% / plus touché : jeunes 15-25 ans',
        'Tourisme = 1ère destination mondiale (90M visiteurs/an) = 8% PIB',
        'Luxe français = LVMH / Hermès / L\'Oréal / Chanel',
      ],

      exercises: [
        {
          id: 'b1-ac-05-ex01',
          type: 'qcm',
          question: 'Quelle est la place de la France dans l\'économie mondiale ?',
          options: ['3ème', '5ème', '7ème', '10ème'],
          correctIndex: 2,
          explanation: 'Le texte dit : "La France est la 7ème puissance économique mondiale et la 2ème de l\'Union européenne." (après l\'Allemagne).',
        },
        {
          id: 'b1-ac-05-ex02',
          type: 'qcm',
          question: '"Environ" signifie :',
          options: ['Exactement', 'Approximativement / à peu près', 'Moins de', 'Plus de'],
          correctIndex: 1,
          explanation: '"Environ" = approximately / around. "Environ 8% du PIB" = approximativement 8%. Synonymes : à peu près / autour de / près de. Indispensable pour exprimer des données chiffrées avec précaution.',
        },
        {
          id: 'b1-ac-05-ex03',
          type: 'qcm',
          question: 'Que signifie "PIB" ?',
          options: [
            'Produit Industriel Brut',
            'Produit Intérieur Brut',
            'Plan d\'Investissement Bancaire',
            'Prix Indicatif de Base',
          ],
          correctIndex: 1,
          explanation: 'PIB = Produit Intérieur Brut = GDP (Gross Domestic Product). C\'est la valeur totale des biens et services produits dans un pays en une année. C\'est l\'indicateur principal de la taille d\'une économie.',
        },
        {
          id: 'b1-ac-05-ex04',
          type: 'qcm',
          question: 'Combien de visiteurs la France accueille-t-elle par an ?',
          options: ['50 millions', '70 millions', '90 millions', '120 millions'],
          correctIndex: 2,
          explanation: '"La France est la première destination touristique mondiale avec plus de 90 millions de visiteurs par an." La France est régulièrement en tête du classement mondial, devant l\'Espagne et les États-Unis.',
        },
        {
          id: 'b1-ac-05-ex05',
          type: 'qcm',
          question: '"Structurellement élevé" pour le chômage signifie :',
          options: [
            'Élevé à cause d\'une crise temporaire',
            'Élevé de façon durable, inhérent à la structure économique',
            'Élevé uniquement en hiver',
            'Élevé depuis la création de la France',
          ],
          correctIndex: 1,
          explanation: '"Structurel" = lié à la structure, durable (par opposition à "conjoncturel" = temporaire). Un chômage structurellement élevé persiste indépendamment de la conjoncture économique favorable ou défavorable.',
        },
        {
          id: 'b1-ac-05-ex06',
          type: 'qcm',
          question: 'Quelle est la différence entre salaire brut et salaire net ?',
          options: [
            'Brut = annuel / net = mensuel',
            'Brut = avant déduction des cotisations sociales / net = ce qu\'on reçoit réellement',
            'Net = brut + prime',
            'Il n\'y a pas de différence officielle',
          ],
          correctIndex: 1,
          explanation: '"Salaire BRUT" = total avant les déductions sociales (cotisations). "Salaire NET" = ce qu\'on reçoit réellement sur son compte. En France, le net ≈ 75-80% du brut. Le SMIC brut ≈ 1766€ → net ≈ 1400€.',
        },
        {
          id: 'b1-ac-05-ex07',
          type: 'qcm',
          question: 'LVMH est un groupe français qui inclut :',
          options: [
            'Renault, Peugeot, Citroën',
            'Louis Vuitton, Dior, Givenchy',
            'Air France, Airbus, Safran',
            'BNP Paribas, Société Générale, Crédit Agricole',
          ],
          correctIndex: 1,
          explanation: 'LVMH = Moët Hennessy Louis Vuitton. Le premier groupe mondial du luxe inclut : Louis Vuitton, Dior, Givenchy, Moët & Chandon, Hennessy, Bulgari, Sephora, Tag Heuer... C\'est la première capitalisation boursière française.',
        },
        {
          id: 'b1-ac-05-ex08',
          type: 'qcm',
          question: '"La dette publique dépasse 110% du PIB." Que signifie "dépasser" ici ?',
          options: ['Est inférieure à', 'Est supérieure à / est au-delà de', 'Équivaut à', 'Approche'],
          correctIndex: 1,
          explanation: '"Dépasser" = exceed / go beyond. "La dette dépasse 110%" = elle est supérieure à 110%. En France, la dette publique (environ 3000 milliards d\'euros) représente plus de 110% du PIB annuel, ce qui inquiète les marchés et l\'UE.',
        },
        {
          id: 'b1-ac-05-ex09',
          type: 'qcm',
          question: 'Quel est le taux de chômage en France mentionné dans le texte ?',
          options: ['4%', '7%', '10%', '15%'],
          correctIndex: 1,
          explanation: '"La France fait face à un taux de chômage structurellement élevé (autour de 7%)." Ce taux est plus élevé que l\'Allemagne (~5%) mais dans la moyenne européenne.',
        },
        {
          id: 'b1-ac-05-ex10',
          type: 'qcm',
          question: '"Se revaloriser" pour le SMIC signifie :',
          options: ['Diminuer', 'Stagner', 'Augmenter (être relevé)', 'Être supprimé'],
          correctIndex: 2,
          explanation: '"Le SMIC se revalorise régulièrement" = le SMIC augmente régulièrement. "Revaloriser" = augmenter pour maintenir ou améliorer le pouvoir d\'achat. Le SMIC est revalorisé automatiquement quand l\'inflation dépasse 2%.',
        },
        {
          id: 'b1-ac-05-ex11',
          type: 'qcm',
          question: 'Complétez avec une expression de quantité approximative : "___ 17% des salariés français sont payés au SMIC."',
          options: ['Exactement', 'Environ', 'Largement plus de', 'À peine'],
          correctIndex: 1,
          explanation: '"ENVIRON 17% des salariés." "Environ" = approximately. Pour des données statistiques, on utilise souvent "environ / autour de / près de" pour indiquer que ce n\'est pas le chiffre exact mais une approximation.',
        },
        {
          id: 'b1-ac-05-ex12',
          type: 'qcm',
          question: 'Où Airbus est-elle basée en France ?',
          options: ['Paris', 'Lyon', 'Toulouse', 'Bordeaux'],
          correctIndex: 2,
          explanation: 'Airbus a son siège à Toulouse (Occitanie). C\'est le premier employeur privé de la région. Toulouse est surnommée "la ville rose" et "la capitale de l\'aéronautique". Airbus produit notamment l\'A320 et l\'A380.',
        },
        {
          id: 'b1-ac-05-ex13',
          type: 'qcm',
          question: '"En termes de" s\'utilise pour :',
          options: [
            'Exprimer un temps chronologique',
            'Présenter une donnée selon un critère particulier ("en matière de")',
            'Introduire une opinion',
            'Exprimer une condition',
          ],
          correctIndex: 1,
          explanation: '"En termes de" = in terms of. "En termes de volume / de valeur / d\'attractivité" = du point de vue du volume / selon le critère de la valeur. C\'est une locution prépositionnelle pour préciser le critère d\'évaluation.',
        },
        {
          id: 'b1-ac-05-ex14',
          type: 'qcm',
          question: 'Quelle tranche d\'âge est particulièrement touchée par le chômage en France ?',
          options: ['25-35 ans', '15-25 ans', '35-45 ans', '55-65 ans'],
          correctIndex: 1,
          explanation: '"Particulièrement touché chez les jeunes (15-25 ans)." Le chômage des jeunes en France est structurellement élevé (autour de 15-20%), soit le double du taux général. Cela motive des politiques spécifiques (garantie jeunes, contrats en alternance).',
        },
        {
          id: 'b1-ac-05-ex15',
          type: 'qcm',
          question: 'Comment exprimer que la dette dépasse légèrement 110% ? "La dette ___ 110% du PIB."',
          options: ['atteint environ', 'dépasse légèrement', 'est exactement de', 'est bien au-delà de'],
          correctIndex: 1,
          explanation: '"Dépasse légèrement 110%" = slightly exceeds 110%. Pour des données proches d\'un seuil, "légèrement + dépasser" exprime une nuance importante. Autres formulations : "avoisine 110%" / "frôle 110%".',
        },
        {
          id: 'b1-ac-05-ex16',
          type: 'qcm',
          question: 'Que signifie "l\'attractivité" d\'un pays ?',
          options: [
            'La beauté des paysages',
            'La capacité d\'un pays à attirer touristes, investisseurs et talents étrangers',
            'Le niveau culturel d\'un pays',
            'La popularité d\'un pays sur les réseaux sociaux',
          ],
          correctIndex: 1,
          explanation: '"L\'attractivité" = attractiveness. La capacité d\'un territoire à attirer des flux extérieurs : touristes, investisseurs directs étrangers (IDE), talents qualifiés, entreprises. La France bénéficie d\'une forte attractivité touristique et culturelle.',
        },
        {
          id: 'b1-ac-05-ex17',
          type: 'qcm',
          question: '"Mixte" pour une économie signifie :',
          options: [
            'Uniquement publique',
            'Uniquement privée',
            'Combinaison de secteur public et privé',
            'Économie d\'exportation',
          ],
          correctIndex: 2,
          explanation: '"Économie mixte" = mixed economy. Combinaison de propriété publique (État, entreprises publiques comme EDF, SNCF...) et de propriété privée (entreprises privées, marché libre). La France a une économie mixte avec un État interventionniste important.',
        },
        {
          id: 'b1-ac-05-ex18',
          type: 'qcm',
          question: 'Formule pour présenter des données : "Le taux de chômage ___ à 7%."',
          options: ['monte', 's\'établit', 'se trouve', 'monte à'],
          correctIndex: 1,
          explanation: '"Le taux de chômage S\'ÉTABLIT à 7%." "S\'établir à" = to stand at / to be at. Formule neutre et précise pour des données statistiques. "Le taux monte à / atteint / s\'élève à / s\'établit à 7%".',
        },
        {
          id: 'b1-ac-05-ex19',
          type: 'qcm',
          question: '"Les institutions européennes" préoccupées par la dette française désigne :',
          options: [
            'La Banque Centrale Européenne et le FMI',
            'La Commission européenne, le Parlement européen et la BCE',
            'La Cour de Justice Européenne',
            'Les gouvernements des pays de l\'UE',
          ],
          correctIndex: 1,
          explanation: '"Institutions européennes" = la Commission européenne (qui surveille les budgets des États membres), le Parlement européen et la BCE (Banque Centrale Européenne). La Commission peut sanctionner les pays qui dépassent les règles budgétaires (déficit > 3% PIB).',
        },
        {
          id: 'b1-ac-05-ex20',
          type: 'qcm',
          question: 'SMIC signifie :',
          options: [
            'Salaire Minimum Interprofessionnel de Croissance',
            'Salaire Moyen Interprofessionnel de Commerce',
            'Système Minimal d\'Imposition et de Cotisation',
            'Statut Minimum pour les Individus en Croissance',
          ],
          correctIndex: 0,
          explanation: 'SMIC = Salaire Minimum Interprofessionnel de Croissance. C\'est le salaire minimum légal en France, révisé régulièrement. En 2024 : environ 1766€ brut/mois. Toute heure travaillée doit être payée au moins au niveau du SMIC.',
        },
      ],
    },
  ],
};
