import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    total,
    removeFromCart,
    updateQuantity
  } = useCart();

  return (
    <>
      <Navbar />

      <section className="page-container">
        <h1>Shopping Cart</h1>

        {cart.length === 0 ? (
          <>
            <p>Your cart is empty.</p>
            <Link to="/products">Continue Shopping</Link>
          </>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div>
                  <h3>{item.name}</h3>
                  <p>৳ {item.price}</p>

                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>

                  <span> {item.quantity} </span>

                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>

                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <h2>Total: ৳ {total}</h2>

            <Link to="/checkout" className="details-btn">
              Proceed To Checkout
            </Link>
          </>
        )}
      </section>

      <Footer />
    </>
  );
}

export default Cart;