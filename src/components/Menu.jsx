import { useState } from 'react'

const menuData = {
  starters: {
    label: 'Starters',
    icon: '🥗',
    description: 'Begin your Persian journey',
    items: [
      {
        name: 'Kashke Bademjan',
        description: 'Slow-roasted aubergine blended with kashk (Persian whey), fried onions, garlic, and dried mint. A classic Persian dip.',
        price: '£5.99',
        tag: 'Signature',
        vegetarian: true,
      },
      {
        name: 'Homemade Hummus',
        description: 'Freshly prepared chickpea hummus with tahini, lemon, and olive oil, served with warm Persian bread.',
        price: '£4.99',
        vegetarian: true,
      },
      {
        name: 'Falafel',
        description: 'Golden, crispy falafel made from freshly ground chickpeas and herbs, served with a tangy dip.',
        price: '£5.99',
        vegetarian: true,
      },
      {
        name: 'Starter Sharing Platter',
        description: 'A generous selection of all our starters — perfect for sharing and exploring the flavours of Persia.',
        price: '£19.99',
        tag: 'Great for Sharing',
        vegetarian: true,
      },
    ],
  },
  grills: {
    label: 'Grills & Kebabs',
    icon: '🔥',
    description: 'Authentic flame-grilled Persian classics',
    items: [
      {
        name: 'Kebab Koobideh',
        description: 'Our iconic minced lamb skewer, seasoned with onion, turmeric, and spices — char-grilled to perfection and served with saffron rice and grilled tomato.',
        price: 'See menu',
        tag: 'Most Popular',
      },
      {
        name: 'Joojeh Kebab',
        description: 'Tender chicken pieces marinated overnight in saffron, lemon, and spices, then grilled on skewers. A fragrant Persian favourite.',
        price: 'See menu',
        tag: 'Saffron Marinated',
      },
      {
        name: 'Slow-Cooked Lamb Shank',
        description: 'A whole lamb shank braised for hours in aromatic Persian spices until fall-off-the-bone tender, served with fragrant basmati rice.',
        price: 'See menu',
        tag: 'Slow Cooked',
      },
      {
        name: 'Lamb Neck Platter',
        description: 'A magnificent sharing platter of slow-cooked lamb neck, beautifully presented with rice and accompaniments. Perfect for four.',
        price: 'See menu',
        tag: 'Serves 4',
      },
    ],
  },
  stews: {
    label: 'Persian Stews',
    icon: '🏺',
    description: 'Khoresh — slow-simmered Persian comfort',
    items: [
      {
        name: 'Khoresh Gheymeh Bademjan',
        description: 'A rich, aromatic Persian stew of split peas and aubergine slow-simmered with lamb, dried limes, and saffron. Served with fluffy basmati rice.',
        price: 'See menu',
        tag: 'Traditional',
      },
      {
        name: 'Fragrant Persian Rice',
        description: 'Perfectly steamed basmati rice with a crispy golden tahdig (rice crust) — a Persian staple, often served with a sprinkle of saffron.',
        price: 'See menu',
        vegetarian: true,
      },
      {
        name: 'Freshly Baked Bread',
        description: 'Traditional Persian flatbread baked fresh in-house, served warm — ideal for scooping up dips and stews.',
        price: 'See menu',
        vegetarian: true,
      },
    ],
  },
  dessertsDrinks: {
    label: 'Desserts & Drinks',
    icon: '🍵',
    description: 'A sweet, aromatic finish',
    items: [
      {
        name: 'Homemade Cakes',
        description: 'Rotating selection of Persian-inspired homemade cakes, baked fresh. Ask your server for today\'s selection.',
        price: 'See menu',
        vegetarian: true,
      },
      {
        name: 'Persian Saffron Tea',
        description: 'A beautifully fragrant tea infused with saffron and rose water — the perfect end to a Persian meal.',
        price: 'See menu',
        tag: 'House Favourite',
        vegetarian: true,
      },
      {
        name: 'Doogh Laban',
        description: 'Traditional Persian yoghurt drink, lightly salted and refreshing — the authentic accompaniment to any Persian feast.',
        price: 'See menu',
        vegetarian: true,
      },
      {
        name: 'Non-Alcoholic Beer',
        description: 'A selection of premium non-alcoholic beers, perfectly paired with our grills and mains.',
        price: 'See menu',
      },
    ],
  },
}

const categoryKeys = Object.keys(menuData)

export default function Menu() {
  const [active, setActive] = useState('starters')
  const cat = menuData[active]

  return (
    <section id="menu" style={{ background: '#2B1D14', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 12,
            fontWeight: 600,
            color: '#E3A008',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}>Taste of Persia</span>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 48px)',
            color: '#FFF8E6',
            marginTop: 12,
            marginBottom: 16,
          }}>
            Our Menu
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: 'rgba(255,248,230,0.6)', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            Every dish is crafted from authentic Persian recipes, using only halal ingredients and traditional methods.
          </p>
        </div>

        {/* Category tabs */}
        <div style={{
          display: 'flex',
          gap: 8,
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 48,
        }}>
          {categoryKeys.map(key => (
            <button
              key={key}
              onClick={() => setActive(key)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 14,
                fontWeight: 600,
                color: active === key ? '#2B1D14' : 'rgba(255,248,230,0.7)',
                background: active === key ? '#E3A008' : 'rgba(255,248,230,0.06)',
                border: `1px solid ${active === key ? '#E3A008' : 'rgba(255,248,230,0.15)'}`,
                borderRadius: 999,
                padding: '10px 22px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span>{menuData[key].icon}</span>
              {menuData[key].label}
            </button>
          ))}
        </div>

        {/* Category description */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 17, color: 'rgba(255,248,230,0.55)' }}>
            {cat.description}
          </p>
        </div>

        {/* Menu items grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
          marginBottom: 48,
        }}>
          {cat.items.map((item, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,248,230,0.04)',
                border: '1px solid rgba(255,248,230,0.1)',
                borderRadius: 16,
                padding: '28px 24px',
                transition: 'all 0.25s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(227,160,8,0.08)'
                e.currentTarget.style.borderColor = 'rgba(227,160,8,0.35)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,248,230,0.04)'
                e.currentTarget.style.borderColor = 'rgba(255,248,230,0.1)'
                e.currentTarget.style.transform = 'none'
              }}
            >
              {/* Tag */}
              {item.tag && (
                <div style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: '#8C2F1B',
                  color: '#FFF8E6',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: 999,
                }}>
                  {item.tag}
                </div>
              )}
              {/* Vegetarian badge */}
              {item.vegetarian && (
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                  background: 'rgba(6,150,60,0.15)',
                  border: '1px solid rgba(6,150,60,0.3)',
                  color: '#4CAF50',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 10,
                  fontWeight: 600,
                  padding: '3px 8px',
                  borderRadius: 999,
                  marginBottom: 10,
                  letterSpacing: '0.06em',
                }}>
                  🌱 Vegetarian
                </div>
              )}
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                fontSize: 20,
                color: '#FFF8E6',
                marginBottom: 10,
                lineHeight: 1.3,
                paddingRight: item.tag ? 80 : 0,
              }}>
                {item.name}
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 14,
                color: 'rgba(255,248,230,0.6)',
                lineHeight: 1.7,
                marginBottom: 16,
              }}>
                {item.description}
              </p>
              <div style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 22,
                fontWeight: 700,
                color: '#E3A008',
              }}>
                {item.price}
              </div>
            </div>
          ))}
        </div>

        {/* Halal banner */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          padding: '20px 32px',
          background: 'rgba(227,160,8,0.1)',
          border: '1px solid rgba(227,160,8,0.25)',
          borderRadius: 12,
          flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: 24 }}>☪️</span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,248,230,0.8)', textAlign: 'center', lineHeight: 1.6 }}>
            <strong style={{ color: '#E3A008' }}>100% Halal Certified</strong> — All our meat is sourced from certified halal suppliers. All dishes are prepared fresh daily.
          </span>
        </div>
      </div>
    </section>
  )
}
