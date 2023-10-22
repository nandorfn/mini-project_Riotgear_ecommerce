import { Heading } from "@/app/components/Container/Heading";
import OrderCard from "./components/OrderCard";
import { Flex } from "@/app/components/Container/Flex";
import { getOrderProducts } from "@/app/utils/queryDb";
import StatusOrderWrapper from "@/app/components/Container/StatusOrderWrapper";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {

  const allOrder = await getOrderProducts()
  let filteredOrders = allOrder;
  if (searchParams.status) {
    filteredOrders = allOrder.filter((order) => order.status === searchParams.status);
  }

  return (
    <>
      <Heading fs={'xl2'}>Order List</Heading>
      <Flex align={'iCenter'} className="gap-3">
        <Heading variant={'five'}>Status</Heading>
        <StatusOrderWrapper 
          status={searchParams.status}
        />
      </Flex>
      <ul className="px-4 lg:px-0 flex flex-col gap-5">
        {filteredOrders?.map((order) => (
          <li key={order.id}>
            <OrderCard
              orderItem={order}
            />
          </li>
        ))
        }
      </ul>
    </>
  );
};

export default Page;