function CategorySection() {
  const categories = [
    "Electronics",
    "Fashion",
    "Shoes",
    "Accessories"
  ];

  return (
    <section className="categories" id="categories">
      <h2>Shop By Category</h2>

      <div className="category-list">
        {categories.map((category) => (
          <div className="category-card" key={category}>
            {category}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;