import { whyChooseUs } from '../data/products';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section" style={{ background: 'var(--brand-cream)' }}>
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--text-dark)' }}>
          <span style={{ color: 'var(--brand-orange)', fontWeight: 400 }}>Why</span>
          Choose Us
        </h2>

        <p style={{
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto 3rem',
          fontSize: '1.05rem',
          color: 'var(--text-medium)',
          lineHeight: 1.7,
        }}>
          Healthy or indulgent, sweet or savoury, our mission is simple: to make the world's snacking a little more mindful, one batch at a time.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {whyChooseUs.map((pillar, idx) => (
            <div
              key={idx}
              style={{
                borderRadius: 'var(--border-radius-xl)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(139, 26, 26, 0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Dark red image area */}
              <div style={{
                background: 'var(--brand-red)',
                height: '180px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Subtle icon/pattern */}
                <div style={{
                  fontSize: '4rem',
                  opacity: 0.15,
                  color: 'white',
                }}>
                  {idx === 0 ? '🌱' : idx === 1 ? '✨' : '🏭'}
                </div>
                {/* Floating makhana */}
                <div className={`float-${idx + 1}`} style={{
                  position: 'absolute',
                  top: '20%',
                  right: '20%',
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 30% 30%, #E8D5A0, #C4A55A)',
                  opacity: 0.4,
                }} />
              </div>

              {/* Content */}
              <div style={{
                background: 'white',
                padding: '1.8rem',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 900,
                  fontSize: '1.3rem',
                  color: 'var(--text-dark)',
                  marginBottom: '0.8rem',
                  textDecoration: 'underline',
                  textDecorationColor: 'var(--brand-red)',
                  textUnderlineOffset: '4px',
                }}>
                  {pillar.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-medium)',
                  lineHeight: 1.6,
                }}>
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating makhana */}
      <div className="float-4" style={{
        position: 'absolute',
        top: '10%',
        right: '3%',
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, #E8D5A0, #C4A55A)',
        opacity: 0.5,
      }} />
    </section>
  );
}
