import type { LangModule } from '../types';

export const a2Sante: LangModule = {
  id: 'a2-mod-05',
  slug: 'a2-sante',
  level: 'A2',
  title: 'Santé & urgences',
  subtitle: 'Chez le médecin, à la pharmacie, les urgences',
  description: 'Décrivez vos symptômes, consultez un médecin, allez à la pharmacie et gérez les situations d\'urgence.',
  type: 'thematique',
  emoji: '🏥',
  free: false,
  lessons: [
    {
      id: 'a2-sa-01',
      slug: 'a2-chez-medecin',
      moduleSlug: 'a2-sante',
      level: 'A2',
      title: 'Chez le médecin',
      description: 'Prenez rendez-vous, décrivez vos symptômes et comprenez les conseils du médecin.',
      duration: 12,
      free: false,
      dialogue: `## Dialogue : Consultation médicale

*Kenza a de la fièvre et va consulter son médecin généraliste.*

**Secrétaire :** Cabinet du docteur Lambert, bonjour.

**Kenza :** Bonjour. Je voudrais prendre un rendez-vous. C'est assez urgent.

**Secrétaire :** Vous êtes patiente du docteur Lambert ?

**Kenza :** Oui, je m'appelle Kenza Oualid. Je suis inscrite depuis l'année dernière.

**Secrétaire :** Qu'est-ce que vous avez exactement ?

**Kenza :** J'ai de la fièvre depuis hier soir, 38°8. Et j'ai très mal à la gorge. J'ai du mal à avaler.

**Secrétaire :** D'accord. Le docteur peut vous recevoir cet après-midi à 16h30. Ça vous convient ?

**Kenza :** Oui, parfait. Je dois apporter quelque chose ?

**Secrétaire :** Votre carte Vitale et votre carte de mutuelle si vous en avez une.

*Plus tard, lors de la consultation.*

**Médecin :** Bonjour madame Oualid. Qu'est-ce qui vous amène ?

**Kenza :** J'ai de la fièvre depuis hier soir et très mal à la gorge. J'ai aussi des courbatures et je suis très fatiguée. Je n'ai pas pu dormir la nuit.

**Médecin :** Est-ce que vous avez toussé ou eu le nez qui coule ?

**Kenza :** Non, pas vraiment. Surtout la gorge et la fièvre. Et j'ai un peu mal à la tête.

**Médecin :** Je vais examiner votre gorge... Oui, vos amygdales sont très rouges et enflées. C'est une angine. Je vais vous prescrire un antibiotique et un antalgique pour la fièvre et la douleur.

**Kenza :** C'est grave ?

**Médecin :** Non, mais il faut traiter rapidement. Prenez l'antibiotique 3 fois par jour pendant 7 jours, même si vous vous sentez mieux. Ne l'arrêtez pas avant la fin du traitement.

**Kenza :** Et pour aller au travail ?

**Médecin :** Je vous prescris un arrêt de travail de 3 jours. Reposez-vous, buvez beaucoup d'eau et évitez les endroits publics pour ne pas contaminer les autres.

---

### Vocabulaire clé — Chez le médecin

| Terme | Définition |
|---|---|
| La fièvre | Température corporelle supérieure à 38° |
| Les courbatures | Douleurs musculaires généralisées |
| Une angine | Infection et inflammation des amygdales |
| Les amygdales | Glandes dans la gorge (tonsils) |
| Un antibiotique | Médicament contre les infections bactériennes |
| Un antalgique | Médicament contre la douleur et la fièvre |
| Prescrire | Ordonner officiellement un traitement |
| L'ordonnance | Document écrit du médecin pour la pharmacie |
| Un arrêt de travail | Document médical autorisant à ne pas travailler |
| La carte Vitale | Carte de l'Assurance maladie |`,

      linguisticPoint: `## Point linguistique : Exprimer la douleur et les symptômes

### Structures pour exprimer la douleur
| Structure | Exemple |
|---|---|
| **avoir mal à + article + partie du corps** | J'ai mal à la gorge / au dos |
| **faire mal** | Ma gorge me fait mal |
| **avoir + symptôme** | J'ai de la fièvre / J'ai des courbatures |
| **être + état** | Je suis fatigué(e) / Je suis enrhumé(e) |
| **souffrir de** | Je souffre d'une angine |
| **avoir du mal à + infinitif** | J'ai du mal à avaler / à dormir |

### Avoir mal à — contractions à maîtriser
| Partie du corps | Genre | Construction | Exemple |
|---|---|---|---|
| la tête | féminin | à + la = **à la** | J'ai mal à la tête |
| le dos | masculin | à + le = **au** | J'ai mal au dos |
| la gorge | féminin | à + la = **à la** | J'ai mal à la gorge |
| le ventre | masculin | à + le = **au** | J'ai mal au ventre |
| les oreilles | pluriel | à + les = **aux** | J'ai mal aux oreilles |
| les jambes | pluriel | à + les = **aux** | J'ai mal aux jambes |

### Le corps humain — parties essentielles
| Partie haute | Partie basse |
|---|---|
| la tête | le ventre / l'abdomen |
| le cou | le dos |
| la gorge | les hanches |
| la poitrine | les genoux |
| les épaules | les jambes |
| les bras | les pieds |
| les oreilles | les orteils |
| les yeux | les chevilles |

### Symptômes courants — vocabulaire complet
| Symptôme | Traduction | Comment le dire |
|---|---|---|
| La fièvre | Fever | J'ai de la fièvre / J'ai 38°8 |
| Les courbatures | Body aches | J'ai des courbatures partout |
| La toux | Cough | Je tousse / J'ai de la toux |
| Le nez qui coule | Runny nose | J'ai le nez qui coule |
| Les frissons | Chills | J'ai des frissons |
| Les nausées | Nausea | J'ai des nausées / envie de vomir |
| Un mal de tête | Headache | J'ai mal à la tête |
| L'essoufflement | Shortness of breath | J'ai du mal à respirer |
| Une angine | Sore throat / tonsillitis | J'ai une angine |
| Un rhume | Cold | J'ai un rhume |
| La grippe | Flu | J'ai la grippe |

### Erreurs fréquentes
- ❌ *J'ai mal gorge* → ✅ **J'ai mal à la gorge**
- ❌ *J'ai une fièvre* → ✅ **J'ai de la fièvre** (partitif) ou **J'ai 38° de fièvre**
- ❌ *Je souffre mal à la tête* → ✅ **J'ai mal à la tête** ou **Je souffre d'un mal de tête**`,

      keyPoints: [
        'Avoir mal À LA gorge / AU dos / À LA tête (à + article contracté)',
        'Avoir de la fièvre / des courbatures / le nez qui coule',
        'Angine = infection gorge → antibiotiques à finir même si mieux',
        '"Qu\'est-ce qui vous amène ?" = formule du médecin en consultation',
        'Médecin généraliste = premier recours avant les spécialistes',
      ],

      exercises: [
        {
          id: 'a2-sa-01-ex01',
          type: 'qcm',
          question: 'Quelle est la structure correcte pour dire "I have a sore throat" ?',
          options: ['J\'ai mal gorge', 'J\'ai mal à la gorge', 'J\'ai la gorge mal', 'Ma gorge est mal'],
          correctIndex: 1,
          explanation: '"Avoir mal À + article + partie du corps". "J\'ai mal À LA gorge." La contraction : à + la = à la / à + le = au / à + les = aux. "J\'ai mal AU dos / À LA tête / AUX oreilles."',
        },
        {
          id: 'a2-sa-01-ex02',
          type: 'qcm',
          question: 'Kenza a quelle température de fièvre ?',
          options: ['37°5', '38°5', '38°8', '39°5'],
          correctIndex: 2,
          explanation: 'Kenza dit "j\'ai de la fièvre depuis hier soir, 38°8". En France, on considère qu\'il y a fièvre à partir de 38°. Une fièvre à 38°8 est modérée mais nécessite une consultation.',
        },
        {
          id: 'a2-sa-01-ex03',
          type: 'qcm',
          question: 'Que signifie "des courbatures" ?',
          options: ['Des maux de tête', 'Des douleurs musculaires généralisées', 'Des nausées', 'Des frissons'],
          correctIndex: 1,
          explanation: '"Les courbatures" = body aches / muscle soreness. C\'est la sensation douloureuse dans les muscles (bras, jambes, dos) souvent accompagnée de la grippe ou d\'un effort physique intense.',
        },
        {
          id: 'a2-sa-01-ex04',
          type: 'qcm',
          question: 'Que sont les "amygdales" ?',
          options: [
            'Des muscles du cou',
            'Des glandes dans la gorge',
            'Les cordes vocales',
            'Des ganglions sous les bras',
          ],
          correctIndex: 1,
          explanation: 'Les amygdales (tonsils) sont des glandes lymphatiques situées de chaque côté de la gorge. Quand elles sont enflammées et douloureuses, c\'est une angine. Parfois elles sont enlevées chirurgicalement.',
        },
        {
          id: 'a2-sa-01-ex05',
          type: 'qcm',
          question: 'Pourquoi le médecin dit-il de ne pas arrêter le traitement antibiotique avant la fin ?',
          options: [
            'Pour dépenser plus d\'argent en médicaments',
            'Pour éviter une rechute et la résistance bactérienne aux antibiotiques',
            'Parce que les antibiotiques sont très forts',
            'Par obligation légale',
          ],
          correctIndex: 1,
          explanation: 'Arrêter un antibiotique avant la fin peut laisser des bactéries survivantes qui deviennent résistantes (antibiotic resistance). Il faut toujours finir le traitement prescrit même si on se sent mieux.',
        },
        {
          id: 'a2-sa-01-ex06',
          type: 'qcm',
          question: 'Quelle formule le médecin utilise-t-il pour ouvrir la consultation ?',
          options: [
            '"Bonjour, comment vous appelez-vous ?"',
            '"Qu\'est-ce qui vous amène ?"',
            '"Qu\'avez-vous ?"',
            '"Où avez-vous mal ?"',
          ],
          correctIndex: 1,
          explanation: '"Qu\'est-ce qui vous amène ?" = What brings you here? C\'est la formule classique du médecin en début de consultation. Elle invite le patient à décrire librement sa raison de consultation.',
        },
        {
          id: 'a2-sa-01-ex07',
          type: 'qcm',
          question: 'Quel symptôme Kenza N\'A PAS ?',
          options: ['Fièvre', 'Mal à la gorge', 'Courbatures', 'Toux et nez qui coule'],
          correctIndex: 3,
          explanation: 'Kenza a : fièvre / mal à la gorge / courbatures / fatigue. Quand le médecin demande "avez-vous toussé ou eu le nez qui coule ?" Kenza répond "Non, pas vraiment." Elle n\'a donc pas de toux ni de rhinorrhée.',
        },
        {
          id: 'a2-sa-01-ex08',
          type: 'qcm',
          question: 'Comment dit-on "I have a headache" en français ?',
          options: ['J\'ai mal de tête', 'J\'ai mal à la tête', 'J\'ai une tête qui fait mal', 'Ma tête a mal'],
          correctIndex: 1,
          explanation: '"J\'ai mal À LA tête" = I have a headache. La structure "avoir mal à + article + partie du corps" s\'applique à tout le corps : à la tête / au dos / au ventre / aux oreilles.',
        },
        {
          id: 'a2-sa-01-ex09',
          type: 'qcm',
          question: 'Que prescrit le médecin à Kenza ?',
          options: ['Des antidouleurs', 'Un antibiotique', 'Un antiviral', 'Du sirop pour la toux'],
          correctIndex: 1,
          explanation: 'Le médecin prescrit "un antibiotique" car l\'angine de Kenza est bactérienne (amygdales rouges et enflées). Les antibiotiques traitent les infections bactériennes (pas les virus).',
        },
        {
          id: 'a2-sa-01-ex10',
          type: 'qcm',
          question: 'Combien de fois par jour Kenza doit-elle prendre l\'antibiotique ?',
          options: ['1 fois', '2 fois', '3 fois', '4 fois'],
          correctIndex: 2,
          explanation: 'Le médecin dit "Prenez le médicament 3 fois par jour pendant 7 jours." Les instructions médicales précisent toujours la fréquence (combien de fois/jour) et la durée (combien de jours).',
        },
        {
          id: 'a2-sa-01-ex11',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'"une angine" ?',
          options: [
            'Une crise cardiaque',
            'Une infection de la gorge (amygdales enflammées)',
            'Une grippe',
            'Une allergie',
          ],
          correctIndex: 1,
          explanation: 'Une angine = inflammation et infection des amygdales. Symptômes : gorge rouge, difficile à avaler, fièvre. Elle peut être virale (pas d\'antibiotique) ou bactérienne (streptocoque → antibiotique). Le médecin fait souvent un test rapide pour distinguer.',
        },
        {
          id: 'a2-sa-01-ex12',
          type: 'qcm',
          question: 'Quelle est la différence entre "fatiguée" et "enrhumée" ?',
          options: [
            '"Fatiguée" = avoir un rhume, "enrhumée" = être épuisée',
            '"Fatiguée" = manquer d\'énergie, "enrhumée" = avoir un rhume (nez qui coule, éternuements)',
            'Les deux expressions sont identiques',
            '"Enrhumée" est plus grave que "fatiguée"',
          ],
          correctIndex: 1,
          explanation: '"Être fatiguée" = tired, lacking energy. "Être enrhumée" = avoir un rhume (common cold) = nez qui coule, éternuements. Ces sont deux états différents. On peut être fatiguée et enrhumée en même temps.',
        },
        {
          id: 'a2-sa-01-ex13',
          type: 'qcm',
          question: 'Que signifie "prescrire" un médicament ?',
          options: [
            'Acheter un médicament',
            'Ordonner officiellement un traitement médical (écrire une ordonnance)',
            'Refuser un traitement',
            'Expliquer comment utiliser un médicament',
          ],
          correctIndex: 1,
          explanation: '"Prescrire" = écrire une ordonnance pour un médicament. Seuls les médecins (et certains professionnels de santé) peuvent prescrire. Sans ordonnance, les antibiotiques ne peuvent pas être vendus en pharmacie en France.',
        },
        {
          id: 'a2-sa-01-ex14',
          type: 'qcm',
          question: 'Comment dit-on "my knee hurts" ?',
          options: ['Mon genou a mal', 'J\'ai mal au genou', 'Mon genou fait la douleur', 'Je souffre genou'],
          correctIndex: 1,
          explanation: '"J\'ai mal AU genou" = my knee hurts. "Genou" est masculin → à + le = AU. Autres exemples : "j\'ai mal AU bras" / "j\'ai mal AU pied" (masc.) vs "j\'ai mal À LA jambe" (fém.).',
        },
        {
          id: 'a2-sa-01-ex15',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un "médecin généraliste" ?',
          options: [
            'Un médecin spécialisé dans une maladie particulière',
            'Le médecin de premier recours qui traite les maladies courantes et oriente vers les spécialistes',
            'Un médecin des urgences',
            'Un médecin qui travaille à l\'hôpital',
          ],
          correctIndex: 1,
          explanation: 'Le médecin généraliste (ou médecin traitant) est le premier médecin à consulter. Il traite les maladies courantes et, si nécessaire, adresse le patient à un spécialiste (cardiologue, dermatologue, ORL...). Il faut le déclarer à la CPAM.',
        },
        {
          id: 'a2-sa-01-ex16',
          type: 'qcm',
          question: 'Comment demande-t-on une consultation urgente ?',
          options: [
            '"Je dois voir le médecin maintenant"',
            '"Je voudrais prendre un rendez-vous. C\'est assez urgent."',
            '"Donnez-moi un rendez-vous tout de suite"',
            '"J\'ai besoin de venir maintenant"',
          ],
          correctIndex: 1,
          explanation: '"Je voudrais prendre un rendez-vous. C\'est assez urgent." est la formule polie pour signaler une situation nécessitant une consultation rapide. Ajouter "c\'est urgent" permet à la secrétaire de trouver un créneau plus tôt.',
        },
        {
          id: 'a2-sa-01-ex17',
          type: 'qcm',
          question: 'Qu\'est-ce que "le nez qui coule" ?',
          options: ['Un saignement de nez', 'Un écoulement nasal (rhume)', 'Une congestion nasale', 'Un nez cassé'],
          correctIndex: 1,
          explanation: '"Le nez qui coule" = a runny nose. C\'est un symptôme du rhume (rhinite virale) où du mucus s\'écoule du nez. À distinguer du "nez bouché" (congestion nasale, nez obstrué) et du "saignement de nez" (épistaxis).',
        },
        {
          id: 'a2-sa-01-ex18',
          type: 'qcm',
          question: 'Combien de jours dure le traitement antibiotique prescrit à Kenza ?',
          options: ['3 jours', '5 jours', '7 jours', '10 jours'],
          correctIndex: 2,
          explanation: 'Le médecin prescrit un traitement "pendant 7 jours". La durée d\'un traitement antibiotique pour une angine est généralement 5-7 jours selon le médicament prescrit.',
        },
        {
          id: 'a2-sa-01-ex19',
          type: 'qcm',
          question: '"Enflées" (des amygdales) signifie :',
          options: ['Très petites', 'Gonflées / augmentées de volume', 'Très rouges', 'Très douloureuses'],
          correctIndex: 1,
          explanation: '"Enflé(e)" = swollen = gonflé, augmenté de volume. "Vos amygdales sont très rouges et enflées" = elles sont rouges ET gonflées, ce qui indique une inflammation active (angine).',
        },
        {
          id: 'a2-sa-01-ex20',
          type: 'qcm',
          question: 'Que signifie "même si vous vous sentez mieux" dans les instructions médicales ?',
          options: [
            'Seulement si vous vous sentez mieux',
            'Il faut continuer le traitement MÊME QUAND l\'état s\'améliore',
            'Arrêtez si vous vous sentez mieux',
            'Prenez plus si vous vous sentez mieux',
          ],
          correctIndex: 1,
          explanation: '"Même si" = even if. "Prenez le médicament même si vous vous sentez mieux" = continue taking it even when you feel better. C\'est une instruction médicale importante pour les antibiotiques.',
        },
      ],
    },

    {
      id: 'a2-sa-02',
      slug: 'a2-pharmacie',
      moduleSlug: 'a2-sante',
      level: 'A2',
      title: 'À la pharmacie',
      description: 'Présentez votre ordonnance, demandez des médicaments sans ordonnance et comprenez les posologies.',
      duration: 12,
      free: false,
      dialogue: `## Dialogue : À la pharmacie

*Tariq va à la pharmacie avec une ordonnance.*

**Pharmacien :** Bonjour monsieur, je peux vous aider ?

**Tariq :** Bonjour. J'ai une ordonnance de mon médecin.

**Pharmacien :** *(il regarde l'ordonnance)* Très bien. Vous avez la carte Vitale ?

**Tariq :** Oui, la voilà.

**Pharmacien :** Parfait. Je vous prépare ça. Il y a l'amoxicilline, les pastilles pour la gorge et le doliprane. Pour l'amoxicilline, c'est 1 gélule 3 fois par jour pendant 7 jours, à prendre pendant les repas pour éviter les problèmes gastriques. Vous ne devez pas prendre de soleil et pas d'alcool pendant le traitement.

**Tariq :** Compris. Est-ce que le doliprane, c'est pour la douleur ou la fièvre ?

**Pharmacien :** Les deux. Le doliprane contient du paracétamol — c'est antalgique et antipyrétique. Vous pouvez en prendre toutes les 4 à 6 heures si nécessaire, maximum 4 comprimés par jour. Il ne faut jamais dépasser la dose maximale.

**Tariq :** J'ai aussi mal à la tête depuis 3 jours, indépendamment de la grippe. Est-ce que je peux prendre quelque chose ?

**Pharmacien :** Est-ce que vous prenez d'autres médicaments actuellement ?

**Tariq :** Non.

**Pharmacien :** Dans ce cas, l'ibuprofène peut aider pour les maux de tête. Mais comme vous prenez déjà du doliprane, il faut respecter les intervalles. Ne combinez pas les deux sans l'avis d'un médecin.

**Tariq :** Et pour le remboursement — tout est remboursé ?

**Pharmacien :** L'amoxicilline est remboursée à 65%. Le doliprane aussi. Les pastilles pour la gorge ne sont pas remboursées — c'est à votre charge. Mais si vous avez une mutuelle, elle peut compléter le remboursement de la Sécurité sociale.

**Tariq :** J'ai la CMU-C. Ça change quelque chose ?

**Pharmacien :** Oui, avec la CSS (anciennement CMU-C), vous n'avez rien à payer aujourd'hui. C'est le tiers payant intégral. La pharmacie se fait rembourser directement par la Sécu et votre complémentaire. Voilà vos médicaments. Avez-vous des questions sur la prise ?

**Tariq :** Non, c'est clair. Merci beaucoup.

---

### Vocabulaire clé — La pharmacie et les médicaments

| Terme | Définition |
|---|---|
| L'ordonnance | Prescription médicale signée par le médecin |
| La carte Vitale | Carte de Sécurité sociale pour le remboursement |
| La posologie | Instructions de dosage (dose, fréquence, durée) |
| Un antibiotique | Médicament contre les infections bactériennes |
| Le paracétamol | Molécule active du Doliprane — antidouleur + fièvre |
| L'ibuprofène | Anti-inflammatoire — douleur, fièvre, inflammation |
| Le tiers payant | Vous ne payez pas, la pharmacie se fait rembourser directement |
| La CSS | Complémentaire Santé Solidaire (anciennement CMU-C) |`,

      linguisticPoint: `## Point linguistique : Les instructions médicales — impératif et infinitif d'ordre

### L'impératif pour donner des instructions
| Personne | Affirmatif | Négatif |
|---|---|---|
| **Prends** (tu) | Prends 1 comprimé | Ne prends pas d\'alcool |
| **Prenez** (vous) | Prenez 1 gélule | Ne dépassez pas 4/jour |
| **Prenons** (nous) | Prenons rendez-vous | Ne manquons pas le suivi |

### L'infinitif comme instruction (style notice médicale)
Ces formulations sont utilisées dans les notices, ordonnances et mode d'emploi :
- "Prendre 1 gélule 3 fois par jour"
- "À prendre pendant les repas"
- "Ne pas dépasser la dose maximale"
- "Consulter un médecin si les symptômes persistent"
- "Conserver à température ambiante (15-25°C)"

### Formes des médicaments en français
| Forme | Description |
|---|---|
| Le comprimé | Forme solide compressée (tablet) |
| La gélule | Capsule gélatineuse (capsule) |
| La pastille | Petit bonbon médicamenteux (lozenge) |
| Le sirop | Médicament liquide sucré |
| La pommade | Médicament à appliquer sur la peau (cream) |
| Le suppositoire | Médicament à introduire par voie rectale |
| Les gouttes | Médicament liquide dosé en gouttes |

### Le remboursement des médicaments en France
| Taux | Qui paie le reste ? |
|---|---|
| 100% | CSS / CMU-C : rien à payer |
| 65% | Sécu paie 65%, vous payez 35% (ou mutuelle) |
| 30% | Médicaments peu remboursés |
| 0% | Non remboursé — entièrement à votre charge |

### Erreurs fréquentes — instructions médicales
| ❌ Erreur | ✅ Correction |
|---|---|
| **Prenez-vous** le médicament | **Prenez** le médicament (impératif → pas de sujet) |
| Ne pas **à** dépasser | Ne pas **dépasser** (infinitif négatif : ne pas + inf.) |
| Prendre **à** 3 fois par jour | Prendre 3 fois par jour (fréquence sans "à") |`,

      keyPoints: [
        'Impératif : Prenez / Ne dépassez pas / Ne combinez pas',
        'Infinitif d\'ordre : "Prendre 1 gélule..." (style notice médicale)',
        'Paracétamol (Doliprane) = antalgique + antipyrétique',
        'Ibuprofène = anti-inflammatoire (ne pas combiner sans avis médical)',
        'Maximum 4 comprimés/jour pour le paracétamol',
      ],

      exercises: [
        {
          id: 'a2-sa-02-ex01',
          type: 'qcm',
          question: 'Quelle est la différence entre une "gélule" et un "comprimé" ?',
          options: [
            'Une gélule est plus petite',
            'Une gélule est une capsule (enveloppe + poudre), un comprimé est une forme solide pressée',
            'Un comprimé est liquide',
            'Une gélule est réservée aux enfants',
          ],
          correctIndex: 1,
          explanation: 'Gélule = capsule (envelope gélatineuse contenant une poudre ou un liquide). Comprimé = tablet (poudre compressée en forme solide). Les deux sont des formes orales de médicaments.',
        },
        {
          id: 'a2-sa-02-ex02',
          type: 'qcm',
          question: 'Pourquoi Tariq doit-il prendre l\'amoxicilline pendant les repas ?',
          options: [
            'Pour mieux absorber le médicament',
            'Pour éviter les problèmes gastriques (maux d\'estomac)',
            'Parce que le médecin le lui a dit',
            'Pour respecter les horaires',
          ],
          correctIndex: 1,
          explanation: 'Le pharmacien dit "à prendre pendant les repas pour éviter les problèmes gastriques." Certains antibiotiques (dont l\'amoxicilline) peuvent irriter l\'estomac. Les prendre avec de la nourriture atténue cet effet.',
        },
        {
          id: 'a2-sa-02-ex03',
          type: 'qcm',
          question: 'Que signifie "antalgique" ?',
          options: [
            'Contre la fièvre',
            'Contre la douleur',
            'Contre les infections',
            'Contre les allergies',
          ],
          correctIndex: 1,
          explanation: '"Antalgique" = painkiller = contre la douleur. Synonymes : analgésique, antidouleur. Le paracétamol (Doliprane) est antalgique et antipyrétique (contre la fièvre). L\'ibuprofène est anti-inflammatoire, antalgique et antipyrétique.',
        },
        {
          id: 'a2-sa-02-ex04',
          type: 'qcm',
          question: 'Combien de comprimés de Doliprane maximum peut-on prendre par jour ?',
          options: ['2 comprimés', '3 comprimés', '4 comprimés', '6 comprimés'],
          correctIndex: 2,
          explanation: 'Le pharmacien dit "maximum 4 comprimés par jour." La dose maximale de paracétamol est de 4 grammes par jour (4 comprimés de 1g ou 8 comprimés de 500mg). Dépasser peut causer une hépatotoxicité (dommages au foie).',
        },
        {
          id: 'a2-sa-02-ex05',
          type: 'qcm',
          question: 'Transformez en impératif poli (vous) : "Ne pas dépasser la dose"',
          options: [
            'Ne dépasse pas la dose',
            'Ne dépassez pas la dose',
            'Vous ne devez pas dépasser la dose',
            'Pas dépasser la dose',
          ],
          correctIndex: 1,
          explanation: 'Impératif négatif : NE + impératif + PAS. "Ne DÉPASSEZ PAS la dose" (vous). L\'impératif de "dépasser" à la forme "vous" = "dépassez".',
        },
        {
          id: 'a2-sa-02-ex06',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'"antipyrétique" signifie ?',
          options: [
            'Contre la douleur',
            'Contre la fièvre',
            'Contre les bactéries',
            'Contre les inflammations',
          ],
          correctIndex: 1,
          explanation: '"Antipyrétique" = fever reducer = contre la fièvre. "Pyrétique" vient du grec "pyretos" (fièvre). Le Doliprane (paracétamol) est à la fois antalgique (contre la douleur) et antipyrétique (contre la fièvre).',
        },
        {
          id: 'a2-sa-02-ex07',
          type: 'qcm',
          question: 'Toutes les combien d\'heures peut-on prendre le Doliprane ?',
          options: ['Toutes les 2 heures', 'Toutes les 4 à 6 heures', 'Toutes les 8 heures', 'Une seule fois par jour'],
          correctIndex: 1,
          explanation: 'Le pharmacien dit "toutes les 4 à 6 heures si nécessaire, maximum 4 comprimés par jour." L\'intervalle minimum entre deux prises est donc 4 heures.',
        },
        {
          id: 'a2-sa-02-ex08',
          type: 'qcm',
          question: 'Pourquoi ne faut-il pas prendre de soleil avec l\'amoxicilline ?',
          options: [
            'Le soleil annule l\'effet de l\'antibiotique',
            'Certains antibiotiques rendent la peau plus sensible au soleil (risque de brûlure)',
            'Le pharmacien ne l\'a pas expliqué précisément',
            'C\'est une règle générale pour tous les médicaments',
          ],
          correctIndex: 1,
          explanation: 'Certains antibiotiques (dont certaines familles) peuvent provoquer une photosensibilisation : la peau réagit plus fortement au soleil, avec risque de brûlures plus rapides. Le pharmacien mentionne l\'interdiction de soleil.',
        },
        {
          id: 'a2-sa-02-ex09',
          type: 'qcm',
          question: 'Tariq peut-il prendre ibuprofène ET doliprane ensemble ?',
          options: [
            'Oui, ils sont complémentaires',
            'Non, jamais',
            'Pas sans avis médical, il faut respecter les intervalles',
            'Oui, uniquement en cas de forte fièvre',
          ],
          correctIndex: 2,
          explanation: 'Le pharmacien dit "Ne combinez pas les deux sans l\'avis d\'un médecin." En général, ibuprofène et paracétamol peuvent être alternés (pas pris ensemble en même temps), mais il faut respecter les intervalles et les doses de chacun.',
        },
        {
          id: 'a2-sa-02-ex10',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une "pastille" (pour la gorge) ?',
          options: [
            'Une injection',
            'Un comprimé à sucer (lozenge)',
            'Un spray',
            'Un sirop',
          ],
          correctIndex: 1,
          explanation: 'Une pastille pour la gorge est un comprimé à sucer lentement. Elle libère progressivement ses principes actifs (antiseptiques, anesthésiants locaux) qui apaisent l\'irritation de la gorge.',
        },
        {
          id: 'a2-sa-02-ex11',
          type: 'qcm',
          question: 'Que signifie "la posologie" d\'un médicament ?',
          options: [
            'Le prix du médicament',
            'Les instructions de dosage (quantité, fréquence, durée)',
            'Les effets indésirables',
            'La composition chimique',
          ],
          correctIndex: 1,
          explanation: '"La posologie" = dosage instructions. Elle indique : combien prendre (dose), combien de fois par jour (fréquence), pendant combien de temps (durée). On la trouve sur la boîte ou dans la notice.',
        },
        {
          id: 'a2-sa-02-ex12',
          type: 'qcm',
          question: 'Transformez en style notice (infinitif) : "Vous devez prendre 1 gélule le matin."',
          options: [
            'Prendre 1 gélule le matin',
            'Prenez 1 gélule le matin',
            'On prend 1 gélule le matin',
            'Le patient prend 1 gélule le matin',
          ],
          correctIndex: 0,
          explanation: 'Le style des notices médicales utilise l\'infinitif : "Prendre 1 gélule le matin" / "À prendre avec un verre d\'eau" / "Ne pas dépasser 4 par jour". C\'est plus concis que l\'impératif.',
        },
        {
          id: 'a2-sa-02-ex13',
          type: 'qcm',
          question: 'Que signifie "problèmes gastriques" ?',
          options: [
            'Problèmes respiratoires',
            'Problèmes d\'estomac / digestifs',
            'Problèmes de peau',
            'Problèmes cardiaques',
          ],
          correctIndex: 1,
          explanation: '"Gastrique" = relatif à l\'estomac. "Problèmes gastriques" = maux d\'estomac, nausées, irritation gastrique. Certains médicaments (antibiotiques, AINS...) peuvent irriter l\'estomac et causer des problèmes gastriques.',
        },
        {
          id: 'a2-sa-02-ex14',
          type: 'qcm',
          question: 'Tariq a mal à la tête depuis combien de temps ?',
          options: ['1 jour', '2 jours', '3 jours', '1 semaine'],
          correctIndex: 2,
          explanation: 'Tariq dit "j\'ai aussi mal à la tête depuis 3 jours, indépendamment de la grippe." La durée "depuis 3 jours" indique que ce mal de tête existe depuis 3 jours et continue maintenant.',
        },
        {
          id: 'a2-sa-02-ex15',
          type: 'qcm',
          question: 'Que signifie "indépendamment" dans "indépendamment de la grippe" ?',
          options: [
            'À cause de la grippe',
            'Séparément / sans lien avec la grippe',
            'Avant la grippe',
            'Après la grippe',
          ],
          correctIndex: 1,
          explanation: '"Indépendamment de" = independently of / separately from. Tariq signale que son mal de tête est un problème distinct, pas un symptôme de sa grippe. C\'est une information médicale importante pour le pharmacien.',
        },
        {
          id: 'a2-sa-02-ex16',
          type: 'qcm',
          question: 'Que signifie "si nécessaire" dans "prenez en toutes les 4-6 heures si nécessaire" ?',
          options: [
            'Obligatoirement',
            'Uniquement en cas de besoin (si vous avez encore de la douleur ou de la fièvre)',
            'Si possible',
            'Seulement le soir',
          ],
          correctIndex: 1,
          explanation: '"Si nécessaire" = if needed / as needed. Pour le Doliprane, "si nécessaire" signifie qu\'on ne prend le médicament que si on a encore mal ou de la fièvre. Si les symptômes ont disparu, pas besoin de continuer.',
        },
        {
          id: 'a2-sa-02-ex17',
          type: 'qcm',
          question: 'Pourquoi le pharmacien demande-t-il si Tariq prend d\'autres médicaments ?',
          options: [
            'Pour facturer correctement',
            'Pour vérifier les interactions médicamenteuses potentielles',
            'Par curiosité professionnelle',
            'Pour mettre à jour son dossier médical',
          ],
          correctIndex: 1,
          explanation: 'Les interactions médicamenteuses (drug interactions) peuvent être dangereuses. Le pharmacien vérifie toujours les autres médicaments pris pour éviter des combinaisons néfastes.',
        },
        {
          id: 'a2-sa-02-ex18',
          type: 'qcm',
          question: 'Comment dit-on en style notice "Ne pas prendre d\'alcool" ?',
          options: [
            'Vous ne prenez pas d\'alcool',
            'Ne prenez pas d\'alcool',
            'Ne pas prendre d\'alcool',
            'Pas d\'alcool',
          ],
          correctIndex: 2,
          explanation: 'En style notice médicale, la forme négative = "NE PAS + infinitif". "Ne pas prendre d\'alcool" / "Ne pas dépasser la dose" / "Ne pas utiliser après la date de péremption". C\'est la forme la plus courante dans les notices.',
        },
        {
          id: 'a2-sa-02-ex19',
          type: 'qcm',
          question: 'Qu\'est-ce que l\'ibuprofène ?',
          options: [
            'Le même principe actif que le Doliprane',
            'Un anti-inflammatoire non stéroïdien (AINS) — antidouleur + antipyrétique',
            'Un antibiotique',
            'Un antiviral',
          ],
          correctIndex: 1,
          explanation: 'L\'ibuprofène est un AINS (Anti-Inflammatoire Non Stéroïdien). C\'est un antalgique (contre la douleur), antipyrétique (contre la fièvre) et anti-inflammatoire. Il est différent du paracétamol (Doliprane) dans son mécanisme d\'action.',
        },
        {
          id: 'a2-sa-02-ex20',
          type: 'qcm',
          question: 'Comment dit-on "I need the pharmacist\'s advice" ?',
          options: [
            'Je veux un pharmacien',
            "J'ai besoin de l'avis du pharmacien",
            "Je cherche le pharmacien",
            "Je demande le pharmacien",
          ],
          correctIndex: 1,
          explanation: '"Avoir besoin de" = to need. "J\'ai besoin de L\'AVIS du pharmacien" = I need the pharmacist\'s advice. "L\'avis" = the opinion/advice. "Besoin de" est suivi d\'un nom ou d\'un infinitif.',
        },
      ],
    },

    {
      id: 'a2-sa-03',
      slug: 'a2-urgences-appels',
      moduleSlug: 'a2-sante',
      level: 'A2',
      title: 'Les urgences et les numéros d\'appel',
      description: 'Apprenez à appeler les secours, décrire une urgence et gérer les situations critiques.',
      duration: 12,
      free: false,
      dialogue: `## Dialogue : Appel au 15 (SAMU)

*Mamadou appelle le 15 car sa femme a perdu connaissance.*

**Régulateur SAMU :** SAMU, j'écoute.

**Mamadou :** Allô ! Ma femme a perdu connaissance. Elle ne répond plus. S'il vous plaît, aidez-moi !

**Régulateur :** Restez calme. Je suis là. Vous êtes où exactement ?

**Mamadou :** Je suis au 14, avenue de la République, à Lyon. Appartement 302.

**Régulateur :** D'accord. Quel âge a votre femme ?

**Mamadou :** 42 ans.

**Régulateur :** Est-ce qu'elle respire ?

**Mamadou :** Je... je ne sais pas. Je ne suis pas sûr.

**Régulateur :** Mettez votre oreille près de sa bouche et de son nez. Vous entendez ou sentez de l'air ?

**Mamadou :** Oui, je crois qu'elle respire, mais très faiblement.

**Régulateur :** Bien. Ne la déplacez pas. Restez à côté d'elle. J'envoie une ambulance immédiatement. Pouvez-vous descendre et ouvrir la porte de l'immeuble pour les secouristes ?

**Mamadou :** Oui, je descends.

**Régulateur :** Restez en ligne. Ne raccrochez pas. Les secours arrivent dans moins de 10 minutes.

**Mamadou :** Elle vient de reprendre connaissance. Elle ouvre les yeux.

**Régulateur :** C'est positif. Ne la laissez pas se lever seule. Restez avec elle. Demandez-lui si elle a mal quelque part.

**Mamadou :** Elle dit qu'elle a mal à la tête et qu'elle ne se souvient de rien.

**Régulateur :** C'est normal après une perte de connaissance. Les secours sont là dans 5 minutes. Continuez à lui parler pour la garder éveillée. Vous avez ses papiers d'identité et sa carte Vitale accessibles ?

**Mamadou :** Oui, dans son sac.

**Régulateur :** Bien. Prenez-les pour les donner aux secouristes à leur arrivée. Voici la procédure : ouvrez la porte de l'immeuble, guidez-les jusqu'à votre appartement.

---

### Vocabulaire clé — Les urgences médicales

| Terme | Définition |
|---|---|
| Perdre connaissance | S'évanouir — arrêter d'être conscient |
| Les secours | L'équipe d'urgence (pompiers, SAMU) |
| Le régulateur | Opérateur médical qui répond au 15 |
| Une ambulance | Véhicule médicalisé pour les urgences |
| Rester en ligne | Ne pas raccrocher le téléphone |
| Un secouriste | Personne formée aux premiers secours |
| La perte de connaissance | Évanouissement, syncope |
| Respirer faiblement | Respiration peu visible, difficile |`,

      linguisticPoint: `## Point linguistique : L'impératif — ordre, conseil, instructions d'urgence

### Formation de l'impératif présent
| Groupe | Infinitif | Tu | Vous | Nous |
|---|---|---|---|---|
| -ER | rester | reste (sans s) | restez | restons |
| -IR | finir | finis | finissez | finissons |
| -RE | descendre | descends | descendez | descendons |
| -ER | aller | va (irrég.) | allez | allons |

**Attention** : verbes en -ER → tu → on supprime le **s** (tu manges → mange !)

### Impératifs irréguliers — les 4 incontournables
| Infinitif | Tu | Vous |
|---|---|---|
| être | **sois** calme | **soyez** calme |
| avoir | **aie** confiance | **ayez** confiance |
| aller | **va** aux urgences | **allez** aux urgences |
| savoir | **sache** que... | **sachez** que... |

### Impératif avec pronoms — position
| Situation | Structure | Exemple |
|---|---|---|
| Affirmatif | verbe-pronom | **Appelez-les** (les secours) |
| Négatif | ne + pronom + verbe + pas | **Ne les** appelez **pas** |
| Affirmatif, me | verbe-**moi** | **Dites-moi** l\'adresse |
| Négatif, me | ne + **me** + verbe | **Ne me** quittez pas |

### Les numéros d'urgence en France
| Numéro | Service | Situation |
|---|---|---|
| **15** | SAMU | Urgence médicale (malaise, accident) |
| **17** | Police / Gendarmerie | Danger, crime, agression |
| **18** | Pompiers | Incendie, accident de la route |
| **112** | Numéro européen | Toutes urgences (marche partout en EU) |
| **114** | Urgences sourds | Via SMS ou application |
| **3114** | Crise suicidaire | Prévention suicide, détresse psychologique |
| **15 ou 3237** | SOS Médecins | Médecin à domicile (nuit et week-end) |

### Phrases clés pour appeler les secours
- **"Allô, j'ai besoin d'aide"** — attirer l'attention
- **"Il/elle a perdu connaissance"** — décrire l'état
- **"Je suis au [adresse complète]"** — donner la localisation
- **"Il/elle respire / ne respire plus"** — état respiratoire
- **"Que dois-je faire ?"** — demander des instructions

### Erreurs fréquentes — l'impératif
| ❌ Erreur | ✅ Correction |
|---|---|
| **Vas** aux urgences (tu) | **Va** aux urgences (irrég. sans s) |
| **Appelez-vous** le médecin | **Appelez** le médecin (pas de sujet à l\'impératif) |
| Ne **vous** levez **pas** seule | Ne **vous** levez **pas** seule (correct — forme réfléchie) |`,

      keyPoints: [
        'Numéros urgences : 15 (SAMU) / 17 (Police) / 18 (Pompiers) / 112 (européen)',
        'Impératif -ER : vous → supprimez le "s" de la 2e personne',
        'Impératifs irréguliers : sois/soyez / aie/ayez / va/allez',
        'En cas d\'urgence : rester calme, donner l\'adresse précise, ne pas raccrocher',
        'Ne pas déplacer une personne inconsciente sans avis médical',
      ],

      exercises: [
        {
          id: 'a2-sa-03-ex01',
          type: 'qcm',
          question: 'Quel numéro appeller pour une urgence médicale en France ?',
          options: ['Le 17', 'Le 18', 'Le 15', 'Le 112'],
          correctIndex: 2,
          explanation: 'Le 15 = SAMU (Service d\'Aide Médicale Urgente) = numéro des urgences médicales. 17 = police/gendarmerie. 18 = pompiers. 112 = numéro européen universel (fonctionne aussi pour les urgences médicales).',
        },
        {
          id: 'a2-sa-03-ex02',
          type: 'qcm',
          question: 'Quelle est la première information demandée par le régulateur du SAMU ?',
          options: ['L\'âge de la victime', 'L\'adresse exacte', 'Le numéro de téléphone', 'Le nom de la victime'],
          correctIndex: 1,
          explanation: 'La première question est "Vous êtes où exactement ?" = l\'adresse. En cas d\'urgence, l\'adresse est l\'information PRIORITAIRE pour envoyer les secours rapidement. Mémorisez toujours votre adresse complète.',
        },
        {
          id: 'a2-sa-03-ex03',
          type: 'qcm',
          question: 'Mettez à l\'impératif (vous) : "Vous restez calme."',
          options: ['Restez calme !', 'Resté calme !', 'Restez-vous calme !', 'Vous restez calme !'],
          correctIndex: 0,
          explanation: 'Impératif de "rester" (verbe en -ER) : RESTEZ (vous). Pour les verbes en -ER, l\'impératif "vous" = même forme que le présent : "vous restez" → "Restez !"',
        },
        {
          id: 'a2-sa-03-ex04',
          type: 'qcm',
          question: 'Que signifie "perdre connaissance" ?',
          options: [
            'Oublier quelque chose d\'important',
            'S\'évanouir / devenir inconscient',
            'Devenir confus',
            'Souffrir beaucoup',
          ],
          correctIndex: 1,
          explanation: '"Perdre connaissance" = to faint / to lose consciousness. La personne ne répond plus, ne peut pas être réveillée facilement. C\'est une urgence médicale qui nécessite l\'appel du 15.',
        },
        {
          id: 'a2-sa-03-ex05',
          type: 'qcm',
          question: 'Quel numéro appeler en cas d\'incendie ?',
          options: ['Le 15', 'Le 17', 'Le 18', 'Le 112'],
          correctIndex: 2,
          explanation: 'Le 18 = pompiers = numéro à appeler en cas d\'incendie, accident de la route avec blessés, noyade, fuite de gaz... Les pompiers sont aussi formés aux premiers secours médicaux.',
        },
        {
          id: 'a2-sa-03-ex06',
          type: 'qcm',
          question: 'Pourquoi le régulateur dit "Ne raccrochez pas" ?',
          options: [
            'Pour facturer l\'appel',
            'Pour continuer à guider Mamadou et suivre la situation jusqu\'à l\'arrivée des secours',
            'Pour enregistrer la conversation',
            'Par obligation légale',
          ],
          correctIndex: 1,
          explanation: '"Ne raccrochez pas" = don\'t hang up. Le régulateur du SAMU maintient la communication pour : continuer à guider Mamadou, surveiller l\'état de la victime, et s\'assurer que les secours trouvent bien l\'adresse.',
        },
        {
          id: 'a2-sa-03-ex07',
          type: 'qcm',
          question: 'Impératif négatif (vous) : "Ne pas déplacer la victime" →',
          options: [
            'Pas déplacer la victime',
            'Ne déplacez pas la victime',
            'Vous ne déplacez pas la victime',
            'Ne pas vous déplacez la victime',
          ],
          correctIndex: 1,
          explanation: 'Impératif négatif (vous) : NE + verbe à l\'impératif + PAS. "Ne DÉPLACEZ PAS la victime." Le régulateur dit à Mamadou de ne pas bouger sa femme inconsciente (risque d\'aggraver les blessures).',
        },
        {
          id: 'a2-sa-03-ex08',
          type: 'qcm',
          question: 'Que doit faire Mamadou pour vérifier si sa femme respire ?',
          options: [
            'La secouer vigoureusement',
            'Mettre son oreille près de sa bouche/nez pour sentir/entendre l\'air',
            'Regarder sa poitrine',
            'Appuyer sur son estomac',
          ],
          correctIndex: 1,
          explanation: 'Le régulateur guide : "Mettez votre oreille près de sa bouche et de son nez. Vous entendez ou sentez de l\'air ?" C\'est la technique de vérification de la respiration chez une personne inconsciente.',
        },
        {
          id: 'a2-sa-03-ex09',
          type: 'qcm',
          question: 'Quelle est la différence entre le 15 et le 18 ?',
          options: [
            'Le 15 = SAMU (urgences médicales) / le 18 = pompiers (incendie + accidents)',
            'Le 15 = hôpital / le 18 = médecin de garde',
            'Les deux font la même chose',
            'Le 15 = ambulance privée / le 18 = ambulance publique',
          ],
          correctIndex: 0,
          explanation: '15 = SAMU (régulation médicale, urgences de santé). 18 = pompiers (incendie, accidents de la route, noyade...). En pratique, les deux services communiquent entre eux. Le 112 est le numéro européen qui redirige vers le bon service.',
        },
        {
          id: 'a2-sa-03-ex10',
          type: 'qcm',
          question: 'Mamadou dit "elle respire, mais très faiblement." Que signifie "faiblement" ?',
          options: ['Rapidement', 'Avec peu de force / de façon légère et peu prononcée', 'Régulièrement', 'Anormalement vite'],
          correctIndex: 1,
          explanation: '"Faiblement" = weakly / faintly. La femme de Mamadou respire, mais sa respiration est très légère, peu visible/audible. C\'est une situation d\'urgence : la respiration existe mais elle est insuffisante.',
        },
        {
          id: 'a2-sa-03-ex11',
          type: 'qcm',
          question: 'Impératif (vous) de "aller" : "Allez aux urgences !"',
          options: ['Vayez aux urgences', 'Allez aux urgences', 'Alliez aux urgences', 'Ayez aux urgences'],
          correctIndex: 1,
          explanation: '"Aller" à l\'impératif (vous) : ALLEZ. Irrégulier pour "tu" seulement : "va" (sans -s). "Allez aux urgences" (vous). "Va aux urgences" (tu).',
        },
        {
          id: 'a2-sa-03-ex12',
          type: 'qcm',
          question: 'Quel numéro pour une crise suicidaire ?',
          options: ['Le 15', 'Le 17', 'Le 3114', 'Le 112'],
          correctIndex: 2,
          explanation: 'Le 3114 est le numéro national de prévention du suicide, disponible 24h/24. Des professionnels de santé mentale répondent aux appels de personnes en détresse suicidaire ou de leurs proches.',
        },
        {
          id: 'a2-sa-03-ex13',
          type: 'qcm',
          question: 'Que signifie "les secouristes" ?',
          options: [
            'Les employés du service d\'urgence hospitalière',
            'Les personnes formées aux premiers secours qui interviennent en urgence (pompiers, SAMU...)',
            'Les médecins de garde',
            'Les infirmiers d\'urgence',
          ],
          correctIndex: 1,
          explanation: '"Les secouristes" = emergency responders. En France, ce terme désigne les personnes qui interviennent en première urgence : pompiers, ambulanciers du SAMU, premiers intervenants. Ils sont formés aux gestes de premiers secours.',
        },
        {
          id: 'a2-sa-03-ex14',
          type: 'qcm',
          question: 'Pourquoi ne doit-on pas déplacer une personne inconsciente sans avis médical ?',
          options: [
            'Pour ne pas la salir',
            'Pour éviter d\'aggraver d\'éventuelles blessures à la colonne vertébrale ou internes',
            'Parce que c\'est interdit par la loi',
            'Pour attendre les pompiers',
          ],
          correctIndex: 1,
          explanation: 'Déplacer une personne inconsciente peut aggraver des fractures invisibles (notamment vertébrales). Seuls les secouristes professionnels savent comment déplacer une victime en sécurité. Exception : si la personne est en danger immédiat (incendie, noyade).',
        },
        {
          id: 'a2-sa-03-ex15',
          type: 'qcm',
          question: 'Impératif (vous) de "être" : "Soyez calme."',
          options: ['Êtes calme', 'Soyez calme', 'Estez calme', 'Ayez calme'],
          correctIndex: 1,
          explanation: '"Être" à l\'impératif est irrégulier : SOIS (tu) / SOYONS (nous) / SOYEZ (vous). "Soyez calme" = be calm. Le régulateur dit à Mamadou d\'être calme pour mieux communiquer.',
        },
        {
          id: 'a2-sa-03-ex16',
          type: 'qcm',
          question: 'En France, le 112 est...',
          options: [
            'Le numéro de la police uniquement',
            'Le numéro européen d\'urgence valable dans tous les pays de l\'UE',
            'Le numéro des pompiers uniquement',
            'Le numéro de la sécurité sociale',
          ],
          correctIndex: 1,
          explanation: 'Le 112 est le numéro d\'urgence européen, valable dans tous les pays de l\'UE. Il fonctionne même sans crédit sur un téléphone mobile. Il redirige vers les secours compétents selon le type d\'urgence signalée.',
        },
        {
          id: 'a2-sa-03-ex17',
          type: 'qcm',
          question: 'Que doit-on dire en premier quand on appelle le 15 ?',
          options: [
            'Son nom et prénom',
            'La nature de l\'urgence et l\'adresse exacte',
            'Le numéro de Sécurité sociale de la victime',
            'Demander l\'ambulance',
          ],
          correctIndex: 1,
          explanation: 'En appelant le 15 : 1) Dire la nature de l\'urgence (ma femme est inconsciente), 2) Donner l\'adresse exacte. Ces deux informations permettent au régulateur d\'envoyer les secours adaptés au bon endroit.',
        },
        {
          id: 'a2-sa-03-ex18',
          type: 'qcm',
          question: 'Mamadou habite à quel appartement ?',
          options: ['201', '302', '402', '102'],
          correctIndex: 1,
          explanation: 'Mamadou dit "appartement 302" au "14, avenue de la République, à Lyon". Donner le numéro de l\'appartement est crucial pour que les secours trouvent rapidement la bonne porte.',
        },
        {
          id: 'a2-sa-03-ex19',
          type: 'qcm',
          question: 'Pourquoi le régulateur demande à Mamadou de descendre ouvrir la porte ?',
          options: [
            'Pour que Mamadou se calme',
            'Pour permettre aux secouristes d\'entrer dans l\'immeuble rapidement sans attendre le code ou l\'interphone',
            'Pour que Mamadou garde les enfants en bas',
            'Parce que c\'est une obligation légale',
          ],
          correctIndex: 1,
          explanation: 'Les immeuble ont souvent des codes d\'entrée ou des interphones. En descendant ouvrir la porte, Mamadou permettra aux secours d\'entrer immédiatement et de gagner des minutes précieuses dans une urgence médicale.',
        },
        {
          id: 'a2-sa-03-ex20',
          type: 'qcm',
          question: 'Quel est le délai d\'arrivée des secours promis par le régulateur ?',
          options: ['5 minutes', 'Moins de 10 minutes', '15 minutes', '20 minutes'],
          correctIndex: 1,
          explanation: 'Le régulateur dit "Les secours arrivent dans moins de 10 minutes." En France, l\'objectif du SAMU est une arrivée en moins de 8-10 minutes en zone urbaine. Les délais varient selon l\'accessibilité géographique.',
        },
      ],
    },

    {
      id: 'a2-sa-04',
      slug: 'a2-sante-mentale-stress',
      moduleSlug: 'a2-sante',
      level: 'A2',
      title: 'Bien-être et santé mentale',
      description: 'Parlez de votre état émotionnel, gérez le stress et cherchez de l\'aide psychologique.',
      duration: 12,
      free: false,
      dialogue: `## Dialogue : Parler de son état émotionnel

*Leila voit son médecin pour un bilan de santé. Le médecin aborde aussi la santé mentale.*

**Médecin :** Comment vous sentez-vous en ce moment, de façon générale ?

**Leila :** Physiquement ça va. Mais je suis très stressée depuis que j'ai commencé à travailler. Je n'arrive pas à me détendre.

**Médecin :** Vous dormez bien ?

**Leila :** Pas vraiment. Je m'endors tard, je me réveille plusieurs fois la nuit, et le matin je me lève fatiguée.

**Médecin :** Est-ce que vous avez des moments de tristesse, d'anxiété ou d'angoisse ?

**Leila :** Parfois. Surtout quand je pense à ma famille qui est loin. Je me sens seule parfois.

**Médecin :** Je comprends. L'isolement peut être difficile, surtout dans un nouveau pays. Avez-vous des relations sociales ici — des amis, des collègues avec qui vous passez du temps ?

**Leila :** Un peu. Mes collègues sont sympa mais je ne les vois pas en dehors du travail.

**Médecin :** Je vais vous conseiller deux choses. D'abord, essayez de faire un peu d'exercice physique — même 20 minutes de marche par jour, ça aide beaucoup pour le stress et le sommeil. Ensuite, si vous vous sentez vraiment seule ou triste de façon persistante, n'hésitez pas à consulter un psychologue. Ce n'est pas une faiblesse — c'est prendre soin de soi.

**Leila :** Est-ce que le psychologue, c'est remboursé ?

**Médecin :** Depuis 2022, il y a un dispositif "Mon Soutien Psy". Sur prescription médicale, vous avez droit à 8 séances remboursées par an chez un psychologue conventionné. Le reste à charge est faible, et certaines mutuelles prennent le reste.

**Leila :** Vous pouvez me faire une prescription ?

**Médecin :** Bien sûr. Je vais vous orienter vers une psychologue que je connais. Elle parle aussi anglais si jamais vous vous sentez plus à l'aise dans cette langue au début.

**Leila :** C'est vraiment gentil. Merci pour tout.

---

### Vocabulaire clé — La santé mentale et les émotions

| Terme | Signification |
|---|---|
| Être stressé(e) | Être sous tension, sous pression |
| L'anxiété | État de peur ou d'inquiétude persistante |
| L'angoisse | Anxiété forte, souvent physique (serrement) |
| L'isolement | Le fait d'être seul, coupé des autres |
| Avoir le cafard | Se sentir triste, déprimé (langage courant) |
| Se détendre | Se relaxer, réduire le stress |
| L'insomnie | Difficulté à dormir |
| Un psychologue | Professionnel de la santé mentale (non médecin) |
| Un psychiatre | Médecin spécialisé en santé mentale (peut prescrire) |`,

      linguisticPoint: `## Point linguistique : Les verbes pronominaux réfléchis et réciproques

### Conjugaison des verbes pronominaux (se lever)
| Pronom | Conjugaison | Exemple |
|---|---|---|
| Je | **me** lève | Je **me** lève à 7h |
| Tu | **te** lèves | Tu **te** lèves tôt |
| Il/Elle | **se** lève | Elle **se** lève fatiguée |
| Nous | **nous** levons | Nous **nous** levons ensemble |
| Vous | **vous** levez | Vous **vous** levez comment ? |
| Ils/Elles | **se** lèvent | Ils **se** lèvent tard |

**Au passé composé** : auxiliaire ÊTRE + accord : **Je me suis levée** (féminin)

### Verbes pronominaux essentiels — santé et quotidien
| Verbe | Sens | Exemple |
|---|---|---|
| se sentir | ressentir (état) | Je **me sens** fatigué(e) |
| se détendre | se relaxer | Je ne **me détends** pas |
| se réveiller | sortir du sommeil | Je **me réveille** plusieurs fois |
| s\'endormir | commencer à dormir | Je **m\'endors** tard |
| se lever | quitter son lit | Je **me lève** fatigué(e) |
| se souvenir de | rappeler à sa mémoire | Je **me souviens** de toi |
| s\'inquiéter | avoir des soucis | Je **m\'inquiète** pour ma famille |
| se reposer | récupérer, se relaxer | Je dois **me reposer** |

### Nuances entre être + adjectif et se sentir + adjectif
| Structure | Nuance | Exemple |
|---|---|---|
| **être** + adjectif | état objectif / permanent | Je **suis** stressé(e) |
| **se sentir** + adjectif | ressenti subjectif | Je **me sens** seul(e) |

### Exprimer ses émotions en français
| Registre | Expression |
|---|---|
| Formel | Je ressens de l\'anxiété / Je souffre d\'insomnies |
| Courant | Je suis stressé(e) / Je n\'arrive pas à dormir |
| Familier | J\'ai le cafard / Je suis à bout / Je craque |

### Erreurs fréquentes — verbes pronominaux
| ❌ Erreur | ✅ Correction |
|---|---|
| Je **me sens** solitude | Je **me sens** seul(e) (adj. pas nom) |
| Je **m\'ai** levé à 7h | Je **me suis** levé à 7h (être au PC) |
| Elle ne **se** réveille **pas** bien | Elle ne **se** réveille **pas** bien (correct) |`,

      keyPoints: [
        'Se sentir / se détendre / se réveiller / s\'endormir / se lever',
        'Émotions : stressé(e) / anxieux / déprimé(e) / avoir le cafard',
        '"N\'hésitez pas à + infinitif" = feel free to',
        'Troubles du sommeil = insomnies, réveils nocturnes, fatigue matinale',
        'Consulter un psychologue = prise en charge possible par la CPAM',
      ],

      exercises: [
        {
          id: 'a2-sa-04-ex01',
          type: 'qcm',
          question: 'Comment dit-on "I feel tired" avec un verbe pronominal ?',
          options: ['Je suis fatigué(e)', 'Je me sens fatigué(e)', 'Je me fatigue', 'Je ressens fatigue'],
          correctIndex: 1,
          explanation: '"Se sentir" = to feel (état intérieur). "Je ME SENS fatigué(e)" est plus nuancé que "je suis fatigué(e)". "Se sentir" s\'utilise pour des états émotionnels et physiques : se sentir bien/mal/seul/heureux.',
        },
        {
          id: 'a2-sa-04-ex02',
          type: 'qcm',
          question: 'Leila n\'arrive pas à "se détendre". Que signifie "se détendre" ?',
          options: ['Se lever', 'Se relaxer / se reposer, éliminer la tension', 'S\'énerver', 'S\'habiller'],
          correctIndex: 1,
          explanation: '"Se détendre" = to relax / to unwind. Ne pas confondre avec "tendre" (to stretch) ou "détendre" (to make more relaxed). "Je ne me détends pas" = I can\'t relax / I can\'t unwind.',
        },
        {
          id: 'a2-sa-04-ex03',
          type: 'qcm',
          question: 'Comment dit-on "I fall asleep late" ?',
          options: ['Je dors tard', 'Je m\'endors tard', 'Je me couche tard', 'Je ferme les yeux tard'],
          correctIndex: 1,
          explanation: '"S\'endormir" = to fall asleep. "Je M\'ENDORS tard" = I fall asleep late. À distinguer de "se coucher" (aller au lit) et "dormir" (être en train de dormir). Séquence : se coucher → s\'endormir → dormir → se réveiller → se lever.',
        },
        {
          id: 'a2-sa-04-ex04',
          type: 'qcm',
          question: 'Qu\'est-ce que "l\'angoisse" ?',
          options: [
            'Une douleur physique',
            'Une émotion de peur et d\'inquiétude intense et difficile à contrôler',
            'Un problème médical physique',
            'De la tristesse légère',
          ],
          correctIndex: 1,
          explanation: '"L\'angoisse" = intense anxiety / anguish. C\'est une forme d\'anxiété plus intense que le "stress" normal. Elle peut s\'accompagner de symptômes physiques (palpitations, oppression thoracique). Les "crises d\'angoisse" ou "attaques de panique" nécessitent une aide professionnelle.',
        },
        {
          id: 'a2-sa-04-ex05',
          type: 'qcm',
          question: 'Leila "se réveille plusieurs fois la nuit." Que veut dire "plusieurs" ?',
          options: ['Deux exactement', 'Un seul', 'Plus de deux / un certain nombre indéfini', 'Beaucoup trop'],
          correctIndex: 2,
          explanation: '"Plusieurs" = more than one / a few / several. "Plusieurs fois" = several times. "Je me réveille plusieurs fois la nuit" = I wake up multiple times during the night (more than 2-3 fois).',
        },
        {
          id: 'a2-sa-04-ex06',
          type: 'qcm',
          question: 'Que signifie "avoir le cafard" ?',
          options: [
            'Avoir des insectes chez soi',
            'Se sentir déprimé / avoir le moral bas',
            'Être en colère',
            'Avoir peur d\'un animal',
          ],
          correctIndex: 1,
          explanation: '"Avoir le cafard" (familier) = to feel blue / to feel down / to be depressed. Le cafard est un insecte (cockroach) mais l\'expression signifie "avoir le moral à zéro". À réserver au registre familier.',
        },
        {
          id: 'a2-sa-04-ex07',
          type: 'qcm',
          question: 'Le médecin dit "n\'hésitez pas à consulter". Que signifie cette formule ?',
          options: [
            'Il faut absolument consulter',
            'Vous devez hésiter avant de consulter',
            'Consultez librement, sans crainte ni gêne',
            'C\'est interdit de consulter seul',
          ],
          correctIndex: 2,
          explanation: '"N\'hésitez pas à + infinitif" = please feel free to / don\'t hesitate to. C\'est une invitation bienveillante qui encourage à agir sans hésiter. "N\'hésitez pas à nous contacter" = feel free to contact us.',
        },
        {
          id: 'a2-sa-04-ex08',
          type: 'qcm',
          question: 'Quel verbe pronominal signifie "to get up (out of bed)" ?',
          options: ['Se lever', 'Se déplacer', 'Se réveiller', 'S\'habiller'],
          correctIndex: 0,
          explanation: '"Se lever" = to get up. La séquence : se réveiller (wake up) → se lever (get up / get out of bed) → s\'habiller (get dressed). "Je me lève à 7h" = I get up at 7am.',
        },
        {
          id: 'a2-sa-04-ex09',
          type: 'qcm',
          question: 'Pourquoi le médecin recommande-t-il de marcher 20 minutes par jour ?',
          options: [
            'Pour perdre du poids',
            'L\'exercice physique aide à réduire le stress et améliorer le sommeil',
            'Pour explorer la ville',
            'Pour rencontrer des gens',
          ],
          correctIndex: 1,
          explanation: 'L\'exercice physique (même modéré comme la marche) libère des endorphines qui améliorent l\'humeur et réduisent le stress. Il régule aussi le rythme circadien et améliore la qualité du sommeil.',
        },
        {
          id: 'a2-sa-04-ex10',
          type: 'qcm',
          question: 'Leila voit ses collègues "en dehors du travail" ?',
          options: ['Oui, souvent', 'Oui, parfois', 'Non, seulement au travail', 'Elle n\'a pas de collègues'],
          correctIndex: 2,
          explanation: 'Leila dit "mes collègues sont sympas mais je ne les vois pas en dehors du travail." "En dehors de" = outside of / beyond. Elle n\'a donc pas de vie sociale avec ses collègues en-dehors du contexte professionnel.',
        },
        {
          id: 'a2-sa-04-ex11',
          type: 'qcm',
          question: 'Comment conjugue-t-on "se sentir" à la 1ère personne du singulier ?',
          options: ['Je sens', 'Je me sens', 'Je se sens', 'Je me sentir'],
          correctIndex: 1,
          explanation: '"Se sentir" est un verbe pronominal : je ME SENS / tu TE SENS / il SE SENT / nous NOUS SENTONS / vous VOUS SENTEZ / ils SE SENTENT. Le pronom réfléchi change selon la personne.',
        },
        {
          id: 'a2-sa-04-ex12',
          type: 'qcm',
          question: 'Le médecin dit que consulter un psychologue "n\'est pas une faiblesse". Pourquoi dit-il ça ?',
          options: [
            'Pour rassurer les patients qui pourraient avoir honte de consulter',
            'Pour faire la publicité des psychologues',
            'Parce que c\'est obligatoire',
            'Parce que Leila a demandé si c\'était une faiblesse',
          ],
          correctIndex: 0,
          explanation: 'En France (et dans beaucoup de pays), il existe un stigmate social autour de la santé mentale. Le médecin anticipe la gêne de Leila en disant "ce n\'est pas une faiblesse — c\'est prendre soin de soi" pour l\'encourager à consulter sans honte.',
        },
        {
          id: 'a2-sa-04-ex13',
          type: 'qcm',
          question: 'Que signifie "de façon persistante" dans "se sentir triste de façon persistante" ?',
          options: [
            'Très intensément',
            'De manière qui dure dans le temps, qui ne passe pas',
            'Occasionnellement',
            'Le matin seulement',
          ],
          correctIndex: 1,
          explanation: '"Persistant" = persistent = qui dure, qui ne disparaît pas. "De façon persistante" = over a prolonged period / persistently. Une tristesse passagère est normale ; une tristesse persistante (plus de 2 semaines) peut indiquer une dépression.',
        },
        {
          id: 'a2-sa-04-ex14',
          type: 'qcm',
          question: 'Comment dit-on "I feel lonely" ?',
          options: ['Je suis seul(e)', 'Je me sens seul(e)', 'J\'ai la solitude', 'Je suis solitaire'],
          correctIndex: 1,
          explanation: '"Je me sens seul(e)" = I feel lonely. "Je suis seul(e)" peut juste indiquer qu\'on est physiquement seul (sans préciser le ressenti). "Je ME SENS seul(e)" exprime le sentiment émotionnel de solitude.',
        },
        {
          id: 'a2-sa-04-ex15',
          type: 'qcm',
          question: 'Qu\'est-ce que "l\'isolement" ?',
          options: [
            'Un type d\'habitat',
            'Le fait d\'être séparé des autres, sans lien social',
            'Une maladie contagieuse',
            'Un problème professionnel',
          ],
          correctIndex: 1,
          explanation: '"L\'isolement" = isolation. Le fait d\'être séparé des autres, sans relations sociales significatives. L\'isolement social est reconnu comme un facteur de risque important pour la santé mentale et physique.',
        },
        {
          id: 'a2-sa-04-ex16',
          type: 'qcm',
          question: 'Leila dit que ses collègues sont "sympas". Que signifie "sympa" ?',
          options: [
            'Tristes',
            'Agréables, gentils, sympathiques (raccourci familier de "sympathique")',
            'Professionnels',
            'Étrangers',
          ],
          correctIndex: 1,
          explanation: '"Sympa" est le raccourci familier de "sympathique" = nice / pleasant / friendly. C\'est un adjectif très courant en français familier. "Ils sont sympas" = they\'re nice people.',
        },
        {
          id: 'a2-sa-04-ex17',
          type: 'qcm',
          question: 'Conjugaison : "Elle ___ seule depuis son divorce." (se sentir)',
          options: ['elle se sent', 'elle se sentir', 'elle sent', 'elle se sentait'],
          correctIndex: 0,
          explanation: '"Se sentir" au présent, 3ème personne du singulier : ELLE SE SENT. "Elle se sent seule depuis son divorce" = She feels lonely since her divorce. Présent + "depuis" = action en cours.',
        },
        {
          id: 'a2-sa-04-ex18',
          type: 'qcm',
          question: 'Que signifie "prendre soin de soi" ?',
          options: [
            'Être égoïste',
            'S\'occuper de son bien-être physique et mental',
            'Dépenser de l\'argent pour soi',
            'Éviter les autres',
          ],
          correctIndex: 1,
          explanation: '"Prendre soin de soi" = to take care of yourself. Cela inclut : manger sainement, dormir suffisamment, faire de l\'exercice, gérer son stress, consulter des professionnels de santé si nécessaire. C\'est une notion de bien-être global.',
        },
        {
          id: 'a2-sa-04-ex19',
          type: 'qcm',
          question: 'Quelle est la différence entre "se réveiller" et "se lever" ?',
          options: [
            'Ce sont des synonymes',
            '"Se réveiller" = sortir du sommeil mentalement / "se lever" = quitter physiquement le lit',
            '"Se lever" arrive avant "se réveiller"',
            '"Se réveiller" signifie sortir de chez soi',
          ],
          correctIndex: 1,
          explanation: 'Se réveiller = to wake up (cesser de dormir, ouvrir les yeux). Se lever = to get up (sortir du lit physiquement). On peut se réveiller et rester au lit sans se lever. "Je me réveille à 6h mais je ne me lève pas avant 7h."',
        },
        {
          id: 'a2-sa-04-ex20',
          type: 'qcm',
          question: 'En France, les consultations chez un psychologue libéral sont-elles remboursées ?',
          options: [
            'Non, jamais',
            'Oui, intégralement par la Sécurité sociale',
            'Partiellement : depuis 2022, un nombre de séances est remboursable via prescription médicale',
            'Seulement pour les mineurs',
          ],
          correctIndex: 2,
          explanation: 'Depuis 2022, le dispositif "MonPsy" permet de se faire rembourser jusqu\'à 8 séances/an chez un psychologue conventionné, sur prescription du médecin généraliste. C\'est un progrès dans l\'accès aux soins de santé mentale.',
        },
      ],
    },

    {
      id: 'a2-sa-05',
      slug: 'a2-medecin-traitant',
      moduleSlug: 'a2-sante',
      level: 'A2',
      title: 'Le médecin traitant et le parcours de soins',
      description: 'Choisissez votre médecin traitant, comprenez le parcours de soins coordonnés et accédez aux spécialistes.',
      duration: 12,
      free: false,
      dialogue: `## Texte : Le parcours de soins en France

En France, le système de santé est organisé en parcours de soins coordonnés. Pour bénéficier d'un meilleur remboursement, il est recommandé de déclarer un médecin traitant à la CPAM.

**Le médecin traitant** est votre médecin de référence. Il vous connaît, suit votre santé dans le temps et coordonne vos soins. Vous le choisissez librement (généraliste ou spécialiste dans certains cas) et vous le déclarez sur le site ameli.fr.

**Pourquoi déclarer un médecin traitant ?** Si vous consultez un médecin sans passer par votre médecin traitant (hors urgence), vous êtes remboursé(e) moins bien — seulement 30% au lieu de 70% par la Sécurité sociale.

**Consulter un spécialiste** (cardiologue, dermatologue, ophtalmologue...) nécessite en général une lettre de recommandation de votre médecin traitant. Sans cette lettre, le remboursement est réduit. Exceptions : urgences, gynécologue, ophtalmologue, psychiatre (accès direct autorisé).

**Les urgences** : Le service des urgences hospitalières est réservé aux situations vraiment urgentes. Pour les bobos du week-end ou les soins non urgents, il existe des maisons de santé, des centres médicaux ou SOS Médecins (numéro 36 24).

**Le dossier médical partagé (DMP)** : C'est un espace numérique où sont stockés tous vos documents de santé (résultats d'analyses, ordonnances, comptes-rendus...). Tous vos médecins peuvent y accéder avec votre accord.

---

### Dialogue : Déclarer son médecin traitant

*Youssef appelle sa CPAM pour déclarer son médecin traitant.*

**Agent CPAM :** Bonjour, Assurance Maladie, je vous écoute.

**Youssef :** Bonjour. Je veux déclarer un médecin traitant. Comment je fais ?

**Agent :** Vous pouvez le faire en ligne sur ameli.fr, dans votre espace personnel. Ou vous pouvez déposer le formulaire cerfa signé par votre médecin directement à votre CPAM. Vous avez déjà un compte ameli ?

**Youssef :** Non, pas encore.

**Agent :** Alors commencez par créer un compte sur ameli.fr avec votre numéro de Sécurité sociale. Ensuite, dans "Mon médecin traitant", vous entrez le nom du médecin et il reçoit une notification. Il doit confirmer de son côté.

**Youssef :** Et si le médecin n'a plus de place ?

**Agent :** Malheureusement, certains médecins n'acceptent plus de nouveaux patients. Dans ce cas, essayez d'autres généralistes dans votre quartier. Si vous n'en trouvez vraiment aucun, contactez-nous et nous pouvons vous en désigner un d'office.

---

### Vocabulaire clé — Le parcours de soins

| Terme | Définition |
|---|---|
| Le médecin traitant | Médecin de référence déclaré à la CPAM |
| La CPAM | Caisse Primaire d'Assurance Maladie — gère vos remboursements |
| Ameli.fr | Site en ligne pour gérer votre Sécurité sociale |
| Le DMP | Dossier Médical Partagé — carnet de santé numérique |
| Un spécialiste | Médecin spécialisé (cardiologue, dermatologue...) |
| La lettre de recommandation | Document du médecin traitant pour consulter un spécialiste |
| Hors parcours | Consultation sans passer par le médecin traitant |
| SOS Médecins | Service de médecin à domicile (nuit, week-end) |`,

      linguisticPoint: `## Point linguistique : La voix passive et les tournures impersonnelles

### La voix passive — formation
**Actif → Passif :** Sujet + verbe + objet → Objet + **être** (conjugué) + participe passé accordé + **par** + sujet

| Temps | Actif | Passif |
|---|---|---|
| Présent | La CPAM rembourse les soins | Les soins **sont remboursés** par la CPAM |
| Passé composé | Le médecin a prescrit ce médicament | Ce médicament **a été prescrit** par le médecin |
| Imparfait | Le système incluait tous les patients | Tous les patients **étaient inclus** par le système |
| Futur | L\'hôpital traitera les cas urgents | Les cas urgents **seront traités** par l\'hôpital |

**Attention** : le participe passé s'accorde avec le **sujet du passif**
- Les soins **sont remboursé**s (pluriel masculin)
- La consultation **est remboursée** (singulier féminin)

### Tournures impersonnelles fréquentes
| Structure | Exemple médical |
|---|---|
| **Il est recommandé de** | Il **est recommandé de** déclarer un médecin traitant |
| **Il est nécessaire de** | Il **est nécessaire d\'**avoir une ordonnance |
| **Il est interdit de** | Il **est interdit de** fumer à l\'hôpital |
| **Il est possible de** | Il **est possible de** changer de médecin |
| **Il convient de** | Il **convient de** consulter rapidement |
| **Il faut** | Il **faut** présenter sa carte Vitale |

### Spécialistes et accès direct (sans lettre du médecin traitant)
| Spécialiste | Accès direct autorisé ? |
|---|---|
| Cardiologue | Non — lettre obligatoire |
| Dermatologue | Non — lettre obligatoire |
| Ophtalmologue | Oui |
| Gynécologue | Oui |
| Psychiatre / psychologue | Oui |
| Pédiatre (enfant < 16 ans) | Oui |
| Urgences hospitalières | Oui (toujours) |

### Erreurs fréquentes — voix passive
| ❌ Erreur | ✅ Correction |
|---|---|
| Les soins **est remboursé** par la CPAM | Les soins **sont remboursés** (pluriel) |
| Elle **est examiné** par le médecin | Elle **est examinée** (accord féminin) |
| Il est recommandé **à** consulter | Il est recommandé **de** consulter (de + inf.) |`,

      keyPoints: [
        'Voix passive : objet + être + participe passé + par + agent',
        'Tournures impersonnelles : il est recommandé/nécessaire/possible/interdit de',
        'Médecin traitant à déclarer sur ameli.fr (70% remboursement vs 30% hors parcours)',
        'Spécialiste : besoin d\'une lettre du médecin traitant (sauf exceptions)',
        'DMP = espace numérique centralisant vos documents de santé',
      ],

      exercises: [
        {
          id: 'a2-sa-05-ex01',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un "médecin traitant" ?',
          options: [
            'Un médecin qui traite une maladie spécifique',
            'Votre médecin de référence déclaré à la CPAM, qui coordonne vos soins',
            'Un médecin hospitalier',
            'Un médecin de nuit',
          ],
          correctIndex: 1,
          explanation: 'Le médecin traitant est votre médecin de référence (généralement un généraliste). Il coordonne votre parcours de soins, fait le lien avec les spécialistes, et vous suit dans le temps. Vous le déclarez à la CPAM sur ameli.fr.',
        },
        {
          id: 'a2-sa-05-ex02',
          type: 'qcm',
          question: 'Transformez à la voix passive : "La CPAM rembourse les soins."',
          options: [
            'Les soins est remboursé par la CPAM',
            'Les soins sont remboursés par la CPAM',
            'Les soins remboursent la CPAM',
            'La CPAM est remboursée par les soins',
          ],
          correctIndex: 1,
          explanation: '"La CPAM rembourse les soins" → "Les soins SONT REMBOURSÉS PAR la CPAM." Voix passive : sujet passif (les soins) + ÊTRE conjugué (sont) + participe passé accordé (remboursés) + PAR + agent (la CPAM).',
        },
        {
          id: 'a2-sa-05-ex03',
          type: 'qcm',
          question: 'Quel pourcentage est remboursé si on consulte "hors parcours" (sans passer par le médecin traitant) ?',
          options: ['70%', '60%', '30%', '0%'],
          correctIndex: 2,
          explanation: 'Le texte précise : "seulement 30% au lieu de 70% par la Sécurité sociale" si on consulte sans passer par le médecin traitant. Le parcours de soins coordonnés est donc financièrement avantageux.',
        },
        {
          id: 'a2-sa-05-ex04',
          type: 'qcm',
          question: 'Où déclare-t-on son médecin traitant ?',
          options: ['À la mairie', 'Sur ameli.fr (site de la CPAM)', 'À la pharmacie', 'Directement chez le médecin'],
          correctIndex: 1,
          explanation: 'Le médecin traitant se déclare sur ameli.fr (l\'espace personnel de l\'Assurance maladie). Le médecin et le patient signent tous les deux un formulaire de déclaration, et la CPAM enregistre le choix.',
        },
        {
          id: 'a2-sa-05-ex05',
          type: 'qcm',
          question: 'Transformez à la voix passive : "Le médecin a prescrit ce médicament."',
          options: [
            'Ce médicament est prescrit par le médecin',
            'Ce médicament a été prescrit par le médecin',
            'Ce médicament prescrit le médecin',
            'Par le médecin ce médicament est prescrit',
          ],
          correctIndex: 1,
          explanation: 'Passif au passé composé : "a prescrit" → "a été prescrit". Le sujet devient "ce médicament", l\'auxiliaire "être" se conjugue (a été), le participe passé (prescrit) s\'accorde, et l\'agent reste "par le médecin".',
        },
        {
          id: 'a2-sa-05-ex06',
          type: 'qcm',
          question: 'Quel spécialiste peut-on consulter SANS lettre du médecin traitant ?',
          options: [
            'Le cardiologue',
            'Le pneumologue',
            'Le gynécologue (accès direct autorisé)',
            'Le gastrologue',
          ],
          correctIndex: 2,
          explanation: 'Exceptions à la règle du médecin traitant (accès direct possible) : gynécologue, ophtalmologue, psychiatre (et pédiatre pour les mineurs). Pour tous les autres spécialistes, une lettre du médecin traitant est recommandée.',
        },
        {
          id: 'a2-sa-05-ex07',
          type: 'qcm',
          question: 'Complétez avec la tournure impersonnelle correcte : "___ déclarer un médecin traitant."',
          options: [
            'Il faut que vous vous',
            'Il est recommandé de',
            'On doit absolument',
            'C\'est obligatoire de',
          ],
          correctIndex: 1,
          explanation: '"Il est recommandé de + infinitif" = it is recommended to. C\'est une tournure impersonnelle formelle qui donne un conseil fort sans l\'imposer. "Il est recommandé de déclarer un médecin traitant" = it\'s strongly advised to declare a GP.',
        },
        {
          id: 'a2-sa-05-ex08',
          type: 'qcm',
          question: 'Qu\'est-ce que le DMP (Dossier Médical Partagé) ?',
          options: [
            'Un formulaire à remplir à la pharmacie',
            'Un espace numérique centralisant tous vos documents de santé',
            'Un carnet de vaccinations',
            'Un document de la Sécurité sociale',
          ],
          correctIndex: 1,
          explanation: 'Le DMP est un espace numérique sécurisé (sur ameli.fr) qui stocke vos données de santé : résultats d\'analyses, ordonnances, comptes-rendus d\'hospitalisation. Vos médecins peuvent y accéder avec votre accord.',
        },
        {
          id: 'a2-sa-05-ex09',
          type: 'qcm',
          question: 'Pour quelle situation appelle-t-on SOS Médecins (3624) ?',
          options: [
            'Les urgences vitales',
            'Les soins non urgents le week-end ou en dehors des heures de bureau',
            'Pour annuler un rendez-vous',
            'Pour obtenir des antibiotiques',
          ],
          correctIndex: 1,
          explanation: 'SOS Médecins (3624) = visites à domicile ou consultations en urgence MAIS pas vitales (bobos, fièvre, malaise passager...) le soir, la nuit ou le week-end quand les cabinets médicaux sont fermés. Pour les urgences vitales → le 15.',
        },
        {
          id: 'a2-sa-05-ex10',
          type: 'qcm',
          question: '"Les urgences hospitalières sont réservées aux situations vraiment urgentes." Transformez à la voix active.',
          options: [
            'On réserve les urgences aux situations vraiment urgentes',
            'Les urgences réservent les situations vraiment urgentes',
            'Les situations urgentes sont réservées par les urgences',
            'On urgente les situations réservées',
          ],
          correctIndex: 0,
          explanation: 'Pour transformer le passif en actif avec un agent indéfini, on utilise "on". "Les urgences SONT RÉSERVÉES" (passif) → "ON RÉSERVE les urgences" (actif avec "on" impersonnel).',
        },
        {
          id: 'a2-sa-05-ex11',
          type: 'qcm',
          question: 'Peut-on changer de médecin traitant ?',
          options: [
            'Non, une fois déclaré on ne peut pas changer',
            'Oui, on peut changer à tout moment en refaisant la déclaration',
            'Oui, mais seulement une fois par an',
            'Non, sauf déménagement',
          ],
          correctIndex: 1,
          explanation: 'Le texte dit "Il est possible de changer de médecin." On peut changer de médecin traitant à tout moment en déclarant un nouveau médecin sur ameli.fr. La démarche est simple et sans frais.',
        },
        {
          id: 'a2-sa-05-ex12',
          type: 'qcm',
          question: 'Tournure impersonnelle : "Il est nécessaire ___ avoir une ordonnance pour les antibiotiques."',
          options: ['d\'', 'que', 'à', 'pour'],
          correctIndex: 0,
          explanation: '"Il est nécessaire DE + infinitif." Devant une voyelle (avoir), "de" devient "d\'" : "Il est nécessaire D\'avoir une ordonnance." La préposition "de" relie la tournure impersonnelle à l\'infinitif.',
        },
        {
          id: 'a2-sa-05-ex13',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une "lettre de recommandation" dans le parcours de soins ?',
          options: [
            'Une lettre de motivation pour un emploi',
            'Un document du médecin traitant orientant le patient vers un spécialiste',
            'Une ordonnance médicale',
            'Un certificat médical',
          ],
          correctIndex: 1,
          explanation: 'Dans le contexte médical, la "lettre de recommandation" (ou lettre de correspondance) est rédigée par le médecin traitant pour orienter le patient vers un spécialiste. Elle résume les informations médicales essentielles pour le spécialiste.',
        },
        {
          id: 'a2-sa-05-ex14',
          type: 'qcm',
          question: 'Tous les médecins peuvent-ils accéder au DMP d\'un patient ?',
          options: [
            'Oui, tous les médecins automatiquement',
            'Non, seulement avec l\'accord du patient',
            'Non, seulement le médecin traitant',
            'Oui, mais seulement les spécialistes',
          ],
          correctIndex: 1,
          explanation: 'Le texte précise : "Tous vos médecins peuvent y accéder avec VOTRE ACCORD." Le DMP ne peut être consulté qu\'avec l\'autorisation du patient. La confidentialité médicale est respectée.',
        },
        {
          id: 'a2-sa-05-ex15',
          type: 'qcm',
          question: 'Transformez à la voix passive : "Le cardiologue examine le patient."',
          options: [
            'Le patient est examiné par le cardiologue',
            'Le patient est examine par le cardiologue',
            'Le patient examina le cardiologue',
            'Par le cardiologue, le patient est examiné',
          ],
          correctIndex: 0,
          explanation: '"Le cardiologue examine le patient" (actif) → "Le patient EST EXAMINÉ PAR le cardiologue" (passif). L\'objet direct (patient) devient sujet, "être" se conjugue au présent, le participe s\'accorde (examiné = masc. sing.), et l\'ancien sujet suit "par".',
        },
        {
          id: 'a2-sa-05-ex16',
          type: 'qcm',
          question: 'Que signifie "coordonner les soins" ?',
          options: [
            'Payer les soins',
            'Organiser et assurer le suivi de l\'ensemble des soins d\'un patient',
            'Prescrire des médicaments',
            'Rembourser les soins',
          ],
          correctIndex: 1,
          explanation: '"Coordonner" = organiser, assurer la cohérence. "Coordonner les soins" = s\'assurer que les différents intervenants médicaux (généraliste, spécialistes, infirmiers...) travaillent ensemble de façon cohérente pour le patient.',
        },
        {
          id: 'a2-sa-05-ex17',
          type: 'qcm',
          question: 'Tournure impersonnelle : "___ fumer dans les locaux de santé."',
          options: [
            'Il est recommandé de ne pas',
            'Il est interdit de',
            'Il est possible de ne pas',
            'Il faut peut-être ne pas',
          ],
          correctIndex: 1,
          explanation: '"Il est interdit de + infinitif" = it is forbidden to / it is prohibited to. "Il est interdit de fumer" = smoking is forbidden. Pour une simple recommandation, on utilise "il est recommandé de" ; pour une obligation légale, "il est interdit de" ou "il est obligatoire de".',
        },
        {
          id: 'a2-sa-05-ex18',
          type: 'qcm',
          question: 'Peut-on consulter un psychiatre directement sans passer par le médecin traitant ?',
          options: [
            'Non, toujours besoin d\'une lettre',
            'Oui, le psychiatre fait partie des exceptions d\'accès direct',
            'Seulement en cas d\'urgence psychiatrique',
            'Seulement pour les enfants',
          ],
          correctIndex: 1,
          explanation: 'Le texte liste les exceptions d\'accès direct (sans lettre du médecin traitant) : gynécologue, ophtalmologue, psychiatre. Ces spécialistes peuvent être consultés directement tout en maintenant un bon remboursement.',
        },
        {
          id: 'a2-sa-05-ex19',
          type: 'qcm',
          question: 'Que signifie "DMP" et à quoi sert-il ?',
          options: [
            'Déclaration Médicale Professionnelle — pour les médecins',
            'Dossier Médical Partagé — espace numérique pour centraliser les données de santé',
            'Dépenses Médicales Partielles — calcul des remboursements',
            'Direction Médicale Publique — administration de santé',
          ],
          correctIndex: 1,
          explanation: 'DMP = Dossier Médical Partagé. Espace numérique sécurisé sur ameli.fr où sont stockés les documents de santé (analyses, ordonnances, comptes-rendus). Facilite le suivi et la communication entre professionnels de santé.',
        },
        {
          id: 'a2-sa-05-ex20',
          type: 'qcm',
          question: 'Pourquoi est-il avantageux de respecter le parcours de soins coordonnés ?',
          options: [
            'Pour avoir de meilleurs soins',
            'Pour être remboursé à 70% au lieu de 30% par la Sécurité sociale',
            'Pour avoir accès à plus de médicaments',
            'Pour éviter les temps d\'attente',
          ],
          correctIndex: 1,
          explanation: 'Le principal avantage du parcours de soins = meilleur remboursement : 70% en passant par le médecin traitant vs 30% hors parcours. Le parcours de soins incite aussi à une meilleure coordination des soins.',
        },
      ],
    },
  ],
};
