import NavbarStore from "@/app/components/Navbar/NavbarStore";
import Image from "next/image";
import ProductDetails from "@/app/components/Card/ProductDetails";
import Accordion from "@/app/components/Accordion/Accordion";
import PurchaseBtn from "@/app/components/Button/PurchaseBtn";
import { getProduct } from "@/app/utils/queryDb";
import ImageNotFound from "@/app/components/404/ImageNotFound";
import Link from "next/link";
import ReviewWrap from "@/app/components/Review/ReviewWrap";

const Page = async ({
  params: { name },
}: {
  params: { name: string }
}) => {
  const product = await getProduct(name);
  return (
    <>
      <section className="max-w-6xl mx-auto">
        <NavbarStore />
        <div className="text-base breadcrumbs p-4">
          <ul>
            <li><Link href={'/'}>RIOTGEAR</Link></li>
            <li><Link href={'/store'}>Store</Link></li>
            <li><Link href={`/store?=${product?.productSubCategory}`}>{product?.productSubCategory}</Link></li>

          </ul>
        </div>
        <figure className="flex flex-col sm:flex-row w-full gap-6 px-4">
          <div className="w-full sm:w-4/6">
            {product?.productImgLink
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
          <article className="hidden sm:w-2/6 sm:flex flex-col gap-3 relative">
            <ProductDetails
              name={product?.productName}
              price={product?.productPrice}
            />
          </article>
          <div className="btn-nav sm:hidden">
            <PurchaseBtn />
          </div>
        </figure>
        <section>
          <div className="w-full sm:w-4/6 p-4">
            <Accordion
              label="Description"
              content={product?.productDesc}
            />
          </div>
          {product?.reviews
            ? <ReviewWrap />
            : null
          }
          
        </section>
      </section>
    </>
  );
};

export default Page;