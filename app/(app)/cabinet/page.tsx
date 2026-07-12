import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { modules } from '@/data/modules';
import { CabinetInviteForm } from '@/components/app/CabinetInviteForm';
import { CabinetExportBtn } from '@/components/app/CabinetExportBtn';
import { CabinetMemberRow } from '@/components/app/CabinetMemberRow';
import { CabinetInviteRow } from '@/components/app/CabinetInviteRow';
import { CabinetNav } from '@/components/app/CabinetNav';
import { AlertTriangle, ArrowUpRight, Users, Wrench } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Espace cabinet — maformationcivique.fr',
};

const TIER_LABELS: Record<string, string> = {
  starter:      'Starter',
  pro:          'Pro',
  cabinet_plus: 'Cabinet+',
  reseau:       'Réseau',
};

const TIER_NEXT: Record<string, { label: string; price: string }> = {
  starter:      { label: 'Pro',      price: '990 €/an'   },
  pro:          { label: 'Cabinet+', price: '1 990 €/an' },
  cabinet_plus: { label: 'Réseau',   price: 'sur devis'  },
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
  const activeMembers  = (members ?? []).filter((m) => m.cabinet_role !== 'admin');
  const used           = activeMembers.length + (pendingInvites?.length ?? 0);
  const quotaReached   = maxInvitations > 0 && used >= maxInvitations;
  const remaining      = Math.max(0, maxInvitations - used);
  const quotaPct       = maxInvitations > 0 ? Math.round((used / maxInvitations) * 100) : 0;

  const subEndAt    = cabinet?.sub_end_at ? new Date(cabinet.sub_end_at) : null;
  const now         = new Date();
  const daysLeft    = subEndAt ? Math.ceil((subEndAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) : null;
  const showExpiry  = daysLeft !== null && daysLeft < 30;

  const nextTier = TIER_NEXT[cabinet?.tier ?? 'starter'];

  // KPIs
  const avgPct = activeMembers.length > 0
    ? Math.round(activeMembers.reduce((sum, m) => sum + (progressByUser.get(m.id) ?? 0), 0) / activeMembers.length)
    : 0;
  const readyCount = activeMembers.filter((m) => (progressByUser.get(m.id) ?? 0) >= 80).length;

  const kpis = [
    { label: 'Clients actifs', value: activeMembers.length, sub: `+ ${pendingInvites?.length ?? 0} en attente`,       green: false, red: false },
    { label: 'Progression moy.', value: `${avgPct}%`,       sub: 'sur tous les modules',                              green: false, red: false },
    { label: 'Prêts entretien', value: readyCount,           sub: '≥ 80% de complétion',                              green: readyCount > 0, red: false },
    { label: 'Places restantes', value: remaining,           sub: `quota ${TIER_LABELS[cabinet?.tier ?? 'starter']}`, green: false, red: remaining === 0 },
  ];

  return (
    <div style={{ maxWidth: 780 }}>

      {/* ── Expiry banner ─────────────────────────────────────────────────── */}
      {showExpiry && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '14px 18px', borderRadius: 'var(--radius-md)',
          background: '#FEF2F2', border: '1px solid #FECACA',
          color: '#B91C1C', fontSize: 'var(--font-size-sm)', marginBottom: 20,
        }}>
          <AlertTriangle size={18} style={{ flexShrink: 0 }} />
          {daysLeft! < 0
            ? `Votre abonnement a expiré le ${subEndAt!.toLocaleDateString('fr-FR')}. Contactez-nous pour le renouveler.`
            : `Abonnement expirant dans ${daysLeft} jour${daysLeft! > 1 ? 's' : ''} (${subEndAt!.toLocaleDateString('fr-FR')}).`}
        </div>
      )}

      {/* ── Hero tricolore ────────────────────────────────────────────────── */}
      <div style={{
        background: '#001A70', borderRadius: 'var(--radius-xl)',
        overflow: 'hidden', marginBottom: 20, position: 'relative',
      }}>
        <div style={{ height: 3, background: 'linear-gradient(90deg,#002395 33%,#fff 33% 66%,#CC1A1A 66%)' }} />
        {/* Filigrane — La Liberté guidant le peuple */}
        <svg
          viewBox="0 0 200 260"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{
            position: 'absolute', top: 0, right: -15,
            width: 180, height: 'auto', opacity: 0.06,
            pointerEvents: 'none', userSelect: 'none',
          }}
        >
          {/* Flag pole */}
          <rect x="143" y="8" width="4" height="80" fill="white"/>
          {/* Flag pennant */}
          <path d="M147,8 L196,25 L194,48 L147,36 Z" fill="white"/>
          {/* Liberty: Phrygian cap */}
          <path d="M85,68 C88,54 93,42 100,36 C107,42 112,54 115,68 Z" fill="white"/>
          {/* Liberty: Head */}
          <ellipse cx="100" cy="73" rx="15" ry="18" fill="white"/>
          {/* Liberty: Raised right arm to flag */}
          <path d="M113,82 C122,70 132,57 143,46" stroke="white" strokeWidth="11" fill="none" strokeLinecap="round"/>
          {/* Liberty: Body / flowing dress */}
          <path d="M85,88 C79,97 72,110 65,127 C57,148 51,170 47,192 C44,207 43,220 42,232 L158,232 C157,220 156,207 153,192 C149,170 143,148 135,127 C128,110 121,97 115,88 C109,81 105,78 100,78 C95,78 90,82 85,88 Z" fill="white"/>
          {/* Liberty: Left arm + musket */}
          <path d="M87,102 C76,108 63,114 50,118" stroke="white" strokeWidth="10" fill="none" strokeLinecap="round"/>
          <line x1="50" y1="118" x2="32" y2="128" stroke="white" strokeWidth="5" strokeLinecap="round"/>
          {/* Crowd: boy left */}
          <ellipse cx="38" cy="195" rx="21" ry="24" fill="white"/>
          <ellipse cx="36" cy="170" rx="13" ry="15" fill="white"/>
          <path d="M36,155 C32,142 31,130 34,120" stroke="white" strokeWidth="7" fill="none" strokeLinecap="round"/>
          {/* Crowd: bourgeois right, top hat */}
          <ellipse cx="164" cy="192" rx="22" ry="26" fill="white"/>
          <rect x="153" y="150" width="22" height="18" rx="2" fill="white"/>
          <rect x="148" y="167" width="32" height="5" rx="2" fill="white"/>
          <ellipse cx="164" cy="173" rx="12" ry="6" fill="white"/>
          {/* Bodies at base */}
          <ellipse cx="100" cy="245" rx="55" ry="12" fill="white"/>
          <ellipse cx="35" cy="252" rx="30" ry="10" fill="white"/>
          <ellipse cx="178" cy="250" rx="28" ry="9" fill="white"/>
        </svg>
        <div style={{ padding: '24px 28px 28px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>
                Espace partenaire
              </p>
              <h1 style={{ fontSize: 22, fontWeight: 800, color: '#fff', margin: '0 0 10px' }}>
                {cabinet?.name ?? 'Votre cabinet'}
              </h1>
              <span style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'rgba(255,255,255,0.12)', border: '0.5px solid rgba(255,255,255,0.2)',
                borderRadius: 100, padding: '4px 12px',
                fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.85)',
              }}>
                {TIER_LABELS[cabinet?.tier ?? 'starter']}
              </span>
            </div>
            {nextTier && (
              <a
                href={`mailto:contact@maformationcivique.fr?subject=Upgrade vers ${nextTier.label}`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '9px 18px', borderRadius: 100,
                  background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)',
                  color: '#fff', fontSize: 13, fontWeight: 600,
                  textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0,
                }}
              >
                <ArrowUpRight size={14} />
                Passer en {nextTier.label} — {nextTier.price}
              </a>
            )}
          </div>

          {/* Quota bar */}
          <div style={{ marginTop: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Invitations utilisées</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>
                {used} / {maxInvitations}
              </span>
            </div>
            <div style={{ height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 99, overflow: 'hidden' }}>
              <div style={{
                height: '100%', borderRadius: 99, width: `${quotaPct}%`,
                background: quotaReached
                  ? 'linear-gradient(90deg,#EF4135,#CC1A1A)'
                  : 'linear-gradient(90deg,#4A90D9,#7CB8F0)',
                transition: 'width 600ms ease',
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── KPI strip ─────────────────────────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: 12, marginBottom: 24 }}>
        {kpis.map(({ label, value, sub, green, red }) => (
          <div key={label} style={{
            background: 'var(--color-surface)', border: 'var(--border-default)',
            borderRadius: 'var(--radius-lg)', padding: '16px 18px',
          }}>
            <p style={{ fontSize: 11, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 6px' }}>
              {label}
            </p>
            <p style={{
              fontSize: 24, fontWeight: 800, margin: '0 0 4px',
              color: green ? '#0F6E56' : red ? '#B91C1C' : 'var(--color-text-primary)',
            }}>
              {value}
            </p>
            <p style={{ fontSize: 11, color: 'var(--color-text-muted)', margin: 0 }}>{sub}</p>
          </div>
        ))}
      </div>

      {/* ── Navigation tabs ───────────────────────────────────────────────── */}
      <CabinetNav />

      {/* ── Invite section ────────────────────────────────────────────────── */}
      <div style={{
        border: '1.5px dashed var(--color-border)',
        borderRadius: 'var(--radius-xl)', padding: '20px 24px', marginBottom: 20,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
          <div>
            <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', margin: 0 }}>
              Inviter un client
            </p>
            <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 2 }}>
              {quotaReached
                ? 'Quota atteint — contactez-nous pour augmenter votre palier.'
                : `Votre client reçoit un email pour créer son compte Premium offert par ${cabinet?.name ?? 'votre cabinet'}.`}
            </p>
          </div>
          {maxInvitations > 0 && (
            <span style={{
              fontSize: 12, fontWeight: 600, flexShrink: 0,
              color: quotaReached ? '#B91C1C' : 'var(--color-text-muted)',
            }}>
              {remaining} place{remaining !== 1 ? 's' : ''} restante{remaining !== 1 ? 's' : ''}
            </span>
          )}
        </div>
        <CabinetInviteForm disabled={quotaReached} />
      </div>

      {/* ── Liste clients ─────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 24 }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 8, marginBottom: 12, paddingLeft: 4, flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Users size={15} color="var(--color-text-muted)" />
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-secondary)' }}>
              Clients ({activeMembers.length})
            </span>
          </div>
          <CabinetExportBtn />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {activeMembers.map((member) => {
            const pct = progressByUser.get(member.id) ?? 0;
            return (
              <CabinetMemberRow
                key={member.id}
                id={member.id}
                displayName={member.name || member.email || 'Utilisateur'}
                email={member.email ?? ''}
                pct={pct}
                lastActive={member.last_active ?? null}
              />
            );
          })}

          {(pendingInvites ?? []).map((invite) => (
            <CabinetInviteRow
              key={invite.id}
              id={invite.id}
              email={invite.email}
              createdAt={invite.created_at}
            />
          ))}

          {activeMembers.length === 0 && (pendingInvites?.length ?? 0) === 0 && (
            <div style={{
              textAlign: 'center', padding: '40px 0',
              color: 'var(--color-text-muted)', fontSize: 14,
            }}>
              Aucun client invité pour le moment.
            </div>
          )}
        </div>
      </div>

      {/* ── Support ───────────────────────────────────────────────────────── */}
      <div style={{
        borderRadius: 'var(--radius-xl)',
        border: '1px dashed var(--color-border)',
        padding: '18px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 16, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 'var(--radius-md)',
            background: 'var(--color-off-white)', border: 'var(--border-default)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <Wrench size={15} color="var(--color-text-muted)" />
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)', margin: 0 }}>
              Signaler un problème
            </p>
            <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 2 }}>
              Réponse sous 24 h ouvrées
            </p>
          </div>
        </div>
        <a
          href={`mailto:contact@maformationcivique.fr?subject=Problème technique — Cabinet ${encodeURIComponent(cabinet?.name ?? '')}&body=Bonjour,%0A%0AJe signale un problème technique sur mon espace cabinet.%0A%0ADescription :%0A%0AMerci.`}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '9px 18px', borderRadius: 'var(--radius-pill)',
            background: 'var(--color-off-white)', border: '1.5px solid var(--color-border)',
            color: 'var(--color-text-secondary)',
            fontSize: 'var(--font-size-sm)', fontWeight: 600,
            textDecoration: 'none', whiteSpace: 'nowrap',
          }}
        >
          Contacter le support →
        </a>
      </div>

      <style suppressHydrationWarning>{`
        .cabinet-client-row:hover {
          box-shadow: var(--shadow-card);
          border-color: var(--color-blue-france) !important;
        }
      `}</style>
    </div>
  );
}
