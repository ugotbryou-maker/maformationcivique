'use client';

import Link from 'next/link';
import { modules } from '@/data/modules';
import { a2Modules, b1Modules, b2Modules, transversalModules } from '@/data/langue';
import { BookOpen, Clock, Lock, ArrowRight, CheckCircle } from 'lucide-react';
import { GuillemetDecor } from '@/components/ui/BrandIcon';
import { useEffect, useState } from 'react';

interface ModuleProgress { completed: number; total: number; percent: number; }
type ProgressMap = Record<string, ModuleProgress>;

const MODULE_CONFIG = [
  { slug: 'republique',    image: '/images/modules/republique.jpg',    color: '#DC2626', colorEnd: '#991B1B', position: 'center 8%'  },
  { slug: 'droits',        image: '/images/modules/Droits.png',         color: '#002395', colorEnd: '#001A70', position: 'center 35%' },
  { slug: 'institutions',  image: '/images/modules/institutions.jpg',  color: '#1E3A8A', colorEnd: '#1E40AF', position: 'center 20%' },
  { slug: 'histoire',      image: '/images/modules/histoire.jpg',      color: '#065F46', colorEnd: '#059669', position: 'center 30%' },
  { slug: 'vie-en-france', image: '/images/modules/vie-en-france.jpg', color: '#0E7490', colorEnd: '#0891B2', position: 'center 40%' },
];

const LANG_LEVELS = [
  {
    level: 'a2',
    label: 'Niveau A2',
    subtitle: 'Vie quotidienne · Démarches administratives',
    color: '#059669', colorEnd: '#047857',
    image: '/images/modules/Ecole_-_Salle_de_Classe_2.jpg',
    modules: a2Modules,
  },
  {
    level: 'b1',
    label: 'Niveau B1',
    subtitle: 'Actualité · Société · Institutions',
    color: '#1D4ED8', colorEnd: '#1E3A8A',
    image: '/images/modules/hemicycle-parlement-europeen.jpg',
    modules: b1Modules,
  },
  {
    level: 'b2',
    label: 'Niveau B2',
    subtitle: 'Expression avancée · Argumentation',
    color: '#6D28D9', colorEnd: '#5B21B6',
    image: '/images/modules/chateau-versailles.jpg',
    modules: b2Modules,
  },
  {
    level: 'transversal',
    label: 'Transversal',
    subtitle: 'Phonétique · Orthographe · Erreurs fréquentes',
    color: '#D97706', colorEnd: '#B45309',
    image: '/images/modules/Blv-haussmann-lafayette.jpg',
    modules: transversalModules,
  },
];

export function ModulesSection() {
  const [tab, setTab] = useState<'civique' | 'langue'>('civique');
  const [progress, setProgress] = useState<ProgressMap>({});

  useEffect(() => {
    fetch('/api/progress/summary')
      .then((r) => r.ok ? r.json() : {})
      .then(setProgress)
      .catch(() => {});
  }, []);

  return (
    <section style={{ background: 'var(--color-off-white)', padding: '80px 0' }} id="modules">
      <div className="container" style={{ padding: '0 24px' }}>

        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: '40px', position: 'relative' }}>
          {/* Guillemets décoratifs */}
          <GuillemetDecor side="left"  size={110} color="#002395" opacity={0.07} style={{ position: 'absolute', top: '-24px', left: 0 }} />
          <GuillemetDecor side="right" size={110} color="#DC2626" opacity={0.07} style={{ position: 'absolute', top: '-24px', right: 0 }} />
          <p style={{
            fontSize: 'var(--font-size-xs)', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.08em',
            color: 'var(--color-blue-france)', marginBottom: '10px',
          }}>
            Programme complet
          </p>
          <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '24px' }}>
            Nos modules de formation
          </h2>

          {/* Tab switch */}
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'var(--color-border)',
            borderRadius: 'var(--radius-pill)',
            padding: '4px', gap: '4px',
          }}>
            {(['civique', 'langue'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  padding: '9px 28px',
                  borderRadius: 'var(--radius-pill)',
                  background: tab === t ? '#fff' : 'transparent',
                  border: 'none', cursor: 'pointer',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: tab === t ? 700 : 400,
                  color: tab === t ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                  boxShadow: tab === t ? 'var(--shadow-card)' : 'none',
                  transition: 'all 180ms ease',
                  fontFamily: 'var(--font-sans)',
                  whiteSpace: 'nowrap',
                }}
              >
                {t === 'civique' ? 'Formation civique' : 'Langue française'}
              </button>
            ))}
          </div>
        </div>

        {/* ── Grille Civique ── */}
        {tab === 'civique' && (
          <>
            <div className="modules-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {modules.map((mod) => {
                const config = MODULE_CONFIG.find((c) => c.slug === mod.slug) ?? MODULE_CONFIG[0];
                const totalDuration = mod.lessons.reduce((acc, l) => acc + l.duration, 0);
                const prog = progress[mod.slug];

                return (
                  <Link key={mod.id} href={`/module/${mod.slug}`} style={{ textDecoration: 'none' }}>
                    <article className="mod-card" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '180px', cursor: 'pointer' }}>
                      <div className="mod-card-img" style={{ position: 'absolute', inset: 0, backgroundImage: `url(${config.image})`, backgroundSize: 'cover', backgroundPosition: config.position, transition: 'transform 400ms ease-out' }} />
                      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${config.color}E8 0%, ${config.colorEnd}CC 100%)` }} />
                      <div style={{ position: 'relative', zIndex: 2, height: '100%', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <span style={{ fontSize: '42px', fontWeight: 700, color: 'rgba(255,255,255,0.2)', lineHeight: 1 }}>{mod.num}</span>
                          {mod.freeAccess ? (
                            <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 10px', borderRadius: '100px', background: 'rgba(255,255,255,0.95)', color: config.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Gratuit</span>
                          ) : (
                            <span style={{ fontSize: '10px', fontWeight: 600, padding: '3px 10px', borderRadius: '100px', background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '3px', backdropFilter: 'blur(4px)' }}>
                              <Lock size={9} /> Premium
                            </span>
                          )}
                        </div>
                        <div>
                          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF', marginBottom: '4px', lineHeight: 1.3 }}>{mod.title}</h3>
                          {prog && prog.completed > 0 && (
                            <div style={{ marginBottom: '7px' }}>
                              <div style={{ height: '3px', background: 'rgba(255,255,255,0.2)', borderRadius: '100px', overflow: 'hidden', marginBottom: '4px' }}>
                                <div style={{ height: '100%', width: `${prog.percent}%`, background: prog.percent === 100 ? '#4ADE80' : 'rgba(255,255,255,0.85)', borderRadius: '100px' }} />
                              </div>
                              <span style={{ fontSize: '10px', color: prog.percent === 100 ? '#4ADE80' : 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                                {prog.percent === 100 ? <><CheckCircle size={10} /> Terminé</> : `${prog.completed}/${prog.total} leçons`}
                              </span>
                            </div>
                          )}
                          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', gap: '10px' }}>
                              {[
                                { icon: <BookOpen size={10} />, label: `${mod.lessons.length} leçons` },
                                { icon: <Clock size={10} />, label: `${totalDuration} min` },
                              ].map(({ icon, label }) => (
                                <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '11px', color: 'rgba(255,255,255,0.65)' }}>{icon}{label}</span>
                              ))}
                            </div>
                            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '3px' }}>Commencer <ArrowRight size={10} /></span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link href="/modulesciviques" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-blue-france)', fontWeight: 600, fontSize: 'var(--font-size-base)', textDecoration: 'none', border: '1.5px solid var(--color-blue-france)', padding: '12px 28px', borderRadius: 'var(--radius-md)' }}>
                Voir tous les modules civiques <ArrowRight size={15} />
              </Link>
            </div>
          </>
        )}

        {/* ── Grille Langue ── */}
        {tab === 'langue' && (
          <>
            <div className="lang-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
              {LANG_LEVELS.map((lvl) => {
                const lessonCount = lvl.modules.reduce((s, m) => s + m.lessons.length, 0);
                return (
                  <Link key={lvl.level} href={`/moduleslinguistiques/${lvl.level}`} style={{ textDecoration: 'none' }}>
                    <article className="mod-card" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '180px', cursor: 'pointer' }}>
                      <div className="mod-card-img" style={{ position: 'absolute', inset: 0, backgroundImage: `url(${lvl.image})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 400ms ease-out' }} />
                      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${lvl.color}EC 0%, ${lvl.colorEnd}CC 100%)` }} />
                      <div style={{ position: 'relative', zIndex: 2, height: '100%', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <span style={{ fontSize: '32px', fontWeight: 800, color: 'rgba(255,255,255,0.22)', lineHeight: 1, letterSpacing: '-0.02em' }}>{lvl.level.toUpperCase()}</span>
                          <span style={{ fontSize: '10px', fontWeight: 600, padding: '3px 10px', borderRadius: '100px', background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: '0.05em', backdropFilter: 'blur(4px)' }}>
                            Langue
                          </span>
                        </div>
                        <div>
                          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px', lineHeight: 1.3 }}>{lvl.label}</h3>
                          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px', lineHeight: 1.3 }}>{lvl.subtitle}</p>
                          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', gap: '10px' }}>
                              <span style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '11px', color: 'rgba(255,255,255,0.65)' }}><BookOpen size={10} />{lvl.modules.length} modules</span>
                              <span style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '11px', color: 'rgba(255,255,255,0.65)' }}><Clock size={10} />{lessonCount} leçons</span>
                            </div>
                            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '3px' }}>Explorer <ArrowRight size={10} /></span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link href="/moduleslinguistiques" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-blue-france)', fontWeight: 600, fontSize: 'var(--font-size-base)', textDecoration: 'none', border: '1.5px solid var(--color-blue-france)', padding: '12px 28px', borderRadius: 'var(--radius-md)' }}>
                Voir tous les modules linguistiques <ArrowRight size={15} />
              </Link>
            </div>
          </>
        )}
      </div>

      <style>{`
        .mod-card:hover .mod-card-img { transform: scale(1.04); }
        .mod-card { transition: box-shadow 300ms ease-out, transform 300ms ease-out; }
        .mod-card:hover { box-shadow: 0 16px 48px rgba(0,0,0,0.2); transform: translateY(-2px); }
        @media (max-width: 1024px) { .modules-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px)  { .modules-grid { grid-template-columns: 1fr !important; } .lang-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
