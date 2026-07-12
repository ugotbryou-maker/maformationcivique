import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createServiceRoleClient } from '@/lib/supabase-server';
import { extractMonogram } from '@/lib/apercu-utils';
import { ApercuDashboard } from './ApercuDashboard';

export const dynamic = 'force-dynamic';

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const supabase = createServiceRoleClient();
  const { data } = await supabase.from('apercu_cache').select('cabinet_name').eq('slug', params.slug).single();
  return {
    title: { absolute: `Aperçu — ${data?.cabinet_name ?? 'Cabinet'} | maformationcivique.fr` },
    robots: 'noindex',
  };
}

export default async function ApercuSlugPage({ params }: Props) {
  const { slug } = params;
  const supabase  = createServiceRoleClient();

  const { data } = await supabase
    .from('apercu_cache')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!data) notFound();

  const accent   = (data.accent_color as string) ?? '#002395';
  const monogram = data.logo_type === 'monogram'
    ? ((data.monogram as string) ?? extractMonogram(data.cabinet_name as string))
    : null;

  return (
    <div style={{ background: 'var(--color-off-white)', minHeight: '100vh', padding: '32px 0 72px' }}>
      <div className="container" style={{ maxWidth: 860, padding: '0 20px', margin: '0 auto' }}>

        {/* Label aperçu */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <span style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
            background: '#FFF9C4', color: '#92400E', borderRadius: 100, padding: '5px 14px',
            border: '1px solid rgba(245,158,11,0.35)',
          }}>
            Aperçu · données de démonstration
          </span>
        </div>

        <ApercuDashboard
          slug={slug}
          domain={data.domain as string}
          cabinetName={data.cabinet_name as string}
          logoUrl={data.logo_url as string | null}
          monogram={monogram}
          accent={accent}
        />

      </div>
    </div>
  );
}
