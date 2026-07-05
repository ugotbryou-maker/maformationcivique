import type { LangModule } from '../types';

export const b2Conjugaison: LangModule = {
  id: 'b2-mod-08',
  slug: 'b2-conjugaison',
  level: 'B2',
  title: 'Conjugaison B2',
  subtitle: 'Conditionnel passé, passé simple, concordance et accords complexes',
  description: 'Perfectionnez votre maîtrise des temps et accords les plus subtils du français pour une expression fluide et précise.',
  type: 'conjugaison',
  emoji: '🔠',
  free: false,
  lessons: [
    {
      id: 'b2-conj-01',
      slug: 'b2-conditionnel-passe-approfondi',
      moduleSlug: 'b2-conjugaison',
      level: 'B2',
      title: 'Le conditionnel passé approfondi',
      description: 'Maîtriser les deux formes du conditionnel passé et leurs emplois nuancés.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Le conditionnel passé au-delà du simple regret

Le conditionnel passé exprime généralement un regret ou une hypothèse non réalisée, mais ses emplois sont plus variés qu'il n'y paraît.

**Formation rappel :** avoir/être (conditionnel présent) + participe passé
"J'**aurais aimé** voyager davantage." / "Elle **serait venue** si elle avait pu."

**Le conditionnel passé 2ème forme (littéraire, à reconnaître)**
Identique au subjonctif plus-que-parfait dans sa forme : "Si j'**eusse su**, je **fusse venu**." Cette forme, très rare aujourd'hui, apparaît dans la littérature classique (Balzac, Hugo) à la place du conditionnel passé standard.

**Emplois nuancés du conditionnel passé :**
1. **Regret/reproche** : "Tu **aurais pu** me prévenir !" (reproche)
2. **Hypothèse irréelle du passé** : "Si j'avais su, je **serais parti** plus tôt."
3. **Suggestion non suivie** : "On **aurait pu** envisager une autre solution." (sans blâme direct)
4. **Information non confirmée sur le passé** : "Le suspect **aurait quitté** le pays avant son arrestation."
5. **Politesse extrême pour une demande passée** : "**J'aurais souhaité** vous poser une question, si vous le permettez."

**Distinction subtile : conditionnel passé vs subjonctif passé**
"Je regrette qu'il **soit parti**." (subjonctif passé — sentiment + fait accompli)
"Il **serait parti** trop tôt." (conditionnel passé — info non confirmée OU hypothèse)`,

      linguisticPoint: `## Point linguistique : Le conditionnel passé 2ème forme (reconnaissance littéraire)

### Formation (identique au subjonctif plus-que-parfait)
avoir/être au SUBJONCTIF IMPARFAIT + participe passé

### Tableau comparatif
| Forme standard (courante) | 2ème forme (littéraire) |
|---|---|
| j'aurais aimé | j'**eusse aimé** |
| il serait venu | il **fût venu** |
| nous aurions dit | nous **eussions dit** |

### Où rencontre-t-on cette forme ?
- Littérature classique (XIXe siècle notamment)
- Style très soutenu, parfois pour un effet archaïsant volontaire
- Quasiment jamais utilisée à l'oral contemporain

### Ce qu'il faut retenir au niveau B2
Il s'agit d'une compétence de RECONNAISSANCE (pour comprendre un texte littéraire), pas de PRODUCTION active. Savoir l'identifier permet de ne pas être bloqué face à un texte classique.`,

      keyPoints: [
        'Conditionnel passé = avoir/être (conditionnel présent) + PP',
        '5 emplois : regret/reproche, hypothèse irréelle passée, suggestion non suivie, info non confirmée, politesse',
        '2ème forme littéraire (j\'eusse aimé) = identique au subjonctif plus-que-parfait, à reconnaître seulement',
        '"Tu aurais pu me prévenir !" = reproche (nuance différente du simple regret)',
        'Distinction : subjonctif passé (sentiment+fait accompli) vs conditionnel passé (hypothèse/info non confirmée)',
      ],

      exercises: [
        {
          id: 'b2-conj-01-ex01',
          type: 'qcm',
          question: 'Reproche au conditionnel passé : "Tu ___ me prévenir !" (pouvoir)',
          options: ['peux', 'pourrais', 'aurais pu', 'as pu'],
          correctIndex: 2,
          explanation: '"Tu AURAIS PU me prévenir !" Conditionnel passé pour exprimer un REPROCHE sur une action passée non réalisée. "Aurais pu" = avoir (conditionnel présent) + "pu" (PP de "pouvoir").',
        },
        {
          id: 'b2-conj-01-ex02',
          type: 'qcm',
          question: '2ème forme littéraire : "Si j\'eusse su, je ___ venu." Quelle est la forme standard équivalente ?',
          options: ['je serais venu', 'je sois venu', 'je fusse venu', 'j\'étais venu'],
          correctIndex: 0,
          explanation: '"JE SERAIS VENU" est la forme STANDARD (courante) équivalente à "je fusse venu" (2ème forme littéraire). Les deux expriment la même idée de conditionnel passé, mais avec un registre très différent (l\'un archaïsant, l\'autre courant).',
        },
        {
          id: 'b2-conj-01-ex03',
          type: 'qcm',
          question: 'Information non confirmée : "Le suspect ___ le pays avant son arrestation." (quitter)',
          options: ['quitte', 'a quitté', 'aurait quitté', 'quittait'],
          correctIndex: 2,
          explanation: '"Le suspect AURAIT QUITTÉ le pays..." Conditionnel passé pour une INFORMATION NON CONFIRMÉE sur un fait passé. Très fréquent dans le style journalistique pour des faits non encore officiellement établis.',
        },
        {
          id: 'b2-conj-01-ex04',
          type: 'qcm',
          question: 'Suggestion non suivie (sans blâme) : "On ___ envisager une autre solution." (pouvoir)',
          options: ['peut', 'pourrait', 'aurait pu', 'a pu'],
          correctIndex: 2,
          explanation: '"On AURAIT PU envisager une autre solution." Conditionnel passé pour une SUGGESTION non suivie, SANS blâme direct (contrairement au reproche "tu aurais pu" adressé directement à quelqu\'un). Ton plus neutre et réflexif.',
        },
        {
          id: 'b2-conj-01-ex05',
          type: 'qcm',
          question: 'Hypothèse irréelle du passé : "Si j\'avais su, je ___ plus tôt." (partir)',
          options: ['pars', 'partirais', 'serais parti', 'étais parti'],
          correctIndex: 2,
          explanation: '"Si j\'avais su, je SERAIS PARTI plus tôt." Si + plus-que-parfait → conditionnel passé. "Partir" = verbe être → "serais" + "parti" (PP).',
        },
        {
          id: 'b2-conj-01-ex06',
          type: 'qcm',
          question: 'Quelle est la formation de la 2ème forme du conditionnel passé ?',
          options: [
            'Avoir/être au conditionnel présent + participe passé',
            'Avoir/être au subjonctif imparfait + participe passé',
            'Avoir/être au subjonctif présent + participe passé',
            'Avoir/être au futur simple + participe passé',
          ],
          correctIndex: 1,
          explanation: 'La 2ème forme du conditionnel passé se forme avec AVOIR/ÊTRE au SUBJONCTIF IMPARFAIT + participe passé : "j\'eusse aimé" (eusse = subjonctif imparfait d\'avoir). Cette forme est identique à celle du subjonctif plus-que-parfait.',
        },
        {
          id: 'b2-conj-01-ex07',
          type: 'qcm',
          question: 'Politesse extrême passée : "___ vous poser une question, si vous le permettez." (souhaiter)',
          options: ['Je souhaite', 'J\'ai souhaité', 'J\'aurais souhaité', 'Je souhaiterai'],
          correctIndex: 2,
          explanation: '"J\'AURAIS SOUHAITÉ vous poser une question..." Conditionnel passé de POLITESSE EXTRÊME, formule très soutenue pour introduire une demande avec une grande déférence, même sur une action présente/future (paradoxe stylistique du conditionnel passé utilisé pour adoucir une demande actuelle).',
        },
        {
          id: 'b2-conj-01-ex08',
          type: 'qcm',
          question: 'Distinction : "Je regrette qu\'il soit parti" (subjonctif passé) vs "Il serait parti trop tôt" (conditionnel passé) — quelle est la différence de sens ?',
          options: [
            'Aucune différence, les deux expriment exactement la même chose',
            'Le subjonctif exprime un sentiment sur un fait accompli certain, le conditionnel exprime une hypothèse ou une information non confirmée',
            'Le conditionnel est toujours plus certain que le subjonctif',
            'Le subjonctif ne peut jamais s\'utiliser avec le verbe "partir"',
          ],
          correctIndex: 1,
          explanation: 'Le SUBJONCTIF PASSÉ ("je regrette qu\'il soit parti") exprime un SENTIMENT sur un fait ACCOMPLI et CERTAIN (il est vraiment parti). Le CONDITIONNEL PASSÉ ("il serait parti") exprime une HYPOTHÈSE ou une INFORMATION NON CONFIRMÉE — on n\'est pas sûr qu\'il soit réellement parti.',
        },
        {
          id: 'b2-conj-01-ex09',
          type: 'qcm',
          question: '2ème forme : "Nous ___ cela si nous avions su." (dire, forme littéraire)',
          options: ['aurions dit', 'eussions dit', 'disions', 'dirions'],
          correctIndex: 1,
          explanation: '"Nous EUSSIONS DIT cela..." 2ème forme littéraire du conditionnel passé. "Eussions" = subjonctif imparfait d\'avoir (1ère pers. pl.) + "dit" (PP). Forme rare, réservée à la reconnaissance de textes très soutenus ou classiques.',
        },
        {
          id: 'b2-conj-01-ex10',
          type: 'qcm',
          question: 'Conditionnel passé + accord PP : "Elle ___ plus tôt si elle avait pu." (partir, sujet féminin)',
          options: ['serait parti', 'serait partie', 'aurait parti', 'aurait partie'],
          correctIndex: 1,
          explanation: '"Elle SERAIT PARTIE plus tôt." "Partir" = verbe être → "serait" + PP accordé au féminin ("partie", accord avec le sujet "elle"). Ne jamais utiliser "avoir" avec "partir" (verbe de mouvement = être).',
        },
        {
          id: 'b2-conj-01-ex11',
          type: 'qcm',
          question: 'Information journalistique non confirmée : "Plusieurs ministres ___ démissionner, selon des sources proches du dossier." (envisager)',
          options: ['envisagent', 'envisageraient', 'ont envisagé', 'envisageaient'],
          correctIndex: 1,
          explanation: '"Plusieurs ministres ENVISAGERAIENT de démissionner..." Conditionnel PRÉSENT (pas passé ici, car l\'action — démissionner — est encore future/hypothétique) pour une information non confirmée. "Selon des sources" introduit la réserve journalistique habituelle.',
        },
        {
          id: 'b2-conj-01-ex12',
          type: 'qcm',
          question: 'Reproche : "Vous ___ m\'informer de ce changement plus tôt !" (devoir)',
          options: ['devez', 'devriez', 'auriez dû', 'avez dû'],
          correctIndex: 2,
          explanation: '"Vous AURIEZ DÛ m\'informer plus tôt !" "Aurais dû / auriez dû" est LA formule classique du REPROCHE au conditionnel passé. "Devoir" au conditionnel passé exprime systématiquement ce sens de reproche sur une obligation non respectée.',
        },
        {
          id: 'b2-conj-01-ex13',
          type: 'qcm',
          question: 'Hypothèse irréelle complexe : "Si nous avions eu plus de temps, nous ___ terminer le projet." (pouvoir)',
          options: ['pouvons', 'pourrions', 'aurions pu', 'avions pu'],
          correctIndex: 2,
          explanation: '"Si nous avions eu plus de temps, nous AURIONS PU terminer..." Si + plus-que-parfait → conditionnel passé. "Aurions pu" = avoir (conditionnel présent, 1ère pers. pl.) + "pu" (PP de "pouvoir").',
        },
        {
          id: 'b2-conj-01-ex14',
          type: 'qcm',
          question: 'Pourquoi la 2ème forme du conditionnel passé est-elle si rare aujourd\'hui ?',
          options: [
            'Parce qu\'elle est grammaticalement incorrecte',
            'Parce qu\'elle a été progressivement remplacée par la forme standard dans l\'usage courant, ne survivant que dans certains textes littéraires classiques ou un style archaïsant volontaire',
            'Parce qu\'elle n\'a jamais existé en français',
            'Parce qu\'elle est réservée uniquement à l\'administration',
          ],
          correctIndex: 1,
          explanation: 'La 2ème forme a été PROGRESSIVEMENT REMPLACÉE par la forme STANDARD (avoir/être au conditionnel présent + PP) dans l\'usage courant au fil des siècles. Elle ne SURVIT aujourd\'hui que dans certains textes LITTÉRAIRES CLASSIQUES ou un style ARCHAÏSANT volontaire, d\'où son caractère de compétence de RECONNAISSANCE plutôt que de PRODUCTION.',
        },
        {
          id: 'b2-conj-01-ex15',
          type: 'qcm',
          question: 'Conditionnel passé négatif : "Sans votre aide, je ___ jamais réussi ce projet." (avoir)',
          options: ['n\'ai', 'n\'aurai', 'n\'aurais', 'n\'avais'],
          correctIndex: 2,
          explanation: '"Sans votre aide, je N\'AURAIS jamais réussi..." "Sans + nom" introduit une hypothèse implicite équivalente à "si je n\'avais pas eu votre aide" → conditionnel passé. "N\'aurais" = avoir (conditionnel présent, négatif).',
        },
        {
          id: 'b2-conj-01-ex16',
          type: 'qcm',
          question: 'Information non confirmée passée : "L\'accident ___ causé par une défaillance technique, selon les premiers éléments de l\'enquête." (être)',
          options: ['est', 'a été', 'aurait été', 'était'],
          correctIndex: 2,
          explanation: '"L\'accident AURAIT ÉTÉ causé par une défaillance technique..." Conditionnel passé pour une information NON CONFIRMÉE officiellement sur un fait déjà passé. "Selon les premiers éléments" introduit cette réserve typique du style journalistique d\'enquête en cours.',
        },
        {
          id: 'b2-conj-01-ex17',
          type: 'qcm',
          question: 'Conditionnel passé avec verbe pronominal : "Elle ___ mieux si elle s\'était reposée davantage." (se sentir)',
          options: ['se sent', 'se sentirait', 'se serait sentie', 's\'est sentie'],
          correctIndex: 2,
          explanation: '"Elle SE SERAIT SENTIE mieux..." Verbe pronominal → toujours "être" au conditionnel passé. "Se serait sentie" = se + être (conditionnel présent) + "sentie" (PP accordé féminin, accord réfléchi direct).',
        },
        {
          id: 'b2-conj-01-ex18',
          type: 'qcm',
          question: 'Quelle nuance le conditionnel passé apporte-t-il à "On aurait pu envisager une autre solution" par rapport à "On a oublié d\'envisager une autre solution" ?',
          options: [
            'Aucune différence de nuance',
            'Le conditionnel passé reste plus neutre et réflexif (constat sur une possibilité non exploitée), sans accusation directe, contrairement à "on a oublié" qui pointe une négligence',
            'Le conditionnel passé est plus accusateur',
            'Les deux phrases ont un sens opposé',
          ],
          correctIndex: 1,
          explanation: 'Le CONDITIONNEL PASSÉ ("on aurait pu envisager") reste plus NEUTRE et RÉFLEXIF — un simple constat sur une possibilité NON EXPLOITÉE, SANS accusation directe. "On a oublié" pointerait plus directement une NÉGLIGENCE. Cette nuance de TON est importante dans des contextes professionnels où l\'on souhaite éviter le blâme direct.',
        },
        {
          id: 'b2-conj-01-ex19',
          type: 'qcm',
          question: 'Conditionnel passé : "J\'___ aimé vous rencontrer plus tôt." (avoir)',
          options: ['ai', 'aurai', 'aurais', 'avais'],
          correctIndex: 2,
          explanation: '"J\'AURAIS aimé vous rencontrer plus tôt." Conditionnel passé : "aurais" (avoir, conditionnel présent) + "aimé" (PP). Exprime un REGRET sur une opportunité passée non réalisée, formule courante et polie.',
        },
        {
          id: 'b2-conj-01-ex20',
          type: 'qcm',
          question: 'Pourquoi est-il utile de savoir reconnaître la 2ème forme du conditionnel passé même si on ne l\'utilise jamais activement ?',
          options: [
            'Ce n\'est pas utile du tout',
            'Pour pouvoir lire et comprendre des textes littéraires classiques (XIXe siècle notamment) sans être bloqué par cette forme archaïque',
            'Parce qu\'elle est obligatoire à l\'examen de naturalisation',
            'Parce qu\'elle remplace désormais la forme standard',
          ],
          correctIndex: 1,
          explanation: 'Savoir RECONNAÎTRE cette forme permet de LIRE et COMPRENDRE des textes LITTÉRAIRES CLASSIQUES (XIXe siècle notamment, Balzac, Hugo...) sans être BLOQUÉ par cette forme ARCHAÏQUE peu familière. C\'est une compétence de COMPRÉHENSION passive, complémentaire à la maîtrise active de la forme standard moderne.',
        },
      ],
    },

    {
      id: 'b2-conj-02',
      slug: 'b2-passe-simple-complet',
      moduleSlug: 'b2-conjugaison',
      level: 'B2',
      title: 'Le passé simple — maîtrise complète',
      description: 'Reconnaître et comprendre le passé simple dans tous les contextes littéraires, historiques et journalistiques.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Le passé simple, temps du récit écrit

Le passé simple n'est plus utilisé à l'oral courant (remplacé par le passé composé), mais il reste essentiel à l'écrit narratif : romans, contes, biographies, articles historiques.

**Les 3 groupes de terminaisons**
| Groupe | Terminaisons | Exemple |
|---|---|---|
| 1er groupe (-er) | -ai, -as, -a, -âmes, -âtes, -èrent | il parl**a**, ils parl**èrent** |
| 2ème groupe (-ir) | -is, -is, -it, -îmes, -îtes, -irent | il fin**it**, ils fin**irent** |
| 3ème groupe (-re, irréguliers) | -is/-us, -is/-us, -it/-ut... | il vend**it** / il e**ut** |

**Les verbes irréguliers les plus fréquents (à reconnaître)**
| Infinitif | il/elle | ils/elles |
|---|---|---|
| être | fut | furent |
| avoir | eut | eurent |
| faire | fit | firent |
| dire | dit | dirent |
| voir | vit | virent |
| pouvoir | put | purent |
| vouloir | voulut | voulurent |
| savoir | sut | surent |
| devoir | dut | durent |
| écrire | écrivit | écrivirent |
| naître | naquit | naquirent |
| mourir | mourut | moururent |

**Pourquoi le passé simple reste-t-il important au niveau B2 ?**
Il structure le récit littéraire et les biographies, marquant des actions PONCTUELLES et ACHEVÉES dans le passé, par opposition à l'imparfait (description, durée).`,

      linguisticPoint: `## Point linguistique : Passé simple vs passé composé — la différence de fonction

### Le passé composé : temps du récit ORAL et de la communication courante
"Hier, je suis allé au marché." (oral, quotidien)

### Le passé simple : temps du récit ÉCRIT et littéraire
"Il alla au marché et y rencontra un vieil ami." (écrit narratif)

### Test de substitution pour reconnaître le passé simple
Si une forme verbale au passé ne ressemble à AUCUNE forme du présent et se termine en -a/-as/-a/-âmes/-âtes/-èrent (1er groupe) ou en -it/-irent (irréguliers) → c'est probablement le passé simple.

### Pourquoi ne PAS apprendre à le conjuguer activement (sauf 3ème personne) ?
Au niveau B2, l'objectif est la RECONNAISSANCE à la lecture, notamment à la 3ème personne (il/elle/ils/elles), la plus fréquente dans les récits. Produire activement le passé simple à toutes les personnes n'est pas un objectif prioritaire pour un apprenant non-natif, sauf désir d'écriture littéraire.`,

      keyPoints: [
        'Passé simple = temps du récit ÉCRIT/littéraire, jamais utilisé à l\'oral courant',
        '1er groupe (-er) : -a/-èrent / 2ème groupe (-ir) : -it/-irent',
        'Irréguliers fréquents : fut/eut/fit/dit/vit/put/sut/dut/écrivit/naquit/mourut',
        'Objectif B2 : RECONNAISSANCE à la lecture (surtout 3ème personne), pas production active à toutes les personnes',
        'Passé simple = action ponctuelle achevée / Imparfait = description, durée, habitude',
      ],

      exercises: [
        {
          id: 'b2-conj-02-ex01',
          type: 'qcm',
          question: 'Reconnaître le passé simple : "Il PARLA longuement de son projet." Quel est l\'infinitif ?',
          options: ['parler', 'parlir', 'parlirer', 'paroler'],
          correctIndex: 0,
          explanation: '"PARLA" = passé simple de PARLER (1er groupe, il/elle). Terminaison "-a" caractéristique du 1er groupe au passé simple : je parlai, tu parlas, il PARLA, nous parlâmes, vous parlâtes, ils parlèrent.',
        },
        {
          id: 'b2-conj-02-ex02',
          type: 'qcm',
          question: 'Reconnaître le passé simple : "Ils FURENT surpris par la nouvelle." Quel est l\'infinitif ?',
          options: ['faire', 'être', 'finir', 'avoir'],
          correctIndex: 1,
          explanation: '"FURENT" = passé simple d\'ÊTRE (ils/elles). Forme irrégulière à mémoriser pour la reconnaissance : je fus, tu fus, il fut, nous fûmes, vous fûtes, ils FURENT.',
        },
        {
          id: 'b2-conj-02-ex03',
          type: 'qcm',
          question: 'Reconnaître le passé simple : "Elle VIT un homme approcher." Quel est l\'infinitif ?',
          options: ['vivre', 'voir', 'viser', 'venir'],
          correctIndex: 1,
          explanation: '"VIT" = passé simple de VOIR (elle/il). Attention au piège : "vit" peut être présent de "vivre" (il vit = he lives) OU passé simple de "voir" (il vit = he saw) — seul le CONTEXTE permet de distinguer ces deux formes homographes.',
        },
        {
          id: 'b2-conj-02-ex04',
          type: 'qcm',
          question: 'Quelle est la différence fonctionnelle principale entre le passé simple et le passé composé ?',
          options: [
            'Aucune différence, ils sont parfaitement interchangeables',
            'Le passé composé est le temps du récit oral et courant, le passé simple celui du récit écrit et littéraire',
            'Le passé simple est utilisé uniquement au futur',
            'Le passé composé n\'existe qu\'à l\'écrit',
          ],
          correctIndex: 1,
          explanation: 'Le PASSÉ COMPOSÉ est le temps du récit ORAL et de la communication COURANTE ("hier, je suis allé..."). Le PASSÉ SIMPLE est réservé au récit ÉCRIT et LITTÉRAIRE ("il alla au marché..."). Cette distinction FONCTIONNELLE (et non de sens) est essentielle à comprendre.',
        },
        {
          id: 'b2-conj-02-ex05',
          type: 'qcm',
          question: 'Reconnaître le passé simple : "Le savant NAQUIT en 1850 et MOURUT en 1920." Quels sont les infinitifs ?',
          options: ['naître / mourir', 'naviguer / mourir', 'naître / mordre', 'narrer / mourir'],
          correctIndex: 0,
          explanation: '"NAQUIT" = passé simple de NAÎTRE (il/elle). "MOURUT" = passé simple de MOURIR (il/elle). Ces deux formes sont TRÈS fréquentes dans les biographies et récits historiques pour marquer naissance et mort.',
        },
        {
          id: 'b2-conj-02-ex06',
          type: 'qcm',
          question: 'Quelle terminaison caractérise le passé simple des verbes du 2ème groupe (-IR régulier) à la 3ème personne du singulier ?',
          options: ['-a', '-it', '-ut', '-int'],
          correctIndex: 1,
          explanation: 'Les verbes du 2ème groupe (-IR régulier comme "finir") ont la terminaison "-IT" à la 3ème personne du singulier au passé simple : il FINIT, il PARTIT, il SORTIT. Ne pas confondre avec le passé composé ("il a fini") ou le présent ("il finit").',
        },
        {
          id: 'b2-conj-02-ex07',
          type: 'qcm',
          question: 'Reconnaître le passé simple : "Les soldats DURENT abandonner leur position." Quel est l\'infinitif ?',
          options: ['durer', 'devoir', 'durcir', 'durir'],
          correctIndex: 1,
          explanation: '"DURENT" = passé simple de DEVOIR (ils/elles), PAS de "durer" (qui donnerait "durèrent"). Piège fréquent : "durent" (devoir, passé simple) vs "durèrent" (durer, passé simple) — formes proches mais distinctes.',
        },
        {
          id: 'b2-conj-02-ex08',
          type: 'qcm',
          question: 'Au niveau B2, quel est l\'objectif principal concernant le passé simple ?',
          options: [
            'Le conjuguer activement à toutes les personnes dans la conversation orale',
            'Le reconnaître à la lecture, notamment à la 3ème personne (il/elle/ils/elles), la plus fréquente dans les récits',
            'L\'éviter complètement car il est obsolète',
            'L\'utiliser systématiquement à la place du passé composé à l\'oral',
          ],
          correctIndex: 1,
          explanation: 'L\'objectif au niveau B2 est la RECONNAISSANCE à la lecture, en particulier à la 3ÈME PERSONNE (il/elle/ils/elles), la plus FRÉQUENTE dans les récits littéraires, historiques et biographiques. La PRODUCTION active à toutes les personnes n\'est pas prioritaire pour un apprenant non-natif (sauf objectif d\'écriture littéraire spécifique).',
        },
        {
          id: 'b2-conj-02-ex09',
          type: 'qcm',
          question: 'Reconnaître le passé simple : "Elle ÉCRIVIT plusieurs romans avant de devenir célèbre." Quel est l\'infinitif ?',
          options: ['écrire', 'écrier', 'écriver', 'écrir'],
          correctIndex: 0,
          explanation: '"ÉCRIVIT" = passé simple d\'ÉCRIRE (elle/il). Forme irrégulière : j\'écrivis, tu écrivis, il ÉCRIVIT, nous écrivîmes, vous écrivîtes, ils écrivirent. Verbe fréquent dans les biographies d\'écrivains.',
        },
        {
          id: 'b2-conj-02-ex10',
          type: 'qcm',
          question: 'Reconnaître le passé simple : "Ils VOULURENT changer les règles, mais ils ne PURENT pas." Quels sont les infinitifs ?',
          options: ['vouloir / pouvoir', 'voler / purger', 'vouer / purifier', 'voiler / pouvoir'],
          correctIndex: 0,
          explanation: '"VOULURENT" = passé simple de VOULOIR (ils/elles). "PURENT" = passé simple de POUVOIR (ils/elles). Ces deux verbes irréguliers très courants apparaissent fréquemment ensemble dans les récits décrivant des tentatives de changement.',
        },
        {
          id: 'b2-conj-02-ex11',
          type: 'qcm',
          question: 'Quelle terminaison caractérise le passé simple des verbes du 1er groupe (-ER) à la 3ème personne du pluriel ?',
          options: ['-ent', '-irent', '-èrent', '-urent'],
          correctIndex: 2,
          explanation: 'Les verbes du 1er groupe (-ER) ont la terminaison "-ÈRENT" à la 3ème personne du pluriel au passé simple : ils PARLÈRENT, ils MANGÈRENT, ils DÉCIDÈRENT. Distinct du présent ("ils parlent") et du passé composé ("ils ont parlé").',
        },
        {
          id: 'b2-conj-02-ex12',
          type: 'qcm',
          question: 'Reconnaître le passé simple : "Le roi EUT un fils, qui DEVINT plus tard un grand souverain." Quels sont les infinitifs ?',
          options: ['avoir / devenir', 'être / devoir', 'avoir / devoir', 'être / venir'],
          correctIndex: 0,
          explanation: '"EUT" = passé simple d\'AVOIR (il/elle). "DEVINT" = passé simple de DEVENIR (il/elle, comme "venir" → "vint", avec préfixe "de-"). Formes typiques des récits historiques et de chroniques royales.',
        },
        {
          id: 'b2-conj-02-ex13',
          type: 'qcm',
          question: 'Dans quel type de texte le passé simple est-il le PLUS fréquent ?',
          options: [
            'Les SMS entre amis',
            'Les romans, contes, biographies et articles historiques',
            'Les conversations téléphoniques informelles',
            'Les listes de courses',
          ],
          correctIndex: 1,
          explanation: 'Le passé simple est le temps PRIVILÉGIÉ des ROMANS, CONTES, BIOGRAPHIES et ARTICLES HISTORIQUES — tout texte NARRATIF ÉCRIT qui relate des événements PASSÉS de façon SOUTENUE. Il n\'apparaît JAMAIS dans la communication ORALE courante ou informelle (SMS, conversations).',
        },
        {
          id: 'b2-conj-02-ex14',
          type: 'qcm',
          question: 'Reconnaître le passé simple : "Elle SUT immédiatement quoi faire." Quel est l\'infinitif ?',
          options: ['savoir', 'suivre', 'subir', 'suer'],
          correctIndex: 0,
          explanation: '"SUT" = passé simple de SAVOIR (elle/il). Forme irrégulière : je sus, tu sus, il/elle SUT, nous sûmes, vous sûtes, ils surent. À distinguer de "suivit" (passé simple de "suivre").',
        },
        {
          id: 'b2-conj-02-ex15',
          type: 'qcm',
          question: 'Pourquoi le passé simple est-il considéré comme marquant des actions "ponctuelles et achevées", par opposition à l\'imparfait ?',
          options: [
            'Il n\'y a aucune différence de fonction entre les deux temps',
            'Le passé simple présente une action comme un événement délimité dans le temps (début et fin clairs), tandis que l\'imparfait décrit un état, une habitude ou une action en cours sans limite précise',
            'L\'imparfait marque toujours des actions plus importantes',
            'Le passé simple ne s\'utilise jamais avec des verbes d\'action',
          ],
          correctIndex: 1,
          explanation: 'Le PASSÉ SIMPLE présente une action comme un ÉVÉNEMENT DÉLIMITÉ (avec un début et une fin clairs, ponctuel dans le récit) : "il ENTRA dans la pièce." L\'IMPARFAIT décrit un ÉTAT, une HABITUDE ou une action EN COURS, sans limite temporelle précise : "il ENTRAIT souvent dans cette pièce" (habitude) ou "la pièce ÉTAIT sombre" (description).',
        },
        {
          id: 'b2-conj-02-ex16',
          type: 'qcm',
          question: 'Reconnaître le passé simple : "Ils DIRENT au revoir et PARTIRENT." Quels sont les infinitifs ?',
          options: ['dire / partir', 'durer / partager', 'dîner / parler', 'donner / porter'],
          correctIndex: 0,
          explanation: '"DIRENT" = passé simple de DIRE (ils/elles). "PARTIRENT" = passé simple de PARTIR (ils/elles, verbe régulier du type "-IR" simple comme "sortir"). Ces formes marquent deux actions SUCCESSIVES et PONCTUELLES dans un récit.',
        },
        {
          id: 'b2-conj-02-ex17',
          type: 'qcm',
          question: 'Quel est le piège de la forme "il vit" en passé simple ?',
          options: [
            'Cette forme n\'existe pas en français',
            'Elle peut être confondue avec le présent de "vivre" (il vit = he lives), seul le contexte permettant de distinguer "il vit" (voir, passé simple) de "il vit" (vivre, présent)',
            'Cette forme n\'a aucune ambiguïté possible',
            'Elle ne s\'applique qu\'au verbe "voir"',
          ],
          correctIndex: 1,
          explanation: '"IL VIT" est une forme HOMOGRAPHE : elle peut être le PRÉSENT de "vivre" (he lives) OU le PASSÉ SIMPLE de "voir" (he saw). Seul le CONTEXTE de la phrase permet de lever cette AMBIGUÏTÉ ("Il vit à Paris" = présent/vivre ; "Il vit un homme" = passé simple/voir).',
        },
        {
          id: 'b2-conj-02-ex18',
          type: 'qcm',
          question: 'Reconnaître le passé simple : "L\'explorateur DÉCOUVRIT une nouvelle île en 1503." Quel est l\'infinitif ?',
          options: ['découvrir', 'décrire', 'décourir', 'découper'],
          correctIndex: 0,
          explanation: '"DÉCOUVRIT" = passé simple de DÉCOUVRIR (il/elle, verbe régulier du type "-IR" comme "finir" : il finIT/il découvrIT). Forme très fréquente dans les récits historiques d\'exploration.',
        },
        {
          id: 'b2-conj-02-ex19',
          type: 'qcm',
          question: 'Pourquoi est-il important pour un apprenant B2 de bien reconnaître le passé simple, même sans le produire activement ?',
          options: [
            'Ce n\'est pas important du tout',
            'Pour pouvoir lire avec aisance la littérature française, les biographies et les articles historiques sans être bloqué par des formes verbales non reconnues',
            'Parce que c\'est obligatoire de l\'utiliser dans toute conversation',
            'Parce que le passé composé va bientôt disparaître du français',
          ],
          correctIndex: 1,
          explanation: 'La reconnaissance du passé simple permet de LIRE avec AISANCE la LITTÉRATURE française, les BIOGRAPHIES et les ARTICLES HISTORIQUES (très présents dans la culture générale française) SANS être BLOQUÉ par des formes verbales NON RECONNUES, ce qui élargit considérablement l\'accès à la culture écrite française.',
        },
        {
          id: 'b2-conj-02-ex20',
          type: 'qcm',
          question: 'En synthèse, quelle est la stratégie d\'apprentissage recommandée pour le passé simple au niveau B2 ?',
          options: [
            'Mémoriser parfaitement toutes les conjugaisons à toutes les personnes pour tous les verbes',
            'Se concentrer sur la reconnaissance des formes à la 3ème personne (singulier/pluriel) pour les verbes les plus fréquents, en priorisant la compréhension de lecture plutôt que la production active',
            'Ignorer complètement ce temps car il est obsolète',
            'Apprendre uniquement les verbes du 1er groupe',
          ],
          correctIndex: 1,
          explanation: 'La stratégie RECOMMANDÉE consiste à se concentrer sur la RECONNAISSANCE des formes à la 3ÈME PERSONNE (singulier/pluriel — les plus fréquentes dans les récits) pour les VERBES LES PLUS COURANTS (être, avoir, faire, dire, voir, pouvoir, vouloir, savoir, devoir...), en priorisant la COMPRÉHENSION DE LECTURE plutôt que la production active complète à toutes les personnes.',
        },
      ],
    },

    {
      id: 'b2-conj-03',
      slug: 'b2-concordance-discours-indirect',
      moduleSlug: 'b2-conjugaison',
      level: 'B2',
      title: 'La concordance des temps dans le discours indirect',
      description: 'Maîtriser le système complet de transformation des temps lors du passage au discours indirect.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Le système complet de la concordance des temps

Rapporter des paroles au passé exige de transformer SYSTÉMATIQUEMENT les temps du discours direct selon des règles précises.

**Tableau complet de transformation (verbe introducteur au passé)**
| Discours direct | Discours indirect (au passé) |
|---|---|
| Présent : "Je **pars**." | Imparfait : Il a dit qu'il **partait**. |
| Passé composé : "J'**ai fini**." | Plus-que-parfait : Il a dit qu'il **avait fini**. |
| Imparfait : "J'**étais** content." | Imparfait (inchangé) : Il a dit qu'il **était** content. |
| Futur simple : "Je **partirai**." | Conditionnel présent : Il a dit qu'il **partirait**. |
| Futur antérieur : "J'**aurai fini**." | Conditionnel passé : Il a dit qu'il **aurait fini**. |
| Plus-que-parfait : "J'**avais fini**." | Plus-que-parfait (inchangé) : Il a dit qu'il **avait fini**. |
| Conditionnel : "Je **partirais**." | Conditionnel (inchangé) : Il a dit qu'il **partirait**. |

**Règle d'or : si le verbe introducteur est au PRÉSENT, AUCUNE transformation n'est nécessaire**
"Il **dit** qu'il **part**." (présent → présent, pas de changement)

**Cas particulier : vérité générale ou fait scientifique intemporel**
Le présent peut rester INCHANGÉ même après un verbe introducteur au passé, si l'énoncé exprime une VÉRITÉ GÉNÉRALE :
"Galilée a affirmé que la Terre **tourne** autour du Soleil." (fait toujours vrai, pas de transformation nécessaire)`,

      linguisticPoint: `## Point linguistique : Les changements d'indicateurs temporels et spatiaux

### Tableau des transformations d'indicateurs (rappel structuré)
| Discours direct | Discours indirect (au passé) |
|---|---|
| aujourd'hui | ce jour-là |
| hier | la veille |
| demain | le lendemain |
| avant-hier | l'avant-veille |
| après-demain | le surlendemain |
| maintenant | à ce moment-là / alors |
| ici | là |
| ce... -ci | ce... -là |

### Exemple complet de transformation
Direct : "Je viendrai **demain**, **ici**, car je suis libre **maintenant**."
Indirect (au passé) : Il a dit qu'il viendrait **le lendemain**, **là**, car il était libre **à ce moment-là**.

### Piège : ne pas transformer systématiquement sans réfléchir au sens
Si le moment du rapport coïncide avec le moment annoncé, certains indicateurs peuvent rester inchangés selon le contexte précis (cas plus rares, à manier avec discernement).`,

      keyPoints: [
        'Présent → imparfait / PC → plus-que-parfait / futur → conditionnel présent / futur antérieur → conditionnel passé',
        'Imparfait, plus-que-parfait et conditionnel restent INCHANGÉS dans la transformation',
        'Verbe introducteur au PRÉSENT = aucune transformation nécessaire',
        'Vérité générale/fait scientifique = le présent peut rester inchangé même après verbe introducteur au passé',
        'Indicateurs : demain→le lendemain / hier→la veille / maintenant→à ce moment-là / ici→là',
      ],

      exercises: [
        {
          id: 'b2-conj-03-ex01',
          type: 'qcm',
          question: 'Discours indirect : "Je pars." → Il a dit qu\'il ___.',
          options: ['part', 'partait', 'partirait', 'était parti'],
          correctIndex: 1,
          explanation: '"Il a dit qu\'il PARTAIT." Présent → IMPARFAIT dans le discours indirect au passé. "Pars" (présent) → "partait" (imparfait).',
        },
        {
          id: 'b2-conj-03-ex02',
          type: 'qcm',
          question: 'Discours indirect : "J\'ai fini mon travail." → Il a dit qu\'il ___ son travail.',
          options: ['finissait', 'avait fini', 'finirait', 'aurait fini'],
          correctIndex: 1,
          explanation: '"Il a dit qu\'il AVAIT FINI son travail." Passé composé → PLUS-QUE-PARFAIT dans le discours indirect au passé. "Ai fini" (PC) → "avait fini" (PQP).',
        },
        {
          id: 'b2-conj-03-ex03',
          type: 'qcm',
          question: 'Discours indirect : "Je partirai demain." → Il a dit qu\'il ___ le lendemain.',
          options: ['partait', 'partirait', 'était parti', 'aurait parti'],
          correctIndex: 1,
          explanation: '"Il a dit qu\'il PARTIRAIT le lendemain." Futur simple → CONDITIONNEL PRÉSENT. "Partirai" (futur) → "partirait" (conditionnel). "Demain" → "le lendemain".',
        },
        {
          id: 'b2-conj-03-ex04',
          type: 'qcm',
          question: 'Discours indirect : "J\'aurai terminé avant midi." → Il a dit qu\'il ___ avant midi.',
          options: ['terminait', 'avait terminé', 'aurait terminé', 'terminerait'],
          correctIndex: 2,
          explanation: '"Il a dit qu\'il AURAIT TERMINÉ avant midi." Futur antérieur → CONDITIONNEL PASSÉ dans le discours indirect au passé. "Aurai terminé" (FA) → "aurait terminé" (conditionnel passé).',
        },
        {
          id: 'b2-conj-03-ex05',
          type: 'qcm',
          question: 'Discours indirect : "J\'étais fatigué hier." → Il a dit qu\'il ___ fatigué la veille.',
          options: ['est', 'était', 'serait', 'avait été'],
          correctIndex: 1,
          explanation: '"Il a dit qu\'il ÉTAIT fatigué la veille." IMPARFAIT reste INCHANGÉ dans le discours indirect (déjà un temps "éloigné" du présent). "Hier" → "la veille".',
        },
        {
          id: 'b2-conj-03-ex06',
          type: 'qcm',
          question: 'Si le verbe introducteur est au PRÉSENT ("il dit que"), que se passe-t-il pour le temps de la subordonnée ?',
          options: [
            'Une transformation systématique est toujours nécessaire',
            'Aucune transformation n\'est nécessaire, le temps reste identique à celui du discours direct',
            'Le temps devient toujours le passé composé',
            'Le temps devient toujours le subjonctif',
          ],
          correctIndex: 1,
          explanation: 'Si le verbe introducteur est au PRÉSENT ("il dit que"), AUCUNE TRANSFORMATION temporelle n\'est nécessaire — le temps de la subordonnée reste IDENTIQUE à celui du discours direct. "Il dit qu\'il PART" (présent → présent, pas de changement).',
        },
        {
          id: 'b2-conj-03-ex07',
          type: 'qcm',
          question: 'Indicateur temporel : "demain" devient ___ dans le discours indirect au passé.',
          options: ['hier', 'la veille', 'le lendemain', 'maintenant'],
          correctIndex: 2,
          explanation: '"Demain" → "LE LENDEMAIN" dans le discours indirect au passé. Ce changement reflète le déplacement du point de référence temporel : on ne parle plus du jour suivant le moment de l\'énonciation actuelle, mais du jour suivant le moment RAPPORTÉ.',
        },
        {
          id: 'b2-conj-03-ex08',
          type: 'qcm',
          question: 'Vérité générale : "Galilée a affirmé que la Terre tourne autour du Soleil." Pourquoi "tourne" reste-t-il au présent malgré le verbe introducteur au passé composé ?',
          options: [
            'C\'est une erreur grammaticale',
            'Parce que c\'est une vérité générale/un fait scientifique intemporel, qui reste vrai indépendamment du moment de l\'énonciation',
            'Parce que le passé composé n\'impose jamais de transformation',
            'Parce que "tourner" est un verbe irrégulier qui ne change jamais',
          ],
          correctIndex: 1,
          explanation: 'Quand l\'énoncé exprime une VÉRITÉ GÉNÉRALE ou un FAIT SCIENTIFIQUE INTEMPOREL (la Terre tourne TOUJOURS autour du Soleil, indépendamment du moment où on en parle), le PRÉSENT peut rester INCHANGÉ même après un verbe introducteur au passé. C\'est une EXCEPTION à la règle générale de concordance.',
        },
        {
          id: 'b2-conj-03-ex09',
          type: 'qcm',
          question: 'Discours indirect : "Je viendrais si j\'avais le temps." → Il a dit qu\'il ___ s\'il avait le temps.',
          options: ['vient', 'venait', 'viendrait', 'serait venu'],
          correctIndex: 2,
          explanation: '"Il a dit qu\'il VIENDRAIT s\'il avait le temps." Le CONDITIONNEL reste INCHANGÉ dans le discours indirect au passé (déjà un temps qui exprime l\'hypothèse, indépendant du repère temporel de l\'énonciation).',
        },
        {
          id: 'b2-conj-03-ex10',
          type: 'qcm',
          question: 'Indicateur spatial : "ici" devient ___ dans le discours indirect au passé.',
          options: ['là-bas', 'là', 'maintenant', 'ailleurs'],
          correctIndex: 1,
          explanation: '"Ici" → "LÀ" dans le discours indirect au passé. Ce changement reflète le déplacement du point de vue : on ne parle plus du lieu où se trouve le locuteur ACTUEL, mais du lieu mentionné dans le discours RAPPORTÉ.',
        },
        {
          id: 'b2-conj-03-ex11',
          type: 'qcm',
          question: 'Discours indirect : "J\'avais terminé avant son arrivée." → Il a dit qu\'il ___ avant son arrivée.',
          options: ['terminait', 'avait terminé', 'aurait terminé', 'termine'],
          correctIndex: 1,
          explanation: '"Il a dit qu\'il AVAIT TERMINÉ avant son arrivée." Le PLUS-QUE-PARFAIT reste INCHANGÉ dans le discours indirect au passé (déjà le temps le plus reculé dans le système des temps du passé, pas besoin de transformation supplémentaire).',
        },
        {
          id: 'b2-conj-03-ex12',
          type: 'qcm',
          question: 'Indicateur temporel : "avant-hier" devient ___ dans le discours indirect au passé.',
          options: ['la veille', 'l\'avant-veille', 'le surlendemain', 'ce jour-là'],
          correctIndex: 1,
          explanation: '"Avant-hier" → "L\'AVANT-VEILLE" dans le discours indirect au passé. Forme moins fréquente mais à connaître pour une concordance précise : avant-hier (2 jours avant aujourd\'hui) → l\'avant-veille (2 jours avant le jour de référence rapporté).',
        },
        {
          id: 'b2-conj-03-ex13',
          type: 'qcm',
          question: 'Discours indirect avec verbe introducteur au présent : "Elle annonce : \'Je suis enceinte.\'" → Elle annonce qu\'elle ___ enceinte.',
          options: ['est', 'était', 'serait', 'avait été'],
          correctIndex: 0,
          explanation: '"Elle annonce qu\'elle EST enceinte." Verbe introducteur au PRÉSENT ("annonce") → AUCUNE transformation temporelle nécessaire. Le présent du discours direct reste présent dans le discours indirect.',
        },
        {
          id: 'b2-conj-03-ex14',
          type: 'qcm',
          question: 'Indicateur temporel : "après-demain" devient ___ dans le discours indirect au passé.',
          options: ['le lendemain', 'l\'avant-veille', 'le surlendemain', 'la veille'],
          correctIndex: 2,
          explanation: '"Après-demain" → "LE SURLENDEMAIN" dans le discours indirect au passé. Symétrique de "avant-hier" → "l\'avant-veille" : tous deux décalent de 2 jours, mais dans des directions opposées (avant/après).',
        },
        {
          id: 'b2-conj-03-ex15',
          type: 'qcm',
          question: 'Discours indirect complexe : "Je serai parti quand vous arriverez." → Il a dit qu\'il ___ parti quand nous ___.',
          options: [
            'serait / arriverions',
            'était / arrivions',
            'sera / arriverons',
            'serait / arriverons',
          ],
          correctIndex: 0,
          explanation: '"Il a dit qu\'il SERAIT parti quand nous ARRIVERIONS." Futur antérieur → conditionnel passé ("serait parti") ; futur simple (dans la subordonnée temporelle) → conditionnel présent ("arriverions"). Les deux verbes de la phrase complexe suivent la même règle de transformation.',
        },
        {
          id: 'b2-conj-03-ex16',
          type: 'qcm',
          question: 'Indicateur temporel : "maintenant" devient généralement ___ dans le discours indirect au passé.',
          options: ['demain', 'à ce moment-là', 'aujourd\'hui', 'bientôt'],
          correctIndex: 1,
          explanation: '"Maintenant" → "À CE MOMENT-LÀ" (ou "alors") dans le discours indirect au passé. Ce changement déplace la référence temporelle du moment ACTUEL de l\'énonciation vers le moment PASSÉ dont on parle.',
        },
        {
          id: 'b2-conj-03-ex17',
          type: 'qcm',
          question: 'Pourquoi est-il important de transformer non seulement les TEMPS verbaux mais aussi les INDICATEURS temporels/spatiaux dans le discours indirect au passé ?',
          options: [
            'Ce n\'est pas important, seuls les temps verbaux comptent',
            'Parce que sans cette double transformation, le sens temporel et spatial du message rapporté serait incohérent ou ambigu par rapport au moment et au lieu du rapport',
            'Parce que les indicateurs n\'ont aucun rapport avec la concordance des temps',
            'Parce que c\'est plus simple de tout laisser inchangé',
          ],
          correctIndex: 1,
          explanation: 'Sans cette DOUBLE TRANSFORMATION (temps verbaux ET indicateurs), le sens TEMPOREL et SPATIAL du message RAPPORTÉ serait INCOHÉRENT ou AMBIGU par rapport au moment et au lieu RÉELS du rapport. Par exemple, garder "demain" alors qu\'on rapporte les propos plusieurs jours après créerait une confusion sur la date réellement visée.',
        },
        {
          id: 'b2-conj-03-ex18',
          type: 'qcm',
          question: 'Discours indirect : "Je voudrais vous parler." → Elle a dit qu\'elle ___ nous parler.',
          options: ['veut', 'voulait', 'voudrait', 'aurait voulu'],
          correctIndex: 2,
          explanation: '"Elle a dit qu\'elle VOUDRAIT nous parler." Le CONDITIONNEL ("voudrais") reste INCHANGÉ dans le discours indirect au passé. "Vous" devient "nous" (changement de référent selon qui rapporte les propos).',
        },
        {
          id: 'b2-conj-03-ex19',
          type: 'qcm',
          question: 'Quelle compétence cette maîtrise de la concordance complète développe-t-elle, particulièrement utile pour les comptes rendus et synthèses ?',
          options: [
            'La simple mémorisation mécanique d\'un tableau de transformation sans réflexion',
            'La capacité à restituer fidèlement, dans un nouveau cadre temporel et spatial, des propos tenus à un moment différent, en préservant leur sens exact',
            'La capacité à éviter complètement de rapporter les propos d\'autrui',
            'La capacité à toujours utiliser le présent quel que soit le contexte',
          ],
          correctIndex: 1,
          explanation: 'Cette maîtrise permet de RESTITUER FIDÈLEMENT, dans un NOUVEAU CADRE temporel et spatial (le moment et le lieu du RAPPORT), des propos tenus à un MOMENT DIFFÉRENT, en PRÉSERVANT leur SENS EXACT. Compétence ESSENTIELLE pour les comptes rendus de réunion, synthèses, ou tout récit rapportant fidèlement des paroles antérieures.',
        },
        {
          id: 'b2-conj-03-ex20',
          type: 'qcm',
          question: 'Récapitulatif : transformez "Je pense que j\'aurai fini avant ce soir" rapporté hier au passé.',
          options: [
            '"Il a dit qu\'il pensait qu\'il aurait fini avant ce soir-là."',
            '"Il a dit qu\'il pense qu\'il aura fini avant ce soir."',
            '"Il dit qu\'il pensait qu\'il a fini avant ce soir."',
            '"Il a dit qu\'il pensait qu\'il finissait avant ce soir-là."',
          ],
          correctIndex: 0,
          explanation: '"Il a dit qu\'il PENSAIT qu\'il AURAIT FINI avant CE SOIR-LÀ." Transformation complète : "pense" (présent) → "pensait" (imparfait) ; "aurai fini" (futur antérieur) → "aurait fini" (conditionnel passé) ; "ce soir" → "ce soir-là" (déplacement de référence temporelle).',
        },
      ],
    },

    {
      id: 'b2-conj-04',
      slug: 'b2-accords-participe-passe-complexes',
      moduleSlug: 'b2-conjugaison',
      level: 'B2',
      title: 'Les accords complexes du participe passé',
      description: 'Maîtriser les cas difficiles d\'accord : COD avant le verbe, verbes pronominaux, "en", infinitif.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Les accords du participe passé qui posent problème

Si l'accord de base (avec "être" : accord sujet ; avec "avoir" : pas d'accord sauf COD avant) est connu dès le niveau intermédiaire, certains cas restent complexes même à un niveau avancé.

**Cas 1 — COD avant le verbe avec "avoir"**
"J'ai acheté des fleurs." (pas d'accord, COD après)
"Les fleurs que j'ai **achetées**." (accord, COD "que" = fleurs, placé avant)
"Combien de fleurs as-tu **achetées** ?" (accord, COD "combien de fleurs" avant)

**Cas 2 — Verbes pronominaux : direct vs indirect**
"Ils se sont **lavés**." (se laver = laver SOI, COD direct → accord)
"Ils se sont **lavé** les mains." (COD = "les mains", placé APRÈS → pas d'accord du PP, même si pronominal !)
"Elles se sont **téléphoné**." (téléphoner À quelqu'un = COI → pas d'accord)

**Cas 3 — Participe passé suivi d'un infinitif**
"Je les ai **vus** partir." (accord : "les" = sujet de "partir", COD de "vus")
"Je les ai **entendu** chanter." (pas d'accord si "les" est COD de "chanter", pas de "entendu" — nuance subtile)

**Cas 4 — "En" comme COD : généralement pas d'accord**
"Des pommes, j'en ai **mangé**." (pas d'accord avec "en", qui reste neutre/invariable dans cet usage)`,

      linguisticPoint: `## Point linguistique : Le test de la question pour l'accord avec "avoir"

### Méthode pratique
1. Identifier le COD du verbe (répondre à la question "quoi ?" ou "qui ?")
2. Vérifier si ce COD est placé AVANT ou APRÈS le verbe
3. Si AVANT → accord du participe passé avec ce COD
4. Si APRÈS (ou pas de COD) → pas d'accord

### Application au cas du verbe pronominal
"Ils se sont lavé LES MAINS." → Question : "ont lavé QUOI ?" → "les mains" (COD)
"Les mains" est placé APRÈS le verbe → PAS D'ACCORD (donc "lavé", pas "lavés")

### Application au participe + infinitif
"Je les ai vus partir." → Question : "ai vu QUI/QUOI ?" → réponse : "les" (= ce sont EUX qui partent, "les" est sujet logique de "partir" et COD de "vus")
→ Accord car "les" est bien le COD de "ai vus" placé avant

### Piège classique : "fait" + infinitif reste TOUJOURS invariable
"Je les ai **fait** travailler." (jamais d'accord avec "faire causatif" + infinitif, règle fixe sans exception)`,

      keyPoints: [
        'Avec "avoir" : accord SEULEMENT si le COD est placé AVANT le verbe',
        'Verbe pronominal : accord si COD direct ("se sont lavés") / pas d\'accord si COD après ("se sont lavé LES MAINS")',
        'Pronominal indirect (téléphoner À, parler À, sourire À) : JAMAIS d\'accord ("se sont téléphoné")',
        'PP + infinitif : accord si le pronom est COD du PP et sujet logique de l\'infinitif (vus partir) ',
        '"Faire" causatif + infinitif = TOUJOURS invariable ("je les ai fait travailler")',
      ],

      exercises: [
        {
          id: 'b2-conj-04-ex01',
          type: 'qcm',
          question: 'Accord COD avant : "Les fleurs que j\'ai ___ ." (acheter)',
          options: ['acheté', 'achetés', 'achetée', 'achetées'],
          correctIndex: 3,
          explanation: '"Les fleurs que j\'ai ACHETÉES." COD "que" = "les fleurs" (fém. pl.), placé AVANT le verbe → accord. "Achetées" (+ es, féminin pluriel).',
        },
        {
          id: 'b2-conj-04-ex02',
          type: 'qcm',
          question: 'Verbe pronominal direct : "Elles se sont ___ ." (laver, se laver elles-mêmes = COD direct)',
          options: ['lavé', 'lavés', 'lavée', 'lavées'],
          correctIndex: 3,
          explanation: '"Elles se sont LAVÉES." "Se laver" (laver SOI-MÊME) = COD direct (se = COD). Accord avec le sujet "elles" (fém. pl.) → "lavées".',
        },
        {
          id: 'b2-conj-04-ex03',
          type: 'qcm',
          question: 'Verbe pronominal + COD après : "Elles se sont ___ les mains." (laver)',
          options: ['lavé', 'lavés', 'lavée', 'lavées'],
          correctIndex: 0,
          explanation: '"Elles se sont LAVÉ les mains." Ici, "les mains" est le COD, placé APRÈS le verbe → PAS D\'ACCORD (même si le verbe est pronominal). "Lavé" reste invariable malgré le sujet féminin pluriel.',
        },
        {
          id: 'b2-conj-04-ex04',
          type: 'qcm',
          question: 'Pronominal indirect (jamais d\'accord) : "Elles se sont ___ ." (téléphoner, téléphoner À quelqu\'un = COI)',
          options: ['téléphoné', 'téléphonés', 'téléphonée', 'téléphonées'],
          correctIndex: 0,
          explanation: '"Elles se sont TÉLÉPHONÉ." "Téléphoner À quelqu\'un" = construction avec COI (pas COD) → JAMAIS d\'accord, même au pronominal réciproque. "Téléphoné" reste invariable.',
        },
        {
          id: 'b2-conj-04-ex05',
          type: 'qcm',
          question: 'PP + infinitif avec accord : "Je les ai ___ partir." (voir, "les" = sujet logique de "partir")',
          options: ['vu', 'vus', 'vue', 'vues'],
          correctIndex: 1,
          explanation: '"Je les ai VUS partir." "Les" est COD de "ai vus" ET sujet logique de "partir" (= je les ai vus EN TRAIN DE partir) → accord. "Vus" (masc. pl., accord avec "les" représentant des personnes masculines ou mixtes).',
        },
        {
          id: 'b2-conj-04-ex06',
          type: 'qcm',
          question: '"Faire" causatif + infinitif : "Je les ai ___ travailler." (faire, toujours invariable)',
          options: ['fait', 'faits', 'faite', 'faites'],
          correctIndex: 0,
          explanation: '"Je les ai FAIT travailler." "Faire" causatif + infinitif = TOUJOURS INVARIABLE, sans exception. "Fait" reste invariable même si "les" est féminin pluriel — règle fixe à mémoriser.',
        },
        {
          id: 'b2-conj-04-ex07',
          type: 'qcm',
          question: '"En" comme COD : "Des pommes, j\'en ai ___ ." (manger, "en" généralement invariable)',
          options: ['mangé', 'mangés', 'mangée', 'mangées'],
          correctIndex: 0,
          explanation: '"Des pommes, j\'en ai MANGÉ." Avec "en" comme COD, le participe passé reste GÉNÉRALEMENT INVARIABLE (règle traditionnelle, bien que des variations existent dans l\'usage). "Mangé" reste à la forme de base.',
        },
        {
          id: 'b2-conj-04-ex08',
          type: 'qcm',
          question: 'Test de la question : "Combien de lettres ___ -tu reçues ?" (avoir)',
          options: ['as', 'a', 'avez', 'ont'],
          correctIndex: 0,
          explanation: '"Combien de lettres AS-tu reçues ?" (2ème pers. sing.). Le COD "combien de lettres" est placé AVANT le verbe → "reçues" accordé (féminin pluriel). "As" = avoir au présent, 2ème pers. sing.',
        },
        {
          id: 'b2-conj-04-ex09',
          type: 'qcm',
          question: 'Pronominal avec COD direct pluriel : "Ils se sont ___ ." (rencontrer, sens réciproque direct)',
          options: ['rencontré', 'rencontrés', 'rencontrée', 'rencontrées'],
          correctIndex: 1,
          explanation: '"Ils se sont RENCONTRÉS." "Se rencontrer" (rencontrer L\'UN L\'AUTRE) = COD direct réciproque → accord avec le sujet "ils" (masc. pl.) → "rencontrés".',
        },
        {
          id: 'b2-conj-04-ex10',
          type: 'qcm',
          question: 'Quelle est la méthode pour déterminer l\'accord d\'un participe passé avec "avoir" ?',
          options: [
            'Toujours accorder avec le sujet de la phrase',
            'Identifier le COD du verbe et vérifier s\'il est placé avant ou après le verbe : accord seulement si COD avant',
            'Ne jamais accorder, quel que soit le contexte',
            'Accorder uniquement si le verbe est à la première personne',
          ],
          correctIndex: 1,
          explanation: 'La méthode consiste à IDENTIFIER le COD du verbe et à vérifier sa POSITION : si le COD est placé AVANT le verbe (pronom relatif "que", COD pronominalisé "les/la/le", interrogatif "combien de...") → ACCORD. Si le COD est APRÈS (ou absent) → PAS D\'ACCORD.',
        },
        {
          id: 'b2-conj-04-ex11',
          type: 'qcm',
          question: 'PP + infinitif SANS accord : "Je les ai entendu chanter." (si "les" = COD de "chanter", pas de "entendu")',
          options: [
            'L\'accord est obligatoire dans tous les cas',
            'Pas d\'accord car "les" est ici COD de "chanter" (ce sont les chansons qu\'on entend chanter), pas de "entendu" lui-même',
            'L\'accord dépend uniquement du genre',
            'C\'est toujours une erreur de ne pas accorder',
          ],
          correctIndex: 1,
          explanation: 'Cette nuance SUBTILE dépend du sens : si "les" est COD de l\'INFINITIF ("chanter QUOI ?" = les chansons) plutôt que sujet logique de l\'action entendue, le participe passé NE S\'ACCORDE PAS. Cette distinction sémantique fine est l\'un des points les plus DÉLICATS de l\'accord du participe passé en français.',
        },
        {
          id: 'b2-conj-04-ex12',
          type: 'qcm',
          question: 'Verbe pronominal indirect (jamais d\'accord) : "Elles se sont ___ ." (sourire, sourire À quelqu\'un = COI)',
          options: ['souri', 'souris', 'sourie', 'souries'],
          correctIndex: 0,
          explanation: '"Elles se sont SOURI." "Sourire À quelqu\'un" = construction avec COI → JAMAIS d\'accord. "Souri" reste invariable, comme "téléphoné", "parlé", "écrit" (tous des verbes construits avec "à").',
        },
        {
          id: 'b2-conj-04-ex13',
          type: 'qcm',
          question: 'Accord avec relatif "que" : "La maison que nous avons ___ est magnifique." (visiter)',
          options: ['visité', 'visités', 'visitée', 'visitées'],
          correctIndex: 2,
          explanation: '"La maison que nous avons VISITÉE." COD "que" = "la maison" (fém. sing.), placé avant le verbe → accord. "Visitée" (+ e, féminin singulier).',
        },
        {
          id: 'b2-conj-04-ex14',
          type: 'qcm',
          question: 'PP + infinitif avec accord (sujet logique) : "La chanteuse que j\'ai ___ chanter était excellente." (entendre)',
          options: ['entendu', 'entendus', 'entendue', 'entendues'],
          correctIndex: 2,
          explanation: '"La chanteuse que j\'ai ENTENDUE chanter." Ici, "que" (= la chanteuse) est le SUJET LOGIQUE de "chanter" ET le COD de "entendue", placé avant → ACCORD. "Entendue" (féminin singulier, accord avec "la chanteuse").',
        },
        {
          id: 'b2-conj-04-ex15',
          type: 'qcm',
          question: 'Pourquoi "j\'ai fait" reste-t-il TOUJOURS invariable dans la construction causative + infinitif, sans aucune exception ?',
          options: [
            'Parce que "faire" n\'a jamais de participe passé',
            'C\'est une règle FIXE du français : le participe passé "fait" en construction causative (faire + infinitif) ne s\'accorde JAMAIS, contrairement à d\'autres verbes de perception (voir, entendre) qui peuvent s\'accorder selon le sens',
            'Parce que "fait" est un adjectif et non un participe passé',
            'Parce que cette construction n\'existe pas vraiment en français',
          ],
          correctIndex: 1,
          explanation: 'C\'est une RÈGLE FIXE et SANS EXCEPTION du français : le participe passé "FAIT" en construction CAUSATIVE (faire + infinitif, où le sujet fait faire l\'action par quelqu\'un d\'autre) reste TOUJOURS INVARIABLE, contrairement à d\'autres verbes de PERCEPTION (voir, entendre, regarder) qui PEUVENT s\'accorder selon le sens exact de la phrase.',
        },
        {
          id: 'b2-conj-04-ex16',
          type: 'qcm',
          question: 'Accord avec interrogatif : "___ personnes avez-vous rencontrées ?" (combien de)',
          options: ['Combien de', 'Que de', 'Quel', 'Comment'],
          correctIndex: 0,
          explanation: '"COMBIEN DE personnes avez-vous RENCONTRÉES ?" "Combien de + nom" placé en tête de question fonctionne comme COD avant le verbe → accord du participe passé ("rencontrées", féminin pluriel, accord avec "personnes").',
        },
        {
          id: 'b2-conj-04-ex17',
          type: 'qcm',
          question: 'Verbe pronominal avec sens passif (toujours accord avec le sujet) : "Ces règles se sont ___ rapidement." (imposer)',
          options: ['imposé', 'imposés', 'imposée', 'imposées'],
          correctIndex: 3,
          explanation: '"Ces règles SE SONT IMPOSÉES rapidement." Sens passif du pronominal (= ces règles ONT ÉTÉ IMPOSÉES) → accord avec le sujet "ces règles" (féminin pluriel) → "imposées".',
        },
        {
          id: 'b2-conj-04-ex18',
          type: 'qcm',
          question: 'Pourquoi la distinction "se sont lavés" (accord) vs "se sont lavé les mains" (pas d\'accord) est-elle considérée comme un point grammatical particulièrement difficile, même pour des locuteurs natifs ?',
          options: [
            'Parce qu\'elle ne suit aucune logique',
            'Parce qu\'elle exige d\'analyser précisément la fonction grammaticale du pronom réfléchi "se" (COD direct ou simplement partie du verbe pronominal avec un autre COD explicite), une analyse syntaxique fine souvent négligée même par les natifs à l\'écrit spontané',
            'Parce que cette règle n\'existe pas réellement',
            'Parce que tous les verbes pronominaux suivent exactement la même règle sans exception',
          ],
          correctIndex: 1,
          explanation: 'Cette distinction exige d\'ANALYSER PRÉCISÉMENT la FONCTION grammaticale du pronom réfléchi "se" : est-il le COD DIRECT du verbe (alors accord), ou y a-t-il un AUTRE COD explicite dans la phrase (alors pas d\'accord, "se" devenant indirect) ? Cette analyse SYNTAXIQUE fine est souvent NÉGLIGÉE même par des locuteurs NATIFS dans l\'écrit spontané, expliquant la fréquence des erreurs sur ce point, même avancé.',
        },
        {
          id: 'b2-conj-04-ex19',
          type: 'qcm',
          question: 'PP + infinitif, analyse du sens : "Les exercices que j\'ai ___ faire étaient difficiles." (voir, "que" = sujet logique de "faire")',
          options: ['vu', 'vus', 'vue', 'vues'],
          correctIndex: 1,
          explanation: '"Les exercices que j\'ai VUS faire." "Que" (= les exercices) est le COD de "vus" ET en quelque sorte lié au "faire" (on voit les exercices ÊTRE FAITS) → accord avec "les exercices" (masc. pl.) → "vus".',
        },
        {
          id: 'b2-conj-04-ex20',
          type: 'qcm',
          question: 'En synthèse, quelle compétence grammaticale fine la maîtrise de ces accords complexes développe-t-elle, particulièrement valorisée à l\'écrit soigné ?',
          options: [
            'La simple application mécanique d\'une règle unique sans analyse',
            'La capacité à analyser précisément la fonction syntaxique (COD, COI, sujet logique) de chaque élément de la phrase pour déterminer l\'accord correct, une compétence d\'analyse grammaticale fine',
            'La capacité à éviter complètement les verbes pronominaux et les constructions complexes',
            'La capacité à mémoriser des milliers d\'exemples sans comprendre la logique sous-jacente',
          ],
          correctIndex: 1,
          explanation: 'Cette maîtrise développe la capacité à ANALYSER PRÉCISÉMENT la FONCTION SYNTAXIQUE (COD direct, COI, sujet logique d\'un infinitif) de chaque élément de la phrase pour déterminer l\'ACCORD CORRECT — une compétence d\'ANALYSE GRAMMATICALE FINE, particulièrement valorisée à l\'écrit SOIGNÉ (littéraire, académique, professionnel) où ces nuances sont scrutées avec attention.',
        },
      ],
    },

    {
      id: 'b2-conj-05',
      slug: 'b2-infinitif-gerondif-passe',
      moduleSlug: 'b2-conjugaison',
      level: 'B2',
      title: 'L\'infinitif passé et le gérondif',
      description: 'Exprimer l\'antériorité avec l\'infinitif passé et nuancer l\'action avec le gérondif.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Deux formes condensées pour exprimer une nuance temporelle

**L'infinitif passé : avoir/être (infinitif) + participe passé**
Exprime une action ANTÉRIEURE à celle du verbe principal, souvent après "après" :
"**Après avoir terminé** ses études, elle a trouvé un emploi."
"**Après être arrivée** en France, elle a appris le français rapidement."

**Comparaison avec l'infinitif présent**
- Infinitif présent : action SIMULTANÉE ou postérieure : "Avant **de partir**, prévenez-moi."
- Infinitif passé : action ANTÉRIEURE : "Après **avoir prévenu** tout le monde, il est parti."

**Le gérondif : en + participe présent**
Exprime la SIMULTANÉITÉ, la MANIÈRE ou la CONDITION :
"Elle a réussi **en travaillant** dur." (manière/moyen)
"**En arrivant**, j'ai remarqué un changement." (simultanéité)
"**En vous y prenant** plus tôt, vous éviteriez ce stress." (condition)

**Différence gérondif vs participe présent (sans "en")**
- Gérondif (en + part. présent) : se rapporte TOUJOURS au sujet du verbe principal
- Participe présent (sans "en") : peut se rapporter à un AUTRE nom de la phrase
"Elle a vu les enfants **jouant** dans le parc." (participe présent : "jouant" se rapporte à "les enfants", pas au sujet "elle")

**Le gérondif passé (rare) : en ayant/étant + participe passé**
"**En ayant terminé** son travail, elle a pu partir tôt." (= comme elle avait terminé)`,

      linguisticPoint: `## Point linguistique : "Après avoir/être" — l'accord du participe passé

### Règle d'accord standard maintenue
L'infinitif passé suit les RÈGLES NORMALES d'accord :
- Avec "avoir" : accord seulement si COD avant (rare dans cette structure)
- Avec "être" : accord avec le SUJET du verbe à l'infinitif

### Exemples avec accord
"Après **être arrivée**, elle a déposé ses valises." (accord féminin, sujet "elle")
"Après **s'être levés**, ils ont pris leur petit-déjeuner." (pronominal, accord avec "ils")

### Piège : le sujet de l'infinitif passé doit être le MÊME que celui du verbe principal
✅ "Après avoir terminé ses études, ELLE a trouvé un emploi." (même sujet : elle)
❌ "Après avoir terminé ses études, UN EMPLOI a été trouvé." (sujets différents = incorrect, à reformuler avec une subordonnée complète)

### Le gérondif et son sujet implicite obligatoire
Le sujet du gérondif est TOUJOURS celui du verbe principal — jamais un autre nom de la phrase.
"**En sortant** de la réunion, le directeur a annoncé la nouvelle." (= c'est LE DIRECTEUR qui sort ET annonce)`,

      keyPoints: [
        'Infinitif passé = avoir/être (infinitif) + PP, exprime l\'antériorité, souvent après "après"',
        'Gérondif (en + participe présent) = simultanéité / manière / condition, sujet TOUJOURS = sujet du verbe principal',
        'Participe présent SANS "en" peut se rapporter à un autre nom de la phrase (différence clé avec le gérondif)',
        'Accord de l\'infinitif passé : règles normales (avoir = COD avant / être = sujet)',
        'Piège : le sujet de "après avoir/être + PP" doit être identique à celui du verbe principal',
      ],

      exercises: [
        {
          id: 'b2-conj-05-ex01',
          type: 'qcm',
          question: 'Infinitif passé : "Après ___ ses études, elle a trouvé un emploi." (terminer)',
          options: ['terminer', 'avoir terminé', 'terminant', 'ayant terminé'],
          correctIndex: 1,
          explanation: '"Après AVOIR TERMINÉ ses études..." Infinitif passé : avoir (infinitif) + "terminé" (PP). "Après" + infinitif passé exprime l\'ANTÉRIORITÉ par rapport à l\'action principale ("a trouvé un emploi").',
        },
        {
          id: 'b2-conj-05-ex02',
          type: 'qcm',
          question: 'Infinitif passé avec être + accord : "Après ___ en France, elle a appris le français." (arriver)',
          options: ['avoir arrivé', 'être arrivé', 'être arrivée', 'arrivant'],
          correctIndex: 2,
          explanation: '"Après ÊTRE ARRIVÉE en France..." "Arriver" = verbe être → "être" (infinitif) + "arrivée" (PP accordé féminin, sujet "elle"). Accord obligatoire car le sujet de l\'infinitif passé est le même que celui du verbe principal (elle).',
        },
        {
          id: 'b2-conj-05-ex03',
          type: 'qcm',
          question: 'Gérondif de manière : "Elle a réussi ___ dur." (travailler)',
          options: ['travailler', 'en travaillant', 'ayant travaillé', 'travaillant'],
          correctIndex: 1,
          explanation: '"Elle a réussi EN TRAVAILLANT dur." Gérondif (en + participe présent) pour exprimer la MANIÈRE/le MOYEN par lequel elle a réussi. "En travaillant" = by working hard / through hard work.',
        },
        {
          id: 'b2-conj-05-ex04',
          type: 'qcm',
          question: 'Différence gérondif/participe présent : "Elle a vu les enfants ___ dans le parc." (jouer, "jouant" se rapporte aux enfants, pas au sujet)',
          options: ['en jouant', 'jouant', 'ayant joué', 'en ayant joué'],
          correctIndex: 1,
          explanation: '"Elle a vu les enfants JOUANT dans le parc." Participe présent SANS "en" : se rapporte aux ENFANTS (pas au sujet "elle"). Si on utilisait "en jouant", cela signifierait à tort qu\'elle-même jouait, ce qui n\'est pas le sens voulu.',
        },
        {
          id: 'b2-conj-05-ex05',
          type: 'qcm',
          question: 'Gérondif de condition : "___ plus tôt, vous éviteriez ce stress." (s\'y prendre)',
          options: ['Vous y prenant', 'En vous y prenant', 'Vous étant pris', 'Pris'],
          correctIndex: 1,
          explanation: '"EN VOUS Y PRENANT plus tôt, vous éviteriez ce stress." Gérondif de CONDITION (= si vous vous y preniez plus tôt). "En + participe présent" peut exprimer une condition hypothétique, équivalente à une proposition avec "si".',
        },
        {
          id: 'b2-conj-05-ex06',
          type: 'qcm',
          question: 'Infinitif présent vs passé : "Avant ___ , prévenez-moi." (partir, action simultanée/postérieure)',
          options: ['avoir parti', 'être parti', 'de partir', 'partant'],
          correctIndex: 2,
          explanation: '"Avant DE PARTIR, prévenez-moi." "Avant de" + INFINITIF PRÉSENT (pas passé) car l\'action de partir est POSTÉRIEURE à l\'avertissement demandé. Différent de "après avoir/être + PP" qui marque l\'antériorité.',
        },
        {
          id: 'b2-conj-05-ex07',
          type: 'qcm',
          question: 'Infinitif passé pronominal avec accord : "Après ___, ils ont pris leur petit-déjeuner." (se lever)',
          options: ['avoir levé', 's\'être levé', 's\'être levés', 'se levant'],
          correctIndex: 2,
          explanation: '"Après S\'ÊTRE LEVÉS, ils ont pris leur petit-déjeuner." "Se lever" = verbe pronominal → "s\'être" (infinitif passé pronominal) + "levés" (PP accordé masculin pluriel, sujet "ils").',
        },
        {
          id: 'b2-conj-05-ex08',
          type: 'qcm',
          question: 'Pourquoi la phrase "Après avoir terminé ses études, un emploi a été trouvé" est-elle INCORRECTE ?',
          options: [
            'Elle est en réalité parfaitement correcte',
            'Le sujet de l\'infinitif passé ("avoir terminé") doit être identique à celui du verbe principal, ce qui n\'est pas le cas ici ("un emploi" n\'a pas terminé d\'études)',
            'Il manque un accord du participe passé',
            'L\'infinitif passé est mal conjugué',
          ],
          correctIndex: 1,
          explanation: 'Le SUJET de l\'infinitif passé ("avoir terminé") doit être IDENTIQUE à celui du verbe PRINCIPAL. Ici, "un emploi" (sujet de "a été trouvé") n\'a PAS terminé d\'études — c\'est forcément une PERSONNE qui a terminé ses études. Cette incohérence rend la phrase INCORRECTE ; il faudrait reformuler avec une subordonnée complète.',
        },
        {
          id: 'b2-conj-05-ex09',
          type: 'qcm',
          question: 'Gérondif de simultanéité : "___, j\'ai remarqué un changement." (arriver)',
          options: ['Arrivant', 'En arrivant', 'Ayant arrivé', 'Étant arrivé'],
          correctIndex: 1,
          explanation: '"EN ARRIVANT, j\'ai remarqué un changement." Gérondif de SIMULTANÉITÉ : les deux actions (arriver et remarquer) se produisent EN MÊME TEMPS. "En arrivant" = as I arrived / upon arriving.',
        },
        {
          id: 'b2-conj-05-ex10',
          type: 'qcm',
          question: 'Quelle est la règle fondamentale du sujet du gérondif (en + participe présent) ?',
          options: [
            'Le gérondif peut se rapporter à n\'importe quel nom de la phrase',
            'Le sujet du gérondif est toujours identique à celui du verbe principal de la phrase',
            'Le gérondif n\'a jamais de sujet',
            'Le sujet du gérondif est toujours le complément d\'objet',
          ],
          correctIndex: 1,
          explanation: 'Le sujet du GÉRONDIF (en + participe présent) est TOUJOURS IDENTIQUE à celui du verbe PRINCIPAL de la phrase — c\'est la règle fondamentale qui le distingue du PARTICIPE PRÉSENT seul (sans "en"), qui peut se rapporter à un AUTRE nom de la phrase.',
        },
        {
          id: 'b2-conj-05-ex11',
          type: 'qcm',
          question: 'Gérondif passé (rare) : "___ son travail, elle a pu partir tôt." (avoir terminé)',
          options: ['En terminant', 'En ayant terminé', 'Ayant terminé', 'Terminé'],
          correctIndex: 1,
          explanation: '"EN AYANT TERMINÉ son travail, elle a pu partir tôt." Gérondif PASSÉ (rare) : "en" + "ayant" (participe présent d\'avoir) + "terminé" (PP). Exprime une cause/antériorité avec la nuance temporelle du gérondif.',
        },
        {
          id: 'b2-conj-05-ex12',
          type: 'qcm',
          question: 'Infinitif passé : "Après ___ la nouvelle, il a appelé sa famille." (apprendre)',
          options: ['apprendre', 'avoir appris', 'apprenant', 'ayant appris'],
          correctIndex: 1,
          explanation: '"Après AVOIR APPRIS la nouvelle, il a appelé sa famille." Infinitif passé : "avoir" (infinitif) + "appris" (PP d\'"apprendre"). Exprime l\'action ANTÉRIEURE (apprendre) à l\'action principale (appeler).',
        },
        {
          id: 'b2-conj-05-ex13',
          type: 'qcm',
          question: 'Différence de sens : "Il a vu les voitures passer" (infinitif) vs "Il a vu les voitures en passant" (gérondif) — quelle phrase signifie que LUI-MÊME était en train de passer ?',
          options: [
            '"Il a vu les voitures passer" (les voitures passent, pas lui)',
            '"Il a vu les voitures en passant" (lui-même passait, et a vu les voitures à ce moment)',
            'Les deux phrases ont exactement le même sens',
            'Aucune des deux phrases n\'a de sens',
          ],
          correctIndex: 1,
          explanation: '"Il a vu les voitures EN PASSANT" — le gérondif se rapporte TOUJOURS au sujet "il" : c\'est LUI qui passait (par exemple, en marchant dans la rue) et qui a vu les voitures à ce moment. Dans "il a vu les voitures PASSER" (infinitif), ce sont les VOITURES qui passent, pas nécessairement lui.',
        },
        {
          id: 'b2-conj-05-ex14',
          type: 'qcm',
          question: 'Infinitif passé avec accord (avoir + COD avant, cas rare) : "Les décisions qu\'il a dit ___ prises avant la réunion." (avoir)',
          options: ['avoir', 'avoir eu', 'avoir été', 'eu'],
          correctIndex: 2,
          explanation: '"Les décisions qu\'il a dit AVOIR ÉTÉ prises avant la réunion." Structure complexe : infinitif passé passif ("avoir été prises"). "Avoir été" + PP exprime l\'antériorité d\'une action subie, rapportée par "il a dit".',
        },
        {
          id: 'b2-conj-05-ex15',
          type: 'qcm',
          question: 'Gérondif de condition implicite : "___ tôt, vous auriez eu de meilleures places." (réserver)',
          options: ['Réservant', 'En réservant', 'Ayant réservé', 'En ayant réservé'],
          correctIndex: 1,
          explanation: '"EN RÉSERVANT tôt, vous auriez eu de meilleures places." Gérondif de CONDITION (= si vous aviez réservé tôt). Cette structure condense une proposition conditionnelle complète en une forme plus dense et stylistiquement soutenue.',
        },
        {
          id: 'b2-conj-05-ex16',
          type: 'qcm',
          question: 'Pourquoi "après avoir/être + participe passé" exprime-t-il nécessairement l\'ANTÉRIORITÉ, contrairement à "avant de + infinitif présent" ?',
          options: [
            'Les deux structures expriment exactement la même temporalité',
            '"Après" + infinitif passé situe l\'action complétée AVANT l\'action principale, tandis que "avant de" + infinitif présent situe l\'action APRÈS ou SIMULTANÉMENT par rapport à l\'action principale',
            '"Avant de" exprime toujours l\'antériorité, pas "après avoir"',
            'Ces deux structures n\'ont aucun rapport avec la temporalité',
          ],
          correctIndex: 1,
          explanation: '"APRÈS" + infinitif PASSÉ situe une action DÉJÀ COMPLÉTÉE, ANTÉRIEURE à l\'action principale ("après avoir terminé, il est parti" = terminer AVANT de partir). "AVANT DE" + infinitif PRÉSENT situe l\'action de l\'infinitif comme se produisant APRÈS ou en relation FUTURE par rapport à l\'action principale ("avant de partir, prévenez-moi" = prévenir AVANT le départ).',
        },
        {
          id: 'b2-conj-05-ex17',
          type: 'qcm',
          question: 'Infinitif passé : "Je vous remercie ___ pris le temps de me répondre." (avoir)',
          options: ['avoir', 'd\'avoir', 'en ayant', 'étant'],
          correctIndex: 1,
          explanation: '"Je vous remercie D\'AVOIR pris le temps..." "Remercier de + infinitif passé" exprime la GRATITUDE pour une action déjà ACCOMPLIE (antérieure au moment du remerciement). "D\'avoir pris" = for having taken.',
        },
        {
          id: 'b2-conj-05-ex18',
          type: 'qcm',
          question: 'Gérondif : "Tout en ___ vos arguments, je maintiens ma position." (comprendre, concession atténuée)',
          options: ['comprenant', 'en comprenant', 'ayant compris', 'comprendre'],
          correctIndex: 0,
          explanation: '"Tout en COMPRENANT vos arguments, je maintiens ma position." "Tout en + gérondif" (ici sans répéter "en" car "tout en" l\'inclut déjà) exprime une CONCESSION ATTÉNUÉE : bien que je comprenne, je maintiens ma position. Note : "tout en" + participe présent, le "en" du gérondif étant inclus dans "tout en".',
        },
        {
          id: 'b2-conj-05-ex19',
          type: 'qcm',
          question: 'Quelle compétence stylistique avancée la maîtrise de l\'infinitif passé et du gérondif développe-t-elle, particulièrement utile à l\'écrit soutenu ?',
          options: [
            'La capacité à utiliser uniquement des phrases simples avec des conjonctions de base',
            'La capacité à condenser des relations temporelles (antériorité, simultanéité, manière, condition) en structures syntaxiques compactes et élégantes, sans recourir systématiquement à des subordonnées complètes',
            'La capacité à éviter complètement les participes',
            'La capacité à toujours utiliser le passé composé',
          ],
          correctIndex: 1,
          explanation: 'Cette maîtrise permet de CONDENSER des RELATIONS TEMPORELLES complexes (antériorité avec l\'infinitif passé, simultanéité/manière/condition avec le gérondif) en structures SYNTAXIQUES COMPACTES et ÉLÉGANTES, sans recourir SYSTÉMATIQUEMENT à des subordonnées complètes ("après que..." ou "pendant que..."), ce qui est une marque de STYLE SOUTENU et de maîtrise avancée du français.',
        },
        {
          id: 'b2-conj-05-ex20',
          type: 'qcm',
          question: 'Récapitulatif : quelle est la transformation correcte de "Quand elle est arrivée, elle a immédiatement remarqué le changement" en utilisant le gérondif ?',
          options: [
            '"Arrivant, elle a immédiatement remarqué le changement." (participe présent seul, moins précis)',
            '"En arrivant, elle a immédiatement remarqué le changement." (gérondif, sujet implicite = elle)',
            '"Après avoir arrivé, elle a immédiatement remarqué le changement." (incorrect, "arriver" = être)',
            '"Elle arrivant, elle a remarqué." (construction incorrecte et redondante)',
          ],
          correctIndex: 1,
          explanation: '"EN ARRIVANT, elle a immédiatement remarqué le changement." Le GÉRONDIF (en + participe présent) condense efficacement la subordonnée temporelle "quand elle est arrivée", le sujet implicite du gérondif étant clairement IDENTIQUE à celui du verbe principal ("elle"). Structure élégante et correcte exprimant la SIMULTANÉITÉ.',
        },
      ],
    },
  ],
};
