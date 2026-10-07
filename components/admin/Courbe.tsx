/**
 * Courbe en aire, rendue en SVG côté serveur.
 *
 * L'ancien graphique était une rangée de barres CSS : impossible d'y lire une
 * tendance, et aucune valeur n'y était légendée. Ici l'aire porte la tendance,
 * le point haut est annoté, et la grille donne l'échelle.
 */
export function Courbe({
  points, hauteur = 150, couleur = '#4A63D6', suffixe = '',
}: {
  points: { jour: string; valeur: number }[];
  hauteur?: number;
  couleur?: string;
  suffixe?: string;
}) {
  if (points.length < 2) return <p className="adm-empty">Pas encore assez de données.</p>;

  const L = 600;
  const H = hauteur;
  const padH = 22;
  const max = Math.max(1, ...points.map((p) => p.valeur));
  const pas = L / (points.length - 1);

  const xy = points.map((p, i) => ({
    x: i * pas,
    y: H - padH - (p.valeur / max) * (H - padH * 2),
    ...p,
  }));

  // Lissage par courbes cubiques : une ligne brisée sur 30 points est illisible.
  let d = `M ${xy[0].x} ${xy[0].y}`;
  for (let i = 1; i < xy.length; i++) {
    const p0 = xy[i - 1], p1 = xy[i];
    const cx = (p0.x + p1.x) / 2;
    d += ` C ${cx} ${p0.y}, ${cx} ${p1.y}, ${p1.x} ${p1.y}`;
  }

  const sommet = xy.reduce((a, b) => (b.valeur >= a.valeur ? b : a), xy[0]);
  const id = `cb${Math.abs(couleur.split('').reduce((a, c) => a + c.charCodeAt(0), 0))}`;

  return (
    <svg
      viewBox={`0 0 ${L} ${H}`}
      preserveAspectRatio="none"
      style={{ width: '100%', height: hauteur, display: 'block', overflow: 'visible' }}
      role="img"
      aria-label={`Évolution sur ${points.length} jours, maximum ${max}${suffixe}`}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={couleur} stopOpacity="0.26" />
          <stop offset="100%" stopColor={couleur} stopOpacity="0" />
        </linearGradient>
      </defs>

      {[0.25, 0.5, 0.75].map((f) => (
        <line
          key={f} x1="0" x2={L}
          y1={padH + f * (H - padH * 2)} y2={padH + f * (H - padH * 2)}
          stroke="#EEF2FA" strokeWidth="1"
        />
      ))}

      <path d={`${d} L ${L} ${H} L 0 ${H} Z`} fill={`url(#${id})`} />
      <path d={d} fill="none" stroke={couleur} strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />

      {max > 0 && (
        <>
          <circle cx={sommet.x} cy={sommet.y} r="4" fill="#fff" stroke={couleur} strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke" />
          <text
            x={Math.min(Math.max(sommet.x, 26), L - 26)} y={Math.max(sommet.y - 12, 11)}
            textAnchor="middle" fontSize="11" fontWeight="700" fill={couleur}
          >
            {sommet.valeur}{suffixe}
          </text>
        </>
      )}
    </svg>
  );
}
