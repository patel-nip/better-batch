import { useState, useEffect, useRef } from 'react';

const slides = [
  {
    title: 'Pudina\nMakhana',
    subtitle: 'Better Taste. Better Crunch.',
    image: '/images/hero-product.png',
    bg: 'var(--brand-green)',
  },
  {
    title: 'Peri Peri\nMakhana',
    subtitle: 'A fiery crunch in every bite.',
    image: '/images/bestseller-peri.png',
    bg: '#C62828',
  },
  {
    title: 'Cheese\nMakhana',
    subtitle: 'Cheesy goodness, guilt-free.',
    image: '/images/bestseller-cheese.png',
    bg: '#D4920A',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 400);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const goToSlide = (idx) => {
    if (idx === current) return;
    clearInterval(intervalRef.current);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsAnimating(false);
    }, 400);
  };

  const slide = slides[current];

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
      background: slide.bg,
      transition: 'background 0.8s ease',
    }}>
      {/* Background watermark */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.06,
        fontSize: '15rem',
        fontFamily: 'var(--font-heading)',
        fontWeight: 900,
        color: 'white',
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        Better<br/>Batch
      </div>

      {/* Organic curved cream shape */}
      <div style={{
        position: 'absolute',
        top: '5%',
        left: '-5%',
        width: '55%',
        height: '85%',
        background: 'var(--brand-cream)',
        borderRadius: '0 40% 40% 0',
        zIndex: 1,
      }} />

      {/* Content */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        minHeight: '100vh',
        paddingTop: '5rem',
      }}>
        {/* Left: Brand text */}
        <div style={{
          flex: '1 1 50%',
          paddingRight: '2rem',
          opacity: isAnimating ? 0 : 1,
          transform: isAnimating ? 'translateY(20px)' : 'translateY(0)',
          transition: 'all 0.4s ease',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            fontWeight: 900,
            color: 'var(--text-dark)',
            lineHeight: 0.95,
            marginBottom: '1.5rem',
          }}>
            Better<br/>Batch
          </h2>
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            fontWeight: 400,
            color: 'var(--text-medium)',
            marginBottom: '2rem',
          }}>
            {slide.subtitle}
          </p>
          <button className="btn-primary" style={{
            fontSize: '1.1rem',
            padding: '1rem 2.5rem',
          }}>
            Shop Now
          </button>
        </div>

        {/* Right: Product image */}
        <div style={{
          flex: '1 1 50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}>
          <img
            src={slide.image}
            alt={slide.title}
            style={{
              maxWidth: '90%',
              maxHeight: '70vh',
              objectFit: 'contain',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))',
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating ? 'scale(0.9) translateY(20px)' : 'scale(1) translateY(0)',
              transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          />

          {/* Floating makhana balls */}
          <div className="float-1" style={{ position: 'absolute', top: '10%', right: '5%', width: '50px', height: '50px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #E8D5A0, #C4A55A)', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
          <div className="float-2" style={{ position: 'absolute', bottom: '20%', left: '10%', width: '35px', height: '35px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #E8D5A0, #C4A55A)', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
          <div className="float-3" style={{ position: 'absolute', top: '30%', left: '-5%', width: '25px', height: '25px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #E8D5A0, #B89E4A)', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
          <div className="float-4" style={{ position: 'absolute', bottom: '10%', right: '15%', width: '40px', height: '40px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #E8D5A0, #C4A55A)', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
        </div>
      </div>

      {/* Dot pagination */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '0.5rem',
        zIndex: 5,
      }}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: idx === current ? '2rem' : '0.7rem',
              height: '0.7rem',
              borderRadius: '100px',
              background: idx === current ? 'var(--brand-green)' : 'rgba(74, 124, 63, 0.4)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero .container { flex-direction: column; text-align: center; padding-top: 7rem; }
          #hero .container > div:first-child { padding-right: 0; margin-bottom: 2rem; }
        }
      `}</style>
    </section>
  );
}
