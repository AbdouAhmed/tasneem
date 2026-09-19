"use client";
import { useEffect, useState } from 'react';

export default function DiningPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main style={{ 
      backgroundColor: '#FDFBF7', 
      color: '#2C3A47', 
      fontFamily: 'var(--font-montserrat), sans-serif', 
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '100px 20px 60px' : '160px 20px 100px'
    }}>
      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'left' }}>
        <h1 style={{ 
          fontFamily: 'var(--font-cormorant), serif', 
          fontSize: isMobile ? '2.8rem' : '3.5rem', 
          color: '#1A2B34', 
          marginBottom: '24px',
          fontWeight: '600' 
        }}>
          Restaurants and Coffee Shop
        </h1>
        
        <p style={{ 
          fontSize: isMobile ? '1.1rem' : '1.25rem', 
          lineHeight: '1.9', 
          color: '#4A5568', 
          marginBottom: '20px' 
        }}>
          The main restaurant (Indoor and outdoor) is fully equipped with full board and catering facilities, overlooking the oasis and the mountains
        </p>

        <p style={{ 
          fontSize: isMobile ? '1.1rem' : '1.25rem', 
          lineHeight: '1.9', 
          color: '#4A5568'
        }}>
          The Coffee shop (Indoor and outdoor) serve all kinds of Egyptian and soft drinks
        </p>
      </div>
    </main>
  );
}
