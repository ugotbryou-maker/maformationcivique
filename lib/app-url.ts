import { headers } from 'next/headers';

const CANONICAL = 'https://www.maformationcivique.fr';

/**
 * URL de base à utiliser pour toute redirection sortante (Stripe notamment).
 *
 * On ne se fie PAS à NEXT_PUBLIC_APP_URL seule : si elle pointe un domaine
 * différent de celui où se trouve réellement le visiteur (ex. le domaine
 * *.vercel.app alors qu'il navigue sur www.maformationcivique.fr), le retour
 * de paiement l'envoie sur un domaine où son cookie de session n'existe pas —
 * il se retrouve déconnecté après avoir payé, et croit avoir perdu son argent.
 *
 * On dérive donc l'origine de la requête en cours, et on ne retombe sur
 * l'variable d'environnement puis sur le domaine canonique qu'en dernier
 * recours.
 */
export async function getAppUrl(): Promise<string> {
  try {
    const h = await headers();
    const host = h.get('x-forwarded-host') ?? h.get('host');
    if (host) {
      const proto = h.get('x-forwarded-proto') ?? (host.startsWith('localhost') ? 'http' : 'https');
      return `${proto}://${host}`;
    }
  } catch {
    // headers() indisponible hors contexte de requête — on passe au repli.
  }
  return process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, '') ?? CANONICAL;
}
