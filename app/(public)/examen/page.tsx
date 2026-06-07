export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { Shield, Star, Award, ArrowRight, Clock, CheckCircle, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Examens blancs — maformationcivique.fr',
  description: 'Préparez votre examen civique avec des examens blancs adaptés à votre démarche : carte de séjour pluriannuelle, carte de résident ou naturalisation.',
};

const LEVELS = [
  {
    level: 'CSP',
    label: 'Carte de séjour pluriannuelle',
    shortLabel: 'Séjour longue durée',
    desc: 'Vous demandez un renouvellement de titre ou une CSP. Les questions portent sur les définitions fondamentales, les symboles et les institutions.',
    questions: '40 questions',
    duration: '30 min',
    score: '80%',
    difficulty: 'Niveau 1 — Fondamentaux',
    gradient: 'linear-gradient(135deg, #001A70 0%, #002395 100%)',
    bg: '#E6EEF9',
    color: '#002395',
    borderColor: '#B8D0F0',
    Icon: Shield,
    themes: ['Symboles de la République', 'Laïcité & valeurs', 'Institutions de base', 'Droits fondamentaux', 'Vie quotidienne'],
  },
  {
    level: 'CR',
    label: 'Carte de résident',
    shortLabel: 'Résidence longue durée',
    desc: 'Vous demandez une carte de résident (10 ans). Les questions testent votre compréhension des mécanismes institutionnels et l\'application des principes.',
    questions: '40 questions',
    duration: '30 min',
    score: '80%',
    difficulty: 'Niveau 2 — Application',
    gradient: 'linear-gradient(135deg, #002395 0%, #0057A8 100%)',
    bg: '#EFF6FF',
    color: '#0057A8',
    borderColor: '#BAD1F5',
    Icon: Star,
    themes: ['État de droit & séparation des pouvoirs', 'Droits & libertés avancés', 'Organisation de la République', 'Histoire contemporaine', 'Union européenne'],
  },
  {
    level: 'NAT',
    label: 'Naturalisation',
    shortLabel: 'Acquisition de la nationalité',
    desc: 'Vous demandez la naturalisation française. Les questions sont les plus exigeantes : culture générale, histoire fine, géographie et patrimoine.',
    questions: '40 questions',
    duration: '30 min',
    score: '80%',
    difficulty: 'Niveau 3 — Culture approfondie',
    gradient: 'linear-gradient(135deg, #9F1239 0%, #CC1A1A 100%)',
    bg: '#FEF2F2',
    color: '#CC1A1A',
    borderColor: '#FECACA',
    Icon: Award,
    themes: ['Histoire de France depuis 1789', 'Géographie & démographie', 'Culture, arts & patrimoine', 'France dans le monde', 'Valeurs & engagement républicain'],
  },
];

export default function ExamenIndexPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-off-white)' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #001A70 0%, #002395 50%, #8B1A2B 100%)',
        padding: '4rem 1.5rem 3rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.12)', borderRadius: 100,
            padding: '6px 16px', marginBottom: '1.5rem',
            fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.85)',
            letterSpacing: '.06em', textTransform: 'uppercase',
          }}>
            <CheckCircle size={13} /> Questions officielles du ministère de l'Intérieur
          </div>

          <h1 style={{ fontSize: 36, fontWeight: 900, color: '#fff', margin: '0 0 1rem', lineHeight: 1.2 }}>
            Quel titre préparez-vous ?
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', margin: 0, lineHeight: 1.7 }}>
            Choisissez votre démarche pour un examen blanc personnalisé.
            40 questions · 30 minutes · Score requis 80%
          </p>
        </div>
      </div>

      {/* Cards */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '2.5rem 1.5rem 4rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {LEVELS.map(({ level, label, shortLabel, desc, difficulty, gradient, bg, color, borderColor, Icon, themes, questions, duration, score }) => (
            <Link key={level} href={`/examen/${level}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#fff',
                borderRadius: 20,
                border: `1.5px solid ${borderColor}`,
                overflow: 'hidden',
                transition: 'box-shadow 200ms ease-out, transform 200ms ease-out',
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(0,0,35,0.12)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Header coloré */}
                <div style={{ background: gradient, padding: '1.5rem 1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: '50%',
                      background: 'rgba(255,255,255,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={24} color="#fff" />
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', marginBottom: 3 }}>
                        {difficulty}
                      </div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: '#fff' }}>{label}</div>
                    </div>
                  </div>

                  {/* Méta */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    {[
                      { icon: BookOpen, val: questions },
                      { icon: Clock, val: duration },
                      { icon: CheckCircle, val: score },
                    ].map(({ icon: I, val }) => (
                      <div key={val} style={{ textAlign: 'center', color: 'rgba(255,255,255,0.85)' }}>
                        <I size={13} style={{ display: 'block', margin: '0 auto 2px' }} />
                        <span style={{ fontSize: 12, fontWeight: 700 }}>{val}</span>
                      </div>
                    ))}
                    <div style={{
                      width: 32, height: 32, borderRadius: '50%',
                      background: 'rgba(255,255,255,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginLeft: 8,
                    }}>
                      <ArrowRight size={16} color="#fff" />
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '1.25rem 1.75rem 1.5rem' }}>
                  <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.7, margin: '0 0 1rem' }}>{desc}</p>

                  {/* Thèmes */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {themes.map((t) => (
                      <span key={t} style={{
                        fontSize: 12, fontWeight: 500,
                        background: bg, color,
                        padding: '3px 10px', borderRadius: 100,
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Note bas de page */}
        <p style={{ textAlign: 'center', fontSize: 13, color: '#94A3B8', marginTop: '2rem', lineHeight: 1.6 }}>
          Les questions sont issues des listes officielles publiées par le{' '}
          <a
            href="https://www.formation-civique.interieur.gouv.fr"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0057A8' }}
          >
            ministère de l'Intérieur
          </a>.
          <br />Tous les niveaux couvrent les 5 thèmes du programme officiel.
        </p>
      </div>
    </div>
  );
}
