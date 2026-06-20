import type { LangModule } from '../types';

export const b2LettresFormelles: LangModule = {
  id: 'b2-mod-06',
  slug: 'b2-lettres-formelles',
  level: 'B2',
  title: 'Correspondance formelle avancée',
  subtitle: 'Recours administratifs, motivation et mise en demeure',
  description: 'Maîtrisez les courriers formels complexes : recours, motivation avancée et correspondance juridique.',
  type: 'thematique',
  emoji: '📜',
  free: false,
  lessons: [
    {
      id: 'b2-let-01',
      slug: 'b2-recours-administratif',
      moduleSlug: 'b2-lettres-formelles',
      level: 'B2',
      title: 'Le recours administratif',
      description: 'Rédiger un recours gracieux ou hiérarchique pour contester une décision administrative.',
      duration: 35,
      free: false,
      dialogue: `## Exemple : Recours gracieux contre un refus de titre de séjour

---

**Amira BELKACEM**
24 rue Victor Hugo
69003 Lyon

**Monsieur le Préfet du Rhône**
Préfecture du Rhône
69419 Lyon Cedex 03

Lyon, le 10 février 2024

**Objet : Recours gracieux contre la décision de refus de renouvellement de titre de séjour n° 2024/0156 du 15 janvier 2024**

**Lettre recommandée avec accusé de réception**

Monsieur le Préfet,

Par décision du 15 janvier 2024, dont j'ai accusé réception le 22 janvier, vous avez refusé de renouveler mon titre de séjour "vie privée et familiale", au motif que je ne justifierais pas de ressources suffisantes.

J'ai l'honneur de contester cette décision, pour les raisons suivantes.

En premier lieu, il apparaît que votre décision n'a pas tenu compte de mon contrat de travail signé le 5 janvier 2024, dont copie est jointe à la présente, et qui atteste de ressources mensuelles de 1 850 euros nets, supérieures au SMIC.

En second lieu, je tiens à souligner que je réside en France depuis sept ans, que mes deux enfants y sont scolarisés, et que l'ensemble de ma vie privée et familiale s'y trouve désormais établie — éléments qui, conformément à l'article L423-23 du Code de l'entrée et du séjour des étrangers et du droit d'asile, doivent être pris en considération.

En conséquence, je vous demande de bien vouloir reconsidérer votre décision et de procéder au renouvellement de mon titre de séjour.

Dans l'attente d'une réponse favorable, je vous prie d'agréer, Monsieur le Préfet, l'expression de ma considération distinguée.

**Amira Belkacem**

*P.J. : copie de la décision contestée, contrat de travail, justificatifs de scolarisation des enfants*`,

      linguisticPoint: `## Point linguistique : Les structures argumentatives juridiques

### Introduire une contestation
- "J'ai l'honneur de contester cette décision, pour les raisons suivantes."
- "Je me permets de solliciter le réexamen de..."

### Structurer les arguments ("en premier lieu... en second lieu...")
- "En premier lieu, il apparaît que..."
- "En second lieu, je tiens à souligner que..."
- "Enfin, et surtout, ..."

### Citer une base légale précise
- "Conformément à l'article X du [texte de loi], ..."
- "En vertu de l'article X, ..."
- "Aux termes de l'article X, ..."

### Demander une révision
- "Je vous demande de bien vouloir reconsidérer votre décision."
- "Je sollicite le réexamen de mon dossier à la lumière des éléments exposés ci-dessus."

### Différence recours gracieux / hiérarchique / contentieux
- **Gracieux** : adressé à l'auteur même de la décision (ici, le préfet)
- **Hiérarchique** : adressé au supérieur de l'auteur (ex : ministre de l'Intérieur)
- **Contentieux** : saisine du tribunal administratif`,

      keyPoints: [
        'Recours gracieux = adressé à l\'auteur même de la décision contestée',
        'Recours hiérarchique = adressé au supérieur de l\'auteur de la décision',
        '"En premier lieu... en second lieu..." = structure des arguments par ordre d\'importance',
        '"Conformément à l\'article X du..." = citer précisément une base légale',
        'LRAR (lettre recommandée avec accusé de réception) = preuve essentielle en cas de contentieux ultérieur',
      ],

      exercises: [
        {
          id: 'b2-let-01-ex01',
          type: 'qcm',
          question: 'Quelle est la différence entre un "recours gracieux" et un "recours hiérarchique" ?',
          options: [
            'Aucune différence, ce sont des synonymes',
            'Le recours gracieux est adressé à l\'auteur même de la décision, le recours hiérarchique à son supérieur',
            'Le recours hiérarchique est toujours gratuit, le recours gracieux est payant',
            'Le recours gracieux concerne uniquement les impôts',
          ],
          correctIndex: 1,
          explanation: 'Le RECOURS GRACIEUX est adressé à l\'AUTEUR MÊME de la décision contestée (ici, le préfet qui a pris la décision). Le RECOURS HIÉRARCHIQUE est adressé à son SUPÉRIEUR (ex : ministre de l\'Intérieur). Les deux sont des recours administratifs préalables, distincts du recours CONTENTIEUX (devant le tribunal).',
        },
        {
          id: 'b2-let-01-ex02',
          type: 'qcm',
          question: '"J\'ai l\'honneur de contester cette décision, pour les raisons suivantes" sert à :',
          options: [
            'Conclure la lettre',
            'Introduire formellement la contestation avant de développer les arguments',
            'S\'excuser auprès du préfet',
            'Demander un délai supplémentaire',
          ],
          correctIndex: 1,
          explanation: '"J\'ai l\'honneur de contester..." est une formule INTRODUCTIVE très formelle qui annonce la CONTESTATION et la structure ARGUMENTATIVE à venir ("pour les raisons suivantes"). Le "j\'ai l\'honneur de" est une formule de politesse administrative classique, même pour contester une décision.',
        },
        {
          id: 'b2-let-01-ex03',
          type: 'qcm',
          question: 'Structurer des arguments : "___ lieu, il apparaît que votre décision n\'a pas tenu compte de mon contrat."',
          options: ['Premier', 'En premier', 'En second', 'Dernier'],
          correctIndex: 1,
          explanation: '"EN PREMIER LIEU, il apparaît que..." Structure pour ORDONNER les arguments : "en premier lieu... en second lieu... enfin..." Cette numérotation explicite facilite la lecture par l\'administration et montre une argumentation RIGOUREUSE.',
        },
        {
          id: 'b2-let-01-ex04',
          type: 'qcm',
          question: 'Pourquoi Amira cite-t-elle précisément "l\'article L423-23 du Code de l\'entrée et du séjour des étrangers et du droit d\'asile" ?',
          options: [
            'Pour impressionner le préfet sans raison',
            'Pour ancrer sa demande dans une base légale précise, renforçant la légitimité juridique de son recours',
            'Parce que c\'est obligatoire dans toute lettre administrative',
            'Pour critiquer la loi elle-même',
          ],
          correctIndex: 1,
          explanation: 'Citer une BASE LÉGALE PRÉCISE renforce la LÉGITIMITÉ JURIDIQUE du recours, montrant que la demande n\'est pas une simple opinion mais s\'appuie sur un texte de loi applicable. Cette rigueur juridique est particulièrement efficace pour convaincre l\'administration de réexaminer sa décision.',
        },
        {
          id: 'b2-let-01-ex05',
          type: 'qcm',
          question: 'Quelle est la fonction de "conformément à l\'article X" ?',
          options: [
            'Exprimer un doute sur la loi',
            'Indiquer que l\'argument développé s\'appuie sur, est en accord avec ce texte de loi précis',
            'Critiquer l\'article mentionné',
            'Demander la suppression de cet article',
          ],
          correctIndex: 1,
          explanation: '"Conformément à l\'article X" = en accord avec, en application de cet article précis. Cette formule juridique introduit une RÉFÉRENCE LÉGALE qui justifie l\'argument développé, renforçant sa solidité juridique aux yeux de l\'administration.',
        },
        {
          id: 'b2-let-01-ex06',
          type: 'qcm',
          question: 'Pourquoi envoyer ce recours en "lettre recommandée avec accusé de réception" (LRAR) ?',
          options: [
            'C\'est moins cher que l\'email',
            'Pour disposer d\'une preuve de l\'envoi et de la réception, essentielle en cas de contentieux ultérieur devant le tribunal',
            'Parce que c\'est obligatoire pour toutes les lettres',
            'Pour accélérer le traitement du dossier',
          ],
          correctIndex: 1,
          explanation: 'La LRAR fournit une PREUVE FORMELLE de l\'envoi et de la réception, essentielle si le recours gracieux échoue et qu\'Amira doit ensuite saisir le TRIBUNAL ADMINISTRATIF (recours contentieux). Sans cette preuve, il serait difficile de démontrer qu\'elle a bien exercé son recours dans les délais légaux.',
        },
        {
          id: 'b2-let-01-ex07',
          type: 'qcm',
          question: 'Quelle formule conclut idéalement ce type de lettre très formelle à un préfet ?',
          options: [
            '"Cordialement"',
            '"Je vous prie d\'agréer, Monsieur le Préfet, l\'expression de ma considération distinguée."',
            '"À bientôt"',
            '"Merci beaucoup"',
          ],
          correctIndex: 1,
          explanation: '"Je vous prie d\'agréer, Monsieur le Préfet, l\'expression de ma considération distinguée." est la formule de politesse appropriée pour une correspondance TRÈS FORMELLE adressée à une haute autorité administrative (préfet). "Cordialement" serait trop familier dans ce contexte.',
        },
        {
          id: 'b2-let-01-ex08',
          type: 'qcm',
          question: 'Que signifie "au motif que je ne justifierais pas de ressources suffisantes" ?',
          options: [
            'Une affirmation certaine que les ressources sont insuffisantes',
            'La raison invoquée par l\'administration pour justifier sa décision (le conditionnel marquant la distance de l\'auteure par rapport à cette affirmation)',
            'Une menace de poursuites',
            'Une demande d\'augmentation de salaire',
          ],
          correctIndex: 1,
          explanation: '"Au motif que je ne JUSTIFIERAIS pas" — le CONDITIONNEL ("justifierais") marque la DISTANCE prise par Amira par rapport à cette affirmation de l\'administration, qu\'elle considère erronée. C\'est une nuance subtile : elle rapporte le motif SANS l\'approuver, en utilisant cette forme verbale spécifique.',
        },
        {
          id: 'b2-let-01-ex09',
          type: 'qcm',
          question: 'Quel est le rôle des pièces jointes (P.J.) mentionnées en fin de lettre ?',
          options: [
            'Elles sont facultatives et sans importance',
            'Elles apportent les preuves concrètes (contrat, justificatifs) qui appuient les arguments développés dans la lettre',
            'Elles remplacent le contenu de la lettre',
            'Elles servent uniquement à allonger le dossier',
          ],
          correctIndex: 1,
          explanation: 'Les PIÈCES JOINTES apportent les PREUVES CONCRÈTES (contrat de travail, justificatifs de scolarisation) qui APPUIENT les arguments développés dans le corps de la lettre. Sans ces preuves matérielles, les arguments resteraient de simples affirmations non vérifiables par l\'administration.',
        },
        {
          id: 'b2-let-01-ex10',
          type: 'qcm',
          question: 'Quel est l\'objectif principal d\'un recours gracieux avant d\'engager un recours contentieux ?',
          options: [
            'Éviter complètement toute démarche administrative',
            'Tenter d\'obtenir un réexamen favorable de la décision de façon plus rapide et moins coûteuse qu\'une procédure judiciaire',
            'Accuser l\'administration de mauvaise foi systématique',
            'Demander des dommages-intérêts financiers',
          ],
          correctIndex: 1,
          explanation: 'Le recours GRACIEUX permet de tenter d\'obtenir un RÉEXAMEN favorable de façon plus RAPIDE et moins COÛTEUSE qu\'une procédure devant le tribunal administratif (recours contentieux). C\'est souvent une étape préalable recommandée avant d\'engager une procédure judiciaire plus longue et complexe.',
        },
        {
          id: 'b2-let-01-ex11',
          type: 'qcm',
          question: 'Pourquoi Amira mentionne-t-elle que ses "deux enfants y sont scolarisés" et que sa "vie privée et familiale s\'y trouve établie" ?',
          options: [
            'Pour des raisons sans rapport avec son recours',
            'Pour démontrer concrètement l\'ancrage de sa vie privée et familiale en France, élément juridiquement pertinent pour ce type de titre de séjour',
            'Pour critiquer le système scolaire français',
            'Pour demander une aide financière supplémentaire',
          ],
          correctIndex: 1,
          explanation: 'Ces éléments (scolarisation des enfants, ancrage familial) démontrent CONCRÈTEMENT l\'établissement de sa VIE PRIVÉE ET FAMILIALE en France — critère JURIDIQUEMENT PERTINENT pour ce type spécifique de titre de séjour, renforçant son argumentation au-delà de la simple question des ressources financières.',
        },
        {
          id: 'b2-let-01-ex12',
          type: 'qcm',
          question: 'Que signifie "solliciter le réexamen de mon dossier" ?',
          options: [
            'Demander la destruction du dossier',
            'Demander que le dossier soit examiné une nouvelle fois, avec attention',
            'Refuser de fournir un dossier',
            'Demander un nouveau dossier vierge',
          ],
          correctIndex: 1,
          explanation: '"Solliciter le réexamen" = demander RESPECTUEUSEMENT que le dossier soit EXAMINÉ À NOUVEAU, avec attention, à la lumière des nouveaux éléments ou arguments présentés. "Solliciter" est un verbe formel pour "demander poliment".',
        },
        {
          id: 'b2-let-01-ex13',
          type: 'qcm',
          question: 'Pourquoi est-il important de respecter un DÉLAI précis pour déposer un recours gracieux ?',
          options: [
            'Il n\'y a aucun délai à respecter',
            'Le délai légal de recours (généralement 2 mois après notification) doit être respecté, sous peine de forclusion (perte du droit de contester)',
            'Le délai n\'a d\'importance que pour les recours contentieux',
            'On peut toujours déposer un recours, peu importe le délai',
          ],
          correctIndex: 1,
          explanation: 'Le DÉLAI LÉGAL de recours (généralement 2 MOIS après la notification de la décision) doit être impérativement respecté. Au-delà de ce délai, le droit de contester est généralement PERDU (FORCLUSION), sauf exceptions limitées. C\'est pourquoi la date de notification ("dont j\'ai accusé réception le 22 janvier") est précisée dans la lettre.',
        },
        {
          id: 'b2-let-01-ex14',
          type: 'qcm',
          question: 'Quelle structure permettrait d\'ajouter un troisième argument après "en premier lieu" et "en second lieu" ?',
          options: ['"Premièrement"', '"Enfin" ou "En dernier lieu"', '"Donc"', '"Cependant"'],
          correctIndex: 1,
          explanation: '"ENFIN" ou "EN DERNIER LIEU" complète logiquement la série "en premier lieu... en second lieu... enfin/en dernier lieu..." Cette structure tripartite (ou plus) organise clairement une argumentation à plusieurs arguments distincts.',
        },
        {
          id: 'b2-let-01-ex15',
          type: 'qcm',
          question: 'Que se passerait-il si Amira ne joignait AUCUNE preuve à sa lettre de recours ?',
          options: [
            'Le recours serait automatiquement accepté',
            'Le recours serait nettement moins convaincant, car les affirmations non étayées par des preuves sont plus facilement rejetées par l\'administration',
            'Cela n\'aurait aucune conséquence sur l\'issue du recours',
            'L\'administration enverrait automatiquement les preuves elle-même',
          ],
          correctIndex: 1,
          explanation: 'Sans PREUVES (pièces jointes), les affirmations d\'Amira resteraient de simples ALLÉGATIONS non vérifiables, beaucoup plus facilement REJETÉES par l\'administration. Les preuves matérielles (contrat, justificatifs) sont ESSENTIELLES pour donner de la force et de la crédibilité à un recours administratif.',
        },
        {
          id: 'b2-let-01-ex16',
          type: 'qcm',
          question: 'Pourquoi le numéro de la décision contestée ("n° 2024/0156") est-il mentionné dans l\'objet de la lettre ?',
          options: [
            'C\'est un détail sans importance',
            'Pour permettre une identification précise et rapide du dossier concerné par l\'administration',
            'Pour des raisons esthétiques uniquement',
            'Parce que c\'est interdit de ne pas le mentionner',
          ],
          correctIndex: 1,
          explanation: 'Mentionner le NUMÉRO précis de la décision contestée permet une IDENTIFICATION RAPIDE et SANS AMBIGUÏTÉ du dossier concerné par les services administratifs, qui traitent généralement de nombreux dossiers simultanément. C\'est une pratique essentielle pour fluidifier le traitement administratif.',
        },
        {
          id: 'b2-let-01-ex17',
          type: 'qcm',
          question: 'Quel registre de langue caractérise cette lettre de recours ?',
          options: [
            'Familier et direct',
            'Très formel, juridique, précis, sans aucune familiarité',
            'Argotique avec des abréviations',
            'Poétique et littéraire',
          ],
          correctIndex: 1,
          explanation: 'Cette lettre adopte un registre TRÈS FORMEL et JURIDIQUE : vocabulaire précis ("au motif que", "j\'ai l\'honneur de"), structure argumentative rigoureuse, citations légales exactes, et formules de politesse codifiées — adapté à une communication officielle avec une haute autorité administrative.',
        },
        {
          id: 'b2-let-01-ex18',
          type: 'qcm',
          question: 'Pourquoi est-il préférable de structurer ses arguments PAR ORDRE D\'IMPORTANCE plutôt que de façon désordonnée ?',
          options: [
            'L\'ordre n\'a aucune importance réelle',
            'Une structure claire et logique facilite la compréhension et l\'évaluation du dossier par l\'administration, renforçant l\'efficacité du recours',
            'Pour rendre la lettre plus longue artificiellement',
            'Parce que c\'est une obligation légale stricte',
          ],
          correctIndex: 1,
          explanation: 'Une structure CLAIRE et LOGIQUE (en premier lieu/en second lieu) facilite grandement la COMPRÉHENSION et l\'ÉVALUATION du dossier par l\'agent administratif chargé de le traiter, renforçant l\'EFFICACITÉ persuasive du recours par rapport à une argumentation désordonnée et confuse.',
        },
        {
          id: 'b2-let-01-ex19',
          type: 'qcm',
          question: 'Quelle est la signification de "il apparaît que" dans "il apparaît que votre décision n\'a pas tenu compte de mon contrat" ?',
          options: [
            'Une affirmation catégorique et agressive',
            'Une formule qui introduit un constat avec une certaine retenue diplomatique, sans accuser directement',
            'Une question sans réponse',
            'Un refus total de la décision',
          ],
          correctIndex: 1,
          explanation: '"Il apparaît que" introduit un CONSTAT avec une certaine RETENUE DIPLOMATIQUE, évitant une accusation trop DIRECTE ("vous avez commis une erreur") au profit d\'une formulation plus NEUTRE et RESPECTUEUSE, tout en exprimant clairement le désaccord sur le fond.',
        },
        {
          id: 'b2-let-01-ex20',
          type: 'qcm',
          question: 'Quelle compétence rédactionnelle avancée ce type de lettre développe-t-il particulièrement, utile au-delà du contexte spécifique du titre de séjour ?',
          options: [
            'La capacité à copier des modèles sans les adapter',
            'La capacité à argumenter de façon structurée, à citer des références précises et à adopter un registre formel approprié pour contester une décision administrative',
            'La capacité à éviter tout contact avec l\'administration',
            'La capacité à écrire le plus rapidement possible sans réflexion',
          ],
          correctIndex: 1,
          explanation: 'Cette compétence — ARGUMENTER de façon STRUCTURÉE, CITER des références PRÉCISES, adopter un registre FORMEL adapté — est TRANSFÉRABLE à de nombreuses situations administratives ou professionnelles au-delà du titre de séjour (contestation d\'impôts, litige avec une assurance, réclamation professionnelle...).',
        },
      ],
    },

    {
      id: 'b2-let-02',
      slug: 'b2-lettre-motivation-avancee',
      moduleSlug: 'b2-lettres-formelles',
      level: 'B2',
      title: 'La lettre de motivation pour un poste à responsabilité',
      description: 'Rédiger une lettre de motivation sophistiquée pour un poste de cadre ou une reconversion.',
      duration: 35,
      free: false,
      dialogue: `## Exemple : Lettre de motivation — poste de responsable d'équipe

---

Madame, Monsieur,

Fort de douze années d'expérience dans le secteur logistique, dont les cinq dernières en tant que coordinateur d'équipe, je souhaite vous proposer ma candidature au poste de Responsable d'Exploitation, dont l'annonce a retenu toute mon attention.

Mon parcours s'est construit autour d'une conviction : la performance d'une organisation repose avant tout sur la qualité du management humain qui la sous-tend. C'est cette conviction qui m'a conduit, au fil de mes expériences successives, à développer une expertise tant opérationnelle que managériale.

Au cours de mon poste actuel, j'ai notamment piloté la réorganisation d'une équipe de quinze personnes, ce qui s'est traduit par une amélioration de 18% de notre taux de livraison dans les délais. Cette réussite, je la dois autant à une analyse rigoureuse des processus qu'à une attention particulière portée à la cohésion d'équipe.

Votre entreprise, par son positionnement sur les enjeux de logistique durable, correspond précisément aux valeurs que je souhaite désormais porter dans ma carrière. C'est pourquoi je serais honoré de pouvoir mettre mon expérience à votre service, dans le cadre d'un poste qui me permettrait de conjuguer exigence opérationnelle et accompagnement humain.

Je me tiens naturellement à votre disposition pour vous exposer plus en détail les motivations qui animent ma candidature.

Je vous prie d'agréer, Madame, Monsieur, l'expression de ma considération distinguée.`,

      linguisticPoint: `## Point linguistique : Le participe présent en tête de phrase (construction valorisante)

### Construction "Fort de + nom"
"**Fort de** douze années d'expérience, je..." = ayant cette expérience comme atout
Variantes : "Riche de...", "Doté(e) de...", "Animé(e) par..."

### Mise en valeur d'un résultat chiffré avec "ce qui s'est traduit par"
"J'ai piloté X, **ce qui s'est traduit par** une amélioration de 18%."
= cette action a eu pour conséquence concrète et mesurable

### Structure de la conviction personnelle
"Mon parcours s'est construit autour d'une conviction : ..." (+ deux points + développement)

### Valoriser un mérite partagé sans fausse modestie
"Cette réussite, je la dois autant à X qu'à Y." (mise en relief par reprise pronominale "la")

### Conclusion projective (se positionner dans l'avenir avec l'entreprise)
"... un poste qui me permettrait de conjuguer X et Y."
"Je serais honoré de pouvoir mettre mon expérience à votre service."`,

      keyPoints: [
        '"Fort de + nom" = construction valorisante en tête de phrase (= ayant cet atout)',
        '"Ce qui s\'est traduit par + résultat chiffré" = mettre en avant un impact concret mesurable',
        '"Cette réussite, je la dois autant à X qu\'à Y" = reconnaissance nuancée d\'un mérite partagé',
        'Conditionnel projectif : "un poste qui me permettrait de..." = se positionner dans un futur possible',
        'Pour un poste de cadre : insister sur le management humain autant que sur les résultats chiffrés',
      ],

      exercises: [
        {
          id: 'b2-let-02-ex01',
          type: 'qcm',
          question: 'Que signifie "fort de douze années d\'expérience" en tête de lettre ?',
          options: [
            'Une faiblesse à compenser',
            'Une mise en valeur de cette expérience comme un atout solide pour la candidature',
            'Une critique du système professionnel',
            'Une excuse pour un manque de qualification',
          ],
          correctIndex: 1,
          explanation: '"Fort de + nom" = ayant cet élément comme ATOUT SOLIDE. "Fort de douze années d\'expérience" met en VALEUR cette expérience dès la première phrase, créant une entrée en matière impactante et confiante pour la lettre de motivation.',
        },
        {
          id: 'b2-let-02-ex02',
          type: 'qcm',
          question: '"Ce qui s\'est traduit par une amélioration de 18%" sert à :',
          options: [
            'Minimiser un résultat',
            'Mettre en avant un impact concret et mesurable de l\'action décrite précédemment',
            'Critiquer l\'entreprise précédente',
            'Exprimer un doute sur les chiffres',
          ],
          correctIndex: 1,
          explanation: '"Ce qui s\'est traduit par + résultat chiffré" relie une ACTION (réorganisation d\'équipe) à un IMPACT CONCRET et MESURABLE (amélioration de 18%). Cette structure renforce la crédibilité de la candidature en donnant des PREUVES tangibles plutôt que des affirmations vagues.',
        },
        {
          id: 'b2-let-02-ex03',
          type: 'qcm',
          question: 'Que signifie "cette réussite, je la dois autant à X qu\'à Y" ?',
          options: [
            'La réussite est due uniquement à X',
            'La réussite résulte de façon équilibrée de deux facteurs, X et Y, tous deux importants',
            'La réussite n\'est due à aucun facteur identifiable',
            'La réussite est due uniquement à Y',
          ],
          correctIndex: 1,
          explanation: '"Je la dois autant à X qu\'à Y" = structure d\'ÉGALITÉ ("autant... que...") qui répartit le MÉRITE de façon ÉQUILIBRÉE entre deux facteurs (ici : analyse rigoureuse des processus ET attention à la cohésion d\'équipe). Cela montre une vision NUANCÉE du succès, ni purement technique ni purement humaine.',
        },
        {
          id: 'b2-let-02-ex04',
          type: 'qcm',
          question: 'Conditionnel projectif : "un poste qui me ___ de conjuguer exigence opérationnelle et accompagnement humain." (permettre)',
          options: ['permet', 'permettra', 'permettrait', 'permettait'],
          correctIndex: 2,
          explanation: '"Un poste qui me PERMETTRAIT de conjuguer..." Conditionnel présent pour évoquer une POSSIBILITÉ FUTURE encore hypothétique (le poste n\'est pas encore obtenu). Cette nuance modale est appropriée dans une lettre de motivation, qui envisage un futur possible sans présumer du résultat.',
        },
        {
          id: 'b2-let-02-ex05',
          type: 'qcm',
          question: 'Que signifie "conjuguer exigence opérationnelle et accompagnement humain" ?',
          options: [
            'Choisir uniquement l\'un des deux aspects',
            'Combiner harmonieusement ces deux dimensions complémentaires dans sa pratique professionnelle',
            'Opposer ces deux notions de façon conflictuelle',
            'Ignorer ces deux aspects complètement',
          ],
          correctIndex: 1,
          explanation: '"Conjuguer X et Y" = COMBINER, ARTICULER harmonieusement deux dimensions qui pourraient sembler distinctes mais sont en réalité COMPLÉMENTAIRES. Pour un poste de management, allier rigueur opérationnelle (résultats, processus) et qualité humaine (accompagnement des équipes) est une compétence très valorisée.',
        },
        {
          id: 'b2-let-02-ex06',
          type: 'qcm',
          question: 'Pourquoi la phrase "mon parcours s\'est construit autour d\'une conviction" est-elle une entrée en matière efficace pour le deuxième paragraphe ?',
          options: [
            'Elle n\'a aucune fonction particulière',
            'Elle structure le récit autour d\'un fil conducteur cohérent (la conviction sur le management), donnant du sens à l\'ensemble du parcours professionnel',
            'Elle critique le parcours professionnel précédent',
            'Elle introduit une excuse pour un parcours chaotique',
          ],
          correctIndex: 1,
          explanation: 'Cette phrase structure le RÉCIT autour d\'un FIL CONDUCTEUR cohérent — une conviction profonde sur le management — donnant ainsi un SENS UNIFIÉ à l\'ensemble du parcours professionnel, plutôt qu\'une simple succession chronologique de postes sans lien apparent.',
        },
        {
          id: 'b2-let-02-ex07',
          type: 'qcm',
          question: 'Variante de "fort de" : laquelle est INCORRECTE pour introduire une expérience valorisante ?',
          options: ['Riche de', 'Doté de', 'Animé par', 'Faible de'],
          correctIndex: 3,
          explanation: '"FAIBLE DE" n\'est PAS une construction valorisante — "faible" a une connotation NÉGATIVE (manque, insuffisance), contraire à l\'effet recherché. "Riche de", "doté de", "animé par" sont en revanche des constructions POSITIVES similaires à "fort de" pour introduire un atout.',
        },
        {
          id: 'b2-let-02-ex08',
          type: 'qcm',
          question: 'Que signifie "votre positionnement sur les enjeux de logistique durable correspond précisément aux valeurs que je souhaite porter" ?',
          options: [
            'Le candidat critique les valeurs de l\'entreprise',
            'Le candidat établit un lien explicite entre les valeurs de l\'entreprise et ses propres aspirations professionnelles, renforçant la pertinence de sa candidature',
            'Le candidat n\'a aucune valeur personnelle',
            'Le candidat n\'a pas fait de recherche sur l\'entreprise',
          ],
          correctIndex: 1,
          explanation: 'Cette phrase établit un LIEN EXPLICITE entre les VALEURS de l\'entreprise (logistique durable) et les ASPIRATIONS personnelles du candidat, démontrant qu\'il a fait des RECHERCHES sur l\'entreprise et que sa candidature n\'est pas générique mais ADAPTÉE spécifiquement à ce poste et cette structure.',
        },
        {
          id: 'b2-let-02-ex09',
          type: 'qcm',
          question: 'Conditionnel de politesse formelle : "Je ___ honoré de pouvoir mettre mon expérience à votre service." (être)',
          options: ['suis', 'serai', 'serais', 'étais'],
          correctIndex: 2,
          explanation: '"Je SERAIS honoré de pouvoir..." Conditionnel de politesse, exprimant un souhait FORMEL et RESPECTUEUX sans présumer de l\'issue (l\'obtention du poste). Très approprié dans le registre soutenu d\'une lettre de motivation pour un poste de cadre.',
        },
        {
          id: 'b2-let-02-ex10',
          type: 'qcm',
          question: 'Pourquoi mentionner un résultat chiffré précis ("18% de taux de livraison") est-il plus efficace qu\'une affirmation vague ("j\'ai bien géré mon équipe") ?',
          options: [
            'Les chiffres ne servent à rien dans une lettre de motivation',
            'Un résultat chiffré apporte une preuve concrète et objective de la performance, plus convaincante qu\'une auto-évaluation subjective',
            'Les chiffres sont toujours faux',
            'Une affirmation vague est toujours préférable',
          ],
          correctIndex: 1,
          explanation: 'Un RÉSULTAT CHIFFRÉ PRÉCIS (18%) apporte une PREUVE CONCRÈTE et OBJECTIVE de la performance, beaucoup plus CONVAINCANTE qu\'une simple AUTO-ÉVALUATION subjective ("j\'ai bien géré"). Cette pratique, courante dans les candidatures à des postes de RESPONSABILITÉ, démontre un sens du RÉSULTAT mesurable.',
        },
        {
          id: 'b2-let-02-ex11',
          type: 'qcm',
          question: 'Que signifie "se tenir naturellement à disposition" en fin de lettre ?',
          options: [
            'Refuser tout contact ultérieur',
            'Exprimer sa disponibilité pour un entretien ou des échanges complémentaires, de façon fluide et non forcée',
            'Exiger une réponse immédiate',
            'Annuler sa candidature',
          ],
          correctIndex: 1,
          explanation: '"Se tenir naturellement à disposition" = exprimer sa DISPONIBILITÉ pour un entretien ou des échanges complémentaires, de façon FLUIDE et NON FORCÉE ("naturellement" suggère une évidence, sans insistance excessive). Formule de clôture appropriée avant la formule de politesse finale.',
        },
        {
          id: 'b2-let-02-ex12',
          type: 'qcm',
          question: 'Pourquoi cette lettre évite-t-elle une liste simple de compétences techniques (logiciels, certifications) au profit d\'un récit structuré autour d\'une conviction managériale ?',
          options: [
            'Parce que les compétences techniques n\'ont aucune importance',
            'Parce que pour un poste de RESPONSABILITÉ, la vision managériale et la capacité de leadership sont souvent davantage valorisées qu\'une simple liste de compétences techniques',
            'Parce que c\'est interdit de mentionner des compétences techniques',
            'Par manque de compétences techniques à mentionner',
          ],
          correctIndex: 1,
          explanation: 'Pour un poste de RESPONSABILITÉ (encadrement d\'équipe), la VISION MANAGÉRIALE et la capacité de LEADERSHIP sont souvent davantage VALORISÉES qu\'une simple liste de compétences TECHNIQUES (qui restent importantes mais secondaires à ce niveau). Le récit structuré démontre une réflexion APPROFONDIE sur sa pratique professionnelle.',
        },
        {
          id: 'b2-let-02-ex13',
          type: 'qcm',
          question: 'Que signifie "qui m\'a conduit à développer une expertise tant opérationnelle que managériale" ?',
          options: [
            'Une expertise uniquement opérationnelle',
            'Une expertise qui couvre à la fois les aspects opérationnels (techniques) et managériaux (humains)',
            'Une absence totale d\'expertise',
            'Une expertise uniquement théorique',
          ],
          correctIndex: 1,
          explanation: '"Tant X que Y" = à la fois X et Y, structure d\'ÉGALITÉ entre deux dimensions. "Expertise tant opérationnelle que managériale" = expertise qui couvre À LA FOIS les aspects TECHNIQUES/OPÉRATIONNELS et les aspects HUMAINS/MANAGÉRIAUX, montrant une polyvalence valorisée pour un poste de cadre.',
        },
        {
          id: 'b2-let-02-ex14',
          type: 'qcm',
          question: 'Pourquoi le candidat précise-t-il "dont l\'annonce a retenu toute mon attention" plutôt qu\'une formule plus neutre comme "j\'ai vu votre annonce" ?',
          options: [
            'Les deux formules sont parfaitement équivalentes en termes d\'impact',
            'La première formule exprime un intérêt plus marqué et personnel, renforçant la motivation perçue par le recruteur',
            'La seconde formule est plus formelle',
            'Il n\'y a aucune différence de registre entre les deux',
          ],
          correctIndex: 1,
          explanation: '"A retenu toute mon attention" exprime un INTÉRÊT plus MARQUÉ et PERSONNEL que la formule neutre "j\'ai vu votre annonce". Cette nuance stylistique renforce la perception d\'une MOTIVATION authentique et réfléchie, plutôt qu\'une candidature envoyée de façon mécanique à de nombreuses offres.',
        },
        {
          id: 'b2-let-02-ex15',
          type: 'qcm',
          question: 'Quelle est la fonction de la formule "c\'est cette conviction qui m\'a conduit à..." ?',
          options: [
            'Introduire une digression sans rapport',
            'Établir un lien de cause à effet explicite entre une valeur personnelle et le développement concret du parcours professionnel',
            'Exprimer un regret',
            'Conclure la lettre',
          ],
          correctIndex: 1,
          explanation: 'Cette formule établit un LIEN DE CAUSE À EFFET explicite entre une VALEUR/CONVICTION personnelle et le DÉVELOPPEMENT concret du parcours professionnel, donnant une cohérence narrative à la lettre (la conviction n\'est pas qu\'une déclaration abstraite, elle a concrètement GUIDÉ des choix professionnels).',
        },
        {
          id: 'b2-let-02-ex16',
          type: 'qcm',
          question: 'Pourquoi est-il recommandé, pour un poste de cadre, de mentionner à la fois des résultats CHIFFRÉS et une réflexion sur le management HUMAIN ?',
          options: [
            'Il est préférable de ne mentionner que les chiffres',
            'Combiner les deux dimensions démontre une compétence complète : capacité à produire des résultats mesurables tout en gérant les équipes de façon humaine et durable',
            'Il est préférable de ne mentionner que l\'aspect humain',
            'Cette combinaison n\'a aucun intérêt particulier',
          ],
          correctIndex: 1,
          explanation: 'Combiner RÉSULTATS CHIFFRÉS (performance mesurable) et RÉFLEXION sur le MANAGEMENT HUMAIN démontre une compétence COMPLÈTE de cadre : la capacité à produire des résultats CONCRETS tout en gérant les équipes de façon HUMAINE et DURABLE, évitant une vision purement comptable ou purement relationnelle du management.',
        },
        {
          id: 'b2-let-02-ex17',
          type: 'qcm',
          question: 'Quelle structure pourrait remplacer "j\'ai piloté la réorganisation" pour varier le style tout en gardant un sens proche ?',
          options: [
            '"J\'ai subi la réorganisation"',
            '"J\'ai conduit/mené la réorganisation"',
            '"J\'ai ignoré la réorganisation"',
            '"J\'ai annulé la réorganisation"',
          ],
          correctIndex: 1,
          explanation: '"CONDUIRE" ou "MENER" une réorganisation sont des SYNONYMES proches de "piloter" dans ce contexte, exprimant un rôle ACTIF de direction du projet. "Subir" exprimerait une passivité contraire à l\'image valorisante recherchée ; "ignorer" et "annuler" seraient contradictoires avec le sens de la phrase.',
        },
        {
          id: 'b2-let-02-ex18',
          type: 'qcm',
          question: 'Que signifie l\'expression "au fil de mes expériences successives" ?',
          options: [
            'De façon soudaine et unique',
            'Progressivement, à travers plusieurs expériences qui se sont enchaînées dans le temps',
            'Par hasard, sans lien entre les expériences',
            'En une seule expérience isolée',
          ],
          correctIndex: 1,
          explanation: '"Au fil de" = progressivement, au cours du temps (image du fil qui se déroule). "Au fil de mes expériences successives" = à travers plusieurs expériences qui se sont ENCHAÎNÉES dans le temps, soulignant une évolution progressive et continue, pas un parcours fragmenté ou aléatoire.',
        },
        {
          id: 'b2-let-02-ex19',
          type: 'qcm',
          question: 'Pourquoi cette lettre de motivation évite-t-elle les formules trop génériques comme "je suis dynamique et motivé(e)" ?',
          options: [
            'Parce que ces qualités n\'ont aucune valeur',
            'Parce que des formules génériques, sans preuve concrète, sont moins convaincantes qu\'un récit structuré avec des résultats précis et une réflexion personnelle approfondie',
            'Parce que c\'est interdit d\'utiliser ces mots',
            'Parce que les recruteurs n\'aiment jamais ces qualités',
          ],
          correctIndex: 1,
          explanation: 'Les formules GÉNÉRIQUES ("dynamique et motivé") sont souvent perçues comme PEU CONVAINCANTES car elles manquent de PREUVES concrètes et pourraient s\'appliquer à n\'importe quel candidat. Un récit STRUCTURÉ avec des résultats PRÉCIS et une réflexion PERSONNELLE approfondie démontre une véritable substance, plus efficace pour se démarquer.',
        },
        {
          id: 'b2-let-02-ex20',
          type: 'qcm',
          question: 'Quelle compétence rédactionnelle de niveau B2 cette lettre illustre-t-elle particulièrement ?',
          options: [
            'L\'utilisation de phrases très courtes et simples',
            'La construction d\'un récit cohérent et persuasif combinant vocabulaire soutenu, structures syntaxiques sophistiquées et arguments concrets',
            'L\'absence totale de structure',
            'La répétition systématique des mêmes formules',
          ],
          correctIndex: 1,
          explanation: 'Cette lettre illustre la capacité à construire un RÉCIT COHÉRENT et PERSUASIF, combinant un VOCABULAIRE SOUTENU ("fort de", "conjuguer", "conviction"), des STRUCTURES SYNTAXIQUES SOPHISTIQUÉES (mise en relief, participiales) et des ARGUMENTS CONCRETS (chiffres, exemples) — compétence rédactionnelle avancée typique du niveau B2/C1.',
        },
      ],
    },

    {
      id: 'b2-let-03',
      slug: 'b2-reclamation-complexe',
      moduleSlug: 'b2-lettres-formelles',
      level: 'B2',
      title: 'La réclamation complexe argumentée',
      description: 'Construire une réclamation juridiquement fondée pour un litige de consommation ou de service.',
      duration: 35,
      free: false,
      dialogue: `## Exemple : Réclamation suite à un litige avec une banque

---

**Objet : Contestation de frais bancaires indus — Compte n° FR76 XXXX — Demande de remboursement**

Madame, Monsieur,

Titulaire du compte référencé ci-dessus depuis 2019, je me permets d'attirer votre attention sur une anomalie constatée sur mon relevé de compte du mois de janvier 2024.

Il apparaît que des frais de tenue de compte, d'un montant de 84 euros, m'ont été prélevés, alors même que mon contrat, signé le 12 mars 2019 (copie jointe), stipule expressément la gratuité de cette prestation pour les comptes ouverts avant 2020.

Je souhaite par ailleurs souligner que cette situation n'est pas isolée : un prélèvement similaire, d'un montant de 78 euros, avait déjà été constaté en septembre 2023, sans que j'en aie été informé au préalable, en violation, semble-t-il, de l'article L312-1-1 du Code monétaire et financier relatif à l'information préalable du client.

Aussi vous serais-je reconnaissant de bien vouloir :
1. Procéder au remboursement intégral des sommes indûment prélevées, soit 162 euros ;
2. Me confirmer par écrit la correction de mon dossier afin d'éviter toute récidive ;
3. M'indiquer, le cas échéant, les voies de recours dont je disposerais en l'absence de réponse satisfaisante dans un délai de 30 jours.

Je reste à votre disposition pour tout échange complémentaire et vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.

*P.J. : copie du contrat, relevés de compte concernés*`,

      linguisticPoint: `## Point linguistique : Les formules de demande multiple et graduée

### Présenter plusieurs demandes de façon structurée
"Aussi vous serais-je reconnaissant de bien vouloir :
1. ...
2. ...
3. ..."

### Inversion après "aussi" (= c'est pourquoi)
"**Aussi vous serais-je** reconnaissant..." (inversion sujet-verbe après "aussi" en tête de phrase, registre très soutenu)

### Nuancer une accusation juridique avec prudence
"En violation, **semble-t-il**, de l'article..." (le "semble-t-il" insère une réserve, évitant une accusation catégorique qui pourrait être risquée si l'interprétation juridique était erronée)

### Anticiper un recours futur sans le formuler comme une menace directe
"M'indiquer, **le cas échéant**, les voies de recours dont je disposerais..."
= une formule qui évoque poliment une suite possible sans agressivité

### Demander une confirmation écrite (preuve)
"Me confirmer **par écrit** la correction de mon dossier..."`,

      keyPoints: [
        '"Aussi vous serais-je reconnaissant de..." = inversion après "aussi" (= c\'est pourquoi), registre très soutenu',
        'Demandes multiples numérotées = structure claire pour une réclamation complexe',
        '"En violation, semble-t-il, de l\'article..." = nuancer une accusation juridique par prudence',
        '"Le cas échéant" = si la situation se présente (formule de prudence/anticipation)',
        '"Par écrit" = exiger une preuve documentée, pas seulement une réponse orale',
      ],

      exercises: [
        {
          id: 'b2-let-03-ex01',
          type: 'qcm',
          question: 'Inversion après "aussi" : "___ vous serais-je reconnaissant de bien vouloir..."',
          options: ['Donc', 'Aussi', 'Pourtant', 'Cependant'],
          correctIndex: 1,
          explanation: '"AUSSI vous serais-je reconnaissant..." "Aussi" en tête de phrase (= c\'est pourquoi/par conséquent) déclenche l\'INVERSION sujet-verbe dans le registre très soutenu : "je serais" → "serais-je". Ne pas confondre avec "aussi" = également (sans inversion).',
        },
        {
          id: 'b2-let-03-ex02',
          type: 'qcm',
          question: 'Que signifie "en violation, semble-t-il, de l\'article..." ?',
          options: [
            'Une certitude absolue de violation de la loi',
            'Une accusation nuancée, exprimée avec prudence, qui n\'affirme pas catégoriquement la violation',
            'Un déni total de toute violation',
            'Une menace de poursuites immédiates',
          ],
          correctIndex: 1,
          explanation: '"Semble-t-il" inséré dans la phrase introduit une RÉSERVE PRUDENTE : l\'auteur n\'AFFIRME pas catégoriquement la violation (ce qui serait risqué si son interprétation juridique était erronée), mais la SUGGÈRE de façon mesurée, laissant la place à une vérification ou clarification de la banque.',
        },
        {
          id: 'b2-let-03-ex03',
          type: 'qcm',
          question: 'Que signifie "le cas échéant" dans "m\'indiquer, le cas échéant, les voies de recours" ?',
          options: [
            'Toujours, sans exception',
            'Si la situation se présente, si cela s\'avère nécessaire',
            'Jamais',
            'Immédiatement et obligatoirement',
          ],
          correctIndex: 1,
          explanation: '"Le cas échéant" = si la situation se présente / si cela s\'avère nécessaire / if applicable. Cette formule de PRUDENCE évoque une éventualité FUTURE (un recours) sans l\'affirmer comme certaine, tout en la mentionnant de façon ANTICIPÉE et non menaçante.',
        },
        {
          id: 'b2-let-03-ex04',
          type: 'qcm',
          question: 'Pourquoi structurer la demande en plusieurs points NUMÉROTÉS (1, 2, 3) est-il efficace dans une réclamation complexe ?',
          options: [
            'Pour allonger artificiellement la lettre',
            'Pour clarifier précisément CHAQUE demande distincte, facilitant le traitement par le destinataire et évitant toute ambiguïté sur ce qui est exactement demandé',
            'Parce que c\'est une obligation légale stricte',
            'Pour impressionner par la longueur du texte',
          ],
          correctIndex: 1,
          explanation: 'La NUMÉROTATION clarifie PRÉCISÉMENT chaque demande DISTINCTE (remboursement / confirmation écrite / information sur les recours), facilitant le TRAITEMENT par le destinataire (qui peut répondre point par point) et évitant toute AMBIGUÏTÉ sur ce qui est exactement demandé.',
        },
        {
          id: 'b2-let-03-ex05',
          type: 'qcm',
          question: 'Pourquoi demander une confirmation "par écrit" plutôt qu\'une simple réponse orale ?',
          options: [
            'Pour des raisons esthétiques uniquement',
            'Pour disposer d\'une preuve documentée en cas de litige ultérieur ou de non-respect de l\'engagement pris',
            'Parce que l\'écrit est toujours plus rapide',
            'Sans raison particulière',
          ],
          correctIndex: 1,
          explanation: 'Exiger une confirmation "PAR ÉCRIT" permet de disposer d\'une PREUVE DOCUMENTÉE en cas de LITIGE ultérieur ou de non-respect de l\'engagement pris par la banque. Une réponse purement orale serait difficile à prouver si la situation devait être portée devant un médiateur ou un tribunal.',
        },
        {
          id: 'b2-let-03-ex06',
          type: 'qcm',
          question: 'Que signifie "sommes indûment prélevées" ?',
          options: [
            'Des sommes prélevées de façon légale et justifiée',
            'Des sommes prélevées de façon injustifiée, sans fondement légal ou contractuel',
            'Des sommes versées par erreur au client',
            'Des sommes prélevées avec l\'accord explicite du client',
          ],
          correctIndex: 1,
          explanation: '"Indûment" = de façon INJUSTIFIÉE, sans fondement légal ou contractuel valable (contraire de "dûment" = de façon justifiée). "Sommes indûment prélevées" = montants prélevés à TORT, sans base légale ou contractuelle légitime — vocabulaire juridique précis pour qualifier l\'irrégularité constatée.',
        },
        {
          id: 'b2-let-03-ex07',
          type: 'qcm',
          question: 'Pourquoi mentionner un précédent ("un prélèvement similaire... avait déjà été constaté en septembre 2023") renforce-t-il la réclamation ?',
          options: [
            'Cela n\'a aucun effet sur la force de l\'argumentation',
            'Cela démontre que le problème n\'est pas isolé mais récurrent, renforçant la légitimité et l\'urgence de la demande de correction',
            'Cela affaiblit la réclamation en la rendant trop complexe',
            'Cela accuse uniquement le client lui-même',
          ],
          correctIndex: 1,
          explanation: 'Mentionner un PRÉCÉDENT démontre que le problème n\'est PAS ISOLÉ mais RÉCURRENT, renforçant la LÉGITIMITÉ et l\'URGENCE de la demande de correction définitive (pas seulement un remboursement ponctuel, mais une correction structurelle du dossier pour "éviter toute récidive").',
        },
        {
          id: 'b2-let-03-ex08',
          type: 'qcm',
          question: 'Que signifie "stipule expressément la gratuité de cette prestation" ?',
          options: [
            'Le contrat ne mentionne jamais la gratuité',
            'Le contrat indique de façon claire et explicite que cette prestation est gratuite',
            'Le contrat suggère vaguement une possible gratuité',
            'Le contrat interdit toute gratuité',
          ],
          correctIndex: 1,
          explanation: '"Stipuler expressément" = indiquer de façon CLAIRE et EXPLICITE dans un contrat (verbe juridique précis). "Stipule expressément la gratuité" = le contrat prévoit SANS AMBIGUÏTÉ cette gratuité, ce qui rend le prélèvement de frais d\'autant plus contestable.',
        },
        {
          id: 'b2-let-03-ex09',
          type: 'qcm',
          question: 'Pourquoi citer un article précis du Code monétaire et financier renforce-t-il la réclamation ?',
          options: [
            'Cela n\'a aucune importance juridique',
            'Cela ancre la réclamation dans une base légale précise, montrant que le client connaît ses droits et augmentant la pression sur la banque pour résoudre le litige',
            'Cela complique inutilement la lettre',
            'Cela permet d\'éviter de mentionner les faits concrets',
          ],
          correctIndex: 1,
          explanation: 'Citer un ARTICLE PRÉCIS de loi ANCRE la réclamation dans une BASE LÉGALE solide, montrant que le client CONNAÎT ses droits. Cela augmente la PRESSION sur la banque pour résoudre rapidement le litige, sachant qu\'une contestation juridique plus formelle pourrait suivre si la réponse n\'est pas satisfaisante.',
        },
        {
          id: 'b2-let-03-ex10',
          type: 'qcm',
          question: 'Quelle est la fonction du délai mentionné ("dans un délai de 30 jours") en fin de lettre ?',
          options: [
            'Aucune fonction particulière',
            'Fixer un cadre temporel clair pour la réponse attendue, après lequel le client pourrait engager d\'autres démarches (médiateur, tribunal)',
            'Demander un délai supplémentaire pour payer',
            'Annuler automatiquement la réclamation après ce délai',
          ],
          correctIndex: 1,
          explanation: 'Fixer un DÉLAI PRÉCIS ("30 jours") établit un CADRE TEMPOREL clair pour la réponse de la banque, après lequel le client pourrait légitimement engager d\'autres démarches (saisine du médiateur bancaire, puis éventuellement le tribunal). Cela structure la suite de la procédure de façon méthodique.',
        },
        {
          id: 'b2-let-03-ex11',
          type: 'qcm',
          question: 'Inversion soutenue : que signifie exactement "aussi" en tête de phrase avec inversion (par opposition à "aussi" en milieu de phrase) ?',
          options: [
            'Également / en plus',
            'C\'est pourquoi / par conséquent',
            'Malgré tout',
            'Peut-être',
          ],
          correctIndex: 1,
          explanation: '"AUSSI" en TÊTE de phrase + INVERSION sujet-verbe = "c\'est pourquoi / par conséquent" (valeur de CONSÉQUENCE). "Aussi" en milieu de phrase (sans inversion) = "également" (valeur d\'ADDITION). Cette distinction grammaticale subtile est typique du registre très soutenu.',
        },
        {
          id: 'b2-let-03-ex12',
          type: 'qcm',
          question: 'Que signifie "afin d\'éviter toute récidive" ?',
          options: [
            'Pour permettre que le problème se reproduise',
            'Pour empêcher que ce type de problème se reproduise à l\'avenir',
            'Pour aggraver le problème actuel',
            'Sans aucun rapport avec une prévention future',
          ],
          correctIndex: 1,
          explanation: '"Récidive" (à l\'origine vocabulaire pénal, répétition d\'une infraction) employé ici au sens large = répétition du même problème. "Afin d\'éviter toute récidive" = pour EMPÊCHER que ce type de problème (prélèvement indu) se reproduise à l\'AVENIR — demande de correction STRUCTURELLE, pas seulement ponctuelle.',
        },
        {
          id: 'b2-let-03-ex13',
          type: 'qcm',
          question: 'Pourquoi la lettre demande-t-elle à la fois un remboursement ET une correction du dossier, plutôt que seulement le remboursement ?',
          options: [
            'Le remboursement seul suffit toujours',
            'La correction du dossier prévient une répétition future du problème, le remboursement seul ne résolvant que le passé sans garantir l\'avenir',
            'La correction du dossier est sans rapport avec le problème',
            'Il est interdit de faire deux demandes à la fois',
          ],
          correctIndex: 1,
          explanation: 'Le REMBOURSEMENT résout uniquement le PASSÉ (les sommes déjà prélevées), tandis que la CORRECTION DU DOSSIER vise à GARANTIR l\'AVENIR (éviter que le problème se reproduise). Une réclamation BIEN CONSTRUITE anticipe les deux dimensions temporelles du problème.',
        },
        {
          id: 'b2-let-03-ex14',
          type: 'qcm',
          question: 'Que signifie "sans que j\'en aie été informé au préalable" ?',
          options: [
            'Le client a été informé avant le prélèvement',
            'Le client n\'a reçu aucune information avant que le prélèvement n\'ait lieu',
            'Le client a refusé d\'être informé',
            'L\'information n\'a aucune importance dans ce contexte',
          ],
          correctIndex: 1,
          explanation: '"Sans que + subjonctif" exprime l\'ABSENCE d\'une action ("j\'en aie été informé" = subjonctif passé). "Sans que j\'en aie été informé au préalable" = sans avoir reçu d\'information AVANT que le prélèvement n\'ait lieu — élément qui renforce le caractère IRRÉGULIER de la pratique bancaire dénoncée.',
        },
        {
          id: 'b2-let-03-ex15',
          type: 'qcm',
          question: 'Quel registre de langue est employé dans cette lettre de réclamation bancaire ?',
          options: [
            'Familier et agressif',
            'Formel, mesuré, juridiquement précis, sans agressivité ni familiarité',
            'Argotique avec abréviations',
            'Poétique et littéraire',
          ],
          correctIndex: 1,
          explanation: 'Cette lettre adopte un registre FORMEL et MESURÉ, juridiquement PRÉCIS (citations d\'articles, vocabulaire technique "indûment", "stipule") mais sans AGRESSIVITÉ excessive ni FAMILIARITÉ. Cet équilibre entre fermeté et courtoisie est généralement le plus EFFICACE pour obtenir une résolution favorable.',
        },
        {
          id: 'b2-let-03-ex16',
          type: 'qcm',
          question: 'Pourquoi joindre des pièces justificatives (contrat, relevés) est-il essentiel dans ce type de réclamation ?',
          options: [
            'Ce n\'est jamais nécessaire',
            'Ces preuves matérielles permettent de vérifier objectivement la véracité des affirmations et de fonder solidement la demande de remboursement',
            'Cela ralentit toujours le traitement du dossier',
            'C\'est purement décoratif',
          ],
          correctIndex: 1,
          explanation: 'Les PIÈCES JUSTIFICATIVES (contrat prouvant la gratuité prévue, relevés montrant les prélèvements contestés) permettent à la banque de VÉRIFIER OBJECTIVEMENT la véracité des affirmations, fondant SOLIDEMENT la demande de remboursement sur des PREUVES tangibles plutôt que sur de simples déclarations.',
        },
        {
          id: 'b2-let-03-ex17',
          type: 'qcm',
          question: 'Quelle serait une conséquence si la banque ne répond pas dans le délai de 30 jours mentionné ?',
          options: [
            'Le client perd automatiquement tout droit de réclamation',
            'Le client pourrait engager d\'autres démarches comme la saisine du médiateur bancaire ou, en dernier recours, du tribunal',
            'La banque doit fermer le compte automatiquement',
            'Rien ne change, aucune suite n\'est possible',
          ],
          correctIndex: 1,
          explanation: 'En l\'absence de réponse SATISFAISANTE dans le délai mentionné, le client pourrait engager d\'AUTRES DÉMARCHES : saisir le MÉDIATEUR BANCAIRE (gratuit, recours intermédiaire), puis, en dernier ressort, le TRIBUNAL. Le délai fixé structure cette ESCALADE PROGRESSIVE des recours possibles.',
        },
        {
          id: 'b2-let-03-ex18',
          type: 'qcm',
          question: 'Pourquoi formuler "je reste à votre disposition pour tout échange complémentaire" en fin de lettre est-il stratégiquement utile ?',
          options: [
            'Cela affaiblit la position du client',
            'Cela maintient une attitude ouverte et coopérative, facilitant un dialogue constructif tout en ayant déjà fermement exposé ses droits et demandes',
            'Cela annule toutes les demandes précédentes',
            'Cela n\'a aucune utilité particulière',
          ],
          correctIndex: 1,
          explanation: 'Cette formule maintient une attitude OUVERTE et COOPÉRATIVE, facilitant un DIALOGUE CONSTRUCTIF, tout en ayant déjà FERMEMENT exposé ses droits et demandes précises. Cet équilibre entre FERMETÉ sur le fond et OUVERTURE sur la forme est une stratégie efficace pour résoudre un litige sans escalade inutile.',
        },
        {
          id: 'b2-let-03-ex19',
          type: 'qcm',
          question: 'Quelle est la différence entre "stipuler" et simplement "mentionner" dans un contexte contractuel ?',
          options: [
            'Aucune différence',
            '"Stipuler" implique une clause contractuelle formelle et engageante, alors que "mentionner" peut désigner une simple référence informelle',
            '"Mentionner" est plus formel que "stipuler"',
            '"Stipuler" ne s\'applique jamais aux contrats',
          ],
          correctIndex: 1,
          explanation: '"STIPULER" (verbe juridique précis) implique une CLAUSE CONTRACTUELLE FORMELLE et ENGAGEANTE, créant une obligation. "MENTIONNER" peut désigner une simple RÉFÉRENCE plus informelle, sans nécessairement créer d\'obligation contractuelle. Cette nuance de vocabulaire est importante en contexte juridique.',
        },
        {
          id: 'b2-let-03-ex20',
          type: 'qcm',
          question: 'Quelle compétence rédactionnelle avancée cette lettre de réclamation illustre-t-elle, transférable à d\'autres litiges de consommation ?',
          options: [
            'La capacité à exprimer sa colère de façon directe',
            'La capacité à structurer une réclamation complexe avec preuves, base légale, demandes précises et anticipation des suites possibles, dans un registre mesuré et professionnel',
            'La capacité à éviter tout contact avec les institutions financières',
            'La capacité à copier un modèle sans adaptation',
          ],
          correctIndex: 1,
          explanation: 'Cette lettre illustre la capacité à STRUCTURER une réclamation COMPLEXE : preuves matérielles, base LÉGALE précise, demandes MULTIPLES et clairement numérotées, et ANTICIPATION des suites possibles (délai, recours) — tout cela dans un registre MESURÉ et PROFESSIONNEL. Cette méthode est TRANSFÉRABLE à de nombreux litiges de consommation (assurance, télécommunications, commerce...).',
        },
      ],
    },

    {
      id: 'b2-let-04',
      slug: 'b2-mise-en-demeure',
      moduleSlug: 'b2-lettres-formelles',
      level: 'B2',
      title: 'La mise en demeure',
      description: 'Rédiger une mise en demeure pour formaliser une dernière demande avant action en justice.',
      duration: 35,
      free: false,
      dialogue: `## Exemple : Mise en demeure pour loyer impayé par un locataire

---

**MISE EN DEMEURE**
**Lettre recommandée avec accusé de réception**

Monsieur Karim Tahiri
8 rue des Acacias
33000 Bordeaux

Bordeaux, le 5 mars 2024

**Objet : Mise en demeure de payer — Loyers impayés des mois de janvier et février 2024**

Monsieur,

Par la présente, je vous mets en demeure de procéder, dans un délai de QUINZE JOURS à compter de la réception de ce courrier, au règlement de la somme de 1 600 euros, correspondant aux loyers des mois de janvier et février 2024, restés impayés à ce jour malgré mes relances des 5 février et 20 février derniers, demeurées sans effet.

Je vous rappelle qu'aux termes de l'article 7 de la loi du 6 juillet 1989, le locataire est tenu de payer le loyer aux termes convenus.

À défaut de règlement dans le délai imparti, je me verrai contraint, à mon grand regret, de saisir le tribunal judiciaire compétent aux fins d'obtenir, outre le paiement des sommes dues, la résiliation du bail et votre expulsion, ainsi que la condamnation aux dépens et aux intérêts de retard.

Je reste néanmoins disposé à examiner toute proposition d'échéancier de paiement que vous souhaiteriez me soumettre avant l'expiration de ce délai.

Veuillez croire, Monsieur, à l'assurance de mes salutations distinguées.

**[Signature]**`,

      linguisticPoint: `## Point linguistique : Le vocabulaire et les formules de la mise en demeure

### Formule d'ouverture caractéristique
"**Par la présente, je vous mets en demeure de** + infinitif" (formule consacrée, quasi rituelle)

### Exprimer un délai impératif
"**dans un délai de** [durée] **à compter de** la réception de ce courrier"
"**à défaut de** règlement dans le délai imparti, ..."

### Annoncer une conséquence juridique sans excès d'émotion
"Je me verrai contraint, **à mon grand regret**, de saisir le tribunal..."
(l'incise "à mon grand regret" maintient une forme de courtoisie même dans la fermeté)

### Lister les conséquences possibles avec précision
"...aux fins d'obtenir, **outre** le paiement des sommes dues, la résiliation du bail **ainsi que** la condamnation aux dépens..."

### Maintenir une porte de sortie (ouverture au dialogue)
"Je reste néanmoins disposé à examiner toute proposition..."
= la mise en demeure n'exclut pas une résolution amiable de dernière minute`,

      keyPoints: [
        '"Par la présente, je vous mets en demeure de..." = formule consacrée d\'ouverture',
        '"Dans un délai de X à compter de la réception" = formule de délai impératif',
        '"À défaut de" + nom = si cela n\'est pas fait (introduit la conséquence)',
        '"Je me verrai contraint, à mon grand regret, de..." = fermeté + courtoisie maintenue',
        'Maintenir une ouverture au dialogue ("je reste disposé à...") même dans un courrier de fermeté',
      ],

      exercises: [
        {
          id: 'b2-let-04-ex01',
          type: 'qcm',
          question: 'Quelle est la formule d\'ouverture caractéristique d\'une mise en demeure ?',
          options: [
            '"Je voudrais vous demander de..."',
            '"Par la présente, je vous mets en demeure de..."',
            '"Pourriez-vous éventuellement..."',
            '"J\'aimerais bien que..."',
          ],
          correctIndex: 1,
          explanation: '"Par la présente, je vous mets en demeure de..." est la formule CONSACRÉE et quasi RITUELLE pour ouvrir une mise en demeure. Elle marque clairement le caractère FORMEL et JURIDIQUE de ce courrier, par opposition à une simple demande informelle.',
        },
        {
          id: 'b2-let-04-ex02',
          type: 'qcm',
          question: 'Que signifie "dans un délai de quinze jours à compter de la réception" ?',
          options: [
            'Le délai commence à la date d\'envoi de la lettre',
            'Le délai de 15 jours commence à partir du moment où le destinataire reçoit effectivement la lettre',
            'Le délai n\'a aucune date de départ précise',
            'Le délai est de 15 jours après la signature du bail',
          ],
          correctIndex: 1,
          explanation: '"À compter de la réception" = le délai (15 jours) commence à partir du moment où le DESTINATAIRE reçoit EFFECTIVEMENT la lettre (d\'où l\'importance de la LRAR, qui permet de dater précisément cette réception), pas à partir de l\'envoi.',
        },
        {
          id: 'b2-let-04-ex03',
          type: 'qcm',
          question: 'Que signifie "à défaut de règlement dans le délai imparti" ?',
          options: [
            'Si le paiement est effectué dans les temps',
            'Si le paiement n\'est PAS effectué dans le délai fixé',
            'Le paiement n\'est jamais nécessaire',
            'Le délai n\'a aucune importance',
          ],
          correctIndex: 1,
          explanation: '"À défaut de + nom" = en l\'ABSENCE de, si cela n\'est PAS fait. "À défaut de règlement dans le délai imparti" = si le paiement n\'est PAS effectué dans le délai fixé. Cette formule introduit logiquement la CONSÉQUENCE qui suivra (saisine du tribunal).',
        },
        {
          id: 'b2-let-04-ex04',
          type: 'qcm',
          question: 'Pourquoi l\'auteur écrit-il "je me verrai contraint, à mon grand regret, de saisir le tribunal" plutôt que simplement "je vais vous poursuivre" ?',
          options: [
            'Les deux formules sont strictement équivalentes',
            'La première formule maintient une forme de courtoisie et présente l\'action judiciaire comme une contrainte regrettable plutôt qu\'une menace agressive, tout en restant ferme sur le fond',
            'La seconde formule est plus polie',
            'Il n\'y a aucune différence de registre entre les deux',
          ],
          correctIndex: 1,
          explanation: 'L\'incise "à mon grand regret" maintient une forme de COURTOISIE, présentant l\'action judiciaire comme une CONTRAINTE REGRETTABLE (subie, pas choisie avec plaisir) plutôt qu\'une MENACE agressive. Cela reste néanmoins FERME sur le fond — la fermeté et la courtoisie ne sont pas incompatibles dans ce registre.',
        },
        {
          id: 'b2-let-04-ex05',
          type: 'qcm',
          question: 'Que signifie "demeurées sans effet" appliqué aux relances précédentes ?',
          options: [
            'Les relances ont été efficaces et ont résolu le problème',
            'Les relances précédentes n\'ont produit aucun résultat, le problème persiste malgré ces démarches',
            'Les relances n\'ont jamais été envoyées',
            'Les relances ont été annulées par le locataire',
          ],
          correctIndex: 1,
          explanation: '"Demeurées sans effet" = être restées SANS RÉSULTAT, n\'avoir produit aucun changement. Mentionner que les relances PRÉCÉDENTES (5 février et 20 février) sont "demeurées sans effet" démontre que le propriétaire a déjà tenté une résolution AMIABLE avant d\'en arriver à la mise en demeure plus formelle.',
        },
        {
          id: 'b2-let-04-ex06',
          type: 'qcm',
          question: 'Pourquoi citer "l\'article 7 de la loi du 6 juillet 1989" renforce-t-il la mise en demeure ?',
          options: [
            'Cela n\'a aucune importance juridique',
            'Cela ancre l\'obligation de paiement dans une base légale précise, rappelant au locataire son obligation contractuelle et légale',
            'Cela complique inutilement la lettre',
            'Cela permet d\'éviter de mentionner le montant dû',
          ],
          correctIndex: 1,
          explanation: 'Citer l\'ARTICLE PRÉCIS de la loi de 1989 (qui régit les rapports locatifs) ANCRE l\'obligation de paiement dans une BASE LÉGALE incontestable, rappelant FORMELLEMENT au locataire son OBLIGATION contractuelle et LÉGALE, renforçant ainsi la légitimité de la mise en demeure.',
        },
        {
          id: 'b2-let-04-ex07',
          type: 'qcm',
          question: 'Que signifie "outre le paiement des sommes dues" dans la liste des conséquences juridiques envisagées ?',
          options: [
            'Uniquement le paiement des sommes dues, rien d\'autre',
            'En plus du paiement des sommes dues, d\'autres mesures sont également demandées',
            'Le paiement des sommes dues est exclu de la demande',
            'Le paiement n\'est jamais demandé',
          ],
          correctIndex: 1,
          explanation: '"Outre + nom" = en PLUS de, EN SUS de. "Outre le paiement des sommes dues, la résiliation du bail..." = en PLUS du paiement, d\'AUTRES mesures sont également demandées (résiliation, expulsion, dépens...). Cette formule juridique introduit une LISTE de demandes cumulatives.',
        },
        {
          id: 'b2-let-04-ex08',
          type: 'qcm',
          question: 'Pourquoi la lettre se termine-t-elle par "je reste néanmoins disposé à examiner toute proposition d\'échéancier" malgré la fermeté du ton précédent ?',
          options: [
            'Cette phrase annule toutes les demandes précédentes',
            'Cela maintient une ouverture au dialogue et à une résolution amiable, même au stade de la mise en demeure, ce qui peut être stratégiquement et humainement préférable à une procédure judiciaire longue',
            'Cela montre une faiblesse de la part du propriétaire',
            'Cette phrase n\'a aucune utilité particulière',
          ],
          correctIndex: 1,
          explanation: 'Maintenir une OUVERTURE au DIALOGUE (proposition d\'échéancier) même au stade de la mise en demeure peut être STRATÉGIQUEMENT préférable : une PROCÉDURE JUDICIAIRE est longue, coûteuse et incertaine, alors qu\'un ACCORD AMIABLE de dernière minute pourrait résoudre le litige plus rapidement et de façon moins conflictuelle pour les deux parties.',
        },
        {
          id: 'b2-let-04-ex09',
          type: 'qcm',
          question: 'Que sont "les dépens" mentionnés dans la liste des conséquences juridiques ?',
          options: [
            'Les loyers impayés uniquement',
            'Les frais de justice (avocat, procédure) que la partie perdante peut être condamnée à payer',
            'Une amende pénale',
            'Le montant du dépôt de garantie',
          ],
          correctIndex: 1,
          explanation: '"Les dépens" = FRAIS DE JUSTICE (frais de procédure, parfois d\'avocat selon les cas) que la partie PERDANTE d\'un procès peut être CONDAMNÉE à payer. C\'est une terminologie juridique technique précise, distincte des "intérêts de retard" (pénalité financière liée au retard de paiement lui-même).',
        },
        {
          id: 'b2-let-04-ex10',
          type: 'qcm',
          question: 'Pourquoi la mise en demeure est-elle généralement envoyée en LETTRE RECOMMANDÉE AVEC ACCUSÉ DE RÉCEPTION ?',
          options: [
            'C\'est purement esthétique',
            'Pour disposer d\'une preuve formelle de la date de réception, qui marque le point de départ du délai et constitue une preuve essentielle en cas de procédure judiciaire ultérieure',
            'Pour des raisons économiques uniquement',
            'Ce n\'est jamais nécessaire pour ce type de courrier',
          ],
          correctIndex: 1,
          explanation: 'La LRAR fournit une PREUVE FORMELLE et INCONTESTABLE de la date de RÉCEPTION, qui marque le POINT DE DÉPART du délai accordé (15 jours). Cette preuve est ESSENTIELLE en cas de procédure JUDICIAIRE ultérieure, pour démontrer que la mise en demeure a bien été reçue et que le délai a expiré sans réaction du destinataire.',
        },
        {
          id: 'b2-let-04-ex11',
          type: 'qcm',
          question: 'Que signifie "le locataire est tenu de payer le loyer aux termes convenus" ?',
          options: [
            'Le locataire peut choisir librement de payer ou non',
            'Le locataire a l\'obligation légale et contractuelle de payer le loyer selon les modalités fixées dans le contrat',
            'Le locataire n\'a aucune obligation de paiement',
            'Le propriétaire doit payer le loyer lui-même',
          ],
          correctIndex: 1,
          explanation: '"Être tenu de + infinitif" = être OBLIGÉ de, avoir l\'OBLIGATION légale/contractuelle de faire quelque chose. "Le locataire est tenu de payer le loyer aux termes convenus" = il a l\'OBLIGATION de payer selon les MODALITÉS fixées dans le contrat (montant, date d\'échéance...).',
        },
        {
          id: 'b2-let-04-ex12',
          type: 'qcm',
          question: 'Quelle est la différence entre une simple "relance" (mentionnée comme antérieure) et la "mise en demeure" elle-même ?',
          options: [
            'Aucune différence, ce sont des synonymes parfaits',
            'La relance est une demande informelle de paiement, tandis que la mise en demeure est un acte formel et juridiquement significatif qui précède généralement une action en justice',
            'La mise en demeure est moins formelle que la relance',
            'La relance a plus de valeur juridique que la mise en demeure',
          ],
          correctIndex: 1,
          explanation: 'La RELANCE est une demande plus INFORMELLE de paiement (rappel amical ou semi-formel). La MISE EN DEMEURE est un ACTE FORMEL et JURIDIQUEMENT SIGNIFICATIF, marquant généralement la DERNIÈRE ÉTAPE avant une action en JUSTICE, avec des conséquences juridiques explicites en cas de non-respect.',
        },
        {
          id: 'b2-let-04-ex13',
          type: 'qcm',
          question: 'Pourquoi préciser le montant exact ("1 600 euros") et sa composition ("correspondant aux loyers de janvier et février") est-il important ?',
          options: [
            'Ce n\'est jamais nécessaire de préciser un montant',
            'Cela évite toute ambiguïté sur la somme exacte due et sa justification, renforçant la rigueur et la crédibilité de la demande',
            'Cela complique inutilement la lettre',
            'Le montant n\'a aucune importance juridique',
          ],
          correctIndex: 1,
          explanation: 'Préciser le MONTANT EXACT et sa COMPOSITION (deux mois de loyer identifiés) évite toute AMBIGUÏTÉ sur la somme due et sa JUSTIFICATION, renforçant la RIGUEUR et la CRÉDIBILITÉ de la demande. En cas de procédure judiciaire ultérieure, cette précision facilite également la démonstration du préjudice exact subi.',
        },
        {
          id: 'b2-let-04-ex14',
          type: 'qcm',
          question: 'Que pourrait répondre le locataire pour éviter la procédure judiciaire mentionnée, selon l\'esprit de la lettre ?',
          options: [
            'Ignorer complètement la lettre',
            'Proposer un échéancier de paiement, comme suggéré explicitement par le propriétaire en fin de lettre',
            'Quitter immédiatement le logement sans préavis',
            'Contester la lettre sans aucune proposition concrète',
          ],
          correctIndex: 1,
          explanation: 'Le propriétaire suggère EXPLICITEMENT une issue alternative : "je reste disposé à examiner toute proposition d\'échéancier de paiement." Le locataire pourrait donc PROPOSER un PLAN de remboursement échelonné, ce qui éviterait potentiellement la procédure JUDICIAIRE plus lourde pour les deux parties.',
        },
        {
          id: 'b2-let-04-ex15',
          type: 'qcm',
          question: 'Quel est l\'objectif principal d\'une mise en demeure, au-delà de la simple demande de paiement ?',
          options: [
            'Uniquement informer le destinataire de l\'existence d\'une dette',
            'Formaliser officiellement une dernière chance de résolution amiable, tout en constituant une preuve juridique nécessaire avant d\'engager une action en justice',
            'Mettre fin immédiatement et automatiquement au contrat de bail',
            'Demander des excuses personnelles',
          ],
          correctIndex: 1,
          explanation: 'La mise en demeure FORMALISE une DERNIÈRE CHANCE de résolution AMIABLE, tout en constituant une PREUVE JURIDIQUE NÉCESSAIRE (dans de nombreuses procédures, elle est un PRÉALABLE OBLIGATOIRE) avant de pouvoir engager une ACTION EN JUSTICE devant le tribunal compétent.',
        },
        {
          id: 'b2-let-04-ex16',
          type: 'qcm',
          question: 'Pourquoi l\'expression "à ce jour" est-elle utilisée dans "restés impayés à ce jour" ?',
          options: [
            'Elle n\'a aucune utilité particulière',
            'Elle précise que la situation décrite est valable au moment de la rédaction de la lettre, ce qui est important pour la datation précise du litige',
            'Elle indique une date passée révolue',
            'Elle signifie "pour toujours"',
          ],
          correctIndex: 1,
          explanation: '"À ce jour" = au moment PRÉSENT de la rédaction de la lettre. Cette précision TEMPORELLE est importante pour DATER précisément le litige et la situation des impayés au moment où la mise en demeure est envoyée, élément qui pourra être vérifié en cas de procédure ultérieure.',
        },
        {
          id: 'b2-let-04-ex17',
          type: 'qcm',
          question: 'Quelle formule de politesse finale est utilisée dans cette mise en demeure, et que reflète-t-elle ?',
          options: [
            '"Bisous", reflétant une grande familiarité',
            '"Veuillez croire, Monsieur, à l\'assurance de mes salutations distinguées", reflétant un registre très formel malgré la fermeté du contenu',
            '"À plus", reflétant un registre familier',
            'Aucune formule de politesse n\'est utilisée',
          ],
          correctIndex: 1,
          explanation: '"Veuillez croire, Monsieur, à l\'assurance de mes salutations distinguées" est une formule TRÈS FORMELLE, reflétant que même dans un courrier FERME et aux conséquences juridiques significatives, la POLITESSE conventionnelle reste de RIGUEUR dans la correspondance écrite française.',
        },
        {
          id: 'b2-let-04-ex18',
          type: 'qcm',
          question: 'Pourquoi la mise en demeure mentionne-t-elle précisément les dates des relances précédentes ("5 février et 20 février") ?',
          options: [
            'Ces dates n\'ont aucune importance',
            'Pour démontrer la chronologie précise des tentatives de résolution amiable, renforçant la légitimité de passer désormais à une démarche plus formelle',
            'Pour allonger artificiellement la lettre',
            'Pour accuser le locataire de mensonge',
          ],
          correctIndex: 1,
          explanation: 'Mentionner les DATES PRÉCISES des relances antérieures démontre la CHRONOLOGIE des tentatives de résolution AMIABLE déjà effectuées, renforçant la LÉGITIMITÉ de passer désormais à une démarche plus FORMELLE (la mise en demeure), puisque les démarches plus douces n\'ont pas suffi.',
        },
        {
          id: 'b2-let-04-ex19',
          type: 'qcm',
          question: 'Quelle compétence rédactionnelle de niveau B2/C1 cette lettre de mise en demeure illustre-t-elle particulièrement ?',
          options: [
            'L\'utilisation exclusive de phrases très simples',
            'La capacité à combiner fermeté juridique, précision factuelle et courtoisie formelle dans un même document, tout en maintenant une ouverture stratégique au dialogue',
            'L\'absence totale de structure logique',
            'L\'utilisation systématique de menaces directes et agressives',
          ],
          correctIndex: 1,
          explanation: 'Cette lettre illustre la capacité à COMBINER FERMETÉ juridique (conséquences précises en cas de non-paiement), PRÉCISION FACTUELLE (montants, dates, articles de loi) et COURTOISIE FORMELLE (formules de politesse, incises atténuantes), tout en maintenant une OUVERTURE STRATÉGIQUE au dialogue — un équilibre rédactionnel sophistiqué typique du niveau avancé.',
        },
        {
          id: 'b2-let-04-ex20',
          type: 'qcm',
          question: 'Dans quel autre contexte (au-delà du loyer impayé) pourrait-on utiliser une structure similaire de mise en demeure ?',
          options: [
            'Uniquement pour les litiges locatifs, sans aucune autre application',
            'Pour de nombreux litiges de créances impayées : factures professionnelles, prestations de service non payées, remboursements de prêts personnels...',
            'Jamais dans un autre contexte',
            'Uniquement pour des litiges entre particuliers et administrations',
          ],
          correctIndex: 1,
          explanation: 'La STRUCTURE de la mise en demeure (rappel de l\'obligation, délai précis, conséquences en cas de non-respect, ouverture résiduelle au dialogue) est TRANSFÉRABLE à de nombreux litiges de CRÉANCES IMPAYÉES : factures professionnelles non réglées, prestations de service impayées, remboursement de prêts entre particuliers, etc.',
        },
      ],
    },
  ],
};
