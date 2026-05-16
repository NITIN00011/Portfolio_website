import portfolio from "../assets/port.png";
import weather from "../assets/weather.png";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      image: portfolio,
      desc: "Modern portfolio website using React and Node.js",
      link: "https://nitin00011.github.io/portfolio-website/",
    },

    {
      title: "Weather App",
      image: weather,
      desc: "Live weather application using API integration",
      link: "https://nitin00011.github.io/weather-app/",
    },
  ];

  return (
    <section
      id="projects"
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
        My Projects
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              width: "340px",
              borderRadius: "20px",
              overflow: "hidden",
              background:
                "linear-gradient(145deg, #1e293b, #0f172a)",
              boxShadow:
                "0 0 20px rgba(56,189,248,0.3)",
              transition: "0.4s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 0 30px #38bdf8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0px)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(56,189,248,0.3)";
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "25px" }}>
              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "15px",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: "1.7",
                }}
              >
                {project.desc}
              </p>

              <button
                onClick={() =>
                  window.open(project.link, "_blank")
                }
                style={{
                  marginTop: "20px",
                  padding: "15px 30px",
                  backgroundColor: "#38bdf8",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  boxShadow: "0 0 20px #38bdf8",
                }}
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;