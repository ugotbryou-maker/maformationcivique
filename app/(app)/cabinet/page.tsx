import Link from 'next/link';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import {
  AlertTriangle, ArrowUpRight, Users, Target, TrendingUp, Infinity as InfinityIcon,
  Clock, UserPlus, Mail,
} from 'lucide-react';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { CabinetInviteForm } from '@/components/app/CabinetInviteForm';
import { CabinetExportBtn } from '@/components/app/CabinetExportBtn';
import { CabinetClientActions } from '@/components/app/CabinetClientActions';
import { CabinetNav } from '@/components/app/CabinetNav';
import { Kpi, Carte, Stat, Identite, Jauge, Vide } from '@/components/admin/ui';
import { calculerProgression, voletDuPlan, type ProgressionVolets } from '@/lib/progression';
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

function dateCourte(d: string | null) {
  return d ? new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' }) : '—';
}

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

  // Les erreurs de lecture étaient ignorées : une colonne absente du projet
  // de production donnait une exception nue, sans message exploitable depuis
  // le navigateur — Next les masque en production.
  const { data: cabinet, error: errCabinet } = await service
    .from('cabinets').select('*').eq('id', profile.cabinet_id).single();
  if (errCabinet) throw new Error(`cabinets — ${errCabinet.message}`);

  const { data: members, error: errMembres } = await service
    .from('users')
    .select('id, name, email, plan, cabinet_role, xp, last_active')
    .eq('cabinet_id', profile.cabinet_id);
  if (errMembres) throw new Error(`users — ${errMembres.message}`);

  // Toutes les invitations, pas seulement celles en attente : les invitations
  // utilisées disent qui a amené chaque client, ce qui compte dès qu'un
  // cabinet confie son portefeuille à plusieurs commerciaux.
  const { data: toutesInvites, error: errInvites } = await service
    .from('cabinet_invites')
    .select('id, email, created_at, role, invited_by, redeemed_at, redeemed_user_id')
    .eq('cabinet_id', profile.cabinet_id);
  if (errInvites) throw new Error(`cabinet_invites — ${errInvites.message}`);

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

  // La progression se calcule sur le volet souscrit par le cabinet. Rapporter
  // un élève inscrit au seul français aux 22 leçons civiques le ferait
  // apparaître à 0 % alors qu'il peut avoir bien avancé.
  const { data: examens } = memberIds.length
    ? await service.from('exam_results').select('user_id, exam_level, score, total_q, passed').in('user_id', memberIds)
    : { data: [] as { user_id: string; exam_level: string; score: number; total_q: number; passed: boolean }[] };
  const examParUser = new Map<string, NonNullable<typeof examens>>();
  for (const e of examens ?? []) {
    const l = examParUser.get(e.user_id) ?? [];
    l.push(e);
    examParUser.set(e.user_id, l);
  }

  const volet = voletDuPlan(null, cabinet?.member_plan);
  const progressByUser = new Map<string, ProgressionVolets>();
  for (const member of members ?? []) {
    progressByUser.set(
      member.id,
      calculerProgression(
        (allProgress ?? []).filter((p) => p.user_id === member.id),
        volet, null, examParUser.get(member.id) ?? [],
      ),
    );
  }
  // La préparation prime sur le nombre de leçons : c'est elle qui dit si le
  // client est prêt, et c'est la seule chose que le cabinet a à savoir.
  const pctDe = (id: string) => progressByUser.get(id)?.preparation.pct ?? 0;

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
    ? Math.round(activeMembers.reduce((s, m) => s + pctDe(m.id), 0) / activeMembers.length)
    : 0;
  const readyCount = activeMembers.filter((m) => pctDe(m.id) >= 80).length;
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
      {/* Le même tableau que la fiche partenaire côté administration : un
          cabinet doit voir de ses clients exactement ce que nous en voyons,
          préparation, examens blancs et dernière visite compris. */}
      <Carte
        flush
        titre={`Clients (${activeMembers.length})`}
        indice="Cliquez sur un client pour ouvrir sa fiche complète"
        action={<CabinetExportBtn />}
      >
        {activeMembers.length === 0 && pendingInvites.length === 0 ? (
          <Vide texte="Aucun client invité pour le moment." />
        ) : (
          <div className="adm-scroll">
            <table className="adm-table adm-table-pad adm-table-rows">
              <thead>
                <tr>
                  <th>Client</th><th>Apporté par</th><th>Progression</th>
                  <th className="adm-num">Examens</th><th className="adm-num">Dernière visite</th><th />
                </tr>
              </thead>
              <tbody>
                {activeMembers.map((m) => {
                  const pr = progressByUser.get(m.id);
                  const pct = pr?.preparation.pct ?? 0;
                  const ex = examParUser.get(m.id) ?? [];
                  const exLangue = ex.filter((e) => (e.exam_level ?? '').startsWith('LANG_')).length;
                  return (
                    <tr key={m.id}>
                      <td>
                        <Identite
                          principal={m.name || m.email || 'Client'}
                          secondaire={m.name ? m.email : null}
                          href={`/cabinet/membre/${m.id}`}
                        />
                      </td>
                      <td className="adm-dim">{invitePar.get(m.id) ?? '—'}</td>
                      <td style={{ minWidth: 190 }}>
                        <p style={{ margin: '0 0 2px', display: 'flex', alignItems: 'baseline', gap: 7 }}>
                          <strong style={{ fontSize: 15 }}>{pct} %</strong>
                          {pr && (
                            <span className={`adm-tag ${pr.preparation.source === 'examen' ? 'adm-tag-life' : 'adm-tag-free'}`}>
                              {pr.preparation.source === 'examen' ? 'examen blanc' : 'parcours'}
                            </span>
                          )}
                        </p>
                        <p className="adm-dim" style={{ margin: '0 0 5px', fontSize: 11.5 }}>
                          {pr?.leconsTerminees ?? 0} leçon{(pr?.leconsTerminees ?? 0) > 1 ? 's' : ''}
                          {pr?.modulesTermines ? ` · ${pr.modulesTermines} module${pr.modulesTermines > 1 ? 's' : ''} terminé${pr.modulesTermines > 1 ? 's' : ''}` : ''}
                          {pr?.moduleEnCours ? ` · ${pr.moduleEnCours.titre} ${pr.moduleEnCours.pct} %` : ''}
                        </p>
                        <Jauge pct={pct} couleur={pct >= 80 ? '#0E7A58' : undefined} />
                      </td>
                      <td className="adm-num">
                        {ex.length === 0
                          ? <span className="adm-dim">—</span>
                          : <span className={`adm-tag ${ex.some((e) => e.passed) ? 'adm-tag-life' : ''}`}
                                  title={exLangue ? `dont ${exLangue} linguistique${exLangue > 1 ? 's' : ''}` : undefined}>
                              {ex.filter((e) => e.passed).length}/{ex.length}
                            </span>}
                      </td>
                      <td className="adm-num">
                        {m.last_active
                          ? <span className="adm-dim">{dateCourte(m.last_active)}</span>
                          : <span className="adm-tag adm-tag-risk">jamais</span>}
                      </td>
                      <td className="adm-num">
                        <CabinetClientActions
                          userId={m.id}
                          nom={m.name || m.email || 'ce client'}
                          pct={pr?.global.pct ?? 0}
                        />
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
                          <p className="adm-id-sub">Invité le {dateCourte(inv.created_at)}</p>
                        </div>
                      </div>
                    </td>
                    <td className="adm-dim">{auteurInvitation(inv.invited_by) ?? '—'}</td>
                    <td><span className="adm-tag adm-tag-warn">en attente</span></td>
                    <td className="adm-num adm-dim" colSpan={3}>
                      <Mail size={13} style={{ verticalAlign: '-2px' }} /> non activée
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
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
