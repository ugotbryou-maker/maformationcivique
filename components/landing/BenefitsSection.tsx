import { Brain, Clock, Trophy, Languages } from 'lucide-react';

const benefits = [
  {
    icon: Brain, color: '#FFD66B', bg: 'rgba(255,214,107,0.15)',
    title: 'IA pédagogique',
    desc: "Après chaque mauvaise réponse, l'IA vous explique la bonne réponse en 2-3 phrases simples dans votre langue.",
  },
  {
    icon: Clock, color: '#FFA07A', bg: 'rgba(255,160,122,0.15)',
    title: 'Examens blancs chronométrés',
    desc: '40 questions en 30 minutes, exactement comme le vrai examen. Score immédiat, lacunes identifiées.',
  },
  {
    icon: Trophy, color: '#90EE90', bg: 'rgba(144,238,144,0.15)',
    title: 'Gamification & progression',
    desc: 'Gagnez des XP, débloquez des badges, maintenez votre streak quotidien. Apprendre devient motivant.',
  },
  {
    icon: Languages, color: '#ADD8E6', bg: 'rgba(173,216,230,0.15)',
    title: '4 langues disponibles',
    desc: 'Français, arabe, anglais et portugais. Préparez-vous dans la langue qui vous convient le mieux.',
  },
];

export function BenefitsSection() {
  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      background: '#001A70',
      padding: '96px 0',
    }}>
      {/* Overlay dégradé bleu profond */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(0,20,90,0.88) 0%, rgba(0,30,130,0.84) 100%)',
        pointerEvents: 'none',
      }} aria-hidden="true" />
      {/* Filigrane Caillebotte — au-dessus du dégradé */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('/images/modules/Caillebotte_Rue_de_Paris.jpg')",
        backgroundSize: 'cover', backgroundPosition: 'center 40%',
        opacity: 0.32,
        mixBlendMode: 'luminosity',
        pointerEvents: 'none',
      }} aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '0 24px' }}>

        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{
            fontSize: '12px', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.1em',
            color: '#FFD66B', marginBottom: '12px',
          }}>
            Pourquoi nous choisir
          </p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Une plateforme conçue{' '}
            <span style={{ color: '#FFD66B' }}>pour réussir</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            Des outils pédagogiques pensés pour les ressortissants étrangers qui préparent leur examen en France.
          </p>
        </div>

        {/* Grille bénéfices */}
        <div className="benefits-grid">
          {benefits.map(({ icon: Icon, color, bg, title, desc }) => (
            <div
              key={title}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '28px 24px',
                backdropFilter: 'blur(8px)',
                transition: 'background 250ms, transform 250ms',
              }}
              className="benefit-card"
            >
              <div style={{
                width: 48, height: 48, background: bg,
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px',
              }}>
                <Icon size={22} color={color} />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#fff', marginBottom: '8px', lineHeight: 1.3 }}>
                {title}
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.62)', lineHeight: 1.7, margin: 0 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap', marginTop: '64px', paddingTop: '48px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          {[
            { val: '177', label: 'Questions officielles' },
            { val: '2 700+', label: 'Exercices langue' },
            { val: '80%+', label: 'Taux de réussite' },
            { val: '4', label: 'Langues disponibles' },
          ].map(({ val, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: 900, color: '#FFD66B', letterSpacing: '-0.03em', lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', marginTop: '6px' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .benefits-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .benefit-card:hover { background: rgba(255,255,255,0.1) !important; transform: translateY(-3px); }
        @media (max-width: 1024px) { .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px)  { .benefits-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
