-- apercu_cache : identités visuelles extraites par domaine
CREATE TABLE IF NOT EXISTS public.apercu_cache (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug         text UNIQUE NOT NULL,
  domain       text NOT NULL,
  cabinet_name text NOT NULL,
  logo_url     text,
  logo_type    text NOT NULL DEFAULT 'url',     -- 'url' | 'monogram'
  monogram     text,
  accent_color text NOT NULL DEFAULT '#002395',
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now()
);

-- apercu_leads : leads capturés depuis les pages de démonstration
CREATE TABLE IF NOT EXISTS public.apercu_leads (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  apercu_slug  text NOT NULL,
  domain       text NOT NULL,
  cabinet_name text,
  lead_name    text NOT NULL,
  lead_email   text,
  lead_phone   text,
  consented_at timestamptz NOT NULL,
  created_at   timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.apercu_cache  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.apercu_leads  ENABLE ROW LEVEL SECURITY;

-- Lecture publique des aperçus (nécessaire pour les liens partagés)
CREATE POLICY "apercu_cache_public_read"
  ON public.apercu_cache FOR SELECT USING (true);

-- Écriture réservée au service_role (route API)
