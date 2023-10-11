import PurchaseBtn from "../Button/PurchaseBtn";
import { Heading } from '@/app/components/Container/Heading'
import List from "../List";
import { quantityData, sizeChart } from "@/app/helpers/dataObject";
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
      <Flex align={'between'} className="min-h-[20%] text flex-col-reverse md:flex-col">
        <Heading variant={'pName'}>{name}</Heading>
        <Heading fs={'xl2'} bold={'normal'}>{`Rp${formattedPrice}`}</Heading>
      </Flex>
      <div className="border-t"></div>
      <div className="hidden md:flex flex-col gap-3">
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
              variant={isSelected ? 'checked' : 'size'}>{label}
            </Button>
          )
        }}
      />
      <h4 className="font-medium text-xl">Quantity</h4>
      <select className="px-4 py-2 rounded-md w-full max-w-[5.4rem]" name="selectQuantity">
        {quantityData?.map((data) =>
          <option key={data.id} value={data.value}>{data.label}</option>
        )}
      </select>
        <PurchaseBtn />
      </div>
    </>
  );
};

export default ProductDetails;