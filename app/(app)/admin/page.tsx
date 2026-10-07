import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Users, TrendingUp, Euro, Activity, Building2, Scale, ChevronRight,
  Infinity as InfinityIcon, AlertTriangle, Receipt, Clock, MailWarning, CalendarClock,
} from 'lucide-react';
import { getAdminStats, estLifetime } from '@/lib/admin-stats';
import { Kpi, Carte, Stat, Identite, Repartition, Vide } from '@/components/admin/ui';
import { Courbe } from '@/components/admin/Courbe';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Pilotage — maformationcivique.fr',
  // Outil interne : jamais indexé, jamais suivi.
  robots: { index: false, follow: false, nocache: true },
};

// Les valeurs stockées ne sont pas homogènes selon la version de l'onboarding
// qui les a écrites : on couvre les variantes réellement présentes en base.
const DEMARCHE_LABEL: Record<string, string> = {
  CSP: 'Carte de séjour pluriannuelle',
  csp: 'Carte de séjour pluriannuelle',
  'Carte de séjour pluriannuelle': 'Carte de séjour pluriannuelle',
  CR: 'Carte de résident',
  carte_resident: 'Carte de résident',
  'Carte de résident': 'Carte de résident',
  NAT: 'Naturalisation',
  naturalisation: 'Naturalisation',
  'non renseignée': 'Non renseignée',
};

function euro(n: number) {
  return n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
}
function dateCourte(d: string | null) {
  return d ? new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' }) : '—';
}
function joursDepuis(d: string | null) {
  if (!d) return null;
  return Math.floor((Date.now() - new Date(d).getTime()) / 86400000);
}

export default async function AdminDashboardPage() {
  const s = await getAdminStats();
  const t = s.aTraiter;

  return (
    <>
      <header className="adm-head">
        <div>
          <h1 className="adm-title">Pilotage</h1>
          <p className="adm-sub">Vue consolidée de la plateforme · données en direct</p>
        </div>
        <Link href="/admin/cabinets" className="adm-btn adm-btn-light">
          <Building2 size={15} /> Portefeuille partenaires
        </Link>
      </header>

      {/* ── Indicateurs ──────────────────────────────────────────────────── */}
      <div className="adm-grid adm-grid-4">
        <Kpi teinte="sky" icon={<Users size={16} />} label="Utilisateurs"
             value={String(s.totalUsers)} sub={`+${s.nouveaux.j7} sur 7 jours`} />
        <Kpi teinte="violet" icon={<Activity size={16} />} label="Actifs 30 jours"
             value={String(s.actifs.mau)} sub={`${s.actifs.dau} aujourd'hui · ${s.actifs.wau} sur 7 j`} />
        <Kpi teinte="mint" icon={<Euro size={16} />} label="Revenu récurrent"
             value={euro(s.mrr)} sub={`${euro(s.mrr * 12)} par an`} />
        <Kpi teinte="cream" icon={<TrendingUp size={16} />} label="Conversion"
             value={`${s.tauxConversion.toFixed(1)} %`} sub={`${s.payants} comptes payants`} />
      </div>

      {/* ── Courbe + file d'actions ──────────────────────────────────────── */}
      <div className="adm-grid adm-grid-wide">
        <Carte
          titre="Inscriptions"
          indice="30 derniers jours"
          action={
            <div style={{ display: 'flex', gap: 22 }}>
              <Stat n={s.nouveaux.j1} l="Aujourd'hui" />
              <Stat n={s.nouveaux.j7} l="7 jours" />
              <Stat n={s.nouveaux.j30} l="30 jours" />
            </div>
          }
        >
          <Courbe points={s.serie.map((p) => ({ jour: p.jour, valeur: p.inscriptions }))} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <span className="adm-dim">{dateCourte(s.serie[0]?.jour ?? null)}</span>
            <span className="adm-dim">aujourd&apos;hui</span>
          </div>
        </Carte>

        <div className="adm-dark">
          <p className="adm-dark-title">
            {t.total > 0 ? `${t.total} point${t.total > 1 ? 's' : ''} à traiter` : 'Rien à traiter'}
          </p>
          <p className="adm-dark-text" style={{ marginBottom: 20 }}>
            {t.total > 0
              ? 'Ce qui appelle une décision aujourd’hui, plutôt que l’ensemble des chiffres.'
              : 'Aucun impayé, aucune échéance proche, aucun compte dormant.'}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
            <LigneAction
              icone={<Receipt size={14} />}
              texte={`${t.partenairesAFacturer.length} partenaire${t.partenairesAFacturer.length > 1 ? 's' : ''} à facturer`}
              valeur={euro(s.aFacturerPartenaires)}
              href="/admin/cabinets"
            />
            <LigneAction
              icone={<Activity size={14} />}
              texte="Payants inactifs depuis 30 jours"
              valeur={String(t.payantsInactifs.length)}
              href="/admin/utilisateurs?filtre=inactifs"
            />
            <LigneAction
              icone={<CalendarClock size={14} />}
              texte="Échéances dans moins de 30 jours"
              valeur={String(t.echeancesProches.length)}
              href="/admin/utilisateurs?filtre=echeance"
            />
            <LigneAction
              icone={<MailWarning size={14} />}
              texte="Invitations sans suite depuis 14 jours"
              valeur={String(t.invitationsDormantes.length)}
              href="/admin/cabinets"
            />
            <LigneAction
              icone={<Clock size={14} />}
              texte="Payants jamais connectés"
              valeur={String(t.jamaisConnectes.length)}
              href="/admin/utilisateurs?filtre=jamais"
            />
          </div>
        </div>
      </div>

      {/* ── Revenus ──────────────────────────────────────────────────────── */}
      <div className="adm-grid adm-grid-2">
        <Carte titre="Abonnements en cours" indice="Revenu mensuel récurrent">
          <table className="adm-table">
            <tbody>
              <Ligne label={`Civique — ${s.prix.premium} €/mois`} n={s.parPlan.premium} total={s.parPlan.premium * s.prix.premium} />
              <Ligne label={`Langue — ${s.prix.langue} €/mois`} n={s.parPlan.langue} total={s.parPlan.langue * s.prix.langue} />
              <Ligne label={`Complet — ${s.prix.bundle} €/mois`} n={s.parPlan.bundleMensuel} total={s.parPlan.bundleMensuel * s.prix.bundle} />
              <tr className="adm-total">
                <td>Total mensuel</td><td />
                <td className="adm-num">{euro(s.mrr)}</td>
              </tr>
            </tbody>
          </table>
        </Carte>

        <Carte titre="Encaissements uniques et B2B" indice="Hors revenu récurrent">
          <table className="adm-table">
            <tbody>
              <Ligne label={`Accès à vie — ${s.prix.lifetime} €`} n={s.parPlan.lifetime} total={s.revenuLifetime} />
              <Ligne label="Licences partenaires (annuel)" n={s.cabinets.filter((c) => c.billing_mode !== 'usage').length} total={s.caCabinetsAnnuel} />
              <Ligne label="Partenaires à l'usage (dû)" n={s.aTraiter.partenairesAFacturer.length} total={s.aFacturerPartenaires} />
              <tr className="adm-total">
                <td>Cumul</td><td />
                <td className="adm-num">{euro(s.revenuLifetime + s.caCabinetsAnnuel + s.aFacturerPartenaires)}</td>
              </tr>
            </tbody>
          </table>
          <p className="adm-note">
            L&apos;accès à vie est un encaissement unique et la licence partenaire un montant
            annuel : ces lignes ne s&apos;additionnent pas au revenu récurrent.
          </p>
        </Carte>
      </div>

      {/* ── Répartition et rétention ─────────────────────────────────────── */}
      <div className="adm-grid adm-grid-2">
        <Carte titre="Répartition des comptes" indice="Comptes B2C uniquement — hors membres de partenaires">
          <Repartition
            parts={[
              { label: 'Gratuit',     n: s.parPlan.free,          couleur: '#C7D2E8' },
              { label: 'Civique',     n: s.parPlan.premium,       couleur: '#1D5FD1' },
              { label: 'Langue',      n: s.parPlan.langue,        couleur: '#5FA8F5' },
              { label: 'Complet',     n: s.parPlan.bundleMensuel, couleur: '#8B5FD6' },
              { label: 'Accès à vie', n: s.parPlan.lifetime,      couleur: '#0E7A58' },
            ]}
          />
          <p className="adm-note">
            {s.membresPartenaires} compte{s.membresPartenaires > 1 ? 's' : ''} supplémentaire
            {s.membresPartenaires > 1 ? 's' : ''} proviennent de partenaires : leur accès est
            facturé au partenaire, pas à eux.
          </p>
        </Carte>

        <Carte titre="Engagement et rétention">
          <div className="adm-stats" style={{ marginBottom: 20 }}>
            <Stat n={`${Math.round(s.retention.taux)} %`} l={`Inscrits de plus de 60 j encore actifs (${s.retention.revenus}/${s.retention.cohorte})`} />
            <Stat n={s.engagement.leconsCompletees} l="Leçons terminées" />
            <Stat n={s.engagement.examensPasses} l="Examens blancs" />
          </div>
          <div className="adm-stats">
            <Stat n={s.engagement.examensReussis} l="Examens réussis" />
            <Stat n={`${s.engagement.scoreMoyen} %`} l="Score moyen" />
            <Stat n={s.engagement.badges} l="Badges obtenus" />
          </div>
        </Carte>
      </div>

      {/* ── Profils ──────────────────────────────────────────────────────── */}
      <div className="adm-grid adm-grid-2">
        <Carte titre="Démarche déclarée" indice="Base de la mise en relation">
          <table className="adm-table">
            <tbody>
              {Object.entries(s.parDemarche).sort((a, b) => b[1] - a[1]).map(([k, n]) => (
                <tr key={k}>
                  <td>{DEMARCHE_LABEL[k] ?? k}</td>
                  <td className="adm-num adm-strong">{n}</td>
                  <td className="adm-num adm-dim">{Math.round((n / s.totalUsers) * 100)} %</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Carte>

        <Carte titre="Signaux d'intention">
          <div className="adm-stats" style={{ marginBottom: 18 }}>
            <Stat n={s.souhaitentAccompagnement} l="Souhaitent être accompagnés" />
            <Stat n={s.onboardingComplet} l="Onboarding terminé" />
            <Stat n={s.leadsEligibilite.length} l="Leads du test d'éligibilité" />
          </div>
          <div className="adm-callout adm-callout-legal">
            <Scale size={15} style={{ flexShrink: 0, marginTop: 1 }} />
            <p>
              <strong>Avant toute transmission à un avocat partenaire :</strong> ces comptes
              n&apos;ont pas tous consenti au partage de leurs données avec un tiers. Seuls les
              contacts issus du test d&apos;éligibilité, qui comporte une case dédiée, peuvent
              être transmis. Un export global exposerait à une sanction RGPD.
            </p>
          </div>
        </Carte>
      </div>

      {/* ── Derniers inscrits ────────────────────────────────────────────── */}
      <Carte
        flush
        titre="Derniers inscrits"
        action={<Link href="/admin/utilisateurs" className="adm-link">Tous les utilisateurs <ChevronRight size={14} /></Link>}
      >
        <div className="adm-scroll">
          <table className="adm-table adm-table-pad adm-table-rows">
            <thead>
              <tr><th>Compte</th><th>Offre</th><th>Démarche</th><th>Inscrit</th><th className="adm-num">Dernière visite</th></tr>
            </thead>
            <tbody>
              {s.users.slice(0, 12).map((x) => {
                const j = joursDepuis(x.last_active);
                return (
                  <tr key={x.id}>
                    <td>
                      <Identite
                        principal={x.name || x.email || 'Utilisateur'}
                        secondaire={x.name ? x.email : null}
                        href={`/admin/utilisateurs/${x.id}`}
                      />
                    </td>
                    <td><EtiquettePlan plan={x.plan} lifetime={estLifetime(x)} /></td>
                    <td className="adm-dim">{x.demarche ? (DEMARCHE_LABEL[x.demarche] ?? x.demarche) : '—'}</td>
                    <td className="adm-dim">{dateCourte(x.created_at)}</td>
                    <td className="adm-num">
                      {j == null
                        ? <span className="adm-tag adm-tag-risk">jamais</span>
                        : <span className={`adm-tag ${j > 30 ? 'adm-tag-warn' : ''}`}>{j === 0 ? "aujourd'hui" : `il y a ${j} j`}</span>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Carte>

      {/* ── Leads cabinets ───────────────────────────────────────────────── */}
      <div style={{ marginTop: 16 }}>
        <Carte flush titre={`Leads cabinets (${s.apercuLeads.length})`} indice="Formulaire d'aperçu partenaire">
          {s.apercuLeads.length === 0 ? (
            <Vide texte="Aucun lead cabinet pour le moment." />
          ) : (
            <div className="adm-scroll">
              <table className="adm-table adm-table-pad adm-table-rows">
                <thead>
                  <tr><th>Cabinet</th><th>Contact</th><th>Téléphone</th><th className="adm-num">Reçu le</th></tr>
                </thead>
                <tbody>
                  {s.apercuLeads.slice(0, 10).map((l) => (
                    <tr key={l.id}>
                      <td className="adm-strong">{l.cabinet_name ?? l.domain ?? '—'}</td>
                      <td><Identite principal={l.lead_name ?? '—'} secondaire={l.lead_email} /></td>
                      <td className="adm-dim">{l.lead_phone ?? '—'}</td>
                      <td className="adm-num adm-dim">{dateCourte(l.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Carte>
      </div>

      <div className="adm-callout adm-callout-warn" style={{ marginTop: 20, marginBottom: 0 }}>
        <AlertTriangle size={15} style={{ flexShrink: 0, marginTop: 1 }} />
        <p>
          <strong>Outil interne.</strong> Cette page affiche des données personnelles.
          Elle n&apos;est accessible qu&apos;aux comptes administrateurs, n&apos;est pas
          indexée, et ne doit faire l&apos;objet d&apos;aucune capture ni transmission hors
          des cas prévus par la politique de confidentialité.
        </p>
      </div>
    </>
  );
}

function LigneAction({ icone, texte, valeur, href }: {
  icone: React.ReactNode; texte: string; valeur: string; href: string;
}) {
  return (
    <Link href={href} style={{
      display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none',
      color: 'rgba(255,255,255,0.82)', fontSize: 13,
    }}>
      <span style={{
        width: 28, height: 28, borderRadius: 9, flexShrink: 0,
        background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.75)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {icone}
      </span>
      <span style={{ flex: 1, minWidth: 0 }}>{texte}</span>
      <strong style={{ color: '#fff', fontVariantNumeric: 'tabular-nums' }}>{valeur}</strong>
      <ChevronRight size={14} style={{ opacity: 0.45, flexShrink: 0 }} />
    </Link>
  );
}

function Ligne({ label, n, total }: { label: string; n: number; total: number }) {
  return (
    <tr>
      <td>{label}</td>
      <td className="adm-num adm-dim">{n}</td>
      <td className="adm-num adm-strong">{euro(total)}</td>
    </tr>
  );
}

function EtiquettePlan({ plan, lifetime }: { plan: string | null; lifetime: boolean }) {
  if (lifetime) return <span className="adm-tag adm-tag-life"><InfinityIcon size={10} /> à vie</span>;
  const p = plan ?? 'free';
  if (p === 'free') return <span className="adm-tag adm-tag-free">gratuit</span>;
  const libelle = p === 'premium' ? 'civique' : p === 'langue' ? 'langue' : 'complet';
  return <span className="adm-tag adm-tag-paid">{libelle}</span>;
}
