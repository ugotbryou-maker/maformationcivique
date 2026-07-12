export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createServiceRoleClient } from '@/lib/supabase-server';
import {
  normalizeDomain,
  domainToSlug,
  isValidDomain,
  extractThemeColor,
  extractDominantColorFromHtml,
  extractLogoUrl,
  extractSiteName,
  googleFaviconUrl,
  ensureWcagContrast,
  extractMonogram,
} from '@/lib/apercu-utils';

const DEFAULT_ACCENT = '#002395';
const CACHE_TTL_MS   = 7 * 24 * 60 * 60 * 1000; // 7 jours

export async function POST(req: NextRequest) {
  try {
    const { url: rawUrl } = (await req.json()) as { url?: string };
    if (!rawUrl) return NextResponse.json({ error: 'URL manquante' }, { status: 400 });

    const domain = normalizeDomain(rawUrl);
    if (!isValidDomain(domain)) {
      return NextResponse.json(
        { error: 'Adresse invalide. Exemple : cabinet-dupont.fr' },
        { status: 400 },
      );
    }

    const slug = domainToSlug(domain);
    const supabase = createServiceRoleClient();

    // ── Cache ─────────────────────────────────────────────────────────────────
    const { data: cached } = await supabase
      .from('apercu_cache')
      .select('*')
      .eq('slug', slug)
      .single();

    if (cached) {
      const age = Date.now() - new Date(cached.updated_at as string).getTime();
      if (age < CACHE_TTL_MS) {
        return NextResponse.json({ slug, ...cached });
      }
    }

    // ── Fetch site ────────────────────────────────────────────────────────────
    let html = '';
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 4_000);
      const res = await fetch(`https://${domain}`, {
        signal: ctrl.signal,
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; maformationcivique-preview/1.0)' },
      });
      clearTimeout(timer);
      if (res.ok) html = await res.text();
    } catch { /* site injoignable → fallback */ }

    // ── Extract ───────────────────────────────────────────────────────────────
    const cabinet_name = extractSiteName(html, domain);
    const rawLogo      = html ? extractLogoUrl(html, domain) : null;
    const logo_url     = rawLogo ?? googleFaviconUrl(domain);
    const logo_type: 'url' | 'monogram' = logo_url ? 'url' : 'monogram';
    const monogram     = logo_type === 'monogram' ? extractMonogram(cabinet_name) : null;

    const themeColor    = html ? extractThemeColor(html) : null;
    const dominantColor = html ? extractDominantColorFromHtml(html) : null;
    const rawAccent     = themeColor ?? dominantColor ?? DEFAULT_ACCENT;
    const accent_color  = ensureWcagContrast(rawAccent, DEFAULT_ACCENT);

    const payload = {
      slug,
      domain,
      cabinet_name,
      logo_url,
      logo_type,
      monogram,
      accent_color,
      updated_at: new Date().toISOString(),
    };

    // ── Upsert cache ──────────────────────────────────────────────────────────
    await supabase
      .from('apercu_cache')
      .upsert(payload, { onConflict: 'slug' });

    return NextResponse.json(payload);
  } catch (err) {
    console.error('[apercu/generate]', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
