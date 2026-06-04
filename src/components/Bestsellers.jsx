import { useState, useRef } from 'react';
import { bestsellers } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();
  const [animatingId, setAnimatingId] = useState(null);

  const handleBuyNow = (product) => {
    setAnimatingId(product.id);
    addItem(product);
    setTimeout(() => setAnimatingId(null), 600);
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          {bestsellers.map(product => {
            const isAnimating = animatingId === product.id;

            return (
              <div
                key={product.id}
                style={{
                  background: product.color,
                  borderRadius: 'var(--border-radius-xl)',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 20px 50px ${product.color}50`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Price badges */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(255,255,255,0.9)',
                  padding: '0.3rem 0.6rem',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: product.color,
                  zIndex: 2,
                }}>
                  ₹ 20/-
                </div>

                <div style={{
                  position: 'absolute',
                  top: '0.8rem',
                  right: '0.8rem',
                  background: product.badgeColor,
                  color: 'white',
                  padding: '0.5rem 0.8rem',
                  borderRadius: '10px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 900,
                  fontSize: '1.3rem',
                  zIndex: 2,
                }}>
                  ₹{product.price}
                </div>

                {/* Product image */}
                <div style={{
                  padding: '2rem',
                  paddingTop: '3rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '280px',
                }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      maxWidth: '85%',
                      maxHeight: '250px',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={e => e.target.style.transform = 'rotate(-5deg) scale(1.05)'}
                    onMouseLeave={e => e.target.style.transform = 'rotate(0) scale(1)'}
                  />
                </div>

                {/* Product info bar */}
                <div style={{
                  background: `linear-gradient(135deg, ${product.color}, ${product.color}DD)`,
                  padding: '1.2rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '2px solid rgba(255,255,255,0.15)',
                }}>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: 'white',
                      marginBottom: '0.2rem',
                    }}>
                      {product.name}
                    </h3>
                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                      {product.weight}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBuyNow(product);
                    }}
                    id={`buy-${product.id}`}
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      border: '1.5px solid rgba(255,255,255,0.5)',
                      borderRadius: '8px',
                      padding: '0.5rem 1.2rem',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      transform: isAnimating ? 'scale(1.2)' : 'scale(1)',
                      fontFamily: 'var(--font-body)',
                    }}
                    onMouseEnter={e => {
                      e.target.style.background = 'white';
                      e.target.style.color = product.color;
                    }}
                    onMouseLeave={e => {
                      e.target.style.background = 'rgba(255,255,255,0.2)';
                      e.target.style.color = 'white';
                    }}
                  >
                    {isAnimating ? '✓ Added!' : 'Buy Now'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
