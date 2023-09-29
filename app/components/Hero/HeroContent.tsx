import Image from "next/image";
import HeroImgPrimary from '../../assets/Content/HeroImgPrimary.png'
import HeroImgSecondary from '../../assets/Content/HeroImgSecondary.png'

const HeroContent: React.FC = () => {
    return (
        <>
          <article className="my-5 gap-4 hidden sm:block">
            <h1 className="w-full lg:w-[28rem] text-5xl font-medium">
            Unleash Your Street Style with Our New Collection
            </h1>
            <p className="w-full lg:w-[34rem] text-base text-[#9FA0A2]">Shop our Latest Collection and Discover the Hottest Streetwear Styles of the Season - Find Your Must-Have Pieces and Fresh Looks Now, Before They’re Gone!</p>
          </article>
          <div className="flex gap-4 w-full justify-between">
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
          </div>
        </>
    );
};

export default HeroContent;