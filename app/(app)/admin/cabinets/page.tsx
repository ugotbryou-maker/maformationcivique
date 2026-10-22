import Link from 'next/link';
import type { Metadata } from 'next';
import { Plus, Building2, ChevronRight, AlertTriangle, Receipt, Users, Euro } from 'lucide-react';
import { createServiceRoleClient } from '@/lib/supabase-server';
import { Kpi, Carte, Identite, Jauge, Vide } from '@/components/admin/ui';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Partenaires — maformationcivique.fr',
  robots: { index: false, follow: false, nocache: true },
};

const TIER_LABELS: Record<string, string> = {
  essai: 'Essai', starter: 'Starter', pro: 'Pro', cabinet_plus: 'Cabinet+', reseau: 'Réseau',
};

// Prix annuel indicatif par palier — l'essai et l'usage ne valent rien ici.
const TIER_PRICE: Record<string, number> = {
  starter: 390, pro: 990, cabinet_plus: 1990, reseau: 3990,
};

function euro(n: number) {
  return n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

interface LignePortefeuille {
  id: string; name: string; contact_email: string; tier: string;
  clients: number; actifs: number; enAttente: number; activations: number;
  montantDu: number; caAnnuel: number; aLUsage: boolean;
  illimite: boolean; quota: number; expire: Date | null;
}

/**
 * Préparation des données, isolée pour être appelée sous `try`.
 *
 * Le rendu d'un composant serveur qui lève une exception produit un écran
 * d'erreur sans message — Next les masque en production. On capture donc
 * explicitement, et on affiche la cause : cette page n'est vue que par un
 * administrateur, seul capable d'agir dessus.
 */
function preparer(
  cabinets: Record<string, unknown>[],
  cabUsers: { cabinet_id: string | null; cabinet_role: string | null; last_active: string | null }[],
  invites: { cabinet_id: string; redeemed_at: string | null; facture_le: string | null }[],
): { lignes: LignePortefeuille[]; totalClients: number; totalDu: number; caForfait: number } {
  const il30j = Date.now() - 30 * 86400000;

  const lignes = cabinets.map((brut) => {
    const c = brut as {
      id: string; name: string; contact_email: string; tier: string;
      max_invitations: number | null; sub_end_at: string | null;
      billing_mode: string | null; prix_activation_cents: number | null;
    };
    const membres = cabUsers.filter((u) => u.cabinet_id === c.id);
    const clients = membres.filter((u) => u.cabinet_role !== 'admin');
    const siennes = invites.filter((i) => i.cabinet_id === c.id);
    const activations = siennes.filter((i) => i.redeemed_at);
    const pu = (c.prix_activation_cents ?? 0) / 100;
    const aLUsage = c.billing_mode === 'usage';
    const echeance = c.sub_end_at ? new Date(c.sub_end_at) : null;

    return {
      id: c.id,
      name: c.name ?? '—',
      contact_email: c.contact_email ?? '',
      tier: c.tier ?? 'starter',
      clients: clients.length,
      actifs: membres.filter((m) => m.last_active && new Date(m.last_active).getTime() >= il30j).length,
      enAttente: siennes.length - activations.length,
      activations: activations.length,
      montantDu: aLUsage ? activations.filter((i) => !i.facture_le).length * pu : 0,
      caAnnuel: aLUsage ? activations.length * pu : (TIER_PRICE[c.tier] ?? 0),
      aLUsage,
      illimite: c.max_invitations == null,
      quota: c.max_invitations ?? 0,
      // Une date illisible donnerait NaN partout en aval : on la neutralise.
      expire: echeance && !Number.isNaN(echeance.getTime()) ? echeance : null,
    };
  });

  return {
    lignes,
    totalClients: lignes.reduce((a, l) => a + l.clients, 0),
    totalDu: lignes.reduce((a, l) => a + l.montantDu, 0),
    caForfait: lignes.filter((l) => !l.aLUsage).reduce((a, l) => a + l.caAnnuel, 0),
  };
}

export default async function AdminCabinetsPage() {
  let lignes: LignePortefeuille[] = [];
  let totalClients = 0, totalDu = 0, caForfait = 0;

  try {
    const service = createServiceRoleClient();

    const [{ data: cabinets, error: e1 }, { data: cabUsers, error: e2 }, { data: invites, error: e3 }] =
      await Promise.all([
        service.from('cabinets')
          .select('id, name, contact_email, tier, max_invitations, sub_end_at, created_at, billing_mode, prix_activation_cents, member_plan')
          .order('created_at', { ascending: false }),
        service.from('users').select('id, cabinet_id, cabinet_role, last_active').not('cabinet_id', 'is', null),
        service.from('cabinet_invites').select('id, cabinet_id, redeemed_at, facture_le, created_at'),
      ]);

    const erreurs = [
      e1 && `cabinets — ${e1.message}`,
      e2 && `users — ${e2.message}`,
      e3 && `cabinet_invites — ${e3.message}`,
    ].filter(Boolean) as string[];
    if (erreurs.length) throw new Error(erreurs.join(' · '));

    const prep = preparer(cabinets ?? [], cabUsers ?? [], invites ?? []);
    lignes = prep.lignes;
    totalClients = prep.totalClients;
    totalDu = prep.totalDu;
    caForfait = prep.caForfait;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[admin/cabinets] échec de chargement', message);
    return <PanneLecture details={message} />;
  }

  const rows = lignes;

  return (
    <>
      <header className="adm-head">
        <div>
          <h1 className="adm-title">Partenaires</h1>
          <p className="adm-sub">Cabinets, associations et revendeurs — {rows.length} au total</p>
        </div>
        <Link href="/admin/cabinets/nouveau" className="adm-btn">
          <Plus size={15} /> Nouveau partenaire
        </Link>
      </header>

      <div className="adm-grid adm-grid-4">
        <Kpi teinte="sky" icon={<Building2 size={16} />} label="Partenaires"
             value={String(rows.length)} sub={`${lignes.filter((l) => l.aLUsage).length} à l'usage`} />
        <Kpi teinte="violet" icon={<Users size={16} />} label="Clients apportés"
             value={String(totalClients)} sub={`${lignes.reduce((a, l) => a + l.actifs, 0)} actifs sur 30 j`} />
        <Kpi teinte="cream" icon={<Receipt size={16} />} label="À facturer"
             value={euro(totalDu)} sub="Activations non encore facturées" />
        <Kpi teinte="mint" icon={<Euro size={16} />} label="Licences annuelles"
             value={euro(caForfait)} sub="Hors facturation à l'usage" />
      </div>

      <Carte flush titre="Portefeuille">
        {lignes.length === 0 ? (
          <Vide texte="Aucun partenaire enregistré." />
        ) : (
          <div className="adm-scroll">
            <table className="adm-table adm-table-pad adm-table-rows">
              <thead>
                <tr>
                  <th>Partenaire</th><th>Palier</th><th>Clients</th>
                  <th>Sièges</th><th className="adm-num">Facturation</th><th />
                </tr>
              </thead>
              <tbody>
                {lignes.map((l) => {
                  const joursRestants = l.expire
                    ? Math.ceil((l.expire.getTime() - Date.now()) / 86400000)
                    : null;
                  return (
                    <tr key={l.id}>
                      <td>
                        <Identite
                          principal={l.name}
                          secondaire={l.contact_email}
                          href={`/admin/cabinets/${l.id}`}
                        />
                      </td>
                      <td>
                        <span className={`adm-tag ${l.tier === 'essai' ? 'adm-tag-warn' : 'adm-tag-vio'}`}>
                          {TIER_LABELS[l.tier] ?? l.tier}
                        </span>
                        {joursRestants !== null && joursRestants < 30 && (
                          <span className="adm-tag adm-tag-risk" style={{ marginLeft: 6 }}>
                            {joursRestants < 0 ? 'expiré' : `${joursRestants} j`}
                          </span>
                        )}
                      </td>
                      <td>
                        <span className="adm-strong">{l.clients}</span>
                        {l.enAttente > 0 && <span className="adm-dim"> +{l.enAttente} en attente</span>}
                        <p className="adm-dim" style={{ margin: '2px 0 0' }}>{l.actifs} actifs sur 30 j</p>
                      </td>
                      <td style={{ minWidth: 110 }}>
                        {l.illimite ? (
                          <span className="adm-tag adm-tag-paid">illimité</span>
                        ) : (
                          <>
                            <p className="adm-dim" style={{ margin: '0 0 5px' }}>
                              {l.clients + l.enAttente} / {l.quota}
                            </p>
                            <Jauge
                              pct={l.quota ? ((l.clients + l.enAttente) / l.quota) * 100 : 0}
                              couleur={l.quota && l.clients + l.enAttente >= l.quota ? '#C0332B' : undefined}
                            />
                          </>
                        )}
                      </td>
                      <td className="adm-num">
                        {l.aLUsage ? (
                          <>
                            <span className="adm-strong">{euro(l.montantDu)}</span>
                            <p className="adm-dim" style={{ margin: '2px 0 0' }}>
                              {l.activations} activation{l.activations > 1 ? 's' : ''}
                            </p>
                          </>
                        ) : (
                          <>
                            <span className="adm-strong">{euro(l.caAnnuel)}</span>
                            <p className="adm-dim" style={{ margin: '2px 0 0' }}>par an</p>
                          </>
                        )}
                      </td>
                      <td className="adm-num">
                        <Link href={`/admin/cabinets/${l.id}`} className="adm-link">
                          Ouvrir <ChevronRight size={14} />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Carte>

      {totalDu > 0 && (
        <div className="adm-callout adm-callout-warn" style={{ marginTop: 18, marginBottom: 0 }}>
          <AlertTriangle size={15} style={{ flexShrink: 0, marginTop: 1 }} />
          <p>
            <strong>{euro(totalDu)} à facturer.</strong> Les activations restent marquées comme
            dues tant qu&apos;elles ne sont pas pointées comme facturées sur la fiche du
            partenaire.
          </p>
        </div>
      )}
    </>
  );
}

/**
 * Panneau d'échec lisible, à la place d'un écran blanc sans message.
 * Réservé aux administrateurs : afficher la cause technique est ici un gain
 * net, puisque c'est la seule personne capable d'agir dessus.
 */
function PanneLecture({ details }: { details: string }) {
  return (
    <>
      <header className="adm-head">
        <div>
          <h1 className="adm-title">Partenaires</h1>
          <p className="adm-sub">Portefeuille des cabinets, associations et revendeurs</p>
        </div>
      </header>
      <div className="adm-callout adm-callout-risk">
        <AlertTriangle size={15} style={{ flexShrink: 0, marginTop: 1 }} />
        <div>
          <p><strong>Le portefeuille n&apos;a pas pu être chargé.</strong></p>
          <p style={{ marginTop: 6, fontFamily: 'ui-monospace, monospace', fontSize: 12 }}>
            {details}
          </p>
          <p style={{ marginTop: 10 }}>
            Causes les plus fréquentes, dans cet ordre : <code>SUPABASE_SERVICE_ROLE_KEY</code>{' '}
            absente ou erronée dans les variables Vercel, une migration non exécutée sur le
            projet Supabase de production, ou une colonne absente de la table lue.
          </p>
        </div>
      </div>
    </>
  );
}
