/**
 * Synchronisation des contacts vers Brevo.
 *
 * POURQUOI : `lib/brevo.ts` n'envoie que du transactionnel, un message à la
 * fois. Brevo ne connaît donc aucun de nos utilisateurs et ne peut segmenter
 * sur rien. Sans les attributs ci-dessous, aucune automatisation conditionnelle
 * — « 0 leçon à J+5 », « inactif depuis 14 jours », « palier 25 % » — n'est
 * réalisable côté Brevo.
 *
 * Les attributs doivent exister dans Brevo (Contacts > Paramètres > Attributs).
 * `ATTRIBUTS_BREVO` en donne la liste et le type attendu.
 */

const API = 'https://api.brevo.com/v3';

/**
 * Définition des attributs à créer dans Brevo. Les noms sont en majuscules
 * sans accent : Brevo normalise ainsi, et un attribut créé avec un accent
 * devient introuvable dans les conditions de scénario.
 */
export const ATTRIBUTS_BREVO = [
  { nom: 'PRENOM',            type: 'text' },
  { nom: 'NOM',               type: 'text' },
  { nom: 'OFFRE',             type: 'text' },   // free | premium | langue | bundle
  { nom: 'VOLET',             type: 'text' },   // civique | langue | complet
  { nom: 'CABINET',           type: 'text' },   // nom du cabinet, vide si B2C
  { nom: 'EST_CABINET',       type: 'boolean' },
  { nom: 'INSCRIT_LE',        type: 'date' },
  { nom: 'DERNIERE_VISITE',   type: 'date' },
  { nom: 'JOURS_INACTIF',     type: 'float' },  // -1 si jamais venu
  { nom: 'LECONS_FAITES',     type: 'float' },  // sur le périmètre souscrit
  { nom: 'LECONS_TOTAL',      type: 'float' },
  { nom: 'PROGRESSION',       type: 'float' },  // 0-100, périmètre souscrit
  { nom: 'PROGRESSION_CIV',   type: 'float' },
  { nom: 'PROGRESSION_LNG',   type: 'float' },
  { nom: 'PALIER',            type: 'float' },  // 0 | 25 | 50 | 75 | 100
  { nom: 'EXAMENS_PASSES',    type: 'float' },
  { nom: 'EXAMENS_REUSSIS',   type: 'float' },
  { nom: 'MEILLEUR_SCORE',    type: 'float' },  // en %
  { nom: 'DERNIER_EXAMEN',    type: 'text' },   // reussi | echoue | aucun
  { nom: 'XP',                type: 'float' },
  { nom: 'DEMARCHE',          type: 'text' },
  { nom: 'TELEPHONE_CONTACT', type: 'text' },
] as const;

export interface ContactBrevo {
  email: string;
  attributes: Record<string, string | number | boolean | null>;
  listIds?: number[];
}

function cle(): string {
  const k = process.env.BREVO_API_KEY;
  if (!k) throw new Error('BREVO_API_KEY absente');
  return k;
}

/**
 * Palier franchi, arrondi vers le bas. C'est sur ce champ que se déclenchent
 * les e-mails de progression : comparer directement PROGRESSION obligerait à
 * écrire des conditions d'intervalle dans Brevo, moins lisibles et sujettes
 * à des déclenchements répétés à chaque leçon.
 */
export function palierDe(pct: number): number {
  if (pct >= 100) return 100;
  if (pct >= 75) return 75;
  if (pct >= 50) return 50;
  if (pct >= 25) return 25;
  return 0;
}

/** Date au format attendu par Brevo (AAAA-MM-JJ). */
export function dateBrevo(d: string | null | undefined): string | null {
  if (!d) return null;
  const t = new Date(d);
  return Number.isNaN(t.getTime()) ? null : t.toISOString().slice(0, 10);
}

/**
 * Crée les attributs manquants. Idempotent : Brevo répond 400 « already
 * exists », qu'on ignore volontairement — c'est le cas normal à partir du
 * deuxième passage.
 */
export async function creerAttributs(): Promise<{ crees: string[]; existants: string[] }> {
  const crees: string[] = [];
  const existants: string[] = [];

  for (const a of ATTRIBUTS_BREVO) {
    const r = await fetch(`${API}/contacts/attributes/normal/${a.nom}`, {
      method: 'POST',
      headers: { 'api-key': cle(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: a.type }),
    });
    if (r.ok) crees.push(a.nom);
    else existants.push(a.nom);
  }
  return { crees, existants };
}

/**
 * Envoie les contacts par lots. L'import en masse de Brevo accepte jusqu'à
 * un gros volume par appel ; on découpe quand même, pour qu'un échec ne
 * perde pas toute la synchronisation.
 */
export async function envoyerContacts(
  contacts: ContactBrevo[],
  listId?: number,
): Promise<{ envoyes: number; erreurs: string[] }> {
  const erreurs: string[] = [];
  let envoyes = 0;
  const TAILLE_LOT = 100;

  for (let i = 0; i < contacts.length; i += TAILLE_LOT) {
    const lot = contacts.slice(i, i + TAILLE_LOT);
    const r = await fetch(`${API}/contacts/import`, {
      method: 'POST',
      headers: { 'api-key': cle(), 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonBody: lot.map((c) => ({ email: c.email, attributes: c.attributes })),
        // updateExistingContacts : c'est tout l'intérêt d'une synchronisation
        // régulière — les attributs doivent être écrasés à chaque passage.
        updateExistingContacts: true,
        emptyContactsAttributes: false,
        ...(listId ? { listIds: [listId] } : {}),
      }),
    });

    if (r.ok) {
      envoyes += lot.length;
    } else {
      const texte = await r.text().catch(() => '');
      erreurs.push(`lot ${i / TAILLE_LOT + 1} : ${r.status} ${texte.slice(0, 200)}`);
    }
  }

  return { envoyes, erreurs };
}
