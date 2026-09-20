"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
      if (window.innerWidth >= 900) setMenuOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ROOMS', path: '/rooms' },
    { name: 'DINING', path: '/dining' },
    { name: 'THE OASIS', path: '/oasis' },
    { name: 'LOCATION', path: '/location' }
  ];

  return (
    <nav style={{ 
      backgroundColor: '#1A2B34', 
      borderBottom: '2px solid #D4AF37',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      width: '100%'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '15px 20px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        
        {/* LOGO */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ 
            fontFamily: 'var(--font-cormorant), serif', 
            color: '#D4AF37', 
            fontSize: isMobile ? '1.5rem' : '2rem', 
            fontWeight: '600',
            margin: 0,
            lineHeight: '1.2'
          }}>
            TASNEEM <br style={{ display: isMobile ? 'block' : 'none' }} /> 
            <span style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', fontWeight: '400' }}>Boutique Hotel</span>
          </h1>
        </Link>

        {/* DESKTOP MENU */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '30px' }}>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path} 
                style={{ 
                  color: pathname === link.path ? '#D4AF37' : '#FDFBF7', 
                  textDecoration: 'none', 
                  fontFamily: 'var(--font-montserrat), sans-serif',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  transition: 'color 0.3s ease'
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}

        {/* MOBILE HAMBURGER BUTTON */}
        {isMobile && (
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}
          >
            <div style={{ width: '30px', height: '3px', backgroundColor: '#D4AF37', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }} />
            <div style={{ width: '30px', height: '3px', backgroundColor: '#D4AF37', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <div style={{ width: '30px', height: '3px', backgroundColor: '#D4AF37', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(6px, -7px)' : 'none' }} />
          </button>
        )}
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isMobile && (
        <div style={{
          maxHeight: menuOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease-in-out',
          backgroundColor: '#0D161A',
          width: '100%'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', padding: menuOpen ? '20px' : '0 20px' }}>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path} 
                onClick={() => setMenuOpen(false)}
                style={{ 
                  color: pathname === link.path ? '#D4AF37' : '#FDFBF7', 
                  textDecoration: 'none', 
                  fontFamily: 'var(--font-montserrat), sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  padding: '15px 0',
                  borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}