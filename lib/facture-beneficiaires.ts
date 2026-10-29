/**
 * Liste nominative des comptes couverts par une facture.
 *
 * La liste est normalement figée dans la facture à sa création. Deux cas la
 * laissent vide : les factures émises avant que le détail nominatif existe,
 * et les licences au forfait, qui ne pointent aucune activation. On la
 * reconstitue alors depuis les invitations du partenaire — d'abord celles
 * pointées sur ce numéro de facture, à défaut celles activées pendant la
 * période facturée.
 */

import type { SupabaseClient } from '@supabase/supabase-js';
import type { Beneficiaire } from '@/lib/facturation';

export interface FactureAvecComptes {
  id?: string;
  numero: string;
  cabinet_id?: string | null;
  beneficiaires?: unknown;
  periode_debut?: string | null;
  periode_fin?: string | null;
}

export interface DetailComptes {
  liste: Beneficiaire[];
  /** 'facturees' : comptes pointés sur cette facture. 'periode' : comptes
   *  du partenaire activés pendant la période couverte. */
  origine: 'facturees' | 'periode';
}

interface InviteLigne {
  email: string | null;
  redeemed_at: string | null;
  redeemed_user_id: string | null;
}

async function nommer(
  s: SupabaseClient, invites: InviteLigne[],
): Promise<Beneficiaire[]> {
  const ids = invites.map((i) => i.redeemed_user_id).filter((x): x is string => !!x);
  const { data: comptes } = ids.length
    ? await s.from('users').select('id, name, email').in('id', ids)
    : { data: [] as { id: string; name: string | null; email: string | null }[] };
  const parId = new Map((comptes ?? []).map((c) => [c.id, c]));

  return invites
    .map((i) => {
      const u = i.redeemed_user_id ? parId.get(i.redeemed_user_id) : null;
      return {
        nom: (u?.name ?? '').trim(),
        email: u?.email ?? i.email ?? '',
        date: i.redeemed_at,
      };
    })
    .sort((a, b) => (a.nom || a.email).localeCompare(b.nom || b.email, 'fr'));
}

export async function detailComptesFacture(
  s: SupabaseClient, f: FactureAvecComptes,
): Promise<DetailComptes> {
  const figes = Array.isArray(f.beneficiaires) ? (f.beneficiaires as Beneficiaire[]) : [];
  if (figes.length) return { liste: figes, origine: 'facturees' };
  if (!f.cabinet_id) return { liste: [], origine: 'facturees' };

  const base = () => s
    .from('cabinet_invites')
    .select('email, redeemed_at, redeemed_user_id')
    .eq('cabinet_id', f.cabinet_id!)
    // Le compte d'administration du partenaire n'est pas un client facturé.
    .eq('role', 'member')
    .not('redeemed_at', 'is', null);

  const { data: pointees } = await base().eq('facture_ref', f.numero);
  if (pointees?.length) {
    return { liste: await nommer(s, pointees), origine: 'facturees' };
  }

  if (!f.periode_debut && !f.periode_fin) return { liste: [], origine: 'periode' };

  let q = base();
  if (f.periode_debut) q = q.gte('redeemed_at', f.periode_debut);
  if (f.periode_fin) q = q.lte('redeemed_at', `${f.periode_fin}T23:59:59`);
  const { data: periode } = await q;

  return { liste: await nommer(s, periode ?? []), origine: 'periode' };
}

/**
 * Même lecture, puis gel de la liste dans la facture : un document transmis
 * au client ne doit pas changer parce qu'un compte a été renommé depuis.
 */
export async function detailComptesEtFiger(
  s: SupabaseClient, f: FactureAvecComptes,
): Promise<DetailComptes> {
  const d = await detailComptesFacture(s, f);
  const dejaFige = Array.isArray(f.beneficiaires) && f.beneficiaires.length > 0;
  if (!dejaFige && d.liste.length && f.id) {
    await s.from('factures').update({ beneficiaires: d.liste }).eq('id', f.id);
  }
  return d;
}
