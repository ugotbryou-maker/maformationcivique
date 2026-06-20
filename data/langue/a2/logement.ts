import type { LangModule } from '../types';

export const a2Logement: LangModule = {
  id: 'a2-mod-03',
  slug: 'a2-logement',
  level: 'A2',
  title: 'Logement & voisinage',
  subtitle: 'Louer, comprendre un bail, vivre en collectif',
  description: 'Cherchez un logement, comprenez votre bail, gérez les relations de voisinage et les charges.',
  type: 'thematique',
  emoji: '🏢',
  free: false,
  lessons: [
    {
      id: 'a2-lo-01',
      slug: 'a2-chercher-logement',
      moduleSlug: 'a2-logement',
      level: 'A2',
      title: 'Chercher un logement',
      description: 'Lisez les annonces immobilières, contactez les agences et visitez des appartements.',
      duration: 35,
      free: false,
      dialogue: `## Dialogue : Appel à une agence immobilière

*Omar cherche un appartement à louer. Il appelle une agence.*

**Agent immobilier :** Agence Bellevue, bonjour.

**Omar :** Bonjour. J'ai vu votre annonce pour un appartement 2 pièces rue des Acacias. Il est encore disponible ?

**Agent :** Oui, il est toujours disponible. Vous souhaitez des informations ?

**Omar :** Oui s'il vous plaît. Quel est le loyer exactement ?

**Agent :** Le loyer est de 780 euros par mois, charges comprises. Ça comprend les charges de copropriété et l'eau froide. L'électricité et le gaz sont à votre charge.

**Omar :** D'accord. L'appartement est à quel étage ?

**Agent :** Deuxième étage, avec ascenseur. C'est un appartement de 45 m², avec un salon, une chambre, une cuisine équipée et une salle de bain. Il y a aussi un balcon côté cour.

**Omar :** Est-ce qu'il y a un parking ?

**Agent :** Non, le parking n'est pas inclus. Mais il y a un parking payant à 50 mètres.

**Omar :** Et les animaux de compagnie, c'est accepté ?

**Agent :** Ça dépend du type d'animal. Les chats sont acceptés, mais pas les chiens.

**Omar :** Très bien. Est-ce que je peux visiter ce week-end ?

**Agent :** Bien sûr. Samedi matin à 10h, ça vous convient ?`,

      linguisticPoint: `## Point linguistique : Les prépositions de lieu et les annonces immobilières

### Prépositions de lieu essentielles
| Préposition | Sens | Exemple |
|---|---|---|
| **à** | position générale | à Paris / à gauche / à droite |
| **dans** | à l'intérieur | dans le salon / dans la rue |
| **sur** | contact surface | sur le balcon / sur le mur |
| **sous** | en dessous | sous le lit / sous l'escalier |
| **entre** | au milieu de | entre la cuisine et le salon |
| **en face de** | vis-à-vis | en face de la mairie |
| **à côté de** | adjacent | à côté de l'école |
| **au fond de** | fin d'un espace | au fond du couloir |

### Vocabulaire des annonces immobilières
- **m²** = mètres carrés (superficie)
- **F2 ou T2** = 2 pièces (salon + 1 chambre) — F3 = 3 pièces, etc.
- **Charges comprises (CC)** = charges incluses dans le loyer
- **Charges en sus** = charges à payer en plus du loyer
- **Cuisine équipée** = avec electroménager (four, frigo...)
- **Double vitrage** = fenêtres isolantes
- **DPE** = Diagnostic de Performance Énergétique (A = très économe → G = énergivore)`,

      keyPoints: [
        'Loyer charges comprises (CC) vs charges en sus',
        'T1/F1 (studio) → T2/F2 (2 pièces) → T3/F3 (3 pièces)',
        'Cuisine équipée = electroménager inclus',
        'DPE = performance énergétique du logement (A à G)',
        'Prépositions : dans (intérieur) / sur (surface) / entre / à côté de',
      ],

      exercises: [
        {
          id: 'a2-lo-01-ex01',
          type: 'qcm',
          question: 'Que signifie "charges comprises" pour un loyer ?',
          options: [
            'Le loyer inclut toutes les dépenses (eau, gaz, électricité)',
            'Le loyer inclut certaines charges comme les parties communes, l\'eau froide',
            'Le loyer est très élevé',
            'Les charges sont à payer séparément',
          ],
          correctIndex: 1,
          explanation: '"Charges comprises" (CC) signifie que certaines charges sont incluses dans le loyer (généralement : eau froide, chauffage collectif, entretien parties communes). L\'électricité et le gaz individuels sont souvent en sus.',
        },
        {
          id: 'a2-lo-01-ex02',
          type: 'qcm',
          question: 'Un appartement "T2" ou "F2" c\'est...',
          options: [
            'Un studio (1 seule pièce)',
            'Un appartement avec 2 pièces : salon + 1 chambre',
            'Un appartement avec 2 chambres + salon',
            'Un appartement sur 2 étages',
          ],
          correctIndex: 1,
          explanation: 'T2 (ou F2) = 2 pièces = 1 salon + 1 chambre (cuisine et salle de bain non comptées). T1 = studio (1 seule pièce). T3 = salon + 2 chambres. T4 = salon + 3 chambres.',
        },
        {
          id: 'a2-lo-01-ex03',
          type: 'qcm',
          question: 'Quelle préposition utilise-t-on pour dire "inside the apartment" ?',
          options: ['Sur l\'appartement', 'Dans l\'appartement', 'À l\'appartement', 'Sous l\'appartement'],
          correctIndex: 1,
          explanation: '"Dans" indique l\'intérieur : DANS l\'appartement / DANS la chambre / DANS le salon. "À" indique une position générale ou une destination. "Sur" indique une surface de contact.',
        },
        {
          id: 'a2-lo-01-ex04',
          type: 'qcm',
          question: 'Quelle est la superficie de l\'appartement ?',
          options: ['35 m²', '40 m²', '45 m²', '50 m²'],
          correctIndex: 2,
          explanation: 'L\'agent précise : "C\'est un appartement de 45 m²". En France, la superficie (la surface) se mesure en mètres carrés (m²). Un T2 de 45m² est une taille typique pour un appartement parisien.',
        },
        {
          id: 'a2-lo-01-ex05',
          type: 'qcm',
          question: 'Les animaux sont-ils acceptés dans cet appartement ?',
          options: [
            'Oui, tous les animaux',
            'Non, aucun animal',
            'Oui les chats, non les chiens',
            'Oui les chiens, non les chats',
          ],
          correctIndex: 2,
          explanation: 'L\'agent répond : "Les chats sont acceptés, mais pas les chiens." En France, le propriétaire peut généralement refuser les chiens (mais pas toujours les chats). La réglementation varie.',
        },
        {
          id: 'a2-lo-01-ex06',
          type: 'qcm',
          question: 'L\'appartement a-t-il un parking inclus ?',
          options: [
            'Oui, un garage privé',
            'Oui, une place de parking',
            'Non, mais il y a un parking payant à proximité',
            'Non, et il n\'y a pas de parking dans le quartier',
          ],
          correctIndex: 2,
          explanation: 'L\'agent dit : "le parking n\'est pas inclus. Mais il y a un parking payant à 50 mètres." Un parking "inclus" serait mentionné dans l\'annonce, généralement avec un supplément de loyer.',
        },
        {
          id: 'a2-lo-01-ex07',
          type: 'qcm',
          question: 'Que signifie "cuisine équipée" ?',
          options: [
            'Une grande cuisine',
            'Une cuisine avec des appareils électroménagers installés (four, réfrigérateur...)',
            'Une cuisine peinte en blanc',
            'Une cuisine indépendante',
          ],
          correctIndex: 1,
          explanation: 'Une cuisine équipée inclut l\'électroménager : au minimum réfrigérateur et four (ou plaques de cuisson). Une cuisine "aménagée" a seulement les meubles (sans les appareils). "Cuisiniste" = spécialiste de cuisines équipées.',
        },
        {
          id: 'a2-lo-01-ex08',
          type: 'qcm',
          question: 'Quelle préposition utilise-t-on pour "next to the school" ?',
          options: ['En face de l\'école', 'À côté de l\'école', 'Au fond de l\'école', 'Sur l\'école'],
          correctIndex: 1,
          explanation: '"À côté de" = next to / beside. "En face de" = opposite / across from. "Au fond de" = at the back of. "À côté de l\'école" = l\'appartement est adjacent ou proche de l\'école.',
        },
        {
          id: 'a2-lo-01-ex09',
          type: 'qcm',
          question: 'Que signifie "côté cour" pour un balcon ?',
          options: [
            'Donnant sur la rue',
            'Donnant sur l\'arrière de l\'immeuble (la cour intérieure)',
            'Côté ensoleillé',
            'Côté de la cuisine',
          ],
          correctIndex: 1,
          explanation: '"Côté cour" = facing the inner courtyard (la cour intérieure de l\'immeuble). Opposé à "côté rue" (facing the street). "Côté cour" est généralement plus calme mais moins lumineux.',
        },
        {
          id: 'a2-lo-01-ex10',
          type: 'qcm',
          question: 'Qu\'est-ce que le DPE ?',
          options: [
            'Déclaration de Propriété et d\'Évaluation',
            'Diagnostic de Performance Énergétique (classe A à G)',
            'Document de Propriété Exclusive',
            'Dossier de Pré-Engagement',
          ],
          correctIndex: 1,
          explanation: 'Le DPE (Diagnostic de Performance Énergétique) classe un logement de A (très économe en énergie) à G (très énergivore). Il doit figurer dans toute annonce de location ou vente. Un bon DPE = économies de chauffage.',
        },
        {
          id: 'a2-lo-01-ex11',
          type: 'qcm',
          question: 'Omar demande si l\'appartement est "encore disponible". Que veut-il savoir ?',
          options: [
            'Si l\'appartement est grand',
            'Si l\'appartement n\'est pas déjà loué à quelqu\'un d\'autre',
            'Si l\'appartement est nouveau',
            'Si l\'appartement est en bon état',
          ],
          correctIndex: 1,
          explanation: '"Encore disponible" = still available = pas encore loué à quelqu\'un d\'autre. Dans l\'immobilier, les bons appartements partent vite. Omar vérifie que personne ne l\'a pris avant lui.',
        },
        {
          id: 'a2-lo-01-ex12',
          type: 'qcm',
          question: 'Quel étage est l\'appartement ? Y a-t-il un ascenseur ?',
          options: [
            'Premier étage, pas d\'ascenseur',
            'Deuxième étage, avec ascenseur',
            'Troisième étage, avec ascenseur',
            'Rez-de-chaussée',
          ],
          correctIndex: 1,
          explanation: 'L\'agent dit : "Deuxième étage, avec ascenseur." La présence d\'un ascenseur est importante, surtout pour les personnes à mobilité réduite ou avec des enfants en bas âge.',
        },
        {
          id: 'a2-lo-01-ex13',
          type: 'qcm',
          question: 'Que signifie "ça vous convient" à la fin d\'une proposition ?',
          options: [
            'Vous comprenez ?',
            'C\'est bien pour vous ? Ça vous arrange ?',
            'Vous pouvez venir ?',
            'Vous êtes d\'accord sur le prix ?',
          ],
          correctIndex: 1,
          explanation: '"Ça vous convient ?" = "Is that convenient for you?" / "Does that suit you?" C\'est une formule pour vérifier qu\'une date ou une heure proposée est acceptable pour l\'interlocuteur. L\'agent propose samedi 10h et vérifie si ça convient à Omar.',
        },
        {
          id: 'a2-lo-01-ex14',
          type: 'qcm',
          question: 'Les charges "à votre charge" signifient...',
          options: [
            'L\'agence les paie pour vous',
            'Elles sont incluses dans le loyer',
            'Vous devez les payer vous-même en plus du loyer',
            'Elles sont partagées avec d\'autres locataires',
          ],
          correctIndex: 2,
          explanation: '"À votre charge" = that you must pay yourself. "L\'électricité et le gaz sont à votre charge" = vous payez directement à EDF/Engie en plus du loyer. Opposé à "charges comprises" (inclus dans le loyer).',
        },
        {
          id: 'a2-lo-01-ex15',
          type: 'qcm',
          question: 'Quelle préposition utilise-t-on pour une adresse en France ?',
          options: [
            'Je suis en rue des Acacias',
            'Je suis à rue des Acacias',
            'Je suis rue des Acacias',
            'Je suis dans rue des Acacias',
          ],
          correctIndex: 2,
          explanation: 'Pour les adresses françaises, on n\'utilise pas de préposition devant le nom de la rue : "23, rue des Acacias" (sans "à" ou "dans"). On dit "j\'habite au 23 rue des Acacias" ou "l\'appartement est au 23 rue des Acacias".',
        },
        {
          id: 'a2-lo-01-ex16',
          type: 'qcm',
          question: 'Comment dit-on "water and electricity bills" en français ?',
          options: [
            'Les factures d\'eau et d\'électricité',
            'Les charges d\'eau et d\'électricité',
            'Les dépenses eau-électricité',
            'Les frais d\'eau et électrique',
          ],
          correctIndex: 0,
          explanation: '"Les factures" = the bills. On reçoit une facture d\'eau (de la mairie/régie), une facture d\'électricité (EDF), une facture de gaz (Engie/GDF Suez). "Charges" est plus général et peut inclure ces éléments.',
        },
        {
          id: 'a2-lo-01-ex17',
          type: 'qcm',
          question: 'Que signifie "rez-de-chaussée" ?',
          options: [
            'Sous-sol',
            'Premier étage',
            'Niveau de la rue / niveau 0',
            'Dernier étage',
          ],
          correctIndex: 2,
          explanation: '"Rez-de-chaussée" (RDC) = le niveau de la rue, le niveau 0. Au-dessus vient le 1er étage, puis le 2ème, etc. Ne pas confondre avec le système anglais où le "ground floor" = rez-de-chaussée et le "first floor" = 1er étage français.',
        },
        {
          id: 'a2-lo-01-ex18',
          type: 'qcm',
          question: 'Pour visiter un appartement, que faut-il généralement prévoir ?',
          options: [
            'Rien de spécial',
            'Une pièce d\'identité et éventuellement une liste de questions',
            'Un chèque de caution',
            'Ses deux dernières fiches de paie',
          ],
          correctIndex: 1,
          explanation: 'Pour une visite d\'appartement, apportez une pièce d\'identité (carte d\'identité ou passeport). Préparez aussi une liste de questions : état des équipements, voisinage, travaux prévus, montant des charges détaillé, etc.',
        },
        {
          id: 'a2-lo-01-ex19',
          type: 'qcm',
          question: 'Comment dit-on "le loyer" en anglais ?',
          options: ['The charge', 'The rent', 'The bill', 'The deposit'],
          correctIndex: 1,
          explanation: 'Le loyer = the rent. Le dépôt de garantie (caution) = the deposit. Les charges = the service charges. Le bail = the lease. L\'agent immobilier = the estate agent/realtor.',
        },
        {
          id: 'a2-lo-01-ex20',
          type: 'qcm',
          question: 'L\'agent dit "ça vous convient" avec le vouvoiement. Pourquoi utilise-t-on "vous" ici ?',
          options: [
            'Parce que Omar est âgé',
            'Par politesse professionnelle — on vouvoie dans un contexte commercial',
            'Parce qu\'ils se connaissent',
            'Parce qu\'Omar est étranger',
          ],
          correctIndex: 1,
          explanation: 'Le vouvoiement (utiliser "vous" pour une seule personne) est la norme dans les contextes professionnels et commerciaux en France. L\'agent immobilier vouvoie son client par politesse et professionnalisme.',
        },
      ],
    },

    {
      id: 'a2-lo-02',
      slug: 'a2-comprendre-bail',
      moduleSlug: 'a2-logement',
      level: 'A2',
      title: 'Comprendre son bail',
      description: 'Lisez et comprenez les clauses essentielles d\'un contrat de bail de location.',
      duration: 35,
      free: false,
      dialogue: `## Texte : Les points importants d'un bail

Un bail (contrat de location) est un document légal important. Voici les éléments à vérifier avant de signer.

**La durée du bail :** Pour un appartement non meublé, la durée minimale est de 3 ans. Pour un logement meublé, c'est 1 an. Si le locataire veut partir avant la fin du bail, il doit donner un préavis de 1 mois (meublé) ou 3 mois (non meublé).

**Le loyer et les charges :** Le bail indique le loyer mensuel hors charges et le montant des charges (provisions sur charges). Une fois par an, le propriétaire doit faire une régularisation des charges réelles.

**Le dépôt de garantie :** Le propriétaire peut demander un dépôt de garantie — maximum 1 mois de loyer hors charges pour un logement non meublé, 2 mois pour un meublé. Ce dépôt est rendu dans les 1 à 2 mois après le départ du locataire.

**L'état des lieux :** Quand vous entrez dans le logement, vous faites un état des lieux d'entrée avec le propriétaire. Quand vous partez, vous faites un état des lieux de sortie. Si le logement est plus dégradé à la sortie qu'à l'entrée, le propriétaire peut déduire les réparations du dépôt de garantie.

**Les obligations du locataire :** Payer le loyer et les charges à date fixe. Entretenir le logement (petites réparations). Respecter le règlement de copropriété. Assurer le logement (assurance locataire obligatoire).`,

      linguisticPoint: `## Point linguistique : Les connecteurs logiques (cause, conséquence, opposition)

### Cause (parce que, car, puisque)
- **Parce que** : "Je donne un préavis **parce que** je déménage."
- **Car** (plus formel) : "Il doit partir **car** son bail expire."
- **Puisque** (cause évidente) : "**Puisque** vous partez, faites un état des lieux."

### Conséquence (donc, alors, c'est pourquoi)
- **Donc** : "Le bail expire, **donc** je dois partir."
- **Alors** : "Il n'a pas payé, **alors** le propriétaire peut agir."
- **C'est pourquoi** (formel) : "Le logement est dégradé, **c'est pourquoi** je garde le dépôt."

### Opposition (mais, cependant, en revanche)
- **Mais** : "Le loyer est élevé, **mais** l'appartement est bien."
- **Cependant** (formel) : "Il est propre ; **cependant**, il manque de lumière."
- **En revanche** : "Le salon est grand ; **en revanche**, la chambre est petite."`,

      keyPoints: [
        'Bail non meublé = 3 ans min / bail meublé = 1 an min',
        'Préavis départ : 1 mois (meublé) ou 3 mois (non meublé)',
        'Dépôt de garantie : 1 mois (non meublé) ou 2 mois (meublé)',
        'État des lieux d\'entrée ET de sortie (obligatoire)',
        'Assurance locataire = obligatoire en France',
      ],

      exercises: [
        {
          id: 'a2-lo-02-ex01',
          type: 'qcm',
          question: 'Quelle est la durée minimale d\'un bail non meublé en France ?',
          options: ['1 an', '2 ans', '3 ans', '5 ans'],
          correctIndex: 2,
          explanation: 'La durée minimale d\'un bail non meublé est de 3 ans (loi du 6 juillet 1989). Pour un logement meublé, c\'est 1 an (ou 9 mois pour les étudiants). Le propriétaire ne peut pas mettre fin au bail avant ce délai sauf exceptions.',
        },
        {
          id: 'a2-lo-02-ex02',
          type: 'qcm',
          question: 'Quel est le préavis à donner si on veut quitter un appartement non meublé ?',
          options: ['15 jours', '1 mois', '2 mois', '3 mois'],
          correctIndex: 3,
          explanation: 'Pour un logement non meublé, le préavis standard est de 3 mois. Il peut être réduit à 1 mois dans certains cas : perte d\'emploi, mutation professionnelle, zone tendue (grandes villes), raisons médicales.',
        },
        {
          id: 'a2-lo-02-ex03',
          type: 'qcm',
          question: 'Quel connecteur logique introduit une cause ?',
          options: ['Donc', 'Mais', 'Parce que', 'En revanche'],
          correctIndex: 2,
          explanation: '"Parce que" introduit une cause (reason). "Donc" introduit une conséquence (consequence). "Mais" introduit une opposition (opposition). "En revanche" introduit aussi une opposition (in contrast).',
        },
        {
          id: 'a2-lo-02-ex04',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un "dépôt de garantie" ?',
          options: [
            'Le premier loyer payé',
            'Une somme versée à l\'entrée, rendue au départ si le logement est en bon état',
            'Une assurance obligatoire',
            'Les frais d\'agence',
          ],
          correctIndex: 1,
          explanation: 'Le dépôt de garantie (ou caution) est versé à l\'entrée dans le logement. Il est rendu dans les 1 à 2 mois après le départ. Si le logement a été dégradé, le propriétaire peut garder une partie pour les réparations.',
        },
        {
          id: 'a2-lo-02-ex05',
          type: 'qcm',
          question: 'Le dépôt de garantie pour un logement non meublé est au maximum de...',
          options: [
            '1 mois de loyer hors charges',
            '2 mois de loyer hors charges',
            '3 mois de loyer hors charges',
            '1 mois de loyer charges comprises',
          ],
          correctIndex: 0,
          explanation: 'Pour un logement non meublé : dépôt de garantie max = 1 mois de loyer HORS CHARGES. Pour un logement meublé : max = 2 mois hors charges. Cette limite est fixée par la loi ALUR de 2014.',
        },
        {
          id: 'a2-lo-02-ex06',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un "état des lieux" ?',
          options: [
            'Un plan de l\'appartement',
            'Un inventaire des meubles',
            'Un document décrivant l\'état du logement à l\'entrée et à la sortie du locataire',
            'Un bilan financier du loyer',
          ],
          correctIndex: 2,
          explanation: 'L\'état des lieux est un document signé par le propriétaire et le locataire qui décrit l\'état du logement (murs, sols, équipements) à l\'entrée et à la sortie. Il permet de comparer l\'état initial et final pour déterminer les éventuelles dégradations.',
        },
        {
          id: 'a2-lo-02-ex07',
          type: 'qcm',
          question: 'Quel connecteur introduit une opposition ?',
          options: ['Donc', 'Parce que', 'Puisque', 'Cependant'],
          correctIndex: 3,
          explanation: '"Cependant" introduit une opposition ou nuance (however). Mêmes sens : mais / en revanche / néanmoins / toutefois. Différent de "donc" (conséquence) ou "parce que" (cause).',
        },
        {
          id: 'a2-lo-02-ex08',
          type: 'qcm',
          question: 'L\'assurance locataire est-elle obligatoire en France ?',
          options: ['Non, elle est facultative', 'Oui, c\'est une obligation légale', 'Seulement pour les meublés', 'Seulement dans les grandes villes'],
          correctIndex: 1,
          explanation: 'L\'assurance habitation locataire (responsabilité civile et dégâts des eaux au minimum) est OBLIGATOIRE en France. Le locataire doit fournir une attestation d\'assurance chaque année au propriétaire. Sans assurance, le bail peut être résilié.',
        },
        {
          id: 'a2-lo-02-ex09',
          type: 'qcm',
          question: 'Que signifie "loyer hors charges" ?',
          options: [
            'Le loyer total avec tous les frais inclus',
            'Le loyer de base sans les charges ajoutées',
            'Un loyer très élevé',
            'Le loyer incluant seulement l\'eau',
          ],
          correctIndex: 1,
          explanation: '"Hors charges" = sans les charges. Loyer "hors charges" (HC) = le montant de base. Loyer "charges comprises" (CC) = loyer HC + provision pour charges. Le dépôt de garantie se calcule sur le loyer HC.',
        },
        {
          id: 'a2-lo-02-ex10',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une "régularisation des charges" ?',
          options: [
            'Une augmentation du loyer',
            'Un ajustement annuel entre les charges provisionnelles payées et les charges réelles',
            'Un remboursement automatique',
            'Une pénalité pour mauvais comportement',
          ],
          correctIndex: 1,
          explanation: 'Chaque année, le propriétaire compare les provisions sur charges payées par le locataire avec les charges réelles. Si le locataire a trop payé → remboursement. S\'il n\'a pas assez payé → complément à régler.',
        },
        {
          id: 'a2-lo-02-ex11',
          type: 'qcm',
          question: 'Complétez avec le bon connecteur : "L\'appartement est loin, ___ il est moins cher."',
          options: ['donc', 'parce que', 'mais', 'puisque'],
          correctIndex: 2,
          explanation: '"Mais" introduit une opposition/contraste. "L\'appartement est loin, MAIS il est moins cher" = it\'s far, BUT it\'s cheaper. Les deux informations sont contradictoires (inconvénient vs avantage).',
        },
        {
          id: 'a2-lo-02-ex12',
          type: 'qcm',
          question: 'Quel délai a le propriétaire pour restituer le dépôt de garantie ?',
          options: ['15 jours', '1 mois', '1 à 2 mois', '3 mois'],
          correctIndex: 2,
          explanation: 'Le propriétaire a 1 mois pour restituer le dépôt si l\'état des lieux de sortie est conforme à l\'entrée, ou 2 mois si des dégradations ont été constatées (pour obtenir les devis/factures).',
        },
        {
          id: 'a2-lo-02-ex13',
          type: 'qcm',
          question: 'Les "petites réparations" sont à la charge de qui ?',
          options: [
            'Du propriétaire',
            'De la copropriété',
            'Du locataire',
            'De l\'assurance',
          ],
          correctIndex: 2,
          explanation: 'Les "petites réparations locatives" (menues réparations) sont à la charge du locataire : changer une ampoule, réparer un robinet qui goutte, reboucher un trou dans le mur... Les grosses réparations (chaudière, toiture) sont à la charge du propriétaire.',
        },
        {
          id: 'a2-lo-02-ex14',
          type: 'qcm',
          question: 'Complétez : "Il n\'a pas payé son loyer, ___ le propriétaire peut envoyer une lettre de mise en demeure."',
          options: ['mais', 'parce que', 'donc', 'puisque'],
          correctIndex: 2,
          explanation: '"Donc" introduit une conséquence logique. "Il n\'a pas payé, DONC le propriétaire peut agir" = he didn\'t pay, THEREFORE the landlord can act. La conséquence découle logiquement de la cause.',
        },
        {
          id: 'a2-lo-02-ex15',
          type: 'qcm',
          question: 'Le propriétaire peut-il augmenter le loyer en cours de bail ?',
          options: [
            'Oui, quand il veut',
            'Non, jamais',
            'Oui, mais seulement une fois par an selon l\'IRL',
            'Oui, seulement si le locataire est d\'accord',
          ],
          correctIndex: 2,
          explanation: 'Le loyer peut être révisé une fois par an à la date anniversaire du bail, selon l\'IRL (Indice de Référence des Loyers) publié par l\'INSEE. Cette révision est automatique si elle est prévue dans le bail.',
        },
        {
          id: 'a2-lo-02-ex16',
          type: 'qcm',
          question: 'Qu\'est-ce que le "règlement de copropriété" ?',
          options: [
            'Le règlement intérieur de l\'immeuble',
            'Le règlement de charges',
            'Le règlement entre locataires',
            'Les règles établies entre les copropriétaires sur la gestion de l\'immeuble',
          ],
          correctIndex: 3,
          explanation: 'Le règlement de copropriété est un document légal qui définit les règles de vie dans l\'immeuble : heures de silence, utilisation des parties communes, animaux autorisés, travaux... Le locataire doit le respecter.',
        },
        {
          id: 'a2-lo-02-ex17',
          type: 'qcm',
          question: 'Dans quels cas peut-on avoir un préavis réduit à 1 mois pour un non-meublé ?',
          options: [
            'Jamais, c\'est toujours 3 mois',
            'En zone tendue, mutation pro, perte d\'emploi, raisons médicales',
            'Si le propriétaire est d\'accord',
            'Pour les seniors de plus de 60 ans',
          ],
          correctIndex: 1,
          explanation: 'Le préavis peut être réduit à 1 mois dans ces situations : 1) Zone tendue (grandes agglomérations), 2) Mutation professionnelle, 3) Perte d\'emploi involontaire, 4) Motif de santé avec certificat médical, 5) Attribution logement social.',
        },
        {
          id: 'a2-lo-02-ex18',
          type: 'qcm',
          question: '"Puisque" s\'utilise pour une cause qui est...',
          options: [
            'Inconnue',
            'Évidente et déjà connue des deux interlocuteurs',
            'Très importante',
            'À venir',
          ],
          correctIndex: 1,
          explanation: '"Puisque" introduit une cause évidente ou admise. "PUISQUE vous partez, faites un état des lieux" = since (given that) you\'re leaving. La cause "vous partez" est connue/évidente. Différent de "parce que" qui introduit une cause nouvelle.',
        },
        {
          id: 'a2-lo-02-ex19',
          type: 'qcm',
          question: 'Que doit vérifier le locataire lors de l\'état des lieux d\'entrée ?',
          options: [
            'Uniquement les grandes pièces',
            'L\'état de toutes les pièces, équipements, murs, sols, plafonds',
            'Seulement les appareils électriques',
            'Le compteur d\'électricité uniquement',
          ],
          correctIndex: 1,
          explanation: 'L\'état des lieux d\'entrée doit être minutieux : toutes les pièces, murs, sols, plafonds, fenêtres, équipements (robinets, chaudière, volets...). Notez tout défaut existant. Si vous ne le signalez pas, vous pouvez être tenu responsable à la sortie.',
        },
        {
          id: 'a2-lo-02-ex20',
          type: 'qcm',
          question: 'Quand le propriétaire peut-il déduire des sommes du dépôt de garantie ?',
          options: [
            'Jamais, il doit toujours tout rendre',
            'Uniquement si le locataire part avant la fin du bail',
            'Si le logement est plus dégradé à la sortie qu\'à l\'entrée',
            'Si le locataire n\'a pas payé une seule mensualité',
          ],
          correctIndex: 2,
          explanation: 'Le propriétaire peut déduire du dépôt le montant des réparations nécessaires suite à des dégradations imputables au locataire (constatées en comparant les états des lieux d\'entrée et de sortie). Il doit fournir des devis ou factures.',
        },
      ],
    },

    {
      id: 'a2-lo-03',
      slug: 'a2-charges-factures',
      moduleSlug: 'a2-logement',
      level: 'A2',
      title: 'Les charges et les factures',
      description: 'Comprenez et gérez vos factures d\'énergie, d\'eau et les charges de copropriété.',
      duration: 35,
      free: false,
      dialogue: `## Dialogue : Problème de facture EDF

*Samia reçoit une facture d'électricité très élevée et appelle EDF.*

**Service client EDF :** EDF, bonjour. Quel est votre numéro de client ?

**Samia :** Bonjour. Mon numéro est le 4782901. J'ai reçu une facture de 380 euros pour 2 mois, c'est beaucoup plus que d'habitude.

**Agent :** Oui, je vois votre compte. Votre dernière facture était de combien ?

**Samia :** En général je paie environ 80 euros par mois. Donc 160 euros pour 2 mois. Là c'est le double.

**Agent :** Je comprends votre inquiétude. Est-ce que vous avez vérifié votre compteur électrique ? La facture peut être basée sur une estimation.

**Samia :** Comment je fais pour vérifier ?

**Agent :** Le compteur se trouve généralement dans l'entrée de votre appartement ou dans un placard. Vous avez un compteur Linky ?

**Samia :** Oui, j'ai un compteur moderne, il y a un petit écran.

**Agent :** Parfait. Pouvez-vous me lire les chiffres sur l'écran ? C'est le chiffre en kWh.

**Samia :** Il affiche 15 847.

**Agent :** Merci. Selon notre système, la consommation réelle pour cette période est de 620 kWh. Avec votre tarif Bleu, ça correspond bien à environ 380 euros. La facture est correcte.

**Samia :** Ah... Peut-être que j'ai utilisé plus de chauffage cet hiver.

**Agent :** Probablement. Je vous conseille d'utiliser notre application pour suivre votre consommation en temps réel.`,

      linguisticPoint: `## Point linguistique : Comparer et exprimer une différence

### Structures de comparaison
| Sens | Structure | Exemple |
|---|---|---|
| Plus que | **plus + adj/adv + que** | C\'est plus cher que d\'habitude |
| Moins que | **moins + adj/adv + que** | C\'est moins cher que prévu |
| Aussi que | **aussi + adj/adv + que** | C\'est aussi cher qu\'avant |
| Plus de | **plus de + nom + que** | J\'ai plus de charges ce mois |
| Le double de | **le double de** | C\'est le double du montant normal |

### Irréguliers importants
- bon → **meilleur** (pas "plus bon")
- mauvais → **pire** (pas "plus mauvais")
- bien → **mieux** (pas "plus bien")

### Vocabulaire des factures et de l'énergie
- **kWh** = kilowattheure (unité de consommation électrique)
- **Compteur** = appareil qui mesure la consommation
- **Estimation** = calcul approximatif (vs relevé réel)
- **Tarif Bleu** = tarif EDF pour les particuliers
- **Abonnement** = part fixe de la facture (indépendante de la consommation)
- **Consommation** = quantité d\'énergie utilisée`,

      keyPoints: [
        'Comparatif : plus/moins/aussi + adjectif + que',
        'Irréguliers : bon → meilleur / mauvais → pire / bien → mieux',
        'Facture EDF = abonnement (fixe) + consommation (variable)',
        'kWh = unité de mesure de l\'électricité',
        'Compteur Linky = compteur électrique communicant moderne',
      ],

      exercises: [
        {
          id: 'a2-lo-03-ex01',
          type: 'qcm',
          question: 'Quelle est la facture habituelle de Samia par mois ?',
          options: ['60€', '80€', '100€', '190€'],
          correctIndex: 1,
          explanation: 'Samia dit "en général je paie environ 80 euros par mois". La facture reçue est de 380€ pour 2 mois, soit 190€/mois — plus du double du montant habituel.',
        },
        {
          id: 'a2-lo-03-ex02',
          type: 'qcm',
          question: 'Que signifie "kWh" ?',
          options: ['Kilowattheure — unité de consommation d\'énergie', 'Kilomètres par heure', 'Kilogrammes par heure', 'Kilowatts par heure'],
          correctIndex: 0,
          explanation: 'kWh = kilowattheure. C\'est l\'unité standard pour mesurer la consommation d\'électricité. Un appareil de 1 000 watts (1 kW) consommé pendant 1 heure = 1 kWh. Les factures EDF indiquent le nombre de kWh consommés.',
        },
        {
          id: 'a2-lo-03-ex03',
          type: 'qcm',
          question: 'Quelle structure comparative utilise-t-on pour "more expensive than" ?',
          options: ['Plus cher comme', 'Plus cher que', 'Plus que cher', 'Très cher que'],
          correctIndex: 1,
          explanation: '"Plus + adjectif + QUE" = more + adjective + than. "C\'est PLUS CHER QUE d\'habitude" = it\'s more expensive than usual. Rappel : "bon" → "MEILLEUR QUE" (pas "plus bon que").',
        },
        {
          id: 'a2-lo-03-ex04',
          type: 'qcm',
          question: 'Quel est le comparatif irrégulier de "bon" ?',
          options: ['Plus bon', 'Mieux', 'Meilleur', 'Supérieur'],
          correctIndex: 2,
          explanation: '"Bon" → comparatif = "MEILLEUR(E)(S)" (pas "plus bon"). Exemples : ce restaurant est MEILLEUR que l\'autre / la situation est MEILLEURE. "Mieux" est le comparatif de "bien" (adverbe).',
        },
        {
          id: 'a2-lo-03-ex05',
          type: 'qcm',
          question: 'Que signifie une facture "basée sur une estimation" ?',
          options: [
            'La facture est exacte',
            'EDF a estimé votre consommation sans relever le compteur réellement',
            'Vous payez trop peu',
            'La facture est calculée par un algorithme',
          ],
          correctIndex: 1,
          explanation: 'Parfois, EDF estime la consommation (sans relevé réel du compteur) basée sur votre historique. L\'estimation peut être inexacte. Avec les compteurs Linky, les relevés sont automatiques et plus précis.',
        },
        {
          id: 'a2-lo-03-ex06',
          type: 'qcm',
          question: 'La facture de Samia est le double du montant normal. Comment dit-on ça ?',
          options: [
            'C\'est deux fois plus que d\'habitude',
            'C\'est le double de d\'habitude',
            'Les deux réponses sont correctes',
            'C\'est très plus que d\'habitude',
          ],
          correctIndex: 2,
          explanation: '"C\'est le double" et "c\'est deux fois plus" sont deux façons correctes d\'exprimer le même rapport. 80€/mois × 2 = 160€. Samia paie 190€, soit "presque le double".',
        },
        {
          id: 'a2-lo-03-ex07',
          type: 'qcm',
          question: 'Qu\'est-ce que le "compteur Linky" ?',
          options: [
            'Un ancien type de compteur électrique',
            'Un compteur électrique communicant moderne qui transmet les données automatiquement',
            'Un compteur de gaz',
            'Un compteur d\'eau',
          ],
          correctIndex: 1,
          explanation: 'Le compteur Linky est le compteur électrique communicant déployé en France depuis 2015. Il transmet automatiquement les données de consommation à EDF (pas besoin de relevé manuel). Il affiche aussi la consommation en temps réel.',
        },
        {
          id: 'a2-lo-03-ex08',
          type: 'qcm',
          question: 'Quel est le comparatif irrégulier de "mauvais" ?',
          options: ['Plus mauvais', 'Moins bon', 'Pire', 'Défavorable'],
          correctIndex: 2,
          explanation: '"Mauvais" → comparatif = "PIRE" (worst/worse). "La situation est PIRE qu\'avant." "Plus mauvais" n\'est pas correct. Attention : en langue familière, on entend parfois "plus mauvais" mais c\'est incorrect.',
        },
        {
          id: 'a2-lo-03-ex09',
          type: 'qcm',
          question: 'Que comprend une facture d\'électricité EDF ?',
          options: [
            'Uniquement la consommation variable',
            'Un abonnement fixe + la consommation variable en kWh',
            'Uniquement l\'abonnement mensuel',
            'Le loyer + l\'électricité',
          ],
          correctIndex: 1,
          explanation: 'Une facture EDF comprend deux parties : 1) l\'abonnement (part fixe mensuelle, indépendante de la consommation), 2) la consommation (part variable, en kWh × prix du kWh). Plus vous consommez, plus la partie variable est élevée.',
        },
        {
          id: 'a2-lo-03-ex10',
          type: 'qcm',
          question: 'Pourquoi la facture de Samia est-elle plus élevée cet hiver ?',
          options: [
            'EDF a augmenté ses tarifs',
            'Elle a probablement utilisé plus de chauffage',
            'Sa facture était sous-estimée avant',
            'Elle a eu des invités',
          ],
          correctIndex: 1,
          explanation: 'Samia dit "peut-être que j\'ai utilisé plus de chauffage cet hiver". Le chauffage électrique est très consommateur d\'énergie. La consommation d\'électricité est naturellement plus élevée en hiver (chauffage + moins de lumière naturelle).',
        },
        {
          id: 'a2-lo-03-ex11',
          type: 'qcm',
          question: 'Comment dit-on "less expensive than" ?',
          options: ['Moins cher comme', 'Pas cher que', 'Moins cher que', 'Plus bas que'],
          correctIndex: 2,
          explanation: '"Moins + adjectif + que" = less + adjective + than. "C\'est MOINS CHER QUE l\'autre offre" = it\'s less expensive than the other offer.',
        },
        {
          id: 'a2-lo-03-ex12',
          type: 'qcm',
          question: 'Où se trouve généralement le compteur électrique dans un appartement ?',
          options: [
            'Dans la cuisine',
            'Dans la salle de bain',
            'Dans l\'entrée ou dans un placard',
            'Sur le balcon',
          ],
          correctIndex: 2,
          explanation: 'L\'agent dit : "Le compteur se trouve généralement dans l\'entrée de votre appartement ou dans un placard." Dans les immeubles récents, les compteurs sont souvent dans un local technique au sous-sol ou au rez-de-chaussée.',
        },
        {
          id: 'a2-lo-03-ex13',
          type: 'qcm',
          question: 'Quel est le comparatif irrégulier de "bien" (adverbe) ?',
          options: ['Plus bien', 'Meilleur', 'Mieux', 'Supérieurement'],
          correctIndex: 2,
          explanation: '"Bien" (adverbe) → comparatif = "MIEUX". "Je comprends MIEUX maintenant" = I understand better now. Attention : "meilleur" est le comparatif de "bon" (adjectif), "mieux" est le comparatif de "bien" (adverbe).',
        },
        {
          id: 'a2-lo-03-ex14',
          type: 'qcm',
          question: 'Que fait l\'application EDF selon l\'agent ?',
          options: [
            'Elle permet de payer en ligne',
            'Elle permet de suivre sa consommation en temps réel',
            'Elle permet de contacter le service client',
            'Elle permet de changer d\'offre tarifaire',
          ],
          correctIndex: 1,
          explanation: 'L\'agent dit : "Je vous conseille d\'utiliser notre application pour suivre votre consommation en temps réel." Les applications d\'EDF et des fournisseurs d\'énergie permettent de voir sa consommation en direct et d\'identifier les gros postes de dépenses.',
        },
        {
          id: 'a2-lo-03-ex15',
          type: 'qcm',
          question: 'Comment demande-t-on poliment un avis ou une suggestion à quelqu\'un ?',
          options: [
            '"Qu\'est-ce que tu penses ?"',
            '"Vous me conseillez quoi ?"',
            '"Je vous conseille de + infinitif" (pour donner un conseil)',
            '"Qu\'est-ce que vous conseillez ?" (pour demander un conseil)',
          ],
          correctIndex: 3,
          explanation: 'Pour DEMANDER un conseil : "Qu\'est-ce que vous me conseillez ?" ou "Vous me conseillez quoi ?" Pour DONNER un conseil : "Je vous conseille de + infinitif". L\'agent dit "Je vous conseille d\'utiliser notre application."',
        },
        {
          id: 'a2-lo-03-ex16',
          type: 'qcm',
          question: 'Que signifie "en temps réel" ?',
          options: [
            'Au bon moment',
            'Dans le temps imparti',
            'Immédiatement, sans délai, au moment où ça se passe',
            'En temps normal',
          ],
          correctIndex: 2,
          explanation: '"En temps réel" = in real time. Les données sont disponibles immédiatement, au moment où elles sont générées. Opposé à "en différé" (with a delay). L\'appli EDF montre la consommation en temps réel = à l\'instant même.',
        },
        {
          id: 'a2-lo-03-ex17',
          type: 'qcm',
          question: '"Plus de charges que le mois dernier" utilise quelle structure ?',
          options: ['Plus + adjectif + que', 'Plus de + nom + que', 'Autant de + nom + que', 'Plus + adverbe + que'],
          correctIndex: 1,
          explanation: '"Plus DE + nom + QUE" s\'utilise pour les noms (quantities). "PLUS DE charges QUE le mois dernier". À ne pas confondre avec "plus + adj + que" pour les adjectifs.',
        },
        {
          id: 'a2-lo-03-ex18',
          type: 'qcm',
          question: 'Que signifie "Selon notre système" ?',
          options: [
            'D\'après nos calculs / Selon ce que nous voyons dans nos données',
            'Notre opinion personnelle',
            'Selon la loi',
            'D\'après votre interprétation',
          ],
          correctIndex: 0,
          explanation: '"Selon + source" = according to. "Selon notre système" = d\'après nos données informatiques. "Selon la loi" = according to the law. "Selon vous" = in your opinion.',
        },
        {
          id: 'a2-lo-03-ex19',
          type: 'qcm',
          question: 'Samia dit "c\'est beaucoup plus que d\'habitude." Quel est le sens de "d\'habitude" ?',
          options: ['Hier', 'Normalement / en temps normal', 'Parfois', 'Avant'],
          correctIndex: 1,
          explanation: '"D\'habitude" = habituellement = normalement = usually/normally. "C\'est plus que d\'habitude" = it\'s more than usual. Synonymes : "généralement", "en général", "normalement".',
        },
        {
          id: 'a2-lo-03-ex20',
          type: 'qcm',
          question: 'Comment dit-on "as expensive as before" en français ?',
          options: ['Plus cher qu\'avant', 'Aussi cher qu\'avant', 'Moins cher qu\'avant', 'Trop cher qu\'avant'],
          correctIndex: 1,
          explanation: '"Aussi + adjectif + que" exprime l\'égalité dans la comparaison. "AUSSI CHER QU\'avant" = as expensive as before. Les trois degrés : plus cher que (>) / aussi cher que (=) / moins cher que (<).',
        },
      ],
    },

    {
      id: 'a2-lo-04',
      slug: 'a2-voisinage',
      moduleSlug: 'a2-logement',
      level: 'A2',
      title: 'Le voisinage et la vie en collectif',
      description: 'Gérez les relations de voisinage, comprenez les règles de l\'immeuble et résolvez les conflits.',
      duration: 35,
      free: false,
      dialogue: `## Dialogue : Conflit de voisinage

*Leila a un problème avec son voisin du dessus. Elle en parle au gardien de l'immeuble.*

**Leila :** Bonjour monsieur. Je voudrais vous parler d'un problème.

**Gardien :** Bien sûr, qu'est-ce qui se passe ?

**Leila :** Mon voisin du dessus fait beaucoup de bruit le soir. Il y a de la musique forte jusqu'à minuit passé. Et la nuit dernière, il y avait une fête avec des gens qui marchaient dans tous les sens jusqu'à 2h du matin.

**Gardien :** Je comprends, c'est un problème de troubles du voisinage. Est-ce que vous lui avez parlé directement ?

**Leila :** Oui, une fois. Il m'a dit qu'il ferait attention, mais ça continue.

**Gardien :** Dans ce cas, vous pouvez déposer une main courante au commissariat. C'est un enregistrement officiel de votre plainte, sans procédure judiciaire.

**Leila :** Qu'est-ce que ça change concrètement ?

**Gardien :** Ça crée une trace officielle. Si le problème continue, vous pourrez faire une vraie plainte. En parallèle, je vais envoyer un courrier officiel au locataire pour lui rappeler les règles.

**Leila :** Et les heures légales pour faire du bruit ?

**Gardien :** En France, les nuisances sonores nocturnes sont interdites entre 22h et 7h en semaine. Le week-end, c'est plus toléré jusqu'à 23h. Mais "plus toléré" ne veut pas dire légal — ça dépend de l'intensité.`,

      linguisticPoint: `## Point linguistique : Rapporter des paroles (discours indirect)

### Structure du discours indirect
**Citation directe → Discours indirect**
- "Je ferai attention" → Il **a dit qu\'**il **ferait** attention
- "Je pars demain" → Elle **a dit qu\'**elle **partait** le lendemain
- "Pouvez-vous m\'aider ?" → Il **a demandé si** je **pouvais** l\'aider

### Changements au discours indirect (passé)
| Temps direct | Temps indirect |
|---|---|
| Présent → | Imparfait |
| Futur simple → | Conditionnel présent |
| Passé composé → | Plus-que-parfait |

### Verbes introducteurs
- **dire que** : Il a dit que c\'était bruyant
- **demander si** (question oui/non) : Elle a demandé si c\'était légal
- **demander + infinitif** (demande d\'action) : Le gardien a demandé de baisser le son
- **expliquer que** : Il a expliqué qu\'il y avait un problème`,

      keyPoints: [
        'Discours indirect : il a dit QUE + proposition',
        'Présent → imparfait / futur → conditionnel au discours indirect',
        'Nuisances sonores nocturnes interdites : 22h-7h en semaine',
        'Main courante = dépôt officiel de plainte sans procédure judiciaire',
        '"Troubles du voisinage" = terme officiel pour les nuisances',
      ],

      exercises: [
        {
          id: 'a2-lo-04-ex01',
          type: 'qcm',
          question: 'Quel est le problème de Leila avec son voisin ?',
          options: [
            'Il ne paie pas ses charges',
            'Il fait trop de bruit jusqu\'à tard la nuit',
            'Il occupe sa place de parking',
            'Il a un chien qui aboie',
          ],
          correctIndex: 1,
          explanation: 'Leila se plaint que son voisin "fait beaucoup de bruit le soir" avec "de la musique forte jusqu\'à minuit passé" et "une fête jusqu\'à 2h du matin". C\'est un cas classique de "troubles du voisinage".',
        },
        {
          id: 'a2-lo-04-ex02',
          type: 'qcm',
          question: 'À partir de quelle heure les nuisances sonores sont-elles interdites la nuit en semaine ?',
          options: ['21h', '22h', '23h', 'Minuit'],
          correctIndex: 1,
          explanation: 'Le gardien explique : "les nuisances sonores nocturnes sont interdites entre 22h et 7h en semaine." Ces plages horaires sont définies par la loi. Le dépassement peut constituer un trouble du voisinage.',
        },
        {
          id: 'a2-lo-04-ex03',
          type: 'transformation',
          question: 'Mettez au discours indirect : Il dit "Je ferai attention." → Il a dit qu\'il...',
          options: [
            'a dit qu\'il fera attention',
            'a dit qu\'il ferait attention',
            'a dit qu\'il fait attention',
            'a dit qu\'il faisait attention',
          ],
          correctIndex: 1,
          explanation: 'Au discours indirect (passé), le futur simple devient conditionnel présent : "je ferai" → "il ferait". "Il a dit qu\'il FERAIT attention" = He said he WOULD be careful.',
        },
        {
          id: 'a2-lo-04-ex04',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une "main courante" ?',
          options: [
            'La rampe d\'un escalier',
            'Un enregistrement officiel d\'une plainte au commissariat sans procédure judiciaire',
            'Un courrier recommandé',
            'Un procès-verbal',
          ],
          correctIndex: 1,
          explanation: 'Une main courante = un enregistrement officiel de votre signalement au commissariat ou à la gendarmerie, sans que cela déclenche automatiquement une procédure judiciaire. Elle crée une trace officielle.',
        },
        {
          id: 'a2-lo-04-ex05',
          type: 'qcm',
          question: 'Leila avait-elle déjà parlé à son voisin ?',
          options: [
            'Non, c\'est la première fois qu\'elle signale le problème',
            'Oui, une fois, mais le problème a continué',
            'Oui, plusieurs fois sans résultat',
            'Non, elle a préféré aller directement au gardien',
          ],
          correctIndex: 1,
          explanation: 'Leila dit : "Oui, une fois. Il m\'a dit qu\'il ferait attention, mais ça continue." Elle a essayé une fois sans succès. Le gardien lui suggère donc la prochaine étape : la main courante.',
        },
        {
          id: 'a2-lo-04-ex06',
          type: 'transformation',
          question: 'Discours indirect : Il dit "C\'est bruyant." → Il a dit que c\'...',
          options: [
            'Il a dit que c\'est bruyant',
            'Il a dit que c\'était bruyant',
            'Il a dit que c\'sera bruyant',
            'Il a dit que c\'serait bruyant',
          ],
          correctIndex: 1,
          explanation: 'Au discours indirect passé, le présent devient imparfait. "C\'EST bruyant" → "que c\'ÉTAIT bruyant". Le temps recule d\'un cran dans le passé.',
        },
        {
          id: 'a2-lo-04-ex07',
          type: 'qcm',
          question: 'Que va faire le gardien pour aider Leila ?',
          options: [
            'Appeler la police',
            'Envoyer un courrier officiel au voisin',
            'Résilier le bail du voisin',
            'Contacter le propriétaire',
          ],
          correctIndex: 1,
          explanation: 'Le gardien dit : "je vais envoyer un courrier officiel au locataire pour lui rappeler les règles." C\'est une démarche intermédiaire entre la discussion directe et la plainte officielle.',
        },
        {
          id: 'a2-lo-04-ex08',
          type: 'qcm',
          question: 'Que signifie "troubles du voisinage" ?',
          options: [
            'Des problèmes mentaux des voisins',
            'Des nuisances causées par un voisin (bruit, odeurs, incivilités)',
            'Des travaux de rénovation',
            'Des animaux domestiques',
          ],
          correctIndex: 1,
          explanation: '"Troubles du voisinage" est le terme juridique pour les nuisances causées par un voisin : bruit excessif, odeurs, vibrations, etc. Ces troubles peuvent faire l\'objet d\'une procédure juridique s\'ils sont excessifs et répétés.',
        },
        {
          id: 'a2-lo-04-ex09',
          type: 'qcm',
          question: 'Quel verbe introducteur utilise-t-on pour rapporter une question oui/non ?',
          options: ['Dire que', 'Demander si', 'Expliquer que', 'Confirmer que'],
          correctIndex: 1,
          explanation: 'Pour rapporter une question oui/non : "demander SI". "Est-ce légal ?" → "Il a demandé SI c\'était légal." Pour une question avec un mot interrogatif : "Il a demandé QUAND / OÙ / COMMENT..." (pas de "si").',
        },
        {
          id: 'a2-lo-04-ex10',
          type: 'qcm',
          question: 'Que signifie "ça crée une trace" dans ce contexte ?',
          options: [
            'On fait une marque sur un document',
            'Il y a une preuve officielle écrite que le problème a été signalé',
            'On laisse des traces de pas',
            'On écrit dans un cahier privé',
          ],
          correctIndex: 1,
          explanation: '"Créer une trace officielle" = avoir un document officiel prouvant qu\'un problème a été signalé à une date donnée. Si le problème recommence, cette trace peut servir de preuve pour une plainte formelle.',
        },
        {
          id: 'a2-lo-04-ex11',
          type: 'qcm',
          question: 'Comment appelle-t-on la personne qui entretient et surveille un immeuble ?',
          options: ['Le concierge / le gardien', 'Le gestionnaire', 'Le syndic', 'Le gardien de nuit'],
          correctIndex: 0,
          explanation: 'Le gardien (ou le concierge dans l\'usage plus ancien) s\'occupe de l\'entretien de l\'immeuble, gère les problèmes courants des locataires, distribue le courrier dans les grands immeubles. Le syndic est la société qui gère la copropriété.',
        },
        {
          id: 'a2-lo-04-ex12',
          type: 'qcm',
          question: 'Discours indirect : Il dit "Partez maintenant !" → Il a demandé de...',
          options: [
            'Il a demandé si on partait maintenant',
            'Il a demandé de partir tout de suite',
            'Il a demandé que partez maintenant',
            'Il a dit qu\'on partirait maintenant',
          ],
          correctIndex: 1,
          explanation: 'Pour rapporter un ordre ou une demande : "demander de + infinitif". "Partez maintenant !" → "Il a demandé DE PARTIR tout de suite." Pas de changement de temps car infinitif.',
        },
        {
          id: 'a2-lo-04-ex13',
          type: 'qcm',
          question: 'Que signifie "nocturne" ?',
          options: ['Qui se passe le matin', 'Qui se passe la nuit', 'Qui se passe le week-end', 'Qui dure longtemps'],
          correctIndex: 1,
          explanation: '"Nocturne" = qui appartient à la nuit, qui se passe la nuit. "Nuisances sonores nocturnes" = bruits excessifs pendant la nuit. Antonyme : "diurne" (qui se passe le jour).',
        },
        {
          id: 'a2-lo-04-ex14',
          type: 'qcm',
          question: 'La musique forte jusqu\'à "minuit passé" signifie :',
          options: [
            'Avant minuit',
            'Exactement à minuit',
            'Après minuit',
            'Vers minuit',
          ],
          correctIndex: 2,
          explanation: '"Minuit passé" = after midnight = après minuit. "Passé" dans ce contexte = après. "Il est midi passé" = il est après midi. "Trois heures passées" = il est plus de 3 heures.',
        },
        {
          id: 'a2-lo-04-ex15',
          type: 'qcm',
          question: 'Que signifie "en parallèle" dans "en parallèle, je vais envoyer un courrier" ?',
          options: [
            'En conséquence',
            'En même temps / simultanément',
            'Avant cela',
            'Au lieu de ça',
          ],
          correctIndex: 1,
          explanation: '"En parallèle" = simultaneously / at the same time. Le gardien dit qu\'en même temps que Leila fait sa main courante, il enverra un courrier au voisin. Les deux actions se déroulent simultanément.',
        },
        {
          id: 'a2-lo-04-ex16',
          type: 'qcm',
          question: 'Quel est le premier conseil du gardien à Leila ?',
          options: [
            'Appeler la police directement',
            'Déposer une main courante au commissariat',
            'Contacter un avocat',
            'Ignorer le problème',
          ],
          correctIndex: 1,
          explanation: 'Le gardien conseille de "déposer une main courante au commissariat." C\'est une étape préliminaire avant une plainte formelle. Elle permet d\'officialiser le problème sans démarche judiciaire lourde.',
        },
        {
          id: 'a2-lo-04-ex17',
          type: 'qcm',
          question: 'Comment rapporte-t-on "Elle demande : Pouvez-vous m\'aider ?" ?',
          options: [
            'Elle a demandé qu\'il pouvait l\'aider',
            'Elle a demandé s\'il pouvait l\'aider',
            'Elle a dit s\'il pouvait l\'aider',
            'Elle a demandé il peut l\'aider',
          ],
          correctIndex: 1,
          explanation: 'Question oui/non : "Pouvez-vous m\'aider ?" → discours indirect → "Elle a demandé S\'IL POUVAIT l\'aider." Le "si" remplace "est-ce que / inversion", et "pouvez" (présent) devient "pouvait" (imparfait).',
        },
        {
          id: 'a2-lo-04-ex18',
          type: 'qcm',
          question: 'Que signifie "dans tous les sens" pour les gens qui marchent ?',
          options: [
            'Avec beaucoup de sens',
            'Partout, sans direction précise, dans le désordre',
            'Très lentement',
            'En ligne droite',
          ],
          correctIndex: 1,
          explanation: '"Dans tous les sens" = dans toutes les directions, partout, de manière désordonnée. Leila décrit une fête où les gens marchaient partout dans l\'appartement, créant du bruit en se déplaçant en tous sens.',
        },
        {
          id: 'a2-lo-04-ex19',
          type: 'qcm',
          question: 'Que signifie "concrètement" dans "qu\'est-ce que ça change concrètement ?" ?',
          options: [
            'En théorie',
            'Dans la pratique / de façon tangible et réelle',
            'Très rapidement',
            'Officiellement',
          ],
          correctIndex: 1,
          explanation: '"Concrètement" = in practical terms / in practice / concretely. Leila demande l\'impact pratique de la main courante. C\'est une question pragmatique : "qu\'est-ce que ça change pour moi dans la réalité ?"',
        },
        {
          id: 'a2-lo-04-ex20',
          type: 'qcm',
          question: 'Le gardien dit "ça dépend de l\'intensité". Que veut-il dire ?',
          options: [
            'La durée est importante',
            'Le volume sonore détermine si c\'est légal ou non',
            'Le type de musique est important',
            'L\'heure est la seule chose qui compte',
          ],
          correctIndex: 1,
          explanation: '"L\'intensité" = le volume / la force du bruit. Le gardien précise que même le week-end, ce n\'est "pas légal" si le bruit est trop fort. L\'intensité sonore en décibels (dB) détermine si c\'est une nuisance légalement répréhensible.',
        },
      ],
    },

    {
      id: 'a2-lo-05',
      slug: 'a2-reparations-entretien',
      moduleSlug: 'a2-logement',
      level: 'A2',
      title: 'Les réparations et l\'entretien',
      description: 'Signalez des pannes, communiquez avec des artisans et gérez les réparations de votre logement.',
      duration: 35,
      free: false,
      dialogue: `## Dialogue : Fuite d'eau

*Malika a une fuite d'eau dans la salle de bain. Elle appelle son propriétaire.*

**Malika :** Allô, monsieur Girard ? C'est Malika Bouteldja, de l'appartement du 3ème gauche.

**Propriétaire :** Ah bonjour madame Bouteldja. Qu'est-ce qui se passe ?

**Malika :** Il y a une fuite d'eau sous le lavabo depuis ce matin. Il y a de l'eau partout sur le carrelage. J'ai mis une serviette pour absorber l'eau mais c'est urgent.

**Propriétaire :** D'accord, je comprends. Avez-vous coupé l'arrivée d'eau ?

**Malika :** Euh... non. Je ne sais pas où c'est.

**Propriétaire :** Sous votre lavabo, il y a un robinet d'arrêt — c'est une petite vanne. Tournez-la vers la droite pour couper l'eau.

**Malika :** *(après quelques secondes)* Voilà, c'est fait. L'eau ne coule plus.

**Propriétaire :** Très bien. Je vais appeler le plombier maintenant. Il devrait pouvoir passer aujourd'hui ou demain matin au plus tard.

**Malika :** Est-ce que c'est moi qui dois payer ?

**Propriétaire :** Non, pour une fuite sur une canalisation fixe, c'est à ma charge. Mais si c'est un joint usé que vous avez négligé pendant longtemps, ça pourrait être partagé. On verra ce que dit le plombier.

**Malika :** D'accord. Vous pouvez lui donner mon numéro pour qu'il me contacte directement ?

**Propriétaire :** Bien sûr, je le préviens.`,

      linguisticPoint: `## Point linguistique : Le conditionnel présent — politesse et hypothèse

### Formation du conditionnel présent
**Base futur + terminaisons de l'imparfait**
| Pronom | Terminaison | Exemple (pouvoir) |
|---|---|---|
| Je | **-ais** | je pourrais |
| Tu | **-ais** | tu pourrais |
| Il/Elle | **-ait** | il pourrait |
| Nous | **-ions** | nous pourrions |
| Vous | **-iez** | vous pourriez |
| Ils | **-aient** | ils pourraient |

### Usages du conditionnel
1. **Politesse :** "Je voudrais parler au responsable" (moins direct que "je veux")
2. **Hypothèse :** "Si j\'avais de l\'argent, j\'achèterais un appartement"
3. **Information non vérifiée :** "Il y aurait une fuite au 3ème étage"
4. **Conseil :** "Vous devriez couper l\'eau immédiatement"

### Vocabulaire de la plomberie
- **La fuite** = water leak
- **Le plombier** = plumber
- **Le robinet** = tap/faucet
- **La canalisation** = water pipe
- **Le joint** = seal/washer
- **Le lavabo** = washbasin
- **Couper l\'eau** = to turn off the water`,

      keyPoints: [
        'Conditionnel : base futur + terminaisons imparfait (-ais/-ais/-ait/-ions/-iez/-aient)',
        'Conditionnel = politesse ("je voudrais"), hypothèse, conseil ("vous devriez")',
        'Réparation locative : grosses réparations → propriétaire / petites → locataire',
        'Fuite sur canalisation fixe = responsabilité du propriétaire',
        'Robinet d\'arrêt = vanne pour couper l\'eau localement',
      ],

      exercises: [
        {
          id: 'a2-lo-05-ex01',
          type: 'qcm',
          question: 'Quel est le problème dans l\'appartement de Malika ?',
          options: [
            'Une panne d\'électricité',
            'Une fuite d\'eau sous le lavabo',
            'Un problème de chauffage',
            'Une fenêtre cassée',
          ],
          correctIndex: 1,
          explanation: 'Malika dit "Il y a une fuite d\'eau sous le lavabo depuis ce matin." Une fuite d\'eau est une urgence car elle peut causer des dégâts importants (dégâts des eaux au voisin du dessous).',
        },
        {
          id: 'a2-lo-05-ex02',
          type: 'conjugaison',
          question: 'Conjuguez "pouvoir" au conditionnel présent : "Il ___ passer aujourd\'hui."',
          options: ['peut', 'pourrait', 'pouvait', 'pourra'],
          correctIndex: 1,
          explanation: '"Pouvoir" au conditionnel : je pourrais / tu pourrais / IL POURRAIT / nous pourrions / vous pourriez / ils pourraient. Le propriétaire dit "Il devrait pouvoir passer" = conditionnel d\'hypothèse.',
        },
        {
          id: 'a2-lo-05-ex03',
          type: 'qcm',
          question: 'Qui est responsable d\'une fuite sur une "canalisation fixe" ?',
          options: ['Le locataire', 'L\'assurance', 'Le propriétaire', 'La copropriété'],
          correctIndex: 2,
          explanation: 'Le propriétaire dit : "pour une fuite sur une canalisation fixe, c\'est à ma charge." Les grosses réparations (plomberie encastrée, chaudière, toiture...) sont à la charge du propriétaire.',
        },
        {
          id: 'a2-lo-05-ex04',
          type: 'qcm',
          question: 'Quel est le premier réflexe en cas de fuite d\'eau ?',
          options: [
            'Appeler les pompiers',
            'Prendre des photos',
            'Couper l\'arrivée d\'eau',
            'Contacter l\'assurance',
          ],
          correctIndex: 2,
          explanation: 'Le premier réflexe est de "couper l\'arrivée d\'eau" via le robinet d\'arrêt. Cela stoppe la fuite immédiatement et limite les dégâts. Ensuite on appelle le propriétaire / le plombier.',
        },
        {
          id: 'a2-lo-05-ex05',
          type: 'qcm',
          question: 'Malika dit "je l\'ai prévenu". Que signifie "prévenir" ici ?',
          options: [
            'Avertir / informer quelqu\'un à l\'avance',
            'Éviter un problème',
            'Appeler la police',
            'Payer à l\'avance',
          ],
          correctIndex: 0,
          explanation: '"Prévenir" = informer quelqu\'un d\'une situation à venir. Le propriétaire va "prévenir" le plombier = lui dire qu\'il y a une fuite et qu\'il doit venir. À ne pas confondre avec "prévenir" dans le sens de "éviter" (to prevent).',
        },
        {
          id: 'a2-lo-05-ex06',
          type: 'conjugaison',
          question: 'Conditionnel : "Vous ___ appeler un plombier." (devoir)',
          options: ['deviez', 'devriez', 'devez', 'devrait'],
          correctIndex: 1,
          explanation: '"Devoir" au conditionnel : je devrais / tu devrais / il devrait / nous devrions / VOUS DEVRIEZ / ils devraient. Base irrégulière "devr-" + terminaisons conditionnelles.',
        },
        {
          id: 'a2-lo-05-ex07',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un "robinet d\'arrêt" ?',
          options: [
            'Un robinet de cuisine',
            'Une vanne qui permet de couper l\'eau d\'une installation',
            'Un robinet extérieur',
            'Un thermostat',
          ],
          correctIndex: 1,
          explanation: 'Un robinet d\'arrêt (ou vanne d\'arrêt) est un dispositif qui coupe l\'alimentation en eau d\'une installation spécifique (lavabo, toilettes, machine à laver). On le tourne vers la droite pour fermer (couper l\'eau).',
        },
        {
          id: 'a2-lo-05-ex08',
          type: 'qcm',
          question: 'Quel usage du conditionnel exprime une politesse ?',
          options: [
            '"Je pourrais si j\'avais le temps"',
            '"Je voudrais un café, s\'il vous plaît"',
            '"Il viendrait demain selon les informations"',
            '"Il pourrait pleuvoir"',
          ],
          correctIndex: 1,
          explanation: '"Je voudrais" (conditionnel de vouloir) est utilisé pour faire une demande polie. C\'est plus doux que "je veux". En restaurant, à l\'administration, dans les commerces, on utilise "je voudrais" par politesse.',
        },
        {
          id: 'a2-lo-05-ex09',
          type: 'qcm',
          question: 'Que signifie "un joint usé" ?',
          options: [
            'Un nouveau joint',
            'Un joint étanche',
            'Un joint détérioré par l\'usure (trop vieux)',
            'Un joint en caoutchouc',
          ],
          correctIndex: 2,
          explanation: '"Usé" = worn out = détérioré par l\'usage ou le temps. Un joint (seal/gasket) usé ne fait plus son rôle d\'étanchéité et peut causer une fuite. Si le locataire n\'a pas signalé l\'usure progressive, il peut être tenu responsable.',
        },
        {
          id: 'a2-lo-05-ex10',
          type: 'qcm',
          question: 'Pour quelle raison Malika a-t-elle mis une serviette sur le carrelage ?',
          options: [
            'Pour éviter de glisser',
            'Pour absorber l\'eau de la fuite en attendant une solution',
            'Pour décorer la salle de bain',
            'Pour cacher le problème',
          ],
          correctIndex: 1,
          explanation: 'Malika dit "j\'ai mis une serviette pour absorber l\'eau." C\'est une mesure d\'urgence temporaire pour limiter les dégâts pendant qu\'elle attend la coupure d\'eau et le plombier. "Absorber" = to absorb.',
        },
        {
          id: 'a2-lo-05-ex11',
          type: 'qcm',
          question: 'Le propriétaire dit "on verra ce que dit le plombier". Que veut-il dire ?',
          options: [
            'Le plombier va décider qui doit payer',
            'Après le diagnostic du plombier, ils décideront de la responsabilité',
            'Le plombier paiera les réparations',
            'Ils ne savent pas encore si c\'est grave',
          ],
          correctIndex: 1,
          explanation: '"On verra ce que dit le plombier" = after the plumber\'s assessment, we\'ll decide. C\'est une formule qui reporte la décision après avoir obtenu un avis d\'expert (le plombier). Sage et pragmatique.',
        },
        {
          id: 'a2-lo-05-ex12',
          type: 'qcm',
          question: 'Que signifie "tourner vers la droite" pour couper l\'eau ?',
          options: [
            'Cela ouvre l\'eau',
            'Cela coupe / ferme l\'arrivée d\'eau',
            'Cela règle la pression',
            'Cela appelle le plombier',
          ],
          correctIndex: 1,
          explanation: 'Pour les robinets et vannes : tourner vers la droite (dans le sens des aiguilles d\'une montre) = FERMER/COUPER. Tourner vers la gauche = OUVRIR. Mnémotechnique : "Righty tighty, lefty loosey" (devise plombière universelle).',
        },
        {
          id: 'a2-lo-05-ex13',
          type: 'qcm',
          question: 'Comment appelle-t-on le professionnel qui répare les problèmes d\'eau ?',
          options: ['L\'électricien', 'Le maçon', 'Le plombier', 'Le serrurier'],
          correctIndex: 2,
          explanation: 'Le plombier est spécialiste de la plomberie (tuyauterie, robinets, WC, douche). Autres artisans : électricien (électricité), maçon (murs, béton), serrurier (serrures, portes), carreleur (carrelage), peintre.',
        },
        {
          id: 'a2-lo-05-ex14',
          type: 'conjugaison',
          question: 'Conditionnel de "avoir" : "Il ___ besoin d\'un plombier."',
          options: ['aurait', 'avait', 'aura', 'ait'],
          correctIndex: 0,
          explanation: '"Avoir" au conditionnel : j\'aurais / tu aurais / IL AURAIT / nous aurions / vous auriez / ils auraient. Base irrégulière "aur-" + terminaisons conditionnelles.',
        },
        {
          id: 'a2-lo-05-ex15',
          type: 'qcm',
          question: 'Comment Malika identifie-t-elle son appartement ?',
          options: [
            'Par son numéro de porte',
            '"L\'appartement du 3ème gauche"',
            'Par son numéro d\'immatriculation',
            'Par le numéro de sa boîte aux lettres',
          ],
          correctIndex: 1,
          explanation: 'Malika dit "l\'appartement du 3ème gauche" = l\'appartement au 3ème étage, côté gauche. En France, on identifie souvent un appartement par l\'étage + côté (gauche/droite/face) ou par le numéro de porte.',
        },
        {
          id: 'a2-lo-05-ex16',
          type: 'qcm',
          question: 'L\'expression "au plus tard" signifie :',
          options: ['Le plus rapidement possible', 'Dans les meilleurs délais', 'Pas après cette heure/date', 'Approximativement'],
          correctIndex: 2,
          explanation: '"Au plus tard" = at the latest. "Demain matin au plus tard" = pas après demain matin = no later than tomorrow morning. Opposé de "au plus tôt" (at the earliest).',
        },
        {
          id: 'a2-lo-05-ex17',
          type: 'qcm',
          question: 'Une réparation "partagée" signifie que :',
          options: [
            'Le propriétaire paie tout',
            'Le locataire paie tout',
            'Les deux parties paient une partie',
            'L\'assurance paie',
          ],
          correctIndex: 2,
          explanation: '"Partagé" = divided between two parties. Si la responsabilité est "partagée", le coût de la réparation est divisé entre le locataire et le propriétaire, selon le degré de responsabilité de chacun.',
        },
        {
          id: 'a2-lo-05-ex18',
          type: 'qcm',
          question: 'Quel conditionnel exprime une hypothèse ?',
          options: [
            '"Je voudrais un café"',
            '"Vous devriez appeler un médecin"',
            '"Si j\'avais de l\'argent, j\'achèterais un appartement"',
            '"Il serait arrivé selon les informations"',
          ],
          correctIndex: 2,
          explanation: '"Si + imparfait + conditionnel" = hypothèse irréelle dans le présent. "Si j\'avais de l\'argent (je n\'en ai pas), j\'achèterais un appartement (mais je ne peux pas)." C\'est la structure classique de l\'hypothèse.',
        },
        {
          id: 'a2-lo-05-ex19',
          type: 'qcm',
          question: 'Que signifie "depuis ce matin" ?',
          options: [
            'Ce matin seulement',
            'À partir de ce matin (jusqu\'à maintenant)',
            'Avant ce matin',
            'Vers ce matin',
          ],
          correctIndex: 1,
          explanation: '"Depuis + moment" = starting from that point until now. "La fuite est là depuis ce matin" = it started this morning and continues now. Le présent + "depuis" indique une action qui a commencé dans le passé et continue.',
        },
        {
          id: 'a2-lo-05-ex20',
          type: 'qcm',
          question: 'Malika dit "c\'est fait". Quel sens a cette expression ?',
          options: [
            'C\'est faux',
            'C\'est terminé / j\'ai fait ce que vous m\'avez demandé',
            'C\'est difficile',
            'Je comprends',
          ],
          correctIndex: 1,
          explanation: '"C\'est fait" = it\'s done / done! Malika confirme qu\'elle a coupé l\'eau comme le propriétaire lui avait demandé. C\'est une formule courante pour signaler qu\'une action vient d\'être accomplie.',
        },
      ],
    },
  ],
};
