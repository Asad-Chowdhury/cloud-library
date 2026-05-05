import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

export default function AllBooksLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
