export const XP_REWARDS = {
  lesson_completed:  50,
  quiz_correct:      10,
  quiz_perfect:      25,
  exam_passed:      100,
  streak_day:        15,
  streak_week:       75,
} as const;

export type XPEvent = keyof typeof XP_REWARDS;

export const BADGES = [
  { slug: 'first_lesson',   label: 'Première leçon',          icon: '📖', desc: 'Vous avez terminé votre première leçon !',          xpRequired: 0 },
  { slug: 'quiz_10',        label: '10 questions réussies',    icon: '✅', desc: "10 bonnes réponses d'affilée — continuez !",          xpRequired: 0 },
  { slug: 'quiz_master',    label: 'Expert quiz',              icon: '🎯', desc: 'Plus de 500 XP grâce aux quiz.',                    xpRequired: 500 },
  { slug: 'streak_5',       label: 'Persévérant',              icon: '🔥', desc: "5 jours consécutifs d'entraînement.",               xpRequired: 0 },
  { slug: 'streak_30',      label: 'Indestructible',           icon: '💪', desc: '30 jours consécutifs — impressionnant !',           xpRequired: 0 },
  { slug: 'all_modules',    label: 'Programme complet',        icon: '🏆', desc: 'Tous les modules terminés.',                        xpRequired: 0 },
  { slug: 'exam_passed',        label: "Prêt pour l'examen",       icon: '🎓', desc: 'Score ≥ 80% à un examen blanc.',                      xpRequired: 0 },
  { slug: 'perfect_exam',       label: 'Parfait !',                icon: '⭐', desc: '100% à un examen blanc.',                             xpRequired: 0 },
  // Langue française
  { slug: 'first_lang_lesson',  label: 'Première leçon langue',   icon: '🗣️', desc: 'Vous avez terminé votre première leçon de français !',  xpRequired: 0 },
  { slug: 'lang_a2_complete',   label: 'Niveau A2 maîtrisé',      icon: '🌱', desc: 'Tous les modules A2 terminés.',                         xpRequired: 0 },
  { slug: 'lang_b1_complete',   label: 'Niveau B1 maîtrisé',      icon: '📗', desc: 'Tous les modules B1 terminés.',                         xpRequired: 0 },
  { slug: 'lang_b2_complete',   label: 'Niveau B2 maîtrisé',      icon: '🏅', desc: 'Tous les modules B2 terminés.',                         xpRequired: 0 },
  { slug: 'lang_50_exercises',  label: '50 exercices langue',      icon: '✍️', desc: '50 exercices de français réussis.',                     xpRequired: 0 },
  { slug: 'lang_200_exercises', label: '200 exercices langue',     icon: '📚', desc: '200 exercices de français réussis.',                    xpRequired: 0 },
] as const;

export type BadgeSlug = typeof BADGES[number]['slug'];

export function getLevel(xp: number): { label: string; min: number; max: number; color: string } {
  if (xp >= 2000) return { label: 'Expert',           min: 2000, max: 5000, color: '#EF4135' };
  if (xp >= 1000) return { label: 'Avancé',           min: 1000, max: 2000, color: '#D97706' };
  if (xp >= 400)  return { label: 'Intermédiaire',    min: 400,  max: 1000, color: '#7C3AED' };
  if (xp >= 100)  return { label: 'Débutant+',        min: 100,  max: 400,  color: 'var(--color-blue-france)' };
  return                  { label: 'Débutant',         min: 0,    max: 100,  color: 'var(--color-text-muted)' };
}

export function getLevelProgress(xp: number): number {
  const level = getLevel(xp);
  const range = level.max - level.min;
  const progress = xp - level.min;
  return Math.min(100, Math.round((progress / range) * 100));
}
