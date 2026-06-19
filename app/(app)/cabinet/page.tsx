import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { modules } from '@/data/modules';
import { CabinetInviteForm } from '@/components/app/CabinetInviteForm';
import { ProgressBar } from '@/components/app/ProgressBar';
import {
  Building2, Users, FileDown, AlertTriangle,
  ArrowUpRight, BarChart3, Award, ChevronRight,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Espace cabinet — maformationcivique.fr',
};

const TIER_LABELS: Record<string, string> = {
  starter: 'Starter',
  pro: 'Pro',
  cabinet_plus: 'Cabinet+',
  reseau: 'Réseau',
};

const TIER_NEXT: Record<string, { label: string; price: string }> = {
  starter:      { label: 'Pro',       price: '990 €/an' },
  pro:          { label: 'Cabinet+',  price: '1 990 €/an' },
  cabinet_plus: { label: 'Réseau',    price: 'sur devis' },
};

export default async function CabinetDashboardPage() {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/connexion');

  const { data: profile } = await supabase
    .from('users')
    .select('cabinet_id, cabinet_role')
    .eq('id', user.id)
    .single();

  if (!profile?.cabinet_id || profile.cabinet_role !== 'admin') {
    redirect('/dashboard');
  }

  const service = createServiceRoleClient();

  const { data: cabinet } = await service
    .from('cabinets')
    .select('*')
    .eq('id', profile.cabinet_id)
    .single();

  const { data: members } = await service
    .from('users')
    .select('id, name, email, plan, cabinet_role, xp, last_active')
    .eq('cabinet_id', profile.cabinet_id);

  const { data: pendingInvites } = await service
    .from('cabinet_invites')
    .select('id, email, created_at, role')
    .eq('cabinet_id', profile.cabinet_id)
    .is('redeemed_at', null);

  const memberIds = (members ?? []).map((m) => m.id);
  const { data: allProgress } = memberIds.length
    ? await service
        .from('progression')
        .select('user_id, module_slug, lesson_slug, completed')
        .in('user_id', memberIds)
    : { data: [] as { user_id: string; module_slug: string; lesson_slug: string; completed: boolean }[] };

  const totalLessons = modules.reduce((a, m) => a + m.lessons.length, 0);

  const progressByUser = new Map<string, number>();
  for (const member of members ?? []) {
    const userProgress = (allProgress ?? []).filter((p) => p.user_id === member.id && p.completed);
    const completed = new Set(userProgress.map((p) => `${p.module_slug}:${p.lesson_slug}`));
    const pct = totalLessons > 0 ? Math.round((completed.size / totalLessons) * 100) : 0;
    progressByUser.set(member.id, pct);
  }

  const maxInvitations = cabinet?.max_invitations ?? 0;
  const used = (members?.length ?? 0) + (pendingInvites?.length ?? 0);
  const quotaReached = maxInvitations > 0 && used >= maxInvitations;

  const subEndAt = cabinet?.sub_end_at ? new Date(cabinet.sub_end_at) : null;
  const now = new Date();
  const daysLeft = subEndAt ? Math.ceil((subEndAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) : null;
  const showExpiryBanner = daysLeft !== null && daysLeft < 30;

  // KPIs
  const activeMembers = (members ?? []).filter((m) => m.cabinet_role !== 'admin');
  const avgProgress = activeMembers.length > 0
    ? Math.round(activeMembers.reduce((sum, m) => sum + (progressByUser.get(m.id) ?? 0), 0) / activeMembers.length)
    : 0;
  const attestationsCount = activeMembers.filter((m) => (progressByUser.get(m.id) ?? 0) === 100).length;

  const nextTier = TIER_NEXT[cabinet?.tier ?? 'starter'];

  function formatLastActive(dateStr: string | null | undefined): string {
    if (!dateStr) return 'Jamais connecté';
    const d = new Date(dateStr);
    const diffDays = Math.floor((Date.now() - d.getTime()) / 86400000);
    if (diffDays === 0) return 'Aujourd\'hui';
    if (diffDays === 1) return 'Hier';
    if (diffDays < 7) return `Il y a ${diffDays}j`;
    if (diffDays < 30) return `Il y a ${Math.floor(diffDays / 7)}sem`;
    return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  }

  return (
    <div style={{ maxWidth: '900px' }}>

      {/* ── Header ──────────────────────────────────────────────────── */}
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '14px', flexWrap: 'wrap' }}>
        <div style={{
          width: 48, height: 48, borderRadius: 'var(--radius-lg)',
          background: 'var(--gradient-primary)', display: 'flex',
          alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <Building2 size={24} color="#fff" />
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)', marginBottom: '4px' }}>
            {cabinet?.name ?? 'Votre cabinet'}
          </h1>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
            Palier {TIER_LABELS[cabinet?.tier ?? 'starter'] ?? cabinet?.tier} · {used} / {maxInvitations} invitations utilisées
          </p>
        </div>
        {/* Upgrade */}
        {nextTier && (
          <a
            href={`mailto:contact@maformationcivique.fr?subject=Upgrade vers ${nextTier.label}`}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '8px 16px', borderRadius: 'var(--radius-pill)',
              background: 'var(--color-blue-light)',
              border: '1.5px solid var(--color-blue-france)',
              color: 'var(--color-blue-france)',
              fontSize: 'var(--font-size-xs)', fontWeight: 700,
              textDecoration: 'none', whiteSpace: 'nowrap',
            }}
          >
            <ArrowUpRight size={13} />
            Passer en {nextTier.label} — {nextTier.price}
          </a>
        )}
      </div>

      {/* ── KPI bar ─────────────────────────────────────────────────── */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12,
        marginBottom: 20,
      }}>
        {[
          { icon: Users,     value: activeMembers.length,  label: 'Clients actifs' },
          { icon: BarChart3, value: `${avgProgress}%`,     label: 'Progression moyenne' },
          { icon: Award,     value: attestationsCount,      label: 'Apprentissages effectués' },
        ].map(({ icon: Icon, value, label }) => (
          <div key={label} style={{
            background: 'var(--color-surface)', border: 'var(--border-default)',
            borderRadius: 'var(--radius-lg)', padding: '16px 18px',
            display: 'flex', gap: 12, alignItems: 'center',
          }}>
            <div style={{
              width: 36, height: 36, flexShrink: 0,
              borderRadius: 'var(--radius-md)', background: 'var(--color-blue-light)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon size={16} color="var(--color-blue-france)" />
            </div>
            <div>
              <p style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1 }}>{value}</p>
              <p style={{ fontSize: 11, color: 'var(--color-text-muted)', marginTop: 3 }}>{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Expiry banner ───────────────────────────────────────────── */}
      {showExpiryBanner && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '14px 18px', borderRadius: 'var(--radius-md)',
          background: '#FEF2F2', border: '1px solid #FECACA',
          color: '#B91C1C', fontSize: 'var(--font-size-sm)', marginBottom: '20px',
        }}>
          <AlertTriangle size={18} style={{ flexShrink: 0 }} />
          {daysLeft! < 0
            ? `Votre abonnement cabinet a expiré le ${subEndAt!.toLocaleDateString('fr-FR')}. Contactez-nous pour le renouveler.`
            : `Votre abonnement expire dans ${daysLeft} jour${daysLeft! > 1 ? 's' : ''} (${subEndAt!.toLocaleDateString('fr-FR')}). Contactez-nous pour le renouveler.`}
        </div>
      )}

      {/* ── Invite form ─────────────────────────────────────────────── */}
      <div style={{
        padding: '24px', borderRadius: 'var(--radius-xl)',
        background: 'var(--color-surface)', border: 'var(--border-default)',
        marginBottom: '20px',
      }}>
        <h2 style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-primary)', marginBottom: '4px' }}>
          Inviter un client
        </h2>
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
          Votre client recevra un email pour créer son compte Premium offert par {cabinet?.name ?? 'votre cabinet'}.
        </p>
        <CabinetInviteForm disabled={quotaReached} />
      </div>

      {/* ── Members table ───────────────────────────────────────────── */}
      <div style={{
        padding: '24px', borderRadius: 'var(--radius-xl)',
        background: 'var(--color-surface)', border: 'var(--border-default)',
      }}>
        <h2 style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Users size={18} /> Clients ({activeMembers.length})
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {(members ?? []).map((member) => {
            const pct = progressByUser.get(member.id) ?? 0;
            const isAdmin = member.cabinet_role === 'admin';
            return (
              <Link
                key={member.id}
                href={`/cabinet/membre/${member.id}`}
                className="cabinet-member-row"
                style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '14px', borderRadius: 'var(--radius-md)',
                  border: 'var(--border-default)', flexWrap: 'wrap',
                  textDecoration: 'none', cursor: 'pointer',
                  transition: 'background 150ms',
                }}
              >
                <div style={{ flex: '1 1 200px', minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2, flexWrap: 'wrap' }}>
                    <p style={{ fontWeight: 500, color: 'var(--color-text-primary)', margin: 0 }}>
                      {member.name || member.email}
                    </p>
                    {!isAdmin && pct >= 80 && (
                      <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.04em',
                        color: '#1D9E75', background: '#ECFDF5',
                        padding: '2px 8px', borderRadius: 'var(--radius-pill)',
                        border: '1px solid #A7F3D0', whiteSpace: 'nowrap',
                      }}>
                        ✓ Prêt pour l&apos;entretien
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    {member.email} · {isAdmin ? 'Administrateur' : 'Client'} · {formatLastActive((member as { last_active?: string }).last_active)}
                  </p>
                </div>
                {!isAdmin && (
                  <div style={{ flex: '1 1 160px', minWidth: 0 }}>
                    <ProgressBar value={pct} showPercent height={6} />
                  </div>
                )}
                <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {!isAdmin && (
                    <>
                      {/* XP badge */}
                      <span style={{
                        fontSize: 'var(--font-size-xs)', fontWeight: 600,
                        color: '#F59E0B', background: '#FFFBEB',
                        padding: '4px 10px', borderRadius: 'var(--radius-pill)',
                        border: '1px solid #FDE68A',
                      }}>
                        ⚡ {member.xp ?? 0} XP
                      </span>
                      {/* Statut / Attestation */}
                      <Link
                        href={`/api/cabinet/attestation/${member.id}`}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '6px',
                          padding: '8px 14px', borderRadius: 'var(--radius-pill)',
                          border: pct === 100 ? '1.5px solid #1D9E75' : 'var(--border-default)',
                          background: pct === 100 ? '#ECFDF5' : 'transparent',
                          fontSize: 'var(--font-size-xs)',
                          color: pct === 100 ? '#1D9E75' : 'var(--color-text-secondary)',
                          fontWeight: 600,
                          textDecoration: 'none', minHeight: '36px', whiteSpace: 'nowrap',
                        }}
                      >
                        {pct === 100 ? <><Award size={14} /> Apprentissage effectué</> : <><FileDown size={14} /> Attestation</>}
                      </Link>
                    </>
                  )}
                  <ChevronRight size={15} color="var(--color-text-muted)" />
                </div>
              </Link>
            );
          })}

          {/* Invitations en attente */}
          {(pendingInvites ?? []).map((invite) => (
            <div
              key={invite.id}
              style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                padding: '14px', borderRadius: 'var(--radius-md)',
                border: 'var(--border-default)', opacity: 0.65, flexWrap: 'wrap',
              }}
            >
              <div style={{ flex: '1 1 200px', minWidth: 0 }}>
                <p style={{ fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '2px' }}>
                  {invite.email}
                </p>
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                  Invité le {new Date(invite.created_at).toLocaleDateString('fr-FR')}
                </p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <span style={{
                  fontSize: 'var(--font-size-xs)', fontWeight: 500,
                  color: 'var(--color-text-muted)', background: 'var(--color-off-white)',
                  padding: '4px 10px', borderRadius: 'var(--radius-pill)',
                }}>
                  En attente
                </span>
              </div>
            </div>
          ))}

          <style>{`.cabinet-member-row:hover { background: var(--color-off-white) !important; }`}</style>

          {(members?.length ?? 0) === 0 && (pendingInvites?.length ?? 0) === 0 && (
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', textAlign: 'center', padding: '24px 0' }}>
              Aucun client invité pour le moment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
