'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Fiche } from '@/data/fiches';

interface Props {
  fiche: Fiche;
}

/**
 * Carte verticale "portrait" pour la grille /fiches — image en fond,
 * overlay coloré tricolore, nom + tag en bas. Inspirée du style
 * "joueur NBA" fourni par l'utilisateur.
 */
export function FicheCard({ fiche }: Props) {
  return (
    <Link
      href={`/fiches/${fiche.slug}`}
      style={{ display: 'block', textDecoration: 'none' }}
    >
      <article
        className="fiche-card"
        style={{
          position: 'relative',
          borderRadius: '18px',
          overflow: 'hidden',
          height: '320px',
          cursor: 'pointer',
        }}
      >
        {/* Image de fond — next/image : redimensionnée et optimisée
            (les sources Wikimedia originales pèsent jusqu'à 10-18 Mo,
            ce qui causait des saccades/"clipping" au scroll sur /fiches) */}
        <Image
          src={fiche.image}
          alt=""
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
          className="fiche-card-img"
          style={{
            objectFit: 'cover',
            objectPosition: fiche.cardImagePosition ?? 'center 22%',
            transition: 'transform 400ms ease-out',
            ...({ '--img-scale': fiche.cardImageScale ?? 1 } as React.CSSProperties),
          }}
        />

        {/* Overlay coloré tricolore */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(160deg, ${fiche.color}D9 0%, transparent 45%, ${fiche.colorEnd}E6 100%)`,
            mixBlendMode: 'multiply',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)',
          }}
        />

        {/* Contenu */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            padding: '18px 18px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Top : tag */}
          <div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 600,
                padding: '4px 12px',
                borderRadius: '100px',
                background: 'rgba(255,255,255,0.92)',
                color: fiche.color,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              {fiche.tag}
            </span>
          </div>

          {/* Bottom : nom + sous-titre + CTA */}
          <div>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '4px',
                letterSpacing: '-0.01em',
                lineHeight: 1.15,
              }}
            >
              {fiche.name}
            </h3>
            <p
              style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '10px',
                lineHeight: 1.4,
              }}
            >
              {fiche.subtitle}
            </p>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#fff',
              }}
            >
              Lire la fiche <ArrowRight size={13} />
            </span>
          </div>
        </div>
      </article>

      <style>{`
        .fiche-card-img {
          transform: scale(var(--img-scale, 1));
        }
        .fiche-card:hover .fiche-card-img {
          transform: scale(calc(var(--img-scale, 1) * 1.05));
        }
        .fiche-card {
          transition: box-shadow 300ms ease-out, transform 300ms ease-out;
        }
        .fiche-card:hover {
          box-shadow: 0 20px 50px rgba(0,0,0,0.22);
          transform: translateY(-2px);
        }
      `}</style>
    </Link>
  );
}
