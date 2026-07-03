export default function Topbar() {
  return (
    <div style={{
      background: 'var(--green)',
      padding: '8px 48px',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '8px',
    }} className="topbar-container">
      
      {/* Left - contact info */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '24px', 
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between' // Desktop par balanced spaces ke liye
      }} className="topbar-content">
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

      <style>{`
        @media (max-width: 768px) {
          .topbar-container { 
            padding: 8px 16px !important; 
          }
          .topbar-content { 
            justify-content: center !important; /* Mobile par sab kuch center ho jaye */
            gap: 12px 16px !important; /* Items ke darmiyan behtar gap */
          }
        }
        @media (max-width: 480px) {
          .topbar-content {
            flex-direction: column !important; /* Choti screens par vertical stack ho jaye */
            gap: 8px !important;
          }
        }
      `}</style>
    </div>
  )
}