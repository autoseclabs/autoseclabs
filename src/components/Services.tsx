const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Our Services</h2>
        <div className="services-grid">
          <div className="glass-card fade-in">
            <div className="feature-icon">🔍</div>
            <h3>QA/Manual Testing</h3>
            <p>Comprehensive testing to ensure bug-free, smooth user experiences across all platforms and devices.</p>
          </div>
          <div className="glass-card fade-in">
            <div className="feature-icon">🤖</div>
            <h3>Automation Testing</h3>
            <p>Faster releases with Playwright, Selenium, and CI/CD integration for continuous testing.</p>
          </div>
          <div className="glass-card fade-in">
            <div className="feature-icon">🔒</div>
            <h3>Security Testing</h3>
            <p>Penetration testing, vulnerability analysis, and compliance audits to protect your applications.</p>
          </div>
          <div className="glass-card fade-in">
            <div className="feature-icon">🧠</div>
            <h3>AI Automation</h3>
            <p>Leverage artificial intelligence to cut costs and increase efficiency in your testing processes.</p>
          </div>
          <div className="glass-card fade-in">
            <div className="feature-icon">⚙️</div>
            <h3>DevOps</h3>
            <p>CI/CD pipelines, cloud deployments, and scalability solutions for modern development workflows.</p>
          </div>
          <div className="glass-card fade-in">
            <div className="feature-icon">💻</div>
            <h3>Development</h3>
            <p>Full-stack web and SaaS product development with modern technologies and best practices.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
