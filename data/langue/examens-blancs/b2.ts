import type { ExamenBlancLangue } from './types';

/**
 * Examen blanc B2 — naturalisation.
 *
 * Attendus du niveau B2 (CECRL) : comprendre un texte complexe, suivre une
 * argumentation, s'exprimer de façon claire et nuancée, et défendre un point
 * de vue. Depuis le 1ᵉʳ janvier 2026, ce niveau est exigé à l'oral ET à
 * l'écrit pour la naturalisation — d'où l'accent mis ici sur la production
 * écrite et le registre soutenu.
 */
export const examenBlancB2: ExamenBlancLangue = {
  niveau: 'B2',
  titre: 'Examen blanc B2',
  demarche: 'Naturalisation française',
  dureeMinutes: 60,
  seuilReussite: 0.75,
  questions: [
    // ── Compréhension écrite (10) ──────────────────────────────────────
    {
      id: 'b2-c01', section: 'comprehension', format: 'qcm',
      support: "Éditorial :\n« Si nul ne conteste la nécessité de simplifier les démarches, encore faudrait-il que la dématérialisation ne se traduise pas, pour les plus fragiles, par une mise à l'écart pure et simple. »",
      enonce: 'Quelle est la position de l’auteur ?',
      options: [
        'Il est opposé à la simplification des démarches',
        'Il approuve la simplification, mais redoute l’exclusion des plus fragiles',
        'Il estime que la dématérialisation est sans effet',
        'Il demande le retour aux guichets papier',
      ],
      bonneReponse: 1,
      explication: '« Nul ne conteste… encore faudrait-il que » : l’auteur concède le principe puis formule une réserve sur ses effets.',
    },
    {
      id: 'b2-c02', section: 'comprehension', format: 'qcm',
      support: "Décision administrative :\n« Considérant que l'intéressé justifie d'une résidence continue depuis sept années et ne fait l'objet d'aucune condamnation, il y a lieu de faire droit à sa demande. »",
      enonce: 'Que décide l’administration ?',
      options: ['Elle rejette la demande', 'Elle accepte la demande', 'Elle sursoit à statuer', 'Elle demande des pièces complémentaires'],
      bonneReponse: 1,
      explication: '« Faire droit à une demande » signifie l’accueillir favorablement.',
    },
    {
      id: 'b2-c03', section: 'comprehension', format: 'saisie',
      support: "Rapport associatif :\n« Loin de résorber les inégalités, le dispositif les a, par endroits, accentuées : les publics les mieux informés s'en sont saisis les premiers. »",
      enonce: 'Quel effet le dispositif a-t-il eu sur les inégalités ? (un seul mot)',
      reponses: ['accentuées', 'accentué', 'augmentées', 'augmenté', 'aggravées', 'aggravé', 'renforcées', 'renforcé'],
      accentsFacultatifs: true,
      explication: '« Loin de résorber… les a accentuées » : le dispositif a renforcé les inégalités au lieu de les réduire.',
    },
    {
      id: 'b2-c04', section: 'comprehension', format: 'qcm',
      support: "Tribune :\n« À supposer même que la mesure produise les effets escomptés, son coût la rendrait difficilement soutenable à moyen terme. »",
      enonce: 'Quel est le raisonnement ?',
      options: [
        "L'auteur affirme que la mesure sera efficace",
        "Même si la mesure marchait, son coût poserait problème",
        "La mesure est déjà abandonnée",
        "Le coût de la mesure est négligeable",
      ],
      bonneReponse: 1,
      explication: '« À supposer même que » introduit une concession hypothétique : l’objection porte sur le coût, pas sur l’efficacité.',
    },
    {
      id: 'b2-c05', section: 'comprehension', format: 'qcm',
      support: "Extrait d'un jugement :\n« Le requérant ne saurait utilement se prévaloir de sa seule ancienneté de séjour dès lors qu'il ne justifie d'aucune insertion professionnelle. »",
      enonce: 'Pourquoi l’argument du requérant est-il écarté ?',
      options: [
        "Parce que son séjour est trop court",
        "Parce que l'ancienneté seule ne suffit pas, faute d'insertion professionnelle",
        "Parce qu'il a commis une infraction",
        "Parce qu'il a déposé son recours hors délai",
      ],
      bonneReponse: 1,
      explication: '« Ne saurait utilement se prévaloir de sa seule ancienneté » : l’ancienneté est insuffisante sans insertion professionnelle.',
    },
    {
      id: 'b2-c06', section: 'comprehension', format: 'qcm',
      support: "Analyse économique :\n« La hausse de l'emploi, pour réelle qu'elle soit, demeure concentrée sur les contrats courts. »",
      enonce: 'Que dit l’auteur de la hausse de l’emploi ?',
      options: [
        "Elle est fausse",
        "Elle est réelle, mais limitée aux contrats courts",
        "Elle concerne surtout les CDI",
        "Elle est sans rapport avec les contrats",
      ],
      bonneReponse: 1,
      explication: '« Pour réelle qu’elle soit » est une concession : l’auteur admet le fait puis en limite la portée.',
    },
    {
      id: 'b2-c07', section: 'comprehension', format: 'saisie',
      support: "Note interne :\n« Il conviendra de proscrire tout échange de données nominatives par messagerie non sécurisée. »",
      enonce: 'Que signifie « proscrire » ici ? (un seul mot)',
      reponses: ['interdire', 'bannir', 'prohiber'],
      accentsFacultatifs: true,
      explication: '« Proscrire » signifie interdire formellement.',
    },
    {
      id: 'b2-c08', section: 'comprehension', format: 'qcm',
      support: "Débat public :\n« Les uns y voient un gage d'efficacité ; les autres, une atteinte aux libertés. Le législateur, lui, n'a pas tranché. »",
      enonce: 'Quelle est la situation décrite ?',
      options: [
        'Un consensus général',
        'Une controverse non arbitrée par la loi',
        'Une décision déjà prise par le législateur',
        'Un sujet qui n’intéresse personne',
      ],
      bonneReponse: 1,
      explication: 'Deux positions opposées, et « n’a pas tranché » indique l’absence d’arbitrage législatif.',
    },
    {
      id: 'b2-c09', section: 'comprehension', format: 'qcm',
      support: "Article :\n« Le dispositif, censé alléger la charge des agents, a surtout déplacé le travail vers les usagers. »",
      enonce: 'Que sous-entend l’emploi de « censé » ?',
      options: [
        "Que l'objectif annoncé n'a pas été atteint",
        "Que le dispositif est obligatoire",
        "Que les agents sont satisfaits",
        "Que le dispositif a été supprimé",
      ],
      bonneReponse: 0,
      explication: '« Censé » renvoie à une intention affichée, implicitement démentie par les faits qui suivent.',
    },
    {
      id: 'b2-c10', section: 'comprehension', format: 'qcm',
      support: "Rapport :\n« Il serait hasardeux d'inférer de ces quelques cas une tendance générale. »",
      enonce: 'Que recommande l’auteur ?',
      options: [
        'De généraliser rapidement ces observations',
        'De ne pas tirer de conclusion générale à partir de cas isolés',
        'De cesser toute étude sur le sujet',
        'De publier immédiatement les résultats',
      ],
      bonneReponse: 1,
      explication: '« Hasardeux d’inférer… une tendance générale » : il met en garde contre une généralisation abusive.',
    },

    // ── Grammaire (10) ─────────────────────────────────────────────────
    {
      id: 'b2-g01', section: 'grammaire', format: 'qcm',
      enonce: 'Je doute qu’il ___ obtenir une réponse avant juin.',
      options: ['peut', 'puisse', 'pourra', 'pouvait'],
      bonneReponse: 1,
      explication: '« Douter que » exprime l’incertitude et commande le subjonctif : « qu’il puisse ».',
    },
    {
      id: 'b2-g02', section: 'grammaire', format: 'saisie',
      enonce: 'Mettez au discours indirect : « Il m’a dit : “Je viendrai demain.” » → « Il m’a dit qu’il ___ le lendemain. »',
      reponses: ['viendrait'],
      explication: 'Concordance des temps : le futur du discours direct devient conditionnel présent au discours indirect.',
    },
    {
      id: 'b2-g03', section: 'grammaire', format: 'qcm',
      enonce: '___ que vous ayez déposé votre dossier, vous recevrez un accusé de réception.',
      options: ['Dès', 'Dès lors', 'Pour peu', 'Avant'],
      bonneReponse: 2,
      explication: '« Pour peu que » + subjonctif exprime une condition minimale suffisante.',
    },
    {
      id: 'b2-g04', section: 'grammaire', format: 'saisie',
      enonce: 'Transformez en participe présent : « Comme il ne disposait pas des pièces, il a reporté le dépôt. » → « ___ pas des pièces, il a reporté le dépôt. »',
      reponses: ['ne disposant'],
      explication: 'Le participe présent remplace la subordonnée de cause : « ne disposant pas des pièces ».',
    },
    {
      id: 'b2-g05', section: 'grammaire', format: 'qcm',
      enonce: 'C’est l’argument ___ il s’appuie pour contester la décision.',
      options: ['dont', 'sur lequel', 'auquel', 'que'],
      bonneReponse: 1,
      explication: 'On dit « s’appuyer SUR » : le relatif est « sur lequel ».',
    },
    {
      id: 'b2-g06', section: 'grammaire', format: 'qcm',
      enonce: 'Quelle phrase est au registre soutenu ?',
      options: [
        "J'ai pas eu de réponse.",
        "J'ai pas reçu de réponse.",
        "Je n'ai reçu aucune réponse à ce jour.",
        "Y a pas eu de réponse.",
      ],
      bonneReponse: 2,
      explication: 'Négation complète, absence d’élision familière, et locution « à ce jour » : registre soutenu attendu à l’écrit administratif.',
    },
    {
      id: 'b2-g07', section: 'grammaire', format: 'saisie',
      enonce: 'Nominalisez le verbe : « L’administration a rejeté la demande. » → « Le ___ de la demande. »',
      reponses: ['rejet'],
      explication: 'Le nom correspondant au verbe « rejeter » est « le rejet ».',
    },
    {
      id: 'b2-g08', section: 'grammaire', format: 'qcm',
      enonce: 'Il a agi ___ les consignes reçues.',
      options: ['malgré de', 'en dépit de', 'bien que', 'quoique'],
      bonneReponse: 1,
      explication: '« En dépit de » introduit un nom. « Bien que » et « quoique » introduisent une proposition au subjonctif.',
    },
    {
      id: 'b2-g09', section: 'grammaire', format: 'saisie',
      enonce: 'Accordez : « Les décisions qu’elle s’est (voir) ___ opposer étaient infondées. »',
      reponses: ['vu'],
      explication: '« Se voir » suivi d’un infinitif reste invariable quand le sujet subit l’action : « elle s’est vu opposer ».',
    },
    {
      id: 'b2-g10', section: 'grammaire', format: 'qcm',
      enonce: '___ il insiste, plus la procédure s’allonge.',
      options: ['Autant', 'Plus', 'Tant', 'Si'],
      bonneReponse: 1,
      explication: 'Corrélation de proportion : « Plus… plus… ».',
    },

    // ── Conjugaison (8) ────────────────────────────────────────────────
    {
      id: 'b2-j01', section: 'conjugaison', format: 'saisie',
      enonce: 'Conjuguez au subjonctif passé : « Bien qu’il (déposer) ___ son dossier à temps, il n’a pas eu de réponse. »',
      reponses: ['ait déposé'],
      explication: 'Subjonctif passé : auxiliaire au subjonctif présent + participe → « qu’il ait déposé ».',
    },
    {
      id: 'b2-j02', section: 'conjugaison', format: 'qcm',
      enonce: 'Si elle avait fourni l’attestation, le dossier ___ accepté.',
      options: ['serait', 'aurait été', 'sera', 'était'],
      bonneReponse: 1,
      explication: 'Hypothèse irréelle du passé : « si + plus-que-parfait » → conditionnel passé dans la principale.',
    },
    {
      id: 'b2-j03', section: 'conjugaison', format: 'saisie',
      enonce: 'Conjuguez au conditionnel passé : « Nous (pouvoir) ___ éviter ce retard. »',
      reponses: ['aurions pu'],
      explication: 'Conditionnel passé : conditionnel présent de l’auxiliaire + participe → « nous aurions pu ».',
    },
    {
      id: 'b2-j04', section: 'conjugaison', format: 'saisie',
      enonce: 'Conjuguez au subjonctif présent : « Il importe que chacun (savoir) ___ à quoi s’en tenir. »',
      reponses: ['sache'],
      explication: 'Subjonctif présent de « savoir », 3ᵉ personne du singulier : « qu’il sache ».',
    },
    {
      id: 'b2-j05', section: 'conjugaison', format: 'qcm',
      enonce: 'Le décret ___ en vigueur depuis le 1ᵉʳ janvier.',
      options: ['entre', 'est entré', 'entrera', 'entrait'],
      bonneReponse: 1,
      explication: '« Depuis » avec un fait ponctuel accompli appelle le passé composé : « est entré en vigueur ».',
    },
    {
      id: 'b2-j06', section: 'conjugaison', format: 'saisie',
      enonce: 'Conjuguez à l’infinitif passé : « Après ___ (obtenir) sa naturalisation, il a demandé un passeport. »',
      reponses: ['avoir obtenu'],
      explication: 'Infinitif passé après « après » : « avoir obtenu ».',
    },
    {
      id: 'b2-j07', section: 'conjugaison', format: 'qcm',
      enonce: 'Il faudrait que vous ___ les originaux lors de l’entretien.',
      options: ['apportez', 'apporterez', 'apportiez', 'apportiiez'],
      bonneReponse: 2,
      explication: '« Il faudrait que » commande le subjonctif : « que vous apportiez ».',
    },
    {
      id: 'b2-j08', section: 'conjugaison', format: 'saisie',
      enonce: 'Conjuguez au passé simple (3ᵉ personne du singulier) : « La commission (statuer) ___ en mars. »',
      reponses: ['statua'],
      explication: 'Passé simple des verbes en -er, 3ᵉ personne du singulier : radical + -a → « statua ». Temps du récit écrit.',
    },

    // ── Orthographe (7) ────────────────────────────────────────────────
    {
      id: 'b2-o01', section: 'orthographe', format: 'saisie',
      enonce: 'Complétez par « quoique » ou « quoi que » : « ___ vous décidiez, informez-en le service. »',
      reponses: ['quoi que'],
      explication: '« Quoi que » en deux mots signifie « quelle que soit la chose que ». « Quoique » signifie « bien que ».',
    },
    {
      id: 'b2-o02', section: 'orthographe', format: 'qcm',
      enonce: 'Quelle phrase est correcte ?',
      options: [
        "Les démarches qu'il a dû entreprendre ont été longues.",
        "Les démarches qu'il a dues entreprendre ont été longues.",
        "Les démarches qu'il a du entreprendre ont été longues.",
        "Les démarches qu'il a dûes entreprendre ont été longues.",
      ],
      bonneReponse: 0,
      explication: 'Devant un infinitif, le participe « dû » reste invariable. Et « dû » prend un accent circonflexe au masculin singulier.',
    },
    {
      id: 'b2-o03', section: 'orthographe', format: 'saisie',
      enonce: 'Complétez par « près de » ou « prêt à » : « Il est ___ accepter un compromis. »',
      reponses: ['prêt à', 'pret a'],
      accentsFacultatifs: true,
      explication: '« Prêt à » signifie disposé à. « Près de » indique la proximité.',
    },
    {
      id: 'b2-o04', section: 'orthographe', format: 'qcm',
      enonce: 'Quelle est la bonne orthographe ?',
      options: ['dilligence', 'diligeance', 'diligence', 'diligense'],
      bonneReponse: 2,
      explication: '« Diligence » : un seul l, terminaison en -ence.',
    },
    {
      id: 'b2-o05', section: 'orthographe', format: 'saisie',
      enonce: 'Complétez par « davantage » ou « d’avantage(s) » : « Ce statut présente ___ que le précédent. »',
      reponses: ["davantage d'avantages", 'davantage'],
      accentsFacultatifs: true,
      explication: '« Davantage » signifie « plus ». « Avantage » est le nom. Les deux se rencontrent ici.',
    },
    {
      id: 'b2-o06', section: 'orthographe', format: 'qcm',
      enonce: 'Quelle phrase est correcte ?',
      options: [
        "Je vous saurai gré de bien vouloir répondre.",
        "Je vous serai gré de bien vouloir répondre.",
        "Je vous saurais grè de bien vouloir répondre.",
        "Je vous serais gré de bien vouloir répondre.",
      ],
      bonneReponse: 0,
      explication: 'La formule correcte vient du verbe « savoir » : « je vous saurai gré », et jamais « je vous serai gré ».',
    },
    {
      id: 'b2-o07', section: 'orthographe', format: 'saisie',
      enonce: 'Complétez par « parmi » ou « parmis » : « ___ les pièces fournies, une seule manquait. »',
      reponses: ['parmi'],
      explication: '« Parmi » ne prend jamais de s final.',
    },

    // ── Expression écrite (5) ──────────────────────────────────────────
    {
      id: 'b2-e01', section: 'expression', format: 'saisie',
      enonce: 'Reformulez au registre administratif : « Je vous écris pour me plaindre du retard. » (commencez par « Je me permets de »)',
      reponses: [
        'je me permets de vous faire part de mon mécontentement',
        'je me permets de vous signaler ce retard',
        'je me permets de vous alerter sur ce retard',
        'je me permets de vous faire part de ma préoccupation',
        'je me permets de vous faire part de mon insatisfaction',
        'je me permets de contester ce retard',
      ],
      accentsFacultatifs: true,
      explication: 'Le registre soutenu évite « me plaindre » et préfère « faire part de », « signaler », « contester ».',
    },
    {
      id: 'b2-e02', section: 'expression', format: 'saisie',
      enonce: 'Exprimez une concession suivie d’une objection : « ___ la procédure soit longue, elle reste nécessaire. »',
      reponses: ['bien que', 'quoique', 'encore que'],
      accentsFacultatifs: true,
      explication: 'La concession devant un subjonctif s’introduit par « bien que », « quoique » ou « encore que ».',
    },
    {
      id: 'b2-e03', section: 'expression', format: 'saisie',
      enonce: 'Complétez la formule de politesse finale d’une lettre à un préfet : « Je vous prie d’agréer, Monsieur le Préfet, l’expression de ma haute ___. »',
      reponses: ['considération'],
      explication: 'La formule consacrée envers une autorité est « l’expression de ma haute considération ».',
    },
    {
      id: 'b2-e04', section: 'expression', format: 'saisie',
      enonce: 'Introduisez une conséquence : « Le dossier était incomplet ; ___ , il a été rejeté. » (un connecteur logique)',
      reponses: ['par conséquent', 'en conséquence', 'de ce fait', 'aussi', 'dès lors', 'partant'],
      accentsFacultatifs: true,
      explication: 'La conséquence s’introduit par « par conséquent », « en conséquence », « de ce fait » ou « dès lors ».',
    },
    {
      id: 'b2-e05', section: 'expression', format: 'saisie',
      enonce: 'Nuancez cette affirmation trop catégorique : « La dématérialisation exclut les usagers. » (ajoutez un adverbe de nuance avant le verbe)',
      reponses: [
        'la dématérialisation exclut parfois les usagers',
        'la dématérialisation peut exclure les usagers',
        'la dématérialisation exclut souvent les usagers',
        'la dématérialisation risque d’exclure les usagers',
        "la dématérialisation risque d'exclure les usagers",
        'la dématérialisation tend à exclure les usagers',
        'la dématérialisation exclut parfois certains usagers',
      ],
      accentsFacultatifs: true,
      explication: 'Le niveau B2 suppose de nuancer : « parfois », « souvent », « tend à », « risque de » évitent la généralisation absolue.',
    },
  ],
};
