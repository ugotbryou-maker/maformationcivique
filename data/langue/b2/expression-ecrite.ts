import type { LangModule } from '../types';

export const b2ExpressionEcrite: LangModule = {
  id: 'b2-mod-03',
  slug: 'b2-expression-ecrite',
  level: 'B2',
  title: 'Expression écrite avancée',
  subtitle: 'Essai, synthèse et style soutenu',
  description: 'Structurez des écrits complexes et soignez votre style pour atteindre une expression écrite de niveau B2.',
  type: 'thematique',
  emoji: '🖋️',
  free: false,
  lessons: [
    {
      id: 'b2-ecr-01',
      slug: 'b2-essai-argumentatif',
      moduleSlug: 'b2-expression-ecrite',
      level: 'B2',
      title: 'Structurer un essai argumentatif',
      description: 'Construire un essai avec introduction, plan dialectique et conclusion ouverte.',
      duration: 12,
      free: false,
      dialogue: `## Exemple : Plan dialectique sur le sujet "Le télétravail favorise-t-il l'égalité professionnelle ?"

**Introduction**
*Accroche* : Depuis la généralisation du télétravail, ses effets sur les rapports de travail font l'objet d'analyses contrastées.
*Problématique* : Le télétravail favorise-t-il réellement l'égalité professionnelle, ou risque-t-il au contraire de l'accentuer ?
*Annonce du plan* : Nous examinerons d'abord les bénéfices potentiels du télétravail, avant d'en souligner les limites, pour enfin esquisser des pistes de conciliation.

**I. Thèse — Le télétravail comme facteur d'égalité**
Le télétravail réduit certaines discriminations liées à l'apparence ou à la présence physique. Il facilite également l'accès à l'emploi pour les personnes en situation de handicap ou les parents isolés, en assouplissant les contraintes horaires.

**II. Antithèse — Les risques d'un creusement des inégalités**
Toutefois, l'accès au télétravail demeure inégal selon les secteurs et les catégories socio-professionnelles : les emplois peu qualifiés s'y prêtent rarement. Par ailleurs, le risque d'invisibilisation des télétravailleurs, notamment des femmes assumant davantage les tâches domestiques, ne doit pas être sous-estimé.

**III. Synthèse — Vers une conciliation possible**
Dès lors, le télétravail ne saurait être considéré ni comme une solution miracle ni comme une menace systématique. Sa contribution à l'égalité professionnelle dépendra largement des dispositifs d'accompagnement mis en place par les entreprises.

**Conclusion**
*Bilan* : Le télétravail recèle un potentiel égalitaire réel, mais conditionné.
*Ouverture* : Reste à savoir comment les politiques publiques sauront encadrer cette mutation du travail pour qu'elle profite à tous.`,

      linguisticPoint: `## Point linguistique : Les connecteurs de structuration d'un essai

### Introduction
- "Depuis..., X fait l'objet de débats." (accroche)
- "Dès lors, on peut se demander si..." (problématique)
- "Nous examinerons d'abord..., avant de..., pour enfin..." (annonce du plan)

### Développement (plan dialectique : thèse / antithèse / synthèse)
- "D'une part... d'autre part..." / "Si... toutefois..."
- "Il convient de nuancer ce constat..."
- "Cela étant, il importe de souligner que..."

### Conclusion
- "En définitive, ..." / "Au terme de cette analyse, ..."
- "Reste à savoir si / comment..." (ouverture)
- "Cette question invite à poursuivre la réflexion sur..." (ouverture)

### Verbes d'analyse soutenus
recéler, esquisser, demeurer, s'avérer, importer (il importe de), sous-estimer`,

      keyPoints: [
        'Plan dialectique : thèse → antithèse → synthèse (pas juste pour/contre simpliste)',
        'Introduction = accroche + problématique + annonce du plan',
        'Conclusion = bilan (résumé synthétique) + ouverture (question pour aller plus loin)',
        '"Recéler" = contenir potentiellement / "esquisser" = suggérer sans développer entièrement',
        'Verbes d\'analyse soutenus : demeurer, s\'avérer, importer (il importe de)',
      ],

      exercises: [
        {
          id: 'b2-ecr-01-ex01',
          type: 'qcm',
          question: 'Quelles sont les trois parties d\'un plan dialectique ?',
          options: [
            'Introduction, développement, conclusion',
            'Thèse, antithèse, synthèse',
            'Pour, contre, neutre',
            'Accroche, problématique, plan',
          ],
          correctIndex: 1,
          explanation: 'Le PLAN DIALECTIQUE structure l\'argumentation en trois temps : THÈSE (présentation d\'une position), ANTITHÈSE (présentation de la position contraire ou des limites), SYNTHÈSE (dépassement de l\'opposition vers une position nuancée). C\'est le plan classique de l\'essai argumentatif à la française.',
        },
        {
          id: 'b2-ecr-01-ex02',
          type: 'qcm',
          question: 'Que signifie "recéler un potentiel égalitaire" ?',
          options: [
            'Cacher illégalement quelque chose',
            'Contenir en soi, potentiellement, une capacité à favoriser l\'égalité',
            'Détruire toute forme d\'égalité',
            'Démontrer scientifiquement l\'égalité',
          ],
          correctIndex: 1,
          explanation: '"Recéler" = contenir quelque chose de caché, de potentiel, sans que cela soit immédiatement visible ou garanti. "Recéler un potentiel" = avoir EN PUISSANCE cette capacité, sans certitude qu\'elle se réalise pleinement.',
        },
        {
          id: 'b2-ecr-01-ex03',
          type: 'qcm',
          question: 'Quelle est la fonction de la conclusion "ouverture" dans un essai ?',
          options: [
            'Répéter l\'introduction',
            'Élargir la réflexion vers une question connexe, sans y répondre complètement',
            'Donner une réponse définitive et fermée',
            'Citer un auteur célèbre',
          ],
          correctIndex: 1,
          explanation: 'L\'OUVERTURE en fin de conclusion élargit la réflexion vers une question CONNEXE (liée mais distincte) sans prétendre y répondre. "Reste à savoir comment les politiques publiques sauront encadrer cette mutation" ouvre vers un nouveau questionnement, montrant que la réflexion peut se poursuivre.',
        },
        {
          id: 'b2-ecr-01-ex04',
          type: 'qcm',
          question: '"Nous examinerons d\'abord..., avant de..., pour enfin..." est une formule pour :',
          options: [
            'Conclure l\'essai',
            'Annoncer le plan de l\'essai dans l\'introduction',
            'Citer une source',
            'Réfuter un argument',
          ],
          correctIndex: 1,
          explanation: 'Cette structure ("d\'abord..., avant de..., pour enfin...") annonce explicitement les TROIS GRANDES PARTIES du développement dans l\'introduction. Elle guide le lecteur en lui donnant la feuille de route de l\'argumentation à venir.',
        },
        {
          id: 'b2-ecr-01-ex05',
          type: 'qcm',
          question: 'Que signifie "il importe de souligner que" ?',
          options: [
            'Il est interdit de souligner que',
            'Il est important/essentiel de mettre en avant le fait que',
            'Il est inutile de souligner que',
            'Il est probable que',
          ],
          correctIndex: 1,
          explanation: '"Il importe de + infinitif" = il est important de (registre soutenu, de "importer" = avoir de l\'importance). "Il importe de souligner que" = il est essentiel de mettre en évidence le fait que. Formule typique de l\'essai argumentatif.',
        },
        {
          id: 'b2-ecr-01-ex06',
          type: 'qcm',
          question: 'Quelle est la fonction de la "synthèse" dans le plan dialectique ?',
          options: [
            'Répéter la thèse initiale',
            'Dépasser l\'opposition thèse/antithèse vers une position plus nuancée et constructive',
            'Choisir définitivement entre thèse et antithèse',
            'Ignorer les arguments précédents',
          ],
          correctIndex: 1,
          explanation: 'La SYNTHÈSE ne se contente pas de choisir entre thèse et antithèse — elle les DÉPASSE en proposant une position plus riche, qui intègre les éléments valides des deux perspectives. "Dès lors, le télétravail ne saurait être considéré ni comme... ni comme..." illustre ce dépassement.',
        },
        {
          id: 'b2-ecr-01-ex07',
          type: 'qcm',
          question: '"Esquisser des pistes de conciliation" — que signifie "esquisser" ?',
          options: [
            'Développer en détail et exhaustivement',
            'Suggérer, proposer de façon préliminaire sans développer entièrement',
            'Rejeter complètement',
            'Démontrer mathématiquement',
          ],
          correctIndex: 1,
          explanation: '"Esquisser" (à l\'origine : faire un croquis rapide) signifie au sens figuré PROPOSER de façon préliminaire, suggérer sans développer en détail. "Esquisser des pistes" = suggérer des orientations possibles sans les approfondir totalement.',
        },
        {
          id: 'b2-ecr-01-ex08',
          type: 'qcm',
          question: 'Que doit contenir une bonne "problématique" dans l\'introduction d\'un essai ?',
          options: [
            'Une affirmation catégorique sur le sujet',
            'Une question ouverte qui structure la réflexion à venir, sans présupposer la réponse',
            'Un résumé de la conclusion',
            'Une liste d\'exemples',
          ],
          correctIndex: 1,
          explanation: 'La PROBLÉMATIQUE doit être une QUESTION OUVERTE qui pose le débat sans présupposer la réponse finale : "Le télétravail favorise-t-il réellement l\'égalité professionnelle, ou risque-t-il au contraire de l\'accentuer ?" structure une véritable tension à explorer, pas une affirmation déjà tranchée.',
        },
        {
          id: 'b2-ecr-01-ex09',
          type: 'qcm',
          question: 'Quelle est la différence entre "demeurer" et "rester" en termes de registre ?',
          options: [
            'Aucune différence, ce sont des synonymes parfaits sans nuance de registre',
            '"Demeurer" est plus soutenu/littéraire, "rester" est plus courant',
            '"Rester" est plus soutenu que "demeurer"',
            '"Demeurer" ne s\'utilise qu\'au sens d\'habiter',
          ],
          correctIndex: 1,
          explanation: '"Demeurer" et "rester" sont synonymes au sens de "continuer d\'être", mais "DEMEURER" appartient à un registre plus SOUTENU/littéraire, fréquent dans l\'essai argumentatif, tandis que "rester" est d\'usage plus courant et neutre.',
        },
        {
          id: 'b2-ecr-01-ex10',
          type: 'qcm',
          question: 'Pourquoi l\'accroche d\'introduction ("Depuis la généralisation du télétravail...") est-elle efficace ?',
          options: [
            'Parce qu\'elle donne immédiatement la conclusion',
            'Parce qu\'elle situe le sujet dans son contexte actuel et justifie sa pertinence avant d\'introduire la problématique',
            'Parce qu\'elle pose une question fermée',
            'Parce qu\'elle critique directement une opinion',
          ],
          correctIndex: 1,
          explanation: 'Une bonne ACCROCHE situe le sujet dans son CONTEXTE (ici : généralisation récente du télétravail) pour justifier sa PERTINENCE actuelle, avant d\'amener naturellement la problématique. Elle capte l\'intérêt du lecteur sans révéler la thèse de l\'auteur.',
        },
        {
          id: 'b2-ecr-01-ex11',
          type: 'qcm',
          question: 'Que signifie "s\'avérer" (verbe d\'analyse soutenu) ?',
          options: [
            'Se révéler être, après examen ou expérience',
            'Être nié catégoriquement',
            'Être supposé sans preuve',
            'Disparaître progressivement',
          ],
          correctIndex: 0,
          explanation: '"S\'avérer" = se révéler être (vrai/faux/efficace...) après vérification ou observation. "Cette mesure s\'avère efficace" = on constate, après examen, qu\'elle est effectivement efficace. Verbe d\'analyse très utilisé dans l\'essai argumentatif soutenu.',
        },
        {
          id: 'b2-ecr-01-ex12',
          type: 'qcm',
          question: 'Quelle structure introduit l\'antithèse de façon nuancée (plutôt qu\'une rupture brutale) ?',
          options: [
            '"Or, c\'est totalement faux."',
            '"Toutefois, l\'accès au télétravail demeure inégal..."',
            '"Au contraire de tout ce qui a été dit, ..."',
            '"Cela n\'a aucun sens."',
          ],
          correctIndex: 1,
          explanation: '"Toutefois, l\'accès au télétravail demeure inégal..." introduit l\'antithèse de façon NUANCÉE, en reconnaissant la validité de ce qui précède tout en y apportant un contrepoint. C\'est le ton attendu dans un essai argumentatif construit (par opposition à la polémique).',
        },
        {
          id: 'b2-ecr-01-ex13',
          type: 'qcm',
          question: 'Que signifie "invisibilisation" (mentionnée dans le texte) ?',
          options: [
            'Le fait de rendre quelque chose plus visible',
            'Le processus par lequel certaines personnes ou réalités deviennent moins visibles, moins reconnues socialement',
            'Une technique de camouflage physique',
            'L\'augmentation de la transparence administrative',
          ],
          correctIndex: 1,
          explanation: '"Invisibilisation" (néologisme sociologique courant) = le processus par lequel certaines personnes, groupes ou phénomènes sont rendus moins VISIBLES ou moins RECONNUS dans le débat public ou la vie professionnelle. "L\'invisibilisation des télétravailleurs" = leur travail devient moins visible/valorisé par la hiérarchie.',
        },
        {
          id: 'b2-ecr-01-ex14',
          type: 'qcm',
          question: 'Quelle est la fonction du "bilan" dans la conclusion d\'un essai ?',
          options: [
            'Introduire un nouvel argument non traité auparavant',
            'Synthétiser de façon concise les conclusions principales tirées du développement',
            'Poser une nouvelle problématique sans rapport',
            'Citer un exemple inédit',
          ],
          correctIndex: 1,
          explanation: 'Le BILAN synthétise de façon CONCISE les conclusions principales du développement, sans introduire de nouveaux arguments. "Le télétravail recèle un potentiel égalitaire réel, mais conditionné" résume en une phrase l\'ensemble de la réflexion menée.',
        },
        {
          id: 'b2-ecr-01-ex15',
          type: 'qcm',
          question: '"Cela étant, il importe de souligner que..." sert à :',
          options: [
            'Conclure définitivement',
            'Introduire une nuance ou un complément après une concession, sans rupture brutale',
            'Réfuter totalement ce qui précède',
            'Changer complètement de sujet',
          ],
          correctIndex: 1,
          explanation: '"Cela étant" (= cependant, malgré cela) introduit une transition douce vers une NUANCE ou un COMPLÉMENT, sans rompre brutalement avec ce qui précède. Cette formule de liaison maintient la cohérence du raisonnement tout en l\'enrichissant.',
        },
        {
          id: 'b2-ecr-01-ex16',
          type: 'qcm',
          question: 'Pourquoi éviter un plan "pour / contre" simpliste au profit d\'un plan dialectique en B2 ?',
          options: [
            'Le plan pour/contre est interdit par la loi',
            'Le plan dialectique permet une réflexion plus fine qui dépasse l\'opposition binaire vers une analyse nuancée',
            'Le plan pour/contre est plus difficile à écrire',
            'Il n\'y a aucune différence réelle entre les deux plans',
          ],
          correctIndex: 1,
          explanation: 'Le plan "pour/contre" reste souvent BINAIRE et superficiel. Le plan DIALECTIQUE (thèse/antithèse/synthèse) pousse à une réflexion plus FINE qui ne se contente pas d\'opposer deux camps, mais cherche à les DÉPASSER vers une compréhension plus complète du sujet — compétence attendue au niveau B2/C1.',
        },
        {
          id: 'b2-ecr-01-ex17',
          type: 'qcm',
          question: 'Que signifie "une mutation du travail" dans la conclusion ?',
          options: [
            'Une maladie professionnelle',
            'Une transformation profonde et durable des modes de travail',
            'Un changement de poste individuel',
            'Une grève générale',
          ],
          correctIndex: 1,
          explanation: '"Mutation" (au sens figuré, comme en biologie) = une transformation PROFONDE et DURABLE. "Mutation du travail" = changement structurel important dans la façon de travailler (ici, lié à la généralisation du télétravail), pas un simple ajustement temporaire.',
        },
        {
          id: 'b2-ecr-01-ex18',
          type: 'qcm',
          question: '"D\'une part... d\'autre part..." sert à :',
          options: [
            'Présenter deux idées complémentaires ou deux aspects d\'un même argument',
            'Réfuter un argument',
            'Introduire la conclusion',
            'Citer une statistique',
          ],
          correctIndex: 0,
          explanation: '"D\'une part... d\'autre part..." = structure pour présenter DEUX aspects (souvent complémentaires, parfois contrastés) d\'une même idée ou d\'un même argument. Très utile pour développer un point de façon équilibrée et structurée.',
        },
        {
          id: 'b2-ecr-01-ex19',
          type: 'qcm',
          question: 'Que signifie "des dispositifs d\'accompagnement" (mentionnés dans la synthèse) ?',
          options: [
            'Des sanctions administratives',
            'Des mesures et outils mis en place pour soutenir et faciliter une transition ou un changement',
            'Des règlements interdisant le télétravail',
            'Des salaires plus élevés uniquement',
          ],
          correctIndex: 1,
          explanation: '"Dispositifs d\'accompagnement" = ensemble de mesures/outils visant à SOUTENIR les personnes concernées par un changement (formation, équipement, suivi managérial...). Le texte suggère que ces dispositifs sont la clé pour que le télétravail bénéficie réellement à l\'égalité professionnelle.',
        },
        {
          id: 'b2-ecr-01-ex20',
          type: 'qcm',
          question: 'Pourquoi un essai de niveau B2 doit-il éviter les affirmations trop catégoriques ("c\'est totalement vrai/faux") ?',
          options: [
            'Parce que c\'est interdit par les règles de grammaire',
            'Parce que la nuance et la prise en compte de la complexité sont valorisées dans l\'argumentation de niveau avancé, reflétant une pensée critique mature',
            'Parce que les affirmations catégoriques sont toujours fausses',
            'Parce que cela rend le texte trop court',
          ],
          correctIndex: 1,
          explanation: 'Au niveau B2/avancé, la capacité à NUANCER et à reconnaître la COMPLEXITÉ d\'un sujet est un signe de maturité argumentative et de pensée critique. Les affirmations catégoriques ("c\'est totalement vrai/faux") témoignent souvent d\'une analyse insuffisamment approfondie, alors qu\'un essai réussi explore les tensions et propose une synthèse nuancée.',
        },
      ],
    },

    {
      id: 'b2-ecr-02',
      slug: 'b2-synthese-documents',
      moduleSlug: 'b2-expression-ecrite',
      level: 'B2',
      title: 'La synthèse de documents',
      description: 'Reformuler et combiner des informations issues de plusieurs sources sans copier ni juger.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Principes de la synthèse de documents

La synthèse de documents est un exercice exigeant qui consiste à reformuler de façon ORGANISÉE et OBJECTIVE les idées de plusieurs sources, sans y ajouter d'opinion personnelle.

**Les règles d'or de la synthèse :**

1. **Reformuler, ne pas citer mot à mot.** Le but n'est pas de copier des phrases mais de RECONSTRUIRE le sens avec ses propres mots.
   Source : "Le chômage des jeunes a augmenté de 12% en deux ans."
   Reformulation : "Selon les données disponibles, le chômage touchant les jeunes générations a connu une nette progression récemment."

2. **Confronter les sources, pas les juxtaposer.** Il ne s'agit pas de résumer document 1, puis document 2, puis document 3 séparément, mais de les faire DIALOGUER autour d'idées communes.
   "Si le premier document souligne X, le second nuance ce constat en évoquant Y."

3. **Rester neutre.** La synthèse ne doit comporter AUCUNE opinion personnelle de son auteur — uniquement les idées des documents sources, reformulées et organisées.

4. **Organiser par thèmes, pas par documents.** Un plan classique regroupe les idées convergentes ou divergentes sous des sous-parties thématiques, en indiquant la source de chaque idée.

**Attribuer les sources sans alourdir le texte :**
"Selon l'auteur du premier article, ..." / "Le second document souligne que..." / "Cette analyse est partagée par..." / "À l'inverse, le troisième document relativise ce constat en affirmant que..."`,

      linguisticPoint: `## Point linguistique : Les verbes pour attribuer une idée à une source

### Verbes neutres d'attribution
souligner, indiquer, rappeler, mentionner, relever, noter, observer

### Verbes marquant un degré d'affirmation
affirmer, soutenir, avancer (l'idée que), défendre (la thèse selon laquelle)

### Verbes marquant une nuance ou une opposition entre sources
nuancer, relativiser, contester, tempérer, corroborer (confirmer), contredire

### Structures pour mettre en relation deux sources
- "Si le document A souligne X, le document B nuance ce constat."
- "Cette idée est corroborée par..." (= confirmée)
- "À l'inverse, ... relativise / conteste ce constat."
- "Les deux sources convergent sur le constat selon lequel..." (= sont d'accord)
- "Les analyses divergent quant à..."`,

      keyPoints: [
        'Synthèse = reformuler avec ses propres mots, jamais citer mot à mot',
        'Confronter les sources par THÈMES, pas les résumer séparément document par document',
        'Aucune opinion personnelle dans une synthèse — uniquement les idées des sources',
        'Verbes neutres : souligner / indiquer / relever — verbes de nuance : nuancer / relativiser / contester',
        '"Corroborer" = confirmer, renforcer / "converger" = être d\'accord / "diverger" = ne pas être d\'accord',
      ],

      exercises: [
        {
          id: 'b2-ecr-02-ex01',
          type: 'qcm',
          question: 'Quelle est la règle d\'or principale d\'une synthèse de documents ?',
          options: [
            'Citer mot à mot les passages les plus intéressants',
            'Reformuler les idées avec ses propres mots, sans copier',
            'Donner son opinion personnelle sur chaque source',
            'Résumer chaque document séparément, l\'un après l\'autre',
          ],
          correctIndex: 1,
          explanation: 'La règle fondamentale de la synthèse est de REFORMULER les idées avec ses propres mots, en reconstruisant le sens, plutôt que de citer ou copier les phrases originales. Cela démontre une véritable compréhension du contenu, pas seulement un copier-coller.',
        },
        {
          id: 'b2-ecr-02-ex02',
          type: 'qcm',
          question: 'Que signifie "corroborer" une idée ?',
          options: [
            'Contredire complètement cette idée',
            'Confirmer, renforcer la validité de cette idée par un argument ou une source supplémentaire',
            'Ignorer cette idée',
            'Citer cette idée mot à mot',
          ],
          correctIndex: 1,
          explanation: '"Corroborer" = confirmer, apporter un soutien supplémentaire à une affirmation. "Cette idée est corroborée par le deuxième document" = le deuxième document confirme/renforce ce que dit le premier document sur ce point.',
        },
        {
          id: 'b2-ecr-02-ex03',
          type: 'qcm',
          question: 'Pourquoi faut-il "confronter" les sources plutôt que les "juxtaposer" ?',
          options: [
            'Pour rendre le texte plus long',
            'Pour faire dialoguer les idées entre elles autour de thèmes communs, plutôt que de résumer chaque document isolément',
            'Pour éviter de citer les sources',
            'Pour donner son opinion personnelle',
          ],
          correctIndex: 1,
          explanation: 'Confronter (= mettre en relation, faire dialoguer) les sources permet d\'organiser la synthèse PAR THÈMES, en montrant les convergences et divergences entre les documents. Juxtaposer (résumer document 1, puis document 2, etc. séparément) ne constitue pas une vraie synthèse — c\'est juste une succession de résumés.',
        },
        {
          id: 'b2-ecr-02-ex04',
          type: 'qcm',
          question: 'Quel verbe exprime une NUANCE ou une atténuation d\'une idée précédente ?',
          options: ['affirmer', 'souligner', 'relativiser', 'corroborer'],
          correctIndex: 2,
          explanation: '"Relativiser" = atténuer, nuancer une affirmation en la replaçant dans un contexte plus large ou en montrant ses limites. "Le troisième document relativise ce constat" = il apporte des réserves ou des nuances à ce qui a été dit avant.',
        },
        {
          id: 'b2-ecr-02-ex05',
          type: 'qcm',
          question: 'Que signifie "les analyses divergent quant à..." ?',
          options: [
            'Les analyses sont identiques sur ce point',
            'Les analyses ne sont pas d\'accord, présentent des positions différentes sur ce point',
            'Les analyses se complètent parfaitement',
            'Aucune analyse n\'existe sur ce point',
          ],
          correctIndex: 1,
          explanation: '"Diverger" = ne pas être d\'accord, présenter des positions différentes voire opposées. "Les analyses divergent quant à X" = les sources ne partagent PAS le même point de vue sur ce sujet précis. Contraire de "converger" (être d\'accord).',
        },
        {
          id: 'b2-ecr-02-ex06',
          type: 'qcm',
          question: 'Pourquoi une synthèse de documents ne doit-elle comporter AUCUNE opinion personnelle ?',
          options: [
            'Parce que c\'est interdit par la loi',
            'Parce que l\'objectif de l\'exercice est de restituer fidèlement et objectivement les idées des sources, pas de défendre une thèse personnelle',
            'Parce que les opinions personnelles sont toujours fausses',
            'Parce que c\'est trop difficile à rédiger',
          ],
          correctIndex: 1,
          explanation: 'L\'exercice de SYNTHÈSE vise à démontrer sa capacité à comprendre, organiser et restituer OBJECTIVEMENT des informations de plusieurs sources, sans déformation ni jugement personnel. C\'est différent de l\'essai argumentatif où l\'opinion de l\'auteur est centrale.',
        },
        {
          id: 'b2-ecr-02-ex07',
          type: 'qcm',
          question: 'Quelle structure permet de mettre en relation deux sources qui se contredisent ?',
          options: [
            '"Les deux sources convergent sur..."',
            '"Si le document A souligne X, le document B nuance ce constat."',
            '"Le document A confirme le document B."',
            '"Tous les documents disent la même chose."',
          ],
          correctIndex: 1,
          explanation: '"Si le document A souligne X, le document B nuance ce constat" est une structure CONTRASTIVE qui met en évidence une DIVERGENCE entre les sources, tout en restant neutre (sans donner son avis sur qui a raison).',
        },
        {
          id: 'b2-ecr-02-ex08',
          type: 'qcm',
          question: 'Que signifie "avancer une idée" dans le contexte de l\'attribution de sources ?',
          options: [
            'Marcher physiquement vers l\'avant',
            'Proposer, exposer une idée comme argument',
            'Refuser une idée',
            'Citer mot à mot',
          ],
          correctIndex: 1,
          explanation: '"Avancer une idée/un argument" = proposer, mettre en avant une idée dans une argumentation. "L\'auteur avance l\'idée que..." = l\'auteur propose/défend cette idée comme argument dans son texte.',
        },
        {
          id: 'b2-ecr-02-ex09',
          type: 'qcm',
          question: 'Comment organiser idéalement le plan d\'une synthèse de documents ?',
          options: [
            'Document par document, dans l\'ordre de présentation',
            'Par thèmes transversaux, en regroupant les idées convergentes ou divergentes de toutes les sources',
            'Par ordre alphabétique des auteurs',
            'Par longueur des documents',
          ],
          correctIndex: 1,
          explanation: 'L\'organisation IDÉALE est PAR THÈMES (sous-parties thématiques), regroupant les idées de TOUTES les sources sur chaque thème. Cela montre une vraie capacité de synthèse, contrairement à un plan document par document qui reste superficiel.',
        },
        {
          id: 'b2-ecr-02-ex10',
          type: 'qcm',
          question: 'Quel verbe neutre permet d\'attribuer une idée à une source sans jugement de valeur ?',
          options: ['critiquer', 'souligner', 'détruire', 'admirer'],
          correctIndex: 1,
          explanation: '"Souligner" (comme "indiquer", "relever", "noter", "mentionner") est un verbe NEUTRE d\'attribution, sans jugement de valeur sur la qualité de l\'idée rapportée. "Critiquer", "détruire" et "admirer" impliquent un jugement personnel, à éviter en synthèse.',
        },
        {
          id: 'b2-ecr-02-ex11',
          type: 'qcm',
          question: 'Reformulez sans citer mot à mot : Source = "Le chômage des jeunes a augmenté de 12% en deux ans." Quelle reformulation est correcte ?',
          options: [
            '"Le chômage des jeunes a augmenté de 12% en deux ans." (citation identique)',
            '"Selon les données disponibles, le chômage touchant les jeunes générations a connu une nette progression récemment."',
            '"Le chômage est terrible pour les jeunes."',
            '"Les jeunes n\'ont pas de travail."',
          ],
          correctIndex: 1,
          explanation: 'La bonne reformulation RECONSTRUIT le sens avec d\'autres mots ("nette progression" pour "augmenté de 12%", "jeunes générations" pour "jeunes") sans copier la phrase originale, tout en restant FIDÈLE et OBJECTIVE (pas de jugement comme "terrible").',
        },
        {
          id: 'b2-ecr-02-ex12',
          type: 'qcm',
          question: 'Que signifie "défendre la thèse selon laquelle" ?',
          options: [
            'Attaquer une thèse',
            'Soutenir et argumenter en faveur d\'une thèse précise',
            'Ignorer une thèse',
            'Résumer brièvement une thèse',
          ],
          correctIndex: 1,
          explanation: '"Défendre la thèse selon laquelle" = soutenir activement, argumenter en faveur d\'une position spécifique. C\'est une formule pour attribuer clairement une thèse précise à un auteur ou une source, en montrant qu\'il/elle l\'a explicitement soutenue.',
        },
        {
          id: 'b2-ecr-02-ex13',
          type: 'qcm',
          question: 'Que signifie "les deux sources convergent sur le constat selon lequel..." ?',
          options: [
            'Les deux sources sont en désaccord total',
            'Les deux sources arrivent à la même conclusion sur ce point précis',
            'Une seule source mentionne ce point',
            'Les deux sources sont contradictoires sur tout',
          ],
          correctIndex: 1,
          explanation: '"Converger sur" = arriver à la même conclusion, être d\'accord sur un point précis. "Les deux sources convergent" indique un ACCORD entre les documents sur ce constat spécifique, ce qui renforce sa crédibilité dans la synthèse.',
        },
        {
          id: 'b2-ecr-02-ex14',
          type: 'qcm',
          question: 'Pourquoi est-il important d\'attribuer chaque idée à sa source dans une synthèse ?',
          options: [
            'Ce n\'est pas important, on peut mélanger sans préciser',
            'Pour permettre au lecteur de savoir quelle idée vient de quel document, garantissant la transparence et la rigueur de l\'exercice',
            'Pour rendre le texte plus long artificiellement',
            'Uniquement pour respecter le droit d\'auteur',
          ],
          correctIndex: 1,
          explanation: 'Attribuer chaque idée à sa source ("selon le premier document...", "le second souligne...") garantit la TRANSPARENCE de la synthèse : le lecteur comprend précisément quelle idée vient de quelle source, et peut évaluer la cohérence ou les divergences entre documents.',
        },
        {
          id: 'b2-ecr-02-ex15',
          type: 'qcm',
          question: 'Quel verbe exprime une CONTESTATION d\'une idée par une autre source ?',
          options: ['corroborer', 'souligner', 'contester', 'mentionner'],
          correctIndex: 2,
          explanation: '"Contester" = remettre en cause, s\'opposer à une affirmation. "Le troisième document conteste cette analyse" = il s\'oppose explicitement à ce qui a été affirmé par une autre source, créant une tension à mettre en évidence dans la synthèse.',
        },
        {
          id: 'b2-ecr-02-ex16',
          type: 'qcm',
          question: '"À l\'inverse, le troisième document relativise ce constat" — quelle est la fonction de "à l\'inverse" ?',
          options: [
            'Confirmer ce qui précède',
            'Introduire un contraste ou une opposition avec ce qui a été dit précédemment',
            'Ajouter une information sans rapport',
            'Conclure la synthèse',
          ],
          correctIndex: 1,
          explanation: '"À l\'inverse" = au contraire, introduit une OPPOSITION avec ce qui précède. C\'est un connecteur essentiel pour signaler clairement une divergence entre sources sans avoir besoin de longues explications.',
        },
        {
          id: 'b2-ecr-02-ex17',
          type: 'qcm',
          question: 'Quelle compétence cognitive la synthèse de documents développe-t-elle particulièrement ?',
          options: [
            'La mémorisation de vocabulaire isolé',
            'La capacité à analyser, organiser et reformuler objectivement des informations complexes issues de plusieurs sources',
            'La capacité à improviser sans préparation',
            'La capacité à copier rapidement du texte',
          ],
          correctIndex: 1,
          explanation: 'La synthèse de documents développe des compétences cognitives AVANCÉES : analyser plusieurs textes, identifier les idées clés, les ORGANISER par thèmes, et les REFORMULER de façon objective et cohérente. C\'est une compétence transversale très valorisée académiquement et professionnellement.',
        },
        {
          id: 'b2-ecr-02-ex18',
          type: 'qcm',
          question: 'Quelle erreur fréquente faut-il éviter dans une synthèse de documents ?',
          options: [
            'Citer les sources',
            'Résumer chaque document séparément l\'un après l\'autre, sans les mettre en relation',
            'Organiser le texte par thèmes',
            'Utiliser des verbes neutres d\'attribution',
          ],
          correctIndex: 1,
          explanation: 'L\'erreur la plus FRÉQUENTE est de traiter chaque document SÉPARÉMENT (résumé 1, puis résumé 2, puis résumé 3) sans jamais les mettre en RELATION les uns avec les autres. Une vraie synthèse doit montrer comment les sources se complètent, se confirment ou se contredisent.',
        },
        {
          id: 'b2-ecr-02-ex19',
          type: 'qcm',
          question: 'Que signifie "tempérer" une affirmation ?',
          options: [
            'La renforcer fortement',
            'L\'adoucir, la modérer en apportant des réserves',
            'La citer mot à mot',
            'La rejeter complètement',
          ],
          correctIndex: 1,
          explanation: '"Tempérer" = adoucir, modérer une affirmation trop tranchée en y ajoutant des nuances ou des réserves. "Cette affirmation est tempérée par d\'autres données" = elle est rendue moins absolue grâce à des informations complémentaires.',
        },
        {
          id: 'b2-ecr-02-ex20',
          type: 'qcm',
          question: 'En quoi la synthèse de documents diffère-t-elle fondamentalement de l\'essai argumentatif ?',
          options: [
            'Elle est plus longue',
            'La synthèse reste neutre et objective (sans opinion de l\'auteur), tandis que l\'essai défend explicitement une thèse personnelle',
            'La synthèse n\'a pas besoin de structure',
            'L\'essai n\'utilise jamais de sources',
          ],
          correctIndex: 1,
          explanation: 'La différence FONDAMENTALE : la SYNTHÈSE reste NEUTRE et OBJECTIVE, restituant fidèlement les idées de plusieurs sources sans opinion personnelle. L\'ESSAI ARGUMENTATIF, au contraire, défend explicitement une THÈSE PERSONNELLE de l\'auteur, en utilisant éventuellement des sources comme appui à son propre raisonnement.',
        },
      ],
    },

    {
      id: 'b2-ecr-03',
      slug: 'b2-style-soutenu',
      moduleSlug: 'b2-expression-ecrite',
      level: 'B2',
      title: 'Le style soutenu à l\'écrit',
      description: 'Enrichir son style avec des figures de rhétorique et des constructions sophistiquées.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Pourquoi soigner son style à l'écrit ?

Au niveau B2, la qualité du style devient un critère d'évaluation à part entière. Un même contenu peut être exprimé de façon plate ou élégante.

**Quelques figures de style utiles à l'écrit argumentatif :**

**La litote** (atténuer pour mieux souligner) :
"Cette mesure n'est pas sans risque." (= elle est risquée)
"Ce n'est pas inintéressant." (= c'est intéressant)

**L'antithèse** (opposer deux idées dans une même phrase) :
"Le système protège les uns mais fragilise les autres."

**L'anaphore** (répétition en début de phrase, pour insister) :
"Il faut agir. Il faut décider. Il faut, enfin, assumer."

**La gradation** (intensité croissante ou décroissante) :
"Une mesure discutable, contestable, voire dangereuse."

**Le chiasme** (inversion symétrique) :
"Il ne faut pas vivre pour travailler, mais travailler pour vivre."

**Des phrases plus sophistiquées :**
- L'inversion sujet-verbe après certains adverbes : "Peut-être conviendrait-il de reconsidérer cette politique."
- Le subjonctif après "le fait que" (nuance) : "Le fait que cette mesure soit critiquée n'enlève rien à sa pertinence."
- La mise en relief par l'incise : "Cette réforme, contestée par certains, demeure néanmoins nécessaire."`,

      linguisticPoint: `## Point linguistique : L'inversion sujet-verbe après certains adverbes

### Règle
Après certains adverbes placés en tête de phrase (peut-être, sans doute, aussi, ainsi, à peine...), on peut inverser le sujet et le verbe dans le registre soutenu :

- "**Peut-être conviendrait-il** de reconsidérer cette politique." (au lieu de "Il conviendrait peut-être")
- "**Sans doute faudrait-il** revoir ce dispositif."
- "**Aussi convient-il** de rappeler que..." (ici "aussi" = "c'est pourquoi", pas "également")
- "**À peine avait-il** terminé qu'il recommençait."

### Avec un pronom sujet
S'il n'y a pas de pronom, on ajoute un pronom de reprise après le verbe :
"Le ministre, **peut-être** est-ce inattendu, a annoncé un changement de cap."
"Cette décision, **ainsi** s'explique-t-elle par des contraintes budgétaires."

⚠️ Cette inversion est un marqueur fort du REGISTRE SOUTENU — à utiliser avec discernement, surtout à l'écrit formel.`,

      keyPoints: [
        'Litote = atténuer pour souligner ("pas sans risque" = risqué)',
        'Anaphore = répétition en tête de phrase pour insister',
        'Gradation = intensité croissante ("discutable, contestable, voire dangereux")',
        'Inversion après adverbe en tête : "Peut-être conviendrait-il de..." (registre très soutenu)',
        '"Aussi" en tête de phrase + inversion = "c\'est pourquoi" (pas "également")',
      ],

      exercises: [
        {
          id: 'b2-ecr-03-ex01',
          type: 'qcm',
          question: 'Quelle figure de style est employée dans "cette mesure n\'est pas sans risque" ?',
          options: ['L\'anaphore', 'La litote', 'Le chiasme', 'La gradation'],
          correctIndex: 1,
          explanation: 'C\'est une LITOTE : on atténue formellement l\'expression ("pas sans risque" plutôt que "risquée") pour en réalité SOULIGNER l\'idée avec plus de force et de subtilité. La double négation crée un effet d\'insistance paradoxal.',
        },
        {
          id: 'b2-ecr-03-ex02',
          type: 'qcm',
          question: 'Inversion sujet-verbe : "___ conviendrait-il de reconsidérer cette politique."',
          options: ['Cependant', 'Peut-être', 'Donc', 'Aussi bien'],
          correctIndex: 1,
          explanation: '"PEUT-ÊTRE conviendrait-il de reconsidérer..." "Peut-être" en tête de phrase déclenche l\'inversion sujet-verbe dans le registre soutenu : "il conviendrait" → "conviendrait-il".',
        },
        {
          id: 'b2-ecr-03-ex03',
          type: 'qcm',
          question: 'Quelle figure de style est "Il faut agir. Il faut décider. Il faut, enfin, assumer." ?',
          options: ['La litote', 'L\'anaphore', 'Le chiasme', 'L\'antithèse'],
          correctIndex: 1,
          explanation: 'C\'est une ANAPHORE : la répétition de "il faut" en début de chaque phrase crée un effet d\'INSISTANCE rythmée, renforçant la force persuasive du propos. Technique rhétorique classique des discours et essais.',
        },
        {
          id: 'b2-ecr-03-ex04',
          type: 'qcm',
          question: 'Que signifie "aussi" en tête de phrase avec inversion : "Aussi convient-il de rappeler que..." ?',
          options: ['Également / en plus', 'C\'est pourquoi / par conséquent', 'Mais', 'Cependant'],
          correctIndex: 1,
          explanation: 'Attention au piège : "AUSSI" en TÊTE de phrase avec inversion = "C\'EST POURQUOI / PAR CONSÉQUENT" (sens de conséquence), et non "également" (qui se place en milieu/fin de phrase sans inversion : "il convient aussi de...").',
        },
        {
          id: 'b2-ecr-03-ex05',
          type: 'qcm',
          question: 'Quelle figure de style est "le système protège les uns mais fragilise les autres" ?',
          options: ['L\'anaphore', 'La gradation', 'L\'antithèse', 'La litote'],
          correctIndex: 2,
          explanation: 'C\'est une ANTITHÈSE : on oppose deux idées contraires ("protège" vs "fragilise", "les uns" vs "les autres") dans une même phrase pour mettre en évidence une TENSION ou une contradiction du système décrit.',
        },
        {
          id: 'b2-ecr-03-ex06',
          type: 'qcm',
          question: 'Inversion : "Sans doute ___ -il revoir ce dispositif." (falloir)',
          options: ['faut', 'faudrait', 'fallait', 'faudra'],
          correctIndex: 1,
          explanation: '"Sans doute FAUDRAIT-il revoir ce dispositif." "Sans doute" en tête déclenche l\'inversion. Conditionnel ("faudrait") car c\'est une suggestion nuancée, pas une certitude absolue. "Faudrait-il" (inversion sujet-verbe impersonnel).',
        },
        {
          id: 'b2-ecr-03-ex07',
          type: 'qcm',
          question: 'Quelle figure de style est "une mesure discutable, contestable, voire dangereuse" ?',
          options: ['Le chiasme', 'La gradation', 'L\'antithèse', 'La litote'],
          correctIndex: 1,
          explanation: 'C\'est une GRADATION : les adjectifs sont organisés par INTENSITÉ CROISSANTE (discutable < contestable < dangereuse), créant un effet d\'escalade qui renforce progressivement la critique exprimée.',
        },
        {
          id: 'b2-ecr-03-ex08',
          type: 'qcm',
          question: 'Quelle figure de style est "il ne faut pas vivre pour travailler, mais travailler pour vivre" ?',
          options: ['La litote', 'L\'anaphore', 'Le chiasme', 'La gradation'],
          correctIndex: 2,
          explanation: 'C\'est un CHIASME : les éléments sont repris en ordre INVERSÉ et SYMÉTRIQUE (vivre/travailler puis travailler/vivre), créant un effet de miroir qui souligne le renversement de perspective proposé.',
        },
        {
          id: 'b2-ecr-03-ex09',
          type: 'qcm',
          question: 'Inversion avec pronom de reprise (sujet nominal) : "Cette décision, ainsi ___ -elle par des contraintes budgétaires." (s\'expliquer)',
          options: ['s\'explique', 's\'explique-t', 's\'explique', 'expliquerait'],
          correctIndex: 1,
          explanation: '"Cette décision, ainsi S\'EXPLIQUE-T-ELLE par des contraintes budgétaires." Quand le sujet est un nom ("cette décision"), on ajoute un PRONOM DE REPRISE ("elle") après le verbe inversé, avec "-t-" euphonique entre deux voyelles.',
        },
        {
          id: 'b2-ecr-03-ex10',
          type: 'qcm',
          question: 'Que signifie "le fait que cette mesure soit critiquée n\'enlève rien à sa pertinence" ?',
          options: [
            'La mesure n\'est pas du tout critiquée',
            'Même si la mesure est critiquée, cela ne diminue pas sa valeur ou son utilité',
            'La mesure doit être abandonnée car critiquée',
            'La critique rend la mesure totalement inutile',
          ],
          correctIndex: 1,
          explanation: '"Le fait que X soit critiqué n\'enlève rien à Y" = même si X est critiqué (concession), cela ne diminue pas Y (la pertinence reste intacte). Structure concessive sophistiquée utilisant le subjonctif après "le fait que" pour exprimer une nuance.',
        },
        {
          id: 'b2-ecr-03-ex11',
          type: 'qcm',
          question: 'Quelle est la fonction de l\'incise dans "Cette réforme, contestée par certains, demeure néanmoins nécessaire" ?',
          options: [
            'Conclure le texte',
            'Insérer une information secondaire/concessive sans interrompre le flux principal de la phrase',
            'Poser une question',
            'Citer un auteur',
          ],
          correctIndex: 1,
          explanation: 'L\'INCISE ("contestée par certains") insère une information CONCESSIVE entre virgules, sans interrompre la STRUCTURE PRINCIPALE de la phrase ("cette réforme... demeure néanmoins nécessaire"). Technique élégante pour intégrer une nuance sans alourdir le propos avec une proposition subordonnée complète.',
        },
        {
          id: 'b2-ecr-03-ex12',
          type: 'qcm',
          question: 'Litote : "Ce n\'est pas inintéressant" signifie en réalité :',
          options: ['C\'est ennuyeux', 'C\'est plutôt intéressant (avec une touche de retenue)', 'C\'est neutre', 'C\'est incompréhensible'],
          correctIndex: 1,
          explanation: '"Ce n\'est pas inintéressant" (double négation : pas + inintéressant) = c\'est plutôt intéressant, mais exprimé avec une RETENUE caractéristique de la litote, qui suggère sans affirmer trop directement. Effet de politesse ou de prudence rhétorique.',
        },
        {
          id: 'b2-ecr-03-ex13',
          type: 'qcm',
          question: 'Inversion : "À peine ___ -il terminé qu\'il recommençait." (avoir)',
          options: ['a', 'avait', 'aura', 'aurait'],
          correctIndex: 1,
          explanation: '"À PEINE avait-il terminé qu\'il recommençait." "À peine" en tête de phrase déclenche l\'inversion. Plus-que-parfait ici car l\'action de terminer est antérieure à celle de recommencer (succession rapide d\'actions passées).',
        },
        {
          id: 'b2-ecr-03-ex14',
          type: 'qcm',
          question: 'Pourquoi utiliser une gradation plutôt qu\'un simple adjectif unique ("dangereuse") ?',
          options: [
            'Pour allonger artificiellement la phrase',
            'Pour créer un effet d\'intensification progressive qui renforce la force persuasive de l\'argument',
            'Parce qu\'un seul adjectif est toujours incorrect',
            'Pour éviter de répéter le même mot',
          ],
          correctIndex: 1,
          explanation: 'La gradation crée un effet RHÉTORIQUE d\'INTENSIFICATION PROGRESSIVE : chaque terme renforce le précédent, menant le lecteur pas à pas vers la conclusion la plus forte ("voire dangereuse"), ce qui est plus PERSUASIF qu\'une simple affirmation directe.',
        },
        {
          id: 'b2-ecr-03-ex15',
          type: 'qcm',
          question: 'Quel registre la phrase "Peut-être conviendrait-il de reconsidérer cette politique" reflète-t-elle ?',
          options: ['Familier', 'Courant/neutre', 'Soutenu/littéraire', 'Argotique'],
          correctIndex: 2,
          explanation: 'L\'inversion sujet-verbe après "peut-être" + le conditionnel ("conviendrait-il") marquent un registre SOUTENU/LITTÉRAIRE, typique des essais, éditoriaux ou discours formels. À l\'oral courant, on dirait plutôt "il faudrait peut-être reconsidérer..."',
        },
        {
          id: 'b2-ecr-03-ex16',
          type: 'qcm',
          question: 'Dans quel contexte ces figures de style (litote, anaphore, gradation, chiasme) sont-elles particulièrement utiles ?',
          options: [
            'Uniquement dans la poésie',
            'Dans l\'essai argumentatif et le discours soutenu, pour renforcer la force persuasive et l\'élégance du propos',
            'Jamais à l\'écrit, seulement à l\'oral',
            'Uniquement dans les SMS',
          ],
          correctIndex: 1,
          explanation: 'Ces figures appartiennent traditionnellement à la RHÉTORIQUE et à la LITTÉRATURE, mais elles sont très utiles dans l\'ESSAI ARGUMENTATIF et le DISCOURS SOUTENU pour renforcer la force persuasive du propos tout en lui donnant de l\'ÉLÉGANCE stylistique, signe de maîtrise avancée de la langue.',
        },
        {
          id: 'b2-ecr-03-ex17',
          type: 'qcm',
          question: 'Quelle figure de style insiste sur une opposition forte entre deux éléments d\'une phrase ?',
          options: ['La litote', 'L\'antithèse', 'L\'anaphore', 'L\'inversion'],
          correctIndex: 1,
          explanation: 'L\'ANTITHÈSE oppose deux éléments CONTRAIRES dans une même phrase ou un même passage, créant un contraste fort qui met en évidence une tension ou une contradiction ("protège les uns MAIS fragilise les autres").',
        },
        {
          id: 'b2-ecr-03-ex18',
          type: 'qcm',
          question: 'Pourquoi faut-il utiliser ces inversions et figures de style "avec discernement" plutôt que systématiquement ?',
          options: [
            'Parce qu\'elles sont toujours incorrectes',
            'Parce qu\'un usage excessif peut rendre le texte artificiel ou pompeux, à l\'inverse de l\'effet d\'élégance recherché',
            'Parce qu\'elles ne s\'utilisent qu\'à l\'oral',
            'Parce que c\'est interdit en français standard',
          ],
          correctIndex: 1,
          explanation: 'Un usage EXCESSIF de ces figures de style et inversions peut rendre le texte ARTIFICIEL ou POMPEUX, produisant l\'effet inverse de celui recherché (élégance et clarté). Le bon style à l\'écrit consiste à doser ces effets avec PARCIMONIE, au service du sens, pas pour impressionner gratuitement.',
        },
        {
          id: 'b2-ecr-03-ex19',
          type: 'qcm',
          question: 'Quelle structure exprime une concession sophistiquée avec subjonctif ?',
          options: [
            '"Parce que cette mesure est critiquée..."',
            '"Le fait que cette mesure soit critiquée n\'enlève rien à sa pertinence."',
            '"Cette mesure est critiquée et inutile."',
            '"Si cette mesure est critiquée, elle sera supprimée."',
          ],
          correctIndex: 1,
          explanation: '"Le fait que + subjonctif... n\'enlève rien à..." est une structure CONCESSIVE sophistiquée : on reconnaît un fait (la critique) tout en affirmant qu\'il ne change rien à la conclusion (la pertinence). Le subjonctif après "le fait que" marque ici la mise à distance du fait, même s\'il est réel.',
        },
        {
          id: 'b2-ecr-03-ex20',
          type: 'qcm',
          question: 'Quel est l\'objectif global de maîtriser ces figures de style au niveau B2 ?',
          options: [
            'Impressionner sans se préoccuper du sens',
            'Enrichir l\'expression écrite pour qu\'elle soit non seulement correcte mais aussi élégante, nuancée et persuasive',
            'Remplacer complètement la grammaire de base',
            'Éviter d\'utiliser des phrases simples',
          ],
          correctIndex: 1,
          explanation: 'Au niveau B2, l\'objectif est d\'ENRICHIR l\'expression écrite au-delà de la simple correction grammaticale : rendre le texte plus ÉLÉGANT, plus NUANCÉ et plus PERSUASIF grâce à des figures de style maîtrisées, tout en gardant la clarté du propos comme priorité absolue.',
        },
      ],
    },

    {
      id: 'b2-ecr-04',
      slug: 'b2-rapport-note-synthese',
      moduleSlug: 'b2-expression-ecrite',
      level: 'B2',
      title: 'Rédiger un rapport ou une note argumentée',
      description: 'Structurer un rapport professionnel avec recommandations et conclusions actionnables.',
      duration: 12,
      free: false,
      dialogue: `## Exemple : Note de synthèse — Accès aux droits des nouveaux arrivants

**NOTE DE SYNTHÈSE**
**Objet :** Difficultés d'accès aux droits sociaux rencontrées par les nouveaux arrivants
**Destinataire :** Direction de l'association
**Date :** 12 mars 2024

**1. Contexte**
Depuis 2022, l'association accompagne un nombre croissant de bénéficiaires primo-arrivants (+35% en deux ans). Cette note vise à dresser un état des lieux des principales difficultés rencontrées et à formuler des recommandations opérationnelles.

**2. Constats**
2.1. Méconnaissance des dispositifs existants
Plus de 60% des bénéficiaires interrogés ignoraient l'existence de l'Aide Médicale d'État avant leur premier rendez-vous avec un conseiller.

2.2. Difficultés linguistiques persistantes
Les démarches numériques (impôts.gouv, ameli.fr) demeurent un obstacle majeur, le langage administratif employé restant peu accessible aux niveaux A2-B1.

2.3. Délais de traitement variables
Les délais constatés varient de 2 à 6 mois selon les caisses, sans justification apparente.

**3. Recommandations**
- Renforcer l'information dès le premier accueil, par une fiche synthétique multilingue.
- Développer un accompagnement numérique dédié (permanences "aide aux démarches en ligne").
- Engager un dialogue avec les CAF/CPAM concernées afin d'identifier les causes des écarts de délai.

**4. Conclusion**
Ces constats, bien qu'issus d'un échantillon limité, dessinent des pistes d'amélioration concrètes que la direction pourrait envisager de mettre en œuvre à court terme.`,

      linguisticPoint: `## Point linguistique : Le langage des recommandations professionnelles

### Formuler une recommandation avec différents degrés d'intensité
| Intensité | Formule |
|---|---|
| Forte | Il est impératif de... / Il convient absolument de... |
| Modérée | Il serait souhaitable de... / Il conviendrait de... |
| Suggestion | On pourrait envisager de... / Il serait opportun de... |

### Présenter des données chiffrées avec nuance
- "Plus de 60% des bénéficiaires..." (donnée précise)
- "Les délais varient de X à Y..." (fourchette)
- "Ces constats, bien qu'issus d'un échantillon limité, ..." (limite méthodologique reconnue)

### Verbes pour structurer un rapport
dresser un état des lieux, constater, recenser, identifier les causes, formuler des recommandations, envisager de mettre en œuvre

### Conclusion actionnable (orientée vers la décision)
- "Ces éléments dessinent des pistes d'amélioration concrètes."
- "La direction pourrait envisager de..." (suggestion respectueuse de la hiérarchie)`,

      keyPoints: [
        'Structure standard : contexte / constats (numérotés) / recommandations / conclusion',
        'Recommandations graduées : "il est impératif de" (fort) → "on pourrait envisager de" (suggestion)',
        '"Bien qu\'issus d\'un échantillon limité" = honnêteté méthodologique, renforce la crédibilité',
        'Verbes de structuration : dresser un état des lieux / recenser / identifier les causes',
        'Conclusion actionnable = orientée vers une décision possible, pas juste un résumé',
      ],

      exercises: [
        {
          id: 'b2-ecr-04-ex01',
          type: 'qcm',
          question: 'Quelles sont les 4 parties standards d\'une note de synthèse professionnelle ?',
          options: [
            'Introduction, développement, conclusion, annexe',
            'Contexte, constats, recommandations, conclusion',
            'Thèse, antithèse, synthèse, ouverture',
            'Résumé, citations, opinion, signature',
          ],
          correctIndex: 1,
          explanation: 'La structure standard d\'une note de synthèse professionnelle est : CONTEXTE (pourquoi cette note), CONSTATS (les faits observés, souvent numérotés), RECOMMANDATIONS (actions proposées), CONCLUSION (synthèse + perspective d\'action).',
        },
        {
          id: 'b2-ecr-04-ex02',
          type: 'qcm',
          question: 'Recommandation forte : "___ renforcer la sécurité du dispositif." (intensité maximale)',
          options: [
            'On pourrait envisager de',
            'Il serait souhaitable de',
            'Il est impératif de',
            'Il serait opportun de',
          ],
          correctIndex: 2,
          explanation: '"Il EST IMPÉRATIF DE renforcer la sécurité." "Il est impératif de" = formule de recommandation la plus FORTE, signalant une urgence ou une nécessité absolue. Les autres formules ("on pourrait envisager", "il serait opportun") sont plus douces/suggestives.',
        },
        {
          id: 'b2-ecr-04-ex03',
          type: 'qcm',
          question: 'Pourquoi l\'auteur précise-t-il "ces constats, bien qu\'issus d\'un échantillon limité" ?',
          options: [
            'Pour invalider totalement ses propres constats',
            'Par honnêteté méthodologique, en reconnaissant une limite de l\'étude tout en maintenant la valeur de ses conclusions',
            'Pour s\'excuser d\'avoir écrit la note',
            'Pour critiquer la direction',
          ],
          correctIndex: 1,
          explanation: 'Reconnaître une LIMITE méthodologique (échantillon limité) tout en maintenant la valeur des conclusions ("dessinent des pistes d\'amélioration concrètes") renforce paradoxalement la CRÉDIBILITÉ de l\'auteur : il fait preuve de RIGUEUR scientifique plutôt que de surinterpréter ses données.',
        },
        {
          id: 'b2-ecr-04-ex04',
          type: 'qcm',
          question: 'Recommandation modérée : "Il ___ de développer un accompagnement numérique dédié."',
          options: ['serait souhaitable', 'est interdit', 'serait inutile', 'est strictement défendu'],
          correctIndex: 0,
          explanation: '"Il SERAIT SOUHAITABLE de développer..." Recommandation d\'intensité MODÉRÉE : on suggère une amélioration sans imposer une obligation absolue. Registre approprié pour une note destinée à une direction qui doit garder son pouvoir de décision.',
        },
        {
          id: 'b2-ecr-04-ex05',
          type: 'qcm',
          question: 'Que signifie "dresser un état des lieux" ?',
          options: [
            'Construire un bâtiment',
            'Faire un bilan/diagnostic objectif d\'une situation à un moment donné',
            'Décorer un lieu de travail',
            'Déménager dans un nouveau bureau',
          ],
          correctIndex: 1,
          explanation: '"Dresser un état des lieux" = faire un BILAN/DIAGNOSTIC objectif et complet d\'une situation à un moment précis. Expression très utilisée dans les rapports professionnels pour introduire la partie "constats", avant de proposer des solutions.',
        },
        {
          id: 'b2-ecr-04-ex06',
          type: 'qcm',
          question: 'Présenter une fourchette de données : "Les délais constatés ___ de 2 à 6 mois."',
          options: ['varient', 'sont stables', 'augmentent', 'diminuent'],
          correctIndex: 0,
          explanation: '"Les délais constatés VARIENT de 2 à 6 mois." "Varier de X à Y" = présenter une FOURCHETTE de valeurs observées, sans donner une moyenne unique qui masquerait la diversité réelle des situations. Précision statistique appropriée pour un rapport factuel.',
        },
        {
          id: 'b2-ecr-04-ex07',
          type: 'qcm',
          question: 'Suggestion respectueuse de la hiérarchie : "La direction ___ envisager de mettre en œuvre ces mesures."',
          options: ['doit', 'devrait absolument', 'pourrait', 'ne peut pas'],
          correctIndex: 2,
          explanation: '"La direction POURRAIT envisager..." Le conditionnel "pourrait" (et non "doit") respecte le pouvoir DÉCISIONNEL de la direction : l\'auteur propose sans imposer, ce qui est l\'attitude appropriée d\'un subordonné rédigeant une note pour sa hiérarchie.',
        },
        {
          id: 'b2-ecr-04-ex08',
          type: 'qcm',
          question: 'Que signifie "recenser" dans le contexte d\'un rapport ?',
          options: [
            'Ignorer délibérément',
            'Dresser une liste systématique et complète d\'éléments',
            'Critiquer fortement',
            'Inventer des données',
          ],
          correctIndex: 1,
          explanation: '"Recenser" = dresser une liste systématique et exhaustive (à l\'origine : faire le recensement de population). "Recenser les difficultés rencontrées" = lister méthodiquement toutes les difficultés identifiées, sans en omettre.',
        },
        {
          id: 'b2-ecr-04-ex09',
          type: 'qcm',
          question: 'Suggestion légère : "___ engager un dialogue avec les CAF concernées."',
          options: [
            'Il est interdit de',
            'On pourrait envisager d\'',
            'Il est totalement impossible d\'',
            'Il ne faut jamais',
          ],
          correctIndex: 1,
          explanation: '"ON POURRAIT ENVISAGER D\'engager un dialogue..." Formule de SUGGESTION LÉGÈRE, la plus douce des recommandations. Approprié pour une action qui dépend de partenaires externes (CAF/CPAM) sur lesquels l\'organisation rédactrice n\'a pas d\'autorité directe.',
        },
        {
          id: 'b2-ecr-04-ex10',
          type: 'qcm',
          question: 'Pourquoi est-il important de présenter des données chiffrées précises (ex : "60% des bénéficiaires") dans un rapport ?',
          options: [
            'Pour impressionner sans fondement',
            'Pour donner de la crédibilité et de l\'objectivité aux constats, en les distinguant d\'impressions subjectives',
            'Parce que c\'est obligatoire légalement',
            'Pour rendre le rapport plus long',
          ],
          correctIndex: 1,
          explanation: 'Les données CHIFFRÉES précises ("plus de 60%") donnent une base OBJECTIVE et VÉRIFIABLE aux constats, les distinguant d\'impressions subjectives ou anecdotiques. Cela renforce la CRÉDIBILITÉ du rapport et la légitimité des recommandations qui en découlent.',
        },
        {
          id: 'b2-ecr-04-ex11',
          type: 'qcm',
          question: 'Que signifie "identifier les causes des écarts de délai" ?',
          options: [
            'Ignorer pourquoi les délais varient',
            'Rechercher et comprendre les raisons expliquant les différences observées dans les délais',
            'Calculer la moyenne des délais',
            'Critiquer les organismes responsables',
          ],
          correctIndex: 1,
          explanation: '"Identifier les causes" = chercher à COMPRENDRE pourquoi un phénomène se produit (ici, les écarts de délai entre 2 et 6 mois). Cette démarche analytique précède souvent la formulation de recommandations, car on ne peut résoudre un problème sans en comprendre l\'origine.',
        },
        {
          id: 'b2-ecr-04-ex12',
          type: 'qcm',
          question: 'Quelle est la fonction d\'une "conclusion actionnable" dans un rapport ?',
          options: [
            'Résumer simplement ce qui a été dit, sans perspective',
            'Orienter le lecteur vers une décision ou une action concrète possible, pas seulement résumer',
            'Poser de nouvelles questions sans rapport',
            'Critiquer le travail réalisé',
          ],
          correctIndex: 1,
          explanation: 'Une conclusion ACTIONNABLE va au-delà du simple RÉSUMÉ : elle ORIENTE le lecteur (souvent un décideur) vers une ACTION ou une DÉCISION concrète possible. "La direction pourrait envisager de mettre en œuvre" appelle explicitement à une suite opérationnelle, pas juste à une réflexion abstraite.',
        },
        {
          id: 'b2-ecr-04-ex13',
          type: 'qcm',
          question: '"Le langage administratif employé restant peu accessible aux niveaux A2-B1" — quelle structure grammaticale est utilisée ici ?',
          options: [
            'Une proposition relative',
            'Une proposition participiale (avec participe présent)',
            'Une question rhétorique',
            'Un discours indirect',
          ],
          correctIndex: 1,
          explanation: 'C\'est une PROPOSITION PARTICIPIALE : "le langage... RESTANT peu accessible" (participe présent de "rester") remplace une proposition causale complète ("car le langage administratif reste peu accessible"). Construction concise et élégante, typique du style rapport.',
        },
        {
          id: 'b2-ecr-04-ex14',
          type: 'qcm',
          question: 'Que signifie "primo-arrivants" dans ce contexte ?',
          options: [
            'Les personnes nées en France',
            'Les personnes récemment arrivées dans le pays/la structure',
            'Les premiers clients historiques de l\'association',
            'Les bénévoles de l\'association',
          ],
          correctIndex: 1,
          explanation: '"Primo-arrivants" = personnes récemment arrivées dans un pays ou une situation (ici, nouveaux migrants récemment installés en France). Terme technique courant dans le secteur social et associatif pour désigner les nouveaux bénéficiaires d\'un dispositif d\'accueil.',
        },
        {
          id: 'b2-ecr-04-ex15',
          type: 'qcm',
          question: 'Pourquoi numéroter les constats (2.1, 2.2, 2.3) dans une note de synthèse ?',
          options: [
            'Pour respecter une norme esthétique sans utilité',
            'Pour faciliter la lecture, le repérage et les références ultérieures à des points précis',
            'Parce que c\'est obligatoire légalement',
            'Pour rendre le document plus impressionnant',
          ],
          correctIndex: 1,
          explanation: 'La NUMÉROTATION (2.1, 2.2, 2.3) facilite la LECTURE rapide (le lecteur identifie immédiatement la structure), le REPÉRAGE de points précis, et permet des RÉFÉRENCES ultérieures faciles ("voir le point 2.2"). Pratique standard dans les documents professionnels structurés.',
        },
        {
          id: 'b2-ecr-04-ex16',
          type: 'qcm',
          question: 'Quelle est la différence entre "constat" et "recommandation" dans une note de synthèse ?',
          options: [
            'Aucune différence, ce sont des synonymes',
            'Le constat décrit une situation observée (fait), la recommandation propose une action à entreprendre (solution)',
            'La recommandation vient toujours avant le constat',
            'Le constat est toujours négatif',
          ],
          correctIndex: 1,
          explanation: 'Le CONSTAT décrit OBJECTIVEMENT une situation observée (ex : "60% ignoraient l\'AME"), c\'est un FAIT. La RECOMMANDATION propose une ACTION pour répondre à ce constat (ex : "renforcer l\'information"), c\'est une SOLUTION. Cette distinction structure logiquement le rapport.',
        },
        {
          id: 'b2-ecr-04-ex17',
          type: 'qcm',
          question: '"Une fiche synthétique multilingue" comme recommandation vise à répondre à quel constat ?',
          options: [
            'Les délais de traitement variables',
            'La méconnaissance des dispositifs existants',
            'Le manque de personnel',
            'Le budget insuffisant',
          ],
          correctIndex: 1,
          explanation: 'La recommandation "fiche synthétique multilingue" répond directement au CONSTAT 2.1 ("méconnaissance des dispositifs existants" — 60% ignoraient l\'AME). Une fiche en plusieurs langues, distribuée dès l\'accueil, permettrait de mieux informer les nouveaux arrivants sur leurs droits.',
        },
        {
          id: 'b2-ecr-04-ex18',
          type: 'qcm',
          question: 'Pourquoi la note précise-t-elle "+35% en deux ans" dans le contexte introductif ?',
          options: [
            'Pour critiquer l\'augmentation des bénéficiaires',
            'Pour justifier la pertinence et l\'urgence de produire cette note d\'analyse',
            'Pour calculer un budget',
            'Sans raison particulière',
          ],
          correctIndex: 1,
          explanation: 'Mentionner l\'augmentation "+35% en deux ans" en INTRODUCTION justifie la PERTINENCE et l\'URGENCE de cette analyse : l\'augmentation du nombre de bénéficiaires rend les difficultés identifiées plus PRESSANTES à résoudre, légitimant la production de cette note.',
        },
        {
          id: 'b2-ecr-04-ex19',
          type: 'qcm',
          question: 'Quel registre de langue est attendu dans une note de synthèse professionnelle ?',
          options: [
            'Familier et oral',
            'Formel, factuel, précis, sans familiarité ni emphase excessive',
            'Poétique et lyrique',
            'Argotique avec abréviations',
          ],
          correctIndex: 1,
          explanation: 'Une note de synthèse professionnelle exige un registre FORMEL et FACTUEL : précision des données, absence de familiarité, neutralité du ton (même dans les recommandations), tout en restant clair et actionnable pour le destinataire (souvent un décideur).',
        },
        {
          id: 'b2-ecr-04-ex20',
          type: 'qcm',
          question: 'Quelle compétence professionnelle ce type de rédaction développe-t-elle particulièrement, utile aussi pour l\'intégration en France ?',
          options: [
            'La capacité à improviser sans préparation',
            'La capacité à analyser une situation, structurer des constats factuels et formuler des recommandations argumentées et graduées',
            'La capacité à mémoriser des formules sans les comprendre',
            'La capacité à éviter tout contact avec l\'administration',
          ],
          correctIndex: 1,
          explanation: 'Rédiger une note de synthèse développe une compétence PROFESSIONNELLE TRANSVERSALE essentielle : analyser une situation complexe, structurer des CONSTATS factuels, et formuler des RECOMMANDATIONS argumentées et graduées en intensité. Cette compétence est précieuse non seulement en entreprise, mais aussi pour interagir efficacement avec l\'administration française (courriers, dossiers argumentés).',
        },
      ],
    },
  ],
};
