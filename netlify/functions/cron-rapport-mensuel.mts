/**
 * Rapport mensuel aux cabinets, le 1er du mois à 18 h — reprise du cron de
 * vercel.json.
 */

import type { Config } from '@netlify/functions';

export default async function () {
  const base = process.env.URL ?? 'https://www.maformationcivique.fr';
  const reponse = await fetch(`${base}/api/cabinet/rapport-mensuel`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.CRON_SECRET ?? ''}` },
  });
  const corps = await reponse.text();
  console.log(`[cron rapport-mensuel] ${reponse.status} — ${corps.slice(0, 300)}`);
  if (!reponse.ok) throw new Error(`rapport-mensuel a répondu ${reponse.status}`);
}

export const config: Config = { schedule: '0 18 1 * *' };
