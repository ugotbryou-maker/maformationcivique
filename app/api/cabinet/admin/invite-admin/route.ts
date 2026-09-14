/**
 * POST /api/cabinet/admin/invite-admin
 * Crée (ou renvoie) l'invitation « admin » d'un cabinet déjà existant.
 * Réservé aux administrateurs (ADMIN_EMAILS).
 *
 * Un cabinet créé autrement que par /api/cabinet/admin/create — par une
 * migration SQL, par exemple — n'a aucune invitation : son contact ne peut
 * donc jamais entrer dans son espace. Cette route comble ce trou.
 *
 * Body: { cabinet_id: string, email?: string }
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';
import { sendEmail, cabinetAdminInviteTemplate } from '@/lib/brevo';
import { getAppUrl } from '@/lib/app-url';

export async function POST(req: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!isAdminEmail(user?.email)) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });
    }

    const { cabinet_id, email } = await req.json() as { cabinet_id?: string; email?: string };
    if (!cabinet_id) {
      return NextResponse.json({ error: 'cabinet_id manquant' }, { status: 400 });
    }

    const service = createServiceRoleClient();

    const { data: cabinet } = await service
      .from('cabinets')
      .select('id, name, contact_email')
      .eq('id', cabinet_id)
      .single();

    if (!cabinet) {
      return NextResponse.json({ error: 'Cabinet introuvable' }, { status: 404 });
    }

    const cible = (email ?? cabinet.contact_email ?? '').trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cible)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
    }

    // Un admin déjà inscrit n'a pas besoin d'une nouvelle invitation : la lui
    // renvoyer créerait un second compte au lieu de lui rendre l'accès.
    const { data: dejaAdmin } = await service
      .from('users')
      .select('id, email')
      .eq('cabinet_id', cabinet_id)
      .eq('cabinet_role', 'admin')
      .maybeSingle();

    if (dejaAdmin) {
      return NextResponse.json(
        { error: `Ce cabinet a deja un administrateur inscrit (${dejaAdmin.email}). Utilisez la reinitialisation de mot de passe plutot qu'une nouvelle invitation.` },
        { status: 409 },
      );
    }

    // On périme les invitations admin encore en attente : deux liens valides
    // pour la même personne, c'est deux comptes possibles.
    await service
      .from('cabinet_invites')
      .update({ expires_at: new Date().toISOString() })
      .eq('cabinet_id', cabinet_id)
      .eq('role', 'admin')
      .is('redeemed_at', null);

    const token = randomUUID();
    const { error: inviteError } = await service
      .from('cabinet_invites')
      .insert({ cabinet_id, email: cible, role: 'admin', token, invited_by: user!.id });

    if (inviteError) {
      console.error('[cabinet/admin/invite-admin] insert error:', inviteError.message);
      return NextResponse.json({ error: 'Erreur création invitation' }, { status: 500 });
    }

    const appUrl = await getAppUrl();
    const inviteLink = `${appUrl.replace(/\/$/, '')}/inscription?invite_token=${token}`;

    try {
      await sendEmail({
        to: [{ email: cible }],
        subject: 'Votre espace partenaire maformationcivique.fr est prêt',
        htmlContent: cabinetAdminInviteTemplate(cabinet.name, inviteLink),
      });
    } catch (brevoErr) {
      console.error('[cabinet/admin/invite-admin] brevo error:', brevoErr);
      // L'invitation existe : on rend le lien pour qu'il soit transmis à la main.
      return NextResponse.json(
        { ok: true, sent: false, invite_link: inviteLink, error: 'Invitation creee mais e-mail non parti.' },
      );
    }

    return NextResponse.json({ ok: true, sent: true, invite_link: inviteLink });
  } catch (err) {
    console.error('[cabinet/admin/invite-admin] unexpected error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
