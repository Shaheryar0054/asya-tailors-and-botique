import { useState, useEffect } from 'react'

const LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT US', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'PRODUCTS', href: '#products' },
  { label: 'OUR PROCESS', href: '#process' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'CONTACT US', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('HOME')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav style={{
        background: 'var(--white)',
        borderBottom: '1px solid var(--border)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : '0 1px 4px rgba(0,0,0,0.04)',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px', height: '64px',
        position: 'sticky', top: 0, zIndex: 999,
        transition: 'box-shadow 0.3s',
      }}>
        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            width: '40px', height: '40px',
            background: 'var(--green)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: 'white', fontSize: '20px' }}>✂</span>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 700, color: 'var(--green)', lineHeight: 1, letterSpacing: '0.05em' }}>ASYA</div>
            <div style={{ fontSize: '7.5px', letterSpacing: '0.15em', color: 'var(--text3)', textTransform: 'uppercase', lineHeight: 1.3 }}>TAILORS & BOUTIQUE</div>
            <div style={{ fontSize: '7px', color: 'var(--gold)', fontStyle: 'italic', lineHeight: 1.2 }}>Stitching Quality, Building Trust</div>
          </div>
        </a>

        {/* Nav links */}
        <ul style={{ display: 'flex', gap: '24px', listStyle: 'none', alignItems: 'center' }} className="nav-links">
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href}
                onClick={() => setActive(label)}
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '12px', fontWeight: 500,
                  letterSpacing: '0.05em',
                  color: active === label ? 'var(--green)' : 'var(--text2)',
                  textDecoration: 'none',
                  paddingBottom: '4px',
                  borderBottom: active === label ? '2px solid var(--green)' : '2px solid transparent',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--green)' }}
                onMouseLeave={e => { if (active !== label) e.currentTarget.style.color = 'var(--text2)' }}
              >{label}</a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a href="#contact" className="nav-cta" style={{
          background: 'var(--green)', color: 'white',
          padding: '10px 22px', textDecoration: 'none',
          fontFamily: 'var(--sans)', fontSize: '12px', fontWeight: 600,
          letterSpacing: '0.05em', whiteSpace: 'nowrap',
          transition: 'background 0.2s',
          flexShrink: 0,
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'var(--green2)'}
        onMouseLeave={e => e.currentTarget.style.background = 'var(--green)'}
        >GET A QUOTE</a>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="burger" style={{
          display: 'none', background: 'none', border: 'none',
          cursor: 'pointer', flexDirection: 'column', gap: '5px', padding: '4px',
        }}>
          {[0,1,2].map(i => <span key={i} style={{ display: 'block', width: '24px', height: '2px', background: 'var(--green)' }}/>)}
        </button>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'var(--cream)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '28px',
        }}>
          <button onClick={() => setOpen(false)} style={{
            position: 'absolute', top: '20px', right: '20px',
            background: 'none', border: 'none',
            fontSize: '32px', cursor: 'pointer', color: 'var(--green)',
          }}>×</button>
          {LINKS.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setOpen(false)} style={{
              fontFamily: 'var(--serif)', fontSize: '26px', fontWeight: 600,
              color: 'var(--green)', textDecoration: 'none',
            }}>{label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} style={{
            background: 'var(--green)', color: 'white',
            padding: '12px 32px', textDecoration: 'none',
            fontFamily: 'var(--sans)', fontSize: '14px', fontWeight: 600,
          }}>GET A QUOTE</a>
        </div>
      )}

      <style>{`
        @media (max-width: 1100px) {
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .burger { display: flex !important; }
          nav { padding: 0 20px !important; }
        }
      `}</style>
    </>
  )
}
