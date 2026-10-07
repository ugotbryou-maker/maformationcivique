/**
 * POST /api/admin/relance
 * Envoie une relance à un utilisateur depuis l'espace d'administration.
 * Réservé aux administrateurs (ADMIN_EMAILS).
 *
 * Body: { userId: string, motif: string, message?: string }
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';
import { sendEmail, relanceTemplate } from '@/lib/brevo';
import { getAppUrl } from '@/lib/app-url';

/** Messages par défaut, modifiables avant envoi depuis l'interface. */
const MOTIFS: Record<string, { objet: string; corps: (p: string) => string; cta: string; chemin: string }> = {
  inactif: {
    objet: 'Votre préparation vous attend',
    corps: () =>
      "Vous n'êtes pas revenu depuis un moment, et votre progression est restée exactement où vous l'aviez laissée.\n\nQuinze minutes suffisent pour reprendre une leçon. L'examen se prépare mieux par petites séances régulières que par de longues sessions espacées.",
    cta: 'Reprendre ma formation →',
    chemin: '/dashboard',
  },
  jamais: {
    objet: 'Votre accès est actif — première connexion',
    corps: () =>
      "Votre accès est bien activé, mais vous ne vous êtes pas encore connecté.\n\nVotre espace contient les modules civiques, les examens blancs et les fiches de révision. Tout est déjà prêt, il ne manque que vous.",
    cta: 'Découvrir mon espace →',
    chemin: '/dashboard',
  },
  echeance: {
    objet: 'Votre accès arrive à échéance',
    corps: () =>
      "Votre accès arrive bientôt à échéance.\n\nSi vous souhaitez poursuivre votre préparation sans interruption, vous pouvez renouveler en quelques clics. Votre progression et vos résultats sont conservés.",
    cta: 'Renouveler mon accès →',
    chemin: '/offres',
  },
  examen: {
    objet: 'Prêt pour l’examen blanc ?',
    corps: () =>
      "Vous avez bien avancé dans les modules. L'étape suivante est l'examen blanc : c'est lui qui révèle ce qui n'est pas encore acquis.\n\nComptez une vingtaine de minutes.",
    cta: 'Passer un examen blanc →',
    chemin: '/examen',
  },
};

export async function POST(req: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!isAdminEmail(user?.email)) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });
    }

    const { userId, motif, message } = await req.json() as
      { userId?: string; motif?: string; message?: string };

    const modele = MOTIFS[motif ?? ''];
    if (!userId || !modele) {
      return NextResponse.json({ error: 'Paramètres invalides' }, { status: 400 });
    }

    const service = createServiceRoleClient();
    const { data: cible } = await service
      .from('users')
      .select('id, email, name')
      .eq('id', userId)
      .single();

    if (!cible?.email) {
      return NextResponse.json({ error: 'Compte introuvable ou sans e-mail' }, { status: 404 });
    }

    const appUrl = await getAppUrl();
    const prenom = (cible.name ?? '').trim().split(' ')[0] ?? '';
    const corps = (message?.trim() || modele.corps(prenom));

    await sendEmail({
      to: [{ email: cible.email }],
      subject: modele.objet,
      htmlContent: relanceTemplate(prenom, corps, modele.cta, `${appUrl.replace(/\/$/, '')}${modele.chemin}`),
    });

    // Trace de la relance : sans elle, rien n'empêche de relancer la même
    // personne trois fois dans la semaine depuis deux sessions différentes.
    // Non bloquant : la colonne peut manquer tant que la migration n'est pas
    // passée, et l'e-mail est déjà parti de toute façon.
    const { error: traceErr } = await service
      .from('users')
      .update({ relance_le: new Date().toISOString(), relance_motif: motif })
      .eq('id', userId);
    if (traceErr) {
      console.error('[admin/relance] trace non enregistrée — migration manquante ?', traceErr.message);
    }

    return NextResponse.json({ ok: true, email: cible.email });
  } catch (err) {
    console.error('[admin/relance] unexpected error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
