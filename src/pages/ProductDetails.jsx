import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <>
      <Navbar />

      <section className="details-container">
        <img src={product.image} alt={product.name} />

        <div>
          <h1>{product.name}</h1>
          <p>Category: {product.category}</p>
          <h2>৳ {product.price}</h2>
          <p>{product.description}</p>

          <button onClick={() => addToCart(product)}>
            Add To Cart
          </button>

          <Link to="/cart" className="details-btn">
            Go To Cart
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProductDetails;