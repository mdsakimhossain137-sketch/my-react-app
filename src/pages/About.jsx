import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="page-container">
        <h1>About Wammas</h1>

        <p>
          Welcome to DailyShop, your online shopping destination.
          We provide quality products at affordable prices.
        </p>

        <p>
          Our mission is to make online shopping easy,
          comfortable and convenient for everyone.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default About;