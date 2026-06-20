import type { LangModule } from '../types';

export const b1ExprimerOpinion: LangModule = {
  id: 'b1-mod-02',
  slug: 'b1-exprimer-opinion',
  level: 'B1',
  title: 'Exprimer son opinion',
  subtitle: 'Argumenter, nuancer et défendre ses idées',
  description: 'Développez votre capacité à exprimer des opinions nuancées, à argumenter et à participer à une discussion en français.',
  type: 'thematique',
  emoji: '💬',
  free: false,
  lessons: [
    {
      id: 'b1-op-01',
      slug: 'b1-donner-avis',
      moduleSlug: 'b1-exprimer-opinion',
      level: 'B1',
      title: 'Donner et défendre son avis',
      description: 'Apprenez à exprimer votre opinion de façon nuancée avec les formules appropriées selon le registre.',
      duration: 35,
      free: false,
      dialogue: `## Dialogue : Discussion sur la politique d'intégration

*Lors d'un café de discussion interculturel à Lyon, deux participants échangent leurs points de vue.*

**Karim :** À mon avis, la politique d'intégration française est trop centrée sur l'assimilation. On demande aux immigrés de devenir "français" et d'oublier leur culture d'origine.

**Marie :** Je ne suis pas tout à fait d'accord avec toi. Je pense que la France demande surtout de respecter les valeurs républicaines, pas d'abandonner sa culture. D'ailleurs, tu parles arabe chez toi, non ?

**Karim :** C'est vrai, oui. Mais dans certaines situations professionnelles, j'ai l'impression qu'on me juge sur mon origine plutôt que sur mes compétences.

**Marie :** Là, tu soulèves quelque chose d'important. Il me semble que les discriminations à l'embauche sont un vrai problème — les études le montrent. Mais ça, c'est une question de discrimination, pas de politique d'intégration en elle-même.

**Karim :** Tu as peut-être raison sur cette distinction. Selon moi, le problème est double : les politiques ne sont pas assez ambitieuses, et les pratiques discriminatoires freinent l'intégration réelle.

**Marie :** Je partage ton analyse sur les discriminations. En revanche, sur les politiques, je suis moins convaincue. Des progrès ont été faits ces dernières années, tu ne crois pas ?

**Karim :** Si, si, j'exagère peut-être. L'important, c'est qu'on puisse en parler ouvertement.`,

      linguisticPoint: `## Point linguistique : Exprimer l'opinion — registres et nuances

### Formules pour donner son opinion
| Registre | Formules |
|---|---|
| **Neutre** | Je pense que / Je crois que / J\'estime que |
| **Personnel** | À mon avis / Selon moi / D\'après moi / Pour moi |
| **Soutenu** | Il me semble que / J\'ai l\'impression que / Je suis d\'avis que |
| **Conviction forte** | J\'en suis convaincu(e) / Je suis persuadé(e) que |

### Formules pour être d'accord / en désaccord
| Accord | Désaccord partiel | Désaccord |
|---|---|---|
| Je suis d\'accord | Je ne suis pas entièrement d\'accord | Je suis en désaccord |
| Tu as raison | Tu as peut-être raison mais... | Je ne partage pas ce point de vue |
| Tout à fait ! | Je nuancerais en disant... | Au contraire ! |
| Effectivement | Dans une certaine mesure | Pas du tout |
| Je partage ton avis | Certes, mais... | Je m\'inscris en faux |

### Soulever un point / changer de sujet
- "Tu soulèves quelque chose d\'important"
- "Là, tu poses une question pertinente"
- "Sur ce point, je dirais que..."
- "En revanche, sur la question de..."`,

      keyPoints: [
        '"À mon avis / Selon moi / D\'après moi / Pour moi" = opinion personnelle',
        '"Il me semble que / J\'ai l\'impression que" = opinion nuancée, moins affirmée',
        '"Certes, mais..." = concession + opposition (structure très utile en débat)',
        '"Je partage / Je ne partage pas ton point de vue" = accord / désaccord',
        '"Tu soulèves quelque chose d\'important" = valoriser l\'argument de l\'autre',
      ],

      exercises: [
        {
          id: 'b1-op-01-ex01',
          type: 'qcm',
          question: 'Quelle formule exprime une opinion nuancée, moins affirmée ?',
          options: [
            '"Je suis convaincu que..."',
            '"Il me semble que..."',
            '"Absolument !"',
            '"Je suis certain que..."',
          ],
          correctIndex: 1,
          explanation: '"Il me semble que" = it seems to me that. C\'est une formule nuancée qui présente l\'opinion comme une perception personnelle, pas une certitude absolue. Moins affirmée que "je suis convaincu que" ou "je suis certain que".',
        },
        {
          id: 'b1-op-01-ex02',
          type: 'qcm',
          question: 'Marie dit "Je ne suis pas tout à fait d\'accord." Que signifie "tout à fait" ?',
          options: ['Un peu', 'Complètement / entièrement', 'Jamais', 'Parfois'],
          correctIndex: 1,
          explanation: '"Tout à fait" = completely / entirely. "Je ne suis pas TOUT À FAIT d\'accord" = I don\'t completely agree = je suis partiellement en désaccord. "Tout à fait" seul = absolument / exactement.',
        },
        {
          id: 'b1-op-01-ex03',
          type: 'qcm',
          question: '"Je partage ton analyse" signifie :',
          options: [
            'Je n\'ai pas la même analyse',
            'Je suis d\'accord avec ton analyse',
            'J\'ai une analyse différente',
            'Ton analyse est incomplète',
          ],
          correctIndex: 1,
          explanation: '"Partager une opinion / une analyse / un point de vue" = être d\'accord avec. "Je PARTAGE ton analyse" = I agree with your analysis. C\'est une formule plus soutenue que "je suis d\'accord".',
        },
        {
          id: 'b1-op-01-ex04',
          type: 'qcm',
          question: '"Soulever quelque chose d\'important" signifie :',
          options: [
            'Lever un objet lourd',
            'Mentionner / introduire un point pertinent dans la discussion',
            'Exagérer l\'importance d\'un problème',
            'Critiquer l\'autre personne',
          ],
          correctIndex: 1,
          explanation: '"Soulever un point" = to raise a point. "Tu soulèves quelque chose d\'important" = you\'re raising an important point. C\'est une façon de valoriser la contribution de l\'interlocuteur tout en poursuivant la discussion.',
        },
        {
          id: 'b1-op-01-ex05',
          type: 'qcm',
          question: '"Certes, mais..." est une structure qui exprime :',
          options: [
            'Un accord total avec l\'interlocuteur',
            'Une concession (on admet l\'argument) suivie d\'une opposition',
            'Un refus catégorique',
            'Une demande de clarification',
          ],
          correctIndex: 1,
          explanation: '"Certes, mais..." = admittedly, but... / granted, but... Structure de CONCESSION + OPPOSITION. On admet que l\'argument a du mérite (certes) mais on le nuance ou on le conteste (mais). Très utile dans un débat.',
        },
        {
          id: 'b1-op-01-ex06',
          type: 'qcm',
          question: '"À mon avis" est synonyme de :',
          options: [
            'Selon les experts',
            'D\'après les statistiques',
            'Selon moi / D\'après moi / Pour moi',
            'Selon la loi',
          ],
          correctIndex: 2,
          explanation: '"À mon avis" = selon moi = d\'après moi = pour moi = in my opinion. Ce sont toutes des formules pour introduire une opinion personnelle. Utilisez-les pour signaler clairement que c\'est votre point de vue.',
        },
        {
          id: 'b1-op-01-ex07',
          type: 'qcm',
          question: 'Quelle formule pour marquer un désaccord poli mais ferme ?',
          options: [
            '"Tu as tort !"',
            '"Au contraire, je pense que..."',
            '"Peut-être, je ne sais pas."',
            '"C\'est faux !"',
          ],
          correctIndex: 1,
          explanation: '"Au contraire, je pense que..." = poliment mais fermement. "Au contraire" introduit l\'opposition directe. Plus poli que "tu as tort !" (agressif) ou "c\'est faux !" (trop direct). En débat, on préfère des formules qui respectent l\'interlocuteur.',
        },
        {
          id: 'b1-op-01-ex08',
          type: 'qcm',
          question: 'Karim dit "j\'exagère peut-être". Que signifie cette formulation ?',
          options: [
            'Il ment délibérément',
            'Il reconnaît que ses propos étaient peut-être trop forts',
            'Il confirme ce qu\'il a dit',
            'Il demande l\'opinion de Marie',
          ],
          correctIndex: 1,
          explanation: '"J\'exagère peut-être" = peut-être que j\'ai été trop radical dans mes affirmations. C\'est une façon de se remettre en question, d\'adoucir une position. "Peut-être" + autocritique = ouverture au dialogue.',
        },
        {
          id: 'b1-op-01-ex09',
          type: 'qcm',
          question: '"Dans une certaine mesure" exprime :',
          options: [
            'Un accord total',
            'Un accord partiel / une nuance',
            'Un désaccord total',
            'Une incertitude totale',
          ],
          correctIndex: 1,
          explanation: '"Dans une certaine mesure" = to some extent = partiellement. "Tu as raison dans une certaine mesure" = you\'re right to some extent. Formule clé pour nuancer un accord ou un désaccord.',
        },
        {
          id: 'b1-op-01-ex10',
          type: 'qcm',
          question: '"Je m\'inscris en faux" (expression soutenue) signifie :',
          options: [
            'Je suis d\'accord',
            'Je m\'inscris à un cours',
            'Je conteste formellement / je désapprouve catégoriquement',
            'Je m\'excuse',
          ],
          correctIndex: 2,
          explanation: '"S\'inscrire en faux contre quelque chose" = to challenge / to dispute formally. C\'est une expression soutenue pour un désaccord ferme et formel. "Je m\'inscris en faux contre cette affirmation" = I strongly disagree with this statement.',
        },
        {
          id: 'b1-op-01-ex11',
          type: 'qcm',
          question: 'Quelle est la nuance entre "je pense" et "je suis persuadé" ?',
          options: [
            '"Je pense" = opinion forte / "Je suis persuadé" = opinion faible',
            '"Je pense" = opinion modérée / "Je suis persuadé" = conviction très forte',
            'Ils sont exactement synonymes',
            '"Je pense" = vérité / "Je suis persuadé" = doute',
          ],
          correctIndex: 1,
          explanation: '"Je pense" = I think (opinion modérée). "Je suis PERSUADÉ" = I\'m convinced / I\'m sure (conviction forte). Gradation : je me demande si → je pense que → j\'estime que → je suis convaincu/persuadé que.',
        },
        {
          id: 'b1-op-01-ex12',
          type: 'qcm',
          question: 'Marie dit "je suis moins convaincue". Que signifie "convaincue" ?',
          options: ['Contente', 'Persuadée / certaine', 'Informée', 'Concernée'],
          correctIndex: 1,
          explanation: '"Être convaincu(e)" = être persuadé(e). "Je suis moins convaincue sur les politiques" = I\'m less convinced / less persuaded about the policies. "Convaincre" = to convince. "Convaincu" = participe passé/adjectif.',
        },
        {
          id: 'b1-op-01-ex13',
          type: 'qcm',
          question: 'Comment répondre positivement à "tu ne crois pas ?" avec une nuance ?',
          options: [
            '"Non, absolument pas"',
            '"Si, si, dans une certaine mesure"',
            '"Oui, complètement"',
            '"Je ne sais pas du tout"',
          ],
          correctIndex: 1,
          explanation: 'Karim dit "Si, si, j\'exagère peut-être." "Si" = oui (en réponse à une question négative). "Si, si, dans une certaine mesure" = yes, to some extent. C\'est une réponse nuancée qui reconnaît l\'argument sans capituler.',
        },
        {
          id: 'b1-op-01-ex14',
          type: 'qcm',
          question: '"En revanche, sur la question de..." est un connecteur de :',
          options: ['Cause', 'Conséquence', 'Contraste / opposition', 'Addition'],
          correctIndex: 2,
          explanation: '"En revanche" = par contre = however. Connecteur de CONTRASTE. "Je partage ton avis sur X. En revanche, sur Y, je pense différemment." = I agree on X, but on Y I disagree.',
        },
        {
          id: 'b1-op-01-ex15',
          type: 'qcm',
          question: 'Quelle formule introduit une nuance sur la gravité d\'un problème ?',
          options: [
            '"C\'est un problème énorme"',
            '"C\'est un problème réel, mais il faut le mettre en perspective"',
            '"Ce n\'est pas du tout un problème"',
            '"C\'est un problème impossible à résoudre"',
          ],
          correctIndex: 1,
          explanation: '"Mettre en perspective" = relativiser, situer dans un contexte plus large. "C\'est un problème réel, mais il faut le mettre en perspective" = nuance entre reconnaître le problème et en relativiser l\'ampleur. C\'est une position équilibrée.',
        },
        {
          id: 'b1-op-01-ex16',
          type: 'qcm',
          question: 'Dans un débat, "effectivement" signifie :',
          options: ['Non, pas d\'accord', 'Oui, c\'est vrai / en effet', 'Peut-être', 'Au contraire'],
          correctIndex: 1,
          explanation: '"Effectivement" = indeed / that\'s true / in fact. C\'est un accord affirmatif. "Effectivement, les discriminations sont un problème réel" = indeed, discrimination is a real problem. Synonymes : en effet / c\'est vrai / exact.',
        },
        {
          id: 'b1-op-01-ex17',
          type: 'qcm',
          question: 'Comment nuancer une opinion très forte ? "Je pense que l\'intégration est un échec..." →',
          options: [
            '"...et je maintiens cette position."',
            '"...bien que des progrès aient été réalisés, il reste encore beaucoup à faire."',
            '"...c\'est une vérité absolue."',
            '"...tout le monde sait que c\'est vrai."',
          ],
          correctIndex: 1,
          explanation: '"...bien que des progrès aient été réalisés, il reste encore beaucoup à faire." Cette formule NUANCE l\'opinion forte par une concession (bien que + progrès) et maintient l\'idée principale (il reste à faire). C\'est une position équilibrée et crédible.',
        },
        {
          id: 'b1-op-01-ex18',
          type: 'qcm',
          question: '"J\'ai l\'impression que" est une formule qui :',
          options: [
            'Affirme une vérité objective',
            'Présente une opinion comme une perception subjective, moins affirmée',
            'Exprime un accord avec l\'autre',
            'Introduit un fait vérifié',
          ],
          correctIndex: 1,
          explanation: '"J\'ai l\'impression que" = I have the feeling that / it seems to me that. C\'est une formule qui présente l\'opinion comme une PERCEPTION subjective, pas une certitude. Utilisée pour être plus prudent, plus nuancé.',
        },
        {
          id: 'b1-op-01-ex19',
          type: 'qcm',
          question: 'Le problème de discrimination à l\'embauche est-il documenté selon le dialogue ?',
          options: [
            'Non, c\'est juste l\'opinion de Karim',
            'Oui, "les études le montrent"',
            'C\'est contesté par Marie',
            'Le dialogue ne précise pas',
          ],
          correctIndex: 1,
          explanation: 'Marie dit "les discriminations à l\'embauche sont un vrai problème — LES ÉTUDES LE MONTRENT." Elle s\'appuie sur des preuves empiriques (études) pour renforcer son argument. Citer des études est une technique rhétorique pour objectiver un argument.',
        },
        {
          id: 'b1-op-01-ex20',
          type: 'qcm',
          question: '"Freiner l\'intégration" signifie :',
          options: ['Accelerer le processus d\'intégration', 'Ralentir / entraver le processus d\'intégration', 'Terminer l\'intégration', 'Financer l\'intégration'],
          correctIndex: 1,
          explanation: '"Freiner" = to slow down / to hinder. "Les discriminations freinent l\'intégration" = les discriminations ralentissent et entravent le processus d\'intégration. "Frein" = brake (voiture) → métaphore pour ce qui bloque un processus.',
        },
      ],
    },

    {
      id: 'b1-op-02',
      slug: 'b1-argumenter',
      moduleSlug: 'b1-exprimer-opinion',
      level: 'B1',
      title: 'Argumenter et convaincre',
      description: 'Structurez vos arguments, utilisez des exemples et des preuves, et construisez un discours persuasif.',
      duration: 35,
      free: false,
      dialogue: `## Texte : Comment argumenter efficacement ?

Argumenter, c'est défendre une position de façon logique et convaincante. Voici les principales techniques rhétoriques utilisées dans le débat français.

**1. La structure PARCE QUE — DONC**
Partez d'un fait, donnez une raison (parce que, car, puisque), et tirez une conclusion (donc, ainsi, par conséquent). "Les immigrés contribuent à l'économie française parce qu'ils occupent des postes que les Français ne veulent pas, et leurs cotisations financent le système social. Donc leur présence est bénéfique."

**2. L'exemple concret**
"Par exemple... / C'est le cas de... / Prenez le cas de..." Un argument abstrait devient plus convaincant avec un exemple réel. "Par exemple, en région PACA, les travailleurs saisonniers agricoles, souvent immigrés, sont indispensables aux récoltes."

**3. La statistique ou chiffre**
"Selon l'INSEE... / D'après une étude de... / Les chiffres montrent que..." Les données objectives renforcent la crédibilité. Mais attention : les statistiques peuvent être interprétées de façons différentes.

**4. La concession + réfutation**
"Certes, on pourrait objecter que... mais en réalité..." Reconnaître la force de l'argument opposé avant de le réfuter est très efficace rhétoriquement. Cela montre que vous avez considéré les deux côtés.

**5. L'analogie**
"C'est comme si... / De la même façon que..." Comparer une situation inconnue à une situation connue pour la rendre plus compréhensible.`,

      linguisticPoint: `## Point linguistique : Les structures de l'argumentation

### Introduire son argument
- "Je voudrais souligner que..."
- "Il convient de noter que..."
- "Il est important de rappeler que..."
- "Force est de constater que..." (= on doit admettre que)

### Donner un exemple
- "Par exemple... / À titre d\'exemple..."
- "C\'est le cas de... / Prenons le cas de..."
- "Ainsi, dans le cas de..."
- "Comme le montre l\'exemple de..."

### Faire une concession + réfutation
- "Certes [argument adverse]... mais [votre argument]"
- "Il est vrai que... Cependant / Néanmoins..."
- "On pourrait objecter que... Mais en réalité..."
- "Sans nier que... il n\'en reste pas moins que..."

### Conclure
- "En conclusion / Pour conclure..."
- "En définitive / Au final..."
- "Il ressort de tout cela que..."
- "Pour toutes ces raisons..."`,

      keyPoints: [
        'Structure : fait + parce que + donc = argument logique complet',
        'Exemple concret = argument abstrait rendu tangible',
        '"Certes X... mais Y" = concession + réfutation (très efficace)',
        '"Force est de constater que" = on doit admettre (formule soutenue)',
        '"Il convient de noter que" = formule soutenue pour introduire un point',
      ],

      exercises: [
        {
          id: 'b1-op-02-ex01',
          type: 'qcm',
          question: 'Quelle structure constitue un argument logique complet ?',
          options: [
            'Opinion seule',
            'Fait + raison (parce que) + conclusion (donc)',
            'Conclusion sans raison',
            'Exemple sans opinion',
          ],
          correctIndex: 1,
          explanation: 'Un argument complet = FAIT + RAISON (parce que/car/puisque) + CONCLUSION (donc/ainsi). "Les immigrés contribuent à l\'économie (fait) PARCE QUE ils occupent des postes essentiels (raison), DONC leur présence est bénéfique (conclusion)."',
        },
        {
          id: 'b1-op-02-ex02',
          type: 'qcm',
          question: '"Force est de constater que" signifie :',
          options: [
            '"Je suis fort et je constate..."',
            '"On doit admettre / on est obligé de reconnaître que..."',
            '"Selon mes sources..."',
            '"Je pense peut-être que..."',
          ],
          correctIndex: 1,
          explanation: '"Force est de constater que" = on doit admettre, on ne peut pas nier. C\'est une formule soutenue pour introduire un fait difficile à ignorer. "Force est de constater que les inégalités ont augmenté" = one cannot deny that inequalities have grown.',
        },
        {
          id: 'b1-op-02-ex03',
          type: 'qcm',
          question: 'Comment introduire un exemple dans un argument ? "Les travailleurs saisonniers sont indispensables. ___, en région PACA..."',
          options: ['Ainsi', 'Par exemple', 'Cependant', 'Car'],
          correctIndex: 1,
          explanation: '"PAR EXEMPLE, en région PACA..." "Par exemple" = for example = introduit un cas concret qui illustre l\'argument abstrait. Synonymes : à titre d\'exemple / prenons le cas de / c\'est notamment le cas de.',
        },
        {
          id: 'b1-op-02-ex04',
          type: 'qcm',
          question: 'La technique "concession + réfutation" (certes... mais) est efficace car :',
          options: [
            'Elle évite d\'avoir à argumenter',
            'Elle montre qu\'on a considéré les deux côtés, renforçant la crédibilité',
            'Elle permet de parler plus longtemps',
            'Elle est obligatoire dans un débat formel',
          ],
          correctIndex: 1,
          explanation: '"Certes... mais..." montre que vous avez CONSIDÉRÉ l\'argument adverse (crédibilité) avant de le réfuter (efficacité). Un argument qui reconnaît les limites de la position opposée est perçu comme plus honnête et plus convaincant.',
        },
        {
          id: 'b1-op-02-ex05',
          type: 'qcm',
          question: '"Il convient de noter que" est utilisé pour :',
          options: [
            'Terminer un argument',
            'Introduire un point important de façon formelle',
            'Exprimer un désaccord',
            'Donner un exemple',
          ],
          correctIndex: 1,
          explanation: '"Il convient de noter que" = it should be noted that / it is worth noting that. Formule soutenue pour introduire un point important. Synonymes : "Il est important de noter que" / "Il y a lieu de remarquer que".',
        },
        {
          id: 'b1-op-02-ex06',
          type: 'qcm',
          question: '"On pourrait objecter que..." introduit :',
          options: [
            'Votre propre argument',
            'L\'argument potentiel de l\'adversaire (avant de le réfuter)',
            'Une statistique',
            'La conclusion',
          ],
          correctIndex: 1,
          explanation: '"On pourrait objecter que..." = one might argue that... Vous introduisez l\'argument adverse VOUS-MÊME avant de le réfuter. Technique rhétorique de la "prévention des objections" (prolepsis). Très efficace pour anticiper les critiques.',
        },
        {
          id: 'b1-op-02-ex07',
          type: 'qcm',
          question: '"Il ressort de tout cela que" est utilisé pour :',
          options: ['Introduire un argument', 'Donner un exemple', 'Conclure / synthétiser', 'Exprimer un désaccord'],
          correctIndex: 2,
          explanation: '"Il ressort de tout cela que" = from all this it follows that / the conclusion is that. Formule de CONCLUSION qui synthétise les arguments présentés. Utilisée avant la conclusion principale.',
        },
        {
          id: 'b1-op-02-ex08',
          type: 'qcm',
          question: '"Les chiffres montrent que..." est une technique qui vise à :',
          options: [
            'Rendre l\'argument subjectif',
            'Objectiver / crédibiliser l\'argument avec des données',
            'Éviter de donner son opinion',
            'Simplifier un argument complexe',
          ],
          correctIndex: 1,
          explanation: '"Les chiffres montrent que" = the figures show that. Citer des données statistiques OBJECTIVISE l\'argument (lui donne une base factuelle). Mais attention : les statistiques peuvent être sélectionnées et interprétées différemment selon le point de vue.',
        },
        {
          id: 'b1-op-02-ex09',
          type: 'qcm',
          question: 'Comment utiliser "sans nier que... il n\'en reste pas moins que..." ?',
          options: [
            'Pour nier complètement un argument adverse',
            'Pour reconnaître partiellement un argument tout en maintenant sa position',
            'Pour changer d\'avis',
            'Pour donner un exemple',
          ],
          correctIndex: 1,
          explanation: '"Sans nier que X... il n\'en reste pas moins que Y." = Without denying X, Y remains true. Structure de CONCESSION PARTIELLE. "Sans nier que des progrès ont été faits, il n\'en reste pas moins que les inégalités persistent."',
        },
        {
          id: 'b1-op-02-ex10',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une analogie dans une argumentation ?',
          options: [
            'Un chiffre statistique',
            'Une comparaison avec une situation connue pour expliquer une situation inconnue',
            'Un argument d\'autorité (citer un expert)',
            'Une citation littéraire',
          ],
          correctIndex: 1,
          explanation: 'Une analogie = une comparaison. "C\'est comme si..." "De la même façon que..." Expliquer quelque chose de complexe en le comparant à quelque chose de familier. Ex : "Le système social français, c\'est comme une assurance collective que tout le monde paie et dont tout le monde peut bénéficier."',
        },
        {
          id: 'b1-op-02-ex11',
          type: 'qcm',
          question: 'Complétez avec la structure correcte : "___ on pourrait dire que les résultats sont insuffisants, les progrès réalisés sont réels."',
          options: ['Puisque', 'Certes', 'Donc', 'Ainsi'],
          correctIndex: 1,
          explanation: '"CERTES on pourrait dire que les résultats sont insuffisants, [mais] les progrès réalisés sont réels." "Certes" introduit la concession (l\'argument adverse qu\'on admet) avant de le nuancer avec "mais".',
        },
        {
          id: 'b1-op-02-ex12',
          type: 'qcm',
          question: '"Selon l\'INSEE" dans un argument sert à :',
          options: [
            'Donner l\'avis de l\'INSEE',
            'Citer la source d\'une donnée statistique pour la crédibiliser',
            'Critiquer l\'INSEE',
            'Introduire un exemple concret',
          ],
          correctIndex: 1,
          explanation: '"Selon l\'INSEE" = according to the INSEE (Institut National de la Statistique et des Études Économiques). Citer la source d\'une statistique est crucial pour la crédibilité : une donnée sans source est une affirmation, une donnée avec source est un argument.',
        },
        {
          id: 'b1-op-02-ex13',
          type: 'qcm',
          question: '"Pour toutes ces raisons" est une formule de :',
          options: ['Introduction', 'Exemple', 'Concession', 'Conclusion'],
          correctIndex: 3,
          explanation: '"Pour toutes ces raisons..." = for all these reasons. Formule classique de CONCLUSION qui synthétise les arguments présentés. "Pour toutes ces raisons, je pense que X est la meilleure solution."',
        },
        {
          id: 'b1-op-02-ex14',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'"objecter" dans "on pourrait objecter que..." ?',
          options: [
            'Approuver', 'Poser une objection / exprimer un contre-argument', 'Confirmer', 'Préciser',
          ],
          correctIndex: 1,
          explanation: '"Objecter" = to object / to raise an objection. "On pourrait objecter que X" = someone might object that X. Synonymes : contester / s\'opposer à / soulever une objection.',
        },
        {
          id: 'b1-op-02-ex15',
          type: 'qcm',
          question: '"Il y a lieu de remarquer que" est équivalent à :',
          options: [
            '"Il faut que" (obligation)',
            '"Il convient de noter que" (souligner un point)',
            '"Il est possible que" (incertitude)',
            '"Il est interdit de" (interdiction)',
          ],
          correctIndex: 1,
          explanation: '"Il y a lieu de remarquer que" = it is worth noting that = "il convient de noter que". Ce sont des formules soutenues pour introduire un point important. Elles marquent que le locuteur juge le point pertinent.',
        },
        {
          id: 'b1-op-02-ex16',
          type: 'qcm',
          question: 'Complétez l\'argument : "Les politiques d\'intégration ont des résultats. ___ les discriminations persistent, elles freinent l\'efficacité de ces politiques."',
          options: ['Certes / mais', 'Puisque / donc', 'Et / ainsi', 'Bien / donc'],
          correctIndex: 0,
          explanation: '"Certes les politiques ont des résultats, MAIS les discriminations persistent..." Structure CONCESSION + OPPOSITION. On reconnaît les progrès (certes) mais on signale le problème persistant (mais).',
        },
        {
          id: 'b1-op-02-ex17',
          type: 'qcm',
          question: '"En définitive" est un connecteur de :',
          options: ['Cause', 'Exemple', 'Conclusion', 'Opposition'],
          correctIndex: 2,
          explanation: '"En définitive" = ultimately / in the end / all things considered. Connecteur de CONCLUSION. Synonymes : au final / en fin de compte / en somme / tout compte fait.',
        },
        {
          id: 'b1-op-02-ex18',
          type: 'qcm',
          question: 'Pourquoi "les statistiques peuvent être interprétées différemment" ?',
          options: [
            'Parce qu\'elles sont souvent fausses',
            'Parce que la sélection des données et leur contexte influencent l\'interprétation',
            'Parce qu\'elles changent chaque année',
            'Parce que les statisticiens font des erreurs',
          ],
          correctIndex: 1,
          explanation: 'La sélection des données (quelles statistiques choisir), le contexte (comment les présenter) et le cadrage (quelle période, quelle population) influencent fortement l\'interprétation. Exemple : "le chômage a augmenté de 2%" peut signifier une catastrophe ou un détail selon le contexte.',
        },
        {
          id: 'b1-op-02-ex19',
          type: 'qcm',
          question: '"Je voudrais souligner que..." introduit :',
          options: [
            'Un point qu\'on veut mettre en valeur',
            'Un désaccord',
            'Une conclusion',
            'Un exemple',
          ],
          correctIndex: 0,
          explanation: '"Je voudrais souligner que" = I would like to emphasize that. Formule pour mettre en valeur un point particulièrement important. "Souligner" = mettre en évidence, insister sur.',
        },
        {
          id: 'b1-op-02-ex20',
          type: 'qcm',
          question: 'La "réfutation" dans "concession + réfutation" désigne :',
          options: [
            'L\'accord avec l\'argument adverse',
            'Le fait de contester et démontrer la fausseté ou la limite d\'un argument',
            'La conclusion de l\'argument',
            'L\'exemple concret',
          ],
          correctIndex: 1,
          explanation: '"La réfutation" = refutation = démontrer qu\'un argument est faux, incomplet ou insuffisant. Dans "certes X, MAIS Y" : la partie après "mais" est la réfutation de l\'argument "X" qu\'on avait concédé.',
        },
      ],
    },

    {
      id: 'b1-op-03',
      slug: 'b1-nuancer-moderer',
      moduleSlug: 'b1-exprimer-opinion',
      level: 'B1',
      title: 'Nuancer et modérer',
      description: 'Apprenez à nuancer vos propos, à relativiser et à exprimer des positions équilibrées.',
      duration: 35,
      free: false,
      dialogue: `## Dialogue : Entretien préfectorale — valeurs françaises

*Amira passe son entretien de naturalisation. L'agent lui pose des questions sur ses valeurs.*

**Agent :** Madame Amira, qu'est-ce que la liberté signifie pour vous ?

**Amira :** Pour moi, la liberté c'est d'abord la liberté individuelle — le droit de faire ses propres choix, d'être responsable de sa vie. Mais il faut aussi nuancer : aucune liberté n'est absolue. Ma liberté s'arrête là où commence celle des autres.

**Agent :** Très bien. Et l'égalité ?

**Amira :** L'égalité est un idéal difficile à atteindre dans la pratique. D'un côté, il y a l'égalité formelle — tous égaux devant la loi. De l'autre, il y a l'égalité réelle, qui nécessite parfois des mesures correctives pour les populations défavorisées. Les deux sont importants, mais il faut trouver le bon équilibre.

**Agent :** Et la fraternité, qui est souvent le moins discuté des trois principes ?

**Amira :** C'est vrai que c'est peut-être le plus abstrait. Pour moi, la fraternité, c'est le sens de la solidarité — contribuer à la communauté, aider ceux qui sont dans le besoin, même si on ne les connaît pas personnellement. C'est l'esprit du contrat social.

**Agent :** Très intéressant. Dernière question : comment voyez-vous votre contribution à la société française ?

**Amira :** Je veux apporter mes compétences professionnelles, mais aussi ma perspective de personne venue d'ailleurs. La diversité des expériences enrichit une société, me semble-t-il.`,

      linguisticPoint: `## Point linguistique : Nuancer — structures et formules

### Relativiser / nuancer une affirmation
- "Cela dit / Cela étant..."
- "Il faut nuancer : il y a d\'un côté X, de l\'autre Y"
- "Dans une certaine mesure / jusqu\'à un certain point"
- "Tout dépend de / Ça dépend de la façon dont on définit..."
- "Ce n\'est pas si simple / Ce n\'est pas si évident"

### Présenter les deux côtés
- "D\'un côté... de l\'autre..."
- "D\'une part... d\'autre part..."
- "Si... alors que... / Tandis que..."
- "Sous un angle... / Sous un autre angle..."

### Atténuer une affirmation (hedging)
- "me semble-t-il" = it seems to me (inséré dans la phrase)
- "si j\'ose dire"
- "en quelque sorte" = in a way
- "d\'une certaine façon" = in a certain way
- "on pourrait dire que" = one could say
- "à vrai dire" = to tell the truth`,

      keyPoints: [
        '"D\'un côté... de l\'autre..." / "d\'une part... d\'autre part..." = présenter deux aspects',
        '"Me semble-t-il" (inséré) = nuance l\'affirmation (it seems to me)',
        '"Dans une certaine mesure" / "jusqu\'à un certain point" = accord partiel',
        '"Aucune liberté n\'est absolue" = phrase-clé pour l\'entretien naturalisation',
        '"Ma liberté s\'arrête où commence celle des autres" = principe républicain fondamental',
      ],

      exercises: [
        {
          id: 'b1-op-03-ex01',
          type: 'qcm',
          question: 'Amira dit "aucune liberté n\'est absolue". Que signifie cette formulation ?',
          options: [
            'Il n\'y a pas de liberté en France',
            'Toutes les libertés ont des limites — elles sont relatives, pas illimitées',
            'La liberté est toujours relative à la richesse',
            'Seuls certains citoyens ont des libertés',
          ],
          correctIndex: 1,
          explanation: '"Aucune liberté n\'est absolue" = no freedom is unlimited. Les libertés sont RELATIVES : elles ont des limites imposées par les droits des autres, la loi, l\'ordre public. C\'est un principe fondamental du droit. C\'est une réponse très pertinente à l\'entretien de naturalisation.',
        },
        {
          id: 'b1-op-03-ex02',
          type: 'qcm',
          question: '"D\'un côté... de l\'autre..." est une structure pour :',
          options: [
            'Donner deux exemples du même argument',
            'Présenter deux aspects opposés ou complémentaires d\'une question',
            'Concéder puis réfuter',
            'Donner une définition',
          ],
          correctIndex: 1,
          explanation: '"D\'UN CÔTÉ X, DE L\'AUTRE Y" = on one hand X, on the other Y. Structure pour PRÉSENTER LES DEUX CÔTÉS d\'une question. Amira l\'utilise pour distinguer égalité formelle (légale) et égalité réelle (pratique).',
        },
        {
          id: 'b1-op-03-ex03',
          type: 'qcm',
          question: 'Que signifie "me semble-t-il" (inséré dans la phrase) ?',
          options: [
            'Je suis certain que',
            'Il me semble que / cela semble être vrai (atténue l\'affirmation)',
            'On m\'a dit que',
            'C\'est évident que',
          ],
          correctIndex: 1,
          explanation: '"Me semble-t-il" (inséré) = it seems to me. Atténue l\'affirmation en la présentant comme une impression personnelle, pas une certitude. "La diversité enrichit une société, me semble-t-il" = less assertive than "la diversité enrichit une société."',
        },
        {
          id: 'b1-op-03-ex04',
          type: 'qcm',
          question: '"L\'égalité est un idéal difficile à atteindre dans la pratique." Quelle nuance est exprimée ?',
          options: [
            'L\'égalité n\'est pas un bon objectif',
            'L\'égalité comme principe est valable, mais sa réalisation est complexe',
            'L\'égalité est impossible',
            'L\'égalité n\'est pas nécessaire',
          ],
          correctIndex: 1,
          explanation: '"Idéal difficile à atteindre dans la pratique" = valeur théoriquement bonne mais complexe à réaliser. Amira NUANCE : elle ne dit pas que l\'égalité est mauvaise, mais qu\'il y a un écart entre le principe et la réalité. C\'est une position équilibrée et réaliste.',
        },
        {
          id: 'b1-op-03-ex05',
          type: 'qcm',
          question: '"En quelque sorte" est utilisé pour :',
          options: [
            'Affirmer avec certitude',
            'Atténuer une affirmation / introduire une approximation',
            'Contester un argument',
            'Introduire un exemple',
          ],
          correctIndex: 1,
          explanation: '"En quelque sorte" = in a way / in a sense. Atténue une affirmation. "C\'est, en quelque sorte, notre devoir" = it is, in a way, our duty. L\'expression signale que l\'affirmation est approximative ou métaphorique.',
        },
        {
          id: 'b1-op-03-ex06',
          type: 'qcm',
          question: '"Mesures correctives pour les populations défavorisées" — que signifie "défavorisé" ?',
          options: [
            'Qui n\'est pas favori dans une compétition',
            'Qui est en situation de désavantage social ou économique',
            'Qui n\'a pas de nationalité française',
            'Qui est en situation irrégulière',
          ],
          correctIndex: 1,
          explanation: '"Défavorisé" = underprivileged / disadvantaged. Population en situation de désavantage social, économique ou éducatif. "Mesures correctives" = mesures destinées à compenser ces désavantages (discrimination positive, aides sociales...).',
        },
        {
          id: 'b1-op-03-ex07',
          type: 'qcm',
          question: '"Cela dit" est un connecteur qui :',
          options: ['Confirme ce qui précède', 'Introduit une nuance ou une réserve après ce qui a été dit', 'Conclut', 'Donne un exemple'],
          correctIndex: 1,
          explanation: '"Cela dit" = that being said / however. Introduit une nuance ou réserve après ce qui a été dit. "L\'intégration progresse. Cela dit, des obstacles persistent." Synonymes : "cela étant" / "néanmoins" / "toutefois".',
        },
        {
          id: 'b1-op-03-ex08',
          type: 'qcm',
          question: 'Pourquoi Amira parle-t-elle de "contrat social" en évoquant la fraternité ?',
          options: [
            'Elle parle d\'un contrat de travail',
            'Elle réfère à la théorie philosophique (Rousseau) selon laquelle les citoyens s\'engagent mutuellement dans la société',
            'Elle parle des allocations sociales',
            'Elle parle des lois françaises',
          ],
          correctIndex: 1,
          explanation: 'Le "contrat social" (Rousseau) = la théorie selon laquelle les individus renoncent à certaines libertés naturelles pour vivre ensemble et bénéficier de la protection de la société. La fraternité = dimension solidaire de ce contrat (on s\'aide mutuellement).',
        },
        {
          id: 'b1-op-03-ex09',
          type: 'qcm',
          question: '"Tout dépend de la façon dont on définit..." est une formule pour :',
          options: [
            'Éviter de répondre',
            'Signaler que la réponse dépend de la définition du concept',
            'Contester la question',
            'Demander une précision',
          ],
          correctIndex: 1,
          explanation: '"Tout dépend de la définition" = the answer depends on how we define. C\'est une façon de NUANCER en montrant que les concepts peuvent être définis différemment, ce qui change la réponse. Preuve de pensée critique.',
        },
        {
          id: 'b1-op-03-ex10',
          type: 'qcm',
          question: '"La diversité des expériences enrichit une société." Quelle est la nuance d\'Amira ?',
          options: [
            'Elle dit que la France doit accueillir tous les immigrés',
            'Elle nuance en disant "me semble-t-il" — c\'est son opinion, pas une certitude',
            'Elle dit que la France n\'est pas assez diverse',
            'Elle conteste la politique française d\'immigration',
          ],
          correctIndex: 1,
          explanation: 'Amira dit "La diversité enrichit, ME SEMBLE-T-IL." La nuance est dans "me semble-t-il" qui présente cela comme SON avis, pas une vérité absolue. Elle contribue à la discussion sans imposer son opinion.',
        },
        {
          id: 'b1-op-03-ex11',
          type: 'qcm',
          question: '"Ça dépend de" est une formule qui signifie :',
          options: [
            'Je ne sais pas',
            'La réponse varie selon les conditions / le contexte',
            'C\'est toujours vrai',
            'C\'est toujours faux',
          ],
          correctIndex: 1,
          explanation: '"Ça dépend de" = it depends on. La réponse n\'est pas universelle — elle varie selon le contexte, les conditions, la définition. "Ça dépend de la situation" = it depends on the situation.',
        },
        {
          id: 'b1-op-03-ex12',
          type: 'qcm',
          question: 'Comment Amira nuance-t-elle l\'idée de la fraternité ?',
          options: [
            'Elle dit que la fraternité est inutile',
            'Elle reconnaît que c\'est peut-être le plus abstrait des trois principes, mais elle lui donne un sens concret (solidarité)',
            'Elle conteste que la fraternité soit un principe républicain',
            'Elle ignore la question de l\'agent',
          ],
          correctIndex: 1,
          explanation: 'Amira dit "C\'est vrai que c\'est peut-être le plus abstrait" (concession / nuance) + "Pour moi, c\'est le sens de la solidarité" (définition concrète). Elle reconnaît la difficulté du concept avant de le définir à sa façon.',
        },
        {
          id: 'b1-op-03-ex13',
          type: 'qcm',
          question: '"Sous un angle... sous un autre angle..." est équivalent à :',
          options: [
            '"D\'un côté... de l\'autre..."',
            '"Parce que... donc..."',
            '"Par exemple... ainsi..."',
            '"Certes... mais..."',
          ],
          correctIndex: 0,
          explanation: '"Sous un angle X / sous un autre angle Y" = "d\'un côté X / de l\'autre Y." Ces structures présentent la même réalité vue sous différentes perspectives. "Sous l\'angle économique... sous l\'angle social..."',
        },
        {
          id: 'b1-op-03-ex14',
          type: 'qcm',
          question: '"À vrai dire" s\'utilise pour :',
          options: [
            'Introduire une vérité universelle',
            'Corriger ou préciser sa propre affirmation (to be honest / in truth)',
            'Donner un exemple',
            'Exprimer un accord',
          ],
          correctIndex: 1,
          explanation: '"À vrai dire" = to tell the truth / honestly speaking. S\'utilise pour corriger ou nuancer ce qu\'on vient de dire, ou pour introduire une précision honnête. "À vrai dire, je ne suis pas tout à fait sûr de cette réponse."',
        },
        {
          id: 'b1-op-03-ex15',
          type: 'qcm',
          question: '"Trouver le bon équilibre" entre égalité formelle et réelle signifie :',
          options: [
            'Choisir l\'un des deux',
            'Concilier les deux approches de façon proportionnée',
            'Ignorer la question',
            'Demander à l\'État de décider',
          ],
          correctIndex: 1,
          explanation: '"Trouver le bon équilibre" = find the right balance. Amira dit qu\'il faut concilier l\'égalité formelle (loi) et l\'égalité réelle (mesures correctives) "mais il faut trouver le bon équilibre" — sans aller trop loin dans les mesures correctives ni les ignorer.',
        },
        {
          id: 'b1-op-03-ex16',
          type: 'qcm',
          question: '"Contribuer à la communauté même si on ne connaît pas personnellement les gens" illustre quel principe ?',
          options: [
            'Le nationalisme',
            'La solidarité sociale / fraternité républicaine',
            'Le libéralisme économique',
            'L\'individualisme',
          ],
          correctIndex: 1,
          explanation: 'La fraternité républicaine = solidarité avec des inconnus, au-delà des liens personnels. "Aider ceux dans le besoin même si on ne les connaît pas" = principe du système social français (impôts, cotisations) où on cotise pour des inconnus.',
        },
        {
          id: 'b1-op-03-ex17',
          type: 'qcm',
          question: '"D\'une part... d\'autre part..." est la structure soutenue équivalente à :',
          options: [
            '"D\'abord... ensuite..."',
            '"D\'un côté... de l\'autre..."',
            '"Parce que... donc..."',
            '"Non seulement... mais aussi..."',
          ],
          correctIndex: 1,
          explanation: '"D\'UNE PART X, D\'AUTRE PART Y" = "d\'un côté X, de l\'autre Y." Ces structures présentent deux aspects complémentaires ou opposés. "D\'une part" est plus soutenu, "d\'un côté" est plus courant.',
        },
        {
          id: 'b1-op-03-ex18',
          type: 'qcm',
          question: '"On pourrait dire que" est une formule qui :',
          options: [
            'Affirme avec certitude',
            'Présente l\'affirmation comme une possibilité d\'interprétation, pas une vérité absolue',
            'Cite quelqu\'un d\'autre',
            'Introduit une objection',
          ],
          correctIndex: 1,
          explanation: '"On pourrait dire que" = one could say that. Hedge = atténuation. L\'affirmation est présentée comme une INTERPRÉTATION POSSIBLE, pas une vérité absolue. "On pourrait dire que la fraternité est la valeur la plus abstraite" = c\'est une façon de voir les choses.',
        },
        {
          id: 'b1-op-03-ex19',
          type: 'qcm',
          question: '"Apporter sa perspective de personne venue d\'ailleurs" — quelle valeur cela implique-t-il ?',
          options: [
            'Que les étrangers connaissent mieux la France',
            'Que la diversité des expériences peut enrichir une société',
            'Que les étrangers devraient rester dans leur pays',
            'Que seuls les étrangers peuvent comprendre l\'intégration',
          ],
          correctIndex: 1,
          explanation: 'Amira dit vouloir apporter "sa perspective de personne venue d\'ailleurs." C\'est l\'idée que la diversité des expériences (différentes cultures, trajectoires de vie) peut enrichir une société en apportant des points de vue nouveaux.',
        },
        {
          id: 'b1-op-03-ex20',
          type: 'qcm',
          question: '"Ce n\'est pas si simple" est utilisé pour :',
          options: [
            'Refuser de répondre',
            'Signaler la complexité d\'une question avant d\'y apporter une réponse nuancée',
            'Dire que la question est stupide',
            'Exprimer un accord total',
          ],
          correctIndex: 1,
          explanation: '"Ce n\'est pas si simple" = it\'s not that simple. Signale la COMPLEXITÉ avant de nuancer. Pas un refus de répondre mais une façon d\'alerter sur les simplifications abusives. "La liberté ? Ce n\'est pas si simple : il faut la définir, la contextualiser..."',
        },
      ],
    },

    {
      id: 'b1-op-04',
      slug: 'b1-discussion-points-vue',
      moduleSlug: 'b1-exprimer-opinion',
      level: 'B1',
      title: 'Gérer une discussion — points de vue divergents',
      description: 'Maintenez une conversation, gérez les désaccords et trouvez des terrains d\'entente.',
      duration: 35,
      free: false,
      dialogue: `## Dialogue : Réunion de quartier — projet d'aménagement

*Dans une réunion de quartier, des habitants discutent d'un projet de construction d'un centre d'hébergement pour réfugiés.*

**Animateur :** Nous sommes réunis pour discuter du projet de centre d'hébergement. Je vous invite à vous exprimer de façon constructive. Commençons par ceux qui sont favorables.

**Isabelle :** Je suis pour le projet. Notre quartier a les ressources pour accueillir ces familles, et je crois que c'est notre responsabilité. Les réfugiés ont souvent des parcours difficiles — ils méritent notre solidarité.

**Marc :** Je comprends votre position, Isabelle, mais j'ai des réserves. Pas contre les réfugiés eux-mêmes — mais sur l'emplacement choisi. Ce quartier manque déjà d'équipements publics. Un centre de cette taille va mettre la pression sur les services.

**Isabelle :** C'est un argument recevable. Mais le projet prévoit justement des moyens supplémentaires — une infirmière, des assistants sociaux, des cours de langue...

**Marc :** Si c'est garanti, ça change les choses. Ce que je voudrais, c'est avoir des engagements écrits de la mairie.

**Animateur :** Tout le monde semble d'accord sur le fait que des ressources supplémentaires sont nécessaires. Peut-on trouver un terrain d'entente sur cette base ?

**Marc :** Je peux soutenir le projet si les engagements sont formalisés.

**Isabelle :** Et moi, je m'engage à participer aux actions d'intégration avec les résidents du centre.`,

      linguisticPoint: `## Point linguistique : Gérer une discussion — phrases utiles

### Demander la parole / intervenir
- "Si vous me permettez..."
- "J\'aimerais ajouter quelque chose..."
- "Si je peux me permettre une remarque..."
- "Pour rebondir sur ce que vous venez de dire..."

### Reformuler / vérifier la compréhension
- "Si je comprends bien, vous voulez dire que..."
- "Autrement dit..."
- "En d\'autres termes..."
- "Vous sous-entendez que..."

### Chercher un accord / terrain d\'entente
- "Nous semblons d\'accord sur..."
- "Un point sur lequel je pense que nous pouvons nous rejoindre..."
- "Y a-t-il un compromis possible ?"
- "Si on prenait en compte X, est-ce que Y serait acceptable pour vous ?"

### Gérer le désaccord poliment
- "Je comprends votre position, mais..."
- "J\'entends votre argument, cependant..."
- "Votre point est valide, mais il faut aussi considérer..."
- "Permettez-moi de ne pas partager cet avis..."`,

      keyPoints: [
        '"Pour rebondir sur ce que vous venez de dire..." = reprendre l\'argument de l\'interlocuteur',
        '"Un argument recevable" = un argument qu\'on peut accepter comme valide',
        '"Trouver un terrain d\'entente" = trouver un accord partiel / compromis',
        '"Si je comprends bien..." = reformuler pour vérifier la compréhension',
        '"Je m\'engage à..." = prendre un engagement public dans une discussion',
      ],

      exercises: [
        {
          id: 'b1-op-04-ex01',
          type: 'qcm',
          question: '"Je comprends votre position, mais j\'ai des réserves." Comment définir cette formule ?',
          options: [
            'Un désaccord agressif',
            'Un accord partiel avec des nuances — on comprend l\'autre mais on n\'est pas entièrement convaincu',
            'Un accord total',
            'Un refus de discuter',
          ],
          correctIndex: 1,
          explanation: '"Je comprends votre position, mais..." = j\'entends votre point de vue (empathie), MAIS je ne le partage pas entièrement. C\'est une façon de DÉSACCORDER POLIMENT en validant d\'abord l\'interlocuteur.',
        },
        {
          id: 'b1-op-04-ex02',
          type: 'qcm',
          question: '"Un argument recevable" signifie :',
          options: [
            'Un argument qu\'on reçoit par courrier',
            'Un argument qu\'on peut accepter comme valide / qui mérite d\'être pris en compte',
            'Un argument insuffisant',
            'Un argument officiel',
          ],
          correctIndex: 1,
          explanation: '"Recevable" = acceptable / valid. "Un argument recevable" = un argument qu\'on peut considérer comme pertinent. C\'est une façon de reconnaître la valeur d\'un argument adverse avant de le nuancer.',
        },
        {
          id: 'b1-op-04-ex03',
          type: 'qcm',
          question: '"Pour rebondir sur ce que vous venez de dire..." sert à :',
          options: [
            'Changer complètement de sujet',
            'Reprendre et développer un point que l\'interlocuteur vient de mentionner',
            'Critiquer l\'interlocuteur',
            'Terminer la discussion',
          ],
          correctIndex: 1,
          explanation: '"Pour rebondir sur ce que vous venez de dire" = to follow up on / to build on what you just said. On reprend un élément de la contribution précédente pour le développer, le nuancer ou le questionner. Très courant dans les débats.',
        },
        {
          id: 'b1-op-04-ex04',
          type: 'qcm',
          question: '"Trouver un terrain d\'entente" signifie :',
          options: [
            'Trouver un terrain pour construire',
            'Trouver un accord partiel / un compromis entre des positions divergentes',
            'Être totalement d\'accord',
            'Mettre fin au débat',
          ],
          correctIndex: 1,
          explanation: '"Terrain d\'entente" = common ground / compromise. Un espace de dialogue où les deux parties peuvent s\'accorder malgré leurs désaccords. L\'animateur cherche "un terrain d\'entente" entre Isabelle (pour) et Marc (réserves).',
        },
        {
          id: 'b1-op-04-ex05',
          type: 'qcm',
          question: '"Si je comprends bien, vous voulez dire que..." sert à :',
          options: [
            'Critiquer l\'interlocuteur',
            'Reformuler l\'argument de l\'autre pour vérifier qu\'on l\'a bien compris',
            'Changer de sujet',
            'Mettre fin à la discussion',
          ],
          correctIndex: 1,
          explanation: '"Si je comprends bien..." = reformulation pour vérifier la compréhension. En reformulant avec ses propres mots, on s\'assure de ne pas mal interpréter. C\'est aussi une façon de montrer qu\'on écoute activement.',
        },
        {
          id: 'b1-op-04-ex06',
          type: 'qcm',
          question: 'Marc change de position à la fin. Quelle condition le convainc ?',
          options: [
            'Isabelle lui a donné raison',
            'La mairie lui a donné des engagements',
            'Les engagements supplémentaires sont formalisés par écrit',
            'Le projet a été modifié',
          ],
          correctIndex: 2,
          explanation: 'Marc dit "Je peux soutenir le projet SI les engagements sont formalisés." Sa condition = des engagements ÉCRITS (pas juste des promesses verbales) sur les ressources supplémentaires. La conditionnelle SI exprime sa condition.',
        },
        {
          id: 'b1-op-04-ex07',
          type: 'qcm',
          question: '"Permettez-moi de ne pas partager cet avis" est une formule de :',
          options: [
            'Accord total',
            'Désaccord poli et formel',
            'Demande de clarification',
            'Changement de sujet',
          ],
          correctIndex: 1,
          explanation: '"Permettez-moi de ne pas partager cet avis" = allow me to disagree. Formule de désaccord FORMELLE et POLIE. Signale qu\'on va exprimer un point de vue différent, avec une tournure respectueuse.',
        },
        {
          id: 'b1-op-04-ex08',
          type: 'qcm',
          question: '"Si c\'est garanti, ça change les choses." Que signifie cette phrase de Marc ?',
          options: [
            'Marc refuse encore le projet',
            'Si la condition est remplie, Marc est prêt à changer de position',
            'Marc a déjà changé d\'avis',
            'Marc donne une garantie',
          ],
          correctIndex: 1,
          explanation: '"Si c\'est garanti, ça change les choses" = if that\'s guaranteed, it changes things. Marc exprime sa CONDITIONNALITÉ : il peut changer de position SI les ressources sont garanties. C\'est un signal d\'ouverture au compromis.',
        },
        {
          id: 'b1-op-04-ex09',
          type: 'qcm',
          question: '"S\'exprimer de façon constructive" dans le contexte d\'une réunion signifie :',
          options: [
            'Utiliser des mots compliqués',
            'Parler de façon positive, qui contribue à trouver des solutions',
            'Exprimer toutes ses frustrations sans filtre',
            'Parler à haute voix',
          ],
          correctIndex: 1,
          explanation: '"Constructif" = qui construit, qui apporte quelque chose. "S\'exprimer de façon CONSTRUCTIVE" = contribuer positivement à la discussion, chercher des solutions plutôt que bloquer. Antonyme : "destructif" / "stérile".',
        },
        {
          id: 'b1-op-04-ex10',
          type: 'qcm',
          question: '"J\'entends votre argument, cependant..." signifie :',
          options: [
            'J\'écoute votre argument sans y répondre',
            'Je prends note de votre argument mais je vais y apporter une nuance ou une réponse',
            'Je suis d\'accord',
            'Je n\'ai pas entendu votre argument',
          ],
          correctIndex: 1,
          explanation: '"J\'entends" (ici) = je prends en compte, je comprends (pas littéralement "je perçois le son"). "J\'ENTENDS votre argument, CEPENDANT..." = I hear your argument, however... C\'est une formule d\'écoute active avant d\'exprimer une nuance.',
        },
        {
          id: 'b1-op-04-ex11',
          type: 'qcm',
          question: '"Engagements écrits de la mairie" — pourquoi les engagements écrits sont-ils importants ?',
          options: [
            'Les écrits sont plus formels et engagent légalement / politiquement la mairie',
            'Les écrits sont plus faciles à lire',
            'Les promesses verbales ne sont jamais faites',
            'C\'est une obligation légale dans les réunions',
          ],
          correctIndex: 0,
          explanation: 'Les engagements ÉCRITS ont une valeur juridique et politique supérieure aux promesses verbales. "Les paroles s\'envolent, les écrits restent" (Verba volant, scripta manent). Un engagement écrit est plus difficile à nier ou à ignorer.',
        },
        {
          id: 'b1-op-04-ex12',
          type: 'qcm',
          question: '"Je m\'engage à participer aux actions d\'intégration." Isabelle :',
          options: [
            'Fait une promesse conditionnelle',
            'Prend un engagement public personnel — elle s\'engage à agir, pas seulement à approuver',
            'Critique les actions d\'intégration',
            'Demande à Marc de s\'engager',
          ],
          correctIndex: 1,
          explanation: '"Je M\'ENGAGE à" = I commit to / I promise to. Isabelle va au-delà du vote : elle s\'engage PERSONNELLEMENT à participer activement. C\'est une contribution concrète, pas juste une position théorique.',
        },
        {
          id: 'b1-op-04-ex13',
          type: 'qcm',
          question: '"Votre point est valide, mais il faut aussi considérer..." introduit :',
          options: [
            'Un accord total',
            'Une validation partielle + ajout d\'une perspective complémentaire',
            'Un refus du point adverse',
            'Une conclusion',
          ],
          correctIndex: 1,
          explanation: '"Votre point est valide" = je reconnais que votre argument est bon (validation). "MAIS il faut aussi considérer X" = j\'ajoute une dimension que vous n\'avez pas mentionnée. Structure d\'accord partiel + complément.',
        },
        {
          id: 'b1-op-04-ex14',
          type: 'qcm',
          question: '"Si on prenait en compte X, est-ce que Y serait acceptable pour vous ?" est une question qui :',
          options: [
            'Met fin au débat',
            'Propose une solution conditionnelle pour tester si l\'interlocuteur peut accepter un compromis',
            'Critique l\'interlocuteur',
            'Demande une simple information',
          ],
          correctIndex: 1,
          explanation: 'C\'est une question de NÉGOCIATION / COMPROMIS. Elle propose une solution hypothétique ("si on prenait en compte X") et demande si l\'autre pourrait l\'accepter. Technique très utile pour débloquer une situation de désaccord.',
        },
        {
          id: 'b1-op-04-ex15',
          type: 'qcm',
          question: 'L\'animateur dit "tout le monde semble d\'accord sur le fait que des ressources sont nécessaires." Son rôle est de :',
          options: [
            'Prendre parti pour Isabelle',
            'Identifier le terrain d\'entente pour faire avancer la discussion',
            'Mettre fin à la réunion',
            'Donner la parole uniquement à Marc',
          ],
          correctIndex: 1,
          explanation: 'L\'animateur identifie le POINT DE CONSENSUS ("ressources nécessaires") pour faire avancer la discussion. C\'est son rôle : identifier les accords partiels et construire sur eux pour trouver un terrain d\'entente.',
        },
        {
          id: 'b1-op-04-ex16',
          type: 'qcm',
          question: '"Marc n\'est pas contre les réfugiés, mais sur l\'emplacement." Quelle nuance est-ce là ?',
          options: [
            'Marc est pour le projet sans réserve',
            'Marc est contre les réfugiés mais pas le projet',
            'Marc distingue son opposition au lieu de l\'opposition à la population accueillie',
            'Marc est indifférent',
          ],
          correctIndex: 2,
          explanation: 'Marc dit : "Pas contre les réfugiés eux-mêmes — mais sur l\'emplacement." Il fait une DISTINCTION CLAIRE entre sa réserve (le lieu = les ressources du quartier) et une possible xénophobie (contre les réfugiés). C\'est une nuance rhétoriquement importante.',
        },
        {
          id: 'b1-op-04-ex17',
          type: 'qcm',
          question: '"En d\'autres termes" est utilisé pour :',
          options: [
            'Donner un exemple',
            'Reformuler ce qu\'on vient de dire avec d\'autres mots',
            'Contester un argument',
            'Introduire une statistique',
          ],
          correctIndex: 1,
          explanation: '"En d\'autres termes" = in other words. Reformuler pour clarifier ou expliquer différemment. Synonymes : autrement dit / c\'est-à-dire / pour le dire autrement.',
        },
        {
          id: 'b1-op-04-ex18',
          type: 'qcm',
          question: '"Mettre la pression sur les services" (Marc) signifie :',
          options: [
            'Aider les services publics',
            'Surcharger / dépasser la capacité des services publics du quartier',
            'Critiquer les services',
            'Financer les services',
          ],
          correctIndex: 1,
          explanation: '"Mettre la pression sur les services" = to put pressure on / to overload the services. Marc s\'inquiète que le centre de réfugiés dépasse la capacité des écoles, médecins, transports du quartier qui sont déjà insuffisants.',
        },
        {
          id: 'b1-op-04-ex19',
          type: 'qcm',
          question: '"Si je peux me permettre une remarque..." est une formule pour :',
          options: [
            'Demander la permission de partir',
            'Introduire poliment une observation ou une critique',
            'Exprimer un accord total',
            'Conclure le débat',
          ],
          correctIndex: 1,
          explanation: '"Si je peux me permettre une remarque" = if I may make an observation. Formule POLIE pour prendre la parole, surtout si on va dire quelque chose de nuancé ou légèrement critique. Le "si je peux me permettre" montre du respect pour le groupe.',
        },
        {
          id: 'b1-op-04-ex20',
          type: 'qcm',
          question: 'Qu\'est-ce que "formaliser" des engagements dans le contexte de la réunion ?',
          options: [
            'Les noter dans un agenda personnel',
            'Les mettre par écrit de façon officielle (compte-rendu, courrier, délibération...)',
            'Les annoncer verbalement',
            'Les confirmer par téléphone',
          ],
          correctIndex: 1,
          explanation: '"Formaliser" = rendre officiel par écrit. "Formaliser les engagements" = les mettre par écrit de façon officielle (compte-rendu de réunion, courrier de la mairie, délibération du conseil municipal). C\'est ce que Marc demande pour garantir les ressources.',
        },
      ],
    },
  ],
};
