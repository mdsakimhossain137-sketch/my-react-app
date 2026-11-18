import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, total } = useCart();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });

  function handleChange(e) {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    navigate("/payment", {
      state: { customer }
    });
  }

  return (
    <>
      <Navbar />

      <section className="form-container">
        <h1>Checkout</h1>

        <h3>Order Total: ৳ {total}</h3>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            value={customer.name}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Mobile Number"
            value={customer.phone}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={customer.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="address"
            placeholder="Full Delivery Address"
            value={customer.address}
            onChange={handleChange}
            required
          />

          <button type="submit">Continue To Payment</button>
        </form>
      </section>

      <Footer />
    </>
  );
}

export default Checkout;