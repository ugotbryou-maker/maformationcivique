import type { LangModule } from '../types';

export const b2NuancesCulturelles: LangModule = {
  id: 'b2-mod-04',
  slug: 'b2-nuances-culturelles',
  level: 'B2',
  title: 'Nuances culturelles',
  subtitle: 'Humour, expressions idiomatiques et codes sociaux implicites',
  description: 'Décodez les références culturelles, l\'humour et les sous-entendus qui échappent souvent aux apprenants avancés.',
  type: 'thematique',
  emoji: '🎭',
  free: false,
  lessons: [
    {
      id: 'b2-cult-01',
      slug: 'b2-humour-ironie',
      moduleSlug: 'b2-nuances-culturelles',
      level: 'B2',
      title: 'L\'humour et l\'ironie en France',
      description: 'Comprendre le second degré, l\'autodérision et l\'humour à la française.',
      duration: 12,
      free: false,
      dialogue: `## Dialogue : Sara découvre l'humour français au bureau

*Sara, arrivée du Liban il y a un an, travaille dans une entreprise française. Elle discute avec sa collègue Léa de l'humour au travail.*

---

**Léa :** Tu as vu, le nouveau café de la machine est encore en panne. C'est sûr, on va tous mourir de déshydratation dans cette entreprise.

**Sara :** *(inquiète)* Vraiment ? C'est si grave que ça ?

**Léa :** *(riant)* Non non, je plaisantais ! C'était du second degré. La machine est juste en panne, ce n'est pas une catastrophe.

**Sara :** Ah... Désolée, je n'ai pas compris que c'était une blague.

**Léa :** C'est normal, l'humour français peut être déroutant au début. On exagère souvent volontairement pour faire rire — c'est ce qu'on appelle l'hyperbole comique. Et on adore aussi se moquer de nous-mêmes : ça s'appelle l'autodérision.

**Sara :** Comme quand Marc a dit "je suis le pire informaticien du monde" après son erreur ?

**Léa :** Exactement ! Il sait très bien qu'il est compétent, mais il préfère en rire plutôt que de se justifier. C'est très français : on n'aime pas trop se vanter directement, alors on tourne les choses en autodérision.

**Sara :** D'accord. Et l'ironie, c'est différent ?

**Léa :** L'ironie, c'est dire le contraire de ce qu'on pense, avec un ton particulier. Si je dis "Quelle belle journée !" alors qu'il pleut des cordes, c'est de l'ironie — le ton et le contexte indiquent que je pense l'inverse.`,

      linguisticPoint: `## Point linguistique : Identifier l'ironie et le second degré

### Indices qui signalent le second degré / l'ironie
1. **Le contexte contredit le contenu** : "Quelle belle journée !" + pluie torrentielle
2. **L'exagération excessive (hyperbole)** : "On va tous mourir de déshydratation" pour une machine à café en panne
3. **Le ton** (difficile à l'écrit, plus facile à l'oral avec l'intonation)
4. **Les emojis/signes à l'écrit** : 😏 / "(au cas où, c'était une blague)" / "#ironie"

### Vocabulaire de l'humour
- **le second degré** : dire quelque chose sans le penser vraiment, pour amuser
- **l'autodérision** : se moquer de soi-même
- **l'hyperbole comique** : exagération volontaire pour faire rire
- **un trait d'esprit** : une remarque drôle et intelligente
- **avoir de l'humour / être pince-sans-rire** : faire de l'humour avec un visage sérieux

### Réagir si on ne comprend pas une blague
- "Attends, c'était une blague ou tu es sérieux/sérieuse ?"
- "Je crois que je n'ai pas saisi le second degré, là."
- "Ah, c'était de l'ironie ? Je n'avais pas capté !"`,

      keyPoints: [
        '"Second degré" = humour où on ne pense pas littéralement ce qu\'on dit',
        '"Autodérision" = se moquer de soi-même (très valorisé socialement en France)',
        'Hyperbole comique = exagération volontaire pour faire rire',
        '"Pince-sans-rire" = faire de l\'humour avec un visage sérieux, sans sourire',
        'Indices de l\'ironie : contexte contredisant le contenu + ton + exagération',
      ],

      exercises: [
        {
          id: 'b2-cult-01-ex01',
          type: 'qcm',
          question: 'Que signifie "second degré" dans l\'humour français ?',
          options: [
            'Une blague méchante',
            'Dire quelque chose qu\'on ne pense pas vraiment, dans une intention humoristique',
            'Une remarque sérieuse et littérale',
            'Une insulte déguisée',
          ],
          correctIndex: 1,
          explanation: 'Le "second degré" désigne un humour où l\'on dit quelque chose qu\'on ne pense PAS littéralement, dans une intention de faire rire. Le sens "premier" (littéral) n\'est pas celui visé — il faut comprendre le sens "second" (humoristique, souvent ironique ou exagéré).',
        },
        {
          id: 'b2-cult-01-ex02',
          type: 'qcm',
          question: 'Quel indice permet de reconnaître l\'ironie dans "Quelle belle journée !" sous une pluie torrentielle ?',
          options: [
            'Le vocabulaire utilisé est complexe',
            'Le CONTEXTE (la pluie) contredit le CONTENU de la phrase (belle journée)',
            'La phrase est trop longue',
            'C\'est une question',
          ],
          correctIndex: 1,
          explanation: 'L\'ironie se reconnaît souvent par une CONTRADICTION entre le CONTEXTE (il pleut) et le CONTENU LITTÉRAL de la phrase ("quelle belle journée"). Cette contradiction signale au lecteur/auditeur que le locuteur pense en réalité l\'inverse de ce qu\'il dit.',
        },
        {
          id: 'b2-cult-01-ex03',
          type: 'qcm',
          question: 'Que signifie "l\'autodérision" ?',
          options: [
            'Critiquer fortement les autres',
            'Se moquer de soi-même, de ses propres défauts ou erreurs',
            'Refuser toute critique',
            'Éviter de parler de soi',
          ],
          correctIndex: 1,
          explanation: '"Autodérision" (auto = soi-même + dérision = moquerie) = se moquer de SOI-MÊME, de ses propres défauts, erreurs ou échecs. Très valorisée socialement en France : elle montre qu\'on ne se prend pas trop au sérieux, qualité humaine appréciée.',
        },
        {
          id: 'b2-cult-01-ex04',
          type: 'qcm',
          question: 'Pourquoi Marc dit-il "je suis le pire informaticien du monde" après une erreur, alors qu\'il est compétent ?',
          options: [
            'Parce qu\'il pense réellement être incompétent',
            'Par autodérision : il préfère en rire plutôt que de se justifier ou de se vanter de ses compétences',
            'Parce qu\'il veut être licencié',
            'Parce qu\'il ne connaît pas le français',
          ],
          correctIndex: 1,
          explanation: 'Marc utilise l\'AUTODÉRISION : il exagère volontairement sa propre incompétence (alors qu\'il est en réalité compétent) pour DÉSAMORCER la situation par l\'humour, plutôt que de se justifier sérieusement ou — pire, socialement parlant en France — de se vanter de ses qualités.',
        },
        {
          id: 'b2-cult-01-ex05',
          type: 'qcm',
          question: 'Que signifie "être pince-sans-rire" ?',
          options: [
            'Ne jamais faire de blagues',
            'Faire de l\'humour avec un air sérieux, sans sourire ni signaler la plaisanterie',
            'Rire de tout sans retenue',
            'Être triste tout le temps',
          ],
          correctIndex: 1,
          explanation: '"Pince-sans-rire" = quelqu\'un qui fait des plaisanteries en gardant un visage SÉRIEUX, sans sourire ni indice visible que c\'est une blague. Cela rend l\'humour parfois difficile à détecter pour quelqu\'un qui ne connaît pas bien la personne ou la culture.',
        },
        {
          id: 'b2-cult-01-ex06',
          type: 'qcm',
          question: '"On va tous mourir de déshydratation" pour une machine à café en panne illustre :',
          options: ['La litote', 'L\'hyperbole comique (exagération volontaire pour faire rire)', 'Une menace réelle', 'Une description objective'],
          correctIndex: 1,
          explanation: 'C\'est une HYPERBOLE COMIQUE : une exagération absurde et volontaire ("mourir de déshydratation" pour un café manquant) destinée à faire rire par son caractère manifestement excessif et disproportionné par rapport à la situation réelle.',
        },
        {
          id: 'b2-cult-01-ex07',
          type: 'qcm',
          question: 'Pourquoi Sara n\'a-t-elle pas immédiatement compris que Léa plaisantait ?',
          options: [
            'Parce qu\'elle ne comprend pas le français',
            'Parce que sans connaître les codes culturels de l\'humour français (hyperbole, second degré), le sens littéral peut sembler inquiétant',
            'Parce que Léa parlait trop vite',
            'Parce que Sara est de mauvaise humeur',
          ],
          correctIndex: 1,
          explanation: 'Sans connaître les CODES CULTURELS de l\'humour français (notamment l\'usage fréquent de l\'hyperbole et du second degré), une phrase prise au sens LITTÉRAL peut sembler inquiétante ou absurde. C\'est un exemple typique de malentendu interculturel lié à l\'humour, qui ne se traduit pas toujours simplement.',
        },
        {
          id: 'b2-cult-01-ex08',
          type: 'qcm',
          question: 'Quelle formule peut-on utiliser si on n\'est pas sûr qu\'une remarque était une blague ?',
          options: [
            '"Tu es complètement stupide."',
            '"Attends, c\'était une blague ou tu es sérieux ?"',
            'Ignorer complètement la personne',
            'Rester silencieux sans rien dire',
          ],
          correctIndex: 1,
          explanation: '"Attends, c\'était une blague ou tu es sérieux ?" est une formule NEUTRE et POLIE pour clarifier une ambiguïté sans paraître impoli ou hostile. Demander une clarification est tout à fait acceptable et montre une attitude ouverte d\'apprentissage culturel.',
        },
        {
          id: 'b2-cult-01-ex09',
          type: 'qcm',
          question: 'Pourquoi l\'autodérision est-elle particulièrement valorisée dans la culture française ?',
          options: [
            'Parce que les Français n\'aiment pas se vanter directement et préfèrent une certaine pudeur teintée d\'humour vis-à-vis de leurs propres qualités',
            'Parce que les Français se détestent eux-mêmes',
            'Parce que c\'est obligatoire dans les entreprises',
            'Parce que cela évite de parler de soi',
          ],
          correctIndex: 0,
          explanation: 'En France, se VANTER directement de ses qualités est souvent perçu comme prétentieux ou de mauvais goût. L\'AUTODÉRISION permet de parler de soi (et même implicitement de montrer ses compétences) tout en gardant une certaine PUDEUR teintée d\'humour, ce qui est socialement plus acceptable.',
        },
        {
          id: 'b2-cult-01-ex10',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un "trait d\'esprit" ?',
          options: [
            'Une erreur grammaticale',
            'Une remarque drôle et intelligente, souvent spontanée',
            'Un long discours sérieux',
            'Une critique méchante',
          ],
          correctIndex: 1,
          explanation: '"Un trait d\'esprit" = une remarque SPIRITUELLE, intelligente et amusante, souvent improvisée. C\'est une expression valorisant la VIVACITÉ d\'esprit et la capacité à formuler une réplique drôle au bon moment, qualité sociale appréciée en France.',
        },
        {
          id: 'b2-cult-01-ex11',
          type: 'qcm',
          question: 'À l\'écrit, comment peut-on signaler l\'ironie quand le ton de voix n\'est pas disponible ?',
          options: [
            'Il est impossible de signaler l\'ironie à l\'écrit',
            'En utilisant des indices comme "#ironie", un emoji, ou une formule explicative entre parenthèses',
            'En écrivant en majuscules',
            'En utilisant uniquement des points d\'exclamation',
          ],
          correctIndex: 1,
          explanation: 'À l\'écrit, sans le TON de voix, on utilise des INDICES explicites : emojis (😏), hashtags ("#ironie", "#sarcasme"), ou formules entre parenthèses ("au cas où, c\'était une blague"). Ces marqueurs compensent l\'absence de signaux oraux (intonation, expression faciale).',
        },
        {
          id: 'b2-cult-01-ex12',
          type: 'qcm',
          question: 'Quelle est la différence entre l\'ironie et le mensonge ?',
          options: [
            'Aucune différence',
            'L\'ironie est comprise comme telle par l\'interlocuteur (intention partagée), le mensonge vise à tromper réellement',
            'L\'ironie est toujours méchante, le mensonge est toujours gentil',
            'Le mensonge est légal, l\'ironie est illégale',
          ],
          correctIndex: 1,
          explanation: 'L\'IRONIE repose sur une COMPLICITÉ implicite : le locuteur s\'attend à ce que l\'interlocuteur COMPRENNE qu\'il ne pense pas littéralement ce qu\'il dit. Le MENSONGE, au contraire, vise à faire CROIRE quelque chose de faux, sans cette complicité partagée.',
        },
        {
          id: 'b2-cult-01-ex13',
          type: 'qcm',
          question: 'Comment Léa réagit-elle quand elle se rend compte que Sara n\'a pas compris la blague ?',
          options: [
            'Elle se moque de Sara',
            'Elle explique calmement et pédagogiquement le concept de second degré',
            'Elle arrête de parler à Sara',
            'Elle se met en colère',
          ],
          correctIndex: 1,
          explanation: 'Léa réagit de façon BIENVEILLANTE et PÉDAGOGIQUE : elle explique le concept ("c\'était du second degré"), normalise la confusion ("c\'est normal, l\'humour français peut être déroutant au début"), et donne des exemples supplémentaires. Cette attitude facilite l\'intégration culturelle de Sara.',
        },
        {
          id: 'b2-cult-01-ex14',
          type: 'qcm',
          question: 'Pourquoi comprendre l\'humour d\'une culture est-il un aspect important de l\'intégration ?',
          options: [
            'Parce que c\'est sans importance pour l\'intégration',
            'Parce que l\'humour révèle des codes culturels profonds et facilite les liens sociaux au travail et dans la vie quotidienne',
            'Parce que c\'est obligatoire légalement',
            'Parce que cela permet d\'éviter toute conversation sérieuse',
          ],
          correctIndex: 1,
          explanation: 'L\'humour révèle des CODES CULTURELS profonds (rapport à la modestie, à l\'autorité, au sérieux...) et facilite grandement les LIENS SOCIAUX. Comprendre et pouvoir participer à l\'humour d\'un groupe (au travail, entre amis) est souvent un signe fort d\'intégration réussie dans une nouvelle culture.',
        },
        {
          id: 'b2-cult-01-ex15',
          type: 'qcm',
          question: 'Quelle formule peut-on utiliser après avoir mal interprété une blague, pour le signaler avec humour ?',
          options: [
            '"Je ne comprends jamais rien."',
            '"Ah, je crois que je n\'ai pas saisi le second degré, là !"',
            '"C\'est de ta faute si je n\'ai pas compris."',
            'Ne rien dire et changer de sujet',
          ],
          correctIndex: 1,
          explanation: '"Je crois que je n\'ai pas saisi le second degré, là !" est une formule LÉGÈRE et AUTO-DÉRISOIRE pour reconnaître son erreur d\'interprétation sans se dévaloriser excessivement. Elle montre une bonne maîtrise des codes (en utilisant même un terme technique de l\'humour : "second degré") tout en restant naturelle.',
        },
        {
          id: 'b2-cult-01-ex16',
          type: 'qcm',
          question: 'Si un collègue dit avec un ton neutre et un visage sérieux "Oh non, encore une réunion, quelle chance incroyable", que doit-on comprendre ?',
          options: [
            'Il est vraiment très content d\'avoir une réunion',
            'C\'est probablement de l\'ironie : il exprime en réalité son agacement par cette réunion supplémentaire',
            'Il parle d\'un jeu de hasard',
            'Il a gagné à la loterie',
          ],
          correctIndex: 1,
          explanation: 'Le ton "pince-sans-rire" et l\'exagération ("quelle chance incroyable" pour une réunion, généralement perçue négativement au travail) sont des signaux d\'IRONIE. Le sens réel est l\'INVERSE du sens littéral : le collègue exprime son agacement ou sa lassitude face à cette réunion supplémentaire.',
        },
        {
          id: 'b2-cult-01-ex17',
          type: 'qcm',
          question: 'Pourquoi l\'humour est-il considéré comme un point de grammaire culturelle difficile, même pour des apprenants B2 ?',
          options: [
            'Parce qu\'il n\'a aucune règle',
            'Parce qu\'il repose sur des références implicites, des codes sociaux et un usage du second degré qui ne s\'apprennent pas comme une règle de grammaire classique',
            'Parce que c\'est interdit aux étrangers',
            'Parce que les Français ne font jamais d\'humour',
          ],
          correctIndex: 1,
          explanation: 'L\'humour repose sur des CODES IMPLICITES (références culturelles, second degré, ironie) qui ne s\'apprennent pas par des règles grammaticales classiques, mais par EXPOSITION RÉPÉTÉE et IMMERSION dans la culture. C\'est pourquoi même des apprenants avancés (B2/C1) peuvent encore mal interpréter certaines plaisanteries.',
        },
        {
          id: 'b2-cult-01-ex18',
          type: 'qcm',
          question: 'Quelle attitude est conseillée si on ne comprend pas une blague dans un contexte professionnel ?',
          options: [
            'Faire comme si on avait compris pour ne pas perdre la face',
            'Demander poliment une clarification, ce qui est socialement acceptable',
            'Quitter immédiatement la conversation',
            'Critiquer la personne pour son humour incompréhensible',
          ],
          correctIndex: 1,
          explanation: 'Demander poliment une CLARIFICATION ("c\'était une blague ?") est tout à fait ACCEPTABLE socialement, même dans un contexte professionnel. Faire comme si on avait compris peut créer des malentendus plus graves à long terme et empêche un véritable apprentissage culturel.',
        },
        {
          id: 'b2-cult-01-ex19',
          type: 'qcm',
          question: '"Déroutant" dans "l\'humour français peut être déroutant au début" signifie :',
          options: ['Amusant', 'Qui désoriente, qui surprend de façon déstabilisante', 'Facile à comprendre', 'Ennuyeux'],
          correctIndex: 1,
          explanation: '"Déroutant" = qui désoriente, qui surprend de façon parfois déstabilisante (de "dérouter" = faire perdre sa route, au sens figuré : perdre ses repères). Léa reconnaît que l\'humour français peut désorienter les personnes qui ne connaissent pas encore ses codes.',
        },
        {
          id: 'b2-cult-01-ex20',
          type: 'qcm',
          question: 'Quelle est la meilleure stratégie à long terme pour mieux comprendre l\'humour d\'une culture étrangère ?',
          options: [
            'Éviter tout contact avec les locuteurs natifs',
            'S\'exposer régulièrement à des interactions sociales authentiques et oser demander des clarifications sans crainte',
            'Apprendre des blagues par cœur sans les comprendre',
            'Ne jamais rire pour éviter les erreurs',
          ],
          correctIndex: 1,
          explanation: 'La meilleure stratégie est l\'EXPOSITION RÉGULIÈRE à des interactions AUTHENTIQUES (conversations réelles, médias, vie sociale) combinée à une attitude OUVERTE qui n\'a pas peur de demander des clarifications. C\'est par la répétition et l\'expérience progressive que les codes implicites de l\'humour deviennent intuitifs.',
        },
      ],
    },

    {
      id: 'b2-cult-02',
      slug: 'b2-expressions-idiomatiques',
      moduleSlug: 'b2-nuances-culturelles',
      level: 'B2',
      title: 'Les expressions idiomatiques courantes',
      description: 'Maîtriser les expressions figées les plus utilisées dans la vie professionnelle et quotidienne.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Pourquoi les expressions idiomatiques sont-elles si importantes ?

Les expressions idiomatiques sont des groupes de mots dont le sens global ne correspond pas à la somme de leurs mots pris séparément. Elles sont omniprésentes en français, y compris dans des contextes professionnels.

**Expressions professionnelles courantes :**
- **"Mettre la main à la pâte"** = participer activement à un travail (pas seulement diriger)
- **"Avoir le bras long"** = avoir des relations influentes
- **"Être au four et au moulin"** = faire plusieurs choses en même temps, être surchargé
- **"Tomber à l'eau"** = échouer, ne pas se réaliser (un projet qui tombe à l'eau)
- **"Mettre les bouchées doubles"** = travailler plus rapidement, accélérer
- **"Avoir du pain sur la planche"** = avoir beaucoup de travail à faire
- **"Rentrer dans le rang"** = se conformer aux règles après les avoir transgressées

**Expressions de la vie quotidienne :**
- **"Poser un lapin"** = ne pas venir à un rendez-vous sans prévenir
- **"Avoir le cafard"** = être triste, déprimé
- **"Casser les pieds"** = ennuyer, importuner quelqu'un
- **"Mettre les pieds dans le plat"** = aborder un sujet délicat sans tact
- **"Ne pas être dans son assiette"** = ne pas se sentir bien

**Conseil d'apprentissage :** Il est inutile de traduire littéralement ces expressions — il faut les apprendre comme des UNITÉS DE SENS, associées à un contexte d'usage.`,

      linguisticPoint: `## Point linguistique : Comprendre une expression idiomatique en contexte

### Méthode pour deviner le sens d'une expression inconnue
1. Identifier le CONTEXTE général de la phrase
2. Repérer si l'expression a un sens POSITIF ou NÉGATIF (souvent indiqué par le ton)
3. Chercher si une IMAGE concrète peut suggérer un sens figuré logique

### Exemple de raisonnement
"Avec ce nouveau projet, on a du pain sur la planche !"
→ Contexte : nouveau projet (action à venir)
→ "Pain sur la planche" évoque visuellement une grande quantité de travail à préparer
→ Sens probable : "beaucoup de travail à faire" ✓

### Piège : ne pas confondre des expressions proches
- "Avoir le bras long" (relations influentes) ≠ "donner un coup de main" (aider)
- "Tomber à l'eau" (échouer) ≠ "être dans le bain" (être habitué à une situation)

### Usage à l'écrit vs à l'oral
La plupart de ces expressions s'utilisent à l'oral et dans un registre courant à familier — à éviter dans un texte très formel (lettre administrative, par exemple).`,

      keyPoints: [
        'Une expression idiomatique = unité de sens, ne pas traduire mot à mot',
        '"Avoir du pain sur la planche" = beaucoup de travail / "tomber à l\'eau" = échouer',
        '"Poser un lapin" = ne pas venir à un rendez-vous sans prévenir',
        '"Mettre les pieds dans le plat" = aborder un sujet délicat sans tact ni précaution',
        'Registre : ces expressions sont courantes à familières, à éviter en contexte très formel',
      ],

      exercises: [
        {
          id: 'b2-cult-02-ex01',
          type: 'qcm',
          question: 'Que signifie "avoir du pain sur la planche" ?',
          options: ['Avoir faim', 'Avoir beaucoup de travail à faire', 'Être riche', 'Cuisiner du pain'],
          correctIndex: 1,
          explanation: '"Avoir du pain sur la planche" = avoir BEAUCOUP DE TRAVAIL à accomplir. Image culinaire : la planche pleine de pâte à pain évoque la quantité de tâches restant à réaliser. Très utilisée dans un contexte professionnel pour signaler une charge de travail importante.',
        },
        {
          id: 'b2-cult-02-ex02',
          type: 'qcm',
          question: 'Si quelqu\'un dit "ce projet est tombé à l\'eau", cela signifie :',
          options: [
            'Le projet a coulé dans une rivière',
            'Le projet a échoué, ne s\'est pas réalisé',
            'Le projet a été un grand succès',
            'Le projet concerne l\'eau ou la mer',
          ],
          correctIndex: 1,
          explanation: '"Tomber à l\'eau" (au sens figuré) = ÉCHOUER, ne pas se réaliser. "Ce projet est tombé à l\'eau" = ce projet a échoué/a été abandonné. Aucun rapport avec l\'eau réellement — c\'est une expression figée à apprendre comme une unité de sens.',
        },
        {
          id: 'b2-cult-02-ex03',
          type: 'qcm',
          question: 'Que signifie "poser un lapin" à quelqu\'un ?',
          options: [
            'Offrir un animal de compagnie',
            'Ne pas venir à un rendez-vous sans prévenir la personne',
            'Faire une blague',
            'Donner un cadeau surprise',
          ],
          correctIndex: 1,
          explanation: '"Poser un lapin" = ne pas se présenter à un RENDEZ-VOUS sans avoir prévenu la personne. "Il m\'a posé un lapin hier soir" = il ne s\'est pas présenté au rendez-vous convenu, sans explication préalable. Expression très courante dans la vie sociale française.',
        },
        {
          id: 'b2-cult-02-ex04',
          type: 'qcm',
          question: 'Que signifie "mettre les pieds dans le plat" ?',
          options: [
            'Faire la cuisine',
            'Aborder un sujet délicat sans tact ni précaution',
            'Être très poli',
            'Refuser de parler d\'un sujet',
          ],
          correctIndex: 1,
          explanation: '"Mettre les pieds dans le plat" = aborder un sujet délicat, sensible ou embarrassant SANS TACT, de façon directe et parfois maladroite. "Il a mis les pieds dans le plat en demandant son salaire devant tout le monde" = il a abordé un sujet gênant sans précaution.',
        },
        {
          id: 'b2-cult-02-ex05',
          type: 'qcm',
          question: 'Que signifie "avoir le bras long" ?',
          options: [
            'Avoir un handicap physique',
            'Avoir des relations influentes qui facilitent certaines démarches',
            'Être très grand de taille',
            'Avoir de longs bras pour le sport',
          ],
          correctIndex: 1,
          explanation: '"Avoir le bras long" = avoir des CONNEXIONS/RELATIONS influentes qui permettent d\'obtenir des avantages ou de faciliter certaines démarches. "Il a le bras long dans cette administration" = il connaît des personnes influentes qui peuvent l\'aider.',
        },
        {
          id: 'b2-cult-02-ex06',
          type: 'qcm',
          question: 'Méthode pour deviner une expression inconnue : que faire AVANT de chercher une définition ?',
          options: [
            'Traduire chaque mot littéralement',
            'Identifier le contexte général et chercher si une image concrète suggère un sens figuré logique',
            'Ignorer complètement l\'expression',
            'Demander immédiatement à quelqu\'un',
          ],
          correctIndex: 1,
          explanation: 'Avant de chercher une DÉFINITION externe, il est utile d\'IDENTIFIER LE CONTEXTE de la phrase et de réfléchir à l\'IMAGE CONCRÈTE évoquée par l\'expression pour en déduire un sens figuré probable. Cette stratégie de déduction développe l\'autonomie de l\'apprenant.',
        },
        {
          id: 'b2-cult-02-ex07',
          type: 'qcm',
          question: 'Que signifie "être au four et au moulin" ?',
          options: [
            'Travailler dans une boulangerie',
            'Faire plusieurs choses en même temps, être surchargé de tâches',
            'Être en vacances',
            'Avoir deux emplois différents',
          ],
          correctIndex: 1,
          explanation: '"Être au four et au moulin" = devoir s\'occuper de PLUSIEURS TÂCHES simultanément, être SURCHARGÉ. L\'image vient du boulanger qui devait surveiller le four ET le moulin en même temps. "Je suis au four et au moulin cette semaine" = je suis débordé de travail.',
        },
        {
          id: 'b2-cult-02-ex08',
          type: 'qcm',
          question: 'Que signifie "ne pas être dans son assiette" ?',
          options: [
            'Avoir perdu son assiette de cuisine',
            'Ne pas se sentir bien physiquement ou moralement',
            'Être en retard à un repas',
            'Ne pas aimer un plat',
          ],
          correctIndex: 1,
          explanation: '"Ne pas être dans son assiette" = ne pas se sentir BIEN, physiquement ou moralement (fatigue, malaise, tristesse légère). "Tu n\'as pas l\'air dans ton assiette aujourd\'hui" = tu sembles fatigué/pas en forme aujourd\'hui. Aucun rapport avec la vaisselle.',
        },
        {
          id: 'b2-cult-02-ex09',
          type: 'qcm',
          question: 'Que signifie "mettre les bouchées doubles" ?',
          options: [
            'Manger deux fois plus',
            'Travailler ou avancer beaucoup plus rapidement qu\'avant',
            'Faire une pause double',
            'Diviser le travail en deux parties',
          ],
          correctIndex: 1,
          explanation: '"Mettre les bouchées doubles" = ACCÉLÉRER, travailler plus VITE pour rattraper un retard ou respecter une échéance. "Il faut mettre les bouchées doubles pour finir le rapport à temps" = nous devons travailler plus rapidement pour terminer dans les délais.',
        },
        {
          id: 'b2-cult-02-ex10',
          type: 'qcm',
          question: 'Que signifie "casser les pieds" à quelqu\'un ?',
          options: [
            'Lui faire mal physiquement aux pieds',
            'L\'ennuyer, l\'importuner de façon répétée',
            'L\'aider efficacement',
            'Lui donner une bonne nouvelle',
          ],
          correctIndex: 1,
          explanation: '"Casser les pieds" (familier) = ENNUYER, IMPORTUNER quelqu\'un, généralement par une insistance répétée ou une présence pesante. "Il me casse les pieds avec ses questions" = il m\'ennuie avec ses questions répétitives. Registre familier, à éviter en contexte formel.',
        },
        {
          id: 'b2-cult-02-ex11',
          type: 'qcm',
          question: 'Quelle expression signifie "participer activement à un travail" (pas seulement diriger) ?',
          options: ['Avoir le bras long', 'Mettre la main à la pâte', 'Avoir le cafard', 'Tomber à l\'eau'],
          correctIndex: 1,
          explanation: '"Mettre la main à la pâte" = PARTICIPER ACTIVEMENT à un travail, s\'impliquer concrètement (pas seulement donner des ordres ou superviser). "Le directeur a mis la main à la pâte pendant la période de forte activité" = il a participé directement aux tâches.',
        },
        {
          id: 'b2-cult-02-ex12',
          type: 'qcm',
          question: 'Que signifie "rentrer dans le rang" ?',
          options: [
            'Faire la queue dans un magasin',
            'Se conformer aux règles établies après les avoir transgressées ou contestées',
            'Quitter définitivement une organisation',
            'Commencer un nouveau travail',
          ],
          correctIndex: 1,
          explanation: '"Rentrer dans le rang" = se CONFORMER aux règles/normes après les avoir transgressées ou contestées (l\'image vient du rang militaire). "Après sa protestation, il est finalement rentré dans le rang" = il a fini par accepter les règles établies.',
        },
        {
          id: 'b2-cult-02-ex13',
          type: 'qcm',
          question: 'Que signifie "avoir le cafard" ?',
          options: [
            'Avoir des insectes chez soi',
            'Être triste, déprimé, mélancolique',
            'Être en colère',
            'Avoir faim',
          ],
          correctIndex: 1,
          explanation: '"Avoir le cafard" = être TRISTE, DÉPRIMÉ, ressentir une mélancolie passagère. "J\'ai un peu le cafard ce soir" = je me sens triste/mélancolique ce soir. Aucun rapport avec l\'insecte — expression purement idiomatique.',
        },
        {
          id: 'b2-cult-02-ex14',
          type: 'qcm',
          question: 'Pourquoi ne faut-il pas traduire littéralement les expressions idiomatiques ?',
          options: [
            'Parce que c\'est interdit par la loi',
            'Parce que le sens global ne correspond pas à la somme des mots pris séparément — c\'est une unité de sens à part',
            'Parce que les expressions n\'ont aucun sens',
            'Parce que la traduction littérale est toujours plus rapide',
          ],
          correctIndex: 1,
          explanation: 'Une expression idiomatique est une UNITÉ DE SENS dont la signification globale ne se déduit PAS de la traduction mot à mot. "Avoir le cafard" ne parle pas d\'insectes — le sens (être triste) doit être appris comme un BLOC, indépendamment des mots qui le composent.',
        },
        {
          id: 'b2-cult-02-ex15',
          type: 'qcm',
          question: 'Dans quel registre ces expressions idiomatiques (poser un lapin, casser les pieds...) sont-elles généralement utilisées ?',
          options: [
            'Uniquement dans un registre très formel et juridique',
            'Dans un registre courant à familier, plutôt à l\'oral',
            'Uniquement dans la littérature classique',
            'Uniquement dans les textes scientifiques',
          ],
          correctIndex: 1,
          explanation: 'La plupart de ces expressions appartiennent à un registre COURANT à FAMILIER, plus fréquentes à l\'ORAL et dans des écrits informels (messages, conversations) qu\'à l\'écrit très formel (lettre administrative, rapport officiel) où elles seraient déplacées.',
        },
        {
          id: 'b2-cult-02-ex16',
          type: 'qcm',
          question: 'Si un collègue dit "j\'ai vraiment du pain sur la planche cette semaine", quelle réponse serait appropriée ?',
          options: [
            '"Tu fais du pain ? Super !"',
            '"Ah, tu es très occupé. Tu as besoin d\'aide ?"',
            '"Pourquoi tu parles de planche ?"',
            'Ne pas réagir car ce n\'est pas important',
          ],
          correctIndex: 1,
          explanation: 'Comprendre que "avoir du pain sur la planche" = être très occupé permet de répondre de façon PERTINENTE et empathique : "tu es très occupé, tu as besoin d\'aide ?" Cela montre qu\'on a bien décodé l\'expression idiomatique sans rester bloqué sur le sens littéral.',
        },
        {
          id: 'b2-cult-02-ex17',
          type: 'qcm',
          question: 'Quelle est la meilleure stratégie pour mémoriser durablement les expressions idiomatiques ?',
          options: [
            'Les apprendre isolément, sans contexte',
            'Les associer à un contexte d\'usage concret et les réutiliser activement dans des phrases personnelles',
            'Les traduire mot à mot dans sa langue maternelle',
            'Ne jamais les utiliser pour éviter les erreurs',
          ],
          correctIndex: 1,
          explanation: 'La mémorisation EFFICACE passe par l\'ASSOCIATION à un CONTEXTE d\'usage concret (qui dit quoi, dans quelle situation) et par la RÉUTILISATION ACTIVE (créer ses propres phrases). Apprendre une liste isolée d\'expressions sans contexte est beaucoup moins efficace à long terme.',
        },
        {
          id: 'b2-cult-02-ex18',
          type: 'qcm',
          question: 'Quelle expression serait la plus appropriée pour dire qu\'un projet a échoué après de longs efforts ?',
          options: [
            'Avoir le bras long',
            'Le projet est tombé à l\'eau',
            'Mettre la main à la pâte',
            'Avoir le cafard',
          ],
          correctIndex: 1,
          explanation: '"Le projet est tombé à l\'eau" = le projet a ÉCHOUÉ, ne s\'est pas réalisé malgré les efforts investis. C\'est l\'expression la plus appropriée pour décrire l\'échec d\'un projet, contrairement aux autres expressions qui n\'ont pas ce sens.',
        },
        {
          id: 'b2-cult-02-ex19',
          type: 'qcm',
          question: 'Pourquoi la compréhension des expressions idiomatiques est-elle un marqueur du niveau B2/C1 plutôt que A2/B1 ?',
          options: [
            'Parce qu\'elles sont rarement utilisées en français',
            'Parce qu\'elles exigent une connaissance culturelle et un vocabulaire figuré qui dépasse la grammaire de base, typique des niveaux avancés',
            'Parce qu\'elles sont interdites aux débutants',
            'Parce qu\'elles n\'ont aucune utilité pratique',
          ],
          correctIndex: 1,
          explanation: 'La maîtrise des expressions idiomatiques exige une connaissance CULTURELLE approfondie et un vocabulaire FIGURÉ qui va au-delà de la grammaire et du vocabulaire de base. C\'est typiquement un marqueur des niveaux AVANCÉS (B2/C1), où l\'apprenant peut comprendre et utiliser un langage plus naturel et idiomatique, proche de celui des locuteurs natifs.',
        },
        {
          id: 'b2-cult-02-ex20',
          type: 'qcm',
          question: 'Un manager dit à son équipe : "Il faut mettre les bouchées doubles avant la fin du mois." Que demande-t-il concrètement ?',
          options: [
            'De manger davantage pendant les pauses',
            'D\'accélérer le rythme de travail pour respecter l\'échéance de fin de mois',
            'De prendre des congés supplémentaires',
            'De réduire la charge de travail',
          ],
          correctIndex: 1,
          explanation: '"Mettre les bouchées doubles" = ACCÉLÉRER le rythme de travail. Le manager demande à son équipe de TRAVAILLER PLUS VITE pour respecter une échéance (fin du mois). Comprendre cette expression est essentiel pour réagir de façon appropriée dans un contexte professionnel.',
        },
      ],
    },

    {
      id: 'b2-cult-03',
      slug: 'b2-codes-sociaux-implicites',
      moduleSlug: 'b2-nuances-culturelles',
      level: 'B2',
      title: 'Les codes sociaux implicites',
      description: 'Tutoiement, vouvoiement, distances sociales et règles non écrites de la politesse française.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Tutoiement, vouvoiement et autres règles non écrites

La société française obéit à des règles de politesse souvent IMPLICITES, jamais formellement enseignées mais largement partagées.

**Le tutoiement et le vouvoiement**
Le choix entre "tu" et "vous" n'est pas qu'une question grammaticale — c'est un marqueur social complexe :
- **Le vouvoiement** est la norme par défaut avec : un inconnu, un supérieur hiérarchique, une personne plus âgée, un client, l'administration.
- **Le tutoiement** s'utilise avec : la famille, les amis, les enfants, et de plus en plus entre collègues dans certaines entreprises (notamment les start-ups).
- **Qui propose le tutoiement ?** Traditionnellement, c'est la personne ayant le statut le plus élevé (âge, hiérarchie) qui propose : "On peut se tutoyer, si vous voulez."
- Passer du vouvoiement au tutoiement sans y être invité peut être perçu comme un manque de respect.

**Les salutations et la distance physique**
- La bise (1 à 4 selon les régions) entre amis et famille, mais PAS systématiquement entre collègues — la poignée de main reste la norme professionnelle par défaut.
- Ne pas faire la bise à un nouveau collègue n'est pas un rejet — c'est souvent la norme.

**Les non-dits dans les invitations**
- "On devrait se voir un de ces jours" = formule de politesse sociale, qui n'engage pas forcément à une date précise.
- "Passez quand vous voulez" = formule chaleureuse mais qui ne signifie pas toujours une invitation à venir réellement sans prévenir.

**La ponctualité**
- Pour un rendez-vous professionnel : ponctualité stricte attendue.
- Pour une invitation privée (dîner) : un léger retard (10-15 min) est généralement toléré, voire implicitement attendu dans certains cercles.`,

      linguisticPoint: `## Point linguistique : Les formules pour gérer le passage au tutoiement

### Proposer le tutoiement
- "On peut se tutoyer, si tu veux / si vous voulez ?"
- "Tu peux me tutoyer, tu sais."
- "Pas besoin de me vouvoyer, on peut se dire 'tu'."

### Accepter ou refuser poliment
- "Avec plaisir !" (acceptation enthousiaste)
- "D'accord, merci." (acceptation neutre)
- "Je préfère peut-être garder le vouvoiement pour l'instant, si cela ne vous dérange pas." (refus poli, rare mais possible)

### Hésiter entre les deux (situation fréquente et acceptable)
- "Excusez-moi, je ne sais pas si on se tutoie ou si on se vouvoie..."
- "On en est où, on se tutoie ?" (familier, entre jeunes collègues)

### Erreur fréquente à éviter
Ne JAMAIS mélanger tutoiement et vouvoiement dans une même phrase avec la même personne ("Tu peux me dire votre nom ?") — c'est perçu comme une faute de cohérence sociale, pas seulement grammaticale.`,

      keyPoints: [
        'Vouvoiement = défaut avec inconnu/supérieur/administration ; tutoiement = famille/amis/parfois collègues',
        'C\'est généralement la personne au statut le plus élevé qui propose le tutoiement',
        'La bise n\'est pas systématique entre collègues — la poignée de main reste la norme pro',
        '"On devrait se voir un de ces jours" = formule sociale, n\'engage pas à une date précise',
        'Ne jamais mélanger tu/vous avec la même personne dans le même échange',
      ],

      exercises: [
        {
          id: 'b2-cult-03-ex01',
          type: 'qcm',
          question: 'Qui propose traditionnellement le passage au tutoiement ?',
          options: [
            'La personne la plus jeune',
            'La personne ayant le statut le plus élevé (âge, hiérarchie)',
            'N\'importe qui, sans règle particulière',
            'Toujours la femme dans un couple hétérosexuel',
          ],
          correctIndex: 1,
          explanation: 'Traditionnellement, c\'est la personne ayant le STATUT le plus élevé (âge supérieur, position hiérarchique plus haute) qui propose le tutoiement. Cette règle reflète une certaine hiérarchie sociale implicite — il serait souvent perçu comme déplacé pour un junior de proposer le tutoiement à son supérieur en premier.',
        },
        {
          id: 'b2-cult-03-ex02',
          type: 'qcm',
          question: 'Que signifie "on devrait se voir un de ces jours" dans la plupart des contextes sociaux français ?',
          options: [
            'Un engagement ferme pour une date précise dans la semaine',
            'Une formule de politesse sociale qui n\'engage pas forcément à un rendez-vous concret',
            'Un refus poli de se revoir',
            'Une invitation officielle écrite',
          ],
          correctIndex: 1,
          explanation: '"On devrait se voir un de ces jours" est souvent une FORMULE DE POLITESSE qui exprime une intention SOCIALE générale sans engagement précis. Cela ne signifie PAS nécessairement qu\'un rendez-vous concret va être organisé — comprendre cette nuance évite des malentendus ou des attentes déçues.',
        },
        {
          id: 'b2-cult-03-ex03',
          type: 'qcm',
          question: 'Dans quel contexte la poignée de main reste-t-elle la norme par défaut, plutôt que la bise ?',
          options: [
            'Entre amis proches',
            'En contexte professionnel, notamment avec de nouveaux collègues ou des partenaires',
            'En famille',
            'Avec les enfants',
          ],
          correctIndex: 1,
          explanation: 'La POIGNÉE DE MAIN reste la norme PROFESSIONNELLE par défaut, surtout avec de nouveaux collègues, des clients ou des partenaires. La bise (plus intime) s\'utilise surtout entre amis et famille, et parfois entre collègues qui se connaissent bien depuis longtemps — mais ce n\'est pas systématique.',
        },
        {
          id: 'b2-cult-03-ex04',
          type: 'qcm',
          question: 'Quelle formule peut-on utiliser pour proposer poliment le tutoiement ?',
          options: [
            '"Tu dois me tutoyer maintenant."',
            '"On peut se tutoyer, si vous voulez ?"',
            '"Pourquoi tu me vouvoies ?"',
            '"Le vouvoiement est interdit."',
          ],
          correctIndex: 1,
          explanation: '"On peut se tutoyer, si vous voulez ?" est une formule POLIE qui propose le tutoiement sans l\'imposer, laissant à l\'interlocuteur la liberté d\'accepter ou de préférer garder le vouvoiement. Cette formule respecte l\'autonomie de décision de l\'autre personne.',
        },
        {
          id: 'b2-cult-03-ex05',
          type: 'qcm',
          question: 'Que se passe-t-il si on passe au tutoiement sans y être invité, avec un supérieur hiérarchique ?',
          options: [
            'C\'est toujours bien perçu',
            'Cela peut être perçu comme un manque de respect ou une familiarité déplacée',
            'C\'est obligatoire dans toutes les entreprises',
            'Cela n\'a aucune conséquence sociale',
          ],
          correctIndex: 1,
          explanation: 'Passer au TUTOIEMENT sans y être INVITÉ, surtout avec un supérieur hiérarchique, peut être perçu comme un MANQUE DE RESPECT ou une familiarité déplacée qui ne respecte pas les codes sociaux implicites. Il est généralement plus prudent d\'attendre que la proposition vienne de l\'autre personne (surtout si elle a un statut plus élevé).',
        },
        {
          id: 'b2-cult-03-ex06',
          type: 'qcm',
          question: 'Combien de bises sont généralement échangées en France entre amis ?',
          options: [
            'Toujours exactement 2, partout en France',
            'Cela varie selon les régions (1 à 4 bises)',
            'Jamais de bises en France',
            'Toujours 5 bises minimum',
          ],
          correctIndex: 1,
          explanation: 'Le nombre de BISES varie selon les RÉGIONS françaises : 1 dans certaines zones, 2 dans la plupart des régions (norme la plus répandue), parfois 3 ou 4 dans d\'autres (Sud-Est, certaines zones spécifiques). Cette variation régionale peut créer des moments de confusion sociale, même entre Français de régions différentes.',
        },
        {
          id: 'b2-cult-03-ex07',
          type: 'qcm',
          question: 'Pourquoi est-il important de NE PAS mélanger tutoiement et vouvoiement avec la même personne ?',
          options: [
            'C\'est seulement une erreur grammaticale sans importance sociale',
            'Le mélange est perçu comme une incohérence sociale, pas seulement une faute de langue',
            'C\'est en fait toujours acceptable en français',
            'Le vouvoiement n\'existe plus en français moderne',
          ],
          correctIndex: 1,
          explanation: 'Mélanger TU et VOUS avec la même personne ("Tu peux me dire votre nom ?") n\'est pas seulement une erreur GRAMMATICALE — c\'est une INCOHÉRENCE SOCIALE qui peut créer de la confusion sur la nature de la relation (formelle ou informelle) entretenue avec cette personne.',
        },
        {
          id: 'b2-cult-03-ex08',
          type: 'qcm',
          question: 'Pour un rendez-vous PROFESSIONNEL en France, quelle attitude est attendue concernant la ponctualité ?',
          options: [
            'Un retard de 30 minutes est toujours acceptable',
            'La ponctualité stricte est généralement attendue',
            'Arriver en avance est très mal vu',
            'Il n\'y a aucune règle particulière',
          ],
          correctIndex: 1,
          explanation: 'Pour un RENDEZ-VOUS PROFESSIONNEL, la PONCTUALITÉ STRICTE est généralement attendue — arriver en retard, même de quelques minutes, peut être perçu négativement et donner une mauvaise impression de sérieux ou de respect du temps de l\'autre.',
        },
        {
          id: 'b2-cult-03-ex09',
          type: 'qcm',
          question: 'Que signifie l\'expression "passez quand vous voulez" lancée lors d\'une conversation amicale ?',
          options: [
            'Une invitation formelle nécessitant de fixer une date précise immédiatement',
            'Une formule chaleureuse qui ne signifie pas toujours qu\'il faut venir réellement sans prévenir',
            'Un ordre direct de venir immédiatement',
            'Une formule purement administrative',
          ],
          correctIndex: 1,
          explanation: '"Passez quand vous voulez" est souvent une formule CHALEUREUSE et SOCIALE qui exprime une disponibilité générale, mais qui ne signifie pas qu\'il faut se présenter réellement sans prévenir au préalable. Il est généralement préférable de confirmer avant de venir, par politesse.',
        },
        {
          id: 'b2-cult-03-ex10',
          type: 'qcm',
          question: 'Pour une invitation à dîner PRIVÉE chez des amis, quelle marge de retard est généralement tolérée ?',
          options: [
            'Aucune tolérance, ponctualité absolue exigée',
            'Un léger retard de 10-15 minutes est généralement toléré, voire implicitement attendu',
            'Un retard de 2 heures est toujours acceptable',
            'Il faut toujours arriver très en avance',
          ],
          correctIndex: 1,
          explanation: 'Pour une invitation PRIVÉE (dîner entre amis), un LÉGER RETARD de 10-15 minutes est généralement TOLÉRÉ, et parfois même implicitement attendu dans certains cercles sociaux. Cela contraste fortement avec les rendez-vous PROFESSIONNELS où la ponctualité stricte est de rigueur.',
        },
        {
          id: 'b2-cult-03-ex11',
          type: 'qcm',
          question: 'Avec quel groupe de personnes le vouvoiement est-il la norme par défaut ?',
          options: [
            'Les enfants de sa propre famille',
            'Les inconnus, les supérieurs hiérarchiques, l\'administration',
            'Les amis proches',
            'Les animaux de compagnie',
          ],
          correctIndex: 1,
          explanation: 'Le VOUVOIEMENT est la norme par DÉFAUT avec les personnes qu\'on ne connaît pas (inconnus), les SUPÉRIEURS hiérarchiques, les personnes plus âgées qu\'on rencontre pour la première fois, et systématiquement avec l\'ADMINISTRATION (préfecture, impôts, services publics).',
        },
        {
          id: 'b2-cult-03-ex12',
          type: 'qcm',
          question: 'Si on ne sait pas s\'il faut tutoyer ou vouvoyer quelqu\'un, quelle attitude est socialement recommandée ?',
          options: [
            'Choisir le tutoiement par défaut pour montrer sa familiarité',
            'Vouvoyer par défaut, et attendre une invitation explicite pour tutoyer',
            'Mélanger les deux pour couvrir toutes les possibilités',
            'Éviter complètement de parler à cette personne',
          ],
          correctIndex: 1,
          explanation: 'En cas de DOUTE, il est socialement plus SÛR de VOUVOYER par défaut (option la plus respectueuse et neutre) et d\'attendre une invitation EXPLICITE de l\'autre personne pour passer au tutoiement, plutôt que de risquer une familiarité perçue comme déplacée.',
        },
        {
          id: 'b2-cult-03-ex13',
          type: 'qcm',
          question: 'Pourquoi certaines start-ups françaises adoptent-elles le tutoiement systématique entre tous les employés ?',
          options: [
            'Parce que c\'est obligatoire légalement dans ce secteur',
            'Pour créer une culture d\'entreprise plus horizontale et décontractée, en rupture avec les hiérarchies traditionnelles',
            'Parce que le vouvoiement est devenu illégal',
            'Par hasard, sans intention particulière',
          ],
          correctIndex: 1,
          explanation: 'Le tutoiement SYSTÉMATIQUE dans certaines entreprises (notamment start-ups) reflète une volonté de créer une culture d\'entreprise plus HORIZONTALE et DÉCONTRACTÉE, en rupture avec les hiérarchies traditionnelles plus formelles des grandes entreprises classiques.',
        },
        {
          id: 'b2-cult-03-ex14',
          type: 'qcm',
          question: 'Quelle formule permet d\'exprimer poliment son incertitude sur l\'usage du tu/vous ?',
          options: [
            '"Je m\'en fiche complètement."',
            '"Excusez-moi, je ne sais pas si on se tutoie ou si on se vouvoie..."',
            '"C\'est sans importance, parlez comme vous voulez."',
            'Ne rien dire et choisir au hasard',
          ],
          correctIndex: 1,
          explanation: '"Excusez-moi, je ne sais pas si on se tutoie ou si on se vouvoie..." est une formule TRANSPARENTE et POLIE qui exprime ouvertement l\'incertitude, permettant à l\'interlocuteur de clarifier la situation sans malaise excessif. Cette franchise est généralement bien accueillie.',
        },
        {
          id: 'b2-cult-03-ex15',
          type: 'qcm',
          question: 'Ne pas faire la bise à un nouveau collègue le premier jour signifie généralement :',
          options: [
            'Un rejet social explicite',
            'Une norme professionnelle classique, sans signification négative particulière',
            'Une grave offense',
            'Une obligation légale d\'éviter tout contact',
          ],
          correctIndex: 1,
          explanation: 'Ne PAS faire la bise à un nouveau collègue, surtout le premier jour, est généralement la NORME PROFESSIONNELLE classique (poignée de main par défaut), sans signification négative. Cela ne doit pas être interprété comme un rejet personnel.',
        },
        {
          id: 'b2-cult-03-ex16',
          type: 'qcm',
          question: 'Quelle est la différence d\'attentes de ponctualité entre un rendez-vous administratif et un dîner entre amis ?',
          options: [
            'Aucune différence, les mêmes règles s\'appliquent partout',
            'Le rendez-vous administratif/professionnel exige une ponctualité stricte, tandis qu\'un léger retard social est plus tolérable pour un dîner privé',
            'Le dîner privé exige plus de ponctualité que le rendez-vous administratif',
            'La ponctualité n\'a aucune importance en France',
          ],
          correctIndex: 1,
          explanation: 'Cette distinction est un CODE SOCIAL IMPLICITE important : la ponctualité STRICTE est attendue pour les contextes PROFESSIONNELS/ADMINISTRATIFS, alors qu\'un léger retard social (10-15 min) est davantage TOLÉRÉ pour les invitations PRIVÉES informelles.',
        },
        {
          id: 'b2-cult-03-ex17',
          type: 'qcm',
          question: 'Pourquoi ces codes sociaux ne sont-ils généralement pas "enseignés" formellement, contrairement à la grammaire ?',
          options: [
            'Parce qu\'ils n\'ont aucune importance réelle',
            'Parce qu\'ils sont implicites et transmis par observation et imitation sociale plutôt que par un enseignement formel',
            'Parce qu\'ils changent tous les jours',
            'Parce qu\'ils ne s\'appliquent qu\'aux étrangers',
          ],
          correctIndex: 1,
          explanation: 'Les codes sociaux IMPLICITES (tutoiement/vouvoiement, bise, ponctualité variable selon contexte) sont généralement transmis par OBSERVATION et IMITATION SOCIALE au sein d\'une culture, plutôt que par un enseignement formel comme la grammaire. C\'est pourquoi ils sont souvent les plus difficiles à maîtriser pour un apprenant non natif.',
        },
        {
          id: 'b2-cult-03-ex18',
          type: 'qcm',
          question: 'Que risque-t-on en interprétant TOUTES les formules de politesse sociale ("on devrait se voir") au sens LITTÉRAL ?',
          options: [
            'Aucun risque particulier',
            'Des malentendus sociaux ou des attentes déçues si on prend pour un engagement ferme ce qui était une formule de courtoisie',
            'Une amélioration immédiate des relations sociales',
            'Une compréhension parfaite de la culture française',
          ],
          correctIndex: 1,
          explanation: 'Prendre LITTÉRALEMENT des formules qui sont en réalité des marqueurs de POLITESSE SOCIALE peut créer des MALENTENDUS ou des ATTENTES DÉÇUES (par exemple, s\'attendre à un rendez-vous concret qui n\'arrive jamais). Reconnaître ces nuances fait partie de la compétence culturelle avancée.',
        },
        {
          id: 'b2-cult-03-ex19',
          type: 'qcm',
          question: 'Quelle attitude générale les Français adoptent-ils envers les étrangers qui font des erreurs de tutoiement/vouvoiement par méconnaissance des codes ?',
          options: [
            'Une intolérance totale et systématique',
            'Généralement une certaine indulgence, car ces erreurs sont reconnues comme liées à la méconnaissance culturelle plutôt qu\'à un manque de respect intentionnel',
            'Une expulsion immédiate de toute interaction sociale',
            'Aucune réaction, car ces règles n\'existent pas vraiment',
          ],
          correctIndex: 1,
          explanation: 'Les Français font généralement preuve d\'une certaine INDULGENCE envers les étrangers qui se trompent sur ces codes, comprenant que cela relève souvent d\'une MÉCONNAISSANCE CULTURELLE plutôt que d\'un manque de respect intentionnel. Cela n\'enlève cependant pas l\'intérêt d\'apprendre ces nuances pour une intégration plus fluide.',
        },
        {
          id: 'b2-cult-03-ex20',
          type: 'qcm',
          question: 'Quelle est la meilleure approche pour un nouvel arrivant face à ces codes sociaux implicites complexes ?',
          options: [
            'Les ignorer complètement car ils sont trop compliqués',
            'Observer attentivement les comportements des Français dans différents contextes et adapter progressivement son propre comportement',
            'Toujours utiliser le tutoiement par défaut pour simplifier',
            'Éviter toute interaction sociale pour ne jamais se tromper',
          ],
          correctIndex: 1,
          explanation: 'La meilleure approche est l\'OBSERVATION ATTENTIVE des comportements dans différents contextes (professionnel vs privé, formel vs informel) combinée à une ADAPTATION PROGRESSIVE. Ces codes s\'apprennent par l\'expérience accumulée plutôt que par une règle unique applicable à toutes les situations.',
        },
      ],
    },

    {
      id: 'b2-cult-04',
      slug: 'b2-sous-entendus-implicite',
      moduleSlug: 'b2-nuances-culturelles',
      level: 'B2',
      title: 'Comprendre les sous-entendus',
      description: 'Décoder ce qui n\'est pas dit explicitement dans une conversation ou un courrier.',
      duration: 12,
      free: false,
      dialogue: `## Dialogue : Amira décode un courrier de sa propriétaire

*Amira reçoit un message de sa propriétaire après une visite de l'appartement.*

---

**Message de la propriétaire :** "Bonjour Amira, merci pour la visite de ce matin. L'appartement est globalement bien entretenu. J'ai juste remarqué quelques petites traces sur les murs du salon. Sinon tout va bien, je vous recontacte bientôt pour la suite. Bonne journée."

**Amira à sa collègue :** Tu penses qu'elle est contente ou pas ? Le message me semble plutôt positif...

**Collègue :** Attends, relis bien. "Globalement bien entretenu" — le mot "globalement" sous-entend qu'il y a des réserves. Et "j'ai JUSTE remarqué quelques traces" — ce "juste" minimise, mais en réalité, c'est probablement le point qui l'a le plus dérangée. Si elle l'avait vraiment trouvé impeccable, elle n'aurait rien mentionné du tout.

**Amira :** Ah... Et "je vous recontacte bientôt", ça veut dire quoi exactement ?

**Collègue :** Ça peut vouloir dire qu'elle réfléchit encore — peut-être à une retenue sur le dépôt de garantie pour la remise en état. Le ton reste poli, mais il y a une réserve implicite derrière la politesse.

**Amira :** Donc le message n'est pas aussi positif qu'il semble à première vue.

**Collègue :** Exactement. En France, on évite souvent de dire les choses trop directement, surtout par écrit. Il faut apprendre à lire "entre les lignes".`,

      linguisticPoint: `## Point linguistique : Les marqueurs linguistiques de l'implicite

### Mots qui minimisent (et signalent souvent l'inverse)
- "**Juste**" : "j'ai juste remarqué..." (= en réalité, ce point compte beaucoup)
- "**Un peu**" : "c'est un peu décevant" (= c'est assez décevant, dit avec retenue)
- "**Globalement**" : "globalement bien" (= sous-entend des réserves sur certains points précis)

### Formules de politesse qui cachent une réserve
- "Je vous recontacte bientôt" (peut signaler une décision en attente, pas forcément positive)
- "C'est intéressant" (peut être un compliment neutre OU une façon polie de ne pas dire qu'on n'aime pas)
- "Il faudrait peut-être revoir ce point" (recommandation polie = souvent un problème plus sérieux qu'il n'y paraît)

### Ce que le SILENCE sur un sujet peut signifier
Si une personne ne mentionne PAS un point qu'on attendait (un compliment, une validation), cela peut être révélateur en soi — l'absence de commentaire n'est pas neutre.

### Comment vérifier une interprétation de l'implicite
- "Si je comprends bien, vous avez une réserve sur... ?"
- "Y a-t-il un point qui vous préoccupe en particulier ?"`,

      keyPoints: [
        '"Globalement bien" = sous-entend des réserves sur des points précis, pas un compliment total',
        '"Juste" minimisant ("j\'ai juste remarqué") signale souvent que le point compte BEAUCOUP',
        'L\'absence de commentaire sur un point attendu peut être révélatrice en soi',
        'La politesse écrite française évite souvent la franchise directe — il faut lire "entre les lignes"',
        'Pour vérifier : poser une question directe ("y a-t-il un point qui vous préoccupe ?")',
      ],

      exercises: [
        {
          id: 'b2-cult-04-ex01',
          type: 'qcm',
          question: 'Que sous-entend le mot "globalement" dans "l\'appartement est globalement bien entretenu" ?',
          options: [
            'L\'appartement est parfait sans aucune réserve',
            'Il y a des réserves sur certains points précis, malgré une appréciation générale positive',
            'L\'appartement est dans un état catastrophique',
            'La propriétaire n\'a pas d\'opinion sur l\'appartement',
          ],
          correctIndex: 1,
          explanation: '"Globalement" introduit une appréciation GÉNÉRALE positive tout en SOUS-ENTENDANT qu\'il existe des EXCEPTIONS ou RÉSERVES sur des points précis (qui seront probablement détaillés ensuite). C\'est un marqueur classique de l\'implicite dans la communication française écrite.',
        },
        {
          id: 'b2-cult-04-ex02',
          type: 'qcm',
          question: 'Pourquoi le mot "juste" dans "j\'ai juste remarqué quelques traces" signale-t-il souvent l\'inverse de sa fonction minimisante ?',
          options: [
            'Parce que "juste" n\'a aucune signification particulière',
            'Parce que le fait même de mentionner ce point, malgré la minimisation apparente, révèle son importance réelle pour la personne qui écrit',
            'Parce que "juste" signifie toujours "complètement"',
            'Parce que c\'est une erreur grammaticale',
          ],
          correctIndex: 1,
          explanation: 'Le paradoxe de "juste" minimisant : si le point n\'avait VRAIMENT aucune importance, la personne ne l\'AURAIT PAS MENTIONNÉ du tout. Le fait de le signaler, même en l\'atténuant avec "juste", révèle souvent que ce point a en réalité PESÉ dans l\'appréciation globale.',
        },
        {
          id: 'b2-cult-04-ex03',
          type: 'qcm',
          question: 'Que peut signifier l\'absence de commentaire positif explicite quand on s\'attendrait à en recevoir un ?',
          options: [
            'Rien du tout, c\'est toujours neutre',
            'Cela peut être révélateur en soi — l\'absence n\'est pas neutre dans la communication implicite',
            'Cela signifie toujours une approbation totale',
            'Cela n\'a jamais aucune signification',
          ],
          correctIndex: 1,
          explanation: 'Dans la communication IMPLICITE, l\'ABSENCE d\'un élément attendu (un compliment, une validation explicite) peut être tout aussi RÉVÉLATRICE qu\'une déclaration explicite. Si on attendait un compliment et qu\'il n\'arrive pas, cela peut signaler une réserve non formulée directement.',
        },
        {
          id: 'b2-cult-04-ex04',
          type: 'qcm',
          question: 'Que peut signaler la formule "je vous recontacte bientôt" dans ce contexte ?',
          options: [
            'Une confirmation immédiate et certaine que tout va bien',
            'Une décision encore en attente, potentiellement liée à un point négatif (comme une retenue sur le dépôt de garantie)',
            'Un refus définitif',
            'Aucune signification particulière',
          ],
          correctIndex: 1,
          explanation: '"Je vous recontacte bientôt" peut signaler une DÉCISION EN ATTENTE, parfois liée à un point NON résolu (ici, potentiellement une retenue sur le dépôt de garantie pour la remise en état). Cette formule polie reste vague intentionnellement, sans s\'engager sur une issue positive ou négative.',
        },
        {
          id: 'b2-cult-04-ex05',
          type: 'qcm',
          question: 'Que signifie "c\'est intéressant" dit de façon neutre, sans enthousiasme particulier ?',
          options: [
            'Toujours un compliment enthousiaste',
            'Cela peut être une façon polie de ne pas exprimer un désaccord ou un manque d\'enthousiasme franc',
            'Toujours une critique sévère',
            'Une formule sans aucune ambiguïté possible',
          ],
          correctIndex: 1,
          explanation: '"C\'est intéressant" dit sans enthousiasme particulier (ton neutre, pas de développement) peut être une façon POLIE d\'éviter d\'exprimer un désaccord ou un manque d\'enthousiasme de façon trop directe. Le contexte et le ton sont essentiels pour interpréter correctement cette formule ambiguë.',
        },
        {
          id: 'b2-cult-04-ex06',
          type: 'qcm',
          question: 'Quelle question peut-on poser pour vérifier une interprétation de l\'implicite sans paraître accusateur ?',
          options: [
            '"Vous me détestez, c\'est ça ?"',
            '"Y a-t-il un point qui vous préoccupe en particulier ?"',
            '"Pourquoi vous ne dites pas la vérité ?"',
            'Ne jamais poser de question, juste deviner',
          ],
          correctIndex: 1,
          explanation: '"Y a-t-il un point qui vous préoccupe en particulier ?" est une question NEUTRE et OUVERTE qui permet de clarifier une situation ambiguë sans paraître accusateur ni présumer d\'une réponse négative. Cette approche diplomatique facilite une communication plus directe si nécessaire.',
        },
        {
          id: 'b2-cult-04-ex07',
          type: 'qcm',
          question: 'Pourquoi la communication écrite française évite-t-elle souvent la franchise trop directe dans des situations délicates ?',
          options: [
            'Parce que les Français ne savent pas exprimer leurs opinions',
            'Par souci de politesse et pour préserver la relation, privilégiant des formulations atténuées plutôt qu\'une confrontation directe',
            'Parce que c\'est interdit par la loi',
            'Parce que l\'écrit ne permet pas d\'exprimer d\'opinions',
          ],
          correctIndex: 1,
          explanation: 'La culture française privilégie souvent des formulations ATTÉNUÉES dans des situations DÉLICATES (critique, désaccord) par SOUCI DE POLITESSE et pour PRÉSERVER LA RELATION, plutôt qu\'une confrontation trop directe qui pourrait être perçue comme agressive ou impolie.',
        },
        {
          id: 'b2-cult-04-ex08',
          type: 'qcm',
          question: 'Que signifie "il faudrait peut-être revoir ce point" dans un contexte professionnel ?',
          options: [
            'Ce point est parfait, aucun changement nécessaire',
            'C\'est souvent une critique polie signalant un problème plus sérieux qu\'il n\'y paraît littéralement',
            'C\'est un ordre direct et urgent',
            'Cela n\'a aucune signification particulière',
          ],
          correctIndex: 1,
          explanation: '"Il faudrait peut-être revoir ce point" est une formulation ATTÉNUÉE ("peut-être", conditionnel) qui, dans un contexte professionnel, signale souvent un PROBLÈME plus SÉRIEUX que ce que la formulation littérale suggère. L\'atténuation est une politesse, pas une indication de faible importance.',
        },
        {
          id: 'b2-cult-04-ex09',
          type: 'qcm',
          question: 'Dans le dialogue, pourquoi la collègue conseille-t-elle à Amira de "lire entre les lignes" ?',
          options: [
            'Parce que le message contient des erreurs d\'orthographe',
            'Parce que le sens réel du message dépasse son contenu littéral, et nécessite une interprétation des sous-entendus culturels',
            'Parce que le message est écrit dans une langue étrangère',
            'Parce que le message est trop court pour être compris',
          ],
          correctIndex: 1,
          explanation: '"Lire entre les lignes" signifie comprendre le SENS RÉEL d\'un message au-delà de son CONTENU LITTÉRAL, en décodant les sous-entendus, les minimisations et les silences révélateurs. C\'est une compétence culturelle essentielle pour bien interpréter la communication française, notamment écrite et formelle.',
        },
        {
          id: 'b2-cult-04-ex10',
          type: 'qcm',
          question: 'Que signifie "un peu décevant" dans une phrase comme "le résultat est un peu décevant" ?',
          options: [
            'Le résultat est extrêmement satisfaisant',
            'Le résultat est probablement assez décevant, exprimé avec une retenue polie',
            'Le résultat n\'a aucune importance',
            'Le résultat est exactement ce qui était attendu',
          ],
          correctIndex: 1,
          explanation: '"Un peu décevant" minimise volontairement l\'ampleur de la déception réelle, qui est souvent PLUS IMPORTANTE que ce que suggère littéralement "un peu". Cette RETENUE polie est typique de la communication implicite française dans des situations négatives ou délicates.',
        },
        {
          id: 'b2-cult-04-ex11',
          type: 'qcm',
          question: 'Quelle est la stratégie d\'Amira et de sa collègue pour analyser le message de la propriétaire ?',
          options: [
            'Ignorer complètement le message',
            'Analyser chaque mot et formule pour identifier les sous-entendus possibles derrière le ton poli',
            'Répondre immédiatement sans réfléchir',
            'Accuser directement la propriétaire de mauvaise foi',
          ],
          correctIndex: 1,
          explanation: 'La stratégie consiste à ANALYSER chaque mot et formule ("globalement", "juste", "je vous recontacte bientôt") pour identifier les SOUS-ENTENDUS possibles derrière le ton poli et neutre. Cette approche analytique aide à anticiper la suite probable (par exemple, une retenue sur le dépôt de garantie).',
        },
        {
          id: 'b2-cult-04-ex12',
          type: 'qcm',
          question: 'Pourquoi est-il risqué d\'interpréter un message implicite de façon trop hâtive sans vérification ?',
          options: [
            'Aucun risque, l\'interprétation est toujours certaine à 100%',
            'On peut se tromper sur l\'intention réelle, d\'où l\'intérêt de poser une question de clarification si une décision importante en dépend',
            'C\'est toujours mieux de ne jamais analyser un message',
            'Cela n\'a aucune conséquence pratique',
          ],
          correctIndex: 1,
          explanation: 'L\'interprétation de l\'IMPLICITE reste une HYPOTHÈSE, jamais une certitude absolue. Si une DÉCISION IMPORTANTE dépend de cette interprétation (par exemple, anticiper une retenue financière), il est plus PRUDENT de poser une question de CLARIFICATION plutôt que d\'agir uniquement sur une supposition.',
        },
        {
          id: 'b2-cult-04-ex13',
          type: 'qcm',
          question: 'Quel est le principal avantage culturel à apprendre à décoder l\'implicite en français ?',
          options: [
            'Aucun avantage réel',
            'Éviter les malentendus, mieux anticiper les réactions des interlocuteurs et naviguer plus efficacement les interactions sociales et professionnelles',
            'Pouvoir mentir plus facilement',
            'Éviter complètement toute communication écrite',
          ],
          correctIndex: 1,
          explanation: 'Décoder l\'implicite permet d\'ÉVITER LES MALENTENDUS, de mieux ANTICIPER les réactions ou décisions des interlocuteurs (comme une retenue sur dépôt de garantie), et de NAVIGUER plus EFFICACEMENT les interactions sociales et professionnelles en France, où la communication directe n\'est pas toujours la norme.',
        },
        {
          id: 'b2-cult-04-ex14',
          type: 'qcm',
          question: 'Quelle expression résume bien la compétence de comprendre les sous-entendus ?',
          options: [
            '"Parler la langue de bois"',
            '"Lire entre les lignes"',
            '"Tourner autour du pot"',
            '"Mettre la charrue avant les bœufs"',
          ],
          correctIndex: 1,
          explanation: '"Lire entre les lignes" est l\'expression EXACTE pour désigner la compétence de COMPRENDRE le sens IMPLICITE d\'un texte ou d\'un discours, au-delà de son contenu littéral. C\'est une compétence linguistique et culturelle de haut niveau, particulièrement utile en B2/C1.',
        },
        {
          id: 'b2-cult-04-ex15',
          type: 'qcm',
          question: 'Si un message professionnel se termine par "sinon tout va bien" après avoir mentionné un point négatif, que cela signifie-t-il généralement ?',
          options: [
            'Le point négatif mentionné avant n\'a en réalité aucune importance',
            'C\'est une formule de transition qui minimise artificiellement le point négatif déjà évoqué, sans forcément refléter son importance réelle',
            'Tout est parfait sans aucune réserve',
            'Le message contient une erreur de frappe',
          ],
          correctIndex: 1,
          explanation: '"Sinon tout va bien" après un point négatif fonctionne comme une TRANSITION qui clôt artificiellement la discussion sur ce point, sans que cela signifie nécessairement qu\'il est sans importance. C\'est souvent une façon de ne pas s\'attarder davantage sur un sujet délicat à l\'écrit.',
        },
        {
          id: 'b2-cult-04-ex16',
          type: 'qcm',
          question: 'Pourquoi serait-il maladroit pour Amira de répondre directement "Vous voulez dire que vous allez retenir de l\'argent sur ma caution ?" ?',
          options: [
            'Ce serait toujours parfaitement approprié',
            'Cela pourrait paraître trop direct et accusateur par rapport au ton poli et mesuré du message reçu, créant une tension inutile',
            'C\'est la seule formulation possible en français',
            'Cela n\'aurait aucune conséquence sur la relation',
          ],
          correctIndex: 1,
          explanation: 'Répondre de façon trop DIRECTE et ACCUSATOIRE à un message volontairement MESURÉ et POLI créerait un décalage de TON qui pourrait être perçu comme AGRESSIF, générant une tension inutile. Une réponse plus diplomatique (demander des précisions de façon neutre) serait socialement plus appropriée.',
        },
        {
          id: 'b2-cult-04-ex17',
          type: 'qcm',
          question: 'Quelle compétence cognitive complexe est nécessaire pour décoder efficacement l\'implicite ?',
          options: [
            'La simple mémorisation de vocabulaire',
            'La capacité à analyser le contexte, le choix des mots, le ton et les silences pour reconstruire un sens non explicite',
            'La capacité à parler très vite',
            'La capacité à éviter toute interaction sociale',
          ],
          correctIndex: 1,
          explanation: 'Décoder l\'implicite nécessite une analyse MULTI-DIMENSIONNELLE : le CONTEXTE de la communication, le CHOIX précis des MOTS (juste, globalement...), le TON employé, et même les SILENCES ou ABSENCES de commentaires. C\'est une compétence cognitive avancée, typique de la maîtrise linguistique de niveau B2/C1.',
        },
        {
          id: 'b2-cult-04-ex18',
          type: 'qcm',
          question: 'Dans le contexte de l\'administration française, pourquoi est-il important de bien décoder les formulations officielles ?',
          options: [
            'Ce n\'est jamais important, l\'administration est toujours parfaitement claire',
            'Parce que certaines formulations administratives peuvent contenir des nuances importantes (délais, réserves, conditions) qu\'il faut savoir identifier',
            'Parce que l\'administration ne communique jamais par écrit',
            'Parce que c\'est interdit de comprendre les courriers administratifs',
          ],
          correctIndex: 1,
          explanation: 'Les formulations ADMINISTRATIVES peuvent contenir des NUANCES importantes (conditions, réserves, délais implicites) qu\'il est essentiel de bien IDENTIFIER pour éviter des erreurs de compréhension qui pourraient avoir des conséquences pratiques (délais manqués, droits non exercés à temps).',
        },
        {
          id: 'b2-cult-04-ex19',
          type: 'qcm',
          question: 'Quelle attitude générale est recommandée face à un message ambigu dont l\'enjeu est important ?',
          options: [
            'Toujours supposer le pire sans vérification',
            'Analyser les indices disponibles, formuler une hypothèse raisonnable, et si nécessaire, poser une question de clarification',
            'Ignorer complètement le message',
            'Toujours supposer le meilleur sans aucune analyse',
          ],
          correctIndex: 1,
          explanation: 'La démarche RECOMMANDÉE combine ANALYSE des indices disponibles (mots, ton, contexte), formulation d\'une HYPOTHÈSE RAISONNABLE, et au besoin, une QUESTION DE CLARIFICATION si l\'enjeu pratique est important. Cette approche équilibrée évite à la fois la naïveté et la sur-interprétation anxieuse.',
        },
        {
          id: 'b2-cult-04-ex20',
          type: 'qcm',
          question: 'Pourquoi ce type de compétence (décoder l\'implicite) est-il particulièrement valorisé dans le cadre d\'une préparation à l\'entretien de naturalisation ou à l\'intégration professionnelle ?',
          options: [
            'Ce n\'est pas pertinent pour ces contextes',
            'Parce qu\'une bonne intégration suppose de comprendre les codes de communication subtils de la société d\'accueil, au-delà de la simple maîtrise grammaticale',
            'Parce que c\'est obligatoire de mentir à l\'administration',
            'Parce que les entretiens de naturalisation testent uniquement le vocabulaire',
          ],
          correctIndex: 1,
          explanation: 'Une INTÉGRATION réussie suppose de comprendre les CODES DE COMMUNICATION subtils de la société d\'accueil (sous-entendus, politesse atténuée, formules sociales), au-delà de la simple maîtrise GRAMMATICALE. Cette compétence facilite des interactions plus fluides et naturelles dans tous les aspects de la vie en France — professionnel, administratif et social.',
        },
      ],
    },
  ],
};
