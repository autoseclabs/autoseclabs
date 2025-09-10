const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Services</h3>
            <a href="#services">QA Testing</a>
            <a href="#services">Automation Testing</a>
            <a href="#services">Security Testing</a>
            <a href="#services">AI Automation</a>
            <a href="#services">DevOps</a>
            <a href="#services">Development</a>
            <a href="#services">Pentesting</a>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="#" className="social-link">L</a>
              <a href="#" className="social-link">T</a>
              <a href="#" className="social-link">G</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 AutoSecLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
