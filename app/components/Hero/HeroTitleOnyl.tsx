import { heroContent } from "@/app/helpers/dataObject";
import { Heading } from "@/app/components/Container/Heading";

const HeroTitleOnyl: React.FC = () => {
    return (
        <>
          <article className="mt-3 md:mt-16 hidden md:flex">
            <Heading fs={'main'} ff={'neue'}>{heroContent.title}</Heading>
          </article>
        </>
    );
};

export default HeroTitleOnyl;