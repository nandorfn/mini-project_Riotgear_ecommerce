import Link from 'next/link';
import { bebas_neue } from '@/app/utils/fonts';

import blogBanner from '@/app/assets/Content/blog.png'
import { getBlogArticles } from '@/app/utils/queryDb';
import ArticleCard from '@/app/components/Card/ArticleCard';
import Hero from '@/app/components/Hero/Hero';
import HeroTitleOnyl from '@/app/components/Hero/HeroTitleOnyl';


const page = async () => {
    const articles = await getBlogArticles();

    return (
        <>
            <Hero
                childComponent={<HeroTitleOnyl />}
                img={blogBanner}
            />
            <main className="max-w-6xl mx-auto h-[80vh]">
                <h2 className={`text-center text-4xl font-medium mb ${bebas_neue.className}`}>BLOG</h2>
                <section className='flex flex-col gap-3 p-4'>
                    {articles?.map(item => (

                        <Link href={`/blog/article?id=${item.id}`} key={item.id}>
                            <ArticleCard data={item} />
                        </Link>
                    ))

                    }
                </section>
            </main>
        </>
    );
};

export default page;