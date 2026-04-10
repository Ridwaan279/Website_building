export default function About() {
  const pillars = [
    { icon: '🌾', label: 'Halal Certified', desc: '100% Halal ingredients, responsibly sourced' },
    { icon: '🔥', label: 'Freshly Made', desc: 'Cooked to order every single day' },
    { icon: '👨‍👩‍👧', label: 'Family Run', desc: 'Warmth and care in every dish' },
    { icon: '🏺', label: '40+ Years Heritage', desc: 'Recipes passed through generations' },
  ]

  return (
    <section id="about" style={{ background: '#FFF8E6', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 12,
            fontWeight: 600,
            color: '#E3A008',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}>Our Story</span>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 48px)',
            color: '#2B1D14',
            marginTop: 12,
            marginBottom: 16,
          }}>
            Born from Passion,<br />
            <span style={{ color: '#8C2F1B', fontStyle: 'italic' }}>Served with Heart</span>
          </h2>
          {/* Ornament */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <div style={{ width: 48, height: 1, background: '#E6D8C3' }} />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="3" fill="#E3A008"/>
              <circle cx="10" cy="10" r="7" stroke="#E3A008" strokeWidth="1" fill="none"/>
              <path d="M10 3 L10 17 M3 10 L17 10" stroke="#E3A008" strokeWidth="0.8"/>
            </svg>
            <div style={{ width: 48, height: 1, background: '#E6D8C3' }} />
          </div>
        </div>

        {/* Main content grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 48,
          alignItems: 'center',
          marginBottom: 64,
        }}>
          {/* Left: Story text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 17,
              fontWeight: 400,
              color: '#2B1D14',
              lineHeight: 1.8,
            }}>
              Qashqai Kitchen is Sheffield's only authentic Persian restaurant, proudly named after the{' '}
              <strong style={{ color: '#8C2F1B' }}>Qashqai tribe of southern Iran</strong>: nomadic people celebrated for their rich culture, artisan crafts, and vibrant traditions.
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 16,
              color: '#7A6A5C',
              lineHeight: 1.8,
            }}>
              Nestled in the heart of Nether Edge on Abbeydale Road, our yellow storefront has become a beloved landmark. Our family brings over <strong style={{ color: '#2B1D14' }}>40 years of culinary expertise</strong> from Iran, infusing every dish with the depth, fragrance, and warmth that defines true Persian hospitality.
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 16,
              color: '#7A6A5C',
              lineHeight: 1.8,
            }}>
              From slow-cooked lamb shanks to saffron-kissed joojeh kebabs, we take pride in using only the finest halal ingredients and traditional cooking methods that have stood the test of time.
            </p>

            {/* Quote */}
            <blockquote style={{
              marginTop: 8,
              paddingLeft: 20,
              borderLeft: '3px solid #E3A008',
            }}>
              <p style={{
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                fontSize: 18,
                color: '#2B1D14',
                lineHeight: 1.6,
              }}>
                "We don't just cook food — we share a piece of our culture, our family, and our home."
              </p>
            </blockquote>
          </div>

          {/* Right: Visual card with Persian pattern */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: 'linear-gradient(145deg, #2B1D14 0%, #4a2c18 100%)',
              borderRadius: 16,
              padding: 40,
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Background pattern */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.07 }} viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
                <pattern id="persian-tile" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <rect width="50" height="50" fill="none" stroke="#E3A008" strokeWidth="0.5"/>
                  <circle cx="25" cy="25" r="10" fill="none" stroke="#E3A008" strokeWidth="0.5"/>
                  <path d="M25 15 L25 35 M15 25 L35 25" stroke="#E3A008" strokeWidth="0.4"/>
                </pattern>
                <rect width="400" height="400" fill="url(#persian-tile)"/>
              </svg>

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Restaurant address card */}
                <div style={{ marginBottom: 32, textAlign: 'center' }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>🏛️</div>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 24,
                    fontWeight: 700,
                    color: '#E3A008',
                    marginBottom: 8,
                  }}>
                    Find Us in Sheffield
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,248,230,0.75)', lineHeight: 1.6 }}>
                    74 Abbeydale Road<br />
                    Nether Edge / Sharrow<br />
                    Sheffield, S7 1FD
                  </p>
                </div>

                {/* Highlights */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[
                    { num: '40+', label: 'Years of Heritage' },
                    { num: '100%', label: 'Halal Certified' },
                    { num: '3,100+', label: 'Instagram Fans' },
                    { num: '#1', label: 'Persian in Sheffield' },
                  ].map(stat => (
                    <div key={stat.label} style={{
                      background: 'rgba(227,160,8,0.12)',
                      border: '1px solid rgba(227,160,8,0.25)',
                      borderRadius: 10,
                      padding: '16px 12px',
                      textAlign: 'center',
                    }}>
                      <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 26, fontWeight: 700, color: '#E3A008' }}>{stat.num}</div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,248,230,0.6)', marginTop: 4, letterSpacing: '0.04em' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div style={{
              position: 'absolute',
              top: -16,
              right: -16,
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: '#E3A008',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(227,160,8,0.4)',
            }}>
              <span style={{ fontSize: 32 }}>🌙</span>
            </div>
          </div>
        </div>

        {/* 4 pillars strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 1,
          background: '#E6D8C3',
          borderRadius: 16,
          overflow: 'hidden',
        }}>
          {pillars.map((p, i) => (
            <div key={i} style={{
              background: '#FFF8E6',
              padding: '28px 24px',
              textAlign: 'center',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#fff3d6'}
              onMouseLeave={e => e.currentTarget.style.background = '#FFF8E6'}
            >
              <div style={{ fontSize: 28, marginBottom: 10 }}>{p.icon}</div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontWeight: 700, color: '#2B1D14', marginBottom: 6 }}>{p.label}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#7A6A5C', lineHeight: 1.5 }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
