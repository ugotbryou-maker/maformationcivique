import type { LangModule } from '../types';

export const b1TravailDroits: LangModule = {
  id: 'b1-mod-07',
  slug: 'b1-travail-droits',
  level: 'B1',
  title: 'Le monde du travail et ses droits',
  subtitle: 'Droit du travail, syndicats et négociation',
  description: 'Comprenez le droit du travail français, le rôle des syndicats et sachez défendre vos droits dans la vie professionnelle.',
  type: 'thematique',
  emoji: '💼',
  free: false,
  lessons: [
    {
      id: 'b1-trd-01',
      slug: 'b1-contrat-travail-avance',
      moduleSlug: 'b1-travail-droits',
      level: 'B1',
      title: 'Les types de contrats de travail',
      description: 'CDI, CDD, intérim, période d\'essai : comprendre les différents contrats et leurs implications.',
      duration: 35,
      free: false,
      dialogue: `## Texte : Les contrats de travail en France

Le droit du travail français encadre strictement les relations entre employeurs et salariés à travers différents types de contrats.

**Le CDI (Contrat à Durée Indéterminée)** est la norme en France — le contrat de référence sans date de fin prévue. Il offre la meilleure protection : licenciement encadré, indemnités, accès facilité au crédit et au logement.

**Le CDD (Contrat à Durée Déterminée)** est limité dans le temps et ne peut être utilisé que pour des motifs précis : remplacement d'un salarié absent, surcroît temporaire d'activité, emploi saisonnier. Sa durée maximale est généralement de 18 mois (renouvellements inclus).

**L'intérim** fait intervenir une troisième partie : l'agence d'intérim, qui emploie le salarié et le "met à disposition" d'une entreprise utilisatrice. Le salarié perçoit une "indemnité de fin de mission" (10% du salaire brut total).

**La période d'essai** permet à l'employeur et au salarié de "tester" la collaboration avant de s'engager définitivement. Sa durée varie selon le poste : 2 mois pour les employés, 3 mois pour les cadres, renouvelable une fois. Pendant cette période, chacun peut rompre le contrat avec un préavis réduit.

**L'apprentissage** combine formation théorique et travail en entreprise, rémunéré selon un pourcentage du SMIC variant avec l'âge et l'année de formation.`,

      linguisticPoint: `## Point linguistique : Les comparatifs et superlatifs

### Comparatifs
| Type | Structure | Exemple |
|---|---|---|
| Supériorité | plus + adj/adv + que | Le CDI est **plus** protecteur **que** le CDD |
| Égalité | aussi + adj/adv + que | L'intérim est **aussi** flexible **que** le CDD |
| Inférioriré | moins + adj/adv + que | Le CDD est **moins** stable **que** le CDI |

### Comparatifs irréguliers
- bon → **meilleur** (que) : "Le CDI offre de **meilleures** garanties."
- bien → **mieux** (que) : "Il est payé **mieux** en intérim."
- mauvais → **pire** (que) : "C'est **pire** sans contrat du tout."

### Superlatifs
- le/la/les plus + adjectif : "Le CDI est **le plus** avantageux."
- le/la/les moins + adjectif : "L'intérim est **le moins** stable."
- le meilleur / le mieux / le pire (irréguliers)

### Comparaison avec quantité
- "Il y a **plus de** CDD **que de** CDI dans ce secteur." (plus de + nom)
- "Autant de... que de..." (égalité de quantité)`,

      keyPoints: [
        'CDI = norme, sans date de fin, meilleure protection sociale et juridique',
        'CDD = limité, motif précis obligatoire, durée max ~18 mois',
        'Intérim = 3 parties (agence/salarié/entreprise), indemnité fin de mission 10%',
        'Période d\'essai : 2 mois (employés) / 3 mois (cadres), renouvelable 1 fois',
        'Comparatifs : plus/aussi/moins + adj + que / meilleur(e)(s) / mieux / pire',
      ],

      exercises: [
        {
          id: 'b1-trd-01-ex01',
          type: 'qcm',
          question: 'Comparatif : "Le CDI est ___ protecteur ___ le CDD."',
          options: ['aussi / que', 'plus / que', 'moins / de', 'plus / de'],
          correctIndex: 1,
          explanation: '"Le CDI est PLUS protecteur QUE le CDD." Comparatif de supériorité : "plus + adjectif + que". Le CDI offre effectivement une meilleure protection juridique (licenciement encadré) que le CDD.',
        },
        {
          id: 'b1-trd-01-ex02',
          type: 'qcm',
          question: 'Quelle est la durée maximale d\'un CDD (renouvellements inclus) ?',
          options: ['6 mois', '12 mois', '18 mois', '24 mois'],
          correctIndex: 2,
          explanation: 'La durée maximale d\'un CDD est généralement de 18 mois, renouvellements inclus (sauf cas particuliers comme le CDD senior ou certains contrats spécifiques pouvant aller jusqu\'à 36 mois). Au-delà, le contrat doit être requalifié en CDI.',
        },
        {
          id: 'b1-trd-01-ex03',
          type: 'qcm',
          question: 'Comparatif irrégulier : "Le salaire en intérim est parfois ___ qu\'en CDI." (bien)',
          options: ['plus bien', 'mieux', 'meilleur', 'bon'],
          correctIndex: 1,
          explanation: '"Le salaire est parfois MIEUX qu\'en CDI." "Bien" (adverbe) → comparatif "MIEUX" (irrégulier). ⚠️ Si on parle du salaire comme nom : "Le salaire est MEILLEUR" (adjectif, irrégulier de "bon"). Ici "bien" modifie un verbe implicite (être payé bien) → "mieux".',
        },
        {
          id: 'b1-trd-01-ex04',
          type: 'qcm',
          question: 'Combien de parties sont impliquées dans un contrat d\'intérim ?',
          options: ['1 (le salarié seul)', '2 (salarié et entreprise)', '3 (salarié, agence d\'intérim, entreprise utilisatrice)', '4 (incluant Pôle Emploi)'],
          correctIndex: 2,
          explanation: 'L\'intérim implique 3 parties : (1) le salarié intérimaire, (2) l\'agence d\'intérim (employeur légal qui paie le salaire), (3) l\'entreprise utilisatrice (où le salarié travaille réellement). Cette relation triangulaire est spécifique à l\'intérim.',
        },
        {
          id: 'b1-trd-01-ex05',
          type: 'qcm',
          question: 'Superlatif : "Le CDI est ___ avantageux des contrats pour la stabilité."',
          options: ['plus', 'le plus', 'aussi', 'moins'],
          correctIndex: 1,
          explanation: '"Le CDI est LE PLUS avantageux des contrats." Superlatif de supériorité : "le/la/les plus + adjectif". On compare le CDI à TOUS les autres contrats (pas seulement à un seul) → superlatif, pas comparatif simple.',
        },
        {
          id: 'b1-trd-01-ex06',
          type: 'qcm',
          question: 'Quelle est la durée standard de la période d\'essai pour un cadre ?',
          options: ['1 mois', '2 mois', '3 mois', '6 mois'],
          correctIndex: 2,
          explanation: 'Période d\'essai : 2 mois pour les employés/ouvriers, 3 mois pour les cadres (renouvelable une fois dans les deux cas, donc max 4 ou 6 mois). Cette durée plus longue pour les cadres reflète la complexité plus grande d\'évaluer leur performance.',
        },
        {
          id: 'b1-trd-01-ex07',
          type: 'qcm',
          question: 'Comparatif de quantité : "Il y a ___ CDD ___ CDI dans la restauration."',
          options: ['plus de / que de', 'plus / que', 'aussi / que', 'plus de / de'],
          correctIndex: 0,
          explanation: '"Il y a PLUS DE CDD QUE DE CDI." Comparatif de quantité avec noms : "plus DE + nom QUE DE + nom". Pas "plus de CDD que CDI" (incorrect) — il faut répéter "de" devant le second nom.',
        },
        {
          id: 'b1-trd-01-ex08',
          type: 'qcm',
          question: 'L\'"indemnité de fin de mission" en intérim correspond à :',
          options: ['5% du salaire brut total', '10% du salaire brut total', '15% du salaire net', '20% du salaire brut'],
          correctIndex: 1,
          explanation: 'L\'indemnité de fin de mission (IFM, aussi appelée "prime de précarité") = 10% du salaire brut total perçu pendant la mission. Elle compense l\'instabilité du statut intérimaire. S\'ajoute aux congés payés (10% également).',
        },
        {
          id: 'b1-trd-01-ex09',
          type: 'qcm',
          question: 'Comparatif d\'égalité : "Le CDD est ___ encadré ___ le CDI sur le plan légal."',
          options: ['plus / que', 'aussi / que', 'moins / de', 'tant / que'],
          correctIndex: 1,
          explanation: '"Le CDD est AUSSI encadré QUE le CDI." Comparatif d\'égalité : "aussi + adjectif + que". Les deux contrats sont fortement réglementés par le droit du travail français, même si différemment.',
        },
        {
          id: 'b1-trd-01-ex10',
          type: 'qcm',
          question: 'Quels sont les motifs légaux autorisant un CDD ?',
          options: [
            'L\'employeur peut choisir librement entre CDD et CDI',
            'Remplacement d\'un salarié absent, surcroît d\'activité, emploi saisonnier',
            'Uniquement pour les postes non qualifiés',
            'Seulement pour les contrats de moins de 3 mois',
          ],
          correctIndex: 1,
          explanation: 'Le CDD doit OBLIGATOIREMENT avoir un motif légal précis : remplacement (maladie, congé maternité...), surcroît temporaire d\'activité (commande exceptionnelle), emploi saisonnier (vendanges, tourisme...). Un CDD sans motif légal peut être requalifié en CDI par un juge.',
        },
        {
          id: 'b1-trd-01-ex11',
          type: 'qcm',
          question: 'Superlatif irrégulier : "C\'est ___ solution en cas de licenciement abusif : aller au tribunal." (mauvais → superlatif)',
          options: ['la plus mauvaise', 'la pire', 'la moins bonne', 'Les trois sont acceptables, "la pire" plus naturel'],
          correctIndex: 3,
          explanation: '"C\'est LA PIRE solution" (le plus naturel et idiomatique) mais "la plus mauvaise" et "la moins bonne" restent grammaticalement corrects. "Pire" = superlatif irrégulier de "mauvais", plus expressif et couramment utilisé.',
        },
        {
          id: 'b1-trd-01-ex12',
          type: 'qcm',
          question: 'Pendant la période d\'essai, peut-on rompre le contrat facilement ?',
          options: [
            'Non, c\'est impossible avant la fin de la période',
            'Oui, chacun (employeur ou salarié) peut rompre avec un préavis réduit',
            'Seul l\'employeur peut rompre le contrat',
            'Seul le salarié peut rompre le contrat',
          ],
          correctIndex: 1,
          explanation: 'Pendant la période d\'essai, EMPLOYEUR et SALARIÉ peuvent rompre le contrat librement, avec un préavis réduit (variant de 24h à 1 mois selon l\'ancienneté dans la période). C\'est plus simple qu\'un licenciement classique (pas besoin de motif).',
        },
        {
          id: 'b1-trd-01-ex13',
          type: 'qcm',
          question: 'Comparatif : "Les apprentis sont ___ payés ___ les salariés classiques." (moins)',
          options: ['moins / que', 'aussi / que', 'plus / de', 'le moins / que'],
          correctIndex: 0,
          explanation: '"Les apprentis sont MOINS payés QUE les salariés classiques." Comparatif d\'inférioriré : "moins + adjectif (ici participe passé adjectival) + que". La rémunération de l\'apprenti est un % du SMIC, inférieur au salaire complet.',
        },
        {
          id: 'b1-trd-01-ex14',
          type: 'qcm',
          question: 'L\'apprentissage combine :',
          options: [
            'Uniquement de la théorie en centre de formation',
            'Formation théorique (CFA) et travail pratique en entreprise',
            'Uniquement un stage non rémunéré',
            'Des études universitaires à distance',
          ],
          correctIndex: 1,
          explanation: 'L\'apprentissage = alternance entre formation théorique au CFA (Centre de Formation des Apprentis) et travail pratique en entreprise. L\'apprenti a un statut de salarié (rémunéré, protection sociale) tout en complétant un diplôme.',
        },
        {
          id: 'b1-trd-01-ex15',
          type: 'qcm',
          question: 'Comparatif : "Plus on a d\'expérience, ___ on a de chances d\'obtenir un CDI." (structure corrélative)',
          options: ['plus', 'mieux', 'le plus', 'autant'],
          correctIndex: 0,
          explanation: '"PLUS on a d\'expérience, PLUS on a de chances..." Structure corrélative "plus... plus..." = the more... the more... Exprime une corrélation proportionnelle. Autre exemple : "Moins on cherche, moins on trouve."',
        },
        {
          id: 'b1-trd-01-ex16',
          type: 'qcm',
          question: 'Que se passe-t-il si un CDD est utilisé sans motif légal valable ?',
          options: [
            'Rien, c\'est tout à fait légal',
            'Le contrat peut être requalifié en CDI par un juge',
            'Le salarié doit rembourser son salaire',
            'L\'entreprise est automatiquement fermée',
          ],
          correctIndex: 1,
          explanation: 'Un CDD abusif (sans motif légal réel, ou utilisé pour pourvoir un poste permanent) peut être REQUALIFIÉ EN CDI par le Conseil de Prud\'hommes. Le salarié obtient alors les droits d\'un CDI (avec effet rétroactif) et des indemnités pour le préjudice subi.',
        },
        {
          id: 'b1-trd-01-ex17',
          type: 'qcm',
          question: 'Comparatif "meilleur" : "Ce poste en CDI offre de ___ conditions que le précédent CDD."',
          options: ['plus bonnes', 'meilleures', 'mieux', 'plus de bonnes'],
          correctIndex: 1,
          explanation: '"De MEILLEURES conditions." "Bon" (adjectif) → comparatif irrégulier "MEILLEUR/MEILLEURE/MEILLEURS/MEILLEURES" (jamais "plus bon"). "Conditions" = féminin pluriel → "meilleures" (accord).',
        },
        {
          id: 'b1-trd-01-ex18',
          type: 'qcm',
          question: 'La rémunération d\'un apprenti dépend de :',
          options: [
            'Uniquement de son ancienneté dans l\'entreprise',
            'Son âge et son année de formation, en pourcentage du SMIC',
            'Du secteur d\'activité uniquement',
            'D\'une négociation libre avec l\'employeur',
          ],
          correctIndex: 1,
          explanation: 'La rémunération d\'un apprenti = % du SMIC variant selon l\'ÂGE (16-17, 18-20, 21-25, 26+) et l\'ANNÉE de formation (1ère, 2ème, 3ème année). Plus l\'apprenti est âgé et avancé dans sa formation, plus le pourcentage est élevé. Grille fixée par décret.',
        },
        {
          id: 'b1-trd-01-ex19',
          type: 'qcm',
          question: 'Superlatif : "C\'est le contrat ___ flexible pour l\'employeur." (intérim)',
          options: ['plus', 'le plus', 'aussi', 'le mieux'],
          correctIndex: 1,
          explanation: '"C\'est le contrat LE PLUS flexible pour l\'employeur." Superlatif de supériorité avec un adjectif régulier : "le/la/les plus + adjectif". "Le mieux" s\'utiliserait avec un VERBE ("c\'est ce qui fonctionne le mieux"), pas avec un nom + adjectif.',
        },
        {
          id: 'b1-trd-01-ex20',
          type: 'qcm',
          question: 'Pourquoi le CDI est-il considéré comme la "norme" en France ?',
          options: [
            'C\'est le seul contrat légal',
            'C\'est le contrat de référence privilégié par le droit du travail, offrant la plus grande stabilité',
            'C\'est obligatoire pour tous les employeurs',
            'C\'est le contrat le moins cher pour l\'employeur',
          ],
          correctIndex: 1,
          explanation: 'Le CDI est le contrat DE RÉFÉRENCE en droit français — le législateur considère qu\'il doit être la forme normale d\'emploi (les autres types, comme le CDD, sont des exceptions encadrées). Cette philosophie vise à protéger la stabilité professionnelle des salariés.',
        },
      ],
    },

    {
      id: 'b1-trd-02',
      slug: 'b1-syndicats-representation',
      moduleSlug: 'b1-travail-droits',
      level: 'B1',
      title: 'Syndicats et représentation du personnel',
      description: 'Le rôle des syndicats, des délégués du personnel et la négociation collective en France.',
      duration: 35,
      free: false,
      dialogue: `## Texte : Les syndicats et la représentation des salariés

La France a une longue tradition syndicale, bien que le taux de syndicalisation y soit l'un des plus faibles d'Europe (environ 8% des salariés).

**Les grandes confédérations syndicales :**
- **CGT** (Confédération Générale du Travail) — historiquement proche du mouvement ouvrier
- **CFDT** (Confédération Française Démocratique du Travail) — réformiste, première confédération en nombre d'adhérents
- **FO** (Force Ouvrière) — indépendante des partis politiques
- **CFTC** (Confédération Française des Travailleurs Chrétiens)
- **CFE-CGC** (Confédération Française de l'Encadrement — Confédération Générale des Cadres)

**Le rôle des syndicats :**
- Négocier les conventions collectives (accords par branche professionnelle)
- Défendre les salariés en cas de litige individuel
- Organiser des mouvements collectifs (grèves, manifestations)
- Participer aux élections professionnelles (CSE)

**Le CSE (Comité Social et Économique)** a remplacé en 2018 les anciennes instances (délégués du personnel, comité d'entreprise, CHSCT). Obligatoire dans les entreprises de 11 salariés et plus, il représente le personnel auprès de la direction sur les conditions de travail, la santé et la sécurité.

**Le droit de grève** est un droit constitutionnel en France (préambule de la Constitution de 1946). Pendant une grève, le salaire n'est pas dû pour les jours non travaillés, mais le salarié ne peut être ni sanctionné ni licencié pour ce motif.`,

      linguisticPoint: `## Point linguistique : Les pronoms indéfinis et la généralisation

### Pronoms indéfinis de personne
| Pronom | Sens | Exemple |
|---|---|---|
| **on** | quelqu\'un / les gens en général | **On** peut adhérer à un syndicat librement |
| **chacun(e)** | chaque personne individuellement | **Chacun** a le droit de se syndiquer |
| **quelqu\'un** | une personne indéterminée | **Quelqu\'un** doit représenter les salariés |
| **personne... ne** | aucune personne (négation) | **Personne ne** peut vous forcer à adhérer |
| **tout le monde** | toutes les personnes | **Tout le monde** bénéficie de la convention |
| **certains / d\'autres** | une partie / une autre partie | **Certains** adhèrent, **d\'autres** non |

### Généraliser une règle de droit
- "**Tout salarié** a le droit de..." (= chaque salarié, sans exception)
- "**Nul ne** peut être licencié pour..." (style juridique = "personne ne")
- "**Quiconque** souhaite se syndiquer peut le faire." (style soutenu = "toute personne qui")`,

      keyPoints: [
        'Taux de syndicalisation France ≈ 8% (parmi les plus faibles d\'Europe)',
        '5 grandes confédérations : CGT / CFDT / FO / CFTC / CFE-CGC',
        'CSE (depuis 2018) = remplace délégués du personnel + comité d\'entreprise + CHSCT',
        'Droit de grève = droit constitutionnel (préambule 1946) — pas de sanction possible',
        '"Nul ne / quiconque / tout salarié" = formules juridiques de généralisation',
      ],

      exercises: [
        {
          id: 'b1-trd-02-ex01',
          type: 'qcm',
          question: 'Pronom indéfini juridique : "___ ne peut être licencié pour avoir fait grève."',
          options: ['Personne', 'Nul', 'Aucun', 'Toutes ces réponses sont correctes'],
          correctIndex: 3,
          explanation: '"NUL / PERSONNE / AUCUN ne peut être licencié pour grève." Les trois fonctionnent en négation absolue. "Nul" est le plus soutenu/juridique, "personne" le plus courant. Tous expriment l\'interdiction totale.',
        },
        {
          id: 'b1-trd-02-ex02',
          type: 'qcm',
          question: 'Quel est approximativement le taux de syndicalisation en France ?',
          options: ['8%', '25%', '40%', '60%'],
          correctIndex: 0,
          explanation: 'Le taux de syndicalisation français est d\'environ 8% — l\'un des plus faibles d\'Europe (contre 67% en Islande, 20% en Allemagne). Paradoxalement, la France a une forte capacité de mobilisation syndicale malgré ce faible taux d\'adhésion individuelle.',
        },
        {
          id: 'b1-trd-02-ex03',
          type: 'qcm',
          question: 'Pronom de généralisation : "___ salarié a le droit d\'adhérer au syndicat de son choix."',
          options: ['Chaque', 'Tout', 'Certain', 'Quelque'],
          correctIndex: 1,
          explanation: '"TOUT salarié a le droit..." "Tout + nom singulier" = chaque/n\'importe quel, formule juridique de généralisation. "Tout salarié" = every employee, without exception. Très fréquent dans les textes de loi.',
        },
        {
          id: 'b1-trd-02-ex04',
          type: 'qcm',
          question: 'Quelle confédération syndicale est la première en nombre d\'adhérents en France ?',
          options: ['CGT', 'CFDT', 'FO', 'CFTC'],
          correctIndex: 1,
          explanation: 'La CFDT (Confédération Française Démocratique du Travail) est devenue la première confédération syndicale française en nombre d\'adhérents, dépassant la CGT depuis plusieurs années. Elle est positionnée comme réformiste (privilégiant le dialogue social).',
        },
        {
          id: 'b1-trd-02-ex05',
          type: 'qcm',
          question: 'Pronom indéfini : "___ adhèrent à un syndicat, ___ préfèrent rester indépendants."',
          options: [
            'Certains / d\'autres',
            'Quelqu\'un / personne',
            'Tout le monde / personne',
            'Chacun / chacun',
          ],
          correctIndex: 0,
          explanation: '"CERTAINS adhèrent... D\'AUTRES préfèrent..." "Certains... d\'autres..." = some... others... Structure pour opposer deux groupes au sein d\'un ensemble plus large.',
        },
        {
          id: 'b1-trd-02-ex06',
          type: 'qcm',
          question: 'Le CSE (Comité Social et Économique) est obligatoire à partir de combien de salariés ?',
          options: ['5 salariés', '11 salariés', '20 salariés', '50 salariés'],
          correctIndex: 1,
          explanation: 'Le CSE est obligatoire dans les entreprises de 11 SALARIÉS ET PLUS. Ses attributions s\'élargissent à partir de 50 salariés (consultations économiques plus poussées, expertise comptable...). Il a remplacé les anciennes instances séparées depuis les ordonnances de 2017 (effectives 2018).',
        },
        {
          id: 'b1-trd-02-ex07',
          type: 'qcm',
          question: 'Pronom de généralisation soutenu : "___ souhaite contester son licenciement peut saisir le Conseil de Prud\'hommes."',
          options: ['Tout le monde qui', 'Quiconque', 'N\'importe qui qui', 'Toute personne, qui'],
          correctIndex: 1,
          explanation: '"QUICONQUE souhaite contester... peut saisir..." "Quiconque" = toute personne qui (registre soutenu, juridique). Pronom indéfini qui intègre déjà le sens de "personne qui" — pas besoin d\'ajouter "qui" après.',
        },
        {
          id: 'b1-trd-02-ex08',
          type: 'qcm',
          question: 'Que se passe-t-il pour le salaire pendant une grève ?',
          options: [
            'Le salaire est maintenu intégralement',
            'Le salaire n\'est pas dû pour les jours non travaillés (retenue sur salaire)',
            'Le salaire est doublé',
            'L\'employeur doit payer une amende au salarié',
          ],
          correctIndex: 1,
          explanation: 'Pendant la grève, le salaire n\'est PAS DÛ pour les jours non travaillés — c\'est une RETENUE SUR SALAIRE proportionnelle (pas une sanction, juste l\'application du principe "pas de travail, pas de salaire"). Le salarié garde tous ses autres droits (pas de licenciement possible pour ce motif).',
        },
        {
          id: 'b1-trd-02-ex09',
          type: 'qcm',
          question: 'Pronom indéfini : "On ___ toujours adhérer librement à un syndicat en France."',
          options: ['peut', 'peuvent', 'puisse', 'pouvons'],
          correctIndex: 0,
          explanation: '"ON PEUT toujours adhérer librement." "On" = pronom indéfini de personne, toujours suivi d\'un verbe à la 3ème personne du SINGULIER. "On peut" (pas "on peuvent"). La liberté syndicale est un droit fondamental en France.',
        },
        {
          id: 'b1-trd-02-ex10',
          type: 'qcm',
          question: 'Le CSE a remplacé quelles anciennes instances ?',
          options: [
            'Uniquement les délégués syndicaux',
            'Délégués du personnel, comité d\'entreprise et CHSCT',
            'Uniquement le comité d\'entreprise',
            'Les syndicats eux-mêmes',
          ],
          correctIndex: 1,
          explanation: 'Le CSE (depuis 2018) fusionne 3 anciennes instances : les DÉLÉGUÉS DU PERSONNEL (DP), le COMITÉ D\'ENTREPRISE (CE), et le CHSCT (Comité d\'Hygiène, de Sécurité et des Conditions de Travail). Cette fusion simplifie la représentation du personnel mais a été critiquée par certains syndicats.',
        },
        {
          id: 'b1-trd-02-ex11',
          type: 'qcm',
          question: 'Pronom indéfini négatif : "___ ne peut vous forcer à participer à une grève."',
          options: ['Personne', 'Quelqu\'un', 'Tout le monde', 'Chacun'],
          correctIndex: 0,
          explanation: '"PERSONNE ne peut vous forcer..." "Personne... ne" = négation totale de personne. Le droit de grève est individuel — chaque salarié décide librement d\'y participer ou non, sans pression d\'un syndicat ou de collègues.',
        },
        {
          id: 'b1-trd-02-ex12',
          type: 'qcm',
          question: 'Une "convention collective" est :',
          options: [
            'Un contrat individuel de travail',
            'Un accord négocié entre syndicats et employeurs, applicable à toute une branche professionnelle',
            'Une loi votée par le Parlement',
            'Un règlement intérieur d\'entreprise',
          ],
          correctIndex: 1,
          explanation: 'La convention collective = accord négocié entre syndicats de salariés et organisations patronales, s\'appliquant à un secteur d\'activité (branche) entier. Elle complète le Code du travail avec des dispositions souvent plus favorables (salaires minimums, primes, classification des postes...).',
        },
        {
          id: 'b1-trd-02-ex13',
          type: 'qcm',
          question: 'Pronom indéfini : "___ a le droit de voter aux élections professionnelles du CSE."',
          options: ['Tout le monde', 'Tout salarié', 'Les deux sont corrects selon le registre', 'Aucune des réponses'],
          correctIndex: 2,
          explanation: '"TOUT LE MONDE a le droit..." (courant) ou "TOUT SALARIÉ a le droit..." (juridique/formel). Les deux sont corrects ; le registre varie. Dans un texte de loi, on préférera "tout salarié". Dans une conversation, "tout le monde" est plus naturel.',
        },
        {
          id: 'b1-trd-02-ex14',
          type: 'qcm',
          question: 'Le droit de grève en France trouve son fondement juridique dans :',
          options: [
            'Le Code du travail uniquement',
            'Le préambule de la Constitution de 1946',
            'Une simple tradition sans base légale',
            'Une directive européenne',
          ],
          correctIndex: 1,
          explanation: 'Le droit de grève est un DROIT CONSTITUTIONNEL, inscrit dans le préambule de la Constitution de 1946 (repris dans la Constitution de 1958) : "le droit de grève s\'exerce dans le cadre des lois qui le réglementent." C\'est l\'un des droits sociaux fondamentaux français.',
        },
        {
          id: 'b1-trd-02-ex15',
          type: 'qcm',
          question: 'Pronom indéfini : "___ -uns pensent que les syndicats sont indispensables, ___ -uns les jugent dépassés."',
          options: ['Quelqu\' / quelqu\'', 'Les / les', 'Certain / certain', 'On peut dire : "Les uns... les autres..."'],
          correctIndex: 3,
          explanation: '"LES UNS pensent... LES AUTRES les jugent..." Structure "les uns... les autres..." = some... others... Variante de "certains... d\'autres...". Utilisée pour opposer deux groupes d\'opinion.',
        },
        {
          id: 'b1-trd-02-ex16',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une "négociation collective" ?',
          options: [
            'Une négociation individuelle entre un salarié et son employeur',
            'Un dialogue entre représentants des salariés (syndicats) et employeurs pour fixer des règles communes',
            'Une décision unilatérale de la direction',
            'Un vote des actionnaires',
          ],
          correctIndex: 1,
          explanation: 'La négociation collective = dialogue social structuré entre syndicats (représentant les salariés) et employeurs (ou organisations patronales) pour négocier des accords (salaires, temps de travail, conditions...). Elle s\'oppose à la négociation individuelle (contrat personnel).',
        },
        {
          id: 'b1-trd-02-ex17',
          type: 'qcm',
          question: 'Pronom indéfini : "Chacun ___ le droit de se présenter aux élections du CSE."',
          options: ['a', 'ont', 'ait', 'avait'],
          correctIndex: 0,
          explanation: '"Chacun A le droit..." "Chacun" = pronom indéfini TOUJOURS au singulier (même s\'il évoque plusieurs personnes individuellement). "Chacun a" (jamais "chacun ont"). Règle stricte de l\'accord au singulier.',
        },
        {
          id: 'b1-trd-02-ex18',
          type: 'qcm',
          question: 'La CFE-CGC représente principalement :',
          options: [
            'Les ouvriers',
            'Les cadres et l\'encadrement',
            'Les fonctionnaires uniquement',
            'Les travailleurs indépendants',
          ],
          correctIndex: 1,
          explanation: 'CFE-CGC = Confédération Française de l\'Encadrement - Confédération Générale des Cadres. Comme son nom l\'indique, elle représente spécifiquement les CADRES et l\'ENCADREMENT (managers, ingénieurs, techniciens supérieurs), un public différent des syndicats généralistes.',
        },
        {
          id: 'b1-trd-02-ex19',
          type: 'qcm',
          question: 'Pronom indéfini : "Il n\'y a ___ qui puisse vous empêcher de vous syndiquer."',
          options: ['rien', 'personne', 'aucun', 'pas'],
          correctIndex: 1,
          explanation: '"Il n\'y a PERSONNE QUI puisse..." "Personne qui" + subjonctif (puisse) car négation + relative. "Il n\'y a personne qui..." = there is no one who. Structure avec subjonctif car la relative porte sur une entité niée.',
        },
        {
          id: 'b1-trd-02-ex20',
          type: 'qcm',
          question: 'Pourquoi la France a-t-elle un faible taux de syndicalisation malgré une forte tradition de mobilisation sociale ?',
          options: [
            'Les syndicats sont interdits dans certains secteurs',
            'La protection des droits via la loi et les conventions collectives s\'applique à tous, syndiqués ou non, réduisant l\'incitation individuelle à adhérer',
            'Les Français ne s\'intéressent pas à la politique',
            'Les cotisations syndicales sont trop chères pour tout le monde',
          ],
          correctIndex: 1,
          explanation: 'En France, les conventions collectives et la loi protègent TOUS les salariés d\'un secteur, qu\'ils soient syndiqués ou non — contrairement à certains pays où seuls les syndiqués bénéficient des avantages négociés. Cela réduit l\'incitation individuelle à adhérer, même si les syndicats restent influents collectivement (mobilisations, négociations nationales).',
        },
      ],
    },

    {
      id: 'b1-trd-03',
      slug: 'b1-licenciement-rupture',
      moduleSlug: 'b1-travail-droits',
      level: 'B1',
      title: 'Licenciement et rupture du contrat',
      description: 'Comprendre les motifs de licenciement, les indemnités et les recours possibles.',
      duration: 35,
      free: false,
      dialogue: `## Texte : La rupture du contrat de travail

En droit français, un CDI ne peut pas être rompu sans procédure et sans motif valable — c'est l'une des protections fondamentales du salarié.

**Les modes de rupture du CDI :**
- **Le licenciement pour motif personnel** : faute du salarié (faute simple, grave ou lourde) ou insuffisance professionnelle
- **Le licenciement pour motif économique** : difficultés économiques de l'entreprise, suppression de poste
- **La rupture conventionnelle** : accord amiable entre employeur et salarié, de plus en plus utilisée (plus de 450 000 par an en France)
- **La démission** : initiative du salarié, qui ne donne pas droit aux allocations chômage (sauf cas légitimes)
- **La prise d'acte** : le salarié rompt le contrat en reprochant des manquements graves à l'employeur

**La procédure de licenciement** doit respecter des étapes strictes : convocation à un entretien préalable, entretien (le salarié peut être assisté), notification écrite du licenciement avec motifs précis, respect d'un préavis (sauf faute grave).

**Les indemnités de licenciement** sont dues sauf en cas de faute grave ou lourde. Leur montant minimum légal est d'1/4 de mois de salaire par année d'ancienneté (pour les 10 premières années), puis 1/3 de mois par année supplémentaire.

**Le Conseil de Prud'hommes** est le tribunal compétent pour les litiges individuels entre employeur et salarié.`,

      linguisticPoint: `## Point linguistique : Les propositions conditionnelles (si)

### Les trois types de phrases avec "si"
| Type | Structure | Sens | Exemple |
|---|---|---|---|
| **Réel/probable** | Si + présent → futur/présent | Condition réalisable | Si vous **êtes** licencié, vous **pouvez** saisir les prud\'hommes |
| **Hypothétique** | Si + imparfait → conditionnel présent | Condition irréelle au présent | Si j\'**étais** licencié, je **saisirais** les prud\'hommes |
| **Irréel passé** | Si + plus-que-parfait → conditionnel passé | Condition non réalisée dans le passé | Si j\'**avais su**, j\'**aurais contesté** |

### Règle d'or
⚠️ Ne JAMAIS utiliser le futur ou le conditionnel après "si" (condition) !
- ❌ "Si vous serez licencié..."
- ✅ "Si vous **êtes** licencié..." (présent, même si futur dans le sens)

### Variantes de "si"
- **Au cas où + conditionnel** : "Au cas où vous **seriez** licencié, contactez un avocat."
- **À condition que + subjonctif** : "Vous serez indemnisé à condition que vous n\'ayez pas commis de faute grave."`,

      keyPoints: [
        '5 modes de rupture : licenciement personnel/économique, rupture conventionnelle, démission, prise d\'acte',
        'Rupture conventionnelle = accord amiable, +450 000/an en France',
        'Indemnité légale minimum = 1/4 mois salaire/an (10 premières années), puis 1/3 mois/an',
        'Si + présent → futur (réel) / Si + imparfait → conditionnel (hypothétique) / Si + PQP → cond. passé (irréel passé)',
        'Conseil de Prud\'hommes = tribunal pour litiges individuels employeur-salarié',
      ],

      exercises: [
        {
          id: 'b1-trd-03-ex01',
          type: 'qcm',
          question: 'Conditionnel réel : "Si vous ___ licencié sans motif valable, vous pouvez saisir les prud\'hommes."',
          options: ['serez', 'êtes', 'seriez', 'soyez'],
          correctIndex: 1,
          explanation: '"Si vous ÊTES licencié..." Si + PRÉSENT (jamais le futur après "si" de condition). "Si + présent → présent/futur" = condition réelle/probable. ⚠️ "Si vous serez" est une erreur fréquente à éviter.',
        },
        {
          id: 'b1-trd-03-ex02',
          type: 'qcm',
          question: 'Quel est le tribunal compétent pour un litige individuel entre salarié et employeur ?',
          options: ['Le Tribunal de Commerce', 'Le Conseil de Prud\'hommes', 'Le Tribunal Administratif', 'La Cour d\'Assises'],
          correctIndex: 1,
          explanation: 'Le CONSEIL DE PRUD\'HOMMES (CPH) juge les litiges individuels du travail (licenciement abusif, non-paiement de salaire, harcèlement...). Composé de juges non-professionnels élus paritairement (représentants salariés + employeurs). Pas de juge professionnel sauf en cas de blocage (juge départiteur).',
        },
        {
          id: 'b1-trd-03-ex03',
          type: 'qcm',
          question: 'Hypothétique : "Si j\'___ licencié, je ___ les prud\'hommes." (être / saisir, hypothèse présente)',
          options: [
            'suis / saisirai',
            'étais / saisirais',
            'serais / saisirais',
            'avais été / aurais saisi',
          ],
          correctIndex: 1,
          explanation: '"Si j\'ÉTAIS licencié, je SAISIRAIS les prud\'hommes." Si + IMPARFAIT → CONDITIONNEL PRÉSENT. Hypothèse au présent (peu probable ou imaginaire). Différent du type réel (si + présent → futur).',
        },
        {
          id: 'b1-trd-03-ex04',
          type: 'qcm',
          question: 'La "rupture conventionnelle" est :',
          options: [
            'Un licenciement déguisé sans accord du salarié',
            'Un accord amiable entre employeur et salarié pour rompre le CDI',
            'Une démission forcée',
            'Une décision du tribunal',
          ],
          correctIndex: 1,
          explanation: 'La rupture conventionnelle = mode de rupture AMIABLE, négocié entre l\'employeur et le salarié, validé par l\'administration (DREETS). Donne droit aux allocations chômage (contrairement à la démission). Plus de 450 000 ruptures conventionnelles sont signées chaque année en France.',
        },
        {
          id: 'b1-trd-03-ex05',
          type: 'qcm',
          question: 'Irréel du passé : "Si j\'___ su que c\'était abusif, j\'___ un avocat." (savoir / contacter)',
          options: [
            'ai su / ai contacté',
            'avais su / aurais contacté',
            'savais / contacterais',
            'saurais / contacterais',
          ],
          correctIndex: 1,
          explanation: '"Si j\'AVAIS SU... j\'AURAIS CONTACTÉ un avocat." Si + PLUS-QUE-PARFAIT → CONDITIONNEL PASSÉ. Hypothèse non réalisée dans le PASSÉ (le moment d\'agir est passé, on ne peut plus changer). Structure pour exprimer un regret.',
        },
        {
          id: 'b1-trd-03-ex06',
          type: 'qcm',
          question: 'Quelle est l\'indemnité légale minimale de licenciement pour les 10 premières années d\'ancienneté ?',
          options: ['1/2 mois de salaire par année', '1/4 de mois de salaire par année', '1 mois de salaire par année', '2 semaines par année'],
          correctIndex: 1,
          explanation: 'L\'indemnité légale minimale = 1/4 de mois de salaire par année d\'ancienneté pour les 10 premières années, puis 1/3 de mois par année au-delà de 10 ans. Ce sont des MINIMUMS légaux — les conventions collectives peuvent prévoir des indemnités plus avantageuses.',
        },
        {
          id: 'b1-trd-03-ex07',
          type: 'qcm',
          question: 'Conditionnel avec "au cas où" : "Au cas où vous ___ besoin d\'aide, contactez un syndicat."',
          options: ['avez', 'auriez', 'auriez eu', 'aurez'],
          correctIndex: 1,
          explanation: '"Au cas où vous AURIEZ besoin d\'aide..." "Au cas où" est toujours suivi du CONDITIONNEL (présent ou passé selon le contexte). Différent de "si" qui exige présent/imparfait/PQP. "Au cas où" = in case.',
        },
        {
          id: 'b1-trd-03-ex08',
          type: 'qcm',
          question: 'Dans quel cas le salarié n\'a-t-il PAS droit aux allocations chômage ?',
          options: [
            'Licenciement économique',
            'Rupture conventionnelle',
            'Démission (sauf cas légitimes)',
            'Licenciement pour motif personnel',
          ],
          correctIndex: 2,
          explanation: 'La DÉMISSION ne donne en principe PAS droit aux allocations chômage (sauf cas légitimes : déménagement pour suivre un conjoint, démission pour créer une entreprise, etc.). Le licenciement (quel que soit le motif) et la rupture conventionnelle donnent droit aux allocations.',
        },
        {
          id: 'b1-trd-03-ex09',
          type: 'qcm',
          question: 'Condition avec subjonctif : "Vous serez indemnisé à condition que vous n\'___ pas commis de faute grave."',
          options: ['avez', 'ayez', 'aviez', 'auriez'],
          correctIndex: 1,
          explanation: '"À condition que vous n\'AYEZ pas commis..." "À condition que" + SUBJONCTIF (toujours). "Ayez" = subjonctif présent d\'"avoir". Différent de "à condition de + infinitif" (même sujet).',
        },
        {
          id: 'b1-trd-03-ex10',
          type: 'qcm',
          question: 'Qu\'est-ce que la "prise d\'acte" ?',
          options: [
            'Une démission classique',
            'Une rupture du contrat initiée par le salarié en raison de manquements graves de l\'employeur',
            'Un licenciement pour faute',
            'La signature d\'un nouveau contrat',
          ],
          correctIndex: 1,
          explanation: 'La "prise d\'acte" = le salarié rompt lui-même son contrat en invoquant des manquements graves de l\'employeur (non-paiement de salaire, harcèlement, modification unilatérale du contrat...). Si le juge reconnaît ces manquements, la rupture produit les effets d\'un LICENCIEMENT SANS CAUSE RÉELLE (indemnités dues). Sinon, elle équivaut à une démission.',
        },
        {
          id: 'b1-trd-03-ex11',
          type: 'qcm',
          question: 'Conditionnel réel (futur) : "Si l\'entretien préalable ___ bien, le licenciement pourra être évité."',
          options: ['se passe', 'se passerait', 'se passait', 'se sera passé'],
          correctIndex: 0,
          explanation: '"Si l\'entretien préalable SE PASSE bien..." Si + PRÉSENT → futur. Condition réelle et probable. Le verbe après "si" reste TOUJOURS au présent ou à un temps du passé (jamais futur ou conditionnel).',
        },
        {
          id: 'b1-trd-03-ex12',
          type: 'qcm',
          question: 'Quelles sont les étapes obligatoires d\'une procédure de licenciement ?',
          options: [
            'Notification écrite uniquement',
            'Convocation à un entretien préalable → entretien → notification écrite avec motifs → préavis',
            'Un simple appel téléphonique',
            'Vote des autres salariés',
          ],
          correctIndex: 1,
          explanation: 'Procédure obligatoire : (1) Convocation écrite à un entretien préalable (avec délai minimum), (2) Entretien (le salarié peut être assisté par un collègue ou un conseiller), (3) Notification écrite du licenciement avec motifs précis, (4) Respect du préavis (sauf faute grave/lourde). Le non-respect rend le licenciement irrégulier.',
        },
        {
          id: 'b1-trd-03-ex13',
          type: 'qcm',
          question: 'Irréel du passé négatif : "Si elle n\'___ pas démissionné, elle ___ droit au chômage." (démissionner / avoir)',
          options: [
            'avait / aurait eu',
            'a / a eu',
            'avait / a',
            'aurait / aurait eu',
          ],
          correctIndex: 0,
          explanation: '"Si elle N\'AVAIT PAS démissionné, elle AURAIT EU droit au chômage." Si + PQP négatif → conditionnel passé. Regret sur une décision passée (la démission) qui a eu des conséquences négatives (pas de chômage).',
        },
        {
          id: 'b1-trd-03-ex14',
          type: 'qcm',
          question: 'En cas de faute grave, l\'employeur doit-il verser une indemnité de licenciement ?',
          options: [
            'Oui, toujours, peu importe la faute',
            'Non, sauf disposition plus favorable de la convention collective',
            'Oui, mais réduite de moitié',
            'Cela dépend du salaire du salarié',
          ],
          correctIndex: 1,
          explanation: 'En cas de FAUTE GRAVE ou LOURDE, l\'indemnité légale de licenciement n\'est PAS due (sauf si la convention collective prévoit plus favorablement). C\'est une sanction importante. Pour une faute SIMPLE, l\'indemnité reste due normalement.',
        },
        {
          id: 'b1-trd-03-ex15',
          type: 'qcm',
          question: 'Condition avec infinitif : "Vous pouvez démissionner légitimement à condition ___ suivre votre conjoint muté."',
          options: ['que', 'de', 'à', 'pour'],
          correctIndex: 1,
          explanation: '"À condition DE suivre votre conjoint..." "À condition de + infinitif" (MÊME sujet) vs "à condition que + subjonctif" (sujets DIFFÉRENTS). Ici le sujet de "démissionner" et "suivre" est le même (vous) → infinitif.',
        },
        {
          id: 'b1-trd-03-ex16',
          type: 'qcm',
          question: '"Insuffisance professionnelle" comme motif de licenciement signifie :',
          options: [
            'Le salarié a commis une faute volontaire',
            'Le salarié n\'atteint pas le niveau de performance attendu, sans faute intentionnelle',
            'Le salarié a démissionné',
            'L\'entreprise n\'a plus de travail',
          ],
          correctIndex: 1,
          explanation: '"Insuffisance professionnelle" = le salarié n\'a pas les compétences ou la performance attendues pour son poste, SANS qu\'il y ait de faute volontaire ou disciplinaire. C\'est un motif personnel mais distinct de la "faute" (qui implique une intention ou négligence).',
        },
        {
          id: 'b1-trd-03-ex17',
          type: 'qcm',
          question: 'Réel/probable : "Si le licenciement ___ jugé abusif, l\'employeur devra payer des dommages-intérêts."',
          options: ['est', 'sera', 'serait', 'soit'],
          correctIndex: 0,
          explanation: '"Si le licenciement EST jugé abusif..." Si + PRÉSENT (même pour une action future probable). "Sera" (futur) est une ERREUR fréquente après "si" de condition. Règle stricte du français : jamais de futur après "si" conditionnel.',
        },
        {
          id: 'b1-trd-03-ex18',
          type: 'qcm',
          question: 'Combien de ruptures conventionnelles sont signées chaque année en France environ ?',
          options: ['50 000', '150 000', '450 000', '1 million'],
          correctIndex: 2,
          explanation: 'Plus de 450 000 ruptures conventionnelles sont signées chaque année en France depuis sa création en 2008. Ce mode de rupture est devenu très populaire car il offre une sortie négociée et amiable, avec droit au chômage, évitant les conflits du licenciement classique.',
        },
        {
          id: 'b1-trd-03-ex19',
          type: 'qcm',
          question: 'Conditionnel hypothétique : "Si les indemnités ___ insuffisantes, on pourrait saisir le tribunal." (être)',
          options: ['sont', 'étaient', 'seraient', 'avaient été'],
          correctIndex: 1,
          explanation: '"Si les indemnités ÉTAIENT insuffisantes..." Si + IMPARFAIT → conditionnel présent ("pourrait"). Hypothèse au présent, non certaine. "Étaient" = imparfait d\'"être", 3ème pers. pl.',
        },
        {
          id: 'b1-trd-03-ex20',
          type: 'qcm',
          question: 'Pourquoi la rupture conventionnelle est-elle devenue si populaire en France ?',
          options: [
            'Elle est obligatoire dans certains secteurs',
            'Elle évite le conflit du licenciement tout en donnant droit au chômage, contrairement à la démission',
            'Elle est moins chère pour l\'employeur que toutes les autres options',
            'Elle est imposée par le gouvernement à toutes les entreprises',
          ],
          correctIndex: 1,
          explanation: 'La rupture conventionnelle combine les AVANTAGES des deux parties : pour le salarié, droit au chômage (contrairement à la démission) et indemnité ; pour l\'employeur, évite la procédure longue et risquée du licenciement (contestation aux prud\'hommes). D\'où sa popularité croissante depuis 2008.',
        },
      ],
    },

    {
      id: 'b1-trd-04',
      slug: 'b1-discrimination-egalite',
      moduleSlug: 'b1-travail-droits',
      level: 'B1',
      title: 'Discrimination et égalité au travail',
      description: 'Reconnaître et combattre les discriminations dans le monde professionnel français.',
      duration: 35,
      free: false,
      dialogue: `## Texte : Lutter contre les discriminations au travail

Le droit français interdit strictement la discrimination dans l'emploi et prévoit de nombreux recours pour les victimes.

**Les critères de discrimination interdits** (article L1132-1 du Code du travail) sont nombreux : origine, sexe, mœurs, orientation sexuelle, identité de genre, âge, situation de famille, grossesse, caractéristiques génétiques, appartenance ou non à une ethnie/nation/race, opinions politiques, activités syndicales, convictions religieuses, apparence physique, patronyme, lieu de résidence, état de santé, handicap.

**Les domaines protégés** : embauche, rémunération, formation, reclassement, affectation, qualification, classification, promotion, mutation, renouvellement de contrat, sanction, licenciement.

**Comment prouver une discrimination ?**
La victime doit présenter des éléments laissant supposer une discrimination (par exemple, un CV identique sauf le nom à consonance étrangère qui n'est jamais rappelé). C'est ensuite à l'employeur de prouver que sa décision est justifiée par des éléments objectifs, étrangers à toute discrimination.

**Les recours possibles :**
- Saisir le Conseil de Prud'hommes (pour les salariés du privé)
- Saisir le Défenseur des Droits (institution indépendante, gratuite)
- Porter plainte au pénal (la discrimination est un délit, jusqu'à 3 ans de prison et 45 000€ d'amende)

**Le testing**, technique d'enquête consistant à envoyer plusieurs candidatures similaires en faisant varier un seul critère, est une preuve recevable devant les tribunaux.`,

      linguisticPoint: `## Point linguistique : Le subjonctif après les expressions de doute et d'incertitude

### Rappel : verbes/expressions + subjonctif
- douter que / il est douteux que → "Je doute qu\'il **soit** discriminé sans raison."
- il n\'est pas certain que / il n\'est pas sûr que → "Il n\'est pas certain que ce **soit** un cas de discrimination."
- il semble que (incertitude) → "Il semble que la décision **ait été** influencée par des préjugés."
- à supposer que / en supposant que → "À supposer qu\'il y **ait** discrimination, quels sont les recours ?"

### Indicatif vs subjonctif (nuance de certitude)
- "Je pense qu\'il **est** discriminé." (indicatif = certitude/probabilité forte)
- "Je doute qu\'il **soit** discriminé." (subjonctif = incertitude/doute)

### Le passé du subjonctif (subjonctif passé)
Avoir/être (subjonctif) + PP
"Il est possible que la décision **ait été** prise sur des critères discriminatoires."`,

      keyPoints: [
        'Article L1132-1 = liste des critères de discrimination interdits (origine, sexe, âge, religion, handicap...)',
        'Charge de la preuve : victime présente des indices → employeur doit justifier objectivement',
        'Recours : Prud\'hommes / Défenseur des Droits (gratuit) / plainte pénale (jusqu\'à 3 ans + 45 000€)',
        '"Le testing" = preuve recevable (candidatures comparatives)',
        'Subjonctif après doute/incertitude : douter que / il n\'est pas certain que / il semble que',
      ],

      exercises: [
        {
          id: 'b1-trd-04-ex01',
          type: 'qcm',
          question: 'Subjonctif après le doute : "Je doute que cette décision ___ justifiée." (être)',
          options: ['est', 'soit', 'sera', 'serait'],
          correctIndex: 1,
          explanation: '"Je doute que cette décision SOIT justifiée." "Douter que" + subjonctif (toujours). "Soit" = subjonctif présent d\'"être". Le doute exprime une incertitude qui appelle systématiquement le subjonctif.',
        },
        {
          id: 'b1-trd-04-ex02',
          type: 'qcm',
          question: 'Quelle peine maximale prévoit le Code pénal pour discrimination ?',
          options: ['6 mois et 5 000€', '1 an et 15 000€', '3 ans et 45 000€', '5 ans et 75 000€'],
          correctIndex: 2,
          explanation: 'La discrimination est un délit pénal (article 225-1 et suivants du Code pénal) puni de 3 ANS d\'emprisonnement et 45 000€ d\'amende. Ces peines maximales sont rarement atteintes en pratique mais montrent la gravité reconnue par la loi.',
        },
        {
          id: 'b1-trd-04-ex03',
          type: 'qcm',
          question: 'Subjonctif passé : "Il est possible que la décision ___ influencée par des préjugés." (avoir été)',
          options: ['a été', 'avait été', 'ait été', 'serait'],
          correctIndex: 2,
          explanation: '"Il est possible que la décision AIT ÉTÉ influencée..." Subjonctif passé : avoir (subjonctif = "ait") + PP ("été"). Pour exprimer une action passée avec incertitude/possibilité. "Ait été" = subjonctif passé d\'"être".',
        },
        {
          id: 'b1-trd-04-ex04',
          type: 'qcm',
          question: 'Qu\'est-ce que le "Défenseur des Droits" ?',
          options: [
            'Un syndicat de salariés',
            'Une institution indépendante qui aide gratuitement les victimes de discrimination',
            'Un avocat spécialisé payant',
            'Une branche du Ministère du Travail',
          ],
          correctIndex: 1,
          explanation: 'Le Défenseur des Droits = autorité administrative INDÉPENDANTE (institution constitutionnelle depuis 2008). Aide GRATUITEMENT les victimes de discrimination (et d\'autres atteintes aux droits). Peut mener des enquêtes, proposer une médiation, ou présenter des observations devant les tribunaux.',
        },
        {
          id: 'b1-trd-04-ex05',
          type: 'qcm',
          question: 'Indicatif ou subjonctif : "Je pense que ce ___ un cas clair de discrimination." (certitude)',
          options: ['soit', 'est', 'sera', 'serait'],
          correctIndex: 1,
          explanation: '"Je pense que c\'EST un cas clair." "Penser que" exprime une OPINION/CERTITUDE (pas un doute) → INDICATIF. ⚠️ Différent de "je doute que" (subjonctif). "Penser que / croire que / être sûr que" + indicatif (sauf à la forme négative parfois).',
        },
        {
          id: 'b1-trd-04-ex06',
          type: 'qcm',
          question: 'Qui doit prouver l\'absence de discrimination, une fois que des indices ont été présentés ?',
          options: [
            'La victime doit tout prouver elle-même',
            'L\'employeur doit prouver que sa décision est justifiée par des éléments objectifs',
            'Personne n\'a besoin de prouver quoi que ce soit',
            'Le juge décide sans preuve',
          ],
          correctIndex: 1,
          explanation: 'Mécanisme du "renversement de la charge de la preuve" : la victime présente des INDICES (pas de preuve complète), puis c\'est à l\'EMPLOYEUR de prouver que sa décision repose sur des critères OBJECTIFS, étrangers à toute discrimination. Ce mécanisme facilite la défense des victimes.',
        },
        {
          id: 'b1-trd-04-ex07',
          type: 'qcm',
          question: 'Subjonctif après hypothèse : "À supposer qu\'il y ___ discrimination, quels recours sont possibles ?" (avoir)',
          options: ['a', 'ait', 'aurait', 'avait'],
          correctIndex: 1,
          explanation: '"À supposer qu\'il y AIT discrimination..." "À supposer que" + subjonctif (toujours). "Ait" = subjonctif présent d\'"avoir" (de "il y a"). Structure pour envisager une hypothèse à des fins d\'argumentation.',
        },
        {
          id: 'b1-trd-04-ex08',
          type: 'qcm',
          question: 'Qu\'est-ce que le "testing" en matière de discrimination ?',
          options: [
            'Un test médical obligatoire à l\'embauche',
            'Une technique d\'enquête envoyant des candidatures comparables en faisant varier un seul critère (ex : nom)',
            'Un examen de compétences professionnelles',
            'Un sondage d\'opinion sur la discrimination',
          ],
          correctIndex: 1,
          explanation: 'Le "testing" = méthode de preuve consistant à envoyer plusieurs candidatures IDENTIQUES sauf un critère (le nom, par exemple — un nom "français" vs un nom à consonance étrangère). Si seule la candidature "française" reçoit une réponse, c\'est un indice fort de discrimination. Recevable devant les tribunaux français.',
        },
        {
          id: 'b1-trd-04-ex09',
          type: 'qcm',
          question: 'Subjonctif (incertitude) : "Il semble que la candidature ___ rejetée à cause de son origine." (être)',
          options: ['est', 'soit', 'sera', 'serait'],
          correctIndex: 1,
          explanation: '"Il semble que la candidature SOIT rejetée..." "Il semble que" (exprimant une apparence, pas une certitude absolue) + SUBJONCTIF. ⚠️ Nuance : "il me semble que" (certitude personnelle) prend parfois l\'indicatif, mais "il semble que" (impersonnel, incertain) prend le subjonctif.',
        },
        {
          id: 'b1-trd-04-ex10',
          type: 'qcm',
          question: 'Parmi les critères de discrimination interdits, lequel concerne le lieu où on habite ?',
          options: ['Le patronyme', 'Le lieu de résidence', 'L\'apparence physique', 'Les opinions politiques'],
          correctIndex: 1,
          explanation: '"Le lieu de résidence" est explicitement un critère interdit de discrimination — il vise notamment à protéger les habitants de certains quartiers (souvent défavorisés) qui peuvent subir une discrimination à l\'embauche simplement en raison de leur adresse.',
        },
        {
          id: 'b1-trd-04-ex11',
          type: 'qcm',
          question: 'Subjonctif passé : "Il n\'est pas certain que le recruteur ___ conscience de son biais." (avoir)',
          options: ['a eu', 'avait eu', 'ait eu', 'aurait eu'],
          correctIndex: 2,
          explanation: '"Il n\'est pas certain que le recruteur AIT EU conscience..." Subjonctif passé : "avoir" (subjonctif = "ait") + PP ("eu"). "Il n\'est pas certain que" + subjonctif (doute/incertitude exprimée).',
        },
        {
          id: 'b1-trd-04-ex12',
          type: 'qcm',
          question: '"Patronyme" comme critère de discrimination désigne :',
          options: ['Le sexe', 'Le nom de famille', 'La date de naissance', 'Le diplôme'],
          correctIndex: 1,
          explanation: '"Patronyme" = nom de famille (souvent transmis par le père historiquement, mais le terme désigne simplement le nom de famille). Discriminer sur la base du nom de famille (ex : noms à consonance étrangère) est explicitement interdit par la loi française.',
        },
        {
          id: 'b1-trd-04-ex13',
          type: 'qcm',
          question: 'Subjonctif vs indicatif : "Je suis sûr qu\'elle ___ discriminée." (certitude personnelle forte)',
          options: ['soit', 'est', 'serait', 'fût'],
          correctIndex: 1,
          explanation: '"Je suis sûr qu\'elle EST discriminée." "Être sûr que" exprime une CERTITUDE → INDICATIF (pas le subjonctif). Règle : les expressions de certitude (penser que / croire que / être sûr que / il est certain que) prennent l\'indicatif, sauf à la forme négative ou interrogative parfois.',
        },
        {
          id: 'b1-trd-04-ex14',
          type: 'qcm',
          question: 'Quelles décisions de l\'employeur sont protégées contre la discrimination ?',
          options: [
            'Uniquement l\'embauche',
            'Embauche, rémunération, formation, promotion, licenciement... = tout le parcours professionnel',
            'Uniquement le licenciement',
            'Uniquement la rémunération',
          ],
          correctIndex: 1,
          explanation: 'La protection couvre TOUT le parcours professionnel : embauche, rémunération, formation, reclassement, affectation, qualification, classification, promotion, mutation, renouvellement de contrat, sanction, licenciement. Aucune étape de la relation de travail n\'est exclue.',
        },
        {
          id: 'b1-trd-04-ex15',
          type: 'qcm',
          question: 'Subjonctif après doute : "Il est douteux que cette explication ___ suffisante." (être)',
          options: ['est', 'soit', 'sera', 'était'],
          correctIndex: 1,
          explanation: '"Il est douteux que cette explication SOIT suffisante." "Il est douteux que" + subjonctif (= il est peu probable / on peut douter). "Soit" = subjonctif présent d\'"être". Exprime un scepticisme sur la validité d\'une justification.',
        },
        {
          id: 'b1-trd-04-ex16',
          type: 'qcm',
          question: 'L\'orientation sexuelle est-elle protégée contre la discrimination au travail en France ?',
          options: [
            'Non, ce n\'est pas mentionné dans la loi',
            'Oui, explicitement listée dans l\'article L1132-1 du Code du travail',
            'Seulement dans certains secteurs publics',
            'Seulement depuis 2024',
          ],
          correctIndex: 1,
          explanation: 'Oui, l\'orientation sexuelle ET l\'identité de genre figurent explicitement dans la liste des critères interdits de discrimination de l\'article L1132-1 du Code du travail (modifié en 2012, puis 2016 pour l\'identité de genre). Ces protections existent depuis plusieurs décennies en France.',
        },
        {
          id: 'b1-trd-04-ex17',
          type: 'qcm',
          question: 'Subjonctif vs indicatif : "Il est évident que cette pratique ___ discriminatoire." (évidence)',
          options: ['soit', 'est', 'fût', 'ait été'],
          correctIndex: 1,
          explanation: '"Il est évident que cette pratique EST discriminatoire." "Il est évident que" exprime une CERTITUDE/ÉVIDENCE → INDICATIF. ⚠️ Contraste avec "il est possible/douteux/incertain que" qui prennent le SUBJONCTIF.',
        },
        {
          id: 'b1-trd-04-ex18',
          type: 'qcm',
          question: 'Que peut faire le Défenseur des Droits face à une discrimination avérée ?',
          options: [
            'Uniquement donner un avis sans conséquence',
            'Mener une enquête, proposer une médiation, présenter des observations devant les tribunaux',
            'Emprisonner directement le responsable',
            'Fermer l\'entreprise concernée',
          ],
          correctIndex: 1,
          explanation: 'Le Défenseur des Droits peut : mener des ENQUÊTES (avec pouvoir de convoquer), proposer une MÉDIATION (résolution amiable), présenter des OBSERVATIONS devant les tribunaux (soutien juridique à la victime), recommander des SANCTIONS. Il n\'a pas de pouvoir de sanction pénale directe (ce rôle revient aux tribunaux).',
        },
        {
          id: 'b1-trd-04-ex19',
          type: 'qcm',
          question: 'Subjonctif (probabilité incertaine) : "Il n\'est pas sûr que les preuves ___ suffisantes." (être)',
          options: ['sont', 'soient', 'seront', 'étaient'],
          correctIndex: 1,
          explanation: '"Il n\'est pas sûr que les preuves SOIENT suffisantes." "Il n\'est pas sûr que" + subjonctif (incertitude exprimée par la négation de la certitude). "Soient" = subjonctif présent d\'"être", 3ème pers. pl.',
        },
        {
          id: 'b1-trd-04-ex20',
          type: 'qcm',
          question: 'Pourquoi le "renversement de la charge de la preuve" facilite-t-il la défense des victimes de discrimination ?',
          options: [
            'Parce que la victime n\'a plus besoin de prouver quoi que ce soit',
            'Parce qu\'il suffit à la victime de présenter des indices, l\'employeur devant alors prouver l\'absence de discrimination (plus difficile pour lui)',
            'Parce que l\'employeur est automatiquement condamné',
            'Parce que le juge décide sans aucune preuve',
          ],
          correctIndex: 1,
          explanation: 'Sans ce mécanisme, la victime devrait prouver l\'INTENTION discriminatoire de l\'employeur — quasiment impossible à démontrer (on ne peut pas lire les pensées). Avec le renversement de la charge de la preuve, il suffit de présenter des INDICES sérieux ; c\'est ensuite à l\'employeur de justifier sa décision par des critères objectifs vérifiables.',
        },
      ],
    },

    {
      id: 'b1-trd-05',
      slug: 'b1-pole-emploi-reconversion',
      moduleSlug: 'b1-travail-droits',
      level: 'B1',
      title: 'France Travail et la reconversion professionnelle',
      description: 'Les services de France Travail, la formation continue et les démarches de reconversion.',
      duration: 35,
      free: false,
      dialogue: `## Texte : Se reconvertir et retrouver un emploi avec France Travail

**France Travail** (anciennement Pôle Emploi, renommé en 2024) est l'opérateur public chargé de l'accompagnement des demandeurs d'emploi et de la mise en relation avec les employeurs.

**S'inscrire comme demandeur d'emploi** permet d'accéder à :
- L'allocation chômage (ARE — Aide au Retour à l'Emploi), si on a suffisamment cotisé
- Un accompagnement personnalisé (conseiller référent)
- L'accès aux offres d'emploi et aux formations
- Une couverture sociale maintenue

**Les conditions pour percevoir l'ARE** : avoir travaillé au moins 6 mois (130 jours ou 910 heures) sur les 24 derniers mois, être inscrit comme demandeur d'emploi, rechercher activement un emploi, ne pas avoir atteint l'âge de la retraite.

**La reconversion professionnelle** est de plus en plus fréquente. Plusieurs dispositifs facilitent ce changement :
- **Le CPF (Compte Personnel de Formation)** : crédité chaque année (jusqu'à 500€/an), utilisable pour financer des formations qualifiantes
- **Le CEP (Conseil en Évolution Professionnelle)** : accompagnement gratuit pour définir un projet professionnel
- **La VAE (Validation des Acquis de l'Expérience)** : permet d'obtenir un diplôme en faisant valider son expérience professionnelle, sans formation complète
- **Transition Pro** : finance les projets de reconversion nécessitant une formation longue

**Pour les étrangers**, l'inscription à France Travail nécessite un titre de séjour autorisant le travail. Les ressortissants UE n'ont besoin d'aucune autorisation supplémentaire.`,

      linguisticPoint: `## Point linguistique : Les verbes pronominaux à sens passif et réciproque

### Sens passif (le sujet subit l'action sans agent précisé)
- "Le dossier **se traite** en 3 semaines." (= est traité)
- "Cette formation **se finance** par le CPF." (= est financée)
- "Les candidatures **se déposent** en ligne." (= sont déposées)

### Sens réciproque (action mutuelle entre plusieurs sujets)
- "Le candidat et le recruteur **se rencontrent** lors de l'entretien."
- "Les deux parties **se sont mises** d'accord."
- "Ils **se sont échangé** leurs coordonnées."

### Distinction avec le sens réfléchi
- Réfléchi : "Il **se forme**." (il forme lui-même = il suit une formation)
- Passif : "La formation **se finance** facilement." (= est financée, sujet inanimé)
- Réciproque : "Ils **se forment** mutuellement." (l'un forme l'autre et vice-versa)

### Accord du participe passé pronominal
- Sens passif/réfléchi direct : accord avec le sujet : "Les formations **se sont terminées**."
- Sens réciproque indirect (verbe + à) : pas d'accord : "Ils **se sont parlé**." (parler À quelqu'un)`,

      keyPoints: [
        'France Travail (ex-Pôle Emploi depuis 2024) = opérateur public emploi',
        'ARE : 6 mois travaillés / 24 derniers mois minimum pour en bénéficier',
        'CPF = jusqu\'à 500€/an pour formations / CEP = accompagnement gratuit / VAE = diplôme par expérience',
        'Verbe pronominal sens passif : "se traite / se finance / se déposent" = sujet inanimé + action subie',
        'Accord PP pronominal : direct = accord (se sont terminées) / indirect = pas d\'accord (se sont parlé)',
      ],

      exercises: [
        {
          id: 'b1-trd-05-ex01',
          type: 'qcm',
          question: 'Sens passif pronominal : "Les candidatures ___ en ligne sur le site de France Travail."',
          options: ['se déposent', 'sont déposer', 'déposent', 'se déposer'],
          correctIndex: 0,
          explanation: '"Les candidatures SE DÉPOSENT en ligne." Sens passif : "se déposer" = être déposé (le sujet "candidatures" est inanimé et subit l\'action). Équivalent à "sont déposées" mais plus naturel à l\'oral et dans les instructions.',
        },
        {
          id: 'b1-trd-05-ex02',
          type: 'qcm',
          question: 'Depuis quelle année Pôle Emploi a-t-il été renommé France Travail ?',
          options: ['2019', '2021', '2024', '2025'],
          correctIndex: 2,
          explanation: 'France Travail a remplacé Pôle Emploi en 2024 (loi "Plein Emploi" de décembre 2023, application effective en 2024). Ce changement de nom s\'accompagne d\'une réorganisation des missions, avec une coordination renforcée entre tous les acteurs de l\'insertion professionnelle.',
        },
        {
          id: 'b1-trd-05-ex03',
          type: 'qcm',
          question: 'Sens réciproque : "Le candidat et l\'employeur ___ lors de l\'entretien."',
          options: ['se rencontrent', 'rencontrent', 'sont rencontré', 'se rencontre'],
          correctIndex: 0,
          explanation: '"Le candidat et l\'employeur SE RENCONTRENT." Sens réciproque : l\'un rencontre l\'autre ET vice-versa. "Se rencontrer" = to meet each other. Accord pluriel car deux sujets (candidat + employeur) = "ils se rencontrent".',
        },
        {
          id: 'b1-trd-05-ex04',
          type: 'qcm',
          question: 'Quelle est la condition minimale de travail pour percevoir l\'ARE ?',
          options: [
            '3 mois sur les 12 derniers mois',
            '6 mois (130 jours/910h) sur les 24 derniers mois',
            '1 an sur les 5 dernières années',
            'Aucune condition minimale',
          ],
          correctIndex: 1,
          explanation: 'Pour percevoir l\'ARE (Allocation de Retour à l\'Emploi), il faut avoir travaillé au moins 6 MOIS (130 jours travaillés ou 910 heures) sur les 24 DERNIERS MOIS (36 mois pour les plus de 53 ans). Cette condition s\'appelle la "condition d\'affiliation".',
        },
        {
          id: 'b1-trd-05-ex05',
          type: 'qcm',
          question: 'Accord PP pronominal : "Les deux entreprises se sont ___ pour ce partenariat." (mettre d\'accord)',
          options: ['mis', 'mise', 'mises', 'mit'],
          correctIndex: 2,
          explanation: '"Les deux entreprises SE SONT MISES d\'accord." Sens réfléchi DIRECT (se mettre = COD direct) → accord avec le sujet. "Entreprises" = féminin pluriel → "mises" (accord en genre et nombre).',
        },
        {
          id: 'b1-trd-05-ex06',
          type: 'qcm',
          question: 'Qu\'est-ce que le CPF (Compte Personnel de Formation) ?',
          options: [
            'Un compte bancaire spécial pour les chômeurs',
            'Un crédit annuel (jusqu\'à 500€/an) pour financer des formations qualifiantes',
            'Une carte de réduction pour les transports',
            'Un prêt étudiant',
          ],
          correctIndex: 1,
          explanation: 'Le CPF = Compte Personnel de Formation. Chaque actif accumule des droits (jusqu\'à 500€/an, plafonné à 5000€) utilisables pour financer des formations qualifiantes (langues, certifications, reconversion...). Accessible via l\'application "Mon Compte Formation".',
        },
        {
          id: 'b1-trd-05-ex07',
          type: 'qcm',
          question: 'Sens passif : "Cette formation ___ facilement en utilisant le CPF."',
          options: ['se finance', 'finance', 'est financer', 'finance se'],
          correctIndex: 0,
          explanation: '"Cette formation SE FINANCE facilement..." Sens passif pronominal : "se financer" = être financée. Sujet inanimé ("cette formation") qui subit l\'action de financement. Construction très courante pour les instructions/explications de procédure.',
        },
        {
          id: 'b1-trd-05-ex08',
          type: 'qcm',
          question: 'La VAE (Validation des Acquis de l\'Expérience) permet :',
          options: [
            'D\'obtenir un diplôme sans aucune validation',
            'De faire valider son expérience professionnelle pour obtenir un diplôme, sans suivre la formation complète',
            'D\'être dispensé de toute formation continue',
            'De percevoir une prime de reconversion',
          ],
          correctIndex: 1,
          explanation: 'La VAE permet de faire reconnaître officiellement son expérience professionnelle (minimum 1 an) pour obtenir TOUT ou PARTIE d\'un diplôme, SANS suivre la formation théorique complète. Une commission évalue un dossier détaillé + un entretien. Très utile pour les personnes expérimentées sans diplôme correspondant.',
        },
        {
          id: 'b1-trd-05-ex09',
          type: 'qcm',
          question: 'Accord PP pronominal indirect (pas d\'accord) : "Ils se sont ___ au téléphone avant l\'entretien." (parler à)',
          options: ['parlé', 'parlés', 'parlée', 'parlées'],
          correctIndex: 0,
          explanation: '"Ils se sont PARLÉ au téléphone." "Parler À quelqu\'un" = COI (pas COD direct) → PAS D\'ACCORD du participe passé. "Parlé" reste invariable. Contraste avec "se sont vus" (voir QUELQU\'UN = COD direct → accord).',
        },
        {
          id: 'b1-trd-05-ex10',
          type: 'qcm',
          question: 'Un ressortissant UE doit-il obtenir une autorisation spéciale pour s\'inscrire à France Travail ?',
          options: [
            'Oui, comme tout étranger',
            'Non, aucune autorisation supplémentaire n\'est nécessaire (liberté de circulation UE)',
            'Oui, mais seulement après 5 ans de résidence',
            'Non, mais une taxe doit être payée',
          ],
          correctIndex: 1,
          explanation: 'Les ressortissants de l\'Union Européenne bénéficient de la LIBERTÉ DE CIRCULATION (traités européens) — ils peuvent travailler et s\'inscrire à France Travail sans titre de séjour ni autorisation de travail spécifique, contrairement aux ressortissants hors UE qui doivent avoir un titre autorisant le travail.',
        },
        {
          id: 'b1-trd-05-ex11',
          type: 'qcm',
          question: 'Sens réfléchi vs passif : "Il SE forme aux nouvelles technologies." Que signifie ce verbe ici ?',
          options: [
            'Sens passif (il est formé par quelqu\'un d\'autre, agent inconnu)',
            'Sens réfléchi (il suit lui-même une formation, action volontaire)',
            'Sens réciproque',
            'Aucun sens particulier',
          ],
          correctIndex: 1,
          explanation: '"Il SE forme" = sens RÉFLÉCHI (il forme LUI-MÊME ses compétences = il suit une formation volontairement). Différent du sens passif où le sujet est inanimé et subit ("la formation se finance"). Ici "il" est une personne qui agit activement sur lui-même.',
        },
        {
          id: 'b1-trd-05-ex12',
          type: 'qcm',
          question: 'Le CEP (Conseil en Évolution Professionnelle) est :',
          options: [
            'Un service payant réservé aux cadres',
            'Un accompagnement gratuit pour définir son projet professionnel',
            'Un diplôme de gestion',
            'Une obligation légale pour tous les salariés',
          ],
          correctIndex: 1,
          explanation: 'Le CEP = accompagnement GRATUIT (financé par l\'État) accessible à tout actif (salarié, indépendant, demandeur d\'emploi) pour définir et mettre en œuvre un projet professionnel ou de reconversion. Assuré par des organismes habilités (Cap Emploi, missions locales, APEC pour les cadres...).',
        },
        {
          id: 'b1-trd-05-ex13',
          type: 'qcm',
          question: 'Accord PP pronominal : "La réunion ___ terminée à 17h."',
          options: ['s\'est', 's\'a', 'a', 'est'],
          correctIndex: 0,
          explanation: '"La réunion S\'EST terminée à 17h." Verbes pronominaux toujours conjugués avec ÊTRE au passé composé. "Se terminer" = "s\'est terminée" (accord avec le sujet féminin singulier "la réunion").',
        },
        {
          id: 'b1-trd-05-ex14',
          type: 'qcm',
          question: 'Transition Pro finance principalement :',
          options: [
            'Les vacances des salariés',
            'Les projets de reconversion nécessitant une formation longue',
            'Les augmentations de salaire',
            'Les indemnités de licenciement',
          ],
          correctIndex: 1,
          explanation: 'Transition Pro (anciennement "Fongecif") finance les projets de RECONVERSION PROFESSIONNELLE nécessitant une FORMATION LONGUE (changement de métier complet). Différent du CPF (formations plus courtes, autofinancées par les droits acquis). Pour les salariés en CDI principalement.',
        },
        {
          id: 'b1-trd-05-ex15',
          type: 'qcm',
          question: 'Sens passif : "Les offres d\'emploi ___ consulter facilement sur l\'application France Travail."',
          options: ['se peuvent', 'peuvent se', 'peuvent être consultées (passif classique)', 'A et C sont possibles selon le registre'],
          correctIndex: 3,
          explanation: 'On peut dire "les offres PEUVENT ÊTRE CONSULTÉES" (passif classique avec "pouvoir") ou utiliser une construction pronominale différente comme "se consultent facilement" (sans "pouvoir"). "Se peuvent consulter" n\'est PAS grammatical en français standard.',
        },
        {
          id: 'b1-trd-05-ex16',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un "conseiller référent" à France Travail ?',
          options: [
            'Un avocat spécialisé en droit du travail',
            'La personne chargée de l\'accompagnement personnalisé d\'un demandeur d\'emploi',
            'Le directeur de l\'agence France Travail',
            'Un formateur professionnel',
          ],
          correctIndex: 1,
          explanation: 'Le conseiller référent = interlocuteur PRIVILÉGIÉ et personnalisé attribué à chaque demandeur d\'emploi inscrit. Il suit le dossier dans la durée, propose des offres adaptées, valide le projet professionnel, et peut sanctionner en cas de manquement aux obligations de recherche active.',
        },
        {
          id: 'b1-trd-05-ex17',
          type: 'qcm',
          question: 'Accord PP pronominal réciproque direct : "Les deux candidats se sont ___ lors du salon de l\'emploi." (rencontrer = COD direct)',
          options: ['rencontré', 'rencontrés', 'rencontrée', 'rencontrées'],
          correctIndex: 1,
          explanation: '"Les deux candidats SE SONT RENCONTRÉS." Sens réciproque DIRECT (rencontrer QUELQU\'UN = COD) → accord avec le sujet. "Candidats" = masculin pluriel → "rencontrés".',
        },
        {
          id: 'b1-trd-05-ex18',
          type: 'qcm',
          question: 'Pourquoi la reconversion professionnelle est-elle de plus en plus fréquente en France ?',
          options: [
            'Parce que c\'est obligatoire après 10 ans dans le même métier',
            'Évolution des métiers, quête de sens, et dispositifs facilitants (CPF, VAE, Transition Pro) rendent le changement plus accessible',
            'Parce que les entreprises licencient systématiquement après 5 ans',
            'Uniquement à cause du chômage',
          ],
          correctIndex: 1,
          explanation: 'Plusieurs facteurs : évolution rapide des métiers (numérique, écologie...), quête de sens grandissante chez les actifs, ET surtout des dispositifs facilitants (CPF, VAE, CEP, Transition Pro) qui rendent le changement de carrière plus accessible financièrement et administrativement qu\'auparavant.',
        },
        {
          id: 'b1-trd-05-ex19',
          type: 'qcm',
          question: 'Sens passif pronominal : "Ce métier ___ de plus en plus, avec la transition écologique."',
          options: ['se développe', 'développe', 'est développer', 'développe se'],
          correctIndex: 0,
          explanation: '"Ce métier SE DÉVELOPPE de plus en plus." Sens passif/moyen : le métier "se développe" (croît, sans agent précis identifié — un processus naturel). "Se développer" = to develop / grow, construction pronominale très courante en français pour les évolutions naturelles.',
        },
        {
          id: 'b1-trd-05-ex20',
          type: 'qcm',
          question: 'Pour un étranger non-UE souhaitant s\'inscrire à France Travail, quelle condition est indispensable ?',
          options: [
            'Avoir la nationalité française',
            'Posséder un titre de séjour autorisant le travail en France',
            'Résider en France depuis plus de 10 ans',
            'Avoir un diplôme français',
          ],
          correctIndex: 1,
          explanation: 'Pour un ressortissant hors UE, l\'inscription à France Travail nécessite un TITRE DE SÉJOUR AUTORISANT LE TRAVAIL (salarié, vie privée et familiale, résident, passeport talent...). Les titres ne donnant pas accès au travail (visiteur, étudiant avec restrictions) limitent ou empêchent cette inscription.',
        },
      ],
    },
  ],
};
