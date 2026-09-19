"use client";
import { useEffect, useRef, useState } from 'react';

// Custom Animation Component (No installation required)
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

export default function OasisPage() {
  // --- RESPONSIVE LOGIC ---
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Threshold for mobile/tablet
    };
    
    // Set initial value
    handleResize();
    
    // Setup listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // --------------------------

  return (
    <main style={{ backgroundColor: '#FDFBF7', color: '#2C3A47', fontFamily: 'var(--font-montserrat), sans-serif', overflowX: 'hidden' }}>
      
      {/* 1. ELEGANT TYPOGRAPHIC HERO SECTION */}
      <section style={{ 
        position: 'relative',
        background: 'linear-gradient(135deg, #1A2B34 0%, #0D161A 100%)', 
        color: '#FDFBF7', 
        // Responsive Padding
        padding: isMobile ? '120px 20px 80px' : '220px 20px 160px', 
        textAlign: 'center',
        borderBottom: '8px solid #D4AF37',
        overflow: 'hidden'
      }}>
        {/* Subtle Decorative Gold Line (Top) */}
        <div style={{ 
          position: 'absolute', 
          top: '0', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          width: '1px', 
          height: '100px', 
          backgroundColor: '#D4AF37', 
          opacity: 0.4 
        }}></div>

        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <FadeIn direction="up">
            <h2 style={{ 
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontSize: '1rem', 
              fontWeight: '400',
              letterSpacing: '5px',
              textTransform: 'uppercase',
              color: '#D4AF37',
              marginBottom: '24px'
            }}>
              The Western Oases
            </h2>
            
            <h1 style={{ 
              fontFamily: 'var(--font-cormorant), serif', 
              // Responsive Font Size
              fontSize: isMobile ? '3.5rem' : '5.5rem', 
              fontWeight: '600', 
              marginBottom: '32px', 
              letterSpacing: '-1px',
              color: '#FFFFFF'
            }}>
              Discover the Region
            </h1>
            
            {/* Center Gold Divider */}
            <div style={{ 
              width: '60px', 
              height: '2px', 
              backgroundColor: '#D4AF37', 
              margin: '0 auto 32px auto', 
              opacity: 0.8 
            }}></div>
            
            <p style={{ 
              fontSize: isMobile ? '1.1rem' : '1.35rem', 
              lineHeight: '1.9', 
              fontWeight: '300',
              color: '#E2E8F0',
              maxWidth: '650px',
              margin: '0 auto'
            }}>
              A living historical catalogue of Egypt, echoing the enduring legacies of Pharaohs, Persians, Romans, and Copts.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. THE WESTERN DESERT & EGYPT MAP */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 20px', position: 'relative' }}>
        <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            display: 'flex', 
            // Responsive Stacking
            gap: isMobile ? '30px' : '60px', 
            flexDirection: isMobile ? 'column' : 'row', 
            alignItems: 'center' 
        }}>
          <div style={{ flex: '1 1 100%' }}>
            <FadeIn direction="left">
              <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: isMobile ? '2.2rem' : '3rem', color: '#1A2B34', marginBottom: '24px' }}>The Western Desert</h2>
              <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568', marginBottom: '20px' }}>
                Step into a vast, untamed frontier. Spanning an incredible two-thirds of Egypt's land surface, this magnificent expanse stretches from the Nile to the Libyan border, and from the Mediterranean down to Sudan. 
              </p>
              <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568' }}>
                Though it houses only a tiny fraction of the nation's population, it is the proud home of nomadic and semi-nomadic herdsmen. The scattered oases you will encounter are the lush, green remnants of a prehistoric savannah.
              </p>
            </FadeIn>
          </div>
          <div style={{ flex: '1 1 100%', position: 'relative', width: '100%', maxWidth: '500px' }}>
            <FadeIn direction="right">
              <div style={{ position: 'absolute', inset: '-10px', backgroundColor: '#F4EFE6', borderRadius: '16px', zIndex: 0 }}></div>
              <img 
                src="/images/egypt-map.jpg" 
                alt="Egypt Route Map" 
                // Removed fixed height, added aspect ratio
                style={{ width: '100%', position: 'relative', zIndex: 1, objectFit: 'contain', borderRadius: '12px', backgroundColor: '#FFF', padding: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }} 
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. BAHARIYA OASIS */}
      <section style={{ backgroundColor: '#F4EFE6', padding: isMobile ? '60px 20px' : '120px 20px' }}>
        <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            display: 'flex', 
            // Responsive Stacking and Ordering
            gap: isMobile ? '40px' : '80px', 
            flexDirection: isMobile ? 'column' : 'row-reverse', 
            alignItems: 'center' 
        }}>
          <div style={{ flex: '1 1 100%' }}>
            <FadeIn direction="right">
              <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: isMobile ? '2.2rem' : '3rem', color: '#1A2B34', marginBottom: '24px' }}>Bahariya Oasis</h2>
              <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568', marginBottom: '20px' }}>
                Discover the crown jewel of the desert, located 340km southwest of Cairo. Nestled within a massive 2,000-square-kilometer depression, Bahariya is completely surrounded by towering black hills and ancient basalt columns forged during the Cretaceous Period.
              </p>
              <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568' }}>
                Once the floor of an immense ocean, this lush sanctuary has been inhabited for over 10,000 years and is fed by restorative, medicinal thermal springs in the heart of Bawiti village.
              </p>
              
              <div style={{ marginTop: isMobile ? '30px' : '40px', paddingLeft: '20px', borderLeft: '3px solid #D4AF37' }}>
                <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.8rem', color: '#1A2B34', marginBottom: '10px' }}>People & Modernity</h3>
                <p style={{ lineHeight: '1.8', color: '#4A5568' }}>
                  The local Wahati people proudly carry a rich lineage. While agriculture remains vital, the community thrives today through a vibrant, international tourism sector guided by local experts.
                </p>
              </div>
            </FadeIn>
          </div>
          <div style={{ flex: '1 1 100%', width: '100%', maxWidth: '500px' }}>
            <FadeIn direction="left">
              <img 
                src="/images/bahriya.jpg" 
                alt="Bahariya Oasis" 
                // Removed fixed height, added aspect ratio
                style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }} 
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. ANTIQUITIES SITES & TOMBS */}
      <section style={{ padding: isMobile ? '60px 20px' : '120px 20px', backgroundColor: '#FDFBF7' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn direction="up">
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}>
              <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: isMobile ? '2.8rem' : '3.5rem', color: '#1A2B34', marginBottom: '20px' }}>Legends of Antiquity</h2>
              <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568', maxWidth: '700px', margin: '0 auto' }}>
                Unearth the secrets of the past. From gilded relics to vibrantly painted resting places, the oasis is a treasure trove of ancient Egyptian and Roman history.
              </p>
            </div>
          </FadeIn>

          <div style={{ 
              display: 'grid', 
              // Responsive Grid Columns
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))', 
              gap: isMobile ? '30px' : '50px' 
          }}>
            <FadeIn direction="up" delay={0.1}>
              <div style={{ backgroundColor: '#FFF', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.06)' }}>
                <img 
                    src="/images/antiquities-sites.jpg" 
                    alt="Antiquities Sites" 
                    // Removed fixed height, added aspect ratio
                    style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', objectPosition: 'center 20%' }} 
                />
                <div style={{ padding: isMobile ? '25px' : '40px' }}>
                  <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2rem', color: '#1A2B34', marginBottom: '15px' }}>Valley of Golden Mummies</h3>
                  <p style={{ lineHeight: '1.8', color: '#4A5568' }}>
                    Brought to light in 1999 by Zahi Hawass, this sprawling necropolis features Roman-period mummies beautifully adorned with gypsum masks and a thin layer of gold. 
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div style={{ backgroundColor: '#FFF', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.06)' }}>
                <img 
                    src="/images/ancient-tombs.jpg" 
                    alt="Ancient Tomb Wall Relief" 
                    // Removed fixed height, added aspect ratio
                    style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} 
                />
                <div style={{ padding: isMobile ? '25px' : '40px' }}>
                  <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2rem', color: '#1A2B34', marginBottom: '15px' }}>The Ancient Tombs</h3>
                  <p style={{ lineHeight: '1.8', color: '#4A5568' }}>
                    Descend into the 26th Dynasty tombs at Qasr Selim belonging to wealthy merchants. These publicly accessible resting places feature brilliantly preserved wall paintings.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. PEAKS & CRYSTALS */}
      <section style={{ backgroundColor: '#F4EFE6', padding: isMobile ? '60px 20px' : '120px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ 
              display: 'flex', 
              // Responsive Stacking
              gap: isMobile ? '30px' : '60px', 
              flexDirection: isMobile ? 'column' : 'row', 
              alignItems: 'center', 
              marginBottom: isMobile ? '60px' : '100px' 
          }}>
            <div style={{ flex: '1 1 100%', width: '100%', maxWidth: '500px' }}>
              <FadeIn direction="left">
                <img 
                    src="/images/gebel-maghrafa.jpg" 
                    alt="Gebel Maghrafa Mountain" 
                    // Removed fixed height, added aspect ratio
                    style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
                />
              </FadeIn>
            </div>
            <div style={{ flex: '1 1 100%' }}>
              <FadeIn direction="right">
                <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: isMobile ? '2.2rem' : '3rem', color: '#1A2B34', marginBottom: '24px' }}>Gebel Maghrafa</h2>
                <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568' }}>
                  Stand where giants once roamed. Gebel Maghrafa is the magnificent discovery site of Paralititan stromeri, the largest dinosaur known to science, telling the story of a lush, subtropical past.
                </p>
              </FadeIn>
            </div>
          </div>

          <div style={{ 
              display: 'flex', 
              // Responsive Stacking and Ordering
              gap: isMobile ? '30px' : '60px', 
              flexDirection: isMobile ? 'column' : 'row-reverse', 
              alignItems: 'center' 
          }}>
            <div style={{ flex: '1 1 100%', width: '100%', maxWidth: '500px' }}>
              <FadeIn direction="right">
                <img 
                    src="/images/crustal-mountain.jpg" 
                    alt="The Crystal Mountain" 
                    // Removed fixed height, added aspect ratio
                    style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
                />
              </FadeIn>
            </div>
            <div style={{ flex: '1 1 100%' }}>
              <FadeIn direction="left">
                <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: isMobile ? '2.2rem' : '3rem', color: '#1A2B34', marginBottom: '24px' }}>The Crystal Mountain</h2>
                <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568' }}>
                  Located on the route between Bahariya and Farafra, this breathtaking geological masterpiece sparkles brilliantly under the desert sun, composed entirely of dazzling Barite and Calcite crystal formations.
                </p>
              </FadeIn>
            </div>
          </div>

        </div>
      </section>

      {/* 6. THE BLACK & WHITE DESERTS */}
      <section style={{ backgroundColor: '#1A2B34', color: '#FFF', padding: isMobile ? '60px 20px' : '120px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <FadeIn direction="up">
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '80px' }}>
              <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: isMobile ? '2.8rem' : '3.5rem', color: '#D4AF37', marginBottom: '20px' }}>Deserts of Contrast</h2>
              <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#E2E8F0', maxWidth: '700px', margin: '0 auto' }}>
                Experience two of the most visually stunning and dramatic safari landscapes on earth, sitting side by side in the Western Desert.
              </p>
            </div>
          </FadeIn>

          <div style={{ 
              display: 'flex', 
              // Responsive Stacking
              gap: isMobile ? '30px' : '60px', 
              flexDirection: isMobile ? 'column' : 'row', 
              alignItems: 'center', 
              marginBottom: isMobile ? '60px' : '80px' 
          }}>
            <div style={{ flex: '1 1 100%' }}>
              <FadeIn direction="left">
                <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2.5rem', marginBottom: '20px' }}>The Black Desert</h3>
                <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#CBD5E0' }}>
                  Approach Sahara Suda, where the ground and perfectly conical mountains are strikingly blanketed with black stones. Weaving in and out of these dark, majestic peaks offers a thrilling and visually dramatic safari experience.
                </p>
              </FadeIn>
            </div>
            <div style={{ flex: '1 1 100%', width: '100%', maxWidth: '500px' }}>
              <FadeIn direction="right">
                <img 
                    src="/images/black-desert.jpg" 
                    alt="The Black Desert" 
                    // Removed fixed height, added aspect ratio
                    style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }} 
                />
              </FadeIn>
            </div>
          </div>

          <div style={{ 
              display: 'flex', 
              // Responsive Stacking and Ordering
              gap: isMobile ? '30px' : '60px', 
              flexDirection: isMobile ? 'column' : 'row-reverse', 
              alignItems: 'center' 
          }}>
            <div style={{ flex: '1 1 100%' }}>
              <FadeIn direction="right">
                <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2.5rem', marginBottom: '20px' }}>The White Desert Park</h3>
                <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#CBD5E0' }}>
                  Step into a surreal, alien landscape in Sahara el-Beida. Marvel at giant rock formations resembling mushrooms and ice cream cones that shimmer in the sunlight and turn gold at dusk.
                </p>
              </FadeIn>
            </div>
            <div style={{ flex: '1 1 100%', width: '100%', maxWidth: '500px' }}>
              <FadeIn direction="left">
                <img 
                    src="/images/white-dessert.jpg" 
                    alt="The White Desert" 
                    // Removed fixed height, added aspect ratio
                    style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }} 
                />
              </FadeIn>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}