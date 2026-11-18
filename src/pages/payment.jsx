import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

function Payment() {
  const { cart, total, clearCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const customer = location.state?.customer;

  const [method, setMethod] = useState("Cash on Delivery");

  function placeOrder(e) {
    e.preventDefault();

    if (!customer || cart.length === 0) {
      alert("Please complete checkout first.");
      navigate("/cart");
      return;
    }

    const order = {
      id: Date.now(),
      customer,
      items: [...cart],
      total,
      paymentMethod: method,
      status: "Pending",
      date: new Date().toLocaleString()
    };

    const oldOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    localStorage.setItem(
      "orders",
      JSON.stringify([order, ...oldOrders])
    );

    clearCart();

    navigate("/order-success", {
      state: { order }
    });
  }

  return (
    <>
      <Navbar />

      <section className="form-container">
        <h1>Select Payment Method</h1>

        <h3>Total: ৳ {total}</h3>

        <form onSubmit={placeOrder}>
          <label>
            <input
              type="radio"
              value="Cash on Delivery"
              checked={method === "Cash on Delivery"}
              onChange={(e) => setMethod(e.target.value)}
            />
            Cash on Delivery
          </label>

          <label>
            <input
              type="radio"
              value="bKash"
              checked={method === "bKash"}
              onChange={(e) => setMethod(e.target.value)}
            />
            bKash (Demo)
          </label>

          <label>
            <input
              type="radio"
              value="Nagad"
              checked={method === "Nagad"}
              onChange={(e) => setMethod(e.target.value)}
            />
            Nagad (Demo)
          </label>

          <p className="notice">
            Mobile payment options are demonstration only.
            No real money will be charged.
          </p>

          <button type="submit">Place Order</button>
        </form>
      </section>

      <Footer />
    </>
  );
}

export default Payment;