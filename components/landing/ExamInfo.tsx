import { AlertCircle, ClipboardList, Award, MapPin } from 'lucide-react';

const examLevels = [
  {
    code: 'CSP',
    name: 'Carte de séjour pluriannuelle',
    questions: 40,
    score: '80%',
    time: '30 min',
    color: 'var(--color-blue-sky)',
    bg: 'var(--color-blue-light)',
  },
  {
    code: 'CR',
    name: 'Carte de résident',
    questions: 40,
    score: '80%',
    time: '30 min',
    color: 'var(--color-blue-france)',
    bg: 'var(--color-blue-light)',
  },
  {
    code: 'NAT',
    name: 'Naturalisation',
    questions: 40,
    score: '80%',
    time: '30 min',
    color: 'var(--color-red-france)',
    bg: 'var(--color-red-light)',
  },
];

const steps = [
  { num: '01', icon: MapPin, title: 'Convocation', desc: "Vous recevez une convocation de la préfecture ou de l'OFII." },
  { num: '02', icon: ClipboardList, title: 'Formation civique', desc: 'Journée de formation sur les valeurs et institutions françaises.' },
  { num: '03', icon: Award, title: "Test de connaissance", desc: '40 questions QCM en 30 minutes. Score minimum requis : 80%.' },
  { num: '04', icon: AlertCircle, title: 'Résultat', desc: 'Le résultat est transmis à la préfecture pour votre dossier de titre de séjour ou de naturalisation.' },
];

export function ExamInfo() {
  return (
    <section id="examen-info" style={{ padding: '96px 0', background: 'linear-gradient(rgba(255,255,255,0.94), rgba(255,255,255,0.94)), url("/images/modules/visa-france.jpg") right center/440px auto no-repeat, var(--color-surface)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <span
            style={{
              fontSize: 'var(--font-size-xs)',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-red-france)',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            L'examen civique
          </span>
          <h2 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)', marginBottom: '12px' }}>
            Tout savoir sur la formation civique
          </h2>
          <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', maxWidth: '520px' }}>
            Obligatoire depuis janvier 2026 pour tous les ressortissants étrangers souhaitant renouveler ou obtenir un titre de séjour, ou demander la naturalisation.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* Niveaux d'examen */}
          <div>
            <h3 style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-primary)', marginBottom: '24px' }}>
              Les 3 niveaux d'examen
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {examLevels.map((level) => (
                <div
                  key={level.code}
                  style={{
                    padding: '16px 20px',
                    borderRadius: 'var(--radius-lg)',
                    background: level.bg,
                    border: `1px solid ${level.color}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span
                        style={{
                          fontSize: 'var(--font-size-xs)',
                          fontWeight: 500,
                          padding: '2px 8px',
                          borderRadius: 'var(--radius-pill)',
                          background: level.color,
                          color: '#FFFFFF',
                        }}
                      >
                        {level.code}
                      </span>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                      {level.name}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text-primary)' }}>
                      {level.questions} Q · {level.time}
                    </p>
                    <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                      Score requis : {level.score}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Étapes */}
          <div>
            <h3 style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-primary)', marginBottom: '24px' }}>
              Comment ça se passe ?
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {steps.map(({ num, icon: Icon, title, desc }, i) => (
                <div
                  key={num}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    paddingBottom: i < steps.length - 1 ? '24px' : 0,
                    position: 'relative',
                  }}
                >
                  {/* Line */}
                  {i < steps.length - 1 && (
                    <div
                      style={{
                        position: 'absolute',
                        left: '19px',
                        top: '40px',
                        bottom: 0,
                        width: '1px',
                        background: 'var(--color-border)',
                      }}
                    />
                  )}
                  {/* Icon */}
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--color-blue-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color="var(--color-blue-france)" />
                  </div>
                  <div>
                    <p style={{ fontSize: 'var(--font-size-base)', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '4px' }}>
                      {title}
                    </p>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                      {desc}
                    </p>
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
