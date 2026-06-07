'use client';

import { Brain, Trophy, Languages, BookOpen, Timer, Shield } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: '177 questions officielles',
    desc: "Toutes les questions de la banque officielle, organisées par thème et niveau d'examen (CSP, CR, NAT).",
    color: 'var(--color-blue-france)',
    bg: 'var(--color-blue-light)',
  },
  {
    icon: Brain,
    title: 'IA pédagogique',
    desc: "Après chaque mauvaise réponse, l'IA vous explique pourquoi la bonne réponse est correcte, en 2-3 phrases simples.",
    color: 'var(--color-red-france)',
    bg: 'var(--color-red-light)',
  },
  {
    icon: Timer,
    title: 'Examens blancs chronométrés',
    desc: '40 questions en 30 minutes comme le vrai examen. Obtenez votre score immédiat et identifiez vos lacunes.',
    color: '#7C3AED',
    bg: '#F3F0FF',
  },
  {
    icon: Trophy,
    title: 'Gamification & XP',
    desc: 'Gagnez des XP, débloquez des badges, maintenez votre streak quotidien. La préparation devient motivante.',
    color: '#D97706',
    bg: '#FFFBEB',
  },
  {
    icon: Languages,
    title: '4 langues disponibles',
    desc: 'Interface et explications en français, arabe, anglais ou portugais — pour vous préparer dans votre langue.',
    color: '#059669',
    bg: '#ECFDF5',
  },
  {
    icon: Shield,
    title: 'Contenu à jour',
    desc: "Questions vérifiées et mises à jour régulièrement selon le programme officiel de l'OFPRA et du Ministère de l'Intérieur.",
    color: 'var(--color-blue-sky)',
    bg: 'var(--color-blue-light)',
  },
];

export function Features() {
  return (
    <section style={{ padding: '96px 0', background: 'var(--color-surface)' }}>
      <div className="container">
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
            Fonctionnalités
          </span>
          <h2 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)', marginBottom: '12px' }}>
            Tout ce qu'il faut pour réussir
          </h2>
          <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', maxWidth: '440px', margin: '0 auto' }}>
            Une plateforme pensée pour les apprenants, pas pour les éditeurs.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {features.map(({ icon: Icon, title, desc, color, bg }) => (
            <div
              key={title}
              style={{
                padding: '28px',
                borderRadius: 'var(--radius-lg)',
                border: 'var(--border-default)',
                background: 'var(--color-surface)',
                boxShadow: 'var(--shadow-card)',
                transition: 'all 250ms ease-out',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-card)';
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  background: bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <Icon size={20} color={color} />
              </div>
              <h3 style={{ fontSize: 'var(--font-size-base)', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '8px' }}>
                {title}
              </h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
