'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Clock, AlertTriangle, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import {
  QUESTIONS, visibleQuestions, helpText, computeVerdict, demarcheLabel,
  type Answers, type Demarche, type VerdictStatus,
} from '@/lib/eligibilite';

type Phase = 'intro' | 'quiz' | 'lead' | 'result';

interface Lead { prenom: string; nom: string; email: string; telephone: string; rgpd: boolean; }

const STATUS_STYLE: Record<VerdictStatus, { bg: string; border: string; color: string; icon: typeof ShieldCheck }> = {
  pret:       { bg: '#ECFDF5', border: '#A7F3D0', color: '#047857', icon: CheckCircle2 },
  bientot:    { bg: '#FFFBEB', border: '#FDE68A', color: '#B45309', icon: Clock },
  langue:     { bg: '#EEF4FF', border: '#BFDBFE', color: '#1D4ED8', icon: GraduationCap },
  bloque:     { bg: '#FEF2F2', border: '#FECACA', color: '#B91C1C', icon: AlertTriangle },
  a_verifier: { bg: '#F8FAFC', border: '#E2E8F0', color: '#475569', icon: ShieldCheck },
};

export function EligibiliteQuiz() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [answers, setAnswers] = useState<Answers>({});
  const [index, setIndex] = useState(0);
  const [lead, setLead] = useState<Lead>({ prenom: '', nom: '', email: '', telephone: '', rgpd: false });
  const [submitting, setSubmitting] = useState(false);

  const questions = visibleQuestions(answers);
  const current = questions[index];

  function choose(value: string) {
    if (!current) return;
    const next: Answers = { ...answers, [current.id]: value };
    setAnswers(next);
    const nextQuestions = visibleQuestions(next);
    if (index >= nextQuestions.length - 1) {
      setPhase('lead');
    } else {
      setIndex(index + 1);
    }
  }

  function back() {
    if (index === 0) { setPhase('intro'); return; }
    setIndex(index - 1);
  }

  async function submitLead() {
    if (!lead.prenom || !lead.nom || !lead.email || !lead.telephone || !lead.rgpd) return;
    setSubmitting(true);
    const verdict = computeVerdict(answers);
    await fetch('/api/lead/eligibilite', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prenom: lead.prenom, nom: lead.nom, email: lead.email, telephone: lead.telephone,
        demarche: answers.demarche ? demarcheLabel(answers.demarche as Demarche) : '',
        verdict: verdict.status,
        reponses: Object.fromEntries(Object.entries(answers).map(([k, v]) => [k, String(v)])),
      }),
    }).catch(() => {});
    setSubmitting(false);
    setPhase('result');
  }

  const card: React.CSSProperties = {
    maxWidth: 620, margin: '0 auto', background: 'var(--color-surface)',
    border: 'var(--border-default)', borderRadius: 'var(--radius-xl)',
    boxShadow: 'var(--shadow-card)', padding: '32px 28px',
  };

  // ── Intro ──
  if (phase === 'intro') {
    return (
      <div style={{ maxWidth: 620, margin: '0 auto', textAlign: 'center', padding: '8px 0' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#EEF4FF', borderRadius: 100, padding: '6px 16px', marginBottom: 20 }}>
          <ShieldCheck size={15} color="#002395" />
          <span style={{ fontSize: 12, fontWeight: 700, color: '#002395', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Test gratuit · 2 min</span>
        </div>
        <h1 style={{ fontSize: 'clamp(26px, 4.5vw, 36px)', fontWeight: 800, lineHeight: 1.2, color: 'var(--color-text-primary)', marginBottom: 16 }}>
          Testez votre éligibilité
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--color-text-secondary)', maxWidth: 460, margin: '0 auto 28px' }}>
          Carte de séjour, carte de résident ou naturalisation : répondez à quelques questions pour savoir où vous en êtes et ce qu’il vous reste à préparer.
        </p>
        <button onClick={() => { setPhase('quiz'); setIndex(0); }} style={primaryBtn}>
          Commencer le test <ArrowRight size={17} />
        </button>
        <p style={{ fontSize: 12.5, color: 'var(--color-text-muted)', marginTop: 18 }}>
          Outil informatif — ne remplace pas une décision de la préfecture ni un avis juridique.
        </p>
      </div>
    );
  }

  // ── Quiz ──
  if (phase === 'quiz' && current) {
    const pct = Math.round((index / questions.length) * 100);
    const help = helpText(current, answers);
    return (
      <div style={{ maxWidth: 620, margin: '0 auto' }}>
        <ProgressBar pct={pct} label={`Question ${index + 1} / ${questions.length}`} />
        <div style={card}>
          <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-blue-france)', textTransform: 'uppercase', letterSpacing: '0.07em', margin: '0 0 8px' }}>
            {current.theme}
          </p>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.3, margin: '0 0 8px' }}>
            {current.question}
          </h2>
          {help && <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--color-text-muted)', margin: '0 0 20px' }}>{help}</p>}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {current.options.map((o) => {
              const selected = answers[current.id] === o.value;
              return (
                <button key={o.value} onClick={() => choose(o.value)} style={{
                  textAlign: 'left', padding: '15px 18px', borderRadius: 'var(--radius-lg)',
                  border: `1.5px solid ${selected ? 'var(--color-blue-france)' : 'var(--color-border)'}`,
                  background: selected ? '#EEF4FF' : 'var(--color-surface)',
                  color: 'var(--color-text-primary)', fontSize: 14.5, fontWeight: 500,
                  cursor: 'pointer', transition: 'border-color 140ms, background 140ms', lineHeight: 1.4,
                }}>
                  {o.label}
                </button>
              );
            })}
          </div>
          <button onClick={back} style={{ marginTop: 20, background: 'none', border: 'none', color: 'var(--color-text-muted)', fontSize: 13, cursor: 'pointer', padding: 0 }}>
            ← Précédent
          </button>
        </div>
      </div>
    );
  }

  // ── Lead (gate du résultat) ──
  if (phase === 'lead') {
    const valid = lead.prenom && lead.nom && lead.email && lead.telephone && lead.rgpd;
    return (
      <div style={{ maxWidth: 620, margin: '0 auto' }}>
        <ProgressBar pct={100} label="Dernière étape" />
        <div style={card}>
          <h2 style={{ fontSize: 21, fontWeight: 800, color: 'var(--color-text-primary)', margin: '0 0 8px' }}>
            Votre résultat est prêt
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: '0 0 22px' }}>
            Renseignez vos coordonnées pour découvrir votre profil d’éligibilité et recevoir votre plan d’action personnalisé.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <Field label="Prénom" value={lead.prenom} onChange={(v) => setLead({ ...lead, prenom: v })} placeholder="Marie" />
            <Field label="Nom" value={lead.nom} onChange={(v) => setLead({ ...lead, nom: v })} placeholder="Dupont" />
          </div>
          <Field label="Email" type="email" value={lead.email} onChange={(v) => setLead({ ...lead, email: v })} placeholder="marie.dupont@email.com" />
          <Field label="Téléphone" type="tel" value={lead.telephone} onChange={(v) => setLead({ ...lead, telephone: v })} placeholder="06 12 34 56 78" />
          <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', margin: '14px 0 20px', cursor: 'pointer' }}>
            <input type="checkbox" checked={lead.rgpd} onChange={(e) => setLead({ ...lead, rgpd: e.target.checked })} style={{ width: 16, height: 16, marginTop: 2, accentColor: 'var(--color-blue-france)', flexShrink: 0 }} />
            <span style={{ fontSize: 12.5, lineHeight: 1.5, color: 'var(--color-text-muted)' }}>
              J’accepte d’être recontacté·e par maformationcivique.fr au sujet de ma préparation, conformément au RGPD.
            </span>
          </label>
          <button onClick={submitLead} disabled={!valid || submitting} style={{ ...primaryBtn, width: '100%', justifyContent: 'center', opacity: !valid || submitting ? 0.55 : 1, cursor: !valid || submitting ? 'default' : 'pointer' }}>
            {submitting ? 'Analyse en cours…' : 'Voir mon résultat'} <ArrowRight size={17} />
          </button>
          <button onClick={() => { setPhase('quiz'); setIndex(questions.length - 1); }} style={{ marginTop: 16, background: 'none', border: 'none', color: 'var(--color-text-muted)', fontSize: 13, cursor: 'pointer', padding: 0, display: 'block' }}>
            ← Revenir aux questions
          </button>
        </div>
      </div>
    );
  }

  // ── Résultat ──
  const verdict = computeVerdict(answers);
  const st = STATUS_STYLE[verdict.status];
  const Icon = st.icon;
  return (
    <div style={{ maxWidth: 620, margin: '0 auto' }}>
      <div style={{ background: st.bg, border: `1px solid ${st.border}`, borderRadius: 'var(--radius-xl)', padding: '28px 26px', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon size={24} color={st.color} />
          </div>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: st.color, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>
              {demarcheLabel((answers.demarche ?? 'naturalisation') as Demarche)}
            </p>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text-primary)', margin: '2px 0 0', lineHeight: 1.25 }}>{verdict.titre}</h2>
          </div>
        </div>
        <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--color-text-secondary)', margin: 0 }}>{verdict.message}</p>
      </div>

      {/* Checklist */}
      <div style={{ ...card, marginBottom: 16, padding: '22px 24px' }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 14px' }}>Votre situation</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {verdict.checklist.map((c) => (
            <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {c.ok === true ? <CheckCircle2 size={17} color="#059669" style={{ flexShrink: 0 }} />
                : c.ok === 'warn' ? <Clock size={17} color="#B45309" style={{ flexShrink: 0 }} />
                : <AlertTriangle size={17} color="#B91C1C" style={{ flexShrink: 0 }} />}
              <span style={{ fontSize: 14, color: 'var(--color-text-secondary)' }}>{c.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Étapes */}
      <div style={{ ...card, marginBottom: 16, padding: '22px 24px' }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 16px' }}>Vos prochaines étapes</p>
        <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {verdict.etapes.map((e, i) => (
            <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: '50%', background: 'var(--color-blue-france)', color: '#fff', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
              <span style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--color-text-secondary)', paddingTop: 2 }}>{e}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* CTA */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <Link href="/examen" style={{ ...primaryBtn, textDecoration: 'none' }}>Passer un examen blanc gratuit <ArrowRight size={16} /></Link>
        <Link href="/modulesciviques" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', border: '1.5px solid var(--color-border)', color: 'var(--color-text-primary)', padding: '13px 24px', borderRadius: 'var(--radius-pill)', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
          Découvrir les modules
        </Link>
      </div>
      <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 20, lineHeight: 1.6 }}>
        Ce résultat est indicatif et fondé sur vos réponses. Il ne constitue ni une décision de la préfecture ni un avis juridique. Des exceptions et des cas particuliers existent.
      </p>
    </div>
  );
}

// ── Sous-composants ──

function ProgressBar({ pct, label }: { pct: number; label: string }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{label}</span>
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-muted)' }}>{pct}%</span>
      </div>
      <div style={{ height: 5, background: 'var(--color-off-white)', borderRadius: 100, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, borderRadius: 100, background: 'linear-gradient(90deg,#002395,#1D4ED8)', transition: 'width 300ms ease' }} />
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = 'text' }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <div style={{ marginTop: 12 }}>
      <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 6 }}>{label}</label>
      <input
        type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        style={{ width: '100%', padding: '12px 14px', borderRadius: 'var(--radius-md)', border: 'var(--border-default)', fontSize: 15, background: 'var(--color-off-white)', color: 'var(--color-text-primary)', outline: 'none', boxSizing: 'border-box', minHeight: 46 }}
      />
    </div>
  );
}

const primaryBtn: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 8,
  background: 'var(--gradient-primary)', color: '#fff', border: 'none',
  padding: '14px 28px', borderRadius: 'var(--radius-pill)', fontWeight: 700, fontSize: 15,
  cursor: 'pointer', fontFamily: 'var(--font-sans)',
};
