import { heroContent } from "@/app/helpers/dataObject";
import { bebas_neue } from "@/app/utils/fonts";
import { Heading } from "@/app/components/Container/Heading";

const HeroTitleOnyl: React.FC = () => {
    return (
        <>
          <article className="flex mt-3 md:mt-16">
            <Heading fs={'main'} ff={'neue'}>{heroContent.title}</Heading>
          </article>
        </>
    );
};

export default HeroTitleOnyl;