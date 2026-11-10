import { headers } from 'next/headers';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { TenantShell } from '@/components/layout/TenantShell';
import { ConditionalCtaBanner } from '@/components/layout/ConditionalCtaBanner';
import { IntentPopup } from '@/components/app/IntentPopup';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import { getTenantConfig, tenantCssVars } from '@/lib/tenants';

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  // ── Tenant (marque blanche) ──────────────────────────────────────────────
  const headersList = await headers();
  const tenantSlug = headersList.get('x-tenant');
  const tenant = tenantSlug ? getTenantConfig(tenantSlug) : null;
  const xPathname = headersList.get('x-pathname') ?? '';
  const isTestPage = xPathname.startsWith('/test-');

  // L'état de connexion n'est lu que pour la coquille tenant. Le site
  // principal s'en passe : son unique usage était le popup d'intention, qui
  // résout désormais la session lui-même, côté navigateur, et seulement s'il
  // s'affiche. Un aller-retour Supabase par page vue publique a disparu.
  let isLoggedIn = false;
  if (tenant && !isTestPage) {
    try {
      const supabase = await createServerSupabaseClient();
      const { data: { user } } = await supabase.auth.getUser();
      isLoggedIn = !!user;
    } catch { /* Supabase indisponible */ }
  }

  if (tenant) {
    // Landing pages pures : pas de header/footer tenant
    if (isTestPage) {
      return (
        <>
          <style dangerouslySetInnerHTML={{ __html: tenantCssVars(tenant) }} />
          {children}
        </>
      );
    }
    // Circuit fermé : layout dédié sans accès au site principal
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
      <IntentPopup />
    </>
  );
}
