/**
 * POST /api/auth/onboarding
 * Sauvegarde les réponses d'onboarding en DB + sync attributs Brevo.
 *
 * Body: { demarche, langue_niveau, accompagne }
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase-server';

interface OnboardingPayload {
  demarche:      'CSP' | 'carte_resident' | 'naturalisation';
  langue_niveau: 'A2' | 'B1_B2' | 'besoin_examen' | 'ne_sait_pas';
  accompagne:    boolean;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Partial<OnboardingPayload>;
    const { demarche, langue_niveau, accompagne } = body;

    if (!demarche || !langue_niveau) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 });
    }

    // ── Auth ────────────────────────────────────────────────────────────────
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
    }

    // ── Sauvegarde en DB ────────────────────────────────────────────────────
    const { error: dbError } = await supabase
      .from('users')
      .update({
        demarche,
        langue_niveau,
        accompagne:       accompagne ?? false,
        onboarding_done:  true,
      })
      .eq('id', user.id);

    if (dbError) {
      console.error('[onboarding] db error:', dbError.message);
      return NextResponse.json({ error: 'Erreur base de données' }, { status: 500 });
    }

    // ── Sync Brevo — mise à jour des attributs contact ─────────────────────
    const brevoKey = process.env.BREVO_API_KEY;
    if (brevoKey && user.email) {
      try {
        const DEMARCHE_LABELS: Record<string, string> = {
          CSP: 'Carte de séjour pluriannuelle',
          carte_resident: 'Carte de résident',
          naturalisation: 'Naturalisation',
        };
        const LANGUE_LABELS: Record<string, string> = {
          A2: 'Attestation A2',
          B1_B2: 'Attestation B1/B2',
          besoin_examen: 'Besoin examen',
          ne_sait_pas: 'Ne sait pas',
        };

        // Brevo: créer ou mettre à jour le contact avec attributs
        await fetch('https://api.brevo.com/v3/contacts', {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'api-key': brevoKey,
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            email: user.email,
            updateEnabled: true, // met à jour si existe déjà
            attributes: {
              DEMARCHE:      DEMARCHE_LABELS[demarche] ?? demarche,
              LANGUE_NIVEAU: LANGUE_LABELS[langue_niveau] ?? langue_niveau,
              ACCOMPAGNE:    accompagne ? 'Oui' : 'Non',
              PLAN:          'free', // sera mis à jour par le webhook Stripe
            },
          }),
        });
      } catch (brevoErr) {
        // Non bloquant
        console.error('[onboarding] brevo sync error:', brevoErr);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[onboarding] unexpected error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
