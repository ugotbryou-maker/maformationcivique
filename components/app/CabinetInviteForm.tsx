'use client';

import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

interface Props {
  disabled?: boolean;
}

export function CabinetInviteForm({ disabled }: Props) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/cabinet/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setMessage({ type: 'error', text: data.error ?? 'Erreur lors de l\'envoi.' });
      } else {
        setMessage({ type: 'success', text: `Invitation envoyée à ${email}.` });
        setEmail('');
      }
    } catch {
      setMessage({ type: 'error', text: 'Erreur réseau, réessayez.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: 220 }}>
          <Mail size={16} color="var(--color-text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="email"
            required
            placeholder="email@client.fr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={disabled || loading}
            style={{
              width: '100%',
              padding: '12px 14px 12px 40px',
              borderRadius: 'var(--radius-md)',
              border: 'var(--border-default)',
              fontSize: 'var(--font-size-base)',
              color: 'var(--color-text-primary)',
              background: 'var(--color-off-white)',
              fontFamily: 'var(--font-sans)',
              outline: 'none',
              minHeight: '48px',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <button
          type="submit"
          disabled={disabled || loading}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px 22px',
            borderRadius: 'var(--radius-pill)',
            background: disabled || loading ? 'var(--color-text-muted)' : 'var(--gradient-primary)',
            color: '#fff',
            border: 'none',
            fontSize: 'var(--font-size-sm)',
            fontWeight: 600,
            cursor: disabled || loading ? 'not-allowed' : 'pointer',
            minHeight: '48px',
            fontFamily: 'var(--font-sans)',
          }}
        >
          <Send size={15} />
          {loading ? 'Envoi…' : 'Inviter'}
        </button>
      </div>

      {message && (
        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            color: message.type === 'success' ? '#1D9E75' : 'var(--color-red-france)',
            margin: 0,
          }}
        >
          {message.text}
        </p>
      )}

      {disabled && (
        <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', margin: 0 }}>
          Quota d&apos;invitations atteint — contactez-nous pour augmenter votre palier.
        </p>
      )}
    </form>
  );
}
