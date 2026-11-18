import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    text: ""
  });

  function handleChange(e) {
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Demo message submitted!");
    setMessage({ name: "", email: "", text: "" });
  }

  return (
    <>
      <Navbar />

      <section className="form-container">
        <h1>Contact Us</h1>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            value={message.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={message.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="text"
            placeholder="Your Message"
            value={message.text}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </section>

      <Footer />
    </>
  );
}

export default Contact;