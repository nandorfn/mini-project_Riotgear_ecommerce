import { FaqItem } from '@/app/utils/types';
import { faq } from '@/app/helpers/dataObject';
import Accordion from "@/app/components/Accordion/Accordion";
import { Heading } from "@/app/components/Container/Heading";
import HeroTitleOnyl from "@/app/components/Hero/HeroTitleOnyl";
import faqBanner from '@/app/assets/Content/faq.png'
import LayoutHome from '@/app/components/Container/LayoutHome';

const page: React.FC = () => {
  return (
    <LayoutHome
      heroChildren={<HeroTitleOnyl />}
      banner={faqBanner}
    >
      <main className="flex flex-col gap-3 mt-5 max-w-3xl m-4 sm:mx-auto">
        <Heading fs={'xl4'} className='text-center'>
          FAQ
        </Heading>
        {faq?.map((item: FaqItem) =>
          <Accordion
            key={item.id}
            label={item.q}
            content={item.a}
          />
        )}
      </main>
    </LayoutHome>
  );
};

export default page;