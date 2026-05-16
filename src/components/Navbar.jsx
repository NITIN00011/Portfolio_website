function Navbar() {
  const navStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(15,23,42,0.8)",
    backdropFilter: "blur(10px)",
    zIndex: 1000,
    boxShadow: "0 0 20px rgba(56,189,248,0.2)",
    boxSizing: "border-box",
  };

  const linkContainer = {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "17px",
    transition: "0.3s",
  };

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <h2
        style={{
          color: "#38bdf8",
          margin: 0,
          fontSize: "24px",
          textShadow: "0 0 10px #38bdf8",
          whiteSpace: "nowrap",
        }}
      >
        Nitin Portfolio
      </h2>

      {/* Links */}
      <div style={linkContainer}>
        <a href="#home" style={linkStyle}>
          Home
        </a>

        <a href="#skills" style={linkStyle}>
          Skills
        </a>

        <a href="#projects" style={linkStyle}>
          Projects
        </a>

        <a href="#contact" style={linkStyle}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;