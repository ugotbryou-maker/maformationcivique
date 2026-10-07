import Link from 'next/link';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import {
  AlertTriangle, ArrowUpRight, Users, Target, TrendingUp, Infinity as InfinityIcon,
  Clock, UserPlus,
} from 'lucide-react';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { modules } from '@/data/modules';
import { CabinetInviteForm } from '@/components/app/CabinetInviteForm';
import { CabinetExportBtn } from '@/components/app/CabinetExportBtn';
import { CabinetMemberRow } from '@/components/app/CabinetMemberRow';
import { CabinetInviteRow } from '@/components/app/CabinetInviteRow';
import { CabinetNav } from '@/components/app/CabinetNav';
import { Kpi, Carte, Stat } from '@/components/admin/ui';
import '@/components/admin/kit.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Espace cabinet — maformationcivique.fr',
};

const TIER_LABELS: Record<string, string> = {
  essai: 'Essai', starter: 'Starter', pro: 'Pro', cabinet_plus: 'Cabinet+', reseau: 'Réseau',
};

const TIER_NEXT: Record<string, { label: string; price: string }> = {
  starter:      { label: 'Pro',      price: '990 €/an'   },
  pro:          { label: 'Cabinet+', price: '1 990 €/an' },
  cabinet_plus: { label: 'Réseau',   price: 'sur devis'  },
};

const PLAN_LABELS: Record<string, string> = {
  premium: 'Formation civique',
  langue:  'Formation linguistique',
  bundle:  'Civique + linguistique',
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
    .from('cabinets').select('*').eq('id', profile.cabinet_id).single();

  const { data: members } = await service
    .from('users')
    .select('id, name, email, plan, cabinet_role, xp, last_active')
    .eq('cabinet_id', profile.cabinet_id);

  // Toutes les invitations, pas seulement celles en attente : les invitations
  // utilisées disent qui a amené chaque client, ce qui compte dès qu'un
  // cabinet confie son portefeuille à plusieurs commerciaux.
  const { data: toutesInvites } = await service
    .from('cabinet_invites')
    .select('id, email, created_at, role, invited_by, redeemed_at, redeemed_user_id')
    .eq('cabinet_id', profile.cabinet_id);

  const pendingInvites = (toutesInvites ?? []).filter((i) => !i.redeemed_at);

  const nomPar = new Map<string, string>();
  for (const m of members ?? []) nomPar.set(m.id, m.name || m.email || 'Membre du cabinet');
  const auteurInvitation = (id: string | null | undefined) => (id ? nomPar.get(id) ?? null : null);

  const invitePar = new Map<string, string>();
  for (const i of toutesInvites ?? []) {
    const a = auteurInvitation(i.invited_by);
    if (i.redeemed_user_id && a) invitePar.set(i.redeemed_user_id, a);
  }

  const memberIds = (members ?? []).map((m) => m.id);
  const { data: allProgress } = memberIds.length
    ? await service.from('progression')
        .select('user_id, module_slug, lesson_slug, completed').in('user_id', memberIds)
    : { data: [] as { user_id: string; module_slug: string; lesson_slug: string; completed: boolean }[] };

  const totalLessons = modules.reduce((a, m) => a + m.lessons.length, 0);
  const progressByUser = new Map<string, number>();
  for (const member of members ?? []) {
    const done = new Set(
      (allProgress ?? []).filter((p) => p.user_id === member.id && p.completed)
        .map((p) => `${p.module_slug}:${p.lesson_slug}`),
    );
    progressByUser.set(member.id, totalLessons > 0 ? Math.round((done.size / totalLessons) * 100) : 0);
  }

  // max_invitations NULL = sièges illimités : il ne faut afficher ni plafond
  // ni « 0 place restante », qui laisserait croire à un blocage.
  const illimite       = cabinet?.max_invitations == null;
  const maxInvitations = cabinet?.max_invitations ?? 0;
  const activeMembers  = (members ?? []).filter((m) => m.cabinet_role !== 'admin');
  const used           = activeMembers.length + pendingInvites.length;
  const quotaReached   = !illimite && maxInvitations > 0 && used >= maxInvitations;
  const remaining      = Math.max(0, maxInvitations - used);

  const subEndAt   = cabinet?.sub_end_at ? new Date(cabinet.sub_end_at) : null;
  const daysLeft   = subEndAt ? Math.ceil((subEndAt.getTime() - Date.now()) / 86400000) : null;
  const showExpiry = daysLeft !== null && daysLeft < 30;
  const nextTier   = TIER_NEXT[cabinet?.tier ?? 'starter'];

  const avgPct = activeMembers.length
    ? Math.round(activeMembers.reduce((s, m) => s + (progressByUser.get(m.id) ?? 0), 0) / activeMembers.length)
    : 0;
  const readyCount = activeMembers.filter((m) => (progressByUser.get(m.id) ?? 0) >= 80).length;
  const il30j = Date.now() - 30 * 86400000;
  const actifs = activeMembers.filter((m) => m.last_active && new Date(m.last_active).getTime() >= il30j).length;

  // Clients à relancer : inscrits mais jamais venus, ou absents depuis un mois.
  const aRelancer = activeMembers.filter(
    (m) => !m.last_active || new Date(m.last_active).getTime() < il30j,
  );

  return (
    <div className="adm" style={{ maxWidth: 940 }}>
      <CabinetNav />

      <header className="adm-head">
        <div>
          <h1 className="adm-title">{cabinet?.name ?? 'Votre cabinet'}</h1>
          <p className="adm-sub">
            {TIER_LABELS[cabinet?.tier ?? 'starter'] ?? cabinet?.tier}
            {cabinet?.member_plan && ` · accès ${PLAN_LABELS[cabinet.member_plan] ?? cabinet.member_plan}`}
            {subEndAt && ` · jusqu'au ${subEndAt.toLocaleDateString('fr-FR')}`}
          </p>
        </div>
        {nextTier && !illimite && (
          <a href="mailto:contact@maformationcivique.fr?subject=Changement%20de%20palier" className="adm-btn adm-btn-light">
            <ArrowUpRight size={15} /> Passer en {nextTier.label} — {nextTier.price}
          </a>
        )}
      </header>

      {showExpiry && (
        <div className={`adm-callout ${daysLeft! < 0 ? 'adm-callout-risk' : 'adm-callout-warn'}`}>
          <AlertTriangle size={15} style={{ flexShrink: 0, marginTop: 1 }} />
          <p>
            {daysLeft! < 0
              ? `Votre accès a expiré le ${subEndAt!.toLocaleDateString('fr-FR')}. Contactez-nous pour le renouveler.`
              : `Votre accès expire dans ${daysLeft} jour${daysLeft! > 1 ? 's' : ''}, le ${subEndAt!.toLocaleDateString('fr-FR')}.`}
          </p>
        </div>
      )}

      {/* ── Indicateurs ──────────────────────────────────────────────────── */}
      <div className="adm-grid adm-grid-4">
        <Kpi teinte="sky" icon={<Users size={16} />} label="Clients"
             value={String(activeMembers.length)} sub={`+ ${pendingInvites.length} en attente`} />
        <Kpi teinte="violet" icon={<TrendingUp size={16} />} label="Progression moyenne"
             value={`${avgPct} %`} sub={`${actifs} actifs sur 30 jours`} />
        <Kpi teinte="mint" icon={<Target size={16} />} label="Prêts pour l'entretien"
             value={String(readyCount)} sub="≥ 80 % de complétion" />
        <Kpi teinte="cream" icon={illimite ? <InfinityIcon size={16} /> : <UserPlus size={16} />}
             label={illimite ? 'Invitations' : 'Places restantes'}
             value={illimite ? '∞' : String(remaining)}
             sub={illimite ? `${used} comptes ouverts` : `quota ${maxInvitations}`} />
      </div>

      {/* ── Inviter + clients dormants ───────────────────────────────────── */}
      <div className="adm-grid adm-grid-wide">
        <Carte
          titre="Inviter un client"
          indice={quotaReached
            ? 'Quota atteint — contactez-nous pour augmenter votre palier.'
            : `Votre client reçoit un e-mail pour créer son compte, offert par ${cabinet?.name ?? 'votre cabinet'}.`}
        >
          <CabinetInviteForm disabled={quotaReached} />
        </Carte>

        <div className="adm-dark">
          <p className="adm-dark-title">
            {aRelancer.length > 0
              ? `${aRelancer.length} client${aRelancer.length > 1 ? 's' : ''} à relancer`
              : 'Tous vos clients sont actifs'}
          </p>
          <p className="adm-dark-text" style={{ marginBottom: 18 }}>
            {aRelancer.length > 0
              ? 'Ils ne se sont pas connectés depuis plus d’un mois, ou jamais. Un appel vaut mieux qu’un dossier perdu.'
              : 'Aucun client dormant sur les trente derniers jours.'}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {aRelancer.slice(0, 5).map((m) => (
              <Link
                key={m.id}
                href={`/cabinet/membre/${m.id}`}
                style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', fontSize: 13, color: 'rgba(255,255,255,0.82)' }}
              >
                <Clock size={13} style={{ opacity: 0.5, flexShrink: 0 }} />
                <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {m.name || m.email}
                </span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', flexShrink: 0 }}>
                  {m.last_active
                    ? new Date(m.last_active).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })
                    : 'jamais venu'}
                </span>
              </Link>
            ))}
            {aRelancer.length > 5 && (
              <p className="adm-dark-text" style={{ fontSize: 12 }}>
                et {aRelancer.length - 5} autre{aRelancer.length - 5 > 1 ? 's' : ''}…
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ── Liste clients ────────────────────────────────────────────────── */}
      <Carte
        titre={`Clients (${activeMembers.length})`}
        indice="Cliquez sur un client pour voir son détail et télécharger son attestation"
        action={<CabinetExportBtn />}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {activeMembers.map((member) => (
            <CabinetMemberRow
              key={member.id}
              id={member.id}
              displayName={member.name || member.email || 'Utilisateur'}
              email={member.email ?? ''}
              pct={progressByUser.get(member.id) ?? 0}
              lastActive={member.last_active ?? null}
              invitedBy={invitePar.get(member.id) ?? null}
            />
          ))}

          {pendingInvites.map((invite) => (
            <CabinetInviteRow
              key={invite.id}
              id={invite.id}
              email={invite.email}
              createdAt={invite.created_at}
              invitedBy={auteurInvitation(invite.invited_by)}
            />
          ))}

          {activeMembers.length === 0 && pendingInvites.length === 0 && (
            <p className="adm-empty">Aucun client invité pour le moment.</p>
          )}
        </div>
      </Carte>

      <div style={{ marginTop: 16 }}>
        <Carte tight>
          <div className="adm-stats">
            <Stat n={activeMembers.length + pendingInvites.length} l="Invitations émises au total" />
            <Stat n={`${Math.round((activeMembers.length / Math.max(1, activeMembers.length + pendingInvites.length)) * 100)} %`} l="Taux d'activation" />
            <Stat n={readyCount} l="Dossiers prêts" />
            <Stat n={aRelancer.length} l="Clients dormants" />
          </div>
        </Carte>
      </div>
    </div>
  );
}
