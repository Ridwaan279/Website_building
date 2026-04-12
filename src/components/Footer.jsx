export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#1a1008', color: '#FFF8E6' }}>
      {/* Top decorative band */}
      <div style={{
        height: 4,
        background: 'linear-gradient(to right, #2B1D14, #E3A008, #8C2F1B, #E3A008, #2B1D14)',
      }} />

      {/* Main footer content */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 48,
          marginBottom: 56,
        }}>
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 26, color: '#E3A008', marginBottom: 4 }}>
                Qashqai Kitchen
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#7A6A5C', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Authentic Persian Cuisine
              </div>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,248,230,0.55)', lineHeight: 1.8, marginBottom: 24, maxWidth: 260 }}>
              Sheffield's most authentic Persian restaurant. Named after the nomadic Qashqai tribe of Iran — people of rich culture, tradition and warm hospitality.
            </p>
            {/* Social links */}
            <div style={{ display: 'flex', gap: 12 }}>
              <a
                href="https://instagram.com/qashqai_kitchen"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'rgba(255,248,230,0.06)',
                  border: '1px solid rgba(255,248,230,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  fontSize: 18,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(227,160,8,0.15)'; e.currentTarget.style.borderColor = 'rgba(227,160,8,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,248,230,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,248,230,0.12)'; }}
                aria-label="Instagram"
              >
                📸
              </a>
              <a
                href="https://facebook.com/Persian_QashQai_kitchen"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'rgba(255,248,230,0.06)',
                  border: '1px solid rgba(255,248,230,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  fontSize: 18,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(227,160,8,0.15)'; e.currentTarget.style.borderColor = 'rgba(227,160,8,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,248,230,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,248,230,0.12)'; }}
                aria-label="Facebook"
              >
                📘
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontWeight: 700, color: '#FFF8E6', marginBottom: 20 }}>
              Quick Links
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { href: '#about', label: 'Our Story' },
                { href: '#menu', label: 'Menu' },
                { href: '#why-us', label: 'Why Choose Us' },
                { href: '#hours', label: 'Opening Hours' },
                { href: '#contact', label: 'Contact Us' },
              ].map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 14,
                    color: 'rgba(255,248,230,0.55)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.color = '#E3A008'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,248,230,0.55)'}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Opening Hours summary */}
          <div>
            <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontWeight: 700, color: '#FFF8E6', marginBottom: 20 }}>
              Opening Hours
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { days: 'Mon, Wed–Fri', hours: '5:00 PM – 11:00 PM' },
                { days: 'Sat – Sun', hours: '1:00 PM – 11:00 PM' },
                { days: 'Tuesday', hours: 'Closed', closed: true },
              ].map((h, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,248,230,0.55)' }}>{h.days}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: h.closed ? '#8C2F1B' : 'rgba(255,248,230,0.75)', fontWeight: 500 }}>{h.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontWeight: 700, color: '#FFF8E6', marginBottom: 20 }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#7A6A5C', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Address</div>
                <a
                  href="https://maps.google.com/?q=74+Abbeydale+Road+Sheffield+S7+1FD"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,248,230,0.65)', textDecoration: 'none', lineHeight: 1.6 }}
                  onMouseEnter={e => e.target.style.color = '#E3A008'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,248,230,0.65)'}
                >
                  74 Abbeydale Road<br/>Sheffield, S7 1FD
                </a>
              </div>
              <div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#7A6A5C', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Phone</div>
                <a
                  href="tel:01144383225"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,248,230,0.65)', textDecoration: 'none' }}
                  onMouseEnter={e => e.target.style.color = '#E3A008'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,248,230,0.65)'}
                >
                  0114 438 3225
                </a>
              </div>
              <div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#7A6A5C', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Email</div>
                <a
                  href="mailto:Qashqaikitchen74@gmail.com"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,248,230,0.65)', textDecoration: 'none' }}
                  onMouseEnter={e => e.target.style.color = '#E3A008'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,248,230,0.65)'}
                >
                  Qashqaikitchen74@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,248,230,0.08)', marginBottom: 32 }} />

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,248,230,0.35)' }}>
            © {year} Qashqai Kitchen. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 12,
              color: 'rgba(255,248,230,0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}>
              <span style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#4CAF50',
                display: 'inline-block',
                boxShadow: '0 0 6px rgba(76,175,80,0.6)',
              }} />
              100% Halal Certified
            </span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,248,230,0.3)' }}>
              Sheffield, South Yorkshire
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
