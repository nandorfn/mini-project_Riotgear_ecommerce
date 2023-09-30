import NavbarStore from "@/app/components/Navbar/NavbarStore";
import Image from "next/image";
import ProductImg from '../../assets/Content/jacketParka.jpg'
import ProductDetails from "@/app/components/Card/ProductDetails";
import Accordion from "@/app/components/Accordion/Accordion";
import ReviewWrap from "@/app/components/Review/ReviewWrap";
import PurchaseBtn from "@/app/components/Button/PurchaseBtn";


const page: React.FC = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto">
      <NavbarStore />

      <figure className="flex flex-col sm:flex-row w-full gap-6 mt-3 p-4">
        <div className="w-full sm:w-4/6">
          <Image
            className="w-full object-cover rounded-xl"
            src={ProductImg}
            alt="Product Image"
          />
        </div>
        <article className="hidden sm:w-2/6 sm:flex flex-col gap-3 relative">
          <ProductDetails />
        </article>
        <div className="btn-nav sm:hidden">
        <PurchaseBtn/>
        </div>
      </figure>
      <section>
        <div className="w-full sm:w-4/6 p-4">
          <Accordion
            label="Description"
            content="- Hybrid down outerwear developed in collaboration with professional snowboarder, Ayumu Hirano.
              - A combination of lightweight high-performance cotton padding with Heat of Absorption technology, and premium down with a fill power of 750* or more.
              - Water-repellent finish. *The fabric is coated with a water-repellent agent so the effect lasts longer. The finish is not permanent.
              - Collar stands up neatly without the hood up.
              "
          />
        </div>
        <ReviewWrap />
      </section>
      </section>
    </>
  );
};

export default page;