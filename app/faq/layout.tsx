import Footer from "../components/Footer/Footer";

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        {children}
        <Footer />
    </>
  );
};

export default layout;