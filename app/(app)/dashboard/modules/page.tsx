import type { Metadata } from 'next';
import { DashboardModulesClient } from '@/components/app/DashboardModulesClient';
import { compteursLangue } from '@/data/langue/compteurs';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import { modules } from '@/data/modules';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Modules — maformationcivique.fr',
};

export default async function AppModulesPage() {
  // Compteurs et progression sont calculés ici, côté serveur : seuls des
  // nombres traversent la frontière client, et les barres de progression
  // arrivent remplies au lieu de sauter après le montage.
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();

  let progression: Record<string, { completed: number; total: number; percent: number }> | undefined;

  if (user) {
    const { data: lignes } = await supabase
      .from('progression')
      .select('module_slug, lesson_slug')
      .eq('user_id', user.id)
      .eq('completed', true);

    const parModule: Record<string, Set<string>> = {};
    for (const l of lignes ?? []) {
      (parModule[l.module_slug] ??= new Set()).add(l.lesson_slug);
    }

    progression = {};
    for (const m of modules) {
      const faites = parModule[m.slug]?.size ?? 0;
      const total = m.lessons.length;
      progression[m.slug] = {
        completed: faites,
        total,
        percent: total > 0 ? Math.round((faites / total) * 100) : 0,
      };
    }
  }

  return <DashboardModulesClient compteurs={compteursLangue()} progression={progression} />;
}
