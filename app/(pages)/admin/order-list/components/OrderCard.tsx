'use client'
import { Button } from "@/app/components/Button/Button";
import HistoryOrderCard from "@/app/components/Card/HistoryOrderCard";
import Collapse from "@/app/components/Container/Colapse";
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import { checkSubtotal } from "@/app/utils/utils";
type order = {
  order: any
}

const OrderCard = ({ order }: order) => {
  let { subTotal } = checkSubtotal(order.orderItems);
  let date = order.createdAt.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }) 
  return (
    <>
      <Flex variant={'col'} className=" border-[1px] rounded-xl shadow-sm gap-3 pb-4">
        <Flex className="gap-3 border-b py-2 px-4 rounded-t-xl bg-base-200">
          <Flex variant={'row'} className="gap-3">
            <p className="font-medium text-success">{order.id}</p>
            <p className="font-medium">{`(${order.address.name})`}</p>
            <p className="text-base-300">{date}</p>
          </Flex>
          <p className=" text-warning px-4 font-medium bg-yellow-200 rounded-md">{order.status}</p>
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
          <Flex variant={'col'} className="px-3">
            <Heading>Billing Address</Heading>
            <p>{order.address.name}</p>
            <div>
              <p>Kebon Jeruk, Jakarta Barat, Indonesia</p>
            </div>
          </Flex>
          <div className="divider lg:divider-horizontal"></div>
          <Flex variant={'col'} className="gap-3 w-[50%]">
            <Heading>Subtotal</Heading>
            <p className=" text-error text-xl font-medium">{`Rp${subTotal.toLocaleString('ID-id')}`}</p>
            <Flex className="justify-end">
              <Button size={'sm'}>Confirm Order</Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default OrderCard;