import { useEffect } from "react";
import "./styles.css";

const Landing = () => {
  useEffect(() => {
    // Stats animation
    const counters = document.querySelectorAll(".stat-number");
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target")!;
        const count = +counter.textContent!;
        const speed = 200;
        const increment = target / speed;

        if (count < target) {
          counter.textContent = Math.ceil(count + increment).toString();
          setTimeout(updateCount, 30);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };
      updateCount();
    });

    // Scroll fade-in
    const faders = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    faders.forEach(fader => observer.observe(fader));
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <div className="logo">AutoSec Labs</div>
          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <h1>Step Into the <span className="highlight">Digital Revolution</span></h1>
          <h2>Redefining the future of cybersecurity and technology innovation.</h2>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container stats-grid fade-in">
          <div className="glass-card">
            <h3 className="stat-number" data-target="7000">0</h3>
            <p>Our Cyberpunk Community</p>
          </div>
          <div className="glass-card">
            <h3 className="stat-number" data-target="727000">0</h3>
            <p>Our Technology Users</p>
          </div>
          <div className="glass-card">
            <h3 className="stat-number" data-target="72">0</h3>
            <p>Years of Experience</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <h2 className="section-title">Explore Our Services</h2>
        <div className="container services-grid fade-in">
          <div className="glass-card service-item">
            <h3>Cybersecurity Solutions</h3>
            <p>Protecting your business with advanced defense strategies.</p>
          </div>
          <div className="glass-card service-item">
            <h3>AI & Automation</h3>
            <p>Harness the power of intelligent automation to grow.</p>
          </div>
          <div className="glass-card service-item">
            <h3>IoT Security</h3>
            <p>Securing the connected world of devices and cars.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <h2 className="section-title">Contact Us</h2>
        <form className="contact-form fade-in">
          <div className="form-group">
            <label>Name</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows={4}></textarea>
          </div>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content container">
          <div className="footer-section">
            <h3>About</h3>
            <p>AutoSec Labs pioneers in cybersecurity and AI-driven security systems.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="#hero">Home</a>
            <a href="#services">Services</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-links">
              <a href="#" className="social-link">X</a>
              <a href="#" className="social-link">In</a>
              <a href="#" className="social-link">Gh</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">© 2025 AutoSec Labs. All rights reserved.</div>
      </footer>
    </>
  );
};

export default Landing;
