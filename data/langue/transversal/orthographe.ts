import type { LangModule } from '../types';

export const transversalOrthographe: LangModule = {
  id: 'trans-mod-02',
  slug: 'transversal-orthographe',
  level: 'transversal',
  title: 'Orthographe du français',
  subtitle: 'Homophones, accords et pièges orthographiques',
  description: 'Évitez les pièges orthographiques les plus fréquents, essentiels pour tout écrit administratif ou professionnel.',
  type: 'orthographe',
  emoji: '✏️',
  free: false,
  lessons: [
    {
      id: 'trans-ortho-01',
      slug: 'trans-homophones-grammaticaux',
      moduleSlug: 'transversal-orthographe',
      level: 'transversal',
      title: 'Les homophones grammaticaux',
      description: 'Distinguer a/à, et/est, son/sont, ce/se, on/ont et autres homophones essentiels.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Les homophones, un défi orthographique constant

Les homophones grammaticaux (mots qui se prononcent de la même façon mais s'écrivent différemment) sont une source d'erreurs fréquente, même chez les locuteurs natifs.

**A / À**
- "A" = verbe avoir (il A un titre de séjour) — peut se remplacer par "avait"
- "À" = préposition (il va À la mairie) — ne peut pas se remplacer par "avait"

**Et / Est**
- "ET" = conjonction (lui ET moi) — relie deux éléments
- "EST" = verbe être (il EST arrivé) — peut se remplacer par "était"

**Son / Sont**
- "SON" = déterminant possessif (SON dossier) — devant un nom
- "SONT" = verbe être, 3ème pers. pl. (ils SONT venus) — peut se remplacer par "étaient"

**Ce / Se**
- "CE" = déterminant démonstratif (CE document) ou pronom (CE qui m'intéresse)
- "SE" = pronom réfléchi (il SE présente) — toujours devant un verbe pronominal

**On / Ont**
- "ON" = pronom indéfini (ON verra) — sujet d'un verbe
- "ONT" = verbe avoir, 3ème pers. pl. (ils ONT fini) — peut se remplacer par "avaient"

**Ou / Où**
- "OU" = conjonction de choix (thé OU café)
- "OÙ" = pronom/adverbe de lieu ou interrogatif (OÙ allez-vous ?)`,

      linguisticPoint: `## Point linguistique : La méthode de substitution pour les homophones

### Le principe général
Pour chaque homophone grammatical, il existe un TEST DE SUBSTITUTION : remplacer le mot par un synonyme ou une autre forme du même mot pour vérifier s'il garde son sens.

### Tableau des tests de substitution
| Homophone | Test de remplacement | Si ça fonctionne |
|---|---|---|
| a / à | remplacer par "avait" | "a" (verbe avoir) |
| et / est | remplacer par "était" | "est" (verbe être) |
| son / sont | remplacer par "étaient" | "sont" (verbe être) |
| on / ont | remplacer par "avaient" | "ont" (verbe avoir) |
| ce / se | mettre au pluriel "ces" | "ce" (déterminant) |

### Exemple d'application
"Il (a/à) rendez-vous (a/à) la mairie."
Test : "Il AVAIT rendez-vous..." → fonctionne pour le 1er, donc "A" (verbe avoir)
"Il a rendez-vous AVAIT la mairie" → ne fonctionne PAS pour le 2ème, donc "À" (préposition)

### Pourquoi ces erreurs persistent même chez les natifs
Ces mots se prononcent de façon IDENTIQUE — seule la RÉFLEXION GRAMMATICALE (pas l'oreille) permet de choisir la bonne orthographe, ce qui explique la persistance de ces erreurs même après des années de pratique.`,

      keyPoints: [
        'Test de substitution : a/à → "avait" ; et/est → "était" ; son/sont → "étaient" ; on/ont → "avaient"',
        '"A" (verbe avoir) vs "À" (préposition, jamais remplaçable par avait)',
        '"Son" (déterminant + nom) vs "Sont" (verbe être)',
        '"Ce" (démonstratif/pronom) vs "Se" (réfléchi, devant verbe pronominal)',
        '"Ou" (choix) vs "Où" (lieu/interrogatif, avec accent grave)',
      ],

      exercises: [
        {
          id: 'trans-ortho-01-ex01',
          type: 'qcm',
          question: 'Complétez : "Il ___ rendez-vous ___ la préfecture." (a/à, a/à)',
          options: ['à / a', 'a / à', 'a / a', 'à / à'],
          correctIndex: 1,
          explanation: '"Il A rendez-vous À la préfecture." Test : "il AVAIT rendez-vous" (fonctionne) → "a" (verbe avoir). "Avait la préfecture" (ne fonctionne pas) → "à" (préposition).',
        },
        {
          id: 'trans-ortho-01-ex02',
          type: 'qcm',
          question: 'Complétez : "Mon frère ___ ma sœur ___ arrivés hier." (et/est, et/est)',
          options: ['est / et', 'et / est', 'et / et', 'est / est'],
          correctIndex: 1,
          explanation: '"Mon frère ET ma sœur SONT arrivés hier." Attention : ici c\'est "sont" car le sujet est pluriel (frère ET sœur). "Et" relie les deux sujets. Test : "frère ÉTAIT ma sœur" ne fonctionne pas pour "et" → confirme "et" = conjonction.',
        },
        {
          id: 'trans-ortho-01-ex03',
          type: 'qcm',
          question: 'Complétez : "___ dossier est complet, mais ___ documents manquent encore." (son/sont, ce/se)',
          options: ['Sont / Se', 'Son / Ce', 'Son / Se', 'Sont / Ce'],
          correctIndex: 1,
          explanation: '"SON dossier est complet, mais CES documents manquent." "Son" + nom singulier (dossier) = déterminant possessif. "Ce/ces" + nom = déterminant démonstratif (ici au pluriel "ces", mais le test "ce" → "ces" confirme la catégorie).',
        },
        {
          id: 'trans-ortho-01-ex04',
          type: 'qcm',
          question: 'Complétez : "___ verra si ils ___ besoin d\'aide." (on/ont, on/ont)',
          options: ['Ont / on', 'On / ont', 'On / on', 'Ont / ont'],
          correctIndex: 1,
          explanation: '"ON verra si ils ONT besoin d\'aide." Test : "ON" (pronom sujet, pas de substitution par avait) / "ils AVAIENT besoin" (fonctionne) → "ont" (verbe avoir).',
        },
        {
          id: 'trans-ortho-01-ex05',
          type: 'qcm',
          question: 'Complétez : "Il ___ présente ___ la mairie." (se/ce, à/a)',
          options: ['ce / a', 'se / à', 'se / a', 'ce / à'],
          correctIndex: 1,
          explanation: '"Il SE présente À la mairie." "Se présente" = verbe pronominal (se présenter) → "se". "À la mairie" : test "il avait la mairie" ne fonctionne pas → "à" (préposition).',
        },
        {
          id: 'trans-ortho-01-ex06',
          type: 'qcm',
          question: 'Complétez : "Tu veux du thé ___ du café ? Je ne sais pas ___ aller." (ou/où, ou/où)',
          options: ['où / ou', 'ou / où', 'ou / ou', 'où / où'],
          correctIndex: 1,
          explanation: '"Tu veux du thé OU du café ? Je ne sais pas OÙ aller." "Ou" (sans accent) = choix entre deux options. "Où" (avec accent grave) = lieu. "Je ne sais pas où aller" = lieu de destination inconnu.',
        },
        {
          id: 'trans-ortho-01-ex07',
          type: 'qcm',
          question: 'Quel est le test de substitution pour distinguer "et" et "est" ?',
          options: [
            'Remplacer par "avait"',
            'Remplacer par "était"',
            'Mettre au pluriel',
            'Remplacer par "avaient"',
          ],
          correctIndex: 1,
          explanation: 'Le test pour "et/est" consiste à remplacer par "ÉTAIT" : si la substitution fonctionne et garde un sens cohérent, c\'est "EST" (verbe être). Sinon, c\'est "ET" (conjonction qui relie deux éléments).',
        },
        {
          id: 'trans-ortho-01-ex08',
          type: 'qcm',
          question: 'Complétez : "___ que je préfère, c\'est ___ tranquillité." (ce/se, sa/ça)',
          options: ['Se / sa', 'Ce / la', 'Se / la', 'Ce / sa'],
          correctIndex: 1,
          explanation: '"CE que je préfère, c\'est LA tranquillité." "Ce que" = pronom démonstratif neutre (introduit une relative). "La tranquillité" = article défini + nom (pas "sa" qui impliquerait une possession non présente dans le contexte).',
        },
        {
          id: 'trans-ortho-01-ex09',
          type: 'qcm',
          question: 'Pourquoi les erreurs sur les homophones grammaticaux persistent-elles même chez les locuteurs natifs ?',
          options: [
            'Parce que ces mots ne sont jamais utilisés en français',
            'Parce que ces mots se prononcent de façon identique — seule la réflexion grammaticale (pas l\'oreille) permet de choisir la bonne orthographe',
            'Parce que ces mots n\'ont aucune règle logique',
            'Parce que les natifs ne savent jamais écrire correctement',
          ],
          correctIndex: 1,
          explanation: 'Ces mots se prononcent de façon STRICTEMENT IDENTIQUE à l\'oral. Seule une RÉFLEXION GRAMMATICALE CONSCIENTE (identifier la fonction du mot dans la phrase, appliquer le test de substitution) permet de choisir la bonne orthographe à l\'écrit — l\'OREILLE seule ne peut jamais trancher, ce qui explique la PERSISTANCE de ces erreurs même après des années de pratique.',
        },
        {
          id: 'trans-ortho-01-ex10',
          type: 'qcm',
          question: 'Complétez : "Les enfants ___ leurs jouets dans ___ chambre." (ont/on, leur/leurs)',
          options: ['on / leur', 'ont / leur', 'ont / leurs', 'on / leurs'],
          correctIndex: 1,
          explanation: '"Les enfants ONT leurs jouets dans LEUR chambre." Test : "ils AVAIENT leurs jouets" (fonctionne) → "ont". "Leur chambre" (une seule chambre partagée, déterminant possessif singulier) vs "leurs jouets" (plusieurs jouets, pluriel).',
        },
        {
          id: 'trans-ortho-01-ex11',
          type: 'qcm',
          question: 'Complétez : "C\'est ___ erreur ___ je dois corriger." (cette/sept, que/qu\'elle)',
          options: ['sept / qu\'elle', 'cette / que', 'cette / qu\'elle', 'sept / que'],
          correctIndex: 1,
          explanation: '"C\'est CETTE erreur QUE je dois corriger." "Cette" = déterminant démonstratif féminin singulier (pas "sept" = le chiffre 7). "Que" = pronom relatif COD ("je dois corriger CETTE ERREUR" → "que je dois corriger").',
        },
        {
          id: 'trans-ortho-01-ex12',
          type: 'qcm',
          question: 'Complétez : "Quand ___ -vous arrivés ? ___ matin ou cet après-midi ?" (êtes/étés, ce/se)',
          options: ['étés / se', 'êtes / ce', 'êtes / se', 'étés / ce'],
          correctIndex: 1,
          explanation: '"Quand ÊTES-vous arrivés ? CE matin ou cet après-midi ?" "Êtes" = verbe être, 2ème pers. pl. (pas "étés", qui n\'a pas de sens grammatical correct ici). "Ce matin" = déterminant démonstratif + nom.',
        },
        {
          id: 'trans-ortho-01-ex13',
          type: 'qcm',
          question: 'Test de substitution pour "son/sont" : quelle phrase confirme qu\'il faut écrire "sont" ?',
          options: [
            '"Son dossier" → test : "étaient dossier" (incohérent)',
            '"Ils sont venus" → test : "ils étaient venus" (cohérent)',
            'Les deux tests sont impossibles à réaliser',
            'Aucun test ne permet de distinguer ces mots',
          ],
          correctIndex: 1,
          explanation: '"Ils SONT venus" → test : "ils ÉTAIENT venus" (cohérent, le sens se maintient) → confirme "SONT" (verbe être). "Son dossier" ne peut PAS être testé par "étaient" (incohérent), confirmant qu\'il s\'agit du déterminant possessif "son".',
        },
        {
          id: 'trans-ortho-01-ex14',
          type: 'qcm',
          question: 'Complétez : "Je ne sais pas ___ il va, ni avec qui ___ partira." (où/ou, il/y)',
          options: ['ou / y', 'où / il', 'où / y', 'ou / il'],
          correctIndex: 2,
          explanation: '"Je ne sais pas OÙ il va, ni avec qui IL partira." Wait — il faut "où" (lieu) puis "il" (pronom sujet répété). Vérification : la phrase complète est "Je ne sais pas OÙ il va, ni avec qui il partira" — "il" reste le sujet, pas "y".',
        },
        {
          id: 'trans-ortho-01-ex15',
          type: 'qcm',
          question: 'Complétez : "___ a-t-il dit qu\'il viendrait ? — Oui, ___ matin même." (est-ce que/es-ce, ce/se)',
          options: ['Es-ce / se', 'Est-ce que / ce', 'Est-ce que / se', 'Es-ce / ce'],
          correctIndex: 1,
          explanation: '"EST-CE QUE a-t-il dit..." (orthographe correcte avec "est" + "ce", jamais "es-ce"). "CE matin même" = déterminant démonstratif + nom.',
        },
        {
          id: 'trans-ortho-01-ex16',
          type: 'qcm',
          question: 'Complétez : "Les documents ___ vous avez besoin ___ disponibles en ligne." (dont/don, sont/son)',
          options: ['don / son', 'dont / sont', 'dont / son', 'don / sont'],
          correctIndex: 1,
          explanation: '"Les documents DONT vous avez besoin SONT disponibles." "Dont" (pronom relatif, "avoir besoin DE") n\'a pas d\'équivalent "don" en ce sens. "Sont" (verbe être, test : "étaient disponibles" fonctionne) confirme le verbe, pas "son" (déterminant).',
        },
        {
          id: 'trans-ortho-01-ex17',
          type: 'qcm',
          question: 'Quelle est la règle pour "ou" vs "où" en termes d\'accent ?',
          options: [
            'Les deux s\'écrivent toujours sans accent',
            '"Ou" (choix, conjonction) s\'écrit sans accent ; "où" (lieu, interrogatif/relatif) s\'écrit avec un accent grave',
            '"Ou" s\'écrit avec accent, "où" sans accent',
            'L\'accent est facultatif dans les deux cas',
          ],
          correctIndex: 1,
          explanation: '"OU" (sans accent) = conjonction de CHOIX entre deux éléments ("thé ou café"). "OÙ" (AVEC accent grave) = lieu ou TEMPS, pronom relatif ou interrogatif ("où vas-tu ?", "le jour où..."). L\'accent grave est le marqueur visuel ESSENTIEL pour distinguer ces deux homophones.',
        },
        {
          id: 'trans-ortho-01-ex18',
          type: 'qcm',
          question: 'Complétez : "Quels sont ___ avantages ___ ce contrat offre ?" (les/leurs, que/qu\')',
          options: ['leurs / que', 'les / que', 'les / qu\'', 'leurs / qu\''],
          correctIndex: 1,
          explanation: '"Quels sont LES avantages QUE ce contrat offre ?" "Les" = article défini pluriel (pas "leurs" qui impliquerait une possession non présente). "Que" reste entier devant "ce" (pas d\'élision nécessaire devant une consonne).',
        },
        {
          id: 'trans-ortho-01-ex19',
          type: 'qcm',
          question: 'Pourquoi la maîtrise des homophones grammaticaux est-elle particulièrement importante dans un écrit administratif ou professionnel ?',
          options: [
            'Ce n\'est pas important dans ce contexte',
            'Parce que des erreurs sur ces points, bien que n\'empêchant généralement pas la compréhension, peuvent être perçues comme un manque de rigueur ou de maîtrise de la langue écrite, notamment dans un contexte où le sérieux du document compte',
            'Parce que ces erreurs rendent toujours le texte totalement incompréhensible',
            'Parce que les administrations rejettent automatiquement tout document avec une erreur',
          ],
          correctIndex: 1,
          explanation: 'Bien que des erreurs sur les homophones n\'empêchent généralement PAS la COMPRÉHENSION du message, elles peuvent être PERÇUES comme un manque de RIGUEUR ou de MAÎTRISE de la langue écrite, ce qui peut avoir un impact sur la PERCEPTION du sérieux du document, notamment dans des contextes PROFESSIONNELS ou ADMINISTRATIFS où la qualité de l\'écrit est souvent un indicateur implicite de fiabilité.',
        },
        {
          id: 'trans-ortho-01-ex20',
          type: 'qcm',
          question: 'En synthèse, quelle est la méthode générale recommandée pour éviter les erreurs sur les homophones grammaticaux à l\'écrit ?',
          options: [
            'Écrire le plus rapidement possible sans jamais se relire',
            'Appliquer systématiquement le test de substitution approprié à chaque homophone rencontré, en particulier lors de la relecture d\'un texte important',
            'Éviter complètement d\'utiliser ces mots dans ses écrits',
            'Se fier uniquement à l\'intuition auditive sans aucune réflexion grammaticale',
          ],
          correctIndex: 1,
          explanation: 'La méthode GÉNÉRALE recommandée consiste à APPLIQUER SYSTÉMATIQUEMENT le TEST DE SUBSTITUTION approprié (avait/était/étaient/avaient/pluriel...) à CHAQUE HOMOPHONE rencontré, en particulier lors de la RELECTURE attentive d\'un texte IMPORTANT (lettre administrative, email professionnel), où la précision orthographique est davantage scrutée.',
        },
      ],
    },

    {
      id: 'trans-ortho-02',
      slug: 'trans-accords-pluriel-complexes',
      moduleSlug: 'transversal-orthographe',
      level: 'transversal',
      title: 'Les accords et pluriels complexes',
      description: 'Maîtriser le pluriel des noms composés, des couleurs et autres cas particuliers d\'accord.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Les pluriels qui ne suivent pas la règle simple "+s"

Si la majorité des noms français forment leur pluriel en ajoutant un "s", de nombreuses exceptions et cas particuliers existent.

**Les noms en -al → -aux**
"un cheval" → "des chevaux", "un journal" → "des journaux"
Exceptions : bal/bals, carnaval/carnavals, festival/festivals, récital/récitals (mots plus récents ou d'origine étrangère)

**Les noms en -ail → -ails (généralement)**
"un détail" → "des détails", "un éventail" → "des éventails"
Exceptions : travail/travaux, vitrail/vitraux, corail/coraux

**Les noms composés : la règle dépend de la nature des mots**
- Nom + nom : les deux s'accordent généralement ("des choux-fleurs")
- Nom + adjectif : les deux s'accordent ("des grands-pères")
- Verbe + nom : le verbe est invariable, le nom s'accorde selon le sens ("des tire-bouchons" si plusieurs bouchons, mais "des essuie-glaces" — variable selon le sens visé)
- Mot invariable + nom : seul le nom s'accorde ("des avant-postes")

**Les adjectifs de couleur (rappel approfondi du module B1)**
- Couleur simple : accord normal ("des chemises bleues")
- Couleur composée : invariable ("des chemises bleu clair")
- Nom employé comme couleur : invariable ("des murs orange", "des yeux marron")

**Demi, mi, semi : toujours invariables et liés par un trait d'union**
"une demi-heure", "à mi-chemin", "un produit semi-fini"`,

      linguisticPoint: `## Point linguistique : La réforme orthographique de 1990 et les noms composés

### Simplification proposée (recommandée mais non obligatoire)
La réforme de 1990 recommande que dans les noms composés VERBE+NOM ou PRÉPOSITION+NOM, le second élément s'accorde TOUJOURS au pluriel selon le nombre de l'ensemble :
- Ancienne norme : "un cure-dent" → "des cure-dents" (variable selon le sens)
- Nouvelle norme (1990) : "un cure-dent" → "des cure-dents" (toujours accordé si pluriel)

### Exemple de simplification
- Ancienne règle stricte : "un compte-gouttes" (invariable car "compte" = verbe) reste "des compte-gouttes"
- Nouvelle règle (1990) : "des comptegouttes" peut s'écrire en un seul mot, accordé simplement

### Ce qu'il faut retenir au niveau pratique
Les DEUX orthographes (ancienne et nouvelle norme 1990) sont aujourd'hui ACCEPTÉES dans l'usage général et les examens, mais l'ANCIENNE norme reste la plus enseignée traditionnellement. Pour l'écrit administratif, privilégier la norme TRADITIONNELLE (pré-1990) reste le choix le plus sûr et le plus largement reconnu.`,

      keyPoints: [
        'Noms en -al → -aux (cheval→chevaux) SAUF bal/carnaval/festival/récital (+s simple)',
        'Noms composés : règle dépend de la nature des mots (nom+nom / nom+adjectif / verbe+nom / invariable+nom)',
        'Couleur composée (bleu clair) = invariable / nom-couleur (orange, marron) = invariable',
        '"Demi/mi/semi" = toujours invariables, liés par trait d\'union',
        'Réforme 1990 : simplifie les accords des noms composés verbe+nom, mais ancienne norme reste la plus enseignée',
      ],

      exercises: [
        {
          id: 'trans-ortho-02-ex01',
          type: 'qcm',
          question: 'Quel est le pluriel de "un journal" ?',
          options: ['des journals', 'des journaux', 'des journales', 'des journeaux'],
          correctIndex: 1,
          explanation: '"Des JOURNAUX." Les noms en "-AL" forment généralement leur pluriel en "-AUX" : cheval→chevaux, journal→journaux, animal→animaux. C\'est la règle générale, avec quelques exceptions notables.',
        },
        {
          id: 'trans-ortho-02-ex02',
          type: 'qcm',
          question: 'Quel est le pluriel de "un carnaval" (exception à la règle -al→-aux) ?',
          options: ['des carnaux', 'des carnavals', 'des carnavaux', 'des carnival'],
          correctIndex: 1,
          explanation: '"Des CARNAVALS." "Carnaval" fait partie des EXCEPTIONS qui prennent un simple "S" au pluriel (avec bal, festival, récital), contrairement à la règle générale "-al → -aux".',
        },
        {
          id: 'trans-ortho-02-ex03',
          type: 'qcm',
          question: 'Quel est le pluriel de "un travail" (exception à la règle -ail→-ails) ?',
          options: ['des travails', 'des travaux', 'des travailles', 'des travaill'],
          correctIndex: 1,
          explanation: '"Des TRAVAUX." "Travail" fait partie des EXCEPTIONS qui forment leur pluriel en "-AUX" (avec vitrail→vitraux, corail→coraux), contrairement à la règle générale des mots en "-ail" qui prennent simplement un "s" (détail→détails).',
        },
        {
          id: 'trans-ortho-02-ex04',
          type: 'qcm',
          question: 'Quel est le pluriel de "un chou-fleur" (nom+nom) ?',
          options: ['des chou-fleurs', 'des choux-fleur', 'des choux-fleurs', 'des chou-fleur'],
          correctIndex: 2,
          explanation: '"Des CHOUX-FLEURS." Nom + nom : les DEUX éléments s\'accordent généralement au pluriel ("choux" et "fleurs"). C\'est la règle pour cette catégorie de noms composés.',
        },
        {
          id: 'trans-ortho-02-ex05',
          type: 'qcm',
          question: 'Quel est le pluriel de "un grand-père" (adjectif+nom) ?',
          options: ['des grand-pères', 'des grands-père', 'des grands-pères', 'des grand-père'],
          correctIndex: 2,
          explanation: '"Des GRANDS-PÈRES." Adjectif + nom : les DEUX éléments s\'accordent généralement ("grands" et "pères"). Comme pour nom+nom, cette catégorie accorde l\'ensemble du composé.',
        },
        {
          id: 'trans-ortho-02-ex06',
          type: 'qcm',
          question: 'Accord couleur composée : "Elle portait des chaussures ___ ___ ." (bleu marine, invariable)',
          options: ['bleues marines', 'bleu marine', 'bleues marine', 'bleu marines'],
          correctIndex: 1,
          explanation: '"Des chaussures BLEU MARINE." Couleur composée (bleu + marine) → INVARIABLE, sans accord même au pluriel. Rappel du point déjà vu en B1, ici intégré dans le contexte plus large des accords complexes.',
        },
        {
          id: 'trans-ortho-02-ex07',
          type: 'qcm',
          question: 'Accord nom-couleur : "Des murs ___ dans le salon." (orange, invariable)',
          options: ['orange', 'oranges', 'orangé', 'orangés'],
          correctIndex: 0,
          explanation: '"Des murs ORANGE." "Orange" (nom de fruit utilisé comme couleur) reste INVARIABLE. Pas de "s" au pluriel, contrairement aux vrais adjectifs de couleur (comme "bleu" qui prend un "s" : des murs bleus).',
        },
        {
          id: 'trans-ortho-02-ex08',
          type: 'qcm',
          question: 'Comment s\'écrit "demi" dans "une demi-heure" ?',
          options: [
            'Demi s\'accorde avec "heure" : "une demie-heure"',
            'Demi reste invariable, lié par un trait d\'union : "une demi-heure"',
            'Demi devient "demis" au pluriel : "des demis-heures"',
            'Demi ne s\'utilise jamais avec un trait d\'union',
          ],
          correctIndex: 1,
          explanation: '"DEMI" reste TOUJOURS INVARIABLE quand il précède le nom, lié par un TRAIT D\'UNION : "une demi-heure", "des demi-heures" (demi reste invariable même au pluriel). Règle fixe sans exception pour cette construction.',
        },
        {
          id: 'trans-ortho-02-ex09',
          type: 'qcm',
          question: 'Quel est le pluriel de "un avant-poste" (mot invariable + nom) ?',
          options: ['des avants-postes', 'des avant-poste', 'des avant-postes', 'des avants-poste'],
          correctIndex: 2,
          explanation: '"Des AVANT-POSTES." Mot INVARIABLE ("avant") + nom : seul le NOM s\'accorde ("postes"), "avant" reste invariable. Cette règle s\'applique à de nombreux composés avec des prépositions ou adverbes invariables (avant, après, sans...).',
        },
        {
          id: 'trans-ortho-02-ex10',
          type: 'qcm',
          question: 'Que propose la réforme orthographique de 1990 concernant les noms composés verbe+nom ?',
          options: [
            'D\'interdire complètement ces noms composés',
            'De systématiser l\'accord du second élément (nom) selon le nombre, simplifiant les règles antérieures plus complexes selon le sens',
            'De rendre tous les noms composés totalement invariables',
            'De supprimer le trait d\'union dans tous les cas',
          ],
          correctIndex: 1,
          explanation: 'La réforme de 1990 propose de SYSTÉMATISER l\'accord du second élément (le nom) selon le NOMBRE de l\'ensemble, SIMPLIFIANT les règles antérieures plus complexes qui dépendaient du SENS (variable selon qu\'on visualisait un ou plusieurs éléments désignés par le nom).',
        },
        {
          id: 'trans-ortho-02-ex11',
          type: 'qcm',
          question: 'Quel est le pluriel correct de "un festival" ?',
          options: ['des festivaux', 'des festivals', 'des festivales', 'des festival'],
          correctIndex: 1,
          explanation: '"Des FESTIVALS." "Festival" fait partie des exceptions (avec bal, carnaval, récital) qui prennent un simple "S" au pluriel, plutôt que la terminaison "-aux" habituelle des mots en "-al".',
        },
        {
          id: 'trans-ortho-02-ex12',
          type: 'qcm',
          question: 'Accord nom-couleur invariable : "Il avait les yeux ___ ." (marron)',
          options: ['marron', 'marrons', 'marronne', 'marronnes'],
          correctIndex: 0,
          explanation: '"Les yeux MARRON." "Marron" (nom utilisé comme couleur) reste INVARIABLE, même au pluriel. Cette règle s\'applique aux noms-couleurs (orange, marron) par opposition aux vrais adjectifs de couleur qui s\'accordent normalement.',
        },
        {
          id: 'trans-ortho-02-ex13',
          type: 'qcm',
          question: 'Quel est le pluriel de "un récital" ?',
          options: ['des récitaux', 'des récitals', 'des récitales', 'des récital'],
          correctIndex: 1,
          explanation: '"Des RÉCITALS." Comme bal, carnaval et festival, "récital" prend un simple "S" au pluriel (exception à la règle "-al → -aux"), probablement en raison de son caractère relativement récent ou de son origine étrangère.',
        },
        {
          id: 'trans-ortho-02-ex14',
          type: 'qcm',
          question: 'Comment s\'écrit "mi" dans "à mi-chemin" ?',
          options: [
            'Mi s\'accorde toujours avec le nom suivant',
            'Mi reste invariable, lié par un trait d\'union',
            'Mi devient "mis" au pluriel',
            'Mi ne s\'utilise jamais avec un nom',
          ],
          correctIndex: 1,
          explanation: '"MI" reste TOUJOURS INVARIABLE, lié par un TRAIT D\'UNION ("à mi-chemin", "à mi-hauteur"). Comme "demi" et "semi", c\'est un préfixe invariable fixe en français.',
        },
        {
          id: 'trans-ortho-02-ex15',
          type: 'qcm',
          question: 'Quel est le pluriel de "un vitrail" (exception à la règle -ail→-ails) ?',
          options: ['des vitrails', 'des vitraux', 'des vitrailles', 'des vitral'],
          correctIndex: 1,
          explanation: '"Des VITRAUX." "Vitrail" fait partie des exceptions (avec travail, corail) qui forment leur pluriel en "-AUX", contrairement à la majorité des mots en "-ail" qui prennent simplement "s" (détail→détails, éventail→éventails).',
        },
        {
          id: 'trans-ortho-02-ex16',
          type: 'qcm',
          question: 'Pourquoi privilégier l\'ancienne norme (pré-1990) pour les noms composés dans un écrit administratif officiel ?',
          options: [
            'Parce que la nouvelle norme de 1990 est en réalité incorrecte et illégale',
            'Parce que l\'ancienne norme reste la plus enseignée traditionnellement et la plus largement reconnue, même si les deux normes sont aujourd\'hui officiellement acceptées',
            'Parce qu\'il est interdit d\'utiliser la nouvelle norme dans tout contexte',
            'Parce que la nouvelle norme n\'existe pas réellement',
          ],
          correctIndex: 1,
          explanation: 'Bien que les DEUX orthographes (ancienne et nouvelle norme 1990) soient aujourd\'hui OFFICIELLEMENT ACCEPTÉES, l\'ANCIENNE norme reste la plus ENSEIGNÉE traditionnellement et la plus LARGEMENT RECONNUE dans l\'usage général, ce qui en fait le choix le plus SÛR pour un écrit ADMINISTRATIF officiel où la conformité aux attentes est valorisée.',
        },
        {
          id: 'trans-ortho-02-ex17',
          type: 'qcm',
          question: 'Accord couleur composée : "Des yeux ___ ___ très particuliers." (bleu clair)',
          options: ['bleus clairs', 'bleu clair', 'bleue claire', 'bleus claire'],
          correctIndex: 1,
          explanation: '"Des yeux BLEU CLAIR." Couleur composée (bleu + clair) → INVARIABLE, même au masculin pluriel. Aucun des deux mots ne prend de "s" final, contrairement aux couleurs simples qui s\'accordent normalement.',
        },
        {
          id: 'trans-ortho-02-ex18',
          type: 'qcm',
          question: 'Pourquoi les noms composés ne suivent-ils pas tous la même règle d\'accord, contrairement aux noms simples ?',
          options: [
            'Parce que la règle d\'accord des noms composés est en réalité totalement aléatoire',
            'Parce que l\'accord dépend de la NATURE GRAMMATICALE de chaque élément du composé (nom, adjectif, verbe, mot invariable), chaque catégorie suivant sa propre logique d\'accord',
            'Parce que les noms composés n\'existent pas vraiment en français',
            'Parce que tous les noms composés sont en réalité invariables sans exception',
          ],
          correctIndex: 1,
          explanation: 'L\'accord des noms composés dépend de la NATURE GRAMMATICALE de CHAQUE ÉLÉMENT du composé : un NOM s\'accorde généralement, un ADJECTIF s\'accorde généralement, un VERBE reste TOUJOURS invariable, un mot INVARIABLE (préposition, adverbe) reste également invariable. Cette LOGIQUE COMPOSITIONNELLE, bien que complexe, suit des règles cohérentes une fois la nature de chaque élément identifiée.',
        },
        {
          id: 'trans-ortho-02-ex19',
          type: 'qcm',
          question: 'Quel est le pluriel de "un corail" (exception à la règle -ail→-ails) ?',
          options: ['des corails', 'des coraux', 'des coraill', 'des coraille'],
          correctIndex: 1,
          explanation: '"Des CORAUX." "Corail" fait partie des exceptions (avec travail, vitrail) qui forment leur pluriel en "-AUX", suivant le même schéma que ces deux autres exceptions notables à la règle générale des mots en "-ail".',
        },
        {
          id: 'trans-ortho-02-ex20',
          type: 'qcm',
          question: 'En synthèse, quelle stratégie est recommandée pour gérer la complexité des règles d\'accord des pluriels et noms composés en français ?',
          options: [
            'Mémoriser une règle unique applicable à tous les cas sans exception',
            'Identifier la catégorie du nom (terminaison -al/-ail, nature des éléments d\'un composé, type de couleur) pour appliquer la sous-règle appropriée, en mémorisant les exceptions notables au cas par cas',
            'Éviter complètement d\'utiliser le pluriel pour simplifier',
            'Utiliser systématiquement la règle générale "+s" sans tenir compte des exceptions',
          ],
          correctIndex: 1,
          explanation: 'La stratégie recommandée consiste à IDENTIFIER la CATÉGORIE précise du nom concerné (terminaison -al/-ail, NATURE des éléments d\'un composé, type de COULEUR) pour appliquer la SOUS-RÈGLE appropriée à cette catégorie, tout en MÉMORISANT les EXCEPTIONS NOTABLES (bal/carnaval/festival/récital ; travail/vitrail/corail) au CAS PAR CAS, car elles ne suivent pas le schéma général de leur catégorie.',
        },
      ],
    },

    {
      id: 'trans-ortho-03',
      slug: 'trans-accents-signes-orthographiques',
      moduleSlug: 'transversal-orthographe',
      level: 'transversal',
      title: 'Les accents et signes orthographiques',
      description: 'Maîtriser l\'usage des accents, de la cédille et du tréma, essentiels pour une orthographe correcte.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Pourquoi les accents ne sont jamais "décoratifs"

Contrairement à une idée reçue, les accents français ne sont JAMAIS de simples décorations — ils peuvent changer la prononciation ET le sens d'un mot.

**L'accent aigu (é) — uniquement sur le "e"**
Indique un [e] fermé : "été", "café", "université"

**L'accent grave (à, è, ù)**
- Sur "e" : indique un [ɛ] ouvert : "père", "mère", "très"
- Sur "a" et "u" : distingue des HOMOPHONES grammaticaux : "a" (verbe) / "à" (préposition) ; "ou" / "où"

**L'accent circonflexe (â, ê, î, ô, û)**
- Marque souvent une ancienne lettre disparue (généralement un "s") : "hôpital" (vs "hospital" en anglais, "hospitalier" en français qui garde le S)
- Distingue parfois des homophones : "sur" (préposition) / "sûr" (certain) ; "du" (article) / "dû" (participe passé de devoir)

**La cédille (ç)**
Indique que le "c" se prononce [s] devant a/o/u (normalement [k]) : "français", "garçon", "ça"
Sans cédille : "ca" se prononcerait [ka], pas [sa]

**Le tréma (ë, ï, ü)**
Indique que deux voyelles consécutives se prononcent SÉPARÉMENT, pas comme une seule unité : "naïve" [na-iv] (pas [nɛv]), "Noël" [no-ɛl]

**Pourquoi ces signes sont essentiels en orthographe administrative**
"Vous devez payer la taxe" (sans accent, faute) vs "Vous devez payer la taxe due" — omettre l'accent circonflexe sur "dû" pourrait créer une ambiguïté dans certains contextes.`,

      linguisticPoint: `## Point linguistique : Les homophones distingués uniquement par un accent

### Paires cruciales à mémoriser
| Sans accent | Avec accent | Différence de sens |
|---|---|---|
| sur (préposition) | sûr (certain, adjectif) | "le livre EST sur la table" / "je suis SÛR de cela" |
| du (article contracté) | dû (participe passé de devoir) | "le prix DU billet" / "le montant DÛ" |
| ou (conjonction de choix) | où (lieu/relatif) | "thé OU café" / "la ville OÙ j'habite" |
| a (verbe avoir) | à (préposition) | "il A un titre" / "il va À la mairie" |
| la (article/pronom) | là (adverbe de lieu) | "LA maison" / "LÀ-bas" |

### Règle de l'accent circonflexe sur le participe passé masculin singulier
Certains participes passés ont un accent circonflexe UNIQUEMENT au masculin singulier :
"dû" (masc. sing.) mais "due, dus, dues" (sans accent aux autres formes)
"mû" (masc. sing.) mais "mue, mus, mues" (sans accent aux autres formes)

### Réforme de 1990 et l'accent circonflexe
La réforme recommande de SUPPRIMER l'accent circonflexe sur "i" et "u" dans de nombreux mots où il ne change pas la prononciation : "maitre" (au lieu de "maître"), "cout" (au lieu de "coût") — mais cette simplification reste PEU appliquée dans la pratique administrative et professionnelle courante.`,

      keyPoints: [
        'Accent aigu (é) = [e] fermé uniquement / Accent grave (è) = [ɛ] ouvert, ou distingue homophones (à/ou)',
        'Accent circonflexe = trace d\'un ancien "s" disparu + distingue homophones (sûr/sur, dû/du)',
        'Cédille (ç) = "c" se prononce [s] devant a/o/u (français, garçon)',
        'Tréma = deux voyelles consécutives prononcées séparément (naïve, Noël)',
        '"Dû" garde l\'accent au masc. sing. seulement (due/dus/dues sans accent)',
      ],

      exercises: [
        {
          id: 'trans-ortho-03-ex01',
          type: 'qcm',
          question: 'Complétez : "Le montant ___ doit être payé avant la fin du mois." (du/dû)',
          options: ['du', 'dû', 'due', 'dus'],
          correctIndex: 1,
          explanation: '"Le montant DÛ doit être payé." "Dû" = participe passé de "devoir" (masc. sing.), avec accent circonflexe. "Du" (sans accent) = article contracté ("de + le"), incompatible ici grammaticalement.',
        },
        {
          id: 'trans-ortho-03-ex02',
          type: 'qcm',
          question: 'Pourquoi la cédille est-elle nécessaire dans "garçon" ?',
          options: [
            'Elle est purement décorative, sans fonction',
            'Elle indique que le "c" se prononce [s] devant "o", alors que sans cédille "co" se prononcerait [ko]',
            'Elle indique que le mot est féminin',
            'Elle remplace un accent aigu manquant',
          ],
          correctIndex: 1,
          explanation: 'La CÉDILLE (ç) indique que le "C" se prononce [s] devant "a/o/u" (où il se prononcerait normalement [k] sans cédille). Sans cédille, "garcon" se prononcerait [garkõ], ce qui serait incorrect — la cédille est donc FONCTIONNELLE, pas décorative.',
        },
        {
          id: 'trans-ortho-03-ex03',
          type: 'qcm',
          question: 'Quelle est la fonction du tréma dans "naïve" ?',
          options: [
            'Il indique que le mot est au pluriel',
            'Il indique que les deux voyelles "a" et "i" se prononcent séparément, et non comme une seule unité',
            'Il remplace un accent circonflexe',
            'Il n\'a aucune fonction particulière',
          ],
          correctIndex: 1,
          explanation: 'Le TRÉMA indique que les DEUX VOYELLES consécutives ("a" et "i" dans "naïve") se prononcent SÉPARÉMENT [na-iv], et non comme une seule unité (sans tréma, "naive" pourrait théoriquement se lire différemment).',
        },
        {
          id: 'trans-ortho-03-ex04',
          type: 'qcm',
          question: 'Complétez : "Je suis ___ que ce livre est ___ la table." (sûr/sur, sûr/sur)',
          options: ['sur / sûr', 'sûr / sur', 'sûr / sûr', 'sur / sur'],
          correctIndex: 1,
          explanation: '"Je suis SÛR que ce livre est SUR la table." "Sûr" (avec accent circonflexe) = certain (adjectif). "Sur" (sans accent) = préposition de lieu ("sur la table"). Deux fonctions grammaticales totalement différentes distinguées uniquement par l\'accent.',
        },
        {
          id: 'trans-ortho-03-ex05',
          type: 'qcm',
          question: 'Pourquoi "hôpital" porte-t-il un accent circonflexe sur le "o" ?',
          options: [
            'Pour des raisons purement esthétiques sans justification historique',
            'L\'accent circonflexe marque souvent la trace d\'une ancienne lettre disparue (ici, un "s" : "hospital" en ancien français, comme on le voit encore dans "hospitalier")',
            'Parce que tous les mots commençant par "h" portent un accent circonflexe',
            'Parce que ce mot est d\'origine anglaise',
          ],
          correctIndex: 1,
          explanation: 'L\'accent circonflexe sur "hÔpital" marque la TRACE HISTORIQUE d\'un ancien "S" disparu (de "hoSpital" en ancien français), comme on peut encore le constater dans le mot dérivé "hoSpitalier" qui a CONSERVÉ ce "s". C\'est une fonction ÉTYMOLOGIQUE de ce signe.',
        },
        {
          id: 'trans-ortho-03-ex06',
          type: 'qcm',
          question: 'Complétez l\'accord du participe passé : "La somme ___ par le client a été remboursée." (due/dû)',
          options: ['dû', 'due', 'dus', 'dues'],
          correctIndex: 1,
          explanation: '"La somme DUE par le client..." "Due" (FÉMININ singulier, SANS accent circonflexe) accorde avec "la somme" (féminin). L\'accent circonflexe de "DÛ" n\'apparaît QUE pour la forme MASCULINE SINGULIÈRE — règle spécifique à retenir.',
        },
        {
          id: 'trans-ortho-03-ex07',
          type: 'qcm',
          question: 'Quel mot illustre l\'usage du tréma pour séparer deux voyelles ?',
          options: ['café', 'Noël', 'garçon', 'sûr'],
          correctIndex: 1,
          explanation: '"NOËL" [no-ɛl] illustre l\'usage du TRÉMA : sans ce signe, "Noel" pourrait être lu différemment. Le tréma sur le "ë" indique que les voyelles "o" et "e" se prononcent dans des syllabes DISTINCTES.',
        },
        {
          id: 'trans-ortho-03-ex08',
          type: 'qcm',
          question: 'Que propose la réforme orthographique de 1990 concernant l\'accent circonflexe ?',
          options: [
            'D\'ajouter des accents circonflexes partout',
            'De supprimer l\'accent circonflexe sur "i" et "u" dans de nombreux mots où il ne change pas la prononciation (ex : "maitre" au lieu de "maître")',
            'De supprimer tous les accents sans exception',
            'D\'interdire totalement l\'usage de l\'accent circonflexe',
          ],
          correctIndex: 1,
          explanation: 'La réforme de 1990 recommande de SUPPRIMER l\'accent circonflexe sur "I" et "U" dans de NOMBREUX mots où il ne change PAS la prononciation ("maitre" au lieu de "maître", "cout" au lieu de "coût"). Cette simplification reste cependant PEU APPLIQUÉE dans la pratique administrative et professionnelle courante.',
        },
        {
          id: 'trans-ortho-03-ex09',
          type: 'qcm',
          question: 'Complétez : "Je ne sais pas ___ il préfère le thé ___ le café." (où/ou, ou/où)',
          options: ['où / ou', 'ou / où', 'ou / ou', 'où / où'],
          correctIndex: 2,
          explanation: '"Je ne sais pas SI il préfère le thé OU le café." — attention, la phrase nécessiterait en réalité "si" (pas "où"), mais en se concentrant uniquement sur "thé ___ café" : c\'est "OU" (sans accent), conjonction de choix entre deux éléments.',
        },
        {
          id: 'trans-ortho-03-ex10',
          type: 'qcm',
          question: 'Quelle est la différence entre l\'accent aigu et l\'accent grave sur la lettre "e" ?',
          options: [
            'Aucune différence, ils sont interchangeables',
            'L\'accent aigu (é) marque un son fermé [e], l\'accent grave (è) marque un son ouvert [ɛ]',
            'L\'accent aigu marque un son ouvert, l\'accent grave un son fermé',
            'Les deux accents ne s\'utilisent jamais sur la lettre "e"',
          ],
          correctIndex: 1,
          explanation: 'L\'ACCENT AIGU (é, comme dans "été") marque un son FERMÉ [e]. L\'ACCENT GRAVE (è, comme dans "père") marque un son OUVERT [ɛ]. Cette distinction phonétique précise correspond à une différence réelle de prononciation de la voyelle "e".',
        },
        {
          id: 'trans-ortho-03-ex11',
          type: 'qcm',
          question: 'Complétez : "Il a beaucoup ___ pour réussir cet examen." (du/dû, étudier)',
          options: ['du étudier', 'dû étudier', 'due étudier', 'dus étudier'],
          correctIndex: 1,
          explanation: '"Il a beaucoup DÛ étudier." "Devoir" + infinitif au passé composé, "dû" garde son accent circonflexe (masculin singulier, sujet "il"). C\'est le participe passé du verbe "devoir" exprimant l\'obligation/probabilité passée.',
        },
        {
          id: 'trans-ortho-03-ex12',
          type: 'qcm',
          question: 'Quelle paire de mots est uniquement distinguée par l\'accent grave sur le "a" ?',
          options: ['sur/sûr', 'a/à', 'du/dû', 'ou/où'],
          correctIndex: 1,
          explanation: '"A" (verbe avoir, sans accent) / "À" (préposition, avec accent grave) sont distingués UNIQUEMENT par cet accent. Les autres paires utilisent l\'accent CIRCONFLEXE (sûr/sur, dû/du) ou l\'accent GRAVE sur "u" (où/ou).',
        },
        {
          id: 'trans-ortho-03-ex13',
          type: 'qcm',
          question: 'Comment écrit-on "français" et pourquoi ?',
          options: [
            'Sans cédille, "francais", car le c se prononce toujours [k]',
            'Avec cédille, "français", car le c devant "ai" (qui inclut le son [a]) doit se prononcer [s] et non [k]',
            'Avec un accent aigu, "francés"',
            'Avec un tréma, "francaïs"',
          ],
          correctIndex: 1,
          explanation: '"FRANÇAIS" s\'écrit avec une CÉDILLE car le "c" devant "ai" (qui contient le son [a]) doit se prononcer [s] (et non [k] comme ce serait le cas sans cédille). La cédille est donc NÉCESSAIRE pour indiquer la prononciation correcte de ce mot très courant.',
        },
        {
          id: 'trans-ortho-03-ex14',
          type: 'qcm',
          question: 'Quel est le pluriel de "dû" (participe passé de devoir) ?',
          options: ['dûs (avec accent)', 'dus (sans accent)', 'due (féminin singulier)', 'dues (féminin pluriel)'],
          correctIndex: 1,
          explanation: '"DUS" (masculin PLURIEL, SANS accent circonflexe). Rappel de la règle : l\'accent circonflexe sur "dû" n\'apparaît QUE pour le masculin SINGULIER. Les autres formes (due, dus, dues) s\'écrivent SANS accent circonflexe.',
        },
        {
          id: 'trans-ortho-03-ex15',
          type: 'qcm',
          question: 'Pourquoi dit-on que les accents français ne sont "jamais décoratifs" ?',
          options: [
            'Cette affirmation est fausse, les accents sont purement esthétiques',
            'Parce qu\'ils ont systématiquement une fonction phonétique (indiquer une prononciation précise) ou distinctive (différencier des homophones), jamais purement ornementale',
            'Parce qu\'ils n\'existent que dans les textes littéraires',
            'Parce qu\'ils sont optionnels et peuvent être omis sans conséquence',
          ],
          correctIndex: 1,
          explanation: 'Les accents français ont SYSTÉMATIQUEMENT une fonction PHONÉTIQUE (indiquer une prononciation précise, comme é/è) ou DISTINCTIVE (différencier des homophones, comme sur/sûr), JAMAIS purement ORNEMENTALE. Cette FONCTIONNALITÉ systématique justifie l\'importance de leur maîtrise correcte à l\'écrit.',
        },
        {
          id: 'trans-ortho-03-ex16',
          type: 'qcm',
          question: 'Complétez : "Cette tâche ___ être terminée avant demain." (doit/dois, intercaler "dû" n\'est pas nécessaire ici)',
          options: ['doit', 'doive', 'dut', 'devra'],
          correctIndex: 0,
          explanation: '"Cette tâche DOIT être terminée." Ici, pas de participe passé "dû" nécessaire — c\'est le présent du verbe "devoir" (3ème pers. sing. = "doit"), sans aucun accent circonflexe à ajouter à cette forme.',
        },
        {
          id: 'trans-ortho-03-ex17',
          type: 'qcm',
          question: 'Quelle est la justification de l\'accent circonflexe sur "forêt" ?',
          options: [
            'Aucune justification, c\'est une erreur historique',
            'Comme pour "hôpital", il marque la trace d\'un ancien "s" disparu ("forest" en ancien français, comme on le voit encore en anglais "forest")',
            'Il indique que le mot est emprunté à l\'anglais',
            'Il sert uniquement à allonger visuellement le mot',
          ],
          correctIndex: 1,
          explanation: 'Comme pour "hÔpital", l\'accent circonflexe sur "forÊt" marque la TRACE HISTORIQUE d\'un ancien "S" disparu (de "foreST" en ancien français — on peut le constater en comparant avec l\'anglais "FOREST", qui a conservé cette forme plus ancienne).',
        },
        {
          id: 'trans-ortho-03-ex18',
          type: 'qcm',
          question: 'Quelle phrase contient une erreur d\'accent à corriger ? "Il est sur de venir."',
          options: [
            'Il n\'y a aucune erreur dans cette phrase',
            '"Sur" devrait être "sûr" (avec accent circonflexe), car il s\'agit de l\'adjectif "certain", pas de la préposition de lieu',
            '"Il" devrait être remplacé par "elle"',
            '"Venir" devrait être à l\'infinitif passé',
          ],
          correctIndex: 1,
          explanation: '"Il est SÛR de venir" (avec accent circonflexe) car il s\'agit de l\'ADJECTIF "certain" ("il est certain de venir"), et non de la PRÉPOSITION de lieu "sur" (sans accent, comme dans "le livre est sur la table"). C\'est une erreur fréquente à corriger.',
        },
        {
          id: 'trans-ortho-03-ex19',
          type: 'qcm',
          question: 'Pourquoi la réforme de 1990 sur l\'accent circonflexe reste-t-elle "peu appliquée" dans la pratique administrative ?',
          options: [
            'Parce que cette réforme a été officiellement annulée',
            'Parce que l\'usage traditionnel (avec accent circonflexe) reste largement privilégié par habitude et par souci de cohérence avec les textes officiels antérieurs, malgré l\'acceptation officielle de la simplification',
            'Parce que la nouvelle orthographe est devenue obligatoire dans tous les contextes',
            'Parce que personne ne connaît cette réforme',
          ],
          correctIndex: 1,
          explanation: 'Malgré l\'ACCEPTATION OFFICIELLE de la simplification, l\'USAGE TRADITIONNEL (avec accent circonflexe) reste LARGEMENT PRIVILÉGIÉ par HABITUDE et par souci de COHÉRENCE avec les textes officiels et l\'enseignement ANTÉRIEUR, rendant cette réforme PEU APPLIQUÉE dans la pratique administrative et professionnelle COURANTE, bien que techniquement valide.',
        },
        {
          id: 'trans-ortho-03-ex20',
          type: 'qcm',
          question: 'En synthèse, pourquoi la maîtrise précise des accents est-elle considérée comme un élément clé de l\'orthographe française avancée ?',
          options: [
            'Parce que les accents sont une fantaisie sans réelle importance pratique',
            'Parce qu\'ils portent une fonction phonétique et distinctive essentielle, permettant de différencier des homophones et de garantir une prononciation correcte, leur maîtrise étant un marqueur de rigueur orthographique',
            'Parce qu\'ils ne concernent que les textes littéraires anciens',
            'Parce qu\'ils sont systématiquement optionnels dans tout contexte',
          ],
          correctIndex: 1,
          explanation: 'Les accents portent une FONCTION PHONÉTIQUE et DISTINCTIVE ESSENTIELLE (différencier des homophones comme sûr/sur, garantir une prononciation correcte comme dans français/garçon), faisant de leur MAÎTRISE PRÉCISE un MARQUEUR de RIGUEUR ORTHOGRAPHIQUE particulièrement valorisé dans les écrits formels, administratifs et professionnels.',
        },
      ],
    },

    {
      id: 'trans-ortho-04',
      slug: 'trans-doubles-consonnes-lettres-muettes',
      moduleSlug: 'transversal-orthographe',
      level: 'transversal',
      title: 'Doubles consonnes et lettres muettes',
      description: 'Repérer les pièges des consonnes doublées et des lettres qui ne se prononcent pas.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Pourquoi tant de lettres "inutiles" à l'oral ?

Le français écrit conserve de nombreuses lettres MUETTES (non prononcées) et des consonnes DOUBLÉES qui ne changent pas toujours la prononciation — héritage de l'histoire de la langue.

**Les lettres muettes finales fréquentes**
- "-s" du pluriel (ne se prononce pas, sauf en liaison) : "les amis" [lezami]
- "-t" final de nombreux mots : "le contrat" [kõtʀa], "le respect" [ʀɛspɛ]
- "-d" final : "le pied" [pje], "le nid" [ni]
- "-e" final (très fréquent, marque souvent le féminin) : "petite", "grande"

**Les doubles consonnes — un piège orthographique majeur**
Certains mots doublent une consonne sans que cela change la prononciation, par tradition étymologique :
- "appartement" (2 p), "professionnel" (2 s, 2 n), "intéressant" (2 s)
- "adresse" (2 s), "personne" (2 n)

**Doubles consonnes qui CHANGENT le sens (cas où la prononciation diffère)**
- "il chasse" [ʃas] (verbe) vs "la chasse" [ʃas] — ici pas de différence
- MAIS : "vous courez" vs si on écrivait à tort "courrez" — ATTENTION : "courrez" existe au futur ("vous courrez demain") tandis que "courez" est le présent ou l'impératif

**Pourquoi mémoriser ces points est essentiel**
Une lettre muette omise ou une consonne doublée mal orthographiée ne change généralement pas la PRONONCIATION, mais constitue une FAUTE D'ORTHOGRAPHE visible à l'écrit, notamment dans les écrits formels.`,

      linguisticPoint: `## Point linguistique : Les familles de mots pour mémoriser les lettres muettes

### La méthode du "mot de la même famille"
Pour savoir si un mot se termine par une lettre muette, on peut chercher un mot DÉRIVÉ où cette lettre se prononce :
- "le respect" (t muet) → "respecter" [ʀɛspɛkte] (le "t" est prononcé dans le verbe dérivé)
- "le bois" (s muet) → "boisé" (mais ici le "s" reste muet... attention, exception)
- "le rang" (g muet) → "rangée" (le "g" devient audible : [ʀɑ̃ʒe])
- "le profit" (t muet) → "profiter" [pʀɔfite] (le "t" est prononcé)

### Pourquoi cette méthode ne fonctionne pas toujours
Certaines lettres muettes n'ont pas de mot dérivé permettant cette vérification — il faut alors les MÉMORISER directement (ex : "le nid", sans dérivé évident en "d").

### Les doubles consonnes : aucune règle générale fiable
Contrairement aux lettres muettes (parfois vérifiables par dérivation), les DOUBLES CONSONNES ("appartement", "intéressant") n'ont généralement PAS de règle logique simple — leur orthographe doit être MÉMORISÉE mot par mot, souvent par la lecture répétée et la pratique de l'écrit.`,

      keyPoints: [
        'Lettres muettes finales fréquentes : -s (pluriel), -t, -d, -e (souvent marque du féminin)',
        'Méthode du mot dérivé : "respect"→"respecter" (le t devient audible) aide à vérifier certaines lettres muettes',
        'Doubles consonnes (appartement, intéressant, professionnel) = souvent sans règle logique, à mémoriser',
        'Une lettre muette omise ou une consonne doublée mal écrite = faute visible à l\'écrit, sans impact sur la prononciation',
        'Pas de règle générale fiable pour les doubles consonnes — mémorisation par la pratique et la lecture',
      ],

      exercises: [
        {
          id: 'trans-ortho-04-ex01',
          type: 'qcm',
          question: 'Quelle lettre finale est généralement muette dans "le contrat" ?',
          options: ['Le "c"', 'Le "n"', 'Le "t"', 'Le "a"'],
          correctIndex: 2,
          explanation: 'Le "T" final de "contraT" est MUET — on prononce [kõtʀa], sans le son [t]. Cette lettre muette finale est très fréquente en français (de nombreux mots terminant en "-t" ne le prononcent pas).',
        },
        {
          id: 'trans-ortho-04-ex02',
          type: 'qcm',
          question: 'Comment vérifier que le "t" de "respect" est bien présent dans l\'orthographe, malgré son caractère muet ?',
          options: [
            'Il est impossible de le vérifier',
            'En cherchant un mot dérivé où cette lettre se prononce, comme "respecter" [ʀɛspɛkte] où le "t" devient audible',
            'En vérifiant si le mot rime avec un autre',
            'En comptant le nombre de syllabes',
          ],
          correctIndex: 1,
          explanation: 'La MÉTHODE DU MOT DÉRIVÉ consiste à chercher un mot de la MÊME FAMILLE où la lettre devient AUDIBLE : "respect" (t muet) → "respecTer" [ʀɛspɛkte] (le "t" est PRONONCÉ dans le verbe dérivé), confirmant ainsi la présence du "t" dans l\'orthographe du nom.',
        },
        {
          id: 'trans-ortho-04-ex03',
          type: 'qcm',
          question: 'Combien de "s" comporte le mot "professionnel" ?',
          options: ['1', '2', '3', '0'],
          correctIndex: 1,
          explanation: '"PROFESSIONNEL" comporte 2 "S" (et aussi 2 "N"). C\'est un exemple typique de DOUBLE CONSONNE sans règle logique simple, à MÉMORISER directement par la pratique de la lecture et de l\'écriture répétée.',
        },
        {
          id: 'trans-ortho-04-ex04',
          type: 'qcm',
          question: 'Quelle lettre finale est généralement muette dans "le pied" ?',
          options: ['Le "p"', 'Le "i"', 'Le "e"', 'Le "d"'],
          correctIndex: 3,
          explanation: 'Le "D" final de "pieD" est MUET — on prononce [pje], sans le son [d]. Comme pour "le nid" [ni], cette consonne finale "d" ne se prononce généralement pas en fin de mot, sauf en cas de liaison.',
        },
        {
          id: 'trans-ortho-04-ex05',
          type: 'qcm',
          question: 'Combien de "s" comporte le mot "adresse" ?',
          options: ['1', '2', '3', '0'],
          correctIndex: 1,
          explanation: '"ADRESSE" comporte 2 "S" (double consonne). Comme pour "professionnel" ou "intéressant", cette double consonne n\'a pas de justification logique évidente — elle doit être MÉMORISÉE par la pratique régulière de l\'écrit.',
        },
        {
          id: 'trans-ortho-04-ex06',
          type: 'qcm',
          question: 'Pourquoi une faute sur une lettre muette (omise) ne change-t-elle généralement pas la prononciation du mot ?',
          options: [
            'Parce que toutes les lettres se prononcent toujours en français',
            'Parce que, par définition, une lettre muette n\'est pas prononcée à l\'oral — son omission est donc invisible à l\'oral mais constitue une faute orthographique visible à l\'écrit',
            'Parce que cette faute change toujours complètement le sens du mot',
            'Parce que les lettres muettes n\'existent pas réellement en français',
          ],
          correctIndex: 1,
          explanation: 'Par DÉFINITION, une lettre MUETTE n\'est PAS PRONONCÉE à l\'oral. Son OMISSION à l\'écrit reste donc INVISIBLE à l\'oral (la prononciation ne change pas), mais constitue une FAUTE D\'ORTHOGRAPHE VISIBLE à l\'écrit, perceptible par toute personne lisant le texte.',
        },
        {
          id: 'trans-ortho-04-ex07',
          type: 'qcm',
          question: 'Combien de "n" comporte le mot "personne" ?',
          options: ['1', '2', '3', '0'],
          correctIndex: 1,
          explanation: '"PERSONNE" comporte 2 "N" (double consonne). Cette orthographe avec double consonne doit être MÉMORISÉE, car elle ne suit pas de règle phonétique distinctive en français moderne (la prononciation serait similaire avec un seul "n").',
        },
        {
          id: 'trans-ortho-04-ex08',
          type: 'qcm',
          question: 'Comment la méthode du "mot dérivé" permet-elle de vérifier la lettre muette finale de "le rang" ?',
          options: [
            'Elle ne fonctionne pas pour ce mot',
            'En cherchant "rangée", où le "g" devient audible [ʀɑ̃ʒe], confirmant la présence du "g" dans "rang"',
            'En cherchant un synonyme sans rapport étymologique',
            'En vérifiant la longueur du mot',
          ],
          correctIndex: 1,
          explanation: 'Pour "le rang" (g muet), on peut chercher le mot dérivé "rangée", où le "G" devient AUDIBLE [ʀɑ̃ʒe] (prononcé comme un [ʒ] devant "é"), confirmant ainsi la PRÉSENCE de cette lettre dans l\'orthographe du nom "rang", malgré son caractère muet en fin de mot.',
        },
        {
          id: 'trans-ortho-04-ex09',
          type: 'qcm',
          question: 'Quelle lettre finale très fréquente marque souvent le féminin en français, sans se prononcer ?',
          options: ['Le "s"', 'Le "t"', 'Le "e"', 'Le "d"'],
          correctIndex: 2,
          explanation: 'Le "E" final est TRÈS FRÉQUENT pour marquer le FÉMININ ("petite", "grande", "blanche"), sans pour autant être PRONONCÉ distinctement dans la plupart des cas (sauf si nécessaire pour la liaison ou en poésie/chant). C\'est l\'une des lettres muettes les plus courantes du français.',
        },
        {
          id: 'trans-ortho-04-ex10',
          type: 'qcm',
          question: 'Pourquoi dit-on qu\'il n\'existe "aucune règle générale fiable" pour les doubles consonnes, contrairement aux lettres muettes (parfois vérifiables par dérivation) ?',
          options: [
            'Parce que les doubles consonnes n\'existent pas en français',
            'Parce que la présence d\'une double consonne (comme dans "intéressant" ou "appartement") ne suit généralement pas de logique phonétique ou dérivationnelle simple, contrairement à certaines lettres muettes qui peuvent être vérifiées via un mot dérivé',
            'Parce que toutes les doubles consonnes suivent exactement la même règle simple',
            'Parce que les doubles consonnes changent toujours la prononciation de façon prévisible',
          ],
          correctIndex: 1,
          explanation: 'La présence d\'une DOUBLE CONSONNE (intéressant, appartement, professionnel) ne suit généralement PAS de logique PHONÉTIQUE ou DÉRIVATIONNELLE simple permettant de la VÉRIFIER systématiquement, contrairement à certaines LETTRES MUETTES qui peuvent parfois être confirmées via un MOT DÉRIVÉ (respect→respecter). D\'où la nécessité de MÉMORISER les doubles consonnes au cas par cas.',
        },
        {
          id: 'trans-ortho-04-ex11',
          type: 'qcm',
          question: 'Combien de "s" comporte le mot "intéressant" ?',
          options: ['1', '2', '3', '0'],
          correctIndex: 1,
          explanation: '"INTÉRESSANT" comporte 2 "S". C\'est l\'un des mots fréquemment mal orthographiés (avec un seul "s") car cette double consonne n\'a pas de justification phonétique évidente en français moderne.',
        },
        {
          id: 'trans-ortho-04-ex12',
          type: 'qcm',
          question: 'Quelle est la différence entre "vous courez" (présent) et "vous courrez" (futur) ?',
          options: [
            'Aucune différence, les deux orthographes sont équivalentes',
            'Le présent "courez" a un seul "r", le futur "courrez" a deux "r" — une distinction qui change le temps verbal, pas seulement l\'orthographe',
            'Le futur a un seul "r", le présent en a deux',
            'Cette distinction n\'existe pas en français',
          ],
          correctIndex: 1,
          explanation: '"Vous COUREZ" (PRÉSENT, un seul "r") vs "vous COURREZ" (FUTUR, deux "r"). Cette DOUBLE CONSONNE n\'est pas qu\'une question orthographique arbitraire ici — elle correspond à une DIFFÉRENCE DE TEMPS VERBAL réelle (présent vs futur), rendant cette distinction particulièrement IMPORTANTE à respecter.',
        },
        {
          id: 'trans-ortho-04-ex13',
          type: 'qcm',
          question: 'Quelle lettre finale est généralement muette dans "le nid" ?',
          options: ['Le "n"', 'Le "i"', 'Le "d"', 'Aucune lettre n\'est muette dans ce mot'],
          correctIndex: 2,
          explanation: 'Le "D" final de "niD" est MUET — on prononce [ni], sans le son [d]. Ce mot n\'a pas de dérivé évident permettant de VÉRIFIER cette lettre par la méthode du mot dérivé — elle doit donc être directement MÉMORISÉE.',
        },
        {
          id: 'trans-ortho-04-ex14',
          type: 'qcm',
          question: 'Combien de "p" comporte le mot "appartement" ?',
          options: ['1', '2', '3', '0'],
          correctIndex: 1,
          explanation: '"APPARTEMENT" comporte 2 "P" (et 1 seul "t"). Cette double consonne fait partie des nombreux exemples de mots où l\'orthographe avec consonne doublée doit être MÉMORISÉE, sans règle phonétique distinctive en français moderne.',
        },
        {
          id: 'trans-ortho-04-ex15',
          type: 'qcm',
          question: 'Pourquoi la lettre "s" du pluriel ne se prononce-t-elle généralement pas, sauf en cas de liaison ?',
          options: [
            'Parce que cette lettre n\'existe pas réellement à l\'écrit',
            'C\'est une caractéristique historique du français : le "s" du pluriel est devenu muet au fil de l\'évolution de la langue, sauf quand le mot suivant commence par une voyelle (liaison)',
            'Parce que le "s" se prononce toujours, sans exception',
            'Parce que le pluriel n\'existe pas en français',
          ],
          correctIndex: 1,
          explanation: 'C\'est une CARACTÉRISTIQUE HISTORIQUE du français : le "S" du pluriel est devenu progressivement MUET au fil de l\'évolution de la langue (contrairement à d\'autres langues romanes comme l\'espagnol qui le prononcent toujours). Il ne redevient AUDIBLE qu\'en cas de LIAISON, quand le mot suivant commence par une voyelle ("les_amis" [lezami]).',
        },
        {
          id: 'trans-ortho-04-ex16',
          type: 'qcm',
          question: 'Quelle méthode est recommandée pour mémoriser durablement l\'orthographe des doubles consonnes, en l\'absence de règle générale fiable ?',
          options: [
            'Éviter complètement d\'utiliser ces mots',
            'La pratique régulière de la lecture et de l\'écriture, qui permet une mémorisation progressive et naturelle de ces formes spécifiques',
            'Mémoriser une règle mathématique précise applicable à tous les mots',
            'Se fier uniquement à la prononciation, qui révèle toujours le nombre de consonnes',
          ],
          correctIndex: 1,
          explanation: 'En l\'ABSENCE de règle GÉNÉRALE fiable pour les doubles consonnes, la méthode RECOMMANDÉE est la PRATIQUE RÉGULIÈRE de la LECTURE et de l\'ÉCRITURE, qui permet une MÉMORISATION PROGRESSIVE et NATURELLE de ces formes SPÉCIFIQUES par EXPOSITION répétée, plutôt qu\'une règle théorique qui n\'existe pas de façon systématique pour ce point orthographique.',
        },
        {
          id: 'trans-ortho-04-ex17',
          type: 'qcm',
          question: 'Quel mot illustre la lettre muette finale "-t" la plus fréquente en français ?',
          options: ['le nid', 'le contrat', 'professionnel', 'adresse'],
          correctIndex: 1,
          explanation: '"LE CONTRAT" illustre la lettre muette finale "-T" [kõtʀa]. "Le nid" illustre le "-D" muet. "Professionnel" et "adresse" illustrent des DOUBLES CONSONNES, pas des lettres muettes finales.',
        },
        {
          id: 'trans-ortho-04-ex18',
          type: 'qcm',
          question: 'Pourquoi est-il particulièrement important de respecter ces conventions orthographiques (lettres muettes, doubles consonnes) dans un écrit professionnel ou académique ?',
          options: [
            'Ce n\'est pas important dans ces contextes',
            'Parce que ces fautes, bien qu\'invisibles à l\'oral, sont immédiatement visibles à l\'écrit et peuvent affecter la perception de la rigueur et du sérieux du rédacteur, particulièrement dans des contextes formels où l\'écrit est scruté',
            'Parce que ces fautes changent toujours radicalement le sens du texte',
            'Parce que l\'orthographe n\'a jamais d\'importance, seul le contenu compte',
          ],
          correctIndex: 1,
          explanation: 'Ces fautes, bien qu\'INVISIBLES à l\'ORAL, sont IMMÉDIATEMENT VISIBLES à l\'ÉCRIT et peuvent AFFECTER la PERCEPTION de la RIGUEUR et du SÉRIEUX du rédacteur, particulièrement dans des contextes FORMELS (professionnel, académique, administratif) où la QUALITÉ de l\'écrit est souvent un indicateur IMPLICITE de fiabilité et de soin apporté au document.',
        },
        {
          id: 'trans-ortho-04-ex19',
          type: 'qcm',
          question: 'Combien de "n" comporte le mot "professionnel" ?',
          options: ['1', '2', '3', '0'],
          correctIndex: 1,
          explanation: '"PROFESSIONNEL" comporte 2 "N" (en plus des 2 "S" déjà mentionnés). Ce mot cumule donc DEUX doubles consonnes distinctes, ce qui en fait un exemple particulièrement représentatif des pièges orthographiques liés aux consonnes doublées en français.',
        },
        {
          id: 'trans-ortho-04-ex20',
          type: 'qcm',
          question: 'En synthèse, quelle est la différence d\'approche pédagogique entre travailler les lettres muettes et travailler les doubles consonnes ?',
          options: [
            'Aucune différence, les deux suivent exactement la même méthode',
            'Pour les lettres muettes, on peut souvent utiliser la méthode du mot dérivé pour vérifier logiquement leur présence ; pour les doubles consonnes, il n\'existe généralement pas de méthode logique équivalente, et la mémorisation directe par la pratique reste la seule approche fiable',
            'Les doubles consonnes sont toujours plus faciles à mémoriser que les lettres muettes',
            'Il est impossible d\'apprendre l\'une ou l\'autre de ces catégories',
          ],
          correctIndex: 1,
          explanation: 'Pour les LETTRES MUETTES, on peut souvent utiliser la MÉTHODE DU MOT DÉRIVÉ pour VÉRIFIER LOGIQUEMENT leur présence (respect→respecter). Pour les DOUBLES CONSONNES, il n\'existe généralement PAS de méthode logique équivalente fiable, et la MÉMORISATION DIRECTE par la PRATIQUE RÉPÉTÉE (lecture, écriture) reste la SEULE approche réellement EFFICACE pour ce point orthographique spécifique.',
        },
      ],
    },

    {
      id: 'trans-ortho-05',
      slug: 'trans-homophones-lexicaux',
      moduleSlug: 'transversal-orthographe',
      level: 'transversal',
      title: 'Les homophones lexicaux complexes',
      description: 'Distinguer des mots de sens totalement différents qui se prononcent de façon identique.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Quand deux mots sans aucun rapport se prononcent pareil

Au-delà des homophones GRAMMATICAUX (a/à, et/est...), le français compte de nombreux homophones LEXICAUX : des mots de sens complètement différents, sans aucun rapport, qui se prononcent de façon identique.

**Le groupe "sain / saint / sein / seing" [sɛ̃]**
- "sain" (adjectif) = en bonne santé : "un mode de vie sain"
- "saint" (nom/adjectif) = personne sanctifiée par l'Église : "la Toussaint", "Saint-Louis"
- "sein" (nom) = partie du corps ou sens figuré "au sein de" (à l'intérieur de) : "au sein de l'entreprise"
- "seing" (nom, très rare, juridique) = signature : "un acte sous seing privé" (terme juridique précis)

**Le groupe "cour / cours / court / courre" [kuʀ]**
- "cour" (nom) = espace extérieur, ou lieu de justice : "la cour de l'immeuble", "la Cour de cassation"
- "cours" (nom) = leçon, ou évolution : "un cours de français", "au cours de l'année"
- "court" (adjectif) = de faible longueur : "un texte court"
- "courre" (verbe rare, vieilli) = uniquement dans "chasse à courre" (chasse traditionnelle à cheval)

**Le groupe "vert / verre / vers / ver" [vɛʀ]**
- "vert" (adjectif) = couleur
- "verre" (nom) = matériau ou récipient
- "vers" (préposition/nom) = direction, ou ligne de poésie
- "ver" (nom) = petit animal (ver de terre)

**Pourquoi cette compétence est précieuse**
Au-delà de l'orthographe correcte, comprendre ces distinctions aide à la COMPRÉHENSION DE LECTURE — un texte mentionnant "la cour" peut désigner un espace OU une juridiction selon le contexte, et seul le sens global permet de choisir la bonne interprétation.`,

      linguisticPoint: `## Point linguistique : Utiliser le contexte sémantique pour choisir le bon homophone

### Méthode : identifier le champ lexical de la phrase
1. Repérer les mots environnants qui donnent des indices de sens
2. Éliminer les homophones dont le sens ne correspond pas au contexte
3. Vérifier la cohérence grammaticale (nom/adjectif/verbe) de l'homophone retenu

### Exemple d'application
"Il a suivi un ___ de français pendant deux ans." (cour/cours/court/courre)
- "Cour" (espace) : incohérent sémantiquement
- "Cours" (leçon) : COHÉRENT → bonne réponse
- "Court" (adjectif court) : incohérent grammaticalement (pas un nom ici)
- "Courre" : terme rare, sans rapport

### Liste complémentaire d'homophones lexicaux fréquents
- mètre / maire / mer / mère [mɛʀ]
- pain / pin / peint / peint [pɛ̃]
- voie / voix [vwa]
- foie / foi / fois [fwa]
- compte / comte / conte [kõt]`,

      keyPoints: [
        'sain/saint/sein/seing [sɛ̃] : santé / sanctifié / partie du corps-"au sein de" / signature (juridique, rare)',
        'cour/cours/court/courre [kuʀ] : espace/justice / leçon-évolution / adjectif court / chasse à courre (rare)',
        'vert/verre/vers/ver [vɛʀ] : couleur / matériau-récipient / direction-poésie / animal',
        'Méthode : identifier le champ lexical de la phrase pour éliminer les homophones incohérents',
        'Autres groupes fréquents : mètre/maire/mer/mère ; pain/pin ; voie/voix ; foie/foi/fois ; compte/comte/conte',
      ],

      exercises: [
        {
          id: 'trans-ortho-05-ex01',
          type: 'qcm',
          question: 'Complétez : "Il mène un mode de vie ___ ." (sain/saint/sein, adjectif = en bonne santé)',
          options: ['saint', 'sein', 'sain', 'seing'],
          correctIndex: 2,
          explanation: '"Il mène un mode de vie SAIN." "Sain" = adjectif signifiant "en bonne santé" / "équilibré". Distinct de "saint" (sanctifié), "sein" (partie du corps/au sein de), "seing" (signature, juridique).',
        },
        {
          id: 'trans-ortho-05-ex02',
          type: 'qcm',
          question: 'Complétez : "Cette décision a été prise au ___ de l\'entreprise." (sain/sein, = à l\'intérieur de)',
          options: ['sain', 'saint', 'sein', 'seing'],
          correctIndex: 2,
          explanation: '"Au SEIN de l\'entreprise" = à l\'intérieur de l\'entreprise. "Sein" au sens figuré ("au sein de") signifie "à l\'intérieur de", une expression très courante dans le contexte professionnel et institutionnel.',
        },
        {
          id: 'trans-ortho-05-ex03',
          type: 'qcm',
          question: 'Complétez : "Il a suivi un ___ de français pendant deux ans." (cour/cours/court, = leçon)',
          options: ['cour', 'court', 'cours', 'courre'],
          correctIndex: 2,
          explanation: '"Il a suivi un COURS de français." "Cours" (nom) = leçon, enseignement. Distinct de "cour" (espace extérieur ou juridiction), "court" (adjectif, de faible longueur), "courre" (terme rare lié à la chasse).',
        },
        {
          id: 'trans-ortho-05-ex04',
          type: 'qcm',
          question: 'Complétez : "La ___ de cassation a rendu son arrêt." (cour/cours/court, = juridiction)',
          options: ['cours', 'court', 'cour', 'courre'],
          correctIndex: 2,
          explanation: '"La COUR de cassation..." "Cour" (nom) = ici, une JURIDICTION (tribunal de haut niveau). Le même mot "cour" peut aussi désigner un espace extérieur (la cour d\'un immeuble) — le sens dépend entièrement du CONTEXTE.',
        },
        {
          id: 'trans-ortho-05-ex05',
          type: 'qcm',
          question: 'Complétez : "Ce texte est trop ___ , il faut le développer." (cour/cours/court, adjectif)',
          options: ['cour', 'cours', 'court', 'courre'],
          correctIndex: 2,
          explanation: '"Ce texte est trop COURT." "Court" (adjectif) = de faible longueur. C\'est le seul de ce groupe d\'homophones qui soit un ADJECTIF — les autres (cour, cours) sont des noms.',
        },
        {
          id: 'trans-ortho-05-ex06',
          type: 'qcm',
          question: 'Complétez : "Elle a acheté un ___ de vin." (vert/verre/vers/ver, = récipient)',
          options: ['vert', 'vers', 'verre', 'ver'],
          correctIndex: 2,
          explanation: '"Un VERRE de vin." "Verre" (nom) = matériau ou récipient (ici, un verre pour boire). Distinct de "vert" (couleur), "vers" (direction/poésie), "ver" (animal).',
        },
        {
          id: 'trans-ortho-05-ex07',
          type: 'qcm',
          question: 'Complétez : "Il se dirige ___ la sortie." (vert/vers/verre, = direction)',
          options: ['vert', 'verre', 'vers', 'ver'],
          correctIndex: 2,
          explanation: '"Il se dirige VERS la sortie." "Vers" (préposition) = exprime une DIRECTION. Distinct de "vert" (couleur), "verre" (matériau/récipient), "ver" (petit animal).',
        },
        {
          id: 'trans-ortho-05-ex08',
          type: 'qcm',
          question: 'Quelle méthode permet de choisir le bon homophone lexical dans une phrase ?',
          options: [
            'Choisir au hasard parmi les possibilités',
            'Identifier le champ lexical de la phrase (mots environnants) pour éliminer les homophones dont le sens ne correspond pas au contexte',
            'Toujours choisir l\'homophone le plus court à écrire',
            'Se fier uniquement à la prononciation, qui révèle toujours l\'orthographe correcte',
          ],
          correctIndex: 1,
          explanation: 'La méthode consiste à IDENTIFIER le CHAMP LEXICAL de la phrase (les mots ENVIRONNANTS qui donnent des indices de sens) pour ÉLIMINER les homophones dont le SENS ne correspond PAS au contexte, puis VÉRIFIER la cohérence GRAMMATICALE (nom/adjectif/verbe) de l\'homophone retenu.',
        },
        {
          id: 'trans-ortho-05-ex09',
          type: 'qcm',
          question: 'Que désigne "un acte sous seing privé" ?',
          options: [
            'Un acte religieux',
            'Un document juridique signé entre particuliers, sans intervention d\'un officier public (notaire)',
            'Un acte de bonne santé',
            'Un événement secret',
          ],
          correctIndex: 1,
          explanation: '"Acte SOUS SEING PRIVÉ" = document JURIDIQUE signé directement entre PARTICULIERS, SANS l\'intervention d\'un officier PUBLIC (comme un notaire). "Seing" (terme juridique RARE) signifie ici "signature". À distinguer de "sain" (santé), "saint" (sanctifié), "sein" (partie du corps).',
        },
        {
          id: 'trans-ortho-05-ex10',
          type: 'qcm',
          question: 'Complétez : "Le ___ de terre est un petit animal." (vert/verre/vers/ver)',
          options: ['vert', 'verre', 'vers', 'ver'],
          correctIndex: 3,
          explanation: '"Le VER de terre est un petit animal." "Ver" (nom) = petit animal invertébré. Distinct de "vert" (couleur), "verre" (matériau), "vers" (direction/poésie). C\'est le seul du groupe désignant un être vivant.',
        },
        {
          id: 'trans-ortho-05-ex11',
          type: 'qcm',
          question: 'Complétez : "Le ___ de Versailles fut un grand monarque." (mètre/maire/mer/mère, contexte royal)',
          options: ['mètre', 'mer', 'mère', 'roi'],
          correctIndex: 3,
          explanation: 'Aucun des homophones [mɛʀ] (mètre/maire/mer/mère) ne convient ici — il faut "ROI". Cette question teste la vigilance : parfois, le mot juste n\'est PAS un homophone de la série proposée, et il faut savoir reconnaître que le contexte exige un mot totalement différent.',
        },
        {
          id: 'trans-ortho-05-ex12',
          type: 'qcm',
          question: 'Complétez : "Le ___ a inauguré la nouvelle mairie." (mètre/maire/mer/mère)',
          options: ['mètre', 'mer', 'mère', 'maire'],
          correctIndex: 3,
          explanation: '"Le MAIRE a inauguré la nouvelle mairie." "Maire" = élu local dirigeant une commune. Distinct de "mètre" (unité de mesure), "mer" (étendue d\'eau), "mère" (parent féminin). Le contexte ("mairie") confirme clairement ce choix.',
        },
        {
          id: 'trans-ortho-05-ex13',
          type: 'qcm',
          question: 'Complétez : "Le médecin a vérifié son ___ après l\'opération." (foie/foi/fois, = organe)',
          options: ['foi', 'fois', 'foie', 'voie'],
          correctIndex: 2,
          explanation: '"Le médecin a vérifié son FOIE." "Foie" (nom) = organe du corps humain. Distinct de "foi" (croyance religieuse) et "fois" (occurrence, "une fois"). Le contexte médical confirme ce choix.',
        },
        {
          id: 'trans-ortho-05-ex14',
          type: 'qcm',
          question: 'Complétez : "Il a eu cette information une ___ ." (foie/foi/fois)',
          options: ['foie', 'foi', 'fois', 'voie'],
          correctIndex: 2,
          explanation: '"Une FOIS." "Fois" (nom) = occurrence, nombre de répétitions. Distinct de "foie" (organe), "foi" (croyance). "Une fois" = on time / once, expression de fréquence très courante.',
        },
        {
          id: 'trans-ortho-05-ex15',
          type: 'qcm',
          question: 'Complétez : "Le ___ du roi a été conservé aux Archives nationales." (compte/comte/conte, = titre de noblesse)',
          options: ['compte', 'conte', 'comte', 'content'],
          correctIndex: 2,
          explanation: '"Le COMTE du roi..." "Comte" (nom) = titre de NOBLESSE. Distinct de "compte" (calcul financier, ou verbe compter) et "conte" (récit, histoire fictive). Le contexte historique/nobiliaire confirme ce choix.',
        },
        {
          id: 'trans-ortho-05-ex16',
          type: 'qcm',
          question: 'Complétez : "Vérifiez votre ___ bancaire régulièrement." (compte/comte/conte)',
          options: ['conte', 'comte', 'compte', 'content'],
          correctIndex: 2,
          explanation: '"Votre COMPTE bancaire." "Compte" (nom) = compte financier, ou somme d\'argent gérée. Distinct de "comte" (titre de noblesse) et "conte" (récit). Le contexte bancaire confirme clairement ce choix.',
        },
        {
          id: 'trans-ortho-05-ex17',
          type: 'qcm',
          question: 'Pourquoi la compréhension de ces homophones lexicaux est-elle importante pour la COMPRÉHENSION DE LECTURE, et pas seulement pour l\'orthographe ?',
          options: [
            'Ce n\'est important que pour l\'orthographe, jamais pour la compréhension',
            'Parce qu\'un même mot oral (comme "cour") peut correspondre à plusieurs mots écrits de sens différents, et seul le contexte de lecture permet de déterminer correctement le sens visé dans un texte donné',
            'Parce que ces mots n\'apparaissent jamais dans des textes réels',
            'Parce que la compréhension de lecture ne dépend jamais du vocabulaire',
          ],
          correctIndex: 1,
          explanation: 'Un même SON [kuʀ] (à l\'oral) correspond à PLUSIEURS MOTS ÉCRITS de sens DIFFÉRENTS (cour/cours/court/courre). En LECTURE, c\'est l\'ORTHOGRAPHE qui révèle directement le sens VISÉ — mais en cas de doute ou de nouveau vocabulaire, c\'est le CONTEXTE qui permet de confirmer ou d\'INTERPRÉTER correctement le sens du mot rencontré.',
        },
        {
          id: 'trans-ortho-05-ex18',
          type: 'qcm',
          question: 'Complétez : "Je prendrai cette ___ pour rentrer chez moi." (voie/voix, = route/chemin)',
          options: ['voix', 'voie', 'vois', 'vois'],
          correctIndex: 1,
          explanation: '"Cette VOIE." "Voie" (nom) = chemin, route, parcours. Distinct de "voix" (organe vocal, ou opinion exprimée dans un vote). Le contexte ("pour rentrer chez moi") confirme qu\'il s\'agit d\'un chemin/itinéraire.',
        },
        {
          id: 'trans-ortho-05-ex19',
          type: 'qcm',
          question: 'Complétez : "Il a une belle ___ pour chanter." (voie/voix, = organe vocal)',
          options: ['voie', 'voix', 'voient', 'voilà'],
          correctIndex: 1,
          explanation: '"Une belle VOIX pour chanter." "Voix" (nom) = organe VOCAL, capacité à chanter/parler. Distinct de "voie" (chemin). Le contexte ("pour chanter") confirme clairement qu\'il s\'agit de la voix.',
        },
        {
          id: 'trans-ortho-05-ex20',
          type: 'qcm',
          question: 'En synthèse, quelle est la stratégie générale pour bien orthographier les homophones lexicaux complexes dans un texte ?',
          options: [
            'Mémoriser une liste fermée sans jamais réfléchir au contexte',
            'Combiner la mémorisation du sens propre à chaque mot avec une analyse systématique du contexte sémantique et grammatical de la phrase pour confirmer le choix approprié',
            'Éviter complètement d\'utiliser ces mots dans ses écrits',
            'Se fier uniquement à l\'intuition sans aucune vérification',
          ],
          correctIndex: 1,
          explanation: 'La stratégie GÉNÉRALE consiste à COMBINER la MÉMORISATION du SENS PROPRE à chaque mot (sain=santé, saint=sanctifié, sein=partie du corps...) AVEC une ANALYSE SYSTÉMATIQUE du CONTEXTE SÉMANTIQUE (quel sens convient ici ?) et GRAMMATICAL (nom, adjectif, verbe ?) de la phrase pour CONFIRMER le choix APPROPRIÉ, plutôt que de se fier uniquement à l\'une ou l\'autre de ces approches isolément.',
        },
      ],
    },
  ],
};
