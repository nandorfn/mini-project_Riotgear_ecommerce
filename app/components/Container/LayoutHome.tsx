import { StaticImageData } from "next/image";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";

type LayoutProps = {
  children: React.ReactNode;
  heroChildren: any;
  banner: StaticImageData;
  
}

const LayoutHome = ({
  children,
  banner,
  heroChildren
}: LayoutProps) => {
  return (
    <>
      <Hero
        childComponent={heroChildren}
        img={banner}
      />
      {children}
      <Footer
        className="max-w-6xl"
      />
    </>
  );
};

export default LayoutHome;