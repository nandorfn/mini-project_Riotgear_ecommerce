import { Button } from "@/app/components/Button/Button";
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import Image from "next/image";
type order = {
  order: any
}

const OrderCard = ({ order }: order) => {
  return (
    <>
      <Flex variant={'col'} className=" border-[1px] rounded-xl shadow-sm gap-3 pb-4">
        <Flex className="gap-3 border-b py-2 px-4 rounded-t-xl bg-base-200">
          <Flex variant={'row'} className="gap-3">
            <p className="font-medium text-success">{order.id}</p>
            <p className="font-medium">{`(${order.address.name})`}</p>
            <p className="text-base-300">{order.createdAt.toLocaleDateString()}</p>
          </Flex>
          <p className=" text-warning px-4 font-medium bg-yellow-200 rounded-md">{order.status}</p>
        </Flex>
        <Flex className="bg-base-100 gap-3 px-4">



          <div className="collapse bg-base-200 rounded-none">
            <input type="checkbox" className="peer" />
            <div className="collapse-title p-0 bg-base-100">
              {order.orderItems.map((item: any, index: number) => (
                <Flex key={index} className="gap-3">
                  {index === 0 && (
                    <>
                      <Image
                        src={order.orderItems[index].product.productImgLink}
                        width={100}
                        height={100}
                        alt="Products Image"
                      />
                      <Flex variant={'col'}>
                        <Heading>{item.product.productName}</Heading>
                        <p>{item.quantity}</p>
                        {order.orderItems.length > 1 &&
                          <p className="text-success">{`Check ${order.orderItems.length - 1} other products`}</p>
                        }
                      </Flex>
                    </>
                  )}
                </Flex>

              ))}

            </div>
            <div className="collapse-content rounded-none p-0 bg-base-100 flex flex-col gap-4">

              {order.orderItems.map((item: any, index: number) => (
                <Flex key={index} className="gap-3">
                  {index > 0 && (
                    <>
                      <Image
                        src={order.orderItems[index].product.productImgLink}
                        width={100}
                        height={100}
                        alt="Products Image"
                      />
                      <Flex variant={'col'}>
                        <Heading>{item.product.productName}</Heading>
                        <p>{item.quantity}</p>
                      </Flex>
                    </>
                  )}
                </Flex>

              ))}
            </div>
          </div>

          <div className="divider lg:divider-horizontal"></div> 

          <Flex variant={'col'} className="px-3">
            <Heading>Billing Address</Heading>
            <p>John Doe</p>
            <p>Kebon Jeruk, Jakarta Barat, Indonesia</p>
          </Flex>
          <div className="divider lg:divider-horizontal"></div> 
          <Flex variant={'col'} className="gap-3 w-[50%]">
            <Heading>Subtotal</Heading>
            <p className=" text-error text-xl font-medium">Rp100.856.000</p>
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