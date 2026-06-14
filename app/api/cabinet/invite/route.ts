/**
 * POST /api/cabinet/invite
 * Envoie une invitation "membre/client" pour le cabinet de l'utilisateur
 * connecté. Réservé aux utilisateurs avec cabinet_role = 'admin'.
 *
 * Body: { email: string }
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { sendEmail, cabinetInviteTemplate } from '@/lib/brevo';

export async function POST(req: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
    }

    const { email } = await req.json() as { email?: string };
    const cleanEmail = email?.trim().toLowerCase();
    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
    }

    // ── Vérifie que l'appelant est admin d'un cabinet ──────────────────────
    const { data: profile } = await supabase
      .from('users')
      .select('cabinet_id, cabinet_role')
      .eq('id', user.id)
      .single();

    if (!profile?.cabinet_id || profile.cabinet_role !== 'admin') {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });
    }

    const service = createServiceRoleClient();

    const { data: cabinet, error: cabinetError } = await service
      .from('cabinets')
      .select('*')
      .eq('id', profile.cabinet_id)
      .single();

    if (cabinetError || !cabinet) {
      return NextResponse.json({ error: 'Cabinet introuvable' }, { status: 404 });
    }

    // ── Vérification du quota ───────────────────────────────────────────────
    const { count: memberCount } = await service
      .from('users')
      .select('*', { count: 'exact', head: true })
      .eq('cabinet_id', cabinet.id);

    const { count: pendingCount } = await service
      .from('cabinet_invites')
      .select('*', { count: 'exact', head: true })
      .eq('cabinet_id', cabinet.id)
      .is('redeemed_at', null);

    const used = (memberCount ?? 0) + (pendingCount ?? 0);
    if (used >= cabinet.max_invitations) {
      return NextResponse.json({ error: 'Quota d\'invitations atteint pour votre cabinet' }, { status: 409 });
    }

    // ── Création de l'invitation ────────────────────────────────────────────
    const token = randomUUID();
    const { error: inviteError } = await service
      .from('cabinet_invites')
      .insert({
        cabinet_id: cabinet.id,
        email: cleanEmail,
        role: 'member',
        token,
        invited_by: user.id,
      });

    if (inviteError) {
      console.error('[cabinet/invite] insert error:', inviteError.message);
      return NextResponse.json({ error: 'Erreur création invitation' }, { status: 500 });
    }

    // ── Email Brevo (non bloquant) ─────────────────────────────────────────
    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.maformationcivique.fr';
    const inviteLink = `${appUrl.replace(/\/$/, '')}/inscription?invite_token=${token}`;

    try {
      await sendEmail({
        to: [{ email: cleanEmail }],
        subject: `${cabinet.name} vous offre un accès Premium sur maformationcivique.fr`,
        htmlContent: cabinetInviteTemplate(cabinet.name, inviteLink, 'member'),
      });
    } catch (brevoErr) {
      console.error('[cabinet/invite] brevo error:', brevoErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[cabinet/invite] unexpected error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
