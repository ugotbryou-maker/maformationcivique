-- ═══════════════════════════════════════════════════════════════
-- maformationcivique.fr — Migration juin 2026 (d)
-- À coller dans : Supabase > SQL Editor > New query > Run
--
-- Ajoute un champ "téléphone" (optionnel) collecté à l'étape 2 de
-- l'onboarding (/onboarding), synchronisé vers Brevo (attribut SMS)
-- pour le suivi commercial.
--
-- Idempotent : peut être exécuté plusieurs fois sans danger.
-- ═══════════════════════════════════════════════════════════════

ALTER TABLE public.users
  ADD COLUMN IF NOT EXISTS telephone text;

-- ═══════════════════════════════════════════════════════════════
-- Fin de la migration.
-- ═══════════════════════════════════════════════════════════════
