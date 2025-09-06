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
              >
                <option value="">Select a service</option>
                <option value="qa-testing">QA/Manual Testing</option>
                <option value="automation">Automation Testing</option>
                <option value="security">Security Testing</option>
                <option value="ai-automation">AI Automation</option>
                <option value="devops">DevOps</option>
                <option value="development">Development</option>
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
          <a href="mailto:sales@autoseclabs.com" className="connect-button">
            ✉️ sales@autoseclabs.com
          </a>
          <a href="https://wa.me/+918712388153" className="connect-button">
            💬 WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
