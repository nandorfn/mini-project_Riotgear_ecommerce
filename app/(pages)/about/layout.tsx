import Hero from "@/app/components/Hero/Hero";
import HeroTitleOnyl from "@/app/components/Hero/HeroTitleOnyl";
import aboutBanner from '@/app/assets/Content/about.png'
import Footer from "@/app/components/Footer/Footer";


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