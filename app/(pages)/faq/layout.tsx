import Footer from "@/app/components/Footer/Footer";
import Hero from "@/app/components/Hero/Hero";
import HeroTitleOnyl from "@/app/components/Hero/HeroTitleOnyl";
import faqBanner from '@/app/assets/Content/faq.png'


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Hero
        childComponent={<HeroTitleOnyl />}
        img={faqBanner}
      />
      {children}
      <Footer className="max-w-6xl"/>
    </>
  );
};

export default layout;