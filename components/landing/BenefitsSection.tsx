import { Brain, Clock, Trophy, Languages } from 'lucide-react';
import { GuillemetDecor } from '@/components/ui/BrandIcon';

const benefits = [
  {
    icon: Brain, color: 'var(--color-blue-france)', bg: 'var(--color-blue-light)',
    title: 'IA pédagogique',
    desc: "Après chaque mauvaise réponse, l'IA vous explique la bonne réponse en 2-3 phrases simples dans votre langue.",
  },
  {
    icon: Clock, color: '#EA580C', bg: '#FFF7ED',
    title: 'Examens blancs chronométrés',
    desc: '40 questions en 30 minutes, exactement comme le vrai examen. Score immédiat, lacunes identifiées.',
  },
  {
    icon: Trophy, color: '#16A34A', bg: '#F0FDF4',
    title: 'Gamification & progression',
    desc: 'Gagnez des XP, débloquez des badges, maintenez votre streak quotidien. Apprendre devient motivant.',
  },
  {
    icon: Languages, color: '#7C3AED', bg: '#F5F3FF',
    title: '4 langues disponibles',
    desc: 'Français, arabe, anglais et portugais. Préparez-vous dans la langue qui vous convient le mieux.',
  },
];

export function BenefitsSection() {
  return (
    <section style={{ background: '#fff', padding: '80px 0' }}>
      <div className="container" style={{ padding: '0 24px' }}>
        <div className="benefits-grid" style={{ display: 'grid', gap: '64px', alignItems: 'center' }}>

          {/* Gauche : collage photos */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Cercle principal */}
            <div style={{
              width: '320px', height: '320px', borderRadius: '50%',
              overflow: 'hidden', background: 'var(--color-blue-light)',
              flexShrink: 0,
            }}>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                alt="Étudiants en formation civique"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Petit cercle haut-droite */}
            <div style={{
              position: 'absolute', top: '-10px', right: '24px',
              width: '108px', height: '108px', borderRadius: '50%',
              overflow: 'hidden', border: '4px solid #fff',
              boxShadow: 'var(--shadow-card)',
            }}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
                alt="Étudiant"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Petit cercle bas-gauche */}
            <div style={{
              position: 'absolute', bottom: '0', left: '16px',
              width: '88px', height: '88px', borderRadius: '50%',
              overflow: 'hidden', border: '4px solid #fff',
              boxShadow: 'var(--shadow-card)',
            }}>
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
                alt="Étudiante"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Badge note */}
            <div style={{
              position: 'absolute', bottom: '24px', right: '8px',
              background: '#fff', borderRadius: 'var(--radius-lg)',
              padding: '10px 14px', boxShadow: 'var(--shadow-lg)',
              textAlign: 'center', minWidth: '108px',
            }}>
              <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-blue-france)', lineHeight: 1 }}>4.8/5</div>
              <div style={{ fontSize: '10px', color: 'var(--color-text-muted)', marginTop: '2px' }}>Note moyenne</div>
              <div style={{ display: 'flex', gap: '2px', justifyContent: 'center', marginTop: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#F59E0B', fontSize: '11px' }}>★</span>
                ))}
              </div>
            </div>
          </div>

          {/* Droite : liste des bénéfices */}
          <div style={{ position: 'relative' }}>
            {/* Guillemet décoratif en filigrane */}
            <GuillemetDecor side="left" size={160} color="#002395" opacity={0.05} style={{ position: 'absolute', top: '-40px', left: '-20px', pointerEvents: 'none' }} />
            <p style={{
              fontSize: 'var(--font-size-xs)', fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '0.08em',
              color: 'var(--color-blue-france)', marginBottom: '10px', position: 'relative',
            }}>
              Pourquoi nous choisir
            </p>
            <h2 style={{
              fontSize: 'var(--font-size-xl)', fontWeight: 700,
              color: 'var(--color-text-primary)', marginBottom: '12px', lineHeight: 1.2, position: 'relative',
            }}>
              Les avantages de notre{' '}
              <span style={{ color: 'var(--color-blue-france)' }}>formation en ligne</span>
            </h2>
            <p style={{
              fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)',
              marginBottom: '36px', lineHeight: 1.65, maxWidth: '420px',
            }}>
              Une plateforme conçue spécifiquement pour la formation civique française, avec des outils pédagogiques adaptés à chaque profil.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
              {benefits.map(({ icon: Icon, color, bg, title, desc }) => (
                <div key={title} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{
                    width: 46, height: 46, background: bg,
                    borderRadius: 'var(--radius-md)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={21} color={color} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 'var(--font-size-base)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '4px' }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .benefits-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 900px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
          .benefits-grid > div:first-child { display: none !important; }
        }
      ` }} />
    </section>
  );
}
