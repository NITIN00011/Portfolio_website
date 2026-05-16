function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        textAlign: "center",
        padding: "50px 20px",
        borderTop: "1px solid rgba(56,189,248,0.3)",
      }}
    >
      <h2
        style={{
          color: "#38bdf8",
          marginBottom: "20px",
          textShadow: "0 0 10px #38bdf8",
        }}
      >
        Nitin Portfolio
      </h2>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "30px",
        }}
      >
        Full Stack Web Developer 🚀
      </p>

      {/* Social Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() =>
            window.open(
              "https://github.com/NITIN00011",
              "_blank"
            )
          }
          style={buttonStyle}
        >
          GitHub
        </button>

        <button
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/nitin-garhwal-b171b1329/",
              "_blank"
            )
          }
          style={buttonStyle}
        >
          LinkedIn
        </button>

        <button
          onClick={() =>
            window.open(
              "https://www.instagram.com/nitin__garhwal",
              "_blank"
            )
          }
          style={buttonStyle}
        >
          Instagram
        </button>
      </div>

      <p
        style={{
          marginTop: "40px",
          color: "#64748b",
          fontSize: "14px",
        }}
      >
        © 2026 Nitin Garhwal | All Rights Reserved
      </p>
    </footer>
  );
}

const buttonStyle = {
  padding: "14px 28px",
  borderRadius: "10px",
  border: "2px solid #38bdf8",
  backgroundColor: "transparent",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
  boxShadow: "0 0 15px rgba(56,189,248,0.4)",
};

export default Footer;