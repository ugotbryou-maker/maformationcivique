import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, examLeadEmailTemplate } from '@/lib/brevo';

const LEVEL_LABELS: Record<string, string> = {
  CSP: 'Carte de séjour pluriannuelle',
  CR: 'Carte de résident',
  NAT: 'Naturalisation',
};

export async function POST(req: NextRequest) {
  const { email, demarche, level, score, total } = await req.json();

  if (!email || !email.includes('@') || !level || typeof score !== 'number') {
    return NextResponse.json({ error: 'Paramètres invalides' }, { status: 400 });
  }

  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const passed = pct >= 80;
  const levelLabel = LEVEL_LABELS[level] ?? level;
  const demarcheLabel = demarche || 'Non précisée';

  try {
    await sendEmail({
      to: [{ email }],
      subject: `Vos résultats d'examen blanc ${level} — maformationcivique.fr`,
      htmlContent: examLeadEmailTemplate(level, levelLabel, score, total, pct, passed, demarcheLabel),
    });
  } catch {
    // Email non bloquant — on ne fait pas échouer la requête si Brevo est KO
  }

  return NextResponse.json({ ok: true });
}
