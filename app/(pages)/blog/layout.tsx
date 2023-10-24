import Footer from "@/app/components/Footer/Footer";


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Footer
        className="max-w-6xl"
      />
    </>
  );
};

export default layout;