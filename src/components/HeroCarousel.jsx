import { useState, useEffect, useRef } from 'react';
import { getImageUrl } from '../utils/imageUrl';

const banners = [
  {
    id: 1,
    image: '/images/bb ui banner.png',
    alt: 'Better Batch Pudina Makhana',
    dotColor: '#4A7C3F', // Brand green
  },
  {
    id: 2,
    image: '/images/bb_ui_banner_2.png',
    alt: 'Better Batch Snack Pack',
    dotColor: '#2563EB', // Blue
  },
  {
    id: 3,
    image: '/images/bb_ui_banner_3.png',
    alt: 'Better Batch Makhana Bowl',
    dotColor: '#C62828', // Red
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3500); // 3.5 seconds auto-slide
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, current]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = 0;
    }
  }, [current]);

  return (
    <section id="hero" style={{
      background: 'transparent',
      paddingTop: '6.5rem',
      paddingBottom: '2.5rem',
      overflow: 'hidden',
    }}>
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          position: 'relative',
          width: '100%',
          background: 'transparent'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slider Window */}
        <div 
          ref={sliderRef}
          className="hero-banner-card"
          style={{
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
            background: 'transparent'
          }}
        >
          {/* Inner track */}
          <div 
            style={{
              display: 'flex',
              transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transform: `translateX(-${(current * 100) / banners.length}%)`,
              width: `${banners.length * 100}%`
            }}
          >
            {banners.map((banner) => (
              <div 
                key={banner.id}
                style={{
                  width: `${100 / banners.length}%`,
                  flexShrink: 0,
                  position: 'relative'
                }}
              >
                <img
                  src={getImageUrl(banner.image)}
                  alt={banner.alt}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel indicators/dots */}
        <div 
          style={{
            display: 'flex',
            gap: '0.8rem',
            marginTop: '1.5rem',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10
          }}
        >
          {banners.map((banner, idx) => {
            const isActive = current === idx;
            return (
              <button
                key={banner.id}
                onClick={() => setCurrent(idx)}
                style={{
                  width: isActive ? '32px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  border: 'none',
                  backgroundColor: banner.dotColor,
                  opacity: isActive ? 1 : 0.35,
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  padding: 0
                }}
                title={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero { padding-top: 5rem; }
        }
      `}</style>
    </section>
  );
}
