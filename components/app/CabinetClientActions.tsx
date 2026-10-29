'use client';

/**
 * Attestation et révocation, dans la ligne client du tableau de l'espace
 * cabinet. Isolé du tableau pour que celui-ci reste rendu côté serveur :
 * la liste des clients et leur progression n'ont rien à faire dans le
 * navigateur.
 */

import { useState } from 'react';
import { Download, UserX } from 'lucide-react';

interface Props {
  userId: string;
  nom: string;
  /** L'attestation n'a de sens qu'un parcours terminé. */
  pct: number;
}

export function CabinetClientActions({ userId, nom, pct }: Props) {
  const [enCours, setEnCours] = useState(false);
  const [revoque, setRevoque] = useState(false);
  const complet = pct === 100;

  const revoquer = async () => {
    if (!confirm(`Révoquer l'accès de ${nom} ? Son plan repassera en gratuit et sa place sera libérée.`)) return;
    setEnCours(true);
    await fetch('/api/cabinet/member/revoke', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId }),
    });
    setRevoque(true);
    setEnCours(false);
  };

  if (revoque) return <span className="adm-dim">accès révoqué</span>;

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
      <a
        href={complet ? `/api/cabinet/attestation/${userId}` : undefined}
        onClick={(e) => { if (!complet) e.preventDefault(); }}
        title={complet ? "Télécharger l'attestation PDF" : `Disponible au parcours terminé (${pct} %)`}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 4,
          fontSize: 11, fontWeight: 600, padding: '4px 9px',
          borderRadius: 999, textDecoration: 'none',
          color: complet ? '#0F6E56' : 'var(--adm-ink-soft)',
          background: complet ? '#ECFDF5' : '#F1F4FA',
          border: `1px solid ${complet ? '#A7F3D0' : 'var(--adm-line)'}`,
          opacity: complet ? 1 : 0.5,
          cursor: complet ? 'pointer' : 'not-allowed',
        }}
      >
        <Download size={10} /> Attestation
      </a>
      <button
        onClick={revoquer}
        disabled={enCours}
        title="Révoquer l'accès — libère la place"
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 26, height: 26, borderRadius: 999, padding: 0,
          border: '1px solid #FECACA', background: '#FEF2F2', color: '#B91C1C',
          cursor: enCours ? 'wait' : 'pointer', opacity: enCours ? 0.5 : 1,
        }}
      >
        <UserX size={12} />
      </button>
    </span>
  );
}
