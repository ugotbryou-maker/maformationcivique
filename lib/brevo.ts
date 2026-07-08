/**
 * Brevo (ex-Sendinblue) — envoi d'emails transactionnels
 * Docs: https://developers.brevo.com/reference/sendtransacemail
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
  if (!apiKey) throw new Error('BREVO_API_KEY not set — email non envoyé');

  const payload = {
    sender: options.from ?? { name: 'Ma Formation Civique', email: 'contact@maformationcivique.fr' },
    to: options.to,
    subject: options.subject,
    htmlContent: options.htmlContent,
  };

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { accept: 'application/json', 'api-key': apiKey, 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Brevo ${res.status}: ${text}`);
  }
}

// ─── Shared shell ────────────────────────────────────────────────────────────
// bgColor: couleur de fond principale (#CC1A1A rouge | #002395 bleu)
// bgImage: URL de l'image de fond (ex: https://www.maformationcivique.fr/images/email/marianne.jpg)
//          laisser vide '' pour fond uni
// content: HTML du corps (heading, body, CTA, extras)

function emailShell(bgColor: string, bgImage: string, content: string): string {
  const bgStyle = bgImage
    ? `background-color:${bgColor};background-image:url('${bgImage}');background-size:cover;background-position:center top;`
    : `background-color:${bgColor};`;

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>maformationcivique.fr</title>
</head>
<body style="margin:0;padding:0;font-family:Georgia,serif;">
  <div style="${bgStyle}min-height:600px;padding:40px 24px 48px;text-align:center;">

    <!-- Logo -->
    <div style="margin-bottom:36px;">
      <table role="presentation" style="margin:0 auto;">
        <tr>
          <td style="vertical-align:middle;padding-right:10px;">
            <!-- MA logomark (SVG inline) -->
            <svg width="38" height="38" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="14" fill="white"/>
              <svg x="10" y="24" width="80" height="52" viewBox="80 146 276 178">
                <path d="M236.431 146C271.185 147.209 300.47 161.915 320.697 185.675C340.924 209.435 349.481 240.703 344.979 271.519L344.924 271.504C343.461 281.199 338.022 289.909 329.865 295.447C321.709 300.985 311.593 302.844 302.018 300.584C292.444 298.323 284.206 292.139 279.251 283.572C274.296 275.005 273.064 264.77 275.839 255.258C279.08 244.192 278.278 232.35 273.565 221.832C268.853 211.315 260.513 202.826 250.063 197.846L236.431 146Z" fill="#DE0019"/>
                <path d="M199.827 323.516C165.073 322.307 135.788 307.601 115.561 283.841C95.334 260.081 86.7765 228.813 91.279 197.997L91.3337 198.012C92.797 188.317 98.2358 179.607 106.392 174.069C114.549 168.531 124.664 166.672 134.239 168.932C143.814 171.193 152.052 177.377 157.007 185.944C161.962 194.511 163.193 204.746 160.419 214.258C157.177 225.324 157.979 237.166 162.692 247.684C167.404 258.201 175.744 266.69 186.195 271.67L199.827 323.516Z" fill="#031E6C"/>
              </svg>
            </svg>
          </td>
          <td style="vertical-align:middle;text-align:left;">
            <span style="font-family:Arial,sans-serif;font-size:11px;font-weight:700;color:#ffffff;line-height:1.2;letter-spacing:0.05em;text-transform:uppercase;">MA<br/>FORMATION<br/>CIVIQUE.FR</span>
          </td>
        </tr>
      </table>
    </div>

    <!-- Content -->
    <div style="max-width:480px;margin:0 auto;">
      ${content}
    </div>

    <!-- Footer -->
    <div style="margin-top:48px;">
      <p style="font-family:Arial,sans-serif;font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);margin:0 0 14px;">
        maformationcivique.fr
      </p>
      <table role="presentation" style="margin:0 auto;">
        <tr>
          <td style="padding:0 10px;">
            <a href="https://www.facebook.com/maformationcivique" style="display:inline-block;width:36px;height:36px;line-height:36px;background:rgba(255,255,255,0.2);border-radius:50%;color:#fff;font-family:Arial,sans-serif;font-size:15px;font-weight:700;text-decoration:none;text-align:center;">f</a>
          </td>
          <td style="padding:0 10px;">
            <a href="https://www.instagram.com/maformationcivique" style="display:inline-block;width:36px;height:36px;line-height:34px;background:rgba(255,255,255,0.2);border-radius:50%;color:#fff;font-family:Arial,sans-serif;font-size:13px;font-weight:700;text-decoration:none;text-align:center;border:1px solid rgba(255,255,255,0.4);">◎</a>
          </td>
        </tr>
      </table>
      <p style="font-family:Arial,sans-serif;font-size:11px;color:rgba(255,255,255,0.5);margin:16px 0 0;">
        © 2025 maformationcivique.fr · <a href="https://www.maformationcivique.fr/confidentialite" style="color:rgba(255,255,255,0.5);">Confidentialité</a>
      </p>
    </div>

  </div>
</body>
</html>`.trim();
}

// CTA button helper
function ctaButton(href: string, label: string, bgColor: string, textColor: string): string {
  return `<a href="${href}" style="display:inline-block;padding:16px 36px;background:${bgColor};color:${textColor};text-decoration:none;border-radius:100px;font-family:Arial,sans-serif;font-size:16px;font-weight:700;letter-spacing:0.01em;margin:28px 0;">${label}</a>`;
}

// ─── Templates ───────────────────────────────────────────────────────────────

// 1. Bienvenue — utilisateur organique (sans invitation cabinet)
//    Lead gen : 2 CTA secondaires pour capter l'intention
export function welcomeOrganicTemplate(name: string): string {
  const content = `
    <h1 style="font-family:Georgia,serif;font-size:clamp(28px,6vw,38px);font-weight:400;color:#ffffff;margin:0 0 28px;line-height:1.2;">
      Bienvenue ${name}&nbsp;!
    </h1>

    <div style="font-family:Arial,sans-serif;color:rgba(255,255,255,0.92);font-size:16px;line-height:1.7;margin-bottom:8px;">
      <p style="margin:0 0 12px;"><strong style="font-size:18px;">Votre compte est créé.</strong></p>
      <p style="margin:0 0 12px;">Vous avez accès gratuitement au <strong>Module 1 — La République française</strong> et à 20 questions de quiz.</p>
      <p style="margin:0;">Pour accéder à tous les modules et préparer votre examen au mieux, passez à l'offre Premium.</p>
    </div>

    ${ctaButton('https://www.maformationcivique.fr/dashboard', 'Commencer ma formation →', '#ffffff', '#CC1A1A')}

    <!-- Lead gen -->
    <div style="margin-top:8px;padding-top:28px;border-top:1px solid rgba(255,255,255,0.2);">
      <p style="font-family:Arial,sans-serif;font-size:13px;font-weight:700;color:rgba(255,255,255,0.7);text-transform:uppercase;letter-spacing:0.08em;margin:0 0 16px;">Vous avez un besoin spécifique ?</p>
      <table role="presentation" style="margin:0 auto;border-spacing:10px;">
        <tr>
          <td>
            <a href="https://www.maformationcivique.fr/contact?besoin=prefecture&utm_source=email-welcome&utm_medium=email&utm_campaign=lead-gen"
               style="display:inline-block;padding:12px 20px;background:rgba(255,255,255,0.15);border:1.5px solid rgba(255,255,255,0.5);border-radius:100px;font-family:Arial,sans-serif;font-size:13px;font-weight:600;color:#ffffff;text-decoration:none;white-space:nowrap;">
              🏛️ Accompagnement préfecture
            </a>
          </td>
          <td>
            <a href="https://www.maformationcivique.fr/moduleslinguistiques?utm_source=email-welcome&utm_medium=email&utm_campaign=lead-gen"
               style="display:inline-block;padding:12px 20px;background:rgba(255,255,255,0.15);border:1.5px solid rgba(255,255,255,0.5);border-radius:100px;font-family:Arial,sans-serif;font-size:13px;font-weight:600;color:#ffffff;text-decoration:none;white-space:nowrap;">
              🇫🇷 Cours de français
            </a>
          </td>
        </tr>
      </table>
      <p style="font-family:Arial,sans-serif;font-size:12px;color:rgba(255,255,255,0.55);margin:14px 0 0;line-height:1.5;">
        Titre de séjour, naturalisation, niveaux A2→B2 — cliquez pour nous indiquer votre besoin.
      </p>
    </div>
  `;
  // BACKGROUND IMAGE: remplacer '' par l'URL de l'image (ex: marianne rouge)
  return emailShell('#CC1A1A', '', content);
}

// 2. Bienvenue — utilisateur invité par un cabinet
//    Pas de lead gen : le cabinet accompagne déjà ce client
export function welcomeCabinetTemplate(name: string, cabinetName: string): string {
  const content = `
    <h1 style="font-family:Georgia,serif;font-size:clamp(26px,6vw,36px);font-weight:400;color:#ffffff;margin:0 0 28px;line-height:1.2;">
      Bonjour ${name}&nbsp;!
    </h1>

    <div style="font-family:Arial,sans-serif;color:rgba(255,255,255,0.92);font-size:16px;line-height:1.7;">
      <p style="margin:0 0 12px;">
        <strong>${cabinetName}</strong> a activé votre accès <strong>Premium complet</strong> à maformationcivique.fr.
      </p>
      <p style="margin:0;">Préparez votre examen civique à votre rythme — tous les modules et quiz vous sont accessibles.</p>
    </div>

    ${ctaButton('https://www.maformationcivique.fr/dashboard', 'Commencer ma formation →', '#ffffff', '#002395')}
  `;
  // BACKGROUND IMAGE: remplacer '' par l'URL de l'image (ex: Marianne bleue)
  return emailShell('#002395', '', content);
}

// 3. Réinitialisation mot de passe
export function resetPasswordTemplate(resetLink: string): string {
  const content = `
    <h1 style="font-family:Georgia,serif;font-size:clamp(26px,6vw,34px);font-weight:400;color:#ffffff;margin:0 0 24px;line-height:1.2;">
      Réinitialisation de<br/>votre mot de passe
    </h1>

    <div style="font-family:Arial,sans-serif;color:rgba(255,255,255,0.9);font-size:16px;line-height:1.7;">
      <p style="margin:0 0 8px;">Vous avez demandé à réinitialiser votre mot de passe.</p>
      <p style="margin:0;"><strong>Le lien est valable 1 heure.</strong></p>
    </div>

    ${ctaButton(resetLink, 'Réinitialiser le mot de passe →', '#ffffff', '#002395')}

    <p style="font-family:Arial,sans-serif;font-size:13px;color:rgba(255,255,255,0.5);margin:0;line-height:1.6;">
      Si vous n'avez pas fait cette demande, ignorez cet email.<br/>Votre mot de passe ne sera pas modifié.
    </p>
  `;
  // BACKGROUND IMAGE: remplacer '' par l'URL de l'image (ex: Marianne bleue / statue)
  return emailShell('#002395', '', content);
}

// 4. Invitation cabinet — admin
export function cabinetAdminInviteTemplate(cabinetName: string, inviteLink: string): string {
  const content = `
    <h1 style="font-family:Georgia,serif;font-size:clamp(24px,5vw,32px);font-weight:400;color:#ffffff;margin:0 0 24px;line-height:1.2;">
      Bonjour&nbsp;!
    </h1>

    <div style="font-family:Arial,sans-serif;color:rgba(255,255,255,0.9);font-size:16px;line-height:1.7;">
      <p style="margin:0 0 12px;">
        <strong>${cabinetName}</strong> a été enregistré comme partenaire de maformationcivique.fr.
      </p>
      <p style="margin:0;">
        <strong>Vous avez été désigné(e) administrateur</strong> de l'espace cabinet&nbsp;: vous pourrez y inviter vos clients et suivre leur progression.
      </p>
    </div>

    ${ctaButton(inviteLink, 'Gérer mon espace →', '#ffffff', '#002395')}

    <p style="font-family:Arial,sans-serif;font-size:13px;color:rgba(255,255,255,0.5);margin:0;line-height:1.6;">
      Ce lien est valable 30 jours. Si vous ne vous attendiez pas à cet email, ignorez-le.
    </p>
  `;
  // BACKGROUND IMAGE: remplacer '' par l'URL de l'image (ex: avocat/cabinet professionnel)
  return emailShell('#002395', '', content);
}

// 5. Invitation cabinet — membre/client
export function cabinetMemberInviteTemplate(cabinetName: string, inviteLink: string): string {
  const content = `
    <h1 style="font-family:Georgia,serif;font-size:clamp(24px,5vw,32px);font-weight:400;color:#ffffff;margin:0 0 24px;line-height:1.2;">
      Bonjour&nbsp;!
    </h1>

    <div style="font-family:Arial,sans-serif;color:rgba(255,255,255,0.9);font-size:16px;line-height:1.7;">
      <p style="margin:0 0 12px;">
        <strong>Vous êtes invité(e)</strong> sur maformationcivique.fr
      </p>
      <p style="margin:0;">
        <strong>${cabinetName}</strong> vous offre un accès <strong>Premium complet</strong> pour préparer votre examen civique.
      </p>
    </div>

    ${ctaButton(inviteLink, 'Créer mon compte →', '#ffffff', '#CC1A1A')}

    <p style="font-family:Arial,sans-serif;font-size:13px;color:rgba(255,255,255,0.5);margin:0;line-height:1.6;">
      Ce lien est valable 30 jours. Si vous ne vous attendiez pas à cet email, ignorez-le.
    </p>
  `;
  // BACKGROUND IMAGE: remplacer '' par l'URL de l'image (ex: mains / visa rouge)
  return emailShell('#CC1A1A', '', content);
}

// 6. Confirmation activation Premium (envoyé après paiement Stripe)
export function premiumActivatedTemplate(name: string, planLabel: string): string {
  const content = `
    <h1 style="font-family:Georgia,serif;font-size:clamp(26px,6vw,34px);font-weight:400;color:#ffffff;margin:0 0 24px;line-height:1.2;">
      Votre accès Premium<br/>est activé ✅
    </h1>

    <div style="font-family:Arial,sans-serif;color:rgba(255,255,255,0.9);font-size:16px;line-height:1.7;">
      <p style="margin:0 0 12px;">Bonjour ${name},</p>
      <p style="margin:0 0 12px;">
        Votre abonnement <strong>${planLabel}</strong> est actif. Tous les modules, quiz et fiches vous sont désormais accessibles.
      </p>
      <p style="margin:0;">Commencez dès maintenant pour préparer votre examen dans les meilleures conditions.</p>
    </div>

    ${ctaButton('https://www.maformationcivique.fr/dashboard', 'Accéder à ma formation →', '#ffffff', '#002395')}
  `;
  // BACKGROUND IMAGE: remplacer '' par l'URL de l'image (ex: photo paiement / bleu)
  return emailShell('#002395', '', content);
}

// 7. Notification admin — nouvel inscrit (email interne, pas de design)
export function adminNewUserTemplate(email: string, name: string, date: string): string {
  return `<div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
    <h2 style="color:#003189;margin-top:0">Nouvel utilisateur inscrit 👤</h2>
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:8px 0;color:#6b7280;width:120px">Email</td><td style="padding:8px 0;font-weight:600">${email}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280">Nom</td><td style="padding:8px 0">${name}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280">Date</td><td style="padding:8px 0">${date}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280">Plan</td><td style="padding:8px 0"><span style="background:#EEF2FF;color:#3730A3;padding:2px 8px;border-radius:4px;font-size:13px">Gratuit</span></td></tr>
    </table>
    <p style="margin-top:20px;font-size:13px;color:#9ca3af">maformationcivique.fr</p>
  </div>`;
}

// 8. Notification admin — nouveau paiement (email interne)
export function adminNewPaymentTemplate(email: string, name: string, planLabel: string, amount: string, sessionId: string, date: string): string {
  return `<div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
    <h2 style="color:#003189;margin-top:0">Nouveau paiement reçu 💳</h2>
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:8px 0;color:#6b7280;width:120px">Email</td><td style="padding:8px 0;font-weight:600">${email}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280">Nom</td><td style="padding:8px 0">${name}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280">Plan</td><td style="padding:8px 0"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:4px;font-size:13px">${planLabel}</span></td></tr>
      <tr><td style="padding:8px 0;color:#6b7280">Montant</td><td style="padding:8px 0;font-weight:600">${amount}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280">Date</td><td style="padding:8px 0">${date}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280">Transaction</td><td style="padding:8px 0;font-family:monospace;font-size:12px">${sessionId}</td></tr>
    </table>
    <p style="margin-top:20px;font-size:13px;color:#9ca3af">maformationcivique.fr</p>
  </div>`;
}

