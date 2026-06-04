export default function OurStory() {
  return (
    <section id="our-story" style={{ position: 'relative' }}>
      {/* Red banner with floating makhana */}
      <div style={{
        background: 'var(--brand-red)',
        padding: '5rem 2rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        {/* Background image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'url(/images/story-banner.png) center/cover no-repeat',
          opacity: 0.4,
        }} />

        {/* Floating makhana decorations */}
        <div className="float-1" style={{ position: 'absolute', top: '15%', left: '10%', width: '50px', height: '50px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #E8D5A0, #C4A55A)', opacity: 0.8 }} />
        <div className="float-2" style={{ position: 'absolute', top: '20%', right: '15%', width: '35px', height: '35px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #E8D5A0, #C4A55A)', opacity: 0.7 }} />
        <div className="float-3" style={{ position: 'absolute', bottom: '20%', left: '20%', width: '45px', height: '45px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #E8D5A0, #B89E4A)', opacity: 0.6 }} />
        <div className="float-4" style={{ position: 'absolute', bottom: '15%', right: '10%', width: '55px', height: '55px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #E8D5A0, #C4A55A)', opacity: 0.7 }} />
        <div className="float-2" style={{ position: 'absolute', top: '50%', left: '5%', width: '30px', height: '30px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #E8D5A0, #C4A55A)', opacity: 0.5 }} />
        <div className="float-1" style={{ position: 'absolute', top: '40%', right: '5%', width: '40px', height: '40px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #E8D5A0, #C4A55A)', opacity: 0.6 }} />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            color: 'white',
            lineHeight: 1.1,
          }}>
            <span style={{
              display: 'block',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: 'rgba(255,255,255,0.8)',
            }}>
              Our
            </span>
            <span style={{
              display: 'block',
              fontWeight: 900,
              fontSize: 'clamp(3rem, 7vw, 5rem)',
            }}>
              Story
            </span>
          </h2>
        </div>
      </div>

      {/* Editorial text block */}
      <div style={{
        background: 'var(--brand-cream)',
        padding: '4rem 2rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            fontWeight: 600,
            color: 'var(--text-dark)',
            lineHeight: 1.7,
            marginBottom: '1.5rem',
          }}>
            We're here for everyone who loves a good crunch. From school tiffins to late-night binge sessions, from desk drawers to post-gym bites, Better Batch brings you snacks that taste familiar, yet feel better.
          </p>
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            fontWeight: 500,
            color: 'var(--text-medium)',
            fontStyle: 'italic',
          }}>
            Because life's full of small choices, and every bite is one of them.
          </p>
        </div>
      </div>
    </section>
  );
}
