import type { LangModule } from '../types';

export const a2Grammaire: LangModule = {
  id: 'a2-mod-07',
  slug: 'a2-grammaire',
  level: 'A2',
  title: 'Grammaire fondamentale',
  subtitle: 'Articles, pronoms, négation et politesse',
  description: 'Maîtrisez les bases grammaticales essentielles pour communiquer clairement en français.',
  type: 'grammaire',
  emoji: '📐',
  free: false,
  lessons: [
    {
      id: 'a2-gr-01',
      slug: 'a2-articles-determinants',
      moduleSlug: 'a2-grammaire',
      level: 'A2',
      title: 'Les articles et déterminants',
      description: 'Maîtrisez les articles définis, indéfinis et partitifs pour parler de quantités et d\'objets.',
      duration: 35,
      free: false,
      dialogue: `## Texte : La cuisine française — les ingrédients

Pour préparer une bonne ratatouille, il faut des légumes frais. Le chef achète des tomates, des courgettes, des aubergines et des poivrons. Il ajoute de l\'huile d\'olive — la huile d\'olive est essentielle dans la cuisine méditerranéenne. Il met aussi de l\'ail, du thym et du basilic. Il ne met pas de sel en excès car les tomates apportent déjà de la saveur.

La ratatouille est le plat typique de Provence. C\'est un plat végétarien. On mange la ratatouille chaude ou froide, en entrée ou en plat principal. Les Français l\'apprécient beaucoup.`,

      linguisticPoint: `## Point linguistique : Les articles — système complet

### 1. Articles définis (the — chose connue, unique, générale)
| | Masculin | Féminin | Pluriel |
|---|---|---|---|
| Singulier | **le** pain | **la** baguette | **les** croissants |
| Devant voyelle | **l\'**ail | **l\'**huile | — |

### 2. Articles indéfinis (a/an/some — chose non identifiée)
| | Masculin | Féminin | Pluriel |
|---|---|---|---|
| | **un** tomate (masc.) | **une** tomate | **des** tomates |
| Négatif | pas **de** tomate | pas **de** tomate | pas **de** tomates |

### 3. Articles partitifs (some — quantité indéfinie de matière)
| | Masculin | Féminin |
|---|---|---|
| | **du** sel | **de la** saveur |
| Devant voyelle | **de l\'**ail | **de l\'**huile |
| Négatif | pas **de** sel | pas **de** saveur |

### Quand utiliser quel article ?
- **Défini** = chose connue / générale : "J\'aime **le** fromage" (en général)
- **Indéfini** = objet unique non identifié : "Je voudrais **un** café"
- **Partitif** = quantité indéfinie : "Je prends **du** café" (une quantité non comptée)`,

      keyPoints: [
        'Défini (le/la/l\'/les) : chose connue, genre, ou généralité',
        'Indéfini (un/une/des) : objet singulier non identifié',
        'Partitif (du/de la/de l\') : quantité indéfinie de matière',
        'Après la négation : tous deviennent "de/d\'" (pas de sel, pas d\'huile)',
        '"L\'huile" — l\' devant H aspiré ou non : toujours l\' pour "huile"',
      ],

      exercises: [
        {
          id: 'a2-gr-01-ex01',
          type: 'qcm',
          question: 'Choisissez l\'article correct : "Je voudrais ___ café, s\'il vous plaît."',
          options: ['le', 'un', 'du', 'de la'],
          correctIndex: 2,
          explanation: '"Du café" = article partitif (quantité indéfinie de café). "Un café" = un café bien précis (une tasse). "Le café" = le café en général. En commande au café/restaurant : "un café" (spécifique) mais "du café" en contexte de quantité indéfinie.',
        },
        {
          id: 'a2-gr-01-ex02',
          type: 'qcm',
          question: 'Transformez à la négative : "Je mange du fromage." →',
          options: [
            'Je ne mange pas du fromage',
            'Je ne mange pas de fromage',
            'Je ne mange pas le fromage',
            'Je ne mange du pas fromage',
          ],
          correctIndex: 1,
          explanation: 'Après la négation, du/de la/de l\'/des → "de". "Je mange DU fromage" → "Je ne mange pas DE fromage." Exception : avec le verbe "être" on garde l\'article : "Ce n\'est pas DU fromage" ✓.',
        },
        {
          id: 'a2-gr-01-ex03',
          type: 'qcm',
          question: 'Article correct : "___ tomates sont bonnes dans cette ratatouille."',
          options: ['Des', 'Les', 'De', 'Un'],
          correctIndex: 1,
          explanation: '"LES tomates sont bonnes" = article défini, pluriel. On parle des tomates de cette ratatouille spécifique (identifiées par "dans cette ratatouille"). Le défini identifie quelque chose de précis ou de connu.',
        },
        {
          id: 'a2-gr-01-ex04',
          type: 'qcm',
          question: '"Il ajoute ___ huile d\'olive." Quel article ?',
          options: ['du', 'de l\'', 'de la', 'une'],
          correctIndex: 1,
          explanation: '"De L\'huile" = partitif féminin devant voyelle. "Huile" est féminin (la huile → l\'huile). L\'article partitif féminin "de la" + voyelle → "de l\'" (élision). "Il ajoute DE L\'huile."',
        },
        {
          id: 'a2-gr-01-ex05',
          type: 'qcm',
          question: '"J\'aime ___ fromage" (en général, toutes sortes) vs "___ fromage que tu as acheté"',
          options: [
            'de / le', 'le / le', 'du / le', 'le / du',
          ],
          correctIndex: 2,
          explanation: '"J\'aime LE fromage" (défini = généralité) vs "LE fromage que tu as acheté" (défini = déjà identifié). "Du fromage" serait une quantité. Ici : LE pour la généralité (j\'aime le fromage = tous les fromages en général).',
        },
        {
          id: 'a2-gr-01-ex06',
          type: 'qcm',
          question: 'Négation : "Elle prend des médicaments." →',
          options: [
            'Elle ne prend pas des médicaments',
            'Elle ne prend pas de médicaments',
            'Elle ne prend pas les médicaments',
            'Elle ne prend des pas médicaments',
          ],
          correctIndex: 1,
          explanation: '"Des médicaments" (indéfini pluriel) → "DE médicaments" après négation. "Elle ne prend pas DE médicaments." La règle : tous les articles indéfinis et partitifs deviennent "de/d\'" dans une phrase négative.',
        },
        {
          id: 'a2-gr-01-ex07',
          type: 'qcm',
          question: '"C\'est ___ plat végétarien." (un plat, pas tous les plats végétariens)',
          options: ['le', 'un', 'du', 'des'],
          correctIndex: 1,
          explanation: '"C\'est UN plat végétarien." Article indéfini (un/une) pour identifier un objet singulier non spécifié. "C\'est LE plat végétarien" impliquerait un plat connu et précis. "C\'est UN plat" = it\'s a vegetarian dish (parmi d\'autres).',
        },
        {
          id: 'a2-gr-01-ex08',
          type: 'qcm',
          question: '"Il ne met pas ___ sel en excès."',
          options: ['du', 'le', 'de', 'un'],
          correctIndex: 2,
          explanation: '"Il ne met pas DE sel." Partitif (du sel) → "de" après négation. "Ne... pas" transforme "du/de la/des" en "de" invariable.',
        },
        {
          id: 'a2-gr-01-ex09',
          type: 'qcm',
          question: '"Elle boit ___ eau minérale chaque matin." (une quantité)',
          options: ['l\'', 'une', 'de l\'', 'des'],
          correctIndex: 2,
          explanation: '"Elle boit DE L\'eau minérale." "Eau" est féminin + commence par voyelle → partitif = "de l\'" (élision). Une quantité indéfinie d\'eau = partitif.',
        },
        {
          id: 'a2-gr-01-ex10',
          type: 'qcm',
          question: 'Généralité ou partitif ? "Les Français ___ vin." (en général)',
          options: ['boivent du', 'boivent le', 'boivent de', 'boivent un'],
          correctIndex: 0,
          explanation: '"Les Français boivent DU vin" = partitif (une quantité indéfinie de vin). Pour les habitudes et préférences alimentaires, on utilise le partitif : "Je mange du pain" / "Tu bois du café" / "Il prend du thé".',
        },
        {
          id: 'a2-gr-01-ex11',
          type: 'qcm',
          question: '"___ Provence est une belle région." (nom géographique connu)',
          options: ['Une', 'La', 'De la', 'Les'],
          correctIndex: 1,
          explanation: '"LA Provence" = article défini féminin. Les régions, pays, continents prennent généralement l\'article défini : LA France / LA Provence / LE Maroc / LES États-Unis.',
        },
        {
          id: 'a2-gr-01-ex12',
          type: 'qcm',
          question: '"Il y a ___ personnes qui attendent." (nombre non précisé)',
          options: ['les', 'des', 'de', 'les'],
          correctIndex: 1,
          explanation: '"Il y a DES personnes" = indéfini pluriel (un nombre non précisé de personnes). "Il y a LES personnes" impliquerait des personnes précises et connues. "Des" = un certain nombre de.',
        },
        {
          id: 'a2-gr-01-ex13',
          type: 'qcm',
          question: 'Après "beaucoup de" : "Il y a beaucoup ___ légumes dans ce marché."',
          options: ['de', 'des', 'du', 'les'],
          correctIndex: 0,
          explanation: 'Après les expressions de quantité (beaucoup DE, peu DE, assez DE, trop DE...), l\'article devient toujours "de/d\'" : "beaucoup DE légumes" / "peu DE sel" / "trop DE sucre".',
        },
        {
          id: 'a2-gr-01-ex14',
          type: 'qcm',
          question: '"Tu as ___ sœur ?" (question sur l\'existence)',
          options: ['la', 'une', 'de la', 'des'],
          correctIndex: 1,
          explanation: '"Tu as UNE sœur ?" = indéfini singulier. Question sur l\'existence d\'une chose. "La sœur" = une sœur précise déjà mentionnée. "Une sœur" = asking if a sister exists (parmi les possibilités).',
        },
        {
          id: 'a2-gr-01-ex15',
          type: 'qcm',
          question: '"Je n\'ai pas ___ sœur." (négation de "avoir une sœur")',
          options: ['une', 'de', 'la', 'des'],
          correctIndex: 1,
          explanation: '"Je n\'ai pas DE sœur." "Une sœur" (indéfini) → "de/d\'" après négation. "Je n\'ai pas DE sœur" = I don\'t have any sister. Pas de distinction singulier/pluriel — toujours "de" invariable.',
        },
        {
          id: 'a2-gr-01-ex16',
          type: 'qcm',
          question: '"___ chef achète ___ tomates fraîches."',
          options: ['Un / des', 'Le / des', 'Le / les', 'Un / les'],
          correctIndex: 1,
          explanation: '"LE chef achète DES tomates fraîches." LE chef = défini (le chef qu\'on vient de mentionner dans le texte). DES tomates = indéfini pluriel (plusieurs tomates, quantité non précisée).',
        },
        {
          id: 'a2-gr-01-ex17',
          type: 'qcm',
          question: 'Après "assez de" : "Elle a assez ___ argent pour le voyage."',
          options: ['de l\'', 'du', "d'", 'de'],
          correctIndex: 2,
          explanation: 'Après une expression de quantité (assez, beaucoup, peu, trop...) + voyelle : "de" + élision → "d\'". "Elle a assez D\'argent." Règle : expression de quantité + DE/D\' + nom (jamais du/de la/des).',
        },
        {
          id: 'a2-gr-01-ex18',
          type: 'qcm',
          question: '"C\'est ___ ratatouille." vs "J\'aime ___ ratatouille."',
          options: [
            'une / la',
            'la / la',
            'de la / la',
            'une / de la',
          ],
          correctIndex: 0,
          explanation: '"C\'est UNE ratatouille" (indéfini — identifier ce que c\'est). "J\'aime LA ratatouille" (défini — généralité/tous les types de ratatouille). Pour les préférences alimentaires : "j\'aime LE/LA/LES + aliment" (généralité).',
        },
        {
          id: 'a2-gr-01-ex19',
          type: 'qcm',
          question: '"Il y a ___ ail dans cette sauce." (quantité)',
          options: ['du', 'de l\'', 'un', 'des'],
          correctIndex: 1,
          explanation: '"Il y a DE L\'ail." "Ail" est masculin singulier + commence par voyelle → partitif = "de l\'" (élision de "du"). "Il y a de l\'ail" = there\'s some garlic.',
        },
        {
          id: 'a2-gr-01-ex20',
          type: 'qcm',
          question: 'Transformez : "Elle mange des fruits." → négation',
          options: [
            'Elle ne mange pas les fruits',
            'Elle ne mange pas des fruits',
            'Elle ne mange pas de fruits',
            'Elle ne mange des fruits pas',
          ],
          correctIndex: 2,
          explanation: '"Elle ne mange pas DE fruits." Règle de négation : des → de. "Elle mange DES fruits" → "Elle ne mange pas DE fruits." Simple, invariable : toujours "de/d\'" après la négation.',
        },
      ],
    },

    {
      id: 'a2-gr-02',
      slug: 'a2-pronoms-personnels',
      moduleSlug: 'a2-grammaire',
      level: 'A2',
      title: 'Les pronoms personnels complets',
      description: 'Pronoms sujets, COD, COI, toniques et réfléchis — maîtrisez tous les pronoms.',
      duration: 35,
      free: false,
      dialogue: `## Dialogue : Expliquer une démarche à un ami

*Nadia explique à son amie comment elle a obtenu son titre de séjour.*

**Amie :** Tu as finalement eu ton titre de séjour ?

**Nadia :** Oui ! Je l'ai eu hier. C'était long mais ça y est.

**Amie :** Tu me raccontes comment tu as fait ?

**Nadia :** Bien sûr. D'abord, j'ai téléphoné à la préfecture pour leur demander les documents nécessaires. Ils m'ont envoyé une liste par email.

**Amie :** Et tu les as tous rassemblés facilement ?

**Nadia :** Presque tous. La traduction officielle, c'est moi qui l'ai faite faire — ça coûte cher ! Mais sans elle, ils ne t'acceptent pas le dossier.

**Amie :** Et le rendez-vous, tu l'as eu comment ?

**Nadia :** Via le site internet. Je me suis connectée, j'ai rempli le formulaire et ils m'ont donné un créneau pour trois semaines plus tard.

**Amie :** C'est toi qui t'en es occupée toute seule ?

**Nadia :** Oui, moi. Mon mari voulait m'aider mais je lui ai dit que je voulais le faire moi-même.`,

      linguisticPoint: `## Point linguistique : Les pronoms — tableau complet

### Pronoms personnels — tableau récapitulatif
| Personne | Sujet | COD | COI | Tonique | Réfléchi |
|---|---|---|---|---|---|
| 1ère sing. | je/j\' | me/m\' | me/m\' | **moi** | me/m\' |
| 2ème sing. | tu | te/t\' | te/t\' | **toi** | te/t\' |
| 3ème sing. m | il | **le**/l\' | **lui** | **lui** | se/s\' |
| 3ème sing. f | elle | **la**/l\' | **lui** | **elle** | se/s\' |
| 1ère pl. | nous | nous | nous | **nous** | nous |
| 2ème pl. | vous | vous | vous | **vous** | vous |
| 3ème pl. m | ils | **les** | **leur** | **eux** | se/s\' |
| 3ème pl. f | elles | **les** | **leur** | **elles** | se/s\' |

### COD vs COI — comment distinguer ?
- **COD** : verbe + objet direct (sans préposition) : "j\'ai LE titre" → "je L\'ai"
- **COI** : verbe + à + objet : "je parle À eux" → "je LEUR parle"

### Pronoms toniques — utilisations
- Après préposition : "c\'est pour **moi**" / "sans **lui**"
- Emphase : "**Moi**, je travaille" / "**Elle**, elle est partie"
- Comparaisons : "plus grand que **toi**"
- Après "c\'est" : "c\'est **moi** qui..." / "c\'est **lui** qui..."`,

      keyPoints: [
        'COD : me/te/le/la/nous/vous/les (remplace verbe + objet direct)',
        'COI : me/te/lui/nous/vous/leur (remplace à + personne)',
        'Toniques : moi/toi/lui/elle/nous/vous/eux/elles (après préposition)',
        '"C\'est moi qui l\'ai fait" = pronom tonique + pronom COD',
        'Place des pronoms : avant le verbe conjugué (sauf impératif affirmatif)',
      ],

      exercises: [
        {
          id: 'a2-gr-02-ex01',
          type: 'qcm',
          question: 'Remplacez le COD : "Nadia a eu son titre de séjour." →',
          options: ['Elle lui a eu', 'Elle l\'a eu', 'Elle le a eu', 'Elle en a eu'],
          correctIndex: 1,
          explanation: '"Son titre de séjour" = COD masculin singulier → pronom COD = "le" → élision = "l\'" devant "a". "Elle L\'a eu." Attention : dans les temps composés, le COD se place avant l\'auxiliaire.',
        },
        {
          id: 'a2-gr-02-ex02',
          type: 'qcm',
          question: 'COD ou COI ? "J\'ai téléphoné à la préfecture pour ___ demander."',
          options: ['le', 'la', 'lui', 'leur'],
          correctIndex: 2,
          explanation: '"Demander À la préfecture" → "à + objet" = COI → pronom COI féminin singulier = "lui". "J\'ai téléphoné à la préfecture pour LUI demander." COI sing. : lui (m/f). COI pl. : leur.',
        },
        {
          id: 'a2-gr-02-ex03',
          type: 'qcm',
          question: '"C\'est ___ qui l\'a fait." (Nadia, 1ère personne)',
          options: ['je', 'me', 'moi', 'lui'],
          correctIndex: 2,
          explanation: '"C\'est MOI qui l\'ai fait." Après "c\'est", on utilise le pronom TONIQUE : moi/toi/lui/elle/nous/vous/eux/elles. Jamais "c\'est je" ❌. Le verbe qui suit s\'accorde avec la personne réelle : "c\'est MOI qui AI fait".',
        },
        {
          id: 'a2-gr-02-ex04',
          type: 'qcm',
          question: '"Ils ___ ont envoyé une liste par email." (à Nadia)',
          options: ['la', 'le', 'lui', 'm\''],
          correctIndex: 3,
          explanation: '"Ils M\'ont envoyé une liste." "Envoyer à quelqu\'un" = COI. Nadia = je = COI = "me/m\'". "Ils M\'ont envoyé" (m\' = élision de "me" devant voyelle).',
        },
        {
          id: 'a2-gr-02-ex05',
          type: 'qcm',
          question: '"Tu ___ as tous rassemblés ?" (les documents)',
          options: ['lui', 'les', 'leur', 'y'],
          correctIndex: 1,
          explanation: '"Tu LES as tous rassemblés ?" "Les documents" = COD masculin pluriel → "les". Dans les temps composés, le COD se place avant l\'auxiliaire. Accord du participe passé : "rassemblés" (masc. pl.) s\'accorde avec le COD "les" qui le précède.',
        },
        {
          id: 'a2-gr-02-ex06',
          type: 'qcm',
          question: '"Je ___ ai dit que je voulais le faire moi-même." (à mon mari)',
          options: ['l\'', 'le', 'lui', 'y'],
          correctIndex: 2,
          explanation: '"Je LUI ai dit." "Dire à quelqu\'un" = COI. Mon mari = COI masc. sing. = "lui". "Je lui ai dit" = I told him. COI se place avant l\'auxiliaire dans les temps composés.',
        },
        {
          id: 'a2-gr-02-ex07',
          type: 'qcm',
          question: 'Pronom tonique : "Elle est venue avec son mari et ___." (moi, 1ère pers.)',
          options: ['je', 'me', 'moi', 'mon'],
          correctIndex: 2,
          explanation: '"Avec MOI." Après une préposition (avec, pour, sans, chez, etc.), on utilise toujours le pronom TONIQUE : avec moi / pour toi / sans lui / chez elle / entre nous / devant vous / après eux.',
        },
        {
          id: 'a2-gr-02-ex08',
          type: 'qcm',
          question: '"Sans ___, ils n\'acceptent pas le dossier." (la traduction, fém. sing.)',
          options: ['lui', 'elle', 'la', 'l\''],
          correctIndex: 1,
          explanation: '"Sans ELLE." Après une préposition (sans, avec, pour, chez...) + CHOSE (pas personne) : on utilise le pronom tonique. "Elle" pour une chose féminine. "Sans elle" = without it (the translation).',
        },
        {
          id: 'a2-gr-02-ex09',
          type: 'qcm',
          question: 'Quel est le COI pluriel ? "Je parle à mes parents." →',
          options: ['Je leur parle', 'Je les parle', 'Je lui parle', 'Je y parle'],
          correctIndex: 0,
          explanation: '"Je LEUR parle." "Parler À quelqu\'un" = COI. Mes parents (pluriel) → COI pluriel = "leur". "Je leur parle" = I speak to them. Attention : "leur" invariable (pas de s).',
        },
        {
          id: 'a2-gr-02-ex10',
          type: 'qcm',
          question: '"___, elle travaille dur." (emphase sur "elle")',
          options: ['Elle', 'Lui', 'Elle elle', 'Moi'],
          correctIndex: 2,
          explanation: '"ELLE, elle travaille dur." Pour l\'emphase, on répète le sujet : pronom tonique + virgule + pronom sujet. "Moi, je..." / "Toi, tu..." / "Lui, il..." / "Elle, elle..."',
        },
        {
          id: 'a2-gr-02-ex11',
          type: 'qcm',
          question: '"Mon mari voulait ___ aider." (m\'aider, aider Nadia)',
          options: ['me', 'moi', 'je', 'lui'],
          correctIndex: 0,
          explanation: '"Mon mari voulait M\'aider." COD de "aider" = Nadia (1ère personne) = pronom COD "me" → élision "m\'" devant voyelle. "M\'aider" = to help me.',
        },
        {
          id: 'a2-gr-02-ex12',
          type: 'qcm',
          question: '"C\'est ___ qui nous a aidés." (eux, les assistantes sociales)',
          options: ['eux', 'ils', 'leur', 'les'],
          correctIndex: 0,
          explanation: '"C\'est EUX qui nous ont aidés." Pronom TONIQUE après "c\'est" pour un groupe masculin pluriel : "eux". Le verbe s\'accorde : "c\'est eux qui ONT aidés" (3ème pluriel).',
        },
        {
          id: 'a2-gr-02-ex13',
          type: 'qcm',
          question: 'Place du pronom COD avec l\'infinitif : "Je veux acheter le billet." →',
          options: [
            'Je le veux acheter',
            'Je veux l\'acheter',
            'Je l\'acheter veux',
            'Je veux acheter le',
          ],
          correctIndex: 1,
          explanation: '"Je veux L\'acheter." Avec infinitif, le pronom COD se place AVANT l\'infinitif (après le verbe conjugué). "Acheter LE billet" → "l\'acheter". Règle : pronom immédiatement avant le verbe dont il est l\'objet.',
        },
        {
          id: 'a2-gr-02-ex14',
          type: 'qcm',
          question: 'Comparaison : "Elle est plus patiente que ___." (moi)',
          options: ['je', 'me', 'moi', 'mon'],
          correctIndex: 2,
          explanation: 'Dans les comparaisons, après "que" : pronom TONIQUE. "Plus grande que MOI" / "plus rapide que TOI" / "plus fort que LUI". Jamais "plus que je" ❌.',
        },
        {
          id: 'a2-gr-02-ex15',
          type: 'qcm',
          question: '"Elle s\'est occupée du dossier." → le pronom "s\'" est...',
          options: ['COD', 'COI (s\'occuper DE = COI)', 'Pronom réfléchi', 'Pronom sujet'],
          correctIndex: 2,
          explanation: '"S\'" est un pronom réfléchi (verbe pronominal "s\'occuper"). "Elle S\'est occupée" = she took care of it (elle + elle). Le pronom réfléchi et l\'auxiliaire être = accord du participe : "occupée" (féminin).',
        },
        {
          id: 'a2-gr-02-ex16',
          type: 'qcm',
          question: '"Ils ___ ont donné un créneau." (à Nadia, COI = m\')',
          options: ['le', 'lui', 'm\'', 'y'],
          correctIndex: 2,
          explanation: '"Ils M\'ont donné un créneau." "Donner à quelqu\'un" = COI. Nadia (je) → COI = me/m\'. "Ils m\'ont donné" = they gave me.',
        },
        {
          id: 'a2-gr-02-ex17',
          type: 'qcm',
          question: 'COD féminin pluriel : "Elle a pris les photos." →',
          options: ['Elle lui a pris', 'Elle l\'a pris', 'Elle les a prises', 'Elle leur a pris'],
          correctIndex: 2,
          explanation: '"Elle LES a prises." "Les photos" = COD féminin pluriel → "les". Dans les temps composés avec "avoir", le participe passé s\'accorde avec le COD PLACÉ AVANT le verbe : "les" (fém. pl.) → "prises" (pas "pris").',
        },
        {
          id: 'a2-gr-02-ex18',
          type: 'qcm',
          question: 'Impératif affirmatif : "Donne-___ ton dossier !" (donne-le ou donne-lui)',
          options: ['Donne-le', 'Donne-lui', 'Donne-l\'', 'Donne-y'],
          correctIndex: 0,
          explanation: 'Si "ton dossier" est le COD (ce qu\'on donne), alors "Donne-LE" (pronom COD masc. sing.). Si on donne quelque chose "à quelqu\'un", ce quelqu\'un est COI → "Donne-LUI" (COI). Ici : COD (objet direct), donc "Donne-LE !"',
        },
        {
          id: 'a2-gr-02-ex19',
          type: 'qcm',
          question: '"Chez ___" signifie "at their place" (eux, 3ème masc. pl.)',
          options: ['chez ils', 'chez leur', 'chez eux', 'chez les'],
          correctIndex: 2,
          explanation: '"Chez EUX" = at their place. Après "chez" : pronom tonique. Chez moi / chez toi / chez lui / chez elle / chez nous / chez vous / chez eux / chez elles.',
        },
        {
          id: 'a2-gr-02-ex20',
          type: 'qcm',
          question: '"Mon mari et moi, ___ sommes allés ensemble." (nous)',
          options: ['je', 'nous', 'on', 'B et C sont corrects ("nous" formel / "on" familier)'],
          correctIndex: 3,
          explanation: '"Nous sommes allés ensemble" (formel/écrit) = "On est allés ensemble" (familier/oral). "Mon mari et moi" = 1ère personne plurielle. En français parlé, "on" (avec accord au 3ème sing.) remplace souvent "nous".',
        },
      ],
    },

    {
      id: 'a2-gr-03',
      slug: 'a2-negation-interrogation',
      moduleSlug: 'a2-grammaire',
      level: 'A2',
      title: 'Négation et interrogation avancées',
      description: 'Maîtrisez toutes les formes de la négation et de l\'interrogation en français.',
      duration: 35,
      free: false,
      dialogue: `## Dialogue : Répondre à une enquête de satisfaction

*Une enquêtrice pose des questions à Ahmed après sa formation.*

**Enquêtrice :** Bonjour, monsieur. Est-ce que vous avez des questions ?

**Ahmed :** Non, plus aucune. La formatrice a tout expliqué.

**Enquêtrice :** Avez-vous eu des difficultés pendant la formation ?

**Ahmed :** Non, je n'en ai eu aucune. Tout était clair.

**Enquêtrice :** Est-ce qu'il y a quelqu'un qui vous a aidé ?

**Ahmed :** Non, personne ne m'a aidé — j'ai tout compris seul !

**Enquêtrice :** Vous n'avez jamais eu besoin d'aide supplémentaire ?

**Ahmed :** Non, jamais. Mais je dois dire que cette formation est excellente.

**Enquêtrice :** Et vous n'avez rien à changer dans la formation ?

**Ahmed :** Non, rien. Je recommanderais cette formation à tout le monde.`,

      linguisticPoint: `## Point linguistique : Les formes de la négation

### Négations simples et complexes
| Négation | Sens | Exemple |
|---|---|---|
| ne... **pas** | not | Je ne parle **pas** |
| ne... **plus** | no more / no longer | Je ne travaille **plus** |
| ne... **jamais** | never | Je ne vais **jamais** là-bas |
| ne... **rien** | nothing / anything | Il ne dit **rien** |
| ne... **personne** | nobody / no one | Je ne vois **personne** |
| ne... **aucun(e)** | none / no | Je n\'ai **aucun** problème |
| ne... **que** | only | Il ne mange **que** des fruits |
| ne... **ni... ni** | neither... nor | Il ne boit **ni** café **ni** thé |

### Position spéciale
- "Rien" et "personne" peuvent être sujets : "**Rien** ne m\'arrête" / "**Personne** ne sait"
- "Aucun" s\'accorde : "**Aucune** question" (fém.) / "**Aucun** problème" (masc.)
- En français oral familier : "ne" disparaît souvent : "J\'sais pas" / "J\'veux rien"

### L\'interrogation — 3 niveaux de registre
1. **Familier** : "Tu viens ?" (intonation montante)
2. **Standard** : "Est-ce que tu viens ?"
3. **Soutenu** : "Viens-tu ?" (inversion sujet-verbe)`,

      keyPoints: [
        'ne...pas / ne...plus / ne...jamais / ne...rien / ne...personne / ne...aucun / ne...que',
        '"Rien" et "personne" peuvent être sujets : "Rien ne va" / "Personne ne sait"',
        '"Ne...que" = seulement (restriction) — pas vraiment une négation',
        'En oral familier, "ne" disparaît souvent',
        '3 registres d\'interrogation : intonation / est-ce que / inversion',
      ],

      exercises: [
        {
          id: 'a2-gr-03-ex01',
          type: 'qcm',
          question: 'Transformez à la négative (ne...plus) : "Il travaille encore à la préfecture."',
          options: [
            'Il ne travaille jamais à la préfecture',
            'Il ne travaille plus à la préfecture',
            'Il ne travaille pas à la préfecture',
            'Il ne travaille rien à la préfecture',
          ],
          correctIndex: 1,
          explanation: '"Plus" exprime la cessation d\'une action : "Il ne travaille PLUS à la préfecture" = He no longer works there. "Encore" (still) → "plus" (no longer) à la négative.',
        },
        {
          id: 'a2-gr-03-ex02',
          type: 'qcm',
          question: 'Ahmed dit "personne ne m\'a aidé." Que signifie cette structure ?',
          options: [
            '"Personne" est sujet de la phrase (nobody helped me)',
            '"Personne" est COD (I didn\'t help nobody)',
            '"Personne" remplace "quelqu\'un"',
            '"Personne ne" = deux négations qui s\'annulent',
          ],
          correctIndex: 0,
          explanation: '"Personne ne m\'a aidé" = Nobody helped me. "Personne" est le SUJET de la phrase → "ne" vient immédiatement après. "Personne ne + verbe" (sujet). À comparer : "Je ne vois personne" (COD en fin de phrase).',
        },
        {
          id: 'a2-gr-03-ex03',
          type: 'qcm',
          question: 'Négation avec "rien" sujet : Transformez "Quelque chose va mal." →',
          options: [
            'Ne rien va mal',
            'Rien ne va mal',
            'Je ne vais rien mal',
            'Rien va pas mal',
          ],
          correctIndex: 1,
          explanation: '"RIEN NE va mal." Quand "rien" est sujet, il se place en début de phrase, suivi de "ne" + verbe. "Rien ne va" (nothing is going well) est une expression très courante.',
        },
        {
          id: 'a2-gr-03-ex04',
          type: 'qcm',
          question: '"Je n\'ai aucune question." — "aucune" est accordé au féminin car :',
          options: [
            'Il est toujours féminin',
            'Il s\'accorde avec le nom qu\'il accompagne ("question" est féminin)',
            '"Aucun" ne s\'accorde pas',
            'Il remplace "la" dans la phrase',
          ],
          correctIndex: 1,
          explanation: '"Aucun/aucune" s\'accorde en genre avec le nom qui suit. "Question" est féminin → "aucUNE question". "Aucun problème" (masc.). Aucun = no, not any.',
        },
        {
          id: 'a2-gr-03-ex05',
          type: 'qcm',
          question: '"Ne...que" = restriction. "Il ne mange que des fruits." Quel est le sens ?',
          options: [
            'Il ne mange jamais de fruits',
            'Il mange SEULEMENT des fruits',
            'Il mange des fruits et rien d\'autre parfois',
            'Il n\'a que peu de fruits',
          ],
          correctIndex: 1,
          explanation: '"Ne...que" = seulement / uniquement. "Il ne mange QUE des fruits" = He eats ONLY fruits. Ce n\'est pas vraiment une négation mais une restriction. Contrairement aux autres négations, "que" se place directement avant l\'élément restreint.',
        },
        {
          id: 'a2-gr-03-ex06',
          type: 'qcm',
          question: '"Il ne boit ni café ni thé." Que signifie "ne...ni...ni" ?',
          options: [
            'Il boit du café ou du thé (au choix)',
            'Il ne boit pas de café et ne boit pas de thé (aucun des deux)',
            'Il boit parfois café, parfois thé',
            'Il préfère le café au thé',
          ],
          correctIndex: 1,
          explanation: '"Ne...ni...ni" = neither...nor. "Il ne boit NI café NI thé" = He drinks neither coffee nor tea. Ni + liste de choses toutes exclues. "Je ne parle ni français ni anglais" = I speak neither French nor English.',
        },
        {
          id: 'a2-gr-03-ex07',
          type: 'qcm',
          question: 'Transformez à la forme interrogative "soutenue" (inversion) : "Tu as des questions."',
          options: [
            'Est-ce que tu as des questions ?',
            'Tu as des questions ?',
            'As-tu des questions ?',
            'Tu des questions as ?',
          ],
          correctIndex: 2,
          explanation: 'Inversion sujet-verbe (registre soutenu/formel) : "AS-TU des questions ?" L\'inversion est obligatoire dans l\'écrit formel et les examens. En oral courant : "Tu as des questions ?" ou "Est-ce que tu as des questions ?"',
        },
        {
          id: 'a2-gr-03-ex08',
          type: 'qcm',
          question: '"Jamais" peut-il s\'utiliser sans "ne" ?',
          options: [
            'Non, jamais',
            'Oui, dans des réponses courtes : "Tu travailles ? — Jamais."',
            'Seulement en écrit',
            'Seulement avec des verbes d\'action',
          ],
          correctIndex: 1,
          explanation: 'Dans les réponses courtes, on peut utiliser "jamais" sans "ne" : "Tu vas au marché ? — Jamais." / "Il fume ? — Plus jamais." En phrase complète, le "ne" est obligatoire : "Je ne fume jamais."',
        },
        {
          id: 'a2-gr-03-ex09',
          type: 'qcm',
          question: 'Transformez : "J\'ai vu quelqu\'un." → négation avec "personne"',
          options: [
            'Je n\'ai vu personne',
            'Je ne vois jamais personne',
            'Personne ne j\'ai vu',
            'Je n\'ai personne vu',
          ],
          correctIndex: 0,
          explanation: '"Je n\'ai vu PERSONNE." "Personne" COD se place après le participe passé (fin de phrase). Comparez : "PERSONNE ne m\'a vu" (personne = sujet) vs "Je n\'ai vu PERSONNE" (personne = COD).',
        },
        {
          id: 'a2-gr-03-ex10',
          type: 'qcm',
          question: 'En oral familier, comment dit-on "Je ne sais pas" ?',
          options: ['Je sais pas (ne est omis)', '"Je ne sait pas" (forme incorrecte)', '"J\'ne sais" (partiel)', '"J\'sais" seulement'],
          correctIndex: 0,
          explanation: 'En français oral familier, "ne" disparaît fréquemment : "J\'sais pas" / "Je veux rien" / "T\'as rien vu". C\'est courant et naturel à l\'oral. À l\'écrit ou en contexte formel, toujours maintenir le "ne".',
        },
        {
          id: 'a2-gr-03-ex11',
          type: 'qcm',
          question: '"Je n\'ai plus aucun document à fournir." Combien de négations y a-t-il ?',
          options: ['1 (ne)', '2 (ne...plus ET ne...aucun)', '3', 'Une seule négation renforcée'],
          correctIndex: 3,
          explanation: '"Ne...plus aucun" = one reinforced/combined negation. On combine parfois deux éléments négatifs pour renforcer : "plus aucun" = absolutely none left. Ce n\'est pas une double négation qui s\'annule (comme en anglais).',
        },
        {
          id: 'a2-gr-03-ex12',
          type: 'qcm',
          question: 'Transformez : "Il dit quelque chose." → négation avec "rien"',
          options: [
            'Il ne dit rien',
            'Rien il ne dit',
            'Il ne rien dit',
            'Il dit ne rien',
          ],
          correctIndex: 0,
          explanation: '"Il ne dit RIEN." "Rien" COD se place après le verbe conjugué au présent. Au passé composé : "Il n\'a RIEN dit" (rien se place entre auxiliaire et participe : n\'a rien dit).',
        },
        {
          id: 'a2-gr-03-ex13',
          type: 'qcm',
          question: 'Passé composé + négation : "Elle n\'a ___ mangé." (rien)',
          options: [
            'Elle n\'a mangé rien',
            'Elle n\'a rien mangé',
            'Elle ne rien a mangé',
            'Rien elle n\'a mangé',
          ],
          correctIndex: 1,
          explanation: '"Elle n\'a RIEN mangé." Au passé composé, "rien" (et "plus" / "jamais") se place entre l\'auxiliaire et le participe : "n\'a RIEN mangé". Exceptions : "personne" et "aucun" se placent après le participe.',
        },
        {
          id: 'a2-gr-03-ex14',
          type: 'qcm',
          question: 'Passé composé + négation : "Il n\'a vu ___." (personne)',
          options: [
            'Il n\'a personne vu',
            'Il ne personne a vu',
            'Il n\'a vu personne',
            'Personne n\'a vu il',
          ],
          correctIndex: 2,
          explanation: '"Il n\'a vu PERSONNE." "Personne" et "aucun" se placent APRÈS le participe passé : "n\'a vu PERSONNE" / "n\'a eu aucun problème". Contrairement à "rien" / "jamais" qui se placent entre auxiliaire et participe.',
        },
        {
          id: 'a2-gr-03-ex15',
          type: 'qcm',
          question: '"Ne...que" place : "Il ne travaille que le matin." Que peut-on remarquer ?',
          options: [
            '"Que" se place avant le participe passé',
            '"Que" se place directement avant l\'élément restreint ("le matin")',
            '"Que" se place après le verbe conjugué',
            '"Que" peut se placer n\'importe où',
          ],
          correctIndex: 1,
          explanation: '"Ne...QUE" : "que" précède immédiatement l\'élément restreint. "Il ne travaille que LE MATIN" (restriction sur le temps). "Il ne fait que DORMIR" (restriction sur l\'activité). Contrairement aux autres négations, "que" suit directement ce qu\'il restreint.',
        },
        {
          id: 'a2-gr-03-ex16',
          type: 'qcm',
          question: 'Forme interrogative la plus formelle pour : "Elle part demain."',
          options: [
            'Elle part demain ?',
            'Est-ce qu\'elle part demain ?',
            'Part-elle demain ?',
            'Quand elle part ?',
          ],
          correctIndex: 2,
          explanation: '"PART-ELLE demain ?" = inversion sujet-verbe = forme interrogative la plus formelle. On utilise cette forme dans l\'écriture soutenue, les courriers officiels, et les discours formels.',
        },
        {
          id: 'a2-gr-03-ex17',
          type: 'qcm',
          question: 'Transformez : "Je travaille encore." → ne...plus',
          options: [
            'Je ne travaille plus',
            'Je ne travaille jamais',
            'Je ne travaille pas encore',
            'Je ne plus travaille',
          ],
          correctIndex: 0,
          explanation: '"Je ne travaille PLUS." "Encore" (still) → négation "ne...plus" (no longer). "Plus" se place après le verbe conjugué (comme "pas"). "Ne...plus" encadre le verbe : "je NE travaille PLUS".',
        },
        {
          id: 'a2-gr-03-ex18',
          type: 'qcm',
          question: '"Ni" après "ne" : "Il ne mange ni légumes ni fruits." Les articles ?',
          options: [
            '"des légumes" et "des fruits" (avec articles)',
            'Sans article : "ni légumes ni fruits"',
            '"les légumes" et "les fruits"',
            '"du légume" et "du fruit"',
          ],
          correctIndex: 1,
          explanation: 'Après "ni...ni", les articles indéfinis et partitifs disparaissent. "Il ne mange PAS DES légumes" → "Il ne mange ni légumes ni fruits" (pas d\'article). On garde l\'article défini : "Il n\'aime ni LE porc ni LA viande."',
        },
        {
          id: 'a2-gr-03-ex19',
          type: 'qcm',
          question: '"Plus jamais" = ?',
          options: ['never again (négation renforcée)', 'more and never', 'not more, not never (double négation)', 'no longer sometimes'],
          correctIndex: 0,
          explanation: '"Ne...plus jamais" = never again. "Je ne ferai plus jamais cette erreur" = I will never make this mistake again. C\'est une négation renforcée qui combine "plus" (cessation) et "jamais" (never).',
        },
        {
          id: 'a2-gr-03-ex20',
          type: 'qcm',
          question: '"Aucun" vs "personne" : "Il n\'y a ___ étudiant ici." vs "Il n\'y a ___ ici."',
          options: [
            '"aucun étudiant" / "personne"',
            '"personne étudiant" / "aucun"',
            'Les deux sont interchangeables',
            '"aucune personne" / "nul"',
          ],
          correctIndex: 0,
          explanation: '"AUCUN" + NOM : "Il n\'y a aucun étudiant" (suivi d\'un substantif). "PERSONNE" seul : "Il n\'y a personne" (sans substantif, désigne des humains). "Aucun" peut aussi se mettre seul si le nom est sous-entendu : "Tu as des questions ? Aucune."',
        },
      ],
    },

    {
      id: 'a2-gr-04',
      slug: 'a2-conditionnel-politesse',
      moduleSlug: 'a2-grammaire',
      level: 'A2',
      title: 'Le conditionnel de politesse',
      description: 'Utilisez le conditionnel pour exprimer des demandes polies, des souhaits et des hypothèses.',
      duration: 35,
      free: false,
      dialogue: `## Dialogue : Demandes polies au guichet

*Rokia s'adresse à un agent à la CAF.*

**Rokia :** Bonjour. Je voudrais des informations sur les aides auxquelles j'aurais droit.

**Agent :** Bien sûr. Qu'est-ce que vous aimeriez savoir ?

**Rokia :** Je viens d'arriver en France, j'ai un emploi. Est-ce que je pourrais avoir droit à l'APL ?

**Agent :** Oui, c'est possible. Il faudrait vérifier votre loyer et vos ressources. Vous devriez faire une simulation sur le site caf.fr avant de déposer une demande.

**Rokia :** D'accord. Et pour les allocations familiales, est-ce que vous pourriez m'expliquer les conditions ?

**Agent :** Bien sûr. Vous auriez droit aux allocations si vous avez deux enfants ou plus à charge, et si vous résidez régulièrement en France.

**Rokia :** Merci. Et vous sauriez me dire dans combien de temps j'aurais une réponse si je faisais la demande aujourd'hui ?

**Agent :** Normalement, vous recevriez une réponse dans un délai de 4 à 6 semaines.`,

      linguisticPoint: `## Point linguistique : Le conditionnel présent

### Formation : infinitif + terminaisons de l'imparfait
| Personne | Terminaison | Aller | Vouloir | Être |
|---|---|---|---|---|
| je | -**rais** | ir**ais** | voudr**ais** | ser**ais** |
| tu | -**rais** | ir**ais** | voudr**ais** | ser**ais** |
| il/elle | -**rait** | ir**ait** | voudr**ait** | ser**ait** |
| nous | -**rions** | ir**ions** | voudr**ions** | ser**ions** |
| vous | -**riez** | ir**iez** | voudr**iez** | ser**iez** |
| ils/elles | -**raient** | ir**aient** | voudr**aient** | ser**aient** |

### Emplois du conditionnel
1. **Politesse** : "Je **voudrais** un café" (plus poli que "je veux")
2. **Souhait** : "J\'**aimerais** voyager un jour"
3. **Hypothèse** : "Si j\'avais de l\'argent, je **partirais**"
4. **Information non vérifiée** : "Il **aurait** 40 ans" (selon certaines sources)
5. **Conseil/recommandation** : "Vous **devriez** vérifier"

### Verbes irréguliers importants
aller → ir- / être → ser- / avoir → aur- / faire → fer- / pouvoir → pourr- / vouloir → voudr- / venir → viendr- / savoir → saur- / falloir → faudr-`,

      keyPoints: [
        'Conditionnel = infinitif (sans -e final pour -RE) + terminaisons imparfait (-rais/-rait/-rions/-riez/-raient)',
        '5 emplois : politesse / souhait / hypothèse / info non vérifiée / conseil',
        '"Je voudrais" = plus poli que "je veux" (essentiel en français quotidien)',
        '"Il faudrait" = il serait nécessaire (conditionnel de "falloir")',
        '"Vous devriez" = you should (conseil poli)',
      ],

      exercises: [
        {
          id: 'a2-gr-04-ex01',
          type: 'qcm',
          question: 'Rokia utilise "je voudrais" plutôt que "je veux" pour :',
          options: [
            'Exprimer un futur incertain',
            'Être plus polie — le conditionnel adoucit la demande',
            'Indiquer une condition',
            'Exprimer un regret',
          ],
          correctIndex: 1,
          explanation: '"Je VOUDRAIS" = conditionnel de politesse. Plus poli que "je veux" (direct). En France, utiliser le conditionnel pour les demandes et commandes est la norme de politesse. "Je veux du café" (direct, parfois perçu comme brusque) → "Je voudrais un café" (poli).',
        },
        {
          id: 'a2-gr-04-ex02',
          type: 'qcm',
          question: 'Conjuguez "pouvoir" au conditionnel, 1ère personne : "Est-ce que je ___ avoir droit à l\'APL ?"',
          options: ['peux', 'pourrais', 'pourrai', 'puisse'],
          correctIndex: 1,
          explanation: '"POURRAIS" = conditionnel de "pouvoir". Base irrégulière : pourr- + rais. "Je POURRAiS" = could I / would I be able to. "Peux" = présent / "pourrai" = futur simple / "puisse" = subjonctif.',
        },
        {
          id: 'a2-gr-04-ex03',
          type: 'qcm',
          question: '"Il faudrait vérifier vos ressources." "Faudrait" est le conditionnel de :',
          options: ['faire', 'falloir', 'faillir', 'faucher'],
          correctIndex: 1,
          explanation: '"Faudrait" = conditionnel de "falloir" (verbe impersonnel). "Il faut" (présent) → "il faudrait" (conditionnel). "Il faudrait + infinitif" = it would be necessary to / you should. Très utilisé en français.',
        },
        {
          id: 'a2-gr-04-ex04',
          type: 'qcm',
          question: 'Formez le conditionnel : "acheter" → "Elle ___ un appartement si elle avait de l\'argent."',
          options: ['achèterait', 'acheterait', 'achetera', 'achète'],
          correctIndex: 1,
          explanation: '"Elle ACHETERAIT." Conditionnel de "acheter" : acheter + rais/rait... = acheter**ait** (elle). Les verbes en -ER qui changent e → è au présent gardent la forme de l\'infinitif au conditionnel : "acheter" → "acheterait" (pas "achèterait").',
        },
        {
          id: 'a2-gr-04-ex05',
          type: 'qcm',
          question: '"Vous devriez faire une simulation." Quel est l\'emploi du conditionnel ici ?',
          options: ['Politesse', 'Hypothèse', 'Conseil/recommandation', 'Souhait'],
          correctIndex: 2,
          explanation: '"Vous DEVRIEZ" = you should = conseil/recommandation (conditionnel de conseil). L\'agent recommande à Rokia de faire une simulation. "Devoir" au conditionnel = conseil poli.',
        },
        {
          id: 'a2-gr-04-ex06',
          type: 'qcm',
          question: 'Conditionnel de "être" : "Ce ___-il possible ?" (est → ser-)',
          options: ['est-il', 'serait-il', 'sera-t-il', 'soit-il'],
          correctIndex: 1,
          explanation: '"SERAIT-il possible ?" = conditionnel de "être". Base irrégulière : ser- + ait (3ème sing.) = serait. "Serait-il possible de" = would it be possible to (formule très polie).',
        },
        {
          id: 'a2-gr-04-ex07',
          type: 'qcm',
          question: '"Vous auriez droit aux allocations SI vous avez deux enfants." Que signifie ce SI ?',
          options: [
            'Si = parce que',
            'Si introduit une condition nécessaire pour avoir droit aux allocations',
            'Si exprime une surprise',
            'Si = même si',
          ],
          correctIndex: 1,
          explanation: '"Si" + présent de l\'indicatif → conditionnel = hypothèse réelle possible. "Si vous avez deux enfants, vous AURIEZ droit aux allocations." Structure : si + présent → conditionnel.',
        },
        {
          id: 'a2-gr-04-ex08',
          type: 'qcm',
          question: 'Formez le conditionnel : "vouloir" → "Tu ___ m\'aider ?" (demande polie)',
          options: ['veux', 'voudrais', 'voudras', 'veuilles'],
          correctIndex: 1,
          explanation: '"Tu VOUDRAIS m\'aider ?" = conditionnel de politesse. Base irrégulière : voudr- + rais (tu) = voudrais. "Tu voudrais" = would you (polite). Formule polie pour demander une aide.',
        },
        {
          id: 'a2-gr-04-ex09',
          type: 'qcm',
          question: '"Vous recevriez une réponse dans 4-6 semaines." Quel emploi du conditionnel ?',
          options: ['Politesse', 'Souhait', 'Hypothèse/condition', 'Information non vérifiée'],
          correctIndex: 2,
          explanation: '"Vous RECEVRIEZ une réponse" = conditionnel d\'hypothèse. Sous-entendu : "si vous faites la demande" (condition). Le conditionnel exprime ce qui se passerait dans un cas particulier (ici, si Rokia dépose une demande).',
        },
        {
          id: 'a2-gr-04-ex10',
          type: 'qcm',
          question: 'Conditionnel pour information non vérifiée : "Le président ___ démissionner." (selon la presse)',
          options: ['va', 'devrait', 'allait', 'irait'],
          correctIndex: 1,
          explanation: '"Le président DEVRAIT démissionner" (selon la presse) = conditionnel journalistique pour une information non confirmée. Les journalistes utilisent souvent "serait" / "aurait" / "devrait" pour nuancer des informations non vérifiées.',
        },
        {
          id: 'a2-gr-04-ex11',
          type: 'qcm',
          question: '"Pourriez-vous m\'expliquer ?" est plus poli que :',
          options: [
            '"Expliquez-moi !"',
            '"Vous pouvez m\'expliquer ?"',
            '"Pouvez-vous m\'expliquer ?"',
            'A et B sont moins polis (A = ordre, B = moins conditionnel)',
          ],
          correctIndex: 3,
          explanation: '"POURRIEZ-vous" (conditionnel + inversion) est le plus poli. "Pouvez-vous" (présent) = poli mais moins que le conditionnel. "Vous pouvez" (sans inversion) = encore moins formel. "Expliquez-moi !" = impératif direct, pas de politesse.',
        },
        {
          id: 'a2-gr-04-ex12',
          type: 'qcm',
          question: 'Formez le conditionnel : "aller" → "Si tu avais le temps, tu ___ avec moi ?"',
          options: ['vas', 'allais', 'irais', 'iras'],
          correctIndex: 2,
          explanation: '"Tu IRAIS avec moi ?" Conditionnel d\'"aller" : base irrégulière = ir- + rais (tu) = IRAIS. "Si + imparfait → conditionnel" = hypothèse sur le futur. "Si tu avais le temps, tu IRAIS" = if you had time, would you go?',
        },
        {
          id: 'a2-gr-04-ex13',
          type: 'qcm',
          question: '"J\'aurais droit à l\'APL." "Aurais" = conditionnel de :',
          options: ['aller', 'avoir', 'être', 'aimer'],
          correctIndex: 1,
          explanation: '"AURAIS" = conditionnel d\'"avoir". Base irrégulière : aur- + rais (je) = AURAIS. "J\'aurais droit à" = I would be entitled to. Très utilisé pour les droits conditionnels (si la condition est remplie, j\'aurais droit).',
        },
        {
          id: 'a2-gr-04-ex14',
          type: 'qcm',
          question: 'Quel est le conditionnel de "savoir" ?',
          options: ['saverais', 'savais', 'saurais', 'sachais'],
          correctIndex: 2,
          explanation: '"SAURAIS" = conditionnel de "savoir". Base irrégulière : saur- + rais = saurais. Rokia dit "vous SAURIEZ me dire ?" = would you know how to tell me? La base "saur-" est similaire au futur "je saurai".',
        },
        {
          id: 'a2-gr-04-ex15',
          type: 'qcm',
          question: 'Transformez en demande polie (conditionnel) : "Je veux parler à un conseiller."',
          options: [
            'Je voulais parler à un conseiller',
            'Je voudrais parler à un conseiller',
            'Je devrais parler à un conseiller',
            'Je parlerais à un conseiller',
          ],
          correctIndex: 1,
          explanation: '"Je VOUDRAIS parler à un conseiller." "Vouloir" au conditionnel = politesse maximale pour exprimer une demande. "Je veux" → "Je voudrais" = la transformation politesse la plus fréquente au quotidien.',
        },
        {
          id: 'a2-gr-04-ex16',
          type: 'qcm',
          question: '"Je ferais" = conditionnel de "faire". Conjugaison : "Elle ___ une simulation en ligne."',
          options: ['faisait', 'ferait', 'fera', 'fait'],
          correctIndex: 1,
          explanation: '"Elle FERAIT une simulation." Conditionnel de "faire" : base irrégulière = fer- + ait (elle) = FERAIT. L\'agent recommande : "vous devriez faire" → si on met au conditionnel direct : "elle ferait".',
        },
        {
          id: 'a2-gr-04-ex17',
          type: 'qcm',
          question: 'Structure hypothèse réelle : "Si vous résidez en France, vous ___ aux allocations."',
          options: [
            'aurez droit',
            'avez droit',
            'auriez droit',
            'A et C sont corrects selon la nuance',
          ],
          correctIndex: 3,
          explanation: '"Si + présent → futur" (certitude) ou "conditionnel" (moins certain). "Si vous résidez, vous AUREZ droit" (plus certain) / "Si vous résidez, vous AURIEZ droit" (conditionnel = moins certain, sous-entendu d\'autres conditions). Les deux sont grammaticalement corrects.',
        },
        {
          id: 'a2-gr-04-ex18',
          type: 'qcm',
          question: '"Vous seriez intéressé(e) par notre offre ?" (question polie au téléphone) = ?',
          options: [
            'Are you interested in our offer?',
            'Would you be interested in our offer? (conditionnel de politesse)',
            'Were you interested in our offer?',
            'Have you been interested in our offer?',
          ],
          correctIndex: 1,
          explanation: '"Vous SERIEZ intéressé(e) ?" = conditionnel de politesse. Les téléprospecteurs utilisent souvent le conditionnel pour adoucir leur approche. "Seriez-vous intéressé(e) ?" = Would you be interested?',
        },
        {
          id: 'a2-gr-04-ex19',
          type: 'qcm',
          question: '"Il faudrait" = impersonnel. Dans "il faudrait vérifier", que signifie "faudrait" ?',
          options: [
            'It is necessary (présent)',
            'It would be necessary / You should (conditionnel de conseil)',
            'It was necessary (imparfait)',
            'It will be necessary (futur)',
          ],
          correctIndex: 1,
          explanation: '"Il FAUDRAIT" = conditionnel de "falloir". "It would be necessary to" / "you should." Moins direct que "il faut" (présent = it is necessary). Très utilisé pour les conseils et recommandations.',
        },
        {
          id: 'a2-gr-04-ex20',
          type: 'qcm',
          question: 'Conditionnel "nous" — formez "nous viendrions". C\'est le conditionnel de :',
          options: ['vivre', 'venir', 'voir', 'vouloir'],
          correctIndex: 1,
          explanation: '"Nous VIENDRIONS" = conditionnel de "venir". Base : viendr- + rions (nous) = viendrions. "Si on nous invitait, nous viendrions" = if we were invited, we would come.',
        },
      ],
    },
  ],
};
