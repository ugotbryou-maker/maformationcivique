import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getModuleBySlug, modules } from '@/data/modules';
import { LessonCard } from '@/components/app/LessonCard';
import { ProgressBar } from '@/components/app/ProgressBar';
import { ArrowLeft, Target, Shield, Star, Award, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);
  if (!mod) return {};
  return {
    title: `${mod.title} — maformationcivique.fr`,
    description: `${mod.subtitle}. ${mod.questionCount} questions, ${mod.lessons.length} leçons.`,
  };
}

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export default async function ModulePage({ params }: Props) {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);
  if (!mod) notFound();

  return (
    <div style={{ minHeight: '80vh', padding: '40px 0 80px' }}>
      <div className="container" style={{ maxWidth: '720px' }}>
        {/* Breadcrumb */}
        <Link
          href="/modules"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-muted)',
            marginBottom: '32px',
            transition: 'color 150ms ease-out',
          }}
        >
          <ArrowLeft size={14} />
          Tous les modules
        </Link>

        {/* Module header */}
        <div
          style={{
            padding: '32px',
            borderRadius: 'var(--radius-xl)',
            background: 'var(--gradient-card)',
            marginBottom: '32px',
            color: '#FFFFFF',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
            <div>
              <span style={{ fontSize: '40px', fontWeight: 500, color: 'rgba(255,255,255,0.25)', display: 'block', lineHeight: 1, marginBottom: '12px' }}>
                {mod.num}
              </span>
              <h1 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 500, color: '#FFFFFF', marginBottom: '8px' }}>
                {mod.title}
              </h1>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'rgba(255,255,255,0.65)' }}>
                {mod.subtitle}
              </p>
            </div>
            {mod.freeAccess ? (
              <span
                style={{
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'rgba(29,158,117,0.25)',
                  border: '0.5px solid rgba(29,158,117,0.4)',
                  fontSize: 'var(--font-size-xs)',
                  color: '#6BDFB8',
                  whiteSpace: 'nowrap',
                }}
              >
                Accès gratuit
              </span>
            ) : (
              <span
                style={{
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'rgba(255,255,255,0.1)',
                  border: '0.5px solid rgba(255,255,255,0.2)',
                  fontSize: 'var(--font-size-xs)',
                  color: 'rgba(255,255,255,0.7)',
                  whiteSpace: 'nowrap',
                }}
              >
                Premium
              </span>
            )}
          </div>

          <div style={{ display: 'flex', gap: '24px', marginTop: '24px', flexWrap: 'wrap' }}>
            {[
              { val: mod.lessons.length.toString(), label: 'leçons' },
              { val: mod.questionCount.toString(), label: 'questions' },
              { val: `${mod.lessons.reduce((a, l) => a + l.duration, 0)} min`, label: 'de contenu' },
            ].map(({ val, label }) => (
              <div key={label}>
                <span style={{ fontSize: 'var(--font-size-md)', fontWeight: 500, color: '#FFFFFF' }}>{val}</span>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.5)', marginLeft: '4px' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Objectif */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            padding: '16px',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--color-blue-light)',
            border: 'var(--border-default)',
            marginBottom: '32px',
          }}
        >
          <Target size={18} color="var(--color-blue-france)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
            <strong style={{ color: 'var(--color-text-primary)' }}>Objectif :</strong> Maîtriser les {mod.questionCount} questions de ce thème pour obtenir au moins 80% au test officiel.
          </p>
        </div>

        {/* Leçons */}
        <h2 style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-primary)', marginBottom: '16px' }}>
          Leçons du module
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {mod.lessons.map((lesson, i) => (
            <LessonCard key={lesson.id} lesson={lesson} index={i} isPremiumUser={false} />
          ))}
        </div>

        {/* Examens blancs — 3 niveaux */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-primary)', marginBottom: '8px' }}>
            Examens blancs
          </h2>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginBottom: '20px' }}>
            Choisissez votre démarche pour un examen blanc de 40 questions ciblées — 30 min, score requis 80%.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              {
                level: 'CSP',
                label: 'Carte de séjour pluriannuelle',
                desc: 'Niveau 1 — définitions et repères fondamentaux',
                gradient: 'linear-gradient(135deg, #001A70 0%, #002395 100%)',
                bg: '#E6EEF9',
                color: '#002395',
                Icon: Shield,
              },
              {
                level: 'CR',
                label: 'Carte de résident',
                desc: 'Niveau 2 — application et mécanismes',
                gradient: 'linear-gradient(135deg, #002395 0%, #0057A8 100%)',
                bg: '#EFF6FF',
                color: '#0057A8',
                Icon: Star,
              },
              {
                level: 'NAT',
                label: 'Naturalisation',
                desc: 'Niveau 3 — culture générale et histoire approfondie',
                gradient: 'linear-gradient(135deg, #9F1239 0%, #CC1A1A 100%)',
                bg: '#FEF2F2',
                color: '#CC1A1A',
                Icon: Award,
              },
            ].map(({ level, label, desc, gradient, bg, color, Icon }) => (
              <Link
                key={level}
                href={`/examen/${level}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-lg)',
                  background: '#fff',
                  border: `1.5px solid ${bg}`,
                  cursor: 'pointer',
                  transition: 'box-shadow 150ms ease-out',
                }}>
                  {/* Icône */}
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: gradient,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={20} color="#fff" />
                  </div>

                  {/* Texte */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                      <span style={{
                        fontSize: 11, fontWeight: 700, letterSpacing: '.06em',
                        background: bg, color, padding: '2px 8px',
                        borderRadius: 100,
                      }}>{level}</span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-blue-night)' }}>{label}</span>
                    </div>
                    <span style={{ fontSize: 12, color: '#64748B' }}>{desc} · 40 Q · 30 min</span>
                  </div>

                  <ArrowRight size={16} color="#94A3B8" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA si premium requis */}
        {!mod.freeAccess && (
          <div
            style={{
              marginTop: '32px',
              padding: '24px',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--color-surface)',
              border: 'var(--border-default)',
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-primary)', fontWeight: 500, marginBottom: '8px' }}>
              Ce module est réservé aux membres Premium
            </p>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginBottom: '20px' }}>
              Débloquez les 4 modules restants, les 157 questions supplémentaires et les examens blancs illimités.
            </p>
            <Link href="/inscription?plan=premium">
              <button
                style={{
                  padding: '12px 28px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'var(--gradient-primary)',
                  color: '#FFFFFF',
                  border: 'none',
                  fontSize: 'var(--font-size-base)',
                  fontWeight: 500,
                  cursor: 'pointer',
                  minHeight: '48px',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Passer Premium — 12€/mois
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
