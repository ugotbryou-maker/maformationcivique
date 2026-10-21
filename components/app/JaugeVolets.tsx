/**
 * Jauge de progression à deux volets.
 *
 * Affiche le pourcentage du périmètre souscrit en grand, et le détail civique
 * / linguistique en dessous quand les deux sont concernés. Un seul chiffre
 * global sur un élève venu pour le français seul ne dit rien d'utile.
 */

export interface DetailVolet { faites: number; total: number; pct: number }

export interface Props {
  volet: 'civique' | 'langue' | 'complet';
  global: DetailVolet;
  civique: DetailVolet;
  langue: DetailVolet;
  /** Version compacte pour les lignes de liste. */
  compact?: boolean;
}

const COULEUR_CIVIQUE = '#1D5FD1';
const COULEUR_LANGUE = '#8B5FD6';

export function JaugeVolets({ volet, global, civique, langue, compact }: Props) {
  const double = volet === 'complet';
  const couleurSimple = volet === 'langue' ? COULEUR_LANGUE : COULEUR_CIVIQUE;

  if (!double) {
    return (
      <div>
        <div style={ligneHaut(compact)}>
          <span style={{ color: 'var(--color-text-muted)' }}>
            {volet === 'langue' ? 'Français' : 'Civique'}
          </span>
          <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
            {global.pct} %
          </span>
        </div>
        <Piste>
          <Segment largeur={global.pct} couleur={couleurSimple} />
        </Piste>
        {!compact && (
          <p style={legende}>{global.faites} leçons terminées sur {global.total}</p>
        )}
      </div>
    );
  }

  // Les deux volets : la piste est partagée au prorata du nombre de leçons,
  // pour que la barre représente le parcours réel et non deux moyennes
  // additionnées.
  const partCiv = (civique.total / (civique.total + langue.total)) * 100;
  const partLng = 100 - partCiv;

  return (
    <div>
      <div style={ligneHaut(compact)}>
        <span style={{ color: 'var(--color-text-muted)' }}>Progression</span>
        <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
          {global.pct} %
        </span>
      </div>
      <Piste>
        <Segment largeur={(civique.pct / 100) * partCiv} couleur={COULEUR_CIVIQUE} />
        <Segment largeur={(langue.pct / 100) * partLng} couleur={COULEUR_LANGUE} decale={partCiv} />
      </Piste>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: compact ? 5 : 8 }}>
        <Pastille couleur={COULEUR_CIVIQUE} libelle="Civique" d={civique} compact={compact} />
        <Pastille couleur={COULEUR_LANGUE} libelle="Français" d={langue} compact={compact} />
      </div>
    </div>
  );
}

function Piste({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      position: 'relative', height: 7, borderRadius: 100,
      background: 'var(--color-off-white)', overflow: 'hidden',
    }}>
      {children}
    </div>
  );
}

function Segment({ largeur, couleur, decale = 0 }: { largeur: number; couleur: string; decale?: number }) {
  return (
    <div style={{
      position: 'absolute', top: 0, bottom: 0,
      left: `${decale}%`, width: `${Math.max(0, Math.min(100, largeur))}%`,
      background: couleur, borderRadius: 100,
    }} />
  );
}

function Pastille({ couleur, libelle, d, compact }: {
  couleur: string; libelle: string; d: DetailVolet; compact?: boolean;
}) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      fontSize: compact ? 11 : 12, color: 'var(--color-text-muted)',
    }}>
      <span style={{ width: 7, height: 7, borderRadius: 2, background: couleur, flexShrink: 0 }} />
      {libelle}
      <strong style={{ color: 'var(--color-text-secondary)', fontVariantNumeric: 'tabular-nums' }}>
        {d.faites}/{d.total}
      </strong>
    </span>
  );
}

const legende: React.CSSProperties = {
  fontSize: 12, color: 'var(--color-text-muted)', margin: '7px 0 0',
};

function ligneHaut(compact?: boolean): React.CSSProperties {
  return {
    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
    gap: 10, fontSize: compact ? 11.5 : 13, marginBottom: compact ? 4 : 6,
  };
}
