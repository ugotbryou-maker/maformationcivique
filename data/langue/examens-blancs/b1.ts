import type { ExamenBlancLangue } from './types';

/**
 * Examen blanc B1 — carte de résident.
 *
 * Attendus du niveau B1 (CECRL) : comprendre l'essentiel d'un document clair
 * sur un sujet familier, raconter un événement, exposer brièvement une
 * opinion et justifier un projet. On passe donc de l'énoncé isolé (A2) au
 * texte suivi, et de la phrase simple à l'articulation logique.
 */
export const examenBlancB1: ExamenBlancLangue = {
  niveau: 'B1',
  titre: 'Examen blanc B1',
  demarche: 'Carte de résident (10 ans)',
  dureeMinutes: 50,
  seuilReussite: 0.7,
  questions: [
    // ── Compréhension écrite (10) ──────────────────────────────────────
    {
      id: 'b1-c01', section: 'comprehension', format: 'qcm',
      support: "Extrait d'un courrier de la préfecture :\n« Votre demande de renouvellement a bien été enregistrée. Un récépissé vous autorisant à travailler vous sera délivré dans l'attente de la décision. Ce document ne préjuge pas de l'issue de votre dossier. »",
      enonce: 'Que signifie « ne préjuge pas de l’issue de votre dossier » ?',
      options: [
        'Votre demande est acceptée',
        'Le récépissé ne garantit pas que la demande sera acceptée',
        'Votre dossier est rejeté',
        "Vous n'avez pas le droit de travailler",
      ],
      bonneReponse: 1,
      explication: '« Ne préjuge pas de » signifie « n’annonce rien sur ». Le récépissé donne un droit provisoire, sans indiquer la décision finale.',
    },
    {
      id: 'b1-c02', section: 'comprehension', format: 'qcm',
      support: "Article de presse locale :\n« Faute de moyens, la permanence juridique gratuite du quartier réduit ses horaires. Elle n'accueillera plus le public que le mardi, contre trois jours auparavant. Les responsables espèrent un retour à la normale à la rentrée. »",
      enonce: 'Quelle est la situation actuelle ?',
      options: [
        'La permanence a fermé définitivement',
        'La permanence ouvre un jour par semaine au lieu de trois',
        'La permanence a augmenté ses horaires',
        'La permanence est devenue payante',
      ],
      bonneReponse: 1,
      explication: '« Ne… plus que le mardi, contre trois jours auparavant » : le nombre de jours passe de trois à un.',
    },
    {
      id: 'b1-c03', section: 'comprehension', format: 'saisie',
      support: "Note de service :\n« À compter du 1ᵉʳ octobre, le télétravail est porté à deux jours par semaine, sous réserve de l'accord du responsable d'équipe. »",
      enonce: 'À quelle condition le télétravail de deux jours est-il possible ? (répondez en quelques mots)',
      reponses: [
        "sous réserve de l'accord du responsable",
        "avec l'accord du responsable",
        "si le responsable d'équipe est d'accord",
        "sous réserve de l'accord du responsable d'équipe",
        "avec l'accord du responsable d'équipe",
        "l'accord du responsable",
      ],
      accentsFacultatifs: true,
      explication: '« Sous réserve de » introduit une condition : il faut l’accord du responsable d’équipe.',
    },
    {
      id: 'b1-c04', section: 'comprehension', format: 'qcm',
      support: "Extrait d'un contrat de location :\n« Le locataire s'engage à souscrire une assurance habitation et à en justifier chaque année. À défaut, le bailleur pourra souscrire une assurance pour son compte et lui en refacturer le coût. »",
      enonce: 'Que risque le locataire qui ne fournit pas son attestation ?',
      options: [
        'Son bail est immédiatement résilié',
        'Le propriétaire assure le logement et lui en fait payer le prix',
        'Il doit quitter le logement sous 48 heures',
        "Il ne risque rien, c'est une simple formalité",
      ],
      bonneReponse: 1,
      explication: '« À défaut » = si la condition n’est pas remplie. Le bailleur assure et refacture.',
    },
    {
      id: 'b1-c05', section: 'comprehension', format: 'qcm',
      support: "Courriel d'un employeur :\n« Nous avons bien reçu votre candidature, qui a retenu notre attention. Toutefois, le poste exigeant une expérience en gestion d'équipe, nous ne pouvons y donner une suite favorable. »",
      enonce: 'Quel est le sens de ce message ?',
      options: [
        'La candidature est acceptée',
        'La candidature est refusée, malgré son intérêt',
        "Il faut envoyer d'autres documents",
        'Un entretien est proposé',
      ],
      bonneReponse: 1,
      explication: '« Toutefois » marque l’opposition et « ne pouvons y donner une suite favorable » est une formule de refus poli.',
    },
    {
      id: 'b1-c06', section: 'comprehension', format: 'qcm',
      support: "Information de la CPAM :\n« Le tiers payant vous dispense d'avancer la part prise en charge par l'Assurance maladie. La part complémentaire reste due, sauf si votre mutuelle a conclu un accord avec le professionnel. »",
      enonce: 'Avec le tiers payant, que payez-vous au médecin ?',
      options: [
        'La totalité de la consultation',
        'Rien dans tous les cas',
        'Éventuellement la part complémentaire',
        'Uniquement la part de l’Assurance maladie',
      ],
      bonneReponse: 2,
      explication: 'La part de l’Assurance maladie n’est pas avancée ; la part complémentaire reste due, sauf accord de la mutuelle.',
    },
    {
      id: 'b1-c07', section: 'comprehension', format: 'saisie',
      support: "Règlement intérieur :\n« Tout retard supérieur à quinze minutes devra être signalé au secrétariat, par téléphone ou par courriel, avant le début du cours. »",
      enonce: 'À partir de combien de minutes de retard faut-il prévenir ?',
      reponses: ['quinze minutes', '15 minutes', 'quinze', '15', 'plus de quinze minutes', 'plus de 15 minutes'],
      accentsFacultatifs: true,
      explication: 'Le texte fixe le seuil à quinze minutes.',
    },
    {
      id: 'b1-c08', section: 'comprehension', format: 'qcm',
      support: "Avis de la mairie :\n« En raison de travaux, le stationnement sera interdit rue Victor-Hugo du 3 au 17 avril inclus. Les véhicules en infraction seront enlevés aux frais de leur propriétaire. »",
      enonce: 'Le 17 avril, peut-on se garer rue Victor-Hugo ?',
      options: ['Oui, les travaux sont terminés', 'Non, le 17 est compris dans l’interdiction', 'Oui, mais seulement le matin', 'Le texte ne le précise pas'],
      bonneReponse: 1,
      explication: '« Du 3 au 17 avril inclus » : le dernier jour fait partie de la période.',
    },
    {
      id: 'b1-c09', section: 'comprehension', format: 'qcm',
      support: "Extrait d'une fiche de paie commentée :\n« Le salaire brut correspond à la rémunération avant déduction des cotisations sociales. Le net à payer est le montant effectivement versé sur votre compte. »",
      enonce: 'Quel montant arrive sur votre compte bancaire ?',
      options: ['Le salaire brut', 'Le net à payer', 'Le total des cotisations', 'Le salaire brut moins les impôts uniquement'],
      bonneReponse: 1,
      explication: 'Le « net à payer » est, par définition, la somme effectivement versée.',
    },
    {
      id: 'b1-c10', section: 'comprehension', format: 'qcm',
      support: "Courrier administratif :\n« Si vous contestez cette décision, vous disposez d'un délai de deux mois pour former un recours gracieux auprès de nos services ou un recours contentieux devant le tribunal administratif. »",
      enonce: 'Quelles possibilités avez-vous ?',
      options: [
        'Uniquement saisir le tribunal',
        'Deux voies : un recours auprès de l’administration, ou devant le tribunal',
        'Aucune, la décision est définitive',
        'Attendre deux mois sans rien faire',
      ],
      bonneReponse: 1,
      explication: 'Le texte propose une alternative : recours gracieux (administration) ou recours contentieux (tribunal).',
    },

    // ── Grammaire (10) ─────────────────────────────────────────────────
    {
      id: 'b1-g01', section: 'grammaire', format: 'qcm',
      enonce: 'Il faut que vous ___ tous les justificatifs avant vendredi.',
      options: ['apportez', 'apportiez', 'apporterez', 'apportent'],
      bonneReponse: 1,
      explication: '« Il faut que » appelle le subjonctif : « que vous apportiez ».',
    },
    {
      id: 'b1-g02', section: 'grammaire', format: 'saisie',
      enonce: 'Remplacez le complément par un pronom : « J’ai envoyé le dossier au service. » → « Je ___ ai envoyé. »',
      reponses: ["l'", "l'ai envoyé", 'le lui'],
      accentsFacultatifs: true,
      explication: '« Le dossier » est un COD masculin singulier : il devient « l’ » devant une voyelle.',
    },
    {
      id: 'b1-g03', section: 'grammaire', format: 'qcm',
      enonce: 'C’est la raison ___ j’ai déposé un recours.',
      options: ['que', 'dont', 'pour laquelle', 'où'],
      bonneReponse: 2,
      explication: 'Après « la raison », on emploie « pour laquelle ».',
    },
    {
      id: 'b1-g04', section: 'grammaire', format: 'qcm',
      enonce: '___ les délais soient courts, le dossier a été accepté.',
      options: ['Parce que', 'Bien que', 'Puisque', 'Car'],
      bonneReponse: 1,
      explication: '« Bien que » exprime la concession et commande le subjonctif (« soient »).',
    },
    {
      id: 'b1-g05', section: 'grammaire', format: 'saisie',
      enonce: 'Accordez le participe : « Les attestations que j’ai (recevoir) ___ sont incomplètes. »',
      reponses: ['reçues'],
      explication: 'Le COD « les attestations » est placé avant l’auxiliaire avoir : le participe s’accorde → « reçues ».',
    },
    {
      id: 'b1-g06', section: 'grammaire', format: 'qcm',
      enonce: 'Je travaille ici ___ trois ans.',
      options: ['pendant', 'depuis', 'il y a', 'dans'],
      bonneReponse: 1,
      explication: '« Depuis » marque une action commencée dans le passé et toujours en cours.',
    },
    {
      id: 'b1-g07', section: 'grammaire', format: 'saisie',
      enonce: 'Mettez à la voix passive : « La préfecture a validé mon dossier. » → « Mon dossier ___ par la préfecture. »',
      reponses: ['a été validé'],
      explication: 'Passif au passé composé : auxiliaire être au passé composé + participe accordé → « a été validé ».',
    },
    {
      id: 'b1-g08', section: 'grammaire', format: 'qcm',
      enonce: 'Il m’a demandé ___ j’avais un titre de séjour.',
      options: ['est-ce que', 'si', 'que', 'quoi'],
      bonneReponse: 1,
      explication: 'Dans une interrogation indirecte, « est-ce que » devient « si ».',
    },
    {
      id: 'b1-g09', section: 'grammaire', format: 'qcm',
      enonce: 'Ce logement est ___ cher que le précédent.',
      options: ['plus', 'meilleur', 'mieux', 'autant'],
      bonneReponse: 0,
      explication: 'Comparatif d’un adjectif : « plus cher que ». « Meilleur » est le comparatif de « bon », « mieux » celui de « bien ».',
    },
    {
      id: 'b1-g10', section: 'grammaire', format: 'saisie',
      enonce: 'Complétez par le pronom relatif : « Le service ___ je me suis adressé est fermé. »',
      reponses: ['auquel'],
      explication: 'On dit « s’adresser À un service » : le relatif est « auquel ».',
    },

    // ── Conjugaison (8) ────────────────────────────────────────────────
    {
      id: 'b1-j01', section: 'conjugaison', format: 'saisie',
      enonce: 'Conjuguez au subjonctif présent : « Il faut que je (faire) ___ traduire mon acte de naissance. »',
      reponses: ['fasse'],
      explication: 'Subjonctif présent de « faire », 1ʳᵉ personne : « que je fasse ».',
    },
    {
      id: 'b1-j02', section: 'conjugaison', format: 'qcm',
      enonce: 'Si j’avais plus de temps, je ___ une formation.',
      options: ['suivrai', 'suivrais', 'suivais', 'ai suivi'],
      bonneReponse: 1,
      explication: 'Hypothèse avec « si + imparfait » : la principale est au conditionnel présent.',
    },
    {
      id: 'b1-j03', section: 'conjugaison', format: 'saisie',
      enonce: 'Conjuguez au futur simple : « Nous (recevoir) ___ la réponse sous deux mois. »',
      reponses: ['recevrons'],
      explication: 'Futur simple de « recevoir », 1ʳᵉ personne du pluriel : « nous recevrons ».',
    },
    {
      id: 'b1-j04', section: 'conjugaison', format: 'qcm',
      enonce: 'Quand je suis arrivé, le guichet ___ déjà fermé.',
      options: ['est', 'était', 'a été', 'sera'],
      bonneReponse: 1,
      explication: "L'imparfait décrit l'état dans lequel se trouvait le guichet au moment de l'arrivée.",
    },
    {
      id: 'b1-j05', section: 'conjugaison', format: 'saisie',
      enonce: 'Conjuguez au conditionnel présent : « Je (vouloir) ___ obtenir un rendez-vous. »',
      reponses: ['voudrais'],
      explication: 'Conditionnel présent de « vouloir » : « je voudrais ».',
    },
    {
      id: 'b1-j06', section: 'conjugaison', format: 'qcm',
      enonce: 'Après ___ le formulaire, envoyez-le par courrier recommandé.',
      options: ['remplir', 'avoir rempli', 'rempli', 'remplissant'],
      bonneReponse: 1,
      explication: '« Après » suivi d’un verbe demande l’infinitif passé : « après avoir rempli ».',
    },
    {
      id: 'b1-j07', section: 'conjugaison', format: 'saisie',
      enonce: 'Conjuguez au plus-que-parfait : « Elle (déposer) ___ son dossier avant la date limite. »',
      reponses: ['avait déposé'],
      explication: 'Plus-que-parfait : imparfait de l’auxiliaire + participe passé → « avait déposé ».',
    },
    {
      id: 'b1-j08', section: 'conjugaison', format: 'saisie',
      enonce: 'Conjuguez au subjonctif présent : « Bien qu’il (être) ___ en règle, il a reçu un refus. »',
      reponses: ['soit'],
      explication: '« Bien que » commande le subjonctif : « qu’il soit ».',
    },

    // ── Orthographe (7) ────────────────────────────────────────────────
    {
      id: 'b1-o01', section: 'orthographe', format: 'saisie',
      enonce: 'Complétez par « ce » ou « se » : « ___ document doit ___ trouver dans votre dossier. »',
      reponses: ['ce se', 'ce, se'],
      explication: '« Ce » est un déterminant démonstratif ; « se » est le pronom réfléchi du verbe pronominal.',
    },
    {
      id: 'b1-o02', section: 'orthographe', format: 'qcm',
      enonce: 'Quelle est la bonne orthographe ?',
      options: ['ressortissant', 'resortissant', 'ressortisant', 'réssortissant'],
      bonneReponse: 0,
      explication: '« Ressortissant » : deux s après « re », puis deux s au milieu, sans accent.',
    },
    {
      id: 'b1-o03', section: 'orthographe', format: 'saisie',
      enonce: 'Complétez par « ou » ou « où » : « Dites-moi ___ vous habitez ___ je ne pourrai pas vous répondre. »',
      reponses: ['où ou', 'où, ou'],
      explication: '« Où » interroge sur le lieu (accent grave) ; « ou » marque l’alternative.',
    },
    {
      id: 'b1-o04', section: 'orthographe', format: 'qcm',
      enonce: 'Quelle phrase est correcte ?',
      options: [
        "Les pièces qu'il a fournit sont valables.",
        "Les pièces qu'il a fournies sont valables.",
        "Les pièces qu'il a fourni sont valables.",
        "Les pièces qu'il a fournit sont valable.",
      ],
      bonneReponse: 1,
      explication: 'Le COD « les pièces » précède l’auxiliaire avoir : accord au féminin pluriel → « fournies ».',
    },
    {
      id: 'b1-o05', section: 'orthographe', format: 'saisie',
      enonce: 'Complétez par « leur » ou « leurs » : « Je ___ ai rendu ___ documents. »',
      reponses: ['leur leurs', 'leur, leurs'],
      explication: '« Leur » pronom est invariable ; « leurs » déterminant s’accorde avec le nom pluriel.',
    },
    {
      id: 'b1-o06', section: 'orthographe', format: 'qcm',
      enonce: 'Quelle est la bonne orthographe ?',
      options: ['naturalisation', 'naturalization', 'naturallisation', 'naturalisasion'],
      bonneReponse: 0,
      explication: 'En français : « naturalisation », avec un s (le z est anglais).',
    },
    {
      id: 'b1-o07', section: 'orthographe', format: 'saisie',
      enonce: 'Complétez par « quelque » ou « quel que » : « ___ soit le motif, la décision doit être motivée. »',
      reponses: ['quel que'],
      explication: 'Devant le verbe « être » au subjonctif, on écrit « quel que » en deux mots, accordé avec le sujet.',
    },

    // ── Expression écrite (5) ──────────────────────────────────────────
    {
      id: 'b1-e01', section: 'expression', format: 'saisie',
      enonce: 'Exprimez une cause en reliant les deux phrases : « Je n’ai pas pu venir. Mon train a été annulé. » (utilisez « parce que »)',
      reponses: [
        "je n'ai pas pu venir parce que mon train a été annulé",
        "je n'ai pas pu venir parce que mon train a été annulé.",
      ],
      explication: '« Parce que » introduit la cause et relie les deux propositions en une seule phrase.',
    },
    {
      id: 'b1-e02', section: 'expression', format: 'saisie',
      enonce: 'Reformulez poliment cette demande : « Envoyez-moi le document. » (utilisez le conditionnel)',
      reponses: [
        'pourriez-vous m’envoyer le document',
        "pourriez-vous m'envoyer le document",
        "je voudrais que vous m'envoyiez le document",
        "serait-il possible de m'envoyer le document",
        "j'aimerais recevoir le document",
        "pouvez-vous m'envoyer le document",
      ],
      accentsFacultatifs: true,
      explication: 'Le conditionnel atténue la demande : « Pourriez-vous m’envoyer… ».',
    },
    {
      id: 'b1-e03', section: 'expression', format: 'saisie',
      enonce: 'Complétez la formule d’ouverture d’un courrier de réclamation : « Je me permets de vous ___ au sujet de ma demande du 12 mars. »',
      reponses: ['écrire', 'contacter', 'solliciter', 'relancer'],
      explication: 'Après « je me permets de », le verbe est à l’infinitif : écrire, contacter, solliciter.',
    },
    {
      id: 'b1-e04', section: 'expression', format: 'saisie',
      enonce: 'Exprimez une opposition : « Mon dossier est complet. Il a été refusé. » (utilisez « pourtant »)',
      reponses: [
        'mon dossier est complet, pourtant il a été refusé',
        'mon dossier est complet pourtant il a été refusé',
        'mon dossier est complet, pourtant il a été refusé.',
      ],
      explication: '« Pourtant » marque une opposition entre deux faits attendus comme cohérents.',
    },
    {
      id: 'b1-e05', section: 'expression', format: 'saisie',
      enonce: 'Exprimez un but : « Je suis cette formation ___ améliorer mon français. » (complétez par la locution attendue)',
      reponses: ['pour', 'afin d’', "afin d'", 'pour mieux'],
      accentsFacultatifs: true,
      explication: 'Le but devant un infinitif s’exprime par « pour » ou « afin de ».',
    },
  ],
};
