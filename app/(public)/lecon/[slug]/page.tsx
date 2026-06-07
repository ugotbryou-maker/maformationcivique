import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import { modules } from '@/data/modules';
import { lessonExercises } from '@/data/exercises';
import { resolveArt } from '@/data/lesson-art';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { LessonExercise } from '@/components/app/LessonExercise';
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

export function generateStaticParams() {
  return modules.flatMap((m) => m.lessons.map((l) => ({ slug: l.slug })));
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

  // ── Paywall serveur ───────────────────────────────────────────────────────
  if (!lesson.free) {
    let isPremium = false;
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
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const { data } = await supabase
            .from('users')
            .select('plan')
            .eq('id', user.id)
            .single();
          isPremium = data?.plan === 'premium';
        }
      }
    } catch {
      // Si Supabase non dispo (build/preview), on laisse passer
      isPremium = true;
    }
    if (!isPremium) {
      redirect(`/inscription?plan=premium&next=/lecon/${slug}`);
    }
  }
  // ─────────────────────────────────────────────────────────────────────────

  const lessonIndex = mod.lessons.findIndex((l) => l.slug === slug);
  const nextLesson  = mod.lessons[lessonIndex + 1] ?? null;
  const prevLesson  = mod.lessons[lessonIndex - 1] ?? null;
  const sections    = parseContent(lesson.content);
  const art         = resolveArt(slug, mod.slug);
  const exercises   = lessonExercises[slug] ?? [];
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
            {lesson.free && <span style={{ background: '#F0FDF4', color: '#16A34A', padding: '3px 10px', borderRadius: 'var(--radius-pill)', fontSize: 'var(--font-size-xs)', fontWeight: 500 }}>Gratuit</span>}
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
              <p style={{ fontSize: 'var(--font-size-xs)', opacity: 0.65, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Ce module</p>
              <h3 style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, marginBottom: '10px', lineHeight: 1.3 }}>{mod.title}</h3>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '14px', opacity: 0.75, fontSize: 'var(--font-size-xs)' }}>
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
                      {section.body.split('\n\n').filter(Boolean).map((para, j) => {
                        const isList = para.split('\n').some((l) => l.startsWith('- '));
                        if (isList) return (
                          <ul key={j} style={{ listStyle: 'none', margin: '0 0 10px' }}>
                            {para.split('\n').filter((l) => l.startsWith('- ')).map((item, k) => (
                              <li key={k} style={{ display: 'flex', gap: '8px', padding: '3px 0', fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                                <span style={{ color, fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>·</span>
                                {item.replace(/^- /, '').replace(/\*\*(.*?)\*\*/g, '$1')}
                              </li>
                            ))}
                          </ul>
                        );
                        return (
                          <p key={j} style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', lineHeight: 1.72, margin: '0 0 10px' }}>
                            {para.replace(/\*\*(.*?)\*\*/g, '$1')}
                          </p>
                        );
                      })}

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

      {/* ── NAVIGATION ────────────────────────────────────────────────────── */}
      <div className="container" style={{ padding: '36px 24px 64px' }}>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          {prevLesson && (
            <Link href={`/lecon/${prevLesson.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: '#fff', color: 'var(--color-text-secondary)', padding: '12px 20px', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-sm)', fontWeight: 500, textDecoration: 'none', border: 'var(--border-default)', boxShadow: 'var(--shadow-card)', minHeight: '48px' }}>
              <ChevronLeft size={14} /> Leçon précédente
            </Link>
          )}
          {nextLesson ? (
            <Link href={`/lecon/${nextLesson.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'var(--color-blue-night)', color: '#fff', padding: '12px 26px', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-sm)', fontWeight: 600, textDecoration: 'none', boxShadow: 'var(--shadow-lg)', minHeight: '48px' }}>
              Leçon suivante <ChevronRight size={14} />
            </Link>
          ) : (
            <Link href={`/module/${mod.slug}/quiz`} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'var(--color-red-france)', color: '#fff', padding: '12px 26px', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-sm)', fontWeight: 600, textDecoration: 'none', minHeight: '48px' }}>
              Quiz du module <ChevronRight size={14} />
            </Link>
          )}
        </div>
      </div>

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
