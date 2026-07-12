import { redirect } from 'next/navigation';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { CabinetNav } from '@/components/app/CabinetNav';
import { CabinetParamsForm } from '@/components/app/CabinetParamsForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paramètres cabinet — maformationcivique.fr',
};

export default async function CabinetParamsPage() {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/connexion');

  const { data: profile } = await supabase
    .from('users')
    .select('cabinet_id, cabinet_role')
    .eq('id', user.id)
    .single();

  if (!profile?.cabinet_id || profile.cabinet_role !== 'admin') {
    redirect('/dashboard');
  }

  const service = createServiceRoleClient();
  const { data: cabinet } = await service
    .from('cabinets')
    .select('name, tier, palette_slug, google_review_link')
    .eq('id', profile.cabinet_id)
    .single();

  const cabinetInitial = (cabinet?.name ?? 'C')[0].toUpperCase();

  return (
    <div style={{ maxWidth: 780 }}>
      {/* Hero */}
      <div style={{
        background: '#001A70', borderRadius: 'var(--radius-xl)',
        overflow: 'hidden', marginBottom: 20,
      }}>
        <div style={{ height: 3, background: 'linear-gradient(90deg,#002395 33%,#fff 33% 66%,#CC1A1A 66%)' }} />
        <div style={{ padding: '24px 28px 28px' }}>
          <p style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>
            Espace partenaire
          </p>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: '#fff', margin: 0 }}>
            {cabinet?.name ?? 'Votre cabinet'}
          </h1>
        </div>
      </div>

      <CabinetNav />

      <div style={{
        background: 'var(--color-surface)', border: 'var(--border-default)',
        borderRadius: 'var(--radius-xl)', padding: '28px 32px',
      }}>
        <CabinetParamsForm
          currentName={cabinet?.name ?? ''}
          currentPalette={(cabinet as Record<string, unknown>)?.palette_slug as string ?? 'tricolore'}
          currentGmbLink={(cabinet as Record<string, unknown>)?.google_review_link as string | null ?? null}
          cabinetInitial={cabinetInitial}
        />
      </div>
    </div>
  );
}
