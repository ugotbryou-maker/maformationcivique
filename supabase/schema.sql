-- ═══════════════════════════════════════════════════════════════
-- maformationcivique.fr — Schéma Supabase complet
-- À coller dans : Supabase > SQL Editor > New query > Run
-- ═══════════════════════════════════════════════════════════════

-- ── 1. Table users ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.users (
  id            uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email         text,
  name          text,
  plan          text DEFAULT 'free',          -- 'free' | 'premium'
  stripe_id     text,
  sub_end_at    timestamptz,
  xp            integer DEFAULT 0,
  streak_days   integer DEFAULT 0,
  last_active   date,
  lang          text,                          -- niveau langue (futur)
  proc_type     text,                          -- type démarche (futur)
  created_at    timestamptz DEFAULT now()
);

-- Créé automatiquement lors de l'inscription (trigger)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  INSERT INTO public.users (id, email, name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1))
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ── 2. Table user_progress ──────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.user_progress (
  id           uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id      uuid REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  module_slug  text NOT NULL,
  lesson_slug  text NOT NULL,
  completed    boolean DEFAULT false,
  completed_at timestamptz,
  xp_awarded   integer DEFAULT 0,
  created_at   timestamptz DEFAULT now(),
  UNIQUE(user_id, lesson_slug)
);

-- ── 3. Table quiz_results ───────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.quiz_results (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id     uuid REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  module_slug text,
  exam_level  text,
  score       integer,                         -- % score (0-100)
  total_q     integer,
  correct_q   integer,
  passed      boolean,
  answered_at timestamptz DEFAULT now()
);

-- ── 4. Table user_badges ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.user_badges (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id     uuid REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  badge_slug  text NOT NULL,
  earned_at   timestamptz DEFAULT now(),
  UNIQUE(user_id, badge_slug)
);

-- ── 5. RLS (Row Level Security) ─────────────────────────────────
ALTER TABLE public.users         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_results  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_badges   ENABLE ROW LEVEL SECURITY;

-- users : chacun voit/modifie seulement son profil
DROP POLICY IF EXISTS "users_select_own" ON public.users;
DROP POLICY IF EXISTS "users_update_own" ON public.users;
CREATE POLICY "users_select_own" ON public.users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "users_update_own" ON public.users FOR UPDATE USING (auth.uid() = id);

-- user_progress
DROP POLICY IF EXISTS "progress_all_own" ON public.user_progress;
CREATE POLICY "progress_all_own" ON public.user_progress
  FOR ALL USING (auth.uid() = user_id);

-- quiz_results
DROP POLICY IF EXISTS "results_all_own" ON public.quiz_results;
CREATE POLICY "results_all_own" ON public.quiz_results
  FOR ALL USING (auth.uid() = user_id);

-- user_badges
DROP POLICY IF EXISTS "badges_select_own" ON public.user_badges;
CREATE POLICY "badges_select_own" ON public.user_badges
  FOR SELECT USING (auth.uid() = user_id);

-- ── 6. Index performances ───────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_progress_user    ON public.user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_progress_lesson  ON public.user_progress(lesson_slug);
CREATE INDEX IF NOT EXISTS idx_results_user     ON public.quiz_results(user_id);
CREATE INDEX IF NOT EXISTS idx_badges_user      ON public.user_badges(user_id);

-- ═══════════════════════════════════════════════════════════════
-- Pour mettre un compte en premium (remplace l'email) :
-- UPDATE public.users SET plan = 'premium' WHERE email = 'ton@email.fr';
-- ═══════════════════════════════════════════════════════════════
