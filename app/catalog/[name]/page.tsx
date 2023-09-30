import NavbarStore from "@/app/components/Navbar/NavbarStore";
import Image from "next/image";
import ProductImg from '../../assets/Product.png'

const page: React.FC = () => {
    return (
        <>
          <NavbarStore />
          {/* <figure>
            <Image
            src={ProductImg}
            alt="Product Image" 
            width={500}
            />
          </figure> */}
        </>
    );
};

export default page;