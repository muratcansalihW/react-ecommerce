import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Site açılınca otomatik Products sayfasına git */}
        <Route path="/" element={<Navigate to="/products" replace />} />

        <Route
          path="/products"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />

        <Route
          path="/product/:id"
          element={
            <Layout>
              <ProductDetail />
            </Layout>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Layout>
                <Cart />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Layout>
                <Checkout />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
