import { Heading } from "@/app/components/Container/Heading";
import OrderCard from "./components/OrderCard";
import { Flex } from "@/app/components/Container/Flex";
import { getOrderProducts } from "@/app/utils/queryDb";
import StatusOrderWrapper from "@/app/components/Container/StatusOrderWrapper";
import { Transparent } from "@/app/components/Container/Transparent";
import { Suspense } from "react";
import OrderCardSkeleton from "@/app/components/Skeleton/OrderCardSkeleton";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {

  const allOrder = await getOrderProducts();
  const sortedData = allOrder.sort((a, b) => (b.id) - (a.id));
  let filteredOrders = sortedData;
  if (searchParams.status) {
    filteredOrders = sortedData.filter((order) => order.status === searchParams.status);
  }

  return (
    <>
      {allOrder.length === 0
        ? <Transparent>
          <span className="loading loading-spinner loading-lg"></span>
        </Transparent>
        
        : <>
          <Heading fs={'xl2'} className="mx-4 lg:mx-0">Order List</Heading>
          <Flex align={'iCenter'} className="px-4 lg:px-0 gap-3">
            <Heading variant={'five'}>Status</Heading>
            <div className=" stats">
              <Flex align={'iCenter'} className="gap-3 breadcrumbs">
                <StatusOrderWrapper
                  status={searchParams.status}
                />
              </Flex>
            </div>
          </Flex>
          <ul className="px-4 lg:px-0 flex flex-col gap-5">
            {filteredOrders?.map((order, index) => (
              <li key={order.id}>
                <Suspense fallback={<OrderCardSkeleton variant="variant2" />}>
                <OrderCard
                  orderItem={order}
                />
                </Suspense>
              </li>
            ))
            }
          </ul>
        </>
      }

    </>
  );
};

export default Page;