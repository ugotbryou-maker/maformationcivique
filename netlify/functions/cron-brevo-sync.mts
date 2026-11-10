/**
 * Synchronisation Brevo quotidienne — reprise du cron de vercel.json.
 *
 * Elle porte aussi le réalignement des accès cabinet : sans elle, un membre
 * dont le cabinet change de formule garde son ancien accès.
 *
 * L'horaire est déclaré ici, pas dans l'interface Netlify, pour qu'il reste
 * dans le dépôt et se déploie avec le code.
 */

import type { Config } from '@netlify/functions';

export default async function () {
  const base = process.env.URL ?? 'https://www.maformationcivique.fr';
  const reponse = await fetch(`${base}/api/brevo/sync`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.CRON_SECRET ?? ''}` },
  });
  const corps = await reponse.text();
  console.log(`[cron brevo-sync] ${reponse.status} — ${corps.slice(0, 300)}`);
  if (!reponse.ok) throw new Error(`brevo/sync a répondu ${reponse.status}`);
}

export const config: Config = { schedule: '0 4 * * *' };
