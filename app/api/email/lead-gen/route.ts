/**
 * POST /api/email/lead-gen
 * Envoie l'email de lead gen (J+1) aux utilisateurs organiques non-cabinet.
 * Appelé soit manuellement, soit via une automation Brevo (recommandé en prod).
 *
 * Body: { email: string; name?: string }
 * Sécurisé : vérifie que l'utilisateur existe et n'est pas membre d'un cabinet.
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createServiceRoleClient } from '@/lib/supabase-server';
import { sendEmail, leadGenTemplate } from '@/lib/brevo';

// Brevo envoie les attributs contact à la racine du body quand le toggle
// "Inclure les informations relatives au contact" est activé dans l'automation.
function parseBrevoBody(body: Record<string, unknown>): { email?: string; name?: string } {
  const email = (body.email ?? body.EMAIL) as string | undefined;
  // Brevo peut mettre les attributs à la racine ou dans body.attributes
  const attrs = (body.attributes ?? body) as Record<string, unknown>;
  const name = (attrs.PRENOM ?? attrs.prenom ?? body.name) as string | undefined;
  return { email, name };
}

export async function POST(req: NextRequest) {
  try {
    const raw = await req.json() as Record<string, unknown>;
    const { email, name } = parseBrevoBody(raw);

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'email requis' }, { status: 400 });
    }

    const service = createServiceRoleClient();

    // Vérifie que l'utilisateur existe et n'est pas issu d'un cabinet
    const { data: user } = await service
      .from('users')
      .select('name, cabinet_id, plan')
      .eq('email', email.toLowerCase().trim())
      .single();

    if (!user) return NextResponse.json({ error: 'Utilisateur introuvable' }, { status: 404 });
    if (user.cabinet_id) return NextResponse.json({ skipped: 'cabinet member' }, { status: 200 });

    const displayName = name?.trim() || user.name || email.split('@')[0];

    await sendEmail({
      to: [{ email, name: displayName }],
      subject: 'Vous cherchez un accompagnement pour vos démarches ? Nous pouvons vous aider',
      htmlContent: leadGenTemplate(displayName),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[email/lead-gen]', err instanceof Error ? err.message : String(err));
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
