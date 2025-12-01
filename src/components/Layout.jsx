import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main
        className="container"
        style={{ minHeight: "70vh", padding: "20px 0" }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
