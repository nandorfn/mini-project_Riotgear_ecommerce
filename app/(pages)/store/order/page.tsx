import { Button } from "@/app/components/Button/Button";
import HistoryOrderCard from "@/app/components/Card/HistoryOrderCard";
import Colapse from "@/app/components/Container/Colapse";
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import { Text } from "@/app/components/Container/Text";
import { checkUserLogin } from "@/app/utils/auth";
import { getUserOrder } from "@/app/utils/queryDb";
import Link from "next/link";


const Page: React.FC = async () => {
  const user = await checkUserLogin();
  const allOrder = await getUserOrder(user?.userId);
    
  return (
    <>
      <main className="px-3 min-h-[74vh]">
        <div className="text-base text-base-300 breadcrumbs">
          <ul>
            <li><Link href={'/'}>RIOTGEAR</Link></li>
            <li><Link href={'/store'}>Store</Link></li>
          </ul>
        </div>

        <Heading variant={'fourthRwd'} className="mb-5 md:mb-10">YOUR ORDER</Heading>
        {allOrder
          ? allOrder.map((order, index) => {
            const inv = order.orderId.toUpperCase().split('-')
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
                <Flex align={'iCenter'} className="justify-between pt-2 px-5">
                  <Flex variant={'row'} className="gap-5">
                    <p className="text-success font-medium">{`INV/${inv}`}</p>
                    <p>{date}</p>
                  </Flex>
                  <Text variant={'status'} bold={'medium'}>{order.status}</Text>
                </Flex>
                <Colapse>
                  {order.orderItem.map((item, index: number) => (
                    <div key={item.id}>
                      {index === 0 && (
                          <HistoryOrderCard
                            isAdmin={false}
                            img={item.productImgLink}
                            name={item.productName}
                            quantity={item.quantity}
                            price={item.productPrice}
                            total={subTotal}
                          >
                            {order.orderItem.length > 1 &&
                              <p className="text-success">
                                {`Check ${order.orderItem.length - 1} other products`}
                              </p>
                            }
                          </HistoryOrderCard>
                      )}
                    </div>
                  ))}
                  {order.orderItem.map((item, index: number) => (
                    <div className="ms-1" key={item.id}>
                      {index > 0 && (
                        <HistoryOrderCard
                          isAdmin={false}
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
                <Link className="absolute z-30 end-5 bottom-5" href={`/store/payment?orderId=${order.orderId}`}>
                  <Button >View Transaction Details</Button>
                </Link>
              </Flex>
            )
          })
          : <Flex variant={'col'} align={'center'} className="h-[60vh] gap-5">
            <Text fs={'xl'}>Your Have No Purchase History.</Text>
            <Link href={'/store'}>
              <Button variant={'black'}>CONTINUE SHOPPING</Button>
            </Link>
          </Flex>
        }
      </main>
    </>
  );
};

export default Page;