# Images d'en-tête des pages départementales

Une photo par département, affichée dans la bande d'en-tête de
`/examen-civique/[slug]` (composant `HeroDepartement`).

## Convention de nommage
`<slug>.jpg` — le slug exact du département.
Exemples : `rhone.jpg`, `nord.jpg`, `gironde.jpg`, `bouches-du-rhone.jpg`.

## Specs recommandées
- Format paysage, **≥ 1500 px de large** (la bande est large et courte).
- Point d'intérêt plutôt haut/centre (le voile bleu assombrit le bas pour le texte).
- Poids optimisé (< 400 Ko idéalement).
- Photo libre de droits ou dont tu détiens les droits. Renseigner le crédit
  dans le fichier du département (`heroImage.credit`) si la licence l'exige.

## Comment l'activer
1. Dépose le fichier ici (ex. `rhone.jpg`).
2. Dans `data/departements/<slug>.ts`, le champ `heroImage.src` pointe déjà
   vers `/images/departements/<slug>.jpg`.
3. C'est tout — la bande utilise la photo. Sans fichier, elle reste en dégradé
   bleu tricolore (aucune image cassée).
