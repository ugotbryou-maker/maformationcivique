import type { LangModule } from '../types';

export const a2Conjugaison: LangModule = {
  id: 'a2-mod-08',
  slug: 'a2-conjugaison',
  level: 'A2',
  title: 'Conjugaison fondamentale',
  subtitle: 'Présent irrégulier, passé composé, imparfait, futur proche',
  description: 'Maîtrisez les temps essentiels de la conjugaison française pour parler du présent, du passé et du futur.',
  type: 'conjugaison',
  emoji: '⏱️',
  free: false,
  lessons: [
    {
      id: 'a2-co-01',
      slug: 'a2-present-irreguliers',
      moduleSlug: 'a2-conjugaison',
      level: 'A2',
      title: 'Le présent des verbes irréguliers',
      description: 'Conjuguez les verbes irréguliers les plus fréquents : être, avoir, aller, faire, pouvoir, vouloir, savoir, venir.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Les verbes irréguliers en contexte

En français, les verbes irréguliers les plus fréquents sont aussi les plus utilisés. Il est impossible de bien communiquer sans les maîtriser.

**Être** et **avoir** sont les deux piliers de la langue française — ils servent de verbes auxiliaires pour former tous les temps composés.

**Aller** est le verbe de déplacement par excellence, mais aussi de santé ("Comment tu vas ?") et du futur proche ("Je vais partir").

**Faire** est le verbe le plus polyvalent du français — "faire du sport", "faire la cuisine", "faire beau", "faire une démarche"...

**Pouvoir** et **vouloir** expriment la capacité et le désir. **Devoir** exprime l'obligation. Ensemble, ils forment les verbes modaux essentiels.

**Savoir** vs **connaître** : "savoir" = connaître un fait ou savoir faire quelque chose / "connaître" = être familier avec quelqu'un ou quelque chose.

**Venir** et **partir** sont les deux verbes de mouvement opposés les plus fréquents.

---

### Expressions courantes avec les verbes irréguliers

| Expression | Verbe | Sens |
|---|---|---|
| "Je **suis** d'accord." | être | I agree |
| "Vous **avez** raison." | avoir | You are right |
| "Je **vais** bien, merci." | aller | I am fine |
| "Qu\'est-ce que vous **faites** ?" | faire | What do you do? |
| "Je ne **peux** pas venir." | pouvoir | I cannot come |
| "Je **veux** bien." | vouloir | I'd be glad to |
| "Je **dois** partir." | devoir | I must leave |
| "Je ne **sais** pas." | savoir | I don't know |
| "D'où **venez**-vous ?" | venir | Where are you from? |

---

### Savoir vs Connaître — distinction essentielle

| Verbe | Usage | Exemples |
|---|---|---|
| **Savoir** | + infinitif (compétence) | Je **sais** nager / conduire |
| **Savoir** | + que / si / où (information) | Je **sais** qu'il est parti |
| **Connaître** | + personne | Je **connais** Marie |
| **Connaître** | + lieu/chose (familiarité) | Je **connais** Paris / ce film |`,

      linguisticPoint: `## Point linguistique : Conjugaison des verbes irréguliers au présent

### Être et Avoir
| | **être** | **avoir** |
|---|---|---|
| je | **suis** | **ai** |
| tu | **es** | **as** |
| il/elle | **est** | **a** |
| nous | **sommes** | **avons** |
| vous | **êtes** | **avez** |
| ils/elles | **sont** | **ont** |

### Aller, Faire
| | **aller** | **faire** |
|---|---|---|
| je | **vais** | **fais** |
| tu | **vas** | **fais** |
| il/elle | **va** | **fait** |
| nous | **allons** | **faisons** |
| vous | **allez** | **faites** |
| ils/elles | **vont** | **font** |

**Attention :** "vous faites" — jamais "vous faisez" ❌

### Pouvoir, Vouloir, Devoir
| | **pouvoir** | **vouloir** | **devoir** |
|---|---|---|---|
| je | **peux** | **veux** | **dois** |
| tu | **peux** | **veux** | **dois** |
| il/elle | **peut** | **veut** | **doit** |
| nous | **pouvons** | **voulons** | **devons** |
| vous | **pouvez** | **voulez** | **devez** |
| ils | **peuvent** | **veulent** | **doivent** |

### Venir, Savoir, Connaître
| | **venir** | **savoir** | **connaître** |
|---|---|---|---|
| je | **viens** | **sais** | **connais** |
| tu | **viens** | **sais** | **connais** |
| il/elle | **vient** | **sait** | **connaît** |
| nous | **venons** | **savons** | **connaissons** |
| vous | **venez** | **savez** | **connaissez** |
| ils | **viennent** | **savent** | **connaissent** |

### Verbes utiles supplémentaires
| | **partir** | **prendre** | **mettre** |
|---|---|---|---|
| je | **pars** | **prends** | **mets** |
| tu | **pars** | **prends** | **mets** |
| il/elle | **part** | **prend** | **met** |
| nous | **partons** | **prenons** | **mettons** |
| vous | **partez** | **prenez** | **mettez** |
| ils | **partent** | **prennent** | **mettent** |

### Pièges fréquents au présent
| ❌ Erreur | ✅ Correction | Explication |
|---|---|---|
| Vous **faisez** | Vous **faites** | "faites" est irrégulier |
| Ils **voulons** | Ils **veulent** | changement de radical : voul- → veulen- |
| Je **connaît** Paris | Je **connais** Paris | connaître : je/tu = connais |
| Il **peux** venir | Il **peut** venir | peux = je/tu ; peut = il/elle |`,

      keyPoints: [
        'Être : suis / es / est / sommes / êtes / sont',
        'Avoir : ai / as / a / avons / avez / ont',
        'Aller : vais / vas / va / allons / allez / vont',
        'Faire : fais / fais / fait / faisons / faites / font (faites est irrégulier !)',
        'Pouvoir/Vouloir : peux/veux / peux/veux / peut/veut / pouvons/voulons...',
      ],

      exercises: [
        {
          id: 'a2-co-01-ex01',
          type: 'qcm',
          question: 'Conjugaison de "être" : "Ils ___ français."',
          options: ['sont', 'est', 'êtes', 'sommes'],
          correctIndex: 0,
          explanation: '"Ils SONT français." Conjugaison d\'"être" : je suis / tu es / il est / nous sommes / vous êtes / ils SONT. "Sont" = 3ème personne du pluriel.',
        },
        {
          id: 'a2-co-01-ex02',
          type: 'qcm',
          question: '"Vous ___ raison." (avoir)',
          options: ['avez', 'êtes', 'faites', 'allez'],
          correctIndex: 0,
          explanation: '"Vous AVEZ raison." "Avoir raison" = to be right. Conjugaison d\'"avoir" : j\'ai / tu as / il a / nous avons / vous AVEZ / ils ont.',
        },
        {
          id: 'a2-co-01-ex03',
          type: 'qcm',
          question: '"Je ___ à la préfecture demain." (aller)',
          options: ['va', 'vais', 'allons', 'allez'],
          correctIndex: 1,
          explanation: '"Je VAIS à la préfecture demain." "Aller" : je VAIS / tu vas / il va / nous allons / vous allez / ils vont. "Je vais" + lieu = I\'m going to.',
        },
        {
          id: 'a2-co-01-ex04',
          type: 'qcm',
          question: '"Qu\'est-ce que vous ___ dans la vie ?" (faire)',
          options: ['faites', 'font', 'faisez', 'faisons'],
          correctIndex: 0,
          explanation: '"Qu\'est-ce que vous FAITES dans la vie ?" = What do you do for a living? Conjugaison de "faire" : je fais / tu fais / il fait / nous faisons / vous FAITES / ils font. "Faites" (vous) est irrégulier — jamais "faisez" ❌.',
        },
        {
          id: 'a2-co-01-ex05',
          type: 'qcm',
          question: '"Je ne ___ pas parler anglais." (pouvoir)',
          options: ['peut', 'peux', 'pouvez', 'puisse'],
          correctIndex: 1,
          explanation: '"Je ne PEUX pas parler anglais." "Pouvoir" : je PEUX / tu peux / il peut / nous pouvons / vous pouvez / ils peuvent. "Peux" (je/tu) — attention, "peut" = il/elle seulement.',
        },
        {
          id: 'a2-co-01-ex06',
          type: 'qcm',
          question: '"Nous ___ changer de médecin traitant." (pouvoir)',
          options: ['peut', 'peux', 'pouvons', 'peuvent'],
          correctIndex: 2,
          explanation: '"Nous POUVONS changer." "Pouvoir" : nous POUVONS. La terminaison "-ons" est régulière pour "nous" pour la plupart des verbes irréguliers (pouvons, voulons, devons, venons, savons...).',
        },
        {
          id: 'a2-co-01-ex07',
          type: 'qcm',
          question: '"Elle ___ travailler demain car elle est malade." (devoir)',
          options: ['doit', 'dois', 'doivent', 'devez'],
          correctIndex: 0,
          explanation: '"Elle DOIT travailler demain." "Devoir" : je dois / tu dois / il/elle DOIT / nous devons / vous devez / ils doivent. "Doit" = obligation (elle doit) vs "dois" = je/tu.',
        },
        {
          id: 'a2-co-01-ex08',
          type: 'qcm',
          question: '"Ils ___ absolument obtenir ce document." (vouloir)',
          options: ['veuillent', 'veulent', 'voulons', 'voulez'],
          correctIndex: 1,
          explanation: '"Ils VEULENT absolument obtenir ce document." "Vouloir" : je veux / tu veux / il veut / nous voulons / vous voulez / ils VEULENT. La 3ème personne du pluriel change souvent de radical : veu- → veuil- (subjonctif) / voul- (nous/vous).',
        },
        {
          id: 'a2-co-01-ex09',
          type: 'qcm',
          question: '"Tu ___ nager ?" (savoir — compétence)',
          options: ['sais', 'sait', 'savons', 'connais'],
          correctIndex: 0,
          explanation: '"Tu SAIS nager ?" "Savoir" + infinitif = connaître une compétence. "Savoir" : je sais / tu SAIS / il sait / nous savons / vous savez / ils savent. Différent de "connaître" (être familier avec quelqu\'un/quelque chose).',
        },
        {
          id: 'a2-co-01-ex10',
          type: 'qcm',
          question: '"Savoir" vs "connaître" : "___ Paris ?" vs "___ où est la mairie ?"',
          options: [
            'Connais / Sais',
            'Sais / Connais',
            'Les deux sont interchangeables',
            'Connais / Connais',
          ],
          correctIndex: 0,
          explanation: '"Tu CONNAIS Paris ?" (familiarité avec un lieu/personne) vs "Tu SAIS où est la mairie ?" (information/fait). "Connaître" = être familier avec. "Savoir" = connaître une information ou une compétence.',
        },
        {
          id: 'a2-co-01-ex11',
          type: 'qcm',
          question: '"Ils ___ de Lyon." (venir)',
          options: ['vient', 'viens', 'viennent', 'venons'],
          correctIndex: 2,
          explanation: '"Ils VIENNENT de Lyon." "Venir" : je viens / tu viens / il vient / nous venons / vous venez / ils VIENNENT. La 3ème pluriel "viennent" a un changement de voyelle : vien- → viennent (doublement du n).',
        },
        {
          id: 'a2-co-01-ex12',
          type: 'qcm',
          question: '"Comment ___ vous ?" (aller — santé)',
          options: ['allez', 'êtes', 'faites', 'avez'],
          correctIndex: 0,
          explanation: '"Comment ALLEZ-vous ?" = How are you? (forme formelle). "Aller" s\'utilise pour la santé et le bien-être. "Je vais bien" = I\'m fine. "Comment tu vas ?" (familier) / "Comment allez-vous ?" (formel).',
        },
        {
          id: 'a2-co-01-ex13',
          type: 'qcm',
          question: '"Il ___ du sport tous les jours." (faire)',
          options: ['fait', 'fais', 'font', 'faites'],
          correctIndex: 0,
          explanation: '"Il FAIT du sport tous les jours." "Faire du sport" = to do/play sports. "Faire" : il FAIT (3ème singulier). "Faire" est utilisé avec beaucoup d\'activités : faire du vélo / faire la cuisine / faire les courses.',
        },
        {
          id: 'a2-co-01-ex14',
          type: 'qcm',
          question: '"Elle ___ 35 ans." (avoir — âge)',
          options: ['est', 'a', 'fait', 'va'],
          correctIndex: 1,
          explanation: '"Elle A 35 ans." En français, on AVOIR (pas être) pour l\'âge. "Elle A 35 ans" (pas "elle EST 35 ans" ❌). "J\'ai 30 ans" / "Tu as quel âge ?" / "Il a 50 ans."',
        },
        {
          id: 'a2-co-01-ex15',
          type: 'qcm',
          question: '"Nous ___ nos papiers demain à la préfecture." (devoir)',
          options: ['devons', 'doivent', 'doit', 'dois'],
          correctIndex: 0,
          explanation: '"Nous DEVONS déposer nos papiers." "Devoir" : nous DEVONS. Obligation à la 1ère personne du pluriel. "Devoir" + infinitif = must / have to.',
        },
        {
          id: 'a2-co-01-ex16',
          type: 'qcm',
          question: '"Vous ___ où se trouve la préfecture ?" (savoir)',
          options: ['savez', 'connaissez', 'saurez', 'sachant'],
          correctIndex: 0,
          explanation: '"Vous SAVEZ où se trouve la préfecture ?" "Savoir" + proposition interrogative indirecte = to know (a fact). "Savez" = vous, présent. "Savoir" : je sais / tu sais / il sait / nous savons / vous SAVEZ / ils savent.',
        },
        {
          id: 'a2-co-01-ex17',
          type: 'qcm',
          question: '"Qu\'est-ce qu\'il ___ ?" (vouloir — au restaurant)',
          options: ['veut', 'veux', 'veuille', 'voulez'],
          correctIndex: 0,
          explanation: '"Qu\'est-ce qu\'il VEUT ?" = What does he want? "Vouloir" : je veux / tu veux / il VEUT / nous voulons / vous voulez / ils veulent. "Veut" = 3ème singulier.',
        },
        {
          id: 'a2-co-01-ex18',
          type: 'qcm',
          question: '"___ de quel pays ?" (vous + venir)',
          options: ['Venez-vous', 'Êtes-vous', 'Allez-vous', 'Faites-vous'],
          correctIndex: 0,
          explanation: '"VENEZ-vous de quel pays ?" = Which country are you from? "Venir de" + pays = to be from. Inversion sujet-verbe : "venez-vous ?" Réponse : "Je viens du Maroc / de France / d\'Algérie."',
        },
        {
          id: 'a2-co-01-ex19',
          type: 'qcm',
          question: '"Qu\'est-ce qu\'ils ___ ?" (faire — activité)',
          options: ['fait', 'faisons', 'font', 'faites'],
          correctIndex: 2,
          explanation: '"Qu\'est-ce qu\'ils FONT ?" = What are they doing? "Faire" : ils FONT (3ème pluriel). Irrégulier : on pourrait attendre "ils faisent" ❌ mais c\'est "ils FONT".',
        },
        {
          id: 'a2-co-01-ex20',
          type: 'qcm',
          question: 'Le "vous" de politesse : "Vous ___ comment, monsieur ?" (être — prénom/nom)',
          options: ['êtes', 'vous appelez', 'allez', 'avez'],
          correctIndex: 1,
          explanation: '"Vous vous APPELEZ comment ?" = What\'s your name? (formel). "S\'appeler" = verbe pronominal. "Vous vous appelez" = vous (sujet) + vous (pronom réfléchi) + appelez. Alternatives : "Quel est votre nom ?" / "Votre nom ?"',
        },
      ],
    },

    {
      id: 'a2-co-02',
      slug: 'a2-passe-compose',
      moduleSlug: 'a2-conjugaison',
      level: 'A2',
      title: 'Le passé composé — être et avoir',
      description: 'Formez le passé composé avec les auxiliaires être et avoir, avec les bons accords.',
      duration: 12,
      free: false,
      dialogue: `## Dialogue : Raconter un rendez-vous à la préfecture

*Youssef raconte à son collègue sa journée à la préfecture.*

**Collègue :** Alors, ça s'est bien passé à la préfecture ?

**Youssef :** Pas vraiment. Je suis parti à 7h du matin mais je suis arrivé trop tard — je ne savais pas qu'il fallait prendre un ticket à l'entrée.

**Collègue :** Tu as attendu longtemps ?

**Youssef :** Trois heures ! Et l'agent m'a dit que j'avais oublié un document. Alors je suis rentré à la maison, j'ai pris le document, et je suis revenu l'après-midi.

**Collègue :** Et finalement ?

**Youssef :** L'agent a regardé mon dossier, il a tout vérifié, et il m'a donné un récépissé. Je suis ressorti avec le sourire !

**Collègue :** Tu as eu de la chance quand même.

**Youssef :** Oui ! Et ma femme est venue me rejoindre le soir pour fêter ça.

---

### Les verbes ÊTRE au passé composé — mémo DR MRS VAN DER TRAMP

| Infinitif | Participe passé | Exemple |
|---|---|---|
| **D**escendre | descendu | Il est descendu |
| **R**entrer | rentré | Elle est rentrée |
| **M**onter | monté | Ils sont montés |
| **R**ester | resté | Elles sont restées |
| **S**ortir | sorti | Il est sorti |
| **V**enir | venu | Elle est venue |
| **A**ller | allé | Il est allé |
| **N**aître | né | Il est né |
| **D**écéder | décédé | Elle est décédée |
| **E**ntrer | entré | Il est entré |
| **R**etourner | retourné | Elle est retournée |
| **T**omber | tombé | Il est tombé |
| **R**evenir | revenu | Elle est revenue |
| **A**rriver | arrivé | Il est arrivé |
| **M**ourir | mort | Elle est morte |
| **P**artir | parti | Il est parti |

Plus tous les verbes **pronominaux** (se lever, se coucher, s'habiller...) → toujours ÊTRE.

---

### Participes passés irréguliers fréquents

| Infinitif | Participe passé |
|---|---|
| avoir | **eu** |
| être | **été** |
| faire | **fait** |
| prendre | **pris** |
| voir | **vu** |
| vouloir | **voulu** |
| pouvoir | **pu** |
| devoir | **dû** |
| savoir | **su** |
| mettre | **mis** |
| dire | **dit** |
| écrire | **écrit** |
| lire | **lu** |
| boire | **bu** |
| recevoir | **reçu** |`,

      linguisticPoint: `## Point linguistique : Le passé composé

### Formation : auxiliaire (avoir ou être) + participe passé

### Verbes avec AVOIR (majorité des verbes)
| Infinitif | Participe passé | Passé composé |
|---|---|---|
| parler | parlé | j\'**ai parlé** |
| finir | fini | j\'**ai fini** |
| prendre | pris | j\'**ai pris** |
| voir | vu | j\'**ai vu** |
| faire | fait | j\'**ai fait** |
| avoir | eu | j\'**ai eu** |
| être | été | j\'**ai été** |

### Verbes avec ÊTRE (mouvement + réfléchis)
Mémo : **DR MRS VAN DER TRAMP** (ou ALLER/VENIR et dérivés)
| aller → allé | venir → venu | naître → né |
| partir → parti | arriver → arrivé | mourir → mort |
| entrer → entré | sortir → sorti | rester → resté |
| monter → monté | descendre → descendu | retourner → retourné |
| rentrer → rentré | revenir → revenu | tomber → tombé |

### Accord du participe passé avec ÊTRE
Le participe s\'accorde avec le SUJET :
| Sujet | Accord | Exemple |
|---|---|---|
| masc. sing. | — | "Il est parti" |
| fém. sing. | + **e** | "Elle est parti**e**" |
| masc. pl. | + **s** | "Ils sont parti**s**" |
| fém. pl. | + **es** | "Elles sont parti**es**" |

### Accord avec AVOIR
Le participe s\'accorde avec le COD s\'il est PLACÉ AVANT le verbe :
| Situation | Accord | Exemple |
|---|---|---|
| COD APRÈS le verbe | aucun accord | "J\'ai pris la lettre" |
| COD AVANT le verbe (pronom) | accord | "Je **l\'**ai pris**e**" (la lettre — fém.) |
| COD AVANT (pronom les) | accord | "Je **les** ai rassemblé**s**" (masc. pl.) |

### Cas particuliers — verbes à double auxiliaire
Certains verbes se conjuguent avec ÊTRE ou AVOIR selon le sens :
| Verbe | Avec ÊTRE (intransitif) | Avec AVOIR (transitif) |
|---|---|---|
| monter | "Elle est montée." (mouvement) | "Elle a monté les bagages." (COD) |
| descendre | "Il est descendu." (mouvement) | "Il a descendu le chien." (COD) |
| sortir | "Ils sont sortis." (mouvement) | "Il a sorti les poubelles." (COD) |
| rentrer | "Elle est rentrée." (mouvement) | "Il a rentré les chaises." (COD) |

### Négation au passé composé
**NE + auxiliaire + PAS + participe :**
- "Je n\'**ai pas** compris" ✓
- "Elle n\'**est pas** venue" ✓
- "Ils n\'**ont pas** pu venir" ✓

### Pièges fréquents
| ❌ Erreur | ✅ Correction | Règle |
|---|---|---|
| Elle a venue | Elle **est** venue | venir → auxiliaire ÊTRE |
| Il a resté | Il **est** resté | rester → auxiliaire ÊTRE |
| Je ai mangé | J\'**ai** mangé | élision obligatoire |
| Elle a pris**e** la lettre | Elle a pris la lettre | COD après = pas d\'accord |`,

      keyPoints: [
        'Passé composé = avoir/être (présent) + participe passé',
        'ÊTRE : verbes de mouvement + verbes pronominaux (accord avec sujet)',
        'AVOIR : majorité des verbes (accord avec COD placé AVANT)',
        'Participes irréguliers : pris/fait/vu/eu/été/voulu/pu/dû/su',
        'Négation : ne + auxiliaire + pas + participe : "je n\'ai pas parlé"',
      ],

      exercises: [
        {
          id: 'a2-co-02-ex01',
          type: 'qcm',
          question: '"Je ___ parti à 7h du matin." (partir = verbe être)',
          options: ['ai', 'suis', 'être', 'ont'],
          correctIndex: 1,
          explanation: '"Je SUIS parti." "Partir" = verbe du groupe ÊTRE au passé composé. "Partir" → participe passé "parti". Accord : je (masc.) → "parti" (pas d\'accord si masc. sing.).',
        },
        {
          id: 'a2-co-02-ex02',
          type: 'qcm',
          question: '"L\'agent m\'___ dit que j\'avais oublié un document." (dire = verbe avoir)',
          options: ['est', 'a', 'ont', 'avons'],
          correctIndex: 1,
          explanation: '"L\'agent m\'A dit." "Dire" se conjugue avec AVOIR. "Dire" → participe passé "dit". "Il a dit" = he said. Pas d\'accord du participe car le COD n\'est pas placé avant.',
        },
        {
          id: 'a2-co-02-ex03',
          type: 'qcm',
          question: '"Je suis arriv___ trop tard." (Youssef, masculin)',
          options: ['arrivée', 'arrivées', 'arrivés', 'arrivé'],
          correctIndex: 3,
          explanation: '"Je suis arrivÉ." Accord avec ÊTRE : sujet = "je" (Youssef, masculin singulier) → participe passé au masculin singulier = "arrivé" (sans e ni s).',
        },
        {
          id: 'a2-co-02-ex04',
          type: 'qcm',
          question: '"Ma femme ___ venue me rejoindre." (venir = verbe être)',
          options: ['a', 'est', 'ai', 'ont'],
          correctIndex: 1,
          explanation: '"Ma femme EST venue." "Venir" = verbe ÊTRE. Sujet = "ma femme" (féminin) → accord du participe : "venu**e**" (féminin).',
        },
        {
          id: 'a2-co-02-ex05',
          type: 'qcm',
          question: '"L\'agent ___ regardé mon dossier." (regarder = verbe avoir)',
          options: ['est', 'a', 'ont', 'avons'],
          correctIndex: 1,
          explanation: '"L\'agent A regardé." "Regarder" = verbe AVOIR. Pas d\'accord du participe (le COD "mon dossier" est après le verbe).',
        },
        {
          id: 'a2-co-02-ex06',
          type: 'qcm',
          question: '"Vous ___ bien dormi ?" (dormir = verbe avoir)',
          options: ['êtes', 'avez', 'ont', 'avons'],
          correctIndex: 1,
          explanation: '"Vous AVEZ bien dormi ?" "Dormir" = verbe AVOIR. "Dormir" → participe passé "dormi". Pas d\'accord (sujet "vous" avec avoir ne fait pas accorder).',
        },
        {
          id: 'a2-co-02-ex07',
          type: 'qcm',
          question: '"Elle ___ rentrée à la maison." (rentrer = verbe être)',
          options: ['a', 'est', 'ont', 'avons'],
          correctIndex: 1,
          explanation: '"Elle EST rentrée." "Rentrer" = verbe ÊTRE. Sujet = "elle" (féminin) → accord : "rentré**e**" (e final pour féminin).',
        },
        {
          id: 'a2-co-02-ex08',
          type: 'qcm',
          question: 'Participe passé de "prendre" : "J\'ai ___ le document."',
          options: ['prendé', 'pris', 'prendu', 'prend'],
          correctIndex: 1,
          explanation: '"J\'ai PRIS le document." Participe passé irrégulier de "prendre" = "pris". Autres irréguliers importants : faire → fait / voir → vu / être → été / avoir → eu / vouloir → voulu / pouvoir → pu.',
        },
        {
          id: 'a2-co-02-ex09',
          type: 'qcm',
          question: '"Ils ___ restés longtemps à la préfecture." (rester = verbe être)',
          options: ['ont', 'sont', 'êtes', 'avons'],
          correctIndex: 1,
          explanation: '"Ils SONT restés." "Rester" = verbe ÊTRE. Sujet = "ils" (masculin pluriel) → accord : "resté**s**" (s final pour pluriel).',
        },
        {
          id: 'a2-co-02-ex10',
          type: 'qcm',
          question: 'Accord du participe avec AVOIR + COD avant : "La lettre ? Je l\'___ reçu___."',
          options: ['ai / e', 'ai / (rien)', 'suis / e', 'est / (rien)'],
          correctIndex: 0,
          explanation: '"La lettre ? Je l\'ai reçuE." "La lettre" est COD féminin, placé AVANT le verbe (pronom "l\'"). → Accord du participe avec le COD : "reçu" + e = "reçue". Accord obligatoire quand COD est avant.',
        },
        {
          id: 'a2-co-02-ex11',
          type: 'qcm',
          question: 'Négation au passé composé : "Je ___ compris." (ne...pas)',
          options: [
            'Je ne compris pas',
            'Je n\'ai pas compris',
            'Je n\'ai compris pas',
            'Je ai ne pas compris',
          ],
          correctIndex: 1,
          explanation: '"Je N\'AI PAS compris." Négation au passé composé : NE + auxiliaire + PAS + participe. "Je NE + AI PAS + compris" → "Je N\'AI PAS compris" (élision).',
        },
        {
          id: 'a2-co-02-ex12',
          type: 'qcm',
          question: '"Nous ___ rencontrés à la mairie." (se rencontrer = pronominal, donc ÊTRE)',
          options: ['avons', 'sommes', 'sont', 'avons nous'],
          correctIndex: 1,
          explanation: '"Nous SOMMES rencontrés." Tous les verbes pronominaux (se + verbe) se conjuguent avec ÊTRE. Accord avec le sujet : "nous" (masculin pluriel mixte) → "rencontré**s**".',
        },
        {
          id: 'a2-co-02-ex13',
          type: 'qcm',
          question: '"Elle s\'___ habillée vite ce matin." (s\'habiller = pronominal)',
          options: ['a', 'est', 'ont', 'avons'],
          correctIndex: 1,
          explanation: '"Elle S\'EST habillée." Verbe pronominal "s\'habiller" → ÊTRE. Accord : "elle" (féminin) → "habillé**e**".',
        },
        {
          id: 'a2-co-02-ex14',
          type: 'qcm',
          question: 'Participe passé de "voir" : "Tu n\'as pas ___ cette émission ?"',
          options: ['voi', 'voyé', 'vu', 'vus'],
          correctIndex: 2,
          explanation: '"Tu n\'as pas VU cette émission ?" Participe passé de "voir" = "vu". Irrégulier. Autres : savoir → su / lire → lu / boire → bu / recevoir → reçu / mettre → mis.',
        },
        {
          id: 'a2-co-02-ex15',
          type: 'qcm',
          question: '"Elles ___ sorties ensemble." (sortir = verbe être)',
          options: ['ont', 'sont', 'avons', 'êtes'],
          correctIndex: 1,
          explanation: '"Elles SONT sorties." "Sortir" = verbe ÊTRE. Sujet = "elles" (féminin pluriel) → accord : "sorti**es**" (e + s).',
        },
        {
          id: 'a2-co-02-ex16',
          type: 'qcm',
          question: '"J\'___ eu de la chance." (avoir)',
          options: ['suis', 'ai', 'est', 'ont'],
          correctIndex: 1,
          explanation: '"J\'AI eu de la chance." "Avoir" se conjugue avec lui-même comme auxiliaire ! Participe passé de "avoir" = "eu". "J\'ai eu" = I had / I was lucky.',
        },
        {
          id: 'a2-co-02-ex17',
          type: 'qcm',
          question: '"Il ___ ressorti avec le sourire." (ressortir = verbe être)',
          options: ['a', 'est', 'avons', 'ont'],
          correctIndex: 1,
          explanation: '"Il EST ressorti." "Ressortir" (verbe de mouvement préfixé) = verbe ÊTRE. Accord : "il" (masc. sing.) → "ressorti" (pas d\'accord pour masc. sing.).',
        },
        {
          id: 'a2-co-02-ex18',
          type: 'qcm',
          question: '"Ils ___ attendu trois heures." (attendre = verbe avoir)',
          options: ['sont', 'ont', 'avons', 'avez'],
          correctIndex: 1,
          explanation: '"Ils ONT attendu trois heures." "Attendre" = verbe AVOIR. "Ils ont attendu" = they waited. Pas d\'accord du participe (COD "trois heures" est après).',
        },
        {
          id: 'a2-co-02-ex19',
          type: 'qcm',
          question: '"Participe passé de "faire" : "Qu\'est-ce que tu as ___ ?"',
          options: ['faisé', 'fait', 'fais', 'faite'],
          correctIndex: 1,
          explanation: '"Qu\'est-ce que tu as FAIT ?" Participe passé de "faire" = "fait". Irrégulier. "Faire" → "fait" (comme un adjectif : un fait accompli). Invariable si COD après : "elle a fait ses devoirs" (pas d\'accord).',
        },
        {
          id: 'a2-co-02-ex20',
          type: 'qcm',
          question: 'Verbe ÊTRE ou AVOIR ? "Monter" au passé composé dans "Elle a monté les bagages."',
          options: [
            'Toujours ÊTRE (verbe de mouvement)',
            'AVOIR ici car "les bagages" est COD — "monter" peut être transitif (AVOIR) ou intransitif (ÊTRE)',
            'ÊTRE car "elle" est féminin',
            'Toujours AVOIR',
          ],
          correctIndex: 1,
          explanation: '"Elle A monté les bagages." Attention ! Certains verbes (monter, descendre, sortir, rentrer, retourner, passer...) se conjuguent avec ÊTRE quand intransitifs ("elle est montée dans sa chambre") mais avec AVOIR quand transitifs ("elle a monté les bagages"). La présence d\'un COD change l\'auxiliaire.',
        },
      ],
    },

    {
      id: 'a2-co-03',
      slug: 'a2-imparfait',
      moduleSlug: 'a2-conjugaison',
      level: 'A2',
      title: 'L\'imparfait',
      description: 'Décrivez le passé, les habitudes et le contexte d\'une histoire avec l\'imparfait.',
      duration: 12,
      free: false,
      dialogue: `## Dialogue : Raconter son pays d'origine

*Sara raconte à sa voisine française comment était la vie dans son pays.*

**Voisine :** Tu viens d'où exactement ?

**Sara :** De Syrie, d'Alep. Avant la guerre, c'était une ville magnifique. Il y avait des marchés colorés, des mosquées anciennes, des bains traditionnels appelés hammams.

**Voisine :** Et tu travaillais là-bas ?

**Sara :** Oui, j'étais professeure de mathématiques. J'aimais beaucoup ce travail. Mes élèves étaient motivés. Je gagnais bien ma vie.

**Voisine :** Ta famille vivait là-bas aussi ?

**Sara :** Oui, toute ma famille habitait dans le même quartier. Mes parents avaient une maison avec un grand jardin. Quand j'étais petite, on jouait dehors jusqu'à tard le soir. La vie était simple mais heureuse.

**Voisine :** Et tu es partie à cause de la guerre ?

**Sara :** Oui. En 2015, la situation devenait très dangereuse. Nous avons décidé de partir. C'était très difficile de tout laisser.

---

### Formation de l'imparfait — rappel visuel

**Règle :** radical "nous" au présent + terminaisons

| Verbe | Présent "nous" | Radical | je / tu / il | nous / vous | ils |
|---|---|---|---|---|---|
| parler | nous parl**ons** | parl- | parlais/ais/ait | parlions/iez | parlaient |
| finir | nous finiss**ons** | finiss- | finissais | finissions/iez | finissaient |
| faire | nous fais**ons** | fais- | faisais | faisions/iez | faisaient |
| avoir | nous av**ons** | av- | avais | avions/iez | avaient |
| **être** | — | **ét-** | **étais** | **étions/iez** | **étaient** |

**Attention :** "être" est le seul verbe dont le radical est différent : ét- (pas "som-").

---

### Imparfait vs Passé composé — le duo essentiel

Dans un récit, les deux temps travaillent ensemble :

| Temps | Rôle dans le récit | Exemple |
|---|---|---|
| **Imparfait** | Décor, contexte, descriptions, habitudes | "Il **faisait** beau, les enfants **jouaient**..." |
| **Passé composé** | Actions ponctuelles, événements | "Soudain, il **a commencé** à pleuvoir." |`,

      linguisticPoint: `## Point linguistique : L'imparfait — formation et emplois

### Formation : radical "nous présent" + terminaisons
**Radical** = forme "nous" du présent (sans -ons)
| Verbe | Présent "nous" | Radical | Imparfait (je) |
|---|---|---|---|
| parler | nous parl**ons** | parl- | je parlais |
| finir | nous finiss**ons** | finiss- | je finissais |
| être | nous somm**es** | ét- | j\'étais |
| faire | nous fais**ons** | fais- | je faisais |
| avoir | nous av**ons** | av- | j\'avais |
| venir | nous ven**ons** | ven- | je venais |
| prendre | nous pren**ons** | pren- | je prenais |

### Terminaisons de l'imparfait (toujours régulières)
| Personne | Terminaison | Exemple (parler) |
|---|---|---|
| je | -**ais** | je parl**ais** |
| tu | -**ais** | tu parl**ais** |
| il/elle/on | -**ait** | il parl**ait** |
| nous | -**ions** | nous parli**ons** |
| vous | -**iez** | vous parli**ez** |
| ils/elles | -**aient** | ils parl**aient** |

### Emplois de l'imparfait — 5 cas
| Emploi | Description | Exemple |
|---|---|---|
| **1. Description** | État ou situation passée | "La ville **était** magnifique" |
| **2. Habitude passée** | Action répétée dans le passé | "Je **travaillais** tous les jours" |
| **3. Contexte/décor** | Arrière-plan d\'un récit | "Il **faisait** beau, les enfants **jouaient**" |
| **4. Action en cours** | Interrompue par une autre | "Je **lisais** quand il est entré" |
| **5. Politesse** | Adoucir une demande | "Je **voulais** vous demander un service" |

### Imparfait vs Passé composé — comparaison
| Imparfait | Passé composé |
|---|---|
| Durée indéfinie | Action délimitée (début/fin) |
| Habitude, répétition | Événement unique |
| Description, état | Action, changement |
| Contexte/décor | Événement de l\'histoire |
| "La ville **était** belle" | "La ville **a changé**" |
| "Je **travaillais** là-bas" | "J\'**ai travaillé** là-bas pendant 3 ans" |

### Pièges fréquents à l'imparfait
| ❌ Erreur | ✅ Correction | Explication |
|---|---|---|
| j\'était (sans s) | j\'**étais** | terminaison -ais, pas -ait |
| nous étions**s** | nous **étions** | pas de s après -ions |
| tu finiss**ait** | tu finiss**ais** | tu → terminaison -ais |
| Hier, il **travaillait** | Hier, il **a travaillé** | hier = ponctuel → passé composé |`,

      keyPoints: [
        'Formation : radical du présent "nous" + -ais/-ais/-ait/-ions/-iez/-aient',
        '"Être" seul est irrégulier au radical : ét- (j\'étais, tu étais...)',
        '5 emplois : description / habitude / contexte / action en cours / politesse',
        'Passé composé + imparfait : PC = action / imparfait = contexte/description',
        '"Avant" + imparfait : "Avant, j\'habitais à Paris" (habitude passée)',
      ],

      exercises: [
        {
          id: 'a2-co-03-ex01',
          type: 'qcm',
          question: 'Formez l\'imparfait : "être" → "C\'___ une ville magnifique."',
          options: ['était', 'était', 'est', 'sera'],
          correctIndex: 0,
          explanation: '"C\'ÉTAIT une ville magnifique." "Être" à l\'imparfait est irrégulier : radical = "ét-" (toujours, pour toutes les personnes). Terminaison 3ème sing. = -ait → "était".',
        },
        {
          id: 'a2-co-03-ex02',
          type: 'qcm',
          question: '"J\'___ professeure de mathématiques." (être — imparfait)',
          options: ['suis', 'ai été', 'étais', 'seras'],
          correctIndex: 2,
          explanation: '"J\'ÉTAIS professeure." Imparfait d\'"être" à la 1ère personne : "étais". Radical "ét-" + terminaison "-ais" = "étais".',
        },
        {
          id: 'a2-co-03-ex03',
          type: 'qcm',
          question: 'Quel radical utilise-t-on pour former l\'imparfait de "faire" ?',
          options: ['fair-', 'fer-', 'fais-', 'fes-'],
          correctIndex: 2,
          explanation: 'Radical de "faire" pour l\'imparfait : "fais-" (= forme "nous faisons" sans "-ons"). Je FAISAIS / tu faisais / il faisait / nous faisions / vous faisiez / ils faisaient.',
        },
        {
          id: 'a2-co-03-ex04',
          type: 'qcm',
          question: '"Mes parents ___ une maison avec un grand jardin." (avoir — imparfait)',
          options: ['ont', 'avaient', 'avons', 'avait'],
          correctIndex: 1,
          explanation: '"Mes parents AVAIENT une maison." Imparfait d\'"avoir" : radical "av-" + terminaison 3ème pl. "-aient" = "avaient". "Ont" = passé composé (action ponctuelle) ≠ "avaient" = imparfait (description).',
        },
        {
          id: 'a2-co-03-ex05',
          type: 'qcm',
          question: 'Quel temps utiliser ? "En 2015, la situation ___ très dangereuse." (devenir)',
          options: [
            'Passé composé (action soudaine)',
            'Imparfait (évolution progressive)',
            'Présent (actualité)',
            'Futur (prévision)',
          ],
          correctIndex: 1,
          explanation: '"La situation DEVENAIT très dangereuse." Imparfait pour décrire une évolution progressive ou un état qui durait dans le temps. "Devenait" (en train de devenir) vs "est devenue" (passé composé = moment précis).',
        },
        {
          id: 'a2-co-03-ex06',
          type: 'qcm',
          question: '"On ___ dehors jusqu\'à tard le soir." (jouer — habitude passée)',
          options: ['a joué', 'jouait', 'jouions', 'jouais'],
          correctIndex: 2,
          explanation: '"On JOUAIT dehors." "On" = 3ème personne du singulier → terminaison "-ait". Radical "jou-" + "-ait" = "jouait". Imparfait exprime une habitude passée régulière.',
        },
        {
          id: 'a2-co-03-ex07',
          type: 'qcm',
          question: '"Je ___ bien ma vie." (gagner — imparfait, 1ère personne)',
          options: ['gagné', 'gagnais', 'gagne', 'gagnerai'],
          correctIndex: 1,
          explanation: '"Je GAGNAIS bien ma vie." Imparfait de "gagner" : radical "gagn-" + terminaison 1ère sing. "-ais" = "gagnais". Habitude passée (je gagnais régulièrement).',
        },
        {
          id: 'a2-co-03-ex08',
          type: 'qcm',
          question: 'Différence PC / Imparfait : "Nous AVONS DÉCIDÉ de partir" vs "La vie ÉTAIT heureuse."',
          options: [
            'PC = action passée ponctuelle / Imparfait = description ou habitude',
            'PC = présent / Imparfait = futur',
            'Ils sont interchangeables',
            'PC = formel / Imparfait = familier',
          ],
          correctIndex: 0,
          explanation: '"Nous AVONS DÉCIDÉ" (PC) = action précise, ponctuelle, avec début et fin. "La vie ÉTAIT heureuse" (imparfait) = description, état qui durait. En narration : imparfait = décor/contexte / PC = événements de l\'histoire.',
        },
        {
          id: 'a2-co-03-ex09',
          type: 'qcm',
          question: 'Complétez : "Quand j\'___ petite, je ___ à Paris." (être / habiter — imparfait)',
          options: ['étais / habitais', 'ai été / ai habité', 'suis / habite', 'étais / ai habité'],
          correctIndex: 0,
          explanation: '"Quand j\'ÉTAIS petite, j\'HABITAIS à Paris." Les deux verbes à l\'imparfait : état d\'être + habitude de vie. "Quand + imparfait" exprime une période dans le passé avec des habitudes régulières.',
        },
        {
          id: 'a2-co-03-ex10',
          type: 'qcm',
          question: '"Il y ___ des marchés colorés." (avoir impersonnel — imparfait)',
          options: ['avait', 'avais', 'avaient', 'eu'],
          correctIndex: 0,
          explanation: '"Il y AVAIT des marchés colorés." "Il y a" au présent → "il y AVAIT" à l\'imparfait. Toujours "il y avait" (3ème sing. impersonnel). "Il y avait" = there was / there were (description du passé).',
        },
        {
          id: 'a2-co-03-ex11',
          type: 'qcm',
          question: 'Conjugaison "nous" à l\'imparfait : "Nous ___ dans le même quartier." (habiter)',
          options: ['habitons', 'habitions', 'habitants', 'habitaient'],
          correctIndex: 1,
          explanation: '"Nous HABITIONS dans le même quartier." Imparfait de "habiter" à "nous" : radical "habit-" + terminaison "-ions" = "habitions". Ne pas confondre avec "nous habitons" (présent).',
        },
        {
          id: 'a2-co-03-ex12',
          type: 'qcm',
          question: 'Imparfait de politesse : "Je ___ vous demander un renseignement." (vouloir)',
          options: ['veux', 'voulais', 'voudrais', 'voulu'],
          correctIndex: 1,
          explanation: '"Je VOULAIS vous demander..." = imparfait de politesse. Légèrement moins formel que le conditionnel ("je voudrais"). Très utilisé à l\'oral pour introduire une demande polie.',
        },
        {
          id: 'a2-co-03-ex13',
          type: 'qcm',
          question: '"Les élèves ___ motivés." (être — imparfait, pluriel)',
          options: ['étaient', 'étais', 'ont été', 'sontaient'],
          correctIndex: 0,
          explanation: '"Les élèves ÉTAIENT motivés." Imparfait d\'"être" à la 3ème pluriel : "étaient". Radical "ét-" + terminaison "-aient" = "étaient". Description du passé.',
        },
        {
          id: 'a2-co-03-ex14',
          type: 'qcm',
          question: '"Je lisais quand il est entré." Quel temps pour quelle action ?',
          options: [
            'Imparfait = action interrompue / Passé composé = contexte',
            'Imparfait = contexte (action en cours) / Passé composé = action qui interrompt',
            'Les deux décrivent le contexte',
            'Les deux sont des actions ponctuelles',
          ],
          correctIndex: 1,
          explanation: '"Je LISAIS" (imparfait = action en cours, contexte) / "quand il EST ENTRÉ" (passé composé = action soudaine qui interrompt). C\'est le schéma classique : imparfait + "quand" + passé composé.',
        },
        {
          id: 'a2-co-03-ex15',
          type: 'qcm',
          question: 'Formez l\'imparfait de "finir" à la 2ème personne du pluriel : "vous..."',
          options: ['finissiez', 'finiez', 'finissiez', 'finissez'],
          correctIndex: 0,
          explanation: '"Vous FINISSIEZ." Radical : "nous finissons" → "finiss-". Terminaison 2ème pl. : "-iez". "finiss-" + "-iez" = "finissiez". Attention à "finissez" (présent) ≠ "finissiez" (imparfait).',
        },
        {
          id: 'a2-co-03-ex16',
          type: 'qcm',
          question: '"Avant, les gens ___ plus à pied." (marcher — habitude passée)',
          options: ['ont marché', 'marchaient', 'marchent', 'marcheront'],
          correctIndex: 1,
          explanation: '"Avant, les gens MARCHAIENT plus à pied." "Avant" + imparfait = habitude du passé qui n\'existe plus. Radical "march-" + "-aient" = "marchaient".',
        },
        {
          id: 'a2-co-03-ex17',
          type: 'qcm',
          question: 'Forme "vous" de l\'imparfait (toujours avec terminaison -iez) : "Vous saviez ?" = radical + ?',
          options: ['sav- + -iez', 'sav- + -ais', 'sav- + -aient', 'sach- + -iez'],
          correctIndex: 0,
          explanation: '"Vous SAVIEZ ?" "Savoir" à l\'imparfait : radical "sav-" (présent "nous savons" → sav-) + terminaison "vous" = "-iez" → "saviez". Toujours "-iez" pour "vous" à l\'imparfait.',
        },
        {
          id: 'a2-co-03-ex18',
          type: 'qcm',
          question: '"C\'___ très difficile de tout laisser." (être — imparfait)',
          options: ['a été', 'était', 'est', 'serait'],
          correctIndex: 1,
          explanation: '"C\'ÉTAIT très difficile." Imparfait de "être" (description d\'un état). "C\'a été" (passé composé) serait aussi possible pour insister sur le fait accompli, mais "c\'était" est plus naturel pour une description émotionnelle.',
        },
        {
          id: 'a2-co-03-ex19',
          type: 'qcm',
          question: '"Ma famille ___ dans le même quartier." (vivre — imparfait, pluriel)',
          options: ['vivait', 'vivaient', 'vivions', 'ont vécu'],
          correctIndex: 1,
          explanation: '"Ma famille VIVAIT" = singulier (le groupe "famille" est un singulier collectif en français). Si on dit "ses membres vivaient" → "vivaient" (pluriel). "Famille" = sujet singulier → "vivait".',
        },
        {
          id: 'a2-co-03-ex20',
          type: 'qcm',
          question: '"Toute ma famille ___ dans le même quartier." — pourquoi "habitait" (sing.)?',
          options: [
            'Parce que "toute" est singulier',
            'Parce que "famille" est un nom collectif singulier en français',
            'C\'est une erreur, ça devrait être "habitaient"',
            'B et A sont corrects',
          ],
          correctIndex: 1,
          explanation: '"FAMILLE" = nom collectif singulier → verbe au singulier. "Ma famille habitait" (sing.) = correct. "Les membres de ma famille habitaient" (pluriel, sujet pluriel) aussi correct. En français, le verbe s\'accorde avec le sujet grammatical : "famille" (sing.) → verbe sing.',
        },
      ],
    },

    {
      id: 'a2-co-04',
      slug: 'a2-futur-proche-imperatif',
      moduleSlug: 'a2-conjugaison',
      level: 'A2',
      title: 'Futur proche et impératif',
      description: 'Exprimez des actions futures immédiates avec "aller + infinitif" et donnez des ordres et conseils avec l\'impératif.',
      duration: 12,
      free: false,
      dialogue: `## Dialogue : Préparer un entretien de naturalisation

*Kadiatou prépare son entretien de naturalisation avec son amie française Sophie.*

**Sophie :** Ton entretien est dans deux semaines. On va s'entraîner ensemble !

**Kadiatou :** Bonne idée. Par où on commence ?

**Sophie :** D'abord, parle-moi des valeurs de la République. C'est sûrement là que ça va commencer.

**Kadiatou :** La liberté, l'égalité, la fraternité. La France va fêter le 14 juillet prochain — c'est la Fête nationale.

**Sophie :** Bien ! Maintenant, sois naturelle, regarde-moi dans les yeux et parle avec confiance. Ne lis pas tes notes !

**Kadiatou :** Je vais essayer. Est-ce qu'ils vont me demander des choses sur l'histoire ?

**Sophie :** Probablement. Alors révise la Révolution française, les deux guerres mondiales, de Gaulle. Apprends aussi les symboles nationaux — le drapeau, la Marseillaise, Marianne.

**Kadiatou :** Je vais faire ça ce soir. Et pour les droits des citoyens ?

**Sophie :** Concentre-toi sur le droit de vote, la liberté d'expression et l'égalité des droits. Ce sont les piliers de la démocratie française.

---

### Tableau récapitulatif — futur proche vs futur simple

| | Futur proche | Futur simple |
|---|---|---|
| **Formation** | aller (présent) + infinitif | infinitif + terminaisons |
| **Sens** | action imminente ou certaine | action plus lointaine ou moins certaine |
| **Usage** | très fréquent à l\'oral | plus courant à l\'écrit |
| **Exemple** | "Je **vais partir** dans 5 min." | "Je **partirai** l\'année prochaine." |

---

### Impératif — tableau complet avec irréguliers

| Verbe | tu | nous | vous |
|---|---|---|---|
| parler (ER) | Parle ! | Parlons ! | Parlez ! |
| finir (IR) | Finis ! | Finissons ! | Finissez ! |
| prendre | Prends ! | Prenons ! | Prenez ! |
| **être** | **Sois !** | **Soyons !** | **Soyez !** |
| **avoir** | **Aie !** | **Ayons !** | **Ayez !** |
| **savoir** | **Sache !** | **Sachons !** | **Sachez !** |
| **vouloir** | **Veuille !** | **Veuillons !** | **Veuillez !** |

**Règle -ER :** "tu" perd le -s : "Parle !" (pas "Parles" ❌)
**Règle -IR/-RE :** "tu" garde le -s : "Finis !" / "Prends !" ✓`,

      linguisticPoint: `## Point linguistique : Futur proche et Impératif

### 1. Le futur proche = ALLER (présent) + infinitif
| Personne | Aller | Exemple |
|---|---|---|
| je | **vais** | Je **vais** partir |
| tu | **vas** | Tu **vas** réussir |
| il/elle | **va** | Elle **va** arriver |
| nous | **allons** | Nous **allons** étudier |
| vous | **allez** | Vous **allez** voir |
| ils/elles | **vont** | Ils **vont** venir |

**Futur proche** = action future proche/certaine
**Futur simple** = action future plus lointaine ou moins certaine

### Futur proche négatif
**NE + aller + PAS + infinitif :**
- "Je **ne vais pas** oublier." ✓
- "Ils **ne vont pas** venir." ✓
- "Elle **ne va pas** partir." ✓

### 2. L'impératif présent — 3 personnes seulement
| | Donner | Prendre | Partir |
|---|---|---|---|
| **tu** | Donne ! | Prends ! | Pars ! |
| **nous** | Donnons ! | Prenons ! | Partons ! |
| **vous** | Donnez ! | Prenez ! | Partez ! |

**Règle clé :** Verbes en -ER → "tu" perd le -s final : "Parle !" (pas "Parles" ❌)
**Exception :** Devant "y" et "en", le -s revient : "Vas-y !" / "Manges-en !"

### Impératifs irréguliers — complet
| Verbe | tu | nous | vous |
|---|---|---|---|
| être | **sois** | **soyons** | **soyez** |
| avoir | **aie** | **ayons** | **ayez** |
| savoir | **sache** | **sachons** | **sachez** |
| vouloir | **veuille** | **veuillons** | **veuillez** (poli) |

### Impératif des verbes pronominaux
**Affirmatif :** verbe + trait d\'union + pronom réfléchi tonique
- "Lève-**toi** !" / "Levons-**nous** !" / "Levez-**vous** !"

**Négatif :** ne + pronom réfléchi + verbe + pas
- "Ne **te** lève pas !" / "Ne **vous** levez pas !"

### Impératif + pronom COD/COI (affirmatif)
| | Impératif | Pronom (affirmatif) |
|---|---|---|
| me → moi | "Tu m\'écoutes" | "Écoute-**moi** !" |
| te → toi | — | "Lève-**toi** !" |
| le/la/les | — | "Prends-**le** !" / "Prends-**la** !" |
| lui/leur | — | "Dis-**lui** !" / "Dis-**leur** !" |

### Pièges fréquents à l'impératif
| ❌ Erreur | ✅ Correction | Règle |
|---|---|---|
| Parle**s** à voix haute ! | **Parle** à voix haute ! | -ER : tu sans -s |
| Prend le bus ! | **Prends** le bus ! | -RE : tu avec -s |
| Sois**t** patient ! | **Sois** patient ! | être irrégulier |
| Ayez**s** confiance ! | **Ayez** confiance ! | avoir irrégulier |`,

      keyPoints: [
        'Futur proche : aller (présent) + infinitif = "je vais étudier"',
        'Impératif : 3 personnes (tu / nous / vous), sans pronom sujet',
        'Impératif -ER : "tu" perd le -s : "Parle !" / "Mange !" / "Écoute !"',
        'Impératifs irréguliers : sois/soyez / aie/ayez / sache/sachez',
        '"Ne + impératif + pas" = ordre négatif : "Ne parle pas !" / "Ne lis pas !"',
      ],

      exercises: [
        {
          id: 'a2-co-04-ex01',
          type: 'qcm',
          question: '"On ___ s\'entraîner ensemble !" (futur proche)',
          options: ['va', 'allons', 'vont', 'allez'],
          correctIndex: 1,
          explanation: '"On VA s\'entraîner." "On" = 3ème personne du singulier (comme "il/elle") → "va". "On va s\'entraîner" = we\'re going to train. En français familier, "on" remplace souvent "nous".',
        },
        {
          id: 'a2-co-04-ex02',
          type: 'qcm',
          question: 'Impératif de "parler" (tu) : "___-moi des valeurs."',
          options: ['Parles', 'Parle', 'Parlez', 'Parlons'],
          correctIndex: 1,
          explanation: '"PARLE-moi des valeurs." Impératif "tu" des verbes en -ER : PAS de -s final. "Tu parles" → impératif "Parle !" (sans s). Erreur fréquente : "Parles" ❌.',
        },
        {
          id: 'a2-co-04-ex03',
          type: 'qcm',
          question: '"Ils ___ me demander des choses ?" (futur proche)',
          options: ['vont', 'vont', 'va', 'allons'],
          correctIndex: 0,
          explanation: '"Est-ce qu\'ils VONT me demander ?" "Ils" → "vont" (3ème pluriel d\'"aller"). Futur proche = aller (présent) + infinitif : "vont demander".',
        },
        {
          id: 'a2-co-04-ex04',
          type: 'qcm',
          question: 'Impératif de "être" (vous) : "___ naturelle et confiante."',
          options: ['Êtes', 'Soyez', 'Ayez', 'Fassiez'],
          correctIndex: 1,
          explanation: '"SOYEZ naturelle et confiante." Impératif irrégulier d\'"être" : sois (tu) / soyons (nous) / SOYEZ (vous). Jamais "êtes" à l\'impératif ❌.',
        },
        {
          id: 'a2-co-04-ex05',
          type: 'qcm',
          question: '"Je ___ faire ça ce soir." (futur proche)',
          options: ['va', 'vais', 'allons', 'vas'],
          correctIndex: 1,
          explanation: '"Je VAIS faire ça ce soir." "Je" + "aller" → "vais". Futur proche de "faire" : "je vais faire" = I\'m going to do it.',
        },
        {
          id: 'a2-co-04-ex06',
          type: 'qcm',
          question: 'Impératif négatif : "Ne ___ pas tes notes !" (tu + lire)',
          options: [
            'Ne lis pas',
            'Ne lire pas',
            'Ne lisez pas',
            'Ne lisais pas',
          ],
          correctIndex: 0,
          explanation: '"Ne LIS pas tes notes !" Impératif négatif (tu) : NE + impératif + PAS. "Lire" à l\'impératif "tu" : "lis" (verbe en -RE, garde le -s). "Ne lis pas" = don\'t read.',
        },
        {
          id: 'a2-co-04-ex07',
          type: 'qcm',
          question: '"___ la Révolution française." (Impératif "tu" de "réviser")',
          options: ['Révises', 'Révise', 'Révisez', 'Révisons'],
          correctIndex: 1,
          explanation: '"RÉVISE la Révolution française." Impératif "tu" des verbes en -ER : sans -s final. "Révise" ❌ "Révises". Sophie s\'adresse à Kadiatou (tu).',
        },
        {
          id: 'a2-co-04-ex08',
          type: 'qcm',
          question: '"Vous ___ voir les résultats bientôt." (futur proche)',
          options: ['va', 'allez', 'vont', 'vas'],
          correctIndex: 1,
          explanation: '"Vous ALLEZ voir les résultats bientôt." "Vous" + "aller" → "allez". Futur proche de "voir" : "vous allez voir" = you\'re going to see.',
        },
        {
          id: 'a2-co-04-ex09',
          type: 'qcm',
          question: 'Impératif de "concentrer" (réfléchi) : "___ sur les droits des citoyens !" (vous)',
          options: ['Concentriez-vous', 'Concentrez-vous', 'Vous concentrez', 'Concentre-vous'],
          correctIndex: 1,
          explanation: '"CONCENTREZ-VOUS sur les droits des citoyens !" Impératif verbe pronominal : impératif + trait d\'union + pronom réfléchi. "vous concentrer" → "Concentrez-VOUS !" (vous). "Concentre-TOI !" (tu).',
        },
        {
          id: 'a2-co-04-ex10',
          type: 'qcm',
          question: '"La France ___ fêter le 14 juillet." (futur proche)',
          options: ['vont', 'va', 'allons', 'vas'],
          correctIndex: 1,
          explanation: '"La France VA fêter le 14 juillet." "La France" = sujet 3ème sing. → "va". Futur proche de "fêter" : "va fêter" = is going to celebrate.',
        },
        {
          id: 'a2-co-04-ex11',
          type: 'qcm',
          question: '"___ aussi les symboles nationaux !" (Impératif "tu" de "apprendre")',
          options: ['Apprend', 'Apprends', 'Apprenez', 'Apprenons'],
          correctIndex: 1,
          explanation: '"APPRENDS aussi les symboles nationaux !" Impératif "tu" de "apprendre" : "apprends" (verbe -RE → garde le -s à l\'impératif "tu"). À ne pas confondre avec les verbes -ER qui perdent le -s.',
        },
        {
          id: 'a2-co-04-ex12',
          type: 'qcm',
          question: 'Futur proche négatif : "Je ne ___ pas oublier ça."',
          options: [
            'Je ne vais oublier pas',
            'Je ne vais pas oublier',
            'Je vais ne pas oublier',
            'Je ne vas pas oublier',
          ],
          correctIndex: 1,
          explanation: '"Je NE VAIS PAS oublier ça." Futur proche négatif : NE + aller (présent) + PAS + infinitif. "Je ne VAIS PAS oublier." La négation encadre le verbe "aller" : ne...pas.',
        },
        {
          id: 'a2-co-04-ex13',
          type: 'qcm',
          question: '"Nous ___ commencer maintenant." (futur proche)',
          options: ['va', 'allons', 'vont', 'allez'],
          correctIndex: 1,
          explanation: '"Nous ALLONS commencer maintenant." "Nous" + "aller" → "allons". Futur proche : "nous allons commencer" = we\'re going to start.',
        },
        {
          id: 'a2-co-04-ex14',
          type: 'qcm',
          question: 'Impératif de "avoir" (tu) — pour exprimer confiance : "___ confiance !"',
          options: ['As', 'Aie', 'Ayez', 'Avons'],
          correctIndex: 1,
          explanation: '"AIE confiance !" Impératif irrégulier d\'"avoir" : aie (tu) / ayons (nous) / ayez (vous). "Aie confiance" = have confidence. "Aie" se prononce [ɛ] (comme "è").',
        },
        {
          id: 'a2-co-04-ex15',
          type: 'qcm',
          question: '"Par où ___ on ?" (futur proche, "commencer")',
          options: [
            'on commencera',
            'on va commencer',
            'on commence',
            'on devrait commencer',
          ],
          correctIndex: 1,
          explanation: '"Par où ON VA commencer ?" = By what are we going to start? Futur proche avec "on" : "on va + infinitif". Très courant pour exprimer un plan immédiat.',
        },
        {
          id: 'a2-co-04-ex16',
          type: 'qcm',
          question: 'Impératif de "regarder" (tu) — conjugaison correcte ?',
          options: ['Regardes-moi', 'Regarde-moi', 'Regardez-moi', 'Regardons-nous'],
          correctIndex: 1,
          explanation: '"REGARDE-moi dans les yeux." Impératif "tu" des verbes en -ER : sans -s. "Regarde !" (pas "Regardes !" ❌). Le COI "moi" suit le verbe avec trait d\'union.',
        },
        {
          id: 'a2-co-04-ex17',
          type: 'qcm',
          question: 'Futur proche vs Futur simple : "Je vais étudier" vs "J\'étudierai"',
          options: [
            '"Je vais étudier" = action plus proche/certaine / "J\'étudierai" = plus lointaine ou incertaine',
            'Ils sont totalement identiques',
            '"Je vais étudier" est familier / "J\'étudierai" est formel',
            '"J\'étudierai" est plus proche',
          ],
          correctIndex: 0,
          explanation: '"Je VAIS étudier" (futur proche) = action imminente ou certaine. "J\'ÉTUDIERAI" (futur simple) = action plus lointaine ou moins certaine. En pratique, le futur proche est beaucoup plus fréquent à l\'oral.',
        },
        {
          id: 'a2-co-04-ex18',
          type: 'qcm',
          question: '"___ bien !" (Impératif "vous" de "travailler")',
          options: ['Travailles', 'Travaillez', 'Travailliez', 'Travaillons'],
          correctIndex: 1,
          explanation: '"TRAVAILLEZ bien !" Impératif "vous" de "travailler" : "travaillez". Pour "vous", l\'impératif = même forme que le présent indicatif "vous travaillez" → "Travaillez !"',
        },
        {
          id: 'a2-co-04-ex19',
          type: 'qcm',
          question: '"Ils ___ venir à 10h." (futur proche)',
          options: ['va', 'allons', 'vont', 'allez'],
          correctIndex: 2,
          explanation: '"Ils VONT venir à 10h." "Ils" + "aller" → "vont". Futur proche : "ils vont venir" = they\'re going to come.',
        },
        {
          id: 'a2-co-04-ex20',
          type: 'qcm',
          question: 'Impératif + pronom COD : "Écris-___ !" (à moi) (vous → écrivez)',
          options: ['moi', 'me', 'je', 'lui'],
          correctIndex: 0,
          explanation: '"Écris-MOI !" À l\'impératif affirmatif, "me" devient "moi" quand il suit le verbe. "Tu m\'écris" (présent, me avant) → "Écris-MOI !" (impératif, moi après). Règle : après l\'impératif affirmatif, me → moi / te → toi.',
        },
      ],
    },
  ],
};
