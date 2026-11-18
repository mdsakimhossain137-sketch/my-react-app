
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function OrderSuccess() {
  const location = useLocation();
  const order = location.state?.order;

  return (
    <>
      <Navbar />

      <section className="success-container">
        <h1>🎉 Order Successful!</h1>

        <p>Thank you for shopping with DailyShop.</p>

        {order && (
          <>
            <h3>Order ID: {order.id}</h3>
            <h3>Total: ৳ {order.total}</h3>
            <p>Payment: {order.paymentMethod}</p>
          </>
        )}

        <Link to="/my-orders" className="details-btn">
          View My Orders
        </Link>

        <Link to="/products" className="details-btn">
          Continue Shopping
        </Link>
      </section>

      <Footer />
    </>
  );
}

export default OrderSuccess;
