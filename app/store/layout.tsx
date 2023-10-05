import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import NavbarStore from "../components/Navbar/NavbarStore";

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <section className="max-w-6xl p-2 md:p-4 mx-auto">
        <NavbarStore />
        {children}
        </section>
        <Footer />
    </>
  );
};

export default layout;