import { Button } from "@/app/components/Button/Button";
import HistoryOrderCard from "@/app/components/Card/HistoryOrderCard";
import Colapse from "@/app/components/Container/Colapse";
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import { Text } from "@/app/components/Container/Text";
import { checkUserLogin } from "@/app/utils/auth";
import { getUserOrder } from "@/app/utils/queryDb";
import Link from "next/link";
import OrderStatus from "./components/OrderStatus";
import StatusOrderWrapper from "@/app/components/Container/StatusOrderWrapper";
import { InfoStatus } from "@/app/components/Container/InfoStatus";
import CollapseDetails from "./components/CollapseDetails";


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
          <div className=" stats">
            <Flex align={'iCenter'} className="gap-3 breadcrumbs">
              <StatusOrderWrapper
                status={searchParams.status}
              />
            </Flex>
          </div>
        </Flex>

        {filteredOrders?.length === 0
          ? <Flex variant={'col'} align={'center'} className="h-[60vh] gap-5">
              <Text fs={'xl'}>Your Have No Purchase History.</Text>
              <Link href={'/store'}>
                <Button variant={'black'}>CONTINUE SHOPPING</Button>
              </Link>
            </Flex>

          : filteredOrders?.map((order, index) => {
            const inv = order.orderId.toUpperCase().split('-').join('').replace(/,/g, '');
            const date = order.createdAt.toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })
            let subTotal = 0;
            order.orderItem.forEach((data) => {
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
                  {order.orderItem.map((item, index: number) => (
                    <div key={item.id}>
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
                    </div>
                  ))}
                  {order.orderItem.map((item, index: number) => (
                    <div className="ms-1" key={item.id}>
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