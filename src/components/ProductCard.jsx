import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>

      <div className="product-info">
        <p className="category-name">{product.category}</p>

        <h3>{product.name}</h3>

        <h4>৳ {product.price}</h4>

        <Link to={`/product/${product.id}`} className="details-btn">
          View Details
        </Link>

        <button onClick={() => addToCart(product)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;