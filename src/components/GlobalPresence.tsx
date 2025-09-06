const GlobalPresence = () => {
  const countries = [
    { name: "United States", flag: "https://flagcdn.com/us.svg" },
    { name: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
    { name: "Canada", flag: "https://flagcdn.com/ca.svg" },
    { name: "Germany", flag: "https://flagcdn.com/de.svg" },
    { name: "UAE", flag: "https://flagcdn.com/ae.svg" },
    { name: "Singapore", flag: "https://flagcdn.com/sg.svg" },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title fade-in">Global Presence</h2>
        <div
          className="glass-card fade-in"
          style={{ textAlign: "center", padding: "3rem" }}
        >
          <h3 style={{ marginBottom: "2rem" }}>Serving Clients Worldwide</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "2rem",
              fontSize: "1.2rem",
            }}
          >
            {countries.map((country, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  minWidth: "180px",
                  justifyContent: "flex-start",
                }}
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  style={{ width: "32px", height: "24px", borderRadius: "4px" }}
                />
                <span>{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
