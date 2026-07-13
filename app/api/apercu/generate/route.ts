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
import { sendEmail } from '@/lib/brevo';

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
        // Notify on every request (cache hit) — fire-and-forget
        sendEmail({
          to: [
            { email: 'ugotbr.you@gmail.com',          name: 'Ugo' },
            { email: 'contact@maformationcivique.fr',  name: 'Contact MFC' },
          ],
          subject: `👀 Aperçu consulté — ${cached.cabinet_name} (${domain})`,
          htmlContent: `<div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
            <h2 style="color:#002395;margin-top:0">Prospect — aperçu reconsulté 🏛️</h2>
            <p style="color:#374151">Un cabinet a de nouveau consulté son aperçu personnalisé :</p>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#6b7280;width:120px">Cabinet</td><td style="padding:8px 0;font-weight:600">${cached.cabinet_name}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280">Domaine</td><td style="padding:8px 0"><a href="https://${domain}" style="color:#002395">${domain}</a></td></tr>
            </table>
            <div style="margin-top:20px;padding:12px;background:#F0F7FF;border-radius:8px">
              <a href="https://www.maformationcivique.fr/apercu/${slug}" style="color:#002395;font-weight:600">Voir l&apos;aperçu →</a>
            </div>
            <p style="font-size:13px;color:#9ca3af;margin-top:16px">maformationcivique.fr</p>
          </div>`,
        }).catch((e) => console.error('[apercu/generate] email (cache hit) failed:', e));

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

    // ── Notify on new generation (not cache hits) ─────────────────────────────
    try {
      await sendEmail({
        to: [
          { email: 'ugotbr.you@gmail.com',          name: 'Ugo' },
          { email: 'contact@maformationcivique.fr',  name: 'Contact MFC' },
        ],
        subject: `👀 Aperçu généré — ${cabinet_name} (${domain})`,
        htmlContent: `<div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
          <h2 style="color:#002395;margin-top:0">Nouveau prospect — aperçu généré 🏛️</h2>
          <p style="color:#374151">Un cabinet a généré son aperçu personnalisé :</p>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#6b7280;width:120px">Cabinet</td><td style="padding:8px 0;font-weight:600">${cabinet_name}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Domaine</td><td style="padding:8px 0"><a href="https://${domain}" style="color:#002395">${domain}</a></td></tr>
          </table>
          <div style="margin-top:20px;padding:12px;background:#F0F7FF;border-radius:8px">
            <a href="https://www.maformationcivique.fr/apercu/${slug}" style="color:#002395;font-weight:600">Voir l&apos;aperçu →</a>
          </div>
          <p style="font-size:13px;color:#9ca3af;margin-top:16px">maformationcivique.fr</p>
        </div>`,
      });
    } catch (emailErr) {
      console.error('[apercu/generate] email notification failed:', emailErr);
    }

    return NextResponse.json(payload);
  } catch (err) {
    console.error('[apercu/generate]', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
