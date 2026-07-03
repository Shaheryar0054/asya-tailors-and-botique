const SERVICES = [
  { title: "WOMEN'S WEAR", sub: 'Elegant & Modest Styles', color: '#8B6D5C', icon: '👗' },
  { title: "MEN'S WEAR",   sub: 'Shirts, Trousers & More', color: '#4A6B7A', icon: '👔' },
  { title: 'MEDICAL SCRUBS', sub: 'High Quality & Comfortable', color: '#3D6B5C', icon: '🩺' },
  { title: 'SCHOOL UNIFORMS', sub: 'Durable & Smart', color: '#2D4A6B', icon: '🎒' },
  { title: 'HOODIES & SWEATSHIRTS', sub: 'Premium & Customizable', color: '#4A3D5C', icon: '🧥' },
  { title: 'HOME TEXTILES', sub: 'Quality for Every Home', color: '#6B5C3D', icon: '🛏️' },
]

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--cream)', padding: '72px 48px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Left col header + right grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '48px', alignItems: 'start' }} className="svc-wrap">

          {/* Left */}
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.18em', color: 'var(--green)',
              textTransform: 'uppercase', marginBottom: '12px',
            }}>OUR SERVICES</div>

            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(28px, 3vw, 42px)',
              fontWeight: 700, color: 'var(--text)',
              lineHeight: 1.15, marginBottom: '20px',
            }}>Complete Manufacturing Solutions</h2>

            <p style={{
              fontFamily: 'var(--sans)', fontSize: '14px',
              color: 'var(--text3)', lineHeight: '1.75',
              marginBottom: '32px',
            }}>
              From design to delivery, we provide end-to-end garment manufacturing services.
            </p>

            <a href="#contact" style={{
              display: 'inline-block',
              fontFamily: 'var(--sans)', fontSize: '12px', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'white', background: 'var(--green)',
              padding: '12px 28px', textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--green2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--green)'}
            >Get a Quote</a>
          </div>

          {/* Right grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
          }} className="svc-grid">
            {SERVICES.map(({ title, sub, color, icon }) => (
              <div key={title} style={{
                position: 'relative', aspectRatio: '1/1.1',
                background: color, overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Background icon */}
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '72px', opacity: 0.18,
                }}>{icon}</div>

                {/* Bottom label */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.75))',
                  padding: '28px 14px 14px',
                }}>
                  <div style={{
                    fontFamily: 'var(--sans)', fontSize: '11px', fontWeight: 700,
                    color: 'white', letterSpacing: '0.08em',
                    marginBottom: '3px', lineHeight: 1.2,
                  }}>{title}</div>
                  <div style={{
                    fontFamily: 'var(--sans)', fontSize: '10px',
                    color: 'rgba(255,255,255,0.7)', lineHeight: 1.3,
                  }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .svc-wrap { grid-template-columns: 1fr !important; }
          .svc-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #services { padding: 56px 24px !important; }
        }
        @media (max-width: 480px) {
          .svc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
