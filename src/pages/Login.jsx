import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("Kayıtlı kullanıcı bulunamadı!");
      return;
    }

    if (
      savedUser.email !== form.email ||
      savedUser.password !== form.password
    ) {
      alert("Email veya şifre hatalı!");
      return;
    }

    localStorage.setItem("loggedIn", "true");
    alert("Giriş başarılı!");

    navigate("/");
  }

  return (
    <div className="auth-container">
      <h2>Giriş Yap</h2>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <label>Şifre</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <button className="btn">Giriş Yap</button>
      </form>

      <p className="auth-bottom-text">
        Hesabın yok mu? <Link to="/register">Kayıt Ol</Link>
      </p>
    </div>
  );
}
