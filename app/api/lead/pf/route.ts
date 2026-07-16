import { NextRequest, NextResponse } from 'next/server';

// Données B2B (clients Papiers Français) — ne transitent PAS par Brevo (Ugo).
// Acheminées exclusivement vers Make (→ Zoho + Google Sheet côté PF).

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      source: 'test-civique' | 'test-langue';
      nom: string;
      prenom: string;
      email: string;
      telephone: string;
      situationPro?: string;
      score?: string;
      niveau?: string;
    };

    const webhookUrl = process.env.MAKE_WEBHOOK_PF_URL;
    if (!webhookUrl) {
      console.warn('[lead/pf] MAKE_WEBHOOK_PF_URL non configurée — lead non transmis');
      return NextResponse.json({ ok: true });
    }

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source:       body.source,
        prenom:       body.prenom,
        nom:          body.nom,
        email:        body.email,
        telephone:    body.telephone,
        situationPro: body.situationPro ?? null,
        score:        body.score ?? null,
        niveau:       body.niveau ?? null,
        submittedAt:  new Date().toISOString(),
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[lead/pf]', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
