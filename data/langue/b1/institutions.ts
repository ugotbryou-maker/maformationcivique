import type { LangModule } from '../types';

export const b1Institutions: LangModule = {
  id: 'b1-mod-04',
  slug: 'b1-institutions',
  level: 'B1',
  title: 'Les institutions françaises',
  subtitle: 'La Ve République, les pouvoirs et la démocratie locale',
  description: 'Comprenez l\'organisation de la République française, ses institutions et ses acteurs pour participer à la vie démocratique.',
  type: 'thematique',
  emoji: '🏛️',
  free: false,
  lessons: [
    {
      id: 'b1-inst-01',
      slug: 'b1-republique-constitution',
      moduleSlug: 'b1-institutions',
      level: 'B1',
      title: 'La République et la Constitution',
      description: 'Les fondements de la Ve République, la Constitution de 1958 et les principes républicains.',
      duration: 12,
      free: false,
      dialogue: `## Texte : La Ve République — un régime présidentiel et parlementaire

La France est une **République indivisible, laïque, démocratique et sociale** — telle est la définition donnée par l'article 1er de la Constitution de 1958. Cette Constitution, toujours en vigueur, a été rédigée sous l'impulsion du Général de Gaulle lors de la crise politique de 1958.

**Pourquoi la Ve République ?**
Les IVe République (1946-1958) souffrait d'une instabilité gouvernementale chronique (25 gouvernements en 12 ans). De Gaulle a voulu renforcer l'exécutif, notamment le rôle du Président de la République, pour mettre fin à cette paralysie.

**La séparation des pouvoirs** (Montesquieu) :
- **Pouvoir exécutif** : le Président de la République + le gouvernement (Premier ministre + ministres)
- **Pouvoir législatif** : le Parlement (Assemblée nationale + Sénat)
- **Pouvoir judiciaire** : les tribunaux et les cours (Cour de cassation pour le civil/pénal, Conseil d'État pour l'administratif, Conseil constitutionnel pour les lois)

**La devise républicaine** : **Liberté, Égalité, Fraternité** (issue de la Révolution de 1789)

**L'hymne** : La Marseillaise (composée en 1792)

**Le principe de laïcité** (loi de 1905) sépare l'Église de l'État. Il garantit la liberté de conscience et l'égalité de traitement pour toutes les religions dans l'espace public institutionnel.`,

      linguisticPoint: `## Point linguistique : La nominalisation (transformer un verbe en nom)

### Pourquoi nominaliser ?
La nominalisation = utiliser un nom là où on utiliserait un verbe. C'est fréquent dans les textes formels, institutionnels et journalistiques.

### Procédés courants
| Verbe | Nom dérivé | Suffixe utilisé |
|---|---|---|
| voter | le vote / le scrutin | — |
| élire | l'élection | -tion |
| gouverner | le gouvernement | -ment |
| séparer | la séparation | -ation |
| indivisible | l'indivisibilité | -ité |
| laïque | la laïcité | -ité |
| constituer | la constitution | -tion |
| républicain | la République | — |
| exécuter | l'exécutif | -if |
| législer | le législatif / la législation | -if / -tion |

### Transformation de phrases
- **Verbe** : "On a révisé la Constitution en 2008"
- **Nom** : "La révision de la Constitution en 2008..."

- **Verbe** : "Le Président gouverne pendant 5 ans"
- **Nom** : "La gouvernance présidentielle dure 5 ans"

### Usage pratique
La nominalisation rend le discours plus **dense et formel** — utile dans l'entretien de naturalisation pour montrer sa maîtrise du français institutionnel.`,

      keyPoints: [
        'Article 1er Constitution : "France = République indivisible, laïque, démocratique et sociale"',
        'Ve République créée en 1958 par De Gaulle (réaction à l\'instabilité de la IVe)',
        '3 pouvoirs : exécutif (Président + gouvernement) / législatif (Parlement) / judiciaire',
        'Devise : Liberté, Égalité, Fraternité — Hymne : La Marseillaise',
        'Laïcité = loi de 1905 — séparation Église / État',
      ],

      exercises: [
        {
          id: 'b1-inst-01-ex01',
          type: 'qcm',
          question: 'Comment l\'article 1er de la Constitution définit-il la France ?',
          options: [
            'Un État monarchique constitutionnel',
            'Une République indivisible, laïque, démocratique et sociale',
            'Un État fédéral et laïque',
            'Une démocratie parlementaire pure',
          ],
          correctIndex: 1,
          explanation: '"La France est une République indivisible, laïque, démocratique et sociale." (Article 1er de la Constitution du 4 octobre 1958). Ces 4 adjectifs résument les principes fondamentaux : une (indivisible), séparée des religions (laïque), élue (démocratique), solidaire (sociale).',
        },
        {
          id: 'b1-inst-01-ex02',
          type: 'qcm',
          question: 'Nominalisation : "Les citoyens ont élu le Président." → forme nominalisée :',
          options: [
            'L\'élection du Président par les citoyens',
            'L\'élire du Président par les citoyens',
            'L\'élu du Président est fait',
            'Les citoyens font l\'élection',
          ],
          correctIndex: 0,
          explanation: '"L\'ÉLECTION du Président par les citoyens." Nominalisation : "élire" → "l\'élection". Le sujet ("les citoyens") devient complément avec "par" au passif, ou disparaît. Forme dense et formelle.',
        },
        {
          id: 'b1-inst-01-ex03',
          type: 'qcm',
          question: 'Pourquoi De Gaulle a-t-il créé la Ve République en 1958 ?',
          options: [
            'Pour supprimer le Parlement',
            'Pour mettre fin à l\'instabilité de la IVe République (25 gouvernements en 12 ans)',
            'Pour restaurer la monarchie',
            'Pour rejoindre l\'Europe',
          ],
          correctIndex: 1,
          explanation: 'La IVe République (1946-1958) souffrait d\'une instabilité chronique : 25 gouvernements en 12 ans. De Gaulle a voulu renforcer l\'exécutif (notamment le Président) pour assurer la stabilité. La crise algérienne de 1958 a précipité ce changement.',
        },
        {
          id: 'b1-inst-01-ex04',
          type: 'qcm',
          question: 'Nominalisation : "séparer" → ?',
          options: ['La séparatif', 'La séparation', 'Le séparateur', 'Le séparatisme'],
          correctIndex: 1,
          explanation: '"Séparer" → "la SÉPARATION". Suffixe -ation très commun : séparer → séparation, constituer → constitution, voter → ? (pas "votation" usuellement en France, mais "le vote"). La "séparation des pouvoirs" est le concept de Montesquieu.',
        },
        {
          id: 'b1-inst-01-ex05',
          type: 'qcm',
          question: 'Quel est le pouvoir judiciaire en France (pour les affaires civiles et pénales) ?',
          options: [
            'Le Conseil constitutionnel',
            'La Cour de cassation',
            'Le Conseil d\'État',
            'Le Sénat',
          ],
          correctIndex: 1,
          explanation: 'La COUR DE CASSATION = juridiction suprême pour le civil et le pénal. Le CONSEIL D\'ÉTAT = juridiction administrative suprême. Le CONSEIL CONSTITUTIONNEL = vérifie la constitutionnalité des lois (pas un tribunal ordinaire). Le Sénat = pouvoir législatif.',
        },
        {
          id: 'b1-inst-01-ex06',
          type: 'qcm',
          question: 'Quelle est la devise de la République française ?',
          options: [
            'Égalité, Sécurité, Prospérité',
            'Liberté, Fraternité, Laïcité',
            'Liberté, Égalité, Fraternité',
            'Unité, Indivisibilité, Fraternité',
          ],
          correctIndex: 2,
          explanation: '"Liberté, Égalité, Fraternité" — devise issue de la Révolution française de 1789. Elle figure sur les pièces de monnaie, les bâtiments officiels et les documents républicains. À mémoriser pour l\'entretien de naturalisation.',
        },
        {
          id: 'b1-inst-01-ex07',
          type: 'qcm',
          question: 'Nominalisation : "laïque" → concept abstrait :',
          options: ['La laïquité', 'La laïcité', 'Le laïcisme', 'L\'état laïque'],
          correctIndex: 1,
          explanation: '"Laïque" → "la LAÏCITÉ". Suffixe -ité : laïque → laïcité, démocratique → démocratie, républicain → République. "La laïcité" est un principe fondamental de la République française (loi de 1905).',
        },
        {
          id: 'b1-inst-01-ex08',
          type: 'qcm',
          question: 'La loi de 1905 (laïcité) établit principalement :',
          options: [
            'L\'obligation d\'être baptisé pour accéder à la nationalité',
            'La séparation des Églises et de l\'État + liberté de conscience',
            'L\'interdiction de toute religion en France',
            'Le financement des cultes par l\'État',
          ],
          correctIndex: 1,
          explanation: 'La loi de 1905 dit : "La République assure la liberté de conscience. Elle garantit le libre exercice des cultes." ET sépare Église et État (l\'État ne finance plus les cultes, sauf cas Alsace-Moselle). La laïcité ne supprime PAS les religions — elle les privatise et garantit la liberté de conscience.',
        },
        {
          id: 'b1-inst-01-ex09',
          type: 'qcm',
          question: 'Nominalisation de phrase : "Le gouvernement a révisé les lois." →',
          options: [
            'La révision des lois par le gouvernement',
            'Le réviser des lois gouvernementales',
            'La révision gouverne les lois',
            'Gouverner = réviser les lois',
          ],
          correctIndex: 0,
          explanation: '"La RÉVISION des lois par le gouvernement." "Réviser" → "la révision". Le sujet ("le gouvernement") devient "par le gouvernement" si on garde l\'idée d\'agent, ou disparaît si on veut un style encore plus neutre : "la révision des lois (en 2008)".',
        },
        {
          id: 'b1-inst-01-ex10',
          type: 'qcm',
          question: 'Quel philosophe est associé au principe de "séparation des pouvoirs" ?',
          options: ['Rousseau', 'Voltaire', 'Montesquieu', 'Descartes'],
          correctIndex: 2,
          explanation: 'MONTESQUIEU (Charles-Louis de Secondat, baron de Montesquieu, 1689-1755) a théorisé la séparation des pouvoirs dans "De l\'Esprit des lois" (1748). Il distingue le pouvoir législatif, exécutif et judiciaire. Cette théorie influence la Constitution française et la démocratie moderne.',
        },
        {
          id: 'b1-inst-01-ex11',
          type: 'qcm',
          question: 'Nominalisation : "constituer" → ?',
          options: ['La constitution', 'Le constitutif', 'La constituation', 'Le constitutement'],
          correctIndex: 0,
          explanation: '"Constituer" → "la CONSTITUTION". La Constitution = le texte fondamental qui organise les institutions d\'un État. En France, la Constitution du 4 octobre 1958 est en vigueur. Elle a été révisée plus de 20 fois.',
        },
        {
          id: 'b1-inst-01-ex12',
          type: 'qcm',
          question: 'Qu\'est-ce que le "pouvoir exécutif" en France ?',
          options: [
            'L\'Assemblée nationale et le Sénat',
            'Le Président de la République, le Premier ministre et les ministres',
            'Les tribunaux et les cours',
            'Le Conseil constitutionnel uniquement',
          ],
          correctIndex: 1,
          explanation: 'Pouvoir EXÉCUTIF = celui qui "exécute" (met en œuvre) les lois. En France : le Président de la République (élu au suffrage universel direct pour 5 ans) + le Premier ministre + les ministres (gouvernement). Le Premier ministre dirige le gouvernement nommé par le Président.',
        },
        {
          id: 'b1-inst-01-ex13',
          type: 'qcm',
          question: 'Nominalisation dense : "On gouverne le pays démocratiquement." →',
          options: [
            'La gouvernance démocratique du pays',
            'Le gouvernement fait de la démocratie',
            'Gouverner le pays est démocratique',
            'La démocratie gouverne',
          ],
          correctIndex: 0,
          explanation: '"LA GOUVERNANCE DÉMOCRATIQUE DU PAYS." "Gouverner" → "la gouvernance". "Démocratiquement" (adverbe) → "démocratique" (adjectif). "Du pays" = complément du nom. Forme nominale très dense, style soutenu institutionnel.',
        },
        {
          id: 'b1-inst-01-ex14',
          type: 'qcm',
          question: 'En quelle année La Marseillaise a-t-elle été composée ?',
          options: ['1789', '1792', '1815', '1871'],
          correctIndex: 1,
          explanation: 'La Marseillaise a été composée en 1792 par Claude Joseph Rouget de Lisle à Strasbourg, pendant les guerres révolutionnaires. Elle devient hymne national en 1795, supprimée sous l\'Empire, puis réadoptée définitivement en 1879.',
        },
        {
          id: 'b1-inst-01-ex15',
          type: 'qcm',
          question: '"Indivisible" dans "République indivisible" signifie :',
          options: [
            'La France ne peut pas être divisée en régions administratives',
            'La France est un État unitaire — pas un État fédéral, pas de régions indépendantes',
            'Les lois françaises ne peuvent pas être modifiées',
            'Les Français sont tous unis culturellement',
          ],
          correctIndex: 1,
          explanation: '"République indivisible" = État UNITAIRE (pas fédéral). Il n\'y a qu\'une seule souveraineté nationale. Les régions et collectivités locales existent, mais elles n\'ont pas de pouvoir souverain distinct. Cela s\'oppose à un État fédéral (comme l\'Allemagne ou les USA) où chaque État a ses propres compétences souveraines.',
        },
        {
          id: 'b1-inst-01-ex16',
          type: 'qcm',
          question: 'Nominalisation : "Les citoyens participent activement." →',
          options: [
            'La participation active des citoyens',
            'Les citoyens font de la participation',
            'Participer est actif pour les citoyens',
            'L\'activité participation des citoyens',
          ],
          correctIndex: 0,
          explanation: '"LA PARTICIPATION ACTIVE DES CITOYENS." "Participer" → "la participation". "Activement" (adverbe) → "active" (adjectif). "Des citoyens" = complément. Style formel typique des textes institutionnels.',
        },
        {
          id: 'b1-inst-01-ex17',
          type: 'qcm',
          question: 'Le Conseil constitutionnel a pour mission principale de :',
          options: [
            'Juger les crimes les plus graves',
            'Vérifier que les lois votées respectent la Constitution',
            'Choisir les ministres',
            'Représenter la France à l\'étranger',
          ],
          correctIndex: 1,
          explanation: 'Le CONSEIL CONSTITUTIONNEL vérifie la constitutionnalité des lois (avant et après leur promulgation depuis la QPC en 2010). Il est composé de 9 membres nommés (Président de la République + présidents des deux assemblées). Il peut annuler une loi inconstitutionnelle.',
        },
        {
          id: 'b1-inst-01-ex18',
          type: 'qcm',
          question: 'Nominalisation : "La France garantit la liberté d\'expression." →',
          options: [
            'La garantie de la liberté d\'expression par la France',
            'La France garantit librement d\'exprimer',
            'L\'expression garantit la liberté',
            'La France exprime la garantie de liberté',
          ],
          correctIndex: 0,
          explanation: '"LA GARANTIE DE LA LIBERTÉ D\'EXPRESSION PAR LA FRANCE." Nominalisation : "garantir" → "la garantie". "La liberté d\'expression" reste tel quel (c\'est déjà une nominalisation : "exprimer" → "l\'expression"). "Par la France" = l\'agent.',
        },
        {
          id: 'b1-inst-01-ex19',
          type: 'qcm',
          question: '"La France est une République sociale" signifie :',
          options: [
            'La France aime les réseaux sociaux',
            'L\'État a des missions de solidarité et de protection sociale',
            'Tous les Français sont sociables',
            'La France a un parti socialiste au pouvoir',
          ],
          correctIndex: 1,
          explanation: '"Sociale" = qui assure des missions de solidarité et de protection sociale. L\'État social (welfare state) prend en charge la santé, la retraite, le chômage, l\'aide aux familles... La France a l\'un des systèmes de protection sociale les plus développés du monde.',
        },
        {
          id: 'b1-inst-01-ex20',
          type: 'qcm',
          question: 'La "QPC" (Question Prioritaire de Constitutionnalité, 2010) permet :',
          options: [
            'Aux parlementaires de questionner le gouvernement',
            'À tout justiciable de contester la constitutionnalité d\'une loi pendant un procès',
            'Au Président de dissoudre le Parlement',
            'Aux régions de s\'opposer aux lois nationales',
          ],
          correctIndex: 1,
          explanation: 'La QPC (depuis 2010) permet à tout citoyen impliqué dans un procès de soulever l\'inconstitutionnalité d\'une loi qui lui est appliquée. La question est transmise au Conseil constitutionnel qui peut annuler la loi. Grande avancée pour les droits individuels.',
        },
      ],
    },

    {
      id: 'b1-inst-02',
      slug: 'b1-pouvoirs-executif-legislatif',
      moduleSlug: 'b1-institutions',
      level: 'B1',
      title: 'Président, gouvernement et Parlement',
      description: 'Le rôle du Président, du Premier ministre et du Parlement dans la Ve République.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Comment fonctionne le pouvoir en France ?

**Le Président de la République** est au centre du système de la Ve République. Élu pour 5 ans (mandat dit "quinquennat") au suffrage universel direct depuis 1962, il est à la fois chef de l'État et chef des armées. Il nomme le Premier ministre et peut dissoudre l'Assemblée nationale. Il préside le Conseil des ministres.

**Pouvoirs du Président :**
- Nommer le Premier ministre et les ministres (sur proposition du PM)
- Signer les ordonnances et décrets
- Droit de grâce
- Dissolution de l'Assemblée nationale
- Référendum (article 11)
- Pouvoirs exceptionnels en cas de crise (article 16)

**Le Premier ministre** dirige le gouvernement. Il est responsable devant l'Assemblée nationale (motion de censure). Il coordonne l'action gouvernementale et signe aussi des décrets.

**Le Parlement bicaméral** :
- **L'Assemblée nationale** (577 députés, 5 ans) : chambre élue au suffrage direct, elle vote la loi et peut renverser le gouvernement. Elle a le DERNIER MOT sur les lois en cas de désaccord avec le Sénat.
- **Le Sénat** (348 sénateurs, 6 ans, renouvelé par tiers) : chambre haute, élue au suffrage indirect (par les "grands électeurs"). Il représente les collectivités territoriales. Moins puissant que l'Assemblée.

**La cohabitation** se produit quand le Président et le Premier ministre sont de bords politiques opposés (ex : Chirac-Jospin 1997-2002).`,

      linguisticPoint: `## Point linguistique : Les verbes de modalité au subjonctif

### Rappel : quand utilise-t-on le subjonctif ?
Après les verbes d'obligation, volonté, doute, sentiment + "que"

### Verbes courants + subjonctif
| Verbe / expression | Exemple |
|---|---|
| Il faut que | Il faut que le Président **soit** élu |
| Il est nécessaire que | Il est nécessaire que les lois **respectent** la Constitution |
| Il est possible que | Il est possible que le gouvernement **démissionne** |
| Il est important que | Il est important que les citoyens **votent** |
| Il est regrettable que | Il est regrettable que l'abstention **soit** si haute |
| Je souhaite que | Je souhaite que la loi **passe** |
| Je veux que | Je veux que mon dossier **soit** traité |
| Je doute que | Je doute qu\'il **vienne** |
| J'ai peur que | J'ai peur que la situation **empire** |
| Bien que / quoique | Bien que ce **soit** difficile... |

### Formation du subjonctif présent
- Radical "ils" présent + -e, -es, -e, -ions, -iez, -ent
- Irréguliers : être → **soi**t ; avoir → **ai**t ; aller → **aille** ; vouloir → **veuille** ; pouvoir → **puisse** ; savoir → **sache**`,

      keyPoints: [
        'Quinquennat = mandat présidentiel de 5 ans (depuis 2002)',
        'Assemblée nationale = 577 députés, 5 ans, chambre du bas, dernier mot sur les lois',
        'Sénat = 348 sénateurs, 6 ans, suffrage indirect, représente les collectivités',
        'Cohabitation = Président et Premier ministre de bords politiques opposés',
        'Subjonctif après "il faut que / il est nécessaire que / bien que"',
      ],

      exercises: [
        {
          id: 'b1-inst-02-ex01',
          type: 'qcm',
          question: 'Subjonctif : "Il faut que le Président ___ élu au suffrage universel." (être)',
          options: ['est', 'soit', 'sera', 'serait'],
          correctIndex: 1,
          explanation: '"Il faut que le Président SOIT élu." "Il faut que" + subjonctif. Subjonctif d\'"être" = "soit". Règle : "il faut que" est toujours suivi du subjonctif.',
        },
        {
          id: 'b1-inst-02-ex02',
          type: 'qcm',
          question: 'Combien d\'années dure le mandat présidentiel depuis 2002 ?',
          options: ['4 ans', '5 ans', '6 ans', '7 ans'],
          correctIndex: 1,
          explanation: 'Le "quinquennat" = 5 ans. Depuis le référendum de 2000 (entré en vigueur en 2002), le mandat présidentiel est de 5 ans (au lieu de 7 ans = le "septennat"). La réforme visait à mieux aligner le mandat présidentiel avec celui des députés (5 ans).',
        },
        {
          id: 'b1-inst-02-ex03',
          type: 'qcm',
          question: 'Subjonctif : "Il est possible que le gouvernement ___." (démissionner)',
          options: ['démissionne', 'démissionnerait', 'démissionnera', 'a démissionné'],
          correctIndex: 0,
          explanation: '"Il est possible que le gouvernement DÉMISSIONNE." "Il est possible que" + subjonctif. Subjonctif de "démissionner" (verbe régulier -er) : radical + -e → "démissionne".',
        },
        {
          id: 'b1-inst-02-ex04',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une "motion de censure" ?',
          options: [
            'Un vote pour censurer la presse',
            'Un vote de l\'Assemblée nationale pour renverser le gouvernement',
            'Une décision du Président de dissoudre le Parlement',
            'Une loi limitant la liberté d\'expression',
          ],
          correctIndex: 1,
          explanation: 'Motion de censure = vote de l\'Assemblée nationale pour obliger le gouvernement à démissionner. Elle doit être votée à la majorité absolue. Si elle passe, le gouvernement doit remettre sa démission au Président. C\'est le principal moyen de contrôle du Parlement sur l\'exécutif.',
        },
        {
          id: 'b1-inst-02-ex05',
          type: 'qcm',
          question: 'Subjonctif : "Bien que ce ___ difficile, il faut voter." (être)',
          options: ['est', 'était', 'soit', 'serait'],
          correctIndex: 2,
          explanation: '"Bien que ce SOIT difficile." "Bien que" + subjonctif (toujours). Subjonctif d\'"être" = "soit". "Bien que" = even though / although. ⚠️ Ne jamais mettre l\'indicatif après "bien que".',
        },
        {
          id: 'b1-inst-02-ex06',
          type: 'qcm',
          question: 'Quelle chambre du Parlement a le "dernier mot" sur les lois ?',
          options: ['Le Sénat', 'L\'Assemblée nationale', 'Le Conseil constitutionnel', 'Les deux ont le même poids'],
          correctIndex: 1,
          explanation: 'L\'ASSEMBLÉE NATIONALE a le dernier mot. En cas de désaccord entre l\'Assemblée et le Sénat (après commission mixte paritaire), c\'est l\'Assemblée nationale (chambre du bas, élue directement) qui statue en dernier ressort.',
        },
        {
          id: 'b1-inst-02-ex07',
          type: 'qcm',
          question: 'Subjonctif : "Je veux que mon dossier ___ traité rapidement." (être)',
          options: ['est', 'sera', 'soit', 'serait'],
          correctIndex: 2,
          explanation: '"Je veux que mon dossier SOIT traité rapidement." "Vouloir que" + subjonctif. Passif au subjonctif : être (subjonctif = "soit") + PP ("traité"). ⚠️ Passif + subjonctif.',
        },
        {
          id: 'b1-inst-02-ex08',
          type: 'qcm',
          question: 'La "cohabitation" désigne :',
          options: [
            'Deux couples vivant dans le même logement',
            'Quand le Président et le Premier ministre sont de partis politiques opposés',
            'Un accord entre deux partis politiques pour former une coalition',
            'Un mariage entre deux membres du gouvernement',
          ],
          correctIndex: 1,
          explanation: 'Cohabitation = Président et Premier ministre de camps politiques OPPOSÉS. Ex : Mitterrand (PS) + Chirac (RPR) en 1986-1988, Chirac (RPR) + Jospin (PS) en 1997-2002. La cohabitation crée un "partage du pouvoir exécutif" non voulu. Depuis le quinquennat (2002), la cohabitation est moins probable.',
        },
        {
          id: 'b1-inst-02-ex09',
          type: 'qcm',
          question: 'Subjonctif : "Il est nécessaire que les candidats ___ leurs promesses." (tenir)',
          options: ['tiennent', 'tiendraient', 'tiendront', 'ont tenu'],
          correctIndex: 0,
          explanation: '"Il est nécessaire que les candidats TIENNENT leurs promesses." "Il est nécessaire que" + subjonctif. Subjonctif de "tenir" (irrégulier) : radical de "ils tiennent" (présent) → "tien-" → "tiennent".',
        },
        {
          id: 'b1-inst-02-ex10',
          type: 'qcm',
          question: 'Le Sénat est élu au suffrage :',
          options: ['Universel direct (par tous les citoyens)', 'Indirect (par les "grands électeurs")', 'Royal (nommé par le Président)', 'Proportionnel direct'],
          correctIndex: 1,
          explanation: 'Le Sénat est élu au SUFFRAGE INDIRECT. Les "grands électeurs" = représentants des collectivités territoriales (maires, conseillers municipaux, conseillers départementaux et régionaux). C\'est pourquoi le Sénat représente les collectivités territoriales.',
        },
        {
          id: 'b1-inst-02-ex11',
          type: 'qcm',
          question: 'Subjonctif avec doute : "Je doute que le gouvernement ___ cette décision." (prendre)',
          options: ['prend', 'prendrait', 'prendra', 'prenne'],
          correctIndex: 3,
          explanation: '"Je doute que le gouvernement PRENNE cette décision." "Douter que" + subjonctif. Subjonctif de "prendre" : radical "ils prennent" → "prenn-" → "prenne". ⚠️ "Je ne doute pas que" peut avoir l\'indicatif (certitude).',
        },
        {
          id: 'b1-inst-02-ex12',
          type: 'qcm',
          question: 'Combien y a-t-il de sénateurs au Sénat ?',
          options: ['247', '348', '577', '577'],
          correctIndex: 1,
          explanation: '348 sénateurs. L\'Assemblée nationale compte 577 DÉPUTÉS. Le Sénat compte 348 SÉNATEURS. Les sénateurs ont un mandat de 6 ans (renouvelé par moitié tous les 3 ans). L\'âge minimum pour être sénateur est 24 ans (vs 18 pour député).',
        },
        {
          id: 'b1-inst-02-ex13',
          type: 'qcm',
          question: 'Subjonctif : "Il est regrettable que l\'abstention ___ si élevée." (être)',
          options: ['est', 'était', 'soit', 'sera'],
          correctIndex: 2,
          explanation: '"Il est regrettable que l\'abstention SOIT si élevée." "Il est regrettable que" + subjonctif. Exprime un jugement négatif. "Soit" = subjonctif d\'"être". L\'abstention électorale en France est un sujet de préoccupation démocratique.',
        },
        {
          id: 'b1-inst-02-ex14',
          type: 'qcm',
          question: '"L\'article 16" de la Constitution donne au Président :',
          options: [
            'Le droit de voter deux fois',
            'Des pouvoirs exceptionnels en cas de crise grave (les "pleins pouvoirs")',
            'Le droit de nommer les sénateurs',
            'Le droit de modifier la Constitution seul',
          ],
          correctIndex: 1,
          explanation: 'L\'article 16 = pouvoirs exceptionnels du Président "lorsque les institutions de la République, l\'indépendance de la Nation... sont menacées de manière grave et immédiate." Le Président peut alors prendre toutes mesures nécessaires. Utilisé une seule fois, par De Gaulle en 1961 (putsch d\'Alger).',
        },
        {
          id: 'b1-inst-02-ex15',
          type: 'qcm',
          question: 'Subjonctif : "J\'ai peur que la réforme ___." (ne pas passer)',
          options: [
            'ne passera pas',
            'ne passe pas',
            'ne passerait pas',
            'ne passait pas',
          ],
          correctIndex: 1,
          explanation: '"J\'ai peur que la réforme NE PASSE PAS." "Avoir peur que" + subjonctif. Note : avec "avoir peur que", on peut ajouter un "ne" explétif (ne sans valeur négative) : "j\'ai peur qu\'il ne vienne" (= que je crains qu\'il vienne). Le "ne passe pas" ici est une négation réelle.',
        },
        {
          id: 'b1-inst-02-ex16',
          type: 'qcm',
          question: 'Quel est le rôle principal du Premier ministre ?',
          options: [
            'Représenter la France à l\'étranger',
            'Diriger le gouvernement et coordonner l\'action ministérielle',
            'Présider le Conseil constitutionnel',
            'Élire les sénateurs',
          ],
          correctIndex: 1,
          explanation: 'Le Premier ministre = chef du gouvernement. Il dirige et coordonne l\'action des ministres. Il est responsable devant l\'Assemblée nationale (peut être censuré). Il partage le pouvoir exécutif avec le Président, mais dans la Ve République, le Président est souvent prédominant.',
        },
        {
          id: 'b1-inst-02-ex17',
          type: 'qcm',
          question: 'Subjonctif : "Je souhaite que vous ___ réussir." (pouvoir)',
          options: ['pouvez', 'pourrez', 'puissiez', 'pouviez'],
          correctIndex: 2,
          explanation: '"Je souhaite que vous PUISSIEZ réussir." "Souhaiter que" + subjonctif. Subjonctif de "pouvoir" (irrégulier) : "puisse / puisses / puisse / puissions / puissiez / puissent". "Vous puissiez" = 2ème personne du pluriel.',
        },
        {
          id: 'b1-inst-02-ex18',
          type: 'qcm',
          question: 'L\'article 11 de la Constitution permet :',
          options: [
            'La motion de censure',
            'L\'organisation d\'un référendum par le Président',
            'La dissolution du Sénat',
            'La nomination des ambassadeurs',
          ],
          correctIndex: 1,
          explanation: 'L\'article 11 permet au Président d\'organiser un RÉFÉRENDUM (vote populaire direct) sur certains sujets (organisation des pouvoirs publics, ratification de traités, réformes importantes). Exemple : référendum sur l\'adhésion de la Grande-Bretagne à l\'UE (1972) ou sur la Constitution européenne (2005).',
        },
        {
          id: 'b1-inst-02-ex19',
          type: 'qcm',
          question: 'Subjonctif : "Il faut que nous ___ nos droits civiques." (connaître)',
          options: ['connaissons', 'connaîtrions', 'connaissant', 'connaissions'],
          correctIndex: 3,
          explanation: '"Il faut que nous CONNAISSIONS nos droits civiques." Subjonctif de "connaître" (1ère pers. pl.) : radical "ils connaissent" → "connaiss-" + "-ions" → "connaissions". Les formes -ions et -iez au subjonctif ressemblent à l\'imparfait — pas de confusion avec le conditionnel.',
        },
        {
          id: 'b1-inst-02-ex20',
          type: 'qcm',
          question: '"Dissoudre l\'Assemblée nationale" signifie :',
          options: [
            'Suspendre les séances de travail',
            'Mettre fin au mandat des députés avant terme et convoquer de nouvelles élections',
            'Supprimer définitivement l\'Assemblée',
            'Changer la Constitution',
          ],
          correctIndex: 1,
          explanation: '"Dissoudre" = mettre fin prématurément au mandat des 577 députés et convoquer de nouvelles élections législatives. C\'est un pouvoir du Président (article 12). Utilisé par exemple par Macron en juin 2024 après les élections européennes.',
        },
      ],
    },

    {
      id: 'b1-inst-03',
      slug: 'b1-elections-systeme',
      moduleSlug: 'b1-institutions',
      level: 'B1',
      title: 'Les élections en France',
      description: 'Types d\'élections, modes de scrutin et participation démocratique.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Le calendrier électoral français

La France connaît plusieurs types d'élections, chacun avec ses propres règles et enjeux.

**Les élections nationales :**
- **Présidentielle** (tous les 5 ans) : 2 tours, majorité absolue au 2ème tour. Scrutin uninominal à deux tours. Le président est élu s'il obtient plus de 50% au 1er tour — chose rarissime — ou au 2ème tour.
- **Législatives** (tous les 5 ans, après la présidentielle) : 577 circonscriptions, 1 député par circonscription. 2 tours. Pour être élu au 1er tour : majorité absolue + 25% des inscrits. Pour passer au 2ème : minimum 12,5% des inscrits.

**Les élections locales :**
- **Municipales** (tous les 6 ans) : élection des maires et conseillers municipaux. Scrutin de liste dans les communes > 1000 hab.
- **Départementales** (tous les 6 ans) : élection des conseillers départementaux (par binômes homme-femme).
- **Régionales** (tous les 6 ans) : élection des conseillers régionaux.

**Les élections européennes** (tous les 5 ans) : scrutin proportionnel de liste. Les Français élisent des eurodéputés (MEPs) au Parlement européen.

**Qui peut voter ?**
- Avoir 18 ans minimum
- Être citoyen français OU citoyen d'un État membre de l'UE (pour les élections municipales et européennes seulement)
- Être inscrit sur les listes électorales (inscription automatique à 18 ans depuis 2016)

**L'abstention** est en hausse constante et préoccupe les acteurs politiques. Elle dépasse parfois 50% aux élections locales.`,

      linguisticPoint: `## Point linguistique : Exprimer la restriction et l'exception

### Ne... que (restriction)
"Il ne vote **que** lors des présidentielles." (= seulement)
⚠️ Ce n'est PAS une négation : "je n'ai qu'un enfant" = j'ai UN enfant.

### Sauf / excepté / hormis / à l'exception de
- "Tous peuvent voter **sauf** les étrangers non-UE"
- "**Excepté** les mineurs, tout le monde peut s\'inscrire"
- "**À l\'exception des** élections européennes, les étrangers UE ne votent pas"

### À moins que + subjonctif (exception conditionnelle)
"Il ne peut pas voter **à moins qu\'**il ne soit naturalisé."

### Seul(e) / Uniquement / Rien que
- "**Seuls** les citoyens français votent aux législatives"
- "**Uniquement** pour les municipales..."
- "**Rien que** pour les présidentielles..."

### Ne... plus / ne... jamais / ne... rien + exception
- "Il ne vote **jamais**... sauf quand les enjeux sont majeurs."`,

      keyPoints: [
        'Présidentielle : 2 tours, 5 ans, 577 circonscriptions pour législatives',
        'Vote : 18 ans + citoyen FR / UE (municipales+européennes seulement pour UE)',
        'Inscription automatique sur listes électorales à 18 ans depuis 2016',
        '"Ne... que" = restriction (seulement) — pas une négation : "j\'ai qu\'un enfant"',
        '"À moins que" + subjonctif = exception conditionnelle',
      ],

      exercises: [
        {
          id: 'b1-inst-03-ex01',
          type: 'qcm',
          question: 'Restriction : "Les étrangers non-UE ne peuvent voter ___ aux élections locales et européennes." (ne... que)',
          options: [
            'rien que',
            'ne... que',
            'Les étrangers non-UE ne peuvent PAS voter... sauf',
            '"Que" s\'utilise seul ici',
          ],
          correctIndex: 1,
          explanation: 'Attention : les étrangers NON-UE ne peuvent voter NI aux locales NI aux européennes. Seuls les citoyens UE peuvent voter aux municipales et européennes. "Ne... que" s\'appliquerait à : "Les étrangers UE NE peuvent voter QU\'aux élections municipales et européennes."',
        },
        {
          id: 'b1-inst-03-ex02',
          type: 'qcm',
          question: 'Combien y a-t-il de circonscriptions pour les législatives ?',
          options: ['348', '577', '101', '200'],
          correctIndex: 1,
          explanation: '577 circonscriptions = 577 sièges de députés à l\'Assemblée nationale. Chaque circonscription élit UN député pour 5 ans. La France métropolitaine + DOM-TOM sont divisés en 577 circonscriptions géographiques.',
        },
        {
          id: 'b1-inst-03-ex03',
          type: 'qcm',
          question: 'Restriction avec "sauf" : "___ les citoyens français et UE, personne ne peut voter en France."',
          options: ['Excepté', 'Sauf', 'À l\'exception de', 'Toutes ces réponses sont correctes'],
          correctIndex: 3,
          explanation: '"EXCEPTÉ / SAUF / À L\'EXCEPTION DE les citoyens français et UE, personne ne peut voter." Tous ces mots expriment l\'exception/restriction de la même façon. "Sauf" est le plus courant à l\'oral, "à l\'exception de" plus formel à l\'écrit.',
        },
        {
          id: 'b1-inst-03-ex04',
          type: 'qcm',
          question: 'Quel scrutin est utilisé pour les élections européennes ?',
          options: [
            'Uninominal à deux tours (comme les législatives)',
            'Proportionnel de liste (toute la France = une seule circonscription)',
            'Majoritaire à un tour',
            'Proportionnel par région',
          ],
          correctIndex: 1,
          explanation: 'Les élections européennes en France = scrutin PROPORTIONNEL DE LISTE. La France est une seule circonscription nationale. Les partis présentent des listes et les sièges sont répartis proportionnellement aux voix obtenues (à partir de 5%). Ce système favorise la représentation de partis minoritaires.',
        },
        {
          id: 'b1-inst-03-ex05',
          type: 'qcm',
          question: '"Ne... que" : "Il ne comprend ___ le français." = ?',
          options: [
            'Il ne comprend pas le français',
            'Il comprend seulement le français (= rien d\'autre)',
            'Il ne comprend jamais le français',
            'Il comprend tout sauf le français',
          ],
          correctIndex: 1,
          explanation: '"Il ne comprend QUE le français" = "Il comprend SEULEMENT le français." "Ne... que" = restriction (seulement), PAS une négation. "Il n\'a que 3 ans" = he is only 3 years old (restriction positive). Différent de "Il ne comprend PAS le français" (négation).',
        },
        {
          id: 'b1-inst-03-ex06',
          type: 'qcm',
          question: 'Depuis quelle année l\'inscription électorale est-elle automatique à 18 ans ?',
          options: ['1989', '2000', '2012', '2016'],
          correctIndex: 3,
          explanation: 'Depuis 2016, tout jeune Français est automatiquement inscrit sur les listes électorales à ses 18 ans. Avant, il fallait s\'inscrire activement. Cette réforme visait à faciliter la participation électorale des jeunes.',
        },
        {
          id: 'b1-inst-03-ex07',
          type: 'qcm',
          question: '"À moins qu\'il ne soit naturalisé, il ne pourra pas voter." = ?',
          options: [
            'Sauf s\'il est naturalisé, il ne pourra pas voter',
            'S\'il n\'est pas naturalisé, il ne pourra pas voter de toute façon',
            'Il pourra voter uniquement s\'il n\'est pas naturalisé',
            'Sa naturalisation ne change rien au droit de vote',
          ],
          correctIndex: 0,
          explanation: '"À moins qu\'il ne soit naturalisé, il ne pourra pas voter" = "SAUF S\'IL EST NATURALISÉ, il ne pourra pas voter." "À moins que + subjonctif" = unless. Exception conditionnelle : il ne peut pas voter SAUF si la condition est remplie (naturalisation).',
        },
        {
          id: 'b1-inst-03-ex08',
          type: 'qcm',
          question: 'Pour passer au 2ème tour des législatives, il faut :',
          options: [
            'Arriver dans les 2 premiers',
            'Obtenir au moins 12,5% des inscrits sur les listes électorales',
            'Obtenir la majorité absolue',
            'Appartenir à un parti représenté à l\'Assemblée',
          ],
          correctIndex: 1,
          explanation: 'Pour passer au 2ème tour des législatives : obtenir au moins 12,5% des électeurs INSCRITS (pas des suffrages exprimés). ⚠️ "Inscrits" ≠ "votants". Dans une circonscription à forte abstention, ce seuil peut représenter 25-30% des votes réels. Permet de limiter le nombre de candidats au 2ème tour.',
        },
        {
          id: 'b1-inst-03-ex09',
          type: 'qcm',
          question: 'Restriction : "Seules les personnes de ___ ans et plus peuvent voter." (compléter)',
          options: ['16', '17', '18', '21'],
          correctIndex: 2,
          explanation: '"Seules les personnes de 18 ANS ET PLUS peuvent voter." L\'âge de vote en France est 18 ans depuis 1974 (avant : 21 ans). "Seul(e)s" = restriction = uniquement. Un débat existe sur l\'abaissement à 16 ans pour certaines élections.',
        },
        {
          id: 'b1-inst-03-ex10',
          type: 'qcm',
          question: 'Les élections "départementales" élisent :',
          options: [
            'Le président du Département',
            'Les conseillers départementaux (par binômes homme-femme)',
            'Les maires des communes du département',
            'Les sénateurs',
          ],
          correctIndex: 1,
          explanation: 'Les élections départementales élisent les CONSEILLERS DÉPARTEMENTAUX par BINÔMES homme-femme (depuis 2013, réforme de parité). Chaque canton élit un homme et une femme. Ces conseillers siègent au Conseil Départemental qui gère les compétences du Département (routes, collèges, aide sociale...).',
        },
        {
          id: 'b1-inst-03-ex11',
          type: 'qcm',
          question: '"Ne... que" dans un texte formel : "Cette mesure ne s\'applique ___ aux ressortissants UE."',
          options: [
            'pas',
            'que',
            'jamais',
            'rien',
          ],
          correctIndex: 1,
          explanation: '"Cette mesure ne s\'applique QU\'aux ressortissants UE." = "seulement aux ressortissants UE." "Ne... que" = restriction. La mesure s\'applique uniquement à ce groupe, pas aux autres. Forme très fréquente dans les textes juridiques et administratifs.',
        },
        {
          id: 'b1-inst-03-ex12',
          type: 'qcm',
          question: 'L\'"abstention" signifie :',
          options: [
            'Un vote blanc (enveloppe vide)',
            'Le fait de ne pas aller voter',
            'Voter pour un parti minoritaire',
            'Voter contre tous les candidats',
          ],
          correctIndex: 1,
          explanation: '"Abstention" = ne pas participer au vote. Différent de : "vote blanc" (enveloppe vide ou bulletin blanc = aller voter mais ne choisir personne), "vote nul" (bulletin non valide). L\'abstention est mesurée : "taux d\'abstention" = % d\'inscrits qui ne sont pas allés voter.',
        },
        {
          id: 'b1-inst-03-ex13',
          type: 'qcm',
          question: 'Exception : "___ les élections municipales et européennes, les étrangers UE ne peuvent pas voter." (compléter avec une locution restrictive)',
          options: ['Hormis', 'À part', 'Sauf pour', 'Toutes ces réponses'],
          correctIndex: 3,
          explanation: '"HORMIS / À PART / SAUF POUR les élections municipales et européennes, les étrangers UE ne peuvent pas voter." Tous ces mots expriment l\'exception. "Hormis" est plus soutenu, "sauf" plus courant.',
        },
        {
          id: 'b1-inst-03-ex14',
          type: 'qcm',
          question: 'Un citoyen portugais résidant légalement en France peut voter à :',
          options: [
            'Toutes les élections',
            'Seulement aux élections présidentielles',
            'Aux élections municipales et européennes seulement',
            'Il ne peut voter à aucune élection en France',
          ],
          correctIndex: 2,
          explanation: 'Un citoyen UE (Portugal = UE) résidant en France peut voter en France AUX ÉLECTIONS MUNICIPALES et AUX ÉLECTIONS EUROPÉENNES. Pas aux présidentielles, législatives, sénatoriales, départementales ou régionales (réservées aux citoyens français).',
        },
        {
          id: 'b1-inst-03-ex15',
          type: 'qcm',
          question: '"Il ne manque jamais un vote, rien que pour les présidentielles." Que signifie "rien que" ici ?',
          options: [
            'Il ne vote à rien du tout',
            'Il vote exclusivement aux présidentielles et à rien d\'autre',
            'Il vote quand même aux présidentielles',
            'Il ne vote que s\'il y a des enjeux',
          ],
          correctIndex: 1,
          explanation: '"Rien que" = exclusivement / uniquement. "Il vote, rien que pour les présidentielles" = il vote uniquement pour les présidentielles, et pour aucune autre élection. "Rien que" insiste sur l\'exclusivité et implique souvent une critique ou une surprise.',
        },
        {
          id: 'b1-inst-03-ex16',
          type: 'qcm',
          question: 'Pourquoi les élections locales ont-elles souvent un fort taux d\'abstention ?',
          options: [
            'Les enjeux locaux paraissent moins importants / moins médiatisés que les élections nationales',
            'L\'inscription est plus difficile pour les élections locales',
            'Le vote est facultatif uniquement aux élections locales',
            'Les partis politiques ne participent pas aux élections locales',
          ],
          correctIndex: 0,
          explanation: 'L\'abstention est plus forte aux élections locales (municipales, départementales, régionales) car elles bénéficient de moins de médiatisation, les enjeux semblent moins visibles pour les électeurs, et l\'entre-deux-tours mobilise moins. Ex : plus de 50% d\'abstention aux régionales 2021.',
        },
        {
          id: 'b1-inst-03-ex17',
          type: 'qcm',
          question: '"Uniquement les citoyens français peuvent voter aux législatives." Reformuler avec "ne... que" :',
          options: [
            'Les citoyens français ne votent que aux législatives',
            'Que les citoyens français peuvent voter aux législatives',
            'Les citoyens français ne peuvent que voter aux législatives',
            'Les citoyens non-français ne peuvent voter aux législatives',
          ],
          correctIndex: 3,
          explanation: 'La meilleure reformulation est : "LES CITOYENS NON-FRANÇAIS NE PEUVENT PAS VOTER aux législatives" OU "Seuls les citoyens français peuvent voter aux législatives." La forme "ne... que" s\'appliquerait à : "Les non-Français NE peuvent voter aux législatives QU\'..." (mais c\'est ici une interdiction, pas une restriction positive).',
        },
        {
          id: 'b1-inst-03-ex18',
          type: 'qcm',
          question: 'Les élections municipales : dans les communes de moins de 1000 habitants, quel scrutin est utilisé ?',
          options: [
            'Scrutin de liste proportionnel (comme les grandes villes)',
            'Scrutin plurinominal majoritaire à deux tours (vote sur des individus, pas des listes)',
            'Scrutin proportionnel pur',
            'Tirage au sort parmi les candidats',
          ],
          correctIndex: 1,
          explanation: 'Dans les communes < 1000 habitants : scrutin PLURINOMINAL MAJORITAIRE (les électeurs votent pour des personnes individuellement, pas pour une liste figée). Dans les communes ≥ 1000 habitants : scrutin de liste à deux tours avec prime majoritaire.',
        },
        {
          id: 'b1-inst-03-ex19',
          type: 'qcm',
          question: '"À moins que + subjonctif" exprime :',
          options: [
            'Une cause',
            'Une conséquence',
            'Une exception conditionnelle (sauf si...)',
            'Une concession',
          ],
          correctIndex: 2,
          explanation: '"À moins que + subjonctif" = UNLESS. Exception conditionnelle : "À moins qu\'il ne soit malade, il viendra" = unless he is sick, he will come = il viendra SAUF S\'IL EST MALADE.',
        },
        {
          id: 'b1-inst-03-ex20',
          type: 'qcm',
          question: 'Le "scrutin uninominal à deux tours" signifie :',
          options: [
            'Un vote collectif avec une liste de candidats',
            'Un vote pour un seul candidat, en deux étapes si nécessaire',
            'Un vote à la proportionnelle',
            'Un vote au premier tour seulement',
          ],
          correctIndex: 1,
          explanation: '"Uninominal" = pour UN seul nom (un candidat individuel). "À deux tours" = si aucun candidat n\'obtient la majorité absolue au 1er tour, un 2ème tour est organisé entre les candidats qualifiés. C\'est le système des présidentielles et législatives françaises.',
        },
      ],
    },

    {
      id: 'b1-inst-04',
      slug: 'b1-collectivites-decentralisation',
      moduleSlug: 'b1-institutions',
      level: 'B1',
      title: 'Collectivités locales et décentralisation',
      description: 'L\'organisation territoriale de la France, la décentralisation et le rôle des communes, départements et régions.',
      duration: 12,
      free: false,
      dialogue: `## Texte : La France et ses territoires

La France est un État unitaire, mais elle a progressivement accordé des compétences aux collectivités territoriales — un processus appelé **décentralisation**.

**Les trois niveaux de collectivités :**

**1. La commune** (36 000 en France — le plus grand nombre d'Europe) :
- Gère : l'état civil, les écoles primaires, les voiries communales, le plan local d'urbanisme, les services de proximité.
- Dirigée par le **maire** (élu par les conseillers municipaux) et le **conseil municipal**.

**2. Le département** (101 : 96 métropolitains + 5 DOM) :
- Gère : l'aide sociale (RSA, APA), les collèges, les routes départementales, les pompiers (SDIS).
- Dirigé par le **conseil départemental** (présidé par un président du conseil départemental).

**3. La région** (18 : 13 en métropole + 5 ultramarines) :
- Gère : le développement économique, les lycées, les transports régionaux (TER), la formation professionnelle.
- Dirigée par le **conseil régional** (présidé par le président de région).

**La décentralisation** a été amorcée par les lois Defferre de 1982-1983, qui ont transféré des compétences de l'État vers les collectivités. Elle a été renforcée par la loi NOTRe de 2015.

**Le préfet** représente l'État dans chaque département et région. Il veille au respect des lois et peut déférer les actes des collectivités au tribunal administratif s'il les juge illégaux.`,

      linguisticPoint: `## Point linguistique : Les pronoms démonstratifs — celui, celle, ceux, celles

### Tableau de base
| Genre/Nombre | Forme simple | + ci / là | + pronom relatif |
|---|---|---|---|
| Masc. sing. | celui | celui-ci / celui-là | celui qui/que/dont... |
| Fém. sing. | celle | celle-ci / celle-là | celle qui/que/dont... |
| Masc. pl. | ceux | ceux-ci / ceux-là | ceux qui/que/dont... |
| Fém. pl. | celles | celles-ci / celles-là | celles qui/que/dont... |

### Emplois
1. **Avec -ci / -là** (référence spatiale ou textuelle) :
   "Je préfère ce système-là à **celui-ci**."

2. **Avec un pronom relatif** (préciser lequel) :
   "Les collectivités **qui** gèrent les lycées sont **celles** des régions."
   "Le maire est **celui** **qui** gère la commune."

3. **Avec un complément de nom** :
   "Le rôle du département est différent de **celui** de la région."`,

      keyPoints: [
        'France : 36 000 communes (+ grand nombre en Europe) / 101 dép. / 18 régions',
        'Commune → mairie (maire + conseil municipal)',
        'Département → aide sociale (RSA, APA), collèges, routes, pompiers',
        'Région → développement économique, lycées, TER, formation professionnelle',
        'Décentralisation = lois Defferre 1982-83 + loi NOTRe 2015',
      ],

      exercises: [
        {
          id: 'b1-inst-04-ex01',
          type: 'qcm',
          question: 'Pronom démonstratif : "Le rôle du département est différent de ___ de la région."',
          options: ['celui', 'celle', 'ceux', 'celles'],
          correctIndex: 0,
          explanation: '"Le rôle du département est différent de CELUI de la région." "Celui" remplace "le rôle" (masculin singulier) pour éviter la répétition. "Celui de la région" = "le rôle de la région".',
        },
        {
          id: 'b1-inst-04-ex02',
          type: 'qcm',
          question: 'Combien y a-t-il de départements en France (métropole + DOM) ?',
          options: ['96', '100', '101', '110'],
          correctIndex: 2,
          explanation: '101 départements : 96 en France métropolitaine + 5 Départements d\'Outre-Mer (DOM : Guadeloupe, Martinique, Guyane, La Réunion, Mayotte). Le numéro du département (01-95 + DOM) figure sur les plaques d\'immatriculation (ancienne logique).',
        },
        {
          id: 'b1-inst-04-ex03',
          type: 'qcm',
          question: 'Pronom démonstratif : "Les communes qui gèrent les écoles primaires sont ___ de moins de 100 000 habitants."',
          options: ['celui', 'celle', 'ceux', 'celles'],
          correctIndex: 3,
          explanation: '"Les communes... sont CELLES de moins de 100 000 habitants." "Celles" remplace "les communes" (féminin pluriel). "Celles qui / celles de..." = les communes qui / les communes de...',
        },
        {
          id: 'b1-inst-04-ex04',
          type: 'qcm',
          question: 'Quel niveau de collectivité gère les lycées en France ?',
          options: ['La commune', 'Le département', 'La région', 'L\'État'],
          correctIndex: 2,
          explanation: 'LA RÉGION gère les lycées (construction, entretien, fonctionnement hors enseignants). LE DÉPARTEMENT gère les COLLÈGES. LA COMMUNE gère les ÉCOLES PRIMAIRES et MATERNELLES. Les ENSEIGNANTS sont toujours des fonctionnaires d\'État (pas des collectivités).',
        },
        {
          id: 'b1-inst-04-ex05',
          type: 'qcm',
          question: 'Pronom démonstratif : "___ qui représente l\'État dans le département est le préfet."',
          options: ['Celui', 'Celle', 'Ceux', 'Celles'],
          correctIndex: 0,
          explanation: '"CELUI qui représente l\'État dans le département est le préfet." "Celui qui..." = the one who... (masculin singulier, référence à une personne). "Celui qui + verbe" = structure très courante pour définir une fonction ou une personne.',
        },
        {
          id: 'b1-inst-04-ex06',
          type: 'qcm',
          question: 'Qu\'est-ce que la "décentralisation" ?',
          options: [
            'Le déplacement de la capitale française',
            'Le transfert de compétences de l\'État central vers les collectivités territoriales',
            'La création de nouvelles régions',
            'La suppression des départements',
          ],
          correctIndex: 1,
          explanation: 'Décentralisation = transfert de compétences (et de ressources financières) de l\'État central vers les collectivités locales (communes, départements, régions). Objectif : rapprocher les décisions des citoyens. Initiée par les LOIS DEFFERRE de 1982-1983 sous Mitterrand.',
        },
        {
          id: 'b1-inst-04-ex07',
          type: 'qcm',
          question: 'Démonstratif "-ci / -là" : "J\'ai habité dans deux départements : le 13 et le 69. ___ est la région Provence." (ce département-ci ou là ?)',
          options: [
            'Celui-ci (le plus récent / proche)',
            'Celui-là (le plus éloigné / mentionné en premier)',
            'On ne peut pas savoir',
            'Ceux-là',
          ],
          correctIndex: 1,
          explanation: 'CELUI-LÀ = le département mentionné EN PREMIER (le 13 = Bouches-du-Rhône = PACA). CELUI-CI = le plus récemment mentionné (le 69 = Rhône = Auvergne-Rhône-Alpes). "-Ci" = plus proche / plus récent. "-Là" = plus éloigné / mentionné avant.',
        },
        {
          id: 'b1-inst-04-ex08',
          type: 'qcm',
          question: 'L\'APA (Aide Personnalisée d\'Autonomie) est une aide gérée par :',
          options: ['La commune', 'Le département', 'La région', 'L\'État directement'],
          correctIndex: 1,
          explanation: 'L\'APA est gérée par le DÉPARTEMENT. C\'est une aide destinée aux personnes âgées dépendantes (+ 60 ans) pour financer les soins à domicile ou en établissement. Le RSA (Revenu de Solidarité Active) est aussi géré par le département.',
        },
        {
          id: 'b1-inst-04-ex09',
          type: 'qcm',
          question: 'Pronom démonstratif : "Les préfets ___ qui sont nommés par le Président ont un rôle de contrôle."',
          options: ['celui', 'celle', 'ceux', 'celles'],
          correctIndex: 2,
          explanation: '"Les préfets CEUX qui sont nommés..." → ici la forme correcte serait simplement "Les préfets, QUI sont nommés..." Le pronom démonstratif "ceux qui" s\'utilise SANS antécédent explicite répété : "CEUX qui sont nommés ont un rôle de contrôle" (sans "les préfets" avant).',
        },
        {
          id: 'b1-inst-04-ex10',
          type: 'qcm',
          question: 'Quel est le rôle du préfet ?',
          options: [
            'Diriger le conseil départemental',
            'Représenter l\'État dans le département et veiller au respect des lois',
            'Gérer les finances de la région',
            'Nommer les maires',
          ],
          correctIndex: 1,
          explanation: 'Le PRÉFET = représentant de l\'État dans le département (et le préfet de région dans la région). Il veille à l\'application des lois, peut déférer les actes illégaux des collectivités au tribunal administratif (contrôle de légalité). Il est nommé par le Président en Conseil des ministres.',
        },
        {
          id: 'b1-inst-04-ex11',
          type: 'qcm',
          question: 'Démonstratif : "J\'ai eu deux préfets différents. ___ était très strict, l\'autre plus souple." (le premier)',
          options: ['Celui-ci', 'Celui-là', 'Ceux-ci', 'Ceux-là'],
          correctIndex: 1,
          explanation: '"CELUI-LÀ était très strict, l\'autre plus souple." Pour le PREMIER mentionné = CELUI-LÀ. Pour le SECOND (ou plus récent) = CELUI-CI. Convention : -ci = near/recent, -là = far/earlier in text.',
        },
        {
          id: 'b1-inst-04-ex12',
          type: 'qcm',
          question: 'La France a le plus grand nombre de communes en Europe. Combien y en a-t-il ?',
          options: ['15 000', '26 000', '36 000', '50 000'],
          correctIndex: 2,
          explanation: 'La France a environ 36 000 communes — le plus grand nombre de tout pays en Europe. L\'Allemagne en a environ 11 000, l\'Italie 7 900. Cette multiplicité est un héritage de la Révolution française (une commune par paroisse). Des fusions sont encouragées mais restent optionnelles.',
        },
        {
          id: 'b1-inst-04-ex13',
          type: 'qcm',
          question: 'Pronom démonstratif : "Les régions ___ qui ont le plus de compétences sont les régions ultramarines."',
          options: [
            'On garde "les régions" — pas de démonstratif ici',
            'Celles',
            'Celle',
            'Ceux',
          ],
          correctIndex: 1,
          explanation: '"CELLES qui ont le plus de compétences sont les régions ultramarines." Ou plus directement : "CELLES ayant le plus de compétences." "Celles qui..." remplace "les régions qui..." pour éviter la répétition.',
        },
        {
          id: 'b1-inst-04-ex14',
          type: 'qcm',
          question: 'Le TER (Train Express Régional) est géré par :',
          options: ['L\'État directement via la SNCF', 'La région', 'Le département', 'La commune'],
          correctIndex: 1,
          explanation: 'Le TER est géré par LA RÉGION (autorité organisatrice des transports régionaux). La région commande les dessertes et le financement à la SNCF. Depuis la décentralisation (loi SRU 2000), les régions sont responsables de l\'organisation des TER.',
        },
        {
          id: 'b1-inst-04-ex15',
          type: 'qcm',
          question: 'Pronom démonstratif + complément : "Le travail des pompiers est différent de ___ de la police." (le travail)',
          options: ['celui', 'celle', 'ceux', 'celles'],
          correctIndex: 0,
          explanation: '"Le travail des pompiers est différent de CELUI de la police." "Celui" = le travail (masc. sing.). Évite de répéter "le travail de la police". Structure fréquente pour les comparaisons.',
        },
        {
          id: 'b1-inst-04-ex16',
          type: 'qcm',
          question: 'Les SDIS (Services Départementaux d\'Incendie et de Secours = pompiers) dépendent de :',
          options: ['L\'État', 'La commune', 'Le département', 'La région'],
          correctIndex: 2,
          explanation: 'Les SDIS (pompiers et secours d\'urgence) dépendent du DÉPARTEMENT. Le Conseil Départemental finance et supervise les SDIS. En France, les pompiers professionnels et volontaires sont organisés à l\'échelle départementale.',
        },
        {
          id: 'b1-inst-04-ex17',
          type: 'qcm',
          question: '"Déférer au tribunal administratif" signifie que le préfet :',
          options: [
            'Annule directement l\'acte de la collectivité',
            'Transmet l\'acte jugé illégal au tribunal pour qu\'il se prononce',
            'Envoie une amende à la collectivité',
            'Destitue le maire',
          ],
          correctIndex: 1,
          explanation: '"Déférer" = soumettre à la juridiction compétente. Le préfet NE peut PAS annuler directement un acte des collectivités (principe de libre administration). Il peut seulement DÉFÉRER (soumettre) l\'acte au tribunal administratif qui décidera de l\'annuler ou non.',
        },
        {
          id: 'b1-inst-04-ex18',
          type: 'qcm',
          question: 'Pronom démonstratif avec relatif : "___ qui dirige la région est le président du conseil régional."',
          options: ['Celui', 'Celle', 'Ceux', 'Celles'],
          correctIndex: 0,
          explanation: '"CELUI qui dirige la région est le président du conseil régional." "Celui qui + verbe" = the one who. Masculin singulier car on parle du "président" (fonction masculinisée historiquement, même si une femme peut l\'exercer).',
        },
        {
          id: 'b1-inst-04-ex19',
          type: 'qcm',
          question: 'Combien de régions y a-t-il en France (total) ?',
          options: ['13', '16', '18', '22'],
          correctIndex: 2,
          explanation: '18 régions : 13 en France métropolitaine (après la réforme de 2016 qui a fusionné certaines régions) + 5 régions ultramarines (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte). Avant 2016 : 22 régions métropolitaines.',
        },
        {
          id: 'b1-inst-04-ex20',
          type: 'qcm',
          question: 'Pronom démonstratif pluriel : "Ces deux lois sont importantes : ___ de 1982 et ___ de 2015." (les lois)',
          options: [
            'celle / celle',
            'celui / celui',
            'celle / celles',
            'celles / celles',
          ],
          correctIndex: 0,
          explanation: '"CELLE de 1982 et CELLE de 2015." "Celle" = féminin singulier (chaque loi = une loi = singulier). On parle de chaque loi INDIVIDUELLEMENT → singulier. "La loi de 1982" (fém. sing.) → "CELLE de 1982." Si on parlait des deux ensemble : "CELLES de 1982 et 2015."',
        },
      ],
    },
  ],
};
