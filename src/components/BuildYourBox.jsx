import { useState } from 'react';
import { packSizes } from '../data/products';

export default function BuildYourBox() {
  const [selectedPack, setSelectedPack] = useState(null);

  return (
    <section id="byob" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '600px',
      }} className="byob-grid">
        {/* Left: Configurator */}
        <div style={{
          background: '#F9E8A2', // soft yellow background from user screenshot
          padding: '7rem 4rem 4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
        }}>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
            fontWeight: 700,
            color: 'var(--brand-green)',
            lineHeight: 1.1,
            marginBottom: '2.5rem',
          }}>
            Build Your<br />Own Box
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            maxWidth: '400px',
          }}>
            {packSizes.map(pack => {
              const isSelected = selectedPack === pack.id;
              const isRed = pack.style === 'outline-red';
              const isFilled = pack.style === 'filled';

              return (
                <button
                  key={pack.id}
                  id={`pack-${pack.count}`}
                  onClick={() => setSelectedPack(isSelected ? null : pack.id)}
                  style={{
                    padding: '0.9rem 1.5rem',
                    borderRadius: 'var(--border-radius-pill)',
                    border: `2px solid ${isRed ? 'var(--brand-orange)' : 'var(--brand-green)'}`,
                    background: (isFilled || isSelected)
                      ? (isRed ? 'var(--brand-orange)' : 'var(--brand-green)')
                      : 'transparent',
                    color: (isFilled || isSelected) ? 'white' : (isRed ? 'var(--brand-orange)' : 'var(--brand-green)'),
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    transform: isSelected ? 'scale(1.08)' : 'scale(1)',
                    boxShadow: isSelected ? '0 8px 25px rgba(0,0,0,0.15)' : 'none',
                  }}
                >
                  {pack.label}
                </button>
              );
            })}
          </div>

          {selectedPack && (
            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              background: 'white',
              borderRadius: 'var(--border-radius-lg)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              animation: 'fadeInUp 0.4s ease',
            }}>
              <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: 'var(--brand-green)' }}>
                ✓ {packSizes.find(p => p.id === selectedPack)?.label} selected!
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                Choose your favorite snacks to fill your custom box.
              </p>
              <button className="btn-primary" style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                Start Building →
              </button>
            </div>
          )}
        </div>

        {/* Right: Lifestyle photo */}
        <div style={{
          backgroundImage: 'url("/images/Screenshot_20260604_234350_My Files(1)(1).jpg.jpeg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          minHeight: '400px',
        }}>
          {/* Floating snack */}
          <div className="float-2" style={{
            position: 'absolute',
            top: '10%',
            left: '-20px',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 30%, #E8D5A0, #C4A55A)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
          }} />
        </div>
      </div>

      {/* Wavy cut at the top of the entire section (covers both left and right panels) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '90px',
        zIndex: 10,
        pointerEvents: 'none',
      }}>
        <svg viewBox="0 0 1000 100" fill="none" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <path d="M0,0 L1000,0 L1000,40 C850,90 650,-10 500,40 C350,90 150,-10 0,40 Z" fill="var(--brand-cream)" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .byob-grid { grid-template-columns: 1fr !important; }
          .byob-grid > div:first-child { padding: 4rem 2rem 3rem !important; }
        }
      `}</style>
    </section>
  );
}
