'use client';

import { Suspense, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Mail, ArrowRight } from 'lucide-react';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { fbqTrack } from '@/lib/fbq';

/**
 * Page de retour après paiement (success_url des Payment Links Stripe).
 *
 * Rôle décisif pour les campagnes : lorsque le paiement se fait directement
 * sur Stripe, aucun événement Purchase ne peut partir depuis la page de
 * paiement. Sans ce retour sur notre domaine, Meta ne reçoit plus les
 * conversions et cesse d'optimiser — l'effet inverse de celui recherché.
 *
 * Le montant est passé dans l'URL par le Payment Link (?value=10) pour que
 * l'événement remonte avec la bonne valeur.
 */
function MerciInner() {
  const params = useSearchParams();
  const value = Number(params.get('value') ?? 10);
  const plan = params.get('plan') ?? 'bundle';

  useEffect(() => {
    fbqTrack('Purchase', { value, currency: 'EUR', content_name: plan });
  }, [value, plan]);

  return (
    <div className="mc-wrap">
      <div className="mc-card">
        <BrandLogo height={30} variant="color" />

        <div className="mc-icon"><CheckCircle2 size={34} color="#fff" /></div>

        <h1 className="mc-h1">Paiement confirmé, merci !</h1>
        <p className="mc-lead">
          Votre accès est en cours d&apos;activation. Vous allez recevoir un e-mail
          d&apos;ici quelques instants.
        </p>

        <div className="mc-steps">
          <div className="mc-step">
            <Mail size={17} className="mc-step-icon" />
            <div>
              <p className="mc-step-t">Vérifiez votre boîte mail</p>
              <p className="mc-step-d">
                Elle contient le lien pour définir votre mot de passe et accéder à la
                plateforme. Pensez à regarder dans les spams.
              </p>
            </div>
          </div>
          <div className="mc-step">
            <ArrowRight size={17} className="mc-step-icon" />
            <div>
              <p className="mc-step-t">Puis connectez-vous</p>
              <p className="mc-step-d">
                Utilisez l&apos;adresse e-mail indiquée lors du paiement.
              </p>
            </div>
          </div>
        </div>

        <Link href="/connexion" className="mc-btn">
          Aller à la connexion <ArrowRight size={16} />
        </Link>

        <p className="mc-help">
          Rien reçu au bout de quelques minutes ? Écrivez-nous à{' '}
          <a href="mailto:contact@maformationcivique.fr">contact@maformationcivique.fr</a>,
          nous activons votre accès manuellement.
        </p>
      </div>

      <style>{`
        .mc-wrap {
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          padding: 24px;
          background: linear-gradient(160deg, #001A70 0%, #002395 55%, #0057A8 100%);
        }
        .mc-card {
          background: #fff; border-radius: 20px; padding: 34px 30px;
          max-width: 500px; width: 100%; text-align: center;
          box-shadow: 0 24px 64px rgba(0,10,50,0.28);
        }
        .mc-icon {
          width: 62px; height: 62px; border-radius: 50%;
          background: linear-gradient(135deg, #16A34A, #22C55E);
          display: flex; align-items: center; justify-content: center;
          margin: 20px auto 18px;
        }
        .mc-h1 { font-size: 25px; font-weight: 800; color: var(--color-text-primary); margin: 0 0 10px; }
        .mc-lead { font-size: 15px; line-height: 1.7; color: var(--color-text-secondary); margin: 0 0 24px; }
        .mc-steps { text-align: left; display: flex; flex-direction: column; gap: 14px; margin-bottom: 24px; }
        .mc-step {
          display: flex; gap: 12px; align-items: flex-start;
          background: var(--color-off-white); border: var(--border-default);
          border-radius: 12px; padding: 14px 16px;
        }
        .mc-step-icon { flex-shrink: 0; margin-top: 2px; color: var(--color-blue-france); }
        .mc-step-t { font-size: 14.5px; font-weight: 700; color: var(--color-text-primary); margin-bottom: 3px; }
        .mc-step-d { font-size: 13px; line-height: 1.6; color: var(--color-text-secondary); }
        .mc-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          background: var(--gradient-primary); color: #fff;
          padding: 14px 30px; border-radius: 100px;
          font-size: 15.5px; font-weight: 700; text-decoration: none;
        }
        .mc-help {
          font-size: 12.5px; line-height: 1.6; color: var(--color-text-muted); margin-top: 20px;
        }
        .mc-help a { color: var(--color-blue-france); }
      `}</style>
    </div>
  );
}

export function MerciContent() {
  return (
    <Suspense fallback={null}>
      <MerciInner />
    </Suspense>
  );
}
