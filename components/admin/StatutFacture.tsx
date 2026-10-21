'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check, AlertTriangle } from 'lucide-react';

const ETATS = [
  { cle: 'brouillon', label: 'Brouillon' },
  { cle: 'emise',     label: 'Émise' },
  { cle: 'payee',     label: 'Payée' },
  { cle: 'annulee',   label: 'Annulée' },
] as const;

/**
 * Change le statut d'une facture. Le numéro et les montants ne sont jamais
 * modifiables : une facture émise est un document figé.
 */
export function StatutFacture({ id, statut, numero }: { id: string; statut: string; numero: string }) {
  const router = useRouter();
  const [v, setV] = useState(statut);
  const [erreur, setErreur] = useState('');

  async function changer(nouveau: string) {
    if (nouveau === 'annulee' && !confirm(`Annuler la facture ${numero} ?\n\nElle reste conservée et numérotée — une facture ne se supprime pas.`)) return;
    const avant = v;
    setV(nouveau);
    setErreur('');
    try {
      const r = await fetch(`/api/admin/facturation/${id}/statut`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ statut: nouveau }),
      });
      const j = await r.json();
      if (!r.ok || j.error) { setV(avant); setErreur(j.error ?? 'Changement impossible.'); return; }
      router.refresh();
    } catch {
      setV(avant);
      setErreur('Changement impossible — réseau.');
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
      <div className="adm-chips">
        {ETATS.map(({ cle, label }) => (
          <button key={cle} onClick={() => changer(cle)}
                  className={`adm-chip${v === cle ? ' adm-chip-on' : ''}`}>
            {v === cle && <Check size={12} style={{ verticalAlign: -2, marginRight: 4 }} />}
            {label}
          </button>
        ))}
      </div>
      {erreur && (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#C0332B' }}>
          <AlertTriangle size={13} /> {erreur}
        </span>
      )}
    </div>
  );
}
