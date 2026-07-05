import type { LangModule } from '../types';

export const a2VieQuotidienne: LangModule = {
  id: 'a2-mod-01',
  slug: 'a2-vie-quotidienne',
  level: 'A2',
  title: 'Vie quotidienne & famille',
  subtitle: 'Se présenter, la famille, les activités du jour',
  description: 'Apprenez à vous présenter, parler de votre famille et décrire vos habitudes quotidiennes en français.',
  type: 'thematique',
  emoji: '🏠',
  free: true,
  lessons: [
    // ─── Leçon 1 ──────────────────────────────────────────────────────────────
    {
      id: 'a2-vq-01',
      slug: 'a2-se-presenter',
      moduleSlug: 'a2-vie-quotidienne',
      level: 'A2',
      title: 'Se présenter et parler de soi',
      description: 'Donnez votre nom, votre nationalité, votre profession et parlez de vous en situation réelle.',
      duration: 12,
      free: true,
      dialogue: `## Dialogue : À la mairie

*Samir arrive à la mairie de son quartier pour une démarche administrative. Un agent l'accueille.*

**Agent :** Bonjour monsieur, je peux vous aider ?

**Samir :** Bonjour madame. Oui, je voudrais faire une demande de carte de séjour.

**Agent :** Très bien. Vous pouvez me donner vos informations personnelles ?

**Samir :** Bien sûr. Je m'appelle Samir Benali. Je suis né le 14 mars 1988 à Alger, en Algérie.

**Agent :** Et quelle est votre adresse en France ?

**Samir :** J'habite au 23, rue des Lilas, à Lyon, dans le 3ème arrondissement. Le code postal est 69003.

**Agent :** Parfait. Quelle est votre profession ?

**Samir :** Je suis technicien informatique. Je travaille dans une entreprise à la Part-Dieu.

**Agent :** Depuis combien de temps êtes-vous en France ?

**Samir :** Je suis arrivé en France il y a deux ans, en septembre 2022. Je suis en France depuis deux ans.

**Agent :** Vous avez un numéro de téléphone et une adresse email ?

**Samir :** Oui. Mon numéro est le 06 12 34 56 78. Mon email est samir.benali@email.com.

**Agent :** Très bien, monsieur Benali. Voici le formulaire à remplir. Vous avez une pièce d'identité ?

**Samir :** Oui, voici mon passeport.

**Agent :** Merci. Vous devez aussi apporter deux photos d'identité et un justificatif de domicile. Avez-vous une facture EDF ou une quittance de loyer ?

**Samir :** J'ai une quittance de loyer de ce mois-ci.

**Agent :** Parfait, c'est suffisant. Je vous donne un récépissé et votre rendez-vous est confirmé pour le 15 du mois prochain.

---

### Vocabulaire clé — Se présenter à l'administration

| Français | Sens / Explication |
|---|---|
| Je m'appelle | Mon prénom et nom sont... |
| Je suis né(e) le... | Date de naissance |
| J'habite au / à | Adresse de domicile |
| Mon code postal | Le numéro à 5 chiffres de la ville |
| Je suis technicien(ne) | Ma profession (sans article) |
| Depuis deux ans | J'ai commencé il y a 2 ans et c'est toujours le cas |
| Il y a deux ans | L'événement passé a eu lieu deux ans avant |
| Une pièce d'identité | Passeport, carte nationale d'identité, titre de séjour |
| Un justificatif de domicile | Facture EDF, quittance de loyer (moins de 3 mois) |
| Un récépissé | Document provisoire remis en attendant la décision |

---

### Situation 2 : Au téléphone avec une administration

*Samir appelle la préfecture pour vérifier son dossier.*

**Standardiste :** Préfecture du Rhône, bonjour.

**Samir :** Bonjour. Je suis Samir Benali, né le 14 mars 1988. Je voudrais savoir où en est mon dossier.

**Standardiste :** Votre numéro de dossier, s'il vous plaît ?

**Samir :** C'est le 69-2024-00458.

**Standardiste :** Un instant... Votre dossier est en cours de traitement. Vous recevrez une réponse dans 3 semaines.`,

      linguisticPoint: `## Point linguistique : Se présenter — les formules essentielles

### Les verbes être et avoir (présent)
| Pronom | être | avoir |
|---|---|---|
| Je | **suis** | **ai** |
| Tu | es | as |
| Il/Elle | est | a |
| Nous | sommes | avons |
| Vous | êtes | avez |
| Ils/Elles | sont | ont |

### Formules de présentation — tableau complet
| Formule | Exemple | Usage |
|---|---|---|
| **Je m'appelle** + prénom + nom | Je m'appelle Samir Benali | se présenter |
| **Je suis** + nationalité | Je suis algérien | identité |
| **Je suis** + profession | Je suis technicien | profession (sans article) |
| **J'habite au** + adresse | J'habite au 23, rue des Lilas | adresse |
| **Je suis né(e) le** + date | Je suis né le 14 mars 1988 | date de naissance |
| **Je suis né(e) à** + ville | Je suis né à Alger | lieu de naissance |
| **Je travaille chez / dans** + lieu | Je travaille dans une entreprise | emploi |
| **Je suis en France depuis** + durée | Je suis en France depuis 2 ans | durée de présence |

### Nationalités courantes (masculin / féminin)
| Pays | Masculin | Féminin |
|---|---|---|
| Algérie | Algérien | Algérienne |
| Maroc | Marocain | Marocaine |
| Tunisie | Tunisien | Tunisienne |
| Sénégal | Sénégalais | Sénégalaise |
| Mali | Malien | Malienne |
| Congo | Congolais | Congolaise |
| Roumanie | Roumain | Roumaine |
| Portugal | Portugais | Portugaise |
| Turquie | Turc | Turque |
| Côte d'Ivoire | Ivoirien | Ivoirienne |

### Depuis vs Il y a — la différence fondamentale
| Structure | Temps verbal | Sens | Exemple |
|---|---|---|---|
| **depuis** + durée | présent | action qui dure encore | Je suis en France **depuis** 2 ans |
| **il y a** + durée | passé composé | événement passé terminé | Je suis arrivé **il y a** 2 ans |

### Erreurs fréquentes à éviter
- ❌ *Je suis un médecin* → ✅ **Je suis médecin** (pas d'article avec la profession après être)
- ❌ *Je suis arrivé depuis 2 ans* → ✅ **Je suis arrivé il y a 2 ans**
- ❌ *Je m'appelle s'appelle Samir* → ✅ **Je m'appelle Samir**
- ❌ *Mon adresse est 23 rue des Lilas* → ✅ **J'habite au 23, rue des Lilas**`,

      keyPoints: [
        'Je m\'appelle + Je suis né(e) le + J\'habite au = formule de présentation complète',
        'Verbe ÊTRE : je suis / tu es / il est / nous sommes / vous êtes / ils sont',
        'La profession : "Je suis technicien" — sans article après le verbe être',
        'L\'adresse : numéro + rue + ville + code postal',
        'Depuis + durée (je suis en France depuis 2 ans) / Il y a + durée (arrivé il y a 2 ans)',
      ],

      exercises: [
        {
          id: 'a2-vq-01-ex01',
          type: 'qcm',
          question: 'Comment dit-on "My name is" en français ?',
          options: ['Je suis appelle', 'Je m\'appelle', 'Mon nom appelle', 'J\'ai le nom'],
          correctIndex: 1,
          explanation: '"Je m\'appelle" est la formule correcte pour donner son prénom. C\'est le verbe pronominal "s\'appeler" à la 1ère personne du singulier.',
        },
        {
          id: 'a2-vq-01-ex02',
          type: 'qcm',
          question: 'Quelle phrase est correcte pour indiquer sa profession ?',
          options: ['Je suis un médecin', 'Je suis médecin', 'J\'ai médecin', 'Je travaille médecin'],
          correctIndex: 1,
          explanation: 'En français, on dit "Je suis médecin" sans article indéfini. L\'article disparaît après le verbe être quand on parle de sa profession.',
        },
        {
          id: 'a2-vq-01-ex03',
          type: 'qcm',
          question: 'Samir habite dans quelle ville ?',
          options: ['Paris', 'Marseille', 'Lyon', 'Alger'],
          correctIndex: 2,
          explanation: 'Dans le dialogue, Samir précise qu\'il habite au 23, rue des Lilas, à Lyon, dans le 3ème arrondissement.',
        },
        {
          id: 'a2-vq-01-ex04',
          type: 'conjugaison',
          question: 'Complétez : "Nous ___ français." (être)',
          options: ['sont', 'sommes', 'êtes', 'avons'],
          correctIndex: 1,
          explanation: 'Le verbe "être" à la 1ère personne du pluriel (nous) se conjugue "sommes". Rappel : je suis / tu es / il est / nous sommes / vous êtes / ils sont.',
        },
        {
          id: 'a2-vq-01-ex05',
          type: 'qcm',
          question: 'Pour indiquer votre date de naissance, vous dites :',
          options: ['Je suis né à le 14 mars', 'Je suis né le 14 mars', 'Je nais le 14 mars', 'Ma naissance est 14 mars'],
          correctIndex: 1,
          explanation: '"Je suis né(e) le + date" est la formule correcte. Le participe passé s\'accorde en genre : né (homme) / née (femme).',
        },
        {
          id: 'a2-vq-01-ex06',
          type: 'qcm',
          question: 'Comment demande-t-on "Where do you live?" à quelqu\'un ?',
          options: ['Vous habitez où ?', 'Vous êtes où ?', 'Vous allez où ?', 'Vous venez où ?'],
          correctIndex: 0,
          explanation: '"Vous habitez où ?" ou "Où habitez-vous ?" sont les deux formes correctes pour demander l\'adresse de quelqu\'un. Le verbe "habiter" exprime le lieu de résidence.',
        },
        {
          id: 'a2-vq-01-ex07',
          type: 'qcm',
          question: 'Quelle est la nationalité correcte pour une femme née en Algérie ?',
          options: ['Algérien', 'Algérienne', 'Algérie', 'Algérianne'],
          correctIndex: 1,
          explanation: 'Les nationalités s\'accordent en genre. Pour une femme : Algérienne (on ajoute -ne au masculin Algérien). Même règle pour : Marocaine, Tunisienne, etc.',
        },
        {
          id: 'a2-vq-01-ex08',
          type: 'conjugaison',
          question: 'Complétez : "Tu ___ combien d\'années en France ?" (avoir)',
          options: ['as', 'es', 'avoir', 'avez'],
          correctIndex: 0,
          explanation: 'Le verbe "avoir" à la 2ème personne du singulier (tu) se conjugue "as". On utilise "avoir" pour exprimer la durée en France : "Tu as combien d\'années ?" (niveau familier).',
        },
        {
          id: 'a2-vq-01-ex09',
          type: 'qcm',
          question: 'Samir est arrivé en France il y a combien de temps ?',
          options: ['Un an', 'Deux ans', 'Trois ans', 'Six mois'],
          correctIndex: 1,
          explanation: 'Samir dit "Je suis arrivé en France il y a deux ans, en septembre 2022". La structure "il y a + durée" indique un événement passé.',
        },
        {
          id: 'a2-vq-01-ex10',
          type: 'qcm',
          question: 'Quelle est la différence entre "depuis" et "il y a" ?',
          options: [
            '"Depuis" = point de départ encore actif, "il y a" = durée écoulée depuis un événement passé',
            '"Depuis" = passé terminé, "il y a" = présent en cours',
            'Les deux expressions sont identiques',
            '"Depuis" s\'utilise avec le passé composé',
          ],
          correctIndex: 0,
          explanation: '"Je suis en France depuis 2 ans" (action continue qui dure encore) vs "Je suis arrivé il y a 2 ans" (événement passé terminé). "Depuis" se construit avec le présent, "il y a" avec le passé composé.',
        },
        {
          id: 'a2-vq-01-ex11',
          type: 'qcm',
          question: 'Pour donner votre numéro de téléphone à l\'administration, vous dites :',
          options: [
            'Mon téléphone c\'est le 06 12 34 56 78',
            'J\'ai téléphone 06 12 34 56 78',
            'Mon numéro de téléphone est le 06 12 34 56 78',
            'Je téléphone au 06 12 34 56 78',
          ],
          correctIndex: 2,
          explanation: 'La formule la plus formelle et correcte dans un contexte administratif est "Mon numéro de téléphone est le 06...". En registre familier, "Mon téléphone c\'est le..." est aussi compris.',
        },
        {
          id: 'a2-vq-01-ex12',
          type: 'qcm',
          question: 'Vous devez épeler votre nom à la standardiste. Comment prononcez-vous la lettre "G" ?',
          options: ['Gé', 'Ji', 'Jé', 'Gu'],
          correctIndex: 0,
          explanation: 'En français, la lettre G se dit "gé" (comme dans "géant"). Connaître l\'alphabet phonétique est essentiel pour épeler son nom dans les démarches administratives.',
        },
        {
          id: 'a2-vq-01-ex13',
          type: 'transformation',
          question: 'Transformez à la forme polie : "Tu t\'appelles comment ?" → ...',
          options: [
            'Vous vous appelez comment ?',
            'Il s\'appelle comment ?',
            'Comment tu appelles ?',
            'Votre nom comment ?',
          ],
          correctIndex: 0,
          explanation: 'Pour passer du "tu" (familier) au "vous" (poli/formel), on remplace "tu t\'appelles" par "vous vous appelez". Dans les démarches administratives, le vouvoiement est obligatoire.',
        },
        {
          id: 'a2-vq-01-ex14',
          type: 'qcm',
          question: 'L\'agent demande votre "pièce d\'identité". Qu\'est-ce que c\'est ?',
          options: [
            'Un document qui prouve votre adresse',
            'Un document officiel qui prouve votre identité (passeport, carte d\'identité)',
            'Un document de la Sécurité sociale',
            'Un contrat de travail',
          ],
          correctIndex: 1,
          explanation: 'Une "pièce d\'identité" est un document officiel qui prouve votre identité. En France, les pièces acceptées sont le passeport, la carte nationale d\'identité, ou le titre de séjour.',
        },
        {
          id: 'a2-vq-01-ex15',
          type: 'conjugaison',
          question: 'Complétez : "Je ___ arrivé en France en 2022." (être)',
          options: ['suis', 'ai', 'est', 'sommes'],
          correctIndex: 0,
          explanation: 'Le verbe "arriver" se conjugue avec "être" au passé composé (verbe de mouvement). "Je suis arrivé(e)" — attention à l\'accord du participe passé avec le sujet.',
        },
        {
          id: 'a2-vq-01-ex16',
          type: 'qcm',
          question: 'Quelle formule utilisez-vous pour saluer formellement un agent administratif ?',
          options: [
            'Salut, j\'ai besoin d\'aide',
            'Bonjour madame / monsieur, je voudrais...',
            'Coucou, vous pouvez m\'aider ?',
            'Hey, je veux faire une demande',
          ],
          correctIndex: 1,
          explanation: 'Dans les démarches administratives, "Bonjour madame/monsieur" suivi d\'une formule polie (je voudrais, je souhaiterais) est la norme. Évitez "Salut" ou "Coucou" qui sont trop familiers.',
        },
        {
          id: 'a2-vq-01-ex17',
          type: 'qcm',
          question: 'Comment dit-on "I am Turkish" en français ?',
          options: ['Je suis un Turc', 'Je suis Turc / Turque', 'J\'ai la nationalité turquoise', 'Je viens de Turquie et je suis Turque'],
          correctIndex: 1,
          explanation: '"Je suis Turc" (homme) ou "Je suis Turque" (femme) — sans article. La nationalité après "être" fonctionne comme la profession : pas d\'article indéfini.',
        },
        {
          id: 'a2-vq-01-ex18',
          type: 'qcm',
          question: 'Samir travaille dans quel secteur ?',
          options: ['La santé', 'L\'informatique', 'L\'administration', 'Le commerce'],
          correctIndex: 1,
          explanation: 'Samir est "technicien informatique" et travaille dans "une entreprise à la Part-Dieu" (quartier d\'affaires de Lyon). Il précise son lieu de travail mais pas le nom de l\'entreprise.',
        },
        {
          id: 'a2-vq-01-ex19',
          type: 'qcm',
          question: 'Quel document Samir présente à l\'agent pour justifier son identité ?',
          options: ['Sa carte de séjour', 'Son permis de conduire', 'Son passeport', 'Sa carte Vitale'],
          correctIndex: 2,
          explanation: 'Samir dit "voici mon passeport". Pour une demande de carte de séjour, le passeport est le document d\'identité principal requis.',
        },
        {
          id: 'a2-vq-01-ex20',
          type: 'qcm',
          question: 'Pour remplir un formulaire administratif, que signifie "Lieu de naissance" ?',
          options: [
            'La ville où vous habitez actuellement',
            'La ville où vous travaillez',
            'La ville où vous êtes né(e)',
            'La ville où vous avez fait vos études',
          ],
          correctIndex: 2,
          explanation: '"Lieu de naissance" = la ville (et le pays) où vous êtes né(e). Par exemple : "Alger, Algérie" pour Samir. C\'est différent de "domicile" (où vous habitez maintenant).',
        },
      ],
    },

    // ─── Leçon 2 ──────────────────────────────────────────────────────────────
    {
      id: 'a2-vq-02',
      slug: 'a2-famille-relations',
      moduleSlug: 'a2-vie-quotidienne',
      level: 'A2',
      title: 'La famille et les relations',
      description: 'Décrivez votre famille, les liens familiaux et parlez des personnes qui vous entourent.',
      duration: 12,
      free: false,
      dialogue: `## Texte : La famille de Fatima

Fatima est originaire du Maroc. Elle habite à Paris depuis trois ans avec son mari, Ahmed, et leurs deux enfants.

Son fils aîné s'appelle Karim. Il a 8 ans et il va à l'école primaire dans le quartier. Sa fille cadette s'appelle Nadia. Elle a 5 ans et elle va à la maternelle.

Ahmed est le mari de Fatima. Il travaille comme chauffeur de taxi. Fatima, elle, reste à la maison pour s'occuper des enfants. Elle apprend le français au centre social de son quartier, trois matins par semaine.

En France, la famille proche de Fatima, c'est son mari et ses enfants. Ses parents et ses frères et sœurs habitent encore au Maroc. Sa belle-mère habite à Lyon chez sa belle-sœur.

Quand Fatima parle de sa famille à l'assistante sociale, elle dit : "Ma famille en France, c'est mon mari et mes deux enfants. Ma fille est née en France, mais mon fils est né au Maroc."

---

### Vocabulaire clé — La famille

| Mot | Exemple dans un contexte |
|---|---|
| le mari / la femme | Mon mari s'appelle Ahmed. |
| le père / la mère | Sa mère habite encore au Maroc. |
| le fils aîné | Karim est le fils aîné de Fatima. |
| la fille cadette | Nadia est la fille cadette, elle a 5 ans. |
| la belle-mère | La belle-mère de Fatima habite à Lyon. |
| la belle-sœur | Elle habite chez sa belle-sœur. |
| s'occuper des enfants | Fatima reste à la maison pour s'occuper des enfants. |
| l'assistante sociale | Elle aide les familles dans leurs démarches. |

---

### Dialogue : Fatima parle de sa famille à l'administration

*Fatima est à la CAF pour une demande d'allocations.*

**Agent CAF :** Madame, vous avez des enfants à charge ?

**Fatima :** Oui, j'ai deux enfants. Mon fils Karim a 8 ans et ma fille Nadia a 5 ans.

**Agent :** Ils habitent avec vous en France ?

**Fatima :** Oui, tous les deux. Ma fille est née ici, à Paris. Mon fils est né au Maroc mais il vit avec nous depuis 3 ans.

**Agent :** Votre mari travaille ?

**Fatima :** Oui, il est chauffeur de taxi. Moi, je ne travaille pas pour l'instant — je m'occupe des enfants.

**Agent :** Avez-vous des proches qui habitent avec vous ?

**Fatima :** Non, nous sommes juste nous quatre dans l'appartement. Ma belle-mère habite à Lyon.`,

      linguisticPoint: `## Point linguistique : Le vocabulaire de la famille et les adjectifs possessifs

### La famille — vocabulaire essentiel
| Masculin | Féminin | Relation |
|---|---|---|
| le mari / l'époux | la femme / l'épouse | couple marié |
| le père | la mère | parents directs |
| le fils | la fille | enfants |
| le frère | la sœur | fratrie |
| le grand-père | la grand-mère | grands-parents |
| le beau-père | la belle-mère | parents du conjoint |
| le beau-frère | la belle-sœur | frère/sœur du conjoint |
| l'oncle | la tante | famille élargie |
| le neveu | la nièce | enfants frère/sœur |
| le cousin | la cousine | enfants oncle/tante |
| le petit-fils | la petite-fille | enfants de vos enfants |

### Adjectifs possessifs — tableau complet
| Personne | Masculin sing. | Féminin sing. | Pluriel |
|---|---|---|---|
| Je | **mon** | **ma** | **mes** |
| Tu | **ton** | **ta** | **tes** |
| Il/Elle | **son** | **sa** | **ses** |
| Nous | **notre** | **notre** | **nos** |
| Vous | **votre** | **votre** | **vos** |
| Ils/Elles | **leur** | **leur** | **leurs** |

**Règle spéciale :** devant une voyelle ou h muet → toujours **mon/ton/son** même au féminin
- ❌ *ma amie* → ✅ **mon amie**
- ❌ *ma école* → ✅ **mon école**
- ❌ *ta histoire* → ✅ **ton histoire**

### L'aîné et le cadet
- L'enfant **aîné(e)** = le plus grand (le premier né)
- L'enfant **cadet/cadette** = le plus jeune (ou le dernier né)
- L'enfant **unique** = fils ou fille sans frère ni sœur
- **Mes frères et sœurs** = la fratrie (siblings)

### Situation familiale dans les formulaires
| Terme administratif | Signification |
|---|---|
| Célibataire | Non marié(e), sans partenaire officiel |
| Marié(e) | Uni(e) par le mariage |
| Pacsé(e) | Uni(e) par un PACS (Pacte Civil de Solidarité) |
| Divorcé(e) | Ancien mariage dissous par le tribunal |
| Séparé(e) | Marié(e) mais ne vivant plus ensemble |
| Veuf / Veuve | Dont le conjoint est décédé |
| Enfant à charge | Enfant dont vous êtes financièrement responsable |

### Erreurs fréquentes à éviter
- ❌ *Mon sœur* → ✅ **Ma sœur** (sœur est féminin)
- ❌ *Sa amie* → ✅ **Son amie** (voyelle → mon/ton/son)
- ❌ *Leur enfants* → ✅ **Leurs enfants** (pluriel → leurs)`,

      keyPoints: [
        'Le mari / la femme — le père / la mère — le fils / la fille (accords en genre)',
        'Mon / ma / mes — ton / ta / tes — son / sa / ses (adjectifs possessifs)',
        'Mon + voyelle : "mon amie" même au féminin (pour l\'euphonie)',
        'Aîné(e) = le plus grand — cadet/cadette = le plus jeune',
        'Belle-mère / beau-père = parents du conjoint (PAS la belle-mère des contes)',
      ],

      exercises: [
        {
          id: 'a2-vq-02-ex01',
          type: 'qcm',
          question: 'Comment appelle-t-on la mère du mari de Fatima ?',
          options: ['Sa mère', 'Sa belle-mère', 'Sa grande-mère', 'Sa tante'],
          correctIndex: 1,
          explanation: 'La mère du mari = la belle-mère. "Beau/belle" s\'ajoute aux liens familiaux du conjoint. Beau-père (père du mari/femme), belle-mère (mère du mari/femme), belle-sœur, beau-frère.',
        },
        {
          id: 'a2-vq-02-ex02',
          type: 'qcm',
          question: 'Quel adjectif possessif utilise-t-on avec "amie" (féminin) à la 1ère personne ?',
          options: ['Ma amie', 'Mon amie', 'Mes amie', 'Sa amie'],
          correctIndex: 1,
          explanation: 'Devant un nom féminin commençant par une voyelle ou un "h" muet, on utilise "mon" (au lieu de "ma") pour l\'euphonie. Donc : "mon amie" et non "ma amie".',
        },
        {
          id: 'a2-vq-02-ex03',
          type: 'qcm',
          question: 'Karim est l\'enfant "aîné". Que signifie ce mot ?',
          options: ['L\'enfant le plus jeune', 'L\'enfant unique', 'L\'enfant le plus âgé', 'L\'enfant malade'],
          correctIndex: 2,
          explanation: 'L\'aîné(e) est l\'enfant le plus âgé, le premier né. Karim a 8 ans et est le plus grand. Sa petite sœur Nadia (5 ans) est la cadette.',
        },
        {
          id: 'a2-vq-02-ex04',
          type: 'qcm',
          question: 'Combien d\'enfants a Fatima ?',
          options: ['Un enfant', 'Deux enfants', 'Trois enfants', 'Le texte ne le dit pas'],
          correctIndex: 1,
          explanation: 'Fatima a deux enfants : son fils aîné Karim (8 ans) et sa fille cadette Nadia (5 ans). Elle habite avec eux et son mari Ahmed à Paris.',
        },
        {
          id: 'a2-vq-02-ex05',
          type: 'qcm',
          question: 'Comment dit-on "his/her father" en français ?',
          options: ['Son père', 'Sa père', 'Ses père', 'Ton père'],
          correctIndex: 0,
          explanation: '"Son père" — le possessif de la 3ème personne du singulier pour un nom masculin est "son". Son père / sa mère / ses parents. En français, le possessif s\'accorde avec l\'objet possédé, pas avec le possesseur.',
        },
        {
          id: 'a2-vq-02-ex06',
          type: 'qcm',
          question: 'La sœur de votre mari, c\'est votre...',
          options: ['Nièce', 'Cousine', 'Belle-sœur', 'Tante'],
          correctIndex: 2,
          explanation: 'La sœur de votre mari (ou de votre femme) s\'appelle votre belle-sœur. Le préfixe "beau/belle" indique le lien par mariage (la belle-famille).',
        },
        {
          id: 'a2-vq-02-ex07',
          type: 'qcm',
          question: 'Où habite la belle-mère de Fatima ?',
          options: ['À Paris', 'Au Maroc', 'À Lyon', 'Elle est décédée'],
          correctIndex: 2,
          explanation: 'Le texte indique : "Sa belle-mère habite à Lyon chez sa belle-sœur." Elle est donc à Lyon, chez la sœur de l\'époux d\'Ahmed (la belle-sœur de Fatima).',
        },
        {
          id: 'a2-vq-02-ex08',
          type: 'qcm',
          question: 'Choisissez la phrase correcte :',
          options: [
            'Mon sœur s\'appelle Ali',
            'Ma frère s\'appelle Ali',
            'Mon frère s\'appelle Ali',
            'Mes frère s\'appelle Ali',
          ],
          correctIndex: 2,
          explanation: '"Frère" est un nom masculin singulier → adjectif possessif masculin singulier → "mon". "Mon frère s\'appelle Ali." Ma sœur / Mon frère / Mes frères et sœurs.',
        },
        {
          id: 'a2-vq-02-ex09',
          type: 'qcm',
          question: 'Pour l\'administration française, qu\'est-ce qu\'un "enfant à charge" ?',
          options: [
            'Un enfant qui travaille',
            'Un enfant dont vous êtes financièrement responsable',
            'Un enfant qui a des problèmes de comportement',
            'Un enfant majeur',
          ],
          correctIndex: 1,
          explanation: 'Un "enfant à charge" est un enfant (généralement mineur, donc moins de 18 ans) dont vous assumez financièrement les dépenses. Cette notion est importante pour les allocations familiales et les impôts.',
        },
        {
          id: 'a2-vq-02-ex10',
          type: 'qcm',
          question: 'Comment dit-on "I am single" (célibataire) en français ?',
          options: ['Je suis single', 'Je suis célibataire', 'Je suis libre', 'Je suis seul(e)'],
          correctIndex: 1,
          explanation: '"Je suis célibataire" = ne pas avoir de partenaire officiel. Dans les formulaires administratifs, on vous demande votre "situation familiale" : célibataire, marié(e), pacsé(e), divorcé(e), veuf/veuve.',
        },
        {
          id: 'a2-vq-02-ex11',
          type: 'qcm',
          question: 'Nadia est née en France. Cela signifie que Nadia est...',
          options: [
            'Automatiquement française',
            'Née sur le territoire français',
            'De nationalité française et marocaine',
            'Sans nationalité',
          ],
          correctIndex: 1,
          explanation: 'Naître en France ne donne pas automatiquement la nationalité française. Nadia est "née en France" = son lieu de naissance est la France. La nationalité dépend d\'autres critères (droit du sol, parents, etc.).',
        },
        {
          id: 'a2-vq-02-ex12',
          type: 'qcm',
          question: 'Quelle est la profession d\'Ahmed ?',
          options: ['Informaticien', 'Chauffeur de taxi', 'Professeur', 'Il ne travaille pas'],
          correctIndex: 1,
          explanation: 'Ahmed travaille "comme chauffeur de taxi". La structure "travailler comme + profession" est équivalente à "être + profession".',
        },
        {
          id: 'a2-vq-02-ex13',
          type: 'qcm',
          question: 'Comment dit-on que quelqu\'un s\'occupe des enfants à la maison ?',
          options: [
            'Elle travaille à la maison',
            'Elle reste à la maison pour s\'occuper des enfants',
            'Elle garde les enfants professionnellement',
            'Elle est chômage',
          ],
          correctIndex: 1,
          explanation: '"Rester à la maison pour s\'occuper des enfants" signifie être parent au foyer (sans emploi rémunéré à l\'extérieur). On peut aussi dire "être au foyer" ou "ne pas travailler pour élever ses enfants".',
        },
        {
          id: 'a2-vq-02-ex14',
          type: 'qcm',
          question: 'Les parents de Fatima habitent...',
          options: ['À Paris', 'À Lyon', 'Au Maroc', 'En Algérie'],
          correctIndex: 2,
          explanation: 'Le texte précise : "Ses parents et ses frères et sœurs habitent encore au Maroc." Fatima est originaire du Maroc mais sa famille proche est restée là-bas.',
        },
        {
          id: 'a2-vq-02-ex15',
          type: 'conjugaison',
          question: 'Complétez : "Karim ___ à l\'école primaire." (aller)',
          options: ['va', 'vais', 'allez', 'allons'],
          correctIndex: 0,
          explanation: 'Le verbe "aller" est très irrégulier. À la 3ème personne du singulier : il/elle/on VA. Conjugaison complète : je vais / tu vas / il va / nous allons / vous allez / ils vont.',
        },
        {
          id: 'a2-vq-02-ex16',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'un "centre social" ?',
          options: [
            'Un supermarché de quartier',
            'Un établissement qui propose des activités sociales et des cours pour les habitants',
            'Un bureau de la Sécurité sociale',
            'Un centre commercial',
          ],
          correctIndex: 1,
          explanation: 'Un centre social est un équipement de proximité proposant des activités sociales, culturelles et des cours (comme les cours de français). C\'est un lieu d\'intégration important pour les nouveaux arrivants.',
        },
        {
          id: 'a2-vq-02-ex17',
          type: 'qcm',
          question: 'Comment appelle-t-on le fils du frère ou de la sœur ?',
          options: ['Le cousin', 'Le beau-fils', 'Le neveu', 'Le petit-fils'],
          correctIndex: 2,
          explanation: 'Le neveu est le fils du frère ou de la sœur. La nièce est la fille du frère ou de la sœur. Ne pas confondre avec : le cousin (fils de l\'oncle/tante) ou le petit-fils (fils du fils/fille).',
        },
        {
          id: 'a2-vq-02-ex18',
          type: 'qcm',
          question: 'Dans un formulaire, "situation matrimoniale" signifie :',
          options: [
            'Votre lieu de naissance',
            'Votre état civil (marié, célibataire, etc.)',
            'Le nom de vos parents',
            'Votre adresse',
          ],
          correctIndex: 1,
          explanation: '"Situation matrimoniale" ou "état civil" = votre statut : célibataire / marié(e) / pacsé(e) (Pacte Civil de Solidarité) / divorcé(e) / séparé(e) / veuf(ve). C\'est une information standard dans les formulaires administratifs.',
        },
        {
          id: 'a2-vq-02-ex19',
          type: 'qcm',
          question: 'Combien de matins par semaine Fatima apprend-elle le français ?',
          options: ['Un matin', 'Deux matins', 'Trois matins', 'Tous les jours'],
          correctIndex: 2,
          explanation: 'Fatima apprend le français "trois matins par semaine" au centre social de son quartier. Cette structure "X fois/matins/jours par semaine" indique une fréquence régulière.',
        },
        {
          id: 'a2-vq-02-ex20',
          type: 'transformation',
          question: 'Transformez : "les enfants de Fatima" → adjectif possessif',
          options: ['Ses enfants', 'Ces enfants', 'Les enfants siens', 'Leur enfants'],
          correctIndex: 0,
          explanation: '"Les enfants de Fatima" → "ses enfants" (possessif 3ème personne, pluriel). SES car "enfants" est pluriel. Rappel : son fils / sa fille / ses enfants.',
        },
      ],
    },

    // ─── Leçon 3 ──────────────────────────────────────────────────────────────
    {
      id: 'a2-vq-03',
      slug: 'a2-activites-quotidiennes',
      moduleSlug: 'a2-vie-quotidienne',
      level: 'A2',
      title: 'Les activités du quotidien',
      description: 'Décrivez votre routine journalière, les horaires et les habitudes de la vie quotidienne.',
      duration: 12,
      free: false,
      dialogue: `## Dialogue : La journée de Mohamed

*Mohamed explique sa journée à son professeur de français.*

**Professeur :** Mohamed, décrivez-moi une journée typique pour vous.

**Mohamed :** D'accord. Je me lève à 7 heures moins le quart. Je prends une douche et je me prépare. Ensuite, je réveille mes enfants à 7h30.

**Professeur :** Et le petit-déjeuner ?

**Mohamed :** On mange ensemble vers 8 heures. Je bois toujours du café, les enfants mangent des céréales avec du lait.

**Professeur :** Et après le petit-déjeuner ?

**Mohamed :** J'accompagne mes enfants à l'école à 8h45. L'école commence à 9 heures moins le quart. Ensuite, je vais au travail en métro. J'arrive au bureau vers 9h30.

**Professeur :** Vous travaillez jusqu'à quelle heure ?

**Mohamed :** Je travaille de 9h30 à 18h00. Je fais une pause déjeuner de 30 minutes à midi et demi. Je mange souvent à la cantine de l'entreprise.

**Professeur :** Et le soir, que faites-vous ?

**Mohamed :** Je quitte le travail à 18h. Je récupère les enfants à l'école vers 18h30. On rentre à la maison ensemble. Ma femme prépare le dîner — on mange à 19h30.

**Professeur :** Et après le dîner ?

**Mohamed :** Les enfants font leurs devoirs de 20h à 21h. Moi, je les aide parfois. Ils se couchent à 21 heures. Ma femme et moi, on regarde la télévision ou on lit. Je me couche vers 23 heures.

---

### Vocabulaire clé — La journée et la routine

| Activité | Heure habituelle | Verbe |
|---|---|---|
| Se lever | 6h30 - 7h30 | se lever (pronominal) |
| Le petit-déjeuner | 7h00 - 8h00 | prendre / manger |
| Aller au travail / à l'école | 8h00 - 9h00 | aller (en métro, à pied...) |
| Le déjeuner / la pause | 12h00 - 13h30 | déjeuner / manger |
| Récupérer les enfants | 16h30 - 18h30 | récupérer / chercher |
| Le dîner | 19h00 - 20h00 | dîner |
| Faire les devoirs | 17h00 - 20h00 | faire |
| Se coucher | 21h00 - 23h00 | se coucher (pronominal) |`,

      linguisticPoint: `## Point linguistique : La routine — verbes pronominaux et expressions de temps

### Les verbes pronominaux de la routine — conjugaison complète
| Infinitif | Je | Tu | Il/Elle | Nous | Vous | Ils/Elles |
|---|---|---|---|---|---|---|
| se lever | me lève | te lèves | se lève | nous levons | vous levez | se lèvent |
| se préparer | me prépare | te prépares | se prépare | nous préparons | vous préparez | se préparent |
| se coucher | me couche | te couches | se couche | nous couchons | vous couchez | se couchent |
| se réveiller | me réveille | te réveilles | se réveille | nous réveillons | vous réveillez | se réveillent |
| se laver | me lave | te laves | se lave | nous lavons | vous lavez | se lavent |
| s'habiller | m'habille | t'habilles | s'habille | nous habillons | vous habillez | s'habillent |

**Forme négative des pronominaux :**
- Je **ne me** lève **pas** tôt.
- Tu **ne te** couches **pas** à minuit.
- Il **ne se** prépare **pas** vite.

### Exprimer l'heure — système complet
| Heure digitale | Expression courante | Autre formule |
|---|---|---|
| 7h00 | sept heures | sept heures du matin |
| 7h15 | sept heures et quart | sept heures quinze |
| 7h30 | sept heures et demie | sept heures trente |
| 7h45 | huit heures moins le quart | sept heures quarante-cinq |
| 12h00 | midi | douze heures |
| 13h00 | une heure de l'après-midi | treize heures |
| 18h00 | six heures du soir | dix-huit heures |
| 24h00 | minuit | zéro heure |

### Articulateurs chronologiques (ordre du récit)
| Articulateur | Sens | Exemple |
|---|---|---|
| **D'abord** | en premier | D'abord, je prends ma douche |
| **Ensuite / Puis** | après ça | Ensuite, je prends le petit-déjeuner |
| **Après** | plus tard | Après, j'accompagne les enfants |
| **Finalement / Enfin** | à la fin | Enfin, je me couche |
| **Vers** | approximation | vers 8 heures (≈ 8h) |
| **À** | heure précise | à 9h exactement |
| **De ... à ...** | durée | de 9h à 18h |

### Les repas français — noms et horaires habituels
| Repas | Horaire habituel | Ce qu'on mange |
|---|---|---|
| Le petit-déjeuner | 7h - 9h | café, tartines, céréales |
| Le déjeuner | 12h - 14h | plat chaud, salade |
| Le goûter | 16h - 17h | pour les enfants (gâteau, fruit) |
| Le dîner | 19h - 21h | repas principal en famille |

### Erreurs fréquentes
- ❌ *Je me lève à 7 heures moins quart* → ✅ **moins le quart**
- ❌ *Je coche à 23h* → ✅ **Je me couche à 23h** (verbe pronominal)
- ❌ *Je vais au travail avec le métro* → ✅ **en métro**`,

      keyPoints: [
        'Verbes pronominaux : se lever (je me lève), se coucher (je me couche)',
        'L\'heure : et quart (+15 min) / et demie (+30 min) / moins le quart (-15 min)',
        'Vers + heure : "j\'arrive vers 9h30" (approximation)',
        'Articulateurs : d\'abord / ensuite / puis / après / enfin',
        'Le matin / l\'après-midi / le soir / la nuit (pas d\'article pour les habitudes)',
      ],

      exercises: [
        {
          id: 'a2-vq-03-ex01',
          type: 'conjugaison',
          question: 'Conjuguez "se lever" à la 1ère personne du singulier :',
          options: ['Je lève', 'Je me lève', 'Je se lève', 'Je me lever'],
          correctIndex: 1,
          explanation: 'Les verbes pronominaux se construisent avec un pronom réfléchi : je ME lève, tu TE lèves, il SE lève. Le pronom change selon la personne.',
        },
        {
          id: 'a2-vq-03-ex02',
          type: 'qcm',
          question: 'Comment dit-on 7h45 en français ?',
          options: ['Sept heures quarante-cinq', 'Huit heures moins le quart', 'Sept heures trois quarts', 'Les deux premières réponses sont correctes'],
          correctIndex: 3,
          explanation: '7h45 peut se dire "sept heures quarante-cinq" (style digital/formel) ou "huit heures moins le quart" (style courant). Les deux formes sont correctes en français.',
        },
        {
          id: 'a2-vq-03-ex03',
          type: 'qcm',
          question: 'À quelle heure Mohamed se lève-t-il ?',
          options: ['À 7h00', 'À 7h15', 'À 6h45', 'À 7h30'],
          correctIndex: 2,
          explanation: 'Mohamed dit "je me lève à 7 heures moins le quart", ce qui correspond à 6h45. "Moins le quart" = -15 minutes.',
        },
        {
          id: 'a2-vq-03-ex04',
          type: 'qcm',
          question: 'Quelle est la forme négative de "je me lève tôt" ?',
          options: [
            'Je me lève pas tôt',
            'Je ne me lève pas tôt',
            'Je ne lève pas tôt',
            'Je ne me pas lève tôt',
          ],
          correctIndex: 1,
          explanation: 'Pour la négation d\'un verbe pronominal : "ne" avant le pronom réfléchi, "pas" après le verbe. Je NE ME lève PAS tôt. Le "ne" encadre le bloc pronom+verbe avec "pas".',
        },
        {
          id: 'a2-vq-03-ex05',
          type: 'qcm',
          question: 'Comment dit-on midi en français ?',
          options: ['Douze heures', 'Midi', 'Midijour', 'Les deux premières sont correctes'],
          correctIndex: 3,
          explanation: '12h00 peut se dire "douze heures" ou "midi". De même, 24h00 se dit "zéro heure" ou "minuit". Dans la vie courante, "midi" et "minuit" sont très utilisés.',
        },
        {
          id: 'a2-vq-03-ex06',
          type: 'qcm',
          question: 'L\'école commence à "9 heures moins le quart". C\'est...',
          options: ['8h45', '9h15', '8h30', '9h45'],
          correctIndex: 0,
          explanation: '"9 heures moins le quart" = 9h00 - 15 minutes = 8h45. La formule "moins le quart" soustrait 15 minutes de l\'heure mentionnée.',
        },
        {
          id: 'a2-vq-03-ex07',
          type: 'qcm',
          question: 'Que fait Mohamed à 8h45 ?',
          options: [
            'Il prend le métro',
            'Il accompagne ses enfants à l\'école',
            'Il commence son travail',
            'Il mange le petit-déjeuner',
          ],
          correctIndex: 1,
          explanation: 'À 8h45, Mohamed accompagne ses enfants à l\'école. "Accompagner" signifie aller avec quelqu\'un jusqu\'à un endroit. L\'école commence à 8h45 (9 heures moins le quart).',
        },
        {
          id: 'a2-vq-03-ex08',
          type: 'qcm',
          question: 'Quel articulateur signifie "after that" ?',
          options: ['D\'abord', 'Ensuite', 'Enfin', 'Pendant'],
          correctIndex: 1,
          explanation: '"Ensuite" (et aussi "puis") signifie "after that / next". La séquence chronologique : D\'ABORD → ENSUITE/PUIS → APRÈS → ENFIN/FINALEMENT.',
        },
        {
          id: 'a2-vq-03-ex09',
          type: 'conjugaison',
          question: 'Conjuguez "boire" à la 1ère personne du singulier :',
          options: ['Je bue', 'Je boi', 'Je bois', 'Je boire'],
          correctIndex: 2,
          explanation: '"Boire" est irrégulier : je BOIS, tu BOIS, il BOIT, nous BUVONS, vous BUVEZ, ils BOIVENT. Mohamed dit "je bois toujours du café".',
        },
        {
          id: 'a2-vq-03-ex10',
          type: 'qcm',
          question: 'Que boivent les enfants de Mohamed au petit-déjeuner ?',
          options: ['Du café', 'Du jus d\'orange', 'Du lait avec des céréales', 'Du chocolat chaud'],
          correctIndex: 2,
          explanation: 'Mohamed dit "les enfants mangent des céréales avec du lait". La préposition "avec" indique ce qui accompagne les céréales.',
        },
        {
          id: 'a2-vq-03-ex11',
          type: 'qcm',
          question: 'Quel transport Mohamed utilise-t-il pour aller au travail ?',
          options: ['La voiture', 'Le bus', 'Le métro', 'À pied'],
          correctIndex: 2,
          explanation: 'Mohamed dit "je vais au travail en métro". Les prépositions de transport : EN métro / EN voiture / EN bus / EN vélo — MAIS : À pied / À vélo (les deux existent pour le vélo).',
        },
        {
          id: 'a2-vq-03-ex12',
          type: 'qcm',
          question: 'Comment appelle-t-on le repas du soir en France ?',
          options: ['Le déjeuner', 'Le dîner', 'Le souper', 'Le goûter'],
          correctIndex: 1,
          explanation: 'En France : petit-déjeuner (matin) → déjeuner (midi) → goûter (vers 16h, surtout pour les enfants) → dîner (soir). "Souper" s\'utilise en Belgique et en Suisse pour le repas du soir.',
        },
        {
          id: 'a2-vq-03-ex13',
          type: 'qcm',
          question: 'À quelle heure Mohamed se couche-t-il ?',
          options: ['À 21h00', 'À 22h00', 'À 23h00', 'À minuit'],
          correctIndex: 2,
          explanation: 'Mohamed dit "Moi, je me couche vers 23 heures". Ses enfants se couchent à 21 heures. "Vers" indique une approximation.',
        },
        {
          id: 'a2-vq-03-ex14',
          type: 'qcm',
          question: 'Que signifie "récupérer les enfants à l\'école" ?',
          options: [
            'Chercher les enfants pour les ramener à la maison',
            'Inscrire les enfants à l\'école',
            'Payer la cantine scolaire',
            'Aider les enfants à faire leurs devoirs',
          ],
          correctIndex: 0,
          explanation: '"Récupérer les enfants à l\'école" = aller chercher les enfants à la sortie de l\'école pour les ramener à la maison. C\'est une expression très courante en France.',
        },
        {
          id: 'a2-vq-03-ex15',
          type: 'qcm',
          question: 'Que font les enfants avant de se coucher ?',
          options: [
            'Ils regardent la télévision',
            'Ils font leurs devoirs',
            'Ils jouent dehors',
            'Ils lisent',
          ],
          correctIndex: 1,
          explanation: 'Mohamed précise : "Les enfants font leurs devoirs et se couchent à 21 heures." "Faire ses devoirs" = réaliser les travaux donnés par l\'école à la maison.',
        },
        {
          id: 'a2-vq-03-ex16',
          type: 'qcm',
          question: 'Quelle est la structure correcte pour parler d\'une habitude ?',
          options: [
            'Je mange toujours du café le matin',
            'Je bois toujours du café le matin',
            'Je prends toujours café le matin',
            'Je fais toujours café le matin',
          ],
          correctIndex: 1,
          explanation: '"Boire" s\'utilise pour les liquides. Les verbes à retenir : BOIRE (boissons) / MANGER (solides) / PRENDRE (repas, café dans un café : "je prends un café" = je le commande). On BOIT du café.',
        },
        {
          id: 'a2-vq-03-ex17',
          type: 'qcm',
          question: 'Avec quelle préposition exprime-t-on le transport ?',
          options: ['Je vais au travail avec le métro', 'Je vais au travail en métro', 'Je vais au travail par métro', 'Je vais au travail sur le métro'],
          correctIndex: 1,
          explanation: 'On utilise "EN" pour les moyens de transport : en voiture / en bus / en métro / en train / en avion / en vélo. Exception : "à pied", "à vélo" sont aussi corrects.',
        },
        {
          id: 'a2-vq-03-ex18',
          type: 'qcm',
          question: 'Mohamed dit "on dîne ensemble". Qui est "on" ici ?',
          options: [
            'Une personne inconnue',
            'Mohamed et sa famille',
            'Seulement les enfants',
            'Mohamed et ses collègues',
          ],
          correctIndex: 1,
          explanation: '"On" a plusieurs sens en français : 1) Quelqu\'un d\'indéterminé ("on dit que...") 2) Nous (familier) — "on dîne ensemble" = "nous dînons ensemble". Dans le contexte, "on" désigne la famille de Mohamed.',
        },
        {
          id: 'a2-vq-03-ex19',
          type: 'qcm',
          question: 'Quelle expression indique une approximation d\'heure ?',
          options: ['À 9h00 pile', 'Vers 9h30', 'Exactement à 9h30', 'À 9h30 précises'],
          correctIndex: 1,
          explanation: '"Vers + heure" indique une approximation : "vers 9h30" ≈ aux alentours de 9h30. Pour l\'exactitude, on dit "à 9h30 pile" ou "à 9h30 précises". "Vers" est très utilisé dans la langue quotidienne.',
        },
        {
          id: 'a2-vq-03-ex20',
          type: 'conjugaison',
          question: 'Conjuguez "se coucher" à la 3ème personne du singulier :',
          options: ['Il couche', 'Il me couche', 'Il se couche', 'Il se couchent'],
          correctIndex: 2,
          explanation: '"Se coucher" à la 3ème personne du singulier : il/elle SE couche. Le pronom réfléchi change : je ME / tu TE / il SE / nous NOUS / vous VOUS / ils SE couche(nt).',
        },
      ],
    },

    // ─── Leçon 4 ──────────────────────────────────────────────────────────────
    {
      id: 'a2-vq-04',
      slug: 'a2-courses-achats',
      moduleSlug: 'a2-vie-quotidienne',
      level: 'A2',
      title: 'Les courses et les achats',
      description: 'Faites vos courses, comprenez les prix, les quantités et les interactions en magasin.',
      duration: 12,
      free: false,
      dialogue: `## Dialogue : Au marché et à la caisse

*Amina fait ses courses au marché du quartier.*

**Vendeur :** Bonjour madame ! Vous désirez ?

**Amina :** Bonjour. Je voudrais un kilo de tomates, s'il vous plaît.

**Vendeur :** Voilà. Elles sont très belles aujourd'hui, elles viennent de la région. Et avec ça ?

**Amina :** Donnez-moi aussi une livre de carottes et 500 grammes de champignons.

**Vendeur :** D'accord. Les carottes, je les ai en vrac ou en filet — vous préférez ?

**Amina :** En vrac, c'est mieux. Vous voulez quelque chose d'autre ?

**Vendeur :** Oui, combien coûtent les courgettes ?

**Amina :** Deux euros cinquante le kilo, madame. Et en ce moment j'ai aussi des aubergines à deux euros le kilo.

**Amina :** Alors je vais prendre deux kilos de courgettes. Et une botte de persil, s'il vous plaît.

**Vendeur :** Bien sûr. Je mets aussi quelques feuilles de menthe ? C'est gratuit avec la botte.

**Amina :** Oui, merci ! C'est tout. Ça fait combien ?

**Vendeur :** Alors… tomates 2€80, carottes 1€20, champignons 3€50, courgettes 5€, persil 0€80. Ça fait 13 euros 30 en tout.

**Amina :** Voilà 20 euros.

**Vendeur :** Je vous rends 6 euros 70. Merci madame, bonne journée !

**Amina :** Merci à vous, bonne journée !

---

### Vocabulaire clé — Les courses et les quantités

| Unité | Équivalent | Exemple d'achat |
|---|---|---|
| 1 kilo (kg) | 1 000 grammes | un kilo de tomates |
| 500 grammes (g) | une demi-livre | 500 g de champignons |
| une livre | 500 g (au marché) | une livre de carottes |
| 1 litre (L) | 100 centilitres | un litre de lait |
| une botte | bouquet attaché | une botte de persil |
| une tranche | morceau fin | une tranche de jambon |
| une bouteille | contenant en verre/plastique | une bouteille d'eau |
| une boîte | conserve ou carton | une boîte de sardines |
| un sachet | petit sac | un sachet de thé |
| en vrac | sans emballage | des carottes en vrac |

---

### Situation 2 : Au supermarché à la caisse

*Amina passe à la caisse du supermarché.*

**Caissière :** Bonjour madame. Vous avez une carte de fidélité ?

**Amina :** Oui, voilà ma carte Carrefour.

**Caissière :** Vous réglez comment — carte ou espèces ?

**Amina :** Par carte s'il vous plaît. Est-ce que je peux avoir un sac ?

**Caissière :** Les sacs sont en vente, c'est 15 centimes l'unité.

**Amina :** D'accord, j'en prends deux. Ça fait combien en tout ?

**Caissière :** 24 euros 60 avec les sacs. Vous tapez votre code PIN.`,

      linguisticPoint: `## Point linguistique : Les quantités, les prix et les articles partitifs

### Les unités de mesure courantes
| Quantité | Abréviation | Exemple |
|---|---|---|
| un kilo (gramme) | 1 kg | un kilo de pommes |
| 500 grammes | 500 g | 500 g de champignons |
| une livre | 500 g (en marché) | une livre de carottes |
| un litre | 1 L | un litre de lait |
| une botte | - | une botte de radis |
| une tranche | - | une tranche de jambon |
| une bouteille | - | une bouteille d'eau |
| une boîte | - | une boîte de sardines |
| un paquet | - | un paquet de farine |
| un sachet | - | un sachet de sucre vanillé |

### Les articles partitifs (quantités indéfinies)
| Article | Genre/Nombre | Exemple |
|---|---|---|
| **du** | masculin singulier | du pain, du riz, du café |
| **de la** | féminin singulier | de la viande, de la farine |
| **de l'** | voyelle ou h muet | de l'eau, de l'huile |
| **des** | pluriel | des légumes, des fruits |

**À la forme négative → tout devient "de" ou "d'" :**
- Je mange DU pain → Je ne mange **pas de** pain
- Il boit DE LA bière → Il ne boit **pas de** bière
- Elle achète DES tomates → Elle n'achète **pas de** tomates

### Demander et indiquer un prix
| Formule | Registre | Exemple |
|---|---|---|
| **Combien coûte** ... ? | standard | Combien coûtent les courgettes ? |
| **C'est combien ?** | familier | C'est combien ce melon ? |
| **Ça fait combien ?** | à la caisse | Ça fait combien en tout ? |
| **Quel est le prix de** ... ? | formel | Quel est le prix du kilo ? |
| **... coûte X euros** | réponse | La tomate coûte 2,80€ le kilo |
| **... à X euros le kilo** | étiquette | Les courgettes à 2,50€ le kilo |

### Lire les prix en français
| Chiffre | On dit |
|---|---|
| 2,50€ | deux euros cinquante |
| 13,30€ | treize euros trente |
| 0,80€ | quatre-vingts centimes |
| 20,00€ | vingt euros |

### Erreurs fréquentes
- ❌ *un kilo des tomates* → ✅ **un kilo de tomates** (de + nom sans article après quantité)
- ❌ *Je mange du pas pain* → ✅ **Je ne mange pas de pain**
- ❌ *Ça coûte deux euros et cinquante* → ✅ **deux euros cinquante** (pas de "et")`,

      keyPoints: [
        'Je voudrais + quantité + de + produit (pas d\'article après la quantité : "un kilo DE tomates")',
        'Articles partitifs : du / de la / des → négatif : pas DE',
        'Une livre = 500 g dans un contexte de marché français',
        'C\'est combien ? / Ça fait combien ? / Combien ça coûte ?',
        'Rendre la monnaie : "Je vous rends X euros"',
      ],

      exercises: [
        {
          id: 'a2-vq-04-ex01',
          type: 'qcm',
          question: 'Que signifie "une livre" dans un marché français ?',
          options: ['Un livret', '250 grammes', '500 grammes', '1 kilogramme'],
          correctIndex: 2,
          explanation: 'Au marché en France, "une livre" équivaut à 500 grammes (une demi-livre = 250 g). Attention : la livre anglaise (pound) = 453 g, mais la livre française usuelle = 500 g.',
        },
        {
          id: 'a2-vq-04-ex02',
          type: 'qcm',
          question: 'Amina achète combien de courgettes ?',
          options: ['500 grammes', 'Un kilo', 'Deux kilos', 'Trois kilos'],
          correctIndex: 2,
          explanation: 'Amina dit "je vais en prendre deux kilos" de courgettes. Les courgettes coûtent 2€50 le kilo, donc deux kilos = 5 euros (ce qui correspond à la facture finale).',
        },
        {
          id: 'a2-vq-04-ex03',
          type: 'qcm',
          question: 'Comment demande-t-on poliment quelque chose dans un magasin ?',
          options: [
            'Donne-moi des tomates !',
            'Je voudrais des tomates, s\'il vous plaît.',
            'Je veux des tomates.',
            'Des tomates !',
          ],
          correctIndex: 1,
          explanation: '"Je voudrais" (conditionnel de vouloir) est la formule polie pour faire une demande dans un commerce. "Je veux" est grammaticalement correct mais perçu comme brusque. Toujours ajouter "s\'il vous plaît".',
        },
        {
          id: 'a2-vq-04-ex04',
          type: 'qcm',
          question: 'Combien Amina paie-t-elle en tout ?',
          options: ['12€30', '13€30', '14€30', '20€00'],
          correctIndex: 1,
          explanation: 'Le vendeur calcule : tomates 2€80 + carottes 1€20 + champignons 3€50 + courgettes 5€ + persil 0€80 = 13€30. Amina paie avec un billet de 20€ et reçoit 6€70 de monnaie.',
        },
        {
          id: 'a2-vq-04-ex05',
          type: 'qcm',
          question: 'Quelle est la formule correcte pour demander le prix ?',
          options: [
            'Ça vaut quoi ?',
            'Combien coûtent les courgettes ?',
            'Le prix des courgettes ?',
            'Elles font combien les courgettes ?',
          ],
          correctIndex: 1,
          explanation: '"Combien coûtent les courgettes ?" est la formule standard et polie. "Elles font combien ?" est plus familier mais compris. Dans un contexte formel (magasin), on préfère "Combien coûte/coûtent ?".',
        },
        {
          id: 'a2-vq-04-ex06',
          type: 'qcm',
          question: 'Comment dit-on "I would like a bottle of water" ?',
          options: [
            'Je veux une bouteille eau',
            'Je voudrais une bouteille d\'eau',
            'Je voudrais un bouteille de l\'eau',
            'Je voudrais de bouteille eau',
          ],
          correctIndex: 1,
          explanation: '"Je voudrais une bouteille d\'eau" — après une quantité ou un contenant (bouteille, paquet, kilo...), on utilise "de" + nom sans article. Une bouteille D\'eau / un kilo DE pommes / un paquet DE riz.',
        },
        {
          id: 'a2-vq-04-ex07',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une "botte" de persil ?',
          options: [
            'Une boîte en conserve',
            'Un bouquet attaché ensemble',
            'Un pot en verre',
            'Un sachet plastique',
          ],
          correctIndex: 1,
          explanation: 'Une "botte" de persil (ou de radis, de carottes, de ciboulette) = un petit bouquet d\'herbes ou de légumes attachés ensemble. C\'est l\'unité de vente habituelle pour les herbes fraîches au marché.',
        },
        {
          id: 'a2-vq-04-ex08',
          type: 'qcm',
          question: 'Que signifie "Vous désirez ?" dans un magasin ?',
          options: [
            'Vous voulez acheter quelque chose ?',
            'Vous êtes en colère ?',
            'Vous attendez quelqu\'un ?',
            'Vous avez une question ?',
          ],
          correctIndex: 0,
          explanation: '"Vous désirez ?" est la formule d\'accueil d\'un vendeur. C\'est une façon polie de demander "Qu\'est-ce que je peux faire pour vous ?" ou "Qu\'est-ce que vous voulez acheter ?".',
        },
        {
          id: 'a2-vq-04-ex09',
          type: 'qcm',
          question: 'Choisissez l\'article partitif correct : "Je mange ___ pain le matin."',
          options: ['un', 'le', 'du', 'de'],
          correctIndex: 2,
          explanation: '"Du pain" — l\'article partitif "du" s\'utilise pour les substances non comptables (le pain, le fromage, l\'eau). "Je mange DU pain" = une certaine quantité de pain (non définie).',
        },
        {
          id: 'a2-vq-04-ex10',
          type: 'qcm',
          question: 'À la forme négative : "Je mange du pain" devient...',
          options: [
            'Je ne mange pas du pain',
            'Je ne mange pas de pain',
            'Je ne mange pas le pain',
            'Je ne mange du pas pain',
          ],
          correctIndex: 1,
          explanation: 'À la forme négative, les articles partitifs (du/de la/des) deviennent "de" ou "d\'". "Je mange DU pain" → "Je ne mange PAS DE pain". Règle : pas de / pas d\' (devant voyelle).',
        },
        {
          id: 'a2-vq-04-ex11',
          type: 'qcm',
          question: 'Comment s\'écrit "deux euros cinquante" en chiffres ?',
          options: ['2,50€', '2.50€', '250€', '2€50'],
          correctIndex: 0,
          explanation: 'En France, on utilise la virgule comme séparateur décimal : 2,50€. L\'écriture "2€50" se voit aussi dans les prix (comme dans les menus de café). On dit "deux euros cinquante" ou "deux cinquante" en contexte commercial.',
        },
        {
          id: 'a2-vq-04-ex12',
          type: 'qcm',
          question: 'Que signifie "Et avec ça ?" dit par le vendeur ?',
          options: [
            'Vous voulez payer maintenant ?',
            'Voulez-vous autre chose ?',
            'Est-ce que c\'est bon ?',
            'C\'est tout ?',
          ],
          correctIndex: 1,
          explanation: '"Et avec ça ?" = "Désirez-vous autre chose ?" — formule du vendeur pour demander si le client veut ajouter d\'autres articles à sa commande. Équivalent de "C\'est tout ?" mais moins conclusif.',
        },
        {
          id: 'a2-vq-04-ex13',
          type: 'qcm',
          question: 'Combien coûte le kilo de courgettes ?',
          options: ['1€50', '2€00', '2€50', '3€00'],
          correctIndex: 2,
          explanation: 'Le vendeur répond à la question d\'Amina : "Deux euros cinquante le kilo, madame." L\'expression "X euros le kilo" indique le prix à l\'unité de mesure.',
        },
        {
          id: 'a2-vq-04-ex14',
          type: 'qcm',
          question: 'Quelle est la forme correcte : "___ champignons, s\'il vous plaît."',
          options: [
            '500 grammes des',
            '500 grammes de',
            '500 grammes du',
            '500 grammes de les',
          ],
          correctIndex: 1,
          explanation: 'Après une quantité mesurée (500 grammes, un kilo, une bouteille), on utilise "de" (ou "d\'") sans article : "500 grammes DE champignons", "un kilo DE pommes", "une bouteille D\'eau".',
        },
        {
          id: 'a2-vq-04-ex15',
          type: 'qcm',
          question: 'Le vendeur "rend la monnaie". Que fait-il ?',
          options: [
            'Il recommande un produit',
            'Il rembourse une erreur',
            'Il donne au client la différence entre ce qu\'il a payé et le prix total',
            'Il offre un bon de réduction',
          ],
          correctIndex: 2,
          explanation: '"Rendre la monnaie" = donner au client la différence (le change). Amina paie 20€ pour 13,30€ → le vendeur lui rend 20 - 13,30 = 6,70€. Le vendeur dit "je vous rends 6 euros 70".',
        },
        {
          id: 'a2-vq-04-ex16',
          type: 'qcm',
          question: 'Dans un supermarché, qu\'est-ce qu\'un "chariot" ?',
          options: [
            'Un panier à provisions',
            'Un caddie (grand panier sur roulettes)',
            'Un sac de courses',
            'Un ticket de caisse',
          ],
          correctIndex: 1,
          explanation: 'Un "chariot" ou "caddie" est le grand panier métallique sur roulettes disponible à l\'entrée des supermarchés. Un "panier" est plus petit et se porte à la main. Le "ticket de caisse" est le reçu.',
        },
        {
          id: 'a2-vq-04-ex17',
          type: 'qcm',
          question: 'Comment lit-on "13,30€" à voix haute ?',
          options: [
            'Treize virgule trente euros',
            'Treize euros trente',
            'Un trois trente euros',
            'Treize et trente euros',
          ],
          correctIndex: 1,
          explanation: 'On lit "13,30€" comme "treize euros trente" (et non "treize virgule trente"). Pour les centimes, on dit juste le nombre : "deux euros cinquante" (pas "deux euros et cinquante centimes" dans la langue courante).',
        },
        {
          id: 'a2-vq-04-ex18',
          type: 'qcm',
          question: 'Quelle phrase est grammaticalement correcte ?',
          options: [
            'J\'achète du tomates',
            'J\'achète de les tomates',
            'J\'achète des tomates',
            'J\'achète de tomates',
          ],
          correctIndex: 2,
          explanation: '"Des tomates" — au pluriel, l\'article partitif/indéfini est "des". On achète DES tomates (quantité non spécifiée). Si on dit une quantité : "un kilo DE tomates" (plus d\'article après la mesure).',
        },
        {
          id: 'a2-vq-04-ex19',
          type: 'qcm',
          question: 'Que demande-t-on souvent à la caisse d\'un supermarché ?',
          options: [
            '"Vous avez une carte de fidélité ?"',
            '"Vous voulez une recette ?"',
            '"Vous cherchez quelque chose ?"',
            '"Vous connaissez le magasin ?"',
          ],
          correctIndex: 0,
          explanation: '"Vous avez une carte de fidélité ?" est la question type à la caisse des supermarchés français. La carte de fidélité permet d\'accumuler des points et d\'avoir des réductions.',
        },
        {
          id: 'a2-vq-04-ex20',
          type: 'qcm',
          question: 'Amina achète une "botte de persil". Quelle est la nature du persil ?',
          options: ['Un légume', 'Une herbe aromatique', 'Un fruit', 'Un condiment'],
          correctIndex: 1,
          explanation: 'Le persil est une herbe aromatique (herb) très utilisée dans la cuisine française. On en met dans les sauces, les salades, les soupes. Les herbes aromatiques incluent aussi le basilic, la ciboulette, l\'estragon.',
        },
      ],
    },

    // ─── Leçon 5 ──────────────────────────────────────────────────────────────
    {
      id: 'a2-vq-05',
      slug: 'a2-cuisine-française',
      moduleSlug: 'a2-vie-quotidienne',
      level: 'A2',
      title: 'Les repas et la cuisine française',
      description: 'Découvrez les repas français, commandez au restaurant et parlez de vos habitudes alimentaires.',
      duration: 12,
      free: false,
      dialogue: `## Dialogue : Au restaurant

*Rachid et sa femme vont au restaurant pour la première fois. Un serveur s'approche.*

**Serveur :** Bonsoir, vous avez réservé ?

**Rachid :** Non, nous n'avons pas réservé. Est-ce que vous avez une table pour deux ?

**Serveur :** Oui, bien sûr. Je vous installe par ici, près de la fenêtre. Voilà le menu. Je vous laisse choisir.

*Cinq minutes après.*

**Serveur :** Vous avez choisi ?

**Rachid :** Oui. Comme entrée, ma femme prend la salade niçoise. Moi, je prends la soupe à l'oignon.

**Serveur :** Et pour le plat principal ?

**Rachid :** Un steak-frites pour moi, bien cuit. Et pour elle, le poulet rôti aux herbes.

**Serveur :** La viande, elle la veut comment ?

**Rachid :** Elle mange la viande à point, s'il vous plaît.

**Serveur :** Très bien. Et comme boisson ?

**Rachid :** Une carafe d'eau, s'il vous plaît. Et une limonade pour ma femme.

**Serveur :** Parfait. *(Il revient avec les plats.)* Voilà votre soupe à l'oignon et votre salade niçoise. Bon appétit !

**Rachid :** Merci. Excusez-moi, il manque le pain.

**Serveur :** Oh, pardon ! Je vous en apporte tout de suite.

*En fin de repas.*

**Rachid :** Vous souhaitez un dessert ?

**Rachid :** Qu'est-ce que vous recommandez ?

**Serveur :** La tarte tatin est délicieuse ce soir. Nous avons aussi une mousse au chocolat maison.

**Rachid :** Alors une tarte tatin et un café, s'il vous plaît.

**Serveur :** Et pour madame ?

**Rachid :** Elle ne prend pas de dessert, merci.

**Serveur :** Très bien. *(Plus tard.)* Je vous apporte l'addition ?

**Rachid :** Oui, s'il vous plaît. L'addition, s'il vous plaît.

---

### Vocabulaire clé — Au restaurant

| Terme | Signification |
|---|---|
| L'entrée | Premier plat (salade, soupe...) |
| Le plat principal | Plat principal (viande, poisson...) |
| Le dessert | Dernier plat sucré |
| La carafe d'eau | Eau du robinet, gratuite par la loi |
| L'addition | La facture (note à payer) |
| Bon appétit | Formule avant de commencer à manger |
| Bleu / saignant / à point / bien cuit | Cuisson de la viande |
| Maison | Fait dans le restaurant (pas industriel) |
| En terrasse | À l'extérieur du restaurant |
| La carte | Le menu complet des plats disponibles |`,

      linguisticPoint: `## Point linguistique : La structure du repas français et le verbe prendre

### La structure d'un repas traditionnel au restaurant
| Ordre | Plat | Exemples |
|---|---|---|
| 1 | **L'entrée** (starter) | soupe, salade, terrine, charcuterie |
| 2 | **Le plat principal** (main course) | viande, poisson, végétarien |
| 3 | **Le fromage** (optionnel) | plateau de fromages |
| 4 | **Le dessert** | tarte, gâteau, glace, crème brûlée |
| 5 | **Le café** | expresso, allongé, noisette |

### Le verbe PRENDRE au présent (irrégulier)
| Pronom | Forme |
|---|---|
| Je | **prends** |
| Tu | **prends** |
| Il/Elle | **prend** |
| Nous | **prenons** |
| Vous | **prenez** |
| Ils/Elles | **prennent** |

**Usages de "prendre" au restaurant :**
- Je **prends** la salade (= je commande)
- On **prend** une carafe d'eau (= on commande)
- Je **prends** un café après (= je commande)

### Préférence de cuisson de la viande
| Terme | Niveau de cuisson | Couleur intérieure |
|---|---|---|
| **Bleu** | très peu cuit | rouge vif |
| **Saignant** | peu cuit | rose-rouge |
| **À point** | cuisson moyenne | rose pâle |
| **Bien cuit** | très cuit | brun, sans rosé |

### Formules au restaurant — de la réservation à l'addition
| Moment | Formule utile |
|---|---|
| Arriver | "Bonjour, j'ai réservé au nom de..." |
| Commander | "Je vais prendre..." / "Je prends..." |
| Pendant le repas | "Il manque..." / "Pourriez-vous m'apporter..." |
| Demander l'addition | "L'addition, s'il vous plaît" |
| Payer | "Je règle par carte" / "Je paye en espèces" |

### Les boissons courantes au restaurant
- **Une carafe d'eau** = eau du robinet, gratuite et obligatoire par la loi
- **Une bouteille d'eau plate / gazeuse** = eau minérale payante
- **Un verre de vin rouge / blanc / rosé** = vin
- **Une limonade** = boisson gazeuse citronnée
- **Un café / un expresso** = café court et fort
- **Un café allongé** = expresso avec plus d'eau (comme un Americano)

### Erreurs fréquentes
- ❌ *Je voudrais la soupe à l'oignon, bien cuit* → ✅ la cuisson concerne la viande, pas la soupe
- ❌ *Apportez-moi l'addition maintenant !* → ✅ **L'addition, s'il vous plaît** (plus poli)
- ❌ *Je prend la salade* → ✅ **Je prends** (pas de "d" à prendre, 1ère/2ème personne)`,

      keyPoints: [
        'Structure repas FR : entrée → plat → fromage → dessert → café',
        'Prendre = commander au restaurant (je prends la soupe)',
        'Cuisson viande : bleu / saignant / à point / bien cuit',
        '"Vous avez réservé ?" = question systématique à l\'entrée du restaurant',
        '"Bon appétit !" = formule française avant de commencer à manger',
      ],

      exercises: [
        {
          id: 'a2-vq-05-ex01',
          type: 'qcm',
          question: 'Dans quel ordre se déroule un repas français traditionnel ?',
          options: [
            'Plat → Entrée → Dessert → Fromage',
            'Entrée → Plat → Fromage → Dessert',
            'Soupe → Plat → Dessert → Café',
            'Salade → Viande → Gâteau',
          ],
          correctIndex: 1,
          explanation: 'L\'ordre traditionnel d\'un repas français : Entrée → Plat principal → Fromage → Dessert → Café. En pratique, le fromage est souvent remplacé par le dessert dans les menus du quotidien.',
        },
        {
          id: 'a2-vq-05-ex02',
          type: 'conjugaison',
          question: 'Conjuguez "prendre" à la 1ère personne du singulier :',
          options: ['Je prend', 'Je prends', 'Je prenre', 'Je pris'],
          correctIndex: 1,
          explanation: '"Prendre" est irrégulier : je PRENDS, tu PRENDS, il PREND, nous PRENONS, vous PRENEZ, ils PRENNENT. Attention : pas de "d" final à la 3ème personne du singulier (il prend, mais avec "d" silent).',
        },
        {
          id: 'a2-vq-05-ex03',
          type: 'qcm',
          question: 'Rachid veut son steak comment ?',
          options: ['Saignant', 'À point', 'Bleu', 'Bien cuit'],
          correctIndex: 3,
          explanation: 'Rachid demande "un steak-frites pour moi, bien cuit". "Bien cuit" = la viande est très cuite, sans rose à l\'intérieur. C\'est la cuisson la plus forte.',
        },
        {
          id: 'a2-vq-05-ex04',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une "carafe d\'eau" ?',
          options: [
            'Une bouteille d\'eau minérale payante',
            'Un pichet d\'eau du robinet servie gratuitement',
            'Un verre d\'eau gazeuse',
            'Une bouteille de vin blanc',
          ],
          correctIndex: 1,
          explanation: 'Une "carafe d\'eau" est de l\'eau du robinet servie dans un pichet, gratuitement par la loi dans les restaurants français. Vous avez le droit à de l\'eau gratuite dans tout restaurant. Différent d\'une bouteille d\'eau minérale payante.',
        },
        {
          id: 'a2-vq-05-ex05',
          type: 'qcm',
          question: 'Que prend la femme de Rachid comme entrée ?',
          options: ['La soupe à l\'oignon', 'La salade niçoise', 'Le poulet rôti', 'La tarte tatin'],
          correctIndex: 1,
          explanation: 'Rachid dit : "ma femme prend la salade niçoise" comme entrée. La salade niçoise est une spécialité de Nice (tomates, thon, olives noires, œuf dur, anchois).',
        },
        {
          id: 'a2-vq-05-ex06',
          type: 'qcm',
          question: 'Que signifie "Vous avez choisi ?" à la fin de la prise de commande ?',
          options: [
            'Vous êtes prêts à payer ?',
            'Avez-vous décidé ce que vous voulez commander ?',
            'Aimez-vous notre restaurant ?',
            'Souhaitez-vous partir maintenant ?',
          ],
          correctIndex: 1,
          explanation: '"Vous avez choisi ?" = "Êtes-vous prêts à commander ?" Le serveur revient pour prendre la commande une fois que les clients ont eu le temps de lire le menu.',
        },
        {
          id: 'a2-vq-05-ex07',
          type: 'qcm',
          question: 'Que recommande le serveur comme dessert ?',
          options: ['La crème brûlée', 'La mousse au chocolat', 'La tarte tatin', 'Le fondant au chocolat'],
          correctIndex: 2,
          explanation: 'Le serveur recommande "la tarte tatin" et dit qu\'elle "est délicieuse ce soir". La tarte tatin est une tarte aux pommes renversée, une spécialité française classique.',
        },
        {
          id: 'a2-vq-05-ex08',
          type: 'qcm',
          question: 'Comment dit-on "saignant" en cuisson de viande en anglais ?',
          options: ['Well done', 'Medium', 'Rare', 'Medium-rare'],
          correctIndex: 2,
          explanation: 'La correspondance : Bleu = Very rare / Saignant = Rare / À point = Medium / Bien cuit = Well done. "Saignant" vient du mot "sang" (blood) car la viande est encore rose/rouge à l\'intérieur.',
        },
        {
          id: 'a2-vq-05-ex09',
          type: 'qcm',
          question: 'Que dit-on en France avant de commencer à manger ?',
          options: [
            '"Merci pour ce repas"',
            '"Bon appétit"',
            '"Santé"',
            '"À votre santé"',
          ],
          correctIndex: 1,
          explanation: '"Bon appétit !" se dit avant de commencer à manger. En France, c\'est une formule de politesse très courante que tout le monde dit (convives et serveurs). "Santé" / "À votre santé" s\'utilise pour trinquer (lever son verre).',
        },
        {
          id: 'a2-vq-05-ex10',
          type: 'qcm',
          question: 'Rachid et sa femme avaient-ils réservé une table ?',
          options: ['Oui, ils avaient réservé', 'Non, ils n\'avaient pas réservé', 'Le texte ne le dit pas', 'Oui, pour une table de 4'],
          correctIndex: 1,
          explanation: 'Rachid répond "Non, nous n\'avons pas réservé" à la question du serveur. Heureusement, le restaurant a une table disponible. En France, il est conseillé de réserver, surtout le week-end.',
        },
        {
          id: 'a2-vq-05-ex11',
          type: 'qcm',
          question: 'Que signifie "Je vous laisse choisir" dit par le serveur ?',
          options: [
            'Je pars maintenant',
            'Je vous donne le temps de regarder le menu et décider',
            'Je choisis pour vous',
            'Le menu est limité',
          ],
          correctIndex: 1,
          explanation: '"Je vous laisse choisir" = je vous laisse tranquilles pour regarder le menu et décider. C\'est une formule de politesse du serveur qui part et reviendra plus tard pour prendre la commande.',
        },
        {
          id: 'a2-vq-05-ex12',
          type: 'qcm',
          question: 'Comment demande-t-on l\'addition au restaurant en France ?',
          options: [
            '"L\'argent, s\'il vous plaît !"',
            '"L\'addition, s\'il vous plaît" ou "Vous pouvez nous apporter l\'addition ?"',
            '"Le ticket, s\'il vous plaît"',
            '"La facture, s\'il vous plaît"',
          ],
          correctIndex: 1,
          explanation: '"L\'addition" est le mot correct au restaurant. On dit "L\'addition, s\'il vous plaît" en levant la main pour attirer l\'attention du serveur. "La facture" s\'utilise dans un contexte professionnel/commercial.',
        },
        {
          id: 'a2-vq-05-ex13',
          type: 'qcm',
          question: 'La soupe à l\'oignon est...',
          options: [
            'Un dessert français',
            'Un plat principal',
            'Une entrée française traditionnelle',
            'Une boisson',
          ],
          correctIndex: 2,
          explanation: 'La soupe à l\'oignon est une entrée emblématique de la cuisine française, originaire des Halles de Paris. Elle est servie chaude avec du fromage gratiné. C\'est Rachid qui la commande comme entrée.',
        },
        {
          id: 'a2-vq-05-ex14',
          type: 'qcm',
          question: 'Quelle est la formule correcte pour commander au restaurant ?',
          options: [
            '"Je désire prendre la salade"',
            '"Je vais prendre la salade" ou "Je prends la salade"',
            '"Donnez-moi la salade"',
            '"La salade pour moi"',
          ],
          correctIndex: 1,
          explanation: '"Je vais prendre..." ou "Je prends..." sont les formules les plus naturelles. "Je vais prendre" (futur proche) indique une décision. "Donnez-moi" fonctionne mais peut sonner brusque. "La salade pour moi" est informel mais compris.',
        },
        {
          id: 'a2-vq-05-ex15',
          type: 'qcm',
          question: 'Quel est le plat principal de la femme de Rachid ?',
          options: ['Le steak-frites', 'La soupe à l\'oignon', 'Le poulet rôti aux herbes', 'La tarte tatin'],
          correctIndex: 2,
          explanation: 'Rachid commande pour sa femme "le poulet rôti aux herbes" comme plat principal. "Rôti" = cuit au four avec des herbes (thym, romarin, laurier...).',
        },
        {
          id: 'a2-vq-05-ex16',
          type: 'qcm',
          question: 'Qu\'est-ce qu\'une "entrée" dans un repas français ?',
          options: [
            'L\'entrée principale du restaurant (la porte)',
            'Le premier plat d\'un repas (starter)',
            'Le plat principal',
            'Le dessert',
          ],
          correctIndex: 1,
          explanation: 'Une "entrée" en cuisine française = le premier plat du repas (starter en anglais). Ne pas confondre avec "l\'entrée" = la porte/l\'accès d\'un bâtiment. En restauration, "entrée" = premier plat.',
        },
        {
          id: 'a2-vq-05-ex17',
          type: 'qcm',
          question: 'Peut-on demander de l\'eau gratuitement dans un restaurant français ?',
          options: [
            'Non, l\'eau est toujours payante',
            'Oui, la carafe d\'eau du robinet est gratuite par la loi',
            'Seulement dans les restaurants haut de gamme',
            'Seulement si on commande un repas complet',
          ],
          correctIndex: 1,
          explanation: 'En France, tout restaurant est obligé par la loi de servir gratuitement de l\'eau potable (carafe d\'eau du robinet) à quiconque le demande. C\'est un droit du consommateur. L\'eau en bouteille reste payante.',
        },
        {
          id: 'a2-vq-05-ex18',
          type: 'qcm',
          question: 'Que commande Rachid comme dessert et boisson chaude ?',
          options: [
            'Une glace et un thé',
            'Une tarte tatin et un café',
            'Un fondant au chocolat et un café',
            'Une crème brûlée et un café',
          ],
          correctIndex: 1,
          explanation: 'Rachid dit : "une tarte tatin et un café, s\'il vous plaît". En France, on prend souvent un café (espresso) APRÈS le dessert, pas pendant. "Un café" = un expresso court.',
        },
        {
          id: 'a2-vq-05-ex19',
          type: 'qcm',
          question: 'Que dit le serveur quand il apporte les plats ?',
          options: [
            '"Voilà, régalez-vous !"',
            '"Je vous apporte ça tout de suite. Bon appétit !"',
            '"Attention, c\'est chaud !"',
            '"Profitez bien !"',
          ],
          correctIndex: 1,
          explanation: 'Le serveur dit "Je vous apporte ça tout de suite. Bon appétit !" après avoir pris la commande. "Tout de suite" = immédiatement. "Bon appétit" est la formule de politesse standard.',
        },
        {
          id: 'a2-vq-05-ex20',
          type: 'qcm',
          question: 'Comment demandez-vous une recommandation au serveur ?',
          options: [
            '"Qu\'est-ce que c\'est bon ici ?"',
            '"Qu\'est-ce que vous recommandez ?"',
            '"C\'est quoi le meilleur truc ?"',
            '"Qu\'est-ce que vous mangez ?"',
          ],
          correctIndex: 1,
          explanation: '"Qu\'est-ce que vous recommandez ?" est la formule polie pour demander conseil au serveur. Variantes possibles : "Que me conseillez-vous ?" (plus soutenu) ou "Qu\'est-ce qui est bien ce soir ?" (plus familier).',
        },
      ],
    },

    // ─── Leçon 6 ──────────────────────────────────────────────────────────────
    {
      id: 'a2-vq-06',
      slug: 'a2-loisirs',
      moduleSlug: 'a2-vie-quotidienne',
      level: 'A2',
      title: 'Les loisirs et le temps libre',
      description: 'Parlez de vos activités préférées, exprimez vos goûts et organisez vos week-ends.',
      duration: 12,
      free: false,
      dialogue: `## Dialogue : Le week-end

*Malia et sa collègue Sandrine parlent de leurs week-ends respectifs.*

**Sandrine :** Alors Malia, vous avez passé un bon week-end ?

**Malia :** Oui, très bien merci ! Le samedi, nous avons visité le musée d'Orsay avec mon mari. C'était magnifique !

**Sandrine :** Ah oui ? Vous aimez la peinture ?

**Malia :** J'adore ça ! Surtout les impressionnistes — Monet, Renoir, Degas. Et vous, qu'est-ce que vous avez fait ?

**Sandrine :** Le samedi matin, j'ai fait du sport. Je fais du jogging dans le parc tous les samedis. Et le soir on est allés au cinéma voir un film comique.

**Malia :** C'était bien ?

**Sandrine :** Excellent ! On a beaucoup ri. Et le dimanche, qu'est-ce que vous avez fait ?

**Malia :** On a pris le déjeuner en famille chez ma belle-mère. Elle cuisine très bien — elle a fait un couscous délicieux ! L'après-midi, les enfants ont joué au foot dans le jardin et moi j'ai lu un roman.

**Sandrine :** Vous lisez beaucoup ?

**Malia :** Oui, j'aime beaucoup lire. En ce moment je lis un roman policier — c'est très bien écrit. Et vous, vous avez des hobbies particuliers ?

**Sandrine :** Oui, j'aime cuisiner, jardiner et faire de la randonnée. En été, je fais aussi du vélo le dimanche. Le week-end prochain, on part en randonnée dans les Vosges !

**Malia :** C'est loin les Vosges ?

**Sandrine :** À deux heures de Strasbourg. C'est une belle région — des forêts, des lacs, des villages alsaciens.

---

### Vocabulaire clé — Les loisirs et activités

| Loisir | Verbe + construction | Exemple |
|---|---|---|
| Le jogging / la course | faire du jogging | Je fais du jogging |
| La natation | faire de la natation | Elle fait de la natation |
| Le vélo | faire du vélo / aller à vélo | Il fait du vélo le dimanche |
| La randonnée | faire de la randonnée | On part en randonnée |
| Le football | jouer au foot | Les enfants jouent au foot |
| Le tennis | jouer au tennis | Je joue au tennis le samedi |
| La guitare | jouer de la guitare | Il joue de la guitare |
| Le piano | jouer du piano | Elle joue du piano |
| La lecture | lire un roman / le journal | J'aime lire |
| La cuisine | cuisiner / faire la cuisine | Elle aime cuisiner |
| Le cinéma | aller au cinéma | On est allés au cinéma |
| Le musée | visiter un musée | Nous avons visité le musée |`,

      linguisticPoint: `## Point linguistique : Exprimer les goûts et les activités

### Exprimer les goûts — du plus fort au plus faible
| Expression | Sens | Exemple |
|---|---|---|
| **J'adore** | très fort positif | J'adore le cinéma |
| **J'aime beaucoup** | fort positif | J'aime beaucoup lire |
| **J'aime** | positif | J'aime le sport |
| **J'aime bien** | positif modéré | J'aime bien la cuisine |
| **Ça me plaît** | neutre-positif | Ça me plaît beaucoup |
| **Je n'aime pas trop** | léger négatif | Je n'aime pas trop le foot |
| **Je n'aime pas** | négatif | Je n'aime pas le bruit |
| **Je déteste** | très négatif | Je déteste attendre |

### Les loisirs et activités — les bons verbes
| Verbe | Construction | Activités |
|---|---|---|
| **faire** | du / de la / de l' | faire du sport, de la natation, du jardinage |
| **jouer à** | au / à la / aux | jouer au foot, à la pétanque, aux cartes |
| **jouer de** | du / de la | jouer du piano, de la guitare |
| **aller** | au / à la / à l' | aller au cinéma, à la piscine, au musée |
| **regarder** | - | regarder un film, la télévision |
| **lire** | - | lire un roman, le journal, un article |
| **écouter** | - | écouter de la musique, un podcast |
| **visiter** | - | visiter un musée, une exposition |

### Le passé composé — avoir ou être ?
| Auxiliaire | Exemples de verbes |
|---|---|
| **avoir** (la majorité) | visiter → j'ai visité / faire → j'ai fait / lire → j'ai lu |
| **être** (mouvement/état) | aller → je suis allé(e) / venir → je suis venu(e) / partir → je suis parti(e) |

**Accord avec être :** le participe passé s'accorde avec le sujet
- Je suis allé (homme) / Je suis allée (femme)
- Nous sommes allés (hommes ou mixte) / Nous sommes allées (toutes femmes)

### Genres de films et lectures
| Genre | Exemple |
|---|---|
| Un film comique (comédie) | film qui fait rire |
| Un thriller / film policier | film de suspense |
| Un film d'action | film avec des combats |
| Un roman policier (polar) | livre de détective |
| Un roman historique | livre situé dans le passé |
| Un documentaire | film informatif |

### Erreurs fréquentes
- ❌ *Je joue au guitare* → ✅ **Je joue de la guitare** (instrument → jouer de)
- ❌ *Je fais de la foot* → ✅ **Je joue au foot** (sport d'équipe → jouer à)
- ❌ *Nous avons allés au cinéma* → ✅ **Nous sommes allés** (aller → être)`,

      keyPoints: [
        'J\'adore / J\'aime beaucoup / J\'aime / J\'aime bien / Je n\'aime pas / Je déteste',
        'FAIRE + du/de la : faire du sport, faire de la natation, faire du jogging',
        'JOUER + au/à la : jouer au foot, jouer au tennis',
        'JOUER + de : jouer de la guitare, jouer du piano',
        'Passé composé : "on est allés au cinéma" (aller → être + allé)',
      ],

      exercises: [
        {
          id: 'a2-vq-06-ex01',
          type: 'qcm',
          question: 'Quelle est la formule pour exprimer un goût très fort ?',
          options: ['J\'aime bien', 'J\'aime', 'J\'adore', 'Je préfère'],
          correctIndex: 2,
          explanation: 'La gradation : J\'ADORE (très fort) > J\'AIME BEAUCOUP > J\'AIME > J\'AIME BIEN > ça me plaît... "J\'adore" exprime le niveau le plus élevé d\'appréciation.',
        },
        {
          id: 'a2-vq-06-ex02',
          type: 'qcm',
          question: 'Qu\'a fait Malia le samedi matin ?',
          options: [
            'Elle a fait du jogging',
            'Elle a visité le musée d\'Orsay',
            'Elle a cuisiné',
            'Elle a lu un roman',
          ],
          correctIndex: 1,
          explanation: 'Malia dit : "Le samedi, nous avons visité le musée d\'Orsay avec mon mari." Le musée d\'Orsay à Paris est célèbre pour ses collections impressionnistes (Monet, Renoir, Degas...).',
        },
        {
          id: 'a2-vq-06-ex03',
          type: 'qcm',
          question: 'Quelle préposition utilise-t-on avec "jouer" pour un sport d\'équipe ?',
          options: ['Jouer de', 'Jouer à', 'Jouer en', 'Jouer avec'],
          correctIndex: 1,
          explanation: 'Pour les sports et jeux : JOUER + AU/À LA/AUX. Ex : jouer AU foot / AU tennis / À LA pétanque / AUX cartes. Pour les instruments de musique : JOUER + DU/DE LA. Ex : jouer DU piano / DE LA guitare.',
        },
        {
          id: 'a2-vq-06-ex04',
          type: 'qcm',
          question: 'Que fait Sandrine tous les samedis matin ?',
          options: [
            'Elle va au musée',
            'Elle fait du jogging dans le parc',
            'Elle fait de la natation',
            'Elle jardine',
          ],
          correctIndex: 1,
          explanation: 'Sandrine dit : "Je fais du jogging dans le parc tous les samedis matin." "Faire du jogging" = courir (run). La structure "tous les + jour" indique une habitude régulière.',
        },
        {
          id: 'a2-vq-06-ex05',
          type: 'qcm',
          question: 'Quelle phrase est correcte pour dire qu\'on pratique la natation ?',
          options: [
            'Je fais de la nage',
            'Je fais de la natation',
            'Je joue à la natation',
            'Je pratique la nage',
          ],
          correctIndex: 1,
          explanation: '"Faire de la natation" est la formule correcte. Le verbe FAIRE s\'utilise avec les sports et activités physiques : faire du sport / de la natation / du vélo / de la randonnée.',
        },
        {
          id: 'a2-vq-06-ex06',
          type: 'qcm',
          question: 'Qu\'est-ce que Malia a fait le dimanche après-midi ?',
          options: [
            'Elle a regardé un film',
            'Elle a fait du sport',
            'Elle a lu un roman',
            'Elle a cuisiné',
          ],
          correctIndex: 2,
          explanation: 'Malia dit : "l\'après-midi, les enfants ont joué au foot dans le jardin et moi j\'ai lu un roman." Elle précise qu\'elle lit actuellement un roman policier.',
        },
        {
          id: 'a2-vq-06-ex07',
          type: 'qcm',
          question: 'Le musée d\'Orsay est connu pour quelle collection ?',
          options: [
            'L\'art contemporain',
            'Les impressionnistes (Monet, Renoir...)',
            'L\'art antique',
            'Les sculptures modernes',
          ],
          correctIndex: 1,
          explanation: 'Le musée d\'Orsay à Paris est mondialement connu pour sa collection impressionniste et post-impressionniste : Monet, Renoir, Degas, Van Gogh, Gauguin... Malia dit qu\'elle "adore les impressionnistes".',
        },
        {
          id: 'a2-vq-06-ex08',
          type: 'conjugaison',
          question: 'Conjuguez "aller" au passé composé, 1ère personne du pluriel : "Nous ___ au cinéma."',
          options: ['Nous avons allé', 'Nous sommes allés', 'Nous allons', 'Nous avons aller'],
          correctIndex: 1,
          explanation: '"Aller" se conjugue avec ÊTRE au passé composé : NOUS SOMMES ALLÉS (accord au pluriel). Les verbes de mouvement se conjuguent avec être : aller, venir, partir, arriver, rentrer, monter, descendre...',
        },
        {
          id: 'a2-vq-06-ex09',
          type: 'qcm',
          question: 'Sandrine dit "on est allés au cinéma". "On" = ?',
          options: ['Quelqu\'un d\'inconnu', 'Sandrine et sa famille/amis', 'Sandrine seule', 'Les enfants'],
          correctIndex: 1,
          explanation: 'Dans ce contexte, "on" = "nous" (familier). Sandrine est allée au cinéma avec d\'autres personnes (probablement son partenaire ou des amis). "On est allés" = "nous sommes allés".',
        },
        {
          id: 'a2-vq-06-ex10',
          type: 'qcm',
          question: 'Quelle activité Sandrine prévoit-elle pour le week-end prochain ?',
          options: [
            'Aller au musée',
            'Faire du jogging',
            'Partir en randonnée dans les Vosges',
            'Cuisiner un repas gastronomique',
          ],
          correctIndex: 2,
          explanation: 'Sandrine dit : "Le week-end prochain, on part en randonnée dans les Vosges !" Les Vosges sont une chaîne de montagnes à l\'est de la France, en Alsace-Lorraine, très populaire pour la randonnée.',
        },
        {
          id: 'a2-vq-06-ex11',
          type: 'qcm',
          question: 'Comment dit-on "I enjoy gardening" en français ?',
          options: [
            'J\'aime les jardins',
            'J\'aime jardiner',
            'J\'aime faire des jardins',
            'Je jardine avec plaisir',
          ],
          correctIndex: 1,
          explanation: '"J\'aime + infinitif" = "I enjoy + gerund". J\'aime JARDINER / LIRE / CUISINER / COURIR. On peut aussi dire "j\'aime faire du jardinage", mais "j\'aime jardiner" est plus naturel.',
        },
        {
          id: 'a2-vq-06-ex12',
          type: 'qcm',
          question: 'Que lisait Malia au moment de la conversation ?',
          options: ['Un roman classique', 'Un roman policier', 'Un journal', 'Un magazine'],
          correctIndex: 1,
          explanation: 'Malia dit : "En ce moment je lis un roman policier." "En ce moment" = actuellement, maintenant. Le roman policier (polar) est un genre très populaire en France (Agatha Christie, Simenon...).',
        },
        {
          id: 'a2-vq-06-ex13',
          type: 'qcm',
          question: 'Quel est le participe passé du verbe "visiter" ?',
          options: ['Visité', 'Visitée', 'Visiteur', 'Visitant'],
          correctIndex: 0,
          explanation: '"Visiter" → participe passé : VISITÉ. Avec "avoir", le participe passé ne s\'accorde généralement pas avec le sujet : "Nous avons visité" (pas de "s" final car pas d\'accord avec "nous").',
        },
        {
          id: 'a2-vq-06-ex14',
          type: 'qcm',
          question: 'Comment exprime-t-on une routine du week-end ?',
          options: [
            'Je fais du jogging le samedi dernier',
            'Je fais du jogging tous les samedis',
            'Je ferai du jogging samedi',
            'J\'ai fait du jogging samedi',
          ],
          correctIndex: 1,
          explanation: '"Tous les samedis" = every Saturday, indique une habitude régulière. Pour les habitudes : présent + expression de fréquence (tous les jours / chaque semaine / le dimanche).',
        },
        {
          id: 'a2-vq-06-ex15',
          type: 'qcm',
          question: 'Que signifie "un film comique" ?',
          options: [
            'Un film d\'action',
            'Un film qui fait rire',
            'Un film basé sur une BD',
            'Un film pour enfants',
          ],
          correctIndex: 1,
          explanation: '"Comique" = drôle, qui fait rire. Une comédie (comedy) = un film comique. Les genres de films en français : comédie / thriller / film d\'action / film d\'horreur / documentaire / film d\'animation.',
        },
        {
          id: 'a2-vq-06-ex16',
          type: 'qcm',
          question: 'Sandrine aime jouer d\'un instrument. Comment dit-on "I play guitar" ?',
          options: [
            'Je joue au guitare',
            'Je joue à la guitare',
            'Je joue de la guitare',
            'Je fais de la guitare',
          ],
          correctIndex: 2,
          explanation: 'Pour les instruments de musique : JOUER + DE LA / DU / DES. Jouer DE LA guitare / DE LA flûte / DU piano / DU violon / DES percussions. (Pas "jouer AU piano" — ça n\'existe pas en français).',
        },
        {
          id: 'a2-vq-06-ex17',
          type: 'qcm',
          question: 'Malia dit "c\'était magnifique". Quel temps est utilisé ?',
          options: ['Le présent', 'Le passé composé', 'L\'imparfait', 'Le futur'],
          correctIndex: 2,
          explanation: '"C\'était" = c\'est à l\'imparfait. L\'imparfait s\'utilise pour décrire une impression, un état passé, une atmosphère. "C\'était magnifique" (it was magnificent) décrit l\'impression laissée par la visite.',
        },
        {
          id: 'a2-vq-06-ex18',
          type: 'qcm',
          question: 'Comment dit-on "What are your hobbies?" poliment ?',
          options: [
            '"Vous faites quoi le week-end ?"',
            '"Vous avez des hobbies particuliers ?"',
            '"Qu\'est-ce que vous aimez faire ?"',
            'Les deux dernières réponses sont correctes',
          ],
          correctIndex: 3,
          explanation: '"Vous avez des hobbies particuliers ?" et "Qu\'est-ce que vous aimez faire ?" sont toutes deux des façons polies de demander les loisirs de quelqu\'un. Le mot "hobby" (d\'origine anglaise) est intégré au français familier.',
        },
        {
          id: 'a2-vq-06-ex19',
          type: 'qcm',
          question: 'Comment demande-t-on "Did you have a good weekend?" ?',
          options: [
            '"Le week-end était bien ?"',
            '"Vous avez passé un bon week-end ?"',
            '"Ça s\'est bien passé le week-end ?"',
            'Les trois réponses sont correctes',
          ],
          correctIndex: 3,
          explanation: 'Les trois formules sont correctes et couramment utilisées : "Vous avez passé un bon week-end ?" (formel), "Le week-end était bien ?" (semi-formel), "Ça s\'est bien passé ?" (familier). Sandrine utilise la première.',
        },
        {
          id: 'a2-vq-06-ex20',
          type: 'qcm',
          question: 'Malia dit "J\'adore ça !" Que désigne "ça" ?',
          options: [
            'Le musée d\'Orsay spécifiquement',
            'La peinture en général',
            'Les sorties culturelles',
            'Le week-end',
          ],
          correctIndex: 1,
          explanation: 'Sandrine vient de demander "Vous aimez la peinture ?" et Malia répond "J\'adore ça !" — "ça" reprend le mot "la peinture" mentionné juste avant. "Ça" est un pronom démonstratif qui renvoie à quelque chose de mentionné précédemment.',
        },
      ],
    },
  ],
};
