import { useState, useEffect } from 'react'

const base = import.meta.env.BASE_URL;

const slides = [
  `${base}images/hero-1.webp`,
  `${base}images/hero-2.png`,
  `${base}images/hero-3.png`,
]
export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: '#1a1008',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes kenburns {
          0%   { transform: scale(1.0); }
          100% { transform: scale(1.12); }
        }
      `}</style>

      {/* ── Slideshow: all 3 images stacked, only active one is visible ── */}
      {slides.map((src, i) => (
        <div
          key={src}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1.4s ease',
            animation: i === current ? 'kenburns 8s ease-in-out forwards' : 'none',
          }}
        />
      ))}

      {/* Dark overlay so text is always legible */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(26,16,8,0.58) 0%, rgba(26,16,8,0.50) 50%, rgba(26,16,8,0.72) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Vignette edges */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(26,16,8,0.60) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Decorative ornaments */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(227,160,8,0.14) 0%, transparent 70%)',
        }} />
        <svg style={{ position: 'absolute', top: 0, right: 0, opacity: 0.05, width: '55%', height: '100%' }} viewBox="0 0 600 800" fill="none">
          <pattern id="persian-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E3A008" strokeWidth="0.5"/>
            <circle cx="20" cy="20" r="1.5" fill="#E3A008" opacity="0.5"/>
          </pattern>
          <rect width="600" height="800" fill="url(#persian-grid)" />
        </svg>
        <svg style={{ position: 'absolute', top: 88, left: 40, opacity: 0.15 }} width="110" height="110" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="55" stroke="#E3A008" strokeWidth="1"/>
          <circle cx="60" cy="60" r="40" stroke="#E3A008" strokeWidth="0.8"/>
          <path d="M60 5 L60 115 M5 60 L115 60 M18 18 L102 102 M102 18 L18 102" stroke="#E3A008" strokeWidth="0.6"/>
          <circle cx="60" cy="60" r="8" fill="#E3A008" opacity="0.4"/>
        </svg>
        <svg style={{ position: 'absolute', bottom: 60, right: 56, opacity: 0.12 }} width="90" height="90" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="#E3A008" strokeWidth="1"/>
          <circle cx="50" cy="50" r="30" stroke="#E3A008" strokeWidth="0.8"/>
          <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M82 18 L18 82" stroke="#E3A008" strokeWidth="0.6"/>
          <circle cx="50" cy="50" r="6" fill="#E3A008" opacity="0.4"/>
        </svg>
      </div>

      {/* ── Main content ── */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        textAlign: 'center',
        maxWidth: 780,
        padding: '120px 24px 80px',
        margin: '0 auto',
      }}>
        {/* Top label */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 32,
          padding: '8px 20px',
          border: '1px solid rgba(227,160,8,0.45)',
          borderRadius: 999,
          background: 'rgba(227,160,8,0.1)',
          backdropFilter: 'blur(4px)',
        }}>
          <span style={{ fontSize: 18 }}>🌿</span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, color: '#E3A008', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            Sheffield's Only Authentic Persian Restaurant
          </span>
          <span style={{ fontSize: 18 }}>🌿</span>
        </div>

        {/* Main headline */}
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          fontSize: 'clamp(42px, 8vw, 80px)',
          lineHeight: 1.08,
          letterSpacing: '-0.03em',
          color: '#FFF8E6',
          marginBottom: 8,
          textShadow: '0 2px 24px rgba(26,16,8,0.6)',
        }}>
          Qashqai
          <span style={{ display: 'block', color: '#E3A008', fontStyle: 'italic' }}>Kitchen</span>
        </h1>

        {/* Ornamental divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, margin: '28px 0' }}>
          <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, rgba(227,160,8,0.6))' }} />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2 L14 9 L21 9 L15.5 13.5 L17.5 21 L12 16.5 L6.5 21 L8.5 13.5 L3 9 L10 9 Z" fill="#E3A008" opacity="0.9"/>
          </svg>
          <div style={{ width: 60, height: 1, background: 'linear-gradient(to left, transparent, rgba(227,160,8,0.6))' }} />
        </div>

        {/* Subheadline */}
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(16px, 2.5vw, 20px)',
          fontWeight: 300,
          color: 'rgba(255,248,230,0.82)',
          lineHeight: 1.7,
          maxWidth: 560,
          margin: '0 auto 48px',
          textShadow: '0 1px 8px rgba(26,16,8,0.5)',
        }}>
          Bringing the rich flavours of Persia to Sheffield — slow-cooked kebabs, aromatic stews, and warm hospitality rooted in{' '}
          <span style={{ color: '#E3A008', fontWeight: 500 }}>40 years of culinary heritage</span>.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64 }}>
          <a
            href="#menu"
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 600,
              color: '#2B1D14', background: '#E3A008',
              padding: '14px 32px', borderRadius: 10, textDecoration: 'none',
              letterSpacing: '0.02em', transition: 'all 0.2s',
              boxShadow: '0 4px 24px rgba(227,160,8,0.45)',
            }}
            onMouseEnter={e => { e.target.style.background = '#f0ae0a'; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.background = '#E3A008'; e.target.style.transform = 'none'; }}
          >
            Explore Our Menu
          </a>
          <a
            href="#hours"
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 600,
              color: '#FFF8E6', background: 'rgba(255,248,230,0.08)',
              padding: '14px 32px', borderRadius: 10, textDecoration: 'none',
              letterSpacing: '0.02em', border: '1.5px solid rgba(255,248,230,0.35)',
              backdropFilter: 'blur(4px)', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.target.style.borderColor = 'rgba(255,248,230,0.7)'; e.target.style.background = 'rgba(255,248,230,0.15)'; }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,248,230,0.35)'; e.target.style.background = 'rgba(255,248,230,0.08)'; }}
          >
            Find Us & Opening Hours
          </a>
        </div>

        {/* Delivery badges */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,248,230,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Also available on</span>
          <div style={{ display: 'flex', gap: 12 }}>
            <span style={{
              fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600, color: '#06C167',
              background: 'rgba(6,193,103,0.12)', border: '1px solid rgba(6,193,103,0.3)',
              padding: '6px 14px', borderRadius: 999,
            }}>Uber Eats</span>
            <span style={{
              fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600, color: '#FF8000',
              background: 'rgba(255,128,0,0.12)', border: '1px solid rgba(255,128,0,0.3)',
              padding: '6px 14px', borderRadius: 999,
            }}>Deliveroo</span>
          </div>
        </div>
      </div>

      {/* Slide indicator dots */}
      <div style={{
        position: 'absolute', bottom: 68, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: 8, zIndex: 4,
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? 24 : 8, height: 8, borderRadius: 999,
              background: i === current ? '#E3A008' : 'rgba(255,248,230,0.35)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'all 0.4s ease',
              boxShadow: i === current ? '0 0 8px rgba(227,160,8,0.6)' : 'none',
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        opacity: 0.45, zIndex: 4,
      }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#FFF8E6', letterSpacing: '0.12em', textTransform: 'uppercase' }}></span>
        <div style={{ width: 1, height: 28, background: 'linear-gradient(to bottom, rgba(255,248,230,0.6), transparent)' }} />
      </div>
    </section>
  )
}
