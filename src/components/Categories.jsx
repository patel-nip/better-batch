import { categories } from '../data/products';

export default function Categories() {
  return (
    <section id="categories" className="section" style={{ background: 'var(--brand-cream)', paddingTop: '4rem' }}>
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--brand-orange)', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          Categories
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {categories.map(cat => (
            <div
              key={cat.id}
              style={{
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)';
                const img = e.currentTarget.querySelector('img');
                if (img) {
                  img.style.filter = `drop-shadow(0 15px 30px ${cat.color}60)`;
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                const img = e.currentTarget.querySelector('img');
                if (img) {
                  img.style.filter = 'drop-shadow(0 4px 10px rgba(0,0,0,0.06))';
                }
              }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.06))',
                  transition: 'filter 0.3s ease',
                  backgroundColor: 'transparent',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
