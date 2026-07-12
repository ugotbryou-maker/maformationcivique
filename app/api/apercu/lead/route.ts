export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createServiceRoleClient } from '@/lib/supabase-server';
import { sendEmail } from '@/lib/brevo';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      slug?: string;
      domain?: string;
      cabinet_name?: string;
      lead_name?: string;
      lead_email?: string;
      lead_phone?: string;
      consented_at?: string;
    };

    const { slug, domain, cabinet_name, lead_name, lead_email, lead_phone, consented_at } = body;

    if (!slug || !lead_name?.trim()) {
      return NextResponse.json({ error: 'Données manquantes' }, { status: 400 });
    }
    if (!lead_email?.trim() && !lead_phone?.trim()) {
      return NextResponse.json({ error: 'Email ou téléphone requis' }, { status: 400 });
    }
    if (!consented_at) {
      return NextResponse.json({ error: 'Consentement requis' }, { status: 400 });
    }

    const supabase = createServiceRoleClient();

    await supabase.from('apercu_leads').insert({
      apercu_slug:  slug,
      domain:       domain ?? '',
      cabinet_name: cabinet_name ?? '',
      lead_name:    lead_name.trim(),
      lead_email:   lead_email?.trim() || null,
      lead_phone:   lead_phone?.trim() || null,
      consented_at,
    });

    // Notification email
    try {
      await sendEmail({
        to: [{ email: 'ugotbr.you@gmail.com', name: 'Ugo' }],
        subject: `🎯 Nouveau lead aperçu — ${cabinet_name ?? domain}`,
        htmlContent: `<div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
          <h2 style="color:#002395;margin-top:0">Nouveau lead partenaire 🏛️</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#6b7280;width:140px">Cabinet</td><td style="padding:8px 0;font-weight:600">${cabinet_name ?? '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Domaine</td><td style="padding:8px 0"><a href="https://${domain}" style="color:#002395">${domain}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Contact</td><td style="padding:8px 0;font-weight:600">${lead_name}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0">${lead_email ?? '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Téléphone</td><td style="padding:8px 0">${lead_phone ?? '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Consentement</td><td style="padding:8px 0">${new Date(consented_at).toLocaleString('fr-FR')}</td></tr>
          </table>
          <div style="margin-top:20px;padding:12px;background:#F0F7FF;border-radius:8px">
            <a href="https://www.maformationcivique.fr/apercu/${slug}" style="color:#002395;font-weight:600">Voir l'aperçu →</a>
          </div>
          <p style="font-size:13px;color:#9ca3af;margin-top:16px">maformationcivique.fr</p>
        </div>`,
      });
    } catch (emailErr) {
      console.error('[apercu/lead] email notification failed:', emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[apercu/lead]', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
