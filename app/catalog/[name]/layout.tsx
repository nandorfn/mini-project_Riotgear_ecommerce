import Footer from "@/app/components/Footer/Footer";
import NavbarStore from "@/app/components/Navbar/NavbarStore";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <NavbarStore />
        {children}
      </div>

      <Footer />
    </>
  );
};

export default layout;