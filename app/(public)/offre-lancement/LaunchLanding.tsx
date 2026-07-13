'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  BookOpen, Languages, CheckCircle, X, Trophy, Clock,
  ArrowRight, Star, Zap, FileDown, BarChart3, Shield,
  ChevronDown,
} from 'lucide-react';

// ── Countdown ─────────────────────────────────────────────────────────────────

const OFFER_END = new Date('2026-07-22T23:59:59+02:00').getTime();

function useCountdown() {
  const [delta, setDelta] = useState(() => Math.max(0, OFFER_END - Date.now()));
  useEffect(() => {
    const id = setInterval(() => setDelta(Math.max(0, OFFER_END - Date.now())), 1000);
    return () => clearInterval(id);
  }, []);
  const d = Math.floor(delta / 86_400_000);
  const h = Math.floor((delta % 86_400_000) / 3_600_000);
  const m = Math.floor((delta % 3_600_000) / 60_000);
  const s = Math.floor((delta % 60_000) / 1_000);
  const expired = delta === 0;
  return { d, h, m, s, expired };
}

function CountUnit({ n, label }: { n: number; label: string }) {
  return (
    <div style={{ textAlign: 'center', minWidth: 56 }}>
      <div style={{
        fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1,
        fontVariantNumeric: 'tabular-nums',
        background: 'rgba(255,255,255,0.12)',
        borderRadius: 10, padding: '8px 14px', marginBottom: 4,
        border: '1px solid rgba(255,255,255,0.18)',
      }}>
        {String(n).padStart(2, '0')}
      </div>
      <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</span>
    </div>
  );
}

// ── Sticky bar ─────────────────────────────────────────────────────────────────

function StickyBar() {
  const { d, h, m, s, expired } = useCountdown();
  if (expired) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'linear-gradient(90deg, #CC1A1A 0%, #8B1A2B 50%, #CC1A1A 100%)',
      padding: '10px 24px',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20,
      flexWrap: 'wrap',
      boxShadow: '0 2px 16px rgba(204,26,26,0.4)',
    }}>
      <span style={{ fontSize: 13, fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' }}>
        🎉 Offre de lancement — expire dans
      </span>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        {[
          { n: d, label: 'j' },
          { n: h, label: 'h' },
          { n: m, label: 'min' },
          { n: s, label: 'sec' },
        ].map(({ n, label }, i) => (
          <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 15, fontWeight: 900, color: '#fff', fontVariantNumeric: 'tabular-nums', minWidth: 26, textAlign: 'center' }}>
              {String(n).padStart(2, '0')}
            </span>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{label}</span>
            {i < 3 && <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 700 }}>:</span>}
          </span>
        ))}
      </div>
      <a href="#offres" style={{
        background: '#fff', color: '#CC1A1A', padding: '6px 18px',
        borderRadius: 100, fontSize: 12, fontWeight: 800, textDecoration: 'none',
        whiteSpace: 'nowrap', flexShrink: 0,
      }}>
        J'en profite →
      </a>
    </div>
  );
}

// ── Données ────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: Shield,
    title: 'Formation civique officielle',
    desc: '8 modules conformes OFPRA : histoire, institutions, valeurs de la République, droits & devoirs.',
    color: '#002395',
    modules: ['La République française', 'Les institutions', 'Droits et libertés', 'La laïcité', '+ 4 modules'],
  },
  {
    icon: Languages,
    title: 'Langue française A2 → B2',
    desc: '2 700 exercices progressifs : grammaire, conjugaison, expression écrite, entretien de naturalisation.',
    color: '#7C3AED',
    modules: ['Grammaire & conjugaison', 'Expression écrite', 'Entretien de naturalisation', 'Phonétique', '+ 22 modules'],
  },
  {
    icon: Trophy,
    title: 'Quiz & examens blancs',
    desc: 'Testez vos connaissances avec des centaines de questions format officiel. Résultats immédiats.',
    color: '#D97706',
    modules: ['Quiz par module', 'Examens blancs A2 / B1 / B2', 'Score détaillé', 'Recommandations', 'Progression visible'],
  },
];

const COMPARE_ROWS = [
  { label: 'Coût', without: '50 – 200 € (livres, cours)', with: 'À partir de 5 €/mois' },
  { label: 'Contenu conforme OFPRA', without: false, with: true },
  { label: 'Formation linguistique incluse', without: false, with: true },
  { label: 'Quiz d\'entraînement illimités', without: false, with: true },
  { label: 'Examens blancs format officiel', without: false, with: true },
  { label: 'Attestation PDF téléchargeable', without: false, with: true },
  { label: 'Suivi de progression', without: false, with: true },
  { label: 'Disponible 24h/24, sur mobile', without: false, with: true },
  { label: 'Mise à jour régulière du contenu', without: false, with: true },
];

const FAQ = [
  {
    q: 'Que couvre la formation civique ?',
    a: '8 modules complets conformes au programme OFPRA : histoire de France, institutions de la Ve République, valeurs de la République, droits et libertés fondamentaux, laïcité, vie civique. Les contenus sont mis à jour régulièrement.',
  },
  {
    q: 'À quoi correspond le bundle ?',
    a: 'Le bundle donne accès à la formation civique ET à la formation linguistique (A2 à B2). 2 700 exercices de langue française couvrant grammaire, conjugaison, expression écrite, phonétique et la préparation à l\'entretien de naturalisation.',
  },
  {
    q: 'L\'offre de lancement est-elle valable pour de nouveaux abonnements seulement ?',
    a: 'Oui, cette offre est réservée aux nouveaux inscrits jusqu\'au 22 juillet 2026 inclus. Le tarif de lancement est maintenu tant que votre abonnement reste actif.',
  },
  {
    q: 'Puis-je annuler à tout moment ?',
    a: 'Oui, sans engagement ni frais. Vous annulez en un clic depuis votre espace personnel, et l\'accès reste actif jusqu\'à la fin de la période payée.',
  },
  {
    q: 'L\'attestation est-elle reconnue en préfecture ?',
    a: 'C\'est un document de suivi sérieux, utile à joindre au dossier pour montrer votre démarche de préparation. Il n\'est pas délivré par un organisme d\'État, mais constitue un justificatif crédible.',
  },
];

// ── Composant principal ────────────────────────────────────────────────────────

export function LaunchLanding() {
  const { d, h, m, s, expired } = useCountdown();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <StickyBar />

      <main style={{ paddingTop: 44 }}>

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(135deg, #001050 0%, #001A70 40%, #8B1A2B 80%, #CC1A1A 100%)',
          padding: 'clamp(64px, 10vw, 120px) 0 clamp(72px, 11vw, 132px)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Filigrane Delacroix */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            aria-hidden
            src="/images/hero/delacroix-watermark.jpg"
            alt=""
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center 20%',
              opacity: 0.09, mixBlendMode: 'luminosity', zIndex: 0,
              pointerEvents: 'none',
            }}
          />
          <div aria-hidden style={{
            position: 'absolute', inset: 0, zIndex: 1,
            backgroundImage: [
              'radial-gradient(circle at 15% 85%, rgba(0,35,149,0.5) 0%, transparent 45%)',
              'radial-gradient(circle at 85% 20%, rgba(204,26,26,0.35) 0%, transparent 45%)',
            ].join(', '),
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>

            {/* Badge offre */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.28)',
              borderRadius: 100, padding: '7px 18px', marginBottom: 28,
              backdropFilter: 'blur(8px)',
            }}>
              <Zap size={13} color="#FCD34D" fill="#FCD34D" />
              <span style={{ fontSize: 12, fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Offre de lancement · jusqu'au 22 juillet
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(30px, 5.5vw, 64px)', fontWeight: 900, color: '#fff',
              lineHeight: 1.1, letterSpacing: '-0.025em', maxWidth: 820, margin: '0 auto 24px',
            }}>
              Entraînez-vous en français.<br />
              <span style={{ color: '#BFCFFF' }}>Préparez votre entretien de naturalisation.</span>
            </h1>

            <p style={{
              fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.82)',
              lineHeight: 1.75, maxWidth: 520, margin: '0 auto 48px',
            }}>
              Des exercices de français et des cours de civique
              pour réussir votre entretien — à votre rythme, depuis votre téléphone.
            </p>

            {/* Timer hero */}
            {!expired && (
              <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 44, flexWrap: 'wrap' }}>
                <CountUnit n={d} label="jours" />
                <div style={{ fontSize: 28, fontWeight: 900, color: 'rgba(255,255,255,0.4)', alignSelf: 'flex-start', marginTop: 8 }}>:</div>
                <CountUnit n={h} label="heures" />
                <div style={{ fontSize: 28, fontWeight: 900, color: 'rgba(255,255,255,0.4)', alignSelf: 'flex-start', marginTop: 8 }}>:</div>
                <CountUnit n={m} label="minutes" />
                <div style={{ fontSize: 28, fontWeight: 900, color: 'rgba(255,255,255,0.4)', alignSelf: 'flex-start', marginTop: 8 }}>:</div>
                <CountUnit n={s} label="secondes" />
              </div>
            )}

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#offres" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: '#fff', color: '#002395',
                padding: '15px 32px', borderRadius: 100,
                fontWeight: 800, fontSize: 16, textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
              }}>
                Voir les offres <ArrowRight size={17} />
              </a>
              <a href="#avantages" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.1)',
                border: '1.5px solid rgba(255,255,255,0.35)',
                color: '#fff', padding: '15px 28px', borderRadius: 100,
                fontWeight: 600, fontSize: 16, textDecoration: 'none',
                backdropFilter: 'blur(8px)',
              }}>
                Découvrir la plateforme
              </a>
            </div>

            {/* Social proof mini */}
            <div style={{ marginTop: 36, display: 'flex', justifyContent: 'center', gap: 28, flexWrap: 'wrap' }}>
              {[
                { icon: Star, text: '4,8/5 de satisfaction' },
                { icon: Shield, text: '100 % conforme OFPRA' },
                { icon: Clock, text: 'Accès immédiat' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'rgba(255,255,255,0.72)', fontSize: 13 }}>
                  <Icon size={13} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AVANTAGES / CONTENU ───────────────────────────────────────── */}
        <section id="avantages" style={{ background: 'var(--color-off-white)', padding: 'clamp(64px, 9vw, 96px) 0' }}>
          <div className="container">
            <p style={{ textAlign: 'center', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-blue-france)', marginBottom: 12 }}>
              Ce que vous obtenez
            </p>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 12, lineHeight: 1.2 }}>
              Tout pour réussir, en un seul endroit.
            </h2>
            <p style={{ textAlign: 'center', fontSize: 16, color: 'var(--color-text-secondary)', marginBottom: 56, maxWidth: 520, margin: '0 auto 56px' }}>
              Formation civique officielle et langue française : deux parcours complémentaires, construits pour votre entretien de naturalisation.
            </p>

            <div className="launch-features-grid" style={{ display: 'grid', gap: 24 }}>
              {FEATURES.map(({ icon: Icon, title, desc, color, modules }) => (
                <div key={title} className="launch-feature-card" style={{
                  background: '#fff', border: 'var(--border-default)',
                  borderRadius: 20, padding: '28px 28px 24px',
                  boxShadow: 'var(--shadow-card)',
                  borderTop: `3px solid ${color}`,
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: color + '15',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 16,
                  }}>
                    <Icon size={20} color={color} />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 10 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: 20 }}>{desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {modules.map((m) => (
                      <div key={m} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <CheckCircle size={13} color={color} />
                        <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bonus row */}
            <div className="launch-bonus-grid" style={{ display: 'grid', gap: 16, marginTop: 20 }}>
              {[
                { icon: FileDown, color: '#059669', title: 'Attestation PDF', desc: 'Téléchargez votre attestation de suivi à joindre au dossier préfecture.' },
                { icon: BarChart3, color: '#002395', title: 'Suivi de progression', desc: 'Tableau de bord personnel : modules, quiz, examens. Sachez exactement où vous en êtes.' },
                { icon: BookOpen, color: '#D97706', title: 'Fiches de révision', desc: 'Grandes figures, lieux emblématiques, dates clés. Pour ne rien oublier.' },
              ].map(({ icon: Icon, color, title, desc }) => (
                <div key={title} className="launch-bonus-item" style={{
                  background: '#fff', border: 'var(--border-default)',
                  borderRadius: 16, padding: '20px 22px',
                  display: 'flex', alignItems: 'flex-start', gap: 14,
                  boxShadow: 'var(--shadow-card)',
                }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={17} color={color} />
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 4 }}>{title}</p>
                    <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── APERÇU PLATEFORME ─────────────────────────────────────────── */}
        <section style={{ background: '#fff', padding: 'clamp(56px, 8vw, 80px) 0' }}>
          <div className="container">
            <p style={{ textAlign: 'center', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-blue-france)', marginBottom: 12 }}>
              La plateforme en action
            </p>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 48, lineHeight: 1.2 }}>
              Apprenez à votre rythme, quand vous voulez.
            </h2>

            {/* Mock app window */}
            <div style={{ maxWidth: 720, margin: '0 auto', borderRadius: 20, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,23,112,0.18)', border: '1px solid var(--color-border)' }}>
              {/* Browser chrome */}
              <div style={{ background: '#F1F3F8', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid #DDE1EF' }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57' }} />
                  <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#FEBC2E' }} />
                  <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840' }} />
                </div>
                <div style={{ flex: 1, background: '#fff', borderRadius: 6, padding: '4px 10px', fontSize: 11, color: '#8A93B2', border: '1px solid #DDE1EF', maxWidth: 260, margin: '0 auto' }}>
                  maformationcivique.fr/lecon/...
                </div>
              </div>

              {/* App content */}
              <div style={{ background: 'var(--color-off-white)', padding: '0' }}>
                {/* Top nav strip */}
                <div style={{ background: 'var(--color-blue-france)', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>Module 3 — Droits et libertés</span>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>Leçon 2 / 5</span>
                </div>
                {/* Progress bar */}
                <div style={{ height: 4, background: 'rgba(0,35,149,0.1)' }}>
                  <div style={{ height: '100%', width: '40%', background: 'linear-gradient(90deg, #002395, #0057A8)' }} />
                </div>

                <div style={{ padding: '28px 24px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="launch-mockup-grid">
                  {/* Left: question */}
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-blue-france)', marginBottom: 12 }}>
                      Question 3/8
                    </p>
                    <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-text-primary)', lineHeight: 1.5, marginBottom: 20 }}>
                      Quel article de la Constitution garantit la liberté d'expression en France ?
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {[
                        { label: 'Article 1 — Égalité des citoyens', selected: false, correct: false },
                        { label: 'Article 11 — Liberté de la presse', selected: true, correct: true },
                        { label: 'Article 16 — Pouvoirs d\'exception', selected: false, correct: false },
                        { label: 'Article 34 — Domaine de la loi', selected: false, correct: false },
                      ].map(({ label, selected, correct }) => (
                        <div key={label} style={{
                          padding: '10px 14px', borderRadius: 10, fontSize: 13, fontWeight: selected ? 700 : 400,
                          border: selected ? '2px solid #002395' : '1.5px solid var(--color-border)',
                          background: selected ? '#EEF2FF' : '#fff',
                          color: selected ? '#002395' : 'var(--color-text-secondary)',
                          display: 'flex', alignItems: 'center', gap: 10,
                        }}>
                          <div style={{
                            width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                            border: selected ? '2px solid #002395' : '2px solid #CBD5E1',
                            background: selected ? '#002395' : 'transparent',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}>
                            {selected && <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#fff' }} />}
                          </div>
                          {label}
                        </div>
                      ))}
                    </div>
                    <button style={{
                      marginTop: 20, width: '100%', padding: '12px', borderRadius: 10,
                      background: 'var(--gradient-primary)', color: '#fff',
                      border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer',
                    }}>
                      Valider ma réponse →
                    </button>
                  </div>

                  {/* Right: progress sidebar */}
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 12 }}>
                      Ma progression
                    </p>
                    <div style={{ background: '#fff', borderRadius: 12, padding: '16px', border: 'var(--border-default)', marginBottom: 14 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                        <span style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>Module en cours</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-blue-france)' }}>40 %</span>
                      </div>
                      <div style={{ height: 6, background: '#EEF2FF', borderRadius: 100 }}>
                        <div style={{ height: '100%', width: '40%', borderRadius: 100, background: 'var(--gradient-primary)' }} />
                      </div>
                    </div>
                    {[
                      { mod: 'La République française', pct: 100 },
                      { mod: 'Les institutions', pct: 83 },
                      { mod: 'Droits et libertés', pct: 40 },
                      { mod: 'La laïcité', pct: 0 },
                      { mod: 'Histoire de France', pct: 0 },
                    ].map(({ mod, pct }) => (
                      <div key={mod} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                        <div style={{
                          width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                          background: pct === 100 ? '#DCFCE7' : pct > 0 ? '#EEF2FF' : '#F8FAFC',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          {pct === 100
                            ? <CheckCircle size={13} color="#059669" />
                            : pct > 0
                              ? <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#002395' }} />
                              : <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#CBD5E1' }} />
                          }
                        </div>
                        <span style={{ fontSize: 12, color: pct > 0 ? 'var(--color-text-primary)' : 'var(--color-text-muted)', flex: 1, lineHeight: 1.3 }}>{mod}</span>
                        <span style={{ fontSize: 11, fontWeight: 700, color: pct === 100 ? '#059669' : pct > 0 ? '#002395' : '#CBD5E1' }}>
                          {pct > 0 ? `${pct}%` : '—'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TABLEAU COMPARATIF ────────────────────────────────────────── */}
        <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 96px) 0' }}>
          <div className="container">
            <p style={{ textAlign: 'center', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-red-france)', marginBottom: 12 }}>
              Pourquoi maformationcivique.fr ?
            </p>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 56, lineHeight: 1.2 }}>
              La différence, en un coup d'œil.
            </h2>

            <div style={{ maxWidth: 740, margin: '0 auto', overflow: 'hidden', borderRadius: 20, border: 'var(--border-default)', boxShadow: 'var(--shadow-lg)' }}>
              {/* Header */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'var(--color-off-white)' }}>
                <div style={{ padding: '18px 20px', fontSize: 13, fontWeight: 700, color: 'var(--color-text-muted)' }}>Critère</div>
                <div style={{ padding: '18px 20px', textAlign: 'center', fontSize: 13, fontWeight: 700, color: 'var(--color-text-secondary)', borderLeft: '1px solid var(--color-border)' }}>
                  Sans MFC
                </div>
                <div style={{ padding: '18px 20px', textAlign: 'center', background: 'var(--color-blue-france)', borderLeft: '1px solid transparent' }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: '#fff' }}>Avec MFC ✦</span>
                </div>
              </div>

              {/* Rows */}
              {COMPARE_ROWS.map(({ label, without, with: withVal }, i) => (
                <div key={label} className="launch-compare-row" style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                  borderTop: '1px solid var(--color-border)',
                  background: i % 2 === 0 ? '#fff' : '#FAFBFF',
                }}>
                  <div style={{ padding: '14px 20px', fontSize: 14, color: 'var(--color-text-primary)', fontWeight: 500 }}>{label}</div>
                  <div style={{ padding: '14px 20px', textAlign: 'center', borderLeft: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {typeof without === 'string'
                      ? <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>{without}</span>
                      : without
                        ? <CheckCircle size={17} color="#059669" />
                        : <X size={17} color="#9CA3AF" />
                    }
                  </div>
                  <div style={{ padding: '14px 20px', textAlign: 'center', background: '#EEF2FF', borderLeft: '1px solid #C7D2FE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {typeof withVal === 'string'
                      ? <span style={{ fontSize: 13, fontWeight: 600, color: '#002395' }}>{withVal}</span>
                      : withVal
                        ? <CheckCircle size={17} color="#002395" strokeWidth={2.5} />
                        : <X size={17} color="#9CA3AF" />
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OFFRES ────────────────────────────────────────────────────── */}
        <section id="offres" style={{ background: 'var(--color-off-white)', padding: 'clamp(64px, 9vw, 96px) 0' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, #CC1A1A 0%, #8B1A2B 100%)',
              borderRadius: 16, padding: '12px 24px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
              marginBottom: 40, maxWidth: 520, margin: '0 auto 40px', flexWrap: 'wrap',
            }}>
              <Clock size={15} color="#fff" />
              <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>
                Offre valable jusqu'au <strong>22 juillet 2026</strong> inclus
              </span>
              {!expired && (
                <span style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.85)', fontVariantNumeric: 'tabular-nums' }}>
                  · {d}j {String(h).padStart(2,'0')}h {String(m).padStart(2,'0')}m
                </span>
              )}
            </div>

            <h2 style={{ textAlign: 'center', fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 12, lineHeight: 1.2 }}>
              Choisissez votre accès.
            </h2>
            <p style={{ textAlign: 'center', fontSize: 15, color: 'var(--color-text-secondary)', marginBottom: 52, maxWidth: 480, margin: '0 auto 52px' }}>
              Trois formules. Choisissez ce dont vous avez besoin pour réussir votre entretien.
            </p>

            <div className="launch-pricing-grid" style={{ display: 'grid', gap: 20, maxWidth: 1040, margin: '0 auto' }}>

              {/* CIVIQUE */}
              <div className="launch-pricing-card" style={{
                background: '#fff', border: 'var(--border-default)',
                borderRadius: 24, padding: '32px 28px',
                boxShadow: 'var(--shadow-card)',
                position: 'relative', overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}>
                <img aria-hidden src="/images/paintings/histoire.jpg" alt=""
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center 30%',
                    opacity: 0.07, mixBlendMode: 'multiply', zIndex: 0, pointerEvents: 'none' }} />
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Shield size={18} color="var(--color-blue-france)" />
                    </div>
                    <p style={{ fontSize: 16, fontWeight: 800, color: 'var(--color-text-primary)', margin: 0 }}>Civique</p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
                    <span style={{ fontSize: 40, fontWeight: 900, color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}>5 €</span>
                    <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>/mois</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                    <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}><s>9,99 €/mois</s></span>
                    <span style={{ fontSize: 11, fontWeight: 700, background: '#FEF9C3', color: '#92400E', borderRadius: 100, padding: '2px 8px', border: '1px solid #FDE68A' }}>Lancement</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 24, flex: 1 }}>
                    {[
                      '8 modules civiques (conforme OFPRA)',
                      'Histoire, institutions, valeurs de la République',
                      'Quiz et examens blancs',
                      'Fiches de révision : figures, lieux, dates',
                      'Attestation PDF téléchargeable',
                    ].map((f) => (
                      <div key={f} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                        <CheckCircle size={14} color="var(--color-blue-france)" style={{ flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/inscription?plan=premium" style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8,
                    background: 'var(--gradient-primary)', color: '#fff',
                    padding: '13px 20px', borderRadius: 100,
                    fontWeight: 700, fontSize: 14, textDecoration: 'none',
                  }}>
                    Commencer à 5 € <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* LANGUE */}
              <div className="launch-pricing-card" style={{
                background: '#fff', border: 'var(--border-default)',
                borderRadius: 24, padding: '32px 28px',
                boxShadow: 'var(--shadow-card)',
                position: 'relative', overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}>
                <img aria-hidden src="/images/paintings/vie-en-france.jpg" alt=""
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center 40%',
                    opacity: 0.07, mixBlendMode: 'multiply', zIndex: 0, pointerEvents: 'none' }} />
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: '#F3F0FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Languages size={18} color="#7C3AED" />
                    </div>
                    <p style={{ fontSize: 16, fontWeight: 800, color: 'var(--color-text-primary)', margin: 0 }}>Langue française</p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
                    <span style={{ fontSize: 40, fontWeight: 900, color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}>5 €</span>
                    <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>/mois</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                    <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}><s>9,99 €/mois</s></span>
                    <span style={{ fontSize: 11, fontWeight: 700, background: '#F3F0FF', color: '#5B21B6', borderRadius: 100, padding: '2px 8px', border: '1px solid #DDD6FE' }}>Lancement</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 24, flex: 1 }}>
                    {[
                      '2 700 exercices de français A2 → B2',
                      'Grammaire, conjugaison, expression écrite',
                      'Compréhension orale et phonétique',
                      'Préparation à l\'entretien de naturalisation',
                      'Examens blancs langue (A2 / B1 / B2)',
                    ].map((f) => (
                      <div key={f} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                        <CheckCircle size={14} color="#7C3AED" style={{ flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/inscription?plan=langue" style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8,
                    background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)', color: '#fff',
                    padding: '13px 20px', borderRadius: 100,
                    fontWeight: 700, fontSize: 14, textDecoration: 'none',
                  }}>
                    Commencer à 5 € <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* BUNDLE */}
              <div className="launch-pricing-card" style={{
                background: 'linear-gradient(160deg, #001A5E 0%, #002395 60%, #1D1180 100%)',
                borderRadius: 24, padding: '32px 28px',
                boxShadow: '0 16px 48px rgba(0,35,149,0.30)',
                position: 'relative', overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}>
                <img aria-hidden src="/images/paintings/delacroix-liberte.jpg" alt=""
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center 20%',
                    opacity: 0.09, mixBlendMode: 'luminosity', zIndex: 0, pointerEvents: 'none' }} />
                <div style={{
                  position: 'absolute', top: -1, right: 24, zIndex: 2,
                  background: 'linear-gradient(135deg, #CC1A1A 0%, #EF4135 100%)',
                  color: '#fff', fontSize: 10, fontWeight: 800,
                  padding: '5px 14px', borderRadius: '0 0 10px 10px',
                  textTransform: 'uppercase', letterSpacing: '0.06em',
                }}>✦ Recommandé</div>

                <div aria-hidden style={{
                  position: 'absolute', top: -60, right: -60, width: 200, height: 200, zIndex: 0,
                  borderRadius: '50%', background: 'rgba(255,255,255,0.04)',
                }} />

                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Zap size={18} color="#FCD34D" fill="#FCD34D" />
                    </div>
                    <p style={{ fontSize: 16, fontWeight: 800, color: '#fff', margin: 0 }}>Bundle Complet</p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
                    <span style={{ fontSize: 40, fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>10 €</span>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>/mois</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}><s>18,99 €/mois</s></span>
                    <span style={{ fontSize: 11, fontWeight: 700, background: 'rgba(252,211,77,0.2)', color: '#FCD34D', borderRadius: 100, padding: '2px 8px', border: '1px solid rgba(252,211,77,0.35)' }}>Lancement</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 24, flex: 1 }}>
                    {[
                      'Tout Civique + tout Langue française',
                      '2 700 exercices + 8 modules civiques',
                      'Examens blancs civique et langue',
                      'Attestation PDF + suivi de progression',
                      'Accès complet à tous les contenus',
                    ].map((f) => (
                      <div key={f} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                        <CheckCircle size={14} color="#7BA7FF" style={{ flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.88)', lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/inscription?plan=bundle" style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8,
                    background: '#fff', color: '#002395',
                    padding: '13px 20px', borderRadius: 100,
                    fontWeight: 800, fontSize: 14, textDecoration: 'none',
                  }}>
                    Commencer à 10 € <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Garantie */}
            <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--color-text-muted)', marginTop: 28 }}>
              🔒 Sans engagement · Annulable à tout moment · Accès immédiat après inscription
            </p>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section style={{ background: '#fff', padding: 'clamp(56px, 8vw, 88px) 0' }}>
          <div className="container" style={{ maxWidth: 680, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 44 }}>
              Questions fréquentes
            </h2>
            {FAQ.map(({ q, a }, i) => (
              <div
                key={q}
                className="launch-faq-item"
                style={{
                  borderRadius: 14, border: 'var(--border-default)',
                  marginBottom: 10, background: '#fff', overflow: 'hidden',
                  boxShadow: openFaq === i ? 'var(--shadow-lg)' : 'var(--shadow-card)',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: 16, padding: '18px 22px', background: 'none', border: 'none',
                    cursor: 'pointer', textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-text-primary)', lineHeight: 1.4 }}>{q}</span>
                  <ChevronDown
                    size={18} color="var(--color-text-muted)"
                    style={{ flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 250ms' }}
                  />
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 22px 18px', fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA FINAL ─────────────────────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(135deg, #001050 0%, #001A70 50%, #CC1A1A 100%)',
          padding: 'clamp(64px, 9vw, 96px) 0',
          textAlign: 'center',
        }}>
          <div className="container">
            {!expired && (
              <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 36, flexWrap: 'wrap' }}>
                <CountUnit n={d} label="jours" />
                <div style={{ fontSize: 24, fontWeight: 900, color: 'rgba(255,255,255,0.3)', alignSelf: 'flex-start', marginTop: 8 }}>:</div>
                <CountUnit n={h} label="heures" />
                <div style={{ fontSize: 24, fontWeight: 900, color: 'rgba(255,255,255,0.3)', alignSelf: 'flex-start', marginTop: 8 }}>:</div>
                <CountUnit n={m} label="min" />
                <div style={{ fontSize: 24, fontWeight: 900, color: 'rgba(255,255,255,0.3)', alignSelf: 'flex-start', marginTop: 8 }}>:</div>
                <CountUnit n={s} label="sec" />
              </div>
            )}
            <h2 style={{ fontSize: 'clamp(26px, 4.5vw, 48px)', fontWeight: 900, color: '#fff', marginTop: 0, marginBottom: 14, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Prêt à commencer ?
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.78)', maxWidth: 440, margin: '0 auto 32px' }}>
              Rejoignez les apprenants qui préparent leur naturalisation avec méthode.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/inscription?plan=premium" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.15)',
                border: '1.5px solid rgba(255,255,255,0.35)',
                color: '#fff', padding: '13px 22px', borderRadius: 100,
                fontWeight: 600, fontSize: 14, textDecoration: 'none',
              }}>
                Civique — 5 €/mois
              </Link>
              <Link href="/inscription?plan=langue" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.15)',
                border: '1.5px solid rgba(255,255,255,0.35)',
                color: '#fff', padding: '13px 22px', borderRadius: 100,
                fontWeight: 600, fontSize: 14, textDecoration: 'none',
              }}>
                Langue — 5 €/mois
              </Link>
              <Link href="/inscription?plan=bundle" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#fff', color: '#002395',
                padding: '13px 24px', borderRadius: 100,
                fontWeight: 800, fontSize: 14, textDecoration: 'none',
              }}>
                Bundle — 10 €/mois <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <style>{`
        .launch-features-grid { grid-template-columns: repeat(3, 1fr); }
        .launch-bonus-grid   { grid-template-columns: repeat(3, 1fr); }
        .launch-pricing-grid { grid-template-columns: repeat(3, 1fr); }
        .launch-mockup-grid  { grid-template-columns: 1fr 1fr; }

        /* Hover FAQ */
        .launch-faq-item {
          transition: box-shadow 200ms, transform 200ms;
        }
        .launch-faq-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0,23,112,0.12) !important;
        }

        /* Hover feature cards */
        .launch-feature-card {
          transition: transform 200ms, box-shadow 200ms;
        }
        .launch-feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,23,112,0.13) !important;
        }

        /* Hover bonus items */
        .launch-bonus-item {
          transition: transform 180ms, box-shadow 180ms;
        }
        .launch-bonus-item:hover {
          transform: translateX(4px);
          box-shadow: 0 6px 24px rgba(0,23,112,0.10) !important;
        }

        /* Hover pricing cards */
        .launch-pricing-card {
          transition: transform 200ms;
        }
        .launch-pricing-card:hover {
          transform: translateY(-5px);
        }

        /* Hover compare rows */
        .launch-compare-row {
          transition: background 150ms;
        }
        .launch-compare-row:hover {
          background: #F0F4FF !important;
        }

        @media (max-width: 860px) {
          .launch-features-grid { grid-template-columns: 1fr !important; }
          .launch-bonus-grid    { grid-template-columns: 1fr !important; }
          .launch-pricing-grid  { grid-template-columns: 1fr !important; }
          .launch-mockup-grid   { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
