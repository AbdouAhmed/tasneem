import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="hero video-hero">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src="/videos/desert.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to TASNEEM</h1>
          <p>The first boutique hotel in the Egyptian Oases designed with a Bedouin and Arabic spirit.</p>
          <Link href="/rooms" className="btn">View Our Rooms</Link>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">A Personalized Authentic Experience</h2>
        <p className="section-subtitle">
           TASNEEM is a small, intimate, and stylish lodging option featuring curated architecture. We guarantee a peaceful and adventurous atmosphere where luxury meets the rich history of the Western Desert.
        </p>
      </section>
    </main>
  );
}