/**
 * Brevo (ex-Sendinblue) — envoi d'emails transactionnels
 * Docs: https://developers.brevo.com/reference/sendtransacemail
 *
 * Nécessite: BREVO_API_KEY dans les variables d'environnement
 */

interface EmailRecipient {
  email: string;
  name?: string;
}

interface SendEmailOptions {
  to: EmailRecipient[];
  subject: string;
  htmlContent: string;
  from?: EmailRecipient;
}

export async function sendEmail(options: SendEmailOptions): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    throw new Error('BREVO_API_KEY not set — email non envoyé');
  }

  const payload = {
    sender: options.from ?? {
      name: 'Ma Formation Civique',
      email: 'contact@maformationcivique.fr',
    },
    to: options.to,
    subject: options.subject,
    htmlContent: options.htmlContent,
  };

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'api-key': apiKey,
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Brevo ${res.status}: ${text}`);
  }
}

// ─── Templates ──────────────────────────────────────────────────────────────

export function resetPasswordTemplate(resetLink: string): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#f8f9fb;font-family:Arial,sans-serif;">
  <div style="max-width:520px;margin:40px auto;background:#fff;border-radius:16px;border:1px solid #e5e7eb;overflow:hidden;">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#002395 0%,#CC1A1A 100%);padding:28px 32px;text-align:center;">
      <p style="margin:0;font-size:22px;font-weight:700;color:#fff;letter-spacing:-0.3px;">
        🇫🇷 maformationcivique.fr
      </p>
    </div>

    <!-- Body -->
    <div style="padding:36px 32px;">
      <h1 style="margin:0 0 16px;font-size:20px;font-weight:600;color:#111827;">
        Réinitialisation de votre mot de passe
      </h1>
      <p style="margin:0 0 24px;color:#6b7280;line-height:1.65;font-size:15px;">
        Vous avez demandé à réinitialiser votre mot de passe. Cliquez sur le bouton ci-dessous — le lien est valable <strong>1 heure</strong>.
      </p>

      <!-- CTA -->
      <div style="text-align:center;margin:32px 0;">
        <a href="${resetLink}"
           style="display:inline-block;padding:14px 32px;background:linear-gradient(135deg,#002395,#CC1A1A);color:#fff;text-decoration:none;border-radius:100px;font-weight:600;font-size:15px;">
          Réinitialiser mon mot de passe →
        </a>
      </div>

      <p style="margin:0;color:#9ca3af;font-size:13px;line-height:1.6;">
        Si vous n'avez pas fait cette demande, ignorez simplement cet email. Votre mot de passe ne sera pas modifié.
      </p>
    </div>

    <!-- Footer -->
    <div style="padding:20px 32px;border-top:1px solid #f3f4f6;text-align:center;">
      <p style="margin:0;color:#d1d5db;font-size:12px;">
        maformationcivique.fr · La préparation au test civique en France
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

export function cabinetInviteTemplate(cabinetName: string, inviteLink: string, role: 'admin' | 'member'): string {
  const intro = role === 'admin'
    ? `<strong>${cabinetName}</strong> a été enregistré comme partenaire de maformationcivique.fr. Vous avez été désigné(e) administrateur de l'espace cabinet : vous pourrez y inviter vos clients et suivre leur progression.`
    : `<strong>${cabinetName}</strong> vous offre un accès Premium complet à maformationcivique.fr pour préparer votre examen civique.`;

  const cta = role === 'admin'
    ? 'Créer mon accès administrateur →'
    : 'Créer mon compte Premium →';

  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#f8f9fb;font-family:Arial,sans-serif;">
  <div style="max-width:520px;margin:40px auto;background:#fff;border-radius:16px;border:1px solid #e5e7eb;overflow:hidden;">

    <div style="background:linear-gradient(135deg,#002395 0%,#CC1A1A 100%);padding:28px 32px;text-align:center;">
      <p style="margin:0;font-size:22px;font-weight:700;color:#fff;">🇫🇷 maformationcivique.fr</p>
    </div>

    <div style="padding:36px 32px;">
      <h1 style="margin:0 0 16px;font-size:20px;font-weight:600;color:#111827;">
        Vous êtes invité(e) sur maformationcivique.fr
      </h1>
      <p style="margin:0 0 24px;color:#6b7280;line-height:1.65;font-size:15px;">
        ${intro}
      </p>

      <div style="text-align:center;margin:32px 0;">
        <a href="${inviteLink}"
           style="display:inline-block;padding:14px 32px;background:linear-gradient(135deg,#002395,#CC1A1A);color:#fff;text-decoration:none;border-radius:100px;font-weight:600;font-size:15px;">
          ${cta}
        </a>
      </div>

      <p style="margin:0;color:#9ca3af;font-size:13px;line-height:1.6;">
        Ce lien est valable 30 jours. Si vous ne vous attendiez pas à cet email, vous pouvez l'ignorer.
      </p>
    </div>

    <div style="padding:20px 32px;border-top:1px solid #f3f4f6;text-align:center;">
      <p style="margin:0;color:#d1d5db;font-size:12px;">
        maformationcivique.fr · La préparation au test civique en France
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

export function welcomeEmailTemplate(name: string): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#f8f9fb;font-family:Arial,sans-serif;">
  <div style="max-width:520px;margin:40px auto;background:#fff;border-radius:16px;border:1px solid #e5e7eb;overflow:hidden;">

    <div style="background:linear-gradient(135deg,#002395 0%,#CC1A1A 100%);padding:28px 32px;text-align:center;">
      <p style="margin:0;font-size:22px;font-weight:700;color:#fff;">🇫🇷 maformationcivique.fr</p>
    </div>

    <div style="padding:36px 32px;">
      <h1 style="margin:0 0 16px;font-size:20px;font-weight:600;color:#111827;">
        Bienvenue ${name} ! 🎉
      </h1>
      <p style="margin:0 0 16px;color:#6b7280;line-height:1.65;font-size:15px;">
        Votre compte est créé. Vous avez accès gratuitement au <strong>Module 1 — La République française</strong> et à 20 questions de quiz.
      </p>
      <p style="margin:0 0 24px;color:#6b7280;line-height:1.65;font-size:15px;">
        Pour accéder à tous les modules et préparer votre examen au mieux, passez à l'offre Premium.
      </p>
      <div style="text-align:center;margin:32px 0;">
        <a href="https://maformationcivique.fr/dashboard"
           style="display:inline-block;padding:14px 32px;background:linear-gradient(135deg,#002395,#CC1A1A);color:#fff;text-decoration:none;border-radius:100px;font-weight:600;font-size:15px;">
          Commencer ma formation →
        </a>
      </div>
    </div>

    <div style="padding:20px 32px;border-top:1px solid #f3f4f6;text-align:center;">
      <p style="margin:0;color:#d1d5db;font-size:12px;">
        maformationcivique.fr · La préparation au test civique en France
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}
