import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import HeroContent from "./HeroContent";

import HeroImgDesktop from '../../assets/Content/HeroImgDesktop.png'
import HeroImg from "./HeroImg";

const Hero: React.FC = () => {
  return (
    <>
      <section className="flex w-full md:mt-4 gap-4 justify-between p-4 lg:mx-auto">
        <div className="mx-auto w-full md:w-3/4">
          <Navbar />
          <HeroContent />
          <HeroImg />
        </div>
        
        <div className="w-1/4 hidden md:block">
          <Image
            className="h-full object-cover rounded-xl"
            src={HeroImgDesktop}
            alt="Event"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
      </section>
    </>
  );
};

export default Hero;