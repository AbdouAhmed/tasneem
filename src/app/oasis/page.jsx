"use client";

import { motion } from 'framer-motion';

export default function OasisPage() {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <main style={{ backgroundColor: '#FDFBF7', color: '#2C3A47', fontFamily: 'var(--font-montserrat), sans-serif', overflowX: 'hidden' }}>
      
      {/* 1. DRAMATIC HERO SECTION */}
      <section style={{ 
        backgroundColor: '#1A2B34', 
        color: '#FDFBF7', 
        padding: '180px 20px 120px', 
        textAlign: 'center',
        borderBottom: '8px solid #D4AF37'
      }}>
        <motion.div 
          style={{ maxWidth: '800px', margin: '0 auto' }}
          initial="hidden" animate="visible" variants={fadeUp}
        >
          <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '4.5rem', fontWeight: '600', marginBottom: '24px', letterSpacing: '-1px' }}>
            Discover the Region
          </h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.8', opacity: 0.9, fontWeight: '300' }}>
            A living historical catalogue of Egypt, echoing the enduring legacies of Pharaohs, Persians, Romans, and Copts.
          </p>
        </motion.div>
      </section>

      {/* 2. THE WESTERN DESERT & EGYPT MAP */}
      <section style={{ padding: '100px 20px', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
          <motion.div style={{ flex: '1 1 450px' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeLeft}>
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '3rem', color: '#1A2B34', marginBottom: '24px' }}>The Western Desert</h2>
            <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568', marginBottom: '20px' }}>
              Step into a vast, untamed frontier. Spanning an incredible two-thirds of Egypt's land surface, this magnificent expanse stretches from the Nile to the Libyan border, and from the Mediterranean down to Sudan. 
            </p>
            <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568' }}>
              Though it houses only a tiny fraction of the nation's population, it is the proud home of nomadic and semi-nomadic herdsmen. The scattered oases you will encounter are the lush, green remnants of a prehistoric savannah.
            </p>
          </motion.div>
          <motion.div style={{ flex: '1 1 500px', position: 'relative' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeRight}>
            <div style={{ position: 'absolute', inset: '-15px', backgroundColor: '#F4EFE6', borderRadius: '16px', zIndex: 0 }}></div>
            <img 
              src="/images/egypt-map.jpg" 
              alt="Egypt Route Map" 
              style={{ width: '100%', position: 'relative', zIndex: 1, objectFit: 'contain', borderRadius: '12px', backgroundColor: '#FFF', padding: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }} 
            />
          </motion.div>
        </div>
      </section>

      {/* 3. BAHARIYA OASIS */}
      <section style={{ backgroundColor: '#F4EFE6', padding: '120px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '80px', alignItems: 'center', flexDirection: 'row-reverse', flexWrap: 'wrap' }}>
          <motion.div style={{ flex: '1 1 450px' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeRight}>
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '3rem', color: '#1A2B34', marginBottom: '24px' }}>Bahariya Oasis</h2>
            <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568', marginBottom: '20px' }}>
              Discover the crown jewel of the desert, located 340km southwest of Cairo. Nestled within a massive 2,000-square-kilometer depression, Bahariya is completely surrounded by towering black hills and ancient basalt columns forged during the Cretaceous Period.
            </p>
            <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568' }}>
              Once the floor of an immense ocean, this lush sanctuary has been inhabited for over 10,000 years and is fed by restorative, medicinal thermal springs in the heart of Bawiti village.
            </p>
            
            <div style={{ marginTop: '40px', paddingLeft: '20px', borderLeft: '3px solid #D4AF37' }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.8rem', color: '#1A2B34', marginBottom: '10px' }}>People & Modernity</h3>
              <p style={{ lineHeight: '1.8', color: '#4A5568' }}>
                The local Wahati people proudly carry a rich lineage. While agriculture remains vital, the community thrives today through a vibrant, international tourism sector guided by local experts.
              </p>
            </div>
          </motion.div>
          <motion.div style={{ flex: '1 1 500px' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeLeft}>
            <img 
              src="/images/bahriya.jpg" 
              alt="Bahariya Oasis" 
              style={{ width: '100%', height: '600px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }} 
            />
          </motion.div>
        </div>
      </section>

      {/* 4. ANTIQUITIES SITES & TOMBS (Staggered Grid) */}
      <section style={{ padding: '120px 20px', backgroundColor: '#FDFBF7' }}>
        <motion.div style={{ maxWidth: '1200px', margin: '0 auto' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.div style={{ textAlign: 'center', marginBottom: '60px' }} variants={fadeUp}>
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '3.5rem', color: '#1A2B34', marginBottom: '20px' }}>Legends of Antiquity</h2>
            <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568', maxWidth: '700px', margin: '0 auto' }}>
              Unearth the secrets of the past. From gilded relics to vibrantly painted resting places, the oasis is a treasure trove of ancient Egyptian and Roman history.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px' }}>
            <motion.div variants={fadeUp} style={{ backgroundColor: '#FFF', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.06)' }}>
              <img src="/images/antiquities-sites.jpg" alt="Antiquities Sites" style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2rem', color: '#1A2B34', marginBottom: '15px' }}>Valley of Golden Mummies</h3>
                <p style={{ lineHeight: '1.8', color: '#4A5568' }}>
                  Brought to light in 1999 by Zahi Hawass, this sprawling necropolis features Roman-period mummies beautifully adorned with gypsum masks and a thin layer of gold. 
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} style={{ backgroundColor: '#FFF', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.06)' }}>
              <img src="/images/ancient-tombs.jpg" alt="Ancient Tomb Wall Relief" style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2rem', color: '#1A2B34', marginBottom: '15px' }}>The Ancient Tombs</h3>
                <p style={{ lineHeight: '1.8', color: '#4A5568' }}>
                  Descend into the 26th Dynasty tombs at Qasr Selim belonging to wealthy merchants. These publicly accessible resting places feature brilliantly preserved wall paintings.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 5. PEAKS & CRYSTALS */}
      <section style={{ backgroundColor: '#F4EFE6', padding: '120px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '100px' }}>
            <motion.img 
              src="/images/gebel-maghrafa.jpg" alt="Gebel Maghrafa Mountain" 
              style={{ flex: '1 1 500px', width: '100%', height: '450px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeLeft}
            />
            <motion.div style={{ flex: '1 1 450px' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeRight}>
              <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '3rem', color: '#1A2B34', marginBottom: '24px' }}>Gebel Maghrafa</h2>
              <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568' }}>
                Stand where giants once roamed. Gebel Maghrafa is the magnificent discovery site of Paralititan stromeri, the largest dinosaur known to science, telling the story of a lush, subtropical past.
              </p>
            </motion.div>
          </div>

          <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexDirection: 'row-reverse', flexWrap: 'wrap' }}>
            <motion.img 
              src="/images/crustal-mountain.jpg" alt="The Crystal Mountain" 
              style={{ flex: '1 1 500px', width: '100%', height: '450px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeRight}
            />
            <motion.div style={{ flex: '1 1 450px' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeLeft}>
              <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '3rem', color: '#1A2B34', marginBottom: '24px' }}>The Crystal Mountain</h2>
              <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568' }}>
                Located on the route between Bahariya and Farafra, this breathtaking geological masterpiece sparkles brilliantly under the desert sun, composed entirely of dazzling Barite and Calcite crystal formations.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 6. THE BLACK & WHITE DESERTS */}
      <section style={{ backgroundColor: '#1A2B34', color: '#FFF', padding: '120px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <motion.div style={{ textAlign: 'center', marginBottom: '80px' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '3.5rem', color: '#D4AF37', marginBottom: '20px' }}>Deserts of Contrast</h2>
            <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#E2E8F0', maxWidth: '700px', margin: '0 auto' }}>
              Experience two of the most visually stunning and dramatic safari landscapes on earth, sitting side by side in the Western Desert.
            </p>
          </motion.div>

          <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '80px' }}>
            <motion.div style={{ flex: '1 1 450px' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeLeft}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2.5rem', marginBottom: '20px' }}>The Black Desert</h3>
              <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#CBD5E0' }}>
                Approach Sahara Suda, where the ground and perfectly conical mountains are strikingly blanketed with black stones. Weaving in and out of these dark, majestic peaks offers a thrilling and visually dramatic safari experience.
              </p>
            </motion.div>
            <motion.img 
              src="/images/black-desert.jpg" alt="The Black Desert" 
              style={{ flex: '1 1 500px', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }} 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeRight}
            />
          </div>

          <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexDirection: 'row-reverse', flexWrap: 'wrap' }}>
            <motion.div style={{ flex: '1 1 450px' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeRight}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2.5rem', marginBottom: '20px' }}>The White Desert Park</h3>
              <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#CBD5E0' }}>
                Step into a surreal, alien landscape in Sahara el-Beida. Marvel at giant rock formations resembling mushrooms and ice cream cones that shimmer in the sunlight and turn gold at dusk.
              </p>
            </motion.div>
            <motion.img 
              src="/images/white-dessert.jpg" alt="The White Desert" 
              style={{ flex: '1 1 500px', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }} 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeLeft}
            />
          </div>

        </div>
      </section>

    </main>
  );
}