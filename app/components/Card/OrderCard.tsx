import { Flex } from "../Container/Flex";
import { Heading } from "../Container/Heading";

interface OrderCardProps {
  subTotal: number;
  tax: number;
  length: number;
  style1?: string;
  style2?: string;
  style3?: string;
}

const OrderCard: React.FC<OrderCardProps> = ({subTotal, tax, length, style1, style2, style3}) => {

  return (
    <>
      <Flex variant={'col'} className={`${style1}gap-4 rounded-lg h-fit`}>
        <Flex variant={'col'} className="gap-4">
          <Heading>{`ORDER SUMMARY | ${length} ITEM(S)`}</Heading>
          <div className="flex w-full justify-between">
            <p>Item(s) subtotal</p>
            <p>{`Rp${subTotal.toLocaleString('ID-id')}`}</p>
          </div>
          <div className="flex w-full justify-between font-medium">
            <p>SUBTOTAL</p>
            <p>{`Rp${subTotal.toLocaleString('ID-id')}`}</p>
          </div>
          <div className="flex w-full justify-between">
            <p>VAT included (11%)</p>
            <p>{`Rp${tax.toLocaleString('ID-id')}`}</p>
          </div>
        </Flex>
        <div className="flex w-full justify-between font-medium bg-white py-2   rounded-lg">
          <p>ORDER TOTAL</p>
          <p>{`Rp${subTotal.toLocaleString('ID-id')}`}</p>
        </div>
      </Flex>
    </>
  );
};

export default OrderCard;