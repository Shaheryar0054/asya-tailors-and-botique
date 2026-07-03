const FEATURES = [
  { icon: '🏷️', title: 'PRIVATE LABEL MANUFACTURING', desc: 'Your Brand, Our Expertise' },
  { icon: '📦', title: 'LOW MOQ', desc: 'Flexible Minimum Order Quantity' },
  { icon: '⭐', title: 'PREMIUM QUALITY', desc: 'High Quality Fabrics & Finishing' },
  { icon: '🚚', title: 'ON-TIME DELIVERY', desc: 'Reliable Production & Timely Shipping' },
  { icon: '💰', title: 'COMPETITIVE PRICING', desc: 'Best Prices Without Compromising Quality' },
  { icon: '🌍', title: 'GLOBAL SHIPPING', desc: 'Worldwide Delivery Available' },
]

export default function Features() {
  return (
    <section style={{
      background: 'var(--white)',
      borderTop: '1px solid var(--border)',
      borderBottom: '3px solid var(--green)',
      padding: '0',
    }}>
      <div style={{
        maxWidth: '1280px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
      }} className="feat-grid">
        {FEATURES.map(({ icon, title, desc }, i) => (
          <div key={title} style={{
            padding: '28px 20px',
            textAlign: 'center',
            borderRight: i < FEATURES.length - 1 ? '1px solid var(--border)' : 'none',
            transition: 'background 0.2s',
            cursor: 'default',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--cream)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--white)'}
          >
            <div style={{ fontSize: '28px', marginBottom: '10px', lineHeight: 1 }}>{icon}</div>
            <div style={{
              fontFamily: 'var(--sans)', fontSize: '10px', fontWeight: 700,
              letterSpacing: '0.08em', color: 'var(--green)',
              marginBottom: '6px', lineHeight: 1.3,
            }}>{title}</div>
            <div style={{
              fontFamily: 'var(--sans)', fontSize: '11px',
              color: 'var(--text3)', lineHeight: 1.4,
            }}>{desc}</div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) { .feat-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 640px)  { .feat-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  )
}
