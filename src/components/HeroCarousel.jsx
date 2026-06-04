export default function HeroCarousel() {
  return (
    <section id="hero" style={{
      background: 'var(--brand-cream)',
      paddingTop: '6.5rem',
      paddingBottom: '2.5rem',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Rounded Hero Banner Container */}
        <div 
          className="hero-banner-card"
          style={{
            width: '100%',
            maxWidth: '1200px',
          }}
        >
          <img
            src="/images/bb ui banner.png"
            alt="Better Batch Pudina Makhana"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
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
