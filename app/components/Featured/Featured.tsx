import CategoryCard from "../Card/CategoryCard";
import ProductCard from "../Card/ProductCard";
import shirtBg from '../../assets/Content/shirt.png'
import jacketBg from '../../assets/Content/Jacket.png'
import skateBg from '../../assets/Content/Skate.png'
import shoesBg from '../../assets/Content/Shoes.png'
import { getFeatured } from "@/app/utils/queryDb";
import { Heading } from "../Container/Heading";
import { Suspense } from "react";
import ProductCardSkeleton from "../Container/ProductCardSkeleton";

const Featured = async () => {
  const products = await getFeatured();
  return (
    <>
      <section className="p-4 gap-4  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {products?.map((product) =>
          <Suspense key={product.id} fallback={<ProductCardSkeleton />}>
            <article key={product.id}>
              <ProductCard
                productId={product.productId}
                productImg={product.productImgLink}
                productName={product.productName}
                productPrice={product.productPrice}
              />
            </article>
          </Suspense>

        )}
      </section>
      <section className="mt-8">
        <Heading fs={'xl3'} className="p-4 md:text-5xl">
          Upgrade Your Style with Our Streetwear Collection
        </Heading>
        <div className="p-4 gap-3 grid grid-cols-1 sm:grid-cols-2">
          <CategoryCard imgSrc={shirtBg} label="Top" />
          <CategoryCard imgSrc={jacketBg} label="Outwear" />
          <CategoryCard imgSrc={skateBg} label="Bottom" />
          <CategoryCard imgSrc={shoesBg} label="Accessories" />
        </div>
      </section>
    </>
  );
};

export default Featured;