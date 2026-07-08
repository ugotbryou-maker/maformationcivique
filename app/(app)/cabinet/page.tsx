import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { modules } from '@/data/modules';
import { CabinetInviteForm } from '@/components/app/CabinetInviteForm';
import { CabinetGmbForm } from '@/components/app/CabinetGmbForm';
import { CabinetExportBtn } from '@/components/app/CabinetExportBtn';
import { CabinetMemberRow } from '@/components/app/CabinetMemberRow';
import { Building2, Users, AlertTriangle, ArrowUpRight, Star, Wrench } from 'lucide-react';
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

  const activeMembers = (members ?? []).filter((m) => m.cabinet_role !== 'admin');
  const nextTier = TIER_NEXT[cabinet?.tier ?? 'starter'];

  return (
    <div style={{ maxWidth: '720px' }}>

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

      {/* ── Header card ─────────────────────────────────────────────── */}
      <div style={{
        background: 'var(--color-surface)', border: 'var(--border-default)',
        borderRadius: 'var(--radius-xl)', padding: '20px 24px',
        display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20,
        flexWrap: 'wrap',
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: 'var(--radius-lg)',
          background: 'var(--gradient-primary)', display: 'flex',
          alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <Building2 size={22} color="#fff" />
        </div>
        <div style={{ flex: 1, minWidth: 160 }}>
          <h1 style={{ fontSize: 18, fontWeight: 800, color: 'var(--color-text-primary)', margin: '0 0 2px' }}>
            {cabinet?.name ?? 'Votre cabinet'}
          </h1>
          <p style={{ fontSize: 13, color: 'var(--color-text-muted)', margin: 0 }}>
            Palier {TIER_LABELS[cabinet?.tier ?? 'starter'] ?? cabinet?.tier} · {used} / {maxInvitations} invitations
          </p>
        </div>
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

      {/* ── Client list ─────────────────────────────────────────────── */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 12, paddingLeft: 4, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Users size={15} color="var(--color-text-muted)" />
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-secondary)' }}>
              Clients ({activeMembers.length})
            </span>
          </div>
          <CabinetExportBtn />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {/* Active members */}
          {activeMembers.map((member) => {
            const pct = progressByUser.get(member.id) ?? 0;
            const displayName = member.name || member.email || 'Utilisateur';
            return (
              <CabinetMemberRow
                key={member.id}
                id={member.id}
                displayName={displayName}
                pct={pct}
              />
            );
          })}

          {/* Pending invites */}
          {(pendingInvites ?? []).map((invite) => (
            <div key={invite.id} style={{
              background: 'var(--color-surface)', border: '1px dashed var(--color-border)',
              borderRadius: 'var(--radius-lg)', padding: '14px 18px',
              display: 'flex', alignItems: 'center', gap: 14, opacity: 0.65,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
                background: 'var(--color-off-white)', border: '2px dashed var(--color-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, color: 'var(--color-text-muted)',
              }}>
                ?
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 500, fontSize: 14, color: 'var(--color-text-secondary)', margin: 0 }}>
                  {invite.email}
                </p>
                <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 2 }}>
                  Invitation envoyée le {new Date(invite.created_at).toLocaleDateString('fr-FR')}
                </p>
              </div>
              <span style={{
                fontSize: 11, fontWeight: 500, color: 'var(--color-text-muted)',
                background: 'var(--color-off-white)',
                padding: '3px 10px', borderRadius: 'var(--radius-pill)',
                border: 'var(--border-default)', whiteSpace: 'nowrap',
              }}>
                En attente
              </span>
            </div>
          ))}

          {activeMembers.length === 0 && (pendingInvites?.length ?? 0) === 0 && (
            <div style={{ textAlign: 'center', padding: '32px 0', color: 'var(--color-text-muted)', fontSize: 14 }}>
              Aucun client invité pour le moment.
            </div>
          )}
        </div>
      </div>

      {/* ── Invite section ──────────────────────────────────────────── */}
      <div style={{
        borderRadius: 'var(--radius-xl)', overflow: 'hidden',
        border: 'var(--border-default)', boxShadow: 'var(--shadow-card)',
        marginBottom: 20,
      }}>
        <div style={{
          background: 'var(--color-blue-france)', padding: '16px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>+ Inviter un client</span>
          {maxInvitations > 0 && (
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.72)' }}>
              {Math.max(0, maxInvitations - used)} place{Math.max(0, maxInvitations - used) !== 1 ? 's' : ''} restante{Math.max(0, maxInvitations - used) !== 1 ? 's' : ''}
            </span>
          )}
        </div>
        <div style={{ background: 'var(--color-surface)', padding: '20px 24px' }}>
          <p style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 16 }}>
            Votre client recevra un email pour créer son compte Premium offert par {cabinet?.name ?? 'votre cabinet'}.
          </p>
          <CabinetInviteForm disabled={quotaReached} />
        </div>
      </div>

      {/* ── Google My Business ──────────────────────────────────────── */}
      <div style={{
        borderRadius: 'var(--radius-xl)', overflow: 'hidden',
        border: 'var(--border-default)', boxShadow: 'var(--shadow-card)',
        marginBottom: 20,
      }}>
        <div style={{
          padding: '16px 24px',
          background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <Star size={16} color="#fff" />
          <span style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>Avis Google My Business</span>
        </div>
        <div style={{ background: 'var(--color-surface)', padding: '20px 24px' }}>
          <p style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 16, lineHeight: 1.5 }}>
            Collez ici le lien de votre page Google My Business. Vos clients recevront automatiquement un email les invitant à laisser un avis après avoir terminé leur formation.
          </p>
          <CabinetGmbForm current={(cabinet as Record<string, unknown>)?.google_review_link as string | null} />
          <p style={{ fontSize: 11, color: 'var(--color-text-muted)', marginTop: 12, lineHeight: 1.5 }}>
            L'email est envoyé une seule fois, dès que le client atteint 80 % de complétion. Conformément à nos CGU et au contrat cabinet.
          </p>
        </div>
      </div>

      {/* ── Support technique ───────────────────────────────────────── */}
      <div style={{
        borderRadius: 'var(--radius-xl)',
        border: '1px dashed var(--color-border)',
        padding: '20px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 16, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 'var(--radius-md)',
            background: 'var(--color-off-white)', border: 'var(--border-default)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <Wrench size={16} color="var(--color-text-muted)" />
          </div>
          <div>
            <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', margin: 0 }}>
              Signaler un problème technique
            </p>
            <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 2 }}>
              Notre équipe technique vous répondra sous 24h ouvrées.
            </p>
          </div>
        </div>
        <a
          href={`mailto:contact@maformationcivique.fr?subject=Problème technique — Cabinet ${encodeURIComponent(cabinet?.name ?? '')}&body=Bonjour,%0A%0AJe signale un problème technique sur mon espace cabinet.%0A%0ADescription du problème :%0A%0AMerci.`}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '9px 18px', borderRadius: 'var(--radius-pill)',
            background: 'var(--color-off-white)',
            border: '1.5px solid var(--color-border)',
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
