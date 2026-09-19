"use client";
import { useEffect, useRef, useState } from 'react';

// Native Scroll Animation Component
function FadeIn({ children, direction = "up", delay = 0 }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  let transformStart = 'translateY(40px)';
  if (direction === 'left') transformStart = 'translateX(-40px)';
  if (direction === 'right') transformStart = 'translateX(40px)';

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : transformStart,
        transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
        willChange: 'opacity, transform',
        width: '100%'
      }}
    >
      {children}
    </div>
  );
}

export default function LocationPage() {
  return (
    <main style={{ backgroundColor: '#FDFBF7', color: '#2C3A47', fontFamily: 'var(--font-montserrat), sans-serif', paddingBottom: '100px' }}>
      
      {/* PAGE HEADER */}
      <section style={{ 
        backgroundColor: '#1A2B34', 
        color: '#FDFBF7', 
        padding: '160px 20px 80px', 
        textAlign: 'center',
        borderBottom: '8px solid #D4AF37'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <FadeIn direction="up">
            <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '4rem', fontWeight: '600', marginBottom: '20px' }}>
              Location & Directions
            </h1>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.9, fontWeight: '300' }}>
              Your journey to tranquility begins here. Discover how to reach our sanctuary in the heart of the Western Desert.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* MAP & DETAILS SECTION */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'flex-start' }}>
          
          {/* Left Column: Information */}
          <div style={{ flex: '1 1 400px' }}>
            <FadeIn direction="left">
              <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2.5rem', color: '#1A2B34', marginBottom: '24px' }}>
                Reaching TASNEEM
              </h2>
              
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                  The Oasis
                </h3>
                <p style={{ lineHeight: '1.8', color: '#4A5568' }}>
                  We are proudly located in the Bahariya Oasis, nestled within a massive natural depression surrounded by majestic black hills. The oasis is situated approximately 340km southwest of Cairo.
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                  Transportation
                </h3>
                <p style={{ lineHeight: '1.8', color: '#4A5568', marginBottom: '15px' }}>
                  <strong>By Car:</strong> A scenic, newly paved desert highway connects Cairo directly to Bahariya Oasis. The drive typically takes 4 to 5 hours.
                </p>
                <p style={{ lineHeight: '1.8', color: '#4A5568' }}>
                  <strong>Private Transfer:</strong> We offer premium, air-conditioned private transfers from Cairo International Airport directly to the hotel upon request.
                </p>
              </div>

              <a href="https://www.google.com/maps/place/Bahariya+Oasis" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block',
                padding: '16px 40px',
                backgroundColor: '#1A2B34',
                color: '#FDFBF7',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '4px',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, background-color 0.3s ease'
              }}>
                Open Native Google Maps
              </a>
            </FadeIn>
          </div>

          {/* Right Column: Interactive Map */}
          <div style={{ flex: '1 1 600px', width: '100%' }}>
            <FadeIn direction="right">
              <div style={{ 
                borderRadius: '16px', 
                overflow: 'hidden', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                border: '4px solid #FFF',
                backgroundColor: '#FFF'
              }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111244.64615372338!2d28.8258284617478!3d28.34907106883216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145b23d91b490fdf%3A0xc6c4293f9c6d36e2!2sBahariya%20Oasis!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg" 
                  width="100%" 
                  height="500" 
                  style={{ border: 0, display: 'block' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bahariya Oasis Google Map"
                ></iframe>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>
    </main>
  );
}