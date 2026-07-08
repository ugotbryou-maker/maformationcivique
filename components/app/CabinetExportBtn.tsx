'use client';

import { useState } from 'react';
import { Download } from 'lucide-react';

export function CabinetExportBtn() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleExport = () => {
    const params = new URLSearchParams();
    if (from) params.set('from', from);
    if (to)   params.set('to', to);
    window.location.href = `/api/cabinet/export?${params.toString()}`;
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
      <input
        type="date"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        placeholder="Depuis"
        style={{
          padding: '7px 10px', borderRadius: 'var(--radius-md)',
          border: 'var(--border-default)', fontSize: 13,
          color: 'var(--color-text-primary)', background: 'var(--color-off-white)',
          fontFamily: 'var(--font-sans)',
        }}
      />
      <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>→</span>
      <input
        type="date"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        placeholder="Jusqu'au"
        style={{
          padding: '7px 10px', borderRadius: 'var(--radius-md)',
          border: 'var(--border-default)', fontSize: 13,
          color: 'var(--color-text-primary)', background: 'var(--color-off-white)',
          fontFamily: 'var(--font-sans)',
        }}
      />
      <button
        onClick={handleExport}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '8px 16px', borderRadius: 'var(--radius-md)',
          background: 'var(--color-blue-france)', color: '#fff',
          border: 'none', fontSize: 13, fontWeight: 600,
          cursor: 'pointer', fontFamily: 'var(--font-sans)',
        }}
      >
        <Download size={13} /> Exporter CSV
      </button>
    </div>
  );
}
