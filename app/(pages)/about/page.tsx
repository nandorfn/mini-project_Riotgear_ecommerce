import { about } from "@/app/helpers/dataObject";
import aboutBanner from '@/app/assets/Content/about.png'
import { Heading } from "@/app/components/Container/Heading";
import HeroTitleOnyl from "@/app/components/Hero/HeroTitleOnyl";
import LayoutHome from "@/app/components/Container/LayoutHome";

type AboutContent = {
  content: string;
}

const page: React.FC = () => {
  return (
    <>
      <LayoutHome
        banner={aboutBanner}
        heroChildren={<HeroTitleOnyl />}
      >
        <Heading
          fs={'xl4'}
          className='text-center mb-5'>
          About Us
        </Heading>
        <article
          className="flex flex-col gap-3 max-w-xl text-lg text-justify mx-4 sm:mt-8 sm:mx-auto prose"
        >
          {about?.map((text: AboutContent, index) =>
            <p key={index}>
              {text.content}
            </p>
          )}
        </article>
      </LayoutHome>

    </>
  );
};

export default page;