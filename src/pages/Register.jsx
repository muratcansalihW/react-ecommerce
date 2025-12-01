import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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

    if (!form.name || !form.email || !form.password) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    // Fake Backend → Kullanıcıyı localStorage'a yaz
    localStorage.setItem("user", JSON.stringify(form));

    alert("Kayıt başarılı!");

    // Login sayfasına yönlendir
    navigate("/login");
  }

  return (
    <div className="auth-container">
      <h2>Kayıt Ol</h2>

      <form onSubmit={handleSubmit}>
        <label>İsim</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

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

        <button className="btn">Kayıt Ol</button>
      </form>

      <p className="auth-bottom-text">
        Zaten hesabın var mı? <Link to="/login">Giriş Yap</Link>
      </p>
    </div>
  );
}
