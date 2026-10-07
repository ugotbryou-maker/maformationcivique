'use client';

import { useMemo, useState } from 'react';
import { Search, Infinity as InfinityIcon } from 'lucide-react';
import { Identite } from '@/components/admin/ui';

export interface LigneUtilisateur {
  id: string;
  email: string | null;
  name: string | null;
  plan: string | null;
  sub_end_at: string | null;
  created_at: string | null;
  last_active: string | null;
  telephone: string | null;
  cabinet_id: string | null;
  cabinet_nom?: string | null;
}

type Filtre = 'tous' | 'payants' | 'gratuits' | 'inactifs' | 'jamais' | 'echeance' | 'partenaires';

const FILTRES: { cle: Filtre; label: string }[] = [
  { cle: 'tous',         label: 'Tous' },
  { cle: 'payants',      label: 'Payants' },
  { cle: 'gratuits',     label: 'Gratuits' },
  { cle: 'inactifs',     label: 'Payants inactifs 30 j' },
  { cle: 'jamais',       label: 'Jamais connectés' },
  { cle: 'echeance',     label: 'Échéance < 30 j' },
  { cle: 'partenaires',  label: 'Via partenaire' },
];

const jours = (d: string | null) =>
  d == null ? null : Math.floor((Date.now() - new Date(d).getTime()) / 86400000);

export function ListeUtilisateurs({
  utilisateurs, filtreInitial = 'tous',
}: { utilisateurs: LigneUtilisateur[]; filtreInitial?: string }) {
  const [q, setQ] = useState('');
  const [filtre, setFiltre] = useState<Filtre>(
    (FILTRES.some((f) => f.cle === filtreInitial) ? filtreInitial : 'tous') as Filtre,
  );

  const lignes = useMemo(() => {
    const dans30j = Date.now() + 30 * 86400000;
    const recherche = q.trim().toLowerCase();

    return utilisateurs.filter((u) => {
      const payant = (u.plan ?? 'free') !== 'free';
      const inactifDepuis = jours(u.last_active);

      // La recherche porte aussi sur le téléphone : c'est souvent la seule
      // donnée dont on dispose quand quelqu'un appelle.
      if (recherche) {
        const champs = [u.email, u.name, u.telephone, u.cabinet_nom]
          .filter(Boolean).join(' ').toLowerCase();
        if (!champs.includes(recherche)) return false;
      }

      switch (filtre) {
        case 'payants':     return payant;
        case 'gratuits':    return !payant;
        case 'inactifs':    return payant && (inactifDepuis == null || inactifDepuis > 30);
        case 'jamais':      return !u.last_active;
        case 'echeance':    return payant && !!u.sub_end_at && new Date(u.sub_end_at).getTime() <= dans30j;
        case 'partenaires': return !!u.cabinet_id;
        default:            return true;
      }
    });
  }, [utilisateurs, q, filtre]);

  return (
    <>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
        <div className="adm-search" style={{ flex: 1, minWidth: 240 }}>
          <Search size={16} color="var(--adm-ink-mute)" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher un nom, un e-mail, un téléphone…"
            aria-label="Rechercher un utilisateur"
          />
        </div>
      </div>

      <div className="adm-chips" style={{ marginBottom: 18 }}>
        {FILTRES.map(({ cle, label }) => (
          <button
            key={cle}
            onClick={() => setFiltre(cle)}
            className={`adm-chip${filtre === cle ? ' adm-chip-on' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="adm-card" style={{ padding: '22px 0 6px' }}>
        <p className="adm-card-hint" style={{ padding: '0 24px 14px' }}>
          {lignes.length} compte{lignes.length > 1 ? 's' : ''}
          {lignes.length !== utilisateurs.length && ` sur ${utilisateurs.length}`}
        </p>

        {lignes.length === 0 ? (
          <p className="adm-empty">Aucun compte ne correspond.</p>
        ) : (
          <div className="adm-scroll">
            <table className="adm-table adm-table-pad adm-table-rows">
              <thead>
                <tr>
                  <th>Compte</th><th>Offre</th><th>Origine</th>
                  <th>Inscrit</th><th className="adm-num">Dernière visite</th>
                </tr>
              </thead>
              <tbody>
                {lignes.slice(0, 200).map((u) => {
                  const j = jours(u.last_active);
                  return (
                    <tr key={u.id}>
                      <td>
                        <Identite
                          principal={u.name || u.email || 'Utilisateur'}
                          secondaire={u.name ? u.email : u.telephone}
                          href={`/admin/utilisateurs/${u.id}`}
                        />
                      </td>
                      <td><Etiquette plan={u.plan} subEnd={u.sub_end_at} /></td>
                      <td className="adm-dim">{u.cabinet_nom ?? 'Direct'}</td>
                      <td className="adm-dim">
                        {u.created_at ? new Date(u.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' }) : '—'}
                      </td>
                      <td className="adm-num">
                        {j == null
                          ? <span className="adm-tag adm-tag-risk">jamais</span>
                          : <span className={`adm-tag${j > 30 ? ' adm-tag-warn' : ''}`}>
                              {j === 0 ? "aujourd'hui" : `il y a ${j} j`}
                            </span>}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {lignes.length > 200 && (
          <p className="adm-note" style={{ padding: '0 24px 10px' }}>
            Affichage limité aux 200 premiers résultats — affinez la recherche.
          </p>
        )}
      </div>
    </>
  );
}

function Etiquette({ plan, subEnd }: { plan: string | null; subEnd: string | null }) {
  const p = plan ?? 'free';
  if (p === 'free') return <span className="adm-tag adm-tag-free">gratuit</span>;
  if (p === 'bundle' && !subEnd) return <span className="adm-tag adm-tag-life"><InfinityIcon size={10} /> à vie</span>;
  const libelle = p === 'premium' ? 'civique' : p === 'langue' ? 'langue' : 'complet';
  return <span className="adm-tag adm-tag-paid">{libelle}</span>;
}
