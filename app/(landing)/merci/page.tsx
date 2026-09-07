import type { Metadata } from 'next';
import { MerciContent } from './MerciContent';

export const metadata: Metadata = {
  title: { absolute: 'Merci — votre accès est activé' },
  robots: { index: false, follow: false },
};

export default function MerciPage() {
  return <MerciContent />;
}
