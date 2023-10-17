import { bebas_neue } from '@/app/utils/fonts';
import blogBanner from '@/app/assets/Content/blog.png'
import ArticleCard from '@/app/components/Card/ArticleCard';
import Hero from '@/app/components/Hero/Hero';
import HeroTitleOnyl from '@/app/components/Hero/HeroTitleOnyl';


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