'use client';

import { useState } from 'react';
import { Mail, Check, AlertTriangle, UserPlus } from 'lucide-react';

/**
 * Envoie l'invitation administrateur d'un cabinet.
 *
 * Deux usages distincts :
 *  — premier administrateur, pour un cabinet créé en base sans passer par le
 *    formulaire : sans invitation, son contact n'a aucun moyen d'entrer ;
 *  — co-administrateur, quand plusieurs personnes se partagent le même
 *    portefeuille client. Ce second cas doit être explicite, pour ne pas
 *    créer par mégarde un doublon à quelqu'un qui a juste perdu son mot
 *    de passe.
 */
export function InviteCabinetAdminButton({
  cabinetId,
  contactEmail,
  admins,
}: {
  cabinetId: string;
  contactEmail: string;
  admins: string[];
}) {
  const aDejaUnAdmin = admins.length > 0;

  const [ouvert, setOuvert] = useState(false);
  const [email, setEmail] = useState('');
  const [etat, setEtat] = useState<'repos' | 'envoi' | 'ok' | 'erreur'>('repos');
  const [message, setMessage] = useState('');

  async function envoyer(cible: string, coAdmin: boolean) {
    if (etat === 'envoi') return;
    if (!confirm(`Envoyer l'invitation administrateur à ${cible} ?`)) return;

    setEtat('envoi');
    try {
      const r = await fetch('/api/cabinet/admin/invite-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cabinet_id: cabinetId, email: cible, co_admin: coAdmin }),
      });
      const j = await r.json();
      if (!r.ok || j.error) {
        setEtat('erreur');
        setMessage(j.error ?? 'Envoi impossible.');
        return;
      }
      setEtat('ok');
      setMessage(
        j.sent
          ? `Invitation envoyée à ${cible}.`
          : `Invitation créée, mais l'e-mail n'est pas parti. Lien à transmettre : ${j.invite_link}`,
      );
    } catch {
      setEtat('erreur');
      setMessage('Envoi impossible — réseau.');
    }
  }

  return (
    <div style={{
      background: 'var(--color-surface)', border: 'var(--border-default)',
      borderRadius: 'var(--radius-xl)', padding: '18px 22px', marginBottom: 24,
    }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-secondary)', margin: '0 0 6px' }}>
        {aDejaUnAdmin ? `Administrateurs (${admins.length})` : 'Aucun administrateur inscrit'}
      </p>
      <p style={{ fontSize: 12.5, lineHeight: 1.65, color: 'var(--color-text-muted)', margin: '0 0 14px' }}>
        {aDejaUnAdmin
          ? `${admins.join(', ')} — ils partagent le même portefeuille client et voient les mêmes invitations.`
          : "Ce cabinet ne peut inviter personne tant que son contact n'a pas créé son compte. Envoyez-lui son lien d'accès."}
      </p>

      {etat === 'ok' ? (
        <p style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#0F7A57', margin: 0, wordBreak: 'break-all' }}>
          <Check size={15} style={{ flexShrink: 0, marginTop: 2 }} /> {message}
        </p>
      ) : (
        <>
          {!aDejaUnAdmin ? (
            <button
              onClick={() => envoyer(contactEmail, false)}
              disabled={etat === 'envoi'}
              style={boutonPlein(etat === 'envoi')}
            >
              <Mail size={15} />
              {etat === 'envoi' ? 'Envoi…' : `Envoyer l'invitation à ${contactEmail}`}
            </button>
          ) : !ouvert ? (
            <button onClick={() => setOuvert(true)} style={boutonLeger}>
              <UserPlus size={14} /> Ajouter un co-administrateur
            </button>
          ) : (
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email du second administrateur"
                style={{
                  flex: 1, minWidth: 220, padding: '9px 12px',
                  borderRadius: 'var(--radius-md)', border: 'var(--border-default)',
                  fontSize: 13,
                }}
              />
              <button
                onClick={() => envoyer(email.trim().toLowerCase(), true)}
                disabled={etat === 'envoi' || !email.includes('@')}
                style={boutonPlein(etat === 'envoi' || !email.includes('@'))}
              >
                <Mail size={15} />
                {etat === 'envoi' ? 'Envoi…' : 'Envoyer'}
              </button>
            </div>
          )}

          {etat === 'erreur' && (
            <p style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 12.5, color: '#B91C1C', margin: '10px 0 0' }}>
              <AlertTriangle size={14} style={{ flexShrink: 0, marginTop: 1 }} /> {message}
            </p>
          )}
        </>
      )}
    </div>
  );
}

function boutonPlein(desactive: boolean): React.CSSProperties {
  return {
    display: 'inline-flex', alignItems: 'center', gap: 7,
    padding: '9px 16px', borderRadius: 'var(--radius-md)',
    background: 'var(--color-blue-france)', color: '#fff',
    fontSize: 13, fontWeight: 700, border: 'none',
    cursor: desactive ? 'not-allowed' : 'pointer',
    opacity: desactive ? 0.6 : 1,
  };
}

const boutonLeger: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 7,
  padding: '8px 14px', borderRadius: 'var(--radius-md)',
  background: 'transparent', color: 'var(--color-blue-france)',
  border: '1px solid var(--color-blue-france)', fontSize: 12.5, fontWeight: 600,
  cursor: 'pointer',
};
