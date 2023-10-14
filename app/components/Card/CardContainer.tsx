import ProductCard from "./ProductCard";
import { ProductData } from "@/app/utils/utils";

export interface QueryProps {
  data: ProductData[];
}

const CardContainer: React.FC<QueryProps> = async ({ data }) => {
    return (
        <>
          <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5 md:mt-3 overflow-y-scroll">
            {data?.map((product) =>
              <article key={product.id}>
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