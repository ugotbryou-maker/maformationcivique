export const dynamic = 'force-dynamic';

import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import { modules } from '@/data/modules';
import { lessonExercises } from '@/data/exercises';
import { resolveArt } from '@/data/lesson-art';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { LessonExercise } from '@/components/app/LessonExercise';
import { LessonCompleteButton } from '@/components/app/LessonCompleteButton';
import { LessonEndQuiz, type QuizQuestion } from '@/components/app/LessonEndQuiz';
import { FreeLessonSignupModal } from '@/components/app/FreeLessonSignupModal';
import { questions as allQuestions } from '@/data/questions';
import { renderInline } from '@/lib/markdown';
import {
  ChevronRight, ChevronLeft, Clock,
  Flag, Scale, Map, Landmark, Shield, Globe,
  BookOpen, GraduationCap, Users, Building2,
  FileText, Briefcase, Home, Star, Calendar,
  CheckCircle, Info, HelpCircle, Heart,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Metadata } from 'next';

// ── Icône contextuelle par titre de section ───────────────────────────────────
function getSectionIcon(title: string, idx: number): {
  icon: LucideIcon; color: string; bg: string;
} {
  const t = title.toLowerCase();
  if (/drap|symbol|marial|mariann|coq|fête|14\s*juil/.test(t))
    return { icon: Flag, color: 'var(--color-blue-france)', bg: 'var(--color-blue-light)' };
  if (/hymne|marseill|musiq|song/.test(t))
    return { icon: Star, color: '#D97706', bg: '#FFFBEB' };
  if (/laïc|relig|église|culte|sépar/.test(t))
    return { icon: Building2, color: 'var(--color-blue-france)', bg: 'var(--color-blue-light)' };
  if (/droit|loi|const|texte|déclar|code|règle/.test(t))
    return { icon: Scale, color: '#7C3AED', bg: '#F5F3FF' };
  if (/géo|région|territ|fleuve|frontièr|atlas|mont|relief/.test(t))
    return { icon: Map, color: '#0891B2', bg: '#F0F9FF' };
  if (/guerre|résist|combat|occup|vichy|conflit|armist|libér/.test(t))
    return { icon: Shield, color: 'var(--color-red-france)', bg: 'var(--color-red-light)' };
  if (/instit|présid|gouver|parlem|sénat|assembl|collect|constit/.test(t))
    return { icon: Landmark, color: 'var(--color-blue-france)', bg: 'var(--color-blue-light)' };
  if (/europe|ue|union|onu|intern|monde|franco|oif/.test(t))
    return { icon: Globe, color: '#0284C7', bg: '#EFF6FF' };
  if (/école|éduc|enseign|bac|univ|apprend/.test(t))
    return { icon: GraduationCap, color: '#16A34A', bg: '#F0FDF4' };
  if (/santé|médec|sécu|alloc|retrait|soins|camu/.test(t))
    return { icon: Heart, color: '#DC2626', bg: '#FEF2F2' };
  if (/trav|emplo|smic|économ|indust|agric|chôm/.test(t))
    return { icon: Briefcase, color: '#D97706', bg: '#FFFBEB' };
  if (/logem|appart|maison|hous|location/.test(t))
    return { icon: Home, color: '#059669', bg: '#F0FDF4' };
  if (/famil|couple|enfant|mariage|pacs|parent/.test(t))
    return { icon: Users, color: '#7C3AED', bg: '#F5F3FF' };
  if (/libert|égal|fratern|valeur|devise/.test(t))
    return { icon: Star, color: 'var(--color-red-france)', bg: 'var(--color-red-light)' };
  if (/histoir|régime|républ|révol|empire|restaur/.test(t))
    return { icon: Calendar, color: 'var(--color-red-france)', bg: 'var(--color-red-light)' };
  if (/protect|défend|sécurit|acteur|défens/.test(t))
    return { icon: Shield, color: 'var(--color-blue-france)', bg: 'var(--color-blue-light)' };
  if (/texte|déclar|charte|préamb/.test(t))
    return { icon: FileText, color: '#7C3AED', bg: '#F5F3FF' };
  if (/applic|concr|pratiqu|exempl/.test(t))
    return { icon: CheckCircle, color: '#16A34A', bg: '#F0FDF4' };
  if (/définit|introduct|présent|origine|qu.est/.test(t))
    return { icon: Info, color: 'var(--color-blue-france)', bg: 'var(--color-blue-light)' };

  // Alternance par défaut
  return idx % 2 === 0
    ? { icon: BookOpen, color: 'var(--color-blue-france)', bg: 'var(--color-blue-light)' }
    : { icon: HelpCircle, color: 'var(--color-red-france)', bg: 'var(--color-red-light)' };
}

// ── Parser markdown ───────────────────────────────────────────────────────────
interface Section { title: string; body: string }

function parseContent(markdown: string): Section[] {
  const withoutH1 = markdown.replace(/^#\s+[^\n]+\n?/, '').trim();
  return withoutH1.split(/^##\s+/m).filter(Boolean).map((part) => {
    const lines = part.trim().split('\n');
    return { title: lines[0].trim(), body: lines.slice(1).join('\n').trim() };
  });
}

function parseKeyPoint(kp: string): { title: string; desc: string } {
  const sep = kp.includes(' — ') ? ' — ' : kp.includes(' : ') ? ' : ' : null;
  if (sep) {
    const idx = kp.indexOf(sep);
    return { title: kp.slice(0, idx).trim(), desc: kp.slice(idx + sep.length).trim() };
  }
  return { title: kp, desc: '' };
}

// ── Rendu d'un bloc de texte (paragraphe) ──────────────────────────────────
// Un même "paragraphe" markdown (séparé par \n\n) peut mélanger des phrases
// de contexte et une liste à puces (lignes "- "). On découpe alors en
// sous-blocs successifs (texte / liste / texte / ...) pour ne RIEN perdre :
// auparavant, dès qu'une ligne "- " était détectée, tout le paragraphe était
// rendu comme une simple <ul> et les phrases d'introduction/conclusion
// disparaissaient purement et simplement de la page.
// Découpe une chaîne contenant des marqueurs **gras** en fragments texte /
// <strong> mis en valeur avec la couleur de la section, pour donner du relief
// visuel au texte (au lieu de simplement supprimer les marqueurs).
function renderParagraphBlocks(para: string, color: string, key: number) {
  const lines = para.split('\n').filter((l) => l.trim() !== '');
  const blocks: { type: 'text' | 'list'; lines: string[] }[] = [];

  for (const line of lines) {
    const isBullet = line.trimStart().startsWith('- ');
    const current = blocks[blocks.length - 1];
    const blockType = isBullet ? 'list' : 'text';
    if (current && current.type === blockType) {
      current.lines.push(line);
    } else {
      blocks.push({ type: blockType, lines: [line] });
    }
  }

  return blocks.map((block, k) => {
    if (block.type === 'list') {
      return (
        <ul key={`${key}-${k}`} style={{ listStyle: 'none', margin: '0 0 10px' }}>
          {block.lines.map((item, idx) => (
            <li key={idx} style={{ display: 'flex', gap: '8px', padding: '3px 0', fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
              <span style={{ color, fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>·</span>
              <span>{renderInline(item.replace(/^\s*-\s+/, ''), color, `${key}-${k}-${idx}`)}</span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p key={`${key}-${k}`} style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', lineHeight: 1.72, margin: '0 0 10px' }}>
        {renderInline(block.lines.join(' '), color, `${key}-${k}`)}
      </p>
    );
  });
}

// ── Metadata ─────────────────────────────────────────────────────────────────
interface Props { params: Promise<{ slug: string }>; searchParams: Promise<{ module?: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  for (const mod of modules) {
    const lesson = mod.lessons.find((l) => l.slug === slug);
    if (lesson) return { title: `${lesson.title} — maformationcivique.fr`, description: lesson.keyPoints.slice(0, 3).join(' · ') };
  }
  return {};
}


// ── Page ─────────────────────────────────────────────────────────────────────
export default async function LessonPage({ params }: Props) {
  const { slug } = await params;

  let lesson = null, mod = null;
  for (const m of modules) {
    const found = m.lessons.find((l) => l.slug === slug);
    if (found) { lesson = found; mod = m; break; }
  }
  if (!lesson || !mod) notFound();

  // ── Statut Premium (utilisé pour le paywall ET pour masquer les badges
  // "Gratuit"/"Premium" qui n'ont plus de sens pour un abonné) ───────────────
  let isPremium = false;
  let isLoggedIn = false;
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (supabaseUrl && supabaseKey && !supabaseUrl.includes('placeholder')) {
      const cookieStore = await cookies();
      const supabase = createServerClient(supabaseUrl, supabaseKey, {
        cookies: {
          getAll() { return cookieStore.getAll(); },
          setAll() {},
        },
      });
      const { data: authData, error: authError } = await supabase.auth.getUser();
      if (authError) {
        console.error('[lecon/page] getUser error:', authError.message);
      }
      const user = authData?.user ?? null;
      isLoggedIn = !!user;
      if (user) {
        const { data, error: planError } = await supabase
          .from('users')
          .select('plan')
          .eq('id', user.id)
          .single();
        if (planError) {
          console.error('[lecon/page] plan query error:', planError.message, planError.code);
        }
        isPremium = data?.plan === 'premium';
      }
    }
  } catch (err) {
    // Si Supabase non dispo (build/preview), on laisse passer
    console.error('[lecon/page] caught exception:', err instanceof Error ? err.message : String(err));
    isPremium = !lesson.free ? true : isPremium;
  }

  // ── Paywall serveur ───────────────────────────────────────────────────────
  if (!lesson.free && !isPremium) {
    redirect(`/inscription?plan=premium&next=/lecon/${slug}`);
  }
  // ─────────────────────────────────────────────────────────────────────────

  const lessonIndex = mod.lessons.findIndex((l) => l.slug === slug);
  const nextLesson  = mod.lessons[lessonIndex + 1] ?? null;
  const prevLesson  = mod.lessons[lessonIndex - 1] ?? null;
  const sections    = parseContent(lesson.content);
  const art         = resolveArt(slug, mod.slug);
  const exercises   = lessonExercises[slug] ?? [];

  // Quiz de fin de leçon — on mappe les IDs vers les données complètes
  const lessonQuizQuestions: QuizQuestion[] = (lesson.quizIds ?? [])
    .map((id) => allQuestions.find((q) => q.id === id))
    .filter((q): q is NonNullable<typeof q> => q !== undefined)
    .map((q) => ({
      id:          q.id,
      question:    q.question,
      options:     q.options,
      answer:      q.answer,
      explanation: q.explanation,
    }));
  const totalDuration = mod.lessons.reduce((a, l) => a + l.duration, 0);

  return (
    <div style={{ background: '#F0F0F0', minHeight: '100vh', position: 'relative' }}>

      {/* ── ZONE HERO — fond #F0F0F0 + watermark ─────────────────────────── */}
      <div style={{ background: '#F0F0F0', position: 'relative', overflow: 'hidden' }}>

        {/* Watermark : peinture en blend luminosity 5% */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0, zIndex: 0,
            backgroundImage: `url("${art.url}")`,
            backgroundSize: 'cover', backgroundPosition: 'center top',
            mixBlendMode: 'luminosity',
            opacity: 0.05,
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ padding: '32px 24px 0', position: 'relative', zIndex: 1 }}>
          {/* Fil d'Ariane */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Accueil</Link>
            <span>/</span>
            <Link href="/modules" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Modules</Link>
            <span>/</span>
            <Link href={`/module/${mod.slug}`} style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>{mod.title}</Link>
            <span>/</span>
            <span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>{lesson.title}</span>
          </nav>

          {/* Badges */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
            <span style={{ background: 'var(--color-blue-light)', color: 'var(--color-blue-france)', padding: '3px 10px', borderRadius: 'var(--radius-pill)', fontSize: 'var(--font-size-xs)', fontWeight: 500 }}>
              {mod.num} · Leçon {lessonIndex + 1}/{mod.lessons.length}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#fff', color: 'var(--color-text-muted)', padding: '3px 10px', borderRadius: 'var(--radius-pill)', fontSize: 'var(--font-size-xs)', border: 'var(--border-default)' }}>
              <Clock size={11} /> {lesson.duration} min
            </span>
            {/* Une fois abonné Premium, la mention "Gratuit" n'a plus de sens : on la masque. */}
            {lesson.free && !isPremium && <span style={{ background: '#F0FDF4', color: '#16A34A', padding: '3px 10px', borderRadius: 'var(--radius-pill)', fontSize: 'var(--font-size-xs)', fontWeight: 500 }}>Gratuit</span>}
          </div>

          {/* Titre + sous-titre */}
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.12, marginBottom: '6px' }}>
            {lesson.title}
          </h1>
          <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-muted)', paddingBottom: '32px' }}>
            {mod.subtitle}
          </p>
        </div>
      </div>

      {/* ── CORPS : sidebar + contenu ─────────────────────────────────────── */}
      <div className="container" style={{ padding: '32px 24px 0' }}>
        <div className="lesson-layout" style={{ display: 'grid', gap: '32px', alignItems: 'start' }}>

          {/* ── SIDEBAR ── */}
          <aside className="lesson-sidebar" style={{ position: 'sticky', top: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>

            {/* Carte module — bleu */}
            <div style={{ background: 'var(--gradient-primary)', borderRadius: 'var(--radius-lg)', padding: '20px', color: '#fff' }}>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.7)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Ce module</p>
              <h3 style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, marginBottom: '10px', lineHeight: 1.3, color: '#fff' }}>{mod.title}</h3>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '14px', color: 'rgba(255,255,255,0.85)', fontSize: 'var(--font-size-xs)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><BookOpen size={11} /> {mod.lessons.length} leçons</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><Clock size={11} /> {totalDuration} min</span>
              </div>
              <Link href={`/module/${mod.slug}`} style={{ display: 'block', textAlign: 'center', background: 'rgba(255,255,255,0.18)', color: '#fff', padding: '9px', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-sm)', fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.22)' }}>
                Voir le module →
              </Link>
            </div>

            {/* Carte quiz — blanc */}
            <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '20px', border: 'var(--border-default)', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 38, height: 38, background: 'var(--color-red-light)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                <HelpCircle size={19} color="var(--color-red-france)" />
              </div>
              <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '5px' }}>Tester vos connaissances</p>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '14px' }}>Quiz de fin de module disponible — 10 questions, seuil de 80%.</p>
              <Link href={`/module/${mod.slug}/quiz`} style={{ display: 'block', textAlign: 'center', background: 'var(--color-red-france)', color: '#fff', padding: '9px', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-sm)', fontWeight: 600, textDecoration: 'none' }}>
                Lancer le quiz →
              </Link>
            </div>

            {/* Carte langue — blanc */}
            <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '20px', border: 'var(--border-default)', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 38, height: 38, background: '#EFF6FF', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                <Globe size={19} color="#0284C7" />
              </div>
              <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '5px' }}>Besoin d&apos;un test de niveau ?</p>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '14px' }}>
                Bénéficiez d&apos;un test de langue A2 / B1 / B2 <strong>100% gratuit</strong> en agence.
              </p>
              <Link href="mailto:contact@maformationcivique.fr?subject=Demande%20test%20de%20langue" style={{ display: 'block', textAlign: 'center', background: '#0284C7', color: '#fff', padding: '9px', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-sm)', fontWeight: 600, textDecoration: 'none' }}>
                Être recontacté →
              </Link>
            </div>
          </aside>

          {/* ── CONTENU ── */}
          <div>
            <div style={{ background: '#fff', borderRadius: 'var(--radius-xl)', border: 'var(--border-default)', padding: '28px 28px 24px', boxShadow: 'var(--shadow-card)' }}>
              {sections.map((section, i) => {
                const { icon: Icon, color, bg } = getSectionIcon(section.title, i);
                const exercise = i === 1 && exercises[0] ? exercises[0] : i === 3 && exercises[1] ? exercises[1] : null;

                return (
                  <div key={i}>
                    <div style={{ paddingBottom: '24px', marginBottom: '24px', borderBottom: i < sections.length - 1 ? 'var(--border-default)' : 'none' }}>
                      {/* Titre de section avec icône contextuelle */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                        <div style={{ width: 30, height: 30, background: bg, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Icon size={14} color={color} />
                        </div>
                        <h2 style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.2 }}>
                          {section.title}
                        </h2>
                      </div>

                      {/* Corps du paragraphe */}
                      {section.body.split('\n\n').filter(Boolean).map((para, j) => renderParagraphBlocks(para, color, j))}

                      {/* Image d'illustration mi-leçon — après la 1ère section */}
                      {i === 0 && art.url && (
                        <figure style={{ margin: '20px 0 0', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: 'var(--border-default)' }}>
                          <img
                            src={art.url}
                            alt={art.alt}
                            style={{ display: 'block', width: '100%', maxHeight: '320px', objectFit: 'cover', objectPosition: 'center 25%' }}
                          />
                          {art.credit && (
                            <figcaption style={{ padding: '8px 14px', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', fontStyle: 'italic', background: 'var(--color-off-white)' }}>
                              {art.credit}
                            </figcaption>
                          )}
                        </figure>
                      )}

                      {/* Exercice inline si dispo */}
                      {exercise && <LessonExercise exercise={exercise} />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── BANNIÈRE PEINTURE (soft-light, radius, 100%) ──────────────────── */}
      <div className="container" style={{ padding: '40px 24px 0' }}>
        <div style={{
          borderRadius: '20px', overflow: 'hidden',
          position: 'relative', height: '220px',
          background: art.baseBg,
        }}>
          {art.url && (
            <img
              src={art.url}
              alt={art.alt}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center 30%',
                mixBlendMode: 'soft-light',
                opacity: 1,
              }}
            />
          )}
          {art.credit && (
            <div style={{ position: 'absolute', bottom: '14px', right: '18px', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', borderRadius: '4px', padding: '3px 9px', fontSize: '10px', color: 'rgba(255,255,255,0.75)', fontStyle: 'italic' }}>
              {art.credit}
            </div>
          )}
        </div>
      </div>

      {/* ── CE QU'IL FAUT RETENIR ──────────────────────────────────────────── */}
      <div className="container" style={{ padding: '40px 24px 0' }}>
        <h2 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '20px' }}>
          Ce qu&apos;il faut retenir
        </h2>

        <div className="retenir-grid" style={{ display: 'grid', gap: '20px', alignItems: 'start' }}>
          {/* Image module avec soft-light */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', position: 'relative', minHeight: '240px', background: art.baseBg }}>
            {art.url && <img src={art.url} alt={art.alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', mixBlendMode: 'soft-light', opacity: 1 }} />}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)' }} />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: '#fff' }}>
              <div style={{ fontSize: 'var(--font-size-base)', fontWeight: 700 }}>{mod.title}</div>
              <div style={{ fontSize: 'var(--font-size-xs)', opacity: 0.75, marginTop: '3px' }}>{mod.subtitle}</div>
            </div>
          </div>

          {/* Points clés */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {lesson.keyPoints.map((kp, i) => {
              const { title, desc } = parseKeyPoint(kp);
              const { icon: Icon, color, bg } = getSectionIcon(title, i);
              return (
                <div key={i} style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '14px 16px', border: 'var(--border-default)', boxShadow: 'var(--shadow-card)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: 26, height: 26, background: bg, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                    <Icon size={12} color={color} />
                  </div>
                  <div>
                    <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: desc ? '2px' : 0 }}>{title}</div>
                    {desc && <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{desc}</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── QUIZ DE FIN DE LEÇON ─────────────────────────────────────────── */}
      {lessonQuizQuestions.length > 0 && (
        <div className="container" style={{ padding: '0 24px' }}>
          <h2 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '4px', marginTop: '40px' }}>
            Testez vos connaissances
          </h2>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: '0' }}>
            {lessonQuizQuestions.length} question{lessonQuizQuestions.length > 1 ? 's' : ''} sur cette leçon · Seuil de réussite 80%
          </p>
          <LessonEndQuiz questions={lessonQuizQuestions} lessonTitle={lesson.title} lessonSlug={lesson.slug} />
        </div>
      )}

      {/* ── TERMINER LA LEÇON + NAVIGATION ───────────────────────────────── */}
      <div className="container" style={{ padding: '36px 24px 64px' }}>
        {/* Bouton complétion */}
        <div style={{ marginBottom: '20px' }}>
          <LessonCompleteButton
            lessonSlug={lesson.slug}
            nextSlug={nextLesson?.slug ?? null}
            moduleSlug={mod.slug}
          />
        </div>

        {/* Navigation prev/next */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div>
            {prevLesson && (
              <Link href={`/lecon/${prevLesson.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: '#fff', color: 'var(--color-text-secondary)', padding: '10px 18px', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-sm)', fontWeight: 500, textDecoration: 'none', border: 'var(--border-default)', boxShadow: 'var(--shadow-card)', minHeight: '44px' }}>
                <ChevronLeft size={14} /> Leçon précédente
              </Link>
            )}
          </div>
          <div>
            {!nextLesson && (
              <Link href={`/module/${mod.slug}/quiz`} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'var(--color-red-france)', color: '#fff', padding: '10px 22px', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-sm)', fontWeight: 600, textDecoration: 'none', minHeight: '44px' }}>
                Quiz du module <ChevronRight size={14} />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* ── POP-UP INSCRIPTION (visiteurs non connectés, leçons gratuites) ── */}
      {lesson.free && !isLoggedIn && <FreeLessonSignupModal />}

      <style>{`
        .lesson-layout { grid-template-columns: 260px 1fr; }
        .retenir-grid  { grid-template-columns: 1fr 1.5fr; }

        /* Mobile ≤ 900px */
        @media (max-width: 900px) {
          .lesson-layout { grid-template-columns: 1fr !important; }
          .lesson-sidebar {
            position: static !important;
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
          }
          .retenir-grid { grid-template-columns: 1fr !important; }
          .retenir-grid > div:first-child { min-height: 180px !important; }
        }

        /* Très petit mobile ≤ 480px : sidebar en 1 col */
        @media (max-width: 480px) {
          .lesson-sidebar {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
