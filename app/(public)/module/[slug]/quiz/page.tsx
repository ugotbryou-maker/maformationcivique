import { notFound } from 'next/navigation';
import Link from 'next/link';
import { modules } from '@/data/modules';
import { moduleQuizzes } from '@/data/exercises';
import { ModuleQuiz } from '@/components/app/ModuleQuiz';
import { ArrowLeft, Clock, HelpCircle, Trophy } from 'lucide-react';
import type { Metadata } from 'next';

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mod = modules.find((m) => m.slug === slug);
  return mod
    ? { title: `Quiz — ${mod.title} — maformationcivique.fr` }
    : {};
}

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export default async function ModuleQuizPage({ params }: Props) {
  const { slug } = await params;
  const mod = modules.find((m) => m.slug === slug);
  if (!mod) notFound();

  const questions = moduleQuizzes[slug];
  const hasQuiz = questions && questions.length > 0;

  return (
    <div style={{ background: '#F0F0F0', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ background: '#fff', borderBottom: 'var(--border-default)', padding: '24px 0' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <Link
            href={`/module/${mod.slug}`}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)',
              textDecoration: 'none', marginBottom: '16px',
            }}
          >
            <ArrowLeft size={14} /> Retour au module
          </Link>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-blue-france)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                Module {mod.num} · Quiz de fin de module
              </p>
              <h1 style={{ fontSize: 'clamp(22px, 4vw, 34px)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '6px' }}>
                {mod.title}
              </h1>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                {mod.subtitle}
              </p>
            </div>
          </div>

          {/* Infos quiz */}
          {hasQuiz && (
            <div style={{ display: 'flex', gap: '20px', marginTop: '16px', flexWrap: 'wrap' }}>
              {[
                { icon: HelpCircle, label: `${questions.length} questions` },
                { icon: Clock, label: 'Environ 5 minutes' },
                { icon: Trophy, label: 'Seuil : 80%' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                  <Icon size={14} color="var(--color-blue-france)" />
                  {label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Contenu */}
      {hasQuiz ? (
        <ModuleQuiz
          questions={questions}
          moduleTitle={mod.title}
          moduleSlug={mod.slug}
        />
      ) : (
        <div style={{ textAlign: 'center', padding: '80px 24px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚧</div>
          <h2 style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-primary)', marginBottom: '12px' }}>
            Quiz en cours de préparation
          </h2>
          <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', maxWidth: '400px', margin: '0 auto 28px' }}>
            Le quiz pour ce module sera disponible très prochainement. Revenez dans quelques jours !
          </p>
          <Link href={`/module/${mod.slug}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'var(--color-blue-france)', color: '#fff',
            padding: '12px 24px', borderRadius: 'var(--radius-md)',
            textDecoration: 'none', fontWeight: 600, fontSize: 'var(--font-size-base)',
          }}>
            <ArrowLeft size={15} /> Retour au module
          </Link>
        </div>
      )}
    </div>
  );
}
