const testimonials = [
  {
    name: 'Fatima El Amrani',
    role: 'Carte de séjour pluriannuelle — obtenue',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    rating: 5,
    text: "Grâce à cette plateforme, j'ai pu me préparer en arabe et en français. J'ai obtenu 87 % à mon examen civique du premier coup. Les explications de l'IA après chaque mauvaise réponse sont vraiment utiles.",
  },
  {
    name: 'Emre Yilmaz',
    role: 'Naturalisation française — accord préfectoral',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    rating: 5,
    text: "Les examens blancs m'ont permis de gérer le stress du chronomètre. La progression gamifiée avec les badges m'a motivé à travailler chaque jour. Je recommande vivement à ceux qui préparent la naturalisation.",
  },
  {
    name: 'Maria Santos',
    role: 'Carte résident — titre obtenu',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    rating: 5,
    text: "En tant que Portugaise, j'ai utilisé la version en portugais pour comprendre les nuances. Le module sur les institutions françaises était particulièrement bien expliqué. Plateforme indispensable.",
  },
];

export function Testimonials() {
  return (
    <section style={{ background: 'var(--color-off-white)', padding: '80px 0' }}>
      <div className="container" style={{ padding: '0 24px' }}>

        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{
            fontSize: 'var(--font-size-xs)', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.08em',
            color: 'var(--color-blue-france)', marginBottom: '10px',
          }}>
            Témoignages
          </p>
          <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '10px' }}>
            Ce que disent nos utilisateurs
          </h2>
          <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', maxWidth: '440px', margin: '0 auto' }}>
            Des milliers de personnes ont réussi leur examen civique grâce à notre plateforme.
          </p>
        </div>

        {/* Cartes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {testimonials.map(({ name, role, avatar, rating, text }) => (
            <div
              key={name}
              style={{
                background: '#fff', borderRadius: 'var(--radius-lg)',
                padding: '28px', border: 'var(--border-default)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {/* Étoiles */}
              <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                {[...Array(rating)].map((_, i) => (
                  <span key={i} style={{ color: '#F59E0B', fontSize: '15px' }}>★</span>
                ))}
              </div>

              {/* Texte */}
              <p style={{
                fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)',
                lineHeight: 1.7, marginBottom: '20px',
              }}>
                &ldquo;{text}&rdquo;
              </p>

              {/* Auteur */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img
                  src={avatar}
                  alt={name}
                  style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                />
                <div>
                  <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                    {name}
                  </div>
                  <div style={{ fontSize: '11px', color: '#16A34A', fontWeight: 500 }}>{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
