#!/usr/bin/env node
/**
 * Migration Sanity — correction des liens internes cassés
 *
 * Problème : des articles ont des liens Portable Text avec href = "https://claude.ai/..."
 * au lieu de "https://www.maformationcivique.fr/...". De plus, /modules doit devenir
 * /modulesciviques (la route a été renommée).
 *
 * Usage :
 *   SANITY_API_TOKEN=sk-... node scripts/fix-sanity-links.mjs
 *   # ou en dry-run (aucune écriture) :
 *   DRY_RUN=1 node scripts/fix-sanity-links.mjs
 *
 * Le token doit avoir la permission "Editor" (write) sur le dataset production.
 * Créez-le sur https://www.sanity.io/manage → projet eqz8pjt2 → API → Tokens.
 */

import { createClient } from 'next-sanity';

const PROJECT_ID = 'eqz8pjt2';
const DATASET    = 'production';
const SITE       = 'https://www.maformationcivique.fr';
const DRY_RUN    = process.env.DRY_RUN === '1';

const TOKEN = process.env.SANITY_API_TOKEN;
if (!TOKEN) {
  console.error('❌  SANITY_API_TOKEN manquant. Exportez la variable avant de lancer le script.');
  process.exit(1);
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset:   DATASET,
  apiVersion: '2024-01-01',
  token:     TOKEN,
  useCdn:    false,
});

// Chemin à remapper (/modules → /modulesciviques)
const PATH_REMAP = { '/modules': '/modulesciviques' };

function fixPath(p) {
  for (const [from, to] of Object.entries(PATH_REMAP)) {
    if (p === from || p.startsWith(from + '/')) return to + p.slice(from.length);
  }
  return p;
}

function fixHref(href) {
  if (!href) return href;
  // https://claude.ai/xxx → https://www.maformationcivique.fr/xxx (+ correction de chemin)
  if (/^https?:\/\/claude\.ai/.test(href)) {
    try {
      const url = new URL(href);
      return SITE + fixPath(url.pathname) + url.search + url.hash;
    } catch { return SITE; }
  }
  // Liens relatifs /modules → /modulesciviques
  if (href.startsWith('/')) return fixPath(href);
  return href;
}

function needsFix(href) {
  return href && (
    /^https?:\/\/claude\.ai/.test(href) ||
    href === '/modules' ||
    href.startsWith('/modules/')
  );
}

/**
 * Parcourt récursivement les blocs Portable Text et corrige les hrefs.
 * Retourne true si au moins une valeur a été modifiée.
 */
function fixBlocks(blocks) {
  let changed = false;
  if (!Array.isArray(blocks)) return changed;

  for (const block of blocks) {
    if (!block || block._type !== 'block') continue;
    for (const span of block.children ?? []) {
      for (const markKey of span.marks ?? []) {
        const markDef = (block.markDefs ?? []).find(m => m._key === markKey);
        if (markDef && markDef._type === 'link' && needsFix(markDef.href)) {
          const before = markDef.href;
          markDef.href = fixHref(markDef.href);
          console.log(`  ✏️  ${before}  →  ${markDef.href}`);
          changed = true;
        }
      }
    }
  }
  return changed;
}

async function run() {
  console.log(`\n🔍  Chargement des articles (dataset: ${DATASET})…\n`);

  const posts = await client.fetch(`*[_type == "post"]{ _id, title, slug, body }`);
  console.log(`   ${posts.length} article(s) trouvé(s).`);

  let totalFixed = 0;
  let docsFixed  = 0;

  for (const post of posts) {
    const body = post.body ?? [];
    const originalJson = JSON.stringify(body);

    // Travailler sur une copie profonde
    const bodyCopy = JSON.parse(originalJson);
    const changed = fixBlocks(bodyCopy);

    if (!changed) continue;

    docsFixed++;
    const linksFixed = (JSON.stringify(bodyCopy).match(/maformationcivique/g) ?? []).length
                     - (originalJson.match(/maformationcivique/g) ?? []).length;
    totalFixed += Math.max(linksFixed, 1);

    console.log(`\n📄  "${post.title}" (${post._id})`);

    if (!DRY_RUN) {
      await client.patch(post._id).set({ body: bodyCopy }).commit();
      console.log(`   ✅  Sauvegardé.`);
    } else {
      console.log(`   🏃  DRY_RUN — aucune écriture.`);
    }
  }

  console.log(`\n${'─'.repeat(50)}`);
  if (DRY_RUN) {
    console.log(`DRY_RUN actif — ${docsFixed} document(s) seraient modifiés.`);
  } else {
    console.log(`✅  Migration terminée : ${docsFixed} document(s) mis à jour, ~${totalFixed} lien(s) corrigé(s).`);
  }

  if (docsFixed === 0) {
    console.log('ℹ️  Aucun lien cassé trouvé dans le contenu Sanity.');
  }
}

run().catch(err => {
  console.error('❌  Erreur :', err.message);
  process.exit(1);
});
