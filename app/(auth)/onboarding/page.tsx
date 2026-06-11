'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, ArrowRight, ChevronRight, Star, Shield, Award, Sparkles } from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────────────
type Demarche      = 'CSP' | 'carte_resident' | 'naturalisation';
type LangueNiveau  = 'A2' | 'B1_B2' | 'besoin_examen' | 'ne_sait_pas';

// ── Contenu personnalisé step 3 ───────────────────────────────────────────────
function getUpsellContent(demarche: Demarche | null, langue: LangueNiveau | null) {
  const base = {
    CSP: {
      emoji: '🟦',
      title: 'Carte de séjour pluriannuelle',
      message: 'Le test civique est obligatoire pour votre renouvellement. Nos 5 modules couvrent 100% des questions officielles du test OFII.',
      urgence: 'Le test peut être convoqué sous 2 à 6 mois.',
    },
    carte_resident: {
      emoji: '⭐',
      title: 'Carte de résident',
      message: 'La carte de résident exige un niveau de connaissances civiques élevé. Nos examens blancs sont calqués sur le test réel.',
      urgence: 'Préparez-vous avec les vrais sujets du test.',
    },
    naturalisation: {
      emoji: '🇫🇷',
      title: 'Naturalisation française',
      message: 'La naturalisation est la procédure la plus exigeante. L\'entretien civique évalue votre connaissance approfondie de la République.',
      urgence: 'Le taux de refus pour insuffisance civique est de 23%.',
    },
  };

  const langueNote =
    langue === 'besoin_examen'
      ? 'Votre profil indique que vous devez encore passer votre examen de langue. Nous pouvons vous orienter vers un centre agréé OFII.'
      : langue === 'ne_sait_pas'
      ? 'Nous pouvons vous aider à déterminer le niveau de langue requis pour votre démarche.'
      : null;

  return {
    ...(base[demarche ?? 'CSP'] ?? base.CSP),
    langueNote,
  };
}

// ── Composant principal ───────────────────────────────────────────────────────
export default function OnboardingPage() {
  const router = useRouter();

  const [step,        setStep]        = useState<1 | 2 | 3>(1);
  const [demarche,    setDemarche]    = useState<Demarche | null>(null);
  const [langue,      setLangue]      = useState<LangueNiveau | null>(null);
  const [accompagne,  setAccompagne]  = useState(false);
  const [saving,      setSaving]      = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  // ── Sauvegarde + transition step 2→3 ────────────────────────────────────
  const handleStep2Next = async () => {
    if (!langue) return;
    setSaving(true);
    try {
      await fetch('/api/auth/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ demarche, langue_niveau: langue, accompagne }),
      });
    } catch {
      // Non bloquant — on avance quand même
    }
    setSaving(false);
    setStep(3);
  };

  // ── Aller au dashboard (skip premium) ───────────────────────────────────
  const handleSkip = () => router.push('/dashboard');

  // ── Checkout Stripe ──────────────────────────────────────────────────────
  const handleUpgrade = async () => {
    setCheckoutLoading(true);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planKey: 'premium_monthly' }),
      });
      const { url } = await res.json();
      if (url) window.location.href = url;
    } finally {
      setCheckoutLoading(false);
    }
  };

  const upsell = getUpsellContent(demarche, langue);

  // ── Barre de progression ─────────────────────────────────────────────────
  const ProgressDots = () => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '40px' }}>
      {([1, 2, 3] as const).map((s) => (
        <div key={s} style={{
          width: s === step ? 28 : 8, height: 8,
          borderRadius: 4,
          background: s <= step
            ? 'linear-gradient(90deg, #002395, #CC1A1A)'
            : '#E5E7EB',
          transition: 'all 300ms ease-out',
        }} />
      ))}
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // STEP 1 — Démarche
  // ═══════════════════════════════════════════════════════════════════════════
  if (step === 1) {
    const OPTIONS: { value: Demarche; label: string; desc: string; icon: React.FC<{ size: number; color: string }> }[] = [
      { value: 'CSP',            label: 'Carte de séjour pluriannuelle', desc: 'Renouvellement après une 1ère carte',        icon: Shield },
      { value: 'carte_resident', label: 'Carte de résident',             desc: 'Séjour longue durée (10 ans)',               icon: Star },
      { value: 'naturalisation', label: 'Naturalisation française',      desc: 'Devenir citoyen·ne français·e',              icon: Award },
    ];

    return (
      <div style={{ width: '100%', maxWidth: '520px' }}>
        <ProgressDots />

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-blue-france)', marginBottom: '10px' }}>
            Étape 1 sur 3
          </p>
          <h1 style={{ fontSize: 'clamp(22px, 4vw, 28px)', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.2, marginBottom: '10px' }}>
            Quelle est votre démarche ?
          </h1>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            Nous personnalisons votre programme en fonction de vos besoins.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
          {OPTIONS.map(({ value, label, desc, icon: Icon }) => {
            const selected = demarche === value;
            return (
              <button
                key={value}
                onClick={() => setDemarche(value)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '18px 20px',
                  borderRadius: 'var(--radius-lg)',
                  background: selected ? 'var(--color-blue-light)' : 'var(--color-surface)',
                  border: selected ? '2px solid var(--color-blue-france)' : 'var(--border-default)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 150ms ease-out',
                  width: '100%',
                  fontFamily: 'var(--font-sans)',
                  boxShadow: selected ? '0 0 0 4px rgba(0,35,149,0.08)' : 'var(--shadow-card)',
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
                  background: selected ? 'var(--color-blue-france)' : '#F3F4F6',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 150ms ease-out',
                }}>
                  <Icon size={20} color={selected ? '#fff' : 'var(--color-text-muted)'} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 'var(--font-size-base)', fontWeight: 600, color: selected ? 'var(--color-blue-france)' : 'var(--color-text-primary)', marginBottom: '2px' }}>
                    {label}
                  </div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    {desc}
                  </div>
                </div>
                {selected && <CheckCircle size={20} color="var(--color-blue-france)" style={{ flexShrink: 0 }} />}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => demarche && setStep(2)}
          disabled={!demarche}
          style={{
            width: '100%', padding: '14px 24px',
            borderRadius: 'var(--radius-pill)',
            background: demarche ? 'var(--gradient-primary)' : '#E5E7EB',
            color: demarche ? '#fff' : '#9CA3AF',
            border: 'none', fontSize: 'var(--font-size-base)', fontWeight: 600,
            cursor: demarche ? 'pointer' : 'not-allowed',
            fontFamily: 'var(--font-sans)', minHeight: '52px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            transition: 'all 150ms ease-out',
          }}
        >
          Continuer <ArrowRight size={16} />
        </button>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // STEP 2 — Langue + Accompagné
  // ═══════════════════════════════════════════════════════════════════════════
  if (step === 2) {
    const LANGUE_OPTIONS: { value: LangueNiveau; label: string; sub?: string }[] = [
      { value: 'A2',           label: "J'ai déjà une attestation A2",      sub: 'Attestation officielle en main' },
      { value: 'B1_B2',        label: "J'ai déjà une attestation B1/B2",   sub: 'Niveau intermédiaire/avancé' },
      { value: 'besoin_examen',label: "Je dois encore passer l'examen",    sub: 'Je cherche un centre agréé' },
      { value: 'ne_sait_pas',  label: "Je ne sais pas encore",             sub: 'Je voudrais être orienté' },
    ];

    return (
      <div style={{ width: '100%', maxWidth: '520px' }}>
        <ProgressDots />

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-blue-france)', marginBottom: '10px' }}>
            Étape 2 sur 3
          </p>
          <h1 style={{ fontSize: 'clamp(22px, 4vw, 28px)', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.2, marginBottom: '10px' }}>
            Votre situation linguistique
          </h1>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            L'examen de langue est requis pour la plupart des démarches.
          </p>
        </div>

        {/* Options langue */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          {LANGUE_OPTIONS.map(({ value, label, sub }) => {
            const selected = langue === value;
            return (
              <button
                key={value}
                onClick={() => setLangue(value)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '15px 18px',
                  borderRadius: 'var(--radius-lg)',
                  background: selected ? 'var(--color-blue-light)' : 'var(--color-surface)',
                  border: selected ? '2px solid var(--color-blue-france)' : 'var(--border-default)',
                  cursor: 'pointer', textAlign: 'left',
                  transition: 'all 150ms ease-out',
                  width: '100%', fontFamily: 'var(--font-sans)',
                  boxShadow: selected ? '0 0 0 4px rgba(0,35,149,0.08)' : 'var(--shadow-card)',
                }}
              >
                {/* Radio visuel */}
                <div style={{
                  width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                  border: selected ? '2px solid var(--color-blue-france)' : '2px solid #D1D5DB',
                  background: selected ? 'var(--color-blue-france)' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 150ms ease-out',
                }}>
                  {selected && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: selected ? 600 : 500, color: selected ? 'var(--color-blue-france)' : 'var(--color-text-primary)' }}>
                    {label}
                  </div>
                  {sub && (
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: '1px' }}>
                      {sub}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Checkbox accompagné */}
        <div
          onClick={() => setAccompagne((v) => !v)}
          style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '14px 18px',
            borderRadius: 'var(--radius-md)',
            background: accompagne ? '#F0FDF4' : 'var(--color-off-white)',
            border: accompagne ? '1.5px solid #16A34A' : 'var(--border-default)',
            cursor: 'pointer',
            marginBottom: '28px',
            transition: 'all 150ms ease-out',
          }}
        >
          <div style={{
            width: 20, height: 20, borderRadius: '4px', flexShrink: 0,
            border: accompagne ? '2px solid #16A34A' : '2px solid #D1D5DB',
            background: accompagne ? '#16A34A' : 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 150ms ease-out',
          }}>
            {accompagne && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <span style={{ fontSize: 'var(--font-size-sm)', color: accompagne ? '#15803D' : 'var(--color-text-secondary)', fontWeight: accompagne ? 500 : 400 }}>
            Je suis déjà accompagné par une association ou un avocat
          </span>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setStep(1)}
            style={{
              padding: '14px 20px', borderRadius: 'var(--radius-pill)',
              background: 'var(--color-off-white)', color: 'var(--color-text-muted)',
              border: 'var(--border-default)', fontSize: 'var(--font-size-sm)',
              fontWeight: 500, cursor: 'pointer', fontFamily: 'var(--font-sans)',
              minHeight: '52px',
            }}
          >
            Retour
          </button>
          <button
            onClick={handleStep2Next}
            disabled={!langue || saving}
            style={{
              flex: 1, padding: '14px 24px',
              borderRadius: 'var(--radius-pill)',
              background: langue ? 'var(--gradient-primary)' : '#E5E7EB',
              color: langue ? '#fff' : '#9CA3AF',
              border: 'none', fontSize: 'var(--font-size-base)', fontWeight: 600,
              cursor: langue ? 'pointer' : 'not-allowed',
              fontFamily: 'var(--font-sans)', minHeight: '52px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              transition: 'all 150ms ease-out',
            }}
          >
            {saving ? 'Enregistrement…' : <><span>Continuer</span><ArrowRight size={16} /></>}
          </button>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // STEP 3 — Upsell Premium personnalisé
  // ═══════════════════════════════════════════════════════════════════════════
  return (
    <div style={{ width: '100%', maxWidth: '520px' }}>
      <ProgressDots />

      {/* Récap démarche */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <p style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-blue-france)', marginBottom: '10px' }}>
          Étape 3 sur 3
        </p>
        <div style={{ fontSize: '36px', marginBottom: '12px' }}>{upsell.emoji}</div>
        <h1 style={{ fontSize: 'clamp(20px, 4vw, 26px)', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.2, marginBottom: '8px' }}>
          {upsell.title}
        </h1>
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
          {upsell.message}
        </p>
      </div>

      {/* Note urgence */}
      <div style={{
        display: 'flex', alignItems: 'flex-start', gap: '10px',
        padding: '12px 16px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--color-red-light)',
        border: '1px solid rgba(204,26,26,0.18)',
        marginBottom: upsell.langueNote ? '12px' : '24px',
      }}>
        <span style={{ fontSize: '14px', flexShrink: 0, marginTop: '1px' }}>⚠️</span>
        <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-red-france)', lineHeight: 1.6 }}>
          {upsell.urgence}
        </p>
      </div>

      {/* Note langue si besoin */}
      {upsell.langueNote && (
        <div style={{
          display: 'flex', alignItems: 'flex-start', gap: '10px',
          padding: '12px 16px',
          borderRadius: 'var(--radius-md)',
          background: 'var(--color-blue-light)',
          border: '1px solid rgba(0,35,149,0.15)',
          marginBottom: '24px',
        }}>
          <span style={{ fontSize: '14px', flexShrink: 0, marginTop: '1px' }}>🗣️</span>
          <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-blue-france)', lineHeight: 1.6 }}>
            {upsell.langueNote}
          </p>
        </div>
      )}

      {/* Carte Premium */}
      <div style={{
        borderRadius: 'var(--radius-xl)',
        background: 'linear-gradient(135deg, #002395 0%, #1a1a5e 60%, #7a0e1e 100%)',
        padding: '24px',
        marginBottom: '14px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Halo décoratif */}
        <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <Sparkles size={16} color="#FCD34D" />
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: '#FCD34D', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Accès Premium
          </span>
        </div>

        <p style={{ fontSize: 'var(--font-size-md)', fontWeight: 700, color: '#fff', marginBottom: '16px', lineHeight: 1.3 }}>
          Tout le programme en illimité
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '22px' }}>
          {[
            '5 modules · 177 questions officielles',
            'Examens blancs CSP, Carte résident, Naturalisation',
            'Quiz de fin de leçon + points clés',
            'Suivi de progression personnalisé',
          ].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={14} color="#4ADE80" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.85)' }}>{item}</span>
            </div>
          ))}
        </div>

        <button
          onClick={handleUpgrade}
          disabled={checkoutLoading}
          style={{
            width: '100%', padding: '14px 24px',
            borderRadius: 'var(--radius-pill)',
            background: checkoutLoading ? 'rgba(255,255,255,0.3)' : '#fff',
            color: '#002395',
            border: 'none', fontSize: 'var(--font-size-base)', fontWeight: 700,
            cursor: checkoutLoading ? 'wait' : 'pointer',
            fontFamily: 'var(--font-sans)', minHeight: '52px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            transition: 'all 150ms ease-out',
          }}
        >
          {checkoutLoading ? 'Redirection…' : <><span>Passer Premium — 12€/mois</span><ChevronRight size={16} /></>}
        </button>
      </div>

      {/* Skip */}
      <button
        onClick={handleSkip}
        style={{
          width: '100%', padding: '13px',
          borderRadius: 'var(--radius-pill)',
          background: 'transparent', color: 'var(--color-text-muted)',
          border: 'var(--border-default)', fontSize: 'var(--font-size-sm)',
          fontWeight: 400, cursor: 'pointer', fontFamily: 'var(--font-sans)',
          minHeight: '44px',
        }}
      >
        Plus tard — commencer avec l'accès gratuit
      </button>

      <p style={{ textAlign: 'center', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: '14px' }}>
        Sans engagement · Annulation à tout moment
      </p>
    </div>
  );
}
