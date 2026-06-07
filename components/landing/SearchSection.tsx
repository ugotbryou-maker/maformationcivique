'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

const quickLinks = ['Laïcité', 'Marseillaise', 'Droits fondamentaux', 'Naturalisation', 'Élections', 'République'];

export function SearchSection() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) router.push(`/quiz?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <section style={{ background: 'var(--color-off-white)', padding: '64px 0' }}>
      <div className="container" style={{ padding: '0 24px', textAlign: 'center' }}>
        <h2 style={{
          fontSize: 'var(--font-size-xl)', fontWeight: 700,
          color: 'var(--color-text-primary)', marginBottom: '8px',
        }}>
          Trouvez votre module
        </h2>
        <p style={{
          fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', marginBottom: '32px',
        }}>
          Recherchez parmi les 177 questions et 5 modules thématiques
        </p>

        {/* Barre de recherche */}
        <div style={{
          display: 'flex', maxWidth: '520px', margin: '0 auto 20px',
          background: '#fff', borderRadius: 'var(--radius-md)',
          border: 'var(--border-default)', overflow: 'hidden',
          boxShadow: 'var(--shadow-card)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 14px', color: 'var(--color-text-muted)' }}>
            <Search size={17} />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Recherchez parmi 177 questions..."
            style={{
              flex: 1, border: 'none', outline: 'none',
              fontSize: 'var(--font-size-base)', color: 'var(--color-text-primary)',
              padding: '14px 0', background: 'transparent', fontFamily: 'var(--font-sans)',
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              background: 'var(--color-blue-france)', color: '#fff',
              border: 'none', padding: '0 24px',
              fontWeight: 600, fontSize: 'var(--font-size-base)',
              cursor: 'pointer', fontFamily: 'var(--font-sans)',
              transition: 'opacity 150ms',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.88'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '1'; }}
          >
            Rechercher
          </button>
        </div>

        {/* Suggestions rapides */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Populaire :</span>
          {quickLinks.map((link) => (
            <button
              key={link}
              onClick={() => router.push(`/quiz?q=${encodeURIComponent(link)}`)}
              style={{
                background: '#fff', border: 'var(--border-default)',
                borderRadius: 'var(--radius-pill)', padding: '4px 13px',
                fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)',
                cursor: 'pointer', fontFamily: 'var(--font-sans)', transition: 'all 150ms',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = 'var(--color-blue-france)';
                el.style.color = 'var(--color-blue-france)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = 'var(--color-border)';
                el.style.color = 'var(--color-text-secondary)';
              }}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
