export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getModuleBySlug, modules } from '@/data/modules';
import { LessonCard } from '@/components/app/LessonCard';
import { ProgressBar } from '@/components/app/ProgressBar';
import { ArrowLeft, Target, Shield, Star, Award, ArrowRight } from 'lucide-react';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import type { Metadata } from 'next';

const MODULE_HERO = {
  republique:   { image: '/images/modules/republique.jpg',   color: '#DC2626', colorEnd: '#991B1B', position: 'center 8%' },
  droits:       { image: '/images/modules/Droits.png',        color: '#002395', colorEnd: '#001A70', position: 'center 35%' },
  institutions: { image: '/images/modules/institutions.jpg', color: '#1E3A8A', colorEnd: '#1E40AF', position: 'center 20%' },
  histoire:     { image: '/images/modules/histoire.jpg',     color: '#065F46', colorEnd: '#059669', position: 'center 30%' },
  'vie-en-france': { image: '/images/modules/vie-en-france.jpg', color: '#0E7490', colorEnd: '#0891B2', position: 'center 40%' },
} as const;

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


export default async function ModulePage({ params }: Props) {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);
  if (!mod) notFound();

  // ── Auth : plan + progression ──────────────────────────────────────────────
  let isPremiumUser = false;
  let completedSlugs = new Set<string>();
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const [{ data: profile }, { data: progression }] = await Promise.all([
        supabase.from('users').select('plan').eq('id', user.id).single(),
        supabase
          .from('progression')
          .select('lesson_slug')
          .eq('user_id', user.id)
          .eq('module_slug', mod!.slug)
          .eq('completed', true),
      ]);
      isPremiumUser = profile?.plan === 'premium';
      completedSlugs = new Set(progression?.map((p: { lesson_slug: string }) => p.lesson_slug) ?? []);
    }
  } catch {
    // Non connecté ou Supabase indisponible → valeurs par défaut
  }
  // ──────────────────────────────────────────────────────────────────────────

  const hero = MODULE_HERO[mod.slug as keyof typeof MODULE_HERO] ?? {
    image: '', color: '#002395', colorEnd: '#001A70', position: 'center',
  };

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

        {/* Module header — peinture + overlay */}
        <div
          style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            marginBottom: '32px',
            minHeight: '220px',
          }}
        >
          {/* Image de fond */}
          {hero.image && (
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${hero.image})`,
              backgroundSize: 'cover',
              backgroundPosition: hero.position,
            }} />
          )}
          {/* Overlay coloré */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(135deg, ${hero.color}F0 0%, ${hero.colorEnd}D0 100%)`,
          }} />
          {/* Contenu */}
          <div style={{ position: 'relative', zIndex: 2, padding: '36px 32px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '48px', fontWeight: 700, color: 'rgba(255,255,255,0.2)', display: 'block', lineHeight: 1, marginBottom: '12px' }}>
                  {mod.num}
                </span>
                <h1 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px' }}>
                  {mod.title}
                </h1>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'rgba(255,255,255,0.7)' }}>
                  {mod.subtitle}
                </p>
              </div>
              {mod.freeAccess ? (
                <span style={{
                  padding: '4px 14px',
                  borderRadius: '100px',
                  background: 'rgba(255,255,255,0.95)',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: hero.color,
                  whiteSpace: 'nowrap',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  Gratuit
                </span>
              ) : (
                <span style={{
                  padding: '4px 14px',
                  borderRadius: '100px',
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.9)',
                  whiteSpace: 'nowrap',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  backdropFilter: 'blur(4px)',
                }}>
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
                  <span style={{ fontSize: 'var(--font-size-md)', fontWeight: 600, color: '#FFFFFF' }}>{val}</span>
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.55)', marginLeft: '4px' }}>{label}</span>
                </div>
              ))}
            </div>
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
            <LessonCard
                key={lesson.id}
                lesson={lesson}
                index={i}
                isPremiumUser={isPremiumUser}
                completed={completedSlugs.has(lesson.slug)}
              />
          ))}
        </div>

        {/* Examens blancs — 3 niveaux */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-primary)', marginBottom: '8px' }}>
            Examens blancs
          </h2>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginBottom: '20px' }}>
            Choisissez votre démarche — 40 questions · 30 min · Score requis 80 %.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              {
                level: 'CSP',
                label: 'Carte de séjour pluriannuelle',
                difficulty: 'Niveau 1',
                image: '/images/examen/csp.jpg',
                imagePos: 'center 60%',
                gFrom: 'rgba(0,26,112,0.82)',
                gTo: 'rgba(0,35,149,0.72)',
                Icon: Shield,
              },
              {
                level: 'CR',
                label: 'Carte de résident',
                difficulty: 'Niveau 2',
                image: '/images/examen/carte-resident.jpg',
                imagePos: 'center 30%',
                gFrom: 'rgba(0,35,149,0.80)',
                gTo: 'rgba(0,87,168,0.70)',
                Icon: Star,
              },
              {
                level: 'NAT',
                label: 'Naturalisation',
                difficulty: 'Niveau 3',
                image: '/images/examen/naturalisation.jpg',
                imagePos: 'center 40%',
                gFrom: 'rgba(120,12,40,0.84)',
                gTo: 'rgba(180,20,20,0.74)',
                Icon: Award,
              },
            ].map(({ level, label, difficulty, image, imagePos, gFrom, gTo, Icon }) => (
              <Link key={level} href={`/examen/${level}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{
                  position: 'relative',
                  borderRadius: 16,
                  overflow: 'hidden',
                  minHeight: 80,
                  cursor: 'pointer',
                  transition: 'transform 260ms ease-out, box-shadow 260ms ease-out',
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 32px rgba(0,0,0,0.22)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  {/* Photo */}
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: imagePos }} />
                  {/* Overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(140deg, ${gFrom} 0%, ${gTo} 100%)` }} />
                  {/* Content */}
                  <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px' }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(6px)', border: '1.5px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={18} color="#fff" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>{difficulty}</span>
                      <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>{label}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(0,8,40,0.5)', backdropFilter: 'blur(8px)', borderRadius: 10, padding: '7px 12px', border: '1px solid rgba(255,255,255,0.12)' }}>
                      <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>40 Q · 30 min · 80%</span>
                      <ArrowRight size={13} color="rgba(255,255,255,0.7)" />
                    </div>
                  </div>
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
