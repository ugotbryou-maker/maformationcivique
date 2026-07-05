import type { LangModule } from '../types';

export const transversalErreursFrequentes: LangModule = {
  id: 'trans-mod-03',
  slug: 'transversal-erreurs-frequentes',
  level: 'transversal',
  title: 'Erreurs fréquentes des apprenants',
  subtitle: 'Faux-amis, calques et pièges de construction',
  description: 'Identifiez et corrigez les erreurs les plus courantes chez les apprenants de français, quelle que soit leur langue d\'origine.',
  type: 'erreurs',
  emoji: '⚠️',
  free: false,
  lessons: [
    {
      id: 'trans-err-01',
      slug: 'trans-faux-amis',
      moduleSlug: 'transversal-erreurs-frequentes',
      level: 'transversal',
      title: 'Les faux-amis avec l\'anglais',
      description: 'Identifier les mots qui se ressemblent en français et en anglais mais ont un sens différent.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Pourquoi les "faux-amis" sont si traîtres

Un "faux-ami" est un mot qui RESSEMBLE à un mot d'une autre langue (souvent l'anglais) mais qui a un sens DIFFÉRENT. Ces mots sont particulièrement traîtres car leur ressemblance crée une fausse confiance.

**Les faux-amis les plus fréquents**
- "Actuellement" ≠ "actually" → signifie "en ce moment, maintenant" (pas "en fait, en réalité")
- "Éventuellement" ≠ "eventually" → signifie "peut-être, dans certains cas" (pas "finalement, à la longue")
- "Une librairie" ≠ "library" → c'est un magasin de livres (la bibliothèque = "library")
- "Un médecin" ≠ "medicine" → c'est la personne (le médicament = "medicine")
- "Sympathique" ≠ "sympathetic" → signifie "agréable, gentil" (pas "compatissant")
- "Sensible" ≠ "sensible" → signifie "émotif, qui ressent facilement" (pas "raisonnable" = "sensé")
- "Assister à" ≠ "to assist" → signifie "être présent à" (pas "aider")
- "Demander" ≠ "to demand" → signifie "poser une question, faire une requête neutre" (pas "exiger")

**Pourquoi ces confusions sont fréquentes**
Ces mots ont souvent une origine ÉTYMOLOGIQUE COMMUNE (le français et l'anglais partagent de nombreuses racines latines), mais leur SENS a ÉVOLUÉ différemment au fil des siècles dans chaque langue.

**Conséquences concrètes des faux-amis**
"Je vais assister mon collègue" ne signifie PAS "I will assist my colleague" (aider) mais plutôt "je vais être présent auprès de mon collègue" — une confusion qui peut créer des malentendus professionnels réels.`,

      linguisticPoint: `## Point linguistique : Stratégies pour repérer et éviter les faux-amis

### Stratégie 1 : Vérifier le sens dans un contexte français authentique
Avant d'utiliser un mot qui "semble" familier (proche de l'anglais), chercher des EXEMPLES d'usage réel en français pour confirmer le sens.

### Stratégie 2 : Construire sa propre liste personnelle de faux-amis rencontrés
Noter chaque faux-ami découvert (souvent après une erreur ou une surprise) avec son sens RÉEL et un exemple de phrase.

### Stratégie 3 : Associer le faux-ami à un mot français NON ambigu
- "Actuellement" → toujours penser "maintenant" (pas "en fait")
- "Sympathique" → toujours penser "agréable/gentil" (pas "qui éprouve de la sympathie pour la douleur d'autrui")

### Liste complémentaire de faux-amis utiles
| Mot français | Faux sens (calque anglais) | Vrai sens français |
|---|---|---|
| achever | to achieve (réussir) | terminer/finir (parfois avec une nuance de "tuer") |
| ignorer | to ignore (délibérément) | ne pas savoir |
| réaliser | to realize (se rendre compte) | accomplir / + sens moderne admis : se rendre compte |
| supporter | to support (soutenir) | tolérer / endurer (et aussi : soutenir, sens partagé) |`,

      keyPoints: [
        '"Actuellement" = maintenant (PAS "actually" = en fait) / "éventuellement" = peut-être (PAS "eventually" = finalement)',
        '"Librairie" = magasin de livres (PAS "library" = bibliothèque)',
        '"Sympathique" = agréable/gentil (PAS "sympathetic" = compatissant)',
        '"Assister à" = être présent à (PAS "to assist" = aider)',
        '"Demander" = poser une question (PAS "to demand" = exiger)',
      ],

      exercises: [
        {
          id: 'trans-err-01-ex01',
          type: 'qcm',
          question: 'Que signifie "actuellement" en français ?',
          options: ['En fait, en réalité', 'Maintenant, en ce moment', 'Finalement, à la longue', 'Probablement'],
          correctIndex: 1,
          explanation: '"ACTUELLEMENT" signifie MAINTENANT, EN CE MOMENT (pas "actually" = en fait/en réalité). "Actuellement, je travaille à Paris" = je travaille à Paris en ce moment. Faux-ami très fréquent avec l\'anglais.',
        },
        {
          id: 'trans-err-01-ex02',
          type: 'qcm',
          question: 'Que signifie "une librairie" en français ?',
          options: ['Une bibliothèque', 'Un magasin où on achète des livres', 'Une salle de classe', 'Un éditeur de livres'],
          correctIndex: 1,
          explanation: '"UNE LIBRAIRIE" = un MAGASIN où on ACHÈTE des livres. La BIBLIOTHÈQUE (où on emprunte des livres gratuitement) se traduit "library" en anglais, ce qui crée la confusion fréquente avec "librairie".',
        },
        {
          id: 'trans-err-01-ex03',
          type: 'qcm',
          question: 'Que signifie "assister à une réunion" ?',
          options: ['Aider à organiser la réunion', 'Être présent à la réunion', 'Refuser la réunion', 'Annuler la réunion'],
          correctIndex: 1,
          explanation: '"ASSISTER À" signifie ÊTRE PRÉSENT À (pas "to assist" = aider). "J\'ai assisté à la réunion" = j\'étais présent à la réunion, en tant que spectateur ou participant, sans nécessairement avoir aidé activement.',
        },
        {
          id: 'trans-err-01-ex04',
          type: 'qcm',
          question: 'Que signifie "sympathique" en français ?',
          options: ['Compatissant face à la douleur d\'autrui', 'Agréable, gentil', 'Triste', 'Sérieux'],
          correctIndex: 1,
          explanation: '"SYMPATHIQUE" signifie AGRÉABLE, GENTIL (pas "sympathetic" = compatissant). "C\'est quelqu\'un de très sympathique" = c\'est une personne agréable à fréquenter, pas nécessairement compatissante envers la souffrance des autres.',
        },
        {
          id: 'trans-err-01-ex05',
          type: 'qcm',
          question: 'Que signifie "demander" en français (par opposition à "exiger") ?',
          options: ['Exiger fermement', 'Poser une question ou faire une requête de façon neutre', 'Refuser une requête', 'Menacer'],
          correctIndex: 1,
          explanation: '"DEMANDER" signifie POSER UNE QUESTION ou faire une REQUÊTE NEUTRE (pas "to demand" = exiger avec fermeté). "Je vous demande de venir" est beaucoup plus neutre/poli que "j\'exige que vous veniez".',
        },
        {
          id: 'trans-err-01-ex06',
          type: 'qcm',
          question: 'Que signifie "éventuellement" en français ?',
          options: ['Finalement, à la longue', 'Peut-être, dans certains cas', 'Certainement', 'Jamais'],
          correctIndex: 1,
          explanation: '"ÉVENTUELLEMENT" signifie PEUT-ÊTRE, DANS CERTAINS CAS (pas "eventually" = finalement/à la longue). "Nous pourrions éventuellement nous revoir" = peut-être, si l\'occasion se présente — pas une certitude future.',
        },
        {
          id: 'trans-err-01-ex07',
          type: 'qcm',
          question: 'Que signifie "ignorer quelque chose" en français ?',
          options: ['Refuser délibérément de prêter attention à quelque chose', 'Ne pas savoir, ne pas connaître quelque chose', 'Critiquer quelque chose', 'Approuver quelque chose'],
          correctIndex: 1,
          explanation: '"IGNORER" signifie NE PAS SAVOIR, NE PAS CONNAÎTRE (pas "to ignore" = refuser délibérément de prêter attention). "J\'ignore son adresse" = je ne connais pas son adresse, pas "je refuse délibérément d\'y prêter attention".',
        },
        {
          id: 'trans-err-01-ex08',
          type: 'qcm',
          question: 'Que signifie "sensible" en français ?',
          options: ['Raisonnable, doté de bon sens', 'Émotif, qui ressent facilement les choses', 'Intelligent', 'Pratique'],
          correctIndex: 1,
          explanation: '"SENSIBLE" signifie ÉMOTIF, qui RESSENT FACILEMENT les choses (pas "sensible" anglais = raisonnable). "Raisonnable/doté de bon sens" se traduit en français par "SENSÉ" — un autre faux-ami à ne pas confondre avec "sensible".',
        },
        {
          id: 'trans-err-01-ex09',
          type: 'qcm',
          question: 'Pourquoi de nombreux faux-amis existent-ils entre le français et l\'anglais ?',
          options: [
            'Parce que les deux langues n\'ont aucun rapport historique',
            'Parce que le français et l\'anglais partagent souvent une origine étymologique commune (racines latines), mais le sens des mots a évolué différemment dans chaque langue au fil des siècles',
            'Parce que l\'anglais a copié toutes ses règles sur le français',
            'Parce que tous les mots français et anglais ont exactement le même sens',
          ],
          correctIndex: 1,
          explanation: 'Le français et l\'anglais partagent souvent une ORIGINE ÉTYMOLOGIQUE COMMUNE (racines LATINES, notamment via le français ancien qui a beaucoup influencé l\'anglais après 1066), mais le SENS des mots a ÉVOLUÉ DIFFÉREMMENT dans chaque langue au fil des SIÈCLES, créant ces décalages sémantiques appelés "faux-amis".',
        },
        {
          id: 'trans-err-01-ex10',
          type: 'qcm',
          question: 'Que signifie "un médecin" en français ?',
          options: ['Un médicament', 'La personne qui exerce la médecine, le docteur', 'Un hôpital', 'Une pharmacie'],
          correctIndex: 1,
          explanation: '"UN MÉDECIN" = LA PERSONNE qui exerce la médecine (= "a doctor" en anglais). Le MÉDICAMENT (substance pour guérir) se traduit "medicine" en anglais, ce qui crée la confusion avec "médecin", un faux-ami fréquent.',
        },
        {
          id: 'trans-err-01-ex11',
          type: 'qcm',
          question: 'Que signifie "achever" en français (sens principal) ?',
          options: ['Réussir un objectif (to achieve)', 'Terminer, finir quelque chose', 'Commencer quelque chose', 'Échouer'],
          correctIndex: 1,
          explanation: '"ACHEVER" signifie TERMINER, FINIR (pas "to achieve" = réussir/accomplir un objectif). "Achever un projet" = le terminer. Note : "achever" peut aussi avoir un sens plus fort de "mettre fin à la vie de" dans certains contextes (achever un animal blessé).',
        },
        {
          id: 'trans-err-01-ex12',
          type: 'qcm',
          question: 'Stratégie recommandée pour éviter les faux-amis : que faire avant d\'utiliser un mot qui "semble" familier en venant de l\'anglais ?',
          options: [
            'Utiliser le mot directement sans vérification',
            'Chercher des exemples d\'usage réel de ce mot en contexte français authentique pour confirmer son sens exact',
            'Éviter complètement d\'utiliser des mots qui ressemblent à l\'anglais',
            'Demander systématiquement une traduction littérale',
          ],
          correctIndex: 1,
          explanation: 'La stratégie recommandée consiste à CHERCHER des EXEMPLES d\'usage RÉEL de ce mot en CONTEXTE FRANÇAIS AUTHENTIQUE (lecture, écoute de natifs, dictionnaires français) pour CONFIRMER son SENS EXACT avant de l\'utiliser, plutôt que de se fier à sa ressemblance APPARENTE avec l\'anglais, qui peut être TROMPEUSE.',
        },
        {
          id: 'trans-err-01-ex13',
          type: 'qcm',
          question: 'Que signifie "réaliser" en français (sens traditionnel, avant l\'évolution moderne) ?',
          options: ['Se rendre compte de quelque chose', 'Accomplir, mettre en œuvre quelque chose', 'Refuser quelque chose', 'Détruire quelque chose'],
          correctIndex: 1,
          explanation: 'Le sens TRADITIONNEL de "RÉALISER" est ACCOMPLIR, METTRE EN ŒUVRE ("réaliser un projet" = le concrétiser). Le sens "se rendre compte" (calque de "to realize") est aujourd\'hui largement ADMIS dans l\'usage moderne du français, bien qu\'historiquement issu d\'une influence anglaise.',
        },
        {
          id: 'trans-err-01-ex14',
          type: 'qcm',
          question: 'Que signifie "supporter" en français, dans son sens principal le plus courant ?',
          options: ['Soutenir activement une cause ou une personne', 'Tolérer, endurer quelque chose de désagréable', 'Encourager une équipe sportive uniquement', 'Refuser quelque chose'],
          correctIndex: 1,
          explanation: 'Le sens le PLUS COURANT de "SUPPORTER" en français est TOLÉRER, ENDURER quelque chose de désagréable ("je ne supporte pas le bruit"). Le sens "soutenir" (calque de "to support") existe aussi en français, mais le sens de TOLÉRANCE reste prédominant et plus fréquent dans l\'usage quotidien.',
        },
        {
          id: 'trans-err-01-ex15',
          type: 'qcm',
          question: 'Quelle phrase utilise CORRECTEMENT le mot "assister" selon son vrai sens français ?',
          options: [
            '"Je vais assister mon collègue à porter ces cartons." (sens incorrect, calque)',
            '"J\'ai assisté au spectacle hier soir." (sens correct : être présent)',
            'Les deux phrases sont également correctes',
            'Aucune des deux phrases n\'est correcte',
          ],
          correctIndex: 1,
          explanation: '"J\'ai ASSISTÉ au spectacle hier soir" utilise CORRECTEMENT "assister à" dans son sens français AUTHENTIQUE (être PRÉSENT). La première phrase ("assister mon collègue à porter") calque INCORRECTEMENT le sens anglais "to assist" (aider) — en français, on dirait plutôt "AIDER mon collègue à porter ces cartons."',
        },
        {
          id: 'trans-err-01-ex16',
          type: 'qcm',
          question: 'Pourquoi est-il recommandé de construire "sa propre liste personnelle de faux-amis rencontrés" ?',
          options: [
            'Ce n\'est pas une méthode efficace',
            'Parce que cette mémorisation personnalisée, liée à ses propres erreurs ou découvertes, est généralement plus durable et significative qu\'une liste générique mémorisée sans contexte personnel',
            'Parce qu\'il faut mémoriser tous les faux-amis possibles sans exception, ce qui est impossible autrement',
            'Parce que cette liste remplace complètement le besoin de pratiquer la langue',
          ],
          correctIndex: 1,
          explanation: 'Une liste PERSONNALISÉE, liée à SES PROPRES erreurs ou DÉCOUVERTES (souvent après une surprise ou un malentendu vécu), crée un ANCRAGE MÉMORIEL plus FORT et plus DURABLE qu\'une liste GÉNÉRIQUE mémorisée de façon abstraite sans contexte personnel ou émotionnel associé.',
        },
        {
          id: 'trans-err-01-ex17',
          type: 'qcm',
          question: 'Quelle est la différence entre "sensible" et "sensé" en français ?',
          options: [
            'Aucune différence, ce sont des synonymes parfaits',
            '"Sensible" = émotif, qui ressent facilement ; "sensé" = raisonnable, doté de bon sens',
            '"Sensible" = raisonnable ; "sensé" = émotif',
            'Ces deux mots n\'existent pas en français',
          ],
          correctIndex: 1,
          explanation: '"SENSIBLE" = ÉMOTIF, qui ressent FACILEMENT les choses. "SENSÉ" = RAISONNABLE, doté de BON SENS. Ces deux mots, bien que proches phonétiquement, ont des sens TOTALEMENT DIFFÉRENTS — une confusion fréquente même chez des apprenants avancés, à ne pas confondre avec le faux-ami anglais "sensible" (= sensé en anglais).',
        },
        {
          id: 'trans-err-01-ex18',
          type: 'qcm',
          question: 'Pourquoi la confusion sur "assister" peut-elle créer un "malentendu professionnel réel" dans un contexte de travail ?',
          options: [
            'Cette confusion n\'a jamais de conséquence pratique',
            'Parce qu\'annoncer qu\'on va "assister" un collègue pourrait laisser croire qu\'on va l\'AIDER activement, alors qu\'en français cela signifie seulement qu\'on sera PRÉSENT, créant potentiellement une attente déçue si une aide concrète était sous-entendue',
            'Parce que "assister" n\'existe pas en français professionnel',
            'Parce que ce mot est toujours mal interprété par tous les Français',
          ],
          correctIndex: 1,
          explanation: 'Annoncer qu\'on va "ASSISTER" un collègue (en pensant au sens anglais "to assist" = aider) pourrait laisser CROIRE, pour un locuteur anglophone non averti, qu\'une AIDE ACTIVE sera apportée, alors qu\'en FRANÇAIS cela signifie seulement qu\'on sera PRÉSENT (sans garantie d\'aide concrète), créant potentiellement une ATTENTE DÉÇUE ou une INCOMPRÉHENSION dans un contexte professionnel.',
        },
        {
          id: 'trans-err-01-ex19',
          type: 'qcm',
          question: 'Quelle stratégie d\'association mentale est recommandée pour le mot "actuellement" ?',
          options: [
            'Toujours penser "en fait" en l\'utilisant',
            'Toujours associer "actuellement" à "maintenant", de façon systématique et automatique, pour éviter le réflexe du faux-ami anglais',
            'Éviter complètement d\'utiliser ce mot',
            'Associer ce mot à "jamais"',
          ],
          correctIndex: 1,
          explanation: 'La stratégie recommandée consiste à ASSOCIER SYSTÉMATIQUEMENT et de façon AUTOMATIQUE "actuellement" à "MAINTENANT" dans son esprit, créant un RÉFLEXE MENTAL qui contre directement la tentation du calque anglais ("actually" = en fait), renforçant ainsi l\'usage correct du mot français au fil du temps.',
        },
        {
          id: 'trans-err-01-ex20',
          type: 'qcm',
          question: 'En synthèse, pourquoi le travail sur les faux-amis est-il particulièrement important pour les apprenants ayant déjà une bonne maîtrise de l\'anglais ?',
          options: [
            'Ce travail n\'est pas plus important pour eux que pour d\'autres apprenants',
            'Parce que leur connaissance de l\'anglais peut paradoxalement créer une fausse confiance trompeuse sur certains mots français qui ressemblent à des mots anglais mais ont un sens différent, augmentant le risque d\'erreurs spécifiques à ce profil',
            'Parce que les apprenants anglophones ne peuvent jamais apprendre le français correctement',
            'Parce que ce travail ne concerne que les locuteurs natifs de français',
          ],
          correctIndex: 1,
          explanation: 'Pour les apprenants ayant déjà une BONNE MAÎTRISE de l\'ANGLAIS, leur connaissance peut PARADOXALEMENT créer une FAUSSE CONFIANCE TROMPEUSE sur certains mots français qui RESSEMBLENT à des mots anglais mais ont un SENS DIFFÉRENT — contrairement à des mots complètement INCONNUS, qui n\'inspirent aucune fausse certitude et incitent naturellement à la VÉRIFICATION du sens.',
        },
      ],
    },

    {
      id: 'trans-err-02',
      slug: 'trans-constructions-verbales-incorrectes',
      moduleSlug: 'transversal-erreurs-frequentes',
      level: 'transversal',
      title: 'Les constructions verbales incorrectes',
      description: 'Corriger les erreurs de prépositions après les verbes, souvent calquées sur d\'autres langues.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Pourquoi les prépositions après les verbes sont si difficiles

Chaque langue associe ses verbes à des prépositions de façon parfois ARBITRAIRE — ces associations ne se traduisent JAMAIS automatiquement d'une langue à l'autre.

**Verbes suivis de "à" (alors qu'on attendrait une autre préposition)**
- "Téléphoner À quelqu'un" (pas "téléphoner quelqu'un" comme en anglais "to call someone")
- "Répondre À quelqu'un/quelque chose" (pas de COD direct)
- "Penser À quelqu'un" (= avoir cette personne en tête) ≠ "penser DE quelqu'un" (= avoir une opinion sur)
- "S'intéresser À quelque chose" (pas "s'intéresser POUR")

**Verbes suivis de "de" (calque fréquent incorrect avec "à")**
- "Avoir besoin DE quelque chose" (pas "avoir besoin À")
- "Se souvenir DE quelque chose" (pas "se souvenir À")
- "Avoir peur DE quelque chose" (pas "avoir peur POUR" sauf nuance différente)
- "Féliciter quelqu'un POUR/DE quelque chose" (les deux sont possibles avec nuance)

**Verbes SANS préposition en français (alors qu'on en attendrait une, par calque)**
- "Attendre quelqu'un" (pas "attendre POUR quelqu'un", calque de "wait for")
- "Chercher quelque chose" (pas "chercher POUR quelque chose", calque de "look for")
- "Demander quelque chose" (pas "demander POUR quelque chose", calque de "ask for")
- "Regarder quelque chose" (pas "regarder À quelque chose", calque de "look at")

**Pourquoi mémoriser ces constructions est essentiel**
Une préposition incorrecte ne change généralement pas la compréhension mais signale immédiatement un niveau moins avancé — c'est l'un des points les plus DIFFICILES à corriger, car il n'y a pas de logique transférable d'une langue à l'autre.`,

      linguisticPoint: `## Point linguistique : Mémoriser les verbes par leur construction complète

### La méthode recommandée : apprendre le verbe AVEC sa préposition, jamais isolément
Plutôt que d'apprendre "téléphoner" seul, mémoriser directement "téléphoner À quelqu'un" comme un BLOC indissociable.

### Tableau récapitulatif des constructions à risque
| Verbe français | Construction correcte | Erreur fréquente (calque) |
|---|---|---|
| attendre | attendre quelqu'un | attendre POUR quelqu'un |
| chercher | chercher quelque chose | chercher POUR quelque chose |
| téléphoner | téléphoner À quelqu'un | téléphoner quelqu'un |
| répondre | répondre À quelqu'un | répondre quelqu'un |
| avoir besoin | avoir besoin DE | avoir besoin À |
| se souvenir | se souvenir DE | se souvenir À |

### Stratégie d'apprentissage par fiches de constructions verbales
Créer des fiches dédiées (papier ou numériques) regroupant les verbes par TYPE de construction (verbes + à / verbes + de / verbes sans préposition), avec des EXEMPLES de phrases complètes pour chaque cas.`,

      keyPoints: [
        '"Téléphoner À quelqu\'un" / "répondre À quelqu\'un" — jamais de COD direct pour ces verbes',
        '"Avoir besoin DE" / "se souvenir DE" / "avoir peur DE" — jamais "à"',
        '"Attendre/chercher/demander/regarder quelque chose" — SANS préposition (pas de calque "pour"/"à")',
        'Méthode : mémoriser le verbe AVEC sa préposition comme un bloc indissociable, jamais isolément',
        'Une préposition incorrecte ne bloque pas la compréhension mais signale un niveau moins avancé',
      ],

      exercises: [
        {
          id: 'trans-err-02-ex01',
          type: 'qcm',
          question: 'Quelle est la construction correcte du verbe "téléphoner" ?',
          options: ['Téléphoner quelqu\'un', 'Téléphoner à quelqu\'un', 'Téléphoner pour quelqu\'un', 'Téléphoner de quelqu\'un'],
          correctIndex: 1,
          explanation: '"TÉLÉPHONER À quelqu\'un" (jamais "téléphoner quelqu\'un" comme en anglais "to call someone"). C\'est l\'une des erreurs de construction les plus fréquentes, due au calque direct de la construction anglaise sans préposition.',
        },
        {
          id: 'trans-err-02-ex02',
          type: 'qcm',
          question: 'Quelle est la construction correcte de "avoir besoin" ?',
          options: ['Avoir besoin à quelque chose', 'Avoir besoin de quelque chose', 'Avoir besoin pour quelque chose', 'Avoir besoin avec quelque chose'],
          correctIndex: 1,
          explanation: '"AVOIR BESOIN DE quelque chose" (jamais "avoir besoin à"). Cette construction avec "de" est fixe et ne varie jamais, contrairement à certaines tentations de calque avec "à" issues d\'autres langues.',
        },
        {
          id: 'trans-err-02-ex03',
          type: 'qcm',
          question: 'Quelle est la construction correcte du verbe "attendre" ?',
          options: ['Attendre pour quelqu\'un', 'Attendre quelqu\'un (sans préposition)', 'Attendre à quelqu\'un', 'Attendre de quelqu\'un'],
          correctIndex: 1,
          explanation: '"ATTENDRE quelqu\'un" SANS PRÉPOSITION (jamais "attendre POUR quelqu\'un", calque de l\'anglais "to wait FOR someone"). C\'est un exemple typique de verbe qui n\'a PAS besoin de préposition en français, contrairement à l\'anglais.',
        },
        {
          id: 'trans-err-02-ex04',
          type: 'qcm',
          question: 'Quelle est la construction correcte du verbe "chercher" ?',
          options: ['Chercher pour quelque chose', 'Chercher quelque chose (sans préposition)', 'Chercher à quelque chose', 'Chercher de quelque chose'],
          correctIndex: 1,
          explanation: '"CHERCHER quelque chose" SANS PRÉPOSITION (jamais "chercher POUR quelque chose", calque de "to look FOR something"). Comme "attendre", ce verbe se construit directement avec un COD, sans préposition intermédiaire.',
        },
        {
          id: 'trans-err-02-ex05',
          type: 'qcm',
          question: 'Quelle est la construction correcte du verbe "répondre" (à une personne) ?',
          options: ['Répondre quelqu\'un', 'Répondre à quelqu\'un', 'Répondre de quelqu\'un', 'Répondre pour quelqu\'un'],
          correctIndex: 1,
          explanation: '"RÉPONDRE À quelqu\'un" (jamais "répondre quelqu\'un" sans préposition). Comme "téléphoner", ce verbe exige TOUJOURS la préposition "à" devant son complément de personne — il n\'a JAMAIS de COD direct.',
        },
        {
          id: 'trans-err-02-ex06',
          type: 'qcm',
          question: 'Quelle est la construction correcte de "se souvenir" ?',
          options: ['Se souvenir à quelque chose', 'Se souvenir de quelque chose', 'Se souvenir pour quelque chose', 'Se souvenir avec quelque chose'],
          correctIndex: 1,
          explanation: '"SE SOUVENIR DE quelque chose" (jamais "se souvenir à"). Cette construction avec "de" est fixe, comme pour "avoir besoin de" et "avoir peur de" — un groupe de verbes à mémoriser ensemble pour leur construction commune.',
        },
        {
          id: 'trans-err-02-ex07',
          type: 'qcm',
          question: 'Quelle est la construction correcte du verbe "demander" (poser une question/requête) ?',
          options: ['Demander pour quelque chose', 'Demander quelque chose (sans préposition)', 'Demander à quelque chose', 'Demander de quelque chose pour le sens "requête"'],
          correctIndex: 1,
          explanation: '"DEMANDER quelque chose" SANS PRÉPOSITION (jamais "demander POUR quelque chose", calque de "to ask FOR something"). Note : "demander À quelqu\'un de faire quelque chose" utilise "à" pour la PERSONNE, mais pas pour la CHOSE demandée elle-même.',
        },
        {
          id: 'trans-err-02-ex08',
          type: 'qcm',
          question: 'Quelle est la différence entre "penser à quelqu\'un" et "penser de quelqu\'un" ?',
          options: [
            'Aucune différence, ce sont des synonymes',
            '"Penser à" = avoir cette personne en tête ; "penser de" = avoir une opinion sur cette personne',
            '"Penser de" = avoir cette personne en tête ; "penser à" = avoir une opinion',
            'Ces deux constructions sont toutes les deux incorrectes',
          ],
          correctIndex: 1,
          explanation: '"PENSER À quelqu\'un" = avoir cette personne EN TÊTE, y songer ("je pense à toi"). "PENSER DE quelqu\'un" = avoir une OPINION sur cette personne ("qu\'est-ce que tu penses DE lui ?" = quelle est ton opinion sur lui). Cette distinction sémantique fine est importante à respecter.',
        },
        {
          id: 'trans-err-02-ex09',
          type: 'qcm',
          question: 'Quelle est la construction correcte du verbe "regarder" ?',
          options: ['Regarder à quelque chose', 'Regarder quelque chose (sans préposition)', 'Regarder pour quelque chose', 'Regarder de quelque chose'],
          correctIndex: 1,
          explanation: '"REGARDER quelque chose" SANS PRÉPOSITION (jamais "regarder À quelque chose", calque de "to look AT something"). Comme "attendre" et "chercher", ce verbe se construit directement avec un COD en français.',
        },
        {
          id: 'trans-err-02-ex10',
          type: 'qcm',
          question: 'Pourquoi est-il recommandé de mémoriser un verbe AVEC sa préposition, plutôt que le verbe seul ?',
          options: [
            'Ce n\'est pas une méthode efficace',
            'Parce que la préposition associée à chaque verbe est souvent arbitraire et ne se déduit pas logiquement, donc mémoriser le bloc complet (verbe+préposition) évite les erreurs de calque depuis une autre langue',
            'Parce que tous les verbes ont exactement la même préposition',
            'Parce que les prépositions n\'ont aucune importance en français',
          ],
          correctIndex: 1,
          explanation: 'La préposition associée à chaque VERBE est souvent ARBITRAIRE et ne se DÉDUIT PAS LOGIQUEMENT d\'une règle générale. MÉMORISER le BLOC COMPLET (verbe+préposition, comme "téléphoner À") comme une UNITÉ INDISSOCIABLE évite les ERREURS DE CALQUE (reproduction inconsciente de la construction d\'une autre langue) lors de la PRODUCTION orale ou écrite.',
        },
        {
          id: 'trans-err-02-ex11',
          type: 'qcm',
          question: 'Quelle est la construction correcte de "avoir peur" (sens général de crainte) ?',
          options: ['Avoir peur à quelque chose', 'Avoir peur de quelque chose', 'Avoir peur pour quelque chose (sens différent : inquiétude pour quelqu\'un)', 'Avoir peur avec quelque chose'],
          correctIndex: 1,
          explanation: '"AVOIR PEUR DE quelque chose" (sens général de crainte). Note : "avoir peur POUR quelqu\'un" existe aussi mais avec un sens DIFFÉRENT — l\'inquiétude POUR la sécurité de cette personne, pas la peur DE cette personne elle-même.',
        },
        {
          id: 'trans-err-02-ex12',
          type: 'qcm',
          question: 'Quelle est la construction correcte de "s\'intéresser" ?',
          options: ['S\'intéresser pour quelque chose', 'S\'intéresser à quelque chose', 'S\'intéresser de quelque chose', 'S\'intéresser avec quelque chose'],
          correctIndex: 1,
          explanation: '"S\'INTÉRESSER À quelque chose" (jamais "s\'intéresser POUR"). Cette construction avec "à" est fixe, comme pour "téléphoner à" et "répondre à" — un autre exemple de verbe pronominal suivi systématiquement de cette préposition.',
        },
        {
          id: 'trans-err-02-ex13',
          type: 'qcm',
          question: 'Pourquoi une erreur de préposition après un verbe ne bloque-t-elle généralement pas la compréhension, tout en restant problématique ?',
          options: [
            'Parce que cette erreur n\'a absolument aucun effet',
            'Le sens global reste généralement compréhensible grâce au contexte, mais l\'erreur signale immédiatement un niveau moins avancé de maîtrise de la langue, ce qui peut affecter la perception du locuteur',
            'Parce que cette erreur change toujours complètement le sens de la phrase',
            'Parce que les natifs ne remarquent jamais ce type d\'erreur',
          ],
          correctIndex: 1,
          explanation: 'Le SENS GLOBAL reste généralement COMPRÉHENSIBLE grâce au CONTEXTE (l\'interlocuteur comprend l\'intention malgré l\'erreur), mais cette erreur SIGNALE IMMÉDIATEMENT un niveau MOINS AVANCÉ de maîtrise de la langue aux oreilles d\'un locuteur attentif, ce qui peut AFFECTER la PERCEPTION du locuteur, notamment dans des contextes professionnels ou formels.',
        },
        {
          id: 'trans-err-02-ex14',
          type: 'qcm',
          question: 'Quelle stratégie d\'apprentissage par "fiches de constructions verbales" est recommandée ?',
          options: [
            'Apprendre tous les verbes de façon isolée, sans regrouper leurs constructions',
            'Regrouper les verbes par TYPE de construction (verbes + à / verbes + de / verbes sans préposition), avec des exemples de phrases complètes pour chaque catégorie',
            'Éviter complètement d\'apprendre les constructions verbales',
            'Mémoriser uniquement les verbes les plus rares',
            ],
          correctIndex: 1,
          explanation: 'La stratégie recommandée consiste à REGROUPER les verbes par TYPE de CONSTRUCTION (verbes systématiquement + à / verbes systématiquement + de / verbes SANS préposition), accompagnés d\'EXEMPLES de PHRASES COMPLÈTES pour chaque CATÉGORIE, facilitant ainsi la MÉMORISATION par ASSOCIATION et RÉPÉTITION structurée plutôt qu\'un apprentissage isolé et désorganisé.',
        },
        {
          id: 'trans-err-02-ex15',
          type: 'qcm',
          question: 'Quelle phrase est INCORRECTE par calque de l\'anglais ?',
          options: [
            '"Je téléphone à mon frère."',
            '"J\'attends pour le bus."',
            '"J\'ai besoin de ton aide."',
            '"Je me souviens de cette journée."',
          ],
          correctIndex: 1,
          explanation: '"J\'ATTENDS POUR le bus" est INCORRECTE — c\'est un CALQUE direct de l\'anglais "I\'m waiting FOR the bus". La construction française correcte est "J\'ATTENDS le bus" (SANS préposition). Les trois autres phrases utilisent des constructions CORRECTES en français.',
        },
        {
          id: 'trans-err-02-ex16',
          type: 'qcm',
          question: 'Quelle est la construction correcte pour féliciter quelqu\'un sur un résultat ?',
          options: [
            'Féliciter quelqu\'un seulement avec "à"',
            'Féliciter quelqu\'un POUR ou DE quelque chose (les deux sont possibles avec une légère nuance)',
            'Féliciter quelqu\'un est toujours incorrect en français',
            'Féliciter ne peut jamais être suivi d\'une préposition',
          ],
          correctIndex: 1,
          explanation: '"FÉLICITER quelqu\'un POUR/DE quelque chose" — les DEUX prépositions sont ACCEPTABLES en français pour ce verbe, avec une nuance subtile (généralement "pour" insiste légèrement plus sur la cause concrète, "de" sur l\'objet plus abstrait), mais les deux constructions sont COURANTES et CORRECTES.',
        },
        {
          id: 'trans-err-02-ex17',
          type: 'qcm',
          question: 'Quelle phrase utilise CORRECTEMENT la construction du verbe "chercher" ?',
          options: [
            '"Je cherche pour mes clés."',
            '"Je cherche mes clés."',
            '"Je cherche à mes clés."',
            '"Je cherche de mes clés."',
          ],
          correctIndex: 1,
          explanation: '"Je CHERCHE mes clés" (SANS préposition) est la construction CORRECTE en français. Les autres options ("pour", "à", "de") seraient des CALQUES incorrects, notamment "pour" qui reproduirait directement la construction anglaise "to look FOR".',
        },
        {
          id: 'trans-err-02-ex18',
          type: 'qcm',
          question: 'Pourquoi ce type d\'erreur (préposition incorrecte) est-il considéré comme particulièrement DIFFICILE à corriger, même à un niveau avancé ?',
          options: [
            'Parce qu\'il n\'existe aucune méthode pour les corriger',
            'Parce qu\'il n\'y a généralement pas de logique transférable d\'une langue à l\'autre, ni de règle générale applicable — chaque construction doit être mémorisée individuellement comme une exception ou une convention arbitraire',
            'Parce que ces erreurs sont rares et donc peu prioritaires',
            'Parce que tous les apprenants font exactement les mêmes erreurs, ce qui facilite leur correction',
          ],
          correctIndex: 1,
          explanation: 'Il n\'y a généralement PAS de LOGIQUE TRANSFÉRABLE d\'une langue à l\'AUTRE pour la préposition associée à un verbe, NI de RÈGLE GÉNÉRALE applicable de façon systématique — chaque CONSTRUCTION doit être MÉMORISÉE INDIVIDUELLEMENT comme une CONVENTION largement ARBITRAIRE de la langue française, ce qui explique la PERSISTANCE de ces erreurs même à des niveaux AVANCÉS, sans logique de "règle" à appliquer mécaniquement.',
        },
        {
          id: 'trans-err-02-ex19',
          type: 'qcm',
          question: 'Quelle phrase utilise CORRECTEMENT le verbe "répondre" ?',
          options: [
            '"Je vais répondre mon professeur."',
            '"Je vais répondre à mon professeur."',
            '"Je vais répondre de mon professeur."',
            '"Je vais répondre pour mon professeur." (sens identique recherché)',
          ],
          correctIndex: 1,
          explanation: '"Je vais RÉPONDRE À mon professeur" est la construction CORRECTE. Ce verbe exige TOUJOURS la préposition "à" devant son complément de personne, et n\'a JAMAIS de COD direct (jamais "répondre quelqu\'un" sans préposition).',
        },
        {
          id: 'trans-err-02-ex20',
          type: 'qcm',
          question: 'En synthèse, quelle est l\'approche globale recommandée pour progresser durablement sur les constructions verbales avec prépositions ?',
          options: [
            'Mémoriser une règle générale unique applicable à tous les verbes',
            'Combiner la mémorisation systématique de blocs verbe+préposition par catégories, l\'exposition régulière à des textes/conversations authentiques, et une vigilance particulière aux calques de sa langue maternelle',
            'Éviter complètement d\'utiliser des verbes nécessitant une préposition spécifique',
            'Se fier uniquement à la traduction automatique pour chaque phrase',
          ],
          correctIndex: 1,
          explanation: 'L\'approche GLOBALE recommandée COMBINE : la MÉMORISATION SYSTÉMATIQUE de blocs VERBE+PRÉPOSITION organisés par CATÉGORIES, l\'EXPOSITION RÉGULIÈRE à des textes et conversations AUTHENTIQUES (pour absorber naturellement les bonnes constructions), et une VIGILANCE PARTICULIÈRE aux CALQUES de sa langue MATERNELLE (identifier ses propres tendances de transfert, cf. module Phonétique sur ce même principe appliqué à la prononciation).',
        },
      ],
    },

    {
      id: 'trans-err-03',
      slug: 'trans-anglicismes-emprunts',
      moduleSlug: 'transversal-erreurs-frequentes',
      level: 'transversal',
      title: 'Anglicismes et emprunts mal utilisés',
      description: 'Reconnaître les anglicismes à éviter dans un français soigné et leurs équivalents recommandés.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Anglicismes acceptés et anglicismes à éviter

Le français a toujours emprunté des mots à d'autres langues, mais certains anglicismes RÉCENTS sont déconseillés dans un français soigné, notamment à l'écrit formel, car des équivalents français existent et sont recommandés.

**Anglicismes informatiques/professionnels à éviter (avec équivalents recommandés)**
- "Un mail" → "un courriel" ou "un email" (les deux sont acceptés, mais "courriel" est l'équivalent officiel recommandé au Québec et de plus en plus en France)
- "Un meeting" → "une réunion"
- "Un planning" → "un calendrier" ou "un emploi du temps"
- "Un deadline" → "une date limite" ou "une échéance"
- "Un feedback" → "un retour" (d'information)
- "Booker" → "réserver"

**Calques syntaxiques anglicisants (structure de phrase)**
- "Je supporte cette idée" (calque maladroit de "I support") → "Je SOUTIENS cette idée" (registre plus naturel)
- "Au final" (calque familier répandu mais critiqué) → "Finalement" ou "en fin de compte" (plus soigné)
- "C'est qui le problème ?" (calque de structure anglaise) → "Quel est le problème ?" (structure française standard)

**Le cas particulier du "franglais"**
Certains mots anglais sont intégrés au point de devenir d'usage courant et largement acceptés en français contemporain (week-end, parking, e-mail, sandwich) — ce ne sont plus vraiment des "fautes" mais des emprunts assimilés depuis longtemps.

**Pourquoi cette distinction est importante**
Dans un écrit ADMINISTRATIF, ACADÉMIQUE ou très FORMEL, privilégier le VOCABULAIRE FRANÇAIS plutôt que l'anglicisme reste un choix plus SÛR et plus VALORISÉ.`,

      linguisticPoint: `## Point linguistique : Distinguer emprunt assimilé et anglicisme à éviter

### Critères pour juger si un anglicisme est "acceptable" en contexte formel
1. **Ancienneté** : le mot est-il utilisé depuis longtemps (week-end) ou est-ce un emprunt très récent (deadline) ?
2. **Existence d'un équivalent français courant** : si un équivalent français NATUREL existe et est largement utilisé (réunion pour meeting), le préférer.
3. **Registre du document** : un texte très FORMEL (administratif, académique) doit privilégier le vocabulaire FRANÇAIS ; un contexte plus INFORMEL (conversation, réseaux sociaux) tolère davantage les anglicismes.

### Tableau de substitution pour l'écrit formel
| Anglicisme courant | Équivalent français recommandé |
|---|---|
| un mail / email | un courriel (officiel) / un message électronique |
| un meeting | une réunion |
| un planning | un calendrier / un emploi du temps |
| un feedback | un retour (d'information) |
| booker | réserver |
| un deadline | une date limite / une échéance |

### Pourquoi certains organismes (Québec notamment) sont plus stricts sur ce point
Le Québec, en situation linguistique MINORITAIRE face à l'anglais en Amérique du Nord, a développé une politique TERMINOLOGIQUE plus stricte pour préserver le français — d'où des équivalents officiels parfois plus systématiquement utilisés qu'en France métropolitaine.`,

      keyPoints: [
        '"Un mail/email" → "un courriel" (équivalent officiel recommandé, surtout à l\'écrit formel)',
        '"Un meeting" → "une réunion" / "un planning" → "un calendrier" / "un feedback" → "un retour"',
        '"Booker" → "réserver" / "un deadline" → "une date limite, une échéance"',
        'Emprunts ANCIENS assimilés (week-end, parking, sandwich) ≠ anglicismes RÉCENTS à éviter en formel',
        'Critère clé : registre du document — formel/administratif privilégie le vocabulaire français',
      ],

      exercises: [
        {
          id: 'trans-err-03-ex01',
          type: 'qcm',
          question: 'Quel est l\'équivalent français recommandé pour "un meeting" dans un contexte formel ?',
          options: ['Un rendez-vous', 'Une réunion', 'Un rassemblement', 'Une conférence'],
          correctIndex: 1,
          explanation: '"UNE RÉUNION" est l\'équivalent français RECOMMANDÉ pour "meeting" dans un contexte FORMEL ou professionnel. C\'est le terme le plus NATUREL et le plus largement utilisé en français standard pour désigner ce type d\'événement.',
        },
        {
          id: 'trans-err-03-ex02',
          type: 'qcm',
          question: 'Quel est l\'équivalent officiel recommandé pour "un mail/email" ?',
          options: ['Un message', 'Un courriel', 'Une lettre', 'Un texto'],
          correctIndex: 1,
          explanation: '"UN COURRIEL" est l\'équivalent OFFICIEL recommandé pour "mail/email", particulièrement valorisé au Québec et de plus en plus en France, notamment dans les textes ADMINISTRATIFS et OFFICIELS.',
        },
        {
          id: 'trans-err-03-ex03',
          type: 'qcm',
          question: 'Quel est l\'équivalent français recommandé pour "un feedback" ?',
          options: ['Une réaction', 'Un retour (d\'information)', 'Une critique', 'Un commentaire'],
          correctIndex: 1,
          explanation: '"UN RETOUR (d\'information)" est l\'équivalent français RECOMMANDÉ pour "feedback" en contexte professionnel ("merci pour votre retour" = thank you for your feedback). C\'est le terme le plus naturel et le plus utilisé dans le monde professionnel français.',
        },
        {
          id: 'trans-err-03-ex04',
          type: 'qcm',
          question: 'Quel est l\'équivalent français recommandé pour le verbe "booker" ?',
          options: ['Acheter', 'Réserver', 'Commander', 'Vendre'],
          correctIndex: 1,
          explanation: '"RÉSERVER" est l\'équivalent français RECOMMANDÉ pour le verbe anglicisant "booker" (calque direct de "to book"). "Réserver une table/un billet/une chambre" est la formulation NATURELLE et FORMELLE en français.',
        },
        {
          id: 'trans-err-03-ex05',
          type: 'qcm',
          question: 'Quel est l\'équivalent français recommandé pour "un deadline" ?',
          options: ['Une limite', 'Une date limite / une échéance', 'Un délai infini', 'Une fin'],
          correctIndex: 1,
          explanation: '"UNE DATE LIMITE" ou "UNE ÉCHÉANCE" sont les équivalents français RECOMMANDÉS pour "deadline". Ces termes sont couramment utilisés dans le monde professionnel et administratif français, et préférables à l\'anglicisme dans un contexte formel.',
        },
        {
          id: 'trans-err-03-ex06',
          type: 'qcm',
          question: 'Pourquoi "week-end" et "parking" ne sont-ils plus vraiment considérés comme des "fautes" en français, contrairement à des anglicismes plus récents ?',
          options: [
            'Parce qu\'ils n\'ont jamais été des emprunts à l\'anglais',
            'Parce que ce sont des emprunts anciens, largement assimilés à l\'usage français depuis longtemps, contrairement à des anglicismes plus récents qui ont des équivalents français plus naturels et préférés en contexte formel',
            'Parce qu\'ils sont interdits par la loi française',
            'Parce qu\'ils n\'ont aucun équivalent en anglais',
          ],
          correctIndex: 1,
          explanation: 'Ce sont des EMPRUNTS ANCIENS, largement ASSIMILÉS à l\'usage FRANÇAIS depuis de nombreuses décennies — ils sont entrés dans le LANGAGE COURANT au point de ne plus être perçus comme des "fautes", CONTRAIREMENT à des anglicismes plus RÉCENTS (deadline, feedback) qui ont des équivalents français plus NATURELS et généralement PRÉFÉRÉS en contexte FORMEL.',
        },
        {
          id: 'trans-err-03-ex07',
          type: 'qcm',
          question: 'Quel est l\'équivalent français recommandé pour "un planning" professionnel ?',
          options: ['Un programme', 'Un calendrier ou un emploi du temps', 'Une organisation', 'Une stratégie'],
          correctIndex: 1,
          explanation: '"UN CALENDRIER" ou "UN EMPLOI DU TEMPS" sont les équivalents français RECOMMANDÉS pour "planning". Ces termes sont couramment utilisés dans les contextes professionnel et scolaire pour désigner l\'organisation temporelle des tâches ou activités.',
        },
        {
          id: 'trans-err-03-ex08',
          type: 'qcm',
          question: 'Quel est le premier critère pour juger si un anglicisme est "acceptable" en contexte formel ?',
          options: [
            'La longueur du mot anglais',
            'L\'ancienneté de l\'emprunt (utilisé depuis longtemps comme "week-end" ou très récent comme "deadline")',
            'La popularité du mot sur les réseaux sociaux',
            'Le nombre de lettres du mot',
          ],
          correctIndex: 1,
          explanation: 'L\'ANCIENNETÉ de l\'EMPRUNT est un critère IMPORTANT : un mot utilisé depuis LONGTEMPS et largement ASSIMILÉ (comme "week-end") est généralement plus ACCEPTABLE qu\'un emprunt RÉCENT (comme "deadline") qui dispose souvent d\'un ÉQUIVALENT français plus NATUREL et PRÉFÉRABLE en contexte formel.',
        },
        {
          id: 'trans-err-03-ex09',
          type: 'qcm',
          question: 'Pourquoi "je supporte cette idée" (calque de "I support") est-il considéré comme maladroit en français standard ?',
          options: [
            'Parce que "supporter" n\'existe pas en français',
            'Parce qu\'en français standard, "supporter" signifie principalement "tolérer/endurer" (cf. faux-amis), alors que pour exprimer un soutien à une idée, il vaut mieux utiliser "soutenir"',
            'Parce que cette phrase est en réalité parfaitement correcte sans aucune réserve',
            'Parce que "idée" est un mot incorrect dans ce contexte',
          ],
          correctIndex: 1,
          explanation: 'En FRANÇAIS STANDARD, "SUPPORTER" signifie principalement TOLÉRER/ENDURER (cf. la leçon précédente sur les faux-amis). Pour exprimer un SOUTIEN à une idée (sens recherché ici, calqué de l\'anglais "to support"), il est préférable d\'utiliser "SOUTENIR cette idée", plus NATUREL et moins AMBIGU en français.',
        },
        {
          id: 'trans-err-03-ex10',
          type: 'qcm',
          question: 'Quel facteur détermine le choix entre privilégier un anglicisme ou son équivalent français ?',
          options: [
            'Le nombre de syllabes du mot uniquement',
            'Le registre du document : un texte très formel (administratif, académique) privilégie le vocabulaire français, un contexte informel tolère davantage les anglicismes',
            'La couleur du papier utilisé',
            'L\'heure de la journée à laquelle le texte est écrit',
          ],
          correctIndex: 1,
          explanation: 'Le REGISTRE du DOCUMENT est un facteur DÉTERMINANT : un texte TRÈS FORMEL (administratif, académique, professionnel officiel) PRIVILÉGIE le VOCABULAIRE FRANÇAIS, tandis qu\'un contexte plus INFORMEL (conversation entre amis, réseaux sociaux) TOLÈRE davantage l\'usage d\'ANGLICISMES sans que cela soit perçu négativement.',
        },
        {
          id: 'trans-err-03-ex11',
          type: 'qcm',
          question: 'Pourquoi le Québec a-t-il développé une politique terminologique plus stricte concernant les anglicismes que la France métropolitaine ?',
          options: [
            'Sans raison particulière, c\'est purement arbitraire',
            'En raison de sa situation linguistique minoritaire face à l\'anglais en Amérique du Nord, le Québec a développé des politiques pour préserver et promouvoir activement le français',
            'Parce que les Québécois ne connaissent pas l\'anglais',
            'Parce que le français québécois est totalement différent du français de France',
          ],
          correctIndex: 1,
          explanation: 'En raison de sa SITUATION LINGUISTIQUE MINORITAIRE face à l\'ANGLAIS dominant en AMÉRIQUE DU NORD, le Québec a développé des POLITIQUES TERMINOLOGIQUES actives (via l\'Office québécois de la langue française notamment) pour PRÉSERVER et PROMOUVOIR le français, d\'où des équivalents OFFICIELS souvent plus systématiquement adoptés et défendus qu\'en France métropolitaine.',
        },
        {
          id: 'trans-err-03-ex12',
          type: 'qcm',
          question: 'Quelle formulation est PRÉFÉRABLE dans un rapport professionnel formel ?',
          options: [
            '"Le deadline du projet est fixé à vendredi."',
            '"La date limite du projet est fixée à vendredi."',
            'Les deux formulations sont strictement équivalentes en tout contexte',
            'Aucune des deux formulations n\'est correcte',
          ],
          correctIndex: 1,
          explanation: '"La DATE LIMITE du projet est fixée..." est PRÉFÉRABLE dans un RAPPORT PROFESSIONNEL FORMEL, privilégiant le VOCABULAIRE FRANÇAIS plutôt que l\'anglicisme "deadline", conformément aux conventions attendues dans ce type de document SOIGNÉ.',
        },
        {
          id: 'trans-err-03-ex13',
          type: 'qcm',
          question: 'Pourquoi "au final" (très répandu à l\'oral) est-il parfois critiqué dans un français très soigné ?',
          options: [
            'Parce que cette expression n\'existe pas du tout en français',
            'Parce que c\'est une expression d\'usage relativement récent et plus familier, alors que "finalement" ou "en fin de compte" sont considérés comme plus soignés et traditionnellement corrects',
            'Parce que cette expression signifie le contraire de ce qu\'elle exprime',
            'Parce que cette expression est en réalité un anglicisme direct',
          ],
          correctIndex: 1,
          explanation: '"Au final" est une expression d\'usage relativement RÉCENT et plus FAMILIER (bien que très répandue à l\'oral), alors que "FINALEMENT" ou "EN FIN DE COMPTE" sont considérés comme plus SOIGNÉS et traditionnellement CORRECTS dans un registre plus SOUTENU ou FORMEL, d\'où une certaine RÉTICENCE de puristes envers "au final" dans l\'écrit formel.',
        },
        {
          id: 'trans-err-03-ex14',
          type: 'qcm',
          question: 'Quelle structure de phrase est INCORRECTE par calque de structure anglaise ?',
          options: [
            '"Quel est le problème ?"',
            '"C\'est qui le problème ?"',
            'Les deux phrases sont également correctes',
            'Aucune des deux phrases n\'est grammaticalement analysable',
          ],
          correctIndex: 1,
          explanation: '"C\'est qui le problème ?" calque une structure ANGLICISANTE peu naturelle en français STANDARD. La structure FRANÇAISE correcte et naturelle est "QUEL EST le problème ?" — une INTERROGATION DIRECTE avec inversion ou structure standard, sans calque de structure anglaise.',
        },
        {
          id: 'trans-err-03-ex15',
          type: 'qcm',
          question: 'Quelle est la différence entre un emprunt "assimilé" et un anglicisme "à éviter" en contexte formel ?',
          options: [
            'Aucune différence, tous les emprunts à l\'anglais doivent être évités systématiquement',
            'Un emprunt assimilé (week-end, parking) est ancien et largement intégré à l\'usage français courant, tandis qu\'un anglicisme à éviter (deadline, feedback) est plus récent et dispose souvent d\'un équivalent français plus naturel, préférable en contexte soigné',
            'Un emprunt assimilé est toujours plus récent qu\'un anglicisme à éviter',
            'Les deux catégories n\'ont aucune utilité distinctive',
          ],
          correctIndex: 1,
          explanation: 'Un EMPRUNT ASSIMILÉ (week-end, parking, sandwich) est ANCIEN et largement INTÉGRÉ à l\'usage français COURANT, sans connotation négative. Un ANGLICISME À ÉVITER (deadline, feedback, meeting) est plus RÉCENT et dispose souvent d\'un ÉQUIVALENT français plus NATUREL, généralement PRÉFÉRABLE en contexte FORMEL ou SOIGNÉ.',
        },
        {
          id: 'trans-err-03-ex16',
          type: 'qcm',
          question: 'Dans un courriel professionnel formel, quelle formulation est la PLUS appropriée pour demander un retour d\'avis sur un document ?',
          options: [
            '"J\'attends votre feedback sur ce document."',
            '"J\'attends votre retour sur ce document."',
            'Les deux formulations sont également appropriées dans tout contexte sans distinction',
            'Aucune des deux formulations n\'a de sens',
          ],
          correctIndex: 1,
          explanation: '"J\'attends votre RETOUR sur ce document" est la formulation la PLUS APPROPRIÉE dans un courriel PROFESSIONNEL FORMEL, privilégiant le terme français "retour" plutôt que l\'anglicisme "feedback", conformément aux usages RECOMMANDÉS pour ce type de communication soignée.',
        },
        {
          id: 'trans-err-03-ex17',
          type: 'qcm',
          question: 'Pourquoi est-il utile pour un apprenant de connaître à la fois les anglicismes courants ET leurs équivalents français recommandés ?',
          options: [
            'Ce n\'est pas utile, il faut uniquement connaître les anglicismes',
            'Parce que cela permet de COMPRENDRE les anglicismes fréquemment entendus dans la vie courante, tout en sachant utiliser les équivalents français plus appropriés dans les contextes formels qui l\'exigent',
            'Parce que cela permet d\'éviter complètement d\'apprendre le vocabulaire français',
            'Parce que les anglicismes n\'existent jamais réellement en français',
          ],
          correctIndex: 1,
          explanation: 'Connaître les DEUX registres permet de COMPRENDRE les anglicismes FRÉQUEMMENT entendus dans la VIE COURANTE (contexte professionnel informel, conversations) TOUT EN sachant utiliser les ÉQUIVALENTS français plus APPROPRIÉS dans les CONTEXTES FORMELS qui l\'exigent (administration, candidatures, rapports officiels), assurant ainsi une ADAPTABILITÉ COMMUNICATIVE complète.',
        },
        {
          id: 'trans-err-03-ex18',
          type: 'qcm',
          question: 'Quelle est la fonction de l\'Office québécois de la langue française mentionné implicitement dans ce contexte ?',
          options: [
            'Interdire complètement l\'usage du français au Québec',
            'Promouvoir et défendre activement l\'usage du français au Québec, notamment en proposant des équivalents officiels aux anglicismes',
            'Promouvoir exclusivement l\'usage de l\'anglais au Québec',
            'Cet organisme n\'existe pas réellement',
          ],
          correctIndex: 1,
          explanation: 'L\'Office québécois de la langue française a pour mission de PROMOUVOIR et DÉFENDRE activement l\'usage du FRANÇAIS au Québec, notamment en proposant des ÉQUIVALENTS OFFICIELS aux anglicismes (comme "courriel" pour "email"), dans le contexte d\'une situation linguistique où le français est MINORITAIRE par rapport à l\'anglais dominant en Amérique du Nord.',
        },
        {
          id: 'trans-err-03-ex19',
          type: 'qcm',
          question: 'Pourquoi un apprenant de français devrait-il porter une attention particulière au vocabulaire utilisé dans son CV ou sa lettre de motivation, concernant les anglicismes ?',
          options: [
            'Ce n\'est pas important pour ce type de document',
            'Parce que ce sont des documents FORMELS où privilégier un vocabulaire FRANÇAIS soigné (plutôt que des anglicismes comme "feedback" ou "deadline") peut renforcer une image de maîtrise linguistique professionnelle',
            'Parce que les recruteurs préfèrent toujours les anglicismes dans un CV',
            'Parce que ce type de document interdit légalement tout anglicisme',
          ],
          correctIndex: 1,
          explanation: 'Le CV et la lettre de motivation sont des documents FORMELS où PRIVILÉGIER un VOCABULAIRE FRANÇAIS SOIGNÉ (plutôt que des anglicismes comme "feedback" ou "deadline") peut RENFORCER une image de MAÎTRISE LINGUISTIQUE PROFESSIONNELLE, élément particulièrement IMPORTANT pour un candidat dont le français n\'est pas la langue maternelle et qui souhaite démontrer sa compétence rédactionnelle.',
        },
        {
          id: 'trans-err-03-ex20',
          type: 'qcm',
          question: 'En synthèse, quelle est l\'attitude équilibrée recommandée face aux anglicismes en français contemporain ?',
          options: [
            'Rejeter systématiquement tout mot d\'origine anglaise, même les emprunts anciens et assimilés',
            'Adopter une approche nuancée selon le contexte et le registre : tolérer les emprunts anciens assimilés, mais privilégier les équivalents français pour les anglicismes récents dans les écrits formels, tout en restant capable de comprendre les deux registres',
            'Utiliser systématiquement des anglicismes dans tous les contextes sans distinction',
            'Ignorer complètement cette question, qui n\'a aucune importance pratique',
          ],
          correctIndex: 1,
          explanation: 'L\'attitude ÉQUILIBRÉE recommandée consiste à adopter une approche NUANCÉE SELON le CONTEXTE et le REGISTRE : TOLÉRER les emprunts ANCIENS ASSIMILÉS (week-end, parking) sans réserve, mais PRIVILÉGIER les ÉQUIVALENTS FRANÇAIS pour les anglicismes plus RÉCENTS (deadline, feedback) dans les ÉCRITS FORMELS, tout en restant capable de COMPRENDRE et d\'utiliser les DEUX REGISTRES selon la situation communicative rencontrée.',
        },
      ],
    },

    {
      id: 'trans-err-04',
      slug: 'trans-erreurs-syntaxe-recurrentes',
      moduleSlug: 'transversal-erreurs-frequentes',
      level: 'transversal',
      title: 'Erreurs de syntaxe récurrentes',
      description: 'Corriger les erreurs d\'ordre des mots, de négation et de construction de phrase les plus fréquentes.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Les pièges syntaxiques qui persistent malgré un bon niveau

Certaines erreurs de SYNTAXE (construction de la phrase) persistent même chez des apprenants AVANCÉS, car elles touchent à l'ordre des mots ou à des structures peu intuitives.

**L'ordre adjectif/nom (rappel et approfondissement du module B1 Grammaire)**
Erreur fréquente : placer systématiquement l'adjectif après le nom (calque possible de l'espagnol/italien) :
- Incorrect : "une voiture belle" → Correct : "une belle voiture" (BAGS = avant le nom)
- Correct dans les deux cas : "une voiture rouge" (couleur = toujours après)

**La double négation incomplète**
Erreur fréquente : oublier le second élément de la négation à l'écrit (fréquent à l'oral familier, mais incorrect à l'écrit) :
- Incorrect à l'écrit : "Je sais pas" → Correct : "Je NE sais PAS"
- Incorrect : "J'ai rien vu" → Correct : "Je N'ai rien vu"

**La place des pronoms compléments (rappel du module B1 Grammaire, doubles pronoms)**
Erreur fréquente : placer le pronom après le verbe conjugué au lieu d'avant :
- Incorrect : "Je vois le" → Correct : "Je LE vois"
- Incorrect : "Donne moi le" (sans tiret, hors impératif) → Correct (déclaratif) : "Donne-LE-moi" seulement à l'impératif

**L'inversion sujet-verbe dans la question (au-delà de l'intonation, module Phonétique)**
Erreur fréquente : mélanger les structures interrogatives :
- Incorrect : "Est-ce que tu viens-tu ?" (cumul de deux marqueurs)
- Correct : "Est-ce que tu viens ?" OU "Viens-tu ?" (un seul marqueur à la fois)

**Pourquoi ces erreurs syntaxiques sont-elles persistantes ?**
Elles touchent à des structures PROFONDES de la phrase, souvent automatisées depuis la langue maternelle — leur correction demande une vigilance consciente prolongée, au-delà de la simple mémorisation de vocabulaire.`,

      linguisticPoint: `## Point linguistique : La négation complète à l'écrit — ne jamais l'oublier

### Rappel de la règle de base
La négation française standard se construit avec DEUX éléments : "NE" (avant le verbe) + un second mot (pas/jamais/plus/rien/personne/aucun...)

### Tableau des négations complètes
| Oral familier (incomplet) | Écrit standard (complet) |
|---|---|
| Je sais pas | Je NE sais pas |
| J'ai rien | Je N'ai rien |
| Y a plus de pain | Il N'y a plus de pain |
| C'est pas grave | Ce N'est pas grave |

### Pourquoi cette omission est si fréquente, même chez les natifs
À l'ORAL FAMILIER français, le "NE" est très souvent OMIS par les locuteurs natifs eux-mêmes (élision quasi-systématique dans la conversation rapide). Cette pratique orale très répandue peut donc se TRANSFÉRER par erreur à l'ÉCRIT, où elle reste cependant INCORRECTE dans un registre standard ou soigné.

### Règle de vigilance pour l'écrit
À l'écrit (sauf dialogue très familier stylisé), TOUJOURS inclure le "NE" de la négation, même si à l'oral on a l'habitude de l'omettre.`,

      keyPoints: [
        'BAGS (beauté/âge/bonté/taille) = adjectifs courts AVANT le nom / autres adjectifs = APRÈS',
        'Négation complète à l\'écrit : NE + pas/jamais/rien/personne (jamais omettre le "ne" à l\'écrit standard)',
        'Pronom complément TOUJOURS avant le verbe conjugué (sauf impératif affirmatif)',
        'Un SEUL marqueur interrogatif à la fois : "est-ce que tu viens ?" OU "viens-tu ?", jamais les deux',
        'Erreurs syntaxiques = structures profondes automatisées, correction = vigilance consciente prolongée',
      ],

      exercises: [
        {
          id: 'trans-err-04-ex01',
          type: 'qcm',
          question: 'Quelle phrase respecte l\'ordre correct adjectif/nom en français ?',
          options: ['Une voiture belle', 'Une belle voiture', 'Belle une voiture', 'Voiture une belle'],
          correctIndex: 1,
          explanation: '"Une BELLE voiture." "Beau/belle" fait partie des adjectifs BAGS (courts, fréquents) qui se placent AVANT le nom en français. "Une voiture belle" serait un calque incorrect de langues qui placent systématiquement l\'adjectif après le nom.',
        },
        {
          id: 'trans-err-04-ex02',
          type: 'qcm',
          question: 'Quelle est la négation COMPLÈTE et correcte à l\'écrit standard de "je sais pas" ?',
          options: ['Je sais pas', 'Je ne sais pas', 'Je pas sais', 'Ne je sais pas'],
          correctIndex: 1,
          explanation: '"Je NE sais pas." La négation standard à l\'écrit nécessite TOUJOURS le "NE" avant le verbe. "Je sais pas" (sans "ne") est une forme ORALE FAMILIÈRE à éviter dans un écrit STANDARD ou SOIGNÉ.',
        },
        {
          id: 'trans-err-04-ex03',
          type: 'qcm',
          question: 'Quelle est la place correcte du pronom complément dans une phrase déclarative ?',
          options: ['Après le verbe conjugué : "Je vois le"', 'Avant le verbe conjugué : "Je LE vois"', 'Au début de la phrase uniquement', 'Cela dépend uniquement du contexte'],
          correctIndex: 1,
          explanation: '"Je LE vois." Le pronom complément se place TOUJOURS AVANT le verbe conjugué dans une phrase DÉCLARATIVE (sauf à l\'impératif AFFIRMATIF, où il se place après avec un tiret : "Regarde-LE !").',
        },
        {
          id: 'trans-err-04-ex04',
          type: 'qcm',
          question: 'Quelle phrase contient une erreur d\'interrogation (cumul de deux marqueurs) ?',
          options: ['Est-ce que tu viens ?', 'Viens-tu ?', 'Est-ce que tu viens-tu ?', 'Tu viens ?'],
          correctIndex: 2,
          explanation: '"Est-ce que tu viens-tu ?" est INCORRECTE — elle CUMULE deux marqueurs interrogatifs ("est-ce que" ET l\'inversion "viens-tu"), ce qui est redondant et grammaticalement fautif. Il faut choisir UN SEUL marqueur : soit "est-ce que tu viens ?", soit "viens-tu ?".',
        },
        {
          id: 'trans-err-04-ex05',
          type: 'qcm',
          question: 'Quelle est la négation COMPLÈTE et correcte de "j\'ai rien vu" à l\'écrit standard ?',
          options: ['J\'ai rien vu', 'Je n\'ai rien vu', 'Rien j\'ai vu', 'Je ai rien vu'],
          correctIndex: 1,
          explanation: '"Je N\'ai rien vu." La négation "ne... rien" nécessite le "NE" (élidé en "n\'" devant voyelle) avant l\'auxiliaire "ai". "J\'ai rien vu" (sans "ne") est une forme orale familière à éviter à l\'écrit standard.',
        },
        {
          id: 'trans-err-04-ex06',
          type: 'qcm',
          question: 'Pourquoi l\'omission du "ne" est-elle si fréquente, même chez les locuteurs natifs, à l\'oral ?',
          options: [
            'Parce que le "ne" n\'existe pas réellement en français',
            'Parce qu\'à l\'oral familier, le "ne" est très souvent omis par élision quasi-systématique dans la conversation rapide, une pratique qui peut ensuite se transférer par erreur à l\'écrit',
            'Parce que le "ne" est toujours obligatoire même à l\'oral le plus familier',
            'Parce que cette omission est une règle officielle de l\'Académie française',
          ],
          correctIndex: 1,
          explanation: 'À l\'ORAL FAMILIER, le "NE" est très souvent OMIS par ÉLISION QUASI-SYSTÉMATIQUE dans la conversation RAPIDE, même chez les LOCUTEURS NATIFS eux-mêmes. Cette pratique ORALE très répandue peut alors se TRANSFÉRER PAR ERREUR à l\'ÉCRIT, où elle reste cependant INCORRECTE dans un registre STANDARD ou SOIGNÉ.',
        },
        {
          id: 'trans-err-04-ex07',
          type: 'qcm',
          question: 'Quelle phrase respecte l\'ordre correct adjectif/nom pour une couleur ?',
          options: ['Une rouge voiture', 'Une voiture rouge', 'Voiture rouge une', 'Rouge voiture une'],
          correctIndex: 1,
          explanation: '"Une voiture ROUGE." Les COULEURS se placent TOUJOURS APRÈS le nom en français (contrairement aux adjectifs BAGS courts comme "belle" qui se placent AVANT). "Une rouge voiture" serait incorrect.',
        },
        {
          id: 'trans-err-04-ex08',
          type: 'qcm',
          question: 'Quelle est la négation COMPLÈTE et correcte de "y a plus de pain" à l\'écrit standard ?',
          options: ['Y a plus de pain', 'Il n\'y a plus de pain', 'Il y a ne plus de pain', 'Plus il y a de pain'],
          correctIndex: 1,
          explanation: '"Il N\'y a plus de pain." La forme complète et correcte à l\'écrit comprend : le sujet impersonnel "il" (souvent omis à l\'oral très familier), le "NE" de négation, et "plus" (= no more). "Y a plus" omet à la fois "il" et "ne".',
        },
        {
          id: 'trans-err-04-ex09',
          type: 'qcm',
          question: 'Pourquoi l\'inversion sujet-verbe ne doit-elle JAMAIS être combinée avec "est-ce que" dans la même question ?',
          options: [
            'Parce que cette combinaison est en réalité acceptée et recommandée',
            'Parce que "est-ce que" et l\'inversion sont deux structures interrogatives DISTINCTES et redondantes qui accomplissent la même fonction grammaticale — les combiner crée une construction fautive et répétitive',
            'Parce que l\'inversion n\'existe pas en français',
            'Parce que "est-ce que" n\'existe pas en français',
          ],
          correctIndex: 1,
          explanation: '"Est-ce que" et l\'INVERSION sujet-verbe sont DEUX STRUCTURES INTERROGATIVES DISTINCTES qui accomplissent la MÊME FONCTION grammaticale (signaler une question). Les COMBINER ("est-ce que tu viens-tu ?") crée une construction REDONDANTE et FAUTIVE — il faut choisir L\'UNE ou L\'AUTRE, jamais les deux simultanément.',
        },
        {
          id: 'trans-err-04-ex10',
          type: 'qcm',
          question: 'Quelle phrase utilise CORRECTEMENT le pronom complément à l\'impératif affirmatif ?',
          options: ['Le regarde !', 'Regarde-le !', 'Regarde le !', 'Le-regarde !'],
          correctIndex: 1,
          explanation: '"REGARDE-LE !" À l\'impératif AFFIRMATIF, le pronom complément se place APRÈS le verbe, avec un TIRET ("regarde-le", pas "regarde le" sans tiret, ni "le regarde" qui serait la construction déclarative incorrecte ici).',
        },
        {
          id: 'trans-err-04-ex11',
          type: 'qcm',
          question: 'Quelle est la négation COMPLÈTE et correcte de "c\'est pas grave" à l\'écrit standard ?',
          options: ['C\'est pas grave', 'Ce n\'est pas grave', 'Pas c\'est grave', 'Ce est pas ne grave'],
          correctIndex: 1,
          explanation: '"Ce N\'est pas grave." La forme complète comprend le "NE" élidé en "n\'" devant la voyelle de "est". "C\'est pas grave" (sans "ne") est une forme orale familière très répandue mais incorrecte à l\'écrit standard.',
        },
        {
          id: 'trans-err-04-ex12',
          type: 'qcm',
          question: 'Pourquoi les erreurs de syntaxe (ordre des mots, négation, pronoms) sont-elles considérées comme particulièrement persistantes, même chez des apprenants avancés ?',
          options: [
            'Parce qu\'elles n\'ont en réalité aucune importance',
            'Parce qu\'elles touchent à des structures profondes de la phrase, souvent automatisées depuis la langue maternelle, nécessitant une vigilance consciente prolongée pour les corriger, au-delà de la simple mémorisation de vocabulaire',
            'Parce que ces erreurs sont rares et donc peu travaillées',
            'Parce que tous les apprenants commettent exactement les mêmes erreurs de la même façon',
          ],
          correctIndex: 1,
          explanation: 'Ces erreurs touchent à des STRUCTURES PROFONDES de la phrase, souvent AUTOMATISÉES depuis la LANGUE MATERNELLE (l\'ordre des mots, la place des pronoms). Leur CORRECTION demande une VIGILANCE CONSCIENTE PROLONGÉE, AU-DELÀ de la simple MÉMORISATION de vocabulaire — il faut littéralement REPROGRAMMER des réflexes syntaxiques automatiques.',
        },
        {
          id: 'trans-err-04-ex13',
          type: 'qcm',
          question: 'Quelle phrase utilise CORRECTEMENT l\'ordre adjectif/nom pour un adjectif BAGS (âge) ?',
          options: ['Un homme jeune', 'Un jeune homme', 'Jeune un homme', 'Homme jeune un'],
          correctIndex: 1,
          explanation: '"Un JEUNE homme." "Jeune" (catégorie BAGS — Âge) se place AVANT le nom. "Un homme jeune" serait moins naturel dans ce sens descriptif standard (bien que grammaticalement possible dans certains contextes très spécifiques, ce n\'est pas l\'usage standard).',
        },
        {
          id: 'trans-err-04-ex14',
          type: 'qcm',
          question: 'Dans quel registre l\'omission du "ne" peut-elle être considérée comme stylistiquement acceptable ?',
          options: [
            'Dans tout type d\'écrit, sans aucune exception',
            'Dans un dialogue très familier stylisé (par exemple, pour représenter fidèlement une conversation orale dans un roman ou un scénario), mais jamais dans un écrit standard ou formel',
            'Uniquement dans les textes juridiques officiels',
            'Dans les lettres administratives formelles',
          ],
          correctIndex: 1,
          explanation: 'L\'omission du "NE" peut être STYLISTIQUEMENT ACCEPTABLE dans un DIALOGUE TRÈS FAMILIER STYLISÉ (par exemple, pour représenter FIDÈLEMENT une conversation orale authentique dans un ROMAN ou un SCÉNARIO), mais elle reste INCORRECTE dans un ÉCRIT STANDARD ou FORMEL (lettre administrative, rapport, email professionnel), où le "ne" complet est TOUJOURS attendu.',
        },
        {
          id: 'trans-err-04-ex15',
          type: 'qcm',
          question: 'Quelle phrase utilise CORRECTEMENT la structure interrogative sans erreur de cumul ?',
          options: [
            'Pourquoi est-ce que tu pars-tu ?',
            'Pourquoi pars-tu ?',
            'Pourquoi est-ce que pars-tu ?',
            'Pourquoi tu pars-tu ?',
          ],
          correctIndex: 1,
          explanation: '"Pourquoi PARS-TU ?" utilise CORRECTEMENT l\'INVERSION sujet-verbe SEULE, SANS cumul avec "est-ce que". Les autres options combinent INCORRECTEMENT "est-ce que" ET l\'inversion (ou le pronom répété), créant une redondance grammaticalement fautive.',
        },
        {
          id: 'trans-err-04-ex16',
          type: 'qcm',
          question: 'Quelle phrase respecte la place correcte du pronom complément dans une structure avec un verbe à l\'infinitif (comme "vouloir")?',
          options: ['Je veux voir le', 'Je veux le voir', 'Je le veux voir', 'Veux je le voir'],
          correctIndex: 1,
          explanation: '"Je veux LE voir." Avec un infinitif (après "vouloir", "pouvoir", "aller"...), le pronom complément se place JUSTE AVANT l\'infinitif (pas après le verbe conjugué "veux", ni avant celui-ci). "Je veux LE voir" = I want to see it/him.',
        },
        {
          id: 'trans-err-04-ex17',
          type: 'qcm',
          question: 'Pourquoi est-il important de maîtriser l\'ordre adjectif/nom (BAGS vs après le nom) pour une expression écrite fluide ?',
          options: [
            'Ce n\'est pas important, l\'ordre des mots n\'a aucun impact en français',
            'Parce qu\'un mauvais ordre, même s\'il reste généralement compréhensible, peut sonner peu naturel et signaler un niveau moins avancé, surtout si l\'erreur est systématique',
            'Parce que l\'ordre des mots change toujours complètement le sens de la phrase',
            'Parce que cet ordre est totalement libre et arbitraire en français, sans aucune règle',
          ],
          correctIndex: 1,
          explanation: 'Un MAUVAIS ORDRE adjectif/nom, même s\'il reste généralement COMPRÉHENSIBLE grâce au contexte, peut sonner PEU NATUREL et SIGNALER un niveau MOINS AVANCÉ, surtout si l\'ERREUR est SYSTÉMATIQUE (calque permanent de sa langue maternelle plutôt qu\'une application consciente des règles BAGS françaises).',
        },
        {
          id: 'trans-err-04-ex18',
          type: 'qcm',
          question: 'Quelle phrase contient une négation INCOMPLÈTE à corriger pour un écrit standard ?',
          options: [
            '"Je ne veux pas y aller."',
            '"Je veux pas y aller."',
            '"Je ne veux jamais y aller."',
            'Toutes ces phrases sont correctes',
          ],
          correctIndex: 1,
          explanation: '"Je veux PAS y aller" (sans "ne") est une NÉGATION INCOMPLÈTE typique de l\'oral FAMILIER, à CORRIGER en "Je NE veux pas y aller" pour un écrit STANDARD ou FORMEL. Les autres options incluent correctement le "ne".',
        },
        {
          id: 'trans-err-04-ex19',
          type: 'qcm',
          question: 'Pourquoi la correction des erreurs syntaxiques demande-t-elle une approche différente de la correction des erreurs de vocabulaire ?',
          options: [
            'Il n\'y a aucune différence entre ces deux types de correction',
            'Parce que les erreurs syntaxiques touchent à des structures automatisées et inconscientes (ordre des mots, négation, pronoms) qui nécessitent une pratique consciente et répétée pour être reprogrammées, alors que le vocabulaire peut souvent être mémorisé plus directement',
            'Parce que les erreurs syntaxiques sont toujours plus faciles à corriger que les erreurs de vocabulaire',
            'Parce que le vocabulaire n\'a besoin d\'aucune pratique pour être appris',
          ],
          correctIndex: 1,
          explanation: 'Les erreurs SYNTAXIQUES touchent à des STRUCTURES AUTOMATISÉES et INCONSCIENTES (ordre des mots, négation, pronoms), souvent ANCRÉES depuis la langue MATERNELLE, qui nécessitent une PRATIQUE CONSCIENTE et RÉPÉTÉE pour être PROGRESSIVEMENT REPROGRAMMÉES. Le VOCABULAIRE, en comparaison, peut souvent être MÉMORISÉ plus DIRECTEMENT par association ou répétition simple, sans cette dimension de "réflexe automatique" à modifier.',
        },
        {
          id: 'trans-err-04-ex20',
          type: 'qcm',
          question: 'En synthèse, quelle est l\'approche globale recommandée pour progresser durablement sur ces points syntaxiques persistants ?',
          options: [
            'Ignorer complètement ces erreurs car elles n\'ont aucune importance',
            'Combiner une prise de conscience explicite des règles (BAGS, négation complète, place des pronoms, un seul marqueur interrogatif), une pratique régulière et consciente de l\'écrit soigné, et une attention particulière lors de la relecture de ses propres productions',
            'Se fier uniquement à l\'intuition sans jamais réfléchir aux règles',
            'Mémoriser une règle unique applicable à toutes ces erreurs différentes',
          ],
          correctIndex: 1,
          explanation: 'L\'approche GLOBALE recommandée COMBINE : une PRISE DE CONSCIENCE EXPLICITE des RÈGLES concernées (BAGS, négation complète, place des pronoms, un seul marqueur interrogatif à la fois), une PRATIQUE RÉGULIÈRE et CONSCIENTE de l\'écrit SOIGNÉ, et une ATTENTION PARTICULIÈRE lors de la RELECTURE de ses propres productions — cette vigilance ACTIVE étant la clé pour progressivement REPROGRAMMER des réflexes syntaxiques hérités de la langue maternelle.',
        },
      ],
    },
  ],
};
