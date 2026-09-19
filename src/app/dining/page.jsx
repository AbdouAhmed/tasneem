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

export default function DiningPage() {
  // --- DYNAMIC SIZE DETECTION ---
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main style={{ backgroundColor: '#FDFBF7', color: '#2C3A47', fontFamily: 'var(--font-montserrat), sans-serif', overflowX: 'hidden' }}>
      
      {/* ORIGINAL SOLID HERO SECTION WITH DYNAMIC PADDING/FONTS */}
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
              Culinary Experience
            </h1>
            <p style={{ fontSize: isMobile ? '1.1rem' : '1.25rem', lineHeight: '1.8', opacity: 0.9, fontWeight: '300' }}>
              Immerse yourself in authentic Wahati flavors, slow-cooked traditions, and the legendary hospitality of the desert.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 1 WITH DYNAMIC LAYOUT & ASPECT RATIO */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 20px', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: isMobile ? '40px' : '60px', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>
          <div style={{ flex: '1 1 100%' }}>
            <FadeIn direction="left">
              <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: isMobile ? '2.5rem' : '3rem', color: '#1A2B34', marginBottom: '20px' }}>The Zarab Feast</h2>
              <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568', marginBottom: '24px' }}>
                Experience the ancient Bedouin art of Zarab. Meats and freshly harvested local vegetables are slow-cooked for hours under the desert sand on hot coals. The result is unparalleled tenderness and a deep, smoky flavor that cannot be replicated in a modern kitchen.
              </p>
            </FadeIn>
          </div>
          <div style={{ flex: '1 1 100%', position: 'relative', width: '100%' }}>
            <FadeIn direction="right">
              <img 
                src="/images/dining-zarab.jpg" 
                alt="Traditional Zarab Cooking" 
                style={{ width: '100%', aspectRatio: isMobile ? '4/3' : '16/9', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }} 
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 2 WITH DYNAMIC LAYOUT & ASPECT RATIO */}
      <section style={{ backgroundColor: '#1A2B34', color: '#FDFBF7', padding: isMobile ? '60px 20px' : '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: isMobile ? '40px' : '80px', flexDirection: isMobile ? 'column' : 'row-reverse', alignItems: 'center' }}>
          <div style={{ flex: '1 1 100%' }}>
            <FadeIn direction="right">
              <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: isMobile ? '2.5rem' : '3rem', color: '#D4AF37', marginBottom: '20px' }}>The Wahati Tea Ritual</h2>
              <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#E2E8F0', marginBottom: '24px' }}>
                No day in the oasis is complete without it. Boiled continuously over an open wood fire and infused with fresh mint or lemongrass, our tea is poured with precision to create its signature froth. It is a symbol of welcome, conversation, and peace.
              </p>
            </FadeIn>
          </div>
          <div style={{ flex: '1 1 100%', position: 'relative', width: '100%' }}>
            <FadeIn direction="left">
              <img 
                src="/images/dining-tea.jpg" 
                alt="Bedouin Tea Pouring" 
                style={{ width: '100%', aspectRatio: isMobile ? '4/3' : '16/9', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }} 
              />
            </FadeIn>
          </div>
        </div>
      </section>

    </main>
  );
}