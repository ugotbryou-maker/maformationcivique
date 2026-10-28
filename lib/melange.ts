/**
 * Mélange déterministe des propositions d'un QCM.
 *
 * POURQUOI : les bonnes réponses des banques de questions sont massivement
 * en B — 65 % sur le QCM civique, 80 % sur les anciens examens linguistiques,
 * 71 % sur les exercices de leçon. Un candidat qui coche B sans lire obtient
 * déjà 65 %. L'épreuve ne mesure alors plus la connaissance mais la position
 * de la réponse.
 *
 * Plutôt que de réécrire 2 886 questions — travail mécanique, risqué, et qui
 * figerait une nouvelle répartition tout aussi mémorisable — on permute les
 * propositions à chaque génération. La même question posée deux fois présente
 * ses propositions dans un ordre différent.
 *
 * DÉTERMINISME : la permutation dépend d'une graine et de l'identifiant de la
 * question. Elle est donc reproductible à l'identique côté serveur au moment
 * de corriger, sans avoir à transmettre les bonnes réponses au navigateur.
 */

/** Hachage FNV-1a — court, stable, suffisant pour amorcer un générateur. */
function hacher(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Générateur mulberry32 : même graine, même suite, sur toutes les plateformes. */
function generateur(graine: number): () => number {
  let a = graine >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Permutation de `n` éléments, reproductible à partir de `graine`.
 * Renvoie un tableau où `p[i]` est l'index d'origine à placer en position i.
 */
export function permutation(graine: string, n: number): number[] {
  const rnd = generateur(hacher(graine));
  const p = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  return p;
}

export interface OptionsMelangees<T> {
  options: T[];
  /** Nouvel index de la bonne réponse après permutation. */
  bonneReponse: number;
  /** Permutation appliquée : position affichée → index d'origine. */
  ordre: number[];
}

/** Permute les propositions et suit la bonne réponse. */
export function melangerOptions<T>(
  options: T[],
  bonneReponse: number,
  graine: string,
): OptionsMelangees<T> {
  const ordre = permutation(graine, options.length);
  return {
    options: ordre.map((i) => options[i]),
    bonneReponse: ordre.indexOf(bonneReponse),
    ordre,
  };
}

/**
 * Index d'origine correspondant à une position affichée.
 * Utilisé à la correction, pour retrouver ce que la personne a coché sans
 * jamais avoir envoyé la bonne réponse au navigateur.
 */
export function indexOrigine(graine: string, n: number, positionAffichee: number): number {
  const ordre = permutation(graine, n);
  return ordre[positionAffichee] ?? -1;
}

/**
 * Graine d'une session d'épreuve. Change à chaque génération, ce qui suffit
 * à déplacer les réponses d'un passage à l'autre.
 */
export function graineSession(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}
