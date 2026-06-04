import { useState } from 'react';
import { bestsellers } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();
  const [animatingId, setAnimatingId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

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
            const isHovered = hoveredId === product.id;

            return (
              <div
                key={product.id}
                className="bestseller-card"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  /* Smooth Y-axis translation on hover */
                  transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                  transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  backgroundColor: 'transparent',
                }}
              >
                {/* Layer 1: Card frame (always visible) */}
                <img
                  src={product.cardImage}
                  alt={`${product.name} card`}
                  style={{
                    width: '100%',
                    display: 'block',
                    filter: isHovered
                      ? 'drop-shadow(0 20px 35px rgba(0,0,0,0.18))'
                      : 'drop-shadow(0 4px 12px rgba(0,0,0,0.06))',
                    transition: 'filter 0.4s ease',
                    backgroundColor: 'transparent',
                  }}
                />

                {/* Layer 2: Packet overlay — sits inside the card, pops out on hover */}
                <div
                  style={{
                    position: 'absolute',
                    top: '2%',
                    left: '5%',
                    width: '85%',
                    height: '62%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'visible',
                    pointerEvents: 'none',
                  }}
                >
                  <img
                    src={product.packetImage}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '130%',
                      objectFit: 'contain',
                      /*
                        Default: packet sits inside the card area, slightly scaled down
                        Hover: packet pops up and tilts slightly, as if bursting out of the card
                      */
                      transform: isHovered
                        ? 'translateY(-18%) rotate(-4deg) scale(1.08)'
                        : 'translateY(5%) rotate(0deg) scale(0.85)',
                      transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      transformOrigin: 'center bottom',
                      filter: isHovered
                        ? 'drop-shadow(0 12px 24px rgba(0,0,0,0.25))'
                        : 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                    }}
                  />
                </div>

                {/* Interactive Buy Now overlay */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBuyNow(product);
                  }}
                  id={`buy-${product.id}`}
                  style={{
                    position: 'absolute',
                    bottom: '4.97%',
                    right: '6.99%',
                    width: '30.05%',
                    height: '7%',
                    borderRadius: '100px',
                    border: 'none',
                    background: isAnimating ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                    color: isAnimating ? 'var(--text-dark)' : 'transparent',
                    fontWeight: 700,
                    fontSize: '0.6rem',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: isAnimating ? '0 5px 15px rgba(0,0,0,0.2)' : 'none',
                    zIndex: 2,
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
                  {isAnimating ? '✓' : ''}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
