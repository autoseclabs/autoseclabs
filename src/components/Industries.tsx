const Industries = () => {
  return (
    <section id="industries" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Industry Domains We Serve</h2>
        <div className="industries-grid fade-in">
          <div className="industry-card">
            <div className="industry-icon">🏦</div>
            <h3>Financial Services</h3>
            <p>Banking, Insurance, Investment platforms, and FinTech solutions</p>
          </div>
          <div className="industry-card">
            <div className="industry-icon">🏥</div>
            <h3>Healthcare</h3>
            <p>Medical devices, Patient management systems, and Health tech platforms</p>
          </div>
          <div className="industry-card">
            <div className="industry-icon">🧬</div>
            <h3>Life Sciences</h3>
            <p>Pharmaceutical research, Clinical trials, and Biotech applications</p>
          </div>
          <div className="industry-card">
            <div className="industry-icon">🏭</div>
            <h3>Manufacturing</h3>
            <p>Industrial IoT, Supply chain management, and Smart factory solutions</p>
          </div>
          <div className="industry-card">
            <div className="industry-icon">🏛️</div>
            <h3>Public Sector</h3>
            <p>Government digitization, Smart city initiatives, and Civic tech platforms</p>
          </div>
          <div className="industry-card">
            <div className="industry-icon">🛒</div>
            <h3>Retail & CPG</h3>
            <p>E-commerce platforms, Inventory management, and Consumer analytics</p>
          </div>
          <div className="industry-card">
            <div className="industry-icon">📱</div>
            <h3>Technology, Media & Telecom</h3>
            <p>SaaS platforms, Media streaming, and Telecommunications infrastructure</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
