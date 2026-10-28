'use client';

import { useMemo } from 'react';
import { melangerOptions, graineSession } from '@/lib/melange';

/**
 * Repositionne les propositions d'une série de QCM, une fois par montage.
 *
 * Dans toutes les banques de questions, la bonne réponse est massivement en
 * deuxième position — 71 % pour les exercices de leçon. Sans ce mélange,
 * répondre « la deuxième » suffit à réussir sans lire.
 *
 * `useMemo` sur une graine fixée au montage : les propositions ne doivent pas
 * se réordonner à chaque rendu, sinon elles bougeraient sous le doigt entre
 * le clic et l'affichage de la correction.
 */
export interface QcmMelangeable {
  options: string[];
  correctIndex: number;
}

export function useOptionsMelangees<T extends QcmMelangeable>(
  items: readonly T[],
  cle: (item: T, index: number) => string,
): T[] {
  return useMemo(() => {
    const graine = graineSession();
    return items.map((item, i) => {
      if (!Array.isArray(item.options) || item.options.length < 2) return { ...item };
      const m = melangerOptions<string>(item.options, item.correctIndex, `${graine}:${cle(item, i)}`);
      return { ...item, options: m.options, correctIndex: m.bonneReponse };
    });
    // La graine est volontairement recalculée au seul changement de série :
    // une même série garde son ordre tant qu'on la parcourt.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);
}
