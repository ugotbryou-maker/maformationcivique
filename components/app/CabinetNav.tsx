'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Users, Settings } from 'lucide-react';

const TABS = [
  { label: 'Clients',     href: '/cabinet',            icon: Users    },
  { label: 'Paramètres', href: '/cabinet/parametres', icon: Settings },
];

export function CabinetNav() {
  const pathname = usePathname();
  return (
    <div style={{
      display: 'flex', gap: 2,
      borderBottom: '1px solid var(--color-border)',
      marginBottom: 24,
    }}>
      {TABS.map(({ label, href, icon: Icon }) => {
        const active = href === '/cabinet'
          ? pathname === '/cabinet'
          : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            style={{
              display: 'flex', alignItems: 'center', gap: 7,
              padding: '10px 18px',
              fontSize: 14, fontWeight: active ? 600 : 500,
              color: active ? 'var(--color-blue-france)' : 'var(--color-text-muted)',
              textDecoration: 'none',
              borderBottom: active
                ? '2px solid var(--color-blue-france)'
                : '2px solid transparent',
              marginBottom: -1,
              transition: 'color 150ms ease',
            }}
          >
            <Icon size={15} />
            {label}
          </Link>
        );
      })}
    </div>
  );
}
