/**
 * POST /api/examen-langue/[niveau]/corriger
 * Corrige l'épreuve côté serveur, enregistre le résultat et crédite l'XP.
 *
 * Body: { reponses: Record<string, string | number> }  — indexé par id de question
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import { XP_REWARDS } from '@/lib/gamification';
import {
  examenLangue, reponseCorrecte, corrige, LIBELLE_SECTION,
  type NiveauLangue, type SectionExamen,
} from '@/data/langue/examens-blancs';

const NIVEAUX = new Set(['A2', 'B1', 'B2']);
const PLANS_LANGUE = new Set(['langue', 'bundle']);

/** Un niveau d'examen distinct par épreuve : LANG_A2, LANG_B1, LANG_B2. */
function cleNiveau(n: NiveauLangue) { return `LANG_${n}`; }

export async function POST(req: NextRequest, { params }: { params: Promise<{ niveau: string }> }) {
  try {
    const { niveau } = await params;
    const n = niveau.toUpperCase();
    if (!NIVEAUX.has(n)) return NextResponse.json({ error: 'Niveau inconnu' }, { status: 404 });

    const examen = examenLangue(n as NiveauLangue);
    if (!examen) return NextResponse.json({ error: 'Niveau inconnu' }, { status: 404 });

    const body = await req.json() as { reponses?: Record<string, string | number> };
    const envoyees = body.reponses ?? {};

    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });

    const { data: profil } = await supabase
      .from('users').select('plan, cabinet_id, xp').eq('id', user.id).single();

    if (!PLANS_LANGUE.has(profil?.plan ?? '') && !profil?.cabinet_id) {
      return NextResponse.json({ error: 'Offre linguistique requise' }, { status: 403 });
    }

    // ── Correction ────────────────────────────────────────────────────────
    const parSection = new Map<SectionExamen, { justes: number; total: number }>();
    const detail = examen.questions.map((q) => {
      const donnee = envoyees[q.id];
      const juste = reponseCorrecte(q, donnee);
      const e = parSection.get(q.section) ?? { justes: 0, total: 0 };
      e.total += 1;
      if (juste) e.justes += 1;
      parSection.set(q.section, e);
      return {
        id: q.id,
        section: q.section,
        juste,
        donnee: donnee ?? null,
        corrige: corrige(q),
        explication: q.explication,
      };
    });

    const score = detail.filter((d) => d.juste).length;
    const total = examen.questions.length;
    const seuil = Math.ceil(total * examen.seuilReussite);
    const reussi = score >= seuil;

    // ── Enregistrement et XP ──────────────────────────────────────────────
    // Un échec ne consomme pas le crédit : l'utilisateur pourra retenter et
    // toucher l'XP la première fois qu'il réussit. Même règle que le civique.
    const cle = cleNiveau(examen.niveau);
    const { data: existant } = await supabase
      .from('exam_results')
      .select('id, xp_awarded')
      .eq('user_id', user.id)
      .eq('exam_level', cle)
      .maybeSingle();

    const dejaCredite = existant?.xp_awarded === true;
    const crediter = reussi && !dejaCredite;

    const { error: erreurUpsert } = await supabase
      .from('exam_results')
      .upsert({
        user_id: user.id,
        exam_level: cle,
        score,
        total_q: total,
        passed: reussi,
        xp_awarded: dejaCredite || crediter,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id,exam_level' });

    if (erreurUpsert) {
      // Le résultat doit s'afficher même si l'enregistrement échoue : on ne
      // fait pas repasser une épreuve de 45 minutes pour une panne d'écriture.
      console.error('[examen-langue/corriger] enregistrement impossible', erreurUpsert.message);
    }

    let xpGagne = 0;
    if (crediter) {
      xpGagne = XP_REWARDS.exam_passed;
      await supabase
        .from('users')
        .update({ xp: (profil?.xp ?? 0) + xpGagne })
        .eq('id', user.id);
    }

    return NextResponse.json({
      score,
      total,
      seuil,
      reussi,
      pourcentage: Math.round((score / total) * 100),
      xpGagne,
      dejaCredite,
      sections: [...parSection.entries()].map(([section, v]) => ({
        section,
        libelle: LIBELLE_SECTION[section],
        justes: v.justes,
        total: v.total,
        pourcentage: Math.round((v.justes / v.total) * 100),
      })),
      detail,
    });
  } catch (err) {
    console.error('[examen-langue/corriger] erreur', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
