const GlobalPresence = () => {
  const tier1Markets = [
    { name: "United States", flag: "https://flagcdn.com/us.svg", description: "Silicon Valley startups, enterprise solutions, unicorn companies" },
    { name: "United Kingdom", flag: "https://flagcdn.com/gb.svg", description: "London fintech hub, AI/healthtech innovation" },
    { name: "Germany", flag: "https://flagcdn.com/de.svg", description: "Berlin & Munich SaaS ecosystem, engineering excellence" },
    { name: "Canada", flag: "https://flagcdn.com/ca.svg", description: "Toronto/Vancouver AI and tech innovation centers" },
    { name: "Australia", flag: "https://flagcdn.com/au.svg", description: "Sydney/Melbourne SaaS & edtech boom, mining technology" },
    { name: "Singapore", flag: "https://flagcdn.com/sg.svg", description: "Asia's startup hub, fintech and cybersecurity focus" },
    { name: "UAE", flag: "https://flagcdn.com/ae.svg", description: "Dubai's tech transformation, smart city initiatives" },
    { name: "Israel", flag: "https://flagcdn.com/il.svg", description: "Global cybersecurity leadership, defense technology" },
    { name: "Netherlands", flag: "https://flagcdn.com/nl.svg", description: "Amsterdam SaaS ecosystem, sustainable technology" },
    { name: "Sweden", flag: "https://flagcdn.com/se.svg", description: "Stockholm's music/gaming tech, clean technology" },
    { name: "France", flag: "https://flagcdn.com/fr.svg", description: "Paris AI hub, luxury technology solutions" },
  
  ];

  
  return (
    <section id="global" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Global Market Presence</h2>
        
        {/* Tier 1 Markets */}
        <div className="market-tier fade-in">
          <div className="markets-grid">
            {tier1Markets.map((country, index) => (
              <div key={index} className="market-card">
                <div className="market-header">
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="market-flag"
                  />
                  <span className="market-name">{country.name}</span>
                </div>
                <p className="market-description">{country.description}</p>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default GlobalPresence;
