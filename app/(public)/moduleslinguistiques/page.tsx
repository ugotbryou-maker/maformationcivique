export const dynamic = 'force-dynamic';

import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, BookOpen, ListChecks } from 'lucide-react';
import { a2Modules, b1Modules, b2Modules, transversalModules, examenModules } from '@/data/langue';
import { createServerSupabaseClient } from '@/lib/supabase-server';

export const metadata: Metadata = {
  title: 'Cours de français — A2, B1, B2 | maformationcivique.fr',
  description: "Cours de français A2, B1, B2 pour vos démarches : leçons, grammaire, phonétique et examens blancs pour l'OFII, le DELF/TEF et la naturalisation.",
  alternates: { canonical: 'https://www.maformationcivique.fr/moduleslinguistiques' },
  openGraph: {
    title: 'Cours de français A2, B1, B2 pour vos démarches',
    description: "Leçons A2, B1, B2, phonétique et examens blancs pour l'OFII, le DELF/TEF et la naturalisation.",
    url: 'https://www.maformationcivique.fr/moduleslinguistiques',
  },
};

const LEVELS = [
  {
    level: 'a2',
    badge: 'Carte de séjour pluriannuelle · OFII',
    label: 'A2 — Découverte',
    desc: 'Vie quotidienne, démarches administratives, logement, travail, santé, transports.',
    image: '/images/modules/Mairie-de-Paris-l-hotel-de-toutes-les-batailles.jpg',
    imagePos: 'center 40%',
    gradient: 'linear-gradient(135deg, #001A70E6 0%, #002395CC 100%)',
    color: '#002395',
    modules: a2Modules,
  },
  {
    level: 'b1',
    badge: 'Carte de résident · DELF · TEF',
    label: 'B1 — Intermédiaire',
    desc: 'Actualité, débats, argumentation, institutions françaises, rédaction administrative.',
    image: '/images/modules/hemicycle-parlement-europeen.jpg',
    imagePos: 'center 35%',
    gradient: 'linear-gradient(135deg, #002395E6 0%, #0057A8CC 100%)',
    color: '#0057A8',
    modules: b1Modules,
  },
  {
    level: 'b2',
    badge: 'Naturalisation · depuis janvier 2026',
    label: 'B2 — Avancé',
    desc: 'Textes argumentatifs, débat formel, nuances culturelles, entretien de naturalisation.',
    image: '/images/modules/palais-elysee.jpg',
    imagePos: 'center 30%',
    gradient: 'linear-gradient(135deg, #9F1239E6 0%, #CC1A1ACC 100%)',
    color: '#CC1A1A',
    modules: b2Modules,
  },
  {
    level: 'transversal',
    badge: 'Tous niveaux',
    label: 'Transversal',
    desc: 'Phonétique, orthographe et erreurs fréquentes — utiles à tout moment de votre apprentissage.',
    image: '/images/modules/Ecole_-_Salle_de_Classe_2.jpg',
    imagePos: 'center 20%',
    gradient: 'linear-gradient(135deg, #6D28D9E6 0%, #9333EACC 100%)',
    color: '#7C3AED',
    modules: transversalModules,
  },
] as const;

export default async function LanguePage() {
  const totalLessons = [...a2Modules, ...b1Modules, ...b2Modules, ...transversalModules].reduce((a, m) => a + m.lessons.length, 0);
  const totalExercises = [...a2Modules, ...b1Modules, ...b2Modules, ...transversalModules].reduce(
    (a, m) => a + m.lessons.reduce((s, l) => s + l.exercises.length, 0), 0,
  );

  // Progression utilisateur (optionnelle — null si non connecté)
  let completedSlugs: Set<string> = new Set();
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: prog } = await supabase
        .from('progression')
        .select('lesson_slug')
        .eq('user_id', user.id)
        .eq('completed', true);
      completedSlugs = new Set((prog ?? []).map((r) => r.lesson_slug));
    }
  } catch { /* Supabase indisponible — pas de progression */ }

  function levelPct(mods: typeof a2Modules): number {
    const total = mods.reduce((a, m) => a + m.lessons.length, 0);
    if (total === 0) return 0;
    const done = mods.reduce((a, m) => a + m.lessons.filter((l) => completedSlugs.has(l.slug)).length, 0);
    return Math.round((done / total) * 100);
  }

  const totalModules = a2Modules.length + b1Modules.length + b2Modules.length + transversalModules.length;

  return (
    <div style={{ minHeight: '80vh', padding: '64px 0' }}>
      <div className="container">
        {/* Header — même structure que /modulesciviques */}
        <div style={{ marginBottom: '48px' }}>
          <h1 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)', marginBottom: '12px' }}>
            Les {totalModules} modules de langue française
          </h1>
          <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', maxWidth: '520px' }}>
            Des leçons conçues pour les situations réelles de la vie en France — du niveau A2 à B2.
          </p>
          <div style={{ display: 'flex', gap: '24px', marginTop: '20px', flexWrap: 'wrap' }}>
            {[
              { val: '4', label: 'niveaux' },
              { val: String(totalModules), label: 'modules' },
              { val: String(totalLessons), label: 'leçons' },
              { val: String(totalExercises), label: 'exercices' },
            ].map(({ val, label }) => (
              <div key={label}>
                <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: 500, color: 'var(--color-blue-france)' }}>{val}</span>
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginLeft: '6px' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cards niveaux — même hauteur/padding/gap que ModuleList civique */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {LEVELS.map(({ level, label, badge, desc, image, imagePos, gradient, modules }) => {
            const lessonCount = modules.reduce((a, m) => a + m.lessons.length, 0);
            const pct = levelPct(modules as typeof a2Modules);
            return (
              <Link key={level} href={`/moduleslinguistiques/${level}`} style={{ display: 'block', textDecoration: 'none' }} className="lang-level-card">
                <article style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '200px', cursor: 'pointer' }}>
                  {/* Image de fond */}
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: imagePos, transition: 'transform 400ms ease-out' }} className="lang-level-img" />
                  {/* Overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: gradient }} />
                  {/* Contenu */}
                  <div style={{ position: 'relative', zIndex: 2, height: '100%', padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    {/* Top row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '11px', fontWeight: 600, padding: '4px 12px', borderRadius: '100px', background: 'rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.92)', letterSpacing: '.05em', backdropFilter: 'blur(4px)' }}>
                        {badge}
                      </span>
                      {pct > 0 ? (
                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#fff', background: 'rgba(255,255,255,0.2)', padding: '3px 10px', borderRadius: '100px', backdropFilter: 'blur(4px)' }}>
                          {pct}%
                        </span>
                      ) : (
                        <ArrowRight size={18} color="rgba(255,255,255,0.6)" />
                      )}
                    </div>
                    {/* Bottom */}
                    <div>
                      <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '4px', letterSpacing: '-0.02em' }}>{label}</h2>
                      <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', marginBottom: '10px', lineHeight: 1.4 }}>{desc}</p>
                      {pct > 0 && (
                        <div style={{ height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '100px', overflow: 'hidden', marginBottom: '10px' }}>
                          <div style={{ height: '100%', width: `${pct}%`, background: '#fff', borderRadius: '100px', transition: 'width 0.4s ease' }} />
                        </div>
                      )}
                      <div style={{ display: 'flex', gap: '16px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'rgba(255,255,255,0.65)' }}>
                          <BookOpen size={11} />{modules.length} modules
                        </span>
                        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)' }}>{lessonCount} leçons</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* Examens blancs */}
        <div style={{ marginTop: '48px' }}>
          <h2 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '16px' }}>
            Examens blancs
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {examenModules.map((exam, i) => {
              const imgs = ['/images/modules/Ecole_-_Salle_de_Classe_2.jpg', '/images/modules/hemicycle-parlement-europeen.jpg', '/images/modules/palais-elysee.jpg'];
              const grads = ['linear-gradient(135deg,#001A70E0,#002395CC)', 'linear-gradient(135deg,#002395E0,#0057A8CC)', 'linear-gradient(135deg,#9F1239E0,#CC1A1ACC)'];
              return (
                <Link key={exam.slug} href={`/moduleslinguistiques/examens/${exam.slug}`} style={{ display: 'block', textDecoration: 'none' }} className="lang-level-card">
                  <article style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '110px', cursor: 'pointer' }}>
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${imgs[i]})`, backgroundSize: 'cover', backgroundPosition: 'center 30%', transition: 'transform 400ms ease-out' }} className="lang-level-img" />
                    <div style={{ position: 'absolute', inset: 0, background: grads[i] }} />
                    <div style={{ position: 'relative', zIndex: 2, padding: '16px 20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <ListChecks size={16} color="rgba(255,255,255,0.7)" />
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '2px' }}>{exam.title}</div>
                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.72)' }}>{exam.subtitle}</div>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .lang-level-card article { transition: box-shadow 300ms ease-out, transform 300ms ease-out; }
        .lang-level-card:hover article { box-shadow: 0 20px 60px rgba(0,0,0,0.25); transform: translateY(-2px); }
        .lang-level-card:hover .lang-level-img { transform: scale(1.04); }
      `}</style>
    </div>
  );
}
