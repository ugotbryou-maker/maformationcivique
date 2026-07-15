import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/brevo';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      source: 'test-civique' | 'test-langue';
      nom: string;
      prenom: string;
      email: string;
      telephone: string;
      situationPro?: string;
      score?: string;
      niveau?: string;
    };

    const sourceLabel = body.source === 'test-civique' ? '🏛️ Test civique' : '🇫🇷 Test linguistique';

    const rows: [string, string][] = [
      ['Prénom', body.prenom],
      ['Nom', body.nom],
      ['Email', body.email],
      ['Téléphone', body.telephone],
    ];
    if (body.situationPro) rows.push(['Situation pro', body.situationPro]);
    if (body.score)        rows.push(['Score', body.score]);
    if (body.niveau)       rows.push(['Niveau estimé', body.niveau]);

    const tableRows = rows
      .map(([k, v]) => `<tr><td style="padding:7px 0;color:#6b7280;width:140px">${k}</td><td style="padding:7px 0;font-weight:600">${v}</td></tr>`)
      .join('');

    await sendEmail({
      to: [
        { email: 'ugotbr.you@gmail.com',         name: 'Ugo' },
        { email: 'contact@maformationcivique.fr', name: 'Contact MFC' },
      ],
      subject: `🎯 Nouveau lead PF — ${body.prenom} ${body.nom} (${sourceLabel})`,
      htmlContent: `<div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
        <h2 style="color:#002395;margin-top:0">Nouveau lead Papiers Français ${sourceLabel}</h2>
        <table style="width:100%;border-collapse:collapse">${tableRows}</table>
        <p style="font-size:12px;color:#9ca3af;margin-top:20px">maformationcivique.fr — ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}</p>
      </div>`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
