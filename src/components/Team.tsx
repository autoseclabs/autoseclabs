const Team = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title fade-in">Meet Our Expert Team</h2>
        <div className="team-grid">
          <div className="glass-card fade-in">
            <div className="team-member">
              <div className="member-avatar">AK</div>
              <h3>Alex Kumar</h3>
              <p>Lead QA Engineer</p>
              <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.7)' }}>10+ years in automated testing and quality assurance</p>
            </div>
          </div>
          <div className="glass-card fade-in">
            <div className="team-member">
              <div className="member-avatar">SP</div>
              <h3>Sarah Patel</h3>
              <p>Security Specialist</p>
              <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.7)' }}>Certified ethical hacker with expertise in penetration testing</p>
            </div>
          </div>
          <div className="glass-card fade-in">
            <div className="team-member">
              <div className="member-avatar">MJ</div>
              <h3>Mike Johnson</h3>
              <p>DevOps Architect</p>
              <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.7)' }}>Cloud infrastructure and CI/CD pipeline expert</p>
            </div>
          </div>
          <div className="glass-card fade-in">
            <div className="team-member">
              <div className="member-avatar">LW</div>
              <h3>Lisa Wang</h3>
              <p>AI Automation Lead</p>
              <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.7)' }}>Machine learning and intelligent automation specialist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
