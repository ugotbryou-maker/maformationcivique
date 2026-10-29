/**
 * POST /api/admin/facturation/[id]/envoyer
 * Envoie la facture par e-mail, en pièce jointe PDF.
 *
 * Body: { destinataire?: string, message?: string }
 * Sans destinataire, on prend l'e-mail de facturation enregistré sur le client.
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';
import { sendEmail } from '@/lib/brevo';
import { genererFacturePdf, type DonneesFacture } from '@/lib/facture-pdf';
import { detailComptesEtFiger } from '@/lib/facture-beneficiaires';
import { euros, type ClientFacture, type Emetteur } from '@/lib/facturation';

function jour(d: string | null) {
  return d ? new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }) : '—';
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!isAdminEmail(user?.email)) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });
    }

    const { id } = await params;
    const { destinataire, message } = await req.json() as
      { destinataire?: string; message?: string };

    const s = createServiceRoleClient();
    const { data: f } = await s.from('factures').select('*').eq('id', id).single();
    if (!f) return NextResponse.json({ error: 'Facture introuvable' }, { status: 404 });

    const c = f.client as ClientFacture;
    const e = f.emetteur as Emetteur;
    const cible = (destinataire ?? c.email ?? '').trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cible)) {
      return NextResponse.json(
        { error: "Aucune adresse de facturation valide. Renseignez-la sur la fiche du partenaire." },
        { status: 422 },
      );
    }

    const comptes = await detailComptesEtFiger(s, f);
    const pdf = await genererFacturePdf({
      ...(f as unknown as DonneesFacture),
      beneficiaires: comptes.liste,
      origine_beneficiaires: comptes.origine,
    });

    const corps = (message ?? '').trim();
    const html = `
<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:28px;color:#11192b;">
  <p style="font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#7d889f;margin:0 0 6px;">Facture</p>
  <h1 style="font-size:21px;color:#002395;margin:0 0 18px;">${f.numero}</h1>
  <p style="font-size:14px;line-height:1.7;color:#4c5873;margin:0 0 18px;">
    Bonjour,<br><br>
    ${corps ? corps.replace(/\n/g, '<br>') : `Vous trouverez ci-joint la facture <strong>${f.numero}</strong>, d'un montant de <strong>${euros(Number(f.total_ttc))}</strong>.`}
  </p>
  <table style="width:100%;border-collapse:collapse;font-size:13.5px;margin:0 0 20px;">
    <tr><td style="padding:8px 0;border-bottom:1px solid #eef2f7;color:#7d889f;">Montant</td>
        <td style="padding:8px 0;border-bottom:1px solid #eef2f7;text-align:right;font-weight:bold;">${euros(Number(f.total_ttc))}</td></tr>
    <tr><td style="padding:8px 0;border-bottom:1px solid #eef2f7;color:#7d889f;">Émise le</td>
        <td style="padding:8px 0;border-bottom:1px solid #eef2f7;text-align:right;">${jour(f.date_emission)}</td></tr>
    <tr><td style="padding:8px 0;color:#7d889f;">Échéance</td>
        <td style="padding:8px 0;text-align:right;">${jour(f.date_echeance)}</td></tr>
  </table>
  ${e.iban ? `<p style="font-size:13px;color:#4c5873;margin:0 0 6px;">Règlement par virement :</p>
  <p style="font-family:monospace;font-size:12.5px;margin:0 0 18px;">IBAN ${e.iban}${e.bic ? `<br>BIC ${e.bic}` : ''}</p>` : ''}
  <p style="font-size:13px;color:#4c5873;margin:0;">
    ${e.denomination ?? ''}${e.email ? `<br>${e.email}` : ''}
  </p>
</div>`;

    await sendEmail({
      to: [{ email: cible }],
      subject: `Facture ${f.numero} — ${e.denomination ?? 'maformationcivique.fr'}`,
      htmlContent: html,
      ...(e.email ? { replyTo: { email: e.email } } : {}),
      attachment: [{
        name: `facture-${f.numero}.pdf`,
        content: Buffer.from(pdf).toString('base64'),
      }],
    });

    // Une facture envoyée n'est plus un brouillon : le statut suit l'acte.
    await s.from('factures').update({
      envoyee_le: new Date().toISOString(),
      envoyee_a: cible,
      ...(f.statut === 'brouillon' ? { statut: 'emise' } : {}),
    }).eq('id', id);

    return NextResponse.json({ ok: true, destinataire: cible });
  } catch (err) {
    console.error('[facturation/envoyer] erreur', err);
    return NextResponse.json({ error: (err as Error).message ?? 'Envoi impossible' }, { status: 500 });
  }
}
