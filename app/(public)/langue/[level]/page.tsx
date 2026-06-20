export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { Lock, CheckCircle, Clock, ChevronRight, ListChecks, BookOpen } from 'lucide-react';
import { a2Modules, b1Modules, b2Modules, transversalModules, examenModules } from '@/data/langue';
import type { LangModule } from '@/data/langue/types';
import { isAdminEmail } from '@/lib/admin';

const LEVEL_DATA: Record<string, { title: string; subtitle: string; color: string; bg: string; gradient: string; modules: LangModule[] }> = {
  a2: { title: 'A2 — Découverte', subtitle: 'Carte de séjour pluriannuelle / OFII', color: '#002395', bg: '#E6EEF9', gradient: 'linear-gradient(135deg, #001A70 0%, #002395 100%)', modules: a2Modules },
  b1: { title: 'B1 — Intermédiaire', subtitle: 'Carte de résident / DELF · TEF', color: '#0057A8', bg: '#EFF6FF', gradient: 'linear-gradient(135deg, #002395 0%, #0057A8 100%)', modules: b1Modules },
  b2: { title: 'B2 — Avancé', subtitle: 'Naturalisation (depuis 2026)', color: '#CC1A1A', bg: '#FEF2F2', gradient: 'linear-gradient(135deg, #9F1239 0%, #CC1A1A 100%)', modules: b2Modules },
  transversal: { title: 'Transversal — Tous niveaux', subtitle: 'Phonétique, orthographe, erreurs fréquentes', color: '#7C3AED', bg: '#F5F3FF', gradient: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 100%)', modules: transversalModules },
  examens: { title: 'Examens blancs', subtitle: 'Simulations OFII, DELF/TEF, naturalisation', color: '#CC1A1A', bg: '#FEF2F2', gradient: 'linear-gradient(135deg, #7F1D1D 0%, #CC1A1A 100%)', modules: examenModules },
};

interface Props { params: Promise<{ level: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level } = await params;
  const data = LEVEL_DATA[level];
  if (!data) return {};
  return {
    title: `${data.title} — Cours de français | maformationcivique.fr`,
    description: `${data.subtitle}. Leçons de français avec dialogues, points de grammaire et exercices corrigés.`,
    alternates: { canonical: `https://maformationcivique.fr/langue/${level}` },
  };
}

export default async function LangueLevelPage({ params }: Props) {
  const { level } = await params;
  const data = LEVEL_DATA[level];
  if (!data) notFound();

  let hasAccess = false;
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (supabaseUrl && supabaseKey && !supabaseUrl.includes('placeholder')) {
      const cookieStore = await cookies();
      const supabase = createServerClient(supabaseUrl, supabaseKey, {
        cookies: { getAll() { return cookieStore.getAll(); }, setAll() {} },
      });
      const { data: authData } = await supabase.auth.getUser();
      const user = authData?.user ?? null;
      if (user) {
        const { data: profile } = await supabase.from('users').select('plan').eq('id', user.id).single();
        hasAccess = profile?.plan === 'premium' || profile?.plan === 'langue' || profile?.plan === 'bundle';
        if (isAdminEmail(user.email)) hasAccess = true;
      }
    }
  } catch {
    // Supabase indisponible — on laisse hasAccess à false, le paywall s'appliquera à la leçon
  }

  const totalLessons = data.modules.reduce((a, m) => a + m.lessons.length, 0);
  const totalDuration = data.modules.reduce((a, m) => a + m.lessons.reduce((s, l) => s + l.duration, 0), 0);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-off-white)' }}>
      {/* Hero */}
      <div style={{ background: data.gradient, padding: '3rem 1.5rem 2.5rem' }}>
        <div className="container">
          <nav style={{ display: 'flex', gap: '6px', marginBottom: '16px', fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.7)' }}>
            <Link href="/langue" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Cours de français</Link>
            <span>/</span>
            <span style={{ color: '#fff' }}>{data.title}</span>
          </nav>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, color: '#fff', margin: '0 0 6px' }}>{data.title}</h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.78)', margin: '0 0 16px' }}>{data.subtitle}</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>
              <BookOpen size={13} /> {data.modules.length} modules · {totalLessons} leçons
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>
              <Clock size={13} /> {totalDuration} min de contenu
            </span>
          </div>
        </div>
      </div>

      {/* Liste modules + leçons */}
      <div className="container" style={{ padding: '32px 24px 64px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {data.modules.map((mod) => (
            <div key={mod.slug} style={{ background: '#fff', borderRadius: 'var(--radius-xl)', border: 'var(--border-default)', boxShadow: 'var(--shadow-card)', overflow: 'hidden' }}>
              <div style={{ padding: '18px 22px', borderBottom: 'var(--border-default)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: 38, height: 38, borderRadius: 'var(--radius-md)', background: data.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>
                  {mod.emoji}
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: 'var(--color-text-primary)', margin: 0 }}>{mod.title}</h2>
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', margin: '2px 0 0' }}>{mod.subtitle}</p>
                </div>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', whiteSpace: 'nowrap' }}>{mod.lessons.length} leçons</span>
              </div>
              <div>
                {mod.lessons.map((lesson, i) => {
                  const locked = !lesson.free && !hasAccess;
                  return (
                    <Link
                      key={lesson.slug}
                      href={`/langue/${level}/${lesson.slug}`}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 22px',
                        textDecoration: 'none', borderBottom: i < mod.lessons.length - 1 ? 'var(--border-default)' : 'none',
                      }}
                    >
                      <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', width: 20, flexShrink: 0 }}>{i + 1}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text-primary)' }}>{lesson.title}</div>
                        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                          {lesson.duration} min · {lesson.exercises.length} exercices
                        </div>
                      </div>
                      {lesson.free
                        ? <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 500, color: '#16A34A', background: '#F0FDF4', padding: '3px 10px', borderRadius: 'var(--radius-pill)', flexShrink: 0 }}>Gratuit</span>
                        : locked
                          ? <Lock size={15} color="var(--color-text-muted)" style={{ flexShrink: 0 }} />
                          : <CheckCircle size={15} color={data.color} style={{ flexShrink: 0 }} />}
                      <ChevronRight size={15} color="var(--color-text-muted)" style={{ flexShrink: 0 }} />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {level !== 'examens' && (
          <div style={{ marginTop: '32px', background: '#fff', borderRadius: 'var(--radius-lg)', border: 'var(--border-default)', padding: '20px 22px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: data.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ListChecks size={18} color={data.color} />
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text-primary)', margin: 0 }}>Prêt à tester votre niveau {level.toUpperCase()} ?</p>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', margin: '2px 0 0' }}>Passez l&apos;examen blanc en conditions réelles.</p>
            </div>
            <Link href={`/langue/examens/examen-blanc-${level}`} style={{ background: data.color, color: '#fff', padding: '9px 18px', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-sm)', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Examen blanc →
            </Link>
          </div>
        )}

        {!hasAccess && level !== 'examens' && (
          <div style={{ marginTop: '20px', background: 'var(--gradient-primary)', borderRadius: 'var(--radius-lg)', padding: '20px 22px', color: '#fff', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Lock size={22} style={{ flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, margin: 0 }}>Débloquez toutes les leçons de français</p>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.8)', margin: '2px 0 0' }}>Accès illimité à tous les niveaux A2, B1, B2 et aux examens blancs.</p>
            </div>
            <Link href="/inscription?plan=langue" style={{ background: '#fff', color: 'var(--color-blue-france)', padding: '9px 18px', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-sm)', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Voir les offres →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
