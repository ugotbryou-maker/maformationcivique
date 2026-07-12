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
          viewBox="93 140 280 200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{
            position: 'absolute', bottom: -20, right: -10,
            width: 280, height: 'auto', opacity: 0.06,
            pointerEvents: 'none', userSelect: 'none',
          }}
        >
          <path d="M248.431 151C283.185 152.209 319.187 157.99 345.096 183.882C354.241 192.901 360.845 204.172 364.242 216.56C368.241 231.3 367.116 255.377 367.098 271.391L367.107 328.507L311.261 328.511L248.313 328.515C248.234 324.547 248.229 320.416 248.285 316.448C248.655 290.217 247.72 263.7 248.389 237.496L304.048 237.456C303.074 230.697 302.216 225.644 296.935 220.419C285.799 209.402 262.929 208.382 248.286 208.334C248.271 191.645 247.564 167.332 248.431 151Z" fill="white"/>
          <path d="M211.827 328.516C177.073 327.307 141.071 321.526 115.162 295.634C106.017 286.614 99.4131 275.344 96.0161 262.955C92.0171 248.216 93.1421 224.138 93.1597 208.125L93.1509 151.009L148.997 151.005L211.945 151C212.024 154.969 212.029 159.099 211.973 163.068C211.603 189.299 212.538 215.815 211.869 242.02L156.21 242.059C157.184 248.818 158.041 253.872 163.323 259.097C174.458 270.114 197.329 271.134 211.972 271.182C211.987 287.87 212.694 312.184 211.827 328.516Z" fill="white"/>
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
