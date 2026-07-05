import type { LangModule } from '../types';

export const examenBlancB1: LangModule = {
  id: 'examen-b1',
  slug: 'examen-blanc-b1',
  level: 'B1',
  title: 'Examen blanc B1',
  subtitle: 'Simulation DELF B1 / TEF — carte de résident',
  description: 'Entraînez-vous dans des conditions proches du DELF B1 ou du TEF, requis pour la carte de résident de longue durée et certaines naturalisations.',
  type: 'examen',
  emoji: '📝',
  free: false,
  lessons: [
    {
      id: 'examen-b1-01',
      slug: 'examen-b1-comprehension-ecrite',
      moduleSlug: 'examen-blanc-b1',
      level: 'B1',
      title: 'Section 1 — Compréhension écrite',
      description: 'Simulation d\'épreuve de compréhension écrite : article de presse, lettre, annonce.',
      duration: 12,
      free: false,
      dialogue: `## Instructions de l'examen

**Durée recommandée : 35 minutes — 20 questions**

Cette section reproduit le format des épreuves de compréhension écrite du DELF B1 ou du TEF : un article de presse, une lettre formelle, et une annonce à analyser.

---

**Texte — Extrait d'article : "Le télétravail, six ans après la pandémie"**

Depuis la généralisation du télétravail, les habitudes professionnelles ont profondément évolué. Selon une étude récente, près de 40% des salariés français télétravaillent au moins un jour par semaine, contre seulement 7% avant 2020.

Si les avantages sont nombreux — réduction des temps de transport, meilleur équilibre vie professionnelle/vie privée — certains effets négatifs commencent à apparaître : isolement social, difficulté à déconnecter, et fragilisation du lien d'équipe. Plusieurs entreprises ont ainsi décidé d'imposer un minimum de jours de présence au bureau, suscitant parfois des tensions avec les salariés habitués à une plus grande flexibilité.

Les chercheurs s'accordent sur un point : un équilibre entre présentiel et distanciel semble être la formule la plus durable, à condition d'être adaptée aux besoins de chaque métier et de chaque personne.`,

      linguisticPoint: `## Méthodologie de la compréhension écrite B1

- Lisez le texte une première fois pour saisir l'idée GÉNÉRALE.
- Repérez la STRUCTURE : introduction, développement (arguments), conclusion.
- Pour les questions de détail, relisez le PARAGRAPHE concerné, pas tout le texte.
- Distinguez les FAITS (chiffres, données) des OPINIONS (jugements, nuances).`,

      keyPoints: [
        'Lire une première fois pour l\'idée générale, puis relire pour les détails',
        'Identifier la structure argumentative (introduction/développement/conclusion)',
        'Distinguer faits chiffrés et opinions/nuances dans le texte',
        'Repérer les connecteurs logiques qui structurent l\'argumentation',
        'Gérer son temps : ne pas rester bloqué sur une question difficile',
      ],

      exercises: [
        { id: 'examen-b1-01-ex01', type: 'qcm', question: 'Quel pourcentage de salariés télétravaillait avant 2020, selon le texte ?', options: ['7%', '40%', '15%', '25%'], correctIndex: 0, explanation: 'Le texte indique "contre seulement 7% avant 2020."' },
        { id: 'examen-b1-01-ex02', type: 'qcm', question: 'Quel pourcentage de salariés télétravaille au moins un jour par semaine aujourd\'hui ?', options: ['7%', 'près de 40%', '100%', '50%'], correctIndex: 1, explanation: 'Le texte indique "près de 40% des salariés français télétravaillent au moins un jour par semaine."' },
        { id: 'examen-b1-01-ex03', type: 'qcm', question: 'Quel effet négatif du télétravail est mentionné dans le texte ?', options: ['Augmentation des salaires', 'Isolement social', 'Diminution du temps de travail', 'Réduction des impôts'], correctIndex: 1, explanation: 'Le texte mentionne "isolement social, difficulté à déconnecter, et fragilisation du lien d\'équipe."' },
        { id: 'examen-b1-01-ex04', type: 'qcm', question: 'Pourquoi certaines entreprises imposent-elles un minimum de jours au bureau ?', options: ['Pour réduire les coûts uniquement', 'Pour répondre aux effets négatifs identifiés (isolement, lien d\'équipe fragilisé)', 'Parce que c\'est obligatoire par la loi', 'Pour augmenter les salaires'], correctIndex: 1, explanation: 'Le texte établit un lien implicite entre les effets négatifs mentionnés et la décision de certaines entreprises d\'imposer une présence minimale au bureau.' },
        { id: 'examen-b1-01-ex05', type: 'qcm', question: 'Quelle est la conclusion des chercheurs mentionnés dans le texte ?', options: ['Le télétravail doit être totalement supprimé', 'Le présentiel total est la seule solution', 'Un équilibre entre présentiel et distanciel est la formule la plus durable', 'Aucune conclusion n\'est donnée'], correctIndex: 2, explanation: 'Le texte conclut : "un équilibre entre présentiel et distanciel semble être la formule la plus durable."' },
        { id: 'examen-b1-01-ex06', type: 'qcm', question: 'Que signifie "suscitant parfois des tensions" dans le texte ?', options: ['Résolvant des conflits', 'Provoquant parfois des désaccords', 'Améliorant toujours les relations', 'N\'ayant aucun effet'], correctIndex: 1, explanation: '"Susciter" = provoquer, engendrer. "Suscitant des tensions" = provoquant des désaccords/conflits entre les parties concernées.' },
        { id: 'examen-b1-01-ex07', type: 'qcm', question: 'Que signifie "à condition d\'être adaptée" dans la dernière phrase ?', options: ['Sans aucune condition', 'Seulement si cette formule est ajustée aux besoins spécifiques', 'De façon permanente et figée', 'Uniquement pour certains métiers, jamais pour d\'autres'], correctIndex: 1, explanation: '"À condition de + infinitif" = seulement SI cette condition est remplie. Ici, l\'équilibre n\'est durable QUE s\'il est adapté aux besoins spécifiques.' },
        { id: 'examen-b1-01-ex08', type: 'qcm', question: 'Quel registre de langue est utilisé dans ce texte ?', options: ['Familier', 'Journalistique/analytique, neutre et informatif', 'Poétique', 'Argotique'], correctIndex: 1, explanation: 'Le texte adopte un registre JOURNALISTIQUE/ANALYTIQUE : présentation de données chiffrées, nuances, conclusion mesurée — typique d\'un article de presse de fond.' },
        { id: 'examen-b1-01-ex09', type: 'qcm', question: 'Quel connecteur logique introduit l\'opposition entre avantages et inconvénients dans le texte ?', options: ['"Donc"', '"Si... certains effets négatifs..."', '"Parce que"', '"Ensuite"'], correctIndex: 1, explanation: '"Si les avantages sont nombreux... certains effets négatifs commencent à apparaître" — "si" introduit ici une concession suivie d\'une opposition.' },
        { id: 'examen-b1-01-ex10', type: 'qcm', question: 'Quelle est l\'idée principale de ce texte ?', options: ['Le télétravail est uniquement positif', 'Le télétravail est uniquement négatif', 'Le télétravail a transformé les pratiques professionnelles, avec des avantages et des limites qui appellent un équilibre', 'Le télétravail va disparaître complètement'], correctIndex: 2, explanation: 'L\'idée principale est nuancée : le télétravail a transformé les pratiques, avec des bénéfices réels mais aussi des limites, d\'où la nécessité d\'un équilibre.' },
        { id: 'examen-b1-01-ex11', type: 'qcm', question: 'Une lettre de réclamation commence par "Madame, Monsieur, Je me permets de vous contacter au sujet de..." Quelle est la fonction de cette formule ?', options: ['Conclure la lettre', 'Introduire poliment l\'objet de la demande', 'Exprimer un refus', 'Donner une adresse'], correctIndex: 1, explanation: '"Je me permets de vous contacter au sujet de..." est une formule d\'INTRODUCTION polie pour annoncer l\'objet de la lettre.' },
        { id: 'examen-b1-01-ex12', type: 'qcm', question: 'Dans une lettre formelle, que signifie "Je vous prie de bien vouloir" ?', options: ['Une menace', 'Une formule polie de demande', 'Un refus', 'Une excuse'], correctIndex: 1, explanation: '"Je vous prie de bien vouloir + infinitif" est une formule de DEMANDE POLIE très utilisée dans la correspondance administrative formelle.' },
        { id: 'examen-b1-01-ex13', type: 'qcm', question: 'Une annonce immobilière indique "Charges comprises." Que cela signifie-t-il ?', options: ['Les charges sont en plus du loyer', 'Le prix indiqué inclut déjà les charges (eau, chauffage commun...)', 'Il n\'y a pas de charges du tout', 'Les charges sont à négocier'], correctIndex: 1, explanation: '"Charges comprises" signifie que le PRIX annoncé INCLUT déjà les charges locatives, sans supplément à payer en plus.' },
        { id: 'examen-b1-01-ex14', type: 'qcm', question: 'Une offre d\'emploi mentionne "Profil recherché : autonomie et sens de l\'initiative exigés." Que recherche l\'employeur ?', options: ['Quelqu\'un qui suit toujours les instructions sans réfléchir', 'Quelqu\'un capable de travailler seul et de proposer des solutions', 'Quelqu\'un qui ne travaille jamais en équipe', 'Quelqu\'un sans expérience'], correctIndex: 1, explanation: '"Autonomie" = capacité à travailler SANS supervision constante. "Sens de l\'initiative" = capacité à PROPOSER des solutions de soi-même, sans attendre des instructions.' },
        { id: 'examen-b1-01-ex15', type: 'qcm', question: 'Un communiqué officiel indique "Cette mesure entrera en vigueur le 1er janvier prochain." Que signifie "entrer en vigueur" ?', options: ['Être annulée', 'Devenir applicable/effective', 'Être discutée au Parlement', 'Être contestée en justice'], correctIndex: 1, explanation: '"Entrer en vigueur" = devenir APPLICABLE, EFFECTIVE à partir d\'une date donnée — terme juridique courant pour les lois et règlements.' },
        { id: 'examen-b1-01-ex16', type: 'qcm', question: 'Un article indique "Malgré ces réserves, le projet a été approuvé à une large majorité." Que signifie "malgré" ici ?', options: ['Cause', 'Concession (en dépit de)', 'But', 'Condition'], correctIndex: 1, explanation: '"Malgré" introduit une CONCESSION : bien qu\'il y ait eu des réserves (objections), le projet a quand même été approuvé.' },
        { id: 'examen-b1-01-ex17', type: 'qcm', question: 'Que signifie "il convient de souligner que" dans un texte analytique ?', options: ['Il est interdit de mentionner que', 'Il est important de mettre en avant le fait que', 'Il est inutile de dire que', 'Il est probable que'], correctIndex: 1, explanation: '"Il convient de souligner que" = il est IMPORTANT de METTRE EN ÉVIDENCE le fait que — formule analytique pour introduire un point essentiel.' },
        { id: 'examen-b1-01-ex18', type: 'qcm', question: 'Une note de service indique "Sauf avis contraire, la réunion aura lieu comme prévu." Que signifie "sauf avis contraire" ?', options: ['La réunion est annulée', 'À moins qu\'une information différente ne soit communiquée, la réunion se tiendra normalement', 'La réunion est reportée définitivement', 'Cette phrase n\'a aucun sens'], correctIndex: 1, explanation: '"Sauf avis contraire" = à MOINS qu\'une information DIFFÉRENTE ne soit communiquée — la situation par défaut (réunion maintenue) reste valable sauf changement annoncé.' },
        { id: 'examen-b1-01-ex19', type: 'qcm', question: 'Dans un texte argumentatif, quelle est la différence entre un "fait" et une "opinion" ?', options: ['Aucune différence', 'Le fait est vérifiable objectivement (chiffres, données), l\'opinion exprime un jugement personnel ou une interprétation', 'L\'opinion est toujours plus fiable que le fait', 'Le fait est toujours une exagération'], correctIndex: 1, explanation: 'Le FAIT est VÉRIFIABLE OBJECTIVEMENT (ex : "40% des salariés télétravaillent"). L\'OPINION exprime un JUGEMENT PERSONNEL ou une INTERPRÉTATION (ex : "le télétravail est la meilleure solution").' },
        { id: 'examen-b1-01-ex20', type: 'qcm', question: 'Quelle compétence est principalement évaluée dans cette section de l\'examen ?', options: ['La mémorisation de vocabulaire isolé', 'La capacité à comprendre globalement et en détail un texte écrit authentique, et à en identifier la structure argumentative', 'La capacité à parler vite', 'La capacité à traduire mot à mot'], correctIndex: 1, explanation: 'Cette section évalue la CAPACITÉ à COMPRENDRE GLOBALEMENT et en DÉTAIL un texte ÉCRIT AUTHENTIQUE, et à en identifier la STRUCTURE ARGUMENTATIVE — compétence clé du niveau B1 attendue au DELF/TEF.' },
      ],
    },

    {
      id: 'examen-b1-02',
      slug: 'examen-b1-grammaire-vocabulaire',
      moduleSlug: 'examen-blanc-b1',
      level: 'B1',
      title: 'Section 2 — Grammaire et vocabulaire',
      description: 'Révision consolidée des points grammaticaux essentiels du niveau B1.',
      duration: 12,
      free: false,
      dialogue: `## Instructions de l'examen

**Durée recommandée : 30 minutes — 20 questions**

Cette section couvre les points grammaticaux essentiels du niveau B1 : subjonctif, conditionnel, discours rapporté, pronoms relatifs composés, connecteurs logiques.`,

      linguisticPoint: `## Points à réviser avant l'examen
- Subjonctif présent après les déclencheurs courants (il faut que, vouloir que, douter que...)
- Conditionnel présent (politesse, hypothèse, conseil)
- Discours rapporté au passé (concordance des temps)
- Pronoms relatifs : qui/que/dont/où + composés (lequel, auquel...)
- Connecteurs logiques de cause/conséquence/opposition/but`,

      keyPoints: [
        'Subjonctif après il faut que / vouloir que / douter que',
        'Conditionnel : politesse (je voudrais) / hypothèse (si + imparfait) / conseil',
        'Discours rapporté : présent→imparfait / futur→conditionnel / PC→plus-que-parfait',
        '"Dont" remplace "de + nom" / pronoms composés après préposition',
        'Connecteurs : parce que (cause) / donc (conséquence) / bien que (opposition) / pour que (but)',
      ],

      exercises: [
        { id: 'examen-b1-02-ex01', type: 'qcm', question: 'Complétez : "Il faut que vous ___ ce formulaire avant vendredi." (remplir)', options: ['remplissez', 'remplissiez', 'remplirez', 'rempliriez'], correctIndex: 1, explanation: '"Il faut que" + subjonctif. "Remplissiez" = subjonctif présent (2ème pers. pl.) de "remplir".' },
        { id: 'examen-b1-02-ex02', type: 'qcm', question: 'Complétez : "Si j\'avais le temps, je ___ vous aider." (pouvoir)', options: ['peux', 'pourrai', 'pourrais', 'pouvais'], correctIndex: 2, explanation: 'Si + imparfait → conditionnel présent. "Pourrais" = conditionnel présent (1ère pers. sing.) de "pouvoir".' },
        { id: 'examen-b1-02-ex03', type: 'qcm', question: 'Discours rapporté : "Je viendrai demain." → Il a dit qu\'il ___ le lendemain.', options: ['vient', 'viendrait', 'venait', 'est venu'], correctIndex: 1, explanation: 'Futur → conditionnel présent dans le discours rapporté au passé. "Viendrait" = conditionnel présent de "venir".' },
        { id: 'examen-b1-02-ex04', type: 'qcm', question: 'Complétez : "Le document ___ j\'ai besoin est introuvable." (pronom relatif)', options: ['que', 'qui', 'dont', 'où'], correctIndex: 2, explanation: '"Avoir besoin DE" → "dont". "Le document DONT j\'ai besoin" = the document I need.' },
        { id: 'examen-b1-02-ex05', type: 'qcm', question: 'Complétez : "___ il pleuve, nous sortirons quand même." (concession + subjonctif)', options: ['Parce que', 'Bien que', 'Donc', 'Pour que'], correctIndex: 1, explanation: '"BIEN QUE il pleuve" + subjonctif = concession. "Bien que" est toujours suivi du subjonctif.' },
        { id: 'examen-b1-02-ex06', type: 'qcm', question: 'Complétez : "Je doute qu\'il ___ raison." (avoir)', options: ['a', 'aura', 'ait', 'avait'], correctIndex: 2, explanation: '"Douter que" + subjonctif. "Ait" = subjonctif présent d\'"avoir".' },
        { id: 'examen-b1-02-ex07', type: 'qcm', question: 'Discours rapporté : "J\'ai fini mon travail." → Elle a dit qu\'elle ___ son travail.', options: ['finit', 'finissait', 'avait fini', 'finirait'], correctIndex: 2, explanation: 'Passé composé → plus-que-parfait dans le discours rapporté au passé. "Avait fini" = plus-que-parfait.' },
        { id: 'examen-b1-02-ex08', type: 'qcm', question: 'Complétez : "C\'est le projet ___ je m\'occupe depuis un mois." (pronom relatif)', options: ['que', 'qui', 'dont', 'auquel'], correctIndex: 2, explanation: '"S\'occuper DE" → "dont". "Le projet DONT je m\'occupe" = the project I am dealing with.' },
        { id: 'examen-b1-02-ex09', type: 'qcm', question: 'Connecteur de but : "Il travaille beaucoup ___ réussir ses examens." (même sujet)', options: ['pour que', 'pour', 'afin que', 'parce que'], correctIndex: 1, explanation: 'Même sujet (il travaille / il réussit) → "pour + infinitif". "Pour que" exigerait des sujets différents.' },
        { id: 'examen-b1-02-ex10', type: 'qcm', question: 'Complétez : "Je voudrais ___ des informations sur ce dossier." (politesse, conditionnel)', options: ['avoir', 'avais', 'aie', 'aurai'], correctIndex: 0, explanation: '"Je voudrais AVOIR" — "voudrais" est déjà le conditionnel de politesse ; "avoir" reste à l\'infinitif après.' },
        { id: 'examen-b1-02-ex11', type: 'qcm', question: 'Complétez : "Le poste ___ je postule m\'intéresse beaucoup." (pronom relatif composé)', options: ['que', 'dont', 'auquel', 'où'], correctIndex: 2, explanation: '"Postuler À" → "à + lequel" = "AUQUEL". "Le poste AUQUEL je postule" = the position I am applying for.' },
        { id: 'examen-b1-02-ex12', type: 'qcm', question: 'Complétez : "Il est possible que la réunion ___ annulée." (être)', options: ['est', 'soit', 'sera', 'serait'], correctIndex: 1, explanation: '"Il est possible que" + subjonctif. "Soit" = subjonctif présent d\'"être" + "annulée" (PP passif).' },
        { id: 'examen-b1-02-ex13', type: 'qcm', question: 'Connecteur de conséquence : "Il a beaucoup travaillé, ___ il a réussi." (cause→conséquence)', options: ['parce que', 'donc', 'bien que', 'pour que'], correctIndex: 1, explanation: '"DONC" introduit la CONSÉQUENCE logique de ce qui précède : il a travaillé → DONC il a réussi.' },
        { id: 'examen-b1-02-ex14', type: 'qcm', question: 'Discours rapporté : "J\'aurai terminé avant midi." → Il a dit qu\'il ___ avant midi.', options: ['terminait', 'avait terminé', 'aurait terminé', 'terminerait'], correctIndex: 2, explanation: 'Futur antérieur → conditionnel passé. "Aurait terminé" = conditionnel passé.' },
        { id: 'examen-b1-02-ex15', type: 'qcm', question: 'Complétez : "Je suis content que vous ___ réussi." (subjonctif passé, avoir)', options: ['avez', 'ayez', 'aviez', 'auriez'], correctIndex: 1, explanation: '"Je suis content que" + subjonctif. "Ayez réussi" = subjonctif passé (avoir au subjonctif présent + PP).' },
        { id: 'examen-b1-02-ex16', type: 'qcm', question: 'Complétez : "La ville ___ j\'habite est très agréable." (pronom relatif de lieu)', options: ['que', 'qui', 'dont', 'où'], correctIndex: 3, explanation: '"Où" = pronom relatif de lieu. "La ville OÙ j\'habite" = the city where I live.' },
        { id: 'examen-b1-02-ex17', type: 'qcm', question: 'Connecteur d\'opposition : "___ il soit fatigué, il continue de travailler." (concession)', options: ['Parce que', 'Bien que', 'Donc', 'Si'], correctIndex: 1, explanation: '"BIEN QUE il soit fatigué" + subjonctif = concession/opposition. "Bien que" introduit toujours le subjonctif.' },
        { id: 'examen-b1-02-ex18', type: 'qcm', question: 'Complétez : "Il faudrait que nous ___ une décision rapidement." (prendre)', options: ['prenons', 'prenions', 'prendrons', 'prendrions'], correctIndex: 1, explanation: '"Il faudrait que" + subjonctif. "Prenions" = subjonctif présent (1ère pers. pl.) de "prendre".' },
        { id: 'examen-b1-02-ex19', type: 'qcm', question: 'Discours rapporté : "Je pars demain." → Elle a dit qu\'elle ___ le lendemain.', options: ['part', 'partait', 'partirait', 'était partie'], correctIndex: 2, explanation: 'Présent (avec valeur future "demain") → conditionnel présent dans le discours rapporté au passé, car l\'action était future au moment de l\'énoncé. "Partirait" = conditionnel présent.' },
        { id: 'examen-b1-02-ex20', type: 'qcm', question: 'Complétez : "Voici les documents ___ vous avez besoin." (pronom relatif)', options: ['que', 'qui', 'dont', 'auxquels'], correctIndex: 2, explanation: '"Avoir besoin DE" → "dont", invariable. "Les documents DONT vous avez besoin" = the documents you need.' },
      ],
    },

    {
      id: 'examen-b1-03',
      slug: 'examen-b1-production-ecrite-orale',
      moduleSlug: 'examen-blanc-b1',
      level: 'B1',
      title: 'Section 3 — Production écrite et orale',
      description: 'Sujets d\'expression écrite et questions d\'entretien typiques du DELF B1/TEF.',
      duration: 12,
      free: false,
      dialogue: `## Instructions de l'examen

**Durée recommandée : 30 minutes — 20 questions**

Cette section présente des sujets typiques de production écrite (lettre, essai d'opinion) et des questions d'entretien oral du niveau B1, avec des exemples de bonnes pratiques à identifier.

---

**Sujet d'expression écrite (exemple) :**
"Certains pensent que les réseaux sociaux nuisent aux relations humaines. Donnez votre opinion en 160 mots minimum, en illustrant avec des exemples."

**Question d'entretien (exemple) :**
"Racontez un changement important dans votre vie depuis votre arrivée en France."`,

      linguisticPoint: `## Stratégies de production écrite et orale B1

- À l'écrit : structurer en introduction (annoncer le sujet) / développement (2-3 arguments avec exemples) / conclusion (synthèse + ouverture).
- Utiliser des connecteurs logiques variés (d'abord, ensuite, de plus, cependant, en conclusion).
- À l'oral : structurer sa réponse de façon chronologique ou thématique, avec des exemples concrets.
- Éviter les réponses trop courtes ("oui"/"non") — toujours développer avec des explications.`,

      keyPoints: [
        'Structure écrite B1 : introduction / développement (2-3 arguments) / conclusion',
        'Connecteurs variés : d\'abord, ensuite, de plus, cependant, en conclusion',
        'À l\'oral : structurer chronologiquement ou thématiquement, avec exemples concrets',
        'Toujours développer ses réponses — jamais de "oui"/"non" isolé',
        'Donner son opinion en la justifiant ("je pense que... parce que...")',
      ],

      exercises: [
        { id: 'examen-b1-03-ex01', type: 'qcm', question: 'Pour le sujet sur les réseaux sociaux, quelle structure de réponse est la plus appropriée ?', options: ['Une seule phrase donnant son avis sans justification', 'Introduction (annoncer le sujet) + développement (arguments avec exemples) + conclusion', 'Une liste de mots sans phrases', 'Copier la question sans y répondre'], correctIndex: 1, explanation: 'La structure ATTENDUE au niveau B1 pour une expression écrite argumentative comprend une introduction, un développement avec arguments ET exemples, et une conclusion.' },
        { id: 'examen-b1-03-ex02', type: 'qcm', question: 'Quelle formule introduit efficacement une opinion personnelle à l\'écrit ?', options: ['"Peut-être."', '"Je pense que... car..."', '"Oui."', '"Non."'], correctIndex: 1, explanation: '"Je pense que... car..." structure clairement l\'opinion ET sa justification, format attendu pour une expression écrite argumentée de niveau B1.' },
        { id: 'examen-b1-03-ex03', type: 'qcm', question: 'Quel connecteur permet d\'introduire un deuxième argument après "d\'abord" ?', options: ['"En conclusion"', '"Ensuite" ou "De plus"', '"Parce que"', '"Cependant" uniquement'], correctIndex: 1, explanation: '"Ensuite" ou "de plus" permettent d\'ajouter un argument SUPPLÉMENTAIRE après un premier point introduit par "d\'abord", structurant clairement le développement.' },
        { id: 'examen-b1-03-ex04', type: 'qcm', question: 'Pour répondre à "Racontez un changement important dans votre vie", quelle structure est recommandée ?', options: ['Répondre par "rien" sans développer', 'Structurer chronologiquement : situation avant / élément déclencheur / situation après / ressenti', 'Donner uniquement une date', 'Changer de sujet'], correctIndex: 1, explanation: 'Une structure CHRONOLOGIQUE (avant/déclencheur/après/ressenti) permet de développer une réponse riche et cohérente à une question de récit personnel.' },
        { id: 'examen-b1-03-ex05', type: 'qcm', question: 'Quelle formule permet de nuancer une opinion à l\'écrit ?', options: ['"C\'est totalement vrai."', '"Certes... cependant..."', '"C\'est totalement faux."', 'Ne pas nuancer du tout'], correctIndex: 1, explanation: '"Certes... cependant..." est une structure CONCESSIVE qui permet de reconnaître un point tout en y apportant une nuance — valorisé dans l\'expression argumentative B1.' },
        { id: 'examen-b1-03-ex06', type: 'qcm', question: 'Combien de mots minimum sont généralement demandés pour une production écrite DELF B1 ?', options: ['50 mots', '160 mots environ', '500 mots', '1000 mots'], correctIndex: 1, explanation: 'Le DELF B1 demande généralement une production écrite d\'environ 160 à 180 mots minimum, selon l\'exercice — une longueur intermédiaire ni trop courte ni trop longue.' },
        { id: 'examen-b1-03-ex07', type: 'qcm', question: 'Quelle phrase de conclusion est la plus appropriée pour un essai d\'opinion ?', options: ['Répéter exactement l\'introduction', '"En conclusion, bien que les réseaux sociaux présentent des risques, ils offrent aussi des opportunités de connexion."', 'Ne pas conclure du tout', 'Introduire un nouvel argument non développé'], correctIndex: 1, explanation: 'Une bonne conclusion SYNTHÉTISE la réflexion (pas une simple répétition) et peut intégrer une NUANCE finale, sans introduire de nouvel argument non développé.' },
        { id: 'examen-b1-03-ex08', type: 'qcm', question: 'À l\'oral, que faut-il éviter absolument lors d\'un entretien B1 ?', options: ['Donner des exemples concrets', 'Répondre uniquement par "oui" ou "non" sans développer', 'Structurer sa réponse', 'Utiliser des connecteurs logiques'], correctIndex: 1, explanation: 'Répondre uniquement par "OUI"/"NON" sans développement est À ÉVITER ABSOLUMENT — le niveau B1 exige une capacité à DÉVELOPPER ses idées avec des explications et des exemples.' },
        { id: 'examen-b1-03-ex09', type: 'qcm', question: 'Quelle formule permet d\'illustrer un argument avec un exemple concret ?', options: ['"Donc..."', '"Par exemple..." ou "Notamment..."', '"Cependant..."', '"En conclusion..."'], correctIndex: 1, explanation: '"Par exemple" ou "notamment" introduisent une ILLUSTRATION CONCRÈTE d\'un argument général, rendant l\'expression plus convaincante et précise.' },
        { id: 'examen-b1-03-ex10', type: 'qcm', question: 'Pour un sujet demandant de comparer deux options, quelle structure est recommandée ?', options: ['Ne parler que d\'une seule option', '"D\'un côté... de l\'autre côté..." pour présenter les deux perspectives de façon équilibrée', 'Donner son avis sans présenter les deux options', 'Refuser de répondre'], correctIndex: 1, explanation: '"D\'un côté... de l\'autre côté..." structure une COMPARAISON équilibrée entre deux perspectives, avant éventuellement de donner sa propre opinion synthétique.' },
        { id: 'examen-b1-03-ex11', type: 'qcm', question: 'Quelle formule est appropriée pour exprimer un désaccord poli à l\'oral ?', options: ['"C\'est complètement faux !"', '"Je ne suis pas tout à fait d\'accord, car..."', 'Ignorer la question', '"Tu as tort."'], correctIndex: 1, explanation: '"Je ne suis pas tout à fait d\'accord, car..." exprime un DÉSACCORD de façon NUANCÉE et POLIE, suivie d\'une justification — registre approprié pour un entretien formel.' },
        { id: 'examen-b1-03-ex12', type: 'qcm', question: 'À l\'oral, comment réagir si on ne comprend pas une question de l\'examinateur ?', options: ['Rester silencieux', '"Pourriez-vous reformuler la question, s\'il vous plaît ?"', 'Répondre à une autre question', 'Quitter l\'examen'], correctIndex: 1, explanation: '"Pourriez-vous reformuler ?" est une formule POLIE et APPROPRIÉE pour demander une clarification sans pénaliser sa performance à l\'oral.' },
        { id: 'examen-b1-03-ex13', type: 'qcm', question: 'Quel niveau de détail est attendu dans le développement d\'une expression écrite B1 ?', options: ['Une seule phrase par argument, sans développement', '2-3 arguments développés avec des exemples concrets et des connecteurs logiques', 'Un seul argument très long sans structure', 'Aucun argument, juste une opinion brute'], correctIndex: 1, explanation: 'Le niveau B1 attend un DÉVELOPPEMENT de 2 à 3 ARGUMENTS, chacun illustré par un EXEMPLE CONCRET, et reliés par des CONNECTEURS LOGIQUES appropriés.' },
        { id: 'examen-b1-03-ex14', type: 'qcm', question: 'Pour exprimer une conséquence à l\'écrit, quel connecteur est approprié ?', options: ['"Bien que"', '"Par conséquent" ou "donc"', '"Malgré"', '"Quoique"'], correctIndex: 1, explanation: '"Par conséquent" ou "donc" introduisent une CONSÉQUENCE logique, adaptée pour relier une cause à son effet dans un développement argumentatif.' },
        { id: 'examen-b1-03-ex15', type: 'qcm', question: 'Quelle est la fonction de l\'introduction dans une expression écrite argumentative B1 ?', options: ['Donner la conclusion immédiatement', 'Annoncer le sujet et, éventuellement, le plan de la réponse', 'Donner tous les détails dès le début', 'Poser une question sans y répondre'], correctIndex: 1, explanation: 'L\'introduction doit ANNONCER le SUJET traité et, éventuellement, donner un aperçu du PLAN qui sera suivi dans le développement.' },
        { id: 'examen-b1-03-ex16', type: 'qcm', question: 'Quelle formule à l\'oral permet de gagner du temps pour réfléchir tout en restant naturel ?', options: ['Rester silencieux longuement', '"C\'est une question intéressante, laissez-moi réfléchir un instant."', 'Changer immédiatement de sujet', 'Répondre au hasard'], correctIndex: 1, explanation: '"C\'est une question intéressante, laissez-moi réfléchir un instant" permet de gagner un peu de TEMPS pour structurer sa réponse, tout en restant NATUREL et POLI.' },
        { id: 'examen-b1-03-ex17', type: 'qcm', question: 'Pour un essai demandant de donner son avis personnel, pourquoi est-il important d\'inclure des EXEMPLES concrets ?', options: ['Ce n\'est pas important', 'Parce que les exemples rendent l\'argumentation plus convaincante et démontrent une réflexion approfondie plutôt qu\'une opinion abstraite', 'Parce que les exemples remplacent le besoin d\'avoir une opinion', 'Parce que c\'est plus court sans exemples'], correctIndex: 1, explanation: 'Les EXEMPLES rendent l\'argumentation plus CONVAINCANTE et démontrent une RÉFLEXION APPROFONDIE, ancrée dans le réel, plutôt qu\'une simple opinion ABSTRAITE et générale.' },
        { id: 'examen-b1-03-ex18', type: 'qcm', question: 'Quelle attitude est recommandée si on fait une erreur de grammaire pendant l\'entretien oral ?', options: ['Arrêter complètement de parler', 'Se corriger naturellement si possible et continuer sa réponse sans paniquer', 'Recommencer toute la réponse depuis le début', 'Quitter la salle'], correctIndex: 1, explanation: 'Se CORRIGER NATURELLEMENT (si on s\'en rend compte) et CONTINUER sa réponse SANS PANIQUER est l\'attitude RECOMMANDÉE — une petite erreur ponctuelle ne compromet pas l\'ensemble de l\'évaluation.' },
        { id: 'examen-b1-03-ex19', type: 'qcm', question: 'Pourquoi varier les connecteurs logiques (plutôt que toujours utiliser "et" et "mais") est-il valorisé au niveau B1 ?', options: ['Ce n\'est pas valorisé', 'Parce que cela démontre une maîtrise plus riche de la langue et structure plus clairement la pensée pour le lecteur ou l\'auditeur', 'Parce que "et" et "mais" sont interdits en français', 'Parce que les connecteurs n\'ont aucune importance'], correctIndex: 1, explanation: 'Varier les CONNECTEURS (d\'abord/ensuite/de plus/cependant/par conséquent...) démontre une MAÎTRISE plus RICHE de la langue et structure plus CLAIREMENT la pensée, par rapport à un usage répétitif et limité de "et"/"mais".' },
        { id: 'examen-b1-03-ex20', type: 'qcm', question: 'En synthèse, quelles sont les deux compétences clés évaluées dans cette section de production ?', options: ['La mémorisation de listes de vocabulaire', 'La capacité à structurer une argumentation cohérente (écrit) et à s\'exprimer de façon fluide et développée sur des sujets personnels ou de société (oral)', 'La vitesse de frappe au clavier', 'La capacité à copier des textes existants'], correctIndex: 1, explanation: 'Les deux compétences clés sont : à l\'ÉCRIT, structurer une ARGUMENTATION COHÉRENTE (introduction/développement/conclusion, connecteurs) ; à l\'ORAL, s\'exprimer de façon FLUIDE et DÉVELOPPÉE sur des sujets personnels ou de société, avec des exemples concrets.' },
      ],
    },
  ],
};
