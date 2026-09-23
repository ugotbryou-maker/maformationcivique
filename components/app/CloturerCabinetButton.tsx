'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Ban, AlertTriangle } from 'lucide-react';

/**
 * Clôt un partenariat : les membres repassent en accès gratuit.
 *
 * La date de fin inscrite sur un cabinet ne révoque rien par elle-même —
 * l'accès au contenu ne dépend que du plan de l'utilisateur. Sans ce bouton,
 * un essai resterait ouvert indéfiniment.
 */
export function CloturerCabinetButton({
  cabinetId,
  cabinetName,
  nbMembres,
}: {
  cabinetId: string;
  cabinetName: string;
  nbMembres: number;
}) {
  const router = useRouter();
  const [etat, setEtat] = useState<'repos' | 'envoi' | 'erreur'>('repos');
  const [message, setMessage] = useState('');

  async function cloturer() {
    if (etat === 'envoi') return;
    const confirmation = prompt(
      `Clôturer le partenariat « ${cabinetName} » ?\n\n` +
      `${nbMembres} compte${nbMembres > 1 ? 's' : ''} repasseront en accès gratuit et les ` +
      `invitations en attente seront annulées. L'historique de facturation est conservé.\n\n` +
      `Tapez CLOTURER pour confirmer.`,
    );
    if (confirmation !== 'CLOTURER') return;

    setEtat('envoi');
    try {
      const r = await fetch('/api/cabinet/admin/cloturer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cabinet_id: cabinetId }),
      });
      const j = await r.json();
      if (!r.ok || j.error) {
        setEtat('erreur');
        setMessage(j.error ?? 'Clôture impossible.');
        return;
      }
      router.refresh();
    } catch {
      setEtat('erreur');
      setMessage('Clôture impossible — réseau.');
    }
  }

  return (
    <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--color-border)' }}>
      <button
        onClick={cloturer}
        disabled={etat === 'envoi'}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          padding: '8px 14px', borderRadius: 'var(--radius-md)',
          background: 'transparent', color: '#B91C1C',
          border: '1px solid #FECACA', fontSize: 12.5, fontWeight: 600,
          cursor: etat === 'envoi' ? 'wait' : 'pointer',
        }}
      >
        <Ban size={14} />
        {etat === 'envoi' ? 'Clôture…' : 'Clôturer le partenariat'}
      </button>
      <p style={{ fontSize: 11.5, color: 'var(--color-text-muted)', margin: '8px 0 0', lineHeight: 1.6 }}>
        Retire l&apos;accès au contenu à tous les comptes du cabinet. Une date de fin
        seule ne révoque rien : cette action est le seul moyen de fermer réellement un essai.
      </p>
      {etat === 'erreur' && (
        <p style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12.5, color: '#B91C1C', margin: '8px 0 0' }}>
          <AlertTriangle size={14} /> {message}
        </p>
      )}
    </div>
  );
}
