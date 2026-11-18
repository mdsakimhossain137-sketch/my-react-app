import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyOrders() {
  const orders = JSON.parse(
    localStorage.getItem("orders") || "[]"
  );

  return (
    <>
      <Navbar />

      <section className="page-container">
        <h1>My Orders</h1>

        {orders.length === 0 ? (
          <p>You have not placed any orders yet.</p>
        ) : (
          orders.map((order) => (
            <div className="order-card" key={order.id}>
              <h3>Order ID: {order.id}</h3>

              <p>Customer: {order.customer.name}</p>
              <p>Phone: {order.customer.phone}</p>
              <p>Total: ৳ {order.total}</p>
              <p>Payment: {order.paymentMethod}</p>
              <p>Status: {order.status}</p>
              <p>Date: {order.date}</p>

              <h4>Products:</h4>

              {order.items.map((item) => (
                <p key={item.id}>
                  {item.name} × {item.quantity}
                </p>
              ))}
            </div>
          ))
        )}
      </section>

      <Footer />
    </>
  );
}

export default MyOrders;