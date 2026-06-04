import { useState } from 'react';
import { bestsellers } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();
  const [animatingId, setAnimatingId] = useState(null);

  const handleBuyNow = (product) => {
    setAnimatingId(product.id);
    addItem(product);
    setTimeout(() => setAnimatingId(null), 800);
  };

  return (
    <section id="bestsellers" className="section" style={{ background: 'var(--brand-cream)' }}>
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--text-dark)', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          <span style={{ color: 'var(--brand-orange)', fontWeight: 400 }}>Our</span>
          Bestsellers
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {bestsellers.map(product => {
            const isAnimating = animatingId === product.id;

            return (
              <div
                key={product.id}
                style={{
                  position: 'relative',
                  borderRadius: 'var(--border-radius-xl)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s ease',
                  aspectRatio: '0.8', // Matches the 1375x1716 or 1449x1716 ratio (0.80 - 0.84)
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 20px 45px rgba(0,0,0,0.18)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Pre-rendered Card Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />

                {/* Interactive Transparent overlay button covering 'Buy Now' */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBuyNow(product);
                  }}
                  id={`buy-${product.id}`}
                  style={{
                    position: 'absolute',
                    bottom: '8.4%',
                    right: '6.4%',
                    width: '33%',
                    height: '7.8%',
                    borderRadius: '100px',
                    border: 'none',
                    background: isAnimating ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                    color: isAnimating ? 'var(--text-dark)' : 'transparent',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    boxShadow: isAnimating ? '0 5px 15px rgba(0,0,0,0.2)' : 'none',
                  }}
                  onMouseEnter={e => {
                    if (!isAnimating) {
                      e.target.style.background = 'rgba(255, 255, 255, 0.22)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isAnimating) {
                      e.target.style.background = 'transparent';
                    }
                  }}
                >
                  {isAnimating ? '✓ Added!' : ''}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
