import { getItem } from "@/app/utils/getItem";
import ProductCard from "./ProductCard";

const CardContainer: React.FC = async () => {
  const products = await getItem();
    return (
        <>
          <section className="grid grid-cols-2 md:grid-cols-4 gap-3 ms-3 mt-3">
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
        </>
    );
};

export default CardContainer;