'use client';

import { useEffect, useState } from 'react';
import { Users, BarChart3, FileDown, Plus, Lock, ArrowRight, BookOpen, CheckCircle, Calendar } from 'lucide-react';
import { LeadForm } from './LeadForm';

interface Props {
  slug: string;
  domain: string;
  cabinetName: string;
  logoUrl: string | null;
  monogram: string | null;
  accent: string;
}

const DEMO_CLIENTS = [
  { initials: 'AK', name: 'Amira K.',   pct: 78,  color: '#4285F4', attestation: false },
  { initials: 'YM', name: 'Youssef M.', pct: 45,  color: '#EA4335', attestation: false },
  { initials: 'EP', name: 'Elena P.',   pct: 100, color: '#34A853', attestation: true  },
];

const MODULES = [
  { num: '01', title: 'La République française',  theme: 'Valeurs & symboles',     lessons: 8, done: 8 },
  { num: '02', title: 'Les institutions',          theme: 'Parlement, Gouvernement', lessons: 6, done: 4 },
  { num: '03', title: 'Droits et libertés',        theme: 'Droits fondamentaux',     lessons: 7, done: 2 },
];

const DEMO_MODULES_CIVIQUE = [
  'La République française et ses valeurs',
  'Les institutions de la Ve République',
  'Les droits et libertés fondamentaux',
  'La laïcité et le vivre ensemble',
  'L\'histoire de France (1789 – aujourd\'hui)',
];

async function generateAttestationPdf(cabinetName: string, accent: string): Promise<void> {
  const { PDFDocument, rgb, StandardFonts, degrees } = await import('pdf-lib');

  const doc  = await PDFDocument.create();
  const page = doc.addPage([595.28, 841.89]); // A4
  const { width, height } = page.getSize();

  const helveticaBold    = await doc.embedFont(StandardFonts.HelveticaBold);
  const helvetica        = await doc.embedFont(StandardFonts.Helvetica);
  const helveticaOblique = await doc.embedFont(StandardFonts.HelveticaOblique);

  const parseHex = (h: string): [number, number, number] => {
    const c = h.replace('#', '');
    return [parseInt(c.slice(0,2),16)/255, parseInt(c.slice(2,4),16)/255, parseInt(c.slice(4,6),16)/255];
  };
  const [ar, ag, ab] = parseHex(accent);
  const accentRgb = rgb(ar, ag, ab);

  // Header bar
  page.drawRectangle({ x:0, y: height - 60, width, height: 60, color: accentRgb });
  page.drawText('maformationcivique.fr', { x: 36, y: height - 38, size: 14, font: helveticaBold, color: rgb(1,1,1) });
  page.drawText('ATTESTATION DE SUIVI', { x: width - 36 - 160, y: height - 38, size: 11, font: helvetica, color: rgb(1,1,1) });

  // Watermark
  page.drawText('DÉMONSTRATION', {
    x: 90, y: 320, size: 64, font: helveticaBold,
    color: rgb(0.85, 0.85, 0.85), opacity: 0.35,
    rotate: degrees(35),
  });

  // Title block
  page.drawText('ATTESTATION DE SUIVI', { x: 48, y: height - 110, size: 20, font: helveticaBold, color: rgb(0.04, 0.10, 0.44) });
  page.drawText('DE FORMATION CIVIQUE', { x: 48, y: height - 136, size: 20, font: helveticaBold, color: rgb(0.04, 0.10, 0.44) });
  page.drawLine({ start: { x: 48, y: height - 148 }, end: { x: 48 + 140, y: height - 148 }, thickness: 3, color: accentRgb });

  // Notice banner
  page.drawRectangle({ x: 48, y: height - 175, width: width - 96, height: 20, color: rgb(1, 0.97, 0.76) });
  page.drawText('Document généré à titre de démonstration uniquement.', {
    x: 54, y: height - 168, size: 9, font: helveticaOblique, color: rgb(0.57, 0.25, 0.0),
  });

  // Info rows
  const info: [string, string][] = [
    ['Cabinet',     cabinetName],
    ['Client',      'Elena P. (démonstration)'],
    ['Démarche',    'Naturalisation française'],
    ['Date',        new Date().toLocaleDateString('fr-FR', { day:'2-digit', month:'long', year:'numeric' })],
    ['Progression', '100 % — Formation complète ✓'],
  ];
  let y = height - 220;
  for (const [label, value] of info) {
    page.drawText(label + ' :', { x: 48, y, size: 10, font: helveticaBold, color: rgb(0.4, 0.4, 0.4) });
    page.drawText(value,        { x: 165, y, size: 10, font: helvetica,      color: rgb(0.04, 0.10, 0.44) });
    y -= 24;
  }

  // Divider
  y -= 10;
  page.drawLine({ start: { x: 48, y }, end: { x: width - 48, y }, thickness: 0.5, color: rgb(0.85, 0.87, 0.92) });
  y -= 24;

  // Modules list
  page.drawText('Modules validés', { x: 48, y, size: 11, font: helveticaBold, color: rgb(0.04, 0.10, 0.44) });
  y -= 20;
  for (const mod of DEMO_MODULES_CIVIQUE) {
    page.drawText('✓  ' + mod, { x: 60, y, size: 9.5, font: helvetica, color: rgb(0.15, 0.55, 0.26) });
    y -= 18;
  }

  // Footer
  page.drawRectangle({ x: 0, y: 0, width, height: 52, color: rgb(0.97, 0.97, 0.98) });
  page.drawText('Ce document est généré automatiquement à titre indicatif — non opposable.', {
    x: 36, y: 30, size: 8, font: helveticaOblique, color: rgb(0.55, 0.55, 0.6),
  });
  page.drawText('Activez votre espace cabinet sur maformationcivique.fr', {
    x: 36, y: 14, size: 8, font: helvetica, color: rgb(ar * 0.6, ag * 0.6, ab * 0.6),
  });

  const bytes = await doc.save();
  const blob  = new Blob([bytes.buffer as ArrayBuffer], { type: 'application/pdf' });
  const blobUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = blobUrl;
  a.download = 'attestation-demo.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);
}

export function ApercuDashboard({ slug, domain, cabinetName, logoUrl, monogram, accent }: Props) {
  const [animated, setAnimated] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);

  // Trigger progress bar animation after mount
  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 120);
    return () => clearTimeout(t);
  }, []);

  async function handlePdf() {
    setPdfLoading(true);
    try { await generateAttestationPdf(cabinetName, accent); }
    finally { setPdfLoading(false); }
  }

  return (
    <>
      {/* ── Dashboard simulé ─────────────────────────────────────────────── */}
      <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 4px 28px rgba(0,35,149,0.09)', overflow: 'hidden' }}>

        {/* Header co-brandé */}
        <div style={{ background: accent, padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 46, height: 46, borderRadius: 10, overflow: 'hidden', background: 'rgba(255,255,255,0.18)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {logoUrl
                // eslint-disable-next-line @next/next/no-img-element
                ? <img src={logoUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                : <span style={{ fontSize: 16, fontWeight: 800, color: '#fff' }}>{monogram}</span>
              }
            </div>
            <div>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>Espace {cabinetName}</p>
              <span style={{ fontSize: 11, fontWeight: 600, background: 'rgba(255,255,255,0.2)', color: '#fff', borderRadius: 100, padding: '2px 10px' }}>
                Palier Pro · 12 / 50 invitations
              </span>
            </div>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#fff', color: accent, padding: '10px 16px', borderRadius: 10, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
            <Plus size={16} />Inviter un client
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderBottom: '1px solid #F1F5F9' }}>
          {[
            { Icon: Users,     label: '3 clients actifs',  sub: '12 invitations envoyées' },
            { Icon: BarChart3, label: 'Progression moy.',  sub: '74 % de complétion'      },
            { Icon: FileDown,  label: '1 attestation',     sub: 'Prête à télécharger'     },
          ].map(({ Icon, label, sub }, i) => (
            <div key={label} style={{ padding: '18px 20px', borderRight: i < 2 ? '1px solid #F1F5F9' : 'none' }}>
              <Icon size={16} color={accent} style={{ marginBottom: 6 }} />
              <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 2px' }}>{label}</p>
              <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: 0 }}>{sub}</p>
            </div>
          ))}
        </div>

        {/* Clients avec barres animées */}
        <div style={{ padding: '4px 0' }}>
          {DEMO_CLIENTS.map(({ initials, name, pct, color, attestation }) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 24px', borderBottom: '1px solid #F8FAFC' }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', flexShrink: 0, background: color + '22', border: `2px solid ${color}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color }}>{initials}</div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 7 }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', margin: 0 }}>{name}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: accent }}>{pct} %</span>
                    {attestation && (
                      <span style={{ fontSize: 11, fontWeight: 700, background: '#D1FAE5', color: '#065F46', borderRadius: 100, padding: '2px 10px', border: '1px solid #A7F3D0' }}>
                        Attestation ✓
                      </span>
                    )}
                  </div>
                </div>
                {/* Barre animée */}
                <div style={{ height: 6, borderRadius: 99, background: '#F1F5F9', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', borderRadius: 99, background: accent,
                    width: animated ? `${pct}%` : '0%',
                    transition: 'width 1.1s cubic-bezier(0.4, 0, 0.2, 1)',
                  }} />
                </div>
              </div>

              {attestation && (
                <button
                  onClick={handlePdf}
                  disabled={pdfLoading}
                  title="Télécharger l'attestation de démonstration"
                  style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 600, color: accent, background: 'none', border: `1px solid ${accent}44`, borderRadius: 8, padding: '5px 10px', cursor: pdfLoading ? 'wait' : 'pointer', flexShrink: 0, opacity: pdfLoading ? 0.6 : 1, transition: 'opacity 200ms' }}>
                  <FileDown size={12} />
                  {pdfLoading ? '…' : 'PDF'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Aperçu modules (paywall) ─────────────────────────────────────── */}
      <div style={{ marginTop: 24, position: 'relative' }}>

        {/* Label section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <BookOpen size={16} color={accent} />
          <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', margin: 0 }}>Modules de formation</p>
          <span style={{ fontSize: 11, color: 'var(--color-text-muted)', background: '#F1F5F9', borderRadius: 100, padding: '2px 8px' }}>
            Aperçu
          </span>
        </div>

        {/* Modules — tronqués */}
        <div style={{ position: 'relative', maxHeight: 190, overflow: 'hidden' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {MODULES.map(({ num, title, theme, lessons, done }) => {
              const pct = Math.round((done / lessons) * 100);
              return (
                <div key={num} style={{ background: '#fff', borderRadius: 14, padding: '14px 20px', boxShadow: '0 2px 8px rgba(0,35,149,0.06)', display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: accent + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: accent }}>{num}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</p>
                    <p style={{ fontSize: 11, color: 'var(--color-text-muted)', margin: '0 0 6px' }}>{theme} · {lessons} leçons</p>
                    <div style={{ height: 4, borderRadius: 99, background: '#F1F5F9', overflow: 'hidden' }}>
                      <div style={{ height: '100%', borderRadius: 99, background: accent, width: `${pct}%` }} />
                    </div>
                  </div>
                  <div style={{ flexShrink: 0, textAlign: 'right' }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: accent }}>{pct} %</span>
                    {done === lessons && <CheckCircle size={14} color="#059669" style={{ display: 'block', margin: '2px auto 0' }} />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Gradient fade — effet paywall */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 100,
            background: 'linear-gradient(to bottom, transparent 0%, var(--color-off-white, #F5F5F7) 100%)',
            pointerEvents: 'none',
          }} />
        </div>

        {/* CTA paywall */}
        <div style={{
          background: '#fff', borderRadius: 20, padding: '28px 24px',
          boxShadow: '0 4px 28px rgba(0,35,149,0.09)', marginTop: 0,
          textAlign: 'center',
          borderTop: `3px solid ${accent}`,
        }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: accent + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
            <Lock size={20} color={accent} />
          </div>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 8px' }}>
            Accédez à tous les modules
          </h3>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.65, maxWidth: 380, margin: '0 auto 22px' }}>
            Activez l&apos;espace de votre cabinet pour inviter vos clients, suivre leur progression et générer les attestations.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ display: 'flex', alignItems: 'center', gap: 8, background: accent, color: '#fff', padding: '12px 22px', borderRadius: 12, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 14 }}
            >
              Activer mon espace
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#fff', color: 'var(--color-text-primary)', padding: '12px 22px', borderRadius: 12, border: '1.5px solid var(--color-border)', cursor: 'pointer', fontWeight: 600, fontSize: 14 }}
            >
              <Calendar size={16} />
              Demander une démo
            </button>
          </div>
        </div>
      </div>

      {/* ── Lead form ──────────────────────────────────────────────────────── */}
      <div id="lead-form">
        <LeadForm slug={slug} domain={domain} cabinetName={cabinetName} accent={accent} />
      </div>
    </>
  );
}
