export default function RoomsPage() {
  return (
    <section className="section" style={{ backgroundColor: '#F4EFE6' }}>
        <h1 className="section-title">Our Accommodations</h1>
        <p className="section-subtitle">Luxury living with a breathtaking view of the oasis and mountains.</p>
        <div className="card-container">
            <div className="card" style={{ width: '900px', display: 'flex', flexDirection: 'row' }}>
                <div className="card-content" style={{ width: '100%', padding: '40px' }}>
                    <h3>Panoramic Twin Rooms</h3>
                    <p>All rooms feature balconies overlooking the East and West, providing a stunning clear view of the oasis and the mountains in the background.</p>
                    <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
                        <li><strong>Beds:</strong> Comfortable Twin Beds</li>
                        <li><strong>Bathroom:</strong> Private bath and shower</li>
                        <li><strong>Amenities:</strong> In-room safe boxes, mini bars, and hair dryers</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}