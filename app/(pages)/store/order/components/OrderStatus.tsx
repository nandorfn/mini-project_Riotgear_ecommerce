'use client'
import { Button } from "@/app/components/Button/Button";
import { Flex } from "@/app/components/Container/Flex";
import axios from "axios";
import Link from "next/link";

const OrderStatus = ({order}: {order: any}) => {
  const handleConfirmOrder = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = {
      orderId: order.orderId,
      status: 'Delivered'
    }
    await axios.patch(`/api/user/${order.userId}/order`, data)
    .then((res) => console.log(res) )
  }

  return (
    <>
      <Flex variant={'row'} className="absolute z-30 end-5 bottom-5 gap-5 justify-end">
        <Link href={`/store/payment?orderId=${order.orderId}`}>
          <Button size={'sm'} >View Transaction Details</Button>
        </Link>
        {order.status === 'Shipped' &&
          <Button onClick={handleConfirmOrder} size={'sm'} variant={'success'}>
            Recieve Order
          </Button>
        }
      </Flex>
    </>
  );
};

export default OrderStatus;