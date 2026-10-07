'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Gauge, Users, Building2, Inbox } from 'lucide-react';

const ONGLETS = [
  { href: '/admin',              label: 'Pilotage',     icon: Gauge,     exact: true },
  { href: '/admin/utilisateurs', label: 'Utilisateurs', icon: Users },
  { href: '/admin/cabinets',     label: 'Partenaires',  icon: Building2 },
  { href: '/admin/leads',        label: 'Leads',        icon: Inbox },
];

export function AdminTabs({ compteurs }: { compteurs?: Record<string, number> }) {
  const chemin = usePathname();

  return (
    <nav className="adm-tabs">
      {ONGLETS.map(({ href, label, icon: Icon, exact }) => {
        const actif = exact ? chemin === href : chemin.startsWith(href);
        const n = compteurs?.[href];
        return (
          <Link key={href} href={href} className={`adm-tab${actif ? ' adm-tab-on' : ''}`}>
            <Icon size={15} />
            {label}
            {n != null && n > 0 && <span className="adm-tab-count">{n}</span>}
          </Link>
        );
      })}
    </nav>
  );
}
