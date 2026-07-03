import { useState, useEffect } from 'react';
// Apni baqi 2 images yahan import karein
import heroBg1 from '../assets/hero-bg.jpg'; // Farzi naam, apne mutabiq change karein
import heroBg2 from '../assets/hero-bg2.jpg'; // Farzi naam, apne mutabiq change karein
import heroBg3 from '../assets/hero-bg3.jpg'; // Farzi naam, apne mutabiq change karein

export default function Hero() {
  // 3 Images ka array
  const images = [heroBg1, heroBg2, heroBg3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect (Har 5 seconds baad image change hogi)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '520px',
      height: '88vh',
      maxHeight: '700px',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden',
      background: '#0a140c', // Fallback background color
    }}>

      {/* Background Images Layer */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Asya Tailors Factory ${index + 1}`}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            zIndex: 0,
            opacity: currentIndex === index ? 1 : 0, // Sirf active image nazar aaye
            transition: 'opacity 1.2s ease-in-out', // Smooth crossfade animation
          }}
        />
      ))}

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
          Custom Garment Manufacturing<br />for Fashion Brands
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
          We help fashion brands, startups and businesses transform their ideas into premium garments through sampling, pattern development and reliable bulk production.
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

      {/* Slider Indicators / Dots (Optional: Choti dots slider k neechay) */}
      <div style={{
        position: 'absolute', bottom: '24px', right: '80px', zIndex: 2,
        display: 'flex', gap: '8px'
      }}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '8px', height: '8px', borderRadius: '50%',
              border: 'none', cursor: 'pointer',
              background: currentIndex === index ? 'var(--gold2)' : 'rgba(255,255,255,0.4)',
              transition: 'background 0.3s',
              padding: 0,
            }}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-content { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  )
}