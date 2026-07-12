export interface ApercuData {
  slug: string;
  domain: string;
  cabinet_name: string;
  logo_url: string | null;
  logo_type: 'url' | 'monogram';
  monogram: string | null;
  accent_color: string;
}

// ── Slug / domain ─────────────────────────────────────────────────────────────

export function normalizeDomain(input: string): string {
  let d = input.trim().toLowerCase();
  d = d.replace(/^https?:\/\//i, '');
  d = d.replace(/^www\./i, '');
  d = d.split('/')[0].split('?')[0].split('#')[0];
  return d;
}

export function domainToSlug(domain: string): string {
  return domain
    .replace(/\./g, '-')
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function isValidDomain(domain: string): boolean {
  return /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?(\.[a-z]{2,})+$/.test(domain);
}

// ── Cabinet name ──────────────────────────────────────────────────────────────

const SKIP_WORDS = new Set([
  'cabinet', 'me', 'maître', 'maitre', 'scp', 'selarl', 'selas', 'aarpi',
  'avocat', 'avocats', 'law', 'du', 'de', 'des', 'le', 'la', 'les', 'et', '&', '-', '–', '|', '·',
]);

export function extractMonogram(name: string): string {
  const words = name
    .split(/[\s&,|–·]+/)
    .map(w => w.replace(/[^a-zA-ZÀ-ÿ]/g, ''))
    .filter(w => w.length > 1 && !SKIP_WORDS.has(w.toLowerCase()));
  if (words.length === 0) return name.substring(0, 2).toUpperCase();
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export function cleanCabinetName(raw: string, domain: string): string {
  if (!raw?.trim()) {
    const parts = domain.split('.')[0].split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1));
    return parts.join(' ');
  }
  return raw.replace(/\s*[-|–·]\s*.{0,60}$/, '').trim() || domain;
}

// ── WCAG contrast ─────────────────────────────────────────────────────────────

function hexToRgb(hex: string): [number, number, number] | null {
  const h = hex.replace('#', '');
  if (h.length === 3) {
    return [
      parseInt(h[0] + h[0], 16),
      parseInt(h[1] + h[1], 16),
      parseInt(h[2] + h[2], 16),
    ];
  }
  if (h.length === 6) {
    return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)];
  }
  return null;
}

function linearize(c: number): number {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

function luminance(r: number, g: number, b: number): number {
  return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);
}

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(c => Math.max(0, Math.min(255, Math.round(c))).toString(16).padStart(2, '0')).join('');
}

export function ensureWcagContrast(hex: string, fallback = '#002395'): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return fallback;
  let [r, g, b] = rgb;
  const L = luminance(r, g, b);
  const contrast = 1.05 / (L + 0.05); // against white
  if (contrast >= 4.5) return hex;
  // Darken iteratively until WCAG AA (4.5:1)
  for (let i = 0; i < 40; i++) {
    r *= 0.92; g *= 0.92; b *= 0.92;
    if (1.05 / (luminance(r, g, b) + 0.05) >= 4.5) return rgbToHex(r, g, b);
  }
  return fallback;
}

function isNeutral(r: number, g: number, b: number): boolean {
  if (luminance(r, g, b) > 0.70) return true; // near-white
  if (luminance(r, g, b) < 0.005) return true; // near-black
  return Math.max(r, g, b) - Math.min(r, g, b) < 30; // low saturation (gray)
}

// ── HTML extraction ───────────────────────────────────────────────────────────

export function extractSiteName(html: string, domain: string): string {
  const ogName = (
    html.match(/<meta[^>]+property=["']og:site_name["'][^>]+content=["']([^"'<>]{1,80})["']/i) ??
    html.match(/<meta[^>]+content=["']([^"'<>]{1,80})["'][^>]+property=["']og:site_name["']/i)
  )?.[1];
  if (ogName) return cleanCabinetName(ogName, domain);

  const title = html.match(/<title[^>]*>([^<]{1,120})<\/title>/i)?.[1]?.trim();
  if (title) return cleanCabinetName(title, domain);

  return cleanCabinetName('', domain);
}

export function extractThemeColor(html: string): string | null {
  const m = (
    html.match(/<meta[^>]+name=["']theme-color["'][^>]+content=["']([^"']+)["']/i) ??
    html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']theme-color["']/i)
  )?.[1]?.trim();
  if (m && /^#[0-9a-fA-F]{3,8}$/.test(m)) return m.slice(0, 7);
  return null;
}

export function extractDominantColorFromHtml(html: string): string | null {
  const sample = html.slice(0, 60_000);
  const counts = new Map<string, number>();
  const re = /#([0-9a-fA-F]{6})\b/g;
  let m;
  while ((m = re.exec(sample)) !== null) {
    const hex = '#' + m[1].toLowerCase();
    const rgb = hexToRgb(hex);
    if (!rgb || isNeutral(...rgb)) continue;
    counts.set(hex, (counts.get(hex) ?? 0) + 1);
  }
  if (!counts.size) return null;
  return [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
}

export function extractLogoUrl(html: string, domain: string): string | null {
  const resolveUrl = (url: string): string | null => {
    if (!url || url.startsWith('data:')) return null;
    if (url.startsWith('//')) return 'https:' + url;
    if (/^https?:\/\//i.test(url)) return url;
    if (url.startsWith('/')) return `https://${domain}${url}`;
    return `https://${domain}/${url}`;
  };

  // og:image
  const og = (
    html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ??
    html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i)
  )?.[1];
  if (og) { const u = resolveUrl(og.trim()); if (u) return u; }

  // apple-touch-icon
  const ati = (
    html.match(/<link[^>]+rel=["']apple-touch-icon["'][^>]+href=["']([^"']+)["']/i) ??
    html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']apple-touch-icon["']/i)
  )?.[1];
  if (ati) { const u = resolveUrl(ati.trim()); if (u) return u; }

  // link[rel=icon] — prefer PNG
  const icons = [...html.matchAll(/<link[^>]+rel=["'](?:shortcut )?icon["'][^>]+href=["']([^"']+)["'][^>]*/gi)];
  const pngIcon = icons.find(i => !i[1].endsWith('.ico'));
  if (pngIcon) { const u = resolveUrl(pngIcon[1].trim()); if (u) return u; }
  if (icons[0]) { const u = resolveUrl(icons[0][1].trim()); if (u) return u; }

  return null;
}

export function googleFaviconUrl(domain: string): string {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}
