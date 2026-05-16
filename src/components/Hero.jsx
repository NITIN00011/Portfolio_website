import profile from "../assets/image.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  const downloadResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #020617, #0f172a)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ flex: 1 }}
        >
          <p
            style={{
              color: "#38bdf8",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            Hello I'm
          </p>

          <h1
            style={{
              fontSize: "70px",
              margin: "0",
              textShadow: "0 0 20px #38bdf8",
            }}
          >
            Nitin Garhwal
          </h1>

          <h2
            style={{
              color: "#cbd5e1",
              fontSize: "35px",
              marginTop: "10px",
            }}
          >
            <Typewriter
              words={[
                "Full Stack Web Developer 🚀",
                "React Developer ⚛️",
                "MERN Stack Developer 🔥",
                "Frontend Designer 🎨",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "20px",
              lineHeight: "1.8",
              fontSize: "18px",
              maxWidth: "600px",
            }}
          >
            I build modern, responsive and professional
            websites using React.js, Node.js and MongoDB.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={downloadResume}
              style={{
                padding: "15px 35px",
                backgroundColor: "#38bdf8",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 0 20px #38bdf8",
              }}
            >
              Download Resume
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://github.com/NITIN00011",
                  "_blank"
                )
              }
              style={{
                padding: "15px 35px",
                backgroundColor: "transparent",
                border: "2px solid #38bdf8",
                borderRadius: "10px",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              GitHub
            </button>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={profile}
            alt="profile"
            style={{
              width: "380px",
              borderRadius: "20px",
              boxShadow: "0 0 40px #38bdf8",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;