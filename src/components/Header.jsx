import { useState, useEffect, useRef } from 'react';
import { navLinks } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      id="header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        padding: scrolled ? '0.5rem 0' : '1rem 0',
        backgroundColor: scrolled ? 'rgba(250, 243, 229, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', transition: 'transform 0.3s', transform: scrolled ? 'scale(0.85)' : 'scale(1)' }}>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: scrolled ? '1.5rem' : '1.8rem',
            fontWeight: 700,
            color: 'var(--brand-green)',
            lineHeight: 1.1,
            transition: 'font-size 0.3s',
          }}>
            Better<br />Batch
          </h1>
          <span style={{
            fontSize: '0.65rem',
            fontWeight: 500,
            color: 'var(--text-medium)',
            letterSpacing: '0.05em',
            display: scrolled ? 'none' : 'block',
          }}>
            Better Taste. Better Crunch.
          </span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: 'var(--text-dark)',
                fontSize: '0.9rem',
                fontWeight: 500,
                fontFamily: 'var(--font-body)',
                transition: 'color 0.2s',
                position: 'relative',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--brand-green)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-dark)'}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Cart + Mobile Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Cart Icon */}
          <button
            onClick={toggleCart}
            id="cart-toggle"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              padding: '0.5rem',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            {totalItems > 0 && (
              <span style={{
                position: 'absolute',
                top: 0,
                right: 0,
                background: 'var(--brand-red-light)',
                color: 'white',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                fontSize: '0.7rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-dark)" strokeWidth="2">
              {mobileOpen ? (
                <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              ) : (
                <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <div className="mobile-nav" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(250, 243, 229, 0.98)',
          backdropFilter: 'blur(20px)',
          padding: '1.5rem 2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        }}>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                textDecoration: 'none',
                color: 'var(--text-dark)',
                fontSize: '1rem',
                fontWeight: 500,
                borderBottom: '1px solid rgba(0,0,0,0.05)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
