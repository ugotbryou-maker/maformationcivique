'use client';

import Link from 'next/link';
import { modules } from '@/data/modules';
import { Clock, BookOpen, ChevronRight, Lock } from 'lucide-react';

export function ModuleList() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {modules.map((mod) => {
        const totalDur = mod.lessons.reduce((a, l) => a + l.duration, 0);
        return (
          <Link
            key={mod.slug}
            href={`/module/${mod.slug}`}
            style={{ display: 'block', textDecoration: 'none' }}
            className="module-list-item"
          >
            <div className="module-list-card">
              {/* Num */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-md)',
                  background: mod.freeAccess ? 'var(--gradient-primary)' : 'var(--color-blue-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontSize: 'var(--font-size-md)',
                    fontWeight: 500,
                    color: mod.freeAccess ? '#FFFFFF' : 'var(--color-blue-france)',
                  }}
                >
                  {mod.num}
                </span>
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <h2 style={{ fontSize: 'var(--font-size-base)', fontWeight: 500, color: 'var(--color-text-primary)' }}>
                    {mod.title}
                  </h2>
                  {!mod.freeAccess && <Lock size={14} color="var(--color-text-muted)" />}
                  {mod.freeAccess && (
                    <span
                      style={{
                        fontSize: 'var(--font-size-xs)',
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-pill)',
                        background: '#E1F5EE',
                        color: '#1D9E75',
                        fontWeight: 500,
                      }}
                    >
                      Gratuit
                    </span>
                  )}
                </div>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: '12px' }}>
                  {mod.subtitle}
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    <BookOpen size={12} />{mod.lessons.length} leçons
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    <Clock size={12} />{totalDur} min
                  </span>
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    {mod.questionCount} questions
                  </span>
                </div>
              </div>

              <ChevronRight size={18} color="var(--color-text-muted)" style={{ flexShrink: 0 }} />
            </div>
          </Link>
        );
      })}

      <style>{`
        .module-list-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px;
          border-radius: var(--radius-xl);
          background: var(--color-surface);
          border: var(--border-default);
          box-shadow: var(--shadow-card);
          transition: all 200ms ease-out;
        }
        .module-list-item:hover .module-list-card {
          border-color: var(--color-border-hover);
          box-shadow: var(--shadow-lg);
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}
