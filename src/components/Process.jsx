const STEPS = [
  { num: '1', icon: '📋', title: 'SEND YOUR DESIGN', desc: 'Share sketches, tech packs or references' },
  { num: '2', icon: '✂️', title: 'SAMPLING',          desc: 'We create a sample for your approval' },
  { num: '3', icon: '📐', title: 'PATTERN MAKING',    desc: 'Precise patterns for perfect fit' },
  { num: '4', icon: '🧵', title: 'PRODUCTION',        desc: 'Bulk manufacturing with quality checks' },
  { num: '5', icon: '🔍', title: 'QUALITY INSPECTION',desc: '100% inspection before dispatch' },
  { num: '6', icon: '📦', title: 'PACKING & SHIPPING', desc: 'Packed & shipped to your door' },
]

export default function Process() {
  return (
    <section id="process" style={{ background: 'var(--cream2)', padding: '72px 48px', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(26px, 3vw, 38px)',
            fontWeight: 700, color: 'var(--text)',
            letterSpacing: '0.04em', marginBottom: '14px',
          }}>OUR MANUFACTURING PROCESS</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <div style={{ width: '48px', height: '1px', background: 'var(--gold)' }}/>
            <span style={{ color: 'var(--gold)', fontSize: '16px' }}>✦</span>
            <div style={{ width: '48px', height: '1px', background: 'var(--gold)' }}/>
          </div>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }} className="steps-row">
          {STEPS.map(({ num, icon, title, desc }, i) => (
            <div key={num} style={{
              flex: '1', minWidth: '140px', maxWidth: '180px',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              textAlign: 'center', position: 'relative',
            }}>
              {/* Arrow between steps */}
              {i < STEPS.length - 1 && (
                <div style={{
                  position: 'absolute', top: '36px', left: 'calc(100% - 8px)',
                  width: '16px', height: '2px',
                  background: 'var(--gold)', opacity: 0.5,
                  zIndex: 1,
                }} className="step-arrow"/>
              )}

              {/* Circle */}
              <div style={{
                width: '72px', height: '72px', borderRadius: '50%',
                background: 'var(--white)',
                border: '2px solid var(--border)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                position: 'relative', zIndex: 2,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(45,74,53,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)'; }}
              >
                <span style={{ fontSize: '26px', lineHeight: 1 }}>{icon}</span>
              </div>

              <div style={{ fontFamily: 'var(--sans)', fontSize: '10px', color: 'var(--gold)', fontWeight: 700, marginBottom: '4px' }}>{num}</div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '11px', fontWeight: 700, color: 'var(--text)', letterSpacing: '0.05em', marginBottom: '6px', lineHeight: 1.3 }}>{title}</div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '11px', color: 'var(--text3)', lineHeight: 1.4 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-row { gap: 32px !important; }
          .step-arrow { display: none !important; }
          #process { padding: 56px 24px !important; }
          .steps-row > div { min-width: 120px !important; }
        }
      `}</style>
    </section>
  )
}
