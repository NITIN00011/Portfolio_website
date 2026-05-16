function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "C++",
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "100px 20px",
        backgroundColor: "#0f172a",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "50px",
          marginBottom: "50px",
          textShadow: "0 0 20px #38bdf8",
        }}
      >
        My Skills
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "25px",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              width: "220px",
              padding: "30px",
              borderRadius: "20px",
              background:
                "linear-gradient(145deg, #1e293b, #0f172a)",
              boxShadow:
                "0 0 20px rgba(56,189,248,0.3)",
              transition: "0.4s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform =
                "translateY(-10px)";
              e.target.style.boxShadow =
                "0 0 30px #38bdf8";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform =
                "translateY(0px)";
              e.target.style.boxShadow =
                "0 0 20px rgba(56,189,248,0.3)";
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                margin: 0,
              }}
            >
              {skill}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;