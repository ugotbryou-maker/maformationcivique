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

### Point de vigilance RGPD

Ne transmettre à un avocat partenaire que les leads dont `consentement = true`.
Le champ est horodaté dans `consentement_le` : c'est la preuve à conserver.

## Contenu réglementaire

Niveaux de langue exigés et seuil de l'examen civique sont regroupés en tête du
script (`NIVEAUX`, `EXAMEN`). Ce sont les seules valeurs à modifier si la
réglementation change — elles ne sont écrites qu'à un seul endroit.

État au 1ᵉʳ janvier 2026 : A2 pour la carte de séjour pluriannuelle, B1 pour la
carte de résident, B2 pour la naturalisation ; examen civique de 40 questions,
seuil de réussite 32/40.
