import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { ExamenLangueClient } from '@/components/app/ExamenLangueClient';

export const metadata: Metadata = { title: 'Examen blanc linguistique — maformationcivique.fr' };

const NIVEAUX = ['A2', 'B1', 'B2'];

export default async function ExamenLanguePage({ params }: { params: Promise<{ niveau: string }> }) {
  const { niveau } = await params;
  const n = niveau.toUpperCase();
  if (!NIVEAUX.includes(n)) notFound();

  return (
    <div style={{ maxWidth: 740 }}>
      <Link href="/examen?type=langue" style={{
        display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 14,
        fontSize: 13, fontWeight: 600, color: 'var(--color-blue-france)', textDecoration: 'none',
      }}>
        <ChevronLeft size={15} /> Examens blancs
      </Link>
      <ExamenLangueClient niveau={n} />
    </div>
  );
}
