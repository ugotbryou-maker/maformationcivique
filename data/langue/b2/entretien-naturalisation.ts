import type { LangModule } from '../types';

export const b2EntretienNaturalisation: LangModule = {
  id: 'b2-mod-05',
  slug: 'b2-entretien-naturalisation',
  level: 'B2',
  title: 'L\'entretien de naturalisation (approfondissement)',
  subtitle: 'Histoire, institutions, valeurs et simulation complète',
  description: 'Module capstone pour une préparation complète et approfondie à l\'entretien de naturalisation au niveau B2.',
  type: 'thematique',
  emoji: '🇫🇷',
  free: false,
  lessons: [
    {
      id: 'b2-nat-01',
      slug: 'b2-histoire-france-essentielle',
      moduleSlug: 'b2-entretien-naturalisation',
      level: 'B2',
      title: 'Histoire de France — repères essentiels',
      description: 'Les grandes dates et événements de l\'histoire française à connaître pour l\'entretien.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Les grands repères de l'histoire de France

Une connaissance même synthétique de l'histoire de France est attendue lors de l'entretien de naturalisation, non pour réciter des dates par cœur, mais pour comprendre les fondements de la société actuelle.

**Avant la République :**
- **496** : baptême de Clovis, roi des Francs — souvent présenté comme un jalon symbolique des origines chrétiennes du royaume
- **1789** : la Révolution française met fin à la monarchie absolue, proclame la Déclaration des Droits de l'Homme et du Citoyen
- **1792** : proclamation de la Première République

**Les Républiques successives :**
- **1804-1814/1815** : Premier Empire (Napoléon Bonaparte)
- **1848** : Deuxième République — abolition de l'esclavage (Victor Schœlcher)
- **1870-1940** : Troisième République — lois scolaires de Jules Ferry (1881-1882, école gratuite/laïque/obligatoire), loi de séparation des Églises et de l'État (1905)
- **1940-1944** : régime de Vichy (collaboration), Résistance et France libre (de Gaulle)
- **1946-1958** : Quatrième République
- **1958** : Cinquième République (actuelle), fondée par de Gaulle

**XXe siècle — droits sociaux et mémoire :**
- **1944** : droit de vote des femmes
- **1945** : création de la Sécurité sociale
- **1962** : fin de la guerre d'Algérie, indépendance
- **1981** : abolition de la peine de mort
- **2013** : Mariage pour tous

Cette histoire, faite de ruptures et de continuités, éclaire les valeurs et institutions actuelles de la France.`,

      linguisticPoint: `## Point linguistique : Le passé simple — reconnaître ce temps littéraire

### Pourquoi apprendre à RECONNAÎTRE le passé simple (sans devoir le conjuguer activement) ?
Le passé simple est utilisé dans les textes historiques, littéraires et certains discours officiels. Au niveau B2, il faut le RECONNAÎTRE à la lecture, même si on ne l'emploie pas à l'oral courant (remplacé par le passé composé).

### Formation pour les verbes réguliers
- **-ER** : il parl**a**, ils parl**èrent**
- **-IR/-RE** : il fin**it**, ils fin**irent** / il vend**it**, ils vend**irent**

### Verbes irréguliers fréquents en contexte historique
| Infinitif | Passé simple (il/elle) | Passé simple (ils/elles) |
|---|---|---|
| être | il **fut** | ils **furent** |
| avoir | il **eut** | ils **eurent** |
| faire | il **fit** | ils **firent** |
| dire | il **dit** | ils **dirent** |
| prendre | il **prit** | ils **prirent** |
| venir | il **vint** | ils **vinrent** |
| mourir | il **mourut** | ils **moururent** |

### Exemple historique
"La Révolution **éclata** en 1789. Le roi **fut** arrêté, puis **exécuté** en 1793."`,

      keyPoints: [
        '1789 = Révolution française / 1792 = 1ère République / 1958 = 5ème République (actuelle)',
        '1881-1882 = lois Jules Ferry (école gratuite/laïque/obligatoire) / 1905 = loi de séparation',
        '1944 = droit de vote des femmes / 1945 = création Sécurité sociale',
        'Passé simple = temps littéraire/historique à RECONNAÎTRE (pas forcément à employer à l\'oral)',
        'Verbes irréguliers fréquents : il fut/eut/fit/dit/prit/vint (formes à reconnaître à la lecture)',
      ],

      exercises: [
        {
          id: 'b2-nat-01-ex01',
          type: 'qcm',
          question: 'En quelle année a éclaté la Révolution française ?',
          options: ['1776', '1789', '1804', '1848'],
          correctIndex: 1,
          explanation: '1789 = année de la Révolution française, marquée par la prise de la Bastille (14 juillet) et la Déclaration des Droits de l\'Homme et du Citoyen (26 août). Elle met fin à la monarchie absolue en France.',
        },
        {
          id: 'b2-nat-01-ex02',
          type: 'qcm',
          question: 'Reconnaître le passé simple : "Le roi FUT arrêté en 1792." Quel est l\'infinitif de "fut" ?',
          options: ['faire', 'être', 'avoir', 'finir'],
          correctIndex: 1,
          explanation: '"FUT" = passé simple d\'ÊTRE (il/elle fut). Forme irrégulière à reconnaître : être → je fus, tu fus, il FUT, nous fûmes, vous fûtes, ils furent. Très fréquent dans les textes historiques.',
        },
        {
          id: 'b2-nat-01-ex03',
          type: 'qcm',
          question: 'En quelle année les femmes ont-elles obtenu le droit de vote en France ?',
          options: ['1918', '1936', '1944', '1965'],
          correctIndex: 2,
          explanation: '1944 = droit de vote des femmes en France (ordonnance du 21 avril 1944, première application en 1945). La France a été relativement tardive par rapport à d\'autres pays européens (Royaume-Uni : 1918, par exemple).',
        },
        {
          id: 'b2-nat-01-ex04',
          type: 'qcm',
          question: 'Reconnaître le passé simple : "Ils PRIRENT la Bastille." Quel est l\'infinitif de "prirent" ?',
          options: ['parler', 'prendre', 'prier', 'pendre'],
          correctIndex: 1,
          explanation: '"PRIRENT" = passé simple de PRENDRE (ils/elles prirent). Forme irrégulière : je pris, tu pris, il prit, nous prîmes, vous prîtes, ils PRIRENT. "Ils prirent la Bastille" = événement du 14 juillet 1789.',
        },
        {
          id: 'b2-nat-01-ex05',
          type: 'qcm',
          question: 'Quelles sont les 3 valeurs des lois Jules Ferry (1881-1882) concernant l\'école ?',
          options: [
            'Payante, religieuse, optionnelle',
            'Gratuite, laïque, obligatoire',
            'Privée, mixte, sélective',
            'Régionale, religieuse, payante',
          ],
          correctIndex: 1,
          explanation: 'Les lois Jules Ferry (1881-1882) établissent l\'école GRATUITE, LAÏQUE et OBLIGATOIRE (initialement de 6 à 13 ans). Ces principes fondamentaux de l\'école républicaine française sont toujours en vigueur aujourd\'hui (avec des extensions d\'âge).',
        },
        {
          id: 'b2-nat-01-ex06',
          type: 'qcm',
          question: 'Reconnaître le passé simple : "La République FIT de l\'éducation une priorité." Quel est l\'infinitif de "fit" ?',
          options: ['finir', 'faire', 'filer', 'fuir'],
          correctIndex: 1,
          explanation: '"FIT" = passé simple de FAIRE (il/elle fit). Forme irrégulière : je fis, tu fis, il FIT, nous fîmes, vous fîtes, ils firent. Verbe très fréquent dans les récits historiques.',
        },
        {
          id: 'b2-nat-01-ex07',
          type: 'qcm',
          question: 'En quelle année a été créée la Sécurité sociale en France ?',
          options: ['1936', '1945', '1958', '1981'],
          correctIndex: 1,
          explanation: '1945 = création de la Sécurité sociale, à la sortie de la Seconde Guerre mondiale, dans le cadre du programme du Conseil National de la Résistance. Cette institution fondamentale assure la protection sociale (santé, retraite, famille) de tous les résidents.',
        },
        {
          id: 'b2-nat-01-ex08',
          type: 'qcm',
          question: 'Reconnaître le passé simple : "De Gaulle VINT à Paris en 1944." Quel est l\'infinitif de "vint" ?',
          options: ['voir', 'venir', 'vivre', 'vouloir'],
          correctIndex: 1,
          explanation: '"VINT" = passé simple de VENIR (il/elle vint). Forme irrégulière : je vins, tu vins, il VINT, nous vînmes, vous vîntes, ils vinrent. "De Gaulle vint à Paris" évoque la Libération de Paris en août 1944.',
        },
        {
          id: 'b2-nat-01-ex09',
          type: 'qcm',
          question: 'En quelle année la Cinquième République (actuelle) a-t-elle été fondée ?',
          options: ['1944', '1946', '1958', '1981'],
          correctIndex: 2,
          explanation: '1958 = fondation de la Cinquième République par Charles de Gaulle, avec la nouvelle Constitution du 4 octobre 1958, encore en vigueur aujourd\'hui (avec des révisions). Elle met fin à l\'instabilité de la Quatrième République.',
        },
        {
          id: 'b2-nat-01-ex10',
          type: 'qcm',
          question: 'Reconnaître le passé simple : "L\'esclavage FUT aboli en 1848." Quel est l\'infinitif de "fut" employé ici ?',
          options: ['faire', 'être', 'fuir', 'finir'],
          correctIndex: 1,
          explanation: '"FUT aboli" = passif au passé simple : "fut" (passé simple d\'ÊTRE) + participe passé "aboli". L\'abolition définitive de l\'esclavage en France date de 1848, sous l\'impulsion notamment de Victor Schœlcher.',
        },
        {
          id: 'b2-nat-01-ex11',
          type: 'qcm',
          question: 'En quelle année la loi de séparation des Églises et de l\'État a-t-elle été adoptée ?',
          options: ['1881', '1905', '1946', '1958'],
          correctIndex: 1,
          explanation: '1905 = loi de séparation des Églises et de l\'État, fondement juridique de la LAÏCITÉ française. Elle garantit la liberté de conscience et l\'égalité de traitement de toutes les religions, tout en séparant l\'État du financement des cultes.',
        },
        {
          id: 'b2-nat-01-ex12',
          type: 'qcm',
          question: 'Reconnaître le passé simple : "Le peuple EUT enfin la liberté de voter." Quel est l\'infinitif de "eut" ?',
          options: ['être', 'avoir', 'venir', 'voir'],
          correctIndex: 1,
          explanation: '"EUT" = passé simple d\'AVOIR (il/elle eut). Forme irrégulière : j\'eus, tu eus, il EUT, nous eûmes, vous eûtes, ils eurent. À ne pas confondre visuellement avec "fut" (être) malgré une certaine ressemblance.',
        },
        {
          id: 'b2-nat-01-ex13',
          type: 'qcm',
          question: 'En quelle année la peine de mort a-t-elle été abolie en France ?',
          options: ['1958', '1974', '1981', '2000'],
          correctIndex: 2,
          explanation: '1981 = abolition de la peine de mort en France, sous l\'impulsion du ministre de la Justice Robert Badinter, après l\'élection de François Mitterrand. La France est l\'un des derniers pays d\'Europe occidentale à l\'avoir abolie.',
        },
        {
          id: 'b2-nat-01-ex14',
          type: 'qcm',
          question: 'Reconnaître le passé simple : "Les soldats MOURURENT au combat." Quel est l\'infinitif de "moururent" ?',
          options: ['mourir', 'mordre', 'murmurer', 'meurtrir'],
          correctIndex: 0,
          explanation: '"MOURURENT" = passé simple de MOURIR (ils/elles moururent). Forme irrégulière : je mourus, tu mourus, il mourut, nous mourûmes, vous mourûtes, ils MOURURENT. Fréquent dans les récits historiques évoquant les guerres.',
        },
        {
          id: 'b2-nat-01-ex15',
          type: 'qcm',
          question: 'Quand la guerre d\'Algérie s\'est-elle terminée, menant à l\'indépendance de ce pays ?',
          options: ['1954', '1958', '1962', '1968'],
          correctIndex: 2,
          explanation: '1962 = fin de la guerre d\'Algérie et indépendance, suite aux accords d\'Évian. Cette guerre (1954-1962) a profondément marqué la société française, avec des conséquences durables (mémoire, migrations, débats politiques) encore sensibles aujourd\'hui.',
        },
        {
          id: 'b2-nat-01-ex16',
          type: 'qcm',
          question: 'Reconnaître le passé simple : "Elle DIT que la République devait être préservée." Quel est l\'infinitif de "dit" ?',
          options: ['donner', 'dire', 'devoir', 'dater'],
          correctIndex: 1,
          explanation: '"DIT" = passé simple de DIRE (il/elle dit). Forme particulière : identique au présent à cette personne ("il dit" présent ET passé simple), distinction faite par le contexte. Au pluriel : ils DIRENT (passé simple) vs ils disent (présent).',
        },
        {
          id: 'b2-nat-01-ex17',
          type: 'qcm',
          question: 'Que symbolise le 14 juillet, fête nationale française ?',
          options: [
            'La naissance de Napoléon',
            'La prise de la Bastille (1789), symbole de la fin de la monarchie absolue',
            'La signature du traité de Versailles',
            'L\'indépendance de l\'Algérie',
          ],
          correctIndex: 1,
          explanation: 'Le 14 juillet commémore la PRISE DE LA BASTILLE (1789), prison royale symbole de l\'arbitraire monarchique. C\'est devenu la fête nationale française, célébrant les valeurs républicaines nées de la Révolution.',
        },
        {
          id: 'b2-nat-01-ex18',
          type: 'qcm',
          question: 'Pourquoi mentionne-t-on le "régime de Vichy" (1940-1944) dans l\'histoire de France ?',
          options: [
            'Pour célébrer une période glorieuse',
            'Pour rappeler une période sombre de collaboration avec l\'Allemagne nazie, contrastée avec la Résistance',
            'Pour évoquer une période de paix totale',
            'Sans rapport avec l\'histoire de France',
          ],
          correctIndex: 1,
          explanation: 'Le régime de VICHY (1940-1944) désigne la période de COLLABORATION du gouvernement français avec l\'Allemagne nazie pendant l\'Occupation. Il est essentiel de connaître cette période sombre, mise en perspective avec la RÉSISTANCE et la France libre menée par de Gaulle, pour comprendre les valeurs républicaines actuelles de vigilance démocratique.',
        },
        {
          id: 'b2-nat-01-ex19',
          type: 'qcm',
          question: 'Reconnaître le passé simple : "La loi de 1905 ÉTABLIT la laïcité." Quel est l\'infinitif de "établit" ?',
          options: ['établir', 'établer', 'étalir', 'établisser'],
          correctIndex: 0,
          explanation: '"ÉTABLIT" = passé simple d\'ÉTABLIR (verbe en -ir régulier). Au passé simple : j\'établis, tu établis, il ÉTABLIT, nous établîmes, vous établîtes, ils établirent. Identique à certaines formes du présent — le contexte clarifie le temps.',
        },
        {
          id: 'b2-nat-01-ex20',
          type: 'qcm',
          question: 'Pourquoi est-il utile de connaître cette chronologie historique pour l\'entretien de naturalisation, plutôt que de simplement réciter des dates ?',
          options: [
            'Parce que les dates n\'ont aucune importance réelle',
            'Parce que cette histoire éclaire les valeurs, institutions et débats de société actuels, et montre une compréhension profonde du contexte français',
            'Parce que c\'est seulement un exercice de mémorisation sans lien avec le présent',
            'Parce que l\'agent de préfecture ne posera jamais de questions historiques',
          ],
          correctIndex: 1,
          explanation: 'Connaître cette CHRONOLOGIE permet de comprendre les FONDEMENTS des valeurs et institutions actuelles (laïcité issue de 1905, école issue de Ferry, Sécurité sociale de 1945...). L\'entretien valorise une compréhension PROFONDE et CONTEXTUALISÉE de la société française, pas une simple récitation mécanique de dates isolées.',
        },
      ],
    },

    {
      id: 'b2-nat-02',
      slug: 'b2-fonctionnement-etat-approfondi',
      moduleSlug: 'b2-entretien-naturalisation',
      level: 'B2',
      title: 'Le fonctionnement de l\'État — approfondissement',
      description: 'Une compréhension fine des équilibres institutionnels et de leur justification démocratique.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Pourquoi la séparation des pouvoirs est-elle essentielle ?

Au-delà de la simple description des institutions (Président, Parlement, justice), l'entretien de naturalisation au niveau B2 peut interroger la COMPRÉHENSION des principes qui les sous-tendent.

**Pourquoi séparer les pouvoirs ?**
Le principe, théorisé par Montesquieu, vise à éviter qu'un seul organe concentre tous les pouvoirs, ce qui ouvrirait la voie à l'arbitraire. En confiant l'exécutif, le législatif et le judiciaire à des organes DISTINCTS et capables de se CONTRÔLER mutuellement, la démocratie se protège contre la tyrannie.

**Le contrôle de constitutionnalité**
Le Conseil constitutionnel veille à ce que les lois votées par le Parlement respectent la Constitution. Ce mécanisme illustre un principe essentiel : même la majorité parlementaire, légitimement élue, ne peut pas tout faire — certains droits fondamentaux sont protégés contre les évolutions de l'opinion majoritaire.

**L'indépendance de la justice**
Les magistrats du siège (qui jugent) bénéficient d'une INAMOVIBILITÉ qui les protège des pressions politiques. Cette indépendance, bien qu'imparfaite en pratique, est un pilier de l'État de droit.

**Pourquoi cela importe pour un nouveau citoyen ?**
Comprendre ces mécanismes permet de saisir pourquoi, en France, ni le Président ni une majorité parlementaire ne peuvent gouverner sans limites — un principe fondamental qui distingue une démocratie d'un régime autoritaire.`,

      linguisticPoint: `## Point linguistique : Les structures causales et finales avancées

### Exprimer la finalité d'un mécanisme institutionnel
- "Le principe vise à éviter que..." (+ subjonctif)
- "Ce mécanisme a pour objectif de..."
- "Dans le but de garantir..., le législateur a prévu..."

### Exprimer une justification profonde
- "Ce qui justifie cette séparation, c'est le risque d'arbitraire."
- "La raison d'être de cette institution réside dans..."
- "Ce dispositif trouve sa justification dans le souci de..."

### Nuancer une affirmation sur le fonctionnement réel
- "Cette indépendance, bien qu'imparfaite en pratique, demeure un pilier essentiel."
- "Si ce principe est respecté en théorie, sa mise en œuvre concrète peut faire l'objet de débats."

### Vocabulaire institutionnel avancé
l'arbitraire, l'État de droit, l'inamovibilité, la légitimité, le contre-pouvoir`,

      keyPoints: [
        'Séparation des pouvoirs (Montesquieu) = éviter la concentration des pouvoirs et l\'arbitraire',
        'Conseil constitutionnel = même la majorité élue ne peut pas tout faire (droits protégés)',
        'Inamovibilité des magistrats du siège = protection contre les pressions politiques',
        '"Vise à éviter que" + subjonctif = exprimer la finalité d\'un mécanisme',
        'Vocabulaire : l\'arbitraire / l\'État de droit / la légitimité / le contre-pouvoir',
      ],

      exercises: [
        {
          id: 'b2-nat-02-ex01',
          type: 'qcm',
          question: 'Pourquoi Montesquieu a-t-il théorisé la séparation des pouvoirs ?',
          options: [
            'Pour donner plus de pouvoir au roi',
            'Pour éviter qu\'un seul organe concentre tous les pouvoirs, ce qui ouvrirait la voie à l\'arbitraire',
            'Pour supprimer toute forme de gouvernement',
            'Pour favoriser la monarchie absolue',
          ],
          correctIndex: 1,
          explanation: 'Montesquieu a théorisé la séparation des pouvoirs pour ÉVITER qu\'un seul organe (personne ou institution) concentre TOUS les pouvoirs (exécutif, législatif, judiciaire), ce qui mènerait à l\'ARBITRAIRE et à la TYRANNIE. C\'est un principe fondateur des démocraties modernes.',
        },
        {
          id: 'b2-nat-02-ex02',
          type: 'qcm',
          question: 'Structure finale : "Le contrôle de constitutionnalité vise à éviter que la majorité ___ les droits fondamentaux." (violer)',
          options: ['viole', 'violera', 'violait', 'a violé'],
          correctIndex: 0,
          explanation: '"Vise à éviter que la majorité VIOLE les droits fondamentaux." "Viser à éviter que" + SUBJONCTIF (toujours). "Viole" = subjonctif présent (régulier) de "violer".',
        },
        {
          id: 'b2-nat-02-ex03',
          type: 'qcm',
          question: 'Que signifie "l\'inamovibilité" des magistrats du siège ?',
          options: [
            'Ils ne peuvent jamais changer de poste',
            'Ils sont protégés contre une révocation arbitraire, garantissant leur indépendance face aux pressions politiques',
            'Ils ne peuvent pas être payés',
            'Ils sont nommés à vie sans aucune procédure',
          ],
          correctIndex: 1,
          explanation: '"Inamovibilité" = garantie qu\'un magistrat (du siège, c\'est-à-dire qui juge) ne peut pas être DÉPLACÉ ou RÉVOQUÉ de façon arbitraire par le pouvoir politique. Cette protection est essentielle pour préserver son INDÉPENDANCE dans ses décisions judiciaires.',
        },
        {
          id: 'b2-nat-02-ex04',
          type: 'qcm',
          question: 'Que signifie l\'expression "l\'État de droit" ?',
          options: [
            'Un État qui n\'a aucune loi',
            'Un système où le pouvoir politique lui-même est soumis au respect du droit et des règles constitutionnelles',
            'Un État dirigé uniquement par des juges',
            'Un État sans gouvernement',
          ],
          correctIndex: 1,
          explanation: '"L\'État de droit" = principe selon lequel le POUVOIR POLITIQUE LUI-MÊME (gouvernement, Parlement) est soumis au respect du DROIT et de la CONSTITUTION, et ne peut agir arbitrairement. C\'est l\'opposé d\'un régime où le pouvoir échappe à tout contrôle juridique.',
        },
        {
          id: 'b2-nat-02-ex05',
          type: 'qcm',
          question: 'Structure de justification : "Ce qui justifie cette séparation, ___ le risque d\'arbitraire."',
          options: ['c\'est', 'ce sont', 'il est', 'cela fait'],
          correctIndex: 0,
          explanation: '"Ce qui justifie cette séparation, C\'EST le risque d\'arbitraire." Mise en relief par "ce qui... c\'est..." (sujet singulier "le risque" → "c\'est", pas "ce sont"). Structure pour identifier clairement la justification profonde d\'un principe.',
        },
        {
          id: 'b2-nat-02-ex06',
          type: 'qcm',
          question: 'Pourquoi même une majorité parlementaire légitimement élue ne peut-elle pas voter n\'importe quelle loi ?',
          options: [
            'Parce que les élections n\'ont aucune valeur',
            'Parce que certains droits fondamentaux sont protégés par la Constitution, vérifiée par le Conseil constitutionnel, indépendamment des évolutions de l\'opinion majoritaire',
            'Parce que le Président peut toujours s\'opposer seul',
            'Parce que les lois ne sont jamais appliquées',
          ],
          correctIndex: 1,
          explanation: 'Le CONSEIL CONSTITUTIONNEL vérifie que les lois respectent la CONSTITUTION, qui protège certains droits FONDAMENTAUX. Même une majorité parlementaire LÉGITIME ne peut PAS voter une loi qui violerait ces droits — c\'est un principe essentiel de protection contre la "tyrannie de la majorité".',
        },
        {
          id: 'b2-nat-02-ex07',
          type: 'qcm',
          question: 'Nuancer une affirmation : "Cette indépendance, ___ imparfaite en pratique, demeure un pilier essentiel."',
          options: ['bien que', 'parce que', 'pour que', 'afin que'],
          correctIndex: 0,
          explanation: '"Cette indépendance, BIEN QU\'imparfaite en pratique, demeure un pilier essentiel." "Bien que" + adjectif (sans verbe explicite ici, ellipse de "elle soit") = concession. Reconnaît une limite réelle sans pour autant rejeter l\'importance du principe.',
        },
        {
          id: 'b2-nat-02-ex08',
          type: 'qcm',
          question: 'Que signifie un "contre-pouvoir" dans le système démocratique ?',
          options: [
            'Un pouvoir qui n\'a aucune influence',
            'Une institution ou un mécanisme capable de limiter ou contrôler l\'action d\'un autre pouvoir',
            'Un pouvoir illégal',
            'Un syndicat uniquement',
          ],
          correctIndex: 1,
          explanation: '"Contre-pouvoir" = institution ou mécanisme capable de LIMITER, CONTRÔLER ou ÉQUILIBRER l\'action d\'un autre pouvoir, évitant ainsi sa concentration excessive. Exemples : le Conseil constitutionnel face au Parlement, la presse libre face au gouvernement, les syndicats face au patronat.',
        },
        {
          id: 'b2-nat-02-ex09',
          type: 'qcm',
          question: 'Structure de finalité : "___ garantir l\'indépendance de la justice, le législateur a instauré l\'inamovibilité."',
          options: ['Pour', 'Dans le but de', 'Parce que', 'Bien que'],
          correctIndex: 1,
          explanation: '"DANS LE BUT DE garantir l\'indépendance..." "Dans le but de + infinitif" = structure de FINALITÉ soutenue (équivalent de "pour", mais plus formelle). Exprime l\'objectif visé par cette mesure institutionnelle.',
        },
        {
          id: 'b2-nat-02-ex10',
          type: 'qcm',
          question: 'Que signifie "la légitimité" d\'un pouvoir politique ?',
          options: [
            'Sa popularité dans les sondages uniquement',
            'Le fondement reconnu et accepté de son autorité (élection démocratique, respect des règles constitutionnelles)',
            'Sa capacité à utiliser la force',
            'Son ancienneté historique uniquement',
          ],
          correctIndex: 1,
          explanation: '"Légitimité" = fondement RECONNU et ACCEPTÉ de l\'autorité d\'un pouvoir, généralement issu d\'une ÉLECTION démocratique et du respect des règles CONSTITUTIONNELLES. Un pouvoir peut être légal sans être perçu comme légitime, et inversement dans certains cas exceptionnels.',
        },
        {
          id: 'b2-nat-02-ex11',
          type: 'qcm',
          question: 'Structure de justification profonde : "La raison d\'être de cette institution ___ dans la protection des libertés."',
          options: ['réside', 'résident', 'résidait', 'résiderait'],
          correctIndex: 0,
          explanation: '"La raison d\'être de cette institution RÉSIDE dans..." "Résider dans" = se trouver fondamentalement dans, être la base de. "La raison d\'être" (sujet singulier) → "réside" (3ème pers. sing.). Structure soutenue pour exprimer un fondement profond.',
        },
        {
          id: 'b2-nat-02-ex12',
          type: 'qcm',
          question: 'Pourquoi la séparation des pouvoirs est-elle considérée comme un principe FONDAMENTAL plutôt qu\'un simple détail technique ?',
          options: [
            'Parce qu\'elle est mentionnée dans tous les livres d\'histoire',
            'Parce qu\'elle constitue une protection structurelle contre les abus de pouvoir, indépendamment de la bonne ou mauvaise volonté des personnes au pouvoir',
            'Parce qu\'elle facilite uniquement l\'organisation administrative',
            'Parce qu\'elle n\'a aucune conséquence réelle',
          ],
          correctIndex: 1,
          explanation: 'La séparation des pouvoirs est FONDAMENTALE car elle offre une protection STRUCTURELLE contre les abus, qui ne dépend PAS de la bonne volonté des individus au pouvoir. Même des personnes bien intentionnées pourraient abuser d\'un pouvoir concentré — le système institutionnel prévient ce risque de façon systémique.',
        },
        {
          id: 'b2-nat-02-ex13',
          type: 'qcm',
          question: 'Nuance avec "si" concessif : "___ ce principe est respecté en théorie, sa mise en œuvre peut faire débat."',
          options: ['Si', 'Sauf si', 'À moins que', 'Pour que'],
          correctIndex: 0,
          explanation: '"SI ce principe est respecté en théorie, sa mise en œuvre peut faire débat." "Si" ici a une valeur CONCESSIVE (= bien que), opposant la théorie à la pratique. Cette nuance est typique de l\'analyse critique au niveau B2/C1.',
        },
        {
          id: 'b2-nat-02-ex14',
          type: 'qcm',
          question: 'Que signifie "l\'arbitraire" dans le contexte du pouvoir politique ?',
          options: [
            'Une décision juste et fondée sur la loi',
            'Une décision prise sans justification objective, dépendant uniquement de la volonté du décideur, sans contrôle ni limite',
            'Un type de tribunal spécifique',
            'Une élection démocratique',
          ],
          correctIndex: 1,
          explanation: '"L\'arbitraire" = caractère d\'une décision prise SANS justification OBJECTIVE, fondée uniquement sur la volonté DISCRÉTIONNAIRE du décideur, sans contrôle ni limite. C\'est précisément ce que la séparation des pouvoirs vise à PRÉVENIR dans un système démocratique.',
        },
        {
          id: 'b2-nat-02-ex15',
          type: 'qcm',
          question: 'Pourquoi le Conseil constitutionnel n\'est-il pas considéré comme antidémocratique, alors qu\'il peut bloquer des lois votées par une majorité élue ?',
          options: [
            'Parce qu\'il n\'a en réalité aucun pouvoir réel',
            'Parce qu\'il ne s\'oppose pas à la démocratie mais protège les droits fondamentaux contre les dérives possibles d\'une majorité, ce qui constitue une dimension essentielle de la démocratie constitutionnelle',
            'Parce qu\'il est lui-même élu directement par le peuple',
            'Parce qu\'il agit toujours selon les souhaits du gouvernement',
          ],
          correctIndex: 1,
          explanation: 'Le Conseil constitutionnel ne s\'oppose pas à la démocratie — il protège les DROITS FONDAMENTAUX contre des dérives POSSIBLES d\'une majorité (même légitimement élue). Cette protection des MINORITÉS et des libertés individuelles est elle-même une dimension ESSENTIELLE de la démocratie CONSTITUTIONNELLE, distincte d\'une simple "loi de la majorité" sans limites.',
        },
        {
          id: 'b2-nat-02-ex16',
          type: 'qcm',
          question: 'Structure causale avancée : "Cette protection trouve sa justification ___ le souci de préserver l\'indépendance judiciaire."',
          options: ['dans', 'pour', 'par', 'vers'],
          correctIndex: 0,
          explanation: '"Cette protection trouve sa justification DANS le souci de préserver..." "Trouver sa justification dans" = être justifié par, avoir son fondement dans. Construction soutenue pour exprimer la cause profonde d\'un dispositif institutionnel.',
        },
        {
          id: 'b2-nat-02-ex17',
          type: 'qcm',
          question: 'Quelle différence existe entre le "magistrat du siège" et le "magistrat du parquet" ?',
          options: [
            'Aucune différence',
            'Le magistrat du siège juge (et bénéficie de l\'inamovibilité), tandis que le magistrat du parquet représente l\'accusation et dépend hiérarchiquement du ministère de la Justice',
            'Le magistrat du parquet juge, le magistrat du siège accuse',
            'Les deux termes désignent exactement la même fonction',
          ],
          correctIndex: 1,
          explanation: 'Le MAGISTRAT DU SIÈGE (juge) tranche les litiges et bénéficie de l\'INAMOVIBILITÉ pour garantir son indépendance. Le MAGISTRAT DU PARQUET (procureur) représente l\'accusation/l\'intérêt général et dépend HIÉRARCHIQUEMENT du ministère de la Justice — une distinction importante du système judiciaire français.',
        },
        {
          id: 'b2-nat-02-ex18',
          type: 'qcm',
          question: 'Pourquoi cette compréhension institutionnelle approfondie est-elle particulièrement valorisée au niveau B2 pour l\'entretien de naturalisation ?',
          options: [
            'Parce qu\'il faut mémoriser des articles de loi par cœur',
            'Parce qu\'elle témoigne d\'une compréhension fine des principes démocratiques sous-jacents, au-delà de la simple connaissance factuelle des institutions',
            'Parce que c\'est obligatoire de critiquer le gouvernement',
            'Parce que les questions institutionnelles ne sont jamais posées en entretien',
          ],
          correctIndex: 1,
          explanation: 'Au niveau B2, la VALEUR ajoutée n\'est pas la simple connaissance FACTUELLE des institutions (déjà attendue au niveau A2/B1), mais la compréhension des PRINCIPES démocratiques sous-jacents (pourquoi cette séparation, pourquoi cette protection) — un niveau d\'analyse plus PROFOND, révélateur d\'une véritable maîtrise de la langue et de la culture civique françaises.',
        },
        {
          id: 'b2-nat-02-ex19',
          type: 'qcm',
          question: 'Comment exprimer une finalité institutionnelle de façon soutenue : "L\'objectif ___ protéger les citoyens contre l\'arbitraire de l\'État."',
          options: ['est de', 'est que', 'consiste que', 'réside que'],
          correctIndex: 0,
          explanation: '"L\'objectif EST DE protéger les citoyens..." "L\'objectif est de + infinitif" = structure standard pour exprimer un but/une finalité. Plus soutenu que "le but, c\'est de..." mais grammaticalement équivalent.',
        },
        {
          id: 'b2-nat-02-ex20',
          type: 'qcm',
          question: 'En quoi consiste l\'équilibre recherché entre légitimité démocratique (élections) et protection des droits fondamentaux (Conseil constitutionnel) ?',
          options: [
            'Il n\'y a aucun équilibre, l\'un exclut nécessairement l\'autre',
            'C\'est un équilibre dynamique où la majorité élue gouverne, mais dans le respect de limites constitutionnelles qui protègent les droits de tous, y compris des minorités',
            'Le Conseil constitutionnel remplace systématiquement les élections',
            'Les élections n\'ont aucune importance dans ce système',
          ],
          correctIndex: 1,
          explanation: 'L\'équilibre fondamental des démocraties constitutionnelles modernes repose sur le fait que la majorité ÉLUE gouverne et légifère, mais dans le RESPECT de LIMITES constitutionnelles qui protègent les droits FONDAMENTAUX de TOUS, y compris des minorités. Ni la légitimité électorale ni la protection des droits ne s\'excluent — elles se COMPLÈTENT dans un système démocratique mature.',
        },
      ],
    },

    {
      id: 'b2-nat-03',
      slug: 'b2-laicite-cas-pratiques',
      moduleSlug: 'b2-entretien-naturalisation',
      level: 'B2',
      title: 'La laïcité — principes et cas pratiques',
      description: 'Approfondir la compréhension de la laïcité à travers des situations concrètes et leurs justifications.',
      duration: 12,
      free: false,
      dialogue: `## Texte : La laïcité à l'épreuve de situations concrètes

La laïcité, principe constitutionnel, se traduit par des règles concrètes dont la logique mérite d'être bien comprise.

**Cas 1 — L'école publique**
Les enseignants et agents publics ne peuvent porter aucun signe religieux ostensible dans l'exercice de leurs fonctions. Cette règle s'applique aussi aux élèves du primaire et du secondaire (loi de 2004), mais PAS aux étudiants de l'université, qui jouissent d'une liberté plus étendue en tant qu'adultes.

**Cas 2 — Le lieu de travail privé**
Dans une entreprise privée, la liberté religieuse des salariés est en principe garantie, sauf restrictions justifiées par la nature du poste (sécurité, contact avec le public selon le règlement intérieur) ou par le principe de neutralité s'il est explicitement prévu.

**Cas 3 — L'espace public**
Toute personne peut porter des signes religieux dans la rue (la laïcité ne s'applique pas aux citoyens dans l'espace public général, mais à l'État et ses agents). La loi de 2010 sur la dissimulation du visage dans l'espace public répond à une logique différente (sécurité et vie en société), distincte de la laïcité au sens strict.

**Pourquoi cette distinction est-elle essentielle ?**
La laïcité ne consiste PAS à interdire la religion dans la société — elle organise la NEUTRALITÉ de l'État et de ses services publics, tout en garantissant aux individus leur liberté de conscience et de culte dans la sphère privée et, largement, dans l'espace public.`,

      linguisticPoint: `## Point linguistique : Distinguer et nuancer avec précision

### Distinguer deux situations similaires mais juridiquement différentes
- "Contrairement à X, Y..." / "À la différence de X, Y..."
- "Si X s'applique à..., en revanche Y concerne..."
- "Il convient de ne pas confondre X et Y, qui répondent à des logiques distinctes."

### Nuancer une règle par ses exceptions
- "Cette règle s'applique, SAUF dans le cas de..."
- "À l'exception de..., le principe général demeure..."
- "Cette liberté est garantie, SOUS RÉSERVE de restrictions justifiées par..."

### Justifier une distinction par sa logique sous-jacente
- "Cette distinction s'explique par le fait que..."
- "La logique sous-jacente est la suivante : ..."
- "Ce qui justifie ce traitement différencié, c'est..."

### Vocabulaire juridique précis
ostensible (visible, affiché), la neutralité, la dissimulation, jouir d'un droit (= bénéficier de)`,

      keyPoints: [
        'Laïcité = neutralité de l\'État et de ses agents, PAS interdiction de la religion dans la société',
        'École primaire/secondaire (loi 2004) : signes religieux ostensibles interdits / université : liberté plus large',
        'Espace public général : liberté de porter des signes religieux (sauf dissimulation du visage, loi 2010, logique différente)',
        'Entreprise privée : liberté religieuse en principe garantie, sauf restrictions justifiées',
        '"Jouir d\'un droit" = bénéficier de ce droit / "ostensible" = visible, affiché',
      ],

      exercises: [
        {
          id: 'b2-nat-03-ex01',
          type: 'qcm',
          question: 'La loi de 2004 sur les signes religieux ostensibles s\'applique à :',
          options: [
            'Tous les citoyens français dans l\'espace public',
            'Les élèves du primaire et du secondaire dans les établissements publics',
            'Uniquement aux enseignants',
            'Aux étudiants universitaires',
          ],
          correctIndex: 1,
          explanation: 'La loi de 2004 interdit le port de SIGNES RELIGIEUX OSTENSIBLES aux ÉLÈVES du primaire et du secondaire dans les écoles, collèges et lycées PUBLICS. Elle ne s\'applique PAS aux étudiants universitaires (adultes, liberté plus étendue) ni aux citoyens dans l\'espace public général.',
        },
        {
          id: 'b2-nat-03-ex02',
          type: 'qcm',
          question: 'Distinction : "___ les élèves du secondaire, les étudiants universitaires jouissent d\'une liberté plus étendue."',
          options: ['Contrairement à', 'Grâce à', 'Pour', 'Malgré'],
          correctIndex: 0,
          explanation: '"CONTRAIREMENT AUX élèves du secondaire, les étudiants universitaires jouissent d\'une liberté plus étendue." "Contrairement à" introduit une DISTINCTION/OPPOSITION entre deux situations juridiquement différentes. Note : élision "à" + "les" = "aux".',
        },
        {
          id: 'b2-nat-03-ex03',
          type: 'qcm',
          question: 'Que signifie "jouir d\'une liberté plus étendue" ?',
          options: [
            'Avoir une liberté réduite',
            'Bénéficier d\'une liberté plus large/importante',
            'Perdre toute liberté',
            'Avoir une liberté identique',
          ],
          correctIndex: 1,
          explanation: '"Jouir de" (registre soutenu) = bénéficier de, profiter de. "Jouir d\'une liberté étendue" = bénéficier d\'une liberté large/importante. Ce verbe n\'a ici aucun sens lié au plaisir physique — c\'est un faux-ami fréquent pour les apprenants.',
        },
        {
          id: 'b2-nat-03-ex04',
          type: 'qcm',
          question: 'Dans l\'espace public général (la rue), peut-on porter des signes religieux visibles ?',
          options: [
            'Non, c\'est totalement interdit pour tous les citoyens',
            'Oui, la laïcité ne s\'applique pas aux citoyens dans l\'espace public, mais à l\'État et ses agents',
            'Oui, mais seulement le dimanche',
            'Cela dépend uniquement de la région',
          ],
          correctIndex: 1,
          explanation: 'Dans l\'ESPACE PUBLIC général, TOUTE PERSONNE peut porter des signes religieux visibles. La LAÏCITÉ s\'applique à l\'ÉTAT et à ses AGENTS dans l\'exercice de leurs fonctions, PAS aux citoyens ordinaires. C\'est une distinction fondamentale souvent mal comprise.',
        },
        {
          id: 'b2-nat-03-ex05',
          type: 'qcm',
          question: 'Nuance par exception : "Cette liberté est garantie, ___ de restrictions justifiées par la sécurité."',
          options: ['sous réserve', 'à condition', 'grâce', 'parce que'],
          correctIndex: 0,
          explanation: '"Cette liberté est garantie, SOUS RÉSERVE de restrictions justifiées..." "Sous réserve de" = à l\'exception de, avec la possibilité de certaines limitations. Formule juridique soutenue pour nuancer un principe général sans le contredire totalement.',
        },
        {
          id: 'b2-nat-03-ex06',
          type: 'qcm',
          question: 'Que signifie "ostensible" appliqué à un signe religieux ?',
          options: [
            'Discret, peu visible',
            'Visible, affiché de façon manifeste',
            'Interdit par la loi religieuse',
            'Petit en taille',
          ],
          correctIndex: 1,
          explanation: '"Ostensible" = VISIBLE de façon MANIFESTE, qu\'on ne peut ignorer (du latin "ostendere" = montrer). Un signe religieux ostensible se distingue d\'un signe DISCRET. Cette distinction est juridiquement importante pour l\'application de la loi de 2004.',
        },
        {
          id: 'b2-nat-03-ex07',
          type: 'qcm',
          question: 'Quelle est la logique de la loi de 2010 sur la dissimulation du visage dans l\'espace public ?',
          options: [
            'Elle relève de la laïcité au sens strict, comme la loi de 2004',
            'Elle répond à une logique différente (sécurité et vie en société), distincte de la laïcité au sens strict',
            'Elle interdit toute pratique religieuse',
            'Elle s\'applique uniquement aux fonctionnaires',
          ],
          correctIndex: 1,
          explanation: 'La loi de 2010 (interdiction de la dissimulation du visage dans l\'espace public) répond à une logique DIFFÉRENTE de la laïcité : SÉCURITÉ (identification possible) et VIE EN SOCIÉTÉ (visibilité du visage dans les interactions sociales), pas à l\'organisation de la neutralité de l\'État. Cette distinction est souvent source de confusion.',
        },
        {
          id: 'b2-nat-03-ex08',
          type: 'qcm',
          question: 'Justification de distinction : "Cette différence de traitement s\'explique ___ le fait que les agents publics représentent l\'État."',
          options: ['par', 'pour', 'malgré', 'sans'],
          correctIndex: 0,
          explanation: '"Cette différence s\'explique PAR le fait que..." "S\'expliquer par" = avoir comme cause/justification. Les agents publics, en représentant l\'ÉTAT, sont soumis à des obligations de neutralité différentes de celles des citoyens ordinaires.',
        },
        {
          id: 'b2-nat-03-ex09',
          type: 'qcm',
          question: 'Dans une entreprise privée, la liberté religieuse des salariés est-elle absolue ?',
          options: [
            'Oui, totalement absolue sans aucune exception possible',
            'Non, elle est en principe garantie mais peut faire l\'objet de restrictions justifiées (sécurité, contact public, règlement intérieur)',
            'Non, elle est totalement interdite en entreprise privée',
            'Cela dépend uniquement de la taille de l\'entreprise',
          ],
          correctIndex: 1,
          explanation: 'En ENTREPRISE PRIVÉE, la liberté religieuse est en PRINCIPE garantie, mais peut faire l\'objet de RESTRICTIONS JUSTIFIÉES par la nature du poste (sécurité, contact avec le public) ou un principe de neutralité explicitement prévu par le règlement intérieur. Ce n\'est ni une liberté absolue ni une interdiction totale.',
        },
        {
          id: 'b2-nat-03-ex10',
          type: 'qcm',
          question: 'Que signifie "Il convient de ne pas confondre X et Y" ?',
          options: [
            'X et Y sont strictement identiques',
            'Il est important de distinguer X et Y, qui sont en réalité différents',
            'X et Y n\'existent pas',
            'X est plus important que Y',
          ],
          correctIndex: 1,
          explanation: '"Il convient de ne pas confondre X et Y" = il est important/nécessaire de bien DISTINGUER ces deux notions, qui peuvent sembler proches mais ont en réalité des logiques différentes. Formule typique de la clarification conceptuelle dans un contexte juridique ou analytique.',
        },
        {
          id: 'b2-nat-03-ex11',
          type: 'qcm',
          question: 'Pourquoi est-il important de comprendre que "la laïcité ne consiste pas à interdire la religion dans la société" ?',
          options: [
            'Parce que c\'est un détail sans importance',
            'Parce que c\'est une idée fausse répandue, alors que la laïcité organise la NEUTRALITÉ de l\'État, tout en garantissant la liberté de culte des individus',
            'Parce que la religion est en réalité totalement interdite en France',
            'Parce que cela n\'a aucun rapport avec l\'entretien de naturalisation',
          ],
          correctIndex: 1,
          explanation: 'C\'est une CLARIFICATION essentielle car une IDÉE FAUSSE répandue (parfois à l\'étranger) assimile la laïcité à une HOSTILITÉ envers la religion. En réalité, elle organise la NEUTRALITÉ des institutions étatiques tout en GARANTISSANT la liberté de conscience et de culte des individus dans la sphère privée et publique générale.',
        },
        {
          id: 'b2-nat-03-ex12',
          type: 'qcm',
          question: 'Distinction nuancée : "Si la liberté religieuse est garantie aux salariés, ___ certaines restrictions peuvent s\'appliquer selon le poste."',
          options: ['en revanche', 'donc', 'ainsi', 'grâce à quoi'],
          correctIndex: 0,
          explanation: '"Si la liberté est garantie..., EN REVANCHE certaines restrictions peuvent s\'appliquer..." "En revanche" = mais, par contre. Introduit une NUANCE ou une LIMITE à l\'affirmation précédente, sans la contredire totalement. Registre soutenu adapté à l\'analyse juridique.',
        },
        {
          id: 'b2-nat-03-ex13',
          type: 'qcm',
          question: 'Quelle est la "logique sous-jacente" qui justifie l\'application stricte de la laïcité dans les écoles primaires et secondaires publiques ?',
          options: [
            'Protéger les enfants, considérés comme plus influençables, et préserver la neutralité du cadre éducatif public',
            'Interdire toute forme de religion en France',
            'Favoriser une religion particulière',
            'Réduire le nombre d\'élèves dans les écoles',
          ],
          correctIndex: 0,
          explanation: 'La logique sous-jacente repose sur la PROTECTION des élèves MINEURS (considérés comme plus influençables et en formation) et la PRÉSERVATION de la NEUTRALITÉ du cadre éducatif public, espace de formation commun à tous les enfants, quelle que soit leur origine religieuse ou culturelle.',
        },
        {
          id: 'b2-nat-03-ex14',
          type: 'qcm',
          question: 'Distinction avec "à la différence de" : "___ l\'espace public général, l\'école publique impose une neutralité stricte aux élèves mineurs."',
          options: ['À la différence de', 'Grâce à', 'Selon', 'Vers'],
          correctIndex: 0,
          explanation: '"À LA DIFFÉRENCE DE l\'espace public général, l\'école publique impose..." "À la différence de" = contrairement à, introduisant une OPPOSITION entre deux situations juridiques distinctes (liberté large dans l\'espace public vs neutralité stricte à l\'école).',
        },
        {
          id: 'b2-nat-03-ex15',
          type: 'qcm',
          question: 'Que signifie "la neutralité" appliquée à l\'État et ses services publics ?',
          options: [
            'L\'État doit avoir une opinion religieuse officielle',
            'L\'État et ses agents ne favorisent ni ne désavantagent aucune religion ou conviction dans l\'exercice de leurs fonctions officielles',
            'L\'État interdit toute religion dans le pays',
            'L\'État impose une religion d\'État à tous les citoyens',
          ],
          correctIndex: 1,
          explanation: '"Neutralité" = l\'État et ses AGENTS ne favorisent NI ne désavantagent aucune religion ou conviction dans l\'exercice de leurs FONCTIONS OFFICIELLES. Cela garantit l\'ÉGALITÉ de traitement de tous les citoyens, quelle que soit leur religion, devant les services publics.',
        },
        {
          id: 'b2-nat-03-ex16',
          type: 'qcm',
          question: 'Distinction par exception : "À l\'exception des signes ostensibles, les élèves peuvent porter des accessoires religieux ___."',
          options: ['discrets', 'visibles', 'interdits', 'illégaux'],
          correctIndex: 0,
          explanation: '"À l\'exception des signes ostensibles, les élèves peuvent porter des accessoires DISCRETS." La loi de 2004 vise spécifiquement les signes OSTENSIBLES (très visibles), pas les signes discrets (par exemple, un petit bijou avec une symbolique religieuse) qui restent tolérés.',
        },
        {
          id: 'b2-nat-03-ex17',
          type: 'qcm',
          question: 'Pourquoi serait-il incorrect d\'affirmer en entretien de naturalisation que "la laïcité interdit le port du voile dans la rue" ?',
          options: [
            'Parce que cette affirmation est exacte',
            'Parce que c\'est une confusion : la laïcité s\'applique à l\'État et ses agents, pas aux citoyens dans l\'espace public général où le voile peut être porté librement',
            'Parce que le voile n\'existe pas en France',
            'Parce que la question n\'est jamais posée en entretien',
          ],
          correctIndex: 1,
          explanation: 'Cette affirmation serait une ERREUR FACTUELLE et CONCEPTUELLE : dans l\'espace public GÉNÉRAL (la rue), toute personne peut porter un voile ou tout autre signe religieux librement. La laïcité organise la NEUTRALITÉ de l\'État, pas la restriction de la liberté religieuse des citoyens dans l\'espace public.',
        },
        {
          id: 'b2-nat-03-ex18',
          type: 'qcm',
          question: 'Vocabulaire juridique : que signifie "la dissimulation du visage" mentionnée dans la loi de 2010 ?',
          options: [
            'Le fait de se maquiller',
            'Le fait de cacher son visage de façon à empêcher son identification',
            'Le fait de porter des lunettes',
            'Le fait de sourire',
          ],
          correctIndex: 1,
          explanation: '"Dissimulation du visage" = action de CACHER son visage de façon à empêcher l\'identification de la personne (par exemple avec un voile intégral couvrant tout le visage). La loi de 2010 interdit cette pratique dans l\'espace public pour des raisons de sécurité et d\'identification, pas pour des raisons de laïcité.',
        },
        {
          id: 'b2-nat-03-ex19',
          type: 'qcm',
          question: 'Quelle compétence analytique cette leçon développe-t-elle particulièrement pour l\'entretien de naturalisation ?',
          options: [
            'La simple récitation de la définition de la laïcité',
            'La capacité à appliquer un principe général à des situations concrètes variées, en identifiant les nuances et exceptions pertinentes',
            'La mémorisation de tous les articles de loi',
            'Le rejet de toute discussion sur ce sujet',
          ],
          correctIndex: 1,
          explanation: 'Cette leçon développe la capacité à APPLIQUER un principe GÉNÉRAL (la laïcité) à des SITUATIONS CONCRÈTES variées (école, entreprise, espace public), en identifiant les NUANCES et EXCEPTIONS pertinentes. C\'est une compétence analytique avancée, bien plus valorisée en entretien qu\'une simple récitation théorique.',
        },
        {
          id: 'b2-nat-03-ex20',
          type: 'qcm',
          question: 'Comment résumer de façon nuancée et précise le principe de laïcité pour une réponse d\'entretien de naturalisation ?',
          options: [
            '"La laïcité interdit toute religion en France."',
            '"La laïcité organise la neutralité de l\'État et de ses services publics, tout en garantissant à chacun sa liberté de conscience et de culte, dans le respect de règles adaptées à chaque contexte (école, travail, espace public)."',
            '"La laïcité ne concerne que les musulmans."',
            '"La laïcité est une loi sans application pratique."',
          ],
          correctIndex: 1,
          explanation: 'Une réponse PRÉCISE et NUANCÉE doit mentionner : (1) la NEUTRALITÉ de l\'État/services publics, (2) la GARANTIE de la liberté de conscience/culte pour les individus, et (3) la VARIATION des règles selon le CONTEXTE (école, travail, espace public). Cette réponse complète démontre une compréhension fine du principe, attendue au niveau B2.',
        },
      ],
    },

    {
      id: 'b2-nat-04',
      slug: 'b2-recit-parcours-approfondi',
      moduleSlug: 'b2-entretien-naturalisation',
      level: 'B2',
      title: 'Raconter son parcours avec profondeur',
      description: 'Construire un récit personnel riche, nuancé et authentique de son parcours d\'intégration.',
      duration: 12,
      free: false,
      dialogue: `## Exemple : Récit de parcours — Rokia, candidate à la naturalisation

*Extrait d'une préparation à l'entretien, où Rokia structure le récit de son parcours.*

---

**Rokia :** "Je suis arrivée en France il y a huit ans, à l'âge de 24 ans, dans le cadre de mes études de pharmacie. Ce qui m'a d'abord frappée, c'est le décalage entre l'image que je m'étais forgée de la France à travers les médias et la réalité du quotidien, faite de petites adaptations constantes — apprendre à naviguer dans les transports, comprendre les subtilités administratives, ou encore m'habituer à un rapport au temps différent de celui que je connaissais.

Les premières années ont été marquées par des doutes : je me souviens d'un sentiment d'entre-deux, ni totalement chez moi en France, ni complètement détachée de mon pays d'origine. C'est progressivement, à travers mon travail, mes amitiés, et surtout la naissance de ma fille — française de naissance —, que ce sentiment d'appartenance s'est consolidé.

Aujourd'hui, je dirais que je porte une identité plurielle, qui ne se résume pas à un choix binaire entre deux cultures, mais qui les articule. La demande de naturalisation s'inscrit dans cette continuité : non comme un reniement de mes origines, mais comme la reconnaissance officielle d'un attachement que je ressens depuis plusieurs années déjà."`,

      linguisticPoint: `## Point linguistique : Construire un récit nuancé sur l'identité et l'appartenance

### Exprimer une évolution dans le temps
- "Ce qui m'a d'abord frappé(e), c'est..." (première impression)
- "Les premières années ont été marquées par..." (période antérieure)
- "C'est progressivement que..." (évolution graduelle)
- "Aujourd'hui, je dirais que..." (situation actuelle, avec nuance modale)

### Exprimer la complexité identitaire sans contradiction
- "Une identité plurielle, qui ne se résume pas à un choix binaire"
- "Non comme un reniement de..., mais comme..."
- "Un sentiment d'entre-deux" (ni l'un ni l'autre totalement)

### Vocabulaire de l'expérience migratoire nuancée
le décalage, se forger une image, naviguer dans (les démarches), un sentiment d'appartenance, s'articuler (deux cultures), un reniement

### Éviter les formulations binaires simplistes
Plutôt que "je suis devenu(e) complètement français(e)" → "mon identité s'est enrichie d'une nouvelle dimension, sans effacer la précédente."`,

      keyPoints: [
        '"Ce qui m\'a d\'abord frappé(e), c\'est..." = structure pour introduire une première impression',
        '"Un sentiment d\'entre-deux" = ni totalement l\'un ni totalement l\'autre, complexité identitaire',
        '"Non comme un reniement, mais comme..." = structure pour nuancer sans opposer binairement',
        '"Identité plurielle" = vocabulaire valorisé pour décrire une appartenance multiple non hiérarchisée',
        'Évolution temporelle : d\'abord / les premières années / progressivement / aujourd\'hui',
      ],

      exercises: [
        {
          id: 'b2-nat-04-ex01',
          type: 'qcm',
          question: 'Que signifie "ce qui m\'a d\'abord frappée, c\'est le décalage..." ?',
          options: [
            'Quelque chose l\'a physiquement blessée',
            'Sa première impression marquante a été liée à un écart entre ses attentes et la réalité',
            'Elle a été surprise positivement sans réserve',
            'Elle n\'a jamais eu d\'impression particulière',
          ],
          correctIndex: 1,
          explanation: '"Ce qui m\'a frappée" = ce qui a fait une forte IMPRESSION sur moi (au sens figuré, pas physique). "Le décalage" = l\'ÉCART entre l\'image qu\'elle s\'était forgée (médias) et la réalité concrète vécue. Structure pour introduire une PREMIÈRE IMPRESSION marquante.',
        },
        {
          id: 'b2-nat-04-ex02',
          type: 'qcm',
          question: 'Que signifie "un sentiment d\'entre-deux" décrit par Rokia ?',
          options: [
            'Un sentiment de bonheur total',
            'Le sentiment de n\'être ni totalement d\'un pays ni totalement de l\'autre, une position intermédiaire complexe',
            'Un sentiment de rejet complet de la France',
            'Un sentiment de rejet complet de son pays d\'origine',
          ],
          correctIndex: 1,
          explanation: '"Un sentiment d\'entre-deux" = position INTERMÉDIAIRE et parfois inconfortable, où l\'on ne se sent NI totalement d\'un pays NI totalement de l\'autre. Cette expérience est courante chez les personnes ayant migré, et est ici exprimée avec authenticité et nuance, sans en faire un drame ni le nier.',
        },
        {
          id: 'b2-nat-04-ex03',
          type: 'qcm',
          question: 'Structure d\'évolution : "___, ce sentiment d\'appartenance s\'est consolidé." (évolution graduelle)',
          options: ['Soudainement', 'C\'est progressivement que', 'Jamais', 'Immédiatement'],
          correctIndex: 1,
          explanation: '"C\'EST PROGRESSIVEMENT QUE ce sentiment s\'est consolidé." Cette structure souligne une ÉVOLUTION GRADUELLE dans le temps, par opposition à un changement soudain. Très adaptée pour décrire un processus d\'intégration vécu sur plusieurs années.',
        },
        {
          id: 'b2-nat-04-ex04',
          type: 'qcm',
          question: 'Que signifie "une identité plurielle" selon Rokia ?',
          options: [
            'Une identité divisée et conflictuelle',
            'Une identité qui intègre plusieurs dimensions culturelles sans les opposer ni en sacrifier une',
            'Une identité qui n\'existe pas vraiment',
            'Une identité limitée à une seule culture',
          ],
          correctIndex: 1,
          explanation: '"Identité PLURIELLE" = identité qui intègre PLUSIEURS dimensions (ici, culture d\'origine et culture française) sans les mettre en OPPOSITION ni en sacrifier une au profit de l\'autre. C\'est une façon positive et constructive de décrire la double appartenance, souvent valorisée dans le discours contemporain sur l\'intégration.',
        },
        {
          id: 'b2-nat-04-ex05',
          type: 'qcm',
          question: 'Structure de nuance : "La naturalisation ___ comme un reniement de mes origines, ___ comme une reconnaissance de mon attachement."',
          options: [
            'non / mais',
            'oui / et',
            'parce que / donc',
            'bien que / cependant',
          ],
          correctIndex: 0,
          explanation: '"NON comme un reniement..., MAIS comme une reconnaissance..." Structure "non... mais..." pour OPPOSER explicitement deux interprétations possibles, en REJETANT la première (négative, simpliste) au profit de la seconde (positive, nuancée).',
        },
        {
          id: 'b2-nat-04-ex06',
          type: 'qcm',
          question: 'Que signifie "se forger une image" (de la France, par exemple) ?',
          options: [
            'Fabriquer un objet en métal',
            'Construire mentalement une représentation, souvent à partir de sources indirectes (médias, récits)',
            'Photographier quelque chose',
            'Détruire une représentation existante',
          ],
          correctIndex: 1,
          explanation: '"Se forger une image" = CONSTRUIRE mentalement une REPRÉSENTATION d\'une réalité, souvent à partir de sources INDIRECTES (médias, récits d\'autres personnes) avant d\'avoir une expérience directe. "Se forger une image de la France à travers les médias" = construire une idée de la France sans l\'avoir encore vécue.',
        },
        {
          id: 'b2-nat-04-ex07',
          type: 'qcm',
          question: 'Que signifie "naviguer dans les subtilités administratives" ?',
          options: [
            'Faire de la navigation maritime',
            'Réussir à se débrouiller et à progresser malgré la complexité des démarches administratives',
            'Éviter complètement l\'administration',
            'Travailler dans l\'administration',
          ],
          correctIndex: 1,
          explanation: '"Naviguer dans" (au sens figuré) = se débrouiller, progresser malgré la complexité d\'un système. "Naviguer dans les subtilités administratives" = réussir à comprendre et gérer les démarches administratives complexes, malgré leurs nuances parfois difficiles à saisir pour un nouvel arrivant.',
        },
        {
          id: 'b2-nat-04-ex08',
          type: 'qcm',
          question: 'Pourquoi Rokia évite-t-elle de dire "je suis devenue complètement française" ?',
          options: [
            'Parce qu\'elle ne se sent pas du tout française',
            'Parce qu\'une formulation binaire ne reflète pas la complexité réelle de son identité, qui articule plusieurs dimensions culturelles',
            'Parce que c\'est interdit de dire cette phrase',
            'Parce qu\'elle a oublié le mot "française"',
          ],
          correctIndex: 1,
          explanation: 'Une formulation BINAIRE ("complètement française") simplifierait à l\'excès une expérience identitaire plus COMPLEXE et NUANCÉE. Rokia préfère une description qui ARTICULE plusieurs dimensions culturelles, reflétant plus fidèlement son vécu réel sans gommer la richesse de son parcours.',
        },
        {
          id: 'b2-nat-04-ex09',
          type: 'qcm',
          question: 'Structure temporelle : "___, je dirais que je porte une identité plurielle." (situation présente, avec nuance)',
          options: ['Hier', 'Aujourd\'hui', 'Demain', 'Avant'],
          correctIndex: 1,
          explanation: '"AUJOURD\'HUI, je dirais que..." marque la situation ACTUELLE, après l\'évolution décrite précédemment (premières années → progressivement → aujourd\'hui). Le conditionnel "je dirais" ajoute une nuance de RÉFLEXION personnelle plutôt qu\'une affirmation catégorique.',
        },
        {
          id: 'b2-nat-04-ex10',
          type: 'qcm',
          question: 'Que signifie "un reniement de mes origines" ?',
          options: [
            'Une célébration de ses origines',
            'Le fait de renoncer à, de rejeter ses origines comme si elles n\'avaient jamais existé',
            'Une simple mention de ses origines',
            'Un retour dans son pays d\'origine',
          ],
          correctIndex: 1,
          explanation: '"Reniement" = action de RENIER, de REJETER ou de renoncer à quelque chose qu\'on assumait auparavant. "Un reniement de mes origines" = renoncer à, rejeter ses origines, comme si elles devaient être effacées. Rokia rejette cette interprétation négative de sa naturalisation.',
        },
        {
          id: 'b2-nat-04-ex11',
          type: 'qcm',
          question: 'Pourquoi mentionner "la naissance de ma fille — française de naissance" est-il significatif dans ce récit ?',
          options: [
            'C\'est un détail sans importance',
            'Cela marque un tournant affectif et concret qui a renforcé son sentiment d\'appartenance à la France',
            'Cela montre qu\'elle regrette d\'avoir eu un enfant',
            'Cela n\'a aucun lien avec son parcours d\'intégration',
          ],
          correctIndex: 1,
          explanation: 'La naissance de sa fille, FRANÇAISE DE NAISSANCE, représente un TOURNANT AFFECTIF et CONCRET dans son parcours : un lien direct et durable avec la France à travers sa descendance, qui a contribué à CONSOLIDER son sentiment d\'appartenance, au-delà des aspects purement administratifs ou professionnels.',
        },
        {
          id: 'b2-nat-04-ex12',
          type: 'qcm',
          question: 'Quelle qualité de récit cet exemple illustre-t-il, particulièrement valorisée à l\'entretien de naturalisation ?',
          options: [
            'Un récit simple et factuel sans aucune réflexion',
            'Un récit authentique, nuancé, qui reconnaît les difficultés sans les dramatiser, et qui aboutit à une réflexion personnelle construite',
            'Un récit qui cache toutes les difficultés rencontrées',
            'Un récit purement administratif sans dimension personnelle',
          ],
          correctIndex: 1,
          explanation: 'Ce récit illustre un équilibre RECHERCHÉ : AUTHENTICITÉ (reconnaître les doutes, le "sentiment d\'entre-deux") sans DRAMATISATION excessive, aboutissant à une RÉFLEXION PERSONNELLE construite et positive sur l\'identité. Ce type de récit, à la fois sincère et structuré, est généralement bien perçu en entretien.',
        },
        {
          id: 'b2-nat-04-ex13',
          type: 'qcm',
          question: 'Que signifie "s\'articuler" appliqué à deux cultures ("qui les articule") ?',
          options: [
            'Se battre l\'une contre l\'autre',
            'Se combiner, s\'organiser ensemble de façon cohérente sans s\'exclure mutuellement',
            'Disparaître complètement',
            'Rester totalement séparées sans aucun lien',
          ],
          correctIndex: 1,
          explanation: '"S\'articuler" (au sens figuré, comme les articulations du corps qui permettent le mouvement coordonné) = se COMBINER, s\'ORGANISER ensemble de façon COHÉRENTE. "Une identité qui articule deux cultures" = qui les fait fonctionner ENSEMBLE, sans qu\'elles s\'excluent mutuellement.',
        },
        {
          id: 'b2-nat-04-ex14',
          type: 'qcm',
          question: 'Pourquoi le récit de Rokia évite-t-il une présentation purement chronologique et factuelle (dates, démarches administratives) ?',
          options: [
            'Parce que les faits ne sont pas importants',
            'Parce qu\'un récit purement factuel manquerait la dimension humaine et réflexive attendue, qui montre une véritable appropriation de son parcours',
            'Parce que c\'est interdit de mentionner des dates',
            'Parce que Rokia ne se souvient pas des dates',
          ],
          correctIndex: 1,
          explanation: 'Un récit PUREMENT FACTUEL (dates, démarches) manquerait la DIMENSION HUMAINE et RÉFLEXIVE attendue à ce niveau : les ÉMOTIONS vécues, l\'ÉVOLUTION du sentiment d\'appartenance, et une véritable APPROPRIATION personnelle de son parcours, bien plus convaincante qu\'une simple liste chronologique d\'événements.',
        },
        {
          id: 'b2-nat-04-ex15',
          type: 'qcm',
          question: 'Quelle structure permettrait d\'exprimer une difficulté SANS la dramatiser excessivement ?',
          options: [
            '"Tout a été une catastrophe absolue."',
            '"Les premières années ont été marquées par des doutes, mais progressivement..."',
            '"Je n\'ai jamais eu aucune difficulté."',
            '"C\'était impossible à supporter."',
          ],
          correctIndex: 1,
          explanation: '"Les premières années ont été marquées par des doutes, mais progressivement..." reconnaît une DIFFICULTÉ réelle (les doutes) sans la DRAMATISER de façon excessive, et l\'inscrit immédiatement dans une DYNAMIQUE D\'ÉVOLUTION positive ("mais progressivement"). Cet équilibre entre authenticité et perspective constructive est idéal pour ce type de récit.',
        },
        {
          id: 'b2-nat-04-ex16',
          type: 'qcm',
          question: 'Que signifie "un rapport au temps différent" mentionné par Rokia comme adaptation nécessaire ?',
          options: [
                       'Une différence de fuseau horaire uniquement',
            'Une différence culturelle dans la perception et la gestion du temps (ponctualité, rythme de vie, planification)',
            'Un problème avec sa montre',
            'Un décalage horaire temporaire',
          ],
          correctIndex: 1,
          explanation: '"Un rapport au temps différent" évoque une DIFFÉRENCE CULTURELLE dans la perception du temps : ponctualité, rythme de vie quotidien, façons de planifier ou de gérer les délais — autant d\'aspects qui peuvent varier significativement entre cultures et nécessiter une adaptation progressive.',
        },
        {
          id: 'b2-nat-04-ex17',
          type: 'qcm',
          question: 'Comment qualifier le registre de langue utilisé par Rokia dans ce récit ?',
          options: [
            'Familier et relâché',
            'Soutenu et réfléchi, avec un vocabulaire abstrait et des structures nuancées',
            'Très simple, proche du niveau A2',
            'Argotique avec beaucoup d\'abréviations',
          ],
          correctIndex: 1,
          explanation: 'Le récit de Rokia utilise un registre SOUTENU et RÉFLÉCHI : vocabulaire ABSTRAIT ("identité plurielle", "sentiment d\'appartenance", "reniement"), structures NUANCÉES ("non comme... mais comme..."), et une syntaxe complexe — typique du niveau B2/C1 attendu pour ce type d\'entretien.',
        },
        {
          id: 'b2-nat-04-ex18',
          type: 'qcm',
          question: 'Quelle est la fonction de l\'expression "ce qui m\'a d\'abord frappée" dans la construction du récit global ?',
          options: [
            'Conclure le récit',
            'Ouvrir le récit en signalant une première étape chronologique (l\'arrivée, les premières impressions)',
            'Introduire une digression sans rapport',
            'Exprimer un regret final',
          ],
          correctIndex: 1,
          explanation: 'Cette expression OUVRE le récit en signalant la PREMIÈRE ÉTAPE chronologique du parcours (l\'arrivée et les premières impressions), avant de développer l\'ÉVOLUTION ultérieure ("les premières années", "progressivement", "aujourd\'hui"). Elle structure clairement la temporalité du récit pour le lecteur/auditeur.',
        },
        {
          id: 'b2-nat-04-ex19',
          type: 'qcm',
          question: 'Pourquoi un récit qui reconnaît des difficultés est-il généralement perçu comme plus crédible qu\'un récit idéalisé sans aucune difficulté mentionnée ?',
          options: [
            'Parce que les difficultés sont obligatoires à mentionner par la loi',
            'Parce qu\'un parcours d\'intégration sans aucune difficulté semble peu réaliste, tandis que la reconnaissance honnête de difficultés suivies d\'une évolution positive paraît plus authentique',
            'Parce que les agents de préfecture préfèrent les histoires tristes',
            'Parce que cela n\'a aucune importance pour la crédibilité du récit',
          ],
          correctIndex: 1,
          explanation: 'Un parcours d\'intégration totalement IDÉALISÉ (sans aucune difficulté) paraît souvent peu RÉALISTE et peut sembler artificiel ou récité. La reconnaissance HONNÊTE de difficultés réelles, suivie d\'une ÉVOLUTION POSITIVE, renforce la CRÉDIBILITÉ et l\'AUTHENTICITÉ du récit, montrant une réflexion personnelle sincère plutôt qu\'une réponse formatée.',
        },
        {
          id: 'b2-nat-04-ex20',
          type: 'qcm',
          question: 'Quelle leçon générale peut-on tirer de cet exemple pour préparer son propre récit de parcours en entretien ?',
          options: [
            'Il faut copier exactement le récit de Rokia mot pour mot',
            'Construire un récit personnel authentique, structuré chronologiquement, qui reconnaît les évolutions et complexités sans tomber dans le simplisme ou la dramatisation',
            'Il ne faut jamais mentionner de difficultés',
            'Il faut éviter de parler de sa vie personnelle',
          ],
          correctIndex: 1,
          explanation: 'La leçon générale est de construire un récit PERSONNEL et AUTHENTIQUE (pas un copier-coller d\'un modèle), structuré CHRONOLOGIQUEMENT, qui reconnaît les ÉVOLUTIONS et COMPLEXITÉS de son propre parcours, sans tomber ni dans le SIMPLISME (réponses toutes faites) ni dans la DRAMATISATION excessive (victimisation). L\'authenticité réfléchie est la clé.',
        },
      ],
    },

    {
      id: 'b2-nat-05',
      slug: 'b2-simulation-entretien-complet',
      moduleSlug: 'b2-entretien-naturalisation',
      level: 'B2',
      title: 'Simulation complète d\'entretien',
      description: 'S\'entraîner sur des questions pièges et des réponses modèles pour l\'entretien de naturalisation.',
      duration: 12,
      free: false,
      dialogue: `## Simulation : Questions pièges et réponses modèles

**Question 1 — "Que pensez-vous de certaines critiques adressées à la France, par exemple sur les inégalités sociales ?"**
*Piège : tester la capacité à avoir un regard critique constructif, sans dénigrement ni flatterie excessive.*
Réponse modèle : "Je pense qu'aucune société n'est exempte de défis, et la France ne fait pas exception. Les inégalités sociales sont un sujet de débat légitime, largement discuté par les citoyens français eux-mêmes. Ce qui me semble important, c'est que ces débats puissent avoir lieu librement, ce qui témoigne de la vitalité démocratique du pays."

**Question 2 — "Si une loi vous semblait injuste, que feriez-vous ?"**
*Piège : tester la connaissance des moyens légaux d'expression du désaccord, par opposition à des réponses radicales.*
Réponse modèle : "Je m'informerais d'abord sur les raisons de cette loi, car ma première impression pourrait être incomplète. Si mon désaccord persistait, je disposerais de plusieurs moyens légitimes : m'exprimer via les associations, participer aux débats publics, voter pour des représentants partageant ma position, ou encore, dans certains cas, saisir la justice."

**Question 3 — "Pourquoi avez-vous choisi la France plutôt qu'un autre pays ?"**
*Piège : éviter une réponse purement utilitaire (visa, argent) qui pourrait sembler instrumentale.*
Réponse modèle : "Plusieurs facteurs ont compté : des opportunités professionnelles, certes, mais aussi un attachement progressif à un mode de vie, à une langue que j'ai appris à aimer, et à des valeurs que je partage profondément, notamment la liberté d'expression et l'égalité des droits."

**Question 4 — "Que feriez-vous si vous étiez témoin d'une discrimination ?"**
Réponse modèle : "Je rappellerais à la personne concernée qu'elle dispose de recours, notamment auprès du Défenseur des Droits, et je pourrais moi-même témoigner si cela s'avérait utile, car je considère que la lutte contre les discriminations est une responsabilité partagée."`,

      linguisticPoint: `## Point linguistique : Le conditionnel dans les réponses hypothétiques d'entretien

### Pourquoi le conditionnel domine dans ces réponses ?
Les questions hypothétiques ("Que feriez-vous si...") appellent naturellement des réponses au CONDITIONNEL, car elles envisagent des situations non encore vécues.

### Structures à maîtriser
- "Je m'informerais d'abord..." (action hypothétique première)
- "Si mon désaccord persistait, je disposerais de..." (si + imparfait → conditionnel)
- "Je pourrais moi-même témoigner si cela s'avérait utile." (cascade conditionnelle)

### Éviter les réponses trop tranchées ou caricaturales
- ❌ "Je serais furieux et je manifesterais violemment."
- ✅ "Je privilégierais les moyens légaux d'expression de mon désaccord."

### Montrer une réflexion en plusieurs étapes
- "Je m'informerais d'abord..., puis, si..., je..."
- Cette structuration séquentielle montre une capacité de RÉFLEXION posée, plutôt qu'une réaction impulsive.`,

      keyPoints: [
        'Questions hypothétiques "que feriez-vous si..." → réponses au conditionnel',
        'Éviter réponses utilitaires pures ("pour le visa") → privilégier valeurs + attachement réel',
        'Structurer en étapes : "je m\'informerais d\'abord..., puis si..., je..."',
        'Sur les critiques de la France : reconnaître sans dénigrer ni flatter excessivement',
        'Recours légaux à connaître : associations, débats publics, vote, justice, Défenseur des Droits',
      ],

      exercises: [
        {
          id: 'b2-nat-05-ex01',
          type: 'qcm',
          question: 'Pourquoi la réponse modèle sur les inégalités sociales évite-t-elle un déni total ou une critique excessive ?',
          options: [
            'Parce qu\'il faut toujours être complètement neutre sans opinion',
            'Parce qu\'elle vise un équilibre : reconnaître un fait réel sans dénigrer le pays, en valorisant la liberté du débat démocratique lui-même',
            'Parce que les inégalités sociales n\'existent pas en France',
            'Parce qu\'il est interdit de mentionner des problèmes sociaux',
          ],
          correctIndex: 1,
          explanation: 'La réponse vise un ÉQUILIBRE : reconnaître la RÉALITÉ des inégalités (sans déni naïf) tout en évitant un DÉNIGREMENT excessif, et en valorisant la VITALITÉ DÉMOCRATIQUE qui permet ce débat. Cette nuance démontre une maturité analytique plutôt qu\'une réponse binaire (tout positif ou tout négatif).',
        },
        {
          id: 'b2-nat-05-ex02',
          type: 'qcm',
          question: 'Conditionnel hypothétique : "Si une loi me semblait injuste, je ___ d\'abord sur ses raisons." (s\'informer)',
          options: ['m\'informe', 'm\'informerai', 'm\'informerais', 'm\'informais'],
          correctIndex: 2,
          explanation: '"Je M\'INFORMERAIS d\'abord sur ses raisons." Si + imparfait → conditionnel présent. "M\'informerais" = conditionnel présent (1ère pers. sing.) de "s\'informer". Réponse appropriée à une question hypothétique.',
        },
        {
          id: 'b2-nat-05-ex03',
          type: 'qcm',
          question: 'Pourquoi la réponse à "que feriez-vous si une loi vous semblait injuste" mentionne-t-elle plusieurs RECOURS LÉGAUX plutôt qu\'une seule action radicale ?',
          options: [
            'Pour montrer qu\'on hésite et qu\'on ne sait pas quoi faire',
            'Pour démontrer une connaissance des moyens légitimes et légaux d\'expression du désaccord dans une démocratie, par opposition à des réponses radicales ou violentes',
            'Pour éviter de répondre à la question',
            'Parce qu\'une seule réponse ne serait jamais suffisante',
          ],
          correctIndex: 1,
          explanation: 'Mentionner PLUSIEURS recours LÉGAUX (associations, débats publics, vote, justice) démontre une connaissance APPROFONDIE des moyens LÉGITIMES d\'expression du désaccord dans une démocratie, contrastant avec des réponses RADICALES ou potentiellement préoccupantes (violence, rejet des institutions).',
        },
        {
          id: 'b2-nat-05-ex04',
          type: 'qcm',
          question: 'Cascade conditionnelle : "Je pourrais témoigner si cela ___ utile." (s\'avérer)',
          options: ['s\'avère', 's\'avérera', 's\'avérait', 's\'est avéré'],
          correctIndex: 2,
          explanation: '"Si cela S\'AVÉRAIT utile." Si + imparfait (continuation de la phrase conditionnelle initiée par "je pourrais"). "S\'avérait" = imparfait de "s\'avérer" (se révéler être). La cohérence temporelle conditionnel/imparfait est maintenue dans cette cascade.',
        },
        {
          id: 'b2-nat-05-ex05',
          type: 'qcm',
          question: 'Pourquoi est-il déconseillé de répondre à "pourquoi avez-vous choisi la France" uniquement par des raisons utilitaires (visa, argent) ?',
          options: [
            'Parce que les raisons utilitaires sont toujours fausses',
            'Parce qu\'une réponse purement utilitaire peut sembler instrumentale, alors que l\'entretien valorise un attachement réel et durable, au-delà des seuls avantages pratiques',
            'Parce qu\'il est interdit de mentionner le visa',
            'Parce que les raisons utilitaires sont illégales',
          ],
          correctIndex: 1,
          explanation: 'Une réponse PUREMENT UTILITAIRE peut sembler INSTRUMENTALE (la France comme simple "moyen" pour un objectif pratique), alors que l\'entretien valorise un ATTACHEMENT plus PROFOND et DURABLE — langue, valeurs, mode de vie — démontrant un véritable désir d\'appartenance plutôt qu\'un calcul purement pragmatique.',
        },
        {
          id: 'b2-nat-05-ex06',
          type: 'qcm',
          question: 'Quel organisme est mentionné comme recours en cas de discrimination ?',
          options: [
            'Le Conseil constitutionnel',
            'Le Défenseur des Droits',
            'Le Sénat',
            'L\'Académie française',
          ],
          correctIndex: 1,
          explanation: 'Le DÉFENSEUR DES DROITS est l\'institution indépendante mentionnée comme recours en cas de discrimination, offrant une aide GRATUITE aux victimes. Connaître cette institution démontre une bonne connaissance pratique des recours disponibles, valorisée en entretien.',
        },
        {
          id: 'b2-nat-05-ex07',
          type: 'qcm',
          question: 'Structure séquentielle de réflexion : "Je m\'informerais d\'abord..., ___, si mon désaccord persistait, je..."',
          options: ['puis', 'jamais', 'malgré', 'sauf'],
          correctIndex: 0,
          explanation: '"Je m\'informerais d\'abord..., PUIS, si mon désaccord persistait, je..." "Puis" structure la SÉQUENCE temporelle des étapes de réflexion (informer → puis si désaccord persiste → agir). Cette structuration montre une réflexion POSÉE en plusieurs temps, pas une réaction impulsive.',
        },
        {
          id: 'b2-nat-05-ex08',
          type: 'qcm',
          question: 'Pourquoi la phrase "ce qui me semble important, c\'est que ces débats puissent avoir lieu librement" est-elle une réponse habile ?',
          options: [
            'Parce qu\'elle évite complètement la question posée',
            'Parce qu\'elle déplace intelligemment le sujet vers la valorisation du PROCESSUS démocratique lui-même (la liberté de débattre), plutôt que de trancher sur le fond de la critique',
            'Parce qu\'elle critique sévèrement la France',
            'Parce qu\'elle ne contient aucune opinion',
          ],
          correctIndex: 1,
          explanation: 'Cette réponse déplace HABILEMENT le sujet : plutôt que de trancher sur le FOND de la critique (les inégalités sont-elles graves ou non), elle valorise le PROCESSUS démocratique qui permet ce débat (liberté d\'expression). Cette stratégie rhétorique permet de répondre de façon constructive sans s\'enfermer dans une position polémique.',
        },
        {
          id: 'b2-nat-05-ex09',
          type: 'qcm',
          question: 'Conditionnel : "Je rappellerais à la personne qu\'elle ___ de recours légaux." (disposer)',
          options: ['dispose', 'disposerait', 'disposerai', 'a disposé'],
          correctIndex: 0,
          explanation: '"Je rappellerais... qu\'elle DISPOSE de recours." Ici, le verbe subordonné reste à l\'INDICATIF PRÉSENT (pas conditionnel) car c\'est un FAIT établi (elle dispose réellement de ces recours), pas une hypothèse. Seul le verbe principal ("rappellerais") est au conditionnel car l\'action elle-même est hypothétique.',
        },
        {
          id: 'b2-nat-05-ex10',
          type: 'qcm',
          question: 'Pourquoi formuler "ma première impression pourrait être incomplète" est-il pertinent dans la réponse sur la loi injuste ?',
          options: [
            'Pour montrer qu\'on n\'a jamais d\'opinion',
            'Pour démontrer une humilité intellectuelle et une volonté de comprendre avant de juger, qualité valorisée dans un débat démocratique mature',
            'Pour éviter de répondre à la question',
            'Parce que c\'est une formule obligatoire à mémoriser',
          ],
          correctIndex: 1,
          explanation: 'Reconnaître que "ma première impression pourrait être incomplète" démontre une HUMILITÉ INTELLECTUELLE et une volonté de COMPRENDRE avant de juger définitivement — qualité particulièrement valorisée dans une réflexion démocratique mature, qui évite les jugements hâtifs ou caricaturaux.',
        },
        {
          id: 'b2-nat-05-ex11',
          type: 'qcm',
          question: 'Quelle valeur républicaine est implicitement mise en avant dans la réponse sur le choix de la France ("liberté d\'expression et égalité des droits") ?',
          options: [
            'Uniquement des considérations économiques',
            'L\'adhésion sincère aux valeurs fondamentales de la République française, au-delà des aspects pratiques',
            'Le rejet total de son pays d\'origine',
            'Une critique implicite de la France',
          ],
          correctIndex: 1,
          explanation: 'Mentionner "liberté d\'expression et égalité des droits" met en avant l\'ADHÉSION SINCÈRE aux VALEURS FONDAMENTALES de la République (issues de la devise "Liberté, Égalité, Fraternité"), démontrant un attachement qui dépasse les simples considérations PRATIQUES ou ÉCONOMIQUES.',
        },
        {
          id: 'b2-nat-05-ex12',
          type: 'qcm',
          question: 'Conditionnel : "Si j\'étais témoin de discrimination, je ___ témoigner." (pouvoir)',
          options: ['peux', 'pourrai', 'pourrais', 'pouvais'],
          correctIndex: 2,
          explanation: '"Si j\'étais témoin..., je POURRAIS témoigner." Si + imparfait → conditionnel présent. "Pourrais" = conditionnel présent (1ère pers. sing.) de "pouvoir". Structure hypothétique classique pour répondre à une question "que feriez-vous si...".',
        },
        {
          id: 'b2-nat-05-ex13',
          type: 'qcm',
          question: 'Pourquoi est-il important de connaître des institutions précises (Défenseur des Droits, justice, associations) plutôt que de répondre vaguement "je ferais quelque chose" ?',
          options: [
            'Parce que la précision n\'a aucune importance',
            'Parce que mentionner des institutions précises démontre une connaissance concrète du fonctionnement démocratique et social français, au-delà d\'une intention vague',
            'Parce que c\'est obligatoire de citer le nom exact de chaque institution',
            'Parce que les agents préfèrent les réponses longues',
          ],
          correctIndex: 1,
          explanation: 'Mentionner des INSTITUTIONS PRÉCISES (Défenseur des Droits, justice, associations) démontre une connaissance CONCRÈTE et ACTIONNABLE du fonctionnement démocratique et social français, bien plus convaincante qu\'une intention VAGUE ("je ferais quelque chose") qui ne prouve aucune connaissance réelle des recours disponibles.',
        },
        {
          id: 'b2-nat-05-ex14',
          type: 'qcm',
          question: 'Quelle attitude doit-on éviter en répondant à une question piège sur les critiques de la France ?',
          options: [
            'Reconnaître les défis de façon nuancée',
            'Le déni total ("la France n\'a aucun problème") ou la critique excessive ("la France est un pays terrible")',
            'Valoriser le débat démocratique',
            'Répondre de façon réfléchie',
          ],
          correctIndex: 1,
          explanation: 'Les DEUX EXTRÊMES sont à éviter : le DÉNI TOTAL (qui semble naïf ou peu crédible) et la CRITIQUE EXCESSIVE (qui pourrait sembler déplacée dans le contexte d\'une demande de naturalisation). L\'équilibre nuancé, reconnaissant les défis tout en valorisant les mécanismes démocratiques, est la posture la plus appropriée.',
        },
        {
          id: 'b2-nat-05-ex15',
          type: 'qcm',
          question: 'Cascade conditionnelle complète : "___ mon désaccord persistait, je ___ plusieurs moyens légitimes."',
          options: [
            'Si / disposerais',
            'Quand / dispose',
            'Bien que / disposerais',
            'Parce que / disposerais',
          ],
          correctIndex: 0,
          explanation: '"SI mon désaccord persistait, je DISPOSERAIS de plusieurs moyens..." Si + imparfait ("persistait") → conditionnel présent ("disposerais"). Structure hypothétique classique du type 2 (hypothèse non réalisée mais envisageable).',
        },
        {
          id: 'b2-nat-05-ex16',
          type: 'qcm',
          question: 'Pourquoi la responsabilité de "lutter contre les discriminations" est-elle qualifiée de "partagée" dans la réponse modèle ?',
          options: [
            'Parce que c\'est uniquement la responsabilité de l\'État',
            'Parce que chaque citoyen, y compris les témoins de discrimination, a un rôle à jouer dans la lutte collective contre ce phénomène, pas seulement les institutions',
            'Parce que personne n\'est responsable',
            'Parce que c\'est uniquement la responsabilité des victimes',
          ],
          correctIndex: 1,
          explanation: '"Responsabilité PARTAGÉE" souligne que chaque CITOYEN (pas seulement l\'État ou les institutions) a un rôle à jouer dans la lutte CONTRE LES DISCRIMINATIONS, notamment en tant que témoin actif (pouvant signaler, témoigner). Cette vision COLLECTIVE de la responsabilité civique est valorisée dans le discours républicain.',
        },
        {
          id: 'b2-nat-05-ex17',
          type: 'qcm',
          question: 'Quelle compétence transversale ces 4 questions pièges visent-elles à évaluer, au-delà du simple contenu des réponses ?',
          options: [
            'La capacité à mémoriser des réponses par cœur sans réflexion',
            'La capacité à raisonner de façon nuancée, à connaître les mécanismes démocratiques, et à exprimer un attachement authentique plutôt qu\'instrumental',
            'La capacité à parler très vite',
            'La capacité à éviter toute question difficile',
          ],
          correctIndex: 1,
          explanation: 'Ces questions PIÈGES évaluent une compétence TRANSVERSALE : la capacité à RAISONNER de façon NUANCÉE (ni déni ni critique excessive), à connaître les MÉCANISMES démocratiques (recours légaux), et à exprimer un ATTACHEMENT AUTHENTIQUE (pas seulement utilitaire) — bien plus que la simple récitation de réponses mémorisées.',
        },
        {
          id: 'b2-nat-05-ex18',
          type: 'qcm',
          question: 'Conditionnel : "Si j\'étais confronté à une situation d\'injustice, je ___ calme avant d\'agir." (rester)',
          options: ['reste', 'resterai', 'resterais', 'restais'],
          correctIndex: 2,
          explanation: '"Je RESTERAIS calme avant d\'agir." Si + imparfait → conditionnel présent. "Resterais" = conditionnel présent (1ère pers. sing.) de "rester". Cette réponse montre une attitude RÉFLÉCHIE plutôt qu\'impulsive face à une situation hypothétique difficile.',
        },
        {
          id: 'b2-nat-05-ex19',
          type: 'qcm',
          question: 'Pourquoi est-il préférable de structurer sa réponse en plusieurs ÉTAPES ("d\'abord... puis... enfin...") plutôt qu\'une réponse uniciste et abrupte ?',
          options: [
            'Pour faire perdre du temps à l\'agent',
            'Pour démontrer une capacité de réflexion posée et progressive, plus convaincante qu\'une réaction impulsive ou simpliste',
            'Parce que les réponses courtes sont toujours mauvaises',
            'Parce que c\'est une règle administrative obligatoire',
          ],
          correctIndex: 1,
          explanation: 'Une réponse STRUCTURÉE en étapes ("d\'abord je m\'informerais..., puis si..., enfin je...") démontre une capacité de RÉFLEXION POSÉE et PROGRESSIVE, bien plus CONVAINCANTE qu\'une réaction IMPULSIVE ou SIMPLISTE à une question complexe. C\'est un signe de maturité dans le raisonnement.',
        },
        {
          id: 'b2-nat-05-ex20',
          type: 'qcm',
          question: 'En synthèse, quelle est la posture générale à adopter face à des questions pièges en entretien de naturalisation ?',
          options: [
            'Toujours dire ce qu\'on pense que l\'agent veut entendre, sans authenticité',
            'Allier authenticité personnelle, connaissance concrète des institutions/recours, et nuance argumentative, en évitant les réponses binaires ou caricaturales',
            'Refuser de répondre aux questions difficiles',
            'Mémoriser des réponses toutes faites sans les adapter à sa propre situation',
          ],
          correctIndex: 1,
          explanation: 'La posture IDÉALE combine : AUTHENTICITÉ personnelle (son propre vécu, ses propres valeurs), CONNAISSANCE CONCRÈTE des institutions et recours disponibles, et NUANCE ARGUMENTATIVE (éviter le déni comme la critique excessive, structurer sa pensée en étapes). C\'est cette combinaison qui démontre une véritable maîtrise du niveau B2 et une intégration réfléchie.',
        },
      ],
    },
  ],
};
