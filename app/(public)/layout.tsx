import { headers } from 'next/headers';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
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

  return (
    <>
      {tenant && (
        <style dangerouslySetInnerHTML={{ __html: tenantCssVars(tenant) }} />
      )}
      <Navbar tenant={tenant} />
      <main>{children}</main>
      <ConditionalCtaBanner />
      <Footer tenant={tenant} />
      <IntentPopup isLoggedIn={isLoggedIn} />
    </>
  );
}
