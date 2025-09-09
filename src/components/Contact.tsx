import { useState } from 'react';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxyT-lcHN2FjJBjUUqMXZs08lmcq-C6t02Jmf9jelz8u7X2pUeihrNVfyrPUrMWsoTA/exec"; // <- replace if different

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // include timestamp before sending
    const submissionData = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    // Convert to application/x-www-form-urlencoded to avoid preflight CORS issues
    const params = new URLSearchParams();
    Object.entries(submissionData).forEach(([key, value]) => {
      params.append(key, String(value ?? ''));
    });

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: params.toString()
      });

      // Apps Script returns JSON, so parse it
      const json = await response.json().catch(() => null);

      if (response.ok) {
        alert('✅ Thank you for your message! It has been saved.');
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        });
        console.log('Submission response:', json);
      } else {
        console.error('Submission failed', response.status, json);
        alert('❌ Failed to submit. Please try again later.');
      }
    } catch (error) {
      console.error('Network / CORS error:', error);
      alert('⚠️ Network error. Please check console for details.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Get In Touch</h2>
        <div className="contact-form fade-in">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Interested In</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 
               bg-blue text-white-800 
               focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select a service</option>
                  <option value="manual-qa">Manual QA Testing</option>
                  <option value="test-automation">Test Automation Framework</option>
                  <option value="performance-testing">Performance & Load Testing</option>
                  <option value="mobile-testing">Mobile App Testing</option>
                  <option value="api-testing">API Testing & Validation</option>
                  <option value="security-testing">Security Testing</option>
                  <option value="cicd-pipeline">CI/CD Pipeline Implementation</option>
                  <option value="ai-automation">AI-Powered Test Automation</option>
                  <option value="marketing-automation">Marketing Automation Setup</option>
                  <option value="legacy-modernization">Legacy Application Modernizations</option>
                  <option value="penetration-testing">Penetration Testing</option>
                  <option value="web-development">Web Application Development</option>
                  <option value="devops-transformation">DevOps Transformation</option>
                  <option value="test-strategy">Test Strategy & Planning</option>
                  <option value="technical-audits">Technical Audits</option>
                  <option value="other">Other</option>

              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="cta-button" style={{ width: '100%' }}>
              Send Message
            </button>
          </form>
        </div>

        <div className="quick-connect fade-in">
          <a href="mailto:contact@autoseclabs.space" className="connect-button">
            ✉️ contact@autoseclabs.space
          </a>
          <a href="https://wa.me/+918712388153" className="connect-button">
            💬 WhatsApp Chat
          </a>
        </div>

        {/* Global Coverage Info */}
        <div className="global-coverage fade-in">
          <h3>Global Service Coverage</h3>
          <div className="coverage-grid">
            <div className="coverage-item">
              <h4>🌍 Regions</h4>
              <p>North America (US, Canada)<br/>
              Europe (UK, Germany, Netherlands, Sweden, France)<br/>
              Asia-Pacific (Australia, Singapore)<br/>
              Middle East (UAE, Israel)</p>
            </div>
            <div className="coverage-item">
              <h4>🔧 Specializations</h4>
              <p>Quality Assurance & Testing<br/>
              DevOps & Cloud Migration<br/>
              AI & Data Analytics<br/>
              Security & Compliance<br/>
              Legacy Modernization<br/>
              Performance Optimization</p>
            </div>
            <div className="coverage-item">
              <h4>🏢 Industries</h4>
              <p>Financial Services | Healthcare | Life Sciences<br/>
              Manufacturing | Public Sector | Retail & CPG<br/>
              Technology, Media & Telecom</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;