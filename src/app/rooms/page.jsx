"use client";
import { useEffect, useRef, useState } from 'react';

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

export default function RoomsPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main style={{ backgroundColor: '#FDFBF7', color: '#2C3A47', fontFamily: 'var(--font-montserrat), sans-serif', minHeight: '100vh' }}>
      
      {/* ELEGANT HEADER SECTION */}
      <section style={{ 
        backgroundColor: '#1A2B34', 
        color: '#FDFBF7', 
        padding: isMobile ? '120px 20px 80px' : '160px 20px 100px', 
        textAlign: 'center',
        borderBottom: '8px solid #D4AF37'
      }}>
        <FadeIn direction="up">
          <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: isMobile ? '3rem' : '4.5rem', fontWeight: '600', letterSpacing: '-1px' }}>
            Rooms
          </h1>
        </FadeIn>
      </section>

      {/* CONTENT CARD SECTION */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <FadeIn direction="up" delay={0.2}>
          <div style={{ 
            backgroundColor: '#FFF', 
            padding: isMobile ? '40px 20px' : '60px', 
            borderRadius: '12px', 
            boxShadow: '0 15px 35px rgba(0,0,0,0.04)', 
            border: '1px solid #E2E8F0',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              fontFamily: 'var(--font-cormorant), serif', 
              fontSize: isMobile ? '2.2rem' : '2.8rem', 
              color: '#1A2B34', 
              marginBottom: '24px' 
            }}>
              Bedrooms
            </h2>
            
            <p style={{ 
              fontSize: isMobile ? '1.1rem' : '1.3rem', 
              lineHeight: '2.2', 
              color: '#4A5568', 
              marginBottom: '30px' 
            }}>
              All rooms with Balconies, overlooking East and West, provide stunning clear view of the breathtaking oasis and the mountains in the background. All rooms with private bath/shower, in room safe boxes, mini bars and hair dryers.
            </p>
            
            <div style={{ width: '40px', height: '2px', backgroundColor: '#D4AF37', margin: '0 auto 30px auto' }}></div>
            
            <p style={{ 
              fontSize: isMobile ? '1.1rem' : '1.3rem', 
              lineHeight: '2', 
              color: '#1A2B34',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Rooms' beds are twin beds
            </p>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}