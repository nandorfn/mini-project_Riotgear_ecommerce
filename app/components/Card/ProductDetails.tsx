import PurchaseBtn from "../Button/PurchaseBtn";
import ColorChart from "../Filter/ColorChart";
import SizeChart from "../Filter/SizeChart";
import Select from "../Form/Select";

const ProductDetails: React.FC = () => {
  return (
    <>
      <h1 className=" text-4xl ">Pocketable UV Protection Parka 3D Cut</h1>
      <h3 className=" text-2xl">Rp600.000</h3>
      <SizeChart />
      <ColorChart />
      <Select />
      <PurchaseBtn />
    </>
  );
};

export default ProductDetails;