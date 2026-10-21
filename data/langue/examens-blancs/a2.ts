import type { ExamenBlancLangue } from './types';

/**
 * Examen blanc A2 — carte de séjour pluriannuelle.
 *
 * Attendus du niveau A2 (CECRL) : comprendre des énoncés isolés et des
 * documents courants très simples, échanger sur des sujets familiers et
 * des tâches quotidiennes. Le contexte retenu est celui de la vie
 * administrative en France, qui est celui des épreuves réelles.
 */
export const examenBlancA2: ExamenBlancLangue = {
  niveau: 'A2',
  titre: 'Examen blanc A2',
  demarche: 'Carte de séjour pluriannuelle',
  dureeMinutes: 45,
  seuilReussite: 0.7,
  questions: [
    // ── Compréhension écrite (10) ──────────────────────────────────────
    {
      id: 'a2-c01', section: 'comprehension', format: 'qcm',
      support: "Affiche à la mairie :\n« Le service des cartes d'identité est ouvert du lundi au vendredi, de 8 h 30 à 12 h. Fermé l'après-midi. »",
      enonce: 'À quelle heure pouvez-vous vous présenter au service ?',
      options: ['Lundi à 14 h', 'Mercredi à 10 h', 'Samedi à 9 h', 'Vendredi à 16 h'],
      bonneReponse: 1,
      explication: "Le service n'ouvre que le matin, du lundi au vendredi. Seul mercredi 10 h entre dans ce créneau.",
    },
    {
      id: 'a2-c02', section: 'comprehension', format: 'qcm',
      support: "SMS : « Bonjour, votre rendez-vous à la préfecture est reporté au jeudi 14 mars à 9 h. Merci d'apporter votre passeport et un justificatif de domicile. »",
      enonce: 'Que devez-vous apporter ?',
      options: ['Un passeport et un justificatif de domicile', 'Seulement le passeport', 'Une photo et un timbre fiscal', 'Rien de particulier'],
      bonneReponse: 0,
      explication: 'Le message énumère exactement deux documents : le passeport et un justificatif de domicile.',
    },
    {
      id: 'a2-c03', section: 'comprehension', format: 'qcm',
      support: "Petite annonce :\n« Loue studio 25 m², 2ᵉ étage sans ascenseur, proche métro. 650 € charges comprises. Libre au 1ᵉʳ septembre. »",
      enonce: 'Que signifie « charges comprises » ?',
      options: ["Le loyer augmentera plus tard", "L'eau et l'entretien sont inclus dans le prix", 'Le dépôt de garantie est offert', "L'électricité est interdite"],
      bonneReponse: 1,
      explication: "« Charges comprises » signifie que les frais collectifs (eau, entretien des parties communes) sont déjà inclus dans les 650 €.",
    },
    {
      id: 'a2-c04', section: 'comprehension', format: 'qcm',
      support: "Courrier de la CAF :\n« Votre dossier est incomplet. Merci de nous transmettre votre avis d'imposition sous 15 jours, faute de quoi votre demande sera classée sans suite. »",
      enonce: 'Que se passe-t-il si vous ne répondez pas ?',
      options: ['Vous recevez une amende', 'Votre demande est abandonnée', 'Votre dossier est accepté', 'Vous êtes convoqué au tribunal'],
      bonneReponse: 1,
      explication: '« Classée sans suite » signifie que la demande ne sera plus traitée. Ce n’est pas une sanction, mais le dossier est abandonné.',
    },
    {
      id: 'a2-c05', section: 'comprehension', format: 'saisie',
      support: "Panneau dans le bus :\n« Ces places sont réservées en priorité aux personnes âgées, aux femmes enceintes et aux personnes handicapées. »",
      enonce: "Citez une catégorie de personnes prioritaires mentionnée sur le panneau.",
      reponses: ['les personnes âgées', 'personnes âgées', 'les femmes enceintes', 'femmes enceintes', 'les personnes handicapées', 'personnes handicapées', 'personnes agées'],
      accentsFacultatifs: true,
      explication: 'Trois catégories sont citées : personnes âgées, femmes enceintes, personnes handicapées.',
    },
    {
      id: 'a2-c06', section: 'comprehension', format: 'qcm',
      support: "Ordonnance du médecin :\n« 1 comprimé matin et soir pendant 6 jours, à prendre au cours du repas. »",
      enonce: 'Combien de comprimés prendrez-vous au total ?',
      options: ['6', '8', '12', '14'],
      bonneReponse: 2,
      explication: '2 comprimés par jour pendant 6 jours : 2 × 6 = 12.',
    },
    {
      id: 'a2-c07', section: 'comprehension', format: 'qcm',
      support: "Message de l'école :\n« La sortie scolaire du 12 mai est annulée en raison de la météo. Elle est reportée au 2 juin. Aucun supplément ne sera demandé. »",
      enonce: 'Que faut-il retenir ?',
      options: ["La sortie est annulée définitivement", "La sortie aura lieu le 2 juin, sans frais supplémentaires", 'Il faut payer un supplément', 'La sortie a lieu le 12 mai comme prévu'],
      bonneReponse: 1,
      explication: '« Reportée » signifie déplacée à une autre date. Le texte précise qu’aucun supplément n’est demandé.',
    },
    {
      id: 'a2-c08', section: 'comprehension', format: 'qcm',
      support: "Affichage à la gare :\n« Train de 18 h 12 à destination de Lyon : retard estimé 25 minutes. »",
      enonce: 'À quelle heure le train est-il attendu ?',
      options: ['17 h 47', '18 h 25', '18 h 37', '19 h 12'],
      bonneReponse: 2,
      explication: '18 h 12 + 25 minutes = 18 h 37.',
    },
    {
      id: 'a2-c09', section: 'comprehension', format: 'saisie',
      support: "Note de votre employeur :\n« Merci de bien vouloir poser vos congés d'été avant le 30 avril. Passé cette date, les dates seront attribuées par la direction. »",
      enonce: 'Avant quelle date devez-vous poser vos congés ? (écrivez la date)',
      reponses: ['le 30 avril', '30 avril', 'avant le 30 avril'],
      accentsFacultatifs: true,
      explication: 'La note fixe la limite au 30 avril.',
    },
    {
      id: 'a2-c10', section: 'comprehension', format: 'qcm',
      support: "Rappel de la banque :\n« Votre carte bancaire arrive à expiration le 31 juillet. La nouvelle carte vous sera envoyée automatiquement à votre adresse. »",
      enonce: 'Que devez-vous faire ?',
      options: ['Aller en agence commander une carte', "Rien, la carte arrivera toute seule", 'Payer des frais de renouvellement', 'Fermer votre compte'],
      bonneReponse: 1,
      explication: '« Envoyée automatiquement » signifie qu’aucune démarche n’est nécessaire.',
    },

    // ── Grammaire (10) ─────────────────────────────────────────────────
    {
      id: 'a2-g01', section: 'grammaire', format: 'qcm',
      enonce: 'Je vais ___ préfecture demain matin.',
      options: ['à la', 'au', 'à le', 'en la'],
      bonneReponse: 0,
      explication: '« Préfecture » est un nom féminin : on dit « à la préfecture ».',
    },
    {
      id: 'a2-g02', section: 'grammaire', format: 'qcm',
      enonce: 'Elle travaille ___ France depuis trois ans.',
      options: ['à', 'en', 'au', 'dans'],
      bonneReponse: 1,
      explication: 'Devant un nom de pays féminin, on emploie « en » : en France, en Espagne, en Italie.',
    },
    {
      id: 'a2-g03', section: 'grammaire', format: 'saisie',
      enonce: 'Complétez par le bon article : « J’ai rendez-vous avec ___ assistante sociale. »',
      reponses: ["l'", "l'assistante sociale", 'l’'],
      accentsFacultatifs: true,
      explication: "Devant une voyelle, « la » s'élide en « l' » : l'assistante sociale.",
    },
    {
      id: 'a2-g04', section: 'grammaire', format: 'qcm',
      enonce: 'Mon dossier ___ complet.',
      options: ['sont', 'est', 'es', 'êtes'],
      bonneReponse: 1,
      explication: '« Mon dossier » est un sujet singulier à la 3ᵉ personne : « est ».',
    },
    {
      id: 'a2-g05', section: 'grammaire', format: 'qcm',
      enonce: 'Ce sont ___ documents originaux.',
      options: ['de les', 'du', 'des', 'de la'],
      bonneReponse: 2,
      explication: 'Article indéfini pluriel : « des documents ».',
    },
    {
      id: 'a2-g06', section: 'grammaire', format: 'saisie',
      enonce: 'Mettez au pluriel : « un justificatif de domicile » → « deux ___ de domicile »',
      reponses: ['justificatifs'],
      accentsFacultatifs: true,
      explication: 'Pluriel régulier en -s : justificatif → justificatifs.',
    },
    {
      id: 'a2-g07', section: 'grammaire', format: 'qcm',
      enonce: 'Je n’ai ___ reçu la convocation.',
      options: ['pas', 'rien', 'jamais de', 'aucun'],
      bonneReponse: 0,
      explication: 'La négation simple encadre l’auxiliaire : « je n’ai pas reçu ».',
    },
    {
      id: 'a2-g08', section: 'grammaire', format: 'qcm',
      enonce: 'La carte ___ je vous parle est valable dix ans.',
      options: ['que', 'dont', 'qui', 'où'],
      bonneReponse: 1,
      explication: 'On dit « parler DE quelque chose » : le pronom relatif est « dont ».',
    },
    {
      id: 'a2-g09', section: 'grammaire', format: 'saisie',
      enonce: 'Accordez l’adjectif : « une démarche (long) ___ »',
      reponses: ['longue'],
      explication: 'Le féminin de « long » est « longue ».',
    },
    {
      id: 'a2-g10', section: 'grammaire', format: 'qcm',
      enonce: '___ est votre adresse actuelle ?',
      options: ['Quel', 'Quelle', 'Quels', 'Quelles'],
      bonneReponse: 1,
      explication: '« Adresse » est féminin singulier : « Quelle est votre adresse ? »',
    },

    // ── Conjugaison (8) ────────────────────────────────────────────────
    {
      id: 'a2-j01', section: 'conjugaison', format: 'saisie',
      enonce: 'Conjuguez au présent : « Je (être) ___ arrivé en France en 2021. »',
      reponses: ['suis'],
      explication: 'Auxiliaire être, 1ʳᵉ personne du singulier au présent : « je suis ».',
    },
    {
      id: 'a2-j02', section: 'conjugaison', format: 'saisie',
      enonce: 'Conjuguez au présent : « Nous (avoir) ___ deux enfants. »',
      reponses: ['avons'],
      explication: 'Avoir, 1ʳᵉ personne du pluriel : « nous avons ».',
    },
    {
      id: 'a2-j03', section: 'conjugaison', format: 'qcm',
      enonce: 'Hier, j’___ mon dossier à la préfecture.',
      options: ['dépose', 'ai déposé', 'déposerai', 'déposais'],
      bonneReponse: 1,
      explication: '« Hier » situe l’action dans un passé achevé : passé composé.',
    },
    {
      id: 'a2-j04', section: 'conjugaison', format: 'saisie',
      enonce: 'Conjuguez au passé composé : « Elle (venir) ___ avec son mari. »',
      reponses: ['est venue'],
      explication: '« Venir » se conjugue avec être : le participe s’accorde avec le sujet féminin → « est venue ».',
    },
    {
      id: 'a2-j05', section: 'conjugaison', format: 'qcm',
      enonce: 'Demain, nous ___ le formulaire.',
      options: ['remplissons', 'avons rempli', 'remplirons', 'remplissions'],
      bonneReponse: 2,
      explication: '« Demain » appelle le futur simple : « nous remplirons ».',
    },
    {
      id: 'a2-j06', section: 'conjugaison', format: 'saisie',
      enonce: 'Conjuguez au présent : « Vous (faire) ___ une demande de titre de séjour. »',
      reponses: ['faites'],
      explication: 'Faire, 2ᵉ personne du pluriel : « vous faites ».',
    },
    {
      id: 'a2-j07', section: 'conjugaison', format: 'qcm',
      enonce: 'Quand j’étais enfant, je ___ au Maroc.',
      options: ['habite', 'ai habité', 'habitais', 'habiterai'],
      bonneReponse: 2,
      explication: "L'imparfait exprime une situation durable dans le passé.",
    },
    {
      id: 'a2-j08', section: 'conjugaison', format: 'saisie',
      enonce: 'Conjuguez à l’impératif : « (Prendre) ___ un ticket avant de vous asseoir. »',
      reponses: ['prenez', 'prends'],
      explication: 'Impératif de « prendre » : « prends » (tutoiement) ou « prenez » (vouvoiement).',
    },

    // ── Orthographe (7) ────────────────────────────────────────────────
    {
      id: 'a2-o01', section: 'orthographe', format: 'saisie',
      enonce: 'Écrivez correctement le mot manquant : « Je dois fournir un justificatif de ___ (lieu où l’on habite). »',
      reponses: ['domicile'],
      explication: 'On écrit « domicile », sans accent.',
    },
    {
      id: 'a2-o02', section: 'orthographe', format: 'qcm',
      enonce: 'Quelle est la bonne orthographe ?',
      options: ['récépissé', 'recepissé', 'récepissé', 'recépissé'],
      bonneReponse: 0,
      explication: 'Le document remis après un dépôt de dossier s’écrit « récépissé » : trois accents aigus.',
    },
    {
      id: 'a2-o03', section: 'orthographe', format: 'saisie',
      enonce: 'Complétez par « a » ou « à » : « Il ___ rendez-vous ___ 14 heures. »',
      reponses: ['a à', 'a, à'],
      explication: '« a » est le verbe avoir ; « à » est la préposition. Il **a** rendez-vous **à** 14 heures.',
    },
    {
      id: 'a2-o04', section: 'orthographe', format: 'qcm',
      enonce: 'Quelle phrase est correctement orthographiée ?',
      options: ["Je suis allé a la mairie.", "Je suis allé à la mairie.", "Je suis aller à la mairie.", "Je suis allée a la mairie."],
      bonneReponse: 1,
      explication: 'Participe passé « allé » après être, et préposition « à » avec accent.',
    },
    {
      id: 'a2-o05', section: 'orthographe', format: 'saisie',
      enonce: 'Complétez par « et » ou « est » : « Mon dossier ___ complet ___ signé. »',
      reponses: ['est et', 'est, et'],
      explication: '« est » = verbe être ; « et » = conjonction. Mon dossier **est** complet **et** signé.',
    },
    {
      id: 'a2-o06', section: 'orthographe', format: 'saisie',
      enonce: 'Écrivez en toutes lettres le nombre : 80',
      reponses: ['quatre-vingts', 'quatre vingts', 'quatre-vingt'],
      accentsFacultatifs: true,
      explication: '« Quatre-vingts » prend un -s quand il n’est suivi d’aucun autre nombre.',
    },
    {
      id: 'a2-o07', section: 'orthographe', format: 'qcm',
      enonce: 'Quelle est la bonne orthographe ?',
      options: ['nationnalité', 'nationalité', 'nationalitée', 'natioalité'],
      bonneReponse: 1,
      explication: '« Nationalité » : un seul n au milieu, pas de e final.',
    },

    // ── Expression écrite (5) ──────────────────────────────────────────
    {
      id: 'a2-e01', section: 'expression', format: 'saisie',
      enonce: 'Vous arrivez au guichet. Écrivez une phrase complète pour demander poliment un rendez-vous. (Commencez par « Bonjour, »)',
      reponses: [
        'bonjour, je voudrais un rendez-vous',
        'bonjour, je voudrais prendre un rendez-vous',
        "bonjour, j'aimerais un rendez-vous",
        "bonjour, j'aimerais prendre un rendez-vous",
        'bonjour, je souhaite un rendez-vous',
        'bonjour, je souhaiterais un rendez-vous',
        'bonjour, je voudrais prendre rendez-vous',
        'bonjour, pourrais-je avoir un rendez-vous',
      ],
      accentsFacultatifs: true,
      explication: 'Au niveau A2, la formule de politesse attendue est le conditionnel : « je voudrais », « j’aimerais », « je souhaiterais ».',
    },
    {
      id: 'a2-e02', section: 'expression', format: 'saisie',
      enonce: 'Transformez à la forme négative : « J’ai reçu le courrier. »',
      reponses: ["je n'ai pas reçu le courrier", "je n'ai pas reçu le courrier."],
      explication: 'Au passé composé, la négation encadre l’auxiliaire : « je n’ai pas reçu ».',
    },
    {
      id: 'a2-e03', section: 'expression', format: 'saisie',
      enonce: 'Posez la question correspondant à la réponse : « J’habite à Marseille. » (utilisez « où »)',
      reponses: ['où habitez-vous', 'où habites-tu', 'où est-ce que vous habitez', 'où est-ce que tu habites', 'vous habitez où', 'tu habites où'],
      accentsFacultatifs: true,
      explication: 'La question porte sur le lieu : « Où habitez-vous ? »',
    },
    {
      id: 'a2-e04', section: 'expression', format: 'saisie',
      enonce: 'Complétez la formule de fin de courrier administratif : « Je vous prie d’agréer, Madame, Monsieur, mes ___ distinguées. »',
      reponses: ['salutations'],
      explication: 'La formule consacrée est « mes salutations distinguées ».',
    },
    {
      id: 'a2-e05', section: 'expression', format: 'saisie',
      enonce: 'Écrivez une phrase pour dire que vous vivez en France depuis cinq ans. (Utilisez « depuis »)',
      reponses: [
        "j'habite en france depuis cinq ans",
        "je vis en france depuis cinq ans",
        "j'habite en france depuis 5 ans",
        "je vis en france depuis 5 ans",
        "j'habite en france depuis cinq ans.",
      ],
      accentsFacultatifs: true,
      explication: '« Depuis » s’emploie avec le présent pour une action qui dure encore : « je vis en France depuis cinq ans ».',
    },
  ],
};
