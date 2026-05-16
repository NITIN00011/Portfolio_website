import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://portfolio-backend-y6q1.onrender.com/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      alert(data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 20px",
        backgroundColor: "#020617",
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
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "700px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <textarea
          name="message"
          placeholder="Enter Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          style={inputStyle}
        />

        <button
          type="submit"
          style={buttonStyle}
        >
          Send Message 🚀
        </button>
      </form>
    </section>
  );
}

const inputStyle = {
  padding: "18px",
  borderRadius: "12px",
  border: "2px solid #38bdf8",
  backgroundColor: "#0f172a",
  color: "white",
  fontSize: "16px",
  outline: "none",
  boxShadow: "0 0 15px rgba(56,189,248,0.2)",
};

const buttonStyle = {
  padding: "18px",
  borderRadius: "12px",
  border: "none",
  backgroundColor: "#38bdf8",
  color: "black",
  fontWeight: "bold",
  fontSize: "18px",
  cursor: "pointer",
  boxShadow: "0 0 20px #38bdf8",
};

export default Contact;