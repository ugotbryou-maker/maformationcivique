/**
 * POST /api/admin/facturation/creer
 * Crée une facture pour un cabinet, sur une période donnée.
 *
 * Body: {
 *   cabinet_id, periode_debut, periode_fin,
 *   lignes?: [{ libelle, quantite, prix_unitaire }],   // sinon calculées
 *   marquer_facture?: boolean                           // pointe les activations
 * }
 *
 * Les lignes par défaut viennent du contrat du cabinet : activations de la
 * période pour une facturation à l'usage, forfait annuel sinon.
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';
import {
  numeroFacture, totaux, echeance, manquesEmetteur, manquesClient,
  type Emetteur, type LigneFacture,
} from '@/lib/facturation';

const TIER_PRIX_ANNUEL: Record<string, number> = {
  starter: 390, pro: 990, cabinet_plus: 1990, reseau: 3990, essai: 0,
};

export async function POST(req: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!isAdminEmail(user?.email)) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });
    }

    const body = await req.json() as {
      cabinet_id?: string; periode_debut?: string; periode_fin?: string;
      lignes?: { libelle: string; quantite: number; prix_unitaire: number }[];
      marquer_facture?: boolean;
    };

    if (!body.cabinet_id) {
      return NextResponse.json({ error: 'cabinet_id manquant' }, { status: 400 });
    }

    const s = createServiceRoleClient();

    const [{ data: emetteur }, { data: cabinet }] = await Promise.all([
      s.from('facturation_emetteur').select('*').eq('id', true).single(),
      s.from('cabinets').select('*').eq('id', body.cabinet_id).single(),
    ]);

    if (!cabinet) return NextResponse.json({ error: 'Cabinet introuvable' }, { status: 404 });

    const client = {
      raison_sociale: cabinet.fact_raison_sociale || cabinet.name,
      adresse: cabinet.fact_adresse, code_postal: cabinet.fact_code_postal,
      ville: cabinet.fact_ville, pays: cabinet.fact_pays ?? 'France',
      siret: cabinet.fact_siret, tva_intracom: cabinet.fact_tva_intracom,
      email: cabinet.fact_email || cabinet.contact_email,
      reference: cabinet.fact_reference,
    };

    // On refuse d'émettre un document non conforme plutôt que de le produire
    // et de le laisser revenir.
    const manques = [
      ...manquesEmetteur(emetteur as Emetteur | null).map((m) => `Émetteur : ${m}`),
      ...manquesClient(client).map((m) => `Client : ${m}`),
    ];
    if (manques.length) {
      return NextResponse.json({ error: 'Informations manquantes', manques }, { status: 422 });
    }

    const e = emetteur as Emetteur & { prochain_numero: number; prefixe_numero: string };

    // ── Lignes ───────────────────────────────────────────────────────────
    let lignes: LigneFacture[];
    let activationsFacturees: string[] = [];

    if (body.lignes?.length) {
      lignes = body.lignes.map((l) => ({
        libelle: l.libelle,
        quantite: Number(l.quantite) || 0,
        prix_unitaire: Number(l.prix_unitaire) || 0,
        total: Math.round((Number(l.quantite) || 0) * (Number(l.prix_unitaire) || 0) * 100) / 100,
      }));
    } else if (cabinet.billing_mode === 'usage') {
      let q = s.from('cabinet_invites')
        .select('id, redeemed_at')
        .eq('cabinet_id', cabinet.id)
        .not('redeemed_at', 'is', null)
        .is('facture_le', null);
      if (body.periode_debut) q = q.gte('redeemed_at', body.periode_debut);
      if (body.periode_fin) q = q.lte('redeemed_at', `${body.periode_fin}T23:59:59`);

      const { data: activations } = await q;
      const n = activations?.length ?? 0;
      activationsFacturees = (activations ?? []).map((a) => a.id);
      const pu = (cabinet.prix_activation_cents ?? 0) / 100;

      if (n === 0) {
        return NextResponse.json(
          { error: 'Aucune activation à facturer sur cette période' }, { status: 422 });
      }
      lignes = [{
        libelle: `Accès plateforme — ${n} compte${n > 1 ? 's' : ''} activé${n > 1 ? 's' : ''}`,
        quantite: n, prix_unitaire: pu, total: Math.round(n * pu * 100) / 100,
      }];
    } else {
      const prix = TIER_PRIX_ANNUEL[cabinet.tier] ?? 0;
      lignes = [{
        libelle: `Licence annuelle ${cabinet.tier} — jusqu'à ${cabinet.max_invitations ?? 'illimité'} comptes`,
        quantite: 1, prix_unitaire: prix, total: prix,
      }];
    }

    const t = totaux(lignes, e.franchise_tva, e.taux_tva);
    const emission = new Date();
    const numero = numeroFacture(e.prefixe_numero, e.prochain_numero, emission.getFullYear());

    const { data: facture, error } = await s.from('factures').insert({
      numero,
      cabinet_id: cabinet.id,
      client,
      // L'émetteur est figé dans la facture : un changement d'adresse ne doit
      // pas réécrire les factures déjà émises.
      emetteur: e,
      lignes,
      periode_debut: body.periode_debut ?? null,
      periode_fin: body.periode_fin ?? null,
      total_ht: t.ht,
      taux_tva: e.franchise_tva ? 0 : e.taux_tva,
      total_tva: t.tva,
      total_ttc: t.ttc,
      date_emission: emission.toISOString().slice(0, 10),
      date_echeance: echeance(emission, e.delai_paiement_jours).toISOString().slice(0, 10),
      statut: 'brouillon',
    }).select('id, numero').single();

    if (error || !facture) {
      console.error('[facturation/creer]', error?.message);
      return NextResponse.json({ error: error?.message ?? 'Création impossible' }, { status: 500 });
    }

    // Numérotation : incrémentée seulement après insertion réussie, pour ne
    // pas laisser de trou dans la séquence — ce que l'administration regarde.
    await s.from('facturation_emetteur')
      .update({ prochain_numero: e.prochain_numero + 1 }).eq('id', true);

    if (body.marquer_facture && activationsFacturees.length) {
      await s.from('cabinet_invites')
        .update({ facture_le: new Date().toISOString(), facture_ref: numero })
        .in('id', activationsFacturees);
    }

    return NextResponse.json({ ok: true, id: facture.id, numero, total_ttc: t.ttc });
  } catch (err) {
    console.error('[facturation/creer] erreur', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
