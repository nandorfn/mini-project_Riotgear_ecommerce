import { Button } from "@/app/components/Button/Button";
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";

const OrderCard: React.FC = () => {
  return (
    <>
      <Flex variant={'col'} className=" border-[1px] rounded-xl shadow-sm gap-3 pb-4">
        <Flex className="gap-3 border-b py-2 px-4 rounded-t-xl bg-base-200">
          <Flex variant={'row'} className="gap-3">
            <p className="font-medium text-success">INV/127192192819219KAJSAMD2</p>
            <p className="font-medium">(Firnando)</p>
            <p className="text-base-300">17 Jan 2023</p>
          </Flex>
          <p className=" text-warning px-4 font-medium bg-yellow-200 rounded-md">Ordered</p>
        </Flex>
        <Flex className="bg-base-100 gap-3 px-4">



          <div className="collapse bg-base-200 rounded-none">
            <input type="checkbox" className="peer" />
            <div className="collapse-title p-0 bg-base-100">

              <Flex className="gap-3">
                <div className="bg-green-400 w-[100px] h-[80px]"></div>
                <Flex variant={'col'}>
                  <Heading>Uniqlo Jacket</Heading>
                  <p>Quantity: 2</p>
                  <span>Check another product</span>
                  <p className="text-success">Check another product</p>
                </Flex>
              </Flex>

            </div>
            <div className="collapse-content rounded-none p-0 bg-base-100 flex flex-col gap-4">
              <Flex variant={'row'} className="gap-3">
                <div className="bg-green-400 w-[100px] h-[80px]"></div>
                <Flex variant={'col'}>
                  <Heading>Uniqlo Jacket</Heading>
                  <p>Quantity: 2</p>
                </Flex>
              </Flex>
              <Flex variant={'row'} className="gap-3">
                <div className="bg-green-400 w-[100px] h-[80px]"></div>
                <Flex variant={'col'}>
                  <Heading>Uniqlo Jacket</Heading>
                  <p>Quantity: 2</p>
                </Flex>
              </Flex>
              <Flex variant={'row'} className="gap-3">
                <div className="bg-green-400 w-[100px] h-[80px]"></div>
                <Flex variant={'col'}>
                  <Heading>Uniqlo Jacket</Heading>
                  <p>Quantity: 2</p>
                </Flex>
              </Flex>


            </div>
          </div>


          <Flex variant={'col'} className="px-3">
            <Heading>Billing Address</Heading>
            <p>John Doe</p>
            <p>Kebon Jeruk, Jakarta Barat, Indonesia</p>
          </Flex>
          <Flex variant={'col'} className="gap-3">
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