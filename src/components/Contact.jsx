import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '', company: '', country: '',
    email: '', product: '', quantity: '', message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const msg =
      `*New Quote - Asya Tailors*%0A%0A` +
      `*Name:* ${form.fullName}%0A` +
      `*Company:* ${form.company}%0A` +
      `*Country:* ${form.country}%0A` +
      `*Email:* ${form.email}%0A` +
      `*Product:* ${form.product}%0A` +
      `*Quantity:* ${form.quantity} pcs%0A` +
      `*Message:* ${form.message}`
    window.open(`https://wa.me/923150505488?text=${msg}`, '_blank')
    setSent(true)
  }

  const inp = {
    width: '100%', padding: '11px 14px',
    border: '1px solid var(--border)',
    background: 'var(--white)',
    fontFamily: 'var(--sans)', fontSize: '13px',
    color: 'var(--text)', outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" style={{ background: 'var(--cream)', padding: '72px 48px', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.2fr 1fr', gap: '40px', alignItems: 'start' }} className="contact-grid">

          {/* Left — Info */}
          <div>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '26px', fontWeight: 700, color: 'var(--text)', marginBottom: '14px', lineHeight: 1.2 }}>
              LET'S WORK<br/>TOGETHER
            </h3>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '13px', color: 'var(--text3)', lineHeight: '1.7', marginBottom: '28px' }}>
              Tell us about your project and we will get back to you quickly.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
              {[
                { icon: '📍', val: 'Islamabad, Pakistan' },
                { icon: '📞', val: '+92 315 0505488' },
                { icon: '✉️', val: 'info@asyatab.com' },
              ].map(({ icon, val }) => (
                <div key={val} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '16px', width: '20px', textAlign: 'center' }}>{icon}</span>
                  <span style={{ fontFamily: 'var(--sans)', fontSize: '13px', color: 'var(--text2)' }}>{val}</span>
                </div>
              ))}
            </div>

            <a href="https://wa.me/923150505488" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#25D366', color: 'white',
              padding: '11px 22px', textDecoration: 'none',
              fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: 600,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#1EBF5A'}
            onMouseLeave={e => e.currentTarget.style.background = '#25D366'}
            >
              <svg width="16" height="16" viewBox="0 0 32 32" fill="white"><path d="M16 2C8.268 2 2 8.268 2 16c0 2.484.672 4.81 1.845 6.807L2 30l7.405-1.818A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.27 19.13c-.344-.172-2.036-1.004-2.352-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.037-1.912-2.381-.2-.344-.021-.53.15-.701.155-.154.344-.402.516-.603.172-.2.23-.344.344-.573.115-.23.058-.43-.029-.603-.086-.172-.776-1.87-1.063-2.562-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.87s1.233 3.328 1.405 3.557c.172.23 2.427 3.707 5.88 5.197.822.355 1.463.567 1.963.726.824.263 1.574.226 2.167.137.661-.099 2.036-.832 2.323-1.635.287-.803.287-1.492.2-1.635-.086-.144-.316-.23-.66-.402z"/></svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Center — Form */}
          <div>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '26px', fontWeight: 700, color: 'var(--text)', marginBottom: '24px' }}>REQUEST A QUOTE</h3>

            {sent ? (
              <div style={{ background: '#E8F5E9', border: '1px solid #4CAF50', padding: '40px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '12px' }}>✅</div>
                <h4 style={{ fontFamily: 'var(--serif)', fontSize: '22px', color: 'var(--green)', marginBottom: '8px' }}>Request Sent!</h4>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '14px', color: 'var(--text3)' }}>We will reply within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '12px' }} className="form-row3">
                  {[
                    { name: 'fullName', ph: 'Full Name *', req: true },
                    { name: 'company', ph: 'Company Name *', req: true },
                    { name: 'country', ph: 'Country *', req: true },
                  ].map(({ name, ph, req }) => (
                    <input key={name} name={name} value={form[name]} onChange={handleChange}
                      required={req} placeholder={ph} style={inp}
                      onFocus={e => e.target.style.borderColor = 'var(--green)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '12px' }} className="form-row3">
                  <input name="email" type="email" value={form.email} onChange={handleChange}
                    required placeholder="Email *" style={inp}
                    onFocus={e => e.target.style.borderColor = 'var(--green)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                  <select name="product" value={form.product} onChange={handleChange} style={{ ...inp, cursor: 'pointer' }}
                    onFocus={e => e.target.style.borderColor = 'var(--green)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  >
                    <option value="">Product / Category *</option>
                    {["Women's Wear", "Men's Wear", "Medical Scrubs", "School Uniforms", "Hoodies & Sweatshirts", "Home Textiles", "Custom"].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <select name="quantity" value={form.quantity} onChange={handleChange} style={{ ...inp, cursor: 'pointer' }}
                    onFocus={e => e.target.style.borderColor = 'var(--green)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  >
                    <option value="">Quantity (Pcs) *</option>
                    {['50-100', '100-500', '500-1000', '1000-5000', '5000+'].map(q => (
                      <option key={q} value={q}>{q} pcs</option>
                    ))}
                  </select>
                </div>

                <textarea name="message" value={form.message} onChange={handleChange}
                  rows={4} placeholder="Message"
                  style={{ ...inp, resize: 'vertical', lineHeight: 1.6, marginBottom: '12px' }}
                  onFocus={e => e.target.style.borderColor = 'var(--green)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />

                <div style={{
                  border: '2px dashed var(--border)', padding: '14px',
                  textAlign: 'center', marginBottom: '16px',
                  fontFamily: 'var(--sans)', fontSize: '12px', color: 'var(--text3)',
                  cursor: 'pointer',
                }}>
                  ☁️ &nbsp; UPLOAD DESIGN / FILE (Optional)
                </div>

                <button type="submit" style={{
                  width: '100%', padding: '14px',
                  fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'white', background: 'var(--green)',
                  border: 'none', cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--green2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--green)'}
                >SEND REQUEST</button>
              </form>
            )}
          </div>

          {/* Right — Trust signals */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '56px' }}>
            {[
              { icon: '⚡', title: 'Fast Response', desc: 'Reply within 24 hours' },
              { icon: '🏆', title: 'Best Quality', desc: 'International standards' },
              { icon: '💰', title: 'Competitive Pricing', desc: 'Best value guaranteed' },
              { icon: '🌍', title: 'Worldwide Shipping', desc: 'We ship to 50+ countries' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '50%',
                  background: 'var(--cream2)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, fontSize: '18px',
                }}>{icon}</div>
                <div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: 700, color: 'var(--text)', marginBottom: '2px' }}>{title}</div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '12px', color: 'var(--text3)' }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .contact-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) { .form-row3 { grid-template-columns: 1fr !important; } #contact { padding: 56px 24px !important; } }
        input::placeholder, textarea::placeholder, select { color: #AAA; }
      `}</style>
    </section>
  )
}
