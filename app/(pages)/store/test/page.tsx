import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import CheckoutBody from "../checkout/components/CheckoutBody";
import OrderSummary from "../checkout/components/OrderSummary";
import { Transparent } from "@/app/components/Container/Transparent";
import { Text } from "@/app/components/Container/Text";
import StatusOrderWrapper from "@/app/components/Container/StatusOrderWrapper";


export default function Loading() {


  let data: number[] = []
  for (let i = 0; i <= 4; i++) {
    data.push(i)
  }

  return (
    <>
          <main className="px-3 md:h-[74vh]">
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
                status={''}
              />
            </Flex>
          </div>
        </Flex>
        
        <Transparent opacity={'op30'} variant={'white'}>
        <span className="loading loading-spinner loading-lg"></span>
        </Transparent>
      </main>
    </>
  )
}