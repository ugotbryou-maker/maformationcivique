import { AlertCircle, ClipboardList, Award, MapPin } from 'lucide-react';

const examLevels = [
  { code: 'CSP', name: 'Carte de séjour pluriannuelle', questions: 40, score: '80%', time: '30 min' },
  { code: 'CR',  name: 'Carte de résident',             questions: 40, score: '80%', time: '30 min' },
  { code: 'NAT', name: 'Naturalisation',                 questions: 40, score: '80%', time: '30 min' },
];

const steps = [
  { num: '01', icon: MapPin,         title: 'Convocation',          desc: "Vous recevez une convocation de la préfecture ou de l'OFII." },
  { num: '02', icon: ClipboardList,  title: 'Formation civique',    desc: 'Journée de formation sur les valeurs et institutions françaises.' },
  { num: '03', icon: Award,          title: 'Test de connaissance', desc: '40 questions QCM en 30 minutes. Score minimum requis : 80%.' },
  { num: '04', icon: AlertCircle,    title: 'Résultat',             desc: 'Le résultat est transmis à la préfecture pour votre dossier.' },
];

export function ExamInfo() {
  return (
    <section id="examen-info" style={{ position: 'relative', overflow: 'hidden', padding: '96px 0' }}>
      {/* Fond rouge foncé */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #6B0000 0%, #8F1020 50%, #A91A1A 100%)',
        pointerEvents: 'none',
      }} aria-hidden="true" />
      {/* Filigrane Delacroix — au-dessus du dégradé */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('/images/hero/delacroix-watermark.jpg')",
        backgroundSize: 'cover', backgroundPosition: 'center 30%',
        opacity: 0.28,
        mixBlendMode: 'luminosity',
        pointerEvents: 'none',
      }} aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '0 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <span style={{
            fontSize: '12px', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.1em',
            color: '#FFD66B', display: 'block', marginBottom: '12px',
          }}>
            L'examen civique
          </span>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: '#fff', marginBottom: '14px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Tout savoir sur l'examen civique
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.70)', maxWidth: '520px', lineHeight: 1.7, margin: 0 }}>
            Obligatoire depuis janvier 2026 pour tous les ressortissants étrangers souhaitant renouveler ou obtenir un titre de séjour, ou demander la naturalisation.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>
          {/* Niveaux d'examen */}
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>
              Les 3 niveaux d'examen
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {examLevels.map((level) => (
                <div key={level.code} style={{
                  padding: '16px 20px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.10)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(6px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px',
                }}>
                  <div>
                    <span style={{
                      fontSize: '11px', fontWeight: 700, padding: '3px 10px',
                      borderRadius: '100px', background: 'rgba(255,255,255,0.9)',
                      color: '#9F1239', display: 'inline-block', marginBottom: '6px',
                    }}>
                      {level.code}
                    </span>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.80)', margin: 0 }}>{level.name}</p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#FFD66B', margin: '0 0 2px' }}>
                      {level.questions} Q · {level.time}
                    </p>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', margin: 0 }}>
                      Score requis : {level.score}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Étapes */}
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>
              Comment ça se passe ?
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {steps.map(({ num, icon: Icon, title, desc }, i) => (
                <div key={num} style={{ display: 'flex', gap: '16px', paddingBottom: i < steps.length - 1 ? '24px' : 0, position: 'relative' }}>
                  {i < steps.length - 1 && (
                    <div style={{ position: 'absolute', left: '19px', top: '40px', bottom: 0, width: '1px', background: 'rgba(255,255,255,0.2)' }} />
                  )}
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '12px',
                    background: 'rgba(255,255,255,0.15)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={18} color="#FFD66B" />
                  </div>
                  <div>
                    <p style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>{title}</p>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.62)', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
