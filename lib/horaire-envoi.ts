/**
 * Fenêtre d'envoi des e-mails : 19 h, heure de Paris.
 *
 * POURQUOI CE FICHIER : les tâches planifiées Vercel s'expriment en UTC, et
 * 19 h à Paris ne correspond pas à une heure UTC fixe — c'est 17 h UTC en été
 * (UTC+2) et 18 h UTC en hiver (UTC+1). Un horaire UTC figé enverrait donc à
 * 20 h la moitié de l'année.
 *
 * La tâche est déclenchée aux deux heures UTC possibles, et c'est le code qui
 * décide laquelle est la bonne, en lisant l'heure réelle à Paris.
 */

export const HEURE_ENVOI_PARIS = 19;

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
  return { envoyer: force || heure === HEURE_ENVOI_PARIS, heure };
}
