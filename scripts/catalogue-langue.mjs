/**
 * Régénère `data/langue/catalogue.ts` depuis les données réelles.
 *
 * `data/langue/index.ts` pèse 1,87 Mo : 127 leçons et 2 540 exercices avec
 * leurs corrigés. Or la plupart des pages n'ont besoin que du titre d'un
 * module et de son nombre de leçons — quelques kilo-octets. Les faire
 * importer l'index entier revenait à charger et analyser 1,87 Mo de
 * JavaScript à chaque démarrage à froid d'une fonction serveur.
 *
 * Ce script extrait ce catalogue léger. Il tourne au `prebuild`, donc le
 * catalogue ne peut pas se désynchroniser des données.
 *
 *   node scripts/catalogue-langue.mjs
 */

import { execSync } from 'node:child_process';
import { createRequire } from 'node:module';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const racine = process.cwd();
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'catalogue-langue-'));

try {
  // CommonJS : les imports émis par tsc n'ont pas d'extension, ce que le
  // chargeur ESM de Node refuse. `require` s'en accommode.
  execSync(
    `npx tsc data/langue/index.ts --ignoreConfig --outDir "${tmp}" `
    + '--module commonjs --target es2022 --skipLibCheck',
    { cwd: racine, stdio: 'pipe' },
  );

  const requis = createRequire(import.meta.url);
  const { a2Modules, b1Modules, b2Modules, transversalModules, examenModules } =
    requis(path.join(tmp, 'index.js'));

  const groupes = [
    ['a2', a2Modules], ['b1', b1Modules], ['b2', b2Modules],
    ['transversal', transversalModules], ['examens', examenModules],
  ];

  const ligne = (m) =>
    `  { slug: ${JSON.stringify(m.slug)}, titre: ${JSON.stringify(m.title)},\n`
    + `    niveau: ${JSON.stringify(m.level)},\n`
    + `    lecons: [${m.lessons.map((l) => JSON.stringify(l.slug)).join(', ')}] },`;

  const corps = groupes.map(([nom, mods]) =>
    `export const ${nom}Catalogue: ModuleLeger[] = [\n${mods.map(ligne).join('\n')}\n];`
  ).join('\n\n');

  const sortie = `/**
 * Catalogue léger des modules de français : slug, titre, niveau, nombre de
 * leçons. Rien d'autre — surtout pas les exercices.
 *
 * ⚠️ FICHIER GÉNÉRÉ. Ne pas éditer à la main : il est réécrit au \`prebuild\`
 * par \`scripts/catalogue-langue.mjs\` à partir de \`data/langue/index.ts\`.
 *
 * À importer partout où l'on n'a besoin que de compter ou de nommer des
 * modules — progression, tableaux de bord, fiches client. Importer
 * \`@/data/langue\` pour cela tirait 1,87 Mo dans la fonction serveur et se
 * payait en temps processeur à chaque démarrage à froid.
 */

export interface ModuleLeger {
  slug: string;
  titre: string;
  niveau: string;
  /** Slugs des leçons du module, dans l'ordre. Sans leur contenu. */
  lecons: string[];
}

${corps}

export const tousCatalogue: ModuleLeger[] = [
  ...a2Catalogue, ...b1Catalogue, ...b2Catalogue, ...transversalCatalogue,
];

export const totalLeconsLangue = tousCatalogue.reduce((s, m) => s + m.lecons.length, 0);

/** Tous les slugs de leçons de français, tous niveaux confondus. */
export const tousSlugsLecons: string[] = tousCatalogue.flatMap((m) => m.lecons);
`;

  fs.writeFileSync(path.join(racine, 'data/langue/catalogue.ts'), sortie);
  const n = groupes.reduce((s, [, m]) => s + m.length, 0);
  console.log(`catalogue-langue : ${n} modules, ${sortie.length} octets écrits`);
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
