-- ═══════════════════════════════════════════════════════════════
-- Traçabilité des relances administrateur
-- À exécuter : Supabase > SQL Editor > New query > Run
-- ═══════════════════════════════════════════════════════════════
-- Sans trace, rien n'empêche de relancer la même personne plusieurs fois
-- dans la semaine depuis deux sessions différentes — et rien ne permet de
-- mesurer si une relance a produit un retour.
--
-- Le code fonctionne sans ces colonnes : la relance part quand même, seule
-- la trace est perdue.
-- ═══════════════════════════════════════════════════════════════

ALTER TABLE public.users
  ADD COLUMN IF NOT EXISTS relance_le    timestamptz,
  ADD COLUMN IF NOT EXISTS relance_motif text;

CREATE INDEX IF NOT EXISTS idx_users_relance_le ON public.users(relance_le DESC NULLS LAST);

-- Contrôle : qui a été relancé, et est-il revenu depuis ?
--   SELECT email, relance_motif, relance_le, last_active,
--          (last_active::timestamptz > relance_le) AS revenu_apres
--     FROM public.users
--    WHERE relance_le IS NOT NULL
--    ORDER BY relance_le DESC;
