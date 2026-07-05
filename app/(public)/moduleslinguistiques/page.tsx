import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, BookOpen, Clock, ListChecks, GraduationCap } from 'lucide-react';
import { a2Modules, b1Modules, b2Modules, transversalModules, examenModules } from '@/data/langue';

export const metadata: Metadata = {
  title: 'Cours de français — A2, B1, B2 | maformationcivique.fr',
  description: 'Apprenez le français pour vos démarches administratives : leçons A2, B1, B2, modules transversaux (phonétique, orthographe) et examens blancs pour l\'OFII, le DELF/TEF et la naturalisation.',
  alternates: { canonical: 'https://maformationcivique.fr/langue' },
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
          {LEVELS.map(({ level, label, badge, desc, image, imagePos, gradient, color, modules }) => {
            const lessonCount = modules.reduce((a, m) => a + m.lessons.length, 0);
            return (
              <Link key={level} href={`/moduleslinguistiques/${level}`} style={{ textDecoration: 'none' }} className="lang-level-card">
                <article style={{ position: 'relative', borderRadius: 18, overflow: 'hidden', height: 170 }}>
                  {/* Filigrane */}
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: imagePos, transition: 'transform 400ms ease-out' }} className="lang-level-img" />
                  {/* Overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: gradient }} />
                  {/* Contenu */}
                  <div style={{ position: 'relative', zIndex: 2, padding: '22px 26px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 100, background: 'rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.92)', letterSpacing: '.05em', backdropFilter: 'blur(4px)' }}>
                        {badge}
                      </span>
                      <ArrowRight size={18} color="rgba(255,255,255,0.6)" />
                    </div>
                    <div>
                      <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', margin: '0 0 4px', letterSpacing: '-0.02em' }}>{label}</h2>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.78)', margin: '0 0 10px', lineHeight: 1.5, maxWidth: 480 }}>{desc}</p>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, color: 'rgba(255,255,255,0.85)' }}>
                        <BookOpen size={12} /> {modules.length} modules · {lessonCount} leçons
                      </span>
                    </div>
                  </div>
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
          {examenModules.map((exam, i) => {
            const imgs = ['/images/modules/Ecole_-_Salle_de_Classe_2.jpg', '/images/modules/hemicycle-parlement-europeen.jpg', '/images/modules/palais-elysee.jpg'];
            const grads = ['linear-gradient(135deg,#001A70E0,#002395CC)', 'linear-gradient(135deg,#002395E0,#0057A8CC)', 'linear-gradient(135deg,#9F1239E0,#CC1A1ACC)'];
            return (
              <Link key={exam.slug} href={`/moduleslinguistiques/examens/${exam.slug}`} style={{ textDecoration: 'none' }} className="lang-level-card">
                <article style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: 110 }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${imgs[i]})`, backgroundSize: 'cover', backgroundPosition: 'center 30%', transition: 'transform 400ms ease-out' }} className="lang-level-img" />
                  <div style={{ position: 'absolute', inset: 0, background: grads[i] }} />
                  <div style={{ position: 'relative', zIndex: 2, padding: '16px 20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <ListChecks size={16} color="rgba(255,255,255,0.7)" />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{exam.title}</div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.72)' }}>{exam.subtitle}</div>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
      <style>{`
        .lang-level-card:hover .lang-level-img { transform: scale(1.04); }
        .lang-level-card article { box-shadow: 0 4px 20px rgba(0,0,0,0.12); transition: box-shadow 300ms, transform 300ms; }
        .lang-level-card:hover article { box-shadow: 0 12px 40px rgba(0,0,0,0.22); transform: translateY(-2px); }
      `}</style>
    </div>
  );
}
