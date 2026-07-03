export default function Topbar() {
  return (
    <div style={{
      background: 'var(--green)',
      padding: '8px 48px',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '8px',
    }}>
      {/* Left - contact info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
        {[
          { icon: '✉', text: 'info@asyatab.com', href: 'mailto:info@asyatab.com' },
          { icon: '📞', text: '+92 315 0505488', href: 'tel:+923150505488' },
          { icon: '📍', text: 'Islamabad, Pakistan', href: '#contact' },
        ].map(({ icon, text, href }) => (
          <a key={text} href={href} style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            color: 'rgba(255,255,255,0.85)', fontSize: '12px',
            textDecoration: 'none', transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'white'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
          >
            <span>{icon}</span>
            <span style={{ fontFamily: 'var(--sans)' }}>{text}</span>
          </a>
        ))}
      </div>

      {/* Right - social icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {[
          { label: 'f', title: 'Facebook' },
          { label: '📷', title: 'Instagram' },
          { label: 'in', title: 'LinkedIn' },
        ].map(({ label, title }) => (
          <a key={title} href="#" title={title} style={{
            width: '26px', height: '26px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', textDecoration: 'none',
            fontSize: '11px', fontWeight: 700,
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
          >{label}</a>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="padding: 8px 48px"] { padding: 8px 16px !important; justify-content: center !important; }
        }
      `}</style>
    </div>
  )
}
