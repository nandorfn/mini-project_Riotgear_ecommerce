import { cn } from "@/app/utils/utils";
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
const OrderCard: React.FC<OrderCardProps> = ({
  subTotal,
  tax,
  length,
  style1,
  style2,
  style3
}) => {

  return (
    <>
      <Flex variant={'col'} className={cn("gap-4 rounded-lg h-fit", style1)}>
        <Flex variant={'col'} className={cn("gap-4", style2)}>
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
        <div className={cn("flex w-full justify-between font-medium bg-white py-2   rounded-lg", style3)}>
          <p>ORDER TOTAL</p>
          <p>{`Rp${subTotal.toLocaleString('ID-id')}`}</p>
        </div>
      </Flex>
    </>
  );
};

export default OrderCard;