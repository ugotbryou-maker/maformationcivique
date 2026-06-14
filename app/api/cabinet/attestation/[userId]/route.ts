/**
 * GET /api/cabinet/attestation/[userId]
 * Génère une attestation de suivi (PDF, 1 page A4) pour un membre du
 * cabinet de l'utilisateur connecté. Réservé à cabinet_role = 'admin' du
 * même cabinet que l'utilisateur cible.
 */

export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { modules } from '@/data/modules';

export async function GET(req: NextRequest, { params }: { params: Promise<{ userId: string }> }) {
  try {
    const { userId } = await params;

    // ── Auth : doit être admin d'un cabinet ────────────────────────────────
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
    }

    const { data: caller } = await supabase
      .from('users')
      .select('cabinet_id, cabinet_role')
      .eq('id', user.id)
      .single();

    if (!caller?.cabinet_id || caller.cabinet_role !== 'admin') {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });
    }

    const service = createServiceRoleClient();

    // ── Vérifie que la cible appartient bien à ce cabinet ──────────────────
    const { data: target, error: targetError } = await service
      .from('users')
      .select('id, name, email, cabinet_id')
      .eq('id', userId)
      .single();

    if (targetError || !target || target.cabinet_id !== caller.cabinet_id) {
      return NextResponse.json({ error: 'Utilisateur introuvable' }, { status: 404 });
    }

    const { data: cabinet } = await service
      .from('cabinets')
      .select('name')
      .eq('id', caller.cabinet_id)
      .single();

    // ── Progression ──────────────────────────────────────────────────────
    const { data: progress } = await service
      .from('progression')
      .select('module_slug, lesson_slug, completed')
      .eq('user_id', userId);

    const completedLessons = new Set(
      (progress ?? []).filter((p) => p.completed).map((p) => `${p.module_slug}:${p.lesson_slug}`)
    );

    const totalLessons = modules.reduce((a, m) => a + m.lessons.length, 0);
    const completedCount = completedLessons.size;
    const globalPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

    const moduleStats = modules.map((mod) => {
      const total = mod.lessons.length;
      const done = mod.lessons.filter((l) => completedLessons.has(`${mod.slug}:${l.slug}`)).length;
      return { title: mod.title, done, total, complete: total > 0 && done === total };
    });

    // ── Génération PDF ──────────────────────────────────────────────────────
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595.28, 841.89]); // A4
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const blue = rgb(0, 0.137, 0.584);   // #002395
    const red = rgb(0.8, 0.102, 0.102);  // #CC1A1A
    const gray = rgb(0.42, 0.45, 0.5);
    const dark = rgb(0.07, 0.09, 0.15);

    let y = 780;
    const left = 56;

    page.drawText('maformationcivique.fr', { x: left, y, size: 12, font: fontBold, color: blue });
    page.drawText('La préparation au test civique en France', { x: left, y: y - 16, size: 9, font, color: gray });

    y -= 60;
    page.drawText('Attestation de suivi', { x: left, y, size: 22, font: fontBold, color: dark });
    page.drawText('Formation civique', { x: left, y: y - 24, size: 14, font, color: red });

    y -= 64;
    const cabinetName = cabinet?.name ?? 'Cabinet partenaire';
    const clientName = target.name || target.email || 'Client';
    const today = new Date().toLocaleDateString('fr-FR');

    const infoLines: [string, string][] = [
      ['Cabinet / association', cabinetName],
      ['Bénéficiaire', clientName],
      ['Email', target.email ?? '—'],
      ['Date de génération', today],
      ['Progression globale du programme', `${globalPercent}% (${completedCount}/${totalLessons} leçons)`],
    ];

    for (const [label, value] of infoLines) {
      page.drawText(label, { x: left, y, size: 10, font, color: gray });
      page.drawText(value, { x: left + 220, y, size: 10, font: fontBold, color: dark });
      y -= 22;
    }

    y -= 24;
    page.drawText('Détail par module', { x: left, y, size: 13, font: fontBold, color: dark });
    y -= 24;

    for (const mod of moduleStats) {
      const mark = mod.complete ? '✓' : `${mod.done}/${mod.total}`;
      page.drawText(mark, { x: left, y, size: 10, font: fontBold, color: mod.complete ? rgb(0.09, 0.62, 0.46) : gray });
      page.drawText(mod.title, { x: left + 36, y, size: 10, font, color: dark });
      y -= 20;
    }

    y -= 32;
    page.drawText(
      'Document généré automatiquement par maformationcivique.fr, à titre indicatif.',
      { x: left, y, size: 8, font, color: gray }
    );
    page.drawText(
      "Il ne constitue pas un justificatif officiel d'assiduité ou de niveau.",
      { x: left, y: y - 12, size: 8, font, color: gray }
    );

    const pdfBytes = await pdfDoc.save();

    const safeName = clientName.replace(/[^a-zA-Z0-9-_]+/g, '_');

    return new NextResponse(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="attestation-${safeName}.pdf"`,
      },
    });
  } catch (err) {
    console.error('[cabinet/attestation] unexpected error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
