import NavbarStore from "@/app/components/Navbar/NavbarStore";
import Image from "next/image";
import ProductImg from '../../assets/Product.png'
import SizeChart from "@/app/components/Filter/SizeChart";

const page: React.FC = () => {
    return (
        <>
          <NavbarStore />
          <figure className="flex w-full">
            <div className="w-2/3">
              <Image
              src={ProductImg}
              alt="Product Image" 
              />
            </div>
            <article className="w-1/3">
              <h1>Pocketable UV Protection Parka 3D Cut</h1>
              <h3>Rp600.000</h3>
              <SizeChart />
            </article>
          </figure>
        </>
    );
};

export default page;