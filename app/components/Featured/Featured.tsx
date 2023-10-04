import CategoryCard from "../Card/CategoryCard";
import ProductCard from "../Card/ProductCard";
import shirtBg from '../../assets/Content/shirt.png'
import jacketBg from '../../assets/Content/Jacket.png'
import skateBg from '../../assets/Content/Skate.png'
import shoesBg from '../../assets/Content/Shoes.png'
import { getFeatured } from "@/app/utils/getItem";

const Featured = async () => {
  const products = await getFeatured();
  return (
    <>
      <section className="p-4 gap-4 mt-4  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {products?.map((product) =>
          <article className="" key={product.id}>
            <ProductCard
              productId={product.productId}
              productImg={product.productImgLink}
              productName={product.productName}
              productPrice={product.productPrice}
            />
          </article>

        )}
      </section>
      <section className="mt-8">
        <h1 className="text-3xl p-4 font-medium md:text-5xl">Upgrade Your Style with Our Streetwear Collection</h1>
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