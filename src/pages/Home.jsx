import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import CategorySection from "../components/CategorySection";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <CategorySection />

      <section className="products-section" id="products">
        <h2>Our Latest Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;