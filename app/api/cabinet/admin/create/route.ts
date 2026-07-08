/**
 * POST /api/cabinet/admin/create
 * Crée un nouveau cabinet partenaire (offre B2B) + envoie une invitation
 * "admin" au contact du cabinet. Réservé aux administrateurs (ADMIN_EMAILS).
 *
 * Body: { name, contact_email, tier, max_invitations, sub_end_at, admin_email }
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';
import { sendEmail, cabinetAdminInviteTemplate } from '@/lib/brevo';

interface CreateCabinetPayload {
  name:            string;
  contact_email:   string;
  tier:            'starter' | 'pro' | 'cabinet_plus' | 'reseau';
  max_invitations: number;
  sub_end_at:      string; // YYYY-MM-DD
  admin_email:     string;
}

export async function POST(req: NextRequest) {
  try {
    // ── Auth admin ──────────────────────────────────────────────────────────
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!isAdminEmail(user?.email)) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });
    }

    const body = await req.json() as Partial<CreateCabinetPayload>;
    const { name, contact_email, tier, max_invitations, sub_end_at, admin_email } = body;

    if (!name || !contact_email || !tier || !max_invitations || !admin_email) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 });
    }

    const service = createServiceRoleClient();

    // ── Création du cabinet ────────────────────────────────────────────────
    const { data: cabinet, error: cabinetError } = await service
      .from('cabinets')
      .insert({
        name,
        contact_email,
        tier,
        max_invitations,
        sub_end_at: sub_end_at || null,
      })
      .select()
      .single();

    if (cabinetError || !cabinet) {
      console.error('[cabinet/admin/create] cabinet insert error:', cabinetError?.message);
      return NextResponse.json({ error: 'Erreur création cabinet' }, { status: 500 });
    }

    // ── Invitation admin ────────────────────────────────────────────────────
    const token = randomUUID();
    const { error: inviteError } = await service
      .from('cabinet_invites')
      .insert({
        cabinet_id: cabinet.id,
        email: admin_email,
        role: 'admin',
        token,
        invited_by: user!.id,
      });

    if (inviteError) {
      console.error('[cabinet/admin/create] invite insert error:', inviteError.message);
      return NextResponse.json({ error: 'Cabinet créé mais erreur création invitation' }, { status: 500 });
    }

    // ── Email Brevo (non bloquant) ─────────────────────────────────────────
    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.maformationcivique.fr';
    const inviteLink = `${appUrl.replace(/\/$/, '')}/inscription?invite_token=${token}`;

    try {
      await sendEmail({
        to: [{ email: admin_email }],
        subject: `Votre espace partenaire maformationcivique.fr est prêt`,
        htmlContent: cabinetAdminInviteTemplate(name, inviteLink),
      });
    } catch (brevoErr) {
      console.error('[cabinet/admin/create] brevo error:', brevoErr);
    }

    return NextResponse.json({ ok: true, cabinet_id: cabinet.id, invite_link: inviteLink });
  } catch (err) {
    console.error('[cabinet/admin/create] unexpected error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
