import NavbarStore from "@/app/components/Navbar/NavbarStore";
import Image from "next/image";
import ProductDetails from "@/app/components/Card/ProductDetails";
import Accordion from "@/app/components/Accordion/Accordion";
import ReviewWrap from "@/app/components/Review/ReviewWrap";
import PurchaseBtn from "@/app/components/Button/PurchaseBtn";
import { getProduct } from "@/app/utils/getItem";

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

      <figure className="flex flex-col sm:flex-row w-full gap-6 mt-3 p-4">
        <div className="w-full sm:w-4/6">
        <Image 
              className='w-full rounded-xl'
              src={product?.productImgLink ?? ''} 
              alt="Jacket"
              width={500}
              height={500}
              />
        </div>
        <article className="hidden sm:w-2/6 sm:flex flex-col gap-3 relative">
          <ProductDetails
            name={product?.productName}
            price={product?.productPrice}
          />
        </article>
        <div className="btn-nav sm:hidden">
        <PurchaseBtn/>
        </div>
      </figure>
      <section>
        <div className="w-full sm:w-4/6 p-4">
          <Accordion
            label="Description"
            content={product?.productDesc}
          />
        </div>
        <ReviewWrap />
      </section>
      </section>
    </>
  );
};

export default Page;