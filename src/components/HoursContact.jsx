const hours = [
  { day: 'Monday', time: '5:00 PM – 11:00 PM', open: true },
  { day: 'Tuesday', time: 'Closed', open: false },
  { day: 'Wednesday', time: '5:00 PM – 11:00 PM', open: true },
  { day: 'Thursday', time: '5:00 PM – 11:00 PM', open: true },
  { day: 'Friday', time: '5:00 PM – 11:00 PM', open: true },
  { day: 'Saturday', time: '1:00 PM – 11:00 PM', open: true },
  { day: 'Sunday', time: '1:00 PM – 11:00 PM', open: true },
]

const today = new Date().toLocaleDateString('en-GB', { weekday: 'long' })

export default function HoursContact() {
  return (
    <section id="hours" style={{ background: '#FFF8E6', padding: '96px 24px' }}>
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
          }}>Visit Us</span>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 48px)',
            color: '#2B1D14',
            marginTop: 12,
            marginBottom: 16,
          }}>
            Come Find Us
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#7A6A5C', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            We're located on Abbeydale Road in the heart of Sheffield's vibrant Nether Edge neighbourhood.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 32,
          alignItems: 'start',
        }}>
          {/* Opening Hours */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #E6D8C3',
            borderRadius: 16,
            overflow: 'hidden',
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #2B1D14, #3d2a1a)',
              padding: '28px 32px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 24 }}>🕐</span>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, color: '#E3A008' }}>
                  Opening Hours
                </h3>
              </div>
            </div>
            <div style={{ padding: '8px 0' }}>
              {hours.map((h, i) => {
                const isToday = h.day === today
                return (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '14px 32px',
                      background: isToday ? 'rgba(227,160,8,0.06)' : 'transparent',
                      borderLeft: isToday ? '3px solid #E3A008' : '3px solid transparent',
                      borderBottom: i < hours.length - 1 ? '1px solid #E6D8C3' : 'none',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 14,
                        fontWeight: isToday ? 600 : 500,
                        color: isToday ? '#2B1D14' : '#2B1D14',
                      }}>
                        {h.day}
                      </span>
                      {isToday && (
                        <span style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: 10,
                          fontWeight: 700,
                          color: '#E3A008',
                          background: 'rgba(227,160,8,0.15)',
                          padding: '2px 8px',
                          borderRadius: 999,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                        }}>Today</span>
                      )}
                    </div>
                    <span style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 14,
                      fontWeight: h.open ? 500 : 400,
                      color: h.open ? (isToday ? '#E3A008' : '#7A6A5C') : '#8C2F1B',
                    }}>
                      {h.time}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right column: Contact + Map placeholder */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Contact card */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid #E6D8C3',
              borderRadius: 16,
              overflow: 'hidden',
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #8C2F1B, #a3381f)',
                padding: '28px 32px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 24 }}>📍</span>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, color: '#FFF8E6' }}>
                    Contact & Location
                  </h3>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                {[
                  {
                    icon: '📍',
                    label: 'Address',
                    value: '74 Abbeydale Road, Nether Edge / Sharrow, Sheffield, S7 1FD',
                    href: 'https://maps.google.com/?q=74+Abbeydale+Road+Sheffield+S7+1FD',
                    linkLabel: 'Get Directions',
                  },
                  {
                    icon: '📞',
                    label: 'Phone',
                    value: '0114 438 3225',
                    href: 'tel:01144383225',
                    linkLabel: 'Call Now',
                  },
                  {
                    icon: '✉️',
                    label: 'Email',
                    value: 'Qashqaikitchen74@gmail.com',
                    href: 'mailto:Qashqaikitchen74@gmail.com',
                    linkLabel: 'Send Email',
                  },
                  {
                    icon: '📸',
                    label: 'Instagram',
                    value: '@qashqai_kitchen',
                    href: 'https://instagram.com/qashqai_kitchen',
                    linkLabel: 'Follow Us',
                  },
                ].map((c, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 16,
                      padding: '16px 32px',
                      borderBottom: i < 3 ? '1px solid #E6D8C3' : 'none',
                    }}
                  >
                    <span style={{ fontSize: 18, marginTop: 2 }}>{c.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, color: '#7A6A5C', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>
                        {c.label}
                      </div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#2B1D14', lineHeight: 1.5, marginBottom: 6 }}>
                        {c.value}
                      </div>
                      <a
                        href={c.href}
                        target={c.href.startsWith('http') ? '_blank' : undefined}
                        rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: 13,
                          fontWeight: 600,
                          color: '#E3A008',
                          textDecoration: 'none',
                        }}
                        onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                        onMouseLeave={e => e.target.style.textDecoration = 'none'}
                      >
                        {c.linkLabel} →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery card */}
            <div style={{
              background: 'linear-gradient(135deg, #2B1D14, #3d2a1a)',
              border: '1px solid rgba(227,160,8,0.2)',
              borderRadius: 16,
              padding: '28px 32px',
            }}>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 20,
                fontWeight: 700,
                color: '#E3A008',
                marginBottom: 8,
              }}>
                Order Delivery
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,248,230,0.65)', marginBottom: 20, lineHeight: 1.6 }}>
                Can't make it in? Order the same authentic Persian flavours delivered straight to your door.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <div style={{
                  flex: 1,
                  minWidth: 120,
                  background: 'rgba(6,193,103,0.12)',
                  border: '1px solid rgba(6,193,103,0.3)',
                  borderRadius: 10,
                  padding: '16px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 700, color: '#06C167', marginBottom: 4 }}>Uber Eats</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,248,230,0.5)' }}>Search "Qashqai Kitchen"</div>
                </div>
                <div style={{
                  flex: 1,
                  minWidth: 120,
                  background: 'rgba(255,128,0,0.12)',
                  border: '1px solid rgba(255,128,0,0.3)',
                  borderRadius: 10,
                  padding: '16px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 700, color: '#FF8000', marginBottom: 4 }}>Deliveroo</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,248,230,0.5)' }}>Search "Qashqai Kitchen"</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map embed placeholder */}
        <div style={{ marginTop: 32 }}>
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #E6D8C3',
            borderRadius: 16,
            overflow: 'hidden',
          }}>
            <iframe
              title="Qashqai Kitchen on Google Maps"
              width="100%"
              height="320"
              style={{ border: 'none', display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380.2!2d-1.4835!3d53.3672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDIyJzAyLjAiTiAxwrAyOCc1OS4wIlc!5e0!3m2!1sen!2suk!4v1600000000000!5m2!1sen!2suk"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
