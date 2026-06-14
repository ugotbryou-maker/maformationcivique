-- ═══════════════════════════════════════════════════════════════
-- maformationcivique.fr — Migration juin 2026 (e)
-- À coller dans : Supabase > SQL Editor > New query > Run
--
-- Offre B2B "Cabinets & associations" : dashboard d'invitations +
-- attestations de suivi.
--
-- Idempotent : peut être exécuté plusieurs fois sans danger.
-- ═══════════════════════════════════════════════════════════════

-- ── 1. Table cabinets ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.cabinets (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name             text NOT NULL,
  contact_email    text NOT NULL,
  tier             text NOT NULL DEFAULT 'starter', -- 'starter' | 'pro' | 'cabinet_plus' | 'reseau'
  max_invitations  integer NOT NULL DEFAULT 15,
  sub_end_at       date,
  created_at       timestamptz NOT NULL DEFAULT now()
);

-- ── 2. Table cabinet_invites ─────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.cabinet_invites (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  cabinet_id       uuid NOT NULL REFERENCES public.cabinets(id) ON DELETE CASCADE,
  email            text NOT NULL,
  role             text NOT NULL DEFAULT 'member',   -- 'admin' | 'member'
  token            text NOT NULL UNIQUE,
  invited_by       uuid REFERENCES public.users(id),
  created_at       timestamptz NOT NULL DEFAULT now(),
  expires_at       timestamptz NOT NULL DEFAULT now() + interval '30 days',
  redeemed_at      timestamptz,
  redeemed_user_id uuid REFERENCES public.users(id)
);

-- ── 3. Lien utilisateur ↔ cabinet ────────────────────────────────
ALTER TABLE public.users
  ADD COLUMN IF NOT EXISTS cabinet_id   uuid REFERENCES public.cabinets(id),
  ADD COLUMN IF NOT EXISTS cabinet_role text; -- 'admin' | 'member'

-- ── 4. RLS ────────────────────────────────────────────────────────
ALTER TABLE public.cabinets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cabinet_invites ENABLE ROW LEVEL SECURITY;

-- Un utilisateur admin de cabinet voit son propre cabinet
DROP POLICY IF EXISTS "cabinets_select_own" ON public.cabinets;
CREATE POLICY "cabinets_select_own" ON public.cabinets
  FOR SELECT USING (
    id IN (SELECT cabinet_id FROM public.users WHERE id = auth.uid())
  );

-- Un utilisateur admin de cabinet voit les invites de son cabinet
DROP POLICY IF EXISTS "cabinet_invites_select_own" ON public.cabinet_invites;
CREATE POLICY "cabinet_invites_select_own" ON public.cabinet_invites
  FOR SELECT USING (
    cabinet_id IN (SELECT cabinet_id FROM public.users WHERE id = auth.uid())
  );

-- Toute écriture (création de cabinet, d'invitations, rédemption) passe
-- par les routes API avec le client service-role — pas de policy INSERT/UPDATE
-- côté client.

-- ── 5. Index ──────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_cabinet_invites_cabinet ON public.cabinet_invites(cabinet_id);
CREATE INDEX IF NOT EXISTS idx_cabinet_invites_token   ON public.cabinet_invites(token);
CREATE INDEX IF NOT EXISTS idx_users_cabinet           ON public.users(cabinet_id);

-- ═══════════════════════════════════════════════════════════════
-- Fin de la migration.
-- ═══════════════════════════════════════════════════════════════
