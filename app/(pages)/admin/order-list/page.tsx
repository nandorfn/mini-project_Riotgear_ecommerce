import { Heading } from "@/app/components/Container/Heading";
import OrderCard from "./components/OrderCard";
import { Flex } from "@/app/components/Container/Flex";
import { Button } from "@/app/components/Button/Button";
import Link from "next/link";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {

  console.log(searchParams.status);
    return (
        <>
          <Heading fs={'xl2'}>Order List</Heading>
          <Flex align={'iCenter'} className="my-5 gap-3 breadcrumbs">
            <Heading variant={'five'}>Status</Heading>
            <Link href="?status=all-order">
              <Button variant={'link'}>All Orders</Button>
            </Link>
            <Link href={'?status=ordered'}>
              <Button variant={'link'}>Ordered</Button>
            </Link>
            <Link href={'?status=in-progress'}>
              <Button variant={'link'}>In Progress</Button>
            </Link>
            <Link href={'?status=shipped'}>
              <Button variant={'link'}>Shipped</Button>
            </Link>
            <Link href={'?status=delivered'}>
              <Button variant={'link'}>Delivered</Button>
            </Link>
            <Link href={'?status=cancelled'}>
              <Button variant={'link'}>Cancelled</Button>
            </Link>
            <Link href={'?status=completed'}>
              <Button variant={'link'}>Completed</Button>
            </Link>
          </Flex>
          <div className="px-4 lg:px-0">
            <OrderCard />
          </div>
        </>
    );
};

export default Page;