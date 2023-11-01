import Link from 'next/link';

import blogBanner from '@/app/assets/Content/blog.png'
import { getBlogArticles } from '@/app/utils/queryDb';
import ArticleCard from '@/app/components/Card/ArticleCard';
import HeroTitleOnyl from '@/app/components/Hero/HeroTitleOnyl';
import LayoutHome from '@/app/components/Container/LayoutHome';
import { TArticle } from '@/app/utils/types';

const page = async () => {
    const articles = await getBlogArticles();

    return (
        <LayoutHome
            heroChildren={<HeroTitleOnyl />}
            banner={blogBanner}
        >
            <main className="max-w-6xl mx-auto h-[80vh]">
                <h2 className={`text-center text-4xl font-medium mb`}>BLOG</h2>
                <section className='flex flex-col gap-3 p-4'>
                    {articles?.map((item: TArticle) => (
                        <Link
                            href={`/blog/article?id=${item.id}`}
                            key={item.id}
                        >
                            <ArticleCard data={item} />
                        </Link>
                    ))

                    }
                </section>
            </main>
        </LayoutHome>
    );
};

export default page;