import type { LangModule } from '../types';

export const a2Transports: LangModule = {
  id: 'a2-mod-06',
  slug: 'a2-transports',
  level: 'A2',
  title: 'Transports & déplacements',
  subtitle: 'Métro, bus, train, voiture — se déplacer en France',
  description: 'Achetez des titres de transport, naviguez dans les transports en commun et planifiez vos voyages en France.',
  type: 'thematique',
  emoji: '🚆',
  free: false,
  lessons: [
    {
      id: 'a2-tr-01',
      slug: 'a2-metro-bus',
      moduleSlug: 'a2-transports',
      level: 'A2',
      title: 'Métro, bus et tramway',
      description: 'Achetez des tickets, lisez les plans et utilisez les transports en commun en ville.',
      duration: 35,
      free: false,
      dialogue: `## Dialogue : Prendre le métro à Paris

*Hassan arrive à Paris et demande comment se déplacer.*

**Hassan :** Excusez-moi, je voudrais aller à la Gare de Lyon. Comment est-ce que je peux y aller ?

**Agent RATP :** Vous êtes à Châtelet. Prenez la ligne 14 direction Olympiades — la Gare de Lyon, c'est la deuxième station.

**Hassan :** Je dois changer de ligne ?

**Agent RATP :** Non, c'est direct. Vous prenez la 14 et vous descendez à Gare de Lyon. Facile !

**Hassan :** Et pour les tickets, comment ça marche ?

**Agent RATP :** Le ticket à l'unité coûte 2,15€. Mais si vous restez quelques jours à Paris, je vous conseille le Navigo Semaine — c'est 30€ pour circuler sans limite pendant une semaine sur toute l'Île-de-France.

**Hassan :** Et le Navigo, ça marche aussi pour le bus ?

**Agent RATP :** Oui ! Métro, bus, tramway, RER, même le Transilien. Un seul abonnement pour tout.

**Hassan :** Parfait. Est-ce que je peux payer par carte bancaire aux bornes ?

**Agent RATP :** Absolument. Vous pouvez payer par carte, en espèces ou sur l'application RATP. Je vous recommande d'activer le sans-contact sur votre téléphone, c'est très pratique.`,

      linguisticPoint: `## Point linguistique : Les pronoms adverbiaux Y et EN

### Le pronom Y (remplace un lieu ou une expression avec À)
| Exemple original | Avec Y |
|---|---|
| Je vais À PARIS | J\'y vais |
| Il est AU bureau | Il y est |
| Tu vas À la gare ? | Tu y vas ? |
| Nous allons AU cinéma | Nous y allons |

**Y remplace :** à + lieu / dans + lieu / sur + lieu / en + lieu

### Le pronom EN (remplace de + nom ou une quantité)
| Exemple original | Avec EN |
|---|---|
| Je reviens DE Paris | J\'en reviens |
| Tu veux DU café ? | Tu en veux ? |
| Il y a TROIS stations | Il y en a trois |
| J\'ai besoin DE tickets | J\'en ai besoin |

### Place des pronoms Y et EN
- Avant le verbe : "J\\'**y** vais" / "J\\'**en** veux"
- Avec l\'impératif affirmatif : à la fin : "Vas-**y** !" / "Prends-**en** !"
- Avec l\'impératif négatif : avant le verbe : "N\\'**y** va pas !" / "N\\'**en** prends pas !"`,

      keyPoints: [
        'Y remplace à/dans/sur/en + lieu : "j\'y vais" / "il y est"',
        'EN remplace de + nom ou quantité : "j\'en veux" / "j\'en reviens"',
        'Ticket unitaire RATP = 2,15€ / Navigo Semaine = 30€',
        'Navigo valable : métro + bus + tram + RER + Transilien',
        'Sans-contact disponible sur iPhone/Android (tag Navigo virtuel)',
      ],

      exercises: [
        {
          id: 'a2-tr-01-ex01',
          type: 'qcm',
          question: 'Remplacez avec Y : "Je vais à la gare." →',
          options: ['Je la vais', 'J\'y vais', 'J\'en vais', 'Je y vais'],
          correctIndex: 1,
          explanation: '"Y" remplace "à + lieu". "Je vais À LA gare" → "J\'Y vais." Attention : "y" se place avant le verbe conjugué. Élision : "je y" → "j\'y".',
        },
        {
          id: 'a2-tr-01-ex02',
          type: 'qcm',
          question: 'Quelle ligne de métro prend Hassan pour aller à la Gare de Lyon ?',
          options: ['La ligne 1', 'La ligne 4', 'La ligne 14', 'La ligne 13'],
          correctIndex: 2,
          explanation: 'L\'agent dit "Prenez la ligne 14 direction Olympiades". La Gare de Lyon est la deuxième station depuis Châtelet sur la ligne 14.',
        },
        {
          id: 'a2-tr-01-ex03',
          type: 'qcm',
          question: 'Remplacez avec EN : "Je veux du café." →',
          options: ['Je le veux', 'J\'y veux', 'J\'en veux', 'Je en veux'],
          correctIndex: 2,
          explanation: '"EN" remplace "de/du/de la/des + nom" et les quantités. "Je veux DU café" → "J\'EN veux." Élision : "je en" → "j\'en".',
        },
        {
          id: 'a2-tr-01-ex04',
          type: 'qcm',
          question: 'Combien coûte un ticket de métro à Paris à l\'unité ?',
          options: ['1,50€', '2,15€', '2,50€', '3€'],
          correctIndex: 1,
          explanation: 'L\'agent dit "Le ticket à l\'unité coûte 2,15€." Depuis 2023, le ticket t+ unitaire coûte 2,15€ à Paris. Pour économiser, on peut acheter un carnet ou le Navigo.',
        },
        {
          id: 'a2-tr-01-ex05',
          type: 'qcm',
          question: 'Que signifie "direction Olympiades" sur une ligne de métro ?',
          options: [
            'Il faut aller aux Jeux Olympiques',
            'Le train va dans ce sens : le terminus est "Olympiades" (fin de ligne)',
            'La station s\'appelle Olympiades',
            'Il faut changer à Olympiades',
          ],
          correctIndex: 1,
          explanation: 'Dans le métro parisien, "direction X" indique le terminus de la ligne dans ce sens. Pour savoir si vous allez dans le bon sens, vérifiez que votre station cible est sur le trajet AVANT le terminus indiqué.',
        },
        {
          id: 'a2-tr-01-ex06',
          type: 'qcm',
          question: 'Impératif affirmatif avec Y : "Va à la pharmacie." →',
          options: ['Va-y !', 'Y-va !', 'Vas-y !', 'Vas-y-là !'],
          correctIndex: 2,
          explanation: '"Vas-y !" = go there! À l\'impératif affirmatif, Y et EN se placent APRÈS le verbe avec un trait d\'union. "Va" reprend son -s (règle euphonique) → "Vas-y". Autres exemples : "Prends-en !" / "Allons-y !"',
        },
        {
          id: 'a2-tr-01-ex07',
          type: 'qcm',
          question: 'Combien coûte le Navigo Semaine ?',
          options: ['15€', '20€', '30€', '45€'],
          correctIndex: 2,
          explanation: 'Le Navigo Semaine coûte "30€ pour circuler sans limite pendant une semaine sur toute l\'Île-de-France."',
        },
        {
          id: 'a2-tr-01-ex08',
          type: 'qcm',
          question: 'Remplacez avec EN : "J\'ai besoin de tickets." →',
          options: ['J\'y ai besoin', 'J\'en ai besoin', 'Je les ai besoin', 'J\'ai besoin en'],
          correctIndex: 1,
          explanation: '"Avoir besoin DE quelque chose" → remplacer "de quelque chose" par EN. "J\'ai besoin DE tickets" → "J\'EN ai besoin." EN se place avant le verbe.',
        },
        {
          id: 'a2-tr-01-ex09',
          type: 'qcm',
          question: 'Le Navigo est-il valable dans le bus ?',
          options: [
            'Non, seulement dans le métro',
            'Oui, métro + bus + tram + RER + Transilien',
            'Seulement dans les bus RATP',
            'Oui, mais avec un supplément',
          ],
          correctIndex: 1,
          explanation: 'L\'agent confirme : "Oui ! Métro, bus, tramway, RER, même le Transilien. Un seul abonnement pour tout." Le Navigo est le pass universel pour tous les transports en Île-de-France.',
        },
        {
          id: 'a2-tr-01-ex10',
          type: 'qcm',
          question: 'Remplacez avec Y : "Elle habite en France." →',
          options: ['Elle y habite', 'Elle en habite', 'Elle l\'habite', 'Elle la habite'],
          correctIndex: 0,
          explanation: '"Y" remplace "EN + pays". "Elle habite EN France" → "Elle Y habite." Y remplace toute expression de lieu : à + lieu / dans + lieu / en + lieu / sur + lieu.',
        },
        {
          id: 'a2-tr-01-ex11',
          type: 'qcm',
          question: 'Que signifie "en espèces" ?',
          options: ['Par carte bancaire', 'En monnaie physique (billets et pièces)', 'Par chèque', 'Par virement'],
          correctIndex: 1,
          explanation: '"En espèces" = in cash = avec des billets et des pièces de monnaie. Synonymes : "en liquide" (familier) / "en numéraire". À distinguer de "par carte" (CB/crédit) ou "par chèque".',
        },
        {
          id: 'a2-tr-01-ex12',
          type: 'qcm',
          question: 'Impératif négatif avec Y : "N\'y va pas !" signifie :',
          options: ['Don\'t go there!', 'Go there!', 'Go away!', 'Don\'t come here!'],
          correctIndex: 0,
          explanation: '"N\'Y va pas !" = don\'t go there! À l\'impératif négatif, Y et EN se placent AVANT le verbe : "N\'Y va pas !" / "N\'EN prends pas !" C\'est l\'inverse de l\'impératif affirmatif ("Vas-y !").',
        },
        {
          id: 'a2-tr-01-ex13',
          type: 'qcm',
          question: 'Remplacez avec EN : "Il y a trois stations." →',
          options: ['Il y en a trois', 'Il en y a trois', 'Il les y a trois', 'Il y trois en'],
          correctIndex: 0,
          explanation: 'Quand Y et EN sont dans la même phrase, Y vient AVANT EN : "Il Y EN a trois." Structure : "il y a" + quantité → "il y en a" + quantité. "Il y a trois stations" → "Il y en a trois."',
        },
        {
          id: 'a2-tr-01-ex14',
          type: 'qcm',
          question: 'Qu\'est-ce que le "sans-contact" (NFC) dans les transports ?',
          options: [
            'Un moyen de voyager sans ticket',
            'Une technologie permettant de valider avec un téléphone ou carte en approchant simplement (tap to pay)',
            'Un abonnement mensuel sans engagement',
            'Un service pour personnes à mobilité réduite',
          ],
          correctIndex: 1,
          explanation: 'Le sans-contact (NFC = Near Field Communication) permet de valider son titre de transport en approchant son téléphone ou sa carte à 4cm du valideur. Très pratique et rapide.',
        },
        {
          id: 'a2-tr-01-ex15',
          type: 'qcm',
          question: 'Hassan doit-il changer de ligne pour aller de Châtelet à Gare de Lyon ?',
          options: [
            'Oui, une correspondance',
            'Non, c\'est direct sur la ligne 14',
            'Oui, deux correspondances',
            'Le dialogue ne le précise pas',
          ],
          correctIndex: 1,
          explanation: 'L\'agent dit "Non, c\'est direct." Hassan n\'a pas besoin de changer de ligne — la ligne 14 va directement de Châtelet à Gare de Lyon en 2 stations.',
        },
        {
          id: 'a2-tr-01-ex16',
          type: 'qcm',
          question: 'Remplacez avec Y : "Nous allons au cinéma ce soir." →',
          options: ['Nous en allons ce soir', 'Nous y allons ce soir', 'Nous le allons ce soir', 'Nous allons y ce soir'],
          correctIndex: 1,
          explanation: '"Nous Y allons ce soir." Y remplace "au cinéma" (à + le cinéma). Y se place avant le verbe conjugué. "Au" = à + le → Y remplace "à + lieu" quelle que soit la forme de l\'article.',
        },
        {
          id: 'a2-tr-01-ex17',
          type: 'qcm',
          question: 'Que signifie "circuler sans limite" avec le Navigo Semaine ?',
          options: [
            'On peut utiliser les transports autant qu\'on veut pendant la semaine',
            'On peut aller dans toute la France',
            'C\'est gratuit les week-ends',
            'Il n\'y a pas de limite de vitesse',
          ],
          correctIndex: 0,
          explanation: '"Circuler sans limite" = unlimited travel. Avec le Navigo Semaine à 30€, on peut prendre autant de trajets qu\'on veut (métro, bus, RER...) pendant 7 jours consécutifs en Île-de-France.',
        },
        {
          id: 'a2-tr-01-ex18',
          type: 'qcm',
          question: 'Remplacez avec EN : "Je reviens de Lyon." →',
          options: ['J\'y reviens', 'J\'en reviens', 'Je le reviens', 'Je reviens y'],
          correctIndex: 1,
          explanation: '"EN" remplace "DE + lieu" quand le mouvement va DE quelque part. "Je reviens DE Lyon" → "J\'EN reviens." EN remplace les expressions avec DE : "de Paris" / "de la gare" / "du bureau".',
        },
        {
          id: 'a2-tr-01-ex19',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une "borne" dans une station de métro ?',
          options: [
            'Un agent d\'accueil',
            'Une machine automatique pour acheter les titres de transport',
            'Un portique de sécurité',
            'Un panneau d\'information',
          ],
          correctIndex: 1,
          explanation: 'Une "borne" = une machine automatique (kiosque). Dans le métro, les "bornes de vente" permettent d\'acheter des tickets ou de recharger son pass Navigo, souvent 24h/24.',
        },
        {
          id: 'a2-tr-01-ex20',
          type: 'qcm',
          question: 'Qu\'est-ce que le "RER" ?',
          options: [
            'Réseau Express Régional — trains rapides reliant Paris à sa banlieue',
            'Réseau de bus de Paris',
            'Un type de taxi',
            'Les initiales d\'une ligne de métro',
          ],
          correctIndex: 0,
          explanation: 'RER = Réseau Express Régional. Ce sont des trains qui vont plus vite que le métro et relient Paris à toute l\'Île-de-France (aéroports, Versailles, banlieues éloignées). Le Navigo est valable sur le RER.',
        },
      ],
    },

    {
      id: 'a2-tr-02',
      slug: 'a2-sncf-voyages',
      moduleSlug: 'a2-transports',
      level: 'A2',
      title: 'Le train et la SNCF',
      description: 'Réservez un billet de train, comprenez les tarifs et gérez les situations imprévues.',
      duration: 35,
      free: false,
      dialogue: `## Dialogue : Acheter un billet à la gare

*Fatou se rend au guichet SNCF pour aller à Marseille.*

**Agent SNCF :** Bonjour, je peux vous aider ?

**Fatou :** Bonjour. Je voudrais aller à Marseille samedi prochain. Il y a des TGV ?

**Agent SNCF :** Oui, plusieurs. Le premier part à 7h45, arrivée à 10h52. Le suivant est à 10h15, arrivée à 13h22. Vous préférez lequel ?

**Fatou :** J'aime mieux le 10h15, j'ai des courses à faire le matin.

**Agent SNCF :** D'accord. C'est pour combien de personnes ?

**Fatou :** Pour moi seule. Aller simple.

**Agent SNCF :** En seconde classe, j'ai un tarif à 49€ si vous réservez maintenant. Sinon, demain ça risque d'être plus cher.

**Fatou :** Et en première classe ?

**Agent SNCF :** 89€. La différence c'est un siège plus large et un repas inclus.

**Fatou :** Non, la seconde c'est bien. Je prends le 49€.

**Agent SNCF :** Vous avez une carte de fidélité SNCF ? La carte Avantage ou carte Senior ?

**Fatou :** Non, pas encore.

**Agent SNCF :** Je vous conseille de vous inscrire sur sncf-connect.com — vous pouvez avoir des réductions jusqu'à 60% avec une carte jeune si vous avez moins de 27 ans.`,

      linguisticPoint: `## Point linguistique : Exprimer la préférence — aimer mieux / préférer

### Structures de préférence
| Structure | Exemple |
|---|---|
| **Préférer** + infinitif | Je **préfère** voyager en TGV |
| **Aimer mieux** + infinitif | J\'**aime mieux** le 10h15 |
| **Plutôt** (adverbe) | Je veux **plutôt** aller le matin |
| **J\'ai une préférence pour** | J\'ai une préférence pour la seconde classe |

### Comparer deux options — comparatifs
- **Plus** [adj] que : "La première est **plus confortable** que la seconde"
- **Moins** [adj] que : "La seconde est **moins chère** que la première"
- **Aussi** [adj] que : "Le TGV est **aussi rapide** que l\'avion (Paris-Lyon)"
- **Meilleur(e)** que : "Ce tarif est **meilleur** que le suivant"
- **Mieux** (adverbe) que : "Je dors **mieux** en TGV qu\'en voiture"

### Vocabulaire ferroviaire
- **TGV** = Train à Grande Vitesse (jusqu\'à 320 km/h)
- **Aller simple** ≠ **aller-retour**
- **2ème classe** (standard) ≠ **1ère classe** (plus cher + confort supérieur)
- **Composter** = valider son billet avant de monter (obligatoire si ticket papier)`,

      keyPoints: [
        '"Aimer mieux" = "préférer" (même sens, registres différents)',
        'Comparatifs : plus/moins/aussi + adjectif + que',
        '"Meilleur" (adj.) vs "mieux" (adverbe) — faux amis à éviter',
        'TGV = Train à Grande Vitesse / réservation obligatoire',
        'Composter son billet AVANT de monter dans le train (sinon amende)',
      ],

      exercises: [
        {
          id: 'a2-tr-02-ex01',
          type: 'qcm',
          question: 'Fatou préfère quel train ?',
          options: ['Le 7h45', 'Le 10h15', 'Elle n\'a pas de préférence', 'Le plus rapide'],
          correctIndex: 1,
          explanation: 'Fatou dit "J\'aime mieux le 10h15" car elle a des courses à faire le matin. "Aimer mieux" = "préférer" — les deux expressions signifient la même chose.',
        },
        {
          id: 'a2-tr-02-ex02',
          type: 'qcm',
          question: 'Remplacez "aimer mieux" par "préférer" : "J\'aime mieux voyager en train."',
          options: [
            'Je préfère voyager en train',
            'Je préfèrerais voyager en train',
            'Je préfère de voyager en train',
            'J\'ai préféré voyager en train',
          ],
          correctIndex: 0,
          explanation: '"Aimer mieux" et "préférer" sont synonymes. "J\'aime mieux voyager en train" = "Je préfère voyager en train." Les deux se construisent avec l\'infinitif (sans "de" après "préférer").',
        },
        {
          id: 'a2-tr-02-ex03',
          type: 'qcm',
          question: 'Que signifie "aller simple" ?',
          options: [
            'Un billet pour aller et revenir',
            'Un billet dans un seul sens (sans retour inclus)',
            'Un billet pas cher',
            'Un billet de 1ère classe',
          ],
          correctIndex: 1,
          explanation: '"Aller simple" = one-way ticket (un trajet, dans un seul sens). "Aller-retour" = round trip (deux trajets inclus). Un aller simple est souvent moins cher qu\'un aller-retour si les dates de retour sont flexibles.',
        },
        {
          id: 'a2-tr-02-ex04',
          type: 'qcm',
          question: 'Comparatif : "La 2ème classe est ___ chère que la 1ère."',
          options: ['plus', 'moins', 'aussi', 'mieux'],
          correctIndex: 1,
          explanation: '"La 2ème classe est MOINS chère que la 1ère." La 1ère coûte 89€, la 2ème coûte 49€ → 2ème = moins chère. "Moins + adjectif + que" = less ... than.',
        },
        {
          id: 'a2-tr-02-ex05',
          type: 'qcm',
          question: 'TGV signifie :',
          options: ['Transport Général de Voyageurs', 'Train à Grande Vitesse', 'Train du Grand-Voyage', 'Trafic de Grande Voie'],
          correctIndex: 1,
          explanation: 'TGV = Train à Grande Vitesse. Les TGV atteignent jusqu\'à 320 km/h en service régulier. Ils relient les grandes villes françaises et européennes. La réservation est obligatoire (incluse dans le billet).',
        },
        {
          id: 'a2-tr-02-ex06',
          type: 'qcm',
          question: 'Quelle est la différence entre "meilleur" et "mieux" ?',
          options: [
            'Ce sont des synonymes',
            '"Meilleur" est un adjectif (qualifie un nom) / "mieux" est un adverbe (qualifie un verbe)',
            '"Mieux" est plus formel que "meilleur"',
            '"Meilleur" est le comparatif de "bien" / "mieux" est le comparatif de "bon"',
          ],
          correctIndex: 1,
          explanation: '"MEILLEUR" = adjectif (comparatif de "bon") : "Ce tarif est MEILLEUR." "MIEUX" = adverbe (comparatif de "bien") : "Je dors MIEUX en TGV." Erreur fréquente : ❌ "Ce tarif est mieux" → ✅ "Ce tarif est meilleur."',
        },
        {
          id: 'a2-tr-02-ex07',
          type: 'qcm',
          question: 'Combien coûte le billet en 2ème classe si Fatou réserve maintenant ?',
          options: ['35€', '49€', '69€', '89€'],
          correctIndex: 1,
          explanation: 'L\'agent propose "un tarif à 49€ si vous réservez maintenant." C\'est le tarif Prem\'s (ou autre tarif réduit SNCF) disponible en réservation anticipée. Les prix augmentent à l\'approche de la date.',
        },
        {
          id: 'a2-tr-02-ex08',
          type: 'qcm',
          question: 'Comparatif : "Le TGV est ___ rapide ___ l\'avion sur Paris-Lyon."',
          options: ['plus / que', 'aussi / que', 'moins / que', 'autant / que'],
          correctIndex: 1,
          explanation: '"Le TGV est AUSSI rapide QUE l\'avion sur Paris-Lyon." Les temps de trajet de centre-ville à centre-ville (sans l\'enregistrement) sont comparables. "Aussi + adj + que" = as ... as.',
        },
        {
          id: 'a2-tr-02-ex09',
          type: 'qcm',
          question: 'Qu\'est-ce que "composter" son billet ?',
          options: [
            'Acheter son billet',
            'Valider son billet dans une machine avant de monter dans le train',
            'Annuler son billet',
            'Présenter son billet au contrôleur',
          ],
          correctIndex: 1,
          explanation: '"Composter" = valider le billet dans la machine orange avant de passer les quais. Obligatoire pour les billets papier imprimés (pas nécessaire si on a le billet sur téléphone). Sans compostage = amende possible.',
        },
        {
          id: 'a2-tr-02-ex10',
          type: 'qcm',
          question: 'Quelle réduction maximum peut-on avoir avec une carte jeune SNCF ?',
          options: ['30%', '40%', '50%', '60%'],
          correctIndex: 3,
          explanation: 'L\'agent dit "des réductions jusqu\'à 60% avec une carte jeune si vous avez moins de 27 ans." La carte Avantage Jeune SNCF offre jusqu\'à 60% de réduction sur les TGV INOUI et Intercités.',
        },
        {
          id: 'a2-tr-02-ex11',
          type: 'qcm',
          question: 'Comparatif : "La 1ère classe est ___ confortable que la 2ème."',
          options: ['moins', 'plus', 'aussi', 'autant'],
          correctIndex: 1,
          explanation: '"La 1ère classe est PLUS confortable que la 2ème." La 1ère classe offre des sièges plus larges et des services supplémentaires. "Plus + adjectif + que" = more ... than.',
        },
        {
          id: 'a2-tr-02-ex12',
          type: 'qcm',
          question: 'Que signifie "ça risque d\'être plus cher" ?',
          options: [
            'C\'est certain que ce sera plus cher',
            'Il y a un risque/une probabilité que le prix augmente',
            'C\'est interdit d\'acheter plus tard',
            'Le prix ne changera pas',
          ],
          correctIndex: 1,
          explanation: '"Ça risque de + infinitif" = there\'s a risk of / it might. Ce n\'est pas une certitude mais une probabilité. "Demain, ça risque d\'être plus cher" = il y a des chances que le prix augmente demain.',
        },
        {
          id: 'a2-tr-02-ex13',
          type: 'qcm',
          question: '"J\'aime mieux" peut aussi s\'écrire :',
          options: [
            'Je préfère mieux',
            'Je préfère',
            'J\'aime plus',
            'J\'aime beaucoup',
          ],
          correctIndex: 1,
          explanation: '"J\'aime mieux" = "Je préfère" (synonymes). Évitez "je préfère mieux" — c\'est une double formule erronée. En registre familier, on dit aussi "j\'aime mieux" ; en registre soutenu : "je préfère".',
        },
        {
          id: 'a2-tr-02-ex14',
          type: 'qcm',
          question: 'Qu\'est-ce que "sncf-connect.com" ?',
          options: [
            'Le site officiel pour acheter des billets de train et gérer les voyages SNCF',
            'Un réseau social de voyageurs',
            'Le site de plainte des voyageurs SNCF',
            'Un service de covoiturage',
          ],
          correctIndex: 0,
          explanation: 'SNCF Connect (anciennement OUI.sncf) est le site et l\'application officielle de la SNCF pour acheter des billets, gérer ses abonnements (carte Avantage, Senior...) et suivre ses voyages.',
        },
        {
          id: 'a2-tr-02-ex15',
          type: 'qcm',
          question: 'Combien de temps met le TGV de 10h15 pour aller à Marseille ?',
          options: ['2h30', '3h07', '3h45', '4h'],
          correctIndex: 1,
          explanation: 'Départ 10h15, arrivée 13h22 → 13h22 - 10h15 = 3h07. Le TGV Paris-Marseille prend environ 3h07 min. (C\'est l\'une des lignes les plus empruntées de France.)',
        },
        {
          id: 'a2-tr-02-ex16',
          type: 'qcm',
          question: 'Comparatif : "___ le train, le bus est moins confortable mais moins cher."',
          options: ['Plus que', 'Mieux que', 'Par rapport à', 'En comparaison de'],
          correctIndex: 2,
          explanation: '"Par rapport à" = compared to. "PAR RAPPORT AU train, le bus est moins confortable mais moins cher." Cette locution prépositionnelle introduit une comparaison. Autres : "comparé à" / "en comparaison de".',
        },
        {
          id: 'a2-tr-02-ex17',
          type: 'qcm',
          question: 'Que comprend le billet en 1ère classe selon l\'agent ?',
          options: [
            'Un siège plus large seulement',
            'Un siège plus large et un repas inclus',
            'Un repas et un hôtel',
            'Une voiture silencieuse',
          ],
          correctIndex: 1,
          explanation: 'L\'agent dit "la différence c\'est un siège plus large et un repas inclus." En 1ère classe TGV, les sièges sont plus spacieux et un plateau repas est souvent inclus dans les TGV INOUI.',
        },
        {
          id: 'a2-tr-02-ex18',
          type: 'qcm',
          question: 'Quel est le superlatif de "bon" ? "C\'est le ___ tarif disponible."',
          options: ['le meilleur', 'le mieux', 'le plus bon', 'le meilleure'],
          correctIndex: 0,
          explanation: 'Le superlatif de "bon" (adjectif) est "le MEILLEUR / la MEILLEURE". "C\'est le MEILLEUR tarif disponible." Le superlatif de "bien" (adverbe) est "le mieux". Jamais "le plus bon" ❌.',
        },
        {
          id: 'a2-tr-02-ex19',
          type: 'qcm',
          question: 'Exprimez une préférence : "Je ___ la fenêtre côté gauche."',
          options: ['je veux', 'je préfère', 'je désire', 'toutes les réponses sont correctes'],
          correctIndex: 3,
          explanation: '"Je veux" (direct), "Je préfère" (comparatif implicite), "Je désire" (poli/formel) expriment tous une préférence. En demandant un siège spécifique dans le train, "je préfère" ou "je voudrais" sont les formulations les plus courantes.',
        },
        {
          id: 'a2-tr-02-ex20',
          type: 'qcm',
          question: 'Que signifie "carte de fidélité SNCF" ?',
          options: [
            'Un abonnement mensuel',
            'Une carte donnant des réductions sur les billets SNCF aux voyageurs réguliers',
            'Un abonnement de trajet quotidien',
            'Une carte bancaire SNCF',
          ],
          correctIndex: 1,
          explanation: 'La carte de fidélité SNCF (Avantage, Senior, Jeune...) est une carte annuelle payante qui offre des réductions importantes sur les billets. Elle est rentable si on voyage régulièrement (au moins 2-3 allers-retours par an).',
        },
      ],
    },

    {
      id: 'a2-tr-03',
      slug: 'a2-voiture-permis',
      moduleSlug: 'a2-transports',
      level: 'A2',
      title: 'Voiture et permis de conduire',
      description: 'Conversion de permis étranger, code de la route, assurance auto et situations courantes.',
      duration: 35,
      free: false,
      dialogue: `## Dialogue : Conversion d'un permis étranger

*Ibrahim veut convertir son permis de conduire marocain en permis français.*

**Agent préfecture :** Bonjour monsieur, que puis-je faire pour vous ?

**Ibrahim :** Bonjour. Je viens du Maroc et j'ai mon permis de conduire marocain. Est-ce que je peux conduire en France ?

**Agent :** Pendant la première année de votre titre de séjour, votre permis marocain est valable en France. Mais si vous souhaitez rester plus longtemps, vous devez faire une demande d'échange de permis.

**Ibrahim :** Comment ça se passe ?

**Agent :** Vous déposez votre dossier ici à la préfecture. Il faut fournir : votre permis marocain original, une traduction officielle, une pièce d'identité, un justificatif de domicile de moins de 3 mois, et deux photos d'identité.

**Ibrahim :** Et ça prend combien de temps ?

**Agent :** En ce moment, les délais sont d'environ 3 à 6 mois. Vous recevrez votre nouveau permis français par La Poste. En attendant, on vous donne une attestation de dépôt.

**Ibrahim :** Est-ce que je dois repasser le code ou la conduite ?

**Agent :** Non ! Le Maroc est un pays dont les permis sont reconnus par la France — échange direct, sans examens.`,

      linguisticPoint: `## Point linguistique : Le discours indirect (questions)

### Transformer une question directe en question indirecte
| Question directe | Question indirecte (discours indirect) |
|---|---|
| "Est-ce que vous venez ?" | Il demande **si** vous venez |
| "Où allez-vous ?" | Il demande **où** vous allez |
| "Comment ça se passe ?" | Il demande **comment** ça se passe |
| "Combien ça coûte ?" | Il demande **combien** ça coûte |
| "Pourquoi êtes-vous là ?" | Il demande **pourquoi** vous êtes là |
| "Qu\'est-ce que vous faites ?" | Il demande **ce que** vous faites |

### Règles du discours indirect (questions)
- **Est-ce que / oui-non** → remplacé par **si**
- **Mots interrogatifs** (où, quand, comment, pourquoi, combien) → restent tels quels
- **Qu\'est-ce que** → devient **ce que**
- **Qu\'est-ce qui** → devient **ce qui**
- Le verbe introducteur : demander / vouloir savoir / se demander

### Pays à permis reconnus par la France (échange direct)
Pays UE, EEE + liste de pays hors UE reconnus (dont le Maroc, Algérie, Tunisie, Sénégal, Cameroun...) → échange direct sans repassage de code ni conduite.`,

      keyPoints: [
        'Discours indirect question : est-ce que → si / qu\'est-ce que → ce que',
        'Mots interrogatifs (où, comment, pourquoi) restent identiques en indirect',
        'Permis marocain valide 1 an en France (1ère année titre de séjour)',
        'Échange direct sans examen pour pays reconnus (Maroc, Algérie, Tunisie...)',
        'Délais : 3 à 6 mois / attestation de dépôt en attendant',
      ],

      exercises: [
        {
          id: 'a2-tr-03-ex01',
          type: 'qcm',
          question: 'Transformez en discours indirect : "Est-ce que vous avez un permis ?" Il demande...',
          options: [
            'Il demande est-ce que vous avez un permis',
            'Il demande si vous avez un permis',
            'Il demande que vous avez un permis',
            'Il demande vous avez un permis',
          ],
          correctIndex: 1,
          explanation: '"Est-ce que" → "si" en discours indirect. "Est-ce que vous avez un permis ?" → "Il demande SI vous avez un permis." On supprime "est-ce que" et on ajoute "si". Le sujet (vous) reste APRÈS le verbe.',
        },
        {
          id: 'a2-tr-03-ex02',
          type: 'qcm',
          question: 'Combien de temps le permis marocain est-il valable en France ?',
          options: ['6 mois', '1 an (pendant la première année du titre de séjour)', '2 ans', 'Il n\'est pas valable'],
          correctIndex: 1,
          explanation: 'L\'agent dit "pendant la première année de votre titre de séjour, votre permis marocain est valable en France." Après un an, il faut obligatoirement faire la conversion.',
        },
        {
          id: 'a2-tr-03-ex03',
          type: 'qcm',
          question: 'Transformez en discours indirect : "Comment ça se passe ?" Ibrahim demande...',
          options: [
            'Ibrahim demande si ça se passe',
            'Ibrahim demande comment ça se passe',
            'Ibrahim demande que ça se passe comment',
            'Ibrahim demande ça se passe comment',
          ],
          correctIndex: 1,
          explanation: 'Les mots interrogatifs (comment, où, quand, pourquoi, combien) restent identiques au discours indirect. "Comment ça se passe ?" → "Ibrahim demande COMMENT ça se passe." Pas d\'inversion du sujet.',
        },
        {
          id: 'a2-tr-03-ex04',
          type: 'qcm',
          question: 'Ibrahim doit-il repasser le code de la route pour obtenir le permis français ?',
          options: [
            'Oui, obligatoirement',
            'Non, pas si le permis marocain est reconnu (échange direct)',
            'Oui, mais pas la conduite',
            'Seulement si son permis a plus de 5 ans',
          ],
          correctIndex: 1,
          explanation: 'L\'agent dit "Non ! Le Maroc est un pays dont les permis sont reconnus par la France — échange direct, sans examens." Ibrahim n\'a ni à repasser le code ni la conduite.',
        },
        {
          id: 'a2-tr-03-ex05',
          type: 'qcm',
          question: 'Transformez : "Qu\'est-ce que vous faites ici ?" → Il demande...',
          options: [
            'Il demande qu\'est-ce que vous faites ici',
            'Il demande ce que vous faites ici',
            'Il demande ce qui vous faites ici',
            'Il demande si vous faites ici',
          ],
          correctIndex: 1,
          explanation: '"Qu\'est-ce que" → "ce que" en discours indirect. "Qu\'est-ce que vous faites ?" → "Il demande CE QUE vous faites." On supprime "qu\'est-ce que" et on le remplace par "ce que".',
        },
        {
          id: 'a2-tr-03-ex06',
          type: 'qcm',
          question: 'Quel document Ibrahim recevra-t-il en attendant son permis français ?',
          options: [
            'Son permis marocain original',
            'Une attestation de dépôt',
            'Un permis provisoire',
            'Un récépissé de traduction',
          ],
          correctIndex: 1,
          explanation: 'L\'agent dit "on vous donne une attestation de dépôt" en attendant. Cette attestation prouve qu\'une demande de conversion est en cours. Elle n\'autorise pas forcément à conduire — vérifier avec la préfecture.',
        },
        {
          id: 'a2-tr-03-ex07',
          type: 'qcm',
          question: 'Transformez : "Combien ça coûte ?" Elle veut savoir...',
          options: [
            'Elle veut savoir si ça coûte combien',
            'Elle veut savoir combien ça coûte',
            'Elle veut savoir que ça coûte combien',
            'Elle veut savoir combien est-ce que ça coûte',
          ],
          correctIndex: 1,
          explanation: '"Combien" reste identique au discours indirect. "Combien ça coûte ?" → "Elle veut savoir COMBIEN ça coûte." Pas d\'inversion du sujet et pas d\'ajout de "si".',
        },
        {
          id: 'a2-tr-03-ex08',
          type: 'qcm',
          question: 'Quels documents faut-il fournir pour la conversion du permis ? (plusieurs éléments sont cités)',
          options: [
            'Permis original + casier judiciaire + photos',
            'Permis original + traduction officielle + pièce d\'identité + justificatif domicile + photos',
            'Permis original + photos + acte de naissance',
            'Permis original + relevé bancaire + photos',
          ],
          correctIndex: 1,
          explanation: 'L\'agent liste : permis marocain original + traduction officielle + pièce d\'identité + justificatif de domicile (moins de 3 mois) + 2 photos d\'identité.',
        },
        {
          id: 'a2-tr-03-ex09',
          type: 'qcm',
          question: 'Transformez : "Pourquoi êtes-vous venu ?" Il demande...',
          options: [
            'Il demande si vous êtes venu',
            'Il demande pourquoi vous êtes venu',
            'Il demande pourquoi êtes-vous venu',
            'Il demande que vous êtes venu pourquoi',
          ],
          correctIndex: 1,
          explanation: '"Pourquoi" reste identique mais l\'inversion sujet-verbe disparaît. "Pourquoi êtes-vous venu ?" → "Il demande pourquoi VOUS ÊTES venu." En discours indirect, on n\'inverse jamais le sujet.',
        },
        {
          id: 'a2-tr-03-ex10',
          type: 'qcm',
          question: 'Quel est le délai de traitement du dossier de conversion ?',
          options: ['1 à 2 semaines', '1 à 3 mois', '3 à 6 mois', '6 à 12 mois'],
          correctIndex: 2,
          explanation: 'L\'agent dit "en ce moment, les délais sont d\'environ 3 à 6 mois." Les délais de la préfecture peuvent varier selon la région et la période. Prévoir ces délais avant la fin de validité du permis étranger.',
        },
        {
          id: 'a2-tr-03-ex11',
          type: 'qcm',
          question: 'Transformez : "Qu\'est-ce qui se passe ?" Elle demande...',
          options: [
            'Elle demande ce que se passe',
            'Elle demande ce qui se passe',
            'Elle demande qu\'est-ce qui se passe',
            'Elle demande si ça se passe',
          ],
          correctIndex: 1,
          explanation: '"Qu\'est-ce qui" → "ce qui" en discours indirect. "Qu\'est-ce qui se passe ?" → "Elle demande CE QUI se passe." "Ce qui" = sujet de la proposition / "ce que" = objet.',
        },
        {
          id: 'a2-tr-03-ex12',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une "traduction officielle" (ou assermentée) ?',
          options: [
            'N\'importe quelle traduction faite par un traducteur',
            'Une traduction faite par un traducteur assermenté (agréé par les tribunaux)',
            'Une traduction en ligne gratuite',
            'Une traduction faite par l\'ambassade',
          ],
          correctIndex: 1,
          explanation: 'Une traduction officielle/assermentée est réalisée par un traducteur agréé par les tribunaux (expert judiciaire). Elle a valeur légale en France. Pour les documents officiels (permis, diplômes, actes d\'état civil), seules ces traductions sont acceptées.',
        },
        {
          id: 'a2-tr-03-ex13',
          type: 'qcm',
          question: 'Transformez : "Où habitez-vous ?" L\'agent demande...',
          options: [
            'L\'agent demande si vous habitez',
            'L\'agent demande où vous habitez',
            'L\'agent demande où habitez-vous',
            'L\'agent demande là où vous habitez',
          ],
          correctIndex: 1,
          explanation: '"Où" reste identique. L\'inversion disparaît. "Où habitez-vous ?" → "L\'agent demande OÙ VOUS habitez." Sujet (vous) + verbe (habitez), sans inversion.',
        },
        {
          id: 'a2-tr-03-ex14',
          type: 'qcm',
          question: 'Pourquoi faut-il un "justificatif de domicile de moins de 3 mois" ?',
          options: [
            'Pour prouver qu\'on paye ses impôts',
            'Pour prouver son adresse actuelle en France (document récent)',
            'Pour obtenir une réduction',
            'Par obligation de la SNCF',
          ],
          correctIndex: 1,
          explanation: 'Un justificatif de domicile récent (moins de 3 mois) prouve qu\'on habite bien à l\'adresse indiquée. Documents acceptés : facture EDF/eau/gaz, quittance de loyer, relevé bancaire. La limite de 3 mois garantit que l\'adresse est actuelle.',
        },
        {
          id: 'a2-tr-03-ex15',
          type: 'qcm',
          question: 'Transformez : "Avez-vous un justificatif ?" Elle demande...',
          options: [
            'Elle demande si vous avez un justificatif',
            'Elle demande que vous avez un justificatif',
            'Elle demande avez-vous un justificatif',
            'Elle demande vous avez un justificatif',
          ],
          correctIndex: 0,
          explanation: 'Question oui/non → "si" en discours indirect. "Avez-vous un justificatif ?" → "Elle demande SI vous avez un justificatif." Pas d\'inversion du sujet en indirect.',
        },
        {
          id: 'a2-tr-03-ex16',
          type: 'qcm',
          question: 'Un ressortissant algérien peut-il convertir son permis directement ?',
          options: [
            'Non, il doit repasser le code',
            'Non, seulement les Européens',
            'Oui, l\'Algérie fait partie des pays reconnus par la France',
            'Seulement s\'il a moins de 10 ans de permis',
          ],
          correctIndex: 2,
          explanation: 'L\'Algérie fait partie des pays dont les permis de conduire sont reconnus par la France (liste officielle de 18 pays hors UE). Les ressortissants algériens bénéficient d\'un échange direct sans examens.',
        },
        {
          id: 'a2-tr-03-ex17',
          type: 'qcm',
          question: 'Transformez : "Quand partez-vous ?" Il veut savoir...',
          options: [
            'Il veut savoir si vous partez quand',
            'Il veut savoir quand vous partez',
            'Il veut savoir quand partez-vous',
            'Il veut savoir que vous partez quand',
          ],
          correctIndex: 1,
          explanation: '"Quand" reste identique. Inversion disparaît. "Quand partez-vous ?" → "Il veut savoir QUAND VOUS partez." Le sujet (vous) précède le verbe (partez) en indirect.',
        },
        {
          id: 'a2-tr-03-ex18',
          type: 'qcm',
          question: 'Que signifie "échange direct" pour un permis étranger ?',
          options: [
            'L\'échange se fait le jour même',
            'On obtient le permis français sans repasser les examens (code et conduite)',
            'On échange par courrier direct',
            'L\'échange est gratuit',
          ],
          correctIndex: 1,
          explanation: '"Échange direct" = conversion du permis étranger en permis français sans repassage des examens. Pour les pays non reconnus, il faudrait tout recommencer : code de la route + conduite.',
        },
        {
          id: 'a2-tr-03-ex19',
          type: 'qcm',
          question: 'Transformez : "Pourquoi n\'avez-vous pas votre permis original ?" L\'agent demande...',
          options: [
            'L\'agent demande si vous n\'avez pas votre permis',
            'L\'agent demande pourquoi vous n\'avez pas votre permis original',
            'L\'agent demande pourquoi n\'avez-vous pas votre permis',
            'L\'agent demande que vous n\'avez pas de permis',
          ],
          correctIndex: 1,
          explanation: 'La négation reste intacte au discours indirect. "Pourquoi n\'avez-vous pas votre permis ?" → "L\'agent demande pourquoi vous N\'AVEZ PAS votre permis original." Pas d\'inversion sujet-verbe.',
        },
        {
          id: 'a2-tr-03-ex20',
          type: 'qcm',
          question: 'Par quel moyen le permis français est-il envoyé à Ibrahim ?',
          options: [
            'Directement à la préfecture',
            'Par La Poste',
            'Par email',
            'Il doit venir le chercher',
          ],
          correctIndex: 1,
          explanation: 'L\'agent dit "vous recevrez votre nouveau permis français par La Poste." La préfecture envoie le permis à l\'adresse indiquée sur le dossier, d\'où l\'importance d\'un justificatif de domicile valide.',
        },
      ],
    },

    {
      id: 'a2-tr-04',
      slug: 'a2-covoiturage-velo',
      moduleSlug: 'a2-transports',
      level: 'A2',
      title: 'Covoiturage, vélo et mobilité douce',
      description: 'Blablacar, Vélib\', trottinettes électriques — les alternatives à la voiture et aux transports en commun.',
      duration: 35,
      free: false,
      dialogue: `## Texte : Les alternatives aux transports classiques en France

Depuis quelques années, la France développe de nombreuses alternatives à la voiture personnelle et aux transports en commun classiques.

**Le covoiturage** est très populaire en France. La plateforme BlaBlaCar permet de partager un trajet en voiture avec des inconnus moyennant une participation aux frais. Le conducteur propose un itinéraire, et les passagers peuvent réserver une place. C'est souvent moins cher que le train et crée des liens sociaux. Pour les trajets du quotidien (travail), des applis comme Karos ou Blablacar Daily existent.

**Le vélo** connaît un vrai essor depuis 2020. De nombreuses villes proposent des vélos en libre-service : Vélib' à Paris (1,70€/30 min), V'Lille à Lille, Vélo'v à Lyon, Le Vélo à Marseille... On peut aussi acheter un vélo à assistance électrique (VAE) et bénéficier d'aides de l'État jusqu'à 400€.

**Les trottinettes électriques** sont disponibles en location dans de nombreuses villes (Lime, Dott, Tier...). Elles sont pratiques pour le "dernier kilomètre" — la partie du trajet non couverte par les transports en commun. Attention : port du casque obligatoire pour les mineurs, interdit sur les trottoirs.

**L'autopartage** (Citroën C-Zero, OUI.car, Getaround...) permet d'utiliser une voiture à l'heure ou à la journée sans en être propriétaire.`,

      linguisticPoint: `## Point linguistique : Exprimer la concession et l'opposition

### Connecteurs d'opposition
| Connecteur | Sens | Exemple |
|---|---|---|
| **Mais** | opposition simple | C'est cher **mais** confortable |
| **Cependant / Toutefois** | opposition (registre soutenu) | C'est rapide. **Cependant**, c\'est cher. |
| **Pourtant** | surprise / contradiction | Il fait froid. **Pourtant**, il n\'a pas de manteau. |
| **Néanmoins** | nuance | C\'est risqué. **Néanmoins**, c\'est rapide. |
| **En revanche / Par contre** | contraste | La voiture est rapide. **En revanche**, elle pollue. |

### Connecteurs de concession
| Connecteur | Sens | Exemple |
|---|---|---|
| **Bien que + subjonctif** | même si | **Bien qu\'**il pleuve, je prends le vélo. |
| **Même si + indicatif** | concession directe | **Même si** c\'est loin, j\'y vais. |
| **Malgré + nom** | concession | **Malgré** la pluie, je prends le vélo. |
| **Quoique + subjonctif** | même si (soutenu) | **Quoiqu\'**il soit tard, je pars. |`,

      keyPoints: [
        'Mais (simple) / Cependant-Toutefois-Néanmoins (soutenu) / Pourtant (surprise)',
        '"En revanche / par contre" = contraste entre deux éléments',
        '"Bien que + subjonctif" / "même si + indicatif" / "malgré + nom"',
        'BlaBlaCar = covoiturage longue distance / aide VAE jusqu\'à 400€',
        'Trottinettes : casque obligatoire mineurs / interdit trottoirs',
      ],

      exercises: [
        {
          id: 'a2-tr-04-ex01',
          type: 'qcm',
          question: 'Choisissez le connecteur d\'opposition approprié : "Le bus est lent. ___, il est moins cher."',
          options: ['Pourtant', 'En revanche', 'Bien que', 'Malgré'],
          correctIndex: 1,
          explanation: '"EN REVANCHE, il est moins cher." "En revanche" (= par contre) introduit un contraste : deux aspects différents d\'un même sujet. "Le bus est lent" → aspect négatif / "en revanche, il est moins cher" → aspect positif.',
        },
        {
          id: 'a2-tr-04-ex02',
          type: 'qcm',
          question: 'Qu\'est-ce que "BlaBlaCar" ?',
          options: [
            'Une application de taxi',
            'Une plateforme de covoiturage longue distance',
            'Un service d\'autobus',
            'Un système de location de voitures',
          ],
          correctIndex: 1,
          explanation: 'BlaBlaCar est la plateforme de covoiturage longue distance leader en France. Un conducteur propose un trajet, des passagers réservent des places et partagent les frais de carburant. C\'est souvent moins cher que le train.',
        },
        {
          id: 'a2-tr-04-ex03',
          type: 'qcm',
          question: 'Complétez avec "même si" ou "bien que" : "___ il pleuve, je prends le vélo."',
          options: [
            '"Bien que il pleut" est correct',
            '"Même si il pleut" est correct (indicatif)',
            'Les deux formes sont possibles : "Bien qu\'il pleuve" (subj.) / "Même si il pleut" (indic.)',
            'Aucune n\'est correcte',
          ],
          correctIndex: 2,
          explanation: '"Même si" + indicatif : "Même s\'il pleut." "Bien que" + subjonctif : "Bien qu\'il PLEUVE." Les deux expriment la concession mais avec des modes différents. "Malgré + nom" : "Malgré la pluie."',
        },
        {
          id: 'a2-tr-04-ex04',
          type: 'qcm',
          question: 'Quelle aide financière peut-on avoir pour l\'achat d\'un VAE (vélo électrique) ?',
          options: ['Jusqu\'à 200€', 'Jusqu\'à 400€', 'Jusqu\'à 600€', 'Aucune aide'],
          correctIndex: 1,
          explanation: 'Le texte dit "bénéficier d\'aides de l\'État jusqu\'à 400€" pour un VAE. Des aides locales (région, ville) peuvent s\'y ajouter, parfois pour obtenir jusqu\'à 500-1000€ au total.',
        },
        {
          id: 'a2-tr-04-ex05',
          type: 'qcm',
          question: 'Choisissez : "C\'est dangereux. ___, beaucoup de gens prennent la trottinette."',
          options: ['Mais', 'Pourtant', 'Donc', 'Car'],
          correctIndex: 1,
          explanation: '"POURTANT, beaucoup de gens prennent la trottinette." "Pourtant" exprime une surprise ou contradiction : on s\'attendrait à ce que les gens évitent quelque chose de dangereux, mais non.',
        },
        {
          id: 'a2-tr-04-ex06',
          type: 'qcm',
          question: 'Qu\'est-ce que le "dernier kilomètre" dans le contexte de la mobilité ?',
          options: [
            'Le dernier arrêt de bus',
            'La portion du trajet non couverte par les transports en commun (entre la station et la destination)',
            'Un service de livraison',
            'La dernière station de métro',
          ],
          correctIndex: 1,
          explanation: '"Le dernier kilomètre" = last-mile. C\'est la partie du trajet entre la station (métro/bus) et la destination finale. Les trottinettes et vélos sont parfaits pour couvrir cette distance de quelques centaines de mètres à 1-2 km.',
        },
        {
          id: 'a2-tr-04-ex07',
          type: 'qcm',
          question: 'Connecteur soutenu pour l\'opposition : "C\'est loin. ___, je dois y aller."',
          options: ['Mais', 'Cependant', 'Car', 'Donc'],
          correctIndex: 1,
          explanation: '"CEPENDANT, je dois y aller." "Cependant" / "Toutefois" / "Néanmoins" sont des connecteurs d\'opposition de registre soutenu (écrit formel). À préférer à "mais" dans une lettre ou un document officiel.',
        },
        {
          id: 'a2-tr-04-ex08',
          type: 'qcm',
          question: 'Le port du casque est-il obligatoire pour les adultes sur une trottinette électrique ?',
          options: [
            'Oui, pour tout le monde',
            'Non, seulement pour les mineurs',
            'Oui, seulement en ville',
            'Non, jamais',
          ],
          correctIndex: 1,
          explanation: 'Le texte dit "port du casque obligatoire pour les mineurs". Pour les adultes, le casque est recommandé mais pas légalement obligatoire sur trottinette électrique en France (règlement 2020).',
        },
        {
          id: 'a2-tr-04-ex09',
          type: 'qcm',
          question: 'Complétez avec "malgré" ou "bien que" : "___ la distance, elle préfère marcher."',
          options: [
            '"Bien que la distance" (correct)',
            '"Malgré la distance" (correct, suivi d\'un nom)',
            'Les deux sont corrects',
            'Aucun n\'est correct ici',
          ],
          correctIndex: 1,
          explanation: '"MALGRÉ + NOM (sans verbe)." "Malgré LA DISTANCE, elle préfère marcher." "Bien que" nécessite un sujet + verbe au subjonctif : "Bien que la distance SOIT grande." "Malgré" est plus simple.',
        },
        {
          id: 'a2-tr-04-ex10',
          type: 'qcm',
          question: 'Qu\'est-ce que l\'"autopartage" ?',
          options: [
            'Un système de covoiturage',
            'Un service de location de voiture à courte durée (à l\'heure ou à la journée)',
            'L\'achat d\'une voiture en commun',
            'Un service de taxi partagé',
          ],
          correctIndex: 1,
          explanation: 'L\'autopartage = car sharing. On utilise une voiture disponible à la demande (à l\'heure ou à la journée) sans être propriétaire. Services : OUI.car, Getaround, Communauto... Utile pour les personnes qui ont rarement besoin d\'une voiture.',
        },
        {
          id: 'a2-tr-04-ex11',
          type: 'qcm',
          question: 'Opposition : "La voiture est pratique. ___, elle pollue beaucoup."',
          options: ['Donc', 'Par contre / En revanche', 'Car', 'Ainsi'],
          correctIndex: 1,
          explanation: '"PAR CONTRE / EN REVANCHE, elle pollue beaucoup." Ces deux connecteurs introduisent un élément contrastif. "Par contre" est familier / courant. "En revanche" est plus soutenu.',
        },
        {
          id: 'a2-tr-04-ex12',
          type: 'qcm',
          question: 'Combien coûte le Vélib\' à Paris pour 30 minutes ?',
          options: ['0,50€', '1,70€', '2,50€', '3€'],
          correctIndex: 1,
          explanation: 'Le texte dit "Vélib\' à Paris (1,70€/30 min)". Le Vélib\' est le service de vélos en libre-service de Paris. Les 30 premières minutes sur un vélo classique sont incluses avec un abonnement annuel.',
        },
        {
          id: 'a2-tr-04-ex13',
          type: 'qcm',
          question: '"Pourtant" vs "cependant" — quelle est la nuance ?',
          options: [
            'Ils sont totalement identiques',
            '"Pourtant" exprime la surprise/contradiction / "Cependant" est une opposition plus neutre et formelle',
            '"Cependant" est plus fort que "pourtant"',
            '"Pourtant" est soutenu / "cependant" est familier',
          ],
          correctIndex: 1,
          explanation: '"Pourtant" implique une surprise, une contradiction avec ce qu\'on attendrait (against expectations). "Cependant" est une opposition plus neutre et formelle. "Il est malade. POURTANT, il travaille." (surprise) vs "C\'est risqué. CEPENDANT, nous continuons." (neutre).',
        },
        {
          id: 'a2-tr-04-ex14',
          type: 'qcm',
          question: 'Que signifie "en libre-service" pour un vélo ou une trottinette ?',
          options: [
            'Gratuit et disponible pour tous',
            'Disponible en location libre, sans réservation préalable (on prend et dépose où on veut)',
            'Un service réservé aux abonnés',
            'Un service géré par l\'État',
          ],
          correctIndex: 1,
          explanation: '"En libre-service" = self-service. On peut prendre un vélo/trottinette disponible n\'importe où dans la ville (via une app), l\'utiliser et le déposer dans une autre station ou zone définie. Pas de réservation nécessaire.',
        },
        {
          id: 'a2-tr-04-ex15',
          type: 'qcm',
          question: 'Complétez : "___ c\'est cher, beaucoup de Français prennent BlaBlaCar."',
          options: [
            'Pourtant... (en tête de phrase avec inversion)',
            'Même si c\'est cher',
            'Malgré il est cher',
            'Bien que c\'est cher',
          ],
          correctIndex: 1,
          explanation: '"Même si C\'EST CHER, beaucoup de Français prennent BlaBlaCar." "Même si" + indicatif (c\'est). Erreur fréquente : "bien que c\'est" ❌ → "bien que ce SOIT" ✓ (subjonctif).',
        },
        {
          id: 'a2-tr-04-ex16',
          type: 'qcm',
          question: 'Les trottinettes électriques sont-elles autorisées sur les trottoirs ?',
          options: [
            'Oui, partout',
            'Non, elles sont interdites sur les trottoirs',
            'Oui, seulement à faible vitesse',
            'Seulement pour les adultes',
          ],
          correctIndex: 1,
          explanation: 'Le texte dit "interdit sur les trottoirs." Les trottinettes électriques doivent circuler sur les pistes cyclables ou les routes (30 km/h max). Sur trottoir = amende. Interdit aussi aux mineurs de moins de 12 ans.',
        },
        {
          id: 'a2-tr-04-ex17',
          type: 'qcm',
          question: '"Moyennant une participation aux frais" (BlaBlaCar) signifie :',
          options: [
            'Gratuitement',
            'En payant une part des frais de transport',
            'Avec une réduction',
            'Avec un abonnement mensuel',
          ],
          correctIndex: 1,
          explanation: '"Moyennant" = in exchange for / for the price of. "Moyennant une participation aux frais" = en payant une partie des frais (carburant, péages). Le conducteur ne doit pas faire de profit — BlaBlaCar calcule le prix maximum légal.',
        },
        {
          id: 'a2-tr-04-ex18',
          type: 'qcm',
          question: 'Opposition formelle : "Ce service est utile. ___, il est encore peu connu."',
          options: [
            'Cependant, il est encore peu connu',
            'Mais, il est encore peu connu',
            'Pourtant, il est encore peu connu',
            'A et C sont corrects (cependant et pourtant, selon la nuance)',
          ],
          correctIndex: 3,
          explanation: 'Les deux sont grammaticalement corrects, avec une nuance : "CEPENDANT" = opposition neutre (registre soutenu). "POURTANT" = surprise (on s\'attendrait à ce qu\'un service utile soit connu). À choisir selon le contexte.',
        },
        {
          id: 'a2-tr-04-ex19',
          type: 'qcm',
          question: 'Qu\'est-ce que "VAE" dans "vélo à assistance électrique (VAE)" ?',
          options: [
            'Vélo À Énergie',
            'Vélo À Assistance Électrique',
            'Véhicule À Énergie',
            'Vélo Autonome Électrique',
          ],
          correctIndex: 1,
          explanation: 'VAE = Vélo à Assistance Électrique. Un moteur électrique assiste le pédalage jusqu\'à 25 km/h. Il est considéré comme un vélo (pas de permis, pas d\'assurance obligatoire). Des aides de l\'État (jusqu\'à 400€) et régionales existent pour l\'achat.',
        },
        {
          id: 'a2-tr-04-ex20',
          type: 'qcm',
          question: 'Complétez avec la structure de concession correcte : "___ la distance soit grande, il va au travail à vélo."',
          options: [
            'Bien que',
            'Même si',
            'Malgré que',
            'A et B sont possibles (avec le bon mode)',
          ],
          correctIndex: 0,
          explanation: '"Bien que la distance SOIT grande" (subjonctif). "Malgré que" existe mais est critiqué — préférer "bien que" + subjonctif. "Même si la distance EST grande" serait aussi correct (indicatif). Ici, seul "bien que" correspond à la structure proposée ("soit" = subjonctif de "être").',
        },
      ],
    },
  ],
};
