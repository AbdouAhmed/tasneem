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

export default function RoomsPage() {
  // --- DYNAMIC SIZE DETECTION ---
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main style={{ backgroundColor: '#FDFBF7', color: '#2C3A47', fontFamily: 'var(--font-montserrat), sans-serif', overflowX: 'hidden' }}>
      
      {/* HERO SECTION */}
      <section style={{ 
        backgroundColor: '#1A2B34', 
        color: '#FDFBF7', 
        padding: isMobile ? '120px 20px 80px' : '180px 20px 120px', 
        textAlign: 'center',
        borderBottom: '8px solid #D4AF37'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <FadeIn direction="up">
            <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: isMobile ? '3.5rem' : '4.5rem', fontWeight: '600', marginBottom: '24px', letterSpacing: '-1px' }}>
              Rooms
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ROOMS SECTION (HEADER ONLY) */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 20px', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: isMobile ? '40px' : '60px', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>
          <div style={{ flex: '1 1 100%' }}>
            <FadeIn direction="left">
              <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: isMobile ? '2.5rem' : '3rem', color: '#1A2B34', marginBottom: '20px' }}>
                Rooms
              </h2>
              {/* Content removed as requested */}
            </FadeIn>
          </div>
          <div style={{ flex: '1 1 100%', position: 'relative', width: '100%' }}>
            <FadeIn direction="right">
              <img 
                src="/images/room-suite.jpg" 
                alt="Rooms" 
                style={{ width: '100%', aspectRatio: isMobile ? '4/3' : '16/9', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }} 
              />
            </FadeIn>
          </div>
        </div>
      </section>

    </main>
  );
}