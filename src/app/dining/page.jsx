export default function DiningPage() {
  return (
    <section className="section">
        <h1 className="section-title">Dining at TASNEEM</h1>
        <div className="card-container">
            <div className="card" style={{ width: '450px' }}>
                <div className="card-content">
                    <h3>The Main Restaurant</h3>
                    <p>Fully equipped with full board and catering facilities. Enjoy your meals indoor or outdoor while overlooking the spectacular oasis and mountains.</p>
                </div>
            </div>
            <div className="card" style={{ width: '450px' }}>
                <div className="card-content">
                    <h3>The Coffee Shop</h3>
                    <p>A relaxing indoor and outdoor space serving all kinds of authentic Egyptian beverages and soft drinks.</p>
                </div>
            </div>
        </div>
    </section>
  );
}