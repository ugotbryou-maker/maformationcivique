'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

/**
 * Bouton "Accès à vie" avec étape de consentement explicite avant paiement.
 * L'offre repose sur une définition contractuelle précise de "à vie"
 * (CGU Art. 4.4bis) : on capture et horodate l'acceptation côté serveur
 * (voir /api/lifetime-consent) avant de rediriger vers Stripe, pour
 * disposer d'une preuve dédiée en plus de l'acceptation générale des CGU.
 */
export function LifetimeOfferButton({
  className,
  style,
  label = 'Accès à vie — 20 €',
  autoOpen = false,
}: {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  /** Ouvre la modale au montage — utilisé quand l'utilisateur arrive
   *  d'une campagne ayant choisi l'offre à vie (/inscription?plan=lifetime). */
  autoOpen?: boolean;
}) {
  const [open, setOpen] = useState(autoOpen);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleConfirm() {
    if (!checked) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/lifetime-consent', { method: 'POST' });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? 'Erreur serveur');
      }
      window.location.href = '/api/stripe/start?plan=lifetime';
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      setLoading(false);
    }
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className} style={style}>
        {label}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(0,10,40,0.55)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 20,
          }}
          onClick={() => !loading && setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff', borderRadius: 16, maxWidth: 480, width: '100%',
              padding: '28px 26px', boxShadow: '0 24px 64px rgba(0,0,0,0.25)',
              maxHeight: '90vh', overflowY: 'auto',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
              <h3 style={{ fontSize: 19, fontWeight: 800, color: 'var(--color-text-primary)', margin: 0 }}>
                Avant de continuer
              </h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)', padding: 4 }}
              >
                <X size={20} />
              </button>
            </div>

            <p style={{ fontSize: 14.5, lineHeight: 1.65, color: 'var(--color-text-secondary)', margin: '0 0 14px' }}>
              L&apos;offre <strong>Accès à vie (20 €, paiement unique)</strong> donne accès à
              l&apos;intégralité des contenus Civique et Langue française, sans abonnement.
            </p>

            <div style={{
              background: 'var(--color-off-white)', border: 'var(--border-default)',
              borderRadius: 10, padding: '14px 16px', marginBottom: 16,
            }}>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0 }}>
                <strong>« Accès à vie » signifie :</strong> valable pendant toute la durée
                d&apos;exploitation du site maformationcivique.fr — pas une garantie liée à
                votre propre durée de vie. Si le site cesse totalement et définitivement son
                activité, l&apos;accès prend fin avec lui (préavis d&apos;au moins 60 jours par
                e-mail). En cas de fermeture dans les 36 mois suivant votre achat, vous avez
                droit à un remboursement partiel au prorata du temps restant. Détail complet :{' '}
                <a href="/cgu#article-4" target="_blank" rel="noreferrer" style={{ color: 'var(--color-blue-france)' }}>
                  CGU, article 4.4bis
                </a>.
              </p>
            </div>

            <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', marginBottom: 18 }}>
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                style={{ marginTop: 3, width: 16, height: 16, flexShrink: 0 }}
              />
              <span style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--color-text-primary)' }}>
                J&apos;ai lu et j&apos;accepte la définition de l&apos;« accès à vie » ci-dessus
                ainsi que les <a href="/cgu" target="_blank" rel="noreferrer" style={{ color: 'var(--color-blue-france)' }}>CGU</a>.
              </span>
            </label>

            {error && (
              <p style={{ fontSize: 13, color: '#B91C1C', marginBottom: 12 }}>{error}</p>
            )}

            <button
              type="button"
              disabled={!checked || loading}
              onClick={handleConfirm}
              style={{
                width: '100%', padding: '13px 24px', borderRadius: 100,
                background: checked ? 'var(--gradient-primary)' : 'var(--color-border)',
                color: checked ? '#fff' : 'var(--color-text-muted)',
                border: 'none', fontSize: 15, fontWeight: 600,
                cursor: checked && !loading ? 'pointer' : 'not-allowed',
                transition: 'all 200ms ease-out',
              }}
            >
              {loading ? 'Redirection…' : 'Confirmer et payer 20 €'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
