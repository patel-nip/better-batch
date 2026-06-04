import { categories } from '../data/products';

const mascotSvgs = {
  amrutam: (color) => (
    <svg viewBox="0 0 120 140" fill="none" style={{ width: '100%', maxWidth: '160px' }}>
      <circle cx="60" cy="55" r="42" fill={`${color}30`} stroke={color} strokeWidth="2"/>
      <circle cx="60" cy="55" r="38" fill={`${color}20`}/>
      {/* Face - closed peaceful eyes */}
      <path d="M42 50 Q47 45 52 50" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M68 50 Q73 45 78 50" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Blissful smile */}
      <path d="M48 65 Q60 78 72 65" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Rosy cheeks */}
      <circle cx="40" cy="60" r="5" fill={`${color}25`}/>
      <circle cx="80" cy="60" r="5" fill={`${color}25`}/>
      {/* Body/legs */}
      <line x1="48" y1="95" x2="48" y2="115" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="72" y1="95" x2="72" y2="115" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      {/* Tiny hands */}
      <line x1="25" y1="65" x2="18" y2="58" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <line x1="95" y1="65" x2="102" y2="58" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      {/* Sneakers */}
      <ellipse cx="48" cy="120" rx="8" ry="5" fill={color} opacity="0.6"/>
      <ellipse cx="72" cy="120" rx="8" ry="5" fill={color} opacity="0.6"/>
    </svg>
  ),
  'better-batch': (color) => (
    <svg viewBox="0 0 120 140" fill="none" style={{ width: '100%', maxWidth: '160px' }}>
      <circle cx="60" cy="55" r="42" fill={`${color}30`} stroke={color} strokeWidth="2"/>
      <circle cx="60" cy="55" r="38" fill={`${color}20`}/>
      {/* Sunglasses */}
      <rect x="34" y="42" width="20" height="14" rx="4" fill={color} opacity="0.8"/>
      <rect x="66" y="42" width="20" height="14" rx="4" fill={color} opacity="0.8"/>
      <line x1="54" y1="49" x2="66" y2="49" stroke={color} strokeWidth="2"/>
      {/* Cool smile */}
      <path d="M48 68 Q60 76 72 68" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Walking legs - one forward */}
      <line x1="48" y1="95" x2="40" y2="118" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="72" y1="95" x2="80" y2="118" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      {/* Arms in walking pose */}
      <line x1="22" y1="70" x2="15" y2="85" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <line x1="98" y1="70" x2="105" y2="55" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      {/* Sneakers */}
      <ellipse cx="40" cy="122" rx="8" ry="5" fill={color} opacity="0.6"/>
      <ellipse cx="80" cy="122" rx="8" ry="5" fill={color} opacity="0.6"/>
    </svg>
  ),
  chhakhana: (color) => (
    <svg viewBox="0 0 120 140" fill="none" style={{ width: '100%', maxWidth: '160px' }}>
      <circle cx="60" cy="55" r="42" fill={`${color}25`} stroke={color} strokeWidth="2"/>
      <circle cx="60" cy="55" r="38" fill={`${color}15`}/>
      {/* Happy sparkle eyes */}
      <circle cx="45" cy="48" r="4" fill={color}/>
      <circle cx="75" cy="48" r="4" fill={color}/>
      <circle cx="46" cy="47" r="1.5" fill="white"/>
      <circle cx="76" cy="47" r="1.5" fill="white"/>
      {/* Wide happy mouth */}
      <path d="M43 62 Q60 80 77 62" stroke={color} strokeWidth="2.5" fill={`${color}15`} strokeLinecap="round"/>
      {/* Sparkles */}
      <path d="M95 30 L97 25 L99 30 L104 32 L99 34 L97 39 L95 34 L90 32Z" fill={color} opacity="0.5"/>
      <path d="M20 35 L22 30 L24 35 L29 37 L24 39 L22 44 L20 39 L15 37Z" fill={color} opacity="0.4"/>
      {/* Dancing legs */}
      <line x1="45" y1="95" x2="38" y2="115" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="75" y1="95" x2="82" y2="112" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      {/* Dancing arms up */}
      <line x1="22" y1="60" x2="10" y2="45" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <line x1="98" y1="60" x2="110" y2="45" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      {/* Sneakers */}
      <ellipse cx="38" cy="120" rx="8" ry="5" fill={color} opacity="0.6"/>
      <ellipse cx="82" cy="117" rx="8" ry="5" fill={color} opacity="0.6"/>
    </svg>
  ),
  byob: (color) => (
    <svg viewBox="0 0 120 140" fill="none" style={{ width: '100%', maxWidth: '160px' }}>
      <circle cx="60" cy="55" r="42" fill={`${color}30`} stroke={color} strokeWidth="2"/>
      <circle cx="60" cy="55" r="38" fill={`${color}20`}/>
      {/* Happy eyes */}
      <circle cx="45" cy="50" r="3.5" fill={color}/>
      <circle cx="75" cy="50" r="3.5" fill={color}/>
      <circle cx="46" cy="49" r="1.5" fill="white"/>
      <circle cx="76" cy="49" r="1.5" fill="white"/>
      {/* Big grin */}
      <path d="M45 65 Q60 80 75 65" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Holding a box */}
      <rect x="85" y="55" width="25" height="20" rx="3" fill={color} opacity="0.3" stroke={color} strokeWidth="1.5"/>
      <text x="97" y="69" textAnchor="middle" fill={color} fontSize="7" fontWeight="bold" fontFamily="var(--font-body)">BYOB</text>
      {/* Arm holding box */}
      <line x1="95" y1="65" x2="98" y2="65" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      {/* Legs */}
      <line x1="48" y1="95" x2="48" y2="118" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="72" y1="95" x2="72" y2="118" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      {/* Other arm */}
      <line x1="22" y1="65" x2="15" y2="55" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      {/* Sneakers */}
      <ellipse cx="48" cy="122" rx="8" ry="5" fill={color} opacity="0.6"/>
      <ellipse cx="72" cy="122" rx="8" ry="5" fill={color} opacity="0.6"/>
    </svg>
  ),
};

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
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '2rem 1.5rem',
                borderRadius: 'var(--border-radius-xl)',
                border: `3px solid ${cat.color}`,
                background: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 15px 40px ${cat.color}30`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ width: '100%', maxWidth: '160px', marginBottom: '1rem' }}>
                {mascotSvgs[cat.id]?.(cat.color)}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontStyle: 'italic',
                fontSize: '1.5rem',
                color: cat.color,
              }}>
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
