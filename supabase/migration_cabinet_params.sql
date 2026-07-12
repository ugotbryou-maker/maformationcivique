-- Ajout des colonnes palette_slug et logo_url sur la table cabinets
-- palette_slug : palette de couleurs choisie par l'admin du cabinet
-- logo_url     : URL du logo uploadé (Phase 2 — Supabase Storage)

ALTER TABLE public.cabinets
  ADD COLUMN IF NOT EXISTS palette_slug text NOT NULL DEFAULT 'tricolore',
  ADD COLUMN IF NOT EXISTS logo_url     text;
