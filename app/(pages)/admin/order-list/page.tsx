import { Heading } from "@/app/components/Container/Heading";
import OrderCard from "./components/OrderCard";
import { Flex } from "@/app/components/Container/Flex";
import { Button } from "@/app/components/Button/Button";
import Link from "next/link";
import { getOrderProducts } from "@/app/utils/queryDb";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {

  const allOrder = await getOrderProducts()
  console.log(allOrder);
  let filteredOrders = allOrder;
  if (searchParams.status) {
    filteredOrders = allOrder.filter((order) => order.status === searchParams.status);
  }

  const statusOptions = [
    { value: '', label: 'All Orders' },
    { value: 'Ordered', label: 'Ordered' },
    { value: 'InProgress', label: 'In Progress' },
    { value: 'Shipped', label: 'Shipped' },
    { value: 'Delivered', label: 'Delivered' },
    { value: 'Cancelled', label: 'Cancelled' },
    { value: 'Completed', label: 'Completed' },
  ];
  return (
    <>
      <Heading fs={'xl2'}>Order List</Heading>
      <Flex align={'iCenter'} className="my-5 gap-3 breadcrumbs">
        <Heading variant={'five'}>Status</Heading>
        {statusOptions.map((option) => (
          <Link href={`?status=${option.value}`} key={option.value}>
            <Button
              variant={'link'}
              className={searchParams.status === option.value ? 'border-success text-success' : ''}
            >
              {option.label}
            </Button>
          </Link>
        ))}
      </Flex>
      <ul className="px-4 lg:px-0 flex flex-col gap-5">
        {filteredOrders?.map((order) => (
          <li key={order.id}>
            <OrderCard
              order={order}
            />
          </li>
        ))
        }
      </ul>
    </>
  );
};

export default Page;