import { redirect } from "next/navigation";
import { getArticle, getFeatured } from "@/app/utils/queryDb";
import Navbar from "@/app/components/Navbar/Navbar";
import MdBody from "./MdBody";
import ProductCardSkeleton from "@/app/components/Container/ProductCardSkeleton";
import { Suspense } from "react";
import ProductCard from "@/app/components/Card/ProductCard";
import { Flex } from "@/app/components/Container/Flex";
import { ProductData } from "@/app/utils/types";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const article = await getArticle(searchParams);
  if (!article) {
    redirect('/blog')
  }
  const featured = await getFeatured();

  return (
    <>
      <Navbar className="max-w-6xl md:mx-4 xl:mx-auto mt-4 mb-10" />
      <main className="flex flex-row w-full justify-center max-w-6xl mx-auto gap-10 shadow-lg px-10 pb-10 rounded-xl">
        <div className="w-4/5">
          <MdBody
            thumbnail={article.thumbnail}
            content={article.content}
          />
        </div>
        <Flex variant={'col'} className="w-1/5 gap-3">
          {featured?.slice(0, 4).map((product: ProductData) => (
            <Suspense key={product.id} fallback={<ProductCardSkeleton />}>
              <article>
                <ProductCard
                  productId={product.productId}
                  productImg={product.productImgLink}
                  productName={product.productName}
                  productPrice={product.productPrice}
                />
              </article>
            </Suspense>
          ))
          }
        </Flex>
      </main>
    </>
  );
};

export default page;