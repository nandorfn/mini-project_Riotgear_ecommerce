import Link from 'next/link';

import blogBanner from '@/app/assets/Content/blog.png'
import { getBlogArticles } from '@/app/utils/queryDb';
import ArticleCard from '@/app/components/Card/ArticleCard';
import Hero from '@/app/components/Hero/Hero';
import HeroTitleOnyl from '@/app/components/Hero/HeroTitleOnyl';

type Article = {
    id: number;
    title: string;
    content: string;
    author: string;
    userId: string;
    thumbnail: string;
    viewsCount: number;
    createdAt: Date;
    updatedAt: Date;
}


const page = async () => {
    const articles = await getBlogArticles();

    return (
        <>
            <Hero
                childComponent={<HeroTitleOnyl />}
                img={blogBanner}
            />
            <main className="max-w-6xl mx-auto h-[80vh]">
                <h2 className={`text-center text-4xl font-medium mb`}>BLOG</h2>
                <section className='flex flex-col gap-3 p-4'>
                    {articles?.map((item: Article) => (
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