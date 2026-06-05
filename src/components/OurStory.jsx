import { getImageUrl } from '../utils/imageUrl';

export default function OurStory() {
  return (
    <section id="our-story" style={{ position: 'relative' }}>
      {/* Red banner image from brand assets */}
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <img
          src={getImageUrl("/images/Group 184.png")}
          alt="Our Story"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
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
          }}>
            Because life's full of small choices, and every bite is one of them.
          </p>
        </div>
      </div>
    </section>
  );
}
