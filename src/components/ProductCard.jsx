import { Link } from "react-router-dom";
import "../styles/product-card.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>

      <h3>{product.title}</h3>

      <p className="price">{product.price} TL</p>

      <Link to={`/product/${product.id}`} className="btn">
        İncele
      </Link>
    </div>
  );
}
