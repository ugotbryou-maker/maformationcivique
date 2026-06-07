'use client';

import Link from 'next/link';
import { Clock, Lock, CheckCircle, ChevronRight } from 'lucide-react';
import type { Lesson } from '@/data/modules';

interface LessonCardProps {
  lesson: Lesson;
  index: number;
  isPremiumUser?: boolean;
  completed?: boolean;
}

export function LessonCard({ lesson, index, isPremiumUser, completed }: LessonCardProps) {
  const isLocked = !lesson.free && !isPremiumUser;

  return (
    <Link
      href={isLocked ? '/inscription?plan=premium' : `/lecon/${lesson.slug}?module=${lesson.moduleSlug}`}
      style={{ display: 'block', textDecoration: 'none' }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '16px 20px',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--color-surface)',
          border: 'var(--border-default)',
          boxShadow: 'var(--shadow-card)',
          transition: 'all 200ms ease-out',
          opacity: isLocked ? 0.7 : 1,
        }}
        onMouseEnter={(e) => {
          if (!isLocked) {
            (e.currentTarget as HTMLDivElement).style.transform = 'translateX(4px)';
            (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-border-hover)';
          }
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = 'translateX(0)';
          (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-border)';
        }}
      >
        {/* Number / status */}
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: 'var(--radius-md)',
            background: completed
              ? '#E1F5EE'
              : isLocked
              ? 'var(--color-border)'
              : 'var(--color-blue-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {completed ? (
            <CheckCircle size={18} color="#1D9E75" />
          ) : isLocked ? (
            <Lock size={16} color="var(--color-text-muted)" />
          ) : (
            <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-blue-france)' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              fontSize: 'var(--font-size-base)',
              fontWeight: 500,
              color: isLocked ? 'var(--color-text-muted)' : 'var(--color-text-primary)',
              marginBottom: '2px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {lesson.title}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-text-muted)',
              }}
            >
              <Clock size={12} />
              {lesson.duration} min
            </span>
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
              {lesson.quizIds.length} questions
            </span>
            {lesson.free && (
              <span
                style={{
                  fontSize: 'var(--font-size-xs)',
                  color: '#1D9E75',
                  fontWeight: 500,
                  padding: '1px 6px',
                  borderRadius: 'var(--radius-pill)',
                  background: '#E1F5EE',
                }}
              >
                Gratuit
              </span>
            )}
          </div>
        </div>

        <ChevronRight size={16} color="var(--color-text-muted)" style={{ flexShrink: 0 }} />
      </div>
    </Link>
  );
}
