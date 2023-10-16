'use client'
import { useRouter } from "next/navigation";
import { Flex } from "../Container/Flex";
import { Heading } from "../Container/Heading";
import { useEffect } from "react";

interface OrderCardProps {
  subTotal: number;
  tax: number;
  length: number;
}

const OrderCard: React.FC<OrderCardProps> = ({subTotal, tax, length}) => {

  return (
    <>
      <Flex variant={'col'} className="bg-accent px-3 py-5 gap-4 rounded-lg h-fit">
        <Flex variant={'col'} className="px-2 gap-4">
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
        <div className="flex w-full justify-between font-medium bg-white py-2 px-2  rounded-lg">
          <p>ORDER TOTAL</p>
          <p>{`Rp${subTotal.toLocaleString('ID-id')}`}</p>
        </div>
      </Flex>
    </>
  );
};

export default OrderCard;