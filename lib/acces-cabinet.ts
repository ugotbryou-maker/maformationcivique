/**
 * Réalignement de l'accès des membres de cabinet sur le contrat de leur
 * cabinet.
 *
 * Le plan est recopié sur l'utilisateur au moment où il accepte son
 * invitation. Rien ne le remettait à jour ensuite : changer le
 * `member_plan` d'un cabinet dans Supabase laissait tous ses membres déjà
 * inscrits sur l'ancien accès, sans aucun signe visible. Ce rattrapage
 * tourne avec la synchronisation quotidienne.
 */

import type { SupabaseClient } from '@supabase/supabase-js';

export interface CorrectionAcces {
  email: string;
  cabinet: string;
  avant: string;
  apres: string;
}

/**
 * Remet chaque membre de cabinet sur le plan de son cabinet.
 * `simulation` calcule les écarts sans rien écrire.
 */
export async function realignerMembresCabinet(
  service: SupabaseClient,
  simulation = false,
): Promise<CorrectionAcces[]> {
  const [{ data: cabinets }, { data: membres }] = await Promise.all([
    service.from('cabinets').select('id, name, member_plan'),
    service.from('users').select('id, email, plan, cabinet_id').not('cabinet_id', 'is', null),
  ]);

  const parId = new Map((cabinets ?? []).map((c) => [c.id, c]));
  const corrections: CorrectionAcces[] = [];

  for (const m of membres ?? []) {
    const cabinet = parId.get(m.cabinet_id);
    // Un cabinet sans plan déclaré ouvre l'accès complet : c'est la promesse
    // faite aux partenaires, et une colonne laissée vide ne doit jamais se
    // traduire par un accès amoindri pour leurs clients.
    const attendu = cabinet?.member_plan ?? 'bundle';
    if (!cabinet || m.plan === attendu) continue;

    corrections.push({
      email: m.email ?? m.id,
      cabinet: cabinet.name ?? '—',
      avant: m.plan ?? 'free',
      apres: attendu,
    });

    if (!simulation) {
      await service.from('users').update({ plan: attendu }).eq('id', m.id);
    }
  }

  return corrections;
}
