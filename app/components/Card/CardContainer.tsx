import { getItem } from "@/app/utils/getItem";
import ProductCard from "./ProductCard";

export interface QueryProps {
  query: {[key: string]: string | string[] | undefined;}
}

const CardContainer: React.FC<QueryProps> = async ({ query }) => {
  const products = await getItem( query );
    return (
        <>
          <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 ms-3 mt-3">
            {products?.map((product) =>
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