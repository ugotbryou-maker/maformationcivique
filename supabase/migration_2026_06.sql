-- ═══════════════════════════════════════════════════════════════
-- maformationcivique.fr — Migration juin 2026
-- À coller dans : Supabase > SQL Editor > New query > Run
--
-- Corrige :
--  1) Le code de l'app lit/écrit la table "progression" mais le
--     schéma initial (schema.sql) avait créé "user_progress".
--     → la table "progression" n'existe donc pas en prod, ce qui
--       fait échouer silencieusement l'enregistrement de la
--       progression ET le déblocage des badges.
--  2) "user_badges" n'avait qu'une policy SELECT → les .insert()
--     de l'API étaient bloqués par la RLS (badges jamais créés).
--  3) Colonnes manquantes sur "users" pour l'onboarding (étape
--     "démarche / niveau de langue / accompagnement") et pour le
--     parrainage ("Parrainer un proche").
--
-- Ce script est idempotent : il peut être exécuté plusieurs fois
-- sans danger, quel que soit l'état actuel de la base.
-- ═══════════════════════════════════════════════════════════════

-- ── 1. Renommer user_progress → progression (si besoin) ─────────
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

-- Si ni l'une ni l'autre n'existe (base toute neuve), on la crée
CREATE TABLE IF NOT EXISTS public.progression (
  id           uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id      uuid REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  module_slug  text NOT NULL,
  lesson_slug  text NOT NULL,
  completed    boolean DEFAULT false,
  completed_at timestamptz,
  xp_awarded   integer DEFAULT 0,
  created_at   timestamptz DEFAULT now()
);

-- Garantir la contrainte UNIQUE(user_id, lesson_slug) requise par
-- l'upsert "onConflict: 'user_id,lesson_slug'" de l'API
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

ALTER TABLE public.progression ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "progress_all_own" ON public.progression;
DROP POLICY IF EXISTS "progression_all_own" ON public.progression;
CREATE POLICY "progression_all_own" ON public.progression
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_progression_user   ON public.progression(user_id);
CREATE INDEX IF NOT EXISTS idx_progression_lesson ON public.progression(lesson_slug);

-- ── 2. user_badges : autoriser l'insertion par l'utilisateur ────
CREATE TABLE IF NOT EXISTS public.user_badges (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id     uuid REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  badge_slug  text NOT NULL,
  earned_at   timestamptz DEFAULT now(),
  UNIQUE(user_id, badge_slug)
);

ALTER TABLE public.user_badges ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "badges_select_own" ON public.user_badges;
DROP POLICY IF EXISTS "badges_all_own" ON public.user_badges;
CREATE POLICY "badges_all_own" ON public.user_badges
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_badges_user ON public.user_badges(user_id);

-- ── 3. quiz_results (si jamais absente) ──────────────────────────
CREATE TABLE IF NOT EXISTS public.quiz_results (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id     uuid REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  module_slug text,
  exam_level  text,
  score       integer,
  total_q     integer,
  correct_q   integer,
  passed      boolean,
  answered_at timestamptz DEFAULT now()
);

ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "results_all_own" ON public.quiz_results;
CREATE POLICY "results_all_own" ON public.quiz_results
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_results_user ON public.quiz_results(user_id);

-- ── 4. Colonnes "users" pour onboarding + parrainage ─────────────
ALTER TABLE public.users
  ADD COLUMN IF NOT EXISTS demarche        text,    -- 'CSP' | 'carte_resident' | 'naturalisation'
  ADD COLUMN IF NOT EXISTS langue_niveau   text,    -- 'A2' | 'B1_B2' | 'besoin_examen' | 'ne_sait_pas'
  ADD COLUMN IF NOT EXISTS accompagne      boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS onboarding_done boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS referred_by     text;    -- id (uuid en texte) du parrain, optionnel

CREATE INDEX IF NOT EXISTS idx_users_referred_by ON public.users(referred_by);

-- ═══════════════════════════════════════════════════════════════
-- Fin de la migration.
-- ═══════════════════════════════════════════════════════════════
