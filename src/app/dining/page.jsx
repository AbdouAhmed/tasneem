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

export default function DiningPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main style={{ backgroundColor: '#FDFBF7', color: '#2C3A47', fontFamily: 'var(--font-montserrat), sans-serif', overflowX: 'hidden' }}>
      
      {/* ELEGANT TYPOGRAPHIC HERO */}
      <section style={{ 
        position: 'relative',
        background: 'linear-gradient(135deg, #1A2B34 0%, #0D161A 100%)', 
        color: '#FDFBF7', 
        padding: isMobile ? '120px 20px 80px' : '220px 20px 160px', 
        textAlign: 'center',
        borderBottom: '8px solid #D4AF37',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '1px', height: '100px', backgroundColor: '#D4AF37', opacity: 0.4 }}></div>
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <FadeIn direction="up">
            <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontSize: '1rem', fontWeight: '400', letterSpacing: '5px', textTransform: 'uppercase', color: '#D4AF37', marginBottom: '24px' }}>
              Taste of the Oasis
            </h2>
            <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: isMobile ? '3.5rem' : '5.5rem', fontWeight: '600', marginBottom: '32px', letterSpacing: '-1px', color: '#FFFFFF' }}>
              Culinary Experience
            </h1>
            <div style={{ width: '60px', height: '2px', backgroundColor: '#D4AF37', margin: '0 auto 32px auto', opacity: 0.8 }}></div>
            <p style={{ fontSize: isMobile ? '1.1rem' : '1.35rem', lineHeight: '1.9', fontWeight: '300', color: '#E2E8F0', maxWidth: '650px', margin: '0 auto' }}>
              Immerse yourself in authentic Wahati flavors, slow-cooked traditions, and the legendary hospitality of the desert.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 1: THE TRADITION */}
      <section style={{ padding: isMobile ? '60px 20px' : '120px 20px', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: isMobile ? '40px' : '80px', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>
          <div style={{ flex: '1 1 100%' }}>
            <FadeIn direction="left">
              <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: isMobile ? '2.5rem' : '3rem', color: '#1A2B34', marginBottom: '20px' }}>The Zarab Feast</h2>
              <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568', marginBottom: '24px' }}>
                Experience the ancient Bedouin art of Zarab. Meats and freshly harvested local vegetables are slow-cooked for hours under the desert sand on hot coals. The result is unparalleled tenderness and a deep, smoky flavor that cannot be replicated in a modern kitchen.
              </p>
            </FadeIn>
          </div>
          <div style={{ flex: '1 1 100%', width: '100%', maxWidth: '600px' }}>
            <FadeIn direction="right">
              <img src="/images/dining-zarab.jpg" alt="Traditional Zarab Cooking" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', backgroundColor: '#E2E8F0' }} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE TEA RITUAL */}
      <section style={{ backgroundColor: '#1A2B34', color: '#FDFBF7', padding: isMobile ? '60px 20px' : '120px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: isMobile ? '40px' : '80px', flexDirection: isMobile ? 'column' : 'row-reverse', alignItems: 'center' }}>
          <div style={{ flex: '1 1 100%' }}>
            <FadeIn direction="right">
              <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: isMobile ? '2.5rem' : '3rem', color: '#D4AF37', marginBottom: '20px' }}>The Wahati Tea Ritual</h2>
              <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#E2E8F0', marginBottom: '24px' }}>
                No day in the oasis is complete without it. Boiled continuously over an open wood fire and infused with fresh mint or lemongrass, our tea is poured with precision to create its signature froth. It is a symbol of welcome, conversation, and peace.
              </p>
            </FadeIn>
          </div>
          <div style={{ flex: '1 1 100%', width: '100%', maxWidth: '600px' }}>
            <FadeIn direction="left">
              <img src="/images/dining-tea.jpg" alt="Bedouin Tea Pouring" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 25px 50px rgba(0,0,0,0.3)', backgroundColor: '#2C3A47' }} />
            </FadeIn>
          </div>
        </div>
      </section>

    </main>
  );
}