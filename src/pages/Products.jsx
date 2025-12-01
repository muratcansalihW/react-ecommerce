import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div>
      <h2>Ürünler</h2>

      <div className="row" style={{ marginTop: "20px" }}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
