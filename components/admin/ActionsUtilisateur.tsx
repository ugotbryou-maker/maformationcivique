'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Send, KeyRound, ShieldCheck, Check, AlertTriangle, X } from 'lucide-react';

const MOTIFS = [
  { cle: 'inactif',  label: 'Compte dormant' },
  { cle: 'jamais',   label: 'Jamais connecté' },
  { cle: 'echeance', label: 'Échéance proche' },
  { cle: 'examen',   label: 'Inciter à l’examen blanc' },
] as const;

const PLANS = [
  { cle: 'free',    label: 'Gratuit' },
  { cle: 'premium', label: 'Civique' },
  { cle: 'langue',  label: 'Langue' },
  { cle: 'bundle',  label: 'Complet' },
] as const;

export function ActionsUtilisateur({
  userId, email, planActuel,
}: { userId: string; email: string; planActuel: string }) {
  const router = useRouter();
  const [panneau, setPanneau] = useState<'relance' | 'plan' | null>(null);
  const [motif, setMotif] = useState<string>('inactif');
  const [plan, setPlan] = useState<string>(planActuel);
  const [jours, setJours] = useState(365);
  const [message, setMessage] = useState('');
  const [etat, setEtat] = useState<'repos' | 'envoi'>('repos');
  const [retour, setRetour] = useState<{ ok: boolean; texte: string } | null>(null);

  async function appeler(url: string, corps: unknown, succes: string) {
    setEtat('envoi');
    setRetour(null);
    try {
      const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(corps),
      });
      const j = await r.json();
      if (!r.ok || j.error) {
        setRetour({ ok: false, texte: j.error ?? 'Action impossible.' });
      } else {
        setRetour({ ok: true, texte: succes });
        setPanneau(null);
        router.refresh();
      }
    } catch {
      setRetour({ ok: false, texte: 'Action impossible — réseau.' });
    } finally {
      setEtat('repos');
    }
  }

  return (
    <div className="adm-card" style={{ marginBottom: 16 }}>
      <div className="adm-card-head">
        <div>
          <p className="adm-card-title">Actions</p>
          <p className="adm-card-hint">Toute action part immédiatement vers {email}</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
        <button
          className={`adm-btn ${panneau === 'relance' ? '' : 'adm-btn-light'}`}
          onClick={() => setPanneau(panneau === 'relance' ? null : 'relance')}
        >
          <Send size={15} /> Relancer
        </button>
        <button
          className={`adm-btn ${panneau === 'plan' ? '' : 'adm-btn-light'}`}
          onClick={() => setPanneau(panneau === 'plan' ? null : 'plan')}
        >
          <ShieldCheck size={15} /> Modifier l&apos;accès
        </button>
        <button
          className="adm-btn adm-btn-light"
          disabled={etat === 'envoi'}
          onClick={() => {
            if (!confirm(`Envoyer un lien de réinitialisation de mot de passe à ${email} ?`)) return;
            appeler('/api/admin/reset-password', { userId }, 'Lien de réinitialisation envoyé.');
          }}
        >
          <KeyRound size={15} /> Réinitialiser le mot de passe
        </button>
      </div>

      {panneau === 'relance' && (
        <div style={{ marginTop: 18, paddingTop: 18, borderTop: '1px solid var(--adm-line)' }}>
          <p className="adm-card-hint" style={{ marginBottom: 10 }}>Motif de la relance</p>
          <div className="adm-chips" style={{ marginBottom: 14 }}>
            {MOTIFS.map(({ cle, label }) => (
              <button key={cle} onClick={() => setMotif(cle)}
                      className={`adm-chip${motif === cle ? ' adm-chip-on' : ''}`}>
                {label}
              </button>
            ))}
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Laissez vide pour utiliser le message type du motif choisi, ou écrivez le vôtre."
            rows={4}
            style={{
              width: '100%', padding: '11px 13px', borderRadius: 13,
              border: '1px solid var(--adm-line)', fontSize: 13,
              fontFamily: 'inherit', resize: 'vertical', color: 'var(--adm-ink)',
            }}
          />
          <button
            className="adm-btn"
            style={{ marginTop: 12 }}
            disabled={etat === 'envoi'}
            onClick={() => appeler('/api/admin/relance', { userId, motif, message }, 'Relance envoyée.')}
          >
            <Send size={15} /> {etat === 'envoi' ? 'Envoi…' : 'Envoyer la relance'}
          </button>
        </div>
      )}

      {panneau === 'plan' && (
        <div style={{ marginTop: 18, paddingTop: 18, borderTop: '1px solid var(--adm-line)' }}>
          <p className="adm-card-hint" style={{ marginBottom: 10 }}>Accès à accorder</p>
          <div className="adm-chips" style={{ marginBottom: 14 }}>
            {PLANS.map(({ cle, label }) => (
              <button key={cle} onClick={() => setPlan(cle)}
                      className={`adm-chip${plan === cle ? ' adm-chip-on' : ''}`}>
                {label}
              </button>
            ))}
          </div>
          <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, marginBottom: 14 }}>
            Durée
            <input
              type="number" min={1} max={3650} value={jours}
              onChange={(e) => setJours(Number(e.target.value))}
              style={{
                width: 90, padding: '7px 11px', borderRadius: 10,
                border: '1px solid var(--adm-line)', fontSize: 13, fontFamily: 'inherit',
              }}
            />
            jours
          </label>
          <p className="adm-note" style={{ marginTop: 0, marginBottom: 12 }}>
            Attention : l&apos;échéance n&apos;est pas appliquée automatiquement par la
            plateforme. Elle sert de repère, pas de verrou.
          </p>
          <button
            className="adm-btn"
            disabled={etat === 'envoi'}
            onClick={() => {
              if (!confirm(`Passer ${email} en « ${PLANS.find((p) => p.cle === plan)?.label} » pour ${jours} jours ?`)) return;
              appeler('/api/admin/grant-access', { email, plan, durationDays: jours }, 'Accès mis à jour.');
            }}
          >
            <Check size={15} /> {etat === 'envoi' ? 'Application…' : 'Appliquer'}
          </button>
        </div>
      )}

      {retour && (
        <p style={{
          display: 'flex', alignItems: 'center', gap: 8, marginTop: 14,
          fontSize: 12.5, color: retour.ok ? '#0E7A58' : '#C0332B',
        }}>
          {retour.ok ? <Check size={14} /> : <AlertTriangle size={14} />}
          {retour.texte}
          <button onClick={() => setRetour(null)} style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', display: 'flex' }}>
            <X size={13} />
          </button>
        </p>
      )}
    </div>
  );
}
