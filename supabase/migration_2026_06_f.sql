-- ═══════════════════════════════════════════════════════════════
-- maformationcivique.fr — Migration juin 2026 (f)
-- À coller dans : Supabase > SQL Editor > New query > Run
--
-- XP pour les examens blancs (/examen/[level]) :
--  - Nouvelle table exam_results : un résultat par utilisateur et
--    par niveau d'examen (CSP / CR / NAT), avec idempotence
--    (xp_awarded) pour le crédit des 100 XP (XP_REWARDS.exam_passed).
--  - Permet l'attribution des badges "exam_passed" et "perfect_exam"
--    (déjà définis dans lib/gamification.ts mais jamais utilisés).
--
-- Idempotent : peut être exécuté plusieurs fois sans danger.
-- ═══════════════════════════════════════════════════════════════

-- ── 1. Table exam_results ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.exam_results (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id     uuid REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  exam_level  text NOT NULL,    -- 'CSP' | 'CR' | 'NAT'
  score       integer NOT NULL,
  total_q     integer NOT NULL,
  passed      boolean NOT NULL DEFAULT false,
  xp_awarded  boolean NOT NULL DEFAULT false,
  updated_at  timestamptz DEFAULT now()
);

-- Garantir la contrainte UNIQUE(user_id, exam_level) requise par
-- l'upsert "onConflict: 'user_id,exam_level'" de l'API
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint c
    JOIN pg_class t ON t.oid = c.conrelid
    WHERE t.relname = 'exam_results' AND c.contype = 'u'
      AND (
        SELECT array_agg(attname::text ORDER BY attname)
        FROM pg_attribute
        WHERE attrelid = t.oid AND attnum = ANY(c.conkey)
      ) = ARRAY['exam_level', 'user_id']::text[]
  ) THEN
    ALTER TABLE public.exam_results
      ADD CONSTRAINT exam_results_user_level_unique UNIQUE (user_id, exam_level);
  END IF;
END $$;

ALTER TABLE public.exam_results ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "exam_results_all_own" ON public.exam_results;
CREATE POLICY "exam_results_all_own" ON public.exam_results
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_exam_results_user ON public.exam_results(user_id);

-- ═══════════════════════════════════════════════════════════════
-- Fin de la migration.
-- ═══════════════════════════════════════════════════════════════
