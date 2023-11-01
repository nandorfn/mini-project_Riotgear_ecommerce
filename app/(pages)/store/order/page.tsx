import Link from "next/link";
import HistoryOrderCard from "@/app/components/Card/HistoryOrderCard";
import Colapse from "@/app/components/Container/Colapse";
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import { Text } from "@/app/components/Container/Text";
import { checkUserLogin } from "@/app/utils/auth";
import { getUserOrder } from "@/app/utils/queryDb";
import OrderStatus from "./components/OrderStatus";
import StatusOrderWrapper from "@/app/components/Container/StatusOrderWrapper";
import { InfoStatus } from "@/app/components/Container/InfoStatus";
import CollapseDetails from "./components/CollapseDetails";
import WrongCondition from "@/app/components/404/WrongCondition";
import { Suspense } from "react";
import OrderCardSkeleton from "@/app/components/Skeleton/OrderCardSkeleton";

type OrderItem = {
  id: number,
  orderId: string,
  productId: string,
  quantity: number,
  createdAt: Date,
  updatedAt: Date,
  productName: string,
  productPrice: number,
  productImgLink: string,
  paymentMethod: string,
  status: string,
  orderDate: Date
}


const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const user = await checkUserLogin();
  const allOrder = await getUserOrder(user?.userId);
  let filteredOrders = allOrder;
  if (searchParams.status && allOrder) {
    filteredOrders = allOrder.filter((order) => order.status === searchParams.status);
  }


  return (
    <>
      <main className="px-3 min-h-[74vh]">
        <div className="text-base text-base-300 breadcrumbs">
          <ul>
            <li><Link href={'/'}>RIOTGEAR</Link></li>
            <li><Link href={'/store'}>Store</Link></li>
          </ul>
        </div>
        <Heading variant={'fourthRwd'} className="md:mb-6">YOUR ORDER</Heading>
        <Flex align={'iCenter'} className=" lg:px-0 my-4 gap-3">
          <Heading variant={'five'}>Status</Heading>
          <div className="stats">
            <Flex align={'iCenter'} className="gap-3 breadcrumbs">
              <StatusOrderWrapper
                status={searchParams.status}
              />
            </Flex>
          </div>
        </Flex>
        {!user &&
          <WrongCondition
            text={'You must be logged in, to view order history'}
            link={'/login'}
            labelBtn={'LOGIN TO ACCESS ORDER HISTORY'} />
        }
        {filteredOrders?.length === 0
          ? <WrongCondition
            text={'Your Have No Orders At This Status.'}
            link={'/store'}
            labelBtn={'CONTINUE SHOPPING'} />

          : filteredOrders?.map((order: any, index: number) => {
            const inv = order.orderId.toUpperCase().split('-').join('').replace(/,/g, '');
            const date = order.createdAt.toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })
            let subTotal = 0;
            order.orderItem.forEach((data: any) => {
              if (data.productPrice) {
                const total = data.quantity * data.productPrice;
                subTotal += total;
              }
            })

            return (
              <Flex variant={'col'} className="shadow-md rounded-lg mb-5 relative" key={index}>
                <Flex align={'iCenter'} className="justify-between pt-2 px-5 mb-2">
                  <Flex variant={'colToRow'} className="md:gap-5 w-4/5">
                    <p className="text-success text-sm md:text-base font-medium truncate pe-3 md:pe-0">{`INV/${inv}`}</p>
                    <p className="text-xs md:text-base text-base-300">{date}</p>
                  </Flex>
                  <InfoStatus
                    variant={'rwd'}
                    className="w-auto"
                    status={order.status}
                  />
                </Flex>
                <Colapse>
                  {order.orderItem.map((item: OrderItem, index: number) => (
                    <Suspense key={item.id} fallback={<OrderCardSkeleton variant="variant1" />}>
                      {index === 0 && (
                        <HistoryOrderCard
                          img={item.productImgLink}
                          name={item.productName}
                          quantity={item.quantity}
                          price={item.productPrice}
                          total={subTotal}
                          collapse={<CollapseDetails data={order.orderItem} />}
                        >
                          <>
                            <div className="divider divider-horizontal"></div>
                            <Flex variant={'col'}>
                              <Heading className="text-base md:text-lg">Total</Heading>
                              <Text bold={'medium'} className="text-error text-base md:text-lg">{`Rp${subTotal?.toLocaleString('ID-id')}`}</Text>
                            </Flex>
                          </>
                        </HistoryOrderCard>
                      )}
                    </Suspense>
                  ))}
                  {order.orderItem.map((item: OrderItem, index: number) => (
                    <Suspense key={item.id} fallback={<OrderCardSkeleton variant="variant1" />}>
                      <div className="ms-1">
                        {index > 0 && (
                          <HistoryOrderCard
                            img={item.productImgLink}
                            name={item.productName}
                            quantity={item.quantity}
                            price={item.productPrice}
                            total={subTotal}
                          />
                        )}
                      </div>
                    </Suspense>

                  ))}
                </Colapse>
                <OrderStatus
                  order={order}
                />
              </Flex>
            )
          })

        }
      </main>
    </>
  );
};

export default Page;