'use client';

import { useState } from 'react';
import { Mail, Check, AlertTriangle } from 'lucide-react';

/**
 * Envoie (ou renvoie) l'invitation administrateur d'un cabinet existant.
 * Indispensable pour un cabinet créé en base sans passer par le formulaire :
 * sans invitation, son contact n'a aucun moyen d'entrer dans son espace.
 */
export function InviteCabinetAdminButton({
  cabinetId,
  contactEmail,
  dejaAdmin,
}: {
  cabinetId: string;
  contactEmail: string;
  dejaAdmin: boolean;
}) {
  const [etat, setEtat] = useState<'repos' | 'envoi' | 'ok' | 'erreur'>('repos');
  const [message, setMessage] = useState('');

  if (dejaAdmin) return null;

  async function envoyer() {
    if (etat === 'envoi') return;
    if (!confirm(`Envoyer l'invitation administrateur à ${contactEmail} ?`)) return;

    setEtat('envoi');
    try {
      const r = await fetch('/api/cabinet/admin/invite-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cabinet_id: cabinetId }),
      });
      const j = await r.json();
      if (!r.ok || j.error) {
        setEtat('erreur');
        setMessage(j.error ?? 'Envoi impossible.');
        return;
      }
      setEtat('ok');
      setMessage(
        j.sent
          ? `Invitation envoyée à ${contactEmail}.`
          : `Invitation créée, mais l'e-mail n'est pas parti. Lien à transmettre : ${j.invite_link}`,
      );
    } catch {
      setEtat('erreur');
      setMessage('Envoi impossible — réseau.');
    }
  }

  return (
    <div style={{
      background: 'var(--color-surface)', border: 'var(--border-default)',
      borderRadius: 'var(--radius-xl)', padding: '18px 22px', marginBottom: 24,
    }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-secondary)', margin: '0 0 6px' }}>
        Aucun administrateur inscrit
      </p>
      <p style={{ fontSize: 12.5, lineHeight: 1.65, color: 'var(--color-text-muted)', margin: '0 0 14px' }}>
        Ce cabinet ne peut inviter personne tant que son contact n&apos;a pas créé son
        compte. Envoyez-lui son lien d&apos;accès.
      </p>

      {etat === 'ok' ? (
        <p style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#0F7A57', margin: 0, wordBreak: 'break-all' }}>
          <Check size={15} style={{ flexShrink: 0, marginTop: 2 }} /> {message}
        </p>
      ) : (
        <>
          <button
            onClick={envoyer}
            disabled={etat === 'envoi'}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '9px 16px', borderRadius: 'var(--radius-md)',
              background: 'var(--color-blue-france)', color: '#fff',
              fontSize: 13, fontWeight: 700, border: 'none',
              cursor: etat === 'envoi' ? 'wait' : 'pointer',
              opacity: etat === 'envoi' ? 0.6 : 1,
            }}
          >
            <Mail size={15} />
            {etat === 'envoi' ? 'Envoi…' : `Envoyer l'invitation à ${contactEmail}`}
          </button>
          {etat === 'erreur' && (
            <p style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 12.5, color: '#B91C1C', margin: '10px 0 0' }}>
              <AlertTriangle size={14} style={{ flexShrink: 0, marginTop: 1 }} /> {message}
            </p>
          )}
        </>
      )}
    </div>
  );
}
