import { Text } from "../Container/Text";
import ProductCard from "./ProductCard";
import { ProductData } from "@/app/utils/utils";

export interface QueryProps {
  data: ProductData[];
}

const CardContainer: React.FC<QueryProps> = async ({ data }) => {
    return (
        <>
          <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5 md:mt-3 overflow-y-scroll">
            {data.length > 0 ? data?.map((product) =>
              <article key={product.id}>
                <ProductCard 
                  productId={product.productId}
                  productImg={product.productImgLink}
                  productName={product.productName}
                  productPrice={product.productPrice}
                />
              </article>
            
            )
            : <Text fs={'lg'} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">Sorry, the product you are looking for does not exist!</Text>
            }
          </section>
        </>
    );
};

export default CardContainer;