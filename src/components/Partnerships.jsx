import { partnerLogos } from '../data/products';

export default function Partnerships() {
  const duplicated = [...partnerLogos, ...partnerLogos];

  return (
    <section id="partnerships" className="section" style={{ background: 'var(--brand-cream)' }}>
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--text-dark)' }}>
          <span style={{ color: 'var(--brand-orange)' }}>Our</span>
          Partnerships
        </h2>
      </div>

      <div style={{ overflow: 'hidden', padding: '1rem 0' }}>
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          animation: 'marquee 25s linear infinite',
          width: 'max-content',
        }}>
          {duplicated.map((logo, idx) => (
            <div
              key={idx}
              style={{
                flexShrink: 0,
                padding: '1rem 2.5rem',
                borderRadius: 'var(--border-radius-pill)',
                border: '2px solid var(--text-dark)',
                background: 'transparent',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '1rem',
                color: 'var(--text-dark)',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--text-dark)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--text-dark)';
              }}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
