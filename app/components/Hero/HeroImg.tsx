import Image from "next/image";
import HeroImgPrimary from '../../assets/Content/HeroImgPrimary.png'
import HeroImgSecondary from '../../assets/Content/HeroImgSecondary.png'

const HeroImg: React.FC = () => {
    return (
        <>
          <div className="flex gap-4 w-full justify-between">
            <Image
              className="w-full md:w-1/2"
              src={HeroImgPrimary}
              alt="Event"
            />
            <Image
              className="hidden md:block md:w-1/2"
              src={HeroImgSecondary}
              alt="Event"
            />
          </div>
        </>
    );
};

export default HeroImg;