import Footer from "../componenets/Footer";
import Header from "../componenets/Header";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="children">{children}</div>
      <Footer />
    </div>
  );
}
