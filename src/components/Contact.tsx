import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
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
            ✉️ hello@autoseclabs.com
          </a>
          <a href="https://wa.me/1234567890" className="connect-button">
            💬 WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
