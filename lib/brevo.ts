/**
 * Brevo (ex-Sendinblue) — envoi d'emails transactionnels
 * Docs: https://developers.brevo.com/reference/sendtransacemail
 *
 * Images de fond (à placer dans public/images/email/) :
 *   statue.jpg   → lead gen, reset MDP, bienvenue cabinet, premium
 *   handshake.jpg → invitation cabinet admin + client
 *   payment.jpg  → promo, confirmation paiement
 */

const CDN = 'https://www.maformationcivique.fr/images/email';

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

// ─── Shell ───────────────────────────────────────────────────────────────────
// L'image est superposée d'un overlay couleur semi-transparent via linear-gradient.
// Le background-color est le fallback pour Outlook desktop (qui ignore les background-image sur div).

function emailShell(bgColor: string, bgImage: string, overlayOpacity: string, content: string): string {
  const overlayColor = bgColor === '#CC1A1A'
    ? `rgba(180, 10, 10, ${overlayOpacity})`
    : `rgba(0, 28, 115, ${overlayOpacity})`;

  const bgStyle = bgImage
    ? `background-color:${bgColor};background-image:linear-gradient(${overlayColor},${overlayColor}),url('${bgImage}');background-size:cover;background-position:center top;`
    : `background-color:${bgColor};`;

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>maformationcivique.fr</title>
</head>
<body style="margin:0;padding:0;font-family:Georgia,serif;">
<div style="${bgStyle}min-height:600px;padding:40px 24px 48px;text-align:center;">

  <!-- Logo -->
  <div style="margin-bottom:36px;">
    <table role="presentation" style="margin:0 auto;border-spacing:0;">
      <tr>
        <td style="vertical-align:middle;padding-right:10px;">
          <svg width="36" height="36" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="14" fill="white"/>
            <svg x="10" y="24" width="80" height="52" viewBox="80 146 276 178">
              <path d="M236.431 146C271.185 147.209 300.47 161.915 320.697 185.675C340.924 209.435 349.481 240.703 344.979 271.519L344.924 271.504C343.461 281.199 338.022 289.909 329.865 295.447C321.709 300.985 311.593 302.844 302.018 300.584C292.444 298.323 284.206 292.139 279.251 283.572C274.296 275.005 273.064 264.77 275.839 255.258C279.08 244.192 278.278 232.35 273.565 221.832C268.853 211.315 260.513 202.826 250.063 197.846L236.431 146Z" fill="#DE0019"/>
              <path d="M199.827 323.516C165.073 322.307 135.788 307.601 115.561 283.841C95.334 260.081 86.7765 228.813 91.279 197.997L91.3337 198.012C92.797 188.317 98.2358 179.607 106.392 174.069C114.549 168.531 124.664 166.672 134.239 168.932C143.814 171.193 152.052 177.377 157.007 185.944C161.962 194.511 163.193 204.746 160.419 214.258C157.177 225.324 157.979 237.166 162.692 247.684C167.404 258.201 175.744 266.69 186.195 271.67L199.827 323.516Z" fill="#031E6C"/>
            </svg>
          </svg>
        </td>
        <td style="vertical-align:middle;text-align:left;">
          <span style="font-family:Arial,sans-serif;font-size:10px;font-weight:700;color:#ffffff;line-height:1.3;letter-spacing:0.06em;text-transform:uppercase;">MA<br/>FORMATION<br/>CIVIQUE.FR</span>
        </td>
      </tr>
    </table>
  </div>

  <!-- Content -->
  <div style="max-width:460px;margin:0 auto;">
    ${content}
  </div>

  <!-- Footer -->
  <div style="margin-top:44px;">
    <p style="font-family:Arial,sans-serif;font-size:13px;font-weight:700;color:rgba(255,255,255,0.85);margin:0 0 14px;">maformationcivique.fr</p>
    <table role="presentation" style="margin:0 auto;border-spacing:0;">
      <tr>
        <td style="padding:0 8px;">
          <a href="https://www.facebook.com/maformationcivique" style="display:inline-block;width:34px;height:34px;line-height:34px;background:rgba(255,255,255,0.18);border-radius:50%;color:#fff;font-family:Arial,sans-serif;font-size:15px;font-weight:900;text-decoration:none;text-align:center;">f</a>
        </td>
        <td style="padding:0 8px;">
          <a href="https://www.instagram.com/maformationcivique" style="display:inline-block;width:34px;height:34px;line-height:32px;background:rgba(255,255,255,0.18);border-radius:50%;color:#fff;font-family:Arial,sans-serif;font-size:12px;font-weight:700;text-decoration:none;text-align:center;border:1px solid rgba(255,255,255,0.35);">◎</a>
        </td>
      </tr>
    </table>
    <p style="font-family:Arial,sans-serif;font-size:11px;color:rgba(255,255,255,0.4);margin:14px 0 0;">
      © 2025 maformationcivique.fr ·
      <a href="https://www.maformationcivique.fr/confidentialite" style="color:rgba(255,255,255,0.4);text-decoration:underline;">Confidentialité</a>
    </p>
  </div>

</div>
</body>
</html>`.trim();
}

// CTA principal (bouton blanc, texte coloré)
function ctaBtn(href: string, label: string, textColor: string): string {
  return `<a href="${href}" style="display:inline-block;padding:16px 0;width:100%;max-width:360px;background:#ffffff;color:${textColor};text-decoration:none;border-radius:12px;font-family:Arial,sans-serif;font-size:17px;font-weight:800;letter-spacing:0.01em;margin:24px 0;">${label}</a>`;
}

// ─── Templates ───────────────────────────────────────────────────────────────

// 1. Bienvenue — utilisateur organique (J0)
export function welcomeOrganicTemplate(name: string): string {
  const content = `
    <h1 style="font-family:Georgia,serif;font-size:clamp(28px,7vw,38px);font-weight:400;color:#ffffff;margin:0 0 32px;line-height:1.2;">
      Bienvenue ${name}&nbsp;!
    </h1>
    <div style="font-family:Arial,sans-serif;color:rgba(255,255,255,0.92);font-size:16px;line-height:1.75;text-align:center;">
      <p style="margin:0 0 10px;"><strong>Votre compte est créé.</strong></p>
      <p style="margin:0 0 10px;">Vous avez accès gratuitement au <strong>Module 1 — La République française</strong> et à 20 questions de quiz.</p>
      <p style="margin:0;">Pour préparer votre examen au mieux, passez à l'offre Premium.</p>
    </div>
    ${ctaBtn('https://www.maformationcivique.fr/dashboard', 'Commencer ma formation →', '#CC1A1A')}
  `;
  return emailShell('#CC1A1A', `${CDN}/statue.jpg`, '0.72', content);
}

// 2. Bienvenue — utilisateur invité par un cabinet (J0)
export function welcomeCabinetTemplate(name: string, cabinetName: string): string {
  const content = `
    <h1 style="font-family:Georgia,serif;font-size:clamp(26px,6vw,36px);font-weight:400;color:#ffffff;margin:0 0 28px;line-height:1.2;">
      Bonjour ${name}&nbsp;!
    </h1>
    <div style="font-family:Arial,sans-serif;color:rgba(255,255,255,0.92);font-size:16px;line-height:1.75;text-align:center;">
      <p style="margin:0 0 10px;"><strong>${cabinetName}</strong> a activé votre accès <strong>Premium complet</strong>.</p>
      <p style="margin:0;">Préparez votre examen civique à votre rythme — tous les modules vous sont accessibles.</p>
    </div>
    ${ctaBtn('https://www.maformationcivique.fr/dashboard', 'Commencer ma formation →', '#002395')}
  `;
  return emailShell('#002395', `${CDN}/statue.jpg`, '0.72', content);
}

// 3. Lead gen — mise en relation avocat / examen de langue (J+1, organique uniquement)
export function leadGenTemplate(name: string): string {
  const content = `
    <h1 style="font-family:Georgia,serif;font-size:clamp(28px,7vw,38px);font-weight:400;color:#ffffff;margin:0 0 32px;line-height:1.2;">
      Bonjour ${name}&nbsp;!
    </h1>
    <div style="font-family:Arial,sans-serif;color:rgba(255,255,255,0.92);font-size:16px;line-height:1.75;text-align:left;">
      <p style="margin:0 0 12px;">Vous avez récemment créé un compte sur <strong>Ma Formation Civique</strong>.</p>
      <p style="margin:0 0 16px;">Peut-être êtes-vous en train d'effectuer des démarches pour obtenir un <strong>titre de séjour</strong> ou la <strong>nationalité française</strong>.</p>
      <p style="margin:0 0 16px;">Ma Formation Civique vous propose une mise en relation avec&nbsp;:</p>
      <ul style="margin:0 0 24px;padding-left:20px;color:rgba(255,255,255,0.92);">
        <li style="margin-bottom:10px;"><strong>des avocats spécialisés</strong> dans le droit des étrangers pour <strong>préparer votre dossier en préfecture</strong></li>
        <li style="margin-bottom:0;"><strong>des organismes de formation</strong> avec certification pour votre <strong>examen A2/B1/B2</strong></li>
      </ul>
    </div>
    <table role="presentation" style="width:100%;border-spacing:0;margin:8px 0;">
      <tr>
        <td style="padding-bottom:12px;">
          ${ctaBtn('https://www.maformationcivique.fr/contact?besoin=avocat&utm_source=email-leadgen&utm_medium=email', 'Avocat spécialisé', '#002395')}
        </td>
      </tr>
      <tr>
        <td>
          ${ctaBtn('https://www.maformationcivique.fr/moduleslinguistiques?utm_source=email-leadgen&utm_medium=email', 'Examen de langue', '#002395')}
        </td>
      </tr>
    </table>
  `;
  return emailShell('#002395', `${CDN}/handshake.jpg`, '0.75', content);
}

// 4. Promotion — -15% premier mois (J+5, organique non-premium uniquement)
export function promoTemplate(name: string, promoCode = 'BIENVENUE15'): string {
  const promoUrl = `https://www.maformationcivique.fr/premium?promo=${promoCode}&utm_source=email-promo&utm_medium=email`;
  const content = `
    <!-- Badge Promotion -->
    <div style="display:inline-block;border:2px solid #ffffff;border-radius:100px;padding:8px 24px;margin-bottom:24px;">
      <span style="font-family:Arial,sans-serif;font-size:15px;font-weight:700;color:#ffffff;letter-spacing:0.04em;">Promotion</span>
    </div>

    <h1 style="font-family:Georgia,serif;font-size:clamp(32px,8vw,46px);font-weight:400;color:#ffffff;margin:0 0 32px;line-height:1.15;">
      -15% sur<br/>votre premier mois&nbsp;!
    </h1>

    <div style="font-family:Arial,sans-serif;color:rgba(255,255,255,0.92);font-size:16px;line-height:1.75;text-align:center;">
      <p style="margin:0 0 12px;"><strong>Vous avez récemment créé un compte sur Ma Formation Civique.</strong></p>
      <p style="margin:0 0 12px;">En tant qu'utilisateur gratuit, vous bénéficiez d'un accès limité à l'ensemble de nos formations.</p>
      <p style="margin:0 0 12px;">Dans le cadre de vos démarches, <strong>se former est essentiel pour assurer l'obtention de vos papiers.</strong></p>
      <p style="margin:0;">En vous abonnant à notre e-learning, vous bénéficiez d'un accès à de nombreux modules pour vous préparer à votre examen civique ou linguistique.</p>
    </div>

    ${ctaBtn(promoUrl, 'Je m\'abonne moins cher', '#CC1A1A')}

    <p style="font-family:Arial,sans-serif;font-size:12px;color:rgba(255,255,255,0.5);margin:0;line-height:1.5;">
      Offre valable 48h · Code <strong style="color:rgba(255,255,255,0.75);">${promoCode}</strong> appliqué automatiquement
    </p>
  `;
  return emailShell('#CC1A1A', `${CDN}/payment.jpg`, '0.70', content);
}

// 5. Réinitialisation mot de passe
export function resetPasswordTemplate(resetLink: string): string {
  const content = `
    <h1 style="font-family:Georgia,serif;font-size:clamp(26px,6vw,34px);font-weight:400;color:#ffffff;margin:0 0 28px;line-height:1.2;">
      Réinitialisation de<br/>votre mot de passe
    </h1>
    <div style="font-family:Arial,sans-serif;color:rgba(255,255,255,0.9);font-size:16px;line-height:1.75;text-align:center;">
      <p style="margin:0 0 8px;">Vous avez demandé à réinitialiser votre mot de passe.</p>
      <p style="margin:0;"><strong>Le lien est valable 1 heure.</strong></p>
    </div>
    ${ctaBtn(resetLink, 'Réinitialiser le mot de passe →', '#002395')}
    <p style="font-family:Arial,sans-serif;font-size:13px;color:rgba(255,255,255,0.5);margin:0;line-height:1.6;">
      Si vous n'avez pas fait cette demande, ignorez cet email.
    </p>
  `;
  return emailShell('#002395', `${CDN}/statue.jpg`, '0.72', content);
}

// 6. Invitation cabinet — admin
export function cabinetAdminInviteTemplate(cabinetName: string, inviteLink: string): string {
  const content = `
    <h1 style="font-family:Georgia,serif;font-size:clamp(24px,5vw,32px);font-weight:400;color:#ffffff;margin:0 0 28px;line-height:1.2;">
      Votre espace partenaire<br/>est prêt
    </h1>
    <div style="font-family:Arial,sans-serif;color:rgba(255,255,255,0.9);font-size:16px;line-height:1.75;text-align:center;">
      <p style="margin:0 0 12px;"><strong>${cabinetName}</strong> a été enregistré comme partenaire de maformationcivique.fr.</p>
      <p style="margin:0;"><strong>Vous avez été désigné(e) administrateur</strong> : invitez vos clients et suivez leur progression depuis votre espace.</p>
    </div>
    ${ctaBtn(inviteLink, 'Gérer mon espace →', '#002395')}
    <p style="font-family:Arial,sans-serif;font-size:13px;color:rgba(255,255,255,0.5);margin:0;line-height:1.6;">
      Lien valable 30 jours.
    </p>
  `;
  return emailShell('#002395', `${CDN}/handshake.jpg`, '0.74', content);
}

// 7. Invitation cabinet — membre/client
export function cabinetMemberInviteTemplate(cabinetName: string, inviteLink: string): string {
  const content = `
    <h1 style="font-family:Georgia,serif;font-size:clamp(24px,5vw,32px);font-weight:400;color:#ffffff;margin:0 0 28px;line-height:1.2;">
      Votre formation civique<br/>Premium vous attend
    </h1>
    <div style="font-family:Arial,sans-serif;color:rgba(255,255,255,0.9);font-size:16px;line-height:1.75;text-align:center;">
      <p style="margin:0 0 12px;"><strong>${cabinetName}</strong> vous offre un accès <strong>Premium complet</strong> à maformationcivique.fr.</p>
      <p style="margin:0;">Préparez votre examen civique et linguistique à votre rythme.</p>
    </div>
    ${ctaBtn(inviteLink, 'Créer mon compte →', '#CC1A1A')}
    <p style="font-family:Arial,sans-serif;font-size:13px;color:rgba(255,255,255,0.5);margin:0;line-height:1.6;">
      Lien valable 30 jours.
    </p>
  `;
  return emailShell('#CC1A1A', `${CDN}/handshake.jpg`, '0.72', content);
}

// 8. Confirmation Premium activé (après paiement Stripe)
export function premiumActivatedTemplate(name: string, planLabel: string): string {
  const content = `
    <h1 style="font-family:Georgia,serif;font-size:clamp(26px,6vw,34px);font-weight:400;color:#ffffff;margin:0 0 28px;line-height:1.2;">
      Votre accès Premium<br/>est activé ✅
    </h1>
    <div style="font-family:Arial,sans-serif;color:rgba(255,255,255,0.9);font-size:16px;line-height:1.75;text-align:center;">
      <p style="margin:0 0 10px;">Bonjour ${name},</p>
      <p style="margin:0 0 10px;">Votre abonnement <strong>${planLabel}</strong> est actif. Tous les modules, quiz et fiches vous sont accessibles.</p>
      <p style="margin:0;">Commencez dès maintenant.</p>
    </div>
    ${ctaBtn('https://www.maformationcivique.fr/dashboard', 'Accéder à ma formation →', '#002395')}
  `;
  return emailShell('#002395', `${CDN}/payment.jpg`, '0.72', content);
}

// ─── Templates admin (internes, pas de design visuel) ────────────────────────

export function adminNewUserTemplate(email: string, name: string, date: string): string {
  return `<div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
    <h2 style="color:#003189;margin-top:0">Nouvel inscrit 👤</h2>
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:8px 0;color:#6b7280;width:120px">Email</td><td style="padding:8px 0;font-weight:600">${email}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280">Nom</td><td style="padding:8px 0">${name}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280">Date</td><td style="padding:8px 0">${date}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280">Plan</td><td style="padding:8px 0"><span style="background:#EEF2FF;color:#3730A3;padding:2px 8px;border-radius:4px;font-size:13px">Gratuit</span></td></tr>
    </table>
    <p style="margin-top:20px;font-size:13px;color:#9ca3af">maformationcivique.fr</p>
  </div>`;
}

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
