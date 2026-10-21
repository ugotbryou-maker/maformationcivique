'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Receipt, Save, FileText, AlertTriangle, Check } from 'lucide-react';

interface Props {
  cabinetId: string;
  cabinetNom: string;
  client: Record<string, string | null>;
  billingMode: string | null;
  aFacturer: number;
  montantDu: string;
}

const CHAMPS = [
  { k: 'fact_raison_sociale', l: 'Raison sociale', ph: 'Papiers Français SAS', large: true },
  { k: 'fact_adresse',        l: 'Adresse de facturation', ph: '12 rue de la République', large: true },
  { k: 'fact_code_postal',    l: 'Code postal', ph: '75011' },
  { k: 'fact_ville',          l: 'Ville', ph: 'Paris' },
  { k: 'fact_pays',           l: 'Pays', ph: 'France' },
  { k: 'fact_siret',          l: 'SIRET', ph: '123 456 789 00012' },
  { k: 'fact_tva_intracom',   l: 'N° TVA intracommunautaire', ph: 'FR12345678901' },
  { k: 'fact_email',          l: 'E-mail de facturation', ph: 'compta@…', large: true },
  { k: 'fact_reference',      l: 'Référence / bon de commande', ph: 'Facultatif — figure sur la facture', large: true },
];

/** Premier et dernier jour du mois précédent — la période qu'on facture le plus souvent. */
function moisPrecedent() {
  const d = new Date();
  const debut = new Date(d.getFullYear(), d.getMonth() - 1, 1);
  const fin = new Date(d.getFullYear(), d.getMonth(), 0);
  const iso = (x: Date) => new Date(x.getTime() - x.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  return { debut: iso(debut), fin: iso(fin) };
}

export function BlocFacturation({ cabinetId, cabinetNom, client, billingMode, aFacturer, montantDu }: Props) {
  const router = useRouter();
  const def = moisPrecedent();

  const [v, setV] = useState<Record<string, string>>(
    Object.fromEntries(CHAMPS.map((c) => [c.k, client[c.k] ?? ''])),
  );
  const [debut, setDebut] = useState(def.debut);
  const [fin, setFin] = useState(def.fin);
  const [pointer, setPointer] = useState(true);
  const [etat, setEtat] = useState<'repos' | 'save' | 'creer'>('repos');
  const [retour, setRetour] = useState<{ ok: boolean; texte: string; manques?: string[] } | null>(null);

  const complet = v.fact_raison_sociale && v.fact_adresse && v.fact_code_postal && v.fact_ville;

  async function enregistrer() {
    setEtat('save'); setRetour(null);
    try {
      const r = await fetch(`/api/admin/facturation?cabinet=${cabinetId}`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(v),
      });
      const j = await r.json();
      setRetour(r.ok && !j.error
        ? { ok: true, texte: 'Coordonnées enregistrées.' }
        : { ok: false, texte: j.error ?? 'Enregistrement impossible.' });
      if (r.ok) router.refresh();
    } catch { setRetour({ ok: false, texte: 'Enregistrement impossible — réseau.' }); }
    finally { setEtat('repos'); }
  }

  async function creer() {
    if (!confirm(`Créer une facture pour ${cabinetNom} sur la période du ${debut} au ${fin} ?`)) return;
    setEtat('creer'); setRetour(null);
    try {
      const r = await fetch('/api/admin/facturation/creer', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cabinet_id: cabinetId, periode_debut: debut, periode_fin: fin,
          marquer_facture: pointer,
        }),
      });
      const j = await r.json();
      if (!r.ok || j.error) {
        setRetour({ ok: false, texte: j.error ?? 'Création impossible.', manques: j.manques });
        return;
      }
      router.push(`/admin/facturation/${j.id}`);
    } catch { setRetour({ ok: false, texte: 'Création impossible — réseau.' }); }
    finally { setEtat('repos'); }
  }

  return (
    <div className="adm-card" style={{ marginBottom: 16 }}>
      <div className="adm-card-head">
        <div>
          <p className="adm-card-title">Facturation</p>
          <p className="adm-card-hint">
            {billingMode === 'usage'
              ? `${aFacturer} activation${aFacturer > 1 ? 's' : ''} non facturée${aFacturer > 1 ? 's' : ''} — ${montantDu}`
              : 'Forfait annuel selon le palier du partenaire.'}
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 13, marginBottom: 18 }}>
        {CHAMPS.map((c) => (
          <div key={c.k} style={{ gridColumn: c.large ? '1 / -1' : undefined }}>
            <label htmlFor={`c-${c.k}`} style={etiquette}>{c.l}</label>
            <input
              id={`c-${c.k}`} type="text" value={v[c.k]} placeholder={c.ph}
              onChange={(e) => setV({ ...v, [c.k]: e.target.value })}
              style={champ}
            />
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 13, flexWrap: 'wrap', alignItems: 'flex-end', paddingTop: 16, borderTop: '1px solid var(--adm-line)' }}>
        <div>
          <label htmlFor="per-debut" style={etiquette}>Période du</label>
          <input id="per-debut" type="date" value={debut} onChange={(e) => setDebut(e.target.value)} style={{ ...champ, width: 160 }} />
        </div>
        <div>
          <label htmlFor="per-fin" style={etiquette}>au</label>
          <input id="per-fin" type="date" value={fin} onChange={(e) => setFin(e.target.value)} style={{ ...champ, width: 160 }} />
        </div>
        {billingMode === 'usage' && (
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5, cursor: 'pointer', paddingBottom: 10 }}>
            <input type="checkbox" checked={pointer} onChange={(e) => setPointer(e.target.checked)}
                   style={{ width: 16, height: 16, accentColor: 'var(--adm-ink)' }} />
            Pointer ces activations comme facturées
          </label>
        )}
      </div>

      <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginTop: 16 }}>
        <button className="adm-btn adm-btn-light" onClick={enregistrer} disabled={etat !== 'repos'}>
          <Save size={15} /> {etat === 'save' ? 'Enregistrement…' : 'Enregistrer les coordonnées'}
        </button>
        <button className="adm-btn" onClick={creer} disabled={etat !== 'repos' || !complet}>
          <Receipt size={15} /> {etat === 'creer' ? 'Création…' : 'Créer la facture'}
        </button>
      </div>

      {!complet && (
        <p className="adm-note" style={{ marginTop: 12 }}>
          Raison sociale, adresse, code postal et ville sont obligatoires sur une facture.
          Enregistrez-les avant d&apos;émettre.
        </p>
      )}

      {retour && (
        <div style={{ marginTop: 13, fontSize: 12.5, color: retour.ok ? '#0E7A58' : '#C0332B' }}>
          <p style={{ display: 'flex', alignItems: 'flex-start', gap: 7, margin: 0 }}>
            {retour.ok ? <Check size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                       : <AlertTriangle size={14} style={{ flexShrink: 0, marginTop: 2 }} />}
            {retour.texte}
          </p>
          {retour.manques?.length ? (
            <ul style={{ margin: '7px 0 0 26px', padding: 0 }}>
              {retour.manques.map((m) => <li key={m}>{m}</li>)}
            </ul>
          ) : null}
          {retour.manques?.some((m) => m.startsWith('Émetteur')) && (
            <p style={{ margin: '8px 0 0 26px' }}>
              <a href="/admin/facturation" className="adm-link"><FileText size={13} /> Compléter mes coordonnées</a>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

const etiquette: React.CSSProperties = {
  display: 'block', fontSize: 12, fontWeight: 700, marginBottom: 6, color: 'var(--adm-ink)',
};
const champ: React.CSSProperties = {
  width: '100%', padding: '10px 12px', borderRadius: 11,
  border: '1px solid var(--adm-line)', fontSize: 13.5,
  fontFamily: 'inherit', color: 'var(--adm-ink)', background: '#fff',
};
