import { recipes } from '../data/products';

export default function QuickRecipes() {
  return (
    <section id="recipes" className="section" style={{ background: 'var(--brand-cream)', position: 'relative' }}>
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--text-dark)' }}>
          <span style={{ color: 'var(--brand-orange)' }}>Quick</span>
          Recipes
        </h2>

        <div style={{ position: 'relative' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
            maxWidth: '1100px',
            margin: '0 auto',
          }}>
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                style={{
                  borderRadius: 'var(--border-radius-xl)',
                  overflow: 'hidden',
                  position: 'relative',
                  aspectRatio: '0.69', // Matches the 597x867 ratio of the recipe rectangles
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    mixBlendMode: 'multiply', // Blends white margins with page background
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating makhana asset */}
      <img
        src="/images/makhanas.png"
        alt="floating makhana"
        className="float-3"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '3%',
          width: '60px',
          height: 'auto',
          pointerEvents: 'none',
          filter: 'drop-shadow(0 8px 15px rgba(0,0,0,0.1))',
        }}
      />
    </section>
  );
}
