export default function OasisPage() {
  return (
    <main style={{ backgroundColor: '#FDFBF7', paddingBottom: '100px' }}>
      
      {/* Page Header */}
      <section className="section" style={{ paddingTop: '120px', paddingBottom: '40px' }}>
        <h1 className="section-title">Discover the Region</h1>
        <p className="section-subtitle">
          A living historical catalogue of Egypt, echoing the enduring legacies of Pharaohs, Persians, Romans, and Copts[cite: 5].
        </p>
      </section>

      {/* THE WESTERN DESERT & EGYPT MAP */}
      <section className="section" style={{ paddingTop: '20px', paddingBottom: '60px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 400px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>The Western Desert</h2>
            <p style={{ lineHeight: '1.8' }}>
              Step into a vast, untamed frontier. Spanning an incredible two-thirds of Egypt's land surface, this magnificent expanse stretches from the Nile to the Libyan border, and from the Mediterranean down to Sudan[cite: 5]. Though it houses only a tiny fraction of the nation's population, it is the proud home of nomadic and semi-nomadic herdsmen[cite: 5]. The scattered oases you will encounter are the lush, green remnants of a prehistoric savannah[cite: 5].
            </p>
          </div>
          <div style={{ flex: '1 1 400px', textAlign: 'center' }}>
            <img 
              src="/images/egypt-map.jpg" 
              alt="Egypt Route Map" 
              style={{ width: '100%', maxHeight: '400px', objectFit: 'contain', borderRadius: '12px', backgroundColor: '#FFF', padding: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }} 
            />
          </div>
        </div>
      </section>

      {/* BAHRIYA OASIS */}
      <section className="section" style={{ backgroundColor: '#F4EFE6', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', gap: '40px', alignItems: 'center', flexDirection: 'row-reverse', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 400px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Bahariya Oasis</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
              Discover the crown jewel of the desert, located 340km southwest of Cairo[cite: 5]. Nestled within a massive 2,000-square-kilometer depression, Bahariya is completely surrounded by towering black hills and ancient basalt columns forged during the Cretaceous Period[cite: 5]. Standing at 128 meters above sea level, it is the highest of all the western oases[cite: 5].
            </p>
            <p style={{ lineHeight: '1.8' }}>
              Once the floor of an immense ocean, this lush sanctuary has been inhabited for over 10,000 years and is fed by restorative, medicinal thermal springs in the heart of Bawiti village[cite: 5].
            </p>
          </div>
          <img 
            src="/images/bahriya.jpg" 
            alt="Bahariya Oasis" 
            style={{ flex: '1 1 400px', width: '100%', height: '350px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
          />
        </div>
      </section>

      {/* PEOPLE, CULTURE, AND MODERNITY */}
      <section className="section" style={{ padding: '60px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>People, Culture & Modernity</h2>
          <p style={{ lineHeight: '1.8' }}>
            Connect with the authentic soul of the oasis. The local Wahati people proudly carry a rich lineage, descending from ancient inhabitants, Libyan Bedouin tribes, and Nile Valley settlers[cite: 5]. While time-honored agriculture remains vital, the community thrives today through a blend of the nearby iron ore industry and a vibrant, international tourism sector guided by local experts[cite: 5].
          </p>
        </div>
      </section>

      {/* ANTIQUITIES SITES & TOMBS */}
      <section className="section" style={{ backgroundColor: '#F4EFE6', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', textAlign: 'center' }}>Legends of Antiquity</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '40px', textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto' }}>
            Unearth the secrets of the past. From gilded relics to vibrantly painted resting places, the oasis is a treasure trove of ancient Egyptian and Roman history[cite: 5].
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            
            {/* Antiquities Sites */}
            <div style={{ backgroundColor: '#FFF', padding: '30px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
              <img 
                src="/images/antiquities-sites.jpg" 
                alt="Antiquities Sites" 
                style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }} 
              />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Valley of Golden Mummies</h3>
              <p style={{ lineHeight: '1.7' }}>
                Brought to light in 1999 by Zahi Hawass, this sprawling necropolis features Roman-period mummies beautifully adorned with gypsum masks and a thin layer of gold[cite: 5]. Eleven of these well-preserved mummies are currently on display at the local museum[cite: 5].
              </p>
            </div>

            {/* The Ancient Tombs */}
            <div style={{ backgroundColor: '#FFF', padding: '30px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
              <img 
                src="/images/ancient-tombs.jpg" 
                alt="Ancient Tomb Wall Relief" 
                style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }} 
              />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>The Ancient Tombs</h3>
              <p style={{ lineHeight: '1.7' }}>
                Descend into the 26th Dynasty tombs at Qasr Selim belonging to wealthy merchants Zed-Amun-ef-ankh and Bannentiu[cite: 5]. These publicly accessible resting places feature brilliantly preserved wall paintings depicting funeral processions and the Four Sons of Horus[cite: 5].
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PEAKS & CRYSTALS */}
      <section className="section" style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}>
          
          {/* Gebel Maghrafa */}
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '80px' }}>
            <img 
              src="/images/gebel-maghrafa.jpg" 
              alt="Gebel Maghrafa Mountain" 
              style={{ flex: '1 1 400px', width: '100%', height: '350px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
            />
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Gebel Maghrafa</h2>
              <p style={{ lineHeight: '1.8' }}>
                Stand where giants once roamed. Gebel Maghrafa (Mountain of the Ladle) is the magnificent discovery site of Paralititan stromeri, the largest and heaviest dinosaur known to science[cite: 5]. Along with fossils of turtles, crocodiles, and fish, this landscape tells the story of a lush, subtropical past along the shores of an ancient sea[cite: 5].
              </p>
            </div>
          </div>

          {/* The Crustal Mountain */}
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexDirection: 'row-reverse', flexWrap: 'wrap' }}>
            <img 
              src="/images/crustal-mountain.jpg" 
              alt="The Crystal Mountain" 
              style={{ flex: '1 1 400px', width: '100%', height: '350px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
            />
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>The Crystal Mountain</h2>
              <p style={{ lineHeight: '1.8' }}>
                Located on the route between Bahariya and Farafra, just north of the White Desert, lies a breathtaking geological masterpiece[cite: 5]. This shimmering natural arch and surrounding ground sparkle brilliantly under the desert sun, composed entirely of dazzling Barite and Calcite crystal formations[cite: 5].
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* THE BLACK & WHITE DESERTS */}
      <section className="section" style={{ backgroundColor: '#1A2B34', color: '#FFF', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}>
          
          <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center', color: '#FFF' }}>The Deserts of Contrast</h2>

          {/* The Black Desert */}
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '60px' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>The Black Desert</h3>
              <p style={{ lineHeight: '1.8', color: '#DEDEDE' }}>
                Approach Sahara Suda, where the ground and perfectly conical mountains are strikingly blanketed with black stones[cite: 5]. Weaving in and out of these dark, majestic peaks offers a thrilling and visually dramatic safari experience unlike anywhere else on earth[cite: 5].
              </p>
            </div>
            <img 
              src="/images/black-desert.jpg" 
              alt="The Black Desert" 
              style={{ flex: '1 1 400px', width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }} 
            />
          </div>

          {/* The White Desert */}
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexDirection: 'row-reverse', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>The White Desert Park</h3>
              <p style={{ lineHeight: '1.8', color: '#DEDEDE' }}>
                Step into a surreal, alien landscape in Sahara el-Beida. Once a prehistoric sea-bed and later a lush savannah teeming with elephants and giraffes, the wind has eroded its chalky plateau into brilliant white shapes[cite: 5]. Marvel at giant rock formations resembling 'mushrooms', 'tents', and 'ice cream cones' that shimmer in the sunlight and turn gold at dusk[cite: 5].
              </p>
            </div>
            <img 
              src="/images/white-dessert.jpg" 
              alt="The White Desert" 
              style={{ flex: '1 1 400px', width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }} 
            />
          </div>

        </div>
      </section>

      {/* WEATHER TABLE */}
      <section className="section" style={{ backgroundColor: '#FDFBF7', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', textAlign: 'center' }}>Average Weather Conditions</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '30px', textAlign: 'center' }}>
            Bahariya Oasis enjoys moderate and dry weather all year round[cite: 5].
          </p>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', backgroundColor: '#FFF', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', borderRadius: '8px', overflow: 'hidden' }}>
              <thead>
                <tr style={{ backgroundColor: '#1A2B34', color: '#FFF' }}>
                  <th style={{ padding: '15px' }}>Temp (°C)</th>
                  <th>Jan</th><th>Feb</th><th>Mar</th><th>Apr</th><th>May</th><th>Jun</th>
                  <th>Jul</th><th>Aug</th><th>Sep</th><th>Oct</th><th>Nov</th><th>Dec</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #EEE' }}>
                  <td style={{ padding: '15px', fontWeight: 'bold' }}>Max</td>
                  <td>21</td><td>25</td><td>40</td><td>43</td><td>40</td><td>43</td>
                  <td>40</td><td>41</td><td>41</td><td>40</td><td>31</td><td>31</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #EEE' }}>
                  <td style={{ padding: '15px', fontWeight: 'bold' }}>Avg</td>
                  <td>18</td><td>20</td><td>29</td><td>31</td><td>34</td><td>39</td>
                  <td>37</td><td>39</td><td>36</td><td>30</td><td>27</td><td>23</td>
                </tr>
                <tr>
                  <td style={{ padding: '15px', fontWeight: 'bold' }}>Min</td>
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