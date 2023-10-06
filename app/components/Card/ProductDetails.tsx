import PurchaseBtn from "../Button/PurchaseBtn";
import ColorChart from "../Filter/ColorChart";
import { Heading } from '@/app/components/Container/Heading'
import List from "../List";
import { sizeChart } from "@/app/helpers/dataObject";
import { Button } from "../Button/Button";
import { Flex } from "../Container/Flex";

interface Props {
  name?: string | null;
  price?: number | null;
  sizes?: string | null;
  color?: string;
}

const ProductDetails: React.FC<Props> = ({
  name,
  price,
  sizes,
  color
}) => {

  const formattedPrice = price?.toLocaleString('id-ID')

  return (
    <>
      <Flex variant={'col'} align={'between'} className="h-[20%] text">
        <Heading fs={'xl3'}>{name}</Heading>
        <Heading fs={'xl2'} bold={'normal'}>{`Rp${formattedPrice}`}</Heading>
      </Flex>

      <div className="border-t"></div>

      <h4 className="font-medium text-xl">Size</h4>
      <List
        data={sizeChart}
        renderItem={(size) => {
          const { label, value } = size;
          const isSelected = value === sizes;
          return (
            <Button
              name={'size'}
              defaultValue={sizes ?? ''}
              size={'sm'}
              font={'normal'}
              variant={isSelected ? 'checked' : 'zinc'}>{label}
            </Button>
          )
        }}
      />

      {/* <Select /> */}
      <PurchaseBtn />
    </>
  );
};

export default ProductDetails;