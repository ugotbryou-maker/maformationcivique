// Utilitaires de tirage / mélange pour les questionnaires test (langue + civique).
// Objectif : varier les questions à chaque session ET alterner la position des
// bonnes réponses (sinon elles restent toujours au même index).

export function shuffleArray<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function pickRandom<T>(arr: readonly T[], n: number): T[] {
  return shuffleArray(arr).slice(0, n);
}

// Mélange les options d'une question et recalcule l'index de la bonne réponse.
export function shuffleOptions<Q extends { options: readonly string[]; answer: number }>(q: Q): Q {
  const correct = q.options[q.answer];
  const options = shuffleArray(q.options);
  return { ...q, options, answer: options.indexOf(correct) } as unknown as Q;
}
