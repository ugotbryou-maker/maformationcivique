import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  ChevronLeft, Users, Clock, AlertTriangle, Receipt, Infinity as InfinityIcon,
  Target, TrendingUp, Mail,
} from 'lucide-react';
import { createServiceRoleClient } from '@/lib/supabase-server';
import { modules } from '@/data/modules';
import { Kpi, Carte, Stat, Identite, Jauge, Vide } from '@/components/admin/ui';
import { InviteCabinetAdminButton } from '@/components/app/InviteCabinetAdminButton';
import { CloturerCabinetButton } from '@/components/app/CloturerCabinetButton';
import { PointerFacture } from '@/components/admin/PointerFacture';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Fiche partenaire — maformationcivique.fr',
  robots: { index: false, follow: false, nocache: true },
};

const TIER_LABELS: Record<string, string> = {
  essai: 'Essai', starter: 'Starter', pro: 'Pro', cabinet_plus: 'Cabinet+', reseau: 'Réseau',
};
const PLAN_LABELS: Record<string, string> = {
  premium: 'Civique', langue: 'Linguistique', bundle: 'Civique + Linguistique',
};

function euro(n: number) {
  return n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
}
function dateCourte(d: string | null) {
  return d ? new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' }) : '—';
}
/** Regroupe les activations par mois civil — la maille de facturation. */
function parMois(activations: { redeemed_at: string | null }[]) {
  const m = new Map<string, number>();
  for (const a of activations) {
    if (!a.redeemed_at) continue;
    const cle = a.redeemed_at.slice(0, 7);
    m.set(cle, (m.get(cle) ?? 0) + 1);
  }
  return [...m.entries()].sort((a, b) => b[0].localeCompare(a[0]));
}

export default async function FichePartenairePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = createServiceRoleClient();

  const { data: cabinet } = await service.from('cabinets').select('*').eq('id', id).single();
  if (!cabinet) notFound();

  const [{ data: members }, { data: allInvites }] = await Promise.all([
    service.from('users').select('id, name, email, cabinet_role, last_active').eq('cabinet_id', id),
    service.from('cabinet_invites')
      .select('id, email, created_at, role, redeemed_at, redeemed_user_id, invited_by, facture_le')
      .eq('cabinet_id', id)
      .order('created_at', { ascending: false }),
  ]);

  const pendingInvites = (allInvites ?? []).filter((i) => !i.redeemed_at);
  const activations    = (allInvites ?? []).filter((i) => i.redeemed_at);

  // Progression des clients
  const memberIds = (members ?? []).map((m) => m.id);
  const { data: allProgress } = memberIds.length
    ? await service.from('progression').select('user_id, module_slug, lesson_slug, completed').in('user_id', memberIds)
    : { data: [] as { user_id: string; module_slug: string; lesson_slug: string; completed: boolean }[] };

  const totalLessons = modules.reduce((a, m) => a + m.lessons.length, 0);
  const progressByUser = new Map<string, number>();
  for (const m of members ?? []) {
    const done = new Set(
      (allProgress ?? []).filter((p) => p.user_id === m.id && p.completed)
        .map((p) => `${p.module_slug}:${p.lesson_slug}`),
    );
    progressByUser.set(m.id, totalLessons > 0 ? Math.round((done.size / totalLessons) * 100) : 0);
  }

  // Attribution commerciale : qui a envoyé chaque invitation.
  const nomPar = new Map<string, string>();
  for (const m of members ?? []) nomPar.set(m.id, m.name || m.email || 'Membre');
  const auteurInvitation = (uid: string | null | undefined) => (uid ? nomPar.get(uid) ?? null : null);
  const invitePar = new Map<string, string>();
  for (const i of allInvites ?? []) {
    const a = auteurInvitation(i.invited_by);
    if (i.redeemed_user_id && a) invitePar.set(i.redeemed_user_id, a);
  }

  const clients     = (members ?? []).filter((m) => m.cabinet_role !== 'admin');
  const admins      = (members ?? []).filter((m) => m.cabinet_role === 'admin');
  const pendingN    = pendingInvites.length;
  const used        = (members?.length ?? 0) + pendingN;
  const illimite    = cabinet.max_invitations == null;
  const quota       = cabinet.max_invitations ?? 0;
  const remaining   = illimite ? null : Math.max(0, quota - used);

  const aLUsage     = cabinet.billing_mode === 'usage';
  const pu          = (cabinet.prix_activation_cents ?? 0) / 100;
  const nonFactures = activations.filter((i) => !i.facture_le);
  const montantDu   = nonFactures.length * pu;
  const caCumule    = activations.length * pu;

  const subEnd   = cabinet.sub_end_at ? new Date(cabinet.sub_end_at) : null;
  const daysLeft = subEnd ? Math.ceil((subEnd.getTime() - Date.now()) / 86400000) : null;
  const expired  = daysLeft !== null && daysLeft < 0;
  const expiring = daysLeft !== null && daysLeft >= 0 && daysLeft < 30;

  const avgPct = clients.length
    ? Math.round(clients.reduce((s, m) => s + (progressByUser.get(m.id) ?? 0), 0) / clients.length)
    : 0;
  const readyCount = clients.filter((m) => (progressByUser.get(m.id) ?? 0) >= 80).length;
  const il30j = Date.now() - 30 * 86400000;
  const actifs = clients.filter((m) => m.last_active && new Date(m.last_active).getTime() >= il30j).length;

  return (
    <>
      <Link href="/admin/cabinets" className="adm-link" style={{ marginBottom: 12 }}>
        <ChevronLeft size={15} /> Portefeuille
      </Link>

      {(expired || expiring) && (
        <div className="adm-callout adm-callout-risk">
          <AlertTriangle size={15} style={{ flexShrink: 0, marginTop: 1 }} />
          <p>
            {expired
              ? `Partenariat expiré le ${subEnd!.toLocaleDateString('fr-FR')}. Les accès restent ouverts tant que le partenariat n'est pas clôturé explicitement, en bas de page.`
              : `Partenariat expirant dans ${daysLeft} jour${daysLeft! > 1 ? 's' : ''} (${subEnd!.toLocaleDateString('fr-FR')}).`}
          </p>
        </div>
      )}

      {/* ── En-tête ──────────────────────────────────────────────────────── */}
      <div className="adm-dark" style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
          <div style={{ minWidth: 0 }}>
            <span className="adm-tag adm-tag-vio" style={{ marginBottom: 10 }}>
              {TIER_LABELS[cabinet.tier] ?? cabinet.tier}
            </span>
            <h1 className="adm-dark-title" style={{ fontSize: 24, marginTop: 10 }}>{cabinet.name}</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 18px', fontSize: 12.5, color: 'rgba(255,255,255,0.6)' }}>
              <span>{cabinet.contact_email}</span>
              <span>Accès accordé : {PLAN_LABELS[cabinet.member_plan] ?? cabinet.member_plan}</span>
              {subEnd && <span>Échéance : {subEnd.toLocaleDateString('fr-FR')}</span>}
            </div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <p className="adm-stat-n" style={{ fontSize: 28 }}>
              {illimite ? <><InfinityIcon size={24} style={{ verticalAlign: '-3px' }} /></> : `${used}/${quota}`}
            </p>
            <p className="adm-stat-l">
              {illimite ? `${used} comptes · sièges illimités` : `${remaining} place${remaining === 1 ? '' : 's'} restante${remaining === 1 ? '' : 's'}`}
            </p>
          </div>
        </div>
      </div>

      {/* ── Indicateurs ──────────────────────────────────────────────────── */}
      <div className="adm-grid adm-grid-4">
        <Kpi teinte="sky" icon={<Users size={16} />} label="Clients inscrits"
             value={String(clients.length)} sub={`+ ${pendingN} en attente`} />
        <Kpi teinte="violet" icon={<TrendingUp size={16} />} label="Progression moyenne"
             value={`${avgPct} %`} sub={`${actifs} actifs sur 30 jours`} />
        <Kpi teinte="mint" icon={<Target size={16} />} label="Prêts pour l'examen"
             value={String(readyCount)} sub="≥ 80 % de complétion" />
        {aLUsage
          ? <Kpi teinte="cream" icon={<Receipt size={16} />} label="À facturer"
                 value={euro(montantDu)} sub={`${nonFactures.length} × ${euro(pu)}`} />
          : <Kpi teinte="cream" icon={<Receipt size={16} />} label="Licence"
                 value={TIER_LABELS[cabinet.tier] ?? cabinet.tier} sub="Forfait annuel" />}
      </div>

      {/* ── Accès administrateur ─────────────────────────────────────────── */}
      <InviteCabinetAdminButton
        cabinetId={cabinet.id}
        contactEmail={cabinet.contact_email}
        admins={admins.map((m) => m.email ?? '—')}
      />

      {/* ── Facturation à l'usage ────────────────────────────────────────── */}
      {aLUsage && (
        <div style={{ marginBottom: 16 }}>
          <Carte
            titre={`Facturation à l'usage — ${euro(pu)} par personne activée`}
            indice="Une activation est une invitation transformée en compte réel : les invitations simplement envoyées ne sont jamais facturées."
            action={<PointerFacture cabinetId={cabinet.id} nb={nonFactures.length} montant={euro(montantDu)} />}
          >
            <div className="adm-stats" style={{ marginBottom: 20 }}>
              <Stat n={activations.length} l="Activations totales" />
              <Stat n={euro(montantDu)} l="Restant à facturer" />
              <Stat n={euro(caCumule - montantDu)} l="Déjà facturé" />
              <Stat n={euro(caCumule)} l="Chiffre d'affaires cumulé" />
            </div>

            {activations.length > 0 && (
              <table className="adm-table">
                <thead>
                  <tr><th>Mois</th><th className="adm-num">Activations</th><th className="adm-num">Montant</th></tr>
                </thead>
                <tbody>
                  {parMois(activations).map(([mois, n]) => (
                    <tr key={mois}>
                      <td>{new Date(`${mois}-01`).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}</td>
                      <td className="adm-num">{n}</td>
                      <td className="adm-num adm-strong">{euro(n * pu)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </Carte>
        </div>
      )}

      {/* ── Clients ──────────────────────────────────────────────────────── */}
      <Carte flush titre={`Clients (${clients.length})`} indice="Cliquez pour ouvrir la fiche complète">
        {clients.length === 0 && pendingN === 0 ? (
          <Vide texte="Aucun client pour ce partenaire." />
        ) : (
          <div className="adm-scroll">
            <table className="adm-table adm-table-pad adm-table-rows">
              <thead>
                <tr><th>Client</th><th>Apporté par</th><th>Progression</th><th className="adm-num">Dernière visite</th></tr>
              </thead>
              <tbody>
                {clients.map((m) => {
                  const pct = progressByUser.get(m.id) ?? 0;
                  return (
                    <tr key={m.id}>
                      <td>
                        <Identite
                          principal={m.name || m.email || 'Client'}
                          secondaire={m.name ? m.email : null}
                          href={`/admin/utilisateurs/${m.id}`}
                        />
                      </td>
                      <td className="adm-dim">{invitePar.get(m.id) ?? '—'}</td>
                      <td style={{ minWidth: 130 }}>
                        <p className="adm-dim" style={{ margin: '0 0 5px' }}>{pct} %</p>
                        <Jauge pct={pct} />
                      </td>
                      <td className="adm-num">
                        {m.last_active
                          ? <span className="adm-dim">{dateCourte(m.last_active)}</span>
                          : <span className="adm-tag adm-tag-risk">jamais</span>}
                      </td>
                    </tr>
                  );
                })}

                {pendingInvites.map((inv) => (
                  <tr key={inv.id}>
                    <td>
                      <div className="adm-id">
                        <span className="adm-av" style={{ background: '#EEF2FA', color: '#8E9CBB' }}>
                          <Clock size={15} />
                        </span>
                        <div style={{ minWidth: 0 }}>
                          <p className="adm-id-main" style={{ color: 'var(--adm-ink-soft)' }}>{inv.email}</p>
                          <p className="adm-id-sub">Invitée le {dateCourte(inv.created_at)}</p>
                        </div>
                      </div>
                    </td>
                    <td className="adm-dim">{auteurInvitation(inv.invited_by) ?? '—'}</td>
                    <td><span className="adm-tag adm-tag-warn">en attente</span></td>
                    <td className="adm-num adm-dim">
                      <Mail size={13} style={{ verticalAlign: '-2px' }} /> non activée
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Carte>

      <CloturerCabinetButton
        cabinetId={cabinet.id}
        cabinetName={cabinet.name}
        nbMembres={members?.length ?? 0}
      />
    </>
  );
}
