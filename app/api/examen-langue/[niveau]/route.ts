/**
 * GET /api/examen-langue/[niveau]
 * Renvoie l'épreuve SANS les corrigés.
 *
 * Les énoncés et leurs réponses vivent côté serveur et n'en sortent jamais
 * ensemble : un examen dont les bonnes réponses sont lisibles dans le source
 * de la page ne mesure plus rien. La correction se fait sur
 * /api/examen-langue/[niveau]/corriger.
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import { examenLangue, type NiveauLangue } from '@/data/langue/examens-blancs';

const NIVEAUX = new Set(['A2', 'B1', 'B2']);

/** Accès au contenu linguistique : offre langue, complet, ou membre de cabinet. */
const PLANS_LANGUE = new Set(['langue', 'bundle']);

export async function GET(req: NextRequest, { params }: { params: Promise<{ niveau: string }> }) {
  try {
    const { niveau } = await params;
    const n = niveau.toUpperCase();
    if (!NIVEAUX.has(n)) {
      return NextResponse.json({ error: 'Niveau inconnu' }, { status: 404 });
    }

    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });

    const { data: profil } = await supabase
      .from('users').select('plan, cabinet_id').eq('id', user.id).single();

    const autorise = PLANS_LANGUE.has(profil?.plan ?? '') || !!profil?.cabinet_id;
    if (!autorise) {
      return NextResponse.json({ error: 'Offre linguistique requise', upgrade: true }, { status: 403 });
    }

    const examen = examenLangue(n as NiveauLangue);
    if (!examen) return NextResponse.json({ error: 'Niveau inconnu' }, { status: 404 });

    return NextResponse.json({
      niveau: examen.niveau,
      titre: examen.titre,
      demarche: examen.demarche,
      dureeMinutes: examen.dureeMinutes,
      seuilReussite: examen.seuilReussite,
      seuilQuestions: Math.ceil(examen.questions.length * examen.seuilReussite),
      questions: examen.questions.map((q) => ({
        id: q.id,
        section: q.section,
        format: q.format,
        support: q.support ?? null,
        enonce: q.enonce,
        options: q.options ?? null,
        // ni bonneReponse, ni reponses, ni explication
      })),
    });
  } catch (err) {
    console.error('[examen-langue] erreur', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
