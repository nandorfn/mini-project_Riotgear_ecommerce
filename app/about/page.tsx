import Hero from "../components/Hero/Hero";
import aboutBanner from '../assets/Content/about.png'
import HeroTitleOnyl from "../components/Hero/HeroTitleOnyl";

const page: React.FC = () => {
    return (
        <>
          <Hero
            childComponent={<HeroTitleOnyl/>}
            img={aboutBanner}
          />
          <article className="flex flex-col gap-3 max-w-xl text-lg text-justify mx-4 sm:mt-8 sm:mx-auto">
            <p>Welcome to RIOTGEAR, where fashion meets rebellion in the heart of the urban landscape. Born from a passion for self-expression and a love for street culture, RIOTGEAR is more than just clothing; it&apos;s a statement of defiance and individuality. Our journey began on the gritty streets, and we&apos;ve since evolved into a global force, uniting skaters, artists, and rebels of all kinds under one banner.</p>
            <p>At RIOTGEAR, we believe that fashion is a canvas for personal stories. Our designs are a fusion of raw energy and artistic expression, drawing inspiration from the pulse of the city and the spirit of subcultures. Each piece in our collection is crafted with precision and an unwavering commitment to quality. From graphic tees that speak volumes to comfortable yet stylish skatewear, RIOTGEAR is your armor of choice for conquering the concrete jungle.</p>
            <p>But RIOTGEAR is more than just a clothing brand; it&apos;s a community. We&apos;re a tribe of individuals who refuse to conform to the norm, who skate to the beat of their own drum, and who wear their rebellion proudly. Our mission is to empower you to be unapologetically yourself. Join us in this riotous journey, and let&apos;s make a mark on the world, one fearless step at a time.</p>
          </article>
        </>
    );
};

export default page;