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
        overflow: 'hidden', marginBottom: 20, position: 'relative',
      }}>
        <div style={{ height: 3, background: 'linear-gradient(90deg,#002395 33%,#fff 33% 66%,#CC1A1A 66%)' }} />
        <svg
          viewBox="0 0 200 260"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{
            position: 'absolute', top: 0, right: -15,
            width: 180, height: 'auto', opacity: 0.06,
            pointerEvents: 'none', userSelect: 'none',
          }}
        >
          <rect x="143" y="8" width="4" height="80" fill="white"/>
          <path d="M147,8 L196,25 L194,48 L147,36 Z" fill="white"/>
          <path d="M85,68 C88,54 93,42 100,36 C107,42 112,54 115,68 Z" fill="white"/>
          <ellipse cx="100" cy="73" rx="15" ry="18" fill="white"/>
          <path d="M113,82 C122,70 132,57 143,46" stroke="white" strokeWidth="11" fill="none" strokeLinecap="round"/>
          <path d="M85,88 C79,97 72,110 65,127 C57,148 51,170 47,192 C44,207 43,220 42,232 L158,232 C157,220 156,207 153,192 C149,170 143,148 135,127 C128,110 121,97 115,88 C109,81 105,78 100,78 C95,78 90,82 85,88 Z" fill="white"/>
          <path d="M87,102 C76,108 63,114 50,118" stroke="white" strokeWidth="10" fill="none" strokeLinecap="round"/>
          <line x1="50" y1="118" x2="32" y2="128" stroke="white" strokeWidth="5" strokeLinecap="round"/>
          <ellipse cx="38" cy="195" rx="21" ry="24" fill="white"/>
          <ellipse cx="36" cy="170" rx="13" ry="15" fill="white"/>
          <path d="M36,155 C32,142 31,130 34,120" stroke="white" strokeWidth="7" fill="none" strokeLinecap="round"/>
          <ellipse cx="164" cy="192" rx="22" ry="26" fill="white"/>
          <rect x="153" y="150" width="22" height="18" rx="2" fill="white"/>
          <rect x="148" y="167" width="32" height="5" rx="2" fill="white"/>
          <ellipse cx="164" cy="173" rx="12" ry="6" fill="white"/>
          <ellipse cx="100" cy="245" rx="55" ry="12" fill="white"/>
          <ellipse cx="35" cy="252" rx="30" ry="10" fill="white"/>
          <ellipse cx="178" cy="250" rx="28" ry="9" fill="white"/>
        </svg>
        <div style={{ padding: '24px 28px 28px', position: 'relative' }}>
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
