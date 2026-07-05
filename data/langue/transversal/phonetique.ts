import type { LangModule } from '../types';

export const transversalPhonetique: LangModule = {
  id: 'trans-mod-01',
  slug: 'transversal-phonetique',
  level: 'transversal',
  title: 'Phonétique du français',
  subtitle: 'Sons, liaisons, intonation et rythme',
  description: 'Améliorez votre prononciation et votre compréhension orale grâce à une étude systématique des sons du français.',
  type: 'phonetique',
  emoji: '🔊',
  free: false,
  lessons: [
    {
      id: 'trans-pho-01',
      slug: 'trans-voyelles-orales',
      moduleSlug: 'transversal-phonetique',
      level: 'transversal',
      title: 'Les voyelles orales du français',
      description: 'Distinguer les voyelles proches qui changent le sens des mots : u/ou, é/è, i/y...',
      duration: 12,
      free: false,
      dialogue: `## Texte : Pourquoi certaines voyelles posent problème

Le français possède plusieurs voyelles qui n'existent pas dans toutes les langues, créant des confusions fréquentes pour les apprenants.

**[y] "u" vs [u] "ou" — une distinction cruciale**
- "tu" [ty] vs "tout" [tu]
- "rue" [ʀy] vs "roue" [ʀu]
- "pu" [py] vs "pou" [pu]
Pour prononcer [y], arrondissez les lèvres comme pour "ou" mais positionnez la langue comme pour "i".

**[e] "é" fermé vs [ɛ] "è" ouvert**
- "les" [le] (fermé) vs "lait" [lɛ] (ouvert)
- "été" [ete] vs "êtes" [ɛt]
Cette distinction, bien qu'elle s'efface dans certains accents régionaux, reste enseignée comme norme.

**[i] vs [y] — une autre paire piège**
- "si" [si] vs "su" [sy]
- "dit" [di] vs "du" [dy]

**Les voyelles nasales : an/on/in/un**
- [ã] "an, en" : "dans", "temps", "an"
- [õ] "on" : "bon", "maison"
- [ɛ̃] "in, ain, ein" : "vin", "pain", "plein"
- [ɛ̃] "un" (de plus en plus prononcé comme "in" dans le français standard moderne)

**Pourquoi ces distinctions sont importantes**
"Il a bu" / "il a bout" (bout n'existe pas comme ça mais illustre le risque) — la confusion peut créer des malentendus réels : "Je veux du pain" vs "je veux du pin" (un arbre).`,

      linguisticPoint: `## Point linguistique : Méthode pour distinguer les voyelles proches

### Le triangle vocalique simplifié
Position de la langue (avant/arrière) × arrondissement des lèvres (oui/non) :
- [i] = langue avant, lèvres NON arrondies ("si")
- [y] = langue avant, lèvres ARRONDIES ("su") ← combinaison difficile pour de nombreuses langues
- [u] = langue arrière, lèvres ARRONDIES ("sous")

### Exercice de prononciation progressif
1. Dites "i" (lèvres étirées, comme un sourire)
2. Sans bouger la langue, arrondissez les lèvres → vous obtenez [y]
3. Comparez avec "ou" [u] (langue reculée, lèvres arrondies)

### Minimal pairs à travailler à l'oral
du/doux, vu/vous, mur/mou, su/sous, pu/pou, lu/loup

### Les voyelles nasales : technique
Laissez l'air sortir partiellement par le nez en prononçant la voyelle — contrairement à l'anglais où les nasales sont moins marquées.`,

      keyPoints: [
        '[y] "u" (tu) ≠ [u] "ou" (tout) : lèvres arrondies + langue avant pour [y]',
        '[e] "é" fermé (les) ≠ [ɛ] "è" ouvert (lait)',
        '4 voyelles nasales : an/en [ã] / on [õ] / in/ain/ein [ɛ̃] / un [ɛ̃] (de plus en plus fusionné avec in)',
        'Minimal pairs utiles pour s\'entraîner : du/doux, vu/vous, su/sous',
        'Confusion possible créant des malentendus réels : "pain" vs "pin" (deux mots différents)',
      ],

      exercises: [
        {
          id: 'trans-pho-01-ex01',
          type: 'qcm',
          question: 'Quelle est la différence de prononciation entre "tu" et "tout" ?',
          options: [
            'Aucune différence, ils se prononcent de la même façon',
            '"Tu" se prononce [y] (langue avant, lèvres arrondies), "tout" se prononce [u] (langue arrière, lèvres arrondies)',
            '"Tu" se prononce avec la bouche fermée, "tout" avec la bouche grande ouverte',
            '"Tout" se prononce comme "tu" mais plus fort',
          ],
          correctIndex: 1,
          explanation: '"TU" [ty] = voyelle [y], langue en position AVANT avec les lèvres ARRONDIES (combinaison spécifique au français et difficile pour de nombreux apprenants). "TOUT" [tu] = voyelle [u], langue en position ARRIÈRE avec les lèvres également arrondies. La position de la LANGUE est la clé de la distinction.',
        },
        {
          id: 'trans-pho-01-ex02',
          type: 'qcm',
          question: 'Quelle paire de mots illustre la distinction [e] fermé vs [ɛ] ouvert ?',
          options: ['tu / tout', 'les / lait', 'si / su', 'pain / pin'],
          correctIndex: 1,
          explanation: '"LES" [le] (é fermé) vs "LAIT" [lɛ] (è ouvert) illustrent cette distinction. Le [e] fermé se prononce avec la bouche moins ouverte que le [ɛ] ouvert. Cette différence, bien qu\'atténuée dans certains accents régionaux, reste la norme enseignée.',
        },
        {
          id: 'trans-pho-01-ex03',
          type: 'qcm',
          question: 'Combien de voyelles nasales principales existe-t-il en français standard ?',
          options: ['2', '3', '4', '6'],
          correctIndex: 2,
          explanation: 'Le français compte 4 voyelles nasales principales : [ã] (an/en), [õ] (on), [ɛ̃] (in/ain/ein), et [ɛ̃] (un, de plus en plus fusionné phonétiquement avec "in" dans le français contemporain standard, bien que distingué historiquement).',
        },
        {
          id: 'trans-pho-01-ex04',
          type: 'qcm',
          question: 'Quelle est la technique pour prononcer [y] (comme dans "tu") en partant de [i] ?',
          options: [
            'Reculer la langue sans changer les lèvres',
            'Garder la position de la langue de [i] mais arrondir les lèvres',
            'Ouvrir la bouche complètement',
            'Prononcer [i] et [u] en même temps sans modification',
          ],
          correctIndex: 1,
          explanation: 'Pour obtenir [y], il faut GARDER la position de la LANGUE de [i] (avant) tout en ARRONDISSANT LES LÈVRES (comme pour [u]). C\'est cette COMBINAISON SPÉCIFIQUE qui rend le [y] français souvent difficile pour les locuteurs de langues qui ne possèdent pas ce son.',
        },
        {
          id: 'trans-pho-01-ex05',
          type: 'qcm',
          question: 'Pourquoi "pain" et "pin" peuvent-ils créer un malentendu réel s\'ils sont mal prononcés ou mal distingués ?',
          options: [
            'Ils se prononcent toujours exactement de la même façon, sans aucune différence',
            'Ce sont deux mots différents (pain = nourriture, pin = arbre) qui se distinguent par leur voyelle nasale, et une mauvaise prononciation peut créer une confusion de sens',
            'Ils n\'ont aucun rapport de sens entre eux dans ce contexte',
            'La distinction entre ces deux mots est purement orthographique, sans différence orale',
          ],
          correctIndex: 1,
          explanation: '"PAIN" (nourriture) et "PIN" (arbre) se prononcent tous deux avec la voyelle nasale [ɛ̃] en français standard moderne — ils sont en réalité des HOMOPHONES dans la prononciation standard actuelle. C\'est le CONTEXTE qui permet de les distingure, illustrant l\'importance du sens pour lever certaines ambiguïtés sonores.',
        },
        {
          id: 'trans-pho-01-ex06',
          type: 'qcm',
          question: 'Quelle paire minimale permet de s\'entraîner à distinguer [y] et [u] ?',
          options: ['si/su', 'les/lait', 'du/doux', 'an/on'],
          correctIndex: 2,
          explanation: '"DU" [dy] vs "DOUX" [du] illustre parfaitement la distinction [y]/[u]. "Si/su" travaille [i]/[y]. "Les/lait" travaille [e]/[ɛ]. "An/on" travaille deux voyelles nasales différentes.',
        },
        {
          id: 'trans-pho-01-ex07',
          type: 'qcm',
          question: 'Comment l\'air doit-il circuler pour prononcer correctement une voyelle nasale française ?',
          options: [
            'Uniquement par la bouche, jamais par le nez',
            'Partiellement par le nez, en plus du passage habituel par la bouche',
            'Uniquement par le nez, jamais par la bouche',
            'L\'air ne doit pas circuler du tout pendant la prononciation',
          ],
          correctIndex: 1,
          explanation: 'Pour une voyelle NASALE, l\'air doit sortir PARTIELLEMENT PAR LE NEZ, en plus du passage habituel par la bouche — c\'est cette résonance nasale qui caractérise [ã], [õ], [ɛ̃]. Cette technique est souvent moins marquée ou absente dans d\'autres langues, d\'où la difficulté pour certains apprenants.',
        },
        {
          id: 'trans-pho-01-ex08',
          type: 'qcm',
          question: 'Quelle paire illustre la distinction [i] vs [y] ?',
          options: ['les/lait', 'du/doux', 'si/su', 'an/un'],
          correctIndex: 2,
          explanation: '"SI" [si] vs "SU" [sy] illustre la distinction [i]/[y]. "Si" garde les lèvres NON arrondies (comme un sourire), tandis que "su" exige d\'ARRONDIR les lèvres tout en gardant la langue dans la même position avancée.',
        },
        {
          id: 'trans-pho-01-ex09',
          type: 'qcm',
          question: 'Pourquoi la voyelle [y] est-elle souvent considérée comme l\'une des plus difficiles à acquérir pour les apprenants de français ?',
          options: [
            'Parce qu\'elle n\'existe dans aucune langue du monde',
            'Parce qu\'elle combine deux caractéristiques (position de langue avant + lèvres arrondies) qui n\'apparaissent pas ensemble dans de nombreuses langues, notamment l\'anglais, l\'espagnol ou l\'arabe',
            'Parce qu\'elle est rarement utilisée dans le vocabulaire français courant',
            'Parce qu\'elle se prononce exactement comme en anglais',
          ],
          correctIndex: 1,
          explanation: 'Le son [y] combine DEUX caractéristiques articulatoires (position de LANGUE avancée + LÈVRES arrondies) qui n\'apparaissent PAS ENSEMBLE dans de nombreuses langues (anglais, espagnol, arabe, et bien d\'autres). Cette COMBINAISON SPÉCIFIQUE explique pourquoi ce son est souvent considéré comme l\'un des plus DIFFICILES à acquérir, nécessitant un entraînement articulatoire spécifique.',
        },
        {
          id: 'trans-pho-01-ex10',
          type: 'qcm',
          question: 'Quelle est la différence d\'ouverture de bouche entre [e] (les) et [ɛ] (lait) ?',
          options: [
            'Aucune différence d\'ouverture',
            '[e] se prononce avec la bouche moins ouverte (fermé) que [ɛ] (plus ouvert)',
            '[e] se prononce avec la bouche plus ouverte que [ɛ]',
            'Les deux sons nécessitent une ouverture maximale de la bouche',
          ],
          correctIndex: 1,
          explanation: '[e] (comme dans "les") se prononce avec la bouche MOINS OUVERTE — d\'où le terme "fermé". [ɛ] (comme dans "lait") se prononce avec la bouche PLUS OUVERTE — d\'où le terme "ouvert". Cette différence de degré d\'ouverture buccale distingue ces deux voyelles proches mais distinctes.',
        },
        {
          id: 'trans-pho-01-ex11',
          type: 'qcm',
          question: 'Dans quel mot trouve-t-on la voyelle nasale [õ] ?',
          options: ['vin', 'pain', 'bon', 'un'],
          correctIndex: 2,
          explanation: '"BON" contient la voyelle nasale [õ] (on). "Vin" et "pain" contiennent [ɛ̃] (in/ain). "Un" contient également [ɛ̃] dans la prononciation contemporaine standard (fusion avec "in" de plus en plus répandue).',
        },
        {
          id: 'trans-pho-01-ex12',
          type: 'qcm',
          question: 'Pourquoi est-il utile de travailler des "paires minimales" (comme du/doux) pour améliorer sa prononciation ?',
          options: [
            'Ce n\'est pas une méthode efficace',
            'Parce qu\'elles isolent UN SEUL paramètre de différence sonore à la fois, permettant de s\'entraîner précisément sur la distinction qui pose problème',
            'Parce qu\'elles permettent d\'apprendre du vocabulaire nouveau uniquement',
            'Parce qu\'elles n\'ont aucun rapport avec la phonétique',
          ],
          correctIndex: 1,
          explanation: 'Les PAIRES MINIMALES isolent UN SEUL paramètre de différence sonore (ici, [y] vs [u], le reste du mot étant identique), permettant de s\'ENTRAÎNER PRÉCISÉMENT sur la distinction PROBLÉMATIQUE sans la complexité de mots complètement différents. C\'est une méthode pédagogique RECONNUE en phonétique appliquée.',
        },
        {
          id: 'trans-pho-01-ex13',
          type: 'qcm',
          question: 'Quelle voyelle nasale trouve-t-on dans le mot "dans" ?',
          options: ['[õ]', '[ã]', '[ɛ̃]', '[y]'],
          correctIndex: 1,
          explanation: '"DANS" contient la voyelle nasale [ã] (an/en). C\'est l\'une des 4 voyelles nasales principales du français, distincte de [õ] (on), [ɛ̃] (in/ain/un) et bien sûr des voyelles orales comme [y].',
        },
        {
          id: 'trans-pho-01-ex14',
          type: 'qcm',
          question: 'Comment se distingue articulatoirement [u] (comme dans "sous") de [y] (comme dans "su") ?',
          options: [
            'Ils sont articulés de façon identique',
            '[u] a la langue en position arrière, [y] a la langue en position avant, les deux gardant les lèvres arrondies',
            '[u] a les lèvres non arrondies, [y] a les lèvres arrondies',
            '[u] se prononce avec le nez, [y] avec la bouche uniquement',
          ],
          correctIndex: 1,
          explanation: '[u] (sous) : langue en position ARRIÈRE + lèvres ARRONDIES. [y] (su) : langue en position AVANT + lèvres également ARRONDIES. La différence clé est donc la POSITION DE LA LANGUE (avant vs arrière), les lèvres restant arrondies dans les deux cas.',
        },
        {
          id: 'trans-pho-01-ex15',
          type: 'qcm',
          question: 'Pourquoi dit-on que la distinction [un]/[in] "s\'efface de plus en plus" dans le français contemporain ?',
          options: [
            'Parce que ces deux sons n\'ont jamais existé',
            'Parce que de nombreux locuteurs français prononcent désormais "un" de la même façon que "in" [ɛ̃], une évolution phonétique progressive observée notamment en France métropolitaine',
            'Parce que cette distinction est obligatoire dans tout le français parlé aujourd\'hui',
            'Parce que cette fusion ne concerne que les départements d\'outre-mer',
          ],
          correctIndex: 1,
          explanation: 'C\'est une ÉVOLUTION PHONÉTIQUE progressive : de nombreux locuteurs français (notamment en France métropolitaine) prononcent désormais "UN" de la même façon que "IN" [ɛ̃], FUSIONNANT ces deux sons historiquement distincts. Cette évolution est documentée par les linguistes et touche particulièrement les jeunes générations.',
        },
        {
          id: 'trans-pho-01-ex16',
          type: 'qcm',
          question: 'Dans quel mot trouve-t-on la voyelle [e] fermée ?',
          options: ['lait', 'été', 'pain', 'sous'],
          correctIndex: 1,
          explanation: '"ÉTÉ" [ete] contient deux occurrences de la voyelle [e] FERMÉE. "Lait" contient [ɛ] OUVERT. "Pain" contient une voyelle NASALE [ɛ̃]. "Sous" contient [u].',
        },
        {
          id: 'trans-pho-01-ex17',
          type: 'qcm',
          question: 'Quelle est la méthode progressive recommandée pour apprendre à prononcer [y] correctement ?',
          options: [
            'Éviter complètement ce son en le remplaçant systématiquement par [u]',
            'Dire "i" (lèvres étirées), puis sans bouger la langue, arrondir les lèvres pour obtenir [y]',
            'Dire "ou" puis ouvrir grand la bouche',
            'Prononcer [y] sans aucune préparation articulatoire particulière',
          ],
          correctIndex: 1,
          explanation: 'La méthode PROGRESSIVE recommandée consiste à dire "I" (lèvres étirées comme un sourire), puis, SANS BOUGER LA LANGUE, à ARRONDIR LES LÈVRES progressivement jusqu\'à obtenir [y]. Cette technique kinesthésique aide à PRENDRE CONSCIENCE de la position exacte nécessaire pour ce son spécifique au français.',
        },
        {
          id: 'trans-pho-01-ex18',
          type: 'qcm',
          question: 'Pourquoi la maîtrise précise des voyelles est-elle particulièrement importante pour la compréhension orale en français, plus que dans certaines autres langues ?',
          options: [
            'Ce n\'est pas particulièrement important en français',
            'Parce que le français possède de nombreuses paires de mots qui ne se distinguent QUE par une voyelle, rendant la précision vocalique cruciale pour éviter les ambiguïtés de sens',
            'Parce que le français n\'a aucune consonne distinctive',
            'Parce que toutes les voyelles françaises se prononcent de la même façon',
          ],
          correctIndex: 1,
          explanation: 'Le français possède de NOMBREUSES PAIRES de mots qui se distinguent UNIQUEMENT par une VOYELLE (du/doux, su/sous, vu/vous...), rendant la PRÉCISION VOCALIQUE particulièrement CRUCIALE pour éviter les AMBIGUÏTÉS de sens, tant en production (être compris) qu\'en compréhension (bien identifier le mot entendu).',
        },
        {
          id: 'trans-pho-01-ex19',
          type: 'qcm',
          question: 'Quel terme phonétique désigne le fait d\'arrondir les lèvres pendant la prononciation d\'une voyelle ?',
          options: ['Nasalisation', 'Labialisation (ou arrondissement)', 'Dévoisement', 'Diphtongaison'],
          correctIndex: 1,
          explanation: '"LABIALISATION" (ou ARRONDISSEMENT) désigne le fait d\'arrondir les lèvres pendant la prononciation d\'un son. C\'est ce paramètre, combiné à la position de la langue, qui distingue [i] (non labialisé) de [y] (labialisé), ou [a] (non labialisé) de [o]/[u] (labialisés).',
        },
        {
          id: 'trans-pho-01-ex20',
          type: 'qcm',
          question: 'En synthèse, pourquoi un travail systématique sur les voyelles françaises est-il particulièrement bénéfique pour un apprenant avancé (B1/B2) ?',
          options: [
            'Ce travail n\'a aucun intérêt à un niveau avancé',
            'Parce qu\'à un niveau avancé, les erreurs de vocabulaire et de grammaire diminuent, mais les imprécisions de prononciation peuvent rester un obstacle résiduel à une communication fluide et à une bonne compréhension orale',
            'Parce que les voyelles ne sont importantes qu\'au niveau débutant',
            'Parce que ce travail remplace complètement l\'apprentissage du vocabulaire',
          ],
          correctIndex: 1,
          explanation: 'À un niveau AVANCÉ (B1/B2), les erreurs de VOCABULAIRE et de GRAMMAIRE diminuent généralement, mais les IMPRÉCISIONS de PRONONCIATION (notamment vocaliques) peuvent persister et rester un OBSTACLE RÉSIDUEL à une COMMUNICATION FLUIDE et à une bonne COMPRÉHENSION ORALE des natifs, d\'où l\'intérêt de ce travail systématique même à ce stade avancé.',
        },
      ],
    },

    {
      id: 'trans-pho-02',
      slug: 'trans-liaisons',
      moduleSlug: 'transversal-phonetique',
      level: 'transversal',
      title: 'Les liaisons en français',
      description: 'Distinguer les liaisons obligatoires, interdites et facultatives pour une prononciation fluide.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Qu'est-ce qu'une liaison ?

La liaison consiste à prononcer la consonne finale (normalement muette) d'un mot quand le mot suivant commence par une voyelle.

**Liaisons OBLIGATOIRES**
- Déterminant + nom : "les_amis" [lezami], "un_homme" [œ̃nɔm]
- Pronom + verbe : "nous_avons" [nuzavõ], "ils_ont" [ilzõ]
- Adjectif + nom (avant le nom) : "un grand_homme" [œ̃ɡʀãtɔm]
- Préposition courte + nom : "chez_elle" [ʃezɛl], "dans_un" [dãzœ̃]

**Liaisons INTERDITES**
- Après un nom singulier + adjectif suivant : "un étudiant / et brillant" (PAS de liaison entre "étudiant" et "et")
- Après "et" : "lui et / elle" (jamais "lui èT elle")
- Devant un "h aspiré" : "les / héros" (pas "lezéros") vs "les_hommes" (h muet, liaison normale)
- Après un nom au singulier suivi d'un verbe : "Mon frère / arrive" (pas de liaison)

**Liaisons FACULTATIVES (registre soutenu)**
- Après "être" : "il est_arrivé" (soutenu) vs "il est / arrivé" (plus courant à l'oral familier)
- Après certains adverbes : "pas_encore" (courant) vs "trop / souvent" (variable)

**Pourquoi maîtriser les liaisons est essentiel**
Une liaison manquée ou ajoutée à tort ("liaison fautive", comme "*vingt-quatre heures" prononcé avec un T ajouté) peut rendre le discours moins fluide et signaler un niveau moins avancé.`,

      linguisticPoint: `## Point linguistique : Le "h aspiré" et son effet sur la liaison

### h muet vs h aspiré : une distinction invisible à l'écrit mais cruciale à l'oral
- **h muet** : se comporte comme si le mot commençait par une voyelle → liaison normale
  "les_hommes" [lezɔm], "les_héros" → NON, attention "héros" est h ASPIRÉ !
- **h aspiré** : empêche la liaison ET l'élision
  "les / héros" [le ero] (pas de liaison) / "le héros" (pas "l'héros")

### Liste de mots fréquents en h aspiré (à mémoriser)
le héros, le hasard, le hibou, la harpe, la honte, le homard, haut, en haut

### Liste de mots fréquents en h muet (liaison normale)
l'homme, l'hôtel, l'heure, l'histoire, l'habitude, les_huîtres

### Astuce pratique
Il n'existe pas de règle visuelle simple — il faut MÉMORISER les mots à h aspiré au fur et à mesure de leur rencontre, car ils sont moins nombreux que les mots à h muet.`,

      keyPoints: [
        'Liaison obligatoire : déterminant+nom / pronom+verbe / adjectif (avant nom)+nom / prép. courte+nom',
        'Liaison interdite : nom singulier+adjectif suivant / après "et" / devant h aspiré / nom sing.+verbe',
        'Liaison facultative : registre soutenu après "être", certains adverbes',
        'h ASPIRÉ (héros, hasard, hibou, harpe, honte, homard, haut) = empêche liaison ET élision',
        'h MUET (homme, hôtel, heure, histoire) = liaison normale, comme une voyelle',
      ],

      exercises: [
        {
          id: 'trans-pho-02-ex01',
          type: 'qcm',
          question: 'Quelle liaison est OBLIGATOIRE ?',
          options: [
            '"un étudiant / et brillant" (pas de liaison)',
            '"les_amis" (déterminant + nom)',
            '"les / héros" (h aspiré)',
            '"lui et / elle" (après "et")',
          ],
          correctIndex: 1,
          explanation: '"LES_AMIS" [lezami] : liaison OBLIGATOIRE entre un déterminant ("les") et un nom commençant par une voyelle ("amis"). C\'est l\'une des catégories de liaison les plus systématiques et fondamentales en français.',
        },
        {
          id: 'trans-pho-02-ex02',
          type: 'qcm',
          question: 'Pourquoi ne fait-on PAS la liaison dans "les / héros" ?',
          options: [
            'Parce que "héros" commence par une consonne',
            'Parce que "héros" a un "h aspiré", qui empêche la liaison',
            'Parce que "les" ne permet jamais la liaison',
            'Parce que "héros" est un mot rare',
          ],
          correctIndex: 1,
          explanation: '"HÉROS" a un H ASPIRÉ (malgré l\'orthographe avec H), qui EMPÊCHE la liaison ET l\'élision, comme s\'il commençait par une consonne. C\'est pourquoi on dit "les / héros" [le ero] et non "les_héros" [lezero].',
        },
        {
          id: 'trans-pho-02-ex03',
          type: 'qcm',
          question: 'Quelle liaison est INTERDITE ?',
          options: [
            '"nous_avons" (pronom + verbe)',
            '"un_homme" (déterminant + nom)',
            '"lui et / elle" (après "et")',
            '"chez_elle" (préposition + nom)',
          ],
          correctIndex: 2,
          explanation: '"LUI ET / ELLE" : la liaison est INTERDITE après "ET" (jamais "lui éT elle"). C\'est une règle fixe et importante à respecter, contrairement aux autres exemples qui illustrent des liaisons obligatoires correctes.',
        },
        {
          id: 'trans-pho-02-ex04',
          type: 'qcm',
          question: 'Quel mot fait partie de la liste des "h aspirés" fréquents à mémoriser ?',
          options: ['homme', 'hôtel', 'héros', 'heure'],
          correctIndex: 2,
          explanation: '"HÉROS" est un H ASPIRÉ fréquent (avec hasard, hibou, harpe, honte, homard, haut). "Homme", "hôtel" et "heure" sont des H MUETS, permettant la liaison normale ("l\'homme", "l\'hôtel", "l\'heure").',
        },
        {
          id: 'trans-pho-02-ex05',
          type: 'qcm',
          question: 'Liaison facultative (registre soutenu) : laquelle de ces phrases illustre ce type de liaison ?',
          options: [
            '"les_amis" (toujours obligatoire)',
            '"il est_arrivé" (soutenu) vs "il est / arrivé" (plus courant à l\'oral familier)',
            '"un étudiant / et brillant" (toujours interdite)',
            '"les / héros" (toujours interdite, h aspiré)',
          ],
          correctIndex: 1,
          explanation: '"Il EST_arrivé" (avec liaison, registre SOUTENU) vs "il est / arrivé" (sans liaison, plus COURANT à l\'oral familier) illustre une liaison FACULTATIVE — le choix dépend du REGISTRE de langue employé, contrairement aux liaisons obligatoires ou interdites qui sont fixes.',
        },
        {
          id: 'trans-pho-02-ex06',
          type: 'qcm',
          question: 'Pourquoi dit-on "un grand_homme" avec liaison, alors qu\'on ne ferait pas la liaison dans "un étudiant / arrive" ?',
          options: [
            'Il n\'y a en réalité aucune différence de règle',
            'Dans "un grand homme", l\'adjectif est placé AVANT le nom (liaison obligatoire adjectif+nom), tandis que dans "étudiant arrive", c\'est un nom singulier suivi directement d\'un verbe (catégorie où la liaison est généralement absente)',
            '"Grand" ne permet jamais la liaison',
            'Le nom "homme" empêche toujours la liaison',
          ],
          correctIndex: 1,
          explanation: 'Dans "un GRAND_homme", l\'ADJECTIF (grand) est placé AVANT le NOM (homme) → catégorie de liaison OBLIGATOIRE (adjectif+nom). Dans "étudiant / arrive", c\'est un NOM SINGULIER suivi d\'un VERBE → cette liaison est généralement ABSENTE en français standard (catégorie différente avec ses propres règles).',
        },
        {
          id: 'trans-pho-02-ex07',
          type: 'qcm',
          question: 'Quel mot fait partie de la liste des "h muets" fréquents, permettant la liaison ?',
          options: ['hasard', 'hibou', 'histoire', 'harpe'],
          correctIndex: 2,
          explanation: '"HISTOIRE" est un H MUET, permettant la liaison normale ("l\'histoire", "les_histoires"). "Hasard", "hibou" et "harpe" sont des H ASPIRÉS, empêchant la liaison.',
        },
        {
          id: 'trans-pho-02-ex08',
          type: 'qcm',
          question: 'Que se passe-t-il si on prononce une "liaison fautive" comme un "t" ajouté à tort dans certaines expressions ?',
          options: [
            'Cela n\'a aucun effet sur la perception du discours',
            'Cela peut rendre le discours moins fluide et signaler un niveau de maîtrise du français moins avancé',
            'Cela améliore toujours la fluidité du discours',
            'C\'est toujours la règle correcte à appliquer systématiquement',
          ],
          correctIndex: 1,
          explanation: 'Une "liaison FAUTIVE" (ajoutée à TORT là où elle ne devrait pas exister) peut rendre le discours moins FLUIDE et naturel, et peut signaler aux oreilles d\'un locuteur natif un niveau de MAÎTRISE moins AVANCÉ du français, même si le reste du discours est par ailleurs correct.',
        },
        {
          id: 'trans-pho-02-ex09',
          type: 'qcm',
          question: 'Liaison obligatoire pronom+verbe : laquelle de ces phrases illustre cette catégorie ?',
          options: [
            '"un étudiant / arrive"',
            '"ils_ont fini"',
            '"les / héros sont"',
            '"lui et / elle"',
          ],
          correctIndex: 1,
          explanation: '"ILS_ONT fini" [ilzõ] illustre la liaison OBLIGATOIRE entre un PRONOM ("ils") et un VERBE ("ont"). Cette catégorie de liaison (pronom sujet + verbe) est systématique et fondamentale en français standard.',
        },
        {
          id: 'trans-pho-02-ex10',
          type: 'qcm',
          question: 'Pourquoi n\'existe-t-il pas de règle visuelle simple pour distinguer h muet et h aspiré ?',
          options: [
            'Parce que cette distinction n\'existe pas vraiment en français',
            'Parce que l\'orthographe ne marque pas cette différence — les deux types de H s\'écrivent de la même façon, la distinction étant purement historique et devant être mémorisée mot par mot',
            'Parce que tous les mots commençant par H sont des h aspirés',
            'Parce que tous les mots commençant par H sont des h muets',
          ],
          correctIndex: 1,
          explanation: 'L\'ORTHOGRAPHE ne marque PAS cette différence — les deux types de H (muet et aspiré) s\'écrivent de la MÊME FAÇON. La distinction est d\'origine HISTORIQUE (certains mots ont gardé une trace de prononciation ancienne du H) et doit être MÉMORISÉE mot par mot, sans règle visuelle généralisable.',
        },
        {
          id: 'trans-pho-02-ex11',
          type: 'qcm',
          question: 'Liaison interdite : pourquoi ne fait-on PAS la liaison dans "Mon frère / arrive" ?',
          options: [
            'Parce que "frère" se termine par une voyelle',
            'Parce qu\'un nom singulier suivi directement d\'un verbe ne fait généralement pas de liaison en français standard',
            'Parce que "arrive" commence par une consonne',
            'Parce que cette liaison est en réalité obligatoire',
          ],
          correctIndex: 1,
          explanation: 'Un NOM SINGULIER suivi DIRECTEMENT d\'un VERBE ne fait généralement PAS de liaison en français STANDARD ("mon frère / arrive", pas de liaison entre "frère" et "arrive"). Cette absence de liaison distingue cette catégorie des liaisons obligatoires comme déterminant+nom ou pronom+verbe.',
        },
        {
          id: 'trans-pho-02-ex12',
          type: 'qcm',
          question: 'Quel mot fait partie de la liste des "h aspirés" fréquents ?',
          options: ['habitude', 'huître', 'honte', 'hôtel'],
          correctIndex: 2,
          explanation: '"HONTE" est un H ASPIRÉ ("la honte", jamais "l\'honte"). "Habitude", "huître" et "hôtel" sont des H MUETS, permettant l\'élision et la liaison ("l\'habitude", "les_huîtres", "l\'hôtel").',
        },
        {
          id: 'trans-pho-02-ex13',
          type: 'qcm',
          question: 'Liaison obligatoire avec préposition courte : laquelle de ces phrases illustre cette catégorie ?',
          options: [
            '"un étudiant / arrive"',
            '"chez_elle" (chez + elle)',
            '"les / héros"',
            '"lui et / elle"',
          ],
          correctIndex: 1,
          explanation: '"CHEZ_ELLE" [ʃezɛl] illustre la liaison OBLIGATOIRE avec une PRÉPOSITION COURTE ("chez") suivie d\'un mot commençant par une voyelle ("elle"). D\'autres prépositions courtes comme "dans", "sans" suivent la même règle.',
        },
        {
          id: 'trans-pho-02-ex14',
          type: 'qcm',
          question: 'Pourquoi la liaison après "et" est-elle systématiquement interdite ?',
          options: [
            'Cette règle n\'existe pas réellement',
            'C\'est une règle fixe et conventionnelle du français : "et" ne fait jamais de liaison avec le mot suivant, même s\'il commence par une voyelle',
            'Parce que "et" se termine toujours par une consonne',
            'Parce que cette liaison est en réalité facultative selon le contexte',
            ],
          correctIndex: 1,
          explanation: 'C\'est une RÈGLE FIXE et CONVENTIONNELLE du français : "ET" ne fait JAMAIS de liaison avec le mot suivant, même s\'il commence par une voyelle ("lui et / elle", jamais "lui éT elle"). Cette règle n\'a pas vraiment d\'explication phonétique profonde — elle est simplement une CONVENTION établie de la langue.',
        },
        {
          id: 'trans-pho-02-ex15',
          type: 'qcm',
          question: 'Quelle est la différence entre "le héros" et "l\'homme" en termes d\'élision ?',
          options: [
            'Les deux permettent l\'élision de la même façon',
            '"Le héros" ne permet PAS l\'élision (h aspiré, donc "le" reste entier), tandis que "l\'homme" permet l\'élision (h muet, "le" devient "l\'")',
            '"Le héros" permet toujours l\'élision',
            '"L\'homme" ne permet jamais l\'élision',
          ],
          correctIndex: 1,
          explanation: '"LE HÉROS" (h aspiré) NE PERMET PAS l\'élision — "le" reste ENTIER, comme devant une consonne. "L\'HOMME" (h muet) PERMET l\'élision — "le" devient "l\'", comme devant une voyelle normale. Le H aspiré bloque à la fois la LIAISON et l\'ÉLISION.',
        },
        {
          id: 'trans-pho-02-ex16',
          type: 'qcm',
          question: 'Liaison obligatoire adjectif+nom : pourquoi "un grand_homme" fait-il la liaison, mais pas "un homme grand" ?',
          options: [
            'Il n\'y a aucune différence entre les deux ordres',
            'La liaison obligatoire adjectif+nom ne s\'applique que lorsque l\'adjectif précède le nom ; quand l\'adjectif suit (un homme / grand), il n\'y a généralement pas de liaison',
            '"Grand" ne fait jamais de liaison dans aucun contexte',
            'Les deux phrases sont incorrectes',
          ],
          correctIndex: 1,
          explanation: 'La liaison OBLIGATOIRE adjectif+nom s\'applique SPÉCIFIQUEMENT lorsque l\'ADJECTIF PRÉCÈDE le NOM ("un grand_homme"). Quand l\'adjectif SUIT le nom ("un homme / grand"), cette structure ressemble davantage à nom+adjectif (catégorie différente), où la liaison n\'est généralement PAS appliquée.',
        },
        {
          id: 'trans-pho-02-ex17',
          type: 'qcm',
          question: 'Pourquoi est-il recommandé de mémoriser les mots à "h aspiré" au fur et à mesure de leur rencontre, plutôt que d\'essayer d\'appliquer une règle générale ?',
          options: [
            'Parce qu\'il existe une règle visuelle simple pour les identifier',
            'Parce qu\'il n\'existe pas de règle visuelle ou systématique pour distinguer h muet et h aspiré, et qu\'ils sont en nombre limité (donc mémorisables progressivement)',
            'Parce que ces mots changent constamment de catégorie',
            'Parce que cette distinction n\'a aucune importance pratique',
          ],
          correctIndex: 1,
          explanation: 'Comme il N\'EXISTE PAS de règle VISUELLE ou systématique pour distinguer h muet et h aspiré, et que les mots à H ASPIRÉ sont relativement LIMITÉS en nombre (par rapport aux H muets, plus nombreux), la stratégie la plus EFFICACE est de les MÉMORISER PROGRESSIVEMENT au fil de leur rencontre dans la lecture et l\'écoute.',
        },
        {
          id: 'trans-pho-02-ex18',
          type: 'qcm',
          question: 'Liaison interdite nom singulier+adjectif suivant : pourquoi ne fait-on pas la liaison dans "un étudiant / brillant" si "brillant" suit directement (sans "et") ?',
          options: [
            'En réalité, cette liaison se ferait normalement dans ce contexte',
            'Quand l\'adjectif suit le nom (plutôt que de le précéder), la liaison n\'est généralement pas appliquée, contrairement à la structure adjectif+nom qui exige une liaison obligatoire',
            'Parce que "étudiant" se termine toujours par une voyelle',
            'Parce que "brillant" commence par une consonne',
          ],
          correctIndex: 1,
          explanation: 'Quand l\'ADJECTIF SUIT le NOM (structure NOM+ADJECTIF, comme "étudiant brillant"), la LIAISON n\'est généralement PAS appliquée en français standard, contrairement à la structure ADJECTIF+NOM (comme "grand homme") qui EXIGE une liaison OBLIGATOIRE. L\'ORDRE des mots détermine donc le comportement de liaison.',
        },
        {
          id: 'trans-pho-02-ex19',
          type: 'qcm',
          question: 'Quelle est la fonction communicative principale d\'une bonne maîtrise des liaisons en français ?',
          options: [
            'Aucune fonction particulière, c\'est purement décoratif',
            'Faciliter la fluidité et la compréhension du discours oral, en respectant les conventions phonétiques attendues par les locuteurs natifs',
            'Compliquer artificiellement la communication',
            'Remplacer complètement la grammaire',
          ],
          correctIndex: 1,
          explanation: 'Une bonne MAÎTRISE des liaisons facilite la FLUIDITÉ et la COMPRÉHENSION du discours ORAL, en respectant les CONVENTIONS PHONÉTIQUES attendues par les locuteurs NATIFS. Des liaisons absentes ou ajoutées à tort peuvent créer des HÉSITATIONS de compréhension ou signaler un accent moins NATUREL, même si le vocabulaire et la grammaire sont par ailleurs corrects.',
        },
        {
          id: 'trans-pho-02-ex20',
          type: 'qcm',
          question: 'En synthèse, quelle stratégie d\'apprentissage est recommandée pour maîtriser progressivement le système complexe des liaisons françaises ?',
          options: [
            'Mémoriser une liste exhaustive de toutes les règles sans jamais les pratiquer à l\'oral',
            'Apprendre progressivement les catégories principales (obligatoire/interdite/facultative), mémoriser les mots à h aspiré les plus fréquents, et s\'exposer régulièrement à l\'oral authentique pour développer une intuition naturelle',
            'Éviter complètement de faire des liaisons pour ne jamais se tromper',
            'Faire systématiquement toutes les liaisons possibles, qu\'elles soient correctes ou non',
          ],
          correctIndex: 1,
          explanation: 'La stratégie RECOMMANDÉE combine : apprentissage PROGRESSIF des CATÉGORIES principales (obligatoire/interdite/facultative), MÉMORISATION des mots à H ASPIRÉ les plus FRÉQUENTS, et EXPOSITION RÉGULIÈRE à l\'oral AUTHENTIQUE (conversations, médias) pour développer une INTUITION NATURELLE des liaisons, au-delà de la simple application mécanique de règles théoriques.',
        },
      ],
    },

    {
      id: 'trans-pho-03',
      slug: 'trans-intonation',
      moduleSlug: 'transversal-phonetique',
      level: 'transversal',
      title: 'L\'intonation française',
      description: 'Maîtriser les mélodies de la phrase pour exprimer question, affirmation, énumération et émotion.',
      duration: 12,
      free: false,
      dialogue: `## Texte : La musique de la phrase française

L'intonation (la mélodie de la voix) transmet autant d'information que les mots eux-mêmes. Une même phrase peut changer de sens selon l'intonation employée.

**L'intonation montante : la question**
"Tu viens ?" — la voix MONTE en fin de phrase, signalant une question SANS avoir besoin d'inverser le sujet et le verbe ni d'utiliser "est-ce que".
C'est la façon la PLUS COURANTE de poser une question à l'oral familier.

**L'intonation descendante : l'affirmation**
"Tu viens." — la voix DESCEND en fin de phrase, signalant une déclaration, une certitude.

**L'intonation de l'énumération**
Chaque élément d'une liste se termine par une légère MONTÉE, sauf le DERNIER élément qui DESCEND :
"J'ai acheté du pain ↗, du lait ↗, des œufs ↗ et du beurre ↘." (la descente finale signale la FIN de la liste)

**L'intonation de l'incise et de la parenthèse**
La voix BAISSE légèrement de hauteur pour une information secondaire entre virgules :
"Mon frère, qui habite à Lyon (voix plus basse), vient nous voir." Puis elle reprend la hauteur initiale.

**L'intonation expressive (surprise, doute, ironie)**
"Ah bon ?!" (montée forte = surprise) vs "Ah bon." (descente = constat neutre, parfois légèrement déçu)`,

      linguisticPoint: `## Point linguistique : Les 3 fonctions principales de l'intonation

### 1. Fonction GRAMMATICALE (distinguer question/affirmation)
"Il vient." (descendant = affirmation) vs "Il vient ?" (montant = question)
Sans intonation appropriée, ces deux phrases identiques à l'écrit seraient INDISTINGUABLES à l'oral.

### 2. Fonction STRUCTURANTE (organiser l'information)
L'intonation aide à délimiter les groupes de mots (groupes rythmiques), à signaler le début/fin d'une liste, à marquer les parenthèses.

### 3. Fonction EXPRESSIVE (transmettre une émotion ou une attitude)
La même phrase "C'est intéressant" peut exprimer un véritable intérêt (intonation neutre/positive) ou un désintérêt poli, voire une ironie (intonation particulière, souvent plus plate ou légèrement descendante de façon marquée).

### Erreur fréquente des apprenants
Garder une intonation "plate" (monotone) sur toute la phrase, sans varier la hauteur — cela rend le discours moins naturel et peut même créer des incompréhensions sur la nature (question/affirmation) de l'énoncé.`,

      keyPoints: [
        'Intonation montante en fin de phrase = question (sans inversion ni "est-ce que")',
        'Intonation descendante en fin de phrase = affirmation/certitude',
        'Énumération : montée sur chaque élément SAUF le dernier qui descend (signale la fin)',
        'Incise/parenthèse : la voix baisse légèrement puis reprend sa hauteur initiale',
        '3 fonctions : grammaticale (distinguer question/affirmation) / structurante (organiser) / expressive (émotion)',
      ],

      exercises: [
        {
          id: 'trans-pho-03-ex01',
          type: 'qcm',
          question: 'Comment transformer "Tu viens." en question à l\'oral, sans changer l\'ordre des mots ?',
          options: [
            'En gardant exactement la même intonation',
            'En faisant monter la voix en fin de phrase',
            'En faisant descendre la voix encore plus',
            'En parlant plus fort sans changer la mélodie',
          ],
          correctIndex: 1,
          explanation: 'Pour transformer une affirmation en QUESTION sans changer l\'ordre des mots ni utiliser "est-ce que", il suffit de faire MONTER la voix en FIN de phrase : "Tu viens ?" C\'est la méthode la plus COURANTE pour poser une question à l\'oral familier en français.',
        },
        {
          id: 'trans-pho-03-ex02',
          type: 'qcm',
          question: 'Dans une énumération, comment se comporte l\'intonation sur le DERNIER élément de la liste ?',
          options: [
            'Elle monte comme tous les autres éléments',
            'Elle descend, signalant la fin de la liste',
            'Elle reste exactement plate, sans aucune variation',
            'Elle devient très aiguë et forte',
          ],
          correctIndex: 1,
          explanation: 'Sur le DERNIER élément d\'une énumération, l\'intonation DESCEND, signalant la FIN de la liste. Les éléments PRÉCÉDENTS ont une légère MONTÉE (comme une liste "en cours"), tandis que la descente finale marque la CLÔTURE de l\'énumération.',
        },
        {
          id: 'trans-pho-03-ex03',
          type: 'qcm',
          question: 'Quelle est la fonction "structurante" de l\'intonation ?',
          options: [
            'Distinguer uniquement question et affirmation',
            'Organiser l\'information en délimitant les groupes de mots, les listes et les incises',
            'Exprimer uniquement des émotions fortes',
            'Remplacer complètement la grammaire',
          ],
          correctIndex: 1,
          explanation: 'La fonction STRUCTURANTE de l\'intonation consiste à ORGANISER l\'information en délimitant les GROUPES DE MOTS (groupes rythmiques), en signalant le début/fin d\'une LISTE, et en marquant les INCISES/parenthèses par une légère baisse de hauteur.',
        },
        {
          id: 'trans-pho-03-ex04',
          type: 'qcm',
          question: 'Comment se comporte l\'intonation pour une incise entre virgules ("mon frère, qui habite à Lyon, vient nous voir") ?',
          options: [
            'La voix monte fortement sur l\'incise',
            'La voix baisse légèrement de hauteur sur l\'incise, puis reprend la hauteur initiale après',
            'La voix reste exactement identique du début à la fin de la phrase',
            'L\'incise s\'exprime toujours en chuchotant',
          ],
          correctIndex: 1,
          explanation: 'Pour une INCISE entre virgules (information SECONDAIRE), la voix BAISSE LÉGÈREMENT de hauteur pendant l\'incise, puis REPREND la hauteur INITIALE après. Cette technique signale auditivement le caractère secondaire/parenthétique de l\'information insérée.',
        },
        {
          id: 'trans-pho-03-ex05',
          type: 'qcm',
          question: 'Pourquoi une intonation "plate" (monotone) pose-t-elle problème pour un apprenant de français ?',
          options: [
            'Ce n\'est jamais un problème, l\'intonation n\'a aucune importance',
            'Elle rend le discours moins naturel et peut créer des incompréhensions sur la nature (question/affirmation) de l\'énoncé, en l\'absence d\'autres marqueurs grammaticaux explicites',
            'Elle est toujours préférable à une intonation variée',
            'Elle n\'affecte que la rapidité du débit',
          ],
          correctIndex: 1,
          explanation: 'Une intonation PLATE (monotone) rend le discours moins NATUREL et peut créer des INCOMPRÉHENSIONS sur la NATURE même de l\'énoncé (est-ce une question ou une affirmation ?), surtout dans les cas où l\'intonation est le SEUL marqueur distinctif (sans inversion ni "est-ce que").',
        },
        {
          id: 'trans-pho-03-ex06',
          type: 'qcm',
          question: 'Quelle est la différence entre "Ah bon ?!" et "Ah bon." en termes d\'intonation et de sens ?',
          options: [
            'Aucune différence, les deux expriment exactement la même chose',
            '"Ah bon ?!" (montée forte) exprime la surprise, tandis que "Ah bon." (descente) exprime un constat plus neutre, parfois légèrement déçu',
            '"Ah bon." exprime toujours plus de surprise que "Ah bon ?!"',
            'Les deux s\'écrivent et se prononcent toujours de façon identique',
          ],
          correctIndex: 1,
          explanation: '"Ah bon ?!" (avec une MONTÉE FORTE) exprime la SURPRISE. "Ah bon." (avec une DESCENTE) exprime un CONSTAT plus NEUTRE, parfois avec une nuance de légère déception ou de désintérêt poli. C\'est un excellent exemple de la fonction EXPRESSIVE de l\'intonation, où les mêmes mots changent de sens selon la mélodie employée.',
        },
        {
          id: 'trans-pho-03-ex07',
          type: 'qcm',
          question: 'Quelle est la fonction "grammaticale" de l\'intonation, illustrée par "il vient." vs "il vient ?" ?',
          options: [
            'Exprimer uniquement des émotions',
            'Distinguer une affirmation d\'une question, deux énoncés identiques à l\'écrit mais distincts à l\'oral grâce à l\'intonation',
            'Organiser une liste d\'éléments',
            'Remplacer le vocabulaire',
          ],
          correctIndex: 1,
          explanation: 'La fonction GRAMMATICALE de l\'intonation permet de DISTINGUER une AFFIRMATION ("il vient." — descendant) d\'une QUESTION ("il vient ?" — montant), deux énoncés IDENTIQUES à l\'écrit (mêmes mots, même ordre) mais DISTINCTS à l\'oral uniquement grâce à la mélodie de la voix.',
        },
        {
          id: 'trans-pho-03-ex08',
          type: 'qcm',
          question: 'Dans une énumération comme "du pain, du lait, des œufs et du beurre", comment évolue l\'intonation sur les TROIS premiers éléments ?',
          options: [
            'Elle descend systématiquement sur chaque élément',
            'Elle monte légèrement sur chacun des trois premiers éléments, signalant que la liste continue',
            'Elle reste parfaitement plate sur tous les éléments',
            'Elle devient de plus en plus forte sur chaque élément',
          ],
          correctIndex: 1,
          explanation: 'Sur les TROIS PREMIERS éléments ("du pain ↗, du lait ↗, des œufs ↗"), l\'intonation MONTE légèrement sur chacun, signalant à l\'auditeur que la LISTE CONTINUE. Seul le DERNIER élément ("et du beurre ↘") présente une intonation DESCENDANTE, marquant la fin de l\'énumération.',
        },
        {
          id: 'trans-pho-03-ex09',
          type: 'qcm',
          question: 'Quelle est la méthode la PLUS COURANTE pour poser une question à l\'oral familier en français, sans transformation grammaticale ?',
          options: [
            'Toujours inverser le sujet et le verbe',
            'Toujours utiliser "est-ce que" en début de phrase',
            'Simplement faire monter la voix en fin de phrase déclarative',
            'Toujours ajouter "n\'est-ce pas" à la fin',
          ],
          correctIndex: 2,
          explanation: 'La méthode la PLUS COURANTE et la PLUS SIMPLE pour poser une question à l\'ORAL FAMILIER consiste simplement à FAIRE MONTER LA VOIX en fin de phrase déclarative ("Tu viens ?"), sans aucune transformation grammaticale (ni inversion, ni "est-ce que"). C\'est la stratégie la plus naturelle et la plus fréquente dans la conversation courante.',
        },
        {
          id: 'trans-pho-03-ex10',
          type: 'qcm',
          question: 'Pourquoi dit-on que l\'intonation transmet "autant d\'information que les mots eux-mêmes" ?',
          options: [
            'C\'est une exagération, l\'intonation n\'a aucune importance réelle',
            'Parce qu\'elle peut changer le sens complet d\'un énoncé (question vs affirmation, sincérité vs ironie) sans modifier aucun mot',
            'Parce que les mots ne servent à rien sans intonation',
            'Parce que l\'intonation remplace systématiquement la grammaire écrite',
          ],
          correctIndex: 1,
          explanation: 'L\'intonation peut CHANGER COMPLÈTEMENT le SENS d\'un énoncé (question vs affirmation : "il vient"/"il vient ?" ; sincérité vs ironie : "c\'est intéressant" dit sincèrement ou ironiquement) SANS MODIFIER AUCUN MOT de la phrase. Cette capacité à porter un sens INDÉPENDANT des mots justifie l\'importance accordée à l\'intonation en phonétique.',
        },
        {
          id: 'trans-pho-03-ex11',
          type: 'qcm',
          question: 'Comment se manifeste la fonction "expressive" de l\'intonation dans "C\'est intéressant" dit de façon ironique ?',
          options: [
            'L\'intonation reste exactement identique à une affirmation sincère',
            'L\'intonation se modifie, souvent en devenant plus plate ou en marquant une descente particulière, signalant que le locuteur pense en réalité l\'inverse',
            'L\'intonation monte fortement comme pour une question',
            'L\'intonation n\'a aucun rôle dans l\'expression de l\'ironie',
          ],
          correctIndex: 1,
          explanation: 'Pour exprimer l\'IRONIE, l\'intonation se MODIFIE par rapport à une affirmation SINCÈRE — souvent en devenant plus PLATE ou en marquant une DESCENTE particulière, parfois accompagnée d\'un ton légèrement traînant. Cette modification SIGNALE auditivement que le locuteur pense en réalité l\'INVERSE de ce qu\'il dit littéralement (cf. module Nuances culturelles sur l\'ironie).',
        },
        {
          id: 'trans-pho-03-ex12',
          type: 'qcm',
          question: 'Quelle erreur fréquente les apprenants de français commettent-ils souvent concernant l\'intonation ?',
          options: [
            'Ils varient trop leur intonation, ce qui est toujours un problème',
            'Ils gardent une intonation "plate" sur toute la phrase, sans varier suffisamment la hauteur de la voix',
            'Ils ne font jamais d\'erreur d\'intonation',
            'Ils montent systématiquement la voix sur chaque mot de la phrase',
          ],
          correctIndex: 1,
          explanation: 'Une ERREUR FRÉQUENTE chez les apprenants consiste à garder une intonation "PLATE" (MONOTONE) sur toute la phrase, SANS VARIER suffisamment la hauteur de la voix selon la fonction grammaticale, structurante ou expressive recherchée — ce qui peut nuire à la clarté et au naturel du discours.',
        },
        {
          id: 'trans-pho-03-ex13',
          type: 'qcm',
          question: 'Après une incise entre virgules, que fait l\'intonation ?',
          options: [
            'Elle reste basse jusqu\'à la fin de la phrase',
            'Elle reprend la hauteur initiale qu\'elle avait avant l\'incise',
            'Elle monte de façon continue jusqu\'à la fin',
            'Elle s\'arrête complètement',
          ],
          correctIndex: 1,
          explanation: 'Après une INCISE (information secondaire entre virgules, prononcée avec une voix légèrement plus BASSE), l\'intonation REPREND la HAUTEUR INITIALE qu\'elle avait AVANT l\'incise, permettant de poursuivre naturellement la phrase principale comme si l\'incise n\'avait jamais interrompu le flux.',
        },
        {
          id: 'trans-pho-03-ex14',
          type: 'qcm',
          question: 'Quelle phrase illustre une intonation descendante typique d\'une simple affirmation ?',
          options: ['"Tu viens ?"', '"Tu viens."', '"Tu viens ?!"', 'Aucune de ces phrases'],
          correctIndex: 1,
          explanation: '"Tu viens." (avec un point, sans inversion ni "est-ce que") illustre une AFFIRMATION typique, accompagnée d\'une intonation DESCENDANTE en fin de phrase, exprimant une CERTITUDE ou un CONSTAT, contrairement à "Tu viens ?" qui exige une intonation MONTANTE.',
        },
        {
          id: 'trans-pho-03-ex15',
          type: 'qcm',
          question: 'Pourquoi est-il important pour un apprenant de niveau B1/B2 de continuer à travailler l\'intonation, même si sa grammaire et son vocabulaire sont déjà solides ?',
          options: [
            'Ce n\'est pas important à ce niveau, seule la grammaire compte',
            'Parce que l\'intonation reste l\'un des aspects les plus difficiles à maîtriser parfaitement, et une intonation peu naturelle peut nuire à la fluidité perçue et à la compréhension par les natifs, même avec une grammaire impeccable',
            'Parce que l\'intonation remplace complètement le vocabulaire à ce niveau',
            'Parce que les natifs ne font jamais attention à l\'intonation',
          ],
          correctIndex: 1,
          explanation: 'L\'intonation reste l\'un des aspects les plus DIFFICILES à maîtriser PARFAITEMENT, même à un niveau AVANCÉ (B1/B2) où la grammaire et le vocabulaire sont déjà solides. Une intonation PEU NATURELLE peut nuire à la FLUIDITÉ PERÇUE et même à la COMPRÉHENSION par les locuteurs natifs (confusion question/affirmation), justifiant un travail CONTINU sur cet aspect, souvent négligé par rapport à la grammaire.',
        },
        {
          id: 'trans-pho-03-ex16',
          type: 'qcm',
          question: 'Quelle phrase illustre le mieux une intonation montante typique d\'une question sans inversion ?',
          options: ['"Vient-il demain ?"', '"Est-ce qu\'il vient demain ?"', '"Il vient demain ?"', 'Toutes ces phrases sont identiques en intonation'],
          correctIndex: 2,
          explanation: '"Il vient demain ?" (sans inversion ni "est-ce que", juste une montée de la voix en fin de phrase) illustre l\'INTONATION MONTANTE typique de la question à l\'oral FAMILIER. Les deux autres formes utilisent des MARQUEURS GRAMMATICAUX explicites (inversion, "est-ce que") qui rendent l\'intonation montante moins indispensable (bien qu\'elle puisse aussi être présente).',
        },
        {
          id: 'trans-pho-03-ex17',
          type: 'qcm',
          question: 'Pourquoi le travail sur l\'intonation est-il considéré comme "transversal" plutôt que lié à un niveau spécifique (A2/B1/B2) ?',
          options: [
            'Parce que l\'intonation n\'a de pertinence qu\'au niveau B2',
            'Parce que la maîtrise de l\'intonation est utile et perfectible à TOUS les niveaux, des bases (distinguer question/affirmation) aux nuances expressives avancées (ironie, surprise), justifiant son traitement transversal',
            'Parce que l\'intonation ne concerne que l\'écrit, jamais l\'oral',
            'Parce que l\'intonation est identique dans toutes les langues du monde',
          ],
          correctIndex: 1,
          explanation: 'La maîtrise de l\'intonation est UTILE et PERFECTIBLE à TOUS les niveaux : des BASES (distinguer question/affirmation, niveau A2/B1) aux NUANCES EXPRESSIVES plus AVANCÉES (ironie, surprise, incise complexe, niveau B2+). Cette PROGRESSIVITÉ continue justifie son traitement comme module TRANSVERSAL, applicable et approfondi à chaque étape de l\'apprentissage.',
        },
        {
          id: 'trans-pho-03-ex18',
          type: 'qcm',
          question: 'Quelle est la différence entre l\'intonation d\'une liste en cours et celle de la fin d\'une liste ?',
          options: [
            'Aucune différence, l\'intonation reste identique sur tous les éléments',
            'Les éléments en cours de liste ont une légère montée, tandis que le dernier élément a une intonation descendante marquant la conclusion',
            'Tous les éléments ont une intonation descendante, y compris le dernier',
            'Seul le premier élément a une intonation particulière',
          ],
          correctIndex: 1,
          explanation: 'Les éléments EN COURS de liste (sauf le dernier) ont une LÉGÈRE MONTÉE, signalant que d\'autres éléments SUIVENT. Le DERNIER élément a une intonation DESCENDANTE, marquant la CONCLUSION de l\'énumération. Cette structure mélodique aide l\'auditeur à anticiper la fin de la liste sans avoir besoin de la voir écrite.',
        },
        {
          id: 'trans-pho-03-ex19',
          type: 'qcm',
          question: 'Comment l\'intonation peut-elle aider à comprendre qu\'une phrase contient une information "secondaire" plutôt que principale ?',
          options: [
            'Elle ne peut jamais aider à cette distinction',
            'Une baisse de hauteur de la voix sur un segment de la phrase (incise entre virgules) signale que cette information est secondaire/parenthétique par rapport au reste de la phrase',
            'Toute information est toujours prononcée avec la même hauteur de voix',
            'Seule la ponctuation écrite peut indiquer cette distinction, jamais l\'oral',
          ],
          correctIndex: 1,
          explanation: 'Une BAISSE de HAUTEUR de la voix sur un SEGMENT de la phrase (typiquement une incise entre virgules) SIGNALE auditivement que cette information est SECONDAIRE ou PARENTHÉTIQUE par rapport au CONTENU PRINCIPAL de la phrase, permettant à l\'auditeur de distinguer l\'essentiel de l\'accessoire SANS avoir besoin de voir la ponctuation écrite.',
        },
        {
          id: 'trans-pho-03-ex20',
          type: 'qcm',
          question: 'En synthèse, pourquoi peut-on dire que l\'intonation est un "système" à part entière, au même titre que la grammaire ou le vocabulaire ?',
          options: [
            'Ce n\'est pas un système organisé, c\'est totalement aléatoire',
            'Parce qu\'elle suit des règles systématiques (montée/descente selon la fonction grammaticale, structurante ou expressive) qui doivent être apprises et maîtrisées, au même titre que les règles de grammaire ou le vocabulaire',
            'Parce qu\'elle remplace entièrement la grammaire',
            'Parce qu\'elle ne concerne que quelques mots isolés',
          ],
          correctIndex: 1,
          explanation: 'L\'intonation suit des RÈGLES SYSTÉMATIQUES (montée pour la question, descente pour l\'affirmation, montée puis descente pour l\'énumération, baisse pour l\'incise...) qui doivent être APPRISES et MAÎTRISÉES, au même titre que les règles de GRAMMAIRE ou le VOCABULAIRE. Cette systématicité justifie de la considérer comme un véritable SYSTÈME LINGUISTIQUE à part entière, et non comme un simple "supplément" décoratif à la langue parlée.',
        },
      ],
    },

    {
      id: 'trans-pho-04',
      slug: 'trans-consonnes-difficiles',
      moduleSlug: 'transversal-phonetique',
      level: 'transversal',
      title: 'Les consonnes difficiles du français',
      description: 'Maîtriser le r français, les sons ch/j, gn et autres consonnes sources de confusion.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Les consonnes qui posent le plus de défis

Certaines consonnes françaises n'existent pas dans toutes les langues ou se réalisent très différemment, créant des défis articulatoires spécifiques.

**Le "r" français [ʀ]**
Le r français est une consonne UVULAIRE (produite au fond de la gorge, près de la luette), très différente du "r" roulé (espagnol, italien) ou du "r" rétroflexe (anglais américain).
- Technique : faites vibrer légèrement l'arrière de la langue contre le voile du palais, comme pour se gargariser doucement.
- Mots d'entraînement : rouge, Paris, rare, prendre, terre.

**[ʃ] "ch" vs [ʒ] "j"**
- [ʃ] (ch) est SOURD (sans vibration des cordes vocales) : chat, chien, marche
- [ʒ] (j/ge) est SONORE (avec vibration) : jour, manger, rouge
Test : posez la main sur la gorge — vous sentirez la vibration pour [ʒ] mais pas pour [ʃ].

**[ɲ] "gn"**
Son unique, absent de nombreuses langues : montagne, campagne, signe [siɲ] (à ne pas confondre avec "singe" [sɛ̃ʒ]).
Technique : position de la langue similaire à [n], mais le dos de la langue touche le palais plus en arrière.

**Les groupes consonantiques difficiles**
"strict", "extrait", "construire" — plusieurs consonnes se succèdent sans voyelle entre elles, ce qui peut être difficile pour des langues qui séparent davantage les consonnes par des voyelles.`,

      linguisticPoint: `## Point linguistique : Sourd vs sonore — une distinction fondamentale

### Le principe acoustique
Une consonne SOURDE se prononce SANS vibration des cordes vocales.
Une consonne SONORE se prononce AVEC vibration des cordes vocales.

### Les paires sourd/sonore en français
| Sourd | Sonore |
|---|---|
| [p] (pain) | [b] (bain) |
| [t] (ton) | [d] (don) |
| [k] (carte) | [g] (garde) |
| [f] (faire) | [v] (vert) |
| [s] (sale) | [z] (zèle) |
| [ʃ] (chat) | [ʒ] (jaune) |

### Technique de vérification
Posez la main (ou les doigts) sur le LARYNX (la pomme d'Adam) en prononçant le son : si vous sentez une VIBRATION, c'est SONORE. Sinon, c'est SOURD.

### Importance pour la compréhension
Confondre sourd et sonore peut créer des malentendus : "poisson" [pwasõ] vs "boisson" [bwasõ] — un seul trait (sourd/sonore) change complètement le sens du mot.`,

      keyPoints: [
        'Le "r" français [ʀ] est uvulaire (fond de gorge), différent du r roulé ou rétroflexe',
        '[ʃ] "ch" est sourd (chat) / [ʒ] "j" est sonore (jour) — vérifier avec la main sur la gorge',
        '[ɲ] "gn" (montagne) = son unique à ne pas confondre avec [ʒ] (singe)',
        'Sourd = sans vibration des cordes vocales / Sonore = avec vibration (test du larynx)',
        'Confusion sourd/sonore peut changer le sens : poisson [p] vs boisson [b]',
      ],

      exercises: [
        {
          id: 'trans-pho-04-ex01',
          type: 'qcm',
          question: 'Où le "r" français est-il principalement articulé ?',
          options: [
            'Avec le bout de la langue contre les dents',
            'Au fond de la gorge, près de la luette (consonne uvulaire)',
            'Avec les lèvres uniquement',
            'En roulant la langue comme en espagnol',
          ],
          correctIndex: 1,
          explanation: 'Le "r" français [ʀ] est une consonne UVULAIRE, articulée au FOND DE LA GORGE, près de la LUETTE — très différent du "r" ROULÉ (espagnol/italien, avec le bout de la langue) ou du "r" RÉTROFLEXE (anglais américain).',
        },
        {
          id: 'trans-pho-04-ex02',
          type: 'qcm',
          question: 'Comment distinguer [ʃ] (ch, comme dans "chat") et [ʒ] (j, comme dans "jour") ?',
          options: [
            'Ils se prononcent de façon identique',
            '[ʃ] est sourd (sans vibration des cordes vocales), [ʒ] est sonore (avec vibration) — testable en posant la main sur la gorge',
            '[ʃ] est sonore, [ʒ] est sourd',
            'La différence est uniquement orthographique, jamais orale',
          ],
          correctIndex: 1,
          explanation: '[ʃ] (chat) est SOURD — aucune vibration des cordes vocales. [ʒ] (jour) est SONORE — vibration perceptible. Le TEST de la main sur la GORGE (larynx) permet de VÉRIFIER concrètement cette différence acoustique.',
        },
        {
          id: 'trans-pho-04-ex03',
          type: 'qcm',
          question: 'Quel mot contient le son [ɲ] (gn) ?',
          options: ['singe', 'montagne', 'manger', 'rouge'],
          correctIndex: 1,
          explanation: '"MONTAGNE" contient le son [ɲ] (gn), un son UNIQUE absent de nombreuses langues. "Singe" contient [ʒ] (g devant e/i). "Manger" et "rouge" contiennent également [ʒ], pas [ɲ].',
        },
        {
          id: 'trans-pho-04-ex04',
          type: 'qcm',
          question: 'Quelle paire de mots illustre la distinction sourd/sonore [p]/[b] ?',
          options: ['chat/jour', 'poisson/boisson', 'montagne/singe', 'rouge/Paris'],
          correctIndex: 1,
          explanation: '"POISSON" [pwasõ] (sourd, [p]) vs "BOISSON" [bwasõ] (sonore, [b]) illustrent parfaitement la distinction SOURD/SONORE qui CHANGE COMPLÈTEMENT le sens du mot, malgré une prononciation très proche par ailleurs.',
        },
        {
          id: 'trans-pho-04-ex05',
          type: 'qcm',
          question: 'Quelle est la technique de vérification pour distinguer une consonne sourde d\'une consonne sonore ?',
          options: [
            'Regarder la forme des lèvres dans un miroir',
            'Poser la main sur le larynx (la pomme d\'Adam) en prononçant le son : une vibration indique une consonne sonore',
            'Compter le nombre de syllabes du mot',
            'Vérifier si le mot est masculin ou féminin',
          ],
          correctIndex: 1,
          explanation: 'La technique consiste à POSER LA MAIN sur le LARYNX (la pomme d\'Adam) en prononçant le son : si on sent une VIBRATION, la consonne est SONORE ([b], [d], [g], [v], [z], [ʒ]) ; si AUCUNE vibration n\'est perceptible, la consonne est SOURDE ([p], [t], [k], [f], [s], [ʃ]).',
        },
        {
          id: 'trans-pho-04-ex06',
          type: 'qcm',
          question: 'Quel est l\'équivalent SONORE de la consonne sourde [s] (comme dans "sale") ?',
          options: ['[ʃ]', '[z]', '[ʒ]', '[f]'],
          correctIndex: 1,
          explanation: '[z] (comme dans "zèle") est l\'équivalent SONORE de [s] (sale) — même position articulatoire, mais avec VIBRATION des cordes vocales. C\'est l\'une des 6 paires sourd/sonore principales du français.',
        },
        {
          id: 'trans-pho-04-ex07',
          type: 'qcm',
          question: 'Pourquoi le "r" français est-il souvent difficile pour les locuteurs de langues utilisant un "r" roulé (comme l\'espagnol) ?',
          options: [
            'Parce que le r français n\'existe pas réellement',
            'Parce que les deux types de "r" sont articulés de façon très différente (uvulaire au fond de la gorge pour le français vs apical avec le bout de la langue pour le r roulé), nécessitant un réapprentissage articulatoire complet',
            'Parce que le r français se prononce exactement comme le r roulé',
            'Parce que le r français n\'apparaît jamais en début de mot',
          ],
          correctIndex: 1,
          explanation: 'Le "r" FRANÇAIS (uvulaire, fond de la gorge) et le "r" ROULÉ (apical, bout de la langue contre le palais) sont articulés de façon TRÈS DIFFÉRENTE, bien qu\'ils soient représentés par la même LETTRE. Les locuteurs habitués au r roulé doivent donc RÉAPPRENDRE complètement la position articulatoire pour produire le r français de façon naturelle.',
        },
        {
          id: 'trans-pho-04-ex08',
          type: 'qcm',
          question: 'Quel est l\'équivalent SOURD de la consonne sonore [v] (comme dans "vert") ?',
          options: ['[b]', '[f]', '[z]', '[ʒ]'],
          correctIndex: 1,
          explanation: '[f] (comme dans "faire") est l\'équivalent SOURD de [v] (vert) — même position articulatoire (les lèvres et les dents), mais SANS vibration des cordes vocales.',
        },
        {
          id: 'trans-pho-04-ex09',
          type: 'qcm',
          question: 'Quelle technique aide à prononcer correctement le son [ɲ] (gn) ?',
          options: [
            'Mettre la langue dans la même position que pour [n], mais le dos de la langue touche le palais plus en arrière',
            'Ne jamais toucher le palais avec la langue',
            'Prononcer ce son uniquement avec les lèvres',
            'Faire vibrer les lèvres comme pour [b]',
          ],
          correctIndex: 0,
          explanation: 'Pour [ɲ] (gn), la position de la LANGUE est SIMILAIRE à celle de [n], mais le DOS de la langue touche le PALAIS PLUS EN ARRIÈRE que pour [n] simple. Cette nuance articulatoire produit ce son SPÉCIFIQUE au français, absent de nombreuses autres langues.',
        },
        {
          id: 'trans-pho-04-ex10',
          type: 'qcm',
          question: 'Quels mots illustrent un groupe consonantique difficile (plusieurs consonnes successives sans voyelle) ?',
          options: ['chat, jour', 'strict, extrait', 'montagne, singe', 'rouge, Paris'],
          correctIndex: 1,
          explanation: '"STRICT" [stʀikt] et "EXTRAIT" [ɛkstʀɛ] contiennent des GROUPES CONSONANTIQUES (plusieurs consonnes successives sans voyelle entre elles : "str", "ct", "ks", "tr"), ce qui peut être DIFFICILE pour des locuteurs dont la langue maternelle sépare davantage les consonnes par des voyelles.',
        },
        {
          id: 'trans-pho-04-ex11',
          type: 'qcm',
          question: 'Quel est l\'équivalent SONORE de la consonne sourde [k] (comme dans "carte") ?',
          options: ['[g]', '[t]', '[p]', '[f]'],
          correctIndex: 0,
          explanation: '[g] (comme dans "garde") est l\'équivalent SONORE de [k] (carte) — même position articulatoire (le dos de la langue contre le voile du palais), mais avec VIBRATION des cordes vocales.',
        },
        {
          id: 'trans-pho-04-ex12',
          type: 'qcm',
          question: 'Comment distinguer "signe" [siɲ] de "singe" [sɛ̃ʒ] ?',
          options: [
            'Ils se prononcent exactement de la même façon',
            'Ils diffèrent à la fois par la voyelle (i simple vs nasale ɛ̃) et par la consonne finale ([ɲ] gn vs [ʒ] g), créant deux mots bien distincts',
            'Seule la consonne finale les distingue, la voyelle étant identique',
            'Seule la voyelle les distingue, la consonne étant identique',
          ],
          correctIndex: 1,
          explanation: '"SIGNE" [siɲ] et "SINGE" [sɛ̃ʒ] diffèrent par DEUX paramètres : la VOYELLE ([i] simple vs [ɛ̃] nasale) ET la CONSONNE FINALE ([ɲ] gn vs [ʒ] g/ge). Ces DEUX différences combinées créent deux mots totalement DISTINCTS, malgré une orthographe et une apparence proches.',
        },
        {
          id: 'trans-pho-04-ex13',
          type: 'qcm',
          question: 'Pourquoi est-il recommandé de s\'entraîner avec des mots comme "rouge, Paris, rare, prendre, terre" pour le "r" français ?',
          options: [
            'Ces mots n\'ont aucun rapport avec la prononciation du r',
            'Ces mots contiennent le son [ʀ] dans des positions variées (initiale, finale, en groupe consonantique), permettant un entraînement systématique de cette consonne difficile',
            'Ces mots sont les seuls contenant la lettre R en français',
            'Ces mots doivent être évités car ils sont trop complexes',
          ],
          correctIndex: 1,
          explanation: 'Ces mots contiennent le son [ʀ] dans des POSITIONS VARIÉES (initiale : "rouge" ; finale : "Paris" ; en groupe consonantique : "prendre"), permettant un ENTRAÎNEMENT SYSTÉMATIQUE et PROGRESSIF de cette consonne difficile dans différents contextes phonétiques.',
        },
        {
          id: 'trans-pho-04-ex14',
          type: 'qcm',
          question: 'Quel est l\'équivalent SOURD de la consonne sonore [d] (comme dans "don") ?',
          options: ['[b]', '[g]', '[t]', '[v]'],
          correctIndex: 2,
          explanation: '[t] (comme dans "ton") est l\'équivalent SOURD de [d] (don) — même position articulatoire (le bout de la langue contre les dents/alvéoles), mais SANS vibration des cordes vocales.',
        },
        {
          id: 'trans-pho-04-ex15',
          type: 'qcm',
          question: 'Pourquoi la confusion entre consonnes sourdes et sonores peut-elle créer des malentendus plus graves que certaines confusions vocaliques ?',
          options: [
            'Ce n\'est jamais le cas, ces confusions n\'ont aucun impact',
            'Parce que de nombreuses paires de mots se distinguent UNIQUEMENT par ce trait sourd/sonore (poisson/boisson, pain/bain...), rendant cette distinction cruciale pour le sens',
            'Parce que les consonnes sourdes n\'existent pas vraiment en français',
            'Parce que toutes les consonnes sonores sont interchangeables sans conséquence',
          ],
          correctIndex: 1,
          explanation: 'De NOMBREUSES PAIRES de mots se distinguent UNIQUEMENT par le trait SOURD/SONORE (poisson/boisson, pain/bain, tout/doux...), rendant cette distinction CRUCIALE pour le SENS du message. Une confusion sur ce point peut donc créer des MALENTENDUS significatifs dans la communication.',
        },
        {
          id: 'trans-pho-04-ex16',
          type: 'qcm',
          question: 'Le son [ʒ] (j/ge) est-il sourd ou sonore ?',
          options: ['Sourd', 'Sonore', 'Ni sourd ni sonore', 'Cela dépend du mot'],
          correctIndex: 1,
          explanation: '[ʒ] (comme dans "jour", "rouge", "manger") est SONORE — on sent une VIBRATION des cordes vocales en le prononçant, contrairement à son équivalent SOURD [ʃ] (comme dans "chat", "marche").',
        },
        {
          id: 'trans-pho-04-ex17',
          type: 'qcm',
          question: 'Quelle est l\'origine de la difficulté articulatoire du son [ɲ] pour de nombreux apprenants ?',
          options: [
            'Ce son est extrêmement courant dans toutes les langues du monde',
            'Ce son spécifique (position particulière de la langue contre le palais) est absent de nombreuses langues, nécessitant un apprentissage articulatoire spécifique non transférable depuis la langue maternelle',
            'Ce son n\'existe en réalité pas en français',
            'Ce son se prononce exactement comme [n] sans aucune différence',
          ],
          correctIndex: 1,
          explanation: 'Le son [ɲ] (position SPÉCIFIQUE de la langue contre le palais, différente de [n]) est ABSENT de NOMBREUSES langues à travers le monde, ce qui nécessite un APPRENTISSAGE ARTICULATOIRE SPÉCIFIQUE — l\'apprenant ne peut pas simplement "transférer" un son équivalent depuis sa langue maternelle, contrairement à des sons plus universels.',
        },
        {
          id: 'trans-pho-04-ex18',
          type: 'qcm',
          question: 'Quelle paire illustre la distinction sourd/sonore [f]/[v] ?',
          options: ['chat/jour', 'faire/vert', 'montagne/singe', 'poisson/boisson'],
          correctIndex: 1,
          explanation: '"FAIRE" [f] (sourd) vs "VERT" [v] (sonore) illustrent la paire sourd/sonore [f]/[v]. Les autres paires illustrent [ʃ]/[ʒ] (chat/jour) ou [p]/[b] (poisson/boisson), tandis que "montagne/singe" illustre [ɲ] vs [ʒ].',
        },
        {
          id: 'trans-pho-04-ex19',
          type: 'qcm',
          question: 'Pourquoi est-il utile de connaître les 6 paires sourd/sonore du français de façon systématique ?',
          options: [
            'Ce n\'est pas utile, chaque consonne doit être apprise isolément sans lien avec les autres',
            'Parce que connaître ce système organisé (paires articulées au même endroit, différant uniquement par la vibration) facilite la compréhension et la correction des erreurs de prononciation de façon transférable',
            'Parce que cela permet d\'éviter complètement d\'apprendre la prononciation',
            'Parce que toutes les consonnes sourdes se prononcent de la même façon',
          ],
          correctIndex: 1,
          explanation: 'Connaître ce SYSTÈME ORGANISÉ (paires articulées au MÊME ENDROIT dans la bouche, différant UNIQUEMENT par la VIBRATION des cordes vocales) facilite la COMPRÉHENSION et la CORRECTION des erreurs de prononciation de façon TRANSFÉRABLE : comprendre une paire (comme [p]/[b]) aide à comprendre le principe pour toutes les autres paires.',
        },
        {
          id: 'trans-pho-04-ex20',
          type: 'qcm',
          question: 'En synthèse, pourquoi ces consonnes (r français, ch/j, gn, groupes consonantiques) sont-elles regroupées comme particulièrement "difficiles" pour les apprenants non-natifs ?',
          options: [
            'Parce qu\'elles n\'ont aucune logique articulatoire',
            'Parce qu\'elles impliquent des positions ou combinaisons articulatoires spécifiques au français, souvent absentes ou différentes dans d\'autres langues, nécessitant un entraînement physique ciblé plutôt qu\'une simple mémorisation',
            'Parce qu\'elles sont rarement utilisées dans la langue courante',
            'Parce qu\'elles n\'apparaissent que dans des mots très rares',
          ],
          correctIndex: 1,
          explanation: 'Ces consonnes impliquent des POSITIONS ou COMBINAISONS ARTICULATOIRES SPÉCIFIQUES au français (r uvulaire, distinction sourd/sonore systématique, son [ɲ] unique, groupes consonantiques denses), souvent ABSENTES ou DIFFÉRENTES dans d\'autres langues. Leur maîtrise nécessite un ENTRAÎNEMENT PHYSIQUE CIBLÉ (répétition, conscience articulatoire) plutôt qu\'une simple MÉMORISATION théorique, d\'où leur statut de points particulièrement DIFFICILES à travailler.',
        },
      ],
    },

    {
      id: 'trans-pho-05',
      slug: 'trans-rythme-accent-tonique',
      moduleSlug: 'transversal-phonetique',
      level: 'transversal',
      title: 'Le rythme et l\'accent tonique du français',
      description: 'Comprendre pourquoi le français est une langue à accentuation finale et comment cela structure le débit.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Le français, une langue au rythme particulier

Contrairement à de nombreuses langues, le français n'a pas d'accent tonique LEXICAL (fixe sur une syllabe précise du mot) mais un accent qui porte sur le GROUPE RYTHMIQUE entier.

**L'accent de groupe (pas de mot)**
En français, l'accent tonique porte sur la DERNIÈRE syllabe du GROUPE RYTHMIQUE (un ensemble de mots formant une unité de sens), pas sur un mot isolé.
"Il **part**." (accent sur "part", seul mot du groupe)
"Il part demain **ma**tin." (accent sur la dernière syllabe du groupe entier, pas sur chaque mot)

**Comparaison avec l'anglais (accent lexical fixe)**
En anglais, chaque mot a un accent FIXE peu importe sa position dans la phrase ("PHOto", "phoTOgraphy"). En français, ce type d'accent n'existe pas — c'est la position dans le GROUPE qui compte.

**Le découpage en groupes rythmiques**
Une phrase longue se découpe en plusieurs groupes, chacun avec son propre accent final :
"Le ministre / a annoncé hier soir / une réforme importante." (3 groupes, 3 accents finaux)

**Conséquence pour la fluidité**
Parler français de façon naturelle implique de regrouper les mots en unités de sens cohérentes, sans accentuer chaque mot séparément (erreur fréquente : un débit "haché", mot par mot, avec un accent sur chaque syllabe).

**La syllabation et l'égalité des syllabes**
Le français a tendance à donner une durée plus ÉGALE à chaque syllabe (par rapport à l'anglais, où certaines syllabes sont très réduites/atones) — ce qui contribue à la sensation de "musicalité" régulière du français.`,

      linguisticPoint: `## Point linguistique : Identifier les groupes rythmiques dans une phrase

### Méthode de découpage
1. Identifier les groupes syntaxiques majeurs (sujet, verbe+compléments, compléments circonstanciels)
2. Chaque groupe se termine par un léger ALLONGEMENT et une MONTÉE/DESCENTE de la dernière syllabe
3. Une PAUSE BRÈVE (pas toujours audible, mais perceptible rythmiquement) sépare les groupes

### Exemple de découpage progressif
"Le président de la République / a reçu ce matin / les représentants syndicaux."
- Groupe 1 : "Le président de la République" (accent sur -BLIQUE)
- Groupe 2 : "a reçu ce matin" (accent sur ma-TIN)
- Groupe 3 : "les représentants syndicaux" (accent sur -CAUX)

### Pourquoi éviter d'accentuer CHAQUE mot
Un débit qui accentue chaque mot séparément ("LE pré-SI-dent DE la RÉ-pu-BLIQUE") sonne ARTIFICIEL et "scandé", très différent du flux naturel français qui privilégie les groupes larges.

### Application pratique pour l'oral
S'entraîner à lire des phrases en MARQUANT mentalement les groupes rythmiques avant de les prononcer, pour développer un débit plus fluide et naturel.`,

      keyPoints: [
        'Accent tonique français = sur le GROUPE RYTHMIQUE (dernière syllabe), pas sur un mot fixe isolé',
        'Différence avec l\'anglais : accent LEXICAL fixe par mot vs accent de GROUPE en français',
        'Une phrase longue se découpe en plusieurs groupes rythmiques, chacun avec son accent final',
        'Erreur fréquente à éviter : accentuer chaque mot séparément (débit "haché")',
        'Syllabes françaises = durée plus ÉGALE entre elles (contribue à la musicalité régulière)',
      ],

      exercises: [
        {
          id: 'trans-pho-05-ex01',
          type: 'qcm',
          question: 'Sur quoi porte l\'accent tonique en français ?',
          options: [
            'Toujours sur la première syllabe du mot',
            'Sur la dernière syllabe du groupe rythmique (ensemble de mots formant une unité de sens)',
            'Sur une syllabe fixe pour chaque mot, comme en anglais',
            'Sur chaque syllabe de façon égale, sans aucun accent particulier',
          ],
          correctIndex: 1,
          explanation: 'En français, l\'accent TONIQUE porte sur la DERNIÈRE SYLLABE du GROUPE RYTHMIQUE (un ensemble de mots formant une unité de sens), et non sur une syllabe FIXE d\'un mot isolé comme en anglais.',
        },
        {
          id: 'trans-pho-05-ex02',
          type: 'qcm',
          question: 'Quelle est la différence principale entre l\'accent tonique français et l\'accent tonique anglais ?',
          options: [
            'Il n\'y a aucune différence',
            'L\'anglais a un accent lexical fixe par mot (peu importe sa position), tandis que le français accentue la dernière syllabe du groupe rythmique entier',
            'Le français a un accent fixe par mot, l\'anglais accentue les groupes',
            'Les deux langues accentuent systématiquement la première syllabe',
          ],
          correctIndex: 1,
          explanation: 'En ANGLAIS, chaque mot a un accent LEXICAL FIXE, peu importe sa position dans la phrase ("PHOto" reste "PHOto"). En FRANÇAIS, il n\'y a pas d\'accent fixe par mot — c\'est la position dans le GROUPE RYTHMIQUE (généralement la fin) qui détermine l\'accentuation.',
        },
        {
          id: 'trans-pho-05-ex03',
          type: 'qcm',
          question: 'Dans la phrase "Le ministre / a annoncé hier soir / une réforme importante", combien de groupes rythmiques peut-on identifier ?',
          options: ['1', '2', '3', '5'],
          correctIndex: 2,
          explanation: 'On peut identifier 3 GROUPES RYTHMIQUES : "Le ministre" / "a annoncé hier soir" / "une réforme importante", chacun se terminant par son propre ACCENT sur la dernière syllabe (mi-NISTRE, SOIR, im-por-TANTE).',
        },
        {
          id: 'trans-pho-05-ex04',
          type: 'qcm',
          question: 'Pourquoi est-il considéré comme une erreur fréquente d\'accentuer CHAQUE mot séparément en français ?',
          options: [
            'Ce n\'est pas une erreur, c\'est la méthode recommandée',
            'Cela crée un débit "haché" et artificiel ("scandé"), très différent du flux naturel français qui privilégie les groupes rythmiques larges',
            'Cela rend le discours plus facile à comprendre pour les natifs',
            'Cela n\'a aucun impact sur la perception du discours',
          ],
          correctIndex: 1,
          explanation: 'Accentuer CHAQUE mot séparément crée un débit "HACHÉ" et ARTIFICIEL (parfois décrit comme "SCANDÉ"), très DIFFÉRENT du flux NATUREL français, qui privilégie les GROUPES RYTHMIQUES larges avec un seul accent en fin de groupe, pas un accent répété sur chaque mot.',
        },
        {
          id: 'trans-pho-05-ex05',
          type: 'qcm',
          question: 'Comment se manifeste généralement la fin d\'un groupe rythmique en français ?',
          options: [
            'Par un silence total et prolongé',
            'Par un léger allongement et une montée/descente de hauteur sur la dernière syllabe',
            'Par un changement de sujet complet',
            'Par une accélération soudaine du débit',
          ],
          correctIndex: 1,
          explanation: 'La fin d\'un GROUPE RYTHMIQUE se manifeste généralement par un LÉGER ALLONGEMENT et une VARIATION DE HAUTEUR (montée ou descente selon le sens) sur la DERNIÈRE SYLLABE du groupe, parfois accompagnée d\'une brève PAUSE (pas toujours fortement audible mais rythmiquement perceptible).',
        },
        {
          id: 'trans-pho-05-ex06',
          type: 'qcm',
          question: 'Quelle est la tendance du français concernant la durée des syllabes, par rapport à l\'anglais ?',
          options: [
            'Le français a des syllabes de durée très inégale, comme l\'anglais',
            'Le français a tendance à donner une durée plus égale à chaque syllabe, contrairement à l\'anglais où certaines syllabes sont très réduites/atones',
            'Le français n\'a aucune syllabe atone',
            'Il n\'y a aucune différence entre le français et l\'anglais sur ce point',
          ],
          correctIndex: 1,
          explanation: 'Le français a tendance à donner une durée plus ÉGALE à chaque syllabe (langue "syllabique"), contrairement à l\'ANGLAIS (langue "accentuelle") où certaines syllabes sont très RÉDUITES/atones par rapport aux syllabes accentuées. Cette différence contribue à la sensation de musicalité plus RÉGULIÈRE du français.',
        },
        {
          id: 'trans-pho-05-ex07',
          type: 'qcm',
          question: 'Quelle est la première étape de la méthode de découpage en groupes rythmiques ?',
          options: [
            'Accentuer chaque syllabe de la phrase',
            'Identifier les groupes syntaxiques majeurs (sujet, verbe+compléments, compléments circonstanciels)',
            'Ignorer complètement la structure de la phrase',
            'Traduire la phrase dans une autre langue',
          ],
          correctIndex: 1,
          explanation: 'La PREMIÈRE ÉTAPE de la méthode consiste à IDENTIFIER les GROUPES SYNTAXIQUES MAJEURS de la phrase (sujet, verbe+compléments, compléments circonstanciels), qui formeront ensuite les UNITÉS RYTHMIQUES à accentuer en fin de groupe.',
        },
        {
          id: 'trans-pho-05-ex08',
          type: 'qcm',
          question: 'Dans "Il part demain matin", où porte l\'accent principal si c\'est un seul groupe rythmique ?',
          options: [
            'Sur "il"',
            'Sur "part"',
            'Sur la dernière syllabe "matin"',
            'De façon égale sur tous les mots',
          ],
          correctIndex: 2,
          explanation: 'Si "Il part demain matin" forme UN SEUL groupe rythmique, l\'accent principal porte sur la DERNIÈRE SYLLABE du groupe, c\'est-à-dire sur "maTIN" (et plus précisément la syllabe finale -TIN), et non sur "il" ou "part" qui ne sont pas en position finale.',
        },
        {
          id: 'trans-pho-05-ex09',
          type: 'qcm',
          question: 'Pourquoi dit-on que le français n\'a pas d\'accent "lexical" comme l\'anglais ?',
          options: [
            'Parce que le français n\'a aucun accent du tout',
            'Parce qu\'un même mot français ne porte pas d\'accent fixe indépendamment de sa position dans la phrase — c\'est la position dans le groupe rythmique qui détermine l\'accentuation, pas le mot lui-même',
            'Parce que tous les mots français sont accentués sur la première syllabe',
            'Parce que l\'accent lexical n\'existe dans aucune langue du monde',
          ],
          correctIndex: 1,
          explanation: 'Un même mot français ne porte PAS d\'accent FIXE indépendamment de sa position : "matin" seul peut être accentué sur sa dernière syllabe, mais dans un groupe plus long ("demain matin à huit heures"), c\'est la fin du GROUPE qui porte l\'accent, pas nécessairement "matin" lui-même. C\'est la POSITION dans le groupe RYTHMIQUE qui compte, pas le mot isolé.',
        },
        {
          id: 'trans-pho-05-ex10',
          type: 'qcm',
          question: 'Quelle stratégie pratique est recommandée pour développer un débit plus fluide et naturel en français ?',
          options: [
            'Prononcer chaque syllabe de façon isolée et détachée',
            'S\'entraîner à marquer mentalement les groupes rythmiques avant de prononcer une phrase, pour regrouper les mots en unités de sens cohérentes',
            'Éviter complètement de faire des pauses',
            'Parler le plus vite possible sans réfléchir au découpage',
          ],
          correctIndex: 1,
          explanation: 'La stratégie RECOMMANDÉE consiste à S\'ENTRAÎNER À MARQUER MENTALEMENT les GROUPES RYTHMIQUES avant de prononcer une phrase, ce qui aide à REGROUPER les mots en UNITÉS DE SENS COHÉRENTES plutôt que de les prononcer mot par mot de façon "hachée" et non naturelle.',
        },
        {
          id: 'trans-pho-05-ex11',
          type: 'qcm',
          question: 'Dans "Le président de la République a reçu ce matin les représentants syndicaux", quel est l\'accent du DEUXIÈME groupe rythmique ("a reçu ce matin") ?',
          options: ['Sur "a"', 'Sur "reçu"', 'Sur "ce"', 'Sur "ma-TIN" (dernière syllabe du groupe)'],
          correctIndex: 3,
          explanation: 'L\'accent du DEUXIÈME groupe ("a reçu ce matin") porte sur la DERNIÈRE SYLLABE du groupe, c\'est-à-dire "ma-TIN", et non sur les premiers mots du groupe ("a", "reçu", "ce"). Cette règle s\'applique systématiquement à chaque groupe rythmique de la phrase.',
        },
        {
          id: 'trans-pho-05-ex12',
          type: 'qcm',
          question: 'Quel est l\'effet d\'une pause brève entre deux groupes rythmiques ?',
          options: [
            'Elle interrompt complètement la compréhension de la phrase',
            'Elle marque rythmiquement la séparation entre deux unités de sens, facilitant la compréhension de la structure de la phrase pour l\'auditeur',
            'Elle n\'a aucun effet perceptible',
            'Elle indique systématiquement la fin de la phrase entière',
          ],
          correctIndex: 1,
          explanation: 'Une PAUSE BRÈVE entre deux groupes rythmiques marque RYTHMIQUEMENT la séparation entre DEUX UNITÉS DE SENS distinctes, facilitant la COMPRÉHENSION de la STRUCTURE de la phrase pour l\'auditeur — qui peut ainsi mieux suivre l\'organisation logique du discours, même sans voir la ponctuation écrite.',
        },
        {
          id: 'trans-pho-05-ex13',
          type: 'qcm',
          question: 'Pourquoi le découpage en groupes rythmiques est-il particulièrement important pour la compréhension orale (écouter et comprendre les natifs) ?',
          options: [
            'Ce n\'est pas important pour la compréhension orale',
            'Parce que reconnaître les groupes rythmiques et leurs accents aide à segmenter mentalement le flux continu de paroles en unités de sens identifiables, facilitant la compréhension',
            'Parce que cela permet d\'ignorer complètement le sens des mots',
            'Parce que les groupes rythmiques ne concernent que la production orale, jamais la compréhension',
          ],
          correctIndex: 1,
          explanation: 'Reconnaître les GROUPES RYTHMIQUES et leurs ACCENTS (en écoutant des natifs) aide à SEGMENTER MENTALEMENT le FLUX CONTINU de paroles (souvent sans pauses très marquées à l\'oral rapide) en UNITÉS DE SENS IDENTIFIABLES, facilitant grandement la COMPRÉHENSION ORALE, particulièrement difficile pour les apprenants quand le débit est rapide.',
        },
        {
          id: 'trans-pho-05-ex14',
          type: 'qcm',
          question: 'Quelle caractéristique distingue le français comme langue "syllabique" par rapport aux langues "accentuelles" comme l\'anglais ?',
          options: [
            'Le français n\'a aucune syllabe',
            'Le français tend à donner une durée plus égale à chaque syllabe, tandis que les langues accentuelles réduisent fortement les syllabes non accentuées',
            'Le français accentue systématiquement chaque syllabe de façon égale et forte',
            'Il n\'existe aucune différence entre langues syllabiques et accentuelles',
          ],
          correctIndex: 1,
          explanation: 'Une langue "SYLLABIQUE" comme le français tend à donner une DURÉE PLUS ÉGALE à CHAQUE SYLLABE. Une langue "ACCENTUELLE" comme l\'anglais RÉDUIT fortement la durée des syllabes NON accentuées (atones), créant un rythme plus CONTRASTÉ entre syllabes fortes et faibles, différent du rythme plus RÉGULIER du français.',
        },
        {
          id: 'trans-pho-05-ex15',
          type: 'qcm',
          question: 'Comment qualifierait-on un débit qui accentue "LE prè-SI-dent DE la RÉ-pu-BLIQUE" mot par mot ?',
          options: [
            'Naturel et fluide, typique du français parlé',
            'Artificiel et "scandé", contraire au flux naturel du français qui privilégie les groupes rythmiques larges',
            'C\'est la seule façon correcte de prononcer cette phrase',
            'Identique à la prononciation native recommandée',
          ],
          correctIndex: 1,
          explanation: 'Ce type de débit, accentuant CHAQUE mot séparément, est qualifié d\'ARTIFICIEL et "SCANDÉ" — il est CONTRAIRE au flux NATUREL du français, qui privilégie les GROUPES RYTHMIQUES LARGES avec un seul accent en fin de groupe, plutôt qu\'une accentuation répétée et fragmentée mot par mot.',
        },
        {
          id: 'trans-pho-05-ex16',
          type: 'qcm',
          question: 'Pourquoi la maîtrise du rythme et de l\'accent de groupe est-elle considérée comme un élément clé de la "musicalité" perçue du français ?',
          options: [
            'Parce que la musicalité du français n\'a aucun rapport avec le rythme',
            'Parce que la régularité syllabique et l\'accentuation de fin de groupe créent un flux mélodique caractéristique, souvent perçu comme "chantant" ou "fluide" par les locuteurs d\'autres langues',
            'Parce que le français n\'a aucune musicalité particulière',
            'Parce que seule la grammaire déterminer la perception de musicalité',
          ],
          correctIndex: 1,
          explanation: 'La RÉGULARITÉ SYLLABIQUE (durée égale des syllabes) combinée à l\'ACCENTUATION DE FIN DE GROUPE (plutôt qu\'une accentuation lexicale fixe et irrégulière) crée un FLUX MÉLODIQUE CARACTÉRISTIQUE du français, souvent perçu comme "CHANTANT" ou "FLUIDE" par les locuteurs d\'autres langues — c\'est cette structure rythmique qui contribue à la "musicalité" reconnaissable du français.',
        },
        {
          id: 'trans-pho-05-ex17',
          type: 'qcm',
          question: 'Si on dit "PHOto" et "phoTOgraphy" en anglais (accent qui se déplace selon le mot dérivé), quelle serait la situation comparable en français ?',
          options: [
            'Le français aurait exactement le même comportement d\'accent fixe par mot',
            'En français, l\'accent dépendrait de la position du mot dans le groupe rythmique de la phrase, pas d\'une règle fixe attachée au mot lui-même',
            'Le français n\'a aucun équivalent à ce phénomène',
            'Cette comparaison n\'a aucun sens linguistique',
          ],
          correctIndex: 1,
          explanation: 'En français, l\'ACCENT d\'un mot comme "photo" ou "photographie" DÉPENDRAIT de sa POSITION dans le GROUPE RYTHMIQUE de la phrase ("Cette photo est belle" → accent sur "photo" en fin de groupe ; "La photo que j\'ai prise hier" → l\'accent se déplace en fonction du groupe), et non d\'une RÈGLE FIXE attachée définitivement au mot lui-même, contrairement à l\'anglais.',
        },
        {
          id: 'trans-pho-05-ex18',
          type: 'qcm',
          question: 'Quelle compétence pratique le travail sur les groupes rythmiques développe-t-il, utile pour la lecture à voix haute en français ?',
          options: [
            'La capacité à lire le plus rapidement possible sans réfléchir au sens',
            'La capacité à anticiper la structure syntaxique d\'une phrase pour la découper en unités de sens cohérentes lors de la lecture orale, produisant un débit plus naturel et compréhensible',
            'La capacité à ignorer complètement la ponctuation',
            'La capacité à accentuer systématiquement chaque syllabe de façon identique',
          ],
          correctIndex: 1,
          explanation: 'Ce travail développe la capacité à ANTICIPER la STRUCTURE SYNTAXIQUE d\'une phrase (avant même de la lire à voix haute) pour la DÉCOUPER en UNITÉS DE SENS COHÉRENTES (groupes rythmiques), produisant un DÉBIT plus NATUREL et plus FACILEMENT COMPRÉHENSIBLE pour l\'auditeur, compétence précieuse pour la lecture orale, les présentations ou les discours.',
        },
        {
          id: 'trans-pho-05-ex19',
          type: 'qcm',
          question: 'Pourquoi ce point sur le rythme et l\'accent tonique est-il classé comme "transversal" plutôt que limité à un niveau spécifique ?',
          options: [
            'Parce qu\'il ne concerne que les débutants',
            'Parce que la maîtrise du rythme est un défi continu qui s\'affine progressivement à tous les niveaux, de la simple distinction des mots (débutant) à la fluidité experte des discours longs et complexes (avancé)',
            'Parce qu\'il ne concerne que les experts en linguistique',
            'Parce que le rythme n\'évolue jamais avec le niveau de l\'apprenant',
          ],
          correctIndex: 1,
          explanation: 'La maîtrise du RYTHME est un DÉFI CONTINU qui s\'AFFINE PROGRESSIVEMENT à TOUS les niveaux : de la simple DISTINCTION des mots et groupes courts (niveaux débutants) à la FLUIDITÉ EXPERTE de discours LONGS et COMPLEXES avec des groupes rythmiques variés et nuancés (niveaux avancés), justifiant son traitement comme module TRANSVERSAL applicable à chaque étape.',
        },
        {
          id: 'trans-pho-05-ex20',
          type: 'qcm',
          question: 'En synthèse, quel est l\'avantage principal de comprendre le système de l\'accent de groupe (plutôt que de simplement "sentir" intuitivement le rythme sans le comprendre) ?',
          options: [
            'Aucun avantage, l\'intuition seule suffit toujours',
            'Comprendre ce système permet d\'analyser consciemment et de corriger méthodiquement ses propres erreurs de débit, plutôt que de rester bloqué dans un schéma de prononciation calqué sur sa langue maternelle sans en avoir conscience',
            'Cela rend la langue française plus difficile à apprendre',
            'Cela remplace complètement la nécessité de pratiquer l\'oral',
          ],
          correctIndex: 1,
          explanation: 'Comprendre ce SYSTÈME (accent de groupe plutôt que lexical, durée syllabique régulière) permet d\'ANALYSER CONSCIEMMENT et de CORRIGER MÉTHODIQUEMENT ses propres erreurs de débit, plutôt que de rester BLOQUÉ dans un schéma de prononciation CALQUÉ sur sa langue maternelle SANS EN AVOIR CONSCIENCE. Cette prise de conscience THÉORIQUE, combinée à la PRATIQUE, accélère significativement les progrès en fluidité orale.',
        },
      ],
    },

    {
      id: 'trans-pho-06',
      slug: 'trans-erreurs-prononciation-frequentes',
      moduleSlug: 'transversal-phonetique',
      level: 'transversal',
      title: 'Erreurs de prononciation fréquentes',
      description: 'Identifier et corriger les difficultés de prononciation les plus courantes selon l\'origine linguistique.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Des difficultés différentes selon la langue maternelle

Chaque langue maternelle prédispose à certaines difficultés spécifiques en français, car les apprenants transposent inconsciemment les habitudes articulatoires de leur langue d'origine.

**Pour les arabophones**
- Difficulté avec [p] (souvent réalisé comme [b], absent dans certains dialectes arabes) : "Paris" peut devenir "Baris"
- Voyelles [y] et [œ] (peu/peur) souvent rapprochées de [i] ou [u]
- Le système vocalique arabe ayant moins de voyelles que le français, certaines distinctions fines sont à travailler spécifiquement

**Pour les anglophones**
- Le "r" anglais (rétroflexe) transféré au lieu du "r" français (uvulaire)
- Voyelles nasales souvent insuffisamment nasalisées
- Accent lexical fixe transféré, créant un débit "haché" au lieu de l'accent de groupe français

**Pour les locuteurs de langues asiatiques (chinois, vietnamien...)**
- Les consonnes finales (souvent absentes en fin de syllabe dans certaines langues) peuvent être omises : "il part" devient "il pa"
- Les voyelles nasales et les groupes consonantiques (str, pl...) demandent un travail spécifique

**Pour les hispanophones et lusophones**
- Le "r" roulé espagnol/portugais transféré au lieu du "r" français
- Confusion [b]/[v] (l'espagnol ne distingue pas toujours ces deux sons aussi nettement)

**Pourquoi cette approche par origine linguistique est utile**
Comprendre SES PROPRES tendances de transfert (issues de sa langue maternelle) permet de cibler un entraînement personnalisé, plus efficace qu'un travail générique sur "tous les sons difficiles".`,

      linguisticPoint: `## Point linguistique : Le concept de "transfert linguistique" en phonétique

### Qu'est-ce que le transfert ?
Le TRANSFERT consiste à appliquer INCONSCIEMMENT les habitudes articulatoires de sa langue maternelle à la nouvelle langue apprise. Ce phénomène explique pourquoi un "accent étranger" est souvent reconnaissable et lié à l'origine linguistique du locuteur.

### Transfert positif vs transfert négatif
- **Transfert POSITIF** : un son existant dans les deux langues facilite l'apprentissage (ex : [m], [n] existent dans presque toutes les langues)
- **Transfert NÉGATIF** (interférence) : une habitude de la langue maternelle nuit à la production correcte en français (ex : "r" roulé transféré au lieu du "r" français)

### La méthode de la "prise de conscience contrastive"
1. Identifier précisément SA langue maternelle et ses caractéristiques phonétiques
2. Comparer explicitement avec le système phonétique français
3. Cibler les points de DIVERGENCE (sources de transfert négatif) pour un entraînement spécifique

### Pourquoi l'accent ne disparaît jamais complètement (et ce n'est pas un problème)
Même des locuteurs très avancés gardent souvent des traces de leur langue maternelle dans leur prononciation — l'objectif réaliste n'est pas une prononciation "parfaitement native" mais une prononciation CLAIRE et COMPRÉHENSIBLE, sans confusion de sens.`,

      keyPoints: [
        'Le "transfert" = appliquer inconsciemment les habitudes articulatoires de sa langue maternelle au français',
        'Arabophones : [p]→[b] fréquent / Anglophones : r rétroflexe + accent lexical fixe transférés',
        'Locuteurs langues asiatiques : omission des consonnes finales / Hispanophones : r roulé + confusion [b]/[v]',
        'Méthode : identifier sa langue maternelle → comparer avec le français → cibler les divergences précises',
        'Objectif réaliste : prononciation CLAIRE et COMPRÉHENSIBLE, pas "accent natif parfait"',
      ],

      exercises: [
        {
          id: 'trans-pho-06-ex01',
          type: 'qcm',
          question: 'Que signifie le "transfert linguistique" en phonétique ?',
          options: [
            'Traduire un mot d\'une langue à une autre',
            'Appliquer inconsciemment les habitudes articulatoires de sa langue maternelle à la nouvelle langue apprise',
            'Changer complètement de langue maternelle',
            'Mémoriser le vocabulaire d\'une nouvelle langue',
          ],
          correctIndex: 1,
          explanation: 'Le "TRANSFERT LINGUISTIQUE" consiste à appliquer INCONSCIEMMENT les habitudes ARTICULATOIRES de sa LANGUE MATERNELLE à la nouvelle langue apprise. Ce phénomène explique l\'existence des "accents étrangers" typiques selon l\'origine linguistique du locuteur.',
        },
        {
          id: 'trans-pho-06-ex02',
          type: 'qcm',
          question: 'Quelle difficulté de prononciation est souvent associée aux arabophones apprenant le français ?',
          options: [
            'La confusion entre [b] et [v]',
            'La réalisation de [p] comme [b] ("Paris" → "Baris")',
            'L\'omission systématique des consonnes finales',
            'La confusion entre les voyelles nasales an/on',
          ],
          correctIndex: 1,
          explanation: 'Les ARABOPHONES rencontrent souvent une difficulté avec [p], parfois réalisé comme [b] (absent dans certains DIALECTES arabes), créant des confusions comme "Paris" prononcé "Baris". C\'est un exemple typique de TRANSFERT NÉGATIF lié à l\'inventaire phonétique de la langue maternelle.',
        },
        {
          id: 'trans-pho-06-ex03',
          type: 'qcm',
          question: 'Quelle difficulté est typiquement associée aux anglophones concernant le "r" ?',
          options: [
            'Ils ne prononcent jamais le "r"',
            'Ils transfèrent souvent le "r" anglais (rétroflexe) au lieu du "r" français (uvulaire)',
            'Ils prononcent toujours le "r" français parfaitement dès le début',
            'Ils confondent le "r" avec le "l"',
          ],
          correctIndex: 1,
          explanation: 'Les ANGLOPHONES transfèrent souvent le "R" ANGLAIS (rétroflexe, avec la langue recourbée vers l\'arrière) au lieu du "R" FRANÇAIS (uvulaire, au fond de la gorge), produisant un "r" qui sonne distinctement ANGLAIS plutôt que français.',
        },
        {
          id: 'trans-pho-06-ex04',
          type: 'qcm',
          question: 'Quelle est la différence entre "transfert positif" et "transfert négatif" ?',
          options: [
            'Aucune différence, les deux termes sont synonymes',
            'Le transfert positif facilite l\'apprentissage (son commun aux deux langues), le transfert négatif (interférence) nuit à la prononciation correcte',
            'Le transfert positif nuit toujours à la prononciation',
            'Le transfert négatif n\'existe pas réellement en phonétique',
          ],
          correctIndex: 1,
          explanation: 'Le TRANSFERT POSITIF facilite l\'apprentissage quand un SON existe dans les DEUX langues (ex : [m], [n] presque universels). Le TRANSFERT NÉGATIF (ou INTERFÉRENCE) nuit à la prononciation correcte quand une HABITUDE de la langue maternelle est INADAPTÉE au français (ex : r roulé transféré au lieu du r français).',
        },
        {
          id: 'trans-pho-06-ex05',
          type: 'qcm',
          question: 'Quelle difficulté est souvent associée aux locuteurs de langues asiatiques (chinois, vietnamien) concernant les consonnes ?',
          options: [
            'Ils ajoutent systématiquement des consonnes supplémentaires',
            'Ils peuvent omettre les consonnes finales, absentes en fin de syllabe dans leur langue maternelle ("il part" devient "il pa")',
            'Ils prononcent toujours toutes les consonnes finales correctement dès le début',
            'Ils confondent uniquement les voyelles, jamais les consonnes',
          ],
          correctIndex: 1,
          explanation: 'Les locuteurs de certaines langues ASIATIQUES (où les CONSONNES FINALES sont souvent ABSENTES en fin de syllabe) peuvent OMETTRE ces consonnes en français : "il part" devient "il pa". C\'est un exemple de TRANSFERT lié à la STRUCTURE SYLLABIQUE différente de la langue maternelle.',
        },
        {
          id: 'trans-pho-06-ex06',
          type: 'qcm',
          question: 'Quelle est l\'étape 1 de la méthode de "prise de conscience contrastive" ?',
          options: [
            'Ignorer complètement sa langue maternelle',
            'Identifier précisément sa langue maternelle et ses caractéristiques phonétiques spécifiques',
            'Apprendre toutes les langues du monde pour comparer',
            'Éviter de parler français jusqu\'à maîtrise parfaite',
          ],
          correctIndex: 1,
          explanation: 'L\'ÉTAPE 1 consiste à IDENTIFIER PRÉCISÉMENT sa LANGUE MATERNELLE et ses CARACTÉRISTIQUES PHONÉTIQUES SPÉCIFIQUES (quels sons existent, lesquels n\'existent pas), base nécessaire pour ensuite COMPARER avec le système français et cibler les points de DIVERGENCE.',
        },
        {
          id: 'trans-pho-06-ex07',
          type: 'qcm',
          question: 'Quel est l\'objectif réaliste recommandé pour la prononciation, plutôt qu\'une "prononciation native parfaite" ?',
          options: [
            'Abandonner complètement le travail sur la prononciation',
            'Une prononciation claire et compréhensible, sans confusion de sens, même si des traces de la langue maternelle persistent',
            'Imiter parfaitement un seul accent régional français',
            'Éviter complètement de parler avec des natifs',
          ],
          correctIndex: 1,
          explanation: 'L\'objectif RÉALISTE recommandé est une prononciation CLAIRE et COMPRÉHENSIBLE, SANS CONFUSION DE SENS, même si des TRACES de la langue maternelle PERSISTENT (ce qui est NORMAL et fréquent même chez des locuteurs très AVANCÉS). Viser une prononciation "parfaitement native" est un objectif moins réaliste et moins nécessaire pour une communication efficace.',
        },
        {
          id: 'trans-pho-06-ex08',
          type: 'qcm',
          question: 'Quelle difficulté est associée aux hispanophones et lusophones concernant [b] et [v] ?',
          options: [
            'Aucune confusion possible, ces sons sont identiques en espagnol/portugais et en français',
            'Une confusion possible, car l\'espagnol ne distingue pas toujours ces deux sons aussi nettement qu\'en français',
            'Ils prononcent toujours [b] et [v] parfaitement dès le début',
            'Cette confusion ne concerne que les consonnes finales',
          ],
          correctIndex: 1,
          explanation: 'Les HISPANOPHONES et LUSOPHONES peuvent confondre [b] et [v], car l\'ESPAGNOL (notamment) ne distingue PAS TOUJOURS ces deux sons de façon aussi NETTE qu\'en français (dans certains contextes, le "b" et le "v" espagnols se rapprochent phonétiquement), créant un transfert potentiellement source de confusion en français.',
        },
        {
          id: 'trans-pho-06-ex09',
          type: 'qcm',
          question: 'Pourquoi l\'accent lexical fixe (transféré par des anglophones) crée-t-il un débit "haché" en français ?',
          options: [
            'Parce que le français n\'a aucun accent du tout',
            'Parce que le français accentue les groupes rythmiques (fin de groupe) plutôt que chaque mot individuellement, et appliquer un accent fixe par mot (habitude anglaise) fragmente le flux naturel',
            'Parce que l\'anglais et le français ont exactement le même système d\'accentuation',
            'Parce que les anglophones ne peuvent jamais apprendre à parler français correctement',
          ],
          correctIndex: 1,
          explanation: 'Le français accentue les GROUPES RYTHMIQUES (en fin de groupe) plutôt que CHAQUE MOT individuellement (cf. leçon précédente). Appliquer un ACCENT FIXE par mot (habitude TRANSFÉRÉE de l\'anglais) fragmente le flux NATUREL du français en créant un débit "HACHÉ", moins fluide que le système d\'accentuation de groupe propre au français.',
        },
        {
          id: 'trans-pho-06-ex10',
          type: 'qcm',
          question: 'Pourquoi est-il utile pour un apprenant de comprendre les difficultés TYPIQUES associées à sa propre langue maternelle, plutôt qu\'un travail générique sur "tous les sons difficiles" ?',
          options: [
            'Ce n\'est pas utile, toutes les approches sont équivalentes',
            'Parce que cela permet de cibler un entraînement personnalisé sur SES propres tendances de transfert, ce qui est plus efficace et plus rapide qu\'un travail non ciblé sur l\'ensemble des sons potentiellement difficiles',
            'Parce que cela permet d\'éviter complètement de travailler la prononciation',
            'Parce que toutes les langues maternelles créent exactement les mêmes difficultés',
          ],
          correctIndex: 1,
          explanation: 'Comprendre les difficultés TYPIQUES de SA propre langue maternelle permet de CIBLER un ENTRAÎNEMENT PERSONNALISÉ sur SES propres tendances de TRANSFERT spécifiques, ce qui est plus EFFICACE et plus RAPIDE qu\'un travail GÉNÉRIQUE et non ciblé sur l\'ensemble des sons potentiellement difficiles pour TOUS les apprenants, quelle que soit leur origine.',
        },
        {
          id: 'trans-pho-06-ex11',
          type: 'qcm',
          question: 'Quelle est la cause profonde de l\'insuffisante nasalisation des voyelles nasales chez certains anglophones ?',
          options: [
            'L\'anglais a un système de voyelles nasales identique au français',
            'L\'anglais marque moins systématiquement la nasalisation vocalique que le français, où les voyelles nasales sont des phonèmes distincts à part entière',
            'Les anglophones ne peuvent physiquement pas nasaliser les voyelles',
            'Cette difficulté ne concerne que les consonnes, jamais les voyelles',
          ],
          correctIndex: 1,
          explanation: 'L\'ANGLAIS marque MOINS SYSTÉMATIQUEMENT la NASALISATION vocalique (elle existe parfois de façon plus subtile ou contextuelle), tandis qu\'en FRANÇAIS, les voyelles nasales ([ã], [õ], [ɛ̃]) sont des PHONÈMES DISTINCTS à part entière, changeant le SENS des mots. Ce décalage explique pourquoi les anglophones sous-nasalisent parfois ces voyelles par transfert de leur système d\'origine.',
        },
        {
          id: 'trans-pho-06-ex12',
          type: 'qcm',
          question: 'Pourquoi dit-on qu\'un accent ne disparaît "jamais complètement" même chez des locuteurs très avancés, et que ce n\'est pas un problème ?',
          options: [
            'Parce que c\'est un échec d\'apprentissage qu\'il faut absolument corriger',
            'Parce que des traces phonétiques de la langue maternelle persistent souvent, sans empêcher une communication efficace et claire — l\'objectif réaliste est la clarté, pas l\'élimination totale de l\'accent',
            'Parce que personne ne peut jamais bien apprendre le français',
            'Parce que les natifs ne comprennent jamais les locuteurs avec un accent',
          ],
          correctIndex: 1,
          explanation: 'Des TRACES PHONÉTIQUES de la langue maternelle PERSISTENT souvent même chez des locuteurs TRÈS AVANCÉS, sans EMPÊCHER une communication EFFICACE et CLAIRE. L\'OBJECTIF RÉALISTE de l\'apprentissage phonétique est la CLARTÉ et la COMPRÉHENSIBILITÉ, pas l\'ÉLIMINATION TOTALE de tout accent — un objectif d\'ailleurs rarement atteint même par des apprenants très avancés, et qui n\'est PAS nécessaire pour une communication réussie.',
        },
        {
          id: 'trans-pho-06-ex13',
          type: 'qcm',
          question: 'Quelle est l\'étape 3 de la méthode de "prise de conscience contrastive" ?',
          options: [
            'Oublier complètement sa langue maternelle',
            'Cibler les points de divergence (sources de transfert négatif) identifiés entre sa langue maternelle et le français, pour un entraînement spécifique',
            'Apprendre une troisième langue pour comparer',
            'Éviter tout effort de prononciation',
          ],
          correctIndex: 1,
          explanation: 'L\'ÉTAPE 3 consiste à CIBLER les POINTS DE DIVERGENCE (identifiés à l\'étape 2 par comparaison) entre sa langue maternelle et le français — ces points sont les SOURCES potentielles de TRANSFERT NÉGATIF — pour ensuite mettre en place un ENTRAÎNEMENT SPÉCIFIQUE et CIBLÉ sur ces difficultés précises.',
        },
        {
          id: 'trans-pho-06-ex14',
          type: 'qcm',
          question: 'Pourquoi les voyelles [y] et [œ] (peu/peur) sont-elles souvent difficiles pour les arabophones, en lien avec le système vocalique de l\'arabe ?',
          options: [
            'Parce que l\'arabe possède exactement les mêmes voyelles que le français',
            'Parce que le système vocalique arabe possède généralement moins de voyelles distinctes que le français, rendant certaines nuances vocaliques fines (comme [y] ou [œ]) moins familières et plus difficiles à produire ou percevoir',
            'Parce que ces voyelles n\'existent dans aucune langue du monde',
            'Parce que les arabophones ne peuvent physiquement pas produire ces sons',
          ],
          correctIndex: 1,
          explanation: 'Le système VOCALIQUE de l\'arabe possède généralement MOINS de voyelles DISTINCTES que le français (qui compte de NOMBREUSES voyelles, notamment des nuances fines comme [y], [œ], [ø]...). Cette différence de RICHESSE vocalique rend certaines distinctions FINES du français moins FAMILIÈRES et donc plus DIFFICILES à PRODUIRE et PERCEVOIR pour les arabophones, par manque d\'équivalent direct dans leur système d\'origine.',
        },
        {
          id: 'trans-pho-06-ex15',
          type: 'qcm',
          question: 'Quelle est la fonction de l\'étape 2 ("comparer explicitement avec le système phonétique français") dans la méthode contrastive ?',
          options: [
            'Elle n\'a aucune utilité pratique',
            'Elle permet d\'identifier précisément QUELS sons ou structures du français n\'ont pas d\'équivalent ou diffèrent de la langue maternelle, base nécessaire pour cibler ensuite l\'entraînement',
            'Elle consiste à apprendre par cœur la phonétique de toutes les langues du monde',
            'Elle remplace complètement la pratique orale',
          ],
          correctIndex: 1,
          explanation: 'Cette étape de COMPARAISON permet d\'IDENTIFIER PRÉCISÉMENT QUELS sons ou structures PHONÉTIQUES du français N\'ONT PAS d\'équivalent direct ou DIFFÈRENT de la langue maternelle de l\'apprenant — c\'est cette ANALYSE COMPARATIVE qui constitue la BASE NÉCESSAIRE pour ensuite cibler un ENTRAÎNEMENT PRÉCIS sur les points réellement problématiques.',
        },
        {
          id: 'trans-pho-06-ex16',
          type: 'qcm',
          question: 'En quoi le travail sur "ses propres difficultés selon son origine" diffère-t-il d\'un travail uniforme proposé à tous les apprenants sans distinction ?',
          options: [
            'Il n\'y a aucune différence d\'efficacité entre les deux approches',
            'Le travail ciblé sur les difficultés spécifiques à sa langue maternelle permet une utilisation plus efficace du temps d\'entraînement, en se concentrant sur les points réellement problématiques pour CET apprenant précis',
            'Le travail uniforme est toujours plus efficace que le travail ciblé',
            'Cette distinction ne concerne que la grammaire, jamais la phonétique',
          ],
          correctIndex: 1,
          explanation: 'Le travail CIBLÉ sur les DIFFICULTÉS SPÉCIFIQUES à sa langue maternelle permet une UTILISATION PLUS EFFICACE du TEMPS d\'ENTRAÎNEMENT, en se CONCENTRANT sur les POINTS RÉELLEMENT PROBLÉMATIQUES pour CET apprenant PRÉCIS, plutôt que de répartir l\'effort de façon UNIFORME sur TOUS les sons potentiellement difficiles, dont certains pourraient déjà être maîtrisés naturellement grâce à un transfert POSITIF.',
        },
        {
          id: 'trans-pho-06-ex17',
          type: 'qcm',
          question: 'Pourquoi le "r" roulé espagnol/portugais transféré au français pose-t-il un problème de clarté, et pas seulement d\'accent ?',
          options: [
            'Il ne pose en réalité aucun problème, ces deux types de r sont parfaitement interchangeables',
            'Bien qu\'il reste généralement compréhensible, un "r" très éloigné de la norme uvulaire française peut, dans certains cas, contribuer à une perception d\'accent fort qui peut ralentir la compréhension chez certains interlocuteurs',
            'Le r roulé rend systématiquement le mot incompréhensible',
            'Cette différence n\'a aucun rapport avec la phonétique',
          ],
          correctIndex: 1,
          explanation: 'Bien que le "R" ROULÉ reste généralement COMPRÉHENSIBLE (la communication n\'est pas rompue), un "r" très ÉLOIGNÉ de la norme UVULAIRE française peut, dans certains cas, contribuer à une PERCEPTION d\'ACCENT FORT qui peut parfois RALENTIR la compréhension ou créer une légère DISTANCE communicative avec certains interlocuteurs, d\'où l\'intérêt d\'un travail spécifique sur ce point, sans qu\'il s\'agisse d\'un obstacle majeur à la communication globale.',
        },
        {
          id: 'trans-pho-06-ex18',
          type: 'qcm',
          question: 'Quelle est la différence entre corriger une difficulté de "transfert négatif" et simplement "imiter" un locuteur natif sans comprendre la logique du système ?',
          options: [
            'Il n\'y a aucune différence entre ces deux approches',
            'Comprendre la logique du transfert négatif (pourquoi cette erreur se produit, en lien avec sa langue maternelle) permet une correction plus consciente, durable et généralisable à des situations nouvelles, contrairement à une simple imitation mécanique sans compréhension',
            'L\'imitation pure est toujours plus efficace que la compréhension',
            'Le transfert négatif ne peut jamais être corrigé, quelle que soit la méthode',
          ],
          correctIndex: 1,
          explanation: 'COMPRENDRE la LOGIQUE du transfert NÉGATIF (pourquoi telle erreur se produit, en lien direct avec les caractéristiques de SA langue maternelle) permet une CORRECTION plus CONSCIENTE, plus DURABLE et plus GÉNÉRALISABLE à des SITUATIONS NOUVELLES (de nouveaux mots, contextes), contrairement à une simple IMITATION MÉCANIQUE sans compréhension, qui risque de rester limitée aux exemples spécifiquement pratiqués.',
        },
        {
          id: 'trans-pho-06-ex19',
          type: 'qcm',
          question: 'Pourquoi ce module sur les "erreurs fréquentes selon l\'origine linguistique" complète-t-il logiquement les leçons précédentes sur les voyelles, consonnes, liaisons, intonation et rythme ?',
          options: [
                'Il n\'a aucun rapport avec les leçons précédentes',
            'Il applique et personnalise les connaissances théoriques acquises dans les leçons précédentes (voyelles, consonnes, liaisons, intonation, rythme) en les reliant aux difficultés concrètes et spécifiques de chaque apprenant selon son profil linguistique',
            'Il remplace complètement le besoin d\'étudier les leçons précédentes',
            'Il ne concerne que les locuteurs natifs de français',
          ],
          correctIndex: 1,
          explanation: 'Ce module APPLIQUE et PERSONNALISE les connaissances THÉORIQUES acquises dans les leçons PRÉCÉDENTES (voyelles, consonnes, liaisons, intonation, rythme) en les RELIANT aux DIFFICULTÉS CONCRÈTES et SPÉCIFIQUES de chaque apprenant SELON son PROFIL LINGUISTIQUE d\'origine, transformant ainsi des connaissances GÉNÉRALES en un PLAN D\'ACTION PERSONNALISÉ et directement applicable.',
        },
        {
          id: 'trans-pho-06-ex20',
          type: 'qcm',
          question: 'En synthèse, quelle est la philosophie générale recommandée pour aborder le travail de prononciation, telle qu\'illustrée par l\'ensemble de ce module phonétique ?',
          options: [
            'Viser une perfection absolue et un accent totalement indétectable comme seul objectif valable',
            'Adopter une approche systématique et progressive (voyelles, consonnes, liaisons, intonation, rythme, difficultés personnalisées) visant une communication claire et naturelle, en acceptant que des traces de la langue maternelle puissent subsister sans nuire à l\'efficacité communicative',
            'Abandonner tout travail de prononciation car il est impossible à maîtriser',
            'Se concentrer uniquement sur la grammaire en ignorant complètement la prononciation',
          ],
          correctIndex: 1,
          explanation: 'La philosophie GÉNÉRALE de ce module est d\'adopter une APPROCHE SYSTÉMATIQUE et PROGRESSIVE (voyelles → consonnes → liaisons → intonation → rythme → difficultés PERSONNALISÉES) visant une COMMUNICATION CLAIRE et NATURELLE, tout en acceptant que des TRACES de la langue MATERNELLE puissent SUBSISTER sans nuire à l\'EFFICACITÉ communicative globale — un équilibre réaliste entre AMBITION de progrès et ACCEPTATION bienveillante de ses propres caractéristiques linguistiques.',
        },
      ],
    },
  ],
};
