import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';
import { CreateCabinetForm } from '@/components/app/CreateCabinetForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin — Nouveau cabinet — maformationcivique.fr',
};

export default async function AdminNewCabinetPage() {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!isAdminEmail(user?.email)) {
    redirect('/dashboard');
  }

  return (
    <div style={{ maxWidth: '620px' }}>
      <Link
        href="/admin/cabinets"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)',
          textDecoration: 'none', marginBottom: 20,
        }}
      >
        <ArrowLeft size={15} /> Portefeuille
      </Link>

      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)', marginBottom: '4px' }}>
          Nouveau cabinet partenaire
        </h1>
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
          Crée l&apos;espace cabinet et envoie l&apos;invitation administrateur par email.
        </p>
      </div>

      <div
        style={{
          padding: '24px', borderRadius: 'var(--radius-xl)',
          background: 'var(--color-surface)', border: 'var(--border-default)',
        }}
      >
        <CreateCabinetForm />
      </div>
    </div>
  );
}
