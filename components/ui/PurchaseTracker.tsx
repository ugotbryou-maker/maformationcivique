'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { fbqTrack } from '@/lib/fbq';

/**
 * Remonte l'événement Purchase à Meta au retour du paiement Stripe.
 *
 * `value` doit refléter le montant réellement encaissé : Meta s'en sert pour
 * optimiser les enchères et calculer le ROAS. Une valeur figée fausse
 * l'apprentissage de l'algorithme — elle est donc calculée côté serveur à
 * partir du plan de l'utilisateur (voir le dashboard).
 */
export function PurchaseTracker({ value = 10, planName }: { value?: number; planName?: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (searchParams.get('upgraded') === '1') {
      fbqTrack('Purchase', { value, currency: 'EUR', ...(planName ? { content_name: planName } : {}) });
      // Nettoie le param sans recharger la page
      const params = new URLSearchParams(searchParams.toString());
      params.delete('upgraded');
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    }
  }, [searchParams, router, pathname, value, planName]);

  return null;
}
