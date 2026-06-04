import { foodGalleryImages } from '../data/products';

export default function FoodGallery() {
  const allImages = [...foodGalleryImages, ...foodGalleryImages];

  return (
    <section id="food-gallery" style={{
      background: 'var(--brand-cream)',
      padding: '3rem 0',
      overflow: 'hidden',
    }}>
      <div className="gallery-track">
        {allImages.map((img, idx) => (
          <div key={idx} className="gallery-item">
            <img
              src={img}
              alt="Delicious snack photography"
              style={{
                height: '100%',
                width: 'auto',
                display: 'block',
                mixBlendMode: 'multiply', // Blends the white borders with the cream background
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
