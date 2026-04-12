const reasons = [
  {
    icon: '🏛️',
    title: "Sheffield's Only Authentic Persian",
    body: 'We are the one and only authentic Persian restaurant in Sheffield — serving real home-style Persian cuisine, not a fusion imitation. Every dish is true to its origins.',
    color: '#E3A008',
  },
  {
    icon: '👨‍🍳',
    title: '40 Years of Culinary Heritage',
    body: 'Our chef and founder brings over four decades of Persian cooking expertise, carrying recipes handed down through generations with pride and precision.',
    color: '#8C2F1B',
  },
  {
    icon: '🌿',
    title: 'Freshly Cooked, Every Day',
    body: 'No frozen short-cuts. Everything from our hummus to our lamb shanks is made fresh each day, using the finest ingredients available.',
    color: '#E3A008',
  },
  {
    icon: '☪️',
    title: 'Fully Halal Certified',
    body: 'All meat is sourced from certified halal suppliers. Our kitchen operates with strict halal practices so every guest can dine with full confidence and peace of mind.',
    color: '#8C2F1B',
  },
  {
    icon: '🤝',
    title: 'Warm Family Hospitality',
    body: "We treat every guest like a guest in our home. The Persian tradition of 'ta'arof' — generous, gracious hospitality — lives in everything we do.",
    color: '#E3A008',
  },
  {
    icon: '🛵',
    title: 'Delivery & Dine In',
    body: 'Can\'t visit us? Order from the comfort of home via UberEats or Deliveroo — same quality, same love, delivered to your door.',
    color: '#8C2F1B',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" style={{ background: '#FFF8E6', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 12,
            fontWeight: 600,
            color: '#E3A008',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}>Why Choose Us</span>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 48px)',
            color: '#2B1D14',
            marginTop: 12,
            marginBottom: 16,
          }}>
            More Than a Restaurant —<br />
            <span style={{ color: '#8C2F1B', fontStyle: 'italic' }}>A Cultural Experience</span>
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

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
          marginBottom: 64,
        }}>
          {reasons.map((r, i) => (
            <div
              key={i}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E6D8C3',
                borderRadius: 16,
                padding: '32px 28px',
                transition: 'all 0.25s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(43,29,20,0.1)'
                e.currentTarget.style.borderColor = r.color + '66'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = '#E6D8C3'
              }}
            >
              {/* Icon circle */}
              <div style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                background: r.color + '18',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                marginBottom: 20,
              }}>
                {r.icon}
              </div>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                fontSize: 20,
                color: '#2B1D14',
                marginBottom: 12,
                lineHeight: 1.3,
              }}>
                {r.title}
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 14,
                color: '#7A6A5C',
                lineHeight: 1.75,
              }}>
                {r.body}
              </p>
              {/* Bottom accent */}
              <div style={{
                marginTop: 20,
                width: 32,
                height: 2,
                borderRadius: 999,
                background: r.color,
                opacity: 0.5,
              }} />
            </div>
          ))}
        </div>

        {/* Full-width CTA banner */}
        <div style={{
          background: 'linear-gradient(135deg, #2B1D14 0%, #3d2a1a 50%, #2B1D14 100%)',
          borderRadius: 16,
          padding: '48px 40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Subtle background texture */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 50%, rgba(227,160,8,0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(20px, 3vw, 28px)',
              color: '#FFF8E6',
              lineHeight: 1.5,
              marginBottom: 32,
            }}>
              "Experience the warmth of Iran right here in Sheffield.<br/>
              <span style={{ color: '#E3A008' }}>Your table is waiting.</span>"
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#hours"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#2B1D14',
                  background: '#E3A008',
                  padding: '14px 32px',
                  borderRadius: 10,
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(227,160,8,0.35)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => e.target.style.background = '#f0ae0a'}
                onMouseLeave={e => e.target.style.background = '#E3A008'}
              >
                See Opening Hours
              </a>
              <a href="tel:01144383225"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#FFF8E6',
                  background: 'transparent',
                  padding: '14px 32px',
                  borderRadius: 10,
                  textDecoration: 'none',
                  border: '1.5px solid rgba(255,248,230,0.3)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.target.style.borderColor = 'rgba(255,248,230,0.7)'; e.target.style.background = 'rgba(255,248,230,0.08)' }}
                onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,248,230,0.3)'; e.target.style.background = 'transparent' }}
              >
                Call 0114 438 3225
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
