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

### Récupérer l'adresse IP (localisation du prospect)

**Aucun code à ajouter.** Le JavaScript d'une page ne peut pas lire l'IP du
visiteur : le navigateur ne l'expose pas. Mais quand le navigateur appelle le
webhook, c'est une requête HTTP classique — **Make voit l'IP de l'appelant**.

Dans le module *Custom webhook* → **Show advanced settings** → cocher
**Get request headers**. Chaque exécution contient alors les en-têtes, dont
`x-forwarded-for` : son **premier** élément est l'IP du visiteur (les suivants
sont les relais traversés). Dans Make : `{{1.headers.x-forwarded-for}}`, puis
`split(...; ",")` et `first(...)` pour n'en garder que la première.

Pour obtenir le pays et la ville, ajouter ensuite un module **HTTP → Make a
request** vers un service de géolocalisation d'IP, et mapper le pays / la
région / la ville dans le CRM.

> ⚠️ **L'IP localise mal, et c'est structurel.** Sur 4G, elle pointe la
> passerelle de l'opérateur — souvent une autre ville, parfois à des centaines
> de kilomètres. Un VPN la masque entièrement. Une box peut être rattachée à un
> nœud voisin. C'est un **indice**, utile pour repérer un prospect manifestement
> hors zone (autre pays), jamais une preuve au niveau du département. Si le
> télépro s'en sert pour écarter des leads, il en écartera de vrais. Le
> département déclaré par la personne reste plus fiable que son IP.

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
