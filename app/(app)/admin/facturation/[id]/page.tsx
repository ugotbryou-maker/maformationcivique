import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ChevronLeft } from 'lucide-react';
import { createServiceRoleClient } from '@/lib/supabase-server';
import { euros, mentionTva, mentionsRetard, type Emetteur, type ClientFacture, type LigneFacture } from '@/lib/facturation';
import { detailComptesFacture } from '@/lib/facture-beneficiaires';
import { StatutFacture } from '@/components/admin/StatutFacture';
import { ActionsFacture } from '@/components/admin/ActionsFacture';
import './facture.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Facture — maformationcivique.fr',
  robots: { index: false, follow: false, nocache: true },
};

function jour(d: string | null) {
  return d ? new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }) : '—';
}

export default async function FacturePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const s = createServiceRoleClient();
  const { data: f } = await s.from('factures').select('*').eq('id', id).single();
  if (!f) notFound();

  // La liste nominative est figée à la création ; pour les factures émises
  // avant qu'elle existe, et pour les licences au forfait, on la reconstitue.
  const comptes = await detailComptesFacture(s, f);

  const e = f.emetteur as Emetteur;
  const c = f.client as ClientFacture;
  const lignes = f.lignes as LigneFacture[];

  return (
    <>
      <div className="fact-barre">
        <Link href="/admin/facturation" className="adm-link">
          <ChevronLeft size={15} /> Factures
        </Link>
        <StatutFacture id={f.id} statut={f.statut} numero={f.numero} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <ActionsFacture
          id={f.id}
          numero={f.numero}
          destinataireParDefaut={c.email ?? ''}
          envoyeeLe={f.envoyee_le ?? null}
          envoyeeA={f.envoyee_a ?? null}
        />
      </div>

      <article className="fact">
        <header className="fact-tete">
          <div>
            <p className="fact-emetteur-nom">{e.denomination}</p>
            <p className="fact-ligne">{e.adresse}</p>
            <p className="fact-ligne">{e.code_postal} {e.ville}{e.pays && e.pays !== 'France' ? `, ${e.pays}` : ''}</p>
            {e.siret && <p className="fact-ligne">SIRET {e.siret}</p>}
            {e.rcs_ville && <p className="fact-ligne">{e.rcs_ville}</p>}
            {e.tva_intracom && <p className="fact-ligne">TVA {e.tva_intracom}</p>}
            {e.forme_juridique && (
              <p className="fact-ligne">
                {e.forme_juridique}{e.capital_social ? ` au capital de ${e.capital_social}` : ''}
              </p>
            )}
          </div>
          <div className="fact-ref">
            <p className="fact-titre">Facture</p>
            <p className="fact-numero">{f.numero}</p>
            <p className="fact-ligne">Émise le {jour(f.date_emission)}</p>
            <p className="fact-ligne">Échéance : {jour(f.date_echeance)}</p>
          </div>
        </header>

        <section className="fact-client">
          <p className="fact-label">Facturé à</p>
          <p className="fact-client-nom">{c.raison_sociale}</p>
          <p className="fact-ligne">{c.adresse}</p>
          <p className="fact-ligne">{c.code_postal} {c.ville}{c.pays && c.pays !== 'France' ? `, ${c.pays}` : ''}</p>
          {c.siret && <p className="fact-ligne">SIRET {c.siret}</p>}
          {c.tva_intracom && <p className="fact-ligne">TVA {c.tva_intracom}</p>}
          {c.reference && <p className="fact-ligne">Référence : {c.reference}</p>}
        </section>

        {(f.periode_debut || f.periode_fin) && (
          <p className="fact-periode">
            Période : du {jour(f.periode_debut)} au {jour(f.periode_fin)}
          </p>
        )}

        <table className="fact-table">
          <thead>
            <tr>
              <th>Désignation</th>
              <th className="fact-num">Qté</th>
              <th className="fact-num">Prix unitaire</th>
              <th className="fact-num">Total HT</th>
            </tr>
          </thead>
          <tbody>
            {lignes.map((l, i) => (
              <tr key={i}>
                <td>{l.libelle}</td>
                <td className="fact-num">{l.quantite}</td>
                <td className="fact-num">{euros(l.prix_unitaire)}</td>
                <td className="fact-num">{euros(l.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {comptes.liste.length > 0 && (
          <p className="fact-renvoi">
            Détail nominatif des {comptes.liste.length} comptes : voir l&apos;annexe ci-dessous,
            imprimée en seconde page de la facture.
          </p>
        )}

        <div className="fact-totaux">
          <div className="fact-total-ligne"><span>Total HT</span><span>{euros(Number(f.total_ht))}</span></div>
          <div className="fact-total-ligne">
            <span>{mentionTva(e)}</span>
            <span>{euros(Number(f.total_tva))}</span>
          </div>
          <div className="fact-total-ligne fact-total-fort">
            <span>Total à payer</span><span>{euros(Number(f.total_ttc))}</span>
          </div>
        </div>

        {(e.iban || e.bic) && (
          <section className="fact-reglement">
            <p className="fact-label">Règlement par virement</p>
            {e.banque && <p className="fact-ligne">{e.banque}</p>}
            {e.iban && <p className="fact-ligne fact-iban">IBAN {e.iban}</p>}
            {e.bic && <p className="fact-ligne fact-iban">BIC {e.bic}</p>}
            <p className="fact-ligne">Merci d&apos;indiquer le numéro {f.numero} en référence.</p>
          </section>
        )}

        <footer className="fact-pied">
          {mentionsRetard(e).map((m) => <p key={m}>{m}</p>)}
          {e.mentions_pied && <p>{e.mentions_pied}</p>}
        </footer>
      </article>

      {comptes.liste.length > 0 && (
        <article className="fact fact-annexe">
          <header className="fact-tete">
            <div>
              <p className="fact-titre">Annexe</p>
              <p className="fact-emetteur-nom">
                {comptes.origine === 'periode'
                  ? 'Comptes couverts par la période'
                  : 'Détail nominatif des comptes facturés'}
              </p>
              <p className="fact-ligne">
                {c.raison_sociale} — {comptes.liste.length} compte{comptes.liste.length > 1 ? 's' : ''}
                {(f.periode_debut || f.periode_fin) &&
                  ` — période du ${jour(f.periode_debut)} au ${jour(f.periode_fin)}`}
              </p>
            </div>
            <div className="fact-ref">
              <p className="fact-titre">Facture</p>
              <p className="fact-numero">{f.numero}</p>
            </div>
          </header>

          <table className="fact-table fact-table-benef">
            <thead>
              <tr>
                <th className="fact-rang">N°</th>
                <th>Nom et prénom</th>
                <th>Adresse e-mail</th>
                <th className="fact-num">Activé le</th>
              </tr>
            </thead>
            <tbody>
              {comptes.liste.map((b, i) => (
                <tr key={b.email || i}>
                  <td className="fact-rang">{i + 1}</td>
                  <td className="fact-benef-nom">{b.nom || '—'}</td>
                  <td className="fact-benef-mail">{b.email}</td>
                  <td className="fact-num">{b.date ? jour(b.date) : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <footer className="fact-pied">
            <p>
              {comptes.origine === 'periode'
                ? `${comptes.liste.length} compte${comptes.liste.length > 1 ? 's' : ''} rattaché${comptes.liste.length > 1 ? 's' : ''} au partenaire sur la période facturée.`
                : `${comptes.liste.length} compte${comptes.liste.length > 1 ? 's' : ''} facturé${comptes.liste.length > 1 ? 's' : ''} au titre de la facture ${f.numero}, pour un total de ${euros(Number(f.total_ht))} HT.`}
            </p>
          </footer>
        </article>
      )}
    </>
  );
}
