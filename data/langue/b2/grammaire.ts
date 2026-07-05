import type { LangModule } from '../types';

export const b2Grammaire: LangModule = {
  id: 'b2-mod-07',
  slug: 'b2-grammaire',
  level: 'B2',
  title: 'Grammaire B2',
  subtitle: 'Subjonctif avancé, concession, discours rapporté et nominalisation',
  description: 'Affinez votre maîtrise grammaticale avec des structures avancées propres au niveau B2.',
  type: 'grammaire',
  emoji: '📗',
  free: false,
  lessons: [
    {
      id: 'b2-gram-01',
      slug: 'b2-subjonctif-superlatif-restriction',
      moduleSlug: 'b2-grammaire',
      level: 'B2',
      title: 'Le subjonctif après le superlatif et la restriction',
      description: 'Maîtriser l\'emploi du subjonctif après "le seul qui", "rien qui" et les structures restrictives.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Quand le superlatif appelle le subjonctif

Après un superlatif ("le seul", "le plus", "le moins", "le premier", "le dernier") ou une expression de restriction, le verbe de la relative qui suit se met souvent au SUBJONCTIF — car on exprime alors une appréciation subjective, pas un fait certain.

**Après le superlatif :**
"C'est le meilleur candidat **que** nous **ayons reçu**." (subjonctif = appréciation subjective)
"C'est la seule solution **qui** **convienne**." (le seul = restriction forte)

**Après une restriction ("ne... que", "rien", "personne", "aucun") :**
"Il n'y a personne **qui** **sache** répondre à cette question."
"Je ne connais rien **qui** **puisse** expliquer ce comportement."
"C'est la seule chose **dont** je **sois** sûr."

**Nuance : subjonctif ou indicatif après le superlatif ?**
Si l'affirmation est présentée comme un FAIT OBJECTIF et certain, l'indicatif reste possible :
"C'est le plus grand bâtiment **qui existe** dans cette ville." (fait vérifiable, indicatif acceptable)
Mais dès qu'il y a une nuance d'APPRÉCIATION SUBJECTIVE ou de DOUTE, le subjonctif s'impose :
"C'est le plus beau livre **que j'aie lu**." (jugement personnel → subjonctif)`,

      linguisticPoint: `## Point linguistique : Le subjonctif passé dans les relatives restrictives

### Formation rappel
avoir/être (subjonctif présent) + participe passé

### Pourquoi le subjonctif PASSÉ est fréquent ici ?
Ces structures portent souvent sur une EXPÉRIENCE ACCUMULÉE jusqu'à présent :
"C'est le meilleur film que j'**aie vu**." (= dans toute mon expérience de spectateur, jusqu'à maintenant)

### Tableau de conjugaison du subjonctif passé (rappel)
| Verbe | Subjonctif passé (je) |
|---|---|
| voir | que j'**aie vu** |
| connaître | que j'**aie connu** |
| lire | que j'**aie lu** |
| recevoir | que j'**aie reçu** |
| rencontrer | que j'**aie rencontré** |

### Pièges fréquents
- Ne pas utiliser le conditionnel ici : ❌ "que j'aurais vu" / ✅ "que j'aie vu"
- L'expression de superlatif n'impose PAS toujours le subjonctif — la nuance subjective est le critère décisif`,

      keyPoints: [
        'Superlatif ("le seul/meilleur/plus...") + relative subjective = subjonctif',
        'Restriction (ne... que / rien / personne / aucun) + relative = subjonctif',
        '"C\'est le meilleur film que j\'AIE VU" = subjonctif passé (expérience accumulée)',
        'Si le fait est objectif/vérifiable (pas une appréciation) → indicatif reste possible',
        'Subjonctif passé = avoir/être (subjonctif présent) + participe passé',
      ],

      exercises: [
        {
          id: 'b2-gram-01-ex01',
          type: 'qcm',
          question: 'Subjonctif après superlatif : "C\'est le meilleur restaurant que je ___ ." (connaître)',
          options: ['connais', 'connaîtrais', 'aie connu', 'avais connu'],
          correctIndex: 2,
          explanation: '"C\'est le meilleur restaurant que j\'AIE CONNU." Subjonctif PASSÉ après superlatif + appréciation subjective. "Aie connu" = avoir (subjonctif présent) + "connu" (PP). Exprime une expérience accumulée jusqu\'à maintenant.',
        },
        {
          id: 'b2-gram-01-ex02',
          type: 'qcm',
          question: 'Restriction : "Il n\'y a personne qui ___ répondre à cette question." (savoir)',
          options: ['sait', 'saurait', 'sache', 'savait'],
          correctIndex: 2,
          explanation: '"Il n\'y a personne qui SACHE répondre." Après "personne" (restriction) + relative, le verbe se met au SUBJONCTIF. "Sache" = subjonctif présent (irrégulier) de "savoir".',
        },
        {
          id: 'b2-gram-01-ex03',
          type: 'qcm',
          question: 'Subjonctif après "le seul" : "C\'est la seule solution qui ___ ." (convenir)',
          options: ['convient', 'conviendra', 'convienne', 'convenait'],
          correctIndex: 2,
          explanation: '"C\'est la seule solution qui CONVIENNE." "Le/la seul(e)" = restriction forte, déclenche le subjonctif dans la relative qui suit. "Convienne" = subjonctif présent de "convenir".',
        },
        {
          id: 'b2-gram-01-ex04',
          type: 'qcm',
          question: 'Restriction avec "rien" : "Je ne connais rien qui ___ expliquer ce comportement." (pouvoir)',
          options: ['peut', 'pourra', 'puisse', 'pouvait'],
          correctIndex: 2,
          explanation: '"Je ne connais rien qui PUISSE expliquer..." "Rien" (restriction négative) + relative → SUBJONCTIF. "Puisse" = subjonctif présent (irrégulier) de "pouvoir".',
        },
        {
          id: 'b2-gram-01-ex05',
          type: 'qcm',
          question: 'Quand l\'INDICATIF reste-t-il possible après un superlatif ?',
          options: [
            'Jamais, le subjonctif est toujours obligatoire',
            'Quand l\'affirmation est présentée comme un fait objectif et vérifiable, sans appréciation subjective',
            'Uniquement au passé composé',
            'Uniquement avec le verbe être',
          ],
          correctIndex: 1,
          explanation: 'L\'INDICATIF reste possible quand l\'affirmation est un FAIT OBJECTIF et VÉRIFIABLE (pas une appréciation personnelle) : "C\'est le plus grand bâtiment QUI EXISTE dans cette ville" (fait mesurable). Dès qu\'il y a une nuance de JUGEMENT subjectif, le subjonctif s\'impose.',
        },
        {
          id: 'b2-gram-01-ex06',
          type: 'qcm',
          question: 'Subjonctif passé : "C\'est le plus beau livre que je ___ ." (lire)',
          options: ['lis', 'lirai', 'aie lu', 'avais lu'],
          correctIndex: 2,
          explanation: '"C\'est le plus beau livre que j\'AIE LU." Subjonctif passé pour exprimer un jugement personnel sur une expérience accumulée. "Aie lu" = avoir (subjonctif présent) + "lu" (PP de "lire").',
        },
        {
          id: 'b2-gram-01-ex07',
          type: 'qcm',
          question: 'Restriction avec "aucun" : "Il n\'existe aucune méthode qui ___ totalement infaillible." (être)',
          options: ['est', 'sera', 'soit', 'était'],
          correctIndex: 2,
          explanation: '"Il n\'existe aucune méthode qui SOIT totalement infaillible." "Aucune" (restriction négative) + relative → SUBJONCTIF. "Soit" = subjonctif présent d\'"être".',
        },
        {
          id: 'b2-gram-01-ex08',
          type: 'qcm',
          question: 'Pourquoi dit-on "c\'est le MEILLEUR film que j\'AIE VU" et pas "c\'est le meilleur film QUE J\'AI VU" ?',
          options: [
            'Les deux formes sont incorrectes',
            'Le subjonctif marque qu\'il s\'agit d\'un jugement personnel et subjectif, pas d\'un fait objectif',
            'L\'indicatif est en réalité obligatoire ici',
            'Il n\'y a aucune différence de sens entre les deux',
          ],
          correctIndex: 1,
          explanation: 'Le SUBJONCTIF ("que j\'aie vu") marque qu\'il s\'agit d\'un JUGEMENT PERSONNEL et SUBJECTIF ("le meilleur" selon mon appréciation), pas d\'un FAIT OBJECTIF vérifiable par tous. C\'est la nuance fondamentale qui régit ce choix grammatical.',
        },
        {
          id: 'b2-gram-01-ex09',
          type: 'qcm',
          question: 'Subjonctif passé après "le premier" : "Vous êtes la première personne qui ___ cette remarque." (faire)',
          options: ['fait', 'fera', 'ait fait', 'avait fait'],
          correctIndex: 2,
          explanation: '"Vous êtes la première personne qui AIT FAIT cette remarque." "Le/la premier(ère)" + relative subjective → subjonctif passé. "Ait fait" = avoir (subjonctif présent) + "fait" (PP de "faire").',
        },
        {
          id: 'b2-gram-01-ex10',
          type: 'qcm',
          question: 'Restriction "ne... que" + relative : "C\'est la seule chose dont je ___ vraiment sûr." (être)',
          options: ['suis', 'serai', 'sois', 'étais'],
          correctIndex: 2,
          explanation: '"C\'est la seule chose dont je SOIS vraiment sûr." "La seule chose" (restriction) + relative ("dont") → subjonctif. "Sois" = subjonctif présent d\'"être".',
        },
        {
          id: 'b2-gram-01-ex11',
          type: 'qcm',
          question: 'Subjonctif après "le dernier" : "C\'est le dernier obstacle qui ___ avant la naturalisation." (rester)',
          options: ['reste', 'restera', 'restait', 'resterait'],
          correctIndex: 0,
          explanation: '"C\'est le dernier obstacle qui RESTE." Subjonctif présent (régulier) après "le dernier" + relative. "Reste" = subjonctif présent de "rester" (identique à l\'indicatif présent pour ce verbe régulier, mais la structure impose le subjonctif).',
        },
        {
          id: 'b2-gram-01-ex12',
          type: 'qcm',
          question: 'Quelle structure NE déclenche PAS automatiquement le subjonctif dans la relative ?',
          options: [
            '"Le seul qui..."',
            '"Personne qui..."',
            '"Le livre que j\'ai acheté" (fait objectif, sans superlatif ni restriction)',
            '"Rien qui..."',
          ],
          correctIndex: 2,
          explanation: '"Le livre QUE J\'AI ACHETÉ" est une relative SIMPLE, sans superlatif ni restriction — elle reste à l\'INDICATIF (fait objectif et certain). Les trois autres structures (le seul, personne, rien) sont des déclencheurs typiques du subjonctif.',
        },
        {
          id: 'b2-gram-01-ex13',
          type: 'qcm',
          question: 'Subjonctif passé négatif : "Il n\'y a rien que je ___ regretté autant." (avoir)',
          options: ['ai', 'aurai', 'aie', 'avais'],
          correctIndex: 2,
          explanation: '"Il n\'y a rien que j\'AIE regretté autant." "Rien que" (restriction) + relative → subjonctif passé. "Aie regretté" = avoir (subjonctif présent) + "regretté" (PP).',
        },
        {
          id: 'b2-gram-01-ex14',
          type: 'qcm',
          question: 'Subjonctif après "le plus" : "C\'est le candidat le plus compétent que nous ___ rencontré." (avoir)',
          options: ['avons', 'aurons', 'ayons', 'avions'],
          correctIndex: 2,
          explanation: '"C\'est le candidat le plus compétent que nous AYONS rencontré." Subjonctif passé (1ère pers. pl.) : "ayons" + "rencontré" (PP). "Le plus + adjectif" + relative subjective = subjonctif.',
        },
        {
          id: 'b2-gram-01-ex15',
          type: 'qcm',
          question: 'Comparer : "C\'est le plus grand bâtiment qui EXISTE" (indicatif) vs "C\'est le plus beau bâtiment que j\'AIE VU" (subjonctif). Quelle est la différence de nature entre ces deux affirmations ?',
          options: [
            'Aucune différence',
            'La première est un fait objectif/mesurable (existence vérifiable), la seconde un jugement esthétique subjectif',
            'La seconde est plus certaine que la première',
            'Les deux sont des jugements subjectifs identiques',
          ],
          correctIndex: 1,
          explanation: '"Qui existe" = FAIT OBJECTIF, vérifiable (la taille du bâtiment est mesurable) → indicatif possible. "Que j\'aie vu" = JUGEMENT ESTHÉTIQUE SUBJECTIF ("le plus beau" selon mon goût personnel) → subjonctif. C\'est cette distinction objectif/subjectif qui détermine le choix du mode.',
        },
        {
          id: 'b2-gram-01-ex16',
          type: 'qcm',
          question: 'Subjonctif passé : "C\'est la pire expérience que je ___ vécue." (avoir)',
          options: ['ai', 'aurai', 'aie', 'avais'],
          correctIndex: 2,
          explanation: '"C\'est la pire expérience que j\'AIE vécue." "Le/la pire" (superlatif) + relative subjective → subjonctif passé. "Aie vécue" = avoir (subjonctif) + "vécue" (PP accordé au féminin, COD "que" = "expérience" placé avant).',
        },
        {
          id: 'b2-gram-01-ex17',
          type: 'qcm',
          question: 'Restriction "personne" + subjonctif : "Personne ne pense qu\'il ___ raison." (avoir)',
          options: ['a', 'aura', 'ait', 'avait'],
          correctIndex: 2,
          explanation: '"Personne ne pense qu\'il AIT raison." Ici, "personne ne pense que" (négation de "penser que") déclenche le subjonctif, comme la négation transforme habituellement l\'indicatif en subjonctif. "Ait" = subjonctif présent d\'"avoir".',
        },
        {
          id: 'b2-gram-01-ex18',
          type: 'qcm',
          question: 'Subjonctif après "le moins" : "C\'est l\'option la moins risquée que nous ___ envisager." (pouvoir)',
          options: ['pouvons', 'pourrons', 'puissions', 'pouvions'],
          correctIndex: 2,
          explanation: '"C\'est l\'option la moins risquée que nous PUISSIONS envisager." "Le/la moins + adjectif" (superlatif) + relative subjective → subjonctif. "Puissions" = subjonctif présent (1ère pers. pl.) de "pouvoir".',
        },
        {
          id: 'b2-gram-01-ex19',
          type: 'qcm',
          question: 'Pourquoi cette nuance subjonctif/indicatif après le superlatif est-elle considérée comme un point grammatical avancé (B2/C1) ?',
          options: [
            'Parce qu\'elle ne suit aucune règle fixe',
            'Parce qu\'elle exige de distinguer finement le caractère objectif ou subjectif d\'une affirmation, une nuance sémantique fine au-delà des règles mécaniques de base',
            'Parce qu\'elle ne s\'applique jamais en pratique',
            'Parce qu\'elle est plus simple que les règles de base du subjonctif',
          ],
          correctIndex: 1,
          explanation: 'Cette nuance exige de distinguer FINEMENT le caractère OBJECTIF (fait vérifiable) ou SUBJECTIF (jugement personnel) d\'une affirmation — une analyse SÉMANTIQUE plus subtile que les règles MÉCANIQUES de base du subjonctif (après "il faut que", "vouloir que"...), ce qui justifie son statut de point grammatical AVANCÉ.',
        },
        {
          id: 'b2-gram-01-ex20',
          type: 'qcm',
          question: 'Subjonctif passé après restriction : "C\'est la seule fois où je ___ vraiment eu peur." (avoir)',
          options: ['ai', 'aurai', 'aie', 'avais'],
          correctIndex: 2,
          explanation: '"C\'est la seule fois où j\'AIE vraiment eu peur." "La seule fois" (restriction) + relative ("où") → subjonctif passé. "Aie eu" = avoir (subjonctif présent) + "eu" (PP d\'"avoir"). Construction qui combine restriction et expérience personnelle accumulée.',
        },
      ],
    },

    {
      id: 'b2-gram-02',
      slug: 'b2-concession-avancee',
      moduleSlug: 'b2-grammaire',
      level: 'B2',
      title: 'La concession avancée',
      description: 'Maîtriser "quoique", "quand bien même", "encore que" et les nuances de la concession soutenue.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Au-delà de "bien que" — la palette de la concession

Le niveau B2 exige de connaître des connecteurs de concession plus variés et nuancés que le simple "bien que".

**Quoique + subjonctif** (synonyme soutenu de "bien que") :
"Quoique cette mesure **soit** contestée, elle reste appliquée."
⚠️ Ne pas confondre avec "quoi que" (en deux mots) = "whatever" : "Quoi qu'il **arrive**, je resterai déterminé."

**Quand bien même + conditionnel** (concession hypothétique forte) :
"Quand bien même vous **auriez** raison, la procédure resterait identique."
= même dans l'hypothèse où vous auriez raison...

**Encore que + subjonctif** (nuance ajoutée après coup, souvent en incise) :
"Cette solution est efficace, encore qu'elle **demande** des moyens importants."
= mais il faut quand même nuancer en ajoutant que...

**Avoir beau + infinitif** (concession avec valeur d'effort vain) :
"Il **a beau** insister, rien n'y fait." = malgré son insistance, rien ne change.

**Si + adjectif + que + subjonctif** (concession intensive) :
"**Si** difficile **que** soit cette épreuve, nous la surmonterons." = quelle que soit la difficulté...`,

      linguisticPoint: `## Point linguistique : Distinguer "quoique" et "quoi que"

### Quoique (un mot) = bien que + subjonctif
"**Quoique** je **comprenne** vos arguments, je maintiens ma position."
= bien que je comprenne...

### Quoi que (deux mots) = "whatever" + subjonctif
"**Quoi qu'**il **dise**, je ne changerai pas d'avis."
= whatever he says, peu importe ce qu'il dit

### Test pour ne pas confondre
- Si on peut remplacer par "bien que" → "quoique" (1 mot)
- Si on peut remplacer par "peu importe ce que" → "quoi que" (2 mots)

### "Avoir beau" — construction particulière
Sujet + avoir (conjugué) + beau + infinitif, sans "que" :
"J'**ai beau** chercher, je ne trouve pas la solution."
"Elle **a eu beau** insister, on ne l'a pas écoutée." (passé composé)`,

      keyPoints: [
        '"Quoique" (1 mot) + subjonctif = "bien que" / "quoi que" (2 mots) + subjonctif = "whatever"',
        '"Quand bien même" + CONDITIONNEL (pas subjonctif) = concession hypothétique forte',
        '"Encore que" + subjonctif = nuance ajoutée après coup, souvent en incise',
        '"Avoir beau" + infinitif (sans "que") = concession avec effort vain',
        '"Si + adjectif + que" + subjonctif = concession intensive ("quelle que soit l\'intensité de...")',
      ],

      exercises: [
        {
          id: 'b2-gram-02-ex01',
          type: 'qcm',
          question: 'Distinguer : "___ je comprenne vos arguments, je maintiens ma position." (= bien que)',
          options: ['Quoi que', 'Quoique', 'Quand', 'Encore'],
          correctIndex: 1,
          explanation: '"QUOIQUE je comprenne..." (un seul mot) = synonyme de "bien que" + subjonctif. Test : on peut remplacer par "bien que je comprenne" sans changer le sens.',
        },
        {
          id: 'b2-gram-02-ex02',
          type: 'qcm',
          question: 'Distinguer : "___ il dise, je ne changerai pas d\'avis." (= whatever)',
          options: ['Quoique', 'Quoi que', 'Bien que', 'Encore que'],
          correctIndex: 1,
          explanation: '"QUOI QU\'il dise..." (deux mots) = "whatever he says" / peu importe ce qu\'il dit. Test : on peut remplacer par "peu importe ce qu\'il dise" sans changer le sens fondamental.',
        },
        {
          id: 'b2-gram-02-ex03',
          type: 'qcm',
          question: 'Concession hypothétique : "Quand bien même vous ___ raison, la procédure resterait identique." (avoir)',
          options: ['avez', 'ayez', 'auriez', 'aviez'],
          correctIndex: 2,
          explanation: '"Quand bien même vous AURIEZ raison..." "Quand bien même" est suivi du CONDITIONNEL (pas du subjonctif, contrairement à "bien que" ou "quoique"). C\'est une exception importante à retenir.',
        },
        {
          id: 'b2-gram-02-ex04',
          type: 'qcm',
          question: 'Nuance ajoutée : "Cette solution est efficace, encore qu\'elle ___ des moyens importants." (demander)',
          options: ['demande', 'demandera', 'demanderait', 'demandait'],
          correctIndex: 0,
          explanation: '"Encore qu\'elle DEMANDE des moyens importants." "Encore que" + subjonctif. Cette structure ajoute une NUANCE après coup, souvent en incise, modérant une affirmation précédente sans la contredire totalement.',
        },
        {
          id: 'b2-gram-02-ex05',
          type: 'qcm',
          question: '"Avoir beau" + infinitif : "Il a beau ___, rien n\'y fait." (insister)',
          options: ['insiste', 'insister', 'insistant', 'insisté'],
          correctIndex: 1,
          explanation: '"Il A BEAU INSISTER, rien n\'y fait." "Avoir beau" est TOUJOURS suivi de l\'INFINITIF (sans "que"). Structure particulière exprimant un effort VAIN : malgré son insistance, rien ne change.',
        },
        {
          id: 'b2-gram-02-ex06',
          type: 'qcm',
          question: 'Concession intensive : "Si difficile que ___ cette épreuve, nous la surmonterons." (être)',
          options: ['est', 'sera', 'soit', 'était'],
          correctIndex: 2,
          explanation: '"Si difficile que SOIT cette épreuve..." "Si + adjectif + que" + SUBJONCTIF. Cette structure exprime une concession INTENSIVE : quelle que soit l\'intensité de la difficulté, le résultat (surmonter) reste le même.',
        },
        {
          id: 'b2-gram-02-ex07',
          type: 'qcm',
          question: 'Distinguer : "___ vous fassiez, le résultat sera le même." (= whatever you do)',
          options: ['Quoique', 'Quoi que', 'Bien que', 'Pourtant'],
          correctIndex: 1,
          explanation: '"QUOI QUE vous fassiez..." (deux mots) = "whatever you do" / peu importe ce que vous faites. À ne pas confondre avec "quoique" (un mot, = bien que).',
        },
        {
          id: 'b2-gram-02-ex08',
          type: 'qcm',
          question: '"Avoir beau" au passé composé : "Elle ___ insister, on ne l\'a pas écoutée." (avoir beau)',
          options: ['a eu beau', 'avait beau', 'aurait beau', 'a beau'],
          correctIndex: 0,
          explanation: '"Elle A EU BEAU insister..." Au passé composé, "avoir beau" devient "A EU BEAU" (avoir au PC + "beau" + infinitif). La structure reste la même, seul le temps de "avoir" change.',
        },
        {
          id: 'b2-gram-02-ex09',
          type: 'qcm',
          question: 'Quelle est la différence de degré entre "bien que" et "quand bien même" ?',
          options: [
            'Aucune différence',
            '"Quand bien même" exprime une concession hypothétique plus forte, souvent sur un fait non encore réalisé ou même improbable',
            '"Bien que" est plus fort que "quand bien même"',
            'Les deux sont strictement interchangeables dans tous les contextes',
          ],
          correctIndex: 1,
          explanation: '"QUAND BIEN MÊME" exprime une concession HYPOTHÉTIQUE plus FORTE, portant souvent sur un fait NON ENCORE réalisé ou même IMPROBABLE ("même si on suppose que vous auriez raison"). "Bien que" porte généralement sur un fait déjà ÉTABLI ou réel.',
        },
        {
          id: 'b2-gram-02-ex10',
          type: 'qcm',
          question: 'Concession avec "encore que" : "Le projet avance bien, encore qu\'il ___ encore quelques ajustements." (falloir)',
          options: ['faut', 'faudra', 'faille', 'fallait'],
          correctIndex: 2,
          explanation: '"Encore qu\'il FAILLE encore quelques ajustements." "Encore que" + subjonctif. "Faille" = subjonctif présent (irrégulier) de "falloir". Nuance ajoutée modérant l\'affirmation positive précédente.',
        },
        {
          id: 'b2-gram-02-ex11',
          type: 'qcm',
          question: 'Distinguer : "___ cela soit difficile, je suis confiant." (= bien que)',
          options: ['Quoi que', 'Quoique', 'Quand', 'Si'],
          correctIndex: 1,
          explanation: '"QUOIQUE cela soit difficile..." (un mot) = bien que. Test : "bien que cela soit difficile, je suis confiant" — le sens reste identique, confirmant l\'équivalence avec "quoique".',
        },
        {
          id: 'b2-gram-02-ex12',
          type: 'qcm',
          question: '"Avoir beau" : "J\'ai beau ___, je ne trouve pas la solution." (chercher)',
          options: ['cherche', 'chercher', 'cherché', 'cherchant'],
          correctIndex: 1,
          explanation: '"J\'ai beau CHERCHER, je ne trouve pas la solution." "Avoir beau" + infinitif (toujours). "Chercher" reste à l\'infinitif, exprimant l\'effort vain malgré une recherche active et continue.',
        },
        {
          id: 'b2-gram-02-ex13',
          type: 'qcm',
          question: 'Concession intensive : "___ compétent qu\'il soit, il ne peut pas tout savoir." (si)',
          options: ['Quoique', 'Si', 'Quand', 'Encore'],
          correctIndex: 1,
          explanation: '"SI compétent qu\'il soit..." "Si + adjectif + que + subjonctif" = quelle que soit la compétence. "Si" introduit cette structure de concession INTENSIVE, distincte de "si" conditionnel classique.',
        },
        {
          id: 'b2-gram-02-ex14',
          type: 'qcm',
          question: 'Quand bien même : "Quand bien même nous ___ tous les moyens, le résultat ne serait pas garanti." (avoir)',
          options: ['avons', 'ayons', 'aurions', 'avions'],
          correctIndex: 2,
          explanation: '"Quand bien même nous AURIONS tous les moyens..." Conditionnel présent (1ère pers. pl.) après "quand bien même". Cette structure suppose une hypothèse FORTE et parfois éloignée de la réalité.',
        },
        {
          id: 'b2-gram-02-ex15',
          type: 'qcm',
          question: 'Distinguer : "Quoi qu\'on ___ , il continuera son projet." (dire)',
          options: ['dit', 'dira', 'dise', 'disait'],
          correctIndex: 2,
          explanation: '"Quoi qu\'on DISE, il continuera." "Quoi que" + subjonctif (toujours). "Dise" = subjonctif présent de "dire". "Quoi qu\'on dise" = whatever people say / peu importe ce qu\'on dit.',
        },
        {
          id: 'b2-gram-02-ex16',
          type: 'qcm',
          question: 'Pourquoi "encore que" introduit-il souvent une nuance "après coup", différemment de "bien que" placé en début de phrase ?',
          options: [
            'Il n\'y a aucune différence d\'usage',
            '"Encore que" se place souvent en fin ou en incise, ajoutant une réserve à une affirmation déjà formulée, alors que "bien que" structure généralement la phrase dès le début',
            '"Encore que" ne s\'utilise jamais en fin de phrase',
            '"Bien que" ne peut jamais introduire une nuance'
          ],
          correctIndex: 1,
          explanation: '"ENCORE QUE" s\'utilise typiquement en FIN de phrase ou en INCISE, ajoutant une RÉSERVE ou une NUANCE à une affirmation déjà énoncée ("Le projet avance bien, ENCORE QU\'il faille des ajustements"). "BIEN QUE" structure généralement la phrase dès le DÉBUT, présentant la concession avant l\'affirmation principale.',
        },
        {
          id: 'b2-gram-02-ex17',
          type: 'qcm',
          question: '"Avoir beau" au présent : "Vous ___ protester, la décision est prise." (avoir beau)',
          options: ['avez beau', 'ayez beau', 'auriez beau', 'aviez beau'],
          correctIndex: 0,
          explanation: '"Vous AVEZ BEAU protester, la décision est prise." "Avoir beau" au présent (indicatif, pas subjonctif). "Avez" = avoir au présent (2ème pers. pl.) + "beau" + infinitif "protester".',
        },
        {
          id: 'b2-gram-02-ex18',
          type: 'qcm',
          question: 'Concession intensive avec nom : "Si bonnes ___ soient ses intentions, le résultat reste insuffisant."',
          options: ['que', 'qui', 'dont', 'où'],
          correctIndex: 0,
          explanation: '"Si bonnes QUE soient ses intentions..." Structure "si + adjectif + QUE + subjonctif" (concession intensive). "Que" est ici la conjonction obligatoire de cette structure, pas un pronom relatif.',
        },
        {
          id: 'b2-gram-02-ex19',
          type: 'qcm',
          question: 'Pourquoi le niveau B2 valorise-t-il la maîtrise de cette palette variée de connecteurs de concession (quoique, quand bien même, encore que, avoir beau, si...que) plutôt que le seul "bien que" ?',
          options: [
            'Parce que "bien que" est en réalité incorrect',
            'Parce que la variété et la précision des connecteurs employés témoignent d\'une maîtrise stylistique avancée et permettent de nuancer finement le DEGRÉ et la NATURE de la concession exprimée',
            'Parce que ces connecteurs n\'ont aucune différence de sens entre eux',
            'Parce que c\'est obligatoire d\'utiliser tous ces connecteurs dans chaque phrase',
          ],
          correctIndex: 1,
          explanation: 'La VARIÉTÉ et la PRÉCISION des connecteurs (chacun avec sa nuance propre : intensité, hypothèse, réserve après coup, effort vain) témoignent d\'une MAÎTRISE STYLISTIQUE AVANCÉE, permettant d\'exprimer des NUANCES de concession bien plus FINES qu\'avec le seul "bien que", répétitif et moins précis.',
        },
        {
          id: 'b2-gram-02-ex20',
          type: 'qcm',
          question: 'Récapitulatif : quelle structure utiliser pour exprimer "peu importe ce qui se passe, je continuerai" ?',
          options: [
            '"Quoique se passe, je continuerai." (incorrect)',
            '"Quoi qu\'il se passe, je continuerai."',
            '"Quand bien même se passe, je continuerai." (incorrect)',
            '"Avoir beau se passer, je continuerai." (incorrect)',
          ],
          correctIndex: 1,
          explanation: '"QUOI QU\'IL SE PASSE, je continuerai." "Quoi que" (deux mots) + subjonctif = whatever happens / peu importe ce qui se passe. Les autres options sont grammaticalement incorrectes (mauvaise structure ou mode verbal).',
        },
      ],
    },

    {
      id: 'b2-gram-03',
      slug: 'b2-discours-rapporte-avance',
      moduleSlug: 'b2-grammaire',
      level: 'B2',
      title: 'Le discours rapporté avancé',
      description: 'Maîtriser les nuances du discours rapporté au-delà des règles de base : modalisation et distance énonciative.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Rapporter la parole d'autrui avec nuance

Au niveau B2, rapporter les propos de quelqu'un implique davantage que la simple transformation temporelle (présent → imparfait, etc.) — il s'agit aussi de choisir le verbe introducteur et la structure qui reflètent fidèlement l'INTENTION du locuteur d'origine.

**Verbes introducteurs et leur nuance**
- "Il a affirmé que..." = certitude forte du locuteur
- "Il a suggéré que..." = proposition, sans certitude
- "Il a laissé entendre que..." = sous-entendu, rien d'explicite
- "Il a reconnu que..." = aveu, souvent après résistance
- "Il a nié que..." (+ subjonctif) = rejet d'une affirmation
- "Il a prétendu que..." = affirmation présentée avec doute par le rapporteur

**Le conditionnel pour l'information non vérifiée**
"Le ministre **aurait déclaré** que..." (on rapporte sans garantir la véracité)

**Le discours indirect libre** (sans verbe introducteur, fusion narrateur/personnage)
Plutôt que : "Il pensa qu'il avait eu raison de partir."
Le discours indirect libre : "Il avait eu raison de partir. Cela ne faisait aucun doute." (pas de "il pensa que" — la pensée du personnage se fond dans le récit)

**Garder la nuance modale du discours original**
Direct : "Peut-être viendra-t-il." → Indirect : "Il a dit qu'il **viendrait peut-être**." (la nuance d'incertitude doit être PRÉSERVÉE, pas neutralisée)`,

      linguisticPoint: `## Point linguistique : Le choix du verbe introducteur — une décision interprétative

### Pourquoi le choix du verbe introducteur n'est jamais neutre
Rapporter "il a dit que X" est neutre. Mais choisir "il a PRÉTENDU que X" introduit un DOUTE du rapporteur sur la véracité de X — une nuance absente du verbe "dire".

### Tableau de nuances
| Verbe | Nuance introduite |
|---|---|
| affirmer | certitude assumée par le locuteur |
| suggérer | proposition, ouverture |
| prétendre | doute du RAPPORTEUR sur la véracité |
| reconnaître | aveu (souvent après résistance) |
| nier | rejet (+ subjonctif souvent) |
| insinuer | sous-entendu critiquable |

### Le conditionnel journalistique (information non confirmée)
"Le suspect **aurait avoué** les faits." = on rapporte une information SANS la garantir, fréquent dans la presse pour des faits non encore confirmés officiellement.

### Subjonctif après "nier que"
"Il nie qu'il **ait commis** cette erreur." (nier que = doute/négation → subjonctif, comme "douter que")`,

      keyPoints: [
        'Le choix du verbe introducteur (affirmer/suggérer/prétendre/nier) n\'est jamais neutre — il reflète une interprétation',
        '"Prétendre que" = introduit un doute du RAPPORTEUR sur la véracité des propos rapportés',
        'Conditionnel journalistique : "il aurait déclaré que..." = information non confirmée',
        '"Nier que" + subjonctif (comme "douter que")',
        'Discours indirect libre = fusion narrateur/personnage, sans verbe introducteur explicite',
      ],

      exercises: [
        {
          id: 'b2-gram-03-ex01',
          type: 'qcm',
          question: 'Quelle nuance introduit le verbe "prétendre que" par rapport à "dire que" ?',
          options: [
            'Aucune nuance, ce sont des synonymes parfaits',
            'Un doute du rapporteur sur la véracité des propos rapportés',
            'Une certitude absolue',
            'Un compliment envers le locuteur',
          ],
          correctIndex: 1,
          explanation: '"Prétendre que" introduit un DOUTE du RAPPORTEUR (celui qui relate les propos) sur la véracité de ce qui est dit, contrairement à "dire que" qui reste NEUTRE. "Il prétend être innocent" suggère que le locuteur n\'est pas convaincu de cette innocence.',
        },
        {
          id: 'b2-gram-03-ex02',
          type: 'qcm',
          question: 'Subjonctif après "nier que" : "Il nie qu\'il ___ cette erreur." (commettre)',
          options: ['commet', 'commettra', 'ait commis', 'avait commis'],
          correctIndex: 2,
          explanation: '"Il nie qu\'il AIT COMMIS cette erreur." "Nier que" + subjonctif (comme "douter que", car nier introduit une forme de négation/doute). Subjonctif passé : "ait" (subjonctif présent d\'avoir) + "commis" (PP).',
        },
        {
          id: 'b2-gram-03-ex03',
          type: 'qcm',
          question: 'Conditionnel journalistique : "Le suspect ___ les faits, selon des sources proches de l\'enquête." (avouer)',
          options: ['avoue', 'avouera', 'aurait avoué', 'avouait'],
          correctIndex: 2,
          explanation: '"Le suspect AURAIT AVOUÉ les faits." Conditionnel passé pour une INFORMATION NON CONFIRMÉE officiellement. "Selon des sources" introduit déjà cette incertitude, renforcée par le conditionnel.',
        },
        {
          id: 'b2-gram-03-ex04',
          type: 'qcm',
          question: 'Quelle nuance introduit "il a laissé entendre que" par rapport à "il a affirmé que" ?',
          options: [
            'Aucune différence',
            'Un sous-entendu implicite, jamais formulé explicitement, par opposition à une affirmation claire et directe',
            'Une certitude plus forte',
            'Une question plutôt qu\'une affirmation',
          ],
          correctIndex: 1,
          explanation: '"Laisser entendre que" = suggérer de façon IMPLICITE, sans jamais l\'affirmer EXPLICITEMENT (sous-entendu). "Affirmer que" = déclarer CLAIREMENT et DIRECTEMENT. La différence porte sur le degré d\'explicite de la communication rapportée.',
        },
        {
          id: 'b2-gram-03-ex05',
          type: 'qcm',
          question: 'Que signifie le "discours indirect libre" ?',
          options: [
            'Un discours rapporté avec un verbe introducteur explicite ("il a dit que")',
            'Une technique narrative où la pensée du personnage se fond dans le récit, sans verbe introducteur explicite',
            'Un discours qui n\'est jamais rapporté',
            'Un discours uniquement oral',
          ],
          correctIndex: 1,
          explanation: 'Le DISCOURS INDIRECT LIBRE fait FUSIONNER la voix du narrateur et celle du personnage, SANS verbe introducteur explicite ("il pensa que"). La pensée du personnage est intégrée directement au récit, créant un effet de PROXIMITÉ avec sa perspective intérieure.',
        },
        {
          id: 'b2-gram-03-ex06',
          type: 'qcm',
          question: 'Préserver la nuance modale : "Peut-être viendra-t-il." → discours indirect, quelle transformation est correcte ?',
          options: [
            '"Il a dit qu\'il viendrait." (nuance perdue)',
            '"Il a dit qu\'il viendrait peut-être." (nuance préservée)',
            '"Il a dit qu\'il vient." (incorrect temporellement)',
            '"Il dit qu\'il sera venu." (incorrect)',
          ],
          correctIndex: 1,
          explanation: '"Il a dit qu\'il VIENDRAIT PEUT-ÊTRE." La nuance d\'INCERTITUDE de l\'original ("peut-être") doit être PRÉSERVÉE dans le discours indirect, pas seulement la transformation temporelle (futur → conditionnel). Perdre "peut-être" changerait le sens en une certitude.',
        },
        {
          id: 'b2-gram-03-ex07',
          type: 'qcm',
          question: 'Quel verbe introducteur convient pour "il a fini par admettre son erreur après l\'avoir niée longtemps" ?',
          options: ['suggérer', 'reconnaître', 'insinuer', 'prétendre'],
          correctIndex: 1,
          explanation: '"RECONNAÎTRE" = avouer, admettre, souvent APRÈS une RÉSISTANCE initiale (comme décrit : "après l\'avoir niée longtemps"). Ce verbe introducteur reflète précisément cette dynamique de reconnaissance tardive d\'un fait.',
        },
        {
          id: 'b2-gram-03-ex08',
          type: 'qcm',
          question: 'Pourquoi le choix du verbe introducteur dans le discours rapporté n\'est-il "jamais neutre" ?',
          options: [
            'Parce que tous les verbes introducteurs ont exactement le même sens',
            'Parce que chaque verbe (affirmer/suggérer/prétendre/nier...) ajoute une nuance interprétative du rapporteur sur la nature ou la véracité des propos rapportés',
            'Parce qu\'il est interdit d\'utiliser plusieurs verbes différents',
            'Parce que le discours rapporté n\'existe pas en français',
          ],
          correctIndex: 1,
          explanation: 'Chaque verbe introducteur AJOUTE une NUANCE INTERPRÉTATIVE du RAPPORTEUR : "prétendre" introduit un doute, "reconnaître" implique un aveu, "insinuer" suggère une critique implicite... Le choix du verbe n\'est donc jamais purement TECHNIQUE — il reflète un POSITIONNEMENT du rapporteur.',
        },
        {
          id: 'b2-gram-03-ex09',
          type: 'qcm',
          question: 'Conditionnel journalistique : "La réforme ___ adoptée dès l\'année prochaine, selon plusieurs sources gouvernementales." (être)',
          options: ['est', 'sera', 'serait', 'était'],
          correctIndex: 2,
          explanation: '"La réforme SERAIT adoptée..." Conditionnel présent pour une information NON OFFICIELLEMENT confirmée ("selon plusieurs sources"). Très fréquent dans le style journalistique pour rapporter des informations en attente de confirmation officielle.',
        },
        {
          id: 'b2-gram-03-ex10',
          type: 'qcm',
          question: 'Quelle nuance introduit "insinuer que" ?',
          options: [
            'Une affirmation directe et assumée',
            'Une suggestion implicite, souvent critique ou désobligeante, sans l\'affirmer ouvertement',
            'Une certitude absolue partagée par tous',
            'Une question neutre sans jugement',
          ],
          correctIndex: 1,
          explanation: '"Insinuer que" = suggérer de façon IMPLICITE quelque chose souvent CRITIQUE ou DÉSOBLIGEANT, sans l\'affirmer OUVERTEMENT (connotation souvent négative, proche de la médisance ou de l\'accusation voilée). Différent de "suggérer" qui peut être neutre ou positif.',
        },
        {
          id: 'b2-gram-03-ex11',
          type: 'qcm',
          question: 'Discours indirect libre : laquelle de ces phrases illustre cette technique narrative ?',
          options: [
            '"Il pensa qu\'il avait eu raison de partir."',
            '"Il avait eu raison de partir. Cela ne faisait aucun doute."',
            '"Il a dit : \'J\'ai eu raison de partir.\'"',
            '"On lui demanda s\'il avait eu raison de partir."',
          ],
          correctIndex: 1,
          explanation: '"Il avait eu raison de partir. Cela ne faisait aucun doute." illustre le DISCOURS INDIRECT LIBRE : la pensée du personnage est intégrée DIRECTEMENT au récit, SANS verbe introducteur ("il pensa que"), créant une FUSION entre la voix narrative et la perspective intérieure du personnage.',
        },
        {
          id: 'b2-gram-03-ex12',
          type: 'qcm',
          question: 'Subjonctif après "douter que" (rappel) vs nier que (nouveau point) : "Je doute qu\'il ___ la vérité, et il nie lui-même qu\'il ___ menti." (dire / avoir)',
          options: [
            'dise / ait',
            'dit / a',
            'dira / aura',
            'dirait / aurait',
          ],
          correctIndex: 0,
          explanation: '"Je doute qu\'il DISE la vérité, et il nie qu\'il AIT menti." Les deux structures ("douter que" et "nier que") déclenchent le SUBJONCTIF, l\'une au présent ("dise"), l\'autre au passé ("ait menti" — subjonctif passé pour une action antérieure).',
        },
        {
          id: 'b2-gram-03-ex13',
          type: 'qcm',
          question: 'Pourquoi un journaliste utiliserait-il "il aurait déclaré" plutôt que "il a déclaré" pour rapporter une information sensible ?',
          options: [
            'Les deux formulations sont strictement équivalentes',
            'Le conditionnel permet de rapporter l\'information sans en garantir personnellement la véracité, protégeant le journaliste en cas d\'erreur factuelle',
            '"Aurait déclaré" signifie que l\'information est totalement fausse',
            'Le conditionnel est une erreur grammaticale à éviter absolument',
          ],
          correctIndex: 1,
          explanation: 'Le CONDITIONNEL JOURNALISTIQUE permet de RAPPORTER une information SANS en GARANTIR personnellement la véracité — une précaution déontologique importante pour des informations SENSIBLES ou NON ENCORE confirmées officiellement, protégeant la responsabilité du journaliste en cas d\'inexactitude ultérieure.',
        },
        {
          id: 'b2-gram-03-ex14',
          type: 'qcm',
          question: 'Quel verbe introducteur convient le mieux pour "il a proposé une idée sans être sûr qu\'elle soit la meilleure" ?',
          options: ['affirmer', 'suggérer', 'nier', 'reconnaître'],
          correctIndex: 1,
          explanation: '"SUGGÉRER" = proposer une idée SANS CERTITUDE absolue, avec une certaine OUVERTURE à la discussion. C\'est le verbe le plus approprié pour décrire une proposition faite sans garantie de validité, contrairement à "affirmer" (certitude forte).',
        },
        {
          id: 'b2-gram-03-ex15',
          type: 'qcm',
          question: 'Transformation avec préservation modale : "Il viendra sûrement." → discours indirect approprié :',
          options: [
            '"Il a dit qu\'il viendrait." (nuance de certitude perdue)',
            '"Il a dit qu\'il viendrait sûrement." (nuance de certitude préservée)',
            '"Il a dit qu\'il vient." (incorrect temporellement)',
            '"Il dira qu\'il viendra." (incorrect)',
          ],
          correctIndex: 1,
          explanation: '"Il a dit qu\'il VIENDRAIT SÛREMENT." La nuance de CERTITUDE ("sûrement") de l\'original doit être PRÉSERVÉE dans la transformation, en plus du changement temporel classique (futur → conditionnel dans le discours indirect au passé).',
        },
        {
          id: 'b2-gram-03-ex16',
          type: 'qcm',
          question: 'Quelle est la différence de nuance entre "il a reconnu que" et "il a admis que" ?',
          options: [
            'Une différence fondamentale et opposée',
            'Une nuance très proche, les deux impliquant un aveu, parfois "reconnaître" suggérant une résistance plus marquée préalable',
            '"Admettre" signifie nier complètement',
            'Aucun rapport entre ces deux verbes',
          ],
          correctIndex: 1,
          explanation: '"RECONNAÎTRE" et "ADMETTRE" sont des SYNONYMES très PROCHES, impliquant tous deux un AVEU. "Reconnaître" peut parfois suggérer une RÉSISTANCE plus marquée au préalable (on reconnaît après avoir longtemps nié), alors qu\'"admettre" est plus neutre, mais cette nuance reste subtile et contextuelle.',
        },
        {
          id: 'b2-gram-03-ex17',
          type: 'qcm',
          question: 'Pourquoi est-il important, dans une synthèse de documents (cf. module Expression écrite), d\'utiliser des verbes introducteurs PRÉCIS plutôt que toujours "dire que" ?',
          options: [
            'Parce que "dire que" est grammaticalement incorrect',
            'Parce que des verbes précis (souligner, nuancer, contester...) permettent de restituer fidèlement la nature exacte des propos de chaque source, sans déformation ni simplification excessive',
            'Parce que c\'est plus court d\'utiliser "dire que" systématiquement',
            'Parce que cela n\'a aucune incidence sur la fidélité de la restitution',
          ],
          correctIndex: 1,
          explanation: 'Des verbes PRÉCIS (souligner, nuancer, contester, affirmer...) permettent de RESTITUER FIDÈLEMENT la NATURE EXACTE des propos rapportés (une affirmation ferme n\'est pas une simple suggestion), évitant toute DÉFORMATION ou SIMPLIFICATION excessive qui nuirait à la précision analytique attendue, notamment dans un exercice de synthèse.',
        },
        {
          id: 'b2-gram-03-ex18',
          type: 'qcm',
          question: 'Conditionnel journalistique passé : "Le gouvernement ___ pris cette décision dès la semaine dernière, selon des indiscrétions." (avoir)',
          options: ['a', 'aura', 'aurait', 'avait'],
          correctIndex: 2,
          explanation: '"Le gouvernement AURAIT pris cette décision..." Conditionnel passé pour une information NON CONFIRMÉE sur un événement déjà PASSÉ ("dès la semaine dernière"). "Selon des indiscrétions" introduit explicitement cette réserve sur la fiabilité de l\'information.',
        },
        {
          id: 'b2-gram-03-ex19',
          type: 'qcm',
          question: 'Quel est l\'effet stylistique recherché par le discours indirect libre dans un récit littéraire ?',
          options: [
            'Distancier complètement le lecteur de la pensée du personnage',
            'Créer une proximité avec la perspective intérieure du personnage, en fusionnant sa voix avec celle du narrateur, sans rupture explicite',
            'Rendre le texte plus difficile à comprendre sans aucun bénéfice',
            'Éviter complètement de parler des pensées du personnage',
          ],
          correctIndex: 1,
          explanation: 'Le discours indirect libre crée une PROXIMITÉ avec la PERSPECTIVE INTÉRIEURE du personnage, en FUSIONNANT sa voix avec celle du narrateur, SANS la rupture explicite qu\'introduirait un verbe comme "il pensa que". Cette technique permet un accès plus DIRECT et FLUIDE à la conscience du personnage.',
        },
        {
          id: 'b2-gram-03-ex20',
          type: 'qcm',
          question: 'En synthèse, quelle compétence avancée le maniement nuancé du discours rapporté développe-t-il, utile pour la rédaction de rapports ou synthèses ?',
          options: [
            'La simple mémorisation des règles de concordance des temps',
            'La capacité à restituer fidèlement la nature, le degré de certitude et l\'intention des propos d\'autrui, en choisissant judicieusement verbes introducteurs et structures modales',
            'La capacité à éviter complètement de rapporter les propos d\'autrui',
            'La capacité à toujours utiliser le même verbe introducteur pour simplifier',
          ],
          correctIndex: 1,
          explanation: 'Cette compétence consiste à RESTITUER FIDÈLEMENT la NATURE, le DEGRÉ de CERTITUDE et l\'INTENTION des propos d\'autrui, en choisissant JUDICIEUSEMENT les verbes introducteurs (affirmer/suggérer/prétendre...) et les structures MODALES (conditionnel journalistique, préservation des nuances). Compétence ESSENTIELLE pour la rédaction de synthèses, rapports ou comptes rendus fidèles et nuancés.',
        },
      ],
    },

    {
      id: 'b2-gram-04',
      slug: 'b2-nominalisation-avancee',
      moduleSlug: 'b2-grammaire',
      level: 'B2',
      title: 'La nominalisation avancée',
      description: 'Transformer des phrases complexes entières en groupes nominaux denses, typiques du style soutenu.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Pourquoi la nominalisation avancée structure le style soutenu

Au niveau B2, la nominalisation ne se limite plus à un seul verbe transformé en nom — elle permet de condenser des PHRASES ENTIÈRES (avec leurs compléments, sujets, circonstances) en groupes nominaux denses.

**Phrase verbale → groupe nominal complexe**
- Verbale : "Le gouvernement a décidé de réformer le système de retraites en 2023, ce qui a suscité de nombreuses manifestations."
- Nominalisée : "**La décision gouvernementale de réformer le système de retraites en 2023 a suscité de nombreuses manifestations.**"

**Transformer le sujet en complément du nom**
- Verbale : "Les chercheurs ont découvert ce phénomène récemment."
- Nominalisée : "**La découverte de ce phénomène par les chercheurs** est récente."

**Transformer une subordonnée causale en groupe nominal**
- Verbale : "Parce que les prix ont augmenté, la consommation a baissé."
- Nominalisée : "**L'augmentation des prix** a entraîné une baisse de la consommation."
(le verbe "entraîner" remplace la conjonction causale "parce que")

**Avantages stylistiques de la nominalisation avancée**
1. Densité informationnelle (plus d'information en moins de mots)
2. Neutralité énonciative (l'agent peut disparaître : "la décision" plutôt que "le gouvernement a décidé")
3. Registre soutenu, typique des textes administratifs, journalistiques et académiques`,

      linguisticPoint: `## Point linguistique : Les verbes "passe-partout" de la nominalisation

### Verbes qui remplacent les connecteurs logiques dans le style nominalisé
| Connecteur original | Verbe de substitution | Exemple |
|---|---|---|
| parce que / car | entraîner, provoquer, causer | "X **a entraîné** Y" |
| donc / par conséquent | aboutir à, déboucher sur | "X **a abouti à** Y" |
| pour que / afin que | viser à, avoir pour objectif de | "X **vise à** Y" |
| bien que | malgré (+ nom) | "**Malgré** X, Y" |
| si... alors | conditionner | "Y **est conditionné par** X" |

### Méthode de transformation en 3 étapes
1. Identifier le verbe principal de chaque proposition → le nominaliser
2. Identifier la relation logique entre les propositions (cause, conséquence...)
3. Remplacer la conjonction par un verbe ou une préposition appropriée

### Exemple complet de transformation
Verbale : "Parce que le chômage a augmenté, le gouvernement a décidé d'agir, ce qui a permis de créer des emplois."
Nominalisée : "**La hausse du chômage a entraîné une décision gouvernementale d'action, aboutissant à la création d'emplois.**"`,

      keyPoints: [
        'Nominalisation avancée = condenser une phrase entière (sujet+verbe+compléments) en groupe nominal',
        '"Entraîner/provoquer/causer" remplacent "parce que/car" en style nominalisé',
        '"Aboutir à/déboucher sur" remplacent "donc/par conséquent"',
        'Avantages : densité informationnelle + neutralité énonciative + registre soutenu',
        'Méthode : nominaliser chaque verbe → identifier la relation logique → substituer par un verbe/préposition',
      ],

      exercises: [
        {
          id: 'b2-gram-04-ex01',
          type: 'qcm',
          question: 'Nominalisez : "Parce que les prix ont augmenté, la consommation a baissé." →',
          options: [
            'La consommation a baissé parce que les prix.',
            'L\'augmentation des prix a entraîné une baisse de la consommation.',
            'Les prix ont entraîné la consommation.',
            'La baisse a augmenté les prix.',
          ],
          correctIndex: 1,
          explanation: '"L\'AUGMENTATION DES PRIX A ENTRAÎNÉ une BAISSE DE LA CONSOMMATION." Les deux verbes ("augmenter", "baisser") sont nominalisés ("augmentation", "baisse"), et "parce que" est remplacé par le verbe "entraîner" qui exprime la relation de cause à effet.',
        },
        {
          id: 'b2-gram-04-ex02',
          type: 'qcm',
          question: 'Quel verbe peut remplacer "donc/par conséquent" dans une transformation nominalisée ?',
          options: ['entraîner', 'aboutir à', 'viser à', 'malgré'],
          correctIndex: 1,
          explanation: '"ABOUTIR À" (ou "déboucher sur") remplace "donc/par conséquent" dans le style nominalisé, exprimant une CONSÉQUENCE. "Entraîner" correspond plutôt à "parce que/car" (cause), "viser à" à "pour que" (but).',
        },
        {
          id: 'b2-gram-04-ex03',
          type: 'qcm',
          question: 'Nominalisez : "Les chercheurs ont découvert ce phénomène récemment." →',
          options: [
            'Les chercheurs ont récemment.',
            'La découverte de ce phénomène par les chercheurs est récente.',
            'Ce phénomène a découvert les chercheurs.',
            'La récente est découverte par le phénomène.',
          ],
          correctIndex: 1,
          explanation: '"LA DÉCOUVERTE de ce phénomène PAR les chercheurs est récente." Le verbe "découvrir" devient "la découverte" (nom), avec le sujet original ("les chercheurs") transformé en complément introduit par "par" (passif implicite dans la nominalisation).',
        },
        {
          id: 'b2-gram-04-ex04',
          type: 'qcm',
          question: 'Quel est l\'un des AVANTAGES stylistiques de la nominalisation avancée mentionnés dans le texte ?',
          options: [
            'Elle rend le texte plus long et répétitif',
            'Elle permet une plus grande densité informationnelle et une neutralité énonciative possible',
            'Elle empêche toute communication claire',
            'Elle est réservée uniquement à la poésie',
          ],
          correctIndex: 1,
          explanation: 'La nominalisation avancée permet une plus grande DENSITÉ INFORMATIONNELLE (plus d\'information condensée en moins de mots) et une NEUTRALITÉ ÉNONCIATIVE (l\'agent peut disparaître : "la décision" plutôt que "le gouvernement a décidé"), ce qui explique son usage fréquent dans les registres formels (administratif, journalistique, académique).',
        },
        {
          id: 'b2-gram-04-ex05',
          type: 'qcm',
          question: 'Quel verbe peut remplacer "pour que/afin que" dans une transformation nominalisée ?',
          options: ['entraîner', 'aboutir à', 'viser à', 'malgré'],
          correctIndex: 2,
          explanation: '"VISER À" (ou "avoir pour objectif de") remplace "pour que/afin que" dans le style nominalisé, exprimant un BUT. "Cette réforme VISE À simplifier les démarches" = cette réforme a pour but de simplifier.',
        },
        {
          id: 'b2-gram-04-ex06',
          type: 'qcm',
          question: 'Nominalisez la concession : "Bien que le projet soit ambitieux, il a été approuvé." →',
          options: [
            'Bien que approuvé, le projet est ambitieux.',
            'Malgré son ambition, le projet a été approuvé.',
            'L\'ambition a malgré approuvé le projet.',
            'Le projet malgré a son ambition approuvé.',
          ],
          correctIndex: 1,
          explanation: '"MALGRÉ son ambition, le projet a été approuvé." "Bien que" + adjectif est remplacé par "MALGRÉ + nom" ("ambition" = nominalisation de "ambitieux"). Structure typique de concession nominalisée en style soutenu.',
        },
        {
          id: 'b2-gram-04-ex07',
          type: 'qcm',
          question: 'Étape 1 de la méthode de transformation : que doit-on faire en premier ?',
          options: [
            'Ajouter des adjectifs supplémentaires',
            'Identifier le verbe principal de chaque proposition pour le nominaliser',
            'Supprimer toutes les conjonctions sans les remplacer',
            'Traduire la phrase dans une autre langue',
          ],
          correctIndex: 1,
          explanation: 'La première ÉTAPE de la méthode consiste à IDENTIFIER le VERBE PRINCIPAL de chaque proposition pour le NOMINALISER (transformer en nom). C\'est la base de toute transformation : sans cette identification, il est impossible de construire le groupe nominal central.',
        },
        {
          id: 'b2-gram-04-ex08',
          type: 'qcm',
          question: 'Quel verbe exprime la relation "si... alors" dans une transformation nominalisée ?',
          options: ['entraîner', 'viser à', 'conditionner', 'malgré'],
          correctIndex: 2,
          explanation: '"CONDITIONNER" exprime la relation "si... alors" (conditionnelle) dans le style nominalisé. "Y EST CONDITIONNÉ PAR X" = Y dépend de X / si X alors Y. Verbe technique précis pour exprimer cette relation logique de dépendance.',
        },
        {
          id: 'b2-gram-04-ex09',
          type: 'qcm',
          question: 'Nominalisation complexe : "Parce que le chômage a augmenté, le gouvernement a décidé d\'agir, ce qui a permis de créer des emplois." → version nominalisée complète :',
          options: [
            'Le chômage a créé des emplois grâce au gouvernement.',
            'La hausse du chômage a entraîné une décision gouvernementale d\'action, aboutissant à la création d\'emplois.',
            'Le gouvernement a chômé et créé.',
            'La décision du chômage a entraîné le gouvernement.',
          ],
          correctIndex: 1,
          explanation: '"La HAUSSE du chômage A ENTRAÎNÉ une DÉCISION gouvernementale d\'action, ABOUTISSANT à la CRÉATION d\'emplois." Cette version condense LES TROIS propositions originales (cause, décision, conséquence) en une seule phrase nominalisée DENSE, utilisant "entraîner" (cause) et "aboutir à/aboutissant à" (conséquence).',
        },
        {
          id: 'b2-gram-04-ex10',
          type: 'qcm',
          question: 'Pourquoi la nominalisation permet-elle une "neutralité énonciative" — que signifie cette expression ?',
          options: [
            'Le texte devient toujours plus émotionnel',
            'L\'identité de l\'agent (qui fait l\'action) peut être effacée ou minimisée, donnant un ton plus impersonnel et objectif au texte',
            'Le texte devient incompréhensible',
            'La neutralité énonciative n\'a aucun rapport avec la nominalisation',
          ],
          correctIndex: 1,
          explanation: 'La "neutralité ÉNONCIATIVE" signifie que l\'identité de l\'AGENT (qui fait l\'action) peut être EFFACÉE ou MINIMISÉE dans la version nominalisée ("la décision" plutôt que "le gouvernement A DÉCIDÉ"), donnant un ton plus IMPERSONNEL et OBJECTIF, typique des textes administratifs ou journalistiques qui privilégient les faits sur les acteurs.',
        },
        {
          id: 'b2-gram-04-ex11',
          type: 'qcm',
          question: 'Nominalisez : "Le ministre a annoncé une réforme, ce qui a provoqué une grève." →',
          options: [
            'Le ministre a grève la réforme.',
            'L\'annonce d\'une réforme par le ministre a provoqué une grève.',
            'La grève a annoncé le ministre.',
            'Une réforme a annoncé une grève au ministre.',
          ],
          correctIndex: 1,
          explanation: '"L\'ANNONCE d\'une réforme PAR le ministre a provoqué une grève." Le verbe "annoncer" devient "l\'annonce" (nom), avec le sujet "le ministre" transformé en complément ("par le ministre"). "Provoquer" reste tel quel ici (déjà un verbe de cause directe).',
        },
        {
          id: 'b2-gram-04-ex12',
          type: 'qcm',
          question: 'Quelle est la fonction de "déboucher sur" comme synonyme d\'"aboutir à" ?',
          options: [
            'Exprimer une cause',
            'Exprimer une conséquence ou un résultat final d\'un processus',
            'Exprimer un but',
            'Exprimer une concession',
          ],
          correctIndex: 1,
          explanation: '"DÉBOUCHER SUR" = aboutir à, mener à un RÉSULTAT FINAL (image du débouché, de l\'issue d\'un processus). Synonyme d\'"aboutir à", il exprime une CONSÉQUENCE ou un RÉSULTAT, souvent après un processus plus ou moins long ou complexe.',
        },
        {
          id: 'b2-gram-04-ex13',
          type: 'qcm',
          question: 'Étape 2 de la méthode : pourquoi est-il essentiel d\'identifier la RELATION LOGIQUE entre les propositions avant de nominaliser ?',
          options: [
            'Ce n\'est pas une étape nécessaire',
            'Parce que le choix du verbe ou de la préposition de substitution dépend directement de cette relation (cause, conséquence, but, concession...)',
            'Parce que toutes les relations logiques utilisent le même verbe',
            'Pour rendre le texte plus long artificiellement',
          ],
          correctIndex: 1,
          explanation: 'Le CHOIX du verbe ou de la préposition de SUBSTITUTION ("entraîner" pour cause, "aboutir à" pour conséquence, "viser à" pour but, "malgré" pour concession) DÉPEND DIRECTEMENT de la RELATION LOGIQUE identifiée entre les propositions. Sans cette identification préalable, le choix du connecteur nominalisé serait arbitraire et potentiellement incorrect.',
        },
        {
          id: 'b2-gram-04-ex14',
          type: 'qcm',
          question: 'Nominalisez le but : "Le gouvernement agit pour que le chômage diminue." →',
          options: [
            'Le gouvernement diminue le chômage.',
            'L\'action gouvernementale vise à la diminution du chômage.',
            'Le chômage agit pour le gouvernement.',
            'Pour que le gouvernement, le chômage diminue.',
          ],
          correctIndex: 1,
          explanation: '"L\'ACTION gouvernementale VISE À la DIMINUTION du chômage." "Agir" → "l\'action" (nom), "pour que" → "viser à" (verbe de but), "diminuer" → "la diminution" (nom). Transformation complète respectant la relation de BUT initiale.',
        },
        {
          id: 'b2-gram-04-ex15',
          type: 'qcm',
          question: 'Dans quels types de textes la nominalisation avancée est-elle particulièrement fréquente ?',
          options: [
            'Uniquement dans les textes de fiction pour enfants',
            'Dans les textes administratifs, journalistiques et académiques, où le registre soutenu et la densité informationnelle sont valorisés',
            'Uniquement dans les SMS et messages informels',
            'Uniquement dans la poésie lyrique',
          ],
          correctIndex: 1,
          explanation: 'La nominalisation avancée est particulièrement fréquente dans les textes ADMINISTRATIFS, JOURNALISTIQUES et ACADÉMIQUES, où le REGISTRE SOUTENU et la DENSITÉ INFORMATIONNELLE sont valorisés — par opposition aux textes informels ou littéraires narratifs qui privilégient souvent un style plus verbal et dynamique.',
        },
        {
          id: 'b2-gram-04-ex16',
          type: 'qcm',
          question: 'Nominalisez la conditionnelle : "Si les taux d\'intérêt baissent, l\'investissement augmentera." →',
          options: [
            'Les taux augmentent l\'investissement.',
            'L\'augmentation de l\'investissement est conditionnée par la baisse des taux d\'intérêt.',
            'L\'investissement baisse les taux.',
            'Si l\'augmentation, les taux conditionnent.',
          ],
          correctIndex: 1,
          explanation: '"L\'AUGMENTATION de l\'investissement est CONDITIONNÉE PAR la BAISSE des taux d\'intérêt." "Si... alors" devient "être conditionné par", exprimant la relation de DÉPENDANCE conditionnelle entre les deux phénomènes nominalisés.',
        },
        {
          id: 'b2-gram-04-ex17',
          type: 'qcm',
          question: 'Pourquoi un texte purement nominalisé peut-il paraître "froid" ou "impersonnel" à la lecture ?',
          options: [
            'Parce que la nominalisation rend le texte toujours plus chaleureux',
            'Parce qu\'en effaçant les agents humains au profit de processus abstraits (la décision, l\'augmentation...), le texte perd une partie de sa dimension humaine et narrative',
            'Parce que la nominalisation est interdite en français',
            'Parce que cela n\'a aucun effet stylistique particulier',
          ],
          correctIndex: 1,
          explanation: 'En EFFAÇANT les AGENTS humains au profit de PROCESSUS ABSTRAITS ("la décision" plutôt que "le gouvernement a décidé"), le texte perd une partie de sa DIMENSION HUMAINE et NARRATIVE, ce qui explique l\'effet parfois "froid" ou "impersonnel" ressenti dans les textes très nominalisés (rapports techniques, communiqués officiels).',
        },
        {
          id: 'b2-gram-04-ex18',
          type: 'qcm',
          question: 'Nominalisez : "Les scientifiques ont alerté sur le réchauffement climatique, ce qui a entraîné des politiques environnementales." →',
          options: [
            'Le climat a alerté les scientifiques.',
            'L\'alerte des scientifiques sur le réchauffement climatique a entraîné l\'adoption de politiques environnementales.',
            'Les politiques environnementales ont réchauffé le climat.',
            'Le réchauffement a entraîné les scientifiques.',
          ],
          correctIndex: 1,
          explanation: '"L\'ALERTE des scientifiques sur le RÉCHAUFFEMENT climatique a entraîné l\'ADOPTION de POLITIQUES environnementales." Trois verbes nominalisés ("alerter"→"l\'alerte", "réchauffer"→"le réchauffement", "adopter"→"l\'adoption"), reliés par "entraîner" (cause→conséquence).',
        },
        {
          id: 'b2-gram-04-ex19',
          type: 'qcm',
          question: 'Quelle compétence rédactionnelle avancée la maîtrise de la nominalisation développe-t-elle particulièrement, utile pour les écrits académiques ou professionnels ?',
          options: [
            'La capacité à écrire uniquement des phrases très courtes et simples',
            'La capacité à condenser une information complexe en une syntaxe dense et soutenue, typique des écrits académiques, journalistiques et administratifs de haut niveau',
            'La capacité à éviter complètement les verbes',
            'La capacité à toujours utiliser le même connecteur logique',
          ],
          correctIndex: 1,
          explanation: 'Cette compétence consiste à CONDENSER une INFORMATION COMPLEXE (plusieurs propositions liées par des relations logiques) en une SYNTAXE DENSE et SOUTENUE, typique des écrits ACADÉMIQUES, JOURNALISTIQUES et ADMINISTRATIFS de haut niveau — une compétence rédactionnelle TRANSFÉRABLE et très valorisée professionnellement.',
        },
        {
          id: 'b2-gram-04-ex20',
          type: 'qcm',
          question: 'Pour bien maîtriser la nominalisation avancée, quelle pratique est la plus recommandée ?',
          options: [
            'Mémoriser une liste de noms sans jamais les utiliser en contexte',
            'S\'entraîner régulièrement à transformer des phrases verbales complexes en groupes nominaux, en identifiant systématiquement la relation logique sous-jacente avant de choisir le connecteur nominalisé approprié',
            'Éviter complètement la nominalisation pour simplifier l\'apprentissage',
            'Utiliser la nominalisation uniquement à l\'oral',
          ],
          correctIndex: 1,
          explanation: 'La pratique la plus EFFICACE consiste à S\'ENTRAÎNER RÉGULIÈREMENT à TRANSFORMER des phrases verbales COMPLEXES en groupes nominaux, en suivant systématiquement la MÉTHODE en 3 étapes : nominaliser les verbes, identifier la relation logique, choisir le connecteur NOMINALISÉ approprié (entraîner/aboutir à/viser à/malgré/conditionner).',
        },
      ],
    },

    {
      id: 'b2-gram-05',
      slug: 'b2-subjonctif-passe-concordance',
      moduleSlug: 'b2-grammaire',
      level: 'B2',
      title: 'Le subjonctif passé et la concordance',
      description: 'Maîtriser précisément quand utiliser le subjonctif présent ou passé selon la chronologie des actions.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Subjonctif présent ou passé — une question de chronologie

Au niveau B2, il faut savoir choisir avec précision entre le SUBJONCTIF PRÉSENT et le SUBJONCTIF PASSÉ selon que l'action de la subordonnée est SIMULTANÉE/FUTURE ou ANTÉRIEURE par rapport au verbe principal.

**Subjonctif présent : action simultanée ou future par rapport au verbe principal**
"Je doute qu'il **vienne** demain." (le doute porte sur une action future)
"Je suis content qu'elle **soit** là maintenant." (action simultanée)

**Subjonctif passé : action antérieure par rapport au verbe principal**
"Je doute qu'il **soit venu** hier." (le doute porte sur une action déjà passée)
"Je suis content qu'elle **ait réussi** son examen." (la réussite a eu lieu avant le sentiment exprimé)

**Piège classique : le temps du verbe PRINCIPAL n'influence PAS le choix**
Même si le verbe principal est au passé, le subjonctif peut rester au PRÉSENT si l'action de la subordonnée n'est pas antérieure :
"J'étais content qu'elle **soit** là." (= au moment décrit, elle était présente — simultanéité, pas antériorité)
"J'étais content qu'elle **soit venue** la semaine précédente." (= antériorité par rapport au moment décrit)

**Le subjonctif plus-que-parfait (littéraire, à reconnaître)**
Dans la littérature classique : "Je doutais qu'il **fût venu**." (= équivalent littéraire du subjonctif passé, rarement utilisé aujourd'hui sauf à l'écrit très soutenu ou ancien)`,

      linguisticPoint: `## Point linguistique : Le test de l'antériorité pour choisir le subjonctif

### Méthode pratique : se poser la question "quand cela s'est-il passé ?"
1. L'action de la subordonnée a-t-elle lieu APRÈS ou EN MÊME TEMPS que le sentiment/jugement exprimé ? → SUBJONCTIF PRÉSENT
2. L'action de la subordonnée a-t-elle eu lieu AVANT le sentiment/jugement exprimé ? → SUBJONCTIF PASSÉ

### Exemples comparatifs
| Phrase | Temps de la subordonnée | Choix |
|---|---|---|
| "Je crains qu'il **parte**." | action future | subjonctif présent |
| "Je crains qu'il **soit parti**." | action déjà passée | subjonctif passé |
| "Il est possible qu'elle **vienne**." | action future/incertaine | subjonctif présent |
| "Il est possible qu'elle **soit venue**." | action déjà passée, incertaine | subjonctif passé |

### Formation rapide du subjonctif passé (rappel)
avoir/être (subjonctif PRÉSENT, pas passé) + participe passé
⚠️ Erreur fréquente : ne jamais dire "qu'il ait été parti" (incorrect) — la forme correcte est "qu'il soit parti" (être au subjonctif présent + PP)`,

      keyPoints: [
        'Subjonctif présent = action simultanée ou future par rapport au verbe principal',
        'Subjonctif passé = action antérieure par rapport au verbe principal (avoir/être subj. présent + PP)',
        'Le temps du verbe PRINCIPAL n\'impose PAS automatiquement le temps du subjonctif',
        'Test pratique : "quand cela s\'est-il passé ?" par rapport au sentiment/jugement exprimé',
        'Subjonctif plus-que-parfait (fût venu) = forme littéraire rare, à reconnaître seulement',
      ],

      exercises: [
        {
          id: 'b2-gram-05-ex01',
          type: 'qcm',
          question: 'Choisir le subjonctif : "Je doute qu\'il ___ demain." (venir, action future)',
          options: ['vienne', 'soit venu', 'vînt', 'venait'],
          correctIndex: 0,
          explanation: '"Je doute qu\'il VIENNE demain." Action FUTURE par rapport au moment du doute → SUBJONCTIF PRÉSENT. "Vienne" = subjonctif présent (irrégulier) de "venir".',
        },
        {
          id: 'b2-gram-05-ex02',
          type: 'qcm',
          question: 'Choisir le subjonctif : "Je doute qu\'il ___ hier." (venir, action passée)',
          options: ['vienne', 'soit venu', 'vînt', 'venait'],
          correctIndex: 1,
          explanation: '"Je doute qu\'il SOIT VENU hier." Action PASSÉE (antérieure) par rapport au moment du doute → SUBJONCTIF PASSÉ. "Venir" = verbe être → "soit" (subjonctif présent d\'être) + "venu" (PP).',
        },
        {
          id: 'b2-gram-05-ex03',
          type: 'qcm',
          question: 'Piège : "J\'étais content qu\'elle ___ là." (être, simultanéité avec le moment décrit au passé)',
          options: ['soit', 'ait été', 'fût', 'était'],
          correctIndex: 0,
          explanation: '"J\'étais content qu\'elle SOIT là." Même si le verbe PRINCIPAL est au passé ("j\'étais"), la subordonnée reste au SUBJONCTIF PRÉSENT car l\'action (être là) est SIMULTANÉE au moment décrit, pas antérieure.',
        },
        {
          id: 'b2-gram-05-ex04',
          type: 'qcm',
          question: 'Antériorité par rapport au passé : "J\'étais content qu\'elle ___ la semaine précédente." (venir)',
          options: ['vienne', 'soit venue', 'vînt', 'venait'],
          correctIndex: 1,
          explanation: '"J\'étais content qu\'elle SOIT VENUE la semaine précédente." Ici, l\'action (venir) est ANTÉRIEURE au moment décrit ("la semaine précédente" par rapport à "j\'étais content") → SUBJONCTIF PASSÉ malgré le verbe principal à l\'imparfait.',
        },
        {
          id: 'b2-gram-05-ex05',
          type: 'qcm',
          question: 'Test de l\'antériorité : "Il est possible qu\'elle ___ déjà partie." (être, action probablement déjà accomplie)',
          options: ['soit', 'ait été', 'fût', 'était'],
          correctIndex: 1,
          explanation: '"Il est possible qu\'elle AIT ÉTÉ déjà partie." Action ANTÉRIEURE (elle est déjà partie, probablement) → subjonctif PASSÉ. "Ait été" = avoir (subjonctif présent) + "été" (PP d\'être).',
        },
        {
          id: 'b2-gram-05-ex06',
          type: 'qcm',
          question: 'Quelle est l\'erreur dans la phrase incorrecte "qu\'il ait été parti" ?',
          options: [
            'Il n\'y a aucune erreur',
            'La forme correcte du subjonctif passé de "partir" (verbe être) est "qu\'il soit parti", pas "qu\'il ait été parti"',
            'Il faut dire "qu\'il a été parti"',
            'Il faut dire "qu\'il serait parti"',
          ],
          correctIndex: 1,
          explanation: 'La forme CORRECTE du subjonctif passé de "partir" (verbe ÊTRE) est "QU\'IL SOIT PARTI" (être au subjonctif présent + PP), PAS "qu\'il ait été parti" (qui mélangerait incorrectement avoir + été + parti). Erreur fréquente à corriger.',
        },
        {
          id: 'b2-gram-05-ex07',
          type: 'qcm',
          question: 'Subjonctif présent (action future/incertaine) : "Il est possible qu\'elle ___ ." (venir, action à venir)',
          options: ['vienne', 'soit venue', 'vînt', 'venait'],
          correctIndex: 0,
          explanation: '"Il est possible qu\'elle VIENNE." Action FUTURE/incertaine, pas encore réalisée → SUBJONCTIF PRÉSENT. "Vienne" = subjonctif présent de "venir".',
        },
        {
          id: 'b2-gram-05-ex08',
          type: 'qcm',
          question: 'Sentiment + antériorité : "Je suis content qu\'elle ___ son examen." (réussir, action déjà accomplie)',
          options: ['réussisse', 'ait réussi', 'réussît', 'réussissait'],
          correctIndex: 1,
          explanation: '"Je suis content qu\'elle AIT RÉUSSI son examen." La réussite a eu lieu AVANT le sentiment exprimé (content) → SUBJONCTIF PASSÉ. "Ait réussi" = avoir (subjonctif présent) + "réussi" (PP).',
        },
        {
          id: 'b2-gram-05-ex09',
          type: 'qcm',
          question: 'Quel est le test pratique recommandé pour choisir entre subjonctif présent et passé ?',
          options: [
            'Regarder uniquement le temps du verbe principal',
            'Se demander si l\'action de la subordonnée a lieu avant (passé) ou en même temps/après (présent) le sentiment/jugement exprimé',
            'Toujours utiliser le subjonctif présent par défaut',
            'Le choix est totalement aléatoire',
          ],
          correctIndex: 1,
          explanation: 'Le test PRATIQUE consiste à se demander QUAND l\'action de la SUBORDONNÉE a lieu PAR RAPPORT au sentiment/jugement exprimé : ANTÉRIEURE → subjonctif PASSÉ / SIMULTANÉE ou FUTURE → subjonctif PRÉSENT. Le temps du verbe PRINCIPAL n\'est PAS le critère déterminant.',
        },
        {
          id: 'b2-gram-05-ex10',
          type: 'qcm',
          question: 'Le subjonctif plus-que-parfait ("qu\'il fût venu") est :',
          options: [
            'La forme standard moderne du subjonctif passé',
            'Une forme littéraire rare, équivalent ancien du subjonctif passé, à reconnaître plutôt qu\'à utiliser activement',
            'Une erreur grammaticale toujours incorrecte',
            'Une forme du subjonctif présent',
          ],
          correctIndex: 1,
          explanation: 'Le subjonctif PLUS-QUE-PARFAIT ("qu\'il fût venu") est une forme LITTÉRAIRE RARE, équivalent ANCIEN du subjonctif passé moderne ("qu\'il soit venu"). Au niveau B2, il faut savoir la RECONNAÎTRE à la lecture (textes classiques) plutôt que l\'utiliser activement à l\'oral ou à l\'écrit courant.',
        },
        {
          id: 'b2-gram-05-ex11',
          type: 'qcm',
          question: 'Subjonctif passé avec "craindre que" : "Je crains qu\'il ___ déjà ." (partir)',
          options: ['parte', 'soit parti', 'partît', 'partait'],
          correctIndex: 1,
          explanation: '"Je crains qu\'il SOIT déjà PARTI." "Déjà" signale une action ANTÉRIEURE et probablement ACCOMPLIE → subjonctif PASSÉ. "Partir" = verbe être → "soit" + "parti" (PP).',
        },
        {
          id: 'b2-gram-05-ex12',
          type: 'qcm',
          question: 'Subjonctif présent avec sentiment au passé mais action simultanée : "J\'avais peur qu\'il ___ malade." (être, à ce moment précis)',
          options: ['soit', 'ait été', 'fût', 'était'],
          correctIndex: 0,
          explanation: '"J\'avais peur qu\'il SOIT malade." Même si "avais peur" est à l\'imparfait, l\'action décrite (être malade) est SIMULTANÉE au moment de la peur, pas antérieure → SUBJONCTIF PRÉSENT reste correct (pas "ait été").',
        },
        {
          id: 'b2-gram-05-ex13',
          type: 'qcm',
          question: 'Subjonctif passé : "Il est regrettable que vous ___ pas pu venir hier." (ne pouvoir)',
          options: ['ne puissiez', 'n\'ayez pu', 'ne pussiez', 'ne pouviez'],
          correctIndex: 1,
          explanation: '"Il est regrettable que vous N\'AYEZ PAS PU venir hier." Action PASSÉE ("hier") → subjonctif PASSÉ négatif. "N\'ayez pas pu" = avoir (subjonctif présent, négatif) + "pu" (PP de "pouvoir").',
        },
        {
          id: 'b2-gram-05-ex14',
          type: 'qcm',
          question: 'Quelle est la différence de sens entre "je doute qu\'il vienne" et "je doute qu\'il soit venu" ?',
          options: [
            'Aucune différence de sens',
            'La première phrase exprime un doute sur une venue FUTURE, la seconde sur une venue déjà PASSÉE (possiblement déjà arrivée ou non)',
            'Les deux phrases parlent du futur',
            'Les deux phrases parlent du passé',
            ],
          correctIndex: 1,
          explanation: '"Je doute qu\'il VIENNE" (subjonctif présent) = doute sur une venue FUTURE, pas encore réalisée. "Je doute qu\'il SOIT VENU" (subjonctif passé) = doute sur le fait qu\'il soit déjà arrivé, action qui aurait dû se produire DANS LE PASSÉ. La différence temporelle change significativement le sens de la phrase.',
        },
        {
          id: 'b2-gram-05-ex15',
          type: 'qcm',
          question: 'Subjonctif passé après "bien que" : "Bien qu\'il ___ beaucoup d\'efforts, il n\'a pas réussi." (faire)',
          options: ['fasse', 'ait fait', 'fît', 'faisait'],
          correctIndex: 1,
          explanation: '"Bien qu\'il AIT FAIT beaucoup d\'efforts, il n\'a pas réussi." Les efforts ont été faits AVANT le constat de non-réussite → subjonctif PASSÉ. "Ait fait" = avoir (subjonctif présent) + "fait" (PP de "faire").',
        },
        {
          id: 'b2-gram-05-ex16',
          type: 'qcm',
          question: 'Quelle erreur commettrait-on en disant "je suis content qu\'elle vienne" pour parler d\'une action DÉJÀ accomplie hier ?',
          options: [
            'Aucune erreur, la phrase serait correcte dans tous les contextes',
            'Une erreur de temps : il faudrait utiliser le subjonctif passé "qu\'elle soit venue" pour une action déjà accomplie',
            'Une erreur de mode : il faudrait l\'indicatif',
            'Une erreur d\'accord du participe passé',
          ],
          correctIndex: 1,
          explanation: 'Pour une action DÉJÀ accomplie (hier), il faut le SUBJONCTIF PASSÉ : "je suis content qu\'elle SOIT VENUE [hier]." Utiliser le subjonctif PRÉSENT ("qu\'elle vienne") suggérerait à tort une action FUTURE ou habituelle, ce qui contredirait le contexte temporel réel.',
        },
        {
          id: 'b2-gram-05-ex17',
          type: 'qcm',
          question: 'Subjonctif passé avec accord : "Voici les documents qu\'il faut que vous ___ ." (avoir reçu, accord COD féminin pluriel "les documents")',
          options: ['ayez reçu', 'ayez reçus', 'ayez reçue', 'ayez reçues'],
          correctIndex: 1,
          explanation: '"Voici les documents qu\'il faut que vous AYEZ REÇUS." Subjonctif passé : "ayez" (avoir, subjonctif présent) + "reçus" (PP accordé masculin pluriel avec "les documents", COD placé avant le verbe via le pronom relatif "que").',
        },
        {
          id: 'b2-gram-05-ex18',
          type: 'qcm',
          question: 'Pourquoi cette distinction subjonctif présent/passé est-elle considérée comme un point grammatical de niveau B2 plutôt que B1 ?',
          options: [
            'Parce qu\'elle ne suit aucune règle logique',
            'Parce qu\'elle exige une analyse fine de la chronologie relative entre deux actions, indépendamment du temps du verbe principal — une nuance plus subtile que la simple formation de base du subjonctif',
            'Parce qu\'elle est plus simple que les règles de base du subjonctif déjà vues en B1',
            'Parce qu\'elle ne s\'applique jamais en pratique',
          ],
          correctIndex: 1,
          explanation: 'Cette distinction exige une ANALYSE FINE de la CHRONOLOGIE RELATIVE entre l\'action de la subordonnée et le sentiment/jugement exprimé, INDÉPENDAMMENT du temps du verbe PRINCIPAL — une nuance plus SUBTILE que la simple FORMATION de base du subjonctif (déjà acquise au niveau B1), justifiant son statut de point AVANCÉ.',
        },
        {
          id: 'b2-gram-05-ex19',
          type: 'qcm',
          question: 'Subjonctif passé : "Nous sommes surpris que les négociations ___ aussi rapidement." (aboutir, hier)',
          options: ['aboutissent', 'aient abouti', 'aboutissaient', 'aboutiraient'],
          correctIndex: 1,
          explanation: '"Nous sommes surpris que les négociations AIENT ABOUTI aussi rapidement." Action ANTÉRIEURE et déjà accomplie (les négociations ont déjà abouti) → subjonctif PASSÉ. "Aient abouti" = avoir (subjonctif présent, 3ème pers. pl.) + "abouti" (PP).',
        },
        {
          id: 'b2-gram-05-ex20',
          type: 'qcm',
          question: 'En synthèse, quelle compétence grammaticale fine ce point illustre-t-il, essentielle pour une expression précise au niveau B2 ?',
          options: [
            'La capacité à toujours utiliser le subjonctif présent par défaut sans réflexion',
            'La capacité à analyser la chronologie réelle des événements décrits, indépendamment du temps du verbe principal, pour choisir le subjonctif approprié et exprimer avec précision la temporalité',
            'La capacité à éviter complètement le subjonctif',
            'La capacité à mémoriser les conjugaisons sans comprendre leur logique d\'emploi',
          ],
          correctIndex: 1,
          explanation: 'Cette compétence consiste à ANALYSER la CHRONOLOGIE RÉELLE des événements décrits (qu\'est-ce qui s\'est passé avant, en même temps, ou après ?), INDÉPENDAMMENT du temps du verbe PRINCIPAL, pour choisir le SUBJONCTIF approprié et exprimer avec PRÉCISION la temporalité — une compétence ESSENTIELLE pour une expression nuancée et grammaticalement rigoureuse au niveau B2.',
        },
      ],
    },
  ],
};
