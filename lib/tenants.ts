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
  logoHeight?: number;     // hauteur d'affichage en navbar (défaut 32) — à monter
                           // pour un logo carré, illisible à 32 px
  headerColor?: string;    // fond du bandeau tenant (défaut : primaryColor)
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
    logoAspect: 325 / 84,   // viewBox 325×84
    website: 'https://www.papiers-francais.com',
  },
  ir99: {
    slug: 'ir99',
    name: 'IR 99 Formation',
    subdomain: 'ir99',
    // Couleurs relevées directement sur leur logo : le site est monochrome,
    // toute l'identité tient dans l'écusson (rouge) et les lauriers (or).
    primaryColor: '#A31717',
    primaryDark: '#7A1010',
    accentColor: '#CC9F11',
    logoPath: '/tenants/ir99/logo-dark.png',
    logoLightPath: '/tenants/ir99/logo-light.png',
    logoAspect: 360 / 332,
    logoHeight: 40,
    // Leur site est intégralement noir et blanc : le bandeau reprend ce noir,
    // sur lequel l'écusson rouge et or ressort. Poser l'écusson sur un fond
    // du même rouge le ferait disparaître.
    headerColor: '#141414',
    website: 'https://www.ir99formation.com',
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
