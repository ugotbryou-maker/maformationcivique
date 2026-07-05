import type { LangModule } from '../types';

export const examenBlancA2: LangModule = {
  id: 'examen-a2',
  slug: 'examen-blanc-a2',
  level: 'A2',
  title: 'Examen blanc A2',
  subtitle: 'Simulation complète — évaluation OFII / carte de séjour',
  description: 'Préparez-vous dans des conditions proches du réel à l\'évaluation linguistique A2 exigée pour le titre de séjour pluriannuel et le Contrat d\'Intégration Républicaine (CIR).',
  type: 'examen',
  emoji: '📋',
  free: false,
  lessons: [
    {
      id: 'examen-a2-01',
      slug: 'examen-a2-comprehension',
      moduleSlug: 'examen-blanc-a2',
      level: 'A2',
      title: 'Section 1 — Compréhension écrite et orale',
      description: 'Simulation de la partie compréhension : textes courts, dialogues, annonces administratives.',
      duration: 12,
      free: false,
      dialogue: `## Instructions de l'examen

**Durée recommandée : 30 minutes — 20 questions**

Cette section évalue votre capacité à comprendre des textes courts et des annonces de la vie quotidienne, telle qu'attendue au niveau A2 du CECRL pour l'évaluation linguistique OFII.

Lisez chaque texte ou dialogue attentivement avant de répondre. Aucun dictionnaire n'est autorisé pendant l'épreuve réelle — entraînez-vous dans les mêmes conditions.

---

**Texte 1 :**
"La mairie sera fermée le lundi 1er mai en raison du jour férié. Les services rouvriront normalement le mardi 2 mai à 8h30."

**Texte 2 — SMS de Karim à sa collègue :**
"Salut Sara, je suis en retard, le bus a 15 minutes de retard. J'arrive vers 9h15. Peux-tu prévenir le responsable ? Merci !"

**Texte 3 — Affiche à la pharmacie :**
"Pharmacie de garde ce week-end : Pharmacie du Centre, 12 rue de la République. Ouverte de 9h à 19h, dimanche compris."`,

      linguisticPoint: `## Rappel méthodologique pour la compréhension écrite

- Lisez d'abord le texte ENTIER une fois, sans vous arrêter sur les mots inconnus.
- Repérez les MOTS-CLÉS : dates, heures, lieux, noms.
- Relisez la question avant de chercher la réponse dans le texte.
- Éliminez les réponses qui contredisent clairement le texte.
- Gérez votre temps : ne passez pas plus de 1-2 minutes par question.`,

      keyPoints: [
        'Repérer les mots-clés : dates, heures, lieux avant de répondre',
        'Lire la question avant de chercher la réponse exacte dans le texte',
        'Éliminer les réponses qui contredisent le texte',
        'Gérer son temps : environ 1 à 2 minutes par question',
        'S\'entraîner dans les conditions réelles (sans dictionnaire, en temps limité)',
      ],

      exercises: [
        { id: 'examen-a2-01-ex01', type: 'qcm', question: 'D\'après le texte 1, pourquoi la mairie est-elle fermée le 1er mai ?', options: ['Pour travaux', 'C\'est un jour férié', 'Pour une grève', 'Par erreur'], correctIndex: 1, explanation: 'Le texte dit clairement "en raison du jour férié" — le 1er mai (fête du Travail) est un jour férié en France.' },
        { id: 'examen-a2-01-ex02', type: 'qcm', question: 'À quelle heure la mairie rouvre-t-elle ?', options: ['8h00', '8h30', '9h00', '9h30'], correctIndex: 1, explanation: 'Le texte précise "rouvriront normalement le mardi 2 mai à 8h30."' },
        { id: 'examen-a2-01-ex03', type: 'qcm', question: 'D\'après le SMS, pourquoi Karim est-il en retard ?', options: ['Il a oublié l\'heure', 'Le bus a du retard', 'Il est malade', 'Il a un rendez-vous médical'], correctIndex: 1, explanation: 'Le SMS dit "le bus a 15 minutes de retard."' },
        { id: 'examen-a2-01-ex04', type: 'qcm', question: 'Que demande Karim à Sara ?', options: ['De venir le chercher', 'De prévenir le responsable', 'D\'annuler la réunion', 'De lui envoyer de l\'argent'], correctIndex: 1, explanation: '"Peux-tu prévenir le responsable ?" = Karim demande à Sara d\'informer le responsable de son retard.' },
        { id: 'examen-a2-01-ex05', type: 'qcm', question: 'Vers quelle heure Karim pense-t-il arriver ?', options: ['9h00', '9h15', '9h30', '10h00'], correctIndex: 1, explanation: 'Le SMS indique "j\'arrive vers 9h15."' },
        { id: 'examen-a2-01-ex06', type: 'qcm', question: 'D\'après l\'affiche, quelle pharmacie est de garde ce week-end ?', options: ['Pharmacie du Centre', 'Pharmacie de la Mairie', 'Pharmacie Saint-Louis', 'Pharmacie Moderne'], correctIndex: 0, explanation: 'L\'affiche indique "Pharmacie de garde ce week-end : Pharmacie du Centre."' },
        { id: 'examen-a2-01-ex07', type: 'qcm', question: 'La pharmacie de garde est-elle ouverte le dimanche ?', options: ['Non, jamais le dimanche', 'Oui, "dimanche compris"', 'Seulement le matin', 'Seulement sur rendez-vous'], correctIndex: 1, explanation: 'L\'affiche précise "Ouverte de 9h à 19h, dimanche compris" = le dimanche aussi.' },
        { id: 'examen-a2-01-ex08', type: 'qcm', question: 'Quelle est l\'adresse de la pharmacie de garde ?', options: ['12 rue de la République', '12 rue de la Mairie', '15 rue de la République', '12 avenue de la République'], correctIndex: 0, explanation: 'L\'affiche indique "12 rue de la République."' },
        { id: 'examen-a2-01-ex09', type: 'qcm', question: 'Un panneau indique "Stationnement interdit sauf livraisons." Qui peut se garer ici ?', options: ['Tout le monde', 'Personne', 'Seulement les véhicules de livraison', 'Seulement les résidents'], correctIndex: 2, explanation: '"Sauf livraisons" = exception uniquement pour les véhicules effectuant une livraison.' },
        { id: 'examen-a2-01-ex10', type: 'qcm', question: 'Une annonce dit : "Appartement à louer, 2 pièces, 3ème étage sans ascenseur." Que signifie "sans ascenseur" ?', options: ['Il faut prendre les escaliers', 'L\'appartement est au rez-de-chaussée', 'L\'ascenseur est en panne', 'L\'immeuble est neuf'], correctIndex: 0, explanation: '"Sans ascenseur" signifie qu\'il n\'y a pas d\'ascenseur dans l\'immeuble — il faut monter par les escaliers.' },
        { id: 'examen-a2-01-ex11', type: 'qcm', question: 'Un message vocal dit : "Votre colis sera livré entre 14h et 16h." Que devez-vous faire ?', options: ['Sortir avant 14h', 'Être présent entre 14h et 16h', 'Aller chercher le colis à la poste', 'Ignorer le message'], correctIndex: 1, explanation: 'Pour recevoir le colis, il faut être présent (chez soi) pendant la plage horaire annoncée, entre 14h et 16h.' },
        { id: 'examen-a2-01-ex12', type: 'qcm', question: 'Une note de l\'école indique : "Réunion des parents jeudi à 18h, salle B12." Où aura lieu la réunion ?', options: ['Dans la cour', 'Salle B12', 'Au bureau du directeur', 'En ligne'], correctIndex: 1, explanation: 'La note précise le lieu : "salle B12."' },
        { id: 'examen-a2-01-ex13', type: 'qcm', question: 'Un panneau à la gare indique "Quai 4, départ 10h25." Que signifie "quai" ?', options: ['Le numéro du train', 'L\'endroit où on attend le train', 'Le prix du billet', 'La destination'], correctIndex: 1, explanation: 'Le "quai" est l\'endroit physique en gare où les voyageurs attendent et montent dans le train.' },
        { id: 'examen-a2-01-ex14', type: 'qcm', question: 'Une étiquette sur un médicament indique "À prendre 2 fois par jour, avant les repas." Quand faut-il prendre ce médicament ?', options: ['Après manger, 2 fois par jour', 'Avant de manger, 2 fois par jour', 'Une seule fois, le soir', 'Seulement si on a mal'], correctIndex: 1, explanation: 'L\'étiquette indique clairement "avant les repas" et "2 fois par jour."' },
        { id: 'examen-a2-01-ex15', type: 'qcm', question: 'Un courriel de la CAF dit : "Votre dossier est incomplet. Merci de joindre un justificatif de domicile." Que devez-vous faire ?', options: ['Ne rien faire', 'Envoyer un justificatif de domicile', 'Appeler la police', 'Fermer votre dossier'], correctIndex: 1, explanation: 'Le courriel demande explicitement d\'ajouter ("joindre") un justificatif de domicile pour compléter le dossier.' },
        { id: 'examen-a2-01-ex16', type: 'qcm', question: 'Un panneau dans le métro indique "Correspondance ligne 4." Que signifie "correspondance" ?', options: ['La sortie de la station', 'Le changement vers une autre ligne', 'Le ticket à acheter', 'L\'horaire du métro'], correctIndex: 1, explanation: '"Correspondance" désigne le lieu où on change de ligne de métro pour continuer son trajet.' },
        { id: 'examen-a2-01-ex17', type: 'qcm', question: 'Une affiche au travail indique "Pause déjeuner : 12h-13h." Combien de temps dure la pause ?', options: ['30 minutes', '1 heure', '2 heures', 'Toute la journée'], correctIndex: 1, explanation: 'De 12h à 13h = 1 heure de pause déjeuner.' },
        { id: 'examen-a2-01-ex18', type: 'qcm', question: 'Un message dit : "Le rendez-vous est reporté au 15 mars." Que signifie "reporté" ?', options: ['Annulé définitivement', 'Déplacé à une date plus tardive', 'Confirmé sans changement', 'Avancé à une date plus tôt'], correctIndex: 1, explanation: '"Reporté" signifie déplacé à une date ULTÉRIEURE (plus tard), pas annulé ni avancé.' },
        { id: 'examen-a2-01-ex19', type: 'qcm', question: 'Une étiquette de vêtement indique "Lavage à 30°C, ne pas sécher en machine." Que devez-vous éviter ?', options: ['Le lavage à la main', 'Le sèche-linge', 'Le repassage', 'Le lavage à l\'eau froide'], correctIndex: 1, explanation: '"Ne pas sécher en machine" signifie qu\'il faut éviter le SÈCHE-LINGE pour ce vêtement.' },
        { id: 'examen-a2-01-ex20', type: 'qcm', question: 'Un message de la préfecture indique "Présentez-vous avec une pièce d\'identité et deux photos." Combien de photos faut-il apporter ?', options: ['1', '2', '3', '4'], correctIndex: 1, explanation: 'Le message indique "deux photos" en plus de la pièce d\'identité.' },
      ],
    },

    {
      id: 'examen-a2-02',
      slug: 'examen-a2-grammaire-vocabulaire',
      moduleSlug: 'examen-blanc-a2',
      level: 'A2',
      title: 'Section 2 — Grammaire et vocabulaire',
      description: 'Révision consolidée des points grammaticaux et lexicaux essentiels du niveau A2.',
      duration: 12,
      free: false,
      dialogue: `## Instructions de l'examen

**Durée recommandée : 25 minutes — 20 questions**

Cette section couvre l'ensemble des points grammaticaux essentiels du niveau A2 : conjugaison (présent, passé composé, futur proche), articles, pronoms, négation. Elle correspond aux exigences testées lors de l'évaluation linguistique pour le Contrat d'Intégration Républicaine (CIR) et le renouvellement du titre de séjour.

Répondez à chaque question en choisissant la forme grammaticalement correcte.`,

      linguisticPoint: `## Points à réviser avant l'examen
- Présent des verbes irréguliers fréquents (être, avoir, aller, faire, pouvoir, vouloir)
- Passé composé : choix de l'auxiliaire (avoir/être) + accord
- Futur proche : aller + infinitif
- Articles définis/indéfinis/partitifs et la négation (de/d')
- Pronoms personnels (COD/COI) et leur place dans la phrase`,

      keyPoints: [
        'Présent : bien connaître les verbes irréguliers les plus fréquents',
        'Passé composé : DR MRS VAN DER TRAMP pour les verbes "être"',
        'Futur proche : aller (présent) + infinitif',
        'Négation : du/de la/des → DE après "ne...pas"',
        'Pronoms COD/COI toujours placés avant le verbe conjugué',
      ],

      exercises: [
        { id: 'examen-a2-02-ex01', type: 'qcm', question: 'Complétez : "Je ___ français depuis deux ans." (apprendre)', options: ['apprend', 'apprends', 'apprenons', 'apprennent'], correctIndex: 1, explanation: '"J\'APPRENDS" — 1ère personne du singulier du verbe "apprendre" au présent.' },
        { id: 'examen-a2-02-ex02', type: 'qcm', question: 'Complétez : "Hier, elle ___ à la préfecture." (aller, passé composé)', options: ['a allé', 'est allée', 'a allée', 'est allé'], correctIndex: 1, explanation: '"Aller" est un verbe d\'état/mouvement qui se conjugue avec ÊTRE. "Elle EST ALLÉE" (accord féminin).' },
        { id: 'examen-a2-02-ex03', type: 'qcm', question: 'Complétez : "Demain, nous ___ chercher les enfants à l\'école." (futur proche)', options: ['allons', 'allez', 'vont', 'va'], correctIndex: 0, explanation: '"Nous ALLONS chercher" — futur proche = aller (présent) + infinitif. "Allons" = 1ère pers. pl. de "aller".' },
        { id: 'examen-a2-02-ex04', type: 'qcm', question: 'Complétez : "Je ne mange pas ___ viande." (négation + partitif)', options: ['de la', 'de', 'la', 'une'], correctIndex: 1, explanation: 'Après une négation, "de la" devient simplement "DE" : "je ne mange pas DE viande."' },
        { id: 'examen-a2-02-ex05', type: 'qcm', question: 'Complétez : "Tu ___ ce document ? Donne-le-moi." (voir, présent)', options: ['vois', 'voit', 'voyons', 'voyez'], correctIndex: 0, explanation: '"Tu VOIS" — 2ème personne du singulier de "voir" au présent.' },
        { id: 'examen-a2-02-ex06', type: 'qcm', question: 'Complétez : "Je ___ ce livre demain." (lire, futur proche)', options: ['lis', 'vais lire', 'ai lu', 'lisais'], correctIndex: 1, explanation: '"Je VAIS LIRE" — futur proche pour une action prévue dans un futur proche.' },
        { id: 'examen-a2-02-ex07', type: 'qcm', question: 'Complétez avec le bon pronom : "Tu vois Marie ? Oui, je ___ vois souvent." (la/le/lui)', options: ['le', 'la', 'lui', 'les'], correctIndex: 1, explanation: '"Marie" = féminin singulier → "LA" (COD). "Je LA vois souvent."' },
        { id: 'examen-a2-02-ex08', type: 'qcm', question: 'Complétez : "Elle ___ deux enfants." (avoir, présent)', options: ['a', 'as', 'ai', 'ont'], correctIndex: 0, explanation: '"Elle A deux enfants" — 3ème personne du singulier de "avoir" au présent.' },
        { id: 'examen-a2-02-ex09', type: 'qcm', question: 'Complétez : "Nous ___ partis très tôt ce matin." (partir, passé composé)', options: ['avons', 'sommes', 'avions', 'étions'], correctIndex: 1, explanation: '"Partir" = verbe ÊTRE. "Nous SOMMES partis" (passé composé avec être).' },
        { id: 'examen-a2-02-ex10', type: 'qcm', question: 'Complétez : "Il n\'y a ___ pain à la maison." (négation + partitif)', options: ['du', 'de', 'des', 'le'], correctIndex: 1, explanation: 'Après "il n\'y a pas", "du pain" devient "DE pain" — "Il n\'y a pas DE pain."' },
        { id: 'examen-a2-02-ex11', type: 'qcm', question: 'Complétez : "Vous ___ rendez-vous à quelle heure ?" (avoir)', options: ['avez', 'as', 'a', 'ont'], correctIndex: 0, explanation: '"Vous AVEZ rendez-vous" — 2ème personne du pluriel de "avoir" au présent.' },
        { id: 'examen-a2-02-ex12', type: 'qcm', question: 'Complétez : "Je dois envoyer ce document ___ mon employeur." (préposition)', options: ['à', 'de', 'pour', 'avec'], correctIndex: 0, explanation: '"Envoyer quelque chose À quelqu\'un" — préposition fixe pour ce verbe.' },
        { id: 'examen-a2-02-ex13', type: 'qcm', question: 'Complétez : "Nous ___ très contents de cette nouvelle." (être)', options: ['sommes', 'sont', 'êtes', 'es'], correctIndex: 0, explanation: '"Nous SOMMES contents" — 1ère personne du pluriel du verbe "être" au présent.' },
        { id: 'examen-a2-02-ex14', type: 'qcm', question: 'Complétez : "Elle ___ son dossier la semaine dernière." (envoyer, passé composé)', options: ['a envoyé', 'est envoyée', 'a envoyée', 'envoie'], correctIndex: 0, explanation: '"Envoyer" = verbe AVOIR. "Elle A ENVOYÉ" (pas d\'accord car le COD "son dossier" est après le verbe).' },
        { id: 'examen-a2-02-ex15', type: 'qcm', question: 'Complétez : "Je voudrais ___ rendez-vous, s\'il vous plaît." (article)', options: ['un', 'une', 'le', 'la'], correctIndex: 0, explanation: '"Un rendez-vous" — "rendez-vous" est masculin singulier. Article indéfini "UN".' },
        { id: 'examen-a2-02-ex16', type: 'qcm', question: 'Complétez : "Ils ___ besoin d\'aide pour remplir le formulaire." (avoir)', options: ['a', 'ont', 'as', 'avons'], correctIndex: 1, explanation: '"Ils ONT besoin" — 3ème personne du pluriel de "avoir" au présent.' },
        { id: 'examen-a2-02-ex17', type: 'qcm', question: 'Complétez : "Je ne comprends ___ cette phrase." (négation simple)', options: ['ne pas', 'pas', 'rien', 'jamais'], correctIndex: 1, explanation: '"Je ne comprends PAS cette phrase" — négation simple "ne...pas".' },
        { id: 'examen-a2-02-ex18', type: 'qcm', question: 'Complétez : "Vous ___ déjà allé à la préfecture ?" (être, passé composé, question)', options: ['êtes', 'avez', 'es', 'avait'], correctIndex: 0, explanation: '"Aller" = verbe être. "Vous ÊTES déjà allé(e) ?" (passé composé avec être).' },
        { id: 'examen-a2-02-ex19', type: 'qcm', question: 'Complétez : "Mon fils ___ à l\'école primaire." (aller, présent)', options: ['va', 'vais', 'vas', 'vont'], correctIndex: 0, explanation: '"Mon fils VA à l\'école" — 3ème personne du singulier de "aller" au présent.' },
        { id: 'examen-a2-02-ex20', type: 'qcm', question: 'Complétez : "Je vais ___ chercher mes papiers." (devoir, ou simplifier la structure)', options: ['dois', 'devoir', 'devons', 'doit'], correctIndex: 1, explanation: '"Je vais DEVOIR chercher mes papiers" — après "aller" (futur proche), le verbe suivant reste à l\'INFINITIF.' },
      ],
    },

    {
      id: 'examen-a2-03',
      slug: 'examen-a2-simulation-entretien-ofii',
      moduleSlug: 'examen-blanc-a2',
      level: 'A2',
      title: 'Section 3 — Simulation entretien OFII',
      description: 'Questions typiques posées lors de l\'évaluation orale OFII et exemples de réponses adaptées au niveau A2.',
      duration: 12,
      free: false,
      dialogue: `## Instructions de l'examen

**Durée recommandée : 20 minutes — 20 questions**

L'évaluation linguistique de l'OFII (Office Français de l'Immigration et de l'Intégration) comprend un entretien oral simple visant à vérifier votre niveau A2 dans des situations de la vie courante. Cette section reproduit les questions les plus fréquemment posées.

**Conseil :** entraînez-vous à répondre à voix haute, en phrases complètes, sans réciter par cœur.

---

**Exemple d'échange réel :**

**Agent :** Bonjour, pouvez-vous vous présenter ?
**Candidat :** Bonjour, je m'appelle Amina, j'ai 32 ans, je suis originaire du Maroc et j'habite à Toulouse depuis trois ans.

**Agent :** Que faites-vous dans la vie ?
**Candidat :** Je travaille comme aide à domicile. Avant, je m'occupais de mes enfants à la maison.

**Agent :** Parlez-moi de votre famille.
**Candidat :** J'ai un mari et deux enfants. Mon mari travaille dans le bâtiment. Mes enfants vont à l'école.`,

      linguisticPoint: `## Stratégies pour réussir l'entretien oral A2

- Préparez une présentation courte de vous-même (nom, âge, origine, famille, travail) — 1 minute environ.
- Utilisez des phrases SIMPLES et COMPLÈTES, pas de mots isolés.
- Si vous ne comprenez pas une question, dites : "Pouvez-vous répéter, s'il vous plaît ?"
- Restez calme : l'objectif est de vérifier la communication de base, pas la perfection grammaticale.`,

      keyPoints: [
        'Préparer une présentation personnelle courte et naturelle (pas récitée mot à mot)',
        'Répondre par des phrases complètes, pas par des mots isolés',
        '"Pouvez-vous répéter ?" = formule utile en cas d\'incompréhension',
        'L\'entretien évalue la communication de base, pas la perfection grammaticale',
        'S\'entraîner à voix haute avant le jour de l\'évaluation',
      ],

      exercises: [
        { id: 'examen-a2-03-ex01', type: 'qcm', question: '"Pouvez-vous vous présenter ?" — quelle réponse est la mieux adaptée au niveau A2 ?', options: ['"Présenter."', '"Je m\'appelle Karim, j\'ai 28 ans, je suis originaire de Tunisie."', '"Présentation moi."', 'Rester silencieux'], correctIndex: 1, explanation: 'Une réponse en PHRASE COMPLÈTE avec des informations basiques (nom, âge, origine) est attendue — pas un mot isolé ni une phrase incorrecte.' },
        { id: 'examen-a2-03-ex02', type: 'qcm', question: '"Que faites-vous dans la vie ?" — quelle réponse est correcte ?', options: ['"Travaille."', '"Je travaille comme cuisinier dans un restaurant."', '"Moi travail."', '"Oui."'], correctIndex: 1, explanation: 'Réponse complète indiquant la profession avec une structure grammaticale correcte ("je travaille comme...").' },
        { id: 'examen-a2-03-ex03', type: 'qcm', question: 'Que faut-il dire si on ne comprend pas une question ?', options: ['Ne rien dire', '"Pouvez-vous répéter, s\'il vous plaît ?"', 'Répondre n\'importe quoi', 'Quitter l\'entretien'], correctIndex: 1, explanation: '"Pouvez-vous répéter, s\'il vous plaît ?" est la formule polie et appropriée pour demander une clarification, sans pénaliser votre évaluation.' },
        { id: 'examen-a2-03-ex04', type: 'qcm', question: '"Parlez-moi de votre famille." — quelle réponse est adaptée ?', options: ['"Famille bien."', '"J\'ai une femme et trois enfants. Ils vont à l\'école."', '"Famille moi."', 'Ne pas répondre'], correctIndex: 1, explanation: 'Réponse structurée avec des informations claires sur la composition familiale, en phrases complètes.' },
        { id: 'examen-a2-03-ex05', type: 'qcm', question: '"Depuis combien de temps habitez-vous en France ?" — quelle structure est correcte ?', options: ['"J\'habite en France depuis deux ans."', '"Habite France deux ans."', '"France deux ans moi."', '"Deux ans."'], correctIndex: 0, explanation: '"J\'habite en France DEPUIS deux ans" — structure complète avec "depuis" pour exprimer la durée.' },
        { id: 'examen-a2-03-ex06', type: 'qcm', question: '"Comment allez-vous au travail ?" — quelle réponse est adaptée au niveau A2 ?', options: ['"Bus."', '"Je vais au travail en bus, tous les matins."', '"Travail bus moi."', 'Ne pas répondre'], correctIndex: 1, explanation: 'Réponse en phrase complète indiquant le moyen de transport et la régularité.' },
        { id: 'examen-a2-03-ex07', type: 'qcm', question: '"Avez-vous des enfants scolarisés ?" — quelle réponse est correcte ?', options: ['"Oui, mes deux enfants vont à l\'école primaire."', '"Enfants école."', '"Oui enfants."', '"Scolarisés oui."'], correctIndex: 0, explanation: 'Réponse complète précisant le nombre d\'enfants et le type d\'école, démontrant une bonne maîtrise communicative.' },
        { id: 'examen-a2-03-ex08', type: 'qcm', question: '"Que faites-vous le week-end ?" — quelle réponse illustre une bonne maîtrise A2 ?', options: ['"Rien."', '"Le week-end, je fais les courses et je me promène avec ma famille."', '"Week-end maison."', '"Travail."'], correctIndex: 1, explanation: 'Réponse développée avec plusieurs activités, montrant une capacité à construire des phrases avec des connecteurs simples ("et").' },
        { id: 'examen-a2-03-ex09', type: 'qcm', question: '"Pourquoi voulez-vous rester en France ?" — quelle réponse est appropriée ?', options: ['"Argent."', '"Je veux rester en France parce que ma famille y vit et j\'y ai trouvé un travail stable."', '"France bien."', 'Ne pas répondre'], correctIndex: 1, explanation: 'Réponse structurée avec une justification claire ("parce que"), démontrant une capacité d\'expression argumentée simple.' },
        { id: 'examen-a2-03-ex10', type: 'qcm', question: '"Avez-vous suivi des cours de français ?" — quelle réponse est correcte ?', options: ['"Oui cours."', '"Oui, j\'ai suivi des cours de français pendant six mois."', '"Cours oui six mois."', '"Français oui."'], correctIndex: 1, explanation: 'Réponse complète avec une précision temporelle ("pendant six mois"), illustrant une bonne structuration de phrase.' },
        { id: 'examen-a2-03-ex11', type: 'qcm', question: '"Que mangez-vous habituellement le matin ?" — quelle réponse correspond au niveau A2 ?', options: ['"Pain."', '"Le matin, je mange du pain avec du café."', '"Matin pain café."', 'Ne pas répondre'], correctIndex: 1, explanation: 'Réponse structurée décrivant une habitude quotidienne simple, avec une construction de phrase complète.' },
        { id: 'examen-a2-03-ex12', type: 'qcm', question: '"Connaissez-vous vos voisins ?" — quelle réponse illustre une bonne réponse ?', options: ['"Non."', '"Oui, je connais bien mes voisins, nous nous parlons souvent."', '"Voisins oui."', '"Connais pas."'], correctIndex: 1, explanation: 'Réponse développée incluant un verbe pronominal simple ("nous nous parlons"), démontrant une intégration sociale et une bonne expression.' },
        { id: 'examen-a2-03-ex13', type: 'qcm', question: '"Quel est votre projet pour l\'avenir ?" — quelle réponse est adaptée ?', options: ['"Rien."', '"Je voudrais trouver un meilleur emploi et améliorer mon français."', '"Avenir bien."', 'Ne pas répondre'], correctIndex: 1, explanation: 'Réponse avec le conditionnel de politesse ("je voudrais") et des objectifs concrets, démontrant une projection dans l\'avenir.' },
        { id: 'examen-a2-03-ex14', type: 'qcm', question: '"Savez-vous utiliser les transports en commun seul(e) ?" — quelle réponse est correcte ?', options: ['"Oui transports."', '"Oui, je sais prendre le bus et le métro tout seul."', '"Transports oui seul."', '"Pas sûr."'], correctIndex: 1, explanation: 'Réponse précise nommant les moyens de transport utilisés de façon autonome, en phrase complète.' },
        { id: 'examen-a2-03-ex15', type: 'qcm', question: '"Que faites-vous quand vous êtes malade ?" — quelle réponse illustre une bonne réponse ?', options: ['"Médecin."', '"Quand je suis malade, je vais voir mon médecin ou je vais à la pharmacie."', '"Malade médecin moi."', 'Ne pas répondre'], correctIndex: 1, explanation: 'Réponse structurée avec une subordonnée temporelle ("quand je suis malade") et un choix entre deux options ("ou"), montrant une bonne maîtrise.' },
        { id: 'examen-a2-03-ex16', type: 'qcm', question: '"Comment se passent vos démarches administratives en France ?" — quelle réponse est appropriée ?', options: ['"Difficile."', '"C\'est parfois compliqué, mais une association m\'aide pour les démarches."', '"Démarches mauvais."', 'Ne pas répondre'], correctIndex: 1, explanation: 'Réponse nuancée ("parfois compliqué, mais...") montrant une capacité à exprimer une situation mitigée avec une solution trouvée.' },
        { id: 'examen-a2-03-ex17', type: 'qcm', question: '"Qu\'avez-vous fait hier ?" — quelle réponse utilise correctement le passé composé ?', options: ['"Hier travail."', '"Hier, j\'ai travaillé toute la journée et j\'ai fait les courses le soir."', '"Travaillé hier moi."', '"Hier rien."'], correctIndex: 1, explanation: 'Réponse utilisant correctement le PASSÉ COMPOSÉ ("j\'ai travaillé", "j\'ai fait") pour décrire des actions passées, avec des précisions temporelles.' },
        { id: 'examen-a2-03-ex18', type: 'qcm', question: '"Qu\'est-ce que vous ferez ce week-end ?" — quelle réponse utilise correctement le futur proche ?', options: ['"Week-end repos."', '"Ce week-end, je vais me reposer et je vais voir des amis."', '"Repos amis moi."', 'Ne pas répondre'], correctIndex: 1, explanation: 'Réponse utilisant correctement le FUTUR PROCHE ("je vais me reposer", "je vais voir") pour des actions prévues.' },
        { id: 'examen-a2-03-ex19', type: 'qcm', question: 'Quelle attitude générale est recommandée pendant l\'entretien oral OFII ?', options: ['Réciter des phrases mémorisées sans les comprendre', 'Répondre naturellement, calmement, avec des phrases simples mais authentiques', 'Parler le plus vite possible', 'Donner des réponses très courtes sans développer'], correctIndex: 1, explanation: 'L\'attitude RECOMMANDÉE est de répondre NATURELLEMENT et CALMEMENT, avec des phrases simples mais AUTHENTIQUES, plutôt que de réciter des réponses mémorisées qui sonneraient artificielles.' },
        { id: 'examen-a2-03-ex20', type: 'qcm', question: 'Pourquoi est-il utile de préparer une présentation personnelle d\'environ 1 minute avant l\'entretien ?', options: ['Ce n\'est pas utile', 'Cela permet de structurer ses idées à l\'avance et de répondre avec plus d\'aisance à la première question, généralement "présentez-vous"', 'Parce que c\'est obligatoire de réciter un texte', 'Parce que l\'entretien ne dure qu\'une minute'], correctIndex: 1, explanation: 'Préparer une présentation COURTE permet de STRUCTURER ses idées à l\'AVANCE et de répondre avec plus d\'AISANCE à la première question fréquemment posée ("présentez-vous"), réduisant le stress du début d\'entretien.' },
      ],
    },
  ],
};
