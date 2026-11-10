/**
 * Robots refusés à l'entrée.
 *
 * Relevé du pare-feu Vercel sur 24 h : sur ~4 000 requêtes, près de la
 * moitié ne venaient pas de navigateurs. Tencent Cloud 484, un hébergeur
 * indonésien 376, et une seule adresse IP totalisant 376 requêtes sous un
 * identifiant de téléphone Android de 2017 — la signature classique d'un
 * aspirateur de site. Chacune de ces requêtes faisait calculer une page
 * complète : c'est ce temps processeur qui a fait suspendre le compte.
 *
 * Les moteurs de recherche ne sont pas concernés : Google, Bing, Qwant,
 * DuckDuckGo et Apple indexent le site, c'est de là que viennent les
 * inscriptions. Les robots d'aperçu de lien (Facebook, WhatsApp, LinkedIn,
 * Slack) non plus : ils font les vignettes des liens partagés.
 */

/**
 * Comparaison en minuscules, sur fragment d'identifiant.
 * Les ajouts se font ici : une ligne, un commentaire si ce n'est pas évident.
 */
const REFUSES = [
  // ── Moissonneurs pour entraînement de modèles ──────────────────────────
  'gptbot', 'oai-searchbot', 'chatgpt-user', 'ccbot', 'claudebot',
  'anthropic-ai', 'claude-web', 'perplexitybot', 'perplexity-user',
  'bytespider', 'amazonbot', 'applebot-extended', 'meta-externalagent',
  'meta-externalfetcher', 'diffbot', 'omgili', 'omgilibot', 'youbot',
  'cohere-ai', 'imagesiftbot', 'timpibot', 'webzio', 'img2dataset',
  'friendlycrawler', 'petalbot',

  // ── Outils d'analyse SEO : aucun intérêt pour nous, coût réel ──────────
  'ahrefsbot', 'semrushbot', 'mj12bot', 'dotbot', 'dataforseobot',
  'blexbot', 'barkrowler', 'serpstatbot', 'seekportbot', 'zoominfobot',
  'megaindex', 'seokicks', 'sistrix',

  // ── Bibliothèques de script : jamais un visiteur ───────────────────────
  'python-requests', 'python-urllib', 'aiohttp', 'httpx', 'scrapy',
  'go-http-client', 'node-fetch', 'axios/', 'okhttp', 'libwww-perl',
  'java/', 'jakarta', 'apache-httpclient', 'curl/', 'wget/',
  'headlesschrome', 'phantomjs', 'puppeteer', 'playwright',
  'zgrab', 'masscan', 'nmap', 'nuclei',
];

/**
 * Cet appareil précis — Galaxy S8 Active sous Android 7.0 — est l'identité
 * d'emprunt la plus répandue des aspirateurs de site, et c'était ici une
 * seule IP à 376 requêtes par jour. Si un client réel se plaignait d'être
 * bloqué avec un téléphone de 2017, c'est cette ligne qu'il faut retirer.
 */
const APPAREIL_USURPE = 'android 7.0; sm-g892a';

export function estRobotIndesirable(userAgent: string | null): boolean {
  // Un navigateur envoie toujours un identifiant. Son absence signe un script.
  if (!userAgent || userAgent.trim().length < 8) return true;

  const ua = userAgent.toLowerCase();
  if (ua.includes(APPAREIL_USURPE)) return true;
  return REFUSES.some((r) => ua.includes(r));
}

/** Les mêmes, pour le fichier robots.txt : les robots polis s'épargnent le trajet. */
export const ROBOTS_A_ECARTER = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'CCBot', 'ClaudeBot',
  'anthropic-ai', 'Claude-Web', 'PerplexityBot', 'Bytespider', 'Amazonbot',
  'Applebot-Extended', 'Google-Extended', 'Meta-ExternalAgent', 'Diffbot',
  'Omgilibot', 'YouBot', 'cohere-ai', 'ImagesiftBot', 'PetalBot',
  'AhrefsBot', 'SemrushBot', 'MJ12bot', 'DotBot', 'DataForSeoBot',
  'BLEXBot', 'Barkrowler', 'serpstatbot', 'ZoomInfoBot',
];
