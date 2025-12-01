import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const { dispatch } = useContext(CartContext);

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div>Ürün bulunamadı.</div>;

  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <div>
      <div className="product-detail">
        <img src={product.image} alt={product.title} className="detail-img" />

        <div className="detail-info">
          <h2>{product.title}</h2>
          <p className="detail-price">{product.price} TL</p>
          <p className="detail-category">
            Kategori: <strong>{product.category}</strong>
          </p>
          <p className="detail-desc">
            Bu ürünle ilgili detaylı açıklama burada yer alır.
          </p>

          <button
            className="btn"
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          >
            Sepete Ekle
          </button>
        </div>
      </div>

      {related.length > 0 && (
        <div style={{ marginTop: "40px" }}>
          <h3>Benzer Ürünler</h3>
          <div className="row" style={{ marginTop: "20px" }}>
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
