'use client';

import { usePathname } from 'next/navigation';
import { CtaBanner } from '@/components/landing/CtaBanner';

const HIDDEN_ON = ['/partenaires'];

export function ConditionalCtaBanner() {
  const pathname = usePathname();
  if (HIDDEN_ON.some((p) => pathname === p || pathname.startsWith(p + '/'))) return null;
  return <CtaBanner />;
}
