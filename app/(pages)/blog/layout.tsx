import Footer from "@/app/components/Footer/Footer";


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default layout;