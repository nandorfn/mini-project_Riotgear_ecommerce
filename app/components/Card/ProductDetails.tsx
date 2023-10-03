import PurchaseBtn from "../Button/PurchaseBtn";
import ColorChart from "../Filter/ColorChart";
import SizeChart from "../List";
import Select from "../Form/Select";

interface Props {
  name?: string | null;
  price?: number | null;
}

const ProductDetails: React.FC<Props> = ({name, price}) => {
  const formattedPrice = price?.toLocaleString('id-ID')

  return (
    <>
      <h1 className=" text-4xl ">{name}</h1>
      <h3 className=" text-2xl">{formattedPrice}</h3>
      <SizeChart />
      <ColorChart />
      <Select />
      <PurchaseBtn />
    </>
  );
};

export default ProductDetails;