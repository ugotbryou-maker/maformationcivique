'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export function ArticleContactForm() {
  const [form, setForm] = useState({ prenom: '', email: '', demarche: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact/article', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        background: '#fff', borderRadius: '16px', padding: '1.5rem',
        border: '1px solid #E2E8F0', textAlign: 'center',
      }}>
        <CheckCircle size={32} color="#059669" style={{ margin: '0 auto 12px' }} />
        <p style={{ fontSize: '15px', fontWeight: 700, color: '#1A1A2E', margin: '0 0 6px' }}>
          Message envoyé !
        </p>
        <p style={{ fontSize: '13px', color: '#64748B', margin: 0, lineHeight: 1.6 }}>
          Nous vous répondrons dans les 24 h.
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '9px 12px',
    borderRadius: '10px',
    border: '1.5px solid #E2E8F0',
    fontSize: '13px',
    fontFamily: 'var(--font-sans)',
    color: '#1A1A2E',
    background: '#F8FAFC',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 150ms',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '.06em',
    textTransform: 'uppercase',
    color: '#94A3B8',
    marginBottom: '5px',
  };

  return (
    <div style={{
      background: '#fff', borderRadius: '16px',
      border: '1px solid #E2E8F0',
      boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      overflow: 'hidden',
    }}>
      {/* En-tête coloré */}
      <div style={{
        background: 'linear-gradient(135deg, #001A70 0%, #002395 100%)',
        padding: '1.1rem 1.25rem',
      }}>
        <p style={{ fontSize: '14px', fontWeight: 800, color: '#fff', margin: '0 0 3px' }}>
          Besoin d'aide ?
        </p>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.72)', margin: 0, lineHeight: 1.5 }}>
          Titre de séjour ou naturalisation — posez votre question.
        </p>
      </div>

      {/* Formulaire */}
      <form onSubmit={handleSubmit} style={{ padding: '1.1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <label style={labelStyle}>Prénom</label>
          <input
            style={inputStyle}
            type="text"
            placeholder="Marie"
            value={form.prenom}
            onChange={(e) => setForm({ ...form, prenom: e.target.value })}
            required
          />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input
            style={inputStyle}
            type="email"
            placeholder="marie@exemple.fr"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label style={labelStyle}>Votre démarche</label>
          <select
            style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
            value={form.demarche}
            onChange={(e) => setForm({ ...form, demarche: e.target.value })}
            required
          >
            <option value="">Sélectionner…</option>
            <option value="titre">Titre de séjour</option>
            <option value="resident">Carte de résident</option>
            <option value="naturalisation">Naturalisation</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Votre question</label>
          <textarea
            style={{ ...inputStyle, resize: 'vertical', minHeight: '80px', lineHeight: 1.5 }}
            placeholder="Décrivez votre situation en quelques mots…"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
        </div>

        {status === 'error' && (
          <p style={{ fontSize: '12px', color: '#CC1A1A', margin: 0 }}>
            Une erreur est survenue. Réessayez ou écrivez-nous directement.
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
            padding: '10px 16px', borderRadius: '10px',
            background: status === 'loading' ? '#94A3B8' : 'linear-gradient(135deg, #001A70 0%, #002395 100%)',
            color: '#fff', border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            fontSize: '13px', fontWeight: 700, fontFamily: 'var(--font-sans)',
            width: '100%', transition: 'opacity 150ms',
          }}
        >
          <Send size={13} />
          {status === 'loading' ? 'Envoi…' : 'Envoyer ma question'}
        </button>

        <p style={{ fontSize: '11px', color: '#94A3B8', margin: 0, textAlign: 'center', lineHeight: 1.5 }}>
          Réponse sous 24 h · Données protégées
        </p>
      </form>
    </div>
  );
}
