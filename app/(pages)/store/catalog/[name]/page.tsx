import Image from "next/image";
import Link from "next/link";

import ProductDetails from "@/app/components/Card/ProductDetails";
import Accordion from "@/app/components/Accordion/Accordion";
import { getProduct, getRecomendProduct } from "@/app/utils/queryDb";
import ImageNotFound from "@/app/components/404/ImageNotFound";
import ReviewWrap from "@/app/components/Review/ReviewWrap";
import CardContainer from "@/app/components/Card/CardContainer";
import FloatingNav from "@/app/components/Menu/FloatingNav";
import { Heading } from "@/app/components/Container/Heading";
import { checkUserLogin } from "@/app/utils/auth";

const Page = async ({
  params: { name },
}: {
  params: { name: string }
}) => {
  const product: any = await getProduct(name);
  const recommendProduct = await getRecomendProduct(product?.productSubCategory ?? '', name);
  const user = await checkUserLogin();


  return (
    <>
      <main className="px-3">
        <div className="text-base text-base-300 breadcrumbs">
          <ul>
            <li><Link href={'/'}>RIOTGEAR</Link></li>
            <li><Link href={'/store'}>Store</Link></li>
            <li><Link href={`/store?=${product?.productSubCategory}`}>{product?.productSubCategory}</Link></li>
          </ul>
        </div>

        <figure className="flex flex-col md:flex-row w-full gap-6">
          <div className="w-full md:w-4/6">
            {!product?.productImgLink
              ? <ImageNotFound />
              : <Image
                className='w-full rounded-xl'
                src={product?.productImgLink ?? ''}
                alt="Jacket"
                width={500}
                height={500}
              />
            }
          </div>
          <article className="md:w-2/6 sm:flex flex-col gap-3 relative">
            <ProductDetails
              id={product?.productId}
              color={product?.productColor}
              sizes={product?.productSize}
              name={product?.productName}
              price={product?.productPrice}
              stock={product?.productStock}
            />
          </article>
        </figure>

        <div className="w-full md:mt-3">
          <Accordion
            label="Description"
            content={product?.productDesc}
          />
        </div>
        <ReviewWrap />
        {recommendProduct.length > 0 &&
          <>
            <Heading variant={'five'}>
              Recomended Stuff
            </Heading>
            <div className="flex breadcrumbs gap-3">
              <CardContainer
                data={recommendProduct}
              />
            </div>
          </>
        }
        
        <div className="fixed md:hidden bottom-0 start-0">
          <FloatingNav
            user={user}
            stock={product?.productStock}
            id={product?.productId}
          />
        </div>
      </main>

    </>
  );
};

export default Page;