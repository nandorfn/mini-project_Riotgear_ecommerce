'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { DataProductProps, cart } from "@/app/utils/types";
import { Button } from "@/app/components/Button/Button";
import CartCard from "@/app/components/Card/CartCard";
import OrderCard from "@/app/components/Card/OrderCard";
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";

import couponIcon from '@/app/assets/icon/coupon.svg'
import arrowRight from '@/app/assets/icon/arrow-right.svg'
import { Text } from "@/app/components/Container/Text";

const DataProducts = ({ products }: DataProductProps) => {
  const [productCart, setProductCard] = useState<cart[]>(products);
  let subTotal = 0;
  productCart.forEach((product) => {
    if (product.productInfo.productStock === 0) {
      subTotal += 0;
    } else {
      const total = product.quantity * product.productInfo.productPrice;
      subTotal += total;
    }
  })
  let tax = subTotal * 11 / 100;
  
  return (
    <>
      {
        productCart.length > 0
          ?
          <Flex className="gap-10 flex-col lg:flex-row lg:min-h-[60vh]">
            <Flex variant={'col'} className="w-full lg:w-2/3 gap-5">
              {productCart?.map((data: cart) => (
                <CartCard
                  setProductCart={setProductCard}
                  productCart={productCart}
                  key={data.id}
                  data={data} />
              ))
              }
            </Flex>

            <Flex variant={'col'} className="w-full lg:w-1/3 gap-5">
              <OrderCard
                style1="bg-accent py-5 px-3"
                style2="px-2"
                style3="px-2"
                subTotal={subTotal}
                tax={tax}
                length={productCart.length}
              />

              <Flex align={'between'} className="border-y-2 py-2 justify-between cursor-pointer">
                <figure className="flex items-center gap-3">
                  <Image width={24} src={couponIcon} alt="coupon icon" />
                  <p>Coupon</p>
                </figure>
                <Image width={20} src={arrowRight} alt="arrow icon" />
              </Flex>

              <Flex variant={'col'}>
                <Heading>TERMS OF USE</Heading>
                <p>By clicking the checkout button you agree to our terms and conditions</p>
              </Flex>


              <Flex variant={'col'} className="gap-3">
                <Link href={'/store/checkout'}>
                  <Button variant={'red'} size={'full'} className="text-white">CHECKOUT</Button>
                </Link>
                <Link href={'/store'}>
                  <Button variant={'white'} size={'full'}>CONTINUE SHOPPING</Button>
                </Link>
              </Flex>
            </Flex>
          </Flex>
          :
          <Flex variant={'col'} align={'center'} className="h-[60vh] gap-5">
            <Text fs={'xl'}>Your cart is currently empty.</Text>
            <Link href={'/store'}>
              <Button variant={'black'}>CONTINUE SHOPPING</Button>
            </Link>
          </Flex>

      }
    </>
  );
};

export default DataProducts;