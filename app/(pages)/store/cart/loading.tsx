import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";

export default function Loading() {
  let data: number[] = []
  for (let i = 0; i <= 4; i++) {
    data.push(i)
  }

  return (
    <>
      <main className="px-3">
        <div className="text-base text-base-300 breadcrumbs">
          <ul>
            <li><Link href={'/'}>RIOTGEAR</Link></li>
            <li><Link href={'/store'}>Store</Link></li>
            <li><Link href={`/store/cart`}>Cart</Link></li>
          </ul>
        </div>

        <Heading variant={'fourthRwd'} className=" mb-5 md:mb-10">SHOPPING CART</Heading>
        <Flex variant={'colToRow'} className="gap-10">
          <Flex variant={'col'} align={'between'} className="w-full md:w-2/3 gap-5">
            {data?.map(item => (
              <article key={item} className="flex gap-3 flex-row relative h-fit">
                <div className="w-1/3 h-[150px] md:h-[190px]">
                  <Skeleton height="100%" width="100%" containerClassName="flex-1" />
                </div>
                <Flex variant={'col'} align={'between'} className="w-2/3 ">
                  <Flex variant={'col'}>
                    <Skeleton height={20} containerClassName="flex-1" />
                    <Skeleton height={20} count={2} width={250} containerClassName="flex-1" />
                  </Flex>

                  <Flex variant={'col'}>
                    <Skeleton height={20} count={2} width={200} />
                    <Skeleton height={20} width={150} />
                  </Flex>
                </Flex>
              </article>
            ))
            }
          </Flex>

          <Flex variant={'col'} className="w-full md:w-1/3 gap-5 ">
            <Flex variant={'col'} className="bg-accent px-3 py-5 gap-4 rounded-lg">
              <Skeleton height={20} containerClassName="flex-1" />
              <Skeleton height={20} containerClassName="flex-1" />
              <Skeleton height={20} containerClassName="flex-1" />
              <Skeleton height={20} containerClassName="flex-1" />
            </Flex>

            <Flex align={'between'} className="border-y-2 py-2 justify-between cursor-pointer">
              <figure className="flex items-center gap-3">
                <Skeleton height={26} width={26} containerClassName="flex-1" />
                <p>Coupon</p>
              </figure>
            </Flex>

            <Flex variant={'col'}>
              <Heading>TERMS OF USE</Heading>
              <p>By clicking the checkout button you agree to our terms and conditions</p>
            </Flex>

            <Flex variant={'col'} className="gap-3">
              <Skeleton height={30} count={2} containerClassName="flex-1" />
            </Flex>
          </Flex>
        </Flex>

      </main>
    </>
  )
}