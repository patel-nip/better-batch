import { useState, useEffect, useRef, useCallback } from 'react';
import { testimonials } from '../data/products';

export default function VideoTestimonials() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoSlideRef = useRef(null);
  const SLIDE_INTERVAL = 4000;

  const totalSlides = testimonials.length;

  const goTo = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const goNext = useCallback(() => {
    goTo((current + 1) % totalSlides);
  }, [current, totalSlides, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + totalSlides) % totalSlides);
  }, [current, totalSlides, goTo]);

  // Auto-slide — pauses on hover
  useEffect(() => {
    if (isHovered) {
      clearInterval(autoSlideRef.current);
      return;
    }
    autoSlideRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % totalSlides);
    }, SLIDE_INTERVAL);
    return () => clearInterval(autoSlideRef.current);
  }, [isHovered, totalSlides]);

  // Positions: for 3 visible cards (left, center, right) with wrapping
  const getCardStyle = (index) => {
    const diff = ((index - current) % totalSlides + totalSlides) % totalSlides;

    // Map diff to position: 0 = center, 1 = right, totalSlides-1 = left
    let position;
    if (diff === 0) position = 'center';
    else if (diff === 1) position = 'right';
    else if (diff === totalSlides - 1) position = 'left';
    else position = 'hidden';

    const isCenter = position === 'center';
    const isCardHovered = hoveredCard === index;

    const baseStyles = {
      position: 'absolute',
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      borderRadius: '24px',
      overflow: 'hidden',
      cursor: 'pointer',
    };

    switch (position) {
      case 'center':
        return {
          ...baseStyles,
          width: '340px',
          height: '470px',
          transform: `translateX(-50%) scale(${isCardHovered ? 1.03 : 1})`,
          left: '50%',
          zIndex: 5,
          opacity: 1,
          boxShadow: isCardHovered
            ? '0 30px 80px rgba(0,0,0,0.3)'
            : '0 20px 60px rgba(0,0,0,0.2)',
        };
      case 'left':
        return {
          ...baseStyles,
          width: '260px',
          height: '390px',
          transform: `translateX(-50%) scale(${isCardHovered ? 0.95 : 0.9})`,
          left: '18%',
          zIndex: 3,
          opacity: isCardHovered ? 0.9 : 0.65,
          boxShadow: isCardHovered
            ? '0 15px 40px rgba(0,0,0,0.18)'
            : '0 10px 30px rgba(0,0,0,0.1)',
        };
      case 'right':
        return {
          ...baseStyles,
          width: '260px',
          height: '390px',
          transform: `translateX(-50%) scale(${isCardHovered ? 0.95 : 0.9})`,
          left: '82%',
          zIndex: 3,
          opacity: isCardHovered ? 0.9 : 0.65,
          boxShadow: isCardHovered
            ? '0 15px 40px rgba(0,0,0,0.18)'
            : '0 10px 30px rgba(0,0,0,0.1)',
        };
      default:
        return {
          ...baseStyles,
          width: '260px',
          height: '390px',
          transform: 'translateX(-50%) scale(0.7)',
          left: '50%',
          zIndex: 0,
          opacity: 0,
          pointerEvents: 'none',
        };
    }
  };

  const getPosition = (index) => {
    const diff = ((index - current) % totalSlides + totalSlides) % totalSlides;
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === totalSlides - 1) return 'left';
    return 'hidden';
  };

  return (
    <section
      id="testimonials"
      className="section"
      style={{ background: 'var(--brand-cream)', overflow: 'hidden', position: 'relative' }}
    >
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--text-dark)' }}>
          <span style={{ color: 'var(--brand-orange)' }}>Video</span>
          {' '}Testimonials
        </h2>

        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 0',
            minHeight: '540px',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left arrow */}
          <button
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="testimonial-arrow testimonial-arrow-left"
          >
            ‹
          </button>

          {/* Cards carousel */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '900px',
            height: '500px',
          }}>
            {testimonials.map((t, idx) => {
              const position = getPosition(idx);
              const isCenter = position === 'center';
              const hasBakedInText = t.image.includes('Rectangle 42');

              return (
                <div
                  key={t.id}
                  style={getCardStyle(idx)}
                  onClick={() => {
                    if (position === 'left') goPrev();
                    else if (position === 'right') goNext();
                  }}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                      transform: hoveredCard === idx ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />

                  {/* Play button overlay */}
                  <div
                    className="testimonial-play-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: hoveredCard === idx
                        ? 'rgba(0,0,0,0.2)'
                        : 'rgba(0,0,0,0.1)',
                      transition: 'background 0.3s ease',
                    }}
                  >
                    <div
                      className="testimonial-play-btn"
                      style={{
                        width: isCenter ? '64px' : '48px',
                        height: isCenter ? '64px' : '48px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.92)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: hoveredCard === idx
                          ? '0 8px 30px rgba(0,0,0,0.3)'
                          : '0 4px 20px rgba(0,0,0,0.2)',
                        transition: 'all 0.3s ease',
                        transform: hoveredCard === idx ? 'scale(1.15)' : 'scale(1)',
                      }}
                    >
                      <svg width={isCenter ? '24' : '18'} height={isCenter ? '24' : '18'} viewBox="0 0 24 24" fill="var(--text-dark)">
                        <polygon points="8,5 20,12 8,19" />
                      </svg>
                    </div>
                  </div>

                  {/* Caption gradient for center card */}
                  {isCenter && !hasBakedInText && (
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '2.5rem 1.5rem 1.5rem',
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                      transition: 'opacity 0.3s ease',
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
            className="testimonial-arrow testimonial-arrow-right"
          >
            ›
          </button>
        </div>

        {/* Dot indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.6rem',
          marginTop: '1.5rem',
        }}>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              style={{
                width: current === idx ? '28px' : '10px',
                height: '10px',
                borderRadius: '100px',
                border: 'none',
                background: current === idx ? 'var(--brand-green)' : 'var(--brand-green-light)',
                opacity: current === idx ? 1 : 0.35,
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            />
          ))}
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
        .testimonial-arrow {
          position: absolute;
          z-index: 10;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255,255,255,0.92);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          color: var(--text-dark);
          backdrop-filter: blur(8px);
        }
        .testimonial-arrow:hover {
          transform: scale(1.15);
          box-shadow: 0 8px 30px rgba(0,0,0,0.18);
          background: white;
        }
        .testimonial-arrow:active {
          transform: scale(0.95);
        }
        .testimonial-arrow-left {
          left: 5%;
        }
        .testimonial-arrow-right {
          right: 5%;
        }

        @media (max-width: 900px) {
          .testimonial-arrow { display: none; }
        }
      `}</style>
    </section>
  );
}
