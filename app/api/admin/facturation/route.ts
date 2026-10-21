/**
 * Paramètres de facturation et coordonnées client.
 *
 * PUT  /api/admin/facturation            → enregistre l'émetteur
 * PUT  /api/admin/facturation?cabinet=id → enregistre les coordonnées du cabinet
 *
 * Réservé aux administrateurs.
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';

const CHAMPS_EMETTEUR = [
  'denomination', 'forme_juridique', 'capital_social', 'adresse', 'code_postal',
  'ville', 'pays', 'siret', 'rcs_ville', 'tva_intracom', 'franchise_tva',
  'taux_tva', 'email', 'telephone', 'iban', 'bic', 'banque',
  'penalites_retard', 'indemnite_recouvrement', 'delai_paiement_jours',
  'prefixe_numero', 'prochain_numero', 'mentions_pied',
] as const;

const CHAMPS_CLIENT = [
  'fact_raison_sociale', 'fact_adresse', 'fact_code_postal', 'fact_ville',
  'fact_pays', 'fact_siret', 'fact_tva_intracom', 'fact_email', 'fact_reference',
] as const;

async function admin(): Promise<boolean> {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  return isAdminEmail(user?.email);
}

/** Ne retient que les champs attendus : un corps de requête ne doit pas
 *  pouvoir écrire une colonne qu'on n'a pas prévue. */
function filtrer<T extends readonly string[]>(corps: Record<string, unknown>, permis: T) {
  const out: Record<string, unknown> = {};
  for (const k of permis) if (k in corps) out[k] = corps[k];
  return out;
}

export async function PUT(req: NextRequest) {
  try {
    if (!await admin()) return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });

    const corps = await req.json() as Record<string, unknown>;
    const cabinetId = req.nextUrl.searchParams.get('cabinet');
    const s = createServiceRoleClient();

    if (cabinetId) {
      const champs = filtrer(corps, CHAMPS_CLIENT);
      const { error } = await s.from('cabinets').update(champs).eq('id', cabinetId);
      if (error) {
        console.error('[facturation] client', error.message);
        return NextResponse.json({ error: 'Enregistrement impossible' }, { status: 500 });
      }
      return NextResponse.json({ ok: true });
    }

    const champs = filtrer(corps, CHAMPS_EMETTEUR);
    const { error } = await s
      .from('facturation_emetteur')
      .update({ ...champs, updated_at: new Date().toISOString() })
      .eq('id', true);

    if (error) {
      console.error('[facturation] émetteur', error.message);
      return NextResponse.json(
        { error: error.message.includes('does not exist')
            ? 'Table absente — exécutez supabase/migration_2026_10_facturation.sql'
            : 'Enregistrement impossible' },
        { status: 500 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[facturation] erreur', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
