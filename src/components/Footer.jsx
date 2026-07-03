export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{
      background: 'var(--green2)',
      borderTop: '3px solid var(--gold)',
      padding: '20px 48px',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '12px',
      }}>
        <span style={{ fontFamily: 'var(--sans)', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
          © {year} Asya Tailors & Boutique. All Rights Reserved.
        </span>
        <div style={{ display: 'flex', gap: '20px' }}>
          {['Privacy Policy', 'Terms & Conditions'].map(l => (
            <a key={l} href="#" style={{
              fontFamily: 'var(--sans)', fontSize: '12px',
              color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'white'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
            >{l}</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {[{ l: 'f', t: 'Facebook' }, { l: '📸', t: 'Instagram' }, { l: 'in', t: 'LinkedIn' }].map(({ l, t }) => (
            <a key={t} href="#" title={t} style={{
              width: '30px', height: '30px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontSize: '11px', fontWeight: 700,
              textDecoration: 'none', transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
            >{l}</a>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) { footer { padding: 16px 24px !important; } }
      `}</style>
    </footer>
  )
}
