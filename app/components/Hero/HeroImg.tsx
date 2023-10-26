import Image from "next/image";
import HeroImgPrimary from '@/app/assets/Content/HeroImgPrimary.png'
import HeroImgSecondary from '@/app/assets/Content/HeroImgSecondary.png'
import { Flex } from "@/app/components/Container/Flex";

const HeroImg: React.FC = () => {
    return (
        <>
          <Flex gap={4} align={'between'}>
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

export default HeroImg;