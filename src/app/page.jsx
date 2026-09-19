"use client";
import { useState, useEffect } from 'react';

export default function HomePage() {
  // --- RESPONSIVE LOGIC ---
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // --------------------------

  return (
    <main style={{ backgroundColor: '#FDFBF7', color: '#2C3A47', fontFamily: 'var(--font-montserrat), sans-serif' }}>
      
      {/* HERO SECTION FIXED FOR READABILITY & MOBILE */}
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: isMobile ? '500px' : '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px',
        overflow: 'hidden'
      }}>
        {/* Background Image layer */}
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url("/images/hero-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: isMobile ? 'scroll' : 'fixed', // Fixed backgrounds can be glitchy on iOS, better to scroll on mobile
            zIndex: 0
        }}></div>
        
        {/* Dark Overlay Layer */}
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(26, 43, 52, 0.65)',
            zIndex: 1
        }}></div>

        <div style={{ maxWidth: '900px', zIndex: 2, marginTop: isMobile ? '40px' : '80px', position: 'relative' }}>
          <h2 style={{ 
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: isMobile ? '1rem' : '1.2rem', 
            fontWeight: '600',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#D4AF37', 
            marginBottom: '15px'
          }}>
            Bahariya Oasis, Egypt
          </h2>
          
          <h1 style={{ 
            fontFamily: 'var(--font-cormorant), serif', 
            fontSize: isMobile ? '3.5rem' : '5rem', // Smaller title on mobile
            fontWeight: '600', 
            marginBottom: '24px',
            lineHeight: '1.1',
            color: '#FFFFFF',
            textShadow: '0 4px 20px rgba(0,0,0,0.8)'
          }}>
            Experience the Authentic Soul of the Desert
          </h1>
          
          <p style={{ 
            fontSize: isMobile ? '1.1rem' : '1.3rem', 
            fontWeight: '400', 
            marginBottom: '40px',
            maxWidth: '700px',
            margin: '0 auto 40px auto',
            color: '#FDFBF7',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}>
            TASNEEM is the first boutique hotel in the Egyptian Oases designed with Bedouin and Arabic spirit, offering panoramic views and unparalleled luxury.
          </p>
          
          <div style={{ 
              display: 'flex', 
              gap: '15px', 
              justifyContent: 'center', 
              flexDirection: isMobile ? 'column' : 'row' // Stack buttons vertically on phones
          }}>
            <a href="/rooms" style={{
              display: 'inline-block',
              padding: '16px 40px',
              backgroundColor: '#D4AF37',
              color: '#1A2B34',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              borderRadius: '4px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}>
              View Our Rooms
            </a>
            
            <a href="https://www.google.com/maps/place/Bahariya+Oasis" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block',
              padding: '16px 40px',
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              border: '2px solid #FFFFFF',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              borderRadius: '4px'
            }}>
              Location (Google Maps)
            </a>
          </div>
        </div>
      </section>

      {/* QUICK INTRO SECTION */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: isMobile ? '2.2rem' : '3rem', color: '#1A2B34', marginBottom: '24px' }}>
            A Sanctuary in the Sand
          </h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#D4AF37', margin: '0 auto 30px auto' }}></div>
          <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568' }}>
            Our independent lodging features bold, curated architecture reflecting the local culture. Whether you are embarking on a safari into the White Desert or seeking a peaceful retreat overlooking the palm groves, we guarantee an atmosphere of pure luxury and adventure.
          </p>
        </div>
      </section>

    </main>
  );
}