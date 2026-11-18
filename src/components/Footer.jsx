import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h2>Wammas</h2>

      <p>Your favorite online shopping destination.</p>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <p>© 2026 DailyShop. All rights reserved.</p>
    </footer>
  );
}

export default Footer;