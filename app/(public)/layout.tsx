import { headers } from 'next/headers';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { TenantShell } from '@/components/layout/TenantShell';
import { ConditionalCtaBanner } from '@/components/layout/ConditionalCtaBanner';
import { IntentPopup } from '@/components/app/IntentPopup';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import { getTenantConfig, tenantCssVars } from '@/lib/tenants';

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  let isLoggedIn = false;
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    isLoggedIn = !!user;
  } catch { /* Supabase indisponible */ }

  // ── Tenant (marque blanche) ──────────────────────────────────────────────
  const headersList = await headers();
  const tenantSlug = headersList.get('x-tenant');
  const tenant = tenantSlug ? getTenantConfig(tenantSlug) : null;

  // Circuit fermé : layout dédié sans accès au site principal
  if (tenant) {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: tenantCssVars(tenant) }} />
        <TenantShell tenant={tenant} isLoggedIn={isLoggedIn}>
          {children}
        </TenantShell>
      </>
    );
  }

  return (
    <>
      <Navbar tenant={null} />
      <main>{children}</main>
      <ConditionalCtaBanner />
      <Footer tenant={null} />
      <IntentPopup isLoggedIn={isLoggedIn} />
    </>
  );
}
