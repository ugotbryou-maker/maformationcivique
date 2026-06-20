import Link from 'next/link';
import type { Metadata } from 'next';
import { Shield, Star, Award, Sparkles, ArrowRight, BookOpen, Clock, ListChecks, GraduationCap } from 'lucide-react';
import { a2Modules, b1Modules, b2Modules, transversalModules, examenModules } from '@/data/langue';

export const metadata: Metadata = {
  title: 'Cours de français — A2, B1, B2 | maformationcivique.fr',
  description: 'Apprenez le français pour vos démarches administratives : leçons A2, B1, B2, modules transversaux (phonétique, orthographe) et examens blancs pour l\'OFII, le DELF/TEF et la naturalisation.',
  alternates: { canonical: 'https://maformationcivique.fr/langue' },
};

const LEVELS = [
  {
    level: 'a2',
    label: 'A2 — Découverte',
    desc: 'Vie quotidienne, démarches administratives, logement, travail, santé, transports. Le niveau requis pour la carte de séjour pluriannuelle.',
    Icon: Shield,
    gradient: 'linear-gradient(135deg, #001A70 0%, #002395 100%)',
    bg: '#E6EEF9',
    color: '#002395',
    modules: a2Modules,
  },
  {
    level: 'b1',
    label: 'B1 — Intermédiaire',
    desc: 'Actualité, débats, argumentation, institutions, rédaction. Le niveau requis pour la carte de résident et le DELF/TEF.',
    Icon: Star,
    gradient: 'linear-gradient(135deg, #002395 0%, #0057A8 100%)',
    bg: '#EFF6FF',
    color: '#0057A8',
    modules: b1Modules,
  },
  {
    level: 'b2',
    label: 'B2 — Avancé',
    desc: 'Textes argumentatifs, débat formel, nuances culturelles, entretien de naturalisation. Le niveau requis pour la naturalisation depuis 2026.',
    Icon: Award,
    gradient: 'linear-gradient(135deg, #9F1239 0%, #CC1A1A 100%)',
    bg: '#FEF2F2',
    color: '#CC1A1A',
    modules: b2Modules,
  },
  {
    level: 'transversal',
    label: 'Transversal — Tous niveaux',
    desc: 'Phonétique, orthographe et erreurs fréquentes : des modules utiles à tout moment de votre apprentissage, quel que soit votre niveau.',
    Icon: Sparkles,
    gradient: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 100%)',
    bg: '#F5F3FF',
    color: '#7C3AED',
    modules: transversalModules,
  },
] as const;

export default function LanguePage() {
  const totalLessons = [...a2Modules, ...b1Modules, ...b2Modules, ...transversalModules].reduce((a, m) => a + m.lessons.length, 0);
  const totalExercises = [...a2Modules, ...b1Modules, ...b2Modules, ...transversalModules].reduce(
    (a, m) => a + m.lessons.reduce((s, l) => s + l.exercises.length, 0), 0,
  );

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-off-white)' }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #001A70 0%, #002395 55%, #6D28D9 100%)', padding: '4rem 1.5rem 3rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.12)', borderRadius: 100,
            padding: '6px 18px', marginBottom: '1.5rem',
            fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.85)',
            letterSpacing: '.07em', textTransform: 'uppercase',
          }}>
            <GraduationCap size={13} /> Cours de français langue étrangère
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 900, color: '#fff', margin: '0 0 1rem', lineHeight: 1.15 }}>
            Apprenez le français pour réussir vos démarches
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.78)', margin: '0 0 1.5rem', lineHeight: 1.7 }}>
            Des leçons conçues pour les situations réelles de la vie en France — administration, travail, logement, santé — du niveau A2 à B2.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { val: String(a2Modules.length + b1Modules.length + b2Modules.length + transversalModules.length), label: 'modules' },
              { val: String(totalLessons), label: 'leçons' },
              { val: String(totalExercises), label: 'exercices' },
            ].map(({ val, label }) => (
              <div key={label} style={{ color: '#fff' }}>
                <span style={{ fontSize: 22, fontWeight: 800 }}>{val}</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginLeft: 6 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cards niveaux */}
      <div style={{ maxWidth: 880, margin: '0 auto', padding: '2.5rem 1.25rem 1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          {LEVELS.map(({ level, label, desc, Icon, gradient, bg, color, modules }) => {
            const lessonCount = modules.reduce((a, m) => a + m.lessons.length, 0);
            const duration = modules.reduce((a, m) => a + m.lessons.reduce((s, l) => s + l.duration, 0), 0);
            return (
              <Link key={level} href={`/langue/${level}`} style={{ textDecoration: 'none' }}>
                <article style={{
                  borderRadius: 18, padding: '22px 24px', background: gradient,
                  display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap',
                  transition: 'transform 200ms ease-out',
                }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: '50%', flexShrink: 0,
                    background: 'rgba(255,255,255,0.18)', border: '1.5px solid rgba(255,255,255,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={24} color="#fff" />
                  </div>
                  <div style={{ flex: 1, minWidth: 220 }}>
                    <h2 style={{ fontSize: 19, fontWeight: 800, color: '#fff', margin: '0 0 4px' }}>{label}</h2>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.82)', margin: 0, lineHeight: 1.55, maxWidth: 520 }}>{desc}</p>
                    <div style={{ display: 'flex', gap: '14px', marginTop: '10px', flexWrap: 'wrap' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: 'rgba(255,255,255,0.85)' }}>
                        <BookOpen size={12} /> {modules.length} modules · {lessonCount} leçons
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: 'rgba(255,255,255,0.85)' }}>
                        <Clock size={12} /> {duration} min
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={20} color="#fff" style={{ flexShrink: 0 }} />
                </article>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Examens blancs */}
      <div style={{ maxWidth: 880, margin: '0 auto', padding: '1.5rem 1.25rem 4rem' }}>
        <h2 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '14px' }}>
          Examens blancs
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
          {examenModules.map((exam) => (
            <Link key={exam.slug} href={`/langue/examens/${exam.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '18px', border: 'var(--border-default)', boxShadow: 'var(--shadow-card)', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--color-red-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ListChecks size={16} color="var(--color-red-france)" />
                  </div>
                  <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 700, color: 'var(--color-text-primary)' }}>{exam.title}</span>
                </div>
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>{exam.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
