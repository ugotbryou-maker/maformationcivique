import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Test civique — Papiers Français',
  description: 'Évaluez vos connaissances civiques pour préparer votre intégration en France.',
  robots: { index: false, follow: false },
};

export default function TestCiviqueLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
