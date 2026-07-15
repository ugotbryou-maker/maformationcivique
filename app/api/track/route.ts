import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/brevo';

export async function POST(req: NextRequest) {
  try {
    const { event, label, data } = (await req.json()) as {
      event: string;
      label?: string;
      data?: Record<string, string>;
    };

    const rows = data
      ? Object.entries(data)
          .map(([k, v]) => `<tr><td style="padding:6px 0;color:#6b7280;width:140px">${k}</td><td style="padding:6px 0;font-weight:600">${v}</td></tr>`)
          .join('')
      : '';

    sendEmail({
      to: [{ email: 'ugotbr.you@gmail.com', name: 'Ugo' }],
      subject: `🔔 ${label ?? event}`,
      htmlContent: `<div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
        <h2 style="color:#002395;margin-top:0">${label ?? event}</h2>
        ${rows ? `<table style="width:100%;border-collapse:collapse">${rows}</table>` : ''}
        <p style="font-size:12px;color:#9ca3af;margin-top:16px">maformationcivique.fr — ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}</p>
      </div>`,
    }).catch(() => {});

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
