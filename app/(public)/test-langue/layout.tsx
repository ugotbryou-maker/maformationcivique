import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Test de français — Papiers Français',
  description: 'Évaluez votre niveau de français pour vos démarches administratives.',
  robots: { index: false, follow: false },
};

export default function TestLangueLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
