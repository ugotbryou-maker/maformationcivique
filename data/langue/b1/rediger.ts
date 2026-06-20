import type { LangModule } from '../types';

export const b1Rediger: LangModule = {
  id: 'b1-mod-05',
  slug: 'b1-rediger',
  level: 'B1',
  title: 'Rédiger en français',
  subtitle: 'Lettres formelles, emails et documents administratifs',
  description: 'Apprenez à rédiger des lettres formelles, des emails professionnels et des documents administratifs en français.',
  type: 'thematique',
  emoji: '✍️',
  free: false,
  lessons: [
    {
      id: 'b1-red-01',
      slug: 'b1-lettre-formelle',
      moduleSlug: 'b1-rediger',
      level: 'B1',
      title: 'La lettre formelle',
      description: 'Maîtrisez la structure et les formules d\'une lettre formelle française.',
      duration: 35,
      free: false,
      dialogue: `## Exemple : Lettre de réclamation à un bailleur

---

**Kenza Boukhari**
12 rue des Lilas
75015 Paris
Tél : 06 12 34 56 78
kenza.boukhari@email.fr

**SARL Immobilière Dumont**
45 avenue de la République
75011 Paris

Paris, le 15 mars 2024

**Objet : Demande de réparation — infiltration d'eau — Appartement n°7**

Madame, Monsieur,

Je me permets de vous contacter au sujet d'un problème persistant dans mon logement situé au 12 rue des Lilas, appartement n°7, que je loue depuis le 1er janvier 2023.

En effet, depuis plusieurs semaines, je constate des infiltrations d'eau au niveau du plafond de la salle de bains. Malgré ma demande orale du 5 mars dernier, aucune intervention n'a encore eu lieu.

Je vous rappelle que, conformément à l'article 6 de la loi du 6 juillet 1989, le bailleur est tenu d'assurer au locataire la jouissance paisible du logement et d'y effectuer les réparations nécessaires. Par conséquent, je vous demande de bien vouloir faire procéder aux travaux nécessaires dans les meilleurs délais.

À défaut de réponse sous 15 jours, je serai contraint(e) de saisir la Commission Départementale de Conciliation.

Dans l'attente de votre réponse, je vous adresse, Madame, Monsieur, mes cordiales salutations.

**Kenza Boukhari**

---
*P.J. : photos des infiltrations (3), copie du bail*`,

      linguisticPoint: `## Point linguistique : Les formules de la lettre formelle

### Structure d'une lettre formelle
1. **Coordonnées expéditeur** (en haut à gauche) + date (en haut à droite)
2. **Coordonnées destinataire** (sous les coordonnées expéditeur)
3. **Objet** (résumé en quelques mots — OBLIGATOIRE en administratif)
4. **Formule d'appel** : "Madame, Monsieur," / "Madame la Directrice,"
5. **Corps** : introduction / développement / demande/conclusion
6. **Formule de politesse** (longue et codifiée)
7. **Signature**

### Formules d'appel
| Destinataire | Formule |
|---|---|
| Inconnu | Madame, Monsieur, |
| Femme | Madame, |
| Homme | Monsieur, |
| Préfet | Monsieur le Préfet, |
| Directeur | Monsieur le Directeur, |

### Formules de politesse finales (corps de la phrase)
- "...je vous adresse, Madame, mes sincères salutations."
- "...veuillez agréer, Monsieur, l'expression de mes salutations distinguées."
- "...je vous prie d'agréer, Madame, Monsieur, l'expression de mes sentiments les meilleurs."

### Formules de transition courantes
- "Je me permets de vous contacter au sujet de..."
- "En effet, ... / Par conséquent, ..."
- "Conformément à / En vertu de..."
- "À défaut de réponse sous X jours, je serai contraint(e) de..."
- "Dans l'attente de votre réponse..."`,

      keyPoints: [
        'Structure : expéditeur / destinataire / objet / appel / corps / politesse / signature',
        '"Objet :" = obligatoire dans toute lettre administrative',
        'Formule d\'appel : "Madame, Monsieur," (destinataire inconnu)',
        '"Conformément à l\'article X de la loi du..." = formule juridique clé',
        '"P.J. :" = Pièces Jointes (liste des documents annexés)',
      ],

      exercises: [
        {
          id: 'b1-red-01-ex01',
          type: 'qcm',
          question: 'Dans une lettre formelle, "P.J." signifie :',
          options: ['Politique Juridique', 'Pièces Jointes', 'Personnes Joignables', 'Première Justification'],
          correctIndex: 1,
          explanation: '"P.J." = Pièces Jointes. Liste des documents annexés à la lettre (copie de pièce d\'identité, bail, photos...). Toujours en bas à gauche de la lettre, après la signature.',
        },
        {
          id: 'b1-red-01-ex02',
          type: 'qcm',
          question: 'La formule d\'appel correcte pour un destinataire dont on ne connaît pas le sexe :',
          options: ['Cher Monsieur,', 'Bonjour,', 'Madame, Monsieur,', 'Salutations,'],
          correctIndex: 2,
          explanation: '"Madame, Monsieur," = formule standard quand on ne sait pas si le destinataire est un homme ou une femme. "Cher Monsieur" / "Chère Madame" = trop familier pour une lettre formelle. "Bonjour" = email courant mais pas lettre formelle.',
        },
        {
          id: 'b1-red-01-ex03',
          type: 'qcm',
          question: '"Conformément à l\'article 6 de la loi de 1989" signifie :',
          options: [
            'Selon mon interprétation personnelle de la loi',
            'En accord avec ce que dit l\'article 6 de cette loi',
            'Malgré ce que dit l\'article 6',
            'Pour modifier l\'article 6 de la loi',
          ],
          correctIndex: 1,
          explanation: '"Conformément à" = in accordance with / conformément à. Signifie "en accord avec", "tel que le prévoit". Formule très utilisée dans les lettres administratives et juridiques pour citer la base légale d\'une demande.',
        },
        {
          id: 'b1-red-01-ex04',
          type: 'qcm',
          question: 'Où place-t-on les coordonnées du destinataire dans une lettre formelle ?',
          options: [
            'En haut à droite, sous la date',
            'En bas de la lettre, avant la signature',
            'Sous les coordonnées de l\'expéditeur (à gauche), avant l\'objet',
            'En haut à gauche, avant les coordonnées de l\'expéditeur',
          ],
          correctIndex: 2,
          explanation: 'Structure standard : coordonnées expéditeur (haut gauche) → coordonnées destinataire (dessous, à gauche) → lieu et date (haut droite) → objet → formule d\'appel → corps → formule de politesse → signature.',
        },
        {
          id: 'b1-red-01-ex05',
          type: 'qcm',
          question: '"Je me permets de vous contacter au sujet de..." sert à :',
          options: [
            'S\'excuser d\'écrire',
            'Introduire poliment l\'objet de la lettre',
            'Terminer la lettre',
            'Citer une loi',
          ],
          correctIndex: 1,
          explanation: '"Je me permets de vous contacter" = formule d\'introduction polie pour commencer une lettre. Équivalent de "I am writing to you regarding...". Plus formel que "Je vous écris pour...".',
        },
        {
          id: 'b1-red-01-ex06',
          type: 'qcm',
          question: '"À défaut de réponse sous 15 jours, je serai contraint(e) de saisir..." signifie :',
          options: [
            'Je suis déjà en train de saisir le tribunal',
            'Si je ne reçois pas de réponse dans 15 jours, j\'irai devant une autorité',
            'Je refuse d\'attendre plus de 15 jours',
            'Je suis déjà en attente depuis 15 jours',
          ],
          correctIndex: 1,
          explanation: '"À défaut de..." = "en l\'absence de..." / "faute de...". "À défaut de réponse sous 15 jours" = if no response within 15 days. C\'est une formule de mise en demeure — elle annonce une action ultérieure si la demande n\'est pas satisfaite.',
        },
        {
          id: 'b1-red-01-ex07',
          type: 'qcm',
          question: 'Quelle formule de politesse finale est correcte ?',
          options: [
            '"Cordialement" (tout seul)',
            '"Veuillez agréer, Madame, l\'expression de mes salutations distinguées."',
            '"Bonne journée à vous."',
            '"Merci d\'avance."',
          ],
          correctIndex: 1,
          explanation: '"Veuillez agréer, Madame, l\'expression de mes salutations distinguées." = formule complète et correcte pour une lettre très formelle. "Cordialement" seul = pour emails semi-formels (accepté). Les formules de politesse de lettres formelles doivent reprendre la formule d\'appel.',
        },
        {
          id: 'b1-red-01-ex08',
          type: 'qcm',
          question: 'Dans l\'exemple, pourquoi Kenza cite-t-elle "l\'article 6 de la loi de 1989" ?',
          options: [
            'Pour impressionner le bailleur',
            'Pour montrer qu\'elle connaît ses droits et la base légale de sa demande',
            'Parce que c\'est obligatoire dans toute lettre',
            'Pour menacer de poursuites pénales',
          ],
          correctIndex: 1,
          explanation: 'Citer la base légale = montrer qu\'on connaît ses droits et que la demande est fondée en droit. Le bailleur comprend que la locataire est informée et sérieuse. C\'est une technique efficace dans les lettres de réclamation.',
        },
        {
          id: 'b1-red-01-ex09',
          type: 'qcm',
          question: '"Dans l\'attente de votre réponse" est une formule qui se place :',
          options: [
            'En début de lettre après l\'objet',
            'Juste avant la formule de politesse finale',
            'Au milieu du corps de la lettre',
            'Après la signature',
          ],
          correctIndex: 1,
          explanation: '"Dans l\'attente de votre réponse" = "Awaiting your response." Se place JUSTE AVANT la formule de politesse finale. Exprime qu\'on attend une réponse et introduit naturellement la formule de clôture.',
        },
        {
          id: 'b1-red-01-ex10',
          type: 'qcm',
          question: '"En effet" en début de phrase sert à :',
          options: [
            'Introduire une concession',
            'Expliquer / développer ce qui précède',
            'Exprimer une opposition',
            'Conclure',
          ],
          correctIndex: 1,
          explanation: '"En effet" = indeed / in fact. Sert à EXPLIQUER ou CONFIRMER ce qui vient d\'être dit. "Il y a un problème. En effet, depuis plusieurs semaines..." = "Indeed, for several weeks..." Souvent confondu avec "en fait" (= actually, ce qui corrige quelque chose).',
        },
        {
          id: 'b1-red-01-ex11',
          type: 'qcm',
          question: 'L\'"objet" d\'une lettre administrative doit être :',
          options: [
            'Une phrase complète et détaillée',
            'Un résumé court (quelques mots) indiquant le but de la lettre',
            'La même chose que l\'introduction',
            'Une question',
          ],
          correctIndex: 1,
          explanation: 'L\'objet = court et précis : "Objet : Demande de congé — 15 au 30 mars 2024" ou "Objet : Réclamation — facture n°4521". Pas de phrase complète. L\'objet aide le destinataire à identifier et classer rapidement la lettre.',
        },
        {
          id: 'b1-red-01-ex12',
          type: 'qcm',
          question: '"Par conséquent" introduit :',
          options: ['Une cause', 'Une conséquence / une conclusion logique', 'Une opposition', 'Un exemple'],
          correctIndex: 1,
          explanation: '"Par conséquent" = therefore / consequently. Introduit la CONSÉQUENCE logique de ce qui précède. "Le plafond fuit depuis 3 semaines. PAR CONSÉQUENT, je vous demande d\'intervenir rapidement." Synonymes : "donc / ainsi / c\'est pourquoi".',
        },
        {
          id: 'b1-red-01-ex13',
          type: 'qcm',
          question: '"Je vous prie d\'agréer" dans la formule de politesse signifie :',
          options: [
            'Je vous supplie d\'accepter',
            'Je vous demande poliment de prendre acte (formule ritualisée de politesse)',
            'Je suis en désaccord avec vous',
            'Je vous remercie de votre réponse',
          ],
          correctIndex: 1,
          explanation: '"Je vous prie d\'agréer" = formule ritualisée. "Agréer" = to accept, to acknowledge. C\'est une formule conventionnelle — elle ne signifie rien de littéral. Variante : "Veuillez agréer" (plus direct). Ces formules sont codifiées et attendues dans le contexte formel français.',
        },
        {
          id: 'b1-red-01-ex14',
          type: 'qcm',
          question: 'Dans une lettre au préfet, la formule d\'appel correcte est :',
          options: [
            'Monsieur,',
            'Monsieur le Préfet,',
            'Cher Préfet,',
            'Madame, Monsieur le Préfet,',
          ],
          correctIndex: 1,
          explanation: '"Monsieur le Préfet," = formule correcte pour écrire au préfet. Pour une femme : "Madame la Préfète,". On utilise le titre de fonction. Cette règle s\'applique à tous les titres : "Monsieur le Maire / Madame la Directrice / Monsieur le Ministre".',
        },
        {
          id: 'b1-red-01-ex15',
          type: 'qcm',
          question: '"Malgré ma demande orale du 5 mars dernier, aucune intervention n\'a encore eu lieu." Cette phrase exprime :',
          options: ['Une cause', 'Une concession (opposition entre deux faits)', 'Un but', 'Une condition'],
          correctIndex: 1,
          explanation: '"Malgré" = despite. CONCESSION : j\'ai fait une demande (attendu un résultat) MAIS rien n\'a changé. "Malgré + nom" = opposition/concession. "Malgré ma demande" (fait positif) → "aucune intervention" (résultat négatif contraire à l\'attente).',
        },
        {
          id: 'b1-red-01-ex16',
          type: 'qcm',
          question: '"Le bailleur est TENU d\'assurer la jouissance paisible" — que signifie "être tenu de" ?',
          options: [
            'Être libre de',
            'Être obligé de (avoir l\'obligation légale de)',
            'Être encouragé à',
            'Être autorisé à',
          ],
          correctIndex: 1,
          explanation: '"Être tenu de + infinitif" = être obligé de / avoir l\'obligation de. Formule juridique. "Le bailleur EST TENU D\'entretenir le logement" = the landlord is legally required to maintain the property.',
        },
        {
          id: 'b1-red-01-ex17',
          type: 'qcm',
          question: '"Faire procéder aux travaux" signifie :',
          options: [
            'Faire les travaux soi-même',
            'Demander/commander que quelqu\'un d\'autre fasse les travaux',
            'Refuser de faire les travaux',
            'Évaluer les travaux',
          ],
          correctIndex: 1,
          explanation: '"Faire procéder à" = faire en sorte que quelqu\'un d\'autre réalise quelque chose. "Je vous demande de faire PROCÉDER aux travaux" = I request that you have the work done / arrange for the work to be done. Construction : "faire + infinitif" = causatif.',
        },
        {
          id: 'b1-red-01-ex18',
          type: 'qcm',
          question: 'Quel est l\'ordre correct des éléments dans une lettre formelle ?',
          options: [
            'Corps → objet → formule d\'appel → coordonnées → signature',
            'Formule d\'appel → coordonnées → objet → corps → signature → formule de politesse',
            'Coordonnées expéditeur → coordonnées destinataire → date → objet → formule d\'appel → corps → formule de politesse → signature',
            'Objet → coordonnées → formule d\'appel → corps → signature',
          ],
          correctIndex: 2,
          explanation: 'Ordre correct : (1) Coordonnées expéditeur, (2) Coordonnées destinataire, (3) Lieu et date, (4) Objet, (5) Formule d\'appel, (6) Corps (introduction + développement + demande), (7) Formule de politesse, (8) Signature, (9) P.J. éventuellement.',
        },
        {
          id: 'b1-red-01-ex19',
          type: 'qcm',
          question: '"Dans les meilleurs délais" signifie :',
          options: [
            'Dans un délai légalement fixé',
            'Le plus rapidement possible',
            'Dans 30 jours exactement',
            'Après un certain temps',
          ],
          correctIndex: 1,
          explanation: '"Dans les meilleurs délais" = le plus rapidement possible / as soon as possible. Formule de lettre formelle. Équivalent de "ASAP" en anglais mais dans un registre soutenu. Plus poli que "immédiatement" (qui peut sonner impératif).',
        },
        {
          id: 'b1-red-01-ex20',
          type: 'qcm',
          question: 'Pourquoi est-il important d\'envoyer une lettre recommandée avec accusé de réception (LRAR) en cas de litige ?',
          options: [
            'C\'est moins cher que les emails',
            'Elle prouve que le destinataire a bien reçu la lettre (preuve juridique)',
            'C\'est la seule façon d\'écrire à l\'administration',
            'La lettre recommandée bénéficie d\'un traitement prioritaire',
          ],
          correctIndex: 1,
          explanation: 'LRAR = Lettre Recommandée Avec Accusé de Réception. L\'AR = document signé par le destinataire prouvant qu\'il a BIEN REÇU la lettre. En cas de litige (tribunal), cette preuve est essentielle. "Je n\'ai jamais reçu votre courrier" ne peut pas être dit après un AR.',
        },
      ],
    },

    {
      id: 'b1-red-02',
      slug: 'b1-email-professionnel',
      moduleSlug: 'b1-rediger',
      level: 'B1',
      title: 'L\'email professionnel',
      description: 'Rédiger des emails professionnels clairs et efficaces dans différents contextes.',
      duration: 35,
      free: false,
      dialogue: `## Exemple : Email de candidature

---

**De :** hassan.diallo@email.fr
**À :** recrutement@entreprisetechsolutions.fr
**Objet :** Candidature au poste de technicien de maintenance — Réf. TM2024-03

---

Madame, Monsieur,

Je vous adresse ma candidature pour le poste de technicien de maintenance répertorié sur le site Pole Emploi sous la référence TM2024-03.

Titulaire d'un BTS Maintenance Industrielle obtenu en Tunisie en 2019, j'exerce depuis lors comme technicien de maintenance dans une usine de production à Tunis, où j'assure l'entretien préventif et curatif des équipements.

Arrivé en France il y a deux ans dans le cadre d'un regroupement familial, je bénéficie d'une carte de séjour "salarié" valable jusqu'en 2026 et je suis pleinement autorisé à travailler en France. Mon niveau de français, évalué B2 par le DELF en 2023, me permet de communiquer efficacement avec les équipes et les clients.

Convaincu que mon profil correspond à vos besoins, je me tiens à votre disposition pour un entretien à votre convenance. Vous trouverez ci-joints mon CV et ma lettre de motivation.

Dans l'attente de votre réponse, je vous adresse mes cordiales salutations.

**Hassan Diallo**
Tél : 07 89 01 23 45

*P.J. : CV (1 p.) — Lettre de motivation (1 p.) — Copie DELF B2*

---`,

      linguisticPoint: `## Point linguistique : Les participes présents et passés comme adjectifs

### Le participe présent (en -ant)
Formé sur le radical de "nous" au présent + **-ant**
- travailler → nous travaillons → **travaillant**
- avoir → nous avons → **ayant**
- être → nous sommes → **étant**

**Usage :**
- Simultanéité : "**Travaillant** en France depuis 2 ans, je connais le marché."
- Équivalent de "qui + verbe" : "Les candidats **maîtrisant** l'anglais" = "qui maîtrisent"
- **Gérondif** (en + PP) : "**En travaillant** sérieusement..." (comment / manière)

### Le participe passé comme adjectif
- "**Convaincu** que mon profil correspond..." (= étant convaincu)
- "**Titulaire** d'un BTS..." (= comme/étant titulaire)
- "**Arrivé** en France il y a deux ans..." (= étant arrivé)

### Accord du participe passé adjectif
S\'accorde avec le nom qu\'il qualifie :
- "**Convaincu** (masc.) que... / **Convaincue** (fém.) que..."
- "Des candidats **sélectionnés** / des candidates **sélectionnées**"`,

      keyPoints: [
        'Objet email candidature = "Candidature au poste de X — Réf. YYY"',
        '"Titulaire d\'un diplôme" / "Bénéficiaire d\'une carte de séjour" = formule CV',
        'Participe présent = radical "nous" + -ant (travaillant / ayant / étant)',
        '"Convaincu que / Arrivé en France / Titulaire d\'un BTS" = PP adjectival en tête de phrase',
        '"Vous trouverez ci-joints" = façon formelle d\'annoncer les pièces jointes',
        ],

      exercises: [
        {
          id: 'b1-red-02-ex01',
          type: 'qcm',
          question: 'Participe présent de "maîtriser" :',
          options: ['maîtrisant', 'maîtrisé', 'maîtrise', 'maîtriser'],
          correctIndex: 0,
          explanation: '"Maîtriser" → radical "nous maîtrisons" → "maîtris-" + "-ant" = "MAÎTRISANT". "Les candidats maîtrisant l\'anglais" = "les candidats qui maîtrisent l\'anglais". Le participe présent est INVARIABLE (pas d\'accord).',
        },
        {
          id: 'b1-red-02-ex02',
          type: 'qcm',
          question: '"Titulaire d\'un BTS" dans un CV signifie :',
          options: [
            'Ayant suivi une formation BTS (sans l\'obtenir)',
            'Possédant le diplôme BTS (l\'avoir obtenu)',
            'Étudiant actuellement en BTS',
            'Enseignant le BTS',
          ],
          correctIndex: 1,
          explanation: '"Être titulaire de" = posséder un diplôme ou un titre. "Titulaire d\'un BTS" = holder of a BTS diploma. Différent de "avoir suivi une formation" (sans nécessairement obtenir le diplôme). À utiliser dans les CV et lettres de motivation.',
        },
        {
          id: 'b1-red-02-ex03',
          type: 'qcm',
          question: 'Participe présent de "avoir" :',
          options: ['avantant', 'ayant', 'avant', 'avent'],
          correctIndex: 1,
          explanation: '"Avoir" → radical "nous avons" → "av-" + "-ant" = "AYANT". Irrégulier : "avons" → "ay-" + "-ant". "Ayant obtenu mon diplôme en 2019..." = "Comme j\'ai obtenu mon diplôme en 2019..."',
        },
        {
          id: 'b1-red-02-ex04',
          type: 'qcm',
          question: '"Vous trouverez CI-JOINTS mon CV et ma lettre de motivation." "Ci-joints" s\'accorde car :',
          options: [
            'Ci-joints est toujours invariable',
            '"Ci-joints" s\'accorde avec "mon CV et ma lettre" (pluriel) quand il est placé après le nom',
            '"Ci-joint" ne s\'accorde jamais',
            '"Ci-joint" s\'accorde seulement au féminin',
          ],
          correctIndex: 1,
          explanation: '"Ci-joint" = participe passé adjectif. S\'accorde quand il est APRÈS les noms : "vous trouverez mon CV et ma lettre, CI-JOINTS." Si avant : "CI-JOINT mon CV et ma lettre" (invariable car avant le nom). Règle complexe souvent simplifiée : "ci-joint" avant = invariable.',
        },
        {
          id: 'b1-red-02-ex05',
          type: 'qcm',
          question: '"Convaincu que mon profil correspond..." — le participe passé est accordé car :',
          options: [
            'Il est employé avec "être" sous-entendu + sujet masculin singulier (Hassan)',
            'Il s\'accorde avec "profil"',
            'Il est invariable',
            'Il s\'accorde avec "mon"',
          ],
          correctIndex: 0,
          explanation: '"Convaincu" = participe passé adjectif accordé avec le SUJET de la phrase (Hassan = masculin singulier). "Étant convaincu que..." (= "Convaincu que..."). Si c\'était une femme : "Convaincue que mon profil correspond..."',
        },
        {
          id: 'b1-red-02-ex06',
          type: 'qcm',
          question: 'L\'objet d\'un email de candidature doit contenir :',
          options: [
            'Uniquement le nom du poste',
            'Le poste + la référence de l\'annonce si disponible',
            'Votre nom et prénom',
            'La date de l\'email',
          ],
          correctIndex: 1,
          explanation: 'Objet idéal : "Candidature au poste de X — Réf. YYY". Pourquoi la référence ? Elle aide le service RH à classer les candidatures. Sans référence, les grandes entreprises reçoivent des centaines d\'emails et il est difficile de les identifier.',
        },
        {
          id: 'b1-red-02-ex07',
          type: 'qcm',
          question: 'Gérondif : "En travaillant sérieusement, il a obtenu son diplôme." Que signifie le gérondif ?',
          options: ['Cause', 'Manière / moyen par lequel', 'Opposition', 'But'],
          correctIndex: 1,
          explanation: '"En travaillant" = gérondif (en + participe présent). Il indique la MANIÈRE ou le MOYEN : comment il a obtenu son diplôme. "En travaillant sérieusement" = c\'est en travaillant qu\'il a réussi (moyen/manière).',
        },
        {
          id: 'b1-red-02-ex08',
          type: 'qcm',
          question: '"Je me tiens à votre disposition pour un entretien à votre convenance." Que signifie "à votre convenance" ?',
          options: [
            'Selon votre budget',
            'Selon vos préférences de date et d\'heure',
            'À un endroit de votre choix',
            'Selon vos normes professionnelles',
          ],
          correctIndex: 1,
          explanation: '"À votre convenance" = at your convenience / selon ce qui vous convient. "Convenance" = ce qui convient, ce qui est commode. "Je suis disponible à votre convenance" = I am available at your convenience (pour la date, l\'heure).',
        },
        {
          id: 'b1-red-02-ex09',
          type: 'qcm',
          question: 'Participe présent de "être" :',
          options: ['étantant', 'ayant été', 'étant', 'esant'],
          correctIndex: 2,
          explanation: '"Être" → "ÉTANT". Irrégulier (pas de radical "nous sommes"). "Étant arrivé en France il y a deux ans" = "Comme je suis arrivé en France il y a deux ans..." Participe présent d\'"être" toujours irrégulier : "étant".',
        },
        {
          id: 'b1-red-02-ex10',
          type: 'qcm',
          question: 'Pourquoi Hassan mentionne-t-il sa carte de séjour "salarié" dans sa candidature ?',
          options: [
            'C\'est obligatoire légalement dans toute candidature',
            'Pour rassurer l\'employeur sur son droit au travail en France',
            'Pour demander un salaire plus élevé',
            'Parce que son recruteur est la préfecture',
          ],
          correctIndex: 1,
          explanation: 'Mentionner sa carte de séjour et son autorisation de travail RASSURE l\'employeur qui pourrait craindre des complications administratives. C\'est une information pertinente pour les candidats étrangers. "Pleinement autorisé à travailler en France" = levée d\'ambiguïté proactive.',
        },
        {
          id: 'b1-red-02-ex11',
          type: 'qcm',
          question: '"Répertorié sur le site Pôle Emploi" — "répertorié" est un participe passé adjectif. Il s\'accorde avec :',
          options: ['répertorié', 'le poste (masculin singulier)', 'le site (masculin)', 'les candidats'],
          correctIndex: 1,
          explanation: '"Le poste RÉPERTORIÉ sur le site." "Répertorié" s\'accorde avec "le poste" (masc. sing.) → "répertorié" (masc. sing.). Si on parlait d\'une "offre répertoriée" → féminin → "répertoriée".',
        },
        {
          id: 'b1-red-02-ex12',
          type: 'qcm',
          question: 'Participe présent en position de relative : "Les étudiants ___ (valider) leur année peuvent s\'inscrire."',
          options: ['validé', 'validant', 'valident', 'ont validé'],
          correctIndex: 1,
          explanation: '"Les étudiants VALIDANT leur année." Participe présent = "les étudiants QUI valident." On remplace "qui + verbe conjugué" par un participe présent dans le registre soutenu ou formel.',
        },
        {
          id: 'b1-red-02-ex13',
          type: 'qcm',
          question: '"Entretien préventif et curatif" des équipements — que signifie "curatif" ?',
          options: [
            'Qui prévient les pannes (avant qu\'elles arrivent)',
            'Qui remédie aux pannes (après qu\'elles arrivent)',
            'Qui remplace les équipements',
            'Qui nettoie les équipements',
          ],
          correctIndex: 1,
          explanation: '"Curatif" = qui guérit / remédie à un problème existant. "Maintenance CURATIVE" = réparer une panne qui s\'est produite. "Maintenance PRÉVENTIVE" = entretien avant la panne pour l\'éviter. Opposition préventif/curatif = fondamentale en maintenance industrielle.',
        },
        {
          id: 'b1-red-02-ex14',
          type: 'qcm',
          question: 'Accord du PP adjectif féminin : "Convaincue que son profil correspond..." (pour une femme)',
          options: [
            'Convaincu',
            'Convaincue',
            'Convaincus',
            'Convaincues',
          ],
          correctIndex: 1,
          explanation: '"CONVAINCUE" = féminin singulier (pour une femme). PP adjectif "convaincu" → fém. → "convaincue" (+ -e). Si plusieurs femmes : "Convaincues". Le participe passé adjectif s\'accorde avec le sujet dont il dépend.',
        },
        {
          id: 'b1-red-02-ex15',
          type: 'qcm',
          question: 'Gérondif de sens temporel : "En lisant ce CV, vous verrez mes compétences." = ?',
          options: [
            'Parce que vous lisez ce CV...',
            'Au moment où / pendant que vous lisez ce CV...',
            'Si vous lisez ce CV...',
            'Avant de lire ce CV...',
          ],
          correctIndex: 1,
          explanation: '"En lisant ce CV, vous verrez..." = WHILE reading / AS you read. Gérondif temporel : action simultanée (lire et voir en même temps). "En lisant" = pendant que vous lisez = as you read.',
        },
        {
          id: 'b1-red-02-ex16',
          type: 'qcm',
          question: 'Comment finir un email professionnel à un collègue (semi-formel) ?',
          options: [
            '"Veuillez agréer, Monsieur, mes salutations distinguées."',
            '"Bisous"',
            '"Cordialement," ou "Bien cordialement,"',
            '"À bientôt!"',
          ],
          correctIndex: 2,
          explanation: '"Cordialement" = formule semi-formelle, standard pour les emails professionnels entre collègues ou partenaires. "Bien cordialement" = légèrement plus chaleureux. "Veuillez agréer..." = trop formel pour un collègue. "Bisous" = trop familier.',
        },
        {
          id: 'b1-red-02-ex17',
          type: 'qcm',
          question: 'Participe présent de "permettre" :',
          options: ['permettant', 'permetté', 'permes', 'permettis'],
          correctIndex: 0,
          explanation: '"Permettre" → radical "nous permettons" → "permett-" + "-ant" = "PERMETTANT". "Mon niveau de français, me permettant de communiquer..." = "Mon niveau de français, qui me permet de communiquer..."',
        },
        {
          id: 'b1-red-02-ex18',
          type: 'qcm',
          question: '"Dans le cadre d\'un regroupement familial" signifie :',
          options: [
            'Il est venu en France pour rejoindre sa famille qui y vivait déjà légalement',
            'Il a fondé une famille en France',
            'Il est venu comme réfugié',
            'Il a une famille nombreuse',
          ],
          correctIndex: 0,
          explanation: '"Regroupement familial" = procédure permettant à un étranger résidant légalement en France de faire venir son conjoint et/ou ses enfants mineurs. C\'est un visa spécifique. Pour l\'obtenir : résidence légale depuis + 18 mois, ressources suffisantes, logement adapté.',
        },
        {
          id: 'b1-red-02-ex19',
          type: 'qcm',
          question: 'Gérondif condition : "___ les démarches à temps, vous éviterez des complications."',
          options: ['Faisant', 'En faisant', 'Fait', 'Faire'],
          correctIndex: 1,
          explanation: '"EN FAISANT les démarches à temps, vous éviterez des complications." Gérondif conditionnel : si vous faites les démarches à temps → vous éviterez. "En + participe présent" = "si + verbe". Exprime la condition OU la manière.',
        },
        {
          id: 'b1-red-02-ex20',
          type: 'qcm',
          question: '"Mon niveau de français, évalué B2 par le DELF en 2023" — "évalué" est :',
          options: [
            'Un participe présent',
            'Un participe passé adjectif accordé avec "mon niveau"',
            'Un verbe conjugué',
            'Un infinitif',
          ],
          correctIndex: 1,
          explanation: '"Évalué" = participe passé ADJECTIF. Il décrit "mon niveau de français" (masc. sing.) → "évalué" (masc. sing.). "Mon niveau, évalué B2" = "mon niveau, qui a été évalué B2" (passif + participe passé adjectival).',
        },
      ],
    },

    {
      id: 'b1-red-03',
      slug: 'b1-documents-administratifs',
      moduleSlug: 'b1-rediger',
      level: 'B1',
      title: 'Comprendre et remplir des documents administratifs',
      description: 'Naviguer dans les formulaires administratifs français et comprendre les documents officiels.',
      duration: 35,
      free: false,
      dialogue: `## Texte : Les documents administratifs français — mode d'emploi

Les étrangers résidant en France sont régulièrement confrontés à des documents administratifs dont la complexité peut décourager. Voici les principaux.

**Le CERFA** : les formulaires administratifs français sont souvent des "CERFA" (Centre d'Enregistrement et de Révision des Formulaires Administratifs). Leur numéro (ex : CERFA n°14571*01) permet de les identifier. Ils sont disponibles sur service-public.fr.

**Les pièces justificatives courantes :**
- **Justificatif de domicile** : facture d'électricité/gaz, quittance de loyer, relevé bancaire (moins de 3 mois)
- **Justificatif de ressources** : bulletin de salaire, avis d'imposition, relevé CAF
- **Justificatif d'identité** : carte nationale d'identité, passeport, titre de séjour
- **Acte de naissance** : souvent avec apostille ou traduction assermentée si étranger

**La traduction assermentée** : pour les documents étrangers, une traduction réalisée par un traducteur agréé (assermenté) auprès de la Cour d'appel est souvent exigée. Ces traductions coûtent entre 50 et 150€ selon les langues.

**Les délais de réponse** :
Loi DCRA (2000) : l'administration a 2 mois pour répondre à une demande. Passé ce délai, son silence vaut en principe ACCORD (principe du "silence vaut acceptation"), sauf exceptions notables (titres de séjour, autorisations d'urbanisme...).

**L'application France Connect** permet aux étrangers autorisés de se connecter aux services publics français avec une identité numérique fiable.`,

      linguisticPoint: `## Point linguistique : Les structures impersonnelles et passives dans les textes officiels

### Structures impersonnelles fréquentes
| Structure | Exemple |
|---|---|
| Il est nécessaire de + inf. | Il est nécessaire de fournir... |
| Il est possible de + inf. | Il est possible de télécharger... |
| Il est interdit de + inf. | Il est interdit de mentir sur... |
| Il convient de + inf. | Il convient de joindre... |
| Il s\'agit de + nom | Il s\'agit d\'un formulaire... |
| Il est à noter que + indicatif | Il est à noter que le délai est... |
| Il est recommandé de + inf. | Il est recommandé de conserver... |
| Il appartient à + nom + de | Il appartient au demandeur de... |

### Passif impersonnel administratif
"Une traduction **est exigée**" / "Le formulaire **doit être rempli**"
"Les documents **seront vérifiés**" / "La demande **a été reçue**"

### Tournures impersonnelles à reconnaître
- "Sauf exceptions" = except in certain cases
- "En principe" = as a general rule / in principle
- "Passé ce délai" = after this deadline`,

      keyPoints: [
        'CERFA = formulaire administratif officiel (disponible sur service-public.fr)',
        'Justificatifs clés : domicile / ressources / identité (moins de 3 mois pour les deux premiers)',
        'Traduction assermentée = par traducteur agréé auprès de la Cour d\'appel',
        '"Silence vaut acceptation" = après 2 mois sans réponse (sauf titres de séjour)',
        '"Il appartient à + nom + de" = c\'est la responsabilité de... de faire quelque chose',
      ],

      exercises: [
        {
          id: 'b1-red-03-ex01',
          type: 'qcm',
          question: 'Structure impersonnelle : "___ de fournir un justificatif de domicile de moins de 3 mois."',
          options: [
            'Il convient',
            'Il se passe',
            'Il se convient',
            'Il va',
          ],
          correctIndex: 0,
          explanation: '"IL CONVIENT DE fournir..." "Il convient de + infinitif" = it is appropriate to / one must. Structure impersonnelle formelle très utilisée dans les textes administratifs. Équivalent moins soutenu : "il faut fournir."',
        },
        {
          id: 'b1-red-03-ex02',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un CERFA ?',
          options: [
            'Un certificat médical',
            'Un formulaire administratif officiel numéroté',
            'Un certificat de résidence administrative',
            'Un contrat de location',
          ],
          correctIndex: 1,
          explanation: 'CERFA = Centre d\'Enregistrement et de Révision des Formulaires Administratifs. Les CERFA sont les formulaires officiels de l\'administration française. Leur numéro unique permet de les identifier. Disponibles sur service-public.fr ou guichet.gouv.fr.',
        },
        {
          id: 'b1-red-03-ex03',
          type: 'qcm',
          question: 'Passif administratif : "Le formulaire ___ rempli en lettres capitales."',
          options: [
            'doit être',
            'doit avoir',
            'est devoir',
            'devra avoir',
          ],
          correctIndex: 0,
          explanation: '"Le formulaire DOIT ÊTRE rempli en lettres capitales." Passif : "être" + participe passé. "Doit être rempli" = must be completed. Formule impersonnelle administrative classique : "le document doit être signé / daté / paraphé..."',
        },
        {
          id: 'b1-red-03-ex04',
          type: 'qcm',
          question: 'Une "traduction assermentée" est réalisée par :',
          options: [
            'N\'importe quel traducteur bilingue',
            'Un traducteur agréé (assermenté) par la Cour d\'appel',
            'Le consulat du pays d\'origine',
            'La préfecture elle-même',
          ],
          correctIndex: 1,
          explanation: '"Assermenté" = sworn (ayant prêté serment). Un traducteur assermenté est agréé par une Cour d\'appel française. Sa traduction a valeur officielle. Pour les actes d\'état civil étrangers (naissance, mariage), une traduction assermentée est souvent exigée par l\'administration française.',
        },
        {
          id: 'b1-red-03-ex05',
          type: 'qcm',
          question: 'Structure impersonnelle : "___ que le silence de l\'administration vaut accord après 2 mois."',
          options: [
            'Il est à noter',
            'Il se note',
            'Il noterait',
            'Il a été noter',
          ],
          correctIndex: 0,
          explanation: '"IL EST À NOTER QUE le silence..." = it should be noted that. Structure impersonnelle formelle pour signaler une information importante. Équivalents : "il convient de noter que / à noter que / rappelons que."',
        },
        {
          id: 'b1-red-03-ex06',
          type: 'qcm',
          question: '"Le silence vaut acceptation" — que signifie ce principe ?',
          options: [
            'L\'administration accepte toujours les demandes',
            'Si l\'administration ne répond pas sous 2 mois, la demande est réputée acceptée',
            'Le silence des demandeurs est une acceptation',
            'Les demandes sont toujours acceptées sans réponse écrite',
          ],
          correctIndex: 1,
          explanation: '"Silence vaut acceptation" (SVA) : si l\'administration ne répond pas à une demande dans un délai de 2 mois, la réponse est considérée comme FAVORABLE. ⚠️ Exceptions importantes : titres de séjour, permis de construire, autorisations diverses → le silence vaut REFUS.',
        },
        {
          id: 'b1-red-03-ex07',
          type: 'qcm',
          question: '"Il appartient au demandeur de fournir les justificatifs." Que signifie cette structure ?',
          options: [
            'Les justificatifs appartiennent au demandeur',
            'C\'est la responsabilité du demandeur de fournir les justificatifs',
            'Le demandeur possède les justificatifs',
            'Les justificatifs doivent être fournis par n\'importe qui',
          ],
          correctIndex: 1,
          explanation: '"Il appartient à X de + infinitif" = it is X\'s responsibility to / c\'est à X de. "Il appartient au demandeur de fournir" = le demandeur est responsable de fournir. Construction formelle administrative. Synonyme : "il incombe à X de".',
        },
        {
          id: 'b1-red-03-ex08',
          type: 'qcm',
          question: '"Passé ce délai" dans "Passé ce délai, votre demande sera annulée" signifie :',
          options: [
            'Avant ce délai',
            'Pendant ce délai',
            'Une fois ce délai écoulé / après l\'expiration de ce délai',
            'Grâce à ce délai',
          ],
          correctIndex: 2,
          explanation: '"Passé ce délai" = after this deadline / once this deadline has passed. "Passé + nom temporel" = formule administrative. "Passé minuit" = after midnight. "Passé ce délai, votre demande sera annulée" = une fois ce délai expiré.',
        },
        {
          id: 'b1-red-03-ex09',
          type: 'qcm',
          question: '"L\'apostille" sur un document étranger est :',
          options: [
            'Une traduction française du document',
            'Une certification internationale de l\'authenticité du document (convention de La Haye)',
            'Un tampon de la préfecture française',
            'Une copie certifiée conforme',
          ],
          correctIndex: 1,
          explanation: 'L\'apostille = certification attestant l\'authenticité d\'un document officiel étranger, selon la Convention de La Haye de 1961. Elle est délivrée par l\'autorité compétente du pays d\'origine. Pour certains pays non-signataires, une "légalisation" est nécessaire (plus lourde).',
        },
        {
          id: 'b1-red-03-ex10',
          type: 'qcm',
          question: 'Structure impersonnelle : "___ de recommander la conservation de tous les courriers de l\'administration."',
          options: [
            'Il est',
            'Il est recommandé',
            'Il convient',
            'Les deux : "Il est recommandé" et "Il convient"',
          ],
          correctIndex: 3,
          explanation: '"IL EST RECOMMANDÉ de conserver..." et "IL CONVIENT DE conserver..." sont deux structures impersonnelles correctes et synonymes dans ce contexte. "Il est recommandé" = it is recommended. "Il convient de" = it is advisable to.',
        },
        {
          id: 'b1-red-03-ex11',
          type: 'qcm',
          question: 'Un "justificatif de domicile" de moins de 3 mois peut être :',
          options: [
            'Un contrat de travail',
            'Un bulletin de salaire',
            'Une facture d\'électricité ou une quittance de loyer',
            'Un acte de naissance',
          ],
          correctIndex: 2,
          explanation: 'Justificatif de domicile = document prouvant l\'adresse actuelle. Acceptés : facture d\'électricité/gaz/eau/téléphone, quittance de loyer, relevé bancaire, avis d\'imposition — tous de MOINS DE 3 MOIS. Le contrat de travail et le bulletin de salaire sont des justificatifs de ressources.',
        },
        {
          id: 'b1-red-03-ex12',
          type: 'qcm',
          question: '"Il s\'agit d\'un formulaire CERFA" — "il s\'agit de" est suivi de :',
          options: ['infinitif', 'subjonctif', 'nom ou infinitif', 'indicatif seulement'],
          correctIndex: 2,
          explanation: '"Il s\'agit DE + NOM ou DE + INFINITIF." "Il s\'agit d\'un formulaire" (+ nom) / "il s\'agit de remplir le formulaire" (+ infinitif). "Il s\'agit de" = it\'s about / it is a matter of. Très utile pour définir ou décrire.',
        },
        {
          id: 'b1-red-03-ex13',
          type: 'qcm',
          question: '"Les demandes seront vérifiées" est un passif au :',
          options: ['Présent', 'Passé composé', 'Futur simple', 'Imparfait'],
          correctIndex: 2,
          explanation: '"Seront vérifiées" = passif au FUTUR SIMPLE. "Être" (futur : "seront") + PP ("vérifiées", fém. pl. pour "les demandes"). "Les demandes seront vérifiées" = the applications will be checked.',
        },
        {
          id: 'b1-red-03-ex14',
          type: 'qcm',
          question: '"En principe, le silence vaut acceptation." Que signifie "en principe" ?',
          options: [
            'Toujours, sans exception',
            'Comme règle générale, mais avec des exceptions possibles',
            'Seulement en théorie, jamais en pratique',
            'C\'est un principe juridique sans force de loi',
          ],
          correctIndex: 1,
          explanation: '"En principe" = as a general rule / in principle. Laisse entendre qu\'il peut y avoir des exceptions. "En principe, le silence vaut accord... SAUF exceptions notables (titres de séjour...)." Opposé à "systématiquement" ou "toujours".',
        },
        {
          id: 'b1-red-03-ex15',
          type: 'qcm',
          question: 'Structure passif : "La demande ___ reçue le 15 mars." (passé composé passif)',
          options: [
            'est reçue',
            'a été reçue',
            'était reçue',
            'sera reçue',
          ],
          correctIndex: 1,
          explanation: '"La demande A ÉTÉ REÇUE le 15 mars." Passif passé composé : "avoir" (PC de "être") + PP. "A été" = passé composé d\'"être". "Reçue" = féminin singulier (accord avec "la demande"). Action passée et terminée.',
        },
        {
          id: 'b1-red-03-ex16',
          type: 'qcm',
          question: 'FranceConnect permet :',
          options: [
            'D\'appeler les services publics gratuits',
            'De se connecter aux services publics numériques avec une identité vérifiée',
            'De demander des rendez-vous en préfecture',
            'De payer ses impôts uniquement',
          ],
          correctIndex: 1,
          explanation: 'FranceConnect = système d\'identité numérique français. Permet de se connecter à de nombreux services publics (impôts, CAF, Ameli, Pôle Emploi...) avec une identité vérifiée. Évite de créer un compte sur chaque service. Accessible aux étrangers autorisés via leur titre de séjour numérique.',
        },
        {
          id: 'b1-red-03-ex17',
          type: 'qcm',
          question: '"Il incombe au demandeur de..." est synonyme de :',
          options: [
            '"Le demandeur peut..."',
            '"Il appartient au demandeur de... / c\'est la responsabilité du demandeur de..."',
            '"Le demandeur est interdit de..."',
            '"Il est probable que le demandeur..."',
          ],
          correctIndex: 1,
          explanation: '"Incomber à" = être la responsabilité de / appartenir à. "Il INCOMBE au demandeur de fournir" = "il APPARTIENT au demandeur de fournir" = "c\'est AU DEMANDEUR de fournir." Synonymes formels administratifs.',
        },
        {
          id: 'b1-red-03-ex18',
          type: 'qcm',
          question: '"Sauf exceptions notables" dans le contexte du silence vaut acceptation signifie :',
          options: [
            'Sauf les exceptions les plus importantes (qui s\'écartent de la règle)',
            'Sauf les exceptions récentes',
            'Sauf les exceptions légales non mentionnées',
            'Toutes les exceptions sont notables',
          ],
          correctIndex: 0,
          explanation: '"Notables" = remarquables / importantes. "Sauf exceptions notables" = sauf pour les cas les plus importants qui dérogent à la règle. Ici : les titres de séjour sont une exception NOTABLE car le silence de la préfecture vaut toujours REFUS (pas accord).',
        },
        {
          id: 'b1-red-03-ex19',
          type: 'qcm',
          question: '"Il est interdit de mentir sur un formulaire officiel." La conséquence peut être :',
          options: [
            'Aucune, car ce n\'est pas vérifiable',
            'Un refus de la demande et des poursuites pour faux en écriture publique',
            'Une simple demande de correction',
            'Un avertissement sans suite',
          ],
          correctIndex: 1,
          explanation: 'Mentir sur un formulaire officiel = FAUX EN ÉCRITURE PUBLIQUE. Infraction pénale en France (art. 441-2 Code pénal) : jusqu\'à 3 ans d\'emprisonnement et 45 000€ d\'amende, PLUS annulation de la demande et éventuelle interdiction du territoire. Ne jamais falsifier des documents administratifs.',
        },
        {
          id: 'b1-red-03-ex20',
          type: 'qcm',
          question: 'Sur un formulaire CERFA, "NOM (en lettres capitales)" signifie :',
          options: [
            'Écrire son prénom',
            'Écrire son nom de famille EN MAJUSCULES',
            'Signer le formulaire',
            'Écrire son pseudonyme',
          ],
          correctIndex: 1,
          explanation: '"En lettres capitales" = en MAJUSCULES. Sur les formulaires français, les noms sont généralement demandés EN MAJUSCULES pour faciliter la lecture. "Lettres capitales" = BLOCK LETTERS = MAJUSCULES. Prénom généralement avec initiale majuscule + minuscules.',
        },
      ],
    },

    {
      id: 'b1-red-04',
      slug: 'b1-compte-rendu-rapport',
      moduleSlug: 'b1-rediger',
      level: 'B1',
      title: 'Compte rendu et rapport simple',
      description: 'Rédiger un compte rendu de réunion ou un rapport simple dans un contexte professionnel.',
      duration: 35,
      free: false,
      dialogue: `## Exemple : Compte rendu de réunion

---

**COMPTE RENDU DE RÉUNION**

**Date :** Mardi 18 juin 2024
**Lieu :** Salle de réunion A, 3ème étage
**Présents :** Mme Nguyen (directrice), M. Gomes (responsable technique), Mme Boukhari (chargée de communication), M. Traoré (stagiaire)
**Excusés :** M. Petit (commercial)
**Rédacteur :** M. Traoré

---

**Ordre du jour :**
1. Point sur le projet en cours
2. Organisation du séminaire de juillet
3. Questions diverses

---

**1. Projet en cours**
Mme Nguyen a rappelé l'état d'avancement du projet : les phases 1 et 2 sont terminées. La phase 3, initialement prévue pour fin mai, a été repoussée à fin juillet en raison de difficultés techniques.
→ *Action : M. Gomes transmet un planning révisé d'ici le 25 juin.*

**2. Organisation du séminaire**
La discussion a porté sur le lieu et le format du séminaire de juillet. Trois propositions ont été soumises. Le groupe a décidé de retenir la formule "séminaire résidentiel" à Bordeaux, sous réserve de confirmation des disponibilités.
→ *Action : Mme Boukhari contacte le prestataire et confirme avant le 20 juin.*

**3. Questions diverses**
M. Traoré a soulevé la question du télétravail pendant l'été. La direction a indiqué que la politique existante s'applique sans modification.

---

**Fin de séance :** 14h30
**Prochaine réunion :** 9 juillet 2024 à 10h

Diffusion : tous les participants + M. Petit

---`,

      linguisticPoint: `## Point linguistique : Le discours indirect (rapport au passé)

### Transformation discours direct → indirect (temps passé)
| Discours direct | Discours indirect (verbe déclaratif au passé) |
|---|---|
| "Le projet **est** terminé." | Elle a dit que le projet **était** terminé. |
| "La phase 3 **sera** repoussée." | Elle a dit que la phase 3 **serait** repoussée. |
| "Nous **avons** fini la phase 2." | Elle a dit qu\'ils **avaient** fini la phase 2. |
| "Finissez le rapport !" | Elle a demandé **de** finir le rapport. |
| "Est-ce que vous avez terminé ?" | Elle a demandé **si** ils avaient terminé. |

### Changements de pronoms et d'indicateurs temporels
- "je" → "il/elle/ils/elles"
- "maintenant" → "à ce moment-là"
- "demain" → "le lendemain"
- "hier" → "la veille"
- "aujourd\'hui" → "ce jour-là"
- "ici" → "là"

### Verbes de déclaration (rappel B1)
dire / déclarer / affirmer / indiquer / préciser / souligner / signaler / rappeler / ajouter / reconnaître / reconnaître / nier`,

      keyPoints: [
        'Compte rendu = présents / excusés / ordre du jour / décisions / actions',
        '"Actions" = tableau des responsabilités (qui fait quoi, pour quand)',
        'Discours indirect passé : présent→imparfait / futur→conditionnel / PC→plus-que-parfait',
        '"Demain"→"le lendemain" / "hier"→"la veille" / "aujourd\'hui"→"ce jour-là"',
        'Impératif → discours indirect : "venez" → "a demandé de venir"',
      ],

      exercises: [
        {
          id: 'b1-red-04-ex01',
          type: 'qcm',
          question: 'Discours indirect : "La réunion est terminée." → Elle a dit que la réunion ___ terminée.',
          options: ['est', 'était', 'sera', 'serait'],
          correctIndex: 1,
          explanation: '"La réunion ÉTAIT terminée." Discours indirect passé : présent → IMPARFAIT. "La réunion est terminée" (présent) → "elle a dit que la réunion ÉTAIT terminée" (imparfait dans le discours indirect).',
        },
        {
          id: 'b1-red-04-ex02',
          type: 'qcm',
          question: 'Dans un compte rendu, "excusés" désigne :',
          options: [
            'Les personnes qui se sont mal comportées',
            'Les personnes absentes qui ont prévenu à l\'avance',
            'Les personnes qui ont quitté la réunion tôt',
            'Les personnes qui ne sont pas invitées',
          ],
          correctIndex: 1,
          explanation: '"Excusés" = personnes ABSENTES qui ont prévenu (qui ont envoyé leurs excuses). Différent de "absents" (sans information préalable). Dans un compte rendu professionnel, on distingue "présents" / "excusés" / "absents (sans excuse)".',
        },
        {
          id: 'b1-red-04-ex03',
          type: 'qcm',
          question: 'Discours indirect : "Nous terminerons demain." → Il a dit qu\'ils ___ le lendemain.',
          options: ['termineraient', 'termineront', 'termineraient', 'avaient terminé'],
          correctIndex: 0,
          explanation: '"Ils TERMINERAIENT le lendemain." Discours indirect passé : futur → CONDITIONNEL. "Terminerons" (futur) → "termineraient" (conditionnel). "Demain" → "le lendemain."',
        },
        {
          id: 'b1-red-04-ex04',
          type: 'qcm',
          question: 'L\'"ordre du jour" d\'une réunion est :',
          options: [
            'L\'heure de fin de réunion',
            'La liste des sujets à aborder lors de la réunion',
            'La liste des participants',
            'Le compte rendu de la réunion précédente',
          ],
          correctIndex: 1,
          explanation: '"Ordre du jour" = agenda. Liste des POINTS À TRAITER lors de la réunion. Il est généralement envoyé aux participants AVANT la réunion. Au début de la réunion, l\'ordre du jour est validé.',
        },
        {
          id: 'b1-red-04-ex05',
          type: 'qcm',
          question: 'Discours indirect (PC → PQP) : "Nous avons validé la phase 2." → Elle a dit qu\'ils ___ la phase 2.',
          options: ['ont validé', 'avaient validé', 'avaient été validés', 'valideraient'],
          correctIndex: 1,
          explanation: '"Ils AVAIENT VALIDÉ la phase 2." Discours indirect passé : passé composé → PLUS-QUE-PARFAIT. "Avons validé" (PC) → "avaient validé" (PQP = avoir à l\'imparfait + PP).',
        },
        {
          id: 'b1-red-04-ex06',
          type: 'qcm',
          question: '"Sous réserve de confirmation" dans le CR signifie :',
          options: [
            'La décision est définitive',
            'La décision est conditionnelle — elle dépend d\'une confirmation ultérieure',
            'La décision a déjà été confirmée',
            'La décision a été refusée',
          ],
          correctIndex: 1,
          explanation: '"Sous réserve de" = provided that / subject to / conditional on. "Décision retenue SOUS RÉSERVE DE confirmation" = la décision est prise MAIS n\'est définitive que si la confirmation arrive. Si la confirmation n\'arrive pas, la décision tombe.',
        },
        {
          id: 'b1-red-04-ex07',
          type: 'qcm',
          question: 'Discours indirect d\'une question oui/non : "Avez-vous terminé ?" → Elle a demandé ___ ils avaient terminé.',
          options: ['que', 'si', 'quand', 'pourquoi'],
          correctIndex: 1,
          explanation: '"Elle a demandé SI ils avaient terminé." Question oui/non → "si" dans le discours indirect. "Avez-vous terminé ?" (question directe) → "si ils avaient terminé" (discours indirect + imparfait).',
        },
        {
          id: 'b1-red-04-ex08',
          type: 'qcm',
          question: 'Dans le compte rendu, les "actions" sont :',
          options: [
            'Les décisions politiques de la direction',
            'Les tâches assignées à des personnes précises avec des délais',
            'Les points discutés mais non décidés',
            'Les points renvoyés à la prochaine réunion',
          ],
          correctIndex: 1,
          explanation: 'Les "actions" (ou "points d\'action" / "action items") = tâches concrètes à réaliser, assignées à des personnes précises, avec une date limite. Format standard : "→ Action : M. X fait Y avant le Z." C\'est le suivi des décisions prises en réunion.',
        },
        {
          id: 'b1-red-04-ex09',
          type: 'qcm',
          question: 'Discours indirect d\'un impératif : "Envoyez le rapport !" → La directrice a demandé ___ le rapport.',
          options: ['qu\'ils envoient', 'd\'envoyer', 'si ils envoient', 'envoyer'],
          correctIndex: 1,
          explanation: '"La directrice a demandé D\'ENVOYER le rapport." Impératif → "de + infinitif" dans le discours indirect. "Envoyez le rapport!" → "a demandé d\'envoyer le rapport." Si le sujet du verbe demandé est différent : "a demandé qu\'ils envoient" (subjonctif).',
        },
        {
          id: 'b1-red-04-ex10',
          type: 'qcm',
          question: '"La phase 3 a été repoussée à fin juillet en raison de difficultés techniques." "En raison de" indique :',
          options: ['Un but', 'Une cause (= à cause de, registre soutenu)', 'Une conséquence', 'Une condition'],
          correctIndex: 1,
          explanation: '"En raison de" = à cause de (registre soutenu). "En raison de difficultés techniques" = because of technical difficulties. Différent de "à cause de" (neutre/légèrement négatif) — "en raison de" est neutre et formel.',
        },
        {
          id: 'b1-red-04-ex11',
          type: 'qcm',
          question: 'Changement d\'indicateur temporel : "Venez demain !" → Elle a demandé de venir ___.',
          options: ['demain', 'hier', 'le lendemain', 'le jour suivant le jour suivant'],
          correctIndex: 2,
          explanation: '"Le LENDEMAIN." "Demain" → "le lendemain" dans le discours indirect au passé. Tableau : demain → le lendemain / hier → la veille / aujourd\'hui → ce jour-là / maintenant → à ce moment-là.',
        },
        {
          id: 'b1-red-04-ex12',
          type: 'qcm',
          question: '"M. Traoré a soulevé la question du télétravail." "Soulever une question" signifie :',
          options: [
            'Résoudre une question',
            'Refuser de répondre à une question',
            'Introduire / aborder une question pour discussion',
            'Critiquer la politique de télétravail',
          ],
          correctIndex: 2,
          explanation: '"Soulever une question" = to raise a question / aborder un sujet. Introduire un point pour discussion. Synonymes : "aborder / évoquer / mentionner / poser la question de." Différent de "résoudre" (trouver une solution).',
        },
        {
          id: 'b1-red-04-ex13',
          type: 'qcm',
          question: 'Discours indirect : "Je suis présent ici." → Il a dit qu\'il ___ présent ___ .',
          options: [
            'est / ici',
            'était / là',
            'serait / ici',
            'avait été / là',
          ],
          correctIndex: 1,
          explanation: '"Il a dit qu\'il ÉTAIT présent LÀ." "Suis" (présent) → "était" (imparfait). "Ici" → "là" (déplacement du lieu de référence dans le discours rapporté).',
        },
        {
          id: 'b1-red-04-ex14',
          type: 'qcm',
          question: 'La "diffusion" en bas du compte rendu indique :',
          options: [
            'Comment diffuser le compte rendu sur les réseaux sociaux',
            'La liste des personnes à qui le compte rendu est envoyé',
            'Le nombre de copies à imprimer',
            'Le moyen d\'envoi (email, courrier...)',
          ],
          correctIndex: 1,
          explanation: '"Diffusion :" = liste des DESTINATAIRES du compte rendu. Qui le reçoit ? En général : tous les participants + les excusés + parfois la hiérarchie. La diffusion rapide du CR (dans les 24-48h après la réunion) est une bonne pratique professionnelle.',
        },
        {
          id: 'b1-red-04-ex15',
          type: 'qcm',
          question: 'Discours indirect d\'une question ouverte : "Quand arrivera-t-il ?" → Elle a demandé ___ il arriverait.',
          options: ['si', 'que', 'quand', 'comment'],
          correctIndex: 2,
          explanation: '"Elle a demandé QUAND il arriverait." Question avec mot interrogatif (quand / comment / pourquoi / où / qui) → on garde le mot interrogatif + discours indirect. "Quand arrivera-t-il ?" → "quand il arriverait" (futur → conditionnel).',
        },
        {
          id: 'b1-red-04-ex16',
          type: 'qcm',
          question: '"Initialement prévu pour fin mai" — "initialement" signifie :',
          options: ['Finalement', 'Au départ / à l\'origine', 'Récemment', 'Officiellement'],
          correctIndex: 1,
          explanation: '"Initialement" = au départ / à l\'origine / initially. "La phase 3, INITIALEMENT prévue pour fin mai, a été repoussée..." = The phase 3, originally scheduled for end of May, was postponed. Synonymes : "à l\'origine / au départ / au débutt / en principe."',
        },
        {
          id: 'b1-red-04-ex17',
          type: 'qcm',
          question: '"Trois propositions ont été soumises" = passif. Qui les a soumises ?',
          options: [
            'Personne — impossibilité d\'identifier l\'agent',
            'M. Traoré uniquement',
            'Le groupe (les participants) — agent non précisé dans le passif',
            'Mme Nguyen seule',
          ],
          correctIndex: 2,
          explanation: 'Dans le passif "trois propositions ont été soumises", l\'agent n\'est pas précisé (pas de "par + quelqu\'un"). Le passif sans agent = action subie dont l\'auteur est non-précisé ou évident (ici : les participants). Fréquent dans les CR pour neutralité.',
        },
        {
          id: 'b1-red-04-ex18',
          type: 'qcm',
          question: 'Discours indirect : "Nous avions déjà terminé hier." → Elle a dit qu\'ils ___ terminé la veille.',
          options: ['avaient', 'avaient déjà', 'auraient', 'ont'],
          correctIndex: 1,
          explanation: '"Ils AVAIENT DÉJÀ terminé la veille." Plus-que-parfait reste plus-que-parfait dans le discours indirect. "Avions terminé" (PQP) → "avaient terminé" (PQP). "Hier" → "la veille".',
        },
        {
          id: 'b1-red-04-ex19',
          type: 'qcm',
          question: 'Dans un compte rendu, un "point d\'action" bien rédigé doit contenir :',
          options: [
            'La discussion qui a mené à la décision',
            'QUI fait QUOI pour QUAND (personne responsable + tâche + délai)',
            'Uniquement la décision prise',
            'Le nom de toute l\'équipe',
          ],
          correctIndex: 1,
          explanation: 'Format action : "→ M. X [qui] transmets le planning révisé [quoi] d\'ici le 25 juin [quand]." Le "qui / quoi / quand" est essentiel pour le suivi. Sans responsable nommé ou sans délai, l\'action risque de ne pas être réalisée.',
        },
        {
          id: 'b1-red-04-ex20',
          type: 'qcm',
          question: '"La discussion a porté sur..." dans le compte rendu signifie :',
          options: [
            'La discussion a été courte',
            'La discussion a traité du sujet de... / a été centrée sur...',
            'La discussion a été portée à la connaissance de...',
            'La discussion a porté des fruits (= a été productive)',
          ],
          correctIndex: 1,
          explanation: '"La discussion a porté sur + nom" = la discussion a traité de / s\'est centrée sur. "Porter sur" = to be about / to focus on. "La réunion a porté sur l\'organisation du séminaire" = the meeting focused on / was about the organization of the seminar.',
        },
      ],
    },
  ],
};
