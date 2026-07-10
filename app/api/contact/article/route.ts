import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/brevo';

export async function POST(req: NextRequest) {
  try {
    const { prenom, email, demarche, message } = await req.json();

    if (!prenom || !email || !demarche || !message) {
      return NextResponse.json({ error: 'Champs manquants' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
    }

    const demarcheLabels: Record<string, string> = {
      titre: 'Titre de séjour',
      resident: 'Carte de résident',
      naturalisation: 'Naturalisation',
      autre: 'Autre',
    };

    const htmlContent = `
<div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:28px;border:1px solid #e5e7eb;border-radius:12px">
  <h2 style="color:#003189;margin-top:0;margin-bottom:20px">Nouvelle demande d'aide via blog 📩</h2>
  <table style="width:100%;border-collapse:collapse">
    <tr><td style="padding:10px 0;color:#6b7280;width:140px;vertical-align:top">Prénom</td><td style="padding:10px 0;font-weight:600">${prenom}</td></tr>
    <tr><td style="padding:10px 0;color:#6b7280;vertical-align:top">Email</td><td style="padding:10px 0;font-weight:600"><a href="mailto:${email}" style="color:#003189">${email}</a></td></tr>
    <tr><td style="padding:10px 0;color:#6b7280;vertical-align:top">Démarche</td><td style="padding:10px 0"><span style="background:#EEF2FF;color:#3730A3;padding:3px 10px;border-radius:100px;font-size:13px;font-weight:600">${demarcheLabels[demarche] ?? demarche}</span></td></tr>
    <tr><td style="padding:10px 0;color:#6b7280;vertical-align:top">Message</td><td style="padding:10px 0;line-height:1.65;color:#374151">${message.replace(/\n/g, '<br/>')}</td></tr>
  </table>
  <hr style="border:none;border-top:1px solid #f1f5f9;margin:20px 0"/>
  <p style="margin:0;font-size:12px;color:#9ca3af">Reçu depuis maformationcivique.fr · Blog</p>
</div>`;

    await sendEmail({
      to: [{ email: 'ugotbr.you@gmail.com', name: 'Ugo' }],
      subject: `[MFC] Demande d'aide — ${demarcheLabels[demarche] ?? demarche} · ${prenom}`,
      htmlContent,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact/article]', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
