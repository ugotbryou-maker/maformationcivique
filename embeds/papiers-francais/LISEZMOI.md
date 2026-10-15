# Test d'éligibilité — Papiers Français

Bloc autonome à coller dans un **Embed** Webflow. Aucune dépendance externe,
aucun framework, aucun appel réseau tant que le webhook n'est pas renseigné.

| Fichier | Rôle |
|---|---|
| `test-eligibilite.html` | **Le seul fichier à copier dans Webflow.** |
| `apercu.html` | Aperçu local uniquement — ne pas copier dans Webflow. |

## Intégration

1. Webflow → page voulue → **Add element → Embed**.
2. Coller l'intégralité de `test-eligibilite.html`.
3. Publier.

Le bloc fait 35 Ko, sous la limite de 50 000 caractères d'un Embed Webflow.
Tous les styles sont préfixés `.pfel-` et enfermés dans `#pf-eligibilite` :
rien ne peut déborder sur le reste du site.

## Réglages

En tête du `<script>` :

| Constante | Rôle |
|---|---|
| `PF_WEBHOOK` | URL du webhook Make. **Vide = aucun envoi** (le test fonctionne, le lead est seulement affiché dans la console). |
| `PF_RDV_URL` | Destination du bouton de prise de rendez-vous. |

## Branchement Make (à faire)

1. Make → **Create a new scenario** → module **Webhooks → Custom webhook** →
   *Add* → copier l'URL générée.
2. Coller cette URL dans `PF_WEBHOOK`, republier la page Webflow.
3. Revenir sur Make, cliquer **Run once**, puis faire un test complet sur la
   page : Make capture la structure du JSON et propose ensuite chaque champ.
4. Ajouter le module du CRM (HubSpot, Pipedrive, Airtable, Google Sheets…) et
   mapper les champs listés ci-dessous.

### Champs envoyés

| Champ | Contenu |
|---|---|
| `prenom`, `nom`, `email`, `telephone` | Coordonnées saisies |
| `consentement`, `consentement_le` | Case RGPD cochée et horodatage — **base légale du recontact** |
| `demarche` | Libellé lisible (ex. « Naturalisation française ») |
| `statut` | `pret` · `bientot` · `langue` · `bloque` · `regularisation` · `autre_voie` |
| `routage` | `avocat` · `formation` · `langue` · `mixte` |
| `qualification` | Phrase de qualification commerciale |
| `urgent` | `true` si OQTF / sans titre — à router en priorité |
| `verdict` | Titre du résultat affiché à la personne |
| `reponses` | Objet contenant chaque réponse brute |
| `page`, `referer`, `utm_source`, `utm_medium`, `utm_campaign` | Provenance |

### Routage conseillé dans Make

Ajouter un **Router** juste après le webhook :

- `urgent = true` → notification immédiate (SMS / Slack) **et** création de la
  fiche CRM en priorité haute. Les délais de recours contre une OQTF sont de
  48 h à 30 jours : un lead traité le lendemain peut être un recours perdu.
- `routage = avocat` → file « mise en relation avocat ».
- autres → file standard, rappel sous 48 h.

### Récupérer l'adresse IP

C'est **le même mécanisme que sur maformationcivique.fr**, où la route
`/api/lead/eligibilite` lit l'en-tête `x-forwarded-for` et en garde le premier
élément. Seul le serveur change : ici c'est Make qui joue ce rôle.

Le JavaScript de la page ne peut pas lire l'IP — le navigateur ne l'expose
pas. Mais l'appel au webhook est une requête HTTP ordinaire : **Make voit l'IP
de l'appelant**. Rien à ajouter dans le code de l'embed.

**Mise en place — une case à cocher :**

1. Module *Custom webhook* → **Show advanced settings** → cocher
   **Get request headers**.
2. Cliquer **Redetermine data structure**, puis refaire un test sur la page
   pour que Make enregistre la nouvelle structure.
3. Dans le module CRM, mapper le champ « IP » avec :

   ```
   {{first(split(1.headers.x-forwarded-for; ","))}}
   ```

   `x-forwarded-for` peut contenir plusieurs adresses séparées par des
   virgules — l'IP du visiteur, puis les relais traversés. Seule la
   **première** est celle du prospect ; prendre la chaîne entière donnerait
   l'IP d'un proxy.

Ça suffit pour le besoin principal : une ligne « adresse IP » dans le CRM, que
l'on vérifie au cas par cas quand un télépro signale un contact hors cible.

**Ajouter la région (optionnel).** Après le webhook, un module
**HTTP → Make a request** vers un service de géolocalisation d'IP, en lui
passant l'IP extraite ci-dessus. Mapper ensuite le pays et la région.

> **Quelle précision attendre ?** Le pays est fiable. **La région l'est
> raisonnablement** — distinguer un prospect en Île-de-France d'un prospect en
> Occitanie fonctionne dans la grande majorité des cas, ce qui correspond au
> besoin ici. En revanche la **ville et le département ne sont pas fiables** :
> sur mobile l'IP pointe la passerelle de l'opérateur, souvent dans une autre
> ville. Et un VPN fausse tout, y compris le pays. À utiliser comme indice de
> cohérence, jamais comme critère automatique de rejet.

### Point de vigilance RGPD

Ne transmettre à un avocat partenaire que les leads dont `consentement = true`.
Le champ est horodaté dans `consentement_le` : c'est la preuve à conserver.

**Adresse IP.** C'est une donnée personnelle (CJUE, *Breyer*, 2016). Trois
obligations, toutes remplies ou à remplir :

1. **Information** — la case de consentement du formulaire annonce désormais
   explicitement l'enregistrement de l'IP et sa finalité (vérification de la
   zone d'intervention). Ne pas retirer cette phrase.
2. **Mention dans la politique de confidentialité** de papiers-francais.com :
   ajouter l'IP aux données collectées, avec la même finalité. À faire côté
   Webflow, ce fichier ne peut pas le faire pour vous.
3. **Durée de conservation** — l'IP ne sert qu'à qualifier la zone à la prise
   de contact. La purger du CRM une fois le lead traité, et au plus tard au
   bout de 12 mois. Une IP conservée indéfiniment sans finalité active est un
   manquement.

Si vous ajoutez un service tiers de géolocalisation dans Make, il devient
**destinataire** des données : le nommer dans la politique de confidentialité,
et le choisir hébergé dans l'UE de préférence.

## Contenu réglementaire

Niveaux de langue exigés et seuil de l'examen civique sont regroupés en tête du
script (`NIVEAUX`, `EXAMEN`). Ce sont les seules valeurs à modifier si la
réglementation change — elles ne sont écrites qu'à un seul endroit.

État au 1ᵉʳ janvier 2026 : A2 pour la carte de séjour pluriannuelle, B1 pour la
carte de résident, B2 pour la naturalisation ; examen civique de 40 questions,
seuil de réussite 32/40.
