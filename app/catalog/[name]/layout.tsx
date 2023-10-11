import Footer from "@/app/components/Footer/Footer";
import NavbarStore from "@/app/components/Navbar/NavbarStore";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <NavbarStore />
        <div className="px-4 flex flex-col gap-[1.12rem]">
          {children}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default layout;