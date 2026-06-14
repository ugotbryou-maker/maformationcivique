'use client';

import { useState } from 'react';

const TIER_PRESETS: Record<string, { label: string; maxInvitations: number; price: string }> = {
  starter:      { label: 'Starter (≤ 15 — 390€/an)',         maxInvitations: 15,   price: '390€/an' },
  pro:          { label: 'Pro (≤ 50 — 990€/an)',             maxInvitations: 50,   price: '990€/an' },
  cabinet_plus: { label: 'Cabinet+ (≤ 150 — 1990€/an)',      maxInvitations: 150,  price: '1990€/an' },
  reseau:       { label: 'Réseau (sur devis — à partir de 3990€/an)', maxInvitations: 500, price: 'sur devis' },
};

function defaultEndDate(): string {
  const d = new Date();
  d.setFullYear(d.getFullYear() + 1);
  return d.toISOString().slice(0, 10);
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 'var(--radius-md)',
  border: 'var(--border-default)',
  fontSize: 'var(--font-size-base)',
  color: 'var(--color-text-primary)',
  background: 'var(--color-off-white)',
  fontFamily: 'var(--font-sans)',
  outline: 'none',
  minHeight: '48px',
  boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 'var(--font-size-sm)',
  fontWeight: 500,
  color: 'var(--color-text-primary)',
  marginBottom: '8px',
};

export function CreateCabinetForm() {
  const [name, setName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [tier, setTier] = useState<keyof typeof TIER_PRESETS>('starter');
  const [maxInvitations, setMaxInvitations] = useState(TIER_PRESETS.starter.maxInvitations);
  const [subEndAt, setSubEndAt] = useState(defaultEndDate());
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleTierChange = (value: string) => {
    const key = value as keyof typeof TIER_PRESETS;
    setTier(key);
    setMaxInvitations(TIER_PRESETS[key].maxInvitations);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/cabinet/admin/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          contact_email: contactEmail,
          tier,
          max_invitations: maxInvitations,
          sub_end_at: subEndAt,
          admin_email: adminEmail,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setMessage({ type: 'error', text: data.error ?? 'Erreur lors de la création.' });
      } else {
        setMessage({ type: 'success', text: `Cabinet "${name}" créé. Invitation envoyée à ${adminEmail}.` });
        setName('');
        setContactEmail('');
        setAdminEmail('');
        setTier('starter');
        setMaxInvitations(TIER_PRESETS.starter.maxInvitations);
        setSubEndAt(defaultEndDate());
      }
    } catch {
      setMessage({ type: 'error', text: 'Erreur réseau, réessayez.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {message && (
        <div
          style={{
            padding: '12px 16px',
            borderRadius: 'var(--radius-md)',
            background: message.type === 'success' ? '#ECFDF5' : 'var(--color-red-light)',
            color: message.type === 'success' ? '#047857' : 'var(--color-red-france)',
            fontSize: 'var(--font-size-sm)',
          }}
        >
          {message.text}
        </div>
      )}

      <div>
        <label style={labelStyle}>Nom du cabinet / association</label>
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Cabinet Dupont & Associés" style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle}>Email de contact (facturation)</label>
        <input type="email" required value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} placeholder="contact@cabinet-dupont.fr" style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle}>Palier</label>
        <select value={tier} onChange={(e) => handleTierChange(e.target.value)} style={inputStyle}>
          {Object.entries(TIER_PRESETS).map(([key, preset]) => (
            <option key={key} value={key}>{preset.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label style={labelStyle}>Quota d&apos;invitations actives</label>
        <input
          type="number"
          required
          min={1}
          value={maxInvitations}
          onChange={(e) => setMaxInvitations(parseInt(e.target.value, 10) || 0)}
          style={inputStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Fin d&apos;abonnement</label>
        <input type="date" required value={subEndAt} onChange={(e) => setSubEndAt(e.target.value)} style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle}>Email de l&apos;administrateur du cabinet</label>
        <input type="email" required value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} placeholder="admin@cabinet-dupont.fr" style={inputStyle} />
        <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: '6px' }}>
          Cette personne recevra un lien pour créer son compte (accès Premium + dashboard /cabinet).
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          width: '100%',
          padding: '13px 24px',
          borderRadius: 'var(--radius-pill)',
          background: loading ? 'var(--color-text-muted)' : 'var(--gradient-primary)',
          color: '#FFFFFF',
          border: 'none',
          fontSize: 'var(--font-size-base)',
          fontWeight: 500,
          cursor: loading ? 'not-allowed' : 'pointer',
          minHeight: '48px',
          fontFamily: 'var(--font-sans)',
        }}
      >
        {loading ? 'Création…' : 'Créer le cabinet et envoyer l\'invitation'}
      </button>
    </form>
  );
}
