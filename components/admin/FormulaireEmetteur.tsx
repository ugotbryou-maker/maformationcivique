'use client';

import { useState } from 'react';
import { Save, Check, AlertTriangle } from 'lucide-react';

/**
 * Coordonnées légales de l'émetteur — saisies une fois, recopiées dans
 * chaque facture émise.
 */
const SECTIONS: { titre: string; aide?: string; champs: Champ[] }[] = [
  {
    titre: 'Identité',
    champs: [
      { k: 'denomination', l: 'Dénomination', ph: 'Ma Formation Civique', large: true },
      { k: 'forme_juridique', l: 'Forme juridique', ph: 'SASU, EI, micro-entreprise…' },
      { k: 'capital_social', l: 'Capital social', ph: '1 000 €', aide: 'Obligatoire pour une société' },
      { k: 'siret', l: 'SIRET', ph: '123 456 789 00012' },
      { k: 'rcs_ville', l: 'RCS', ph: 'RCS Paris 123 456 789' },
    ],
  },
  {
    titre: 'Adresse',
    champs: [
      { k: 'adresse', l: 'Adresse', ph: '12 rue de la République', large: true },
      { k: 'code_postal', l: 'Code postal', ph: '75011' },
      { k: 'ville', l: 'Ville', ph: 'Paris' },
      { k: 'pays', l: 'Pays', ph: 'France' },
      { k: 'email', l: 'E-mail de facturation', ph: 'contact@maformationcivique.fr' },
      { k: 'telephone', l: 'Téléphone', ph: '01 23 45 67 89' },
    ],
  },
  {
    titre: 'TVA',
    aide: "En franchise en base, la facture porte la mention « TVA non applicable, article 293 B du CGI » et aucune TVA n'est due.",
    champs: [
      { k: 'franchise_tva', l: 'Franchise en base de TVA', type: 'bool' },
      { k: 'taux_tva', l: 'Taux de TVA (%)', ph: '20', type: 'number' },
      { k: 'tva_intracom', l: 'N° TVA intracommunautaire', ph: 'FR12345678901', large: true,
        aide: 'Obligatoire dès lors que vous facturez avec TVA' },
    ],
  },
  {
    titre: 'Règlement',
    champs: [
      { k: 'iban', l: 'IBAN', ph: 'FR76 1234 5678 9012 3456 7890 123', large: true },
      { k: 'bic', l: 'BIC', ph: 'ABCDEFGHXXX' },
      { k: 'banque', l: 'Banque', ph: 'Qonto' },
      { k: 'delai_paiement_jours', l: 'Délai de paiement (jours)', ph: '30', type: 'number' },
    ],
  },
  {
    titre: 'Mentions légales de retard',
    aide: "Obligatoires entre professionnels (code de commerce, art. L441-10 et D441-5). Les valeurs par défaut sont conformes ; ne les modifiez qu'en connaissance de cause.",
    champs: [
      { k: 'penalites_retard', l: 'Pénalités de retard', large: true },
      { k: 'indemnite_recouvrement', l: 'Indemnité forfaitaire (€)', type: 'number' },
      { k: 'mentions_pied', l: 'Mention libre en pied de facture', large: true, type: 'area' },
    ],
  },
  {
    titre: 'Numérotation',
    aide: 'La numérotation doit être continue et sans trou. Le compteur avance automatiquement à chaque facture créée.',
    champs: [
      { k: 'prefixe_numero', l: 'Préfixe', ph: 'MFC' },
      { k: 'prochain_numero', l: 'Prochain numéro', ph: '1', type: 'number' },
    ],
  },
];

interface Champ {
  k: string; l: string; ph?: string; aide?: string;
  large?: boolean; type?: 'text' | 'number' | 'bool' | 'area';
}

export function FormulaireEmetteur({ initial }: { initial: Record<string, unknown> }) {
  const [v, setV] = useState<Record<string, unknown>>(initial ?? {});
  const [etat, setEtat] = useState<'repos' | 'envoi'>('repos');
  const [retour, setRetour] = useState<{ ok: boolean; texte: string } | null>(null);

  async function enregistrer() {
    setEtat('envoi');
    setRetour(null);
    try {
      const r = await fetch('/api/admin/facturation', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(v),
      });
      const j = await r.json();
      setRetour(r.ok && !j.error
        ? { ok: true, texte: 'Coordonnées enregistrées.' }
        : { ok: false, texte: j.error ?? 'Enregistrement impossible.' });
    } catch {
      setRetour({ ok: false, texte: 'Enregistrement impossible — réseau.' });
    } finally {
      setEtat('repos');
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {SECTIONS.map((sec) => (
        <div className="adm-card" key={sec.titre}>
          <div className="adm-card-head">
            <div>
              <p className="adm-card-title">{sec.titre}</p>
              {sec.aide && <p className="adm-card-hint" style={{ maxWidth: '62ch' }}>{sec.aide}</p>}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
            {sec.champs.map((c) => (
              <div key={c.k} style={{ gridColumn: c.large ? '1 / -1' : undefined }}>
                <label htmlFor={`f-${c.k}`} style={etiquette}>{c.l}</label>
                {c.type === 'bool' ? (
                  <label style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13.5, cursor: 'pointer' }}>
                    <input
                      id={`f-${c.k}`} type="checkbox"
                      checked={v[c.k] === true}
                      onChange={(e) => setV({ ...v, [c.k]: e.target.checked })}
                      style={{ width: 17, height: 17, accentColor: 'var(--adm-ink)' }}
                    />
                    {v[c.k] === true ? 'Oui — TVA non applicable' : 'Non — je facture avec TVA'}
                  </label>
                ) : c.type === 'area' ? (
                  <textarea
                    id={`f-${c.k}`} rows={2}
                    value={String(v[c.k] ?? '')}
                    onChange={(e) => setV({ ...v, [c.k]: e.target.value })}
                    placeholder={c.ph} style={{ ...champ, resize: 'vertical' }}
                  />
                ) : (
                  <input
                    id={`f-${c.k}`} type={c.type === 'number' ? 'number' : 'text'}
                    value={String(v[c.k] ?? '')}
                    onChange={(e) => setV({
                      ...v, [c.k]: c.type === 'number' ? Number(e.target.value) : e.target.value,
                    })}
                    placeholder={c.ph} style={champ}
                  />
                )}
                {c.aide && <p style={{ fontSize: 11.5, color: 'var(--adm-ink-mute)', margin: '5px 0 0' }}>{c.aide}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
        <button className="adm-btn" onClick={enregistrer} disabled={etat === 'envoi'}>
          <Save size={15} /> {etat === 'envoi' ? 'Enregistrement…' : 'Enregistrer'}
        </button>
        {retour && (
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            fontSize: 12.5, color: retour.ok ? '#0E7A58' : '#C0332B',
          }}>
            {retour.ok ? <Check size={14} /> : <AlertTriangle size={14} />} {retour.texte}
          </span>
        )}
      </div>
    </div>
  );
}

const etiquette: React.CSSProperties = {
  display: 'block', fontSize: 12, fontWeight: 700, marginBottom: 6,
  color: 'var(--adm-ink)',
};
const champ: React.CSSProperties = {
  width: '100%', padding: '10px 12px', borderRadius: 11,
  border: '1px solid var(--adm-line)', fontSize: 13.5,
  fontFamily: 'inherit', color: 'var(--adm-ink)', background: '#fff',
};
