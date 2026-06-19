import Link from 'next/link';
import { redirect, notFound } from 'next/navigation';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { modules } from '@/data/modules';
import { CabinetMemberActions } from '@/components/app/CabinetMemberActions';
import { ArrowLeft, CheckCircle2, Circle, Trophy, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Détail client — Espace cabinet' };

export default async function CabinetMemberPage({
  params,
}: {
  params: { userId: string };
}) {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/connexion');

  // Vérif admin
  const { data: adminProfile } = await supabase
    .from('users')
    .select('cabinet_id, cabinet_role')
    .eq('id', user.id)
    .single();

  if (!adminProfile?.cabinet_id || adminProfile.cabinet_role !== 'admin') {
    redirect('/dashboard');
  }

  const service = createServiceRoleClient();

  // Charge le profil du membre
  const { data: member } = await service
    .from('users')
    .select('id, name, email, plan, cabinet_role, cabinet_id, xp, streak_days, last_active')
    .eq('id', params.userId)
    .single();

  if (!member || member.cabinet_id !== adminProfile.cabinet_id) notFound();

  // Progression par leçon
  const { data: progress } = await service
    .from('progression')
    .select('module_slug, lesson_slug, completed')
    .eq('user_id', params.userId);

  const completedSet = new Set(
    (progress ?? []).filter((p) => p.completed).map((p) => `${p.module_slug}:${p.lesson_slug}`)
  );

  const totalLessons = modules.reduce((a, m) => a + m.lessons.length, 0);
  const totalCompleted = completedSet.size;
  const globalPct = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

  const isAdmin = member.cabinet_role === 'admin';

  return (
    <div style={{ maxWidth: 760 }}>
      {/* Retour */}
      <Link
        href="/cabinet"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)',
          textDecoration: 'none', marginBottom: 24,
        }}
      >
        <ArrowLeft size={15} /> Retour au cabinet
      </Link>

      {/* Header membre */}
      <div style={{
        background: 'var(--color-surface)', border: 'var(--border-default)',
        borderRadius: 'var(--radius-xl)', padding: '24px', marginBottom: 24,
        display: 'flex', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap',
      }}>
        <div style={{
          width: 52, height: 52, flexShrink: 0, borderRadius: '50%',
          background: 'var(--gradient-primary)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 20, fontWeight: 800, color: '#fff',
        }}>
          {(member.name || member.email || 'U')[0].toUpperCase()}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontWeight: 700, fontSize: 18, color: 'var(--color-text-primary)', marginBottom: 4 }}>
            {member.name || member.email}
          </p>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: 12 }}>
            {member.email} · {isAdmin ? 'Administrateur' : 'Client'}
          </p>
          {/* Stats rapides */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {[
              { icon: BookOpen, label: `${totalCompleted} / ${totalLessons} leçons`, color: 'var(--color-blue-france)' },
              { icon: Trophy, label: `${member.xp ?? 0} XP`, color: '#F59E0B' },
            ].map(({ icon: Icon, label, color }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: 6,
                background: 'var(--color-off-white)', borderRadius: 'var(--radius-pill)',
                padding: '5px 12px', fontSize: 'var(--font-size-sm)', fontWeight: 500,
                color: 'var(--color-text-secondary)',
              }}>
                <Icon size={14} color={color} /> {label}
              </div>
            ))}
            {/* Badge progression */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: globalPct >= 80 ? '#ECFDF5' : 'var(--color-off-white)',
              borderRadius: 'var(--radius-pill)', padding: '5px 12px',
              fontSize: 'var(--font-size-sm)', fontWeight: 600,
              color: globalPct >= 80 ? '#1D9E75' : 'var(--color-text-secondary)',
            }}>
              {globalPct >= 80 ? '✓ Prêt pour l\'entretien' : `${globalPct}% global`}
            </div>
          </div>
        </div>

        {/* Actions (client component) */}
        {!isAdmin && (
          <CabinetMemberActions userId={params.userId} memberEmail={member.email ?? ''} />
        )}
      </div>

      {/* Progression par module */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {modules.map((mod) => {
          const modCompleted = mod.lessons.filter((l) =>
            completedSet.has(`${mod.slug}:${l.slug}`)
          ).length;
          const modPct = mod.lessons.length > 0
            ? Math.round((modCompleted / mod.lessons.length) * 100)
            : 0;

          return (
            <div key={mod.slug} style={{
              background: 'var(--color-surface)', border: 'var(--border-default)',
              borderRadius: 'var(--radius-xl)', overflow: 'hidden',
            }}>
              {/* En-tête module */}
              <div style={{
                padding: '16px 20px',
                borderBottom: mod.lessons.length > 0 ? 'var(--border-default)' : 'none',
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontWeight: 600, fontSize: 14, color: 'var(--color-text-primary)', marginBottom: 6 }}>
                    {mod.title}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ flex: 1, height: 5, borderRadius: 99, background: 'var(--color-border)', overflow: 'hidden' }}>
                      <div style={{
                        height: '100%', width: `${modPct}%`,
                        background: modPct === 100 ? '#1D9E75' : 'var(--gradient-primary)',
                        borderRadius: 99, transition: 'width 400ms ease',
                      }} />
                    </div>
                    <span style={{
                      fontSize: 12, fontWeight: 700, flexShrink: 0,
                      color: modPct === 100 ? '#1D9E75' : 'var(--color-text-muted)',
                    }}>
                      {modCompleted}/{mod.lessons.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Leçons */}
              <div style={{ padding: '8px 0' }}>
                {mod.lessons.map((lesson) => {
                  const done = completedSet.has(`${mod.slug}:${lesson.slug}`);
                  return (
                    <div key={lesson.slug} style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '8px 20px',
                    }}>
                      {done
                        ? <CheckCircle2 size={15} color="#1D9E75" />
                        : <Circle size={15} color="var(--color-border)" />
                      }
                      <span style={{
                        fontSize: 'var(--font-size-sm)',
                        color: done ? 'var(--color-text-secondary)' : 'var(--color-text-muted)',
                        textDecoration: done ? 'none' : 'none',
                      }}>
                        {lesson.title}
                      </span>
                      {done && (
                        <span style={{
                          marginLeft: 'auto', fontSize: 11, fontWeight: 600,
                          color: '#1D9E75', background: '#ECFDF5',
                          padding: '2px 8px', borderRadius: 'var(--radius-pill)',
                        }}>
                          ✓
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
