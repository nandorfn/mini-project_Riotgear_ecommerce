'use client'
import HistoryOrderCard from "@/app/components/Card/HistoryOrderCard";
import Collapse from "@/app/components/Container/Colapse";
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import { checkSubtotal } from "@/app/utils/utils";
import axios from "axios";
import StatusBtn from "../../../../components/Button/StatusBtn";
import InfoStatus from "../../../../components/Container/InfoStatus";
import { useState } from "react";
type order = {
  orderItem: any
}

const OrderCard = ({ orderItem }: order) => {
  const [order, setOrder] = useState(orderItem);
  let { subTotal } = checkSubtotal(order.orderItems);
  let date = order.createdAt.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  const handleUpdateStatus = async (e: React.SyntheticEvent) => {
    let { value } = e.target as HTMLButtonElement
    e.preventDefault();
    const data = {
      orderId: order.orderId,
      status: value
    }
    await axios.patch(`/api/user/${order.userId}/order`, data)
      .then((res) => {
        if (res.status === 200) {
          setOrder({
            ...order,
            status: res.data.status
          })
        }
      })
  }
  return (
    <>
      <Flex variant={'col'} className="border-[1px] rounded-xl shadow-sm gap-3 pb-4">
        <Flex className="gap-3 border-b py-2 px-4 rounded-t-xl bg-base-200">
          <Flex variant={'row'} align={'iCenter'} className="gap-3 w-3/4">
            <p className="md:font-medium text-success">{order.id}</p>
            <p className="md:font-medium line-clamp-1">{`${order.address.name}`}</p>
            <p className="text-base-300 text-xs md:text-base">{date}</p>
          </Flex>
          <div className="w-1/4">
            <InfoStatus
              status={order.status}
            />
          </div>
        </Flex>
        <Flex className="bg-base-100 gap-3 pe-4">
          <Collapse>
            {order.orderItems.map((item: any, index: number) => (
              <Flex key={index} className="gap-3">
                {index === 0 && (
                  <>
                    <HistoryOrderCard
                      isAdmin={true}
                      name={item.productName}
                      quantity={item.quantity}
                      price={item.productPrice}
                      img={order.orderItems[index].productImgLink}
                    >
                      {order.orderItems.length > 1 &&
                        <p className="text-success">{`Check ${order.orderItems.length - 1} other products`}</p>
                      }
                    </HistoryOrderCard>
                  </>
                )}
              </Flex>

            ))}
            {order.orderItems.map((item: any, index: number) => (
              <Flex key={index} className="gap-3 ms-1">
                {index > 0 && (
                  <HistoryOrderCard
                    isAdmin={true}
                    name={item.productName}
                    quantity={item.quantity}
                    price={item.productPrice}
                    img={order.orderItems[index].productImgLink}
                  />
                )}
              </Flex>
            ))}
          </Collapse>
          <div className="divider lg:divider-horizontal"></div>
          <Flex variant={'colToRow'}>
            <Flex variant={'col'} className="md:px-3">
              <Heading>Billing Address</Heading>
              <p>{order.address.name}</p>
              <div>
                <p>Kebon Jeruk, Jakarta Barat, Indonesia</p>
              </div>
            </Flex>
            <div className="divider hidden md:block lg:divider-horizontal"></div>
            <Flex variant={'col'} className="gap-3 md:w-[50%] relative">
              <Heading>Subtotal</Heading>
              <p className="text-error md:text-xl font-medium">{`Rp${subTotal.toLocaleString('ID-id')}`}</p>
              <StatusBtn
                status={order.status}
                handleUpdateStatus={handleUpdateStatus}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default OrderCard;