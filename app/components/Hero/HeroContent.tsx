import Image from "next/image";
import HeroImgPrimary from '../../assets/Content/HeroImgPrimary.png'
import HeroImgSecondary from '../../assets/Content/HeroImgSecondary.png'
import { Heading } from "../Container/Heading";
import { Text } from "../Container/Text";
import { heroContent } from "@/app/helpers/dataObject";
import { Flex } from "../Container/Flex";

const HeroContent: React.FC = () => {
    return (
        <>
          <article className="my-5 gap-4 hidden sm:block">
            <Heading fs={'xl5'} className="w-full lg:w-[28rem]">
              {heroContent.title}
            </Heading>
            <Text clr={'grey'} className="w-full lg:w-[34rem]">
              {heroContent.desc}
            </Text>
          </article>
          
          <Flex align={'between'} className="gap-3">
            <Image
              className="w-full md:w-1/2"
              src={HeroImgPrimary}
              alt="Event"
            />
            <Image
              className="hidden w-full sm:block sm:w-full md:w-1/2"
              src={HeroImgSecondary}
              alt="Event"
            />
          </Flex>
        </>
    );
};

export default HeroContent;