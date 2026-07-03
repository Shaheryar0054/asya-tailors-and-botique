// Apni sabhi images ko yahan import karein (paths apne mutabiq check kar lein)
import womensWearImg from '../assets/womens-wear.jpg';
import mensWearImg from '../assets/mens-wear.jpg';
import medicalScrubsImg from '../assets/medical-scrubs.jpg';
import schoolUniformsImg from '../assets/school-uniforms.jpg';
// Abayas ke liye nai image import karein
import abayasImg from '../assets/womens-abayas.jpg'; // Farzi naam, apni image ka path dein
import homeTextilesImg from '../assets/home-textiles.jpg';

const SERVICES = [
  { title: "WOMEN'S WEAR", sub: 'Elegant & Modest Styles', image: womensWearImg },
  { title: "MEN'S WEAR",   sub: 'Shirts, Trousers & More', image: mensWearImg },
  { title: 'MEDICAL SCRUBS', sub: 'High Quality & Comfortable', image: medicalScrubsImg },
  { title: 'SCHOOL UNIFORMS', sub: 'Durable & Smart', image: schoolUniformsImg },
  // Hoodies hata kar nai women's category add ki gai hai
  { title: "ABAYAS & MODEST WEAR", sub: 'Premium Quality & Customizable', image: abayasImg },
  { title: 'HOME TEXTILES', sub: 'Quality for Every Home', image: homeTextilesImg },
]

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--cream)', padding: '72px 48px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Left col header + right grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '48px', alignItems: 'start' }} className="svc-wrap">

          {/* Left Side */}
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
            {SERVICES.map(({ title, sub, image }) => (
              <div key={title} style={{
                position: 'relative', aspectRatio: '1/1.1',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                // Image zoom effect on hover
                const img = e.currentTarget.querySelector('.svc-bg-img');
                if(img) img.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                const img = e.currentTarget.querySelector('.svc-bg-img');
                if(img) img.style.transform = 'scale(1)';
              }}
              >
                {/* Background Image - Clean and Original */}
                <img 
                  src={image} 
                  alt={title}
                  className="svc-bg-img"
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center',
                    zIndex: 0,
                    // Opacity remove kar di gai hai taake image original nazar aaye
                    transition: 'transform 0.4s ease',
                  }}
                />

                {/* Bottom label - Gradient still here for text readability */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
                  padding: '40px 14px 14px',
                  zIndex: 1,
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