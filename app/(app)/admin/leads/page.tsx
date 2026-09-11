import Link from 'next/link';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { ChevronLeft, Scale, AlertTriangle, Globe } from 'lucide-react';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Leads — maformationcivique.fr',
  robots: { index: false, follow: false, nocache: true },
};

interface Lead {
  id: string;
  created_at: string;
  prenom: string | null;
  nom: string | null;
  email: string | null;
  telephone: string | null;
  demarche: string | null;
  verdict: string | null;
  routage: string | null;
  qualification: string | null;
  consent: boolean | null;
  consent_at: string | null;
  ip: string | null;
  user_agent: string | null;
  referer: string | null;
  utm_source: string | null;
  statut: string | null;
}

function hote(referer: string | null) {
  if (!referer) return null;
  try { return new URL(referer).hostname; } catch { return referer; }
}

function dateHeure(d: string | null) {
  return d
    ? new Date(d).toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })
    : '—';
}

export default async function AdminLeadsPage() {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!isAdminEmail(user?.email)) redirect('/dashboard');

  const service = createServiceRoleClient();
  const { data, error } = await service
    .from('leads_eligibilite')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(200);

  const leads = (data ?? []) as Lead[];
  const avocat = leads.filter((l) => l.routage === 'avocat');
  const consentis = leads.filter((l) => l.consent);

  return (
    <div style={{ maxWidth: 1180, margin: '0 auto', paddingBottom: 56 }}>
      <Link href="/admin" className="lead-back"><ChevronLeft size={15} /> Pilotage</Link>

      <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 32px)', fontWeight: 800, margin: '10px 0 4px' }}>
        Leads — test d&apos;éligibilité
      </h1>
      <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginBottom: 18 }}>
        Prospects issus du formulaire, avec leur qualification et leur provenance.
      </p>

      {error && (
        <div className="lead-warn">
          <AlertTriangle size={15} style={{ flexShrink: 0, marginTop: 1 }} />
          <p>
            <strong>Table absente.</strong> Exécutez{' '}
            <code>supabase/migration_2026_09_leads_eligibilite.sql</code> dans le SQL Editor
            Supabase. Tant que ce n&apos;est pas fait, les leads continuent d&apos;arriver par
            e-mail mais ne sont pas enregistrés. ({error.message})
          </p>
        </div>
      )}

      <div className="lead-kpis">
        <div className="lead-card"><p className="lead-n">{leads.length}</p><p className="lead-l">Leads enregistrés</p></div>
        <div className="lead-card"><p className="lead-n" style={{ color: '#B91C1C' }}>{avocat.length}</p><p className="lead-l">À orienter vers un avocat</p></div>
        <div className="lead-card"><p className="lead-n" style={{ color: '#0F7A57' }}>{consentis.length}</p><p className="lead-l">Consentement recueilli</p></div>
      </div>

      <div className="lead-warn lead-warn-soft">
        <Scale size={15} style={{ flexShrink: 0, marginTop: 1 }} />
        <p>
          Seuls les leads portant la mention <strong>consentement recueilli</strong> peuvent être
          transmis à un avocat partenaire. Pour les autres, la case n&apos;a pas été enregistrée :
          les recontacter à des fins de mise en relation vous exposerait à une réclamation.
        </p>
      </div>

      {leads.length === 0 && !error ? (
        <div className="lead-card" style={{ marginTop: 14 }}>
          <p style={{ fontSize: 14, color: 'var(--color-text-muted)' }}>
            Aucun lead enregistré pour l&apos;instant. Les soumissions antérieures à la mise en
            place de cette table n&apos;ont laissé qu&apos;une trace e-mail, sans adresse IP.
          </p>
        </div>
      ) : (
        <div className="lead-card" style={{ marginTop: 14, overflowX: 'auto' }}>
          <table className="lead-table">
            <thead>
              <tr>
                <th>Reçu le</th><th>Contact</th><th>Téléphone</th><th>Démarche</th>
                <th>Orientation</th><th>Consent.</th><th>IP</th><th>Provenance</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l) => (
                <tr key={l.id}>
                  <td style={{ whiteSpace: 'nowrap' }}>{dateHeure(l.created_at)}</td>
                  <td>
                    <strong>{[l.prenom, l.nom].filter(Boolean).join(' ') || '—'}</strong>
                    <br /><span className="lead-mail">{l.email ?? '—'}</span>
                  </td>
                  <td style={{ whiteSpace: 'nowrap' }}>{l.telephone ?? '—'}</td>
                  <td>{l.demarche ?? '—'}</td>
                  <td>
                    {l.routage === 'avocat'
                      ? <span className="lead-tag lead-tag-red">Avocat</span>
                      : <span className="lead-tag">{l.routage ?? '—'}</span>}
                  </td>
                  <td>
                    {l.consent
                      ? <span className="lead-tag lead-tag-green">Oui</span>
                      : <span className="lead-tag lead-tag-grey">Non</span>}
                  </td>
                  <td style={{ fontFamily: 'monospace', fontSize: 12 }}>{l.ip ?? '—'}</td>
                  <td className="lead-src">
                    {l.utm_source ? <><Globe size={11} /> {l.utm_source}</> : (hote(l.referer) ?? '—')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <style>{`
        .lead-back {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 13.5px; font-weight: 600; color: var(--color-blue-france);
          text-decoration: none;
        }
        .lead-kpis { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 14px; }
        .lead-card {
          background: var(--color-surface); border: var(--border-default);
          border-radius: var(--radius-xl); padding: 18px 20px; box-shadow: var(--shadow-card);
        }
        .lead-n { font-size: 26px; font-weight: 800; line-height: 1.1; }
        .lead-l { font-size: 12px; color: var(--color-text-muted); margin-top: 3px; }
        .lead-warn {
          display: flex; gap: 10px; align-items: flex-start;
          background: #FFFBEB; border: 1px solid #FDE68A; color: #78350F;
          border-radius: var(--radius-lg); padding: 12px 16px; margin-bottom: 14px;
        }
        .lead-warn p { font-size: 12.5px; line-height: 1.6; margin: 0; }
        .lead-warn code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; }
        .lead-warn-soft { background: #F5F3FF; border-color: #DDD6FE; color: #4C1D95; }
        .lead-table { width: 100%; border-collapse: collapse; font-size: 13px; }
        .lead-table th {
          text-align: left; padding: 6px 10px 8px 0; font-size: 10.5px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-muted);
          border-bottom: 1px solid var(--color-border); white-space: nowrap;
        }
        .lead-table td { padding: 10px 10px 10px 0; border-bottom: 1px solid var(--color-border); vertical-align: top; }
        .lead-table tr:last-child td { border-bottom: none; }
        .lead-mail { font-size: 12px; color: var(--color-text-muted); }
        .lead-tag {
          display: inline-block; font-size: 11px; font-weight: 700;
          padding: 2px 8px; border-radius: 100px;
          background: var(--color-off-white); color: var(--color-text-secondary);
        }
        .lead-tag-red { background: #FEF2F2; color: #B91C1C; }
        .lead-tag-green { background: #E1F5EE; color: #0F7A57; }
        .lead-tag-grey { background: var(--color-off-white); color: var(--color-text-muted); }
        .lead-src { display: flex; align-items: center; gap: 4px; font-size: 12px; color: var(--color-text-muted); }
        @media (max-width: 700px) { .lead-kpis { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
