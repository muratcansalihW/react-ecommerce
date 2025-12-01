import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} E-Shop. Tüm hakları saklıdır.</p>
    </footer>
  );
}
