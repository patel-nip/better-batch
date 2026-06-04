import { useState } from 'react';
import { recipes } from '../data/products';

export default function QuickRecipes() {
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 4;

  const goNext = () => {
    setStartIdx(prev => Math.min(prev + 1, recipes.length - visibleCount));
  };

  const goPrev = () => {
    setStartIdx(prev => Math.max(prev - 1, 0));
  };

  return (
    <section id="recipes" className="section" style={{ background: 'var(--brand-cream)' }}>
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--text-dark)' }}>
          <span style={{ color: 'var(--brand-orange)' }}>Quick</span>
          Recipes
        </h2>

        <div style={{ position: 'relative' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}>
            {recipes.map((recipe, idx) => (
              <div
                key={recipe.id}
                style={{
                  borderRadius: 'var(--border-radius-xl)',
                  overflow: 'hidden',
                  position: 'relative',
                  height: '380px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
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
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '2rem 1.5rem 1.5rem',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                }}>
                  <h3 style={{
                    color: 'white',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                  }}>
                    {recipe.title}
                  </h3>
                </div>

                {recipe.type === 'featured' && (
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'var(--brand-gold)',
                    color: 'white',
                    padding: '0.3rem 0.8rem',
                    borderRadius: 'var(--border-radius-pill)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                  }}>
                    NEW
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Nav arrow */}
          <button
            onClick={goNext}
            aria-label="Next recipes"
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              background: 'white',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.3rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              zIndex: 5,
              color: 'var(--text-dark)',
            }}
          >
            ›
          </button>
        </div>
      </div>

      {/* Floating makhana */}
      <div className="float-1" style={{
        position: 'absolute',
        bottom: '10%',
        left: '3%',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, #E8D5A0, #C4A55A)',
      }} />
    </section>
  );
}
