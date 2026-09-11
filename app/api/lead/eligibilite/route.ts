/**
 * POST /api/lead/eligibilite
 * Capture de lead B2C du test d'éligibilité (leads d'Ugo → Brevo).
 * ⚠️ B2C uniquement : rien à voir avec les leads B2B Papiers Français (Make).
 */

import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/brevo';
import { createServiceRoleClient } from '@/lib/supabase-server';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      prenom: string;
      nom: string;
      email: string;
      telephone: string;
      demarche?: string;
      verdict?: string;
      routage?: string;
      qualification?: string;
      reponses?: Record<string, string>;
      consent?: boolean;
    };

    if (!body.email || !body.prenom) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 });
    }

    // ── Persistance ────────────────────────────────────────────────────
    // Le lead est d'abord écrit en base : sans cela, un prospect qui remplit
    // le formulaire ne laisse aucune trace exploitable, et les métadonnées
    // techniques (IP, provenance) sont perdues à jamais.
    //
    // L'écriture ne doit jamais empêcher la notification : si la base est
    // indisponible, on journalise et l'e-mail part quand même.
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      req.headers.get('x-real-ip') ??
      null;
    const referer = req.headers.get('referer');
    const url = new URL(req.url);

    let leadId: string | null = null;
    try {
      const admin = createServiceRoleClient();
      const { data, error } = await admin
        .from('leads_eligibilite')
        .insert({
          prenom: body.prenom,
          nom: body.nom,
          email: body.email?.toLowerCase().trim(),
          telephone: body.telephone,
          demarche: body.demarche ?? null,
          verdict: body.verdict ?? null,
          routage: body.routage ?? null,
          qualification: body.qualification ?? null,
          reponses: body.reponses ?? null,
          consent: body.consent ?? false,
          consent_at: body.consent ? new Date().toISOString() : null,
          ip,
          user_agent: req.headers.get('user-agent'),
          referer,
          utm_source: url.searchParams.get('utm_source'),
          utm_medium: url.searchParams.get('utm_medium'),
          utm_campaign: url.searchParams.get('utm_campaign'),
        })
        .select('id')
        .single();

      if (error) {
        console.error(
          '[lead/eligibilite] ÉCHEC ENREGISTREMENT — lead reçu mais non persisté.',
          JSON.stringify({ email: body.email, ip, dbError: error.message }),
        );
      } else {
        leadId = data?.id ?? null;
      }
    } catch (err) {
      console.error('[lead/eligibilite] EXCEPTION à l\'enregistrement', JSON.stringify({ email: body.email, ip }), err);
    }

    const rows: [string, string][] = [
      ['Prénom', body.prenom],
      ['Nom', body.nom],
      ['Email', body.email],
      ['Téléphone', body.telephone],
      ['Démarche', body.demarche ?? '—'],
      ['Verdict', body.verdict ?? '—'],
      ['Adresse IP', ip ?? '—'],
      ['Provenance', referer ?? '—'],
      ['Fiche', leadId ? `https://www.maformationcivique.fr/admin/leads` : 'non enregistrée en base'],
    ];
    for (const [k, v] of Object.entries(body.reponses ?? {})) {
      rows.push([`Réponse · ${k}`, v]);
    }
    const tableRows = rows
      .map(([k, v]) => `<tr><td style="padding:6px 0;color:#6b7280;width:150px">${k}</td><td style="padding:6px 0;font-weight:600">${v}</td></tr>`)
      .join('');

    // Routage : avocat = urgent (délais de recours courts), sinon formation.
    const versAvocat = body.routage === 'avocat';
    const prefixe = versAvocat ? '⚖️ URGENT · AVOCAT' : '🎯 Lead';
    const bandeau = body.qualification
      ? `<div style="background:${versAvocat ? '#FEF2F2' : '#ECFDF5'};border:1px solid ${versAvocat ? '#FECACA' : '#A7F3D0'};border-radius:8px;padding:12px 16px;margin-bottom:16px">
           <strong style="color:${versAvocat ? '#B91C1C' : '#047857'}">${versAvocat ? 'À transmettre à l\'avocat partenaire' : 'Qualification'}</strong><br>
           <span style="color:#374151">${body.qualification}</span>
         </div>`
      : '';

    // Notification interne (Ugo — B2C)
    await sendEmail({
      to: [{ email: 'ugotbr.you@gmail.com', name: 'Ugo' }],
      subject: `${prefixe} — ${body.prenom} ${body.nom} (${body.demarche ?? ''})`,
      htmlContent: `<div style="font-family:sans-serif;max-width:540px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
        <h2 style="color:#002395;margin-top:0">Nouveau lead — test d'éligibilité</h2>
        ${bandeau}
        <table style="width:100%;border-collapse:collapse">${tableRows}</table>
        <p style="font-size:12px;color:#9ca3af;margin-top:20px">maformationcivique.fr — ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}</p>
      </div>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[lead/eligibilite]', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
