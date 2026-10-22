/**
 * GET /api/admin/facturation/[id]/pdf
 * Télécharge la facture au format PDF.
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';
import { genererFacturePdf, type DonneesFacture } from '@/lib/facture-pdf';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!isAdminEmail(user?.email)) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });
    }

    const { id } = await params;
    const s = createServiceRoleClient();
    const { data: f } = await s.from('factures').select('*').eq('id', id).single();
    if (!f) return NextResponse.json({ error: 'Facture introuvable' }, { status: 404 });

    const pdf = await genererFacturePdf(f as unknown as DonneesFacture);

    return new NextResponse(Buffer.from(pdf), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="facture-${f.numero}.pdf"`,
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    console.error('[facturation/pdf] erreur', err);
    return NextResponse.json({ error: 'Génération impossible' }, { status: 500 });
  }
}
