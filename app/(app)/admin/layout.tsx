import { redirect } from 'next/navigation';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import { isAdminEmail } from '@/lib/admin';
import { AdminTabs } from './AdminTabs';
import '@/components/admin/kit.css';

/**
 * Enveloppe commune de l'espace d'administration.
 *
 * Le contrôle d'accès est ici, en plus de chaque page : une page ajoutée plus
 * tard sans sa propre vérification reste protégée.
 */
export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!isAdminEmail(user?.email)) redirect('/dashboard');

  return (
    <div className="adm">
      <AdminTabs />
      {children}
    </div>
  );
}
