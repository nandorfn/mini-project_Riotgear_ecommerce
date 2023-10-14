import PurchaseBtn from "../Button/PurchaseBtn";
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
}) => {

  const formattedPrice = price?.toLocaleString('id-ID')

  return (
    <>
      <Flex align={'between'} className="min-h-[20%] text flex-col-reverse md:flex-col">
        <Heading variant={'pName'}>{name}</Heading>
        <Heading fs={'xl2'} bold={'normal'}>{`Rp${formattedPrice}`}</Heading>
      </Flex>
      <div className="border-t"></div>
      <div className="hidden md:flex flex-col gap-3">
        <h4 className="font-medium text-xl">Size</h4>
        <List
          name="sizeChartProduct"
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
                variant={isSelected ? 'checked' : 'sizeBtn'}>{label}
              </Button>
            )
          }}
        />
        <PurchaseBtn />
      </div>

    </>
  );
};

export default ProductDetails;