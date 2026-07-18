/**
 * POST /api/lead/eligibilite
 * Capture de lead B2C du test d'éligibilité (leads d'Ugo → Brevo).
 * ⚠️ B2C uniquement : rien à voir avec les leads B2B Papiers Français (Make).
 */

import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/brevo';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      prenom: string;
      nom: string;
      email: string;
      telephone: string;
      demarche?: string;
      verdict?: string;
      reponses?: Record<string, string>;
    };

    if (!body.email || !body.prenom) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 });
    }

    const rows: [string, string][] = [
      ['Prénom', body.prenom],
      ['Nom', body.nom],
      ['Email', body.email],
      ['Téléphone', body.telephone],
      ['Démarche', body.demarche ?? '—'],
      ['Verdict', body.verdict ?? '—'],
    ];
    for (const [k, v] of Object.entries(body.reponses ?? {})) {
      rows.push([`Réponse · ${k}`, v]);
    }
    const tableRows = rows
      .map(([k, v]) => `<tr><td style="padding:6px 0;color:#6b7280;width:150px">${k}</td><td style="padding:6px 0;font-weight:600">${v}</td></tr>`)
      .join('');

    // Notification interne (Ugo — B2C)
    await sendEmail({
      to: [{ email: 'ugotbr.you@gmail.com', name: 'Ugo' }],
      subject: `🎯 Lead éligibilité — ${body.prenom} ${body.nom} (${body.demarche ?? ''})`,
      htmlContent: `<div style="font-family:sans-serif;max-width:540px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
        <h2 style="color:#002395;margin-top:0">Nouveau lead — test d'éligibilité</h2>
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
