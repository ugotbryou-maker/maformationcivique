'use client';

import Link from 'next/link';
import { Check, Zap } from 'lucide-react';

const freePlan = {
  name: 'Gratuit',
  price: '0€',
  period: '',
  desc: 'Pour commencer votre préparation',
  features: [
    'Module 1 complet (5 leçons)',
    "20 questions d'entraînement",
    '1 examen blanc partiel',
    'Suivi de progression basique',
  ],
  missing: [
    'Modules 2 à 5',
    '157 questions supplémentaires',
    'Examens blancs illimités',
    'IA pédagogique',
    'Toutes les langues',
  ],
  cta: 'Commencer gratuitement',
  href: '/inscription',
  highlight: false,
  badge: null as string | null,
};

const premiumPlan = {
  name: 'Civique',
  price: '12€',
  period: '/ mois',
  desc: 'Accès complet à la préparation civique',
  features: [
    'Les 5 modules complets (19 leçons)',
    '177 questions officielles',
    'Examens blancs illimités 40Q',
    'IA pédagogique (explication après erreur)',
    'Tableau de bord progression + XP',
    'Badges & streak quotidien',
    'Interface en 4 langues (FR/AR/EN/PT)',
    'Accès depuis tous vos appareils',
  ],
  missing: [],
  cta: 'Commencer Premium',
  href: '/inscription?plan=premium',
  highlight: false,
  badge: null as string | null,
};

const languePlan = {
  name: 'Langue',
  price: '12€',
  period: '/ mois',
  desc: 'Français A2, B1, B2 pour vos démarches',
  features: [
    'Modules A2, B1, B2 + transversal',
    'Leçons dialogues + points linguistiques',
    'Exercices QCM par leçon',
    'Examens blancs OFII, DELF, naturalisation',
    'Tableau de bord & progression',
    'Adapté aux démarches préfecture',
  ],
  missing: [],
  cta: 'Accès Langue',
  href: '/inscription?plan=langue',
  highlight: false,
  badge: 'Nouveau' as string | null,
};

const bundlePlan = {
  name: 'Bundle',
  price: '20€',
  period: '/ mois',
  desc: 'Civique + Langue — tout inclus',
  features: [
    'Tout le contenu Civique (5 modules)',
    'Tout le contenu Langue (A2 · B1 · B2)',
    'Examens blancs civique + linguistique',
    'IA pédagogique',
    'Tableau de bord unifié',
    'Meilleur rapport qualité-prix',
  ],
  missing: [],
  cta: 'Commencer Bundle',
  href: '/inscription?plan=bundle',
  highlight: true,
  badge: 'Recommandé' as string | null,
};

export function Pricing() {
  return (
    <section id="tarifs" style={{ padding: '96px 0', background: 'var(--color-off-white)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span
            style={{
              fontSize: 'var(--font-size-xs)',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-blue-france)',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            Tarifs
          </span>
          <h2 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)', marginBottom: '12px' }}>
            Simple et transparent
          </h2>
          <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)' }}>
            Commencez gratuitement. Choisissez le module adapté à votre démarche.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
          className="pricing-grid"
        >
          <PricingCard plan={freePlan} />
          <PricingCard plan={premiumPlan} />
          <PricingCard plan={languePlan} />
          <PricingCard plan={bundlePlan} />
        </div>
        <style>{`
          @media (max-width: 900px) {
            .pricing-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 560px) {
            .pricing-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

        {/* Note garantie */}
        <div style={{ textAlign: 'center', marginTop: '32px', display: 'flex', justifyContent: 'center' }}>
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Zap size={13} style={{ color: 'var(--color-blue-france)', flexShrink: 0 }} />
            Sans engagement · Annulation à tout moment · Paiement sécurisé
          </span>
        </div>

        {/* B2B mention */}
        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
          {"Vous gérez un cabinet d'avocats ou un service d'intégration ? "}
          <Link href="/partenaires" style={{ color: 'var(--color-blue-france)', textDecoration: 'underline' }}>
            Découvrir l'offre partenaire →
          </Link>
        </p>
      </div>
    </section>
  );
}

type Plan = typeof freePlan | typeof premiumPlan | typeof languePlan | typeof bundlePlan;

function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      style={{
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        background: plan.highlight ? 'var(--color-blue-night)' : 'var(--color-surface)',
        border: plan.highlight ? 'none' : 'var(--border-default)',
        boxShadow: plan.highlight ? 'var(--shadow-lg)' : 'var(--shadow-card)',
        position: 'relative',
      }}
    >
      {plan.highlight && (
        <div style={{ height: '3px', background: 'var(--gradient-tricolor)' }} />
      )}
      {plan.badge && (
        <div
          style={{
            position: 'absolute',
            top: plan.highlight ? '20px' : '16px',
            right: '20px',
            padding: '4px 12px',
            borderRadius: 'var(--radius-pill)',
            background: plan.highlight ? 'rgba(239,65,53,0.2)' : 'rgba(109,40,217,0.12)',
            border: plan.highlight ? '0.5px solid rgba(239,65,53,0.4)' : '0.5px solid rgba(109,40,217,0.3)',
            fontSize: 'var(--font-size-xs)',
            color: plan.highlight ? '#FF8B84' : '#7C3AED',
            fontWeight: 500,
          }}
        >
          {plan.badge}
        </div>
      )}

      <div style={{ padding: '32px' }}>
        {/* Header */}
        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            fontWeight: 500,
            color: plan.highlight ? 'rgba(255,255,255,0.6)' : 'var(--color-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '8px',
          }}
        >
          {plan.name}
        </p>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '4px' }}>
          <span
            style={{
              fontSize: '40px',
              fontWeight: 500,
              lineHeight: 1,
              color: plan.highlight ? '#FFFFFF' : 'var(--color-text-primary)',
            }}
          >
            {plan.price}
          </span>
          {plan.period && (
            <span style={{ fontSize: 'var(--font-size-sm)', color: plan.highlight ? 'rgba(255,255,255,0.5)' : 'var(--color-text-muted)' }}>
              {plan.period}
            </span>
          )}
        </div>

        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            color: plan.highlight ? 'rgba(255,255,255,0.6)' : 'var(--color-text-secondary)',
            marginBottom: '28px',
          }}
        >
          {plan.desc}
        </p>

        {/* CTA */}
        <Link href={plan.href} style={{ display: 'block' }}>
          <button
            style={{
              width: '100%',
              padding: '13px 24px',
              borderRadius: 'var(--radius-pill)',
              background: plan.highlight ? '#FFFFFF' : 'var(--gradient-primary)',
              color: plan.highlight ? 'var(--color-blue-night)' : '#FFFFFF',
              border: 'none',
              fontSize: 'var(--font-size-base)',
              fontWeight: 500,
              cursor: 'pointer',
              minHeight: '48px',
              transition: 'all 200ms ease-out',
              fontFamily: 'var(--font-sans)',
            }}
          >
            {plan.cta}
          </button>
        </Link>

        {/* Features */}
        <ul style={{ listStyle: 'none', marginTop: '28px' }}>
          {plan.features.map((f) => (
            <li
              key={f}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                padding: '6px 0',
                fontSize: 'var(--font-size-sm)',
                color: plan.highlight ? 'rgba(255,255,255,0.85)' : 'var(--color-text-secondary)',
              }}
            >
              <Check size={15} color={plan.highlight ? '#6BDFB8' : '#1D9E75'} style={{ flexShrink: 0, marginTop: '2px' }} />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
