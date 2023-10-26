import Image, { StaticImageData } from "next/image";
import Navbar from "../Navbar/Navbar";
interface HeroProps {
  childComponent: React.ReactNode;
  img: StaticImageData;
}
const Hero: React.FC<HeroProps> = ({childComponent, img}) => {
  return (
    <>
      <header className="flex w-full md:mt-4 gap-4 justify-between p-4 max-w-6xl lg:mx-auto">
        <div className="mx-auto w-full lg:w-3/4">
          <Navbar />
          {childComponent}
        </div>
        
        <div className="w-1/4 hidden lg:block">
          <Image
            className="h-full rounded-xl"
            src={img}
            alt="Event"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
      </header>
    </>
  );
};

export default Hero;