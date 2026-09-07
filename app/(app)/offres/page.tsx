import { redirect } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Check, Infinity as InfinityIcon, ShieldCheck } from 'lucide-react';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import { LifetimeOfferButton } from '@/components/app/LifetimeOfferButton';

export const metadata: Metadata = {
  title: 'Nos offres — maformationcivique.fr',
};

/**
 * Page d'abonnement de l'espace connecté.
 *
 * Toutes les offres payantes du site y figurent, chacune avec un lien réel :
 * les offres récurrentes passent par /api/stripe/start (redirection serveur
 * vers Stripe), l'accès à vie par la modale de consentement (CGU art. 4.4bis).
 * Aucun appel JavaScript intermédiaire susceptible d'échouer en silence.
 */
export default async function OffresPage() {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/connexion?redirect=/offres');

  const { data: profile } = await supabase
    .from('users')
    .select('plan, sub_end_at')
    .eq('id', user.id)
    .single();

  const plan = profile?.plan ?? 'free';
  const isLifetime = plan === 'bundle' && !profile?.sub_end_at;
  const hasPaidPlan = plan !== 'free';

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '8px 0 48px' }}>
      <h1 style={{ fontSize: 'clamp(26px, 4vw, 34px)', fontWeight: 800, marginBottom: 8 }}>
        {hasPaidPlan ? 'Votre abonnement' : 'Débloquez toute la plateforme'}
      </h1>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--color-text-secondary)', marginBottom: 28, maxWidth: 620 }}>
        {hasPaidPlan
          ? 'Vous avez déjà un accès actif. Vous pouvez le gérer depuis votre profil.'
          : "Choisissez la formule adaptée à votre démarche. Sans engagement, résiliable à tout moment."}
      </p>

      {hasPaidPlan && (
        <div style={{
          background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 'var(--radius-lg)',
          padding: '14px 18px', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <ShieldCheck size={18} color="#16A34A" />
          <p style={{ fontSize: 14, color: '#166534', margin: 0 }}>
            Accès actif : <strong>{isLifetime ? 'Accès à vie' : plan === 'bundle' ? 'Complet (Civique + Langue)' : plan === 'langue' ? 'Langue française' : 'Civique'}</strong>.{' '}
            <Link href="/profil" style={{ color: '#166534', textDecoration: 'underline' }}>Gérer mon abonnement</Link>
          </p>
        </div>
      )}

      <div className="offres-grid">
        {/* ── Accès à vie — mis en avant ─────────────────────────────── */}
        <div className="offre-card offre-featured">
          <span className="offre-tag"><InfinityIcon size={12} /> Meilleure valeur</span>
          <p className="offre-label offre-label-light">Accès à vie</p>
          <div className="offre-price-row">
            <span className="offre-price offre-price-light">20 €</span>
            <span className="offre-per offre-per-light">une seule fois</span>
          </div>
          <p className="offre-save-light">Rentabilisé en 2 mois</p>
          <ul className="offre-list offre-list-light">
            {['Tout le contenu Civique (177 questions)', 'Tout le contenu Langue (A2 · B1 · B2)', 'Examens blancs illimités, à vie', 'Mises à jour futures incluses', 'Aucun abonnement, aucun renouvellement'].map((f) => (
              <li key={f}><Check size={15} color="#6BDFB8" /> {f}</li>
            ))}
          </ul>
          {isLifetime ? (
            <p className="offre-owned">Vous possédez déjà cette offre</p>
          ) : (
            <LifetimeOfferButton
              label="Obtenir l'accès à vie — 20 €"
              style={{
                width: '100%', marginTop: 18, padding: '13px 24px', borderRadius: 100,
                background: '#fff', color: 'var(--color-blue-france)',
                border: 'none', fontSize: 15, fontWeight: 700, cursor: 'pointer',
              }}
            />
          )}
        </div>

        {/* ── Bundle mensuel ─────────────────────────────────────────── */}
        <OffreCard
          label="Complet — mensuel"
          price="10 €"
          oldPrice="20 €"
          per="/ mois"
          save="−50 % à vie sur le tarif initial"
          features={[
            'Tout le contenu Civique (177 questions)',
            'Tout le contenu Langue (A2 · B1 · B2)',
            'Examens blancs illimités',
            'IA pédagogique et suivi de progression',
            'Sans engagement — résiliable en 1 clic',
          ]}
          href="/api/stripe/start?plan=bundle"
          cta="Choisir — 10 €/mois"
          owned={plan === 'bundle' && !isLifetime}
        />

        {/* ── Civique seul ───────────────────────────────────────────── */}
        <OffreCard
          label="Civique"
          price="6 €"
          oldPrice="12 €"
          per="/ mois"
          save="−50 % à vie sur le tarif initial"
          features={[
            'Les 5 modules civiques (19 leçons)',
            '177 questions officielles',
            'Examens blancs illimités',
            'IA pédagogique',
          ]}
          href="/api/stripe/start?plan=premium"
          cta="Choisir — 6 €/mois"
          owned={plan === 'premium'}
        />

        {/* ── Langue seule ───────────────────────────────────────────── */}
        <OffreCard
          label="Langue française"
          price="6 €"
          oldPrice="12 €"
          per="/ mois"
          save="−50 % à vie sur le tarif initial"
          features={[
            'Modules A2, B1, B2 + transversal',
            '2 700 exercices progressifs',
            'Examens blancs OFII, DELF, naturalisation',
            'Préparation à l’entretien',
          ]}
          href="/api/stripe/start?plan=langue"
          cta="Choisir — 6 €/mois"
          owned={plan === 'langue'}
        />
      </div>

      <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 13, color: 'var(--color-text-muted)', marginTop: 28 }}>
        <ShieldCheck size={15} /> Paiement sécurisé par Stripe · Vos coordonnées bancaires ne transitent jamais par nos serveurs
      </p>

      <style>{`
        .offres-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          align-items: start;
        }
        .offre-card {
          position: relative;
          background: var(--color-surface);
          border: var(--border-default);
          border-radius: var(--radius-xl);
          padding: 26px;
          box-shadow: var(--shadow-card);
        }
        .offre-featured {
          background:
            linear-gradient(160deg, rgba(0,26,112,0.93) 0%, rgba(0,35,149,0.90) 60%, rgba(122,18,32,0.92) 100%),
            url(/images/modules/daumier-la-republique.webp) center 18% / cover no-repeat;
          border: none;
          box-shadow: var(--shadow-lg);
          overflow: hidden;
        }
        .offre-tag {
          display: inline-flex; align-items: center; gap: 5px;
          background: #FFB4AC; color: #6B1018;
          padding: 5px 13px; border-radius: 100px;
          font-size: 11.5px; font-weight: 800; margin-bottom: 14px;
        }
        .offre-label {
          font-size: 12px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.07em; color: var(--color-text-muted); margin-bottom: 10px;
        }
        .offre-label-light { color: rgba(255,255,255,0.65); }
        .offre-price-row { display: flex; align-items: baseline; gap: 9px; flex-wrap: wrap; }
        .offre-price { font-size: 38px; font-weight: 800; letter-spacing: -0.02em; }
        .offre-price-light { color: #fff; }
        .offre-old { font-size: 17px; text-decoration: line-through; color: var(--color-text-muted); }
        .offre-per { font-size: 14px; color: var(--color-text-muted); }
        .offre-per-light { color: rgba(255,255,255,0.65); }
        .offre-save { font-size: 12.5px; font-weight: 700; color: #1D9E75; margin-top: 6px; }
        .offre-save-light { font-size: 12.5px; font-weight: 700; color: #6BDFB8; margin-top: 6px; }
        .offre-list { list-style: none; padding: 0; margin: 18px 0 0; }
        .offre-list li {
          display: flex; align-items: flex-start; gap: 9px;
          font-size: 13.8px; line-height: 1.55; padding: 6px 0;
          color: var(--color-text-secondary);
        }
        .offre-list-light li { color: rgba(255,255,255,0.88); }
        .offre-cta {
          display: flex; align-items: center; justify-content: center;
          width: 100%; margin-top: 18px; padding: 13px 24px;
          border-radius: 100px; background: var(--gradient-primary);
          color: #fff; font-size: 15px; font-weight: 700;
          text-decoration: none;
        }
        .offre-owned {
          margin-top: 18px; padding: 12px; border-radius: 100px;
          background: rgba(255,255,255,0.14); color: #fff;
          font-size: 14px; font-weight: 600; text-align: center;
        }
        .offre-owned-dark {
          margin-top: 18px; padding: 12px; border-radius: 100px;
          background: var(--color-off-white); color: var(--color-text-muted);
          font-size: 14px; font-weight: 600; text-align: center;
        }
        @media (max-width: 820px) {
          .offres-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

function OffreCard({
  label, price, oldPrice, per, save, features, href, cta, owned,
}: {
  label: string; price: string; oldPrice?: string; per: string; save?: string;
  features: string[]; href: string; cta: string; owned?: boolean;
}) {
  return (
    <div className="offre-card">
      <p className="offre-label">{label}</p>
      <div className="offre-price-row">
        <span className="offre-price">{price}</span>
        {oldPrice && <span className="offre-old">{oldPrice}</span>}
        <span className="offre-per">{per}</span>
      </div>
      {save && <p className="offre-save">{save}</p>}
      <ul className="offre-list">
        {features.map((f) => (
          <li key={f}><Check size={15} color="#1D9E75" /> {f}</li>
        ))}
      </ul>
      {owned ? (
        <p className="offre-owned-dark">Votre offre actuelle</p>
      ) : (
        // Lien direct vers la route serveur : pas de fetch intermédiaire qui
        // pourrait échouer sans rien afficher.
        <a href={href} className="offre-cta">{cta}</a>
      )}
    </div>
  );
}
