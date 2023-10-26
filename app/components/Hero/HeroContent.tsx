import Image from "next/image";

import HeroImgPrimary from '@/app/assets/Content/HeroImgPrimary.png'
import HeroImgSecondary from '@/app/assets/Content/HeroImgSecondary.png'
import { Heading } from "@/app/components/Container/Heading";
import { Text } from "@/app/components/Container/Text";
import { Flex } from "@/app/components/Container/Flex";
import { heroContent } from "@/app/helpers/dataObject";

const HeroContent: React.FC = () => {
  return (
    <>
      <article className="my-5 gap-4 hidden sm:flex sm:w-full sm:flex-col">
        <Heading fs={'xl5'} className="w-full lg:w-[28rem]">
          {heroContent.title}
        </Heading>
        <Text clr={'grey'} className="w-full lg:w-[34rem]">
          {heroContent.desc}
        </Text>
      </article>

      <Flex align={'between'} className="carousel relative">
        <div id="slide1" className="carousel-item relative w-full md:w-[49%]">
          <Image
            className="w-full"
            src={HeroImgPrimary}
            alt="Event"
          />
          <div className="absolute md:hidden flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-sm opacity-50 btn-circle">❮</a>
            <a href="#slide2" className="btn btn-sm opacity-50 btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full md:w-[49%]">
          <Image
            className="w-full "
            src={HeroImgSecondary}
            alt="Event"
          />
          <div className="absolute md:hidden flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-sm opacity-50 btn-circle">❮</a>
            <a href="#slide1" className="btn btn-sm opacity-50 btn-circle">❯</a>
          </div>
        </div>
      </Flex>
    </>
  );
};

export default HeroContent;