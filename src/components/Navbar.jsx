import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import "../styles/Navbar.css";

export default function Navbar() {
  const { state } = useContext(CartContext);

  // Sepetteki toplam ürün adedi
  const cartCount = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Kullanıcı bilgisi (localStorage'dan)
  const user = JSON.parse(localStorage.getItem("user"));
  const loggedIn = localStorage.getItem("loggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    // İstersen user bilgisini de temizleyebilirsin:
    // localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        {/* Logo */}
        <Link to="/products" className="logo">
          E-Shop
        </Link>

        {/* Menü Linkleri */}
        <div className="nav-links">
          <Link to="/products">Ürünler</Link>

          <Link to="/cart">Sepet ({cartCount})</Link>

          {loggedIn ? (
            <>
              <span className="welcome-text">Merhaba, {user?.name}</span>
              <button className="btn logout-btn" onClick={handleLogout}>
                Çıkış Yap
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Giriş Yap</Link>
              <Link to="/register">Kayıt Ol</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
