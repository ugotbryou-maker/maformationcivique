'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Clock, ArrowRight, ArrowLeft, CheckCircle2, XCircle, Trophy,
  AlertTriangle, PenLine, ListChecks,
} from 'lucide-react';

type Format = 'qcm' | 'saisie';

interface QuestionPublique {
  id: string;
  section: string;
  format: Format;
  support: string | null;
  enonce: string;
  options: string[] | null;
}

interface Epreuve {
  niveau: string;
  titre: string;
  demarche: string;
  dureeMinutes: number;
  seuilQuestions: number;
  questions: QuestionPublique[];
}

interface Resultat {
  score: number; total: number; seuil: number; reussi: boolean;
  pourcentage: number; xpGagne: number; dejaCredite: boolean;
  sections: { section: string; libelle: string; justes: number; total: number; pourcentage: number }[];
  detail: { id: string; section: string; juste: boolean; donnee: string | number | null; corrige: string; explication: string }[];
}

const LIBELLES: Record<string, string> = {
  comprehension: 'Compréhension écrite',
  grammaire: 'Structure de la langue',
  conjugaison: 'Conjugaison',
  orthographe: 'Orthographe',
  expression: 'Expression écrite',
};

export function ExamenLangueClient({ niveau }: { niveau: string }) {
  const [phase, setPhase] = useState<'chargement' | 'intro' | 'epreuve' | 'correction' | 'resultat' | 'erreur'>('chargement');
  const [epreuve, setEpreuve] = useState<Epreuve | null>(null);
  const [erreur, setErreur] = useState<{ message: string; upgrade?: boolean } | null>(null);
  const [index, setIndex] = useState(0);
  const [reponses, setReponses] = useState<Record<string, string | number>>({});
  const [resultat, setResultat] = useState<Resultat | null>(null);
  const [tempsRestant, setTempsRestant] = useState(0);
  const chrono = useRef(false);

  useEffect(() => {
    fetch(`/api/examen-langue/${niveau}`)
      .then(async (r) => {
        const j = await r.json();
        if (!r.ok) { setErreur({ message: j.error ?? 'Épreuve indisponible', upgrade: j.upgrade }); setPhase('erreur'); return; }
        setEpreuve(j);
        setTempsRestant(j.dureeMinutes * 60);
        setPhase('intro');
      })
      .catch(() => { setErreur({ message: 'Épreuve indisponible — réseau.' }); setPhase('erreur'); });
  }, [niveau]);

  // Le chronomètre ne coupe pas l'épreuve : il la soumet. Perdre 45 minutes
  // de travail parce que le temps est écoulé serait une punition, pas un test.
  useEffect(() => {
    if (phase !== 'epreuve' || !chrono.current) return;
    if (tempsRestant <= 0) { corriger(); return; }
    const t = setTimeout(() => setTempsRestant((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, tempsRestant]);

  async function corriger() {
    if (phase === 'correction') return;
    setPhase('correction');
    try {
      const r = await fetch(`/api/examen-langue/${niveau}/corriger`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reponses }),
      });
      const j = await r.json();
      if (!r.ok) { setErreur({ message: j.error ?? 'Correction impossible' }); setPhase('erreur'); return; }
      setResultat(j);
      setPhase('resultat');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setErreur({ message: 'Correction impossible — réseau. Vos réponses n’ont pas été perdues, réessayez.' });
      setPhase('erreur');
    }
  }

  if (phase === 'chargement') return <p style={{ color: 'var(--color-text-muted)' }}>Chargement de l&apos;épreuve…</p>;

  if (phase === 'erreur') {
    return (
      <div style={carte}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 14 }}>
          <AlertTriangle size={18} color="#B91C1C" style={{ flexShrink: 0, marginTop: 2 }} />
          <p style={{ fontSize: 14, color: '#B91C1C', margin: 0 }}>{erreur?.message}</p>
        </div>
        {erreur?.upgrade && (
          <Link href="/offres" style={boutonPlein}>Découvrir l&apos;offre linguistique <ArrowRight size={16} /></Link>
        )}
      </div>
    );
  }

  if (!epreuve) return null;

  // ── Intro ────────────────────────────────────────────────────────────
  if (phase === 'intro') {
    const parSection = epreuve.questions.reduce<Record<string, number>>((a, q) => {
      a[q.section] = (a[q.section] ?? 0) + 1; return a;
    }, {});
    const nbSaisie = epreuve.questions.filter((q) => q.format === 'saisie').length;

    return (
      <div style={carte}>
        <p style={etiquette}>{epreuve.demarche}</p>
        <h1 style={{ fontSize: 26, fontWeight: 800, margin: '8px 0 10px', color: 'var(--color-text-primary)' }}>
          {epreuve.titre}
        </h1>
        <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--color-text-secondary)', marginBottom: 20 }}>
          {epreuve.questions.length} questions · {epreuve.dureeMinutes} minutes ·
          objectif {epreuve.seuilQuestions}/{epreuve.questions.length}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 22 }}>
          {Object.entries(parSection).map(([s, n]) => (
            <div key={s} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13.5, paddingBottom: 9, borderBottom: '1px solid var(--color-border)' }}>
              <span>{LIBELLES[s] ?? s}</span>
              <span style={{ color: 'var(--color-text-muted)' }}>{n} questions</span>
            </div>
          ))}
        </div>

        <div style={encadre}>
          <PenLine size={15} style={{ flexShrink: 0, marginTop: 1 }} />
          <p style={{ margin: 0 }}>
            <strong>{nbSaisie} questions à rédiger vous-même.</strong> Les accents comptent sur
            l&apos;orthographe et la conjugaison : c&apos;est précisément ce qui est évalué.
          </p>
        </div>

        <div style={{ ...encadre, background: '#FFFBEB', borderColor: '#FDE68A', color: '#78350F' }}>
          <AlertTriangle size={15} style={{ flexShrink: 0, marginTop: 1 }} />
          <p style={{ margin: 0 }}>
            Entraînement, non officiel. Le test réel comporte aussi des épreuves orales,
            impossibles à reproduire ici. Le seuil affiché est un objectif de préparation :
            le TCF IRN attribue un niveau, il ne délivre pas un « réussi / échoué ».
          </p>
        </div>

        <button
          onClick={() => { chrono.current = true; setPhase('epreuve'); }}
          style={{ ...boutonPlein, width: '100%', justifyContent: 'center', marginTop: 18 }}
        >
          Commencer l&apos;épreuve <ArrowRight size={17} />
        </button>
      </div>
    );
  }

  // ── Résultat ─────────────────────────────────────────────────────────
  if (phase === 'resultat' && resultat) {
    return (
      <div>
        <div style={{
          borderRadius: 18, padding: '26px 24px', marginBottom: 18, color: '#fff',
          background: resultat.reussi
            ? 'linear-gradient(135deg,#065F46,#0E9F6E)'
            : 'linear-gradient(135deg,#7F1D1D,#C0332B)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            {resultat.reussi ? <Trophy size={20} /> : <AlertTriangle size={20} />}
            <h1 style={{ fontSize: 22, fontWeight: 800, margin: 0, color: '#fff' }}>
              {resultat.score} / {resultat.total} — {resultat.pourcentage} %
            </h1>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,0.88)', margin: 0 }}>
            {resultat.reussi
              ? `Objectif atteint (${resultat.seuil}/${resultat.total} requis). Votre niveau écrit est cohérent avec les attentes du ${epreuve.niveau}.`
              : `Objectif non atteint : il fallait ${resultat.seuil}/${resultat.total}. Reprenez les sections les plus faibles, puis retentez.`}
          </p>
          {resultat.xpGagne > 0 && (
            <p style={{ fontSize: 13, fontWeight: 700, marginTop: 12, color: '#fff' }}>+{resultat.xpGagne} XP</p>
          )}
        </div>

        <div style={{ ...carte, marginBottom: 18 }}>
          <p style={etiquette}>Résultat par section</p>
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {resultat.sections.map((s) => (
              <div key={s.section}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13.5, marginBottom: 6 }}>
                  <span>{s.libelle}</span>
                  <span style={{ fontWeight: 700 }}>{s.justes}/{s.total}</span>
                </div>
                <div style={{ height: 6, background: 'var(--color-off-white)', borderRadius: 100, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', width: `${s.pourcentage}%`, borderRadius: 100,
                    background: s.pourcentage >= 70 ? '#0E7A58' : s.pourcentage >= 50 ? '#B45309' : '#C0332B',
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={carte}>
          <p style={etiquette}>Corrigé détaillé</p>
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {epreuve.questions.map((q, i) => {
              const d = resultat.detail.find((x) => x.id === q.id);
              if (!d) return null;
              return (
                <div key={q.id} style={{ paddingBottom: 16, borderBottom: '1px solid var(--color-border)' }}>
                  <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                    {d.juste
                      ? <CheckCircle2 size={16} color="#0E7A58" style={{ flexShrink: 0, marginTop: 2 }} />
                      : <XCircle size={16} color="#C0332B" style={{ flexShrink: 0, marginTop: 2 }} />}
                    <div style={{ minWidth: 0 }}>
                      <p style={{ fontSize: 13.5, fontWeight: 600, margin: '0 0 4px' }}>
                        {i + 1}. {q.enonce}
                      </p>
                      {!d.juste && (
                        <p style={{ fontSize: 13, color: '#C0332B', margin: '0 0 3px' }}>
                          Votre réponse : {formatReponse(q, d.donnee)}
                        </p>
                      )}
                      <p style={{ fontSize: 13, color: '#0E7A58', margin: '0 0 5px' }}>
                        Réponse attendue : <strong>{d.corrige}</strong>
                      </p>
                      <p style={{ fontSize: 12.5, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                        {d.explication}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
          <Link href="/examen?type=langue" style={boutonPlein}>Autres épreuves <ArrowRight size={16} /></Link>
          <Link href="/moduleslinguistiques" style={boutonLeger}>Réviser les modules</Link>
        </div>
      </div>
    );
  }

  // ── Épreuve ──────────────────────────────────────────────────────────
  const q = epreuve.questions[index];
  const pct = Math.round((index / epreuve.questions.length) * 100);
  const mm = String(Math.floor(tempsRestant / 60)).padStart(2, '0');
  const ss = String(tempsRestant % 60).padStart(2, '0');
  const dernier = index === epreuve.questions.length - 1;
  const repondues = Object.keys(reponses).filter((k) => reponses[k] !== '' && reponses[k] !== undefined).length;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, fontSize: 12.5, color: 'var(--color-text-muted)' }}>
        <span>Question {index + 1} / {epreuve.questions.length} · {repondues} répondues</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontWeight: 700, color: tempsRestant < 300 ? '#C0332B' : 'var(--color-text-secondary)' }}>
          <Clock size={14} /> {mm}:{ss}
        </span>
      </div>
      <div style={{ height: 6, background: 'var(--color-off-white)', borderRadius: 100, overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ height: '100%', width: `${pct}%`, background: 'var(--gradient-primary)', borderRadius: 100, transition: 'width 300ms' }} />
      </div>

      <div style={carte}>
        <p style={etiquette}>
          {q.format === 'saisie' ? <PenLine size={12} style={{ verticalAlign: -1 }} /> : <ListChecks size={12} style={{ verticalAlign: -1 }} />}
          {' '}{LIBELLES[q.section] ?? q.section}
        </p>

        {q.support && (
          <pre style={{
            whiteSpace: 'pre-wrap', fontFamily: 'inherit', fontSize: 13.5, lineHeight: 1.7,
            background: 'var(--color-off-white)', borderRadius: 12, padding: '14px 16px',
            margin: '12px 0 16px', color: 'var(--color-text-secondary)',
          }}>{q.support}</pre>
        )}

        <h2 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.4, margin: '10px 0 18px', color: 'var(--color-text-primary)' }}>
          {q.enonce}
        </h2>

        {q.format === 'qcm' && q.options ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {q.options.map((o, oi) => {
              const choisi = reponses[q.id] === oi;
              return (
                <button
                  key={oi}
                  onClick={() => setReponses({ ...reponses, [q.id]: oi })}
                  style={{
                    textAlign: 'left', padding: '13px 15px', borderRadius: 12,
                    border: `1.5px solid ${choisi ? 'var(--color-blue-france)' : 'var(--color-border)'}`,
                    background: choisi ? 'var(--color-blue-light)' : '#fff',
                    fontSize: 14.5, fontFamily: 'inherit', color: 'var(--color-text-primary)',
                    cursor: 'pointer',
                  }}
                >
                  {o}
                </button>
              );
            })}
          </div>
        ) : (
          <>
            <input
              type="text"
              value={(reponses[q.id] as string) ?? ''}
              onChange={(e) => setReponses({ ...reponses, [q.id]: e.target.value })}
              onKeyDown={(e) => { if (e.key === 'Enter' && !dernier) setIndex(index + 1); }}
              placeholder="Écrivez votre réponse"
              autoComplete="off" autoCorrect="off" spellCheck={false}
              style={{
                width: '100%', padding: '13px 15px', borderRadius: 12,
                border: '1.5px solid var(--color-border)', fontSize: 15,
                fontFamily: 'inherit', color: 'var(--color-text-primary)', outline: 'none',
              }}
            />
            <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 8 }}>
              La correction automatique est désactivée volontairement : elle corrigerait à votre place.
            </p>
          </>
        )}

        <div style={{ display: 'flex', gap: 10, marginTop: 22, flexWrap: 'wrap' }}>
          {index > 0 && (
            <button onClick={() => setIndex(index - 1)} style={boutonLeger}>
              <ArrowLeft size={15} /> Précédente
            </button>
          )}
          {!dernier ? (
            <button onClick={() => setIndex(index + 1)} style={{ ...boutonPlein, flex: 1, justifyContent: 'center' }}>
              Suivante <ArrowRight size={16} />
            </button>
          ) : (
            <button
              onClick={() => {
                const manquantes = epreuve.questions.length - repondues;
                if (manquantes > 0 && !confirm(`${manquantes} question${manquantes > 1 ? 's' : ''} sans réponse. Terminer quand même ?`)) return;
                corriger();
              }}
              style={{ ...boutonPlein, flex: 1, justifyContent: 'center', background: '#0E7A58' }}
            >
              Terminer et corriger <CheckCircle2 size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function formatReponse(q: QuestionPublique, v: string | number | null) {
  if (v === null || v === '') return '— (sans réponse)';
  if (q.format === 'qcm' && typeof v === 'number') return q.options?.[v] ?? '—';
  return String(v);
}

const carte: React.CSSProperties = {
  background: 'var(--color-surface)', border: 'var(--border-default)',
  borderRadius: 'var(--radius-xl)', padding: '26px 24px', boxShadow: 'var(--shadow-card)',
};
const etiquette: React.CSSProperties = {
  fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.07em',
  color: 'var(--color-blue-france)', margin: 0,
};
const boutonPlein: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 22px',
  borderRadius: 13, background: 'var(--color-blue-france)', color: '#fff',
  fontSize: 14.5, fontWeight: 700, border: 'none', cursor: 'pointer',
  textDecoration: 'none', fontFamily: 'inherit',
};
const boutonLeger: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 7, padding: '13px 18px',
  borderRadius: 13, background: '#fff', color: 'var(--color-text-secondary)',
  border: 'var(--border-default)', fontSize: 14, fontWeight: 600,
  cursor: 'pointer', textDecoration: 'none', fontFamily: 'inherit',
};
const encadre: React.CSSProperties = {
  display: 'flex', gap: 10, alignItems: 'flex-start', background: 'var(--color-blue-light)',
  border: '1px solid var(--color-border)', borderRadius: 13, padding: '12px 15px',
  fontSize: 12.5, lineHeight: 1.6, color: 'var(--color-text-secondary)', marginBottom: 10,
};
