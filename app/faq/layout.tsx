import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import HeroTitleOnyl from "../components/Hero/HeroTitleOnyl";
import faqBanner from '../assets/Content/faq.png'


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Hero
        childComponent={<HeroTitleOnyl />}
        img={faqBanner}
      />
      {children}
      <Footer />
    </>
  );
};

export default layout;