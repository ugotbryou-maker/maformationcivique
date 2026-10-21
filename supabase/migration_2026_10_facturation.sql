-- ═══════════════════════════════════════════════════════════════
-- Facturation des partenaires B2B
-- À exécuter : Supabase > SQL Editor > New query > Run
-- ═══════════════════════════════════════════════════════════════
-- Trois objets :
--   1. l'émetteur  : vos propres coordonnées légales, saisies une fois ;
--   2. le client   : les coordonnées de facturation de chaque cabinet ;
--   3. les factures: numérotées, figées, et conservées telles qu'émises.
--
-- Une facture émise ne doit JAMAIS être recalculée à l'affichage : si vos
-- tarifs changent, une facture de l'an dernier doit continuer à montrer les
-- montants de l'an dernier. Les lignes sont donc recopiées dans la facture,
-- pas référencées.
-- ═══════════════════════════════════════════════════════════════

-- ── 1. Émetteur — une seule ligne ────────────────────────────────
CREATE TABLE IF NOT EXISTS public.facturation_emetteur (
  id                  boolean PRIMARY KEY DEFAULT true CHECK (id),  -- force l'unicité
  denomination        text,
  forme_juridique     text,          -- SAS, SASU, EI, micro-entreprise…
  capital_social      text,          -- obligatoire pour une société
  adresse             text,
  code_postal         text,
  ville               text,
  pays                text NOT NULL DEFAULT 'France',
  siret               text,
  rcs_ville           text,          -- « RCS Paris 123 456 789 »
  tva_intracom        text,          -- vide si franchise en base
  franchise_tva       boolean NOT NULL DEFAULT true,
  taux_tva            numeric NOT NULL DEFAULT 20,
  email               text,
  telephone           text,
  iban                text,
  bic                 text,
  banque              text,
  -- Mentions de retard : obligatoires entre professionnels
  -- (code de commerce, art. L441-10 et D441-5).
  penalites_retard    text NOT NULL DEFAULT 'Trois fois le taux d''intérêt légal',
  indemnite_recouvrement numeric NOT NULL DEFAULT 40,
  delai_paiement_jours integer NOT NULL DEFAULT 30,
  prefixe_numero      text NOT NULL DEFAULT 'MFC',
  prochain_numero     integer NOT NULL DEFAULT 1,
  mentions_pied       text,
  updated_at          timestamptz NOT NULL DEFAULT now()
);

INSERT INTO public.facturation_emetteur (id) VALUES (true)
ON CONFLICT (id) DO NOTHING;

-- ── 2. Coordonnées de facturation du cabinet ─────────────────────
ALTER TABLE public.cabinets
  ADD COLUMN IF NOT EXISTS fact_raison_sociale text,
  ADD COLUMN IF NOT EXISTS fact_adresse        text,
  ADD COLUMN IF NOT EXISTS fact_code_postal    text,
  ADD COLUMN IF NOT EXISTS fact_ville          text,
  ADD COLUMN IF NOT EXISTS fact_pays           text DEFAULT 'France',
  ADD COLUMN IF NOT EXISTS fact_siret          text,
  ADD COLUMN IF NOT EXISTS fact_tva_intracom   text,
  ADD COLUMN IF NOT EXISTS fact_email          text,
  ADD COLUMN IF NOT EXISTS fact_reference      text;  -- bon de commande du client

-- ── 3. Factures ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.factures (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  numero          text NOT NULL UNIQUE,
  cabinet_id      uuid REFERENCES public.cabinets(id) ON DELETE SET NULL,
  -- Identité du client recopiée : si le cabinet change d'adresse, la facture
  -- déjà émise doit garder celle qui y figurait.
  client          jsonb NOT NULL,
  emetteur        jsonb NOT NULL,
  lignes          jsonb NOT NULL,   -- [{ libelle, quantite, prix_unitaire, total }]
  periode_debut   date,
  periode_fin     date,
  total_ht        numeric NOT NULL,
  taux_tva        numeric NOT NULL DEFAULT 0,
  total_tva       numeric NOT NULL DEFAULT 0,
  total_ttc       numeric NOT NULL,
  date_emission   date NOT NULL DEFAULT current_date,
  date_echeance   date,
  statut          text NOT NULL DEFAULT 'brouillon',  -- brouillon | emise | payee | annulee
  paye_le         date,
  notes           text,
  created_at      timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_factures_cabinet ON public.factures(cabinet_id);
CREATE INDEX IF NOT EXISTS idx_factures_date    ON public.factures(date_emission DESC);

-- Aucun accès client : tout passe par la clé de service, depuis l'admin.
ALTER TABLE public.facturation_emetteur ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.factures ENABLE ROW LEVEL SECURITY;

-- ── Contrôle ─────────────────────────────────────────────────────
-- SELECT numero, statut, total_ttc, date_emission FROM public.factures
--  ORDER BY date_emission DESC;
