import type { LangModule } from '../types';

export const b1Entretien: LangModule = {
  id: 'b1-mod-06',
  slug: 'b1-entretien',
  level: 'B1',
  title: 'L\'entretien en français',
  subtitle: 'Entretien d\'embauche, naturalisation, préfecture',
  description: 'Préparez-vous aux entretiens qui jalonnent votre parcours d\'intégration : emploi, préfecture, naturalisation.',
  type: 'thematique',
  emoji: '🤝',
  free: false,
  lessons: [
    {
      id: 'b1-ent-01',
      slug: 'b1-entretien-embauche',
      moduleSlug: 'b1-entretien',
      level: 'B1',
      title: 'L\'entretien d\'embauche',
      description: 'Se présenter, parler de son parcours et de ses motivations lors d\'un entretien d\'embauche.',
      duration: 35,
      free: false,
      dialogue: `## Dialogue : Entretien d'embauche — Karim et la responsable RH

*Karim, 34 ans, technicien électricien, passe un entretien pour un poste dans une PME de maintenance industrielle.*

---

**RH :** Bonjour Karim, prenez place. Pouvez-vous vous présenter brièvement ?

**Karim :** Bonjour. Je m'appelle Karim Bensalem, j'ai 34 ans et je suis originaire de Casablanca, au Maroc. J'ai obtenu un diplôme d'ingénieur en électrotechnique à Casablanca en 2014, puis j'ai travaillé pendant cinq ans comme technicien de maintenance dans une grande entreprise de production au Maroc. Je suis arrivé en France en 2021 dans le cadre d'une mutation professionnelle, et depuis lors, j'ai travaillé chez mon employeur actuel, Électro-Serv, où j'occupe le poste de technicien senior.

**RH :** Qu'est-ce qui vous motive à quitter votre employeur actuel ?

**Karim :** Mon poste actuel est intéressant, mais je cherche de nouvelles responsabilités. Ce qui m'attire dans votre entreprise, c'est d'abord sa réputation dans le secteur des énergies renouvelables, un domaine qui me passionne. De plus, le poste que vous proposez implique de la gestion d'équipe, une dimension que j'aimerais développer dans ma carrière.

**RH :** Où vous voyez-vous dans cinq ans ?

**Karim :** Dans cinq ans, j'aimerais avoir pris en charge une équipe de techniciens et avoir contribué à des projets innovants. Je souhaite également finir de préparer ma demande de naturalisation — c'est un objectif personnel important pour moi.

**RH :** Avez-vous des questions pour nous ?

**Karim :** Oui, j'aimerais en savoir plus sur les opportunités de formation continue que vous proposez à vos employés.`,

      linguisticPoint: `## Point linguistique : Le conditionnel passé et les regrets

### Formation du conditionnel passé
Avoir / Être au conditionnel + participe passé

- "J'**aurais voulu** développer mes compétences plus tôt."
- "J'**aurais aimé** travailler dans le médical."
- "Je **serais venu** plus tôt si j'avais su."

### Emplois en entretien
1. **Regret ou souhait non réalisé** :
   "J'**aurais voulu** continuer mes études, mais..."

2. **Hypothèse non réalisée** (avec si + PQP) :
   "Si j'**avais eu** l'occasion, j'**aurais** certainement **postulé** plus tôt."

3. **Politesse extrême** :
   "J'**aurais souhaité** vous poser une question." (= Je voudrais / I would have liked)

4. **Information non confirmée** (journalistique, rumeur) :
   "La société **aurait** décidé de fusionner." (= on dit que / it would seem that)

### Structure hypothétique complète
Si + plus-que-parfait → conditionnel passé
"Si j'**avais** su, je **serais venu**."
"Si nous **avions** eu plus de temps, nous **aurions terminé**."`,

      keyPoints: [
        'Se présenter : nom / âge / origine / diplôme / expérience / situation actuelle',
        '"Ce qui m\'attire dans votre entreprise, c\'est..." = formule clé de motivation',
        '"Dans 5 ans, j\'aimerais avoir..." = conditionnel + infinitif passé',
        'Conditionnel passé = avoir/être (conditionnel) + PP',
        'Si + PQP → conditionnel passé (hypothèse non réalisée)',
      ],

      exercises: [
        {
          id: 'b1-ent-01-ex01',
          type: 'qcm',
          question: 'Conditionnel passé : "J\'___ postulé plus tôt si j\'avais su." (vouloir)',
          options: ['voudrais', 'aurais voulu', 'avais voulu', 'ai voulu'],
          correctIndex: 1,
          explanation: '"J\'AURAIS VOULU postulé plus tôt." Conditionnel passé : avoir (conditionnel = "aurais") + PP de "vouloir" = "voulu". Structure hypothèse non réalisée : Si + PQP → conditionnel passé.',
        },
        {
          id: 'b1-ent-01-ex02',
          type: 'qcm',
          question: 'Dans un entretien d\'embauche, quelle question est la PLUS courante pour commencer ?',
          options: [
            '"Quel est votre salaire actuel ?"',
            '"Pouvez-vous vous présenter brièvement ?"',
            '"Avez-vous des enfants ?"',
            '"Quelle est votre religion ?"',
          ],
          correctIndex: 1,
          explanation: '"Pouvez-vous vous présenter ?" = question d\'ouverture standard de tout entretien. Elle permet au candidat de structurer son pitch de 2-3 minutes : parcours / expériences / motivations pour CE poste. Les questions sur la religion, l\'état civil, l\'origine sont DISCRIMINATOIRES et illégales.',
        },
        {
          id: 'b1-ent-01-ex03',
          type: 'qcm',
          question: 'Conditionnel passé : "Si nous ___ eu plus de temps, nous ___ terminé." (avoir / avoir terminé)',
          options: [
            'avons eu / aurions terminé',
            'avions eu / aurions terminé',
            'aurons eu / terminerions',
            'avions eu / terminerions',
          ],
          correctIndex: 1,
          explanation: '"Si nous AVIONS EU plus de temps, nous AURIONS TERMINÉ." Si + PQP (avions eu) → conditionnel passé (aurions terminé). Hypothèse passée non réalisée : on n\'avait pas le temps, donc on n\'a pas terminé.',
        },
        {
          id: 'b1-ent-01-ex04',
          type: 'qcm',
          question: '"Ce qui m\'attire dans votre entreprise, c\'est sa réputation." Cette structure met en valeur :',
          options: [
            '"votre entreprise"',
            '"sa réputation" (mise en relief par "ce qui / c\'est")',
            '"m\'attire"',
            '"votre"',
          ],
          correctIndex: 1,
          explanation: '"Ce qui... c\'est" = MISE EN RELIEF (emphase). "Ce qui m\'attire, C\'EST SA RÉPUTATION" met en valeur "sa réputation". Formule très efficace pour les entretiens car elle structure la pensée et met l\'accent sur les points clés.',
        },
        {
          id: 'b1-ent-01-ex05',
          type: 'qcm',
          question: 'Conditionnel passé de "venir" (verbe être) : "Si j\'avais su, je ___." (venir)',
          options: ['serais venu', 'aurais venu', 'viendrai', 'serais venus'],
          correctIndex: 0,
          explanation: '"Je SERAIS VENU." "Venir" = verbe ÊTRE. Conditionnel passé : être (conditionnel = "serais") + PP ("venu"). Accord avec le sujet "je" (masculin sing.) → "venu".',
        },
        {
          id: 'b1-ent-01-ex06',
          type: 'qcm',
          question: 'La question "Où vous voyez-vous dans 5 ans ?" permet au recruteur de vérifier :',
          options: [
            'Vos plans de retraite',
            'Votre ambition, votre projet professionnel et votre adéquation au poste',
            'Si vous avez d\'autres entretiens prévus',
            'Si vous prévoyez de partir à l\'étranger',
          ],
          correctIndex: 1,
          explanation: '"Dans 5 ans" = question sur le PROJET PROFESSIONNEL. Le recruteur évalue : (1) l\'ambition (pas trop/pas assez), (2) la cohérence du projet avec le poste proposé, (3) la loyauté probable à l\'entreprise. Bonne réponse : ambitieuse mais réaliste, en lien avec le poste.',
        },
        {
          id: 'b1-ent-01-ex07',
          type: 'qcm',
          question: 'Regret au conditionnel passé : "J\'___ aimé étudier plus longtemps." (avoir aimé)',
          options: ['aimerais', 'aurais aimé', 'avais aimé', 'ai aimé'],
          correctIndex: 1,
          explanation: '"J\'AURAIS AIMÉ étudier plus longtemps." Conditionnel passé = regret sur le passé. "Aurais aimé" = j\'aurais voulu (mais ce n\'est pas arrivé). Utilisé quand on parle d\'une opportunité manquée ou d\'un souhait non réalisé.',
        },
        {
          id: 'b1-ent-01-ex08',
          type: 'qcm',
          question: 'Dans un entretien, "parler de ses motivations" = expliquer :',
          options: [
            'Pourquoi on a quitté le pays d\'origine',
            'Ce qui vous attire spécifiquement dans CE poste et CETTE entreprise',
            'Le salaire que vous souhaitez',
            'Votre vie personnelle',
          ],
          correctIndex: 1,
          explanation: 'Les motivations = pourquoi CE poste dans CETTE entreprise. Montrer qu\'on a fait des recherches sur l\'entreprise, que le poste correspond à un projet professionnel réel. "Ce qui m\'attire dans votre entreprise, c\'est..." + argument concret.',
        },
        {
          id: 'b1-ent-01-ex09',
          type: 'qcm',
          question: 'Conditionnel passé information non confirmée : "La société ___ décidé de fusionner." (avoir décidé)',
          options: ['aurait décidé', 'avait décidé', 'a décidé', 'décida'],
          correctIndex: 0,
          explanation: '"La société AURAIT DÉCIDÉ de fusionner." Conditionnel passé de distanciation (journalistique) : "on dit que / il paraît que" la société a décidé → "aurait décidé". Le locuteur ne confirme pas l\'information. Fréquent dans la presse.',
        },
        {
          id: 'b1-ent-01-ex10',
          type: 'qcm',
          question: 'Que signifie "dans le cadre d\'une mutation professionnelle" pour Karim ?',
          options: [
            'Il a changé de métier',
            'Son employeur l\'a envoyé en France dans le cadre de son travail',
            'Il a quitté son emploi au Maroc pour chercher du travail en France',
            'Il a bénéficié d\'une promotion',
          ],
          correctIndex: 1,
          explanation: '"Mutation professionnelle" = déplacement décidé par l\'employeur. Karim = détaché ou muté par son employeur marocain vers la France, ou transféré vers une filiale française. Son titre de séjour initial était probablement "salarié en mission" ou ICT (Intra-Company Transfer).',
        },
        {
          id: 'b1-ent-01-ex11',
          type: 'qcm',
          question: 'Conditionnel passé + accord : "Si elle avait candidaté, elle ___ obtenu le poste." (avoir obtenu)',
          options: ['aurait obtenu', 'aurait obtenue', 'avait obtenu', 'serait obtenu'],
          correctIndex: 0,
          explanation: '"Elle AURAIT OBTENU le poste." Conditionnel passé : "aurait" + "obtenu". ⚠️ Pas d\'accord ici car "obtenu" est le PP de "obtenir" avec "avoir" — pas d\'accord quand le COD est APRÈS le verbe.',
        },
        {
          id: 'b1-ent-01-ex12',
          type: 'qcm',
          question: '"La formation continue" dans le contexte professionnel désigne :',
          options: [
            'La formation initiale (diplôme)',
            'Des formations suivies pendant la vie professionnelle pour développer ses compétences',
            'Un contrat d\'apprentissage',
            'Un stage de fin d\'études',
          ],
          correctIndex: 1,
          explanation: '"Formation continue" (ou "formation professionnelle continue") = toutes les formations suivies par des personnes déjà en emploi pour développer ou reconvertir leurs compétences. En France, c\'est un droit : chaque salarié a un compte personnel de formation (CPF) avec des heures de formation utilisables.',
        },
        {
          id: 'b1-ent-01-ex13',
          type: 'qcm',
          question: 'Conditionnel passé de "partir" (verbe être, féminin) : "Si elle avait su, elle ___."',
          options: ['serait partie', 'aurait partie', 'serait partis', 'serait partied'],
          correctIndex: 0,
          explanation: '"Elle SERAIT PARTIE." "Partir" = verbe ÊTRE. Conditionnel passé : "serait" + PP accordé en féminin = "partie". Si le sujet était pluriel : "elles seraient parties".',
        },
        {
          id: 'b1-ent-01-ex14',
          type: 'qcm',
          question: '"J\'occupe le poste de technicien senior." "Occuper un poste" = ?',
          options: [
            'Chercher un poste',
            'Travailler à ce poste / exercer cette fonction',
            'Avoir abandonné ce poste',
            'Avoir postulé à ce poste',
          ],
          correctIndex: 1,
          explanation: '"Occuper un poste" = to hold a position / to be in a role. "Je suis technicien senior" (identité professionnelle) = "J\'occupe le poste de technicien senior" (poste = rôle dans une hiérarchie). Formule formelle pour parler de son emploi actuel.',
        },
        {
          id: 'b1-ent-01-ex15',
          type: 'qcm',
          question: 'Quelle question l\'employeur N\'a PAS le droit de poser en entretien ?',
          options: [
            'Avez-vous de l\'expérience en gestion d\'équipe ?',
            'Êtes-vous disponible pour voyager ?',
            'Êtes-vous marié(e) / avez-vous des enfants ?',
            'Parlez-vous plusieurs langues ?',
          ],
          correctIndex: 2,
          explanation: 'L\'état civil et la vie familiale (mariage, enfants...) sont des questions DISCRIMINATOIRES illégales en entretien (art. L1132-1 Code du travail). Aussi interdites : religion, origine ethnique, orientation sexuelle, état de santé, grossesse. Si posées, on peut refuser de répondre.',
        },
        {
          id: 'b1-ent-01-ex16',
          type: 'qcm',
          question: '"J\'aimerais en savoir plus sur..." est une formule pour :',
          options: [
            'Refuser de répondre à une question',
            'Poser une question de façon polie (conditionnel de politesse)',
            'Terminer l\'entretien',
            'Exprimer un doute',
          ],
          correctIndex: 1,
          explanation: '"J\'aimerais en savoir plus sur..." = conditionnel de POLITESSE. Moins direct que "Dites-moi..." ou "Je veux savoir...". En entretien, les questions au conditionnel montrent de la courtoisie. "J\'aimerais / je voudrais / je souhaiterais + infinitif."',
        },
        {
          id: 'b1-ent-01-ex17',
          type: 'qcm',
          question: 'Conditionnel passé négatif : "Sans votre aide, je n\'___ jamais réussi." (avoir réussi)',
          options: ['aurais jamais réussi', 'n\'aurais jamais réussi', 'n\'avais jamais réussi', 'ne réussirai jamais'],
          correctIndex: 1,
          explanation: '"Je N\'AURAIS JAMAIS RÉUSSI." Conditionnel passé négatif : "n\'aurais jamais réussi". "Sans votre aide" = structure alternative à "si + PQP" pour exprimer l\'hypothèse non réalisée. "Sans + nom" → conditionnel passé.',
        },
        {
          id: 'b1-ent-01-ex18',
          type: 'qcm',
          question: '"Implique de la gestion d\'équipe" — "impliquer" ici signifie :',
          options: ['nécessiter / comprendre (inclure)', 'complique', 'importe', 'intègre seulement'],
          correctIndex: 0,
          explanation: '"Impliquer" = nécessiter / entraîner / comprendre. "Le poste implique de la gestion d\'équipe" = the position entails / involves team management. Différent de "impliquer quelqu\'un" (= to implicate someone).',
        },
        {
          id: 'b1-ent-01-ex19',
          type: 'qcm',
          question: 'Conditionnel passé : "Nous ___ postulés plus tôt si nous avions vu l\'annonce." (avoir postulé)',
          options: ['serions postulés', 'aurions postulé', 'auront postulé', 'postulions'],
          correctIndex: 1,
          explanation: '"Nous AURIONS POSTULÉ plus tôt." "Postuler" = verbe AVOIR. Conditionnel passé : "aurions" + "postulé". Pas d\'accord du PP avec "avoir" quand le COD est après.',
        },
        {
          id: 'b1-ent-01-ex20',
          type: 'qcm',
          question: 'Pour parler de son parcours en entretien, quel ordre est le plus efficace ?',
          options: [
            'Compétences → parcours → formation → motivations',
            'Présent → passé → futur (situation actuelle → expériences → projet)',
            'Passé → présent → futur (formation → expériences → projet futur)',
            'Motivations → formation → expériences → situation actuelle',
          ],
          correctIndex: 2,
          explanation: 'L\'ordre chronologique "passé → présent → futur" est le plus naturel et le plus attendu : formation initiale → expériences professionnelles → situation actuelle → projet dans CETTE entreprise. C\'est la structure de la "minute de présentation" standard.',
        },
      ],
    },

    {
      id: 'b1-ent-02',
      slug: 'b1-entretien-prefecture',
      moduleSlug: 'b1-entretien',
      level: 'B1',
      title: 'Démarches en préfecture',
      description: 'Communiquer efficacement lors de rendez-vous en préfecture pour le titre de séjour.',
      duration: 35,
      free: false,
      dialogue: `## Dialogue : Rendez-vous en préfecture — renouvellement de titre de séjour

*Fatima, 41 ans, doit renouveler son titre de séjour "vie privée et familiale". Elle a son rendez-vous en préfecture.*

---

**Agent :** Bonjour Madame, c'est pour quoi ?

**Fatima :** Bonjour Monsieur. J'ai un rendez-vous à 10h pour le renouvellement de mon titre de séjour "vie privée et familiale". Voici ma convocation.

**Agent :** Merci. Votre titre de séjour actuel ?

**Fatima :** Le voici. Il expire le 15 juillet prochain. J'ai fait la demande de renouvellement deux mois avant l'expiration, comme demandé.

**Agent :** Votre justificatif de domicile ?

**Fatima :** J'ai une facture EDF de mai dernier à mon nom, et une quittance de loyer d'avril. J'espère que c'est suffisant.

**Agent :** La facture suffit. Votre contrat de mariage ou votre livret de famille ?

**Fatima :** J'ai mon livret de famille ici, ainsi qu'une traduction assermentée de mon acte de mariage marocain. Je l'ai fait faire par un traducteur certifié.

**Agent :** Très bien. Et vos ressources ?

**Fatima :** J'ai mes trois derniers bulletins de salaire et mon dernier avis d'imposition. Mon mari est également en activité — voici ses justificatifs.

**Agent :** Parfait. Je vais traiter votre dossier. Vous recevrez une convocation par courrier dans les 15 jours. En attendant, voici un récépissé de dépôt qui vous permet de rester en France légalement.

**Fatima :** Merci beaucoup. Le récépissé est valable combien de temps ?

**Agent :** Quatre mois, renouvelables si l'instruction de votre dossier prend du temps.`,

      linguisticPoint: `## Point linguistique : Articuler une demande et gérer l'incompréhension

### Demander des précisions poliment
- "Pourriez-vous me préciser ce que vous entendez par... ?"
- "Je ne suis pas sûr(e) d\'avoir bien compris. Vous voulez dire que... ?"
- "Excusez-moi, pourriez-vous répéter plus lentement ?"
- "Si je comprends bien, vous me demandez de fournir... ?"

### Exprimer un manque de document
- "Je n\'ai malheureusement pas ce document avec moi aujourd\'hui."
- "Ce document est en cours de traitement / d\'obtention."
- "Puis-je vous l\'envoyer ultérieurement par courrier ?"
- "Existe-t-il un autre document qui pourrait convenir ?"

### Demander un délai / une clarification
- "Sous quel délai devez-je fournir ce document ?"
- "D\'ici quand faut-il que je revienne ?"
- "Avez-vous un formulaire que je pourrais remplir pour... ?"

### Vérifier la compréhension
- "Ai-je bien compris que... ?"
- "En résumé, je dois... — est-ce correct ?"
- "Puis-je vous demander de confirmer par écrit ?"`,

      keyPoints: [
        'Renouvellement titre de séjour : 2 mois avant expiration (pas trop tôt, pas après)',
        'Récépissé = attestation provisoire permettant de rester légalement pendant l\'instruction',
        '"Pourriez-vous me préciser..." = formule clé pour demander des précisions (politesse)',
        '"En cours de traitement / d\'obtention" = document pas encore disponible',
        '"Ai-je bien compris que..." = vérification de compréhension',
      ],

      exercises: [
        {
          id: 'b1-ent-02-ex01',
          type: 'qcm',
          question: 'Demande de précision polie : "___ me préciser les documents requis pour ce renouvellement ?"',
          options: [
            'Pouvez-vous',
            'Pourriez-vous',
            'Vous pouvez',
            'Peux-tu',
          ],
          correctIndex: 1,
          explanation: '"POURRIEZ-VOUS me préciser..." = conditionnel de POLITESSE maximale. Plus poli que "pouvez-vous" (indicatif). En préfecture ou dans toute démarche administrative, le conditionnel montre du respect et une attitude coopérative.',
        },
        {
          id: 'b1-ent-02-ex02',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un "récépissé de dépôt" ?',
          options: [
            'Le titre de séjour définitif',
            'Un document provisoire attestant qu\'une demande est en cours — permet de rester légalement',
            'Une confirmation de refus',
            'Un reçu de paiement',
          ],
          correctIndex: 1,
          explanation: 'Récépissé de dépôt = document provisoire remis par la préfecture attestant qu\'une demande de titre de séjour a été déposée et est en cours d\'instruction. Il remplace le titre de séjour pendant l\'attente et permet de rester et travailler légalement en France.',
        },
        {
          id: 'b1-ent-02-ex03',
          type: 'qcm',
          question: 'Formule d\'excuse pour document manquant : "___ pas ce document avec moi aujourd\'hui."',
          options: [
            'Je n\'ai malheureusement',
            'Je n\'ai pas malheureusement',
            'Malheureusement je n\'ai',
            'Toutes ces formulations sont correctes',
          ],
          correctIndex: 0,
          explanation: '"Je n\'ai MALHEUREUSEMENT pas ce document avec moi aujourd\'hui." "Malheureusement" se place après "je n\'ai" et avant "pas" ici, ou après le verbe : "Je n\'ai pas, malheureusement, ce document." L\'important est d\'exprimer le regret (malheureusement) et de rester poli.',
        },
        {
          id: 'b1-ent-02-ex04',
          type: 'qcm',
          question: 'Combien de temps avant l\'expiration doit-on demander le renouvellement d\'un titre de séjour ?',
          options: [
            '6 mois avant',
            '2 mois avant',
            'Le jour de l\'expiration',
            '1 an avant',
          ],
          correctIndex: 1,
          explanation: 'Le renouvellement se demande généralement 2 MOIS (environ) avant l\'expiration du titre. Ni trop tôt (inutile) ni après (risque d\'être en situation irrégulière). Certaines préfectures imposent un délai spécifique — vérifier sur le site de sa préfecture.',
        },
        {
          id: 'b1-ent-02-ex05',
          type: 'qcm',
          question: 'Vérification de compréhension : "___ que je dois fournir un justificatif de moins de 3 mois ?"',
          options: [
            'Vous dites bien',
            'Ai-je bien compris',
            'Est-ce que vous voulez dire',
            'Toutes ces formules sont correctes',
          ],
          correctIndex: 3,
          explanation: '"Ai-je bien compris que..." / "Vous dites bien que..." / "Est-ce que vous voulez dire que..." → toutes ces formules servent à vérifier qu\'on a bien compris. En situation de démarche administrative, ne jamais hésiter à demander confirmation — une incompréhension peut bloquer un dossier.',
        },
        {
          id: 'b1-ent-02-ex06',
          type: 'qcm',
          question: 'Le titre de séjour "vie privée et familiale" (VPF) est accordé à :',
          options: [
            'Seulement aux conjoints de Français',
            'Aux personnes ayant des liens familiaux forts en France (conjoint, parent d\'enfant français, etc.)',
            'Seulement aux réfugiés',
            'À toute personne vivant en France depuis 5 ans',
          ],
          correctIndex: 1,
          explanation: 'Le titre VPF est accordé dans de nombreux cas : conjoint(e) de ressortissant français, parent d\'enfant français, enfant d\'un étranger en séjour régulier, étranger entré mineur, vie privée et familiale ancienne et stable (10+ ans)... C\'est un des titres les plus courants.',
        },
        {
          id: 'b1-ent-02-ex07',
          type: 'qcm',
          question: 'Formule pour document en cours d\'obtention : "Ce document est ___ de traitement."',
          options: ['en cours', 'en train', 'en chemin', 'en attente'],
          correctIndex: 0,
          explanation: '"Ce document est EN COURS DE traitement." "En cours de + nom" = currently being / in the process of. "En cours d\'obtention" = je suis en train de l\'obtenir mais ce n\'est pas encore fait. Très utile pour expliquer une absence temporaire de document.',
        },
        {
          id: 'b1-ent-02-ex08',
          type: 'qcm',
          question: 'Un "livret de famille" est :',
          options: [
            'Un carnet de santé',
            'Un document officiel retraçant l\'état civil de la famille (mariage, naissances)',
            'Un document de logement social pour les familles',
            'Un livret d\'épargne',
          ],
          correctIndex: 1,
          explanation: 'Le livret de famille = official family record book. Délivré lors du mariage ou de la naissance du 1er enfant, il enregistre tous les événements d\'état civil : mariage/PACS, naissances des enfants, décès. Document fondamental pour de nombreuses démarches administratives.',
        },
        {
          id: 'b1-ent-02-ex09',
          type: 'qcm',
          question: 'Demande de délai : "Sous ___ délai dois-je fournir ce document manquant ?"',
          options: ['quel', 'quelle', 'quels', 'que'],
          correctIndex: 0,
          explanation: '"Sous QUEL délai dois-je fournir ce document ?" "Délai" = masculin singulier → "QUEL délai". "Sous quel délai" = within what timeframe / by when. Formule essentielle pour connaître le temps qu\'on a pour compléter un dossier.',
        },
        {
          id: 'b1-ent-02-ex10',
          type: 'qcm',
          question: 'Le "récépissé" est valable 4 mois et peut être renouvelé. Pourquoi ?',
          options: [
            'Car la préfecture fait des erreurs souvent',
            'Car l\'instruction d\'un dossier peut prendre plus de 4 mois (dossiers complexes)',
            'Car il est limité à 4 mois par la loi et ne peut jamais être renouvelé',
            'Car c\'est un avantage accordé aux longues files d\'attente',
          ],
          correctIndex: 1,
          explanation: 'Les préfectures sont souvent surchargées. L\'instruction d\'un dossier (vérification des documents, prise de décision) peut prendre plus de 4 mois. Le récépissé est alors renouvelé automatiquement pour continuer à couvrir légalement le demandeur pendant toute l\'instruction.',
        },
        {
          id: 'b1-ent-02-ex11',
          type: 'qcm',
          question: 'Reformulation pour vérifier une information : "Si je comprends bien, vous me demandez de fournir ___ en plus." (compléter)',
          options: [
            'un justificatif de domicile supplémentaire',
            'les mêmes documents',
            'des documents non spécifiés',
            'Ce n\'est pas une bonne formule',
          ],
          correctIndex: 0,
          explanation: '"Si je comprends bien, vous me demandez de fournir UN JUSTIFICATIF DE DOMICILE SUPPLÉMENTAIRE." La formule est correcte. "Si je comprends bien" + reformulation de la demande = confirmation de compréhension. L\'agent peut corriger si c\'est mal compris.',
        },
        {
          id: 'b1-ent-02-ex12',
          type: 'qcm',
          question: 'L\'"avis d\'imposition" est :',
          options: [
            'Une facture d\'impôts à payer',
            'Un document des impôts résumant les revenus et l\'impôt calculé pour l\'année précédente',
            'Une convocation aux impôts',
            'Un justificatif de domicile exclusivement',
          ],
          correctIndex: 1,
          explanation: 'L\'avis d\'imposition (ou avis d\'impôt sur le revenu) = document annuel des impôts qui indique les revenus déclarés et l\'impôt calculé. Utilisé comme justificatif de ressources dans de nombreuses démarches (titre de séjour, location, prêt...). Disponible sur impots.gouv.fr.',
        },
        {
          id: 'b1-ent-02-ex13',
          type: 'qcm',
          question: 'Formule d\'incompréhension polie : "Excusez-moi, je n\'ai pas tout compris. ___ répéter plus lentement ?"',
          options: [
            'Peux-tu',
            'Vous pouvez',
            'Pourriez-vous',
            'Il faut que vous',
          ],
          correctIndex: 2,
          explanation: '"POURRIEZ-VOUS répéter plus lentement ?" = formule la plus polie (conditionnel). En situation officielle (préfecture, hôpital, tribunal), toujours utiliser le "vous" et le conditionnel. "Peux-tu" = tutoiement, inapproprié.',
        },
        {
          id: 'b1-ent-02-ex14',
          type: 'qcm',
          question: 'Quel document Fatima présente-t-elle pour prouver son mariage (document étranger) ?',
          options: [
            'Le livret de famille français seulement',
            'Son acte de mariage marocain + une traduction assermentée',
            'Un formulaire de la préfecture',
            'Une attestation de son ambassade',
          ],
          correctIndex: 1,
          explanation: 'Pour les mariages célébrés à l\'étranger : l\'acte de mariage étranger + une traduction assermentée (par un traducteur agréé par la Cour d\'appel). L\'acte doit aussi souvent être légalisé ou apostillé. Le Maroc est signataire de la Convention de La Haye (apostille acceptée).',
        },
        {
          id: 'b1-ent-02-ex15',
          type: 'qcm',
          question: '"Puis-je vous l\'envoyer ultérieurement par courrier ?" — "ultérieurement" signifie :',
          options: [
            'Immédiatement',
            'Plus tard / dans un délai à définir',
            'Uniquement par recommandé',
            'Avant la fin de la journée',
          ],
          correctIndex: 1,
          explanation: '"Ultérieurement" = plus tard / subsequently / at a later date. "Puis-je vous envoyer ce document ultérieurement ?" = Can I send it to you later? Formule utile quand on n\'a pas le document sur place mais qu\'on peut le procurer rapidement.',
        },
        {
          id: 'b1-ent-02-ex16',
          type: 'qcm',
          question: '"En attendant, voici un récépissé de dépôt qui vous permet de rester en France légalement." "En attendant" signifie :',
          options: ['Malgré tout', 'Dans l\'intervalle / pendant cette période', 'Après cela', 'Si vous attendez'],
          correctIndex: 1,
          explanation: '"En attendant" = meanwhile / in the meantime. "En attendant votre titre de séjour définitif" = pendant l\'intervalle / durant cette période d\'attente. Formule de transition très utile pour introduire une solution temporaire.',
        },
        {
          id: 'b1-ent-02-ex17',
          type: 'qcm',
          question: 'Pour confirmer à l\'écrit la demande orale de l\'agent, on peut dire :',
          options: [
            '"Puis-je vous demander de confirmer cela par courrier ?"',
            '"Envoyez-moi un email."',
            '"Je n\'ai pas confiance en votre parole."',
            '"Donnez-moi un papier."',
          ],
          correctIndex: 0,
          explanation: '"Puis-je vous demander de confirmer cela par courrier ?" = formule polie pour demander une trace écrite. En cas de litige ultérieur, avoir une confirmation écrite est essentielle. Formuler poliment évite tout malentendu.',
        },
        {
          id: 'b1-ent-02-ex18',
          type: 'qcm',
          question: '"Convocation" dans le contexte de la préfecture désigne :',
          options: [
            'Une punition',
            'Un document officiel conviant à se présenter à un rendez-vous',
            'Un refus de titre de séjour',
            'Un formulaire à remplir',
          ],
          correctIndex: 1,
          explanation: '"Convocation" = official summons / appointment notice. Document officiel qui indique la date, l\'heure et le lieu d\'un rendez-vous. En préfecture : la convocation est indispensable pour avoir accès au guichet (+ autres documents).',
        },
        {
          id: 'b1-ent-02-ex19',
          type: 'qcm',
          question: 'Que signifie être "en situation irrégulière" en France ?',
          options: [
            'Avoir un visa mais pas de travail',
            'Être présent sur le territoire français sans titre de séjour valide',
            'Être sans logement fixe',
            'Avoir des antécédents judiciaires',
          ],
          correctIndex: 1,
          explanation: '"Situation irrégulière" = undocumented / sans papiers. Présence sur le territoire sans titre de séjour valide (visa expiré, titre non renouvelé, sans aucun titre). Risques : reconduite à la frontière / expulsion, impossibilité de travailler légalement, accès limité aux services.',
        },
        {
          id: 'b1-ent-02-ex20',
          type: 'qcm',
          question: 'Formule pour demander une alternative : "___ il un autre document qui pourrait convenir ?"',
          options: ['Est-ce qu\'', 'Existe-t-', 'Y a-t-', 'Toutes ces formules sont correctes'],
          correctIndex: 3,
          explanation: '"EST-CE QU\'il existe / Y A-T-IL / EXISTE-T-IL un autre document..." → les trois formules sont correctes et polies. On demande si une alternative est possible. "Convenir" = to be suitable / appropriate. "Un document qui pourrait convenir" = un document acceptable.',
        },
      ],
    },

    {
      id: 'b1-ent-03',
      slug: 'b1-parler-de-soi',
      moduleSlug: 'b1-entretien',
      level: 'B1',
      title: 'Parler de son parcours d\'intégration',
      description: 'Raconter son histoire, son parcours d\'intégration et ses projets en France.',
      duration: 35,
      free: false,
      dialogue: `## Dialogue : Entretien associatif — Youssef parle de son parcours

*Youssef, 38 ans, participe à un atelier "Témoignages d'intégration" organisé par une association locale. Il est invité à partager son histoire.*

---

**Animatrice :** Youssef, vous vivez en France depuis combien de temps ?

**Youssef :** Cela fait maintenant sept ans que je suis en France. Je suis arrivé en 2017, d'abord avec un visa étudiant pour préparer un master en informatique à Lyon. Après l'obtention de mon diplôme, j'ai eu la chance de décrocher un CDI dans une start-up lyonnaise, ce qui m'a permis d'obtenir un titre de séjour "salarié".

**Animatrice :** Quelles ont été les principales difficultés à votre arrivée ?

**Youssef :** La barrière de la langue était ma première préoccupation, même si j'avais étudié le français pendant des années en Tunisie. Le français parlé, surtout avec des accents régionaux ou en argot, est très différent du français académique qu'on apprend à l'école. J'ai mis plusieurs mois à me sentir à l'aise dans les conversations informelles.

Mais la difficulté principale a été le logement. Trouver un appartement quand on est étudiant étranger sans garant en France, c'est un vrai parcours du combattant. Heureusement, mon université proposait des logements en résidence universitaire, et une association m'a aidé pour la caution.

**Animatrice :** Qu'est-ce qui vous a aidé à vous intégrer ?

**Youssef :** Le travail, sans aucun doute. Travailler avec des Français au quotidien m'a permis d'apprendre la langue vraiment, pas seulement les mots mais aussi les façons de penser, d'ironiser, de blagues. Et les associations de quartier — j'ai rejoint un club de badminton, c'est là que je me suis fait mes meilleurs amis.`,

      linguisticPoint: `## Point linguistique : Exprimer la durée (depuis / il y a / pendant / en / pour)

### Tableau des expressions de durée
| Expression | Sens | Structure | Exemple |
|---|---|---|---|
| **depuis** | durée continue depuis le passé jusqu\'à maintenant | depuis + nom/date + présent | Je suis en France **depuis** 7 ans |
| **il y a** | moment passé (point dans le temps) | il y a + durée + passé composé | Je suis arrivé **il y a** 7 ans |
| **pendant** | durée limitée dans le passé | pendant + durée + passé composé ou imparfait | J\'ai étudié **pendant** 2 ans |
| **en** | durée pour accomplir une tâche | en + durée + passé composé | J\'ai fini **en** 3 mois |
| **pour** | durée prévue (futurs séjours) | pour + durée + présent/futur | Je pars **pour** 6 mois |
| **cela fait... que** | durée continue (= depuis) | Cela fait + durée + que + présent | **Cela fait** 7 ans **que** je suis ici |

### Piège "depuis" vs "il y a"
- "Je suis en France DEPUIS 7 ans" (= toujours en France maintenant)
- "Je suis arrivé IL Y A 7 ans" (= le moment de l\'arrivée était il y a 7 ans)
⚠️ "Depuis" + présent (action continue) / "Il y a" + passé composé (moment révolu)`,

      keyPoints: [
        '"Depuis" + présent = action continue jusqu\'à maintenant',
        '"Il y a" + passé composé = moment révolu dans le passé',
        '"Pendant" = durée limitée passée / "En" = durée pour accomplir une tâche',
        '"Cela fait X ans que" + présent = synonyme de "depuis X ans"',
        '"Décrocher un CDI" = trouver un contrat à durée indéterminée (expression familière/positive)',
      ],

      exercises: [
        {
          id: 'b1-ent-03-ex01',
          type: 'qcm',
          question: 'Durée : "Je vis en France ___ 2017." (action continue jusqu\'à maintenant)',
          options: ['il y a', 'depuis', 'pendant', 'en'],
          correctIndex: 1,
          explanation: '"Je vis en France DEPUIS 2017." "Depuis" = since (point de départ jusqu\'à maintenant). Action CONTINUE au présent. "Je vis" (présent) + "depuis 2017". ⚠️ Si passé composé : "Je suis arrivé EN 2017" ou "IL Y A X ans."',
        },
        {
          id: 'b1-ent-03-ex02',
          type: 'qcm',
          question: '"Décrocher un CDI" signifie :',
          options: [
            'Perdre un contrat',
            'Obtenir un contrat à durée indéterminée (emploi stable)',
            'Demander un congé',
            'Signer un contrat temporaire',
          ],
          correctIndex: 1,
          explanation: '"Décrocher" (au sens figuré) = obtain / land (a job). "Décrocher un CDI" = obtenir un Contrat à Durée Indéterminée. Expression populaire positive. CDI = contrat permanent (pas limité dans le temps), protection sociale maximale.',
        },
        {
          id: 'b1-ent-03-ex03',
          type: 'qcm',
          question: 'Durée accomplie : "J\'ai appris le français ___ deux ans." (durée limitée, terminée)',
          options: ['depuis', 'il y a', 'pendant', 'en'],
          correctIndex: 2,
          explanation: '"J\'ai appris le français PENDANT deux ans." "Pendant" = for (limited duration, now over). Action terminée avec une durée définie. "PENDANT 2 ans, j\'ai étudié" = for 2 years, I studied. Différent de "depuis 2 ans" (action continue).',
        },
        {
          id: 'b1-ent-03-ex04',
          type: 'qcm',
          question: '"Parcours du combattant" (expression familière) signifie :',
          options: [
            'Chemin militaire',
            'Processus très difficile avec de nombreux obstacles',
            'Formation professionnelle avancée',
            'Concours de recrutement difficile',
          ],
          correctIndex: 1,
          explanation: '"Parcours du combattant" = an obstacle course / ordeal. Littéralement : le parcours d\'obstacles militaire. Au sens figuré : une série d\'épreuves, d\'obstacles à surmonter (comme trouver un logement en France étant étranger). Expression très courante.',
        },
        {
          id: 'b1-ent-03-ex05',
          type: 'qcm',
          question: 'Durée pour accomplir : "J\'ai obtenu mon master ___ deux ans." (durée pour réaliser la tâche)',
          options: ['depuis', 'il y a', 'pendant', 'en'],
          correctIndex: 3,
          explanation: '"J\'ai obtenu mon master EN deux ans." "En" = in (duration to accomplish something). "EN 2 ans" = it took 2 years to complete. Différent de "pendant 2 ans" (durée de l\'action) : "en 2 ans" = temps mis pour accomplir un résultat.',
        },
        {
          id: 'b1-ent-03-ex06',
          type: 'qcm',
          question: '"Cela fait sept ans que je suis en France." = ?',
          options: [
            'Il y a sept ans que je suis en France',
            'Je suis en France depuis sept ans',
            'Les deux sont équivalents',
            'Aucune des deux',
          ],
          correctIndex: 2,
          explanation: '"CELA FAIT 7 ANS QUE je suis en France" = "Je suis en France DEPUIS 7 ans." Les deux expressions sont synonymes (durée continue depuis le passé jusqu\'à maintenant). "Cela fait" = it has been. Les deux utilisent le présent.',
        },
        {
          id: 'b1-ent-03-ex07',
          type: 'qcm',
          question: 'Moment précis dans le passé : "Je suis arrivé ___ 2017." (point dans le temps)',
          options: ['depuis', 'cela fait', 'il y a', 'en'],
          correctIndex: 2,
          explanation: '"Je suis arrivé IL Y A 2017." → ⚠️ Attention ! "Il y a" + DURÉE (7 ans) : "Je suis arrivé IL Y A 7 ans." Pour l\'année : "Je suis arrivé EN 2017." Les deux sont corrects mais "il y a" + durée, "en" + année.',
        },
        {
          id: 'b1-ent-03-ex08',
          type: 'qcm',
          question: 'Qu\'est-ce que "la résidence universitaire" en France ?',
          options: [
            'Un appartement privé pour étudiants',
            'Un logement géré par le CROUS (centre de gestion des œuvres universitaires) à tarif réduit',
            'Un hôtel pour étudiants',
            'Un foyer pour sans-abri',
          ],
          correctIndex: 1,
          explanation: 'Résidence universitaire = logement géré par le CROUS (Centre Régional des Œuvres Universitaires et Scolaires). Loyers subventionnés (200-400€/mois en général). Attribution sur critères sociaux via Parcoursup ou dossier direct. Très compétitif dans les grandes villes.',
        },
        {
          id: 'b1-ent-03-ex09',
          type: 'qcm',
          question: 'Durée future prévue : "Je pars en Espagne ___ six mois." (séjour prévu)',
          options: ['depuis', 'il y a', 'pendant', 'pour'],
          correctIndex: 3,
          explanation: '"Je pars en Espagne POUR six mois." "Pour" = for (planned/intended duration). "Je pars POUR 6 mois" = I\'m leaving for 6 months. S\'utilise pour les séjours futurs prévus. ⚠️ "Pour" de durée ne s\'utilise pas normalement avec les actions passées accomplies.',
        },
        {
          id: 'b1-ent-03-ex10',
          type: 'qcm',
          question: '"L\'argot" que Youssef mentionne désigne :',
          options: [
            'L\'accent régional',
            'La langue soutenue des administrations',
            'Le langage populaire informel / familier',
            'Les mots techniques des professions',
          ],
          correctIndex: 2,
          explanation: '"L\'argot" = slang. Vocabulaire familier, parfois vulgaire, utilisé dans les conversations informelles. Par exemple : "fric" (argent), "bosser" (travailler), "un pote" (un ami). L\'argot est difficile à apprendre à l\'école car il évolue rapidement.',
        },
        {
          id: 'b1-ent-03-ex11',
          type: 'qcm',
          question: '"Il y a 3 mois que j\'attends ma carte de séjour." Quelle reformulation a le même sens ?',
          options: [
            '"Il y a 3 mois, j\'ai attendu ma carte de séjour."',
            '"Dans 3 mois, j\'attendrai ma carte de séjour."',
            '"Cela fait 3 mois que j\'attends ma carte de séjour."',
            '"Pendant 3 mois, j\'ai attendu ma carte de séjour."',
          ],
          correctIndex: 2,
          explanation: 'Il faut choisir entre : "CELA FAIT 3 MOIS QUE J\'ATTENDS" (présent, durée continue). "Il y a 3 mois" s\'utilise avec un PASSÉ COMPOSÉ : "Il y a 3 mois, j\'ai déposé ma demande." "Il y a 3 mois que j\'attends" est moins courant mais possible.',
        },
        {
          id: 'b1-ent-03-ex12',
          type: 'qcm',
          question: 'La "caution" (pour un logement) désigne :',
          options: [
            'Le loyer mensuel',
            'Une somme d\'argent ou un engagement d\'une tierce personne garantissant le paiement du loyer',
            'Les charges locatives',
            'L\'assurance habitation',
          ],
          correctIndex: 1,
          explanation: '"Caution" = deposit/guarantee. En France, pour louer un appartement, le propriétaire demande souvent une "caution" (garant) : une personne (souvent parents, employeur) qui s\'engage à payer le loyer si le locataire ne peut pas. Très difficile pour les étrangers sans réseau en France.',
        },
        {
          id: 'b1-ent-03-ex13',
          type: 'qcm',
          question: 'Différence "depuis" vs "pendant" : "Je travaillais là-bas PENDANT 5 ans." = ?',
          options: [
            'Je travaille toujours là-bas',
            'J\'ai travaillé là-bas pour une durée de 5 ans (terminé)',
            'Il y a 5 ans que je travaille là-bas',
            'Je vais travailler là-bas 5 ans',
          ],
          correctIndex: 1,
          explanation: '"Je travaillais PENDANT 5 ans" = action passée sur 5 ans, TERMINÉE. L\'imparfait + "pendant" = durée passée révolue. Si j\'utilisais "depuis" : "Je travaillais depuis 5 ans" (toujours en cours à un moment passé). "Pendant" = for (finished action).',
        },
        {
          id: 'b1-ent-03-ex14',
          type: 'qcm',
          question: '"Au quotidien" dans "travailler avec des Français au quotidien" signifie :',
          options: ['Quelquefois', 'Chaque jour / de façon quotidienne', 'De temps en temps', 'Officiellement'],
          correctIndex: 1,
          explanation: '"Au quotidien" = every day / on a daily basis / day-to-day. "Travailler au quotidien avec des Français" = working daily with French people. "Au quotidien" = dans la vie de tous les jours. Expression très courante pour qualifier une pratique régulière.',
        },
        {
          id: 'b1-ent-03-ex15',
          type: 'qcm',
          question: '"En" pour accomplissement : "Elle a passé l\'examen DELF en 3 semaines de préparation." = ?',
          options: [
            'Elle s\'est préparée 3 semaines avant de passer l\'examen',
            'Elle a mis 3 semaines pour passer cet examen',
            'Elle a préparé l\'examen pendant 3 semaines et l\'a réussi',
            'Cela a pris 3 semaines pour obtenir les résultats',
          ],
          correctIndex: 0,
          explanation: '"EN 3 semaines" = en prenant 3 semaines (durée pour accomplir). "Elle a préparé et passé l\'examen en 3 semaines de préparation" = she prepared for and passed the exam in 3 weeks. "En" met l\'accent sur le DÉLAI de réalisation (impressed by the short time).',
        },
        {
          id: 'b1-ent-03-ex16',
          type: 'qcm',
          question: '"Visa étudiant" — quelle est sa durée en France ?',
          options: [
            '1 mois',
            '3 mois (visa court séjour)',
            'La durée de la formation + 1 an pour chercher un emploi (passeport talent)',
            'Illimité tant qu\'on est étudiant',
          ],
          correctIndex: 2,
          explanation: 'Le visa/titre de séjour étudiant = durée de la formation. Après le diplôme, une "autorisation provisoire de séjour" (APS) de 1 an permet de chercher un emploi en lien avec le diplôme. Si emploi trouvé dans les 12 mois → titre "salarié" ou "passeport talent".',
        },
        {
          id: 'b1-ent-03-ex17',
          type: 'qcm',
          question: 'Durée : "Il y a longtemps que je cherche un emploi" = "Je cherche un emploi ___ longtemps."',
          options: ['il y a', 'pendant', 'depuis', 'en'],
          correctIndex: 2,
          explanation: '"Je cherche un emploi DEPUIS longtemps." Transformation de "cela fait / il y a + que + présent" → "depuis + [durée] + présent". Action continue jusqu\'à maintenant. "Il y a longtemps" (moment) ≠ "depuis longtemps" (durée continue).',
        },
        {
          id: 'b1-ent-03-ex18',
          type: 'qcm',
          question: '"Ironiser" (mentionné par Youssef) signifie :',
          options: [
            'Parler sérieusement',
            'Exprimer quelque chose de façon indirecte ou moqueuse (souvent l\'inverse de ce qu\'on pense)',
            'Traduire une expression',
            'Faire des erreurs de français',
          ],
          correctIndex: 1,
          explanation: '"Ironiser" = to be ironic / to use irony. Dire le contraire de ce qu\'on pense avec un ton particulier. "C\'est super utile de travailler le dimanche !" (dit ironiquement) = c\'est en réalité nul. L\'ironie française est réputée être une particularité culturelle difficile à maîtriser.',
        },
        {
          id: 'b1-ent-03-ex19',
          type: 'qcm',
          question: 'Durée : "J\'ai préparé mon dossier ___ 3 mois." (durée pour accomplir, accent sur le résultat)',
          options: ['depuis', 'il y a', 'pendant', 'en'],
          correctIndex: 3,
          explanation: '"J\'ai préparé mon dossier EN 3 mois." "En" = durée pour accomplir une tâche (résultat obtenu). "EN 3 mois" = it took me 3 months. "PENDANT 3 mois" = for 3 months (durée de l\'action, moins d\'accent sur l\'accomplissement). Les deux sont souvent interchangeables mais "en" insiste sur l\'efficacité.',
        },
        {
          id: 'b1-ent-03-ex20',
          type: 'qcm',
          question: '"Me sentir à l\'aise dans les conversations" — que signifie "à l\'aise" ?',
          options: [
            'À une chaise confortable',
            'Confortable / sans gêne ni difficultés dans une situation',
            'Assis correctement',
            'Habillé correctement',
          ],
          correctIndex: 1,
          explanation: '"Être / se sentir à l\'aise" = to be comfortable / at ease. "Je me sens à l\'aise en français" = I feel comfortable in French. Opposé : "mal à l\'aise" = uncomfortable / ill at ease. Expression très courante pour parler de confort dans une situation sociale ou linguistique.',
        },
      ],
    },

    {
      id: 'b1-ent-04',
      slug: 'b1-entretien-naturalisation-prep',
      moduleSlug: 'b1-entretien',
      level: 'B1',
      title: 'Préparer son entretien de naturalisation (B1)',
      description: 'Les questions typiques de l\'entretien de naturalisation et comment y répondre.',
      duration: 35,
      free: false,
      dialogue: `## Texte : L'entretien de naturalisation — qu'attendre ?

L'entretien de naturalisation se déroule en préfecture et dure généralement entre 20 et 45 minutes. Il est conduit par un agent de préfecture formé à cet effet. L'objectif est de vérifier votre assimilation à la communauté française, votre connaissance des valeurs et institutions républicaines, et votre maîtrise du français.

**Ce que l'agent évalue :**
- Votre niveau de français (B1 minimum requis depuis janvier 2026)
- Votre connaissance de la France (histoire, géographie, institutions, culture)
- Votre adhésion aux valeurs républicaines
- Votre intégration (travail, logement, vie associative)
- Votre projet en France

**Questions types :**
- Présentez-vous. Pourquoi souhaitez-vous acquérir la nationalité française ?
- Que savez-vous de la Constitution française ?
- Quelles sont les valeurs de la République ?
- Que signifie la laïcité pour vous ?
- Quels droits et devoirs accompagnent la nationalité française ?
- Depuis combien de temps êtes-vous en France ? Qu'avez-vous fait ?
- Avez-vous des activités associatives ou bénévoles ?
- Quels sont vos projets en France ?

**Ce que l'agent N'évalue PAS :**
- Votre opinion politique
- Votre religion ou pratique religieuse
- Votre vie amoureuse ou familiale privée
- Votre pays d'origine (pas de hiérarchie entre origines)`,

      linguisticPoint: `## Point linguistique : La mise en relief (c'est... que / c'est... qui)

### Formation
**C'est + [élément mis en relief] + que/qui + reste de la phrase**

- **C'est... qui** : pour mettre en relief le SUJET
  "**C'est la laïcité qui** définit le rapport entre religion et État."

- **C'est... que** : pour mettre en relief le COD, circonstant...
  "**C'est en 1905 que** la loi de laïcité a été adoptée."
  "**C'est la liberté que** je défends."

### Pluriel et concordance
- "Ce sont les valeurs républicaines **qui** me guident."
- "C'est **aux** institutions **que** je fais confiance."

### Utilisation dans l'entretien
La mise en relief permet de répondre de façon structurée et élégante :
- "Ce qui m'attire dans la France, **c'est** ses valeurs." (ce qui... c'est)
- "Ce que j'apprécie, **c'est** la liberté d'expression."
- "C'est la laïcité **que** j'admire le plus."`,

      keyPoints: [
        'Entretien naturalisation : 20-45 min / préfecture / B1 requis depuis janvier 2026',
        '"C\'est... qui" = met en relief le SUJET / "C\'est... que" = met en relief le COD',
        '"Ce qui... c\'est" = structure de mise en valeur des motivations',
        'Valeurs républicaines à connaître : Liberté / Égalité / Fraternité + laïcité + démocratie',
        'Préparer : parcours / pourquoi FR / valeurs / connaissances institutionnelles / projets',
      ],

      exercises: [
        {
          id: 'b1-ent-04-ex01',
          type: 'qcm',
          question: 'Mise en relief : "___ la laïcité ___ définit le rapport entre religion et État."',
          options: [
            'Ce sont / que',
            'C\'est / que',
            'C\'est / qui',
            'Ce sont / qui',
          ],
          correctIndex: 2,
          explanation: '"C\'EST la laïcité QUI définit..." "C\'est + sujet mis en relief + qui + verbe". "Qui" = pronom relatif sujet. "La laïcité" est le sujet de "définit" → "qui". "Que" s\'utilise pour le COD.',
        },
        {
          id: 'b1-ent-04-ex02',
          type: 'qcm',
          question: 'Quel niveau de français est requis pour la naturalisation depuis janvier 2026 ?',
          options: ['A2', 'B1', 'B2', 'C1'],
          correctIndex: 1,
          explanation: 'Depuis janvier 2026, le niveau **B1** du CECRL est requis pour la naturalisation française. Avant 2026, le niveau exigé était moins formalisé (entretien oral). Le B1 doit être attesté par un diplôme reconnu (DELF B1, TCF niveau B1...).',
        },
        {
          id: 'b1-ent-04-ex03',
          type: 'qcm',
          question: 'Mise en relief temporelle : "___ 1789 ___ a été adoptée la Déclaration des Droits de l\'Homme."',
          options: ['C\'est / que', 'C\'est / qui', 'Ce sont / que', 'Il est / que'],
          correctIndex: 0,
          explanation: '"C\'EST en 1789 QUE a été adoptée la DDHC." Mise en relief d\'un CIRCONSTANT de temps (en 1789) → "C\'est... que". "Que" pour tout ce qui n\'est pas le sujet (temps, lieu, COD, COI...).',
        },
        {
          id: 'b1-ent-04-ex04',
          type: 'qcm',
          question: 'Pour répondre "Pourquoi souhaitez-vous la nationalité française ?", quelle structure est la plus efficace ?',
          options: [
            'Parce que c\'est obligatoire pour mon titre de séjour',
            'Plusieurs raisons : intégration (X ans en France), valeurs partagées, projet de vie (famille/travail), droits civiques',
            'Pour pouvoir voyager sans visa',
            'Je ne sais pas vraiment',
          ],
          correctIndex: 1,
          explanation: 'La bonne réponse structure les motivations : (1) intégration durable, (2) adhésion aux valeurs, (3) projet de vie en France, (4) désir de participer pleinement à la démocratie. Éviter les raisons purement pratiques (visa) qui suggèrent un manque d\'attachement réel.',
        },
        {
          id: 'b1-ent-04-ex05',
          type: 'qcm',
          question: 'Mise en relief pluriel : "___ les valeurs républicaines ___ me guident."',
          options: [
            'C\'est / que',
            'Ce sont / qui',
            'C\'est / qui',
            'Ce sont / que',
          ],
          correctIndex: 1,
          explanation: '"CE SONT les valeurs républicaines QUI me guident." "Ce sont" (pluriel) pour un sujet pluriel. "Qui" pour le sujet mis en relief. Accord : "les valeurs" (pluriel) → "ce sont" (pas "c\'est").',
        },
        {
          id: 'b1-ent-04-ex06',
          type: 'qcm',
          question: 'Que signifie "adhérer aux valeurs républicaines" ?',
          options: [
            'Être membre d\'un parti républicain',
            'Accepter et respecter les principes fondamentaux de la République (liberté, égalité, laïcité...)',
            'Signer un document officiel',
            'Connaître par cœur la Constitution',
          ],
          correctIndex: 1,
          explanation: '"Adhérer à" = to adhere to / to subscribe to. "Adhérer aux valeurs républicaines" = accepter et respecter librement les principes de la République. Ce n\'est pas une adhésion formelle (comme adhérer à un parti) mais une conviction personnelle.',
        },
        {
          id: 'b1-ent-04-ex07',
          type: 'qcm',
          question: 'Mise en relief du COD : "___ la liberté d\'expression ___ les Français défendent le plus farouchement."',
          options: [
            'C\'est / qui',
            'C\'est / que',
            'Ce sont / que',
            'Ce sont / qui',
          ],
          correctIndex: 1,
          explanation: '"C\'EST la liberté d\'expression QUE les Français défendent le plus farouchement." "Que" = pronom relatif COD. "Les Français défendent LA LIBERTÉ" → "la liberté QUE les Français défendent" → "C\'est la liberté QUE...".',
        },
        {
          id: 'b1-ent-04-ex08',
          type: 'qcm',
          question: 'Lors de l\'entretien, si l\'agent vous demande votre opinion sur une question politique, vous devez :',
          options: [
            'Donner votre opinion politique de façon claire',
            'Refuser de répondre car c\'est hors sujet',
            'Rappeler que vos opinions politiques sont privées et que vous respectez le pluralisme démocratique',
            'Dire que vous n\'avez pas d\'opinion',
          ],
          correctIndex: 2,
          explanation: 'L\'agent NE doit PAS évaluer vos opinions politiques. Si la question est posée, vous pouvez poliment rappeler que vos convictions politiques sont privées et que vous respectez le pluralisme démocratique et la liberté d\'opinion. Restez positif et ouvert.',
        },
        {
          id: 'b1-ent-04-ex09',
          type: 'qcm',
          question: '"Ce qui m\'attire dans la France, c\'est ses valeurs." — quelle est la structure grammaticale de "ce qui... c\'est" ?',
          options: [
            'Proposition relative + présentatif (mise en relief du complément)',
            'Question rhétorique',
            'Conditionnel implicite',
            'Négation totale',
          ],
          correctIndex: 0,
          explanation: '"Ce qui... c\'est" = structure de mise en relief par dislocation + présentatif. "Ce qui m\'attire" = proposition relative nominale (sujet). "C\'est ses valeurs" = partie mise en relief. Très efficace pour structurer une réponse et mettre l\'accent sur l\'essentiel.',
        },
        {
          id: 'b1-ent-04-ex10',
          type: 'qcm',
          question: 'Comment définir la laïcité lors d\'un entretien de naturalisation ?',
          options: [
            'L\'interdiction des religions en France',
            'La séparation de l\'Église et de l\'État, garantissant la liberté de conscience et l\'égalité de traitement de toutes les croyances',
            'L\'obligation d\'être athée',
            'Une loi récente de 2015',
          ],
          correctIndex: 1,
          explanation: 'Définition correcte : "La laïcité, c\'est la séparation de l\'Église et de l\'État (loi de 1905), qui garantit la liberté de conscience et l\'égalité de traitement de toutes les religions et convictions dans l\'espace public institutionnel." La laïcité protège les religions — elle ne les combat pas.',
        },
        {
          id: 'b1-ent-04-ex11',
          type: 'qcm',
          question: 'Mise en relief avec préposition : "C\'est ___ la République ___ je fais confiance." (faire confiance À)',
          options: ['à / que', 'de / que', 'à / qui', 'la / que'],
          correctIndex: 0,
          explanation: '"C\'est À la République QUE je fais confiance." "Faire confiance À" → préposition "à" conservée dans la mise en relief. "C\'est À + COI mis en relief + que."',
        },
        {
          id: 'b1-ent-04-ex12',
          type: 'qcm',
          question: '"La vie associative et bénévole" est mentionnée lors de l\'entretien pour montrer :',
          options: [
            'Qu\'on gagne de l\'argent en dehors du travail',
            'L\'intégration dans la vie locale française et l\'engagement civique',
            'Des compétences professionnelles supplémentaires',
            'Qu\'on ne travaille pas à temps plein',
          ],
          correctIndex: 1,
          explanation: 'La participation à des associations (sportives, culturelles, caritatives...) et le bénévolat montrent une INTÉGRATION ACTIVE dans la vie locale. Ce sont des signes d\'attachement à la communauté française allant au-delà du simple séjour légal.',
        },
        {
          id: 'b1-ent-04-ex13',
          type: 'qcm',
          question: 'Mise en relief : "___ la Marseillaise ___ est l\'hymne national." (C\'est... qui... est)',
          options: [
            'C\'est la Marseillaise qui est l\'hymne national',
            'C\'est la Marseillaise que est l\'hymne national',
            'Ce sont la Marseillaise qui est l\'hymne national',
            'C\'est à la Marseillaise que est l\'hymne national',
          ],
          correctIndex: 0,
          explanation: '"C\'EST LA MARSEILLAISE QUI EST l\'hymne national." Mise en relief sujet. "La Marseillaise" est le sujet du verbe "est" → "qui". "C\'est + sujet + qui + verbe."',
        },
        {
          id: 'b1-ent-04-ex14',
          type: 'qcm',
          question: 'Pour parler de son "projet en France" lors de l\'entretien, il faut :',
          options: [
            'Mentionner uniquement son projet professionnel',
            'Décrire une vision d\'avenir en France : professionnel + familial + civique + contribution à la société',
            'Promettre de ne jamais retourner dans son pays d\'origine',
            'Expliquer pourquoi on n\'a pas de projet précis',
          ],
          correctIndex: 1,
          explanation: 'Le "projet en France" = vision holistique : carrière professionnelle + vie familiale (enfants scolarisés, conjoint intégré) + engagement civique (vote, associations) + contribution à la société. Montrer un attachement durable et une vision positive.',
        },
        {
          id: 'b1-ent-04-ex15',
          type: 'qcm',
          question: '"Farouchement" (dans "défendus farouchement") est un adverbe qui signifie :',
          options: ['Doucement', 'Avec une grande intensité / vigueur / sans concession', 'Rapidement', 'Poliment'],
          correctIndex: 1,
          explanation: '"Farouchement" = fiercely / stubbornly / passionately. "Défendre farouchement" = défendre avec une grande intensité, sans reculer. "Un défenseur farouche de la liberté" = ardent / fervent defender. Adverbe fort, souvent mélioratif (positif).',
        },
        {
          id: 'b1-ent-04-ex16',
          type: 'qcm',
          question: 'Mise en relief temporelle : "___ grâce à l\'école ___ je suis devenu bilingue."',
          options: [
            'Ce sont / qui',
            'C\'est / que',
            'C\'est / qui',
            'C\'est grâce à l\'école que',
          ],
          correctIndex: 3,
          explanation: '"C\'EST GRÂCE À L\'ÉCOLE QUE je suis devenu bilingue." La préposition "grâce à" reste dans la mise en relief. "C\'est grâce à X que..." = mise en relief de la cause/moyen. Complet : "C\'est grâce à l\'école QUE je suis devenu bilingue."',
        },
        {
          id: 'b1-ent-04-ex17',
          type: 'qcm',
          question: 'Que signifie "l\'assimilation" dans le contexte de la naturalisation française ?',
          options: [
            'Abandonner complètement sa culture d\'origine',
            'S\'intégrer suffisamment dans la société française pour partager ses valeurs, connaître sa langue et respecter ses lois',
            'Parler sans aucun accent',
            'Avoir des amis uniquement français',
          ],
          correctIndex: 1,
          explanation: '"Assimilation" au sens du droit de la nationalité française = intégration suffisante pour partager les valeurs fondamentales, maîtriser le français, connaître les institutions et s\'inscrire dans un projet de vie en France. ⚠️ Ce n\'est PAS l\'abandon de sa culture d\'origine (on peut être français ET garder ses racines).',
        },
        {
          id: 'b1-ent-04-ex18',
          type: 'qcm',
          question: '"Ce que j\'apprécie, c\'est la liberté d\'expression." — "ce que" est :',
          options: [
            'Un pronom démonstratif neutre COD dans une proposition relative',
            'Une conjonction de subordination',
            'Un pronom interrogatif',
            'Un article défini neutre',
          ],
          correctIndex: 0,
          explanation: '"Ce que" = pronom relatif neutre COD. "Ce que j\'apprécie" = la chose que j\'apprécie. "Ce que + je/tu/il..." = construction nominale pour exprimer ce qu\'on apprécie, pense, etc. Mise en relief : "Ce que j\'apprécie, C\'EST la liberté d\'expression."',
        },
        {
          id: 'b1-ent-04-ex19',
          type: 'qcm',
          question: 'Pour conclure un entretien de naturalisation positivement, il est utile de :',
          options: [
            'Critiquer les aspects négatifs de la France',
            'Exprimer son attachement sincère à la France et son engagement à respecter ses valeurs',
            'Mentionner qu\'on a gardé sa nationalité d\'origine',
            'Demander un délai supplémentaire pour l\'entretien',
          ],
          correctIndex: 1,
          explanation: 'Conclusion idéale : exprimer un attachement SINCÈRE à la France, sa reconnaissance pour l\'accueil reçu, son engagement à respecter les valeurs républicaines, et sa volonté de contribuer positivement à la société. Rester authentique — ne pas réciter mécaniquement.',
        },
        {
          id: 'b1-ent-04-ex20',
          type: 'qcm',
          question: 'Mise en relief : "___ que je souhaite, ___ contribuer à cette société." (c\'est)',
          options: [
            'Ce / c\'est',
            'Ce que / c\'est',
            'Ce qui / c\'est',
            'Que / c\'est',
          ],
          correctIndex: 1,
          explanation: '"CE QUE je souhaite, C\'EST contribuer à cette société." "Ce que" = pronom relatif COD (je souhaite QUOI ?). "C\'est + infinitif" = révèle le contenu du souhait. Structure complète de mise en relief avec pronom relatif.',
        },
      ],
    },
  ],
};
