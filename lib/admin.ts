/**
 * Liste des emails administrateurs — utilisée pour protéger /studio et
 * les routes API d'administration (création de cabinets B2B, etc.).
 */
export const ADMIN_EMAILS = (process.env.ADMIN_EMAIL ?? 'tamburriniugo@gmail.com')
  .split(',')
  .map((e) => e.trim().toLowerCase());

export function isAdminEmail(email?: string | null): boolean {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase());
}
