import { useState, useEffect, useRef } from 'react'

const STATS = [
  { end: 10,   suffix: '+',    label: 'Years of Experience' },
  { end: 500,  suffix: '+',    label: 'Happy Clients' },
  { end: 1000, suffix: '+',    label: 'Orders Completed' },
  { end: 50,   suffix: '+',    label: 'Export Countries' },
]

const REASONS = [
  'Experienced & Skilled Tailoring Team',
  'Modern Machinery & Quality Control',
  'Small & Bulk Orders Welcome',
  'Ethical Manufacturing Practices',
  'Competitive Pricing, On-time Delivery',
  'Confidentiality & IP Protection',
]

function useCountUp(end, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * end))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(end)
    }
    requestAnimationFrame(step)
  }, [start, end, duration])
  return count
}

function StatCard({ end, suffix, label, start }) {
  const count = useCountUp(end, 1800, start)
  return (
    <div style={{ textAlign: 'center', padding: '20px 16px' }}>
      <div style={{
        fontFamily: 'var(--serif)', fontSize: '36px', fontWeight: 700,
        color: 'var(--green)', lineHeight: 1,
      }}>{count}{suffix}</div>
      <div style={{
        fontFamily: 'var(--sans)', fontSize: '11px',
        color: 'var(--text3)', marginTop: '6px', lineHeight: 1.3,
      }}>{label}</div>
    </div>
  )
}

export default function WhyUs() {
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect() } }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" style={{ background: 'var(--white)', padding: '72px 48px', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="why-grid">

          {/* Left */}
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.18em', color: 'var(--green)',
              textTransform: 'uppercase', marginBottom: '12px',
            }}>WHY CHOOSE US</div>

            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 700, color: 'var(--text)',
              lineHeight: 1.15, marginBottom: '20px',
            }}>Your Trusted Manufacturing<br />
              <span style={{ fontStyle: 'italic', color: 'var(--green)' }}>Partner in Pakistan</span>
            </h2>

            <p style={{
              fontFamily: 'var(--sans)', fontSize: '14px',
              color: 'var(--text3)', lineHeight: '1.75', marginBottom: '28px',
            }}>
              At Asya Tailors & Boutique, we combine skilled craftsmanship with modern techniques
              to deliver premium quality garments for brands around the world.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
              {REASONS.map(r => (
                <div key={r} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '22px', height: '22px', borderRadius: '50%',
                    background: 'var(--green)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <span style={{ color: 'white', fontSize: '11px', fontWeight: 700 }}>✓</span>
                  </div>
                  <span style={{ fontFamily: 'var(--sans)', fontSize: '13px', color: 'var(--text2)' }}>{r}</span>
                </div>
              ))}
            </div>

            <a href="#about" style={{
              display: 'inline-block',
              fontFamily: 'var(--sans)', fontSize: '12px', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'white', background: 'var(--green)',
              padding: '12px 28px', textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--green2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--green)'}
            >ABOUT US</a>
          </div>

          {/* Right — video placeholder + stats */}
          <div>
            {/* Video/image placeholder */}
            <div style={{
              width: '100%', aspectRatio: '16/10',
              background: 'linear-gradient(135deg, #2D4A35, #1E3225)',
              position: 'relative', overflow: 'hidden',
              marginBottom: '20px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{
                width: '64px', height: '64px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'background 0.2s',
              }}>
                <span style={{ color: 'white', fontSize: '24px', marginLeft: '4px' }}>▶</span>
              </div>
              <div style={{
                position: 'absolute', top: '12px', left: '12px',
                background: 'rgba(250,248,243,0.9)',
                padding: '8px 12px',
              }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '12px', fontWeight: 700, color: 'var(--green)' }}>ASYA</div>
                <div style={{ fontSize: '8px', color: 'var(--text3)', letterSpacing: '0.1em' }}>TAILORS & BOUTIQUE</div>
              </div>
              <div style={{
                position: 'absolute', bottom: '12px', right: '12px',
                fontFamily: 'var(--sans)', fontSize: '10px',
                color: 'rgba(255,255,255,0.6)',
              }}>Add factory video here</div>
            </div>

            {/* Stats grid */}
            <div ref={ref} style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
              background: 'var(--green)',
            }}>
              {STATS.map((s, i) => (
                <div key={s.label} style={{
                  borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                  padding: '20px 12px', textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: 'var(--serif)', fontSize: '28px', fontWeight: 700,
                    color: 'white', lineHeight: 1,
                  }}>
                    <StatCount end={s.end} suffix={s.suffix} start={started} />
                  </div>
                  <div style={{
                    fontFamily: 'var(--sans)', fontSize: '10px',
                    color: 'rgba(255,255,255,0.7)', marginTop: '6px', lineHeight: 1.3,
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; }
          #about { padding: 56px 24px !important; }
        }
      `}</style>
    </section>
  )
}

function StatCount({ end, suffix, start }) {
  const count = useCountUp(end, 1800, start)
  return <>{count}{suffix}</>
}
