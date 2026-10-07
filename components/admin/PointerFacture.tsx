'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Receipt, Check, AlertTriangle } from 'lucide-react';

/**
 * Marque les activations en attente comme facturées.
 * Sans ce geste, le montant dû s'accumule sans jamais se solder.
 */
export function PointerFacture({
  cabinetId, nb, montant,
}: { cabinetId: string; nb: number; montant: string }) {
  const router = useRouter();
  const [etat, setEtat] = useState<'repos' | 'envoi'>('repos');
  const [erreur, setErreur] = useState('');

  if (nb === 0) return null;

  async function pointer() {
    const ref = prompt(
      `Pointer ${nb} activation${nb > 1 ? 's' : ''} (${montant}) comme facturées ?\n\n` +
      `Numéro de facture (facultatif, pour le retrouver plus tard) :`,
    );
    if (ref === null) return;

    setEtat('envoi');
    setErreur('');
    try {
      const r = await fetch('/api/cabinet/admin/facturer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cabinet_id: cabinetId, reference: ref }),
      });
      const j = await r.json();
      if (!r.ok || j.error) setErreur(j.error ?? 'Pointage impossible.');
      else router.refresh();
    } catch {
      setErreur('Pointage impossible — réseau.');
    } finally {
      setEtat('repos');
    }
  }

  return (
    <div>
      <button className="adm-btn adm-btn-sm" onClick={pointer} disabled={etat === 'envoi'}>
        <Receipt size={14} />
        {etat === 'envoi' ? 'Pointage…' : `Pointer ${montant} comme facturé`}
      </button>
      {erreur && (
        <p style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#C0332B', marginTop: 8 }}>
          <AlertTriangle size={13} /> {erreur}
        </p>
      )}
    </div>
  );
}
