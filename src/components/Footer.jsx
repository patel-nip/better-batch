import { footerLinks } from '../data/products';

export default function Footer() {
  return (
    <footer id="footer" style={{
      background: 'var(--brand-green)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Main footer content */}
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem',
        padding: '4rem 2rem',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Quick Links */}
        <div>
          <h4 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            fontSize: '1.3rem',
            color: 'white',
            marginBottom: '1.5rem',
          }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {footerLinks.quickLinks.map(link => (
              <li key={link.label} style={{ marginBottom: '0.8rem' }}>
                <a
                  href={link.href}
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.color = 'white'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            fontSize: '1.3rem',
            color: 'white',
            marginBottom: '1.5rem',
          }}>
            Explore
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {footerLinks.explore.map(link => (
              <li key={link.label} style={{ marginBottom: '0.8rem' }}>
                <a
                  href={link.href}
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.color = 'white'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div style={{ textAlign: 'right' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', marginBottom: '0.3rem' }}>
              +91 98765 43210
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>
              hello@betterbatch.in
            </p>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'flex-end' }}>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1.5px solid rgba(255,255,255,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontSize: '1rem',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'var(--brand-green)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
            >
              f
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1.5px solid rgba(255,255,255,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'var(--brand-green)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube" style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1.5px solid rgba(255,255,255,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'var(--brand-green)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z"/>
              </svg>
            </a>
          </div>

          {/* Brand watermark */}
          <div style={{
            marginTop: '2rem',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: 'var(--border-radius-xl)',
            padding: '2rem',
            textAlign: 'center',
          }}>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '3rem',
              fontWeight: 900,
              color: 'rgba(255,255,255,0.15)',
              lineHeight: 1,
            }}>
              Better<br/>Batch
            </span>
          </div>
        </div>
      </div>

      {/* Bottom legal row */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.15)',
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Policy 1', 'Policy 2', 'Policy 3'].map(policy => (
            <a
              key={policy}
              href="#"
              style={{
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'white'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
            >
              {policy}
            </a>
          ))}
        </div>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
          © 2026 Better Batch. All rights reserved.
        </p>
      </div>

      {/* Floating makhana decorations */}
      <div className="float-2" style={{ position: 'absolute', bottom: '30%', left: '3%', width: '25px', height: '25px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #E8D5A0, #C4A55A)', opacity: 0.3, zIndex: 1 }} />
      <div className="float-3" style={{ position: 'absolute', bottom: '40%', left: '5%', width: '18px', height: '18px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #E8D5A0, #C4A55A)', opacity: 0.2, zIndex: 1 }} />
    </footer>
  );
}
