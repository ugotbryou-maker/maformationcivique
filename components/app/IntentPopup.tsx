'use client';

import { useEffect, useState } from 'react';
import { X, GraduationCap, FileText, Building2, CheckCircle } from 'lucide-react';

const COOKIE = 'mfc_intent';
const SCROLL_THRESHOLD = 0.45;

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

const INTENTS = [
  { key: 'langue',         label: 'Me former en français',          sub: 'Cours A2, B1, B2 — OFII, DELF, naturalisation', Icon: GraduationCap, color: '#059669' },
  { key: 'titre',          label: 'Obtenir un titre de séjour',     sub: 'Carte de séjour pluriannuelle ou de résident',   Icon: FileText,      color: '#002395' },
  { key: 'naturalisation', label: 'Demande de naturalisation',      sub: 'Dossier préfecture, entretien, formation B2',    Icon: Building2,     color: '#CC1A1A' },
];

interface Props {
  isLoggedIn: boolean;
}

export function IntentPopup({ isLoggedIn }: Props) {
  const [visible, setVisible]     = useState(false);
  const [step, setStep]           = useState<'intent' | 'contact' | 'done'>('intent');
  const [intent, setIntent]       = useState<string | null>(null);
  const [contact, setContact]     = useState('');
  const [contactType, setContactType] = useState<'email' | 'phone'>('email');
  const [sending, setSending]     = useState(false);

  // Déclenche après 45% de scroll
  useEffect(() => {
    if (getCookie(COOKIE)) return;

    function onScroll() {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (pct >= SCROLL_THRESHOLD) {
        setVisible(true);
        window.removeEventListener('scroll', onScroll);
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function dismiss() {
    setCookie(COOKIE, 'dismissed', 30);
    setVisible(false);
  }

  async function selectIntent(key: string) {
    setIntent(key);
    if (isLoggedIn) {
      // Utilisateur connecté : on envoie directement, pas besoin de contact
      await submit(key, undefined, undefined);
      setStep('done');
    } else {
      setStep('contact');
    }
  }

  async function submit(intentKey: string, c?: string, ct?: string) {
    setSending(true);
    try {
      await fetch('/api/lead/intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ intent: intentKey, contact: c, contactType: ct }),
      });
    } catch { /* non bloquant */ }
    setCookie(COOKIE, intentKey, 30);
    setSending(false);
  }

  async function submitContact(e: React.FormEvent) {
    e.preventDefault();
    await submit(intent!, contact || undefined, contact ? contactType : undefined);
    setStep('done');
  }

  if (!visible) return null;

  const selectedIntent = INTENTS.find(i => i.key === intent);

  return (
    <>
      <div
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 9000,
          width: 320, borderRadius: 20,
          background: '#fff',
          boxShadow: '0 8px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          animation: 'intent-slide-up 300ms cubic-bezier(0.34,1.56,0.64,1) both',
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Quelle est votre démarche ?"
      >
        {/* En-tête */}
        <div style={{ background: 'linear-gradient(135deg, #001A70 0%, #002395 100%)', padding: '14px 16px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <p style={{ margin: 0, fontSize: 14, fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>
              {step === 'done' ? 'Merci pour votre réponse !' : 'Comment pouvons-nous vous aider ?'}
            </p>
            {step === 'intent' && (
              <p style={{ margin: '3px 0 0', fontSize: 11, color: 'rgba(255,255,255,0.68)', lineHeight: 1.4 }}>
                Choisissez votre démarche principale
              </p>
            )}
          </div>
          <button onClick={dismiss} style={{ background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%', width: 26, height: 26, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: 8 }} aria-label="Fermer">
            <X size={13} color="#fff" />
          </button>
        </div>

        {/* Corps */}
        <div style={{ padding: '12px 14px 16px' }}>

          {/* Étape 1 — Choix de l'intention */}
          {step === 'intent' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {INTENTS.map(({ key, label, sub, Icon, color }) => (
                <button
                  key={key}
                  onClick={() => selectIntent(key)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '11px 13px', borderRadius: 12,
                    border: `1.5px solid #E2E8F0`,
                    background: '#F8FAFC', cursor: 'pointer',
                    textAlign: 'left', width: '100%',
                    transition: 'border-color 150ms, background 150ms',
                    fontFamily: 'var(--font-sans)',
                  }}
                  className="intent-btn"
                >
                  <span style={{ width: 34, height: 34, borderRadius: 10, background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={16} color={color} />
                  </span>
                  <span>
                    <span style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#1A1A2E', lineHeight: 1.3 }}>{label}</span>
                    <span style={{ display: 'block', fontSize: 11, color: '#94A3B8', lineHeight: 1.4, marginTop: 1 }}>{sub}</span>
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Étape 2 — Contact (non connecté uniquement) */}
          {step === 'contact' && selectedIntent && (
            <form onSubmit={submitContact} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {/* Rappel du choix */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderRadius: 10, background: `${selectedIntent.color}10`, border: `1px solid ${selectedIntent.color}25` }}>
                <selectedIntent.Icon size={14} color={selectedIntent.color} />
                <span style={{ fontSize: 12, fontWeight: 600, color: selectedIntent.color }}>{selectedIntent.label}</span>
              </div>

              <p style={{ margin: 0, fontSize: 12, color: '#64748B', lineHeight: 1.5 }}>
                Laissez un moyen de vous contacter pour recevoir nos conseils personnalisés.
              </p>

              {/* Toggle email / téléphone */}
              <div style={{ display: 'flex', background: '#F1F5F9', borderRadius: 100, padding: 3, gap: 2 }}>
                {(['email', 'phone'] as const).map((t) => (
                  <button
                    key={t} type="button"
                    onClick={() => setContactType(t)}
                    style={{
                      flex: 1, padding: '6px 0', borderRadius: 100, border: 'none',
                      background: contactType === t ? '#fff' : 'transparent',
                      fontSize: 12, fontWeight: contactType === t ? 700 : 400,
                      color: contactType === t ? '#1A1A2E' : '#94A3B8',
                      cursor: 'pointer', transition: 'all 150ms',
                      boxShadow: contactType === t ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {t === 'email' ? 'Email' : 'Téléphone'}
                  </button>
                ))}
              </div>

              <input
                type={contactType === 'email' ? 'email' : 'tel'}
                placeholder={contactType === 'email' ? 'votre@email.fr' : '+33 6 12 34 56 78'}
                value={contact}
                onChange={e => setContact(e.target.value)}
                style={{
                  width: '100%', padding: '9px 12px', borderRadius: 10,
                  border: '1.5px solid #E2E8F0', fontSize: 13,
                  fontFamily: 'var(--font-sans)', color: '#1A1A2E',
                  background: '#F8FAFC', outline: 'none', boxSizing: 'border-box',
                }}
              />

              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  type="button"
                  onClick={() => { setCookie(COOKIE, intent!, 30); setStep('done'); }}
                  style={{ flex: 1, padding: '9px 0', borderRadius: 10, border: '1.5px solid #E2E8F0', background: '#fff', fontSize: 12, color: '#94A3B8', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}
                >
                  Passer
                </button>
                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    flex: 2, padding: '9px 0', borderRadius: 10, border: 'none',
                    background: 'linear-gradient(135deg, #001A70 0%, #002395 100%)',
                    color: '#fff', fontSize: 12, fontWeight: 700,
                    cursor: sending ? 'not-allowed' : 'pointer',
                    opacity: sending ? 0.7 : 1, fontFamily: 'var(--font-sans)',
                  }}
                >
                  {sending ? 'Envoi…' : 'Envoyer'}
                </button>
              </div>
            </form>
          )}

          {/* Étape 3 — Confirmation */}
          {step === 'done' && (
            <div style={{ textAlign: 'center', padding: '8px 0 4px' }}>
              <CheckCircle size={32} color="#059669" style={{ margin: '0 auto 10px' }} />
              <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: '#1A1A2E' }}>
                {isLoggedIn ? 'Noté, merci !' : 'Réponse enregistrée !'}
              </p>
              <p style={{ margin: '4px 0 0', fontSize: 12, color: '#64748B', lineHeight: 1.5 }}>
                {isLoggedIn
                  ? 'Nous personnaliserons votre expérience en conséquence.'
                  : 'Nous vous contacterons avec des conseils adaptés.'}
              </p>
              <button
                onClick={() => setVisible(false)}
                style={{ marginTop: 12, padding: '8px 20px', borderRadius: 100, border: 'none', background: '#F1F5F9', fontSize: 12, color: '#64748B', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}
              >
                Fermer
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes intent-slide-up {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .intent-btn:hover { border-color: #002395 !important; background: #F0F4FF !important; }
      `}</style>
    </>
  );
}
