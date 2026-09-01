-- ═══════════════════════════════════════════════════════════════
-- Fix contrainte users_plan_check — autoriser 'langue' et 'bundle'
-- ═══════════════════════════════════════════════════════════════
-- CONTEXTE : le webhook Stripe écrit plan = 'langue' ou 'bundle'
-- (offres Langue française / Bundle Civique+Langue). L'ancienne
-- contrainte n'autorisait que 'free' | 'premium' → l'UPDATE échouait
-- et le client payait sans que son accès soit activé.
--
-- À exécuter : Supabase > SQL Editor > New query > Run
-- ═══════════════════════════════════════════════════════════════

ALTER TABLE public.users
  DROP CONSTRAINT IF EXISTS users_plan_check;

ALTER TABLE public.users
  ADD CONSTRAINT users_plan_check
  CHECK (plan IN ('free', 'premium', 'langue', 'bundle'));
