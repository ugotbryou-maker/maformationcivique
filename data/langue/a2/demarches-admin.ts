import type { LangModule } from '../types';

export const a2DemarchesAdmin: LangModule = {
  id: 'a2-mod-02',
  slug: 'a2-demarches-admin',
  level: 'A2',
  title: 'Démarches administratives',
  subtitle: 'Mairie, préfecture, papiers, services publics',
  description: 'Maîtrisez le vocabulaire pour vos démarches en préfecture, à la mairie et dans les services publics français.',
  type: 'thematique',
  emoji: '🏛️',
  free: false,
  lessons: [
    // ─── Leçon 1 ──────────────────────────────────────────────────────────────
    {
      id: 'a2-da-01',
      slug: 'a2-mairie-services',
      moduleSlug: 'a2-demarches-admin',
      level: 'A2',
      title: 'La mairie et les services publics',
      description: 'Apprenez à naviguer dans les services de votre mairie et à effectuer les démarches courantes.',
      duration: 12,
      free: false,
      dialogue: `## Dialogue : À la mairie

*Ibrahim a besoin d'un acte de naissance. Il se rend à la mairie.*

**Agent :** Bonjour monsieur. Vous avez pris un rendez-vous ?

**Ibrahim :** Non, je ne savais pas qu'il fallait un rendez-vous. C'est possible de faire la démarche maintenant ?

**Agent :** Oui, pour un acte de naissance c'est possible sans rendez-vous. Qu'est-ce qu'il vous faut exactement ? Un acte de naissance intégral ou un extrait ?

**Ibrahim :** Je ne suis pas sûr. C'est pour une demande de naturalisation.

**Agent :** Dans ce cas, vous avez besoin d'un acte de naissance intégral avec mention marginale. Mais attention — si vous êtes né à l'étranger, la mairie française ne peut pas vous le délivrer. Il faut contacter votre ambassade ou le SCEC.

**Ibrahim :** Ah, je ne savais pas. C'est quoi exactement le SCEC ?

**Agent :** Le SCEC, c'est le Service Central d'État Civil, à Nantes. Il s'occupe des actes d'état civil des Français nés hors de France. Pour vous, en tant qu'étranger né à l'étranger, c'est votre ambassade en France qui peut délivrer ce document.

**Ibrahim :** Et pour quoi la mairie peut-elle m'aider alors ?

**Agent :** Pour votre domicile français : attestation de résidence, changement d'adresse, certificat de vie commune... Vous avez aussi besoin d'autre chose ?

**Ibrahim :** Oui, j'ai déménagé il y a deux mois. Est-ce que je dois signaler mon changement d'adresse ?

**Agent :** Oui, c'est obligatoire. Voici le formulaire Cerfa. Remplissez-le et rapportez-le avec un justificatif de domicile — une facture EDF ou une quittance de loyer de moins de 3 mois.

**Ibrahim :** Il faut prendre un rendez-vous pour ça aussi ?

**Agent :** Non, vous pouvez revenir directement avec les documents. L'accueil est ouvert du lundi au vendredi de 8h30 à 17h30.

---

### Vocabulaire clé — La mairie et l'état civil

| Terme | Définition |
|---|---|
| La mairie | Bâtiment administratif qui gère la commune |
| Un acte de naissance | Document officiel attestant la naissance |
| Un acte intégral | Version complète avec toutes les annotations |
| Un extrait | Version simplifiée d'un acte |
| La mention marginale | Annotation en marge (mariage, divorce...) |
| Le SCEC | Service Central d'État Civil (Nantes) |
| L'attestation de résidence | Document prouvant que vous habitez à cette adresse |
| Un justificatif de domicile | Facture EDF, quittance de loyer (moins de 3 mois) |
| Un formulaire Cerfa | Formulaire officiel numéroté de l'administration |
| Délivrer un document | Remettre officiellement un document |`,

      linguisticPoint: `## Point linguistique : Exprimer la nécessité et l'obligation

### Les structures pour exprimer l'obligation — du plus fort au plus doux
| Structure | Exemple | Niveau de contrainte |
|---|---|---|
| **Il faut** + infinitif | Il faut contacter l'ambassade | fort, impersonnel |
| **Vous devez** + infinitif | Vous devez signaler votre adresse | direct |
| **C'est obligatoire** | C'est obligatoire de déclarer | état légal |
| **Il est nécessaire de** | Il est nécessaire de présenter une pièce d'identité | formel |
| **Vous avez besoin de** | Vous avez besoin d'un extrait d'acte | besoin pratique |
| **Je vous conseille de** | Je vous conseille de vérifier sur internet | conseil |
| **Il est recommandé de** | Il est recommandé de prendre rendez-vous | recommandation |

### Vocabulaire administratif essentiel
| Terme | Définition pratique |
|---|---|
| **Cerfa** | Formulaire officiel numéroté (ex : Cerfa 13753) |
| **Justificatif de domicile** | Facture EDF, quittance de loyer (< 3 mois) |
| **Acte de naissance intégral** | Document complet avec toutes les annotations |
| **Extrait d'acte** | Version simplifiée (seulement les infos de base) |
| **Mention marginale** | Annotation officielle en marge de l'acte |
| **Attestation** | Document qui certifie un fait |
| **Certificat** | Document officiel délivré par une autorité |
| **Délivrer** | Remettre officiellement un document |
| **Déposer un dossier** | Remettre son dossier à l'administration |
| **Instruire un dossier** | L'administration examine et traite votre dossier |

### SCEC et ambassade — qui fait quoi ?
| Situation | Où s'adresser |
|---|---|
| Français né à l'étranger | SCEC (Nantes) — tél. 02 51 77 36 00 |
| Étranger né à l'étranger | Ambassade / consulat du pays d'origine |
| Né en France | Mairie du lieu de naissance |

### Documents valables comme justificatif de domicile
| Document | Validité |
|---|---|
| Facture EDF / gaz / eau | Moins de 3 mois |
| Quittance de loyer | Moins de 3 mois |
| Facture téléphone FIXE | Moins de 3 mois |
| Avis d'imposition | Moins d'un an |
| Attestation d'hébergement | + pièce d'identité de l'hébergeant |
| ❌ Facture téléphone mobile | Non accepté en général |

### Erreurs fréquentes
- ❌ *Il faut à contacter* → ✅ **Il faut contacter** (infinitif direct, sans préposition)
- ❌ *Vous devez à signaler* → ✅ **Vous devez signaler** (idem)
- ❌ *J'ai besoin un document* → ✅ **J'ai besoin d'un document** (besoin DE)`,

      keyPoints: [
        'Il faut + infinitif (obligation impersonnelle)',
        'Vous devez + infinitif (obligation directe)',
        'Justificatif de domicile = facture EDF, quittance de loyer (<3 mois)',
        'Formulaire Cerfa = formulaire officiel de l\'administration française',
        'Acte de naissance étranger → pas la mairie → ambassade ou SCEC',
      ],

      exercises: [
        {
          id: 'a2-da-01-ex01',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un "justificatif de domicile" ?',
          options: [
            'Une pièce d\'identité',
            'Un document prouvant votre adresse actuelle',
            'Un document de la Sécurité sociale',
            'Un contrat de travail',
          ],
          correctIndex: 1,
          explanation: 'Un justificatif de domicile prouve votre adresse. Les documents acceptés : facture EDF/GDF, facture de téléphone fixe, quittance de loyer, avis d\'imposition. Ils doivent avoir moins de 3 mois en général.',
        },
        {
          id: 'a2-da-01-ex02',
          type: 'qcm',
          question: 'Ibrahim est né à l\'étranger. Où doit-il demander son acte de naissance ?',
          options: [
            'À la mairie française',
            'À la préfecture',
            'À son ambassade ou au SCEC',
            'À l\'état civil du tribunal',
          ],
          correctIndex: 2,
          explanation: 'L\'agent explique : si vous êtes né à l\'étranger, la mairie française ne peut pas délivrer votre acte de naissance. Il faut contacter l\'ambassade de votre pays d\'origine ou le SCEC (Service Central d\'État Civil, à Nantes).',
        },
        {
          id: 'a2-da-01-ex03',
          type: 'qcm',
          question: 'Quelle est la structure correcte pour exprimer une obligation ?',
          options: [
            '"Il faut signaler votre adresse"',
            '"Il faut que vous signaler votre adresse"',
            '"Il est faut signaler votre adresse"',
            '"Il faut à signaler votre adresse"',
          ],
          correctIndex: 0,
          explanation: '"Il faut + infinitif" est la structure correcte. "Il faut signaler" (sans "que" si sujet indéfini, avec "que + subjonctif" si sujet spécifique : "Il faut que vous signaliez"). Pour A2, "il faut + infinitif" est la forme à maîtriser.',
        },
        {
          id: 'a2-da-01-ex04',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un formulaire "Cerfa" ?',
          options: [
            'Un formulaire de banque',
            'Un formulaire officiel de l\'administration française',
            'Un formulaire médical',
            'Un formulaire pour les impôts uniquement',
          ],
          correctIndex: 1,
          explanation: 'Un formulaire Cerfa (Centre d\'Enregistrement et de Révision des Formulaires Administratifs) est un formulaire officiel numéroté de l\'administration française. Exemple : Cerfa 12485*01 pour demande de titre de séjour.',
        },
        {
          id: 'a2-da-01-ex05',
          type: 'qcm',
          question: 'Ibrahim a déménagé il y a combien de temps ?',
          options: ['Un mois', 'Deux mois', 'Trois mois', 'Six mois'],
          correctIndex: 1,
          explanation: 'Ibrahim dit "j\'ai déménagé il y a deux mois". La structure "il y a + durée" indique quand une action passée a eu lieu. "Il y a deux mois" = two months ago.',
        },
        {
          id: 'a2-da-01-ex06',
          type: 'qcm',
          question: 'Quelle expression indique qu\'une chose est requise absolument ?',
          options: [
            '"C\'est possible"',
            '"C\'est utile"',
            '"C\'est obligatoire"',
            '"C\'est recommandé"',
          ],
          correctIndex: 2,
          explanation: '"C\'est obligatoire" = it is required/mandatory. Nuances : OBLIGATOIRE (required by law) > NÉCESSAIRE (necessary) > RECOMMANDÉ (recommended) > POSSIBLE (possible) > FACULTATIF (optional).',
        },
        {
          id: 'a2-da-01-ex07',
          type: 'qcm',
          question: 'Un acte de naissance "intégral" vs un "extrait" : quelle est la différence ?',
          options: [
            'Il n\'y a pas de différence',
            'L\'intégral contient toutes les informations ; l\'extrait est une version simplifiée',
            'L\'extrait est plus officiel',
            'L\'intégral est gratuit, l\'extrait est payant',
          ],
          correctIndex: 1,
          explanation: 'L\'acte intégral = reproduction complète de l\'acte avec toutes les mentions (marginales, apostilles...). L\'extrait = version simplifiée (juste nom, date, lieu de naissance). Pour la naturalisation, l\'acte INTÉGRAL est requis.',
        },
        {
          id: 'a2-da-01-ex08',
          type: 'qcm',
          question: 'Pour quoi Ibrahim aurait-il besoin d\'un acte de naissance intégral ?',
          options: [
            'Pour ouvrir un compte bancaire',
            'Pour une demande de naturalisation',
            'Pour inscrire ses enfants à l\'école',
            'Pour louer un appartement',
          ],
          correctIndex: 1,
          explanation: 'Ibrahim précise : "C\'est pour une demande de naturalisation." Pour la naturalisation française, l\'acte de naissance intégral avec mention marginale est un document obligatoire du dossier.',
        },
        {
          id: 'a2-da-01-ex09',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une "quittance de loyer" ?',
          options: [
            'Un contrat de location',
            'Un reçu mensuel attestant que le loyer a été payé',
            'Une facture d\'électricité',
            'Un avis d\'imposition',
          ],
          correctIndex: 1,
          explanation: 'Une quittance de loyer est un document émis par le propriétaire ou l\'agence attestant que le locataire a bien payé son loyer du mois. C\'est un justificatif de domicile valable, de même qu\'une facture EDF ou d\'eau.',
        },
        {
          id: 'a2-da-01-ex10',
          type: 'qcm',
          question: 'Que signifie "signaler" son changement d\'adresse ?',
          options: [
            'Mettre à jour son adresse et en informer l\'administration',
            'Déménager dans un nouveau quartier',
            'Chercher un nouveau logement',
            'Payer les charges de son nouveau logement',
          ],
          correctIndex: 0,
          explanation: '"Signaler" = informer, déclarer officiellement. Signaler un changement d\'adresse = informer les administrations (mairie, CAF, impôts, CPAM...) de votre nouvelle adresse. C\'est une obligation légale.',
        },
        {
          id: 'a2-da-01-ex11',
          type: 'qcm',
          question: 'Comment dit-on "I didn\'t know that" en français ?',
          options: [
            'Je ne sais pas ça',
            'Je ne savais pas ça / Je ne savais pas',
            'Je n\'ai pas su ça',
            'Je ne connais pas ça',
          ],
          correctIndex: 1,
          explanation: '"Je ne savais pas" (imparfait de savoir) = "I didn\'t know". L\'imparfait exprime un état ou une connaissance passée. Ibrahim dit "je ne savais pas qu\'il fallait un rendez-vous".',
        },
        {
          id: 'a2-da-01-ex12',
          type: 'qcm',
          question: 'Quel document n\'est PAS un justificatif de domicile valable ?',
          options: [
            'Une facture EDF de 2 mois',
            'Une quittance de loyer de 2 mois',
            'Une facture de téléphone portable de 2 mois',
            'Un contrat de bail',
          ],
          correctIndex: 2,
          explanation: 'La facture de téléphone PORTABLE (mobile) n\'est généralement pas acceptée comme justificatif de domicile car elle n\'est pas liée à une adresse physique. En revanche : facture d\'électricité/gaz/eau, téléphone FIXE, loyer, impôts sont acceptés.',
        },
        {
          id: 'a2-da-01-ex13',
          type: 'qcm',
          question: 'Quelle est la différence entre "une attestation" et "un certificat" ?',
          options: [
            'Ce sont des synonymes, utilisables indifféremment',
            'Une attestation est moins officielle qu\'un certificat',
            'Un certificat est moins officiel qu\'une attestation',
            'L\'attestation est gratuite, le certificat est payant',
          ],
          correctIndex: 0,
          explanation: 'Dans la pratique administrative française, "attestation" et "certificat" sont souvent utilisés comme synonymes. Les deux désignent un document officiel qui certifie quelque chose. Ex : attestation de résidence = certificat de résidence.',
        },
        {
          id: 'a2-da-01-ex14',
          type: 'qcm',
          question: 'Ibrahim peut-il obtenir un acte de naissance sans rendez-vous à la mairie ?',
          options: [
            'Non, un rendez-vous est toujours obligatoire',
            'Oui, pour un acte de naissance c\'est possible sans rendez-vous',
            'Oui, mais seulement le matin',
            'Non, il doit d\'abord appeler',
          ],
          correctIndex: 1,
          explanation: 'L\'agent dit : "pour un acte de naissance c\'est possible sans rendez-vous." Certaines démarches simples se font sans rendez-vous ; d\'autres (comme le renouvellement de titre de séjour) nécessitent un rendez-vous obligatoire.',
        },
        {
          id: 'a2-da-01-ex15',
          type: 'qcm',
          question: 'Que signifie "délivrer" un document ?',
          options: [
            'Traduire un document',
            'Remettre officiellement un document',
            'Photocopier un document',
            'Certifier un document',
          ],
          correctIndex: 1,
          explanation: '"Délivrer" un document = l\'émettre et le remettre officiellement. "La mairie délivre les actes de naissance" = la mairie produit et remet ces documents. "Délivrer" en administration ≠ "libérer" (to free).',
        },
        {
          id: 'a2-da-01-ex16',
          type: 'qcm',
          question: 'Pour quels actes la mairie française peut-elle aider Ibrahim ?',
          options: [
            'Acte de naissance étranger, passeport étranger',
            'Attestation de résidence, changement d\'adresse, certificat de vie commune',
            'Visa de travail, permis de résidence',
            'Titre de séjour, naturalisation',
          ],
          correctIndex: 1,
          explanation: 'L\'agent liste les services de la mairie pour Ibrahim : "attestation de résidence, changement d\'adresse, certificat de vie commune". La mairie gère l\'état civil local (naissances/mariages/décès déclarés en France).',
        },
        {
          id: 'a2-da-01-ex17',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une "mention marginale" sur un acte de naissance ?',
          options: [
            'Une annotation officielle en marge de l\'acte (mariage, divorce, décès...)',
            'Une erreur dans l\'acte',
            'Une signature optionnelle',
            'Un code-barres d\'authenticité',
          ],
          correctIndex: 0,
          explanation: 'Une mention marginale est une annotation officielle apposée en marge d\'un acte (naissance, mariage) pour signaler des événements ultérieurs (mariage, divorce, décès, reconnaissance d\'enfant...). Elle enrichit l\'acte intégral.',
        },
        {
          id: 'a2-da-01-ex18',
          type: 'qcm',
          question: 'Ibrahim dit "je ne suis pas sûr". Que veut-il dire ?',
          options: [
            'Il a peur',
            'Il n\'est pas en sécurité',
            'Il n\'est pas certain / il doute',
            'Il ne comprend pas la question',
          ],
          correctIndex: 2,
          explanation: '"Je ne suis pas sûr" = "I\'m not sure" = je ne suis pas certain. C\'est une formule d\'hésitation polie. Variantes : "Je ne suis pas certain" (plus formel) / "Je ne sais pas trop" (plus familier).',
        },
        {
          id: 'a2-da-01-ex19',
          type: 'qcm',
          question: 'Vous voulez changer d\'adresse. Quelle est l\'expression correcte ?',
          options: [
            'Je veux déménager mon adresse',
            'Je veux signaler mon changement d\'adresse',
            'Je veux changer ma maison',
            'Je veux nouvelle adresse',
          ],
          correctIndex: 1,
          explanation: '"Signaler/déclarer un changement d\'adresse" est l\'expression correcte. Après un déménagement, il faut signaler sa nouvelle adresse à : la mairie, les impôts, la CAF, la CPAM, Pôle emploi, la banque, les assurances...',
        },
        {
          id: 'a2-da-01-ex20',
          type: 'qcm',
          question: 'La facture EDF doit avoir moins de combien de mois pour être valide comme justificatif ?',
          options: ['1 mois', '2 mois', '3 mois', '6 mois'],
          correctIndex: 2,
          explanation: 'L\'agent précise : "un justificatif de domicile — une facture EDF ou une quittance de loyer de moins de 3 mois". La plupart des administrations exigent des documents de moins de 3 mois pour les justificatifs de domicile.',
        },
      ],
    },

    // ─── Leçon 2 ──────────────────────────────────────────────────────────────
    {
      id: 'a2-da-02',
      slug: 'a2-prefecture-titre-sejour',
      moduleSlug: 'a2-demarches-admin',
      level: 'A2',
      title: 'La préfecture et le titre de séjour',
      description: 'Comprenez les procédures de la préfecture pour obtenir ou renouveler votre titre de séjour.',
      duration: 12,
      free: false,
      dialogue: `## Dialogue : Rendez-vous en préfecture

*Yasmine a un rendez-vous en préfecture pour renouveler son titre de séjour "vie privée et familiale".*

**Agent :** Bonjour madame. Votre nom et prénom, s'il vous plaît ?

**Yasmine :** Yasmine Bougherara. J'ai un rendez-vous à 10h30.

**Agent :** Oui, je vous vois dans notre système. Vous renouvelez votre titre de séjour "vie privée et familiale". Vous avez apporté tous les documents ?

**Yasmine :** Je crois que oui. J'ai la liste de votre site internet.

**Agent :** Très bien. Montrez-moi le dossier. *(il vérifie)* Donc j'ai bien : votre titre de séjour actuel, votre passeport avec les pages visas, trois photos d'identité, votre justificatif de domicile...

**Yasmine :** J'ai aussi apporté mes bulletins de salaire des trois derniers mois et mon contrat de travail.

**Agent :** Parfait. Avez-vous aussi les photocopies de chaque document ? Il faut les originaux ET les copies.

**Yasmine :** Oui, j'ai tout photocopié. Il me manque quelque chose ?

**Agent :** Oui, il me manque le formulaire de demande, le Cerfa 15654*03. Vous l'avez ?

**Yasmine :** Oui, le voilà. J'ai tout rempli et signé.

**Agent :** Parfait. Et le timbre fiscal ?

**Yasmine :** Ah ! J'ai oublié le timbre fiscal. Je peux en acheter un ici ?

**Agent :** Oui, au guichet numéro 3, à côté. C'est 225 euros pour un an. Vous payez par carte ou en espèces ?

**Yasmine :** Par carte, s'il vous plaît. Combien de temps faudra-t-il pour avoir une réponse ?

**Agent :** Une fois le dossier complet, vous recevrez un récépissé valable 3 mois. La décision vous sera communiquée par courrier dans un délai de 2 à 4 mois.

---

### Vocabulaire clé — Le titre de séjour

| Document | Rôle |
|---|---|
| Le titre de séjour | Autorisation officielle de rester en France |
| Le Cerfa 15654*03 | Formulaire de demande de titre de séjour |
| Le timbre fiscal | Taxe administrative (225€/an) |
| Les photos d'identité | 3 photos 35×45 mm, fond clair |
| Le bulletin de salaire | Preuve de travail et de revenus |
| Le contrat de travail | Preuve d'emploi (CDI ou CDD) |
| Le récépissé | Document provisoire pendant l'instruction |
| Le guichet | Bureau qui reçoit le public |`,

      linguisticPoint: `## Point linguistique : Les déterminants démonstratifs et le vocabulaire du dossier

### Déterminants démonstratifs — tableau complet
| Genre / Nombre | Déterminant | Avant voyelle/h | Exemple |
|---|---|---|---|
| Masculin singulier | **ce** | **cet** | ce formulaire / cet acte |
| Féminin singulier | **cette** | **cette** | cette photo / cette liste |
| Pluriel (m/f) | **ces** | **ces** | ces documents / ces photos |

**Usage :** montrer ou désigner quelque chose proche ou déjà mentionné
- "**Ce** Cerfa est important" (masc., consonne)
- "**Cet** acte de naissance" (masc., voyelle)
- "**Cette** photo n'est pas valable" (fém.)
- "**Ces** documents sont en ordre" (pluriel)

### Vocabulaire du dossier de titre de séjour
| Terme | Définition |
|---|---|
| Le titre de séjour | Document officiel autorisant un étranger à séjourner légalement |
| Le passeport | Document d'identité et de voyage international |
| Les photos d'identité | Photos normalisées (35×45mm, fond clair, sans lunettes) |
| Le bulletin de salaire | Fiche de paie mensuelle de l'employeur |
| Le timbre fiscal | Taxe administrative achetée en ligne ou au guichet |
| Le dossier complet | Tous les documents réunis et conformes |
| Le guichet | Bureau de réception du public dans une administration |
| Le récépissé | Document provisoire remis en attendant la décision |
| L'instruction | Examen du dossier par l'administration |

### Exprimer qu'un document manque — structures clés
| Structure | Exemple |
|---|---|
| **Il me manque** + document | Il me manque le timbre fiscal |
| **Il vous manque** + document | Il vous manque une photo |
| **Il manque** + document | Il manque deux pièces dans votre dossier |
| **Je n'ai pas** + article + document | Je n'ai pas le formulaire |
| **J'ai oublié** + article + document | J'ai oublié le timbre fiscal |

### Types de titres de séjour courants en France
| Titre | Profil |
|---|---|
| Vie privée et familiale | Famille de Français, parent d'enfant français... |
| Salarié | Travailleur avec contrat de travail |
| Étudiant | Personne inscrite dans un établissement d'enseignement |
| Visiteur | Sans activité professionnelle, ressources suffisantes |
| Réfugié / Protection subsidiaire | Personne protégée par la France |

### Erreurs fréquentes
- ❌ *Cet formulaire* → ✅ **Ce formulaire** (consonne → ce, pas cet)
- ❌ *Ce acte* → ✅ **Cet acte** (voyelle → cet, pas ce)
- ❌ *Il me manque du formulaire* → ✅ **Il me manque le formulaire** (manquer + article défini)`,

      keyPoints: [
        'Il me manque + document (= I\'m missing)',
        'Ce / cet / cette / ces (déterminants démonstratifs)',
        'Titre de séjour : formulaire Cerfa + timbre fiscal (225€/an) + photos + justificatifs',
        'Bulletins de salaire = 3 derniers mois requis',
        'Timbre fiscal = taxe payée pour les démarches administratives',
      ],

      exercises: [
        {
          id: 'a2-da-02-ex01',
          type: 'qcm',
          question: 'Yasmine vient à la préfecture pour...',
          options: [
            'Demander la nationalité française',
            'Renouveler son titre de séjour',
            'Signaler un changement d\'adresse',
            'Demander un passeport',
          ],
          correctIndex: 1,
          explanation: 'Yasmine vient "renouveler son titre de séjour \'vie privée et familiale\'". Le renouvellement est nécessaire avant l\'expiration du titre actuel, en général dans les 2 mois avant.',
        },
        {
          id: 'a2-da-02-ex02',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un "timbre fiscal" ?',
          options: [
            'Un timbre pour envoyer un courrier',
            'Une taxe administrative payée sous forme de vignette ou de code en ligne',
            'Un document d\'identité',
            'Un justificatif de paiement de loyer',
          ],
          correctIndex: 1,
          explanation: 'Le timbre fiscal est une taxe administrative obligatoire pour de nombreuses démarches (titre de séjour, passeport, permis de conduire...). Il s\'achète en ligne sur timbres.impots.gouv.fr, dans les tabacs ou aux guichets des préfectures.',
        },
        {
          id: 'a2-da-02-ex03',
          type: 'qcm',
          question: 'Quel déterminant démonstratif utilise-t-on avec "formulaire" (masculin) ?',
          options: ['Cette formulaire', 'Ces formulaire', 'Ce formulaire', 'Cet formulaire'],
          correctIndex: 2,
          explanation: '"Formulaire" commence par une consonne → déterminant démonstratif masculin singulier = "CE". On dirait "CET" si le mot commençait par une voyelle ou h muet (ex : cet homme, cet acte).',
        },
        {
          id: 'a2-da-02-ex04',
          type: 'qcm',
          question: 'Combien coûte le timbre fiscal pour un titre de séjour d\'un an ?',
          options: ['125€', '175€', '225€', '275€'],
          correctIndex: 2,
          explanation: 'L\'agent précise : "C\'est 225 euros pour un an." Le montant du timbre fiscal varie selon le type de titre de séjour et sa durée. Ce montant est à titre indicatif et peut évoluer.',
        },
        {
          id: 'a2-da-02-ex05',
          type: 'qcm',
          question: 'Combien de bulletins de salaire Yasmine a-t-elle apportés ?',
          options: ['Un seul', 'Deux', 'Trois', 'Six'],
          correctIndex: 2,
          explanation: 'Yasmine dit "mes bulletins de salaire des trois derniers mois". En général, les dossiers administratifs demandent les 3 derniers bulletins de salaire pour prouver une activité professionnelle régulière.',
        },
        {
          id: 'a2-da-02-ex06',
          type: 'qcm',
          question: 'Quelle phrase signifie "I\'m missing a document" ?',
          options: [
            'J\'ai perdu un document',
            'Il me manque un document',
            'Je n\'ai pas trouvé un document',
            'Un document est parti',
          ],
          correctIndex: 1,
          explanation: '"Il me manque + objet" = I\'m missing / I\'m lacking. Cette structure est très courante : "Il me manque le formulaire" / "Il vous manque une photo" / "Il manque deux pièces dans votre dossier".',
        },
        {
          id: 'a2-da-02-ex07',
          type: 'qcm',
          question: 'Yasmine dit "J\'ai tout rempli". Que veut-elle dire ?',
          options: [
            'Elle a complété tous les champs du formulaire',
            'Elle a payé toutes les taxes',
            'Elle a apporté tous les documents',
            'Elle a signé tous les papiers',
          ],
          correctIndex: 0,
          explanation: '"Remplir un formulaire" = compléter tous les champs (nom, adresse, date...). "J\'ai tout rempli" = j\'ai rempli tous les champs du formulaire Cerfa. Le formulaire dûment rempli est obligatoire.',
        },
        {
          id: 'a2-da-02-ex08',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un "bulletin de salaire" ?',
          options: [
            'Un document de la CAF',
            'Un document mensuel de l\'employeur montrant le salaire et les cotisations',
            'Un contrat de travail',
            'Une attestation Pôle emploi',
          ],
          correctIndex: 1,
          explanation: 'Le bulletin de salaire (ou fiche de paie) est un document mensuel remis par l\'employeur. Il mentionne : salaire brut, cotisations sociales, salaire net. C\'est une preuve d\'emploi et de revenus.',
        },
        {
          id: 'a2-da-02-ex09',
          type: 'qcm',
          question: 'Quelle est la dimension standard des photos d\'identité en France ?',
          options: ['30×40mm', '35×45mm', '40×50mm', '45×55mm'],
          correctIndex: 1,
          explanation: 'Les photos d\'identité officielles en France doivent mesurer 35×45mm, fond uni clair (gris clair ou blanc), visage de face, sans lunettes. Ces normes s\'appliquent pour tous les documents officiels.',
        },
        {
          id: 'a2-da-02-ex10',
          type: 'qcm',
          question: 'L\'agent dit "je vous vois". Que signifie-t-il ?',
          options: [
            'Il regarde Yasmine physiquement',
            'Il trouve le rendez-vous de Yasmine dans son système informatique',
            'Il a déjà rencontré Yasmine auparavant',
            'Il voit que Yasmine est en retard',
          ],
          correctIndex: 1,
          explanation: '"Je vous vois" dans ce contexte administratif = "Je vous trouve dans notre système" / "Votre rendez-vous apparaît bien dans nos dossiers". L\'agent vérifie le rendez-vous sur son écran/liste.',
        },
        {
          id: 'a2-da-02-ex11',
          type: 'qcm',
          question: 'Comment peut-on payer le timbre fiscal à la préfecture ?',
          options: [
            'Uniquement en espèces',
            'Uniquement par carte',
            'Par carte ou en espèces',
            'Uniquement par chèque',
          ],
          correctIndex: 2,
          explanation: 'L\'agent demande "Vous payez par carte ou en espèces ?" — les deux modes de paiement sont acceptés. Les chèques sont de moins en moins acceptés dans l\'administration française.',
        },
        {
          id: 'a2-da-02-ex12',
          type: 'qcm',
          question: 'Quel déterminant démonstratif utilise-t-on avec "acte" (masc., commence par voyelle) ?',
          options: ['Ce acte', 'Cet acte', 'Cette acte', 'Ces acte'],
          correctIndex: 1,
          explanation: '"Cet" s\'utilise devant un nom masculin singulier commençant par une voyelle ou un "h" muet : CET acte / CET homme / CET enfant. Ce phénomène s\'appelle "élision" et sert à éviter la mauvaise sonorité de "ce acte".',
        },
        {
          id: 'a2-da-02-ex13',
          type: 'qcm',
          question: 'Yasmine a-t-elle trouvé la liste des documents sur le site internet ?',
          options: [
            'Non, un ami lui a donné la liste',
            'Oui, elle a trouvé la liste sur le site internet de la préfecture',
            'Non, l\'agent lui a envoyé la liste par email',
            'Elle ne sait pas d\'où vient la liste',
          ],
          correctIndex: 1,
          explanation: 'Yasmine dit "J\'ai la liste de votre site internet." Les préfectures françaises publient en ligne les listes de documents pour chaque démarche. Il est conseillé de vérifier sur service-public.fr ou le site de la préfecture locale.',
        },
        {
          id: 'a2-da-02-ex14',
          type: 'qcm',
          question: 'Quel document Yasmine a-t-elle oublié ?',
          options: [
            'Le formulaire Cerfa',
            'Le passeport',
            'Le timbre fiscal',
            'Les photos d\'identité',
          ],
          correctIndex: 2,
          explanation: 'Yasmine dit "Ah ! J\'ai oublié le timbre fiscal." L\'interjection "Ah !" exprime la surprise ou la réalisation soudaine. Heureusement, elle peut en acheter un au guichet numéro 3.',
        },
        {
          id: 'a2-da-02-ex15',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un "guichet" dans une administration ?',
          options: [
            'Un formulaire en ligne',
            'Un bureau où on reçoit et sert le public',
            'Une salle d\'attente',
            'Un document administratif',
          ],
          correctIndex: 1,
          explanation: 'Un "guichet" est le bureau/comptoir où un agent reçoit le public. L\'agent dit "au guichet numéro 3, à côté." Dans une préfecture ou banque, on vous dirige vers un numéro de guichet spécifique.',
        },
        {
          id: 'a2-da-02-ex16',
          type: 'qcm',
          question: 'Comment dit-on "my current ID" en référence au titre de séjour ?',
          options: [
            'Mon nouveau titre de séjour',
            'Mon ancien titre de séjour',
            'Mon titre de séjour actuel',
            'Mon premier titre de séjour',
          ],
          correctIndex: 2,
          explanation: '"Actuel" = current (qui existe/est valable maintenant). "Mon titre de séjour actuel" = le titre de séjour que j\'ai en ce moment (qui est en train d\'expirer). À ne pas confondre avec "actuelle" (féminin) ou "actuellement" (adverbe).',
        },
        {
          id: 'a2-da-02-ex17',
          type: 'qcm',
          question: 'Que contient un "passeport avec les pages visas" ?',
          options: [
            'Seulement la page d\'identité',
            'La page d\'identité + les pages avec les tampons/visas des pays visités',
            'Uniquement les visas français',
            'Un document séparé du passeport',
          ],
          correctIndex: 1,
          explanation: 'L\'agent demande "votre passeport avec les pages visas" = l\'ensemble du passeport incluant les pages avec les tampons d\'entrée/sortie et les visas. Cela permet de vérifier les séjours précédents et le statut légal.',
        },
        {
          id: 'a2-da-02-ex18',
          type: 'qcm',
          question: 'Où peut-on acheter un timbre fiscal ? (plusieurs bonnes réponses, choisissez la plus complète)',
          options: [
            'Seulement à la poste',
            'Seulement à la préfecture',
            'En ligne sur timbres.impots.gouv.fr, dans les tabacs, ou à la préfecture',
            'Seulement dans les banques',
          ],
          correctIndex: 2,
          explanation: 'Le timbre fiscal s\'achète : en ligne sur timbres.impots.gouv.fr (pratique), dans les bureaux de tabac (buralistes), ou aux guichets des préfectures et sous-préfectures. La poste ne vend pas de timbres fiscaux.',
        },
        {
          id: 'a2-da-02-ex19',
          type: 'qcm',
          question: 'Yasmine dit "Je crois que oui." Que veut-elle dire ?',
          options: [
            'Elle est certaine qu\'elle a tout',
            'Elle pense avoir tout apporté, mais sans certitude absolue',
            'Elle ne sait pas si elle a tout',
            'Elle a oublié plusieurs documents',
          ],
          correctIndex: 1,
          explanation: '"Je crois que oui" = "I think so / I believe so" — exprime une opinion probable mais pas certaine. Nuances : CERTAINEMENT > JE SUIS SÛR(E) > JE PENSE QUE OUI / JE CROIS QUE OUI > PEUT-ÊTRE.',
        },
        {
          id: 'a2-da-02-ex20',
          type: 'qcm',
          question: 'Que signifie "vie privée et familiale" dans un titre de séjour ?',
          options: [
            'Un titre pour les étudiants',
            'Un titre pour les travailleurs saisonniers',
            'Un titre accordé pour des raisons familiales (conjoint de Français, parents d\'enfants français...)',
            'Un titre accordé aux réfugiés',
          ],
          correctIndex: 2,
          explanation: 'Le titre de séjour "vie privée et familiale" est accordé à des personnes qui ont des liens familiaux forts en France : conjoint(e) de français(e), parent(s) d\'enfant(s) français, enfant de ressortissant étranger en situation régulière...',
        },
      ],
    },

    // ─── Leçon 3 ──────────────────────────────────────────────────────────────
    {
      id: 'a2-da-03',
      slug: 'a2-securite-sociale',
      moduleSlug: 'a2-demarches-admin',
      level: 'A2',
      title: 'La Sécurité sociale et la carte Vitale',
      description: 'Comprenez le système de santé français, créez votre dossier CPAM et obtenez votre carte Vitale.',
      duration: 12,
      free: false,
      dialogue: `## Dialogue : À la CPAM

*Kwame vient à la CPAM (Caisse Primaire d'Assurance Maladie) pour s'inscrire.*

**Agent :** Bonjour monsieur. Qu'est-ce que je peux faire pour vous ?

**Kwame :** Bonjour. Je viens d'arriver en France il y a 3 mois. Je travaille depuis 2 mois et mon employeur m'a dit que je devais m'inscrire à la Sécurité sociale.

**Agent :** Tout à fait. Si vous travaillez en France, vous êtes automatiquement affilié à la Sécurité sociale. Mais il faut vous inscrire pour recevoir votre carte Vitale. Vous avez votre numéro de Sécurité sociale ?

**Kwame :** Oui, mon employeur me l'a donné. C'est le numéro sur ma fiche de paie — il commence par 1.

**Agent :** Exact, le 1 indique que vous êtes un homme. Alors, pour créer votre dossier, j'ai besoin de : votre titre de séjour ou passeport, un justificatif d'identité, votre acte de naissance traduit en français, et une attestation de votre employeur.

**Kwame :** J'ai tout ça. L'acte de naissance, il doit être traduit par quelqu'un de particulier ?

**Agent :** Oui, par un traducteur assermenté. La liste des traducteurs agréés est disponible sur le site du tribunal judiciaire de votre ville.

**Kwame :** D'accord. Est-ce que j'ai droit au remboursement des médicaments maintenant ?

**Agent :** Oui, dès que votre dossier est créé, vous avez accès aux soins. La Sécurité sociale rembourse en moyenne 70% des frais médicaux. Pour les 30% restants, vous pouvez souscrire une mutuelle.

**Kwame :** Mon employeur m'a proposé une mutuelle d'entreprise.

**Agent :** Très bien, c'est souvent plus avantageux car l'employeur paie une partie. Et la carte Vitale, quand est-ce que je la reçois ?

**Agent :** Comptez 2 à 4 semaines après la validation de votre dossier. En attendant, vous recevrez une attestation provisoire que vous pouvez présenter à votre médecin.

---

### Vocabulaire clé — La Sécurité sociale

| Terme | Définition |
|---|---|
| La CPAM | Caisse Primaire d'Assurance Maladie |
| La carte Vitale | Carte électronique de l'Assurance maladie (verte) |
| Le numéro de Sécurité sociale | 15 chiffres (commence par 1=homme, 2=femme) |
| S'affilier | Devenir membre, s'inscrire à la Sécu |
| Le remboursement | Argent rendu après avoir payé des soins |
| Le ticket modérateur | La partie non remboursée par la Sécu (≈ 30%) |
| La mutuelle | Assurance complémentaire santé |
| L'attestation provisoire | Document temporaire en attendant la carte Vitale |
| Un traducteur assermenté | Traducteur officiel reconnu par les tribunaux |`,

      linguisticPoint: `## Point linguistique : Les verbes devoir, pouvoir, recevoir au présent

### Le verbe DEVOIR (must/have to) — usage et conjugaison
| Pronom | Conjugaison | Exemple en contexte |
|---|---|---|
| Je | **dois** | Je dois m'inscrire à la CPAM |
| Tu | **dois** | Tu dois apporter tes documents |
| Il/Elle | **doit** | Il doit présenter sa carte Vitale |
| Nous | **devons** | Nous devons signaler le changement |
| Vous | **devez** | Vous devez remplir ce formulaire |
| Ils | **doivent** | Ils doivent obtenir la carte Vitale |

### Le verbe POUVOIR (can/be able to) — usage et conjugaison
| Pronom | Conjugaison | Exemple en contexte |
|---|---|---|
| Je | **peux** | Je peux souscrire une mutuelle |
| Tu | **peux** | Tu peux appeler la CPAM |
| Il/Elle | **peut** | Elle peut accéder aux soins |
| Nous | **pouvons** | Nous pouvons vous aider |
| Vous | **pouvez** | Vous pouvez payer par carte |
| Ils | **peuvent** | Ils peuvent demander l'attestation |

### Le verbe RECEVOIR (to receive) — attention à la cédille !
| Pronom | Conjugaison | Note |
|---|---|---|
| Je | **reçois** | ç devant o et a |
| Tu | **reçois** | ç devant o et a |
| Il/Elle | **reçoit** | ç devant o et a |
| Nous | **recevons** | c seul devant e |
| Vous | **recevez** | c seul devant e |
| Ils | **reçoivent** | ç devant o et a |

### La Sécurité sociale — chiffres clés et fonctionnement
| Élément | Information |
|---|---|
| Remboursement moyen | 70% des frais médicaux |
| Ticket modérateur | 30% à votre charge (ou mutuelle) |
| Numéro de Sécu | 15 chiffres (1 = homme / 2 = femme) |
| Carte Vitale | Délai 2-4 semaines après inscription |
| Attestation provisoire | Valable en attendant la carte Vitale |

### Lire un numéro de Sécurité sociale
**Exemple : 1 88 03 75 108 042 95**
| Chiffres | Signification |
|---|---|
| 1 | Sexe (1 = homme, 2 = femme) |
| 88 | Année de naissance (1988) |
| 03 | Mois de naissance (mars) |
| 75 | Département de naissance (Paris) |
| 108 | Commune de naissance |
| 042 | Numéro d'ordre dans la commune |
| 95 | Clé de contrôle |

### Erreurs fréquentes
- ❌ *Je recois* → ✅ **Je reçois** (cédille obligatoire devant o)
- ❌ *Je peut pas* → ✅ **Je ne peux pas** (je/tu → peux, pas peut)
- ❌ *Vous devez à vous inscrire* → ✅ **Vous devez vous inscrire** (pas de préposition entre devoir et infinitif)`,

      keyPoints: [
        'DEVOIR : je dois / tu dois / il doit / nous devons / vous devez / ils doivent',
        'POUVOIR : je peux / tu peux / il peut / nous pouvons / vous pouvez / ils peuvent',
        'Sécu rembourse 70% — les 30% restants = ticket modérateur (mutuelle possible)',
        'Carte Vitale : délai 2-4 semaines → attestation provisoire en attendant',
        'Acte de naissance traduit en français = obligatoire pour la CPAM',
      ],

      exercises: [
        {
          id: 'a2-da-03-ex01',
          type: 'qcm',
          question: 'Que signifie "CPAM" ?',
          options: [
            'Caisse Publique d\'Aide Médicale',
            'Centre Principal d\'Assurance Maladie',
            'Caisse Primaire d\'Assurance Maladie',
            'Comité de Protection de l\'Aide Médicale',
          ],
          correctIndex: 2,
          explanation: 'CPAM = Caisse Primaire d\'Assurance Maladie. C\'est l\'organisme local qui gère l\'Assurance maladie (branche de la Sécurité sociale). Elle rembourse les soins médicaux.',
        },
        {
          id: 'a2-da-03-ex02',
          type: 'conjugaison',
          question: 'Conjuguez "devoir" : "Vous ___ apporter vos documents."',
          options: ['devez', 'devons', 'doivent', 'dois'],
          correctIndex: 0,
          explanation: '"Devoir" à la 2ème personne du pluriel (vous) : DEVEZ. Conjugaison complète : je dois / tu dois / il doit / nous devons / VOUS DEVEZ / ils doivent.',
        },
        {
          id: 'a2-da-03-ex03',
          type: 'qcm',
          question: 'Kwame travaille depuis combien de temps en France ?',
          options: ['3 mois', '2 mois', '1 mois', '6 mois'],
          correctIndex: 1,
          explanation: 'Kwame dit "je travaille depuis 2 mois". Il est en France depuis 3 mois mais a commencé à travailler après 1 mois. "Depuis + durée" avec le présent = action en cours depuis un moment.',
        },
        {
          id: 'a2-da-03-ex04',
          type: 'qcm',
          question: 'La Sécurité sociale rembourse en moyenne quel pourcentage des frais médicaux ?',
          options: ['50%', '60%', '70%', '80%'],
          correctIndex: 2,
          explanation: 'L\'agent précise : "La Sécurité sociale rembourse en moyenne 70% des frais médicaux." Les 30% restants sont le "ticket modérateur", que le patient paie ou que sa mutuelle rembourse.',
        },
        {
          id: 'a2-da-03-ex05',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une "mutuelle" ?',
          options: [
            'Une banque coopérative',
            'Une assurance complémentaire santé qui complète le remboursement de la Sécu',
            'Une association de quartier',
            'Une caisse de retraite',
          ],
          correctIndex: 1,
          explanation: 'Une mutuelle est une assurance complémentaire santé (complementary health insurance). Elle couvre tout ou partie du "ticket modérateur" (les 30% non remboursés par la Sécu). C\'est souvent proposée par l\'employeur.',
        },
        {
          id: 'a2-da-03-ex06',
          type: 'conjugaison',
          question: 'Conjuguez "pouvoir" : "Vous ___ souscrire une mutuelle."',
          options: ['peuvent', 'pouvons', 'pouvez', 'peux'],
          correctIndex: 2,
          explanation: '"Pouvoir" à la 2ème personne du pluriel (vous) : POUVEZ. L\'agent dit "vous pouvez souscrire une mutuelle" = vous avez la possibilité de prendre une assurance complémentaire.',
        },
        {
          id: 'a2-da-03-ex07',
          type: 'qcm',
          question: 'Combien de chiffres comporte le numéro de Sécurité sociale ?',
          options: ['10 chiffres', '13 chiffres', '15 chiffres', '17 chiffres'],
          correctIndex: 2,
          explanation: 'Le numéro de Sécurité sociale français comporte 15 chiffres. Il commence par 1 (homme) ou 2 (femme), puis l\'année et le mois de naissance, le département et la commune de naissance, et un numéro d\'ordre.',
        },
        {
          id: 'a2-da-03-ex08',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une "attestation provisoire" ?',
          options: [
            'Un document définitif',
            'Un document temporaire valable en attendant le document officiel',
            'Un formulaire à remplir',
            'Une carte de santé',
          ],
          correctIndex: 1,
          explanation: '"Provisoire" = temporaire, en attendant quelque chose de définitif. L\'attestation provisoire permet d\'accéder aux soins pendant la fabrication de la carte Vitale (2 à 4 semaines).',
        },
        {
          id: 'a2-da-03-ex09',
          type: 'qcm',
          question: 'Kwame a besoin d\'un acte de naissance "traduit en français". Pourquoi ?',
          options: [
            'Par obligation légale pour tous les documents',
            'Car son acte est en langue étrangère et la CPAM ne peut pas le lire',
            'Pour enregistrer la traduction dans les archives',
            'Car les originaux ne sont pas acceptés',
          ],
          correctIndex: 1,
          explanation: 'Les documents étrangers (actes d\'état civil) doivent être traduits en français par un traducteur assermenté (certified translator) pour être acceptés par les administrations françaises.',
        },
        {
          id: 'a2-da-03-ex10',
          type: 'qcm',
          question: 'Combien de temps faut-il attendre pour recevoir la carte Vitale ?',
          options: [
            'Immédiatement',
            '1 semaine',
            '2 à 4 semaines',
            '2 à 3 mois',
          ],
          correctIndex: 2,
          explanation: 'L\'agent dit "Comptez 2 à 4 semaines après la validation de votre dossier." En attendant, une attestation provisoire est disponible pour accéder aux soins médicaux.',
        },
        {
          id: 'a2-da-03-ex11',
          type: 'qcm',
          question: 'Que signifie "souscrire" une mutuelle ?',
          options: [
            'Annuler un contrat',
            'Signer et prendre un contrat d\'assurance',
            'Demander des remboursements',
            'Payer des cotisations',
          ],
          correctIndex: 1,
          explanation: '"Souscrire un contrat" = s\'y engager, le signer, adhérer. On "souscrit" à une mutuelle, une assurance, un abonnement. Synonymes : s\'abonner à, adhérer à, prendre un contrat.',
        },
        {
          id: 'a2-da-03-ex12',
          type: 'qcm',
          question: 'Kwame dit "je viens d\'arriver". Que signifie "venir de + infinitif" ?',
          options: [
            'Il va arriver bientôt',
            'Il est arrivé il y a très peu de temps',
            'Il vient d\'un pays lointain',
            'Il arrive de son travail',
          ],
          correctIndex: 1,
          explanation: '"Venir de + infinitif" = passé récent (just + past tense). "Je viens d\'arriver" = I just arrived. C\'est la façon d\'exprimer quelque chose qui s\'est passé très récemment. "Je viens de manger" = I just ate.',
        },
        {
          id: 'a2-da-03-ex13',
          type: 'qcm',
          question: 'Qu\'est-ce que le "ticket modérateur" ?',
          options: [
            'Le remboursement de la Sécurité sociale',
            'La partie des frais médicaux non remboursée par la Sécurité sociale (environ 30%)',
            'La somme que le médecin garde',
            'La cotisation mensuelle à la CPAM',
          ],
          correctIndex: 1,
          explanation: 'Le ticket modérateur est la partie des frais non remboursée par la Sécurité sociale (environ 30%). C\'est la part que le patient paie, sauf si une mutuelle la couvre. Son nom vient de l\'idée de "modérer" les dépenses de santé.',
        },
        {
          id: 'a2-da-03-ex14',
          type: 'qcm',
          question: 'Qui est affilié obligatoirement à la Sécurité sociale en France ?',
          options: [
            'Seulement les Français',
            'Seulement les personnes avec carte de résidence permanente',
            'Toute personne qui travaille en France, quelle que soit sa nationalité',
            'Seulement les personnes qui cotisent volontairement',
          ],
          correctIndex: 2,
          explanation: 'L\'agent dit "Si vous travaillez en France, vous êtes automatiquement affilié à la Sécurité sociale." Tout salarié en France est obligatoirement affilié, quelle que soit sa nationalité ou son titre de séjour.',
        },
        {
          id: 'a2-da-03-ex15',
          type: 'conjugaison',
          question: 'Conjuguez "recevoir" : "Vous ___ votre carte Vitale dans 3 semaines."',
          options: ['reçoivent', 'recevons', 'recevez', 'reçois'],
          correctIndex: 2,
          explanation: '"Recevoir" à la 2ème personne du pluriel (vous) : RECEVEZ. Attention à la cédille (ç) qui apparaît devant a, o : je reçois / il reçoit / ils reçoivent — mais nous recevons / vous recevez.',
        },
        {
          id: 'a2-da-03-ex16',
          type: 'qcm',
          question: 'Qu\'est-ce que Kwame devra apporter à la CPAM ? (liste complète)',
          options: [
            'Titre de séjour, justificatif d\'identité, acte de naissance traduit, attestation employeur',
            'Passeport, photos d\'identité, bulletin de salaire',
            'Contrat de travail, relevé bancaire, acte de naissance',
            'Carte Vitale, mutuelle, justificatif de domicile',
          ],
          correctIndex: 0,
          explanation: 'L\'agent liste : "titre de séjour ou passeport, un justificatif d\'identité, votre acte de naissance traduit en français, et une attestation de votre employeur." Ces 4 éléments sont nécessaires pour créer le dossier.',
        },
        {
          id: 'a2-da-03-ex17',
          type: 'qcm',
          question: 'Dès que = ?',
          options: [
            'Avant que',
            'En même temps que',
            'Aussitôt que / à partir du moment où',
            'Après que',
          ],
          correctIndex: 2,
          explanation: '"Dès que" = "aussitôt que" = "as soon as". "Dès que votre dossier est créé, vous avez accès aux soins" = as soon as your file is created, you can access medical care. C\'est une conjonction de temps qui exprime l\'immédiateté.',
        },
        {
          id: 'a2-da-03-ex18',
          type: 'qcm',
          question: 'Quel premier chiffre du numéro de Sécurité sociale indique une femme ?',
          options: ['0', '1', '2', '3'],
          correctIndex: 2,
          explanation: 'Le numéro de Sécurité sociale commence par 1 pour les hommes et 2 pour les femmes, suivi de l\'année de naissance (2 chiffres), du mois de naissance (2 chiffres), puis du département et de la commune de naissance.',
        },
        {
          id: 'a2-da-03-ex19',
          type: 'qcm',
          question: 'Que signifie "en moyenne" dans "la Sécu rembourse en moyenne 70%" ?',
          options: [
            'Exactement 70% dans tous les cas',
            'Environ 70%, mais le taux varie selon les soins',
            'Au moins 70%',
            'Au maximum 70%',
          ],
          correctIndex: 1,
          explanation: '"En moyenne" = on average. Le taux de remboursement varie selon le type de soin : 100% pour les maladies longues durées (ALD), 70% pour les consultations médicales, 60% pour les soins dentaires, etc. La moyenne générale est de 70%.',
        },
        {
          id: 'a2-da-03-ex20',
          type: 'qcm',
          question: 'L\'agent dit "Tout à fait." Que signifie cette expression ?',
          options: [
            'Pas du tout / absolument pas',
            'Peut-être',
            'Absolument / vous avez tout à fait raison',
            'Je ne suis pas d\'accord',
          ],
          correctIndex: 2,
          explanation: '"Tout à fait" = absolutely / exactly / quite so. C\'est une expression d\'approbation forte, plus formelle et plus élégante que "oui" seul. Très utilisée dans les contextes professionnels et administratifs.',
        },
      ],
    },

    // ─── Leçon 4 ──────────────────────────────────────────────────────────────
    {
      id: 'a2-da-04',
      slug: 'a2-impots-taxes',
      moduleSlug: 'a2-demarches-admin',
      level: 'A2',
      title: 'Les impôts et la déclaration de revenus',
      description: 'Comprenez le système fiscal français et faites votre première déclaration de revenus.',
      duration: 12,
      free: false,
      dialogue: `## Dialogue : Première déclaration d'impôts

*Aïcha appelle le centre des impôts pour comprendre comment déclarer ses revenus pour la première fois.*

**Agent impôts :** Direction Générale des Finances publiques, bonjour.

**Aïcha :** Bonjour. Je suis arrivée en France en mars dernier et c'est ma première déclaration d'impôts. Je ne sais pas comment faire.

**Agent :** Pas de panique ! Je vais vous expliquer. Vous avez travaillé en France cette année ?

**Aïcha :** Oui, depuis avril. Et j'ai eu des revenus dans mon pays pendant 3 mois aussi.

**Agent :** D'accord. Vous devez déclarer tous vos revenus mondiaux si vous êtes résidente fiscale en France.

**Aïcha :** Qu'est-ce que ça veut dire "résidente fiscale" ?

**Agent :** Si vous vivez principalement en France et que vous y travaillez, vous êtes résidente fiscale. Vous devez déclarer tous vos revenus, même ceux de l'étranger. La déclaration se fait en ligne sur impots.gouv.fr, généralement entre avril et juin.

**Aïcha :** Et pour les revenus étrangers, est-ce que je vais être imposée deux fois ?

**Agent :** Pas nécessairement. La France a des conventions fiscales avec beaucoup de pays pour éviter la double imposition. Ça dépend de votre pays d'origine.

**Aïcha :** Est-ce que je vais payer beaucoup d'impôts ?

**Agent :** Ça dépend de vos revenus. En France, l'impôt sur le revenu est progressif — les petits revenus paient peu ou pas d'impôts. Et vous avez peut-être droit à des réductions selon votre situation familiale.

**Aïcha :** Je suis célibataire et je n'ai pas d'enfants.

**Agent :** Dans ce cas, vous avez 1 "part" fiscale. La déclaration en ligne est guidée pas à pas. Si vous avez des difficultés, vous pouvez prendre rendez-vous dans un centre des finances publiques.

**Aïcha :** J'ai peur de faire une erreur. Est-ce que c'est grave si je me trompe ?

**Agent :** Si c'est involontaire, il y a généralement une simple régularisation. Mais il vaut mieux vérifier deux fois avant de valider. Et si vous êtes non imposable, vous devrez quand même déclarer — c'est obligatoire pour tous les résidents fiscaux.

---

### Vocabulaire clé — Les impôts

| Terme | Définition |
|---|---|
| La déclaration de revenus | Formulaire annuel à remplir entre avril et juin |
| L'impôt sur le revenu | Taxe sur les salaires et autres revenus |
| Résidente fiscale | Personne dont le domicile fiscal est en France |
| La part fiscale | Unité de calcul (1 adulte seul = 1 part) |
| L'impôt progressif | Taux qui augmente avec les revenus |
| Non imposable | Ne pas avoir à payer d'impôt sur le revenu |
| La double imposition | Être taxé deux fois sur les mêmes revenus |
| La convention fiscale | Accord entre deux pays pour éviter la double imposition |`,

      linguisticPoint: `## Point linguistique : Le futur simple — les projets et les prévisions

### Formation du futur simple
**Règle générale : base (infinitif) + terminaisons**
| Pronom | Terminaison | Exemple (déclarer) | Exemple (finir) |
|---|---|---|---|
| Je | **-rai** | je déclarerai | je finirai |
| Tu | **-ras** | tu déclareras | tu finiras |
| Il/Elle | **-ra** | il déclarera | elle finira |
| Nous | **-rons** | nous déclarerons | nous finirons |
| Vous | **-rez** | vous déclarerez | vous finirez |
| Ils/Elles | **-ront** | ils déclareront | elles finiront |

### Futurs irréguliers — les plus fréquents à connaître
| Infinitif | Base irrégulière | Je | Il/Elle |
|---|---|---|---|
| être | **ser-** | je serai | il sera |
| avoir | **aur-** | j'aurai | elle aura |
| aller | **ir-** | j'irai | il ira |
| faire | **fer-** | je ferai | elle fera |
| pouvoir | **pourr-** | je pourrai | il pourra |
| devoir | **devr-** | je devrai | elle devra |
| vouloir | **voudr-** | je voudrai | il voudra |
| venir | **viendr-** | je viendrai | elle viendra |
| savoir | **saur-** | je saurai | il saura |

### Vocabulaire fiscal essentiel
| Terme | Définition |
|---|---|
| La déclaration de revenus | Formulaire annuel déclarant tous ses revenus |
| L'impôt sur le revenu (IR) | Taxe annuelle calculée sur les revenus |
| La part fiscale | Unité de calcul de l'impôt selon la composition du foyer |
| Résident fiscal | Personne qui a son domicile fiscal en France |
| L'impôt progressif | Taux qui augmente par tranches selon le revenu |
| La tranche d'imposition | Catégorie de revenus avec un taux précis |
| Non imposable | Ne pas avoir à payer d'IR (revenus sous le seuil) |

### Tranches de l'impôt sur le revenu (exemple simplifié)
| Revenu annuel | Taux |
|---|---|
| Jusqu'à ~11 500 € | 0% |
| De 11 500 à 29 000 € | 11% |
| De 29 000 à 83 000 € | 30% |
| Au-delà de 83 000 € | 41-45% |

### Erreurs fréquentes
- ❌ *Je paierai les impôts demain* (hors contexte) → ✅ futur si action future planifiée
- ❌ *J'allerai à la préfecture* → ✅ **J'irai** (irrégulier)
- ❌ *Tu seras beaucoup d'impôts* → ✅ **Tu paieras** ou **Tu devras payer** (sujet + prédicat cohérents)`,

      keyPoints: [
        'Futur simple : infinitif + rai/ras/ra/rons/rez/ront',
        'Futur irréguliers : être → serai / avoir → aurai / aller → irai / faire → ferai',
        'Résidence fiscale : si vous vivez ET travaillez principalement en France',
        'Déclaration en ligne : impots.gouv.fr (avril-juin)',
        'Impôt progressif : plus les revenus sont élevés, plus le taux est élevé',
      ],

      exercises: [
        {
          id: 'a2-da-04-ex01',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une "déclaration de revenus" ?',
          options: [
            'Un document pour demander une augmentation',
            'Un formulaire annuel où vous indiquez vos revenus pour calculer votre impôt',
            'Un justificatif de salaire pour un loyer',
            'Un document de la Sécurité sociale',
          ],
          correctIndex: 1,
          explanation: 'La déclaration de revenus est un formulaire à remplir chaque année (généralement de mai à juin en France). Vous y déclarez tous vos revenus de l\'année précédente. L\'administration calcule ensuite l\'impôt dû.',
        },
        {
          id: 'a2-da-04-ex02',
          type: 'conjugaison',
          question: 'Mettez au futur : "Vous ___ déclarer vos revenus en mai." (devoir)',
          options: ['devez', 'devrez', 'devriez', 'devaient'],
          correctIndex: 1,
          explanation: 'Futur de "devoir" : je devrai / tu devras / il devra / nous devrons / VOUS DEVREZ / ils devront. Base irrégulière "devr-" + terminaisons du futur.',
        },
        {
          id: 'a2-da-04-ex03',
          type: 'qcm',
          question: 'Que signifie "impôt progressif" ?',
          options: [
            'L\'impôt augmente chaque année',
            'Le taux d\'imposition augmente avec le niveau de revenus',
            'L\'impôt est payé progressivement en plusieurs fois',
            'L\'impôt est le même pour tout le monde',
          ],
          correctIndex: 1,
          explanation: 'Un impôt progressif = le taux augmente avec les revenus. En France, l\'impôt sur le revenu a plusieurs tranches : 0% jusqu\'à ~11 000€ / 11% de 11 000 à 28 000€ / 30% de 28 000 à 75 000€ / 41% au-delà.',
        },
        {
          id: 'a2-da-04-ex04',
          type: 'qcm',
          question: 'Aïcha est arrivée en France quand ?',
          options: ['En janvier', 'En mars', 'En avril', 'En juin'],
          correctIndex: 1,
          explanation: 'Aïcha dit "je suis arrivée en France en mars dernier". Elle a commencé à travailler "depuis avril" (un mois après son arrivée). "Dernier(e)" après le mois = le mois passé (ex : "mars dernier" = last March).',
        },
        {
          id: 'a2-da-04-ex05',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une "part fiscale" ?',
          options: [
            'Une partie de l\'impôt à payer',
            'Une unité de calcul de l\'impôt basée sur la composition du foyer',
            'Le montant total d\'impôt',
            'Un crédit d\'impôt',
          ],
          correctIndex: 1,
          explanation: 'La part fiscale est l\'unité de calcul. 1 adulte seul = 1 part. Un couple sans enfant = 2 parts. Chaque enfant ajoute 0,5 part (à partir du 3ème : 1 part). Plus on a de parts, moins on paie d\'impôts.',
        },
        {
          id: 'a2-da-04-ex06',
          type: 'conjugaison',
          question: 'Futur de "être" : "La déclaration ___ disponible en avril."',
          options: ['est', 'sera', 'serait', 'a été'],
          correctIndex: 1,
          explanation: 'Futur de "être" : je serai / tu seras / IL/ELLE SERA / nous serons / vous serez / ils seront. Base irrégulière "ser-". "La déclaration sera disponible en avril" = futur.',
        },
        {
          id: 'a2-da-04-ex07',
          type: 'qcm',
          question: 'Sur quel site internet peut-on faire sa déclaration d\'impôts en ligne ?',
          options: ['service-public.fr', 'impots.gouv.fr', 'finances.fr', 'fiscalite.gouv.fr'],
          correctIndex: 1,
          explanation: 'La déclaration de revenus se fait sur impots.gouv.fr (site officiel de la Direction Générale des Finances Publiques - DGFiP). Il est possible de se faire aider dans un centre des finances publiques.',
        },
        {
          id: 'a2-da-04-ex08',
          type: 'qcm',
          question: 'L\'agent dit "Pas de panique !" Que veut-il dire ?',
          options: [
            'Attention, c\'est dangereux',
            'Ne vous inquiétez pas, c\'est simple',
            'C\'est urgent, dépêchez-vous',
            'Arrêtez de parler',
          ],
          correctIndex: 1,
          explanation: '"Pas de panique !" = "Don\'t panic / Don\'t worry!" C\'est une expression rassurante pour calmer quelqu\'un qui s\'inquiète. L\'agent l\'utilise pour rassurer Aïcha qui ne sait pas comment déclarer ses impôts.',
        },
        {
          id: 'a2-da-04-ex09',
          type: 'qcm',
          question: 'Aïcha a combien de "parts" fiscales ?',
          options: ['0,5 part', '1 part', '1,5 part', '2 parts'],
          correctIndex: 1,
          explanation: 'L\'agent dit "Vous avez 1 part fiscale" car Aïcha est célibataire sans enfants. 1 adulte seul = 1 part. Un couple sans enfants = 2 parts. Chaque enfant à charge ajoute 0,5 part.',
        },
        {
          id: 'a2-da-04-ex10',
          type: 'qcm',
          question: 'Qu\'est-ce que la "résidence fiscale" ?',
          options: [
            'Votre appartement habituel',
            'L\'adresse postale pour recevoir les impôts',
            'Le statut de personne dont le domicile fiscal principal est en France',
            'Un logement social',
          ],
          correctIndex: 2,
          explanation: 'La résidence fiscale détermine dans quel pays vous devez payer vos impôts. Vous êtes résident fiscal en France si : vous y habitez principalement / vous y travaillez / vos intérêts économiques sont en France.',
        },
        {
          id: 'a2-da-04-ex11',
          type: 'qcm',
          question: 'Quand se fait généralement la déclaration de revenus en France ?',
          options: ['Janvier-février', 'Mars-avril', 'Avril-juin', 'Octobre-novembre'],
          correctIndex: 2,
          explanation: 'La déclaration de revenus (pour les revenus de l\'année N-1) se fait généralement d\'avril à juin en France. Les dates limites varient selon le département et le mode de déclaration (papier ou internet).',
        },
        {
          id: 'a2-da-04-ex12',
          type: 'qcm',
          question: 'Quel futur irrégulier est correct pour "aller" ?',
          options: ['J\'allerai', 'J\'irai', 'J\'allai', 'J\'allera'],
          correctIndex: 1,
          explanation: '"Aller" au futur : J\'IRAI (irrégulier). Base "ir-". Complet : j\'irai / tu iras / il ira / nous irons / vous irez / ils iront.',
        },
        {
          id: 'a2-da-04-ex13',
          type: 'qcm',
          question: 'Aïcha devra déclarer les revenus de son pays d\'origine. Pourquoi ?',
          options: [
            'Parce qu\'elle est étrangère',
            'Parce qu\'elle est résidente fiscale en France et doit déclarer tous ses revenus mondiaux',
            'Parce que son pays a un accord avec la France',
            'Parce qu\'elle a un visa de travail',
          ],
          correctIndex: 1,
          explanation: 'L\'agent explique : en tant que résidente fiscale, Aïcha "doit déclarer tous vos revenus, même ceux de l\'étranger." C\'est la règle générale. Des conventions fiscales entre pays peuvent éviter la double imposition.',
        },
        {
          id: 'a2-da-04-ex14',
          type: 'qcm',
          question: 'Que fait-on si on a des difficultés avec sa déclaration en ligne ?',
          options: [
            'On ne déclare pas',
            'On envoie une lettre',
            'On prend rendez-vous dans un centre des finances publiques',
            'On attend l\'année suivante',
          ],
          correctIndex: 2,
          explanation: 'L\'agent dit : "Si vous avez des difficultés, vous pouvez prendre rendez-vous dans un centre des finances publiques." Des agents peuvent aider à remplir la déclaration. Des associations (comme Solidarités Actives) peuvent aussi aider.',
        },
        {
          id: 'a2-da-04-ex15',
          type: 'conjugaison',
          question: 'Futur de "faire" : "Je ___ ma déclaration en ligne."',
          options: ['ferai', 'faisais', 'ferait', 'faira'],
          correctIndex: 0,
          explanation: 'Futur de "faire" : JE FERAI (irrégulier, base "fer-"). Complet : je ferai / tu feras / il fera / nous ferons / vous ferez / ils feront.',
        },
        {
          id: 'a2-da-04-ex16',
          type: 'qcm',
          question: 'Que signifie "guidée pas à pas" pour la déclaration en ligne ?',
          options: [
            'Il y a beaucoup d\'étapes compliquées',
            'Le site vous guide à chaque étape, de façon simple et progressive',
            'Vous devez prendre de nombreux rendez-vous',
            'Un agent vous guide en personne',
          ],
          correctIndex: 1,
          explanation: '"Guidée pas à pas" = step-by-step. La déclaration en ligne sur impots.gouv.fr est conçue pour être progressive : on vous explique chaque étape avant de passer à la suivante, ce qui facilite la démarche.',
        },
        {
          id: 'a2-da-04-ex17',
          type: 'qcm',
          question: 'Un célibataire sans enfants avec un revenu très faible...',
          options: [
            'Paie beaucoup d\'impôts',
            'Ne paie pas d\'impôts du tout grâce à l\'impôt progressif',
            'Bénéficie d\'une exonération automatique de 5 ans',
            'Paie un taux fixe de 10%',
          ],
          correctIndex: 1,
          explanation: 'L\'agent dit "les petits revenus paient peu ou pas d\'impôts." En France, il existe un seuil en dessous duquel on ne paie pas d\'impôt sur le revenu (environ 11 000€/an en 2024). Les foyers modestes sont souvent non imposables.',
        },
        {
          id: 'a2-da-04-ex18',
          type: 'qcm',
          question: 'Que signifie "Ça dépend" en réponse à une question ?',
          options: [
            'Je ne sais pas',
            'Oui, absolument',
            'La réponse varie selon les circonstances',
            'Non, pas du tout',
          ],
          correctIndex: 2,
          explanation: '"Ça dépend" = it depends. C\'est une réponse qui indique que la réponse varie selon les conditions. L\'agent dit "Ça dépend de vos revenus" — ce qui signifie que le montant d\'impôt n\'est pas fixe mais calculé selon vos revenus.',
        },
        {
          id: 'a2-da-04-ex19',
          type: 'qcm',
          question: 'Futur de "avoir" : "Vous ___ peut-être des réductions d\'impôts."',
          options: ['avez', 'aviez', 'aurez', 'ayez'],
          correctIndex: 2,
          explanation: 'Futur de "avoir" : VOUS AUREZ (irrégulier, base "aur-"). Complet : j\'aurai / tu auras / il aura / nous aurons / VOUS AUREZ / ils auront.',
        },
        {
          id: 'a2-da-04-ex20',
          type: 'qcm',
          question: 'Qu\'est-ce que la "Direction Générale des Finances Publiques" ?',
          options: [
            'Une grande banque française',
            'L\'administration fiscale française (les impôts)',
            'Un ministère des finances d\'un autre pays',
            'Une caisse de retraite',
          ],
          correctIndex: 1,
          explanation: 'La Direction Générale des Finances Publiques (DGFiP) est l\'administration française chargée de collecter les impôts et les taxes. C\'est "les impôts". Elle gère l\'impôt sur le revenu, la TVA, l\'impôt sur les sociétés...',
        },
      ],
    },

    // ─── Leçon 5 ──────────────────────────────────────────────────────────────
    {
      id: 'a2-da-05',
      slug: 'a2-caf-allocations',
      moduleSlug: 'a2-demarches-admin',
      level: 'A2',
      title: 'La CAF et les allocations familiales',
      description: 'Découvrez les aides sociales françaises et comment déposer votre dossier à la CAF.',
      duration: 12,
      free: false,
      dialogue: `## Dialogue : Inscription à la CAF

*Nour a deux enfants et vient demander des allocations familiales à la CAF.*

**Agent CAF :** Bonjour madame. Vous avez un rendez-vous ?

**Nour :** Oui, bonjour. J'ai rendez-vous à 14h pour une demande d'allocations familiales.

**Agent :** Très bien. Vous habitez en France depuis quand ?

**Nour :** Depuis 8 mois. Je suis en situation régulière, j'ai un titre de séjour valide jusqu'en 2026.

**Agent :** Très bien. Et vos enfants ont quel âge ?

**Nour :** J'ai un fils de 4 ans et une fille de 7 ans. Ma fille est à l'école primaire.

**Agent :** Vous pouvez toucher les allocations familiales pour 2 enfants. En France, les allocations commencent à partir de 2 enfants à charge. Pour un enfant seul, vous pouvez toucher d'autres aides comme le complément de libre choix du mode de garde.

**Nour :** Combien vais-je toucher par mois ?

**Agent :** Pour 2 enfants, c'est environ 140 euros par mois. Le montant dépend de vos revenus — c'est sous conditions de ressources.

**Nour :** Est-ce que mes enfants doivent être nés en France ?

**Agent :** Non, pas obligatoirement. Ils doivent habiter en France et être à votre charge. Vous avez les documents pour les deux enfants — actes de naissance traduits, justificatifs de scolarité ?

**Nour :** Oui, tout est là. Est-ce que je peux aussi faire une demande d'APL ? Je suis locataire, je paie 650 euros de loyer par mois.

**Agent :** Tout à fait ! L'APL, c'est l'Aide Personnalisée au Logement. Vous pouvez la demander en même temps. Il vous faut votre contrat de bail et vos trois dernières quittances de loyer.

**Nour :** Et pour le RSA, est-ce que j'ai le droit ?

**Agent :** Le RSA est accessible si vous résidez légalement en France depuis au moins 5 ans. Vous êtes là depuis 8 mois, donc pas encore. Mais vous pouvez demander la prime d'activité si vous travaillez.

---

### Vocabulaire clé — La CAF et les aides sociales

| Aide | Bénéficiaires | Condition principale |
|---|---|---|
| Allocations familiales | Familles avec 2 enfants ou + | 2 enfants à charge |
| APL | Locataires | Contrat de bail + quittances |
| RSA | Sans revenus ou très faibles revenus | Résidence légale depuis 5 ans |
| Prime d'activité | Travailleurs à faibles revenus | Avoir un emploi |
| Allocation de rentrée scolaire | Parents à revenus modestes | Enfants de 6 à 18 ans |`,

      linguisticPoint: `## Point linguistique : Les pronoms compléments d'objet direct (COD)

### Les pronoms COD — tableau complet
| Personne | Pronom COD | Avant voyelle | Exemple |
|---|---|---|---|
| 1ère sing. | **me** | **m'** | Il me contacte / Il m'appelle |
| 2ème sing. | **te** | **t'** | Je te rappelle / Je t'aide |
| 3ème masc. | **le** | **l'** | Je le reçois / Je l'appelle |
| 3ème fém. | **la** | **l'** | Je la vois / Je l'entends |
| 1ère plur. | **nous** | **nous** | Il nous aide |
| 2ème plur. | **vous** | **vous** | L'agent vous reçoit |
| 3ème plur. | **les** | **les** | Je les envoie |

### Position du pronom COD — AVANT le verbe
| Phrase originale | Avec pronom COD | Règle |
|---|---|---|
| Je vois **la liste** | Je **la** vois | la liste (fém.) → la |
| J'envoie **les documents** | Je **les** envoie | les documents (plur.) → les |
| Je remplis **le formulaire** | Je **le** remplis | le formulaire (masc.) → le |
| J'aide **Nour** | Je **l'**aide | Nour commence par voyelle → l' |
| L'agent aide **les familles** | L'agent **les** aide | les familles (plur.) → les |

### Au passé composé — l'accord du participe passé
Quand le COD est placé AVANT, le participe passé s'accorde :
- J'ai rempli le formulaire → Je **l'**ai rempli**e**? Non → Je **l'**ai rempli (masc.)
- J'ai envoyé la demande → Je **l'**ai envoyé**e** (fém. → e ajouté)
- J'ai reçu les documents → Je **les** ai reçu**s** (plur. masc. → s ajouté)

### Aides de la CAF — les principales
| Aide | Abréviation | Bénéficiaires |
|---|---|---|
| Allocations familiales | AF | Familles avec 2 enfants ou plus |
| Aide Personnalisée au Logement | APL | Locataires et propriétaires (CAF) |
| Revenu de Solidarité Active | RSA | Personnes sans ou peu de revenus (5 ans résidence) |
| Prime d'activité | PA | Travailleurs à faibles revenus |
| Allocation de rentrée scolaire | ARS | Parents avec enfants scolarisés |

### Erreurs fréquentes
- ❌ *Je vois la → Je vois la* → ✅ **Je la vois** (pronom AVANT le verbe)
- ❌ *Je les ai envoyé* → ✅ **Je les ai envoyés** (accord avec COD masculin pluriel)
- ❌ *Je me rappelle* (en contexte de rappeler quelqu'un) → ✅ **Je rappelle / Je te rappelle**`,

      keyPoints: [
        'Pronoms COD : me/te/le/la/nous/vous/les — placés AVANT le verbe',
        'Allocations familiales : à partir de 2 enfants à charge',
        'APL : aide au logement pour les locataires (contrat bail + quittances)',
        'Droits CAF : pour résidents légaux en France (titre de séjour valide)',
        'Enfants : doivent résider en France et être à votre charge',
      ],

      exercises: [
        {
          id: 'a2-da-05-ex01',
          type: 'qcm',
          question: 'Que signifie "CAF" ?',
          options: [
            'Caisse d\'Assurance Familiale',
            'Caisse d\'Allocations Familiales',
            'Centre d\'Aide aux Familles',
            'Comité d\'Assistance Familiale',
          ],
          correctIndex: 1,
          explanation: 'CAF = Caisse d\'Allocations Familiales. C\'est l\'organisme qui gère les prestations sociales familiales en France : allocations familiales, APL, RSA, prime d\'activité, etc.',
        },
        {
          id: 'a2-da-05-ex02',
          type: 'qcm',
          question: 'À partir de combien d\'enfants touche-t-on les allocations familiales ?',
          options: ['1 enfant', '2 enfants', '3 enfants', '4 enfants'],
          correctIndex: 1,
          explanation: 'L\'agent précise : "les allocations commencent à partir de 2 enfants à charge." Pour un seul enfant, d\'autres aides existent (complément de libre choix du mode de garde, etc.).',
        },
        {
          id: 'a2-da-05-ex03',
          type: 'qcm',
          question: 'Remplacez "les documents" par un pronom COD : "J\'ai apporté les documents."',
          options: ['Je les ai apportés', 'Je lui ai apportés', 'Je les ai apporté', 'Je l\'ai apportés'],
          correctIndex: 0,
          explanation: '"Les documents" → pronom COD pluriel = "les". "J\'ai apporté LES documents" → "Je LES ai apportés". Au passé composé avec "avoir", le participe passé s\'accorde avec le COD placé avant : apport-É-S (masculin pluriel).',
        },
        {
          id: 'a2-da-05-ex04',
          type: 'qcm',
          question: 'Nour dit être "en situation régulière". Que signifie-t-il ?',
          options: [
            'Elle a un emploi régulier',
            'Elle est en France légalement avec des documents valides',
            'Elle paye régulièrement son loyer',
            'Elle a des revenus réguliers',
          ],
          correctIndex: 1,
          explanation: '"En situation régulière" = être en France avec les documents légaux en règle (titre de séjour valide, visa en cours). C\'est la condition nécessaire pour bénéficier de la plupart des aides sociales en France.',
        },
        {
          id: 'a2-da-05-ex05',
          type: 'qcm',
          question: 'Que signifie "APL" ?',
          options: [
            'Aide Publique au Logement',
            'Aide Personnalisée au Logement',
            'Allocation de Participation au Loyer',
            'Aide au Paiement du Loyer',
          ],
          correctIndex: 1,
          explanation: 'APL = Aide Personnalisée au Logement. C\'est une aide versée par la CAF pour réduire le montant du loyer. Elle est "personnalisée" car calculée selon vos revenus, votre situation familiale et le montant de votre loyer.',
        },
        {
          id: 'a2-da-05-ex06',
          type: 'qcm',
          question: 'Remplacez "le formulaire" par un pronom COD : "Je remplis le formulaire."',
          options: ['Je lui remplis', 'Je le remplis', 'Je la remplis', 'Je les remplis'],
          correctIndex: 1,
          explanation: '"Le formulaire" est masculin singulier → pronom COD = "le". "Je remplis LE formulaire" → "Je LE remplis". Le pronom se place avant le verbe.',
        },
        {
          id: 'a2-da-05-ex07',
          type: 'qcm',
          question: 'Les enfants de Nour doivent-ils être nés en France pour toucher les allocations ?',
          options: [
            'Oui, obligatoirement',
            'Non, ils doivent seulement habiter en France et être à charge',
            'Oui, sauf s\'ils ont moins de 3 ans',
            'Cela dépend du titre de séjour des parents',
          ],
          correctIndex: 1,
          explanation: 'L\'agent répond : "Non, pas obligatoirement. Ils doivent habiter en France et être à votre charge." Le lieu de naissance n\'est pas un critère pour les allocations familiales.',
        },
        {
          id: 'a2-da-05-ex08',
          type: 'qcm',
          question: 'Que signifie "toucher" dans "vous pouvez toucher les allocations" ?',
          options: [
            'Physiquement toucher un objet',
            'Recevoir / percevoir une aide financière',
            'Demander une aide',
            'Annuler une aide',
          ],
          correctIndex: 1,
          explanation: '"Toucher" dans un contexte financier = percevoir, recevoir. "Toucher des allocations / un salaire / une aide" = receive / get. C\'est une expression très courante dans la langue quotidienne française.',
        },
        {
          id: 'a2-da-05-ex09',
          type: 'qcm',
          question: 'Qu\'est-ce que le "RSA" ?',
          options: [
            'Revenu de Solidarité Active — aide pour les personnes à faibles revenus ou sans revenus',
            'Remboursement de la Sécurité pour les Allocations',
            'Régime Social des Artisans',
            'Réseau de Soutien aux Arrivants',
          ],
          correctIndex: 0,
          explanation: 'Le RSA (Revenu de Solidarité Active) est une aide versée par la CAF aux personnes sans revenus ou avec de très faibles revenus. Il remplace le minimum vieillesse pour les moins de 65 ans.',
        },
        {
          id: 'a2-da-05-ex10',
          type: 'qcm',
          question: 'Pour demander l\'APL, quels documents faut-il apporter ?',
          options: [
            'Carte Vitale et justificatif d\'identité',
            'Contrat de bail et trois dernières quittances de loyer',
            'Bulletins de salaire et actes de naissance',
            'Passeport et titre de séjour',
          ],
          correctIndex: 1,
          explanation: 'L\'agent précise : "Il vous faut votre contrat de bail et vos trois dernières quittances de loyer." Ces documents prouvent que vous êtes locataire et indiquent le montant du loyer.',
        },
        {
          id: 'a2-da-05-ex11',
          type: 'qcm',
          question: 'Depuis combien de temps Nour habite-t-elle en France ?',
          options: ['3 mois', '6 mois', '8 mois', '1 an'],
          correctIndex: 2,
          explanation: 'Nour dit "je suis en France depuis 8 mois". Elle a un titre de séjour valide, ce qui lui permet de bénéficier des aides sociales.',
        },
        {
          id: 'a2-da-05-ex12',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un "justificatif de scolarité" ?',
          options: [
            'Un bulletin de notes',
            'Un document attestant qu\'un enfant est bien inscrit dans un établissement scolaire',
            'Un diplôme',
            'Un carnet de correspondance',
          ],
          correctIndex: 1,
          explanation: 'Un justificatif de scolarité (ou certificat de scolarité) est un document délivré par l\'école attestant qu\'un enfant y est bien inscrit. La CAF peut le demander pour confirmer que l\'enfant est bien présent en France.',
        },
        {
          id: 'a2-da-05-ex13',
          type: 'qcm',
          question: 'Remplacez "vous" par le pronom COD correct : "L\'agent aide madame Nour."',
          options: ['L\'agent lui aide', 'L\'agent la aide', 'L\'agent l\'aide', 'L\'agent vous aide'],
          correctIndex: 2,
          explanation: '"Madame Nour" est féminin singulier → pronom COD = "la" → devant voyelle (aide commence par "a") → élision en "l\'". "L\'agent aide madame Nour" → "L\'agent L\'aide".',
        },
        {
          id: 'a2-da-05-ex14',
          type: 'qcm',
          question: 'Qu\'est-ce que la "prime d\'activité" ?',
          options: [
            'Une prime donnée à l\'embauche',
            'Une aide versée aux travailleurs à faibles revenus pour compléter leur salaire',
            'Un bonus de fin d\'année',
            'Une aide pour les chômeurs',
          ],
          correctIndex: 1,
          explanation: 'La prime d\'activité est une aide de la CAF versée aux travailleurs (salariés ou indépendants) qui ont de faibles revenus. Elle complète le salaire pour améliorer le pouvoir d\'achat des travailleurs modestes.',
        },
        {
          id: 'a2-da-05-ex15',
          type: 'qcm',
          question: 'Que signifie "locataire" dans "je suis locataire" ?',
          options: [
            'Propriétaire de son logement',
            'Personne qui loue un logement (paie un loyer)',
            'Personne hébergée gratuitement',
            'Gestionnaire d\'immeuble',
          ],
          correctIndex: 1,
          explanation: 'Un locataire est une personne qui loue un logement et paie un loyer à un propriétaire. Le propriétaire possède le logement. Le locataire le loue. Ce statut est nécessaire pour demander l\'APL.',
        },
        {
          id: 'a2-da-05-ex16',
          type: 'qcm',
          question: 'L\'agent dit "Tout est là." Que signifie "là" ?',
          options: [
            'Là-bas (loin)',
            'Ici (présent, à portée de main)',
            'Bientôt',
            'En ligne',
          ],
          correctIndex: 1,
          explanation: '"Tout est là" = everything is here. "Là" peut signifier "ici" (nearby) ou "là-bas" (over there) selon le contexte. Nour montre ses documents : "tout est là" = tout est présent, devant l\'agent.',
        },
        {
          id: 'a2-da-05-ex17',
          type: 'qcm',
          question: 'Que faut-il pour que les enfants ouvrent droit aux allocations familiales ?',
          options: [
            'Être nés en France',
            'Avoir la nationalité française',
            'Habiter en France et être à la charge des parents',
            'Être scolarisés dans une école publique',
          ],
          correctIndex: 2,
          explanation: 'Pour les allocations familiales, les enfants doivent : 1) résider habituellement en France, 2) être à la charge effective des parents. Le lieu de naissance et la nationalité ne sont pas des critères.',
        },
        {
          id: 'a2-da-05-ex18',
          type: 'qcm',
          question: 'Remplacez "la demande" par un pronom : "J\'ai fait la demande."',
          options: ['Je l\'ai fait', 'Je la ai faite', 'Je l\'ai faite', 'Je les ai faite'],
          correctIndex: 2,
          explanation: '"La demande" est féminin singulier → pronom COD = "la" → devant le verbe commençant par voyelle (ai = avoir) → élision "l\'". Et accord du participe passé avec le COD féminin : fait-E. "Je l\'ai faite."',
        },
        {
          id: 'a2-da-05-ex19',
          type: 'qcm',
          question: 'Comment dit-on "at the same time" en français ?',
          options: ['Au même moment', 'En même temps', 'Simultanément', 'Les deux premières sont correctes'],
          correctIndex: 3,
          explanation: '"En même temps" et "au même moment" sont tous les deux corrects. L\'agent dit "Vous pouvez la demander en même temps" = vous pouvez demander l\'APL en même temps que les allocations familiales.',
        },
        {
          id: 'a2-da-05-ex20',
          type: 'qcm',
          question: 'Un "contrat de bail" c\'est...',
          options: [
            'Un contrat de travail',
            'Un contrat de location qui définit les conditions du loyer',
            'Un contrat d\'assurance',
            'Un contrat de vente',
          ],
          correctIndex: 1,
          explanation: 'Un contrat de bail (ou bail) est un contrat entre le propriétaire (bailleur) et le locataire. Il précise : le loyer mensuel, la durée du contrat (généralement 1 ou 3 ans), les charges incluses, les conditions. C\'est le document essentiel pour l\'APL.',
        },
      ],
    },
  ],
};
