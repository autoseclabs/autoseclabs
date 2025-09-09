import { motion } from 'framer-motion'

const Features = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title fade-in">Why Choose Us</h2>
        
        {/* Specialized Expertise */}
        <div className="feature-category fade-in">
          <div className="features-grid">
            <div className="glass-card">
              <div className="feature-item">
                <div className="feature-icon">🔧</div>
                <h3>Comprehensive Skill Set</h3>
                <p>End-to-end project capabilities across multiple domains</p>
              </div>
            </div>
            <div className="glass-card">
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <h3>Modern Technologies</h3>
                <p>Latest tools, frameworks, and industry best practices</p>
              </div>
            </div>
            <div className="glass-card">
              <div className="feature-item">
                <div className="feature-icon">🤖</div>
                <h3>AI Integration</h3>
                <p>Cutting-edge automation and intelligent solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Superior Service Delivery */}
        <div className="feature-category fade-in">
          <div className="features-grid">
            <div className="glass-card">
              <div className="feature-item">
                <div className="feature-icon">🌍</div>
                <h3>Global Time Zone Coverage</h3>
                <p>Strategic coverage across major international markets</p>
              </div>
            </div>
            <div className="glass-card">
              <div className="feature-item">
                <div className="feature-icon">🏢</div>
                <h3>Deep Domain Knowledge</h3>
                <p>Industry-specific expertise across 7 major verticals</p>
              </div>
            </div>
           
           
            <div className="glass-card">
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <h3>Rapid Deployment</h3>
                <p>Quick project initiation with streamlined delivery processes</p>
                <p>Our commitment continues until you achieve tangible business result</p>
              </div>
            </div>
          </div>
        </div>

       

        {/* Security & Compliance First */}
        <div className="feature-category fade-in">
          <div className="features-grid">
            <div className="glass-card">
              <div className="feature-item">
                <div className="feature-icon">🔒</div>
                <h3>Data Security</h3>
                <p>GDPR compliance and international data protection standards</p>
              </div>
            </div>
            <div className="glass-card">
              <div className="feature-item">
                <div className="feature-icon">✅</div>
                <h3>Quality Assurance</h3>
                <p>Rigorous QA processes applied to our own service delivery</p>
              </div>
            </div>
            <div className="glass-card">
              <div className="feature-item">
                <div className="feature-icon">⚠️</div>
                <h3>Risk Assessment / Mitigation</h3>
                <p>Comprehensive risk assessment and management strategies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
