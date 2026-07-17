# Pages locales « Examen civique à [Département] »

Système de pages `/examen-civique/[departement]` piloté par les données de ce
dossier. Conçu pour scaler jusqu'à la couverture nationale **sans** tomber sous
la politique Google « scaled content abuse » : une page n'existe que si elle
contient des données locales réelles, sourcées et datées.

## Les deux règles absolues

1. **Aucune donnée inventée.** Chaque centre, adresse ou spécificité
   préfectorale a une `sourceUrl` officielle + un `verifieLe`. Champ
   introuvable → vide + TODO. Une page absente vaut mieux qu'une page fausse.
2. **Aucune valeur réglementaire en dur.** Les 40 questions / 45 min / 32/40 /
   niveaux A2-B1-B2 vivent dans `lib/reglementation.ts` (source unique) et
   dans l'article pilier du blog. Jamais dans un fichier département, jamais
   dans un composant. À chaque réforme : un seul fichier à modifier.

## Ajouter un département

1. **Copier** `_TEMPLATE.ts` → `<slug>.ts` (ex. `rhone.ts`, kebab-case sans accents).
2. **Remplir les champs administratifs** : slug, code, nom,
   `nomAvecPreposition` (« dans le Rhône », « en Gironde », « à Paris » — c'est
   ce champ qui évite les fautes de grammaire générées), ville-préfecture,
   région, 2-4 villes principales, slugs des départements limitrophes.
3. **Sourcer les centres d'examen** :
   - Liste des centres agréés : https://www.formation-civique.interieur.gouv.fr
   - Croiser avec le site de l'opérateur (CCI Paris Île-de-France, France
     Éducation International) pour l'adresse exacte et l'URL de réservation.
   - Chaque centre = `sourceUrl` (la page où tu as vérifié) + `verifieLe` (date du jour).
   - Département sans centre → remplir `centresProches` (minimum 2, avec distance).
4. **Sourcer les spécificités préfectorales** (le différenciateur éditorial) :
   - UNIQUEMENT ce que la préfecture publie sur son site `.gouv.fr`.
   - ⛔ Rien de « rapporté », rien de forum, rien de déduit. Pas de délais chiffrés.
5. **Enregistrer** dans `index.ts` : import + ajout au tableau `ALL`.
6. **Publier** : passer `publie: true`. Le garde-fou `canPublish()` refuse la
   publication si les données minimales manquent (1 centre complet OU 2
   proches complets) — un département invalide reste en 404 avec un warning au build.
7. Vérifier le rendu : `npm run dev` → `/examen-civique/<slug>`, puis relire
   la checklist anti-doorway ci-dessous.

## Publier une vague

Ne jamais publier les 101 départements d'un coup (signal de mass-publishing).

- **Vague 1** (8-12 dép. à fort volume) : 75, 93, 92, 94, 95, 69, 13, 59, 33, 31.
- Mesurer 4-6 semaines dans Search Console (impressions, clics, indexation).
- Étendre par vagues de 10-15 si la vague 1 performe.

Le flag `publie` par fichier pilote tout : le sitemap et `generateStaticParams`
ne prennent que les départements publiés ET validés.

## Activer `delaisObserves` (vague 2 — délais first-party)

Ce bloc n'affiche QUE les données propres du site (dossiers réellement suivis
par les utilisateurs). Jamais un chiffre externe, un forum ou une estimation.

Conditions cumulatives, imposées par le composant (`DelaisObservesBlock`) :
- `actif: true`
- `nbDossiers >= 30`
- min/max/médiane/période/date de maj tous remplis

En dessous de 30 dossiers, le bloc est masqué quoi qu'il arrive. Le disclaimer
(« données déclaratives… pas un délai officiel ») est codé en dur dans le
composant : impossible d'afficher un délai sans lui.

## Checklist anti-doorway avant publication

- [ ] Chaque donnée locale a `sourceUrl` + `verifieLe`.
- [ ] La page ne réexplique PAS le format de l'examen (elle lie l'article pilier).
- [ ] Le bloc conversion cite une donnée réelle (nb de centres / ville / distance).
- [ ] Test du filé : si un paragraphe reste vrai en remplaçant le département
      par un autre, il doit sauter.
- [ ] Pas de tarif non sourcé, pas de délai préfectoral chiffré hors bloc first-party.
- [ ] FAQ : au moins 2 questions spécifiques au département, zéro doublon.
- [ ] Pas de page ville en doublon (`/examen-civique/saint-denis` ⛔) : un
      territoire = une page département.

## Architecture

| Fichier | Rôle |
|---|---|
| `lib/reglementation.ts` | Source unique des constantes réglementaires |
| `data/departements/types.ts` | Modèle de données typé |
| `data/departements/_TEMPLATE.ts` | Modèle à copier |
| `data/departements/index.ts` | Registre + garde-fou `canPublish()` |
| `app/(public)/examen-civique/page.tsx` | Index (départements publiés, groupés par région) |
| `app/(public)/examen-civique/[departement]/page.tsx` | Page locale (statique, 404 si non publié) |
| `components/examen-civique/*` | Centres, préfecture, délais, conversion, FAQ |
| `app/sitemap.ts` | Ajoute automatiquement les pages publiées |

SEO : title ≤ 60 car. et description 150-155 car. calculés depuis les données ;
canonical auto-référent ; JSON-LD BreadcrumbList + Course — **pas** de
LocalBusiness/Place (plateforme 100 % digitale) ni FAQPage (rich results
retirés par Google en mai 2026).
