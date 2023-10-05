import PurchaseBtn from "../Button/PurchaseBtn";
import ColorChart from "../Filter/ColorChart";
import SizeChart from "../List";
import Select from "../Form/Select";
import { Heading } from '@/app/components/Container/Heading'

interface Props {
  name?: string | null;
  price?: number | null;
}

const ProductDetails: React.FC<Props> = ({name, price}) => {
  const formattedPrice = price?.toLocaleString('id-ID')

  return (
    <>
      <Heading fs={'xl4'}>{name}</Heading>
      <Heading fs={'xl2'}>{formattedPrice}</Heading>
      {/* <SizeChart />
      <ColorChart /> */}
      <Select />
      <PurchaseBtn />
    </>
  );
};

export default ProductDetails;