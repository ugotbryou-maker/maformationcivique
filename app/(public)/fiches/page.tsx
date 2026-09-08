import type { Metadata } from 'next';
import { fiches } from '@/data/fiches';
import { FicheCard } from '@/components/app/FicheCard';

export const metadata: Metadata = {
  title: "Fiches mémo : symboles, institutions et figures de la France",
  description: "Fiches courtes sur les symboles de la République, les institutions, les dates clés et les grandes figures françaises : les repères du programme de l'examen civique.",
  alternates: { canonical: 'https://www.maformationcivique.fr/fiches' },
  openGraph: {
    title: "Fiches mémo : symboles, institutions et figures de la France",
    description: "Les repères du programme de l'examen civique, expliqués en fiches courtes.",
    url: 'https://www.maformationcivique.fr/fiches',
  },
};

export default function FichesPage() {
  // Une section par famille de requêtes : chaque groupe vise un type
  // d'intention distinct (emblème, organe institutionnel, date, entité).
  const sections = [
    { key: 'demarche',    titre: 'Le vocabulaire des démarches', intro: 'TCF, CIR, récépissé, VLS-TS : les sigles et documents que vous croiserez, expliqués simplement.' },
    { key: 'symbole',     titre: 'Les symboles de la République', intro: 'Drapeau, hymne, devise : les emblèmes officiels et leur signification.' },
    { key: 'institution', titre: 'Institutions et textes fondateurs', intro: 'Qui fait quoi dans la République, et sur quels textes elle repose.' },
    { key: 'evenement',   titre: 'Dates et événements clés', intro: 'Les moments qui ont façonné la France contemporaine.' },
    { key: 'figure',      titre: 'Grandes figures françaises', intro: 'Les personnalités que le programme civique met à l\'honneur.' },
    { key: 'lieu',        titre: 'Grands lieux de France', intro: 'Monuments et sites emblématiques du patrimoine national.' },
  ] as const;

  return (
    <div style={{ minHeight: '80vh' }}>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/modules/daumier-la-republique.webp)', backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,26,112,0.92) 0%, rgba(0,35,149,0.90) 60%, rgba(204,26,26,0.88) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '64px 0 56px' }}>
        <div className="container">
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '4px 12px', borderRadius: '100px',
            background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)',
            fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em',
            marginBottom: '16px',
          }}>
            🇫🇷 {fiches.length} fiches bonus
          </span>
          <h1 style={{
            fontSize: 'clamp(26px, 5vw, 40px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '14px',
            lineHeight: 1.2,
            maxWidth: '600px',
          }}>
            Les repères de l&apos;examen civique, en fiches courtes
          </h1>
          <p style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.80)',
            maxWidth: '560px',
            lineHeight: 1.65,
          }}>
            Symboles de la République, institutions, dates clés, figures et lieux : chaque notion du programme expliquée en une fiche, avec les points à retenir pour l&apos;examen.
          </p>
        </div>
        </div>
      </div>

      {/* ── Sections par famille ─────────────────────────────────────── */}
      <div className="container" style={{ padding: '48px 24px' }}>
        {sections.map(({ key, titre, intro }) => {
          const items = fiches.filter((f) => f.category === key);
          if (items.length === 0) return null;
          return (
            <section key={key} style={{ marginBottom: '48px' }}>
              <h2 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                marginBottom: '6px',
              }}>
                {titre}
              </h2>
              <p style={{ fontSize: 14.5, color: 'var(--color-text-secondary)', marginBottom: '20px' }}>
                {intro}
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '18px',
              }}>
                {items.map((f) => <FicheCard key={f.slug} fiche={f} />)}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
