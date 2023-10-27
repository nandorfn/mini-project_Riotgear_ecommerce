'use client'
import HistoryOrderCard from "@/app/components/Card/HistoryOrderCard";
import Collapse from "@/app/components/Container/Colapse";
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import { checkSubtotal } from "@/app/utils/utils";
import axios from "axios";
import StatusBtn from "@/app/components/Button/StatusBtn";

import { useState } from "react";
import { InfoStatus } from "@/app/components/Container/InfoStatus";
import CollapseDetails from "@/app/(pages)/store/order/components/CollapseDetails";
import CartModal from "@/app/components/Modal/CartModal";
type order = {
  orderItem: any
}

const OrderCard = ({ orderItem }: order) => {
  const [order, setOrder] = useState(orderItem);
  let { subTotal } = checkSubtotal(order.orderItems);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  let date = order.createdAt.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  
  
  const handleUpdateStatus = async (e: React.SyntheticEvent) => {
    setLoading(true);
    let { value } = e.target as HTMLButtonElement
    e.preventDefault();
    const data = {
      orderId: order.orderId,
      status: value
    }
    await axios.patch(`/api/orders`, data)
      .then((res) => {
        if (res.status === 200) {
          setOrder({
            ...order,
            status: res.data.status
          })
        }
      })
      .finally(() => {
        setModal(false);
        setLoading(false);
      })
  }

  const {
    name,
    country,
    city,
    district,
    address,
    zip
  } = order.address;

  const billAddress = `${address}, ${district}, ${city}, ${country}, ${zip}`;
  return (
    <>
      {modal &&
        <CartModal
          setModal={setModal}
          modal={modal}
          action={handleUpdateStatus}
          title="REMOVE ORDER"
          btnLeft="YES"
          btnRight="NO">
          <Heading variant={'five'} bold={'normal'}>Are you sure you want to cancel this order?</Heading>
        </CartModal>

      }
      
      
      <Flex variant={'col'} className="border-[1px] rounded-xl shadow-sm gap-3 pb-4">
        <Flex className="gap-3 border-b py-2 px-5 rounded-t-xl bg-base-200">
          <Flex variant={'row'} align={'iCenter'} className="gap-3 w-3/4">
            <p className="md:font-medium text-success">{order.id}</p>
            <Flex variant={'colToRow'} className="md:gap-3">
              <p className="md:font-medium line-clamp-1">{`Roqman Firnando`}</p>
              <p className="text-base-300 text-sm md:text-base">{date}</p>
            </Flex>
          </Flex>
          <div className="w-1/4">
            <InfoStatus
              status={order.status}
            />
          </div>
        </Flex>

        <Flex variant={'colToRow'} className="bg-base-100 md:pe-4">
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
                      collapseAdmin={<CollapseDetails data={order.orderItems} />} />
                  </>
                )}
              </Flex>

            ))}
            {order.orderItems.map((item: any, index: number) => (
              <Flex key={index} className="gap-3 ms-1 -mt-4 md:mt-0">
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
          <Flex variant={'colToRow'} className="px-5 -mt-10 md:mt-0 md:px-0">
            <Flex variant={'col'}>
              <Heading>Billing Address</Heading>
              <p>{name}</p>
              <p>{billAddress}</p>
            </Flex>
            <div className="divider hidden md:block lg:divider-horizontal"></div>
            <Flex variant={'col'} className="gap-3 md:w-[50%] relative">
              <Heading>Subtotal</Heading>
              <p className="text-error md:text-xl font-medium">{`Rp${subTotal.toLocaleString('ID-id')}`}</p>
              <StatusBtn
                loading={loading}
                status={order.status}
                handleUpdateStatus={handleUpdateStatus}
                setModal={setModal}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default OrderCard;