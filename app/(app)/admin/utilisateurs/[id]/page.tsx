import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  ChevronLeft, Trophy, BookOpen, Flame, Target, Building2, Phone, Mail, CalendarDays,
} from 'lucide-react';
import { createServiceRoleClient } from '@/lib/supabase-server';
import { modules } from '@/data/modules';
import { Kpi, Carte, Stat, Jauge, Vide, degradeDe } from '@/components/admin/ui';
import { ActionsUtilisateur } from '@/components/admin/ActionsUtilisateur';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Fiche utilisateur — maformationcivique.fr',
  robots: { index: false, follow: false, nocache: true },
};

const PLAN_LABEL: Record<string, string> = {
  free: 'Gratuit', premium: 'Civique', langue: 'Langue', bundle: 'Complet',
};

function dateLongue(d: string | null) {
  return d ? new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : '—';
}

export default async function FicheUtilisateurPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const s = createServiceRoleClient();

  const { data: u } = await s.from('users').select('*').eq('id', id).single();
  if (!u) notFound();

  const [{ data: progression }, { data: exams }, { data: badges }, { data: cabinet }] =
    await Promise.all([
      s.from('progression').select('module_slug, lesson_slug, completed, completed_at').eq('user_id', id),
      s.from('exam_results').select('exam_level, score, total_q, passed, updated_at').eq('user_id', id).order('updated_at', { ascending: false }),
      s.from('user_badges').select('id').eq('user_id', id),
      u.cabinet_id
        ? s.from('cabinets').select('id, name').eq('id', u.cabinet_id).single()
        : Promise.resolve({ data: null }),
    ]);

  // Progression par module : la moyenne globale masque le module bloquant.
  const faites = new Set(
    (progression ?? []).filter((p) => p.completed).map((p) => `${p.module_slug}:${p.lesson_slug}`),
  );
  const parModule = modules.map((m) => {
    const n = m.lessons.filter((l) => faites.has(`${m.slug}:${l.slug}`)).length;
    return { titre: m.title, n, total: m.lessons.length, pct: m.lessons.length ? Math.round((n / m.lessons.length) * 100) : 0 };
  });
  const totalLecons = modules.reduce((a, m) => a + m.lessons.length, 0);
  const pctGlobal = totalLecons ? Math.round((faites.size / totalLecons) * 100) : 0;

  const ex = exams ?? [];
  const meilleur = ex.reduce((a, e) => Math.max(a, (e.score / (e.total_q || 1)) * 100), 0);
  const nom = u.name || u.email || 'Utilisateur';
  const jamaisVenu = !u.last_active;

  return (
    <>
      <Link href="/admin/utilisateurs" className="adm-link" style={{ marginBottom: 12 }}>
        <ChevronLeft size={15} /> Utilisateurs
      </Link>

      {/* ── Identité ─────────────────────────────────────────────────────── */}
      <div className="adm-card" style={{ marginBottom: 16, display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
        <span
          className="adm-av"
          style={{ background: degradeDe(nom), width: 60, height: 60, borderRadius: 20, fontSize: 22 }}
        >
          {nom.trim()[0]?.toUpperCase() ?? '?'}
        </span>
        <div style={{ flex: 1, minWidth: 220 }}>
          <h1 className="adm-title" style={{ fontSize: 24 }}>{nom}</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 18px', marginTop: 7, fontSize: 12.5, color: 'var(--adm-ink-soft)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Mail size={13} /> {u.email ?? '—'}</span>
            {u.telephone && <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Phone size={13} /> {u.telephone}</span>}
            <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><CalendarDays size={13} /> Inscrit le {dateLongue(u.created_at)}</span>
            {cabinet && (
              <Link href={`/admin/cabinets/${cabinet.id}`} className="adm-link" style={{ fontSize: 12.5 }}>
                <Building2 size={13} /> {cabinet.name}
              </Link>
            )}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span className={`adm-tag ${(u.plan ?? 'free') === 'free' ? 'adm-tag-free' : 'adm-tag-paid'}`}>
            {PLAN_LABEL[u.plan ?? 'free'] ?? u.plan}
          </span>
          <p className="adm-dim" style={{ marginTop: 6 }}>
            {u.sub_end_at ? `Échéance ${dateLongue(u.sub_end_at)}` : 'Sans échéance'}
          </p>
        </div>
      </div>

      {jamaisVenu && (
        <div className="adm-callout adm-callout-risk">
          <Flame size={15} style={{ flexShrink: 0, marginTop: 1 }} />
          <p>
            <strong>Ce compte ne s&apos;est jamais connecté.</strong> S&apos;il est payant,
            c&apos;est le profil le plus susceptible de demander un remboursement : une
            relance maintenant coûte moins cher qu&apos;un litige plus tard.
          </p>
        </div>
      )}

      {/* ── Actions ──────────────────────────────────────────────────────── */}
      <ActionsUtilisateur userId={u.id} email={u.email ?? ''} planActuel={u.plan ?? 'free'} />

      {/* ── Performance ──────────────────────────────────────────────────── */}
      <div className="adm-grid adm-grid-4">
        <Kpi teinte="sky" icon={<BookOpen size={16} />} label="Progression"
             value={`${pctGlobal} %`} sub={`${faites.size} / ${totalLecons} leçons`} />
        <Kpi teinte="violet" icon={<Target size={16} />} label="Examens blancs"
             value={String(ex.length)} sub={`${ex.filter((e) => e.passed).length} réussi${ex.filter((e) => e.passed).length > 1 ? 's' : ''}`} />
        <Kpi teinte="mint" icon={<Trophy size={16} />} label="Meilleur score"
             value={ex.length ? `${Math.round(meilleur)} %` : '—'} sub={meilleur >= 80 ? 'Prêt pour l’examen' : 'Sous le seuil de 80 %'} />
        <Kpi teinte="cream" icon={<Flame size={16} />} label="Série"
             value={`${u.streak_days ?? 0} j`} sub={`${u.xp ?? 0} XP · ${(badges ?? []).length} badge${(badges ?? []).length > 1 ? 's' : ''}`} />
      </div>

      <div className="adm-grid adm-grid-2">
        <Carte titre="Progression par module" indice="La moyenne globale masque le module bloquant">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {parModule.map((m) => (
              <div key={m.titre}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, gap: 12 }}>
                  <span style={{ fontSize: 13, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {m.titre}
                  </span>
                  <span className="adm-dim" style={{ flexShrink: 0 }}>{m.n}/{m.total}</span>
                </div>
                <Jauge pct={m.pct} />
              </div>
            ))}
          </div>
        </Carte>

        <Carte titre="Historique des examens blancs">
          {ex.length === 0 ? (
            <Vide texte="Aucun examen blanc passé." />
          ) : (
            <table className="adm-table">
              <thead>
                <tr><th>Niveau</th><th className="adm-num">Score</th><th className="adm-num">Résultat</th><th className="adm-num">Date</th></tr>
              </thead>
              <tbody>
                {ex.slice(0, 10).map((e, i) => (
                  <tr key={i}>
                    <td>{e.exam_level ?? '—'}</td>
                    <td className="adm-num adm-strong">{e.score}/{e.total_q}</td>
                    <td className="adm-num">
                      <span className={`adm-tag ${e.passed ? 'adm-tag-life' : 'adm-tag-risk'}`}>
                        {e.passed ? 'réussi' : 'échoué'}
                      </span>
                    </td>
                    <td className="adm-num adm-dim">
                      {e.updated_at ? new Date(e.updated_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' }) : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Carte>
      </div>

      <Carte titre="Dossier">
        <div className="adm-stats">
          <Stat n={u.demarche ?? '—'} l="Démarche déclarée" />
          <Stat n={u.langue_niveau ?? '—'} l="Niveau de langue" />
          <Stat n={u.last_active ? dateLongue(u.last_active) : 'Jamais'} l="Dernière visite" />
          <Stat n={u.onboarding_done ? 'Oui' : 'Non'} l="Onboarding terminé" />
          <Stat n={u.accompagne ? 'Oui' : 'Non'} l="Souhaite être accompagné" />
          <Stat n={u.relance_le ? dateLongue(u.relance_le) : 'Jamais'} l="Dernière relance" />
        </div>
      </Carte>
    </>
  );
}
