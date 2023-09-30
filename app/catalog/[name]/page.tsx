import NavbarStore from "@/app/components/Navbar/NavbarStore";
import Image from "next/image";
import ProductImg from '../../assets/Content/jacketParka.jpg'
import ProductDetails from "@/app/components/Card/ProductDetails";
import Accordion from "@/app/components/Accordion/Accordion";


const page: React.FC = () => {
  return (
    <>
      <NavbarStore />
      <figure className="flex w-full gap-6 mt-3 p-4">
        <div className="w-4/6">
          <Image
            className="w-full object-cover rounded-xl"
            src={ProductImg}
            alt="Product Image"
          />
        </div>
        <ProductDetails />
      </figure>
      <section>
      <div className="w-4/6 p-4">
        <Accordion
          label="Description"
          content="- Hybrid down outerwear developed in collaboration with professional snowboarder, Ayumu Hirano.
              - A combination of lightweight high-performance cotton padding with Heat of Absorption technology, and premium down with a fill power of 750* or more.
              - Water-repellent finish. *The fabric is coated with a water-repellent agent so the effect lasts longer. The finish is not permanent.
              - Collar stands up neatly without the hood up.
              "
        />
      </div>
      </section>
    </>
  );
};

export default page;