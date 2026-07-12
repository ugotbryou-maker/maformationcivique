'use client';

import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

interface Props {
  slug: string;
  domain: string;
  cabinetName: string;
  accent: string;
}

export function LeadForm({ slug, domain, cabinetName, accent }: Props) {
  const [name,      setName]      = useState('');
  const [email,     setEmail]     = useState('');
  const [phone,     setPhone]     = useState('');
  const [consented, setConsented] = useState(false);
  const [state,     setState]     = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errMsg,    setErrMsg]    = useState('');

  async function submit() {
    setErrMsg('');
    if (!name.trim()) { setErrMsg('Indiquez votre nom.'); return; }
    if (!email.trim() && !phone.trim()) { setErrMsg('Renseignez un email ou un téléphone.'); return; }
    if (!consented) { setErrMsg('Cochez la case de consentement pour continuer.'); return; }

    setState('loading');
    try {
      const res = await fetch('/api/apercu/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug,
          domain,
          cabinet_name:  cabinetName,
          lead_name:     name.trim(),
          lead_email:    email.trim() || null,
          lead_phone:    phone.trim() || null,
          consented_at:  new Date().toISOString(),
        }),
      });
      if (!res.ok) {
        const d = await res.json() as { error?: string };
        setErrMsg(d.error ?? 'Erreur lors de l\'envoi.');
        setState('error');
        return;
      }
      setState('success');
    } catch {
      setErrMsg('Connexion impossible. Réessayez dans un instant.');
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div style={{ marginTop: 24, background: '#fff', borderRadius: 20, padding: '48px 32px', textAlign: 'center', boxShadow: '0 4px 24px rgba(0,35,149,0.07)' }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <CheckCircle2 size={28} color="#059669" />
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 10 }}>
          Message reçu !
        </h2>
        <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: 380, margin: '0 auto' }}>
          Je vous recontacte sous 24h pour activer l&apos;espace de <strong>{cabinetName}</strong> et vous présenter le produit.
        </p>
      </div>
    );
  }

  const inp: React.CSSProperties = {
    width: '100%', boxSizing: 'border-box',
    padding: '12px 16px', fontSize: 15, borderRadius: 10,
    border: '1.5px solid var(--color-border)',
    outline: 'none', color: 'var(--color-text-primary)', background: '#fff',
  };

  return (
    <div style={{ marginTop: 24, background: '#fff', borderRadius: 20, padding: '32px 28px', boxShadow: '0 4px 24px rgba(0,35,149,0.07)' }}>

      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 6 }}>
          Activez l&apos;espace de votre cabinet
        </h2>
        <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
          Laissez vos coordonnées — je vous contacte sous 24h pour finaliser votre accès partenaire.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input type="text"  placeholder="Votre nom" value={name}  onChange={e => setName(e.target.value)}  style={inp} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <input type="email" placeholder="Email"      value={email} onChange={e => setEmail(e.target.value)} style={inp} />
          <input type="tel"   placeholder="Téléphone"  value={phone} onChange={e => setPhone(e.target.value)} style={inp} />
        </div>

        {/* Consent */}
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', userSelect: 'none' }}>
          <div
            onClick={() => setConsented(v => !v)}
            role="checkbox"
            aria-checked={consented}
            style={{
              width: 18, height: 18, borderRadius: 5, flexShrink: 0, marginTop: 2,
              border: `2px solid ${consented ? accent : '#CBD5E1'}`,
              background: consented ? accent : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
              transition: 'all 150ms',
            }}
          >
            {consented && <CheckCircle2 size={11} color="#fff" />}
          </div>
          <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
            J&apos;accepte d&apos;être recontacté(e) au sujet de maformationcivique.fr.{' '}
            <a href="/confidentialite" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>
              Politique de confidentialité
            </a>
          </span>
        </label>

        {errMsg && (
          <p style={{ fontSize: 13, color: '#B91C1C', background: '#FEF2F2', padding: '10px 14px', borderRadius: 8, margin: 0 }}>
            {errMsg}
          </p>
        )}

        <button
          onClick={submit}
          disabled={state === 'loading'}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            background: accent, color: '#fff',
            padding: '14px 20px', borderRadius: 12, border: 'none',
            cursor: state === 'loading' ? 'wait' : 'pointer',
            fontWeight: 700, fontSize: 15,
            opacity: state === 'loading' ? 0.65 : 1,
            transition: 'opacity 200ms',
          }}
        >
          <Send size={16} />
          {state === 'loading' ? 'Envoi…' : 'Activer mon espace'}
        </button>
      </div>
    </div>
  );
}
