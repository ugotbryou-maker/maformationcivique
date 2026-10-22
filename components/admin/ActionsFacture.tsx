'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Download, Send, Check, AlertTriangle, X } from 'lucide-react';

/**
 * Téléchargement du PDF et envoi au client.
 *
 * Le PDF est généré côté serveur : il est ainsi identique à celui que reçoit
 * le client en pièce jointe, et non un rendu de navigateur qui varierait
 * d'un poste à l'autre.
 */
export function ActionsFacture({
  id, numero, destinataireParDefaut, envoyeeLe, envoyeeA,
}: {
  id: string; numero: string;
  destinataireParDefaut: string;
  envoyeeLe: string | null; envoyeeA: string | null;
}) {
  const router = useRouter();
  const [panneau, setPanneau] = useState(false);
  const [destinataire, setDestinataire] = useState(destinataireParDefaut);
  const [message, setMessage] = useState('');
  const [etat, setEtat] = useState<'repos' | 'envoi'>('repos');
  const [retour, setRetour] = useState<{ ok: boolean; texte: string } | null>(null);

  async function envoyer() {
    if (!confirm(`Envoyer la facture ${numero} à ${destinataire} ?`)) return;
    setEtat('envoi'); setRetour(null);
    try {
      const r = await fetch(`/api/admin/facturation/${id}/envoyer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ destinataire, message }),
      });
      const j = await r.json();
      if (!r.ok || j.error) { setRetour({ ok: false, texte: j.error ?? 'Envoi impossible.' }); return; }
      setRetour({ ok: true, texte: `Facture envoyée à ${j.destinataire}.` });
      setPanneau(false);
      router.refresh();
    } catch {
      setRetour({ ok: false, texte: 'Envoi impossible — réseau.' });
    } finally { setEtat('repos'); }
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
        <a className="adm-btn adm-btn-light" href={`/api/admin/facturation/${id}/pdf`}>
          <Download size={15} /> Télécharger le PDF
        </a>
        <button className={`adm-btn${panneau ? '' : ' adm-btn-light'}`} onClick={() => setPanneau(!panneau)}>
          <Send size={15} /> Envoyer au client
        </button>
      </div>

      {envoyeeLe && (
        <p className="adm-note" style={{ marginTop: 10 }}>
          Déjà envoyée le {new Date(envoyeeLe).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })}
          {envoyeeA ? ` à ${envoyeeA}` : ''}.
        </p>
      )}

      {panneau && (
        <div className="adm-card" style={{ marginTop: 14 }}>
          <div className="adm-card-head">
            <div>
              <p className="adm-card-title">Envoyer la facture</p>
              <p className="adm-card-hint">Le PDF part en pièce jointe. Le statut passera en « émise ».</p>
            </div>
          </div>
          <label htmlFor="dest" style={etiquette}>Destinataire</label>
          <input id="dest" type="email" value={destinataire}
                 onChange={(e) => setDestinataire(e.target.value)}
                 placeholder="compta@cabinet.fr" style={champ} />
          <label htmlFor="msg" style={{ ...etiquette, marginTop: 13 }}>Message</label>
          <textarea id="msg" rows={4} value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Laissez vide pour le message type : montant, date d'émission, échéance et coordonnées bancaires."
                    style={{ ...champ, resize: 'vertical' }} />
          <button className="adm-btn" style={{ marginTop: 13 }}
                  onClick={envoyer}
                  disabled={etat === 'envoi' || !destinataire.includes('@')}>
            <Send size={15} /> {etat === 'envoi' ? 'Envoi…' : 'Envoyer maintenant'}
          </button>
        </div>
      )}

      {retour && (
        <p style={{
          display: 'flex', alignItems: 'center', gap: 8, marginTop: 12,
          fontSize: 12.5, color: retour.ok ? '#0E7A58' : '#C0332B',
        }}>
          {retour.ok ? <Check size={14} /> : <AlertTriangle size={14} />}
          {retour.texte}
          <button onClick={() => setRetour(null)}
                  style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', display: 'flex', cursor: 'pointer' }}>
            <X size={13} />
          </button>
        </p>
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
