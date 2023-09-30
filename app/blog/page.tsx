import blogBanner from '../assets/Content/blog.png'
import ArticleCard from '../components/Card/ArticleCard';
import Hero from '../components/Hero/Hero';
import HeroTitleOnyl from '../components/Hero/HeroTitleOnyl';
import { bebas_neue } from '../utils/fonts';


const page: React.FC = () => {
    return (
        <>
            <section className="max-w-6xl mx-auto">
                <Hero
                    childComponent={<HeroTitleOnyl />}
                    img={blogBanner}
                />
                <h2 className={`text-center text-4xl font-medium mb ${bebas_neue.className}`}>BLOG</h2>
                <section className='flex flex-col gap-3 p-4'>
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                </section>
            </section>
        </>
    );
};

export default page;