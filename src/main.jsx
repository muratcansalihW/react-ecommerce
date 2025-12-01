import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import "./styles/globals.css";
import "./styles/layout.css";
import "./styles/variables.css";
import "./styles/ui.css";
import "./styles/product-detail.css";
import "./styles/cart.css";
import "./styles/auth.css";

import CartProvider from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
