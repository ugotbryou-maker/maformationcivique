import type { Metadata } from 'next';
import { Scale, AlertTriangle, Globe, Inbox, UserCheck, Gavel } from 'lucide-react';
import { createServiceRoleClient } from '@/lib/supabase-server';
import { Kpi, Carte, Identite, Vide } from '@/components/admin/ui';

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
    <>
      <header className="adm-head">
        <div>
          <h1 className="adm-title">Leads</h1>
          <p className="adm-sub">Prospects issus du test d&apos;éligibilité, avec leur qualification et leur provenance</p>
        </div>
      </header>

      {error && (
        <div className="adm-callout adm-callout-warn">
          <AlertTriangle size={15} style={{ flexShrink: 0, marginTop: 1 }} />
          <p>
            <strong>Table absente.</strong> Exécutez{' '}
            <code>supabase/migration_2026_09_leads_eligibilite.sql</code> dans le SQL Editor
            Supabase. Tant que ce n&apos;est pas fait, les leads continuent d&apos;arriver par
            e-mail mais ne sont pas enregistrés. ({error.message})
          </p>
        </div>
      )}

      <div className="adm-grid adm-grid-3">
        <Kpi teinte="sky" icon={<Inbox size={16} />} label="Leads enregistrés"
             value={String(leads.length)} sub="200 derniers au maximum" />
        <Kpi teinte="rose" icon={<Gavel size={16} />} label="À orienter vers un avocat"
             value={String(avocat.length)} sub="Situation hors du champ de la formation" />
        <Kpi teinte="mint" icon={<UserCheck size={16} />} label="Consentement recueilli"
             value={String(consentis.length)} sub="Seuls ceux-ci sont transmissibles" />
      </div>

      <div className="adm-callout adm-callout-legal">
        <Scale size={15} style={{ flexShrink: 0, marginTop: 1 }} />
        <p>
          Seuls les leads portant la mention <strong>consentement recueilli</strong> peuvent être
          transmis à un avocat partenaire. Pour les autres, la case n&apos;a pas été enregistrée :
          les recontacter à des fins de mise en relation vous exposerait à une réclamation.
        </p>
      </div>

      <Carte flush titre="Derniers leads">
        {leads.length === 0 && !error ? (
          <Vide texte="Aucun lead enregistré. Les soumissions antérieures à la mise en place de cette table n'ont laissé qu'une trace e-mail, sans adresse IP." />
        ) : (
          <div className="adm-scroll">
            <table className="adm-table adm-table-pad adm-table-rows">
              <thead>
                <tr>
                  <th>Reçu le</th><th>Contact</th><th>Téléphone</th><th>Démarche</th>
                  <th>Orientation</th><th>Consent.</th><th>IP</th><th>Provenance</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr key={l.id}>
                    <td className="adm-dim" style={{ whiteSpace: 'nowrap' }}>{dateHeure(l.created_at)}</td>
                    <td>
                      <Identite
                        principal={[l.prenom, l.nom].filter(Boolean).join(' ') || l.email || '—'}
                        secondaire={l.email}
                      />
                    </td>
                    <td style={{ whiteSpace: 'nowrap' }}>{l.telephone ?? '—'}</td>
                    <td className="adm-dim">{l.demarche ?? '—'}</td>
                    <td>
                      {l.routage === 'avocat'
                        ? <span className="adm-tag adm-tag-risk">Avocat</span>
                        : <span className="adm-tag">{l.routage ?? '—'}</span>}
                    </td>
                    <td>
                      {l.consent
                        ? <span className="adm-tag adm-tag-life">Oui</span>
                        : <span className="adm-tag adm-tag-free">Non</span>}
                    </td>
                    <td style={{ fontFamily: 'ui-monospace, monospace', fontSize: 12 }}>{l.ip ?? '—'}</td>
                    <td className="adm-dim">
                      {l.utm_source
                        ? <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Globe size={11} /> {l.utm_source}</span>
                        : (hote(l.referer) ?? '—')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Carte>
    </>
  );
}
