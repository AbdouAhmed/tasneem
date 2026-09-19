export default function HomePage() {
  return (
    <main style={{ backgroundColor: '#FDFBF7', color: '#2C3A47', fontFamily: 'var(--font-montserrat), sans-serif' }}>
      
      {/* HERO SECTION WITH NEW BACKGROUND */}
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        /* The linear-gradient adds a dark overlay so your text pops against the bright image */
        backgroundImage: 'linear-gradient(rgba(26, 43, 52, 0.4), rgba(26, 43, 52, 0.8)), url("/images/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', /* Gives a premium parallax scrolling effect */
        color: '#FDFBF7',
        textAlign: 'center',
        padding: '20px'
      }}>
        <div style={{ maxWidth: '900px', zIndex: 1, marginTop: '80px' }}>
          <h2 style={{ 
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: '1.2rem', 
            fontWeight: '400',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#D4AF37',
            marginBottom: '15px'
          }}>
            Bahariya Oasis, Egypt
          </h2>
          <h1 style={{ 
            fontFamily: 'var(--font-cormorant), serif', 
            fontSize: '5rem', 
            fontWeight: '600', 
            marginBottom: '24px',
            lineHeight: '1.1',
            textShadow: '0 4px 20px rgba(0,0,0,0.4)'
          }}>
            Experience the Authentic Soul of the Desert
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            fontWeight: '300', 
            marginBottom: '40px',
            opacity: 0.9,
            maxWidth: '700px',
            margin: '0 auto 40px auto'
          }}>
            TASNEEM is the first boutique hotel in the Egyptian Oases designed with Bedouin and Arabic spirit, offering panoramic views and unparalleled luxury.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/rooms" style={{
              display: 'inline-block',
              padding: '16px 40px',
              backgroundColor: '#D4AF37',
              color: '#1A2B34',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              borderRadius: '4px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              transition: 'transform 0.3s ease'
            }}>
              View Our Rooms
            </a>
            <a href="/oasis" style={{
              display: 'inline-block',
              padding: '16px 40px',
              backgroundColor: 'transparent',
              color: '#FDFBF7',
              border: '2px solid #FDFBF7',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              borderRadius: '4px',
              transition: 'background-color 0.3s ease'
            }}>
              Discover the Oasis
            </a>
          </div>
        </div>
      </section>

      {/* QUICK INTRO SECTION */}
      <section style={{ padding: '100px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '3rem', color: '#1A2B34', marginBottom: '24px' }}>
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