import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { ArrowLeft, Users, Clock, AlertTriangle } from 'lucide-react';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';
import { modules } from '@/data/modules';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin — Détail cabinet — maformationcivique.fr',
};

const TIER_LABELS: Record<string, string> = {
  starter: 'Starter', pro: 'Pro', cabinet_plus: 'Cabinet+', reseau: 'Réseau',
};

export default async function AdminCabinetDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!isAdminEmail(user?.email)) {
    redirect('/dashboard');
  }

  const service = createServiceRoleClient();

  const { data: cabinet } = await service
    .from('cabinets')
    .select('*')
    .eq('id', id)
    .single();

  if (!cabinet) notFound();

  const { data: members } = await service
    .from('users')
    .select('id, name, email, cabinet_role, last_active')
    .eq('cabinet_id', id);

  const { data: pendingInvites } = await service
    .from('cabinet_invites')
    .select('id, email, created_at, role')
    .eq('cabinet_id', id)
    .is('redeemed_at', null);

  // Progression par client
  const memberIds = (members ?? []).map((m) => m.id);
  const { data: allProgress } = memberIds.length
    ? await service
        .from('progression')
        .select('user_id, module_slug, lesson_slug, completed')
        .in('user_id', memberIds)
    : { data: [] as { user_id: string; module_slug: string; lesson_slug: string; completed: boolean }[] };

  const totalLessons = modules.reduce((a, m) => a + m.lessons.length, 0);
  const progressByUser = new Map<string, number>();
  for (const m of members ?? []) {
    const done = new Set(
      (allProgress ?? [])
        .filter((p) => p.user_id === m.id && p.completed)
        .map((p) => `${p.module_slug}:${p.lesson_slug}`),
    );
    progressByUser.set(m.id, totalLessons > 0 ? Math.round((done.size / totalLessons) * 100) : 0);
  }

  const clients      = (members ?? []).filter((m) => m.cabinet_role !== 'admin');
  const adminMember  = (members ?? []).find((m) => m.cabinet_role === 'admin');
  const pendingN     = pendingInvites?.length ?? 0;
  const used         = (members?.length ?? 0) + pendingN;
  const quota        = cabinet.max_invitations ?? 0;
  const remaining    = Math.max(0, quota - used);
  const quotaPct     = quota > 0 ? Math.round((used / quota) * 100) : 0;
  const quotaFull    = quota > 0 && used >= quota;

  const subEnd   = cabinet.sub_end_at ? new Date(cabinet.sub_end_at) : null;
  const daysLeft = subEnd ? Math.ceil((subEnd.getTime() - Date.now()) / 86400000) : null;
  const expired  = daysLeft !== null && daysLeft < 0;
  const expiring = daysLeft !== null && daysLeft >= 0 && daysLeft < 30;

  const avgPct = clients.length > 0
    ? Math.round(clients.reduce((s, m) => s + (progressByUser.get(m.id) ?? 0), 0) / clients.length)
    : 0;
  const readyCount = clients.filter((m) => (progressByUser.get(m.id) ?? 0) >= 80).length;

  const kpis = [
    { label: 'Clients inscrits',  value: clients.length, sub: `+ ${pendingN} en attente`,   danger: false },
    { label: 'Progression moy.',  value: `${avgPct}%`,   sub: 'tous modules',               danger: false },
    { label: 'Prêts entretien',   value: readyCount,     sub: '≥ 80 % de complétion',       danger: false },
    { label: 'Places restantes',  value: remaining,      sub: `quota ${quota}`,             danger: remaining === 0 },
  ];

  return (
    <div style={{ maxWidth: 880 }}>
      <Link
        href="/admin/cabinets"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)',
          textDecoration: 'none', marginBottom: 20,
        }}
      >
        <ArrowLeft size={15} /> Portefeuille
      </Link>

      {/* Bannière expiration */}
      {(expired || expiring) && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '14px 18px', borderRadius: 'var(--radius-md)',
          background: '#FEF2F2', border: '1px solid #FECACA',
          color: '#B91C1C', fontSize: 'var(--font-size-sm)', marginBottom: 20,
        }}>
          <AlertTriangle size={18} style={{ flexShrink: 0 }} />
          {expired
            ? `Abonnement expiré le ${subEnd!.toLocaleDateString('fr-FR')}.`
            : `Abonnement expirant dans ${daysLeft} jour${daysLeft! > 1 ? 's' : ''} (${subEnd!.toLocaleDateString('fr-FR')}).`}
        </div>
      )}

      {/* En-tête cabinet */}
      <div style={{
        background: '#001A70', borderRadius: 'var(--radius-xl)',
        overflow: 'hidden', marginBottom: 20,
      }}>
        <div style={{ height: 3, background: 'linear-gradient(90deg,#002395 33%,#fff 33% 66%,#CC1A1A 66%)' }} />
        <div style={{ padding: '24px 28px 28px' }}>
          <p style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>
            {TIER_LABELS[cabinet.tier] ?? cabinet.tier}
          </p>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: '#fff', margin: '0 0 12px' }}>
            {cabinet.name}
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
            <span>Contact&nbsp;: {cabinet.contact_email}</span>
            {adminMember && <span>Admin&nbsp;: {adminMember.email}</span>}
            {subEnd && <span>Fin d&apos;abo&nbsp;: {subEnd.toLocaleDateString('fr-FR')}</span>}
          </div>

          {/* Quota */}
          <div style={{ marginTop: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Places utilisées</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>{used} / {quota}</span>
            </div>
            <div style={{ height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 99, overflow: 'hidden' }}>
              <div style={{
                height: '100%', borderRadius: 99, width: `${Math.min(quotaPct, 100)}%`,
                background: quotaFull ? 'linear-gradient(90deg,#EF4135,#CC1A1A)' : 'linear-gradient(90deg,#4A90D9,#7CB8F0)',
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: 12, marginBottom: 24 }}>
        {kpis.map(({ label, value, sub, danger }) => (
          <div key={label} style={{
            background: 'var(--color-surface)', border: 'var(--border-default)',
            borderRadius: 'var(--radius-lg)', padding: '16px 18px',
          }}>
            <p style={{ fontSize: 11, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 6px' }}>{label}</p>
            <p style={{ fontSize: 24, fontWeight: 800, margin: '0 0 4px', color: danger ? '#B91C1C' : 'var(--color-text-primary)' }}>{value}</p>
            <p style={{ fontSize: 11, color: 'var(--color-text-muted)', margin: 0 }}>{sub}</p>
          </div>
        ))}
      </div>

      {/* Liste clients */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, paddingLeft: 4 }}>
        <Users size={15} color="var(--color-text-muted)" />
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-secondary)' }}>
          Clients ({clients.length})
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {clients.map((m) => {
          const pct = progressByUser.get(m.id) ?? 0;
          return (
            <div key={m.id} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '14px 18px', borderRadius: 'var(--radius-lg)',
              background: 'var(--color-surface)', border: 'var(--border-default)',
            }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', margin: '0 0 2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {m.name || m.email || 'Utilisateur'}
                </p>
                <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: 0 }}>{m.email}</p>
              </div>
              <div style={{ width: 120, flexShrink: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                  <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>Progression</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: pct >= 80 ? '#0F6E56' : 'var(--color-text-secondary)' }}>{pct}%</span>
                </div>
                <div style={{ height: 4, background: 'var(--color-off-white)', borderRadius: 99, overflow: 'hidden' }}>
                  <div style={{ height: '100%', borderRadius: 99, width: `${pct}%`, background: pct >= 80 ? '#0F6E56' : 'var(--color-blue-france)' }} />
                </div>
              </div>
            </div>
          );
        })}

        {(pendingInvites ?? []).map((inv) => (
          <div key={inv.id} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '14px 18px', borderRadius: 'var(--radius-lg)',
            background: 'var(--color-off-white)', border: '1px dashed var(--color-border)',
          }}>
            <Clock size={15} color="var(--color-text-muted)" style={{ flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{inv.email}</p>
            </div>
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)', flexShrink: 0 }}>
              Invitation en attente
            </span>
          </div>
        ))}

        {clients.length === 0 && pendingN === 0 && (
          <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--color-text-muted)', fontSize: 14 }}>
            Aucun client pour ce cabinet.
          </div>
        )}
      </div>
    </div>
  );
}
