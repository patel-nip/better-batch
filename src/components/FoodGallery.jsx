import { foodGalleryImages } from '../data/products';

export default function FoodGallery() {
  const allImages = [...foodGalleryImages, ...foodGalleryImages];

  return (
    <section id="food-gallery" style={{
      background: 'var(--brand-cream)',
      padding: '3rem 0',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex',
        gap: '1rem',
        animation: 'marquee 30s linear infinite',
        width: 'max-content',
      }}>
        {allImages.map((img, idx) => (
          <div
            key={idx}
            style={{
              width: '200px',
              height: '200px',
              borderRadius: 'var(--border-radius-xl)',
              overflow: 'hidden',
              flexShrink: 0,
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img
              src={img}
              alt="Delicious snack photography"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
