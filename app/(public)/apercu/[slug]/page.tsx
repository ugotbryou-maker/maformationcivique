import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Users, BarChart3, FileDown, Plus } from 'lucide-react';
import { createServiceRoleClient } from '@/lib/supabase-server';
import { extractMonogram } from '@/lib/apercu-utils';
import { LeadForm } from './LeadForm';

export const dynamic = 'force-dynamic';

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const supabase = createServiceRoleClient();
  const { data } = await supabase.from('apercu_cache').select('cabinet_name').eq('slug', params.slug).single();
  return { title: { absolute: `Aperçu — ${data?.cabinet_name ?? 'Cabinet'} | maformationcivique.fr` } };
}

const DEMO_CLIENTS = [
  { initials: 'AK', name: 'Amira K.',   pct: 78,  color: '#4285F4', attestation: false },
  { initials: 'YM', name: 'Youssef M.', pct: 45,  color: '#EA4335', attestation: false },
  { initials: 'EP', name: 'Elena P.',   pct: 100, color: '#34A853', attestation: true  },
];

export default async function ApercuSlugPage({ params }: Props) {
  const { slug } = params;
  const supabase = createServiceRoleClient();

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

        {/* Aperçu label */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <span style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
            background: '#FFF9C4', color: '#92400E', borderRadius: 100, padding: '5px 14px',
            border: '1px solid rgba(245,158,11,0.35)',
          }}>
            Aperçu · données de démonstration
          </span>
        </div>

        {/* Dashboard simulé */}
        <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 4px 28px rgba(0,35,149,0.09)', overflow: 'hidden' }}>

          {/* Header co-brandé */}
          <div style={{ background: accent, padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              {/* Logo */}
              <div style={{ width: 46, height: 46, borderRadius: 10, overflow: 'hidden', background: 'rgba(255,255,255,0.15)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {data.logo_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={data.logo_url as string}
                    alt=""
                    width={46}
                    height={46}
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  />
                ) : (
                  <span style={{ fontSize: 16, fontWeight: 800, color: '#fff' }}>{monogram}</span>
                )}
              </div>
              <div>
                <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>
                  Espace {data.cabinet_name as string}
                </p>
                <span style={{ fontSize: 11, fontWeight: 600, background: 'rgba(255,255,255,0.2)', color: '#fff', borderRadius: 100, padding: '2px 10px' }}>
                  Palier Pro · 12 / 50 invitations
                </span>
              </div>
            </div>

            <button style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: '#fff', color: accent,
              padding: '10px 16px', borderRadius: 10, border: 'none',
              cursor: 'pointer', fontWeight: 700, fontSize: 14, flexShrink: 0,
            }}>
              <Plus size={16} />
              Inviter un client
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderBottom: '1px solid #F1F5F9' }}>
            {[
              { Icon: Users,     label: '3 clients actifs',    sub: '12 invitations envoyées' },
              { Icon: BarChart3, label: 'Progression moy.',    sub: '74 % de complétion'      },
              { Icon: FileDown,  label: '1 attestation',       sub: 'Prête à télécharger'     },
            ].map(({ Icon, label, sub }, i) => (
              <div key={label} style={{ padding: '18px 20px', borderRight: i < 2 ? '1px solid #F1F5F9' : 'none' }}>
                <Icon size={16} color={accent} style={{ marginBottom: 6 }} />
                <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 2px' }}>{label}</p>
                <p style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: 0 }}>{sub}</p>
              </div>
            ))}
          </div>

          {/* Liste clients */}
          <div style={{ padding: '4px 0' }}>
            {DEMO_CLIENTS.map(({ initials, name, pct, color, attestation }) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 24px', borderBottom: '1px solid #F8FAFC' }}>
                {/* Avatar */}
                <div style={{
                  width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
                  background: color + '22', border: `2px solid ${color}55`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 800, color,
                }}>{initials}</div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 7 }}>
                    <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', margin: 0 }}>{name}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: accent }}>{pct} %</span>
                      {attestation && (
                        <span style={{ fontSize: 11, fontWeight: 700, background: '#D1FAE5', color: '#065F46', borderRadius: 100, padding: '2px 10px', border: '1px solid #A7F3D0' }}>
                          Attestation ✓
                        </span>
                      )}
                    </div>
                  </div>
                  <div style={{ height: 6, borderRadius: 99, background: '#F1F5F9', overflow: 'hidden' }}>
                    <div style={{ height: '100%', borderRadius: 99, background: accent, width: `${pct}%` }} />
                  </div>
                </div>

                {attestation && (
                  <button style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 600, color: accent, background: 'none', border: `1px solid ${accent}44`, borderRadius: 8, padding: '5px 10px', cursor: 'pointer', flexShrink: 0 }}>
                    <FileDown size={12} />
                    PDF
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Lead capture */}
        <LeadForm
          slug={slug}
          domain={data.domain as string}
          cabinetName={data.cabinet_name as string}
          accent={accent}
        />

      </div>
    </div>
  );
}
