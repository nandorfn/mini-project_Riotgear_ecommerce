import Navbar from "../Navbar/Navbar";
import HeroContent from "./HeroContent";

const Hero: React.FC = () => {
    return (
        <>
          <section className="flex mx-auto w-full mt-4 max-w-6xl gap-4">
            <div className="w-2/3">
              <Navbar />
              <HeroContent />
            </div>
            <div className="w-1/3 bg-primary rounded-xl">
              <p>test</p>
            </div>
          </section>
        </>
    );
};

export default Hero;