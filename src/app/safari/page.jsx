export default function SafariPage() {
  return (
    <section className="section" style={{ backgroundColor: '#F4EFE6' }}>
        <h1 className="section-title">Sightseeing Tours & Safaris</h1>
        <p className="section-subtitle">Explore the Western Desert by 4x4 Jeeps and Camels.</p>
        <div className="card-container">
            <div className="card" style={{ width: '100%' }}>
                <div className="card-content">
                    <h3>The White & Black Deserts</h3>
                    <p>Visit the Black Desert with its striking black stones, and the famous White Desert Park. See the chalk-white landscape sculpted by winds into monoliths, mushrooms, and ice cream cones.</p>
                </div>
            </div>
            <div className="card" style={{ width: '100%' }}>
                <div className="card-content">
                    <h3>Antiquities & History</h3>
                    <p>Discover the Valley of Golden Mummies, the Temple of Ain el-Muftella, the richly decorated Tombs at Qasr Selim, and hike Gebel Al Ingleez (Black Mountain) for an unforgettable sunset view.</p>
                </div>
            </div>
        </div>
    </section>
  );
}