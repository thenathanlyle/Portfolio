import Footer from "../componenets/Footer";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="children">{children}</div>
      <Footer />
    </div>
  );
}
