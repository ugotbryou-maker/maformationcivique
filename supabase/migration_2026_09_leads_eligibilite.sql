-- ═══════════════════════════════════════════════════════════════
-- Table leads_eligibilite — persistance des leads du test d'éligibilité
-- ═══════════════════════════════════════════════════════════════
-- CONTEXTE : /api/lead/eligibilite se contentait d'envoyer un e-mail.
-- Aucune trace en base, donc aucun moyen de retrouver un prospect, de
-- mesurer le volume, ni de transmettre proprement un dossier à un avocat
-- partenaire. Les métadonnées techniques (IP, user-agent, provenance)
-- étaient perdues elles aussi.
--
-- RGPD : l'adresse IP est une donnée personnelle. Sa collecte est déjà
-- annoncée dans la politique de confidentialité (« données techniques :
-- adresse IP, navigateur, logs de connexion »). Prévoir une purge
-- périodique — voir la vue de contrôle en fin de fichier.
--
-- À exécuter : Supabase > SQL Editor > New query > Run
-- ═══════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS public.leads_eligibilite (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at     timestamptz NOT NULL DEFAULT now(),

  -- Identité déclarée
  prenom         text,
  nom            text,
  email          text,
  telephone      text,

  -- Résultat du test
  demarche       text,
  verdict        text,
  routage        text,          -- 'avocat' | 'formation' | 'langue' | 'mixte'
  qualification  text,
  reponses       jsonb,

  -- Consentement au recontact (case cochée dans le formulaire)
  consent        boolean NOT NULL DEFAULT false,
  consent_at     timestamptz,

  -- Métadonnées techniques (traçabilité et lutte contre les soumissions
  -- frauduleuses). Voir la politique de confidentialité.
  ip             text,
  user_agent     text,
  referer        text,
  utm_source     text,
  utm_medium     text,
  utm_campaign   text,

  -- Suivi commercial
  statut         text NOT NULL DEFAULT 'nouveau',  -- nouveau | contacte | transmis | perdu
  transmis_a     text,
  transmis_le    timestamptz,
  notes          text
);

CREATE INDEX IF NOT EXISTS leads_eligibilite_created_idx ON public.leads_eligibilite(created_at DESC);
CREATE INDEX IF NOT EXISTS leads_eligibilite_email_idx   ON public.leads_eligibilite(email);
CREATE INDEX IF NOT EXISTS leads_eligibilite_routage_idx ON public.leads_eligibilite(routage);

-- Aucun accès client : la table n'est lue et écrite que par la clé de
-- service, depuis les routes serveur et le tableau de bord admin.
ALTER TABLE public.leads_eligibilite ENABLE ROW LEVEL SECURITY;

-- ── Contrôle de rétention ──────────────────────────────────────
-- Repérer les leads dont les métadonnées techniques devraient être purgées
-- (ici : plus de 12 mois). À exécuter périodiquement.
--
--   UPDATE public.leads_eligibilite
--      SET ip = NULL, user_agent = NULL
--    WHERE created_at < now() - interval '12 months'
--      AND ip IS NOT NULL;
