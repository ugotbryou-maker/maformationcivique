import Link from 'next/link';
import { redirect, notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  ChevronLeft, Trophy, BookOpen, Flame, Target, Mail, CalendarDays,
} from 'lucide-react';
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase-server';
import { modules } from '@/data/modules';
import { a2Modules, b1Modules, b2Modules, transversalModules } from '@/data/langue';
import { calculerProgression, voletDuPlan } from '@/lib/progression';
import { Kpi, Carte, Stat, Jauge, Vide, degradeDe } from '@/components/admin/ui';
import { CabinetMemberActions } from '@/components/app/CabinetMemberActions';
import { CabinetNav } from '@/components/app/CabinetNav';
import '@/components/admin/kit.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = { title: 'Détail client — Espace cabinet' };

function dateLongue(d: string | null) {
  return d ? new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : '—';
}

export default async function CabinetMemberPage({ params }: { params: { userId: string } }) {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/connexion');

  const { data: adminProfile } = await supabase
    .from('users')
    .select('cabinet_id, cabinet_role')
    .eq('id', user.id)
    .single();

  if (!adminProfile?.cabinet_id || adminProfile.cabinet_role !== 'admin') {
    redirect('/dashboard');
  }

  const service = createServiceRoleClient();

  const { data: membre } = await service
    .from('users')
    .select('id, name, email, plan, cabinet_role, cabinet_id, xp, streak_days, last_active, created_at, demarche, langue_niveau, telephone')
    .eq('id', params.userId)
    .single();

  // Un cabinet ne voit que son propre portefeuille : le contrôle porte sur le
  // cabinet du client, jamais sur l'identifiant passé dans l'URL.
  if (!membre || membre.cabinet_id !== adminProfile.cabinet_id) notFound();

  const [{ data: progression }, { data: examens }, { data: badges }, { data: cabinet }] =
    await Promise.all([
      service.from('progression').select('module_slug, lesson_slug, completed').eq('user_id', params.userId),
      service.from('exam_results').select('exam_level, score, total_q, passed, updated_at')
        .eq('user_id', params.userId).order('updated_at', { ascending: false }),
      service.from('user_badges').select('id').eq('user_id', params.userId),
      service.from('cabinets').select('name, member_plan').eq('id', membre.cabinet_id).single(),
    ]);

  const volet = voletDuPlan(null, cabinet?.member_plan);
  const ex = examens ?? [];

  // Les examens blancs entrent dans le calcul : ils disent mieux que le
  // nombre de leçons lues si le client est prêt à se présenter.
  const prog = calculerProgression(progression ?? [], volet, membre.demarche, ex);

  const faites = new Set(
    (progression ?? []).filter((p) => p.completed).map((p) => `${p.module_slug}:${p.lesson_slug}`),
  );
  interface ModuleAffiche { slug: string; title: string; lessons: { slug: string }[] }
  const detailler = (liste: readonly ModuleAffiche[]) => liste.map((m) => {
    const n = m.lessons.filter((l) => faites.has(`${m.slug}:${l.slug}`)).length;
    return {
      titre: m.title, n, total: m.lessons.length,
      pct: m.lessons.length ? Math.round((n / m.lessons.length) * 100) : 0,
    };
  });

  // Le détail suit le volet souscrit : afficher les seuls modules civiques à
  // un cabinet en formule complète laissait invisible tout le travail de
  // français de ses clients.
  const modulesLangue = [...a2Modules, ...b1Modules, ...b2Modules, ...transversalModules];
  const blocs = [
    ...(volet !== 'langue' ? [{ cle: 'civique', titre: 'Progression — modules civiques', lignes: detailler(modules) }] : []),
    ...(volet !== 'civique' ? [{ cle: 'langue', titre: 'Progression — modules de français', lignes: detailler(modulesLangue).filter((m) => m.n > 0) }] : []),
  ];

  const meilleur = ex.reduce((a, e) => Math.max(a, (e.score / (e.total_q || 1)) * 100), 0);
  const reussis = ex.filter((e) => e.passed).length;
  const exLangue = ex.filter((e) => (e.exam_level ?? '').startsWith('LANG_')).length;
  const nom = membre.name || membre.email || 'Client';
  const estAdmin = membre.cabinet_role === 'admin';
  const jamaisVenu = !membre.last_active;

  return (
    <div className="adm" style={{ maxWidth: 940 }}>
      <CabinetNav />

      <Link href="/cabinet" className="adm-link" style={{ marginBottom: 12 }}>
        <ChevronLeft size={15} /> Retour au portefeuille
      </Link>

      {/* ── Identité ─────────────────────────────────────────────────────── */}
      <div className="adm-card" style={{ marginBottom: 16, display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
        <span className="adm-av" style={{ background: degradeDe(nom), width: 60, height: 60, borderRadius: 20, fontSize: 22 }}>
          {nom.trim()[0]?.toUpperCase() ?? '?'}
        </span>
        <div style={{ flex: 1, minWidth: 220 }}>
          <h1 className="adm-title" style={{ fontSize: 24 }}>{nom}</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 18px', marginTop: 7, fontSize: 12.5, color: 'var(--adm-ink-soft)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Mail size={13} /> {membre.email ?? '—'}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><CalendarDays size={13} /> Inscrit le {dateLongue(membre.created_at)}</span>
            <span>{estAdmin ? 'Administrateur du cabinet' : 'Client'}</span>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span className="adm-tag adm-tag-paid">
            {volet === 'complet' ? 'Civique + linguistique' : volet === 'langue' ? 'Linguistique' : 'Civique'}
          </span>
          <p className="adm-dim" style={{ marginTop: 6 }}>
            Dernière visite {membre.last_active ? dateLongue(membre.last_active) : 'jamais'}
          </p>
        </div>
      </div>

      {jamaisVenu && (
        <div className="adm-callout adm-callout-risk">
          <Flame size={15} style={{ flexShrink: 0, marginTop: 1 }} />
          <p>
            <strong>Ce client ne s&apos;est jamais connecté.</strong> Son compte est ouvert et
            son accès actif : un appel maintenant vaut mieux qu&apos;une place qui dort.
          </p>
        </div>
      )}

      {!estAdmin && (
        <CabinetMemberActions userId={params.userId} memberEmail={membre.email ?? ''} />
      )}

      {/* ── Performance ──────────────────────────────────────────────────── */}
      <div className="adm-grid adm-grid-4">
        <Kpi teinte="sky" icon={<BookOpen size={16} />} label="Préparation"
             value={`${prog.preparation.pct} %`} sub={prog.preparation.libelle} />
        <Kpi teinte="violet" icon={<Target size={16} />} label="Examens blancs"
             value={String(ex.length)}
             sub={`${reussis} réussi${reussis > 1 ? 's' : ''} · ${exLangue} linguistique${exLangue > 1 ? 's' : ''}`} />
        <Kpi teinte="mint" icon={<Trophy size={16} />} label="Meilleur score"
             value={ex.length ? `${Math.round(meilleur)} %` : '—'}
             sub={ex.length ? (meilleur >= 80 ? 'Prêt pour l’examen' : 'Sous le seuil de 80 %') : 'Aucun examen passé'} />
        <Kpi teinte="cream" icon={<Flame size={16} />} label="Série"
             value={`${membre.streak_days ?? 0} j`}
             sub={`${membre.xp ?? 0} XP · ${(badges ?? []).length} badge${(badges ?? []).length > 1 ? 's' : ''}`} />
      </div>

      <div className="adm-grid adm-grid-2">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {blocs.map((bloc) => (
            <Carte key={bloc.cle} titre={bloc.titre}
                   indice={bloc.cle === 'civique'
                     ? 'La moyenne globale masque le module bloquant'
                     : 'Seuls les modules entamés sont listés'}>
              {bloc.lignes.length === 0 ? (
                <Vide texte="Aucun module entamé pour l’instant." />
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {bloc.lignes.map((m) => (
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
              )}
            </Carte>
          ))}
        </div>

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
                    <td>
                      {(e.exam_level ?? '').startsWith('LANG_')
                        ? <span className="adm-tag adm-tag-vio">Langue {(e.exam_level ?? '').replace('LANG_', '')}</span>
                        : <span className="adm-tag">Civique {e.exam_level ?? '—'}</span>}
                    </td>
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
          <Stat n={membre.demarche ?? '—'} l="Démarche déclarée" />
          <Stat n={membre.langue_niveau ?? '—'} l="Niveau de langue" />
          <Stat n={prog.leconsTerminees} l="Leçons terminées" />
          <Stat n={prog.modulesTermines} l="Modules terminés" />
          <Stat n={membre.telephone ?? '—'} l="Téléphone" />
          <Stat n={membre.last_active ? dateLongue(membre.last_active) : 'Jamais'} l="Dernière visite" />
        </div>
      </Carte>
    </div>
  );
}
