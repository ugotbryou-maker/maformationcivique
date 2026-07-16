import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Plus, Building2, ChevronRight, AlertTriangle } from 'lucide-react';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin — Portefeuille cabinets — maformationcivique.fr',
};

const TIER_LABELS: Record<string, string> = {
  starter:      'Starter',
  pro:          'Pro',
  cabinet_plus: 'Cabinet+',
  reseau:       'Réseau',
};

// Prix annuel indicatif par palier (pour l'estimation de CA)
const TIER_PRICE: Record<string, number> = {
  starter: 390, pro: 990, cabinet_plus: 1990, reseau: 3990,
};

interface CabinetRow {
  id: string;
  name: string;
  tier: string;
  max_invitations: number;
  sub_end_at: string | null;
  created_at: string;
}

export default async function AdminCabinetsPage() {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!isAdminEmail(user?.email)) {
    redirect('/dashboard');
  }

  const service = createServiceRoleClient();

  const [{ data: cabinets }, { data: cabUsers }, { data: pending }] = await Promise.all([
    service.from('cabinets').select('id, name, tier, max_invitations, sub_end_at, created_at').order('created_at', { ascending: false }),
    service.from('users').select('id, cabinet_id, cabinet_role').not('cabinet_id', 'is', null),
    service.from('cabinet_invites').select('id, cabinet_id').is('redeemed_at', null),
  ]);

  const rows = (cabinets ?? []) as CabinetRow[];

  // Agrégats par cabinet
  const clientsByCab   = new Map<string, number>();
  const seatsByCab     = new Map<string, number>(); // membres (admin inclus)
  const pendingByCab   = new Map<string, number>();

  for (const u of cabUsers ?? []) {
    if (!u.cabinet_id) continue;
    seatsByCab.set(u.cabinet_id, (seatsByCab.get(u.cabinet_id) ?? 0) + 1);
    if (u.cabinet_role !== 'admin') {
      clientsByCab.set(u.cabinet_id, (clientsByCab.get(u.cabinet_id) ?? 0) + 1);
    }
  }
  for (const p of pending ?? []) {
    pendingByCab.set(p.cabinet_id, (pendingByCab.get(p.cabinet_id) ?? 0) + 1);
  }

  const now = new Date();

  // Totaux consolidés
  const totalCabinets = rows.length;
  const totalSeatsSold = rows.reduce((a, c) => a + (c.max_invitations ?? 0), 0);
  const totalClients   = [...clientsByCab.values()].reduce((a, b) => a + b, 0);
  const estRevenue     = rows.reduce((a, c) => a + (TIER_PRICE[c.tier] ?? 0), 0);

  const consolidated = [
    { label: 'Cabinets actifs',  value: totalCabinets },
    { label: 'Places vendues',   value: totalSeatsSold },
    { label: 'Clients inscrits', value: totalClients },
    { label: 'CA annuel est.',   value: `${estRevenue.toLocaleString('fr-FR')} €` },
  ];

  return (
    <div style={{ maxWidth: 880 }}>
      {/* En-tête */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)', marginBottom: 4 }}>
            Portefeuille cabinets
          </h1>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', margin: 0 }}>
            Vision consolidée de tous vos partenaires B2B et de leurs attributions.
          </p>
        </div>
        <Link
          href="/admin/cabinets/nouveau"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, flexShrink: 0,
            padding: '10px 18px', borderRadius: 'var(--radius-pill)',
            background: 'var(--gradient-primary)', color: '#fff',
            fontSize: 'var(--font-size-sm)', fontWeight: 600, textDecoration: 'none',
          }}
        >
          <Plus size={15} /> Nouveau cabinet
        </Link>
      </div>

      {/* KPIs consolidés */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: 12, marginBottom: 28 }}>
        {consolidated.map(({ label, value }) => (
          <div key={label} style={{
            background: 'var(--color-surface)', border: 'var(--border-default)',
            borderRadius: 'var(--radius-lg)', padding: '16px 18px',
          }}>
            <p style={{ fontSize: 11, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 6px' }}>
              {label}
            </p>
            <p style={{ fontSize: 24, fontWeight: 800, margin: 0, color: 'var(--color-text-primary)' }}>
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Liste cabinets */}
      {rows.length === 0 ? (
        <div style={{
          textAlign: 'center', padding: '56px 0', color: 'var(--color-text-muted)',
          border: '1.5px dashed var(--color-border)', borderRadius: 'var(--radius-xl)',
        }}>
          <Building2 size={28} style={{ opacity: 0.4, marginBottom: 10 }} />
          <p style={{ fontSize: 14, margin: 0 }}>Aucun cabinet partenaire pour le moment.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {rows.map((c) => {
            const clients   = clientsByCab.get(c.id) ?? 0;
            const seats     = seatsByCab.get(c.id) ?? 0;
            const pendingN  = pendingByCab.get(c.id) ?? 0;
            const used      = seats + pendingN;
            const quota     = c.max_invitations ?? 0;
            const quotaPct  = quota > 0 ? Math.round((used / quota) * 100) : 0;
            const quotaFull = quota > 0 && used >= quota;

            const subEnd    = c.sub_end_at ? new Date(c.sub_end_at) : null;
            const daysLeft  = subEnd ? Math.ceil((subEnd.getTime() - now.getTime()) / 86400000) : null;
            const expired   = daysLeft !== null && daysLeft < 0;
            const expiring  = daysLeft !== null && daysLeft >= 0 && daysLeft < 30;

            return (
              <Link
                key={c.id}
                href={`/admin/cabinets/${c.id}`}
                className="admin-cab-row"
                style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '16px 20px', borderRadius: 'var(--radius-lg)',
                  background: 'var(--color-surface)', border: 'var(--border-default)',
                  textDecoration: 'none', transition: 'border-color 160ms, box-shadow 160ms',
                }}
              >
                {/* Nom + palier */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {c.name}
                    </span>
                    <span style={{
                      flexShrink: 0, fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)',
                      background: 'var(--color-off-white)', border: 'var(--border-default)',
                      borderRadius: 100, padding: '2px 9px',
                    }}>
                      {TIER_LABELS[c.tier] ?? c.tier}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, color: 'var(--color-text-muted)' }}>
                    <span>{clients} client{clients !== 1 ? 's' : ''}</span>
                    {pendingN > 0 && <span>· {pendingN} en attente</span>}
                    {expired && (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: '#B91C1C', fontWeight: 600 }}>
                        <AlertTriangle size={12} /> Abo expiré
                      </span>
                    )}
                    {expiring && (
                      <span style={{ color: '#B45309', fontWeight: 600 }}>Expire dans {daysLeft} j</span>
                    )}
                  </div>
                </div>

                {/* Quota */}
                <div style={{ width: 140, flexShrink: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                    <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>Places</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: quotaFull ? '#B91C1C' : 'var(--color-text-secondary)' }}>
                      {used} / {quota}
                    </span>
                  </div>
                  <div style={{ height: 4, background: 'var(--color-off-white)', borderRadius: 99, overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', borderRadius: 99, width: `${Math.min(quotaPct, 100)}%`,
                      background: quotaFull ? '#EF4135' : 'var(--color-blue-france)',
                    }} />
                  </div>
                </div>

                <ChevronRight size={18} color="var(--color-text-muted)" style={{ flexShrink: 0 }} />
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        .admin-cab-row:hover {
          box-shadow: var(--shadow-card);
          border-color: var(--color-blue-france) !important;
        }
      `}</style>
    </div>
  );
}
