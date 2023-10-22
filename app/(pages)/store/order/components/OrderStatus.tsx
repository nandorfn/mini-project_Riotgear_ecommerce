'use client'
import { Button } from "@/app/components/Button/Button";
import { Flex } from "@/app/components/Container/Flex";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const OrderStatus = ({order}: {order: any}) => {
  const [orderItem, setOrderItem] = useState(order);
  const handleConfirmOrder = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = {
      orderId: order.orderId,
      status: 'Delivered'
    }
    await axios.patch(`/api/order`, data)
    .then((res) => {
      setOrderItem({
        ...order,
        status: res.data.status
      })
    } )
  }

  return (
    <>
      <Flex variant={'row'} className="absolute z-30 end-5 bottom-5 gap-5 justify-end">
        <Link href={`/store/payment?orderId=${orderItem.orderId}`}>
          <Button size={'sm'} >View Transaction Details</Button>
        </Link>
        {orderItem.status === 'Shipped' &&
          <Button onClick={handleConfirmOrder} size={'sm'} variant={'success'}>
            Recieve Order
          </Button>
        }
      </Flex>
    </>
  );
};

export default OrderStatus;