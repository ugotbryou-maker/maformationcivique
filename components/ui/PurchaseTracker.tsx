'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { fbqTrack } from '@/lib/fbq';

export function PurchaseTracker() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (searchParams.get('upgraded') === '1') {
      fbqTrack('Purchase', { value: 12.00, currency: 'EUR' });
      // Nettoie le param sans recharger la page
      const params = new URLSearchParams(searchParams.toString());
      params.delete('upgraded');
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    }
  }, [searchParams, router, pathname]);

  return null;
}
