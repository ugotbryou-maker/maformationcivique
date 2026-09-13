import Link from 'next/link';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import {
  Users, TrendingUp, Euro, Activity, Building2, Scale,
  GraduationCap, AlertTriangle, ChevronRight, Infinity as InfinityIcon,
} from 'lucide-react';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';
import { getAdminStats, estLifetime } from '@/lib/admin-stats';

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

export default async function AdminDashboardPage() {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!isAdminEmail(user?.email)) redirect('/dashboard');

  const s = await getAdminStats();
  const maxSerie = Math.max(1, ...s.serie.map((p) => p.inscriptions));

  return (
    <div style={{ maxWidth: 1180, margin: '0 auto', paddingBottom: 56 }}>

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 6 }}>
        <div>
          <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 32px)', fontWeight: 800, marginBottom: 4 }}>
            Pilotage
          </h1>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)' }}>
            Vue consolidée de la plateforme · données en direct
          </p>
        </div>
        <Link href="/admin/cabinets" className="adm-link">
          <Building2 size={15} /> Portefeuille cabinets <ChevronRight size={14} />
        </Link>
      </div>

      {/* Rappel de confidentialité — cette page affiche des données personnelles */}
      <div className="adm-warn">
        <AlertTriangle size={15} style={{ flexShrink: 0, marginTop: 1 }} />
        <p>
          <strong>Outil interne.</strong> Cette page affiche des données personnelles
          d&apos;utilisateurs. Elle n&apos;est accessible qu&apos;aux comptes administrateurs,
          n&apos;est pas indexée, et ne doit faire l&apos;objet d&apos;aucune capture ni
          transmission hors des cas prévus par la politique de confidentialité.
        </p>
      </div>

      {/* ── KPI principaux ───────────────────────────────────────────────── */}
      <div className="adm-kpis">
        <Kpi icon={<Users size={16} />} label="Utilisateurs" value={String(s.totalUsers)}
             sub={`+${s.nouveaux.j7} sur 7 jours`} accent="#002395" />
        <Kpi icon={<Activity size={16} />} label="Actifs 30 j" value={String(s.actifs.mau)}
             sub={`${s.actifs.dau} aujourd'hui · ${s.actifs.wau} sur 7 j`} accent="#0057A8" />
        <Kpi icon={<Euro size={16} />} label="Revenu récurrent" value={euro(s.mrr)}
             sub={`${euro(s.mrr * 12)} par an`} accent="#1D9E75" />
        <Kpi icon={<TrendingUp size={16} />} label="Taux de conversion" value={`${s.tauxConversion.toFixed(1)} %`}
             sub={`${s.payants} comptes payants`} accent="#CC1A1A" />
      </div>

      {/* ── Acquisition ──────────────────────────────────────────────────── */}
      <h2 className="adm-h2">Acquisition</h2>
      <div className="adm-card">
        <div className="adm-row3" style={{ marginBottom: 20 }}>
          <Mini label="Aujourd'hui" value={s.nouveaux.j1} />
          <Mini label="7 derniers jours" value={s.nouveaux.j7} />
          <Mini label="30 derniers jours" value={s.nouveaux.j30} />
        </div>
        <p className="adm-legend">Inscriptions par jour — 30 derniers jours</p>
        <div className="adm-chart" role="img" aria-label={`Inscriptions quotidiennes, maximum ${maxSerie}`}>
          {s.serie.map((p) => (
            <div key={p.jour} className="adm-bar-wrap" title={`${p.jour} — ${p.inscriptions} inscription(s)`}>
              <div
                className="adm-bar"
                style={{ height: `${Math.max(3, (p.inscriptions / maxSerie) * 100)}%`, opacity: p.inscriptions ? 1 : 0.25 }}
              />
            </div>
          ))}
        </div>
        <div className="adm-chart-axis">
          <span>{s.serie[0]?.jour.slice(8)}/{s.serie[0]?.jour.slice(5, 7)}</span>
          <span>aujourd&apos;hui</span>
        </div>
      </div>

      {/* ── Revenus ──────────────────────────────────────────────────────── */}
      <h2 className="adm-h2">Revenus</h2>
      <div className="adm-grid2">
        <div className="adm-card">
          <p className="adm-legend">Abonnements en cours</p>
          <table className="adm-table">
            <tbody>
              <Ligne label={`Civique — ${s.prix.premium} €/mois`} n={s.parPlan.premium} total={s.parPlan.premium * s.prix.premium} />
              <Ligne label={`Langue — ${s.prix.langue} €/mois`} n={s.parPlan.langue} total={s.parPlan.langue * s.prix.langue} />
              <Ligne label={`Complet — ${s.prix.bundle} €/mois`} n={s.parPlan.bundleMensuel} total={s.parPlan.bundleMensuel * s.prix.bundle} />
              <tr className="adm-total">
                <td>Revenu mensuel récurrent</td>
                <td />
                <td>{euro(s.mrr)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="adm-card">
          <p className="adm-legend">Encaissements non récurrents et B2B</p>
          <table className="adm-table">
            <tbody>
              <Ligne label={`Accès à vie — ${s.prix.lifetime} €`} n={s.parPlan.lifetime} total={s.revenuLifetime} />
              <Ligne label="Licences cabinets (annuel)" n={s.cabinets.length} total={s.caCabinetsAnnuel} />
              <tr className="adm-total">
                <td>Cumul</td>
                <td />
                <td>{euro(s.revenuLifetime + s.caCabinetsAnnuel)}</td>
              </tr>
            </tbody>
          </table>
          <p className="adm-note">
            L&apos;accès à vie est un encaissement unique, la licence cabinet un montant annuel :
            ces deux lignes ne s&apos;additionnent pas au revenu récurrent.
          </p>
        </div>
      </div>

      {/* ── Répartition des comptes ──────────────────────────────────────── */}
      <h2 className="adm-h2">Répartition des comptes</h2>
      <div className="adm-card">
        <div className="adm-plans">
          <Plan label="Gratuit" n={s.parPlan.free} total={s.totalUsers} color="#94A3B8" />
          <Plan label="Civique" n={s.parPlan.premium} total={s.totalUsers} color="#002395" />
          <Plan label="Langue" n={s.parPlan.langue} total={s.totalUsers} color="#0057A8" />
          <Plan label="Complet" n={s.parPlan.bundleMensuel} total={s.totalUsers} color="#7C3AED" />
          <Plan label="Accès à vie" n={s.parPlan.lifetime} total={s.totalUsers} color="#1D9E75" />
        </div>
      </div>

      {/* ── Segmentation par démarche — base de la mise en relation ──────── */}
      <h2 className="adm-h2">Profils par démarche</h2>
      <div className="adm-grid2">
        <div className="adm-card">
          <p className="adm-legend">Démarche déclarée à l&apos;inscription</p>
          <table className="adm-table">
            <tbody>
              {Object.entries(s.parDemarche)
                .sort((a, b) => b[1] - a[1])
                .map(([k, n]) => (
                  <tr key={k}>
                    <td>{DEMARCHE_LABEL[k] ?? k}</td>
                    <td className="adm-num">{n}</td>
                    <td className="adm-num">{Math.round((n / s.totalUsers) * 100)} %</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="adm-card">
          <p className="adm-legend">Signaux d&apos;intention</p>
          <div className="adm-row3" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <Mini label="Souhaitent être accompagnés" value={s.souhaitentAccompagnement} />
            <Mini label="Onboarding terminé" value={s.onboardingComplet} />
          </div>
          <div className="adm-warn adm-warn-soft" style={{ marginTop: 16 }}>
            <Scale size={15} style={{ flexShrink: 0, marginTop: 1 }} />
            <p>
              <strong>Avant toute transmission à un avocat partenaire :</strong> ces comptes
              n&apos;ont pas tous consenti au partage de leurs données avec un tiers. Seuls les
              contacts issus du test d&apos;éligibilité, qui comporte une case dédiée, peuvent
              être transmis. Un export global exposerait à une sanction RGPD.
            </p>
          </div>
        </div>
      </div>

      {/* ── Engagement produit ───────────────────────────────────────────── */}
      <h2 className="adm-h2">Engagement produit</h2>
      <div className="adm-card">
        <div className="adm-row3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
          <Mini label="Leçons terminées" value={s.engagement.leconsCompletees} />
          <Mini label="Examens blancs passés" value={s.engagement.examensPasses} />
          <Mini label="Examens réussis" value={s.engagement.examensReussis} />
          <Mini label="Score moyen" value={`${s.engagement.scoreMoyen} %`} />
          <Mini label="Badges obtenus" value={s.engagement.badges} />
        </div>
      </div>

      {/* ── Leads B2B (aperçu cabinet) ───────────────────────────────────── */}
      <h2 className="adm-h2">Leads cabinets ({s.apercuLeads.length})</h2>
      <div className="adm-card">
        {s.apercuLeads.length === 0 ? (
          <p className="adm-empty">Aucun lead cabinet pour le moment.</p>
        ) : (
          <table className="adm-table adm-table-full">
            <thead>
              <tr><th>Cabinet</th><th>Contact</th><th>E-mail</th><th>Téléphone</th><th>Reçu le</th></tr>
            </thead>
            <tbody>
              {s.apercuLeads.slice(0, 15).map((l) => (
                <tr key={l.id}>
                  <td>{l.cabinet_name ?? l.domain ?? '—'}</td>
                  <td>{l.lead_name ?? '—'}</td>
                  <td>{l.lead_email ?? '—'}</td>
                  <td>{l.lead_phone ?? '—'}</td>
                  <td>{dateCourte(l.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ── Derniers inscrits ────────────────────────────────────────────── */}
      <h2 className="adm-h2">Derniers inscrits</h2>
      <div className="adm-card">
        <table className="adm-table adm-table-full">
          <thead>
            <tr><th>E-mail</th><th>Offre</th><th>Démarche</th><th>Inscrit le</th><th>Vu le</th></tr>
          </thead>
          <tbody>
            {s.users.slice(0, 20).map((x) => (
              <tr key={x.id}>
                <td>{x.email ?? '—'}</td>
                <td>
                  <span className={`adm-tag ${(x.plan ?? 'free') === 'free' ? 'adm-tag-free' : 'adm-tag-paid'}`}>
                    {estLifetime(x) ? <><InfinityIcon size={10} /> à vie</> : (x.plan ?? 'free')}
                  </span>
                </td>
                <td>{x.demarche ? (DEMARCHE_LABEL[x.demarche] ?? x.demarche) : '—'}</td>
                <td>{dateCourte(x.created_at)}</td>
                <td>{dateCourte(x.last_active)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Cabinets ─────────────────────────────────────────────────────── */}
      <h2 className="adm-h2">Cabinets partenaires</h2>
      <div className="adm-card">
        <div className="adm-row3" style={{ marginBottom: 16 }}>
          <Mini label="Cabinets actifs" value={s.cabinets.length} />
          <Mini label="Invitations utilisées" value={`${s.invitations.utilisees} / ${s.invitations.total}`} />
          <Mini label="CA annuel B2B" value={euro(s.caCabinetsAnnuel)} />
        </div>

        {/* Partenaires facturés à l'activation : le montant dû ne se lit nulle
            part ailleurs, c'est lui qui déclenche la facture du mois. */}
        {s.partenaires.filter((p) => p.billing_mode === 'usage').length > 0 && (
          <div style={{ marginBottom: 16 }}>
            <p className="adm-note" style={{ marginBottom: 8 }}>
              Partenaires facturés à l&apos;activation —{' '}
              <strong>{euro(s.aFacturerPartenaires)}</strong> à facturer
            </p>
            <table className="adm-table">
              <thead>
                <tr><th>Partenaire</th><th>Activations</th><th>Actifs 30 j</th><th>À facturer</th></tr>
              </thead>
              <tbody>
                {s.partenaires.filter((p) => p.billing_mode === 'usage').map((p) => (
                  <tr key={p.id}>
                    <td>
                      <Link href={`/admin/cabinets/${p.id}`} className="adm-link">{p.name}</Link>
                    </td>
                    <td>{p.activations}{p.enAttente > 0 && ` (+${p.enAttente} en attente)`}</td>
                    <td>{p.membresActifs}</td>
                    <td><strong>{euro(p.montantDu)}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <Link href="/admin/cabinets" className="adm-link">
          Voir le portefeuille détaillé <ChevronRight size={14} />
        </Link>
      </div>

      <style>{`
        .adm-h2 {
          font-size: 12.5px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.07em; color: var(--color-text-muted);
          margin: 30px 0 12px;
        }
        .adm-card {
          background: var(--color-surface); border: var(--border-default);
          border-radius: var(--radius-xl); padding: 20px 22px;
          box-shadow: var(--shadow-card);
        }
        .adm-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; align-items: start; }
        .adm-kpis { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 18px; }
        .adm-row3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .adm-legend {
          font-size: 12px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.05em; color: var(--color-text-muted); margin-bottom: 12px;
        }
        .adm-note { font-size: 11.5px; line-height: 1.6; color: var(--color-text-muted); margin-top: 12px; }
        .adm-empty { font-size: 14px; color: var(--color-text-muted); }
        .adm-table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
        .adm-table td { padding: 8px 0; border-bottom: 1px solid var(--color-border); }
        .adm-table th {
          text-align: left; padding: 6px 8px 8px 0; font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-muted);
          border-bottom: 1px solid var(--color-border);
        }
        .adm-table-full td { padding: 9px 8px 9px 0; }
        .adm-table tr:last-child td { border-bottom: none; }
        .adm-num { text-align: right; font-variant-numeric: tabular-nums; }
        .adm-table td:last-child { text-align: right; font-variant-numeric: tabular-nums; }
        .adm-table-full td:last-child, .adm-table-full th:last-child { text-align: right; }
        .adm-total td { font-weight: 800; border-top: 2px solid var(--color-border); border-bottom: none; padding-top: 10px; }
        .adm-tag {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 100px;
        }
        .adm-tag-free { background: var(--color-off-white); color: var(--color-text-muted); }
        .adm-tag-paid { background: #E1F5EE; color: #0F7A57; }
        .adm-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 13.5px; font-weight: 600; color: var(--color-blue-france);
          text-decoration: none;
        }
        .adm-warn {
          display: flex; gap: 10px; align-items: flex-start;
          background: #FFFBEB; border: 1px solid #FDE68A; color: #78350F;
          border-radius: var(--radius-lg); padding: 12px 16px; margin-top: 16px;
        }
        .adm-warn p { font-size: 12.5px; line-height: 1.6; margin: 0; }
        .adm-warn-soft { background: #F5F3FF; border-color: #DDD6FE; color: #4C1D95; }
        .adm-chart {
          display: flex; align-items: flex-end; gap: 3px; height: 110px;
          padding: 6px 0; border-bottom: 1px solid var(--color-border);
        }
        .adm-bar-wrap { flex: 1; height: 100%; display: flex; align-items: flex-end; }
        .adm-bar { width: 100%; background: var(--gradient-primary); border-radius: 3px 3px 0 0; }
        .adm-chart-axis {
          display: flex; justify-content: space-between;
          font-size: 11px; color: var(--color-text-muted); margin-top: 6px;
        }
        .adm-plans { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 14px; }
        @media (max-width: 900px) {
          .adm-kpis { grid-template-columns: 1fr 1fr; }
          .adm-grid2 { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .adm-kpis, .adm-row3 { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

/* ── Composants d'affichage ─────────────────────────────────────────────── */

function Kpi({ icon, label, value, sub, accent }: {
  icon: React.ReactNode; label: string; value: string; sub: string; accent: string;
}) {
  return (
    <div className="adm-card" style={{ borderTop: `3px solid ${accent}` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: accent, marginBottom: 8 }}>
        {icon}
        <span style={{ fontSize: 11.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {label}
        </span>
      </div>
      <p style={{ fontSize: 27, fontWeight: 800, lineHeight: 1.1, marginBottom: 3 }}>{value}</p>
      <p style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{sub}</p>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <p style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.15 }}>{value}</p>
      <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 2 }}>{label}</p>
    </div>
  );
}

function Ligne({ label, n, total }: { label: string; n: number; total: number }) {
  return (
    <tr>
      <td>{label}</td>
      <td className="adm-num">{n}</td>
      <td>{total.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}</td>
    </tr>
  );
}

function Plan({ label, n, total, color }: { label: string; n: number; total: number; color: string }) {
  const pct = total ? Math.round((n / total) * 100) : 0;
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 6 }}>
        <span style={{ fontSize: 20, fontWeight: 800 }}>{n}</span>
        <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{pct} %</span>
      </div>
      <div style={{ height: 5, background: 'var(--color-off-white)', borderRadius: 3, overflow: 'hidden', marginBottom: 6 }}>
        <div style={{ width: `${pct}%`, height: '100%', background: color }} />
      </div>
      <p style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>{label}</p>
    </div>
  );
}
