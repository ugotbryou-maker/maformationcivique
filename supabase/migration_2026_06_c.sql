-- ═══════════════════════════════════════════════════════════════
-- maformationcivique.fr — Migration juin 2026 (c)
-- À coller dans : Supabase > SQL Editor > New query > Run
--
-- Programme de parrainage (solution A) : un code promo Stripe
-- "PARRAINAGE20" (-20% sur le 1er mois) est appliqué automatiquement
-- au checkout d'un utilisateur parrainé (referred_by non nul), une
-- seule fois par compte.
--
-- Idempotent : peut être exécuté plusieurs fois sans danger.
-- ═══════════════════════════════════════════════════════════════

ALTER TABLE public.users
  ADD COLUMN IF NOT EXISTS referral_discount_used boolean DEFAULT false;

-- ═══════════════════════════════════════════════════════════════
-- Fin de la migration.
-- ═══════════════════════════════════════════════════════════════
