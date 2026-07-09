-- ═══════════════════════════════════════════════════════════════
-- maformationcivique.fr — Fix XP langue (migration consolidée)
-- À coller dans : Supabase > SQL Editor > New query > Run
--
-- Corrige définitivement le problème XP sur les modules linguistiques.
-- Peut être exécuté plusieurs fois sans danger (idempotent).
-- ═══════════════════════════════════════════════════════════════

-- ── 1. Colonnes XP sur la table users ───────────────────────────
-- (créées dans schema.sql, mais peuvent manquer sur les bases
--  provisionnées avant le schema définitif)
ALTER TABLE public.users
  ADD COLUMN IF NOT EXISTS xp           integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS streak_days  integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS last_active  date;

-- ── 2. Table progression ─────────────────────────────────────────
-- Si l'ancienne table s'appelait user_progress, on la renomme
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.tables
    WHERE table_schema = 'public' AND table_name = 'user_progress'
  ) AND NOT EXISTS (
    SELECT 1 FROM information_schema.tables
    WHERE table_schema = 'public' AND table_name = 'progression'
  ) THEN
    ALTER TABLE public.user_progress RENAME TO progression;
  END IF;
END $$;

-- Si aucune des deux n'existe (base neuve), on la crée
CREATE TABLE IF NOT EXISTS public.progression (
  id           uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id      uuid REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  module_slug  text NOT NULL DEFAULT '',
  lesson_slug  text NOT NULL,
  completed    boolean DEFAULT false,
  completed_at timestamptz,
  xp_awarded   integer DEFAULT 0,
  created_at   timestamptz DEFAULT now()
);

-- Colonne quiz_score (ajoutée par migration_b, peut manquer)
ALTER TABLE public.progression
  ADD COLUMN IF NOT EXISTS quiz_score      integer,
  ADD COLUMN IF NOT EXISTS quiz_total      integer,
  ADD COLUMN IF NOT EXISTS quiz_xp_awarded boolean DEFAULT false;

-- Contrainte UNIQUE requise par l'upsert onConflict: 'user_id,lesson_slug'
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint c
    JOIN pg_class t ON t.oid = c.conrelid
    WHERE t.relname = 'progression' AND c.contype = 'u'
      AND (
        SELECT array_agg(attname::text ORDER BY attname)
        FROM pg_attribute
        WHERE attrelid = t.oid AND attnum = ANY(c.conkey)
      ) = ARRAY['lesson_slug', 'user_id']::text[]
  ) THEN
    ALTER TABLE public.progression
      ADD CONSTRAINT progression_user_lesson_unique UNIQUE (user_id, lesson_slug);
  END IF;
END $$;

-- RLS : chaque utilisateur accède uniquement à ses propres lignes
ALTER TABLE public.progression ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "progress_all_own"    ON public.progression;
DROP POLICY IF EXISTS "progression_all_own" ON public.progression;
CREATE POLICY "progression_all_own" ON public.progression
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_progression_user   ON public.progression(user_id);
CREATE INDEX IF NOT EXISTS idx_progression_lesson ON public.progression(lesson_slug);

-- ── 3. Table user_badges ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.user_badges (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id     uuid REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  badge_slug  text NOT NULL,
  earned_at   timestamptz DEFAULT now(),
  UNIQUE(user_id, badge_slug)
);

ALTER TABLE public.user_badges ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "badges_select_own" ON public.user_badges;
DROP POLICY IF EXISTS "badges_all_own"    ON public.user_badges;
-- INSERT + SELECT pour l'utilisateur connecté
CREATE POLICY "badges_all_own" ON public.user_badges
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_badges_user ON public.user_badges(user_id);

-- ── 4. Table exam_results (examens blancs civiques) ──────────────
CREATE TABLE IF NOT EXISTS public.exam_results (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id     uuid REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  exam_level  text NOT NULL,
  score       integer NOT NULL,
  total_q     integer NOT NULL,
  passed      boolean NOT NULL DEFAULT false,
  xp_awarded  boolean NOT NULL DEFAULT false,
  updated_at  timestamptz DEFAULT now()
);

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

-- ── 5. RLS sur users : l'utilisateur peut modifier son propre XP ─
-- (nécessaire pour que l'upsert users.xp depuis le client anon fonctionne)
DROP POLICY IF EXISTS "users_select_own"  ON public.users;
DROP POLICY IF EXISTS "users_update_own"  ON public.users;
DROP POLICY IF EXISTS "users_upsert_own"  ON public.users;
CREATE POLICY "users_select_own" ON public.users
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "users_update_own" ON public.users
  FOR UPDATE USING (auth.uid() = id) WITH CHECK (auth.uid() = id);
-- Nécessaire pour l'upsert dans /api/progress/complete
CREATE POLICY "users_insert_own" ON public.users
  FOR INSERT WITH CHECK (auth.uid() = id);

-- ═══════════════════════════════════════════════════════════════
-- Fin — colle ce bloc dans SQL Editor > Run et c'est bon.
-- ═══════════════════════════════════════════════════════════════
