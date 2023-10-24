import { HTMLAttributes } from "react";
import { cn } from "@/app/utils/utils";
import { VariantProps, cva } from 'class-variance-authority';
import { ProductData } from "@/app/utils/types";
import { Text } from "../Container/Text";
import ProductCard from "./ProductCard";

const cardContainerVariants = cva(
  'grid gap-3 lg:gap-5 overflow-y-scroll mt-3 md:mt-0',
  {
    variants: {
      variant: {
        store: 'grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ',
        display: 'grid-cols-2 md:grid-cols-4 '
      }
    },
    defaultVariants: {
      variant: 'store'
    }
  
  }
)


interface SectionProps extends HTMLAttributes<HTMLElement>,
VariantProps<typeof cardContainerVariants> {
  data: ProductData[];
}

const CardContainer: React.FC<SectionProps> = async ({ 
data,
className,
variant,
...props
}) => {
  return (
    <>
      <section className={cn(cardContainerVariants({variant, className}))} {...props}>
        {data.length > 0 ? data?.map((product) =>
          <article key={product.id}>
            <ProductCard
              productId={product.productId ?? ''}
              productImg={product.productImgLink}
              productName={product.productName}
              productPrice={product.productPrice}
            />
          </article>
        )
          : <Text fs={'xl'} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">Sorry, the product you are looking for does not exist!</Text>
        }
      </section>
    </>
  );
};

export { CardContainer, cardContainerVariants };