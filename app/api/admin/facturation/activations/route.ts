/**
 * GET /api/admin/facturation/activations?cabinet=…&debut=…&fin=…
 * Liste les comptes facturables d'un partenaire, pour que l'administrateur
 * coche ceux qu'il veut faire figurer sur la facture.
 *
 * Une activation est une invitation transformée en compte. On renvoie aussi
 * celles déjà facturées, grisées côté interface : il faut pouvoir constater
 * qu'elles l'ont été, et sur quelle facture.
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';

export async function GET(req: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!isAdminEmail(user?.email)) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });
    }

    const cabinetId = req.nextUrl.searchParams.get('cabinet');
    const debut = req.nextUrl.searchParams.get('debut');
    const fin = req.nextUrl.searchParams.get('fin');
    if (!cabinetId) return NextResponse.json({ error: 'cabinet manquant' }, { status: 400 });

    const s = createServiceRoleClient();

    // Le compte de pilotage du partenaire n'est pas un client : il lui sert à
    // suivre son portefeuille et à tester les leçons qu'il vend. Partout
    // ailleurs dans l'application il est écarté du décompte des clients ; le
    // facturer revenait à lui vendre son propre tableau de bord.
    let q = s.from('cabinet_invites')
      .select('id, email, redeemed_at, redeemed_user_id, facture_le, facture_ref')
      .eq('cabinet_id', cabinetId)
      .eq('role', 'member')
      .not('redeemed_at', 'is', null)
      .order('redeemed_at', { ascending: false });

    if (debut) q = q.gte('redeemed_at', debut);
    if (fin) q = q.lte('redeemed_at', `${fin}T23:59:59`);

    const { data: invites, error } = await q;
    if (error) {
      console.error('[facturation/activations]', error.message);
      return NextResponse.json({ error: 'Lecture impossible' }, { status: 500 });
    }

    // Le nom du compte rend la facture lisible pour le client ; l'e-mail de
    // l'invitation ne correspond pas toujours à celui du compte créé.
    const ids = (invites ?? []).map((i) => i.redeemed_user_id).filter((x): x is string => !!x);
    const { data: comptes } = ids.length
      ? await s.from('users').select('id, name, email').in('id', ids)
      : { data: [] as { id: string; name: string | null; email: string | null }[] };
    const parId = new Map((comptes ?? []).map((c) => [c.id, c]));

    return NextResponse.json({
      activations: (invites ?? []).map((i) => {
        const u = i.redeemed_user_id ? parId.get(i.redeemed_user_id) : null;
        return {
          id: i.id,
          nom: u?.name ?? '',
          email: u?.email ?? i.email,
          date: i.redeemed_at,
          dejaFacturee: !!i.facture_le,
          factureRef: i.facture_ref ?? null,
        };
      }),
    });
  } catch (err) {
    console.error('[facturation/activations] erreur', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
