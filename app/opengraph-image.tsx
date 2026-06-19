import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'maformationcivique.fr — Préparez votre formation civique';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #001880 0%, #002395 60%, #001A70 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Cercles décoratifs */}
        <div style={{
          position: 'absolute', top: -120, right: -120,
          width: 500, height: 500, borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute', bottom: -80, left: -80,
          width: 350, height: 350, borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)',
          display: 'flex',
        }} />

        {/* Bande tricolore gauche */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 12,
          display: 'flex', flexDirection: 'column',
        }}>
          <div style={{ flex: 1, background: '#002395', display: 'flex' }} />
          <div style={{ flex: 1, background: '#FFFFFF', display: 'flex' }} />
          <div style={{ flex: 1, background: '#CC2A2A', display: 'flex' }} />
        </div>

        {/* Contenu */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '72px 80px 72px 96px',
          flex: 1,
        }}>
          {/* Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 32,
            padding: '8px 20px',
            width: 'fit-content',
            marginBottom: 36,
          }}>
            <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 18, fontWeight: 600, letterSpacing: '0.06em' }}>
              🇫🇷  FORMATION CIVIQUE OFFICIELLE
            </span>
          </div>

          {/* Titre */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}>
            <span style={{
              fontSize: 72,
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: 24,
            }}>
              Préparez votre
            </span>
            <span style={{
              fontSize: 72,
              fontWeight: 900,
              color: '#BFCFFF',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: 40,
            }}>
              examen civique.
            </span>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 48, marginBottom: 0 }}>
              {[
                { num: '177', label: 'questions officielles' },
                { num: '5', label: 'modules thématiques' },
                { num: '3', label: 'examens blancs' },
              ].map(({ num, label }) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 48, fontWeight: 900, color: '#fff', lineHeight: 1 }}>{num}</span>
                  <span style={{ fontSize: 20, color: 'rgba(255,255,255,0.65)', marginTop: 4 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* URL */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginTop: 'auto',
          }}>
            <span style={{
              fontSize: 28,
              fontWeight: 700,
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.01em',
            }}>
              maformationcivique.fr
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
