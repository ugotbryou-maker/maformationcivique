import type { LangModule } from '../types';

export const b1Conjugaison: LangModule = {
  id: 'b1-mod-09',
  slug: 'b1-conjugaison',
  level: 'B1',
  title: 'Conjugaison B1',
  subtitle: 'Futur simple, conditionnel, plus-que-parfait, subjonctif',
  description: 'Maîtrisez les temps essentiels du niveau B1 pour exprimer l\'avenir, l\'hypothèse et la nuance.',
  type: 'conjugaison',
  emoji: '🔤',
  free: false,
  lessons: [
    {
      id: 'b1-conj-01',
      slug: 'b1-futur-simple',
      moduleSlug: 'b1-conjugaison',
      level: 'B1',
      title: 'Le futur simple',
      description: 'Formation et emplois du futur simple, et ses verbes irréguliers les plus courants.',
      duration: 35,
      free: false,
      dialogue: `## Texte : Quand utiliser le futur simple ?

Le futur simple exprime une action à venir, plus formelle ou plus lointaine que le futur proche ("aller + infinitif").

**Formation régulière** : infinitif (ou radical pour les verbes en -re) + terminaisons -ai, -as, -a, -ons, -ez, -ont
- parler → je parler**ai**, tu parler**as**, il parler**a**...
- finir → je finir**ai**...
- vendre → je vendr**ai** (on enlève le "e" final)

**Verbes irréguliers fréquents (radical irrégulier + terminaisons régulières) :**
| Verbe | Radical futur | Exemple |
|---|---|---|
| être | ser- | je **serai** |
| avoir | aur- | j'**aurai** |
| aller | ir- | j'**irai** |
| faire | fer- | je **ferai** |
| venir | viendr- | je **viendrai** |
| voir | verr- | je **verrai** |
| savoir | saur- | je **saurai** |
| pouvoir | pourr- | je **pourrai** |
| vouloir | voudr- | je **voudrai** |
| devoir | devr- | je **devrai** |
| falloir | faudr- | il **faudra** |
| pleuvoir | pleuvr- | il **pleuvra** |
| envoyer | enverr- | j'**enverrai** |

**Emplois du futur simple :**
1. Action future plus formelle : "Vous **recevrez** une réponse sous 2 mois."
2. Prévision / programme officiel : "La loi **entrera** en vigueur en janvier."
3. Ordre poli (administratif) : "Vous **voudrez bien** vous présenter à 9h."
4. Après "quand / dès que / lorsque" + futur (pas présent !) : "Quand vous **recevrez** la convocation, contactez-nous."`,

      linguisticPoint: `## Point linguistique : Futur simple après quand/dès que/lorsque

### Règle essentielle
⚠️ En français, après "quand / dès que / lorsque / aussitôt que" annonçant une action FUTURE, on met le futur DANS LES DEUX PROPOSITIONS (pas le présent comme en anglais !)

- ❌ "Quand je RECEVRAI la réponse, je vous PRÉVIENS." (incorrect, mélange de temps)
- ✅ "Quand je **recevrai** la réponse, je vous **préviendrai**." (futur + futur)

### Comparaison avec l'anglais
"When I **receive** the answer, I **will** let you know." (présent + futur en anglais)
"Quand je **recevrai** la réponse, je **préviendrai**." (futur + futur en français)

### Futur antérieur + futur simple (rappel)
"Quand j'**aurai reçu** la réponse (FA), je vous **préviendrai** (futur simple)."
Le futur antérieur marque l'antériorité dans le futur ; le futur simple, l'action qui suit.`,

      keyPoints: [
        'Formation régulière : infinitif (ou radical -re) + -ai/-as/-a/-ons/-ez/-ont',
        'Irréguliers clés : être→ser- / avoir→aur- / aller→ir- / faire→fer- / venir→viendr-',
        'Après quand/dès que/lorsque + action future = FUTUR (pas présent !) dans les deux propositions',
        'Futur simple = plus formel/lointain que le futur proche (aller+infinitif)',
        '"Vous voudrez bien" = formule administrative polie au futur (ordre poli)',
      ],

      exercises: [
        {
          id: 'b1-conj-01-ex01',
          type: 'qcm',
          question: 'Futur simple : "Quand vous ___ la convocation, vous ___ vous présenter." (recevoir / devoir)',
          options: [
            'recevez / devez',
            'recevrez / devrez',
            'receviez / deviez',
            'recevriez / devriez',
          ],
          correctIndex: 1,
          explanation: '"Quand vous RECEVREZ la convocation, vous DEVREZ vous présenter." Après "quand" + action future, FUTUR dans les deux propositions (jamais le présent, contrairement à l\'anglais). "Devoir" → irrégulier "devr-" + terminaisons.',
        },
        {
          id: 'b1-conj-01-ex02',
          type: 'qcm',
          question: 'Futur simple irrégulier de "venir" : "Je ___ demain à 14h." (venir)',
          options: ['venirai', 'viendrai', 'venrai', 'vendrai'],
          correctIndex: 1,
          explanation: '"Je VIENDRAI demain à 14h." "Venir" a un radical futur irrégulier : "viendr-" + terminaisons. Ne pas confondre avec "vendre" (vendrai) — pièges fréquents entre verbes similaires.',
        },
        {
          id: 'b1-conj-01-ex03',
          type: 'qcm',
          question: 'Futur simple : "Dès que j\'___ la réponse, je vous ___." (avoir / contacter)',
          options: [
            'ai / contacte',
            'aurai / contacterai',
            'avais / contacterais',
            'aurais / contacterais',
          ],
          correctIndex: 1,
          explanation: '"Dès que j\'AURAI la réponse, je vous CONTACTERAI." "Dès que" + action future = futur dans les deux propositions. "Avoir" → irrégulier "aur-" + terminaisons.',
        },
        {
          id: 'b1-conj-01-ex04',
          type: 'qcm',
          question: 'Quel est le radical futur irrégulier de "faire" ?',
          options: ['fair-', 'fer-', 'fais-', 'feur-'],
          correctIndex: 1,
          explanation: '"Faire" → radical futur "FER-" : je FERAI, tu FERAS, il FERA... Radical totalement différent de l\'infinitif, à mémoriser comme exception.',
        },
        {
          id: 'b1-conj-01-ex05',
          type: 'qcm',
          question: 'Futur simple : "Lorsque la loi ___ en vigueur, tout changera." (entrer, régulier)',
          options: ['entre', 'entrera', 'entrait', 'entrerait'],
          correctIndex: 1,
          explanation: '"Lorsque la loi ENTRERA en vigueur..." "Lorsque" + futur (comme "quand"). "Entrer" est régulier : infinitif "entrer" + terminaisons = "entrera" (3ème pers. sing.).',
        },
        {
          id: 'b1-conj-01-ex06',
          type: 'qcm',
          question: 'Quel est le radical futur irrégulier de "pouvoir" ?',
          options: ['pouvr-', 'pourr-', 'peuvr-', 'pouv-'],
          correctIndex: 1,
          explanation: '"Pouvoir" → radical futur "POURR-" : je POURRAI, tu POURRAS... Notez le double "r" caractéristique de ce verbe au futur et au conditionnel.',
        },
        {
          id: 'b1-conj-01-ex07',
          type: 'qcm',
          question: 'Futur simple régulier (verbe en -re) : "Je ___ ce document avant vendredi." (vendre)',
          options: ['vendrai', 'vendrerai', 'venderai', 'vendrais'],
          correctIndex: 0,
          explanation: '"Je VENDRAI ce document." Pour les verbes en "-RE", on enlève le "e" final de l\'infinitif avant d\'ajouter les terminaisons : "vendre" → "vendr-" + "ai" = "vendrai".',
        },
        {
          id: 'b1-conj-01-ex08',
          type: 'qcm',
          question: 'Quel est le radical futur irrégulier de "savoir" ?',
          options: ['savr-', 'sair-', 'saur-', 'sav-'],
          correctIndex: 2,
          explanation: '"Savoir" → radical futur "SAUR-" : je SAURAI, tu SAURAS... Attention à ne pas confondre avec "savoir" au conditionnel (même radical "saur-" + terminaisons de l\'imparfait).',
        },
        {
          id: 'b1-conj-01-ex09',
          type: 'qcm',
          question: 'Futur simple : "Aussitôt que le résultat ___ connu, nous vous ___." (être / informer)',
          options: [
            'est / informons',
            'sera / informerons',
            'était / informions',
            'serait / informerions',
          ],
          correctIndex: 1,
          explanation: '"Aussitôt que le résultat SERA connu, nous vous INFORMERONS." "Aussitôt que" (= dès que) + futur dans les deux propositions. "Être" → "ser-" irrégulier.',
        },
        {
          id: 'b1-conj-01-ex10',
          type: 'qcm',
          question: 'Quel est le radical futur irrégulier de "vouloir" ?',
          options: ['vouloir-', 'voudr-', 'veul-', 'voulr-'],
          correctIndex: 1,
          explanation: '"Vouloir" → radical futur "VOUDR-" : je VOUDRAI, tu VOUDRAS... "Vous voudrez bien vous présenter" = formule administrative polie très courante au futur.',
        },
        {
          id: 'b1-conj-01-ex11',
          type: 'qcm',
          question: 'Futur simple : "Il ___ falloir attendre encore deux mois." (falloir, impersonnel)',
          options: ['faudra', 'fallera', 'faudera', 'faudrait'],
          correctIndex: 0,
          explanation: '"Il FAUDRA attendre encore deux mois." "Falloir" (verbe impersonnel, uniquement "il") → radical futur "FAUDR-" : il FAUDRA. Très utilisé pour annoncer une nécessité future.',
        },
        {
          id: 'b1-conj-01-ex12',
          type: 'qcm',
          question: 'Quel est le radical futur irrégulier de "envoyer" (cas particulier en -oyer) ?',
          options: ['envoyer-', 'envoir-', 'enverr-', 'envoer-'],
          correctIndex: 2,
          explanation: '"Envoyer" → radical futur "ENVERR-" (et non "envoyer-"). J\'ENVERRAI le document demain. Cas particulier des verbes en "-oyer" qui changent le radical au futur (comme "voir" → "verr-").',
        },
        {
          id: 'b1-conj-01-ex13',
          type: 'qcm',
          question: 'Futur simple : "Quand le préfet ___ ma demande, il me ___." (examiner / convoquer)',
          options: [
            'examine / convoque',
            'examinera / convoquera',
            'examinait / convoquait',
            'examinerait / convoquerait',
          ],
          correctIndex: 1,
          explanation: '"Quand le préfet EXAMINERA ma demande, il me CONVOQUERA." Futur dans les deux propositions après "quand" + action future. Les deux verbes sont réguliers : infinitif + terminaisons.',
        },
        {
          id: 'b1-conj-01-ex14',
          type: 'qcm',
          question: 'Quel est le radical futur irrégulier de "devoir" ?',
          options: ['devoir-', 'doiv-', 'devr-', 'doivr-'],
          correctIndex: 2,
          explanation: '"Devoir" → radical futur "DEVR-" : je DEVRAI, tu DEVRAS... "Vous devrez fournir un justificatif" = formule administrative au futur, très courante pour énoncer une obligation à venir.',
        },
        {
          id: 'b1-conj-01-ex15',
          type: 'qcm',
          question: 'Futur simple : "Il ___ sans doute demain selon la météo." (pleuvoir, impersonnel)',
          options: ['pleuvra', 'pleura', 'plura', 'pleuvera'],
          correctIndex: 0,
          explanation: '"Il PLEUVRA sans doute demain." "Pleuvoir" (impersonnel) → radical futur "PLEUVR-" : il PLEUVRA. Attention à ne pas confondre avec "pleurer" (il pleurera = he will cry).',
        },
        {
          id: 'b1-conj-01-ex16',
          type: 'qcm',
          question: 'Futur simple ordre poli administratif : "Vous ___ bien vous munir de votre convocation." (vouloir)',
          options: ['voudrez', 'voulez', 'voudriez', 'vouliez'],
          correctIndex: 0,
          explanation: '"Vous VOUDREZ bien vous munir..." "Vous voudrez bien" = formule administrative très formelle pour exprimer un ORDRE POLI au futur (équivalent à "veuillez"). Très fréquente dans les courriers officiels français.',
        },
        {
          id: 'b1-conj-01-ex17',
          type: 'qcm',
          question: 'Quel est le radical futur irrégulier de "voir" ?',
          options: ['voir-', 'verr-', 'voy-', 'voiir-'],
          correctIndex: 1,
          explanation: '"Voir" → radical futur "VERR-" (double r, comme "pouvoir" → "pourr-"). Je VERRAI, tu VERRAS... Verbe à bien distinguer de "venir" (viendrai) au futur — confusions fréquentes chez les apprenants.',
        },
        {
          id: 'b1-conj-01-ex18',
          type: 'qcm',
          question: 'Futur simple : "Dès que vous ___ prêt, nous ___ commencer l\'entretien." (être / pouvoir)',
          options: [
            'êtes / pouvons',
            'serez / pourrons',
            'étiez / pouviez',
            'seriez / pourrions',
          ],
          correctIndex: 1,
          explanation: '"Dès que vous SEREZ prêt, nous POURRONS commencer." Futur dans les deux propositions après "dès que" + action future. "Être" → "ser-" / "pouvoir" → "pourr-", tous deux irréguliers.',
        },
        {
          id: 'b1-conj-01-ex19',
          type: 'qcm',
          question: 'Quel est le radical futur irrégulier de "aller" ?',
          options: ['aller-', 'all-', 'ir-', 'av-'],
          correctIndex: 2,
          explanation: '"Aller" → radical futur "IR-" (totalement différent de l\'infinitif). J\'IRAI, tu IRAS... À ne pas confondre avec le futur proche "je vais aller" (qui utilise "aller" au présent + infinitif).',
        },
        {
          id: 'b1-conj-01-ex20',
          type: 'qcm',
          question: 'Pourquoi dit-on "Quand je recevrai la réponse, je vous préviendrai" et non "Quand je reçois la réponse, je vous préviendrai" ?',
          options: [
            'Les deux phrases sont également correctes en français',
            'En français, contrairement à l\'anglais, on utilise le futur (pas le présent) dans les deux propositions quand l\'action décrite est future',
            'Le présent est plus formel que le futur',
            'C\'est une règle qui ne s\'applique qu\'à l\'écrit',
          ],
          correctIndex: 1,
          explanation: 'C\'est une règle FIXE du français : après "quand/dès que/lorsque/aussitôt que" annonçant une action FUTURE, le futur s\'emploie dans LES DEUX propositions. C\'est une différence majeure avec l\'anglais (qui utilise le présent dans la subordonnée temporelle). Erreur très fréquente chez les apprenants anglophones et autres.',
        },
      ],
    },

    {
      id: 'b1-conj-02',
      slug: 'b1-conditionnel-present',
      moduleSlug: 'b1-conjugaison',
      level: 'B1',
      title: 'Le conditionnel présent',
      description: 'Formation et emplois du conditionnel présent : politesse, hypothèse, conseil, information non confirmée.',
      duration: 35,
      free: false,
      dialogue: `## Texte : Le conditionnel, un temps essentiel pour nuancer

Le conditionnel présent se forme à partir du RADICAL DU FUTUR + les terminaisons de l'IMPARFAIT (-ais, -ais, -ait, -ions, -iez, -aient).

**Formation :**
- parler (futur : parler-) → je parler**ais**, tu parler**ais**, il parler**ait**...
- être (futur : ser-) → je **serais**
- avoir (futur : aur-) → j'**aurais**
- aller (futur : ir-) → j'**irais**
- faire (futur : fer-) → je **ferais**
- pouvoir (futur : pourr-) → je **pourrais**
- vouloir (futur : voudr-) → je **voudrais**

**Les 4 emplois principaux du conditionnel présent :**

1. **Politesse** (demande adoucie) :
"Je **voudrais** un rendez-vous." / "**Pourriez-vous** m'aider ?"

2. **Conseil** (avec "à ta/votre place", "il faudrait") :
"À votre place, je **contacterais** un avocat." / "Il **faudrait** vérifier ce point."

3. **Hypothèse** (si + imparfait → conditionnel) :
"Si j'avais le temps, je **viendrais**."

4. **Information non confirmée** (style journalistique) :
"Le gouvernement **envisagerait** une nouvelle réforme." (= il semblerait que)

**Différence conditionnel vs futur :** le conditionnel n'est jamais une certitude — c'est toujours une nuance, une hypothèse ou une politesse.`,

      linguisticPoint: `## Point linguistique : Distinguer futur simple et conditionnel présent (piège fréquent)

### Le piège classique
Futur simple et conditionnel présent se ressemblent énormément (même radical) :
- Futur : je parler**AI** / tu parler**AS** / il parler**A**
- Conditionnel : je parler**AIS** / tu parler**AIS** / il parler**AIT**

⚠️ À l'oral, "je parlerai" [ʒəparl(ə)Re] et "je parlerais" [ʒəparl(ə)Rε] se distinguent par la voyelle finale, mais beaucoup d'apprenants les confondent à l'écrit.

### Astuce de mémorisation
Le conditionnel a TOUJOURS les terminaisons de l'imparfait (-ais/-ais/-ait/-ions/-iez/-aient).
Le futur a TOUJOURS les terminaisons propres (-ai/-as/-a/-ons/-ez/-ont).

### Test rapide
Remplacez "je" par "nous" :
- "Je parlerai" → "nous parlerons" (futur, terminaison -ons)
- "Je parlerais" → "nous parlerions" (conditionnel, terminaison -ions, comme l'imparfait)`,

      keyPoints: [
        'Formation : RADICAL DU FUTUR + terminaisons de l\'IMPARFAIT (-ais/-ais/-ait/-ions/-iez/-aient)',
        '4 emplois : politesse / conseil / hypothèse (si+imparfait) / info non confirmée',
        '"Je voudrais / pourriez-vous" = politesse / "à votre place, je..." = conseil',
        'Piège : futur (-ai/-as/-a) vs conditionnel (-ais/-ais/-ait) — même radical, terminaisons différentes',
        'Test : remplacer "je" par "nous" → "-ons" = futur / "-ions" = conditionnel',
      ],

      exercises: [
        {
          id: 'b1-conj-02-ex01',
          type: 'qcm',
          question: 'Conditionnel de politesse : "Je ___ un rendez-vous avec le médecin." (vouloir)',
          options: ['veux', 'voudrai', 'voudrais', 'voulais'],
          correctIndex: 2,
          explanation: '"Je VOUDRAIS un rendez-vous." Conditionnel de politesse (demande adoucie). Radical futur "voudr-" + terminaison imparfait "-ais" = "voudrais". Plus poli que "je veux" (trop direct).',
        },
        {
          id: 'b1-conj-02-ex02',
          type: 'qcm',
          question: 'Quelles terminaisons utilise le conditionnel présent ?',
          options: [
            'Les terminaisons du futur (-ai/-as/-a/-ons/-ez/-ont)',
            'Les terminaisons de l\'imparfait (-ais/-ais/-ait/-ions/-iez/-aient)',
            'Les terminaisons du présent (-e/-es/-e/-ons/-ez/-ent)',
            'Les terminaisons du subjonctif',
          ],
          correctIndex: 1,
          explanation: 'Le conditionnel présent utilise les terminaisons de l\'IMPARFAIT (-ais/-ais/-ait/-ions/-iez/-aient) appliquées au RADICAL DU FUTUR. C\'est cette combinaison qui définit le conditionnel.',
        },
        {
          id: 'b1-conj-02-ex03',
          type: 'qcm',
          question: 'Conseil au conditionnel : "À votre place, je ___ un avocat." (contacter)',
          options: ['contacte', 'contacterai', 'contacterais', 'contactais'],
          correctIndex: 2,
          explanation: '"À votre place, je CONTACTERAIS un avocat." Conditionnel de CONSEIL avec "à votre/ta place". "Contacter" (régulier) → radical futur "contacter-" + "-ais" = "contacterais".',
        },
        {
          id: 'b1-conj-02-ex04',
          type: 'qcm',
          question: 'Test rapide : "je parlerais" → "nous ___" Quelle terminaison confirme le conditionnel ?',
          options: ['parlerons (-ons)', 'parlerions (-ions)', 'parlons (-ons)', 'parlâmes'],
          correctIndex: 1,
          explanation: '"Nous PARLERIONS" (-ions) confirme le CONDITIONNEL (comme à l\'imparfait : nous parlions). Si c\'était le futur, on aurait "nous parlerons" (-ons). Ce test à la 1ère pers. pl. lève toute ambiguïté.',
        },
        {
          id: 'b1-conj-02-ex05',
          type: 'qcm',
          question: 'Conditionnel d\'hypothèse : "Si j\'avais le temps, je ___ vous aider." (pouvoir)',
          options: ['peux', 'pourrai', 'pourrais', 'pouvais'],
          correctIndex: 2,
          explanation: '"Si j\'avais le temps, je POURRAIS vous aider." Si + IMPARFAIT → CONDITIONNEL PRÉSENT (hypothèse non réalisée au présent). Radical futur "pourr-" + "-ais" = "pourrais".',
        },
        {
          id: 'b1-conj-02-ex06',
          type: 'qcm',
          question: 'Politesse au conditionnel : "___ -vous me dire où se trouve le guichet ?" (pouvoir)',
          options: ['Pouvez', 'Pourrez', 'Pourriez', 'Pouviez'],
          correctIndex: 2,
          explanation: '"POURRIEZ-vous me dire..." Conditionnel de politesse extrême, très utilisé pour les demandes formelles. "Pourriez-vous" = could you please (plus poli que "pouvez-vous").',
        },
        {
          id: 'b1-conj-02-ex07',
          type: 'qcm',
          question: 'Information non confirmée (style journalistique) : "Le gouvernement ___ une nouvelle réforme." (envisager)',
          options: ['envisage', 'envisagera', 'envisagerait', 'envisageait'],
          correctIndex: 2,
          explanation: '"Le gouvernement ENVISAGERAIT une nouvelle réforme." Conditionnel d\'INFORMATION NON CONFIRMÉE (= il semblerait que, on dit que). Très fréquent dans la presse pour rapporter une rumeur ou information non vérifiée.',
        },
        {
          id: 'b1-conj-02-ex08',
          type: 'qcm',
          question: 'Conseil avec "il faudrait" : "Il ___ vérifier ce document avant de l\'envoyer." (falloir)',
          options: ['faut', 'faudra', 'faudrait', 'fallait'],
          correctIndex: 2,
          explanation: '"Il FAUDRAIT vérifier ce document." "Il faudrait" = conditionnel de "falloir", formule de conseil adoucie (moins directif que "il faut"). Très courant pour suggérer une action sans imposer.',
        },
        {
          id: 'b1-conj-02-ex09',
          type: 'qcm',
          question: 'Distinguez : "Vous recevrez une réponse" vs "Vous recevriez une réponse" — quelle phrase exprime une certitude ?',
          options: [
            'Les deux expriment une certitude',
            '"Vous recevrez" (futur simple)',
            '"Vous recevriez" (conditionnel)',
            'Aucune des deux n\'exprime une certitude',
          ],
          correctIndex: 1,
          explanation: '"Vous RECEVREZ" (futur, terminaison -ez) = certitude/prévision. "Vous RECEVRIEZ" (conditionnel, terminaison -iez comme l\'imparfait) = hypothèse, nuance, ou politesse. Distinction essentielle entre les deux temps.',
        },
        {
          id: 'b1-conj-02-ex10',
          type: 'qcm',
          question: 'Conditionnel hypothèse : "Si j\'étais vous, je ___ ma candidature autrement." (présenter)',
          options: ['présente', 'présenterai', 'présenterais', 'présentais'],
          correctIndex: 2,
          explanation: '"Si j\'étais vous, je PRÉSENTERAIS ma candidature autrement." Si + imparfait → conditionnel présent. "Si j\'étais vous" = structure classique de conseil hypothétique.',
        },
        {
          id: 'b1-conj-02-ex11',
          type: 'qcm',
          question: 'Quelle est l\'erreur dans : "Je voudrai un rendez-vous" (au lieu de la forme attendue) ?',
          options: [
            'Aucune erreur, c\'est correct',
            'Manque le "s" final — il faut "voudrais" (conditionnel), pas "voudrai" (futur)',
            'Il faut dire "je veux"',
            'Il faut dire "j\'aurais voulu"',
          ],
          correctIndex: 1,
          explanation: '"Je VOUDRAIS" (conditionnel, avec -s final) et non "je voudrai" (futur, sans -s) pour exprimer une demande polie. Cette confusion est l\'une des erreurs les plus fréquentes des apprenants — bien noter le "s" du conditionnel.',
        },
        {
          id: 'b1-conj-02-ex12',
          type: 'qcm',
          question: 'Conditionnel politesse : "J\'___ savoir si mon dossier est complet." (aimer)',
          options: ['aime', 'aimerai', 'aimerais', 'aimais'],
          correctIndex: 2,
          explanation: '"J\'AIMERAIS savoir si mon dossier est complet." "J\'aimerais" = conditionnel de politesse, très courant pour formuler une demande d\'information avec tact. Radical futur "aimer-" + "-ais".',
        },
        {
          id: 'b1-conj-02-ex13',
          type: 'qcm',
          question: 'Conditionnel hypothèse négatif : "Si elle ne travaillait pas, elle ___ plus de temps libre." (avoir)',
          options: ['a', 'aura', 'aurait', 'avait'],
          correctIndex: 2,
          explanation: '"Si elle ne travaillait pas, elle AURAIT plus de temps libre." Si + imparfait (négatif) → conditionnel présent. "Avoir" → radical futur "aur-" + "-ait" = "aurait".',
        },
        {
          id: 'b1-conj-02-ex14',
          type: 'qcm',
          question: 'Information non confirmée : "Selon certaines sources, l\'entreprise ___ des licenciements." (préparer)',
          options: ['prépare', 'préparera', 'préparerait', 'préparait'],
          correctIndex: 2,
          explanation: '"L\'entreprise PRÉPARERAIT des licenciements." Conditionnel journalistique d\'information non confirmée. "Selon certaines sources" annonce déjà l\'incertitude, renforcée par le conditionnel.',
        },
        {
          id: 'b1-conj-02-ex15',
          type: 'qcm',
          question: 'Conditionnel de conseil : "Vous ___ bien de consulter un conseiller juridique." (faire)',
          options: ['faites', 'ferez', 'feriez', 'faisiez'],
          correctIndex: 2,
          explanation: '"Vous FERIEZ bien de consulter un conseiller." "Faire bien de + infinitif" au conditionnel = formule de CONSEIL. "Vous feriez bien de..." = you would do well to... Très utilisée pour suggérer poliment une action.',
        },
        {
          id: 'b1-conj-02-ex16',
          type: 'qcm',
          question: 'Quel est le radical du conditionnel de "aller" ?',
          options: ['aller-', 'all-', 'ir-', 'va-'],
          correctIndex: 2,
          explanation: '"Aller" → radical "IR-" (même radical qu\'au futur). J\'IRAIS, tu IRAIS... Le radical du conditionnel est TOUJOURS identique au radical du futur (seules les terminaisons changent).',
        },
        {
          id: 'b1-conj-02-ex17',
          type: 'qcm',
          question: 'Conditionnel hypothèse : "Si nous avions plus de moyens, nous ___ embaucher davantage." (pouvoir)',
          options: ['pouvons', 'pourrons', 'pourrions', 'pouvions'],
          correctIndex: 2,
          explanation: '"Si nous avions plus de moyens, nous POURRIONS embaucher davantage." Si + imparfait → conditionnel présent, 1ère pers. pl. "Pourrions" (-ions, comme l\'imparfait) confirme le conditionnel.',
        },
        {
          id: 'b1-conj-02-ex18',
          type: 'qcm',
          question: 'Politesse extrême : "___ -je me permettre de vous poser une question ?" (pouvoir)',
          options: ['Puis', 'Pourrai', 'Pourrais', 'Pouvais'],
          correctIndex: 2,
          explanation: '"PUIS-JE" ou "POURRAIS-je me permettre..." — les deux formes sont possibles, mais avec inversion sujet-verbe, "pourrais-je" est une formule de politesse extrême très soutenue, utilisée à l\'écrit formel ou dans des situations très protocolaires.',
        },
        {
          id: 'b1-conj-02-ex19',
          type: 'qcm',
          question: 'Conditionnel hypothèse : "Si tu lui expliquais calmement, il ___ probablement." (comprendre)',
          options: ['comprend', 'comprendra', 'comprendrait', 'comprenait'],
          correctIndex: 2,
          explanation: '"Si tu lui expliquais calmement, il COMPRENDRAIT probablement." Si + imparfait → conditionnel présent. "Comprendre" (verbe en -re) → radical futur "comprendr-" + "-ait" = "comprendrait".',
        },
        {
          id: 'b1-conj-02-ex20',
          type: 'qcm',
          question: 'Pourquoi le conditionnel est-il un temps essentiel dans les démarches administratives françaises ?',
          options: [
            'Parce qu\'il est obligatoire dans tous les formulaires',
            'Parce qu\'il permet de formuler des demandes avec politesse et tact, ce qui est très valorisé dans la culture administrative française',
            'Parce que le présent est interdit dans les lettres formelles',
            'Parce qu\'il remplace systématiquement le futur',
          ],
          correctIndex: 1,
          explanation: 'Le conditionnel ("je voudrais", "pourriez-vous", "j\'aimerais savoir") permet d\'adoucir une demande, ce qui est TRÈS valorisé dans les interactions administratives et professionnelles françaises. Utiliser le présent ("je veux", "pouvez-vous") peut paraître brusque ou impoli dans ces contextes formels.',
        },
      ],
    },

    {
      id: 'b1-conj-03',
      slug: 'b1-plus-que-parfait',
      moduleSlug: 'b1-conjugaison',
      level: 'B1',
      title: 'Le plus-que-parfait',
      description: 'Formation et emplois du plus-que-parfait pour exprimer l\'antériorité dans le récit.',
      duration: 35,
      free: false,
      dialogue: `## Texte : Raconter dans l'ordre — le plus-que-parfait

Le plus-que-parfait exprime une action ANTÉRIEURE à une autre action passée. C'est le temps du "passé du passé".

**Formation :** avoir/être à l'IMPARFAIT + participe passé
- parler → j'**avais parlé**, tu **avais parlé**...
- partir → j'**étais parti(e)**, tu **étais parti(e)**...
- se lever → je m'**étais levé(e)**...

**Emplois principaux :**

1. **Antériorité dans le récit** (deux actions passées, l'une avant l'autre) :
"Quand je suis arrivé, le cours **avait** déjà **commencé**."
(D'abord : le cours a commencé → ensuite : je suis arrivé)

2. **Discours indirect au passé** (transformation du passé composé) :
Direct : "J'**ai fini** mon dossier." → Indirect : Il a dit qu'il **avait fini** son dossier.

3. **Regret / hypothèse irréelle du passé** (avec le conditionnel passé) :
"Si j'**avais su**, je serais venu plus tôt."

4. **Cause expliquée d'un état passé** :
"Elle était fatiguée car elle **avait travaillé** toute la nuit."

**Comparaison des temps du passé :**
| Temps | Usage |
|---|---|
| Passé composé | Action principale, achevée |
| Imparfait | Description, habitude, contexte |
| Plus-que-parfait | Action antérieure à une autre action passée |`,

      linguisticPoint: `## Point linguistique : L'ordre chronologique dans le récit au passé

### Construire un récit cohérent
Pour bien situer les actions dans le temps, on combine 3 temps :
1. **Plus-que-parfait** : ce qui s'est passé AVANT le moment du récit
2. **Imparfait** : le décor, le contexte, les circonstances
3. **Passé composé** : l'action principale qui fait avancer le récit

### Exemple de récit structuré
"Il **faisait** beau ce jour-là (imparfait = décor). Karim **était** arrivé en France deux ans **avant** (plus-que-parfait = antériorité). Ce matin-là, il **a reçu** un appel de la préfecture (passé composé = action principale)."

### Piège fréquent : confondre passé composé et plus-que-parfait
- "Quand je suis arrivé, il **est parti**." (= les deux actions sont presque simultanées ou se suivent immédiatement)
- "Quand je suis arrivé, il **était déjà parti**." (= il est parti AVANT mon arrivée — antériorité claire)`,

      keyPoints: [
        'Formation : avoir/être à l\'IMPARFAIT + participe passé',
        'Usage clé : antériorité ("avait déjà commencé" = avant une autre action passée)',
        'Discours indirect passé : passé composé → plus-que-parfait',
        'Si + plus-que-parfait → conditionnel passé (regret/hypothèse irréelle du passé)',
        'Récit structuré : plus-que-parfait (avant) + imparfait (décor) + passé composé (action principale)',
      ],

      exercises: [
        {
          id: 'b1-conj-03-ex01',
          type: 'qcm',
          question: 'Plus-que-parfait : "Quand je suis arrivé, le cours ___ déjà ___." (commencer)',
          options: [
            'a / commencé',
            'avait / commencé',
            'était / commencé',
            'aura / commencé',
          ],
          correctIndex: 1,
          explanation: '"Le cours AVAIT déjà COMMENCÉ." Plus-que-parfait : "avoir" à l\'imparfait ("avait") + participe passé ("commencé"). Action antérieure (le cours a commencé) à une autre action passée (mon arrivée).',
        },
        {
          id: 'b1-conj-03-ex02',
          type: 'qcm',
          question: 'Plus-que-parfait avec "être" : "Elle ___ déjà ___ quand le téléphone a sonné." (partir)',
          options: [
            'a / partie',
            'était / partie',
            'avait / parti',
            'est / partie',
          ],
          correctIndex: 1,
          explanation: '"Elle ÉTAIT déjà PARTIE." "Partir" = verbe ÊTRE. Plus-que-parfait : "être" à l\'imparfait ("était") + PP accordé ("partie", féminin). Action antérieure au coup de téléphone.',
        },
        {
          id: 'b1-conj-03-ex03',
          type: 'qcm',
          question: 'Discours indirect : "J\'ai fini mon dossier." → Il a dit qu\'il ___ son dossier.',
          options: ['a fini', 'avait fini', 'finirait', 'finissait'],
          correctIndex: 1,
          explanation: '"Il a dit qu\'il AVAIT FINI son dossier." Discours indirect passé : passé composé → PLUS-QUE-PARFAIT. "Ai fini" (PC) → "avait fini" (PQP) dans le discours rapporté au passé.',
        },
        {
          id: 'b1-conj-03-ex04',
          type: 'qcm',
          question: 'Plus-que-parfait + regret : "Si j\'___ su, je ___ venu plus tôt." (savoir / venir)',
          options: [
            'ai / suis',
            'avais / serais',
            'avais / étais',
            'aurais / serais',
          ],
          correctIndex: 1,
          explanation: '"Si j\'AVAIS SU, je SERAIS venu plus tôt." Si + PLUS-QUE-PARFAIT → CONDITIONNEL PASSÉ. Hypothèse irréelle dans le passé (regret). "Savoir" → "avais su" / "venir" → "serais venu" (être + PP).',
        },
        {
          id: 'b1-conj-03-ex05',
          type: 'qcm',
          question: 'Cause au plus-que-parfait : "Elle était fatiguée car elle ___ toute la nuit." (travailler)',
          options: ['a travaillé', 'travaillait', 'avait travaillé', 'travaillerait'],
          correctIndex: 2,
          explanation: '"Elle était fatiguée car elle AVAIT TRAVAILLÉ toute la nuit." Plus-que-parfait pour exprimer la CAUSE d\'un état passé. L\'action de travailler (antérieure) explique l\'état de fatigue (au moment du récit, à l\'imparfait).',
        },
        {
          id: 'b1-conj-03-ex06',
          type: 'qcm',
          question: 'Récit structuré : "Karim ___ arrivé en France deux ans avant. Ce matin-là, il ___ un appel." (être arrivé / recevoir)',
          options: [
            'est / a reçu',
            'était / a reçu',
            'avait été / recevait',
            'fut / reçut',
          ],
          correctIndex: 1,
          explanation: '"Karim ÉTAIT arrivé... il A REÇU un appel." Plus-que-parfait (antériorité : arrivé deux ans avant) + passé composé (action principale du récit : a reçu un appel). Structure classique du récit au passé.',
        },
        {
          id: 'b1-conj-03-ex07',
          type: 'qcm',
          question: 'Plus-que-parfait pronominal : "Elle ___ déjà ___ quand je suis arrivé." (se lever)',
          options: [
            'avait / levé',
            's\'était / levée',
            's\'avait / levée',
            'était / se levée',
          ],
          correctIndex: 1,
          explanation: '"Elle S\'ÉTAIT déjà LEVÉE." Verbe pronominal → toujours "être" (jamais "avoir"). Plus-que-parfait : "s\'était" + PP accordé ("levée", féminin, accord car réfléchi direct).',
        },
        {
          id: 'b1-conj-03-ex08',
          type: 'qcm',
          question: 'Antériorité claire vs simultanée : quelle phrase exprime le plus clairement que l\'action est terminée AVANT l\'arrivée ?',
          options: [
            '"Quand je suis arrivé, il est parti."',
            '"Quand je suis arrivé, il était déjà parti."',
            '"Quand j\'arrive, il part."',
            '"Quand j\'arriverai, il partira."',
          ],
          correctIndex: 1,
          explanation: '"Quand je suis arrivé, il ÉTAIT DÉJÀ PARTI" (plus-que-parfait) montre clairement que le départ a eu lieu AVANT l\'arrivée. "Il est parti" (passé composé) suggère une simultanéité ou succession immédiate, moins claire sur l\'antériorité.',
        },
        {
          id: 'b1-conj-03-ex09',
          type: 'qcm',
          question: 'Discours indirect : "Nous avions terminé hier." → Elle a dit qu\'ils ___ terminé la veille.',
          options: ['ont', 'avaient', 'auraient', 'avaient déjà'],
          correctIndex: 1,
          explanation: '"Ils AVAIENT terminé la veille." Le plus-que-parfait reste PLUS-QUE-PARFAIT dans le discours indirect (déjà le temps le plus reculé). "Avions terminé" (PQP) → "avaient terminé" (PQP, changement de sujet seulement).',
        },
        {
          id: 'b1-conj-03-ex10',
          type: 'qcm',
          question: 'Plus-que-parfait : "Il ne pouvait pas entrer car il ___ sa clé chez lui." (oublier)',
          options: ['oubliait', 'a oublié', 'avait oublié', 'oublierait'],
          correctIndex: 2,
          explanation: '"Il ne pouvait pas entrer car il AVAIT OUBLIÉ sa clé." Plus-que-parfait pour exprimer la CAUSE antérieure (oublier la clé) d\'une situation au passé (ne pas pouvoir entrer, à l\'imparfait).',
        },
        {
          id: 'b1-conj-03-ex11',
          type: 'qcm',
          question: 'Régulier "avoir" : "Tu ___ ce film avant de le revoir au cinéma ?" (déjà voir)',
          options: ['as déjà vu', 'avais déjà vu', 'aurais déjà vu', 'verrais déjà'],
          correctIndex: 1,
          explanation: '"Tu AVAIS DÉJÀ VU ce film avant de le revoir ?" Plus-que-parfait : "avoir" à l\'imparfait ("avais") + PP ("vu"). Action antérieure (avoir vu le film une première fois) à une autre action passée (le revoir).',
        },
        {
          id: 'b1-conj-03-ex12',
          type: 'qcm',
          question: 'Discours indirect négatif : "Je n\'ai pas reçu la convocation." → Il a dit qu\'il ___ la convocation.',
          options: [
            'n\'avait pas reçu',
            'n\'a pas reçu',
            'ne recevrait pas',
            'ne recevait pas',
          ],
          correctIndex: 0,
          explanation: '"Il a dit qu\'il N\'AVAIT PAS REÇU la convocation." Discours indirect passé négatif : "n\'ai pas reçu" (PC négatif) → "n\'avait pas reçu" (PQP négatif). La négation se conserve normalement dans la transformation.',
        },
        {
          id: 'b1-conj-03-ex13',
          type: 'qcm',
          question: 'Régulier "être" pluriel : "Les invités ___ déjà ___ quand nous sommes arrivés." (partir)',
          options: [
            'avaient / partis',
            'étaient / partis',
            'ont / partis',
            'sont / partis',
          ],
          correctIndex: 1,
          explanation: '"Les invités ÉTAIENT déjà PARTIS." "Partir" = verbe être. Plus-que-parfait pluriel : "étaient" (3ème pers. pl. de l\'imparfait d\'être) + PP accordé "partis" (masc. pl.).',
        },
        {
          id: 'b1-conj-03-ex14',
          type: 'qcm',
          question: 'Conditionnel passé après PQP : "S\'il ___ étudié davantage, il ___ l\'examen." (étudier / réussir)',
          options: [
            'avait / aurait réussi',
            'a / a réussi',
            'étudiait / réussirait',
            'aurait / aurait réussi',
          ],
          correctIndex: 0,
          explanation: '"S\'il AVAIT étudié davantage, il AURAIT RÉUSSI l\'examen." Si + plus-que-parfait → conditionnel passé. Structure classique de regret/hypothèse irréelle du passé.',
        },
        {
          id: 'b1-conj-03-ex15',
          type: 'qcm',
          question: 'Plus-que-parfait dans un récit : "Le médecin lui ___ déjà ___ ce traitement l\'année précédente." (prescrire)',
          options: [
            'a / prescrit',
            'avait / prescrit',
            'aurait / prescrit',
            'prescrivait / déjà',
          ],
          correctIndex: 1,
          explanation: '"Le médecin lui AVAIT déjà PRESCRIT ce traitement l\'année précédente." Plus-que-parfait pour une action antérieure mentionnée dans un récit. "L\'année précédente" confirme bien l\'antériorité par rapport au moment du récit.',
        },
        {
          id: 'b1-conj-03-ex16',
          type: 'qcm',
          question: 'Discours indirect : "Nous étions arrivés en avance." → Elle a expliqué qu\'ils ___ en avance.',
          options: [
            'étaient arrivés',
            'sont arrivés',
            'seraient arrivés',
            'arrivaient',
          ],
          correctIndex: 0,
          explanation: '"Ils ÉTAIENT ARRIVÉS en avance." Le plus-que-parfait reste plus-que-parfait dans le discours indirect (déjà le temps le plus reculé du système des temps passés, pas de transformation supplémentaire nécessaire).',
        },
        {
          id: 'b1-conj-03-ex17',
          type: 'qcm',
          question: 'Plus-que-parfait : "Je ne savais pas que vous ___ déménagé." (déjà)',
          options: ['avez', 'aviez', 'auriez', 'avaient'],
          correctIndex: 1,
          explanation: '"Je ne savais pas que vous AVIEZ déjà déménagé." Plus-que-parfait : "avoir" à l\'imparfait, 2ème pers. pl. ("aviez") + PP ("déménagé"). Action antérieure à la connaissance exprimée ("je ne savais pas").',
        },
        {
          id: 'b1-conj-03-ex18',
          type: 'qcm',
          question: 'Choisir entre passé composé et plus-que-parfait : "Hier, je suis allé au marché. Avant, j\'___ ma liste de courses." (préparer)',
          options: ['ai préparé', 'avais préparé', 'préparais', 'préparerais'],
          correctIndex: 1,
          explanation: '"Avant, j\'AVAIS PRÉPARÉ ma liste de courses." "Avant" + plus-que-parfait pour marquer l\'ANTÉRIORITÉ par rapport à l\'action principale du récit ("je suis allé au marché", au passé composé).',
        },
        {
          id: 'b1-conj-03-ex19',
          type: 'qcm',
          question: 'Plus-que-parfait avec accord : "Les documents qu\'elle ___ envoyés étaient incomplets." (avoir)',
          options: ['a', 'avait', 'aurait', 'avaient'],
          correctIndex: 1,
          explanation: '"Les documents qu\'elle AVAIT envoyés..." Plus-que-parfait, 3ème pers. sing. (elle) : "avait" + PP ("envoyés", accord avec "documents" COD placé avant car relatif "que").',
        },
        {
          id: 'b1-conj-03-ex20',
          type: 'qcm',
          question: 'Pourquoi le plus-que-parfait est-il essentiel pour raconter une histoire de façon cohérente ?',
          options: [
            'Il rend le récit plus formel uniquement',
            'Il permet de clarifier l\'ordre chronologique en distinguant ce qui s\'est passé AVANT l\'action principale du récit',
            'Il remplace toujours le passé composé',
            'Il s\'utilise uniquement à l\'écrit, jamais à l\'oral',
          ],
          correctIndex: 1,
          explanation: 'Sans plus-que-parfait, il serait difficile de distinguer l\'ORDRE des événements passés. "Quand je suis arrivé, il est parti" (ambigu : presque simultané ?) vs "Quand je suis arrivé, il ÉTAIT DÉJÀ parti" (clair : il est parti AVANT). Le plus-que-parfait structure le récit en marquant explicitement l\'antériorité.',
        },
      ],
    },

    {
      id: 'b1-conj-04',
      slug: 'b1-subjonctif-recap',
      moduleSlug: 'b1-conjugaison',
      level: 'B1',
      title: 'Le subjonctif présent — récapitulatif complet',
      description: 'Formation complète du subjonctif présent et liste exhaustive des déclencheurs.',
      duration: 35,
      free: false,
      dialogue: `## Texte : Maîtriser le subjonctif — un pilier du niveau B1

Le subjonctif est l'un des points grammaticaux les plus complexes pour les apprenants, mais il est indispensable au niveau B1.

**Formation régulière :** radical de "ils" au présent + -e, -es, -e, -ions, -iez, -ent
- finir → ils finiss-ent → que je finiss**e**, que tu finiss**es**...
- partir → ils part-ent → que je part**e**...

⚠️ Exception : aux 1ère et 2ème pers. du pluriel, le radical est celui de l'IMPARFAIT (= "nous/vous" au présent) :
"que nous finiss**ions**, que vous finiss**iez**" (identique à l'imparfait pour ces verbes réguliers)

**Les verbes complètement irréguliers :**
| Verbe | Subjonctif (je) | Verbe | Subjonctif (je) |
|---|---|---|---|
| être | que je **sois** | aller | que j'**aille** |
| avoir | que j'**aie** | vouloir | que je **veuille** |
| faire | que je **fasse** | pouvoir | que je **puisse** |
| savoir | que je **sache** | falloir | qu'il **faille** |

**Liste des déclencheurs du subjonctif à connaître absolument :**
- Volonté/souhait : vouloir que, souhaiter que, désirer que
- Obligation : il faut que, il est nécessaire que
- Sentiment : être content/heureux/triste/désolé que
- Doute : douter que, il est possible/impossible que
- Jugement : il est normal/bizarre/dommage que
- Après certaines conjonctions : pour que, avant que, bien que, à moins que, sans que, jusqu'à ce que`,

      linguisticPoint: `## Point linguistique : Indicatif ou subjonctif ? Le test de la certitude

### Méthode pour choisir
Posez-vous la question : le verbe/l'expression exprime-t-il une CERTITUDE ou une INCERTITUDE/SUBJECTIVITÉ ?

**INDICATIF (certitude, fait objectif) :**
penser que, croire que, savoir que, être sûr que, il est certain que, il est évident que, il paraît que (fait rapporté)

**SUBJONCTIF (incertitude, volonté, sentiment, jugement subjectif) :**
vouloir que, douter que, il est possible que, être content que, il faut que, il est normal que

### Cas particulier : la négation change parfois la nature
- "Je pense qu'il **vient**." (indicatif, certitude positive)
- "Je ne pense pas qu'il **vienne**." (subjonctif, la négation introduit le doute)

### Mémo pratique
Si on peut remplacer par "je suis sûr que" sans changer le sens → INDICATIF
Si la phrase implique un souhait, un jugement ou une incertitude → SUBJONCTIF`,

      keyPoints: [
        'Formation : radical "ils" présent + -e/-es/-e/-ions/-iez/-ent (sauf nous/vous = radical imparfait)',
        'Irréguliers totaux : être(sois)/avoir(aie)/faire(fasse)/aller(aille)/vouloir(veuille)/pouvoir(puisse)/savoir(sache)',
        'Déclencheurs : volonté / obligation / sentiment / doute / jugement / certaines conjonctions',
        'Indicatif = certitude (penser/croire/savoir que) / Subjonctif = incertitude-volonté-sentiment',
        'Négation peut transformer indicatif en subjonctif : "je pense qu\'il vient" → "je ne pense pas qu\'il vienne"',
      ],

      exercises: [
        {
          id: 'b1-conj-04-ex01',
          type: 'qcm',
          question: 'Subjonctif : "Il faut que tu ___ ce formulaire avant vendredi." (remplir)',
          options: ['remplis', 'remplisses', 'rempliras', 'remplirais'],
          correctIndex: 1,
          explanation: '"Il faut que tu REMPLISSES ce formulaire." "Il faut que" + subjonctif (obligation). "Remplir" → radical "ils remplissent" → "remplisse-" + "-es" = "remplisses" (2ème pers. sing.).',
        },
        {
          id: 'b1-conj-04-ex02',
          type: 'qcm',
          question: 'Quel est le subjonctif irrégulier de "aller" (1ère personne) ?',
          options: ['que j\'aile', 'que j\'aille', 'que je vais', 'que j\'allasse'],
          correctIndex: 1,
          explanation: '"Que j\'AILLE." Subjonctif irrégulier total de "aller" : aille/ailles/aille/allions/alliez/aillent. Notez que "nous/vous" utilisent un radical différent (all-) des autres personnes (aill-).',
        },
        {
          id: 'b1-conj-04-ex03',
          type: 'qcm',
          question: 'Indicatif ou subjonctif : "Je pense qu\'elle ___ raison." (avoir, certitude)',
          options: ['ait', 'a', 'aurait', 'avait'],
          correctIndex: 1,
          explanation: '"Je pense qu\'elle A raison." "Penser que" exprime une certitude/opinion affirmée → INDICATIF. Pas de subjonctif ici car pas de doute, juste une opinion personnelle assertive.',
        },
        {
          id: 'b1-conj-04-ex04',
          type: 'qcm',
          question: 'Subjonctif (nous/vous = radical imparfait) : "Il faut que nous ___ à l\'heure." (finir)',
          options: ['finissons', 'finissions', 'finirons', 'finirions'],
          correctIndex: 1,
          explanation: '"Il faut que nous FINISSIONS à l\'heure." Aux 1ère et 2ème pers. du pluriel, le subjonctif des verbes réguliers utilise le même radical que l\'imparfait : "finissions" (identique à l\'imparfait "nous finissions").',
        },
        {
          id: 'b1-conj-04-ex05',
          type: 'qcm',
          question: 'Négation transformant indicatif en subjonctif : "Je ne pense pas qu\'il ___." (venir)',
          options: ['vient', 'vienne', 'viendra', 'venait'],
          correctIndex: 1,
          explanation: '"Je ne pense pas qu\'il VIENNE." La NÉGATION de "penser que" introduit le doute → SUBJONCTIF (contrairement à "je pense qu\'il vient", indicatif). Règle importante : la forme négative change souvent la nature du verbe suivant.',
        },
        {
          id: 'b1-conj-04-ex06',
          type: 'qcm',
          question: 'Quel est le subjonctif irrégulier de "pouvoir" (1ère personne) ?',
          options: ['que je peux', 'que je puisse', 'que je pourrais', 'que je pouvais'],
          correctIndex: 1,
          explanation: '"Que je PUISSE." Subjonctif irrégulier total de "pouvoir" : puisse/puisses/puisse/puissions/puissiez/puissent. Radical complètement différent de l\'indicatif présent (peux).',
        },
        {
          id: 'b1-conj-04-ex07',
          type: 'qcm',
          question: 'Sentiment + subjonctif : "Je suis content que vous ___ réussi votre examen." (avoir)',
          options: ['avez', 'aviez', 'ayez', 'auriez'],
          correctIndex: 2,
          explanation: '"Je suis content que vous AYEZ réussi." Sentiment ("être content que") + subjonctif. Subjonctif PASSÉ ici : "ayez" (subjonctif d\'avoir) + PP ("réussi"). L\'action est antérieure au sentiment exprimé.',
        },
        {
          id: 'b1-conj-04-ex08',
          type: 'qcm',
          question: 'Indicatif (certitude) : "Il est évident que ce projet ___ du temps." (prendre)',
          options: ['prenne', 'prend', 'prendra', 'prît'],
          correctIndex: 1,
          explanation: '"Il est évident que ce projet PREND du temps." "Il est évident que" = certitude/évidence → INDICATIF (contrairement à "il est possible/normal que" qui prennent le subjonctif).',
        },
        {
          id: 'b1-conj-04-ex09',
          type: 'qcm',
          question: 'Quel est le subjonctif irrégulier de "savoir" (1ère personne) ?',
          options: ['que je sais', 'que je sache', 'que je saurais', 'que je savais'],
          correctIndex: 1,
          explanation: '"Que je SACHE." Subjonctif irrégulier total de "savoir" : sache/saches/sache/sachions/sachiez/sachent. Radical "sach-" complètement différent de l\'indicatif (sais).',
        },
        {
          id: 'b1-conj-04-ex10',
          type: 'qcm',
          question: 'Après conjonction "bien que" : "Bien qu\'il ___ fatigué, il continue de travailler." (être)',
          options: ['est', 'soit', 'sera', 'était'],
          correctIndex: 1,
          explanation: '"Bien qu\'il SOIT fatigué..." "Bien que" + SUBJONCTIF (toujours, sans exception). "Soit" = subjonctif présent d\'"être". Une des conjonctions de concession les plus fréquentes exigeant le subjonctif.',
        },
        {
          id: 'b1-conj-04-ex11',
          type: 'qcm',
          question: 'Jugement subjectif : "Il est dommage que vous ___ pas pu venir." (ne pouvoir)',
          options: ['avez', 'n\'ayez', 'n\'aviez', 'n\'auriez'],
          correctIndex: 1,
          explanation: '"Il est dommage que vous N\'AYEZ pas pu venir." "Il est dommage que" (jugement) + subjonctif. Ici, subjonctif passé : "n\'ayez pas" (subjonctif d\'avoir, négatif) + PP ("pu").',
        },
        {
          id: 'b1-conj-04-ex12',
          type: 'qcm',
          question: 'Quel est le subjonctif irrégulier de "vouloir" (1ère personne) ?',
          options: ['que je veux', 'que je veuille', 'que je voudrais', 'que je voulais'],
          correctIndex: 1,
          explanation: '"Que je VEUILLE." Subjonctif irrégulier total de "vouloir" : veuille/veuilles/veuille/voulions/vouliez/veuillent. Notez encore le radical différent pour nous/vous (voul-, comme l\'imparfait).',
        },
        {
          id: 'b1-conj-04-ex13',
          type: 'qcm',
          question: 'Indicatif (savoir = certitude) : "Je sais qu\'elle ___ la vérité." (dire)',
          options: ['dise', 'dit', 'dirait', 'disait'],
          correctIndex: 1,
          explanation: '"Je sais qu\'elle DIT la vérité." "Savoir que" = certitude/connaissance objective → INDICATIF. Différent de "je doute que" (subjonctif) ou "je souhaite que" (subjonctif).',
        },
        {
          id: 'b1-conj-04-ex14',
          type: 'qcm',
          question: 'Conjonction "avant que" + subjonctif : "Partez avant qu\'il ne ___ trop tard." (être)',
          options: ['est', 'soit', 'sera', 'était'],
          correctIndex: 1,
          explanation: '"Partez avant qu\'il ne SOIT trop tard." "Avant que" + subjonctif (toujours). Le "ne" ici est explétif (sans valeur négative) — fréquent après "avant que" mais facultatif.',
        },
        {
          id: 'b1-conj-04-ex15',
          type: 'qcm',
          question: 'Doute + subjonctif : "Il est possible que la réunion ___ annulée." (être)',
          options: ['est', 'soit', 'sera', 'serait'],
          correctIndex: 1,
          explanation: '"Il est possible que la réunion SOIT annulée." "Il est possible que" (incertitude) + subjonctif passif. "Soit" = subjonctif présent d\'"être" + "annulée" (PP, accord avec "réunion").',
        },
        {
          id: 'b1-conj-04-ex16',
          type: 'qcm',
          question: 'Quel est le subjonctif irrégulier de "faire" (1ère personne) ?',
          options: ['que je fais', 'que je fasse', 'que je ferais', 'que je faisais'],
          correctIndex: 1,
          explanation: '"Que je FASSE." Subjonctif irrégulier total de "faire" : fasse/fasses/fasse/fassions/fassiez/fassent. Radical "fass-" totalement différent de l\'indicatif (fais).',
        },
        {
          id: 'b1-conj-04-ex17',
          type: 'qcm',
          question: 'Conjonction "sans que" + subjonctif : "Il est parti sans que personne ne le ___." (remarquer)',
          options: ['remarque', 'remarquait', 'a remarqué', 'remarquera'],
          correctIndex: 0,
          explanation: '"Il est parti SANS QUE personne ne le REMARQUE." "Sans que" + subjonctif (toujours, exprime une absence/exception). "Remarque" = subjonctif présent (régulier) de "remarquer".',
        },
        {
          id: 'b1-conj-04-ex18',
          type: 'qcm',
          question: 'Indicatif (être sûr = certitude) : "Je suis sûr qu\'il ___ raison." (avoir)',
          options: ['ait', 'a', 'aura', 'aurait'],
          correctIndex: 1,
          explanation: '"Je suis sûr qu\'il A raison." "Être sûr que" = certitude → INDICATIF. ⚠️ Contraste avec "je ne suis pas sûr que" (négation → incertitude → subjonctif : "qu\'il ait raison").',
        },
        {
          id: 'b1-conj-04-ex19',
          type: 'qcm',
          question: 'Conjonction "jusqu\'à ce que" + subjonctif : "Attendez ici jusqu\'à ce que je ___." (revenir)',
          options: ['reviens', 'revienne', 'reviendrai', 'revenais'],
          correctIndex: 1,
          explanation: '"Attendez ici jusqu\'à ce que je REVIENNE." "Jusqu\'à ce que" + subjonctif (toujours). "Revienne" = subjonctif présent de "revenir" (irrégulier comme "venir" → vienne).',
        },
        {
          id: 'b1-conj-04-ex20',
          type: 'qcm',
          question: 'Pourquoi "je pense qu\'il vient" (indicatif) devient "je ne pense pas qu\'il vienne" (subjonctif) à la forme négative ?',
          options: [
            'C\'est une règle arbitraire sans logique',
            'La négation transforme une affirmation certaine en une affirmation incertaine/doutée, ce qui déclenche le subjonctif',
            'Le subjonctif est toujours obligatoire après une négation, quel que soit le verbe',
            'C\'est une erreur fréquente qui devrait être évitée',
          ],
          correctIndex: 1,
          explanation: '"Je pense que" = affirmation positive et certaine → indicatif. "Je NE pense PAS que" = je ne suis plus sûr, j\'introduis un DOUTE → subjonctif. La logique sous-jacente du subjonctif (incertitude, subjectivité) explique ce changement : nier une certitude crée mécaniquement de l\'incertitude.',
        },
      ],
    },
  ],
};
