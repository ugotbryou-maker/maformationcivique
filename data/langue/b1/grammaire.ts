import type { LangModule } from '../types';

export const b1Grammaire: LangModule = {
  id: 'b1-mod-08',
  slug: 'b1-grammaire',
  level: 'B1',
  title: 'Grammaire B1',
  subtitle: 'Pronoms relatifs composés, adjectifs, doubles pronoms, adverbes',
  description: 'Consolidez les points de grammaire essentiels du niveau B1 pour gagner en précision et en fluidité.',
  type: 'grammaire',
  emoji: '📘',
  free: false,
  lessons: [
    {
      id: 'b1-gram-01',
      slug: 'b1-pronoms-relatifs-composes',
      moduleSlug: 'b1-grammaire',
      level: 'B1',
      title: 'Les pronoms relatifs composés',
      description: 'Lequel, auquel, duquel : utiliser les pronoms relatifs après une préposition.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Pourquoi les pronoms relatifs composés ?

Au-delà de "qui / que / dont / où", le français utilise des pronoms relatifs composés quand une PRÉPOSITION (autre que "de") précède le pronom relatif et que l'antécédent est une chose (pas une personne, en général).

**Le tableau complet :**
| Préposition | Masc. sing. | Fém. sing. | Masc. pl. | Fém. pl. |
|---|---|---|---|---|
| (aucune, après prép. simple) | lequel | laquelle | lesquels | lesquelles |
| à + | auquel | à laquelle | auxquels | auxquelles |
| de + | duquel | de laquelle | desquels | desquelles |

**Exemples concrets :**
- "Le dossier **dans lequel** j'ai mis mes papiers..." (dans + lequel)
- "La raison **pour laquelle** je suis venu..." (pour + laquelle)
- "Le poste **auquel** je postule..." (à + lequel = auquel)
- "Les conditions **auxquelles** je dois me soumettre..." (à + lesquelles = auxquelles)
- "Le projet **duquel** je m'occupe..." (de + lequel = duquel — mais "dont" est généralement préféré)

**Pour les personnes**, on préfère souvent "qui" après préposition simple :
"La personne **avec qui** j'ai rendez-vous..." (plutôt que "avec laquelle", bien que cela reste correct aussi)`,

      linguisticPoint: `## Point linguistique : Choisir entre dont, lequel et qui

### Règle de choix
1. **Dont** = toujours pour remplacer "de + nom" (le plus simple, à privilégier)
2. **Lequel/laquelle...** = après TOUTE AUTRE préposition (dans, pour, avec, sur, par, sans...)
3. **Auquel/à laquelle...** = contraction de "à + lequel"
4. **Duquel/de laquelle...** = utilisé seulement si "dont" est ambigu ou impossible (rare)

### Cas où "dont" est impossible (on utilise "duquel")
Quand le complément est lui-même dans un groupe prépositionnel :
"Le dossier **à côté duquel** est posé mon stylo..." (à côté DE + lequel, pas "dont")

### Pour les personnes
"La personne **à qui** j'ai parlé" = "la personne **à laquelle** j'ai parlé" (les deux sont possibles, "à qui" plus courant à l'oral)`,

      keyPoints: [
        'Lequel/laquelle/lesquels/lesquelles = après préposition + antécédent chose',
        'Auquel/à laquelle/auxquels/auxquelles = à + lequel (contraction)',
        'Duquel/de laquelle/desquels/desquelles = de + lequel (rare, "dont" préféré sauf ambiguïté)',
        '"Dont" reste le choix par défaut pour remplacer "de + nom"',
        'Pour les personnes : "à qui" = "auquel" / "avec qui" = "avec lequel" (qui souvent préféré)',
      ],

      exercises: [
        {
          id: 'b1-gram-01-ex01',
          type: 'qcm',
          question: 'Complétez : "Le dossier ___ j\'ai mis mes papiers est sur le bureau." (dans + lequel)',
          options: ['dont', 'dans lequel', 'auquel', 'qui'],
          correctIndex: 1,
          explanation: '"Le dossier DANS LEQUEL j\'ai mis mes papiers." Après la préposition "dans" + antécédent chose (le dossier) → "lequel" (masc. sing., accord avec "dossier"). "Dans lequel" = in which.',
        },
        {
          id: 'b1-gram-01-ex02',
          type: 'qcm',
          question: 'Complétez : "Le poste ___ je postule m\'intéresse beaucoup." (postuler À)',
          options: ['dont', 'duquel', 'auquel', 'lequel'],
          correctIndex: 2,
          explanation: '"Le poste AUQUEL je postule." "Postuler À + nom" → contraction "à + lequel" = "AUQUEL" (masc. sing.). Règle de contraction obligatoire : "à + lequel" ne se dit jamais, on dit toujours "auquel".',
        },
        {
          id: 'b1-gram-01-ex03',
          type: 'qcm',
          question: 'Complétez : "Les conditions ___ je dois me soumettre sont strictes." (se soumettre À)',
          options: ['auxquelles', 'auquel', 'dont', 'desquelles'],
          correctIndex: 0,
          explanation: '"Les conditions AUXQUELLES je dois me soumettre." "Se soumettre À + nom" → "à + lesquelles" = "AUXQUELLES" (fém. pl., accord avec "conditions"). Contraction obligatoire au pluriel féminin également.',
        },
        {
          id: 'b1-gram-01-ex04',
          type: 'qcm',
          question: 'Quelle est la règle de base pour choisir "dont" plutôt que "duquel" ?',
          options: [
            '"Dont" s\'utilise uniquement pour les personnes',
            '"Dont" est le choix par défaut pour remplacer "de + nom" ; "duquel" est réservé aux cas où "dont" est ambigu/impossible',
            '"Duquel" est toujours préféré dans un registre soutenu',
            'Les deux sont totalement interchangeables sans règle',
          ],
          correctIndex: 1,
          explanation: '"Dont" est plus simple et généralement préféré pour remplacer "de + nom" : "le livre DONT j\'ai besoin." "Duquel" s\'utilise seulement dans des cas particuliers, notamment quand le complément est dans un groupe prépositionnel : "la table à côté DE LAQUELLE / DUQUEL..."',
        },
        {
          id: 'b1-gram-01-ex05',
          type: 'qcm',
          question: 'Complétez : "La raison ___ je suis venu, c\'est mon visa." (pour + laquelle)',
          options: ['pourquoi', 'pour laquelle', 'dont', 'que'],
          correctIndex: 1,
          explanation: '"La raison POUR LAQUELLE je suis venu." Après "pour" + antécédent chose (la raison) → "laquelle" (fém. sing.). ⚠️ "Pourquoi" ne s\'utilise pas comme pronom relatif dans une phrase déclarative de ce type.',
        },
        {
          id: 'b1-gram-01-ex06',
          type: 'qcm',
          question: 'Complétez pour une personne : "La personne ___ j\'ai rendez-vous est en retard." (avoir rendez-vous AVEC)',
          options: ['dont', 'avec qui', 'auquel', 'que'],
          correctIndex: 1,
          explanation: '"La personne AVEC QUI j\'ai rendez-vous." Pour les personnes, après une préposition, "QUI" est généralement préféré à "avec laquelle" (les deux sont corrects, mais "qui" est plus courant et naturel à l\'oral et à l\'écrit standard).',
        },
        {
          id: 'b1-gram-01-ex07',
          type: 'qcm',
          question: 'Complétez : "Le projet ___ je m\'occupe avance bien." (s\'occuper DE — choix par défaut)',
          options: ['duquel', 'dont', 'auquel', 'lequel'],
          correctIndex: 1,
          explanation: '"Le projet DONT je m\'occupe avance bien." "S\'occuper DE + nom" → "dont" (choix par défaut pour "de + nom"). "Duquel" serait grammaticalement possible mais moins naturel ici — "dont" est systématiquement préféré sauf cas d\'ambiguïté.',
        },
        {
          id: 'b1-gram-01-ex08',
          type: 'qcm',
          question: 'Complétez : "La table ___ est posé mon téléphone." (à côté DE + laquelle)',
          options: ['dont', 'à côté de laquelle', 'auquel', 'que'],
          correctIndex: 1,
          explanation: '"La table À CÔTÉ DE LAQUELLE est posé mon téléphone." Quand le complément ("de") fait partie d\'une locution prépositionnelle plus large ("à côté de"), on ne peut PAS utiliser "dont" — il faut "à côté de + laquelle/lequel".',
        },
        {
          id: 'b1-gram-01-ex09',
          type: 'qcm',
          question: 'Pluriel masculin : "Les documents ___ vous avez besoin sont disponibles en ligne." (besoin DE)',
          options: ['dont', 'auxquels', 'desquels', 'lesquels'],
          correctIndex: 0,
          explanation: '"Les documents DONT vous avez besoin." "Avoir besoin DE + nom" → "dont" reste valide au pluriel aussi (DONT ne change pas selon le genre/nombre de l\'antécédent, contrairement à "duquel/desquels"). "Dont" est invariable.',
        },
        {
          id: 'b1-gram-01-ex10',
          type: 'qcm',
          question: 'Complétez : "L\'examen ___ je me prépare est dans deux semaines." (se préparer À)',
          options: ['dont', 'duquel', 'auquel', 'lequel'],
          correctIndex: 2,
          explanation: '"L\'examen AUQUEL je me prépare." "Se préparer À + nom" → "à + lequel" = "AUQUEL" (masc. sing., accord avec "examen"). Contraction obligatoire de "à + lequel".',
        },
        {
          id: 'b1-gram-01-ex11',
          type: 'qcm',
          question: 'Pluriel féminin : "Les formations ___ je me suis inscrit sont gratuites." (s\'inscrire À)',
          options: ['auxquelles', 'auquel', 'desquelles', 'dont'],
          correctIndex: 0,
          explanation: '"Les formations AUXQUELLES je me suis inscrit." "S\'inscrire À + nom" → "à + lesquelles" = "AUXQUELLES" (fém. pl., accord avec "formations").',
        },
        {
          id: 'b1-gram-01-ex12',
          type: 'qcm',
          question: 'Complétez : "Voici l\'outil ___ vous pourrez créer votre CV en ligne." (avec lequel)',
          options: ['dont', 'avec lequel', 'auquel', 'que'],
          correctIndex: 1,
          explanation: '"Voici l\'outil AVEC LEQUEL vous pourrez créer votre CV." Après "avec" + antécédent chose (l\'outil) → "lequel" (masc. sing.). "Avec lequel" = with which / with whom (pour une chose ici).',
        },
        {
          id: 'b1-gram-01-ex13',
          type: 'qcm',
          question: 'Masculin pluriel "de" : "Les arguments ___ je me souviens étaient convaincants." (se souvenir DE)',
          options: ['dont', 'desquels', 'auxquels', 'lesquels'],
          correctIndex: 0,
          explanation: '"Les arguments DONT je me souviens." "Se souvenir DE + nom" → "dont" (toujours le choix par défaut pour "de"). "Desquels" serait possible mais moins naturel — "dont" reste systématiquement préféré.',
        },
        {
          id: 'b1-gram-01-ex14',
          type: 'qcm',
          question: 'Complétez : "C\'est un sujet ___ il vaut mieux ne pas parler en entretien." (parler DE)',
          options: ['duquel', 'dont', 'auquel', 'que'],
          correctIndex: 1,
          explanation: '"C\'est un sujet DONT il vaut mieux ne pas parler." "Parler DE + nom" → "dont". Encore une fois, "dont" est le choix naturel pour remplacer "de + nom", même dans une structure plus complexe comme "il vaut mieux ne pas parler de".',
        },
        {
          id: 'b1-gram-01-ex15',
          type: 'qcm',
          question: 'Préposition + personne : "Le recruteur ___ j\'ai parlé m\'a semblé sympathique." (parler À une personne)',
          options: ['dont', 'à qui', 'auquel', 'lequel'],
          correctIndex: 1,
          explanation: '"Le recruteur À QUI j\'ai parlé." Pour une personne après "à", on utilise généralement "à QUI" (plus naturel) plutôt que "auquel" (qui reste grammaticalement correct mais plus rare pour les personnes).',
        },
        {
          id: 'b1-gram-01-ex16',
          type: 'qcm',
          question: 'Complétez : "Voici les critères ___ se base le recruteur pour sélectionner." (se baser SUR)',
          options: ['dont', 'sur lesquels', 'auxquels', 'que'],
          correctIndex: 1,
          explanation: '"Voici les critères SUR LESQUELS se base le recruteur." "Se baser SUR + nom" → "sur + lesquels" (masc. pl., accord avec "critères"). Préposition "sur" + pronom relatif composé.',
        },
        {
          id: 'b1-gram-01-ex17',
          type: 'qcm',
          question: 'Quelle phrase est INCORRECTE ?',
          options: [
            '"Le livre dont j\'ai besoin"',
            '"Le livre auquel j\'ai besoin"',
            '"Le livre dans lequel j\'ai trouvé l\'info"',
            '"La personne à qui j\'ai écrit"',
          ],
          correctIndex: 1,
          explanation: '"Le livre AUQUEL j\'ai besoin" est INCORRECT car "avoir besoin DE" exige "dont", pas "auquel" (qui correspondrait à "à"). Phrase correcte : "le livre DONT j\'ai besoin."',
        },
        {
          id: 'b1-gram-01-ex18',
          type: 'qcm',
          question: 'Complétez : "L\'entreprise ___ je travaille est spécialisée dans l\'informatique." (travailler POUR)',
          options: ['dont', 'pour laquelle', 'auquel', 'que'],
          correctIndex: 1,
          explanation: '"L\'entreprise POUR LAQUELLE je travaille." Après "pour" + antécédent chose (l\'entreprise) → "laquelle" (fém. sing.). "Pour laquelle" = for which.',
        },
        {
          id: 'b1-gram-01-ex19',
          type: 'qcm',
          question: 'Pluriel masculin "à" : "Les emplois ___ je peux prétendre sont limités par mon visa." (prétendre À)',
          options: ['dont', 'desquels', 'auxquels', 'lesquels'],
          correctIndex: 2,
          explanation: '"Les emplois AUXQUELS je peux prétendre." "Prétendre À + nom" → "à + lesquels" = "AUXQUELS" (masc. pl., accord avec "emplois"). ⚠️ Au masculin pluriel c\'est "auxquels" (pas "auxquelles", réservé au féminin).',
        },
        {
          id: 'b1-gram-01-ex20',
          type: 'qcm',
          question: 'Complétez : "C\'est exactement la situation ___ je faisais référence." (faire référence À)',
          options: ['dont', 'duquel', 'à laquelle', 'que'],
          correctIndex: 2,
          explanation: '"C\'est la situation À LAQUELLE je faisais référence." "Faire référence À + nom" → "à + laquelle" = "À LAQUELLE" (fém. sing., accord avec "situation"). ⚠️ Au féminin singulier, on ne contracte pas "à" + "laquelle" en un seul mot (contrairement à "auquel" au masculin).',
        },
      ],
    },

    {
      id: 'b1-gram-02',
      slug: 'b1-place-accord-adjectif',
      moduleSlug: 'b1-grammaire',
      level: 'B1',
      title: 'La place et l\'accord de l\'adjectif',
      description: 'Maîtriser la position des adjectifs et les nuances de sens selon leur placement.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Pourquoi la place de l'adjectif change le sens

En français, la plupart des adjectifs se placent APRÈS le nom. Mais certains adjectifs courts et fréquents se placent AVANT. Et pour quelques adjectifs, la position change carrément le sens !

**Adjectifs courts placés AVANT le nom** (BAGS — Beauty, Age, Goodness, Size) :
beau, joli, grand, petit, jeune, vieux, bon, mauvais, gros, nouveau, ancien, dernier, premier, même, vrai...
"Un **grand** appartement" / "une **belle** maison" / "mon **dernier** entretien"

**Adjectifs qui changent de sens selon la position :**
| Adjectif AVANT | Sens | Adjectif APRÈS | Sens |
|---|---|---|---|
| un **ancien** collègue | former (ex-) | un meuble **ancien** | old/antique |
| ma **propre** chambre | own (à moi) | une chambre **propre** | clean |
| un **grand** homme | great (important) | un homme **grand** | tall |
| une **certaine** réponse | a certain/vague | une réponse **certaine** | sure/definite |
| un **brave** homme | good/kind | un homme **brave** | courageous |
| le **dernier** train | the final one (in a series) | l\'année **dernière** | last (past) |

**Accord de l'adjectif :**
- Masculin singulier + e = féminin (grand → grande)
- + s = pluriel (grand → grands)
- Cas particuliers : beau/belle, nouveau/nouvelle, blanc/blanche, public/publique, sec/sèche...`,

      linguisticPoint: `## Point linguistique : L'accord des adjectifs de couleur

### Règle générale
Les adjectifs de couleur s'accordent normalement :
"Une chemise **bleue**" / "des chaussures **noires**"

### Exception : couleurs composées (invariables)
Quand la couleur est précisée par un autre mot, l'ensemble est INVARIABLE :
"Des yeux **bleu clair**" (pas "bleus clairs")
"Une veste **vert foncé**" (pas "verte foncée")
"Des chaussettes **bleu marine**"

### Exception : noms employés comme adjectifs de couleur (invariables)
Certains noms utilisés pour désigner une couleur restent invariables :
"Des murs **orange**" (orange = nom de fruit, invariable)
"Des yeux **marron**" (marron = nom, invariable) — MAIS "des yeux **noisette**" (invariable aussi)
⚠️ Exceptions qui S'ACCORDENT car ce sont de VRAIS adjectifs : rose, mauve, fauve, pourpre, écarlate
"Des joues **roses**" (accord car "rose" est un adjectif, pas seulement un nom de fleur)`,

      keyPoints: [
        'BAGS = adjectifs courts avant le nom (beauté/âge/bonté/taille) : beau/jeune/bon/grand/petit',
        'ancien/propre/grand/certain/dernier changent de sens AVANT vs APRÈS le nom',
        'Couleurs composées (bleu clair, vert foncé) = INVARIABLES',
        'Noms-couleurs (orange, marron) = invariables / vrais adjectifs (rose, mauve) = accord normal',
        'Accord standard : masc. + e = fém. / + s = pluriel (cas particuliers : beau/belle, public/publique...)',
      ],

      exercises: [
        {
          id: 'b1-gram-02-ex01',
          type: 'qcm',
          question: 'Quel est le sens de "un ANCIEN collègue" (adjectif avant le nom) ?',
          options: ['Un collègue âgé', 'Un ex-collègue (qui ne l\'est plus)', 'Un collègue historique', 'Un collègue antique'],
          correctIndex: 1,
          explanation: '"Un ANCIEN collègue" (avant le nom) = un EX-collègue, quelqu\'un qui était collègue mais ne l\'est plus. Différent de "un collègue ANCIEN" (après le nom) qui signifierait que le collègue lui-même est vieux/antique (rare et bizarre pour une personne).',
        },
        {
          id: 'b1-gram-02-ex02',
          type: 'qcm',
          question: 'Accord couleur composée : "Elle portait une veste ___ ___ pour l\'entretien." (vert foncé)',
          options: ['verte foncée', 'vert foncé', 'verts foncés', 'verte foncé'],
          correctIndex: 1,
          explanation: '"Une veste VERT FONCÉ." Couleur COMPOSÉE (vert + foncé) → INVARIABLE, pas d\'accord même si "veste" est féminin singulier. Règle : les couleurs composées de deux mots ne s\'accordent jamais.',
        },
        {
          id: 'b1-gram-02-ex03',
          type: 'qcm',
          question: 'Quelle est la différence entre "ma propre chambre" et "une chambre propre" ?',
          options: [
            'Aucune différence',
            '"Ma propre chambre" = ma chambre à moi / "une chambre propre" = une chambre nettoyée',
            '"Ma propre chambre" = une chambre nettoyée / "une chambre propre" = ma chambre à moi',
            'Les deux signifient "ma chambre personnelle"',
          ],
          correctIndex: 1,
          explanation: '"PROPRE" avant le nom = own (possession) : "ma PROPRE chambre" = my own room. "PROPRE" après le nom = clean : "une chambre PROPRE" = a clean room. Changement de sens total selon la position !',
        },
        {
          id: 'b1-gram-02-ex04',
          type: 'qcm',
          question: 'Accord nom-couleur : "Il avait les yeux ___ ." (marron)',
          options: ['marron', 'marrons', 'marronne', 'marronnes'],
          correctIndex: 0,
          explanation: '"Les yeux MARRON." "Marron" est à l\'origine un NOM (le fruit) utilisé comme adjectif de couleur → INVARIABLE. Pas d\'accord même au pluriel : "des yeux marron", jamais "marrons" dans ce sens (sauf au sens propre des fruits eux-mêmes).',
        },
        {
          id: 'b1-gram-02-ex05',
          type: 'qcm',
          question: 'BAGS — quel adjectif se place normalement AVANT le nom ?',
          options: ['intéressant', 'jeune', 'compliqué', 'administratif'],
          correctIndex: 1,
          explanation: '"JEUNE" fait partie des adjectifs courts BAGS (Beauté/Âge/Bonté/Taille) qui se placent AVANT le nom : "un JEUNE homme". Les autres (intéressant, compliqué, administratif) sont plus longs/descriptifs et se placent APRÈS : "un homme intéressant".',
        },
        {
          id: 'b1-gram-02-ex06',
          type: 'qcm',
          question: 'Accord couleur vraie (adjectif) : "Elle avait les joues ___ de froid." (rose)',
          options: ['rose', 'roses', 'rosée', 'rosées'],
          correctIndex: 1,
          explanation: '"Les joues ROSES." "Rose" est un VRAI adjectif de couleur (contrairement à "orange" ou "marron" qui restent des noms) → s\'ACCORDE normalement. "Joues" = féminin pluriel → "roses" (+ s).',
        },
        {
          id: 'b1-gram-02-ex07',
          type: 'qcm',
          question: 'Quel est le sens de "un GRAND homme" (avant le nom) vs "un homme GRAND" (après) ?',
          options: [
            'Aucune différence de sens',
            '"Grand homme" = personnage important/illustre / "homme grand" = de haute taille',
            '"Grand homme" = de haute taille / "homme grand" = personnage important',
            'Les deux signifient "de haute taille"',
          ],
          correctIndex: 1,
          explanation: '"GRAND" avant le nom = important, illustre (de Gaulle était un GRAND homme = a great man). "GRAND" après le nom = de haute taille physique (un homme GRAND = a tall man). Distinction sémantique classique en français.',
        },
        {
          id: 'b1-gram-02-ex08',
          type: 'qcm',
          question: 'Accord couleur composée : "Des chaussettes ___ ___ étaient en vente." (bleu marine)',
          options: ['bleues marines', 'bleu marine', 'bleues marine', 'bleu marines'],
          correctIndex: 1,
          explanation: '"Des chaussettes BLEU MARINE." Couleur composée (bleu + marine) → INVARIABLE intégralement. Aucun des deux mots ne s\'accorde, même si "chaussettes" est féminin pluriel.',
        },
        {
          id: 'b1-gram-02-ex09',
          type: 'qcm',
          question: 'Quel est le sens de "une CERTAINE réponse" (avant) vs "une réponse CERTAINE" (après) ?',
          options: [
            'Les deux signifient "une réponse sûre"',
            '"Certaine réponse" = une réponse vague/indéterminée / "réponse certaine" = une réponse sûre/définitive',
            '"Certaine réponse" = une réponse sûre / "réponse certaine" = une réponse vague',
            'Aucune différence',
          ],
          correctIndex: 1,
          explanation: '"CERTAINE" avant = vague/indéterminé ("une certaine réponse" = some kind of answer). "CERTAINE" après = sûr/assuré ("une réponse certaine" = a definite/certain answer). Encore un exemple de changement de sens selon la position.',
        },
        {
          id: 'b1-gram-02-ex10',
          type: 'qcm',
          question: 'Accord adjectif irrégulier : "C\'est une ___ idée !" (beau, féminin)',
          options: ['beau', 'belle', 'beaux', 'belles'],
          correctIndex: 1,
          explanation: '"Une BELLE idée." "Beau" a un féminin irrégulier : "belle" (pas "beaue"). Cas particulier d\'accord à mémoriser : beau/belle, nouveau/nouvelle, vieux/vieille (tous irréguliers).',
        },
        {
          id: 'b1-gram-02-ex11',
          type: 'qcm',
          question: 'BAGS — quel adjectif se place normalement APRÈS le nom ?',
          options: ['petit', 'professionnel', 'bon', 'nouveau'],
          correctIndex: 1,
          explanation: '"PROFESSIONNEL" se place APRÈS le nom car ce n\'est PAS un adjectif court BAGS : "un projet PROFESSIONNEL". Les autres (petit, bon, nouveau) sont des adjectifs BAGS courts → AVANT le nom.',
        },
        {
          id: 'b1-gram-02-ex12',
          type: 'qcm',
          question: 'Accord adjectif irrégulier : "Un ___ travail." (nouveau, masculin devant voyelle)',
          options: ['nouveau', 'nouvel', 'nouvelle', 'nouveaux'],
          correctIndex: 0,
          explanation: '"Un NOUVEAU travail." "Nouveau" reste "nouveau" devant une consonne. ⚠️ Devant une VOYELLE ou un H muet, on dit "NOUVEL" : "un NOUVEL appartement", "un NOUVEL hôtel". "Travail" commence par une consonne → "nouveau".',
        },
        {
          id: 'b1-gram-02-ex13',
          type: 'qcm',
          question: 'Quel est le sens de "le DERNIER train" (avant) vs "l\'année DERNIÈRE" (après) ?',
          options: [
            'Les deux signifient la même chose',
            '"Dernier" avant = le dernier d\'une série (final) / "dernier" après = passé/précédent (dans le temps)',
            '"Dernier" avant = passé / "dernier" après = final',
            'Aucune différence de sens, juste de position',
          ],
          correctIndex: 1,
          explanation: '"Le DERNIER train" (avant) = the last train (final one in a sequence). "L\'année DERNIÈRE" (après) = last year (the previous one, in time). Le sens varie selon qu\'on parle d\'un ordre/série ou d\'une référence temporelle.',
        },
        {
          id: 'b1-gram-02-ex14',
          type: 'qcm',
          question: 'Accord couleur composée : "Des yeux ___ ___ très particuliers." (bleu clair)',
          options: ['bleus clairs', 'bleu clair', 'bleue claire', 'bleus claire'],
          correctIndex: 1,
          explanation: '"Des yeux BLEU CLAIR." Couleur composée (bleu + clair) → invariable, même au masculin pluriel ("yeux"). Pas de "s" final sur "bleu" ni "clair".',
        },
        {
          id: 'b1-gram-02-ex15',
          type: 'qcm',
          question: 'Quel adjectif change de sens et signifie "courageux" quand il est APRÈS le nom (mais "bon/gentil" avant) ?',
          options: ['grand', 'brave', 'propre', 'certain'],
          correctIndex: 1,
          explanation: '"BRAVE" avant = bon/gentil ("un brave homme" = a good/kind man). "BRAVE" après = courageux ("un homme brave" = a brave/courageous man). Un des exemples classiques de double sens selon position.',
        },
        {
          id: 'b1-gram-02-ex16',
          type: 'qcm',
          question: 'Accord adjectif irrégulier : "Une réponse ___ ." (public, féminin)',
          options: ['public', 'publique', 'publice', 'publiques'],
          correctIndex: 1,
          explanation: '"Une réponse PUBLIQUE." "Public" a un féminin irrégulier : "publique" (-c devient -que). Comme "turc/turque". "Réponse" = féminin singulier → "publique".',
        },
        {
          id: 'b1-gram-02-ex17',
          type: 'qcm',
          question: 'Accord nom-couleur invariable : "Des murs ___ dans le salon." (orange)',
          options: ['orange', 'oranges', 'orangé', 'orangés'],
          correctIndex: 0,
          explanation: '"Des murs ORANGE." "Orange" (nom de fruit utilisé comme couleur) → INVARIABLE. Pas de "s" même au pluriel. ⚠️ Différent d\'"orangé" (vrai adjectif dérivé) qui lui s\'accorderait : "des murs orangés".',
        },
        {
          id: 'b1-gram-02-ex18',
          type: 'qcm',
          question: 'Quel adjectif fait partie des BAGS (placé avant le nom) parmi ces choix ?',
          options: ['administratif', 'jeune', 'gouvernemental', 'professionnel'],
          correctIndex: 1,
          explanation: '"JEUNE" (Âge dans BAGS) se place AVANT le nom : "un JEUNE candidat". Les trois autres adjectifs sont des adjectifs plus longs/techniques qui se placent systématiquement APRÈS le nom en français.',
        },
        {
          id: 'b1-gram-02-ex19',
          type: 'qcm',
          question: 'Accord adjectif irrégulier : "Une chemise ___ ." (blanc, féminin)',
          options: ['blanc', 'blanche', 'blanque', 'blanches'],
          correctIndex: 1,
          explanation: '"Une chemise BLANCHE." "Blanc" a un féminin irrégulier : "blanche" (-c devient -che). Comme "sec/sèche", "frais/fraîche". "Chemise" = féminin singulier → "blanche".',
        },
        {
          id: 'b1-gram-02-ex20',
          type: 'qcm',
          question: 'Pourquoi "des yeux noisette" reste-t-il invariable malgré le pluriel "yeux" ?',
          options: [
            'C\'est une erreur, il faudrait "noisettes"',
            '"Noisette" est un nom (le fruit) employé comme adjectif de couleur, donc invariable',
            'Tous les adjectifs de couleur sont invariables',
            'C\'est une exception sans raison grammaticale',
          ],
          correctIndex: 1,
          explanation: '"Noisette" est à l\'origine un NOM commun (le fruit du noisetier) utilisé pour décrire une couleur. Comme "marron" et "orange", les noms-couleurs restent INVARIABLES quand ils sont utilisés comme adjectifs. C\'est une règle systématique, pas une exception isolée.',
        },
      ],
    },

    {
      id: 'b1-gram-03',
      slug: 'b1-doubles-pronoms',
      moduleSlug: 'b1-grammaire',
      level: 'B1',
      title: 'Les doubles pronoms compléments',
      description: 'Combiner deux pronoms compléments (me le, te la, nous les...) dans la même phrase.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Pourquoi combiner deux pronoms ?

Pour éviter les répétitions, le français combine souvent un pronom COI (me, te, lui, nous, vous, leur) avec un pronom COD (le, la, les) dans la même phrase.

**L'ordre des pronoms** (règle fondamentale) :
1. Avec **me / te / nous / vous** : le COI vient AVANT le COD
   "Il **me le** donne." / "Elle **te les** envoie."
2. Avec **lui / leur** : le COD vient AVANT le COI
   "Il **le lui** donne." / "Elle **les leur** envoie."

**Tableau récapitulatif :**
| Sujet + | COI | COD | Exemple |
|---|---|---|---|
| me/te/nous/vous + | (avant) | le/la/les | Je **te le** prête. |
| | le/la/les + | lui/leur | Je **le lui** prête. |

**Exemples administratifs concrets :**
- "Vous avez besoin de ce document ? Je **vous l'**envoie tout de suite."
- "Le dossier ? L'agent **le lui** a remis hier."
- "Ces papiers, je **vous les** ai déjà donnés."
- "Cette information, le conseiller **la leur** a expliquée."

**À l'impératif affirmatif**, les pronoms suivent le verbe :
"Donnez-**le-moi** !" (et non "me le donnez")
"Envoyez-**les-lui** !"`,

      linguisticPoint: `## Point linguistique : L'ordre des pronoms à l'impératif

### Impératif affirmatif (pronoms après le verbe, avec tirets)
- "Donne-**le**-moi !" (COD-COI, ordre inversé par rapport à la phrase normale)
- "Envoyez-**les**-lui !"
- "Explique-**la**-nous !"

⚠️ À l'impératif affirmatif, l'ordre s'inverse : COD + COI (jamais "moi-le")
Exception : "moi" et "toi" deviennent "m\'" et "t\'" devant "en" : "Donne-m\'en !"

### Impératif négatif (ordre normal, avant le verbe)
- "Ne **me le** donne pas !"
- "Ne **les lui** envoyez pas !"

### Avec un infinitif (verbe + infinitif)
Les pronoms se placent avant l'infinitif :
"Je vais **te le** dire." / "Il veut **nous les** montrer."`,

      keyPoints: [
        'Ordre normal : me/te/nous/vous + le/la/les (COI avant COD)',
        'Avec lui/leur : le/la/les + lui/leur (COD avant COI, ordre inversé)',
        'Impératif affirmatif : verbe + COD + COI (avec tirets) : "Donne-le-moi !"',
        'Impératif négatif : ordre normal avant le verbe : "Ne me le donne pas !"',
        'Avec infinitif : pronoms placés avant l\'infinitif : "Je vais te le dire."',
      ],

      exercises: [
        {
          id: 'b1-gram-03-ex01',
          type: 'qcm',
          question: 'Remplacez par des pronoms : "Il donne le document à moi." →',
          options: ['Il le me donne.', 'Il me le donne.', 'Il me donne le.', 'Il donne me le.'],
          correctIndex: 1,
          explanation: '"Il ME LE donne." Avec "me", l\'ordre est COI + COD = "me le" (pas "le me"). Règle : me/te/nous/vous TOUJOURS avant le/la/les.',
        },
        {
          id: 'b1-gram-03-ex02',
          type: 'qcm',
          question: 'Remplacez : "L\'agent remet le dossier à lui (le candidat)." →',
          options: ['L\'agent lui le remet.', 'L\'agent le lui remet.', 'L\'agent remet le lui.', 'L\'agent remet lui le.'],
          correctIndex: 1,
          explanation: '"L\'agent LE LUI remet." Avec "lui", l\'ordre s\'INVERSE : COD + COI = "le lui" (pas "lui le"). Règle spécifique : lui/leur viennent TOUJOURS après le/la/les.',
        },
        {
          id: 'b1-gram-03-ex03',
          type: 'qcm',
          question: 'Impératif affirmatif : "Donne le document à moi !" →',
          options: ['Donne-moi-le !', 'Donne-le-moi !', 'Me le donne !', 'Donne le-moi !'],
          correctIndex: 1,
          explanation: '"Donne-LE-MOI !" À l\'impératif affirmatif, l\'ordre est COD + COI (avec tirets) : "le-moi" (jamais "moi-le"). C\'est l\'ordre INVERSE de la phrase déclarative normale ("tu me le donnes").',
        },
        {
          id: 'b1-gram-03-ex04',
          type: 'qcm',
          question: 'Remplacez : "Elle envoie les papiers à toi." →',
          options: ['Elle les te envoie.', 'Elle te les envoie.', 'Elle t\'les envoie.', 'Elle envoie te les.'],
          correctIndex: 1,
          explanation: '"Elle TE LES envoie." Avec "te", ordre COI + COD = "te les" (te avant les). ⚠️ Pas d\'élision de "te" devant une consonne ("les" commence par consonne phonétique [le]) — "te les" reste séparé.',
        },
        {
          id: 'b1-gram-03-ex05',
          type: 'qcm',
          question: 'Remplacez : "Le conseiller explique la situation à eux (les candidats)." →',
          options: ['Le conseiller leur la explique.', 'Le conseiller la leur explique.', 'Le conseiller explique la leur.', 'Le conseiller explique leur la.'],
          correctIndex: 1,
          explanation: '"Le conseiller LA LEUR explique." Avec "leur", l\'ordre s\'inverse : COD + COI = "la leur" (jamais "leur la"). Même règle que "lui" mais au pluriel.',
        },
        {
          id: 'b1-gram-03-ex06',
          type: 'qcm',
          question: 'Impératif négatif : "Ne donne pas le document à moi !" →',
          options: ['Ne me le donne pas !', 'Ne le moi donne pas !', 'Ne donne-moi-le pas !', 'Donne-ne me le pas !'],
          correctIndex: 0,
          explanation: '"Ne ME LE donne pas !" À l\'impératif NÉGATIF, l\'ordre reste NORMAL (comme la phrase déclarative) et les pronoms se placent AVANT le verbe : "ne + COI + COD + verbe + pas".',
        },
        {
          id: 'b1-gram-03-ex07',
          type: 'qcm',
          question: 'Remplacez avec infinitif : "Je vais dire la vérité à toi." →',
          options: ['Je vais te la dire.', 'Je vais la te dire.', 'Je vais dire te la.', 'Je vais te dire la.'],
          correctIndex: 0,
          explanation: '"Je vais TE LA dire." Avec un infinitif (après "aller", "vouloir", "pouvoir"...), les pronoms se placent AVANT l\'infinitif, dans l\'ordre normal : COI (te) + COD (la).',
        },
        {
          id: 'b1-gram-03-ex08',
          type: 'qcm',
          question: 'Impératif affirmatif avec "lui" : "Envoie les documents à lui !" →',
          options: ['Envoie-lui-les !', 'Envoie-les-lui !', 'Lui les envoie !', 'Envoie les lui !'],
          correctIndex: 1,
          explanation: '"Envoie-LES-LUI !" À l\'impératif affirmatif, toujours COD + COI (même avec "lui") : "les-lui" (jamais "lui-les"). L\'ordre s\'inverse systématiquement par rapport à la phrase déclarative.',
        },
        {
          id: 'b1-gram-03-ex09',
          type: 'qcm',
          question: 'Remplacez : "Nous montrons nos papiers à vous." →',
          options: ['Nous vous les montrons.', 'Nous les vous montrons.', 'Nous montrons vous les.', 'Nous vous montrons les.'],
          correctIndex: 0,
          explanation: '"Nous VOUS LES montrons." Avec "vous" (COI), ordre normal : COI + COD = "vous les" (vous avant les). Règle constante pour me/te/nous/vous.',
        },
        {
          id: 'b1-gram-03-ex10',
          type: 'qcm',
          question: 'Cas particulier "m\'en" : "Donne-moi du pain !" → impératif avec pronoms →',
          options: ['Donne-moi-en !', 'Donne-m\'en !', 'Donne-en-moi !', 'M\'en donne !'],
          correctIndex: 1,
          explanation: '"Donne-M\'EN !" Devant "en" (ou "y"), "moi" et "toi" deviennent "m\'" et "t\'" (élision). Exception à la règle générale de l\'impératif. "Donne-moi-en" est incorrect, on dit "Donne-m\'en !"',
        },
        {
          id: 'b1-gram-03-ex11',
          type: 'qcm',
          question: 'Remplacez : "Le préfet a remis le titre de séjour à elle." →',
          options: ['Le préfet lui l\'a remis.', 'Le préfet le lui a remis.', 'Le préfet l\'a lui remis.', 'Le préfet a remis lui le.'],
          correctIndex: 1,
          explanation: '"Le préfet LE LUI a remis." Avec "lui", ordre inversé COD + COI = "le lui". ⚠️ Au passé composé, les pronoms se placent avant l\'auxiliaire "avoir" : "le lui A remis".',
        },
        {
          id: 'b1-gram-03-ex12',
          type: 'qcm',
          question: 'Impératif négatif avec "leur" : "Ne donne pas les clés à eux !" →',
          options: ['Ne les leur donne pas !', 'Ne leur les donne pas !', 'Ne donne-leur-les pas !', 'Donne ne les leur pas !'],
          correctIndex: 0,
          explanation: '"Ne LES LEUR donne pas !" Impératif négatif = ordre normal (avant le verbe) : COD + COI = "les leur" (avec "leur", l\'ordre est toujours COD avant COI, négatif ou affirmatif... mais position différente).',
        },
        {
          id: 'b1-gram-03-ex13',
          type: 'qcm',
          question: 'Remplacez avec pouvoir + infinitif : "Vous pouvez expliquer la règle à nous ?" →',
          options: ['Vous pouvez nous la expliquer ?', 'Vous pouvez nous l\'expliquer ?', 'Vous pouvez la nous expliquer ?', 'Vous pouvez l\'expliquer nous ?'],
          correctIndex: 1,
          explanation: '"Vous pouvez NOUS L\'expliquer ?" Avec "nous" (COI) + "la" (COD, élidé en "l\'" devant voyelle) → ordre normal "nous" + "l\'" = "nous l\'expliquer". L\'élision de "la" en "l\'" se produit devant le verbe à voyelle.',
        },
        {
          id: 'b1-gram-03-ex14',
          type: 'qcm',
          question: 'Quelle règle s\'applique TOUJOURS avec "lui" et "leur" (sauf à l\'impératif négatif où l\'ordre est identique) ?',
          options: [
            'Le COI vient toujours avant le COD',
            'Le COD vient toujours avant le COI (le/la/les + lui/leur)',
            'Aucune règle fixe',
            'L\'ordre dépend du temps du verbe',
          ],
          correctIndex: 1,
          explanation: 'Avec "lui" et "leur", le COD (le/la/les) vient TOUJOURS avant le COI (lui/leur) : "le lui / la lui / les lui / le leur / la leur / les leur". C\'est l\'INVERSE de la règle avec me/te/nous/vous.',
        },
        {
          id: 'b1-gram-03-ex15',
          type: 'qcm',
          question: 'Remplacez : "Le médecin prescrit ce traitement à moi." →',
          options: ['Le médecin me le prescrit.', 'Le médecin le me prescrit.', 'Le médecin prescrit me le.', 'Le médecin moi le prescrit.'],
          correctIndex: 0,
          explanation: '"Le médecin ME LE prescrit." Ordre normal avec "me" : COI (me) + COD (le) = "me le". Cette structure est très fréquente dans les contextes médicaux et administratifs en français.',
        },
        {
          id: 'b1-gram-03-ex16',
          type: 'qcm',
          question: 'Impératif affirmatif : "Explique la procédure à nous !" →',
          options: ['Explique-nous-la !', 'Explique-la-nous !', 'Nous la explique !', 'Explique nous la !'],
          correctIndex: 1,
          explanation: '"Explique-LA-NOUS !" À l\'impératif affirmatif, l\'ordre est toujours COD + COI : "la-nous" (même avec "nous", l\'inversion s\'applique à l\'impératif affirmatif, contrairement à la phrase déclarative).',
        },
        {
          id: 'b1-gram-03-ex17',
          type: 'qcm',
          question: 'Remplacez : "Ils ont envoyé la convocation à eux (les candidats), hier." →',
          options: ['Ils la leur ont envoyée hier.', 'Ils leur la ont envoyée hier.', 'Ils ont envoyé la leur hier.', 'Ils la leur ont envoyé hier.'],
          correctIndex: 0,
          explanation: '"Ils LA LEUR ont envoyée hier." Ordre COD+COI = "la leur". ⚠️ Accord du participe passé "envoyée" car le COD ("la" = la convocation, féminin) précède le verbe avec "avoir".',
        },
        {
          id: 'b1-gram-03-ex18',
          type: 'qcm',
          question: 'Avec "vouloir" + infinitif : "Il veut montrer le document à toi." →',
          options: ['Il veut te le montrer.', 'Il veut le te montrer.', 'Il veut montrer te le.', 'Il veut te montrer le.'],
          correctIndex: 0,
          explanation: '"Il veut TE LE montrer." Avec un infinitif après "vouloir", les pronoms se placent juste AVANT l\'infinitif, dans l\'ordre normal pour "te" : COI + COD = "te le".',
        },
        {
          id: 'b1-gram-03-ex19',
          type: 'qcm',
          question: 'Quelle phrase est INCORRECTE ?',
          options: [
            '"Il me le donne."',
            '"Il le lui donne."',
            '"Il lui le donne."',
            '"Il nous les envoie."',
          ],
          correctIndex: 2,
          explanation: '"Il LUI LE donne" est INCORRECT. Avec "lui", l\'ordre doit être COD + COI : "le lui" (pas "lui le"). C\'est l\'erreur la plus fréquente sur ce point grammatical — bien retenir l\'inversion avec lui/leur.',
        },
        {
          id: 'b1-gram-03-ex20',
          type: 'qcm',
          question: 'Résumé : pourquoi l\'ordre des pronoms change-t-il avec "lui/leur" par rapport à "me/te/nous/vous" ?',
          options: [
            'C\'est une règle arbitraire sans logique',
            'C\'est une règle fixe du français : historiquement, "lui/leur" se comportent différemment des autres pronoms COI',
            'Cela dépend du dialecte régional',
            'L\'ordre est en fait identique, c\'est une erreur de manuel',
          ],
          correctIndex: 1,
          explanation: 'C\'est une règle FIXE et systématique du français standard, sans exception : avec me/te/nous/vous → COI avant COD ; avec lui/leur → COD avant COI. Cette asymétrie est purement grammaticale (héritée de l\'évolution historique de la langue) et doit être mémorisée comme telle.',
        },
      ],
    },

    {
      id: 'b1-gram-04',
      slug: 'b1-adverbes',
      moduleSlug: 'b1-grammaire',
      level: 'B1',
      title: 'Les adverbes : formation et emploi',
      description: 'Former des adverbes en -ment et connaître les principaux adverbes irréguliers.',
      duration: 12,
      free: false,
      dialogue: `## Texte : À quoi servent les adverbes ?

Les adverbes modifient un verbe, un adjectif ou un autre adverbe. Ils sont essentiels pour nuancer son discours, notamment à l'oral et dans les écrits administratifs.

**Formation régulière (adjectif + -ment) :**
- Adjectif terminé par une CONSONNE au masculin → forme féminine + -ment
  lent → lente → lent**ement** / doux → douce → douc**ement**
- Adjectif terminé par une VOYELLE au masculin → masculin + -ment
  vrai → vrai**ment** / poli → poli**ment** / absolu → absolu**ment**

**Cas particuliers :**
- Adjectifs en **-ant** → **-amment** : courant → couramm**ent**, constant → constamm**ent**
- Adjectifs en **-ent** → **-emment** : patient → patiemm**ent**, évident → évidemm**ent**
- Adjectifs en **-ai/-é/-i/-u** → pas de "e" : vrai**ment**, aisé**ment**, joli**ment**, absolu**ment**

**Adverbes irréguliers (à mémoriser) :**
- bon → **bien** (pas "bonement")
- mauvais → **mal**
- meilleur → **mieux**
- petit → **peu**
- gentil → **gentiment**
- bref → **brièvement**

**Place de l'adverbe :**
- Avec un verbe simple : après le verbe ("Il parle **couramment** français")
- Avec un verbe composé : souvent entre l'auxiliaire et le participe passé ("Il a **bien** compris")`,

      linguisticPoint: `## Point linguistique : Les adverbes de manière, de quantité et de fréquence

### Adverbes de manière (comment ?)
rapidement, lentement, soigneusement, correctement, difficilement, facilement...

### Adverbes de quantité/degré (combien ?)
très, beaucoup, peu, assez, trop, plutôt, extrêmement, complètement, totalement...

### Adverbes de fréquence (à quelle fréquence ?)
toujours, souvent, parfois, rarement, jamais, régulièrement, quotidiennement...

### Position selon le type
- Manière : généralement après le verbe ou en fin de phrase
- Fréquence courte (toujours/souvent/jamais) : entre auxiliaire et participe passé
  "Il a **toujours** respecté la loi." / "Elle n\'a **jamais** menti."
- Fréquence longue (-ment) : plutôt en fin de phrase
  "Il vérifie son dossier **quotidiennement**."`,

      keyPoints: [
        'Formation régulière : adjectif (fém. si consonne) + -ment : lente → lentement',
        'Cas -ant → -amment (courant → couramment) / -ent → -emment (patient → patiemment)',
        'Irréguliers à mémoriser : bon→bien / mauvais→mal / petit→peu / gentil→gentiment',
        'Adverbes courts (toujours/souvent/jamais) = entre auxiliaire et PP au passé composé',
        'Adverbes longs en -ment = généralement en fin de phrase',
      ],

      exercises: [
        {
          id: 'b1-gram-04-ex01',
          type: 'qcm',
          question: 'Formez l\'adverbe de "lent" :',
          options: ['lentment', 'lentement', 'lenment', 'lentemment'],
          correctIndex: 1,
          explanation: '"LENTEMENT." "Lent" se termine par une consonne → forme féminine ("lente") + "-ment" = "lentement". Règle standard pour les adjectifs en consonne au masculin.',
        },
        {
          id: 'b1-gram-04-ex02',
          type: 'qcm',
          question: 'Formez l\'adverbe de "vrai" (adjectif terminé par une voyelle) :',
          options: ['vraiement', 'vraiment', 'vraiment', 'vraiment (avec e)'],
          correctIndex: 1,
          explanation: '"VRAIMENT." "Vrai" se termine par une voyelle → masculin + "-ment" directement (pas de "e" intermédiaire) = "vraiment". Pas "vraiement".',
        },
        {
          id: 'b1-gram-04-ex03',
          type: 'qcm',
          question: 'Formez l\'adverbe de "courant" (cas en -ant) :',
          options: ['courantement', 'couramment', 'courantment', 'couranment'],
          correctIndex: 1,
          explanation: '"COURAMMENT." Adjectifs en "-ant" → "-amment" (et non "-antement"). "Il parle COURAMMENT français" = he speaks French fluently. Cas particulier à mémoriser.',
        },
        {
          id: 'b1-gram-04-ex04',
          type: 'qcm',
          question: 'Quel est l\'adverbe irrégulier formé à partir de "bon" ?',
          options: ['bonement', 'bonnement', 'bien', 'bonnement (avec deux n)'],
          correctIndex: 2,
          explanation: '"BIEN" est l\'adverbe irrégulier de "bon" (pas "bonement" qui n\'existe pas). "Il travaille BIEN" = he works well. À mémoriser comme exception totale à la règle régulière.',
        },
        {
          id: 'b1-gram-04-ex05',
          type: 'qcm',
          question: 'Formez l\'adverbe de "patient" (cas en -ent) :',
          options: ['patientement', 'patiemment', 'patientment', 'patienment'],
          correctIndex: 1,
          explanation: '"PATIEMMENT." Adjectifs en "-ent" → "-emment" (et non "-entement"). "Il a expliqué PATIEMMENT la procédure" = he patiently explained the procedure.',
        },
        {
          id: 'b1-gram-04-ex06',
          type: 'qcm',
          question: 'Quel est l\'adverbe irrégulier formé à partir de "mauvais" ?',
          options: ['mauvaisement', 'mal', 'mauvaisment', 'mauvement'],
          correctIndex: 1,
          explanation: '"MAL" est l\'adverbe irrégulier de "mauvais" (pas "mauvaisement"). "Il a MAL compris la question" = he misunderstood the question. Autre exception totale à mémoriser.',
        },
        {
          id: 'b1-gram-04-ex07',
          type: 'qcm',
          question: 'Position de l\'adverbe court au passé composé : "Il ___ respecté la procédure." (toujours)',
          options: ['toujours a', 'a toujours', 'a respecté toujours', 'toujours a respecté'],
          correctIndex: 1,
          explanation: '"Il A TOUJOURS respecté la procédure." Les adverbes courts de fréquence (toujours/souvent/jamais/bien/mal) se placent ENTRE l\'auxiliaire et le participe passé au passé composé.',
        },
        {
          id: 'b1-gram-04-ex08',
          type: 'qcm',
          question: 'Quel est l\'adverbe irrégulier formé à partir de "petit" ?',
          options: ['petitement', 'peu', 'petiment', 'petitment'],
          correctIndex: 1,
          explanation: '"PEU" est l\'adverbe irrégulier lié à "petit" dans le sens de quantité réduite. "Il a PEU de chances" = he has few chances. (Note : "petitement" existe mais avec un sens différent, péjoratif, rarement utilisé).',
        },
        {
          id: 'b1-gram-04-ex09',
          type: 'qcm',
          question: 'Formez l\'adverbe de "gentil" (cas spécial) :',
          options: ['gentilement', 'gentiment', 'gentillement', 'gentilment'],
          correctIndex: 1,
          explanation: '"GENTIMENT." "Gentil" forme un adverbe irrégulier : "gentiment" (pas "gentillement" avec deux L, erreur fréquente). À mémoriser comme exception orthographique.',
        },
        {
          id: 'b1-gram-04-ex10',
          type: 'qcm',
          question: 'Position de l\'adverbe long en fin de phrase : "Il vérifie son dossier ___." (quotidiennement)',
          options: [
            'quotidiennement il vérifie',
            'il vérifie quotidiennement son dossier',
            'Il vérifie son dossier quotidiennement.',
            'Toutes ces positions sont impossibles',
          ],
          correctIndex: 2,
          explanation: '"Il vérifie son dossier QUOTIDIENNEMENT." Les adverbes longs en -ment se placent généralement en FIN DE PHRASE (ou parfois en début pour insister). Différent des adverbes courts (toujours/souvent) qui s\'insèrent entre auxiliaire et PP.',
        },
        {
          id: 'b1-gram-04-ex11',
          type: 'qcm',
          question: 'Formez l\'adverbe de "évident" (cas en -ent) :',
          options: ['évidentement', 'évidemment', 'évidantement', 'évidenment'],
          correctIndex: 1,
          explanation: '"ÉVIDEMMENT." Adjectifs en "-ent" → "-emment". "ÉVIDEMMENT, il faut respecter la loi" = obviously, the law must be respected. Un des adverbes en -emment les plus fréquents en français.',
        },
        {
          id: 'b1-gram-04-ex12',
          type: 'qcm',
          question: 'Quel est l\'adverbe irrégulier formé à partir de "meilleur" ?',
          options: ['meilleurement', 'mieux', 'meilment', 'meilleument'],
          correctIndex: 1,
          explanation: '"MIEUX" est l\'adverbe irrégulier de "meilleur" (comparatif de "bien", pas de "bon"). "Il comprend MIEUX maintenant" = he understands better now. ⚠️ Ne pas confondre "meilleur" (adjectif) et "mieux" (adverbe).',
        },
        {
          id: 'b1-gram-04-ex13',
          type: 'qcm',
          question: 'Position de l\'adverbe négatif court au passé composé : "Elle ___ menti à l\'administration." (jamais)',
          options: ['n\'a jamais', 'jamais n\'a', 'n\'a menti jamais', 'a n\'jamais'],
          correctIndex: 0,
          explanation: '"Elle N\'A JAMAIS menti." "Jamais" (avec "ne") se place entre l\'auxiliaire et le participe passé, comme les autres adverbes courts de fréquence. "Ne...jamais" encadre l\'auxiliaire normalement.',
        },
        {
          id: 'b1-gram-04-ex14',
          type: 'qcm',
          question: 'Formez l\'adverbe de "absolu" (terminé par une voyelle) :',
          options: ['absoluement', 'absolument', 'absoluement (avec e)', 'absolutement'],
          correctIndex: 1,
          explanation: '"ABSOLUMENT." "Absolu" se termine par une voyelle → masculin + "-ment" directement (pas de "e"). "C\'est ABSOLUMENT nécessaire" = it is absolutely necessary.',
        },
        {
          id: 'b1-gram-04-ex15',
          type: 'qcm',
          question: 'Quel est l\'adverbe formé à partir de "bref" (cas particulier) ?',
          options: ['brefment', 'brièvement', 'brefement', 'brevement'],
          correctIndex: 1,
          explanation: '"BRIÈVEMENT." "Bref" forme un adverbe complètement irrégulier basé sur "brève" (féminin) + adaptation : "brièvement" (avec accent et "i"). "Expliquez BRIÈVEMENT votre situation" = explain your situation briefly.',
        },
        {
          id: 'b1-gram-04-ex16',
          type: 'qcm',
          question: 'Adverbe de quantité : "Cette démarche est ___ compliquée." (très, intensité forte)',
          options: ['peu', 'assez', 'très', 'rarement'],
          correctIndex: 2,
          explanation: '"Cette démarche est TRÈS compliquée." "Très" = adverbe d\'intensité forte. Les autres : "peu" (faible intensité), "assez" (intensité moyenne), "rarement" (fréquence, pas intensité) ne correspondent pas au sens voulu ici.',
        },
        {
          id: 'b1-gram-04-ex17',
          type: 'qcm',
          question: 'Formez l\'adverbe de "doux" (consonne + cas particulier) :',
          options: ['douxment', 'doucement', 'douxement', 'doucemment'],
          correctIndex: 1,
          explanation: '"DOUCEMENT." "Doux" → féminin "douce" + "-ment" = "doucement" (avec changement x→c comme au féminin). "Parlez DOUCEMENT, s\'il vous plaît" = speak softly, please.',
        },
        {
          id: 'b1-gram-04-ex18',
          type: 'qcm',
          question: 'Quel adverbe de fréquence exprime le sens le plus proche de "never" ?',
          options: ['souvent', 'parfois', 'jamais', 'toujours'],
          correctIndex: 2,
          explanation: '"JAMAIS" (avec "ne") = never. Les autres : "souvent" = often, "parfois" = sometimes, "toujours" = always. Ces adverbes de fréquence sont essentiels pour décrire des habitudes ou des comportements récurrents.',
        },
        {
          id: 'b1-gram-04-ex19',
          type: 'qcm',
          question: 'Formez l\'adverbe de "récent" (cas en -ent) :',
          options: ['récentement', 'récemment', 'récenment', 'récentment'],
          correctIndex: 1,
          explanation: '"RÉCEMMENT." Adjectifs en "-ent" → "-emment" (récent → récemment). "J\'ai RÉCEMMENT déposé ma demande" = I recently submitted my application. Très utile pour les démarches administratives.',
        },
        {
          id: 'b1-gram-04-ex20',
          type: 'qcm',
          question: 'Pourquoi "couramment" et "patiemment" prennent-ils -amment et -emment respectivement, malgré la même terminaison [amã] à l\'oral ?',
          options: [
            'C\'est aléatoire, sans règle',
            'La règle dépend de la terminaison de l\'adjectif d\'origine : -ant → -amment / -ent → -emment',
            'Les deux s\'écrivent en réalité de la même façon',
            'Cela dépend de la longueur du mot',
          ],
          correctIndex: 1,
          explanation: 'Bien que prononcés de façon similaire à l\'oral, l\'orthographe dépend de la terminaison de l\'ADJECTIF D\'ORIGINE : adjectifs en "-ANT" (courant, constant, élégant) → adverbe en "-AMMENT" ; adjectifs en "-ENT" (patient, récent, évident) → adverbe en "-EMMENT". Règle orthographique fixe à appliquer en fonction de l\'adjectif de départ.',
        },
      ],
    },
  ],
};
