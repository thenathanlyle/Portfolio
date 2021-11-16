import Footer from "../componenets/Footer";
import Header from "../componenets/Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="children">{children}</div>
      <Footer />
    </div>
  );
}
