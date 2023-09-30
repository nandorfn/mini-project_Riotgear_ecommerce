import ColorChart from "../Filter/ColorChart";
import SizeChart from "../Filter/SizeChart";
import Select from "../Form/Select";
import wishlistIcon from '../../assets/icon/wishlist.svg'
import Image from "next/image";

const ProductDetails: React.FC = () => {
    return (
        <>
          <article className="w-2/6 flex flex-col gap-3 relative">
              <h1 className=" text-4xl ">Pocketable UV Protection Parka 3D Cut</h1>
              <h3 className=" text-2xl">Rp600.000</h3>
              <SizeChart />
              <ColorChart />
              <Select />
              <div className="flex w-full gap-3 absolute bottom-0">
                <button className={`btn btn-error capitalize w-2/3 text-white`}>Buy Now</button>
                <button className="btn w-1/3">
                  <Image 
                  src={wishlistIcon}
                  alt="Wishlist Icon"/>
                </button>
              </div>
            </article>
        </>
    );
};

export default ProductDetails;