import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import { Transparent } from "@/app/components/Container/Transparent";
import CheckoutBody from "./components/CheckoutBody";

export default function Loading() {

  return (
    <>
    <Transparent opacity={'op30'} variant={'white'}>
    <span className="loading loading-spinner loading-lg"></span>
    </Transparent>
  
    <main className="px-3">
      <div className="text-base text-base-300 breadcrumbs">
        <ul>
          <li><Link href={'/'}>RIOTGEAR</Link></li>
          <li><Link href={'/store'}>Store</Link></li>
          <li><Link href={`/store/cart`}>Cart</Link></li>
        </ul>
      </div>

      <Heading variant={'fourthRwd'} className=" mb-5 md:mb-10">CHECKOUT</Heading>
      <CheckoutBody userId={'182718218281'}>
        <Flex variant={'col'} className="gap-4 rounded-lg h-fit">
          <Flex variant={'col'} className={"gap-4"}>
            <Heading>{`ORDER SUMMARY`}</Heading>
            <div className="flex w-full justify-between">
              <p>Item(s) subtotal</p>
              <Skeleton height={30} width={260} />
            </div>
            <div className="flex w-full justify-between font-medium">
              <p>SUBTOTAL</p>
              <Skeleton height={30} width={300} />
            </div>
            <div className="flex w-full justify-between">
              <p>VAT included (11%)</p>
              <Skeleton height={30} width={160} />
            </div>
          </Flex>
          <div className="flex w-full justify-between font-medium bg-white py-2   rounded-lg">
            <p>ORDER TOTAL</p>
            <Skeleton height={30} width={300} />
          </div>
        </Flex>

        <div className="divider my-0"></div>
        <Heading>{`ORDER ITEMS`}</Heading>
          <Skeleton height={100} className="me-5" inline count={4} width={100} />
      </CheckoutBody>
    </main>
  </>
  )
}