const Testimonials = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title fade-in">What Our Clients Say</h2>
        <div className="features-grid">
          <div className="glass-card fade-in">
            <p>"AutoSecLabs transformed our testing process. Their automation framework reduced our testing time by 70% while improving quality."</p>
            <h4 style={{ marginTop: '1rem', color: '#667eea' }}>- Sarah Johnson, CTO at TechFlow</h4>
          </div>
          <div className="glass-card fade-in">
            <p>"The security testing they provided was comprehensive. They identified critical vulnerabilities we missed and helped us achieve SOC 2 compliance."</p>
            <h4 style={{ marginTop: '1rem', color: '#667eea' }}>- Michael Chen, Founder of SecureApp</h4>
          </div>
          <div className="glass-card fade-in">
            <p>"Professional, reliable, and cost-effective. AutoSecLabs has been our go-to partner for all QA needs."</p>
            <h4 style={{ marginTop: '1rem', color: '#667eea' }}>- Emma Rodriguez, Product Manager</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
