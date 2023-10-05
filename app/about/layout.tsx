import Footer from "../components/Footer/Footer";
import aboutBanner from '../assets/Content/about.png'
import Hero from "../components/Hero/Hero";
import HeroTitleOnyl from "../components/Hero/HeroTitleOnyl";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <Hero
          childComponent={<HeroTitleOnyl />}
          img={aboutBanner}
        />
        {children}
        <Footer />

    </>
  );
};

export default layout;