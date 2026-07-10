export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { Lock, CheckCircle, Clock, ChevronRight, BookOpen, ListChecks } from 'lucide-react';
import { a2Modules, b1Modules, b2Modules, transversalModules, examenModules } from '@/data/langue';
import type { LangModule } from '@/data/langue/types';
import { isAdminEmail } from '@/lib/admin';

const MODULE_IMAGE: Record<string, string> = {
  'a2-vie-quotidienne': '/images/modules/vie-en-france.jpg',
  'a2-demarches-admin': '/images/modules/Mairie-de-Paris-l-hotel-de-toutes-les-batailles.jpg',
  'a2-logement': '/images/modules/Blv-haussmann-lafayette.jpg',
  'a2-travail': '/images/modules/Ecole_-_Salle_de_Classe_2.jpg',
  'a2-sante': '/images/modules/fronton-hotel-dieu.jpg',
  'a2-transports': '/images/modules/Caillebotte_Rue_de_Paris.jpg',
  'a2-grammaire': '/images/modules/Ecole_-_Salle_de_Classe_2.jpg',
  'a2-conjugaison': '/images/modules/serment-du-jeu-de-paume.jpg',
  'b1-actualite': '/images/modules/hemicycle-parlement-europeen.jpg',
  'b1-exprimer-opinion': '/images/modules/serment-du-jeu-de-paume.jpg',
  'b1-vie-societe': '/images/modules/vie-en-france.jpg',
  'b1-institutions': '/images/modules/palais-elysee.jpg',
  'b1-rediger': '/images/modules/Ecole_-_Salle_de_Classe_2.jpg',
  'b1-entretien': '/images/modules/Ecole_-_Salle_de_Classe_2.jpg',
  'b1-travail-droits': '/images/modules/Droit-de-vote-des-femmes-70-ans-deja.jpg',
  'b1-grammaire': '/images/modules/Ecole_-_Salle_de_Classe_2.jpg',
  'b1-conjugaison': '/images/modules/biographie-jules-ferry.jpg',
  'b2-textes-argumentatifs': '/images/modules/serment-du-jeu-de-paume.jpg',
  'b2-debat-formel': '/images/modules/hemicycle-parlement-europeen.jpg',
  'b2-expression-ecrite': '/images/modules/Ecole_-_Salle_de_Classe_2.jpg',
  'b2-nuances-culturelles': '/images/modules/tour-eiffel.jpg',
  'b2-entretien-naturalisation': '/images/modules/palais-elysee.jpg',
  'b2-lettres-formelles': '/images/modules/Mairie-de-Paris-l-hotel-de-toutes-les-batailles.jpg',
  'b2-grammaire': '/images/modules/Ecole_-_Salle_de_Classe_2.jpg',
  'b2-conjugaison': '/images/modules/serment-du-jeu-de-paume.jpg',
  'transversal-phonetique': '/images/modules/notre-dame-paris.jpg',
  'transversal-orthographe': '/images/modules/Ecole_-_Salle_de_Classe_2.jpg',
  'transversal-erreurs': '/images/modules/Ecole_-_Salle_de_Classe_2.jpg',
  'examen-blanc-a2': '/images/modules/Ecole_-_Salle_de_Classe_2.jpg',
  'examen-blanc-b1': '/images/modules/hemicycle-parlement-europeen.jpg',
  'examen-blanc-b2': '/images/modules/palais-elysee.jpg',
};

const LEVEL_DATA: Record<string, { title: string; subtitle: string; color: string; colorEnd: string; bg: string; gradient: string; image: string; imagePos: string; overlayGradient: string; modules: LangModule[] }> = {
  a2: { title: 'A2 — Découverte', subtitle: 'Carte de séjour pluriannuelle / OFII', color: '#002395', colorEnd: '#001A70', bg: '#E6EEF9', gradient: 'linear-gradient(135deg, #001A70 0%, #002395 100%)', image: '/images/modules/Mairie-de-Paris-l-hotel-de-toutes-les-batailles.jpg', imagePos: 'center 40%', overlayGradient: 'linear-gradient(135deg, rgba(0,26,112,0.88) 0%, rgba(0,35,149,0.85) 100%)', modules: a2Modules },
  b1: { title: 'B1 — Intermédiaire', subtitle: 'Carte de résident / DELF · TEF', color: '#0057A8', colorEnd: '#002395', bg: '#EFF6FF', gradient: 'linear-gradient(135deg, #002395 0%, #0057A8 100%)', image: '/images/modules/hemicycle-parlement-europeen.jpg', imagePos: 'center 35%', overlayGradient: 'linear-gradient(135deg, rgba(0,35,149,0.88) 0%, rgba(0,87,168,0.85) 100%)', modules: b1Modules },
  b2: { title: 'B2 — Avancé', subtitle: 'Naturalisation (depuis 2026)', color: '#CC1A1A', colorEnd: '#9F1239', bg: '#FEF2F2', gradient: 'linear-gradient(135deg, #9F1239 0%, #CC1A1A 100%)', image: '/images/modules/palais-elysee.jpg', imagePos: 'center 30%', overlayGradient: 'linear-gradient(135deg, rgba(159,18,57,0.88) 0%, rgba(204,26,26,0.85) 100%)', modules: b2Modules },
  transversal: { title: 'Transversal — Tous niveaux', subtitle: 'Phonétique, orthographe, erreurs fréquentes', color: '#7C3AED', colorEnd: '#6D28D9', bg: '#F5F3FF', gradient: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 100%)', image: '/images/modules/Ecole_-_Salle_de_Classe_2.jpg', imagePos: 'center 20%', overlayGradient: 'linear-gradient(135deg, rgba(109,40,217,0.88) 0%, rgba(147,51,234,0.85) 100%)', modules: transversalModules },
  examens: { title: 'Examens blancs', subtitle: 'Simulations OFII, DELF/TEF, naturalisation', color: '#CC1A1A', colorEnd: '#7F1D1D', bg: '#FEF2F2', gradient: 'linear-gradient(135deg, #7F1D1D 0%, #CC1A1A 100%)', image: '/images/modules/hemicycle-parlement-europeen.jpg', imagePos: 'center 30%', overlayGradient: 'linear-gradient(135deg, rgba(127,29,29,0.88) 0%, rgba(204,26,26,0.85) 100%)', modules: examenModules },
};

interface Props { params: Promise<{ level: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level } = await params;
  const data = LEVEL_DATA[level];
  if (!data) return {};
  return {
    title: `${data.title} — Cours de français | maformationcivique.fr`,
    description: `${data.subtitle}. Leçons de français avec dialogues, points de grammaire et exercices corrigés.`,
    alternates: { canonical: `https://www.maformationcivique.fr/moduleslinguistiques/${level}` },
  };
}

export default async function LangueLevelPage({ params }: Props) {
  const { level } = await params;
  const data = LEVEL_DATA[level];
  if (!data) notFound();

  let hasAccess = false;
  let completedSlugs = new Set<string>();
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
        const [profileRes, progressionRes] = await Promise.all([
          supabase.from('users').select('plan').eq('id', user.id).single(),
          supabase.from('progression').select('lesson_slug').eq('user_id', user.id).eq('completed', true),
        ]);
        hasAccess = profileRes.data?.plan === 'premium' || profileRes.data?.plan === 'langue' || profileRes.data?.plan === 'bundle';
        if (isAdminEmail(user.email)) hasAccess = true;
        completedSlugs = new Set((progressionRes.data ?? []).map((p: { lesson_slug: string }) => p.lesson_slug));
      }
    }
  } catch { /* Supabase indisponible */ }

  const totalLessons = data.modules.reduce((a, m) => a + m.lessons.length, 0);
  const totalDuration = data.modules.reduce((a, m) => a + m.lessons.reduce((s, l) => s + l.duration, 0), 0);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-off-white)' }}>
      {/* Hero */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${data.image})`, backgroundSize: 'cover', backgroundPosition: data.imagePos }} />
        <div style={{ position: 'absolute', inset: 0, background: data.overlayGradient }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '3rem 1.5rem 2.5rem' }}>
        <div className="container">
          <nav style={{ display: 'flex', gap: '6px', marginBottom: '16px', fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.7)' }}>
            <Link href="/moduleslinguistiques" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Cours de français</Link>
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
      </div>

      {/* Modules */}
      <div className="container" style={{ padding: '36px 24px 64px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {data.modules.map((mod, modIdx) => {
            const imgSrc = MODULE_IMAGE[mod.slug] ?? '/images/modules/Ecole_-_Salle_de_Classe_2.jpg';
            const freeLessons = mod.lessons.filter((l) => l.free).length;
            const modCompleted = mod.lessons.filter((l) => completedSlugs.has(l.slug)).length;
            const modTotal = mod.lessons.length;
            const modPct = modTotal > 0 ? Math.round((modCompleted / modTotal) * 100) : 0;
            const modDone = modCompleted === modTotal && modTotal > 0;

            return (
              <div key={mod.slug} style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-card)', border: modDone ? `1.5px solid #16A34A` : 'var(--border-default)' }}>
                {/* Header image + overlay */}
                <div style={{ position: 'relative', height: 130, overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${data.color}E8 0%, ${data.colorEnd}D0 100%)` }} />
                  <div style={{ position: 'relative', zIndex: 2, padding: '20px 24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: 48, fontWeight: 800, color: 'rgba(255,255,255,0.2)', lineHeight: 1 }}>
                        {String(modIdx + 1).padStart(2, '0')}
                      </span>
                      {modDone ? (
                        <span style={{ fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 100, background: '#16A34A', color: '#fff', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: 5 }}>
                          <CheckCircle size={12} /> Module terminé
                        </span>
                      ) : (
                        <span style={{
                          fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 100,
                          background: freeLessons > 0 && !hasAccess ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.15)',
                          color: freeLessons > 0 && !hasAccess ? data.color : 'rgba(255,255,255,0.9)',
                          letterSpacing: '0.05em', textTransform: 'uppercase' as const, backdropFilter: 'blur(4px)',
                        }}>
                          {freeLessons > 0 && !hasAccess ? `${freeLessons} gratuite${freeLessons > 1 ? 's' : ''}` : hasAccess ? 'Débloqué' : 'Premium'}
                        </span>
                      )}
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                        <h2 style={{ fontSize: 17, fontWeight: 700, color: '#fff', margin: 0 }}>{mod.title}</h2>
                      </div>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.72)', margin: 0 }}>{mod.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Barre de progression */}
                {hasAccess && modCompleted > 0 && (
                  <div style={{ background: modDone ? '#F0FDF4' : '#F8FAFC', padding: '8px 22px', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ flex: 1, height: 6, background: '#E2E8F0', borderRadius: 100, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${modPct}%`, background: modDone ? '#16A34A' : data.color, borderRadius: 100, transition: 'width 0.4s ease' }} />
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: modDone ? '#16A34A' : data.color, whiteSpace: 'nowrap' }}>
                      {modDone ? '✓ Terminé' : `${modCompleted}/${modTotal}`}
                    </span>
                  </div>
                )}

                {/* Leçons */}
                <div style={{ background: '#fff' }}>
                  {mod.lessons.map((lesson, i) => {
                    const locked = !lesson.free && !hasAccess;
                    const done = completedSlugs.has(lesson.slug);
                    return (
                      <Link
                        key={lesson.slug}
                        href={`/moduleslinguistiques/${level}/${level === 'examens' ? mod.slug : lesson.slug}`}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '12px',
                          padding: '13px 22px', textDecoration: 'none',
                          borderTop: 'var(--border-default)',
                          background: done ? '#F0FDF4' : undefined,
                        }}
                        className="lang-lesson-row"
                      >
                        <span style={{ fontSize: 11, color: done ? '#16A34A' : 'var(--color-text-muted)', width: 20, flexShrink: 0, fontWeight: 600 }}>{i + 1}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 14, fontWeight: 500, color: locked ? 'var(--color-text-muted)' : done ? '#15803D' : 'var(--color-text-primary)' }}>{lesson.title}</div>
                          <div style={{ fontSize: 11, color: 'var(--color-text-muted)', marginTop: 1 }}>{lesson.duration} min · {lesson.exercises.length} exercices</div>
                        </div>
                        {done
                          ? <CheckCircle size={14} color="#16A34A" style={{ flexShrink: 0 }} />
                          : lesson.free
                            ? <span style={{ fontSize: 11, fontWeight: 600, color: '#16A34A', background: '#F0FDF4', padding: '3px 10px', borderRadius: 100, flexShrink: 0 }}>Gratuit</span>
                            : locked
                              ? <Lock size={13} color="var(--color-text-muted)" style={{ flexShrink: 0 }} />
                              : null}
                        <ChevronRight size={13} color="var(--color-text-muted)" style={{ flexShrink: 0 }} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {level !== 'examens' && (
          <div style={{ marginTop: '28px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-card)', border: 'var(--border-default)' }}>
            <div style={{ position: 'relative', padding: '22px 24px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', background: '#fff' }}>
              <div style={{ width: 42, height: 42, borderRadius: '50%', background: data.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ListChecks size={18} color={data.color} />
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', margin: 0 }}>Prêt à tester votre niveau {level.toUpperCase()} ?</p>
                <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: '2px 0 0' }}>Passez l&apos;examen blanc en conditions réelles.</p>
              </div>
              <Link href={`/moduleslinguistiques/examens/examen-blanc-${level}`} style={{ background: data.color, color: '#fff', padding: '9px 18px', borderRadius: 'var(--radius-md)', fontSize: 13, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                Examen blanc →
              </Link>
            </div>
          </div>
        )}

        {!hasAccess && level !== 'examens' && (
          <div style={{ marginTop: '16px', background: 'var(--gradient-primary)', borderRadius: 'var(--radius-lg)', padding: '18px 22px', color: '#fff', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Lock size={20} style={{ flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>Débloquez toutes les leçons de français</p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', margin: '2px 0 0' }}>Accès illimité à tous les niveaux A2, B1, B2 et aux examens blancs.</p>
            </div>
            <Link href="/inscription?plan=langue" style={{ background: '#fff', color: 'var(--color-blue-france)', padding: '8px 16px', borderRadius: 'var(--radius-md)', fontSize: 13, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Voir les offres →
            </Link>
          </div>
        )}
      </div>

      <style>{`.lang-lesson-row:hover { background: var(--color-off-white) !important; }`}</style>
    </div>
  );
}
