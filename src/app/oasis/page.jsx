export default function OasisPage() {
  return (
    <main style={{ backgroundColor: '#FDFBF7', color: '#2C3A47', fontFamily: 'var(--font-montserrat), sans-serif' }}>
      
      {/* 1. DRAMATIC HERO SECTION */}
      <section style={{ 
        backgroundColor: '#1A2B34', 
        color: '#FDFBF7', 
        padding: '180px 20px 120px', 
        textAlign: 'center',
        borderBottom: '8px solid #D4AF37' /* Subtle gold accent */
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ 
            fontFamily: 'var(--font-cormorant), serif', 
            fontSize: '4.5rem', 
            fontWeight: '600', 
            marginBottom: '24px',
            letterSpacing: '-1px'
          }}>
            Discover the Region
          </h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.8', opacity: 0.9, fontWeight: '300' }}>
            A living historical catalogue of Egypt, echoing the enduring legacies of Pharaohs, Persians, Romans, and Copts.
          </p>
        </div>
      </section>

      {/* 2. THE WESTERN DESERT & EGYPT MAP (Editorial Overlap) */}
      <section style={{ padding: '100px 20px', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 450px' }}>
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '3rem', color: '#1A2B34', marginBottom: '24px' }}>The Western Desert</h2>
            <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568', marginBottom: '20px' }}>
              Step into a vast, untamed frontier. Spanning an incredible two-thirds of Egypt's land surface, this magnificent expanse stretches from the Nile to the Libyan border, and from the Mediterranean down to Sudan. 
            </p>
            <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568' }}>
              Though it houses only a tiny fraction of the nation's population, it is the proud home of nomadic and semi-nomadic herdsmen. The scattered oases you will encounter are the lush, green remnants of a prehistoric savannah.
            </p>
          </div>
          <div style={{ flex: '1 1 500px', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-15px', backgroundColor: '#F4EFE6', borderRadius: '16px', zIndex: 0 }}></div>
            <img 
              src="/images/egypt-map.jpg" 
              alt="Egypt Route Map" 
              style={{ width: '100%', position: 'relative', zIndex: 1, objectFit: 'contain', borderRadius: '12px', backgroundColor: '#FFF', padding: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }} 
            />
          </div>
        </div>
      </section>

      {/* 3. BAHARIYA OASIS (Immersive Edge-to-Edge feel) */}
      <section style={{ backgroundColor: '#F4EFE6', padding: '120px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '80px', alignItems: 'center', flexDirection: 'row-reverse', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 450px' }}>
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '3rem', color: '#1A2B34', marginBottom: '24px' }}>Bahariya Oasis</h2>
            <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568', marginBottom: '20px' }}>
              Discover the crown jewel of the desert, located 340km southwest of Cairo. Nestled within a massive 2,000-square-kilometer depression, Bahariya is completely surrounded by towering black hills and ancient basalt columns forged during the Cretaceous Period. Standing at 128 meters above sea level, it is the highest of all the western oases.
            </p>
            <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568' }}>
              Once the floor of an immense ocean, this lush sanctuary has been inhabited for over 10,000 years and is fed by restorative, medicinal thermal springs in the heart of Bawiti village.
            </p>
            
            {/* Culture Sub-section nested cleanly */}
            <div style={{ marginTop: '40px', paddingLeft: '20px', borderLeft: '3px solid #D4AF37' }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.8rem', color: '#1A2B34', marginBottom: '10px' }}>People & Modernity</h3>
              <p style={{ lineHeight: '1.8', color: '#4A5568' }}>
                The local Wahati people proudly carry a rich lineage. While agriculture remains vital, the community thrives today through a vibrant, international tourism sector guided by local experts.
              </p>
            </div>
          </div>
          <div style={{ flex: '1 1 500px' }}>
            <img 
              src="/images/bahriya.jpg" 
              alt="Bahariya Oasis" 
              style={{ width: '100%', height: '600px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }} 
            />
          </div>
        </div>
      </section>

      {/* 4. ANTIQUITIES SITES & TOMBS (Elevated Cards) */}
      <section style={{ padding: '120px 20px', backgroundColor: '#FDFBF7' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '3.5rem', color: '#1A2B34', marginBottom: '20px' }}>Legends of Antiquity</h2>
            <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568', maxWidth: '700px', margin: '0 auto' }}>
              Unearth the secrets of the past. From gilded relics to vibrantly painted resting places, the oasis is a treasure trove of ancient Egyptian and Roman history.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px' }}>
            
            <div style={{ backgroundColor: '#FFF', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.06)', transition: 'transform 0.3s ease' }}>
              <img 
                src="/images/antiquities-sites.jpg" 
                alt="Antiquities Sites" 
                style={{ width: '100%', height: '320px', objectFit: 'cover' }} 
              />
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2rem', color: '#1A2B34', marginBottom: '15px' }}>Valley of Golden Mummies</h3>
                <p style={{ lineHeight: '1.8', color: '#4A5568' }}>
                  Brought to light in 1999 by Zahi Hawass, this sprawling necropolis features Roman-period mummies beautifully adorned with gypsum masks and a thin layer of gold. Eleven of these well-preserved mummies are currently on display at the local museum.
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: '#FFF', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.06)' }}>
              <img 
                src="/images/ancient-tombs.jpg" 
                alt="Ancient Tomb Wall Relief" 
                style={{ width: '100%', height: '320px', objectFit: 'cover' }} 
              />
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2rem', color: '#1A2B34', marginBottom: '15px' }}>The Ancient Tombs</h3>
                <p style={{ lineHeight: '1.8', color: '#4A5568' }}>
                  Descend into the 26th Dynasty tombs at Qasr Selim belonging to wealthy merchants Zed-Amun-ef-ankh and Bannentiu. These publicly accessible resting places feature brilliantly preserved wall paintings depicting funeral processions and the Four Sons of Horus.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PEAKS & CRYSTALS (Offset Grid) */}
      <section style={{ backgroundColor: '#F4EFE6', padding: '120px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '100px' }}>
            <img 
              src="/images/gebel-maghrafa.jpg" 
              alt="Gebel Maghrafa Mountain" 
              style={{ flex: '1 1 500px', width: '100%', height: '450px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
            />
            <div style={{ flex: '1 1 450px' }}>
              <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '3rem', color: '#1A2B34', marginBottom: '24px' }}>Gebel Maghrafa</h2>
              <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568' }}>
                Stand where giants once roamed. Gebel Maghrafa (Mountain of the Ladle) is the magnificent discovery site of Paralititan stromeri, the largest and heaviest dinosaur known to science. Along with fossils of turtles, crocodiles, and fish, this landscape tells the story of a lush, subtropical past along the shores of an ancient sea.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexDirection: 'row-reverse', flexWrap: 'wrap' }}>
            <img 
              src="/images/crustal-mountain.jpg" 
              alt="The Crystal Mountain" 
              style={{ flex: '1 1 500px', width: '100%', height: '450px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
            />
            <div style={{ flex: '1 1 450px' }}>
              <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '3rem', color: '#1A2B34', marginBottom: '24px' }}>The Crystal Mountain</h2>
              <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568' }}>
                Located on the route between Bahariya and Farafra, just north of the White Desert, lies a breathtaking geological masterpiece. This shimmering natural arch and surrounding ground sparkle brilliantly under the desert sun, composed entirely of dazzling Barite and Calcite crystal formations.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. THE BLACK & WHITE DESERTS (Dark Mode Contrast) */}
      <section style={{ backgroundColor: '#1A2B34', color: '#FFF', padding: '120px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '3.5rem', color: '#D4AF37', marginBottom: '20px' }}>Deserts of Contrast</h2>
            <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#E2E8F0', maxWidth: '700px', margin: '0 auto' }}>
              Experience two of the most visually stunning and dramatic safari landscapes on earth, sitting side by side in the Western Desert.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '80px' }}>
            <div style={{ flex: '1 1 450px' }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2.5rem', marginBottom: '20px' }}>The Black Desert</h3>
              <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#CBD5E0' }}>
                Approach Sahara Suda, where the ground and perfectly conical mountains are strikingly blanketed with black stones. Weaving in and out of these dark, majestic peaks offers a thrilling and visually dramatic safari experience unlike anywhere else on earth.
              </p>
            </div>
            <img 
              src="/images/black-desert.jpg" 
              alt="The Black Desert" 
              style={{ flex: '1 1 500px', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }} 
            />
          </div>

          <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexDirection: 'row-reverse', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 450px' }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2.5rem', marginBottom: '20px' }}>The White Desert Park</h3>
              <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#CBD5E0' }}>
                Step into a surreal, alien landscape in Sahara el-Beida. Once a prehistoric sea-bed, the wind has eroded its chalky plateau into brilliant white shapes. Marvel at giant rock formations resembling 'mushrooms' and 'ice cream cones' that shimmer in the sunlight and turn gold at dusk.
              </p>
            </div>
            <img 
              src="/images/white-dessert.jpg" 
              alt="The White Desert" 
              style={{ flex: '1 1 500px', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }} 
            />
          </div>

        </div>
      </section>

      {/* 7. WEATHER TABLE (Luxurious Data Display) */}
      <section style={{ backgroundColor: '#FDFBF7', padding: '120px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '3rem', color: '#1A2B34', marginBottom: '15px' }}>Climate & Conditions</h2>
            <p style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#4A5568' }}>
              Bahariya Oasis enjoys moderate and dry weather all year round.
            </p>
          </div>
          
          <div style={{ overflowX: 'auto', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', backgroundColor: '#FFF' }}>
              <thead>
                <tr style={{ backgroundColor: '#1A2B34', color: '#FFF' }}>
                  <th style={{ padding: '24px 15px', fontFamily: 'var(--font-cormorant), serif', fontSize: '1.2rem', fontWeight: '600' }}>Temp (°C)</th>
                  <th>Jan</th><th>Feb</th><th>Mar</th><th>Apr</th><th>May</th><th>Jun</th>
                  <th>Jul</th><th>Aug</th><th>Sep</th><th>Oct</th><th>Nov</th><th>Dec</th>
                </tr>
              </thead>
              <tbody style={{ color: '#4A5568' }}>
                <tr style={{ borderBottom: '1px solid #EDF2F7' }}>
                  <td style={{ padding: '20px 15px', fontWeight: '500', color: '#1A2B34' }}>Max</td>
                  <td>21</td><td>25</td><td>40</td><td>43</td><td>40</td><td>43</td>
                  <td>40</td><td>41</td><td>41</td><td>40</td><td>31</td><td>31</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #EDF2F7', backgroundColor: '#F8FAFC' }}>
                  <td style={{ padding: '20px 15px', fontWeight: '500', color: '#1A2B34' }}>Avg</td>
                  <td>18</td><td>20</td><td>29</td><td>31</td><td>34</td><td>39</td>
                  <td>37</td><td>39</td><td>36</td><td>30</td><td>27</td><td>23</td>
                </tr>
                <tr>
                  <td style={{ padding: '20px 15px', fontWeight: '500', color: '#1A2B34' }}>Min</td>
                  <td>6</td><td>13</td><td>14</td><td>19</td><td>26</td><td>28</td>
                  <td>26</td><td>25</td><td>22</td><td>19</td><td>15</td><td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </main>
  );
}