-- ═══════════════════════════════════════════════════════════════
-- maformationcivique.fr — Migration juin 2026 (b)
-- À coller dans : Supabase > SQL Editor > New query > Run
--
-- 1) Ajoute les colonnes nécessaires au crédit d'XP pour le quiz de
--    fin de leçon (quiz_score / quiz_total / quiz_xp_awarded).
--
-- 2) RATTRAPAGE (one-shot) : les leçons déjà marquées "completed"
--    avant la mise en place du système XP/badges n'ont jamais
--    crédité de points ni débloqué de badges (le code de
--    /api/progress/complete ignore les leçons déjà "completed").
--    Ce bloc recalcule donc xp = GREATEST(xp actuel, nb_lecons*50)
--    et débloque rétroactivement les badges "Première leçon",
--    "Programme complet" et "Expert quiz" si les seuils sont
--    atteints.
--
-- Idempotent : peut être exécuté plusieurs fois sans danger.
-- ═══════════════════════════════════════════════════════════════

-- ── 1. Colonnes quiz de fin de leçon ─────────────────────────────
ALTER TABLE public.progression
  ADD COLUMN IF NOT EXISTS quiz_score      integer,
  ADD COLUMN IF NOT EXISTS quiz_total      integer,
  ADD COLUMN IF NOT EXISTS quiz_xp_awarded boolean DEFAULT false;

-- ── 2. Rattrapage XP pour les leçons déjà complétées ─────────────
WITH counts AS (
  SELECT user_id, COUNT(*) AS nb_lessons
  FROM public.progression
  WHERE completed = true
  GROUP BY user_id
)
UPDATE public.users u
SET xp = GREATEST(u.xp, c.nb_lessons * 50)
FROM counts c
WHERE u.id = c.user_id;

-- ── 3. Rattrapage badge "Première leçon" ─────────────────────────
INSERT INTO public.user_badges (user_id, badge_slug)
SELECT DISTINCT user_id, 'first_lesson'
FROM public.progression
WHERE completed = true
ON CONFLICT (user_id, badge_slug) DO NOTHING;

-- ── 4. Rattrapage badge "Programme complet" (22 leçons) ──────────
INSERT INTO public.user_badges (user_id, badge_slug)
SELECT user_id, 'all_modules'
FROM public.progression
WHERE completed = true
GROUP BY user_id
HAVING COUNT(*) >= 22
ON CONFLICT (user_id, badge_slug) DO NOTHING;

-- ── 5. Rattrapage badge "Expert quiz" (≥ 500 XP) ─────────────────
INSERT INTO public.user_badges (user_id, badge_slug)
SELECT id, 'quiz_master'
FROM public.users
WHERE xp >= 500
ON CONFLICT (user_id, badge_slug) DO NOTHING;

-- ═══════════════════════════════════════════════════════════════
-- Fin de la migration.
-- ═══════════════════════════════════════════════════════════════
