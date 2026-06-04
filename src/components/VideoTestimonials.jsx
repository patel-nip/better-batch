import { useState } from 'react';
import { testimonials } from '../data/products';

export default function VideoTestimonials() {
  const [current, setCurrent] = useState(1);

  const goNext = () => setCurrent(prev => (prev + 1) % testimonials.length);
  const goPrev = () => setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);

  const getIndex = (offset) => (current + offset + testimonials.length) % testimonials.length;

  return (
    <section id="testimonials" className="section" style={{ background: 'var(--brand-cream)', overflow: 'hidden', position: 'relative' }}>
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--text-dark)' }}>
          <span style={{ color: 'var(--brand-orange)' }}>Video</span>
          Testimonials
        </h2>

        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          padding: '2rem 0',
          minHeight: '500px',
        }}>
          {/* Left arrow */}
          <button
            onClick={goPrev}
            aria-label="Previous testimonial"
            style={{
              position: 'absolute',
              left: '15%',
              zIndex: 10,
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.9)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              color: 'var(--text-dark)',
            }}
            onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.target.style.transform = 'scale(1)'}
          >
            ‹
          </button>

          {/* Cards */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            width: '100%',
            maxWidth: '900px',
          }}>
            {[-1, 0, 1].map(offset => {
              const idx = getIndex(offset);
              const t = testimonials[idx];
              const isCenter = offset === 0;
              const hasBakedInText = t.image.includes('Rectangle 42');

              return (
                <div
                  key={`${idx}-${offset}`}
                  style={{
                    flex: isCenter ? '0 0 350px' : '0 0 250px',
                    height: isCenter ? '480px' : '400px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    opacity: isCenter ? 1 : 0.7,
                    transform: isCenter ? 'scale(1)' : 'scale(0.9)',
                    boxShadow: isCenter ? '0 20px 60px rgba(0,0,0,0.2)' : '0 10px 30px rgba(0,0,0,0.1)',
                  }}
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />

                  {/* Play button overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0,0,0,0.1)',
                    opacity: isCenter ? 1 : 0.5,
                    transition: 'opacity 0.3s ease',
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--text-dark)">
                        <polygon points="8,5 20,12 8,19" />
                      </svg>
                    </div>
                  </div>

                  {/* Caption (only rendered if not baked into the image) */}
                  {isCenter && !hasBakedInText && (
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '2rem 1.5rem',
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    }}>
                      <p style={{
                        color: 'white',
                        fontSize: '1rem',
                        fontWeight: 500,
                        textAlign: 'center',
                        lineHeight: 1.4,
                      }}>
                        "{t.caption}"
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right arrow */}
          <button
            onClick={goNext}
            aria-label="Next testimonial"
            style={{
              position: 'absolute',
              right: '15%',
              zIndex: 10,
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.9)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              color: 'var(--text-dark)',
            }}
            onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.target.style.transform = 'scale(1)'}
          >
            ›
          </button>
        </div>

        {/* Floating makhana from brand assets */}
        <img
          src="/images/makhanas 2.png"
          alt="floating makhana"
          className="float-2"
          style={{
            position: 'absolute',
            top: '5%',
            right: '5%',
            width: '80px',
            height: 'auto',
            pointerEvents: 'none',
            filter: 'drop-shadow(0 8px 15px rgba(0,0,0,0.1))',
          }}
        />
      </div>

      <style>{`
        @media (max-width: 900px) {
          #testimonials button { position: static; margin: 0 0.5rem; }
          #testimonials .container > div { flex-wrap: wrap; gap: 1rem; }
        }
      `}</style>
    </section>
  );
}
