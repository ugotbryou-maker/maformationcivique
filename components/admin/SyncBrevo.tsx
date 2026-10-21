'use client';

import { useState } from 'react';
import { RefreshCw, Check, AlertTriangle, Eye } from 'lucide-react';

/**
 * Déclenche la synchronisation Brevo à la demande.
 *
 * Le planificateur Vercel la lance chaque nuit ; ce bouton sert à vérifier
 * immédiatement après un changement, et à relancer après un échec sans
 * attendre vingt-quatre heures.
 */
export function SyncBrevo() {
  const [etat, setEtat] = useState<'repos' | 'simulation' | 'envoi'>('repos');
  const [retour, setRetour] = useState<{ ok: boolean; texte: string } | null>(null);

  async function appeler(methode: 'GET' | 'POST') {
    setEtat(methode === 'GET' ? 'simulation' : 'envoi');
    setRetour(null);
    try {
      const r = await fetch('/api/brevo/sync', { method: methode });
      const j = await r.json();
      if (!r.ok || j.error) {
        setRetour({ ok: false, texte: j.error ?? 'Synchronisation impossible.' });
      } else if (j.simulation) {
        setRetour({ ok: true, texte: `${j.contacts} contacts prêts à partir. Rien n'a été envoyé.` });
      } else {
        const sup = j.attributsCrees?.length ? ` · ${j.attributsCrees.length} attribut(s) créé(s)` : '';
        setRetour({
          ok: j.ok,
          texte: j.ok
            ? `${j.envoyes} contacts synchronisés${sup}.`
            : `${j.envoyes} envoyés, ${j.erreurs.length} lot(s) en échec : ${j.erreurs[0]}`,
        });
      }
    } catch {
      setRetour({ ok: false, texte: 'Synchronisation impossible — réseau.' });
    } finally {
      setEtat('repos');
    }
  }

  return (
    <div className="adm-card" style={{ marginBottom: 16 }}>
      <div className="adm-card-head">
        <div>
          <p className="adm-card-title">Synchronisation Brevo</p>
          <p className="adm-card-hint">
            Automatique chaque nuit à 4 h. Pousse offre, volet, progression, inactivité
            et résultats d&apos;examen — les champs sur lesquels les scénarios se déclenchent.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
        <button className="adm-btn adm-btn-light" disabled={etat !== 'repos'} onClick={() => appeler('GET')}>
          <Eye size={15} /> {etat === 'simulation' ? 'Vérification…' : 'Voir sans envoyer'}
        </button>
        <button className="adm-btn" disabled={etat !== 'repos'} onClick={() => appeler('POST')}>
          <RefreshCw size={15} /> {etat === 'envoi' ? 'Envoi…' : 'Synchroniser maintenant'}
        </button>
      </div>

      {retour && (
        <p style={{
          display: 'flex', alignItems: 'flex-start', gap: 8, marginTop: 14,
          fontSize: 12.5, lineHeight: 1.6, color: retour.ok ? '#0E7A58' : '#C0332B',
        }}>
          {retour.ok ? <Check size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                     : <AlertTriangle size={14} style={{ flexShrink: 0, marginTop: 2 }} />}
          {retour.texte}
        </p>
      )}
    </div>
  );
}
