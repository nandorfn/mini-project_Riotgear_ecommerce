import Hero from "../components/Hero/Hero";
import faqBanner from '../assets/Content/faq.png'
import HeroTitleOnyl from "../components/Hero/HeroTitleOnyl";
import { faq,  FaqItem } from '../helpers/dataObject'
import Accordion from "../components/Accordion/Accordion";
import { bebas_neue } from "../utils/fonts";

const page: React.FC = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Hero
          childComponent={<HeroTitleOnyl />}
          img={faqBanner}
        />
  
        <section className="flex flex-col gap-3 mt-5 max-w-2xl m-4 sm:mx-auto">
        <h2 className={`text-4xl text-center ${bebas_neue.className}`}>FAQ</h2>
          {faq?.map((item: FaqItem) =>
            <Accordion 
              key={item.id}
              label={item.q}
              content={item.a}
            />
          )}
        </section>
      </div>
      </>
  );
};

export default page;