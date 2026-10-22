/**
 * Fenêtre d'envoi des e-mails : en soirée, heure de Paris.
 *
 * Les tâches planifiées Vercel s'expriment en UTC, et 19 h à Paris ne
 * correspond pas à une heure UTC fixe : c'est 17 h UTC en été (UTC+2) et
 * 18 h UTC en hiver (UTC+1).
 *
 * On ne peut pas déclencher la tâche aux deux heures possibles : le plan
 * Hobby de Vercel n'autorise que deux tâches au total et une exécution par
 * jour. On vise donc 18 h UTC, ce qui donne 19 h à Paris en hiver et 20 h en
 * été, et la fenêtre acceptée couvre les deux. Dans tous les cas, l'envoi
 * tombe en soirée — ce qui était l'objectif.
 */

export const HEURE_ENVOI_PARIS = 19;
/** Heures acceptées, pour absorber le décalage saisonnier. */
const FENETRE = [18, 19, 20];

/** Heure courante à Paris, décalage saisonnier compris. */
export function heureParis(d: Date = new Date()): number {
  const h = new Intl.DateTimeFormat('fr-FR', {
    timeZone: 'Europe/Paris',
    hour: 'numeric',
    hour12: false,
  }).format(d);
  return Number(h);
}

/**
 * Faut-il envoyer maintenant ?
 *
 * `force` permet à un administrateur de déclencher l'envoi à la main sans
 * attendre 19 h : la contrainte horaire vise le planificateur, pas l'humain
 * qui teste.
 */
export function estHeureDEnvoi(force = false): { envoyer: boolean; heure: number } {
  const heure = heureParis();
  return { envoyer: force || FENETRE.includes(heure), heure };
}
