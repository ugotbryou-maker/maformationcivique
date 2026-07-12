'use client';

import { Building2 } from 'lucide-react';
import { ApercuWidget } from '@/components/apercu/ApercuWidget';

export default function ApercuEntryPage() {
  return (
    <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 20px' }}>
      <div style={{ maxWidth: 560, width: '100%', textAlign: 'center' }}>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#EEF4FF', borderRadius: 100, padding: '6px 16px', marginBottom: 28 }}>
          <Building2 size={14} color="#002395" />
          <span style={{ fontSize: 12, fontWeight: 700, color: '#002395', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Cabinets partenaires
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 5vw, 42px)', fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.15, marginBottom: 16, letterSpacing: '-0.02em' }}>
          Votre espace cabinet,<br />
          <span style={{ color: '#002395' }}>en 10 secondes.</span>
        </h1>

        <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: 440, margin: '0 auto 40px' }}>
          Saisissez l&apos;URL de votre cabinet — nous générons instantanément une simulation personnalisée à vos couleurs et avec votre logo.
        </p>

        <ApercuWidget />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, marginTop: 44 }}>
          {[
            { num: '< 10 s', label: 'pour voir votre espace' },
            { num: '100 %', label: 'personnalisé' },
            { num: '0 €', label: 'pour essayer' },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 18, fontWeight: 800, color: '#002395', margin: '0 0 2px' }}>{num}</p>
              <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: 0 }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
