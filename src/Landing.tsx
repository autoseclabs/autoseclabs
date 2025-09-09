import { useEffect, useState } from "react";
import "./styles.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Features from "./components/Features";
import GlobalPresence from "./components/GlobalPresence";
import Process from "./components/Process";
import Contact from "./components/Contact";

const Landing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#industries">Industries</a></li>
            <li><a href="#global">Global Presence</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>
        </div>
        <div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#industries" onClick={() => setMobileMenuOpen(false)}>Industries</a></li>
            <li><a href="#global" onClick={() => setMobileMenuOpen(false)}>Global Presence</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero - Import from Hero component */}
      <Hero />

      {/* About Us */}
      <section className="section" id="about">
        <div className="container">
          <h2 className="section-title fade-in">About AutoSec Labs</h2>
          <div className="about-content fade-in">
            <h3>Excellence in IT Technical and Analytical Capabilities</h3>
            <p className="about-intro">
              We are a specialized team of elite IT professionals dedicated to delivering premium quality assurance, 
              automation, and development solutions to international markets. Founded on the principle that every business 
              deserves access to world-class IT services, we bridge the gap between cutting-edge technology and practical 
              business needs.
            </p>
            
            <div className="about-story">
              <h4>Our Story</h4>
              <p>
                AutoSec Labs was born from a simple yet powerful vision: to provide boutique-quality IT services with 
                global reach. We recognized that many organizations struggle to keep pace with digital transformation 
                demands, either overpaying for enterprise solutions they don't need or settling for subpar services 
                that can't scale with their growth.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <h4>Boutique Quality</h4>
                <p>Personalized attention to every client with the global reach and capabilities of enterprise solutions</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🌍</div>
                <h4>Global Presence</h4>
                <p>Serving premium markets across North America, Europe, Asia-Pacific, and Middle East with 24/7 coverage</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">⚡</div>
                <h4>Proven Results</h4>
                <p>Track record of reducing testing time by 70%, improving system reliability by 90%, and accelerating digital transformation</p>
              </div>
            </div>

            <div className="about-values">
              <h4>Our Core Values</h4>
              <div className="values-grid">
                <div className="value-item">
                  <strong>Excellence Over Everything</strong>
                  <p>We don't just meet expectations – we exceed them with solutions that work exceptionally well.</p>
                </div>
                <div className="value-item">
                  <strong>Transparency in Everything</strong>
                  <p>Open, honest communication with no hidden fees, surprise costs, or confusing technical jargon.</p>
                </div>
                <div className="value-item">
                  <strong>Results-Driven Approach</strong>
                  <p>Our success is measured by your success. We're not satisfied until you see tangible improvements.</p>
                </div>
                <div className="value-item">
                  <strong>Continuous Innovation</strong>
                  <p>Constantly learning and implementing the latest tools to ensure you have cutting-edge solutions.</p>
                </div>
              </div>
            </div>

            <p className="mission-statement">
              <strong>Our Mission:</strong> Transform businesses through innovative technology solutions, rigorous quality 
              standards, and strategic technical expertise. We're not just a service provider – we're your long-term 
              technology partner, growing and adapting alongside your business.
            </p>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="section">
        <div className="container">
          <h2 className="section-title fade-in">Our Core Expertise</h2>
          <div className="expertise-grid fade-in">
            <div className="glass-card">
              <div className="expertise-icon">🔧</div>
              <h3>Software Quality Assurance & Quality Engineering</h3>
              <p>Manual and automated testing expertise with framework development and implementation using the latest and trending tools and technologies.</p>
            </div>
            <div className="glass-card">
              <div className="expertise-icon">⚡</div>
              <h3>Performance Testing Excellence</h3>
              <p>Comprehensive load testing, scalability analysis, reliability assessment, usability validation, and compatibility testing.</p>
            </div>
            <div className="glass-card">
              <div className="expertise-icon">☁️</div>
              <h3>DevOps Transformation</h3>
              <p>CI/CD Pipelines, Cloud migration, DevSecOps, FinOps, and DataOps implementation with industry-leading practices.</p>
            </div>
            <div className="glass-card">
              <div className="expertise-icon">🤖</div>
              <h3>Data Analytics & AI Solutions</h3>
              <p>Advanced services for data analysis, Artificial Intelligence, and Machine Learning integration.</p>
            </div>
            <div className="glass-card">
              <div className="expertise-icon">🛠️</div>
              <h3>Managed Services & Operations</h3>
              <p>Multiplatform support, marketing operations, and application modernizations for seamless business continuity.</p>
            </div>
            <div className="glass-card">
              <div className="expertise-icon">🔒</div>
              <h3>Security & Compliance</h3>
              <p>Ensure continuous safety, security, and integrity of your online operations and data centers.</p>
            </div>
            <div className="glass-card">
              <div className="expertise-icon">📊</div>
              <h3>ETL Testing Specialists</h3>
              <p>Data validity, integrity, and accuracy testing for databases and data warehouses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Import from Services component */}
      <Services />

      {/* Industries - Import from Industries component */}
      <Industries />

      {/* Features - Import from Features component */}
      <Features />

      {/* Global Presence - Import from GlobalPresence component */}
      <GlobalPresence />

      {/* Process/Commitment - Import from Process component */}
      <Process />

      {/* Contact - Import from Contact component */}
      <Contact />

      {/* Footer */}
      <footer>
        <div className="footer-content container">
          <div className="footer-section">
            <h3>About AutoSec Labs</h3>
            <p>Premium IT Services for Global Enterprises. We specialize in quality assurance, automation, and development solutions with a focus on delivering tangible business results.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#industries">Industries</a>
            <a href="#global">Global Presence</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-section">
            <h3>Global Coverage</h3>
            <p>North America | Europe | Asia-Pacific | Middle East</p>
            <p>Premium markets worldwide with specialized expertise across 7 major industry verticals.</p>
          </div>
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-links">
              <a href="mailto:contact@autoseclabs.space" className="social-link">✉️ Email</a>
              <a href="https://wa.me/+918712388153" className="social-link">💬 WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 AutoSec Labs. All rights reserved.</p>
          <p>Ready to create a more competitive and sustainable business? Let's start the conversation.</p>
        </div>
      </footer>
    </>
  );
};

export default Landing;

