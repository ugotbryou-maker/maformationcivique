import Link from 'next/link';
import type { Metadata } from 'next';
import { AlertTriangle, FileText, ChevronRight } from 'lucide-react';
import { createServiceRoleClient } from '@/lib/supabase-server';
import { Carte, Vide, Identite } from '@/components/admin/ui';
import { FormulaireEmetteur } from '@/components/admin/FormulaireEmetteur';
import { manquesEmetteur, euros, type Emetteur } from '@/lib/facturation';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Facturation — maformationcivique.fr',
  robots: { index: false, follow: false, nocache: true },
};

const STATUT: Record<string, { label: string; classe: string }> = {
  brouillon: { label: 'Brouillon', classe: 'adm-tag-warn' },
  emise:     { label: 'Émise',     classe: 'adm-tag-paid' },
  payee:     { label: 'Payée',     classe: 'adm-tag-life' },
  annulee:   { label: 'Annulée',   classe: 'adm-tag-risk' },
};

export default async function FacturationPage() {
  const s = createServiceRoleClient();

  const [{ data: emetteur, error: errEm }, { data: factures }, { data: cabinets }] =
    await Promise.all([
      s.from('facturation_emetteur').select('*').eq('id', true).maybeSingle(),
      s.from('factures').select('id, numero, client, total_ttc, date_emission, date_echeance, statut').order('date_emission', { ascending: false }).limit(50),
      s.from('cabinets').select('id, name, fact_raison_sociale, fact_adresse, fact_ville, billing_mode, tier'),
    ]);

  const manques = manquesEmetteur(emetteur as Emetteur | null);
  const aFacturer = (cabinets ?? []).filter((c) => !c.fact_adresse || !c.fact_ville);

  return (
    <>
      <header className="adm-head">
        <div>
          <h1 className="adm-title">Facturation</h1>
          <p className="adm-sub">Vos coordonnées légales, celles de vos partenaires, et les factures émises</p>
        </div>
      </header>

      {errEm && (
        <div className="adm-callout adm-callout-warn">
          <AlertTriangle size={15} style={{ flexShrink: 0, marginTop: 1 }} />
          <p>
            <strong>Tables absentes.</strong> Exécutez{' '}
            <code>supabase/migration_2026_10_facturation.sql</code> dans le SQL Editor
            Supabase. Rien ne peut être enregistré avant.
          </p>
        </div>
      )}

      {!errEm && manques.length > 0 && (
        <div className="adm-callout adm-callout-warn">
          <AlertTriangle size={15} style={{ flexShrink: 0, marginTop: 1 }} />
          <p>
            <strong>Facturation bloquée.</strong> Il manque : {manques.join(', ')}.
            Une facture sans ces mentions n&apos;est pas conforme — l&apos;émission est
            refusée tant qu&apos;elles ne sont pas renseignées.
          </p>
        </div>
      )}

      {/* ── Factures émises ─────────────────────────────────────────────── */}
      <div style={{ marginBottom: 16 }}>
        <Carte flush titre={`Factures (${factures?.length ?? 0})`}
               indice="Une facture émise est figée : elle conserve les montants et les coordonnées du jour de son émission.">
          {!factures?.length ? (
            <Vide texte="Aucune facture. Créez-en une depuis la fiche d'un partenaire." />
          ) : (
            <div className="adm-scroll">
              <table className="adm-table adm-table-pad adm-table-rows">
                <thead>
                  <tr><th>Numéro</th><th>Client</th><th>Émise le</th><th>Échéance</th><th>Statut</th><th className="adm-num">Total TTC</th><th /></tr>
                </thead>
                <tbody>
                  {factures.map((f) => {
                    const c = (f.client ?? {}) as { raison_sociale?: string };
                    const st = STATUT[f.statut] ?? STATUT.brouillon;
                    return (
                      <tr key={f.id}>
                        <td style={{ fontFamily: 'ui-monospace, monospace', fontSize: 12.5 }}>{f.numero}</td>
                        <td>{c.raison_sociale ?? '—'}</td>
                        <td className="adm-dim">{f.date_emission}</td>
                        <td className="adm-dim">{f.date_echeance ?? '—'}</td>
                        <td><span className={`adm-tag ${st.classe}`}>{st.label}</span></td>
                        <td className="adm-num adm-strong">{euros(Number(f.total_ttc))}</td>
                        <td className="adm-num">
                          <Link href={`/admin/facturation/${f.id}`} className="adm-link">
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
      </div>

      {/* ── Coordonnées clients manquantes ──────────────────────────────── */}
      {aFacturer.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <Carte titre="Partenaires sans coordonnées de facturation"
                 indice="Renseignez-les sur la fiche du partenaire : sans adresse, la facture ne peut pas être émise.">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {aFacturer.map((c) => (
                <Link key={c.id} href={`/admin/cabinets/${c.id}`}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, textDecoration: 'none', color: 'inherit' }}>
                  <Identite principal={c.name} secondaire={c.billing_mode === 'usage' ? "facturé à l'usage" : `forfait ${c.tier}`} />
                  <span className="adm-link">Compléter <ChevronRight size={14} /></span>
                </Link>
              ))}
            </div>
          </Carte>
        </div>
      )}

      {/* ── Émetteur ────────────────────────────────────────────────────── */}
      <h2 className="adm-card-title" style={{ margin: '26px 0 14px', fontSize: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
        <FileText size={17} /> Vos coordonnées d&apos;émetteur
      </h2>
      <FormulaireEmetteur initial={(emetteur ?? {}) as Record<string, unknown>} />
    </>
  );
}
