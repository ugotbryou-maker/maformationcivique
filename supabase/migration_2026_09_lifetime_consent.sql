-- ═══════════════════════════════════════════════════════════════
-- Table lifetime_consents — preuve de consentement à la clause
-- "Accès à vie" (CGU Art. 4.4bis) avant paiement Stripe.
-- ═══════════════════════════════════════════════════════════════
-- CONTEXTE : l'offre "Accès à vie" (20€, paiement unique) repose sur
-- une définition contractuelle précise de "à vie" (liée à la durée
-- d'exploitation du site, pas à celle de l'utilisateur). Pour pouvoir
-- prouver que le client a bien lu et accepté cette clause AVANT de
-- payer (et pas seulement via l'acceptation générale des CGU à
-- l'inscription), on horodate un enregistrement dédié.
--
-- À exécuter : Supabase > SQL Editor > New query > Run
-- ═══════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS public.lifetime_consents (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  email         text,
  cgu_version   text NOT NULL DEFAULT '2.2',
  accepted_at   timestamptz NOT NULL DEFAULT now(),
  ip            text,
  user_agent    text
);

CREATE INDEX IF NOT EXISTS lifetime_consents_user_id_idx ON public.lifetime_consents(user_id);

ALTER TABLE public.lifetime_consents ENABLE ROW LEVEL SECURITY;

-- Un utilisateur ne peut voir que ses propres consentements
DROP POLICY IF EXISTS "lifetime_consents_select_own" ON public.lifetime_consents;
CREATE POLICY "lifetime_consents_select_own" ON public.lifetime_consents
  FOR SELECT USING (auth.uid() = user_id);

-- Aucune écriture directe côté client : uniquement via la route API
-- (service role), pour garantir l'intégrité de la preuve.
