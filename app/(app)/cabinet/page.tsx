import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { modules } from '@/data/modules';
import { CabinetInviteForm } from '@/components/app/CabinetInviteForm';
import { ProgressBar } from '@/components/app/ProgressBar';
import { Building2, Users, FileDown, AlertTriangle } from 'lucide-react';
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
    .select('id, name, email, plan, cabinet_role')
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

  return (
    <div style={{ maxWidth: '900px' }}>
      {/* Header */}
      <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'flex-start', gap: '14px', flexWrap: 'wrap' }}>
        <div
          style={{
            width: 48, height: 48, borderRadius: 'var(--radius-lg)',
            background: 'var(--gradient-primary)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}
        >
          <Building2 size={24} color="#fff" />
        </div>
        <div>
          <h1 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)', marginBottom: '4px' }}>
            {cabinet?.name ?? 'Votre cabinet'}
          </h1>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
            Palier {TIER_LABELS[cabinet?.tier ?? 'starter'] ?? cabinet?.tier} · {used} / {maxInvitations} invitations utilisées
          </p>
        </div>
      </div>

      {/* Expiry banner */}
      {showExpiryBanner && (
        <div
          style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            padding: '14px 18px', borderRadius: 'var(--radius-md)',
            background: '#FEF2F2', border: '1px solid #FECACA',
            color: '#B91C1C', fontSize: 'var(--font-size-sm)', marginBottom: '24px',
          }}
        >
          <AlertTriangle size={18} style={{ flexShrink: 0 }} />
          {daysLeft! < 0
            ? `Votre abonnement cabinet a expiré le ${subEndAt!.toLocaleDateString('fr-FR')}. Contactez-nous pour le renouveler.`
            : `Votre abonnement cabinet expire dans ${daysLeft} jour${daysLeft! > 1 ? 's' : ''} (${subEndAt!.toLocaleDateString('fr-FR')}). Contactez-nous pour le renouveler.`}
        </div>
      )}

      {/* Invite form */}
      <div
        style={{
          padding: '24px', borderRadius: 'var(--radius-xl)',
          background: 'var(--color-surface)', border: 'var(--border-default)',
          marginBottom: '24px',
        }}
      >
        <h2 style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-primary)', marginBottom: '4px' }}>
          Inviter un client
        </h2>
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
          Votre client recevra un email pour créer son compte Premium offert par {cabinet?.name ?? 'votre cabinet'}.
        </p>
        <CabinetInviteForm disabled={quotaReached} />
      </div>

      {/* Members table */}
      <div
        style={{
          padding: '24px', borderRadius: 'var(--radius-xl)',
          background: 'var(--color-surface)', border: 'var(--border-default)',
        }}
      >
        <h2 style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Users size={18} /> Clients ({(members?.length ?? 0)})
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {(members ?? []).map((member) => {
            const pct = progressByUser.get(member.id) ?? 0;
            return (
              <div
                key={member.id}
                style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '14px', borderRadius: 'var(--radius-md)',
                  border: 'var(--border-default)', flexWrap: 'wrap',
                }}
              >
                <div style={{ flex: '1 1 200px', minWidth: 0 }}>
                  <p style={{ fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '2px' }}>
                    {member.name || member.email}
                  </p>
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    {member.email} · {member.cabinet_role === 'admin' ? 'Administrateur' : 'Client'}
                  </p>
                </div>
                <div style={{ flex: '1 1 160px', minWidth: 0 }}>
                  <ProgressBar value={pct} showPercent height={6} />
                </div>
                <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: 'var(--font-size-xs)', fontWeight: 500,
                      color: '#1D9E75', background: '#ECFDF5',
                      padding: '4px 10px', borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    Actif
                  </span>
                  <Link
                    href={`/api/cabinet/attestation/${member.id}`}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '6px',
                      padding: '8px 14px', borderRadius: 'var(--radius-pill)',
                      border: 'var(--border-default)', fontSize: 'var(--font-size-xs)',
                      color: 'var(--color-text-secondary)', fontWeight: 500,
                      textDecoration: 'none', minHeight: '36px',
                    }}
                  >
                    <FileDown size={14} /> Attestation
                  </Link>
                </div>
              </div>
            );
          })}

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
                <span
                  style={{
                    fontSize: 'var(--font-size-xs)', fontWeight: 500,
                    color: 'var(--color-text-muted)', background: 'var(--color-off-white)',
                    padding: '4px 10px', borderRadius: 'var(--radius-pill)',
                  }}
                >
                  En attente
                </span>
              </div>
            </div>
          ))}

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
