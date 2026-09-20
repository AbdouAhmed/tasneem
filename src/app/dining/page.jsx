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
        width: '100%',
        height: '100%'
      }}
    >
      {children}
    </div>
  );
}

export default function DiningPage() {
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
          <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: isMobile ? '2.8rem' : '4rem', fontWeight: '600', letterSpacing: '-1px' }}>
            Restaurants and Coffee Shop
          </h1>
        </FadeIn>
      </section>

      {/* SPLIT CONTENT CARDS SECTION */}
      <section style={{ 
        padding: isMobile ? '60px 20px' : '100px 20px', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row', 
        gap: '40px' 
      }}>
        
        {/* Main Restaurant Card */}
        <div style={{ flex: 1, display: 'flex' }}>
          <FadeIn direction="up" delay={0.2}>
            <div style={{ 
              backgroundColor: '#FFF', 
              padding: isMobile ? '40px 30px' : '60px 50px', 
              borderRadius: '12px', 
              boxShadow: '0 15px 35px rgba(0,0,0,0.04)',
              borderTop: '4px solid #1A2B34',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <h2 style={{ 
                fontFamily: 'var(--font-cormorant), serif', 
                fontSize: isMobile ? '2rem' : '2.5rem', 
                color: '#1A2B34', 
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                The Main Restaurant
              </h2>
              <p style={{ fontSize: isMobile ? '1.1rem' : '1.3rem', lineHeight: '2.2', color: '#4A5568', textAlign: 'center' }}>
                The main restaurant (Indoor and outdoor) is fully equipped with full board and catering facilities, overlooking the oasis and the mountains
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Coffee Shop Card */}
        <div style={{ flex: 1, display: 'flex' }}>
          <FadeIn direction="up" delay={0.4}>
            <div style={{ 
              backgroundColor: '#FFF', 
              padding: isMobile ? '40px 30px' : '60px 50px', 
              borderRadius: '12px', 
              boxShadow: '0 15px 35px rgba(0,0,0,0.04)',
              borderTop: '4px solid #D4AF37',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <h2 style={{ 
                fontFamily: 'var(--font-cormorant), serif', 
                fontSize: isMobile ? '2rem' : '2.5rem', 
                color: '#D4AF37', 
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                The Coffee Shop
              </h2>
              <p style={{ fontSize: isMobile ? '1.1rem' : '1.3rem', lineHeight: '2.2', color: '#4A5568', textAlign: 'center' }}>
                The Coffee shop (Indoor and outdoor) serve all kinds of Egyptian and soft drinks
              </p>
            </div>
          </FadeIn>
        </div>

      </section>
    </main>
  );
}