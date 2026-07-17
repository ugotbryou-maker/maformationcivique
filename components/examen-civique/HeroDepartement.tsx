/**
 * Bande d'en-tête du département — photo + voile tricolore bleu (ton du site),
 * intercalée entre l'intro et le premier H2. Liste les grandes villes du
 * département (gain SEO local : « examen civique {ville} »).
 *
 * Robuste : si aucune photo n'est fournie (ou fichier absent), la bande reste
 * affichée en dégradé bleu seul — jamais d'image cassée.
 */

import type { Departement } from '@/data/departements/types';

export function HeroDepartement({ dep }: { dep: Departement }) {
  const villes = dep.villesPrincipales;
  const bg = dep.heroImage?.src;

  return (
    <figure style={{ margin: '28px 0 8px' }}>
      <div style={{
        position: 'relative',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        minHeight: 200,
        // Dégradé bleu France toujours présent ; la photo passe par-dessus en
        // background si elle existe (sinon, dégradé seul — pas d'image cassée).
        background: bg
          ? `linear-gradient(180deg, rgba(0,25,80,0.35) 0%, rgba(0,31,140,0.78) 100%), url('${bg}') center 35%/cover no-repeat`
          : 'linear-gradient(135deg, #001A70 0%, #002395 60%, #1D4ED8 100%)',
        WebkitMaskImage: '-webkit-radial-gradient(white, black)', // fix clip Safari
      }}>
        {/* Barre tricolore */}
        <div style={{ height: 3, background: 'linear-gradient(90deg,#002395 33%,#fff 33% 66%,#ED2939 66%)' }} />

        <div style={{ padding: '22px 26px 24px' }}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.75)', margin: '0 0 8px',
          }}>
            Examen civique · {dep.nom} ({dep.code})
          </p>
          <p style={{
            fontSize: 'clamp(17px, 2.6vw, 21px)', fontWeight: 800, color: '#fff',
            lineHeight: 1.3, margin: 0, textShadow: '0 2px 16px rgba(0,0,0,0.35)', maxWidth: 520,
          }}>
            L&apos;examen civique concerne les résident·e·s étranger·e·s de tout le département,
            de {dep.prefectureVille} aux communes alentour.
          </p>

          {villes.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 16 }}>
              {villes.map((v) => (
                <span key={v} style={{
                  fontSize: 12, fontWeight: 600, color: '#fff',
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: 100, padding: '4px 12px',
                  backdropFilter: 'blur(4px)',
                }}>
                  {v}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      {dep.heroImage?.credit && (
        <figcaption style={{ fontSize: 11, color: 'var(--color-text-muted)', margin: '6px 2px 0' }}>
          Photo : {dep.heroImage.credit}
        </figcaption>
      )}
    </figure>
  );
}
