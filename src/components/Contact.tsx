import { useState } from 'react';

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

    try {
      const response = await fetch("YOUR_GOOGLE_SCRIPT_URL_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Thank you for your message! It has been saved.");
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        alert("❌ Failed to submit. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("⚠️ Network error. Please try again.");
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
