import Footer from "../components/Footer/Footer";
import NavbarStore from "../components/Navbar/NavbarStore";

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <NavbarStore />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default layout;