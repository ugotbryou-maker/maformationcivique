import type { LangModule } from '../types';

export const b2TextesArgumentatifs: LangModule = {
  id: 'b2-mod-01',
  slug: 'b2-textes-argumentatifs',
  level: 'B2',
  title: 'Textes argumentatifs',
  subtitle: 'Analyser, construire et nuancer un argumentaire',
  description: 'Développez votre capacité à comprendre et produire des textes argumentatifs complexes, essentiels pour le niveau B2.',
  type: 'thematique',
  emoji: '📝',
  free: false,
  lessons: [
    {
      id: 'b2-arg-01',
      slug: 'b2-analyser-texte-argumentatif',
      moduleSlug: 'b2-textes-argumentatifs',
      level: 'B2',
      title: 'Analyser un texte argumentatif',
      description: 'Identifier la thèse, les arguments et la stratégie rhétorique d\'un texte d\'opinion.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Faut-il réformer le système des aides sociales ? (extrait d'éditorial)

La question de la réforme des aides sociales en France suscite un débat aussi vif que récurrent. D'un côté, ses détracteurs y voient un système coûteux qui découragerait le retour à l'emploi. De l'autre, ses défenseurs rappellent qu'il constitue un filet de sécurité indispensable dans une société marquée par les inégalités.

Certes, on ne saurait nier que certains dispositifs présentent des effets de seuil problématiques : un euro de revenu supplémentaire peut, dans certains cas, entraîner la perte d'aides d'un montant bien supérieur. Ce paradoxe, loin d'être anecdotique, mérite d'être traité avec sérieux.

Toutefois, réduire le débat à cette seule question reviendrait à occulter l'essentiel. Car au-delà des dysfonctionnements techniques, c'est bien la fonction structurelle de notre modèle social qui est en jeu. Sans ce filet de sécurité, des millions de Français basculeraient dans une précarité encore plus sévère — un scénario dont les conséquences, tant sociales qu'économiques, seraient autrement plus coûteuses pour la collectivité.

Dès lors, plutôt que d'opposer stérilement assistanat et mérite, ne devrait-on pas s'interroger sur les moyens de concilier solidarité et incitation au travail ? C'est précisément cette voie médiane qu'explorent plusieurs pays nordiques, avec des résultats qui méritent d'être étudiés de près.`,

      linguisticPoint: `## Point linguistique : Le registre soutenu — formules d'analyse

### Introduire une thèse / un constat
- "La question de... suscite un débat..."
- "On ne saurait nier que..." (= on ne peut pas nier)
- "Il convient de souligner que..."
- "Force est de constater que..."

### Marquer une concession avant de réfuter
- "Certes, ... Toutefois / Cependant / Néanmoins, ..."
- "S'il est vrai que..., il n'en demeure pas moins que..."
- "Loin de nier que..., on peut affirmer que..."

### Exprimer une réserve nuancée
- "Ce paradoxe... mérite d'être traité avec sérieux." (= sans être ignoré ni exagéré)
- "Réduire le débat à... reviendrait à occulter l'essentiel."

### Question rhétorique pour orienter le lecteur
- "Dès lors, ne devrait-on pas s'interroger sur... ?" (suggère une réponse sans l'imposer)`,

      keyPoints: [
        '"Certes... toutefois..." = concession suivie d\'une réfutation nuancée',
        '"On ne saurait nier que" = on ne peut pas nier (registre soutenu)',
        '"Réduire le débat à X reviendrait à occulter l\'essentiel" = critique d\'une simplification',
        'Question rhétorique en fin de paragraphe = oriente le lecteur sans imposer de conclusion',
        '"Effet de seuil" = vocabulaire technique des politiques sociales',
      ],

      exercises: [
        {
          id: 'b2-arg-01-ex01',
          type: 'qcm',
          question: 'Quelle est la fonction rhétorique de "Certes, ... Toutefois, ..." dans ce texte ?',
          options: [
            'Présenter deux arguments de force égale sans hiérarchie',
            'Concéder un point à l\'adversaire avant de réorienter l\'argumentation vers sa propre thèse',
            'Contredire totalement l\'argument précédent',
            'Résumer l\'ensemble du texte',
          ],
          correctIndex: 1,
          explanation: '"Certes... toutefois..." = structure concessive classique : on accorde un point à la partie adverse ("certes, les effets de seuil sont problématiques") pour ensuite réorienter vers sa propre thèse ("toutefois, réduire le débat à cela serait occulter l\'essentiel"). Stratégie rhétorique qui renforce la crédibilité de l\'auteur.',
        },
        {
          id: 'b2-arg-01-ex02',
          type: 'qcm',
          question: '"On ne saurait nier que" signifie :',
          options: [
            'On pourrait éventuellement nier que',
            'On ne peut absolument pas nier que (= il est indéniable que)',
            'On devrait nier que',
            'On ignore si l\'on doit nier que',
          ],
          correctIndex: 1,
          explanation: '"On ne saurait nier que" = on ne pourrait pas nier que / il est indéniable que. "Savoir" employé ici au conditionnel avec sens proche de "pouvoir", registre très soutenu. Formule typique de l\'essai argumentatif pour introduire un fait difficilement contestable.',
        },
        {
          id: 'b2-arg-01-ex03',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un "effet de seuil" dans le contexte des aides sociales ?',
          options: [
            'Le montant minimum pour bénéficier d\'une aide',
            'Une situation où une petite augmentation de revenu entraîne la perte d\'aides d\'un montant supérieur',
            'Le seuil de pauvreté officiel',
            'La limite d\'âge pour percevoir une aide',
          ],
          correctIndex: 1,
          explanation: 'L\'"effet de seuil" désigne le phénomène par lequel franchir un seuil de ressources (même de peu) fait perdre intégralement une aide, créant une perte nette de revenu disponible. C\'est un dysfonctionnement technique réel des systèmes d\'aides sociales, souvent cité dans les débats sur leur réforme.',
        },
        {
          id: 'b2-arg-01-ex04',
          type: 'qcm',
          question: 'Que signifie "réduire le débat à cette seule question reviendrait à occulter l\'essentiel" ?',
          options: [
            'Cette question est la plus importante de toutes',
            'Se concentrer uniquement sur ce point ferait oublier des enjeux plus fondamentaux',
            'Le débat devrait être interdit',
            'Cette question n\'a aucune importance',
          ],
          correctIndex: 1,
          explanation: '"Reviendrait à occulter l\'essentiel" = aurait pour conséquence de cacher/masquer ce qui est fondamental. L\'auteur reconnaît le problème (effets de seuil) mais argue qu\'il ne doit pas faire oublier la fonction plus large du système (filet de sécurité social).',
        },
        {
          id: 'b2-arg-01-ex05',
          type: 'qcm',
          question: 'Quelle est la fonction de la question finale "ne devrait-on pas s\'interroger sur... ?" ',
          options: [
            'Demander une réponse immédiate au lecteur',
            'Orienter subtilement le lecteur vers la conclusion de l\'auteur sans l\'affirmer directement',
            'Exprimer un doute total de l\'auteur sur sa propre thèse',
            'Terminer le texte sans aucune prise de position',
          ],
          correctIndex: 1,
          explanation: 'La question rhétorique ("ne devrait-on pas...") est une figure de style qui SUGGÈRE une réponse (oui, il faudrait s\'interroger sur la voie médiane) sans l\'affirmer de façon péremptoire. Elle invite le lecteur à partager la conclusion de l\'auteur tout en préservant une apparence d\'ouverture au débat.',
        },
        {
          id: 'b2-arg-01-ex06',
          type: 'qcm',
          question: '"Opposer stérilement assistanat et mérite" — que signifie "stérilement" ?',
          options: [
            'De façon hygiénique',
            'De manière improductive, sans résultat constructif',
            'De façon rapide',
            'De manière scientifique',
          ],
          correctIndex: 1,
          explanation: '"Stérilement" (de "stérile" = qui ne produit rien) signifie de façon IMPRODUCTIVE, sans aboutir à un résultat constructif. "Opposer stérilement deux notions" = les mettre en opposition de façon qui ne fait avancer ni la réflexion ni la situation concrète.',
        },
        {
          id: 'b2-arg-01-ex07',
          type: 'qcm',
          question: 'Quelle stratégie argumentative l\'auteur utilise-t-il en mentionnant "les pays nordiques" en fin de texte ?',
          options: [
            'Une digression sans rapport avec le sujet',
            'Un argument d\'autorité par l\'exemple : des modèles existants validant la voie médiane proposée',
            'Une critique des pays nordiques',
            'Une comparaison purement culturelle sans valeur argumentative',
          ],
          correctIndex: 1,
          explanation: 'Citer "les pays nordiques" fonctionne comme un ARGUMENT D\'AUTORITÉ PAR L\'EXEMPLE : l\'auteur appuie sa proposition (concilier solidarité et incitation au travail) sur des modèles déjà existants et reconnus, renforçant ainsi la crédibilité de sa thèse sans avoir à tout démontrer de façon abstraite.',
        },
        {
          id: 'b2-arg-01-ex08',
          type: 'qcm',
          question: '"Force est de constater que" est une formule pour :',
          options: [
            'Exprimer un doute',
            'Introduire un constat qui s\'impose, difficile à contester',
            'Poser une question',
            'Citer une autre personne',
          ],
          correctIndex: 1,
          explanation: '"Force est de constater que" = on est obligé de constater que / il faut bien admettre que. Formule du registre très soutenu pour introduire un FAIT qui s\'impose à l\'évidence, même s\'il est désagréable ou contraire à ce qu\'on souhaiterait.',
        },
        {
          id: 'b2-arg-01-ex09',
          type: 'qcm',
          question: 'Pourquoi l\'auteur emploie-t-il "ses détracteurs" et "ses défenseurs" pour présenter les deux camps du débat ?',
          options: [
            'Pour prendre parti immédiatement pour un camp',
            'Pour présenter le débat de façon équilibrée avant de développer sa propre position',
            'Pour insulter l\'un des deux camps',
            'Par erreur de vocabulaire',
          ],
          correctIndex: 1,
          explanation: 'Présenter "détracteurs" et "défenseurs" de façon symétrique, sans jugement de valeur immédiat, est une technique d\'introduction ÉQUILIBRÉE du débat. Cela donne de la crédibilité à l\'auteur (il montre qu\'il connaît les deux côtés) avant de développer progressivement sa propre nuance/position.',
        },
        {
          id: 'b2-arg-01-ex10',
          type: 'qcm',
          question: 'Quel est le ton général de cet extrait ?',
          options: [
            'Polémique et tranché',
            'Nuancé et analytique, cherchant une synthèse plutôt qu\'un camp',
            'Purement descriptif sans opinion',
            'Sarcastique et moqueur',
          ],
          correctIndex: 1,
          explanation: 'Le texte adopte un ton NUANCÉ et ANALYTIQUE : il reconnaît les limites du système actuel (effets de seuil) sans pour autant rejeter sa fonction essentielle, et propose une voie de synthèse (concilier solidarité et incitation) plutôt que de trancher radicalement pour un camp ou l\'autre. C\'est un style typique de l\'éditorial de réflexion (par opposition au pamphlet polémique).',
        },
        {
          id: 'b2-arg-01-ex11',
          type: 'qcm',
          question: '"Basculer dans une précarité encore plus sévère" — que signifie "basculer" ici ?',
          options: ['Hésiter entre deux choix', 'Tomber brutalement dans une situation difficile', 'Voyager', 'Discuter d\'un sujet'],
          correctIndex: 1,
          explanation: '"Basculer dans" (au sens figuré) = tomber soudainement et de façon importante dans une situation (généralement négative). "Basculer dans la précarité" = sombrer/tomber dans une situation de grande pauvreté ou d\'instabilité économique.',
        },
        {
          id: 'b2-arg-01-ex12',
          type: 'qcm',
          question: 'Quelle est la différence entre un "argument" et un "exemple" dans un texte argumentatif ?',
          options: [
            'Il n\'y a aucune différence',
            'L\'argument est une idée générale qui soutient la thèse, l\'exemple est une illustration concrète de cet argument',
            'L\'exemple est plus important que l\'argument',
            'L\'argument vient toujours après l\'exemple',
          ],
          correctIndex: 1,
          explanation: 'L\'ARGUMENT est une idée générale, un raisonnement abstrait qui soutient la thèse ("le filet de sécurité est indispensable"). L\'EXEMPLE est une illustration CONCRÈTE qui rend cet argument plus tangible et convaincant ("les pays nordiques" illustre l\'argument de la voie médiane possible).',
        },
        {
          id: 'b2-arg-01-ex13',
          type: 'qcm',
          question: '"S\'il est vrai que..., il n\'en demeure pas moins que..." est une structure pour :',
          options: [
            'Affirmer deux faits sans lien',
            'Concéder un point tout en maintenant fermement sa position contraire',
            'Poser une question rhétorique',
            'Conclure définitivement un débat',
          ],
          correctIndex: 1,
          explanation: '"S\'il est vrai que... il n\'en demeure pas moins que..." = structure concessive très soutenue. On admet la validité d\'un point ("s\'il est vrai que X") tout en affirmant que cela ne change rien à sa position principale ("il n\'en demeure pas moins que Y"). Équivalent plus formel de "certes... mais...".',
        },
        {
          id: 'b2-arg-01-ex14',
          type: 'qcm',
          question: 'Pourquoi cette structure argumentative (concession puis réfutation) est-elle efficace persuasivement ?',
          options: [
            'Parce qu\'elle évite tout débat',
            'Parce qu\'elle montre que l\'auteur a considéré objectivement les contre-arguments avant de défendre sa thèse, renforçant sa crédibilité',
            'Parce qu\'elle est plus courte qu\'une argumentation directe',
            'Parce qu\'elle ne nécessite aucune preuve',
          ],
          correctIndex: 1,
          explanation: 'La concession ("certes...") montre que l\'auteur n\'ignore pas les arguments contraires — il les a EXAMINÉS et reconnaît leur part de vérité. Cela renforce sa CRÉDIBILITÉ (il n\'est pas de mauvaise foi) avant de réorienter le débat vers sa propre position ("toutefois..."), rendant l\'argumentation finale plus persuasive qu\'un rejet pur et simple des contre-arguments.',
        },
        {
          id: 'b2-arg-01-ex15',
          type: 'qcm',
          question: '"Suscite un débat aussi vif que récurrent" — que signifient "vif" et "récurrent" ici ?',
          options: [
            'Rapide et unique',
            'Intense/passionné et qui revient régulièrement',
            'Silencieux et ponctuel',
            'Ancien et terminé',
          ],
          correctIndex: 1,
          explanation: '"Vif" = intense, passionné (un débat vif = des opinions fortes s\'opposent). "Récurrent" = qui revient régulièrement dans le temps (ce n\'est pas la première fois qu\'on en débat, et ce ne sera pas la dernière). "Aussi... que..." = structure comparative d\'égalité, les deux qualités sont également présentes.',
        },
        {
          id: 'b2-arg-01-ex16',
          type: 'qcm',
          question: 'Que signifie "anecdotique" dans "ce paradoxe, loin d\'être anecdotique" ?',
          options: ['Amusant', 'Mineur, sans grande importance', 'Historique', 'Rare et inexpliqué'],
          correctIndex: 1,
          explanation: '"Anecdotique" = mineur, secondaire, sans grande portée. "Loin d\'être anecdotique" = au contraire, c\'est un point IMPORTANT qui mérite d\'être pris au sérieux (pas relégué au rang de détail négligeable).',
        },
        {
          id: 'b2-arg-01-ex17',
          type: 'qcm',
          question: 'Quelle est la thèse implicite de l\'auteur dans cet extrait ?',
          options: [
            'Il faut supprimer toutes les aides sociales',
            'Le système actuel doit être réformé pour réduire les effets de seuil tout en préservant sa fonction de filet de sécurité',
            'Le système actuel est parfait et ne doit pas changer',
            'Seuls les pays nordiques ont un bon système social',
          ],
          correctIndex: 1,
          explanation: 'La thèse de l\'auteur, bien que jamais énoncée de façon brutale, transparaît dans sa proposition finale : "concilier solidarité et incitation au travail." Il ne rejette ni les critiques (effets de seuil réels) ni la nécessité du système (fonction de filet de sécurité), mais plaide pour une RÉFORME NUANCÉE plutôt qu\'une suppression ou un statu quo.',
        },
        {
          id: 'b2-arg-01-ex18',
          type: 'qcm',
          question: '"Dans une société marquée par les inégalités" — quelle est la fonction de "marquée par" ?',
          options: [
            'Indiquer une marque commerciale',
            'Signaler une caractéristique forte et persistante de cette société',
            'Exprimer une cause ponctuelle',
            'Critiquer directement le gouvernement',
          ],
          correctIndex: 1,
          explanation: '"Marquée par" = caractérisée de façon profonde et durable par. "Une société marquée par les inégalités" = une société dont une caractéristique structurelle et persistante est l\'existence d\'inégalités. Expression neutre et descriptive, typique du registre analytique.',
        },
        {
          id: 'b2-arg-01-ex19',
          type: 'qcm',
          question: 'Pourquoi l\'auteur évite-t-il d\'utiliser des termes trop polémiques ou tranchés (comme "scandaleux" ou "honteux") dans ce texte ?',
          options: [
            'Par manque de vocabulaire',
            'Pour maintenir un ton analytique et crédible, propre à convaincre un lectorat large plutôt qu\'à mobiliser un camp déjà convaincu',
            'Parce que le sujet n\'est pas important',
            'Par erreur de style',
          ],
          correctIndex: 1,
          explanation: 'Un ton MESURÉ et ANALYTIQUE (plutôt que polémique) permet de convaincre un lectorat plus LARGE, y compris des personnes qui ne partagent pas initialement la conclusion de l\'auteur. Les textes trop polémiques ont tendance à ne convaincre que ceux qui sont déjà d\'accord, ce qui limite leur portée argumentative réelle.',
        },
        {
          id: 'b2-arg-01-ex20',
          type: 'qcm',
          question: 'Quelle compétence de lecture B2 ce type de texte exige-t-il particulièrement ?',
          options: [
            'Comprendre uniquement le sens littéral des mots',
            'Identifier la structure argumentative implicite, les nuances et la stratégie rhétorique au-delà du sens littéral',
            'Mémoriser le vocabulaire technique uniquement',
            'Traduire le texte mot à mot',
          ],
          correctIndex: 1,
          explanation: 'Au niveau B2, la compréhension d\'un texte argumentatif complexe exige d\'aller AU-DELÀ du sens littéral : identifier la THÈSE implicite, la STRUCTURE (concession/réfutation), les NUANCES (le texte ne tranche pas brutalement), et la STRATÉGIE RHÉTORIQUE (questions orientées, exemples choisis). C\'est cette lecture "entre les lignes" qui caractérise la maîtrise avancée d\'une langue.',
        },
      ],
    },

    {
      id: 'b2-arg-02',
      slug: 'b2-types-arguments',
      moduleSlug: 'b2-textes-argumentatifs',
      level: 'B2',
      title: 'Les types d\'arguments',
      description: 'Distinguer argument d\'autorité, argument logique, argument par l\'exemple et argument ad hominem.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Tous les arguments ne se valent pas

Un bon lecteur de texte argumentatif sait identifier le TYPE d'argument employé, car certains sont plus solides que d'autres.

**L'argument d'autorité**
S'appuie sur la parole d'une personne ou d'une institution reconnue compétente : "Selon l'OMS, ce traitement est efficace." Force : crédibilité de la source. Limite : la source peut se tromper ou être contestée.

**L'argument logique (déductif)**
Suit un raisonnement de cause à effet rigoureux : "Tout système démocratique repose sur la séparation des pouvoirs ; la France est une démocratie ; donc elle doit séparer ses pouvoirs." Force : rigueur. Limite : dépend de la validité des prémisses.

**L'argument par l'exemple**
Illustre une idée générale par un cas concret : "Les pays nordiques, qui investissent massivement dans l'éducation, ont les meilleurs résultats scolaires." Force : concret, convaincant. Limite : un exemple isolé ne prouve pas une généralité (un seul cas n'est pas une preuve statistique).

**L'argument ad hominem (à éviter / à repérer comme sophisme)**
Attaque la personne plutôt que son argument : "Vous ne pouvez pas critiquer cette politique, vous n'avez jamais été élu." C'est une attaque qui ÉVITE de répondre sur le fond — un signal de faiblesse argumentative chez celui qui l'emploie.

**L'argument par analogie**
Compare deux situations pour éclairer l'une par l'autre : "Gérer un pays, c'est comme gérer une famille : il faut équilibrer les dépenses." Force : pédagogique. Limite : les deux situations comparées ne sont jamais parfaitement identiques.`,

      linguisticPoint: `## Point linguistique : Le vocabulaire de l'analyse argumentative

### Identifier le type d'argument à l'écrit
- "Selon X..." / "D'après X..." → argument d'autorité
- "Il s'ensuit que..." / "Par conséquent..." → argument logique
- "Ainsi, on observe que..." / "C'est le cas de..." → argument par l'exemple
- "De même que..., ... de la même façon" → argument par analogie

### Formules pour évaluer la solidité d'un argument
- "Cet argument repose sur une source fiable / contestable."
- "Le raisonnement est logiquement valide, mais ses prémisses sont discutables."
- "Un seul exemple ne suffit pas à établir une généralité."
- "Cette remarque relève de l'attaque personnelle plutôt que de la réfutation argumentée."`,

      keyPoints: [
        'Argument d\'autorité = s\'appuie sur une source reconnue compétente ("selon l\'OMS")',
        'Argument logique = raisonnement de cause à effet rigoureux ("il s\'ensuit que")',
        'Argument par l\'exemple = illustre par un cas concret (limite : un cas n\'est pas une preuve)',
        'Argument ad hominem = attaque la personne, pas l\'argument — signal de faiblesse à repérer',
        'Argument par analogie = compare deux situations (limite : jamais parfaitement identiques)',
      ],

      exercises: [
        { id: 'b2-arg-02-ex01', type: 'qcm', question: 'Quel type d\'argument illustre "Selon l\'OMS, ce traitement est efficace" ?', options: ['Argument ad hominem', 'Argument d\'autorité', 'Argument par analogie', 'Argument par l\'exemple'], correctIndex: 1, explanation: '"Selon l\'OMS" s\'appuie sur une SOURCE reconnue COMPÉTENTE (l\'Organisation Mondiale de la Santé) — c\'est un ARGUMENT D\'AUTORITÉ.' },
        { id: 'b2-arg-02-ex02', type: 'qcm', question: 'Pourquoi l\'argument ad hominem est-il considéré comme un sophisme (argument fallacieux) ?', options: ['Parce qu\'il est toujours faux factuellement', 'Parce qu\'il attaque la personne plutôt que de répondre sur le fond de son argument, évitant ainsi le débat réel', 'Parce qu\'il est trop logique', 'Parce qu\'il s\'appuie toujours sur des statistiques fausses'], correctIndex: 1, explanation: 'L\'argument AD HOMINEM attaque la PERSONNE plutôt que de répondre sur le FOND de son argument — c\'est une stratégie qui ÉVITE le débat réel, signe de FAIBLESSE argumentative.' },
        { id: 'b2-arg-02-ex03', type: 'qcm', question: 'Quelle est la principale LIMITE de l\'argument par l\'exemple ?', options: ['Il est toujours faux', 'Un exemple isolé ne suffit pas à établir une généralité statistique', 'Il est trop abstrait', 'Il ne peut jamais convaincre personne'], correctIndex: 1, explanation: 'Un EXEMPLE ISOLÉ, même réel et concret, ne suffit PAS à établir une GÉNÉRALITÉ statistique valide — c\'est sa principale LIMITE logique.' },
        { id: 'b2-arg-02-ex04', type: 'qcm', question: 'Quel connecteur introduit typiquement un argument logique (déductif) ?', options: ['"Selon X"', '"Il s\'ensuit que" / "Par conséquent"', '"De même que"', '"C\'est le cas de"'], correctIndex: 1, explanation: '"Il s\'ensuit que" ou "par conséquent" introduisent la CONCLUSION d\'un raisonnement LOGIQUE/DÉDUCTIF, basé sur des prémisses précédentes.' },
        { id: 'b2-arg-02-ex05', type: 'qcm', question: 'Quelle est la principale LIMITE de l\'argument par analogie ?', options: ['Il est toujours convaincant sans exception', 'Les deux situations comparées ne sont jamais parfaitement identiques, ce qui peut affaiblir la comparaison', 'Il ne peut jamais être utilisé en français', 'Il est interdit dans les débats formels'], correctIndex: 1, explanation: 'Les DEUX SITUATIONS comparées dans une analogie ne sont JAMAIS PARFAITEMENT IDENTIQUES — il existe toujours des différences qui peuvent AFFAIBLIR la pertinence de la comparaison.' },
        { id: 'b2-arg-02-ex06', type: 'qcm', question: 'Identifiez le type d\'argument : "Gérer un pays, c\'est comme gérer une famille : il faut équilibrer les dépenses."', options: ['Argument d\'autorité', 'Argument par analogie', 'Argument ad hominem', 'Argument logique pur'], correctIndex: 1, explanation: 'Cette phrase COMPARE deux situations différentes (gérer un pays / gérer une famille) pour ÉCLAIRER l\'une par l\'autre — c\'est un ARGUMENT PAR ANALOGIE.' },
        { id: 'b2-arg-02-ex07', type: 'qcm', question: 'Pourquoi un argument d\'autorité peut-il être contesté, malgré la crédibilité apparente de sa source ?', options: ['Il ne peut jamais être contesté', 'Parce que même une source compétente peut se tromper, être dépassée par de nouvelles données, ou être elle-même contestée par d\'autres experts', 'Parce que les autorités n\'existent pas réellement', 'Parce que cet argument est toujours un sophisme'], correctIndex: 1, explanation: 'Même une SOURCE COMPÉTENTE peut SE TROMPER, être DÉPASSÉE par de nouvelles données, ou être elle-même CONTESTÉE par d\'autres experts du domaine — la crédibilité n\'est jamais une garantie absolue de vérité.' },
        { id: 'b2-arg-02-ex08', type: 'qcm', question: 'Identifiez le type d\'argument : "Vous ne pouvez pas critiquer cette politique, vous n\'avez jamais été élu."', options: ['Argument logique', 'Argument ad hominem', 'Argument d\'autorité', 'Argument par l\'exemple'], correctIndex: 1, explanation: 'Cette phrase ATTAQUE la PERSONNE (son absence de mandat électif) plutôt que de répondre au CONTENU de sa critique — c\'est un ARGUMENT AD HOMINEM typique.' },
        { id: 'b2-arg-02-ex09', type: 'qcm', question: 'Quelle formule permet d\'évaluer critiquement la solidité d\'un raisonnement logique ?', options: ['"C\'est totalement vrai sans aucun doute."', '"Le raisonnement est logiquement valide, mais ses prémisses sont discutables."', '"Cet argument est toujours faux."', '"Je ne comprends pas cet argument."'], correctIndex: 1, explanation: 'Cette formule distingue la VALIDITÉ LOGIQUE du raisonnement (la structure est correcte) de la VÉRACITÉ des PRÉMISSES (les points de départ peuvent être discutables) — analyse critique nuancée.' },
        { id: 'b2-arg-02-ex10', type: 'qcm', question: 'Pourquoi est-il important, au niveau B2, de savoir identifier le TYPE d\'argument employé dans un texte ?', options: ['Ce n\'est pas important', 'Parce que cela permet d\'évaluer la solidité réelle de l\'argumentation et de ne pas se laisser convaincre par des sophismes déguisés en arguments valides', 'Parce que c\'est obligatoire de mémoriser une liste de noms latins', 'Parce que tous les arguments ont exactement la même valeur'], correctIndex: 1, explanation: 'Identifier le TYPE d\'argument permet d\'ÉVALUER sa SOLIDITÉ réelle et de ne pas se laisser CONVAINCRE par des SOPHISMES (comme l\'ad hominem) déguisés en arguments VALIDES — compétence d\'esprit critique essentielle.' },
        { id: 'b2-arg-02-ex11', type: 'qcm', question: 'Identifiez le type d\'argument : "Les pays nordiques, qui investissent massivement dans l\'éducation, ont les meilleurs résultats scolaires."', options: ['Argument ad hominem', 'Argument par l\'exemple', 'Argument d\'autorité', 'Argument par analogie'], correctIndex: 1, explanation: 'Cette phrase illustre une idée GÉNÉRALE (l\'investissement éducatif est bénéfique) par un CAS CONCRET (les pays nordiques) — c\'est un ARGUMENT PAR L\'EXEMPLE.' },
        { id: 'b2-arg-02-ex12', type: 'qcm', question: 'Quel connecteur introduit typiquement un argument par analogie ?', options: ['"Selon X"', '"Il s\'ensuit que"', '"De même que..., de la même façon..."', '"C\'est le cas de"'], correctIndex: 2, explanation: '"De même que..., de la même façon..." est une structure typique pour établir une COMPARAISON entre deux situations, caractéristique de l\'ARGUMENT PAR ANALOGIE.' },
        { id: 'b2-arg-02-ex13', type: 'qcm', question: 'Pourquoi la force de l\'argument d\'autorité dépend-elle largement de la nature de la source citée ?', options: ['Toutes les sources ont exactement la même valeur', 'Une source reconnue et compétente dans le domaine concerné renforce la crédibilité, alors qu\'une source non spécialisée ou biaisée affaiblit l\'argument', 'La nature de la source n\'a aucune importance', 'Seules les sources gouvernementales sont valables'], correctIndex: 1, explanation: 'Une source RECONNUE et COMPÉTENTE dans le DOMAINE concerné (ex : l\'OMS pour la santé) renforce la CRÉDIBILITÉ de l\'argument, alors qu\'une source NON SPÉCIALISÉE ou BIAISÉE l\'AFFAIBLIT considérablement.' },
        { id: 'b2-arg-02-ex14', type: 'qcm', question: 'Quelle est la meilleure stratégie pour renforcer un argument par l\'exemple et éviter sa principale limite ?', options: ['Se contenter d\'un seul exemple, toujours suffisant', 'Multiplier les exemples ou les accompagner de données statistiques plus larges pour montrer que le cas n\'est pas isolé', 'Éviter complètement d\'utiliser des exemples', 'Choisir un exemple extrême et rare'], correctIndex: 1, explanation: 'MULTIPLIER les EXEMPLES ou les ACCOMPAGNER de DONNÉES STATISTIQUES plus LARGES permet de montrer que le cas cité n\'est pas ISOLÉ mais représentatif d\'une tendance plus générale, renforçant ainsi la solidité de l\'argument.' },
        { id: 'b2-arg-02-ex15', type: 'qcm', question: 'Pourquoi un débat qui glisse vers des arguments ad hominem est-il généralement considéré comme de mauvaise qualité ?', options: ['Parce que c\'est toujours interdit légalement', 'Parce que cela signale que les participants évitent le débat sur le fond, remplaçant l\'argumentation rigoureuse par des attaques personnelles', 'Parce que les attaques personnelles sont toujours plus convaincantes', 'Parce que cela rend le débat plus intéressant'], correctIndex: 1, explanation: 'Un débat qui GLISSE vers l\'AD HOMINEM signale que les participants ÉVITENT le débat sur le FOND, remplaçant l\'ARGUMENTATION RIGOUREUSE par des ATTAQUES PERSONNELLES — signe de FAIBLESSE intellectuelle plutôt que de force.' },
        { id: 'b2-arg-02-ex16', type: 'qcm', question: 'Quelle formule permet de signaler qu\'un argument relève de l\'attaque personnelle plutôt que de la réfutation valide ?', options: ['"C\'est un excellent argument."', '"Cette remarque relève de l\'attaque personnelle plutôt que de la réfutation argumentée."', '"Je suis entièrement d\'accord."', '"Cet argument est logiquement parfait."'], correctIndex: 1, explanation: 'Cette formule permet de SIGNALER de façon ANALYTIQUE qu\'un propos n\'est PAS une véritable RÉFUTATION (qui répondrait au contenu) mais une ATTAQUE PERSONNELLE qui évite le débat de fond.' },
        { id: 'b2-arg-02-ex17', type: 'qcm', question: 'Dans un texte combinant plusieurs types d\'arguments (autorité + exemple + logique), quel est l\'avantage de cette combinaison ?', options: ['Aucun avantage particulier', 'Elle renforce la persuasion globale en compensant les limites propres à chaque type d\'argument pris isolément', 'Elle rend le texte plus confus et moins convaincant', 'Elle est toujours redondante et inutile'], correctIndex: 1, explanation: 'COMBINER plusieurs TYPES d\'arguments renforce la PERSUASION GLOBALE en COMPENSANT les LIMITES propres à chaque type pris ISOLÉMENT (la source d\'autorité peut être contestée, mais soutenue par la logique et des exemples concrets, l\'ensemble devient plus solide).' },
        { id: 'b2-arg-02-ex18', type: 'qcm', question: 'Pourquoi est-il important de vérifier la validité des PRÉMISSES d\'un argument logique, et pas seulement sa structure ?', options: ['Ce n\'est jamais nécessaire', 'Parce qu\'un raisonnement peut être logiquement valide dans sa structure tout en étant faux si ses prémisses de départ sont elles-mêmes incorrectes', 'Parce que les prémisses n\'ont aucune importance', 'Parce que la structure logique garantit toujours la vérité de la conclusion'], correctIndex: 1, explanation: 'Un raisonnement peut être LOGIQUEMENT VALIDE dans sa STRUCTURE (la conclusion découle bien des prémisses) tout en étant FAUX dans les FAITS si les PRÉMISSES de départ sont elles-mêmes INCORRECTES — la validité formelle ne garantit pas la vérité matérielle.' },
        { id: 'b2-arg-02-ex19', type: 'qcm', question: 'Quelle compétence d\'analyse cette typologie des arguments développe-t-elle, particulièrement utile pour la lecture de la presse ou des réseaux sociaux ?', options: ['La capacité à croire tout ce qu\'on lit sans aucune vérification', 'La capacité à évaluer de façon critique la solidité réelle des argumentations rencontrées, en distinguant les arguments solides des sophismes', 'La capacité à ignorer complètement tout argument rencontré', 'La capacité à mémoriser des listes de mots sans les comprendre'], correctIndex: 1, explanation: 'Cette typologie développe la capacité à ÉVALUER de façon CRITIQUE la SOLIDITÉ RÉELLE des argumentations rencontrées (presse, réseaux sociaux, débats publics), en DISTINGUANT les arguments SOLIDES des SOPHISMES déguisés — compétence d\'ESPRIT CRITIQUE essentielle dans l\'environnement informationnel contemporain.' },
        { id: 'b2-arg-02-ex20', type: 'qcm', question: 'En synthèse, pourquoi aucun type d\'argument, même le plus solide en apparence, ne devrait-il être accepté sans un minimum d\'esprit critique ?', options: ['Parce qu\'il faut systématiquement rejeter tous les arguments rencontrés', 'Parce que chaque type d\'argument a des limites propres (source contestable, exemple isolé, prémisses discutables, comparaison imparfaite), et la pensée critique consiste à les évaluer plutôt qu\'à les accepter ou rejeter aveuglément', 'Parce que tous les arguments sont équivalents et interchangeables', 'Parce que seul l\'argument d\'autorité est valable, tous les autres devant être rejetés'], correctIndex: 1, explanation: 'Chaque TYPE d\'argument a des LIMITES PROPRES (source contestable pour l\'autorité, généralisation hâtive pour l\'exemple, prémisses discutables pour la logique, comparaison imparfaite pour l\'analogie). La PENSÉE CRITIQUE consiste à ÉVALUER ces limites avec NUANCE, plutôt qu\'à ACCEPTER ou REJETER aveuglément un argument sur la seule base de son type apparent.' },
      ],
    },

    {
      id: 'b2-arg-03',
      slug: 'b2-sophismes-biais-argumentatifs',
      moduleSlug: 'b2-textes-argumentatifs',
      level: 'B2',
      title: 'Repérer les sophismes et biais argumentatifs',
      description: 'Identifier les raisonnements fallacieux les plus courants : généralisation hâtive, faux dilemme, pente glissante.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Les pièges du raisonnement à démasquer

Un SOPHISME est un raisonnement qui SEMBLE logique mais contient une faille qui le rend INVALIDE. Savoir les repérer est essentiel pour lire la presse ou les débats publics avec esprit critique.

**La généralisation hâtive**
Tirer une conclusion générale à partir d'un échantillon trop petit ou non représentatif : "J'ai rencontré deux personnes malpolies de cette ville, donc tous ses habitants sont malpolis." Erreur : un échantillon de 2 personnes ne permet aucune généralisation valide.

**Le faux dilemme**
Présenter seulement deux options alors que d'autres existent : "Soit vous êtes pour cette réforme, soit vous êtes contre le progrès." Erreur : il existe probablement des positions intermédiaires ou d'autres alternatives non mentionnées.

**La pente glissante**
Affirmer qu'une action mineure entraînera inévitablement une série de conséquences extrêmes, sans le démontrer : "Si on autorise cela, bientôt tout sera permis." Erreur : la chaîne de conséquences n'est pas prouvée, juste affirmée par crainte.

**L'appel à la peur**
Utiliser la peur plutôt que des arguments rationnels pour convaincre : "Si vous ne soutenez pas cette mesure, notre sécurité sera menacée." Erreur : l'émotion remplace la démonstration factuelle.

**Le sophisme de l'homme de paille**
Déformer la position de l'adversaire pour la rendre plus facile à attaquer : "Vous dites qu'il faut réguler ce secteur ? Donc vous voulez détruire toute l'économie !" Erreur : la position réelle de l'adversaire (régulation) n'est pas l'exagération attribuée (destruction totale).`,

      linguisticPoint: `## Point linguistique : Vocabulaire pour signaler un sophisme repéré

### Formules pour identifier une généralisation hâtive
- "Cette conclusion repose sur un échantillon trop restreint pour être généralisable."
- "Quelques cas isolés ne suffisent pas à établir une règle générale."

### Formules pour signaler un faux dilemme
- "Cette présentation occulte les positions intermédiaires possibles."
- "Il ne s'agit pas d'un choix binaire — d'autres options existent."

### Formules pour dénoncer une pente glissante non démontrée
- "Cette chaîne de conséquences est affirmée, mais non démontrée."
- "Rien ne prouve que cette première étape entraînera nécessairement les suivantes."

### Formules pour repérer l'homme de paille
- "Cette reformulation déforme la position initiale en l'exagérant."
- "Ce n'est pas exactement ce qui a été dit — il s'agit d'une caricature de l'argument."`,

      keyPoints: [
        'Généralisation hâtive = conclusion générale tirée d\'un échantillon trop petit',
        'Faux dilemme = présenter seulement 2 options alors que d\'autres existent',
        'Pente glissante = affirmer une chaîne de conséquences extrêmes sans la démontrer',
        'Appel à la peur = remplacer l\'argument rationnel par l\'émotion',
        'Homme de paille = déformer la position adverse pour l\'attaquer plus facilement',
      ],

      exercises: [
        { id: 'b2-arg-03-ex01', type: 'qcm', question: 'Quel sophisme illustre "J\'ai rencontré deux personnes malpolies de cette ville, donc tous ses habitants sont malpolis" ?', options: ['Le faux dilemme', 'La généralisation hâtive', 'La pente glissante', 'L\'homme de paille'], correctIndex: 1, explanation: 'Tirer une conclusion GÉNÉRALE (tous les habitants) à partir d\'un ÉCHANTILLON TROP PETIT (deux personnes) est une GÉNÉRALISATION HÂTIVE.' },
        { id: 'b2-arg-03-ex02', type: 'qcm', question: 'Quel sophisme illustre "Soit vous êtes pour cette réforme, soit vous êtes contre le progrès" ?', options: ['Le faux dilemme', 'La généralisation hâtive', 'L\'appel à la peur', 'L\'homme de paille'], correctIndex: 0, explanation: 'Cette phrase présente SEULEMENT DEUX options alors que des POSITIONS INTERMÉDIAIRES existent probablement — c\'est un FAUX DILEMME.' },
        { id: 'b2-arg-03-ex03', type: 'qcm', question: 'Quel sophisme illustre "Si on autorise cela, bientôt tout sera permis" ?', options: ['La généralisation hâtive', 'La pente glissante', 'Le faux dilemme', 'L\'homme de paille'], correctIndex: 1, explanation: 'Cette phrase AFFIRME une CHAÎNE de CONSÉQUENCES extrêmes SANS la DÉMONTRER, juste par crainte — c\'est une PENTE GLISSANTE.' },
        { id: 'b2-arg-03-ex04', type: 'qcm', question: 'Quel sophisme illustre "Vous dites qu\'il faut réguler ce secteur ? Donc vous voulez détruire toute l\'économie !" ?', options: ['L\'appel à la peur', 'L\'homme de paille', 'La généralisation hâtive', 'Le faux dilemme'], correctIndex: 1, explanation: 'Cette phrase DÉFORME la position réelle de l\'adversaire (réguler) en l\'EXAGÉRANT (détruire l\'économie) pour la rendre plus facile à ATTAQUER — c\'est un HOMME DE PAILLE.' },
        { id: 'b2-arg-03-ex05', type: 'qcm', question: 'Pourquoi un sophisme est-il particulièrement trompeur, par rapport à un argument simplement faux ?', options: ['Il n\'est jamais trompeur', 'Parce qu\'il SEMBLE logique en surface, ce qui le rend plus difficile à détecter qu\'une erreur factuelle évidente', 'Parce qu\'il est toujours plus long qu\'un argument valide', 'Parce qu\'il utilise toujours des statistiques fausses'], correctIndex: 1, explanation: 'Un sophisme SEMBLE LOGIQUE en SURFACE (la structure paraît cohérente), ce qui le rend plus DIFFICILE à DÉTECTER qu\'une simple erreur FACTUELLE évidente — c\'est précisément ce qui le rend dangereux dans un débat.' },
        { id: 'b2-arg-03-ex06', type: 'qcm', question: 'Quelle formule permet de signaler un faux dilemme repéré dans un débat ?', options: ['"C\'est totalement vrai."', '"Cette présentation occulte les positions intermédiaires possibles."', '"Je suis d\'accord avec les deux options."', '"Il n\'y a que deux choix possibles, en effet."'], correctIndex: 1, explanation: 'Cette formule signale explicitement que la présentation BINAIRE (deux choix seulement) OCCULTE des POSITIONS INTERMÉDIAIRES qui existent probablement en réalité.' },
        { id: 'b2-arg-03-ex07', type: 'qcm', question: 'Quel sophisme illustre "Si vous ne soutenez pas cette mesure, notre sécurité sera menacée" ?', options: ['La généralisation hâtive', 'L\'appel à la peur', 'L\'homme de paille', 'Le faux dilemme'], correctIndex: 1, explanation: 'Cette phrase utilise la PEUR (menace pour la sécurité) plutôt que des ARGUMENTS RATIONNELS pour convaincre — c\'est un APPEL À LA PEUR.' },
        { id: 'b2-arg-03-ex08', type: 'qcm', question: 'Pourquoi la pente glissante est-elle considérée comme fallacieuse, même si elle décrit parfois des scénarios réellement possibles ?', options: ['Parce que ces scénarios ne sont jamais possibles', 'Parce que la simple POSSIBILITÉ d\'un enchaînement n\'établit pas sa PROBABILITÉ ni sa NÉCESSITÉ — chaque étape de la chaîne devrait être démontrée séparément', 'Parce qu\'elle est toujours utilisée de bonne foi', 'Parce qu\'elle ne concerne jamais de sujets politiques'], correctIndex: 1, explanation: 'La simple POSSIBILITÉ théorique d\'un enchaînement de conséquences n\'établit PAS sa PROBABILITÉ ni sa NÉCESSITÉ réelle — un raisonnement rigoureux devrait DÉMONTRER chaque étape de la chaîne séparément, pas se contenter de l\'affirmer par crainte.' },
        { id: 'b2-arg-03-ex09', type: 'qcm', question: 'Quelle formule permet de dénoncer un homme de paille repéré dans un débat ?', options: ['"Vous avez parfaitement raison."', '"Cette reformulation déforme la position initiale en l\'exagérant."', '"C\'est exactement ce que j\'ai dit."', 'Ne rien dire'], correctIndex: 1, explanation: 'Cette formule signale explicitement que la REFORMULATION proposée par l\'interlocuteur DÉFORME et EXAGÈRE la position INITIALE, plutôt que de la représenter fidèlement.' },
        { id: 'b2-arg-03-ex10', type: 'qcm', question: 'Pourquoi est-il important, au niveau B2, de savoir repérer ces sophismes dans les médias et débats publics contemporains ?', options: ['Ce n\'est pas important', 'Parce que ces techniques rhétoriques sont fréquemment utilisées pour influencer l\'opinion sans argumentation rigoureuse, et les repérer protège contre la manipulation', 'Parce que tous les arguments médiatiques sont des sophismes', 'Parce que cela permet d\'éviter complètement de s\'informer'], correctIndex: 1, explanation: 'Ces TECHNIQUES RHÉTORIQUES sont FRÉQUEMMENT utilisées (volontairement ou non) pour INFLUENCER l\'opinion SANS argumentation RIGOUREUSE. Les REPÉRER PROTÈGE contre la MANIPULATION et permet une lecture plus CRITIQUE et AUTONOME de l\'information.' },
        { id: 'b2-arg-03-ex11', type: 'qcm', question: 'Identifiez le sophisme : "Cette personne a fait une erreur de calcul, donc on ne peut faire confiance à aucun de ses arguments."', options: ['Le faux dilemme', 'La généralisation hâtive', 'L\'appel à la peur', 'L\'homme de paille'], correctIndex: 1, explanation: 'Généraliser à partir d\'UNE SEULE erreur ("aucun de ses arguments") est une GÉNÉRALISATION HÂTIVE — une erreur ponctuelle ne discrédite pas automatiquement l\'ensemble du raisonnement d\'une personne.' },
        { id: 'b2-arg-03-ex12', type: 'qcm', question: 'Quelle est la différence entre un argument par analogie valide et une pente glissante fallacieuse ?', options: ['Aucune différence, ce sont des synonymes', 'L\'analogie compare deux situations comparables pour éclairer, tandis que la pente glissante affirme sans preuve une chaîne d\'événements extrêmes et hypothétiques', 'La pente glissante est toujours plus rigoureuse que l\'analogie', 'L\'analogie ne s\'utilise jamais dans un débat sérieux'], correctIndex: 1, explanation: 'L\'ANALOGIE compare deux situations RAISONNABLEMENT comparables pour ÉCLAIRER une idée. La PENTE GLISSANTE affirme SANS PREUVE une CHAÎNE d\'événements EXTRÊMES et largement HYPOTHÉTIQUES, sans justification rigoureuse de chaque étape.' },
        { id: 'b2-arg-03-ex13', type: 'qcm', question: 'Quelle formule permet de demander une clarification face à une possible pente glissante avancée par un interlocuteur ?', options: ['"C\'est évidemment vrai."', '"Pouvez-vous démontrer chaque étape de cet enchaînement, plutôt que de l\'affirmer directement ?"', 'Accepter immédiatement sans question', 'Changer complètement de sujet'], correctIndex: 1, explanation: 'Cette question demande à l\'interlocuteur de JUSTIFIER RIGOUREUSEMENT chaque ÉTAPE de la chaîne de conséquences qu\'il affirme, plutôt que de l\'accepter sur la base d\'une simple ASSERTION non prouvée.' },
        { id: 'b2-arg-03-ex14', type: 'qcm', question: 'Pourquoi l\'appel à la peur est-il efficace persuasivement, malgré son caractère fallacieux ?', options: ['Parce qu\'il est toujours basé sur des faits vérifiés', 'Parce que les émotions fortes (comme la peur) peuvent court-circuiter la réflexion rationnelle et inciter à une décision rapide sans analyse approfondie', 'Parce qu\'il n\'a en réalité aucun effet sur les gens', 'Parce qu\'il est interdit dans tous les pays démocratiques'], correctIndex: 1, explanation: 'Les ÉMOTIONS FORTES comme la PEUR peuvent COURT-CIRCUITER la RÉFLEXION RATIONNELLE, incitant à une DÉCISION RAPIDE sans analyse approfondie des faits — ce qui explique l\'efficacité persuasive de cette technique malgré son absence de fondement argumentatif solide.' },
        { id: 'b2-arg-03-ex15', type: 'qcm', question: 'Identifiez le sophisme : "Vous voulez plus de contrôles aux frontières ? Donc vous êtes contre toute forme d\'immigration !"', options: ['La généralisation hâtive', 'L\'homme de paille', 'La pente glissante', 'L\'appel à la peur'], correctIndex: 1, explanation: 'Cette phrase DÉFORME la position INITIALE (plus de contrôles) en l\'EXAGÉRANT vers une position EXTRÊME non exprimée (contre toute immigration) — c\'est un HOMME DE PAILLE classique.' },
        { id: 'b2-arg-03-ex16', type: 'qcm', question: 'Pourquoi un échantillon de "deux personnes" ne permet-il jamais de généralisation statistiquement valide, contrairement à une étude sur plusieurs milliers de personnes ?', options: ['Il n\'y a aucune différence entre les deux échantillons', 'Un échantillon de cette taille est trop petit et non représentatif pour refléter fidèlement les caractéristiques d\'une population entière, contrairement à un échantillon large et représentatif', 'Un petit échantillon est toujours plus fiable qu\'un grand', 'La taille de l\'échantillon n\'a aucune importance statistique'], correctIndex: 1, explanation: 'Un échantillon de DEUX personnes est trop PETIT et NON REPRÉSENTATIF pour refléter fidèlement les CARACTÉRISTIQUES d\'une POPULATION ENTIÈRE (effet du hasard, biais de sélection). Un échantillon LARGE et REPRÉSENTATIF (méthodologie statistique rigoureuse) permet des conclusions bien plus FIABLES.' },
        { id: 'b2-arg-03-ex17', type: 'qcm', question: 'Quelle attitude est recommandée face à un faux dilemme présenté dans un débat ?', options: ['Choisir immédiatement l\'une des deux options sans réfléchir', 'Identifier et proposer explicitement les positions intermédiaires ou alternatives non mentionnées par l\'interlocuteur', 'Refuser de participer au débat', 'Accepter que seules ces deux options existent'], correctIndex: 1, explanation: 'Face à un FAUX DILEMME, il est recommandé d\'IDENTIFIER et de PROPOSER EXPLICITEMENT les positions INTERMÉDIAIRES ou ALTERNATIVES non mentionnées, démontrant que le choix n\'est pas réellement BINAIRE comme présenté.' },
        { id: 'b2-arg-03-ex18', type: 'qcm', question: 'Quelle est la meilleure défense contre un homme de paille dans un débat ?', options: ['Accepter la déformation et continuer le débat sur cette base', 'Reformuler clairement et fermement sa position initiale, en signalant explicitement la déformation opérée par l\'interlocuteur', 'Abandonner immédiatement le débat', 'Utiliser à son tour un homme de paille contre l\'adversaire'], correctIndex: 1, explanation: 'La meilleure défense consiste à REFORMULER CLAIREMENT et FERMEMENT sa POSITION INITIALE, en SIGNALANT EXPLICITEMENT la DÉFORMATION opérée ("ce n\'est pas ce que j\'ai dit, j\'ai dit que..."), plutôt que d\'accepter la caricature ou de répondre par une déformation symétrique.' },
        { id: 'b2-arg-03-ex19', type: 'qcm', question: 'Pourquoi la connaissance de ces sophismes est-elle particulièrement utile pour la préparation à un débat formel ou un entretien argumentatif (cf. modules Débat formel et Entretien de naturalisation) ?', options: ['Ce n\'est pas utile dans ce contexte', 'Parce qu\'elle permet à la fois d\'éviter soi-même ces erreurs de raisonnement et de répondre efficacement si un interlocuteur les emploie contre soi', 'Parce qu\'il faut absolument utiliser ces sophismes pour gagner un débat', 'Parce que ces sophismes ne sont jamais rencontrés en pratique'], correctIndex: 1, explanation: 'Cette connaissance permet à la fois d\'ÉVITER soi-même ces ERREURS de raisonnement dans sa propre argumentation, ET de RÉPONDRE EFFICACEMENT si un interlocuteur les emploie contre soi (par exemple, lors d\'un débat formel ou face à une question piège en entretien).' },
        { id: 'b2-arg-03-ex20', type: 'qcm', question: 'En synthèse, quelle est la compétence transversale développée par l\'identification de ces sophismes, au-delà du seul contexte du débat ?', options: ['La capacité à mémoriser des noms latins sans les comprendre', 'Une capacité d\'analyse critique applicable à la lecture de la presse, des réseaux sociaux et de tout discours persuasif rencontré dans la vie quotidienne', 'La capacité à éviter complètement toute forme de débat', 'La capacité à toujours avoir raison dans une discussion'], correctIndex: 1, explanation: 'Cette identification développe une CAPACITÉ D\'ANALYSE CRITIQUE TRANSVERSALE, applicable à la lecture de la PRESSE, des RÉSEAUX SOCIAUX, et de TOUT DISCOURS PERSUASIF rencontré dans la VIE QUOTIDIENNE — une compétence de citoyenneté éclairée au-delà du seul exercice scolaire du débat.' },
      ],
    },

    {
      id: 'b2-arg-04',
      slug: 'b2-analyse-comparative-textes',
      moduleSlug: 'b2-textes-argumentatifs',
      level: 'B2',
      title: 'Analyse comparative de deux textes opposés',
      description: 'Comparer deux argumentations contradictoires sur un même sujet pour en évaluer la solidité respective.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Deux éditoriaux opposés sur la même question

**Éditorial A — "Pour l'extension du vote à 16 ans"**
"Les jeunes de 16 ans sont aujourd'hui pleinement capables de comprendre les enjeux politiques contemporains, grâce à un accès sans précédent à l'information. Leur exclusion du vote prive la démocratie d'une génération concernée au premier chef par les décisions climatiques et sociales qui engagent leur avenir. Plusieurs pays européens ont déjà abaissé l'âge du vote sans dysfonctionnement notable."

**Éditorial B — "Contre l'abaissement de l'âge du vote"**
"Si l'enthousiasme pour la participation citoyenne des jeunes est louable, il convient de rappeler que le droit de vote s'accompagne traditionnellement d'autres responsabilités civiques (majorité pénale, autonomie financière) qui ne sont pas encore acquises à 16 ans. Le risque d'une instrumentalisation du vote des mineurs par des influences extérieures (familiales, médiatiques) n'est pas à négliger. Une réflexion plus large sur l'éducation civique avant 18 ans semble préférable à une réforme précipitée."

**Méthode de comparaison**
Pour comparer deux textes opposés, il faut identifier : (1) la thèse de chacun, (2) le type d'arguments employés, (3) les points de convergence éventuels malgré l'opposition, (4) la solidité relative de chaque argumentation.`,

      linguisticPoint: `## Point linguistique : Le vocabulaire de la comparaison argumentative

### Formules pour comparer deux argumentations
- "Alors que le premier texte met l'accent sur..., le second insiste sur..."
- "Les deux textes s'opposent sur X, mais convergent sur Y."
- "L'argumentation du texte A repose principalement sur des exemples internationaux, tandis que le texte B privilégie une approche par les principes."

### Évaluer la solidité comparée
- "L'argument du texte A est étayé par des exemples concrets (pays européens), ce qui le rend plus convaincant sur ce point précis."
- "Le texte B introduit une nuance importante (responsabilités civiques liées) que le texte A ne traite pas."
- "Aucun des deux textes n'aborde la question de X, ce qui constitue une limite commune."

### Conclure une comparaison de façon équilibrée
- "Si chaque argumentation présente des points forts, la question reste ouverte et mériterait d'être éclairée par des données empiriques supplémentaires."`,

      keyPoints: [
        'Méthode de comparaison : thèse de chacun → type d\'arguments → convergences → solidité relative',
        '"Alors que... le second..." = structure de comparaison explicite',
        'Identifier les points de convergence MALGRÉ l\'opposition apparente',
        'Évaluer la solidité relative sans nécessairement trancher définitivement',
        'Une bonne comparaison reste équilibrée, sans favoriser artificiellement un camp',
      ],

      exercises: [
        { id: 'b2-arg-04-ex01', type: 'qcm', question: 'Quelle est la thèse de l\'éditorial A ?', options: ['Il faut abaisser l\'âge du vote à 16 ans', 'Il faut interdire le vote aux jeunes', 'Il faut supprimer le droit de vote', 'Il ne prend aucune position'], correctIndex: 0, explanation: 'L\'éditorial A défend l\'EXTENSION du vote à 16 ans, en avançant la capacité de compréhension des jeunes et leur exclusion actuelle des décisions qui les concernent.' },
        { id: 'b2-arg-04-ex02', type: 'qcm', question: 'Quel type d\'argument l\'éditorial A utilise-t-il en mentionnant "plusieurs pays européens ont déjà abaissé l\'âge du vote" ?', options: ['Argument ad hominem', 'Argument par l\'exemple', 'Appel à la peur', 'Faux dilemme'], correctIndex: 1, explanation: 'Mentionner des PAYS qui ont DÉJÀ appliqué cette mesure est un ARGUMENT PAR L\'EXEMPLE, illustrant la faisabilité par des cas concrets déjà existants.' },
        { id: 'b2-arg-04-ex03', type: 'qcm', question: 'Quel argument l\'éditorial B avance-t-il contre l\'abaissement de l\'âge du vote ?', options: ['Les jeunes ne s\'intéressent jamais à la politique', 'Le vote s\'accompagne traditionnellement d\'autres responsabilités civiques non encore acquises à 16 ans', 'Le vote n\'a aucune importance', 'Les jeunes votent toujours mal'], correctIndex: 1, explanation: 'L\'éditorial B argue que le vote est traditionnellement LIÉ à d\'autres RESPONSABILITÉS civiques (majorité pénale, autonomie financière) non encore acquises à 16 ans.' },
        { id: 'b2-arg-04-ex04', type: 'qcm', question: 'Quelle structure permet de comparer explicitement les deux argumentations ?', options: ['"C\'est totalement faux."', '"Alors que le premier texte met l\'accent sur..., le second insiste sur..."', '"Je ne sais pas."', '"Les deux textes disent exactement la même chose."'], correctIndex: 1, explanation: '"Alors que... le second..." est une structure de COMPARAISON EXPLICITE qui met en relation les deux argumentations en soulignant leurs différences d\'approche.' },
        { id: 'b2-arg-04-ex05', type: 'qcm', question: 'L\'éditorial B reconnaît-il un point positif de la position opposée, malgré son désaccord ?', options: ['Non, il rejette tout sans nuance', 'Oui : "Si l\'enthousiasme pour la participation citoyenne des jeunes est louable..."', 'Il ne mentionne jamais la position opposée', 'Il insulte directement les partisans de la réforme'], correctIndex: 1, explanation: 'L\'éditorial B utilise une structure CONCESSIVE ("si... est louable") qui reconnaît un aspect POSITIF (l\'enthousiasme citoyen) avant de développer son désaccord — signe d\'une argumentation NUANCÉE.' },
        { id: 'b2-arg-04-ex06', type: 'qcm', question: 'Quel risque l\'éditorial B mentionne-t-il concernant le vote des mineurs ?', options: ['Aucun risque n\'est mentionné', 'Le risque d\'instrumentalisation par des influences extérieures (familiales, médiatiques)', 'Le risque que les jeunes votent trop souvent', 'Le risque financier pour l\'État'], correctIndex: 1, explanation: 'L\'éditorial B mentionne "le risque d\'une instrumentalisation du vote des mineurs par des influences extérieures (familiales, médiatiques)."' },
        { id: 'b2-arg-04-ex07', type: 'qcm', question: 'Quelle alternative l\'éditorial B propose-t-il à l\'abaissement immédiat de l\'âge du vote ?', options: ['Aucune alternative n\'est proposée', 'Une réflexion plus large sur l\'éducation civique avant 18 ans', 'L\'interdiction totale de voter avant 25 ans', 'La suppression du droit de vote'], correctIndex: 1, explanation: 'L\'éditorial B propose "une réflexion plus large sur l\'éducation civique avant 18 ans", plutôt qu\'une "réforme précipitée" de l\'âge du vote lui-même.' },
        { id: 'b2-arg-04-ex08', type: 'qcm', question: 'Quelle question commune les deux textes n\'abordent-ils PAS explicitement, malgré leur opposition ?', options: ['L\'âge du vote', 'Les conséquences pratiques précises d\'une éventuelle mise en œuvre (modalités, accompagnement)', 'L\'existence du droit de vote', 'Les pays européens'], correctIndex: 1, explanation: 'Ni l\'éditorial A ni l\'éditorial B ne détaillent les MODALITÉS PRATIQUES précises d\'une éventuelle mise en œuvre (comment, avec quel accompagnement) — une LIMITE COMMUNE aux deux argumentations.' },
        { id: 'b2-arg-04-ex09', type: 'qcm', question: 'Quelle formule permet de conclure une comparaison sans trancher artificiellement en faveur d\'un camp ?', options: ['"Le texte A a complètement raison."', '"Si chaque argumentation présente des points forts, la question reste ouverte et mériterait d\'être éclairée par des données empiriques supplémentaires."', '"Le texte B est totalement faux."', 'Ne pas conclure du tout'], correctIndex: 1, explanation: 'Cette formule reconnaît les POINTS FORTS de CHAQUE argumentation sans trancher de façon ARTIFICIELLE, tout en suggérant une PISTE constructive (données empiriques supplémentaires) pour approfondir la réflexion.' },
        { id: 'b2-arg-04-ex10', type: 'qcm', question: 'Pourquoi est-il important, dans une analyse comparative, d\'identifier les points de CONVERGENCE entre deux textes opposés, et pas seulement leurs divergences ?', options: ['Ce n\'est pas important', 'Parce que cela révèle souvent un terrain d\'entente possible (ici, l\'importance de l\'éducation civique des jeunes) malgré le désaccord sur le moyen précis à privilégier', 'Parce que les convergences n\'existent jamais entre des textes opposés', 'Parce que cela permet d\'ignorer complètement les désaccords'], correctIndex: 1, explanation: 'Identifier les CONVERGENCES révèle souvent un TERRAIN D\'ENTENTE possible (ici, l\'importance partagée de l\'ÉDUCATION CIVIQUE des jeunes) malgré le DÉSACCORD sur le MOYEN précis à privilégier (vote immédiat vs réflexion préalable) — une analyse plus RICHE qu\'une simple opposition binaire.' },
        { id: 'b2-arg-04-ex11', type: 'qcm', question: 'Quel type d\'argument l\'éditorial A emploie-t-il en évoquant "un accès sans précédent à l\'information" des jeunes ?', options: ['Argument d\'autorité', 'Argument logique (lien capacité de compréhension → accès à l\'information)', 'Appel à la peur', 'Homme de paille'], correctIndex: 1, explanation: 'L\'éditorial A établit un LIEN LOGIQUE entre l\'accès à l\'information et la capacité de COMPRÉHENSION politique des jeunes, un raisonnement de type plutôt LOGIQUE/DÉDUCTIF.' },
        { id: 'b2-arg-04-ex12', type: 'qcm', question: 'Quelle limite pourrait-on signaler à l\'argument de l\'éditorial A sur "l\'accès sans précédent à l\'information" ?', options: ['Cet argument est parfaitement solide sans aucune limite', 'L\'accès à l\'information n\'implique pas nécessairement une capacité de tri critique ou une compréhension approfondie des enjeux complexes', 'Cet argument est totalement faux et sans intérêt', 'Cette limite ne peut jamais être formulée'], correctIndex: 1, explanation: 'On pourrait NUANCER cet argument : l\'ACCÈS à l\'information n\'implique pas automatiquement une CAPACITÉ DE TRI CRITIQUE ou une COMPRÉHENSION APPROFONDIE des enjeux (risque de désinformation, simplification excessive) — limite à formuler dans une analyse rigoureuse.' },
        { id: 'b2-arg-04-ex13', type: 'qcm', question: 'Pourquoi la comparaison de deux textes argumentatifs opposés est-elle un exercice plus exigeant que l\'analyse d\'un seul texte ?', options: ['Ce n\'est pas plus exigeant', 'Parce qu\'elle nécessite de comprendre et d\'évaluer deux logiques argumentatives distinctes, tout en identifiant leurs interactions (convergences, divergences, limites communes)', 'Parce que les deux textes disent toujours la même chose', 'Parce qu\'un seul texte suffit toujours pour comprendre un sujet'], correctIndex: 1, explanation: 'La comparaison nécessite de COMPRENDRE et d\'ÉVALUER DEUX logiques argumentatives DISTINCTES, tout en identifiant leurs INTERACTIONS (convergences, divergences, limites COMMUNES) — une démarche analytique plus COMPLEXE que l\'analyse isolée d\'un seul texte.' },
        { id: 'b2-arg-04-ex14', type: 'qcm', question: 'Quelle structure introduit une nuance dans l\'évaluation de la solidité comparée des deux textes ?', options: ['"Le texte A est meilleur, point final."', '"L\'argument du texte A est étayé par des exemples concrets, ce qui le rend plus convaincant sur ce point précis."', '"Le texte B n\'a aucun argument valable."', 'Ne jamais évaluer la solidité des arguments'], correctIndex: 1, explanation: 'Cette formule évalue la solidité de façon CIBLÉE ("sur ce point précis"), évitant un jugement GLOBAL et DÉFINITIF sur l\'ensemble du texte — nuance essentielle dans une analyse rigoureuse.' },
        { id: 'b2-arg-04-ex15', type: 'qcm', question: 'Pourquoi est-il préférable, dans une analyse comparative académique, d\'éviter de révéler trop tôt sa propre opinion personnelle sur le sujet ?', options: ['Il faut toujours révéler son opinion dès la première phrase', 'Cela permet d\'analyser les deux argumentations de façon plus objective et équilibrée, avant éventuellement de formuler une position personnelle synthétique en conclusion', 'L\'opinion personnelle n\'a jamais sa place dans une analyse', 'Cela rend l\'analyse plus confuse'], correctIndex: 1, explanation: 'Retarder l\'expression de son OPINION PERSONNELLE permet d\'analyser les DEUX argumentations de façon plus OBJECTIVE et ÉQUILIBRÉE, avant éventuellement de formuler une POSITION SYNTHÉTIQUE en CONCLUSION, après avoir pleinement exploré les deux perspectives.' },
        { id: 'b2-arg-04-ex16', type: 'qcm', question: 'Quelle est la fonction de la phrase de transition "Si chaque argumentation présente des points forts..." en fin d\'analyse comparative ?', options: ['Trancher définitivement en faveur d\'un texte', 'Reconnaître la valeur des deux argumentations avant de proposer une piste de réflexion complémentaire, sans clore artificiellement le débat', 'Rejeter complètement les deux textes', 'Changer complètement de sujet'], correctIndex: 1, explanation: 'Cette phrase RECONNAÎT la VALEUR des DEUX argumentations avant de proposer une PISTE complémentaire (données empiriques), évitant de CLORE ARTIFICIELLEMENT un débat qui reste légitimement OUVERT.' },
        { id: 'b2-arg-04-ex17', type: 'qcm', question: 'Quelle compétence rédactionnelle cette analyse comparative développe-t-elle, transférable à l\'exercice de la synthèse de documents (cf. module Expression écrite) ?', options: ['Aucune compétence transférable', 'La capacité à mettre en relation plusieurs sources, à identifier convergences et divergences, et à organiser une réflexion structurée sans copier les textes sources', 'La capacité à copier mot à mot les deux textes', 'La capacité à ignorer complètement les sources fournies'], correctIndex: 1, explanation: 'Cette analyse développe la capacité à METTRE EN RELATION plusieurs sources, IDENTIFIER convergences et divergences, et ORGANISER une réflexion STRUCTURÉE sans simplement COPIER les textes — compétence directement TRANSFÉRABLE à l\'exercice de la SYNTHÈSE de documents.' },
        { id: 'b2-arg-04-ex18', type: 'qcm', question: 'Pourquoi est-il pertinent de noter qu\'aucun des deux textes n\'aborde les modalités pratiques de mise en œuvre ?', options: ['Ce n\'est pas pertinent du tout', 'Parce que cela identifie une limite commune aux deux argumentations, montrant que le débat reste encore incomplet sur des aspects concrets importants', 'Parce que cela invalide complètement les deux textes', 'Parce que les modalités pratiques n\'ont jamais d\'importance dans un débat de société'], correctIndex: 1, explanation: 'Identifier cette LIMITE COMMUNE montre que le DÉBAT reste encore INCOMPLET sur des aspects CONCRETS importants (comment, avec quel accompagnement), suggérant des pistes pour ENRICHIR la réflexion future sur ce sujet.' },
        { id: 'b2-arg-04-ex19', type: 'qcm', question: 'Quelle structure de phrase permettrait de souligner que les deux textes, malgré leur désaccord central, partagent un objectif commun ?', options: ['"Les deux textes s\'opposent sur tout, sans aucun point commun."', '"Les deux textes s\'opposent sur X (le moyen), mais convergent sur Y (l\'objectif d\'une meilleure participation citoyenne des jeunes)."', '"Le texte A n\'a aucun rapport avec le texte B."', 'Ignorer cette dimension'], correctIndex: 1, explanation: 'Cette structure ("s\'opposent sur X, mais convergent sur Y") permet de NUANCER l\'opposition apparente en révélant un OBJECTIF COMMUN sous-jacent (ici, l\'amélioration de la participation citoyenne des jeunes), malgré le désaccord sur le MOYEN.' },
        { id: 'b2-arg-04-ex20', type: 'qcm', question: 'En synthèse, quelle posture intellectuelle cet exercice d\'analyse comparative cultive-t-il particulièrement, utile au-delà du cadre scolaire ?', options: ['La capacité à choisir immédiatement un camp sans réflexion', 'Une posture d\'analyse équilibrée et critique, capable d\'examiner plusieurs perspectives sur un même sujet avant de former un jugement personnel informé', 'La capacité à ignorer systématiquement les arguments contraires à sa propre opinion', 'La capacité à mémoriser des textes sans les comprendre'], correctIndex: 1, explanation: 'Cet exercice cultive une POSTURE d\'ANALYSE ÉQUILIBRÉE et CRITIQUE, capable d\'EXAMINER PLUSIEURS PERSPECTIVES sur un même sujet AVANT de former un JUGEMENT PERSONNEL INFORMÉ — une disposition intellectuelle précieuse pour la VIE CITOYENNE et démocratique au-delà du cadre scolaire.' },
      ],
    },
  ],
};
