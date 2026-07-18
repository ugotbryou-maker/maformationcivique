# Test d'éligibilité — cartographie concurrent + vérification légale

Référence pour construire notre lead magnet. Deux sources :
1. **Concurrent civinat.com/tester-mon-eligibilite** — flux cartographié le 18/07/2026.
2. **Droit en vigueur 2026** — vérifié sur service-public.fr (F2213, F39426) + `lib/reglementation.ts`.

---

## 1. Flux du concurrent (cartographié)

Formulaire linéaire ~8 questions + capture de lead, avec **embranchement selon le titre de séjour**. Auto-avance à la sélection. Résultat = un « Profil » (ex. Profil A — Prêt à déposer).

| # | Question (thème) | Options (valeur interne) | Branche |
|---|---|---|---|
| Q1 | **Titre de séjour actuel** | Carte de résident (`crp`) · CSP renouvellement (`cpp_renou`) · Carte temporaire 1 an (`cst`) · Réfugié/UE/apatride (`autre`) | pilote la suite |
| Q2 | **Durée de séjour régulier** | <2 ans (`lt2`) · 2-4 ans (`2to4`) · 5 ans+ (`5plus`) · Inconnu (`unsure`) | **posée pour crp/cpp_renou ; SAUTÉE pour cst** |
| Q3 | **Niveau de français** | Diplôme FR (`dip`) · Attestation TCF/TEF/DELF B2 <2 ans (`cert`) · B2 sans justificatif (`noproof`) · < B2 (`weak`) | — |
| Q4 | **Casier judiciaire** | Aucune (`clean`) · Sursis/amende/ancienne (`minor`) · Prison ferme ≥6 mois (`prison`) · Incertain (`unsure`) | `prison` = bloquant |
| Q5 | **Obligations fiscales (3 ans)** | À jour (`ok`) · Pas de revenus imposables (`noincome`) · Retard en régul. (`late`) · Pas à jour (`bad`) | — |
| Q6 | **Connaissances civiques** | Bonne (`good`) · Partielle (`partial`) · Limitée (`low`) · Très faible (`none`) | auto-évaluation (funnel) |
| Q7 | **Ressources / revenus** | Stables (`stable`) · Moyens (`mid`) · Retraité (`retired`) · Faibles (`low`) | — |
| Q8 | **Liens avec la France** | Conjoint/enfants FR (`...`) · Famille/asso (`...`) · Pro (`...`) · Peu (`...`) | valorisant, non bloquant |
| — | **Capture lead** | Prénom · Nom · Email · Téléphone | **gate du résultat** |
| — | **Résultat** | Profil + checklist récap + « prochaines étapes » + CTA inscription | — |

**Exemple de résultat capturé** (crp + 5plus + dip + clean + ok + partial…) :
> ✅ **Profil A — Prêt(e) à déposer.** « Vous pouvez déposer votre demande de naturalisation. »
> Récap : 5 ans de séjour ✓ · Niveau B2 justifié ✓ · Examen civique validé ✓ · Fiscalité à jour ✓ · Culture civique à renforcer ⚠
> Prochaines étapes : 1. Constituer le dossier · 2. Préparer l'entretien (80% QCM) · 4. Déposer en préfecture.

### Défauts du concurrent à NE PAS reproduire
- **Numérotation des étapes buggée** : 1, 2, **4** (le 3 saute) — bug de template.
- **Résultat gated** derrière la capture de lead : bonne mécanique, mais UX un peu frustrante — on affichera un aperçu + le détail après capture.
- Formulaire **100 % centré naturalisation** ; ne traite pas vraiment le TDS. Or Ugo veut **TDS ET naturalisation**.

---

## 2. Vérification légale (sources officielles 2026)

Source : service-public.fr **F2213** (naturalisation par décret), **F39426** (examen civique) + `lib/reglementation.ts`.

### Naturalisation par décret
- **Durée de résidence (stage) : 5 ans** de résidence régulière.
  - **Réduit à 2 ans** : diplôme d'un établissement supérieur français (2 ans d'études) · intégration exceptionnelle · services importants rendus à la France.
  - **Aucune durée** : réfugié statutaire · ressortissant d'un pays francophone (langue maternelle française) · 5 ans+ de scolarité dans un établissement francophone · engagement dans l'armée française · services exceptionnels.
- **Langue : B2 (oral ET écrit)** depuis le **1ᵉʳ janvier 2026** (avant : B1). Justifié par diplôme FR ou test certifié récent (TCF IRN, TEF Naturalisation, DELF B2). → `NIVEAUX_LANGUE.naturalisation`.
- **Examen civique** + **entretien d'assimilation** obligatoires. QCM civique : seuil 32/40 = **80%**. → `EXAMEN_CIVIQUE`.
- **Casier** : condamnation à **≥ 6 mois d'emprisonnement ferme** = indignité (rejet), sauf réhabilitation/amnistie. Idem crimes/atteintes aux intérêts fondamentaux.
- **Fiscalité** : être à jour ; ressources stables et suffisantes.
- Coût : timbre fiscal **255 €**.

### Niveaux de langue par démarche (réforme 2026) — `NIVEAUX_LANGUE`
- **Carte de séjour pluriannuelle (CSP)** : **A2**
- **Carte de résident** : **B1**
- **Naturalisation** : **B2**

⚠️ **Règle n°2 du projet** : ces niveaux/seuils ne sont JAMAIS écrits en dur dans le formulaire — ils viennent de `lib/reglementation.ts`.

---

## 3. Notre version (plan de build)

Améliorations vs concurrent :
- Couvre **3 démarches** dès la Q1 : CSP · Carte de résident · Naturalisation (au lieu de « natu » seule).
- Niveau de langue exigé **calculé selon la démarche** (A2/B1/B2 depuis `reglementation.ts`).
- **Résultat honnête** : aperçu immédiat du verdict + détail/checklist ; capture de lead pour recevoir le plan par email (B2C → Brevo, PAS pour les leads B2B PF).
- Étapes correctement numérotées, pas de doublon.
- CTA vers `/examen` (examen blanc) et `/modulesciviques` / `/moduleslinguistiques`.
- ⛔ Disclaimer : outil informatif, ne vaut pas décision préfectorale.

Fichiers :
- `lib/eligibilite.ts` — arbre de questions + logique de verdict (importe `reglementation.ts`).
- `app/(public)/test-eligibilite/page.tsx` — parcours multi-étapes (client).
- `app/api/lead/eligibilite/route.ts` — capture lead B2C → Brevo.
