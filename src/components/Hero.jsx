import heroBg from '../assets/hero-bg.jpg'

export default function Hero() {
  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '520px',
      height: '88vh',
      maxHeight: '700px',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Background image */}
      <img src={heroBg} alt="Asya Tailors Factory" style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: 'center',
        zIndex: 0,
      }} />

      {/* Dark gradient overlay — left heavier so text reads well */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(90deg, rgba(10,20,12,0.88) 0%, rgba(10,20,12,0.72) 45%, rgba(10,20,12,0.25) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        padding: '0 80px',
        maxWidth: '680px',
        animation: 'fadeUp 0.9s ease both',
      }} className="hero-content">
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <div style={{ width: '28px', height: '2px', background: 'var(--gold2)' }} />
          <span style={{
            fontFamily: 'var(--sans)', fontSize: '11px', fontWeight: 600,
            letterSpacing: '0.2em', color: 'var(--gold2)',
            textTransform: 'uppercase',
          }}>MANUFACTURING EXCELLENCE</span>
        </div>

        {/* Main headline */}
        <h1 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(38px, 5.5vw, 70px)',
          fontWeight: 800, lineHeight: 1.05,
          color: 'white', marginBottom: '12px',
          letterSpacing: '-0.01em',
        }}>
          OEM Garment<br />Manufacturing
        </h1>

        {/* Italic sub-line */}
        <p style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(22px, 3vw, 36px)',
          fontWeight: 400, fontStyle: 'italic',
          color: 'var(--gold2)', marginBottom: '24px',
          lineHeight: 1.2,
        }}>in Pakistan</p>

        {/* Description */}
        <p style={{
          fontFamily: 'var(--sans)',
          fontSize: '15px', color: 'rgba(255,255,255,0.82)',
          lineHeight: '1.75', maxWidth: '480px',
          marginBottom: '36px', fontWeight: 300,
        }}>
          Helping fashion brands bring their collections to life —
          from first sample to bulk production.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <a href="#contact" style={{
            fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'white', background: 'var(--green)',
            padding: '13px 28px', textDecoration: 'none',
            display: 'inline-block', transition: 'background 0.25s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--green2)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--green)'}
          >GET A QUOTE</a>

          <a href="#services" style={{
            fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'white', border: '2px solid rgba(255,255,255,0.6)',
            padding: '13px 28px', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            transition: 'all 0.25s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'transparent'; }}
          >OUR SERVICES <span>›</span></a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-content { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  )
}
