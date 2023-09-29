import { bebas_neue } from "@/app/utils/fonts";

const HeroTitleOnyl: React.FC = () => {
    return (
        <>
          <article className="flex mt-3 md:mt-16">
            <h1 className={`text-5xl md:text-7xl ${bebas_neue.className}`}>Unleash Your Inner Rebel in Style. Elevate Your Streetwear Game with Us.</h1>
          </article>
        </>
    );
};

export default HeroTitleOnyl;