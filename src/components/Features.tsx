import { motion } from 'framer-motion'

const Features = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title fade-in">Why Choose AutoSecLabs?</h2>
        <div className="features-grid">
          <div className="glass-card fade-in">
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Expertise</h3>
              <p>Our team of certified professionals brings years of experience in QA, security testing, and automation across diverse industries.</p>
            </div>
          </div>
          <div className="glass-card fade-in">
            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <h3>Affordability</h3>
              <p>Cost-effective solutions tailored for startups and growing businesses without compromising on quality.</p>
            </div>
          </div>
          <div className="glass-card fade-in">
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h3>Reliability</h3>
              <p>Consistent delivery, transparent communication, and 24/7 support to ensure your project success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
