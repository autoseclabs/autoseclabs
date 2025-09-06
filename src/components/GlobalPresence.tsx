const GlobalPresence = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title fade-in">Global Presence</h2>
        <div className="glass-card fade-in" style={{ textAlign: 'center', padding: '3rem' }}>
          <h3 style={{ marginBottom: '2rem' }}>Serving Clients Worldwide</h3>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', fontSize: '1.2rem' }}>
            <div>🇺🇸 United States</div>
            <div>🇬🇧 United Kingdom</div>
            <div>🇨🇦 Canada</div>
            <div>🇩🇪 Germany</div>
            <div>🇦🇪 UAE</div>
            <div>🇸🇬 Singapore</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
