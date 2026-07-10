export interface TenantConfig {
  slug: string;
  name: string;
  subdomain: string;
  primaryColor: string;
  primaryDark: string;
  accentColor: string;
  logoPath: string;        // chemin /public/... pour fond clair (navbar)
  logoLightPath: string;   // chemin /public/... pour fond sombre (footer, héros)
  logoAspect: number;      // width/height pour calculer le width à partir du height
  website?: string;
}

// Config statique — en V2 on lira ça depuis la table `cabinets` Supabase
const TENANTS: Record<string, TenantConfig> = {
  'papiers-francais': {
    slug: 'papiers-francais',
    name: 'Papiers Français',
    subdomain: 'papiers-francais',
    primaryColor: '#002071',
    primaryDark: '#001450',
    accentColor: '#E42314',
    logoPath: '/tenants/papiers-francais/logo-dark.svg',
    logoLightPath: '/tenants/papiers-francais/logo-light.svg',
    logoAspect: 260 / 74,   // viewBox 260×74
    website: 'https://www.papiers-francais.com',
  },
};

export function getTenantConfig(slug: string): TenantConfig | null {
  return TENANTS[slug] ?? null;
}

export function tenantCssVars(tenant: TenantConfig): string {
  return `
    :root {
      --color-blue-france: ${tenant.primaryColor};
      --color-blue-france-dark: ${tenant.primaryDark};
      --color-red-france: ${tenant.accentColor};
      --gradient-primary: linear-gradient(135deg, ${tenant.primaryDark} 0%, ${tenant.primaryColor} 100%);
    }
  `;
}
