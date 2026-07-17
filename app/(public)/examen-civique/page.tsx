/**
 * Index des pages locales — /examen-civique
 * Liste UNIQUEMENT les départements publiés (maillage + découverte).
 */

import { MapPin } from 'lucide-react';
import type { Metadata } from 'next';
import { departementsPublies, centreValide } from '@/data/departements';
import { ARTICLE_PILIER_URL, SITE_URL } from '@/lib/reglementation';

export const metadata: Metadata = {
  title: 'Examen civique : centres par département | maformationcivique.fr',
  description:
    "Où passer l'examen civique près de chez vous : centres agréés par département, adresses vérifiées, liens d'inscription officiels et préparation en ligne.",
  alternates: { canonical: `${SITE_URL}/examen-civique` },
  openGraph: {
    title: 'Examen civique : centres par département',
    description:
      "Centres agréés par département, adresses vérifiées et liens d'inscription officiels.",
    url: `${SITE_URL}/examen-civique`,
    locale: 'fr_FR',
  },
};

export default function ExamenCiviqueIndexPage() {
  // Groupement par région pour la lisibilité
  const parRegion = new Map<string, typeof departementsPublies>();
  for (const d of departementsPublies) {
    if (!parRegion.has(d.region)) parRegion.set(d.region, []);
    parRegion.get(d.region)!.push(d);
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Examen civique', item: `${SITE_URL}/examen-civique` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 72px' }}>
        <h1 style={{ fontSize: 'clamp(26px, 4.5vw, 38px)', fontWeight: 800, lineHeight: 1.2, color: 'var(--color-text-primary)', marginBottom: 18 }}>
          Où passer l&apos;examen civique ? Centres par département
        </h1>

        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--color-text-secondary)', marginBottom: 12 }}>
          Chaque fiche départementale liste les <strong>centres d&apos;examen agréés</strong> (adresses
          et liens de réservation officiels, vérifiés à la date indiquée), les spécificités
          publiées par la préfecture, et la marche à suivre pour s&apos;inscrire.
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--color-text-muted)', marginBottom: 36 }}>
          Pour le format de l&apos;épreuve et les niveaux exigés selon votre démarche, consultez{' '}
          <a href={ARTICLE_PILIER_URL} style={{ color: 'var(--color-blue-france)' }}>
            le guide complet de l&apos;examen civique 2026
          </a>
          , ou testez-vous directement avec{' '}
          <a href={`${SITE_URL}/examen`} style={{ color: 'var(--color-blue-france)' }}>
            un examen blanc gratuit
          </a>.
        </p>

        {departementsPublies.length === 0 ? (
          <div style={{
            background: 'var(--color-off-white)', border: '1.5px dashed var(--color-border)',
            borderRadius: 'var(--radius-xl)', padding: '40px 24px', textAlign: 'center',
          }}>
            <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', margin: 0 }}>
              Les premières fiches départementales sont en cours de vérification et seront
              publiées prochainement. En attendant, préparez l&apos;épreuve avec{' '}
              <a href={`${SITE_URL}/examen`} style={{ color: 'var(--color-blue-france)' }}>
                les examens blancs
              </a>.
            </p>
          </div>
        ) : (
          [...parRegion.entries()].sort(([a], [b]) => a.localeCompare(b, 'fr')).map(([region, deps]) => (
            <section key={region} style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 14 }}>
                {region}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
                {deps.sort((a, b) => a.code.localeCompare(b.code)).map((d) => {
                  const nb = d.centresExamen.filter(centreValide).length;
                  return (
                    <a
                      key={d.slug}
                      href={`${SITE_URL}/examen-civique/${d.slug}`}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 10,
                        background: 'var(--color-surface)', border: 'var(--border-default)',
                        borderRadius: 'var(--radius-lg)', padding: '14px 18px',
                        textDecoration: 'none',
                      }}
                    >
                      <MapPin size={16} color="var(--color-blue-france)" style={{ flexShrink: 0 }} />
                      <span style={{ flex: 1 }}>
                        <span style={{ display: 'block', fontSize: 14.5, fontWeight: 600, color: 'var(--color-text-primary)' }}>
                          {d.nom} ({d.code})
                        </span>
                        <span style={{ display: 'block', fontSize: 12, color: 'var(--color-text-muted)' }}>
                          {nb > 0 ? `${nb} centre${nb > 1 ? 's' : ''} agréé${nb > 1 ? 's' : ''}` : 'centres voisins'}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </section>
          ))
        )}
      </div>
    </main>
  );
}
