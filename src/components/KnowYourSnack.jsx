import { useEffect, useRef, useState } from 'react';
import { snackMatrix } from '../data/products';

export default function KnowYourSnack() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [hoveredCell, setHoveredCell] = useState(null);

  useEffect(() => {
    let gsapInstance;
    const loadGSAP = async () => {
      try {
        const gsapModule = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsapInstance = gsapModule.gsap;
        gsapInstance.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const scrollContainer = scrollContainerRef.current;
        if (!section || !scrollContainer) return;

        const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;

        gsapInstance.to(scrollContainer, {
          scrollLeft: scrollWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${scrollWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });
      } catch (e) {
        console.warn('GSAP not loaded, falling back to native scroll');
      }
    };

    loadGSAP();

    return () => {
      if (gsapInstance) {
        const { ScrollTrigger } = gsapInstance;
        ScrollTrigger?.getAll?.().forEach(t => t.kill());
      }
    };
  }, []);

  const fatColors = ['#4A7C3F', '#5CA84B', '#6BAF5B', '#8BC34A', '#F9A825', '#E65100', '#C62828'];
  const cellColors = [
    ['#D4EDDA', '#C8E6C9', '#B5DFB5', '#A5D6A5', '#E8F5E9', '#C8E6C9', '#B5DFB5'],
    ['#F5DEB3', '#EDDCBA', '#E6D0A3', '#DFC490', '#F5DEB3', '#EDDCBA', '#E6D0A3'],
    ['#FFF9C4', '#FFF176', '#FFEE58', '#FDD835', '#FFF9C4', '#FFF176', '#FFEE58'],
    ['#C8E6C9', '#B5DFB5', '#A5D6A5', '#81C784', '#C8E6C9', '#B5DFB5', '#A5D6A5'],
    ['#F5DEB3', '#EDDCBA', '#E6D0A3', '#DFC490', '#D7C99E', '#CFBD8E', '#C7B17E'],
    ['#FFF9C4', '#FFF59D', '#FFF176', '#FFEE58', '#FFF9C4', '#FFF59D', '#FFF176'],
  ];

  const fatData = [
    [3, 5, 7, 9, 12, 15, 2],
    [8, 10, 12, 14, 16, 20, 5],
    [10, 12, 15, 18, 20, 22, 6],
    [10, 13, 14, 16, 18, 21, 5],
    [12, 15, 18, 20, 22, 25, 8],
    [6, 8, 10, 12, 14, 18, 4],
  ];

  return (
    <section
      id="know-your-snack"
      ref={sectionRef}
      className="section"
      style={{
        background: 'var(--brand-cream)',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h2 className="section-title" style={{
        color: 'var(--text-dark)',
        marginBottom: '2rem',
        padding: '0 2rem',
      }}>
        <span style={{ color: 'var(--brand-orange)' }}>Know Your</span>
        Snack
      </h2>

      <div
        ref={scrollContainerRef}
        style={{
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          padding: '0 2rem 2rem',
        }}
      >
        <div style={{ minWidth: '1100px', maxWidth: '1400px', margin: '0 auto' }}>
          {/* Fat level header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '160px repeat(7, 1fr)',
            gap: '0.75rem',
            marginBottom: '1rem',
          }}>
            <div />
            {fatColors.map((color, i) => (
              <div key={i} style={{
                background: color,
                color: 'white',
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontStyle: 'italic',
                fontSize: '1.1rem',
                padding: '0.6rem 1rem',
                borderRadius: 'var(--border-radius-pill)',
                textAlign: 'center',
              }}>
                Fat
              </div>
            ))}
          </div>

          {/* Matrix rows */}
          {snackMatrix.rows.map((row, rowIdx) => (
            <div key={rowIdx} style={{
              display: 'grid',
              gridTemplateColumns: '160px repeat(7, 1fr)',
              gap: '0.75rem',
              marginBottom: '0.75rem',
            }}>
              {/* Row label */}
              <div style={{
                background: row.color,
                color: 'white',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: '1rem',
                padding: '1rem 1.2rem',
                borderRadius: 'var(--border-radius-pill)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                {row.category}
              </div>

              {/* Cells */}
              {cellColors[rowIdx].map((cellColor, colIdx) => {
                const cellKey = `${rowIdx}-${colIdx}`;
                const isHovered = hoveredCell === cellKey;

                return (
                  <div
                    key={colIdx}
                    onMouseEnter={() => setHoveredCell(cellKey)}
                    onMouseLeave={() => setHoveredCell(null)}
                    style={{
                      background: cellColor,
                      borderRadius: 'var(--border-radius-lg)',
                      padding: '1rem',
                      minHeight: '60px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                      boxShadow: isHovered ? '0 8px 25px rgba(0,0,0,0.15)' : 'none',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {isHovered && (
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0,0,0,0.75)',
                        borderRadius: 'var(--border-radius-lg)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        animation: 'fadeInUp 0.2s ease',
                      }}>
                        <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>Fat Content</span>
                        <span style={{ fontSize: '1.3rem', fontWeight: 700 }}>{fatData[rowIdx][colIdx]}g</span>
                        <div style={{
                          width: '70%',
                          height: '4px',
                          background: 'rgba(255,255,255,0.3)',
                          borderRadius: '2px',
                          marginTop: '4px',
                        }}>
                          <div style={{
                            width: `${Math.min((fatData[rowIdx][colIdx] / 25) * 100, 100)}%`,
                            height: '100%',
                            background: fatData[rowIdx][colIdx] > 15 ? '#ff5252' : fatData[rowIdx][colIdx] > 10 ? '#FFC107' : '#4CAF50',
                            borderRadius: '2px',
                            transition: 'width 0.3s ease',
                          }} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
