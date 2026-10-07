import type { Metadata } from 'next';
import { createServiceRoleClient } from '@/lib/supabase-server';
import { ListeUtilisateurs, type LigneUtilisateur } from '@/components/admin/ListeUtilisateurs';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Utilisateurs — maformationcivique.fr',
  robots: { index: false, follow: false, nocache: true },
};

export default async function AdminUtilisateursPage({
  searchParams,
}: { searchParams: Promise<{ filtre?: string }> }) {
  const { filtre } = await searchParams;
  const s = createServiceRoleClient();

  const [{ data: users }, { data: cabinets }] = await Promise.all([
    s.from('users')
      .select('id, email, name, plan, sub_end_at, created_at, last_active, telephone, cabinet_id')
      .order('created_at', { ascending: false }),
    s.from('cabinets').select('id, name'),
  ]);

  const nomCabinet = new Map((cabinets ?? []).map((c) => [c.id, c.name]));
  const lignes: LigneUtilisateur[] = (users ?? []).map((u) => ({
    ...u,
    cabinet_nom: u.cabinet_id ? nomCabinet.get(u.cabinet_id) ?? 'Partenaire' : null,
  }));

  return (
    <>
      <header className="adm-head">
        <div>
          <h1 className="adm-title">Utilisateurs</h1>
          <p className="adm-sub">
            Recherche, segmentation et accès à la fiche de chaque compte
          </p>
        </div>
      </header>

      <ListeUtilisateurs utilisateurs={lignes} filtreInitial={filtre} />
    </>
  );
}
