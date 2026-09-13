-- ═══════════════════════════════════════════════════════════════
-- Partenaires à l'usage — IR 99 Formation
-- À exécuter : Supabase > SQL Editor > New query > Run
-- ═══════════════════════════════════════════════════════════════
-- CONTEXTE : l'offre B2B existante était un forfait annuel avec un
-- quota fixe, et tout membre invité recevait plan='premium' (civique
-- seul) en dur dans le code. Deux limites bloquantes pour IR 99 :
--   1. leur offre inclut le civique ET le linguistique → 'bundle' ;
--   2. la facturation se fait à l'activation (20 € par personne
--      réellement inscrite), sans plafond de sièges.
--
-- On rend donc ces deux paramètres portés par le cabinet, et non
-- par le code.
-- ═══════════════════════════════════════════════════════════════

-- ── 1. Nouvelles colonnes ────────────────────────────────────────
ALTER TABLE public.cabinets
  -- Accès accordé aux membres invités : 'premium' | 'langue' | 'bundle'
  ADD COLUMN IF NOT EXISTS member_plan            text NOT NULL DEFAULT 'premium',
  -- 'forfait' = palier annuel · 'usage' = facturé à l'activation
  ADD COLUMN IF NOT EXISTS billing_mode           text NOT NULL DEFAULT 'forfait',
  -- Montant facturé par personne activée, en centimes (mode 'usage')
  ADD COLUMN IF NOT EXISTS prix_activation_cents  integer,
  ADD COLUMN IF NOT EXISTS website                text,
  ADD COLUMN IF NOT EXISTS notes                  text;

ALTER TABLE public.cabinets
  DROP CONSTRAINT IF EXISTS cabinets_member_plan_check;
ALTER TABLE public.cabinets
  ADD CONSTRAINT cabinets_member_plan_check
  CHECK (member_plan IN ('premium', 'langue', 'bundle'));

ALTER TABLE public.cabinets
  DROP CONSTRAINT IF EXISTS cabinets_billing_mode_check;
ALTER TABLE public.cabinets
  ADD CONSTRAINT cabinets_billing_mode_check
  CHECK (billing_mode IN ('forfait', 'usage'));

-- ── 2. Quota illimité ────────────────────────────────────────────
-- NULL = aucun plafond de sièges. La route d'invitation traite
-- désormais NULL comme « illimité » au lieu de refuser.
ALTER TABLE public.cabinets
  ALTER COLUMN max_invitations DROP NOT NULL;

-- ── 3. Traçabilité de la facturation à l'usage ───────────────────
-- On marque les activations déjà facturées pour ne jamais refacturer
-- la même personne deux fois.
ALTER TABLE public.cabinet_invites
  ADD COLUMN IF NOT EXISTS facture_le  timestamptz,
  ADD COLUMN IF NOT EXISTS facture_ref text;

CREATE INDEX IF NOT EXISTS idx_cabinet_invites_redeemed
  ON public.cabinet_invites(cabinet_id, redeemed_at);

-- ── 4. Création du partenaire IR 99 Formation ────────────────────
INSERT INTO public.cabinets
  (name, contact_email, tier, max_invitations, member_plan,
   billing_mode, prix_activation_cents, website, palette_slug, notes)
SELECT
  'IR 99 Formation',
  'contact@ir99formation.com',
  'reseau',
  NULL,              -- sièges illimités
  'bundle',          -- civique + linguistique
  'usage',
  2000,              -- 20 € par personne activée
  'https://www.ir99formation.com',
  'ir99',
  'Partenaire revendeur : l''accès à la plateforme est inclus dans leur propre offre de formation. Facturation mensuelle à l''activation.'
WHERE NOT EXISTS (
  SELECT 1 FROM public.cabinets WHERE contact_email = 'contact@ir99formation.com'
);

-- ── 5. Vérification ──────────────────────────────────────────────
-- SELECT id, name, member_plan, billing_mode, prix_activation_cents,
--        max_invitations
--   FROM public.cabinets WHERE contact_email = 'contact@ir99formation.com';
