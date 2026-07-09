export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { Clock, ChevronLeft, ChevronRight, BookOpen, ListChecks, Target } from 'lucide-react';
import { a2Modules, b1Modules, b2Modules, transversalModules, examenModules } from '@/data/langue';
import type { LangModule, LangLesson } from '@/data/langue/types';
import { renderLangMarkdown } from '@/lib/langue-markdown';
import { LangLessonReader } from '@/components/app/LangLessonReader';
import { LangLessonQuiz } from '@/components/app/LangLessonQuiz';
import { LangScrollProgress } from '@/components/app/LangScrollProgress';
import { LessonCompleteButton } from '@/components/app/LessonCompleteButton';
import { isAdminEmail } from '@/lib/admin';

const LEVEL_COLOR: Record<string, string> = {
  a2: '#002395', b1: '#0057A8', b2: '#CC1A1A', transversal: '#7C3AED', examens: '#CC1A1A',
};
const LEVEL_BG: Record<string, string> = {
  a2: '#E6EEF9', b1: '#EFF6FF', b2: '#FEF2F2', transversal: '#F5F3FF', examens: '#FEF2F2',
};
const LEVEL_LABEL: Record<string, string> = {
  a2: 'A2', b1: 'B1', b2: 'B2', transversal: 'Transversal', examens: 'Examen blanc',
};

function findLessonAcrossModules(level: string, slug: string): { mod: LangModule; lesson: LangLesson } | null {
  const moduleSet: LangModule[] =
    level === 'a2' ? a2Modules :
    level === 'b1' ? b1Modules :
    level === 'b2' ? b2Modules :
    level === 'transversal' ? transversalModules : [];
  for (const mod of moduleSet) {
    const lesson = mod.lessons.find((l) => l.slug === slug);
    if (lesson) return { mod, lesson };
  }
  return null;
}

interface Props { params: Promise<{ level: string; slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level, slug } = await params;
  if (level === 'examens') {
    const exam = examenModules.find((m) => m.slug === slug);
    if (!exam) return {};
    return {
      title: `${exam.title} — maformationcivique.fr`,
      description: exam.description,
      alternates: { canonical: `https://www.maformationcivique.fr/moduleslinguistiques/examens/${slug}` },
    };
  }
  const found = findLessonAcrossModules(level, slug);
  if (!found) return {};
  return {
    title: `${found.lesson.title} — Français ${LEVEL_LABEL[level]} | maformationcivique.fr`,
    description: found.lesson.description,
    alternates: { canonical: `https://www.maformationcivique.fr/moduleslinguistiques/${level}/${slug}` },
  };
}

export default async function LangueLessonPage({ params }: Props) {
  const { level, slug } = await params;
  if (!LEVEL_LABEL[level]) notFound();

  // ── Statut d'accès ──────────────────────────────────────────────────────
  // isLoggedIn sert à choisir la bonne cible de redirection paywall :
  // - pas connecté → /inscription (créer un compte)
  // - connecté mais sans le plan → /inscription n'a aucun sens (c'est un
  //   formulaire de CRÉATION de compte, pas une page d'upgrade) → /#tarifs
  let hasAccess = false;
  let isLoggedIn = false;
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
      isLoggedIn = !!user;
      if (user) {
        const { data: profile } = await supabase.from('users').select('plan').eq('id', user.id).single();
        hasAccess = profile?.plan === 'premium' || profile?.plan === 'langue' || profile?.plan === 'bundle';
        // Admin (même liste que /studio et /admin) : accès total au contenu
        // langue sans dépendre du plan, pour pouvoir QA tout le contenu en continu.
        if (isAdminEmail(user.email)) hasAccess = true;
      }
    }
  } catch {
    // Supabase indisponible — hasAccess reste false, le paywall ci-dessous s'applique
  }

  const accent = LEVEL_COLOR[level];
  const bg = LEVEL_BG[level];

  // ── Cas "examen blanc" : module entier avec ses sections ────────────────
  if (level === 'examens') {
    const exam = examenModules.find((m) => m.slug === slug);
    if (!exam) notFound();
    if (!hasAccess) {
      redirect(isLoggedIn ? '/#tarifs' : `/inscription?plan=langue&next=/langue/examens/${slug}`);
    }

    const totalExercises = exam.lessons.reduce((a, l) => a + l.exercises.length, 0);
    const totalDuration = exam.lessons.reduce((a, l) => a + l.duration, 0);

    return (
      <div style={{ minHeight: '100vh', background: 'var(--color-off-white)' }}>
        <LangScrollProgress color="#CC1A1A" />
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/modules/daumier-la-republique.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(127,29,29,0.92) 0%, rgba(204,26,26,0.88) 100%)' }} />
          <div style={{ position: 'relative', zIndex: 1, padding: '2.5rem 1.5rem 2rem' }}>
            <div className="container">
              <nav style={{ display: 'flex', gap: '6px', marginBottom: '16px', fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.7)' }}>
                <Link href="/moduleslinguistiques" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Cours de français</Link>
                <span>/</span>
                <span style={{ color: '#fff' }}>{exam.title}</span>
              </nav>
              <h1 style={{ fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: 800, color: '#fff', margin: '0 0 6px' }}>{exam.title}</h1>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', margin: '0 0 14px' }}>{exam.subtitle}</p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>
                  <ListChecks size={13} /> {exam.lessons.length} sections · {totalExercises} questions
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>
                  <Clock size={13} /> {totalDuration} min recommandées
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{ padding: '32px 24px 64px' }}>
          {/* Sommaire des sections */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '28px', flexWrap: 'wrap' }}>
            {exam.lessons.map((section, i) => (
              <a key={section.id} href={`#${section.slug}`} style={{
                background: '#fff', border: 'var(--border-default)', borderRadius: 'var(--radius-pill)',
                padding: '8px 16px', fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text-secondary)',
                textDecoration: 'none', boxShadow: 'var(--shadow-card)',
              }}>
                {i + 1}. {section.title.replace(/^Section \d+ — /, '')}
              </a>
            ))}
          </div>

          {exam.lessons.map((section, i) => (
            <div key={section.id} id={section.slug} style={{ marginBottom: '40px', scrollMarginTop: '24px' }}>
              <div style={{ background: '#fff', borderRadius: 'var(--radius-xl)', border: 'var(--border-default)', boxShadow: 'var(--shadow-card)', padding: '24px 26px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '14px' }}>
                  <span style={{ background: bg, color: accent, fontSize: 'var(--font-size-xs)', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)' }}>
                    Section {i + 1}/{exam.lessons.length}
                  </span>
                </div>
                <h2 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 16px' }}>{section.title}</h2>
                {renderLangMarkdown(section.dialogue, accent)}
                <div style={{ marginTop: '8px', paddingTop: '16px', borderTop: 'var(--border-default)' }}>
                  {renderLangMarkdown(section.linguisticPoint, accent)}
                </div>
              </div>
              <LangLessonQuiz exercises={section.exercises} accent={accent} lessonSlug={section.slug} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── Cas leçon classique (A2 / B1 / B2 / transversal) ─────────────────────
  const found = findLessonAcrossModules(level, slug);
  if (!found) notFound();
  const { mod, lesson } = found;

  if (!lesson.free && !hasAccess) {
    redirect(isLoggedIn ? '/#tarifs' : `/inscription?plan=langue&next=/langue/${level}/${slug}`);
  }

  const lessonIndex = mod.lessons.findIndex((l) => l.slug === slug);
  const nextLesson = mod.lessons[lessonIndex + 1] ?? null;
  const prevLesson = mod.lessons[lessonIndex - 1] ?? null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: lesson.title,
    description: lesson.description,
    url: `https://www.maformationcivique.fr/moduleslinguistiques/${level}/${lesson.slug}`,
    educationalLevel: level.toUpperCase(),
    inLanguage: 'fr',
    isPartOf: { '@type': 'Course', name: mod.title, url: `https://www.maformationcivique.fr/moduleslinguistiques/${level}` },
    provider: { '@type': 'Organization', name: 'maformationcivique.fr', url: 'https://www.maformationcivique.fr' },
    timeRequired: `PT${lesson.duration}M`,
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-off-white)' }}>
      <LangScrollProgress color={accent} stopAtId="lesson-nav" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero avec filigrane */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: 160 }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(/images/modules/Ecole_-_Salle_de_Classe_2.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center 20%' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${accent}F0 0%, ${accent}B0 100%)` }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '28px 24px 26px' }}>
          <nav style={{ display: 'flex', gap: '6px', marginBottom: '14px', fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.7)', flexWrap: 'wrap' }}>
            <Link href="/moduleslinguistiques" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Cours de français</Link>
            <span>/</span>
            <Link href={`/moduleslinguistiques/${level}`} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{LEVEL_LABEL[level]}</Link>
            <span>/</span>
            <Link href={`/moduleslinguistiques/${level}`} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{mod.title}</Link>
            <span>/</span>
            <span style={{ color: '#fff' }}>{lesson.title}</span>
          </nav>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', padding: '3px 10px', borderRadius: 'var(--radius-pill)', fontSize: 'var(--font-size-xs)', fontWeight: 500, backdropFilter: 'blur(4px)' }}>
              {mod.title} · Leçon {lessonIndex + 1}/{mod.lessons.length}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)', padding: '3px 10px', borderRadius: 'var(--radius-pill)', fontSize: 'var(--font-size-xs)', backdropFilter: 'blur(4px)' }}>
              <Clock size={11} /> {lesson.duration} min
            </span>
            {lesson.free && !hasAccess && <span style={{ background: '#F0FDF4', color: '#16A34A', padding: '3px 10px', borderRadius: 'var(--radius-pill)', fontSize: 'var(--font-size-xs)', fontWeight: 500 }}>Gratuit</span>}
          </div>

          <h1 style={{ fontSize: 'clamp(22px, 4vw, 34px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, margin: '0 0 6px' }}>{lesson.title}</h1>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'rgba(255,255,255,0.8)', margin: 0 }}>{lesson.description}</p>
        </div>
      </div>

      <div className="container" style={{ padding: '28px 24px 64px' }}>
        <div className="lang-lesson-layout" style={{ display: 'grid', gap: '28px', alignItems: 'start' }}>
          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ background: 'var(--gradient-primary)', borderRadius: 'var(--radius-lg)', padding: '18px', color: '#fff' }}>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.7)', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Ce module</p>
              <h3 style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, margin: '0 0 10px', color: '#fff' }}>{mod.title}</h3>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '14px', color: 'rgba(255,255,255,0.85)', fontSize: 'var(--font-size-xs)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><BookOpen size={11} /> {mod.lessons.length} leçons</span>
              </div>
              <Link href={`/moduleslinguistiques/${level}`} style={{ display: 'block', textAlign: 'center', background: 'rgba(255,255,255,0.18)', color: '#fff', padding: '9px', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-sm)', fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.22)' }}>
                Voir le module →
              </Link>
            </div>

            <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '18px', border: 'var(--border-default)', boxShadow: 'var(--shadow-card)' }}>
              <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text-primary)', margin: '0 0 10px' }}>À retenir</p>
              <ul style={{ listStyle: 'none', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {lesson.keyPoints.map((kp, i) => (
                  <li key={i} style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', display: 'flex', gap: '6px', lineHeight: 1.5 }}>
                    <span style={{ color: accent, fontWeight: 700, flexShrink: 0 }}>·</span>
                    <span>{kp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Contenu paginé */}
          <div>
            <LangLessonReader
              lesson={lesson}
              accent={accent}
              bg={bg}
              modTitle={mod.title}
              modIndex={mod.lessons.findIndex((l) => l.slug === slug)}
              modTotal={mod.lessons.length}
              lessonSlug={slug}
            />

            {/* Bouton "Terminer la leçon · +50 XP" */}
            <div id="lesson-nav" style={{ marginTop: '32px', paddingTop: '24px', borderTop: 'var(--border-default)' }}>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                <div>
                  {prevLesson && (
                    <Link href={`/moduleslinguistiques/${level}/${prevLesson.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: '#fff', color: 'var(--color-text-secondary)', padding: '10px 18px', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-sm)', fontWeight: 500, textDecoration: 'none', border: 'var(--border-default)', boxShadow: 'var(--shadow-card)' }}>
                      <ChevronLeft size={14} /> Leçon précédente
                    </Link>
                  )}
                </div>
                <LessonCompleteButton
                  lessonSlug={slug}
                  nextHref={nextLesson ? `/moduleslinguistiques/${level}/${nextLesson.slug}` : null}
                  moduleHref={`/moduleslinguistiques/${level}`}
                  accentColor={accent}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .lang-lesson-layout { grid-template-columns: 260px 1fr; }
        @media (max-width: 900px) {
          .lang-lesson-layout { grid-template-columns: 1fr !important; }
          .lang-lesson-layout aside { position: static !important; }
        }
      `}</style>
    </div>
  );
}
