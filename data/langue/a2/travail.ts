import type { LangModule } from '../types';

export const a2Travail: LangModule = {
  id: 'a2-mod-04',
  slug: 'a2-travail',
  level: 'A2',
  title: 'Travail & emploi',
  subtitle: 'Chercher un emploi, l\'entretien, le contrat et les droits',
  description: 'Rédigez un CV, passez un entretien d\'embauche et comprenez votre contrat de travail en France.',
  type: 'thematique',
  emoji: '💼',
  free: false,
  lessons: [
    {
      id: 'a2-tr-01',
      slug: 'a2-chercher-emploi',
      moduleSlug: 'a2-travail',
      level: 'A2',
      title: 'Chercher un emploi',
      description: 'Maîtrisez le vocabulaire de la recherche d\'emploi, les offres et les plateformes.',
      duration: 35,
      free: false,
      dialogue: `## Dialogue : À Pôle emploi

*Rachida s'inscrit à Pôle emploi après avoir perdu son emploi.*

**Conseiller :** Bonjour madame, asseyez-vous. Je suis Monsieur Leblanc, votre conseiller emploi. Vous venez de perdre votre emploi ?

**Rachida :** Oui, mon CDD s'est terminé il y a 3 semaines. Je travaillais dans un entrepôt logistique.

**Conseiller :** D'accord. Vous avez droit aux allocations chômage si vous avez travaillé au moins 4 mois sur les 24 derniers mois. Vous avez travaillé combien de temps dans cet emploi ?

**Rachida :** 8 mois en tout. J'ai travaillé 6 mois dans cet entrepôt et 2 mois dans une autre entreprise avant.

**Conseiller :** Parfait, vous avez droit aux allocations. On appelle ça l'ARE — Aide au Retour à l'Emploi. Le montant dépend de votre ancien salaire.

**Rachida :** Et pour chercher du travail, par où je commence ?

**Conseiller :** Je vous recommande France Travail — notre nouvelle plateforme. Vous créez un profil avec votre CV et vous postulez directement en ligne. Il y a aussi LinkedIn pour les contacts professionnels, et les sites comme Indeed ou Monster.

**Rachida :** Mon français n'est pas très bon encore. Est-ce que c'est un problème pour trouver du travail ?

**Conseiller :** Ça dépend du secteur. Pour la logistique, c'est souvent moins exigeant. Mais si vous voulez progresser, je vous conseille de faire une formation linguistique. On peut financer ça avec le CPF.

**Rachida :** Et combien vais-je toucher avec l'ARE ?

**Conseiller :** L'ARE correspond environ à 57-75% de votre salaire journalier de référence. La durée des allocations dépend de la durée travaillée. Pour 8 mois de travail, vous aurez droit à environ 8 mois d'allocations.

**Rachida :** D'accord. Est-ce que je dois venir régulièrement ici ?

**Conseiller :** Oui, vous devez actualiser votre situation chaque mois sur notre site. Et vous devrez faire des démarches actives de recherche d'emploi. Votre conseiller vérifiera vos efforts.

---

### Vocabulaire clé — La recherche d'emploi

| Terme | Définition |
|---|---|
| Le CDD | Contrat à Durée Déterminée (temporaire) |
| Le CDI | Contrat à Durée Indéterminée (permanent) |
| France Travail | Agence nationale pour l'emploi (ex Pôle emploi) |
| L'ARE | Aide au Retour à l'Emploi (allocations chômage) |
| Le CPF | Compte Personnel de Formation (budget formation) |
| Postuler | Envoyer sa candidature pour un poste |
| Le CV | Curriculum Vitae — résumé de parcours |
| La lettre de motivation | Lettre expliquant pourquoi on postule |
| Actualiser | Déclarer chaque mois sa situation à France Travail |
| La logistique | Secteur de la gestion des stocks et livraisons |`,

      linguisticPoint: `## Point linguistique : L'imparfait — description d'un état ou d'une habitude passée

### Formation de l'imparfait — règle générale
**Base : 1ère personne du pluriel au présent (sans -ons) + terminaisons**
| Pronom | Terminaison | travailler | faire | être |
|---|---|---|---|---|
| Je | **-ais** | travaillais | faisais | étais |
| Tu | **-ais** | travaillais | faisais | étais |
| Il/Elle | **-ait** | travaillait | faisait | était |
| Nous | **-ions** | travaillions | faisions | étions |
| Vous | **-iez** | travailliez | faisiez | étiez |
| Ils | **-aient** | travaillaient | faisaient | étaient |

*Exception unique : "être" → base "ét-" (pas "somm-")*

### Usages de l'imparfait — quand l'utiliser ?
| Usage | Explication | Exemple |
|---|---|---|
| **Description passée** | Comment c'était avant | Je **travaillais** dans un entrepôt |
| **Habitude passée** | Ce qu'on faisait régulièrement | Avant, je **prenais** le bus tous les jours |
| **État passé** | Une situation qui durait | Il **pleuvait** quand je suis sorti |
| **Politesse** | Rendre une demande plus douce | Je **voulais** vous demander... |

### Imparfait vs Passé composé — la différence clé
| Temps | Quand l'utiliser | Exemple |
|---|---|---|
| **Imparfait** | Situation qui durait / description | Je **travaillais** dans la logistique (situation générale) |
| **Passé composé** | Action précise et terminée | J'**ai travaillé** 8 mois (durée précise terminée) |

### Vocabulaire emploi — sigles et termes essentiels
| Terme | Signification complète | Explication |
|---|---|---|
| CDD | Contrat à Durée Déterminée | Contrat temporaire (date de fin précisée) |
| CDI | Contrat à Durée Indéterminée | Contrat permanent (sans date de fin) |
| ARE | Aide au Retour à l'Emploi | Allocations chômage versées par France Travail |
| CPF | Compte Personnel de Formation | Budget pour se former (500€/an) |
| SMIC | Salaire Minimum Interprofessionnel de Croissance | Salaire légal minimum en France |
| Intérim | Travail temporaire via agence d'intérim | Missions courtes, flexibles |

### Secteurs professionnels courants
| Secteur | Exemples de métiers |
|---|---|
| Logistique / transport | Cariste, chauffeur, magasinier |
| Bâtiment (BTP) | Maçon, électricien, plombier |
| Restauration / hôtellerie | Serveur, cuisinier, réceptionniste |
| Aide à la personne | Aide-soignant, auxiliaire de vie |
| Commerce / vente | Vendeur, caissier, gestionnaire |

### Erreurs fréquentes
- ❌ *Je travaillais 6 mois* → ✅ **J'ai travaillé 6 mois** (durée précise → passé composé)
- ❌ *J'était fatigué* → ✅ **J'étais fatigué** (être → étais, pas était)
- ❌ *Je faisais une demande hier* → ✅ **J'ai fait une demande hier** (action précise hier → passé composé)`,

      keyPoints: [
        'Imparfait : je travaillais / tu travaillais / il travaillait / nous travaillions',
        'Exception : être → j\'étais / tu étais / il était',
        'CDD (temporaire) vs CDI (permanent)',
        'ARE = allocations chômage (si ≥4 mois travaillés sur 24 mois)',
        'CPF = budget personnel pour se former (financement de formations)',
      ],

      exercises: [
        {
          id: 'a2-tr-01-ex01',
          type: 'qcm',
          question: 'Que signifie "CDD" ?',
          options: [
            'Contrat de Durée Déterminée',
            'Contrat à Durée Déterminée',
            'Contrat de Droit au Départ',
            'Convention de Durée Déterminée',
          ],
          correctIndex: 1,
          explanation: 'CDD = Contrat à Durée Déterminée. C\'est un contrat temporaire avec une date de fin fixée à l\'avance. Opposé au CDI (Contrat à Durée Indéterminée) qui est permanent.',
        },
        {
          id: 'a2-tr-01-ex02',
          type: 'conjugaison',
          question: 'Conjuguez "travailler" à l\'imparfait, 1ère personne du singulier :',
          options: ['Je travaille', 'Je travaillais', 'Je travaillerai', 'J\'ai travaillé'],
          correctIndex: 1,
          explanation: 'Imparfait de "travailler" : je TRAVAILLAIS. Base : "travaillons" (nous présent) - ons → "travaill-" + terminaison "-ais". Rachida dit "je travaillais dans un entrepôt logistique".',
        },
        {
          id: 'a2-tr-01-ex03',
          type: 'qcm',
          question: 'Combien de mois minimum faut-il avoir travaillé pour avoir droit aux allocations chômage ?',
          options: ['2 mois', '4 mois', '6 mois', '12 mois'],
          correctIndex: 1,
          explanation: 'Le conseiller dit : "au moins 4 mois sur les 24 derniers mois." Rachida a travaillé 8 mois (6+2), donc elle remplit la condition. En pratique, plus on a travaillé longtemps, plus la durée des allocations est longue.',
        },
        {
          id: 'a2-tr-01-ex04',
          type: 'qcm',
          question: 'Que signifie "ARE" ?',
          options: [
            'Aide à la Recherche d\'Emploi',
            'Aide au Retour à l\'Emploi',
            'Allocation de Reconversion Emploi',
            'Aide pour la Recherche d\'un Emploi',
          ],
          correctIndex: 1,
          explanation: 'ARE = Aide au Retour à l\'Emploi. C\'est l\'allocation chômage versée par France Travail (anciennement Pôle emploi). Son montant correspond à environ 57-75% du salaire journalier de référence.',
        },
        {
          id: 'a2-tr-01-ex05',
          type: 'conjugaison',
          question: 'Imparfait de "être" : "Elle ___ très motivée."',
          options: ['est', 'était', 'sera', 'serait'],
          correctIndex: 1,
          explanation: 'Imparfait de "être" : j\'étais / tu étais / ELLE ÉTAIT / nous étions / vous étiez / ils étaient. "Être" est irrégulier à l\'imparfait (base "ét-" contrairement aux autres verbes).',
        },
        {
          id: 'a2-tr-01-ex06',
          type: 'qcm',
          question: 'Que signifie "postuler" pour un emploi ?',
          options: [
            'Commencer à travailler',
            'Envoyer sa candidature pour un poste',
            'Quitter un emploi',
            'Négocier un salaire',
          ],
          correctIndex: 1,
          explanation: '"Postuler" = soumettre sa candidature (CV + lettre de motivation) pour un poste. "Je postule à un CDI de logisticien." Synonymes : "candidater à", "faire une demande pour", "répondre à une offre d\'emploi".',
        },
        {
          id: 'a2-tr-01-ex07',
          type: 'qcm',
          question: 'Qu\'est-ce que le CPF ?',
          options: [
            'Caisse de Prévoyance Familiale',
            'Compte Personnel de Formation — budget personnel pour se former',
            'Contrat de Prestation de Formation',
            'Certificat de Placement en Formation',
          ],
          correctIndex: 1,
          explanation: 'Le CPF (Compte Personnel de Formation) est crédité en euros chaque année (500€/an max). Il peut être utilisé pour financer des formations professionnelles de votre choix sur mon-cpf.fr. C\'est un droit individuel attaché à la personne.',
        },
        {
          id: 'a2-tr-01-ex08',
          type: 'qcm',
          question: 'Rachida a travaillé combien de mois en tout ?',
          options: ['3 mois', '6 mois', '8 mois', '24 mois'],
          correctIndex: 2,
          explanation: 'Rachida dit : "6 mois dans cet entrepôt et 2 mois dans une autre entreprise avant" = 8 mois en tout. Ce total dépasse les 4 mois minimum requis pour l\'ARE.',
        },
        {
          id: 'a2-tr-01-ex09',
          type: 'qcm',
          question: 'Quel imparfait décrit UNE HABITUDE passée ?',
          options: [
            '"Hier, j\'ai pris le bus"',
            '"Avant, je prenais le bus tous les jours"',
            '"Demain, je prendrai le bus"',
            '"Je prends le bus maintenant"',
          ],
          correctIndex: 1,
          explanation: '"Je prenais le bus tous les jours" (imparfait) = habitude passée régulière. "J\'ai pris le bus" (passé composé) = action passée précise et terminée. L\'imparfait décrit des habitudes ou des états durables dans le passé.',
        },
        {
          id: 'a2-tr-01-ex10',
          type: 'qcm',
          question: 'Comment s\'appelle la nouvelle plateforme nationale pour l\'emploi en France ?',
          options: ['Pôle emploi', 'France Travail', 'JobFrance', 'EmploiFR'],
          correctIndex: 1,
          explanation: 'Pôle emploi a été renommé France Travail en 2024. C\'est l\'agence nationale qui aide les demandeurs d\'emploi (inscription, allocations, accompagnement vers l\'emploi). La plateforme en ligne s\'appelle francetravail.fr.',
        },
        {
          id: 'a2-tr-01-ex11',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un "entrepôt logistique" ?',
          options: [
            'Un bureau administratif',
            'Un grand bâtiment où on stocke et distribue des marchandises',
            'Un magasin de vente',
            'Un site de production industrielle',
          ],
          correctIndex: 1,
          explanation: 'Un entrepôt logistique est un grand bâtiment où des marchandises sont stockées, triées et distribuées. La logistique englobe toute la chaîne de gestion des marchandises (réception, stockage, préparation de commandes, expédition).',
        },
        {
          id: 'a2-tr-01-ex12',
          type: 'qcm',
          question: 'Quelle est la différence entre un CDI et un CDD ?',
          options: [
            'Le CDI est pour les cadres, le CDD pour les ouvriers',
            'Le CDI est permanent (sans date de fin), le CDD est temporaire (date de fin fixée)',
            'Le CDI est mieux payé que le CDD',
            'Le CDD donne plus de droits que le CDI',
          ],
          correctIndex: 1,
          explanation: 'CDI (Contrat à Durée Indéterminée) = permanent, pas de date de fin fixée — c\'est le contrat de référence en France. CDD (Contrat à Durée Déterminée) = temporaire, durée fixée à l\'avance (ex : 3 mois, 8 mois).',
        },
        {
          id: 'a2-tr-01-ex13',
          type: 'conjugaison',
          question: 'Imparfait : "Nous ___ beaucoup à cette époque." (travailler)',
          options: ['travaillions', 'travaillions', 'travaillons', 'travaillerons'],
          correctIndex: 0,
          explanation: 'Imparfait de "travailler" à la 1ère personne du pluriel : NOUS TRAVAILLIONS. La terminaison est "-ions". Attention à l\'orthographe : deux "l" + "ions".',
        },
        {
          id: 'a2-tr-01-ex14',
          type: 'qcm',
          question: 'Que dit le conseiller à propos du niveau de français et de la logistique ?',
          options: [
            'Le français est toujours essentiel dans la logistique',
            'La logistique est souvent moins exigeante en termes de niveau de français',
            'Il est impossible de travailler en logistique sans bon français',
            'La logistique recrute uniquement des francophones',
          ],
          correctIndex: 1,
          explanation: 'Le conseiller dit : "Pour la logistique, c\'est souvent moins exigeant." Certains secteurs (logistique, BTP, agriculture, restauration en cuisine) sont plus accessibles avec un niveau de français limité qu\'un bureau administratif.',
        },
        {
          id: 'a2-tr-01-ex15',
          type: 'qcm',
          question: 'Le conseiller "recommande" France Travail. Quel est le sens de "recommander" ici ?',
          options: [
            'Critiquer',
            'Suggérer fortement / conseiller d\'utiliser',
            'Interdire',
            'Expliquer en détail',
          ],
          correctIndex: 1,
          explanation: '"Recommander" = strongly suggest / advise to use. "Je vous recommande France Travail" = I strongly suggest you use France Travail. C\'est plus fort que "conseiller" — il y a une conviction dans la recommandation.',
        },
        {
          id: 'a2-tr-01-ex16',
          type: 'qcm',
          question: 'Quel imparfait décrit le CONTEXTE d\'un événement ?',
          options: [
            '"J\'ai trouvé mon emploi hier"',
            '"Il pleuvait quand je suis sorti"',
            '"Je cherche du travail"',
            '"Je chercherai du travail demain"',
          ],
          correctIndex: 1,
          explanation: '"Il pleuvait quand je suis sorti" — l\'imparfait (pleuvait) décrit le contexte/décor, le passé composé (suis sorti) décrit l\'événement qui s\'y est produit. L\'imparfait = toile de fond, le passé composé = action.',
        },
        {
          id: 'a2-tr-01-ex17',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une "plateforme" en ligne pour l\'emploi ?',
          options: [
            'Un site internet qui met en relation candidats et employeurs',
            'Un quai d\'embarquement pour les travailleurs',
            'Un bureau de placement physique',
            'Un journal d\'annonces papier',
          ],
          correctIndex: 0,
          explanation: 'Une plateforme en ligne pour l\'emploi est un site internet (France Travail, Indeed, LinkedIn, Monster) qui permet aux candidats de déposer leur CV et aux employeurs de publier des offres d\'emploi.',
        },
        {
          id: 'a2-tr-01-ex18',
          type: 'qcm',
          question: 'Combien de temps Rachida a-t-elle travaillé dans l\'entrepôt logistique ?',
          options: ['2 mois', '4 mois', '6 mois', '8 mois'],
          correctIndex: 2,
          explanation: 'Rachida dit "6 mois dans cet entrepôt" (+ 2 mois dans une autre entreprise = 8 mois en tout). Le CDD de 6 mois vient de se terminer il y a 3 semaines.',
        },
        {
          id: 'a2-tr-01-ex19',
          type: 'qcm',
          question: 'Comment dit-on "I lost my job" en français ?',
          options: ['J\'ai perdu mon travail', 'Je suis sans travail', 'Mon emploi est parti', 'Je cherche du travail'],
          correctIndex: 0,
          explanation: '"J\'ai perdu mon emploi / mon travail" = I lost my job. Autres façons de le dire : "Je me suis retrouvé sans emploi" / "J\'ai été licencié(e)" (fired/made redundant) / "Mon contrat s\'est terminé" (contract ended).',
        },
        {
          id: 'a2-tr-01-ex20',
          type: 'qcm',
          question: 'Quelle formation peut-on financer avec le CPF ?',
          options: [
            'Uniquement des formations diplômantes',
            'Uniquement des formations en présentiel',
            'Des formations professionnelles reconnues (cours de langue, certifications, permis...)',
            'Uniquement des formations dans son secteur actuel',
          ],
          correctIndex: 2,
          explanation: 'Avec le CPF, on peut financer de nombreuses formations : cours de langue (DELF, TEF...), permis de conduire (depuis 2020), formations métier, certifications professionnelles, bilans de compétences. À consulter sur mon-cpf.fr.',
        },
      ],
    },

    {
      id: 'a2-tr-02',
      slug: 'a2-entretien-embauche',
      moduleSlug: 'a2-travail',
      level: 'A2',
      title: 'L\'entretien d\'embauche',
      description: 'Préparez et réussissez votre entretien d\'embauche en français.',
      duration: 35,
      free: false,
      dialogue: `## Dialogue : Entretien d'embauche

*Hamid passe un entretien pour un poste d'agent de sécurité.*

**RH :** Bonjour Hamid. Asseyez-vous. Je m'appelle Sophie Marchand, responsable des ressources humaines. Je vais vous poser quelques questions.

**Hamid :** Bonjour madame Marchand. Merci de me recevoir.

**RH :** Pouvez-vous vous présenter brièvement ?

**Hamid :** Bien sûr. Je m'appelle Hamid Slimani, j'ai 34 ans. Je suis originaire d'Algérie et je vis en France depuis 4 ans. J'ai travaillé 2 ans comme vigile dans un centre commercial à Toulouse et 1 an en surveillance nocturne dans une entreprise industrielle.

**RH :** Qu'est-ce qui vous motive à travailler chez nous ?

**Hamid :** Votre entreprise a une très bonne réputation dans la sécurité. J'aimerais travailler dans une structure plus grande pour développer mes compétences.

**RH :** Quelles sont vos points forts ?

**Hamid :** Je suis ponctuel, sérieux et calme dans les situations difficiles. Je parle arabe, français et un peu anglais. Et j'ai le CQP Agent de Prévention et de Sécurité.

**RH :** Et vos points faibles ?

**Hamid :** Je suis perfectionniste. Parfois je prends plus de temps que nécessaire pour vérifier les détails.

**RH :** Les horaires sont en 3×8. Vous êtes disponible pour les nuits et les week-ends ?

**Hamid :** Oui, tout à fait. Je n'ai pas de contrainte particulière.

**RH :** Très bien. Quelles sont vos prétentions salariales ?

**Hamid :** Je souhaiterais un salaire autour de 1 900 à 2 000 euros nets, en fonction des horaires et des responsabilités.

**RH :** C'est dans la fourchette prévue pour ce poste. Avez-vous des questions pour nous ?

**Hamid :** Oui. Est-ce que le poste est en CDI ou CDD ?

**RH :** En CDI après une période d'essai de deux mois. Vous serez basé sur le site de La Défense, avec une possibilité de rotation sur d'autres sites.

**Hamid :** Est-ce qu'il y a une mutuelle d'entreprise ?

**RH :** Oui, nous avons une mutuelle collective. L'employeur prend en charge 50% de la cotisation. Les détails vous seront envoyés si vous êtes retenu.

**Hamid :** Merci pour ces informations.

**RH :** Je vous recontacte d'ici la fin de la semaine. Avez-vous des disponibilités particulières pour un éventuel deuxième entretien ?

**Hamid :** Je suis disponible le matin ou en fin d'après-midi.

**RH :** Parfait. Merci, Hamid. Au revoir.

---

### Vocabulaire clé — L'entretien d'embauche

| Terme | Définition |
|---|---|
| Les prétentions salariales | Le salaire que vous demandez |
| La période d'essai | Début du contrat — l'employeur peut rompre plus facilement |
| Le CDI | Contrat à Durée Indéterminée — contrat stable |
| Le CDD | Contrat à Durée Déterminée — contrat temporaire |
| La mutuelle d'entreprise | Assurance santé complémentaire proposée par l'employeur |
| Les RH | Ressources Humaines — service qui gère le personnel |
| Un point fort | Une qualité professionnelle |
| Un point faible | Un défaut ou axe d'amélioration |
| La fourchette salariale | L'intervalle de salaire prévu pour un poste |`,

      linguisticPoint: `## Point linguistique : Le subjonctif présent — introduction (Je voudrais que / il faut que)

### Quand utilise-t-on le subjonctif ?
Après certaines structures exprimant : volonté, nécessité, doute, sentiment

| Structure | Exemple |
|---|---|
| **vouloir que** | Je veux **qu\'il vienne** à l\'heure |
| **il faut que** | Il faut **que vous soyez** ponctuel |
| **aimer que** | J\'aimerais **qu\'il reste** dans l\'équipe |
| **souhaiter que** | Je souhaite **que le travail soit** fait |
| **avoir peur que** | J\'ai peur **qu\'il ne parte** |
| **bien que** | **Bien qu\'il soit** étranger, il est qualifié |

### Formation du subjonctif présent
**Base = ils au présent (sans -ent) + terminaisons**
| Pronom | Terminaison | parler | finir | prendre |
|---|---|---|---|---|
| que je | -e | que je parle | que je finisse | que je prenne |
| que tu | -es | que tu parles | que tu finisses | que tu prennes |
| qu\'il/elle | -e | qu\'il parle | qu\'il finisse | qu\'il prenne |
| que nous | -ions | que nous parlions | que nous finissions | que nous prenions |
| que vous | -iez | que vous parliez | que vous finissiez | que vous preniez |
| qu\'ils | -ent | qu\'ils parlent | qu\'ils finissent | qu\'ils prennent |

### Subjonctifs irréguliers — les 6 incontournables
| Infinitif | Que je | Que vous |
|---|---|---|
| être | que je **sois** | que vous **soyez** |
| avoir | que j\'**aie** | que vous **ayez** |
| aller | que j\'**aille** | que vous **alliez** |
| faire | que je **fasse** | que vous **fassiez** |
| pouvoir | que je **puisse** | que vous **puissiez** |
| savoir | que je **sache** | que vous **sachiez** |

### Vocabulaire de l'entretien d'embauche
| Terme | Utilisation en entretien |
|---|---|
| Mes **points forts** sont… | Qualités : ponctualité, rigueur, calme |
| Mon **point faible** est… | Répondre avec un défaut-qui-est-une-qualité |
| Je **souhaiterais** / **j\'aimerais** | Conditionnel de politesse, plus professionnel que "je veux" |
| J\'ai de l\'**expérience** dans… | Secteur, durée, niveau |
| Je suis **disponible** dès le… | Date de démarrage possible |

### Erreurs fréquentes
| ❌ Erreur | ✅ Correction |
|---|---|
| Il faut que vous **êtes** ponctuel | Il faut que vous **soyez** ponctuel |
| Je veux qu\'il **vient** | Je veux qu\'il **vienne** |
| Bien qu\'il **est** qualifié | Bien qu\'il **soit** qualifié |`,

      keyPoints: [
        'Subjonctif après : vouloir que / il faut que / aimer que',
        'Formation : base (ils présent -ent) + e/es/e/ions/iez/ent',
        'Irréguliers : être → sois / avoir → aie / aller → aille / faire → fasse',
        'Points forts à l\'entretien : qualités professionnelles',
        'Prétentions salariales = salaire souhaité',
      ],

      exercises: [
        {
          id: 'a2-tr-02-ex01',
          type: 'qcm',
          question: 'Hamid a combien d\'années d\'expérience en sécurité ?',
          options: ['1 an', '2 ans', '3 ans', '4 ans'],
          correctIndex: 2,
          explanation: 'Hamid a : 2 ans dans un centre commercial + 1 an en surveillance nocturne = 3 ans d\'expérience en sécurité. Il vit en France depuis 4 ans mais a travaillé dans la sécurité pendant 3 ans.',
        },
        {
          id: 'a2-tr-02-ex02',
          type: 'qcm',
          question: 'Que signifie "CQP Agent de Prévention et de Sécurité" ?',
          options: [
            'Un certificat de formation professionnelle en sécurité',
            'Une carte professionnelle',
            'Un diplôme universitaire',
            'Une certification de langue',
          ],
          correctIndex: 0,
          explanation: 'CQP = Certificat de Qualification Professionnelle. Le CQP APS (Agent de Prévention et Sécurité) est la certification obligatoire pour exercer légalement le métier d\'agent de sécurité en France.',
        },
        {
          id: 'a2-tr-02-ex03',
          type: 'qcm',
          question: 'Quel subjonctif est correct après "il faut que" ?',
          options: ['Il faut que vous êtes ponctuel', 'Il faut que vous soyez ponctuel', 'Il faut que vous serez ponctuel', 'Il faut que vous étiez ponctuel'],
          correctIndex: 1,
          explanation: '"Il faut que + subjonctif." Subjonctif de "être" à la 2ème personne du pluriel = SOYEZ. "Il faut que vous SOYEZ ponctuel." Ne pas confondre avec l\'indicatif "vous êtes".',
        },
        {
          id: 'a2-tr-02-ex04',
          type: 'qcm',
          question: 'Que signifie "les horaires en 3×8" ?',
          options: [
            'Travailler 3 fois par semaine 8 heures',
            'Un système en 3 équipes de 8 heures couvrant 24h/24',
            'Travailler de 8h à 11h',
            '8 heures de pause sur 3 jours',
          ],
          correctIndex: 1,
          explanation: '"3×8" (trois fois huit) = un système de 3 équipes qui se relaient toutes les 8 heures pour assurer une couverture 24h/24. Équipes typiques : matin (6h-14h), après-midi (14h-22h), nuit (22h-6h). Très courant en sécurité, industrie, hôpitaux.',
        },
        {
          id: 'a2-tr-02-ex05',
          type: 'qcm',
          question: 'Quel "point fort" Hamid cite-t-il en premier ?',
          options: ['Ses langues', 'Sa ponctualité', 'Son certificat professionnel', 'Son calme'],
          correctIndex: 1,
          explanation: 'Hamid dit "Je suis ponctuel, sérieux et calme dans les situations difficiles." La ponctualité est la première qualité citée. Elle est très valorisée en France dans le monde professionnel.',
        },
        {
          id: 'a2-tr-02-ex06',
          type: 'qcm',
          question: 'Que signifie "prétentions salariales" ?',
          options: [
            'Vos qualifications professionnelles',
            'Le salaire que vous demandez / souhaitez',
            'Vos conditions de travail préférées',
            'Le salaire que vous avez actuellement',
          ],
          correctIndex: 1,
          explanation: '"Prétentions salariales" = le salaire souhaité pour le poste. On vous demande souvent cette information en entretien ou sur un formulaire de candidature. Il faut se renseigner sur les salaires du marché avant de répondre.',
        },
        {
          id: 'a2-tr-02-ex07',
          type: 'qcm',
          question: 'Quel subjonctif est correct : "Je voudrais qu\'il ___" (venir)',
          options: ['vient', 'vienne', 'venait', 'viendra'],
          correctIndex: 1,
          explanation: 'Subjonctif de "venir" : que je vienne / que tu viennes / qu\'il VIENNE... "Je voudrais qu\'il VIENNE" = I would like him to come. Après "vouloir que", le subjonctif est obligatoire.',
        },
        {
          id: 'a2-tr-02-ex08',
          type: 'qcm',
          question: 'Hamid dit qu\'il est "perfectionniste". Pourquoi le cite-t-il comme point faible ?',
          options: [
            'Parce que c\'est honnête',
            'Stratégiquement : c\'est un "défaut" qui peut aussi être une qualité',
            'Parce que l\'employeur l\'a demandé',
            'Parce qu\'il ne sait pas ce qu\'est un point fort',
          ],
          correctIndex: 1,
          explanation: 'Le perfectionnisme est un "défaut stratégique" en entretien : il peut ralentir le travail (négatif) mais montre aussi le souci de qualité (positif). C\'est une réponse classique qui montre de la conscience de soi sans révéler un vrai problème.',
        },
        {
          id: 'a2-tr-02-ex09',
          type: 'qcm',
          question: 'Que signifie "brièvement" dans "présentez-vous brièvement" ?',
          options: ['En détail', 'En bref / en peu de temps', 'Formellement', 'Par écrit'],
          correctIndex: 1,
          explanation: '"Brièvement" = in brief / briefly. "Présentez-vous brièvement" = presentez-vous en quelques phrases, sans trop de détails. Adverbe de manière dérivé de "bref" (brief/short).',
        },
        {
          id: 'a2-tr-02-ex10',
          type: 'qcm',
          question: 'Hamid répond "je n\'ai pas de contrainte particulière" aux horaires. Que signifie-t-il ?',
          options: [
            'Il ne veut pas travailler la nuit',
            'Il est disponible pour tous les horaires sans limitation',
            'Il préfère les horaires de jour',
            'Il a des contraintes familiales',
          ],
          correctIndex: 1,
          explanation: '"Pas de contrainte particulière" = no specific restriction. Hamid dit qu\'il peut travailler à n\'importe quelle heure (nuit, week-end) sans problème. C\'est une réponse positive qui montre sa flexibilité.',
        },
        {
          id: 'a2-tr-02-ex11',
          type: 'qcm',
          question: 'Quel subjonctif est correct pour "avoir" : "Il faut que j\'___"',
          options: ['aie', 'ai', 'ais', 'est'],
          correctIndex: 0,
          explanation: 'Subjonctif de "avoir" : que j\'AIE / que tu aies / qu\'il ait / que nous ayons / que vous ayez / qu\'ils aient. "Il faut que j\'AIE mes papiers" = I need to have my papers.',
        },
        {
          id: 'a2-tr-02-ex12',
          type: 'qcm',
          question: 'Combien de langues parle Hamid ?',
          options: ['1 langue', '2 langues', '3 langues', '4 langues'],
          correctIndex: 2,
          explanation: 'Hamid dit "Je parle arabe, français et un peu anglais" = 3 langues (arabe, français, anglais). Les compétences linguistiques sont un atout dans de nombreux postes en France.',
        },
        {
          id: 'a2-tr-02-ex13',
          type: 'qcm',
          question: 'Comment prononce-t-on la formule de politesse pour remercier d\'un entretien ?',
          options: [
            '"Merci pour tout"',
            '"Merci de me recevoir"',
            '"Merci d\'être là"',
            '"Merci de votre gentillesse"',
          ],
          correctIndex: 1,
          explanation: '"Merci de me recevoir" est une formule de politesse appropriée en début d\'entretien. On peut aussi dire "Merci de m\'accorder cet entretien" (plus formel). "De" + infinitif = pour + gérondif en anglais.',
        },
        {
          id: 'a2-tr-02-ex14',
          type: 'qcm',
          question: 'Quel est le bon subjonctif de "aller" après "il faut que je" ?',
          options: ['vais', 'aille', 'allais', 'irai'],
          correctIndex: 1,
          explanation: 'Subjonctif de "aller" : que j\'AILLE (irrégulier). "Il faut que j\'AILLE à cet entretien" = I need to go to this interview.',
        },
        {
          id: 'a2-tr-02-ex15',
          type: 'qcm',
          question: 'Hamid dit qu\'il veut "développer ses compétences". Que signifie "compétences" ?',
          options: [
            'Son salaire',
            'Ses connaissances et habiletés professionnelles',
            'Ses relations professionnelles',
            'Sa réputation',
          ],
          correctIndex: 1,
          explanation: '"Compétences" = skills + knowledge = savoir-faire professionnel. "Développer ses compétences" = améliorer et acquérir de nouvelles capacités professionnelles. C\'est un mot-clé important dans les CV et les entretiens.',
        },
        {
          id: 'a2-tr-02-ex16',
          type: 'qcm',
          question: 'Comment répondre à "Quelles sont vos prétentions salariales ?" de façon professionnelle ?',
          options: [
            '"Je veux 3 000 euros"',
            '"Mes prétentions se situent entre X et Y euros bruts mensuels, selon les avantages proposés"',
            '"Je ne sais pas, vous décidez"',
            '"Le plus possible"',
          ],
          correctIndex: 1,
          explanation: 'La réponse professionnelle donne une fourchette (range) basée sur une recherche préalable du marché. "Entre X et Y euros bruts mensuels" est plus souple qu\'un chiffre fixe et montre qu\'on a réfléchi. Précisez "bruts" (avant charges).',
        },
        {
          id: 'a2-tr-02-ex17',
          type: 'qcm',
          question: 'Quelle est la différence entre "responsable RH" et "responsable d\'équipe" ?',
          options: [
            'Aucune différence',
            'RH s\'occupe du personnel (recrutement, paie, formation), l\'équipe est la gestion opérationnelle quotidienne',
            'L\'équipe est plus importante que RH',
            'RH est un poste moins bien payé',
          ],
          correctIndex: 1,
          explanation: 'RH (Ressources Humaines) gère tout ce qui concerne le personnel : recrutement, contrats, salaires, formation, conflits. Le responsable d\'équipe gère le travail quotidien opérationnel de son équipe.',
        },
        {
          id: 'a2-tr-02-ex18',
          type: 'qcm',
          question: 'Subjonctif de "faire" : "Il faut que tu ___ attention."',
          options: ['fais', 'fasse', 'faisais', 'fera'],
          correctIndex: 1,
          explanation: 'Subjonctif de "faire" : que je FASSE (irrégulier). "Il faut que tu FASSES attention" = you need to be careful. Les subjonctifs irréguliers les plus importants : être → sois / avoir → aie / faire → fasse / aller → aille.',
        },
        {
          id: 'a2-tr-02-ex19',
          type: 'qcm',
          question: 'Que signifie "surveillance nocturne" ?',
          options: [
            'Surveillance de nuit',
            'Surveillance par caméra',
            'Surveillance d\'un réseau informatique',
            'Surveillance d\'un parking',
          ],
          correctIndex: 0,
          explanation: '"Nocturne" = de nuit. "Surveillance nocturne" = garde ou surveillance pendant les heures de nuit. Hamid a travaillé en surveillance nocturne dans une entreprise industrielle = il faisait la garde de nuit.',
        },
        {
          id: 'a2-tr-02-ex20',
          type: 'qcm',
          question: 'Quelle question ne faut-il PAS poser à un candidat lors d\'un entretien en France ?',
          options: [
            '"Quelle est votre expérience ?"',
            '"Êtes-vous disponible le week-end ?"',
            '"Êtes-vous enceinte ou prévoyez-vous d\'avoir des enfants ?"',
            '"Parlez-vous d\'autres langues ?"',
          ],
          correctIndex: 2,
          explanation: 'En France, il est illégal de poser des questions sur la grossesse, l\'état civil, la religion, l\'orientation sexuelle ou la nationalité en entretien. Ces questions peuvent constituer de la discrimination à l\'embauche.',
        },
      ],
    },

    {
      id: 'a2-tr-03',
      slug: 'a2-contrat-travail',
      moduleSlug: 'a2-travail',
      level: 'A2',
      title: 'Le contrat de travail et le salaire',
      description: 'Comprenez votre contrat de travail, votre bulletin de salaire et vos droits fondamentaux.',
      duration: 35,
      free: false,
      dialogue: `## Texte : Comprendre son bulletin de salaire

Chaque mois, votre employeur vous remet un bulletin de salaire (ou fiche de paie). Ce document est important car il récapitule votre rémunération et vos cotisations sociales. **Conservez tous vos bulletins** : ils sont nécessaires pour les demandes de crédit, de logement social, et les démarches administratives.

**Les éléments du bulletin de salaire :**

En haut du bulletin figurent : le nom et l'adresse de l'employeur, votre nom, votre numéro de Sécurité sociale, votre poste (qualification), et la période concernée.

**Le salaire brut** est votre salaire avant déduction des cotisations. En France, le SMIC (Salaire Minimum Interprofessionnel de Croissance) est le salaire minimum légal. En 2025, il est d'environ 1 801 euros bruts par mois pour un temps plein (35 heures).

**Les cotisations salariales** sont les sommes retenues sur votre salaire brut pour financer la Sécurité sociale, la retraite, l'assurance chômage... Elles représentent environ 22-25% du salaire brut.

**Le salaire net** est ce que vous recevez réellement sur votre compte bancaire. Il vaut environ 75-78% du salaire brut.

**Les cotisations patronales** sont à la charge de l'employeur. Elles sont plus élevées que les cotisations salariales (environ 40-45% du salaire brut en plus).

**La convention collective** est l'accord de branche qui définit les conditions de travail spécifiques à votre secteur (salaires minimum du secteur, congés supplémentaires, avantages...).

---

### Dialogue : Question sur la fiche de paie

*Ahmed ne comprend pas une ligne de son bulletin. Il en parle à son responsable RH.*

**Ahmed :** Bonjour madame. Je voulais vous poser une question sur mon bulletin de ce mois.

**RH :** Bien sûr, qu'est-ce qui vous pose problème ?

**Ahmed :** Je vois une ligne "IJSS" avec une déduction de 50 euros. Qu'est-ce que c'est ?

**RH :** Ce sont les "Indemnités Journalières de Sécurité Sociale." Vous avez eu 3 jours d'arrêt maladie ce mois-ci. Pendant ces jours, c'est la Sécurité sociale qui vous paie, pas votre employeur. Il y a donc une retenue correspondante.

**Ahmed :** Mais j'avais un arrêt de travail !

**RH :** Oui, et la Sécu vous remboursera ces 3 jours directement. C'est pour ça qu'il y a une retenue sur votre salaire — pour éviter de vous payer deux fois. Vous recevrez l'argent de la CPAM par virement.

**Ahmed :** Ah d'accord ! Et cette ligne "tickets restaurant" à 60 euros ?

**RH :** C'est votre part sur les tickets restaurant. L'employeur prend en charge 60% du ticket, et vous cotisez 40%. En échange, vous avez 20 tickets de 10 euros ce mois. C'est avantageux !

---

### Vocabulaire clé — Le bulletin de salaire

| Terme | Signification |
|---|---|
| Salaire brut | Salaire avant déductions |
| Salaire net | Ce que vous recevez réellement |
| Les cotisations | Les prélèvements obligatoires sur le salaire |
| SMIC | Salaire minimum légal en France |
| IJSS | Indemnités journalières de Sécurité Sociale |
| Convention collective | Accord de branche spécifique à un secteur |
| Les congés payés | 5 semaines de vacances payées par an (droit légal) |
| Heures supplémentaires | Heures travaillées au-delà de 35h/semaine |`,

      linguisticPoint: `## Point linguistique : Les pronoms relatifs qui, que, dont, où

### Les pronoms relatifs (pour relier deux propositions)
| Pronom | Rôle grammatical | Exemple |
|---|---|---|
| **qui** | sujet du verbe suivant | C\'est l\'employeur **qui** paie les charges |
| **que** (qu\') | COD du verbe suivant | C\'est le bulletin **que** vous recevez |
| **dont** | complément avec "de" | C\'est le poste **dont** je vous ai parlé |
| **où** | complément de lieu ou de temps | L\'entreprise **où** je travaille |

### Comment choisir entre QUI et QUE ?
- **QUI** = le nom qui précède est **sujet** du verbe relatif : "Le salarié **qui** travaille..." (le salarié travaille)
- **QUE** = le nom qui précède est **objet** du verbe relatif : "Le contrat **que** je signe..." (je signe le contrat)

### Exemples dans le contexte du travail
| Phrase | Pronom | Pourquoi |
|---|---|---|
| Le contrat **qui** commence lundi est un CDI | qui | "le contrat commence" → sujet |
| Le salaire **que** vous recevez est net | que | "vous recevez le salaire" → objet |
| La convention **dont** dépend votre secteur | dont | "dépendre de" → de |
| L\'entreprise **où** je travaille | où | lieu |

### DONT — cas particuliers
- J\'ai un poste **dont** je suis fier (être fier **de**)
- Le contrat **dont** vous avez besoin (avoir besoin **de**)
- Le dossier **dont** j\'ai parlé (parler **de**)

### Le SMIC — points clés
| Information | Détail |
|---|---|
| Signification | Salaire Minimum Interprofessionnel de Croissance |
| Revalorisation | Chaque 1er janvier (+ indexé sur l\'inflation) |
| Montant 2025 | ≈ 1 801 € bruts/mois pour 35h |
| S\'applique à | Tous les salariés (CDI, CDD, étrangers, apprentis) |
| Infraction | Payer en dessous = délit passible d\'amende |

### Erreurs fréquentes avec les pronoms relatifs
| ❌ Erreur | ✅ Correction |
|---|---|
| L\'employeur **qu\'**a signé | L\'employeur **qui** a signé (sujet → qui) |
| Le travail **qui** je fais | Le travail **que** je fais (objet → que) |
| La société **de qui** je dépends | La société **dont** je dépends (de + antécédent → dont) |`,

      keyPoints: [
        'QUI = sujet / QUE = COD / DONT = complément de / OÙ = lieu ou temps',
        'Salaire brut → cotisations (-22-25%) → salaire net',
        'SMIC 2024 ≈ 1 766€ bruts/mois (temps plein 35h)',
        'Convention collective = règles supplémentaires selon le secteur',
        'Cotisations patronales (employeur) ≈ 40-45% du brut EN PLUS',
      ],

      exercises: [
        {
          id: 'a2-tr-03-ex01',
          type: 'qcm',
          question: 'Que signifie "SMIC" ?',
          options: [
            'Syndicat Minimal Interprofessionnel de Croissance',
            'Salaire Minimum Interprofessionnel de Croissance',
            'Salaire Mensuel Indexé et Conventionnel',
            'Service Minimal d\'Intégration Commerciale',
          ],
          correctIndex: 1,
          explanation: 'SMIC = Salaire Minimum Interprofessionnel de Croissance. C\'est le salaire minimum légal en France. Tout employeur doit payer au moins le SMIC. En 2024 : environ 1 766€ bruts/mois pour 35h.',
        },
        {
          id: 'a2-tr-03-ex02',
          type: 'qcm',
          question: 'Quelle est la différence entre salaire brut et salaire net ?',
          options: [
            'Le brut est toujours plus élevé que le net',
            'Le brut est avant déduction des cotisations, le net est ce qu\'on reçoit réellement',
            'Le net est plus élevé que le brut',
            'Ils sont identiques dans la pratique',
          ],
          correctIndex: 1,
          explanation: 'Salaire BRUT = salaire avant déduction. Salaire NET = brut - cotisations salariales = ce que vous recevez sur votre compte. Net ≈ 75-78% du brut. Toujours préciser "brut" ou "net" quand on parle de salaire.',
        },
        {
          id: 'a2-tr-03-ex03',
          type: 'qcm',
          question: 'Choisissez le bon pronom relatif : "C\'est le contrat ___ j\'ai signé."',
          options: ['qui', 'que', 'dont', 'où'],
          correctIndex: 1,
          explanation: '"Que" est le pronom relatif COD (objet direct). "C\'est le contrat QUE j\'ai signé" = "j\'ai signé le contrat". Le sujet de "signer" est "je", donc "le contrat" est COD → "que".',
        },
        {
          id: 'a2-tr-03-ex04',
          type: 'qcm',
          question: 'Environ quel pourcentage du salaire brut représentent les cotisations salariales ?',
          options: ['5-10%', '22-25%', '40-45%', '50-55%'],
          correctIndex: 1,
          explanation: 'Les cotisations salariales représentent environ 22-25% du salaire brut. Elles financent : Sécurité sociale, retraite, assurance chômage, complémentaire santé. Le reste (75-78%) = salaire net.',
        },
        {
          id: 'a2-tr-03-ex05',
          type: 'qcm',
          question: 'Choisissez le bon pronom : "L\'entreprise ___ je travaille est grande."',
          options: ['qui', 'que', 'dont', 'où'],
          correctIndex: 3,
          explanation: '"Où" s\'utilise pour les lieux (et parfois le temps). "L\'entreprise OÙ je travaille" = "je travaille dans cette entreprise". "Où" remplace "dans laquelle / à laquelle".',
        },
        {
          id: 'a2-tr-03-ex06',
          type: 'qcm',
          question: 'Qu\'est-ce que les "cotisations patronales" ?',
          options: [
            'Les cotisations payées par le salarié',
            'Les cotisations payées par l\'employeur en plus du salaire brut',
            'Les cotisations pour la retraite uniquement',
            'Les impôts sur le revenu',
          ],
          correctIndex: 1,
          explanation: 'Les cotisations patronales sont payées par l\'EMPLOYEUR (patron) en plus du salaire brut. Elles représentent environ 40-45% du salaire brut. Le "coût total employeur" = salaire brut + cotisations patronales.',
        },
        {
          id: 'a2-tr-03-ex07',
          type: 'qcm',
          question: 'Choisissez le bon pronom : "C\'est le poste ___ je rêvais."',
          options: ['qui', 'que', 'dont', 'où'],
          correctIndex: 2,
          explanation: '"Dont" remplace un groupe avec "de". "Je rêvais DE ce poste" → "le poste DONT je rêvais". Les verbes qui se construisent avec "de" : rêver de / parler de / avoir besoin de / se souvenir de...',
        },
        {
          id: 'a2-tr-03-ex08',
          type: 'qcm',
          question: 'Le SMIC s\'applique à qui ?',
          options: [
            'Uniquement aux Français',
            'Uniquement aux CDI',
            'À tous les salariés en France (français ou étrangers, CDI ou CDD)',
            'Uniquement aux moins de 26 ans',
          ],
          correctIndex: 2,
          explanation: 'Le SMIC s\'applique à TOUS les salariés travaillant en France, quelle que soit leur nationalité ou le type de contrat. Payer en dessous du SMIC est illégal.',
        },
        {
          id: 'a2-tr-03-ex09',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une "convention collective" ?',
          options: [
            'Une réunion de salariés',
            'Un accord de branche professionnel qui complète le Code du travail',
            'Un contrat entre employeurs',
            'Un syndicat de travailleurs',
          ],
          correctIndex: 1,
          explanation: 'Une convention collective est un accord négocié entre syndicats d\'employeurs et syndicats de salariés d\'un même secteur. Elle peut prévoir de meilleures conditions que le Code du travail (salaires minimum supérieurs au SMIC, congés supplémentaires...).',
        },
        {
          id: 'a2-tr-03-ex10',
          type: 'qcm',
          question: 'Choisissez le bon pronom : "C\'est l\'employeur ___ paie les charges patronales."',
          options: ['qui', 'que', 'dont', 'où'],
          correctIndex: 0,
          explanation: '"Qui" est le pronom relatif SUJET. "L\'employeur QUI paie" = l\'employeur est le sujet de "paie". Quand le pronom remplace un sujet → "qui".',
        },
        {
          id: 'a2-tr-03-ex11',
          type: 'qcm',
          question: 'Que finance l\'assurance chômage (prélevée sur les cotisations) ?',
          options: [
            'Les retraites',
            'Les soins médicaux',
            'Les allocations des personnes qui ont perdu leur emploi',
            'Les accidents du travail',
          ],
          correctIndex: 2,
          explanation: 'L\'assurance chômage (prélevée sur les cotisations) finance les allocations chômage (ARE) versées aux personnes qui ont involontairement perdu leur emploi et cherchent à retrouver un travail.',
        },
        {
          id: 'a2-tr-03-ex12',
          type: 'qcm',
          question: 'Si vous gagnez 2 000€ bruts, combien recevrez-vous net approximativement ?',
          options: ['1 200€', '1 500-1 560€', '1 800€', '2 000€'],
          correctIndex: 1,
          explanation: 'Net ≈ 75-78% du brut. 2 000€ × 0,75 = 1 500€ / 2 000€ × 0,78 = 1 560€. Donc environ 1 500-1 560€ nets. Les cotisations représentent environ 22-25% du brut.',
        },
        {
          id: 'a2-tr-03-ex13',
          type: 'qcm',
          question: 'Quand est revalorisé le SMIC ?',
          options: ['Tous les 5 ans', 'Chaque mois', 'Chaque 1er janvier (et parfois en cours d\'année)', 'Seulement si le gouvernement le décide'],
          correctIndex: 2,
          explanation: 'Le SMIC est revalorisé chaque 1er janvier au minimum. Il peut être augmenté en cours d\'année si l\'inflation dépasse un seuil. Des "coups de pouce" supplémentaires peuvent aussi être décidés par le gouvernement.',
        },
        {
          id: 'a2-tr-03-ex14',
          type: 'qcm',
          question: 'Que trouve-t-on en haut d\'un bulletin de salaire ?',
          options: [
            'Uniquement le salaire net',
            'Nom employeur, nom salarié, numéro de Sécu, poste, période',
            'Le montant des impôts',
            'La convention collective uniquement',
          ],
          correctIndex: 1,
          explanation: 'En haut du bulletin de salaire figurent les informations d\'identification : nom et adresse de l\'employeur, nom du salarié, numéro de Sécurité sociale, qualification (poste), et la période concernée (ex : octobre 2024).',
        },
        {
          id: 'a2-tr-03-ex15',
          type: 'qcm',
          question: 'Complétez avec le bon pronom relatif : "Le jour ___ j\'ai commencé était un lundi."',
          options: ['qui', 'que', 'dont', 'où'],
          correctIndex: 3,
          explanation: '"Où" peut exprimer le TEMPS (en plus du lieu). "Le jour OÙ j\'ai commencé" = the day when I started. "Le mois où", "l\'année où", "l\'époque où" sont des structures fréquentes.',
        },
        {
          id: 'a2-tr-03-ex16',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un "prélèvement" sur le salaire ?',
          options: [
            'Une augmentation',
            'Une somme déduite automatiquement du salaire',
            'Un bonus',
            'Une avance sur salaire',
          ],
          correctIndex: 1,
          explanation: '"Prélèvement" = amount deducted automatically. Les cotisations sociales sont prélevées automatiquement sur le salaire brut avant que vous receviez le net. Le prélèvement à la source (pour les impôts) fonctionne de même depuis 2019.',
        },
        {
          id: 'a2-tr-03-ex17',
          type: 'qcm',
          question: 'Pour un temps plein en France, combien d\'heures par semaine travaille-t-on légalement ?',
          options: ['32 heures', '35 heures', '39 heures', '40 heures'],
          correctIndex: 1,
          explanation: 'La durée légale du travail en France est de 35 heures par semaine (loi Aubry de 2000). Les heures au-delà des 35h sont des heures supplémentaires (majorées d\'au moins 25%). Certains secteurs ont des conventions différentes.',
        },
        {
          id: 'a2-tr-03-ex18',
          type: 'qcm',
          question: 'Pronom relatif : "Les avantages ___ bénéficient les salariés de ce secteur sont importants."',
          options: ['qui', 'que', 'dont', 'auxquels'],
          correctIndex: 3,
          explanation: '"Bénéficier de quelque chose" → si l\'avantage est une chose, on utilise "dont" ou mieux "auxquels" (pronom relatif composé). "Les avantages DONT bénéficient les salariés" = les avantages desquels bénéficient... (plus soutenu : "auxquels").',
        },
        {
          id: 'a2-tr-03-ex19',
          type: 'qcm',
          question: 'Quel document mensuel récapitule votre rémunération ?',
          options: ['Le contrat de travail', 'Le bulletin de salaire / la fiche de paie', 'L\'attestation employeur', 'Le relevé bancaire'],
          correctIndex: 1,
          explanation: 'Le bulletin de salaire (ou fiche de paie) est le document mensuel récapitulant : salaire brut, cotisations, salaire net, et informations sur l\'emploi. L\'employeur est obligé de le remettre chaque mois.',
        },
        {
          id: 'a2-tr-03-ex20',
          type: 'qcm',
          question: 'Que signifie "indexé sur l\'inflation" pour le SMIC ?',
          options: [
            'Le SMIC n\'augmente jamais',
            'Le SMIC augmente automatiquement si les prix augmentent',
            'Le SMIC est calculé par région',
            'Le SMIC dépend du secteur d\'activité',
          ],
          correctIndex: 1,
          explanation: '"Indexé sur l\'inflation" = augmente automatiquement quand les prix à la consommation augmentent. Si l\'inflation dépasse 2%, le SMIC est automatiquement revalorisé. Cela protège le pouvoir d\'achat des travailleurs au SMIC.',
        },
      ],
    },

    {
      id: 'a2-tr-04',
      slug: 'a2-droits-travailleurs',
      moduleSlug: 'a2-travail',
      level: 'A2',
      title: 'Les droits des travailleurs',
      description: 'Connaissez vos droits au travail : congés, arrêts maladie, syndicats et discrimination.',
      duration: 35,
      free: false,
      dialogue: `## Dialogue : Problème au travail

*Nadia a un problème avec son employeur. Elle appelle une assistante syndicale.*

**Nadia :** Bonjour. Je vous appelle parce que mon employeur m'a demandé de travailler le dimanche sans me payer de majoration. C'est normal ?

**Syndicale :** Non, ce n'est pas normal. En France, le travail du dimanche est encadré par la loi. Dans la plupart des secteurs, il donne droit à une majoration d'au moins 50% du salaire horaire, sauf convention collective différente.

**Nadia :** Il m'a aussi dit que je n'avais pas le droit à mes congés payés parce que j'étais en CDD.

**Syndicale :** C'est faux ! Tous les salariés en France ont droit aux congés payés, qu'ils soient en CDI ou en CDD. Vous avez droit à 2,5 jours ouvrables par mois travaillé, soit 30 jours pour un an (environ 5 semaines).

**Nadia :** Qu'est-ce que je peux faire ?

**Syndicale :** D'abord, gardez des traces écrites de tout — vos horaires, vos échanges email. Ensuite, vous pouvez saisir l'Inspection du travail. C'est une administration qui contrôle le respect du droit du travail. Votre employeur risque une amende.

**Nadia :** J'ai peur des représailles si je me plains.

**Syndicale :** La loi interdit les représailles contre un salarié qui signale une infraction. Si votre employeur vous licencie ou vous punit après votre plainte, c'est un licenciement abusif — et vous pouvez demander des dommages et intérêts.

**Nadia :** Et si je suis étrangère, est-ce que j'ai les mêmes droits ?

**Syndicale :** Absolument. Tous les salariés en France — français ou étrangers, avec ou sans nationalité française — ont les mêmes droits du travail dès lors qu'ils ont un contrat légal. La loi ne fait pas de distinction.

**Nadia :** J'ai un titre de séjour salarié. Mon employeur peut-il me licencier si mon titre expire ?

**Syndicale :** Il doit attendre que votre titre soit expiré et non renouvelé. Pendant le renouvellement en cours, vous pouvez continuer à travailler si vous avez le récépissé de votre demande. Pensez à lui transmettre ce document.

---

### Vocabulaire clé — Les droits au travail

| Terme | Définition |
|---|---|
| Les congés payés | 5 semaines de vacances payées par an |
| Le syndicat | Organisation qui défend les droits des salariés |
| L'Inspection du travail | Administration qui contrôle les employeurs |
| Les représailles | Punition après avoir signalé un problème |
| Le licenciement abusif | Licenciement sans raison valable ou illégal |
| Les dommages et intérêts | Compensation financière en cas de préjudice |
| La majoration | Supplément de salaire (ex. +50% le dimanche) |
| Les heures supplémentaires | Heures au-delà des 35h légales par semaine |`,

      linguisticPoint: `## Point linguistique : Les structures de restriction et de négation complexe

### Structures restrictives
| Structure | Sens | Exemple |
|---|---|---|
| **ne... que** | seulement | "Il ne travaille **que** le matin" |
| **seulement** | only | "J\'ai travaillé **seulement** 2 mois" |
| **uniquement** | uniquement | "**Uniquement** les CDI ont ce droit" |
| **à condition de/que** | condition | "À condition **d\'avoir** un contrat" |
| **à moins de/que** | sauf si | "À moins **qu\'il** ne parte" |

### Structures de négation complexe
| Négation | Sens | Exemple |
|---|---|---|
| **ne... jamais** | never | "Il ne m\'a **jamais** payé les heures sup." |
| **ne... rien** | nothing | "Je ne sais **rien** de mes droits" |
| **ne... personne** | nobody | "**Personne** ne m\'a expliqué le contrat" |
| **ne... plus** | no longer | "Je ne travaille **plus** là-bas" |
| **ne... nulle part** | nowhere | "Je ne trouve **nulle part** ce document" |
| **ni... ni...** | neither nor | "Il n\'a **ni** augmenté **ni** amélioré mes conditions" |

### Position des éléments négatifs
- **Jamais / rien / plus** : entre auxiliaire et participe au passé composé
  - "Je **n\'ai jamais** reçu ma fiche de paie"
  - "Il **n\'a rien** signé"
  - "Elle **n\'a plus** travaillé depuis"

### Droits fondamentaux des travailleurs en France
| Droit | Détail |
|---|---|
| Congés payés | 2,5 j/mois = 30 jours/an (5 semaines) — CDI **et** CDD |
| Repos hebdomadaire | ≥ 1 jour/semaine (généralement dimanche) |
| Heures sup. | +25% (8 premières heures) / +50% (au-delà) |
| Travail dimanche | Majoré selon convention collective (≥ 50% en général) |
| Arrêt maladie | Remboursé par la Sécu après 3 jours de carence |
| Salaire minimum | SMIC (2025 ≈ 1 801€ bruts) — s\'applique à tous |
| Égalité | Mêmes droits pour salariés français et étrangers |

### Erreurs fréquentes
| ❌ Erreur | ✅ Correction |
|---|---|
| Je n\'ai pas **jamais** | Je n\'ai **jamais** (pas + jamais = double négation incorrecte en fr.) |
| **Personne** n\'est **pas** venu | **Personne** n\'est venu (personne remplace déjà la négation) |
| Il ne travaille **que seulement** le matin | Il ne travaille **que** le matin (que = seulement, pas les deux) |`,

      keyPoints: [
        'Ne... que (seulement) / ne... jamais / ne... rien / ne... personne / ne... plus',
        'Congés payés : 2,5 j/mois = 30 jours/an — VALABLE CDI ET CDD',
        'Travail dimanche = majoration ≥50% en général',
        'Inspection du travail = contrôle du respect du droit du travail',
        'Représailles après plainte = licenciement abusif (indemnisable)',
      ],

      exercises: [
        {
          id: 'a2-tr-04-ex01',
          type: 'qcm',
          question: 'Les CDD ont-ils droit aux congés payés en France ?',
          options: [
            'Non, seulement les CDI',
            'Oui, mais moins que les CDI',
            'Oui, tous les salariés ont droit aux congés payés (CDI et CDD)',
            'Cela dépend du secteur',
          ],
          correctIndex: 2,
          explanation: 'La syndicale corrige l\'employeur : "tous les salariés en France ont droit aux congés payés, qu\'ils soient en CDI ou en CDD." 2,5 jours ouvrables par mois travaillé pour tout salarié.',
        },
        {
          id: 'a2-tr-04-ex02',
          type: 'qcm',
          question: 'Combien de jours de congés payés par an a un salarié à temps plein ?',
          options: ['20 jours', '25 jours', '30 jours', '35 jours'],
          correctIndex: 2,
          explanation: '2,5 jours × 12 mois = 30 jours ouvrables par an = 5 semaines. En France, les 5 semaines de congés payés font partie des acquis sociaux importants. C\'est l\'un des congés légaux les plus généreux d\'Europe.',
        },
        {
          id: 'a2-tr-04-ex03',
          type: 'qcm',
          question: 'Transformez avec "ne... que" : "Je travaille seulement le matin."',
          options: [
            'Je ne travaille seulement le matin',
            'Je ne travaille que le matin',
            'Je travaille que le matin seulement',
            'Je ne que travaille le matin',
          ],
          correctIndex: 1,
          explanation: '"Ne... que" = seulement (restriction). "Je ne travaille QUE le matin" = I only work in the morning. Structure : ne + verbe + QUE + la restriction. "Que" se place juste avant l\'élément restreint.',
        },
        {
          id: 'a2-tr-04-ex04',
          type: 'qcm',
          question: 'Qu\'est-ce que l\'"Inspection du travail" ?',
          options: [
            'Un syndicat de travailleurs',
            'Une administration qui contrôle le respect du droit du travail',
            'Un tribunal spécialisé en droit du travail',
            'Une association de défense des employeurs',
          ],
          correctIndex: 1,
          explanation: 'L\'Inspection du travail (Direction Régionale des Entreprises, de la Concurrence, de la Consommation, du Travail et de l\'Emploi - DREETS) contrôle que les employeurs respectent le Code du travail. Elle peut sanctionner les infractions.',
        },
        {
          id: 'a2-tr-04-ex05',
          type: 'qcm',
          question: 'Transformez avec "ne... jamais" : "L\'employeur paie toujours les heures supplémentaires." (forme négative)',
          options: [
            'L\'employeur ne paie pas les heures supplémentaires',
            'L\'employeur ne paie jamais les heures supplémentaires',
            'L\'employeur jamais paie les heures supplémentaires',
            'L\'employeur ne jamais paie les heures supplémentaires',
          ],
          correctIndex: 1,
          explanation: '"Ne... jamais" = never. Structure : NE + verbe + JAMAIS. "L\'employeur ne paie JAMAIS les heures supplémentaires" = the employer never pays overtime. Position du "jamais" : après le verbe (ou après l\'auxiliaire au passé composé).',
        },
        {
          id: 'a2-tr-04-ex06',
          type: 'qcm',
          question: 'Que risque un employeur qui ne respecte pas le droit du travail ?',
          options: [
            'Rien, ce n\'est qu\'une recommandation',
            'Une amende et éventuellement des poursuites judiciaires',
            'Seulement un avertissement',
            'Perdre son entreprise automatiquement',
          ],
          correctIndex: 1,
          explanation: 'La syndicale dit "votre employeur risque une amende." Les infractions au Code du travail peuvent entraîner : des amendes administratives, des poursuites pénales pour les infractions graves, et des dommages et intérêts au profit du salarié lésé.',
        },
        {
          id: 'a2-tr-04-ex07',
          type: 'qcm',
          question: 'Que signifie "représailles" dans un contexte professionnel ?',
          options: [
            'Des remerciements de l\'employeur',
            'Des mesures punitives prises par l\'employeur contre un salarié qui a porté plainte',
            'Des augmentations de salaire',
            'Des formations supplémentaires',
          ],
          correctIndex: 1,
          explanation: '"Représailles" = retaliation. Dans le contexte du travail, ce sont des mesures punitives (licenciement, mutation, dégradation des conditions) prises par l\'employeur contre un salarié qui a exercé ses droits ou signalé une infraction. C\'est illégal en France.',
        },
        {
          id: 'a2-tr-04-ex08',
          type: 'qcm',
          question: 'Transformez avec "ne... rien" : "Elle sait tout sur ses droits."',
          options: [
            'Elle ne sait rien sur ses droits',
            'Elle ne sait pas tout sur ses droits',
            'Elle sait rien sur ses droits',
            'Elle ne sait jamais rien sur ses droits',
          ],
          correctIndex: 0,
          explanation: '"Ne... rien" = nothing. "Elle ne sait RIEN sur ses droits" = she knows nothing about her rights. Structure : NE + verbe + RIEN. "Rien" remplace "tout" en négatif.',
        },
        {
          id: 'a2-tr-04-ex09',
          type: 'qcm',
          question: 'Que signifie "licenciement abusif" ?',
          options: [
            'Un licenciement économique',
            'Un licenciement fait sans motif valable ou en représailles, pouvant être contesté',
            'Un licenciement à la suite d\'une faute grave',
            'Un licenciement prévu dans le contrat',
          ],
          correctIndex: 1,
          explanation: 'Un licenciement abusif (ou sans cause réelle et sérieuse) est un licenciement qui ne respecte pas les règles légales ou qui est motivé par une raison illégale (représailles, discrimination...). Le salarié peut le contester aux Prud\'hommes et obtenir des indemnités.',
        },
        {
          id: 'a2-tr-04-ex10',
          type: 'qcm',
          question: 'Quel est le minimum légal de majoration pour le travail du dimanche ?',
          options: ['10%', '25%', '50%', '100%'],
          correctIndex: 2,
          explanation: 'La syndicale précise : "une majoration d\'au moins 50% du salaire horaire." Attention : ce minimum peut être plus élevé selon la convention collective du secteur. Dans certains secteurs, la majoration peut atteindre 100%.',
        },
        {
          id: 'a2-tr-04-ex11',
          type: 'qcm',
          question: 'Transformez avec "ne... personne" : "Quelqu\'un m\'a expliqué mes droits."',
          options: [
            'Personne m\'a expliqué mes droits',
            'Personne ne m\'a expliqué mes droits',
            'Ne personne m\'a expliqué mes droits',
            'Je ne personne ai expliqué mes droits',
          ],
          correctIndex: 1,
          explanation: '"Personne ne... / ne... personne" = nobody. Quand "personne" est sujet : "PERSONNE NE m\'a expliqué mes droits" (personne avant le verbe). Quand "personne" est objet : "Je n\'ai vu PERSONNE" (après le verbe).',
        },
        {
          id: 'a2-tr-04-ex12',
          type: 'qcm',
          question: 'Que signifie "dommages et intérêts" ?',
          options: [
            'Des dégâts physiques',
            'Une compensation financière versée à une personne qui a subi un préjudice',
            'Des réparations matérielles',
            'Des intérêts bancaires',
          ],
          correctIndex: 1,
          explanation: '"Dommages et intérêts" = compensation financière (damages) accordée par un juge à une personne qui a subi un préjudice. En cas de licenciement abusif, le Conseil de Prud\'hommes peut condamner l\'employeur à verser des dommages et intérêts au salarié.',
        },
        {
          id: 'a2-tr-04-ex13',
          type: 'qcm',
          question: 'Quelle est la structure "ne... plus" ?',
          options: [
            'Pour dire qu\'on a toujours quelque chose',
            'Pour dire qu\'une situation passée a cessé (no longer)',
            'Pour dire qu\'on a davantage',
            'Pour exprimer une restriction',
          ],
          correctIndex: 1,
          explanation: '"Ne... plus" = no longer / not anymore. "Je ne travaille PLUS là-bas" = I no longer work there. Exprime qu\'une situation qui existait avant a cessé maintenant.',
        },
        {
          id: 'a2-tr-04-ex14',
          type: 'qcm',
          question: 'Qu\'est-ce que la "carence" dans un arrêt maladie ?',
          options: [
            'La durée de l\'arrêt',
            'Les premiers jours d\'arrêt non remboursés par la Sécurité sociale',
            'Le certificat médical',
            'La fin de l\'arrêt',
          ],
          correctIndex: 1,
          explanation: 'En France, il y a un délai de carence de 3 jours pour les arrêts maladie : les 3 premiers jours d\'arrêt ne sont PAS remboursés par la Sécurité sociale (sauf accord d\'entreprise ou mutuelle). À partir du 4ème jour, les indemnités journalières commencent.',
        },
        {
          id: 'a2-tr-04-ex15',
          type: 'qcm',
          question: 'Comment dit-on "I no longer work there" en français ?',
          options: ['Je ne travaille pas là-bas', 'Je ne travaille jamais là-bas', 'Je ne travaille plus là-bas', 'Je ne travaille rien là-bas'],
          correctIndex: 2,
          explanation: '"Ne... plus" = no longer / not anymore. "Je NE travaille PLUS là-bas" = I no longer work there / I don\'t work there anymore. La situation (travail là-bas) a existé mais a cessé.',
        },
        {
          id: 'a2-tr-04-ex16',
          type: 'qcm',
          question: 'Pourquoi la syndicale conseille-t-elle de "garder des traces écrites" ?',
          options: [
            'Pour remplir des formulaires plus facilement',
            'Pour avoir des preuves en cas de litige ou de plainte',
            'Pour connaître ses droits',
            'Pour informer ses collègues',
          ],
          correctIndex: 1,
          explanation: '"Garder des traces" = conserver des preuves écrites (emails, SMS, plannings, notes de frais...). Ces preuves sont essentielles si le conflit va devant le Conseil de Prud\'hommes ou l\'Inspection du travail.',
        },
        {
          id: 'a2-tr-04-ex17',
          type: 'qcm',
          question: 'Qu\'est-ce que le "Conseil de Prud\'hommes" ?',
          options: [
            'Un syndicat de travailleurs',
            'Une juridiction spécialisée dans les conflits entre employeurs et salariés',
            'L\'Inspection du travail',
            'Un service de médiation',
          ],
          correctIndex: 1,
          explanation: 'Le Conseil de Prud\'hommes est un tribunal spécialisé pour les conflits individuels du travail (licenciement, salaires impayés, conditions de travail...). Il est composé à parité de représentants des salariés et des employeurs.',
        },
        {
          id: 'a2-tr-04-ex18',
          type: 'qcm',
          question: 'Transformez avec "ni... ni..." : "Il a augmenté et amélioré mes conditions." (forme négative)',
          options: [
            'Il n\'a pas augmenté ni amélioré mes conditions',
            'Il n\'a ni augmenté ni amélioré mes conditions',
            'Il ne a ni augmenté ni amélioré mes conditions',
            'Il n\'a augmenté et amélioré ni mes conditions',
          ],
          correctIndex: 1,
          explanation: '"Ni... ni..." = neither... nor. "Il N\'a NI augmenté NI amélioré mes conditions" = he neither increased (my pay) nor improved my conditions. Structure : ne + verbe + ni + élément 1 + ni + élément 2.',
        },
        {
          id: 'a2-tr-04-ex19',
          type: 'qcm',
          question: 'Que signifie "jours ouvrables" pour les congés payés ?',
          options: [
            'Jours calendaires (tous les jours y compris dimanche)',
            'Jours de la semaine sauf dimanche et jours fériés',
            'Uniquement les jours travaillés',
            'Jours de travail effectif',
          ],
          correctIndex: 1,
          explanation: '"Jours ouvrables" = tous les jours de la semaine SAUF le dimanche et les jours fériés. Les congés payés se calculent en jours ouvrables (30 jours = 6 jours par semaine × 5 semaines). À ne pas confondre avec "jours ouvrés" (5 jours/semaine).',
        },
        {
          id: 'a2-tr-04-ex20',
          type: 'qcm',
          question: 'L\'employeur de Nadia dit qu\'elle n\'a pas droit aux congés payés en CDD. C\'est...',
          options: [
            'Vrai, les CDD ont moins de droits',
            'Vrai dans certains secteurs',
            'Faux, tous les salariés ont droit aux congés payés en France',
            'Vrai si le CDD dure moins de 6 mois',
          ],
          correctIndex: 2,
          explanation: 'C\'est FAUX. La syndicale le corrige clairement : "tous les salariés en France ont droit aux congés payés, qu\'ils soient en CDI ou en CDD." L\'employeur de Nadia dit quelque chose d\'illégal.',
        },
      ],
    },

    {
      id: 'a2-tr-05',
      slug: 'a2-pole-emploi-chomage',
      moduleSlug: 'a2-travail',
      level: 'A2',
      title: 'Chômage et reconversion',
      description: 'Gérez votre situation de chômage, comprenez vos droits et préparez votre reconversion professionnelle.',
      duration: 35,
      free: false,
      dialogue: `## Dialogue : Suivi mensuel à France Travail

*Abdelkarim a son entretien mensuel obligatoire avec son conseiller emploi.*

**Conseiller :** Bonjour Abdelkarim. Asseyez-vous. C'est votre troisième mois de chômage. Comment avance la recherche d'emploi ?

**Abdelkarim :** J'ai envoyé 15 candidatures ce mois-ci, j'ai eu 2 entretiens mais pas de suite favorable.

**Conseiller :** C'est un bon volume de candidatures. Vous avez actualisé votre situation ce mois ?

**Abdelkarim :** Oui, j'ai actualisé en ligne le 1er du mois comme toujours.

**Conseiller :** Parfait. Alors votre allocation ARE continue. On va regarder ensemble les pistes d'amélioration. Je vois que vous postulez surtout dans la restauration. Avez-vous pensé à élargir votre recherche ?

**Abdelkarim :** J'ai aussi regardé dans la livraison et l'aide à domicile. Mais je préfère la restauration, c'est mon domaine.

**Conseiller :** Je comprends. Avez-vous pensé à une formation certifiante pour valoriser votre expérience ? Le titre de "Commis de cuisine" par exemple.

**Abdelkarim :** C'est une bonne idée. Comment je fais pour me former ?

**Conseiller :** Vous pouvez utiliser votre CPF, ou on peut vous financer une formation via France Travail si c'est en lien direct avec un emploi identifié. Là, il faudrait trouver un employeur qui s'engage à vous embaucher si vous avez cette certification.

**Abdelkarim :** Qu'est-ce que le CPF exactement ?

**Conseiller :** C'est le Compte Personnel de Formation. Chaque salarié accumule des droits en euros pour financer sa propre formation. Vous pouvez vérifier votre solde sur moncompteformation.gouv.fr.

**Abdelkarim :** Et si mon CPF ne suffit pas ?

**Conseiller :** France Travail peut compléter le financement. On appelle ça un "co-financement". Je vais vous orienter vers notre service formation cette semaine. En attendant, regardez les offres d'emploi qui demandent ce titre professionnel.

**Abdelkarim :** D'accord. Et pour mon titre de séjour qui se renouvelle dans 3 mois — est-ce que je peux quand même postuler ?

**Conseiller :** Oui, absolument. Votre titre actuel est valide jusqu'à expiration. Mentionnez votre situation dans les entretiens si la question est posée. Les employeurs ne peuvent pas refuser une candidature uniquement pour cette raison.

---

### Vocabulaire clé — Le chômage et la reconversion

| Terme | Définition |
|---|---|
| L'ARE | Allocation de Retour à l'Emploi — indemnité chômage |
| L'actualisation mensuelle | Démarche en ligne pour maintenir les droits à l'ARE |
| Le CPF | Compte Personnel de Formation — droits formation en euros |
| France Travail | Anciennement Pôle emploi — service public de l'emploi |
| Une formation certifiante | Formation qui délivre un titre officiel reconnu |
| Un titre professionnel | Certification délivrée par le Ministère du Travail |
| La reconversion | Changer de secteur ou de métier |
| Le conseiller emploi | Personne qui suit votre recherche d'emploi |`,

      linguisticPoint: `## Point linguistique : Les verbes de mouvement avec prépositions

### Les verbes de mouvement principaux
| Verbe | Préposition usuelle | Exemple |
|---|---|---|
| **aller** | à + ville / en + pays | aller **à** Lyon / aller **en** France |
| **venir** | de + ville / de + pays | venir **de** Paris / venir **du** Maroc |
| **partir** | pour + destination / de + origine | partir **pour** l\'Espagne / partir **de** chez moi |
| **arriver** | à + lieu / de + lieu | arriver **à** Paris / arriver **de** Lyon |
| **rentrer** | à + domicile | rentrer **à** la maison / rentrer **chez** soi |
| **passer** | par + lieu de transit | passer **par** Marseille |
| **monter / descendre** | à + transport | monter **dans** le bus / descendre **du** métro |

### Pays masculins vs féminins avec prépositions
| Genre du pays | Aller → | Venir → |
|---|---|---|
| Féminin (France, Italie, Espagne, Algérie...) | **en** France | **de** France |
| Masculin (Maroc, Japon, Canada...) | **au** Maroc | **du** Maroc |
| Pluriel (États-Unis, Philippines...) | **aux** États-Unis | **des** États-Unis |
| Île ou ville | **à** Cuba / **à** Paris | **de** Cuba / **de** Paris |

### Astuce : comment savoir si un pays est masculin ou féminin ?
- Pays qui se termine en **-e** → souvent féminin : **la** France, **l\'**Algérie, **l\'**Italie
- Exceptions masculines : le **Mexique**, le **Mozambique**, le **Cambodge**
- Pays qui se termine autrement → souvent masculin : **le** Maroc, **le** Japon, **le** Canada

### Prépositions dans les offres d'emploi
| Expression | Sens |
|---|---|
| Poste **basé à** Paris | L\'emploi est localisé à Paris |
| Déplacements **en** région | Voyages dans la région |
| Mission **sur** toute la France | Travail dans toute la France |
| **Au** siège / **en** agence | À l\'adresse centrale / dans une agence locale |

### Erreurs fréquentes
| ❌ Erreur | ✅ Correction |
|---|---|
| Je vais **en** Paris | Je vais **à** Paris (ville → à) |
| Je viens **de** Maroc | Je viens **du** Maroc (pays masc. → du) |
| Je suis allé **au** France | Je suis allé **en** France (pays fém. → en) |
| Je rentre **à** chez moi | Je rentre **chez** moi (chez = préposition seule) |`,

      keyPoints: [
        'EN + pays féminin / AU + pays masculin / AUX + pays pluriel / À + ville',
        'Actualisation mensuelle = obligatoire pour maintenir l\'ARE',
        'Formation certifiante = débouche sur un titre/certification reconnu',
        '15 candidatures/mois = volume attendu par France Travail',
        'Formation finançable si liée à un emploi identifié',
      ],

      exercises: [
        {
          id: 'a2-tr-05-ex01',
          type: 'qcm',
          question: 'Qu\'est-ce que l\'"actualisation mensuelle" à France Travail ?',
          options: [
            'Mettre à jour son CV',
            'Déclarer en ligne chaque mois sa situation pour maintenir ses droits à l\'ARE',
            'Envoyer ses candidatures',
            'Passer un test de compétences',
          ],
          correctIndex: 1,
          explanation: 'L\'actualisation mensuelle est une démarche obligatoire sur francetravail.fr à faire chaque mois pour maintenir ses droits aux allocations chômage (ARE). On déclare si on a travaillé, cherché un emploi, suivi une formation...',
        },
        {
          id: 'a2-tr-05-ex02',
          type: 'qcm',
          question: 'Quelle préposition utilise-t-on pour le Maroc ?',
          options: ['en Maroc', 'au Maroc', 'à Maroc', 'dans Maroc'],
          correctIndex: 1,
          explanation: 'Le Maroc est masculin → AU Maroc. Règle : pays féminins → EN (en France, en Algérie, en Tunisie). Pays masculins → AU (au Maroc, au Japon, au Mexique). Pays pluriels → AUX (aux États-Unis).',
        },
        {
          id: 'a2-tr-05-ex03',
          type: 'qcm',
          question: 'Combien de candidatures Abdelkarim a-t-il envoyées ce mois ?',
          options: ['5', '10', '15', '20'],
          correctIndex: 2,
          explanation: 'Abdelkarim dit "J\'ai envoyé 15 candidatures ce mois-ci". Le conseiller juge que "c\'est un bon volume de candidatures". France Travail recommande un effort de recherche actif et documenté.',
        },
        {
          id: 'a2-tr-05-ex04',
          type: 'qcm',
          question: 'Quelle préposition pour "je vais à Paris" ?',
          options: ['Je vais en Paris', 'Je vais à Paris', 'Je vais au Paris', 'Je vais dans Paris'],
          correctIndex: 1,
          explanation: 'Pour les villes (communes), on utilise toujours "À" : aller À Paris / À Lyon / À Marseille. Exception : "Dans Paris" peut exprimer l\'intérieur de la ville (ex : "je roule dans Paris") mais "à Paris" est la préposition de destination.',
        },
        {
          id: 'a2-tr-05-ex05',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une "formation certifiante" ?',
          options: [
            'Une formation courte',
            'Une formation qui débouche sur une certification ou un titre reconnu',
            'Une formation en entreprise',
            'Une formation en ligne uniquement',
          ],
          correctIndex: 1,
          explanation: 'Une formation certifiante = une formation qui se termine par l\'obtention d\'une certification officielle (titre professionnel, CQP, certification de branche...) reconnue par l\'État ou la branche professionnelle.',
        },
        {
          id: 'a2-tr-05-ex06',
          type: 'qcm',
          question: 'Quelle préposition pour "je viens de France" ?',
          options: ['je viens à France', 'je viens en France', 'je viens de France', 'je viens depuis France'],
          correctIndex: 2,
          explanation: '"Venir DE" indique l\'origine. "Je viens DE France" = I come from France. "Je viens DE Paris" = I come from Paris. Avec les pays masculins : "venir DU Maroc / DU Japon". Avec les pays pluriels : "venir DES États-Unis".',
        },
        {
          id: 'a2-tr-05-ex07',
          type: 'qcm',
          question: 'Que signifie "pas de suite favorable" après les 2 entretiens d\'Abdelkarim ?',
          options: [
            'Il n\'a pas eu de réponse rapide',
            'Il n\'a pas été retenu / sélectionné',
            'Il n\'est pas allé aux entretiens',
            'Il a refusé les postes proposés',
          ],
          correctIndex: 1,
          explanation: '"Pas de suite favorable" = no positive outcome. Abdelkarim a passé 2 entretiens mais n\'a pas été sélectionné (pas reçu d\'offre d\'embauche). Expression polie pour dire qu\'on n\'a pas été retenu.',
        },
        {
          id: 'a2-tr-05-ex08',
          type: 'qcm',
          question: 'Quelle préposition pour "je pars pour l\'Espagne" ?',
          options: ['je pars à l\'Espagne', 'je pars en Espagne', 'je pars pour l\'Espagne', 'je pars vers Espagne'],
          correctIndex: 2,
          explanation: '"Partir POUR" = to leave for (destination). "Je pars POUR l\'Espagne" = I\'m leaving for Spain. Mais on peut aussi dire "je pars EN Espagne" (destination finale). Les deux sont corrects.',
        },
        {
          id: 'a2-tr-05-ex09',
          type: 'qcm',
          question: 'Que signifie "valoriser son expérience" ?',
          options: [
            'Vendre son expérience',
            'Mettre en valeur et faire reconnaître officiellement ses compétences acquises',
            'Oublier son ancienne expérience',
            'Exagérer son expérience',
          ],
          correctIndex: 1,
          explanation: '"Valoriser son expérience" = mettre en valeur ses compétences acquises, les faire reconnaître officiellement. Une formation certifiante peut "valoriser" une expérience pratique en lui donnant une reconnaissance formelle.',
        },
        {
          id: 'a2-tr-05-ex10',
          type: 'qcm',
          question: 'Pour aller aux États-Unis, quelle préposition utilise-t-on ?',
          options: ['en États-Unis', 'à États-Unis', 'aux États-Unis', 'au États-Unis'],
          correctIndex: 2,
          explanation: 'Les pays pluriels prennent "AUX" : AUX États-Unis / AUX Pays-Bas / AUX Bahamas. Venir DES États-Unis (retour). "Les États-Unis" est pluriel, d\'où "aux" et non "au".',
        },
        {
          id: 'a2-tr-05-ex11',
          type: 'qcm',
          question: 'Que signifie "élargir sa recherche" ?',
          options: [
            'Chercher un emploi plus éloigné géographiquement uniquement',
            'Ouvrir sa recherche à plus de secteurs, postes ou zones géographiques',
            'Envoyer plus de candidatures',
            'Changer complètement de secteur',
          ],
          correctIndex: 1,
          explanation: '"Élargir sa recherche" = ouvrir le champ de recherche à plus de possibilités : d\'autres secteurs, d\'autres types de postes, d\'autres zones géographiques. C\'est un conseil courant des conseillers emploi pour augmenter les chances.',
        },
        {
          id: 'a2-tr-05-ex12',
          type: 'qcm',
          question: 'Abdelkarim est en chômage depuis combien de temps ?',
          options: ['1 mois', '2 mois', '3 mois', '6 mois'],
          correctIndex: 2,
          explanation: 'Le conseiller dit "C\'est votre troisième mois de chômage." C\'est donc le bilan du 3ème mois de chômage d\'Abdelkarim. L\'entretien mensuel est obligatoire pour maintenir les droits à l\'ARE.',
        },
        {
          id: 'a2-tr-05-ex13',
          type: 'qcm',
          question: 'Quelle préposition pour "je rentre chez moi / à la maison" ?',
          options: [
            'Je rentre à chez moi',
            'Je rentre en maison',
            'Je rentre chez moi / je rentre à la maison',
            'Je rentre dans chez moi',
          ],
          correctIndex: 2,
          explanation: '"Rentrer" s\'utilise avec "chez" (pour les personnes/domicile) : rentrer CHEZ moi / chez soi / chez les parents. Ou avec "à la" (lieu) : rentrer À LA maison / au bureau. Les deux structures sont correctes.',
        },
        {
          id: 'a2-tr-05-ex14',
          type: 'qcm',
          question: 'Que signifie qu\'un employeur "s\'engage à embaucher" quelqu\'un après une formation ?',
          options: [
            'Il peut embaucher',
            'Il promet formellement de recruter la personne si elle obtient la certification',
            'Il financera la formation',
            'Il connaît la personne',
          ],
          correctIndex: 1,
          explanation: '"S\'engager à + infinitif" = to commit to / to promise to. "Un employeur qui s\'engage à vous embaucher" = un employeur qui fait une promesse formelle d\'embauche conditionnée à l\'obtention de la certification.',
        },
        {
          id: 'a2-tr-05-ex15',
          type: 'qcm',
          question: 'Quelle préposition utilise-t-on pour Cuba ?',
          options: ['en Cuba', 'au Cuba', 'à Cuba', 'dans Cuba'],
          correctIndex: 2,
          explanation: 'Cuba est une île → on utilise "À" : à Cuba. Même règle pour les îles : à Madagascar, à Haïti, à Chypre, à La Réunion. Exception : certaines grandes îles utilisent "en" (en Corse, en Sardaigne).',
        },
        {
          id: 'a2-tr-05-ex16',
          type: 'qcm',
          question: 'Dans quels domaines Abdelkarim cherche-t-il un emploi ?',
          options: [
            'Restauration et informatique',
            'Restauration, livraison et aide à domicile',
            'Sécurité et restauration',
            'Logistique uniquement',
          ],
          correctIndex: 1,
          explanation: 'Abdelkarim dit "je postule surtout dans la restauration" et "j\'ai aussi regardé dans la livraison et l\'aide à domicile". Son domaine principal est la restauration mais il a élargi sa recherche.',
        },
        {
          id: 'a2-tr-05-ex17',
          type: 'qcm',
          question: 'Qu\'est-ce que le "titre de Commis de cuisine" ?',
          options: [
            'Un diplôme universitaire en gastronomie',
            'Une certification professionnelle de niveau 3 délivrée par le Ministère du Travail',
            'Un titre honorifique de chef',
            'Un brevet d\'aptitude',
          ],
          correctIndex: 1,
          explanation: 'Le Titre Professionnel de Commis de cuisine est une certification de niveau 3 (CAP-BEP) délivrée par le Ministère du Travail. Elle valide les compétences en cuisine professionnelle. C\'est un tremplin pour travailler légitimement dans la restauration.',
        },
        {
          id: 'a2-tr-05-ex18',
          type: 'qcm',
          question: 'Quelle préposition pour "je viens du Japon" (en arrivant) ?',
          options: ['je viens à Japon', 'je viens de Japon', 'je viens du Japon', 'je viens en Japon'],
          correctIndex: 2,
          explanation: 'Venir DU + pays masculin. "Je viens DU Japon" = I come from Japan. Du = de + le (contraction). Avec les pays pluriels : "venir DES États-Unis". Avec les pays féminins : "venir DE France".',
        },
        {
          id: 'a2-tr-05-ex19',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une "piste d\'amélioration" dans le contexte de la recherche d\'emploi ?',
          options: [
            'Un chemin physique à améliorer',
            'Une suggestion concrète pour rendre la recherche d\'emploi plus efficace',
            'Une critique du candidat',
            'Un emploi disponible',
          ],
          correctIndex: 1,
          explanation: '"Piste d\'amélioration" = area for improvement / suggestion to improve. Dans ce contexte, le conseiller va proposer des actions concrètes pour améliorer les chances d\'Abdelkarim de trouver un emploi.',
        },
        {
          id: 'a2-tr-05-ex20',
          type: 'qcm',
          question: 'Quel est l\'avantage d\'une formation financée "via France Travail" vs CPF ?',
          options: [
            'Il n\'y a pas de différence',
            'France Travail peut financer la formation sans utiliser le CPF, si elle est en lien direct avec un emploi identifié',
            'France Travail finance des formations plus longues',
            'Le CPF ne finance que les cours de langue',
          ],
          correctIndex: 1,
          explanation: 'France Travail peut financer des formations ciblées sans utiliser le CPF du demandeur, à condition que la formation soit directement liée à une opportunité d\'emploi identifiée (Préparation Opérationnelle à l\'Emploi - POE ou Action de Formation Conventionnée).',
        },
      ],
    },
  ],
};
