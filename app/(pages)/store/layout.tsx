import Footer from "@/app/components/Footer/Footer";
import NavbarStore from "@/app/components/Navbar/NavbarStore";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavbarStore />
      <div className="min-h-[60vh]">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default layout;