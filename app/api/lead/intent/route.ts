import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/brevo';
import { createServerSupabaseClient } from '@/lib/supabase-server';

const INTENT_LABELS: Record<string, string> = {
  langue:          'Formation en français (A2/B1/B2)',
  titre:           'Titre de séjour / carte de résident',
  naturalisation:  'Demande de naturalisation',
};

export async function POST(req: NextRequest) {
  try {
    const { intent, contact, contactType } = await req.json();

    if (!intent || !INTENT_LABELS[intent]) {
      return NextResponse.json({ error: 'Intent invalide' }, { status: 400 });
    }

    // Récupère l'utilisateur connecté (si présent)
    let userEmail: string | null = null;
    let userName: string | null = null;
    try {
      const supabase = await createServerSupabaseClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        userEmail = user.email ?? null;
        userName = user.user_metadata?.full_name ?? user.email ?? null;
      }
    } catch { /* non bloquant */ }

    const label = INTENT_LABELS[intent];
    const isLoggedIn = !!userEmail;

    // Email admin
    const htmlContent = `
<div style="font-family:sans-serif;max-width:540px;margin:0 auto;padding:28px;border:1px solid #e5e7eb;border-radius:12px">
  <h2 style="color:#003189;margin-top:0;margin-bottom:20px">
    ${isLoggedIn ? 'Intention utilisateur connecté 🔵' : 'Nouveau lead pop-in 🟢'}
  </h2>
  <table style="width:100%;border-collapse:collapse">
    <tr>
      <td style="padding:10px 0;color:#6b7280;width:160px;vertical-align:top">Besoin identifié</td>
      <td style="padding:10px 0">
        <span style="background:#EEF2FF;color:#3730A3;padding:3px 12px;border-radius:100px;font-size:13px;font-weight:700">
          ${label}
        </span>
      </td>
    </tr>
    ${isLoggedIn ? `
    <tr>
      <td style="padding:10px 0;color:#6b7280;vertical-align:top">Compte</td>
      <td style="padding:10px 0;font-weight:600">
        <a href="mailto:${userEmail}" style="color:#003189">${userEmail}</a>
      </td>
    </tr>` : ''}
    ${contact ? `
    <tr>
      <td style="padding:10px 0;color:#6b7280;vertical-align:top">
        ${contactType === 'phone' ? 'Téléphone' : 'Email'}
      </td>
      <td style="padding:10px 0;font-weight:600">${contact}</td>
    </tr>` : ''}
  </table>
  <hr style="border:none;border-top:1px solid #f1f5f9;margin:20px 0"/>
  <p style="margin:0;font-size:12px;color:#9ca3af">Pop-in intention · maformationcivique.fr</p>
</div>`;

    await sendEmail({
      to: [{ email: 'ugotbr.you@gmail.com', name: 'Ugo' }],
      subject: `[MFC] ${isLoggedIn ? 'Intention' : 'Lead'} — ${label}`,
      htmlContent,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[lead/intent]', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
