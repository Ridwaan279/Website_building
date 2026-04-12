import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about', label: 'Our Story' },
  { href: '#menu', label: 'Menu' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#hours', label: 'Visit Us' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255,248,230,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid #E6D8C3' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 16px rgba(43,29,20,0.08)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 22, color: '#E3A008', letterSpacing: '-0.02em' }}>
            Qashqai Kitchen
          </span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#7A6A5C', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 2 }}>
            Authentic Persian Cuisine
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 14,
                fontWeight: 500,
                color: '#2B1D14',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#E3A008'}
              onMouseLeave={e => e.target.style.color = '#2B1D14'}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:01144383225"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 14,
              fontWeight: 600,
              color: '#FFFFFF',
              background: '#8C2F1B',
              padding: '10px 20px',
              borderRadius: 10,
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.target.style.background = '#7a2818'}
            onMouseLeave={e => e.target.style.background = '#8C2F1B'}
          >
            Call Us
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-menu-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none' }}
          aria-label="Toggle menu"
        >
          <div style={{ width: 24, height: 2, background: '#2B1D14', marginBottom: 5, transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <div style={{ width: 24, height: 2, background: '#2B1D14', marginBottom: 5, opacity: mobileOpen ? 0 : 1, transition: 'all 0.3s' }} />
          <div style={{ width: 24, height: 2, background: '#2B1D14', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          style={{
            background: '#FFF8E6',
            borderTop: '1px solid #E6D8C3',
            padding: '16px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
          className="mobile-nav"
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 16,
                fontWeight: 500,
                color: '#2B1D14',
                textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '1px solid #E6D8C3',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:01144383225"
            style={{
              marginTop: 12,
              fontFamily: 'Inter, sans-serif',
              fontSize: 15,
              fontWeight: 600,
              color: '#FFFFFF',
              background: '#8C2F1B',
              padding: '12px 24px',
              borderRadius: 10,
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Call Us: 0114 438 3225
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}
